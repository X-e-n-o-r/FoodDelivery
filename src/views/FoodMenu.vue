<script lang="ts">
import { defineComponent } from 'vue';
import MenuCard from '@/components/MenuCard.vue';
import RestaurantCard from '@/components/RestaurantCard.vue';
import axios, { type AxiosResponse } from 'axios';

interface MenuItem {
  id: number;
  name: string;
  price: number;
}

interface RestaurantData {
  name: string;
  stars: number;
  price: number;
  kitchen: string;
}

export default defineComponent({
  data() {
    return {
      reference: this.$route.params.id.toString(),
      menu: [] as MenuItem[],
      jsonData: null as unknown as RestaurantData,
      index: 0,
      sortOption: 'default',
    };
  },

  components: {
    MenuCard,
    RestaurantCard
  },

  methods: {
    fetchData() {
      const lastLetter = this.reference.slice(-1);
      this.index = parseInt(lastLetter);
      const sliced = this.reference.slice(0, -1);
      // Fetch menu data
      const url = `../src/components/db/${sliced}.json`;
      axios.get(url)
        .then((response: AxiosResponse<MenuItem[]>) => {
          this.menu = response.data;
        })
        .catch((error: any) => {
          console.error('Error fetching menu data:', error);
        });
      // Fetch restaurant data
      axios.get('../src/components/db/db.json')
        .then((response: AxiosResponse<{ db: { partners: RestaurantData[] } }>) => {
          this.jsonData = response.data.db.partners[this.index];
        })
        .catch((error: any) => {
          console.error('Error fetching restaurant data:', error);
        });
    },
    sortMenu() {
      // Trigger the computed property to recompute the sorted menu
      this.sortedMenu;
    }
  },

  beforeMount() {
    this.fetchData(); // Activate fetchData during rendering
  },
  
  computed: {
    sortedMenu() {
      const sortedItems: MenuItem[] = [...this.menu]; // Create a copy of the menu array

      if (this.sortOption === 'lowToHigh') {
        sortedItems.sort((a, b) => a.price - b.price);
      } else if (this.sortOption === 'highToLow') {
        sortedItems.sort((a, b) => b.price - a.price);
      }

      return sortedItems;
    }
  }
});
</script>

<template>
  <section class="menu">
    <div class="section-heading">
      <h2 class="section-title restaurant-title">{{ jsonData?.name }}</h2>
      <div class="card-info">
        <div class="rating">{{ jsonData?.stars }}</div>
        <div class="price">От {{ jsonData?.price }} ₽</div>
        <div class="category">{{ jsonData?.kitchen }}</div>
      </div>
      <div class="select">
        <select id="sort" v-model="sortOption" @change="sortMenu">
          <option value="default">Стандартно</option>
          <option value="lowToHigh">Сначала дешевые</option>
          <option value="highToLow">Сначала дорогие</option>
        </select>
      </div>
    </div>
    <div class="cards">
      <div class="card" v-for="food in sortedMenu" :key="food.id">
        <MenuCard :card="food" />
      </div>
    </div>
  </section>
</template>


<style scoped>
.select {
	margin-left: auto;
}
#sort {
	color: #595959;
	background-color: white;
	padding: 10px;
	border: 1px solid #d9d9d9;
}
.cards {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>