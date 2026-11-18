/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#050505',
        electric: {
          DEFAULT: '#2563EB',
          hover: '#1D4ED8',
          tint: '#EFF6FF',
          glow: 'rgba(37, 99, 235, 0.35)',
        },
        heading: '#09090B',
        body: '#52525B',
        border: {
          subtle: '#E4E4E7',
          dark: 'rgba(255, 255, 255, 0.1)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        heading: ['var(--font-manrope)', 'sans-serif'],
        sans: ['var(--font-dm-sans)', 'sans-serif'],
      },
      letterSpacing: {
        editorial: '-0.04em',
      },
      boxShadow: {
        'electric-glow': '0 0 40px -10px rgba(37, 99, 235, 0.5)',
        'electric-sm': '0 0 20px -5px rgba(37, 99, 235, 0.4)',
        'soft-elevation': '0 20px 40px -15px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
