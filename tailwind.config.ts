import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lightOrange: "#FFDF8C",
        orange: "#FE5F1E",
        grey: "#282828",
        lightGrey: "#7B7B7B",
      },
      fontSize: {
        logo: "24px",
        h1: "32px",
        h2: "20px",
        categories: "16px",
      },
    },
  },
  plugins: [],
};
export default config;
