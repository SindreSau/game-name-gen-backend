import type { GenderEnum } from './genders'
import type { StyleEnum } from './styles'

interface NameComponentSeed {
  component: string
  style: StyleEnum[]
  gender: GenderEnum[]
}

export const nameComponents: NameComponentSeed[] = [
  // Celestial/Ethereal/Divine themed
  {
    component: 'star',
    style: ['celestial', 'ethereal', 'cosmic'],
    gender: ['neutral'],
  },
  {
    component: 'luna',
    style: ['celestial', 'mystical', 'divine'],
    gender: ['feminine'],
  },
  {
    component: 'sol',
    style: ['celestial', 'divine', 'mighty'],
    gender: ['masculine'],
  },
  {
    component: 'nova',
    style: ['celestial', 'cosmic', 'fierce'],
    gender: ['feminine', 'neutral'],
  },
  {
    component: 'astra',
    style: ['celestial', 'ethereal', 'mystical'],
    gender: ['feminine'],
  },

  // Tech/Cyber/Synthetic
  {
    component: 'byte',
    style: ['tech', 'cyber', 'synthetic'],
    gender: ['neutral'],
  },
  {
    component: 'nexus',
    style: ['tech', 'cyber', 'mystical'],
    gender: ['neutral'],
  },
  {
    component: 'cipher',
    style: ['cyber', 'subtle', 'tech'],
    gender: ['neutral'],
  },
  {
    component: 'vector',
    style: ['tech', 'swift', 'quantum'],
    gender: ['masculine', 'neutral'],
  },
  {
    component: 'proxy',
    style: ['cyber', 'subtle', 'neo'],
    gender: ['neutral'],
  },

  // Nature/Elemental
  {
    component: 'storm',
    style: ['nature', 'elemental', 'fierce'],
    gender: ['neutral'],
  },
  {
    component: 'river',
    style: ['nature', 'swift', 'mystical'],
    gender: ['feminine', 'neutral'],
  },
  {
    component: 'frost',
    style: ['nature', 'elemental', 'subtle'],
    gender: ['neutral'],
  },
  {
    component: 'ember',
    style: ['nature', 'elemental', 'fierce'],
    gender: ['feminine', 'neutral'],
  },
  {
    component: 'stone',
    style: ['nature', 'mighty', 'ancient'],
    gender: ['masculine', 'neutral'],
  },

  // Royal/Noble
  {
    component: 'crown',
    style: ['royal', 'noble', 'legendary'],
    gender: ['neutral'],
  },
  {
    component: 'duke',
    style: ['royal', 'noble', 'mighty'],
    gender: ['masculine'],
  },
  {
    component: 'queen',
    style: ['royal', 'noble', 'legendary'],
    gender: ['feminine'],
  },
  {
    component: 'regent',
    style: ['royal', 'noble', 'wise'],
    gender: ['neutral'],
  },
  {
    component: 'throne',
    style: ['royal', 'noble', 'mighty'],
    gender: ['neutral'],
  },

  // Heroic/Mighty
  {
    component: 'blade',
    style: ['heroic', 'military', 'swift'],
    gender: ['neutral'],
  },
  {
    component: 'shield',
    style: ['heroic', 'military', 'mighty'],
    gender: ['neutral'],
  },
  {
    component: 'valor',
    style: ['heroic', 'divine', 'legendary'],
    gender: ['neutral'],
  },
  {
    component: 'knight',
    style: ['heroic', 'military', 'noble'],
    gender: ['masculine'],
  },
  {
    component: 'guard',
    style: ['heroic', 'military', 'mighty'],
    gender: ['neutral'],
  },

  // Dark/Eldritch
  {
    component: 'shade',
    style: ['dark', 'eldritch', 'subtle'],
    gender: ['neutral'],
  },
  {
    component: 'night',
    style: ['dark', 'mystical', 'celestial'],
    gender: ['neutral'],
  },
  {
    component: 'raven',
    style: ['dark', 'nature', 'swift'],
    gender: ['feminine', 'neutral'],
  },
  {
    component: 'doom',
    style: ['dark', 'eldritch', 'fierce'],
    gender: ['neutral'],
  },
  {
    component: 'shadow',
    style: ['dark', 'subtle', 'mystical'],
    gender: ['neutral'],
  },

  // Ancient/Tribal
  {
    component: 'elder',
    style: ['ancient', 'wise', 'tribal'],
    gender: ['neutral'],
  },
  {
    component: 'rune',
    style: ['ancient', 'mystical', 'nordic'],
    gender: ['neutral'],
  },
  {
    component: 'tribal',
    style: ['tribal', 'fierce', 'nature'],
    gender: ['neutral'],
  },
  {
    component: 'chief',
    style: ['tribal', 'mighty', 'legendary'],
    gender: ['masculine'],
  },
  {
    component: 'sage',
    style: ['ancient', 'wise', 'mystical'],
    gender: ['neutral'],
  },

  // Cultural specific
  {
    component: 'thor',
    style: ['nordic', 'divine', 'mighty'],
    gender: ['masculine'],
  },
  {
    component: 'jade',
    style: ['oriental', 'nature', 'noble'],
    gender: ['feminine', 'neutral'],
  },
  {
    component: 'celtic',
    style: ['celtic', 'mystical', 'legendary'],
    gender: ['neutral'],
  },
  {
    component: 'sands',
    style: ['desert', 'nature', 'ancient'],
    gender: ['neutral'],
  },
  {
    component: 'isle',
    style: ['tropical', 'nature', 'mystical'],
    gender: ['neutral'],
  },

  // Wise/Mystical
  {
    component: 'mage',
    style: ['mystical', 'wise', 'arcane'],
    gender: ['neutral'],
  },
  {
    component: 'seer',
    style: ['mystical', 'wise', 'divine'],
    gender: ['neutral'],
  },
  {
    component: 'oracle',
    style: ['mystical', 'wise', 'divine'],
    gender: ['feminine', 'neutral'],
  },
  {
    component: 'wizard',
    style: ['mystical', 'wise', 'arcane'],
    gender: ['masculine'],
  },
  {
    component: 'witch',
    style: ['mystical', 'dark', 'arcane'],
    gender: ['feminine'],
  },

  // Fey/Whimsical
  {
    component: 'fairy',
    style: ['fey', 'ethereal', 'swift'],
    gender: ['feminine', 'neutral'],
  },
  {
    component: 'pixie',
    style: ['fey', 'swift', 'nature'],
    gender: ['feminine', 'neutral'],
  },
  {
    component: 'dream',
    style: ['fey', 'ethereal', 'mystical'],
    gender: ['neutral'],
  },
  {
    component: 'sprite',
    style: ['fey', 'swift', 'ethereal'],
    gender: ['neutral'],
  },
  {
    component: 'wisp',
    style: ['fey', 'ethereal', 'subtle'],
    gender: ['neutral'],
  },
  // Cosmic/Space themed
  {
    component: 'comet',
    style: ['celestial', 'swift', 'cosmic'],
    gender: ['neutral'],
  },
  {
    component: 'nebula',
    style: ['celestial', 'ethereal', 'cosmic'],
    gender: ['feminine', 'neutral'],
  },
  {
    component: 'zenith',
    style: ['celestial', 'mighty', 'legendary'],
    gender: ['neutral'],
  },
  {
    component: 'quasar',
    style: ['celestial', 'cosmic', 'mystical'],
    gender: ['neutral'],
  },

  // Tech/Future themed
  {
    component: 'core',
    style: ['tech', 'synthetic', 'quantum'],
    gender: ['neutral'],
  },
  {
    component: 'matrix',
    style: ['cyber', 'tech', 'mystical'],
    gender: ['neutral'],
  },
  {
    component: 'nano',
    style: ['tech', 'synthetic', 'swift'],
    gender: ['neutral'],
  },
  {
    component: 'pulse',
    style: ['tech', 'cyber', 'swift'],
    gender: ['neutral'],
  },

  // Elemental/Nature additions
  {
    component: 'flame',
    style: ['nature', 'elemental', 'fierce'],
    gender: ['neutral'],
  },
  {
    component: 'tide',
    style: ['nature', 'elemental', 'mighty'],
    gender: ['neutral'],
  },
  {
    component: 'breeze',
    style: ['nature', 'swift', 'subtle'],
    gender: ['feminine', 'neutral'],
  },
  {
    component: 'crystal',
    style: ['nature', 'mystical', 'ethereal'],
    gender: ['neutral'],
  },

  // Mythological/Legendary
  {
    component: 'drake',
    style: ['elemental', 'fierce', 'legendary'],
    gender: ['masculine'],
  },
  {
    component: 'phoenix',
    style: ['elemental', 'divine', 'legendary'],
    gender: ['neutral'],
  },
  {
    component: 'griffin',
    style: ['mighty', 'noble', 'heroic', 'legendary'],
    gender: ['masculine', 'neutral'],
  },

  // Military/Combat
  {
    component: 'arrow',
    style: ['military', 'swift', 'heroic'],
    gender: ['neutral'],
  },
  {
    component: 'spear',
    style: ['military', 'fierce', 'tribal'],
    gender: ['neutral'],
  },
  {
    component: 'aegis',
    style: ['military', 'divine', 'heroic'],
    gender: ['neutral'],
  },

  // Mystical/Magical
  {
    component: 'relic',
    style: ['mystical', 'ancient', 'arcane'],
    gender: ['neutral'],
  },
  {
    component: 'tome',
    style: ['mystical', 'wise', 'arcane'],
    gender: ['neutral'],
  },
  {
    component: 'scroll',
    style: ['mystical', 'wise', 'ancient'],
    gender: ['neutral'],
  },

  // Noble/Royal additions
  {
    component: 'noble',
    style: ['royal', 'wise', 'legendary'],
    gender: ['neutral'],
  },
  {
    component: 'royal',
    style: ['royal', 'noble', 'mighty'],
    gender: ['neutral'],
  },

  // Cultural/Regional
  {
    component: 'atlas',
    style: ['ancient', 'mighty', 'legendary'],
    gender: ['masculine'],
  },
  {
    component: 'nomad',
    style: ['tribal', 'swift', 'desert'],
    gender: ['neutral'],
  },
  {
    component: 'lotus',
    style: ['oriental', 'mystical', 'nature'],
    gender: ['feminine', 'neutral'],
  },

  // Dark/Mysterious
  {
    component: 'void',
    style: ['dark', 'eldritch', 'cosmic'],
    gender: ['neutral'],
  },
  {
    component: 'dusk',
    style: ['dark', 'mystical', 'subtle'],
    gender: ['neutral'],
  },
  {
    component: 'wraith',
    style: ['dark', 'eldritch', 'swift'],
    gender: ['neutral'],
  },

  // Fey/Nature spirits
  {
    component: 'sylph',
    style: ['fey', 'ethereal', 'swift'],
    gender: ['feminine', 'neutral'],
  },
  {
    component: 'nymph',
    style: ['fey', 'nature', 'mystical'],
    gender: ['feminine'],
  },
  {
    component: 'fae',
    style: ['fey', 'ethereal', 'mystical'],
    gender: ['neutral'],
  },
  // Celestial/Ethereal
  {
    component: 'halo',
    style: ['celestial', 'divine', 'ethereal'],
    gender: ['neutral'],
  },
  {
    component: 'aurora',
    style: ['celestial', 'ethereal', 'mystical'],
    gender: ['feminine', 'neutral'],
  },
  {
    component: 'eclipse',
    style: ['celestial', 'dark', 'cosmic'],
    gender: ['neutral'],
  },
  // Tech/Cyber
  {
    component: 'glitch',
    style: ['tech', 'cyber', 'synthetic'],
    gender: ['neutral'],
  },
  {
    component: 'circuit',
    style: ['tech', 'synthetic', 'swift'],
    gender: ['neutral'],
  },
  {
    component: 'quantum',
    style: ['tech', 'mystical', 'synthetic'],
    gender: ['neutral'],
  },
  {
    component: 'binary',
    style: ['tech', 'cyber', 'subtle'],
    gender: ['neutral'],
  },

  // Nature/Elemental
  {
    component: 'leaf',
    style: ['nature', 'subtle', 'swift'],
    gender: ['neutral'],
  },
  {
    component: 'boulder',
    style: ['nature', 'mighty', 'ancient'],
    gender: ['masculine', 'neutral'],
  },
  {
    component: 'fern',
    style: ['nature', 'swift', 'subtle'],
    gender: ['neutral'],
  },
  {
    component: 'torrent',
    style: ['nature', 'elemental', 'fierce'],
    gender: ['neutral'],
  },

  // Heroic/Legendary
  {
    component: 'hero',
    style: ['heroic', 'mighty', 'legendary'],
    gender: ['neutral'],
  },
  {
    component: 'vanguard',
    style: ['heroic', 'military', 'mighty'],
    gender: ['neutral'],
  },
  {
    component: 'champion',
    style: ['heroic', 'military', 'legendary'],
    gender: ['masculine'],
  },

  // Dark/Eldritch
  {
    component: 'crypt',
    style: ['dark', 'eldritch', 'ancient'],
    gender: ['neutral'],
  },
  {
    component: 'abyss',
    style: ['dark', 'eldritch', 'mystical'],
    gender: ['neutral'],
  },
  {
    component: 'haze',
    style: ['dark', 'subtle', 'mystical'],
    gender: ['neutral'],
  },

  // Mythical/Legendary
  {
    component: 'wyrm',
    style: ['nordic', 'fierce', 'ancient'],
    gender: ['neutral'],
  },
  {
    component: 'hydra',
    style: ['ancient', 'fierce', 'legendary'],
    gender: ['neutral'],
  },
  // New instances
  {
    component: 'phantom',
    style: ['dark', 'ethereal', 'mystical'],
    gender: ['neutral'],
  },
  {
    component: 'golem',
    style: ['ancient', 'mighty', 'elemental'],
    gender: ['neutral'],
  },
  {
    component: 'zephyr',
    style: ['nature', 'swift', 'ethereal'],
    gender: ['neutral'],
  },
  {
    component: 'ember',
    style: ['elemental', 'fierce', 'mystical'],
    gender: ['neutral'],
  },
  {
    component: 'onyx',
    style: ['dark', 'mystical', 'ancient'],
    gender: ['neutral'],
  },
  {
    component: 'seraph',
    style: ['divine', 'celestial', 'mighty'],
    gender: ['neutral'],
  },
  {
    component: 'vortex',
    style: ['cosmic', 'mystical', 'elemental'],
    gender: ['neutral'],
  },
  {
    component: 'echo',
    style: ['ethereal', 'mystical', 'subtle'],
    gender: ['neutral'],
  },
  {
    component: 'ember',
    style: ['elemental', 'fierce', 'mystical'],
    gender: ['neutral'],
  },
  {
    component: 'rune',
    style: ['ancient', 'mystical', 'arcane'],
    gender: ['neutral'],
  },
  {
    component: 'tempest',
    style: ['nature', 'elemental', 'fierce', 'mighty', 'swift'],
    gender: ['neutral'],
  },
  {
    component: 'prism',
    style: ['mystical', 'ethereal', 'nature', 'celestial'],
    gender: ['neutral'],
  },
  {
    component: 'archive',
    style: ['tech', 'ancient', 'wise', 'cyber'],
    gender: ['neutral'],
  },
  {
    component: 'valkyrie',
    style: ['nordic', 'divine', 'heroic', 'fierce', 'legendary'],
    gender: ['feminine'],
  },
  {
    component: 'cosmos',
    style: ['cosmic', 'celestial', 'ethereal', 'mystical'],
    gender: ['neutral'],
  },
  {
    component: 'sage',
    style: ['wise', 'ancient', 'mystical', 'arcane'],
    gender: ['neutral'],
  },
  {
    component: 'basilisk',
    style: ['ancient', 'fierce', 'mystical', 'legendary'],
    gender: ['neutral'],
  },
  {
    component: 'djinn',
    style: ['desert', 'mystical', 'ancient', 'ethereal'],
    gender: ['masculine', 'neutral'],
  },
  {
    component: 'glacier',
    style: ['nature', 'elemental', 'mighty', 'ancient'],
    gender: ['neutral'],
  },
  {
    component: 'sylvan',
    style: ['nature', 'fey', 'mystical', 'ethereal'],
    gender: ['neutral'],
  },
  {
    component: 'forge',
    style: ['tech', 'elemental', 'mighty', 'synthetic'],
    gender: ['neutral'],
  },
  {
    component: 'chimera',
    style: ['ancient', 'fierce', 'legendary', 'mystical'],
    gender: ['neutral'],
  },
  {
    component: 'cascade',
    style: ['nature', 'swift', 'elemental', 'ethereal'],
    gender: ['neutral'],
  },
  {
    component: 'pantheon',
    style: ['divine', 'ancient', 'legendary', 'noble'],
    gender: ['neutral'],
  },
  {
    component: 'vertex',
    style: ['tech', 'cyber', 'quantum', 'synthetic'],
    gender: ['neutral'],
  },
  {
    component: 'mirage',
    style: ['desert', 'mystical', 'ethereal', 'subtle'],
    gender: ['neutral'],
  },
  {
    component: 'druid',
    style: ['nature', 'wise', 'celtic', 'mystical'],
    gender: ['neutral'],
  },
  {
    component: 'typhoon',
    style: ['nature', 'elemental', 'fierce', 'mighty'],
    gender: ['neutral'],
  },
  {
    component: 'oracle',
    style: ['divine', 'wise', 'mystical', 'ancient'],
    gender: ['feminine', 'neutral'],
  },
  {
    component: 'samurai',
    style: ['oriental', 'military', 'noble', 'heroic'],
    gender: ['masculine'],
  },
  {
    component: 'avalon',
    style: ['legendary', 'mystical', 'ethereal', 'celtic'],
    gender: ['neutral'],
  },
  {
    component: 'chronos',
    style: ['ancient', 'divine', 'mighty', 'legendary'],
    gender: ['masculine'],
  },
  {
    component: 'labyrinth',
    style: ['ancient', 'mystical', 'eldritch', 'subtle'],
    gender: ['neutral'],
  },
  {
    component: 'shogun',
    style: ['oriental', 'military', 'noble', 'legendary'],
    gender: ['masculine'],
  },
  {
    component: 'tsunami',
    style: ['oriental', 'nature', 'elemental', 'fierce'],
    gender: ['neutral'],
  },
  {
    component: 'atlas',
    style: ['ancient', 'mighty', 'legendary', 'wise'],
    gender: ['masculine'],
  },
  {
    component: 'aurora',
    style: ['celestial', 'ethereal', 'mystical', 'nature'],
    gender: ['feminine', 'neutral'],
  },
  {
    component: 'conduit',
    style: ['tech', 'cyber', 'synthetic', 'quantum'],
    gender: ['neutral'],
  },
  {
    component: 'templar',
    style: ['divine', 'military', 'heroic', 'noble'],
    gender: ['masculine'],
  },
  {
    component: 'siren',
    style: ['mystical', 'nature', 'fierce', 'legendary'],
    gender: ['feminine'],
  },
  {
    component: 'forge',
    style: ['tech', 'elemental', 'mighty', 'synthetic'],
    gender: ['neutral'],
  },
  {
    component: 'nimbus',
    style: ['celestial', 'ethereal', 'nature', 'swift'],
    gender: ['neutral'],
  },
  {
    component: 'pharaoh',
    style: ['desert', 'royal', 'ancient', 'divine'],
    gender: ['masculine'],
  },
  {
    component: 'banshee',
    style: ['celtic', 'dark', 'mystical', 'fierce'],
    gender: ['feminine'],
  },
  {
    component: 'nexus',
    style: ['tech', 'cyber', 'quantum', 'mystical'],
    gender: ['neutral'],
  },
  {
    component: 'shaman',
    style: ['tribal', 'mystical', 'wise', 'nature'],
    gender: ['neutral'],
  },
  {
    component: 'calypso',
    style: ['tropical', 'mystical', 'nature', 'legendary'],
    gender: ['feminine'],
  },
  {
    component: 'infinity',
    style: ['cosmic', 'quantum', 'mystical', 'ethereal'],
    gender: ['neutral'],
  },
  {
    component: 'kraken',
    style: ['nordic', 'fierce', 'legendary', 'nature'],
    gender: ['neutral'],
  },
  {
    component: 'meridian',
    style: ['celestial', 'tech', 'quantum', 'subtle'],
    gender: ['neutral'],
  },
  {
    component: 'enigma',
    style: ['mystical', 'subtle', 'eldritch', 'cyber'],
    gender: ['neutral'],
  },
  {
    component: 'scribe',
    style: ['ancient', 'wise', 'mystical', 'subtle'],
    gender: ['neutral'],
  },
  {
    component: 'titan',
    style: ['ancient', 'mighty', 'legendary', 'divine'],
    gender: ['masculine'],
  },
  {
    component: 'mystic',
    style: ['mystical', 'arcane', 'wise', 'ethereal'],
    gender: ['neutral'],
  },
  {
    component: 'paladin',
    style: ['heroic', 'divine', 'military', 'noble'],
    gender: ['masculine'],
  },
  {
    component: 'geyser',
    style: ['nature', 'elemental', 'fierce', 'mighty'],
    gender: ['neutral'],
  },
  {
    component: 'panthera',
    style: ['nature', 'fierce', 'swift', 'tribal'],
    gender: ['feminine', 'neutral'],
  },
  {
    component: 'kodex',
    style: ['tech', 'cyber', 'ancient', 'mystical'],
    gender: ['neutral'],
  },
  {
    component: 'vesper',
    style: ['celestial', 'dark', 'subtle', 'mystical'],
    gender: ['feminine', 'neutral'],
  },
  {
    component: 'ronin',
    style: ['oriental', 'military', 'heroic', 'swift'],
    gender: ['masculine', 'neutral'],
  },
] as const
