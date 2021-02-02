import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

import  'assets/css/base.css' // 引入公共css 样式
import 'assets/js/fontSizeAuto.js'
setTimeout(()=>{
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app');
},1000);

