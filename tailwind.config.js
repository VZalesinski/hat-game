/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./App.{js,jsx,ts,tsx}',
		'./src/components/**/*.{js,jsx,ts,tsx}',
		'./src/screens/**/*.{js,jsx,ts,tsx}',
		'./src/modules/**/*.{js,jsx,ts,tsx}',
		'./src/utils/**/*.{js,jsx,ts,tsx}',
		'./<custom directory>/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		colors: {
			transparent: 'transparent',
			white: '#FFF',
			redDark: '#780000',
			redLight: '#C1121F',
			pinkLight: '#E2B4BD',
			pinkDark: '#9B6A6C',
			yellow: '#ECD7B4',
			orange: '#F18F01',
			whiteMain: '#E1F2FE',
			blueDark: '#074F57',
			blueLight: '#98D2EB'
		},
		fontFamily: {
			roboto: ['RobotoCondensed_400Regular'],
			robotoBold: ['RobotoCondensed_700Bold'],
			caveat: ['Caveat_400Regular']
		},
		extend: {}
	},
	plugins: []
}
