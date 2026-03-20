/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        ink: '#111111',
        muted: '#777777',
        soft: '#aaaaaa',
        pale: '#cccccc',
        border: '#ebebeb',
        border2: '#e0e0e0',
        bg2: '#f9f9f7',
        bg3: '#f5f5f3',
        green: {
          DEFAULT: '#16a34a',
          bg: '#f0fdf4',
          border: '#bbf7d0',
        },
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'blink': 'blink 1.5s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease forwards',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.4)' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
