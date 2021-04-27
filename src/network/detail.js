import {request} from './request'
export function getDetaildata(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

export function getrecommend() {
  return request({
    url:'/recommend'
  })
}

export class goodsdetail {
  constructor(itemcolums,iteminfo,shopservices){
    this.columns = itemcolums.columns;
    this.title = iteminfo.title;
    if(iteminfo.oldPrice){
      this.oldprice = iteminfo.oldPrice ;
    }
    this.price = iteminfo.price;
    if(iteminfo.discountDesc){
      this.discountDesc = iteminfo.discountDesc;
    }
    this.services = shopservices.services;
    this.desc = iteminfo.desc;
    this.realprice = iteminfo.lowNowPrice
  }
}

export class shopnews {
  constructor(shopinfo){
    this.fans = shopinfo.cFans;
    this.cGoods = shopinfo.cGoods;
    this.cSells = shopinfo.cSells;
    this.shopLogo = shopinfo.shopLogo;
    this.score = shopinfo.score;
    this.name = shopinfo.name;
  }
}

export class shopdetails {
  constructor(set,rule){
    this.image = set.images ? set.images[0] : '';
    this.set = set.set;
    this.tables = rule.tables;
  }
}
