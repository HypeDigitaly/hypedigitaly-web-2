/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'geist': ['Geist', 'sans-serif'],
      },
      colors: {
        'primary': '#00A39A',
        'primary-light': '#00C4B4',
        'primary-dark': '#008B84',
        'accent': '#f97316',
      },
      animation: {
        'marquee': 'marquee 20s linear infinite',
        'marquee-scroll': 'marquee-scroll 35s linear infinite',
        'marquee-scroll-reverse': 'marquee-scroll-reverse 35s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'icon-glow': 'icon-glow 1.5s ease-in-out infinite',
        'border-spin': 'border-spin 2.5s linear infinite',
        'shimmer': 'shimmer 4s linear infinite',
        'breathe': 'breathe 4.5s linear infinite',
        'rain-fall': 'rain-fall linear infinite',
        'vf-floating-points': 'vf-floating-points infinite ease-in-out',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-scroll-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'icon-glow': {
          '0%, 100%': { 
            filter: 'drop-shadow(0 0 0px rgba(0, 163, 154, 0))',
            transform: 'scale(1)',
          },
          '50%': { 
            filter: 'drop-shadow(0 0 15px rgba(0, 163, 154, 0.6))',
            transform: 'scale(1.1)',
          },
        },
        'border-spin': {
          to: { '--gradient-angle': '360deg' },
        },
        shimmer: {
          to: { transform: 'translate(-50%, -50%) rotate(360deg)' },
        },
        breathe: {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
          '50%': { transform: 'translate(-50%, -50%) scale(1.20)' },
        },
        'rain-fall': {
          '0%': { 
            transform: 'translateY(-10px) translateZ(0)',
            opacity: '0',
          },
          '5%': { opacity: '1' },
          '80%': { opacity: '0.6' },
          '100%': { 
            transform: 'translateY(100vh) translateZ(0)',
            opacity: '0',
          },
        },
        'vf-floating-points': {
          '0%': { transform: 'translateY(0)' },
          '85%': { opacity: '0' },
          '100%': { transform: 'translateY(-55px)', opacity: '0' },
        },
        animationIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
            filter: 'blur(8px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
            filter: 'blur(0px)',
          },
        },
      },
    },
  },
  plugins: [],
}

