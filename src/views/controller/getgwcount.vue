<template>
    <div>
        官网座位数
            <el-table
                    :data="tableData"
                
                    border
                    stripe
                    style="width: 100%">

                        <el-table-column
                           type="selection"
                            width="55"
                        >
                        </el-table-column>
                        <el-table-column
                            prop="tableData.allDoesInterval"
                            label="航司"
                            align="center"
                            width="130">
                             <template slot-scope="scope">
                               
                                <span >{{ scope.row.carrier}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                           type="input"
                            width="100"
                            label="官网座位数1"
                        >
                            <template  slot-scope="scope">
                               
                               <el-input size="small" v-model="scope.row.seatCount.split(',')[1]" placeholder="请输入内容" @change="handleEdit(scope.row.seatCount.split(',')[1])"></el-input> 
                            </template>
                        </el-table-column>

                         <el-table-column
                           type="input"
                            width="100"
                            label="官网座位数2"
                        >
                             <template  slot-scope="scope">
                               
                              <el-input :value="scope.row.seatCount.split(',')[1]" ></el-input>
                            </template>
                        </el-table-column>

                         <el-table-column
                           type="input"
                            width="100"
                            label="官网座位数3"
                        >
                            <template  slot-scope="scope">
                                <el-input :value="scope.row.seatCount.split(',')[2]" ></el-input>
                            </template>
                        </el-table-column>

                         <el-table-column
                           type="input"
                            width="130"
                            label="官网座位数4"
                        >
                            <template  slot-scope="scope">
                                <el-input :value="scope.row.seatCount.split(',')[3]" ></el-input>
                            </template>
                        </el-table-column>

                         <el-table-column
                           type="input"
                            width="130"
                            label="官网座位数5"
                        >
                            <template  slot-scope="scope">
                                <el-input :value="scope.row.seatCount.split(',')[4]" ></el-input>
                            </template>
                        </el-table-column>

                         <el-table-column
                           type="input"
                            width="130"
                            label="官网座位数6"
                        >
                            <template  slot-scope="scope">
                                <el-input :value="scope.row.seatCount.split(',')[5]" ></el-input>
                            </template>
                        </el-table-column>

                         <el-table-column
                           type="input"
                            width="130"
                            label="官网座位数7"
                        >
                            <template  slot-scope="scope">
                                <el-input :value="scope.row.seatCount.split(',')[6]" ></el-input>
                            </template>
                        </el-table-column>

                         <el-table-column
                           type="input"
                            width="130"
                            label="官网座位数8"
                        >
                            <template  slot-scope="scope">
                                <el-input :value="scope.row.seatCount.split(',')[7]" ></el-input>
                            </template>
                        </el-table-column>

                         <el-table-column
                           type="input"
                            width="130"
                            label="官网座位数9"
                        >
                            <template  slot-scope="scope">
                                <el-input :value="scope.row.seatCount.split(',')[8]" ></el-input>
                            </template>
                        </el-table-column>

                         <el-table-column
                           type="input"
                            width="130"
                            label="官网座位数10"
                        >
                            <template  slot-scope="scope">
                                <el-input :value="scope.row.seatCount.split(',')[9]" ></el-input>
                            </template>
                        </el-table-column>

                        <el-table-column
                           type="input"
                            width="150"
                            label="操作"
                        >
                             <template slot-scope="scope">
                                <el-button
                                size="mini"
                                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                                <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                            </template>
                        </el-table-column>



                </el-table>
                <!-- <el-button @click="getgwcounts(10,1)">添加官网座位数</el-button> -->
                <el-button @click="postgwcounts({})">添加官网座位数</el-button>
    </div>
</template>
<script>
import {getgwcount,postgwcount} from '@/api/test';

export default {
    name:"getgwcount",
    data(){
        return {
        
           tabindex:'',
            counts:[],
            tableData:[],
                // carrier:'',
                // seatCount:'',
                // id:'',
                // updateTime:'', 
           
        }
    },
  async  created(){
       
         await  getgwcount(10,1).then(res=>{
            this.tableData = res.data.data.records
            console.log(this.tableData)
        })
    },
    methods:{
        getgwcounts(n1,n2){
            getgwcount(n1,n2).then(res=>{
            this.tableData = res.data.data.records
            console.log(this.tableData)
        })
        },
          handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index,row){
                  console.log(index, row);
            },
        postgwcounts(data){
            postgwcount(data).then(response=>{
                console.log(response)
            }).catch(err=>{
                console.log(err)
            })
        }
    }
}
</script>