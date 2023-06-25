<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue';
</script>

<template>
        <MainHeader />
        <main class="main">
                <div class="container">
                        <RouterView></RouterView>
                </div>
        </main>
        <MainFooter />
</template>

<style scoped>
.main {
  background: linear-gradient(180deg, rgba(245, 245, 245, 0) 1.04%, #f5f5f5 100%);
}
</style>
