const {colors} = require('tailwindcss/defaultTheme')

module.exports = {
	theme: {
		fontFamily: {
			'serif': ['sans-serif'],
			'serif-light': ['sans-serif-light'],
			'serif-bold': ['sans-serif-bold'],
			'dana': ['dana'],
			'dana-bold': ['dana-bold'],
		},
		extend: {
			spacing: {
				'special': '80vh',
				'present': '95vh',
				'present-w': '90vw',
				'slider': '50vh',
				'sidebar': '36%',
				'special-wrapper': '75vh',
				'7': '1.8rem',
				'14': '3.4rem',
				'68': '22rem',
				'78': '32rem',
			},
			colors: {
				rose: {
					100: '#F8F6F2',
					200: '#EEE3DE',
					300: '#E4D3CA',
					400: '#CFB1A2',
					500: '#BB907A',
					600: '#A8826E',
					700: '#705649',
					800: '#544137',
					900: '#382B25',
				},
				gray: {
					...colors.gray,
					100: '#F7F7F7',
				},
			},
		},
	},
	variants: {
		backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
		border: ['focus', 'hover'],
		borderWidth: ['focus', 'hover'],
		borderColor: ['focus', 'hover'],
	},
	plugins: [],
}
