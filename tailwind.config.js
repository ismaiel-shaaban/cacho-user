/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
         // Define custom utility classes
         textColor: theme => ({
          'primary': `var(--primary-color)`,
          'primary-100': `var(--bahaa)` , 
          'secondary': `var(--text-color-secondary)`, // This class will take color from --text-color-secondary root variable
        }),
        backgroundColor: theme => ({
          'primary': `var(--bg-color)`, // This class will take color from --bg-color-primary root variable
          'secondary': `var(--bg-color-secondary)`, // This class will take color from --bg-color-secondary root variable
        }),
    },
  },
  plugins: [],
};
