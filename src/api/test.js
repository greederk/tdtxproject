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

// 查询留点留钱设置
export function getliudian(pageSize,currentPage){
  return request({
    url:`/api/td/priceConfig/list/${pageSize}/${currentPage}`,
    methods:'get',
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
  })
}

//过滤配置展示   /td/filterConfig/list/{pageSize}/{currentPage}
export function getfilter(pagesize,currentpage){
  return request({
    url:`/api/td/filterConfig/list/${pagesize}/${currentpage}`,
    methods:'get'
  })
}