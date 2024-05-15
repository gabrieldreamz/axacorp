import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0d0c22",
        primary: "#01010180",
        "secondary-blue-100": "#b9d8ef",
        "border-accent": "#EAECF0",
      },
    },
  },
  plugins: [],
};
export default config;
