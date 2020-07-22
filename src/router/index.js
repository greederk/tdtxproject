import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../layout/index.vue'
Vue.use(Router)
export const constantRoutes = [
    // {
    //   path: '/login',
    //   component: () => import('@/views/login/index'),
    //   hidden: true
    // },
  
    // {
    //   path: '/404',
    //   component: () => import('@/views/404'),
    //   hidden: true
    // },
  
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      children: [{
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: '首页', icon: 'dashboard' }
      }],
      hidden:true
    },
  
    {
      path: '/example',
      component: Layout,
      redirect: '/example',
      name: 'Example',
      meta: { title: '订单出票',  icon: 'fly' },
      children: [
        {
          path: '/chupiaodaodan',
          name: 'chupiaodaodan',
          component: () => import('@/views/orders/chupiaodaodan.vue'),
         
          meta: { title: '出票导单监控' }
        },
        {
          path: '/guoneizd',
          name: 'guoneizd',
          component: () => import('@/views/orders/guoneizd.vue'),
          meta: { title: '国内自动订单'}
        },
        {
          path: '/guoneisxr',
          name: 'guoneisxr',
          component: () => import('@/views/orders/guoneisxr.vue'),
          meta: { title: '国内失信人订单'}
        },
        {
          path: '/toubaoyc',
          name: 'toubaoyc',
          component: () => import('@/views/orders/toubaoyc.vue'),
          meta: { title: '投保异常订单'}
        },
        {
          path: '/chongfucg',
          name: 'chongfucg',
          component: () => import('@/views/orders/chongfucg.vue'),
          meta: { title: '重复采购'}
        },
        {
          path: '/guoneijj',
          name: 'guoneijj',
          component: () => import('@/views/orders/guoneijj.vue'),
          meta: { title: '国内紧急订单'}
        },
        // {
        //   path: '/guojijj',
        //   name: 'guojijj',
        //   component: () => import('@/views/orders/guojijj.vue'),
        //   meta: { title: '国际紧急订单'}
        // },
        {
          path: '/jiangcangcj',
          name: 'jiangcangcj',
          component: () => import('@/views/orders/jiangcangsj.vue'),
          meta: { title: '降舱数据上传'}
        },
        {
          path: '/guojijc',
          name: 'guojijc',
          component: () => import('@/views/orders/guojijc.vue'),
          meta: { title: '国际降舱'}
        },
        {
          path: '/dingdandqr',
          name: 'dingdandqr',
          component: () => import('@/views/orders/dingdandqr.vue'),
          meta: { title: '订单待确认'}
        },
        {
          path: '/dingdancx',
          name: 'dingdancx',
          component: () => import('@/views/orders/dingdancx.vue'),
          meta: { title: '订单查询'}
        },
        {
          path: 'guoneiweicp',
          name: 'guoneiweicp',
          component: () => import('@/views/orders/guoneiweicp.vue'),
          meta: { title: '国内未出票'}
        },
        {
          path: '/tongcangdcl',
          name: 'tongcangdcl',
          component: () => import('@/views/orders/tongcangdcl.vue'),
          meta: { title: '同舱待处理'}
        },
        {
          path: '/guoneicpz',
          name: 'guoneicpz',
          component: () => import('@/views/orders/guoneicpz.vue'),
          meta: { title: '国内出票中'}
        },
        {
          path: '/guoneiycp',
          name: 'guoneiycp',
          component: () => import('@/views/orders/guoneiycp.vue'),
          meta: { title: '国内已出票'}
        },
        // {
        //   path: '/guoneijc',
        //   name: 'guoneijc',
        //   component: () => import('@/views/orders/guoneijc.vue'),
        //   meta: { title: '国内降舱'}
        // },
        {
          path: '/tongcangcx',
          name: 'tongcangcx',
          component: () => import('@/views/orders/tongcangcx.vue'),
          meta: { title: '同舱查询'}
        },
        {
          path: '/pnrlx',
          name: 'pnrlx',
          component: () => import('@/views/orders/pnrlx.vue'),
          meta: { title: 'PNR连续补位'}
        },
        {
          path: '/yichangdd',
          name: 'yichangdd',
          component: () => import('@/views/orders/yichangdd.vue'),
          meta: { title: '异常订单'}
        },
        {
          path: '/shougongdd',
          name: 'shougongdd',
          component: () => import('@/views/orders/shougongdd.vue'),
          meta: { title: '手工导单'}
        },
        {
          path: '/huitianrw',
          name: 'huitianrw',
          component: () => import('@/views/orders/huitianrw.vue'),
          meta: { title: '回填任务'}
        }
      ]
    },

    // 個人中心
    {
      path: '/nested',
      component: Layout,
      redirect: '/nested',
      name: 'Nested',
      meta: {
        title: '个人中心',
        icon: 'nested'
      },
      children: [
        {
            path: '/subscription',
            component: () => import('@/views/private/subscription'),
            meta: { title: '消息订阅' }
        },
        {
          path: '/lockorder',
          name: 'Table',
          component: () => import('@/views/private/lockorder'),
          meta: { title: '已锁订单'}
        },
        {
          path: '/priconfig',
          name: 'Table',
          component: () => import('@/views/private/priconfig'),
          meta: { title: '个性配置' }
        }
      ]
    },
   
  
  
    // 404 page must be placed at the end !!!
    { path: '*', redirect: '/404', hidden: true }
  ]

const createRouter = () => new Router({
    // mode: 'history',
    routes:constantRoutes
})
const router =  createRouter()
export default router;