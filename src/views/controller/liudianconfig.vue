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
                            label="航司"
                            align="center"
                            width="100">
                             <template slot-scope="scope">
                               
                                <span >{{ scope.row.carrier}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.airRoute"
                            label="匹配航线"
                             width="100"
                        >
                             <template slot-scope="scope">
                               
                                <span >{{ scope.row.airRoute}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.flightNum"
                            label="航班号"
                             width="80">
                             <template slot-scope="scope">
                               
                                <span >{{ scope.row.flightNum}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.cabin"
                            label="匹配舱位"
                            width="200">
                            <template slot-scope="scope">
                               
                                <span >{{ scope.row.cabin}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.minPrintPrice"
                            label="最低票价"
                            width="80">
                             <template slot-scope="scope">
                               
                                <span >{{ scope.row.minPrintPrice}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.maxPrintPrice"
                            label="最高票价"
                            width="80">
                            <template slot-scope="scope">
                               
                                <span >{{ scope.row.maxPrintPrice}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.keepPoint"
                            label="留点"
                            width="50"
                            >
                            <template slot-scope="scope">
                               
                                <span >{{ scope.row.keepPoint}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.keepMoney"
                            label="留钱"
                            width="50">
                            <template slot-scope="scope">
                               
                                <span >{{ scope.row.keepMoney}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.sameDay"
                            label="是否只匹配当日留点"
                            width="80">
                             <template slot-scope="scope">
                               
                                <span >{{ scope.row.sameDay}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.official"
                            label="是否匹配航司数据"
                            width="80">
                            <template slot-scope="scope">
                               
                                <span >{{ scope.row.official}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.officialProductType"
                            label="官网产品类型"
                            width="80">
                            <template slot-scope="scope">
                               
                                <span >{{ scope.row.officialProductType}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.flightType"
                            label="匹配航班类型"
                            width="80">
                             <template slot-scope="scope">
                               
                                <span >{{ scope.row.flightType}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.startDate"
                            label="旅行有效期开始"
                            width="100">
                            <template slot-scope="scope">
                               
                                <span >{{ scope.row.startDate}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.endDate"
                            label="旅行有效期结束"
                            width="100">
                             <template slot-scope="scope">
                               
                                <span >{{ scope.row.endDate}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.comment"
                            label="备注"
                            width="120">
                            <template slot-scope="scope">
                               
                                <span >{{ scope.row.comment}}</span>
                            </template>
                        </el-table-column>

                         <el-table-column
                        
                            width="150"
                            label="操作"
                        >
                             <template slot-scope="scope">
                                <el-button
                                size="mini"
                                @click="handleEdit(scope.$index, scope.row),editstudentForm=true">编辑</el-button>
                                <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                            </template>
                        </el-table-column>

                </el-table>
            </template>
           <!-- <button @click="getliudianapi(10,10)"></button>    -->
          <el-button type="primary" round
                size="mini"
                @click="addstudentForm = true" id="addbtn">添加留点配置
        </el-button> 
        </div>
        

         <el-dialog title="修改留点" :visible="editstudentForm" size="tiny" :modal-append-to-body='false' :close-on-press-escape="false" :close-on-click-modal="true" @close='closeDialog' width="500"
         class="edform">
             <el-form ref="editsForm" :model="editsForm" label-width="130px">

                <el-form-item label="航司">
                  <el-input v-model="editsForm.carrier"></el-input>
                </el-form-item>

                <el-form-item label="匹配航线">
    <!--            <el-input v-model="editsForm.seriesNumber"></el-input>-->
                    <el-input
                        
                            autosize
                            v-model="editsForm.airRoute">
                    </el-input>
                </el-form-item>


                <el-form-item label="航班号">
                 <el-input v-model="editsForm.flightNum"></el-input>
                </el-form-item>

                <el-form-item label="匹配舱位">
                <el-input v-model="editsForm.cabin"></el-input>
                </el-form-item>

                <el-form-item label="最低票价">
                    <el-input v-model="editsForm.minPrintPrice"></el-input>
                </el-form-item>

                <el-form-item label="最高票价">
                   <el-input v-model="editsForm.maxPrintPrice"></el-input>
                </el-form-item>

                <el-form-item label="留点">
                <el-input v-model="editsForm.keepPoint"></el-input>
                </el-form-item>

                <el-form-item label="留钱">
                <el-input v-model="editsForm.keepMoney" ></el-input>
                </el-form-item>

                <el-form-item label="只匹配当日留点">
                <el-input v-model="editsForm.sameDay" ></el-input>
                </el-form-item>

                <el-form-item label="是否匹配航司数据">
                <el-input v-model="editsForm.official" ></el-input>
                </el-form-item>

                <el-form-item label="官网产品类型">
                <el-input v-model="editsForm.officialProductType" ></el-input>
                </el-form-item>

                <el-form-item label="匹配航班类型">
                <el-input v-model="editsForm.flightType" ></el-input>
                </el-form-item>

                <el-form-item label="旅行有效期开始">
                <el-input v-model="editsForm.startDate" ></el-input>
                </el-form-item>

                <el-form-item label="旅行有效期结束">
                <el-input v-model="editsForm.endDate" ></el-input>
                </el-form-item>

                <el-form-item label="备注">
                <el-input v-model="editsForm.comment" ></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="studentcEdit">确定</el-button>
                    <el-button @click="editstudentForm = false">取消</el-button>
                </el-form-item>
            </el-form>
      </el-dialog>



         <el-dialog title="添加留点" :visible="addstudentForm" size="tiny" :modal-append-to-body='false' :close-on-press-escape="false" :close-on-click-modal="true" @close='closeDialog'>
             <el-form ref="addsForm" :model="addsForm" label-width="130px">

             <el-form-item label="航司">
                  <el-input v-model="addsForm.carrier"></el-input>
                </el-form-item>

                <el-form-item label="匹配航线">
    <!--            <el-input v-model="editsForm.seriesNumber"></el-input>-->
                    <el-input
                        
                            autosize
                            v-model="addsForm.airRoute">
                    </el-input>
                </el-form-item>


                <el-form-item label="航班号">
                 <el-input v-model="addsForm.flightNum"></el-input>
                </el-form-item>

                <el-form-item label="匹配舱位">
                <el-input v-model="addsForm.cabin"></el-input>
                </el-form-item>

                <el-form-item label="最低票价">
                    <el-input v-model="addsForm.minPrintPrice"></el-input>
                </el-form-item>

                <el-form-item label="最高票价">
                   <el-input v-model="addsForm.maxPrintPrice"></el-input>
                </el-form-item>

                <el-form-item label="留点">
                <el-input v-model="addsForm.keepPoint"></el-input>
                </el-form-item>

                <el-form-item label="留钱">
                <el-input v-model="addsForm.keepMoney" ></el-input>
                </el-form-item>

                <el-form-item label="只匹配当日留点">
                <el-input v-model="addsForm.sameDay" ></el-input>
                </el-form-item>

                <el-form-item label="是否匹配航司数据">
                <el-input v-model="addsForm.official" ></el-input>
                </el-form-item>

                <el-form-item label="官网产品类型">
                <el-input v-model="addsForm.officialProductType" ></el-input>
                </el-form-item>

                <el-form-item label="匹配航班类型">
                <el-input v-model="addsForm.flightType" ></el-input>
                </el-form-item>

                <el-form-item label="旅行有效期开始">
                <el-input v-model="addsForm.startDate" ></el-input>
                </el-form-item>

                <el-form-item label="旅行有效期结束">
                <el-input v-model="addsForm.endDate" ></el-input>
                </el-form-item>

                <el-form-item label="备注">
                <el-input v-model="addsForm.comment" ></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="studentAdd">确定</el-button>
                    <el-button @click="clearstudent(),addstudentForm = false">取消</el-button>
                </el-form-item>
        </el-form>
      </el-dialog>

    </div>
</template>
<script>
import {getliudian,postliudain} from '@/api/test'
export default {
    name:'liudianconfig',
    data(){
        return{
            tableDatas:{
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
             },
             editsForm:{
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
             },
              addsForm:{
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
              },
             tableData:[],
             editstudentForm:false,
             addstudentForm:false,
        }

    },
    methods:{

        getliudianapi(num1,num2){
            getliudian(num1,num2).then(response => {
                console.log(response)
            }).catch(err => {
                console.log(err)
            })
        },
       handleEdit(row,id){

            this.editsForm = Object.assign({}, id);  //获得所有数据显示在编辑信息模态框里面
            console.log(row,id,this.editsForm)

        },
        handleDelete(index,row){
            console.log(index,row)
        },
        // 点击编辑   确定
        studentcEdit(){

        },
        //点击编辑  取消
        editstudentForm(){

        },
        //点击X 关闭 编辑和添加
        closeDialog(){
            // 点击x号关闭
            this.addstudentForm =false ;
            this.editstudentForm = false;
            // this.rowDetailed=false;
        },

        //添加配置
        //  // 点击取消清空数据
        clearstudent(){
            this.addsForm={}

        },
        // 点击添加留点 确定  发送请求
        studentAdd(){
            // var mes ='';
            this.addstudentForm=false;
            
            postliudain(this.addsForm).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
                this.addsForm={};
                // this.getdata(this.currentPage,this.pagesize)
        }
    },
     async  created(){
       await getliudian(10,1).then(res =>{
           console.log(res)
            this.tableData = res.data.data.records
       }).catch(err => {
           console.log(err)
       })
    },
}
</script>
<style lang="scss">
    .liudiancon{
        // 编辑留点
        .el-dialog{
            width:800px;
            height: 460px;
            .el-dialog__body{
                height:500px;
                .el-form{
                    display: flex;
                    flex-wrap: wrap;
                    .el-form-item{
                        margin-bottom:1px;
                        .el-form-item__content{
                            height: 30px;
                            .el-input__inner{
                                height: 30px;
                                width:82%;
                            }
                        }
                    }
                }
            }
        }
    }
</style>