import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    login:[],
    regi:[],
  },
  mutations:{
    // 登录页面缓存
    loginData(state, params){
      state.login = params;
      sessionStorage.setItem('loginData',JSON.stringify(state.login))
    },
    // 注册页面缓存
    regiData(state, params){
      state.regi = params;
      sessionStorage.setItem('regi',JSON.stringify(state.regi))
    },
  }
});

export default store