// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       // lineHeight: {
//       //   "extra-loose": "4.5",
//       //   12: "4rem",
//       // },
//     },
//   },
//   daisyui: {
//     // themes: ["cupcake", "dark", "cmyk"],
//   },
//   // eslint-disable-next-line no-undef
//   plugins: [require("daisyui")],
// };

import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // lineHeight: {
      //   "extra-loose": "4.5",
      //   12: "4rem",
      // },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  daisyui: {
    // themes: ["cupcake", "dark", "cmyk"],
  },
  plugins: [daisyui],
};
