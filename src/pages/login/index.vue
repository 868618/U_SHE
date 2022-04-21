<template>
  <view class="login">
    <view class="footer">
      <view class="treaty">登录即表明您已同意<text>《U社用户服务协议》</text> </view>

      <button class="btn" open-type="getUserInfo" @tap="handleLogin">微信登录</button>

      <button class="phone_login" open-type="getPhoneNumber" @getPhoneNumber="handlePhone">
        手机号登录
      </button>
    </view>
  </view>
</template>

<script>
import Taro from "@tarojs/taro"
import { login } from "@/api"
import "./index.less"

export default {
  created() {
    Taro.getSetting().then((res) => {
      console.log("getSetting", res)
    })
  },
  methods: {
    handleLogin() {
      Taro.login().then(({ code }) => {
        // console.log("code", code)
        Taro.getUserInfo().then((res) => {
          console.log("res", res)
          const { iv, encryptedData } = res
          const { gender: sex, nickName: nickname, avatarUrl: img } = res.userInfo
          login({
            iv,
            encryptedData,
            sex,
            nickname,
            code,
            img,
          }).then((result) => {
            console.log("result", result)
          })
        })
      })
    },
    handlePhone(result) {
      console.log("123", result)
      // Taro.getSetting().then((res) => {
      //   console.log("getSetting", res)
      // })
    },
  },
}
</script>
