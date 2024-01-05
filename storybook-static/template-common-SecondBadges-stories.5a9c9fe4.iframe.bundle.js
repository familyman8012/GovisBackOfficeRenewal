(self.webpackChunkgovis_renewal=self.webpackChunkgovis_renewal||[]).push([[9162],{"./component/template/common/SecondBadges.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>SecondBadges_stories});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),StoryLayout=__webpack_require__("./component/modules/story_layout/StoryLayout.tsx"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),dayjs_min=__webpack_require__("./node_modules/dayjs/dayjs.min.js"),dayjs_min_default=__webpack_require__.n(dayjs_min),Badge=__webpack_require__("./component/atom/Badge/Badge.tsx"),Tooltip=__webpack_require__("./component/atom/Tooltip/Tooltip.tsx"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");var SecondBadgeStyle=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e1r14hkx0"})({name:"mz4ex5",styles:"display:inline-flex;align-items:center;.gt{display:inline-flex;margin:0 0.7rem;width:1.6rem;height:1.6rem;align-items:center;justify-content:center;color:#868fa0;vertical-align:middle;&:before{content:'~';}}>.badge{position:relative;}svg{width:1rem;height:1rem;margin-right:0.4rem!important;}"}),SecondBadges=function SecondBadges(_ref){var beforeSecond=_ref.beforeSecond,afterSecond=_ref.afterSecond,onClickSecond=_ref.onClickSecond,onClickAfterSecond=_ref.onClickAfterSecond,onClickbeforeSecond=_ref.onClickbeforeSecond;return(0,emotion_react_browser_esm.tZ)(SecondBadgeStyle,{role:"button",tabIndex:0,className:"video-second-tags",onClick:function onClick(e){e.stopPropagation(),null==onClickSecond||onClickSecond(beforeSecond,afterSecond)},onKeyDown:function onKeyDown(e){"Enter"===e.key&&(null==onClickSecond||onClickSecond(beforeSecond,afterSecond))}},(0,emotion_react_browser_esm.tZ)(Badge.C,{color:"gray",size:"sm",onClick:function onClick(e){onClickbeforeSecond&&(e.stopPropagation(),onClickbeforeSecond(beforeSecond))}},onClickbeforeSecond&&(0,emotion_react_browser_esm.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},(0,emotion_react_browser_esm.tZ)("polygon",{points:"5 3 19 12 5 21 5 3"})),dayjs_min_default().unix(beforeSecond).format("mm:ss"),onClickbeforeSecond&&(0,emotion_react_browser_esm.tZ)(Tooltip.Z,{direction:"top",size:"sm"},"영상 ",dayjs_min_default().unix(beforeSecond).format("mm:ss"),"초 이동")),(0,emotion_react_browser_esm.tZ)("span",{className:"gt"}),(0,emotion_react_browser_esm.tZ)(Badge.C,{color:"gray",size:"sm",onClick:function onClick(e){onClickAfterSecond&&(e.stopPropagation(),onClickAfterSecond(afterSecond))}},onClickAfterSecond&&(0,emotion_react_browser_esm.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},(0,emotion_react_browser_esm.tZ)("polygon",{points:"5 3 19 12 5 21 5 3"})),dayjs_min_default().unix(afterSecond).format("mm:ss"),onClickAfterSecond&&(0,emotion_react_browser_esm.tZ)(Tooltip.Z,{direction:"top",size:"sm"},"영상 ",dayjs_min_default().unix(afterSecond).format("mm:ss"),"초 이동")))};const common_SecondBadges=SecondBadges;try{SecondBadges.displayName="SecondBadges",SecondBadges.__docgenInfo={description:"",displayName:"SecondBadges",props:{beforeSecond:{defaultValue:null,description:"",name:"beforeSecond",required:!0,type:{name:"number"}},afterSecond:{defaultValue:null,description:"",name:"afterSecond",required:!0,type:{name:"number"}},onClickSecond:{defaultValue:null,description:"",name:"onClickSecond",required:!1,type:{name:"((beforeSecond: number, afterSecond: number) => void)"}},onClickbeforeSecond:{defaultValue:null,description:"",name:"onClickbeforeSecond",required:!1,type:{name:"((beforeSecond: number) => void)"}},onClickAfterSecond:{defaultValue:null,description:"",name:"onClickAfterSecond",required:!1,type:{name:"((afterSecond: number) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["component/template/common/SecondBadges.tsx#SecondBadges"]={docgenInfo:SecondBadges.__docgenInfo,name:"SecondBadges",path:"component/template/common/SecondBadges.tsx#SecondBadges"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_Default$parameters2$,console=__webpack_require__("./node_modules/console-browserify/index.js");const SecondBadges_stories={title:"TEMPLATE/SecondBadges",tags:["autodocs"],args:{beforeSecond:0,afterSecond:0,onClickSecond:function onClickSecond(beforeSecond,afterSecond){return console.log("beforeSecond, afterSecond : ",beforeSecond,afterSecond)}},parameters:{storySource:{source:"import _objectSpread from \"/Users/yun-eunseog/workspace/govis-renewal/node_modules/@babel/runtime/helpers/esm/objectSpread2.js\";\nvar _Default$parameters, _Default$parameters2, _Default$parameters2$;\n\nimport React from 'react';\nimport StoryLayout from '@ComponentFarm/modules/story_layout/StoryLayout';\nimport SecondBadges from './SecondBadges';\nimport { jsx as ___EmotionJSX } from \"@emotion/react\";\nvar meta = {\n  title: 'TEMPLATE/SecondBadges',\n  tags: ['autodocs'],\n  args: {\n    beforeSecond: 0,\n    afterSecond: 0,\n    onClickSecond: function onClickSecond(beforeSecond, afterSecond) {\n      return console.log('beforeSecond, afterSecond : ', beforeSecond, afterSecond);\n    }\n  },\n  parameters: {\n    docs: {\n      story: {\n        inline: true\n      },\n      // render the story in an iframe\n      canvas: {\n        sourceState: 'shown'\n      },\n      // start with the source open\n      source: {\n        type: 'code'\n      } // forces the raw source code (rather than the rendered JSX).\n    }\n  }\n};\n\nexport default meta;\nexport var Default = function Default(props) {\n  return ___EmotionJSX(StoryLayout, {\n    darkMode: false\n  }, ___EmotionJSX(SecondBadges, {\n    beforeSecond: props.beforeSecond,\n    afterSecond: props.afterSecond,\n    onClickSecond: function onClickSecond(beforeSecond, afterSecond) {\n      return console.log('onClickSecond', beforeSecond, afterSecond);\n    }\n  }));\n};\nDefault.parameters = _objectSpread(_objectSpread({}, Default.parameters), {}, {\n  docs: _objectSpread(_objectSpread({}, (_Default$parameters = Default.parameters) === null || _Default$parameters === void 0 ? void 0 : _Default$parameters.docs), {}, {\n    source: _objectSpread({\n      originalSource: \"props => {\\n  return <StoryLayout darkMode={false}>\\n      <SecondBadges beforeSecond={props.beforeSecond} afterSecond={props.afterSecond} onClickSecond={(beforeSecond, afterSecond) => console.log('onClickSecond', beforeSecond, afterSecond)} />\\n    </StoryLayout>;\\n}\"\n    }, (_Default$parameters2 = Default.parameters) === null || _Default$parameters2 === void 0 ? void 0 : (_Default$parameters2$ = _Default$parameters2.docs) === null || _Default$parameters2$ === void 0 ? void 0 : _Default$parameters2$.source)\n  })\n});",locationsMap:{default:{startLoc:{col:21,line:36},endLoc:{col:1,line:46},startBody:{col:21,line:36},endBody:{col:1,line:46}}}},docs:{story:{inline:!0},canvas:{sourceState:"shown"},source:{type:"code"}}}};var Default=function Default(props){return(0,emotion_react_browser_esm.tZ)(StoryLayout.Z,{darkMode:!1},(0,emotion_react_browser_esm.tZ)(common_SecondBadges,{beforeSecond:props.beforeSecond,afterSecond:props.afterSecond,onClickSecond:function onClickSecond(beforeSecond,afterSecond){return console.log("onClickSecond",beforeSecond,afterSecond)}}))};Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"props => {\n  return <StoryLayout darkMode={false}>\n      <SecondBadges beforeSecond={props.beforeSecond} afterSecond={props.afterSecond} onClickSecond={(beforeSecond, afterSecond) => console.log('onClickSecond', beforeSecond, afterSecond)} />\n    </StoryLayout>;\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})})},"./component/atom/Tooltip/Tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _Users_yun_eunseog_workspace_govis_renewal_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),console=__webpack_require__("./node_modules/console-browserify/index.js");var TooltipContainerStyle=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("span",{target:"e4xmhtk0"})({name:"a3ejun",styles:'visibility:hidden;position:absolute;display:inline-flex;top:calc(100% + 1rem);left:50%;z-index:99;white-space:nowrap;transition:transform 0.2s ease-out,opacity 0.2s ease-out,visibility 0.2s 0.2s;opacity:0;transform:translateY(-0.6rem);pointer-events:none;.tooltip-content{position:relative;max-width:30rem;width:max-content;padding:0.8rem 1.2rem;border-radius:0.4rem;background-color:#000;color:var(--color-gray1);font-weight:400;font-size:1.4rem;line-height:1.35;word-break:keep-all;white-space:pre-line;text-align:left;transform:translateX(-50%);&::before{content:\'\';position:absolute;top:-0.6rem;left:50%;width:1.6rem;height:1rem;transform:translateX(-50%);background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="0 0 15 10" fill="none"><path d="M8.28087 0.976086C7.88054 0.47568 7.11946 0.475679 6.71913 0.976086L0.799757 8.3753C0.275946 9.03007 0.742119 10 1.58062 10L13.4194 10C14.2579 10 14.7241 9.03007 14.2002 8.37531L8.28087 0.976086Z" fill="black"/></svg>\');background-repeat:no-repeat;background-size:100% 100%;background-position:center;}a{color:inherit;font:inherit;text-decoration:underline;}>*{pointer-events:auto;}}&.sm{.tooltip-content{padding:0.4rem 0.8rem;font-size:1.2rem;}}&.top{top:auto;bottom:calc(100% + 1rem);transform:translateY(0.6rem);.tooltip-content{&::before{top:auto;bottom:-0.6rem;transform:translateX(-50%) rotate(180deg);}}}&.top.show,&.bottom.show{transition-delay:0s;transform:translateY(0);opacity:1;visibility:visible;}&.left{left:auto;right:calc(100% + 1rem);top:50%;transform:translate(0.6rem, -50%);.tooltip-content{transform:none;text-align:right;&::before{top:50%;left:auto;right:-0.9rem;transform:translate(0, -50%) rotate(90deg);}}}&.right{left:calc(100% + 1rem);top:50%;transform:translate(-0.6rem, -50%);.tooltip-content{transform:none;text-align:left;&::before{top:50%;left:-0.9rem;transform:translate(0, -50%) rotate(-90deg);}}}&.left.show,&.right.show{transition-delay:0s;transform:translateY(-50%) translateX(0);opacity:1;visibility:visible;}'}),Tooltip=function Tooltip(_ref){var _ref$eventType=_ref.eventType,eventType=void 0===_ref$eventType?"hover":_ref$eventType,_ref$direction=_ref.direction,direction=void 0===_ref$direction?"bottom":_ref$direction,size=_ref.size,children=_ref.children,tooltipRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),_useState=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),_useState2=(0,_Users_yun_eunseog_workspace_govis_renewal_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_useState,2),show=_useState2[0],setShow=_useState2[1];return(0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)((function(){var _$tooltip$parentEleme;if(tooltipRef.current){var $tooltip=tooltipRef.current,$parent=null==$tooltip||null===(_$tooltip$parentEleme=$tooltip.parentElement)||void 0===_$tooltip$parentEleme?void 0:_$tooltip$parentEleme.closest("div, a, button, span");if($parent)"static"===window.getComputedStyle($parent).position&&($parent.style.position=show?"relative":"")}}),[show]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)((function(){var _$tooltip$parentEleme2;if(!tooltipRef.current)return function(){};var $tooltip=tooltipRef.current,$parent=null==$tooltip||null===(_$tooltip$parentEleme2=$tooltip.parentElement)||void 0===_$tooltip$parentEleme2?void 0:_$tooltip$parentEleme2.closest("div, a, button, span");if(console.log($parent),"hover"===eventType){var handleMouseEnter=function handleMouseEnter(){return setShow(!0)},handleMouseLeave=function handleMouseLeave(){return setShow(!1)};return null==$parent||$parent.addEventListener("mouseenter",handleMouseEnter),null==$parent||$parent.addEventListener("mouseleave",handleMouseLeave),null==$parent||$parent.addEventListener("focusin",handleMouseEnter),null==$parent||$parent.addEventListener("focusout",handleMouseLeave),function(){null==$parent||$parent.removeEventListener("mouseenter",handleMouseEnter),null==$parent||$parent.removeEventListener("mouseleave",handleMouseLeave),null==$parent||$parent.removeEventListener("focusin",handleMouseEnter),null==$parent||$parent.removeEventListener("focusout",handleMouseLeave)}}if("click"===eventType){var handleClick=function handleClick(e){$tooltip.contains(e.target)||setShow((function(prev){return!prev}))},handleClickOutside=function handleClickOutside(e){null!=$parent&&$parent.contains(e.target)||setShow(!1)};return null==$parent||$parent.addEventListener("click",handleClick),document.addEventListener("click",handleClickOutside),function(){null==$parent||$parent.removeEventListener("click",handleClick),document.removeEventListener("click",handleClickOutside)}}return function(){}}),[eventType]),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.tZ)(TooltipContainerStyle,{ref:tooltipRef,className:"".concat(show?"show":""," ").concat(direction," ").concat(size)},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.tZ)("span",{className:"tooltip-content"},children))};const __WEBPACK_DEFAULT_EXPORT__=Tooltip;try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{direction:{defaultValue:{value:"bottom"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}},eventType:{defaultValue:{value:"hover"},description:"",name:"eventType",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["component/atom/Tooltip/Tooltip.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"component/atom/Tooltip/Tooltip.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/dayjs/dayjs.min.js":function(module){module.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p=function(t){return t instanceof b},S=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new b(n)},O=v;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var b=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,f=O.p(t),l=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[a]=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=O.p(f),y=function(t){var e=w(l);return O.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return O.s(s%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return O.s(e.$y,4,"0");case"M":return a+1;case"MM":return O.s(a+1,2,"0");case"MMM":return h(n.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return e.$D;case"DD":return O.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return O.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(s,u,!0);case"A":return $(s,u,!1);case"m":return String(u);case"mm":return O.s(u,2,"0");case"s":return String(e.$s);case"ss":return O.s(e.$s,2,"0");case"SSS":return O.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=O.p(d),m=w(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return O.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g}return l?$:O.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),_=b.prototype;return w.prototype=_,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){_[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,b,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=D[g],w.Ls=D,w.p={},w}()}}]);