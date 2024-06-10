import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          black: '#060b0e',
        },
      },
    },
    container: {
      center: true,
      screens: {
        ...defaultTheme.screens,
        xl: defaultTheme.screens.lg,
        '2xl': defaultTheme.screens.lg,
      },
    },
  },
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        dark: {
          colors: {
            background: '#0A1216',
            primary: '#227D5A',
          },
        },
      },
    }),
    require('tailwind-scrollbar'),
  ],
};
export default config;
