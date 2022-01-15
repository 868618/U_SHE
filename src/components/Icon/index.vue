<template>
  <view class="icon" :style="style">
    <image src="../../assets/images/warning.png" />
  </view>
</template>

<script>
import "./index.less"
export default {
  name: "Icon",
  props: {
    size: {
      default: 30,
      type: [Number, String],
    },
    name: {
      default: "warning",
      type: [String],
    },
  },

  computed: {
    style() {
      return `width: ${this.size}rpx;height: ${this.size}rpx;`
    },

    src() {
      return "warning"
    },
  },

  created() {
    console.log("[ this.props ] >", this.name)
  },
}
</script>
