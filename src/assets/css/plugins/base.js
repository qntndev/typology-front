module.exports = () => {
	return ({ addBase, theme }) => {
		addBase({
			'*, *::before, *::after': {
				boxSizing: 'border-box',
				outline: 'none'
			},
			html: {
				// fontFamily: theme('fontFamily.mono').join(),
				fontSize: '16px',
				lineHeight: 1.7
			},
			body: {
				backgroundColor: '#fbf9f7'
			},
			button: {
				margin: 0
			},
			img: {
				maxWidth: '100%',
				display: 'block'
			},
			a: {
				textDecoration: 'none',
				color: theme('colors.black')
			},
			hr: {
				border: 0,
				borderBottomWidth: '1px',
				borderBottomStyle: 'solid'
			}
		});
	};
};
