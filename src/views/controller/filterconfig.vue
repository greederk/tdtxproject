<template>
    <div class="filtercon">过滤配置展示
         <template>
                <el-table
                    :data="tableData"
                
                    border
                    stripe
                    style="width: 80%">

                        <el-table-column
                            prop="tableData.carrier"
                            label="航司"
                            align="center"
                            width="80"
                            >
                             <template slot-scope="scope">
                                <span >{{ scope.row.carrier}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.airRoute"
                            label="航线"
                             width="80"
                        >
                        <template slot-scope="scope">
                                <span >{{ scope.row.airRoute}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.cabin"
                            label="舱位"
                             width="220">
                            <template slot-scope="scope">
                                <span >{{ scope.row.cabin}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.limitType"
                            label="限制类型"
                             width="80">
                            <template slot-scope="scope">
                                <span >{{ scope.row.limitType == 0 ? '上传' : '不上传'}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.flightType"
                            label="航班类型"
                             width="80">
                            <template slot-scope="scope">
                                <span >{{ scope.row.flightType == 0 ? '主飞政策' :'共享政策' }}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.startDate"
                            label="旅行开始日期"
                             width="120">
                            <template slot-scope="scope">
                                <span >{{ scope.row.startDate}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.endDate"
                            label="旅行结束日期"
                             width="120">
                            <template slot-scope="scope">
                                <span >{{ scope.row.endDate}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.comment"
                            label="备注"
                             width="80">
                            <template slot-scope="scope">
                                <span >{{ scope.row.comment}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.updateTime"
                            label="最后修改时间"
                             width="160">
                            <template slot-scope="scope">
                                <span >{{ scope.row.updateTime}}</span>
                            </template>
                        </el-table-column>

                         <el-table-column
                        
                            width="150"
                            label="操作"
                        >
                             <template slot-scope="scope">
                                <el-button
                                size="mini"
                                @click="handleEdit(scope.$index, scope.row),editfilterForm=true">修改</el-button>
                                <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                            </template>
                        </el-table-column>
                </el-table>
            </template>
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
             <el-button  @click="addfilterForm = true" id="addbtn">添加过滤配置</el-button>
         </div>
          

             <!-- 修改过滤 -->
              <el-dialog title="修改过滤配置" :visible="editfilterForm" size="tiny" :modal-append-to-body='false' :close-on-press-escape="false" :close-on-click-modal="true" @close='closeDialog' width="500"
         class="edform">
             <el-form ref="editfilterForms" :model="editfilterForms" label-width="130px">

                <el-form-item label="航司">
                  <el-input v-model="editfilterForms.carrier"></el-input>
                </el-form-item>

                <el-form-item label="航线">
    <!--            <el-input v-model="editsForm.seriesNumber"></el-input>-->
                    <el-input
                        
                            autosize
                            v-model="editfilterForms.airRoute">
                    </el-input>
                </el-form-item>


               

                <el-form-item label="限制类型">
              
                    <el-radio v-model="editfilterForms.limitType" :label="0">上传</el-radio>
                              <el-radio v-model="editfilterForms.limitType" :label="1">不上传</el-radio>
                </el-form-item>

                <el-form-item label="航班类型">
                     <el-radio v-model="editfilterForms.flightType" :label="0">主飞政策</el-radio>
                              <el-radio v-model="editfilterForms.flightType" :label="1">共享政策</el-radio>
                </el-form-item>

                <!-- <el-form-item label="旅行开始日期">
                   <el-input v-model="editfilterForms.startDate"></el-input>
                </el-form-item>

                <el-form-item label="旅行结束日期">
                <el-input v-model="editfilterForms.endDate"></el-input>
                </el-form-item> -->

                <el-form-item label="旅行有效期">
                    <Container 
                    :placeholdernow1="editfilterForms.startDate" :placeholdernow2="editfilterForms.endDate" 
                      @tosenddata3="getsenddatafilter3" @tosenddata4="getsenddatafilter4"
                            ></Container>
                </el-form-item>

                 <el-form-item label="舱位">
                 <el-input v-model="editfilterForms.cabin"></el-input>
                </el-form-item>

                <el-form-item label="备注">
                <el-input v-model="editfilterForms.comment" ></el-input>
                </el-form-item>

               

                <el-form-item>
                    <el-button type="primary" @click="quedingeditfilter">确定</el-button>
                    <el-button @click="editfilterForms={},editfilterForm = false">取消</el-button>
                </el-form-item>
            </el-form>
      </el-dialog>



      
             <!-- 添加过滤配置 -->
              <el-dialog title="添加过滤配置" :visible="addfilterForm" size="tiny" :modal-append-to-body='false' :close-on-press-escape="false" :close-on-click-modal="true" @close='closeDialog' width="500"
             class="edform">
             <el-form ref="addfilterForms" :model="addfilterForms" label-width="130px">

                <el-form-item label="航司">
                  <el-input v-model="addfilterForms.carrier"></el-input>
                </el-form-item>

                <el-form-item label="航线">
    <!--            <el-input v-model="editsForm.seriesNumber"></el-input>-->
                    <el-input
                        
                            autosize
                            v-model="addfilterForms.airRoute">
                    </el-input>
                </el-form-item>


                

                <el-form-item label="限制类型:">
                       <el-radio v-model="addfilterForms.limitType" :label="0">上传</el-radio>
                              <el-radio v-model="addfilterForms.limitType" :label="1">不上传</el-radio>
                </el-form-item>

                <el-form-item label="航班类型:">
                  
                    <el-radio v-model="addfilterForms.flightType" :label="0">主飞政策</el-radio>
                              <el-radio v-model="addfilterForms.flightType" :label="1">共享政策</el-radio>
                </el-form-item>

                <!-- <el-form-item label="旅行开始日期">
                   <el-input v-model="addfilterForms.startDate"></el-input>
                </el-form-item>

                <el-form-item label="旅行结束日期">
                <el-input v-model="addfilterForms.endDate"></el-input>
                </el-form-item> -->

                 <el-form-item label="旅行有效期">
                    <Container 
            
                      @tosenddata3="getsenddatafilter5" @tosenddata4="getsenddatafilter6"
                            ></Container>
                </el-form-item>

                <el-form-item label="舱位">
                 <el-input v-model="addfilterForms.cabin"></el-input>
                </el-form-item>

                <el-form-item label="备注">
                <el-input v-model="addfilterForms.comment" ></el-input>
                </el-form-item>

                 <!-- <el-form-item label="最后修改时间">
                <el-input v-model="addfilterForms.updateTime" ></el-input>
                </el-form-item> -->

                <el-form-item>
                    <el-button type="primary" @click="quedingaddfilter">确定</el-button>
                    <el-button @click="addfilterForm = false">取消</el-button>
                </el-form-item>
            </el-form>
      </el-dialog>


      <el-dialog title="删除过滤配置" :visible="deletefilterForm" size="tiny" :modal-append-to-body='false' :close-on-press-escape="false" :close-on-click-modal="true" @close='closeDialog' width="500"
         class="deletefilterform">
                  <el-button type="primary" @click="deletefilterclick" class="quedingdelete">确定删除</el-button>
                    <el-button @click="deletefilterForm = false">取消</el-button>
            </el-dialog>
    </div>
</template>
<script>
import Container from '@/components/common/container'
// 过滤配置
import {getfilterconfig,putfilterconfig,postfilterconfig,deletefilterconfig} from '@/api/test'
    export default {
        name:"addpiaomianjia",
        components:{
            Container
        },
        data(){
            return{
                tableDatas:{
                    carrier:"",
                    airRoute:"",
                    cabin:"",
                    limitType:'',
                    flightType:"",
                    startDate:"",
                    endDate:"",
                    comment:"",
                    updateTime:"",
                },
                editfilterForms:{
                    carrier:"",
                    airRoute:"",
                    cabin:"",
                    limitType:'',
                    flightType:"",
                    startDate:"",
                    endDate:"",
                    comment:"",
                    updateTime:""
                },
                addfilterForms:{
                    carrier:"",
                    airRoute:"",
                    cabin:"",
                    limitType:1,
                    flightType:1,
                    startDate:"",
                    endDate:"",
                    comment:"",
                    updateTime:""
                },
                tableData:[],
                editfilterForm:false,
                addfilterForm:false,
                deletefilterForm:false,
                currentPage:1,              
                pagesize:10,
                detelefilterid:[],
            }
        },
        methods:{
              // 分页组件
        handleSizeChange(val) {
        // 每页展示多少条改变时触发，val是改变成的值
            this.pagesize=val;
            this.currentPage=1;
            // this.getdata(this.currentPage,this.pagesize)
            getfilterconfig(this.pagesize,this.currentPage).then(response => {
                 this.tableData = response.data.data.records
          
                }).catch(err => {
                console.log(err)
             })
        },
         handleCurrentChange(val) {
            //   页数改变时触发
            this.currentPage=val
            getfilterconfig(this.pagesize,this.currentPage).then(response => {
                 this.tableData = response.data.data.records
            //    console.log(this.tableData)
                }).catch(err => {
                console.log(err)
             })
        },
        // 获取日期组件的参数
         getsenddatafilter3(datatwofilter){
             this.editfilterForms.startDate = datatwofilter
         },
        getsenddatafilter4(datatwofilter){
             this.editfilterForms.endDate = datatwofilter
        },
        // 获取过滤配置数据
        getfilterdata(num1,num2){
            getfilterconfig(num1,num2).then(response => {
                this.tableData = response.data.data.records
            }).catch(err => {
                console.log(err)
            })
        },
            // 
            // 修改过滤配置
            editstudentForm(idnex,row){
                console.log(index,row)
            },
            //点击修改
            handleEdit(index,row){
                  this.editfilterForms = Object.assign({}, row);  //获得所有数据显示在编辑信息模态框里面
            },
            // 点击确定修改  发送put请求
            quedingeditfilter(){
                putfilterconfig(this.editfilterForms).then(res => {
                    // console.log(res)
                    if(res.data.code == 0){
                        this.editfilterForm = false
                        this.editfilterForms = {}
                         this.$notify({
                                title: '成功',
                                message: '修改成功',
                                type: 'success',
                                duration:1500
                        });
                        this.getfilterdata(this.pagesize,this.currentPage)
                    }else{
                        this.$notify.error({
                            title: '失败',
                            message: '修改失败，请重新尝试',
                            duration:1500
                         });
                    }
                }).catch(err => {
                    this.$notify.error({
                            title: '失败',
                            message: '操作失败'+err.data,
                            duration:1500
                    });
                })
            },
            // 点击X 关闭
            closeDialog(){
                this.editfilterForm = false
                this.addfilterForm = false
                this.deletefilterForm = false
            },
            // 删除本条过滤配置
            handleDelete(index,row){
                // console.log(index,row)
                this.deletefilterForm = true
                this.detelefilterid = []
              
                this.detelefilterid.push(row.id)
                console.log(this.detelefilterid)
            },
            // 点击确定 删除按钮 
            deletefilterclick(){
                deletefilterconfig('['+this.detelefilterid+']').then(res => {
                    if(res.data.code == 0){
                        this.detelefilterid = []
                        this.deletefilterForm = false
                        this.$notify({
                        title: '成功',
                        message: '删除成功',
                        type: 'success',
                        duration:1500
                        });
                        this.getfilterdata(this.pagesize,this.currentPage)
                    }else{
                        this.$notify.error({
                        title: '失败',
                        message: '删除失败，请重新尝试',
                        duration:1500
                         });
                    }
                }).catch(err => {
                    this.$notify.error({
                    title: '失败',
                    message: '操作失败'+err.data,
                    duration:1500
                    });
                })
            },
            //添加过滤配置
            addfiltershow(){
                this.addfilterForm = true
            },
            //添加 获取日期组件的参数
            getsenddatafilter5(datatwofilter5){
                this.addfilterForms.startDate = datatwofilter5
            },
            getsenddatafilter6(datatwofilter6){
                this.addfilterForms.endDate = datatwofilter6
            },
            // 确定 添加 按钮
            quedingaddfilter(){
                postfilterconfig(this.addfilterForms).then(res =>{
                    console.log(res)
                    if(res.data.code == 0){
                        this.addfilterForm = false
                        // this.addfilterForms = {}
                        this.$notify({
                        title: '成功',
                        message: '添加成功',
                        type: 'success',
                        duration:1500
                        });
                        this.getfilterdata(this.pagesize,this.currentPage)
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
                    message: '操作失败'+err.data,
                    duration:1500
                    });
                })
            }
        },
         created(){
            this.getfilterdata(this.pagesize,this.currentPage)
        }
    }
</script>
<style lang="scss">
.filtercon{
     .el-dialog{
            width:764px;
            height: 363px;
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

<style lang="scss">
    
    // 删除过滤配置弹框
    .deletefilterform{
           .el-dialog{
            width:300px;
            height: 160px;
                .quedingdelete{
                    margin-right:50px;
                }
             }
    }
</style>