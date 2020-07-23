<template>
    <div class="fonts">
        
        <ul v-for="item in datas" :key="item">
            <li>{{item}}</li>
        </ul>
    </div>
</template>
<script>

export default {
    data(){
        return{
            datas:[1,2,3,4,5,6,7,8,9]
        }
    }
}
</script>
<style lang="scss">
    .fonts{
        font-size:25px;
        color:blue;
    }
</style>