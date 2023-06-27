<script lang="ts">
import { defineComponent } from 'vue';

import ShoppingCartVue from './ShoppingCart.vue';
export default defineComponent({
    data() {
        return {
            dialogVisible: false,
            dialogVisible2: false,
            dialogVisible3: false
        };
    },
    methods: {
        showDialog(dialogName: string) {
            (this as unknown as {
                [key: string]: boolean;
            })[dialogName] = true;
        },
        removeDialog(dialogName: string) {
            (this as unknown as {
                [key: string]: boolean;
            })[dialogName] = false;
        }
    },
    components: { ShoppingCartVue }
});
</script>

<template>
  <div class="container">
    <header class="header">
      <a class="logo">
        <img src="../img/icon/logo.svg" alt="Logo" />
      </a>
      <label class="address">
        <my-input type="text" class="input-address" placeholder="Адрес доставки" />
      </label>
      <div class="buttons">
        <span class="user-name"></span>
        
        <my-button class="button-primary button-auth" @click="showDialog('dialogVisible')">
          <span class="button-auth-svg"></span>
          <span class="button-text">Войти</span>
        </my-button>
        <my-modal v-model:show="dialogVisible">
          <my-input placeholder="Телефон" class="btn phone" />
          <my-input placeholder="Пароль" class="btn password" />
          <my-button @click="removeDialog('dialogVisible')">Войти</my-button>
        </my-modal>

        <my-button class="button-cart" id="cart-button" @click="showDialog('dialogVisible3')">
          <span class="button-cart-svg"></span>
          <span class="button-text">Корзина</span>
        </my-button>
        <my-modal v-model:show="dialogVisible3">
          <ShoppingCartVue />
        </my-modal>

        <my-button class="button-primary button-out" @click="showDialog('dialogVisible2')">
          <span class="button-text">Выйти</span>
          <span class="button-out-svg"></span>
        </my-button>
        <my-modal v-model:show="dialogVisible2">
          <h1>Вы точно хотите выйти?</h1>
          <my-button @click="removeDialog('dialogVisible2')">Да, я предатель этого магазина</my-button>
        </my-modal>
      </div>
    </header>
  </div>
</template>


<style scoped>
.container {
  max-width: 1200px;
  margin: auto;
}

.btn {
  margin-bottom: 20px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
}

.address {
  flex: 0.8;
}

.input-address {
  width: 100%;
  background-image: url(../img/icon/home.svg);
}

.button-primary .button-auth-svg {
  width: 24px;
  height: 24px;
  background-color: #595959;
  -webkit-mask: url("../src/img/icon/user.svg") no-repeat 50% 50%;
  mask: url("../src/img/icon/user.svg") no-repeat 50% 50%;
  background-repeat: no-repeat;
}

.button-primary:hover .button-auth-svg {
  background-color: #ffffff;
}
</style>