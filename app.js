//app.js
// import * as tools from 'tools';
var tools = require("tools");

App({
  onLaunch: function () {
    // 为js自有类新增方法
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
    Date.prototype.fomat=function(fmt) {           
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
    /**
     * 对Array的扩展,在对象数组中查找元素
     * 不支持keyword 为对象/数组
     * @param {String} keywordPosition 关键词在对象中的位置,用'.'分隔. 如"sessionInfo.openid"
     * @param keyword 关键字
     * @return {Number} 查找到的第一个元素所在位置,如未找到则返回-1
     */
    Array.prototype.objectArraySearch = function (keywordPosition, keyword) {
      var position = keywordPosition.split(".");
      var index = -1;
      for(var i = 0; i < this.length; i++){
        var currentKey = this[i][position[0]];
        for(var j = 1; j < position.length; j++){
          currentKey = currentKey[position[j]];
        }
        if(currentKey == keyword){
          index = i;
          break;
        }
      }
      return index;
    };
    /**
     * 对Array的扩展,在聊天数组中新增拉取到的聊天记录
     * @param {Array} newChats 新拉取到的聊天记录
     * @return {Array} 链接后的聊天数据
     */
    Array.prototype.concatChats = function (newChats) {
      var index = -1;
      for(var i = 0; i < newChats.length; i++){
        index = this.objectArraySearch("sessionInfo.openid", newChats[i].sessionInfo.openid);
        if(index == -1){
          this.push(newChats[i]);
        }
        else {
          this[index].messages = this[index].messages.concat(newChats[i].messages);
        }
      }
    }


    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);

    // 获取用户信息和聊天记录
    var that = this;
    that.getUserInfo(function (res, code) {
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
          that.getChats();
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
  getChats: function () {
    wx.getStorage({
      key: "chatsData",
      success: function (res) { // 本地保存有数据
        var lastFetch = res.data.lastFetch;
        var chats = res.data.chats;
        getApp().globalData.chatsData["chats"] = chats;
        getApp().globalData.chatsData["lastFetch"] = new Date();

        wx.request({
          url: getApp().globalData.serverAddr + "/Message/getChats?timeFrom=" + lastFetch,
          success: function (res) {
            var newChats = res.data.chats;
            var chatsData = getApp().globalData.chatsData;
            chatsData.chats.concatChats(newChats);
            wx.setStorage({
              key: "chatsData",
              data: {
                lastFetch: chatsData.lastFetch.fomat("yyyy-MM-dd HH:mm:ss"),
                chats: chatsData.chats
              }
            });
            console.log(getApp().globalData.chatsData);
          },
          fail: function () {
            wx.showToast({
              title: '拉取聊天消息失败',
              duration: 2000
            })
          }
        })
      },
      fail: function () {  // 本地未保存有数据
        wx.request({
          url: getApp().globalData.serverAddr + "/Message/getChats?timeFrom=",
          success: function (res) {
            var chats = res.data.chats;
            var chatsData = getApp().globalData.chatsData;
            chatsData.lastFetch = new Date();
            chatsData.chats = chats;
            console.log(getApp().globalData);
            wx.setStorage({
              key: "chatsData",
              data: {
                lastFetch: chatsData.lastFetch.fomat("yyyy-MM-dd HH:mm:ss"),
                chats: chats
              }
            })
          },
          fail: function () {
            wx.showToast({
              title: '拉取聊天消息失败',
              duration: 2000
            })
          }
        })
      }
    })
  },
  globalData:{
    serverAddr: "https://weapp.hflee.cn/kaca-mock",
    userInfo: null, 
    chatsData: {}
  }
})

/**
  本地储存数据
  
  `chatsData` 聊天数据
    chatsData: {
      lastFetch: "2017-01-01 10:00:00", // 上次抓取时间
      chats: [
        {
          "sessionInfo": {         // 聊天会话信息
            "openid": "B",           // 发送者微信id
            "nickName": "",          // 发送者微信昵称
            "avatarUrl": "",            // 发送者头像url
            "readed": true           // 是否已读 true/false
          },
          "messages": [            // 消息数组,包含发送和收到的消息. 按照时间顺序由远及进
            {
              "from": "A",           // 该条消息发送方, 这是一条当前用户向"B"发送的消息
              "to": "B",             // 该条消息接收方
              "time": "2017-01-01 22:30:12",
                                   // 该消息发送时间 yyyy-MM-dd HH:mm:ss
              "type": "text",        // 消息类型,暂定text/image,有可能扩展
              "content": "hello!"    // 消息内容
                                   //     text  文字
                                   //     image  图片url
            },
            {
              "from": "B",           // 该条消息发送方, 这是一条"B"向当前用户发送的消息
              "to": "A",             // 该条消息接收方
              "time": "2017-01-01 22:33:12",
                                   // 该消息发送时间 yyyy-mm-dd HH:mm:ss
              "type": "image",       // 消息类型,暂定text/image,有可能扩展
              "content": "http://kaca-1252910777.cosgz.myqcloud.com/chatImages/i2adSfUvrDSieD.jpg"  
                                   // 消息内容
                                   //     text  文字
                                   //     image  图片url
            }
          ]
        }
      ]
    }
 */