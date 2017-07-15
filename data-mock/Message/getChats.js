/**

  getChats  获取聊天信息  POST  服务器需自行从session中获取当前用户微信id
    @param timeFrom  上次拉取消息的时间即需要返回该时间点后的所有消息. 若该项留空则返回当前用户所有消息
    @param 
    @return chats  聊天信息数组, 数组成员结构如示例, 假设当前用户的微信id为"A"

 */
var getChats = 

// JSON START
{
  chats:[
    {
      sessionInfo: {         // 聊天会话信息
        openid: "B",           // 发送者微信id
        nickName: "",          // 发送者微信昵称
        avatarUrl: "",            // 发送者头像url
        readed: true           // 是否已读 true/false
      },
      messages: [            // 消息数组,包含发送和收到的消息. 按照时间顺序由远及进
        {
          from: "A",           // 该条消息发送方, 这是一条当前用户向"B"发送的消息
          to: "B",             // 该条消息接收方
          time: "2017-01-01 22:30:12",
                               // 该消息发送时间 yyyy-mm-dd HH:mm:ss
          type: "text",        // 消息类型,暂定text/image,有可能扩展
          content: "hello!"    // 消息内容
                               //     text  文字
                               //     image  图片url
        },
        {
          from: "B",           // 该条消息发送方, 这是一条"B"向当前用户发送的消息
          to: "A",             // 该条消息接收方
          time: "2017-01-01 22:33:12",
                               // 该消息发送时间 yyyy-mm-dd HH:mm:ss
          type: "image",       // 消息类型,暂定text/image,有可能扩展
          content: "http://kaca-1252910777.cosgz.myqcloud.com/chatImages/i2adSfUvrDSieD.jpg"  
                               // 消息内容
                               //     text  文字
                               //     image  图片url
        }
      ]
    }
  ]
}
// JSON END