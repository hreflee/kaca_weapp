// Me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
			avatarUrl: "../../images/avatar-mock/3.jpg",
			background: "../../images/Discover-mock/2.jpg",
			nickName: "I N G",
			sign: "摄影是一种态度"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(getApp().globalData.userInfo);
    this.setData({
      "userInfo": getApp().globalData.userInfo
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  testFun: function () {
    console.log(this);
    this.data.userInfo.nickName = "123456"
	}
})