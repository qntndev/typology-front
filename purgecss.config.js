module.exports = {
	content: [ './src/**/*.vue', './src/**/*.js', './src/**/*.jsx', './src/**/*.html', './src/**/*.md' ],
	whitelist: [ 'body', 'html', 'img', 'a', 'g-image', 'g-image--lazy', 'g-image--loaded' ],
	whitelistPatterns: [],
	whitelistPatternsChildren: [ /^token/, /^pre/, /^code/ ],
	defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || []
};
