(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aed983c2"],{"16a0":function(t,e,n){},"1dfe":function(t,e,n){t.exports=n.p+"img/worldtime.d575e69b.png"},"1f09":function(t,e,n){},2885:function(t,e,n){},"389b":function(t,e,n){},"5cb1":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"under-contruction"},[n("v-icon",{staticClass:"icon",attrs:{"x-large":""}},[t._v(t._s(t.mdiHandPeace))]),n("h3",[t._v("Im Sorry "+t._s(t.pageName)+" Page is Under Contruction")])],1)},i=[],o=n("94ed"),r={props:{pageName:{type:String}},data:function(){return{mdiHandPeace:o["r"]}}},s=r,l=(n("c94a"),n("2877")),c=n("6544"),d=n.n(c),u=n("132d"),p=Object(l["a"])(s,a,i,!1,null,null,null);e["a"]=p.exports;d()(p,{VIcon:u["a"]})},7952:function(t,e,n){"use strict";var a=n("82c2"),i=n.n(a);i.a},"7ba3":function(t,e,n){t.exports=n.p+"img/speechtotext.129d4f72.png"},"80fe":function(t,e,n){t.exports=n.p+"img/calculator.6a2a7553.png"},"82c2":function(t,e,n){},"951a":function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"k",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"h",(function(){return s})),n.d(e,"i",(function(){return l})),n.d(e,"a",(function(){return c})),n.d(e,"f",(function(){return d})),n.d(e,"l",(function(){return u})),n.d(e,"j",(function(){return p})),n.d(e,"e",(function(){return h})),n.d(e,"g",(function(){return g}));var a="#f1e05a",i="#41B883",o="#2291F3",r="#e34c26",s="#61dafb",l="#61dafb",c="#B52E31",d="#B52E31",u="#21759b",p="#c21525",h="#fb503b",g="#474A8A"},"9a81":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{padding:"20px"}},[0==t.redered?n("v-skeleton-loader",{staticClass:"mx-auto",attrs:{type:"list-item-avatar-three-line"}}):t._l(t.datas,(function(e){return n("LongCard",{key:e.key,attrs:{actions:e.actions,title:e.title,icon:e.icon,link:e.link,lang:e.langUsed},scopedSlots:t._u([{key:"image",fn:function(){return[n("img",{attrs:{src:e.image,alt:""}}),n("img",{staticClass:"blur",attrs:{src:e.image,alt:""}})]},proxy:!0},{key:"content",fn:function(){return[n("div",{domProps:{innerHTML:t._s(e.content)}})]},proxy:!0}],null,!0)})}))],2)},i=[],o=n("5cb1"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"long-card-container"},[n("div",{staticClass:"card"},[n("div",{staticClass:"con-img"},[t._t("image")],2),n("div",{staticClass:"con-text"},[n("h2",[n("v-icon",[t._v(t._s(t.icon))]),t._v(" "+t._s(t.title)+" ")],1),n("Lang",{attrs:{usedLang:t.lang}}),n("div",{staticClass:"con-content"},[t._t("content"),n("div",t._l(t.actions,(function(e){return n("v-btn",{key:e.link,staticStyle:{margin:"5px",color:"white"},attrs:{small:"",rounded:"",color:e.color},on:{click:function(n){return t.goToLink(e.link)}}},[n("v-icon",{staticStyle:{"margin-top":"-3px","margin-right":"5px"},attrs:{small:""}},[t._v(t._s(e.icon))]),t._v(" "+t._s(e.text)+" ")],1)})),1)],2)],1)])])},s=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lang-used",staticStyle:{display:"block"}},t._l(t.usedLang,(function(e,a){return n("span",{key:a,staticClass:"lang-shows"},[n("v-icon",{staticStyle:{"margin-top":"-3px"},attrs:{"x-small":"",color:e.color}},[t._v(t._s(t.circle))]),t._v(" "+t._s(e.text)+" ")],1)})),0)},c=[],d=n("94ed"),u={props:{usedLang:{type:Array}},data:function(){return{circle:d["h"]}}},p=u,h=(n("d880"),n("2877")),g=n("6544"),f=n.n(g),v=n("132d"),m=Object(h["a"])(p,l,c,!1,null,null,null),y=m.exports;f()(m,{VIcon:v["a"]});var b={components:{Lang:y},props:{title:{type:String,default:"No Title"},icon:{type:String,default:""},link:{type:String,default:"#"},lang:{type:Array},actions:{type:Array}},data:function(){return{}},methods:{goToLink:function(t){window.open(t,"_blank")}}},x=b,k=(n("7952"),n("8336")),w=Object(h["a"])(x,r,s,!1,null,null,null),S=w.exports;f()(w,{VBtn:k["a"],VIcon:v["a"]});var _=n("7ba3"),j=n.n(_),C=n("a315"),L=n.n(C),B=n("80fe"),T=n.n(B),E=n("1dfe"),I=n.n(E),O=n("951a"),A={view:"deep-purple",download:"indigo"},V=[{key:4,title:"World Time Using React Native",icon:d["q"],content:"World Time is a simple App that I made using React Native. I was able to fetch data from <a href='http://worldtimeapi.org/' target='_blank'>World Time API</a> and Used it in this app. I was able to build the app as an apk and you can check it by clicking the download button bellow.",link:"https://drive.google.com/file/d/1kc7EE7naz9Rpvq8kyJhJ4F_eB96tnEi5/view?usp=sharing",actions:[{text:"Download App",icon:d["k"],link:"https://drive.google.com/file/d/1kc7EE7naz9Rpvq8kyJhJ4F_eB96tnEi5/view?usp=sharing",color:A.download},{text:"View API's",icon:d["l"],link:"http://worldtimeapi.org/",color:A.view}],image:I.a,langUsed:[{color:O["h"],text:"React"},{color:O["i"],text:"reactNative"}]},{key:3,title:"Web Calculator",icon:d["f"],content:"Calculator is one fascinating computer that is created during the early days. People Have been using it for computing a lot of stuff. Its been a useful tool for eveyone specially students and workers. So I created a simple calculator using Vue sincce I have been learning how to create and build using vuejs.",link:"https://jenuelganawed-calculator-vue.netlify.app/",actions:[{text:"View Demo",icon:d["l"],link:"https://jenuelganawed-calculator-vue.netlify.app/",color:A.view}],image:T.a,langUsed:[{color:O["k"],text:"VueJs"}]},{key:1,title:"Speech To Text",icon:d["D"],content:"This is a simple speech to text using HTML, CSS, and JS. I was fascinated with what javascrip can do so I made a simple, project to try and convert speech to text. And JavaScript has a library called Speech Recognition. 👍👍👍",image:j.a,link:"https://jenuelganawed-speechtotext.netlify.app/",actions:[{text:"View Demo",icon:d["l"],link:"https://jenuelganawed-speechtotext.netlify.app/",color:A.view}],langUsed:[{color:O["c"],text:"html"},{color:O["b"],text:"css"},{color:O["d"],text:"javaScript"}]},{key:2,title:"Text To Speech",icon:d["E"],content:"This is a simple Text to Speech using HTML, CSS, and JS. I was fascinated with what javascrip can do so I made a simple, project to try and convert speech to text. And JavaScript has a library called Speech Recognition. 👍👍",image:L.a,link:"https://jenuelganawed-texttospeach.netlify.app/",actions:[{text:"View Demo",icon:d["l"],link:"https://jenuelganawed-texttospeach.netlify.app/",color:A.view}],langUsed:[{color:O["c"],text:"html"},{color:O["b"],text:"css"},{color:O["d"],text:"javaScript"}]}],J={components:{PageUnderContruction:o["a"],LongCard:S},data:function(){return{active:!1,datas:V,redered:!1}},mounted:function(){this.$nextTick((function(){this.redered=!this.rendered}))},methods:{goToSite:function(){console.log("sdf")}}},$=J,P=(n("dcf8"),n("a630"),n("c975"),n("d81d"),n("ac1f"),n("3ca3"),n("5319"),n("1276"),n("3835")),U=n("5530"),R=(n("1f09"),n("c995")),H=n("24b2"),N=n("7560"),D=n("58df"),W=n("80d2"),q=Object(D["a"])(R["a"],H["a"],N["a"]).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,tile:Boolean,transition:String,type:String,types:{type:Object,default:function(){return{}}}},computed:{attrs:function(){return this.isLoading?this.boilerplate?{}:Object(U["a"])({"aria-busy":!0,"aria-live":"polite",role:"alert"},this.$attrs):this.$attrs},classes:function(){return Object(U["a"])(Object(U["a"])({"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile},this.themeClasses),this.elevationClasses)},isLoading:function(){return!("default"in this.$scopedSlots)||this.loading},rootTypes:function(){return Object(U["a"])({actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text"},this.types)}},methods:{genBone:function(t,e){return this.$createElement("div",{staticClass:"v-skeleton-loader__".concat(t," v-skeleton-loader__bone")},e)},genBones:function(t){var e=this,n=t.split("@"),a=Object(P["a"])(n,2),i=a[0],o=a[1],r=function(){return e.genStructure(i)};return Array.from({length:o}).map(r)},genStructure:function(t){var e=[];t=t||this.type||"";var n=this.rootTypes[t]||"";if(t===n);else{if(t.indexOf(",")>-1)return this.mapBones(t);if(t.indexOf("@")>-1)return this.genBones(t);n.indexOf(",")>-1?e=this.mapBones(n):n.indexOf("@")>-1?e=this.genBones(n):n&&e.push(this.genStructure(n))}return[this.genBone(t,e)]},genSkeleton:function(){var t=[];return this.isLoading?t.push(this.genStructure()):t.push(Object(W["i"])(this)),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{afterEnter:this.resetStyles,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,leaveCancelled:this.resetStyles}},t):t},mapBones:function(t){return t.replace(/\s/g,"").split(",").map(this.genStructure)},onBeforeEnter:function(t){this.resetStyles(t),this.isLoading&&(t._initialStyle={display:t.style.display,transition:t.style.transition},t.style.setProperty("transition","none","important"))},onBeforeLeave:function(t){t.style.setProperty("display","none","important")},resetStyles:function(t){t._initialStyle&&(t.style.display=t._initialStyle.display||"",t.style.transition=t._initialStyle.transition,delete t._initialStyle)}},render:function(t){return t("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}}),F=Object(h["a"])($,a,i,!1,null,null,null);e["default"]=F.exports;f()(F,{VSkeletonLoader:q})},a315:function(t,e,n){t.exports=n.p+"img/texttospeech.e1ca8d2b.png"},c94a:function(t,e,n){"use strict";var a=n("389b"),i=n.n(a);i.a},d880:function(t,e,n){"use strict";var a=n("2885"),i=n.n(a);i.a},dcf8:function(t,e,n){"use strict";var a=n("16a0"),i=n.n(a);i.a}}]);
//# sourceMappingURL=chunk-aed983c2.d1547f11.js.map