<template>
	<!-- top user preview info  :style="{height: previewHeight}"-->
	<view class="top-user-preview">
		<view class="blank-line-20"></view>
		<view class="blank-line-10"></view>
		
		<!-- #ifdef APP-PLUS -->
			<!-- status bar placeholder --> 
			<view class="top-status-bar-placeholder"></view>
			<!-- status bar placeholder end -->
		<!-- #endif -->
		
		<!-- sample header -->
		<view class="sample-header">
			<view class="left" @tap="authOpenWindow('user/index/profile')">
				<view class="avatar-container">
					<lazy-image class="lazy-image default-avatar" :realSrc="this.profile.avatar" :placeholdSrc="this.avatar"></lazy-image>
				</view>
				
				<text class="account  grace-animate">{{queryNickName}}</text>
			</view> 
			<view class="right">
				<i v-if="isLogin" :class="['iconfont','icon-bianji1', 'header-icon', 'header-icon-settings', 'grace-animate', shakeAnimation]" @tap="shakeAndTo()"></i>
				<i class="iconfont icon-vip header-icon header-icon-vip grace-animate tada " ></i>
			</view>
		</view>
		<!-- sample header end -->
		
		<!-- finance data -->
		<view class="blank-line-20"></view>
		<view class="blank-line-20"></view>
		<view class="finance-preview">
			<view class="item-line">
				<view class="item-label">
					<text class="title">总资产(元)</text>
					<i v-show="!isShow" @tap="toggleBalance()" class="iconfont icon-yanjing1 lock-eye"></i>
					<i v-show="isShow" @tap="toggleBalance()" class="iconfont icon-yanjing_bi lock-eye"></i>
				</view>
				<text class="balance count">{{wallet.assets}}</text>
			</view>
			
			<view class="blank-line-50"></view>

			<view class="item-line item-inline">
				<view class="inline-item">
					<view class="item-label">
						<text class="title">今日收益(元)</text>
					</view>
					<text class="balance">{{wallet.todayAssets}}</text>
				</view>
				
				<view class="inline-item">
					<view class="item-label">
						<text class="title">昨日收益(元)</text>
					</view>
					<text class="balance">{{wallet.totalAssets}}</text>
				</view>
			</view>
			
			
		</view>
		<!-- finance data end -->
	</view>
	<!-- top user preview end -->
</template>

<script>
	import { mapState, mapActions } from 'vuex';
	import lazyImage from "@/components/lazy-image.vue"

	export default {
		name: "preview",
		components:{
			lazyImage
		},
		data() {
			return {
				isShow: false,
				avatar: "../../../static/user/default-avatar.png",
				assets: "",
				todayAssets: "",
				totalAssets: "",
				wallet: {
					assets: "0.00",
					todayAssets: "0.00",
					totalAssets: "0.00",
				},
				shakeAnimation: ""
			};
		},
		computed:{
			...mapState(['hasLogin', 'profile']),
			previewHeight(){
				if(!this.hasLogin){
					return uni.upx2px(750 * 77 / 414) + "px";
				}
			},
			queryNickName(){
				if(this.profile.account == null || this.profile.account.length < 1){
					return "请您先登录";
				}
				return this.profile.nickName;
			},
			isLogin(){
				//return this.hasLogin;
				return true;
			}
		},
		methods:{
			...mapActions(['setProfile', 'authOpenWindow']),
			toggleBalance(){
				if(!this.isShow){
					this.isShow = true;
					this.assets = this.wallet.assets;
					this.todayAssets = this.wallet.todayAssets;
					this.totalAssets = this.wallet.totalAssets;
					this.wallet.assets = "....";
					this.wallet.todayAssets = "....";
					this.wallet.totalAssets = "....";
				}else{
					this.isShow = false;
					this.wallet.assets = this.assets;
					this.wallet.todayAssets = this.todayAssets;
					this.wallet.totalAssets = this.totalAssets;
				}
			},
			shakeAndTo(){
				this.shakeAnimation = "bounceIn"; 
				setTimeout(() => {
					this.shakeAnimation = "";  
					this.common.window.toNew('user/index/profile', null);
				}, 100)
				
			}
		} 
	}
</script>

<style lang="less">
	@import "../../../static/common.less";

	@import "../../../graceUI/animate.css";
	
	.top-user-preview {
		width: 100%;
		height: 460upx;
		background-image: url('~@/static/user/user-preview-bg.png');
		background-size: 100% 460upx;
		position: relative;
		top: 0px;
	}
	
	/* #ifdef APP-PLUS */
	
	.top-user-preview {
		width: 100%;
		height: 500upx;
		background-image: url('~@/static/user/user-preview-bg.png');
		background-size: 100% 500upx;
		position: relative;
		top: 0px;
	}
	 
	/* #endif */
	
	 
	.top-status-bar-placeholder {
		min-height: var(--status-bar-height);
		background-color: rgba(255, 255, 255, 0);
	}
	
	.sample-header{
		width:90%;
		min-height: 80upx;
		margin: 0 auto; 
	}
	
	.sample-header .left, .sample-header .right{
		overflow: hidden;
	}
	
	.sample-header .left{
		float: left;
	}
	
	.sample-header .right{
		float: right;
	}
	
	.default-avatar{
		float: left;
		width: 80upx;
		height: 80upx;
		position:absolute;
		left:0px;
		top:0px;
		overflow: hidden !important;
		border-radius: 60upx !important;
	}
	
	
	.avatar-container{
		position:relative;
		display: inline-flex;
		float: left;
		width: 80upx;
		height: 80upx;
		overflow: hidden !important;
		border-radius: 60upx !important;
	}
	
	.account{
		float: left;
		display: inline-flex;
		margin-left: 25upx;
		line-height: 80upx;
		height: 80upx;
		font-size: 30upx;
		color: @dark-text-color;
		font-family: @normal-number-font;
	}
	
	.header-icon{
		display: inline-flex;
		float: right;
		font-size: 40upx;
		line-height: 80upx;
		color: @dark-text-color;
		margin-left: 20upx;
	}
	
	.header-icon-vip{
		font-size: 50upx !important;
	}
	
	.header-icon-settings{
		font-size: 50upx !important;
	}
	
	/* finance */
	.finance-preview{
			width: 100%;
		}
		
	.finance-preview .item-line{
		width: 90%;
		height: 120upx;
		margin: 0 auto;
	}
	
	.item-line .title{
		height: 24upx;
		line-height: 24upx;
	}
	
	.finance-preview .item-label{
		font-family: @normal-text-font;
		color: rgba(255, 255, 255, 0.6);
		font-size: 24upx;
	}
		
	.lock-eye{
		display: inline-flex;
		margin-left: 30upx;
		color: @dark-text-color;
		font-size: 40upx !important;
		position: relative;
		top: 5upx;
	}

	.balance{
		color: rgb(255, 255, 255);
		font-family: @common-font-num;
		font-size: 70upx;
	}
	
	.item-inline{
		width: 90%;
		margin: 0 auto;
	}
	
	.inline-item .item-label{
		width: 100%;
		height: 36upx;
	}
	
	
	.inline-item .item-label .title{
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		height: 36upx;
	}
	
	.inline-item .balance{
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		font-size: 40upx; 
		line-height: 84upx;
	}
	
	.inline-item{
		clear: both;
		display: inline-block;
		width: 50%;
		min-height: 120upx;
	}
	
	/* finance end */
	 
</style>
 