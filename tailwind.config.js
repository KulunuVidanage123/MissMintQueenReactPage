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
        md: '768px',
        // tablet: { min: '768px', max: '1023px' },
        lg: '1700px', 
        xl: '1920px',
      },
    },
  },
  plugins: [],
}
