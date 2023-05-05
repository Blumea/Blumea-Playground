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
        open_sans: ['Open Sans', 'sans-serif'],
        fira_sans: ['Fira Sans', 'sans-serif'],
        pt_sans: ['PT Sans', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif'],
        work_sans: ['Work Sans', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      gridTemplateColumns: {
        contentColumnGrid: '250px auto',
        warningColumnsGrid: '80px auto',
      },
      gridTemplateRows: {
        warningRowsGrid: '50px auto',
      },
      colors: {
        beta: 'rgba(162, 210, 255, 1)',
        betaBorder: 'rgba(0, 0, 255,0.6)',
        success: '#01a745',
        successTrans: 'rgb(1, 167, 69,0.4)',
        tableSuccessTrans: 'rgb(1, 167, 69,0.1)',
        failure: '#d22500',
        failureTrans: 'rgba(210, 37, 0,0.4)',
        tableFailureTrans: 'rgba(210, 37, 0,0.1)',
        linkGreen: '#2B7A0B',
        warning: '#EBB02D',
        offWhiteBase: '#ecf0f3',
        disabledBase: '#9BA4B5',
        classical: {
          // 300: '#00FFFF',
          // 200: 'rgba(0, 255, 255,0.3)',
          // 100: 'rgba(0, 255, 255,0.1)',
          300: 'rgb(185, 243, 228)',
          200: 'rgba(185, 243, 228,0.8)',
          100: 'rgba(185, 243, 228,0.2)',
        },
        counting: {
          300: 'rgba(0, 0, 255,0.3)', //blue
          200: 'rgba(0, 0, 255,0.2)',
          100: 'rgba(0, 0, 255,0.05)',
        },
        partitioned: {
          300: 'rgba(160, 32, 240,0.3)', //purple,
          200: 'rgba(160, 32, 240,0.2)',
          100: 'rgba(160, 32, 240,0.)',
        },
        scalable: {
          300: 'rgba(255, 255, 0,0.4)', //yellowDark
          200: 'rgba(255, 255, 0,0.3)',
          100: 'rgba(255, 255, 0,0.1)',
        },
        cuckoo: {
          300: 'rgba(255, 0, 205,0.3)', //magentaBright
          200: 'rgba(255, 0, 205,0.2)',
          100: 'rgba(255, 0, 205,0.05)',
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
