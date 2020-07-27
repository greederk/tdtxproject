import { login,logout } from '@/api/user'
import {gettoken ,settoken,removetoken} from '@/util/auth'
import {resetrouter} from '@/router'
const getDefaultState = () => {
    return {
      token: gettoken(),
      name: '',
      avatar: ''
    }
  }
  
const state = getDefaultState()
const mutations = {
    SET_TOKEN:(state,tokenval) => {
        state.token = tokenval
    },
    RESET_STATE:(state)=>{
        Object.assign(state, getDefaultState())
    },
}
const actions = {
    logincf({commit},userInfo){
        const {username,password} = userInfo
        return new Promise((resolve,reject) => {
            login({username:username.trim(),password:password}).then(response => {
                const {data} = response
                commit('SET_TOKEN' ,data.token)
                settoken(data.token)
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    loginout({commit}){
        return new Promise((resolve,reject) => {
            logout(state.token).then(()=>{
                removetoken()
                resetrouter()
                commit('RESET_STATE')
                resolve()
            }).catch((err)=>{
                reject(err)
            })
        })
    },
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}