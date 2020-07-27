<template>
    <div>票面价加价
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
                            prop="tableData.addPrice"
                            label="增加值">
                        </el-table-column>

                        <el-table-column
                            prop="tableData.flightType"
                            label="航班类型">
                        </el-table-column>

                        <el-table-column
                            prop="tableData.id"
                            label="id">
                        </el-table-column>

                       

                    
                       

                        

                </el-table>
            </template>
    </div>
</template>
<script>
//POST
// /td/printPriceConfig/savePrintPriceConfig
// 添加票面价加价配置
    export default {
        name:"addpiaomianjia",
        data(){
            return{
                tableData:{
                    carrier:"",
                    airRoute:"",
                    cabin:"",
                    addPrice:"",
                    flightType:"",
                    id:"",
                    updateTime:"",
                }
            }
        }
    }
</script>
<style lang="scss">

</style>