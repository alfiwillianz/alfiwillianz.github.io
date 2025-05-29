const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  outputDir: 'dist',
  css: {
    loaderOptions: {
      css: {
        // options here will be passed to css-loader
      },
    }
  },
  configureWebpack: {
    // Additional webpack configuration
  }
})
