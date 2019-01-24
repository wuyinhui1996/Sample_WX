const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


  function tap_start (e) {
    this.data.newmark = e.touches[0].pageX;
if (this.data.staus == 1) {
  // staus = 1指默认状态
  this.data.startmark = e.touches[0].pageX;
} else {
  // staus = 2指屏幕滑动到右边的状态
  this.data.startmark = e.touches[0].pageX;
}

  }

module.exports = {
  formatTime: formatTime,
  tap_start: tap_start
}
