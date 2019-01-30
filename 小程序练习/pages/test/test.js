Page({
  onLoad:function(){
    // wx.showToast({  //显示Toast
    //   title: '已发送',
    //   icon:'success',
    //   duration:1500
    // })
    wx.request({  
      url: 'http://health.ia.ac.cn:5007/checklistBicycleData/getChecklistBicycleDataByAt?listId=13985',  
  data:{},  
  method:'POST',  
  header: {  
    'content-type': 'application/json'  
  },  
  success: function (res) {  
    console.log(res.data)  
  }  
})  


    //wx.hideToast()  //隐藏Toast
  }
})