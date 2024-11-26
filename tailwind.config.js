/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',   // Blue
        secondary: '#10B981', // Green
        lightBg: '#F9FAFB',   // Light background
        darkBg: '#1F2937',    // Dark background
        lightText: '#111827', // Text for light mode
        darkText: '#F9FAFB',  // Text for dark mode
      },
    },
  },
  plugins: [],
};