/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // macOS system colors
        macos: {
          bg: '#1e1e1e',
          surface: 'rgba(30, 30, 30, 0.85)',
          border: 'rgba(255, 255, 255, 0.1)',
          text: '#f5f5f7',
          muted: '#86868b',
          accent: '#0a84ff',
          red: '#ff453a',
          yellow: '#ffd60a',
          green: '#30d158',
          menubar: 'rgba(20, 20, 20, 0.75)',
          dock: 'rgba(255, 255, 255, 0.12)',
          window: 'rgba(28, 28, 30, 0.92)',
          hover: 'rgba(255, 255, 255, 0.08)',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'sans-serif'],
        mono: ['SF Mono', 'Fira Code', 'Fira Mono', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
        macos: '20px',
      },
      boxShadow: {
        window: '0 20px 60px rgba(0,0,0,0.6), 0 0 0 0.5px rgba(255,255,255,0.1)',
        dock: '0 8px 32px rgba(0,0,0,0.4)',
        menubar: '0 1px 0 rgba(255,255,255,0.05)',
      },
      animation: {
        'bounce-dock': 'bounceDock 0.4s ease',
        'fade-in': 'fadeIn 0.3s ease',
        'scale-in': 'scaleIn 0.2s ease',
      },
      keyframes: {
        bounceDock: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
