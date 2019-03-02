<template>
	<view>
		<i :class="['iconfont', iconName, 'common_bg_layer']"></i>
	</view>
</template>

<script>
	export default{
		name: "article-bg",
		props: {
			iconName: ""
		},
		data(){
			return {
				
			}
		}
	}
</script>

<style lang="less">
	page{
		 background-image: url("~@/static/user/common_bg.png");
		 background-repeat: no-repeat;
		 background-size: 100%;
		 background-color: #fff;
		 height: 100%;
	 }
	 
	.common_bg_layer{
		position: fixed;
		right: -160upx;
		bottom: 100upx;
		clear: both;
		font-size: 260px !important;
		opacity: 0.1;
		z-index: 1;
		color: rgba(73, 143, 225, 0.43137254901960786);
	}
	 
	view {
		background-color: rgba(255, 255, 255, 0);
	}
	
	.content, .container{
		position: relative;
		z-index: 999 !important;
	}
	
	.grace-footer{ 
		box-shadow: 0px 0px 0px #888;
	}
	
	img{
		border-radius: 5upx;
	}
</style>
