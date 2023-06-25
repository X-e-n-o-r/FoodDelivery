import './style.css'
import './normalize.css'

import { createApp } from 'vue'
import store from '@/store/store';
import App from './App.vue'
import router from './router'
import MyModal from '@/components/UI/MyModal.vue'
import MyButton from '@/components/UI/MyButton.vue'
import MyInput from '@/components/UI/MyInput.vue'
import MyLink from '@/components/UI/MyLink.vue'

const app = createApp(App)

app.component('my-modal', MyModal)
app.component('my-button', MyButton) 
app.component('my-input', MyInput) 
app.component('my-link', MyLink) 

app.use(store)

app.use(router)

app.mount('#app')