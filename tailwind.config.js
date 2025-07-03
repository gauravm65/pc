/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'sans': ['Inter', 'sans-serif']
      },
      colors: {
        'brand-bg': '#0D0D11',
        'brand-purple': '#6A3EFF',
        'brand-gray-light': '#E0E0E0',
        'brand-gray-medium': '#8B8B9A',
        'brand-gray-dark': '#1A1A21',
        'brand-gray-border': '#2A2A35'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(106, 62, 255, 0.3), rgba(13, 13, 17, 0))',
        'footer-gradient': 'radial-gradient(ellipse 80% 80% at 50% 120%, rgba(106, 62, 255, 0.2), rgba(13, 13, 17, 0))',
        'card-glow': 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(106, 62, 255, 0.15), transparent)'
      }
    },
  },
  plugins: [],
};