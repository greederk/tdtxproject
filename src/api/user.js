import request from '@/util/request'

export function login(data){
    return request({
        url:'/user/login',
        methods:'post',
        data
    })
}