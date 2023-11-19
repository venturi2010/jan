"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9300],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(a),u=r,h=m["".concat(o,".").concat(u)]||m[u]||c[u]||l;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var d=2;d<l;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3978:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={title:"Threads"},s=void 0,i={unversionedId:"specs/threads",id:"specs/threads",title:"Threads",description:"Draft Specification: functionality has not been implemented yet.",source:"@site/docs/specs/threads.md",sourceDirName:"specs",slug:"/specs/threads",permalink:"/specs/threads",draft:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/specs/threads.md",tags:[],version:"current",lastUpdatedBy:"Daniel",lastUpdatedAt:1700408797,formattedLastUpdatedAt:"Nov 19, 2023",frontMatter:{title:"Threads"}},o={},d=[{value:"User Stories",id:"user-stories",level:2},{value:"Jan Thread Object",id:"jan-thread-object",level:2},{value:"Generic Example",id:"generic-example",level:3},{value:"Filesystem",id:"filesystem",level:2},{value:"Jan API",id:"jan-api",level:2},{value:"Get thread",id:"get-thread",level:3},{value:"Delete Thread",id:"delete-thread",level:3},{value:"List Threads",id:"list-threads",level:3},{value:"Get &amp; Modify <code>Thread.Assistants</code>",id:"get--modify-threadassistants",level:3},{value:"<code>GET v1/threads/{thread_id}/assistants</code>",id:"get-v1threadsthread_idassistants",level:4},{value:"<code>POST v1/threads/{thread_id}/assistants/{assistant_id}</code>",id:"post-v1threadsthread_idassistantsassistant_id",level:4},{value:"List <code>Thread.Messages</code>",id:"list-threadmessages",level:3}],p={toc:d},m="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Draft Specification: functionality has not been implemented yet. "),(0,r.kt)("p",{parentName:"admonition"},"Feedback: ",(0,r.kt)("a",{parentName:"p",href:"https://hackmd.io/BM_8o_OCQ-iLCYhunn2Aug"},"HackMD: Threads Spec"))),(0,r.kt)("h2",{id:"user-stories"},"User Stories"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Users can chat with an assistant in a thread")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("a",{parentName:"li",href:"/specs/messages"},"Messages Spec"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Users can change assistant and model parameters in a thread")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Wireframes of")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Users can delete all thread history")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Wireframes of settings page.")),(0,r.kt)("h2",{id:"jan-thread-object"},"Jan Thread Object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"Jan Thread Object"),' is a "representation of a conversation thread" between an ',(0,r.kt)("inlineCode",{parentName:"li"},"assistant")," and the user"),(0,r.kt)("li",{parentName:"ul"},"Objects are defined by ",(0,r.kt)("inlineCode",{parentName:"li"},"thread-uuid.json")," files in ",(0,r.kt)("inlineCode",{parentName:"li"},"json")," format"),(0,r.kt)("li",{parentName:"ul"},"Objects are designed to be compatible with ",(0,r.kt)("inlineCode",{parentName:"li"},"OpenAI Thread Objects")," with additional properties needed to run on our infrastructure."),(0,r.kt)("li",{parentName:"ul"},"Objects contain a ",(0,r.kt)("inlineCode",{parentName:"li"},"models")," field, to track when the user overrides the assistant's default model parameters.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Validation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},"enum: ",(0,r.kt)("inlineCode",{parentName:"td"},"model"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"assistant"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"thread"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"message")),(0,r.kt)("td",{parentName:"tr",align:null},"The Jan Object type"),(0,r.kt)("td",{parentName:"tr",align:null},"Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"thread"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"assistants")),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},'An array of Jan Assistant Objects. Threads can "override" an assistant\'s parameters. Thread-level model parameters are directly saved in the ',(0,r.kt)("inlineCode",{parentName:"td"},"thread.models")," property! (see Models spec)"),(0,r.kt)("td",{parentName:"tr",align:null},"Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"assistant.name"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"messages")),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"An array of Jan Message Objects. (see Messages spec)"),(0,r.kt)("td",{parentName:"tr",align:null},"Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"metadata")),(0,r.kt)("td",{parentName:"tr",align:null},"map"),(0,r.kt)("td",{parentName:"tr",align:null},"Useful for storing additional information about the object in a structured format."),(0,r.kt)("td",{parentName:"tr",align:null},"Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"{}"))))),(0,r.kt)("h3",{id:"generic-example"},"Generic Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// janroot/threads/jan_1700123404.json\n"assistants": ["assistant-123"],\n"messages": [\n    {...message0}, {...message1}\n],\n"metadata": {\n    "summary": "funny physics joke",\n},\n')),(0,r.kt)("h2",{id:"filesystem"},"Filesystem"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Jan Thread Objects"),"'s ",(0,r.kt)("inlineCode",{parentName:"li"},"json")," files always has the naming schema: ",(0,r.kt)("inlineCode",{parentName:"li"},"assistant_uuid")," + `unix_time_thread_created_at. See below."),(0,r.kt)("li",{parentName:"ul"},"Threads are all saved in the ",(0,r.kt)("inlineCode",{parentName:"li"},"janroot/threads")," folder in a flat folder structure."),(0,r.kt)("li",{parentName:"ul"},"The folder is standalone and can be easily zipped, exported, and cleared.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"janroot/\n    threads/\n        jan_1700123404.json\n        homework_helper_700120003.json\n")),(0,r.kt)("h2",{id:"jan-api"},"Jan API"),(0,r.kt)("h3",{id:"get-thread"},"Get thread"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"OpenAI Equivalent: ",(0,r.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/threads/getThread"},"https://platform.openai.com/docs/api-reference/threads/getThread")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Example request")),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"    curl {JAN_URL}/v1/threads/{thread_id}\n")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Example response")),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n    "id": "thread_abc123",\n    "object": "thread",\n    "created_at": 1699014083,\n    "assistants": ["assistant-001"],\n    "metadata": {},\n    "messages": []\n    }\n')),(0,r.kt)("h3",{parentName:"blockquote",id:"create-thread"},"Create Thread"),(0,r.kt)("p",{parentName:"blockquote"},"OpenAI Equivalent: ",(0,r.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/threads/createThread"},"https://platform.openai.com/docs/api-reference/threads/createThread")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Example request")),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'    curl -X POST {JAN_URL}/v1/threads \\\n    -H "Content-Type: application/json" \\\n    -d \'{\n        "messages": [{\n            "role": "user",\n            "content": "Hello, what is AI?",\n            "file_ids": ["file-abc123"]\n        }, {\n            "role": "user",\n            "content": "How does AI work? Explain it in simple terms."\n        }]\n    }\'\n')),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Example response")),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n    "id": \'thread_abc123\',\n    "object": \'thread\',\n    "created_at": 1699014083,\n    "metadata": {}\n    }\n')),(0,r.kt)("h3",{parentName:"blockquote",id:"modify-thread"},"Modify Thread"),(0,r.kt)("p",{parentName:"blockquote"},"OpenAI Equivalent: ",(0,r.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/threads/modifyThread"},"https://platform.openai.com/docs/api-reference/threads/modifyThread")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Example request")),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'    curl -X POST {JAN_URL}/v1/threads/{thread_id} \\\n    -H "Content-Type: application/json" \\\n    -d \'{\n        "messages": [{\n            "role": "user",\n            "content": "Hello, what is AI?",\n            "file_ids": ["file-abc123"]\n        }, {\n            "role": "user",\n            "content": "How does AI work? Explain it in simple terms."\n        }]\n    }\'\n')),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Example response")),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n    "id": \'thread_abc123\',\n    "object": \'thread\',\n    "created_at": 1699014083,\n    "metadata": {}\n    }\n'))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://platform.openai.com/docs/api-reference/threads/modifyThread"},"https://platform.openai.com/docs/api-reference/threads/modifyThread"))),(0,r.kt)("h3",{id:"delete-thread"},"Delete Thread"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"OpenAI Equivalent: ",(0,r.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/threads/deleteThread"},"https://platform.openai.com/docs/api-reference/threads/deleteThread")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Example request")),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"    curl -X DELETE {JAN_URL}/v1/threads/{thread_id}\n")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Example response")),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n    "id": "thread_abc123",\n    "object": "thread.deleted",\n    "deleted": true\n    }\n'))),(0,r.kt)("h3",{id:"list-threads"},"List Threads"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This is a Jan-only endpoint, not supported by OAI yet."),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Example request")),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'    curl {JAN_URL}/v1/threads \\\n    -H "Content-Type: application/json" \\\n')),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Example response")),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    [\n        {\n            "id": "thread_abc123",\n            "object": "thread",\n            "created_at": 1699014083,\n            "assistants": ["assistant-001"],\n            "metadata": {},\n            "messages": []\n        },\n        {\n            "id": "thread_abc456",\n            "object": "thread",\n            "created_at": 1699014083,\n            "assistants": ["assistant-002", "assistant-002"],\n            "metadata": {},\n        }\n    ]\n'))),(0,r.kt)("h3",{id:"get--modify-threadassistants"},"Get & Modify ",(0,r.kt)("inlineCode",{parentName:"h3"},"Thread.Assistants")),(0,r.kt)("p",null,"-> Can achieve this goal by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"Modify Thread")," API"),(0,r.kt)("h4",{id:"get-v1threadsthread_idassistants"},(0,r.kt)("inlineCode",{parentName:"h4"},"GET v1/threads/{thread_id}/assistants")),(0,r.kt)("p",null,"-> Can achieve this goal by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"Get Thread")," API"),(0,r.kt)("h4",{id:"post-v1threadsthread_idassistantsassistant_id"},(0,r.kt)("inlineCode",{parentName:"h4"},"POST v1/threads/{thread_id}/assistants/{assistant_id}")),(0,r.kt)("p",null,"-> Can achieve this goal by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"Modify Assistant")," API with ",(0,r.kt)("inlineCode",{parentName:"p"},"thread.assistant[]")),(0,r.kt)("h3",{id:"list-threadmessages"},"List ",(0,r.kt)("inlineCode",{parentName:"h3"},"Thread.Messages")),(0,r.kt)("p",null,"-> Can achieve this goal by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"Get Thread")," API"))}c.isMDXComponent=!0}}]);