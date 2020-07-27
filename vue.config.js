const path = require('path')
// const defaultSettings = require('./src/settings.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}

// const name = defaultSettings.title || 'vue Admin Template' // page title
module.exports = {
    devServer: {
        host:'localhost',
        port: 8003,
        open: true,
        proxy: {
          
            '/api': {
                target:'http://39.106.83.150:8003/',   // 请求的第三方接口
                changeOrigin:true, // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                pathRewrite:{  // 路径重写，
                  '^/api': ''  
                }
              }
          },
      },
      chainWebpack(config) {
        config.plugins.delete('preload') // TODO: need test
        config.plugins.delete('prefetch') // TODO: need test
    
        // set svg-sprite-loader
        config.module
          .rule('svg')
          .exclude.add(resolve('src/icons'))
          .end()
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