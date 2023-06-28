import { createStore, Commit } from 'vuex';
import { type DishData } from '@/types/types';

const store = createStore({
  state: {
    cartItems: [],
  },
  mutations: {
    addToCart(state: { cartItems: DishData[] }, item: DishData) {
      state.cartItems.push(item);
    },
    removeFromCart(state: { cartItems: DishData[] }, itemId: string) {
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    clearCart(state: { cartItems: never[] }) {
      state.cartItems = [];
    },
  },
  actions: {
    addToCart({ commit }: { commit: Commit }, item: DishData) {
      commit('addToCart', item);
    },
    removeFromCart({ commit }: { commit: Commit }, itemId: string) {
      commit('removeFromCart', itemId);
    },
    clearCart({ commit }: { commit: Commit }) {
      commit('clearCart');
    },
  },
  getters: {
    cartTotalPrice(state: { cartItems: DishData[] }) {
      return state.cartItems.reduce((total: number, item) => total + item.price, 0);
    },
  },
});

export default store