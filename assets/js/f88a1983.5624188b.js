"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4943],{5318:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return s}});var n=a(7378);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=d(a),s=r,k=c["".concat(o,".").concat(s)]||c[s]||m[s]||l;return a?n.createElement(k,p(p({ref:e},u),{},{components:a})):n.createElement(k,p({ref:e},u))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=c;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var d=2;d<l;d++)p[d]=a[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},517:function(t,e,a){var n=a(7378);e.Z=function(t){var e=t.children,a=t.hidden,r=t.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},e)}},4535:function(t,e,a){a.d(e,{Z:function(){return m}});var n=a(7378),r=a(4956);var l=function(){var t=(0,n.useContext)(r.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},p=a(8944),i="tabItem_c0e5",o="tabItemActive_28AG";var d=37,u=39;var m=function(t){var e=t.lazy,a=t.block,r=t.defaultValue,m=t.values,c=t.groupId,s=t.className,k=l(),N=k.tabGroupChoices,g=k.setTabGroupChoices,y=(0,n.useState)(r),b=y[0],h=y[1],f=n.Children.toArray(t.children),v=[];if(null!=c){var P=N[c];null!=P&&P!==b&&m.some((function(t){return t.value===P}))&&h(P)}var w=function(t){var e=t.currentTarget,a=v.indexOf(e),n=m[a].value;h(n),null!=c&&(g(c,n),setTimeout((function(){var t,a,n,r,l,p,i,d;(t=e.getBoundingClientRect(),a=t.top,n=t.left,r=t.bottom,l=t.right,p=window,i=p.innerHeight,d=p.innerWidth,a>=0&&l<=d&&r<=i&&n>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(o),setTimeout((function(){return e.classList.remove(o)}),2e3))}),150))},O=function(t){var e,a;switch(t.keyCode){case u:var n=v.indexOf(t.target)+1;a=v[n]||v[0];break;case d:var r=v.indexOf(t.target)-1;a=v[r]||v[v.length-1]}null==(e=a)||e.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":a},s)},m.map((function(t){var e=t.value,a=t.label;return n.createElement("li",{role:"tab",tabIndex:b===e?0:-1,"aria-selected":b===e,className:(0,p.Z)("tabs__item",i,{"tabs__item--active":b===e}),key:e,ref:function(t){return v.push(t)},onKeyDown:O,onFocus:w,onClick:w},a)}))),e?(0,n.cloneElement)(f.filter((function(t){return t.props.value===b}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},f.map((function(t,e){return(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==b})}))))}},4956:function(t,e,a){var n=(0,a(7378).createContext)(void 0);e.Z=n},4945:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return c},default:function(){return k}});var n=a(5773),r=a(808),l=(a(7378),a(5318)),p=a(4535),i=a(517),o=["components"],d={title:"Puppet Provider: PadLocal",sidebar_label:"PadLocal"},u=void 0,m={unversionedId:"puppet-providers/padlocal",id:"puppet-providers/padlocal",isDocsHomePage:!1,title:"Puppet Provider: PadLocal",description:"Wechaty Puppet PadLocal",source:"@site/docs/puppet-providers/padlocal.md",sourceDirName:"puppet-providers",slug:"/puppet-providers/padlocal",permalink:"/docs/puppet-providers/padlocal",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/puppet-providers/padlocal.md",version:"current",lastUpdatedBy:"Rohitesh Kumar Jain",lastUpdatedAt:1629485791,formattedLastUpdatedAt:"8/20/2021",frontMatter:{title:"Puppet Provider: PadLocal",sidebar_label:"PadLocal"},sidebar:"docs",previous:{title:"Lark",permalink:"/docs/puppet-providers/lark"},next:{title:"WeChat4U",permalink:"/docs/puppet-providers/wechat4u"}},c=[{value:"Features",id:"features",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Roadmap",id:"roadmap",children:[]},{value:"History",id:"history",children:[]},{value:"Maintainers",id:"maintainers",children:[]}],s={toc:c};function k(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"padlocal"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Puppet-PadLocal-blueviolet",alt:"Wechaty Puppet PadLocal"}))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://wechaty.js.org/assets/2020/padlocal/logo.png",alt:"Wechaty Puppet PadLocal"})),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://badge.fury.io/js/wechaty-puppet-padlocal"},(0,l.kt)("img",{parentName:"a",src:"https://badge.fury.io/js/wechaty-puppet-padlocal.svg",alt:"NPM Version"})),"\n",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-puppet-padlocal?activeTab=versions"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/wechaty-puppet-padlocal/next.svg",alt:"npm (tag)"})),"\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/padlocal/padlocal-client-ts"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Powered%20By-padlocal--client--ts-brightgreen",alt:"Powered by padlocal-client-ts"}))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Repo: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/padlocal/wechaty-puppet-padlocal"},"https://github.com/padlocal/wechaty-puppet-padlocal")),(0,l.kt)("li",{parentName:"ul"},"Support & Feedback: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/padlocal/wechaty-puppet-padlocal/issues"},"https://github.com/padlocal/wechaty-puppet-padlocal/issues"))),(0,l.kt)("h2",{id:"features"},"Features"),(0,l.kt)("p",null,"PadLocal is a full-featured Wechaty Puppet Provider."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"),(0,l.kt)("th",{parentName:"tr",align:null},"padlocal"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"<\u6d88\u606f>")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u6536\u53d1\u6587\u672c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u6536\u53d1\u4e2a\u4eba\u540d\u7247"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u6536\u53d1\u56fe\u6587\u94fe\u63a5"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u56fe\u7247\u3001\u6587\u4ef6"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u56fe\u7247\u3001\u6587\u4ef6"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u89c6\u9891"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u89c6\u9891"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u5c0f\u7a0b\u5e8f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u52a8\u56fe"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u52a8\u56fe"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u8bed\u97f3\u6d88\u606f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u8bed\u97f3\u6d88\u606f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u6587\u672c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u56fe\u7247"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u56fe\u6587\u94fe\u63a5"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u97f3\u9891"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u89c6\u9891"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u6587\u4ef6"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u52a8\u56fe"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"<\u7fa4\u7ec4>")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u7fa4\u804a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u7fa4\u516c\u544a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u7fa4\u516c\u544a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7fa4\u4e8c\u7ef4\u7801"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u62c9\u4eba\u8fdb\u7fa4"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8e22\u4eba\u51fa\u7fa4"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u9000\u51fa\u7fa4\u804a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u6539\u7fa4\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5165\u7fa4\u4e8b\u4ef6"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u79bb\u7fa4\u4e8b\u4ef6"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7fa4\u540d\u79f0\u53d8\u66f4\u4e8b\u4ef6"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@\u7fa4\u6210\u5458"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7fa4\u5217\u8868"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7fa4\u6210\u5458\u5217\u8868"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7fa4\u8be6\u60c5"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"<\u8054\u7cfb\u4eba>")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u4fee\u6539\u5907\u6ce8"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u597d\u53cb"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u81ea\u52a8\u901a\u8fc7\u597d\u53cb"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u597d\u53cb"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u597d\u53cb\u5217\u8868"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u597d\u53cb\u8be6\u60c5"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"<\u5176\u4ed6>")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u767b\u5f55\u5fae\u4fe1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u626b\u7801\u72b6\u6001"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u9000\u51fa\u5fae\u4fe1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u4f9d\u8d56\u534f\u8bae"),(0,l.kt)("td",{parentName:"tr",align:null},"iPad")))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"TOKEN required")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"PadLocal is a Wechaty Puppet Provider which consumes Wechaty Puppet Service."),(0,l.kt)("p",{parentName:"div"},"Learn about ",(0,l.kt)("a",{parentName:"p",href:"/docs/puppet-services/padlocal"},"how to get a PadLocal TOKEN")))),(0,l.kt)(p.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-padlocal\nexport WECHATY_PUPPET=wechaty-puppet-padlocal\nexport WECHATY_PUPPET_PADLOCAL_TOKEN=__TOKEN__\nnpm start\n"))),(0,l.kt)(i.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-padlocal\nexport WECHATY_PUPPET=wechaty-puppet-padlocal\nexport WECHATY_PUPPET_PADLOCAL_TOKEN=__TOKEN__\nnpm start\n"))),(0,l.kt)(i.Z,{value:"windows",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-padlocal\nset WECHATY_PUPPET=wechaty-puppet-padlocal\nset WECHATY_PUPPET_PADLOCAL_TOKEN=__TOKEN__\nnpm start\n")))),(0,l.kt)("h2",{id:"roadmap"},"Roadmap"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"to be added")),(0,l.kt)("h2",{id:"history"},"History"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2020/10/12/puppet-padlocal-intro/"},"New Wechaty Puppet Service: PadLocal, Padlocal, Oct 12, 2020"))),(0,l.kt)("h2",{id:"maintainers"},"Maintainers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/padlocal"},"@padlocal"))))}k.isMDXComponent=!0},8944:function(t,e,a){function n(t){var e,a,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(a=n(t[e]))&&(r&&(r+=" "),r+=a);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function r(){for(var t,e,a=0,r="";a<arguments.length;)(t=arguments[a++])&&(e=n(t))&&(r&&(r+=" "),r+=e);return r}a.d(e,{Z:function(){return r}})}}]);