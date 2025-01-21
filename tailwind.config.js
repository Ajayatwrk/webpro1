export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out", 
      },
      boxShadow: {
        "text-shadow": "2px 2px 5px rgba(0, 0, 0, 0.8)", 
      },
    },
  },
  plugins: [],
};
