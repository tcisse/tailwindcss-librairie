/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {},
        fontFamily: {
            raleway: ["Raleway"]
        }
    },
    plugins: [require("@tailwindcss/forms")]
};
