"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1480],{5318:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var a=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,m=p["".concat(u,".").concat(d)]||p[d]||h[d]||r;return n?a.createElement(m,i(i({ref:t},l),{},{components:n})):a.createElement(m,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},517:function(e,t,n){var a=n(7378);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},4535:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(7378),o=n(4956);var r=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(8944),s="tabItem_c0e5",u="tabItemActive_28AG";var c=37,l=39;var h=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,h=e.values,p=e.groupId,d=e.className,m=r(),g=m.tabGroupChoices,f=m.setTabGroupChoices,b=(0,a.useState)(o),y=b[0],w=b[1],k=a.Children.toArray(e.children),v=[];if(null!=p){var N=g[p];null!=N&&N!==y&&h.some((function(e){return e.value===N}))&&w(N)}var x=function(e){var t=e.currentTarget,n=v.indexOf(t),a=h[n].value;w(a),null!=p&&(f(p,a),setTimeout((function(){var e,n,a,o,r,i,s,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,o=e.bottom,r=e.right,i=window,s=i.innerHeight,c=i.innerWidth,n>=0&&r<=c&&o<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case l:var a=v.indexOf(e.target)+1;n=v[a]||v[0];break;case c:var o=v.indexOf(e.target)-1;n=v[o]||v[v.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},d)},h.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":y===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:O,onFocus:x,onClick:x},n)}))),t?(0,a.cloneElement)(k.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},4956:function(e,t,n){var a=(0,n(7378).createContext)(void 0);t.Z=a},34:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return h},toc:function(){return p},default:function(){return m}});var a=n(5773),o=n(808),r=(n(7378),n(5318)),i=n(4535),s=n(517),u=["components"],c={title:"Troubleshooting"},l=void 0,h={unversionedId:"explainations/troubleshooting",id:"explainations/troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"The Troubleshooting section discusses the most common problems that you will encounter while creating a chatbot using Wechaty, contributing to Wechaty codebase, contributing to Wechaty documentation, or developing Wechaty puppet and how to fix them.",source:"@site/docs/explainations/troubleshooting.mdx",sourceDirName:"explainations",slug:"/explainations/troubleshooting",permalink:"/docs/explainations/troubleshooting",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/explainations/troubleshooting.mdx",version:"current",lastUpdatedBy:"Rohitesh Kumar Jain",lastUpdatedAt:1629485791,formattedLastUpdatedAt:"8/20/2021",frontMatter:{title:"Troubleshooting"},sidebar:"docs",previous:{title:"FAQ",permalink:"/docs/explainations/faq"},next:{title:"Style Guide",permalink:"/docs/docusaurus/doc1"}},p=[{value:"Chatbot developers",id:"chatbot-developers",children:[{value:"I cannot log in with my Wechat account",id:"i-cannot-log-in-with-my-wechat-account",children:[]},{value:"Nothing happens when I dispatch an action when using Wechaty with Redux",id:"nothing-happens-when-i-dispatch-an-action-when-using-wechaty-with-redux",children:[]},{value:"Ding dong bot displays error after scanning QR code",id:"ding-dong-bot-displays-error-after-scanning-qr-code",children:[]}]},{value:"Wechaty documentation",id:"wechaty-documentation",children:[{value:"I am getting <code>Failed to exec pre-push hook script</code> error when I try to push my changes to GitHub",id:"i-am-getting-failed-to-exec-pre-push-hook-script-error-when-i-try-to-push-my-changes-to-github",children:[]},{value:"I am submitting a blog post for publication but the tests are failing",id:"i-am-submitting-a-blog-post-for-publication-but-the-tests-are-failing",children:[]},{value:"<code>npm run build</code> or <code>npx docusaurus start</code> throws an error",id:"npm-run-build-or-npx-docusaurus-start-throws-an-error",children:[]}]},{value:"My problem has not been discussed here",id:"my-problem-has-not-been-discussed-here",children:[]}],d={toc:p};function m(e){var t=e.components,c=(0,o.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Troubleshooting section discusses the most common problems that you will encounter while creating a chatbot using Wechaty, contributing to Wechaty codebase, contributing to Wechaty documentation, or developing Wechaty puppet and how to fix them."),(0,r.kt)("h2",{id:"chatbot-developers"},"Chatbot developers"),(0,r.kt)("h3",{id:"i-cannot-log-in-with-my-wechat-account"},"I cannot log in with my Wechat account"),(0,r.kt)("p",null,"Wechat accounts registered after 2017 cannot log in via Web API because this is a limitation. Click ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/issues/872"},"this issue")," for more information.\nHowever, Wechaty supports protocols other than Web API, such as Pad. Learn more about it ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/issues/1296"},"in this issue"),"."),(0,r.kt)("h3",{id:"nothing-happens-when-i-dispatch-an-action-when-using-wechaty-with-redux"},"Nothing happens when I dispatch an action when using Wechaty with Redux"),(0,r.kt)("p",null,"Redux is a state management library you can use with Wechaty. It has the concept of ",(0,r.kt)("a",{parentName:"p",href:"https://redux.js.org/faq/immutable-data"},"immutability"),". Sometimes, you can dispatch an action that correctly updates the state in the redux store but your view does not update. One of the reasons for that happening is because you are mutating the existing state instead of returning the new state. Therefore never mutate state when using Redux with Wechaty even if it is tempting to do so."),(0,r.kt)("h3",{id:"ding-dong-bot-displays-error-after-scanning-qr-code"},"Ding dong bot displays error after scanning QR code"),(0,r.kt)("p",null,"When running the ding dong bot using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"wechaty-getting-started repository"),", on ",(0,r.kt)("a",{parentName:"p",href:"/docs/quick-start/running-on-gitpod"},"Gitpod")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/quick-start/running-on-google-cloud-shell"},"Google cloud shell"),", the default Instant Messaging platform is ",(0,r.kt)("a",{parentName:"p",href:"https://www.wechat.com/en/"},"Wechat"),". Scanning QR codes for other Instant messaging platforms will not work unless you explicitly set the value of the",(0,r.kt)("inlineCode",{parentName:"p"},"WECHATY_PUPPET")," environment variable to the puppet service provider name as described in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty.js.org#readme"},"wechaty-getting-started README page"),"."),(0,r.kt)("h2",{id:"wechaty-documentation"},"Wechaty documentation"),(0,r.kt)("h3",{id:"i-am-getting-failed-to-exec-pre-push-hook-script-error-when-i-try-to-push-my-changes-to-github"},"I am getting ",(0,r.kt)("inlineCode",{parentName:"h3"},"Failed to exec pre-push hook script")," error when I try to push my changes to GitHub"),(0,r.kt)("p",null,"There is a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Chatie/git-scripts#readme"},"pre-push hook")," that has been configured to run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run lint")," and then ",(0,r.kt)("inlineCode",{parentName:"p"},"npm version patch")," before ",(0,r.kt)("inlineCode",{parentName:"p"},"git push")," for better code quality and version management."),(0,r.kt)("p",null,"If you see ",(0,r.kt)("inlineCode",{parentName:"p"},"Failed to exec pre-push hook script")," message with ",(0,r.kt)("inlineCode",{parentName:"p"},"Git push succeed")," message like in the image below, then you can ignore the error message. Your changes have been successfully pushed to GitHub."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pre-push error",src:n(8932).Z})),(0,r.kt)("p",null,"On the other hand, you may encounter ",(0,r.kt)("inlineCode",{parentName:"p"},"Failed to exec pre-push hook script")," error without ",(0,r.kt)("inlineCode",{parentName:"p"},"Git push succeed")," message. If it is your first time pushing the current branch to remote or you have not set the current local branch to track the remote, try temporarily disabling the ",(0,r.kt)("inlineCode",{parentName:"p"},"pre-push")," hook by prepending ",(0,r.kt)("inlineCode",{parentName:"p"},"NO_HOOK=1")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"git push")," command and then push with ",(0,r.kt)("inlineCode",{parentName:"p"},"-u")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--set-upstream")," flag so that the local branch will start tracking the remote."),(0,r.kt)(i.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"NO_HOOK=1 git push -u remote-repository branch-name\n"))),(0,r.kt)(s.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"NO_HOOK=1 git push -u remote-repository branch-name\n"))),(0,r.kt)(s.Z,{value:"windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"set NO_HOOK=1  git push -u remote-repository branch-name\n")))),(0,r.kt)("p",null,"You can also push with ",(0,r.kt)("inlineCode",{parentName:"p"},"--no-verify")," flag instead of prepending ",(0,r.kt)("inlineCode",{parentName:"p"},"NO_HOOK=1"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git push -u remote-repository branch-name --no-verify\n")),(0,r.kt)("p",null,"If you used the above command successfully and the local branch is tracking the remote, you can run ",(0,r.kt)("inlineCode",{parentName:"p"},"git push")," the next time you push your changes to GitHub without prepending ",(0,r.kt)("inlineCode",{parentName:"p"},"NO_HOOK=1")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"git push"),". Your changes will be successfully pushed to GitHub."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git push\n")),(0,r.kt)("h3",{id:"i-am-submitting-a-blog-post-for-publication-but-the-tests-are-failing"},"I am submitting a blog post for publication but the tests are failing"),(0,r.kt)("p",null,"We have a set of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty.js.org#readme"},"guidelines")," that you must follow when writing a blog post for publication. If the tests are failing after creating a pull request, it is most likely because you missed something or did not follow the required writing style. We recommed that you read through the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty.js.org#how-to-post-a-blog"},"How to post a blog")," section of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty.js.org#readme"},"wechaty.js.org repository README")," one more time."),(0,r.kt)("p",null,"You can also reach out to us on the ",(0,r.kt)("a",{parentName:"p",href:"https://gitter.im/wechaty/wechaty"},"Wechaty Gitter channel")," if you fail to make the tests pass. We shall be happy to help."),(0,r.kt)("h3",{id:"npm-run-build-or-npx-docusaurus-start-throws-an-error"},(0,r.kt)("inlineCode",{parentName:"h3"},"npm run build")," or ",(0,r.kt)("inlineCode",{parentName:"h3"},"npx docusaurus start")," throws an error"),(0,r.kt)("p",null,"You might have used docusaurus before and therefore used certain commands for starting the development server, triggering build process and deploying docusaurus project among others. For the wechaty documentation, check the ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file for all the scripts you can run."),(0,r.kt)("h2",{id:"my-problem-has-not-been-discussed-here"},"My problem has not been discussed here"),(0,r.kt)("p",null,"If your problem is not covered here, you can chat with us on ",(0,r.kt)("a",{parentName:"p",href:"https://gitter.im/wechaty/wechaty"},"Wechaty Gitter")," or you may create an issue on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/issues"},"Wechaty issues"),". Please update this page once you have found a solution. Someone else might face the same problem in the future."))}m.isMDXComponent=!0},8944:function(e,t,n){function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})},8932:function(e,t,n){t.Z=n.p+"assets/images/troubleshooting-b023e5d7ccd82632968f749125680b0d.webp"}}]);