/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'dev-govis.s3.ap-northeast-2.amazonaws.com',
      'dev-govis-ai.s3.ap-northeast-2.amazonaws.com',
      'govis.s3.ap-northeast-2.amazonaws.com',
      'govis-ai.s3.ap-northeast-2.amazonaws.com',
    ],
    formats: ['image/avif', 'image/webp'],
  },
  compiler: {
    emotion: {
      // default is true. It will be disabled when build type is production.
      sourceMap: true,
      // default is 'dev-only'.
      autoLabel: 'always',
      // default is '[local]'.
      // Allowed values: `[local]` `[filename]` and `[dirname]`
      // This option only works when autoLabel is set to 'dev-only' or 'always'.
      // It allows you to define the format of the resulting label.
      // The format is defined via string where variable parts are enclosed in square brackets [].
      // For example labelFormat: "my-classname--[local]", where [local] will be replaced with the name of the variable the result is assigned to.
      labelFormat: '[local]',
      // default is undefined.
      // This option allows you to tell the compiler what imports it should
      // look at to determine what it should transform so if you re-export
      // Emotion's exports, you can still use transforms.
    },
  },
};

module.exports = nextConfig;
