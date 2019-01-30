module.exports = {
  get(apiUrl, yes, error) {
    wx.request({
      url: apiUrl,
      header: { 'Content-Type': 'json' },
      success: yes,
      fail: error
    })
  },
  post(apiUrl, params, yes, error) {
    wx.request({
      url: apiUrl,
      data: params,
      header: { 'Content-Type': 'json' },
      success: yes,
      fail: error
    })
  }
}