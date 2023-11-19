"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8740],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,s[1]=c;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2143:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"Chats"},s=void 0,c={unversionedId:"specs/chats",id:"specs/chats",title:"Chats",description:"This page is still under construction, and should be read as a scratchpad",source:"@site/docs/specs/chats.md",sourceDirName:"specs",slug:"/specs/chats",permalink:"/specs/chats",draft:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/specs/chats.md",tags:[],version:"current",lastUpdatedBy:"Daniel",lastUpdatedAt:1700408797,formattedLastUpdatedAt:"Nov 19, 2023",frontMatter:{title:"Chats"},sidebar:"docsSidebar",previous:{title:"User Interface",permalink:"/specs/user-interface"},next:{title:"Models",permalink:"/specs/models"}},i={},p=[],l={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"This page is still under construction, and should be read as a scratchpad")),(0,a.kt)("p",null,"Chats are essentially inference requests to a model"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"OpenAI Equivalent: ",(0,a.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/chat"},"https://platform.openai.com/docs/api-reference/chat"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This should reference Nitro ChatCompletion API page to reduce duplication. "),(0,a.kt)("li",{parentName:"ul"},"We are fine with adding Jan API for this but it makes sense to use Nitro as reference as Nitro is default inference engine for Jan in this release")))}d.isMDXComponent=!0}}]);