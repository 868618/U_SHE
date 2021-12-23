<template>
  <view class="index">
    <text>{{ msg }}</text>
  </view>
</template>

<script>
import './index.less'

export default {
  data () {
    return {
      msg:  'Hello world!'
    }
  },


  created() {
    const a = () => {
      return 3
    }
    console.log(999, a)
  }


}
</script>
