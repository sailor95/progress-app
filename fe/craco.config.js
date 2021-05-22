const cracoAlias = require('craco-alias')

module.exports = {
  plugins: [
    {
      // Ref: https://stackoverflow.com/a/63385127/5721873
      plugin: cracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
}
