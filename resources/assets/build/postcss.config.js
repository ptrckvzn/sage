/* eslint-disable */
const rucksack = require('rucksack-css');

const cssnanoConfig = {
  preset: ['default', { discardComments: { removeAll: true } }]
};

module.exports = ({ file, options }) => {
  return {
    rucksack: rucksack(),
    parser: options.enabled.optimize ? 'postcss-safe-parser' : undefined,
    plugins: {
      cssnano: options.enabled.optimize ? cssnanoConfig : false,
      autoprefixer: true,
      lost: { /* ...options */ },
      'rucksack-css': true,
    },
  };
};
