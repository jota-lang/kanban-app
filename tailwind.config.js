/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ['Poppins','sans-serif'],
      },
      colors:{
        primary:{
          lightPurple: '#2c2c38',
          darkPurple: '#21212d',
        },
        secondary:{
          lightGray:'#858c9a',
          purple: '#635fc6',
          columnBg:'#242430',
        },
      },
    },
  },
  plugins: [],
}

