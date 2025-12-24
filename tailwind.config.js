/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        barber: {
          bg: '#0A0A14',
          surface: '#0F1020',
          elevated: '#141428',
          border: '#1A1A2E',
          'border-light': '#2A2A4E',
        },
        accent: {
          red: '#C41E3A',
          'red-light': '#E8304F',
          blue: '#1E3A8A',
          'blue-light': '#2563EB',
        },
        text: {
          primary: '#F5F5F5',
          secondary: '#9CA3AF',
          muted: '#6B7280',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-red': '0 0 30px -5px rgba(196, 30, 58, 0.3)',
        'glow-blue': '0 0 30px -5px rgba(30, 58, 138, 0.3)',
        'card': '0 4px 24px -4px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
