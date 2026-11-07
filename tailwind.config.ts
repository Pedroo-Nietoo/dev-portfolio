import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ... suas configurações de cores, etc
    },
  },
  plugins: [
    // ADICIONE ESTA LINHA AQUI:
    require('@tailwindcss/typography'),
  ],
};
export default config;