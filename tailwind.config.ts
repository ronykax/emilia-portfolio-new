import type { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    theme: {
        extend: {
            borderRadius: {
                "4xl": "2rem",
                "5xl": "2.5rem",
                "6xl": "3rem",
                "7xl": "3.5rem",
                "7.5xl": "4rem",
                "8xl": "4.5rem",
            },
            width: {
                26: "6.25rem",
            },
            height: {
                26: "6.25rem",
            },
        },
        colors: {
            white: "#FFFFFF",
            blue: "#2651e9",
            black: "#000000",
        },
    },

    plugins: [],
} satisfies Config;
