// 创建一个应用程序对象
// 如果不显式调用，系统也会自动调用
// 也就是说：此文件可以留空
//app.js
import * as tools from 'tools';

App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);
    this.getUserInfo(function (res, code) {
      wx.request({
        url: getApp().globalData.serverAddr + "/getPersonalInfo",
        data: {
          "code": code,
          "encryptedData": res.encryptedData,
          "vi": res.vi
        },
        method: "POST",
        success: function (res) {
          tools.dpCopy(getApp().globalData.userInfo, res.data);
          console.log(getApp().globalData.userInfo, res.data);
        }
      })
    });

  },
  getUserInfo: function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo);
    }else{
      //调用登录接口
      wx.login({
        success: function (res) {
          var code = res.code;
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo;
              typeof cb == "function" && cb(res, code);
            }
          })
        },
        fail: function () {
          console.log("登录失败"); 
          console.log(agreements);
        }
      })
    }
  },
  globalData:{
    serverAddr: "https://weapp.hflee.cn/kaca-mock",
    userInfo: null
  }
})