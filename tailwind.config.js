module.exports = {
	theme: {
		fontFamily: {
			body: [ 'Post Grotesk', 'sans-serif' ],
			mono: [ 'Lettera Text', 'mono' ]
		},
		extend: {
			colors: {
				gray: {
					'100': '#f5f5f5',
					'200': '#eeeeee',
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
				'1/2': '50%',
				'1/3': '33.333333%',
				'2/3': '66.666667%',
				'1/4': '25%',
				'2/4': '50%',
				'3/4': '75%',
				'5/4': '125%'
			},
			fontSize: {
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
		})
	]
};
