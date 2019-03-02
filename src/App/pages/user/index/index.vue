<template>
	<view>
		<preview></preview>
		<navigation></navigation>
		<list :hasLogin="isLogin"></list>
	</view>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import preview from './preview.vue';
import navigation from './navigation.vue';
import list from './list.vue';

export default {
	components: {
		preview: preview,
		navigation: navigation,
		list: list
	},
	data() {
		return {};
	},
	computed:{
		...mapState(['hasLogin', 'profile']),
		isLogin(){
			return this.hasLogin;
		}
	},
	methods:{
		...mapActions(['setProfile', 'authOpenWindow']),
	},
	onLoad() {
	},
	onShow(){
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
	}
};
</script>

<style lang="less">
@import '../../../static/common.less';
</style>
