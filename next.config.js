/** @type {import('next').NextConfig} */
const { withAxiom } = require('next-axiom');

const nextConfig = withAxiom({
  reactStrictMode: true,
  images: {
    domains: ['dev-govis.s3.ap-northeast-2.amazonaws.com'],
    unoptimized: true,
  },
  compiler: {
    emotion: true,
  },
});

module.exports = nextConfig;
