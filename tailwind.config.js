/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F7942', // Forest green for nature theme
        secondary: '#8B4513', // Saddle brown for earth/land theme
        accent: '#FFD700', // Gold for premium/investment theme
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/images/hero-bg.jpg')",
      }
    },
  },
  plugins: [],
}