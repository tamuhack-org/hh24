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
        landing: "url('/landing-bg.png')",
        "landing-top": "url('/landing-bg-top.png')",
        warble1: "url('/landing-bg-warble1.jpg')",
        warble2: "url('/landing-bg-warble2.jpg')",
        warble3: "url('/landing-bg-warble3.jpg')",
        warble4: "url('/landing-bg-warble4.jpg')",
        "side-border": "url('/wood-border.png')",
        "gen-info": "url('/gen-info-bg.jpg')",
        "gen-info-table": "url('/gen-info-table.png')",
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
