<template>
    <div>过滤配置展示
         <template>
                <el-table
                    :data="tableData"
                
                    border
                    stripe
                    style="width: 100%">

                        <el-table-column
                            prop="tableData.carrier"
                            label="航司"
                            align="center">
                        </el-table-column>

                        <el-table-column
                            prop="tableData.airRoute"
                            label="航线"
                        >
                        </el-table-column>

                        <el-table-column
                            prop="tableData.cabin"
                            label="舱位">
                        </el-table-column>

                        <el-table-column
                            prop="tableData.limitType"
                            label="限制类型">
                        </el-table-column>

                        <el-table-column
                            prop="tableData.flightType"
                            label="航班类型">
                        </el-table-column>

                        <el-table-column
                            prop="tableData.startDate"
                            label="旅行开始日期">
                        </el-table-column>
                        <el-table-column
                            prop="tableData.endDate"
                            label="旅行结束日期">
                        </el-table-column>

                        <el-table-column
                            prop="tableData.comment"
                            label="备注">
                        </el-table-column>

                        <el-table-column
                            prop="tableData.updateTime"
                            label="最后修改时间">
                        </el-table-column>

                </el-table>
            </template>

               <button @click="getfilters(10,10)"></button>   
    </div>
</template>
<script>
//POST
// /td/printPriceConfig/savePrintPriceConfig
// 添加票面价加价配置
import {getfilter} from '@/api/test'
    export default {
        name:"addpiaomianjia",
        data(){
            return{
                tableData:{
                    carrier:"",
                    airRoute:"",
                    cabin:"",
                    limitType:'',
                    flightType:"",
                    startDate:"",
                    endDate:"",
                    comment:"",
                    updateTime:"",
                }
            }
        },
        methods:{
            getfilters(num1,num2){
                getfilter(num1,num2).then(response => {
                    console.log(response)
                }).catch(err=> {
                    console.log(err)
                })
            }
        }
    }
</script>
<style lang="scss">

</style>