/** @type {import('next').NextConfig} */
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
	reactStrictMode: true,
	swcMinify: true,
	images: { domains: ['https://www.signettags.com/','cloud.squidex.io'] },
	webpack: (config, { isServer }) => {
		if (!isServer) {
			// Minify JS
			config.optimization.minimize = true;
			config.optimization.minimizer = [new TerserPlugin()];

			// Minify CSS
			config.optimization.minimizer.push(new CssMinimizerPlugin());
		}

		return config;
	},
};
