(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3],{309:function(t,e,r){var content=r(313);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(60).default)("27445c54",content,!0,{sourceMap:!1})},310:function(t,e,r){var content=r(317);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(60).default)("6da7eb09",content,!0,{sourceMap:!1})},312:function(t,e,r){"use strict";r(309)},313:function(t,e,r){var n=r(59)((function(i){return i[1]}));n.push([t.i,".cube{background:#4d533c;color:#8b956d;text-shadow:2px 2px #1f1f1f}",""]),n.locals={},t.exports=n},315:function(t,e,r){"use strict";r.r(e);var n=r(347),c={},o=(r(312),r(69)),component=Object(o.a)(c,(function(){var t=this._self._c;return t(n.a,{staticClass:"cube"},[t("router-link",{attrs:{to:"/"}},[t("h2",{staticClass:"cube"},[this._v(" << ")])])],1)}),[],!1,null,null,null);e.default=component.exports},316:function(t,e,r){"use strict";r(310)},317:function(t,e,r){var n=r(59)((function(i){return i[1]}));n.push([t.i,".titleBar{border:3px solid #1f1f1f;box-shadow:3px 3px #4d533c}.cube,.titleBar{background:#4d533c;color:#8b956d}.cube{text-shadow:2px 2px #1f1f1f}",""]),n.locals={},t.exports=n},333:function(t,e,r){"use strict";r.r(e);var n=r(334),c=r(347),o={components:{returnBtn:r(315).default},props:{titleName:{type:Array,required:!0}}},l=(r(316),r(69)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e(c.a,{staticClass:"my-1 pa-2 mx-1 titleBar",attrs:{justify:"center",align:"center"}},[e(n.a,{attrs:{cols:"2"}},[e("returnBtn")],1),t._v(" "),e(n.a,{staticClass:"cube",attrs:{align:"center"}},[e("h2",{staticClass:"cube"},[t._v(t._s(t.titleName))])])],1)}),[],!1,null,null,null);e.default=component.exports},334:function(t,e,r){"use strict";r(26),r(28),r(39),r(40);var n=r(17),c=(r(8),r(151),r(24),r(25),r(46),r(318),r(44),r(319),r(321),r(322),r(323),r(324),r(325),r(326),r(327),r(328),r(329),r(330),r(331),r(332),r(45),r(71),r(27),r(52),r(218),r(0)),o=r(152),l=r(10);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O=["sm","md","lg","xl"],v=O.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=O.reduce((function(t,e){return t["offset"+Object(l.i)(e)]={type:[String,Number],default:null},t}),{}),j=O.reduce((function(t,e){return t["order"+Object(l.i)(e)]={type:[String,Number],default:null},t}),{}),h={col:Object.keys(v),offset:Object.keys(y),order:Object.keys(j)};function x(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var c=e.replace(t,"");n+="-".concat(c)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var m=new Map;e.a=c.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},j),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,c=e.children,l=(e.parent,"");for(var f in r)l+=String(r[f]);var d=m.get(l);if(!d){var O,v;for(v in d=[],h)h[v].forEach((function(t){var e=r[t],n=x(v,t,e);n&&d.push(n)}));var y=d.some((function(t){return t.startsWith("col-")}));d.push((O={col:!y||!r.cols},Object(n.a)(O,"col-".concat(r.cols),r.cols),Object(n.a)(O,"offset-".concat(r.offset),r.offset),Object(n.a)(O,"order-".concat(r.order),r.order),Object(n.a)(O,"align-self-".concat(r.alignSelf),r.alignSelf),O)),m.set(l,d)}return t(r.tag,Object(o.a)(data,{class:d}),c)}})}}]);