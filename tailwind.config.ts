import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
			"primary": "#3b82f6",
			"danger": "#ef4444",
			"warning": "#eab308",
			"sky": "#0ea5e9",
			transparent: "transparent",
			current: "currentColor",
			"white": "#ffffff",
			"purple": "#3f3cbb",
			"midnight": "#121063",
			"metal": "#565584",
			"tahiti": "#3ab7bf",
			"home": "#F3F4F6",
			"silver": "#ecebff",
			"bubble-gum": "#ff77e9",
			"bermuda": "#78dcca",
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
