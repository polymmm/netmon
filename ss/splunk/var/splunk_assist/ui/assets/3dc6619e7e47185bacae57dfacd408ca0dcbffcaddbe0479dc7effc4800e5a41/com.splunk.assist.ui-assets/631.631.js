/*! For license information please see 631.631.js.LICENSE.txt */
(self.webpackChunksplunk_assist_main=self.webpackChunksplunk_assist_main||[]).push([[631],{60234:(e,t,n)=>{"use strict";n.d(t,{UT:()=>N,Su:()=>f});var s=n(12650),r=n.n(s),l=n(57094);function i(e){return{activate:async(t,n)=>{try{if(!n)throw new l.L("POST","activate","assist/onboard",404);const s=await e.post("activate",{method:"POST",path:"assist/onboard",body:{code:t,license_id:n}});if("creating"===s.status||"active"===s.status)return{message:"Your account was successfully linked with your deployment",valid:!0}}catch(e){if(e instanceof l.L)return{code:e.status,valid:!1}}return{code:null,valid:!1}},getIsAssistEnabled:async()=>{var t,n,s,r;const l=await e.get("getOptinStatus",{method:"GET",path:"assist/optin_status"});return{connectivityOpen:null==(t=l.context)?void 0:t.network_connectivity,optinStatus:null==(n=l.context)?void 0:n.assist_optin,tenantStatus:null==(s=l.context)?void 0:s.tenant_status,assistEnabled:l.assist_enabled,sudOptinStatus:null==(r=l.context)?void 0:r.sud_optin}}}}var a=n(91493),o=n(54061),u=n.n(o);function c(e){return{getLicenseGUID:async()=>{try{const t=await e.get("getLicenseInfo",{method:"GET",path:"licenser/localslave",queryParams:{output_mode:"json"}}),{content:n}=t.entry[0],s=u()(n.add_ons,((e,t)=>{var n;return null!=t&&null!=(n=t.parameters)&&n.guid&&e.push(t.parameters.guid),e}),[]);return n.guid.filter((e=>!s.includes(e)))[0].toLowerCase()}catch{return null}}}}function m(e){return{getAssistEnv:async()=>{try{return(await e.get("getAssistEnv",{method:"GET",path:"properties/assist/cloud",queryParams:{output_mode:"json"}})).entry.find((e=>"scs_environment"===e.name)).content}catch(e){return"production"}}}}function d(e){return{getCurrentContext:async()=>{try{const t=await e.get("getCurrentContext",{method:"GET",path:"authentication/current-context",queryParams:{output_mode:"json"}}),{content:n}=t.entry[0];return{username:null==n?void 0:n.username,email:null==n?void 0:n.email}}catch{return null}}}}const _=(0,s.createContext)(null),N=({children:e})=>{const t=(0,s.useMemo)((()=>(()=>{const e=new a.l({shouldUseSCS:!1});return{supervisorService:i(e),licenserService:c(e),confService:m(e),accessService:d(e)}})()),[]);return r().createElement(_.Provider,{value:t,__self:void 0,__source:{fileName:"/builds/swp/ui-platform/projects/remotes-splunk-assist/splunk-assist-main/src/ui/common/providers/ServiceProvider.tsx",lineNumber:20,columnNumber:12}},e)},f=()=>{const e=(0,s.useContext)(_);if(!e)throw new Error("useServices must be called within ServiceProvider");return e}},2164:(e,t,n)=>{"use strict";n.d(t,{G9:()=>s,nm:()=>l,zT:()=>r});const s="pending",r="running",l="completed"},64515:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AssistRouter:()=>we,AssistRoutes:()=>ye,default:()=>Ae});var s=n(87462),r=n(12650),l=n.n(r),i=n(96814),a=n(30168),o=n(48689),u=n.n(o),c=n(95414),m=n.n(c),d=n(25947),_=n(97026),N=n.n(_),f=n(97212);function v(e,t){const n=(0,r.useRef)(),s=(0,r.useRef)(e);return(0,r.useEffect)((()=>{s.current=e}),[e]),(0,r.useEffect)((()=>{if(null!==t)return n.current=window.setInterval((()=>s.current()),t),()=>window.clearInterval(n.current)}),[t]),n}var p,b,g,E,S=n(93564),h=n(49664),k=n(50669),T=n(68580),y=n.n(T),w=n(66206),A=n.n(w);const I=N().div(p||(p=(0,a.Z)(["\n    display: flex;\n    flex-flow: column;\n    align-content: center;\n    align-items: center;\n"]))),C=N()(y())(b||(b=(0,a.Z)(["\n    margin-top: ",";\n"])),k.default.spacingLarge),x=N()(y())(g||(g=(0,a.Z)(["\n    margin: 0;\n    color: ",";\n"])),k.default.contentColorDefault),P=N()(A())(E||(E=(0,a.Z)(["\n    font-size: ",";\n"])),k.default.fontSizeLarge);let O;!function(e){e[e.INITIAL=0]="INITIAL",e[e.OPT_IN=1]="OPT_IN",e[e.TENANT_CREATING=2]="TENANT_CREATING",e[e.COMPLETED=3]="COMPLETED"}(O||(O={}));const L="Splunk Assist is loading",R="Activating Splunk Assist...",M={title:L,message:"Establishing secure connections..."},G=[{title:L,message:R,altMessage:"This could take a few moments, stay tuned..."},{title:L,message:"Connecting to Splunk cloud services…"},{title:L,message:"Connected to Splunk cloud services.",altMessage:"Sending onboarding request..."},M];var D="/builds/swp/ui-platform/projects/remotes-splunk-assist/splunk-assist-main/src/ui/onboarding/components/AssistPendingActivation/AssistPendingActivation.tsx";function z(e,t,n){if(!n){if(t===h.li.UNKNOWN)return e===S.S4.ENABLED?O.OPT_IN:O.INITIAL;if((t===h.li.CREATING||t===h.li.ACTIVE)&&e===S.S4.ENABLED)return O.TENANT_CREATING}return t===h.li.ACTIVE&&n?O.COMPLETED:O.OPT_IN}const j=({reloadAssistContext:e})=>{const[t,n]=(0,r.useState)(0),[s,i]=(0,r.useState)(!1),{optinStatus:a,tenantStatus:o,assistEnabled:u}=(0,S.s5)(),c=z(a,o,u),d=function(e,t){switch(e){case O.INITIAL:return{title:L,message:R,altMessage:"This could take a few moments, stay tuned..."};case O.OPT_IN:return function(e){return e>=G.length?M:G[e]}(t);case O.TENANT_CREATING:return{title:L,message:"Secure connections have been established.",altMessage:"Provisioning cloud resources..."};default:return{title:L,message:R,altMessage:"This could take a few moments, stay tuned"}}}(c,t);return v(e,5e3),v((()=>{c===O.OPT_IN&&t<G.length&&n(t+1)}),2e4),v((()=>{i(!0)}),18e4),l().createElement(I,{__self:void 0,__source:{fileName:D,lineNumber:95,columnNumber:9}},l().createElement(m(),{size:"large",__self:void 0,__source:{fileName:D,lineNumber:96,columnNumber:13}}),l().createElement(C,{level:2,style:{color:"white"},__self:void 0,__source:{fileName:D,lineNumber:97,columnNumber:13}},null==d?void 0:d.title),l().createElement(x,{level:4,__self:void 0,__source:{fileName:D,lineNumber:100,columnNumber:13}},null==d?void 0:d.message),l().createElement(x,{level:4,__self:void 0,__source:{fileName:D,lineNumber:101,columnNumber:13}},null==d?void 0:d.altMessage),s&&l().createElement(l().Fragment,null,l().createElement("br",{__self:void 0,__source:{fileName:D,lineNumber:104,columnNumber:21}}),l().createElement(x,{level:4,__self:void 0,__source:{fileName:D,lineNumber:105,columnNumber:21}},"It looks like the activation is taking longer than expected."),l().createElement(x,{level:4,__self:void 0,__source:{fileName:D,lineNumber:108,columnNumber:21}},"If this persists,"," ",l().createElement(P,{to:(0,f.oN)("learnmore.splunkassist.overview"),openInNewContext:!0,__self:void 0,__source:{fileName:D,lineNumber:110,columnNumber:25}},"contact support"))))};var Z=n(76416),U=n.n(Z),F=n(90622),q=n(39786),B=n(47089),H="/builds/swp/ui-platform/projects/remotes-splunk-assist/splunk-assist-main/src/ui/onboarding/components/ActivationFailed.tsx";const K=()=>l().createElement(F.l,{"data-test":"activation-failed",__self:void 0,__source:{fileName:H,lineNumber:12,columnNumber:5}},l().createElement(B.g,{size:12,__self:void 0,__source:{fileName:H,lineNumber:13,columnNumber:9}}),l().createElement(q.gK,{__self:void 0,__source:{fileName:H,lineNumber:14,columnNumber:9}},l().createElement(q.dk,{level:2,__self:void 0,__source:{fileName:H,lineNumber:15,columnNumber:13}},"Activation Failed"),l().createElement(q.Bc,{__self:void 0,__source:{fileName:H,lineNumber:16,columnNumber:13}},"Something went wrong. Contact Splunk Support."),l().createElement(q.Bc,{__self:void 0,__source:{fileName:H,lineNumber:17,columnNumber:13}},l().createElement(U(),{to:"https://www.splunk.com/en_us/about-splunk/contact-us.html#customer-support",appearance:"primary",openInNewContext:!0,__self:void 0,__source:{fileName:H,lineNumber:18,columnNumber:17}},"Contact Splunk Support"))));var X,V,W=n(55235),J=n(2164),Q="/builds/swp/ui-platform/projects/remotes-splunk-assist/splunk-assist-main/src/ui/common/components/AssistApp.tsx";const Y=(0,r.lazy)((()=>n.e(350).then(n.bind(n,82350)))),$=(0,r.lazy)((()=>Promise.all([n.e(636),n.e(602)]).then(n.bind(n,36839)))),ee=()=>l().createElement(F.Z,{"data-test":"loader",__self:void 0,__source:{fileName:Q,lineNumber:27,columnNumber:5}},l().createElement(m(),{size:"large",__self:void 0,__source:{fileName:Q,lineNumber:28,columnNumber:9}})),te=N()(u())(X||(X=(0,a.Z)(["\n    margin-left: -",";\n    margin-right: -",";\n    margin-top: -",";\n    background-color: ",";\n"])),d.variables.spacingLarge,d.variables.spacingLarge,d.variables.spacingXSmall,d.variables.backgroundColorFloating),ne=N().div(V||(V=(0,a.Z)(["\n    overflow: auto;\n"]))),se="false",re="true",le="showGlobalMessage",ie="onboardingStateLocalStorageKey",ae=({context:e,isTest:t})=>{const{optinStatus:n,loadingState:s,reload:i,tenantStatus:a,assistEnabled:o}=(0,S.s5)(),[u,c]=(0,r.useState)(sessionStorage.getItem(le)||re),m=(0,r.useCallback)((()=>{sessionStorage.setItem(le,se),c(se)}),[]),[d,_]=(0,r.useState)(sessionStorage.getItem(ie)||J.G9);return(0,W.TH)(s)?l().createElement(ee,{__self:void 0,__source:{fileName:Q,lineNumber:80,columnNumber:16}}):h.Ts.includes(a)?l().createElement(K,{__self:void 0,__source:{fileName:Q,lineNumber:84,columnNumber:16}}):o&&n!==S.S4.DISABLED||d===J.nm?function(e,t,n){return z(e,t,n)!==O.COMPLETED}(n,a,o)?l().createElement(F.Z,{__self:void 0,__source:{fileName:Q,lineNumber:105,columnNumber:13}},l().createElement(j,{reloadAssistContext:i,__self:void 0,__source:{fileName:Q,lineNumber:106,columnNumber:17}})):l().createElement(r.Suspense,{fallback:l().createElement(ee,{__self:void 0,__source:{fileName:Q,lineNumber:112,columnNumber:29}}),__self:void 0,__source:{fileName:Q,lineNumber:112,columnNumber:9}},u===re&&l().createElement(te,{"data-test":"global-message",appearance:"banner",onRequestRemove:m,type:"info",__self:void 0,__source:{fileName:Q,lineNumber:114,columnNumber:17}},"Indicator updates can take up to 1 hour to appear on this page."),l().createElement(ne,{__self:void 0,__source:{fileName:Q,lineNumber:123,columnNumber:13}},l().createElement(Y,{context:e,isTest:t,__self:void 0,__source:{fileName:Q,lineNumber:124,columnNumber:17}}))):l().createElement(r.Suspense,{fallback:l().createElement(ee,{__self:void 0,__source:{fileName:Q,lineNumber:92,columnNumber:33}}),__self:void 0,__source:{fileName:Q,lineNumber:92,columnNumber:13}},l().createElement($,{context:e,isTest:t,onboardingState:d,onUpdateOnboarding:e=>{sessionStorage.setItem(ie,e),_(e)},__self:void 0,__source:{fileName:Q,lineNumber:93,columnNumber:17}}))};var oe=n(97147),ue=n(35800),ce=n(60234);const me=({children:e})=>{const t=function(){const e=(0,ue.useErrorHandler)(),{supervisorService:{getIsAssistEnabled:t}}=(0,ce.Su)(),[n,s]=(0,r.useState)(0),{loadingState:l,value:i}=(0,W.zA)(e,"Error verifying Splunk Assist is enabled",t,{alwaysReset:!1,lastRefresh:n}),a=(0,r.useCallback)((()=>{s((e=>e<Number.MAX_SAFE_INTEGER-10?e+1:0))}),[]);return(0,r.useMemo)((()=>({connectivityOpen:(null==i?void 0:i.connectivityOpen)||!1,loadingState:l,reload:a,optinStatus:(null==i?void 0:i.optinStatus)||S.S4.UNKNOWN,tenantStatus:(null==i?void 0:i.tenantStatus)||"unknown",assistEnabled:(null==i?void 0:i.assistEnabled)||!1,sudOptinStatus:(null==i?void 0:i.sudOptinStatus)||!1})),[null==i?void 0:i.connectivityOpen,null==i?void 0:i.optinStatus,null==i?void 0:i.tenantStatus,l,a,null==i?void 0:i.assistEnabled,null==i?void 0:i.sudOptinStatus])}();return l().createElement(S.E3.Provider,{value:t,__self:void 0,__source:{fileName:"/builds/swp/ui-platform/projects/remotes-splunk-assist/splunk-assist-main/src/ui/common/providers/Assist/AssistProvider.tsx",lineNumber:52,columnNumber:12}},e)};var de=n(34373),_e=n(85873);function Ne(e){if(e)return;const t=window.location.pathname;if(t){const e=t.split("/");if(e.length>0)return e.pop()||""}}var fe=n(55786),ve=n(5617),pe=n(54942);const be=["eventName"];var ge;!function(e){e.playground="play",e.production="prod",e.staging="stage"}(ge||(ge={}));const Ee=(e,t)=>{(t||document).addEventListener("click",(t=>((e,t)=>{let n="",s=e;for(;s;){var r;if(s.dataset.telemetryData){n=s.dataset.telemetryData;break}s=null==(r=s)?void 0:r.parentElement}if(n){const e=JSON.parse(n),{eventName:s}=e,r=(0,fe.Z)(e,be);if(!s)return;null==t||t.track(s,r)}})(t.target,e)))},Se=(0,r.createContext)({}).Provider;var he="/builds/swp/ui-platform/projects/remotes-splunk-assist/splunk-assist-main/src/telemetry/TelemetryProvider.tsx";const ke=({disableTelemetry:e,children:t})=>{const{confService:n,accessService:s}=(0,ce.Su)(),[i,a]=(0,r.useState)(!1),o=(0,r.useRef)(null),u=(0,ue.useErrorHandler)(),c=(0,W.zA)((0,r.useCallback)((()=>()=>{}),[]),"Error loading current context",(0,r.useCallback)((()=>s.getCurrentContext()),[s])),m=(0,W.zA)(u,"Error loading assist environment info",(0,r.useCallback)((()=>n.getAssistEnv()),[n])),d=e?void 0:(e=>(0,r.useMemo)((()=>{const t=ge[e];if(void 0===t)return;const n=(0,ve.createTelemetry)(),s=(0,pe.createSplunkOtelPlugin)({appType:"ec",appName:"splunk-assist-telemetry",environment:t,shouldRemovePII:!0,shouldDisableAutocapture:!0,shouldRemoveQueryParams:!0});return n.addPlugin(s),n}),[e]))(m.value||"");return(0,r.useEffect)((()=>{var e;d&&!i&&null!=(e=c.value)&&e.email&&(d.identify({tenant:window.location.host,user:c.value.email}),Ee(d,o.current),a(!0))}),[d,c,a,i]),l().createElement(Se,{value:{telemetry:d},__self:void 0,__source:{fileName:he,lineNumber:56,columnNumber:9}},l().createElement("div",{ref:o,__self:void 0,__source:{fileName:he,lineNumber:57,columnNumber:13}},t))};var Te="/builds/swp/ui-platform/projects/remotes-splunk-assist/splunk-assist-main/src/ui/routers/AssistRouter.tsx";const ye=({context:e,isTest:t})=>{const n=(0,i.useHistory)();return l().createElement(ce.UT,{__self:void 0,__source:{fileName:Te,lineNumber:18,columnNumber:9}},l().createElement(_e.XT,{testFlags:{shouldUseSCS:!1,tenant:Ne(e.isSE)},__self:void 0,__source:{fileName:Te,lineNumber:19,columnNumber:13}},l().createElement(de.pw,{history:n,__self:void 0,__source:{fileName:Te,lineNumber:20,columnNumber:17}},l().createElement(oe.i,{colorScheme:"dark",__self:void 0,__source:{fileName:Te,lineNumber:21,columnNumber:21}},l().createElement(ke,{disableTelemetry:t,__self:void 0,__source:{fileName:Te,lineNumber:22,columnNumber:25}},l().createElement(me,{__self:void 0,__source:{fileName:Te,lineNumber:23,columnNumber:29}},l().createElement(ae,{context:e,isTest:t,__self:void 0,__source:{fileName:Te,lineNumber:24,columnNumber:33}})))))))},we=e=>l().createElement(i.HashRouter,{__self:void 0,__source:{fileName:Te,lineNumber:36,columnNumber:9}},l().createElement(ye,(0,s.Z)({},e,{__self:void 0,__source:{fileName:Te,lineNumber:37,columnNumber:13}}))),Ae=we},42480:()=>{}}]);
//# sourceMappingURL=631.631.js.map?6cc949bb9cc6f4376284