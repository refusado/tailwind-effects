import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
      screens: {
        ...defaultTheme.screens,
        'xl': defaultTheme.screens.lg,
        '2xl': defaultTheme.screens.lg
      }
    }
  },
  plugins: [nextui(), require('tailwind-scrollbar')],
};
export default config;
