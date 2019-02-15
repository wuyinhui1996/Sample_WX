// pages/help/help.js
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



    "item1": [
      {
        "Measured_ML": "10.8",
        "Measured_L": "0.834",
        "Pred_ML": "32.3",
        "Pred_L": "2.487",
        "Pred_Percent": "34",
        "parameterName": "峰值摄氧量（Peak V.O2）"
      },
      {
        "Measured_ML": "7.8",
        "Measured_L": "0.602",
        "Pred_ML": "17.8",
        "Pred_L": "1.373",
        "Pred_Percent": "44",
        "parameterName": "无氧阈（AT）"
      }
    ],
        "item2": [
          {
            "id": "105",
            "parameterId": "3",
            "parameterName": "峰值负荷功率（Peak\nLoading,/W）",
            "measured": "78.5",
            "pred": "209",
            "predPercent": "38",
            "resting": null,
            "peak": null,
            "operationTime": null,
            "operationBy": null,
            "listId": "13985"
          },
          {
            "id": "106",
            "parameterId": "4",
            "parameterName": "峰值氧脉搏(Peak O2\npulse,mL/beat)",
            "measured": "5.92",
            "pred": "14",
            "predPercent": "42",
            "resting": null,
            "peak": null,
            "operationTime": null,
            "operationBy": null,
            "listId": "13985"
          },
          {
            "id": "107",
            "parameterId": "5",
            "parameterName": "峰值心排量（Peak\nCO,L/min）",
            "measured": "5.56",
            "pred": "17",
            "predPercent": "34",
            "resting": null,
            "peak": null,
            "operationTime": null,
            "operationBy": null,
            "listId": "13985"
          },
          {
            "id": "108",
            "parameterId": "6",
            "parameterName": "摄氧通气效率峰值平台\r\n（OUEP）",
            "measured": "30.25",
            "pred": "40",
            "predPercent": "75",
            "resting": null,
            "peak": null,
            "operationTime": null,
            "operationBy": null,
            "listId": "13985"
          },
          {
            "id": "109",
            "parameterId": "7",
            "parameterName": "二氧化碳排出通气效率最低\r\n值（lowest VE/VCO2）",
            "measured": "35.93",
            "pred": "26",
            "predPercent": "137",
            "resting": null,
            "peak": null,
            "operationTime": null,
            "operationBy": null,
            "listId": "13985"
          },
          {
            "id": "110",
            "parameterId": "8",
            "parameterName": "二氧化碳排出通气斜率\n（VE/VCO2 slope）",
            "measured": "37.54",
            "pred": "26",
            "predPercent": "145",
            "resting": null,
            "peak": null,
            "operationTime": null,
            "operationBy": null,
            "listId": "13985"
          }
        ],
        "item3": [
          {
            "id": "111",
            "parameterId": "9",
            "parameterName": "潮气量（VT,L）",
            "measured": null,
            "pred": null,
            "predPercent": null,
            "resting": "0.563",
            "peak": "1.390",
            "operationTime": null,
            "operationBy": null,
            "listId": "13985"
          },
          {
            "id": "112",
            "parameterId": "10",
            "parameterName": "分钟通气量\r\n（VE,L/min）",
            "measured": null,
            "pred": null,
            "predPercent": null,
            "resting": "10.67",
            "peak": "37.16",
            "operationTime": null,
            "operationBy": null,
            "listId": "13985"
          },
          {
            "id": "113",
            "parameterId": "11",
            "parameterName": "呼吸频率\n（f,min-1）",
            "measured": null,
            "pred": null,
            "predPercent": null,
            "resting": "19",
            "peak": "27",
            "operationTime": null,
            "operationBy": null,
            "listId": "13985"
          },
          {
            "id": "114",
            "parameterId": "12",
            "parameterName": "心率\n(HR,beat/min)",
            "measured": null,
            "pred": null,
            "predPercent": null,
            "resting": "82",
            "peak": "141",
            "operationTime": null,
            "operationBy": null,
            "listId": "13985"
          },
          {
            "id": "115",
            "parameterId": "13",
            "parameterName": "动脉收缩压\r\n（SBP,mmHg）",
            "measured": null,
            "pred": null,
            "predPercent": null,
            "resting": "98",
            "peak": "124",
            "operationTime": null,
            "operationBy": null,
            "listId": "13985"
          },
          {
            "id": "116",
            "parameterId": "14",
            "parameterName": "动脉舒张压\r\n（DBP,mmHg）",
            "measured": null,
            "pred": null,
            "predPercent": null,
            "resting": "68",
            "peak": "79",
            "operationTime": null,
            "operationBy": null,
            "listId": "13985"
          }
         
        ]



    

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

  // question: function () {
  //   console.log("这是question");

  // },

  // feedback: function () {
  //   console.log("这是feedback");

  // },

  // about_us: function () {
  //   console.log("这是about_us");

  // },





  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var self = this;

    //  this.setData({
    //   //  motto:"你好世界",
    //   text:"这是CEPT"

    //  }) 
    //   //console.log("这是CEPT Report");


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
           item1:res.data.item1,
           item2: res.data.item2,
          item3: res.data.item3,
         
          // LIST_ID: res.data.data.LIST_ID,
          // INSTRUMENTS_ID: res.data.data.INSTRUMENTS_ID,
          // PATIENT_NAME: res.data.data.PATIENT_NAME,
          // CHECK_DATE: res.data.data.CHECK_DATE,
          // CHECK_DATE: res.data.data.CHECK_DATE,
          // INPATIENT_AREA: res.data.data.INPATIENT_AREA,
          // BIRTHDAY: res.data.data.BIRTHDAY,
          // AGE: res.data.data.AGE,
          // INPATIENT_ID: res.data.data.INPATIENT_ID,
          // PATIENT_SEX: res.data.data.PATIENT_SEX,
          // START_TIME: res.data.data.START_TIME,
          // HEIGHT: res.data.data.HEIGHT,
          // DURATION: res.data.data.DURATION,
          // WEIGHT: res.data.data.WEIGHT,
          // PROTOCOL: res.data.data.PROTOCOL,
          // BMI: res.data.data.BMI,
          // DIAGNOSIS: res.data.data.DIAGNOSIS,
          // RS: res.data.data.RS

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

  

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },



  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})