<template>
	<view class="emptyView">
		<image :style="{height: height + 'px'}" src="../../../static/data/empty.png" mode="aspectFit" class="icon"></image>
		<text class="label">{{label}}</text>
	</view>
</template>

<script>
	export default{
		name: "stackEmpty",
		props: {
			height: String,
			label: String
		},
		data(){
			return {
				
			}
		}
	}
</script>

<style lang="less">
	@import "../../static/common.less";
	
	.emptyView{
		width: 100%;
		text-align: center;
		position: absolute;
		top: 20%;
	}
	
	
	.icon{
		height: 380upx;
	}
	
	.label{
		display: flex;
		width: 100%;
		font-family: @common-font-zh;
		color: #d3d3d3;
		justify-content: center;
		font-size: 35upx;
	}
</style>
