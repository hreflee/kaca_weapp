// pages/Discover/Discover.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperSetting:{
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      circular: true
    },
    bannerImgs: [
      '../../images/Discover-mock/1.jpg',
      '../../images/Discover-mock/2.jpg',
      '../../images/Discover-mock/3.jpg',
      '../../images/Discover-mock/4.jpg'
    ],
    channels:{
      classes:[
        {
          name: "作品",
          id: 0
        },
        {
          name: "经验",
          id: 1
        },
        {
          name: "场地",
          id: 2
        }
      ],
      activeChannel: 0,
      content: [
        [
          {
            article: {
              id: 0,
              img: "../../images/Discover-mock/1.jpg",
              abstract: "arti0 arti0 arti0 arti0 arti0"
            },
            author: {
              id: 0,
              avatar: "../../images/avatar-mock/1.jpg",
              name: "author0"
            }
          },
          {
            article: {
              id: 1,
              img: "../../images/Discover-mock/2.jpg",
              abstract: "arti1 arti1 arti1 arti1 arti1"
            },
            author: {
              id: 1,
              avatar: "../../images/avatar-mock/2.jpg",
              name: "author1"
            }
          },
          {
            article: {
              id: 2,
              img: "../../images/Discover-mock/3.jpg",
              abstract: "arti2 arti2 arti2 arti2 arti2"
            },
            author: {
              id: 2,
              avatar: "../../images/avatar-mock/3.jpg",
              name: "author2"
            }
          }
        ],
        [
          {
            article: {
              id: 0,
              img: "../../images/Discover-mock/1.jpg",
              abstract: "arti0 arti0 arti0 arti0 arti0"
            },
            author: {
              id: 0,
              avatar: "../../images/avatar-mock/1.jpg",
              name: "author0"
            }
          },
          {
            article: {
              id: 1,
              img: "../../images/Discover-mock/2.jpg",
              abstract: "arti1 arti1 arti1 arti1 arti1"
            },
            author: {
              id: 1,
              avatar: "../../images/avatar-mock/2.jpg",
              name: "author1"
            }
          },
          {
            article: {
              id: 2,
              img: "../../images/Discover-mock/3.jpg",
              abstract: "arti2 arti2 arti2 arti2 arti2"
            },
            author: {
              id: 2,
              avatar: "../../images/avatar-mock/3.jpg",
              name: "author2"
            }
          }
        ],
        [
          {
            article: {
              id: 0,
              img: "../../images/Discover-mock/1.jpg",
              abstract: "arti0 arti0 arti0 arti0 arti0"
            },
            author: {
              id: 0,
              avatar: "../../images/avatar-mock/1.jpg",
              name: "author0"
            }
          },
          {
            article: {
              id: 1,
              img: "../../images/Discover-mock/2.jpg",
              abstract: "arti1 arti1 arti1 arti1 arti1"
            },
            author: {
              id: 1,
              avatar: "../../images/avatar-mock/2.jpg",
              name: "author1"
            }
          },
          {
            article: {
              id: 2,
              img: "../../images/Discover-mock/3.jpg",
              abstract: "arti2 arti2 arti2 arti2 arti2"
            },
            author: {
              id: 2,
              avatar: "../../images/avatar-mock/3.jpg",
              name: "author2"
            }
          }
        ]
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  changeChannel: function (e) {
    this.setData({"channels.activeChannel":e.currentTarget.dataset.index});
  }
})