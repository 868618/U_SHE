// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import Vuex from 'vuex'
import './app.less'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    tabbarIndex: 0
  },
  mutations: {
    setTabbarIndex: (state, index) => {
      state.tabbarIndex = index
    }
  }
})

const App = {
  onShow (options) {
    console.log(options)
  },
  store,
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
}

export default App
