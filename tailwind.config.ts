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
        landing: "url('/landing-bg-notop.jpg')",
        "landing-top": "url('/landing-bg-top.png')",
      },
      animation: {
        circle: "draw 0.5s forwards",
      },
      keyframes: {
        draw: {
          from: { strokeDasharray: "0 1500" },
          to: { strokeDasharray: "1500 1500" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
