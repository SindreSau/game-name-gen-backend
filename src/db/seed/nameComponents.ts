import type { GenderEnum } from './genders'
import type { GenreEnum } from './genres'
import type { StyleEnum } from './styles'

interface NameComponentSeed {
  component: string
  style: StyleEnum[]
  gender: GenderEnum[]
}

export const nameComponents: NameComponentSeed[] = [
  { component: 'star', style: ['cosmic', 'celestial'], gender: ['neutral', 'feminine'] },
] as const

export type NameComponent = typeof nameComponents[number]
export type NameComponentEnum = keyof NameComponent
