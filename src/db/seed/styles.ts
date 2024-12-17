export const styles = [
  // Basic styles
  { style: 'heroic' },
  { style: 'mystical' },
  { style: 'dark' },
  { style: 'noble' },
  { style: 'nature' },
  // Fantasy styles
  { style: 'ethereal' },
  { style: 'elemental' },
  { style: 'celestial' },
  // Sci-fi styles
  { style: 'tech' },
  { style: 'cyber' },
  { style: 'cosmic' },
  // Medieval styles
  { style: 'royal' },
  { style: 'rustic' },
  { style: 'military' },
] as const

export type StyleEnum = typeof styles[number]['style']
