(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01b98d8b"],{"212b":function(t,e,i){"use strict";i("5d15")},"24d1":function(t,e,i){t.exports=i.p+"img/coolcat.93c748bc.jpg"},"5d15":function(t,e,i){},a939:function(t,e,i){!function(e,i){t.exports=i()}("undefined"!=typeof self&&self,(function(){return function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var i={};return e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i(4)();var n=i(5),o=i(6);e.default={name:"vue-seamless-scroll",data:function(){return{xPos:0,yPos:0,delay:0,copyHtml:"",height:0,width:0,realBoxWidth:0}},props:{data:{type:Array,default:function(){return[]}},classOption:{type:Object,default:function(){return{}}}},computed:{leftSwitchState:function(){return this.xPos<0},rightSwitchState:function(){return Math.abs(this.xPos)<this.realBoxWidth-this.width},leftSwitchClass:function(){return this.leftSwitchState?"":this.options.switchDisabledClass},rightSwitchClass:function(){return this.rightSwitchState?"":this.options.switchDisabledClass},leftSwitch:function(){return{position:"absolute",margin:this.height/2+"px 0 0 -"+this.options.switchOffset+"px",transform:"translate(-100%,-50%)"}},rightSwitch:function(){return{position:"absolute",margin:this.height/2+"px 0 0 "+(this.width+this.options.switchOffset)+"px",transform:"translateY(-50%)"}},float:function(){return this.isHorizontal?{float:"left",overflow:"hidden"}:{overflow:"hidden"}},pos:function(){return{transform:"translate("+this.xPos+"px,"+this.yPos+"px)",transition:"all "+this.ease+" "+this.delay+"ms",overflow:"hidden"}},defaultOption:function(){return{step:1,limitMoveNum:5,hoverStop:!0,direction:1,openTouch:!0,singleHeight:0,singleWidth:0,waitTime:1e3,switchOffset:30,autoPlay:!0,navigation:!1,switchSingleStep:134,switchDelay:400,switchDisabledClass:"disabled",isSingleRemUnit:!1}},options:function(){return o({},this.defaultOption,this.classOption)},navigation:function(){return this.options.navigation},autoPlay:function(){return!this.navigation&&this.options.autoPlay},scrollSwitch:function(){return this.data.length>=this.options.limitMoveNum},hoverStopSwitch:function(){return this.options.hoverStop&&this.autoPlay&&this.scrollSwitch},canTouchScroll:function(){return this.options.openTouch},isHorizontal:function(){return this.options.direction>1},baseFontSize:function(){return this.options.isSingleRemUnit?parseInt(window.getComputedStyle(document.documentElement,null).fontSize):1},realSingleStopWidth:function(){return this.options.singleWidth*this.baseFontSize},realSingleStopHeight:function(){return this.options.singleHeight*this.baseFontSize},step:function(){var t=this.options.step;return this.isHorizontal?this.realSingleStopWidth:this.realSingleStopHeight,t}},methods:{reset:function(){this._cancle(),this._initMove()},leftSwitchClick:function(){if(this.leftSwitchState)return Math.abs(this.xPos)<this.options.switchSingleStep?void(this.xPos=0):void(this.xPos+=this.options.switchSingleStep)},rightSwitchClick:function(){if(this.rightSwitchState)return this.realBoxWidth-this.width+this.xPos<this.options.switchSingleStep?void(this.xPos=this.width-this.realBoxWidth):void(this.xPos-=this.options.switchSingleStep)},_cancle:function(){cancelAnimationFrame(this.reqFrame||"")},touchStart:function(t){var e=this;if(this.canTouchScroll){var i=void 0,n=t.targetTouches[0],o=this.options,s=o.waitTime,r=o.singleHeight,a=o.singleWidth;this.startPos={x:n.pageX,y:n.pageY},this.startPosY=this.yPos,this.startPosX=this.xPos,r&&a?(i&&clearTimeout(i),i=setTimeout((function(){e._cancle()}),s+20)):this._cancle()}},touchMove:function(t){if(!(!this.canTouchScroll||t.targetTouches.length>1||t.scale&&1!==t.scale)){var e=t.targetTouches[0],i=this.options.direction;this.endPos={x:e.pageX-this.startPos.x,y:e.pageY-this.startPos.y},event.preventDefault();var n=Math.abs(this.endPos.x)<Math.abs(this.endPos.y)?1:0;1===n&&i<2?this.yPos=this.startPosY+this.endPos.y:0===n&&i>1&&(this.xPos=this.startPosX+this.endPos.x)}},touchEnd:function(){var t=this;if(this.canTouchScroll){var e=void 0,i=this.options.direction;if(this.delay=50,1===i)this.yPos>0&&(this.yPos=0);else if(0===i){var n=this.realBoxHeight/2*-1;this.yPos<n&&(this.yPos=n)}else if(2===i)this.xPos>0&&(this.xPos=0);else if(3===i){var o=-1*this.realBoxWidth;this.xPos<o&&(this.xPos=o)}e&&clearTimeout(e),e=setTimeout((function(){t.delay=0,t._move()}),this.delay)}},enter:function(){this.hoverStopSwitch&&this._stopMove()},leave:function(){this.hoverStopSwitch&&this._startMove()},_move:function(){this.isHover||(this._cancle(),this.reqFrame=requestAnimationFrame(function(){var t=this,e=this.realBoxHeight/2,i=this.realBoxWidth/2,n=this.options,o=n.direction,s=n.waitTime,r=this.step;1===o?(Math.abs(this.yPos)>=e&&(this.$emit("ScrollEnd"),this.yPos=0),this.yPos-=r):0===o?(this.yPos>=0&&(this.$emit("ScrollEnd"),this.yPos=-1*e),this.yPos+=r):2===o?(Math.abs(this.xPos)>=i&&(this.$emit("ScrollEnd"),this.xPos=0),this.xPos-=r):3===o&&(this.xPos>=0&&(this.$emit("ScrollEnd"),this.xPos=-1*i),this.xPos+=r),this.singleWaitTime&&clearTimeout(this.singleWaitTime),this.realSingleStopHeight?Math.abs(this.yPos)%this.realSingleStopHeight<r?this.singleWaitTime=setTimeout((function(){t._move()}),s):this._move():this.realSingleStopWidth&&Math.abs(this.xPos)%this.realSingleStopWidth<r?this.singleWaitTime=setTimeout((function(){t._move()}),s):this._move()}.bind(this)))},_initMove:function(){var t=this;this.$nextTick((function(){var e=t.options.switchDelay,i=t.autoPlay,n=t.isHorizontal;if(t._dataWarm(t.data),t.copyHtml="",n){t.height=t.$refs.wrap.offsetHeight,t.width=t.$refs.wrap.offsetWidth;var o=t.$refs.slotList.offsetWidth;i&&(o=2*o+1),t.$refs.realBox.style.width=o+"px",t.realBoxWidth=o}if(!i)return t.ease="linear",void(t.delay=e);t.ease="ease-in",t.delay=0,t.scrollSwitch?(t.copyHtml=t.$refs.slotList.innerHTML,setTimeout((function(){t.realBoxHeight=t.$refs.realBox.offsetHeight,t._move()}),0)):(t._cancle(),t.yPos=t.xPos=0)}))},_dataWarm:function(t){t.length},_startMove:function(){this.isHover=!1,this._move()},_stopMove:function(){this.isHover=!0,this.singleWaitTime&&clearTimeout(this.singleWaitTime),this._cancle()}},mounted:function(){this._initMove()},watch:{data:function(t,e){this._dataWarm(t),n(t,e)||this.reset()},autoPlay:function(t){t?this.reset():this._stopMove()}},beforeCreate:function(){this.reqFrame=null,this.singleWaitTime=null,this.isHover=!1,this.ease="ease-in"},beforeDestroy:function(){this._cancle(),clearTimeout(this.singleWaitTime)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(2),o=function(t){return t&&t.__esModule?t:{default:t}}(n);o.default.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.component(e.componentName||o.default.name,o.default)},"undefined"!=typeof window&&window.Vue&&Vue.component(o.default.name,o.default),e.default=o.default},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),o=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);var r=i(7),a=i(3),c=a(o.a,r.a,!1,null,null,null);e.default=c.exports},function(t,e){t.exports=function(t,e,i,n,o,s){var r,a=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(r=t,a=t.default);var l,h="function"==typeof a?a.options:a;if(e&&(h.render=e.render,h.staticRenderFns=e.staticRenderFns,h._compiled=!0),i&&(h.functional=!0),o&&(h._scopeId=o),s?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},h._ssrRegister=l):n&&(l=n),l){var u=h.functional,d=u?h.render:h.beforeCreate;u?(h._injectStyles=l,h.render=function(t,e){return l.call(e),d(t,e)}):h.beforeCreate=d?[].concat(d,l):[l]}return{esModule:r,exports:a,options:h}}},function(t,e){var i=function(){window.cancelAnimationFrame=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t)}}(),window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}()};t.exports=i},function(t,e){var i=function(t,e){if(t===e)return!0;if(t.length!==e.length)return!1;for(var i=0;i<t.length;++i)if(t[i]!==e[i])return!1;return!0};t.exports=i},function(t,e){function i(){Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)});var t=void 0,e=void 0,o=void 0,s=void 0,r=void 0,a=void 0,c=1,l=arguments[0]||{},h=!1,u=arguments.length;if("boolean"==typeof l&&(h=l,l=arguments[1]||{},c++),"object"!==(void 0===l?"undefined":n(l))&&"function"!=typeof l&&(l={}),c===u)return l;for(;c<u;c++)if(null!=(e=arguments[c]))for(t in e)o=l[t],s=e[t],r=Array.isArray(s),h&&s&&("object"===(void 0===s?"undefined":n(s))||r)?(r?(r=!1,a=o&&Array.isArray(o)?o:[]):a=o&&"object"===(void 0===o?"undefined":n(o))?o:{},l[t]=i(h,a,s)):void 0!==s&&(l[t]=s);return l}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=i},function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrap"},[t.navigation?i("div",{class:t.leftSwitchClass,style:t.leftSwitch,on:{click:t.leftSwitchClick}},[t._t("left-switch")],2):t._e(),t._v(" "),t.navigation?i("div",{class:t.rightSwitchClass,style:t.rightSwitch,on:{click:t.rightSwitchClick}},[t._t("right-switch")],2):t._e(),t._v(" "),i("div",{ref:"realBox",style:t.pos,on:{mouseenter:t.enter,mouseleave:t.leave,touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},[i("div",{ref:"slotList",style:t.float},[t._t("default")],2),t._v(" "),i("div",{style:t.float,domProps:{innerHTML:t._s(t.copyHtml)}})])])},o=[],s={render:n,staticRenderFns:o};e.a=s}]).default}))},bb51:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"top_intro"},[i("div",{staticClass:"title neon"},[t._v("The Fair NFT")]),i("div",{staticClass:"desc",attrs:{id:"topdesc"}},[t._v(" We've implemented ordinals BRC-20 ideas in Ethereum(EVM) smart contract to help ERC1155 fair launch better, which lets everyone without development knowledge to create ERC1155 Communities. Free mint your favorite ERC1155 NFTs and have fun. ")]),i("div",{staticClass:"pubsale"},[i("button",{staticClass:"btn btn_getAirdrop",on:{click:function(e){return t.toAirdrop()}}},[i("i",{staticClass:"fa fa-gift"}),t._v("Get Airdrop ")])]),i("div",{staticClass:"contract"},[i("div",{staticClass:"addr"},[t._v("FNFT : 0xfFd9802610C726c1917Fc3eD8C8fBe9ea3e10583")]),i("div",{staticClass:"copy"},[i("Icon",{attrs:{type:"md-copy",size:"20",color:"#C9C9C9",id:"btn_copy_addr","data-clipboard-text":"0xfFd9802610C726c1917Fc3eD8C8fBe9ea3e10583"},on:{click:function(e){return t.copyContractAddress()}}})],1),i("div",{staticClass:"scan"},[i("Icon",{attrs:{type:"md-open",size:"20",color:"#C9C9C9"},on:{click:function(e){return t.opentWithBlank("https://etherscan.io/token/0xfFd9802610C726c1917Fc3eD8C8fBe9ea3e10583","_blank")}}})],1),i("div",{staticClass:"launch ball"},[i("a",{attrs:{href:"https://www.pinksale.finance/launchpad/0xc755f75f24af222bcff2eb7dcdadf588d3e34a31?chain=ETH",target:"_blank"}},[i("svg",{staticClass:"ant-menu-item-icon",attrs:{stroke:"#F95192",fill:"#F95192","stroke-width":"0",viewBox:"0 0 1024 1024",height:"25",width:"25",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M864 736c0-111.6-65.4-208-160-252.9V317.3c0-15.1-5.3-29.7-15.1-41.2L536.5\n                      95.4C530.1 87.8 521 84 512 84s-18.1 3.8-24.5 11.4L335.1 276.1a63.97 63.97 0 0 0-15.1\n                      41.2v165.8C225.4 528 160 624.4 160 736h156.5c-2.3 7.2-3.5 15-3.5 23.8 0 22.1 7.6 43.7\n                      21.4 60.8a97.2 97.2 0 0 0 43.1 30.6c23.1 54 75.6 88.8 134.5 88.8 29.1 0 57.3-8.6\n                      81.4-24.8 23.6-15.8 41.9-37.9 53-64a97 97 0 0 0 43.1-30.5 97.52 97.52 0 0 0\n                      21.4-60.8c0-8.4-1.1-16.4-3.1-23.8H864zM762.3 621.4c9.4 14.6 17 30.3 22.5\n                      46.6H700V558.7a211.6 211.6 0 0 1 62.3 62.7zM388 483.1V318.8l124-147 124\n                      147V668H388V483.1zM239.2 668c5.5-16.3 13.1-32 22.5-46.6 16.3-25.2 37.5-46.5\n                      62.3-62.7V668h-84.8zm388.9 116.2c-5.2 3-11.2 4.2-17.1 3.4l-19.5-2.4-2.8 19.4c-5.4\n                      37.9-38.4 66.5-76.7 66.5-38.3 0-71.3-28.6-76.7-66.5l-2.8-19.5-19.5 2.5a27.7 27.7\n                      0 0 1-17.1-3.5c-8.7-5-14.1-14.3-14.1-24.4 0-10.6 5.9-19.4 14.6-23.8h231.3c8.8 4.5\n                      14.6 13.3 14.6 23.8-.1 10.2-5.5 19.6-14.2 24.5zM464 400a48 48 0 1 0 96 0 48 48 0 1 0-96 0z"}})])])])]),i("div",{staticClass:"buttongrp"},[i("button",{staticClass:"btn btn_deploy",on:{click:t.tipsComingsoon}},[t._v("Deploy")]),i("button",{staticClass:"btn btn_mint",on:{click:t.tipsComingsoon}},[t._v("Mint")])])]),i("div",{staticClass:"data_block"},[i("div",{staticClass:"tab_toolbar"},[i("div",{staticClass:"searchbox"},[i("Input",{staticStyle:{width:"auto"},attrs:{suffix:"ios-search",placeholder:"Enter Name"}})],1),i("div",{staticClass:"btn_states"},[i("Tabs",{model:{value:t.dataState,callback:function(e){t.dataState=e},expression:"dataState"}},[i("TabPane",{attrs:{label:"All",name:"All"}}),i("TabPane",{attrs:{label:"Progress",name:"In-progress"}}),i("TabPane",{attrs:{label:"Ended",name:"Ended"}})],1)],1)]),i("div",{staticClass:"tab_list"},[i("i-table",{staticClass:"auto-column-size-table",attrs:{columns:t.columns,data:t.data},scopedSlots:t._u([{key:"name",fn:function(e){var n=e.row;e.index;return[i("div",{staticClass:"headwrapper"},[i("div",{staticClass:"head"},[i("img",{attrs:{src:n.head}})]),i("div",{staticClass:"nm"},[t._v(t._s(n.name))])])]}},{key:"progress",fn:function(t){t.row,t.index;return[i("Progress",{attrs:{percent:100,"stroke-width":5}})]}},{key:"action",fn:function(e){e.row,e.index;return[i("button",{staticClass:"btn_mint_min"},[t._v("Mint")])]}}])})],1),i("div",{staticClass:"tab_footer"},[i("Page",{attrs:{total:t.totalPage}})],1)])])},o=[],s=i("99e5"),r=i.n(s),a=i("2f62"),c=i("a939"),l=i.n(c);i("d693"),i("e015");function h(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?h(Object(i),!0).forEach((function(e){d(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):h(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function d(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var f={name:"Home",components:{vueSeamlessScroll:l.a},data:function(){return{web3:{},dataState:"All",totalPage:1,columns:[{title:"#",key:"id",width:50,resizable:!0,ellipsis:!0},{title:"Name",slot:"name",width:120,resizable:!0,ellipsis:!0},{title:"Contract",key:"contract",minWidth:120,resizable:!0,ellipsis:!0,render:function(t,e){return t("span",e.row.contract.substr(0,4)+"***"+e.row.contract.substr(38,4))}},{title:"Deploy Time",key:"deploytime",width:120,ellipsis:!0},{title:"HC/LPM",key:"hclpm",width:120,ellipsis:!0},{title:"Rollup Size",key:"rollupsize",width:120,ellipsis:!0},{title:"Frozen Time",key:"fronzentime",width:120,ellipsis:!0},{title:"Condition",key:"condition",width:120,ellipsis:!0},{title:"Funding Rate",key:"fundingrate",width:120,ellipsis:!0},{title:"Progress",slot:"progress",width:150,ellipsis:!0},{title:" "},{title:" ",ellipsis:!0,minWidth:80,slot:"action"}],data:[{id:"1",name:"FNFT",contract:"0x0000000000000000000000000000000000000000",head:i("cfce"),deploytime:"2023.6.7",hclpm:"10000",rollupsize:"1",fronzentime:"10Min",condition:"Free",fundingrate:"Free",progress:1},{id:"2",name:"bayc",contract:"0x0000000000000000000000000000000000000001",head:i("cfa5"),deploytime:"2023.6.7",hclpm:"10000",rollupsize:"1",fronzentime:"10Min",condition:"Free",fundingrate:"Free",progress:1},{id:"3",name:"coolcat",contract:"0x0000000000000000000000000000000000000002",head:i("24d1"),deploytime:"2023.6.7",hclpm:"10000",rollupsize:"1",fronzentime:"10Min",condition:"Free",fundingrate:"Free",progress:1},{id:"4",name:"pepe",contract:"0x0000000000000000000000000000000000000003",head:i("f963"),deploytime:"2023.6.7",hclpm:"10000",rollupsize:"1",fronzentime:"10Min",condition:"Free",fundingrate:"Free",progress:1},{id:"5",name:"mfer",contract:"0x0000000000000000000000000000000000000004",head:i("e453"),deploytime:"2023.6.7",hclpm:"10000",rollupsize:"1",fronzentime:"10Min",condition:"Free",fundingrate:"Free",progress:1}],timer:null,typeIndex:0,doc:"We've implemented ordinals BRC-20 ideas in Ethereum(EVM) smart contract to help ERC1155 fair launch better, which lets everyone without development knowledge to create ERC1155 Communities. Free mint your favorite ERC1155 NFTs and have fun.",docbox:null}},computed:u({},Object(a["b"])(["walletAddr"])),mounted:function(){var t=this;t.startTyping()},methods:{tipsComingsoon:function(){this.$Message.info({content:"Coming soon..."})},toAirdrop:function(){this.$router.push({name:"Airdrop"})},startTyping:function(){var t=this;t.docbox=document.getElementById("topdesc"),t.typeIndex=0,t.typing()},typing:function(){var t=this;t.typeIndex<=t.doc.length?(t.docbox.innerHTML=t.doc.slice(0,t.typeIndex++)+"_",t.timer=setTimeout(t.typing,100)):(t.docbox.innerHTML=t.doc,clearTimeout(t.timer))},copyContractAddress:function(){var t=this,e=this,i=new e.$Clipboard("#btn_copy_addr");i.on("success",(function(e){t.$Message.success({content:"copy success"}),i.destroy()})),i.on("error",(function(e){t.$Message.error({content:"copy fail"}),i.destroy()}))},opentWithBlank:function(t,e){var i=document.createElement("a");i.setAttribute("href",t),e=e||"_blank",i.setAttribute("target",e),document.body.append(i),i.click(),document.body.removeChild(i)},getCurrentWalletAddr:function(){var t=this.$store.getters.walletAddr;return""==t?this.$Message.info({content:"please connect wallet！"}):t},initWeb3Instant:function(t){this.web3=new r.a(window.web3.currentProvider),t&&t()},getDecimals:function(t){var e=this;e.tokenContractInstant.methods.decimals().call((function(e,i){t(i)}))},numFormat:function(t){return(t+"").replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,"$1,")},showTokenPercent:function(){var t,e=this,i=e.$echarts.init(document.querySelector("#piechart"));t={tooltip:{trigger:"item"},color:["#FFC533","#F2726F","#29C3BE","#5D62B5","#62B58F","#FAA34C"],series:[{name:"Access From",type:"pie",minAngle:10,startAngle:270,radius:["35%","55%"],avoidLabelOverlap:!1,label:{show:!0,normal:{show:!0},emphasis:{show:!0}},emphasis:{label:{show:!0,fontSize:"20",fontWeight:"bold"}},labelLine:{show:!0},data:[{value:60,name:"PreSale"},{value:3.2,name:"Airdrop/Event"},{value:5,name:"Market"},{value:26.8,name:"LP"},{value:5,name:"CEX LOCK"}]}]},i.setOption(t,!0),window.addEventListener("resize",(function(){i.resize()}))}},beforeDestroy:function(){}},p=f,m=(i("212b"),i("2877")),v=Object(m["a"])(p,n,o,!1,null,"99f132c6",null);e["default"]=v.exports},cfa5:function(t,e,i){t.exports=i.p+"img/bayc.e37287b9.jpg"},cfce:function(t,e,i){t.exports=i.p+"img/fnft_head.515ca31e.png"},e453:function(t,e,i){t.exports=i.p+"img/mfer.a9c870ae.jpg"},f963:function(t,e,i){t.exports=i.p+"img/pepe_log.7bb632f9.jpg"}}]);
//# sourceMappingURL=chunk-01b98d8b.1686334313215.js.map