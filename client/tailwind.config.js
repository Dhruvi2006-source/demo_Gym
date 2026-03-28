/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#00f0ff',
        'accent-hover': '#00d4e0',
        'accent-dim': 'rgba(0,240,255,0.10)',
        'accent-2': '#7c3aff',
        'accent-2-dim': 'rgba(124,58,255,0.10)',
        bg: '#06080d',
        'bg-2': '#0a0e18',
        'bg-3': '#111827',
        surface: 'rgba(17,24,39,0.65)',
        'surface-solid': '#111827',
        'surface-2': '#1e293b',
        border: 'rgba(255,255,255,0.07)',
        muted: '#94a3b8',
        dim: '#475569',
      },
      fontFamily: {
        body: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Bebas Neue', 'sans-serif'],
      },
      borderRadius: {
        'xl': '20px',
        '2xl': '32px',
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'fade-up': 'fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        'spin-slow': 'spin 12s linear infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-16px) rotate(2deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 30px rgba(0,240,255,0.15), 0 0 60px rgba(124,58,255,0.08)' },
          '50%': { boxShadow: '0 0 50px rgba(0,240,255,0.3), 0 0 100px rgba(124,58,255,0.15)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'glow': '0 0 40px rgba(0,240,255,0.12)',
        'glow-lg': '0 0 80px rgba(0,240,255,0.2)',
        'glow-purple': '0 0 40px rgba(124,58,255,0.15)',
        'accent-sm': '0 8px 32px rgba(0,240,255,0.25)',
        'card': '0 8px 32px rgba(0,0,0,0.4)',
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
