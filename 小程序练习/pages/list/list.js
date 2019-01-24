Page({
  data: {
     //statusBarHeight: app.globalData.statusBarHeight,
    contactList: [{
      "name": "Crab",
      "phone": "15566667777",
      "time": "2017-10-14"
    }, {
      "name": "Emily",
      "phone": "15566668888",
      "time": "2017-10-13"
    }, {
      "name": "Rachel",
      "phone": "15566669999",
      "time": "2017-10-10"
    }, {
      "name": "Crab2",
      "phone": "15566667777",
      "time": "2017-10-14"
    }, {
      "name": "Emily2",
      "phone": "15566668888",
      "time": "2017-10-13"
    }, {
      "name": "Rachel2",
      "phone": "15566669999",
      "time": "2017-10-10"
    }, {
      "name": "Crab3",
      "phone": "15566667777",
      "time": "2017-10-14"
    }, {
      "name": "Emily3",
      "phone": "15566668888",
      "time": "2017-10-13"
    }, {
      "name": "Rachel3",
      "phone": "15566669999",
      "time": "2017-10-10"
    }],

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
 

})  