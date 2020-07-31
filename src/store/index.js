import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import user from './modules/user'

Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
      app,
    //   settings,
      user,
    //   test
      
    },
    getters
  })
  
  export default store
  // 财务，退改签 出票员 部门主管