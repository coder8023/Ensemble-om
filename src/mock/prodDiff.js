import Mock from 'mockjs';

const List = [];
const depositPordList = [];
const prodList = [];
const prodListTwo = [];
const prodTree = [];
const diffProd = [];

const count = 100;
const prodDiffData = [{
  prodType: '',
  items: [
    { divider: true, inset: true },
    {
      title: '产品名称'
    },
    { divider: true, inset: true },
    {
      title: '产品类别'
    },
    { divider: true, inset: true },
    {
      title: '产品结构'
    },
    { divider: true, inset: true },
    {
      title: '金额标志'
    },
    { divider: true, inset: true },
    {
      title: '虚实标志'
    },
    { divider: true, inset: true },
    {
      title: '余额类型'
    },
    { divider: true, inset: true },
    {
      title: '产品状态'
    },
    { divider: true, inset: true },
    {
      title: '账户计息标志'
    },
    { divider: true, inset: true },
    {
      title: '利润中心',
      diff: true
    },
    { divider: true, inset: true },
    {
      title: '生效日期'
    },
    { divider: true, inset: true },
    {
      title: '失效日期',
      diff: true
    }
  ]
},
{
  prodType: '111001',
  items: [
    { divider: true, inset: true },
    {
      title: '个人活期存款'
    },
    { divider: true, inset: true },
    {
      title: '个人存款'
    },
    { divider: true, inset: true },
    {
      title: '一层账户'
    },
    { divider: true, inset: true },
    {
      title: '不记录余额'
    },
    { divider: true, inset: true },
    {
      title: '虚账户'
    },
    { divider: true, inset: true },
    {
      title: '超余额汇余额'
    },
    { divider: true, inset: true },
    {
      title: '有效'
    },
    { divider: true, inset: true },
    {
      title: '主账户计息'
    },
    { divider: true, inset: true },
    {
      title: '神州信息',
      diff: true
    },
    { divider: true, inset: true },
    {
      title: '2018/01/23'
    },
    { divider: true, inset: true },
    {
      title: '2099/01/23',
      diff: true
    }
  ]
},
{
  prodType: '111002',
  items: [
    { divider: true, inset: true },
    {
      title: '个人活期存款-多币种(钞)'
    },
    { divider: true, inset: true },
    {
      title: '个人存款'
    },
    { divider: true, inset: true },
    {
      title: '一层账户'
    },
    { divider: true, inset: true },
    {
      title: '不记录余额'
    },
    { divider: true, inset: true },
    {
      title: '虚账户'
    },
    { divider: true, inset: true },
    {
      title: '超余额汇余额'
    },
    { divider: true, inset: true },
    {
      title: '有效'
    },
    { divider: true, inset: true },
    {
      title: '主账户计息'
    },
    { divider: true, inset: true },
    {
      title: '神州信息',
      diff: true
    },
    { divider: true, inset: true },
    {
      title: '2018/01/23'
    },
    { divider: true, inset: true },
    {
      title: '-',
      diff: true
    }
  ]
},
{
  prodType: '111003',
  items: [
    { divider: true, inset: true },
    {
      title: '个人活期存款-多币种(汇)'
    },
    { divider: true, inset: true },
    {
      title: '个人存款'
    },
    { divider: true, inset: true },
    {
      title: '一层账户'
    },
    { divider: true, inset: true },
    {
      title: '不记录余额'
    },
    { divider: true, inset: true },
    {
      title: '虚账户'
    },
    { divider: true, inset: true },
    {
      title: '超余额汇余额'
    },
    { divider: true, inset: true },
    {
      title: '有效'
    },
    { divider: true, inset: true },
    {
      title: '主账户计息'
    },
    { divider: true, inset: true },
    {
      title: '神州信息',
      diff: true
    },
    { divider: true, inset: true },
    {
      title: '2018/01/23'
    },
    { divider: true, inset: true },
    {
      title: '2099/01/23',
      diff: true
    }
  ]
},
{
  prodType: '111004',
  items: [
    { divider: true, inset: true },
    {
      title: '个人整存整取储蓄存款'
    },
    { divider: true, inset: true },
    {
      title: '个人存款'
    },
    { divider: true, inset: true },
    {
      title: '一层账户'
    },
    { divider: true, inset: true },
    {
      title: '不记录余额'
    },
    { divider: true, inset: true },
    {
      title: '虚账户'
    },
    { divider: true, inset: true },
    {
      title: '超余额汇余额'
    },
    { divider: true, inset: true },
    {
      title: '有效'
    },
    { divider: true, inset: true },
    {
      title: '主账户计息'
    },
    { divider: true, inset: true },
    {
      title: '-',
      diff: true
    },
    { divider: true, inset: true },
    {
      title: '2018/01/23'
    },
    { divider: true, inset: true },
    {
      title: '2099/01/23',
      diff: true
    }
  ]
},
];
const prodDiffTwo = [{
    prodType: '',
    items: [
        { divider: true, inset: true },
        {
            title: '产品名称'
        },
        { divider: true, inset: true },
        {
            title: '产品类别'
        },
        { divider: true, inset: true },
        {
            title: '产品结构',
            diff: true
        },
        { divider: true, inset: true },
        {
            title: '金额标志'
        },
        { divider: true, inset: true },
        {
            title: '虚实标志'
        },
        { divider: true, inset: true },
        {
            title: '余额类型'
        },
        { divider: true, inset: true },
        {
            title: '产品状态',
            diff: true
        },
        { divider: true, inset: true },
        {
            title: '账户计息标志'
        },
        { divider: true, inset: true },
        {
            title: '利润中心'
        },
        { divider: true, inset: true },
        {
            title: '生效日期'
        },
        { divider: true, inset: true },
        {
            title: '失效日期'
        }
    ]
},
    {
        prodType: 'RB10001修改前',
        items: [
            { divider: true, inset: true },
            {
                title: '个人活期存款产品'
            },
            { divider: true, inset: true },
            {
                title: '个人存款'
            },
            { divider: true, inset: true },
            {
                title: '一层账户',
                diff: true
            },
            { divider: true, inset: true },
            {
                title: '不记录余额'
            },
            { divider: true, inset: true },
            {
                title: '虚账户'
            },
            { divider: true, inset: true },
            {
                title: '超余额汇余额'
            },
            { divider: true, inset: true },
            {
                title: '有效',
                diff: true
            },
            { divider: true, inset: true },
            {
                title: '主账户计息'
            },
            { divider: true, inset: true },
            {
                title: '神州信息'
            },
            { divider: true, inset: true },
            {
                title: '2018/01/23'
            },
            { divider: true, inset: true },
            {
                title: '2099/01/23'
            }
        ]
    },
    {
        prodType: 'RB10001修改后',
        items: [
            { divider: true, inset: true },
            {
                title: '个人活期存款产品'
            },
            { divider: true, inset: true },
            {
                title: '个人存款'
            },
            { divider: true, inset: true },
            {
                title: '二层账户',
                diff: true
            },
            { divider: true, inset: true },
            {
                title: '不记录余额'
            },
            { divider: true, inset: true },
            {
                title: '虚账户'
            },
            { divider: true, inset: true },
            {
                title: '超余额汇余额'
            },
            { divider: true, inset: true },
            {
                title: '无效',
                diff: true
            },
            { divider: true, inset: true },
            {
                title: '主账户计息'
            },
            { divider: true, inset: true },
            {
                title: '神州信息'
            },
            { divider: true, inset: true },
            {
                title: '2018/01/23'
            },
            { divider: true, inset: true },
            {
                title: '2099/01/23'
            }
        ]
    },
];
const baseContent = '<p>我是测试数据我是测试数据</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>';
const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3';

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    timestamp: Number(Mock.Random.date('T')),
    author: '@first',
    reviewer: '@first',
    title: '@title(5, 10)',
    content_short: '我是测试数据',
    content: baseContent,
    forecast: '@float(0, 100, 2, 2)',
    importance: '@integer(1, 3)',
    'type|1': ['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft', 'deleted'],
    display_time: '@datetime',
    comment_disabled: true,
    pageviews: '@integer(300, 5000)',
    image_uri,
    platforms: ['a-platform']
  }));
}

