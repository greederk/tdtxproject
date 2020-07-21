<template>
    <div class="navheaderc">
      
        <el-button type="primary" round class="login">登录</el-button>
    </div>
</template>
<script>

export default {
    
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
        margin-left: 200px;
        .login{
            right: 0px;
            position: absolute;
        }
    }
</style>