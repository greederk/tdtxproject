import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../layout/index.vue'
Vue.use(Router)
const constantRoutes=[
   {
    path:'/',
    name:'layout',
    component:Layout
   }
]

const createRouter = () => new Router({
    // mode: 'history',
    routes:constantRoutes
})
const router =  createRouter()
export default router;