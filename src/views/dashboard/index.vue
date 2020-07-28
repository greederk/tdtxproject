<template>
    <div class="fonts">
        
        <div >航班信息：</div>
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
             this.$notify({
                        title: '成功',
                        message: '添加成功',
                        type: 'success',
                        duration:1000
                    });
        })
       
    },
    created(){
        
    },
    methods:{
          
    }
}
</script>
<style lang="scss">
    .fonts{
        font-size:25px;
        color:blue;
    }
</style>