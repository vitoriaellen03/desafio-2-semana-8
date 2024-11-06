/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E293B",  
        white: "#FFF",                    
        black: "#000",
        button: "#3B5174", 
        "color-btn": "#160A60",
        "found-btn": "#F8F2FF",
        "blue-100": "#5C5A79",              
        "blue-200": "#3B5174",              
        "blue-300": "#1E293B", 
        "blue-400": "#6C7D96",             
        link: "#4F46E5",
        "h-link": "#268FE4",   
        "emphasis-blue": "#92bbff",  
        "emphasis-yellow": "#FCF4B6",  
        "emphasis-content": "#92bbff",
        "color-green": "#22C55E",
        "h-green": "#5CB77D",
      },
      fontFamily: {
        roboto: ["Roboto"],
      },
      spacing: {
        hundrend: "100px",
        sixty: "60px"
      },
      gradientColorStops: {
        "gradient-purple": "#FC04BA",
        "gradient-yellow": "#FFC702",
      },
    },
  },
  plugins: [],
}
