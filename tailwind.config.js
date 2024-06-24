import { createThemes } from 'tw-colors';

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {

        fontSize: {
            'sm': '12px',
            'base': '14px',
            'xl': '16px',
            '2xl': '20px',
            '3xl': '28px',
            '4xl': '38px',
            '5xl': '50px',
        },

        extend: {
            fontFamily: {
              inter: ["'Inter'", "sans-serif"],
              gelasio: ["'Nunito'", "serif"]
            },
        },

    },
    plugins: [
        createThemes({
            light: {
                'white': '#FFFFFF',
                'black': '#382933',
                'grey': '#D3D3D3',
                'dark-grey': '#4A4A4A',
                'red': '#FF3B3B',
                'transparent': 'transparent',
                'twitter': '#1DA1F2',
                'purple': '#7D3EFF',
                'blue-neon': '#00FFFF',
                'green-neon': '#39FF14'
            },
            dark: {
                'white': '#333',
                'black-bg': '#382933',
                'black':  '#E5E5E5',
                'grey2' :'#D3D3D3',
                'black-light':'#10454F',
                'green-orange':'#506266',
                'grey' :'#1C82AD',
                'light-grey': '#2C2C2C',
                'dark-grey': '#A6A6A6',
                'dark-blue': '#00337C',
                'blue' : '#3389f0',
                'light-green':'#03C988',
                'red': '#FF3B3B',
                'transparent': 'transparent',
                'twitter': '#1DA1F2',
                'purple': '#7D3EFF',
                'blue-neon': '#00FFFF',
                'green-neon': '#39FF14'
            }
        })
    ],
};