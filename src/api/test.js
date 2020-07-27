import request from '@/util/request.js'
export function getListdb() {
    return request({
      url: '/api/activity/servicetime',
      method: 'get',
      
    })
}
export function getController(){
  return request({
      url:"/api/td/platform/list",
      methods:'get'
  })
}


//修改基本配置
export function postbaseconfig(data){
  return request({
    url:'/api/td/baseConfig/updateBaseConfig',
    methods:'put',
    params:{
      data
    }
  })
}

// 添加留点留钱设置
export function postliudain(data){
  return request({
    url:'/api/td/priceConfig/save',
    methods:'post',
    params:{
      data
    },
    // headers:{
    //   "Content-Type":'application/x-www-form-urlencoded'
    // }
  })
}