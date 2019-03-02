import http from './interface'

/**
 * 将业务所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * 
 */


if(process.env.NODE_ENV === 'development'){
    console.log('开发环境')
	http.config.baseUrl = "https://329eac95-9679-4d84-8c01-4e6a679a24ec.mock.pstmn.io/"
}else{
    console.log('生产环境')
	http.config.baseUrl = "https://test.2stack.cn/"
}

// 单独导出(测试接口) import {test} from '@/common/vmeitime-http/'
export const get = (url, params) => {
	/* http.config.baseUrl = "http://localhost:8080/api/"
	//设置请求前拦截器
	http.interceptor.request = (config) => {
		config.header = {
			"token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
		}
	} */
	
	//设置请求结束后拦截器
	http.interceptor.response = (response) => {
		//判断返回状态 执行相应操作
		return response;
	}
    return http.get(url, params);
}

export const post = (url, params) => {
	/* http.config.baseUrl = "http://localhost:8080/api/"
	//设置请求前拦截器
	http.interceptor.request = (config) => {
		config.header = {
			"token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
		}
	} */
	//设置请求结束后拦截器
	http.interceptor.response = (response) => {
		//判断返回状态 执行相应操作
		return response;
	}
	return http.post(url, params);
}


 
// 默认全部导出  import api from '@/common/vmeitime-http/'
export default {
	get,
    post
}