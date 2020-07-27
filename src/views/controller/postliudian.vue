<template>
    <div class="postliucon">
        修改留点配置
            <table
             :data="tableData">
                <tr>
                    <td class="td1">航空公司:</td>
                    <td>
                        <input type="text" v-model="tableData.carrier">
                    </td>
                </tr>
                <tr>
                    <td class="td1">航线:</td>
                    <td>
                        <input type="text" v-model="tableData.airRoute">
                    </td>
                </tr>
                <tr>
                    <td class="td1">航班号:</td>
                    <td>
                        <input type="text" v-model="tableData.flightNum">
                    </td>
                </tr>
                <tr>
                    <td class="td1">舱位:</td>
                    <td>
                        <input type="text" v-model="tableData.cabin">
                    </td>
                </tr>
                <tr>
                    <td class="td1">票价范围:</td>
                    <td>
                        <input type="text" v-model="tableData.minPrintPrice">-<input type="text" v-model="tableData.maxPrintPrice">
                    </td>
                </tr>
                <tr>
                    <td class="td1">留点:</td>
                    <td>
                        <input type="text" v-model="tableData.keepPoint">
                    </td>
                </tr>
                <tr>
                    <td class="td1">留钱:</td>
                    <td>
                        <input type="text" v-model="tableData.keepMoney">
                    </td>
                </tr>
                <tr>
                    <td class="td1">是否当日留钱留点:</td>
                    <td>
                        <el-radio  label="1" v-model="tableData.sameDay">是</el-radio>
                    </td>
                </tr>
                <tr>
                    <td class="td1">是否官网NFD设置:</td>
                    <td>
                        <el-radio  label="1" v-model="tableData.official">是</el-radio>
                    </td>
                </tr>
                <tr>
                    <td class="td1">官网产品类型设置:</td>
                    <td>
                        <input type="text" v-model="tableData.officialProductType">
                    </td>
                </tr>
                <tr>
                    <td class="td1">航班政策类型:</td>
                    <td>
                        <el-radio  label="0" v-model="tableData.flightType">主飞政策</el-radio>
                        <el-radio  label="1" v-model="tableData.flightType">共享政策</el-radio>
                    </td>
                </tr>
                <tr>
                    <td class="td1">旅行有效期:</td>
                    <td>
                        <input type="text" v-model="tableData.startDate">-<input type="text" v-model="tableData.endDate">
                    </td>
                </tr>
                 <tr>
                    <td class="td1">备注:</td>
                    <td>
                        <input type="text" v-model="tableData.comment">
                    </td>
                </tr>
                 <tr>
                    <td class="td1">id:</td>
                    <td>
                        <input type="text" v-model="tableData.id">
                    </td>
                </tr>
            </table>

             <el-button type="success" class="subbut" @click="postliu(tableData)">提交修改</el-button>
    </div>
</template>
<script>
// import {postliudain} from '@/api/test'
import request from '@/util/request.js'
export default {
    name:'postliudian',
    data(){
        return{
             tableData:{
                carrier:'',     //航司
                airRoute:'',     //航线
                flightNum:'',    //航班号
                cabin: '',       //匹配舱位
                 maxPrintPrice:'',  //匹配票价范围
                 minPrintPrice:'',
                 keepPoint:'',     //留点
                 keepMoney:'',    //留钱
                 sameDay:'',     //是否只匹配当日留点
                 official: '',   //是否匹配航司数据
                 officialProductType:'',    //官网产品类型
                 flightType:'',     //匹配航班类型
                 endDate:'',  //旅行有效期
                 startDate:'', 
                 comment:'' ,   //备注
                 id:''
             }
        }
    },
//     request({
//       url:"/api/td/platform/list",
//       methods:'get'
//   })
    methods:{
       postliu(data){
           request({
              url:'/api/td/priceConfig/save',
                methods:'post',
                params:{data}
           }).then(res => {
               console.log(res)
           }).catch(err => {
               console.log(err)
           })
       }
    }
}
</script>
<style lang="scss">
    .postliucon{
        table{
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
    }
</style>