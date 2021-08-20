"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[815],{5318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5882:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=n(5773),a=n(808),o=(n(7378),n(5318)),i=["components"],s={title:"Wechaty Plugin",sidebar_label:"Plugin"},c=void 0,l={unversionedId:"specs/plugin",id:"specs/plugin",isDocsHomePage:!1,title:"Wechaty Plugin",description:"Middleware is computer software that connects software components or applications. The software consists of a set of services that allows multiple processes running on one or more machines to interact.",source:"@site/docs/specs/plugin.md",sourceDirName:"specs",slug:"/specs/plugin",permalink:"/docs/specs/plugin",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/specs/plugin.md",version:"current",lastUpdatedBy:"Rohitesh Kumar Jain",lastUpdatedAt:1629485791,formattedLastUpdatedAt:"8/20/2021",frontMatter:{title:"Wechaty Plugin",sidebar_label:"Plugin"},sidebar:"docs",previous:{title:"Wechaty",permalink:"/docs/specs/wechaty"},next:{title:"Puppet",permalink:"/docs/specs/puppet"}},u=[{value:"A Purpose from @Gcaufy",id:"a-purpose-from-gcaufy",children:[{value:"Wechaty.use(middleware: WechatyMiddleware)",id:"wechatyusemiddleware-wechatymiddleware",children:[]}]},{value:"Links",id:"links",children:[]},{value:"History",id:"history",children:[]}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Middleware is computer software that connects software components or applications. The software consists of a set of services that allows multiple processes running on one or more machines to interact.",(0,o.kt)("br",{parentName:"p"}),"\n","\u2014"," ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Middleware"},"Wikipedia"))),(0,o.kt)("p",null,"See also: ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/2904937/1123955"},"What is middleware exactly?")),(0,o.kt)("h2",{id:"a-purpose-from-gcaufy"},"A Purpose from @Gcaufy"),(0,o.kt)("p",null,"Yesterday, in our contributor group, @Gcaufy suggested that it would be great to add supporting of middleware to the Wechaty ecosystem, like the following usage:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6709\u6ca1\u6709\u4eba\u628a \u8e22\u4eba\u90a3\u4e2a\u505a\u6210\u901a\u7528\u7ec4\u4ef6\u3002\u3002\u3002\u90a3\u4e2a\u5f88\u5b9e\u7528\u5440")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"wechaty.use(KickoutPlugin({\n  room: 'RoomName',\n}));\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u7136\u540e\u8fd9\u4e2a\u623f\u95f4\u5c31\u6709\u8e22\u4eba\u529f\u80fd\u4e86\u3002")),(0,o.kt)("p",null,"I feel that it is a Brilliant idea!"),(0,o.kt)("p",null,"So how about we design a middleware system like this:"),(0,o.kt)("h3",{id:"wechatyusemiddleware-wechatymiddleware"},"Wechaty.use(middleware: WechatyMiddleware)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type WechatyMiddleware = (this: Wechaty) => void\n\nclass Wechaty {\n  public use (middleware: WechatyMiddleWare) {\n    middleware.apply(this)\n  }\n}\n\nconst kickoutPlugin = (options = {}) => {\n  const roomTopic = options.roomTopic\n  return function (this: Wechaty) {\n    this.on('message'), message => {\n      if (message.room()) && message.room().topic() === roomTopic) {\n        if (message.mentionSelf()) {\n          // check vote\n          message.room().del(...)\n        }\n      }\n    })\n  }\n}\n\nconst wechaty = new Wechaty()\nwechaty.use(kickOffPlugin({ roomTopic: 'Test Room' }))\n")),(0,o.kt)("p",null,"Any comments about this design will be welcome."),(0,o.kt)("p",null,"P.S. The Kickout Feature was originally introduced from the PR ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/friday/pull/4"},"add vote manager to manage vote message in room #4")," authored by @windmemory."),(0,o.kt)("h2",{id:"links"},"Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stephensugden.com/middleware_guide/"},"A short guide to Connect Middleware")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://expressjs.com/en/guide/using-middleware.html"},"Express Documentation for Using middleware"))),(0,o.kt)("h2",{id:"history"},"History"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Wechaty Plugin Support with Kickout Example ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/issues/1939"},"#1939")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2020/07/22/wechaty-plugin-milestone/"},"Wechaty\u63d2\u4ef6\u7cfb\u7edf\u53d1\u5e03\uff0c\u8ba9\u4f60\u7684\u673a\u5668\u4eba\u5feb\u901f\u63a5\u5165\u590d\u6742\u7ba1\u7406\u548c\u667a\u80fd\u5bf9\u8bdd\u80fd\u529b, @rickyyin98, Jul 22, 2020"))))}m.isMDXComponent=!0}}]);