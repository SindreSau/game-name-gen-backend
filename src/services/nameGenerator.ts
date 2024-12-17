// src/services/nameGenerator.ts
import type { GenderEnum } from '@/db/seed/genders'
import type { StyleEnum } from '@/db/seed/styles'
import type { Gender, NameComponent, PrismaClient, Style } from '@prisma/client'

export type CaseStyle = 'PascalCase' | 'kebab-case' | 'camelCase' | 'snake_case' | 'CONSTANT_CASE'

interface GenerateNameOptions {
  styles?: StyleEnum[] // Optional specific styles to use
  gender?: GenderEnum // Optional gender preference
  numParts?: number // How many parts in the name (default 2)
  unique?: boolean // Ensure parts don't repeat (default true)
  caseStyle?: CaseStyle // How the name should be formatted/assembled
}

type ComponentWithRelations = NameComponent & {
  genders: Gender[]
  styles: Style[]
}

export interface GeneratedName {
  name: string
  components: {
    id: string
    component: string
  }[]
  uniqueCode?: string // Include the unique code if it was added
}

export class NameGenerator {
  constructor(private prisma: PrismaClient) {}

  async generateName(options: GenerateNameOptions = {}): Promise<GeneratedName> {
    const {
      styles = [],
      gender = 'neutral',
      numParts = 2,
      unique = false,
      caseStyle = 'PascalCase',
    } = options

    const components = await this.getFilteredComponents(styles, gender)

    if (components.length === 0) {
      throw new Error('No components found matching the criteria')
    }

    const selectedParts = this.selectComponents(components, numParts, gender)
    const uniqueCode = unique ? this.generateUniqueCode() : undefined
    const name = this.assembleName(selectedParts, caseStyle, uniqueCode)

    return {
      name,
      components: selectedParts.map(part => ({
        id: part.id,
        component: part.component,
      })),
      uniqueCode,
    }
  }

  private async getFilteredComponents(styles: string[], gender: string) {
    // First, get components that match the specified gender
    const genderSpecificComponents = await this.prisma.nameComponent.findMany({
      where: {
        styles: {
          some: {
            style: {
              in: styles,
            },
          },
        },
        genders: {
          some: {
            gender: {
              equals: gender,
            },
          },
        },
      },
      include: {
        styles: true,
        genders: true,
      },
    })

    // Then get neutral components if we need more options
    if (gender !== 'neutral') {
      const neutralComponents = await this.prisma.nameComponent.findMany({
        where: {
          styles: {
            some: {
              style: {
                in: styles,
              },
            },
          },
          genders: {
            some: {
              gender: {
                equals: 'neutral',
              },
            },
          },
        },
        include: {
          styles: true,
          genders: true,
        },
      })

      return [...genderSpecificComponents, ...neutralComponents]
    }

    return genderSpecificComponents
  }

  private selectComponents(
    components: ComponentWithRelations[],
    count: number,
    gender?: string,
  ): ComponentWithRelations[] {
    if (components.length < count) {
      throw new Error(`Not enough unique components available. Requested ${count} but only found ${components.length} components`)
    }

    const selected: ComponentWithRelations[] = []
    const available = [...components]

    // If a specific gender is requested (not neutral), ensure at least one component matches
    if (gender && gender !== 'neutral') {
      const genderSpecific = available.filter(comp =>
        comp.genders.some(g => g.gender === gender),
      )

      if (genderSpecific.length > 0) {
      // Add one gender-specific component first
        const randomIndex = Math.floor(Math.random() * genderSpecific.length)
        const selectedGenderComponent = genderSpecific[randomIndex]
        selected.push(selectedGenderComponent)

        // Remove the selected component from available pool
        const componentIndex = available.findIndex(c => c.id === selectedGenderComponent.id)
        available.splice(componentIndex, 1)
      }
    }

    // Fill the rest with any available components (could be neutral or gender-specific)
    while (selected.length < count && available.length > 0) {
      const index = Math.floor(Math.random() * available.length)
      selected.push(available[index])
      available.splice(index, 1)
    }

    // Shuffle the final array to ensure the gender-specific component isn't always first
    return selected.sort(() => Math.random() - 0.5)
  }

  private assembleName(
    components: NameComponent[],
    caseStyle: CaseStyle,
    uniqueCode?: string,
  ): string {
    const parts = components.map(c => c.component.toLowerCase())
    const baseName = this.applyCase(parts, caseStyle)

    if (uniqueCode) {
      return this.appendUniqueCode(baseName, uniqueCode, caseStyle)
    }

    return baseName
  }

  private applyCase(parts: string[], caseStyle: CaseStyle): string {
    switch (caseStyle) {
      case 'PascalCase':
        return parts
          .map(part => part.charAt(0).toUpperCase() + part.slice(1))
          .join('')

      case 'camelCase': {
        const [first, ...rest] = parts
        return first + rest
          .map(part => part.charAt(0).toUpperCase() + part.slice(1))
          .join('')
      }

      case 'kebab-case':
        return parts.join('-')

      case 'snake_case':
        return parts.join('_')

      case 'CONSTANT_CASE':
        return parts.join('_').toUpperCase()

      default:
        throw new Error(`Unsupported case style: ${caseStyle}`)
    }
  }

