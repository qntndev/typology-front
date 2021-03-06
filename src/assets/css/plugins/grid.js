const _ = require('lodash');
const mixins = require('../mixins');

module.exports = function({ columns = 12, gutterWidth = '1rem', variants = [ 'responsive' ] }) {
	const colWidth = (width = 1) => 100 / columns * width;
	return function({ e, addUtilities, addComponents }) {
		addComponents([
			{
				'.container, .container-fluid': {
					...mixins.paddingX('0.5rem')
				},
				'.container-fluid': {
					width: '100%'
				},
				'.row': {
					display: 'flex',
					flexWrap: 'wrap',
					...mixins.marginX('-0.5rem')
				},
				'.col,[class*= "col-"]': {
					width: '100%',
					...mixins.paddingX('0.5rem')
				},
				'@media (min-width: 640px)': {
					'.container, .container-fluid': {
						...mixins.paddingX(gutterWidth)
					},
					'.row': {
						...mixins.marginX('-' + gutterWidth)
					},
					'.col,[class*= "col-"]': {
						...mixins.paddingX(gutterWidth)
					}
				}
			}
		]),
			addUtilities(
				[
					..._.range(1, columns + 1).map((column) => ({
						[`.col-${column}`]: { width: colWidth(column) + '%' },
						[`.offset-${column}`]: { marginLeft: colWidth(column) + '%' },
						[`.order-${column}`]: { order: column }
					}))
				],
				variants
			);
	};
};
