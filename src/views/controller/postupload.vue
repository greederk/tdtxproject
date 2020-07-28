<template>
    <div>
        添加上传配置
            <table class="tablecon">
                <tr>
                    <td class="td1">执行时间</td>
                    <td>
                        <el-input size="mini" placeholder="0" class="input_all" v-model="addupload.allDoesTime"></el-input>  
                        <span>格式：09:00</span>
                    </td>
                </tr>
                <tr>
                    <td class="td1">开始时间</td>
                    <td>
                        <el-input class="input_all" v-model="addupload.uploadStartTime"></el-input>  
                        <span>格式：09:00</span>
                    </td>
                </tr>
                <tr>
                    <td class="td1">结束时间</td>
                    <td>
                        <el-input class="input_all" v-model="addupload.uploadEndTime"></el-input>  
                        <span>格式：09:00</span>
                    </td>
                </tr>
                 <tr>
                    <td class="td1">每多少小时传一次全量</td>
                    <td>
                      <el-input class="input_all" v-model="addupload.allDoesInterval"></el-input>   
                        
                    </td>
                </tr>
                <tr>
                    <td class="td1" >上传平台</td>
                    <td>
                         <el-radio v-model="addupload.platform" label="0">去那儿</el-radio>
                        <el-radio v-model="addupload.platform" label="1">携程</el-radio>
                        <el-radio v-model="addupload.platform" label="2">淘宝</el-radio>
                    </td>
                </tr>
                 <tr>
                    <td class="td1">政策类型</td>
                    <td>
       
                       <el-radio v-model="addupload.policyType" label="0">特价</el-radio>
                        <el-radio v-model="addupload.policyType" label="1">预付</el-radio>
                        <el-radio v-model="addupload.policyType" label="2">包机切换</el-radio> 
                    </td>
                </tr>
                <tr>
                    <td class="td1">政策来源</td>
                    <td>
                         <el-radio v-model="addupload.policySource" label="官网">官网</el-radio>
                        <el-radio v-model="addupload.policySource" label="最低价和次低价">xxxxx</el-radio>
                        
                    </td>
                </tr>
                <tr>
                    <td class="td1">上传方式</td>
                    <td>
                      <el-radio v-model="addupload.uploadType" label="1">全量</el-radio>
                        <!-- <el-radio v-model="addupload.uploadType" label="1">按航司删除</el-radio> -->
                        <!-- <el-radio v-model="baseconfig.stopType" label="3">所有</el-radio> -->
                    </td>
                </tr>
                 <tr>
                    <td class="td1">id</td>
                    <td>    
                      <el-input class="input_all" v-model="addupload.id"></el-input>
                    </td>
                </tr>
                <tr>
                    <td class="td1">操作时间</td>
                    <td>    
                     <el-input class="input_all" v-model="addupload.updateTime"></el-input>
                    </td>
                </tr>
                <tr>
                    <td class="td1">状态</td>
                    <td>    
                      <el-radio v-model="addupload.status" label="0">未启用</el-radio>
                        <el-radio v-model="addupload.status" label="1">已启用</el-radio>
                    </td>
                </tr>
                <tr>
                    <td class="td1">已执行次数</td>
                    <td>    
                       <el-input class="input_all" v-model="addupload.scheduleTimes"></el-input>
                    </td>
                </tr>

          
            </table>

            <el-button type="success" class="subbut" @click="postupld.bind(this,addupload)()">提交修改</el-button>
    </div>
</template>
<script>
import {postupload} from '@/api/test'
export default {
    name:"postupload",
    data(){
        return{
            addupload:{
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
    },
    methods:{
        postupld(data){
            
            return  postupload(JSON.stringify(data)).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
           })
        }
    }
}
</script>
<style lang="scss">
    .tablecon{
        // width:80%;
         border-top: 1px solid #000000;
        border-left: 1px solid #000000;
        border-collapse: collapse; /*设置单元格的边框合并为1*/

        td{
             border-bottom: 1px solid #000000;
          border-right: 1px solid #000000;
          .input_all{
              width:200px;
          }

        }
        .td1{
            width:200px;
            padding-left:20px;
        }

    }
</style>