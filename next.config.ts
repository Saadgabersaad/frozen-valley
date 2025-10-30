/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
    basePath: '/frozen-valley',       // 👈 MUST match your GitHub repo name
    assetPrefix: '/frozen-valley/',   // 👈 MUST end with a slash
    trailingSlash: true,
};

export default nextConfig;
