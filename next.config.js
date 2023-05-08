/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: { domains: ['https://www.signettags.com/'] },
};

module.exports = nextConfig;
