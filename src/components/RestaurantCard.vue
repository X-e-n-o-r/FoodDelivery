<script lang="ts">
import { defineComponent } from 'vue';

interface CardData {
  image: string;
  name: string;
  time_of_delivery: number;
  stars: number;
  price: number;
  kitchen: string;
}

export default defineComponent({
  props: {
    card: {
      type: Object as () => CardData,
      required: true
    }
  },
  methods: {
    getImageSrc(): string {
      return (`./src/${this.card.image}`);
    }
  }
});
</script>

<template>
  <a class="a">
    <img :src="getImageSrc()" alt="image" class="card-image" />
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title">{{ card.name }}</h3>
        <span class="card-tag tag">{{ card.time_of_delivery }} мин</span>
      </div>
      <!-- /.card-heading -->
      <div class="card-info">
        <div class="rating">
          {{ card.stars }}
        </div>
        <div class="price">От {{ card.price }} ₽</div>
        <div class="category">{{ card.kitchen }}</div>
      </div>
      <!-- /.card-info -->
    </div>
  </a>
</template>

<style scoped>
.card-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
}

.card-text {
    padding: 20px 23px 35px;
    min-height: 275px;
    display: flex;
    flex-direction: column;
}
.a .card-text {
  min-height: auto;
}

.a {
    text-decoration: none;
}

.a .card-text {
    min-height: auto;
}

.card-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
}

.card-title {
    margin: 0;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 32px;
}

.card-tag {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: #ffffff;
    background: #262626;
    border-radius: 2px;
    padding: 1px 8px;
}

.card-info {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.rating {
    background-image: url("../img/icon/rating.svg");
    background-repeat: no-repeat;
    background-position: 0 7px;
    padding-left: 20px;
    margin-right: 26px;
    color: #ffc107;
    font-weight: bold;
    font-size: 18px;
    line-height: 32px;
}

.price,
.category {
    color: #8c8c8c;
    font-size: 18px;
    line-height: 32px;
}

.price {
    margin-right: 10px;
}

.category {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 150px;
}

.price:after {
    content: "";
    width: 5px;
    height: 5px;
    background-color: #8c8c8c;
    display: inline-block;
    vertical-align: middle;
    border-radius: 50%;
    margin-left: 10px;
}
</style>
