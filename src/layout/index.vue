<template>
    <div class="layout">
        <nav-header></nav-header>
        <sidebar></sidebar>
        <App-main></App-main>
        
    </div>
</template>
<script>
import AppMain from './components/appmain'
import NavHeader from './components/navheader'
import Sidebar from './components/sidebar'
export default {
    name:'layout',
    components:{
        AppMain,
        NavHeader,
        Sidebar
    }
}
</script>
<style lang="scss">
    .layout{
        // display: flex;
        // width:100%;
        // height:100%;
    }
</style>