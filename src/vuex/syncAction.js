import {LOGIN_DATA, REGI_DATA} from "./mutations_type";

// 注册登录页面表单数据的保存
export function loginDataAction({commit, state}, params) {
  commit(LOGIN_DATA, params);
  sessionStorage.setItem('loginData', JSON.stringify(state.login))
};

export function regiDataAction({commit, state}, params) {
  commit(REGI_DATA, params);
  sessionStorage.setItem('regiData', JSON.stringify(state.login))
}

