<template>
	<view>
		<view class="blank-line-50"></view>
		
		<!-- #ifdef APP-PLUS -->
		<view class="status_bar">  
			<view class="top_view">
			</view>  
			<uni-nav-bar left-icon="back" color="#808080" @click-left="backUp()"></uni-nav-bar>
		</view>  
		<!-- #endif -->
		
		<!-- #ifdef H5/MP -->
		<uni-nav-bar left-icon="back" color="#808080" @click-left="backUp()"></uni-nav-bar>
		<!-- #endif -->
		
		<!-- <view class="grace-padding top-group-info">
			<view class="grace-h4 grace-blod grace-center">我的账单</view>
			<view class="grace-box-banner" style="margin:30rpx 0;">
				<view class="garce-items" style="width:33%;">
					<view class="line1 amount">
						100001
						<text>元</text>
					</view>
					<view class="line2">我的资产</view>
				</view>
				<view class="garce-items" style="width:33%;">
					<view class="line1 amount">
						500
						<text>元</text>
					</view>
					<view class="line2">收入(月)</view>
				</view>
				<view class="garce-items" style="width:33%;">
					<view class="line1 amount">
						2000
						<text>元</text>
					</view>
					<view class="line2">支出(月)</view>
				</view>
			</view>
		</view> -->
		<template v-if="true">
			<scroll-view class="grace-tab-title grace-center" scroll-x="true" id="grace-tab-title">
				<view
					v-for="(tab, index) in tabs"
					:key="index"
					:class="[tabCurrentIndex == index ? 'grace-tab-current' : '']"
					:id="'tabTag-' + index"
					@tap="tabChange">
					{{ tab.name }}
				</view>
			</scroll-view>
			
			<template v-if="dataList.length == 0">
				<stackEmpty height="180" label="暂无数据"></stackEmpty>
			</template>
			
			<template v-else-if="tabCurrentIndex == 0 && dataList[0].length == 0">
				<swiper
					class="grace-tab-swiper-full"
					:current="swiperCurrentIndex"
					@change="swiperChange"
					:style="{ height: tabHeight + 'px' }">
					<swiper-item v-for="(list, listIndex) in dataList" :key="listIndex">
						<stackEmpty height="180" label="暂无交易数据"></stackEmpty>
					</swiper-item>
				</swiper>
			</template>
			
			<template v-else-if="tabCurrentIndex == 1 && dataList[1].length == 0">
				<swiper
					class="grace-tab-swiper-full"
					:current="swiperCurrentIndex"
					@change="swiperChange"
					:style="{ height: tabHeight + 'px' }">
					<swiper-item v-for="(list, listIndex) in dataList" :key="listIndex">
						<stackEmpty height="180" label="暂无提现数据"></stackEmpty>
					</swiper-item>
				</swiper>
			</template>
			
			<template v-else> 
				<swiper
					class="grace-tab-swiper-full"
					:current="swiperCurrentIndex"
					@change="swiperChange"
					:style="{ height: tabHeight + 'px' }">
					<!-- 循环新闻项目 -->
					<swiper-item v-for="(list, listIndex) in dataList" :key="listIndex">
						<scroll-view
							scroll-y="true"
							:data-scindex="listIndex"
							@scrolltolower="scrollend"
						>
							<view class="grace-list-list" style="padding:25upx; width:700upx;">
								<navigator @tap="showDetail(item)"  url="" v-for="(item, index) in list" :key="index">
									<view class="grace-list-list-items">
										<view class="left">
											<text class="desc">{{ item.shortDesc }}</text>
											<text class="date">{{ item.date }}</text>
										</view>
										<view class="right">
											<template v-if="item.type == 0">
												<view>
													<text class="add">+ {{ item.amount }}</text>
												</view>
											</template>
											<template v-else>
												<view>
													<text class="reduce">- {{ item.amount }}</text>
												</view>
											</template>
										</view>
									</view>
								</navigator>
							</view>
							<graceLoading :loadingType="tabs[listIndex].loadingType"></graceLoading>
						</scroll-view>
					</swiper-item>
				</swiper>
			</template>
		</template>
		
		
		
		<!-- detail -->
		<template v-if="isShowDetail">
			<view class="detail-view">
				<view class="trade-type bottom-gray-line">
					<template v-if="type==0">
						<text class="item-left item-label">入账金额</text>
						<text class="right amount add">{{amount}}</text>
					</template>
					<template v-else>
						<text class="item-left item-label">出账金额</text>
						<text class="right amount reduce">{{amount}}</text>
					</template>
					
				</view>
				<view class="detail bottom-gray-line">
					<view class="item">
						<text class="item-left item-label">类型</text>
						<template v-if="type==0">
							<text class="right type">收入</text>
						</template>
						<template v-else>
							<text class="right type">支出</text>
						</template>
					</view>
					<view class="item">
						<text class="item-left item-label">时间</text>
						<text class="right type date">{{date}}</text>
					</view>
					<view class="item">
						<text class="item-left item-label">交易单号</text>
						<text class="right type trade-id" selectable>{{id}}</text>
					</view>
					<view class="item">
						<text class="item-left item-label">剩余零钱</text>
						<text class="right type">{{balance}}</text>
					</view>
					<view class="item">
						<text class="item-left item-label">备注</text>
					</view>
					<view class="item">
						<text class="remarks type">
							{{desc}}
						</text>
					</view>
				</view>
			</view>
		</template>
	</view>
