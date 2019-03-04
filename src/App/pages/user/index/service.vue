<template>
	<view>
		<view v-if="loading">
			<!-- 加载动画页 -->
			<mht-loader :showImage="false" loadingType="jumping"></mht-loader>
		</view>
		<view v-else>
			<!-- 这里显示内容 -->
			<articleBg iconName="icon-icon_wechat"></articleBg>

			<view class="container" :style="{ padding: '40px' }"> 
				<view><rich-text class="content" :nodes="html"></rich-text></view>
			</view>
			
			<view class="grace-footer">
				<view style="width:100%;">
					<!-- #ifdef APP-PLUS/MP-WEIXIN/MP-BAIDU -->
						<button :style="{ backgroundColor: '#498FE1', color: '#fff' }" @tap="saveAndScan()">
							<text :style="{ marginLeft: '5px' }">保存到相册</text>
						</button>
					<!-- #endif --> 
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
				html: '',
				link: 'https://stack-1251694474.cos.ap-guangzhou.myqcloud.com/zhixiao/QQ%E5%9B%BE%E7%89%8720190226232717.jpg'
			};
		},
		onLoad() {
			this.getStandard();
		},
		methods: {
			getStandard() {
				this.loading = true;
				let res = this.$api.get('/api/getServiceContact', {}).then((res) => {
					this.loading = false;
					this.html = res.data.msg;
				});
			}, 
			saveAndScan(){
				uni.downloadFile({
					url: this.link,
					success: (res) => {
						if (res.statusCode === 200) {
							uni.showToast({
								icon: "none",
								title: "请稍后"
							})
							uni.saveImageToPhotosAlbum({
								filePath: res.tempFilePath,
								success: function () {
									uni.showToast({
										icon: "none",
										title: "保存成功，请微信打开扫一扫！"
									});
								}
							});
						}else{
							uni.showToast({
								icon: "none",
								title: "下载图片失败"
							})
						}
					}
				});
				
				
			}
		}
	};
</script>

<style lang="less">
	@import '../../../static/common.less';
	page{
		background-color: #fff;
	}


	* {
		font-family: @normal-text-font;
		font-size: 25upx !important;
	}

	h4 {
		font-size: 25upx !important;
	}
	
	.content, .container{
		overflow: hidden;
		height: 100%;
	}
	
	.content image{
		width: 100% !important;
		overflow: hidden;
	}
	
	.grace-footer{ 
		box-shadow: 0px 0px 0px #888;
	}
	
</style>
