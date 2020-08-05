<template>
    <div>
        官网座位数
            <el-table
                    :data="tableData"
                
                    border
                    stripe
                    style="width: 100%">

                       <!-- <el-table-column
                            prop="tableData.allDoesInterval"
                            label="id"
                            align="center"
                            width="50">
                             <template slot-scope="scope">
                               
                                <span >{{ scope.row.id}}</span>
                            </template>
                        </el-table-column> -->

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
                               
                               <el-input size="small" v-model="scope.row.seatCount.split(',')[0]" ></el-input> 
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
                            width="130"
                            label="修改时间"
                        >
                            <template  slot-scope="scope">
                                <span>{{scope.row.updateTime}}</span>
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
                                @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                                <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                            </template>
                        </el-table-column>



                </el-table>
                <!-- <el-button @click="getgwcounts(10,1)">添加官网座位数</el-button> -->
        <div>
          <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[10, 20, 30, 40]"
                    :page-size="pagesize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="40">
                </el-pagination>
             <el-button @click="postgwcounts()">添加官网座位数</el-button>
         </div>
              
        
         <el-dialog title="修改官网座位数" :visible="editgwForm" size="tiny" :modal-append-to-body='false' :close-on-press-escape="false" :close-on-click-modal="true" @close='closeDialog'>
             <el-form ref="editgwForms" :model="editgwForms" label-width="130px">


                    <el-form-item label="航司">
                        <el-input v-model="editgwForms.carrier" ></el-input>
                    </el-form-item>

                    <el-form-item label="逗号分隔开的数字">
                        <el-input
                                autosize
                                v-model="editgwForms.seatCount">
                        </el-input>
                    </el-form-item>

                    <!-- <el-form-item label="修改时的时间">
                        <el-input
                                autosize
                                v-model="editgwForms.updateTime" >
                        </el-input>
                    </el-form-item> -->


                     <el-form-item>
                        <el-button type="primary" @click="editgwclick">确定</el-button>
                        <el-button @click="editgwForms={},editgwForm = false">取消</el-button>
                    </el-form-item>

             </el-form>
         </el-dialog>

         <el-dialog title="添加官网座位数" :visible="addgwForm" size="tiny" :modal-append-to-body='false' :close-on-press-escape="false" :close-on-click-modal="true" @close='closeDialog'>
             <el-form ref="addgwForms" :model="addgwForms" label-width="130px">

                    <el-form-item label="航司">
                        <el-input v-model="addgwForms.carrier" placeholder="MU"></el-input>
                    </el-form-item>

                    <el-form-item label="逗号分隔开的数字">
                        <el-input
                                autosize
                                v-model="addgwForms.seatCount" placeholder="12,23,34,45,56,67,78,89,99">
                        </el-input>
                    </el-form-item>

                    <!-- <el-form-item label="修改时的时间">
                        <el-input
                                autosize
                                v-model="addgwForms.updateTime" placeholder="12:00">
                        </el-input>
                    </el-form-item> -->


                     <el-form-item>
                        <el-button type="primary" @click="addgwclick">确定</el-button>
                        <el-button @click="addgwForms={},addgwForm = false">取消</el-button>
                    </el-form-item>

        </el-form>
      </el-dialog>

    </div>
</template>
<script>
import {getgwcount,postgwcount,putgwcount} from '@/api/test';
import moment from 'moment'
export default {
    name:"getgwcount",
    data(){
        return {
        
            tabindex:'',
            counts:[],
            tableData:[],
            length:0,
            addgwForms:{
                carrier:'',
                id:length+1,
                seatCount:'',
                updateTime:''
            },
            editgwForms:{
                carrier:'',
                id:'',
                seatCount:'',
                updateTime:''
            },
                // carrier:'',
                // seatCount:'',
                // id:'',
                // updateTime:'', 
            addgwForm:false,
            editgwForm:false,
            currentPage:1,              
            pagesize:10,

           
        }
    },
    created(){
       
            this.getgwcounts(this.pagesize,this.currentPage)
    },
    methods:{
           // 分页组件
        handleSizeChange(val) {
        // 每页展示多少条改变时触发，val是改变成的值
            this.pagesize=val;
            this.currentPage=1;
            // this.getdata(this.currentPage,this.pagesize)
            this.getgwcounts(this.pagesize,this.currentPage)
        },
         handleCurrentChange(val) {
            //   页数改变时触发
            this.currentPage=val
            this.getgwcounts(this.pagesize,this.currentPage)
        },
        
        // 点击X关闭添加框
          closeDialog(){
            this.addgwForm= false
            this.editgwForm = false
        },
        // 获取官网座位数数据
        getgwcounts(n1,n2){
            getgwcount(n1,n2).then(res=>{
            this.tableData = res.data.data.records
            // console.log(this.tableData)
        })
        },
        // 点击修改
          handleEdit(index, row) {
              this.editgwForm = true
              this.editgwForms = Object.assign({}, row)
                
            },
        // 点击确定提交 修改
       async editgwclick(){
            
           await putgwcount(this.editgwForms).then(response => {
            //    console.log(response)
             if(response.status == 200){
                //  console.log(response)
                 this.editgwForm = false

                 this.editgwForms = {}
                  this.$notify({
                        title: '成功',
                        message: '修改官网座位数成功',
                        type: 'success',
                        duration:1500
                    });
             }
            }).catch(err =>{
                 this.$notify({
                        title: '成功',
                        message: '操作失败'+err,
                        type: 'success',
                        duration:1500
                    });
            })
        },
        handleDelete(index,row){
                  console.log(index, row);
        },
        // 添加按钮
        postgwcounts(data){
           
                this.addgwForm = true
                // let newtime = moment().format('YYYY-MM-DD HH:mm:ss')
                // this.addgwForms.updateTime = newtime
               
          
        },
        // 点击修改的确定按钮
        addgwclick(){
            
           postgwcount(this.addgwForms).then(res => {
               if(res.status == 200 ){
                   this.addgwForm =false
                   this.addgwForms = {}
                this.$notify({
                        title: '成功',
                        message: '添加成功',
                        type: 'success',
                        duration:1500
                    });
               }
           }).cathc(err => {
               console.log(err)
           })
        }
    }
}
</script>