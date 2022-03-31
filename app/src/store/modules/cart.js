export default {
  state(){
    return { items: [], total: 0, qty: 0 };
  },
  mutations:{
    addProductToCart(state, payload) {
      const productData = payload.product;
      const productInCartIndex = state.items.findIndex(
        (ci) => ci.productId === productData.id
      );

      if (productInCartIndex >= 0) {
        state.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1,
        };
        state.items.push(newItem);
      }
      state.qty++;
      state.total += productData.price;
    },

    removeProductFromCart(state, payload) {
      const prodId = payload.productId;
      const productInCartIndex = stat_e.items.findIndex(
        (cartItem) => cartItem.productId === prodId
      );
      const prodData = stat_e.items[productInCartIndex];
      stat_e.items.splice(productInCartIndex, 1);
      stat_e.qty -= prodData.qty;
      stat_e.total -= prodData.price * prodData.qty;
    },

  },
  actions: {
    addToCart(context, payload){
      context.commit('addProductToCart', payload);
    },
    removeCart(){
      context.commit('removeProductFromCart', payload);
    }
  },
  getters: {
    products(state){
      return state.items;
    },
    totalSum(state){
      return state.total;
    },
    quantity(state){
      return state.qty;
    }
  }
}