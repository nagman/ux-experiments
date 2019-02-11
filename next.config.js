const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

const sass = withSass({
	cssModules: true,
	cssLoaderOptions: {
		localIdentName: '[local]__[hash:base64:5]',
	},
	sassLoaderOptions: {
		includePaths: ['theme'],
		outputStyle: 'compressed',
	},
});

module.exports = withCss(sass);
