/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'text-purple': '#D434FE',
      'lg-from-purple': '#903AFF',
      'lg-via-purple': '#FF26B9',
      'lg-to-purple': '#FE34B9',
      'bg-purple': '#150E28;',
      'bg-two-purple': '#140D27;',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'first': '#903AFF',
      'second-place': 'rgba(212, 52, 254, 0.12)',
      'first-place': 'rgba(144, 58, 255, 0.12)',
    },
    fontFamily: {
      clashDisplay: ['ClashDisplay-Variable', 'sans-serif'],
      mont: ['Montserrat', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
      unica: ['Unica One', 'cursive'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      width: {
        38: "9.5rem",
        66: "16rem",
        99: "24.375rem",
      },
      maxWidth: {
        smm: "24.375rem",
      },
      fontSize: {
        ssxl: "0.8125rem",
        sxxl: "0.875rem",
        sxl: "0.9375rem",
        txl: "2rem",
      },
    },
  },
  plugins: [],
}

