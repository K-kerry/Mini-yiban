//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    major: '计算机科学与技术',
    department:'计算机科学与工程学院',
    name:'党锴瑞',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
      list: {
    },
    footNum:{
      footNum_today: 0,
      footNum_yesterday: 0,
      footNum_week: 0,
      footNum_month: 0,
      footNum_all: 0,
      rank_today: 0,
      rank_yesterday: 0,
      rank_week: 9,
      rank_month: 99,
      rank_all: 999,

    }
    
  },

  //事件处理函数

  onLoad: function () {
    var that=this
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } 
   wx.request({
     url: 'http://localhost:9090',
    success: (result) => {
      console.log(result.data)
      that.setData({
        list:result.data.list
      })
      
    },
    fail: () => {console.log('fail')},
  
  });
      },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
