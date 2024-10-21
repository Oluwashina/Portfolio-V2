/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'main': "url('./assets/Noise.svg')",
        'paper': "url('./assets/Paper.png')",
        'paper2': "url('./assets/shadow_lower.svg')",
        'paper3': "url('./assets/contactPaper.svg')",
        'note': "url('./assets/Note.svg')",

      },
    },
  },
  plugins: [],
}

