<template>
    <div class="addpiaomj">票面价加价配置
         <template>
                <el-table
                    :data="tableData"
                
                    border
                    stripe
                    style="width: 80%">
                        <el-table-column
                            prop="tableData.id"
                            label="id"
                            width="80">
                             <template slot-scope="scope">
                               
                                <span >{{ scope.row.id}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="tableData.carrier"
                            label="航司"
                            align="center">
                             <template slot-scope="scope">
                               
                                <span >{{ scope.row.carrier}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.airRoute"
                            label="航线"
                        >
                         <template slot-scope="scope">
                               
                                <span >{{ scope.row.airRoute}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.cabin"
                            label="舱位">
                             <template slot-scope="scope">
                               
                                <span >{{ scope.row.cabin}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.addPrice"
                            label="增加值">
                             <template slot-scope="scope">
                               
                                <span >{{ scope.row.addPrice}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.flightType"
                            label="航班类型">
                             <template slot-scope="scope">
                               
                                <span >{{ scope.row.flightType == 0 ? '主飞政策' : "共享政策"}}</span>
                            </template>
                        </el-table-column>

                      
                         <el-table-column
                        
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
                        </el-table-column>
                </el-table>
            </template>

              <el-dialog title="修改票面价" :visible="editpiaomjForm" size="tiny" :modal-append-to-body='false' :close-on-press-escape="false" :close-on-click-modal="true" @close='closeDialog' width="500"
         class="edform">
                    <el-form ref="editpiaomjForms" :model="editpiaomjForms" label-width="130px">
                   

                        <el-form-item label="航司">
                            <el-input v-model="editpiaomjForms.carrier"></el-input>
                        </el-form-item>

                        <el-form-item label="航线">
                            <el-input v-model="editpiaomjForms.airRoute"></el-input>
                        </el-form-item>

                        <el-form-item label="舱位">
                            <el-input v-model="editpiaomjForms.cabin"></el-input>
                        </el-form-item>

                        <el-form-item label="增加值">
                            <el-input v-model="editpiaomjForms.addPrice"></el-input>
                        </el-form-item>

                         <el-form-item label="航班类型">
                            <el-input v-model="editpiaomjForms.flightType"></el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-button type="primary" @click="editpiaomjclick">确定</el-button>
                            <el-button @click="addgwForms={},addgwForm = false">取消</el-button>
                        </el-form-item>

                    </el-form>
            </el-dialog>

            <el-dialog title="删除票面价" :visible="deletepiaomjForm" size="tiny" :modal-append-to-body='false' :close-on-press-escape="false" :close-on-click-modal="true" @close='closeDialog' width="500"
         class="deletepmjform">
                  <el-button type="primary" @click="deletepiaomjclick" class="quedingdelete">确定删除</el-button>
                    <el-button @click="cleardelete(),addstudentForm = false">取消</el-button>
            </el-dialog>

             <el-dialog title="添加票面价" :visible="postpiaomjForm" size="tiny" :modal-append-to-body='false' :close-on-press-escape="false" :close-on-click-modal="true" @close='closeDialog' width="500"
         class="postpmjform">

                    <el-form ref="postpiaomjForms" :model="postpiaomjForms" label-width="130px">
                       

                        <el-form-item label="航司">
                            <el-input v-model="postpiaomjForms.carrier" placeholder="MU"></el-input>
                        </el-form-item>

                        <el-form-item label="航线">
                            <el-input v-model="postpiaomjForms.airRoute" ></el-input>
                        </el-form-item>

                        <el-form-item label="舱位">
                            <el-input v-model="postpiaomjForms.cabin"></el-input>
                        </el-form-item>

                        <el-form-item label="增加值">
                            <el-input v-model="postpiaomjForms.addPrice" placeholder="num"></el-input>
                        </el-form-item>

                         <el-form-item label="航班类型">
                            <el-input v-model="postpiaomjForms.flightType" placeholder="0:主飞  ； 1:共享"></el-input>
                        </el-form-item>

                         <el-form-item label="当前时间">
                            <el-input v-model="postpiaomjForms.updateTime" ></el-input>
                        </el-form-item>

                  <el-button type="primary" @click="quedingpostclick" class="quedingpostpmj">确定添加</el-button>
                    <el-button @click="cleardelete(),addstudentForm = false">取消</el-button>
                </el-form>
            </el-dialog>

            <el-button @click="postpiaomjclick">添加票面价设置</el-button>

    </div>
</template>
<script>
import moment from 'moment'
import {getaddpiaomj,putpiaomianj,deletepiaomj,postpiaomj} from '@/api/test'
// 添加票面价加价配置
    export default {
        name:"addpiaomianjia",
        data(){
            return{
                tableDatas:{
                    carrier:"",
                    airRoute:"",
                    cabin:"",
                    addPrice:"",
                    flightType:"",
                    id:"",
                    updateTime:"",
                },
                editpiaomjForms:{
                    carrier:"",
                    airRoute:"",
                    cabin:"",
                    addPrice:"",
                    flightType:"",
                    id:"",
                    updateTime:"",
                },
                postpiaomjForms:{
                    carrier:"",
                    airRoute:"",
                    cabin:"",
                    addPrice:"",
                    flightType:"",
                    // id:"",
                    updateTime:"",
                },
                tableData:[],
                editpiaomjForm:false,
                deletepiaomjForm:false,
                deletepmjid:[],
                deletepmjoneid:'',
                postpiaomjForm:false,
            }
        },
        async created(){
            await getaddpiaomj(10,1).then(res => {
                // console.log(res)
                if(res.status == 200){
                    this.tableData = res.data.data.records
                }
            })
        },
        methods:{
            //获取当前时间
              getnewtimes(){
            let newtime = moment().format('YYYY-MM-DD HH:mm:ss')
            // console.log(newtime)
            this.postpiaomjForms.updateTime = newtime
             },
            // 点击x关闭
            closeDialog(){
                this.editpiaomjForm =false
                 this.deletepiaomjForm =false
            },
            // 点击修改按钮
            handleEditpiaomj(index,row){
                 
                  this.editpiaomjForms = Object.assign({},row);
                //   console.log(index,row)
                //   console.log(this.editpiaomjForms)
            },
            // 点击修改  确定按钮
            editpiaomjclick(){
                putpiaomianj(this.editpiaomjForms).then(res => {
                    console.log(res)
                    if(res.data.code == 0){
                        this.editpiaomjForm = false
                        this.editpiaomjForms = {}
                        this.addsForm = {}
                        // 在修改成功时重新加载页面
                        getaddpiaomj(10,1).then(res => {
                            // console.log(res)
                            if(res.status == 200){
                                this.tableData = res.data.data.records
                            }
                        });
                        this.$notify({
                                title: '成功',
                                message: '修改成功',
                                type: 'success',
                                duration:1500
                        });
                        
                    }
                }).catch(err => {
                    this.$notify({
                                title: '错误',
                                message: '修改成功',  
                                duration:1500
                        });
                })
            },
            //点击删除 一条
            handleDeletepiaomj(index,row){
                this.deletepmjid = []
                this.deletepiaomjForm =true
                this.deletepmjid.push(row.id)
                this.deletepmjoneid =row.id
            },
            // 点击确定 删除按钮
            deletepiaomjclick(){
                console.log(this.deletepmjid)
                console.log([this.deletepmjid])
           
                // {[this.deletepmjid]}
                deletepiaomj('['+this.deletepmjoneid+']').then(res => {
                    console.log(res.data.code)
                    if(res.data.code == 0){
                         this.deletepiaomjForm =false
                        this.deletepmjid = []     //将id数组  置为空

                        getaddpiaomj(10,1).then(res => {
                            // console.log(res)
                            if(res.status == 200){
                                this.tableData = res.data.data.records
                            }
                        })
                         this.$notify({
                        title: '成功',
                        message: '删除成功',
                        type: 'success',
                        duration:1500
                        });
                    }else if(res.data.code == 400) {
                         this.$notify({
                        title: '错误',
                        message: '操作失败',
                        
                        duration:1500
                    });
                    }
                }).catch(err => {
                   this.$notify({
                        title: '错误',
                        message: '操作失败',
                        
                        duration:1500
                    });
                })
            },
            //点击取消删除
            cleardelete(){
                 this.deletepiaomjForm =false
                 
            },
            //点击添加票面价 按钮
            postpiaomjclick(){
                this.postpiaomjForm =true
                // this.getnewtimes()
                // console.log(this.postpiaomjForms.updateTime)
              
            },
            // 点击确定  添加票面价按钮
            quedingpostclick(){
                postpiaomj(this.postpiaomjForms).then(res => {
                    console.log(res)
                    if(res.data.code == 0){
                         this.postpiaomjForm =false
                         this.postpiaomjForms = {}
                         getaddpiaomj(10,1).then(res => {
                            // console.log(res)
                            if(res.status == 200){
                                this.tableData = res.data.data.records
                            }
                        })
                         this.$notify({
                        title: '成功',
                        message: '添加成功  ',
                        type: 'success',
                        duration:1500
                        });
                    }
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>
<style lang="scss">
.addpiaomj{
        .el-dialog{
            width:500px;
            height: 400px;
            .el-dialog__body{
                // height:500px;
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
        .deletepmjform{
             .el-dialog{
                width:300px;
                height: 150px;
                .quedingdelete{
                    margin-right: 50px;
                }
             }
        }
        .postpmjform{
             .el-dialog{
                width:400px;
                height: 432px;
                .quedingdelete{
                    margin-right: 50px;
                }
             }
        }
}
</style>