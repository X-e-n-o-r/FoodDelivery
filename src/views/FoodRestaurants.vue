<script lang="ts">
import { defineComponent } from 'vue';
import DishCard from '@/components/DishCard.vue';
import RestaurantCard from '@/components/RestaurantCard.vue';
import axios, { type AxiosResponse } from 'axios';
import { type RestaurantData } from '@/types/types'

export default defineComponent({
  data() {
    return {
      restaurants: null as null | { db: { partners: RestaurantData[] } }
    };
  },

  mounted() {
    this.fetchData();
  },

  components: {
    DishCard,
    RestaurantCard
  },

  methods: {
    fetchData() {
      axios.get('./src/db/db.json')
        .then((response: AxiosResponse<{ db: { partners: RestaurantData[] } }>) => {
          this.restaurants = response.data;
        })
        .catch((error: any) => {
          console.error('Error fetching data:', error);
        });
    },

    navigateToMenu(reference: string, number: number) {
      let restaurantTitle = reference.slice(0, -5);
      restaurantTitle += number.toString();
      this.$router.push({ name: 'menu', params: { id: restaurantTitle } });
    }
  }
});
</script>

<template>
  <section class="menu">
    <section class="container-promo">
      <section class="promo pizza">
        <h1 class="promo-title">Онлайн-сервис <br />доставки еды на дом</h1>
        <p class="promo-text">
          Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком
        </p>
      </section>
    </section>
    <div class="cards cards-menu">
      <div class="restaurants">
        <div class="section-heading">
          <h2 class="section-title">Рестораны</h2>
          <label class="search">
            <my-input type="text" class="input input-search" placeholder="Поиск блюд и ресторанов" />
          </label>
        </div>
        <div class="cards cards-restaurants">
          <div class="card" v-for="(card, index) in restaurants?.db.partners" :key="card.name" @click="navigateToMenu(card.products, index)">
            <RestaurantCard :card="card" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<style scoped>
.promo {
  box-shadow: 0 7px 12px rgba(158, 158, 163, 0.1);
  border-radius: 10px;
  padding: 68px 70px;
  margin-bottom: 56px;
}
.promo-title {
  font-style: normal;
  font-weight: bold;
  font-size: 39px;
  line-height: 46px;
  color: #302c34;
}
.promo-text {
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #302c34;
  max-width: 538px;
}

.section-heading {
  display: flex;
  align-items: center;
  margin-bottom: 44px;
}
.section-title {
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  margin: 0 30px 0 0;
  color: #000000;
}
.search {
  margin-left: auto;
}
.input-search {
  width: 300px;
  background-image: url(../img/icon/search.svg);
}
@media (max-width: 578px){
.section-title {
  font-size: 20px;
}
}
@media (max-width: 480px) {
  .search {
    margin-left: 0;
  }
}
</style>