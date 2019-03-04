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
				<view class="content">
					<block v-if="!exitsImage">
						<image :src="imageSrc" mode="widthFix"></image>
					</block>
				</view>
			</view>

			<view class="grace-footer">
				<view style="width:100%;">
					<button
						:style="{ backgroundColor: '#498FE1', color: '#fff' }"
						@tap="chooseImage()"
					>
						<text :style="{ marginLeft: '5px' }">选一张</text>
					</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import mhtLoader from '@/components/mht-loader/mht-loader.vue';
import articleBg from "@/components/stack-article-bg/stack-article-bg.vue";
import { pathToBase64, base64ToPath } from '@/utils/image-tools/index.js';

export default {
	components: {
		mhtLoader,
		articleBg
	},
	data() {
		return {
			loading: false,
			exitsImage: false,
			imageSrc: '../../../static/user/default-wechat.png',
			qrcodeUrl: 'https://u.wechat.com/ELRvx1Qqr0mUEcUWtwkjaP0'
		};
	},
	onLoad() {
		this.loading = true;
		setTimeout(() => {
			this.loading = false;
		}, 2000);
	},
	methods: {
		chooseImage() {
			uni.showToast({
				icon: 'none',
				title: '请稍后'
			});
			
			//选取图片
			uni.chooseImage({
				count: 1,
				success: res => {
					/* tempFilePaths	Array<String>	图片的本地文件路径列表
						tempFiles	Array<Object>	图片的本地文件列表，每一项是一个 File 对象
						
						File 对象结构如下

						参数	类型	说明
						path	String	本地文件路径
						size	Number	本地文件大小，单位：B */
						
						
					this.imageSrc = res.tempFilePaths[0];

					//获取base64编码发给后台
					pathToBase64(res.tempFilePaths[0])
						.then(base64 => {
							console.log(base64)
						})
						.catch(error => {
							uni.showToast({
								icon: 'none',
								title: '预览图片组件加载错误'
							});
						});
						
				}
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

.content,
.container {
	overflow: hidden;
	height: 100%;
	text-align: center;
	justify-content: center;
	justify-items: center;
}

.content image {
	margin: 0 auto;
	overflow: hidden;
}

.grace-footer {
	box-shadow: 0px 0px 0px #888;
}
</style>
