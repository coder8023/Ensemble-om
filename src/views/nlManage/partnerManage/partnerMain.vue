<template>
  <div class="app-container">
    <v-layout row wrap>
      <v-flex lg9 sm9 class="v-card">
        <v-toolbar color="primary lighten-1" dark tabs>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title class="white--text">合作方签约</v-toolbar-title>
          <v-tabs color="primary lighten-1" slot="extension" v-model="activeName" grow show-arrows>
            <v-tabs-slider color="yellow"></v-tabs-slider>
            <v-tab v-for="n in prodInfo" :key="n">
              {{ n.text}}
            </v-tab>
          </v-tabs>
        </v-toolbar>
        <v-tabs-items v-model="activeName" class="white elevation-1">
          <v-tab-item v-for="i in 4" :key="i" :id="'mobile-tabs-5-' + i">
            <partner-basic v-if="i==1" ref="callback" v-bind:prodData="prodData" v-on:getNewProdData="getNewProdData"></partner-basic>
            <partner-settle v-if="i==2"></partner-settle>
            <partner-contributive v-if="i==3"></partner-contributive>
            <partner-account v-if="i==4"></partner-account>
          </v-tab-item>
        </v-tabs-items>
      </v-flex>
      <v-flex lg3 sm3 class="v-card">
        <v-card>
          <v-card-text>
            <v-btn color="success" depressed="" ><v-icon >assignment_turned_in</v-icon>暂存</v-btn>
            <v-btn color="success" depressed="" ><v-icon >history</v-icon>复制</v-btn>
            <v-btn color="success" depressed="" @click="saveClick"><v-icon >history</v-icon>保存</v-btn>
          </v-card-text>
        </v-card>
        <v-toolbar dense class="chat-history-toolbar prodLists">
          <v-text-field flat solo full-width clearable prepend-icon="search" class="top" label="Search" v-model="searchValue"></v-text-field>
        </v-toolbar>
        <vue-perfect-scrollbar class="depositTree">
          <v-list two-line subheader>
            <!--<v-subheader inset>合作方信息</v-subheader>-->
            <v-list-tile class="chat-list prodList" avatar v-for="(item, index ) in folders" :key="item.title" @click="handleClick(item)">
              <v-list-tile-avatar>
                <v-icon :class="['amber white--text']">{{ 'call_to_action'}}</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.partnerCode }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ item.partnerName }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn icon ripple>
                  <v-icon color="grey lighten-1">info</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </vue-perfect-scrollbar>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
    import PartnerBasic from '../partnerManage/partnerBasic';
    import PartnerSettle from '../partnerManage/partnerSettle';
    import PartnerContributive from '../partnerManage/partnerContributive';
    import PartnerAccount from '../partnerManage/partnerAccount';
    import {getPartnerInfo} from '@/api/nLoan';
    import {getPartnerData} from '@/api/nLoan';
    export default {
        name: 'deposit',
        components: {
            PartnerBasic,
            PartnerSettle,
            PartnerContributive,
            PartnerAccount
        },
        data () {
            return {
                listLoading: true,
                searchValue: '',
                depositProd: {
                    partnerCode: '',
                },
                partner: '',
                prodClass: '',
                activeName: 'basic',
                prodInfo: [{
                    icon: 'account_balance',
                    text: '基本信息'
                }, {
                    icon: 'filter_vintage',
                    text: '结算信息'
                }, {
                    icon: 'work',
                    text: '出资信息'
                }, {
                    icon: 'work',
                    text: '对账信息'
                }],
                files: [{
                    icon: 'assignment',
                    iconClass: 'blue white--text',
                    value: '',
                    lable: ''
                }],
              folders: [
              ], prodData: {},
            sourceProdData: {},
            targetData: {}
            }
        },
        created() {
            this.prodClass = this.$route.params.prodClassCmp
        },
        mounted: function() {
            window.getApp.$emit('APP_DRAWER_TOGGLED');
            this.getTreeList()

        },

        methods: {
            getTreeList() {
                getPartnerInfo().then(response => {
                    console.log(response)
                    let length = response.data.length
                    for(let j = 0; j<length; j++){
                        this.folders.push(response.data[j])
                    }
                })
            },
            saveClick() {
                this.$refs.callback[0].callbackprod()

                // this.targetData = filterChangeData(this.prodData,this.sourceProdData)
                // this.targetData.option="save";
                // savaProdInfo(this.targetData);

            },
            handleClick(value) {
                this.partnerCode = value.partnerCode
                getPartnerData(this.partnerCode).then(response => {
                    this.prodData = response.data
                    this.sourceProdData = this.copy(this.prodData,this.sourceProdData)
                });
            },
            //对象浅复制
            copy(obj1,obj2) {
                var obj = obj2||{};
                for(let name in obj1){
                    if(typeof obj1[name] === "object"){
                        obj[name]= (obj1[name].constructor===Array)?[]:{};
                        this.copy(obj1[name],obj[name]);
                    }else{
                        obj[name]=obj1[name];
                    }
                }
                return obj;
            },
            initStage(value){
                this.listValue = value
            },
            onSubmit() {
                this.$message('submit!')
            },
            onCancel() {
                this.$message({
                    message: 'cancel!',
                    type: 'warning'
                })
            },
            getNewProdData(val) {
                console.log(val)
                this.prodData.partner.partnerCode = val.eventForm.partnerCode
                this.prodData.partner.partnerName = val.eventForm.partnerName
                this.prodData.partner.clientNo = val.eventForm.clientNo
                this.prodData.partner.ccy = val.eventForm.ccy

            }
        }
    }
</script>

<style scoped>
  .top {
    padding-top: 8px;
  }
  .depositTree {
    height: calc(90vh - 48px);
  }
</style>