for (let i = 0; i < count; i++) {
  depositPordList.push(Mock.mock({
    value: 'RB10@increment',
    label: '@value - 活期存款'
  }));
}
for (let i = 0; i < count; i++) {
  prodList.push(Mock.mock({
    value: 'RB10@increment',
    label: '活期存款',
    status: '启用',
    icon: 'call_to_action',
    iconClass: 'amber white--text',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
  }));
}
for (let i = 0; i < 1; i++) {
  prodListTwo.push(Mock.mock({
    value: 'RB10@increment',
    label: '',
    status: '启用',
    icon: 'call_to_action',
    iconClass: 'amber white--text'
  }));
}
export default {
  depositTwo: () => ({
    prodListTwo: [{
      value: 'RB1100',
      label: '个人活期存款',
      status: '启用',
      icon: 'call_to_action',
      iconClass: 'amber white--text'
    }, {
      value: 'RB1200',
      label: '单位活期存款',
      status: '启用',
      icon: 'call_to_action',
      iconClass: 'amber white--text'
    }, {
      value: 'RB2100',
      label: '个人定期存款',
      status: '启用',
      icon: 'call_to_action',
      iconClass: 'amber white--text'
    }, {
      value: 'RB2200',
      label: '单位定期存款',
      status: '启用',
      icon: 'call_to_action',
      iconClass: 'amber white--text'
    }, {
      value: 'RB3000',
      label: '大额存单',
      status: '启用',
      icon: 'call_to_action',
      iconClass: 'amber white--text'
    }, {
      value: 'RB4000',
      label: '理财产品',
      status: '启用',
      icon: 'call_to_action',
      iconClass: 'amber white--text'
    }, {
      value: 'RB5000',
      label: '特色产品',
      status: '启用',
      icon: 'call_to_action',
      iconClass: 'amber white--text'
    }]
  }),
  getDepositProd: () => ({
    depositProd: prodList
  }),
  getDiffList: () => ({
    prodDiffData: prodDiffData,
    prodDiffTwo: prodDiffTwo
  }),

  getDepositDtl: (data) => {
    const depositDtl = [];
    const prodCode = JSON.parse(data.body)['prodCode'] || '';
    const prodType = JSON.parse(data.body)['prodType'] || '';
    for (let i = 0; i < 30; i++) {
      depositDtl.push(Mock.mock({
        prodCode: prodCode + '@increment(1)',
        prodType: prodType + ' @prodCode',
        'status|1': ['启用', '停售'],
        icon: 'call_to_action',
        iconClass: 'amber white--text'
      }));
    }
    return depositDtl;
  },
  getDiffProd: (params) => {
    const prodTypes = JSON.parse(params.body).params
    const prodCompare = [];
    prodCompare.push(prodDiffData[0]);
    for (let i = 0; i < prodDiffData.length; i++) {
      for (let j = 0; j < prodTypes.length; j++) {
        if (prodDiffData[i].prodType === prodTypes[j]) {
          prodCompare.push(prodDiffData[i]);
          break;
        }
      }
    }
    return { 'prodCompare': prodCompare };
  },
  getProdList: () => ({
    prodList: [{
      value: 'RB100',
      label: 'RB100-个人活期产品',
      action: 'local_activity',
      children: depositPordList
    },
    {
      value: 'RB200',
      label: 'RB200-个人定期产品',
      action: 'restaurant',
      children: depositPordList
    },
    {
      value: 'RB300',
      label: 'RB300-单位定期产品',
      action: 'school',
      children: depositPordList
    },
    {
      value: 'RB400',
      label: 'RB400-单位活期产品',
      action: 'directions_run',
      children: depositPordList
    }
    ]
  })
};
