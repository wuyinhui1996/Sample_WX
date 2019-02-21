Page({
  data: {
     //statusBarHeight: app.globalData.statusBarHeight,
    contactList: [{
      "name": "报告1",
      "phone": "心肺运动实验报告总结...",
       "time": "2018-12-28"
                }, 
    {
        "name": "报告2",
      "phone": "心肺运动实验报告总结...",
      "time": "2018-11-20"
    }, {
        "name": "报告3",
      "phone": "心肺运动实验报告总结...",
      "time": "2018-10-23"
    }, {
        "name": "报告4",
      "phone": "心肺运动实验报告总结...",
      "time": "2018-09-25"
    }, {
        "name": "报告5",
      "phone": "心肺运动实验报告总结...",
      "time": "2018-08-20"
    }, {
        "name": "报告6",
      "phone": "心肺运动实验报告总结...",
      "time": "2018-07-27"
    }, {
        "name": "报告7",
      "phone": "心肺运动实验报告总结...",
      "time": "2018-06-28"
    }, {
        "name": "报告8",
      "phone": "心肺运动实验报告总结...",
      "time": "2018-05-19"
    }, {
        "name": "报告9",
      "phone": "心肺运动实验报告总结...",
      "time": "2018-04-21"
    },
      {
        "name": "报告10",
        "phone": "心肺运动实验报告总结...",
        "time": "2018-03-17"
      },
      {
        "name": "报告11",
        "phone": "心肺运动实验报告总结...",
        "time": "2018-02-21"
      },
      {
        "name": "报告12",
        "phone": "心肺运动实验报告总结...",
        "time": "2018-01-28"
      },
      {
        "name": "报告13",
        "phone": "心肺运动实验报告总结...",
        "time": "2017-12-21"
      },
      {
        "name": "报告14",
        "phone": "心肺运动实验报告总结...",
        "time": "2017-11-29"
      },
      {
        "name": "报告15",
        "phone": "心肺运动实验报告总结...",
        "time": "2017-10-25"
      },
      {
        "name": "报告16",
        "phone": "心肺运动实验报告总结...",
        "time": "2017-09-28"
      },
      
    ],

    height: '',
    //默认值  默认显示左上角
    navbarData: {
      showCapsule: 1
    },

    // 组件所需的参数
    nvabarData: {
      showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
      title: '我的主页', //导航栏 中间的标题
    },
   
  },
  onPullDownRefresh:function(){
    wx.showNavigationBarLoading()  //在标题中显示加载
    //模拟加载
    setTimeout(function(){
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    },1500)
  },

  

  properties: {
    navbarData: {   //navbarData   由父页面传递的数据，变量名字自命名
      type: Object,
      value: {},
      observer: function (newVal, oldVal) { }
    }
  },

  attached: function () {
    // 获取是否是通过分享进入的小程序
    this.setData({
      share: app.globalData.share
    })
    // 定义导航栏的高度   方便对齐
    this.setData({
      height: app.globalData.height
    })
  },
  // methods: {
  //   // 返回上一页面
  //   _navback() {
  //     wx.navigateBack()
  //   },
    // //返回到首页
    // _backhome() {
    //   wx.switchTab({
    //     url: '/pages/list/list',
    //   })
    // }
  // },
 

  onShareAppMessage: function () {

  },
  bindViewTab:function(){
    wx.navigateTo({    //保留当前页面，跳转到应用内的某个页面（最多打开5个页面，之后按钮就没有响应的）
      url: "/pages/details/details"
    })
  }

})  