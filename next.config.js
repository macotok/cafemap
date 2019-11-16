const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css')

module.exports = withTypescript({
  webpack: function (config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': './src'
    }

    return config;
  }
});

module.exports = withCSS({
  cssLoaderOptions: {
    url: false
  }
});
