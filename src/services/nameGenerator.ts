// src/services/nameGenerator.ts
import type { StyleEnum } from '@/db/seed/styles'
import type { Gender, NameComponent, PrismaClient, Style } from '@prisma/client'

export type CaseStyle = 'PascalCase' | 'kebab-case' | 'camelCase' | 'snake_case' | 'CONSTANT_CASE'

interface GenerateNameOptions {
  styles?: StyleEnum[] // Optional specific styles to use
  gender?: string // Optional gender preference
  numParts?: number // How many parts in the name (default 2)
  unique?: boolean // Ensure parts don't repeat (default true)
  caseStyle?: CaseStyle // How the name should be formatted/assembled
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

    const selectedParts = this.selectComponents(components, numParts)
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
    return this.prisma.nameComponent.findMany({
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
              contains: gender,
            },
          },
        },
      },
      include: {
        styles: true,
        genders: true,
      },
    })
  }

  private selectComponents(components: NameComponent[], count: number): NameComponent[] {
  // Always ensure components are unique within the same name
    if (components.length < count) {
      throw new Error(`Not enough unique components available. Requested ${count} but only found ${components.length} components`)
    }

    const selected: NameComponent[] = []
    const available = [...components]

    while (selected.length < count && available.length > 0) {
      const index = Math.floor(Math.random() * available.length)
      selected.push(available[index])
      // Always remove the used component to prevent duplicates
      available.splice(index, 1)
    }

    return selected
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
}
