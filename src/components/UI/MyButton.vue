<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

});
</script>

<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<style scoped>
button {
  cursor: pointer;
  color: inherit;
}
.button {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.0015);
  border-radius: 2px;
  color: #595959;
  font-size: 16px;
  line-height: 24px;
}

.button:hover {
  background: #1890ff;
  border: 1px solid #1890ff;
  color: #fff;
}
</style>