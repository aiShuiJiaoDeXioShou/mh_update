(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-give-give"],{"02f9":function(t,e,i){var a=i("6c24");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("967d").default;n("1d8083cf",a,!0,{sourceMap:!1,shadowMode:!1})},"0d30":function(t,e,i){var a=i("802f");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("967d").default;n("72d13f7c",a,!0,{sourceMap:!1,shadowMode:!1})},"330b":function(t,e,i){"use strict";i.r(e);var a=i("75aa"),n=i("f955");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("54f0");var r=i("828b"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"1009c249",null,!1,a["a"],void 0);e["default"]=s.exports},"54f0":function(t,e,i){"use strict";var a=i("0d30"),n=i.n(a);n.a},"6c24":function(t,e,i){var a=i("c86c");e=a(!1),e.push([t.i,"uni-page-body[data-v-3454924a]{background-color:#f3f8fc}body.?%PAGE?%[data-v-3454924a]{background-color:#f3f8fc}.bill-text1[data-v-3454924a]{width:40%}.bill-text2[data-v-3454924a]{text-overflow:ellipsis;overflow:hidden;height:20px;line-height:20px}.wrap[data-v-3454924a]{padding:%?20?%;box-sizing:border-box;\n\t/* max-height: calc(100vh - 300rpx); */overflow:hidden;overflow-y:auto}.top[data-v-3454924a]{background:url(https://img.alicdn.com/imgextra/i3/2215984279448/O1CN01r6ian22JfEvQvErG0_!!2215984279448.png);background-size:100%;display:flex;align-items:center;text-align:center;height:%?200?%;justify-content:center;color:#fff}.num[data-v-3454924a]{font-weight:700;font-size:%?46?%;margin-top:%?20?%}.billbox[data-v-3454924a]{margin-top:%?20?%}.billList .list[data-v-3454924a]{margin-top:%?10?%;background-color:#fff;border-radius:%?4?%;padding:%?20?%;box-sizing:border-box}.list .tit[data-v-3454924a]{padding-bottom:%?20?%;border-bottom:%?1?% solid #efefef}.bill[data-v-3454924a]{padding:%?30?% 0 %?10?%}.bill .shu[data-v-3454924a]{color:#05b2b5;font-weight:700}.btn[data-v-3454924a]{width:%?710?%;position:absolute;left:%?20?%;bottom:%?40?%;background-color:#2ac2b3;color:#fff}",""]),t.exports=e},"75aa":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={uIcon:i("d532").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("v-uni-view",{staticClass:"u-empty",style:{marginTop:t.marginTop+"rpx"}},[i("u-icon",{attrs:{name:t.src?t.src:"empty-"+t.mode,"custom-style":t.iconStyle,label:t.text?t.text:t.icons[t.mode],"label-pos":"bottom","label-color":t.color,"label-size":t.fontSize,size:t.iconSize,color:t.iconColor,"margin-top":"14"}}),i("v-uni-view",{staticClass:"u-slot-wrap"},[t._t("bottom")],2)],1):t._e()},o=[]},"7d4b":function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c223");var a={data:function(){return{title:"",page:1,num:"0",list:[],show:!0}},onReachBottom:function(){this.list.length<10*this.page||(this.page++,this.get_prize_logs(),console.log("触底"))},onLoad:function(t){this.title="转赠明细",this.get_prize_logs()},methods:{get_prize_logs:function(){var t=this;uni.getStorageSync("user")&&this.$http({url:"api/member/prize_log",data:{page:this.page}}).then((function(e){console.log(e,""),1==e.data.code&&(0==e.data.data.list.length?t.show=!0:t.show=!1,t.list=t.list.concat(e.data.data.list),t.num=e.data.data.num)})).catch((function(t){}))}}};e.default=a},"802f":function(t,e,i){var a=i("c86c");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-empty[data-v-1009c249]{display:flex;flex-direction:row;flex-direction:column;justify-content:center;align-items:center;height:100%}.u-image[data-v-1009c249]{margin-bottom:%?20?%}.u-slot-wrap[data-v-1009c249]{display:flex;flex-direction:row;justify-content:center;align-items:center;margin-top:%?20?%}',""]),t.exports=e},"8b50":function(t,e,i){"use strict";var a=i("02f9"),n=i.n(a);n.a},"8f88":function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("64aa");var a={name:"u-empty",props:{src:{type:String,default:""},text:{type:String,default:""},color:{type:String,default:"#c0c4cc"},iconColor:{type:String,default:"#c0c4cc"},iconSize:{type:[String,Number],default:120},fontSize:{type:[String,Number],default:26},mode:{type:String,default:"data"},imgWidth:{type:[String,Number],default:120},imgHeight:{type:[String,Number],default:"auto"},show:{type:Boolean,default:!0},marginTop:{type:[String,Number],default:0},iconStyle:{type:Object,default:function(){return{}}}},data:function(){return{icons:{car:"购物车为空",page:"页面不存在",search:"没有搜索结果",address:"没有收货地址",wifi:"没有WiFi",order:"订单为空",coupon:"没有优惠券",favor:"暂无收藏",permission:"无权限",history:"无历史记录",news:"无新闻列表",message:"消息列表为空",list:"列表为空",data:"数据为空"}}}};e.default=a},b455:function(t,e,i){"use strict";i.r(e);var a=i("eb6a"),n=i("c524");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("8b50");var r=i("828b"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"3454924a",null,!1,a["a"],void 0);e["default"]=s.exports},c524:function(t,e,i){"use strict";i.r(e);var a=i("7d4b"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},eb6a:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={uNavbar:i("bd30").default,uEmpty:i("330b").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("u-navbar",{attrs:{title:t.title}}),i("v-uni-view",{staticClass:"wrap"},[i("v-uni-view",{staticClass:"billbox"},[i("v-uni-view",{staticClass:"title"},[t._v("转赠明细")])],1),i("v-uni-view",{staticClass:"billList"},t._l(t.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"list"},[i("v-uni-view",{staticClass:"tit"},[t._v(t._s(e.create_time))]),i("v-uni-view",{staticClass:"bill n-flex-row n-justify-between"},[i("v-uni-view",{staticClass:"bill-text"},[i("v-uni-view",[t._v(t._s(e.give_uid+"-"+e.give_nickname+"转赠给"+e.receive_uid+"-"+e.receive_nickname))]),i("v-uni-view",{staticClass:"bill-text2"},[t._v(t._s(e.goods_data.title))])],1),i("v-uni-view",{staticClass:"shu"},[t._v(t._s(e.goods_data.price))])],1)],1)})),1)],1),i("u-empty",{attrs:{text:"暂无记录",mode:"list",show:t.show,"margin-top":"200"}})],1)},o=[]},f955:function(t,e,i){"use strict";i.r(e);var a=i("8f88"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a}}]);