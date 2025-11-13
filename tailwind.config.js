/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6347",
        "dodgeroll-gold": "#F789FA1",
        "apple-green": "#046E18",
        "dire-wolf": "292727",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
}

