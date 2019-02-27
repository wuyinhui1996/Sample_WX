//import * as echarts from '../../ec-canvas/echarts';
const echarts=require('../../ec-canvas/echarts.js')

const app = getApp();

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
  });
  canvas.setChart(chart);


  var option = {
    xAxis: [{
      'name': 'VO2(L/min)',
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

Page({
  onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  data: {
    ec: {
      onInit: initChart,
    },


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

  onReady() {
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


  onShareAppMessage: function () {

  }
});


