import {request} from './request'

export function getcategory() {
  return request({
    url:'/category'
  })
}

export function subcategory(maitKey) {
  return request({
    url:'/subcategory',
    params:{
      maitKey
    }
  })
}

export function subcategorydetail(miniWallkey,type) {
  return request({
    url:'/subcategory/detail',
    params:{
      miniWallkey,
      type
    }
  })
}
