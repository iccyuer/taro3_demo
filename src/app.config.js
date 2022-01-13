export default {
  pages: [
    'pages/index/index',
    'pages/profile/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: "#BBBBBB",
    selectedColor: "#000000",
    borderStyle: "white",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./images/tabbar/home@2x.png",
        selectedIconPath: "./images/tabbar/home_active@2x.png"
      },
      {
        pagePath: "pages/profile/index",
        text: "我的",
        iconPath: "./images/tabbar/my@2x.png",
        selectedIconPath: "./images/tabbar/my_active@2x.png"
      }
    ]
  }
}