  private generateUniqueCode(): string {
    // Generate a random number between 100 and 999
    return Math.floor(Math.random() * 900 + 100).toString()
  }

  private appendUniqueCode(name: string, code: string, caseStyle: CaseStyle): string {
    switch (caseStyle) {
      case 'kebab-case':
        return `${name}-${code}`
      case 'snake_case':
        return `${name}_${code}`
      case 'CONSTANT_CASE':
        return `${name}_${code}`
      default:
        // For PascalCase and camelCase, just append the number
        return `${name}${code}`
    }
  }

  // Additional utility methods
  async getAvailableStyles(): Promise<Style[]> {
    return this.prisma.style.findMany()
  }

  async getAvailableGenders(): Promise<Gender[]> {
    return this.prisma.gender.findMany()
  }

  async generateSimilarNames(
    originalName: GeneratedName,
    count: number = 10,
  ): Promise<GeneratedName[]> {
    const results: GeneratedName[] = []
    const caseStyle = this.detectCaseStyle(originalName.name)

    // Get original components with their styles
    const originalComponentIds = originalName.components.map(c => c.id)
    const originalComponents = await this.prisma.nameComponent.findMany({
      where: {
        id: {
          in: originalComponentIds,
        },
      },
      include: {
        styles: true,
        genders: true,
      },
    })

    // Collect styles and genders for finding similar components
    const styles = new Set<string>()
    const genders = new Set<string>()
    originalComponents.forEach((comp) => {
      comp.styles.forEach(style => styles.add(style.style))
      comp.genders.forEach(gender => genders.add(gender.gender))
    })

    // Get similar components
    const similarComponents = await this.prisma.nameComponent.findMany({
      where: {
        AND: [
          {
            id: {
              notIn: originalComponentIds,
            },
          },
          {
            styles: {
              some: {
                style: {
                  in: Array.from(styles),
                },
              },
            },
          },
          {
            genders: {
              some: {
                gender: {
                  in: Array.from(genders),
                },
              },
            },
          },
        ],
      },
      include: {
        styles: true,
        genders: true,
      },
    })

    const numParts = originalComponents.length

    // Step 1: Add all possible permutations of original components
    if (numParts > 1) {
      const permutations = this.generatePermutations(originalComponents)
      for (const perm of permutations) {
        if (results.length >= count)
          break

        // Skip if it's the same as the original order
        if (this.isSameComponentOrder(perm, originalComponents))
          continue

        results.push({
          name: this.assembleName(perm, caseStyle, originalName.uniqueCode),
          components: perm.map(p => ({ id: p.id, component: p.component })),
          uniqueCode: originalName.uniqueCode,
        })
      }
    }

    // Step 2: Generate variations by replacing one component at a time
    for (let i = 0; i < originalComponents.length && results.length < count; i++) {
      const componentToReplace = originalComponents[i]

      // Find similar components for this position
      const matchingSimilar = similarComponents.filter(sc =>
        sc.styles.some(s => componentToReplace.styles.some(os => os.style === s.style)),
      )

      // Create variations by replacing this component
      for (const similar of matchingSimilar) {
        if (results.length >= count)
          break

        const newComponents = [...originalComponents]
        newComponents[i] = similar

        results.push({
          name: this.assembleName(newComponents, caseStyle, originalName.uniqueCode),
          components: newComponents.map(p => ({ id: p.id, component: p.component })),
          uniqueCode: originalName.uniqueCode,
        })
      }
    }

    // Step 3: Fill remaining slots with more random combinations
    while (results.length < count) {
      const numOriginalToKeep = Math.max(1, Math.floor(numParts / 2))
      const keptOriginal = this.selectRandomComponents(originalComponents, numOriginalToKeep)
      const numNewNeeded = numParts - numOriginalToKeep

      const newComponents = this.selectRandomComponents(similarComponents, numNewNeeded)
      const allComponents = [...keptOriginal, ...newComponents].sort(() => Math.random() - 0.5)

      results.push({
        name: this.assembleName(allComponents, caseStyle, originalName.uniqueCode),
        components: allComponents.map(p => ({ id: p.id, component: p.component })),
        uniqueCode: originalName.uniqueCode,
      })
    }

    return results
  }

  private generatePermutations(components: NameComponent[]): NameComponent[][] {
    if (components.length <= 1)
      return [components]

    const result: NameComponent[][] = []
    for (let i = 0; i < components.length; i++) {
      const current = components[i]
      const remaining = [...components.slice(0, i), ...components.slice(i + 1)]
      const permutations = this.generatePermutations(remaining)

      for (const perm of permutations) {
        result.push([current, ...perm])
      }
    }

    return result
  }

  private isSameComponentOrder(arr1: NameComponent[], arr2: NameComponent[]): boolean {
    if (arr1.length !== arr2.length)
      return false
    return arr1.every((comp, i) => comp.id === arr2[i].id)
  }

  private selectRandomComponents(components: NameComponent[], count: number): NameComponent[] {
    const shuffled = [...components].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, count)
  }

  private detectCaseStyle(name: string): CaseStyle {
    if (name.includes('-'))
      return 'kebab-case'
    if (name.includes('_')) {
      return name === name.toUpperCase() ? 'CONSTANT_CASE' : 'snake_case'
    }
    return name[0] === name[0].toLowerCase() ? 'camelCase' : 'PascalCase'
  }
}
