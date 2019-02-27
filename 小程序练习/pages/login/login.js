Page({
  data: {
    indicatorDots: false,

    autoplay: false,

    interval: 5000,

    duration: 1000,

    proList: null,

    userName: '',

    account: '',



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

    
   
    canIUse: wx.canIUse('button.open-type.getUserInfo'), 
    //statusBarHeight: app.globalData.statusBarHeight,
  },
  onLoad() {
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success(res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })
  },
  bindGetUserInfo(e) {
    var userName = this.data.userName
  

    var account = this.data.account;

    // mobile

    if (userName == "" || account == "") {

      wx.showModal({

        title: '提示',

        content: '请输入完整信息！',

        success: function (res) {

          if (res.confirm) {

            console.log('用户点击确定')

          }

        }

      })

    } else {

      console.log(this.data.userName)
      console.log(this.data.account);

      
        wx.reLaunch({     //跳转至指定页面并关闭其他打开的所有页面（这个最好用在返回至首页的的时候）

          url: '/pages/list/list'

        })
    

      // detail

    }
    console.log(e.detail.userInfo)
    // this.setData({
    //   //更新页面input框显示
    //   userName: ''
    // })

  },
  



  // 判定输入为非空字符

  formSubmit: function (e) {

    var userName = e.detail.value.userName;

    var account = e.detail.value.account;

    // mobile

    if (userName == "" || account == "") {

      wx.showModal({

        title: '提示',

        content: '请输入完整信息！',

        success: function (res) {

          if (res.confirm) {

            console.log('用户点击确定')

          }

        }

      })

    } else {

      console.log(e.detail.value)

      // detail

    }

  },




  // 卡号部分

  inputAccountNum: function (e) {

    let accountNumber = e.detail.value

    if (accountNumber.length === 5) {

      let checkedNum = this.checkAccountNum(accountNumber)

    }

  },

  checkAccountNum: function (accountNumber) {

    let str = /^1\d{10}$/

    if (str.test(accountNumber)) {

      return true

    } else {

      wx.showToast({

        title: '就诊卡号不正确',

        image: '/images/fail.png'

      })

      return false

    }

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




})