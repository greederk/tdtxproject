<template>
    <div class="huitiancon">
        回填票号
        <div>
           <template>
                <el-table
                    :data="huitianData"
                    border
                    stripe
                    style="width: 80%">

                        <el-table-column
                            prop="huitianData.ordersid"
                            label="订单号"
                            align="center"
                            width="100">
                             <template slot-scope="scope">                       
                                <span >{{ scope.row.ordersid}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="huitianData.carrier"
                            label="航司"
                            align="center"
                            width="100">
                             <template slot-scope="scope">                       
                                <span >{{ scope.row.carrier}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="huitianData.hbhao"
                            label="航班号"
                            width="100"
                        >
                         <template slot-scope="scope">                               
                                <span >{{ scope.row.hbhao}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="huitianData.hcheng"
                            label="航程"
                            align="center"
                            width="200"
                        >
                         <template slot-scope="scope">
                                <span >{{ scope.row.hcheng}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="huitianData.gotime"
                            label="出发日期"
                             align="center"
                            width="200"
                        >
                         <template slot-scope="scope">                              
                                <span >{{ scope.row.gotime}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="huitianData.cweinum"
                            label="仓位数"
                        >
                         <template slot-scope="scope">                              
                                <span >{{ scope.row.cweinum}}</span>
                            </template>
                        </el-table-column>  


                        <el-table-column
                            prop="huitianData.cweinum"
                            label="选择出票1"
                        >
                         <template slot-scope="scope">                              
                                <span >{{ scope.row.cweinum}}</span>
                            </template>
                        </el-table-column>  
                        
                         <el-table-column
                            prop="huitianData.cweinum"
                            label="选择出票2"
                        >
                         <template slot-scope="scope">                              
                                <span >{{ scope.row.cweinum}}</span>
                            </template>
                        </el-table-column>

                         <el-table-column
                            prop="huitianData.cweinum"
                            label="选择出票3"
                        >
                         <template slot-scope="scope">                              
                                <span >{{ scope.row.cweinum}}</span>
                            </template>
                        </el-table-column>
                         <!-- <el-table-column
                        
                            width="150"
                            label="操作"
                        >
                             <template slot-scope="scope">
                                <el-button
                                size="mini"
                                @click="handleEditpiaomj(scope.$index, scope.row),editpiaomjForm =true">修改</el-button>
                                <el-button
                                size="mini"
                                type="danger"
                                @click="handleDeletepiaomj(scope.$index, scope.row)">删除</el-button>
                            </template>
                        </el-table-column> -->
                </el-table>
            </template>
        </div>
    </div>
</template>
<script>
export default {
    name:'huitianpiaohao',
    data(){
        return {
            huitianDatas:{
                ordersid:'',   //订单号
                carrier:'',    //航司
                hbhao:'',      //航班号
                hcheng:'',     //航程
                gotime:'',     //出发日期
                cweinum:'',    //仓位数

            },
            huitianData:[],
        }
    },

}
</script>
<style lang="scss">
    .huitiancon{
      
    }
</style>