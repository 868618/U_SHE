<template>
  <view class="mine">
    <view class="top">
      <view class="header">
        <view class="left">
          <image src="../../assets/images/header.png" />
        </view>
        <view class="right">
          <view class="name">dali <image src="../../assets/images/dunpai.png" /> </view>
          <view class="info">
            <text class="score"><text>0</text>分</text>
            <text class="detail">查看/编辑资料 <text>></text></text>
          </view>
        </view>
      </view>

      <view class="panel">
        <view class="panel_item">
          <text class="pyq">529</text>
          <view class="desc">朋友圈</view>
        </view>
        <view class="panel_item">
          <text class="fatie">529</text>
          <view class="desc">我的发帖</view>
        </view>
        <view class="panel_item">
          <text class="money">529</text>
          <view class="desc">钱包</view>
        </view>
      </view>

      <view class="vip">
        <image src="../../assets/images/vip.png" />
      </view>
    </view>

    <view class="footer">
      <view class="item">
        <view class="left">
          <image src="../../assets/images/name_card.png" />
          <text>身份证认证</text>
        </view>
        <view class="right">去提高信用分</view>
      </view>

      <view class="item">
        <view class="left">
          <image src="../../assets/images/daxue.png" style="width: 35rpx; height: 28rpx" />
          <text>我的大学认证</text>
        </view>
        <view class="right">去提高信用分</view>
      </view>

      <view class="item">
        <view class="left">
          <image src="../../assets/images/zhengshu.png" style="width: 32rpx; height: 32rpx" />
          <text>等级证书认证</text>
        </view>
        <view class="right">去提高信用分</view>
      </view>

      <view class="item">
        <view class="left">
          <image src="../../assets/images/phone.png" style="width: 25rpx; height: 32rpx" />
          <text>手机号绑定</text>
        </view>
        <view class="right">去提高信用分</view>
      </view>

      <view class="item special">
        <view class="left">
          <image src="../../assets/images/xingbie.png" style="width: 31rpx; height: 27rpx" />
          <text>推荐性别设置：</text>
        </view>
        <view class="right">不限制</view>
      </view>

      <view class="item special">
        <view class="left">
          <image src="../../assets/images/xinyong.png" style="width: 31rpx; height: 30rpx" />
          <text>推荐信用分范围：</text>
        </view>
        <view class="right">0 — 0</view>
      </view>

      <view class="item special">
        <view class="left">
          <image src="../../assets/images/tuijian.png" style="width: 32rpx; height: 30rpx" />
          <text>推荐给我的用户的城市选择：</text>
        </view>
        <view class="right">不限制</view>
      </view>

      <view class="item special">
        <view class="left">
          <image src="../../assets/images/yinsi.png" style="width: 25rpx; height: 33rpx" />
          <text>隐私设置：</text>
        </view>
        <view class="right">不限制</view>
      </view>

      <view class="item special">
        <view class="left">
          <image src="../../assets/images/location.png" style="width: 27rpx; height: 33rpx" />
          <text>我的校园铃距离范围：</text>
        </view>
        <view class="right">0 — 800米</view>
      </view>

      <view class="item">
        <view class="left">
          <image src="../../assets/images/share.png" style="width: 28rpx; height: 29rpx" />
          <text>分享给好友</text>
        </view>
        <view class="right">
          <image src="../../assets/images/right_arrow.png" />
        </view>
      </view>

      <view class="item">
        <view class="left">
          <image src="../../assets/images/ask.png" style="width: 18rpx; height: 29rpx" />
          <text>问题反馈</text>
        </view>
        <view class="right">
          <image src="../../assets/images/right_arrow.png" />
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.less"

export default {
  name: "Mine",
}
</script>
