/*
 * 深拷贝
 */
export function dpCopy(dest, src) {
  for(var item in src){
    if(typeof item == "object"){
      dpCopy(dest[item], src[item]);
    }
    else{
      dest[item] = src[item];
    }
  }
}

/**
 * websocket 工具
 * @param {object} options 配置选项
 *                         {
 *                           url: "", 
 *                           onMessage: function(){},  // 收到消息时的回调函数
 *                           onFail: function(){}      // 重连10次仍失败时的回调函数
 *                         }
 */
export function Socket(options) {
  this.url = options.url;
  this.onMessage = options.onMessage;
  this.onFail = options.onFail;
  this.wxSocketConnected = false;
  this.failCount = 0;
  if(this.url && this.onMessage && this.onFail){
    console.error("Socket 初始化函数调用不正确!");
  }
  if(typeof this.url != 'string' || typeof this.onMessage != 'function' || typeof this.onFail != 'function'){
		console.error("Socket 初始化函数调用不正确!");
  }
  wx.onSocketMessage(this.onMessage);
}
Socket.prototype = {
	constructor: Socket,
	/**
   * 连接websocket
	 */
	connect: function () {
		var that = this;
		wx.connectSocket({
			url: this.url,
			success: function () {
				that.wxSocketConnected = true;
			}
		})
	},
	/**
   * 发送消息
	 * @param {object} msg
	 */
  send: function (msg) {
    if(this.wxSocket == null){
    }
	}
}