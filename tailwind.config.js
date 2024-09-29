/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
     extend: {
    },
    fontSize: {
      sm: '0.75rem',
      base: '1rem',
      xl: '1.5rem',
      '2xl': '2.25rem',
      '3xl': '3rem',
      '4xl': '3.5rem',
      '5xl': '4.5rem',
      '6xl': '7.5rem',
      '7xl': '9rem',
      '8xl': '9.75rem'
    },
   
    colors: {
      'avant-green': '#b8d158',
      'centre-parfait': '#f2f2f2',
      'apres-huit': '#1a1a1a',
      'body-text': '#656661',
      'link': '#4572E5',
      'link-hover': '#0081e5',
      'interface-light': '#dddddd',
      'interface-dark': '#868686',
      'body-yellow': '#f2fcca'
    },
  },
  
  plugins: [],
};
