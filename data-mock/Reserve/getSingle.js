/**
  
  getSingle 获得某种服务提供者列表 GET
    @param type 需要获取的服务提供者类型, 可能的值为"photoer" "makeuper" "PSer", 分别对应"摄影师" "化妆师" "修图师"
    @param style 风格, 如选择了多个风格则用逗号隔开, 不作为筛选条件则留空
    @param location 地点, 不作为筛选条件则留空
    @param priceFrom 价格下限
    @param priceTo 价格上限, 当价格不作为筛选条件时priceFrom和priceTo均留空

    @return 服务提供者列表

 */


var getSingle = 

// JSON START
[                         // 服务提供者列表
  {                         // 某个服务提供者信息
    "provider": {
      "openid": "eraninasd",// 该服务提供者openid
      "avatarUrl": ""       // 该服务提供者头像
    },
    "serverInfo": {         // 该服务提供者提供的服务信息
      "style": [            // 风格列表
        "清新", 
        "街拍"
      ],  
      "location": "岳麓区", // 地点
      "serve": "精修12张",  // 提供的服务
      "price": 120          // 价格
    }
  }, 
  {                         // 某个服务提供者信息
    "provider": {
      "openid": "nosflmk",  // 该服务提供者openid
      "avatarUrl": ""       // 该服务提供者头像
    },
    "serverInfo": {         // 该服务提供者提供的服务信息
      "style": [            // 风格列表
        "胶片", 
        "艺术"
      ],  
      "location": "天心区", // 地点
      "serve": "精修10张",  // 提供的服务
      "price": 120          // 价格
    }
  }
]
// JSON END