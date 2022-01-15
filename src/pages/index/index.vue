<template>
  <view class="index">
    <Header />
    <view class="body">
      <view class="info about">
        <image src="../../assets/images/warning.png" class="icon" />
        <text class="title">关于我 ..</text>

        <view class="tags">
          <view class="tag">170cm</view>
          <view class="tag">处女座</view>
          <view class="tag">位置 哈尔滨</view>
        </view>
      </view>

      <view class="info post">
        <image src="../../assets/images/pyq.png" class="icon" />
        <text class="title">朋友圈 ..</text>

        <view class="post_body">
          <text class="tag">#发型师要的照片</text>

          <view class="post_detail">
            <image src="../../assets/images/header.png" />
          </view>

          <view class="action">
            <view>2021/12/01 18:09</view>

            <view>
              <image src="../../assets/images/zan.png" />
              赞
            </view>

            <view>
              <image src="../../assets/images/pinglun.png" />
              评论
            </view>

            <view>
              <image src="../../assets/images/zan.png" />
              礼物
            </view>
          </view>
        </view>
      </view>

      <view class="btn">下一条</view>
    </view>
  </view>
</template>

<script>
import "./index.less"
import Header from "@/components/Header"

export default {
  components: {
    Header,
  },
  data() {
    return {
      msg: "Hello world!",
    }
  },

  created() {
    const a = () => {
      return 3
    }
  },
}
</script>
