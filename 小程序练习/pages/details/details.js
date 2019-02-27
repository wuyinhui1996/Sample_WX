const app = getApp();
var util=require('../../utils/util.js');

const echarts = require('../../ec-canvas/echarts.js')

Page({
  data: {
    ec: {
      onInit: initChart,
    },
    
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
    scrollTop: 200,


  },

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },


  onLoad: function () {
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
      });

       var self = this;
      wx.request({
        url: "http://health.ia.ac.cn:5007/checklist/getChecklistByListId?listId=13985",
        method: "POST",
        data: {
          LIST_ID: '',
          INSTRUMENTS_ID: '',
          PATIENT_NAME: '',
          CHECK_DATE: '',
          INPATIENT_AREA: '',
          BIRTHDAY: '',
          AGE: '',
          INPATIENT_ID: '',
          PATIENT_SEX: '',
          START_TIME: '',
          HEIGHT: '',
          DURATION: '',
          WEIGHT: '',
          PROTOCOL: '',
          BMI: '',
          DIAGNOSIS: '',
          RS: '',
          HIE:'',
          ECGCV:'',
          ERRV:'',
          RESTING_PFT:'',
          OPE_DOCTOR:'',
          READ_DOCTOR:'',
          CHECK_DOCTOR:'',
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },

        success: function (res) {
          console.log(res.data);
          self.setData({
            LIST_ID: res.data.data.LIST_ID,
            INSTRUMENTS_ID: res.data.data.INSTRUMENTS_ID,
            PATIENT_NAME: res.data.data.PATIENT_NAME,
            CHECK_DATE: res.data.data.CHECK_DATE,
           
            INPATIENT_AREA: res.data.data.INPATIENT_AREA,
            BIRTHDAY: res.data.data.BIRTHDAY,
            AGE: res.data.data.AGE,
            INPATIENT_ID: res.data.data.INPATIENT_ID,
            PATIENT_SEX: res.data.data.PATIENT_SEX,
            START_TIME: res.data.data.START_TIME,
            HEIGHT: res.data.data.HEIGHT,
            DURATION: res.data.data.DURATION,
            WEIGHT: res.data.data.WEIGHT,
            PROTOCOL: res.data.data.PROTOCOL,
            BMI: res.data.data.BMI,
            DIAGNOSIS: res.data.data.DIAGNOSIS,
            RS: res.data.data.RS,
            HIE: res.data.data.HIE,
            ECGCV: res.data.data.ECGCV,
            ERRV: res.data.data.ERRV,
            RESTING_PFT: res.data.data.RESTING_PFT,
            OPE_DOCTOR: res.data.data.OPE_DOCTOR,
            READ_DOCTOR: res.data.data.READ_DOCTOR,
            CHECK_DOCTOR: res.data.data.CHECK_DOCTOR,

          })
        },
        fail: function (err) { }
      })
    }



    // var self = this;

    wx.request({
      url: "http://health.ia.ac.cn:5007/checklistParameters/getChecklistParametersByListId?listId=13985",
      method: "POST",
      data: {
       
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log(res.data);
    
        self.setData({
          item1: res.data.data.item1,
          item2: res.data.data.item2,
          item3: res.data.data.item3,
        })
        
      },
      fail: function (err) { }
    })
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
        // this.setData({
        //   translate: 'transform: translateX(' + this.data.windowWidth * 0.75 + 'px)'
        // })
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
   wx.request({
     url: "http://health.ia.ac.cn:5007/checklist/getChecklistByListId?listId=13985",
     method: "POST",
     data: {
       LIST_ID:'',
       INSTRUMENTS_ID:'',
       PATIENT_NAME:'',
       CHECK_DATE:'',
       INPATIENT_AREA:'',
       BIRTHDAY:'',
       AGE:'',
       INPATIENT_ID:'',
       PATIENT_SEX:'',
       START_TIME:'',
       HEIGHT:'',
       DURATION:'',
       WEIGHT:'',
       PROTOCOL:'',
       BMI:'',
       DIAGNOSIS:'',
       RS:'',
     },
     header: {
       "Content-Type": "application/x-www-form-urlencoded"
     },

     success: function (res) {
       console.log(res.data);
       self.setData({
        LIST_ID: res.data.data.LIST_ID,
        INSTRUMENTS_ID: res.data.data.INSTRUMENTS_ID,
        PATIENT_NAME: res.data.data.PATIENT_NAME,
        CHECK_DATE: res.data.data.CHECK_DATE,
        CHECK_DATE: res.data.data.CHECK_DATE,
        INPATIENT_AREA: res.data.data.INPATIENT_AREA,
        BIRTHDAY: res.data.data.BIRTHDAY,
        AGE: res.data.data.AGE,
        INPATIENT_ID: res.data.data.INPATIENT_ID,
        PATIENT_SEX: res.data.data.PATIENT_SEX,
        START_TIME: res.data.data.START_TIME,
        HEIGHT: res.data.data.HEIGHT,
        DURATION: res.data.data.DURATION,
        WEIGHT: res.data.data.WEIGHT,
        PROTOCOL: res.data.data.PROTOCOL,
        BMI: res.data.data.BMI,
        DIAGNOSIS: res.data.data.DIAGNOSIS,
        RS: res.data.data.RS
      
      })       
     },
     fail:function(err){}
   })
   
 },

  AT_Report: function () { 
    // this.setData({
    //   text: "这是AT"
    // })
    // console.log("这是AT Report");

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
    this.setData({
      text: "这是9 Panel"
    })
     console.log("这是9_Panel Report");

    // var self = this;
    // wx.request({
    //   url: "http://health.ia.ac.cn:5007/checklistBicycleData/getChecklistBicycleDataByListId?listId=13985",
    //   method: "POST",
    //   data: {
    //     text: ''
    //   },
    //   header: {
    //     "Content-Type": "application/x-www-form-urlencoded"
    //   },

    //   success: function (res) {
    //     console.log(res.data);
    //     self.setData({
    //       text: res.data.msg
    //       //text: res.data.at
    //     })
    //     //  wx.showToast({
    //     //    title: '成功！',
    //     //    icon: 'success',
    //     //    duration: 2000
    //     //  })

    //   },
    //   fail: function (err) { }
    // })
  },

  
  Ecg_Data: function () {
    this.setData({
      text: "这是Ecg Data"
    })
    console.log("这是Ecg_Data");

    // var self = this;
    // wx.request({
    //   url: "http://health.ia.ac.cn:5007/file/getFilesByListId?listId=13985",
    //   method: "POST",
    //   data: {
    //     text: ''
    //   },
    //   header: {
    //     "Content-Type": "application/x-www-form-urlencoded"
    //   },

    //   success: function (res) {
    //     console.log(res.data);
    //     self.setData({
    //       text: res.data.msgCode
    //       //text: res.data.at
    //     })
    //     //  wx.showToast({
    //     //    title: '成功！',
    //     //    icon: 'success',
    //     //    duration: 2000
    //     //  })

    //   },
    //   fail: function (err) { }
    // })
  },
  Table_Data: function () {
    // this.setData({
    //   text: "这是Table Data"
    // })
    // console.log("这是Table_Data");

    // var self = this;
    // wx.request({
    //   url: "http://health.ia.ac.cn:5007/file/getFilesByListId?listId=13985",
    //   method: "POST",
    //   data: {
    //     text: ''
    //   },
    //   header: {
    //     "Content-Type": "application/x-www-form-urlencoded"
    //   },

    //   success: function (res) {
    //     console.log(res.data);
    //     self.setData({
    //       text: res.data.msg
    //       //text: res.data.at
    //     })
    //     //  wx.showToast({
    //     //    title: '成功！',
    //     //    icon: 'success',
    //     //    duration: 2000
    //     //  })

    //   },
    //   fail: function (err) { }
    // })

  },

  




  onShareAppMessage: function () {

  },

  bindViewTab:function(){
    wx.switchTab({    //跳转到tabBar页面，并关闭其他所有tabBar页面
      url: "/pages/list/list"
    })
  }


})

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
  });
  canvas.setChart(chart);


  var option = {
    xAxis: [{
      'name': 'VO2\n(L/min)',
    }],
    yAxis: [{
      'name': 'VCO2(L/min)',
    }],

    series: [{
      symbolSize: 20,
      data: [
        [
          0.25,
          0.23
        ],
        [
          0.35,
          0.33
        ],
        [
          0.42,
          0.41
        ],
        [
          0.36,
          0.35
        ],
        [
          0.38,
          0.37
        ],
        [
          0.44,
          0.42
        ],
        [
          0.41,
          0.41
        ],
        [
          0.48,
          0.46
        ],
        [
          0.43,
          0.42
        ],
        [
          0.47,
          0.45
        ],
        [
          0.44,
          0.41
        ],
        [
          0.37,
          0.33
        ],
        [
          0.52,
          0.45
        ],
        [
          0.58,
          0.52
        ],
        [
          0.53,
          0.51
        ],
        [
          0.42,
          0.41
        ],
        [
          0.48,
          0.45
        ],
        [
          0.42,
          0.4
        ],
        [
          0.48,
          0.44
        ],
        [
          0.54,
          0.5
        ],
        [
          0.5,
          0.49
        ],
        [
          0.44,
          0.44
        ],
        [
          0.43,
          0.41
        ],
        [
          0.45,
          0.43
        ],
        [
          0.47,
          0.45
        ],
        [
          0.46,
          0.43
        ],
        [
          0.46,
          0.43
        ],
        [
          0.47,
          0.42
        ],
        [
          0.54,
          0.48
        ],
        [
          0.6,
          0.54
        ],
        [
          0.6,
          0.55
        ],
        [
          0.61,
          0.56
        ],
        [
          0.64,
          0.6
        ],
        [
          0.65,
          0.62
        ],
        [
          0.68,
          0.65
        ],
        [
          0.72,
          0.72
        ],
        [
          0.74,
          0.77
        ],
        [
          0.79,
          0.84
        ],
        [
          0.78,
          0.86
        ],
        [
          0.76,
          0.84
        ],
        [
          0.83,
          0.93
        ],
        [
          0.86,
          1.02
        ],
        [
          0.81,
          0.96
        ]
      ],
      type: 'scatter'
    }]
  };



  chart.setOption(option);
  return chart;
}

