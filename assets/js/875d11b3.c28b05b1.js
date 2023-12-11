"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7957],{94833:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=s(85893),a=s(11151);const o={title:"File-based Approach",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model"]},r=void 0,i={id:"specs/file-based",title:"File-based Approach",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",source:"@site/docs/specs/file-based.md",sourceDirName:"specs",slug:"/specs/file-based",permalink:"/specs/file-based",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/specs/file-based.md",tags:[],version:"current",lastUpdatedBy:"hiento09",lastUpdatedAt:1702294421,formattedLastUpdatedAt:"Dec 11, 2023",frontMatter:{title:"File-based Approach",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model"]},sidebar:"specsSidebar",previous:{title:"Architecture",permalink:"/specs"},next:{title:"User Interface",permalink:"/specs/user-interface"}},l={},c=[{value:"Data Dependencies",id:"data-dependencies",level:2}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"This page is still under construction, and should be read as a scratchpad"})}),"\n",(0,t.jsx)(n.p,{children:"Jan use the local filesystem for data persistence, similar to VSCode. This allows for composability and tinkerability."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"janroot/               # Jan's root folder (e.g. ~/jan)\n    models/            # For raw AI models\n    threads/           # For conversation history\n    assistants/        # For AI assistants' configs, knowledge, etc.\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"/models\n    /modelA\n        model.json        # Default model settings\n        llama-7b-q4.gguf  # Model binaries\n/threads\n    /jan-unixstamp\n        thread.json       # thread metadata (e.g. subject)\n        messages.jsonl    # messages\n        files/            # RAG\n/assistants\n    /jan                  # A default assistant that can use all models\n        assistant.json    # Assistant configs (see below)\n        package.json      # Import npm modules, e.g. Langchain, Llamaindex\n        /src              # For custom code\n            index.js      # Entrypoint\n                          # `/threads` at root level\n                          # `/models` at root level\n    /shakespeare          # Example of a custom assistant\n        assistant.json\n        package.json\n        /threads          # Assistants remember conversations in the future\n        /models           # Users can upload custom models\n"})}),"\n",(0,t.jsx)(n.h2,{id:"data-dependencies",children:"Data Dependencies"}),"\n",(0,t.jsx)(n.mermaid,{value:'graph LR\n    A1[("A User Integrators")] --\x3e|uses| B1[assistant]\n    B1 --\x3e|persist conversational history| C1[("thread A")]\n    B1 --\x3e|executes| D1[("built-in tools as module")]\n    B1 -.->|uses| E1[model]\n    E1 -.->|model.json| D1\n    D1 --\x3e F1[retrieval]\n    F1 --\x3e|belongs to| G1[("web browsing")]\n    G1 --\x3e H1[Google]\n    G1 --\x3e H2[Duckduckgo]\n    F1 --\x3e|belongs to| I1[("API calling")]\n    F1 --\x3e J1[("knowledge files")]'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"User/ Integrator"}),"\n",(0,t.jsx)(n.li,{children:"Assistant object"}),"\n",(0,t.jsx)(n.li,{children:"Model object"}),"\n",(0,t.jsx)(n.li,{children:"Thread object"}),"\n",(0,t.jsx)(n.li,{children:"Built-in tool object"}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>r});var t=s(67294);const a={},o=t.createContext(a);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);