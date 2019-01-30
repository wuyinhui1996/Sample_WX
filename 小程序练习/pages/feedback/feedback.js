
Page({

  /**
   * 页面的初始数据
   */
  data: {

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


    list_remind: '加载中',
    status: false,  //是否显示列表
    itemopen: false,
    feednum: 0, //反馈的次数
    hasFeed: false,
    title: '',
    content: '',
    info: '',
    showTopTips: false,
    TopTips: '',



    classifyList: [
      { index: 0, name: '功能异常', active: true },
      { index: 1, name: '体验问题', active: false },
      { index: 2, name: '新的建议', active: false },
      { index: 3, name: '其它', active: false }
    ],
    index: 0,
    feed: ""

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
  methods: {
    // 返回上一页面
    _navback() {
      wx.navigateBack()
    },
    // //返回到首页
    // _backhome() {
    //   wx.switchTab({
    //     url: '/pages/list/list',
    //   })
    // }
  },

  question: function () {
    console.log("这是question");

  },

  feedback: function () {
    console.log("这是feedback");

  },

  about_us: function () {
    console.log("这是about_us");

  },





  
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 提交
   */
  tiJiao: function () {
    var that = this
    if (!that.data.feed) {
      wx.showToast({
        title: '请输入反馈内容',
      })
      return
    }
    var that = this
    wx.showLoading({
      title: '加载中……',
      mask: true
    })
    wx.request({
      url: getApp().appData.host + "Suggest", //仅为示例，并非真实的接口地址
      data: {
        "intro": "[小程序]" + that.data.feed,
        "mod": that.data.index + 3,
        "token": getApp().appData.userInfo.token
      },
      header: {
        'content-type': 'application/json', // 默认值
      },
      method: 'POST',
      success: function (res) {
        console.log("修改默认", res.data)
        //请求成功
        if (res.data.state == 1) {
          wx.hideLoading()
          setTimeout(function () {
            wx.showToast({
              title: '反馈成功',
            })
          }, 500)
          wx.navigateBack({
            delta: 1
          })
        } else {//请求失败      
          wx.hideLoading()
        }
      },
      fail: function (res) {
        wx.hideLoading()
      },
      complete: function () {
        wx.stopPullDownRefresh();
      }
    })
  },

  feedInput: function (e) {
    this.data.feed = e.detail.value
  },

  handleClassifyChange: function (e) {
    var index = e.currentTarget.dataset.index;
    var active = e.currentTarget.dataset.active;
    var classifyList = this.data.classifyList;
    if (!active) {
      classifyList.forEach(function (item, key) {
        if (index == key) {
          item.active = true
        }
        else {
          item.active = false;
        }
      })
      this.data.index = index
      console.log(index)
      this.setData({
        classifyList: classifyList
      })
    }
  }
});

