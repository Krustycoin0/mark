/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['infura-ipfs.io', 'https://app.infura.io/dashboard/ethereum/d57f136bd5024f4889c74a1d4f7ce760/settings/endpoints'],
	},
};

module.exports = nextConfig;