</template>
<script>
var _self;
var list = [
	{ desc: '公交代扣', date: '2019-3-3 19:35:22', type: 0, amount: '80000.00', id:"1000000000046565689898989", balance: "18235.00" },
	{ desc: '微信转账', date: '2019-3-3 19:35:22', type: 0, amount: '80000.00', id:"1000000000046565689898989", balance: "18235.00" },
	{ desc: '线下消费', date: '2019-3-3 19:35:22', type: 0, amount: '2000.00', id:"1000000000046565689898989", balance: "18235.00" },
	{ desc: '网购', date: '2019-3-3 19:35:22', type: 1, amount: '155.00', id:"1000000000046565689898989", balance: "18235.00" },
	{ desc: '充值', date: '2019-3-3 19:35:22', type: 1, amount: '88.00', id:"1000000000046565689898989", balance: "18235.00" },
	{ desc: '扫二维码付款', date: '2019-3-3 19:35:22', type: 0, amount: '60.00', id:"1000000000046565689898989", balance: "18235.00" },
	{ desc: '账号2407439-新会员邀请奖励金', date: '2019-3-3 19:35:22', type: 1, amount: '55.00', id:"1000000000046565689898989", balance: "18235.00" },
	{ desc: '公交代扣', date: '2019-3-3 19:35:22', type: 0, amount: '1000.00', id:"1000000000046565689898989", balance: "18235.00" },
	{ desc: '公交代扣', date: '2019-3-3 19:35:22', type: 1, amount: '1800.00', id:"1000000000046565689898989", balance: "18235.00" },
	{ desc: '公交代扣', date: '2019-3-3 19:35:22', type: 1, amount: '2.30', id:"1000000000046565689898989", balance: "18235.00" }
];
//对应下面3个标签的新闻内容数据
var dataList = [list, []];
import graceLoading from '@/graceUI/components/graceLoading.vue';
import stackEmpty from '@/components/stack-empty/stack-empty.vue';
import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue";

export default {
	data() {
		return {
			tabCurrentIndex: 0,
			swiperCurrentIndex: 0,
			tabHeight: 300,
			tabs: [
				//标签名称 , 分类 id , 加载更多, 加载的页码
				{ name: '交易流水', id: 'liushui', loadingType: 0, page: 1 },
				{ name: '提现申请', id: 'tixian', loadingType: 0, page: 1 }
			],
			dataList: dataList,
			
			
			desc: "",
			date: "",
			type: 0,
			amount : "",
			id: "",
			balance: "",
			isShowDetail: false,
			
			
			scrollTop: 0
		};
	},
	onLoad: function() {
		_self = this;
		this.dataList.forEach(d => {
			d.forEach(item => {
				if(item.desc.length > 12){
					item.shortDesc = this.common.String.textLimit(item.desc, 12);
				}else{
					item.shortDesc = item.desc;
				}
			})
		})
	},
	onReady: function() {
		//获取屏幕高度及比例
		var winInfo = uni.getSystemInfo({
			success: function(res) {
				var windowHeight = res.windowHeight;
				//获取头部标题高度
				var dom = uni.createSelectorQuery().select('#grace-tab-title');
				dom.fields({ size: true }, res2 => {
					if (!res2) {
						return;
					}
					//计算得出滚动区域的高度
					_self.tabHeight = windowHeight - res2.height;
				}).exec();
				
				
				dom = uni.createSelectorQuery().select('.uni-navbar');
				dom.fields({ size: true }, res2 => {
					if (!res2) {
						return;
					}
					_self.tabHeight = _self.tabHeight - (res2.height + 20);
				}).exec();
			}
		});
	},
	watch: {
		isShowDetail(newValue){
			if(newValue){
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 0
				})
			}
		}
	},
	onPageScroll(e){
		if(this.isShowDetail){
			uni.pageScrollTo({
				scrollTop: 0,
				duration: 300
			})
		}
	},
	onBackPress(){
		if(this.isShowDetail){
			this.isShowDetail = false;
			return true;
		}
		return false;
	},
	methods: {
		tabChange: function(e) {
			var index = e.target.id.replace('tabTag-', '');
			this.swiperCurrentIndex = index;
			this.tabCurrentIndex = index;
		},
		swiperChange: function(e) {
			var index = e.detail.current;
			this.tabCurrentIndex = index;
			console.log("当前tabCurrentIndex" + this.tabCurrentIndex)
		},
		//每个选项滚动到底部
		scrollend: function(e) {
			//获取是哪个选项滚动到底？
			var index = e.currentTarget.dataset.scindex;
			console.log(index);
			//可以利用 tabs 携带的分类id 与服务器交互请求对应分类的数据
			console.log(this.tabs[index].id);
			//加载更多的演示
			//判断当前是否正在加载
			if (this.tabs[index].loadingType === 1) {
				return false;
			}
			//判断是否是最后一页
			console.log(this.tabs[index].page);
			if (this.tabs[index].page > 3) {
				this.tabs[index].loadingType = 2; //全部
				return;
			}
			this.tabs[index].loadingType = 1; //加载中
			//模拟延迟
			setTimeout(function() {
				_self.dataList[index] = _self.dataList[index].concat(list);
				//分页
				_self.tabs[index].page++;
				_self.tabs[index].loadingType = 0; //恢复加载状态
				//
			}, 1000);
		},
		showDetail(obj){
			this.id = obj.id,
			this.desc = obj.desc,
			this.date = obj.date,
			this.type = obj.type,
			this.amount = obj.amount,
			this.balance = obj.balance;
			this.isShowDetail = true; 
		},
		backUp(){
			if(this.isShowDetail){
				this.isShowDetail = false;
			}else{
				uni.navigateBack({
					delta: 1
				})
			}
		}
	},
	components: {
		graceLoading,
		stackEmpty,
		uniNavBar
	}
};
</script>
<style lang="less">
@import '../../../static/common.less';
page {
	background-color: #ffffff;
}

