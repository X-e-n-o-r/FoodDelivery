import { createStore } from 'vuex';

const store = createStore({
  state: {
    cartItems: [],
  },
  mutations: {
    addToCart(state: { cartItems: any[]; }, item: any) {
      state.cartItems.push(item);
    },
    removeFromCart(state: { cartItems: any[]; }, itemId: any) {
      state.cartItems = state.cartItems.filter((item: { id: any; }) => item.id !== itemId);
    },
    clearCart(state: { cartItems: never[]; }) {
      state.cartItems = [];
    },
  },
  actions: {
    addToCart({ commit }: any, item: any) {
      commit('addToCart', item);
    },
    removeFromCart({ commit }: any, itemId: any) {
      commit('removeFromCart', itemId);
    },
    clearCart({ commit }: any) {
      commit('clearCart');
    },
  },
  getters: {
    cartItemCount(state: { cartItems: string | any[]; }) {
      return state.cartItems.length;
    },
    cartTotalPrice(state: { cartItems: any[]; }) {
      return state.cartItems.reduce((total: any, item: { price: any; }) => total + item.price, 0);
    },
  },
});

export default store;
