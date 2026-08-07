/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: بينفع يترفع على Cloudflare Pages / GitHub Pages / أي استضافة static
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
