<template>
    <div class="siderbarc">
        <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="true"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      
      >
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </div>
</template>
<script>
import variables from '@/assets/css/variables.scss'
import SidebarItem from './SidebarItem.vue'
export default {
    components:{
        SidebarItem
    },
    data(){
        return{
            rout:''
        }
    },
    created(){
        console.log(this.$router.options.routes)
        
    },
    computed:{
        variables() {
             return variables
         },
         routes() {
             return this.$router.options.routes
         },
         activeMenu(){
            const route = this.$route
            const { meta, path } = route
            console.log(meta,route)
            // if set path, the sidebar will highlight the path you set
            if (meta.activeMenu) {
                return meta.activeMenu
            }
            return path
         },
        isCollapse() {
            return !this.sidebar.opened
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log('hand', key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log('clode',key, keyPath);
        }
    }
}
</script>
<style lang="scss">
    .siderbarc{
        width: var( --width--sidebar);
        // min-width: var( --width--sidebar);
        height: 100vh;
        background:rgb(48, 65, 86);
        position: fixed;
        top:0px;
        left: 0px;
        // float: left;
        .el-submenu .el-menu-item{
            min-width: 0;
        }
    }
</style>