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

// 获取政策类型
export function getpolicytype(platformId){
  return request({
    // 参数是上传平台的的 id 
    url:`/api/td/PolicyType/selectPolicyTypeByPlatformId/${platformId}`,    
    method:'get'
  })
}

//获取基本配置
export function getbaseconfig(){
  return request({
    url:'/api/td/baseConfig/selectOneBaseConfig',
    method:'get'
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

// 删除留点  
export function deletelidian(data){
  return request({
    url:'/api/td/priceConfig/deletes',
    method:'delete',
    data
  })
}

//过滤配置展示   /td/filterConfig/list/{pageSize}/{currentPage}
export function getfilterconfig(pagesize,currentpage){
  return request({
    url:`/api/td/filterConfig/list/${pagesize}/${currentpage}`,
    method:'get'
  })
}

// 修改过滤配置
export function putfilterconfig(data){
  return request({
    url:"/api/td/filterConfig/updateFilterConfigById",
    method:'put',
    data
  })
}

// 添加过滤配置
export function postfilterconfig(data){
  return request({
    url:"/api/td/filterConfig/saveFilterConfig",
    method:"post",
    data
  })
}

// 删除过滤配置
export function deletefilterconfig(data){
  return request({
    url:"/api/td/filterConfig/deleteBatchByIds",
    method:'delete',
    data
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

// 更新官网座位数
export function putgwcount(data){
  return request({
    url:"/api/td/seatCountConfig/updateSeatCountConfig",
    method:'put',
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

// 获取ip代理
export function getips(){
  return request({
    url:"/api/ip/get",
    method:'get'
  })
}

//获取票面价加价配置
export function getaddpiaomj(pageSize,currentPage){
  return request({
    url:`/api/td/printPriceConfig/list/${pageSize}/${currentPage}`,
    method:'get'
  })
}

// 修改票面价加价配置  
export function putpiaomianj(data){
  return request({
    url:'/api/td/printPriceConfig/updatePrintPriceConfig',
    method:'put',
    data
  })
}

// 删除票面价加价配置
export function deletepiaomj(data){
  return request({
    url:'/api/td/printPriceConfig/deleteBatch',
    method:'delete',
    data 
  })
}

//添加票面价设置
export function postpiaomj(data){
  return request({
    url:'/api/td/printPriceConfig/savePrintPriceConfig',
    method:'post',
    data
  })
}

// 获取退改签配置
export function gettgqconfig(pageSize,currentPage){
  return request({
    url:`/api/td/tgqConfig/list/${pageSize}/${currentPage}`,
    method:'get'
  })
}

// 添加退改签 配置
export function posttgqconfig(data){
  return request({
    url:"/api/td/tgqConfig/save",
    method:"post",
    data
  })
}

// 删除退改签配置 
export function deletetgqconfig(data){
  return request({
    url:"/api/td/tgqConfig/deleteBatchByIds",
    method:'delete',
    data
  })
}

//修改退改签配置  
export function puttgqconfig(data){
  return request({
    url:'/api/td/tgqConfig/updateTgqConfig',
    method:"put",
    data
  })
}

// 获取行李额配置 
export function getxingliconfig(pageSize,currentPage){
  return request({
    url:`/api/td/specialRuleConfig/list/${pageSize}/${currentPage}`,
    method:'get'
  })
}

//修改行李额配置  
export function putxingliconfig(data){
  return request({
    url:'/api/td/specialRuleConfig/updateSpecialRuleConfigMapper',
    method:'put',
    data
  })
}

// 刪除行李额配置
export function deletexingliconfig(data){
  return request({
    url:'/api/td/specialRuleConfig/deleteBatchByIds',
    method:'delete',
    data
  })
}

// 添加行李额配置
export function postxingliconfig(data){
  return request({
    url:'/api/td/specialRuleConfig/save',
    method:"post",
    data
  })
}