import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import daisyui from "daisyui";

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				default: ["roboto", "sans-serif"],
			},
		},
		screens: {
			xs: "475px",
			...defaultTheme.screens,
		},
	},
	plugins: [daisyui],
};
export default config;
