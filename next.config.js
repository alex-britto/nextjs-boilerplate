const path = require('path');

module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack(config, options) {
    config.resolve.alias['@'] = path.join(__dirname);
    return config;
  },
};