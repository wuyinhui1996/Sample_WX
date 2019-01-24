Page({
  onLoad:function(){
    wx.showToast({  //显示Toast
      title: '已发送',
      icon:'success',
      duration:1500
    })

    //wx.hideToast()  //隐藏Toast
  }
})