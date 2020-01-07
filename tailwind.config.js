const {colors} = require('tailwindcss/defaultTheme')

module.exports = {
	theme: {
		fontFamily: {
			'dana': ['dana'],
			'dana-bold': ['dana-bold'],
		},
		extend: {
			spacing: {
				'2.2': '2.2rem',
				'22': '22rem',
				'15': '15rem',
				'30%': '30%',
				'32%': '32%',
				'40%': '40%',
				'48%': '48%',
				'56%': '56%',
				'64%': '64%',
				'70%': '70%',
				'80%': '80%',
				'90%': '90%',
				'30vh': '30vh',
				'32vh': '32vh',
				'38vh': '38vh',
				'40vh': '40vh',
				'48vh': '48vh',
				'56vh': '56vh',
				'64vh': '64vh',
				'70vh': '70vh',
				'80vh': '80vh',
				'90vh': '90vh',
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
		fontFamily: ['hover'],
		border: ['responsive', 'focus', 'hover'],
		borderWidth: ['responsive', 'focus'],
		borderColor: ['responsive', 'focus', 'hover'],
	},
	plugins: [],
}
