(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chufangxinxi/add-or-update"],{"05cc":function(n,e,a){},"1cb2":function(n,e,a){"use strict";var t=a("05cc"),r=a.n(t);r.a},2460:function(n,e,a){"use strict";(function(n){a("7f01");t(a("66fd"));var e=t(a("ba9c"));function t(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,a("543d")["createPage"])},"3fc1":function(n,e,a){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=r(a("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function i(n,e,a,t,r,i,u){try{var o=n[i](u),c=o.value}catch(s){return void a(s)}o.done?e(c):Promise.resolve(c).then(t,r)}function u(n){return function(){var e=this,a=arguments;return new Promise((function(t,r){var u=n.apply(e,a);function o(n){i(u,t,r,o,c,"next",n)}function c(n){i(u,t,r,o,c,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(function(){return resolve(a("3152"))}.bind(null,a)).catch(a.oe)},c={data:function(){return{cross:"",ruleForm:{yaopinmingcheng:"",yaopinguige:"",fuyaocishu:"",fuyaojiliang:"",zhuyishixiang:"",yaopintupian:"",zhanghao:"",xingming:"",yishengbianhao:"",yishengxingming:"",userid:""},zhanghaoOptions:[],zhanghaoIndex:0,user:{},ro:{yaopinmingcheng:!1,yaopinguige:!1,fuyaocishu:!1,fuyaojiliang:!1,zhuyishixiang:!1,yaopintupian:!1,zhanghao:!1,xingming:!1,yishengbianhao:!1,yishengxingming:!1,userid:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var a=this;return u(t.default.mark((function r(){var i,u,o,c;return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i=n.getStorageSync("nowTable"),r.next=3,a.$api.session(i);case 3:return u=r.sent,a.user=u.data,a.ruleForm.yishengbianhao=a.user.yishengbianhao,a.ro.yishengbianhao=!0,a.ruleForm.yishengxingming=a.user.yishengxingming,a.ro.yishengxingming=!0,r.next=11,a.$api.option("yonghu","zhanghao",{});case 11:if(u=r.sent,a.zhanghaoOptions=u.data,a.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(a.ruleForm.refid=e.refid,a.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){r.next=21;break}return a.ruleForm.id=e.id,r.next=19,a.$api.info("chufangxinxi",a.ruleForm.id);case 19:u=r.sent,a.ruleForm=u.data;case 21:if(a.cross=e.cross,!e.cross){r.next=73;break}o=n.getStorageSync("crossObj"),r.t0=t.default.keys(o);case 25:if((r.t1=r.t0()).done){r.next=73;break}if(c=r.t1.value,"yaopinmingcheng"!=c){r.next=31;break}return a.ruleForm.yaopinmingcheng=o[c],a.ro.yaopinmingcheng=!0,r.abrupt("continue",25);case 31:if("yaopinguige"!=c){r.next=35;break}return a.ruleForm.yaopinguige=o[c],a.ro.yaopinguige=!0,r.abrupt("continue",25);case 35:if("fuyaocishu"!=c){r.next=39;break}return a.ruleForm.fuyaocishu=o[c],a.ro.fuyaocishu=!0,r.abrupt("continue",25);case 39:if("fuyaojiliang"!=c){r.next=43;break}return a.ruleForm.fuyaojiliang=o[c],a.ro.fuyaojiliang=!0,r.abrupt("continue",25);case 43:if("zhuyishixiang"!=c){r.next=47;break}return a.ruleForm.zhuyishixiang=o[c],a.ro.zhuyishixiang=!0,r.abrupt("continue",25);case 47:if("yaopintupian"!=c){r.next=51;break}return a.ruleForm.yaopintupian=o[c],a.ro.yaopintupian=!0,r.abrupt("continue",25);case 51:if("zhanghao"!=c){r.next=55;break}return a.ruleForm.zhanghao=o[c],a.ro.zhanghao=!0,r.abrupt("continue",25);case 55:if("xingming"!=c){r.next=59;break}return a.ruleForm.xingming=o[c],a.ro.xingming=!0,r.abrupt("continue",25);case 59:if("yishengbianhao"!=c){r.next=63;break}return a.ruleForm.yishengbianhao=o[c],a.ro.yishengbianhao=!0,r.abrupt("continue",25);case 63:if("yishengxingming"!=c){r.next=67;break}return a.ruleForm.yishengxingming=o[c],a.ro.yishengxingming=!0,r.abrupt("continue",25);case 67:if("userid"!=c){r.next=71;break}return a.ruleForm.userid=o[c],a.ro.userid=!0,r.abrupt("continue",25);case 71:r.next=25;break;case 73:a.styleChange();case 74:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},zhanghaoChange:function(n){var e=this;return u(t.default.mark((function a(){var r;return t.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.zhanghaoIndex=n.target.value,e.ruleForm.zhanghao=e.zhanghaoOptions[e.zhanghaoIndex],a.next=4,e.$api.follow("yonghu","zhanghao",{columnValue:e.ruleForm.zhanghao});case 4:r=a.sent,r.data.xingming&&(e.ruleForm.xingming=r.data.xingming);case 6:case"end":return a.stop()}}),a)})))()},yaopintupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.yaopintupian="upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return u(t.default.mark((function a(){var r,i,u,o,c,s,g,f,h,l;return t.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!e.cross){a.next=16;break}if(o=n.getStorageSync("statusColumnName"),c=n.getStorageSync("statusColumnValue"),""==o){a.next=16;break}if(s=n.getStorageSync("crossObj"),o.startsWith("[")){a.next=12;break}for(g in s)g==o&&(s[g]=c);return f=n.getStorageSync("crossTable"),a.next=10,e.$api.update("".concat(f),s);case 10:a.next=16;break;case 12:r=Number(n.getStorageSync("userid")),i=s["id"],u=n.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 16:if(!i||!r){a.next=38;break}return e.ruleForm.crossuserid=r,e.ruleForm.crossrefid=i,h={page:1,limit:10,crossuserid:r,crossrefid:i},a.next=22,e.$api.list("chufangxinxi",h);case 22:if(l=a.sent,!(l.data.total>=u)){a.next=28;break}return e.$utils.msg(n.getStorageSync("tips")),a.abrupt("return",!1);case 28:if(!e.ruleForm.id){a.next=33;break}return a.next=31,e.$api.update("chufangxinxi",e.ruleForm);case 31:a.next=35;break;case 33:return a.next=35,e.$api.add("chufangxinxi",e.ruleForm);case 35:e.$utils.msgBack("提交成功");case 36:a.next=46;break;case 38:if(!e.ruleForm.id){a.next=43;break}return a.next=41,e.$api.update("chufangxinxi",e.ruleForm);case 41:a.next=45;break;case 43:return a.next=45,e.$api.add("chufangxinxi",e.ruleForm);case 45:e.$utils.msgBack("提交成功");case 46:case"end":return a.stop()}}),a)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,a=e.getFullYear(),t=e.getMonth()+1,r=e.getDate();return"start"===n?a-=60:"end"===n&&(a+=2),t=t>9?t:"0"+t,r=r>9?r:"0"+r,"".concat(a,"-").concat(t,"-").concat(r)},toggleTab:function(n){this.$refs[n].show()}}};e.default=c}).call(this,a("543d")["default"])},"9d94":function(n,e,a){"use strict";a.r(e);var t=a("3fc1"),r=a.n(t);for(var i in t)"default"!==i&&function(n){a.d(e,n,(function(){return t[n]}))}(i);e["default"]=r.a},ba9c:function(n,e,a){"use strict";a.r(e);var t=a("d35f"),r=a("9d94");for(var i in r)"default"!==i&&function(n){a.d(e,n,(function(){return r[n]}))}(i);a("1cb2");var u,o=a("f0c5"),c=Object(o["a"])(r["default"],t["b"],t["c"],!1,null,"92b39e06",null,!1,t["a"],u);e["default"]=c.exports},d35f:function(n,e,a){"use strict";var t;a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return t}));var r=function(){var n=this,e=n.$createElement;n._self._c},i=[]}},[["2460","common/runtime","common/vendor"]]]);