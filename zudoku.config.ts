import type { ZudokuConfig } from 'zudoku'

const config: ZudokuConfig = {
  defaults: {
    apis: {
      disablePlayground: false,
    },
  },
  topNavigation: [
    { id: 'docs', label: 'Documentation' },
    { id: 'api', label: 'API Reference' },
  ],
  page: {
    pageTitle: ' ',
    logo: {
      src: {
        light: '/images/scrub-logo.svg',
        dark: '/images/scrub-logo.svg',
      },
    },
    footer: {
      position: 'center',
      copyright: `© ${new Date().getFullYear()} UseScrub LLC. All rights reserved.`,
    },
  },
  metadata: {
    title: 'Scrub - API Documentation',
    logo: '/images/scrub-logo.svg',
    favicon: '/images/scrub-logo.svg',
    referrer: 'no-referrer',
  },
  sidebar: {
    docs: [
      {
        type: 'category',
        label: 'Overview',
        items: [
          'docs/introduction',
          'docs/gettingStarted',
          'docs/errors',
          'docs/example',
        ],
      },
    ],
  },
  redirects: [{ from: '/', to: '/docs/introduction' }],
  apis: {
    type: 'file',
    input: './apis/scrub-schema.json',
    navigationId: 'api',
  },
  docs: {
    files: '/pages/**/*.{md,mdx}',
  },
  theme: {
    light: {
      background: '0 0% 100%',
      foreground: '20 14.3% 4.1%',
      card: '0 0% 100%',
      cardForeground: '20 14.3% 4.1%',
      popover: '0 0% 100%',
      popoverForeground: '20 14.3% 4.1%',
      primary: '47.9 95.8% 53.1%',
      primaryForeground: '26 83.3% 14.1%',
      secondary: '60 4.8% 95.9%',
      secondaryForeground: '24 9.8% 10%',
      muted: '60 4.8% 95.9%',
      mutedForeground: '25 5.3% 44.7%',
      accent: '60 4.8% 95.9%',
      accentForeground: '24 9.8% 10%',
      destructive: '0 84.2% 60.2%',
      destructiveForeground: '60 9.1% 97.8%',
      border: '20 5.9% 90%',
      input: '20 5.9% 90%',
      ring: '20 14.3% 4.1%',
    },
    dark: {
      background: '20 14.3% 4.1%',
      foreground: '60 9.1% 97.8%',
      card: '20 14.3% 4.1%',
      cardForeground: '60 9.1% 97.8%',
      popover: '20 14.3% 4.1%',
      popoverForeground: '60 9.1% 97.8%',
      primary: '47.9 95.8% 53.1%',
      primaryForeground: '26 83.3% 14.1%',
      secondary: '12 6.5% 15.1%',
      secondaryForeground: '60 9.1% 97.8%',
      muted: '12 6.5% 15.1%',
      mutedForeground: '24 5.4% 63.9%',
      accent: '12 6.5% 15.1%',
      accentForeground: '60 9.1% 97.8%',
      destructive: '0 62.8% 30.6%',
      destructiveForeground: '60 9.1% 97.8%',
      border: '12 6.5% 15.1%',
      input: '12 6.5% 15.1%',
      ring: '35.5 91.7% 32.9%',
    },
  },
}

export default config
