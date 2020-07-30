<template>
    <div class="baseconfigcon">
        <h6>基本配置</h6>
            <table class="tablecon">
                <tr>
                    <td class="td1">留点</td>
                    <td>
                        <el-input size="mini" placeholder="0" class="input_all" v-model="baseconfig.keepPoint"></el-input>  
                        <span>为正数给自己留点，负数是亏出去多少点</span>
                    </td>
                </tr>
                <tr>
                    <td class="td1">留钱</td>
                    <td>
                        <el-input size="mini" class="input_all" v-model="baseconfig.keepMoney"></el-input>  
                        <span>正数留钱，负数亏钱</span>
                    </td>
                </tr>
                <tr>
                    <td class="td1">默认留钱</td>
                    <td>
                        <el-input size="mini" class="input_all" v-model="baseconfig.defaultKeepMoney"></el-input>  
                        <span>默认0</span>
                    </td>
                </tr>
                 <tr >
                    <td class="td1">旅行时间限制</td>
                    <td class="dateonline">
                      <Containerone :placeholdernow="baseconfig.startDate" v-model="baseconfig.startDate" @tosenddata1="getsenddata1"></Containerone>
                          到:
                            <Containertwo :placeholdernow="baseconfig.endDate" v-model="baseconfig.endDate" @tosenddata2="getsenddata2"></Containertwo>
                        <span>不填不限制</span>
                    </td>
                </tr>
                <tr>
                    <td class="td1" >官网是否上传共享航班</td>
                    <td>
                         <el-radio  :label="1" v-model="baseconfig.uploadShareFlight">是</el-radio>
                        <el-radio  :label="0" v-model="baseconfig.uploadShareFlight">否</el-radio>
                    </td>
                </tr>
                 <tr>
                    <td class="td1">票面价限制</td>
                    <td>
                      最低票面价: <el-input class="input_all" v-model="baseconfig.minPrintPrice"></el-input>    最高票面价: <el-input class="input_all" v-model="baseconfig.maxPrintPrice"></el-input>
                    </td>
                </tr>
                <tr>
                    <td class="td1">上传政策方式</td>
                    <td>
                      <el-radio v-model="baseconfig.uploadType" :label="0">最低价</el-radio>
                        <el-radio v-model="baseconfig.uploadType" :label="1">最低价和次低价</el-radio>
                        <el-radio v-model="baseconfig.uploadType" :label="2">所有</el-radio>
                    </td>
                </tr>
                <tr>
                    <td class="td1">下架数据方式</td>
                    <td>
                      <el-radio v-model="baseconfig.stopType" :label="0">按航线删除</el-radio>
                        <el-radio v-model="baseconfig.stopType" :label="1">按航司删除</el-radio>
                        <!-- <el-radio v-model="baseconfig.stopType" label="3">所有</el-radio> -->
                    </td>
                </tr>
                 <tr>
                    <td class="td1">上传前是否下架</td>
                    <td>    
                      <el-radio v-model="baseconfig.stopBeforeUpload" :label="1">是</el-radio>
                        <el-radio v-model="baseconfig.stopBeforeUpload" :label="0">否</el-radio>
                    </td>
                </tr>
                <tr>
                    <td class="td1">是否比价</td>
                    <td>    
                      <el-radio v-model="baseconfig.comparePrice" :label="1">是</el-radio>
                        <el-radio v-model="baseconfig.comparePrice" :label="0">否</el-radio>
                    </td>
                </tr>
                <tr>
                    <td class="td1">比价航司</td>
                    <td>    
                      <el-input class="input_all" v-model="baseconfig.comparePriceCarrier"></el-input>
                      <span>官网格式：KN,PN 旗舰店格式：KNNew,PNNew KN远期格式：KNYQ</span>
                    </td>
                </tr>
                <tr>
                    <td class="td1">是否上传当天政策</td>
                    <td>    
                    <el-radio v-model="baseconfig.sameDayPolicy" :label="1">是</el-radio>
                        <el-radio v-model="baseconfig.sameDayPolicy" :label="0">否</el-radio>
                    </td>
                </tr>
                <tr>
                    <td class="td1">销售天数</td>
                    <td>    
                         <el-input class="input_all" v-model="baseconfig.saleDays"></el-input>
                         <span>官网格式：HU=3-30;PN=4-30 旗舰店格式：HUNew=3-30;PNNew=4-30</span>
                    </td>
                </tr>
                <tr>
                    <td class="td1">上传比价数据时间限制</td>
                    <td>    

                         <!-- <Containerone :placeholdernow1="baseconfig.comparePriceStartDate" v-model="baseconfig.comparePriceStartDate" @tosenddata3="getsenddata3"></Containerone>
                          到: -->
                            <Container :placeholdernow1="baseconfig.comparePriceStartDate" :placeholdernow2="baseconfig.comparePriceEndDate" 
                                v-model='datas' @tosenddata3="getsenddata3" @tosenddata4="getsenddata4"
                            ></Container>


                         <!-- <el-input class="input_all" v-model="baseconfig.comparePriceStartDate" placeholder="2020-07-07"></el-input> 到 <el-input class="input_all" v-model="baseconfig.comparePriceEndDate" placeholder="2020-07-08"></el-input > -->

                    </td>
                </tr>
                <tr>
                    <td class="td1">FD运价和官网比价过滤</td>
                    <td>    
                         <el-input class="input_all" v-model="baseconfig.differenceFdOfficial"></el-input> 
                         <span>格式：KN-20,PN-30</span>
                            
                    </td>
                </tr>
                <tr>
                    <td class="td1">最大亏损值</td>
                    <td>    
                         <el-input class="input_all" v-model="baseconfig.maxLoss"></el-input> 
                         <span>不填默认为35。格式：KN-50;PN-80</span>
                            
                    </td>
                </tr>
                <tr>
                    <td class="td1">官网差价超时是否失败处理</td>
                    <td>    
                         <el-radio v-model="baseconfig.officialFail" :label="1">是</el-radio>
                        <el-radio v-model="baseconfig.officialFail" :label="0">否</el-radio>
                    </td>
  
                </tr>
                <tr>
                    <td class="td1">去FD运价上传航司</td>
                    <td>    
                       <el-input class="input_all" v-model="baseconfig.useFdPrice"></el-input>
                         <span>KN,PN 结算价用FD运价匹配留钱算出</span>
                    </td>

                </tr>
            </table>
              <el-button type="success" class="subbut" @click="postbase.bind(this,baseconfig)()">提交修改</el-button>
    </div>
