(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[647],{2567:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resume",function(){return i(2910)}])},2616:function(e,t,i){"use strict";i.d(t,{Z:function(){return h}});var n=i(5893),s=i(7294),l=i(1269),a=i.n(l),r=i(5675),c=i.n(r),o=i(4155);function d(e){var t,i;let{tech:s}=e,l=null!==(t=o.env.BASE_PATH)&&void 0!==t?t:"",r="shadow-".concat(null!==(i=s.color)&&void 0!==i?i:"black-500");return(0,n.jsxs)("div",{className:"shadow-md hover:scale-105 duration-500 py-2 rounded-lg ".concat(r),children:[(0,n.jsx)(c(),{className:"mx-auto",src:"".concat(l,"/icons/").concat(s.image),alt:s.name,width:80,height:80}),(0,n.jsx)("p",{className:"mt-4 capitalize",children:s.name}),(0,n.jsx)("p",{children:a().relativeTime(s.since).replaceAll(" ago","")})]})}function h(e){let{items:t,filters:i=!0}=e,[l,a]=(0,s.useState)(t),[r,c]=(0,s.useState)("all");function o(e){let{label:i,isShowAll:s=!1}=e;return(0,n.jsx)("button",{className:"".concat(r===i?"bg-cyan-600":"bg-cyan-400"," ").concat("hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded"),onClick:()=>{s?a(t):a(t.filter(e=>e.tags.includes(i))),c(i)},children:i})}return(0,n.jsxs)(n.Fragment,{children:[i&&(0,n.jsxs)("div",{className:"flex justify-between",children:[(0,n.jsx)("div",{}),(0,n.jsxs)("div",{className:"grid grid-cols-7 gap-1",children:[(0,n.jsx)(o,{label:"all",isShowAll:!0},"all"),["loved","language","database","tool","broker","frontend"].map(e=>(0,n.jsx)(o,{label:e,isShowAll:!1},e))]})]}),(0,n.jsx)("div",{className:"w-auto grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0",children:null==l?void 0:l.map(e=>(0,n.jsx)(d,{tech:e},e.id))})]})}},2910:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return Z},default:function(){return E}});var n=i(5893),s=i(5675),l=i.n(s),a=i(1664),r=i.n(a),c=i(4850),o=i(8420),d=i(6878),h=i(9474),x=i(1269),u=i.n(x),j=i(2616);function m(e){let{job:t}=e,i=[t.agency,t.company].filter(e=>null==e?void 0:e.logo);return i&&0!==i.length?(0,n.jsx)(n.Fragment,{children:i.map(e=>{var t;return(0,n.jsx)(r(),{href:e.url,target:"_blank",children:(0,n.jsx)(l(),{src:"logos/".concat(null!==(t=e.logo)&&void 0!==t?t:""),alt:e.name,width:48,height:48},e.id)},e.id)})}):(0,n.jsx)(l(),{src:"logos/empty.png",alt:"no logo",width:48,height:48})}function g(e){let{job:t}=e,i=e=>(0,c.Z)((0,o.Z)(e),"MMM yyyy"),s=(0,o.Z)(t.startDate),l=t.endDate?(0,o.Z)(t.endDate):new Date,a=(0,d.Z)(l,s);return(0,n.jsxs)(n.Fragment,{children:[i(t.startDate)," - ",t.endDate?i(t.endDate):"Current"," (",a,")"]})}function p(e){let{job:t}=e;return t.projects?(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"font-bold",children:"Projects:"}),(0,n.jsx)("div",{children:t.projects.map(e=>(0,n.jsxs)("div",{className:"grid grid-cols-[auto_200px] gap-2 py-1",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"underline",children:e.title}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{children:e.description}),e.results&&(0,n.jsxs)("div",{className:"flex gap-1",children:[(0,n.jsx)("div",{className:"font-semibold",children:"Results:"}),(0,n.jsx)("div",{children:e.results})]})]})]}),(0,n.jsx)("div",{className:"align-text-bottom text-sm text-gray-500",children:e.keywords.join(", ")})]},e.id))})]}):(0,n.jsx)(n.Fragment,{})}function f(e){var t,i,s;let{job:l}=e,a=l.agency?"".concat(l.agency.name," providing services to ").concat(null!==(s=null===(t=l.company)||void 0===t?void 0:t.name)&&void 0!==s?s:"secret"):null===(i=l.company)||void 0===i?void 0:i.name;return(0,n.jsxs)("div",{className:"w-auto grid grid-cols-[40px_auto] gap-2 py-2",children:[(0,n.jsx)("div",{className:"py-1",children:(0,n.jsx)(m,{job:l})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"font-bold",children:l.title}),(0,n.jsxs)("p",{className:"text-gray-500 text-sm",children:[a," - ",(0,n.jsx)(g,{job:l})]}),(0,n.jsx)("p",{children:l.description}),(0,n.jsx)("div",{children:(0,n.jsx)(p,{job:l})})]})]})}function v(e){let{jobs:t}=e;return(0,n.jsxs)(T,{title:"Experience",children:[null==t?void 0:t.map(e=>(0,n.jsx)(f,{job:e},e.id)),(0,n.jsx)("div",{className:"font-bold",children:"Previous companies were omitted here"})]})}function b(e){let{techs:t}=e,i=t.filter(e=>e.tags.includes("loved"));return(0,n.jsxs)(T,{title:"Main Tech Skills",children:["There are a lot of technologies that I still haven't the opportunity to work with professionaly (e.g. clojure, elixir).",(0,n.jsx)("br",{}),"Those are the main ones that I am proficient and love to work with:",(0,n.jsx)(j.Z,{items:i,filters:!1})]})}function y(){return(0,n.jsxs)("div",{className:"flex text-3xl justify-between",children:[(0,n.jsx)("div",{children:(0,n.jsx)("h1",{className:"capitalize",children:"Marcelo Adamatti"})}),(0,n.jsx)("div",{children:(0,n.jsx)(S,{href:"https://adamatti.github.io"})}),(0,n.jsx)("div",{children:(0,n.jsx)(r(),{href:"mailto:adamatti@gmail.com",children:"adamatti@gmail.com"})})]})}function w(){return(0,n.jsx)(T,{title:"Summary",children:(0,n.jsxs)("ul",{className:"list-disc px-4",children:[(0,n.jsx)("li",{children:"English level C2 - did the latest test at 17 June 2020"}),(0,n.jsx)("li",{children:"Work with IT since 2000, mainly on backend (e.g. API, event processing) and infra"}),(0,n.jsx)("li",{children:"Knows a little about frontend (e.g. react, vue), but UX/design is not my thing"}),(0,n.jsx)("li",{children:"Worked in the last 10 years as tech lead, working in all the development lifecycle"}),(0,n.jsx)("li",{children:"Worked 1 year (2020, at Creditas) as manager, responsible for 3 teams / 10 resources. Would love to do it again"}),(0,n.jsx)("li",{children:"Remote worker, no plans to relocate"})]})})}function N(e){let{techs:t}=e;return(0,n.jsx)(T,{title:"Other Technologies",children:t.filter(e=>!e.tags.includes("loved")).sort((e,t)=>(0,h.Z)((0,o.Z)(e.since),(0,o.Z)(t.since))).map(e=>"".concat(e.name," (").concat(u().relativeTime(e.since).replaceAll(" ago",""),")")).join(", ")})}function k(){return(0,n.jsxs)(T,{title:"Education",children:[(0,n.jsx)("b",{className:"font-bold",children:"Facensa: "}),"Information Technology, Software, Project",(0,n.jsxs)("p",{children:["Thesis: code generator tool for java using several frameworks (e.g. hibernate, iBatis, prevayler, jsf, laszlo, thinlet).",(0,n.jsx)("br",{}),(0,n.jsx)(S,{href:"http://code.google.com/p/fumigant"})]})]})}function _(){return(0,n.jsx)(T,{title:"Links",children:(0,n.jsxs)("ul",{className:"list-disc px-4",children:[(0,n.jsxs)("li",{children:["github: ",(0,n.jsx)(S,{href:"https://github.com/adamatti"})]}),(0,n.jsxs)("li",{children:["linkedin: ",(0,n.jsx)(S,{href:"http://www.linkedin.com/in/adamatti"})]}),(0,n.jsxs)("li",{children:["twitter: ",(0,n.jsx)(S,{href:"https://www.twitter.com/adamatti"})]}),(0,n.jsxs)("li",{children:["youtube: ",(0,n.jsx)(S,{href:"https://youtube.com/adamatti"})]})]})})}function T(e){let{title:t,children:i}=e;return(0,n.jsxs)("div",{className:"py-2",children:[(0,n.jsx)("div",{className:"text-2xl py-1",children:t}),(0,n.jsx)("div",{children:i})]})}function S(e){let{href:t}=e;return(0,n.jsx)(r(),{href:t,target:"_blank",className:"link",children:t})}var Z=!0;function E(e){let{jobs:t,techs:i}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y,{}),(0,n.jsx)(w,{}),(0,n.jsx)(b,{techs:i}),(0,n.jsx)(v,{jobs:t}),(0,n.jsx)(N,{techs:i}),(0,n.jsx)(k,{}),(0,n.jsx)(_,{})]})}E.disableLayout=!0}},function(e){e.O(0,[763,979,774,888,179],function(){return e(e.s=2567)}),_N_E=e.O()}]);