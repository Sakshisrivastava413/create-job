/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/common-components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark: "var(--font-dark-212121, #212121)",
        "alert-red": "var(--alerts-error-d-86161, #D86161)",
        "grey-2": "var(--font-grey-27-a-7-a-7-a, #7A7A7A)",
        "card-border": "var(--elements-color-card-border-e-6-e-6-e-6, #E6E6E6)",
      },
      fontFamily: {
        display: ["Poppins"],
      },
    },
  },
  plugins: [],
};
