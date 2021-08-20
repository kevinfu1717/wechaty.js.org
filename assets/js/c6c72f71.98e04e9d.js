"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8248,5863,2775,2076,9725,4562,9842,7574,313,196,9685,2826],{5318:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return h}});var o=n(7378);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=o.createContext({}),c=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},u=function(t){var e=c(t.components);return o.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,l=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=c(n),h=a,g=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return n?o.createElement(g,s(s({ref:e},u),{},{components:n})):o.createElement(g,s({ref:e},u))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:a,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},517:function(t,e,n){var o=n(7378);e.Z=function(t){var e=t.children,n=t.hidden,a=t.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:a},e)}},4535:function(t,e,n){n.d(e,{Z:function(){return p}});var o=n(7378),a=n(4956);var r=function(){var t=(0,o.useContext)(a.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},s=n(8944),i="tabItem_c0e5",l="tabItemActive_28AG";var c=37,u=39;var p=function(t){var e=t.lazy,n=t.block,a=t.defaultValue,p=t.values,d=t.groupId,h=t.className,g=r(),m=g.tabGroupChoices,y=g.setTabGroupChoices,f=(0,o.useState)(a),b=f[0],v=f[1],k=o.Children.toArray(t.children),w=[];if(null!=d){var N=m[d];null!=N&&N!==b&&p.some((function(t){return t.value===N}))&&v(N)}var x=function(t){var e=t.currentTarget,n=w.indexOf(e),o=p[n].value;v(o),null!=d&&(y(d,o),setTimeout((function(){var t,n,o,a,r,s,i,c;(t=e.getBoundingClientRect(),n=t.top,o=t.left,a=t.bottom,r=t.right,s=window,i=s.innerHeight,c=s.innerWidth,n>=0&&r<=c&&a<=i&&o>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(l),setTimeout((function(){return e.classList.remove(l)}),2e3))}),150))},T=function(t){var e,n;switch(t.keyCode){case u:var o=w.indexOf(t.target)+1;n=w[o]||w[0];break;case c:var a=w.indexOf(t.target)-1;n=w[a]||w[w.length-1]}null==(e=n)||e.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},h)},p.map((function(t){var e=t.value,n=t.label;return o.createElement("li",{role:"tab",tabIndex:b===e?0:-1,"aria-selected":b===e,className:(0,s.Z)("tabs__item",i,{"tabs__item--active":b===e}),key:e,ref:function(t){return w.push(t)},onKeyDown:T,onFocus:x,onClick:x},n)}))),e?(0,o.cloneElement)(k.filter((function(t){return t.props.value===b}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},k.map((function(t,e){return(0,o.cloneElement)(t,{key:e,hidden:t.props.value!==b})}))))}},4956:function(t,e,n){var o=(0,n(7378).createContext)(void 0);e.Z=o},3171:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var o=n(5773),a=n(808),r=(n(7378),n(5318)),s=["components"],i={},l=void 0,c={unversionedId:"polyglot/dotnet/transclusions/shortest-chatbot",id:"polyglot/dotnet/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`csharp",source:"@site/docs/polyglot/dotnet/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/dotnet/transclusions",slug:"/polyglot/dotnet/transclusions/shortest-chatbot",permalink:"/docs/polyglot/dotnet/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/dotnet/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"Rohitesh Kumar Jain",lastUpdatedAt:1629485791,formattedLastUpdatedAt:"8/20/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,s);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var wechaty = new Wechaty(options, logger).onScan((qrcode, status) => {\n  Console.WriteLine($"Scan QR Code to login: {status} https://wechaty.js.org/qrcode/{(qrcode)}`");\n}).OnLogin( user => {\n  Console.WriteLine("User {user} logined");\n}).OnMessage( message => {\n  Console.WriteLine($"Message: {message}");\n}).Start();\n')))}d.isMDXComponent=!0},2641:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var o=n(5773),a=n(808),r=(n(7378),n(5318)),s=["components"],i={},l=void 0,c={unversionedId:"polyglot/go/transclusions/shortest-chatbot",id:"polyglot/go/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`go",source:"@site/docs/polyglot/go/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/go/transclusions",slug:"/polyglot/go/transclusions/shortest-chatbot",permalink:"/docs/polyglot/go/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/go/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"Rohitesh Kumar Jain",lastUpdatedAt:1629485791,formattedLastUpdatedAt:"8/20/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,s);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n "fmt"\n\n  "github.com/wechaty/go-wechaty/wechaty"\n)\n\nfunc main() {\n  _ = wechaty.NewWechaty().\n    OnScan(func(qrCode, status string) {\n      fmt.Printf("Scan QR Code to login: %s\\nhttps://wechaty.js.org/qrcode/%s\\n", status, qrCode)\n    }).\n    OnLogin(func(user string) { fmt.Printf("User %s logged in\\n", user) }).\n    OnMessage(func(message string) { fmt.Printf("Message: %s\\n", message) }).\n    Start()\n}\n')))}d.isMDXComponent=!0},2928:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var o=n(5773),a=n(808),r=(n(7378),n(5318)),s=["components"],i={},l=void 0,c={unversionedId:"polyglot/java/transclusions/shortest-chatbot",id:"polyglot/java/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`java",source:"@site/docs/polyglot/java/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/java/transclusions",slug:"/polyglot/java/transclusions/shortest-chatbot",permalink:"/docs/polyglot/java/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/java/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"Rohitesh Kumar Jain",lastUpdatedAt:1629485791,formattedLastUpdatedAt:"8/20/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,s);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package io.github.wechaty;\n\nclass Bot{\n  public static void main(String args[]){\n    Wechaty bot = Wechaty.instance()\n      .onScan((qrcode, statusScanStatus, data) -> System.out.println(QrcodeUtils.getQr(qrcode)))\n      .onLogin(user -> System.out.println("User logged in :" + user))\n      .onMessage(message -> System.out.println("Message:" + message))\n      .start(true);\n  }\n}\n')))}d.isMDXComponent=!0},1797:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var o=n(5773),a=n(808),r=(n(7378),n(5318)),s=["components"],i={},l=void 0,c={unversionedId:"polyglot/openapi/transclusions/shortest-chatbot",id:"polyglot/openapi/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`sh",source:"@site/docs/polyglot/openapi/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/openapi/transclusions",slug:"/polyglot/openapi/transclusions/shortest-chatbot",permalink:"/docs/polyglot/openapi/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/openapi/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"Rohitesh Kumar Jain",lastUpdatedAt:1629485791,formattedLastUpdatedAt:"8/20/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,s);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# To be add: curl ...\n")))}d.isMDXComponent=!0},9826:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var o=n(5773),a=n(808),r=(n(7378),n(5318)),s=["components"],i={},l=void 0,c={unversionedId:"polyglot/php/transclusions/shortest-chatbot",id:"polyglot/php/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`php",source:"@site/docs/polyglot/php/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/php/transclusions",slug:"/polyglot/php/transclusions/shortest-chatbot",permalink:"/docs/polyglot/php/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/php/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"Rohitesh Kumar Jain",lastUpdatedAt:1629485791,formattedLastUpdatedAt:"8/20/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,s);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'$wechaty = \\IO\\Github\\Wechaty\\Wechaty::getInstance($token, $endPoint);\n$wechaty->onScan(function($qrcode, $status, $data) {\n    $qr = \\IO\\Github\\Wechaty\\Util\\QrcodeUtils::getQr($qrcode);\n    echo "$qr\\n\\nOnline Image: https://wechaty.js.org/qrcode/$qrcode\\n";\n})->onLogin(function(\\IO\\Github\\Wechaty\\User\\ContactSelf $user) {\n})->onMessage(function(\\IO\\Github\\Wechaty\\User\\Message $message) {\n    $message->say("hello from PHP7.4");\n})->start();\n')))}d.isMDXComponent=!0},9845:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var o=n(5773),a=n(808),r=(n(7378),n(5318)),s=["components"],i={},l=void 0,c={unversionedId:"polyglot/python/transclusions/shortest-chatbot",id:"polyglot/python/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`py",source:"@site/docs/polyglot/python/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/python/transclusions",slug:"/polyglot/python/transclusions/shortest-chatbot",permalink:"/docs/polyglot/python/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/python/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"Rohitesh Kumar Jain",lastUpdatedAt:1629485791,formattedLastUpdatedAt:"8/20/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,s);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from wechaty import Wechaty\nimport asyncio\n\nasync def main():\n    bot = Wechaty()\n    bot.on('scan', lambda status, qrcode, data: print('Scan QR Code to login: {}\\nhttps://wechaty.js.org/qrcode/{}'.format(status, qrcode)))\n    bot.on('login', lambda user: print('User {} logged in'.format(user)))\n    bot.on('message', lambda message: print('Message: {}'.format(message)))\n    await bot.start()\n\nasyncio.run(main())\n")))}d.isMDXComponent=!0},4732:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var o=n(5773),a=n(808),r=(n(7378),n(5318)),s=["components"],i={},l=void 0,c={unversionedId:"polyglot/rust/transclusions/shortest-chatbot",id:"polyglot/rust/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`rust",source:"@site/docs/polyglot/rust/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/rust/transclusions",slug:"/polyglot/rust/transclusions/shortest-chatbot",permalink:"/docs/polyglot/rust/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/rust/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"Rohitesh Kumar Jain",lastUpdatedAt:1629485791,formattedLastUpdatedAt:"8/20/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,s);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let bot = Wechaty::new(PuppetService::new(options).await.unwrap());\n\nbot.on_scan(handle_scan)\n    .on_login(handle_login)\n    .on_logout(handle_logout)\n    .on_message(handle_message)\n    .start()\n    .await;\n")))}d.isMDXComponent=!0},2489:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var o=n(5773),a=n(808),r=(n(7378),n(5318)),s=["components"],i={},l=void 0,c={unversionedId:"polyglot/scala/transclusions/shortest-chatbot",id:"polyglot/scala/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`scala",source:"@site/docs/polyglot/scala/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/scala/transclusions",slug:"/polyglot/scala/transclusions/shortest-chatbot",permalink:"/docs/polyglot/scala/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/scala/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"Rohitesh Kumar Jain",lastUpdatedAt:1629485791,formattedLastUpdatedAt:"8/20/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,s);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'package wechaty\n\nobject DingDongBot {\n  def main(args: Array[String]): Unit = {\n    Wechaty.instance()\n      .onScan(payload     => { println("Scan QR Code to login: %s\\nhttps://wechaty.js.org/qrcode/%s\\n".format(payload.status, payload.qrcode)) })\n      .onLogin(payload    => { println("User %s logged in\\n".format(payload.id)) })\n      .onMessage(message  => { println(message) })\n      .start()\n    Thread.currentThread().join()\n  }\n}\n')))}d.isMDXComponent=!0},1645:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return v},contentTitle:function(){return k},metadata:function(){return w},toc:function(){return N},default:function(){return T}});var o=n(5773),a=n(808),r=(n(7378),n(5318)),s=n(4535),i=n(517),l=n(6474),c=n(1797),u=n(5297),p=n(9845),d=n(2641),h=n(2928),g=n(9826),m=n(2489),y=n(3171),f=n(4732),b=["components"],v={},k=void 0,w={unversionedId:"polyglot/transclusions/shortest-chatbots",id:"polyglot/transclusions/shortest-chatbots",isDocsHomePage:!1,title:"shortest-chatbots",description:"<Tabs",source:"@site/docs/polyglot/transclusions/shortest-chatbots.mdx",sourceDirName:"polyglot/transclusions",slug:"/polyglot/transclusions/shortest-chatbots",permalink:"/docs/polyglot/transclusions/shortest-chatbots",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/transclusions/shortest-chatbots.mdx",version:"current",lastUpdatedBy:"Rohitesh Kumar Jain",lastUpdatedAt:1629485791,formattedLastUpdatedAt:"8/20/2021",frontMatter:{}},N=[],x={toc:N};function T(t){var e=t.components,n=(0,a.Z)(t,b);return(0,r.kt)("wrapper",(0,o.Z)({},x,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(s.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"OpenAPI",value:"openapi"},{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"openapi",mdxType:"TabItem"},(0,r.kt)(c.default,{mdxType:"ShortestChatbotOpenApi"})),(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)(l.default,{mdxType:"ShortestChatbotTypeScript"})),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)(u.default,{mdxType:"ShortestChatbotJavaScript"})),(0,r.kt)(i.Z,{value:"py",mdxType:"TabItem"},(0,r.kt)(p.default,{mdxType:"ShortestChatbotPython"})),(0,r.kt)(i.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)(d.default,{mdxType:"ShortestChatbotGo"})),(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)(h.default,{mdxType:"ShortestChatbotJava"})),(0,r.kt)(i.Z,{value:"php",mdxType:"TabItem"},(0,r.kt)(g.default,{mdxType:"ShortestChatbotPhp"})),(0,r.kt)(i.Z,{value:"scala",mdxType:"TabItem"},(0,r.kt)(m.default,{mdxType:"ShortestChatbotScala"})),(0,r.kt)(i.Z,{value:"csharp",mdxType:"TabItem"},(0,r.kt)(y.default,{mdxType:"ShortestChatbotDotnet"})),(0,r.kt)(i.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)(f.default,{mdxType:"ShortestChatbotRust"}))))}T.isMDXComponent=!0},5297:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var o=n(5773),a=n(808),r=(n(7378),n(5318)),s=["components"],i={},l=void 0,c={unversionedId:"polyglot/typescript/transclusions/shortest-chatbot-js",id:"polyglot/typescript/transclusions/shortest-chatbot-js",isDocsHomePage:!1,title:"shortest-chatbot-js",description:"`js",source:"@site/docs/polyglot/typescript/transclusions/shortest-chatbot-js.mdx",sourceDirName:"polyglot/typescript/transclusions",slug:"/polyglot/typescript/transclusions/shortest-chatbot-js",permalink:"/docs/polyglot/typescript/transclusions/shortest-chatbot-js",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/typescript/transclusions/shortest-chatbot-js.mdx",version:"current",lastUpdatedBy:"Rohitesh Kumar Jain",lastUpdatedAt:1629485791,formattedLastUpdatedAt:"8/20/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,s);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { Wechaty } = require('wechaty')\n\nasync function main () {\n  const bot = new Wechaty()\n  bot\n    .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))\n    .on('login',            user => console.log(`User ${user} logged in`))\n    .on('message',       message => console.log(`Message: ${message}`))\n  await bot.start()\n}\n\nmain()\n  .catch(console.error)\n")))}d.isMDXComponent=!0},6474:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var o=n(5773),a=n(808),r=(n(7378),n(5318)),s=["components"],i={},l=void 0,c={unversionedId:"polyglot/typescript/transclusions/shortest-chatbot",id:"polyglot/typescript/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`ts",source:"@site/docs/polyglot/typescript/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/typescript/transclusions",slug:"/polyglot/typescript/transclusions/shortest-chatbot",permalink:"/docs/polyglot/typescript/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/typescript/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"Rohitesh Kumar Jain",lastUpdatedAt:1629485791,formattedLastUpdatedAt:"8/20/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,s);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Wechaty } from 'wechaty'\n\nasync function main () {\n  const bot = new Wechaty()\n  bot\n    .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))\n    .on('login',            user => console.log(`User ${user} logged in`))\n    .on('message',       message => console.log(`Message: ${message}`))\n  await bot.start()\n}\n\nmain()\n  .catch(console.error)\n")))}d.isMDXComponent=!0},9457:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return g}});var o=n(5773),a=n(808),r=(n(7378),n(5318)),s=n(4535),i=n(517),l=(n(1645),["components"]),c={title:"Event Logger plugin"},u=void 0,p={unversionedId:"using-plugin-with-wechaty/event-logger",id:"using-plugin-with-wechaty/event-logger",isDocsHomePage:!1,title:"Event Logger plugin",description:"The EventLogger plugin helps in logging Wechaty events with just one line of code. In this tutorial, you will learn how to add the EventLogger plugin to a Wechaty bot.",source:"@site/docs/using-plugin-with-wechaty/event-logger.mdx",sourceDirName:"using-plugin-with-wechaty",slug:"/using-plugin-with-wechaty/event-logger",permalink:"/docs/using-plugin-with-wechaty/event-logger",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/using-plugin-with-wechaty/event-logger.mdx",version:"current",lastUpdatedBy:"Rohitesh Kumar Jain",lastUpdatedAt:1629485791,formattedLastUpdatedAt:"8/20/2021",frontMatter:{title:"Event Logger plugin"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/using-plugin-with-wechaty/overview"},next:{title:"QR Code Terminal plugin",permalink:"/docs/using-plugin-with-wechaty/qr-code-terminal"}},d=[{value:"Requirements",id:"requirements",children:[]},{value:"Getting started",id:"getting-started",children:[]},{value:"Adding Event Logger plugin",id:"adding-event-logger-plugin",children:[{value:"1. Create a starter bot",id:"1-create-a-starter-bot",children:[]},{value:"2. Install dependency",id:"2-install-dependency",children:[]},{value:"3. Integrate the plugin",id:"3-integrate-the-plugin",children:[]},{value:"4. Run the bot",id:"4-run-the-bot",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]},{value:"References",id:"references",children:[]}],h={toc:d};function g(t){var e=t.components,c=(0,a.Z)(t,l);return(0,r.kt)("wrapper",(0,o.Z)({},h,c,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"EventLogger")," plugin helps in logging Wechaty events with just one line of code. In this tutorial, you will learn how to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"EventLogger")," plugin to a Wechaty bot."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download"},"Node.js")," v12+"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/wechaty"},"Wechaty")," v0.40+"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/wechaty-plugin-contrib"},"Wechaty Plugin Contrib"))),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("p",null,"You will require ",(0,r.kt)("inlineCode",{parentName:"p"},"Node.js")," version ",(0,r.kt)("strong",{parentName:"p"},"12.0")," or greater in order to follow this tutorial. You can verify whether ",(0,r.kt)("inlineCode",{parentName:"p"},"Node.js")," is installed on your system or whether you have the correct version using the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"node -v\n")),(0,r.kt)("p",null,"If you do not have ",(0,r.kt)("inlineCode",{parentName:"p"},"Node.js")," installed or your version is below requirement, get the latest version of ",(0,r.kt)("inlineCode",{parentName:"p"},"Node.js")," by following the links below:"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Node.js installation docs")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#windows"},"Windows")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions"},"Linux","(","Debian/Ubuntu",")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#macos"},"macOS"))),(0,r.kt)("blockquote",{parentName:"div"},(0,r.kt)("p",{parentName:"blockquote"},"Installation guide for ",(0,r.kt)("inlineCode",{parentName:"p"},"Node.js")," on other platforms can be found ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/package-manager/"},"here"),".")))),(0,r.kt)("h2",{id:"adding-event-logger-plugin"},"Adding Event Logger plugin"),(0,r.kt)("p",null,"For the demonstration of adding this plugin, we will use the ",(0,r.kt)("strong",{parentName:"p"},"Starter Bot")," and show you how to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"EventLogger")," plugin to it. Follow the steps below:"),(0,r.kt)("h3",{id:"1-create-a-starter-bot"},"1. Create a starter bot"),(0,r.kt)("p",null,"Follow the instructions on the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"../examples/basic/starter-bot"},"Starter Bot"))," page to create the foundation of a Wechaty bot."),(0,r.kt)("h3",{id:"2-install-dependency"},"2. Install dependency"),(0,r.kt)("p",null,"As the ",(0,r.kt)("inlineCode",{parentName:"p"},"EventLogger")," plugin is present in the ",(0,r.kt)("inlineCode",{parentName:"p"},"wechaty-plugin-contrib")," NPM package, you have to first add it to the dependencies. It can be installed using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm i wechaty-plugin-contrib\n")),(0,r.kt)("h3",{id:"3-integrate-the-plugin"},"3. Integrate the plugin"),(0,r.kt)("p",null,"Inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"event-logger-bot.ts")," file, import the plugin:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { EventLogger } from 'wechaty-plugin-contrib'\n")),(0,r.kt)("p",null,"Now, just before starting the bot, you can use this plugin:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Add the following line to use the plugin\nbot.use(EventLogger())\nbot.start()\n")),(0,r.kt)("h3",{id:"4-run-the-bot"},"4. Run the bot"),(0,r.kt)("p",null,"In order to run the bot, first you have to ",(0,r.kt)("strong",{parentName:"p"},"export/set")," an environment variable with the type of puppet to use, and then start the bot:"),(0,r.kt)(s.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export WECHATY_LOG=verbose\nexport WECHATY_PUPPET=wechaty-puppet-wechat\nmake bot\n# the above is equals to the below command:\n# npm start\n#   or, npx ts-node examples/ding-dong-bot.ts\n"))),(0,r.kt)(i.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export WECHATY_LOG=verbose\nexport WECHATY_PUPPET=wechaty-puppet-wechat\nmake bot\n# the above is equals to the below command:\n# npm start\n#   or, npx ts-node examples/ding-dong-bot.ts\n"))),(0,r.kt)(i.Z,{value:"windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"set WECHATY_LOG=verbose\nset WECHATY_PUPPET=wechaty-puppet-wechat\nmake bot\n# the above is equals to the below command:\n# npm start\n#   or, npx ts-node examples/ding-dong-bot.ts\n")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"EventLogger plugin output",src:n(9462).Z})),(0,r.kt)("p",null,"Congratulations! You have successfully integrated the ",(0,r.kt)("inlineCode",{parentName:"p"},"EventLogger")," plugin to your Wechaty bot. You will see after running the bot, it starts logging the Wechaty events."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"You can apply a similar concept to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"EventLogger")," plugin to any of your Wechaty bots. You can learn more about this plugin ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-plugin-contrib#2-eventlogger"},"here"),"."),(0,r.kt)("p",null,"Learn how to integrate ",(0,r.kt)("a",{parentName:"p",href:"./qr-code-terminal"},"QR Code Terminal Plugin")," to your Wechaty bot in the next tutorial."),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-plugin-contrib"},"GitHub repository of Wechaty Plugin Contrib")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/wechaty-plugin-contrib"},"NPM package of Wechaty Plugin Contrib")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=tfGZXoe_aA4"},"Wechaty plugin launch video"))))}g.isMDXComponent=!0},8944:function(t,e,n){function o(t){var e,n,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=o(t[e]))&&(a&&(a+=" "),a+=n);else for(e in t)t[e]&&(a&&(a+=" "),a+=e);return a}function a(){for(var t,e,n=0,a="";n<arguments.length;)(t=arguments[n++])&&(e=o(t))&&(a&&(a+=" "),a+=e);return a}n.d(e,{Z:function(){return a}})},9462:function(t,e,n){e.Z=n.p+"assets/images/event-logger-output-d9796e0eeb68e68d45cd98b4675b9b01.webp"}}]);