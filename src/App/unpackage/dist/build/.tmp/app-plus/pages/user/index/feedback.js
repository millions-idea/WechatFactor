(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/index/feedback"],{"0389":function(e,t,s){"use strict";s("8441");var a=n(s("b0ce")),i=n(s("b373"));function n(e){return e&&e.__esModule?e:{default:e}}Page((0,a.default)(i.default))},"0e3d":function(e,t,s){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s={data:function(){return{msgContents:["界面显示错乱","启动缓慢，卡出翔了","UI无法直视，丑哭了","偶发性崩溃"],stars:[1,2,3,4,5],imageList:[],sendDate:{score:0,content:"",contact:""}}},onLoad:function(){var e={appid:plus.runtime.appid,imei:plus.device.imei,p:"Android"===plus.os.name?"a":"i",md:plus.device.model,app_version:plus.runtime.version,plus_version:plus.runtime.innerVersion,os:plus.os.version,net:""+plus.networkinfo.getCurrentType()};this.sendDate=Object.assign(e,this.sendDate)},methods:{close:function(e){this.imageList.splice(e,1)},chooseMsg:function(){var t=this;e.showActionSheet({itemList:this.msgContents,success:function(e){t.sendDate.content=t.msgContents[e.tapIndex]}})},chooseImg:function(){var t=this;e.chooseImage({sourceType:["camera","album"],sizeType:"compressed",count:8-this.imageList.length,success:function(e){t.imageList=t.imageList.concat(e.tempFilePaths)}})},chooseStar:function(e){this.sendDate.score=e},previewImage:function(){e.previewImage({urls:this.imageList})},send:function(){var t=this;console.log(JSON.stringify(this.sendDate));var s=this.imageList.map(function(e,t){return{name:"image"+t,uri:e}});e.uploadFile({url:"https://service.dcloud.net.cn/feedback",files:s,formData:this.sendDate,success:function(s){200===s.statusCode&&(e.showToast({title:"反馈成功!"}),t.imageList=[],t.sendDate={score:0,content:"",contact:""})},fail:function(t){e.showToast({title:"上传失败",icon:"none"}),console.log(t)}})}}};t.default=s}).call(this,s("649d")["default"])},"1d99":function(e,t,s){"use strict";s.r(t);var a=s("0e3d"),i=s.n(a);for(var n in a)"default"!==n&&function(e){s.d(t,e,function(){return a[e]})}(n);t["default"]=i.a},"6afd":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("view",{staticClass:"page"},[s("view",{staticClass:"feedback-title"},[s("text",[e._v("问题和意见")]),s("text",{staticClass:"feedback-quick",attrs:{eventid:"4c2afbe2-0"},on:{tap:e.chooseMsg}},[e._v("快速键入")])]),s("view",{staticClass:"feedback-body"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.sendDate.content,expression:"sendDate.content"}],staticClass:"feedback-textare",attrs:{placeholder:"请详细描述你的问题和意见...",eventid:"4c2afbe2-1"},domProps:{value:e.sendDate.content},on:{input:function(t){t.target.composing||(e.sendDate.content=t.target.value)}}})]),e._m(0),s("view",{staticClass:"feedback-body feedback-uploader"},[s("view",{staticClass:"uni-uploader"},[s("view",{staticClass:"uni-uploader-head"},[s("view",{staticClass:"uni-uploader-title"},[e._v("点击预览图片")]),s("view",{staticClass:"uni-uploader-info"},[e._v(e._s(e.imageList.length)+"/8")])]),s("view",{staticClass:"uni-uploader-body"},[s("view",{staticClass:"uni-uploader__files"},[e._l(e.imageList,function(t,a){return s("block",{key:a},[s("view",{staticClass:"uni-uploader__file",staticStyle:{position:"relative"}},[s("image",{staticClass:"uni-uploader__img",attrs:{src:t,eventid:"4c2afbe2-2-"+a},on:{tap:e.previewImage}}),s("view",{staticClass:"close-view",attrs:{eventid:"4c2afbe2-3-"+a},on:{tap:function(t){e.close(a)}}},[e._v("x")])])])}),s("view",{directives:[{name:"show",rawName:"v-show",value:e.imageList.length<8,expression:"imageList.length < 8"}],staticClass:"uni-uploader__input-box"},[s("view",{staticClass:"uni-uploader__input",attrs:{eventid:"4c2afbe2-4"},on:{tap:e.chooseImg}})])],2)])])]),e._m(1),s("view",{staticClass:"feedback-body"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.sendDate.contact,expression:"sendDate.contact"}],staticClass:"feedback-input",attrs:{placeholder:"(选填,方便我们联系你 )",eventid:"4c2afbe2-5"},domProps:{value:e.sendDate.contact},on:{input:function(t){t.target.composing||(e.sendDate.contact=t.target.value)}}})]),s("view",{staticClass:"feedback-title feedback-star-view"},[s("text",[e._v("应用评分")]),s("view",{staticClass:"feedback-star-view"},e._l(e.stars,function(t,a){return s("text",{key:a,staticClass:"feedback-star",class:a<e.sendDate.score?"active":"",attrs:{eventid:"4c2afbe2-6-"+a},on:{tap:function(s){e.chooseStar(t)}}})}))]),s("button",{staticClass:"feedback-submit",attrs:{type:"primary",eventid:"4c2afbe2-7"},on:{tap:e.send}},[e._v("提交")])],1)},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("view",{staticClass:"feedback-title"},[s("text",[e._v("图片(选填,提供问题截图,总大小10M以下)")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("view",{staticClass:"feedback-title"},[s("text",[e._v("QQ/邮箱")])])}];s.d(t,"a",function(){return a}),s.d(t,"b",function(){return i})},b373:function(e,t,s){"use strict";s.r(t);var a=s("6afd"),i=s("1d99");for(var n in i)"default"!==n&&function(e){s.d(t,e,function(){return i[e]})}(n);s("da6d");var c=s("2877"),o=Object(c["a"])(i["default"],a["a"],a["b"],!1,null,null,null);t["default"]=o.exports},c8c6:function(e,t,s){},da6d:function(e,t,s){"use strict";var a=s("c8c6"),i=s.n(a);i.a}},[["0389","common/runtime","common/vendor"]]]);