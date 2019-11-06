const _ = require('lodash');
const mixins = require('../mixins');

module.exports = function() {
	return function({ e, addUtilities, addComponents }) {
		addUtilities([
			..._.range(1, 5).map((index) => ({
				[`.transition-${index}`]: { transitionDuration: 0.25 * index + 's' }
			}))
		]);
	};
};
