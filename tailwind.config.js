/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      gridTemplateColumns: {
        contentColumnGrid: '250px auto',
      },
      colors: {
        success: '#01a745',
        failure: '#d22500',
        linkGreen: '#2B7A0B',
        warning: '#EBB02D',
      },
    },
  },
  plugins: [],
}
