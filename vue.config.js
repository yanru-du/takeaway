module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    },
    devServer: {
      open: true,
      port: 8080,
    },
    lintOnSave: false
  }
}