<template> 
	<view>
		<view class="grace-list ">
			<navigator class='items' url="./wechat">
				<view class="icons">
					<image class="icon" src="../../../static/user/vip.png"></image>
				</view>
				<view class="title">开通钻石会员<i class="red-point"></i><text class="green">赚佣金</text></view>
				<view class="arrow-right"></view>
			</navigator> 			
			<navigator class='items' url="../bill/index">
				<view class="icons">
					<image class="icon" src="../../../static/user/income.png"></image>
				</view>
				<view class="title">零钱明细</view>
				<view class="arrow-right"></view>
			</navigator> 
		</view>
		
		<view class="grace-list light-grace-list">
			<navigator class='items' url="./feedback" v-if="hasLogin">
				<view class="icons">
					<image class="icon" src="../../../static/user/inspiration.png"></image>
				</view>
				<view class="title">产品建议</view>
				<view class="arrow-right"></view>
			</navigator> 
			
			<navigator class='items' url="./clause">
				<view class="icons">
					<image class="icon" src="../../../static/user/edit.png"></image>
				</view>
				<view class="title">服务条款与隐私</view>
				<view class="arrow-right"></view>
			</navigator> 
			
			<navigator class='items' url="./service">
				<view class="icons">
					<image class="icon" src="../../../static/user/service.png"></image>
				</view>
				<view class="title">我的客服</view>
				<view class="arrow-right"></view>
			</navigator> 
		</view>
		
		<view class="grace-list light-grace-list">
			<navigator class='items' url="./about">
				<view class="icons">
					<image class="icon" src="../../../static/user/about.png"></image>
				</view>
				<view class="title">关于我们</view>
				<view class="arrow-right"></view>
			</navigator> 
		</view>
	</view>
</template>

<script> 	
	export default {
		name: "list",
		props:{
			hasLogin: Boolean
		},
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="less">
	@import "../../../static/common.less";

	
	@icon-size: 30upx;
	
	.grace-list{
		padding: 0 0; 
	}
	
	.light-grace-list{
		border-top: 1px solid #f3f3f3 !important;
		border-bottom: 1px solid #f3f3f3 !important;
	}
	
	.grace-list .items .icons{
		width: @icon-size !important;
		height: @icon-size !important;
		line-height: @icon-size !important;
	}
	
	.grace-list .items .icons uni-image {
		width: @icon-size !important;
		height: @icon-size !important;
	}
	
	/* #ifdef APP-PLUS */
	@app-icon-size: 40upx;
	
	.grace-list .items .icons{
		width: @app-icon-size !important;
		height: @app-icon-size !important;
		line-height: @app-icon-size !important;
	}
	
	.grace-list .items .icons uni-image {
		width: @app-icon-size !important;
		height: @app-icon-size !important;
	}
	/* #endif */
	
	.grace-list .items .title{
		font-size: 14px;
		font-family: @normal-text-font;
		line-height: @icon-size;
		height: @icon-size;
	}
	
	.grace-list .items .arrow-right{
	}
	
	.grace-common-mt {
		margin-top: 10px;
	}
	
	.items text{
		font-family: @normal-text-font;
	}
	
	.green{
		color:#0EA295 !important;
		margin-right: 15upx;
	}
	
	.first-grace-common-mt{ 
		margin-top: 0upx !important;
	}
	
	.grace-list .items .title{
		border-bottom: 1px solid #f3f3f3;
	}
	
	.red-point{
		float: right;
		display: inline-flex;
		width: 16upx;
		height: 16upx;
		border-radius: 80upx;
		position: relative;
		top: 8upx;
		background-color: #FE3D3D;
	}
</style>
