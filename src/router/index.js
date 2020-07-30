import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../layout/index.vue'
Vue.use(Router)
export const constantRoutes = [
    {
      path: '/login',
      component: () => import('@/views/login'),
      hidden: true
    },
  
    {
      path: '/404',
      component: () => import('@/views/404'),
      hidden: true
    },
  
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      children: [{
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: '首页', icon: 'dashboard' }
      }],
      hidden:true
    },
  
    {
      path: '/example',
      component: Layout,
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
          path: '/jiangcangsc',
          name: 'jiangcangsc',
          component: () => import('@/views/orders/jiangcangsc.vue'),
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
          path: '/guoneiweicp',
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
   
      // 订单助手
    {
      path: '/self',
      component: Layout,
      // redirect: '/self',
      name: 'Nested',
      meta: {
        title: '订单助手',
        icon: 'nested'
      },
      children: [
        {
            path: '/heiping',
            name:'heiping',
            component: () => import('@/views/self/heiping'),
            meta: { title: '黑屏服务' }
        },
        {
          path: '/guoneidijia',
          name: 'guoneidijia',
          component: () => import('@/views/self/guoneidijia'),
          meta: { title: '国内低价扫描'}
        },
        // {
        //   path: 'menu2',
        //   name: 'Table',
        //   component: () => import('@/views/nested/menu2/index'),
        //   meta: { title: '京东线下退票' }
        // },
        // {
        //   path: 'menu2',
        //   component: () => import('@/views/nested/menu2/index'),
        //   meta: { title: '国际低价扫描' }
        // },
        {
          path: '/newlist',
          name: 'newlist',
          component: () => import('@/views/self/newlist'),
          meta: { title: '接收短信列表'}
        },
        {
          path: '/detrni',
          name: 'detrni',
          component: () => import('@/views/self/detrni'),
          meta: { title: 'DETRNI详情列表' }
        },
        // {
        //   path: 'menu2',
        //   component: () => import('@/views/nested/menu2/index'),
        //   meta: { title: '国际订单编码' }
        // },
        // {
        //   path: 'menu2',
        //   name: 'Table',
        //   component: () => import('@/views/nested/menu2/index'),
        //   meta: { title: '淘宝国际扫线'}
        // },
        {
          path: '/addpnr',
          name: 'addpnr',
          component: () => import('@/views/self/addpnr'),
          meta: { title: 'PNR入库' }
        },
        // {
        //   path: 'menu2',
        //   component: () => import('@/views/nested/menu2/index'),
        //   meta: { title: '会员管理' }
        // },
        {
          path: '/baiping',
          name: 'baiping',
          component: () => import('@/views/self/baiping'),
          meta: { title: '白屏操作'}
        },
        
      ]
    },
    // 退改签处理  Endorse the back  // airticket change
    {
      path: '/airticketchange',
      component: Layout,
 
      name: 'airticketchange',
      meta: {
        title: '退改签处理',
        icon: 'nested'
      },
      children: [
        {
            path: '/gaiqianjk',
            component: () => import('@/views/airticketchange/gaiqianjk'),
            meta: { title: '改签导单监控' }
        },
        {
          path: '/tuipaiojk',
          name: 'tuipaiojk',
          component: () => import('@/views/airticketchange/tuipaiojk'),
          meta: { title: '退票导单监控'}
        },
        {
          path: '/tuigaibl',
          name: 'tuigaibl',
          component: () => import('@/views/airticketchange/tuigaibl'),
          meta: { title: '退改补录' }
        },
        {
          path: '/guoneiwtj',
          component: () => import('@/views/airticketchange/guoneiwtj'),
          meta: { title: '国内未提交退票订单' }
        },
        {
          path: '/chongchucx',
          name: 'chongchucx',
          component: () => import('@/views/airticketchange/chongchucx'),
          meta: { title: '重出查询'}
        },
        {
          path: '/gaiqiancx',
          name: 'gaiqiancx',
          component: () => import('@/views/airticketchange/gaiqiancx'),
          meta: { title: '改签查询' }
        },
        {
          path: '/guoneihb',
          name: 'guoneihb',
          component: () => import('@/views/airticketchange/guoneihb'),
          meta: { title: '国内航变订单列表' }
          },
          {
            path: '/tuipiaocx',
            component: () => import('@/views/airticketchange/tuipiaocx'),
            meta: { title: '退票查询' }
        },
        {
          path: '/guoneisq',
          name: 'guoneisq',
          component: () => import('@/views/airticketchange/guoneisq'),
          meta: { title: '国内申请改签订单'}
        }
      ]
    },

    {
      path: '/Statistical',
      component: Layout,
      
      name: 'Statistical',
      meta: {
        title: '统计报表',
        icon: 'nested'
      },
      children: [
        {
            path: '/allprofit',
            component: () => import('@/views/Statistical/allprofit'),
            meta: { title: '利润汇总' }
        },
        {
          path: '/orderorigin',
          name: 'orderorigin',
          component: () => import('@/views/Statistical/orderorigin'),
          meta: { title: '订单来源及出票地'}
        },
        {
          path: '/platform',
          name: 'platform',
          component: () => import('@/views/Statistical/platform'),
          meta: { title: '出票平台' }
        },
        {
          path: '/finance',
          component: () => import('@/views/Statistical/finance'),
          meta: { title: '财务报表' }
        },
        {
          path: '/market',
          name: 'market',
          component: () => import('@/views/Statistical/market'),
          meta: { title: '销售报表'}
        },
        {
          path: '/refund',
          name: 'refund',
          component: () => import('@/views/Statistical/refund'),
          meta: { title: '退款明细' }
        },
        {
          path: '/chupiaomx',
          name: 'chupiaomx',
          component: () => import('@/views/Statistical/chupiaomx'),
          meta: { title: '出票明细' }
          },
          {
            path: '/performance',
            component: () => import('@/views/Statistical/performance'),
            meta: { title: '个人业绩' }
         },
         {
          path: '/markets',
          name: 'markets',
          component: () => import('@/views/Statistical/markets'),
          meta: { title: '销售统计'}
          },
         {
          path: '/daodantj',
          name: 'daodantj',
          component: () => import('@/views/Statistical/daodantj'),
          meta: { title: '导单统计'}
        }
      ]
    },
    {
      path: '/Controller',
      component: Layout,
      
      name: 'controller',
      meta: {
        title: '政策配置',
        icon: 'nested'
      },
      children:[
        {
          path: '/shangchuan',
          component: () => import('@/views/controller/shangchuan'),
          meta: { title: '上传配置'  }
        },
        {
          path: '/flightprice',
          component: () => import('@/views/controller/flightprice'),
          meta: { title: '航班价格信息'  }
        },
        {
          path:'/baseconfig',
          component: () => import('@/views/controller/baseconfig'),
          meta: { title: '基本配置'  }
        },
        {
          path:'/liudianconfig',
          component: () => import('@/views/controller/liudianconfig'),
          meta: { title: '留点配置'  }
        },
        // {
        //   path:'/postliudian',
        //   component: () => import('@/views/controller/postliudian'),
        //   meta: { title: '修改留点配置'  }
        // },
        {
          path:'/addpiaomianjia',
          component: () => import('@/views/controller/addpiaomianjia'),
          meta: { title: '增加票面价'  }
        },
        {
          path:'/filterconfig',
          component: () => import('@/views/controller/filterconfig'),
          meta: { title: '过滤配置'  }
        },
        // {
        //   path:'/postupload',
        //   component: () => import('@/views/controller/postupload'),
        //   meta: { title: '添加上传配置'  }
        // },
        {
          path:'/getgwcount',
          component: () => import('@/views/controller/getgwcount'),
          meta: { title: '官网座位数'  }
        },
        // {
        //   path:'/getip',
        //   component: () => import('@/views/controller/getip'),
        //   meta: { title: '获取代理ip'  }
        // },
        {
          path:'/tgqconfig',
          component: () => import('@/views/controller/tgqconfig'),
          meta: { title: '退改签配置'  }
        },
        {
          path:'/xingliconfig',
          component: () => import('@/views/controller/xingliconfig'),
          meta: { title: '行李额配置'  }
        }
      ]
    },
    // 404 page must be placed at the end !!!
    { 
      path: '*',
      redirect: '/404',
      name:'page404',
      component: () => import('@/views/404')
    }
  ]

const createRouter = () => new Router({
    // mode: 'history',
    routes:constantRoutes
})
export function resetrouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
const router =  createRouter()
export default router;