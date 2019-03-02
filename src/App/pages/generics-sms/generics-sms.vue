<template>
	<view>
		<template v-if="shadeLoading">
			<!-- 加载动画页 -->
			<text class="loading-tips grace-animate pulse">亲，请不要离开哦……</text>
			<mht-loader :showImage="false" loadingType="jumping"></mht-loader>
		</template>
		<template v-else>
			<view class="blank-line-50"></view>
			<view class="blank-line-20"></view>
			<text class="header">输入验证码</text>
			<view class="blank-line-10"></view>
			<view class="blank-line-20"></view>
			<text class="desc">
				短信已发送至
				<text class="phone">+86{{ this.phone }}</text>
			</text>
			<view class="blank-line-50"></view>
			<view class="sms-code-container">
				<view class="sms-code-internal-container">
					<view class="sms-code-column">
						<template v-if="isActive1">
							<input
								:id="1"
								@tap="onTap"
								@input="onKeyDown"
								class="sms-code-char input-focus"
								maxlength="1"
								type="number"
								:focus="true"
								:value="getInputValue1"
							/>
						</template>
						<template v-else>
							<input
								:id="1"
								@tap="onTap"
								@input="onKeyDown"
								class="sms-code-char"
								maxlength="1"
								type="number"
								:value="getInputValue1"

							/>
						</template>
					</view>
					<view class="sms-code-column">
						<template v-if="isActive2">
							<input
								:id="2"
								@tap="onTap"
								@input="onKeyDown"
								class="sms-code-char input-focus"
								maxlength="1"
								type="number"
								:value="getInputValue2"
								:focus="true"
							/>
						</template>
						<template v-else>
							<input
								:id="2"
								@tap="onTap"
								@input="onKeyDown"
								class="sms-code-char"
								maxlength="1"
								type="number"
								:value="getInputValue2"

							/>
						</template>
					</view>
					<view class="sms-code-column">
						<template v-if="isActive3">
							<input
								:id="3"
								@tap="onTap"
								@input="onKeyDown"
								class="sms-code-char input-focus"
								maxlength="1"
								type="number"
								:value="getInputValue3"
								focus
							/>
						</template>
						<template v-else>
							<input
								:id="3"
								@tap="onTap"
								@input="onKeyDown"
								class="sms-code-char"
								maxlength="1"
								type="number"
								:value="getInputValue3"

							/>
						</template>
					</view>
					<view class="sms-code-column">
						<template v-if="isActive4">
							<input
								:id="4"
								@tap="onTap"
								@input="onKeyDown"
								class="sms-code-char input-focus"
								maxlength="1"
								type="number"
								:value="getInputValue4"
								focus
							/>
						</template>
						<template v-else>
							<input
								:id="4"
								@tap="onTap"
								@input="onKeyDown"
								class="sms-code-char"
								maxlength="1"
								type="number"
								:value="getInputValue4"

							/>
						</template>
					</view>
					<view class="sms-code-column">
						<template v-if="isActive5">
							<input
								:id="5"
								@tap="onTap"
								@input="onKeyDown"
								class="sms-code-char input-focus"
								maxlength="1"
								type="number"
								:value="getInputValue5"
								focus
							/>
						</template>
						<template v-else>
							<input
								:id="5"
								@tap="onTap"
								@input="onKeyDown"
								class="sms-code-char"
								maxlength="1"
								type="number"
								:value="getInputValue5"

							/>
						</template>
					</view>
					<view class="sms-code-column">
						<template v-if="isActive6">
							<input
								:id="6"
								@tap="onTap"
								@input="onKeyDown"
								class="sms-code-char input-focus"
								maxlength="1"
								type="number"
								:value="getInputValue6"
								focus
							/>
						</template>
						<template v-else>
							<input
								:id="6"
								@tap="onTap"
								@input="onKeyDown"
								class="sms-code-char"
								maxlength="1"
								type="number"
								:value="getInputValue6"
							/>
						</template>
					</view>
				</view>
			</view>
			<view v-if="countTimerShow" class="blank-line-50"></view>
			<view class="blank-line-20"></view>
			<text v-if="countTimerShow" class="tips">
				<text class="tips-time">{{ countDown }}s</text>
				后可重新获取
			</text>
			<view class="blank-line-50"></view>
			<button
				v-if="reGetButtonShow"
				class="reGetButton"
				hover-class="reGetButtonHover"
				:disabled="reGetButtonDisabled"
				@tap="reGetSms()"
			>
				<text>重新获取验证码</text>
			</button>
		</template>
	</view>
</template>

<script>
import mhtLoader from '@/components/mht-loader/mht-loader.vue';
import '../../graceUI/animate.css';

