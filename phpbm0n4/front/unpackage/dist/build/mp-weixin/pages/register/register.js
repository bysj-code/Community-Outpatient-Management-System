(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"43bea":function(e,n,t){"use strict";var r=t("b311"),i=t.n(r);i.a},"4a67":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(t("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function u(e,n,t,r,i,u,a){try{var o=e[u](a),s=o.value}catch(l){return void t(l)}o.done?n(s):Promise.resolve(s).then(r,i)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function o(e){u(a,r,i,o,s,"next",e)}function s(e){u(a,r,i,o,s,"throw",e)}o(void 0)}))}}var o={data:function(){return{yonghuxingbieOptions:[],yonghuxingbieIndex:0,yishengxingbieOptions:[],yishengxingbieIndex:0,ruleForm:{},emailcode:"",tableName:""}},onLoad:function(){var n=this;return a(r.default.mark((function t(){var i;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:[],i=e.getStorageSync("loginTable"),n.tableName=i,"yonghu"==n.tableName&&(n.yonghuxingbieOptions="男,女".split(","),n.ruleForm.xingbie=n.yonghuxingbieOptions[0]),"yisheng"==n.tableName&&(n.yishengxingbieOptions="男,女".split(","),n.ruleForm.xingbie=n.yishengxingbieOptions[0]),n.styleChange();case 6:case"end":return t.stop()}}),t)})))()},methods:{yonghuxingbieChange:function(e){this.yonghuxingbieIndex=e.target.value,this.ruleForm.xingbie=this.yonghuxingbieOptions[this.yonghuxingbieIndex]},yishengxingbieChange:function(e){this.yishengxingbieIndex=e.target.value,this.ruleForm.xingbie=this.yishengxingbieOptions[this.yishengxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=this;return a(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.zhanghao||"yonghu"!=e.tableName){n.next=3;break}return e.$utils.msg("账号不能为空"),n.abrupt("return");case 3:if(e.ruleForm.mima||"yonghu"!=e.tableName){n.next=6;break}return e.$utils.msg("密码不能为空"),n.abrupt("return");case 6:if("yonghu"!=e.tableName||e.ruleForm.mima==e.ruleForm.mima2){n.next=9;break}return e.$utils.msg("两次密码输入不一致"),n.abrupt("return");case 9:if(e.ruleForm.xingming||"yonghu"!=e.tableName){n.next=12;break}return e.$utils.msg("姓名不能为空"),n.abrupt("return");case 12:if("yonghu"!=e.tableName||!e.ruleForm.shouji||e.$validate.isMobile(e.ruleForm.shouji)){n.next=15;break}return e.$utils.msg("手机应输入手机格式"),n.abrupt("return");case 15:if(e.ruleForm.yishengbianhao||"yisheng"!=e.tableName){n.next=18;break}return e.$utils.msg("医生编号不能为空"),n.abrupt("return");case 18:if(e.ruleForm.mima||"yisheng"!=e.tableName){n.next=21;break}return e.$utils.msg("密码不能为空"),n.abrupt("return");case 21:if("yisheng"!=e.tableName||e.ruleForm.mima==e.ruleForm.mima2){n.next=24;break}return e.$utils.msg("两次密码输入不一致"),n.abrupt("return");case 24:if(e.ruleForm.yishengxingming||"yisheng"!=e.tableName){n.next=27;break}return e.$utils.msg("医生姓名不能为空"),n.abrupt("return");case 27:if("yisheng"!=e.tableName||!e.ruleForm.shouji||e.$validate.isMobile(e.ruleForm.shouji)){n.next=30;break}return e.$utils.msg("手机应输入手机格式"),n.abrupt("return");case 30:return n.next=32,e.$api.register("".concat(e.tableName),e.ruleForm,e.emailcode);case 32:e.$utils.msgBack("注册成功");case 34:case"end":return n.stop()}}),n)})))()}}};n.default=o}).call(this,t("543d")["default"])},"4c01":function(e,n,t){"use strict";t.r(n);var r=t("67cd"),i=t("6925");for(var u in i)"default"!==u&&function(e){t.d(n,e,(function(){return i[e]}))}(u);t("43bea"),t("5ece");var a,o=t("f0c5"),s=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"11b70900",null,!1,r["a"],a);n["default"]=s.exports},"5ece":function(e,n,t){"use strict";var r=t("a09e"),i=t.n(r);i.a},"67cd":function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return r}));var i=function(){var e=this,n=e.$createElement;e._self._c},u=[]},6925:function(e,n,t){"use strict";t.r(n);var r=t("4a67"),i=t.n(r);for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);n["default"]=i.a},a09e:function(e,n,t){},b311:function(e,n,t){},df3f:function(e,n,t){"use strict";(function(e){t("7f01");r(t("66fd"));var n=r(t("4c01"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])}},[["df3f","common/runtime","common/vendor"]]]);