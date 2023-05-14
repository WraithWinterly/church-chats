import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#7F9183",
          2: "#E0CBA8",
          3: "#182A30",
        },
        secondary: "#435C49",
      },
    },
  },
  plugins: [],
} satisfies Config;
