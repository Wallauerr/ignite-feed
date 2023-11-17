/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors:{
        NeutralGrey: "#121214",
        PlatformGrey: "#202024",
        CommentBoxGray: "#29292E",
        BorderGrey: "#323238",
        PostTextColor: "#C4C4CC",
        SpanTextColor: "#8D8D99",
        BrandGreenIgnite: "#00875F",
        BrandGreenIgniteLight: "#00B37E",
        MainColorText: "#E1E1E6",
      }
    },
  },
  plugins: [],
}

