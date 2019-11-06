// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const productsData = require('./data/products.json');

module.exports = function(api) {
	api.loadSource(({ addCollection }) => {
		// Use the Data Store API here: https://gridsome.org/docs/data-store-api/
		const products = addCollection('Product');

		for (const item of productsData) {
			products.addNode({
				id: item.id,
				title: item.title,
				subtitle: item.subtitle,
				reference: item.reference,
				volume: item.volume,
				description: item.description,
				regularPrice: item.regular_price,
				image: item.image,
				tag: item.tag
			});
		}
	});

	api.createPages(({ createPage }) => {
		// Use the Pages API here: https://gridsome.org/docs/pages-api/
	});
};
