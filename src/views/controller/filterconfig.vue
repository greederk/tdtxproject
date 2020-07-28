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
                                <span >{{ scope.row.limitType}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.flightType"
                            label="航班类型"
                             width="80">
                            <template slot-scope="scope">
                                <span >{{ scope.row.flightType}}</span>
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

            <el-button @click="addfiltershow">添加过滤配置</el-button> 

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


                <el-form-item label="舱位">
                 <el-input v-model="editfilterForms.cabin"></el-input>
                </el-form-item>

                <el-form-item label="限制类型">
                <el-input v-model="editfilterForms.limitType"></el-input>
                </el-form-item>

                <el-form-item label="航班类型">
                    <el-input v-model="editfilterForms.flightType"></el-input>
                </el-form-item>

                <el-form-item label="旅行开始日期">
                   <el-input v-model="editfilterForms.startDate"></el-input>
                </el-form-item>

                <el-form-item label="旅行结束日期">
                <el-input v-model="editfilterForms.endDate"></el-input>
                </el-form-item>

                <el-form-item label="备注">
                <el-input v-model="editfilterForms.comment" ></el-input>
                </el-form-item>

                 <el-form-item label="最后修改时间">
                <el-input v-model="editfilterForms.updateTime" ></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="studentcEdit">确定</el-button>
                    <el-button @click="editfilterForms={},editfilterForm = false">取消</el-button>
                </el-form-item>
            </el-form>
      </el-dialog>



      
             <!-- 添加过滤配置 -->
              <el-dialog title="添加过滤配置" :visible="addfilterForm" size="tiny" :modal-append-to-body='false' :close-on-press-escape="false" :close-on-click-modal="true" @close='closeDialog' width="500"
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


                <el-form-item label="舱位">
                 <el-input v-model="editfilterForms.cabin"></el-input>
                </el-form-item>

                <el-form-item label="限制类型">
                <el-input v-model="editfilterForms.limitType"></el-input>
                </el-form-item>

                <el-form-item label="航班类型">
                    <el-input v-model="editfilterForms.flightType"></el-input>
                </el-form-item>

                <el-form-item label="旅行开始日期">
                   <el-input v-model="editfilterForms.startDate"></el-input>
                </el-form-item>

                <el-form-item label="旅行结束日期">
                <el-input v-model="editfilterForms.endDate"></el-input>
                </el-form-item>

                <el-form-item label="备注">
                <el-input v-model="editfilterForms.comment" ></el-input>
                </el-form-item>

                 <el-form-item label="最后修改时间">
                <el-input v-model="editfilterForms.updateTime" ></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="studentcEdit">确定</el-button>
                    <el-button @click="editfilterForms={},editfilterForm = false">取消</el-button>
                </el-form-item>
            </el-form>
      </el-dialog>
    </div>
</template>
<script>

// 添加票面价加价配置
import {getfilter} from '@/api/test'
    export default {
        name:"addpiaomianjia",
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
                tableData:[],
                editfilterForm:false,
                addfilterForm:false,
            }
        },
        methods:{
            // 
            // 修改过滤配置
            editstudentForm(idnex,row){
                console.log(index,row)
            },
            //点击修改
            handleEdit(index,row){
                  this.editfilterForms = Object.assign({}, row);  //获得所有数据显示在编辑信息模态框里面
            },
            // 点击确定修改  发送post请求
            studentcEdit(){

            },
            // 点击X 关闭
            closeDialog(){
                this.editfilterForm = false
            },
            // 删除本条过滤配置
            handleDelete(index,row){
                console.log(indx,row)
            },
            //添加过滤配置
            addfiltershow(){
                this.addfilterForm = true
            },
        },
        async created(){
            await getfilter(10,1).then(response => {
                this.tableData = response.data.data.records
            }).catch(err => {
                console.log(err)
            })
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