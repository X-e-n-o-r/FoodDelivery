
<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-block">
        <img src="@/components/img/icon/logo.svg" alt="logo" class="logo footer-logo" />
        <nav class="footer-nav">
          <my-link :link="'#'" class="footer-link">
            Ресторанам
          </my-link>
          <my-link :link="'#'" class="footer-link">
            Курьерам
          </my-link>
          <my-link :link="'#'" class="footer-link">
            Пресс-центр
          </my-link>
          <my-link :link="'#'" class="footer-link">
            Контакты
          </my-link>
        </nav>
        <div class="social-links">
          <my-link :link="'#'" class="social-link">
            <img src="@/components/img/social/instagram.svg" alt="instagram" />
          </my-link>
          <my-link :link="'#'" class="social-link">
            <img src="@/components/img/social/fb.svg" alt="facebook" />
          </my-link>
          <my-link :link="'#'" class="social-link">
            <img src="@/components/img/social/vk.svg" alt="vk" />
          </my-link>
        </div>
        <!-- /.social-links -->
      </div>
      <!-- /.footer-block -->
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

});
</script>

<style scoped>

</style>
