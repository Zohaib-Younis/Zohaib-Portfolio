/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#0a0a0a',
        bgSecondary: '#121212',
        textPrimary: '#ffffff',
        textSecondary: '#a0a0a0',
        accentPrimary: '#6366f1',
        accentSecondary: '#8b5cf6',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      }
    },
  },
  plugins: [],
}
