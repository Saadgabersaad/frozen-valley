/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    assetPrefix: '/frozen-valley/',  // ✅ this line — matches your repo name
};

export default nextConfig;
