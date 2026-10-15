/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Alpine Hospitality palette
        ink: {
          DEFAULT: '#0B2027', // deep evergreen-ink
          900: '#081920',
          800: '#0B2027',
          700: '#12333D',
        },
        alpine: {
          DEFAULT: '#0E5A6B', // alpine teal-blue
          600: '#0E5A6B',
          500: '#1B7A8C',
          400: '#3AA0B0',
          300: '#7FC4CF',
          100: '#DCEEF1',
        },
        coral: {
          DEFAULT: '#FF6B57', // luminous coral
          600: '#F0563F',
          500: '#FF6B57',
          400: '#FF8574',
          200: '#FFC7BD',
        },
        sand: {
          DEFAULT: '#E7C9A3',
          300: '#EFDCC2',
          100: '#F7EEDF',
        },
        cream: {
          DEFAULT: '#FBF7F0',
          200: '#F4EDE1',
        },
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-hanken)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(11, 32, 39, 0.35)',
        lift: '0 30px 80px -30px rgba(11, 32, 39, 0.45)',
        glow: '0 0 60px -10px rgba(255, 107, 87, 0.5)',
      },
      backgroundImage: {
        'radial-fade': 'radial-gradient(ellipse at top, rgba(14,90,107,0.15), transparent 60%)',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'aurora': {
          '0%, 100%': { transform: 'translate(0,0) scale(1)', opacity: '0.6' },
          '50%': { transform: 'translate(4%, -6%) scale(1.1)', opacity: '0.9' },
        },
      },
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'marquee': 'marquee 32s linear infinite',
        'aurora': 'aurora 14s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
