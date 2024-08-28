/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-lg': '0px 12px 24px 0px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}