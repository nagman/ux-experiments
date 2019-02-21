const withPlugins = require('next-compose-plugins');
const css = require('@zeit/next-css');
const sass = require('@zeit/next-sass');
const size = require('next-size');
const seo = require('next-seo');

const sassConfig = {
	cssModules: true,
	cssLoaderOptions: {
		localIdentName: '[local]__[hash:base64:5]',
	},
	sassLoaderOptions: {
		includePaths: ['theme'],
		outputStyle: 'compressed',
	},
};

const nextConfig = {
	env: {
		title: 'UX Experiments',
		url: 'https://ux-experiments.now.sh',
	},
};

module.exports = withPlugins([css, [sass, sassConfig], size, seo], nextConfig);
