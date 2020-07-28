<template>
    <div>
        获取代理ip
            <div>{{iplist}}</div>

            <el-button @click="getips()">刷新</el-button>
    </div>
</template>
<script>
import {getips} from '@/api/test'
    export default{
        name:'ips',
        data(){
            return{
                iplist:"",
            }
        },
        methods:{
            getips(){
                getips().then(res => {
                    var a
                    console.log(res)
                    a = res.data
                    this.iplist = a.split(' ')
                }).catch(err => {
                    alert(err)
                })
            }
        }
    }
</script>