import { buildLegacyTheme } from 'sanity'

const props = {
  '--my-white': '#ffffff',
  '--my-black': '#0a0a0a', // Primary dark from website
  '--phm-gold': '#D4AF37', // Gold from website
  '--phm-gold-light': '#F3E5AB',
  '--phm-red': '#ef4444',
  '--phm-yellow': '#eab308',
  '--phm-green': '#22c55e',
}

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  '--black': props['--my-black'],
  '--white': props['--my-white'],

  '--gray': '#666',
  '--gray-base': '#666',

  '--component-bg': props['--my-black'],
  '--component-text-color': props['--my-white'],

  /* Brand */
  '--brand-primary': props['--phm-gold'],

  // Default button
  '--default-button-color': '#666',
  '--default-button-primary-color': props['--phm-gold'],
  '--default-button-success-color': props['--phm-green'],
  '--default-button-warning-color': props['--phm-yellow'],
  '--default-button-danger-color': props['--phm-red'],

  /* State */
  '--state-info-color': props['--phm-gold'],
  '--state-success-color': props['--phm-green'],
  '--state-warning-color': props['--phm-yellow'],
  '--state-danger-color': props['--phm-red'],

  /* Navbar */
  '--main-navigation-color': props['--my-black'],
  '--main-navigation-color--inverted': props['--my-white'],

  '--focus-color': props['--phm-gold'],
})
