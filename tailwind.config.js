/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
 
  daisyui: {
    themes: [
      {
        // mytheme: {
        //   primary: "#FFE0B3",
        //   secondary: "#fde68a",
        //   accent: "#4b5563",
        //   neutral: "#fb7",
        //   "base-100": "#ffffff",
        // },
        mytheme: {
          
          "primary": "#FFE0B3",
                   
          "secondary": "#463AA1",
                   
          "accent": "#C149AD",
                   
          "neutral": "#021431",
                   
          "base-100": "#FFFFFF",
                   
          "info": "#93E6FB",
                   
          "success": "#80CED1",
                   
          "warning": "#EFD8BD",
                   
          "error": "#E58B8B",
                   },
      },
      // "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}

