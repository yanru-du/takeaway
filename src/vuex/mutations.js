import {
  LOGIN_DATA,
  REGI_DATA,
} from "./mutations_type"

export  default {
  [LOGIN_DATA](state,params){
    state.login = params;
    sessionStorage.setItem('loginData',JSON.stringify(state.login))
  },
  [REGI_DATA](state,params){
    state.regi = params;
    sessionStorage.setItem('regiData',JSON.stringify(state.login))
  },
}
