(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/index/privacy"],{"193b":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[t.loading?n("view",[n("mht-loader",{attrs:{showImage:!1,loadingType:"jumping",mpcomid:"726bd8ea-0"}})],1):n("view",[n("article-bg",{attrs:{iconName:"icon-icon_scan_namecard",mpcomid:"726bd8ea-1"}}),n("view",{style:{padding:"40px"}},[n("view",[n("rich-text",{attrs:{nodes:t.html,mpcomid:"726bd8ea-2"}})],1)])],1)])},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},"1dfc":function(t,e,n){"use strict";var a=n("f09b"),i=n.n(a);i.a},4672:function(t,e,n){"use strict";n("8441");var a=r(n("b0ce")),i=r(n("e8ac"));function r(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},"60c9":function(t,e,n){"use strict";n.r(e);var a=n("80e0"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=i.a},"80e0":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("a4bc")),i=r(n("7e79"));function r(t){return t&&t.__esModule?t:{default:t}}var u={components:{mhtLoader:a.default,articleBg:i.default},data:function(){return{loading:!1,html:""}},onLoad:function(){this.getStandard()},methods:{getStandard:function(){var t=this;this.loading=!0;this.$api.get("/api/getPrivacyStandard",{}).then(function(e){t.loading=!1,t.html=e.data.msg})}}};e.default=u},e8ac:function(t,e,n){"use strict";n.r(e);var a=n("193b"),i=n("60c9");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("1dfc");var u=n("2877"),o=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=o.exports},f09b:function(t,e,n){}},[["4672","common/runtime","common/vendor"]]]);