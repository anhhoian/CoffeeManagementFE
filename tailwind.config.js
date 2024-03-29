const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		screens: {
			xs: '480px',
			...defaultTheme.screens, // sm+
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
