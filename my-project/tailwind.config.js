/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            spacing: {
                35: '35px',
            },
            colors: {
                gray33: '#333',
                grayDark: '#020005',
            },
        },
    },
    plugins: [],
};
