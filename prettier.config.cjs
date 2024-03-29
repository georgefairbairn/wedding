/** @type {import("prettier").Config} */
module.exports = {
  // i am just using the standard config, change if you need something else
  ...require('prettier-config-standard'),
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ],
  pluginSearchDirs: [__dirname],
  plugins: [require.resolve('prettier-plugin-astro')],
  semi: true
};
