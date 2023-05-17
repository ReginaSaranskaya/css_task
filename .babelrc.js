module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: '3.30.2',
        useBuiltIns: 'usage',
      }
    ]
  ]
}