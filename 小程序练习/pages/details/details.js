const app = getApp();
var util=require('../../utils/util.js');


Page({
  data: {
    // statusBarHeight: app.globalData.statusBarHeight,

    // motto: 'Hello World',
    text:'',
 


 
    userInfo: {},
   
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo'),


    open: false,
    mark: 0,
    newmark: 0,
    startmark: 0,
    endmark: 0,
    windowWidth: wx.getSystemInfoSync().windowWidth,
    staus: 1,
    translate: '',


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


    toView: 'red',
    scrollTop: 200
  

  },
  // bindScrollOver: function () {
  //   clearTimeout(this.timeoutId);
  //   this.timeoutId = setTimeout(function () {
  //     // 滚动结束时的事件
  //     delete this.timeoutId;
  //   }.bind(this), 500);
  // },
 

  
    
  
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {


    // const http = require('../../utils/http.js')//引入http.js文件
    // var params = { start: 1, count: 4 }; //参数
    // http.post("http://health.ia.ac.cn:5007/checklistBicycleData/getChecklistBicycleDataByAt?listId=13985", { start: 1, count: 4 }, function (res) {
    //   console.log("返回结果=" + JSON.stringify(res.data));
    // }, function (e) {
    //   console.log("返回error结果=" + JSON.stringify(e));
    // });
    



    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

   
    
  },
  // getUserInfo: function (e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // },


  
    properties: {
      navbarData: {   //navbarData   由父页面传递的数据，变量名字自命名
        type: Object,
        value: { },
        observer:function(newVal, oldVal) {}
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


  tap_ch: function (e) {
    if (this.data.open) {
      this.setData({
        translate: 'transform: translateX(0px)'
      })
      this.data.open = false;
    } else {
      this.setData({
        translate: 'transform: translateX(' + this.data.windowWidth * 0.75 + 'px)'
      })
      this.data.open = true;
    }
  },
  tap_start: function (e) {
    this.data.newmark = e.touches[0].pageX;
    if (this.data.staus == 1) {
      // staus = 1指默认状态
      this.data.startmark = e.touches[0].pageX;
    } else {
      // staus = 2指屏幕滑动到右边的状态
      this.data.startmark = e.touches[0].pageX;
    }

  },
  tap_drag: function (e) {
    /*
     * 手指从左向右移动
     * @newmark是指移动的最新点的x轴坐标 ， @mark是指原点x轴坐标
     */
    this.data.newmark = e.touches[0].pageX;
    if (this.data.mark < this.data.newmark) {
      if (this.data.staus == 1) {
        if (this.data.windowWidth * 0.75 > Math.abs(this.data.newmark - this.data.startmark)) {
          this.setData({
            translate: 'transform: translateX(' + (this.data.newmark - this.data.startmark) + 'px)'
          })
        }
      }

    }
    /*
     * 手指从右向左移动
     * @newmark是指移动的最新点的x轴坐标 ， @mark是指原点x轴坐标
     */
    if (this.data.mark > this.data.newmark) {
      if (this.data.staus == 1 && (this.data.newmark - this.data.startmark) > 0) {
        this.setData({
          translate: 'transform: translateX(' + (this.data.newmark - this.data.startmark) + 'px)'
        })
      } else if (this.data.staus == 2 && this.data.startmark - this.data.newmark < this.data.windowWidth * 0.75) {
        this.setData({
          translate: 'transform: translateX(' + (this.data.newmark + this.data.windowWidth * 0.75 - this.data.startmark) + 'px)'
        })
      }

    }

    this.data.mark = this.data.newmark;

  },
  tap_end: function (e) {
    if (this.data.staus == 1 && this.data.startmark < this.data.newmark) {
      if (Math.abs(this.data.newmark - this.data.startmark) < (this.data.windowWidth * 0.2)) {
        this.setData({
          translate: 'transform: translateX(0px)'
        })
        this.data.staus = 1;
      } else {
        this.setData({
          translate: 'transform: translateX(' + this.data.windowWidth * 0.75 + 'px)'
        })
        this.data.staus = 2;
      }
    } else {
      if (Math.abs(this.data.newmark - this.data.startmark) < (this.data.windowWidth * 0.2)) {
        this.setData({
          translate: 'transform: translateX(' + this.data.windowWidth * 0.75 + 'px)'
        })
        this.data.staus = 2;
      } else {
        this.setData({
          translate: 'transform: translateX(0px)'
        })
        this.data.staus = 1;
      }
    }

    this.data.mark = 0;
    this.data.newmark = 0;
  },
 CEPT_Report:function(){
    var self = this;
    
  //  this.setData({
  //   //  motto:"你好世界",
  //   text:"这是CEPT"
     
  //  }) 
  //   //console.log("这是CEPT Report");


   wx.request({
     url: "http://health.ia.ac.cn:5007/checklist/getChecklistByListId?listId=13985",
     method: "POST",
     data: {
       text:'',
       result:'',
       msg:'',
       data:'',
       length:'',
       msgCode:''

     },
     header: {
       "Content-Type": "application/x-www-form-urlencoded"
     },

     success: function (res) {
       
       console.log(res.data);

     
     
      self.setData({
       
        text: res.data.result,
        result:res.data.result,
        msg:res.data.msg,
        data: res.data.data.RESTING_PFT,
        length:res.data.length,
        msgCode:res.data.msgCode

        
        //text: res.data.at
      })




      //  wx.showToast({
      //    title: '成功！',
      //    icon: 'success',
      //    duration: 2000
      //  })
       
     },
     fail:function(err){}
    


   })
   
 },


     
    
     

 
  



 
  // CEPT: function (options) {

  //   console.log("判断是否滑动" + util.tap_start(s));
  //   // var that =  this;
  //   // that.tap_start();

  // },
  // queryCartList: function () {
  //   console.log('ok')
  // }

  AT_Report: function () {
    // this.setData({
    //   text:"这是AT"
    // })
    //  console.log("这是AT Report");

    
    var self = this;
    wx.request({
      url: "http://health.ia.ac.cn:5007/checklistBicycleData/getChecklistBicycleDataByAt?listId=13985",
      method: "POST",
      data: {
        text: ''
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },

      success: function (res) {
        console.log(res.data);
        self.setData({
          text: res.data.msgCode
          //text: res.data.at
        })
        //  wx.showToast({
        //    title: '成功！',
        //    icon: 'success',
        //    duration: 2000
        //  })

      },
      fail: function (err) { }
    })
  },
  Panel_Report: function () {
    // this.setData({
    //   text: "这是9 Panel"
    // })
    //  console.log("这是9_Panel Report");

    var self = this;
    wx.request({
      url: "http://health.ia.ac.cn:5007/checklistBicycleData/getChecklistBicycleDataByListId?listId=13985",
      method: "POST",
      data: {
        text: ''
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },

      success: function (res) {
        console.log(res.data);
        self.setData({
          text: res.data.msg
          //text: res.data.at
        })
        //  wx.showToast({
        //    title: '成功！',
        //    icon: 'success',
        //    duration: 2000
        //  })

      },
      fail: function (err) { }
    })
  },

  
  Ecg_Data: function () {
    // this.setData({
    //   text: "这是Ecg Data"
    // })
    // console.log("这是Ecg_Data");

    var self = this;
    wx.request({
      url: "http://health.ia.ac.cn:5007/file/getFilesByListId?listId=13985",
      method: "POST",
      data: {
        text: ''
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },

      success: function (res) {
        console.log(res.data);
        self.setData({
          text: res.data.msgCode
          //text: res.data.at
        })
        //  wx.showToast({
        //    title: '成功！',
        //    icon: 'success',
        //    duration: 2000
        //  })

      },
      fail: function (err) { }
    })
  },
  Table_Data: function () {
    // this.setData({
    //   text: "这是Table Data"
    // })
    // console.log("这是Table_Data");

    var self = this;
    wx.request({
      url: "http://health.ia.ac.cn:5007/file/getFilesByListId?listId=13985",
      method: "POST",
      data: {
        text: ''
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },

      success: function (res) {
        console.log(res.data);
        self.setData({
          text: res.data.msg
          //text: res.data.at
        })
        //  wx.showToast({
        //    title: '成功！',
        //    icon: 'success',
        //    duration: 2000
        //  })

      },
      fail: function (err) { }
    })

  }





})