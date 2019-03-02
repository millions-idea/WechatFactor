<template>
	<view>
		<view class="grace-list">
			<navigator class="items" @tap="formOpenWindow('nickName')">
				<view class="title">
					<text class="head">名字</text>
					<text :class="['foot','black']">{{profile.nickName}}</text>
				</view>
				<view class="arrow-right"></view>
			</navigator>
			<navigator class="items" @tap="formOpenWindow('phone')">
				<view class="title">
					<text class="head">手机号</text>
					<text :class="getPhoneClassName">{{phone}}</text>
				</view>
				<view class="arrow-right"></view>
			</navigator>
			<navigator class="items" @tap="formOpenWindow('payment')">
				<view class="title">
					<text class="head">支付密码</text>
					<text :class="getPaymentClassName">{{payment}}</text>
				</view>
				<view class="arrow-right"></view>
			</navigator>
			<navigator class="items" @tap="common.window.toNew('user/index/wechat', null)">
				<view class="title">
					<text class="head">微信二维码</text>
					<text :class="getWechatClassName">{{wechat}}</text>
				</view>
				<view class="iconfont icon-qrcode"></view>
			</navigator>
		</view>
	</view>
</template>

<script>
	import {mapState,mapActions,mapMutations} from 'vuex'
	export default { 
		onLoad() {
			this.queryPhone();
			this.queryPayment();
			this.queryWechat(); 
		},
		computed: {
			...mapState(["hasLogin", "profile"]),
			getPhoneClassName(){
				return "foot " + this.phoneClassName;
			},
			getPaymentClassName(){
				return "foot " + this.paymentClassName;
			},
			getWechatClassName(){
				return "foot " + this.wechatClassName;
			}
		},
		methods:{
			...mapActions(['setProfile', 'login']),
			queryPhone(){
				if(this.profile.phone == null || this.profile.phone.length == 0){
					this.phoneClassName = "gray";
					this.phone = "点击绑定";
				}else{
					this.phoneClassName = "black";
					this.phone = this.profile.phone;
				}
			},
			queryPayment(){
				if(!this.profile.exitsPayment){
					this.paymentClassName = "gray";
					this.payment = "未设置";
				}else{
					this.paymentClassName = "green";
					this.payment = "账户安全保障中";
				}
			},
			queryWechat(){
				if(this.profile.wechat == null || this.profile.wechat.length == 0){
					this.wechatClassName = "gray";
					this.wechat = "未绑定";
				}else{
					this.wechatClassName = "gray";
					this.wechat = "点击查看";
				}
			},
			formOpenWindow(name){
				let formComponentName = "generics-form/generics-form";
				
				if(name == "nickName"){
					this.common.window.toNew(formComponentName, {
						formName: "nickName",
						title: "修改名字",
						topLabel: "2-24个字符，严禁出现违规内容，违者封号",
						value: this.profile.nickName,
						maxLength: 24,
						minLength: 2,
						success: "onNickNameChange"
					},)
				}else if(name == "phone"){
					this.common.window.toNew(formComponentName, {
						formName: "phone",
						title: "绑定手机号",
						topLabel: "每月限制换绑1次，需要接收短信验证码进行身份验证",
						bottomLabel: "为确保您账户的安全及正常使用，依《网络安全法》相关要求，6月1日起会员账户需绑定手机。如您还未绑定，请尽快完成，感谢您的理解及支持！ ",
						value: this.profile.phone,
						maxLength: 11,
						minLength: 11,
						success: "onPhoneChange",
						type: "number"
					},)
				}else if(name == "payment"){
					this.common.window.toNew("user/index/payment", {
						formName: "payment",
						title: "设置支付密码"
					},)
				}
			},
			onNickNameChange(data){ 
				this.appEvents.$emit("close__" + "nickName");
				console.log("您的名字已修改为" + data);
				setTimeout(()=> {
					uni.showToast({
						icon : "none",
						title : "名字修改成功"
					})
				},1000)
			},
			onPhoneChange(data){
				console.log(data)
				this.common.window.toNew("generics-sms/generics-sms", {
					formName: "bindPhone",
					phone: this.profile.phone,
					success: "onSMSbindPhoneDone"
				},)
			}, 
			onSMSbindPhoneDone(code){
				//appEvents.$emit("close__sms__" + "bindPhone")
				//appEvents.$emit("close__" + "phone")
				console.log(code);
					if(code != "123456"){
						uni.showToast({
							icon : "none",
							title : "验证码输入错误"
						})
				}
			}
		},
		created() {
			this.appEvents.$on("onNickNameChange", this.onNickNameChange);
			this.appEvents.$on("onPhoneChange", this.onPhoneChange);
			this.appEvents.$on("onBindPhoneSmsChange", this.onBindPhoneSmsChange);
			this.appEvents.$on("onSMSbindPhoneDone", this.onSMSbindPhoneDone);
		},
		destroyed() {
			this.appEvents.$off("onNickNameChange");
			this.appEvents.$off("onPhoneChange");
			this.appEvents.$off("onBindPhoneSmsChange");
			this.appEvents.$off("onSMSbindPhoneDone");
		},
		data() {
			return {
				avatar: '../../../static/user/default-avatar.png',
				phoneClassName: "",
				paymentClassName: "",
				wechatClassName: "",
				phone: "",
				payment: "",
				wechat: ""
			};
		} 
	};
</script>

<style lang="less">
	.grace-list .items .title .foot{
		float: none !important;
		margin-left: 100upx !important;
		font-size: 13px !important;
		color: #000000;
	}

	.grace-list .items .title {
		margin-left: 0px;
		color: #9A9A9A !important;
		font-size: 14px;
		border-bottom: 1px solid #f3f3f3 !important;
	}
	
	.black{
		color: #000000 !important;
	}
	
	.gray{
		color: #9A9A9A !important;
	}
	
	.green{
		color: #0EA295 !important;
	}
	
	.grace-list .items .title .head{
		width: 90upx;
		float: left;
	}
	
	.icon-qrcode{
		font-size: 19px;
		font-style: normal;
		height: 56px;
		line-height: 56px;
		text-align: center;
		width: 30px;
		position: absolute;
		z-index: 1;
		right: 0;
		top: 0;
		color: #B2B2B6;
	}
</style>
