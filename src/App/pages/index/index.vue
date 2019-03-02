<template>
	<view class="content">
        <image class="logo" src="../../static/logo.png"></image>
		<view>
            <text class="title">{{title}}</text>
        </view>
	</view>
</template>

<script>
	import { mapState, mapActions } from 'vuex';
 
	export default {
		components:{
			
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			this.session.clearSession();
			this.session.clearState();
			let session = this.session.getSession();
			if (session == null) {
				console.log("加载用户信息")
				this.$api
					.post('api/user/getProfile', {})
					.then(res => {
						try {
							if (res.data.code == 0) {
								if (res.data.msg != null) {
									this.session.setSession(res.data.msg);
									this.setProfile(res.data.msg);
									return;
								}
							}
						} catch (e) {
							//TODO handle the exception
						}
						return;
					})
					.catch(err => {
						return;
					}); 
			} else {
				console.log("更新用户信息")
				this.setProfile(session);
			}
			
		},
		computed: {
			...mapState(['hasLogin', 'profile'])
		},
		methods: {
			...mapActions(['setProfile', 'authOpenWindow'])
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}
    .logo{
        height: 200upx;
        width: 200upx;
        margin-top: 200upx;
    }
	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
