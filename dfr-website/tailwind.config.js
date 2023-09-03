/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontSize: {
                "10xl": "10rem",
            },
            spacing: {
                128: "32rem",
                144: "36rem",
                160: "40rem",
                176: "44rem",
                224: "56rem",
                256: "64rem",
                400: "100rem",
            },
            colors: {
                "wh-0": "#FFFFFF",
                "wh-10": "#F4F4F4",
                "wh-50": "#FBFBFB",
                "wh-75": "#F7F7F7",
                "wh-100": "#C9C9C9",
                "wh-300": "#939393",
                "wh-500": "#595959",
                "wh-900": "#0F0F0F",
                "accent-red": "#EA9648",
                "accent-orange": "#E87500",
                "accent-green": "#2D8B49",
                "or-10": "#ff841c",
            },
            backgroundImage: (theme) => ({
                "gradient-gradual":
                    "linear-gradient(180deg, rgba(116, 116, 116, 0) 66.15%, #000000 100%)",
            }),
        },
        screens: {
            xs: "480px",
            sm: "768px",
            md: "1060px",
        },

        navbarLink: {
            fontSize: "1.25rem",
            hoverColor: "#E87500",
            hoverUnderline: true,
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
