<template>
    <div class="siderbarc">
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            :background-color="variables.menuBg"
             :text-color="variables.menuText"
             :unique-opened="true"
            >
            <el-submenu v-for="item in sidebarlist" :key="item.name" :index="item.index" >
                <template slot="title">
                    <i :class="item.icon"></i>
                    <span>{{item.title}}</span>
                </template>      
                <router-link v-for=" items in  item.children" :index="items.index" :key="items.path"  :to="items.path">
                    <el-menu-item  >
                        {{items.title}}

                    </el-menu-item>    
                </router-link>                 
               
            
            </el-submenu>
        
      </el-menu>
    </div>
</template>
<script>
import variables from '@/assets/css/variables.scss'
// import SidebarItem from './SidebarItem.vue'
export default {
    components:{
        // SidebarItem
    },
    data(){
        return{
            rout:'',
            sidebarlist: [
                 {
                    path: '/Controller',
                    name: 'Controller',                  
                    title: '政策配置',
                    icon: 'el-icon-circle-plus-outline',
                    index:6,
                    children: [
                        {
                            path: '/shangchuan',
                            title: '上传配置' 
                        },
                        {
                            path:'/flightprice',
                            title:"航班价格信息"
                        },
                        {
                            path:'/baseconfig',
                            title:"基本配置"
                        },
                         {
                            path:'/liudianconfig',
                            title:"留点配置"
                        },
                        // {
                        //     path:'/postliudian',
                        //     title:"修改留点配置"
                        // },
                        {
                            path:'/addpiaomianjia',
                            title:"增加票面价"
                        },
                        {
                            path:'/filterconfig',
                            title:"过滤配置"
                        },
                        // {
                        //     path:'/postupload',
                        //     title:"添加上传配置"
                        // },
                         {
                            path:'/getgwcount',
                            title:"官网座位数"
                        },
                        // {
                        //     path:'/getip',
                        //     title:"获取代理ip"
                        // },
                        {
                            path:'/tgqconfig',
                            title:"退改签配置"
                        },
                        {
                            path:'/xingliconfig',
                            title:"行李额配置"
                        }
                    ]
                },
                {
                    path: '/example',
                
                  
                    name: 'Example',
                    title: '订单出票',
                    icon: 'el-icon-s-promotion' ,
                    index:1,
                    children: [
                        {
                        path: '/chupiaodaodan',
                        name: 'chupiaodaodan',
                        title: '出票导单监控' ,
                        index:1-1,
                        },
                        {
                        path: '/guoneizd',
                        name: 'guoneizd',
                        title: '国内自动订单',
                        index:1-2
                        },
                        {
                        path: '/guoneisxr',
                        name: 'guoneisxr',
                        title: '国内失信人订单',
                        index:1-3
                        },
                        {
                        path: '/toubaoyc',
                        name: 'toubaoyc',
                    
                        title: '投保异常订单',
                        index:1-4
                        },
                        {
                        path: '/chongfucg',
                        name: 'chongfucg',
                    
                        title: '重复采购'
                        },
                        {
                        path: '/guoneijj',
                        name: 'guoneijj',
                    
                        title: '国内紧急订单'
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
                    
                        title: '降舱数据上传'
                        },
                        {
                        path: '/guojijc',
                        name: 'guojijc',
                    
                        title: '国际降舱'
                        },
                        {
                        path: '/dingdandqr',
                        name: 'dingdandqr',
                    
                        title: '订单待确认'
                        },
                        {
                        path: '/dingdancx',
                        name: 'dingdancx',
                    
                        title: '订单查询'
                        },
                        {
                        path: '/guoneiweicp',
                        name: 'guoneiweicp',
                    
                        title: '国内未出票'
                        },
                        {
                        path: '/tongcangdcl',
                        name: 'tongcangdcl',
                    
                        title: '同舱待处理'
                        },
                        {
                        path: '/guoneicpz',
                        name: 'guoneicpz',
                    
                        title: '国内出票中'
                        },
                        {
                        path: '/guoneiycp',
                        name: 'guoneiycp',
                    
                        title: '国内已出票'
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
                    
                        title: '同舱查询'
                        },
                        {
                        path: '/pnrlx',
                        name: 'pnrlx',
                    
                        title: 'PNR连续补位'
                        },
                        {
                        path: '/yichangdd',
                        name: 'yichangdd',
                    
                        title: '异常订单'
                        },
                        {
                        path: '/shougongdd',
                        name: 'shougongdd',
                
                        title: '手工导单'
                        },
                        {
                        path: '/huitianrw',
                        name: 'huitianrw',
                
                        title: '回填任务'
                        }
                    ]
                },
                {
                        path: '/nested',
                    
                      
                        name: 'Nested',
                    
                            title: '个人中心',
                            icon: 'el-icon-user',
                        index:2,
                        children: [
                            {
                                path: '/subscription',
                            
                                 title: '消息订阅' 
                            },
                            {
                                    path: '/lockorder',
                                    name: 'Table',
                                
                                title: '已锁订单'
                            },
                            {
                                path: '/priconfig',
                                name: 'Table',
                            
                                 title: '个性配置' 
                            }
                        ]
                },
 
                {
                    path: '/self',
               
                    // redirect: '/self',
                    name: 'Nested',

                    title: '订单助手',
                    icon: 'el-icon-edit-outline',
                    index:3,
                    children: [
                        {
                            path: '/heiping',
                            name:'heiping',
                            title: '黑屏服务' 
                        },
                        {
                            path: '/guoneidijia',
                            name: 'guoneidijia',
                            title: '国内低价扫描'
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
                            title: '接收短信列表'
                        },
                        {
                            path: '/detrni',
                            name: 'detrni',
                            title: 'DETRNI详情列表' 
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
                            title: 'PNR入库' 
                        },
                        // {
                        //   path: 'menu2',
                        //   component: () => import('@/views/nested/menu2/index'),
                        //   meta: { title: '会员管理' }
                        // },
                        {
                            path: '/baiping',
                            name: 'baiping',
                            title: '白屏操作'
                        },
                        
                    ]
                },

                 {
                    path: '/airticketchange',
                    name: 'airticketchange', 
                    title: '退改签处理',
                    icon: 'el-icon-edit',
                    index:4,
                    children: [
                        {
                            path: '/gaiqianjk',
                           title: '改签导单监控' 
                        },
                        {
                            path: '/tuipaiojk',
                            name: 'tuipaiojk',
                            title: '退票导单监控'
                        },
                        {
                            path: '/tuigaibl',
                            name: 'tuigaibl',
                            title: '退改补录' 
                        },
                        {
                            path: '/guoneiwtj',
                            title: '国内未提交退票订单' 
                        },
                        {
                            path: '/chongchucx',
                            title: '重出查询'
                        },
                        {
                            path: '/gaiqiancx',
                            name: 'gaiqiancx',
                             title: '改签查询' 
                        },
                        {
                            path: '/guoneihb',
                            name: 'guoneihb',
                            title: '国内航变订单列表' 
                        },
                        {
                            path: '/tuipiaocx',
                            title: '退票查询' 
                        },
                        {
                            path: '/guoneisq',
                            title: '国内申请改签订单'
                        }
                    ]
                },    
                    
                {
                    path: '/Statistical',
                    name: 'Statistical',                  
                    title: '统计报表',
                    icon: 'el-icon-tickets',
                    index:5,
                    children: [
                        {
                            path: '/allprofit',
                            title: '利润汇总' 
                        },
                        {
                            path: '/orderorigin',
                            name: 'orderorigin',
                            title: '订单来源及出票地'
                        },
                        {
                            path: '/platform',
                            name: 'platform',
                            title: '出票平台' 
                        },
                        {
                            path: '/finance',
                            title: '财务报表' 
                        },
                        {
                            path: '/market',
                            name: 'market',
                            title: '销售报表'
                        },
                        {
                            path: '/refund',
                            name: 'refund',
                            title: '退款明细' 
                        },
                        {
                            path: '/chupiaomx',
                            name: 'chupiaomx',
                            title: '出票明细' 
                        },
                        {
                            path: '/performance',
                            title: '个人业绩' 
                        },
                        {
                            path: '/markets',
                            name: 'markets',
                            title: '销售统计'
                        },
                        {
                            path: '/daodantj',
                            name: 'daodantj',
                            title: '导单统计'
                        }
                    ]
                },
                {
                    path: '/Controller',
                    name: 'Controller',                  
                    title: '政策配置',
                    icon: 'el-icon-circle-plus-outline',
                    index:6,
                    children: [
                        {
                            path: '/shangchuan',
                            title: '上传配置' 
                        },
                        {
                            path:'/flightprice',
                            title:"航班价格信息"
                        },
                        {
                            path:'/baseconfig',
                            title:"基本配置"
                        },
                         {
                            path:'/liudianconfig',
                            title:"留点配置"
                        },
                        // {
                        //     path:'/postliudian',
                        //     title:"修改留点配置"
                        // },
                        {
                            path:'/addpiaomianjia',
                            title:"增加票面价"
                        },
                        {
                            path:'/filterconfig',
                            title:"过滤配置"
                        },
                        // {
                        //     path:'/postupload',
                        //     title:"添加上传配置"
                        // },
                         {
                            path:'/getgwcount',
                            title:"官网座位数"
                        },
                        {
                            path:'/getip',
                            title:"获取代理ip"
                        },
                        {
                            path:'/tgqconfig',
                            title:"退改签配置"
                        },
                        {
                            path:'/xingliconfig',
                            title:"行李额配置"
                        }
                    ]
                },
            ]
        }
    },
    created(){
        
        
    },
    computed:{
        variables() {
             return variables
         },
        //  routes() {
        //      return this.$router.options.routes
        //  },
        //  activeMenu(){
        //     const route = this.$route
        //     const { meta, path } = route
        //     console.log(meta,route)
        //     // if set path, the sidebar will highlight the path you set
        //     if (meta.activeMenu) {
        //         return meta.activeMenu
        //     }
        //     return path
        //  },
        // isCollapse() {
        //     return !this.sidebar.opened
        // }
    },
    methods: {
     
    }
}
</script>
<style lang="scss">
    .siderbarc{
        width: var( --width--sidebar);
        // min-width: var( --width--sidebar);
        height:1200px;
        background:rgb(48, 65, 86);
        position: fixed;
        top:0px;
        left: 0px;
        // float: left;
        .el-submenu__title{
            //图标左距离
            padding-left:13px !important; 
        }
         .el-menu-item, .siderbarc .el-submenu__title{
            height: 40px;
        }
        .el-menu-vertical-demo{
            height: 100%;
        }
        .el-submenu .el-menu-item{
            min-width: 0;
            height:35px;
            line-height:35px;
        }
        a{
            text-decoration: none;
        }
        .el-menu-item, .el-submenu__title{
            height:50px;
            line-height: 50px;
        }
    }
</style>