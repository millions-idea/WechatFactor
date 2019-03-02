export default{
	window: {
		toNew(name, params){ 
			let toUrl = "/pages/" + name;
			if(params != null) {
				toUrl += "?" + Object.keys(params).map(function (key) {
					return key + "=" + encodeURIComponent(params[key]);//encodeURIComponent
				}).join("&");;
			}
			uni.navigateTo({
				url: toUrl
			})
		}
	},
	
	String: {
		toUpperCaseFirst: (text) => {
			return text.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());  
		}
	}
}