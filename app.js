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

    // 获取用户信息和聊天记录
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
          wx.request({
            url: getApp().globalData.serverAddr + "/Message/getChat"
          })
        }
      })
    });

    // 为Date类新增方法
    /**       
     * 对Date的扩展，将 Date 转化为指定格式的String       
     * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q) 可以用 1-2 个占位符       
     * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)       
     * eg:       
     * (new Date()).pattern("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423       
     * (new Date()).pattern("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04       
     * (new Date()).pattern("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04       
     * (new Date()).pattern("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04       
     * (new Date()).pattern("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18       
     */          
    Date.prototype.Fomat=function(fmt) {           
        var o = {
          "M+" : this.getMonth()+1, //月份
          "d+" : this.getDate(), //日
          "h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时
          "H+" : this.getHours(), //小时
          "m+" : this.getMinutes(), //分
          "s+" : this.getSeconds(), //秒
          "q+" : Math.floor((this.getMonth()+3)/3), //季度
          "S" : this.getMilliseconds() //毫秒
        };
        var week = {
          "0" : "日",
          "1" : "一",
          "2" : "二",
          "3" : "三",
          "4" : "四",
          "5" : "五",
          "6" : "六"          
        };
        if(/(y+)/.test(fmt)){
          fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
        }           
        if(/(E+)/.test(fmt)){
          fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "星期" : "周") : "")+week[this.getDay()+""]);
        }
        for(var k in o){
          if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
          }
        }
        return fmt;
    }         
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
    userInfo: null, 
    chats: {}
  }
})