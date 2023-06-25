<template>
  <div class="cart">
    <h2 class="cart-title">Ваша корзина</h2>
    <ul class="cart-list">
      <li v-for="item in cartItems" :key="item.id" class="cart-item">
        <span class="cart-item-name">{{ item.name }}</span>
        <span class="cart-item-price">{{ item.price }} ₽</span>
        <my-button @click="removeFromCart(item.id)" class="cart-item-remove">Убрать</my-button>
      </li>
    </ul>
    <p class="cart-total">Total: {{ cartTotalPrice }} ₽</p>
    <my-button @click="clearCart" class="cart-clear">Очистить корзину</my-button>
    <my-button>Оформить заказ</my-button>
  </div>
</template>

<script lang="ts">
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState(['cartItems']),
    ...mapGetters(['cartTotalPrice']),
  },
  methods: {
    ...mapActions(['removeFromCart', 'clearCart']),
  },
};
</script>

<style scoped>
.cart {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.cart-title {
  font-size: 20px;
  margin-bottom: 10px;
}

.cart-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.cart-item-name {
  flex-grow: 1;
}

.cart-item-price {
  margin-left: 10px;
}

.cart-item-remove {
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  margin-left: 20px;
}

.cart-total {
  font-weight: bold;
  margin-top: 20px;
}

.cart-clear {
  background-color: #ff5a5a;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>