import {
  LOGIN_DATA,
  REGI_DATA,
} from "./mutations_type"

export  default {
  [LOGIN_DATA](state,params){
    state.login = params;
  },
  [REGI_DATA](state,params){
    state.regi = params;
  },
}
