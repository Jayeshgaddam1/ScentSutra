/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: '#1C1C1C',    // Rich Black
          secondary: '#F5F5F5',  // Soft White
          accent: '#DAA520',     // Goldenrod
        },
        fontFamily: {
          playfair: ['var(--font-playfair-display)', 'serif'],
          inter: ['var(--font-inter)', 'sans-serif'],
          montserrat: ['var(--font-montserrat)', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }