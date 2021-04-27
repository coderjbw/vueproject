import {request} from './request'

export function getcategory() {
  return request({
    url:'/category'
  })
}
