<template>
    <div class="navheaderc">
       <!-- <div>宽度：{{dataone1}}高度：{{dataone}}</div> -->
       <el-button type="primary" round  class="redirect" @click="gethome">回到首页</el-button>
        <el-button type="primary" round class="loginout" @click="loginout">退出登录</el-button>
       
    </div>
</template>
<script>
// import {getListdb} from '@/api/test.js'
export default {
    data(){
        return{
            dataone:window.screen.height,
            dataone1:window.screen.width
        }
    },
    created(){
        
    },
    mounted(){
        // getListdb().then(res => {
        //     this.dataone = res.data
        //     console.log(res)
        // })
    },
    methods:{
       gethome(){
            this.$router.push('/')
        },
      async loginout(){
          await this.$store.dispatch('user/loginout')
          
          this.$router.push('/login')
       }
    }
}
</script>
<style lang="scss">
    .navheaderc{
        height:50px;
        // width:1000px;
        // width:100%;
        min-width: 1000px;
        background: #fff;
        position: relative;
        box-shadow: 0 3px 4px rgba(0,21,41,0.08);
        margin-left: var(--width--sidebar);
        .login{
            right: 30px;
            position: absolute;
        }
        .login1{
            right:150px;
            position:absolute;
        }
    }
</style>