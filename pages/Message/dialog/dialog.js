// dialog.js
var tools = require("../../../tools.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msgs: {
      avatarUrl:"../../../images/avatar-mock/2.jpg",
      type: "image",
      content: "https://weapp.hflee.cn/kaca-mock/bg.jpg ",
      direction: "receive",
      time: "2017-01-01 22:30:12"
    },
    dateTest: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.onSocketOpen(function (e) {
    //   console.log("open", e);
    // });
    // wx.onSocketClose(function (e) {
    //   console.log("close", e);
    // });
    // wx.connectSocket({
    //   url: "wss://weapp.hflee.cn/websocket-demo/websocket",
    //   data: "connect",
    // });
    tools.test();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
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
  
  }
})