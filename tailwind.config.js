module.exports = {
	theme: {
		fontFamily: {
			body: [ 'Post Grotesk', 'sans-serif' ],
			mono: [ 'Lettera Text', 'mono' ]
		},
		extend: {
			colors: {
				gray: {
					'100': '#fbf9f7',
					'200': '#f3f4f1',
					'300': '#e0e0e0',
					'400': '#bdbdbd',
					'500': '#9e9e9e',
					'600': '#757575',
					'700': '#616161',
					'800': '#424242',
					'900': '#212121'
				}
			},
			spacing: {
				'28': '7rem',
				'1/2': '50%',
				'1/3': '33.333333%',
				'2/3': '66.666667%',
				'1/4': '25%',
				'2/4': '50%',
				'3/4': '75%',
				'5/4': '125%'
			},
			fontSize: {
				'3xs': '0.5rem',
				'2xs': '0.625rem',
				'7xl': '5.5rem'
			}
		}
	},
	variants: {},
	corePlugins: {
		preflight: false
	},
	plugins: [
		require('./src/assets/css/plugins/reset')(),
		require('./src/assets/css/plugins/base')(),
		require('./src/assets/css/plugins/grid')({
			columns: 12,
			gutterWidth: '0.75rem'
		}),
		require('./src/assets/css/plugins/transitions')()
	]
};
