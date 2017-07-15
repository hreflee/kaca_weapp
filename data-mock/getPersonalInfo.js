/*

  getPersonalInfo 获取用户个人信息 POST
    @param code  客户端登录时获取到的换取sessionKey的code
    @param encryencryptedData  在wx.login中获取到的加密的数据
    @param vi  在wx.login中获取到的用于解密的参数
      
      服务器拿着code从微信服务器获取到sessionKey后,依据appId sessionKey vi解密encryptedData, 
      解密流程见: https://mp.weixin.qq.com/debug/wxadoc/dev/api/signature.html
      解密后的数据样例如下:
        { 
          openId: 'oveDs0Jj2AzsiSC_QRz3ueB1eUoM',
          nickName: 'VJ',
          gender: 0,
          language: 'zh_CN',
          city: '',
          province: '',
          country: '',
          avatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTISHcK1tS1a1kN89mAia7bkFySu5KobeagYNPIk7oKT7iaBunlPRxp2BuvfQDDQS3ibibib9owfc0gE5SA/0',
          watermark: { timestamp: 1500047831, appid: 'wxd12fdae3117a82d4' } 
        }

    @return openId  微信用户标识
    @return sign  kaca小程序中用户设置的用户签名,如为设置则留空
    @return bg  kaca小程序中用户设置的用户签名,如为设置则指向默认背景

 */

{ 
  "openId": "oveDs0Jj2AzsiSC_QRz3ueB1eUoM",
  "sign": "用户签名",
  "bg": "http://kaca-1252910777.cosgz.myqcloud.com/images-mock/bg.jpg"
} 