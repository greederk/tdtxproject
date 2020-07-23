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
                    path: '/example',
                
                    redirect: '/example',
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
                        path: '/jiangcangcj',
                        name: 'jiangcangcj',
                    
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
                        path: 'guoneiweicp',
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
                    
                        redirect: '/nested',
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
        height: 100%;
        background:rgb(48, 65, 86);
        position: fixed;
        top:0px;
        left: 0px;
        // float: left;
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