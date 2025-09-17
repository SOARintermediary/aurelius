/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'avelon': {
          'primary': '#1a2332',
          'primary-light': '#2a3442',
          'primary-dark': '#0f1822',
          'accent': '#d4af37',
          'accent-light': '#e4bf47',
          'accent-dark': '#c49f27',
          'neutral': '#f8f9fa',
          'neutral-dark': '#e9ecef',
          'text': '#2c3e50',
          'text-light': '#6c757d',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-sm': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-xs': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'hero': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'hero-sm': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'hero-xs': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-left': 'fadeInLeft 0.8s ease-out',
        'fade-in-right': 'fadeInRight 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'aurelius': '0 10px 25px rgba(0, 0, 0, 0.1)',
        'aurelius-lg': '0 20px 40px rgba(0, 0, 0, 0.15)',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '16/9': '16 / 9',
        '21/9': '21 / 9',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
};