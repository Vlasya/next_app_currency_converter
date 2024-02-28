import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        converter_bg_image: "url('../public/converter_bg_img.png')",
      },
      backgroundColor: {
        pageBg: '#F6F7FF',
        blueBg: '#2C36F2',
      },
      colors: {
        activeEl: '#2C36F2',
        baseColor: '#707C87',
        lightText: '#F6F7FF',
        blackText: '#1F1E25',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
