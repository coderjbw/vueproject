import Vue from 'vue'
import Vuex from 'vuex'
import getters from "./getters";

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    shopcart:[]
  },
  getters,
  mutations:{
    addcounter(state,payload){
      payload.count++
    },
    addcart1(state,payload){
        state.shopcart.push(payload)
      }
  },
  actions:{
    addtocart(context,payload){
      return new Promise((resolve,reject)=>{
        const oldproduct = context.state.shopcart.find(item => item.id === payload.id)
        if (oldproduct) {
          context.commit('addcounter', oldproduct)
          resolve('该商品数量加一')
        } else {
          payload.count = 1;
          context.commit('addcart1', payload)
          resolve('成功添加进购物车')
        }
      })
    }
    }

})

export default store
//   let oldproduct = state.shopcart.find(item=>item.id === payload.id)
//   if(oldproduct){
//   oldproduct.count++
//   }else {
//     payload.count = 1;
//     state.shopcart.push(payload)
//   }
