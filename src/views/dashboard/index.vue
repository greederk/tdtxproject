<template>
    <div class="fonts">
        
        <div>航班信息：</div>
        <div>{{datas}}</div>
    </div>
</template>
<script>
import {getController} from '@/api/test.js'
export default {
    name:"dashboard",
    data(){
        return{
            datas:'',
        }
    },
    mounted(){
        getController().then((res)=>{
            this.datas = res.data
        })
    }
}
</script>
<style lang="scss">
    .fonts{
        font-size:25px;
        color:blue;
    }
</style>