</template>
<script>
// 引入日期选择组件
import Containerone from '@/components/common/containerone'
import Containertwo from '@/components/common/containertwo'
import Container from '@/components/common/container'
import {postbaseconfig,getbaseconfig} from '@/api/test'
export default {
    name:'baseconfig',
    components:{
        Containerone,
        Containertwo,
        Container
    },
    data(){
        return{
            // lxtime1:'',
            // lxtime2:'',
            datas:[],
            baseconfig:{
                startDate:'',   //旅行时间限制
                keepPoint:'',   //留点number
                keepMoney:'',   //留钱number
                defaultKeepMoney:'',   //默认留钱 number
                endDate:'',
                updateTime:'',     //旅行时间 限制      	string($date)
                uploadShareFlight:'',   //官网是否上传共享航班  integer0-否，1-是  
                minPrintPrice:'',   //最低票面价
                maxPrintPrice:'',   //最高票面价
                uploadType:'',   //上传政策方式，0-最低价，1-最低价和次低价，2-所有
                stopType:'',   //下架数据方式
                stopBeforeUpload:'',   //上架前是否下架
                comparePrice:'',  //是否比价
                comparePriceCarrier:'',    //比价航司
                sameDayPolicy:'',   // 是否上传当天政策
                saleDays:'',     //销售天数
                comparePriceStartDate:'',  //上传比价数据时间限制
                comparePriceEndDate:'',    //上传比价数据时间限制
                differenceFdOfficial:'',   //fd运价过滤
                maxLoss:'' ,  //str   最大亏损值
                useFdPrice:'' ,   //取FD运价上传航司
                id:'1'

            }
        }
    },
    mounted(){
     
    },
    methods:{
         postbase(data){
         return   postbaseconfig(data).then((response)=> {
                 
                        if(response.data.code == 0){
                             this.$notify({
                                title: '成功',
                                message: '添加配置成功',
                                type: 'success',
                                duration:1500
                            });
                        }
                         this.getbase()
                    }).catch(error => {
                         this.$notify.error({
                                title: '失败',
                                message: '添加配置失败',   
                                duration:1500
                            });
                    })
         },
         getbase(){
             getbaseconfig().then(res => {
                 if(res.data.code == 0){
                     this.baseconfig = res.data.data
                 }
             }).catch(err => {
                 console.log(err)
             })
         },
        //  获取从子组件传过来的值
         getsenddata1(dataone){
             this.baseconfig.startDate = dataone
         },
         getsenddata2(dataone){
             this.baseconfig.endDate = dataone
         },
         getsenddata3(datatwo){
             this.baseconfig.comparePriceStartDate = datatwo
         },
        getsenddata4(datatwo){
             this.baseconfig.comparePriceEndDate = datatwo
        }
    },
    created(){
        this.getbase()
    },
    watch:{

    }
}
</script>
<style lang="scss">
.baseconfigcon{
    height: 1800px;
    .tablecon{
        width:80%;
         border-top: 1px solid #000000;
        border-left: 1px solid #000000;
        border-collapse: collapse; /*设置单元格的边框合并为1*/

        td{
             border-bottom: 1px solid #000000;
          border-right: 1px solid #000000;
          .input_all{
              width:200px;
            //   height: ;
          }
          color:'#000';
        //   font-weight: ;

        }
        .td1{
            width:200px;
            padding-left:20px;
        }
        .dateonline{
            display: flex;
        
        }
      

    }
    .subbut{
        margin-top:20px;
        margin-left:20px;
    }
}
</style>