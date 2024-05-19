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
    extend: {
      colors: {
        cyan: {
          black: "#060b0e",
        },
      },
    },
    container: {
      center: true,
      screens: {
        ...defaultTheme.screens,
        'xl': defaultTheme.screens.lg,
        '2xl': defaultTheme.screens.lg
      }
    }
  },
  plugins: [nextui({
    addCommonColors: true,
    themes: {
      dark: {
        colors: {
          background: {
            DEFAULT: '#0A1216',
          },
          overlay: {
            DEFAULT: '#102A36',
          },
          default: {
            50: '#003C2E',
            100: '#042E24',
            200: '#004A39',
            300: '#105746',
            400: '#256856',
            500: '#3B7C69',
            600: '#5B9C88',
            700: '#4F8F7C',
            800: '#87C9B4',
            900: '#ADEFDA',
          },
          primary: '#227D5A',
          content1: '#111A1F',
        }
      }
    }
  }), require('tailwind-scrollbar')],
};
export default config;
