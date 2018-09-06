<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>结算信息</v-toolbar-title>
      <v-divider
              class="mx-2"
              inset
              vertical
      ></v-divider>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px">
        <v-btn slot="activator" color="primary" dark class="mb-2">新增</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.settleAcctClass" label="结算账户类型"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.settleBaseAcctNo" label="账号"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.prodType" label="产品类型"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.ccy" label="币种"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.acctSeqNo" label="账户序列号"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.tranType" label="交易类型"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.settleAcctName" label="账户中文名称"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="close">关闭</v-btn>
            <v-btn color="blue darken-1" flat @click.native="save">保存</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-data-table
            :headers="headers"
            :items="desserts"
            hide-actions
            class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.settleAcctClass }}</td>
        <td class="text-xs-right">{{ props.item.settleBaseAcctNo }}</td>
        <td class="text-xs-right">{{ props.item.prodType }}</td>
        <td class="text-xs-right">{{ props.item.ccy }}</td>
        <td class="text-xs-right">{{ props.item.acctSeqNo }}</td>
        <td class="text-xs-right">{{ props.item.tranType }}</td>
        <td class="text-xs-right">{{ props.item.settleAcctName }}</td>
        <td class="justify-center layout px-0">
          <v-icon
                  small
                  class="mr-2"
                  @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
                  small
                  @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
      <template slot="no-data">
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
    export default {
        data: () => ({
            dialog: false,
            headers: [
                {
                    text: '结算账户类型',
                    align: 'left',
                    sortable: false,
                    value: 'settleAcctClass'
                },
                { text: '账号', value: 'settleBaseAcctNo' },
                { text: '产品类型', value: 'prodType' },
                { text: '币种', value: 'ccy' },
                { text: '账户序列号', value: 'acctSeqNo' },
                { text: '交易类型', value: 'tranType' },
                { text: '账户中文名称', value: 'settleAcctName' },
                { text: '操作', value: 'name', sortable: false }
            ],
            desserts: [],
            editedIndex: -1,
            editedItem: {
                settleAcctClass: '',
                settleBaseAcctNo: '',
                prodType: '',
                ccy: '',
                acctSeqNo: '',
                tranType: '',
                settleAcctName: ''
            },
            defaultItem: {
                settleAcctClass: 0,
                settleBaseAcctNo: 0,
                prodType: 0,
                ccy: 0,
                acctSeqNo: 0,
                tranType: 0,
                settleAcctName: 0
            }
        }),
        computed: {
            formTitle () {
                return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
            }
        },
        watch: {
            dialog (val) {
                val || this.close()
            }
        },
        created () {
            this.initialize()
        },
        methods: {
            initialize () {
                this.desserts = [
                    {
                        settleAcctClass: '发放结算户',
                        settleBaseAcctNo: 0,
                        prodType: 0,
                        ccy: 0,
                        acctSeqNo: 0,
                        tranType: 0,
                        settleAcctName: 0
                    },
                    {
                        settleAcctClass: '回收结算户',
                        settleBaseAcctNo: 0,
                        prodType: 0,
                        ccy: 0,
                        acctSeqNo: 0,
                        tranType: 0,
                        settleAcctName: 0
                    },
                    {
                        settleAcctClass: '垫款内部户',
                        settleBaseAcctNo: 0,
                        prodType: 0,
                        ccy: 0,
                        acctSeqNo: 0,
                        tranType: 0,
                        settleAcctName: 0
                    }
                ]
            },
            editItem (item) {
                this.editedIndex = this.desserts.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },
            deleteItem (item) {
                const index = this.desserts.indexOf(item)
                confirm('你确定要删除这一条数据吗?') && this.desserts.splice(index, 1)
            },
            close () {
                this.dialog = false
                setTimeout(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                }, 300)
            },
            save () {
                if (this.editedIndex > -1) {
                    Object.assign(this.desserts[this.editedIndex], this.editedItem)
                } else {
                    this.desserts.push(this.editedItem)
                }
                this.close()
            }
        }
    }
</script>