import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        primary:  "#FFD700",
      }
    },
  },
  plugins: [],
};
export default config;
