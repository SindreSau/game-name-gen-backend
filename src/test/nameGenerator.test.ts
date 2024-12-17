import { NameGenerator } from '@/services/nameGenerator'
/* eslint-disable no-console */
import { PrismaClient } from '@prisma/client'
import { afterAll, beforeAll, expect, test } from 'bun:test'
import chalk from 'chalk'
import { nameComponents } from './../db/seed/nameComponents'

const db = new PrismaClient()

// Set up prisma client
beforeAll(async () => {
  await db.$connect()
})

afterAll(async () => {
  await db.$disconnect()
})

test('fetchComponent', async () => {
  const nameComponent = await db.nameComponent.findFirst()
  console.log(nameComponent)

  expect(nameComponent).toBeTruthy()
})

test('generateName', async () => {
  const nameGenerator = new NameGenerator(db)

  const { name } = await nameGenerator.generateName({
    styles: ['heroic', 'celestial'],
    gender: 'neutral',
    numParts: 2,
  })

  console.log()
  console.log(chalk.bgGreenBright(name))

  expect(name).toBeTruthy()
})

test('generateName with 1 part', async () => {
  const nameGenerator = new NameGenerator(db)

  const { name } = await nameGenerator.generateName({
    styles: ['heroic', 'celestial'],
    numParts: 1,
    unique: true,
  })

  console.log(chalk.bgGreenBright(name))
})

test('generateName with no components', async () => {
  const nameGenerator = new NameGenerator(db)

  // Wrap the async call in an expect that checks for rejection
  await expect(async () => {
    await nameGenerator.generateName({
      styles: ['non', 'existent'],
    })
  }).toThrow('No components found matching the criteria')
})

test('generateName with 3 numParts', async () => {
  const nameGenerator = new NameGenerator(db)

  const { name } = await nameGenerator.generateName({
    styles: ['ancient', 'arcane'],
    numParts: 3,
    caseStyle: 'kebab-case',
    unique: false,
  })

  console.log(chalk.bgGreenBright(name))

  // Make sure the name has 3 components
  expect(name.split('-').length).toBe(3)
})

test('generateName with unique parts', async () => {
  const nameGenerator = new NameGenerator(db)

  for (let i = 0; i < 10; i++) {
    const { name } = await nameGenerator.generateName({
      styles: ['heroic', 'celestial'],
      numParts: 3,
      caseStyle: 'kebab-case',
      unique: false,
    })

    // Make sure the name has 3 components and that they are not the same
    const parts = name.split('-')
    expect(parts.length).toBe(3)
    expect(parts[0]).not.toBe(parts[1])
    expect(parts[0]).not.toBe(parts[2])
    expect(parts[1]).not.toBe(parts[2])
  }
})

test('generateName also returns uniqueCode', async () => {
  const nameGenerator = new NameGenerator(db)

  const { name, uniqueCode } = await nameGenerator.generateName({
    styles: ['heroic', 'celestial'],
    numParts: 2,
    unique: true,
  })

  console.log(chalk.bgGreenBright(name))
  console.log(chalk.bgGreenBright(uniqueCode))

  expect(name).toBeTruthy()
  expect(uniqueCode).toBeTruthy()
})

test('generateName also returns components that were used', async () => {
  const nameGenerator = new NameGenerator(db)

  const { components } = await nameGenerator.generateName({
    styles: ['heroic', 'celestial'],
    numParts: 2,
    unique: true,
  })

  console.log(components)

  expect(components).toBeTruthy()
  expect(components.length).toBe(2)
})
