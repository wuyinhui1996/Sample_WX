Page({
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
    console.log(e.detail.userInfo)
  },

  formSubmit:function(e){
    wx.request({
      url: 'app.globalData.url.login',
      data: {
        username:e.detail.username,
        ID:e.detail.no
      },
      header:{
        'content-type':'application/json'
      },
      success:function(res){
        console.log(res.data);
        if(res.statusCode == 200){
          //访问正常
          if(res.data.error == true){
            wx.showToast({
              title:res.data.msg,
              icon:'none',
              duration:2000,
            })
          }else{
            //缓存
            wx.setStorage({
              key: 'student',
              data: 'res.data.student',
            });
            wx.showToast({
              title: '登录成功',
              icon:'success',
              duration:2000,
              success:function(){
                setTimeout(function(){
                  wx.switchTab({
                    url: '../list/list',
                  })
                },2000)
              }
            })
          }
        }
      }
    })
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