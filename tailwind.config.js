/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
  theme: {
    extend: {
      colors: {
        primary: 'var(#96cff1)',
        secondary: 'var(#1e3d58)',
        background: 'var(#e8eef1)',
        text: 'var(white)',
      },
    },
  },
  plugins: [],
}

