<template>
    <div class="liudiancon">
        留点配置
        <div>
               <template>
                <el-table
                    :data="tableData"
                     @selection-change="handleSelectionChange"  
                    border
                    stripe
                    style="width: 100%">

                        <el-table-column
                            type="selection"
                            width="55">
                        </el-table-column>

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
                               
                                <span >{{ scope.row.sameDay == 0 ? '否' : '是'}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.official"
                            label="是否匹配航司数据"
                            width="80">
                            <template slot-scope="scope">
                               
                                <span >{{ scope.row.official == 0 ? '否' : '是'}}</span>
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
                               
                                <span >{{ scope.row.flightType == 0 ? '主飞政策' : '共享政策'}}</span>
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
                                <!-- <el-button
                                size="mini"
                                @click="handleEdit(scope.$index, scope.row)">编辑</el-button> -->
                                <el-button
                                size="mini"
                                type="danger"
                                @click="handleDeleteliudian(scope.$index, scope.row)">删除</el-button>
                            </template>
                        </el-table-column>

                </el-table>
            </template>
            
           <!-- <button @click="getliudianapi(10,10)"></button>    -->
          
        </div>
        <div>
          <el-pagination
                    @size-change="handleSizeChangeliud"
                    @current-change="handleCurrentChangeliud"
                    :current-page="currentPage"
                    :page-sizes="[10, 20, 30, 40]"
                    :page-size="pagesize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="40">
                </el-pagination>
                <el-button type="primary" round
                    size="mini"
                    @click="addstudentForm = true" id="addbtn">添加留点配置
                </el-button> 
                 <el-button @click="deleteSelection()" type="danger" >批量删除</el-button>
             
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
                    <el-button type="primary" @click="Editliudclikc">确定</el-button>
                    <el-button @click="editstudentForm = false">取消</el-button>
                </el-form-item>
            </el-form>
      </el-dialog>



         <el-dialog title="添加留点" :visible="addstudentForm" size="tiny" :modal-append-to-body='false' :close-on-press-escape="false" :close-on-click-modal="true" @close='closeDialog'>
             <el-form ref="addsForm" :model="addsForm" label-width="130px">

             <el-form-item label="航司">
                  <el-input v-model="addsForm.carrier" placeholder="MU"></el-input>
                </el-form-item>

                <el-form-item label="匹配航线">
    <!--            <el-input v-model="editsForm.seriesNumber"></el-input>-->
                    <el-input
                        
                            autosize
                            v-model="addsForm.airRoute" placeholder="可不填">
                    </el-input>
                </el-form-item>


                <el-form-item label="航班号">
                 <el-input v-model="addsForm.flightNum" ></el-input>
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

                <el-form-item label="只匹配当日留点" >
                <!-- <el-input v-model="addsForm.sameDay" placeholder="0:否;  1:是"></el-input> -->
                  <el-radio v-model="addsForm.sameDay" :label="1">是</el-radio>
                        <el-radio v-model="addsForm.sameDay" :label="0">否</el-radio>
                </el-form-item>

                <el-form-item label="是否匹配航司数据" style="margin-left:100px">
                  
                    <el-radio v-model="addsForm.official" :label="1">是</el-radio>
                    <el-radio v-model="addsForm.official" :label="0">否</el-radio>
                </el-form-item>

                <el-form-item label="官网产品类型">
                <el-input v-model="addsForm.officialProductType" placeholder="所有产品"></el-input>
                </el-form-item>

                <el-form-item label="匹配航班类型">
              
                    <el-radio v-model="addsForm.flightType" :label="1">共享</el-radio>
                    <el-radio v-model="addsForm.flightType" :label="0">主飞</el-radio>
                </el-form-item>

                <el-form-item label="旅行有效期">
                    <Container   @tosenddata3="getsenddataliud3" @tosenddata4="getsenddataliu4"
                            ></Container>
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

       <el-dialog title="删除留点" :visible="deleteliudianform" size="tiny" :modal-append-to-body='false' :close-on-press-escape="false" :close-on-click-modal="true" @close='closeDialog' width="150" 
         class="edformdele">
               
                    <el-button type="primary" @click="deleteliudian" class="quedingdelete">确定删除</el-button>
                    <el-button @click="cleardelete(),addstudentForm = false">取消</el-button>
               
        </el-dialog>

    </div>
</template>
<script>
import Container from '@/components/common/container'
import {getliudian,postliudain,deletelidian} from '@/api/test'
export default {
    name:'liudianconfig',
    components:{
        Container
    },
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
                 sameDay:0,     //是否只匹配当日留点
                 official: 1,   //是否匹配航司数据
                 officialProductType:'所有产品',    //官网产品类型
                 flightType:0,     //匹配航班类型
                 endDate:'',  //旅行有效期
                 startDate:'', 
                 comment:'' ,   //备注
                 id:''
              },
             tableData:[],
             editstudentForm:false,
             addstudentForm:false,
             deleteliudianform:false,
             deteleid:[],
            //  当前页数  默认 1
            currentPage:1,
             // 当前 数量 10
            pagesize:10,
            // 批量删除的数据
            tableChecked:[],
            //批量删除的ids  
            deleteids:[],
        }

    },
    methods:{
         // 分页组件
        handleSizeChangeliud(val) {
        // 每页展示多少条改变时触发，val是改变成的值
            this.pagesize=val;
            this.currentPage=1;
            // this.getdata(this.currentPage,this.pagesize)
            this.getliudianapi(this.pagesize,this.currentPage)
        
        },
         handleCurrentChangeliud(val) {
            //   页数改变时触发
            this.currentPage=val
          this.getliudianapi(this.pagesize,this.currentPage)
        },
        //重新请求当前页数据
        getliudianapi(num1,num2){
            getliudian(num1,num2).then(response => {
                 const ts = response.data.data.records
                 this.tableData =ts
            }).catch(err => {
                console.log(err)
            })
        },
        // 修改留点 确定按钮
        Editliudclikc(){   //现在不可修改操作
            // postliudain(this.editsForm).then(res => {
            //     if(res.status == 200 ){
            //            this.$notify({
            //             title: '成功',
            //             message: '修改成功',
            //             type: 'success',
            //             duration:1500
            //         });
            //     }
            // }).catch(err => {
            //        this.$notify({
            //             title: '成功',
            //             message: '操作失败'+err,
            //             type: 'success',
            //             duration:1500
            //         });
            // })
        },
       handleEdit(row,id){

            this.editsForm = Object.assign({}, id);  //获得所有数据显示在编辑信息模态框里面
         

        },
        handleDelete(index,row){
          
        },
        // 点击编辑   确定
        // studentcEdit(){

        // },
        // //点击编辑  取消
        // editstudentForm(){

        // },
        //点击X 关闭 编辑和添加
        closeDialog(){
            // 点击x号关闭
            this.addstudentForm =false ;
            this.editstudentForm = false;
            this.deleteliudianform = false
            // this.rowDetailed=false;
        },
        cleardelete(){
            this.deleteliudianform = false
        },
        //添加配置
        //  // 点击取消清空数据
        clearstudent(){
            // this.addsForm={}

        },
        // 点击添加留点 确定  发送请求
        studentAdd(){
           postliudain(this.addsForm).then(res => {
                if(res.data.code == 0 ){
                    this.addstudentForm=false;
                    // this.addsForm = {}
                       this.$notify({
                        title: '成功',
                        message: '修改成功',
                        type: 'success',
                        duration:1500
                    });
                     this.getliudianapi(this.pagesize,this.currentPage)
                }else{
                     this.$notify.error({
                        title: '失败',
                        message: '添加失败，请重新尝试',
                        duration:1500
                    });
                }
            }).catch(err => {
                   this.$notify.error({
                        title: '失败',
                        message: '操作失败'+err,
                        duration:1500
                    });
            })
        },

        // 删除留点
        handleDeleteliudian(index,row){
            // console.log(row.id)
             this.deteleid = []
            this.deleteliudianform= true
            this.deteleid.push(row.id)
            console.log(this.deteleid)
        },
        //点击确定删除
        deleteliudian(){
            deletelidian('['+this.deteleid+']').then(res => {
              if(res.data.code ==0){
                  this.deleteliudianform= false
                  this.deteleid = []
                       this.$notify({
                        title: '成功',
                        message: '删除成功',
                        type: 'success',
                        duration:1500
                    });
                    this.getliudianapi(this.pagesize,this.currentPage)
              }
            }).catch(err => {
                console.log(err)
            })
        },

        //批量删除留点
        deleteSelection() {
            console.log(this.deleteids)
            if (this.deleteids) {
                deletelidian(this.deleteids).then(res => {
                    if(res.data.code ==0){
                        // this.deleteliudianform= false
                        this.deleteids = []
                            this.$notify({
                                title: '成功',
                                message: '删除成功',
                                type: 'success',
                                duration:1500
                            });
                            this.getliudianapi(this.pagesize,this.currentPage)
                    }
                }).catch(err => {
                         this.$notify.error({
                                title: '失败',
                                message: '删除失败',  
                                duration:1500
                            });
                })
            } else {
                // this.$refs.multipleTable.clearSelection();
                this.$notify.error({
                        title: '失败',
                        message: '删除失败',  
                        duration:1500
                    });
            }
        },
         handleSelectionChange(val) {
            //  console.log(val[val.length-1].id)
            this.tableChecked = val;
            // console.log(this.tableChecked)
            this.deleteids.push( val[val.length-1].id)
            console.log(this.deleteids)
        },
        getsenddataliud3(datatwoliud){
             this.addsForm.startDate = datatwoliud
         },
        getsenddataliu4(datatwoliud){
             this.addsForm.endDate = datatwoliud
        }
       

    },
     created(){
        this.getliudianapi(10,1)
    }
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
        .edformdele{
            // width:300px;
            // height: 100px;
             .el-dialog{
            width:300px;
            height: 160px;
                .quedingdelete{
                    margin-right:50px;
                }
             }
        }
    }
</style>