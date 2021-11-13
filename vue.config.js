const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
  publicPath: process.env.PUBLIC_PATH,
  outputDir: `dist-${process.env.MODE}`,
  configureWebpack: {
    plugins: [
      // Other plugins...
      new GenerateSW({
        clientsClaim: true,
        skipWaiting: true
      })
    ]
  } 
}