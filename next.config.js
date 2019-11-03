const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript({
  webpack: function (config) {
    return config;
  }
});
