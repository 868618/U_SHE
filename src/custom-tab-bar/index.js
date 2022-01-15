Component({
    data: {
      selected: 0,
      color: "#7A7E83",
      selectedColor: "#3cc51f",
      isTabbarPage: false,
      list: [{
        pagePath: "/index/index",
        text: "组件"
      }, {
        pagePath: "/index/index2",
        text: "接口"
      }]
    },

    lifetimes: {
      attached() {
          wx.nextTick(() => {
              const [page] = getCurrentPages()
              let selected
              let isTabbarPage = false
  
              if (page.route.includes('/index/index')) {
                selected = '0'
                isTabbarPage = true
              }
  
              if (page.route.includes('/mine/index')) {
                selected = '3'
                isTabbarPage = true
              }

              this.setData({ selected, isTabbarPage })
              
          })
      },
    },

    methods: {
      switchTab(e) {
          const { tab } = e.mark
          const url = `/pages/${tab}/index`
          wx.switchTab({ url })
      }
    }
  })