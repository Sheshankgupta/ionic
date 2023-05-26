"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9217],{76:(_,F,u)=>{u.d(F,{GW:()=>v,dk:()=>L,oK:()=>r});var r=(()=>((r=r||{}).Prompt="PROMPT",r.Camera="CAMERA",r.Photos="PHOTOS",r))(),v=(()=>((v=v||{}).Rear="REAR",v.Front="FRONT",v))(),L=(()=>((L=L||{}).Uri="uri",L.Base64="base64",L.DataUrl="dataUrl",L))()},7423:(_,F,u)=>{u.d(F,{Uw:()=>J,dV:()=>S,fo:()=>z,xz:()=>Z});var r=u(5861);typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"&&global;var T=(()=>((T=T||{}).Unimplemented="UNIMPLEMENTED",T.Unavailable="UNAVAILABLE",T))();class Z extends Error{constructor(e,t,i){super(e),this.message=e,this.code=t,this.data=i}}const H=n=>{var e,t,i,c,o;const h=n.CapacitorCustomPlatform||null,a=n.Capacitor||{},b=a.Plugins=a.Plugins||{},m=n.CapacitorPlatforms,W=(null===(e=null==m?void 0:m.currentPlatform)||void 0===e?void 0:e.getPlatform)||(()=>null!==h?h.name:(n=>{var e,t;return null!=n&&n.androidBridge?"android":null!==(t=null===(e=null==n?void 0:n.webkit)||void 0===e?void 0:e.messageHandlers)&&void 0!==t&&t.bridge?"ios":"web"})(n)),ce=(null===(t=null==m?void 0:m.currentPlatform)||void 0===t?void 0:t.isNativePlatform)||(()=>"web"!==W()),ue=(null===(i=null==m?void 0:m.currentPlatform)||void 0===i?void 0:i.isPluginAvailable)||(p=>{const P=ee.get(p);return!!(null!=P&&P.platforms.has(W())||ie(p))}),ie=(null===(c=null==m?void 0:m.currentPlatform)||void 0===c?void 0:c.getPluginHeader)||(p=>{var P;return null===(P=a.PluginHeaders)||void 0===P?void 0:P.find(G=>G.name===p)}),ee=new Map,pe=(null===(o=null==m?void 0:m.currentPlatform)||void 0===o?void 0:o.registerPlugin)||((p,P={})=>{const G=ee.get(p);if(G)return console.warn(`Capacitor plugin "${p}" already registered. Cannot register plugins twice.`),G.proxy;const j=W(),M=ie(p);let U;const ve=function(){var y=(0,r.Z)(function*(){return!U&&j in P?U=U="function"==typeof P[j]?yield P[j]():P[j]:null!==h&&!U&&"web"in P&&(U=U="function"==typeof P.web?yield P.web():P.web),U});return function(){return y.apply(this,arguments)}}(),te=y=>{let C;const x=(...$)=>{const k=ve().then(A=>{const D=((y,C)=>{var x,$;if(!M){if(y)return null===($=y[C])||void 0===$?void 0:$.bind(y);throw new Z(`"${p}" plugin is not implemented on ${j}`,T.Unimplemented)}{const k=null==M?void 0:M.methods.find(A=>C===A.name);if(k)return"promise"===k.rtype?A=>a.nativePromise(p,C.toString(),A):(A,D)=>a.nativeCallback(p,C.toString(),A,D);if(y)return null===(x=y[C])||void 0===x?void 0:x.bind(y)}})(A,y);if(D){const V=D(...$);return C=null==V?void 0:V.remove,V}throw new Z(`"${p}.${y}()" is not implemented on ${j}`,T.Unimplemented)});return"addListener"===y&&(k.remove=(0,r.Z)(function*(){return C()})),k};return x.toString=()=>`${y.toString()}() { [capacitor code] }`,Object.defineProperty(x,"name",{value:y,writable:!1,configurable:!1}),x},se=te("addListener"),ae=te("removeListener"),be=(y,C)=>{const x=se({eventName:y},C),$=function(){var A=(0,r.Z)(function*(){const D=yield x;ae({eventName:y,callbackId:D},C)});return function(){return A.apply(this,arguments)}}(),k=new Promise(A=>x.then(()=>A({remove:$})));return k.remove=(0,r.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield $()}),k},ne=new Proxy({},{get(y,C){switch(C){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return M?be:se;case"removeListener":return ae;default:return te(C)}}});return b[p]=ne,ee.set(p,{name:p,proxy:ne,platforms:new Set([...Object.keys(P),...M?[j]:[]])}),ne});return a.convertFileSrc||(a.convertFileSrc=p=>p),a.getPlatform=W,a.handleError=p=>n.console.error(p),a.isNativePlatform=ce,a.isPluginAvailable=ue,a.pluginMethodNoop=(p,P,G)=>Promise.reject(`${G} does not have an implementation of "${P}".`),a.registerPlugin=pe,a.Exception=Z,a.DEBUG=!!a.DEBUG,a.isLoggingEnabled=!!a.isLoggingEnabled,a.platform=a.getPlatform(),a.isNative=a.isNativePlatform(),a},S=(n=>n.Capacitor=H(n))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),z=S.registerPlugin;class J{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){var i=this;this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t);const o=this.windowListeners[e];o&&!o.registered&&this.addWindowListener(o);const h=function(){var b=(0,r.Z)(function*(){return i.removeListener(e,t)});return function(){return b.apply(this,arguments)}}(),a=Promise.resolve({remove:h});return Object.defineProperty(a,"remove",{value:(b=(0,r.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield h()}),function(){return b.apply(this,arguments)})}),a;var b}removeAllListeners(){var e=this;return(0,r.Z)(function*(){e.listeners={};for(const t in e.windowListeners)e.removeWindowListener(e.windowListeners[t]);e.windowListeners={}})()}notifyListeners(e,t){const i=this.listeners[e];i&&i.forEach(c=>c(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:i=>{this.notifyListeners(t,i)}}}unimplemented(e="not implemented"){return new S.Exception(e,T.Unimplemented)}unavailable(e="not available"){return new S.Exception(e,T.Unavailable)}removeListener(e,t){var i=this;return(0,r.Z)(function*(){const c=i.listeners[e];if(!c)return;const o=c.indexOf(t);i.listeners[e].splice(o,1),i.listeners[e].length||i.removeWindowListener(i.windowListeners[e])})()}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}const K=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),l=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class E extends J{getCookies(){return(0,r.Z)(function*(){const e=document.cookie,t={};return e.split(";").forEach(i=>{if(i.length<=0)return;let[c,o]=i.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");c=l(c).trim(),o=l(o).trim(),t[c]=o}),t})()}setCookie(e){return(0,r.Z)(function*(){try{const t=K(e.key),i=K(e.value),c=`; expires=${(e.expires||"").replace("expires=","")}`,o=(e.path||"/").replace("path=",""),h=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${i||""}${c}; path=${o}; ${h};`}catch(t){return Promise.reject(t)}})()}deleteCookie(e){return(0,r.Z)(function*(){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}})()}clearCookies(){return(0,r.Z)(function*(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}})()}clearAllCookies(){var e=this;return(0,r.Z)(function*(){try{yield e.clearCookies()}catch(t){return Promise.reject(t)}})()}}z("CapacitorCookies",{web:()=>new E});const f=function(){var n=(0,r.Z)(function*(e){return new Promise((t,i)=>{const c=new FileReader;c.onload=()=>{const o=c.result;t(o.indexOf(",")>=0?o.split(",")[1]:o)},c.onerror=o=>i(o),c.readAsDataURL(e)})});return function(t){return n.apply(this,arguments)}}();class Q extends J{request(e){return(0,r.Z)(function*(){const t=((n,e={})=>{const t=Object.assign({method:n.method||"GET",headers:n.headers},e),c=((n={})=>{const e=Object.keys(n);return Object.keys(n).map(c=>c.toLocaleLowerCase()).reduce((c,o,h)=>(c[o]=n[e[h]],c),{})})(n.headers)["content-type"]||"";if("string"==typeof n.data)t.body=n.data;else if(c.includes("application/x-www-form-urlencoded")){const o=new URLSearchParams;for(const[h,a]of Object.entries(n.data||{}))o.set(h,a);t.body=o.toString()}else if(c.includes("multipart/form-data")){const o=new FormData;if(n.data instanceof FormData)n.data.forEach((a,b)=>{o.append(b,a)});else for(const a of Object.keys(n.data))o.append(a,n.data[a]);t.body=o;const h=new Headers(t.headers);h.delete("content-type"),t.headers=h}else(c.includes("application/json")||"object"==typeof n.data)&&(t.body=JSON.stringify(n.data));return t})(e,e.webFetchExtra),i=((n,e=!0)=>n?Object.entries(n).reduce((i,c)=>{const[o,h]=c;let a,b;return Array.isArray(h)?(b="",h.forEach(m=>{a=e?encodeURIComponent(m):m,b+=`${o}=${a}&`}),b.slice(0,-1)):(a=e?encodeURIComponent(h):h,b=`${o}=${a}`),`${i}&${b}`},"").substr(1):null)(e.params,e.shouldEncodeUrlParams),c=i?`${e.url}?${i}`:e.url,o=yield fetch(c,t),h=o.headers.get("content-type")||"";let b,m,{responseType:a="text"}=o.ok?e:{};switch(h.includes("application/json")&&(a="json"),a){case"arraybuffer":case"blob":m=yield o.blob(),b=yield f(m);break;case"json":b=yield o.json();break;default:b=yield o.text()}const N={};return o.headers.forEach((W,q)=>{N[q]=W}),{data:b,headers:N,status:o.status,url:o.url}})()}get(e){var t=this;return(0,r.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"GET"}))})()}post(e){var t=this;return(0,r.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"POST"}))})()}put(e){var t=this;return(0,r.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PUT"}))})()}patch(e){var t=this;return(0,r.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PATCH"}))})()}delete(e){var t=this;return(0,r.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"DELETE"}))})()}}z("CapacitorHttp",{web:()=>new Q})},1443:(_,F,u)=>{u.d(F,{ez:()=>v,tP:()=>r});var r=(()=>((r=r||{}).Documents="DOCUMENTS",r.Data="DATA",r.Library="LIBRARY",r.Cache="CACHE",r.External="EXTERNAL",r.ExternalStorage="EXTERNAL_STORAGE",r))(),v=(()=>((v=v||{}).UTF8="utf8",v.ASCII="ascii",v.UTF16="utf16",v))()},9217:(_,F,u)=>{u.r(F),u.d(F,{Tab2PageModule:()=>K});var r=u(7002),v=u(4755),L=u(5030),B=u(581),Y=u(2852),R=u(5861),d=u(3020),T=u(7423),Z=u(76);const X=(0,T.fo)("Camera",{web:()=>u.e(3954).then(u.bind(u,3954)).then(l=>new l.CameraWeb)});var H=u(1443);const I=(0,T.fo)("Filesystem",{web:()=>u.e(6364).then(u.bind(u,6364)).then(l=>new l.FilesystemWeb)}),S=(0,T.fo)("Preferences",{web:()=>u.e(8359).then(u.bind(u,8359)).then(l=>new l.PreferencesWeb)});let z=(()=>{class l{constructor(s){this.photos=[],this.PHOTO_STORAGE="photos",this.convertBlobToBase64=f=>new Promise((g,w)=>{const O=new FileReader;O.onerror=w,O.onload=()=>{g(O.result)},O.readAsDataURL(f)}),this.platform=s}addNewToGallery(){var s=this;return(0,R.Z)(function*(){const f=yield X.getPhoto({resultType:Z.dk.Uri,source:Z.oK.Camera,quality:100});console.log(f),console.log(Z.dk),console.log(Z.oK);const g=yield s.savePicture(f);s.photos.unshift(g),S.set({key:s.PHOTO_STORAGE,value:JSON.stringify(s.photos)})})()}savePicture(s){var f=this;return(0,R.Z)(function*(){const g=yield f.readAsBase64(s),w=(new Date).getTime()+".jpeg",O=yield I.writeFile({path:w,data:g,directory:H.tP.Data});return console.log(O),f.platform.is("hybrid")?{filepath:O.uri,webviewPath:T.dV.convertFileSrc(O.uri)}:{filepath:w,webviewPath:s.webPath}})()}readAsBase64(s){var f=this;return(0,R.Z)(function*(){if(f.platform.is("hybrid"))return(yield I.readFile({path:s.path})).data;{const w=yield(yield fetch(s.webPath)).blob();return yield f.convertBlobToBase64(w)}})()}loadSaved(){var s=this;return(0,R.Z)(function*(){const{value:f}=yield S.get({key:s.PHOTO_STORAGE});if(s.photos=f?JSON.parse(f):[],!s.platform.is("hybrid"))for(let g of s.photos){const w=yield I.readFile({path:g.filepath,directory:H.tP.Data});g.webviewPath=`data:image/jpeg;base64,${w.data}`}})()}deletePicture(s,f){var g=this;return(0,R.Z)(function*(){g.photos.splice(f,1),S.set({key:g.PHOTO_STORAGE,value:JSON.stringify(g.photos)});const w=s.filepath.substr(s.filepath.lastIndexOf("/")+1);yield I.deleteFile({path:w,directory:H.tP.Data})})()}}return l.\u0275fac=function(s){return new(s||l)(d.LFG(r.t4))},l.\u0275prov=d.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})();function re(l,E){if(1&l){const s=d.EpF();d.TgZ(0,"ion-col",5)(1,"ion-img",6),d.NdJ("click",function(){const g=d.CHM(s),w=g.$implicit,O=g.index,Q=d.oxw();return d.KtG(Q.showActionSheet(w,O))}),d.qZA()()}if(2&l){const s=E.$implicit;d.xp6(1),d.Q6J("src",s.webviewPath)}}const J=[{path:"",component:(()=>{class l{constructor(s,f){this.photoService=s,this.actionSheetController=f}addPhotoToGallery(){this.photoService.addNewToGallery()}ngOnInit(){var s=this;return(0,R.Z)(function*(){yield s.photoService.loadSaved()})()}showActionSheet(s,f){var g=this;return(0,R.Z)(function*(){yield(yield g.actionSheetController.create({header:"Photos",buttons:[{text:"Delete",role:"destructive",icon:"trash",handler:()=>{g.photoService.deletePicture(s,f)}},{text:"Cancel",icon:"close",role:"cancel",handler:()=>{}}]})).present()})()}}return l.\u0275fac=function(s){return new(s||l)(d.Y36(z),d.Y36(r.BX))},l.\u0275cmp=d.Xpm({type:l,selectors:[["app-tab2"]],decls:12,vars:2,consts:[[3,"translucent"],["size","6",4,"ngFor","ngForOf"],["vertical","bottom","horizontal","center","slot","fixed"],[3,"click"],["name","camera"],["size","6"],[3,"src","click"]],template:function(s,f){1&s&&(d.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),d._uU(3,"Photo Gallery"),d.qZA()()(),d.TgZ(4,"ion-content")(5,"ion-grid")(6,"ion-row"),d.YNc(7,re,2,1,"ion-col",1),d.qZA()()(),d.TgZ(8,"ion-content")(9,"ion-fab",2)(10,"ion-fab-button",3),d.NdJ("click",function(){return f.addPhotoToGallery()}),d._UZ(11,"ion-icon",4),d.qZA()()()),2&s&&(d.Q6J("translucent",!0),d.xp6(7),d.Q6J("ngForOf",f.photoService.photos))},dependencies:[r.wI,r.W2,r.IJ,r.W4,r.jY,r.Gu,r.gu,r.Xz,r.Nd,r.wd,r.sr,v.sg]}),l})()}];let oe=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=d.oAB({type:l}),l.\u0275inj=d.cJS({imports:[Y.Bz.forChild(J),Y.Bz]}),l})(),K=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=d.oAB({type:l}),l.\u0275inj=d.cJS({imports:[r.Pc,v.ez,L.u5,B.e,oe]}),l})()}}]);