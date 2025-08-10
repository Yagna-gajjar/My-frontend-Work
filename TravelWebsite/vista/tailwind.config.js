/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: 'hsl(var(--color-brand))',
          light: 'hsl(var(--color-brand-light))',
          dark: 'hsl(var(--color-brand-dark))',
          hover: 'hsl(var(--color-brand-hover))',
          contrast: 'hsl(var(--color-brand-contrast))',
        },
        background: {
          DEFAULT: 'hsl(var(--color-bg))',
          dark: 'hsl(var(--color-bg-dark))',
        },
        text: {
          DEFAULT: 'hsl(var(--color-text))',
          muted: 'hsl(var(--color-text-muted))',
          light: 'hsl(var(--color-text-light))',
        },
        border: {
          DEFAULT: 'hsl(var(--color-border))',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        card: '0 4px 14px rgba(6, 182, 212, 0.1)',
      },
    },
  },
  plugins: [],
}
