import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import lib from 'rollup-vue-datav-lib'

createApp(App)
  .use(store)
  .use(router)
  .use(lib)
  .mount('#app')
