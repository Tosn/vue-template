const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
// 定义压缩文件类型
const productionGzipExtensions = ['js', 'css']
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/dealerWebApi': {
        target: 'http://52.60.202.19:18088/dealerWebApi/',
        changeOrigin: true,
        pathRewrite: {
          '^/dealerWebApi': ''
        }
      }
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 生产环境关闭source-map
      config.devtool = 'none'
      // 生产环境配置生成gzip
      config.plugins.push(
        new CompressionPlugin({
          filename: '[path].gz[query]', // 提示 compression-webpack-plugin@3.0.0的话asset改为filename
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8
        })
      )
    } else {
      // 开发环境
    }
  },
  chainWebpack (config) {
    // 配置svg规则排除icons目录中svg文件处理
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    // 新增icons规则，设置svg-sprite-loader处理icons目录中的svg
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
