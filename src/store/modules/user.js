import { login,logout } from '@/api/user'
import {gettoken ,settoken,removetoken} from '@/util/auth'
import {resetrouter} from '@/router'
const state = {
    token:gettoken(),

}
const mutations = {
    SET_TOKEN:(state,tokenval) => {
        state.token = tokenval
    }
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
    logoutcf({commit,state}){
        return new Promise((resolve,reject)=> {
            logout(state.token).then(()=>{
                commit('SET_TOKEN','')
                commit('SET_ROLES','')
                removetoken()
                resetrouter()
                resolve()
            }).catch((error)=>{
                reject(error)
            })
        })
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}