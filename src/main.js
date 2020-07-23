import Vue from 'vue'
import App from './App.vue'
import {Button,Menu,Submenu,MenuItem,MenuItemGroup,Row,Col,Input,Dropdown,DropdownMenu,DropdownItem} from 'element-ui'
import router from './router'
import store from '@/store'
Vue.config.productionTip = false

import '@/assets/css/base.scss'
import '@/assets/icon/index.js';
Vue.use(Button)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Row)
Vue.use(Col)
Vue.use(Input)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
