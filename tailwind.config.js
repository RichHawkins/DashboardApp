/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#0047AB", // Replace with your primary brand color
        "brand-secondary": "#F0F8FF", // Replace with your secondary brand color
        "brand-accent": "#FF6B6B", // Replace with your accent brand color
        "brand-text": "#333333", // Replace with your main text color
        "brand-accent-dark": "#FF4F4F", // Darker shade of accent for hover states
      },
    },
  },
  plugins: [],
}

