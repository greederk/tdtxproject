<template>
    <div class="shangchuan-con">
        政策配置:
        <div class="sc-head">
             <el-table
                    :data="tableData"
                
                    border
                    stripe
                    >

                        <el-table-column
                            prop="tableData.allDoesInterval"
                            label="全量时间（h）"
                            align="center"
                            width="120">
                             <template slot-scope="scope">
                               
                                <span >{{ scope.row.allDoesInterval}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.uploadStartTime"
                            label="上传开始时间"
                            width="100"
                        >
                             <template slot-scope="scope">
                                <span >{{ scope.row.uploadStartTime}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.uploadEndTime"
                            label="上传结束时间"
                            width="100">
                             <template slot-scope="scope">
                                <span >{{ scope.row.uploadEndTime}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.uploadEndTime"
                            label="执行时间"
                            width="100">
                             <template slot-scope="scope">
                                <span >{{ scope.row.allDoesTime}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.platform"
                            label="上传平台"
                            width="100">
                            <template slot-scope="scope">
                                <span >{{ scope.row.platform == 1? '携程': '未知'}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.policyType"
                            label="政策类型"
                            width="100">
                            <template slot-scope="scope">
                                <span >{{ scope.row.policyType }}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.uploadType"
                            label="上传方式"
                            width="100">
                             <template slot-scope="scope">
                                <span >{{ scope.row.uploadType == 1 ? '全量' : '未知'}}</span>
                            </template>
                        </el-table-column>

                         <el-table-column
                            prop="tableData.allDoesStatus"
                            label="全量进度"
                            width="100">
                            <template slot-scope="scope">
                                <span >{{ scope.row.allDoesStatus == 0 ? '未开始': '已完成'}}</span>
                            </template>
                        </el-table-column>

                         <el-table-column
                            prop="tableData.policySource"
                            label="政策来源"
                            width="100">
                            <template slot-scope="scope">
                                <span >{{ scope.row.policySource}}</span>
                            </template>
                        </el-table-column>

                         <el-table-column
                            prop="tableData.scheduleTimes"
                            label="已执行次数"
                            width="100">
                            <template slot-scope="scope">
                                <span >{{ scope.row.scheduleTimes}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.status"
                            label="状态"
                            width="100">
                            <template slot-scope="scope">
                                <span >{{ scope.row.status == 0 ? "未启用": "已启用"}}</span>
                            </template>
                        </el-table-column>

                   

                        <el-table-column
                            prop="tableData.updateTime"
                            label="最后修改时间"
                            width="200">
                            <template slot-scope="scope">
                                <span >{{ scope.row.updateTime}}</span>
                            </template>
                        </el-table-column>

                </el-table>
               
               
        </div>

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
             <el-button  @click="getnewtimes(),addForm = true" id="addbtn">添加上传任务配置</el-button>
         </div>
            
        <el-dialog title="添加上传" :visible="addForm" size="tiny" :modal-append-to-body='false' :close-on-press-escape="false" :close-on-click-modal="true" @close='closeDialog'>
             <el-form ref="addsForm" :model="addsForm" label-width="130px">

                    <el-form-item label="全量时间">
                    <el-input v-model="addsForm.allDoesInterval" placeholder="2"></el-input>
                    </el-form-item>

                    <el-form-item label="上传开始时间">
                        <el-input
                                autosize
                                v-model="addsForm.uploadStartTime" placeholder="12:00">
                        </el-input>
                    </el-form-item>


                    <el-form-item label="上传结束时间">
                    <el-input v-model="addsForm.uploadEndTime" placeholder="15:00"></el-input>
                    </el-form-item>

                    <el-form-item label="执行时间">
                    <el-input v-model="addsForm.allDoesTime	" placeholder="12:15"></el-input>
                    </el-form-item>

                    <el-form-item label="上传平台">
                    <el-input v-model="addsForm.platform" placeholder="1(携程)"></el-input>
                    </el-form-item>

                    <el-form-item label="政策类型">
                        <el-input v-model="addsForm.policyType" placeholder="101"></el-input>
                    </el-form-item>

                    <el-form-item label="上传方式">
                    <el-input v-model="addsForm.uploadType"   placeholder="1(全量)"></el-input>
                    </el-form-item>

                    <el-form-item label="全量进度">
                    <el-input v-model="addsForm.allDoesStatus" placeholder="默认0(未开始);1已完成"></el-input>
                    </el-form-item>

                    <el-form-item label="政策来源">
                    <el-input v-model="addsForm.policySource" placeholder="官网"></el-input>
                    </el-form-item>

                    <el-form-item label="已执行次数">
                    <el-input v-model="addsForm.scheduleTimes" placeholder="0"></el-input>
                    </el-form-item>

                    <el-form-item label="状态">
                    <el-input v-model="addsForm.status" placeholder="0(未启用)；1已启用"></el-input>
                    </el-form-item>

                    <el-form-item label="最后修改时间">
                    <el-input v-model="addsForm.updateTime" ></el-input>
                    </el-form-item>

                    
                    <el-form-item>
                        <el-button type="primary" @click="studentAdd">确定</el-button>
                        <el-button @click="addsForm={},addForm = false">取消</el-button>
                    </el-form-item>
        </el-form>
      </el-dialog>
    </div>
</template>
<script>
import moment from 'moment'

import {getupload,postupload,getuplaodtype} from '@/api/test'
// 获取上传平台 
export default {
    name:'shangchuan',
    components:{
        
    },
    computed:{
       datatime(){
          return moment().format('YYYY-MM-DD HH:mm:ss ')
       }
    },
    data(){
        return{
           createTime:'',
            tableDatas:{
                allDoesInterval:'',  //间隔时间
                allDoesStatus:'',      //0 未开始   1 已完成
                allDoesTime:'',         //执行时间
                column2:'',
                id:'',
                platform:'',          //上传平台
                policySource:'',     //来源  （官网）
                policyType:'',       //政策类型
                scheduleTimes:'',    //已执行次数
                status:'',           //状态：0-未启用（默认），1-已启用
                updateTime:'',       //example: yyyy-MM-dd HH:mm:ss 
                uploadEndTime:'',    // 上传结束时间
                uploadStartTime:'',   //上传开始时间
                uploadType:'1'        //上传方式：1-全量
             },
             addsForm:{
                 allDoesInterval:'',  //间隔时间
                allDoesStatus:'',      //0 未开始   1 已完成
                allDoesTime:'',         //执行时间
                column2:'',
                id:'',
                platform:'',          //上传平台
                policySource:'',     //来源  （官网）
                policyType:'',       //政策类型
                scheduleTimes:'',    //已执行次数
                status:'',           //状态：0-未启用（默认），1-已启用
                updateTime:'',       //example: yyyy-MM-dd HH:mm:ss 
                uploadEndTime:'',    // 上传结束时间
                uploadStartTime:'',   //上传开始时间
                uploadType:'1'        //上传方式：1-全量
             },
             tableData:[],
             addForm:false,
             uploadtyep:[],
            //  当前页数  默认1
            currentPage:1,
            pagesize:10,
        }
    },
    methods:{
        getnewtimes(){
            let newtime = moment().format('YYYY-MM-DD HH:mm:ss')
            console.log(newtime)
            this.addsForm.updateTime = newtime
        },
        // getuploads(num1,num2){
        //   return  getupload(num1,num2).then(response => {
        //        this.tableData = response.data.data.records
        //        console.log(this.tableData)
        //     }).catch(err => {
        //         console.log(err)
        //     })
        // }
        // 添加  上传任务
        // 点击X关闭
        closeDialog(){
            this.addForm= false
        },
        //点击确定添加上传
        studentAdd(){
            this.addForm= false
            postupload(this.addsForm).then(response => {
                // code=0,data=200
                // console.log(response)
            
                    console.log(response)
                     this.$notify({
                        title: '成功',
                        message: '添加成功',
                        type: 'success',
                        duration:1500
                    });
                
            }).catch(err => {
                console.log(err)
            })
        },

         // 分页组件
        handleSizeChange(val) {
        // 每页展示多少条改变时触发，val是改变成的值
            this.pagesize=val;
            this.currentPage=1;
            // this.getdata(this.currentPage,this.pagesize)
            getupload(this.pagesize,this.currentPage).then(response => {
                 this.tableData = response.data.data.records
            //    console.log(this.tableData)
                }).catch(err => {
                console.log(err)
             })
        },
         handleCurrentChange(val) {
            //   页数改变时触发
            this.currentPage=val
            getupload(this.pagesize,this.currentPage).then(response => {
                 this.tableData = response.data.data.records
            //    console.log(this.tableData)
                }).catch(err => {
                console.log(err)
             })
        },
    },
    async created(){
        await getupload(10,1).then(response => {
                 this.tableData = response.data.data.records
               console.log(this.tableData)
                }).catch(err => {
                console.log(err)
             })

        //获取上传平台
        await getuplaodtype().then(response => {
            this.uploadtyep = response.data
            console.log(this.uploadtyep)
        }).catch(err => {
            console.log(err)
        })
    }
}
</script>
<style lang="scss">
    .shangchuan-con{
        width:100%;
        .sc-head{
            margin-top:20px;
            display:flex;
            .alltime{
                width:60px;
                margin-right:20px;
            }
            .alltime1{
                margin:0 20px 0 20px;
                width:180px;
            }
        }

          // 添加上传
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