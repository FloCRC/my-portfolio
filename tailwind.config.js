/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            xxl: { max: "1536px" },
            xl: { max: "1279px" },
            lg: { max: "1023px" },
            md: { max: "767px" },
            sm: { max: "639px" },
        },
        colors: {
            'grey': '#374151',
            'red': '#F16460'
        },
        extend: {},
    },
    plugins: [],
}

