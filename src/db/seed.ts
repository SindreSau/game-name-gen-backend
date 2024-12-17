/* eslint-disable no-console */
import { PrismaClient } from '@prisma/client'
import { genders } from './seed/genders'
import { nameComponents } from './seed/nameComponents'
import { styles } from './seed/styles'

const prisma = new PrismaClient()

async function seedStyles() {
  console.log('Seeding styles...')
  return Promise.all(
    styles.map(style =>
      prisma.style.upsert({
        where: { style: style.style },
        update: {},
        create: { style: style.style },
      }),
    ),
  )
}

async function seedGenders() {
  console.log('Seeding genders...')
  return Promise.all(
    genders.map(gender =>
      prisma.gender.upsert({
        where: { gender: gender.gender },
        update: {},
        create: { gender: gender.gender },
      }),
    ),
  )
}

async function seedComponents(
  seededGenders: Awaited<ReturnType<typeof seedGenders>>,
  seededStyles: Awaited<ReturnType<typeof seedStyles>>,
) {
  console.log('Seeding components...')

  // Create maps for looking up IDs
  const genderMap = new Map(seededGenders.map(g => [g.gender, g]))
  const styleMap = new Map(seededStyles.map(s => [s.style, s]))

  return Promise.all(
    nameComponents.map(comp =>
      prisma.nameComponent.upsert({
        where: { component: comp.component },
        update: {
          genders: {
            set: comp.gender.map(g => ({ id: genderMap.get(g)?.id })),
          },
          styles: {
            set: comp.style.map(s => ({ id: styleMap.get(s)?.id })),
          },
        },
        create: {
          component: comp.component,
          genders: {
            connect: comp.gender.map(g => ({ id: genderMap.get(g)?.id })),
          },
          styles: {
            connect: comp.style.map(s => ({ id: styleMap.get(s)?.id })),
          },
        },
      }),
    ),
  )
}

async function main() {
  try {
    const seededStyles = await seedStyles()
    const seededGenders = await seedGenders()
    await seedComponents(seededGenders, seededStyles)

    console.log('✅ Seed completed successfully')
  }
  catch (error) {
    console.error('❌ Error seeding database:', error)
    throw error
  }
}

main()
  .catch((e) => {
    console.error(e)
    // eslint-disable-next-line node/prefer-global/process
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
