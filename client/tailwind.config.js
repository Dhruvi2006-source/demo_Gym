/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#d4ff00',
        'accent-hover': '#c2e500',
        'accent-dim': 'rgba(212,255,0,0.12)',
        bg: '#0a0a0a',
        'bg-2': '#111111',
        'bg-3': '#1a1a1a',
        surface: '#1e1e1e',
        'surface-2': '#252525',
        border: 'rgba(255,255,255,0.08)',
        muted: '#888888',
        dim: '#555555',
      },
      fontFamily: {
        body: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Barlow Condensed', 'sans-serif'],
      },
      borderRadius: {
        'xl': '20px',
        '2xl': '32px',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'fade-up': 'fadeInUp 0.7s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212,255,0,0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(212,255,0,0.45)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'glow': '0 0 40px rgba(212,255,0,0.15)',
        'glow-lg': '0 0 60px rgba(212,255,0,0.25)',
        'accent-sm': '0 8px 24px rgba(212,255,0,0.35)',
      },
      screens: {
        xs: '480px',
      },
      maxWidth: {
        'site': '1200px',
      },
    },
  },
  plugins: [],
}
