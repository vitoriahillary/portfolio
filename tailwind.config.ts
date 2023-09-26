import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)']
      },
      colors:{
        'pink': {
          '400': '#f472b6',
          '300': '#f9a8d4'
        },
        'purple': {
        }
      },
      animation:{
        'bounce-slow': 'bounce 5s linear infinite'
      }
    },
  },
  plugins: [],
}
export default config
