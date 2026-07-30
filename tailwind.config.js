/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Omotenashi Digital design tokens
        surface: '#f6faff',
        'surface-dim': '#d2dbe4',
        'surface-bright': '#f6faff',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#ecf5fe',
        'surface-container': '#e6eff8',
        'surface-container-high': '#e0e9f2',
        'surface-container-highest': '#dbe4ed',
        'on-surface': '#141d23',
        'on-surface-variant': '#5d3f3b',
        'inverse-surface': '#293138',
        'inverse-on-surface': '#e9f2fb',
        outline: '#926f69',
        'outline-variant': '#e7bdb6',
        primary: '#920000',
        'on-primary': '#ffffff',
        'primary-container': '#bf0000',
        'on-primary-container': '#ffcbc3',
        'primary-fixed': '#ffdad4',
        'primary-fixed-dim': '#ffb4a8',
        secondary: '#ae2f34',
        'on-secondary': '#ffffff',
        'secondary-container': '#ff6b6b',
        'secondary-fixed': '#ffdad8',
        tertiary: '#633e00',
        'on-tertiary': '#ffffff',
        'tertiary-container': '#825400',
        'tertiary-fixed': '#ffddb5',
        'tertiary-fixed-dim': '#ffb957',
        'on-tertiary-fixed': '#2a1800',
        background: '#f6faff',
        'on-background': '#141d23',

        // Legacy aliases remapped so existing components adopt the new palette
        rakuten: {
          red: '#BF0000',
          dark: '#920000',
        },
        mc: {
          red: '#EB001B',
          orange: '#FF5F00',
        },
        ink: '#141d23',
        muted: '#5d3f3b',
        canvas: '#f6faff',
        card: '#FFFFFF',
        success: '#1A7F37',
        warning: '#B7791F',
      },
      fontFamily: {
        sans: ['Noto Sans', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Noto Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 12px rgba(0,0,0,0.04)',
        float: '0 8px 20px rgba(0,0,0,0.08)',
        frame: '0 30px 80px rgba(23,23,23,0.28)',
      },
      borderRadius: {
        xl2: '1.25rem',
        xl3: '1.75rem',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};
