(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(1072)}])},3513:function(e,t,s){"use strict";s.d(t,{Z:function(){return l}});var n=s(5893),a=s(5675),i=s.n(a),r=s(4155);function l(e){var t;let{loading:s,src:a,...l}=e,c=null!==(t=r.env.BASE_PATH)&&void 0!==t?t:"",o=a;return c&&"string"==typeof a&&a.startsWith("/")&&(o="".concat(c,"/").concat(a)),(0,n.jsx)(i(),{...l,loading:"eager",src:o})}},2616:function(e,t,s){"use strict";s.d(t,{Z:function(){return o}});var n=s(5893),a=s(7294),i=s(1269),r=s.n(i),l=s(3513);function c(e){var t;let{tech:s}=e,a="shadow-".concat(null!==(t=s.color)&&void 0!==t?t:"black-500");return(0,n.jsxs)("div",{className:"shadow-md hover:scale-105 duration-500 py-2 rounded-lg ".concat(a),children:[(0,n.jsx)(l.Z,{className:"mx-auto",src:"/icons/".concat(s.image),alt:s.name,width:80,height:80}),(0,n.jsx)("p",{className:"mt-4 capitalize",children:s.name}),(0,n.jsx)("p",{children:r().relativeTime(s.since).replaceAll(" ago","")})]})}function o(e){let{items:t,filters:s=!0}=e,[i,r]=(0,a.useState)(t),[l,o]=(0,a.useState)("all");function d(e){let{label:s,isShowAll:a=!1}=e;return(0,n.jsx)("button",{className:"".concat(l===s?"bg-cyan-600":"bg-cyan-400"," ").concat("hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded"),onClick:()=>{a?r(t):r(t.filter(e=>e.tags.includes(s))),o(s)},children:s})}return(0,n.jsxs)(n.Fragment,{children:[s&&(0,n.jsxs)("div",{className:"flex justify-between",children:[(0,n.jsx)("div",{}),(0,n.jsxs)("div",{className:"grid grid-cols-7 gap-1",children:[(0,n.jsx)(d,{label:"all",isShowAll:!0},"all"),["loved","language","database","tool","broker","frontend"].map(e=>(0,n.jsx)(d,{label:e,isShowAll:!1},e))]})]}),(0,n.jsx)("div",{className:"w-auto grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0",children:null==i?void 0:i.map(e=>(0,n.jsx)(c,{tech:e},e.id))})]})}},1072:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return f},default:function(){return v}});var n=s(5893);function a(e){return(0,n.jsx)("span",{className:"color",children:e.children})}var i={src:"/page-react/_next/static/media/avatar.fdec092e.png",height:612,width:408,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAQlBMVEVMaXG5jXPtuaJtXFUyNz+kf2+JXkMbEhN9UkFVQDicdGYSEhZFMi4rKilkXGOieGBGOTOBXVEFCA4fHR6ValSXY03se4ZKAAAAEXRSTlMASlykUAfQIS/vhrKH5nj3vjG9PxIAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAuSURBVHicHcGFDQAgEACxQx939l+VhBY+8QoIV+Ow0QjUvWNgnH4SZc4GeS3LAxcDAU7GgtseAAAAAElFTkSuQmCC",blurWidth:5,blurHeight:8},r=s(1664),l=s.n(r),c=s(3513);function o(e){let{href:t,icon:s}=e;return(0,n.jsx)(l(),{href:t,className:"hover:no-underline",target:"_blank",rel:"noreferrer",children:(0,n.jsx)(c.Z,{className:"hover:translate-y-1",src:"/icons/".concat(s,".png"),width:48,height:48,alt:t})})}function d(){return(0,n.jsxs)("div",{className:"mx-auto max-w-screen-lg py-6",children:[(0,n.jsx)("div",{className:"relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden",children:(0,n.jsx)(c.Z,{src:i,className:"object-contain",alt:"Avatar",layout:"fill"})}),(0,n.jsxs)("div",{className:"section-title",children:["Hi there, I'm ",(0,n.jsx)(a,{children:"Adamatti"})," \uD83D\uDC4B"]}),(0,n.jsxs)("div",{className:"section-text",children:["I have +20 yrs as ",(0,n.jsx)(a,{children:"software engineer"}),", +10yrs as ",(0,n.jsx)(a,{children:"tech lead"}),", +1 as"," ",(0,n.jsx)(a,{children:"engineer manager"}),", do speeches/coordinate events, +5 yrs as dad (one boy). I am a very pragmatic engineer that loves to deliver value.",(0,n.jsx)("br",{}),"Do you think I can help you to grow in your career (",(0,n.jsx)(a,{children:"mentoring"}),")? Do you want to"," ",(0,n.jsx)(a,{children:"hire me"}),"? Please schedule a time with me"," ",(0,n.jsx)(l(),{href:"https://calendly.com/adamatti",target:"_blank",className:"underline",children:"here"})]}),(0,n.jsxs)("div",{className:"mt-3 flex gap-1 justify-center",children:[(0,n.jsx)(o,{href:"http://twitter.com/adamatti",icon:"twitter"}),(0,n.jsx)(o,{href:"http://www.linkedin.com/in/adamatti",icon:"linkedin"}),(0,n.jsx)(o,{href:"http://youtube.com/adamatti",icon:"youtube"}),(0,n.jsx)(o,{href:"https://www.facebook.com/marcelo.adamatti",icon:"facebook"})]})]})}function h(e){return(0,n.jsxs)("div",{className:"shadow-lg rounded-xl text-center py-2",children:[(0,n.jsx)("div",{className:"text-2xl",children:e.title}),(0,n.jsx)("div",{children:e.children})]})}function x(){return(0,n.jsxs)("div",{className:"grid grid-cols-4 gap-8",children:[(0,n.jsxs)(h,{title:"Brazilian Portuguese",children:[(0,n.jsx)("p",{children:"It is my native language"}),(0,n.jsx)("p",{className:"text-xs",children:"... and the reason I produce content in portuguese"})]}),(0,n.jsx)(h,{title:"C2",children:(0,n.jsxs)(l(),{href:"http://links.t-educationfirst.mkt4686.com/servlet/MailView?ms=NTY0Mzg4NTES1&r=LTc4NzMwNDUyNTMS1&j=MTkwMjYxMjQwNQS2&mt=1&rt=0",target:"_blank",children:[(0,n.jsx)("p",{children:"English Level"}),(0,n.jsx)("p",{className:"text-xs",children:"working with international companies since 2007"})]})}),(0,n.jsxs)(h,{title:"Remote Worker",children:[(0,n.jsx)("p",{children:"No plans to relocate"}),(0,n.jsx)("p",{className:"text-xs",children:"I want to stay close to the family"})]}),(0,n.jsx)(h,{title:"Location",children:(0,n.jsx)(l(),{href:"https://goo.gl/maps/7Uig883Lwnp1MfBH9",target:"_blank",className:"underline",children:"Canoas, RS, Brazil"})})]})}var u=s(5154);function m(){return(0,n.jsxs)("div",{className:"mx-auto max-w-screen-lg py-6",children:[(0,n.jsx)("div",{className:"section-title",children:"How this page was created?"}),(0,n.jsxs)("div",{className:"text-center",children:["Please check tech stack"," ",(0,n.jsx)(l(),{href:"/about",className:"link",children:"here"}),(0,n.jsx)("br",{}),(0,n.jsxs)("p",{className:"flex flex-nowrap text-center justify-center",children:["I would love to receive a feedback what you think about this page ",(0,n.jsx)(u.vtP,{})]})]})]})}var j=s(2616);function g(e){let{items:t}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"mx-auto max-w-screen-lg py-6",children:[(0,n.jsx)("div",{className:"section-title",children:"My main technologies"}),(0,n.jsx)("div",{className:"text-center",children:"The ones that I love most / worked more"}),(0,n.jsx)(j.Z,{items:t,filters:!1}),(0,n.jsxs)("div",{className:"text-center",children:["Check the full list"," ",(0,n.jsx)(l(),{href:"/technologies",className:"link",children:"here"})]})]})})}var f=!0;function v(e){let{items:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d,{}),(0,n.jsx)(x,{}),(0,n.jsx)(g,{items:t}),(0,n.jsx)(m,{})]})}}},function(e){e.O(0,[763,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);