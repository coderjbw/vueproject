// import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastclick from 'fastclick'

import toast from 'components/common/Toast/index'

// createApp(App).use(router).mount('#app')
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

Vue.use(toast)
fastclick.attach(document.body);

new Vue({
  router,
  store,
  render:h => h(App),
}).$mount('#app');
