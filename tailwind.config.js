/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a'
        },
        brand: {
          blue: '#1a56db',
          indigo: '#4f46e5',
          purple: '#7c3aed'
        },
        theme: {
          bg: {
            primary: 'var(--bg-primary)',
            secondary: 'var(--bg-secondary)',
            card: 'var(--bg-card)'
          },
          text: {
            primary: 'var(--text-primary)',
            secondary: 'var(--text-secondary)'
          },
          border: 'var(--border)',
          accent: 'var(--accent)',
          'accent-hover': 'var(--accent-hover)'
        }
      },
      fontFamily: {
        sans: ['PingFang SC', 'Microsoft YaHei', 'sans-serif']
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1a56db 0%, #4f46e5 50%, #7c3aed 100%)'
      }
    }
  },
  plugins: []
}
