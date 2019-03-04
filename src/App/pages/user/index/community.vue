<template>
	<view>
		<view v-if="loading">
			<!-- 加载动画页 -->
			<mht-loader :showImage="false" loadingType="jumping"></mht-loader>
		</view>
		<view v-else>
			<!-- 这里显示内容 -->
			<articleBg iconName="icon-icon_dingtalk_line"></articleBg>

			<view :style="{ padding: '40px' }">
				<view><rich-text class="content" :nodes="html"></rich-text></view>
			</view>
			
			<view class="grace-footer">
				<view style="width:100%;">
					<button :style="{ backgroundColor: '#498FE1', color: '#fff' }" @tap="common.window.toNew('user/index/service', null)">
						<text>我要举报</text>
					</button>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import mhtLoader from "@/components/mht-loader/mht-loader.vue";
	import articleBg from "@/components/stack-article-bg/stack-article-bg.vue";

	export default {
		components: {
			mhtLoader,
			articleBg
		},
		data() {
			return {
				loading: false,
				html: ''
			};
		},
		onLoad() {
			this.getStandard();
		},
		methods: {
			getStandard() {
				this.loading = true;
				let res = this.$api.get('/api/getCommunityStandard', {}).then((res) => {
					this.loading = false;
					this.html = res.data.msg;
				});
			}
		}
	};
</script>

<style lang="less">
	@import '../../../static/common.less';

	page {
		background-color: #fff;
	}

	* {
		font-family: @normal-text-font;
		font-size: 25upx !important;
	}

	h4 {
		font-size: 25upx !important;
	}
	
	.content{
		overflow: hidden;
	}
	
	.content image{
		width: 100% !important;
		overflow: hidden;
	}
	
	.grace-footer{
		box-shadow: 0px 0px 0px #888;
	}
	
</style>
