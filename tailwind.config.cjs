/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,svelte}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        primary: "#2F80ED",
        "primary-accent-1": "#4F4F4F",
        "primary-accent-2": "#828282",
        "primary-accent-3": "#E0E0E0",
        "indicator-1": "#F8B76B",
        "indicator-2": "#8785FF",
        "indicator-3": "#EB5757",
        "indicator-4": "#F2C94C",
        "chats-1-1": "#FCEED3",
        "chats-1-2": "#E5A443",
        "chats-2-1": "#EEDCFF",
        "chats-2-2": "#9B51E0",
        "chats-3-1": "#D2F2EA",
        "chats-3-2": "#43B78D",
        "sticker-1": "#E9F3FF",
        "sticker-2": "#FDCFA4",
        "sticker-3": "#F9E9C3",
        "sticker-4": "#AFEBDB",
        "sticker-5": "#CBF1C2",
        "sticker-6": "#CFCEF9",
        "sticker-7": "#F9E0FD",
      },
    },
  },
  plugins: [],
};
