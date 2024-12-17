export const styles = [
  // Basic/Universal styles
  { style: 'heroic' }, // Brave, grand
  { style: 'mystical' }, // Magical, mysterious
  { style: 'dark' }, // Shadowy, ominous
  { style: 'noble' }, // Dignified, prestigious
  { style: 'nature' }, // Natural, primal

  // Fantasy styles
  { style: 'ethereal' }, // Light, airy, otherworldly
  { style: 'elemental' }, // Forces of nature
  { style: 'celestial' }, // Heavenly, star-based
  { style: 'arcane' }, // Ancient magic
  { style: 'fey' }, // Fairy-like, whimsical
  { style: 'divine' }, // God-like, holy
  { style: 'eldritch' }, // Strange, cosmic horror

  // Sci-fi styles
  { style: 'tech' }, // Technology-focused
  { style: 'cyber' }, // Cyberpunk
  { style: 'cosmic' }, // Space-themed
  { style: 'synthetic' }, // Artificial, manufactured
  { style: 'quantum' }, // Scientific, physics-based
  { style: 'neo' }, // Modern, futuristic

  // Medieval/Historical styles
  { style: 'royal' }, // Kingly, imperial
  { style: 'rustic' }, // Rural, folksy
  { style: 'military' }, // Martial, warrior-like
  { style: 'ancient' }, // Old, traditional
  { style: 'tribal' }, // Clan-based, primitive
  { style: 'legendary' }, // Mythic, storied

  // Cultural styles
  { style: 'nordic' }, // Viking-inspired
  { style: 'oriental' }, // East Asian inspired
  { style: 'celtic' }, // Celtic mythology
  { style: 'desert' }, // Arabian/desert cultures
  { style: 'tropical' }, // Island/jungle cultures

  // Emotional/Character styles
  { style: 'fierce' }, // Aggressive, strong
  { style: 'wise' }, // Intellectual, sage-like
  { style: 'swift' }, // Quick, agile
  { style: 'mighty' }, // Powerful, strong
  { style: 'subtle' }, // Understated, clever
] as const

export type StyleEnum = typeof styles[number]['style']
