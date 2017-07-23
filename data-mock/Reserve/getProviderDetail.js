/**

  getProviderDetail  获取服务提供者详情信息  GET 
    @param openid 服务提供者openid

    @return 该服务提供者的详细信息

 */
var getProviderDetail = 

// JSON START
{
  "basicInfo": {   // 基本信息
    "openid": "",  // 服务提供者openid
    "nickName": "",// 服务提供者昵称
    "sign": "",    // 服务提供者签名
    "style": [     // 风格
        "胶片", 
        "艺术"
    ],
    "location": "",// 地点
    "intro": ""    // 简介
  },
  "works": [       //作品集
    "http://xxxxxxx.jpg",
    "http://xxxxxxx.jpg",
    "http://xxxxxxx.jpg",
    "http://xxxxxxx.jpg",
    "http://xxxxxxx.jpg",
    "http://xxxxxxx.jpg",
    "http://xxxxxxx.jpg",
    "http://xxxxxxx.jpg"
  ]
}
// JSON END