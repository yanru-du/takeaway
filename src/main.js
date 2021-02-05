import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex'
Vue.config.productionTip = false;

import  'assets/css/base.css' // 引入公共css 样式
import  'assets/js/index'   // 引入全局方法


setTimeout(()=>{
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app');
},1000);

