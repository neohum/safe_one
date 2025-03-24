/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#f97316', // 오렌지 색상 명시적 정의
        }
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
}
