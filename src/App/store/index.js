import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const localStore = {
	setValue(key, value, callback){
		try {
			uni.setStorageSync(key, value);
		} catch (e) {
			if(callback != null){
				callback(null);
			}
		}
	},
	getValue(key){
		try {
			const session = uni.getStorageSync(key);
			if (session) {
				return session;
			}
		} catch (e) {
			// error
			return null;
		}
	}
}

const api = {
	getProfile(callback) {
		Vue.prototype.$api
			.post('api/user/getProfile', {})
			.then(res => {
				try {
					if (res.data.code == 0) {
						if (res.data.msg != null) {
							return callback(res.data.msg);
						}
					}
				} catch (e) {
					//TODO handle the exception
				}
				return callback(null);
			})
			.catch(err => {
				return callback(null);
			});
	}
}

const store = new Vuex.Store({
	state: localStore.getValue('state') ? JSON.parse(localStore.getValue('state')) : {
		hasLogin: false,
		profile: {
			avatar: "../../../static/user/default-avatar.png",
			account: "",
			nickName: "",
			phone: "",
			exitsPayment: false,
			isVip: false,
			level: 0
		}
	},
	/* getters: {
		profile(state) {
			console.log("profile属性get方法被访问")

			let session = Vue.prototype.session.getSession();
			if (session == null) {
				console.log("session为空，获取接口数据")
				api.getProfile((res) => {
					if(res != null){
						Vue.prototype.session.setSession(res);
						state.profile.avatar = res.avatar;
						state.profile.account = res.account;
						state.profile.nickName = res.nickName;
						state.profile.phone = res.phone;
						state.profile.exitsPayment = res.exitsPayment;
						state.profile.isVip = res.isVip;
						state.profile.level = res.level;
						state.hasLogin = true;
						store.commit('setProfile', state.profile);
						return state.profile;
					}
					return null;
				})
			}else{
				//session = sessionStorage.getItem("_profile");
				//if(session == null || typeof(session) == undefined) return null;
				//session = JSON.parse(sessionStorage.getItem("_profile"));
				state.hasLogin = true;
				state.profile.avatar = session.avatar;
				state.profile.account = session.account;
				state.profile.nickName = session.nickName;
				state.profile.phone = session.phone;
				state.profile.exitsPayment = session.exitsPayment;
				state.profile.isVip = session.isVip;
				state.profile.level = session.level;
				store.commit('setProfile', state.profile);
				return state.profile;
			}
			return null;
		}
	}, */
	mutations: {
		setProfile(state, data) {
			//sessionStorage.setItem("_profile", JSON.stringify(data));
			state.hasLogin = true;
			state.profile = data;
		},
		login(state, data){
			//sessionStorage.setItem("_hasLogin", data);
			state.hasLogin = true;
		}
	},
	actions: {
		// 更新档案信息
		setProfile: (context, payload) => {
			context.commit('setProfile', payload);
		},

		// 登录
		login: (context, payload) => { 
			context.commit('login', payload);
		},

		// 打开登录模态窗口
		authOpenWindow: (context, payload) => {
			if (store.state.hasLogin) {
				Vue.prototype.common.window.toNew(payload, null);
			} else {
				Vue.prototype.common.window.toNew('user/login/login', null);
			}
		}
	}
})

export default store
