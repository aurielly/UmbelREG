var V=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Z={exports:{}};(function(o,t){(function(a,i){i(o)})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:V,function(a){var i,A;if(!((A=(i=globalThis.chrome)==null?void 0:i.runtime)!=null&&A.id))throw new Error("This script should only be loaded in a browser extension.");if(typeof globalThis.browser>"u"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){const w="The message port closed before a response was received.",T=f=>{const b={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(b).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class L extends WeakMap{constructor(r,n=void 0){super(n),this.createItem=r}get(r){return this.has(r)||this.set(r,this.createItem(r)),super.get(r)}}const I=e=>e&&typeof e=="object"&&typeof e.then=="function",N=(e,r)=>(...n)=>{f.runtime.lastError?e.reject(new Error(f.runtime.lastError.message)):r.singleCallbackArg||n.length<=1&&r.singleCallbackArg!==!1?e.resolve(n[0]):e.resolve(n)},C=e=>e==1?"argument":"arguments",W=(e,r)=>function(g,...l){if(l.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${C(r.minArgs)} for ${e}(), got ${l.length}`);if(l.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${C(r.maxArgs)} for ${e}(), got ${l.length}`);return new Promise((c,u)=>{if(r.fallbackToNoCallback)try{g[e](...l,N({resolve:c,reject:u},r))}catch(s){console.warn(`${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,s),g[e](...l),r.fallbackToNoCallback=!1,r.noCallback=!0,c()}else r.noCallback?(g[e](...l),c()):g[e](...l,N({resolve:c,reject:u},r))})},F=(e,r,n)=>new Proxy(r,{apply(g,l,c){return n.call(l,e,...c)}});let v=Function.call.bind(Object.prototype.hasOwnProperty);const E=(e,r={},n={})=>{let g=Object.create(null),l={has(u,s){return s in e||s in g},get(u,s,x){if(s in g)return g[s];if(!(s in e))return;let m=e[s];if(typeof m=="function")if(typeof r[s]=="function")m=F(e,e[s],r[s]);else if(v(n,s)){let h=W(s,n[s]);m=F(e,e[s],h)}else m=m.bind(e);else if(typeof m=="object"&&m!==null&&(v(r,s)||v(n,s)))m=E(m,r[s],n[s]);else if(v(n,"*"))m=E(m,r[s],n["*"]);else return Object.defineProperty(g,s,{configurable:!0,enumerable:!0,get(){return e[s]},set(h){e[s]=h}}),m;return g[s]=m,m},set(u,s,x,m){return s in g?g[s]=x:e[s]=x,!0},defineProperty(u,s,x){return Reflect.defineProperty(g,s,x)},deleteProperty(u,s){return Reflect.deleteProperty(g,s)}},c=Object.create(e);return new Proxy(c,l)},S=e=>({addListener(r,n,...g){r.addListener(e.get(n),...g)},hasListener(r,n){return r.hasListener(e.get(n))},removeListener(r,n){r.removeListener(e.get(n))}}),q=new L(e=>typeof e!="function"?e:function(n){const g=E(n,{},{getContent:{minArgs:0,maxArgs:0}});e(g)}),$=new L(e=>typeof e!="function"?e:function(n,g,l){let c=!1,u,s=new Promise(p=>{u=function(d){c=!0,p(d)}}),x;try{x=e(n,g,u)}catch(p){x=Promise.reject(p)}const m=x!==!0&&I(x);if(x!==!0&&!m&&!c)return!1;const h=p=>{p.then(d=>{l(d)},d=>{let R;d&&(d instanceof Error||typeof d.message=="string")?R=d.message:R="An unexpected error occurred",l({__mozWebExtensionPolyfillReject__:!0,message:R})}).catch(d=>{console.error("Failed to send onMessage rejected reply",d)})};return h(m?x:s),!0}),U=({reject:e,resolve:r},n)=>{f.runtime.lastError?f.runtime.lastError.message===w?r():e(new Error(f.runtime.lastError.message)):n&&n.__mozWebExtensionPolyfillReject__?e(new Error(n.message)):r(n)},O=(e,r,n,...g)=>{if(g.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${C(r.minArgs)} for ${e}(), got ${g.length}`);if(g.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${C(r.maxArgs)} for ${e}(), got ${g.length}`);return new Promise((l,c)=>{const u=U.bind(null,{resolve:l,reject:c});g.push(u),n.sendMessage(...g)})},D={devtools:{network:{onRequestFinished:S(q)}},runtime:{onMessage:S($),onMessageExternal:S($),sendMessage:O.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:O.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},M={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return b.privacy={network:{"*":M},services:{"*":M},websites:{"*":M}},E(f,D,b)};a.exports=T(chrome)}else a.exports=globalThis.browser})})(Z);function z(o,t){return t.url.startsWith(o)}const j={};let B={},_,y,P;function K({getURL:o,addListener:t,browserTabs:a,sendMessage:i}){!o||!t||!a||!i||(P=i,y=a,_=o(""),t((A,w)=>{const T=A.type,f=A.data?A.data:A;if(T&&z(_,w)){const b=j[T];if(b)return b.options.run(f,B)}}))}function J(o){B=o}function G(){y.reload&&y.reload().then(()=>{})}function H(){window.close()}class k{constructor({name:t,run:a,mixins:i,schema:A}){this.options={name:t,mixins:i,schema:A,run:a},j[t]=this}async call(t){if(P){t=t||{};let a;if(document.location.search&&document.location.search.indexOf("tabId")>0){if(a=new URLSearchParams(document.location.search).get("tabId"),a==="error")throw new Error("anError");let w=y.get(a);return t.url=w.url,t.tabId=a,P({type:this.options.name,data:t})}const i=await y.query({active:!0,lastFocusedWindow:!0});if(i.length>0){const A=i[0];return t.url=A.url,t.tabId=A.id,P({type:this.options.name,data:t})}}else return alert(`sent message ${this.options.name}`)}async callAndReload(t){return this.call(t).then(()=>{G(),H()})}}const Q=new k({name:"getTabInfo",run:({tabId:o},{blocker:t,guardian:a})=>{try{return t.getTabInfo(!1,o)}catch(i){a.setLastError(i)}}}),X=new k({name:"pause",run:(o,{blocker:t,guardian:a})=>{try{return t.isPaused(!0)}catch(i){a.setLastError(i)}}}),Y=new k({name:"resume",run:(o,{blocker:t,guardian:a})=>{try{return t.isPaused(!1)}catch(i){a.setLastError(i)}}}),ee=new k({name:"allow",run:({url:o,origin:t},{blocker:a,guardian:i})=>{try{return a.createDomainAllowListFilter(o,t)}catch(A){i.setLastError(A)}}}),re=new k({name:"clear",run:({url:o,tabId:t},{blocker:a,guardian:i})=>{try{return a.tryToRemoveAllowList(o,t)}catch(A){i.setLastError(A)}}});export{k as V,J as a,Z as b,V as c,ee as d,re as e,Q as g,X as p,Y as r,K as s};
//# sourceMappingURL=api.38db8e20.js.map
