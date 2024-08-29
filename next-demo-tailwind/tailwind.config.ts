import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  plugins: [
    daisyui,
  ],
  daisyui: {
    prefix: 'dui-', // default: ""
    base: false, // default: true (applies background/foreground color)
    darkTheme: 'turn off dark theme'
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        pal: {
          // Same colors found in MUI theme (src\components\Layout\theme\palette.theme.ts)
          implightblue100: '#daeaf6',
          impblue300: '#4d88b6',
          impblue400: '#266FA6',
          impblue500: '#005596',
          impblue700: '#00335A',
          impgray100: '#edeeee',
          impgray700: '#646466',
          impgray900: '#212121',
          impgraydark: '#393939',
          impgreen500: '#5bc2a7',
          impgreen700: '#49b496',
          impgreen50: '#ebf8f4',
          impgreen900: '#2f9f7c',
          white: '#ffffff',
          'gray-light': '#f0f4f7',
          'gray-medium': '#707070',
          danger: '#dc3545',
          link: '#1f846a',
        },

        theme: {
          // primary: 'rgb(var(--primary) / <alpha-value>)',
          // secondary: 'rgb(var(--secondary) / <alpha-value>)',
          // tertiary: 'rgb(var(--tertiary) / <alpha-value>)',
          success: 'rgb(var(--success) / <alpha-value>)',
          info: 'rgb(var(--error) / <alpha-value>)',
          error: 'rgb(var(--warning) / <alpha-value>)',
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
};
export default config;
