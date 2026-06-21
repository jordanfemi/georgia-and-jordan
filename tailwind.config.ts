import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FEFAF4',
        champagne: '#F5EDD6',
        terracotta: '#C4714A',
        terracottaDark: '#A85D38',
        sage: '#8B9E77',
        sageDark: '#6B7E5A',
        espresso: '#2C1A0E',
        blush: '#F2D5C8',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
