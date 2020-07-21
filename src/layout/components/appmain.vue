<template>
    <div class="navheaderC">
        <router-view></router-view>
    </div>
</template>
<script>

export default {
    
}
</script>
<style lang="scss">
    .navheaderC{
        width:100%;
        height:900px;
        position:fixed;
        left: var(--width--sidebar);
        top:60px;
        background: #ccc;
        padding-left:10px
    }
</style>