(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(750)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2648).Z,a=r(7273).Z,o=n(r(7294)),l=r(1003),c=r(7795),i=r(4465),s=r(2692),u=r(8245),f=r(9246),d=r(227),h=r(3468);let p=new Set;function m(e,t,r,n){if(l.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let a=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,o=t+"%"+r+"%"+a;if(p.has(o))return;p.add(o)}Promise.resolve(e.prefetch(t,r,n)).catch(e=>{})}}function x(e){return"string"==typeof e?e:c.formatUrl(e)}let v=o.default.forwardRef(function(e,t){let r,n;let{href:c,as:p,children:v,prefetch:g,passHref:w,replace:y,shallow:j,scroll:b,locale:C,onClick:_,onMouseEnter:k,onTouchStart:M,legacyBehavior:z=!1}=e,O=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=v,z&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let E=!1!==g,N=o.default.useContext(s.RouterContext),P=o.default.useContext(u.AppRouterContext),S=null!=N?N:P,V=!N,{href:L,as:R}=o.default.useMemo(()=>{if(!N){let e=x(c);return{href:e,as:p?x(p):e}}let[e,t]=l.resolveHref(N,c,!0);return{href:e,as:p?l.resolveHref(N,p):t||e}},[N,c,p]),B=o.default.useRef(L),T=o.default.useRef(R);z&&(n=o.default.Children.only(r));let I=z?n&&"object"==typeof n&&n.ref:t,[H,A,X]=f.useIntersection({rootMargin:"200px"}),D=o.default.useCallback(e=>{(T.current!==R||B.current!==L)&&(X(),T.current=R,B.current=L),H(e),I&&("function"==typeof I?I(e):"object"==typeof I&&(I.current=e))},[R,I,L,X,H]);o.default.useEffect(()=>{S&&A&&E&&m(S,L,R,{locale:C})},[R,L,A,C,E,null==N?void 0:N.locale,S]);let K={ref:D,onClick(e){z||"function"!=typeof _||_(e),z&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,r,n,a,c,i,s,u,f){let{nodeName:d}=e.currentTarget,h="A"===d.toUpperCase();if(h&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!l.isLocalURL(r)))return;e.preventDefault();let p=()=>{"beforePopState"in t?t[a?"replace":"push"](r,n,{shallow:c,locale:s,scroll:i}):t[a?"replace":"push"](n||r,{forceOptimisticNavigation:!f})};u?o.default.startTransition(p):p()}(e,S,L,R,y,j,b,C,V,E)},onMouseEnter(e){z||"function"!=typeof k||k(e),z&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),S&&(E||!V)&&m(S,L,R,{locale:C,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){z||"function"!=typeof M||M(e),z&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),S&&(E||!V)&&m(S,L,R,{locale:C,priority:!0,bypassPrefetchedCheck:!0})}};if(!z||w||"a"===n.type&&!("href"in n.props)){let e=void 0!==C?C:null==N?void 0:N.locale,t=(null==N?void 0:N.isLocaleDomain)&&d.getDomainLocale(R,e,null==N?void 0:N.locales,null==N?void 0:N.domainLocales);K.href=t||h.addBasePath(i.addLocale(R,e,null==N?void 0:N.defaultLocale))}return z?o.default.cloneElement(n,K):o.default.createElement("a",Object.assign({},O,K),r)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:i}=e,s=i||!o,[u,f]=n.useState(!1),d=n.useRef(null),h=n.useCallback(e=>{d.current=e},[]);n.useEffect(()=>{if(o){if(s||u)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:a,elements:o}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=c.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let a=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=a.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:o,elements:a},c.push(r),l.set(r,t),t}(r);return o.set(e,t),a.observe(e),function(){if(o.delete(e),a.unobserve(e),0===o.size){a.disconnect(),l.delete(n);let e=c.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&c.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!u){let e=a.requestIdleCallback(()=>f(!0));return()=>a.cancelIdleCallback(e)}},[s,r,t,u,d.current]);let p=n.useCallback(()=>{f(!1)},[]);return[h,u,p]};var n=r(7294),a=r(4686);let o="function"==typeof IntersectionObserver,l=new Map,c=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},750:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var n=r(5893);r(4781);var a=r(9008),o=r.n(a);function l(){return(0,n.jsx)("div",{className:"hidden shadow-amber-300 shadow-black shadow-blue-500 shadow-blue-600 shadow-cyan-500 shadow-cyan-700 shadow-indigo-600 shadow-lime-600 shadow-orange-400 shadow-orange-400 shadow-orange-500 shadow-red-600 shadow-red-800 shadow-sky-600 shadow-gray-400 shadow-slate-500 shadow-teal-500 shadow-zinc-50 shadow-cyan-300 shadow-cyan-500 shadow-neutral-800 shadow-orange-500 shadow-pink-500 shadow-rose-600 shadow-sky-400 shadow-sky-600 shadow-zinc-700"})}function c(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(l,{})})}var i=r(1664),s=r.n(i);function u(e){return(0,n.jsx)(s(),{className:"p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4",href:e.href,target:e.target,children:e.children})}function f(){return(0,n.jsxs)("header",{className:"flex items-center justify-between py-10",children:[(0,n.jsx)(s(),{className:"hidden h-6 text-2xl font-semibold sm:block color",href:"/",children:"Marcelo Adamatti"}),(0,n.jsx)("div",{className:"flex items-center text-base leading-5",children:(0,n.jsxs)("div",{className:"hidden sm:block",children:[(0,n.jsx)(u,{href:"/resume",children:"Resume"}),(0,n.jsx)(u,{href:"/blog",children:"Blog"}),(0,n.jsx)(u,{href:"https://github.com/adamatti",target:"_blank",children:"Github"}),(0,n.jsx)(u,{href:"http://twitter.com/adamatti",target:"_blank",children:"Twitter"})]})})]})}var d=r(5154);function h(e){return(0,n.jsx)(s(),{className:"text-xl text-gray-500 transition",target:"_blank",rel:"noopener noreferrer",href:e.href,children:e.children})}function p(){return(0,n.jsx)("footer",{children:(0,n.jsx)("div",{className:"mt-16 flex flex-col items-center",children:(0,n.jsxs)("div",{className:"mb-3 flex space-x-4",children:[(0,n.jsx)(h,{href:"mailto:adamatti@gmail.com",children:(0,n.jsx)(d.SRX,{})}),(0,n.jsx)(h,{href:"http://www.linkedin.com/in/adamatti",children:(0,n.jsx)(d.ltd,{})}),(0,n.jsx)(h,{href:"https://github.com/adamatti",children:(0,n.jsx)(d.hJX,{})}),(0,n.jsx)(h,{href:"https://www.facebook.com/marcelo.adamatti",children:(0,n.jsx)(d.Am9,{})}),(0,n.jsx)(h,{href:"http://twitter.com/adamatti",children:(0,n.jsx)(d.fWC,{})}),(0,n.jsx)(h,{href:"http://youtube.com/adamatti",children:(0,n.jsx)(d.V2E,{})}),(0,n.jsx)(h,{href:"https://wa.me/5551984253027",children:(0,n.jsx)(d.xpo,{})})]})})})}let m="Marcelo Adamatti Portfolio";function x(e){var t;let{Component:r,pageProps:a}=e,l=null!==(t=r.disableLayout)&&void 0!==t&&t;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o(),{children:[(0,n.jsx)("title",{children:m}),(0,n.jsx)("meta",{content:"width=device-width, initial-scale=1",name:"viewport"}),(0,n.jsx)("meta",{name:"description",content:m}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)(c,{}),(0,n.jsx)("div",{className:"mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0",children:(0,n.jsxs)("div",{className:"flex h-screen flex-col justify-between",children:[!l&&(0,n.jsx)(f,{}),(0,n.jsx)("main",{className:"mb-auto",children:(0,n.jsx)(r,{...a})}),!l&&(0,n.jsx)(p,{})]})})]})}},4781:function(){},9008:function(e,t,r){e.exports=r(3121)},1664:function(e,t,r){e.exports=r(1551)},5154:function(e,t,r){"use strict";r.d(t,{SRX:function(){return x},Am9:function(){return u},hJX:function(){return f},ltd:function(){return d},vtP:function(){return v},fWC:function(){return h},xpo:function(){return p},V2E:function(){return m}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};function i(e){return function(t){return n.createElement(s,l({attr:l({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,l({key:r},t.attr),e(t.child))})}(e.child))}}function s(e){var t=function(t){var r,a=e.attr,o=e.size,i=e.title,s=c(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,s,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==o?n.createElement(o.Consumer,null,function(e){return t(e)}):t(a)}function u(e){return i({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"}}]})(e)}function f(e){return i({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(e)}function d(e){return i({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(e)}function h(e){return i({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(e)}function p(e){return i({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"}}]})(e)}function m(e){return i({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"}}]})(e)}function x(e){return i({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"}}]})(e)}function v(e){return i({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"}}]})(e)}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(880)}),_N_E=e.O()}]);