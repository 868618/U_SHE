export default {
  pages: [
    'pages/index/index',
    'pages/login/index',
    'pages/mine/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页'
      },
      {
        pagePath: 'pages/login/index',
        text: '登录'
      },
      {
        pagePath: 'pages/mine/index',
        text: '我的'
      }
    ]
  },
  // usingComponents: {}
}
