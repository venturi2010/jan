"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2197],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,u=d["".concat(l,".").concat(m)]||d[m]||h[m]||o;return a?r.createElement(u,i(i({ref:t},p),{},{components:a})):r.createElement(u,i({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},134:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={title:"GPUs and VRAM"},i=void 0,s={unversionedId:"hardware/concepts/gpu-and-vram",id:"hardware/concepts/gpu-and-vram",title:"GPUs and VRAM",description:"What Is a GPU?",source:"@site/docs/hardware/concepts/gpu-and-vram.md",sourceDirName:"hardware/concepts",slug:"/hardware/concepts/gpu-and-vram",permalink:"/hardware/concepts/gpu-and-vram",draft:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/hardware/concepts/gpu-and-vram.md",tags:[],version:"current",lastUpdatedBy:"hiento09",lastUpdatedAt:1697704180,formattedLastUpdatedAt:"Oct 19, 2023",frontMatter:{title:"GPUs and VRAM"}},l={},c=[{value:"What Is a GPU?",id:"what-is-a-gpu",level:2},{value:"What Are GPUs Used For?",id:"what-are-gpus-used-for",level:2},{value:"<strong>Here are some example use cases:</strong>",id:"here-are-some-example-use-cases",level:3},{value:"What is VRAM In GPU?",id:"what-is-vram-in-gpu",level:2},{value:"What makes VRAM and RAM different from each other?",id:"what-makes-vram-and-ram-different-from-each-other",level:2},{value:"RAM (Random Access Memory):",id:"ram-random-access-memory",level:3},{value:"VRAM (Video Random Access Memory):",id:"vram-video-random-access-memory",level:3},{value:"How to Connect GPU to the Motherboard via PCIe",id:"how-to-connect-gpu-to-the-motherboard-via-pcie",level:2},{value:"How to Choose a Graphics Card for your AI works",id:"how-to-choose-a-graphics-card-for-your-ai-works",level:2},{value:"Here are some of the best GPU options for this purpose:",id:"here-are-some-of-the-best-gpu-options-for-this-purpose",level:3}],p={toc:c},d="wrapper";function h(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-is-a-gpu"},"What Is a GPU?"),(0,n.kt)("p",null,"A Graphics Card, or GPU (Graphics Processing Unit), is a fundamental component in modern computing. Think of it as the powerhouse behind rendering the stunning visuals you see on your screen. Similar to the motherboard in your computer, the graphics card is a printed circuit board. However, it's not just a passive piece of hardware; it's a sophisticated device equipped with essential components like fans, onboard RAM, a dedicated memory controller, BIOS, and various other features. If you want to learn more about GPUs then read here to ",(0,n.kt)("a",{parentName:"p",href:"https://medium.com/codex/understanding-the-architecture-of-a-gpu-d5d2d2e8978b"},"Understand the architecture of a GPU.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"GPU Image",src:a(5701).Z,width:"1200",height:"674"})),(0,n.kt)("h2",{id:"what-are-gpus-used-for"},"What Are GPUs Used For?"),(0,n.kt)("p",null,"Two decades ago, GPUs primarily enhanced real-time 3D graphics in gaming. But as the 21st century dawned, a revelation occurred among computer scientists. They recognized that GPUs held untapped potential to solve some of the world's most intricate computing tasks.\nThis revelation marked the dawn of the general-purpose GPU era. Today's GPUs have evolved into versatile tools, more adaptable than ever before. They now have the capability to accelerate a diverse range of applications that stretch well beyond their original graphics-focused purpose."),(0,n.kt)("h3",{id:"here-are-some-example-use-cases"},(0,n.kt)("strong",{parentName:"h3"},"Here are some example use cases:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Gaming"),": They make games look good and run smoothly."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Content Creation"),": Help with video editing, 3D design, and graphics work."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"AI and Machine Learning"),": Used for training smart machines."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Science"),": Speed up scientific calculations and simulations."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Cryptocurrency Mining"),": Mine digital currencies like Bitcoin."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Medical Imaging"),": Aid in analyzing medical images."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Self-Driving Cars"),": Help cars navigate autonomously."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Simulations"),": Create realistic virtual experiences."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Data Analysis"),": Speed up data processing and visualization."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Video Streaming"),": Improve video quality and streaming efficiency.")),(0,n.kt)("h2",{id:"what-is-vram-in-gpu"},"What is VRAM In GPU?"),(0,n.kt)("p",null,"VRAM, or video random-access memory, is a type of high-speed memory that is specifically designed for use with graphics processing units (GPUs). VRAM is used to store the textures, images, and other data that the GPU needs to render graphics. Its allows the GPU to access the data it needs quickly and efficiently. This is essential for rendering complex graphics at high frame rates."),(0,n.kt)("p",null,"VRAM is different from other types of memory, such as the system RAM that is used by the CPU. VRAM is optimized for high bandwidth and low latency, which means that it can read and write data very quickly. The amount of VRAM that a GPU has is one of the factors that determines its performance. More VRAM allows the GPU to store more data and render more complex graphics. However, VRAM is also one of the most expensive components of a GPU. So when choosing a graphics card, it is important to consider the amount of VRAM that it has. If you are planning on running demanding LLMs or video games, or 3D graphics software, you will need a graphics card with more VRAM."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"VRAM",src:a(3284).Z,width:"1500",height:"900"})),(0,n.kt)("h2",{id:"what-makes-vram-and-ram-different-from-each-other"},"What makes VRAM and RAM different from each other?"),(0,n.kt)("p",null,"RAM (Random Access Memory) and VRAM (Video Random Access Memory) are both types of memory used in computers, but they have different functions and characteristics. Here are the differences between RAM and VRAM."),(0,n.kt)("h3",{id:"ram-random-access-memory"},"RAM (Random Access Memory):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"RAM is a general-purpose memory that stores data and instructions that the CPU needs to access quickly."),(0,n.kt)("li",{parentName:"ul"},"RAM is used for short-term data storage and is volatile, meaning that it loses its contents when the computer is turned off."),(0,n.kt)("li",{parentName:"ul"},"RAM is connected to the motherboard and is accessed by the CPU."),(0,n.kt)("li",{parentName:"ul"},"RAM typically has a larger capacity compared to VRAM, which is designed to store smaller amounts of data with faster access times."),(0,n.kt)("li",{parentName:"ul"},"RAM stores data related to the operating system and the various programs that are running, including code, program files, and user data.")),(0,n.kt)("h3",{id:"vram-video-random-access-memory"},"VRAM (Video Random Access Memory):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"VRAM is a type of RAM that is specifically used to store image data for a computer display."),(0,n.kt)("li",{parentName:"ul"},"VRAM is a graphics card component that is connected to the GPU (Graphics Processing Unit)."),(0,n.kt)("li",{parentName:"ul"},"VRAM is used exclusively by the GPU and doesn\u2019t need to store as much data as the CPU."),(0,n.kt)("li",{parentName:"ul"},"VRAM is similar to RAM in that it is volatile and loses its contents when the computer is turned off."),(0,n.kt)("li",{parentName:"ul"},"VRAM stores data related specifically to graphics, such as textures, frames, and other graphical data."),(0,n.kt)("li",{parentName:"ul"},"VRAM is designed to store smaller amounts of data with faster access times than RAM.")),(0,n.kt)("p",null,"In summary, RAM is used for general-purpose memory, while VRAM is used for graphics-related tasks. RAM has a larger capacity and is accessed by the CPU, while VRAM has a smaller capacity and is accessed by the GPU."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Key differences between VRAM and RAM:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Characteristic"),(0,n.kt)("th",{parentName:"tr",align:null},"VRAM"),(0,n.kt)("th",{parentName:"tr",align:null},"RAM"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Purpose"),(0,n.kt)("td",{parentName:"tr",align:null},"Graphics processing"),(0,n.kt)("td",{parentName:"tr",align:null},"General processing")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Speed"),(0,n.kt)("td",{parentName:"tr",align:null},"Faster"),(0,n.kt)("td",{parentName:"tr",align:null},"Slower")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Latency"),(0,n.kt)("td",{parentName:"tr",align:null},"Lower"),(0,n.kt)("td",{parentName:"tr",align:null},"Higher")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Bandwidth"),(0,n.kt)("td",{parentName:"tr",align:null},"Higher"),(0,n.kt)("td",{parentName:"tr",align:null},"Lower")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Cost"),(0,n.kt)("td",{parentName:"tr",align:null},"More expensive"),(0,n.kt)("td",{parentName:"tr",align:null},"Less expensive")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Availability"),(0,n.kt)("td",{parentName:"tr",align:null},"Less widely available"),(0,n.kt)("td",{parentName:"tr",align:null},"More widely available")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"RAM-VRAM",src:a(709).Z,width:"824",height:"207"})),(0,n.kt)("h2",{id:"how-to-connect-gpu-to-the-motherboard-via-pcie"},"How to Connect GPU to the Motherboard via PCIe"),(0,n.kt)("p",null,"Connecting hardware components to a motherboard is often likened to assembling LEGO pieces. If the parts fit together seamlessly, you're on the right track. Experienced PC builders find this process straightforward. However, for first-time builders, identifying where each hardware component belongs on the motherboard can be a bit perplexing."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"So follow the below 5 steps to Connect your GPU to the Motherboard:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"First, make sure your computer is powered off and unplugged from the electrical outlet to ensure safety."),(0,n.kt)("li",{parentName:"ol"},"Open your computer case if necessary to access the motherboard. Locate the PCIe x16 on the motherboard where you'll install the GPU. These slots are typically longer than other expansion slots and are used for graphics cards.\nRemove Slot Covers (if applicable): Some PCIe slots may have protective covers or brackets covering them. Remove these covers by unscrewing them from the case using a Phillips-head screwdriver. And PCIe x16 will have plastic lock on one side only. There may be more than one PCIe x16 slot depending on the motherboard. You can use any of the slots according to your choice.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"PCIe x16",src:a(2090).Z,width:"1600",height:"870"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Now Insert the Graphics Card slowly:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Unlock the plastic lock on one side of the PCIe x16 slot by pulling it outwards.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"slot",src:a(1971).Z,width:"784",height:"461"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Align the PCIe slot with your graphics card, making sure that the HDMI port side of the GPU faces the rear side of the CPU case."),(0,n.kt)("li",{parentName:"ul"},"Gently press on the card until you hear it securely snap in place.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"GPU",src:a(9635).Z,width:"743",height:"348"})),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Insert the Power Connector: If your GPU requires additional power (most modern GPUs do), connect the necessary power cables from your power supply to the GPU's power connectors. These connectors are usually located on the top or side of the GPU.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Power",src:a(9540).Z,width:"742",height:"415"})),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Power on the System: After turning on the PC see if the fans on your graphics card spin. If it does not spin, remove the power cable from the GPU, reconnect it, and power on the PC again.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83d\udcdd Note: To better understand you can also watch YouTube tutorials on how to Connect the GPU to the Motherboard via PCIe")),(0,n.kt)("h2",{id:"how-to-choose-a-graphics-card-for-your-ai-works"},"How to Choose a Graphics Card for your AI works"),(0,n.kt)("p",null,"Selecting the optimal GPU for running Large Language Models (LLMs) on your home PC is a decision influenced by your budget and the specific LLMs you intend to work with. Your choice should strike a balance between performance, efficiency, and cost-effectiveness."),(0,n.kt)("p",null,"In general, the following GPU features are important for running LLMs:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"High VRAM:"),"\xa0LLMs are typically very large and complex models, so they require a GPU with a high amount of VRAM. This will allow the model to be loaded into memory and processed efficiently."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"CUDA Compatibility:"),"\xa0When running LLMs on a GPU, CUDA compatibility is paramount. CUDA is NVIDIA's parallel computing platform, and it plays a vital role in accelerating deep learning tasks. LLMs, with their extensive matrix calculations, heavily rely on parallel processing. Ensuring your GPU supports CUDA is like having the right tool for the job. It allows the LLM to leverage the GPU's parallel processing capabilities, significantly speeding up model training and inference."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Number of CUDA, Tensor, and RT Cores:"),"\xa0High-performance NVIDIA GPUs have both CUDA and Tensor cores. These cores are responsible for executing the neural network computations that underpin LLMs' language understanding and generation. The more CUDA cores your GPU has, the better equipped it is to handle the massive computational load that LLMs impose. Tensor cores in your GPU, further enhance LLM performance by accelerating the critical matrix operations integral to language modeling tasks."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Generation (Series)"),": When selecting a GPU for LLMs, consider its generation or series (e.g., RTX 30 series). Newer GPU generations often come with improved architectures and features. For LLM tasks, opting for the latest generation can mean better performance, energy efficiency, and support for emerging AI technologies. Avoid purchasing, RTX-2000 series GPUs which are much outdated nowadays.")),(0,n.kt)("h3",{id:"here-are-some-of-the-best-gpu-options-for-this-purpose"},"Here are some of the best GPU options for this purpose:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"NVIDIA RTX 3090"),": The NVIDIA RTX 3090 is a high-end GPU with a substantial 24GB of VRAM. This copious VRAM capacity makes it exceptionally well-suited for handling large LLMs. Moreover, it's known for its relative efficiency, meaning it won't overheat or strain your home PC's cooling system excessively. The RTX 3090's robust capabilities are a boon for those who need to work with hefty language models."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"NVIDIA RTX 4090"),": If you're looking for peak performance and can afford the investment, the NVIDIA RTX 4090 represents the pinnacle of GPU power. Boasting 24GB of VRAM and featuring a cutting-edge Tensor Core architecture tailored for AI workloads, it outshines the RTX 3090 in terms of sheer capability. However, it's important to note that the RTX 4090 is also pricier and more power-hungry than its predecessor, the RTX 3090."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"AMD Radeon RX 6900 XT"),": On the AMD side, the Radeon RX 6900 XT stands out as a high-end GPU with 16GB of VRAM. While it may not quite match the raw power of the RTX 3090 or RTX 4090, it strikes a balance between performance and affordability. Additionally, it tends to be more power-efficient, which could translate to a more sustainable and quieter setup in your home PC.")),(0,n.kt)("p",null,"If budget constraints are a consideration, there are more cost-effective GPU options available:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"NVIDIA RTX 3070"),": The RTX 3070 is a solid mid-range GPU that can handle LLMs effectively. While it may not excel with the most massive or complex language models, it's a reliable choice for users looking for a balance between price and performance."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"AMD Radeon RX 6800 XT"),": Similarly, the RX 6800 XT from AMD offers commendable performance without breaking the bank. It's well-suited for running mid-sized LLMs and provides a competitive option in terms of both power and cost.")),(0,n.kt)("p",null,"When selecting a GPU for LLMs, remember that it's not just about the GPU itself. Consider the synergy with other components in your PC:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"CPU"),": To ensure efficient processing, pair your GPU with a powerful CPU. LLMs benefit from fast processors, so having a capable CPU is essential."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"RAM"),": Sufficient RAM is crucial for LLMs. They can be memory-intensive, and having enough RAM ensures smooth operation."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Cooling System"),": LLMs can push your PC's hardware to the limit. A robust cooling system helps maintain optimal temperatures, preventing overheating and performance throttling.")),(0,n.kt)("p",null,"By taking all of these factors into account, you can build a home PC setup that's well-equipped to handle the demands of running LLMs effectively and efficiently."))}h.isMDXComponent=!0},9635:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/GPU-5c5cbdea44506dcd4af8cf75b9aac52b.png"},5701:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/GPU_Image-231c0b8e4b585ac1d18c2330840bb1d6.png"},2090:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/PCIex16-83af51562c34bc672cda33199e42464d.png"},9540:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Power-76f62f2aba4379d9f7368014d52484f8.png"},709:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/RAM-VRAM-8ecee89416490242a132a14073e166fc.png"},3284:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/VRAM-Image-a29fe70e7f4d5782f1ef912a49fd0636.png"},1971:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/slot-e0b9ed4b774e0ae2fd485650de82f089.png"}}]);