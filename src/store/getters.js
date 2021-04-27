const getters = {
  cartlength(state){
    return state.shopcart.length
  },
  cartshop(state){
    return state.shopcart
  }
}

export default getters