export default {
	name: 'generics-sms',
	data() {
		return {
			formName: '',
			success: '',
			changeValue: '',
			phone: '',
			delta: 1,

			codes: ['', '', '', '', ''],

			activeIndex: 0,

			shadeLoading: false,

			countTimerShow: true,
			countDown: 60,
			reGetButtonShow: false,
			reGetButtonDisabled: false,
			
			inputValue1: "",
			inputValue2: "",
			inputValue3: "",
			inputValue4: "",
			inputValue5: "",
			inputValue6: "",
		};
	},
	computed: {
		isActive1() {
			return this.activeIndex == 0;
		},
		isActive2() {
			return this.activeIndex == 1;
		},
		isActive3() {
			return this.activeIndex == 2;
		},
		isActive4() {
			return this.activeIndex == 3;
		},
		isActive5() {
			return this.activeIndex == 4;
		},
		isActive6() {
			return this.activeIndex == 5;
		},
		getInputValue1(){
			return this.inputValue1;
		},
		getInputValue2(){
			return this.inputValue2;
		},
		getInputValue3(){
			return this.inputValue3;
		},
		getInputValue4(){
			return this.inputValue4;
		},
		getInputValue5(){
			return this.inputValue5;
		},
		getInputValue6(){
			return this.inputValue6;
		},
	},
	components: {
		mhtLoader
	},
	onShow() {},
	onLoad(option) {
		this.formName = option.formName == null ? '' : option.formName;
		this.phone = option.phone == null ? '' : option.phone;
		this.success = option.success == null ? '' : option.success;
		this.changeValue = this.value;
		this.delta = option.delta == null ? 1 : option.delta;
		//倒计时
		setInterval(() => {
			if (this.countDown > 1) {
				this.countDown -= 1;
			} else {
				this.countTimerShow = false;
				this.reGetButtonShow = true;
				this.reGetButtonLoading = false;
			}
		}, 1000);
	},
	created() {
		this.appEvents.$on('close__sms__' + this.formName, () => {
			uni.navigateBack({
				delta: this.delta
			});
		});
	},
	destroyed() {
		this.appEvents.$off('close__sms__' + this.formName);
	},
	methods: {
		onKeyDown(event) {
			switch (parseInt(event.currentTarget.id)) {
				case 1:
					this.inputValue1 = event.detail.value;
					break;
				case 2:
					this.inputValue2 = event.detail.value;
					break;
				case 3:
					this.inputValue3 = event.detail.value;
					break;
				case 4:
					this.inputValue4 = event.detail.value;
					break;
				case 5:
					this.inputValue5 = event.detail.value;
					break;
				case 6:
					this.inputValue6 = event.detail.value;
					break;
			}

			if (event.detail.value != '') {
				let nextId = parseInt(event.currentTarget.id);
				let index = parseInt(nextId) + 1 - 1;
				let _self = this;
				this.codes[index] = event.detail.value;
				if (index == 6) {
					let code = '';
					_self.codes.map(c => (code += c));
					_self.shadeLoading = true;
					_self.activeIndex = 0;
					//验证短信验证码是否正确
					setTimeout(function() {
						_self.shadeLoading = false;
						console.log('sms_callback_' + 'onSMS' + _self.formName + 'Done');
						this.appEvents.$emit('onSMS' + _self.formName + 'Done', code);
					}, 1000);
					return;
				}
				this.activeIndex = index;
			} else {
				if (this.activeIndex >= 0) {
					let nextId = parseInt(event.currentTarget.id);
					let index = parseInt(nextId) - 1 - 1;
					if (index < 0) index = 0;
					this.activeIndex = index; 
				} else {
					this.activeIndex = 0;
				}
			} 
		},
		onTap(event) {
			let id = parseInt(event.currentTarget.id - 1);
			this.activeIndex = id;
		},
		reGetSms() {
			let _self = this;
			this.reGetButtonDownStyle = 'bounceIn';
			this.reGetButtonDisabled = true;
			setTimeout(() => {
				_self.reGetButtonDisabled = false;
				_self.reGetButtonShow = false;
				_self.countTimerShow = true;
				_self.countDown = 60;
			}, 1000);
		}
	}
};
</script>

<style lang="less">
@import '../../static/common.less';

page {
	background-color: #fff;
}

.header {
	display: flex;
	flex-direction: row;
	width: 100%;
	font-family: @common-font-zh;
	font-size: 26px;
	justify-content: center;
}

.desc {
	display: flex;
	flex-direction: row;
	width: 100%;
	font-family: @common-font-zh !important;
	font-size: 16px;
	justify-content: center;
}

.phone {
	margin-left: 10upx;
	font-size: 18px;
	font-family: @common-font-cn !important;
}

.sms-code-container {
	width: 100%;
}

.sms-code-internal-container {
	width: 80%;
	margin: 0 auto;
	padding-left: 40upx;
}

.sms-code-column {
	justify-content: center;
	display: inline-flex;
	flex-wrap: nowrap;
	align-items: center;
	width: 10%;
	height: 30upx;
	margin-right: 20px;
}

input {
	font-family: @common-font-cn !important;
	font-size: 24px;
	text-align: center;
	border-bottom: 4upx solid #757575;
	padding: 15upx;
}

.input-focus {
	border-bottom: 4upx solid #0f88ea !important;
}

.tips {
	display: flex;
	flex-direction: row;
	width: 100%;
	font-family: @common-font-zh !important;
	font-size: 15px;
	justify-content: center;
	color: #757575;
}

.tips-time {
	margin-right: 10upx !important;
	font-size: 15px !important;
	font-family: @common-font-cn !important;
}

.reGetButton {
	background-color: #0083fe;
	color: #fff;
	border-radius: 0px;
	width: 80%;
	border: 0px solid #fff !important;
}

.reGetButtonHover {
	opacity: 0.6;
	border: 0px solid #fff !important;
}

uni-button:after {
	border: 0px solid #fff !important;
}

.loading-tips {
	display: flex;
	position: relative;
	width: 100%;
	justify-content: center;
	top: 330upx;
	color: #949494;
}

.mht-loader {
	height: 65vh;
}
</style>
