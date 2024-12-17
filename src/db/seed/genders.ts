export const genders = [
  { gender: 'masculine' },
  { gender: 'feminine' },
  { gender: 'neutral' },
] as const

export type GenderEnum = typeof genders[number]['gender']
