//app.js
App({
  // 1 应用第一次启动的就会触发的事件
  onLaunch(){
    // 在应用第一次启动的时候 获取用户的个人信息
    console.log("appjs-onLaunch");
    //js的方式跳转 不能触发 onPageNotFound
    // wx.navigateTo({
    //   url: '11/22/33',
    // });
  },

  // 2应用被用户看到(经常被触发，在onLaunch后触发)
  onShow(){
    // 对应用的数据或者页面效果 重置
    console.log("appjs-onShow");
  },
  // 3 应用被隐藏触发
  onHide(){
    // 暂停或者清除定时器
    console.log("appjs-onHide");
  },
  // 4 应用代码发生报错触发
  onError(err){
    // 应用发生代码报错时，收集用户的错误信息，通过异步请求将错误信息发送到后台
    console.log("appjs-onError");
  },
  // 5 页面找不到触发
  // 应用第一次启动如果找不到第一个入口页面才会触发
  onPageNotFound(){
    //如果页面找不到 通过JS方式来重新跳转页面 重新跳到第二个首页
    //不能跳到tabbar
    wx.navigateTo({
      url: 'pages/demo09/demo09',
    });
    // console.log("onPageNotFound");
  }
})