<template>
	<view class="container">
		<uni-grid
			:data="[
				{ image: '../../../static/user/barrage_fill.png', text: '订单' },
				{ image: '../../../static/user/organization.png', text: '团队' },
				{ image: '../../../static/user/icon_shakehands_fill.png', text: '商学院' },
				{ image: '../../../static/user/icon_gather_fill.png', text: '提现' }
			]"
			show-border="false"
			column-num="4"
			@click="onClick"
		></uni-grid>
	</view>
</template>

<script>
import uniGrid from '@/components/uni-grid/uni-grid.user.vue';

export default {
	name: 'navigation',
	components: {
		uniGrid
	},
	props: {},
	data() {
		return {};
	},
	methods: {
		onClick(e) {
			switch (e.index) {
				case 0:
					this.common.window.toNew('user/order/index', null);
					break;
				case 1:
					this.common.window.toNew('user/bill', null);
					break;
				case 2:
					this.common.window.toNew('user/bill', null);
					break;
				case 3:
					this.common.window.toNew('user/bill', null);
					break;
			}
		}
	}
};
</script>

<style lang="less">
.container {
	min-height: 150upx;
	max-height: 150upx;
	height: 150upx;
	background-color: #fff;
}
</style>
