<template>
	<view>
		<view class="grace-list">
		    <navigator class='items'>
		        <view class="title">检测更新</view>
		        <view class="arrow-right"></view>
		    </navigator>
			<navigator class='items' @tap="common.window.toNew('user/index/community', null)">
			    <view class="title">社区规范</view>
			    <view class="arrow-right"></view>
			</navigator>
			<navigator class='items' @tap="common.window.toNew('user/index/clause', null)">
			    <view class="title">服务条款</view>
			    <view class="arrow-right"></view>
			</navigator>
			<navigator class='items' @tap="common.window.toNew('user/index/privacy', null)">
			    <view class="title">隐私政策</view>
			    <view class="arrow-right"></view>
			</navigator>
		</view>
		
		
		<view class="footer">
			<view style="width:100%; justify-content: center;" class="grace-flex grace-columns grace-wrap grace-center"><text>剑指堆栈网络技术有限公司 版权所有</text></view>
		</view>
	</view>
</template>

<script>
import brandLogo from '@/components/stack-logo/statck-logo';

export default {
	components: {
		brandLogo
	}
};
</script>

<style lang="less">
@import '../../../static/common.less';

@icon-size: 30upx;

view {
	background-color: #fff;
}

* {
	font-size: 15upx;
}

.brand {
	display: flex;
	width: 100%;
	justify-content: center;
	font-size: 28upx;
	height: 56upx;
	line-height: 56upx;
	color: #afafaf;
}

.version {
	display: flex;
	width: 100%;
	justify-content: center;
	font-size: 18upx;
	height: 56upx;
	line-height: 56upx;
	color: #afafaf;
}

.grace-list {
	padding: 0 0;
}

.grace-list .items .title {
	display: inline-flex;
	font-size: 13px;
	height: 20upx;
	line-height: 20upx;
	justify-content: left !important;
	float: left !important;
}

.grace-list .items .arrow-right{
	height: 46px;
    line-height: 46px;
	float: right !important;
	justify-content: right !important;
}

.footer{
    display: flex;
    position: fixed;
    z-index: 2;
    left: 0;
    bottom: 0;
    background: #F5F5F5;
    width: 100%;
    height: 49px;
    flex-wrap: nowrap;
    overflow: hidden;
}

.footer view{
	background-color: #F5F5F5;
}

.footer text{
	font-size: 14px;
	color: #A8A8A8;
}
</style>
