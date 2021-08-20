"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9514,6119],{3207:function(e,t,n){n.r(t),n.d(t,{default:function(){return ee}});var a=n(7378),r=n(5318),o=n(353),l=n(6028),i=n(1602),c=n(8944),s=n(2551),d=n(8245),m=n(5135),u=n(3059),p=n(5773),b=function(e){return a.createElement("svg",(0,p.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},h=n(1787),f=n(808),E=n(4142),v=n(5626),g=n(1554),C="menuLinkText_qtXE",_=["items"],k=["item"],Z=["item","onItemClick","activePath"],N=["item","onItemClick","activePath"],S=function e(t,n){return"link"===t.type?(0,s.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},I=(0,a.memo)((function(e){var t=e.items,n=(0,f.Z)(e,_);return a.createElement(a.Fragment,null,t.map((function(e,t){return a.createElement(T,(0,p.Z)({key:t,item:e},n))})))}));function T(e){var t=e.item,n=(0,f.Z)(e,k);switch(t.type){case"category":return 0===t.items.length?null:a.createElement(w,(0,p.Z)({item:t},n));case"link":default:return a.createElement(M,(0,p.Z)({item:t},n))}}function w(e){var t,n=e.item,r=e.onItemClick,o=e.activePath,l=(0,f.Z)(e,Z),i=n.items,d=n.label,m=n.collapsible,u=S(n,o),b=(0,s.uR)({initialState:function(){return!!m&&(!u&&n.collapsed)}}),h=b.collapsed,E=b.setCollapsed,v=b.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,o=(0,s.D9)(t);(0,a.useEffect)((function(){t&&!o&&n&&r(!1)}),[t,o,n])}({isActive:u,collapsed:h,setCollapsed:E}),a.createElement("li",{className:(0,c.Z)("menu__list-item",{"menu__list-item--collapsed":h})},a.createElement("a",(0,p.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":m,"menu__link--active":m&&u},t[C]=!m,t)),onClick:m?function(e){e.preventDefault(),v()}:void 0,href:m?"#":void 0},l),d),a.createElement(s.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:h},a.createElement(I,{items:i,tabIndex:h?-1:0,onItemClick:r,activePath:o})))}function M(e){var t=e.item,n=e.onItemClick,r=e.activePath,o=(0,f.Z)(e,N),l=t.href,i=t.label,s=S(t,r);return a.createElement("li",{className:"menu__list-item",key:i},a.createElement(E.Z,(0,p.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":s}),to:l},(0,v.Z)(l)&&{isNavLink:!0,exact:!0,onClick:n},o),(0,v.Z)(l)?i:a.createElement("span",null,i,a.createElement(g.Z,null))))}var y="sidebar_2j-V",P="sidebarWithHideableNavbar_2fMR",x="sidebarHidden_1sUd",A="sidebarLogo_1OGv",B="menu_1Xkn",L="menuWithAnnouncementBar_1DU9",F="collapseSidebarButton_2Hma",H="collapseSidebarButtonIcon_1Kc0";function D(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,h.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",F),onClick:t},a.createElement(b,{className:H}))}function R(e){var t,n,r=e.path,o=e.sidebar,l=e.onCollapse,i=e.isHidden,d=function(){var e=(0,s.nT)().isClosed,t=(0,a.useState)(!e),n=t[0],r=t[1];return(0,m.Z)((function(t){var n=t.scrollY;e||r(0===n)})),n}(),p=(0,s.LU)(),b=p.navbar.hideOnScroll,h=p.hideableSidebar,f=(0,s.nT)().isClosed;return a.createElement("div",{className:(0,c.Z)(y,(t={},t[P]=b,t[x]=i,t))},b&&a.createElement(u.Z,{tabIndex:-1,className:A}),a.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",B,(n={},n[L]=!f&&d,n))},a.createElement("ul",{className:"menu__list"},a.createElement(I,{items:o,activePath:r}))),h&&a.createElement(D,{onClick:l}))}var W=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:"menu__list"},a.createElement(I,{items:n,activePath:r,onItemClick:function(){return t()}}))};function z(e){return a.createElement(s.Cv,{component:W,props:e})}var U=a.memo(R),Y=a.memo(z);function j(e){var t=(0,d.Z)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(U,e),r&&a.createElement(Y,e))}var q=n(775),K=n(6119),X="backToTopButton_2PbN",O="backToTopButtonShow_7uc0";function G(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var V=function(){var e,t=G(),n=t.smoothScrollTop,r=t.cancelScrollToTop,o=(0,a.useState)(!1),l=o[0],i=o[1];return(0,m.Z)((function(e,t){var n=e.scrollY;if(t){var a=n<t.scrollY;if(a||r(),n<300)i(!1);else if(a){var o=document.documentElement.scrollHeight;n+window.innerHeight<o&&i(!0)}else i(!1)}}),[]),a.createElement("button",{className:(0,c.Z)("clean-btn",X,(e={},e[O]=l,e)),type:"button",title:"Scroll to top",onClick:function(){return n()}},a.createElement("svg",{viewBox:"0 0 24 24",width:"28"},a.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},J=n(9635),Q={docPage:"docPage_3jyA",docMainContainer:"docMainContainer_28SP",docSidebarContainer:"docSidebarContainer_3jRz",docMainContainerEnhanced:"docMainContainerEnhanced_YA74",docSidebarContainerHidden:"docSidebarContainerHidden_2b_F",collapsedDocSidebar:"collapsedDocSidebar_KeEu",expandSidebarButtonIcon:"expandSidebarButtonIcon_1pq6",docItemWrapperEnhanced:"docItemWrapperEnhanced_2IZb"};function $(e){var t,n,l,d=e.currentDocRoute,m=e.versionMetadata,u=e.children,p=(0,o.Z)().isClient,f=m.pluginId,E=m.version,v=d.sidebar,g=v?m.docsSidebars[v]:void 0,C=(0,a.useState)(!1),_=C[0],k=C[1],Z=(0,a.useState)(!1),N=Z[0],S=Z[1],I=(0,a.useCallback)((function(){N&&S(!1),k(!_)}),[N]);return a.createElement(i.Z,{key:p,wrapperClassName:s.kM.wrapper.docPages,pageClassName:s.kM.page.docPage,searchMetadatas:{version:E,tag:(0,s.os)(f,E)}},a.createElement("div",{className:Q.docPage},a.createElement(V,null),g&&a.createElement("aside",{className:(0,c.Z)(Q.docSidebarContainer,(t={},t[Q.docSidebarContainerHidden]=_,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Q.docSidebarContainer)&&_&&S(!0)}},a.createElement(j,{key:v,sidebar:g,path:d.path,onCollapse:I,isHidden:N}),N&&a.createElement("div",{className:Q.collapsedDocSidebar,title:(0,h.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:I,onClick:I},a.createElement(b,{className:Q.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,c.Z)(Q.docMainContainer,(n={},n[Q.docMainContainerEnhanced]=_||!g,n))},a.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",Q.docItemWrapper,(l={},l[Q.docItemWrapperEnhanced]=_,l))},a.createElement(r.Zo,{components:q.Z},u)))))}var ee=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,o=t.find((function(e){return(0,J.LX)(r.pathname,e)}));return o?a.createElement($,{currentDocRoute:o,versionMetadata:n},(0,l.Z)(t,{versionMetadata:n})):a.createElement(K.default,e)}},6119:function(e,t,n){n.r(t);var a=n(7378),r=n(1602),o=n(1787);t.default=function(){return a.createElement(r.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);