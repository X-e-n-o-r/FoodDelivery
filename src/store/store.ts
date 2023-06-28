import { createStore } from 'vuex';
import { type DishData } from '@/types/types';

const store = createStore({
  state: {
    cartItems: [],
  },
  mutations: {
    addToCart(state: { cartItems: DishData[]; }, item: DishData) {
      state.cartItems.push(item);
    },
    removeFromCart(state: { cartItems: DishData[]; }, itemId: DishData) {
      state.cartItems = state.cartItems.filter((item: { id: any; }) => item.id !== itemId);
    },
    clearCart(state: { cartItems: never[]; }) {
      state.cartItems = [];
    },
  },
  actions: {
    addToCart({ commit }: any, item: DishData) {
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
    cartItemCount(state: { cartItems: string | DishData[]; }) {
      return state.cartItems.length;
    },
    cartTotalPrice(state: { cartItems: DishData[]; }) {
      return state.cartItems.reduce((total: any, item: { price: number; }) => total + item.price, 0);
    },
  },
});

export default store;
