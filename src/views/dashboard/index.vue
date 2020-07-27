<template>
    <div class="fonts">
        
        <div >航班信息：</div>
        <div>{{datas}}</div>
        <button @click="gets()">点击</button>
    </div>
</template>
<script>
import {getController} from '@/api/test.js'
import {request} from '@/util/ax'
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
       
    },
    created(){
        
    },
    methods:{
            gets(){
                console.log('sss')
                        request({
                    url:"http://39.106.83.150:8003/td/priceConfig/save",
                    methods:'post',
                    headers:{
                        'Content-type': 'application/json'
                    },
                    params:{
                        "carrier":"EU","airRoute":"","flightNum":"","cabin":"T","maxPrintPrice":"0","minPrintPrice":"0","keepPoint":"0","keepMoney":"0","sameDay":"1","official":"1","officialProductType":"0","flightType":"0","endDate":"2020-08-31","startDate":"2020-07-01","comment":"0","id":"0"
                    }
                }).then(res=>{
                    console.log(res)
                })
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