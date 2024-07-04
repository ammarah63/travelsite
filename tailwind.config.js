/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
       screens: {
        xl: "1366px",
        "3xl": "1920px",
        "4xl": "2560px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        custom: "0 9px 20px -3px rgba(0, 0, 0, 0.1)",
        customTestimonial: "0px 3px 8px rgba(0, 0, 0, 0.24)", // Corrected line
        customBook: "0px 22px 70px 4px rgba(137, 177, 230, 0.8)", // Corrected line
      },
    },
  },
  plugins: [],
};
