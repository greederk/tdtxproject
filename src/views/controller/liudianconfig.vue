<template>
    <div class="liudiancon">
        留点配置
        <div>
               <template>
                <el-table
                    :data="tableData"
                
                    border
                    stripe
                    style="width: 100%">

                        <el-table-column
                            prop="tableData.carrier"
                            label="匹配航司"
                            align="center">
                        </el-table-column>

                        <el-table-column
                            prop="tableData.airRoute"
                            label="匹配航线"
                        >
                        </el-table-column>

                        <el-table-column
                            prop="tableData.flightNum"
                            label="航班号">
                        </el-table-column>

                        <el-table-column
                            prop="tableData.cabin"
                            label="匹配舱位">
                        </el-table-column>

                        <el-table-column
                            prop="tableData.minPrintPrice"
                            label="最低票价">
                        </el-table-column>

                        <el-table-column
                            prop="tableData.maxPrintPrice"
                            label="最高票价">
                        </el-table-column>

                        <el-table-column
                            prop="tableData.keepPoint"
                            label="留点">
                        </el-table-column>

                        <el-table-column
                            prop="tableData.keepMoney"
                            label="留钱">
                        </el-table-column>

                        <el-table-column
                            prop="tableData.sameDay"
                            label="是否只匹配当日留点">
                        </el-table-column>

                        <el-table-column
                            prop="tableData.official"
                            label="是否匹配航司数据">
                        </el-table-column>

                        <el-table-column
                            prop="tableData.officialProductType"
                            label="官网产品类型">
                        </el-table-column>

                        <el-table-column
                            prop="tableData.flightType"
                            label="匹配航班类型">
                        </el-table-column>

                        <el-table-column
                            prop="tableData.startDate"
                            label="旅行有效期开始">
                        </el-table-column>

                        <el-table-column
                            prop="tableData.endDate"
                            label="旅行有效期结束">
                        </el-table-column>

                        <el-table-column
                            prop="tableData.comment"
                            label="备注">
                        </el-table-column>

                        

                </el-table>
            </template>
             <el-button type="success" class="subbut" @click="postliudian.bind(this,tableData)()">提交</el-button>
        </div>
    </div>
</template>
<script>
import {postliudain} from '@/api/test'
export default {
    name:'liudianconfig',
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
    methods:{
        postliudian(data){
            return  postliudain(data).then((res) => {
                console.log(res)
            }).catech(err => {
                console.log('err'+ err)
            })
        }
    }
}
</script>
<style lang="scss">
    .liudiancon{

    }
</style>