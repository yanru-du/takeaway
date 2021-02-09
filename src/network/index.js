import Axios from 'axios'
import Vue from 'vue'

// 1.创建axios的实例
const service = Axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 10000,
});

let timeOutFlag = false;
// 2.axios请求拦截
service.interceptors.request.use(config => {
  Vue.prototype.$bus.$emit('loading', true);
  return config
}, error => {
  return Promise.reject(error)
});

// 2.2.响应拦截
service.interceptors.response.use(res => {
  Vue.prototype.$bus.$emit('loading', false);
  return res.data
}, error => {
  // 请求超时处理
  if (error.message.indexOf('timeout') !== '-1' && !timeOutFlag) {
    timeOutFlag = true;
    this.$bus.$emit('alert', '', '网络连接超时，请您检查网络', () => {
      timeOutFlag = false;
    })
  } else
    return Promise.reject(error)
});

// 3.发送真正的网络请求  get 和 put  的传参必须发送{}
export const get = (url, params) => service.get(url, {params});
export const post = (url, data) => service.post(url, data);
export const deletes = (url, data) => service.delete(url, {data});
export const put = (url, data) => service.put(url, data);


