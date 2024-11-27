// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//     },
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      mdd: "950px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        slide: "slide 30s linear infinite",
        pulse2: "pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      colors: {
        // primary: "#eb7c2c",
        primary: "#ff7800",
        secondary: "#d72f2c",
        secondaryasal: "#d72f2c",
      },
      fontFamily: {
        sans: ["Outfit", "Montserrat", "sans-serif"],
      },
      boxShadow: {
        "custom-shadow":
          "inset 0 0 0 .2em #f47821, inset 0 0 1em .3em #f47821, 0 0 0 .2em #f47821, 0 0 1em .3em #f47821, 0.5em 0.5em .4em rgba(0, 0, 0, .6)",
        // "inset 0 0 0 .2em #e01f26, inset 0 0 1em .3em #e01f26, 0 0 0 .2em #e01f26, 0 0 1em .3em #e01f26, 0.5em 0.5em .4em rgba(0, 0, 0, .6)",
        "custom-shadow-2":
          "inset 0 0 0 .1em #f47821, inset 0 0 .5em .15em #f47821, 0 0 0 .1em #f47821, 0 0 .5em .15em #f47821, .5em .5em .2em rgba(0, 0, 0, .6)",
        "custom-shadow-3":
          "inset 0 0 0 .1em #000000, inset 0 0 .5em .15em #000000, 0 0 0 .1em #000000, 0 0 .5em .15em #000000, .5em .5em .2em rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [
    // require("tailwind-scrollbar"), // Add the scrollbar plugin here
    // require("@tailwindcss/typography"),
  ],
};