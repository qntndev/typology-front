module.exports = () => {
	return ({ addBase, theme }) => {
		addBase({
			'*, *::before, *::after': {
				boxSizing: 'border-box',
				outline: 'none'
			},
			'html, body': {
				fontSize: '16px',
				backgroundColor: '#fbf9f7',
				'-webkit-font-smoothing': 'antialiased'
			},
			button: {
				margin: 0,
				borderColor: 'transparent'
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
			},
			p: {
				lineHeight: 1.7
			}
		});
	};
};
