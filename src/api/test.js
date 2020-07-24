import request from '@/util/request.js'
export function getListdb() {
    return request({
      url: '/api/activity/servicetime',
      method: 'get',
      
    })
}