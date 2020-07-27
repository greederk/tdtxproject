<template>
    <div class="shangchuan-con">
        政策配置:
        <div class="sc-head">
             <el-table
                    :data="tableData"
                
                    border
                    stripe
                    style="width: 100%">

                        <el-table-column
                            prop="tableData.allDoesInterval"
                            label="全量时间"
                            align="center">
                        </el-table-column>

                        <el-table-column
                            prop="tableData.uploadStartTime"
                            label="上传开始时间"
                        >
                        </el-table-column>

                        <el-table-column
                            prop="tableData.uploadEndTime"
                            label="上传结束时间">
                        </el-table-column>

                        <el-table-column
                            prop="tableData.platform"
                            label="上传平台">
                        </el-table-column>

                        <el-table-column
                            prop="tableData.policyType"
                            label="政策类型">
                        </el-table-column>

                        <el-table-column
                            prop="tableData.uploadType"
                            label="上传方式">
                        </el-table-column>

                         <el-table-column
                            prop="tableData.allDoesStatus"
                            label="全量进度">
                        </el-table-column>

                         <el-table-column
                            prop="tableData.policySource"
                            label="政策来源">
                        </el-table-column>

                         <el-table-column
                            prop="tableData.scheduleTimes"
                            label="已执行次数">
                        </el-table-column>

                        <el-table-column
                            prop="tableData.status"
                            label="状态">
                        </el-table-column>

                   

                        <el-table-column
                            prop="tableData.updateTime"
                            label="最后修改时间">
                        </el-table-column>

                </el-table>
         
                    
        </div>
    </div>
</template>
<script>
// import Container from '@/components/common/containerone.vue';
export default {
    name:'shangchuan',
    components:{
      
    },
    data(){
        return{
   
            tableData:{
                allDoesInterval:'',  //间隔时间
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