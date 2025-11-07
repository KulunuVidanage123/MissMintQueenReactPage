/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        tablet: '768px',   //  tablet
        md: '1024px',      //  desktop
        lg: '1700px',
        xl: '1920px',
      }
    },
  },
  plugins: [],
}
