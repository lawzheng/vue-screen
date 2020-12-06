import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Test from 'rollup-vue-datav-lib/src/components/Test/index'

createApp(App)
  .use(store)
  .use(router)
  .use(Test)
  .mount('#app')
