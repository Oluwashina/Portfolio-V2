/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'main': "url('../dist/assets/Noise.svg')",
        'paper': "url('../dist/assets/Paper.svg')",
        'paper2': "url('../dist/assets/shadow_lower.svg')",
        'paper3': "url('../dist/assets/contactPaper.svg')",
        'note': "url('../dist/assets/Note.svg')",

      }),
    },
  },
  plugins: [],
}

