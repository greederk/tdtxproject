<template>
    <div>
         <div class="guoneiycp-top">
          <div>订单号:</div>
          <el-input
            v-model="orderId"
            class="container-inputddh"
            size="mini"
            
          >
          </el-input>
         <div>平台订单号:</div>
          <el-input
            v-model="orderId1"
            class="container-inputddh"
            size="mini"
            
          >
          </el-input>
    
         <el-button type="primary" round size="medium" >查询</el-button>
         <el-button type="primary" round size="medium" >刷新</el-button>
         </div>
         <el-table
            :data="tableData"
           
            border
            stripe
            style="width: 100%">

                <el-table-column
                    prop="laiyuan"
                    label="来源"
                     align="center">
                </el-table-column>

                <el-table-column
                    prop="dingdanhao"
                    label="订单号"
                  >
                </el-table-column>

                <el-table-column
                    prop="ptdingdanhao"
                    label="平台订单号">
                </el-table-column>

                <el-table-column
                    prop="people"
                    label="成人PNR | 儿童PNR">
                </el-table-column>

                <el-table-column
                    prop="paytime"
                    label="支付时间">
                </el-table-column>

                <el-table-column
                    prop="endtime"
                    label="出票时限">
                </el-table-column>

                <el-table-column
                    prop="flytime"
                    label="起飞时间">
                </el-table-column>

                <el-table-column
                    prop="code"
                    label="政策">
                </el-table-column>

                <el-table-column
                    prop="peolength"
                    label="人数(成人/儿童)">
                </el-table-column>

                <el-table-column
                    prop="price"
                    label="总价">
                </el-table-column>

                <el-table-column
                    prop="status"
                    label="订单状态">
                </el-table-column>

                <el-table-column
                    prop="seats"
                    label="余座">
                </el-table-column>

                <el-table-column
                    prop="handle"
                    label="操作">
                </el-table-column>

                 <el-table-column
                    prop="buwei"
                    label="补位">
                </el-table-column>

        </el-table>
    </div>
</template>
<script>
export default {
    name:'guoneiycp',
    data(){
        return{
            orderId1:'',
            orderId:'',
        }
    }
}
</script>