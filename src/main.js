import Vue from 'vue'
import App from './App.vue'
import {Button,Menu,Submenu,MenuItem,MenuItemGroup} from 'element-ui'
import router from './router'

Vue.config.productionTip = false

import '@/assets/css/base.scss'
import '@/assets/icon/index.js';
Vue.use(Button)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