.grace-tab-current {
	border-bottom: 2px solid #2296ea !important;
	color: #309deb;
}

.grace-tab-title {
	white-space: nowrap;
	text-align: center;
	background: #fff;
}

.grace-box-banner {
	/* background: #f3fbff; */
}

.amount {
	font-family: @common-font-num;
	color: #2296ea;
	font-size: 30px;
}

.grace-list-list-items {
	border-bottom: 1px solid #e6e6e6;
	width: 100%;
	height: 150upx;
	line-height: 150upx;
	display: flex;
}

.left {
	float: left;
}

.right {
	position: absolute;
	right: 30upx;
	text-align: right;
	justify-content: right;
	justify-items: right;
}

.left .desc,
.left .date {
	display: flex;
}

.left .desc {
	color: #000;
	font-size: 15px;
	height: 25px;
	font-weight: bold;
}
.left .date {
	color: #767676;
	font-size: 12px;
}

.right .add,
.right .reduce {
	font-size: 20px;
	font-family: @common-font-cn;
}

.right .add {
	color: #03bc01;
}

.right .reduce {
	color: #000;
}

.top-group-info{
	position: fixed;
	top: 0px;
}


page{
	font-family: @common-font-cn;
}

.detail-view{
	background-color: #fff;
	z-index: 9999;
	position: absolute;
	top: 60px;
	left: 0px;
	width: 100%;
	height: 100%;
}


/* #ifdef H5 */
.detail-view{
	top: 60px;
}
/* #endif */


/* #ifdef APP-PLUS */
.detail-view{
	top: 60px;
}
/* #endif */


.bottom-gray-line{
	border-bottom: 1px solid #C9C7C4;
}

.item-left{
	position: absolute;
	left: 20upx !important;
	
	justify-content: left !important;
	text-align: left !important;
	justify-items: left !important; 
}

.detail .right{
	position: absolute;
	right: 20upx;
}

.trade-type{
	height: 100upx;
	line-height: 100upx;
	padding: 20upx;
}

.amount{
	font-size: 35px;
	color:#000;
	font-family: @common-font-num;
}

.detail{
	height: 350upx;
	line-height: 350upx;
	padding: 20upx;
	padding-top: 50upx;
}

.item{
	display: flex;
	height: 50upx;
	line-height: 50upx;
	overflow: hidden;
	margin-bottom: 10upx;
}

.remarks-item{
	display: flex;
	height: 150upx;
	line-height: 150upx;
	overflow: hidden;
	margin-bottom: 10upx;
}

.item-label{
	color: #888888;
	position: absolute;
	left: 20upx;
}

.date{
	font-size: 18px;
}

.trade-id{
	font-size: 12px;
}

.add{
	color: #03BC01;
}

.reduce{
	color: #000;
}

.remarks{
	display: flex;
	font-size: 12px;
	color: #c7c7c7;
	justify-content: right;
	text-align: right;
	justify-items: right;
	position: absolute;
	right: 20upx;
}

.uni-navbar-shadow{
    box-shadow: 0 0px 0px #ccc;
}

.uni-icon .uni-icon-back, .uni-navbar .uni-view{ 
	color: #a5a5a5 !important;
}


.status_bar {  
    height: var(--status-bar-height);  
    width: 100%;  
    background-color: #fff;  
}  
.top_view {  
    height: var(--status-bar-height);  
    width: 100%;  
    position: fixed;  
    background-color: #fff;  
    top: 0;  
    z-index: 999;  
}  
</style>
