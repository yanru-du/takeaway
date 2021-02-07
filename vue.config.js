const merge = require('webpack-merge');
console.log('当前打包环境', process.env.VUE_APP_SERVER_ENV);

module.exports = {
  publicPath: './',
  lintOnSave: true,
  devServer: {
    host: '',
    disableHostCheck: true,
    port: 80
  },
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        'utils': '@/utils',
      }
    },
  },
  // configureWebpack: config => {
  //   const baseConf = require('./build/webpack.base.conf')(config);
  //   if (process.env.NODE_ENV === 'production') {
  //     // 生产环境配置
  //     return merge(baseConf, require('./build/webpack.prod.conf')(config));
  //   } else {
  //     // 开发环境配置
  //     return merge(baseConf, require('./build/webpack.dev.conf')(config));
  //   }
  // }
};

