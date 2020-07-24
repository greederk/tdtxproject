import { login } from '@/api/user'
import {gettoken ,settoken,removetoken} from '@/util/auth'
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
            login({username:ursername.trim(),password:password}).then(response => {
                const {data} = response
                commit('SET_TOKEN' ,data.token)
                settoken(data.token)
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    }
}