module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{json,js,html,css,jpeg,jpg,png,gif,mjs,ttf,woff,woff2,lnk,bmp,pdf,txt}'
	],
	swDest: 'build/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};