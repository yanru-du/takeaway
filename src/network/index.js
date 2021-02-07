import Axios from 'axios'
import Vue from 'vue'

export function axios(config) {
  // 1.创建axios的实例
  const service = Axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 10000
  })

  // 2.axios请求拦截
  service.interceptors.request.use(config => {
    Vue.prototype.$bus.$emit('loading',true);
    return config
  }, err => {
    console.log(err);
  });

  // 2.2.响应拦截
  service.interceptors.response.use(res => {
    Vue.prototype.$bus.$emit('loading',false);
    return res.data
  }, err => {
    console.log(err);
  });

  // 3.发送真正的网络请求
  return service(config)
}
