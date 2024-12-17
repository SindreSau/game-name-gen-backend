import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create base genders
  const genders = await Promise.all([
    prisma.genderAssociation.create({ data: { gender: 'masculine' } }),
    prisma.genderAssociation.create({ data: { gender: 'feminine' } }),
    prisma.genderAssociation.create({ data: { gender: 'neutral' } }),
  ])

  // Create base styles
  const styles = await Promise.all([
    prisma.style.create({ data: { style: 'heroic' } }),
    prisma.style.create({ data: { style: 'mystical' } }),
    prisma.style.create({ data: { style: 'dark' } }),
    prisma.style.create({ data: { style: 'noble' } }),
    prisma.style.create({ data: { style: 'nature' } }),
  ])

  // Create base genres
  const baseGenres = await Promise.all([
    prisma.genre.create({
      data: {
        name: 'fantasy',
        description: 'Fantasy-themed names',
        weight: 1.0,
      },
    }),
    prisma.genre.create({
      data: {
        name: 'sci-fi',
        description: 'Science fiction themed names',
        weight: 1.0,
      },
    }),
    prisma.genre.create({
      data: {
        name: 'medieval',
        description: 'Medieval-themed names',
        weight: 1.0,
      },
    }),
    prisma.genre.create({
      data: {
        name: 'mythological',
        description: 'Names from various mythologies',
        weight: 1.0,
      },
    }),
    prisma.genre.create({
      data: {
        name: 'modern',
        description: 'Modern-style names',
        weight: 1.0,
      },
    }),
  ])

  // Create some initial name components
  const components = [
    // Fantasy components
    { component: 'star', styleId: styles[1].id, genderId: genders[2].id, genreIds: [baseGenres[0].id, baseGenres[1].id] },
    { component: 'shadow', styleId: styles[2].id, genderId: genders[2].id, genreIds: [baseGenres[0].id] },
    { component: 'storm', styleId: styles[0].id, genderId: genders[2].id, genreIds: [baseGenres[0].id] },

    // Sci-fi components
    { component: 'nova', styleId: styles[1].id, genderId: genders[1].id, genreIds: [baseGenres[1].id] },
    { component: 'zero', styleId: styles[2].id, genderId: genders[2].id, genreIds: [baseGenres[1].id] },
    { component: 'tech', styleId: styles[0].id, genderId: genders[2].id, genreIds: [baseGenres[1].id] },

    // Medieval components
    { component: 'knight', styleId: styles[0].id, genderId: genders[0].id, genreIds: [baseGenres[2].id] },
    { component: 'crown', styleId: styles[3].id, genderId: genders[2].id, genreIds: [baseGenres[2].id] },
    { component: 'blade', styleId: styles[0].id, genderId: genders[2].id, genreIds: [baseGenres[2].id] },

    // Add more components here...
  ]

  for (const comp of components) {
    await prisma.nameComponent.create({
      data: {
        component: comp.component,
        genderAssociation: {
          connect: { id: comp.genderId },
        },
        styleAssociation: {
          connect: { id: comp.styleId },
        },
        genres: {
          connect: comp.genreIds.map(id => ({ id })),
        },
      },
    })
  }

  // eslint-disable-next-line no-console
  console.log('Seeded database with base data')
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
