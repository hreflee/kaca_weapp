/**
  
  getRecomend 获得推荐组合列表 GET
    @param style 风格, 如选择了多个风格则用逗号隔开, 不作为筛选条件则留空
    @param location 地点, 不作为筛选条件则留空
    @param priceFrom 价格下限
    @param priceTo 价格上限, 当价格不作为筛选条件时priceFrom和priceTo均留空

    @return 推荐组合数组

 */


var getRecomend = 

// JSON START
[              // 推荐列表
  {                           // 单个推荐组合
    "providers": [              // 服务提供者          
      {
        "type": "photoer",      // 该服务提供者为摄影师
        "openid": "eraninasd",  // 该服务提供者openid
        "avatarUrl": ""         // 该服务提供者头像
      },
      {
        "type": "makeuper",     // 该服务提供者为化妆师
        "openid": "owirvng",    // 该服务提供者openid
        "avatarUrl": ""         // 该服务提供者头像
      },
      {
        "type": "PSer",         // 该服务提供者为修图师
        "openid": "eraninasd",  // 该服务提供者openid
        "avatarUrl": ""         // 该服务提供者头像
      }
    ],
    "serverInfo": {             // 推荐组合的服务信息
      "style": [                // 风格列表
        "清新", 
        "街拍"
      ],  
      "location": "岳麓区",     // 地点
      "serve": "精修12张",      // 提供的服务
      "price": 240              // 价格
    }
  },
  {                           // 单个推荐组合
    "providers": [              // 服务提供者          
      {
        "type": "photoer",      // 该服务提供者为摄影师
        "openid": "vwrawer",    // 该服务提供者openid
        "avatarUrl": ""         // 该服务提供者头像
      },
      {
        "type": "makeuper",     // 该服务提供者为化妆师
        "openid": "lojvqwr",    // 该服务提供者openid
        "avatarUrl": ""         // 该服务提供者头像
      },
      {
        "type": "PSer",         // 该服务提供者为修图师
        "openid": "jiovqwoirj",  // 该服务提供者openid
        "avatarUrl": ""         // 该服务提供者头像
      }
    ],
    "serverInfo": {             // 推荐组合的服务信息
      "style": [                // 风格列表
        "胶片", 
        "艺术"
      ],  
      "location": "天心区",     // 地点
      "serve": "精修8张",       // 提供的服务
      "price": 240              // 价格
    }
  }
]
// JSON END