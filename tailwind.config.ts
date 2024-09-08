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
        landing: "url('/assets/landing/landing-bg.png')",
        "landing-top": "url('/assets/landing/landing-bg-top.png')",
        warble1: "url('/assets/landing/landing-bg-warble1.jpg')",
        warble2: "url('/assets/landing/landing-bg-warble2.jpg')",
        warble3: "url('/assets/landing/landing-bg-warble3.jpg')",
        warble4: "url('/assets/landing/landing-bg-warble4.jpg')",
        "side-border": "url('/assets/landing/wood-border.png')",
        "gen-info": "url('/assets/gen-info/gen-info-bg.jpg')",
        "gen-info-table": "url('/assets/gen-info/table.png')",
        schedule: "url('/assets/schedule/schedule-bg.png')",
        blackboard: "url('/assets/schedule/blackboard.png')",
        prizes: "url('/assets/prizes/prizes-bg.png')",
        "dartboard-wood": "url('/assets/prizes/dartboard-bg.png')",
        chalkboard: "url('/assets/prizes/chalkboard.png')",
        "chalkboard-empty": "url('/assets/prizes/chalkboard-empty.png')",
        "prizes-title": "url('/assets/prizes/title-bg.png')",
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
