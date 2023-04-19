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
        successTrans: 'rgb(1, 167, 69,0.2)',
        tableSuccessTrans: 'rgb(1, 167, 69,0.1)',
        failure: '#d22500',
        linkGreen: '#2B7A0B',
        warning: '#EBB02D',
        classical: {
          300: '#00FFFF', //cyan
          200: 'rgba(0, 255, 255,0.3)',
          100: 'rgba(0, 255, 255,0.1)',
        },
        counting: {
          300: '#0000FF', //blue
          200: 'rgba(0, 0, 255,0.3)',
          100: 'rgba(0, 0, 255,0.1)',
        },
        partitioned: {
          300: '#A020F0', //purple,
          200: 'rgba(160, 32, 240,0.3)',
          100: 'rgba(160, 32, 240,0.1)',
        },
        scalable: {
          300: '#FFFF00', //yellowDark
          200: 'rgba(255, 255, 0,0.3)',
          100: 'rgba(255, 255, 0,0.1)',
        },
        cuckoo: {
          300: '#FF00CD', //magentaBright
          200: 'rgba(255, 0, 205,0.3)',
          100: 'rgba(255, 0, 205,0.1)',
        },
        default: {
          300: '#AAFF00', //greenBright
          200: 'rgba(170, 255, 0,0.3)',
          100: 'rgba(170, 255, 0,0.1)',
        },
      },
    },
  },
  plugins: [],
}
