/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00bcd4', // Cyan/Teal for primary actions
          dark: '#008ba3',
          light: '#62efff',
        },
        secondary: {
          DEFAULT: '#6200ea', // Deep Purple
          dark: '#3d0091',
          light: '#9d46ff',
        },
        light: {
          DEFAULT: '#ffffff',
          bg: '#f8fafc', // Slate 50
          card: '#ffffff',
          text: '#0f172a', // Slate 900
          muted: '#64748b', // Slate 500
        },
        dark: { // Keeping some dark colors for contrast elements if needed
          DEFAULT: '#0a0a0a',
          lighter: '#1a1a1a',
          card: '#121212',
        }
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'], // Changed from 'Outfit' to 'Nunito'
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}