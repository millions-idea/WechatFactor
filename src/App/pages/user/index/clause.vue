<template>
	<view>
		<view>
			<view v-if="loading">
				<!-- 加载动画页 -->
				<mht-loader :showImage="false" loadingType="jumping"></mht-loader>
			</view>
			<view v-else>
			   <!-- 这里显示内容 -->
			   <view :style="{ padding: '40px' }">
				<view><rich-text :nodes="html"></rich-text></view>
			   </view>
			</view>
		</view>
	</view>
</template>

<script>
	import mhtLoader from "@/components/mht-loader/mht-loader.vue";
	
	export default {
		components: {
			mhtLoader
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
				let res = this.$api.get('/api/getServiceStandard', {}).then((res) => {
					this.loading = false;
					this.html = res.data.msg;
				});
			}
		}
	};
</script>

<style lang="less">
	@import "../../../static/common.less";

	
	page {
		background-color: #fff !important;
	}
	
	* {
		font-family: @normal-text-font;
		font-size: 15upx;
	}
	
	h4{
		font-size: 25upx !important;
	}
</style>
