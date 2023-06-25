<template>
  <a :href="link">
    <slot></slot>
  </a>
</template>

<script lang="ts">
export default {
  props: {
    link: {
      type: String,
      required: true,
    }
  }
};
</script>


<style scoped>
</style>