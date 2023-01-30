!function(){"use strict";var e,a={237:function(){var e=window.wp.blocks,a=window.wp.element,t=window.wp.i18n,l=window.wp.blockEditor,n=window.wp.data,r=window.wp.components;(0,e.registerBlockType)("amateur-tv/feed",{edit:function(e){(0,l.useBlockProps)();const{attributes:o,setAttributes:i}=e,{usernameColor:u,lang:m,liveColor:s,displayLive:c,displayTopic:v,displayGenre:g,displayUsers:p,bgColor:_,genre:h,age:b,topicColor:d,link:C,targetNew:f,labelBgColor:E,imageWidth:w,imageHeight:k,columnGap:y,autoRefresh:S,api:P,count:T}=o,[O,x]=(0,a.useState)(!0),[L,B]=(0,a.useState)(null),[N,R]=(0,a.useState)(new URL(P)),F=e=>{let a=N,t=e.val;e.multiple&&(t=t.join(",")),t?a.searchParams.set(e.name,t):a.searchParams.delete(e.name),B(null),R(N),x(!0)},G=(0,n.useSelect)((e=>{var a;let t=null===(a=e("core").getSite())||void 0===a?void 0:a.language;return t&&t.split("_")[0]}));return(0,a.useEffect)((()=>{O&&fetch(N,{method:"GET"}).then((e=>e.json())).then((e=>{x(!1),B(e.body)})).catch((e=>console.error(e)))}),[O,N]),(0,a.createElement)(a.Fragment,null,(0,a.createElement)(l.InspectorControls,null,(0,a.createElement)(r.PanelBody,{title:(0,t.__)("Filters","amateur-tv"),initialOpen:!0},(0,a.createElement)(r.SelectControl,{label:(0,t.__)("Gender","amateur-tv"),value:h,multiple:!0,options:[{label:(0,t.__)("Woman","amateur-tv"),value:"W"},{label:(0,t.__)("Couple","amateur-tv"),value:"C"},{label:(0,t.__)("Man","amateur-tv"),value:"M"},{label:(0,t.__)("Trans","amateur-tv"),value:"T"}],onChange:e=>{i({genre:e}),F({name:"genre",val:e,multiple:!0})}}),(0,a.createElement)(r.SelectControl,{label:(0,t.__)("Age","amateur-tv"),value:b,multiple:!0,options:[{label:"18-22",value:"18-22"},{label:"23-29",value:"23-29"},{label:"29-39",value:"29-39"},{label:"40",value:"40"}],onChange:e=>{i({age:e}),F({name:"age",val:e,multiple:!0})}}),(0,a.createElement)(r.RangeControl,{label:(0,t.__)("Number of cams","amateur-tv"),value:T,initialPosition:L?L.length:0,onChange:e=>{i({count:e})},min:0,max:L?L.length:0})),(0,a.createElement)(r.PanelBody,{title:(0,t.__)("Display Settings","amateur-tv"),initialOpen:!0},(0,a.createElement)(r.SelectControl,{label:(0,t.__)("Language","amateur-tv"),value:m||G,options:[{label:(0,t.__)("English","amateur-tv"),value:"en"},{label:(0,t.__)("Spanish","amateur-tv"),value:"es"},{label:(0,t.__)("French","amateur-tv"),value:"fr"},{label:(0,t.__)("German","amateur-tv"),value:"de"}],onChange:e=>{i({lang:e}),F({name:"lang",val:e,multiple:!1})}}),(0,a.createElement)(r.ToggleControl,{label:(0,t.__)("Show Live Label","amateur-tv"),checked:!!c,onChange:e=>{i({displayLive:!c})}}),(0,a.createElement)(r.ToggleControl,{label:(0,t.__)("Show Gender","amateur-tv"),checked:!!g,onChange:e=>{i({displayGenre:!g})}}),(0,a.createElement)(r.ToggleControl,{label:(0,t.__)("Show Users","amateur-tv"),checked:!!p,onChange:e=>{i({displayUsers:!p})}}),(0,a.createElement)(r.ToggleControl,{label:(0,t.__)("Show Topic","amateur-tv"),checked:!!v,onChange:e=>{i({displayTopic:!v})}}),(0,a.createElement)(r.Flex,null,(0,a.createElement)(r.FlexBlock,null,(0,a.createElement)(r.FlexItem,null,(0,a.createElement)(r.TextControl,{label:(0,t.__)("Link","amateur-tv"),value:C,onChange:e=>{i({link:e})},help:(0,t.__)("Absolute or relative URL. Leave blank to use the link of the cam. Placeholders supported: {camname}, {affiliate}","amateur-tv")})),(0,a.createElement)(r.FlexItem,null,(0,a.createElement)(r.ToggleControl,{label:(0,t.__)("Open in new tab","amateur-tv"),checked:!!f,onChange:e=>{i({targetNew:e})}})))),(0,a.createElement)(l.PanelColorSettings,{title:(0,t.__)("Color Settings","amateur-tv"),initialOpen:!1,colorSettings:[{value:u,onChange:e=>{i({usernameColor:e})},label:(0,t.__)("Username/Gender","amateur-tv")},{value:s,onChange:e=>{i({liveColor:e})},label:(0,t.__)("Live Label","amateur-tv")},{value:d,onChange:e=>{i({topicColor:e})},label:(0,t.__)("Topic","amateur-tv")},{value:_,onChange:e=>{i({bgColor:e})},label:(0,t.__)("Background","amateur-tv")},{value:E,onChange:e=>{i({labelBgColor:e})},label:(0,t.__)("Label Background","amateur-tv")}]}),(0,a.createElement)(r.RangeControl,{label:(0,t.__)("Column Gap","amateur-tv"),value:y,initialPosition:3,onChange:e=>{i({columnGap:e})},min:0,max:10}),(0,a.createElement)(r.RangeControl,{label:(0,t.__)("Image Height","amateur-tv"),value:k,initialPosition:115,onChange:e=>{i({imageHeight:e})},min:115,max:500}),(0,a.createElement)(r.RangeControl,{label:(0,t.__)("Image Width","amateur-tv"),value:w,initialPosition:216,onChange:e=>{i({imageWidth:e})},min:216,max:500}),(0,a.createElement)(r.RangeControl,{label:(0,t.__)("Auto Refresh (minutes)","amateur-tv"),value:S,initialPosition:0,onChange:e=>{i({autoRefresh:e})},min:0,max:10}))),!!O&&(0,a.createElement)("div",{key:"loading",className:"wp-block-embed is-loading"},(0,a.createElement)(r.Spinner,null),(0,a.createElement)("p",null,(0,t.__)("Fetching...","amateur-tv"))),(0,a.createElement)("div",(0,l.useBlockProps)(),(0,a.createElement)("div",{className:"atv-cams-list",style:{backgroundColor:_,gap:y}},!!L&&L.slice(0,T>0?T:L.length).map(((e,l)=>(0,a.createElement)("a",{key:l,target:"_blank",className:"atv-cam"},(0,a.createElement)("img",{src:e.image,width:w,height:k,style:{maxHeight:k}}),!!c&&(0,a.createElement)("span",{className:"atv-live",style:{color:s,backgroundColor:E}},(0,t.__)("Live","amateur-tv")),!!g&&(0,a.createElement)("span",{className:"atv-genre",style:{color:u,backgroundColor:E}},(0,t.__)(e.genre,"amateur-tv")),!!p&&(0,a.createElement)("span",{className:"atv-viewers",style:{color:s,backgroundColor:E}},(0,a.createElement)("span",{className:"dashicons dashicons-visibility"}),(0,a.createElement)("span",null,e.viewers)),(0,a.createElement)("span",{className:"atv-username",style:{color:u,backgroundColor:E}},e.username),!!v&&(0,a.createElement)("div",{className:"atv-topic",style:{color:d,backgroundColor:E}},e.topic[m||"en"])))))))},save:function(e){return null}}),(0,e.registerBlockType)("amateur-tv/iframe",{edit:function(e){(0,l.useBlockProps)();const{attributes:n,setAttributes:o}=e,[i,u]=(0,a.useState)(!1),[m,s]=(0,a.useState)(new URL("https://www.amateur.tv/freecam/embed?width=890&height=580&lazyloadvideo=1&a_mute=1"));let c='<iframe width="890" height="580" src='+m.toString()+' frameborder="0" class="atv_lazy_load_iframe"></iframe><script src="https://www.amateur.tv/js/IntersectionObserverIframe.js"><\/script>';const[v,g]=(0,a.useState)(c),{genre:p,age:_}=n,h=e=>{let a=m,t=e.val;e.multiple&&(t=t.join(",")),a.searchParams.set(e.name,t),s(m),g('<iframe width="890" height="580" src='+m.toString()+' frameborder="0" class="atv_lazy_load_iframe"></iframe><script src="https://www.amateur.tv/js/IntersectionObserverIframe.js"><\/script>')};return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(l.InspectorControls,null,(0,a.createElement)(r.PanelBody,{title:(0,t.__)("Filters","amateur-tv"),initialOpen:!0},(0,a.createElement)(r.SelectControl,{label:(0,t.__)("Gender","amateur-tv"),value:p,multiple:!0,options:[{label:(0,t.__)("Woman","amateur-tv"),value:"W"},{label:(0,t.__)("Couple","amateur-tv"),value:"C"},{label:(0,t.__)("Man","amateur-tv"),value:"M"},{label:(0,t.__)("Trans","amateur-tv"),value:"T"}],onChange:e=>{o({genre:e}),h({name:"genre",val:e,multiple:!0})}}),(0,a.createElement)(r.SelectControl,{label:(0,t.__)("Age","amateur-tv"),value:_,multiple:!0,options:[{label:"18-22",value:"18-22"},{label:"23-29",value:"23-29"},{label:"29-39",value:"29-39"},{label:"40",value:"40"}],onChange:e=>{o({age:e}),h({name:"age",val:e,multiple:!0})}}))),!!i&&(0,a.createElement)("div",{key:"loading",className:"wp-block-embed is-loading"},(0,a.createElement)(r.Spinner,null),(0,a.createElement)("p",null,(0,t.__)("Fetching...","amateur-tv"))),(0,a.createElement)("div",(0,l.useBlockProps)(),(0,a.createElement)(a.RawHTML,null,v),";"))},save:function(e){return null}})}},t={};function l(e){var n=t[e];if(void 0!==n)return n.exports;var r=t[e]={exports:{}};return a[e](r,r.exports,l),r.exports}l.m=a,e=[],l.O=function(a,t,n,r){if(!t){var o=1/0;for(s=0;s<e.length;s++){t=e[s][0],n=e[s][1],r=e[s][2];for(var i=!0,u=0;u<t.length;u++)(!1&r||o>=r)&&Object.keys(l.O).every((function(e){return l.O[e](t[u])}))?t.splice(u--,1):(i=!1,r<o&&(o=r));if(i){e.splice(s--,1);var m=n();void 0!==m&&(a=m)}}return a}r=r||0;for(var s=e.length;s>0&&e[s-1][2]>r;s--)e[s]=e[s-1];e[s]=[t,n,r]},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},function(){var e={826:0,431:0};l.O.j=function(a){return 0===e[a]};var a=function(a,t){var n,r,o=t[0],i=t[1],u=t[2],m=0;if(o.some((function(a){return 0!==e[a]}))){for(n in i)l.o(i,n)&&(l.m[n]=i[n]);if(u)var s=u(l)}for(a&&a(t);m<o.length;m++)r=o[m],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(s)},t=self.webpackChunkamateur_tv=self.webpackChunkamateur_tv||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))}();var n=l.O(void 0,[431],(function(){return l(237)}));n=l.O(n)}();