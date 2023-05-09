/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Kalam400: ["Kalam"],
        Kalam300: ["Kalam Light"],
        Kalam700: ["Kalam Bold"],
      },
      backgroundImage: (theme) => ({
        'main': "url('../dist/assets/Noise.svg')",
        'paper': "url('../dist/assets/Paper.svg')",
      }),
    },
  },
  plugins: [],
}

