import Vue from 'vue'
import App from './App.vue'
import {Button,Menu,Submenu,MenuItem,MenuItemGroup,Row,Col,Input,Dropdown,DropdownMenu,DropdownItem,TableColumn,Table,Radio,DatePicker,Select,Option,Pagination,Checkbox,CheckboxGroup,Form,FormItem,Loading,Dialog} from 'element-ui'
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
Vue.use(TableColumn)
Vue.use(Table)
Vue.use(Radio)
Vue.use(DatePicker)
Vue.use(Select)
Vue.use(Option)
Vue.use(Pagination)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Loading)
Vue.use(Dialog)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

