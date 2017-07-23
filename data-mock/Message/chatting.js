/**

  chatting  聊天 WebSocket  服务器需自行从session中获取当前用户微信id作为消息由谁发出的标识符

    ps: WebSocket 接收发送均为纯文本

 */

var sendMsg = 

// 客户发送消息时小程序向服务器发送的数据如下

  // JSON START
  {
    "to": "",             // 消息接受者的openid
    "time": "2017-01-01 22:30:12",
                          // 该消息发送时间 yyyy-MM-dd HH:mm:ss
    "type": "text",       // 消息类型,暂定text/image,有可能扩展
    "content": "hello!"   // 消息内容
                          //     text  文字
                          //     image  图片url
  }
  // JSON END
 
 
var recvMsg = 

// 客户有新消息时服务器向小程序推送的数据如下

  // JSON START
  {
    "from": "B",          // 该条消息发送方openid, 这是一条当前用户向"B"发送的消息
    "time": "2017-01-01 22:30:12",
                          // 该消息发送时间 yyyy-MM-dd HH:mm:ss
    "type": "text",       // 消息类型,暂定text/image,有可能扩展
    "content": "hello!"   // 消息内容
                          //     text  文字
                          //     image  图片url

  }
  // JSON END