<template>
    <div class="shangchuan-con">
        政策配置:
        <div class="sc-head">
              <div>间隔时间(h):</div>
                <el-input
                    v-model="zcconfig.allDoedInterval"
                    class="alltime"
                    size="mini"
                    width:180
                >
                </el-input>

                <div>全量进度:</div>
                <template >
                    <el-select v-model="zcconfig.allDoesStatus" placeholder="请选择" size="small" >
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                         
                        >
                        </el-option>
                    </el-select>
                </template>

                 <div>执行时间:</div>
                    <container :time="zcconfig.allDoesTime"/>
        </div>
    </div>
</template>
<script>
import Container from '@/components/common/containerone.vue';
export default {
    name:'shangchuan',
    components:{
        Container
    },
    data(){
        return{
             options: [{
                    value: '0',
                    label: '未开始'
                }, {
                    value: '1',
                    label: '已完成'
                }
            ],
            zcconfig:{
                allDoedInterval:'',  //间隔时间
                allDoesStatus:'',      //0 未开始   1 已完成
                allDoesTime:'',         //执行时间
                column2:'',
                id:'',
                platform:'',          //上传平台
                policySource:'',     //来源  （官网）
                policyType:'',       //政策类型
                scheduleTimes:'',    //已执行次数
                status:'',           //状态：0-未启用（默认），1-已启用
                updateTime:'',       //example: yyyy-MM-dd HH:mm:ss 
                uploadEndTime:'',    // 上传结束时间
                uploadStartTime:'',   //上传开始时间
                uploadType:'1'        //上传方式：1-全量
             }
        }
    }
}
</script>
<style lang="scss">
    .shangchuan-con{
        width:100%;
        .sc-head{
            margin-top:20px;
            display:flex;
            .alltime{
                width:60px;
                margin-right:20px;
            }
            .alltime1{
                margin:0 20px 0 20px;
                width:180px;
            }
        }
    }
</style>