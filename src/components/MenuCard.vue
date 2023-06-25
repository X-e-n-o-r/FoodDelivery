<script lang="ts">
import { mapActions } from 'vuex';

export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions(['addToCart']),
    addToCartClicked() {
      this.addToCart(this.card);
    },
  },
};
</script>
<template>
	<div>
		<img :src="`../src/components/${card.image}`" alt="image" class="card-image" />
		<div class="card-text">
			<div class="card-heading">
				<h3 class="card-title card-title-reg">{{ card.name }}</h3>
			</div>
			<!-- /.card-heading -->
			<div class="card-info">
				<div class="ingredients">{{ card.description }}</div>
			</div>
			<!-- /.card-info -->
			<div class="card-buttons">
				<my-button class="button-cart" id="cart-button" @click="addToCartClicked">
					<span class="button-text">В корзину</span>
          			<span class="button-cart-svg"></span>
        		</my-button>
                <strong class="card-price-bold">{{ card.price }} ₽</strong>
			</div>
		</div>
		<!-- /.card-text -->
	</div>
</template>

<style scoped>
</style>