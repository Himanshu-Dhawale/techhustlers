import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors - these should match design system
        primary: {
          50: '#faf5ff',
          500: '#a855f7', // purple-500
          600: '#9333ea',
          900: '#581c87',
        },
        secondary: {
          500: '#ec4899', // pink-500
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px -10px rgba(168, 85, 247, 0.4)' },
          'to': { boxShadow: '0 0 20px -10px rgba(168, 85, 247, 0.8)' },
        }
      }
    },
  },
  plugins: [],
}
export default config