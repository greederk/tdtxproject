<template>
    <div class="xingliconfig">
        行李额配置


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
                            prop="tableData.cabin"
                            label="舱位"
                            width="200">
                             <template slot-scope="scope">
                                <span >{{ scope.row.cabin}}</span>
                            </template>
                        </el-table-column>

                    

                        <el-table-column
                            prop="tableData.startDate"
                            label="行李額"
                            width="300">
                            <template slot-scope="scope">
                                <span >{{ scope.row.specialRule}}</span>
                            </template>
                        </el-table-column>

                

                    

                         <el-table-column
                            width="150"
                            label="操作"
                        >
                             <template slot-scope="scope">
                                <el-button
                                size="mini"
                                @click="handleEditxingli(scope.$index, scope.row),editpiaomjForm =true">修改</el-button>
                                <el-button
                                size="mini"
                                type="danger"
                                @click="handleDeletexingli(scope.$index, scope.row)">删除</el-button>
                            </template>
                        </el-table-column>

                </el-table>


        <el-dialog title="修改行李额配置" :visible="editxingliForm" size="tiny" :modal-append-to-body='false' :close-on-press-escape="false" :close-on-click-modal="true" @close='closeDialog' class="editxingliForm">
            <el-form ref="editxingliForms" :model="editxingliForms" label-width="100px">

                    <el-form-item label="航司">
                        <el-input v-model="editxingliForms.carrier" placeholder="MU"></el-input>
                    </el-form-item>

                    <el-form-item label="航线">
                        <el-input
                                autosize
                                v-model="editxingliForms.airRoute" placeholder="">
                        </el-input>
                    </el-form-item>


                    <el-form-item label="舱位">
                    <el-input v-model="editxingliForms.cabin" placeholder=""></el-input>
                    </el-form-item>

                    <el-form-item label="行李额">
                    <el-input v-model="editxingliForms.specialRule" ></el-input>
                    </el-form-item>
   
                    <el-form-item>
                        <el-button type="primary" @click="quedingeditxingliconfig" class="quedingedittgq">确定</el-button>
                        <el-button @click="editxingliForm = false">取消</el-button>
                    </el-form-item>
            </el-form>
        </el-dialog>

         <el-dialog title="添加行李额配置" :visible="addxingliForm" size="tiny" :modal-append-to-body='false' :close-on-press-escape="false" :close-on-click-modal="true" @close='closeDialog' class="editxingliForm">
            <el-form ref="addxingliForms" :model="addxingliForms" label-width="100px">

                    <el-form-item label="航司">
                        <el-input v-model="addxingliForms.carrier" placeholder="MU"></el-input>
                    </el-form-item>

                    <el-form-item label="航线">
                        <el-input
                                autosize
                                v-model="addxingliForms.airRoute" placeholder="">
                        </el-input>
                    </el-form-item>


                    <el-form-item label="舱位">
                    <el-input v-model="addxingliForms.cabin" placeholder=""></el-input>
                    </el-form-item>

                    <el-form-item label="行李额">
                    <el-input v-model="addxingliForms.specialRule" ></el-input>
                    </el-form-item>
   
                    <el-form-item>
                        <el-button type="primary" @click="quedingaddxingliconfig" class="quedingaddxingli">确定</el-button>
                        <el-button @click="addxingliForm = false">取消</el-button>
                    </el-form-item>
            </el-form>
        </el-dialog>

        <div>
            <el-button @click="addxingliclick">添加行李额配置</el-button>
        </div>
    </div>
</template>
<script>
import {getxingliconfig,putxingliconfig,deletexingliconfig,postxingliconfig} from '@/api/test'
export default {
    name:"xingliconfig",
    data(){
        return{
            tableData:[],
            editxingliForms:{
                specialRule:'',
                cabin:'',
                carrier:'',
                id:'',
            },
            addxingliForms:{
                specialRule:'',
                cabin:'',
                carrier:'',
                id:'',
            },
            editxingliForm:false,
            addxingliForm:false,
            deletexingliid:[],

        }
    },
     created(){
       this.getxinglidata(10,1)
    },
    methods:{
        // 获取行李额数据
        getxinglidata(n1,n2){
            getxingliconfig(n1,n2).then(res => {
                console.log(res)
                if(res.data.code == 0){
                    this.tableData = res.data.data.records
                }
            }).catch(err => {
                console.log(err)
            })
        },
        closeDialog(){
            this.editxingliForm = false
            this.addxingliForm = false
        },
        
        // 点击修改按钮
        handleEditxingli(index,row){
            this.editxingliForm = true
          this.editxingliForms = Object.assign({},row);
        },
        // 点击确定 修改 按钮
        quedingeditxingliconfig(){
            putxingliconfig(this.editxingliForms).then(res =>{
                if(res.data.code == 0){
                    this.editxingliForm = false
                    this.editxingliForms = {}
                    getxingliconfig(10,1).then(res => {
                        console.log(res)
                        if(res.data.code == 0){
                            this.tableData = res.data.data.records
                        }
                    })
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
                            message: '操作失败',
                           
                            duration:1500
                    });
            })
        },
        //点击删除按钮
        handleDeletexingli(idnex,row){
            this.deletexingliid.push(row.id)
            deletexingliconfig('['+this.deletexingliid+']').then(res => {
                if(res.data.code == 0){
                    getxingliconfig(10,1).then(res => {
                        
                        if(res.data.code == 0){
                            this.tableData = res.data.data.records
                        }
                    });
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
                            message: '操作失败'+err,    
                            duration:1500
                    });
            })
        },
        //点击添加行李额
        addxingliclick(){
            this.addxingliForm = true
        },
        //点击确定 添加行李额按钮
        quedingaddxingliconfig(){
            postxingliconfig(this.addxingliForms).then(res => {
                if(res.data.code == 0){
                    this.addxingliForm = false
                    this.addxingliForms = {}
                    getxingliconfig(10,1).then(res => {
                       
                        if(res.data.code == 0){
                            this.tableData = res.data.data.records
                        }
                    });
                     this.$notify({
                            title: '成功',
                            message: '添加行李额成功',
                            type: 'success',
                            duration:1500
                    });
                }else{
                   this.$notify.error({
                            title: '失败',
                            message: '添加失败',
                          
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
.xingliconfig{
.editxingliForm{
          .el-dialog{
                width:600px;
                height: 432px;
          }
    }
}
    
</style>