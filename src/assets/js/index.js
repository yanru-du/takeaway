import Vue from 'vue'
import 'assets/js/fontSizeAuto.js'  // 引入字体
import sino from './sino'    // 公共方法

Vue.prototype.$sino = sino;   // 公共方法挂在全局

Vue.prototype.$bus =  new Vue();   // 自定义事件挂在全局