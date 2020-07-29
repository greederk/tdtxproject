<template>
    <div>
        退改签配置
             <el-table
                    :data="tableData"
                
                    border
                    stripe
                    >
                        <el-table-column
                            prop="tableData.carrier"
                            label="航司"
                            align="center"
                            width="120">
                             <template slot-scope="scope">
                               
                                <span >{{ scope.row.carrier}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.airRoute"
                            label="航线"
                            width="100"
                        >
                             <template slot-scope="scope">
                                <span >{{ scope.row.airRoute}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.cabin"
                            label="舱位"
                            width="100">
                             <template slot-scope="scope">
                                <span >{{ scope.row.cabin}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.status"
                            label="启用状态"
                            width="100">
                             <template slot-scope="scope">
                                <span >{{ scope.row.status == 0 ? '未启用' : '已启用'}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.startDate"
                            label="开始日期"
                            width="100">
                            <template slot-scope="scope">
                                <span >{{ scope.row.startDate}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.endDate"
                            label="结束日期"
                            width="100">
                            <template slot-scope="scope">
                                <span >{{ scope.row.endDate }}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.refundRule"
                            label="退票规则"
                            width="100">
                            <template slot-scope="scope">
                                <span >{{ scope.row.refundRule}}</span>
                            </template>
                        </el-table-column>

                         <el-table-column
                            prop="tableData.canSign"
                            label="是否可签转"
                            width="100">
                            <template slot-scope="scope">
                                <span >{{ scope.row.canSign == 0 ? '否' : '是'}}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.changeRule"
                            label="改签规则"
                            width="100">
                            <template slot-scope="scope">
                                <span >{{ scope.row.changeRule }}</span>
                            </template>
                        </el-table-column>

                        <el-table-column
                            prop="tableData.passengerType"
                            label="乘客类型"
                            width="100">
                            <template slot-scope="scope">
                                <span >{{ scope.row.passengerType == 0 ? '儿童': '成人' }}</span>
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
                                @click="handleDeletetgq(scope.$index, scope.row)">删除</el-button>
                            </template>
                        </el-table-column>

                </el-table>



          <el-dialog title="添加退改签配置" :visible="addtgqForm" size="tiny" :modal-append-to-body='false' :close-on-press-escape="false" :close-on-click-modal="true" @close='closeDialog' class="addtgqform">
             <el-form ref="addtgqForms" :model="addtgqForms" label-width="100px">

                    <el-form-item label="航司">
                        <el-input v-model="addtgqForms.carrier" placeholder="MU"></el-input>
                    </el-form-item>

                    <el-form-item label="航线">
                        <el-input
                                autosize
                                v-model="addtgqForms.airRoute" placeholder="12:00">
                        </el-input>
                    </el-form-item>


                    <el-form-item label="舱位">
                    <el-input v-model="addtgqForms.cabin" placeholder="15:00"></el-input>
                    </el-form-item>

                    <el-form-item label="启用状态">
                    <el-input v-model="addtgqForms.status" placeholder="0:未启用;1:已启用"></el-input>
                    </el-form-item>

                    <el-form-item label="开始日期">
                        <el-input v-model="addtgqForms.startDate" placeholder="2020-07-29"></el-input>
                    </el-form-item>

                    <el-form-item label="结束日期">
                    <el-input v-model="addtgqForms.endDate" placeholder="2020-07-30" ></el-input>
                    </el-form-item>

                    <el-form-item label="退票规则">
                    <el-input v-model="addtgqForms.refundRule"></el-input>
                    </el-form-item>

                    <el-form-item label="是否可签转">
                    <el-input v-model="addtgqForms.canSign" placeholder="0:否 ; 1:是"></el-input>
                    </el-form-item>

                    <el-form-item label="改签规则">
                    <el-input v-model="addtgqForms.changeRule" ></el-input>
                    </el-form-item>

                    <el-form-item label="乘客类型">
                    <el-input v-model="addtgqForms.passengerType" placeholder="0(儿童);1:成人"></el-input>
                    </el-form-item>

                    <!-- <el-form-item label="最后修改时间">
                    <el-input v-model="addtgqForms.updateTime" ></el-input>
                    </el-form-item> -->

                    
                    <el-form-item>
                        <el-button type="primary" @click="handlegettgq" class="quedingaddtgq">确定</el-button>
                        <el-button @click="addtgqForm = false">取消</el-button>
                    </el-form-item>
        </el-form>
      </el-dialog>

      <el-dialog title="修改退改签配置" :visible="edittgqForm" size="tiny" :modal-append-to-body='false' :close-on-press-escape="false" :close-on-click-modal="true" @close='closeDialog' class="addtgqform">
             <el-form ref="edittgqForms" :model="edittgqForms" label-width="100px">

                    <el-form-item label="航司">
                        <el-input v-model="edittgqForms.carrier" placeholder="MU"></el-input>
                    </el-form-item>

                    <el-form-item label="航线">
                        <el-input
                                autosize
                                v-model="edittgqForms.airRoute" placeholder="12:00">
                        </el-input>
                    </el-form-item>


                    <el-form-item label="舱位">
                    <el-input v-model="edittgqForms.cabin" placeholder="15:00"></el-input>
                    </el-form-item>

                    <el-form-item label="启用状态">
                    <el-input v-model="edittgqForms.status" placeholder="0:未启用;1:已启用"></el-input>
                    </el-form-item>

                    <el-form-item label="开始日期">
                        <el-input v-model="edittgqForms.startDate" placeholder="2020-07-29"></el-input>
                    </el-form-item>

                    <el-form-item label="结束日期">
                    <el-input v-model="edittgqForms.endDate" placeholder="2020-07-30" ></el-input>
                    </el-form-item>

                    <el-form-item label="退票规则">
                    <el-input v-model="edittgqForms.refundRule"></el-input>
                    </el-form-item>

                    <el-form-item label="是否可签转">
                    <el-input v-model="edittgqForms.canSign" placeholder="0:否 ; 1:是"></el-input>
                    </el-form-item>

                    <el-form-item label="改签规则">
                    <el-input v-model="edittgqForms.changeRule" ></el-input>
                    </el-form-item>

                    <el-form-item label="乘客类型">
                    <el-input v-model="edittgqForms.passengerType" placeholder="0(儿童);1:成人"></el-input>
                    </el-form-item>

                    <!-- <el-form-item label="最后修改时间">
                    <el-input v-model="addtgqForms.updateTime" ></el-input>
                    </el-form-item> -->

                    
                    <el-form-item>
                        <el-button type="primary" @click="quedingedittgq" class="quedingedittgq">确定</el-button>
                        <el-button @click="edittgqForm = false">取消</el-button>
                    </el-form-item>
        </el-form>
      </el-dialog>

        <el-dialog title="删除退改签配置" :visible="deletetgqForm" size="tiny" :modal-append-to-body='false' :close-on-press-escape="false" :close-on-click-modal="true" @close='closeDialog' width="500"
         class="deletetgqform">
                  <el-button type="primary" @click="deletetgqclick" class="quedingdelete">确定删除</el-button>
                    <el-button @click="cleardelete(),deletetgqForm = false">取消</el-button>
        </el-dialog>
            
        <div>
            <el-button @click="posttgqclick">添加退改签配置</el-button>
        </div>
    </div>
</template>
<script>
import moment from 'moment'
import {gettgqconfig,posttgqconfig,deletetgqconfig,puttgqconfig} from '@/api/test'
export default {
    name:'',
    data(){
        return{
            tableData:[],
            tableDatas:{
                carrier:'',
                airRoute:'',
                cabin:"",
                status:'',
                startDate:'',
                endDate:'',
                updateTime:'',
                id:'',
                changeRule:'',
                canSign:'',
                refundRule:'',
                passengerType:'',
            },
            addtgqForms:{
                carrier:'',
                airRoute:'',
                cabin:"",
                status:'',
                startDate:'',
                endDate:'',
                updateTime:'',
                id:'',
                changeRule:'',
                canSign:'',
                refundRule:'',
                passengerType:'',
            },
            edittgqForms:{
                carrier:'',
                airRoute:'',
                cabin:"",
                status:'',
                startDate:'',
                endDate:'',
                updateTime:'',
                id:'',
                changeRule:'',
                canSign:'',
                refundRule:'',
                passengerType:'',
            },
            addtgqForm:false,
            deletetgqForm:false,
            deletetgqid:[],
            edittgqForm:false,
        }
    },
    async created(){
        await gettgqconfig(10,1).then(res=>{
            if(res.data.code == 0){
                this.tableData = res.data.data.records
            }
        })
    },
    methods:{
          getnewtimes(){
            let newtime = moment().format('YYYY-MM-DD HH:mm:ss')
            // console.log(newtime)
            this.addtgqForms.updateTime = newtime
             },
        //点击添加 退改签 按钮
        posttgqclick(){
            // console.log('点击')
            // this.getnewtimes()
          this.addtgqForm = true
        },
        //点击X关闭
        closeDialog(){
            this.addtgqForm = false
            this.addtgqForms = {}
            this.deletetgqForm = false
            this.edittgqForm = false

        },
        // 点击确定 添加  按钮
        handlegettgq(){
            posttgqconfig(this.addtgqForms).then(res => {
                if(res.data.code == 0){
                    this.addtgqForm = false
                    this.addtgqForms = {}
                    gettgqconfig(10,1).then(res=>{
                        if(res.data.code == 0){
                            this.tableData = res.data.data.records
                        }
                    });
                    this.$notify({
                            title: '成功',
                            message: '添加成功',
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
        //点击删除单条  
        handleDeletetgq(index,row){
            this.deletetgqForm = true
            this.deletetgqid.push(row.id)
        },
        //点击确定 删除按钮
        deletetgqclick(){
            console.log(this.deletetgqid)
            deletetgqconfig('['+this.deletetgqid+']').then(res => {
                if(res.data.code == 0){
                     this.deletetgqForm = false
                     this.deletetgqid = ''
                     gettgqconfig(10,1).then(res=>{
                        if(res.data.code == 0){
                            this.tableData = res.data.data.records
                        }
                    })
                    this.$notify({
                            title: '成功',
                            message: '删除成功',
                            type: 'success',
                            duration:1500
                    });
                }else{
                    this.$notify.error({
                            title: '失败',
                            message: '删除失败',
                          
                            duration:1500
                    });
                }
            }).catch(err => {
                this.$notify.error({
                            title: '失败',
                            message: '操作失败',
                          
                            duration:1500
                    });
            })
        },
        //点击关闭删除 form
        cleardelete(){
            this.deletetgqForm = false
            this.deletetgqid = ''
        },

        // 点击修改 退改签按钮
        handleEditpiaomj(index,row){
            this.edittgqForm = true
            // this.edittgqForms = row
            this.edittgqForms = Object.assign({},row);
        },
        //点击确定   修改退改签
        quedingedittgq(){
            puttgqconfig(this.edittgqForms).then(res =>{
                if(res.data.code == 0) {
                    this.edittgqForm = false
                    this.edittgqForms = {}
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
                }else{
                    this.$notify.error({
                            title: '失败',
                            message: '修改失败',
                           
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
        }
    }
}
</script>
<style lang="scss">
    .addtgqform{
        
         .el-dialog{
                width:800px;
                height: 432px;
                .el-dialog__body{
                // height:500px;
                .el-form{
                    display: flex;
                    flex-wrap: wrap;
                    .el-form-item{
                        margin-bottom:1px;
                        .el-form-item__label{
                            width:100px
                        }
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
                .quedingaddtgq{
                    margin-right: 50px;
                }
             }
             .el-form-item__label{
                text-align: left;
             }
             
    }

    .deletetgqform{
                 .el-dialog{
                    width:300px;
                    height: 150px;
                     .quedingdelete{
                    margin-right: 50px;
                    }
                 }
    }
</style>