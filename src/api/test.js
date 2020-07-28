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
      method:'get'
  })
}


// 上传配置展示
export function getupload(pagesize,currentpage){
  return request({
    url:`/api/td/uploadConfig/list/${pagesize}/${currentpage}`,
    method:'get'
  })
}

//添加上传配置
export function postupload(data){
  return request({
    url:'/api/td/uploadConfig/save',
    method:'post',
    data
  })
}

// 获取上传平台
export function getuplaodtype(){
  return request({
    url:"/api/td/platform/list",
    method:"get"
  })
}
//修改基本配置
export function postbaseconfig(data){
  return request({
    url:'/api/td/baseConfig/updateBaseConfig',
    method:'put',
    data
    
  })
}

// 查询留点留钱设置
export function getliudian(pageSize,currentPage){
  return request({
    url:`/api/td/priceConfig/list/${pageSize}/${currentPage}`,      //可用参数  10/0    10/1
    method:'get',
  })
}
// 添加留点留钱设置
export function postliudain(data){
  return request({
    url:'/api/td/priceConfig/save',
    method:'post',
    data
  })
}

//过滤配置展示   /td/filterConfig/list/{pageSize}/{currentPage}
export function getfilter(pagesize,currentpage){
  return request({
    url:`/api/td/filterConfig/list/${pagesize}/${currentpage}`,
    method:'get'
  })
}

// 官网座位数查询 
export function getgwcount(pagesize,currentpage){
  return request({
    url:`/api/td/seatCountConfig/list/${pagesize}/${currentpage}`,
    method:"get"
  })
}

//添加官网座位数
export function postgwcount(data){
  return request({
    url:"/api/td/seatCountConfig/save",
    method:"post",
    data
  })
}


//获取政策类型   
export function getpolicy(id){
  return request({
    url:`/api/td/PolicyType/selectPolicyTypeByPlatformId/${id}`,
    method:"get",
    // 可用参数 1/2     //data：特惠、普通、规则运价
  })
}