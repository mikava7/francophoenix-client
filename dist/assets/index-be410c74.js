function fb(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Ns=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Uf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function pb(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var o=Function.bind.apply(t,i);return new o}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var M0={exports:{}},_l={},W0={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ys=Symbol.for("react.element"),hb=Symbol.for("react.portal"),mb=Symbol.for("react.fragment"),gb=Symbol.for("react.strict_mode"),yb=Symbol.for("react.profiler"),vb=Symbol.for("react.provider"),xb=Symbol.for("react.context"),wb=Symbol.for("react.forward_ref"),bb=Symbol.for("react.suspense"),Sb=Symbol.for("react.memo"),kb=Symbol.for("react.lazy"),$h=Symbol.iterator;function Cb(e){return e===null||typeof e!="object"?null:(e=$h&&e[$h]||e["@@iterator"],typeof e=="function"?e:null)}var U0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H0=Object.assign,V0={};function Wi(e,t,n){this.props=e,this.context=t,this.refs=V0,this.updater=n||U0}Wi.prototype.isReactComponent={};Wi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Wi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Q0(){}Q0.prototype=Wi.prototype;function Hf(e,t,n){this.props=e,this.context=t,this.refs=V0,this.updater=n||U0}var Vf=Hf.prototype=new Q0;Vf.constructor=Hf;H0(Vf,Wi.prototype);Vf.isPureReactComponent=!0;var Rh=Array.isArray,q0=Object.prototype.hasOwnProperty,Qf={current:null},G0={key:!0,ref:!0,__self:!0,__source:!0};function K0(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)q0.call(t,r)&&!G0.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ys,type:e,key:o,ref:s,props:i,_owner:Qf.current}}function Ab(e,t){return{$$typeof:ys,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function qf(e){return typeof e=="object"&&e!==null&&e.$$typeof===ys}function jb(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var zh=/\/+/g;function Qc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?jb(""+e.key):t.toString(36)}function sa(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ys:case hb:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Qc(s,0):r,Rh(i)?(n="",e!=null&&(n=e.replace(zh,"$&/")+"/"),sa(i,t,n,"",function(c){return c})):i!=null&&(qf(i)&&(i=Ab(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(zh,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Rh(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Qc(o,a);s+=sa(o,t,n,l,i)}else if(l=Cb(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Qc(o,a++),s+=sa(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Fs(e,t,n){if(e==null)return e;var r=[],i=0;return sa(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Eb(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var at={current:null},aa={transition:null},Tb={ReactCurrentDispatcher:at,ReactCurrentBatchConfig:aa,ReactCurrentOwner:Qf};ne.Children={map:Fs,forEach:function(e,t,n){Fs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Fs(e,function(){t++}),t},toArray:function(e){return Fs(e,function(t){return t})||[]},only:function(e){if(!qf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ne.Component=Wi;ne.Fragment=mb;ne.Profiler=yb;ne.PureComponent=Hf;ne.StrictMode=gb;ne.Suspense=bb;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tb;ne.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=H0({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Qf.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)q0.call(t,l)&&!G0.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ys,type:e.type,key:i,ref:o,props:r,_owner:s}};ne.createContext=function(e){return e={$$typeof:xb,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:vb,_context:e},e.Consumer=e};ne.createElement=K0;ne.createFactory=function(e){var t=K0.bind(null,e);return t.type=e,t};ne.createRef=function(){return{current:null}};ne.forwardRef=function(e){return{$$typeof:wb,render:e}};ne.isValidElement=qf;ne.lazy=function(e){return{$$typeof:kb,_payload:{_status:-1,_result:e},_init:Eb}};ne.memo=function(e,t){return{$$typeof:Sb,type:e,compare:t===void 0?null:t}};ne.startTransition=function(e){var t=aa.transition;aa.transition={};try{e()}finally{aa.transition=t}};ne.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ne.useCallback=function(e,t){return at.current.useCallback(e,t)};ne.useContext=function(e){return at.current.useContext(e)};ne.useDebugValue=function(){};ne.useDeferredValue=function(e){return at.current.useDeferredValue(e)};ne.useEffect=function(e,t){return at.current.useEffect(e,t)};ne.useId=function(){return at.current.useId()};ne.useImperativeHandle=function(e,t,n){return at.current.useImperativeHandle(e,t,n)};ne.useInsertionEffect=function(e,t){return at.current.useInsertionEffect(e,t)};ne.useLayoutEffect=function(e,t){return at.current.useLayoutEffect(e,t)};ne.useMemo=function(e,t){return at.current.useMemo(e,t)};ne.useReducer=function(e,t,n){return at.current.useReducer(e,t,n)};ne.useRef=function(e){return at.current.useRef(e)};ne.useState=function(e){return at.current.useState(e)};ne.useSyncExternalStore=function(e,t,n){return at.current.useSyncExternalStore(e,t,n)};ne.useTransition=function(){return at.current.useTransition()};ne.version="18.2.0";W0.exports=ne;var S=W0.exports;const Le=Uf(S),Ob=fb({__proto__:null,default:Le},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lb=S,Pb=Symbol.for("react.element"),$b=Symbol.for("react.fragment"),Rb=Object.prototype.hasOwnProperty,zb=Lb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Nb={key:!0,ref:!0,__self:!0,__source:!0};function Y0(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Rb.call(t,r)&&!Nb.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Pb,type:e,key:o,ref:s,props:i,_owner:zb.current}}_l.Fragment=$b;_l.jsx=Y0;_l.jsxs=Y0;M0.exports=_l;var u=M0.exports,ud={},J0={exports:{}},At={},X0={exports:{}},Z0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,I){var W=N.length;N.push(I);e:for(;0<W;){var K=W-1>>>1,q=N[K];if(0<i(q,I))N[K]=I,N[W]=q,W=K;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var I=N[0],W=N.pop();if(W!==I){N[0]=W;e:for(var K=0,q=N.length,Te=q>>>1;K<Te;){var Ae=2*(K+1)-1,dt=N[Ae],De=Ae+1,ft=N[De];if(0>i(dt,W))De<q&&0>i(ft,dt)?(N[K]=ft,N[De]=W,K=De):(N[K]=dt,N[Ae]=W,K=Ae);else if(De<q&&0>i(ft,W))N[K]=ft,N[De]=W,K=De;else break e}}return I}function i(N,I){var W=N.sortIndex-I.sortIndex;return W!==0?W:N.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],c=[],d=1,f=null,p=3,y=!1,v=!1,x=!1,k=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(N){for(var I=n(c);I!==null;){if(I.callback===null)r(c);else if(I.startTime<=N)r(c),I.sortIndex=I.expirationTime,t(l,I);else break;I=n(c)}}function C(N){if(x=!1,w(N),!v)if(n(l)!==null)v=!0,V(A);else{var I=n(c);I!==null&&Q(C,I.startTime-N)}}function A(N,I){v=!1,x&&(x=!1,m(E),E=-1),y=!0;var W=p;try{for(w(I),f=n(l);f!==null&&(!(f.expirationTime>I)||N&&!L());){var K=f.callback;if(typeof K=="function"){f.callback=null,p=f.priorityLevel;var q=K(f.expirationTime<=I);I=e.unstable_now(),typeof q=="function"?f.callback=q:f===n(l)&&r(l),w(I)}else r(l);f=n(l)}if(f!==null)var Te=!0;else{var Ae=n(c);Ae!==null&&Q(C,Ae.startTime-I),Te=!1}return Te}finally{f=null,p=W,y=!1}}var b=!1,j=null,E=-1,T=5,O=-1;function L(){return!(e.unstable_now()-O<T)}function P(){if(j!==null){var N=e.unstable_now();O=N;var I=!0;try{I=j(!0,N)}finally{I?$():(b=!1,j=null)}}else b=!1}var $;if(typeof h=="function")$=function(){h(P)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,D=z.port2;z.port1.onmessage=P,$=function(){D.postMessage(null)}}else $=function(){k(P,0)};function V(N){j=N,b||(b=!0,$())}function Q(N,I){E=k(function(){N(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,V(A))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(N){switch(p){case 1:case 2:case 3:var I=3;break;default:I=p}var W=p;p=I;try{return N()}finally{p=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,I){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var W=p;p=N;try{return I()}finally{p=W}},e.unstable_scheduleCallback=function(N,I,W){var K=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?K+W:K):W=K,N){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=W+q,N={id:d++,callback:I,priorityLevel:N,startTime:W,expirationTime:q,sortIndex:-1},W>K?(N.sortIndex=W,t(c,N),n(l)===null&&N===n(c)&&(x?(m(E),E=-1):x=!0,Q(C,W-K))):(N.sortIndex=q,t(l,N),v||y||(v=!0,V(A))),N},e.unstable_shouldYield=L,e.unstable_wrapCallback=function(N){var I=p;return function(){var W=p;p=I;try{return N.apply(this,arguments)}finally{p=W}}}})(Z0);X0.exports=Z0;var Fb=X0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ey=S,kt=Fb;function F(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ty=new Set,Uo={};function _r(e,t){Si(e,t),Si(e+"Capture",t)}function Si(e,t){for(Uo[e]=t,e=0;e<t.length;e++)ty.add(t[e])}var wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dd=Object.prototype.hasOwnProperty,Db=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nh={},Fh={};function Ib(e){return dd.call(Fh,e)?!0:dd.call(Nh,e)?!1:Db.test(e)?Fh[e]=!0:(Nh[e]=!0,!1)}function Bb(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _b(e,t,n,r){if(t===null||typeof t>"u"||Bb(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function lt(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Qe[e]=new lt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Qe[t]=new lt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Qe[e]=new lt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Qe[e]=new lt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Qe[e]=new lt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Qe[e]=new lt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Qe[e]=new lt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Qe[e]=new lt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Qe[e]=new lt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Gf=/[\-:]([a-z])/g;function Kf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Gf,Kf);Qe[t]=new lt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Gf,Kf);Qe[t]=new lt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Gf,Kf);Qe[t]=new lt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Qe[e]=new lt(e,1,!1,e.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Qe[e]=new lt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Yf(e,t,n,r){var i=Qe.hasOwnProperty(t)?Qe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_b(t,n,i,r)&&(n=null),r||i===null?Ib(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var jn=ey.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ds=Symbol.for("react.element"),Yr=Symbol.for("react.portal"),Jr=Symbol.for("react.fragment"),Jf=Symbol.for("react.strict_mode"),fd=Symbol.for("react.profiler"),ny=Symbol.for("react.provider"),ry=Symbol.for("react.context"),Xf=Symbol.for("react.forward_ref"),pd=Symbol.for("react.suspense"),hd=Symbol.for("react.suspense_list"),Zf=Symbol.for("react.memo"),Fn=Symbol.for("react.lazy"),iy=Symbol.for("react.offscreen"),Dh=Symbol.iterator;function co(e){return e===null||typeof e!="object"?null:(e=Dh&&e[Dh]||e["@@iterator"],typeof e=="function"?e:null)}var Se=Object.assign,qc;function So(e){if(qc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);qc=t&&t[1]||""}return`
`+qc+e}var Gc=!1;function Kc(e,t){if(!e||Gc)return"";Gc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Gc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?So(e):""}function Mb(e){switch(e.tag){case 5:return So(e.type);case 16:return So("Lazy");case 13:return So("Suspense");case 19:return So("SuspenseList");case 0:case 2:case 15:return e=Kc(e.type,!1),e;case 11:return e=Kc(e.type.render,!1),e;case 1:return e=Kc(e.type,!0),e;default:return""}}function md(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jr:return"Fragment";case Yr:return"Portal";case fd:return"Profiler";case Jf:return"StrictMode";case pd:return"Suspense";case hd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ry:return(e.displayName||"Context")+".Consumer";case ny:return(e._context.displayName||"Context")+".Provider";case Xf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zf:return t=e.displayName||null,t!==null?t:md(e.type)||"Memo";case Fn:t=e._payload,e=e._init;try{return md(e(t))}catch{}}return null}function Wb(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return md(t);case 8:return t===Jf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function rr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function oy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ub(e){var t=oy(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Is(e){e._valueTracker||(e._valueTracker=Ub(e))}function sy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=oy(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ia(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function gd(e,t){var n=t.checked;return Se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ih(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=rr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ay(e,t){t=t.checked,t!=null&&Yf(e,"checked",t,!1)}function yd(e,t){ay(e,t);var n=rr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?vd(e,t.type,n):t.hasOwnProperty("defaultValue")&&vd(e,t.type,rr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Bh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function vd(e,t,n){(t!=="number"||Ia(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ko=Array.isArray;function ci(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+rr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function xd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(F(91));return Se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function _h(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(F(92));if(ko(n)){if(1<n.length)throw Error(F(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:rr(n)}}function ly(e,t){var n=rr(t.value),r=rr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Mh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function cy(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wd(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?cy(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Bs,uy=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Bs=Bs||document.createElement("div"),Bs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Bs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ho(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var To={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hb=["Webkit","ms","Moz","O"];Object.keys(To).forEach(function(e){Hb.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),To[t]=To[e]})});function dy(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||To.hasOwnProperty(e)&&To[e]?(""+t).trim():t+"px"}function fy(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=dy(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Vb=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bd(e,t){if(t){if(Vb[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(F(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(F(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(F(61))}if(t.style!=null&&typeof t.style!="object")throw Error(F(62))}}function Sd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kd=null;function ep(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cd=null,ui=null,di=null;function Wh(e){if(e=ws(e)){if(typeof Cd!="function")throw Error(F(280));var t=e.stateNode;t&&(t=Vl(t),Cd(e.stateNode,e.type,t))}}function py(e){ui?di?di.push(e):di=[e]:ui=e}function hy(){if(ui){var e=ui,t=di;if(di=ui=null,Wh(e),t)for(e=0;e<t.length;e++)Wh(t[e])}}function my(e,t){return e(t)}function gy(){}var Yc=!1;function yy(e,t,n){if(Yc)return e(t,n);Yc=!0;try{return my(e,t,n)}finally{Yc=!1,(ui!==null||di!==null)&&(gy(),hy())}}function Vo(e,t){var n=e.stateNode;if(n===null)return null;var r=Vl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(F(231,t,typeof n));return n}var Ad=!1;if(wn)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){Ad=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{Ad=!1}function Qb(e,t,n,r,i,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var Oo=!1,Ba=null,_a=!1,jd=null,qb={onError:function(e){Oo=!0,Ba=e}};function Gb(e,t,n,r,i,o,s,a,l){Oo=!1,Ba=null,Qb.apply(qb,arguments)}function Kb(e,t,n,r,i,o,s,a,l){if(Gb.apply(this,arguments),Oo){if(Oo){var c=Ba;Oo=!1,Ba=null}else throw Error(F(198));_a||(_a=!0,jd=c)}}function Mr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function vy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Uh(e){if(Mr(e)!==e)throw Error(F(188))}function Yb(e){var t=e.alternate;if(!t){if(t=Mr(e),t===null)throw Error(F(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Uh(i),e;if(o===r)return Uh(i),t;o=o.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?e:t}function xy(e){return e=Yb(e),e!==null?wy(e):null}function wy(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=wy(e);if(t!==null)return t;e=e.sibling}return null}var by=kt.unstable_scheduleCallback,Hh=kt.unstable_cancelCallback,Jb=kt.unstable_shouldYield,Xb=kt.unstable_requestPaint,Ee=kt.unstable_now,Zb=kt.unstable_getCurrentPriorityLevel,tp=kt.unstable_ImmediatePriority,Sy=kt.unstable_UserBlockingPriority,Ma=kt.unstable_NormalPriority,eS=kt.unstable_LowPriority,ky=kt.unstable_IdlePriority,Ml=null,sn=null;function tS(e){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(Ml,e,void 0,(e.current.flags&128)===128)}catch{}}var Vt=Math.clz32?Math.clz32:iS,nS=Math.log,rS=Math.LN2;function iS(e){return e>>>=0,e===0?32:31-(nS(e)/rS|0)|0}var _s=64,Ms=4194304;function Co(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wa(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Co(a):(o&=s,o!==0&&(r=Co(o)))}else s=n&~i,s!==0?r=Co(s):o!==0&&(r=Co(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Vt(t),i=1<<n,r|=e[n],t&=~i;return r}function oS(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sS(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Vt(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=oS(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Ed(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cy(){var e=_s;return _s<<=1,!(_s&4194240)&&(_s=64),e}function Jc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vs(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Vt(t),e[t]=n}function aS(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Vt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function np(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Vt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ae=0;function Ay(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var jy,rp,Ey,Ty,Oy,Td=!1,Ws=[],Vn=null,Qn=null,qn=null,Qo=new Map,qo=new Map,Bn=[],lS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vh(e,t){switch(e){case"focusin":case"focusout":Vn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":Qo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(t.pointerId)}}function fo(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ws(t),t!==null&&rp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function cS(e,t,n,r,i){switch(t){case"focusin":return Vn=fo(Vn,e,t,n,r,i),!0;case"dragenter":return Qn=fo(Qn,e,t,n,r,i),!0;case"mouseover":return qn=fo(qn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Qo.set(o,fo(Qo.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,qo.set(o,fo(qo.get(o)||null,e,t,n,r,i)),!0}return!1}function Ly(e){var t=br(e.target);if(t!==null){var n=Mr(t);if(n!==null){if(t=n.tag,t===13){if(t=vy(n),t!==null){e.blockedOn=t,Oy(e.priority,function(){Ey(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function la(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Od(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);kd=r,n.target.dispatchEvent(r),kd=null}else return t=ws(n),t!==null&&rp(t),e.blockedOn=n,!1;t.shift()}return!0}function Qh(e,t,n){la(e)&&n.delete(t)}function uS(){Td=!1,Vn!==null&&la(Vn)&&(Vn=null),Qn!==null&&la(Qn)&&(Qn=null),qn!==null&&la(qn)&&(qn=null),Qo.forEach(Qh),qo.forEach(Qh)}function po(e,t){e.blockedOn===t&&(e.blockedOn=null,Td||(Td=!0,kt.unstable_scheduleCallback(kt.unstable_NormalPriority,uS)))}function Go(e){function t(i){return po(i,e)}if(0<Ws.length){po(Ws[0],e);for(var n=1;n<Ws.length;n++){var r=Ws[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Vn!==null&&po(Vn,e),Qn!==null&&po(Qn,e),qn!==null&&po(qn,e),Qo.forEach(t),qo.forEach(t),n=0;n<Bn.length;n++)r=Bn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Bn.length&&(n=Bn[0],n.blockedOn===null);)Ly(n),n.blockedOn===null&&Bn.shift()}var fi=jn.ReactCurrentBatchConfig,Ua=!0;function dS(e,t,n,r){var i=ae,o=fi.transition;fi.transition=null;try{ae=1,ip(e,t,n,r)}finally{ae=i,fi.transition=o}}function fS(e,t,n,r){var i=ae,o=fi.transition;fi.transition=null;try{ae=4,ip(e,t,n,r)}finally{ae=i,fi.transition=o}}function ip(e,t,n,r){if(Ua){var i=Od(e,t,n,r);if(i===null)au(e,t,r,Ha,n),Vh(e,r);else if(cS(i,e,t,n,r))r.stopPropagation();else if(Vh(e,r),t&4&&-1<lS.indexOf(e)){for(;i!==null;){var o=ws(i);if(o!==null&&jy(o),o=Od(e,t,n,r),o===null&&au(e,t,r,Ha,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else au(e,t,r,null,n)}}var Ha=null;function Od(e,t,n,r){if(Ha=null,e=ep(r),e=br(e),e!==null)if(t=Mr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=vy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ha=e,null}function Py(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zb()){case tp:return 1;case Sy:return 4;case Ma:case eS:return 16;case ky:return 536870912;default:return 16}default:return 16}}var Wn=null,op=null,ca=null;function $y(){if(ca)return ca;var e,t=op,n=t.length,r,i="value"in Wn?Wn.value:Wn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return ca=i.slice(e,1<r?1-r:void 0)}function ua(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Us(){return!0}function qh(){return!1}function jt(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Us:qh,this.isPropagationStopped=qh,this}return Se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Us)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Us)},persist:function(){},isPersistent:Us}),t}var Ui={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sp=jt(Ui),xs=Se({},Ui,{view:0,detail:0}),pS=jt(xs),Xc,Zc,ho,Wl=Se({},xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ap,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ho&&(ho&&e.type==="mousemove"?(Xc=e.screenX-ho.screenX,Zc=e.screenY-ho.screenY):Zc=Xc=0,ho=e),Xc)},movementY:function(e){return"movementY"in e?e.movementY:Zc}}),Gh=jt(Wl),hS=Se({},Wl,{dataTransfer:0}),mS=jt(hS),gS=Se({},xs,{relatedTarget:0}),eu=jt(gS),yS=Se({},Ui,{animationName:0,elapsedTime:0,pseudoElement:0}),vS=jt(yS),xS=Se({},Ui,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wS=jt(xS),bS=Se({},Ui,{data:0}),Kh=jt(bS),SS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},CS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function AS(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=CS[e])?!!t[e]:!1}function ap(){return AS}var jS=Se({},xs,{key:function(e){if(e.key){var t=SS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ua(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ap,charCode:function(e){return e.type==="keypress"?ua(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ua(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ES=jt(jS),TS=Se({},Wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yh=jt(TS),OS=Se({},xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ap}),LS=jt(OS),PS=Se({},Ui,{propertyName:0,elapsedTime:0,pseudoElement:0}),$S=jt(PS),RS=Se({},Wl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zS=jt(RS),NS=[9,13,27,32],lp=wn&&"CompositionEvent"in window,Lo=null;wn&&"documentMode"in document&&(Lo=document.documentMode);var FS=wn&&"TextEvent"in window&&!Lo,Ry=wn&&(!lp||Lo&&8<Lo&&11>=Lo),Jh=String.fromCharCode(32),Xh=!1;function zy(e,t){switch(e){case"keyup":return NS.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ny(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xr=!1;function DS(e,t){switch(e){case"compositionend":return Ny(t);case"keypress":return t.which!==32?null:(Xh=!0,Jh);case"textInput":return e=t.data,e===Jh&&Xh?null:e;default:return null}}function IS(e,t){if(Xr)return e==="compositionend"||!lp&&zy(e,t)?(e=$y(),ca=op=Wn=null,Xr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ry&&t.locale!=="ko"?null:t.data;default:return null}}var BS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!BS[e.type]:t==="textarea"}function Fy(e,t,n,r){py(r),t=Va(t,"onChange"),0<t.length&&(n=new sp("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Po=null,Ko=null;function _S(e){qy(e,0)}function Ul(e){var t=ti(e);if(sy(t))return e}function MS(e,t){if(e==="change")return t}var Dy=!1;if(wn){var tu;if(wn){var nu="oninput"in document;if(!nu){var em=document.createElement("div");em.setAttribute("oninput","return;"),nu=typeof em.oninput=="function"}tu=nu}else tu=!1;Dy=tu&&(!document.documentMode||9<document.documentMode)}function tm(){Po&&(Po.detachEvent("onpropertychange",Iy),Ko=Po=null)}function Iy(e){if(e.propertyName==="value"&&Ul(Ko)){var t=[];Fy(t,Ko,e,ep(e)),yy(_S,t)}}function WS(e,t,n){e==="focusin"?(tm(),Po=t,Ko=n,Po.attachEvent("onpropertychange",Iy)):e==="focusout"&&tm()}function US(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ul(Ko)}function HS(e,t){if(e==="click")return Ul(t)}function VS(e,t){if(e==="input"||e==="change")return Ul(t)}function QS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Gt=typeof Object.is=="function"?Object.is:QS;function Yo(e,t){if(Gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!dd.call(t,i)||!Gt(e[i],t[i]))return!1}return!0}function nm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rm(e,t){var n=nm(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nm(n)}}function By(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?By(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _y(){for(var e=window,t=Ia();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ia(e.document)}return t}function cp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function qS(e){var t=_y(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&By(n.ownerDocument.documentElement,n)){if(r!==null&&cp(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=rm(n,o);var s=rm(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var GS=wn&&"documentMode"in document&&11>=document.documentMode,Zr=null,Ld=null,$o=null,Pd=!1;function im(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pd||Zr==null||Zr!==Ia(r)||(r=Zr,"selectionStart"in r&&cp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$o&&Yo($o,r)||($o=r,r=Va(Ld,"onSelect"),0<r.length&&(t=new sp("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zr)))}function Hs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ei={animationend:Hs("Animation","AnimationEnd"),animationiteration:Hs("Animation","AnimationIteration"),animationstart:Hs("Animation","AnimationStart"),transitionend:Hs("Transition","TransitionEnd")},ru={},My={};wn&&(My=document.createElement("div").style,"AnimationEvent"in window||(delete ei.animationend.animation,delete ei.animationiteration.animation,delete ei.animationstart.animation),"TransitionEvent"in window||delete ei.transitionend.transition);function Hl(e){if(ru[e])return ru[e];if(!ei[e])return e;var t=ei[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in My)return ru[e]=t[n];return e}var Wy=Hl("animationend"),Uy=Hl("animationiteration"),Hy=Hl("animationstart"),Vy=Hl("transitionend"),Qy=new Map,om="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(e,t){Qy.set(e,t),_r(t,[e])}for(var iu=0;iu<om.length;iu++){var ou=om[iu],KS=ou.toLowerCase(),YS=ou[0].toUpperCase()+ou.slice(1);fr(KS,"on"+YS)}fr(Wy,"onAnimationEnd");fr(Uy,"onAnimationIteration");fr(Hy,"onAnimationStart");fr("dblclick","onDoubleClick");fr("focusin","onFocus");fr("focusout","onBlur");fr(Vy,"onTransitionEnd");Si("onMouseEnter",["mouseout","mouseover"]);Si("onMouseLeave",["mouseout","mouseover"]);Si("onPointerEnter",["pointerout","pointerover"]);Si("onPointerLeave",["pointerout","pointerover"]);_r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_r("onBeforeInput",["compositionend","keypress","textInput","paste"]);_r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),JS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ao));function sm(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Kb(r,t,void 0,e),e.currentTarget=null}function qy(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;sm(i,a,c),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;sm(i,a,c),o=l}}}if(_a)throw e=jd,_a=!1,jd=null,e}function pe(e,t){var n=t[Fd];n===void 0&&(n=t[Fd]=new Set);var r=e+"__bubble";n.has(r)||(Gy(t,e,2,!1),n.add(r))}function su(e,t,n){var r=0;t&&(r|=4),Gy(n,e,r,t)}var Vs="_reactListening"+Math.random().toString(36).slice(2);function Jo(e){if(!e[Vs]){e[Vs]=!0,ty.forEach(function(n){n!=="selectionchange"&&(JS.has(n)||su(n,!1,e),su(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vs]||(t[Vs]=!0,su("selectionchange",!1,t))}}function Gy(e,t,n,r){switch(Py(t)){case 1:var i=dS;break;case 4:i=fS;break;default:i=ip}n=i.bind(null,t,n,e),i=void 0,!Ad||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function au(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=br(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}yy(function(){var c=o,d=ep(n),f=[];e:{var p=Qy.get(e);if(p!==void 0){var y=sp,v=e;switch(e){case"keypress":if(ua(n)===0)break e;case"keydown":case"keyup":y=ES;break;case"focusin":v="focus",y=eu;break;case"focusout":v="blur",y=eu;break;case"beforeblur":case"afterblur":y=eu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Gh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=mS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=LS;break;case Wy:case Uy:case Hy:y=vS;break;case Vy:y=$S;break;case"scroll":y=pS;break;case"wheel":y=zS;break;case"copy":case"cut":case"paste":y=wS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Yh}var x=(t&4)!==0,k=!x&&e==="scroll",m=x?p!==null?p+"Capture":null:p;x=[];for(var h=c,w;h!==null;){w=h;var C=w.stateNode;if(w.tag===5&&C!==null&&(w=C,m!==null&&(C=Vo(h,m),C!=null&&x.push(Xo(h,C,w)))),k)break;h=h.return}0<x.length&&(p=new y(p,v,null,n,d),f.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&n!==kd&&(v=n.relatedTarget||n.fromElement)&&(br(v)||v[bn]))break e;if((y||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=c,v=v?br(v):null,v!==null&&(k=Mr(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=c),y!==v)){if(x=Gh,C="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=Yh,C="onPointerLeave",m="onPointerEnter",h="pointer"),k=y==null?p:ti(y),w=v==null?p:ti(v),p=new x(C,h+"leave",y,n,d),p.target=k,p.relatedTarget=w,C=null,br(d)===c&&(x=new x(m,h+"enter",v,n,d),x.target=w,x.relatedTarget=k,C=x),k=C,y&&v)t:{for(x=y,m=v,h=0,w=x;w;w=Vr(w))h++;for(w=0,C=m;C;C=Vr(C))w++;for(;0<h-w;)x=Vr(x),h--;for(;0<w-h;)m=Vr(m),w--;for(;h--;){if(x===m||m!==null&&x===m.alternate)break t;x=Vr(x),m=Vr(m)}x=null}else x=null;y!==null&&am(f,p,y,x,!1),v!==null&&k!==null&&am(f,k,v,x,!0)}}e:{if(p=c?ti(c):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var A=MS;else if(Zh(p))if(Dy)A=VS;else{A=US;var b=WS}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(A=HS);if(A&&(A=A(e,c))){Fy(f,A,n,d);break e}b&&b(e,p,c),e==="focusout"&&(b=p._wrapperState)&&b.controlled&&p.type==="number"&&vd(p,"number",p.value)}switch(b=c?ti(c):window,e){case"focusin":(Zh(b)||b.contentEditable==="true")&&(Zr=b,Ld=c,$o=null);break;case"focusout":$o=Ld=Zr=null;break;case"mousedown":Pd=!0;break;case"contextmenu":case"mouseup":case"dragend":Pd=!1,im(f,n,d);break;case"selectionchange":if(GS)break;case"keydown":case"keyup":im(f,n,d)}var j;if(lp)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Xr?zy(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Ry&&n.locale!=="ko"&&(Xr||E!=="onCompositionStart"?E==="onCompositionEnd"&&Xr&&(j=$y()):(Wn=d,op="value"in Wn?Wn.value:Wn.textContent,Xr=!0)),b=Va(c,E),0<b.length&&(E=new Kh(E,e,null,n,d),f.push({event:E,listeners:b}),j?E.data=j:(j=Ny(n),j!==null&&(E.data=j)))),(j=FS?DS(e,n):IS(e,n))&&(c=Va(c,"onBeforeInput"),0<c.length&&(d=new Kh("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=j))}qy(f,t)})}function Xo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Va(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Vo(e,n),o!=null&&r.unshift(Xo(e,o,i)),o=Vo(e,t),o!=null&&r.push(Xo(e,o,i))),e=e.return}return r}function Vr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function am(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Vo(n,o),l!=null&&s.unshift(Xo(n,l,a))):i||(l=Vo(n,o),l!=null&&s.push(Xo(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var XS=/\r\n?/g,ZS=/\u0000|\uFFFD/g;function lm(e){return(typeof e=="string"?e:""+e).replace(XS,`
`).replace(ZS,"")}function Qs(e,t,n){if(t=lm(t),lm(e)!==t&&n)throw Error(F(425))}function Qa(){}var $d=null,Rd=null;function zd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Nd=typeof setTimeout=="function"?setTimeout:void 0,ek=typeof clearTimeout=="function"?clearTimeout:void 0,cm=typeof Promise=="function"?Promise:void 0,tk=typeof queueMicrotask=="function"?queueMicrotask:typeof cm<"u"?function(e){return cm.resolve(null).then(e).catch(nk)}:Nd;function nk(e){setTimeout(function(){throw e})}function lu(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Go(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Go(t)}function Gn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function um(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Hi=Math.random().toString(36).slice(2),nn="__reactFiber$"+Hi,Zo="__reactProps$"+Hi,bn="__reactContainer$"+Hi,Fd="__reactEvents$"+Hi,rk="__reactListeners$"+Hi,ik="__reactHandles$"+Hi;function br(e){var t=e[nn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[bn]||n[nn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=um(e);e!==null;){if(n=e[nn])return n;e=um(e)}return t}e=n,n=e.parentNode}return null}function ws(e){return e=e[nn]||e[bn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ti(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(F(33))}function Vl(e){return e[Zo]||null}var Dd=[],ni=-1;function pr(e){return{current:e}}function me(e){0>ni||(e.current=Dd[ni],Dd[ni]=null,ni--)}function de(e,t){ni++,Dd[ni]=e.current,e.current=t}var ir={},tt=pr(ir),gt=pr(!1),Lr=ir;function ki(e,t){var n=e.type.contextTypes;if(!n)return ir;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function yt(e){return e=e.childContextTypes,e!=null}function qa(){me(gt),me(tt)}function dm(e,t,n){if(tt.current!==ir)throw Error(F(168));de(tt,t),de(gt,n)}function Ky(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(F(108,Wb(e)||"Unknown",i));return Se({},n,r)}function Ga(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ir,Lr=tt.current,de(tt,e),de(gt,gt.current),!0}function fm(e,t,n){var r=e.stateNode;if(!r)throw Error(F(169));n?(e=Ky(e,t,Lr),r.__reactInternalMemoizedMergedChildContext=e,me(gt),me(tt),de(tt,e)):me(gt),de(gt,n)}var mn=null,Ql=!1,cu=!1;function Yy(e){mn===null?mn=[e]:mn.push(e)}function ok(e){Ql=!0,Yy(e)}function hr(){if(!cu&&mn!==null){cu=!0;var e=0,t=ae;try{var n=mn;for(ae=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}mn=null,Ql=!1}catch(i){throw mn!==null&&(mn=mn.slice(e+1)),by(tp,hr),i}finally{ae=t,cu=!1}}return null}var ri=[],ii=0,Ka=null,Ya=0,Lt=[],Pt=0,Pr=null,gn=1,yn="";function vr(e,t){ri[ii++]=Ya,ri[ii++]=Ka,Ka=e,Ya=t}function Jy(e,t,n){Lt[Pt++]=gn,Lt[Pt++]=yn,Lt[Pt++]=Pr,Pr=e;var r=gn;e=yn;var i=32-Vt(r)-1;r&=~(1<<i),n+=1;var o=32-Vt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,gn=1<<32-Vt(t)+i|n<<i|r,yn=o+e}else gn=1<<o|n<<i|r,yn=e}function up(e){e.return!==null&&(vr(e,1),Jy(e,1,0))}function dp(e){for(;e===Ka;)Ka=ri[--ii],ri[ii]=null,Ya=ri[--ii],ri[ii]=null;for(;e===Pr;)Pr=Lt[--Pt],Lt[Pt]=null,yn=Lt[--Pt],Lt[Pt]=null,gn=Lt[--Pt],Lt[Pt]=null}var bt=null,wt=null,ve=!1,Ut=null;function Xy(e,t){var n=$t(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function pm(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,bt=e,wt=Gn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,bt=e,wt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pr!==null?{id:gn,overflow:yn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=$t(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,bt=e,wt=null,!0):!1;default:return!1}}function Id(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bd(e){if(ve){var t=wt;if(t){var n=t;if(!pm(e,t)){if(Id(e))throw Error(F(418));t=Gn(n.nextSibling);var r=bt;t&&pm(e,t)?Xy(r,n):(e.flags=e.flags&-4097|2,ve=!1,bt=e)}}else{if(Id(e))throw Error(F(418));e.flags=e.flags&-4097|2,ve=!1,bt=e}}}function hm(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;bt=e}function qs(e){if(e!==bt)return!1;if(!ve)return hm(e),ve=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!zd(e.type,e.memoizedProps)),t&&(t=wt)){if(Id(e))throw Zy(),Error(F(418));for(;t;)Xy(e,t),t=Gn(t.nextSibling)}if(hm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(F(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){wt=Gn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}wt=null}}else wt=bt?Gn(e.stateNode.nextSibling):null;return!0}function Zy(){for(var e=wt;e;)e=Gn(e.nextSibling)}function Ci(){wt=bt=null,ve=!1}function fp(e){Ut===null?Ut=[e]:Ut.push(e)}var sk=jn.ReactCurrentBatchConfig;function Mt(e,t){if(e&&e.defaultProps){t=Se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ja=pr(null),Xa=null,oi=null,pp=null;function hp(){pp=oi=Xa=null}function mp(e){var t=Ja.current;me(Ja),e._currentValue=t}function _d(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function pi(e,t){Xa=e,pp=oi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(mt=!0),e.firstContext=null)}function Nt(e){var t=e._currentValue;if(pp!==e)if(e={context:e,memoizedValue:t,next:null},oi===null){if(Xa===null)throw Error(F(308));oi=e,Xa.dependencies={lanes:0,firstContext:e}}else oi=oi.next=e;return t}var Sr=null;function gp(e){Sr===null?Sr=[e]:Sr.push(e)}function ev(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,gp(t)):(n.next=i.next,i.next=n),t.interleaved=n,Sn(e,r)}function Sn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Dn=!1;function yp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tv(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function vn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Kn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Sn(e,n)}return i=r.interleaved,i===null?(t.next=t,gp(r)):(t.next=i.next,i.next=t),r.interleaved=t,Sn(e,n)}function da(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,np(e,n)}}function mm(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Za(e,t,n,r){var i=e.updateQueue;Dn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,d=c=l=null,a=o;do{var p=a.lane,y=a.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,x=a;switch(p=t,y=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){f=v.call(y,f,p);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,p=typeof v=="function"?v.call(y,f,p):v,p==null)break e;f=Se({},f,p);break e;case 2:Dn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=y,l=f):d=d.next=y,s|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Rr|=s,e.lanes=s,e.memoizedState=f}}function gm(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var nv=new ey.Component().refs;function Md(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ql={isMounted:function(e){return(e=e._reactInternals)?Mr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=st(),i=Jn(e),o=vn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Kn(e,o,i),t!==null&&(Qt(t,e,i,r),da(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=st(),i=Jn(e),o=vn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Kn(e,o,i),t!==null&&(Qt(t,e,i,r),da(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=st(),r=Jn(e),i=vn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Kn(e,i,r),t!==null&&(Qt(t,e,r,n),da(t,e,r))}};function ym(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Yo(n,r)||!Yo(i,o):!0}function rv(e,t,n){var r=!1,i=ir,o=t.contextType;return typeof o=="object"&&o!==null?o=Nt(o):(i=yt(t)?Lr:tt.current,r=t.contextTypes,o=(r=r!=null)?ki(e,i):ir),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ql,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function vm(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ql.enqueueReplaceState(t,t.state,null)}function Wd(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=nv,yp(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Nt(o):(o=yt(t)?Lr:tt.current,i.context=ki(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Md(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ql.enqueueReplaceState(i,i.state,null),Za(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function mo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===nv&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,e))}return e}function Gs(e,t){throw e=Object.prototype.toString.call(t),Error(F(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xm(e){var t=e._init;return t(e._payload)}function iv(e){function t(m,h){if(e){var w=m.deletions;w===null?(m.deletions=[h],m.flags|=16):w.push(h)}}function n(m,h){if(!e)return null;for(;h!==null;)t(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=Xn(m,h),m.index=0,m.sibling=null,m}function o(m,h,w){return m.index=w,e?(w=m.alternate,w!==null?(w=w.index,w<h?(m.flags|=2,h):w):(m.flags|=2,h)):(m.flags|=1048576,h)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,h,w,C){return h===null||h.tag!==6?(h=gu(w,m.mode,C),h.return=m,h):(h=i(h,w),h.return=m,h)}function l(m,h,w,C){var A=w.type;return A===Jr?d(m,h,w.props.children,C,w.key):h!==null&&(h.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Fn&&xm(A)===h.type)?(C=i(h,w.props),C.ref=mo(m,h,w),C.return=m,C):(C=ya(w.type,w.key,w.props,null,m.mode,C),C.ref=mo(m,h,w),C.return=m,C)}function c(m,h,w,C){return h===null||h.tag!==4||h.stateNode.containerInfo!==w.containerInfo||h.stateNode.implementation!==w.implementation?(h=yu(w,m.mode,C),h.return=m,h):(h=i(h,w.children||[]),h.return=m,h)}function d(m,h,w,C,A){return h===null||h.tag!==7?(h=jr(w,m.mode,C,A),h.return=m,h):(h=i(h,w),h.return=m,h)}function f(m,h,w){if(typeof h=="string"&&h!==""||typeof h=="number")return h=gu(""+h,m.mode,w),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ds:return w=ya(h.type,h.key,h.props,null,m.mode,w),w.ref=mo(m,null,h),w.return=m,w;case Yr:return h=yu(h,m.mode,w),h.return=m,h;case Fn:var C=h._init;return f(m,C(h._payload),w)}if(ko(h)||co(h))return h=jr(h,m.mode,w,null),h.return=m,h;Gs(m,h)}return null}function p(m,h,w,C){var A=h!==null?h.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return A!==null?null:a(m,h,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ds:return w.key===A?l(m,h,w,C):null;case Yr:return w.key===A?c(m,h,w,C):null;case Fn:return A=w._init,p(m,h,A(w._payload),C)}if(ko(w)||co(w))return A!==null?null:d(m,h,w,C,null);Gs(m,w)}return null}function y(m,h,w,C,A){if(typeof C=="string"&&C!==""||typeof C=="number")return m=m.get(w)||null,a(h,m,""+C,A);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Ds:return m=m.get(C.key===null?w:C.key)||null,l(h,m,C,A);case Yr:return m=m.get(C.key===null?w:C.key)||null,c(h,m,C,A);case Fn:var b=C._init;return y(m,h,w,b(C._payload),A)}if(ko(C)||co(C))return m=m.get(w)||null,d(h,m,C,A,null);Gs(h,C)}return null}function v(m,h,w,C){for(var A=null,b=null,j=h,E=h=0,T=null;j!==null&&E<w.length;E++){j.index>E?(T=j,j=null):T=j.sibling;var O=p(m,j,w[E],C);if(O===null){j===null&&(j=T);break}e&&j&&O.alternate===null&&t(m,j),h=o(O,h,E),b===null?A=O:b.sibling=O,b=O,j=T}if(E===w.length)return n(m,j),ve&&vr(m,E),A;if(j===null){for(;E<w.length;E++)j=f(m,w[E],C),j!==null&&(h=o(j,h,E),b===null?A=j:b.sibling=j,b=j);return ve&&vr(m,E),A}for(j=r(m,j);E<w.length;E++)T=y(j,m,E,w[E],C),T!==null&&(e&&T.alternate!==null&&j.delete(T.key===null?E:T.key),h=o(T,h,E),b===null?A=T:b.sibling=T,b=T);return e&&j.forEach(function(L){return t(m,L)}),ve&&vr(m,E),A}function x(m,h,w,C){var A=co(w);if(typeof A!="function")throw Error(F(150));if(w=A.call(w),w==null)throw Error(F(151));for(var b=A=null,j=h,E=h=0,T=null,O=w.next();j!==null&&!O.done;E++,O=w.next()){j.index>E?(T=j,j=null):T=j.sibling;var L=p(m,j,O.value,C);if(L===null){j===null&&(j=T);break}e&&j&&L.alternate===null&&t(m,j),h=o(L,h,E),b===null?A=L:b.sibling=L,b=L,j=T}if(O.done)return n(m,j),ve&&vr(m,E),A;if(j===null){for(;!O.done;E++,O=w.next())O=f(m,O.value,C),O!==null&&(h=o(O,h,E),b===null?A=O:b.sibling=O,b=O);return ve&&vr(m,E),A}for(j=r(m,j);!O.done;E++,O=w.next())O=y(j,m,E,O.value,C),O!==null&&(e&&O.alternate!==null&&j.delete(O.key===null?E:O.key),h=o(O,h,E),b===null?A=O:b.sibling=O,b=O);return e&&j.forEach(function(P){return t(m,P)}),ve&&vr(m,E),A}function k(m,h,w,C){if(typeof w=="object"&&w!==null&&w.type===Jr&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Ds:e:{for(var A=w.key,b=h;b!==null;){if(b.key===A){if(A=w.type,A===Jr){if(b.tag===7){n(m,b.sibling),h=i(b,w.props.children),h.return=m,m=h;break e}}else if(b.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Fn&&xm(A)===b.type){n(m,b.sibling),h=i(b,w.props),h.ref=mo(m,b,w),h.return=m,m=h;break e}n(m,b);break}else t(m,b);b=b.sibling}w.type===Jr?(h=jr(w.props.children,m.mode,C,w.key),h.return=m,m=h):(C=ya(w.type,w.key,w.props,null,m.mode,C),C.ref=mo(m,h,w),C.return=m,m=C)}return s(m);case Yr:e:{for(b=w.key;h!==null;){if(h.key===b)if(h.tag===4&&h.stateNode.containerInfo===w.containerInfo&&h.stateNode.implementation===w.implementation){n(m,h.sibling),h=i(h,w.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else t(m,h);h=h.sibling}h=yu(w,m.mode,C),h.return=m,m=h}return s(m);case Fn:return b=w._init,k(m,h,b(w._payload),C)}if(ko(w))return v(m,h,w,C);if(co(w))return x(m,h,w,C);Gs(m,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,h!==null&&h.tag===6?(n(m,h.sibling),h=i(h,w),h.return=m,m=h):(n(m,h),h=gu(w,m.mode,C),h.return=m,m=h),s(m)):n(m,h)}return k}var Ai=iv(!0),ov=iv(!1),bs={},an=pr(bs),es=pr(bs),ts=pr(bs);function kr(e){if(e===bs)throw Error(F(174));return e}function vp(e,t){switch(de(ts,t),de(es,e),de(an,bs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wd(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wd(t,e)}me(an),de(an,t)}function ji(){me(an),me(es),me(ts)}function sv(e){kr(ts.current);var t=kr(an.current),n=wd(t,e.type);t!==n&&(de(es,e),de(an,n))}function xp(e){es.current===e&&(me(an),me(es))}var we=pr(0);function el(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var uu=[];function wp(){for(var e=0;e<uu.length;e++)uu[e]._workInProgressVersionPrimary=null;uu.length=0}var fa=jn.ReactCurrentDispatcher,du=jn.ReactCurrentBatchConfig,$r=0,be=null,ze=null,Ie=null,tl=!1,Ro=!1,ns=0,ak=0;function Ye(){throw Error(F(321))}function bp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Gt(e[n],t[n]))return!1;return!0}function Sp(e,t,n,r,i,o){if($r=o,be=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fa.current=e===null||e.memoizedState===null?dk:fk,e=n(r,i),Ro){o=0;do{if(Ro=!1,ns=0,25<=o)throw Error(F(301));o+=1,Ie=ze=null,t.updateQueue=null,fa.current=pk,e=n(r,i)}while(Ro)}if(fa.current=nl,t=ze!==null&&ze.next!==null,$r=0,Ie=ze=be=null,tl=!1,t)throw Error(F(300));return e}function kp(){var e=ns!==0;return ns=0,e}function en(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?be.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function Ft(){if(ze===null){var e=be.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=Ie===null?be.memoizedState:Ie.next;if(t!==null)Ie=t,ze=e;else{if(e===null)throw Error(F(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Ie===null?be.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function rs(e,t){return typeof t=="function"?t(e):t}function fu(e){var t=Ft(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=ze,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,c=o;do{var d=c.lane;if(($r&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,be.lanes|=d,Rr|=d}c=c.next}while(c!==null&&c!==o);l===null?s=r:l.next=a,Gt(r,t.memoizedState)||(mt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,be.lanes|=o,Rr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function pu(e){var t=Ft(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Gt(o,t.memoizedState)||(mt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function av(){}function lv(e,t){var n=be,r=Ft(),i=t(),o=!Gt(r.memoizedState,i);if(o&&(r.memoizedState=i,mt=!0),r=r.queue,Cp(dv.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ie!==null&&Ie.memoizedState.tag&1){if(n.flags|=2048,is(9,uv.bind(null,n,r,i,t),void 0,null),Me===null)throw Error(F(349));$r&30||cv(n,t,i)}return i}function cv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=be.updateQueue,t===null?(t={lastEffect:null,stores:null},be.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function uv(e,t,n,r){t.value=n,t.getSnapshot=r,fv(t)&&pv(e)}function dv(e,t,n){return n(function(){fv(t)&&pv(e)})}function fv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Gt(e,n)}catch{return!0}}function pv(e){var t=Sn(e,1);t!==null&&Qt(t,e,1,-1)}function wm(e){var t=en();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:e},t.queue=e,e=e.dispatch=uk.bind(null,be,e),[t.memoizedState,e]}function is(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=be.updateQueue,t===null?(t={lastEffect:null,stores:null},be.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function hv(){return Ft().memoizedState}function pa(e,t,n,r){var i=en();be.flags|=e,i.memoizedState=is(1|t,n,void 0,r===void 0?null:r)}function Gl(e,t,n,r){var i=Ft();r=r===void 0?null:r;var o=void 0;if(ze!==null){var s=ze.memoizedState;if(o=s.destroy,r!==null&&bp(r,s.deps)){i.memoizedState=is(t,n,o,r);return}}be.flags|=e,i.memoizedState=is(1|t,n,o,r)}function bm(e,t){return pa(8390656,8,e,t)}function Cp(e,t){return Gl(2048,8,e,t)}function mv(e,t){return Gl(4,2,e,t)}function gv(e,t){return Gl(4,4,e,t)}function yv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vv(e,t,n){return n=n!=null?n.concat([e]):null,Gl(4,4,yv.bind(null,t,e),n)}function Ap(){}function xv(e,t){var n=Ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&bp(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function wv(e,t){var n=Ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&bp(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function bv(e,t,n){return $r&21?(Gt(n,t)||(n=Cy(),be.lanes|=n,Rr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,mt=!0),e.memoizedState=n)}function lk(e,t){var n=ae;ae=n!==0&&4>n?n:4,e(!0);var r=du.transition;du.transition={};try{e(!1),t()}finally{ae=n,du.transition=r}}function Sv(){return Ft().memoizedState}function ck(e,t,n){var r=Jn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},kv(e))Cv(t,n);else if(n=ev(e,t,n,r),n!==null){var i=st();Qt(n,e,r,i),Av(n,t,r)}}function uk(e,t,n){var r=Jn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(kv(e))Cv(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Gt(a,s)){var l=t.interleaved;l===null?(i.next=i,gp(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=ev(e,t,i,r),n!==null&&(i=st(),Qt(n,e,r,i),Av(n,t,r))}}function kv(e){var t=e.alternate;return e===be||t!==null&&t===be}function Cv(e,t){Ro=tl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Av(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,np(e,n)}}var nl={readContext:Nt,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},dk={readContext:Nt,useCallback:function(e,t){return en().memoizedState=[e,t===void 0?null:t],e},useContext:Nt,useEffect:bm,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,pa(4194308,4,yv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return pa(4194308,4,e,t)},useInsertionEffect:function(e,t){return pa(4,2,e,t)},useMemo:function(e,t){var n=en();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=en();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ck.bind(null,be,e),[r.memoizedState,e]},useRef:function(e){var t=en();return e={current:e},t.memoizedState=e},useState:wm,useDebugValue:Ap,useDeferredValue:function(e){return en().memoizedState=e},useTransition:function(){var e=wm(!1),t=e[0];return e=lk.bind(null,e[1]),en().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=be,i=en();if(ve){if(n===void 0)throw Error(F(407));n=n()}else{if(n=t(),Me===null)throw Error(F(349));$r&30||cv(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,bm(dv.bind(null,r,o,e),[e]),r.flags|=2048,is(9,uv.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=en(),t=Me.identifierPrefix;if(ve){var n=yn,r=gn;n=(r&~(1<<32-Vt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ns++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ak++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},fk={readContext:Nt,useCallback:xv,useContext:Nt,useEffect:Cp,useImperativeHandle:vv,useInsertionEffect:mv,useLayoutEffect:gv,useMemo:wv,useReducer:fu,useRef:hv,useState:function(){return fu(rs)},useDebugValue:Ap,useDeferredValue:function(e){var t=Ft();return bv(t,ze.memoizedState,e)},useTransition:function(){var e=fu(rs)[0],t=Ft().memoizedState;return[e,t]},useMutableSource:av,useSyncExternalStore:lv,useId:Sv,unstable_isNewReconciler:!1},pk={readContext:Nt,useCallback:xv,useContext:Nt,useEffect:Cp,useImperativeHandle:vv,useInsertionEffect:mv,useLayoutEffect:gv,useMemo:wv,useReducer:pu,useRef:hv,useState:function(){return pu(rs)},useDebugValue:Ap,useDeferredValue:function(e){var t=Ft();return ze===null?t.memoizedState=e:bv(t,ze.memoizedState,e)},useTransition:function(){var e=pu(rs)[0],t=Ft().memoizedState;return[e,t]},useMutableSource:av,useSyncExternalStore:lv,useId:Sv,unstable_isNewReconciler:!1};function Ei(e,t){try{var n="",r=t;do n+=Mb(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function hu(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ud(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var hk=typeof WeakMap=="function"?WeakMap:Map;function jv(e,t,n){n=vn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){il||(il=!0,Zd=r),Ud(e,t)},n}function Ev(e,t,n){n=vn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ud(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ud(e,t),typeof r!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Sm(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new hk;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Tk.bind(null,e,t,n),t.then(e,e))}function km(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Cm(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=vn(-1,1),t.tag=2,Kn(n,t,1))),n.lanes|=1),e)}var mk=jn.ReactCurrentOwner,mt=!1;function ot(e,t,n,r){t.child=e===null?ov(t,null,n,r):Ai(t,e.child,n,r)}function Am(e,t,n,r,i){n=n.render;var o=t.ref;return pi(t,i),r=Sp(e,t,n,r,o,i),n=kp(),e!==null&&!mt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kn(e,t,i)):(ve&&n&&up(t),t.flags|=1,ot(e,t,r,i),t.child)}function jm(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Rp(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Tv(e,t,o,r,i)):(e=ya(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Yo,n(s,r)&&e.ref===t.ref)return kn(e,t,i)}return t.flags|=1,e=Xn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Tv(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Yo(o,r)&&e.ref===t.ref)if(mt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(mt=!0);else return t.lanes=e.lanes,kn(e,t,i)}return Hd(e,t,n,r,i)}function Ov(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(ai,xt),xt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,de(ai,xt),xt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,de(ai,xt),xt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,de(ai,xt),xt|=r;return ot(e,t,i,n),t.child}function Lv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Hd(e,t,n,r,i){var o=yt(n)?Lr:tt.current;return o=ki(t,o),pi(t,i),n=Sp(e,t,n,r,o,i),r=kp(),e!==null&&!mt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kn(e,t,i)):(ve&&r&&up(t),t.flags|=1,ot(e,t,n,i),t.child)}function Em(e,t,n,r,i){if(yt(n)){var o=!0;Ga(t)}else o=!1;if(pi(t,i),t.stateNode===null)ha(e,t),rv(t,n,r),Wd(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Nt(c):(c=yt(n)?Lr:tt.current,c=ki(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&vm(t,s,r,c),Dn=!1;var p=t.memoizedState;s.state=p,Za(t,r,s,i),l=t.memoizedState,a!==r||p!==l||gt.current||Dn?(typeof d=="function"&&(Md(t,n,d,r),l=t.memoizedState),(a=Dn||ym(t,n,a,r,p,l,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,tv(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Mt(t.type,a),s.props=c,f=t.pendingProps,p=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Nt(l):(l=yt(n)?Lr:tt.current,l=ki(t,l));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||p!==l)&&vm(t,s,r,l),Dn=!1,p=t.memoizedState,s.state=p,Za(t,r,s,i);var v=t.memoizedState;a!==f||p!==v||gt.current||Dn?(typeof y=="function"&&(Md(t,n,y,r),v=t.memoizedState),(c=Dn||ym(t,n,c,r,p,v,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Vd(e,t,n,r,o,i)}function Vd(e,t,n,r,i,o){Lv(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&fm(t,n,!1),kn(e,t,o);r=t.stateNode,mk.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Ai(t,e.child,null,o),t.child=Ai(t,null,a,o)):ot(e,t,a,o),t.memoizedState=r.state,i&&fm(t,n,!0),t.child}function Pv(e){var t=e.stateNode;t.pendingContext?dm(e,t.pendingContext,t.pendingContext!==t.context):t.context&&dm(e,t.context,!1),vp(e,t.containerInfo)}function Tm(e,t,n,r,i){return Ci(),fp(i),t.flags|=256,ot(e,t,n,r),t.child}var Qd={dehydrated:null,treeContext:null,retryLane:0};function qd(e){return{baseLanes:e,cachePool:null,transitions:null}}function $v(e,t,n){var r=t.pendingProps,i=we.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),de(we,i&1),e===null)return Bd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Jl(s,r,0,null),e=jr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=qd(n),t.memoizedState=Qd,e):jp(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return gk(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Xn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Xn(a,o):(o=jr(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?qd(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Qd,r}return o=e.child,e=o.sibling,r=Xn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function jp(e,t){return t=Jl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ks(e,t,n,r){return r!==null&&fp(r),Ai(t,e.child,null,n),e=jp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gk(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=hu(Error(F(422))),Ks(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Jl({mode:"visible",children:r.children},i,0,null),o=jr(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Ai(t,e.child,null,s),t.child.memoizedState=qd(s),t.memoizedState=Qd,o);if(!(t.mode&1))return Ks(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(F(419)),r=hu(o,r,void 0),Ks(e,t,s,r)}if(a=(s&e.childLanes)!==0,mt||a){if(r=Me,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Sn(e,i),Qt(r,e,i,-1))}return $p(),r=hu(Error(F(421))),Ks(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Ok.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,wt=Gn(i.nextSibling),bt=t,ve=!0,Ut=null,e!==null&&(Lt[Pt++]=gn,Lt[Pt++]=yn,Lt[Pt++]=Pr,gn=e.id,yn=e.overflow,Pr=t),t=jp(t,r.children),t.flags|=4096,t)}function Om(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),_d(e.return,t,n)}function mu(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Rv(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ot(e,t,r.children,n),r=we.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Om(e,n,t);else if(e.tag===19)Om(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(de(we,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&el(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),mu(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&el(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}mu(t,!0,n,null,o);break;case"together":mu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ha(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function kn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(F(153));if(t.child!==null){for(e=t.child,n=Xn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function yk(e,t,n){switch(t.tag){case 3:Pv(t),Ci();break;case 5:sv(t);break;case 1:yt(t.type)&&Ga(t);break;case 4:vp(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;de(Ja,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(de(we,we.current&1),t.flags|=128,null):n&t.child.childLanes?$v(e,t,n):(de(we,we.current&1),e=kn(e,t,n),e!==null?e.sibling:null);de(we,we.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Rv(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(we,we.current),r)break;return null;case 22:case 23:return t.lanes=0,Ov(e,t,n)}return kn(e,t,n)}var zv,Gd,Nv,Fv;zv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gd=function(){};Nv=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,kr(an.current);var o=null;switch(n){case"input":i=gd(e,i),r=gd(e,r),o=[];break;case"select":i=Se({},i,{value:void 0}),r=Se({},r,{value:void 0}),o=[];break;case"textarea":i=xd(e,i),r=xd(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qa)}bd(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Uo.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Uo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&pe("scroll",e),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Fv=function(e,t,n,r){n!==r&&(t.flags|=4)};function go(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vk(e,t,n){var r=t.pendingProps;switch(dp(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(t),null;case 1:return yt(t.type)&&qa(),Je(t),null;case 3:return r=t.stateNode,ji(),me(gt),me(tt),wp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(qs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ut!==null&&(nf(Ut),Ut=null))),Gd(e,t),Je(t),null;case 5:xp(t);var i=kr(ts.current);if(n=t.type,e!==null&&t.stateNode!=null)Nv(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(F(166));return Je(t),null}if(e=kr(an.current),qs(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[nn]=t,r[Zo]=o,e=(t.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(i=0;i<Ao.length;i++)pe(Ao[i],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":Ih(r,o),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},pe("invalid",r);break;case"textarea":_h(r,o),pe("invalid",r)}bd(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Qs(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Qs(r.textContent,a,e),i=["children",""+a]):Uo.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&pe("scroll",r)}switch(n){case"input":Is(r),Bh(r,o,!0);break;case"textarea":Is(r),Mh(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Qa)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=cy(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[nn]=t,e[Zo]=r,zv(e,t,!1,!1),t.stateNode=e;e:{switch(s=Sd(n,r),n){case"dialog":pe("cancel",e),pe("close",e),i=r;break;case"iframe":case"object":case"embed":pe("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ao.length;i++)pe(Ao[i],e);i=r;break;case"source":pe("error",e),i=r;break;case"img":case"image":case"link":pe("error",e),pe("load",e),i=r;break;case"details":pe("toggle",e),i=r;break;case"input":Ih(e,r),i=gd(e,r),pe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Se({},r,{value:void 0}),pe("invalid",e);break;case"textarea":_h(e,r),i=xd(e,r),pe("invalid",e);break;default:i=r}bd(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?fy(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&uy(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ho(e,l):typeof l=="number"&&Ho(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Uo.hasOwnProperty(o)?l!=null&&o==="onScroll"&&pe("scroll",e):l!=null&&Yf(e,o,l,s))}switch(n){case"input":Is(e),Bh(e,r,!1);break;case"textarea":Is(e),Mh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+rr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ci(e,!!r.multiple,o,!1):r.defaultValue!=null&&ci(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Qa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Je(t),null;case 6:if(e&&t.stateNode!=null)Fv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(F(166));if(n=kr(ts.current),kr(an.current),qs(t)){if(r=t.stateNode,n=t.memoizedProps,r[nn]=t,(o=r.nodeValue!==n)&&(e=bt,e!==null))switch(e.tag){case 3:Qs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qs(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nn]=t,t.stateNode=r}return Je(t),null;case 13:if(me(we),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ve&&wt!==null&&t.mode&1&&!(t.flags&128))Zy(),Ci(),t.flags|=98560,o=!1;else if(o=qs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(F(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(F(317));o[nn]=t}else Ci(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Je(t),o=!1}else Ut!==null&&(nf(Ut),Ut=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||we.current&1?Ne===0&&(Ne=3):$p())),t.updateQueue!==null&&(t.flags|=4),Je(t),null);case 4:return ji(),Gd(e,t),e===null&&Jo(t.stateNode.containerInfo),Je(t),null;case 10:return mp(t.type._context),Je(t),null;case 17:return yt(t.type)&&qa(),Je(t),null;case 19:if(me(we),o=t.memoizedState,o===null)return Je(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)go(o,!1);else{if(Ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=el(e),s!==null){for(t.flags|=128,go(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return de(we,we.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ee()>Ti&&(t.flags|=128,r=!0,go(o,!1),t.lanes=4194304)}else{if(!r)if(e=el(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),go(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ve)return Je(t),null}else 2*Ee()-o.renderingStartTime>Ti&&n!==1073741824&&(t.flags|=128,r=!0,go(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ee(),t.sibling=null,n=we.current,de(we,r?n&1|2:n&1),t):(Je(t),null);case 22:case 23:return Pp(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xt&1073741824&&(Je(t),t.subtreeFlags&6&&(t.flags|=8192)):Je(t),null;case 24:return null;case 25:return null}throw Error(F(156,t.tag))}function xk(e,t){switch(dp(t),t.tag){case 1:return yt(t.type)&&qa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ji(),me(gt),me(tt),wp(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xp(t),null;case 13:if(me(we),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(F(340));Ci()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(we),null;case 4:return ji(),null;case 10:return mp(t.type._context),null;case 22:case 23:return Pp(),null;case 24:return null;default:return null}}var Ys=!1,Ze=!1,wk=typeof WeakSet=="function"?WeakSet:Set,U=null;function si(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(e,t,r)}else n.current=null}function Kd(e,t,n){try{n()}catch(r){je(e,t,r)}}var Lm=!1;function bk(e,t){if($d=Ua,e=_y(),cp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(y=f.firstChild)!==null;)p=f,f=y;for(;;){if(f===e)break t;if(p===n&&++c===i&&(a=s),p===o&&++d===r&&(l=s),(y=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rd={focusedElem:e,selectionRange:n},Ua=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,k=v.memoizedState,m=t.stateNode,h=m.getSnapshotBeforeUpdate(t.elementType===t.type?x:Mt(t.type,x),k);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(C){je(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return v=Lm,Lm=!1,v}function zo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Kd(t,n,o)}i=i.next}while(i!==r)}}function Kl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Yd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Dv(e){var t=e.alternate;t!==null&&(e.alternate=null,Dv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nn],delete t[Zo],delete t[Fd],delete t[rk],delete t[ik])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Iv(e){return e.tag===5||e.tag===3||e.tag===4}function Pm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Iv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Jd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qa));else if(r!==4&&(e=e.child,e!==null))for(Jd(e,t,n),e=e.sibling;e!==null;)Jd(e,t,n),e=e.sibling}function Xd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xd(e,t,n),e=e.sibling;e!==null;)Xd(e,t,n),e=e.sibling}var He=null,Wt=!1;function Rn(e,t,n){for(n=n.child;n!==null;)Bv(e,t,n),n=n.sibling}function Bv(e,t,n){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(Ml,n)}catch{}switch(n.tag){case 5:Ze||si(n,t);case 6:var r=He,i=Wt;He=null,Rn(e,t,n),He=r,Wt=i,He!==null&&(Wt?(e=He,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(Wt?(e=He,n=n.stateNode,e.nodeType===8?lu(e.parentNode,n):e.nodeType===1&&lu(e,n),Go(e)):lu(He,n.stateNode));break;case 4:r=He,i=Wt,He=n.stateNode.containerInfo,Wt=!0,Rn(e,t,n),He=r,Wt=i;break;case 0:case 11:case 14:case 15:if(!Ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Kd(n,t,s),i=i.next}while(i!==r)}Rn(e,t,n);break;case 1:if(!Ze&&(si(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){je(n,t,a)}Rn(e,t,n);break;case 21:Rn(e,t,n);break;case 22:n.mode&1?(Ze=(r=Ze)||n.memoizedState!==null,Rn(e,t,n),Ze=r):Rn(e,t,n);break;default:Rn(e,t,n)}}function $m(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new wk),t.forEach(function(r){var i=Lk.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function _t(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:He=a.stateNode,Wt=!1;break e;case 3:He=a.stateNode.containerInfo,Wt=!0;break e;case 4:He=a.stateNode.containerInfo,Wt=!0;break e}a=a.return}if(He===null)throw Error(F(160));Bv(o,s,i),He=null,Wt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){je(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)_v(t,e),t=t.sibling}function _v(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_t(t,e),Zt(e),r&4){try{zo(3,e,e.return),Kl(3,e)}catch(x){je(e,e.return,x)}try{zo(5,e,e.return)}catch(x){je(e,e.return,x)}}break;case 1:_t(t,e),Zt(e),r&512&&n!==null&&si(n,n.return);break;case 5:if(_t(t,e),Zt(e),r&512&&n!==null&&si(n,n.return),e.flags&32){var i=e.stateNode;try{Ho(i,"")}catch(x){je(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&ay(i,o),Sd(a,s);var c=Sd(a,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d==="style"?fy(i,f):d==="dangerouslySetInnerHTML"?uy(i,f):d==="children"?Ho(i,f):Yf(i,d,f,c)}switch(a){case"input":yd(i,o);break;case"textarea":ly(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?ci(i,!!o.multiple,y,!1):p!==!!o.multiple&&(o.defaultValue!=null?ci(i,!!o.multiple,o.defaultValue,!0):ci(i,!!o.multiple,o.multiple?[]:"",!1))}i[Zo]=o}catch(x){je(e,e.return,x)}}break;case 6:if(_t(t,e),Zt(e),r&4){if(e.stateNode===null)throw Error(F(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){je(e,e.return,x)}}break;case 3:if(_t(t,e),Zt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Go(t.containerInfo)}catch(x){je(e,e.return,x)}break;case 4:_t(t,e),Zt(e);break;case 13:_t(t,e),Zt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Op=Ee())),r&4&&$m(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ze=(c=Ze)||d,_t(t,e),Ze=c):_t(t,e),Zt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(U=e,d=e.child;d!==null;){for(f=U=d;U!==null;){switch(p=U,y=p.child,p.tag){case 0:case 11:case 14:case 15:zo(4,p,p.return);break;case 1:si(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){je(r,n,x)}}break;case 5:si(p,p.return);break;case 22:if(p.memoizedState!==null){zm(f);continue}}y!==null?(y.return=p,U=y):zm(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=dy("display",s))}catch(x){je(e,e.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){je(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:_t(t,e),Zt(e),r&4&&$m(e);break;case 21:break;default:_t(t,e),Zt(e)}}function Zt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Iv(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ho(i,""),r.flags&=-33);var o=Pm(e);Xd(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Pm(e);Jd(e,a,s);break;default:throw Error(F(161))}}catch(l){je(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sk(e,t,n){U=e,Mv(e)}function Mv(e,t,n){for(var r=(e.mode&1)!==0;U!==null;){var i=U,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ys;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ze;a=Ys;var c=Ze;if(Ys=s,(Ze=l)&&!c)for(U=i;U!==null;)s=U,l=s.child,s.tag===22&&s.memoizedState!==null?Nm(i):l!==null?(l.return=s,U=l):Nm(i);for(;o!==null;)U=o,Mv(o),o=o.sibling;U=i,Ys=a,Ze=c}Rm(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,U=o):Rm(e)}}function Rm(e){for(;U!==null;){var t=U;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ze||Kl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ze)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Mt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&gm(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}gm(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Go(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}Ze||t.flags&512&&Yd(t)}catch(p){je(t,t.return,p)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function zm(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function Nm(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Kl(4,t)}catch(l){je(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){je(t,i,l)}}var o=t.return;try{Yd(t)}catch(l){je(t,o,l)}break;case 5:var s=t.return;try{Yd(t)}catch(l){je(t,s,l)}}}catch(l){je(t,t.return,l)}if(t===e){U=null;break}var a=t.sibling;if(a!==null){a.return=t.return,U=a;break}U=t.return}}var kk=Math.ceil,rl=jn.ReactCurrentDispatcher,Ep=jn.ReactCurrentOwner,Rt=jn.ReactCurrentBatchConfig,oe=0,Me=null,Pe=null,Ve=0,xt=0,ai=pr(0),Ne=0,os=null,Rr=0,Yl=0,Tp=0,No=null,ht=null,Op=0,Ti=1/0,pn=null,il=!1,Zd=null,Yn=null,Js=!1,Un=null,ol=0,Fo=0,ef=null,ma=-1,ga=0;function st(){return oe&6?Ee():ma!==-1?ma:ma=Ee()}function Jn(e){return e.mode&1?oe&2&&Ve!==0?Ve&-Ve:sk.transition!==null?(ga===0&&(ga=Cy()),ga):(e=ae,e!==0||(e=window.event,e=e===void 0?16:Py(e.type)),e):1}function Qt(e,t,n,r){if(50<Fo)throw Fo=0,ef=null,Error(F(185));vs(e,n,r),(!(oe&2)||e!==Me)&&(e===Me&&(!(oe&2)&&(Yl|=n),Ne===4&&_n(e,Ve)),vt(e,r),n===1&&oe===0&&!(t.mode&1)&&(Ti=Ee()+500,Ql&&hr()))}function vt(e,t){var n=e.callbackNode;sS(e,t);var r=Wa(e,e===Me?Ve:0);if(r===0)n!==null&&Hh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Hh(n),t===1)e.tag===0?ok(Fm.bind(null,e)):Yy(Fm.bind(null,e)),tk(function(){!(oe&6)&&hr()}),n=null;else{switch(Ay(r)){case 1:n=tp;break;case 4:n=Sy;break;case 16:n=Ma;break;case 536870912:n=ky;break;default:n=Ma}n=Kv(n,Wv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Wv(e,t){if(ma=-1,ga=0,oe&6)throw Error(F(327));var n=e.callbackNode;if(hi()&&e.callbackNode!==n)return null;var r=Wa(e,e===Me?Ve:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=sl(e,r);else{t=r;var i=oe;oe|=2;var o=Hv();(Me!==e||Ve!==t)&&(pn=null,Ti=Ee()+500,Ar(e,t));do try{jk();break}catch(a){Uv(e,a)}while(1);hp(),rl.current=o,oe=i,Pe!==null?t=0:(Me=null,Ve=0,t=Ne)}if(t!==0){if(t===2&&(i=Ed(e),i!==0&&(r=i,t=tf(e,i))),t===1)throw n=os,Ar(e,0),_n(e,r),vt(e,Ee()),n;if(t===6)_n(e,r);else{if(i=e.current.alternate,!(r&30)&&!Ck(i)&&(t=sl(e,r),t===2&&(o=Ed(e),o!==0&&(r=o,t=tf(e,o))),t===1))throw n=os,Ar(e,0),_n(e,r),vt(e,Ee()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(F(345));case 2:xr(e,ht,pn);break;case 3:if(_n(e,r),(r&130023424)===r&&(t=Op+500-Ee(),10<t)){if(Wa(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){st(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Nd(xr.bind(null,e,ht,pn),t);break}xr(e,ht,pn);break;case 4:if(_n(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Vt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kk(r/1960))-r,10<r){e.timeoutHandle=Nd(xr.bind(null,e,ht,pn),r);break}xr(e,ht,pn);break;case 5:xr(e,ht,pn);break;default:throw Error(F(329))}}}return vt(e,Ee()),e.callbackNode===n?Wv.bind(null,e):null}function tf(e,t){var n=No;return e.current.memoizedState.isDehydrated&&(Ar(e,t).flags|=256),e=sl(e,t),e!==2&&(t=ht,ht=n,t!==null&&nf(t)),e}function nf(e){ht===null?ht=e:ht.push.apply(ht,e)}function Ck(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Gt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _n(e,t){for(t&=~Tp,t&=~Yl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Vt(t),r=1<<n;e[n]=-1,t&=~r}}function Fm(e){if(oe&6)throw Error(F(327));hi();var t=Wa(e,0);if(!(t&1))return vt(e,Ee()),null;var n=sl(e,t);if(e.tag!==0&&n===2){var r=Ed(e);r!==0&&(t=r,n=tf(e,r))}if(n===1)throw n=os,Ar(e,0),_n(e,t),vt(e,Ee()),n;if(n===6)throw Error(F(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xr(e,ht,pn),vt(e,Ee()),null}function Lp(e,t){var n=oe;oe|=1;try{return e(t)}finally{oe=n,oe===0&&(Ti=Ee()+500,Ql&&hr())}}function zr(e){Un!==null&&Un.tag===0&&!(oe&6)&&hi();var t=oe;oe|=1;var n=Rt.transition,r=ae;try{if(Rt.transition=null,ae=1,e)return e()}finally{ae=r,Rt.transition=n,oe=t,!(oe&6)&&hr()}}function Pp(){xt=ai.current,me(ai)}function Ar(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ek(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(dp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qa();break;case 3:ji(),me(gt),me(tt),wp();break;case 5:xp(r);break;case 4:ji();break;case 13:me(we);break;case 19:me(we);break;case 10:mp(r.type._context);break;case 22:case 23:Pp()}n=n.return}if(Me=e,Pe=e=Xn(e.current,null),Ve=xt=t,Ne=0,os=null,Tp=Yl=Rr=0,ht=No=null,Sr!==null){for(t=0;t<Sr.length;t++)if(n=Sr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Sr=null}return e}function Uv(e,t){do{var n=Pe;try{if(hp(),fa.current=nl,tl){for(var r=be.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}tl=!1}if($r=0,Ie=ze=be=null,Ro=!1,ns=0,Ep.current=null,n===null||n.return===null){Ne=1,os=t,Pe=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=Ve,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=km(s);if(y!==null){y.flags&=-257,Cm(y,s,a,o,t),y.mode&1&&Sm(o,c,t),t=y,l=c;var v=t.updateQueue;if(v===null){var x=new Set;x.add(l),t.updateQueue=x}else v.add(l);break e}else{if(!(t&1)){Sm(o,c,t),$p();break e}l=Error(F(426))}}else if(ve&&a.mode&1){var k=km(s);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Cm(k,s,a,o,t),fp(Ei(l,a));break e}}o=l=Ei(l,a),Ne!==4&&(Ne=2),No===null?No=[o]:No.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=jv(o,l,t);mm(o,m);break e;case 1:a=l;var h=o.type,w=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Yn===null||!Yn.has(w)))){o.flags|=65536,t&=-t,o.lanes|=t;var C=Ev(o,a,t);mm(o,C);break e}}o=o.return}while(o!==null)}Qv(n)}catch(A){t=A,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(1)}function Hv(){var e=rl.current;return rl.current=nl,e===null?nl:e}function $p(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),Me===null||!(Rr&268435455)&&!(Yl&268435455)||_n(Me,Ve)}function sl(e,t){var n=oe;oe|=2;var r=Hv();(Me!==e||Ve!==t)&&(pn=null,Ar(e,t));do try{Ak();break}catch(i){Uv(e,i)}while(1);if(hp(),oe=n,rl.current=r,Pe!==null)throw Error(F(261));return Me=null,Ve=0,Ne}function Ak(){for(;Pe!==null;)Vv(Pe)}function jk(){for(;Pe!==null&&!Jb();)Vv(Pe)}function Vv(e){var t=Gv(e.alternate,e,xt);e.memoizedProps=e.pendingProps,t===null?Qv(e):Pe=t,Ep.current=null}function Qv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=xk(n,t),n!==null){n.flags&=32767,Pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ne=6,Pe=null;return}}else if(n=vk(n,t,xt),n!==null){Pe=n;return}if(t=t.sibling,t!==null){Pe=t;return}Pe=t=e}while(t!==null);Ne===0&&(Ne=5)}function xr(e,t,n){var r=ae,i=Rt.transition;try{Rt.transition=null,ae=1,Ek(e,t,n,r)}finally{Rt.transition=i,ae=r}return null}function Ek(e,t,n,r){do hi();while(Un!==null);if(oe&6)throw Error(F(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(F(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(aS(e,o),e===Me&&(Pe=Me=null,Ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Js||(Js=!0,Kv(Ma,function(){return hi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Rt.transition,Rt.transition=null;var s=ae;ae=1;var a=oe;oe|=4,Ep.current=null,bk(e,n),_v(n,e),qS(Rd),Ua=!!$d,Rd=$d=null,e.current=n,Sk(n),Xb(),oe=a,ae=s,Rt.transition=o}else e.current=n;if(Js&&(Js=!1,Un=e,ol=i),o=e.pendingLanes,o===0&&(Yn=null),tS(n.stateNode),vt(e,Ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(il)throw il=!1,e=Zd,Zd=null,e;return ol&1&&e.tag!==0&&hi(),o=e.pendingLanes,o&1?e===ef?Fo++:(Fo=0,ef=e):Fo=0,hr(),null}function hi(){if(Un!==null){var e=Ay(ol),t=Rt.transition,n=ae;try{if(Rt.transition=null,ae=16>e?16:e,Un===null)var r=!1;else{if(e=Un,Un=null,ol=0,oe&6)throw Error(F(331));var i=oe;for(oe|=4,U=e.current;U!==null;){var o=U,s=o.child;if(U.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(U=c;U!==null;){var d=U;switch(d.tag){case 0:case 11:case 15:zo(8,d,o)}var f=d.child;if(f!==null)f.return=d,U=f;else for(;U!==null;){d=U;var p=d.sibling,y=d.return;if(Dv(d),d===c){U=null;break}if(p!==null){p.return=y,U=p;break}U=y}}}var v=o.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var k=x.sibling;x.sibling=null,x=k}while(x!==null)}}U=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,U=s;else e:for(;U!==null;){if(o=U,o.flags&2048)switch(o.tag){case 0:case 11:case 15:zo(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,U=m;break e}U=o.return}}var h=e.current;for(U=h;U!==null;){s=U;var w=s.child;if(s.subtreeFlags&2064&&w!==null)w.return=s,U=w;else e:for(s=h;U!==null;){if(a=U,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Kl(9,a)}}catch(A){je(a,a.return,A)}if(a===s){U=null;break e}var C=a.sibling;if(C!==null){C.return=a.return,U=C;break e}U=a.return}}if(oe=i,hr(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(Ml,e)}catch{}r=!0}return r}finally{ae=n,Rt.transition=t}}return!1}function Dm(e,t,n){t=Ei(n,t),t=jv(e,t,1),e=Kn(e,t,1),t=st(),e!==null&&(vs(e,1,t),vt(e,t))}function je(e,t,n){if(e.tag===3)Dm(e,e,n);else for(;t!==null;){if(t.tag===3){Dm(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yn===null||!Yn.has(r))){e=Ei(n,e),e=Ev(t,e,1),t=Kn(t,e,1),e=st(),t!==null&&(vs(t,1,e),vt(t,e));break}}t=t.return}}function Tk(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=st(),e.pingedLanes|=e.suspendedLanes&n,Me===e&&(Ve&n)===n&&(Ne===4||Ne===3&&(Ve&130023424)===Ve&&500>Ee()-Op?Ar(e,0):Tp|=n),vt(e,t)}function qv(e,t){t===0&&(e.mode&1?(t=Ms,Ms<<=1,!(Ms&130023424)&&(Ms=4194304)):t=1);var n=st();e=Sn(e,t),e!==null&&(vs(e,t,n),vt(e,n))}function Ok(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qv(e,n)}function Lk(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(t),qv(e,n)}var Gv;Gv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||gt.current)mt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return mt=!1,yk(e,t,n);mt=!!(e.flags&131072)}else mt=!1,ve&&t.flags&1048576&&Jy(t,Ya,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ha(e,t),e=t.pendingProps;var i=ki(t,tt.current);pi(t,n),i=Sp(null,t,r,e,i,n);var o=kp();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,yt(r)?(o=!0,Ga(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,yp(t),i.updater=ql,t.stateNode=i,i._reactInternals=t,Wd(t,r,e,n),t=Vd(null,t,r,!0,o,n)):(t.tag=0,ve&&o&&up(t),ot(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ha(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=$k(r),e=Mt(r,e),i){case 0:t=Hd(null,t,r,e,n);break e;case 1:t=Em(null,t,r,e,n);break e;case 11:t=Am(null,t,r,e,n);break e;case 14:t=jm(null,t,r,Mt(r.type,e),n);break e}throw Error(F(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Mt(r,i),Hd(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Mt(r,i),Em(e,t,r,i,n);case 3:e:{if(Pv(t),e===null)throw Error(F(387));r=t.pendingProps,o=t.memoizedState,i=o.element,tv(e,t),Za(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ei(Error(F(423)),t),t=Tm(e,t,r,n,i);break e}else if(r!==i){i=Ei(Error(F(424)),t),t=Tm(e,t,r,n,i);break e}else for(wt=Gn(t.stateNode.containerInfo.firstChild),bt=t,ve=!0,Ut=null,n=ov(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ci(),r===i){t=kn(e,t,n);break e}ot(e,t,r,n)}t=t.child}return t;case 5:return sv(t),e===null&&Bd(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,zd(r,i)?s=null:o!==null&&zd(r,o)&&(t.flags|=32),Lv(e,t),ot(e,t,s,n),t.child;case 6:return e===null&&Bd(t),null;case 13:return $v(e,t,n);case 4:return vp(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ai(t,null,r,n):ot(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Mt(r,i),Am(e,t,r,i,n);case 7:return ot(e,t,t.pendingProps,n),t.child;case 8:return ot(e,t,t.pendingProps.children,n),t.child;case 12:return ot(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,de(Ja,r._currentValue),r._currentValue=s,o!==null)if(Gt(o.value,s)){if(o.children===i.children&&!gt.current){t=kn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=vn(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),_d(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(F(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),_d(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ot(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,pi(t,n),i=Nt(i),r=r(i),t.flags|=1,ot(e,t,r,n),t.child;case 14:return r=t.type,i=Mt(r,t.pendingProps),i=Mt(r.type,i),jm(e,t,r,i,n);case 15:return Tv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Mt(r,i),ha(e,t),t.tag=1,yt(r)?(e=!0,Ga(t)):e=!1,pi(t,n),rv(t,r,i),Wd(t,r,i,n),Vd(null,t,r,!0,e,n);case 19:return Rv(e,t,n);case 22:return Ov(e,t,n)}throw Error(F(156,t.tag))};function Kv(e,t){return by(e,t)}function Pk(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $t(e,t,n,r){return new Pk(e,t,n,r)}function Rp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $k(e){if(typeof e=="function")return Rp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xf)return 11;if(e===Zf)return 14}return 2}function Xn(e,t){var n=e.alternate;return n===null?(n=$t(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ya(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Rp(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Jr:return jr(n.children,i,o,t);case Jf:s=8,i|=8;break;case fd:return e=$t(12,n,t,i|2),e.elementType=fd,e.lanes=o,e;case pd:return e=$t(13,n,t,i),e.elementType=pd,e.lanes=o,e;case hd:return e=$t(19,n,t,i),e.elementType=hd,e.lanes=o,e;case iy:return Jl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ny:s=10;break e;case ry:s=9;break e;case Xf:s=11;break e;case Zf:s=14;break e;case Fn:s=16,r=null;break e}throw Error(F(130,e==null?e:typeof e,""))}return t=$t(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function jr(e,t,n,r){return e=$t(7,e,r,t),e.lanes=n,e}function Jl(e,t,n,r){return e=$t(22,e,r,t),e.elementType=iy,e.lanes=n,e.stateNode={isHidden:!1},e}function gu(e,t,n){return e=$t(6,e,null,t),e.lanes=n,e}function yu(e,t,n){return t=$t(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Rk(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jc(0),this.expirationTimes=Jc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function zp(e,t,n,r,i,o,s,a,l){return e=new Rk(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=$t(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yp(o),e}function zk(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Yv(e){if(!e)return ir;e=e._reactInternals;e:{if(Mr(e)!==e||e.tag!==1)throw Error(F(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(yt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(F(171))}if(e.tag===1){var n=e.type;if(yt(n))return Ky(e,n,t)}return t}function Jv(e,t,n,r,i,o,s,a,l){return e=zp(n,r,!0,e,i,o,s,a,l),e.context=Yv(null),n=e.current,r=st(),i=Jn(n),o=vn(r,i),o.callback=t??null,Kn(n,o,i),e.current.lanes=i,vs(e,i,r),vt(e,r),e}function Xl(e,t,n,r){var i=t.current,o=st(),s=Jn(i);return n=Yv(n),t.context===null?t.context=n:t.pendingContext=n,t=vn(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Kn(i,t,s),e!==null&&(Qt(e,i,s,o),da(e,i,s)),s}function al(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Im(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Np(e,t){Im(e,t),(e=e.alternate)&&Im(e,t)}function Nk(){return null}var Xv=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fp(e){this._internalRoot=e}Zl.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(F(409));Xl(e,t,null,null)};Zl.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zr(function(){Xl(null,e,null,null)}),t[bn]=null}};function Zl(e){this._internalRoot=e}Zl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ty();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Bn.length&&t!==0&&t<Bn[n].priority;n++);Bn.splice(n,0,e),n===0&&Ly(e)}};function Dp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ec(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Bm(){}function Fk(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=al(s);o.call(c)}}var s=Jv(t,r,e,0,null,!1,!1,"",Bm);return e._reactRootContainer=s,e[bn]=s.current,Jo(e.nodeType===8?e.parentNode:e),zr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=al(l);a.call(c)}}var l=zp(e,0,!1,null,null,!1,!1,"",Bm);return e._reactRootContainer=l,e[bn]=l.current,Jo(e.nodeType===8?e.parentNode:e),zr(function(){Xl(t,l,n,r)}),l}function tc(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=al(s);a.call(l)}}Xl(t,s,e,i)}else s=Fk(n,t,e,i,r);return al(s)}jy=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Co(t.pendingLanes);n!==0&&(np(t,n|1),vt(t,Ee()),!(oe&6)&&(Ti=Ee()+500,hr()))}break;case 13:zr(function(){var r=Sn(e,1);if(r!==null){var i=st();Qt(r,e,1,i)}}),Np(e,1)}};rp=function(e){if(e.tag===13){var t=Sn(e,134217728);if(t!==null){var n=st();Qt(t,e,134217728,n)}Np(e,134217728)}};Ey=function(e){if(e.tag===13){var t=Jn(e),n=Sn(e,t);if(n!==null){var r=st();Qt(n,e,t,r)}Np(e,t)}};Ty=function(){return ae};Oy=function(e,t){var n=ae;try{return ae=e,t()}finally{ae=n}};Cd=function(e,t,n){switch(t){case"input":if(yd(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Vl(r);if(!i)throw Error(F(90));sy(r),yd(r,i)}}}break;case"textarea":ly(e,n);break;case"select":t=n.value,t!=null&&ci(e,!!n.multiple,t,!1)}};my=Lp;gy=zr;var Dk={usingClientEntryPoint:!1,Events:[ws,ti,Vl,py,hy,Lp]},yo={findFiberByHostInstance:br,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ik={bundleType:yo.bundleType,version:yo.version,rendererPackageName:yo.rendererPackageName,rendererConfig:yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xy(e),e===null?null:e.stateNode},findFiberByHostInstance:yo.findFiberByHostInstance||Nk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xs.isDisabled&&Xs.supportsFiber)try{Ml=Xs.inject(Ik),sn=Xs}catch{}}At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dk;At.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dp(t))throw Error(F(200));return zk(e,t,null,n)};At.createRoot=function(e,t){if(!Dp(e))throw Error(F(299));var n=!1,r="",i=Xv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=zp(e,1,!1,null,null,n,!1,r,i),e[bn]=t.current,Jo(e.nodeType===8?e.parentNode:e),new Fp(t)};At.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(F(188)):(e=Object.keys(e).join(","),Error(F(268,e)));return e=xy(t),e=e===null?null:e.stateNode,e};At.flushSync=function(e){return zr(e)};At.hydrate=function(e,t,n){if(!ec(t))throw Error(F(200));return tc(null,e,t,!0,n)};At.hydrateRoot=function(e,t,n){if(!Dp(e))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Xv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Jv(t,null,e,1,n??null,i,!1,o,s),e[bn]=t.current,Jo(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Zl(t)};At.render=function(e,t,n){if(!ec(t))throw Error(F(200));return tc(null,e,t,!1,n)};At.unmountComponentAtNode=function(e){if(!ec(e))throw Error(F(40));return e._reactRootContainer?(zr(function(){tc(null,null,e,!1,function(){e._reactRootContainer=null,e[bn]=null})}),!0):!1};At.unstable_batchedUpdates=Lp;At.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ec(n))throw Error(F(200));if(e==null||e._reactInternals===void 0)throw Error(F(38));return tc(e,t,n,!1,r)};At.version="18.2.0-next-9e3b772b8-20220608";function Zv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zv)}catch(e){console.error(e)}}Zv(),J0.exports=At;var ex=J0.exports,_m=ex;ud.createRoot=_m.createRoot,ud.hydrateRoot=_m.hydrateRoot;var _e=function(){return _e=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},_e.apply(this,arguments)};function Oi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var he="-ms-",Do="-moz-",se="-webkit-",tx="comm",nc="rule",Ip="decl",Bk="@import",nx="@keyframes",_k="@layer",Mk=Math.abs,Bp=String.fromCharCode,rf=Object.assign;function Wk(e,t){return Be(e,0)^45?(((t<<2^Be(e,0))<<2^Be(e,1))<<2^Be(e,2))<<2^Be(e,3):0}function rx(e){return e.trim()}function hn(e,t){return(e=t.exec(e))?e[0]:e}function Y(e,t,n){return e.replace(t,n)}function va(e,t){return e.indexOf(t)}function Be(e,t){return e.charCodeAt(t)|0}function Li(e,t,n){return e.slice(t,n)}function tn(e){return e.length}function ix(e){return e.length}function jo(e,t){return t.push(e),e}function Uk(e,t){return e.map(t).join("")}function Mm(e,t){return e.filter(function(n){return!hn(n,t)})}var rc=1,Pi=1,ox=0,Dt=0,Oe=0,Vi="";function ic(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:rc,column:Pi,length:s,return:"",siblings:a}}function Nn(e,t){return rf(ic("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Qr(e){for(;e.root;)e=Nn(e.root,{children:[e]});jo(e,e.siblings)}function Hk(){return Oe}function Vk(){return Oe=Dt>0?Be(Vi,--Dt):0,Pi--,Oe===10&&(Pi=1,rc--),Oe}function qt(){return Oe=Dt<ox?Be(Vi,Dt++):0,Pi++,Oe===10&&(Pi=1,rc++),Oe}function Er(){return Be(Vi,Dt)}function xa(){return Dt}function oc(e,t){return Li(Vi,e,t)}function of(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Qk(e){return rc=Pi=1,ox=tn(Vi=e),Dt=0,[]}function qk(e){return Vi="",e}function vu(e){return rx(oc(Dt-1,sf(e===91?e+2:e===40?e+1:e)))}function Gk(e){for(;(Oe=Er())&&Oe<33;)qt();return of(e)>2||of(Oe)>3?"":" "}function Kk(e,t){for(;--t&&qt()&&!(Oe<48||Oe>102||Oe>57&&Oe<65||Oe>70&&Oe<97););return oc(e,xa()+(t<6&&Er()==32&&qt()==32))}function sf(e){for(;qt();)switch(Oe){case e:return Dt;case 34:case 39:e!==34&&e!==39&&sf(Oe);break;case 40:e===41&&sf(e);break;case 92:qt();break}return Dt}function Yk(e,t){for(;qt()&&e+Oe!==47+10;)if(e+Oe===42+42&&Er()===47)break;return"/*"+oc(t,Dt-1)+"*"+Bp(e===47?e:qt())}function Jk(e){for(;!of(Er());)qt();return oc(e,Dt)}function Xk(e){return qk(wa("",null,null,null,[""],e=Qk(e),0,[0],e))}function wa(e,t,n,r,i,o,s,a,l){for(var c=0,d=0,f=s,p=0,y=0,v=0,x=1,k=1,m=1,h=0,w="",C=i,A=o,b=r,j=w;k;)switch(v=h,h=qt()){case 40:if(v!=108&&Be(j,f-1)==58){va(j+=Y(vu(h),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:j+=vu(h);break;case 9:case 10:case 13:case 32:j+=Gk(v);break;case 92:j+=Kk(xa()-1,7);continue;case 47:switch(Er()){case 42:case 47:jo(Zk(Yk(qt(),xa()),t,n,l),l);break;default:j+="/"}break;case 123*x:a[c++]=tn(j)*m;case 125*x:case 59:case 0:switch(h){case 0:case 125:k=0;case 59+d:m==-1&&(j=Y(j,/\f/g,"")),y>0&&tn(j)-f&&jo(y>32?Um(j+";",r,n,f-1,l):Um(Y(j," ","")+";",r,n,f-2,l),l);break;case 59:j+=";";default:if(jo(b=Wm(j,t,n,c,d,i,a,w,C=[],A=[],f,o),o),h===123)if(d===0)wa(j,t,b,b,C,o,f,a,A);else switch(p===99&&Be(j,3)===110?100:p){case 100:case 108:case 109:case 115:wa(e,b,b,r&&jo(Wm(e,b,b,0,0,i,a,w,i,C=[],f,A),A),i,A,f,a,r?C:A);break;default:wa(j,b,b,b,[""],A,0,a,A)}}c=d=y=0,x=m=1,w=j="",f=s;break;case 58:f=1+tn(j),y=v;default:if(x<1){if(h==123)--x;else if(h==125&&x++==0&&Vk()==125)continue}switch(j+=Bp(h),h*x){case 38:m=d>0?1:(j+="\f",-1);break;case 44:a[c++]=(tn(j)-1)*m,m=1;break;case 64:Er()===45&&(j+=vu(qt())),p=Er(),d=f=tn(w=j+=Jk(xa())),h++;break;case 45:v===45&&tn(j)==2&&(x=0)}}return o}function Wm(e,t,n,r,i,o,s,a,l,c,d,f){for(var p=i-1,y=i===0?o:[""],v=ix(y),x=0,k=0,m=0;x<r;++x)for(var h=0,w=Li(e,p+1,p=Mk(k=s[x])),C=e;h<v;++h)(C=rx(k>0?y[h]+" "+w:Y(w,/&\f/g,y[h])))&&(l[m++]=C);return ic(e,t,n,i===0?nc:a,l,c,d,f)}function Zk(e,t,n,r){return ic(e,t,n,tx,Bp(Hk()),Li(e,2,-2),0,r)}function Um(e,t,n,r,i){return ic(e,t,n,Ip,Li(e,0,r),Li(e,r+1,-1),r,i)}function sx(e,t,n){switch(Wk(e,t)){case 5103:return se+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return se+e+e;case 4789:return Do+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return se+e+Do+e+he+e+e;case 5936:switch(Be(e,t+11)){case 114:return se+e+he+Y(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return se+e+he+Y(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return se+e+he+Y(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return se+e+he+e+e;case 6165:return se+e+he+"flex-"+e+e;case 5187:return se+e+Y(e,/(\w+).+(:[^]+)/,se+"box-$1$2"+he+"flex-$1$2")+e;case 5443:return se+e+he+"flex-item-"+Y(e,/flex-|-self/g,"")+(hn(e,/flex-|baseline/)?"":he+"grid-row-"+Y(e,/flex-|-self/g,""))+e;case 4675:return se+e+he+"flex-line-pack"+Y(e,/align-content|flex-|-self/g,"")+e;case 5548:return se+e+he+Y(e,"shrink","negative")+e;case 5292:return se+e+he+Y(e,"basis","preferred-size")+e;case 6060:return se+"box-"+Y(e,"-grow","")+se+e+he+Y(e,"grow","positive")+e;case 4554:return se+Y(e,/([^-])(transform)/g,"$1"+se+"$2")+e;case 6187:return Y(Y(Y(e,/(zoom-|grab)/,se+"$1"),/(image-set)/,se+"$1"),e,"")+e;case 5495:case 3959:return Y(e,/(image-set\([^]*)/,se+"$1$`$1");case 4968:return Y(Y(e,/(.+:)(flex-)?(.*)/,se+"box-pack:$3"+he+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+se+e+e;case 4200:if(!hn(e,/flex-|baseline/))return he+"grid-column-align"+Li(e,t)+e;break;case 2592:case 3360:return he+Y(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,hn(r.props,/grid-\w+-end/)})?~va(e+(n=n[t].value),"span")?e:he+Y(e,"-start","")+e+he+"grid-row-span:"+(~va(n,"span")?hn(n,/\d+/):+hn(n,/\d+/)-+hn(e,/\d+/))+";":he+Y(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return hn(r.props,/grid-\w+-start/)})?e:he+Y(Y(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Y(e,/(.+)-inline(.+)/,se+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(tn(e)-1-t>6)switch(Be(e,t+1)){case 109:if(Be(e,t+4)!==45)break;case 102:return Y(e,/(.+:)(.+)-([^]+)/,"$1"+se+"$2-$3$1"+Do+(Be(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~va(e,"stretch")?sx(Y(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Y(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,c){return he+i+":"+o+c+(s?he+i+"-span:"+(a?l:+l-+o)+c:"")+e});case 4949:if(Be(e,t+6)===121)return Y(e,":",":"+se)+e;break;case 6444:switch(Be(e,Be(e,14)===45?18:11)){case 120:return Y(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+se+(Be(e,14)===45?"inline-":"")+"box$3$1"+se+"$2$3$1"+he+"$2box$3")+e;case 100:return Y(e,":",":"+he)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Y(e,"scroll-","scroll-snap-")+e}return e}function ll(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function eC(e,t,n,r){switch(e.type){case _k:if(e.children.length)break;case Bk:case Ip:return e.return=e.return||e.value;case tx:return"";case nx:return e.return=e.value+"{"+ll(e.children,r)+"}";case nc:if(!tn(e.value=e.props.join(",")))return""}return tn(n=ll(e.children,r))?e.return=e.value+"{"+n+"}":""}function tC(e){var t=ix(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function nC(e){return function(t){t.root||(t=t.return)&&e(t)}}function rC(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ip:e.return=sx(e.value,e.length,n);return;case nx:return ll([Nn(e,{value:Y(e.value,"@","@"+se)})],r);case nc:if(e.length)return Uk(n=e.props,function(i){switch(hn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Qr(Nn(e,{props:[Y(i,/:(read-\w+)/,":"+Do+"$1")]})),Qr(Nn(e,{props:[i]})),rf(e,{props:Mm(n,r)});break;case"::placeholder":Qr(Nn(e,{props:[Y(i,/:(plac\w+)/,":"+se+"input-$1")]})),Qr(Nn(e,{props:[Y(i,/:(plac\w+)/,":"+Do+"$1")]})),Qr(Nn(e,{props:[Y(i,/:(plac\w+)/,he+"input-$1")]})),Qr(Nn(e,{props:[i]})),rf(e,{props:Mm(n,r)});break}return""})}}var iC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},$i=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",_p=typeof window<"u"&&"HTMLElement"in window,oC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),sC={},Mp=Object.freeze([]),Ri=Object.freeze({});function ax(e,t,n){return n===void 0&&(n=Ri),e.theme!==n.theme&&e.theme||t||n.theme}var lx=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),aC=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,lC=/(^-|-$)/g;function Hm(e){return e.replace(aC,"-").replace(lC,"")}var cC=/(a)(d)/gi,Vm=function(e){return String.fromCharCode(e+(e>25?39:97))};function af(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Vm(t%52)+n;return(Vm(t%52)+n).replace(cC,"$1-$2")}var xu,li=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},cx=function(e){return li(5381,e)};function Wp(e){return af(cx(e)>>>0)}function uC(e){return e.displayName||e.name||"Component"}function wu(e){return typeof e=="string"&&!0}var ux=typeof Symbol=="function"&&Symbol.for,dx=ux?Symbol.for("react.memo"):60115,dC=ux?Symbol.for("react.forward_ref"):60112,fC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},pC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},fx={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},hC=((xu={})[dC]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xu[dx]=fx,xu);function Qm(e){return("type"in(t=e)&&t.type.$$typeof)===dx?fx:"$$typeof"in e?hC[e.$$typeof]:fC;var t}var mC=Object.defineProperty,gC=Object.getOwnPropertyNames,qm=Object.getOwnPropertySymbols,yC=Object.getOwnPropertyDescriptor,vC=Object.getPrototypeOf,Gm=Object.prototype;function px(e,t,n){if(typeof t!="string"){if(Gm){var r=vC(t);r&&r!==Gm&&px(e,r,n)}var i=gC(t);qm&&(i=i.concat(qm(t)));for(var o=Qm(e),s=Qm(t),a=0;a<i.length;++a){var l=i[a];if(!(l in pC||n&&n[l]||s&&l in s||o&&l in o)){var c=yC(t,l);try{mC(e,l,c)}catch{}}}}return e}function Nr(e){return typeof e=="function"}function Up(e){return typeof e=="object"&&"styledComponentId"in e}function Cr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function cl(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function ss(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function lf(e,t,n){if(n===void 0&&(n=!1),!n&&!ss(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=lf(e[r],t[r]);else if(ss(t))for(var r in t)e[r]=lf(e[r],t[r]);return e}function Hp(e,t){Object.defineProperty(e,"toString",{value:t})}function or(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var xC=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw or(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(`/*!sc*/
`);return n},e}(),ba=new Map,ul=new Map,bu=1,Zs=function(e){if(ba.has(e))return ba.get(e);for(;ul.has(bu);)bu++;var t=bu++;return ba.set(e,t),ul.set(t,e),t},wC=function(e,t){ba.set(e,t),ul.set(t,e)},bC="style[".concat($i,"][").concat("data-styled-version",'="').concat("6.0.1",'"]'),SC=new RegExp("^".concat($i,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),kC=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},CC=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(SC);if(l){var c=0|parseInt(l[1],10),d=l[2];c!==0&&(wC(d,c),kC(e,d,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}};function AC(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var hx=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){return Array.from(a.querySelectorAll("style[".concat($i,"]"))).at(-1)}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute($i,"active"),r.setAttribute("data-styled-version","6.0.1");var s=AC();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},jC=function(){function e(t){this.element=hx(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw or(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),EC=function(){function e(t){this.element=hx(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),TC=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Km=_p,OC={isServer:!_p,useCSSOMInjection:!oC},dl=function(){function e(t,n,r){t===void 0&&(t=Ri),n===void 0&&(n={});var i=this;this.options=_e(_e({},OC),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&_p&&Km&&(Km=!1,function(o){for(var s=document.querySelectorAll(bC),a=0,l=s.length;a<l;a++){var c=s[a];c&&c.getAttribute($i)!=="active"&&(CC(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),Hp(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",c=function(f){var p=function(m){return ul.get(m)}(f);if(p===void 0)return"continue";var y=o.names.get(p),v=s.getGroup(f);if(y===void 0||v.length===0)return"continue";var x="".concat($i,".g").concat(f,'[id="').concat(p,'"]'),k="";y!==void 0&&y.forEach(function(m){m.length>0&&(k+="".concat(m,","))}),l+="".concat(v).concat(x,'{content:"').concat(k,'"}').concat(`/*!sc*/
`)},d=0;d<a;d++)c(d);return l}(i)})}return e.registerId=function(t){return Zs(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(_e(_e({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new TC(i):r?new jC(i):new EC(i)}(this.options),new xC(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Zs(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Zs(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Zs(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),LC=/&/g,PC=/^\s*\/\/.*$/gm;function mx(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=mx(n.children,t)),n})}function $C(e){var t,n,r,i=e===void 0?Ri:e,o=i.options,s=o===void 0?Ri:o,a=i.plugins,l=a===void 0?Mp:a,c=function(p,y,v){return v===n||v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):p},d=l.slice();d.push(function(p){p.type===nc&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(LC,n).replace(r,c))}),s.prefix&&d.push(rC),d.push(eC);var f=function(p,y,v,x){y===void 0&&(y=""),v===void 0&&(v=""),x===void 0&&(x="&"),t=x,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var k=p.replace(PC,""),m=Xk(v||y?"".concat(v," ").concat(y," { ").concat(k," }"):k);s.namespace&&(m=mx(m,s.namespace));var h=[];return ll(m,tC(d.concat(nC(function(w){return h.push(w)})))),h};return f.hash=l.length?l.reduce(function(p,y){return y.name||or(15),li(p,y.name)},5381).toString():"",f}var RC=new dl,cf=$C(),gx=Le.createContext({shouldForwardProp:void 0,styleSheet:RC,stylis:cf});gx.Consumer;Le.createContext(void 0);function uf(){return S.useContext(gx)}var yx=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=cf);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Hp(this,function(){throw or(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=cf),this.name+t.hash},e}(),zC=function(e){return e>="A"&&e<="Z"};function Ym(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;zC(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var vx=function(e){return e==null||e===!1||e===""},xx=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!vx(o)&&(Array.isArray(o)&&o.isCss||Nr(o)?r.push("".concat(Ym(i),":"),o,";"):ss(o)?r.push.apply(r,Oi(Oi(["".concat(i," {")],xx(o),!1),["}"],!1)):r.push("".concat(Ym(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in iC||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Zn(e,t,n,r){if(vx(e))return[];if(Up(e))return[".".concat(e.styledComponentId)];if(Nr(e)){if(!Nr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Zn(i,t,n,r)}var o;return e instanceof yx?n?(e.inject(n,r),[e.getName(r)]):[e]:ss(e)?xx(e):Array.isArray(e)?e.flatMap(function(s){return Zn(s,t,n,r)}):[e.toString()]}function wx(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Nr(n)&&!Up(n))return!1}return!0}var NC=cx("6.0.1"),FC=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&wx(t),this.componentId=n,this.baseHash=li(NC,n),this.baseStyle=r,dl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Cr(i,this.staticRulesId);else{var o=cl(Zn(this.rules,t,n,r)),s=af(li(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=Cr(i,s),this.staticRulesId=s}else{for(var l=li(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")c+=f;else if(f){var p=cl(Zn(f,t,n,r));l=li(l,p),c+=p}}if(c){var y=af(l>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(c,".".concat(y),void 0,this.componentId)),i=Cr(i,y)}}return i},e}(),zi=Le.createContext(void 0);zi.Consumer;function bx(){var e=S.useContext(zi);if(!e)throw or(18);return e}function DC(e){var t=Le.useContext(zi),n=S.useMemo(function(){return function(r,i){if(!r)throw or(14);if(Nr(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw or(8);return i?_e(_e({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?Le.createElement(zi.Provider,{value:n},e.children):null}var Su={};function IC(e,t,n){var r=Up(e),i=e,o=!wu(e),s=t.attrs,a=s===void 0?Mp:s,l=t.componentId,c=l===void 0?function(C,A){var b=typeof C!="string"?"sc":Hm(C);Su[b]=(Su[b]||0)+1;var j="".concat(b,"-").concat(Wp("6.0.1"+b+Su[b]));return A?"".concat(A,"-").concat(j):j}(t.displayName,t.parentComponentId):l,d=t.displayName,f=d===void 0?function(C){return wu(C)?"styled.".concat(C):"Styled(".concat(uC(C),")")}(e):d,p=t.displayName&&t.componentId?"".concat(Hm(t.displayName),"-").concat(t.componentId):t.componentId||c,y=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var x=i.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;v=function(C,A){return x(C,A)&&k(C,A)}}else v=x}var m=new FC(n,p,r?i.componentStyle:void 0);m.isStatic&&a.length;function h(C,A){return function(b,j,E,T){var O=b.attrs,L=b.componentStyle,P=b.defaultProps,$=b.foldedComponentIds,z=b.styledComponentId,D=b.target,V=Le.useContext(zi),Q=uf(),N=b.shouldForwardProp||Q.shouldForwardProp,I=function(dt,De,ft){for(var Kt,Re=_e(_e({},De),{className:void 0,theme:ft}),On=0;On<dt.length;On+=1){var Yt=Nr(Kt=dt[On])?Kt(Re):Kt;for(var nt in Yt)Re[nt]=nt==="className"?Cr(Re[nt],Yt[nt]):nt==="style"?_e(_e({},Re[nt]),Yt[nt]):Yt[nt]}return De.className&&(Re.className=Cr(Re.className,De.className)),Re}(O,j,ax(j,V,P)||Ri),W=I.as||D,K={};for(var q in I)I[q]===void 0||q[0]==="$"||q==="as"||q==="theme"||(q==="forwardedAs"?K.as=I.forwardedAs:N&&!N(q,W)||(K[q]=I[q]));var Te=function(dt,De){var ft=uf(),Kt=dt.generateAndInjectStyles(De,ft.styleSheet,ft.stylis);return Kt}(L,I),Ae=Cr($,z);return Te&&(Ae+=" "+Te),I.className&&(Ae+=" "+I.className),K[wu(W)&&!lx.has(W)?"class":"className"]=Ae,K.ref=E,S.createElement(W,K)}(w,C,A)}h.displayName=f;var w=Le.forwardRef(h);return w.attrs=y,w.componentStyle=m,w.displayName=f,w.shouldForwardProp=v,w.foldedComponentIds=r?Cr(i.foldedComponentIds,i.styledComponentId):"",w.styledComponentId=p,w.target=r?i.target:e,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=r?function(A){for(var b=[],j=1;j<arguments.length;j++)b[j-1]=arguments[j];for(var E=0,T=b;E<T.length;E++)lf(A,T[E],!0);return A}({},i.defaultProps,C):C}}),Hp(w,function(){return".".concat(w.styledComponentId)}),o&&px(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Jm(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Xm=function(e){return Object.assign(e,{isCss:!0})};function Fr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Nr(e)||ss(e)){var r=e;return Xm(Zn(Jm(Mp,Oi([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?Zn(i):Xm(Zn(Jm(i,t)))}function df(e,t,n){if(n===void 0&&(n=Ri),!t)throw or(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,Fr.apply(void 0,Oi([i],o,!1)))};return r.attrs=function(i){return df(e,t,_e(_e({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return df(e,t,_e(_e({},n),i))},r}var Sx=function(e){return df(IC,e)},g=Sx;lx.forEach(function(e){g[e]=Sx(e)});var BC=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=wx(t),dl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(cl(Zn(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&dl.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function _C(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Fr.apply(void 0,Oi([e],t,!1)),i="sc-global-".concat(Wp(JSON.stringify(r))),o=new BC(r,i),s=function(l){var c=uf(),d=Le.useContext(zi),f=Le.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&a(f,l,c.styleSheet,d,c.stylis),(Le.useInsertionEffect||Le.useLayoutEffect)(function(){if(!c.styleSheet.server)return a(f,l,c.styleSheet,d,c.stylis),function(){return o.removeStyles(f,c.styleSheet)}},[f,l,c.styleSheet,d,c.stylis]),null};function a(l,c,d,f,p){if(o.isStatic)o.renderStyles(l,sC,d,p);else{var y=_e(_e({},c),{theme:ax(c,f,s.defaultProps)});o.renderStyles(l,y,d,p)}}return Le.memo(s)}function Et(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=cl(Fr.apply(void 0,Oi([e],t,!1))),i=Wp(r);return new yx(i,r)}const kx={background:"#000000",text:"#ffffff",primary:"#FD5602",secondary:"#FE6E00",tertiary:"#FEDEBE",tertiaryTone:"#fedebea9",buttonBack:"F3C699",formBoxShadow:"-3px -3px 7px #404040, 2px 2px 5px rgba(200, 200, 200, 0.5)",inputBoxShadow:"inset 2px 2px 5px #EFEFEF, inset -5px -5px 10px #FCFCFC",vocabularyBack:"#ffffec",flagFirst:"#1e1e1e",flagSecond:"#fdda24",flagThird:"#EF4135",flagAddon:"#fdda24",backTone:"#555555",textTone:"#e6e6e6",textTone2:"#cccccc",primaryBackground:"#191919",secondaryBackground:"#333333",tertiaryBackground:"#4c4c4c",primaryText:"#ffffff",secondaryText:"#b3b3b3",tertiaryText:"#808080",highlight1:"#FF00FF",highlight2:"#FFA500",highlight3:"#0000FF",correctBack:"#70ff41",wrongback:"#DC143C",extraSmall:"0.9rem",small:"1rem",mediumSmall:"1.2rem",medium:"1.4rem",large:"1.6rem",extraLarge:"2rem",mega:"2.4rem",extraMega:"3rem",smallLineHeight:"1.2",mediumLineHeight:"1.3",mediumSmallLineHeight:"1.4",extraMediumLineHeight:"1.5",largeLineHeight:"1.6",extraLargeLineHeight:"1.8",smallLetterSpacing:"0.03rem",mediumLetterSpacing:"0.04rem",largeLetterSpacing:"0.05rem",extraLargeLetterSpacing:"0.06rem",megaLetterSpacing:"0.07rem",extraMegaLetterSpacing:"0.08rem"},MC={background:"#ffffff",text:"1e1e1e",buttonBack:"#0c76f0",primary:"#002EB8",secondary:"#0055a4dd",tertiary:"#809fff",tertiaryTone:"#80a0ffb5",formBoxShadow:"-3px -3px 7px #e8e8e8, 2px 2px 5px rgba(200, 200, 200, 0.5)",inputBoxShadow:"inset 2px 2px 5px #FCFCFC, inset -5px -5px 10px #737373",vocabularyBack:"#ffffdd",flagFirst:"#0055A4",flagSecond:"#FFFFFF",flagThird:"#EF4135",flagAddon:"#f5f5f5",backTone:"#e6e6e6",textTone:"#191919",textTone2:"#333333",primaryBackground:"#ffffff",secondaryBackground:"#f6f6f6",tertiaryBackground:"#cccccc",primaryText:"#333333",secondaryText:"#666666",tertiaryText:"#999999",highlight1:"#f5f3e0",highlight2:"#e0eaf1",highlight3:"#acc8e5",correctBack:"#70ff41",wrongback:"#DC143C",extraSmall:"0.9rem",small:"1rem",mediumSmall:"1.2rem",medium:"1.4rem",large:"1.6rem",extraLarge:"2rem",mega:"2.4rem",extraMega:"3rem",smallLineHeight:"1.2",mediumLineHeight:"1.3",mediumSmallLineHeight:"1.4",extraMediumLineHeight:"1.5",largeLineHeight:"1.6",extraLargeLineHeight:"1.8",smallLetterSpacing:"0.03rem",mediumLetterSpacing:"0.04rem",largeLetterSpacing:"0.05rem",extraLargeLetterSpacing:"0.06rem",megaLetterSpacing:"0.07rem",extraMegaLetterSpacing:"0.08rem"};/**
 * @remix-run/router v1.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function as(){return as=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},as.apply(this,arguments)}var Hn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Hn||(Hn={}));const Zm="popstate";function WC(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return ff("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:fl(i)}return HC(t,n,null,e)}function $e(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Vp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function UC(){return Math.random().toString(36).substr(2,8)}function eg(e,t){return{usr:e.state,key:e.key,idx:t}}function ff(e,t,n,r){return n===void 0&&(n=null),as({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Qi(t):t,{state:n,key:t&&t.key||r||UC()})}function fl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Qi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function HC(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Hn.Pop,l=null,c=d();c==null&&(c=0,s.replaceState(as({},s.state,{idx:c}),""));function d(){return(s.state||{idx:null}).idx}function f(){a=Hn.Pop;let k=d(),m=k==null?null:k-c;c=k,l&&l({action:a,location:x.location,delta:m})}function p(k,m){a=Hn.Push;let h=ff(x.location,k,m);n&&n(h,k),c=d()+1;let w=eg(h,c),C=x.createHref(h);try{s.pushState(w,"",C)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;i.location.assign(C)}o&&l&&l({action:a,location:x.location,delta:1})}function y(k,m){a=Hn.Replace;let h=ff(x.location,k,m);n&&n(h,k),c=d();let w=eg(h,c),C=x.createHref(h);s.replaceState(w,"",C),o&&l&&l({action:a,location:x.location,delta:0})}function v(k){let m=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof k=="string"?k:fl(k);return $e(m,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,m)}let x={get action(){return a},get location(){return e(i,s)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Zm,f),l=k,()=>{i.removeEventListener(Zm,f),l=null}},createHref(k){return t(i,k)},createURL:v,encodeLocation(k){let m=v(k);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:p,replace:y,go(k){return s.go(k)}};return x}var tg;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(tg||(tg={}));function VC(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Qi(t):t,i=Qp(r.pathname||"/",n);if(i==null)return null;let o=Cx(e);QC(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=t2(o[a],i2(i));return s}function Cx(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&($e(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=er([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&($e(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Cx(o.children,t,d,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:ZC(c,o.index),routesMeta:d})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of Ax(o.path))i(o,s,l)}),t}function Ax(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Ax(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function QC(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:e2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const qC=/^:\w+$/,GC=3,KC=2,YC=1,JC=10,XC=-2,ng=e=>e==="*";function ZC(e,t){let n=e.split("/"),r=n.length;return n.some(ng)&&(r+=XC),t&&(r+=KC),n.filter(i=>!ng(i)).reduce((i,o)=>i+(qC.test(o)?GC:o===""?YC:JC),r)}function e2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function t2(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",d=n2({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!d)return null;Object.assign(r,d.params);let f=a.route;o.push({params:r,pathname:er([i,d.pathname]),pathnameBase:l2(er([i,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(i=er([i,d.pathnameBase]))}return o}function n2(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=r2(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,f)=>{if(d==="*"){let p=a[f]||"";s=o.slice(0,o.length-p.length).replace(/(.)\/+$/,"$1")}return c[d]=o2(a[f]||"",d),c},{}),pathname:o,pathnameBase:s,pattern:e}}function r2(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Vp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function i2(e){try{return decodeURI(e)}catch(t){return Vp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function o2(e,t){try{return decodeURIComponent(e)}catch(n){return Vp(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Qp(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function s2(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Qi(e):e;return{pathname:n?n.startsWith("/")?n:a2(n,t):t,search:c2(r),hash:u2(i)}}function a2(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ku(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function jx(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ex(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Qi(e):(i=as({},e),$e(!i.pathname||!i.pathname.includes("?"),ku("?","pathname","search",i)),$e(!i.pathname||!i.pathname.includes("#"),ku("#","pathname","hash",i)),$e(!i.search||!i.search.includes("#"),ku("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let f=t.length-1;if(s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}a=f>=0?t[f]:"/"}let l=s2(i,a),c=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const er=e=>e.join("/").replace(/\/\/+/g,"/"),l2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),c2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,u2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function d2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Tx=["post","put","patch","delete"];new Set(Tx);const f2=["get",...Tx];new Set(f2);/**
 * React Router v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pl(){return pl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pl.apply(this,arguments)}const qp=S.createContext(null),p2=S.createContext(null),qi=S.createContext(null),sc=S.createContext(null),En=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Ox=S.createContext(null);function h2(e,t){let{relative:n}=t===void 0?{}:t;Ss()||$e(!1);let{basename:r,navigator:i}=S.useContext(qi),{hash:o,pathname:s,search:a}=$x(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:er([r,s])),i.createHref({pathname:l,search:a,hash:o})}function Ss(){return S.useContext(sc)!=null}function Gi(){return Ss()||$e(!1),S.useContext(sc).location}function Lx(e){S.useContext(qi).static||S.useLayoutEffect(e)}function Px(){let{isDataRoute:e}=S.useContext(En);return e?O2():m2()}function m2(){Ss()||$e(!1);let e=S.useContext(qp),{basename:t,navigator:n}=S.useContext(qi),{matches:r}=S.useContext(En),{pathname:i}=Gi(),o=JSON.stringify(jx(r).map(l=>l.pathnameBase)),s=S.useRef(!1);return Lx(()=>{s.current=!0}),S.useCallback(function(l,c){if(c===void 0&&(c={}),!s.current)return;if(typeof l=="number"){n.go(l);return}let d=Ex(l,JSON.parse(o),i,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:er([t,d.pathname])),(c.replace?n.replace:n.push)(d,c.state,c)},[t,n,o,i,e])}const g2=S.createContext(null);function y2(e){let t=S.useContext(En).outlet;return t&&S.createElement(g2.Provider,{value:e},t)}function sr(){let{matches:e}=S.useContext(En),t=e[e.length-1];return t?t.params:{}}function $x(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=S.useContext(En),{pathname:i}=Gi(),o=JSON.stringify(jx(r).map(s=>s.pathnameBase));return S.useMemo(()=>Ex(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function v2(e,t){return x2(e,t)}function x2(e,t,n){Ss()||$e(!1);let{navigator:r}=S.useContext(qi),{matches:i}=S.useContext(En),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=Gi(),c;if(t){var d;let x=typeof t=="string"?Qi(t):t;a==="/"||(d=x.pathname)!=null&&d.startsWith(a)||$e(!1),c=x}else c=l;let f=c.pathname||"/",p=a==="/"?f:f.slice(a.length)||"/",y=VC(e,{pathname:p}),v=C2(y&&y.map(x=>Object.assign({},x,{params:Object.assign({},s,x.params),pathname:er([a,r.encodeLocation?r.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?a:er([a,r.encodeLocation?r.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,n);return t&&v?S.createElement(sc.Provider,{value:{location:pl({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Hn.Pop}},v):v}function w2(){let e=T2(),t=d2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:i},n):null,o)}const b2=S.createElement(w2,null);class S2 extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?S.createElement(En.Provider,{value:this.props.routeContext},S.createElement(Ox.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function k2(e){let{routeContext:t,match:n,children:r}=e,i=S.useContext(qp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(En.Provider,{value:t},r)}function C2(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,s=(r=n)==null?void 0:r.errors;if(s!=null){let a=o.findIndex(l=>l.route.id&&(s==null?void 0:s[l.route.id]));a>=0||$e(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,l,c)=>{let d=l.route.id?s==null?void 0:s[l.route.id]:null,f=null;n&&(f=l.route.errorElement||b2);let p=t.concat(o.slice(0,c+1)),y=()=>{let v;return d?v=f:l.route.Component?v=S.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,S.createElement(k2,{match:l,routeContext:{outlet:a,matches:p,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||c===0)?S.createElement(S2,{location:n.location,revalidation:n.revalidation,component:f,error:d,children:y(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):y()},null)}var pf;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(pf||(pf={}));var ls;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(ls||(ls={}));function A2(e){let t=S.useContext(qp);return t||$e(!1),t}function j2(e){let t=S.useContext(p2);return t||$e(!1),t}function E2(e){let t=S.useContext(En);return t||$e(!1),t}function Rx(e){let t=E2(),n=t.matches[t.matches.length-1];return n.route.id||$e(!1),n.route.id}function T2(){var e;let t=S.useContext(Ox),n=j2(ls.UseRouteError),r=Rx(ls.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function O2(){let{router:e}=A2(pf.UseNavigateStable),t=Rx(ls.UseNavigateStable),n=S.useRef(!1);return Lx(()=>{n.current=!0}),S.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,pl({fromRouteId:t},o)))},[e,t])}function L2(e){return y2(e.context)}function re(e){$e(!1)}function P2(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Hn.Pop,navigator:o,static:s=!1}=e;Ss()&&$e(!1);let a=t.replace(/^\/*/,"/"),l=S.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=Qi(r));let{pathname:c="/",search:d="",hash:f="",state:p=null,key:y="default"}=r,v=S.useMemo(()=>{let x=Qp(c,a);return x==null?null:{location:{pathname:x,search:d,hash:f,state:p,key:y},navigationType:i}},[a,c,d,f,p,y,i]);return v==null?null:S.createElement(qi.Provider,{value:l},S.createElement(sc.Provider,{children:n,value:v}))}function $2(e){let{children:t,location:n}=e;return v2(hf(t),n)}var rg;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(rg||(rg={}));new Promise(()=>{});function hf(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,i)=>{if(!S.isValidElement(r))return;let o=[...t,i];if(r.type===S.Fragment){n.push.apply(n,hf(r.props.children,o));return}r.type!==re&&$e(!1),!r.props.index||!r.props.children||$e(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=hf(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mf(){return mf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mf.apply(this,arguments)}function R2(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function z2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function N2(e,t){return e.button===0&&(!t||t==="_self")&&!z2(e)}const F2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],D2="startTransition",ig=Ob[D2];function I2(e){let{basename:t,children:n,future:r,window:i}=e,o=S.useRef();o.current==null&&(o.current=WC({window:i,v5Compat:!0}));let s=o.current,[a,l]=S.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},d=S.useCallback(f=>{c&&ig?ig(()=>l(f)):l(f)},[l,c]);return S.useLayoutEffect(()=>s.listen(d),[s,d]),S.createElement(P2,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s})}const B2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ct=S.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:c,preventScrollReset:d}=t,f=R2(t,F2),{basename:p}=S.useContext(qi),y,v=!1;if(typeof c=="string"&&_2.test(c)&&(y=c,B2))try{let h=new URL(window.location.href),w=c.startsWith("//")?new URL(h.protocol+c):new URL(c),C=Qp(w.pathname,p);w.origin===h.origin&&C!=null?c=C+w.search+w.hash:v=!0}catch{}let x=h2(c,{relative:i}),k=M2(c,{replace:s,state:a,target:l,preventScrollReset:d,relative:i});function m(h){r&&r(h),h.defaultPrevented||k(h)}return S.createElement("a",mf({},f,{href:y||x,onClick:v||o?r:m,ref:n,target:l}))});var og;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(og||(og={}));var sg;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(sg||(sg={}));function M2(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s}=t===void 0?{}:t,a=Px(),l=Gi(),c=$x(e,{relative:s});return S.useCallback(d=>{if(N2(d,n)){d.preventDefault();let f=r!==void 0?r:fl(l)===fl(c);a(e,{replace:f,state:i,preventScrollReset:o,relative:s})}},[l,a,c,r,i,n,e,o,s])}var zx={exports:{}},Nx={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ni=S;function W2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var U2=typeof Object.is=="function"?Object.is:W2,H2=Ni.useState,V2=Ni.useEffect,Q2=Ni.useLayoutEffect,q2=Ni.useDebugValue;function G2(e,t){var n=t(),r=H2({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return Q2(function(){i.value=n,i.getSnapshot=t,Cu(i)&&o({inst:i})},[e,n,t]),V2(function(){return Cu(i)&&o({inst:i}),e(function(){Cu(i)&&o({inst:i})})},[e]),q2(n),n}function Cu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!U2(e,n)}catch{return!0}}function K2(e,t){return t()}var Y2=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?K2:G2;Nx.useSyncExternalStore=Ni.useSyncExternalStore!==void 0?Ni.useSyncExternalStore:Y2;zx.exports=Nx;var J2=zx.exports,Fx={exports:{}},Dx={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ac=S,X2=J2;function Z2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var eA=typeof Object.is=="function"?Object.is:Z2,tA=X2.useSyncExternalStore,nA=ac.useRef,rA=ac.useEffect,iA=ac.useMemo,oA=ac.useDebugValue;Dx.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=nA(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=iA(function(){function l(y){if(!c){if(c=!0,d=y,y=r(y),i!==void 0&&s.hasValue){var v=s.value;if(i(v,y))return f=v}return f=y}if(v=f,eA(d,y))return v;var x=r(y);return i!==void 0&&i(v,x)?v:(d=y,f=x)}var c=!1,d,f,p=n===void 0?null:n;return[function(){return l(t())},p===null?void 0:function(){return l(p())}]},[t,n,r,i]);var a=tA(e,o[0],o[1]);return rA(function(){s.hasValue=!0,s.value=a},[a]),oA(a),a};Fx.exports=Dx;var sA=Fx.exports;function aA(e){e()}let Ix=aA;const lA=e=>Ix=e,cA=()=>Ix,ag=Symbol.for(`react-redux-context-${S.version}`),lg=globalThis;function uA(){let e=lg[ag];return e||(e=S.createContext(null),lg[ag]=e),e}const ar=new Proxy({},new Proxy({},{get(e,t){const n=uA();return(r,...i)=>Reflect[t](n,...i)}}));function Gp(e=ar){return function(){return S.useContext(e)}}const Bx=Gp(),dA=()=>{throw new Error("uSES not initialized!")};let _x=dA;const fA=e=>{_x=e},pA=(e,t)=>e===t;function hA(e=ar){const t=e===ar?Bx:Gp(e);return function(r,i={}){const{equalityFn:o=pA,stabilityCheck:s=void 0,noopCheck:a=void 0}=typeof i=="function"?{equalityFn:i}:i,{store:l,subscription:c,getServerState:d,stabilityCheck:f,noopCheck:p}=t();S.useRef(!0);const y=S.useCallback({[r.name](x){return r(x)}}[r.name],[r,f,s]),v=_x(c.addNestedSub,l.getState,d||l.getState,y,o);return S.useDebugValue(v),v}}const H=hA();var Mx={exports:{}},le={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ue=typeof Symbol=="function"&&Symbol.for,Kp=Ue?Symbol.for("react.element"):60103,Yp=Ue?Symbol.for("react.portal"):60106,lc=Ue?Symbol.for("react.fragment"):60107,cc=Ue?Symbol.for("react.strict_mode"):60108,uc=Ue?Symbol.for("react.profiler"):60114,dc=Ue?Symbol.for("react.provider"):60109,fc=Ue?Symbol.for("react.context"):60110,Jp=Ue?Symbol.for("react.async_mode"):60111,pc=Ue?Symbol.for("react.concurrent_mode"):60111,hc=Ue?Symbol.for("react.forward_ref"):60112,mc=Ue?Symbol.for("react.suspense"):60113,mA=Ue?Symbol.for("react.suspense_list"):60120,gc=Ue?Symbol.for("react.memo"):60115,yc=Ue?Symbol.for("react.lazy"):60116,gA=Ue?Symbol.for("react.block"):60121,yA=Ue?Symbol.for("react.fundamental"):60117,vA=Ue?Symbol.for("react.responder"):60118,xA=Ue?Symbol.for("react.scope"):60119;function Tt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Kp:switch(e=e.type,e){case Jp:case pc:case lc:case uc:case cc:case mc:return e;default:switch(e=e&&e.$$typeof,e){case fc:case hc:case yc:case gc:case dc:return e;default:return t}}case Yp:return t}}}function Wx(e){return Tt(e)===pc}le.AsyncMode=Jp;le.ConcurrentMode=pc;le.ContextConsumer=fc;le.ContextProvider=dc;le.Element=Kp;le.ForwardRef=hc;le.Fragment=lc;le.Lazy=yc;le.Memo=gc;le.Portal=Yp;le.Profiler=uc;le.StrictMode=cc;le.Suspense=mc;le.isAsyncMode=function(e){return Wx(e)||Tt(e)===Jp};le.isConcurrentMode=Wx;le.isContextConsumer=function(e){return Tt(e)===fc};le.isContextProvider=function(e){return Tt(e)===dc};le.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kp};le.isForwardRef=function(e){return Tt(e)===hc};le.isFragment=function(e){return Tt(e)===lc};le.isLazy=function(e){return Tt(e)===yc};le.isMemo=function(e){return Tt(e)===gc};le.isPortal=function(e){return Tt(e)===Yp};le.isProfiler=function(e){return Tt(e)===uc};le.isStrictMode=function(e){return Tt(e)===cc};le.isSuspense=function(e){return Tt(e)===mc};le.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===lc||e===pc||e===uc||e===cc||e===mc||e===mA||typeof e=="object"&&e!==null&&(e.$$typeof===yc||e.$$typeof===gc||e.$$typeof===dc||e.$$typeof===fc||e.$$typeof===hc||e.$$typeof===yA||e.$$typeof===vA||e.$$typeof===xA||e.$$typeof===gA)};le.typeOf=Tt;Mx.exports=le;var wA=Mx.exports,Ux=wA,bA={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},SA={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Hx={};Hx[Ux.ForwardRef]=bA;Hx[Ux.Memo]=SA;var ue={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp=Symbol.for("react.element"),Zp=Symbol.for("react.portal"),vc=Symbol.for("react.fragment"),xc=Symbol.for("react.strict_mode"),wc=Symbol.for("react.profiler"),bc=Symbol.for("react.provider"),Sc=Symbol.for("react.context"),kA=Symbol.for("react.server_context"),kc=Symbol.for("react.forward_ref"),Cc=Symbol.for("react.suspense"),Ac=Symbol.for("react.suspense_list"),jc=Symbol.for("react.memo"),Ec=Symbol.for("react.lazy"),CA=Symbol.for("react.offscreen"),Vx;Vx=Symbol.for("react.module.reference");function Bt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Xp:switch(e=e.type,e){case vc:case wc:case xc:case Cc:case Ac:return e;default:switch(e=e&&e.$$typeof,e){case kA:case Sc:case kc:case Ec:case jc:case bc:return e;default:return t}}case Zp:return t}}}ue.ContextConsumer=Sc;ue.ContextProvider=bc;ue.Element=Xp;ue.ForwardRef=kc;ue.Fragment=vc;ue.Lazy=Ec;ue.Memo=jc;ue.Portal=Zp;ue.Profiler=wc;ue.StrictMode=xc;ue.Suspense=Cc;ue.SuspenseList=Ac;ue.isAsyncMode=function(){return!1};ue.isConcurrentMode=function(){return!1};ue.isContextConsumer=function(e){return Bt(e)===Sc};ue.isContextProvider=function(e){return Bt(e)===bc};ue.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xp};ue.isForwardRef=function(e){return Bt(e)===kc};ue.isFragment=function(e){return Bt(e)===vc};ue.isLazy=function(e){return Bt(e)===Ec};ue.isMemo=function(e){return Bt(e)===jc};ue.isPortal=function(e){return Bt(e)===Zp};ue.isProfiler=function(e){return Bt(e)===wc};ue.isStrictMode=function(e){return Bt(e)===xc};ue.isSuspense=function(e){return Bt(e)===Cc};ue.isSuspenseList=function(e){return Bt(e)===Ac};ue.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===vc||e===wc||e===xc||e===Cc||e===Ac||e===CA||typeof e=="object"&&e!==null&&(e.$$typeof===Ec||e.$$typeof===jc||e.$$typeof===bc||e.$$typeof===Sc||e.$$typeof===kc||e.$$typeof===Vx||e.getModuleId!==void 0)};ue.typeOf=Bt;function AA(){const e=cA();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,o=n={callback:r,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){!i||t===null||(i=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}const cg={notify(){},get:()=>[]};function jA(e,t){let n,r=cg;function i(f){return l(),r.subscribe(f)}function o(){r.notify()}function s(){d.onStateChange&&d.onStateChange()}function a(){return!!n}function l(){n||(n=t?t.addNestedSub(s):e.subscribe(s),r=AA())}function c(){n&&(n(),n=void 0,r.clear(),r=cg)}const d={addNestedSub:i,notifyNestedSubs:o,handleChangeWrapper:s,isSubscribed:a,trySubscribe:l,tryUnsubscribe:c,getListeners:()=>r};return d}const EA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",TA=EA?S.useLayoutEffect:S.useEffect;function OA({store:e,context:t,children:n,serverState:r,stabilityCheck:i="once",noopCheck:o="once"}){const s=S.useMemo(()=>{const c=jA(e);return{store:e,subscription:c,getServerState:r?()=>r:void 0,stabilityCheck:i,noopCheck:o}},[e,r,i,o]),a=S.useMemo(()=>e.getState(),[e]);TA(()=>{const{subscription:c}=s;return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),a!==e.getState()&&c.notifyNestedSubs(),()=>{c.tryUnsubscribe(),c.onStateChange=void 0}},[s,a]);const l=t||ar;return Le.createElement(l.Provider,{value:s},n)}function Qx(e=ar){const t=e===ar?Bx:Gp(e);return function(){const{store:r}=t();return r}}const LA=Qx();function PA(e=ar){const t=e===ar?LA:Qx(e);return function(){return t().dispatch}}const fe=PA();fA(sA.useSyncExternalStoreWithSelector);lA(ex.unstable_batchedUpdates);function Ht(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function lr(e){return!!e&&!!e[ye]}function Cn(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===_A}(e)||Array.isArray(e)||!!e[gg]||!!(!((t=e.constructor)===null||t===void 0)&&t[gg])||eh(e)||th(e))}function Dr(e,t,n){n===void 0&&(n=!1),Ki(e)===0?(n?Object.keys:gi)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function Ki(e){var t=e[ye];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:eh(e)?2:th(e)?3:0}function mi(e,t){return Ki(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function $A(e,t){return Ki(e)===2?e.get(t):e[t]}function qx(e,t,n){var r=Ki(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function Gx(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function eh(e){return IA&&e instanceof Map}function th(e){return BA&&e instanceof Set}function wr(e){return e.o||e.t}function nh(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Yx(e);delete t[ye];for(var n=gi(t),r=0;r<n.length;r++){var i=n[r],o=t[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function rh(e,t){return t===void 0&&(t=!1),ih(e)||lr(e)||!Cn(e)||(Ki(e)>1&&(e.set=e.add=e.clear=e.delete=RA),Object.freeze(e),t&&Dr(e,function(n,r){return rh(r,!0)},!0)),e}function RA(){Ht(2)}function ih(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function ln(e){var t=xf[e];return t||Ht(18,e),t}function zA(e,t){xf[e]||(xf[e]=t)}function gf(){return cs}function Au(e,t){t&&(ln("Patches"),e.u=[],e.s=[],e.v=t)}function hl(e){yf(e),e.p.forEach(NA),e.p=null}function yf(e){e===cs&&(cs=e.l)}function ug(e){return cs={p:[],l:cs,h:e,m:!0,_:0}}function NA(e){var t=e[ye];t.i===0||t.i===1?t.j():t.g=!0}function ju(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||ln("ES5").S(t,e,r),r?(n[ye].P&&(hl(t),Ht(4)),Cn(e)&&(e=ml(t,e),t.l||gl(t,e)),t.u&&ln("Patches").M(n[ye].t,e,t.u,t.s)):e=ml(t,n,[]),hl(t),t.u&&t.v(t.u,t.s),e!==Kx?e:void 0}function ml(e,t,n){if(ih(t))return t;var r=t[ye];if(!r)return Dr(t,function(a,l){return dg(e,r,t,a,l,n)},!0),t;if(r.A!==e)return t;if(!r.P)return gl(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=nh(r.k):r.o,o=i,s=!1;r.i===3&&(o=new Set(i),i.clear(),s=!0),Dr(o,function(a,l){return dg(e,r,i,a,l,n,s)}),gl(e,i,!1),n&&e.u&&ln("Patches").N(r,n,e.u,e.s)}return r.o}function dg(e,t,n,r,i,o,s){if(lr(i)){var a=ml(e,i,o&&t&&t.i!==3&&!mi(t.R,r)?o.concat(r):void 0);if(qx(n,r,a),!lr(a))return;e.m=!1}else s&&n.add(i);if(Cn(i)&&!ih(i)){if(!e.h.D&&e._<1)return;ml(e,i),t&&t.A.l||gl(e,i)}}function gl(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&rh(t,n)}function Eu(e,t){var n=e[ye];return(n?wr(n):e)[t]}function fg(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Mn(e){e.P||(e.P=!0,e.l&&Mn(e.l))}function Tu(e){e.o||(e.o=nh(e.t))}function vf(e,t,n){var r=eh(t)?ln("MapSet").F(t,n):th(t)?ln("MapSet").T(t,n):e.O?function(i,o){var s=Array.isArray(i),a={i:s?1:0,A:o?o.A:gf(),P:!1,I:!1,R:{},l:o,t:i,k:null,o:null,j:null,C:!1},l=a,c=us;s&&(l=[a],c=Eo);var d=Proxy.revocable(l,c),f=d.revoke,p=d.proxy;return a.k=p,a.j=f,p}(t,n):ln("ES5").J(t,n);return(n?n.A:gf()).p.push(r),r}function FA(e){return lr(e)||Ht(22,e),function t(n){if(!Cn(n))return n;var r,i=n[ye],o=Ki(n);if(i){if(!i.P&&(i.i<4||!ln("ES5").K(i)))return i.t;i.I=!0,r=pg(n,o),i.I=!1}else r=pg(n,o);return Dr(r,function(s,a){i&&$A(i.t,s)===a||qx(r,s,t(a))}),o===3?new Set(r):r}(e)}function pg(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return nh(e)}function DA(){function e(o,s){var a=i[o];return a?a.enumerable=s:i[o]=a={configurable:!0,enumerable:s,get:function(){var l=this[ye];return us.get(l,o)},set:function(l){var c=this[ye];us.set(c,o,l)}},a}function t(o){for(var s=o.length-1;s>=0;s--){var a=o[s][ye];if(!a.P)switch(a.i){case 5:r(a)&&Mn(a);break;case 4:n(a)&&Mn(a)}}}function n(o){for(var s=o.t,a=o.k,l=gi(a),c=l.length-1;c>=0;c--){var d=l[c];if(d!==ye){var f=s[d];if(f===void 0&&!mi(s,d))return!0;var p=a[d],y=p&&p[ye];if(y?y.t!==f:!Gx(p,f))return!0}}var v=!!s[ye];return l.length!==gi(s).length+(v?0:1)}function r(o){var s=o.k;if(s.length!==o.t.length)return!0;var a=Object.getOwnPropertyDescriptor(s,s.length-1);if(a&&!a.get)return!0;for(var l=0;l<s.length;l++)if(!s.hasOwnProperty(l))return!0;return!1}var i={};zA("ES5",{J:function(o,s){var a=Array.isArray(o),l=function(d,f){if(d){for(var p=Array(f.length),y=0;y<f.length;y++)Object.defineProperty(p,""+y,e(y,!0));return p}var v=Yx(f);delete v[ye];for(var x=gi(v),k=0;k<x.length;k++){var m=x[k];v[m]=e(m,d||!!v[m].enumerable)}return Object.create(Object.getPrototypeOf(f),v)}(a,o),c={i:a?5:4,A:s?s.A:gf(),P:!1,I:!1,R:{},l:s,t:o,k:l,o:null,g:!1,C:!1};return Object.defineProperty(l,ye,{value:c,writable:!0}),l},S:function(o,s,a){a?lr(s)&&s[ye].A===o&&t(o.p):(o.u&&function l(c){if(c&&typeof c=="object"){var d=c[ye];if(d){var f=d.t,p=d.k,y=d.R,v=d.i;if(v===4)Dr(p,function(w){w!==ye&&(f[w]!==void 0||mi(f,w)?y[w]||l(p[w]):(y[w]=!0,Mn(d)))}),Dr(f,function(w){p[w]!==void 0||mi(p,w)||(y[w]=!1,Mn(d))});else if(v===5){if(r(d)&&(Mn(d),y.length=!0),p.length<f.length)for(var x=p.length;x<f.length;x++)y[x]=!1;else for(var k=f.length;k<p.length;k++)y[k]=!0;for(var m=Math.min(p.length,f.length),h=0;h<m;h++)p.hasOwnProperty(h)||(y[h]=!0),y[h]===void 0&&l(p[h])}}}}(o.p[0]),t(o.p))},K:function(o){return o.i===4?n(o):r(o)}})}var hg,cs,oh=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",IA=typeof Map<"u",BA=typeof Set<"u",mg=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Kx=oh?Symbol.for("immer-nothing"):((hg={})["immer-nothing"]=!0,hg),gg=oh?Symbol.for("immer-draftable"):"__$immer_draftable",ye=oh?Symbol.for("immer-state"):"__$immer_state",_A=""+Object.prototype.constructor,gi=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Yx=Object.getOwnPropertyDescriptors||function(e){var t={};return gi(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},xf={},us={get:function(e,t){if(t===ye)return e;var n=wr(e);if(!mi(n,t))return function(i,o,s){var a,l=fg(o,s);return l?"value"in l?l.value:(a=l.get)===null||a===void 0?void 0:a.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!Cn(r)?r:r===Eu(e.t,t)?(Tu(e),e.o[t]=vf(e.A.h,r,e)):r},has:function(e,t){return t in wr(e)},ownKeys:function(e){return Reflect.ownKeys(wr(e))},set:function(e,t,n){var r=fg(wr(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=Eu(wr(e),t),o=i==null?void 0:i[ye];if(o&&o.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(Gx(n,i)&&(n!==void 0||mi(e.t,t)))return!0;Tu(e),Mn(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return Eu(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Tu(e),Mn(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=wr(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Ht(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Ht(12)}},Eo={};Dr(us,function(e,t){Eo[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Eo.deleteProperty=function(e,t){return Eo.set.call(this,e,t,void 0)},Eo.set=function(e,t,n){return us.set.call(this,e[0],t,n,e[0])};var MA=function(){function e(n){var r=this;this.O=mg,this.D=!0,this.produce=function(i,o,s){if(typeof i=="function"&&typeof o!="function"){var a=o;o=i;var l=r;return function(x){var k=this;x===void 0&&(x=a);for(var m=arguments.length,h=Array(m>1?m-1:0),w=1;w<m;w++)h[w-1]=arguments[w];return l.produce(x,function(C){var A;return(A=o).call.apply(A,[k,C].concat(h))})}}var c;if(typeof o!="function"&&Ht(6),s!==void 0&&typeof s!="function"&&Ht(7),Cn(i)){var d=ug(r),f=vf(r,i,void 0),p=!0;try{c=o(f),p=!1}finally{p?hl(d):yf(d)}return typeof Promise<"u"&&c instanceof Promise?c.then(function(x){return Au(d,s),ju(x,d)},function(x){throw hl(d),x}):(Au(d,s),ju(c,d))}if(!i||typeof i!="object"){if((c=o(i))===void 0&&(c=i),c===Kx&&(c=void 0),r.D&&rh(c,!0),s){var y=[],v=[];ln("Patches").M(i,c,y,v),s(y,v)}return c}Ht(21,i)},this.produceWithPatches=function(i,o){if(typeof i=="function")return function(c){for(var d=arguments.length,f=Array(d>1?d-1:0),p=1;p<d;p++)f[p-1]=arguments[p];return r.produceWithPatches(c,function(y){return i.apply(void 0,[y].concat(f))})};var s,a,l=r.produce(i,o,function(c,d){s=c,a=d});return typeof Promise<"u"&&l instanceof Promise?l.then(function(c){return[c,s,a]}):[l,s,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){Cn(n)||Ht(8),lr(n)&&(n=FA(n));var r=ug(this),i=vf(this,n,void 0);return i[ye].C=!0,yf(r),i},t.finishDraft=function(n,r){var i=n&&n[ye],o=i.A;return Au(o,r),ju(void 0,o)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!mg&&Ht(20),this.O=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var o=r[i];if(o.path.length===0&&o.op==="replace"){n=o.value;break}}i>-1&&(r=r.slice(i+1));var s=ln("Patches").$;return lr(n)?s(n,r):this.produce(n,function(a){return s(a,r)})},e}(),Ct=new MA,Jx=Ct.produce;Ct.produceWithPatches.bind(Ct);Ct.setAutoFreeze.bind(Ct);Ct.setUseProxies.bind(Ct);Ct.applyPatches.bind(Ct);Ct.createDraft.bind(Ct);Ct.finishDraft.bind(Ct);function ds(e){"@babel/helpers - typeof";return ds=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ds(e)}function WA(e,t){if(ds(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ds(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function UA(e){var t=WA(e,"string");return ds(t)==="symbol"?t:String(t)}function HA(e,t,n){return t=UA(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function yg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function vg(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yg(Object(n),!0).forEach(function(r){HA(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Xe(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var xg=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Ou=function(){return Math.random().toString(36).substring(7).split("").join(".")},yl={INIT:"@@redux/INIT"+Ou(),REPLACE:"@@redux/REPLACE"+Ou(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Ou()}};function VA(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Xx(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Xe(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Xe(1));return n(Xx)(e,t)}if(typeof e!="function")throw new Error(Xe(2));var i=e,o=t,s=[],a=s,l=!1;function c(){a===s&&(a=s.slice())}function d(){if(l)throw new Error(Xe(3));return o}function f(x){if(typeof x!="function")throw new Error(Xe(4));if(l)throw new Error(Xe(5));var k=!0;return c(),a.push(x),function(){if(k){if(l)throw new Error(Xe(6));k=!1,c();var h=a.indexOf(x);a.splice(h,1),s=null}}}function p(x){if(!VA(x))throw new Error(Xe(7));if(typeof x.type>"u")throw new Error(Xe(8));if(l)throw new Error(Xe(9));try{l=!0,o=i(o,x)}finally{l=!1}for(var k=s=a,m=0;m<k.length;m++){var h=k[m];h()}return x}function y(x){if(typeof x!="function")throw new Error(Xe(10));i=x,p({type:yl.REPLACE})}function v(){var x,k=f;return x={subscribe:function(h){if(typeof h!="object"||h===null)throw new Error(Xe(11));function w(){h.next&&h.next(d())}w();var C=k(w);return{unsubscribe:C}}},x[xg]=function(){return this},x}return p({type:yl.INIT}),r={dispatch:p,subscribe:f,getState:d,replaceReducer:y},r[xg]=v,r}function QA(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:yl.INIT});if(typeof r>"u")throw new Error(Xe(12));if(typeof n(void 0,{type:yl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Xe(13))})}function qA(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var o=Object.keys(n),s;try{QA(n)}catch(a){s=a}return function(l,c){if(l===void 0&&(l={}),s)throw s;for(var d=!1,f={},p=0;p<o.length;p++){var y=o[p],v=n[y],x=l[y],k=v(x,c);if(typeof k>"u")throw c&&c.type,new Error(Xe(14));f[y]=k,d=d||k!==x}return d=d||o.length!==Object.keys(l).length,d?f:l}}function vl(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function GA(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),o=function(){throw new Error(Xe(15))},s={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},a=t.map(function(l){return l(s)});return o=vl.apply(void 0,a)(i.dispatch),vg(vg({},i),{},{dispatch:o})}}}function Zx(e){var t=function(r){var i=r.dispatch,o=r.getState;return function(s){return function(a){return typeof a=="function"?a(i,o,e):s(a)}}};return t}var e1=Zx();e1.withExtraArgument=Zx;const wg=e1;var t1=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),KA=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(c){return function(d){return l([c,d])}}function l(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=c[0]&2?i.return:c[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,c[1])).done)return o;switch(i=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){n.label=c[1];break}if(c[0]===6&&n.label<o[1]){n.label=o[1],o=c;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(c);break}o[2]&&n.ops.pop(),n.trys.pop();continue}c=t.call(e,n)}catch(d){c=[6,d],i=0}finally{r=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}},Fi=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},YA=Object.defineProperty,JA=Object.defineProperties,XA=Object.getOwnPropertyDescriptors,bg=Object.getOwnPropertySymbols,ZA=Object.prototype.hasOwnProperty,ej=Object.prototype.propertyIsEnumerable,Sg=function(e,t,n){return t in e?YA(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},tr=function(e,t){for(var n in t||(t={}))ZA.call(t,n)&&Sg(e,n,t[n]);if(bg)for(var r=0,i=bg(t);r<i.length;r++){var n=i[r];ej.call(t,n)&&Sg(e,n,t[n])}return e},Lu=function(e,t){return JA(e,XA(t))},tj=function(e,t,n){return new Promise(function(r,i){var o=function(l){try{a(n.next(l))}catch(c){i(c)}},s=function(l){try{a(n.throw(l))}catch(c){i(c)}},a=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(o,s)};a((n=n.apply(e,t)).next())})},nj=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?vl:vl.apply(null,arguments)};function rj(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var ij=function(e){t1(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Fi([void 0],n[0].concat(this)))):new(t.bind.apply(t,Fi([void 0],n.concat(this))))},t}(Array),oj=function(e){t1(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Fi([void 0],n[0].concat(this)))):new(t.bind.apply(t,Fi([void 0],n.concat(this))))},t}(Array);function wf(e){return Cn(e)?Jx(e,function(){}):e}function sj(e){return typeof e=="boolean"}function aj(){return function(t){return lj(t)}}function lj(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new ij;return n&&(sj(n)?r.push(wg):r.push(wg.withExtraArgument(n.extraArgument))),r}var cj=!0;function uj(e){var t=aj(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,o=n.middleware,s=o===void 0?t():o,a=n.devTools,l=a===void 0?!0:a,c=n.preloadedState,d=c===void 0?void 0:c,f=n.enhancers,p=f===void 0?void 0:f,y;if(typeof i=="function")y=i;else if(rj(i))y=qA(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var v=s;typeof v=="function"&&(v=v(t));var x=GA.apply(void 0,v),k=vl;l&&(k=nj(tr({trace:!cj},typeof l=="object"&&l)));var m=new oj(x),h=m;Array.isArray(p)?h=Fi([x],p):typeof p=="function"&&(h=p(m));var w=k.apply(void 0,h);return Xx(y,d,w)}function nr(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var o=t.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return tr(tr({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function n1(e){var t={},n=[],r,i={addCase:function(o,s){var a=typeof o=="string"?o:o.type;if(a in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[a]=s,i},addMatcher:function(o,s){return n.push({matcher:o,reducer:s}),i},addDefaultCase:function(o){return r=o,i}};return e(i),[t,n,r]}function dj(e){return typeof e=="function"}function fj(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?n1(t):[t,n,r],o=i[0],s=i[1],a=i[2],l;if(dj(e))l=function(){return wf(e())};else{var c=wf(e);l=function(){return c}}function d(f,p){f===void 0&&(f=l());var y=Fi([o[p.type]],s.filter(function(v){var x=v.matcher;return x(p)}).map(function(v){var x=v.reducer;return x}));return y.filter(function(v){return!!v}).length===0&&(y=[a]),y.reduce(function(v,x){if(x)if(lr(v)){var k=v,m=x(k,p);return m===void 0?v:m}else{if(Cn(v))return Jx(v,function(h){return x(h,p)});var m=x(v,p);if(m===void 0){if(v===null)return v;throw Error("A case reducer on a non-draftable value must not return undefined")}return m}return v},f)}return d.getInitialState=l,d}function pj(e,t){return e+"/"+t}function qe(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:wf(e.initialState),r=e.reducers||{},i=Object.keys(r),o={},s={},a={};i.forEach(function(d){var f=r[d],p=pj(t,d),y,v;"reducer"in f?(y=f.reducer,v=f.prepare):y=f,o[d]=y,s[p]=y,a[d]=v?nr(p,v):nr(p)});function l(){var d=typeof e.extraReducers=="function"?n1(e.extraReducers):[e.extraReducers],f=d[0],p=f===void 0?{}:f,y=d[1],v=y===void 0?[]:y,x=d[2],k=x===void 0?void 0:x,m=tr(tr({},p),s);return fj(n,function(h){for(var w in m)h.addCase(w,m[w]);for(var C=0,A=v;C<A.length;C++){var b=A[C];h.addMatcher(b.matcher,b.reducer)}k&&h.addDefaultCase(k)})}var c;return{name:t,reducer:function(d,f){return c||(c=l()),c(d,f)},actions:a,caseReducers:o,getInitialState:function(){return c||(c=l()),c.getInitialState()}}}var hj="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",mj=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=hj[Math.random()*64|0];return t},gj=["name","message","stack","code"],Pu=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),kg=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),yj=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=gj;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}},ke=function(){function e(t,n,r){var i=nr(t+"/fulfilled",function(c,d,f,p){return{payload:c,meta:Lu(tr({},p||{}),{arg:f,requestId:d,requestStatus:"fulfilled"})}}),o=nr(t+"/pending",function(c,d,f){return{payload:void 0,meta:Lu(tr({},f||{}),{arg:d,requestId:c,requestStatus:"pending"})}}),s=nr(t+"/rejected",function(c,d,f,p,y){return{payload:p,error:(r&&r.serializeError||yj)(c||"Rejected"),meta:Lu(tr({},y||{}),{arg:f,requestId:d,rejectedWithValue:!!p,requestStatus:"rejected",aborted:(c==null?void 0:c.name)==="AbortError",condition:(c==null?void 0:c.name)==="ConditionError"})}}),a=typeof AbortController<"u"?AbortController:function(){function c(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return c.prototype.abort=function(){},c}();function l(c){return function(d,f,p){var y=r!=null&&r.idGenerator?r.idGenerator(c):mj(),v=new a,x;function k(h){x=h,v.abort()}var m=function(){return tj(this,null,function(){var h,w,C,A,b,j,E;return KA(this,function(T){switch(T.label){case 0:return T.trys.push([0,4,,5]),A=(h=r==null?void 0:r.condition)==null?void 0:h.call(r,c,{getState:f,extra:p}),xj(A)?[4,A]:[3,2];case 1:A=T.sent(),T.label=2;case 2:if(A===!1||v.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return b=new Promise(function(O,L){return v.signal.addEventListener("abort",function(){return L({name:"AbortError",message:x||"Aborted"})})}),d(o(y,c,(w=r==null?void 0:r.getPendingMeta)==null?void 0:w.call(r,{requestId:y,arg:c},{getState:f,extra:p}))),[4,Promise.race([b,Promise.resolve(n(c,{dispatch:d,getState:f,extra:p,requestId:y,signal:v.signal,abort:k,rejectWithValue:function(O,L){return new Pu(O,L)},fulfillWithValue:function(O,L){return new kg(O,L)}})).then(function(O){if(O instanceof Pu)throw O;return O instanceof kg?i(O.payload,y,c,O.meta):i(O,y,c)})])];case 3:return C=T.sent(),[3,5];case 4:return j=T.sent(),C=j instanceof Pu?s(null,y,c,j.payload,j.meta):s(j,y,c),[3,5];case 5:return E=r&&!r.dispatchConditionRejection&&s.match(C)&&C.meta.condition,E||d(C),[2,C]}})})}();return Object.assign(m,{abort:k,requestId:y,arg:c,unwrap:function(){return m.then(vj)}})}}return Object.assign(l,{pending:o,rejected:s,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e}();function vj(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function xj(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var sh="listenerMiddleware";nr(sh+"/add");nr(sh+"/removeAll");nr(sh+"/remove");var Cg;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);DA();function r1(e,t){return function(){return e.apply(t,arguments)}}const{toString:wj}=Object.prototype,{getPrototypeOf:ah}=Object,Tc=(e=>t=>{const n=wj.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),un=e=>(e=e.toLowerCase(),t=>Tc(t)===e),Oc=e=>t=>typeof t===e,{isArray:Yi}=Array,fs=Oc("undefined");function bj(e){return e!==null&&!fs(e)&&e.constructor!==null&&!fs(e.constructor)&&zt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const i1=un("ArrayBuffer");function Sj(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&i1(e.buffer),t}const kj=Oc("string"),zt=Oc("function"),o1=Oc("number"),Lc=e=>e!==null&&typeof e=="object",Cj=e=>e===!0||e===!1,Sa=e=>{if(Tc(e)!=="object")return!1;const t=ah(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Aj=un("Date"),jj=un("File"),Ej=un("Blob"),Tj=un("FileList"),Oj=e=>Lc(e)&&zt(e.pipe),Lj=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||zt(e.append)&&((t=Tc(e))==="formdata"||t==="object"&&zt(e.toString)&&e.toString()==="[object FormData]"))},Pj=un("URLSearchParams"),$j=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ks(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Yi(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let a;for(r=0;r<s;r++)a=o[r],t.call(null,e[a],a,e)}}function s1(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const a1=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),l1=e=>!fs(e)&&e!==a1;function bf(){const{caseless:e}=l1(this)&&this||{},t={},n=(r,i)=>{const o=e&&s1(t,i)||i;Sa(t[o])&&Sa(r)?t[o]=bf(t[o],r):Sa(r)?t[o]=bf({},r):Yi(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&ks(arguments[r],n);return t}const Rj=(e,t,n,{allOwnKeys:r}={})=>(ks(t,(i,o)=>{n&&zt(i)?e[o]=r1(i,n):e[o]=i},{allOwnKeys:r}),e),zj=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Nj=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Fj=(e,t,n,r)=>{let i,o,s;const a={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!r||r(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=n!==!1&&ah(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Dj=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Ij=e=>{if(!e)return null;if(Yi(e))return e;let t=e.length;if(!o1(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Bj=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ah(Uint8Array)),_j=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},Mj=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Wj=un("HTMLFormElement"),Uj=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Ag=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Hj=un("RegExp"),c1=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};ks(n,(i,o)=>{t(i,o,e)!==!1&&(r[o]=i)}),Object.defineProperties(e,r)},Vj=e=>{c1(e,(t,n)=>{if(zt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(zt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Qj=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Yi(e)?r(e):r(String(e).split(t)),n},qj=()=>{},Gj=(e,t)=>(e=+e,Number.isFinite(e)?e:t),$u="abcdefghijklmnopqrstuvwxyz",jg="0123456789",u1={DIGIT:jg,ALPHA:$u,ALPHA_DIGIT:$u+$u.toUpperCase()+jg},Kj=(e=16,t=u1.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Yj(e){return!!(e&&zt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Jj=e=>{const t=new Array(10),n=(r,i)=>{if(Lc(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=Yi(r)?[]:{};return ks(r,(s,a)=>{const l=n(s,i+1);!fs(l)&&(o[a]=l)}),t[i]=void 0,o}}return r};return n(e,0)},Xj=un("AsyncFunction"),Zj=e=>e&&(Lc(e)||zt(e))&&zt(e.then)&&zt(e.catch),R={isArray:Yi,isArrayBuffer:i1,isBuffer:bj,isFormData:Lj,isArrayBufferView:Sj,isString:kj,isNumber:o1,isBoolean:Cj,isObject:Lc,isPlainObject:Sa,isUndefined:fs,isDate:Aj,isFile:jj,isBlob:Ej,isRegExp:Hj,isFunction:zt,isStream:Oj,isURLSearchParams:Pj,isTypedArray:Bj,isFileList:Tj,forEach:ks,merge:bf,extend:Rj,trim:$j,stripBOM:zj,inherits:Nj,toFlatObject:Fj,kindOf:Tc,kindOfTest:un,endsWith:Dj,toArray:Ij,forEachEntry:_j,matchAll:Mj,isHTMLForm:Wj,hasOwnProperty:Ag,hasOwnProp:Ag,reduceDescriptors:c1,freezeMethods:Vj,toObjectSet:Qj,toCamelCase:Uj,noop:qj,toFiniteNumber:Gj,findKey:s1,global:a1,isContextDefined:l1,ALPHABET:u1,generateString:Kj,isSpecCompliantForm:Yj,toJSONObject:Jj,isAsyncFn:Xj,isThenable:Zj};function ie(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}R.inherits(ie,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:R.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const d1=ie.prototype,f1={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{f1[e]={value:e}});Object.defineProperties(ie,f1);Object.defineProperty(d1,"isAxiosError",{value:!0});ie.from=(e,t,n,r,i,o)=>{const s=Object.create(d1);return R.toFlatObject(e,s,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),ie.call(s,e.message,t,n,r,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const eE=null;function Sf(e){return R.isPlainObject(e)||R.isArray(e)}function p1(e){return R.endsWith(e,"[]")?e.slice(0,-2):e}function Eg(e,t,n){return e?e.concat(t).map(function(i,o){return i=p1(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function tE(e){return R.isArray(e)&&!e.some(Sf)}const nE=R.toFlatObject(R,{},null,function(t){return/^is[A-Z]/.test(t)});function Pc(e,t,n){if(!R.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=R.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,k){return!R.isUndefined(k[x])});const r=n.metaTokens,i=n.visitor||d,o=n.dots,s=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&R.isSpecCompliantForm(t);if(!R.isFunction(i))throw new TypeError("visitor must be a function");function c(v){if(v===null)return"";if(R.isDate(v))return v.toISOString();if(!l&&R.isBlob(v))throw new ie("Blob is not supported. Use a Buffer instead.");return R.isArrayBuffer(v)||R.isTypedArray(v)?l&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function d(v,x,k){let m=v;if(v&&!k&&typeof v=="object"){if(R.endsWith(x,"{}"))x=r?x:x.slice(0,-2),v=JSON.stringify(v);else if(R.isArray(v)&&tE(v)||(R.isFileList(v)||R.endsWith(x,"[]"))&&(m=R.toArray(v)))return x=p1(x),m.forEach(function(w,C){!(R.isUndefined(w)||w===null)&&t.append(s===!0?Eg([x],C,o):s===null?x:x+"[]",c(w))}),!1}return Sf(v)?!0:(t.append(Eg(k,x,o),c(v)),!1)}const f=[],p=Object.assign(nE,{defaultVisitor:d,convertValue:c,isVisitable:Sf});function y(v,x){if(!R.isUndefined(v)){if(f.indexOf(v)!==-1)throw Error("Circular reference detected in "+x.join("."));f.push(v),R.forEach(v,function(m,h){(!(R.isUndefined(m)||m===null)&&i.call(t,m,R.isString(h)?h.trim():h,x,p))===!0&&y(m,x?x.concat(h):[h])}),f.pop()}}if(!R.isObject(e))throw new TypeError("data must be an object");return y(e),t}function Tg(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function lh(e,t){this._pairs=[],e&&Pc(e,this,t)}const h1=lh.prototype;h1.append=function(t,n){this._pairs.push([t,n])};h1.toString=function(t){const n=t?function(r){return t.call(this,r,Tg)}:Tg;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function rE(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function m1(e,t,n){if(!t)return e;const r=n&&n.encode||rE,i=n&&n.serialize;let o;if(i?o=i(t,n):o=R.isURLSearchParams(t)?t.toString():new lh(t,n).toString(r),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class iE{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){R.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Og=iE,g1={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},oE=typeof URLSearchParams<"u"?URLSearchParams:lh,sE=typeof FormData<"u"?FormData:null,aE=typeof Blob<"u"?Blob:null,lE=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),cE=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),rn={isBrowser:!0,classes:{URLSearchParams:oE,FormData:sE,Blob:aE},isStandardBrowserEnv:lE,isStandardBrowserWebWorkerEnv:cE,protocols:["http","https","file","blob","url","data"]};function uE(e,t){return Pc(e,new rn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return rn.isNode&&R.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function dE(e){return R.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function fE(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function y1(e){function t(n,r,i,o){let s=n[o++];const a=Number.isFinite(+s),l=o>=n.length;return s=!s&&R.isArray(i)?i.length:s,l?(R.hasOwnProp(i,s)?i[s]=[i[s],r]:i[s]=r,!a):((!i[s]||!R.isObject(i[s]))&&(i[s]=[]),t(n,r,i[s],o)&&R.isArray(i[s])&&(i[s]=fE(i[s])),!a)}if(R.isFormData(e)&&R.isFunction(e.entries)){const n={};return R.forEachEntry(e,(r,i)=>{t(dE(r),i,n,0)}),n}return null}const pE={"Content-Type":void 0};function hE(e,t,n){if(R.isString(e))try{return(t||JSON.parse)(e),R.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const $c={transitional:g1,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=R.isObject(t);if(o&&R.isHTMLForm(t)&&(t=new FormData(t)),R.isFormData(t))return i&&i?JSON.stringify(y1(t)):t;if(R.isArrayBuffer(t)||R.isBuffer(t)||R.isStream(t)||R.isFile(t)||R.isBlob(t))return t;if(R.isArrayBufferView(t))return t.buffer;if(R.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return uE(t,this.formSerializer).toString();if((a=R.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Pc(a?{"files[]":t}:t,l&&new l,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),hE(t)):t}],transformResponse:[function(t){const n=this.transitional||$c.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&R.isString(t)&&(r&&!this.responseType||i)){const s=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(a){if(s)throw a.name==="SyntaxError"?ie.from(a,ie.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:rn.classes.FormData,Blob:rn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};R.forEach(["delete","get","head"],function(t){$c.headers[t]={}});R.forEach(["post","put","patch"],function(t){$c.headers[t]=R.merge(pE)});const ch=$c,mE=R.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),gE=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),n=s.substring(0,i).trim().toLowerCase(),r=s.substring(i+1).trim(),!(!n||t[n]&&mE[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Lg=Symbol("internals");function vo(e){return e&&String(e).trim().toLowerCase()}function ka(e){return e===!1||e==null?e:R.isArray(e)?e.map(ka):String(e)}function yE(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const vE=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ru(e,t,n,r,i){if(R.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!R.isString(t)){if(R.isString(r))return t.indexOf(r)!==-1;if(R.isRegExp(r))return r.test(t)}}function xE(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function wE(e,t){const n=R.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,s){return this[r].call(this,t,i,o,s)},configurable:!0})})}class Rc{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(a,l,c){const d=vo(l);if(!d)throw new Error("header name must be a non-empty string");const f=R.findKey(i,d);(!f||i[f]===void 0||c===!0||c===void 0&&i[f]!==!1)&&(i[f||l]=ka(a))}const s=(a,l)=>R.forEach(a,(c,d)=>o(c,d,l));return R.isPlainObject(t)||t instanceof this.constructor?s(t,n):R.isString(t)&&(t=t.trim())&&!vE(t)?s(gE(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=vo(t),t){const r=R.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return yE(i);if(R.isFunction(n))return n.call(this,i,r);if(R.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=vo(t),t){const r=R.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Ru(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(s){if(s=vo(s),s){const a=R.findKey(r,s);a&&(!n||Ru(r,r[a],a,n))&&(delete r[a],i=!0)}}return R.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||Ru(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return R.forEach(this,(i,o)=>{const s=R.findKey(r,o);if(s){n[s]=ka(i),delete n[o];return}const a=t?xE(o):String(o).trim();a!==o&&delete n[o],n[a]=ka(i),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return R.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&R.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Lg]=this[Lg]={accessors:{}}).accessors,i=this.prototype;function o(s){const a=vo(s);r[a]||(wE(i,s),r[a]=!0)}return R.isArray(t)?t.forEach(o):o(t),this}}Rc.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);R.freezeMethods(Rc.prototype);R.freezeMethods(Rc);const xn=Rc;function zu(e,t){const n=this||ch,r=t||n,i=xn.from(r.headers);let o=r.data;return R.forEach(e,function(a){o=a.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function v1(e){return!!(e&&e.__CANCEL__)}function Cs(e,t,n){ie.call(this,e??"canceled",ie.ERR_CANCELED,t,n),this.name="CanceledError"}R.inherits(Cs,ie,{__CANCEL__:!0});function bE(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new ie("Request failed with status code "+n.status,[ie.ERR_BAD_REQUEST,ie.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const SE=rn.isStandardBrowserEnv?function(){return{write:function(n,r,i,o,s,a){const l=[];l.push(n+"="+encodeURIComponent(r)),R.isNumber(i)&&l.push("expires="+new Date(i).toGMTString()),R.isString(o)&&l.push("path="+o),R.isString(s)&&l.push("domain="+s),a===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function kE(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function CE(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function x1(e,t){return e&&!kE(t)?CE(e,t):t}const AE=rn.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let s=o;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(s){const a=R.isString(s)?i(s):s;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function jE(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function EE(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,s;return t=t!==void 0?t:1e3,function(l){const c=Date.now(),d=r[o];s||(s=c),n[i]=l,r[i]=c;let f=o,p=0;for(;f!==i;)p+=n[f++],f=f%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),c-s<t)return;const y=d&&c-d;return y?Math.round(p*1e3/y):void 0}}function Pg(e,t){let n=0;const r=EE(50,250);return i=>{const o=i.loaded,s=i.lengthComputable?i.total:void 0,a=o-n,l=r(a),c=o<=s;n=o;const d={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:l||void 0,estimated:l&&s&&c?(s-o)/l:void 0,event:i};d[t?"download":"upload"]=!0,e(d)}}const TE=typeof XMLHttpRequest<"u",OE=TE&&function(e){return new Promise(function(n,r){let i=e.data;const o=xn.from(e.headers).normalize(),s=e.responseType;let a;function l(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}R.isFormData(i)&&(rn.isStandardBrowserEnv||rn.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(y+":"+v))}const d=x1(e.baseURL,e.url);c.open(e.method.toUpperCase(),m1(d,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function f(){if(!c)return;const y=xn.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),x={data:!s||s==="text"||s==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};bE(function(m){n(m),l()},function(m){r(m),l()},x),c=null}if("onloadend"in c?c.onloadend=f:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(f)},c.onabort=function(){c&&(r(new ie("Request aborted",ie.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new ie("Network Error",ie.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let v=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const x=e.transitional||g1;e.timeoutErrorMessage&&(v=e.timeoutErrorMessage),r(new ie(v,x.clarifyTimeoutError?ie.ETIMEDOUT:ie.ECONNABORTED,e,c)),c=null},rn.isStandardBrowserEnv){const y=(e.withCredentials||AE(d))&&e.xsrfCookieName&&SE.read(e.xsrfCookieName);y&&o.set(e.xsrfHeaderName,y)}i===void 0&&o.setContentType(null),"setRequestHeader"in c&&R.forEach(o.toJSON(),function(v,x){c.setRequestHeader(x,v)}),R.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),s&&s!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Pg(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Pg(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=y=>{c&&(r(!y||y.type?new Cs(null,e,c):y),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));const p=jE(d);if(p&&rn.protocols.indexOf(p)===-1){r(new ie("Unsupported protocol "+p+":",ie.ERR_BAD_REQUEST,e));return}c.send(i||null)})},Ca={http:eE,xhr:OE};R.forEach(Ca,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const LE={getAdapter:e=>{e=R.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=R.isString(n)?Ca[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new ie(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(R.hasOwnProp(Ca,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!R.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Ca};function Nu(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Cs(null,e)}function $g(e){return Nu(e),e.headers=xn.from(e.headers),e.data=zu.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),LE.getAdapter(e.adapter||ch.adapter)(e).then(function(r){return Nu(e),r.data=zu.call(e,e.transformResponse,r),r.headers=xn.from(r.headers),r},function(r){return v1(r)||(Nu(e),r&&r.response&&(r.response.data=zu.call(e,e.transformResponse,r.response),r.response.headers=xn.from(r.response.headers))),Promise.reject(r)})}const Rg=e=>e instanceof xn?e.toJSON():e;function Di(e,t){t=t||{};const n={};function r(c,d,f){return R.isPlainObject(c)&&R.isPlainObject(d)?R.merge.call({caseless:f},c,d):R.isPlainObject(d)?R.merge({},d):R.isArray(d)?d.slice():d}function i(c,d,f){if(R.isUndefined(d)){if(!R.isUndefined(c))return r(void 0,c,f)}else return r(c,d,f)}function o(c,d){if(!R.isUndefined(d))return r(void 0,d)}function s(c,d){if(R.isUndefined(d)){if(!R.isUndefined(c))return r(void 0,c)}else return r(void 0,d)}function a(c,d,f){if(f in t)return r(c,d);if(f in e)return r(void 0,c)}const l={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(c,d)=>i(Rg(c),Rg(d),!0)};return R.forEach(Object.keys(Object.assign({},e,t)),function(d){const f=l[d]||i,p=f(e[d],t[d],d);R.isUndefined(p)&&f!==a||(n[d]=p)}),n}const w1="1.4.0",uh={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{uh[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const zg={};uh.transitional=function(t,n,r){function i(o,s){return"[Axios v"+w1+"] Transitional option '"+o+"'"+s+(r?". "+r:"")}return(o,s,a)=>{if(t===!1)throw new ie(i(s," has been removed"+(n?" in "+n:"")),ie.ERR_DEPRECATED);return n&&!zg[s]&&(zg[s]=!0,console.warn(i(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,s,a):!0}};function PE(e,t,n){if(typeof e!="object")throw new ie("options must be an object",ie.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],s=t[o];if(s){const a=e[o],l=a===void 0||s(a,o,e);if(l!==!0)throw new ie("option "+o+" must be "+l,ie.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ie("Unknown option "+o,ie.ERR_BAD_OPTION)}}const kf={assertOptions:PE,validators:uh},zn=kf.validators;class xl{constructor(t){this.defaults=t,this.interceptors={request:new Og,response:new Og}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Di(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&kf.assertOptions(r,{silentJSONParsing:zn.transitional(zn.boolean),forcedJSONParsing:zn.transitional(zn.boolean),clarifyTimeoutError:zn.transitional(zn.boolean)},!1),i!=null&&(R.isFunction(i)?n.paramsSerializer={serialize:i}:kf.assertOptions(i,{encode:zn.function,serialize:zn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s;s=o&&R.merge(o.common,o[n.method]),s&&R.forEach(["delete","get","head","post","put","patch","common"],v=>{delete o[v]}),n.headers=xn.concat(s,o);const a=[];let l=!0;this.interceptors.request.forEach(function(x){typeof x.runWhen=="function"&&x.runWhen(n)===!1||(l=l&&x.synchronous,a.unshift(x.fulfilled,x.rejected))});const c=[];this.interceptors.response.forEach(function(x){c.push(x.fulfilled,x.rejected)});let d,f=0,p;if(!l){const v=[$g.bind(this),void 0];for(v.unshift.apply(v,a),v.push.apply(v,c),p=v.length,d=Promise.resolve(n);f<p;)d=d.then(v[f++],v[f++]);return d}p=a.length;let y=n;for(f=0;f<p;){const v=a[f++],x=a[f++];try{y=v(y)}catch(k){x.call(this,k);break}}try{d=$g.call(this,y)}catch(v){return Promise.reject(v)}for(f=0,p=c.length;f<p;)d=d.then(c[f++],c[f++]);return d}getUri(t){t=Di(this.defaults,t);const n=x1(t.baseURL,t.url);return m1(n,t.params,t.paramsSerializer)}}R.forEach(["delete","get","head","options"],function(t){xl.prototype[t]=function(n,r){return this.request(Di(r||{},{method:t,url:n,data:(r||{}).data}))}});R.forEach(["post","put","patch"],function(t){function n(r){return function(o,s,a){return this.request(Di(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}xl.prototype[t]=n(),xl.prototype[t+"Form"]=n(!0)});const Aa=xl;class dh{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(a=>{r.subscribe(a),o=a}).then(i);return s.cancel=function(){r.unsubscribe(o)},s},t(function(o,s,a){r.reason||(r.reason=new Cs(o,s,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new dh(function(i){t=i}),cancel:t}}}const $E=dh;function RE(e){return function(n){return e.apply(null,n)}}function zE(e){return R.isObject(e)&&e.isAxiosError===!0}const Cf={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Cf).forEach(([e,t])=>{Cf[t]=e});const NE=Cf;function b1(e){const t=new Aa(e),n=r1(Aa.prototype.request,t);return R.extend(n,Aa.prototype,t,{allOwnKeys:!0}),R.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return b1(Di(e,i))},n}const Fe=b1(ch);Fe.Axios=Aa;Fe.CanceledError=Cs;Fe.CancelToken=$E;Fe.isCancel=v1;Fe.VERSION=w1;Fe.toFormData=Pc;Fe.AxiosError=ie;Fe.Cancel=Fe.CanceledError;Fe.all=function(t){return Promise.all(t)};Fe.spread=RE;Fe.isAxiosError=zE;Fe.mergeConfig=Di;Fe.AxiosHeaders=xn;Fe.formToJSON=e=>y1(R.isHTMLForm(e)?new FormData(e):e);Fe.HttpStatusCode=NE;Fe.default=Fe;const FE=Fe,Ce=FE.create({baseURL:"http://localhost:5500"}),Io=ke("books/fetchBooksPreview",async e=>{try{return(await Ce.get("books")).data}catch(t){throw console.log(t),Error("Failed to fetch books preview")}}),ja=ke("books/fetchSelectedBook",async e=>{try{return(await Ce.get(`books/${e}`)).data}catch(t){throw console.log(t),Error("Failed to fetch selected")}}),DE={books:[],selectedBook:[],isLoading:!1,error:null},IE=qe({name:"books",initialState:DE,reducers:{},extraReducers:e=>{e.addCase(Io.pending,t=>{t.isLoading=!0}).addCase(Io.fulfilled,(t,n)=>{t.books=n.payload,t.isLoading=!1}).addCase(Io.rejected,(t,n)=>{t.error=n.error.message}).addCase(ja.pending,t=>{t.isLoading=!0}).addCase(ja.fulfilled,(t,n)=>{t.selectedBook=n.payload,t.isLoading=!1}).addCase(ja.rejected,(t,n)=>{t.error=n.error.message})}}),BE=IE.reducer,Bo=ke("vocabularyTopics/fetchVocabularyTopics",async()=>{try{return(await Ce.get("/vocabulary-topics")).data}catch{throw Error("Failed to fetch phrases for lesson")}}),_E={vocabularyTopics:[],isLoading:!1,error:null},ME=qe({name:"vocabularyTopics",initialState:_E,reducers:{},extraReducers:e=>{e.addCase(Bo.pending,t=>{t.isLoading=!0,t.error=null}).addCase(Bo.fulfilled,(t,n)=>{t.vocabularyTopics=n.payload,t.isLoading=!1}).addCase(Bo.rejected,(t,n)=>{t.isLoading=!1,t.error=n.error.message})}}),WE=ME.reducer;var S1={},k1={},zc={},C1={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0},n=t;e.default=n})(C1);var UE="Expected a function",Ng=0/0,HE="[object Symbol]",VE=/^\s+|\s+$/g,QE=/^[-+]0x[0-9a-f]+$/i,qE=/^0b[01]+$/i,GE=/^0o[0-7]+$/i,KE=parseInt,YE=typeof Ns=="object"&&Ns&&Ns.Object===Object&&Ns,JE=typeof self=="object"&&self&&self.Object===Object&&self,XE=YE||JE||Function("return this")(),ZE=Object.prototype,eT=ZE.toString,tT=Math.max,nT=Math.min,Fu=function(){return XE.Date.now()};function rT(e,t,n){var r,i,o,s,a,l,c=0,d=!1,f=!1,p=!0;if(typeof e!="function")throw new TypeError(UE);t=Fg(t)||0,Af(n)&&(d=!!n.leading,f="maxWait"in n,o=f?tT(Fg(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p);function y(b){var j=r,E=i;return r=i=void 0,c=b,s=e.apply(E,j),s}function v(b){return c=b,a=setTimeout(m,t),d?y(b):s}function x(b){var j=b-l,E=b-c,T=t-j;return f?nT(T,o-E):T}function k(b){var j=b-l,E=b-c;return l===void 0||j>=t||j<0||f&&E>=o}function m(){var b=Fu();if(k(b))return h(b);a=setTimeout(m,x(b))}function h(b){return a=void 0,p&&r?y(b):(r=i=void 0,s)}function w(){a!==void 0&&clearTimeout(a),c=0,r=l=i=a=void 0}function C(){return a===void 0?s:h(Fu())}function A(){var b=Fu(),j=k(b);if(r=arguments,i=this,l=b,j){if(a===void 0)return v(l);if(f)return a=setTimeout(m,t),y(l)}return a===void 0&&(a=setTimeout(m,t)),s}return A.cancel=w,A.flush=C,A}function Af(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function iT(e){return!!e&&typeof e=="object"}function oT(e){return typeof e=="symbol"||iT(e)&&eT.call(e)==HE}function Fg(e){if(typeof e=="number")return e;if(oT(e))return Ng;if(Af(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Af(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(VE,"");var n=qE.test(e);return n||GE.test(e)?KE(e.slice(2),n?2:8):QE.test(e)?Ng:+e}var sT=rT,A1={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var s=typeof o;if(s==="string"||s==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var a=n.apply(null,o);a&&r.push(a)}}else if(s==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var l in o)t.call(o,l)&&o[l]&&r.push(l)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(A1);var As=A1.exports;const Dg=Uf(As);var B={};Object.defineProperty(B,"__esModule",{value:!0});B.checkSpecKeys=B.checkNavigable=B.changeSlide=B.canUseDOM=B.canGoNext=void 0;B.clamp=j1;B.swipeStart=B.swipeMove=B.swipeEnd=B.slidesOnRight=B.slidesOnLeft=B.slideHandler=B.siblingDirection=B.safePreventDefault=B.lazyStartIndex=B.lazySlidesOnRight=B.lazySlidesOnLeft=B.lazyEndIndex=B.keyHandler=B.initializedState=B.getWidth=B.getTrackLeft=B.getTrackCSS=B.getTrackAnimateCSS=B.getTotalSlides=B.getSwipeDirection=B.getSlideCount=B.getRequiredLazySlides=B.getPreClones=B.getPostClones=B.getOnDemandLazySlides=B.getNavigableIndexes=B.getHeight=B.extractObject=void 0;var aT=lT(S);function lT(e){return e&&e.__esModule?e:{default:e}}function Ig(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ge(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ig(Object(n),!0).forEach(function(r){cT(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ig(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function cT(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j1(e,t,n){return Math.max(t,Math.min(e,n))}var Tr=function(t){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(t._reactName)||t.preventDefault()};B.safePreventDefault=Tr;var fh=function(t){for(var n=[],r=ph(t),i=hh(t),o=r;o<i;o++)t.lazyLoadedList.indexOf(o)<0&&n.push(o);return n};B.getOnDemandLazySlides=fh;var uT=function(t){for(var n=[],r=ph(t),i=hh(t),o=r;o<i;o++)n.push(o);return n};B.getRequiredLazySlides=uT;var ph=function(t){return t.currentSlide-E1(t)};B.lazyStartIndex=ph;var hh=function(t){return t.currentSlide+T1(t)};B.lazyEndIndex=hh;var E1=function(t){return t.centerMode?Math.floor(t.slidesToShow/2)+(parseInt(t.centerPadding)>0?1:0):0};B.lazySlidesOnLeft=E1;var T1=function(t){return t.centerMode?Math.floor((t.slidesToShow-1)/2)+1+(parseInt(t.centerPadding)>0?1:0):t.slidesToShow};B.lazySlidesOnRight=T1;var wl=function(t){return t&&t.offsetWidth||0};B.getWidth=wl;var mh=function(t){return t&&t.offsetHeight||0};B.getHeight=mh;var gh=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,o,s;return r=t.startX-t.curX,i=t.startY-t.curY,o=Math.atan2(i,r),s=Math.round(o*180/Math.PI),s<0&&(s=360-Math.abs(s)),s<=45&&s>=0||s<=360&&s>=315?"left":s>=135&&s<=225?"right":n===!0?s>=35&&s<=135?"up":"down":"vertical"};B.getSwipeDirection=gh;var yh=function(t){var n=!0;return t.infinite||(t.centerMode&&t.currentSlide>=t.slideCount-1||t.slideCount<=t.slidesToShow||t.currentSlide>=t.slideCount-t.slidesToShow)&&(n=!1),n};B.canGoNext=yh;var dT=function(t,n){var r={};return n.forEach(function(i){return r[i]=t[i]}),r};B.extractObject=dT;var fT=function(t){var n=aT.default.Children.count(t.children),r=t.listRef,i=Math.ceil(wl(r)),o=t.trackRef&&t.trackRef.node,s=Math.ceil(wl(o)),a;if(t.vertical)a=i;else{var l=t.centerMode&&parseInt(t.centerPadding)*2;typeof t.centerPadding=="string"&&t.centerPadding.slice(-1)==="%"&&(l*=i/100),a=Math.ceil((i-l)/t.slidesToShow)}var c=r&&mh(r.querySelector('[data-index="0"]')),d=c*t.slidesToShow,f=t.currentSlide===void 0?t.initialSlide:t.currentSlide;t.rtl&&t.currentSlide===void 0&&(f=n-1-t.initialSlide);var p=t.lazyLoadedList||[],y=fh(ge(ge({},t),{},{currentSlide:f,lazyLoadedList:p}));p=p.concat(y);var v={slideCount:n,slideWidth:a,listWidth:i,trackWidth:s,currentSlide:f,slideHeight:c,listHeight:d,lazyLoadedList:p};return t.autoplaying===null&&t.autoplay&&(v.autoplaying="playing"),v};B.initializedState=fT;var pT=function(t){var n=t.waitForAnimate,r=t.animating,i=t.fade,o=t.infinite,s=t.index,a=t.slideCount,l=t.lazyLoad,c=t.currentSlide,d=t.centerMode,f=t.slidesToScroll,p=t.slidesToShow,y=t.useCSS,v=t.lazyLoadedList;if(n&&r)return{};var x=s,k,m,h,w={},C={},A=o?s:j1(s,0,a-1);if(i){if(!o&&(s<0||s>=a))return{};s<0?x=s+a:s>=a&&(x=s-a),l&&v.indexOf(x)<0&&(v=v.concat(x)),w={animating:!0,currentSlide:x,lazyLoadedList:v,targetSlide:x},C={animating:!1,targetSlide:x}}else k=x,x<0?(k=x+a,o?a%f!==0&&(k=a-a%f):k=0):!yh(t)&&x>c?x=k=c:d&&x>=a?(x=o?a:a-1,k=o?0:a-1):x>=a&&(k=x-a,o?a%f!==0&&(k=0):k=a-p),!o&&x+p>=a&&(k=a-p),m=hs(ge(ge({},t),{},{slideIndex:x})),h=hs(ge(ge({},t),{},{slideIndex:k})),o||(m===h&&(x=k),m=h),l&&(v=v.concat(fh(ge(ge({},t),{},{currentSlide:x})))),y?(w={animating:!0,currentSlide:k,trackStyle:vh(ge(ge({},t),{},{left:m})),lazyLoadedList:v,targetSlide:A},C={animating:!1,currentSlide:k,trackStyle:ps(ge(ge({},t),{},{left:h})),swipeLeft:null,targetSlide:A}):w={currentSlide:k,trackStyle:ps(ge(ge({},t),{},{left:h})),lazyLoadedList:v,targetSlide:A};return{state:w,nextState:C}};B.slideHandler=pT;var hT=function(t,n){var r,i,o,s,a,l=t.slidesToScroll,c=t.slidesToShow,d=t.slideCount,f=t.currentSlide,p=t.targetSlide,y=t.lazyLoad,v=t.infinite;if(s=d%l!==0,r=s?0:(d-f)%l,n.message==="previous")o=r===0?l:c-r,a=f-o,y&&!v&&(i=f-o,a=i===-1?d-1:i),v||(a=p-l);else if(n.message==="next")o=r===0?l:r,a=f+o,y&&!v&&(a=(f+l)%d+r),v||(a=p+l);else if(n.message==="dots")a=n.index*n.slidesToScroll;else if(n.message==="children"){if(a=n.index,v){var x=$1(ge(ge({},t),{},{targetSlide:a}));a>n.currentSlide&&x==="left"?a=a-d:a<n.currentSlide&&x==="right"&&(a=a+d)}}else n.message==="index"&&(a=Number(n.index));return a};B.changeSlide=hT;var mT=function(t,n,r){return t.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":t.keyCode===37?r?"next":"previous":t.keyCode===39?r?"previous":"next":""};B.keyHandler=mT;var gT=function(t,n,r){return t.target.tagName==="IMG"&&Tr(t),!n||!r&&t.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:t.touches?t.touches[0].pageX:t.clientX,startY:t.touches?t.touches[0].pageY:t.clientY,curX:t.touches?t.touches[0].pageX:t.clientX,curY:t.touches?t.touches[0].pageY:t.clientY}}};B.swipeStart=gT;var yT=function(t,n){var r=n.scrolling,i=n.animating,o=n.vertical,s=n.swipeToSlide,a=n.verticalSwiping,l=n.rtl,c=n.currentSlide,d=n.edgeFriction,f=n.edgeDragged,p=n.onEdge,y=n.swiped,v=n.swiping,x=n.slideCount,k=n.slidesToScroll,m=n.infinite,h=n.touchObject,w=n.swipeEvent,C=n.listHeight,A=n.listWidth;if(!r){if(i)return Tr(t);o&&s&&a&&Tr(t);var b,j={},E=hs(n);h.curX=t.touches?t.touches[0].pageX:t.clientX,h.curY=t.touches?t.touches[0].pageY:t.clientY,h.swipeLength=Math.round(Math.sqrt(Math.pow(h.curX-h.startX,2)));var T=Math.round(Math.sqrt(Math.pow(h.curY-h.startY,2)));if(!a&&!v&&T>10)return{scrolling:!0};a&&(h.swipeLength=T);var O=(l?-1:1)*(h.curX>h.startX?1:-1);a&&(O=h.curY>h.startY?1:-1);var L=Math.ceil(x/k),P=gh(n.touchObject,a),$=h.swipeLength;return m||(c===0&&(P==="right"||P==="down")||c+1>=L&&(P==="left"||P==="up")||!yh(n)&&(P==="left"||P==="up"))&&($=h.swipeLength*d,f===!1&&p&&(p(P),j.edgeDragged=!0)),!y&&w&&(w(P),j.swiped=!0),o?b=E+$*(C/A)*O:l?b=E-$*O:b=E+$*O,a&&(b=E+$*O),j=ge(ge({},j),{},{touchObject:h,swipeLeft:b,trackStyle:ps(ge(ge({},n),{},{left:b}))}),Math.abs(h.curX-h.startX)<Math.abs(h.curY-h.startY)*.8||h.swipeLength>10&&(j.swiping=!0,Tr(t)),j}};B.swipeMove=yT;var vT=function(t,n){var r=n.dragging,i=n.swipe,o=n.touchObject,s=n.listWidth,a=n.touchThreshold,l=n.verticalSwiping,c=n.listHeight,d=n.swipeToSlide,f=n.scrolling,p=n.onSwipe,y=n.targetSlide,v=n.currentSlide,x=n.infinite;if(!r)return i&&Tr(t),{};var k=l?c/a:s/a,m=gh(o,l),h={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(f||!o.swipeLength)return h;if(o.swipeLength>k){Tr(t),p&&p(m);var w,C,A=x?v:y;switch(m){case"left":case"up":C=A+Ef(n),w=d?jf(n,C):C,h.currentDirection=0;break;case"right":case"down":C=A-Ef(n),w=d?jf(n,C):C,h.currentDirection=1;break;default:w=A}h.triggerSlideHandler=w}else{var b=hs(n);h.trackStyle=vh(ge(ge({},n),{},{left:b}))}return h};B.swipeEnd=vT;var O1=function(t){for(var n=t.infinite?t.slideCount*2:t.slideCount,r=t.infinite?t.slidesToShow*-1:0,i=t.infinite?t.slidesToShow*-1:0,o=[];r<n;)o.push(r),r=i+t.slidesToScroll,i+=Math.min(t.slidesToScroll,t.slidesToShow);return o};B.getNavigableIndexes=O1;var jf=function(t,n){var r=O1(t),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var o in r){if(n<r[o]){n=i;break}i=r[o]}return n};B.checkNavigable=jf;var Ef=function(t){var n=t.centerMode?t.slideWidth*Math.floor(t.slidesToShow/2):0;if(t.swipeToSlide){var r,i=t.listRef,o=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(o).every(function(l){if(t.vertical){if(l.offsetTop+mh(l)/2>t.swipeLeft*-1)return r=l,!1}else if(l.offsetLeft-n+wl(l)/2>t.swipeLeft*-1)return r=l,!1;return!0}),!r)return 0;var s=t.rtl===!0?t.slideCount-t.currentSlide:t.currentSlide,a=Math.abs(r.dataset.index-s)||1;return a}else return t.slidesToScroll};B.getSlideCount=Ef;var Nc=function(t,n){return n.reduce(function(r,i){return r&&t.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",t)};B.checkSpecKeys=Nc;var ps=function(t){Nc(t,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=t.slideCount+2*t.slidesToShow;t.vertical?r=i*t.slideHeight:n=P1(t)*t.slideWidth;var o={opacity:1,transition:"",WebkitTransition:""};if(t.useTransform){var s=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",a=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",l=t.vertical?"translateY("+t.left+"px)":"translateX("+t.left+"px)";o=ge(ge({},o),{},{WebkitTransform:s,transform:a,msTransform:l})}else t.vertical?o.top=t.left:o.left=t.left;return t.fade&&(o={opacity:1}),n&&(o.width=n),r&&(o.height=r),window&&!window.addEventListener&&window.attachEvent&&(t.vertical?o.marginTop=t.left+"px":o.marginLeft=t.left+"px"),o};B.getTrackCSS=ps;var vh=function(t){Nc(t,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=ps(t);return t.useTransform?(n.WebkitTransition="-webkit-transform "+t.speed+"ms "+t.cssEase,n.transition="transform "+t.speed+"ms "+t.cssEase):t.vertical?n.transition="top "+t.speed+"ms "+t.cssEase:n.transition="left "+t.speed+"ms "+t.cssEase,n};B.getTrackAnimateCSS=vh;var hs=function(t){if(t.unslick)return 0;Nc(t,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=t.slideIndex,r=t.trackRef,i=t.infinite,o=t.centerMode,s=t.slideCount,a=t.slidesToShow,l=t.slidesToScroll,c=t.slideWidth,d=t.listWidth,f=t.variableWidth,p=t.slideHeight,y=t.fade,v=t.vertical,x=0,k,m,h=0;if(y||t.slideCount===1)return 0;var w=0;if(i?(w=-_o(t),s%l!==0&&n+l>s&&(w=-(n>s?a-(n-s):s%l)),o&&(w+=parseInt(a/2))):(s%l!==0&&n+l>s&&(w=a-s%l),o&&(w=parseInt(a/2))),x=w*c,h=w*p,v?k=n*p*-1+h:k=n*c*-1+x,f===!0){var C,A=r&&r.node;if(C=n+_o(t),m=A&&A.childNodes[C],k=m?m.offsetLeft*-1:0,o===!0){C=i?n+_o(t):n,m=A&&A.children[C],k=0;for(var b=0;b<C;b++)k-=A&&A.children[b]&&A.children[b].offsetWidth;k-=parseInt(t.centerPadding),k+=m&&(d-m.offsetWidth)/2}}return k};B.getTrackLeft=hs;var _o=function(t){return t.unslick||!t.infinite?0:t.variableWidth?t.slideCount:t.slidesToShow+(t.centerMode?1:0)};B.getPreClones=_o;var L1=function(t){return t.unslick||!t.infinite?0:t.slideCount};B.getPostClones=L1;var P1=function(t){return t.slideCount===1?1:_o(t)+t.slideCount+L1(t)};B.getTotalSlides=P1;var $1=function(t){return t.targetSlide>t.currentSlide?t.targetSlide>t.currentSlide+R1(t)?"left":"right":t.targetSlide<t.currentSlide-z1(t)?"right":"left"};B.siblingDirection=$1;var R1=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var s=(n-1)/2+1;return parseInt(o)>0&&(s+=1),i&&n%2===0&&(s+=1),s}return i?0:n-1};B.slidesOnRight=R1;var z1=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var s=(n-1)/2+1;return parseInt(o)>0&&(s+=1),!i&&n%2===0&&(s+=1),s}return i?n-1:0};B.slidesOnLeft=z1;var xT=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};B.canUseDOM=xT;var Fc={};function Tf(e){"@babel/helpers - typeof";return Tf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Tf(e)}Object.defineProperty(Fc,"__esModule",{value:!0});Fc.Track=void 0;var In=N1(S),Du=N1(As),Iu=B;function N1(e){return e&&e.__esModule?e:{default:e}}function Of(){return Of=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Of.apply(this,arguments)}function wT(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Bg(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function bT(e,t,n){return t&&Bg(e.prototype,t),n&&Bg(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ST(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Lf(e,t)}function Lf(e,t){return Lf=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Lf(e,t)}function kT(e){var t=AT();return function(){var r=bl(e),i;if(t){var o=bl(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return CT(this,i)}}function CT(e,t){if(t&&(Tf(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Pf(e)}function Pf(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function AT(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function bl(e){return bl=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},bl(e)}function _g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function pt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_g(Object(n),!0).forEach(function(r){$f(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_g(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function $f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Bu=function(t){var n,r,i,o,s;t.rtl?s=t.slideCount-1-t.index:s=t.index,i=s<0||s>=t.slideCount,t.centerMode?(o=Math.floor(t.slidesToShow/2),r=(s-t.currentSlide)%t.slideCount===0,s>t.currentSlide-o-1&&s<=t.currentSlide+o&&(n=!0)):n=t.currentSlide<=s&&s<t.currentSlide+t.slidesToShow;var a;t.targetSlide<0?a=t.targetSlide+t.slideCount:t.targetSlide>=t.slideCount?a=t.targetSlide-t.slideCount:a=t.targetSlide;var l=s===a;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":l}},jT=function(t){var n={};return(t.variableWidth===void 0||t.variableWidth===!1)&&(n.width=t.slideWidth),t.fade&&(n.position="relative",t.vertical?n.top=-t.index*parseInt(t.slideHeight):n.left=-t.index*parseInt(t.slideWidth),n.opacity=t.currentSlide===t.index?1:0,t.useCSS&&(n.transition="opacity "+t.speed+"ms "+t.cssEase+", visibility "+t.speed+"ms "+t.cssEase)),n},_u=function(t,n){return t.key||n},ET=function(t){var n,r=[],i=[],o=[],s=In.default.Children.count(t.children),a=(0,Iu.lazyStartIndex)(t),l=(0,Iu.lazyEndIndex)(t);return In.default.Children.forEach(t.children,function(c,d){var f,p={message:"children",index:d,slidesToScroll:t.slidesToScroll,currentSlide:t.currentSlide};!t.lazyLoad||t.lazyLoad&&t.lazyLoadedList.indexOf(d)>=0?f=c:f=In.default.createElement("div",null);var y=jT(pt(pt({},t),{},{index:d})),v=f.props.className||"",x=Bu(pt(pt({},t),{},{index:d}));if(r.push(In.default.cloneElement(f,{key:"original"+_u(f,d),"data-index":d,className:(0,Du.default)(x,v),tabIndex:"-1","aria-hidden":!x["slick-active"],style:pt(pt({outline:"none"},f.props.style||{}),y),onClick:function(h){f.props&&f.props.onClick&&f.props.onClick(h),t.focusOnSelect&&t.focusOnSelect(p)}})),t.infinite&&t.fade===!1){var k=s-d;k<=(0,Iu.getPreClones)(t)&&s!==t.slidesToShow&&(n=-k,n>=a&&(f=c),x=Bu(pt(pt({},t),{},{index:n})),i.push(In.default.cloneElement(f,{key:"precloned"+_u(f,n),"data-index":n,tabIndex:"-1",className:(0,Du.default)(x,v),"aria-hidden":!x["slick-active"],style:pt(pt({},f.props.style||{}),y),onClick:function(h){f.props&&f.props.onClick&&f.props.onClick(h),t.focusOnSelect&&t.focusOnSelect(p)}}))),s!==t.slidesToShow&&(n=s+d,n<l&&(f=c),x=Bu(pt(pt({},t),{},{index:n})),o.push(In.default.cloneElement(f,{key:"postcloned"+_u(f,n),"data-index":n,tabIndex:"-1",className:(0,Du.default)(x,v),"aria-hidden":!x["slick-active"],style:pt(pt({},f.props.style||{}),y),onClick:function(h){f.props&&f.props.onClick&&f.props.onClick(h),t.focusOnSelect&&t.focusOnSelect(p)}})))}}),t.rtl?i.concat(r,o).reverse():i.concat(r,o)},TT=function(e){ST(n,e);var t=kT(n);function n(){var r;wT(this,n);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return r=t.call.apply(t,[this].concat(o)),$f(Pf(r),"node",null),$f(Pf(r),"handleRef",function(a){r.node=a}),r}return bT(n,[{key:"render",value:function(){var i=ET(this.props),o=this.props,s=o.onMouseEnter,a=o.onMouseOver,l=o.onMouseLeave,c={onMouseEnter:s,onMouseOver:a,onMouseLeave:l};return In.default.createElement("div",Of({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},c),i)}}]),n}(In.default.PureComponent);Fc.Track=TT;var Dc={};function Rf(e){"@babel/helpers - typeof";return Rf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Rf(e)}Object.defineProperty(Dc,"__esModule",{value:!0});Dc.Dots=void 0;var ea=F1(S),OT=F1(As),Mg=B;function F1(e){return e&&e.__esModule?e:{default:e}}function Wg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function LT(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wg(Object(n),!0).forEach(function(r){PT(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function PT(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ug(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function RT(e,t,n){return t&&Ug(e.prototype,t),n&&Ug(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function zT(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&zf(e,t)}function zf(e,t){return zf=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},zf(e,t)}function NT(e){var t=IT();return function(){var r=Sl(e),i;if(t){var o=Sl(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return FT(this,i)}}function FT(e,t){if(t&&(Rf(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return DT(e)}function DT(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function IT(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Sl(e){return Sl=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Sl(e)}var BT=function(t){var n;return t.infinite?n=Math.ceil(t.slideCount/t.slidesToScroll):n=Math.ceil((t.slideCount-t.slidesToShow)/t.slidesToScroll)+1,n},_T=function(e){zT(n,e);var t=NT(n);function n(){return $T(this,n),t.apply(this,arguments)}return RT(n,[{key:"clickHandler",value:function(i,o){o.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,o=i.onMouseEnter,s=i.onMouseOver,a=i.onMouseLeave,l=i.infinite,c=i.slidesToScroll,d=i.slidesToShow,f=i.slideCount,p=i.currentSlide,y=BT({slideCount:f,slidesToScroll:c,slidesToShow:d,infinite:l}),v={onMouseEnter:o,onMouseOver:s,onMouseLeave:a},x=[],k=0;k<y;k++){var m=(k+1)*c-1,h=l?m:(0,Mg.clamp)(m,0,f-1),w=h-(c-1),C=l?w:(0,Mg.clamp)(w,0,f-1),A=(0,OT.default)({"slick-active":l?p>=C&&p<=h:p===C}),b={message:"dots",index:k,slidesToScroll:c,currentSlide:p},j=this.clickHandler.bind(this,b);x=x.concat(ea.default.createElement("li",{key:k,className:A},ea.default.cloneElement(this.props.customPaging(k),{onClick:j})))}return ea.default.cloneElement(this.props.appendDots(x),LT({className:this.props.dotsClass},v))}}]),n}(ea.default.PureComponent);Dc.Dots=_T;var Ii={};function Nf(e){"@babel/helpers - typeof";return Nf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Nf(e)}Object.defineProperty(Ii,"__esModule",{value:!0});Ii.PrevArrow=Ii.NextArrow=void 0;var yi=I1(S),D1=I1(As),MT=B;function I1(e){return e&&e.__esModule?e:{default:e}}function kl(){return kl=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},kl.apply(this,arguments)}function Hg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Cl(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Hg(Object(n),!0).forEach(function(r){WT(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function WT(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B1(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Vg(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _1(e,t,n){return t&&Vg(e.prototype,t),n&&Vg(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function M1(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ff(e,t)}function Ff(e,t){return Ff=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Ff(e,t)}function W1(e){var t=VT();return function(){var r=Al(e),i;if(t){var o=Al(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return UT(this,i)}}function UT(e,t){if(t&&(Nf(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return HT(e)}function HT(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function VT(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Al(e){return Al=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Al(e)}var QT=function(e){M1(n,e);var t=W1(n);function n(){return B1(this,n),t.apply(this,arguments)}return _1(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},o=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,o=null);var s={key:"0","data-role":"none",className:(0,D1.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.prevArrow?l=yi.default.cloneElement(this.props.prevArrow,Cl(Cl({},s),a)):l=yi.default.createElement("button",kl({key:"0",type:"button"},s)," ","Previous"),l}}]),n}(yi.default.PureComponent);Ii.PrevArrow=QT;var qT=function(e){M1(n,e);var t=W1(n);function n(){return B1(this,n),t.apply(this,arguments)}return _1(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},o=this.clickHandler.bind(this,{message:"next"});(0,MT.canGoNext)(this.props)||(i["slick-disabled"]=!0,o=null);var s={key:"1","data-role":"none",className:(0,D1.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.nextArrow?l=yi.default.cloneElement(this.props.nextArrow,Cl(Cl({},s),a)):l=yi.default.createElement("button",kl({key:"1",type:"button"},s)," ","Next"),l}}]),n}(yi.default.PureComponent);Ii.NextArrow=qT;var U1=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var s=o[i];n.call(r,s[1],s[0])}},t}()}(),Df=typeof window<"u"&&typeof document<"u"&&window.document===document,jl=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),GT=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(jl):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),KT=2;function YT(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&a()}function s(){GT(o)}function a(){var l=Date.now();if(n){if(l-i<KT)return;r=!0}else n=!0,r=!1,setTimeout(s,t);i=l}return a}var JT=20,XT=["top","right","bottom","left","width","height","size","weight"],ZT=typeof MutationObserver<"u",eO=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=YT(this.refresh.bind(this),JT)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!Df||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),ZT?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!Df||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=XT.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),H1=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},Bi=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||jl},V1=Ic(0,0,0,0);function El(e){return parseFloat(e)||0}function Qg(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var o=e["border-"+i+"-width"];return r+El(o)},0)}function tO(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var o=i[r],s=e["padding-"+o];n[o]=El(s)}return n}function nO(e){var t=e.getBBox();return Ic(0,0,t.width,t.height)}function rO(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return V1;var r=Bi(e).getComputedStyle(e),i=tO(r),o=i.left+i.right,s=i.top+i.bottom,a=El(r.width),l=El(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+o)!==t&&(a-=Qg(r,"left","right")+o),Math.round(l+s)!==n&&(l-=Qg(r,"top","bottom")+s)),!oO(e)){var c=Math.round(a+o)-t,d=Math.round(l+s)-n;Math.abs(c)!==1&&(a-=c),Math.abs(d)!==1&&(l-=d)}return Ic(i.left,i.top,a,l)}var iO=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof Bi(e).SVGGraphicsElement}:function(e){return e instanceof Bi(e).SVGElement&&typeof e.getBBox=="function"}}();function oO(e){return e===Bi(e).document.documentElement}function sO(e){return Df?iO(e)?nO(e):rO(e):V1}function aO(e){var t=e.x,n=e.y,r=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,s=Object.create(o.prototype);return H1(s,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),s}function Ic(e,t,n,r){return{x:e,y:t,width:n,height:r}}var lO=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Ic(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=sO(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),cO=function(){function e(t,n){var r=aO(n);H1(this,{target:t,contentRect:r})}return e}(),uO=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new U1,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Bi(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new lO(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Bi(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new cO(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),Q1=typeof WeakMap<"u"?new WeakMap:new U1,q1=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=eO.getInstance(),r=new uO(t,n,this);Q1.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){q1.prototype[e]=function(){var t;return(t=Q1.get(this))[e].apply(t,arguments)}});var dO=function(){return typeof jl.ResizeObserver<"u"?jl.ResizeObserver:q1}();const fO=Object.freeze(Object.defineProperty({__proto__:null,default:dO},Symbol.toStringTag,{value:"Module"})),pO=pb(fO);Object.defineProperty(zc,"__esModule",{value:!0});zc.InnerSlider=void 0;var it=js(S),hO=js(C1),mO=js(sT),gO=js(As),xe=B,yO=Fc,vO=Dc,qg=Ii,xO=js(pO);function js(e){return e&&e.__esModule?e:{default:e}}function Tl(e){"@babel/helpers - typeof";return Tl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Tl(e)}function Ol(){return Ol=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ol.apply(this,arguments)}function wO(e,t){if(e==null)return{};var n=bO(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function bO(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Gg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Gg(Object(n),!0).forEach(function(r){ee(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Gg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function SO(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Kg(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function kO(e,t,n){return t&&Kg(e.prototype,t),n&&Kg(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function CO(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&If(e,t)}function If(e,t){return If=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},If(e,t)}function AO(e){var t=EO();return function(){var r=Ll(e),i;if(t){var o=Ll(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return jO(this,i)}}function jO(e,t){if(t&&(Tl(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Z(e)}function Z(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function EO(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ll(e){return Ll=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Ll(e)}function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var TO=function(e){CO(n,e);var t=AO(n);function n(r){var i;SO(this,n),i=t.call(this,r),ee(Z(i),"listRefHandler",function(s){return i.list=s}),ee(Z(i),"trackRefHandler",function(s){return i.track=s}),ee(Z(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var s=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,xe.getHeight)(s)+"px"}}),ee(Z(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var s=(0,xe.getOnDemandLazySlides)(G(G({},i.props),i.state));s.length>0&&(i.setState(function(l){return{lazyLoadedList:l.lazyLoadedList.concat(s)}}),i.props.onLazyLoad&&i.props.onLazyLoad(s))}var a=G({listRef:i.list,trackRef:i.track},i.props);i.updateState(a,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new xO.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(l){l.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,l.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),ee(Z(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(s){return clearTimeout(s)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),ee(Z(i),"componentDidUpdate",function(s){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var a=(0,xe.getOnDemandLazySlides)(G(G({},i.props),i.state));a.length>0&&(i.setState(function(d){return{lazyLoadedList:d.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}i.adaptHeight();var l=G(G({listRef:i.list,trackRef:i.track},i.props),i.state),c=i.didPropsChange(s);c&&i.updateState(l,c,function(){i.state.currentSlide>=it.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:it.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),ee(Z(i),"onWindowResized",function(s){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,mO.default)(function(){return i.resizeWindow(s)},50),i.debouncedResize()}),ee(Z(i),"resizeWindow",function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,a=!!(i.track&&i.track.node);if(a){var l=G(G({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(l,s,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),ee(Z(i),"updateState",function(s,a,l){var c=(0,xe.initializedState)(s);s=G(G(G({},s),c),{},{slideIndex:c.currentSlide});var d=(0,xe.getTrackLeft)(s);s=G(G({},s),{},{left:d});var f=(0,xe.getTrackCSS)(s);(a||it.default.Children.count(i.props.children)!==it.default.Children.count(s.children))&&(c.trackStyle=f),i.setState(c,l)}),ee(Z(i),"ssrInit",function(){if(i.props.variableWidth){var s=0,a=0,l=[],c=(0,xe.getPreClones)(G(G(G({},i.props),i.state),{},{slideCount:i.props.children.length})),d=(0,xe.getPostClones)(G(G(G({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(j){l.push(j.props.style.width),s+=j.props.style.width});for(var f=0;f<c;f++)a+=l[l.length-1-f],s+=l[l.length-1-f];for(var p=0;p<d;p++)s+=l[p];for(var y=0;y<i.state.currentSlide;y++)a+=l[y];var v={width:s+"px",left:-a+"px"};if(i.props.centerMode){var x="".concat(l[i.state.currentSlide],"px");v.left="calc(".concat(v.left," + (100% - ").concat(x,") / 2 ) ")}return{trackStyle:v}}var k=it.default.Children.count(i.props.children),m=G(G(G({},i.props),i.state),{},{slideCount:k}),h=(0,xe.getPreClones)(m)+(0,xe.getPostClones)(m)+k,w=100/i.props.slidesToShow*h,C=100/h,A=-C*((0,xe.getPreClones)(m)+i.state.currentSlide)*w/100;i.props.centerMode&&(A+=(100-C*w/100)/2);var b={width:w+"%",left:A+"%"};return{slideWidth:C+"%",trackStyle:b}}),ee(Z(i),"checkImagesLoad",function(){var s=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],a=s.length,l=0;Array.prototype.forEach.call(s,function(c){var d=function(){return++l&&l>=a&&i.onWindowResized()};if(!c.onclick)c.onclick=function(){return c.parentNode.focus()};else{var f=c.onclick;c.onclick=function(){f(),c.parentNode.focus()}}c.onload||(i.props.lazyLoad?c.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(c.onload=d,c.onerror=function(){d(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),ee(Z(i),"progressiveLazyLoad",function(){for(var s=[],a=G(G({},i.props),i.state),l=i.state.currentSlide;l<i.state.slideCount+(0,xe.getPostClones)(a);l++)if(i.state.lazyLoadedList.indexOf(l)<0){s.push(l);break}for(var c=i.state.currentSlide-1;c>=-(0,xe.getPreClones)(a);c--)if(i.state.lazyLoadedList.indexOf(c)<0){s.push(c);break}s.length>0?(i.setState(function(d){return{lazyLoadedList:d.lazyLoadedList.concat(s)}}),i.props.onLazyLoad&&i.props.onLazyLoad(s)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),ee(Z(i),"slideHandler",function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=i.props,c=l.asNavFor,d=l.beforeChange,f=l.onLazyLoad,p=l.speed,y=l.afterChange,v=i.state.currentSlide,x=(0,xe.slideHandler)(G(G(G({index:s},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!a})),k=x.state,m=x.nextState;if(k){d&&d(v,k.currentSlide);var h=k.lazyLoadedList.filter(function(w){return i.state.lazyLoadedList.indexOf(w)<0});f&&h.length>0&&f(h),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),y&&y(v),delete i.animationEndCallback),i.setState(k,function(){c&&i.asNavForIndex!==s&&(i.asNavForIndex=s,c.innerSlider.slideHandler(s)),m&&(i.animationEndCallback=setTimeout(function(){var w=m.animating,C=wO(m,["animating"]);i.setState(C,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:w})},10)),y&&y(k.currentSlide),delete i.animationEndCallback})},p))})}}),ee(Z(i),"changeSlide",function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=G(G({},i.props),i.state),c=(0,xe.changeSlide)(l,s);if(!(c!==0&&!c)&&(a===!0?i.slideHandler(c,a):i.slideHandler(c),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var d=i.list.querySelectorAll(".slick-current");d[0]&&d[0].focus()}}),ee(Z(i),"clickHandler",function(s){i.clickable===!1&&(s.stopPropagation(),s.preventDefault()),i.clickable=!0}),ee(Z(i),"keyHandler",function(s){var a=(0,xe.keyHandler)(s,i.props.accessibility,i.props.rtl);a!==""&&i.changeSlide({message:a})}),ee(Z(i),"selectHandler",function(s){i.changeSlide(s)}),ee(Z(i),"disableBodyScroll",function(){var s=function(l){l=l||window.event,l.preventDefault&&l.preventDefault(),l.returnValue=!1};window.ontouchmove=s}),ee(Z(i),"enableBodyScroll",function(){window.ontouchmove=null}),ee(Z(i),"swipeStart",function(s){i.props.verticalSwiping&&i.disableBodyScroll();var a=(0,xe.swipeStart)(s,i.props.swipe,i.props.draggable);a!==""&&i.setState(a)}),ee(Z(i),"swipeMove",function(s){var a=(0,xe.swipeMove)(s,G(G(G({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));a&&(a.swiping&&(i.clickable=!1),i.setState(a))}),ee(Z(i),"swipeEnd",function(s){var a=(0,xe.swipeEnd)(s,G(G(G({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(a){var l=a.triggerSlideHandler;delete a.triggerSlideHandler,i.setState(a),l!==void 0&&(i.slideHandler(l),i.props.verticalSwiping&&i.enableBodyScroll())}}),ee(Z(i),"touchEnd",function(s){i.swipeEnd(s),i.clickable=!0}),ee(Z(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),ee(Z(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),ee(Z(i),"slickGoTo",function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(s=Number(s),isNaN(s))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:s,currentSlide:i.state.currentSlide},a)},0))}),ee(Z(i),"play",function(){var s;if(i.props.rtl)s=i.state.currentSlide-i.props.slidesToScroll;else if((0,xe.canGoNext)(G(G({},i.props),i.state)))s=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(s)}),ee(Z(i),"autoPlay",function(s){i.autoplayTimer&&clearInterval(i.autoplayTimer);var a=i.state.autoplaying;if(s==="update"){if(a==="hovered"||a==="focused"||a==="paused")return}else if(s==="leave"){if(a==="paused"||a==="focused")return}else if(s==="blur"&&(a==="paused"||a==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),ee(Z(i),"pause",function(s){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var a=i.state.autoplaying;s==="paused"?i.setState({autoplaying:"paused"}):s==="focused"?(a==="hovered"||a==="playing")&&i.setState({autoplaying:"focused"}):a==="playing"&&i.setState({autoplaying:"hovered"})}),ee(Z(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),ee(Z(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),ee(Z(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),ee(Z(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),ee(Z(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),ee(Z(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),ee(Z(i),"render",function(){var s=(0,gO.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),a=G(G({},i.props),i.state),l=(0,xe.extractObject)(a,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),c=i.props.pauseOnHover;l=G(G({},l),{},{onMouseEnter:c?i.onTrackOver:null,onMouseLeave:c?i.onTrackLeave:null,onMouseOver:c?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var d;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var f=(0,xe.extractObject)(a,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),p=i.props.pauseOnDotsHover;f=G(G({},f),{},{clickHandler:i.changeSlide,onMouseEnter:p?i.onDotsLeave:null,onMouseOver:p?i.onDotsOver:null,onMouseLeave:p?i.onDotsLeave:null}),d=it.default.createElement(vO.Dots,f)}var y,v,x=(0,xe.extractObject)(a,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);x.clickHandler=i.changeSlide,i.props.arrows&&(y=it.default.createElement(qg.PrevArrow,x),v=it.default.createElement(qg.NextArrow,x));var k=null;i.props.vertical&&(k={height:i.state.listHeight});var m=null;i.props.vertical===!1?i.props.centerMode===!0&&(m={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(m={padding:i.props.centerPadding+" 0px"});var h=G(G({},k),m),w=i.props.touchMove,C={className:"slick-list",style:h,onClick:i.clickHandler,onMouseDown:w?i.swipeStart:null,onMouseMove:i.state.dragging&&w?i.swipeMove:null,onMouseUp:w?i.swipeEnd:null,onMouseLeave:i.state.dragging&&w?i.swipeEnd:null,onTouchStart:w?i.swipeStart:null,onTouchMove:i.state.dragging&&w?i.swipeMove:null,onTouchEnd:w?i.touchEnd:null,onTouchCancel:i.state.dragging&&w?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},A={className:s,dir:"ltr",style:i.props.style};return i.props.unslick&&(C={className:"slick-list"},A={className:s}),it.default.createElement("div",A,i.props.unslick?"":y,it.default.createElement("div",Ol({ref:i.listRefHandler},C),it.default.createElement(yO.Track,Ol({ref:i.trackRefHandler},l),i.props.children)),i.props.unslick?"":v,i.props.unslick?"":d)}),i.list=null,i.track=null,i.state=G(G({},hO.default),{},{currentSlide:i.props.initialSlide,slideCount:it.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var o=i.ssrInit();return i.state=G(G({},i.state),o),i}return kO(n,[{key:"didPropsChange",value:function(i){for(var o=!1,s=0,a=Object.keys(this.props);s<a.length;s++){var l=a[s];if(!i.hasOwnProperty(l)){o=!0;break}if(!(Tl(i[l])==="object"||typeof i[l]=="function")&&i[l]!==this.props[l]){o=!0;break}}return o||it.default.Children.count(this.props.children)!==it.default.Children.count(i.children)}}]),n}(it.default.Component);zc.InnerSlider=TO;var OO=function(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()},LO=OO,PO=LO,$O=function(e){var t=/[height|width]$/;return t.test(e)},Yg=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,i){var o=e[r];r=PO(r),$O(r)&&typeof o=="number"&&(o=o+"px"),o===!0?t+=r:o===!1?t+="not "+r:t+="("+r+": "+o+")",i<n.length-1&&(t+=" and ")}),t},RO=function(e){var t="";return typeof e=="string"?e:e instanceof Array?(e.forEach(function(n,r){t+=Yg(n),r<e.length-1&&(t+=", ")}),t):Yg(e)},zO=RO,G1={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(S);function n(o){return o&&o.__esModule?o:{default:o}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(s){return t.default.createElement("ul",{style:{display:"block"}},s)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(s){return t.default.createElement("button",null,s+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},i=r;e.default=i})(G1);var Mu,Jg;function NO(){if(Jg)return Mu;Jg=1;function e(t){this.options=t,!t.deferSetup&&this.setup()}return e.prototype={constructor:e,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},Mu=e,Mu}var Wu,Xg;function K1(){if(Xg)return Wu;Xg=1;function e(r,i){var o=0,s=r.length,a;for(o;o<s&&(a=i(r[o],o),a!==!1);o++);}function t(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return Wu={isFunction:n,isArray:t,each:e},Wu}var Uu,Zg;function FO(){if(Zg)return Uu;Zg=1;var e=NO(),t=K1().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var o=this;this.listener=function(s){o.mql=s.currentTarget||s,o.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new e(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;t(i,function(o,s){if(o.equals(r))return o.destroy(),!i.splice(s,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){t(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";t(this.handlers,function(i){i[r]()})}},Uu=n,Uu}var Hu,e0;function DO(){if(e0)return Hu;e0=1;var e=FO(),t=K1(),n=t.each,r=t.isFunction,i=t.isArray;function o(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return o.prototype={constructor:o,register:function(s,a,l){var c=this.queries,d=l&&this.browserIsIncapable;return c[s]||(c[s]=new e(s,d)),r(a)&&(a={match:a}),i(a)||(a=[a]),n(a,function(f){r(f)&&(f={match:f}),c[s].addHandler(f)}),this},unregister:function(s,a){var l=this.queries[s];return l&&(a?l.removeHandler(a):(l.clear(),delete this.queries[s])),this}},Hu=o,Hu}var Vu,t0;function IO(){if(t0)return Vu;t0=1;var e=DO();return Vu=new e,Vu}(function(e){function t(E){"@babel/helpers - typeof";return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(T){return typeof T}:function(T){return T&&typeof Symbol=="function"&&T.constructor===Symbol&&T!==Symbol.prototype?"symbol":typeof T},t(E)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(S),r=zc,i=a(zO),o=a(G1),s=B;function a(E){return E&&E.__esModule?E:{default:E}}function l(){return l=Object.assign||function(E){for(var T=1;T<arguments.length;T++){var O=arguments[T];for(var L in O)Object.prototype.hasOwnProperty.call(O,L)&&(E[L]=O[L])}return E},l.apply(this,arguments)}function c(E,T){var O=Object.keys(E);if(Object.getOwnPropertySymbols){var L=Object.getOwnPropertySymbols(E);T&&(L=L.filter(function(P){return Object.getOwnPropertyDescriptor(E,P).enumerable})),O.push.apply(O,L)}return O}function d(E){for(var T=1;T<arguments.length;T++){var O=arguments[T]!=null?arguments[T]:{};T%2?c(Object(O),!0).forEach(function(L){A(E,L,O[L])}):Object.getOwnPropertyDescriptors?Object.defineProperties(E,Object.getOwnPropertyDescriptors(O)):c(Object(O)).forEach(function(L){Object.defineProperty(E,L,Object.getOwnPropertyDescriptor(O,L))})}return E}function f(E,T){if(!(E instanceof T))throw new TypeError("Cannot call a class as a function")}function p(E,T){for(var O=0;O<T.length;O++){var L=T[O];L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(E,L.key,L)}}function y(E,T,O){return T&&p(E.prototype,T),O&&p(E,O),Object.defineProperty(E,"prototype",{writable:!1}),E}function v(E,T){if(typeof T!="function"&&T!==null)throw new TypeError("Super expression must either be null or a function");E.prototype=Object.create(T&&T.prototype,{constructor:{value:E,writable:!0,configurable:!0}}),Object.defineProperty(E,"prototype",{writable:!1}),T&&x(E,T)}function x(E,T){return x=Object.setPrototypeOf||function(L,P){return L.__proto__=P,L},x(E,T)}function k(E){var T=w();return function(){var L=C(E),P;if(T){var $=C(this).constructor;P=Reflect.construct(L,arguments,$)}else P=L.apply(this,arguments);return m(this,P)}}function m(E,T){if(T&&(t(T)==="object"||typeof T=="function"))return T;if(T!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return h(E)}function h(E){if(E===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return E}function w(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function C(E){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(O){return O.__proto__||Object.getPrototypeOf(O)},C(E)}function A(E,T,O){return T in E?Object.defineProperty(E,T,{value:O,enumerable:!0,configurable:!0,writable:!0}):E[T]=O,E}var b=(0,s.canUseDOM)()&&IO(),j=function(E){v(O,E);var T=k(O);function O(L){var P;return f(this,O),P=T.call(this,L),A(h(P),"innerSliderRefHandler",function($){return P.innerSlider=$}),A(h(P),"slickPrev",function(){return P.innerSlider.slickPrev()}),A(h(P),"slickNext",function(){return P.innerSlider.slickNext()}),A(h(P),"slickGoTo",function($){var z=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return P.innerSlider.slickGoTo($,z)}),A(h(P),"slickPause",function(){return P.innerSlider.pause("paused")}),A(h(P),"slickPlay",function(){return P.innerSlider.autoPlay("play")}),P.state={breakpoint:null},P._responsiveMediaHandlers=[],P}return y(O,[{key:"media",value:function(P,$){b.register(P,$),this._responsiveMediaHandlers.push({query:P,handler:$})}},{key:"componentDidMount",value:function(){var P=this;if(this.props.responsive){var $=this.props.responsive.map(function(D){return D.breakpoint});$.sort(function(D,V){return D-V}),$.forEach(function(D,V){var Q;V===0?Q=(0,i.default)({minWidth:0,maxWidth:D}):Q=(0,i.default)({minWidth:$[V-1]+1,maxWidth:D}),(0,s.canUseDOM)()&&P.media(Q,function(){P.setState({breakpoint:D})})});var z=(0,i.default)({minWidth:$.slice(-1)[0]});(0,s.canUseDOM)()&&this.media(z,function(){P.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(P){b.unregister(P.query,P.handler)})}},{key:"render",value:function(){var P=this,$,z;this.state.breakpoint?(z=this.props.responsive.filter(function(Ae){return Ae.breakpoint===P.state.breakpoint}),$=z[0].settings==="unslick"?"unslick":d(d(d({},o.default),this.props),z[0].settings)):$=d(d({},o.default),this.props),$.centerMode&&($.slidesToScroll>1,$.slidesToScroll=1),$.fade&&($.slidesToShow>1,$.slidesToScroll>1,$.slidesToShow=1,$.slidesToScroll=1);var D=n.default.Children.toArray(this.props.children);D=D.filter(function(Ae){return typeof Ae=="string"?!!Ae.trim():!!Ae}),$.variableWidth&&($.rows>1||$.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),$.variableWidth=!1);for(var V=[],Q=null,N=0;N<D.length;N+=$.rows*$.slidesPerRow){for(var I=[],W=N;W<N+$.rows*$.slidesPerRow;W+=$.slidesPerRow){for(var K=[],q=W;q<W+$.slidesPerRow&&($.variableWidth&&D[q].props.style&&(Q=D[q].props.style.width),!(q>=D.length));q+=1)K.push(n.default.cloneElement(D[q],{key:100*N+10*W+q,tabIndex:-1,style:{width:"".concat(100/$.slidesPerRow,"%"),display:"inline-block"}}));I.push(n.default.createElement("div",{key:10*N+W},K))}$.variableWidth?V.push(n.default.createElement("div",{key:N,style:{width:Q}},I)):V.push(n.default.createElement("div",{key:N},I))}if($==="unslick"){var Te="regular slider "+(this.props.className||"");return n.default.createElement("div",{className:Te},D)}else V.length<=$.slidesToShow&&($.unslick=!0);return n.default.createElement(r.InnerSlider,l({style:this.props.style,ref:this.innerSliderRefHandler},$),V)}}]),O}(n.default.Component);e.default=j})(k1);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(k1);function n(i){return i&&i.__esModule?i:{default:i}}var r=t.default;e.default=r})(S1);const Y1=Uf(S1);const BO=Et`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`,n0=({books:e})=>{const t=()=>{const r=window.innerWidth;return r>=1200?5:r>=992?4:r>=768?3:1},n={dots:!0,infinite:!0,speed:500,slidesToShow:t(),slidesToScroll:1,responsive:[{breakpoint:1200,settings:{slidesToShow:t()}},{breakpoint:992,settings:{slidesToShow:t()}},{breakpoint:768,settings:{slidesToShow:t()}},{breakpoint:0,settings:{slidesToShow:1}}]};return u.jsx(Y1,{...n,children:e.map(r=>u.jsxs(_O,{children:[u.jsx(MO,{src:r.poster,alt:r.title}),u.jsx(ct,{to:`books/${r._id}`,children:u.jsx(J1,{children:"Read Extract"})})]},r._id))})},J1=g.span`
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${e=>e.theme.primary};
  color: ${e=>e.theme.background};
  padding: 8px;
  text-align: center;
  font-weight: bold;
  animation: ${BO} 0.3s ease-in-out;
`,_O=g.div`
  width: 100%;
  max-width: 12rem;
  height: 18rem;
  margin: 0 2rem;

  position: relative;
  padding: 0;
  &:hover {
    cursor: pointer;
    ${J1} {
      display: block;
      /* transform: translateY(0); */
    }
  }
`,MO=g.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 0;
  margin: 0;
`;function WO(){if(console&&console.warn){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&(t[0]=`react-i18next:: ${t[0]}`),console.warn(...t)}}const r0={};function Bf(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&r0[t[0]]||(typeof t[0]=="string"&&(r0[t[0]]=new Date),WO(...t))}const X1=(e,t)=>()=>{if(e.isInitialized)t();else{const n=()=>{setTimeout(()=>{e.off("initialized",n)},0),t()};e.on("initialized",n)}};function i0(e,t,n){e.loadNamespaces(t,X1(e,n))}function o0(e,t,n,r){typeof n=="string"&&(n=[n]),n.forEach(i=>{e.options.ns.indexOf(i)<0&&e.options.ns.push(i)}),e.loadLanguages(t,X1(e,r))}function UO(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=t.languages[0],i=t.options?t.options.fallbackLng:!1,o=t.languages[t.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const s=(a,l)=>{const c=t.services.backendConnector.state[`${a}|${l}`];return c===-1||c===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!s(t.isLanguageChangingTo,e)?!1:!!(t.hasResourceBundle(r,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||s(r,e)&&(!i||s(o,e)))}function HO(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!t.languages||!t.languages.length?(Bf("i18n.languages were undefined or empty",t.languages),!0):t.options.ignoreJSONStructure!==void 0?t.hasLoadedNamespace(e,{lng:n.lng,precheck:(i,o)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!o(i.isLanguageChangingTo,e))return!1}}):UO(e,t,n)}const VO=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,QO={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},qO=e=>QO[e],GO=e=>e.replace(VO,qO);let _f={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:GO};function KO(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};_f={..._f,...e}}function YO(){return _f}let Z1;function JO(e){Z1=e}function XO(){return Z1}const ZO={type:"3rdParty",init(e){KO(e.options.react),JO(e)}},ew=S.createContext();class eL{constructor(){this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const tL=(e,t)=>{const n=S.useRef();return S.useEffect(()=>{n.current=t?n.current:e},[e,t]),n.current};function te(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:n}=t,{i18n:r,defaultNS:i}=S.useContext(ew)||{},o=n||r||XO();if(o&&!o.reportNamespaces&&(o.reportNamespaces=new eL),!o){Bf("You will need to pass in an i18next instance by using initReactI18next");const w=(A,b)=>typeof b=="string"?b:b&&typeof b=="object"&&typeof b.defaultValue=="string"?b.defaultValue:Array.isArray(A)?A[A.length-1]:A,C=[w,{},!1];return C.t=w,C.i18n={},C.ready=!1,C}o.options.react&&o.options.react.wait!==void 0&&Bf("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const s={...YO(),...o.options.react,...t},{useSuspense:a,keyPrefix:l}=s;let c=e||i||o.options&&o.options.defaultNS;c=typeof c=="string"?[c]:c||["translation"],o.reportNamespaces.addUsedNamespaces&&o.reportNamespaces.addUsedNamespaces(c);const d=(o.isInitialized||o.initializedStoreOnce)&&c.every(w=>HO(w,o,s));function f(){return o.getFixedT(t.lng||null,s.nsMode==="fallback"?c:c[0],l)}const[p,y]=S.useState(f);let v=c.join();t.lng&&(v=`${t.lng}${v}`);const x=tL(v),k=S.useRef(!0);S.useEffect(()=>{const{bindI18n:w,bindI18nStore:C}=s;k.current=!0,!d&&!a&&(t.lng?o0(o,t.lng,c,()=>{k.current&&y(f)}):i0(o,c,()=>{k.current&&y(f)})),d&&x&&x!==v&&k.current&&y(f);function A(){k.current&&y(f)}return w&&o&&o.on(w,A),C&&o&&o.store.on(C,A),()=>{k.current=!1,w&&o&&w.split(" ").forEach(b=>o.off(b,A)),C&&o&&C.split(" ").forEach(b=>o.store.off(b,A))}},[o,v]);const m=S.useRef(!0);S.useEffect(()=>{k.current&&!m.current&&y(f),m.current=!1},[o,l]);const h=[p,o,d];if(h.t=p,h.i18n=o,h.ready=d,d||!d&&!a)return h;throw new Promise(w=>{t.lng?o0(o,t.lng,c,()=>w()):i0(o,c,()=>w())})}function nL(e){let{i18n:t,defaultNS:n,children:r}=e;const i=S.useMemo(()=>({i18n:t,defaultNS:n}),[t,n]);return S.createElement(ew.Provider,{value:i},r)}Et`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;g.div`
  width: 100%;
  max-width: 20rem;
  height: 20rem;
  position: relative;

  background-color: #fff1f1;

  padding: 1rem;
  margin: 1rem 4rem;

  border-radius: 12px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  h2 {
    font-size: 1.4rem;
  }
  p {
    /* text-indent: 30px; */
    text-align: stretch;
    width: 100%;
    font-size: 1.2rem;
    color: grey;
  }
`;g(ct)`
  text-decoration: none;
  padding: 0.5rem 1rem;

  border: 1px solid grey;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background-color: white;
  color: orange;
  font-weight: bold;
  &:hover {
    background-color: orange;
    color: white;
  }
`;g.button`
  margin: 0 2rem;
`;const rL=Et`
  from {
    stroke-dashoffset: 0;
  }
  50% {
    animation-timing-function: steps(1);
    stroke-dashoffset: -358;
  }
  50.01% {
    animation-timing-function: linear;
    stroke-dashoffset: 358;
  }
  to {
    stroke-dashoffset: 0;
  }
`,iL=Et`
  from {
    stroke-dashoffset: 358;
  }
  50% {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: -358;
  }
`,oL=g.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  padding: 1.5em 0;
`,sL=g.svg`
  width: 16em;
  height: 8em;
`,aL=g.g`
  stroke: hsl(var(--hue), 90%, 90%);
  transition: stroke var(--trans-dur);
`,lL=g.path`
  animation: ${rL} 2s linear infinite;
`,cL=g.path`
  animation: ${iL} 2s linear infinite;
`,We=()=>u.jsx(oL,{children:u.jsxs(sL,{className:"ip",viewBox:"0 0 256 128",width:"256px",height:"128px",xmlns:"http://www.w3.org/2000/svg",children:[u.jsxs("defs",{children:[u.jsxs("linearGradient",{id:"grad1",x1:"0",y1:"0",x2:"1",y2:"0",children:[u.jsx("stop",{offset:"0%",stopColor:"#FFFFFF"}),u.jsx("stop",{offset:"33%",stopColor:"#0055A4"}),u.jsx("stop",{offset:"67%",stopColor:"#EF4135"}),u.jsx("stop",{offset:"100%",stopColor:"#FFFFFF"})]}),u.jsxs("linearGradient",{id:"grad2",x1:"1",y1:"0",x2:"0",y2:"0",children:[u.jsx("stop",{offset:"0%",stopColor:"#FFFFFF"}),u.jsx("stop",{offset:"33%",stopColor:"#EF4135"}),u.jsx("stop",{offset:"67%",stopColor:"#0055A4"}),u.jsx("stop",{offset:"100%",stopColor:"#FFFFFF"})]})]}),u.jsxs("g",{fill:"none",strokeLinecap:"round",strokeWidth:"16",children:[u.jsxs(aL,{className:"ip__track",stroke:"#ddd",children:[u.jsx("path",{d:"M8,64s0-56,60-56,60,112,120,112,60-56,60-56"}),u.jsx("path",{d:"M248,64s0-56-60-56-60,112-120,112S8,64,8,64"})]}),u.jsxs("g",{strokeDasharray:"180 656",children:[u.jsx(lL,{className:"ip__worm1",stroke:"url(#grad1)",strokeDashoffset:"0",d:"M8,64s0-56,60-56,60,112,120,112,60-56,60-56"}),u.jsx(cL,{className:"ip__worm2",stroke:"url(#grad2)",strokeDashoffset:"358",d:"M248,64s0-56-60-56-60,112-120,112S8,64,8,64"})]})]})]})}),uL=Et`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`,dL=({isLoadingvocabularyTopic:e,vocabularyTopic:t})=>{const n=()=>{const a=window.innerWidth;return a>=1200?4:a>=992?3:a>=768?2:1},r={dots:!0,infinite:!0,speed:1600,slidesToShow:n(),slidesToScroll:1,responsive:[{breakpoint:1200,settings:{slidesToShow:n()}},{breakpoint:992,settings:{slidesToShow:n()}},{breakpoint:768,settings:{slidesToShow:n()}},{breakpoint:0,settings:{slidesToShow:1}}]},{t:i,i18n:o}=te(),s=o.language==="ka";return e?u.jsx(We,{}):u.jsx(Y1,{...r,children:t.map(a=>u.jsxs(fL,{imageUrl:a.imageUrl,children:[u.jsxs(pL,{children:[u.jsxs("h1",{children:[a.nameFr," "]}),u.jsx("p",{children:s?a.nameGeo:a.nameEng})]}),u.jsxs(hL,{children:[u.jsx("span",{children:i("Les mots")}),u.jsx("b",{children:a.french.length})]}),u.jsx(ct,{to:`vocabulary-topics/${a._id}`,children:u.jsxs(tw,{children:[i("Explorez des sujets")," "]})})]},a._id))})},tw=g.span`
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${e=>e.theme.primary};
  color: ${e=>e.theme.background};
  font-weight: bold;
  padding: 8px;
  text-align: center;
  animation: ${uL} 0.3s ease-in-out;
`,fL=g.div`
  display: flex;

  width: 100%;
  max-width: 20rem;
  height: 18rem;
  gap: 1rem;
  margin: 0 2rem;
  margin-bottom: 1rem;
  border-radius: 12px;
  background: ${e=>e.theme.primary};
  color: ${e=>e.theme.background};
  position: relative;
  background-image: url(${e=>e.imageUrl});
  background-repeat: repeat;
  background-position: center;
  background-size: 100%;
  transition: background-size 1s ease;
  z-index: 1;
  font-family: "Arial", "Helvetica", sans-serif, "Times New Roman", "Times",
    serif, "Courier New", "Courier", monospace;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${e=>e.theme.tertiaryTone};

    filter: blur(18px);
    z-index: -1;
  }
  &:hover {
    cursor: pointer;
    background-size: 120%;
    transition: background-size 1s ease;
    ${tw} {
      display: block;
    }
  }
`,pL=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 0.3rem;

  p {
    font-size: 1.2rem;
  }
`,hL=g.div`
  display: flex;
  width: 200px;
  border: 4px dashed ${e=>e.theme.secondary};
  padding: 1rem;
  font-size: 1.2rem;
  position: absolute;
  bottom: 12%;
  left: 50%;
  transform: translateX(-50%);
  span {
    text-align: center;
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
    font-size: 1.3rem;
    font-weight: bold;
    &::after {
      content: ":";
    }
  }
  b {
    font-size: 1.4rem;
    width: 2rem;
    height: 2rem;
    background: ${e=>e.theme.primary};
    border: 1px dashed black;
    margin-left: auto;
    text-align: center;
    color: white;
    padding: 0.5rem;
    border-radius: 50%;
  }
`,vi=ke("currentTopic/fetchQuizData",async e=>{try{return(await Ce.get(`/quiz-topic/${e}`)).data}catch(t){throw console.log(t),Error("Failed to fetch words")}}),xi=ke("quizData/fetchTopicNames",async()=>{try{return(await Ce.get("/quiz-topic-names")).data}catch(e){throw console.log(e),Error("Failed to fetch words")}}),Ea=ke("selectedVerbDetails/fetchVerbDetails",async e=>{try{return(await Ce.get(`/get-verb-details/${e}`)).data}catch(t){throw console.log(t),Error("Failed to fetch verb details")}}),mL={selectedVerbDetails:[],currentTopic:[],topicNames:[],isLoading:!1,error:null},gL=qe({name:"quizData",initialState:mL,reducers:{},extraReducers:e=>{e.addCase(vi.pending,t=>{t.isLoading=!0}).addCase(vi.fulfilled,(t,n)=>{t.currentTopic=n.payload,t.isLoading=!1}).addCase(vi.rejected,(t,n)=>{t.error=n.error.message}).addCase(xi.pending,t=>{t.isLoading=!0}).addCase(xi.fulfilled,(t,n)=>{t.topicNames=n.payload,t.isLoading=!1}).addCase(xi.rejected,(t,n)=>{t.error=n.error.message}).addCase(Ea.pending,t=>{t.isLoading=!0}).addCase(Ea.fulfilled,(t,n)=>{t.selectedVerbDetails=n.payload,t.isLoading=!1}).addCase(Ea.rejected,(t,n)=>{t.error=n.error.message})}}),yL=gL.reducer,xh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAlklEQVR4nO2PvQ2DMBBG3wopXIZhKKAhJdOQsAcjwC4oSyRIYQkjJBeWZV/4iVLdk677vrt3oCjK38mAO1Ac6JZAA1yl0BOwbnrAbFi8ZgavN0rhtxdcZwZqIV+7jN95SQdy4BMUrDM0grUvlO992QbfxKxjEl+pgCmyKHX4EBegE5bvtk5xC745ZZ3CAC3w+JW1orCJBcEfQjhF/QEaAAAAAElFTkSuQmCC",vL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACR0lEQVR4nO2XPWgUQRTHX0juvc0XCiIigopooYWFWIhWVoKgIIh1KltLW8u0KQPaiIWk0U7lovPmkkYJREFPsNAiBAsRNYVEov5lN1+3Md7tzcyuF5gfvG7Z9/vP7MzOEEUikUgkEukhYPku5miIegwYSmB5svODVgArTTT4BPUIUD4GlZepW9EAgMoStHatEsM2QPkyrHxZ9yoeYKN4Eq+JqWJgaABWxqHyu9XHIUBWL2DkcCXmRITpwQNQnt3OxTVAOhOfYOVC6fIq52H54788PAJk6yKdznFMUX9wcVAflG/Cys92Dn4BNmfjGaaH9wWTr4/ugeVHRXoHCpCFWIBNznrLm4HTsPyhaN+AAbJayaYd1Ockr3IdKj+66Rk6wPraeAhDuwuLz9IoVO679ConwGq9Q6N2svOo83GovHHtQwUCNJ1DqHyHlbE27x5be8Z1kJqdAxgacZ3ezcofCFcPYjLh9U6VB6jTro4BfBbYlpqHkaN4mhzK/uTu71lx3ijQSM5BedGj+de1chx1XkwduhbPhxjZC8t1v0/KSd7CDu33kt8IMUX9sHILKr/KF5f0uDKBOaoFkc8FUb7UejYvQX4JDb4aXDwXIl2YKq9KCPA2/UeUKr/lfnon4Pd+D09ouBL5v7ZaK8se8stQvlG5eC6ErZ2C8vvu5XkBZvAM9QLZeV75cRfyJuR9IuyNqt1WW+KNLhhQvgiVz9vIf4PyFdoJYCY5CJXnLQHmMSNHaCeBdKtVvp2VoeR/+0QikUgkEqES+AOFhOtBfI7NdwAAAABJRU5ErkJggg==",nw=({isActive:e,onClick:t})=>{const r=bx()===kx?vL:xh;return u.jsx(xL,{src:r,alt:"chevron",rotation:e?180:0,onClick:t})},xL=g.img`
  width: 24px;
  height: 24px;
  transition: transform 0.5s ease;
  margin-left: 1rem;

  transform: ${({rotation:e})=>`rotate(${e}deg)`};
  cursor: pointer;
`,rw=({topic:e,selectedCategory:t,onCategoryChange:n})=>(console.log("selectedCategory in CategoryDropdown",t),u.jsx(wL,{children:u.jsx(bL,{children:u.jsx(SL,{value:t,onChange:n,children:e.map((r,i)=>u.jsx("option",{value:r,children:r},i))})})})),wL=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
`,bL=g.div`
  position: relative;
`,SL=g.select`
  text-align: center;
  width: 100%;
  padding: 1rem;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  border-bottom: 3px solid ${e=>e.theme.flagAddon};
  appearance: none;
  background-color: ${e=>e.theme.flagFirst};
  color: ${e=>e.theme.flagAddon};
  &::after {
    content: "\u25BC"; /* Unicode character for a downward-pointing arrow */
    position: absolute;
    top: 45%;
    right: 1rem;
    transform: translateY(-50%);
    font-size: 1.2rem;
    background-color: ${e=>e.theme.flagAddon};
    color: ${e=>e.theme.flagFirst};
    cursor: pointer;
  }
  option {
    cursor: pointer;
    font-size: 1.3rem;

    border-bottom: 2px solid red;
    font-weight: bold;
  }
`,kL=Et`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
`,CL=Et`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`,AL=Et`
  0% {
    width: 0%;
    height: 1px;
    left: 50%;
  }

  50% {
    width: 100%;
    height: 1px;
    left: 0;
  }

  100% {
    width: 100%;
    height: 100%;
    left: 0;
  }
`,jL=Et`
  0% {
    background-position: 0 0;
  }

  50% {
    background-position: 400% 0;
  }

  100% {
    background-position: 0 0;
  }
`,EL=Et`
0% {
  transform: translateY(100%);
  opacity: 0;
}
100% {
  transform: translateY(0);
  opacity: 1;
}
`,TL=_C`
  body {

    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;

    width: 100vw;
    background-color: ${e=>e.theme.primaryBackground};
    color: ${e=>e.theme.primaryText};

  }

.slick-prev,
.slick-next {

  color: black;
  background-color: black;
   width: 40px;
  height: 40px; 
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1; 
  &:hover{

  }
}

.slick-next {
  right: -30px; 
}
.slick-prev {
  left: -30px; 
}
 h1{
  font-size: ${({theme:e})=>e.extraMega};
  letter-spacing: ${({theme:e})=>e.megaLetterSpacing};

  
  @media (min-width: 768px) and (max-width: 920px) {
 
 font-size: ${({theme:e})=>e.mega};
  letter-spacing: ${({theme:e})=>e.extraLargeLetterSpacing};
 
}
@media (min-width: 577px) and (max-width: 767px) {
 font-size: ${({theme:e})=>e.extraLarge};

}

@media (min-width: 393px) and (max-width: 576px) {
 font-size: ${({theme:e})=>e.large};

}
@media (max-width: 392px) {
 font-size: ${({theme:e})=>e.medium};

}
 }
 h2{
  font-size: ${({theme:e})=>e.extraLarge};
  letter-spacing: ${({theme:e})=>e.extraLargeLetterSpacing};

  @media (min-width: 768px) and (max-width: 920px) {
 
 font-size: ${({theme:e})=>e.large};
 
}
@media (min-width: 577px) and (max-width: 767px) {
 font-size: ${({theme:e})=>e.large};

}

@media (min-width: 393px) and (max-width: 576px) {
 font-size: ${({theme:e})=>e.medium};

}
@media (max-width: 392px) {
 font-size: ${({theme:e})=>e.medium};

}
 }


h3{
  font-size: ${({theme:e})=>e.large};
  letter-spacing: ${({theme:e})=>e.largeLetterSpacing};

@media (min-width: 768px) and (max-width: 920px) {
  letter-spacing: ${({theme:e})=>e.largeLetterSpacing};
 
 font-size: ${({theme:e})=>e.large};
 
}
@media (min-width: 577px) and (max-width: 767px) {
 font-size: ${({theme:e})=>e.medium};

}

@media (min-width: 393px) and (max-width: 576px) {
 font-size: ${({theme:e})=>e.small};

}
@media (max-width: 392px) {
 font-size: ${({theme:e})=>e.small};

}

 }

 h1,h2,h3{
  text-align:center;

 }

 p {
    margin: 0;
    padding: 0;
    font-size: ${({theme:e})=>e.large};
    line-height: ${({theme:e})=>e.extraLargeLineHeight};
    letter-spacing: ${({theme:e})=>e.extraLargeLetterSpacing};


 @media (min-width: 768px) and (max-width: 920px) {
 
    font-size: ${({theme:e})=>e.medium};
    line-height: ${({theme:e})=>e.largeLineHeight};
    letter-spacing: ${({theme:e})=>e.extraLargeLetterSpacing};
    
  }
  @media (min-width: 577px) and (max-width: 767px) {
    font-size: ${({theme:e})=>e.medium};
    line-height: ${({theme:e})=>e.mediumLineHeigth};
    letter-spacing: ${({theme:e})=>e.largeLetterSpacing};

  }

  @media (min-width: 393px) and (max-width: 576px) {
    font-size: ${({theme:e})=>e.small};
    line-height: ${({theme:e})=>e.smallLineHeight};
    letter-spacing: ${({theme:e})=>e.largeLetterSpacing};

  }
  @media (max-width: 392px) {
    font-size: ${({theme:e})=>e.small};
   line-height: ${({theme:e})=>e.smallLineHeight};
    letter-spacing: ${({theme:e})=>e.mediumLetterSpacing};

  }
  }


`,iw=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,ow=g.button`
  background-color: #70ff41;
  color: #1a1a4b;
  width: 20rem;
  font-weight: bold;
  margin: 0 auto;
  padding: 1rem 2rem;
  border-radius: 1rem;
  text-align: center;
  font-size: 1.8rem;
  letter-spacing: 2px;
  cursor: pointer;
  &:hover {
    color: #70ff41;
    background: #1a1a4b;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    width: 18rem;
    font-size: 1.6rem;
    padding: 0.8rem 1.6rem;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 14rem;
    font-size: 1.4rem;
    padding: 0.6rem 1.2rem;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    width: 12rem;
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
  }

  @media (max-width: 576px) {
    width: 10rem;
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
  }
`,et=g.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem auto;
  text-align: center;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  width: 12rem;
  font-size: 1.6rem;

  font-weight: bold;
  cursor: pointer;
  background: ${e=>e.theme.primaryText};
  color: ${e=>e.theme.primaryBackground};
  &:hover {
    background: ${e=>e.theme.primaryBackground};
    color: ${e=>e.theme.primaryText};
  }
  @media screen and (min-width: 576px) {
    font-size: 1.1rem;
  }
  @media screen and (min-width: 768px) {
    width: 8rem;

    font-size: 1.2rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 1.4rem;
    width: 10rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 1.6rem;
  }
`;g(et)`
  background: ${e=>e.theme.primaryBackground};
  color: ${e=>e.theme.primaryText};
  &:hover {
    background: ${e=>e.theme.primaryText};
    color: ${e=>e.theme.primaryBackground};
  }
`;const OL=g.p`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0.4rem 0.8rem;
  letter-spacing: 1.5px;
  font-size: 1.3rem;
`,sw=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    color: ${e=>e.theme.primaryText};
  }
  p {
    margin-bottom: 2rem;
  }
`,aw=g.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: ${e=>e.theme.background};
  gap: 1rem;

  @media (min-width: 576px) and (max-width: 767px) {
    flex-direction: column;
    font-size: 1.3rem;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
    gap: 0;
    margin: 0 auto;
    font-size: 1.2rem;
  }
`,lw=g.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-end; */
  margin: 0 auto;
  margin-bottom: 2rem;
  background-color: ${e=>e.theme.secondaryBackground};
  color: ${e=>e.theme.secondaryText};
  padding: 0 1rem;
  width: 335px;
  h3 {
    text-align: center;
    color: ${e=>e.theme.primaryText};

    &:before {
      content: ${e=>e.theme.background==="#000000"?'"🔷"':'"🔶"'};
    }
    &:after {
      content: ${e=>e.theme.background==="#000000"?'" 🔷"':'" 🔶"'};
    }
  }
  h4 {
    &:before {
      content: ${e=>e.theme.background==="#000000"?'"❔"':'"❓"'};
    }
  }
  p {
    &:before {
      content: ${e=>e.theme.background==="#000000"?'"🔸"':'"🔹"'};
    }
  }
`,mr=g(ct)`
  display: inline-block; /* or inline-flex */
  color: ${e=>e.theme.primaryText};
  text-decoration: none;

  font-size: ${e=>e.fontSize||"1.5rem"}; /* Use props.fontSize if provided, otherwise use theme default */
  margin-top: ${e=>e.marginTop||"0"};
  margin-bottom: ${e=>e.marginBottom||"0"};

  position: relative;
  transition: 0.8s all linear;
  padding: 0.5rem;
  &:hover {
    color: ${e=>e.theme.tertiaryText};
  }
  &:active {
    color: ${e=>e.theme.secondaryText};
  }
  &:visited {
    color: ${e=>e.theme.secondaryText};
  }
`;g.span`
  transform: ${e=>e.isExpanded?"rotate(180deg)":"rotate(0deg)"};
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  margin: 0 0.5rem;
`;g.div`
  width: 100%;
  margin: 0 auto;
  max-height: ${e=>e.isExpanded?"1000px":"0"};
  opacity: ${e=>e.isExpanded?"1":"0"};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
  background-color: ${e=>e.background||"#0055a4"};
  color: ${e=>e.text||"#ffffff"};
  padding: ${e=>e.padding||""};

  position: relative;
  text-align: center;
  clip-path: polygon(0 0, 100% 0, 97% 100%, 3% 100%);
`;g.button`
  padding: 1rem;
  text-align: center;
  width: 12rem;
  margin: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 8px;
  background-color: ${e=>e.theme.background};
  color: ${e=>e.theme.text};
  cursor: pointer;
  &:hover {
    background-color: ${e=>e.theme.text};
    color: ${e=>e.theme.background};
  }
`;g.nav`
  margin-bottom: 1rem;

  display: flex;
  justify-content: space-between;
  height: 70px;
  align-items: center;
`;g.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin: 0;
  overflow-y: auto;

  max-width: 100%;

  &:not(input) {
    user-select: none;
  }
`;g.li`
  cursor: pointer;
  text-decoration: none;
  margin: 0.2rem;
  padding: 0.2rem;
`;g.ul`
  list-style-type: none;
  background-color: grey;
  padding: 0;
  margin: 0;
  overflow-y: auto;
  height: calc(100vh - 1rem);
  min-width: 15rem;
  width: 20%;

  &:not(input) {
    user-select: none;
  }
`;g.div`
  width: 100%;
  display: flex;
  gap: 20px;
  width: 100%;
  height: calc(100vh - 16px);
`;g.li`
  cursor: pointer;

  margin: 1rem;
  padding: 1rem;
  ${e=>e.selected?{backgroundColor:"#bfbfbf",borderRadius:"4px"}:{}};

  &:hover {
    background-color: ${e=>e.theme.colors.inputBackground};
    color: ${e=>e.theme.colors.primeBackground};
  }
`;g.div`
  flex-grow: 1;
  width: 80%;
`;g.div`
  padding: 24px;
  border-radius: 4px;
  cursor: pointer;
  overflow-y: auto;
  height: calc(100vh - 16px);
  &:not(input) {
    user-select: none;
  }
`;g.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  cursor: pointer;
  color: ${e=>e.theme.text};
`;g.span`
  margin-bottom: 2rem;
  font-size: 24px;

  line-height: 1.4;
`;g.ul`
  margin: 0 auto;
  list-style-type: none;
  margin-top: 3rem;
  &:first-child {
    margin-top: 3rem;
  }
`;g.ul`
  margin-top: 1rem;
  color: black;
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 12px;
  list-style-type: none;
  li {
    color: ${e=>e.theme.text};
  }
  li:first-child {
    font-size: 2rem;
    font-weight: bold;
  }

  li:first-child::after {
    content: ":";
  }
  li:nth-child(2) {
    font-size: 1.3rem;
    font-style: italic;
    padding-left: 1rem;
  }
  li:last-child {
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    font-style: italic;
    margin-right: auto;
  }
`;g.div`
  display: flex;
  align-items: center;

  & > img {
    width: 1.2rem;
    height: 1.2rem;
    cursor: pointer;
    filter: ${e=>e.isStarred?"invert(50%)":"none"};
    transition: transform 0.3s ease-in-out;
    transform: ${e=>e.isStarred?"scale(1)":"scale(1.1)"};
  }
`;const LL=g.div`
  display: flex;
  align-items: center;
  & > img {
    width: ${e=>e.width||"1.2rem"};
    height: ${e=>e.height||"1.2rem"};
    cursor: pointer;

    filter: ${e=>e.isActive?"none":"invert(50%)"};
    transition: transform 0.3s ease-in-out;
    transform: ${e=>e.isActive?"scale(1.1)":"scale(1)"};
  }
`;g.div`
  display: flex;
  margin-left: auto;
  gap: 1rem;
`;g.section`
  display: flex;
  flex-direction: column;
  width: 30rem;
  height: 16rem;
  border-radius: 12px;
  margin: 1rem auto;
  padding: 1rem;
  padding-top: 3rem;
  align-items: space-between;
  text-align: center;
  background-color: ${e=>e.theme.background};
  color: ${e=>e.theme.colors.text};
  p {
    font-size: 1.2rem;
  }
`;g.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: space-between;

  button {
    padding: 1rem;
    text-align: center;
    width: 8rem;
    background-color: ${e=>e.theme.background};
    color: ${e=>e.theme.colors.text};
    cursor: pointer;
    &:hover {
      background-color: ${e=>e.theme.text};
      color: ${e=>e.theme.background};
    }
  }
`;const wh=({definition:e,secondLanguage:t,index:n,secondLangButtonName:r,isMultipleDefinitions:i})=>{const[o,s]=S.useState(!0),a=()=>{s(!o)};return u.jsxs(PL,{children:[u.jsxs($L,{children:[u.jsx("button",{style:{background:o?"#FD5602":"#ffffec"},onClick:a,children:r}),u.jsx("button",{style:{background:o?"#ffffec":"#FD5602"},onClick:a,children:"Fr"})]}),u.jsx(RL,{children:i?o?t[n]:e[n]:o?t:e})]})},PL=g.div`
  width: 100%;
`,$L=g.div`
  position: absolute;
  top: 10%;
  right: 2%;
  font-size: 1.4rem;

  button {
    border: none;
    font-size: 1.2rem;
    width: 3rem;
    height: 2rem;
    transition: background-color 0.5s ease;
    outline: 1px solid ${e=>e.theme.secondaryText};
    /* background:  */
    color: ${e=>e.theme.highlight};
  }
`,RL=g.div`
  margin-left: 1rem;
  min-height: 3rem;
  padding: 0.5rem;
  color: ${e=>e.theme.secondaryText};
  font-style: italic;
`,cw=()=>{const e=fe(),t=H(z=>z.quizData.currentTopic.words)||[],n=H(z=>z.quizData.topicNames)||[],r=H(z=>z.quizData.isLoading),[i,o]=S.useState(0),[s,a]=S.useState(0),[l,c]=S.useState([]),[d,f]=S.useState(0),[p,y]=S.useState(0),[v,x]=S.useState(!1),[k,m]=S.useState(!1),h=n.map(z=>z.topic),[w,C]=S.useState(h[0]);S.useEffect(()=>{e(xi())},[e]),S.useEffect(()=>{var D;const z=(D=n[i])==null?void 0:D._id;e(vi(z))},[w,e,i,n]),S.useEffect(()=>{t.length>0&&(k||A())},[t,v,k]);const A=()=>{const z=t.map(D=>{const V=b(D.french);return{image:D.imageUrl,options:V,correctOption:D.french,definition:[D.definition],english:[D.english],georgian:[D.georgian],selectedOption:""}});c(z),m(!1)},b=z=>{const D=t.map(Q=>Q.french),V=[];for(;V.length<3;){const Q=Math.floor(Math.random()*D.length),N=D[Q];N!==z&&!V.includes(N)&&V.push(N)}return V.push(z),V.sort(()=>Math.random()-.5),V},j=z=>{const D=z.target.value;C(D);const V=h.indexOf(D);o(V),f(0),a(0),x(!0),A()},E=z=>{v||x(!0);const D=l[s],V=[...l];V[s]={...D,selectedOption:z},z===D.correctOption&&f(Q=>Q+1),c(V),setTimeout(()=>{a(Q=>Q+1<l.length?Q+1:0),y(Q=>Q+1<l.length?Q+1:0),s===l.length-1&&m(!0)},800)},T=()=>{f(0),a(0),y(0),x(!1),m(!1),c(l.map(z=>({...z,selectedOption:""})))},{t:O,i18n:L}=te(),P=L.language==="ka",$=P?"Geo":"Eng";return r?u.jsx(We,{}):t?u.jsx(zL,{children:u.jsxs(s0,{children:[u.jsx(rw,{topic:h,selectedCategory:w,onCategoryChange:j}),k?u.jsxs(BL,{children:[u.jsxs(_L,{children:["Your final score is:",u.jsxs(a0,{children:[d," / ",l.length]})]}),u.jsxs("div",{children:[u.jsx("p",{children:"Do you want to restart?"}),u.jsx(ML,{onClick:T,children:"Restart"})]}),u.jsx("p",{children:"You can choose another topic from the dropdown menu above"})]}):l.map((z,D)=>{if(D===p){const{image:V,correctOption:Q,options:N,selectedOption:I,georgian:W,english:K,definition:q}=z;return u.jsxs(s0,{children:[V?u.jsx(DL,{children:u.jsx(NL,{src:V,alt:"Word Image",loading:"lazy"})}):u.jsx(IL,{children:u.jsx(wh,{index:D,secondLangButtonName:$,french:z.options,definition:q,secondLanguage:P?W:K,isMultipleDefinitions:!1})}),N.map(Te=>u.jsx(FL,{onClick:()=>E(Te),isSelected:I===Te,isCorrect:Te===Q,children:Te},Te)),u.jsxs(a0,{children:["Score: ",d," / ",l.length]})]},D)}return null})]})}):u.jsx(We,{})},zL=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  margin: 1rem auto;

  max-width: 390px;
  -webkit-box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  -moz-box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  background-color: ${e=>e.theme.primaryBackground};
  color: ${e=>e.theme.primaryText};
  height: 700px;
  @media (max-width: 576px) {
    max-width: 370px;

    display: flex;
    flex-direction: column;
  }
`,s0=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;

  select {
    width: 100%;
    background-color: ${e=>e.theme.flagAddon};
    color: ${e=>e.theme.flagFirst};
    padding: 1rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }
`,NL=g.img`
  width: 100%;
  height: 100%;
`,FL=g.div`
  border-bottom: 2px solid ${e=>e.theme.primaryText};
  border-right: 2px solid ${e=>e.theme.primaryText};
  padding: 0.6rem 1rem;
  margin: 0.6rem 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0.5rem;
  max-width: 100%;
  width: 330px;
  align-self: center;
  background-color: ${e=>e.isSelected?e.isCorrect?"green":"red":e.theme.secondaryBackground};

  color: ${e=>e.isSelected?e.isCorrect?"white":"black":e.theme.primaryText};

  @media (max-width: 576px) {
    width: 300px;
  }
`,a0=g.span`
  font-size: 1.5rem;
  font-weight: bold;
  display: center;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 4px solid white;
`,DL=g.div`
  display: flex;

  align-items: center;
  width: 350px;
  height: 250px;
  background: white;
  margin-bottom: 1rem;
`,IL=g.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 350px;
  height: 250px;
  font-size: 1.4rem;
  background-color: ${e=>e.theme.flagAddon};
  color: ${e=>e.theme.flagFirst};
`,BL=g.div`
  background-color: ${e=>e.theme.flagAddon};
  color: ${e=>e.theme.flagFirst};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 350px;
  height: 100%;
  div {
    p {
      font-size: 1.2rem;
      margin-top: 2rem;
    }
  }
  p {
    text-align: center;
    margin-top: 5rem;
    margin-bottom: 2rem;
    background-color: #f0e5e5;
    padding: 1rem;
  }
`,_L=g.p`
  font-size: 1.4rem;
  font-weight: bold;
  span {
    border-bottom: 3px solid blue;
    padding-bottom: 0.2rem;
    margin-left: 0.5rem;
  }
`,ML=g(et)`
  height: 3rem;
  font-size: 1.4rem;
  &:hover {
  }
`,wi=ke("dictionary/fetchWordsByLanguage",async({language:e,query:t})=>{try{return(await Ce.get(`/words/${e}/${t}`)).data}catch(n){throw console.error(n),Error("Failed to fetch words")}}),WL={searchResults:[],isLoading:!1,error:null},UL=qe({name:"dictionary",initialState:WL,reducers:{clearSearchResults:e=>{e.searchResults=[]}},extraReducers:e=>{e.addCase(wi.pending,t=>{t.isLoading=!0}).addCase(wi.fulfilled,(t,n)=>{t.searchResults=n.payload,t.isLoading=!1}).addCase(wi.rejected,(t,n)=>{t.error=n.error.message,t.isLoading=!1})}}),HL=()=>({type:"dictionary/clearSearchResults"}),VL=UL.reducer,QL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAChklEQVR4nO2Zu24TQRSGPxeElgYbEVIYHoECCJdXQAIH+YKECA+AxEVESAl0wAsgUUEKpCiiIDFKDYGGS96AhhZSBZGQ2MFwpH+lKQxi8czYu+wnjbTy5f/3jPecOTOGgoKR5AAwDcwDa8A6sKPxBfig9y4DFUaQM0Ab6AC9vxz22WXgNCPAEWDFubku8Aq4BhwDysAeDbs+DlwHVvXZ5HsvgMPDCqIFfNWNfAPuAftTfN8Cuw9sSmMDaBCZOWc2F4DxAbQOAYuO3iyRuCvDH7ouedK9CuzGCqYlIzOsBdCfcoKpEzCxk5y4FcoEmHFyphrCYMXJiZCUnJxph1gneqowE4RnXJWwB5zyKdyWqJXYWFhpNs8ln21HRwtYmnViUGyd6aq9seuBuaKZeUl8Xsv7kg+xeYlZ2xGbG/J+7ENsTWLWO8VmUt7vfIitSyxmfiRU5P3Zh9i2xMaIz155f89LIBt5ebQ++kx22xTF5qS8rQznovw+8iE2LTHbnsbmjbzP+XpOkxbFS6uQskXpAPt8iS5rZqyRi8UDeVpL740TEt0aQht/1Ld425khX/v0fpj2M3k9D2FQ1cLU03Y0FLflYSeTB0OZNJzDBzso8M0F5/DhLIGZdYKZ8fSYlfRLJEHs6sSGWMEkOWOHbP/KhJMT7rDS2yQCdSdnNlWa06wzZZXYLacx7PYJpkEEqk41S4xX1VpMajEd06jotZvqndybXlBiN4cZDDqyWUr5t4JtD572aUZ/F0ydiJR1UPAEeK8Suq3F7RPwFniom/rTtqAxCsH4wsp7p08wF8lRMC0yyFSegqn9D8E0yWgwO0UwGSkAc2SU885jdoeMU4v5d3ZBwa8Z+Ak4rhMJLuUtjQAAAABJRU5ErkJggg==",qL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAiUlEQVR4nO2USwqAMAwF5xIpekQ9roKCHkYRIrjwk9QoLnzQXTJDQ1r489VUQHLUJ+0xpQYmoDVKktZO2nsZARpt6IHSUVtYb2GRSC7cIpG78DOJRMH3JAPQRcK3khW8nDESfiQ4266wEZWR8F7H4nknbvia2xLLKkquxLPnkiN5/LN7/Lv+825mVoNLX0YKeGwAAAAASUVORK5CYII=",cr="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC9ElEQVR4nO2a34tNURTHP0NdrqS5Sq4RLzI8SBQvY+6LX+EFLyhpeMCbxkzGKPHm118g/AN+Jx6YPKGmqOEV+RENiZEhP8e42vU9ddrOvj/PvffsMd86dVtrnX3W9+6191577Q3j+P+QAS4An4F7wHw8xFSgH8iHnrt4hklAn5x/BizQ7xE8wkTgvBx/B7RKHvSKF2gCzsjhT8CSkM4rIqfk7Feg3dJ5Q+SQHP0FrI/Qe0FkJ/AHGAW2OmwST2QL8FtE9hSwK5fISmAWdcI64Kcc7C1iWw6RFuAj8AHYTI3RpkGd1yAnRiIzgeuyN+HaSY2wWP+Y+dBZTbvFUMkY6RYR814XMWMe8FaNX9QCWAoqHezbRWY0zjAzsftcDvUpFSEmIhOA3Y42u/TukHxwIgWcBN5YSZ7r6VdSSIxEOqV/BMyN0F+T/mqhj5wokUDwTC+TRClE2oHHsnkdQSar7YDRL3c1MiiDtiqdqfbdZuBOqGfsMDsm3ZVqHaw1EYNpwBPZHuXfaXlEa5fZtCWGyCJgtSPM8gol2+Gb0nUkhYiZYB5KdiTCPtiY7XVMCqeTQiQNHFSoGPnaiEQ0apYKeutB0sbIAclvWfJWyV9a8hbJB5NGZIbk7y15WvLvlnyyQ95wIlkHkSmh3WYp8oYT6SkSWi8s+eykhVZa2+NgsK+x7Hc5BntO8vtJnH4PR9jfls4kkmHsT9r0GyyIqyJsc7IdVtqS6AXRhWbgqSNFySoUf7hSlCBpXBGTM5W+m1Gx29gNKPzCOC7dZVcDgUEj0/hcqCdeAXMsvamofFG1ZpmrkZTIBD3TyI3VQAQJQsUIZwqftK1uqkAaMxRnrStcfLhUh+LDjlDxYRM1LAedq2E5qEdjIq/1w8sC3Q3Zm57YxxgomW6kThgTRewAHaFjhW3Ev5jWFb2hg54NPhNB1Urj7Det1N4SabIOQ5f6SiTqeNqcsXtJxL4wYFKahT5eGCh0hcPUdb1ERmE2LBJeXqoZB2XiL6yXiN2STNABAAAAAElFTkSuQmCC",ut=()=>{const[e,t]=S.useState([]);S.useEffect(()=>{window.speechSynthesis.getVoices().length===0&&window.speechSynthesis.addEventListener("voiceschanged",()=>{window.speechSynthesis.getVoices().length>0})},[]);const n=i=>o=>{o.stopPropagation();const s=e.findIndex(a=>a.word===i);t(s===-1?a=>[...a,{word:i,isActive:!0}]:a=>a.map((l,c)=>c===s?{...l,isActive:!0}:l)),setTimeout(()=>{t(a=>a.map(l=>({...l,isActive:!1})))},1500),r(i)},r=i=>{const o=new SpeechSynthesisUtterance(i);o.lang="fr-FR",window.speechSynthesis.speak(o)};return{handleListen:n,isActiveStates:e}},GL={favorites:JSON.parse(localStorage.getItem("favorites"))||[],isLoading:!1,error:null},uw=qe({name:"isFavorite",initialState:GL,reducers:{addToFavorites:(e,t)=>{const n=t.payload;e.favorites.some(i=>i.word===n.word)||(e.favorites.push(n),localStorage.setItem("favorites",JSON.stringify(e.favorites)))},removeFromFavorites:(e,t)=>{const n=t.payload;e.favorites.splice(n,1),localStorage.setItem("favorites",JSON.stringify(e.favorites))},clearFavorites:e=>{e.favorites=[],localStorage.setItem("favorites",JSON.stringify(e.favorites))},setLoading:(e,t)=>{e.isLoading=t.payload},setError:(e,t)=>{e.error=t.payload}}}),{addToFavorites:KL,removeFromFavorites:dw,clearFavorites:YL,setLoading:lI,setError:cI}=uw.actions,JL=uw.reducer,fw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEJ0lEQVR4nO2ZvW8bdRzGf1Q09r357MT3YikTZSgIwdAWCZA6MYBQ/oIKykCHDlUZujcUlQ2pVMAYJFQQUgckhKCxHb/cxU7sOunZvoiKdkCZUFGGVlS0gd/vQXcXv9upae4SG/mRnsny3ef5+vHd92xCJppoosAEW3sVdf0EGUfB0lTY2kPXlqaScRPq2jxsHag71ubJOAm/Ph+Crf+OuubAAzX1HoqzHBkXwU6cacHvuKp+QMZBAHkGNXWjCV5THXjAUm87r5FRF6r6221Tb8ADluL4LTLqQk1L9YW/pQDr8UUyyoKlvQRLZX3hvQDAuvIKGVXBUr/qqkwXfByozCyQkb1xWcpfPVNvh19zAkw/QiWeIKMmWMrH/SvTBr8243wCji+RURKKsxys+B994RvgLXjg5vQWLE04uOu8reioxY/B0uZgKWdhKdcGVqYd3IP3XJ6+hlLsLMrROazKx1BSdF/uE6grR7Chn4SdOIW6fgE1/Qpq6nVUtQKq6iaq6vbuV5kB8A1wDx4ox4CSZ7YadU1Xotu0KG/SFblAi5HrtBi5goJ0AcuRUyiIJ2HKz+0Ov5H4yF3AWktY9zrQfWMatjKd4H3g2UrDMlhxx4WI5+WGJcAQLw4OYOunUddZE757Heg39eEr0wHeCy+3wHvgJTBTAjUkBlN67wkV0t9FXdvumXoAlWH94Bvg3fCm9A8M8cxw34Oa+iaq2oNRqAxzJy8+RF56Zyj4Zoh1/QSqyr2DrAzz4LdgiG/8J/hWnZQjsOJ3DqIyzIHPi78hKx59KvhmCOf6vB6/5U9l5KEqwzx4G1ludk/wzRC2ImItntyPyjAXXsghFZN9ge94zq3MfBdkZZghOvDfo0i44NaIysynQVSGOfCG+DlADgUC3xGkHLvqZ2WYO3nxauDgzQCl2Cd+VYbtmOaFy/sXoBxb8qMyzHHeM83x6f2BBzmEUvT+XivTghfAcgJoln+Ai/vR/9XpF/dcmXwnPHOc5YGc+ELwAVbk9/2oTBM858G7ATL86cAD0FX5Sz8q44ELTXiW4UGXwl8EH6AYrfhVGbYD7pkDTYdvBgqPLAnTovx44NQ7dhlhC4ZwDlnhHM0JW/0qwxrwS5xrusQ9ds4RXICC9PoT19+8RGle/BoFofmnBkw5RrP8ZzQj/N0JzzXhWdpxGEiFXwsuQFH+cNf11xAzMISXB74/Kx6lGe6nXviw51QYSE6dDywAXZa+7QtuSpsw+d2fVduDpLk5mubudsM7pouhb4ILUJDudj6nin/SvDT/NL1FhRxGeuo8TYfve/AhsGQINDl1JxB4t8dmhDnw1JAoNcUF5Pk9/8aJn/kETU0t0GSIugFuhBh+JDF/qNtPtKgJ1BBvU1PKYTly3PfjJ589Tm9M5eji4V/wA+H9Pv5EE/1f9S9M4cKBWKiMUAAAAABJRU5ErkJggg==",pw=({word:e,secondLanguage:t,definition:n})=>{const r=H(a=>a.isFavorite.favorites),i=fe(),o=r.some(a=>a.word===e),s=()=>{i(o?dw(e):KL({word:e,definition:n,secondLanguage:t}))};return u.jsx(XL,{children:u.jsx(ZL,{src:fw,alt:"Favorite",onClick:s,isWordInFavorites:o})})},XL=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
`,ZL=g.img`
  width: 100%;
  height: 100%;
  max-width: 1.5rem;
  max-height: 1.5rem;

  filter: ${e=>e.isWordInFavorites?"none":"invert(50%)"};
`,eP={flashcards:JSON.parse(localStorage.getItem("flashcards"))||[],isLoading:!1,error:null},hw=qe({name:"flashcards",initialState:eP,reducers:{addToFlashcard:(e,t)=>{const n=t.payload;e.flashcards.some(i=>i.word===n.word)||(e.flashcards.push(n),localStorage.setItem("flashcards",JSON.stringify(e.flashcards)))},removeFromFlashcards:(e,t)=>{const n=t.payload;e.flashcards.splice(n,1),localStorage.setItem("flashcards",JSON.stringify(e.flashcards))},clearFlashcards:(e,t)=>{e.flashcards=[],localStorage.setItem("flashcards",JSON.stringify(e.flashcards))},setLoading:(e,t)=>{e.isLoading=t.payload},setError:(e,t)=>{e.error=t.payload}}}),{addToFlashcard:tP,removeFromFlashcards:mw,clearFlashcards:nP,setLoading:uI,setError:dI}=hw.actions,rP=hw.reducer,gw="/assets/flash-card-8631d30b.png",Bc=({word:e,secondLanguage:t,definition:n})=>{console.log({word:e,secondLanguage:t,definition:n});const r=H(a=>a.flashcards.flashcards),i=fe(),o=r.some(a=>a.word===e),s=()=>{i(o?mw(e):tP({word:e,definition:n,secondLanguage:t}))};return u.jsx(iP,{onClick:s,children:u.jsx(oP,{isWordInFlashcards:o,children:u.jsx("img",{src:gw,alt:"FlashCardIcon"})})})},iP=g.button`
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`,oP=g.span`
  display: flex;
  align-items: center;

  img {
    width: 1.2rem;
    height: 1.2rem;
    cursor: pointer;
    filter: ${e=>e.isWordInFlashcards?"":"invert(50%)"};
    transition: transform 0.3s ease-in-out;
    transform: ${e=>e.isWordInFlashcards?"scale(1.1)":"scale(1)"};
  }
`,yw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF4klEQVR4nO3Ze2xTVRwH8N895756+36spV3blW1ujM09GBM3hmODPYzEqcAI4gNEJ2BQMJL94UIIijFA2AioPLKJGQnTLJHgYoggijFBBkQHOuUVM5eJRgYb63rbje2Y27VboyLek8hf/SXfdOna7nx27jn3nFOAeMUrXvGKV7z+exkAwBwTDdCX8l7lM6YCQCEAVANALWZgk5nHzTaePWbh8XkLj69YeXzVzOFuA4d/tfC4AwMs/KcPzGQwtw3z2pOYk7owK15DmJUZhiHhIDyCMC9Phg1N/C4ShNCYKIoBJYIgDEUjajT+6PPR13IcN8JiNGzlWX+Gjr851yYNLE00BDakWsa2TreRA7kO8umsRPJFkTucU8UecmaOl7TmO4ldZP0RcKQQWoE50W/wFgcTcp4ijpm1xFW4nrhL6ol33pt3jKd0E2FZbrSrt5coudDdTb7p6vpbTpw9O/Hz9z094dcqj4hhyM2qFNVpm+kkJg5fjjafR5gNOAvX/Wtj7xSM2bHz3d3hRqkNYhhygwLQV5lCjBweAoD7FIAbc5ohmsYr4UVpRPnP0gAwQmPXK9UDlJTbtQMAUKMAtMr1TAuQ9ObQ5x0dVAAO47HfK5KpAC/5TMMAsCEyBNigZ+5GKoDO5JCPnDhBBeBZPHqtnA7w8lSzAqgPAzAn/uYqWk8FMNi8gdb2diqAhmNv95ZPpQLUJpmCkwBBd8GR/wIVwOhIDTS1tlIBtDw38st8OsByrzEAAOvCAJbXfWa7fykVwDQlXd7b0kIF0An8yM/z6AA1iXrlXvD8eA/wmkPW6U/Q9YAzQ37nwAEqgEEUhq+U+agAlTGzEGBW02yZ9ihdD7iy5J3791MBTBoxdIkSUGjR3ASAh6OD+D1z2iN0gMTs4I49e6gAZkkM/VRKB8jSCwqgOApoMKVWUgHM7tzg1l27qABWrRT8YW4SFcAncf0AkBMGMFjYQQ3wzAi+1dhIBUjQa4MXKAF2gR0EgJQIgH/XnLaA7hLyFoQ2b9tGBXAYdPJ3JV4qgJ7FyjSaEBnEwkFLxuN0AE/B8Bvbt1MBnCZ94NxDdAAOoREAEMeXEpx02Jq5mA7gzh/e0tBABfBYTUOniz2qG68sABHDjE5sB1heOm7LfpISkBd6e+dOKkCK0+7/ssitGnCtIjnaA+OFee0pe+6zlNNoTnDr7t1UgCyf55ay61ILUJYfAkbBGICu0zFj5T2/D8zMSBtQdldqAVfn+YjEoqFJACddmlKwig7gypIb9+2jAhTn5fS35E1RDbhY5iNaFg/GAnqcs9ZSAjLlXU1NVIDK4qL+vdl21QBl/SSxyD+5p2eFPtfs1+huZM6MAO1irrqqvL8hM0E1QFnBajAKTAIwN+Quef2e7weW1Swc3DLNqhrQ89dBrJz5KEckVIAEX+Dg4cNUgFWrXpTrUs3qp9Hy8DQ6HANAt71lm6kAeotLbjt6lApQV18/utpnogLwCIViLiFWvtsh1p2iM9mD7SdPUgG2NDSQJYn6EbWAH0uTiJZF/TH3AakzIfcZ6mOV46dPUwF2NzeTCrsuqBagHC9aeHwu9mjxaV7nGKQZB6KkH/66s5MK8EFbGykwS7LayyfXKPoRwIrYg10GcWKbYEj0Ox98RRWA44XbZy5epAJ8fOwYSdOLsjItdpYkkY453vBB7pEHXOTDfCdpynEQZZrdnG4ldanmseUeg+wU2UEjh9qVJVwsYLwfEPsqwvwtXu/s17tnyeb0BcQyrZooG37lMRpTasVEEEJk5Zo15LnVq0OLly0LPlZT469etGhgflVV/0NlZTeKS0v/yM7L60vPyOjzJSffsNntg0aTya+RpKBymo0YZkzEKGDg8HUjh3vNHL5sE/C3Vh5/ZeHYT4w8btFxuBEANgLAWgDIh7sUDwDlyrEdZvlmltd9pCy3WUF3CPOaFsyKTZgTG8PBwnYAeB8A6iKpjckSAFgMAIsAYD4AzI788WQAcEW+G2Du1ph4xSte8YoX/J/1J/MWTw3L2mxrAAAAAElFTkSuQmCC",vw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACGklEQVR4nO2XW0tUURTHz5eKnMpe7P4QlBhRnyBKZMgbIUrhyzjjUGRpXosascAhTUSahwIfvFbCBF3AEPOcsy9Hhj7BP2ZtGnyYHmLWhjm2/7A452Gx/vvHWusctuc5OTk5OTkdBkWlX+AKP3GkanB6eA6gFLMOyFwO4bUrEMOPrY2QyGbIQ+XzFgDm5ukQcnzMHsCjIcpTS0t8AHJqEqLjNkR3BxUPW28i7OqEHHrIBiDTKYTdnQhv3TAe5ff2JOTMTO0AYjBT9TCit4cNIEy2Vc2XT0ZqB9BbW9DrG1BzrysjpD5+gt7YZANQq2tUU44MmxFaWCBPXfzMuAO5nAF4cN/aDsiBlAHIz/LtQKUTmx8g599AraxYA9DLy+RR7jo7QOz/A1G9A/h/Ma3X8BxAwnUAboQOKvZLHMX9MxoddgC9vQ1dLEJ/+24P4MtX8oh+7PADyGdP6RAiO2gNQPTfozz56iUfgP7pQ+t9qMJbU/zFc0T7JejdPTYAvbNLNcXEBOWpd++hVQS959cOINID8E80wL9whooHZ5sQNCYgeu6wAYRtrQhOHkNw7pTJPX8a/vGjdD+oHSCbgX/pIl22CaClGUHLZYi+Xj6A9iTVLAd5XL9Kniw3sj+hFhfNCE1NWtsBOTpqRqhQ4NuBSvHxMQOQTlkDCO/2GYDpaX6A8lIdfNoA0P/g8f/9yKJ6B3BycnJycvJiqN/ap8O42q9mQQAAAABJRU5ErkJggg==",xw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+klEQVR4nO2VrQoCQRSFx5eybhAWtmkSxGLWJzD4ACbrWn0FFxQVDGKzCQo2g2lAFydZruyCFg3uMr/O+eDA3HYP9565jAEAAADAMERUCRoJyZaoVZWJ/aWBqDWn0Xj/bqBo3etvcxkxEDZndDjdKGMw3FHRut1dU3p/5MremQF+TZWJfZtAPDnSanOhemdJZerp4pzrNQHtBgLJMmIgkpgD7SEOJefAyDcaS8yB83eA685AJPkOaDUQ4g4kH3fA+QwIGKj+PgGVgdMSYm5BU9xrA0Jh4LT8QsKCpoTXBrgFe829DjF33YCwYK+F1yEWLhsAAAAAAGCleAKWmufwwWk9CQAAAABJRU5ErkJggg==",sP=({inputLanguage:e,toggleInputLanguage:t,isGeorgian:n,secondLanguage:r})=>{const{t:i}=te();return u.jsxs(aP,{children:[u.jsx(ww,{inputLanguage:e,onClick:t,children:i("Français")}),u.jsx(lP,{onClick:t,children:u.jsx(cP,{inputLanguage:e,children:u.jsx("img",{src:e==="french"?yw:n?vw:xw,alt:"FrenchFlag"})})}),u.jsx(uP,{onClick:t,inputLanguage:e,children:n?"ქართული":"English"})]})},aP=g.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  align-items: center;
`,lP=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  /* width: 50%; */
  @media (max-width: 576px) {
    /* width: 2rem; */
  }
`,cP=g.div`
  display: flex;
  width: 4rem;
  height: 2.2rem;
  padding: 0.4rem;
  padding-left: 0.6rem;

  margin: auto 1rem;
  background-color: ${e=>e.isGeorgian?"#E0E0E0":"#007bff"};
  border-radius: 100px;
  cursor: pointer;
  &:not(input) {
    user-select: none;
  }
  img {
    width: 2rem;
    @media (min-width: 576px) and (max-width: 767px) {
      width: 2rem;
    }
    @media (max-width: 576px) {
      width: 2rem;
    }
    animation: ${e=>e.inputLanguage==="french"?Fr`
            ${CL} 0.8s forwards
          `:Fr`
            ${kL} 0.8s forwards
          `};
  }
`,ww=g.div`
  margin: 0.5rem auto;
  outline: 2px solid ${e=>e.theme.primarText};
  background-color: ${e=>e.inputLanguage==="french"?"#007bff":e.theme.primaryText};
  color: ${e=>e.inputLanguage==="french"?e.theme.primaryText:e.theme.primaryBackground};

  padding: 0.5rem 2rem;
  border-radius: 12px;
  @media (max-width: 576px) {
    font-size: 1rem;
    width: 4rem;
  }
`,uP=g(ww)`
  background-color: ${e=>e.inputLanguage==="french"?e.theme.primaryText:"#007bff"};
  color: ${e=>e.inputLanguage==="french"?e.theme.primaryBackground:e.theme.primaryText};
`,ta=(e,t)=>e.map(n=>n[t]),bw=()=>{const{handleListen:e,isActiveStates:t}=ut(),[n,r]=S.useState(!1);S.useState(!0);const{t:i,i18n:o}=te(),s=o.language==="ka",a=fe(),l=H(L=>L.dictionary.searchResults)||[],c=ta(l,"french"),d=ta(l,"georgian"),f=ta(l,"english"),p=ta(l,"definition"),y=s?d:f,v=s?"Geo":"Eng",[x,k]=S.useState(""),[m,h]=S.useState(!1),[w,C]=S.useState("french"),A=()=>{C(L=>L==="french"?s?"georgian":"english":"french")},b=()=>{x.trim()?a(wi({language:w==="french"?"french":s?"georgian":"english",query:x})):a(wi({language:"",query:""}))},j=()=>{h(!m)},E=()=>{k(""),a(wi({language:"",query:""})),a(HL())},T=L=>{L.key==="Enter"&&b()},O=m?l:l.slice(0,4);return u.jsxs(dP,{children:[u.jsx(sP,{inputLanguage:w,toggleInputLanguage:A,isGeorgian:s,secondLanguage:y}),u.jsxs(fP,{className:n?"active":"",children:[u.jsx(yP,{onClick:E,src:qL,alt:"ClearIcon"}),u.jsx(pP,{type:"text",value:x,onFocus:()=>r(!0),onBlur:()=>r(!1),onChange:L=>k(L.target.value),onKeyPress:T,placeholder:w==="french"?"Rechercher dans le dictionnaire...":s?"შეიყვანე სიტყვა...":"Enter word..."}),u.jsx(hP,{onClick:b,src:QL,alt:"SearchIcon"})]}),O.map((L,P)=>u.jsxs(wP,{children:[u.jsxs(mP,{children:[u.jsx(xP,{onClick:e(L.french),children:u.jsx("img",{src:cr,alt:"ListenImg",isActive:t[P]})}),w==="french"?L.french:s?L.georgian:L.english]}),u.jsx(wh,{definition:p,secondLanguage:w==="french"?y:c,secondLangButtonName:v,french:w==="french"?c:y,index:P,isMultipleDefinitions:!0}),u.jsx(bP,{children:u.jsx(Bc,{word:w==="french"?c[P]:y[P],secondLanguage:w==="french"?y[P]:c[P],definition:p[P]})})]},L._id)),l.length>4&&!m&&u.jsx(gP,{onClick:j,children:i("Afficher tout")})," ",x.trim()&&!m&&l.length===0&&u.jsx(vP,{children:i("Aucun mot trouvé")})]})},dP=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 800px;
`,fP=g.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 4px;
  height: 3rem;

  width: 80%;
  max-width: 800px;
  box-shadow: 0 2px 4px rgba(155, 161, 119, 0.637);
  border-radius: 50px;
  border: 1px solid #ccc;
  border-bottom: 2px solid grey;
  border-right: 2px solid grey;
  background-color: ${e=>e.theme.text};

  &:hover,
  &.active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);

    border-bottom: 2px solid #0a0909;
    border-right: 2px solid #0a0909;
  }
`,pP=g.input`
  margin-left: 0.5rem;
  padding: 8px;
  border: none;
  flex: 1;
  width: 100%;
  font-size: 1.2rem;
  outline: none;
  border-radius: 1rem;
`,hP=g.img`
  width: 2rem;
  height: 2rem;
  margin-right: 0.6rem;
  cursor: pointer;
`,mP=g.p`
  display: flex;
  /* font-size: 1.4rem; */
  font-weight: bold;
  margin-right: 0.3rem;
  &:after {
    content: " ";
  }
`;g.p`
  font-size: ${e=>e.isGeorgian?"1rem":"1.3rem"};
`;const gP=g.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  text-align: center;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  width: 10rem;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  background: #001a1a;
  color: gold;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: gold;
    color: #001a1a;
  }
`,yP=g.img`
  background-color: transparent;
  border: none;
  width: 1.4rem;
  height: 1.4rem;
  margin-left: 0.6rem;

  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
`,vP=g.div``,xP=g.div`
  display: flex;
  align-items: center;
  margin-right: 0.3rem;
  font-weight: bold;

  & > img {
    width: ${e=>e.width||"1.2rem"};
    height: ${e=>e.height||"1.2rem"};
    cursor: pointer;

    filter: ${e=>e.isActive?"none":"invert(-150%)"};
    transition: transform 0.3s ease-in-out;
    transform: ${e=>e.isActive?"scale(1.1)":"scale(1)"};
  }
`;g.div`
  position: absolute;
  top: 0;
  right: 0;
`;const wP=g.div`
  width: 90%;
  border-bottom: 5px solid ${e=>e.theme.primaryText};
  border-right: 5px solid ${e=>e.theme.primaryText};
  background: ${e=>e.theme.secondaryBackground};
  color: ${e=>e.theme.primaryText};
  padding: 1rem;
  margin: 1rem 0.5rem;
  position: relative;
  min-height: 3.5rem;
  border-radius: 0 0 0 12px;
  max-width: 100%;
  position: relative;
`,bP=g.div`
  display: inline-block;
  position: absolute;
  bottom: 10%;
  right: 5%;
  /* border: 1px solid red; */
`,Ta=ke("presentTense/fetchPresentTense",async()=>{try{return(await Ce.get("/verbs/tenses/present")).data}catch(e){throw console.log(e),Error("Failed to fetch words")}}),SP={presentTense:[],isLoading:!1,error:null},kP=qe({name:"presentTense",initialState:SP,reducers:{},extraReducers:e=>{e.addCase(Ta.pending,t=>{t.isLoading=!0}).addCase(Ta.fulfilled,(t,n)=>{t.presentTense=n.payload,t.isLoading=!1}).addCase(Ta.rejected,(t,n)=>{t.error=n.error.message})}}),CP=kP.reducer,Sw=()=>{const e=fe(),t=H(L=>L.presentTense.presentTense.presentTenseVerbs)||[],n=H(L=>L.presentTense.isLoading),r=H(L=>L.presentTense.error),[i,o]=S.useState(0),[s,a]=S.useState([]),[l,c]=S.useState(Array(t.length).fill("")),[d,f]=S.useState(!1),[p,y]=S.useState(!1),[v,x]=S.useState(0),[k,m]=S.useState(!0),[h,w]=S.useState(!0),[C,A]=S.useState(!1);S.useEffect(()=>{e(Ta())},[e]),S.useEffect(()=>{t.length>0&&a(t.slice(i,i+5))},[i,t]);const b=(L,P)=>{const $=[...l];$[L+i]=P,c($)},j=()=>{if(s.every((L,P)=>l[P+i]!=="")){const L=s.every(($,z)=>l[z+i]===$.correctAnswer);f(L),y(!0);const P=s.reduce(($,z,D)=>l[D+i]===z.correctAnswer?$+1:$,0);x($=>$+P),w(!1),A(!L)}},E=()=>{i+5>=t.length?m(!1):(o(L=>L+5),y(!1),w(!0),A(!1),c(Array(t.length).fill("")))},T=()=>{y(!1),w(!0),A(!1),c(Array(t.length).fill(""));const L=s.reduce((P,$,z)=>l[z+i]===$.correctAnswer?P+1:P,0);x(P=>P-L)},O=()=>{o(0),c(Array(t.length).fill("")),f(!1),y(!1),x(0),m(!0)};return n?u.jsx(We,{}):r?u.jsx("div",{children:r}):u.jsxs(AP,{children:[u.jsxs(OP,{children:["Score: ",v,"/",t.length]}),s.map((L,P)=>{const $=L.sentence.indexOf("_"),z=L.sentence.slice(0,$),D=L.sentence.slice($+5);return u.jsxs(jP,{children:[P+1+i,": ",z,u.jsxs("span",{children:[L.words.map((V,Q)=>u.jsx(TP,{onClick:()=>b(P,V),"data-questioncorrectanswer":L.correctAnswer===V,"data-usersanswer":l[P+i],"data-showanswers":p&&l[P+i]===V,"data-allanswerscorrect":d,children:V},Q)),D]})]},P)}),u.jsxs(PP,{children:[h&&u.jsx(Oa,{onClick:j,children:"Submit"}),p&&!d&&k&&u.jsx(u.Fragment,{children:C?u.jsx(Oa,{onClick:T,children:"Retry"}):u.jsx(Oa,{onClick:j,children:"Submit"})}),u.jsx(RP,{onClick:E,children:"Next"}),p&&!d&&!k&&u.jsxs(LP,{children:["Your final score is: ",v,u.jsx($P,{onClick:O,children:"Restart"})]})]})]})},AP=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 390px;
  margin: 1rem auto;
  background: ${e=>e.theme.secondaryBackground};
  -webkit-box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  -moz-box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  color: ${e=>e.theme.primaryText};
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    max-width: 370px;
  }
`,jP=g.div`
  background: ${e=>e.theme.tertiaryBackground};
  color: ${e=>e.theme.primaryText};

  border-bottom: 2px solid ${e=>e.theme.primaryBackground};
  border-right: 2px solid ${e=>e.theme.primaryBackground};
  padding: 0.5rem 0.3rem;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  letter-spacing: 0.2px;
  margin: 0.3rem 1rem;
  margin-top: 1rem;

  width: 360px;
  @media (min-width: 576px) and (max-width: 766px) {
    flex-direction: column;
  }

  @media (max-width: 576px) {
    width: 320px;
  }
`,EP=e=>{const t=e["data-usersanswer"]===e.children,n=e["data-showanswers"],r=e["data-questioncorrectanswer"];return t&&n?r?"green":"red":t?"violet":n&&e["data-allanswerscorrect"]==="true"?"green":e.theme.secondaryBackground},TP=g.button`
  border-radius: 8px;
  font-size: 1.2rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  gap: 1rem;
  color: ${e=>e.theme.primaryText};
  background-color: ${e=>EP(e)};

  &:first-child {
    margin-right: 0.3rem;
    margin-left: 0.3rem;
  }
  &:last-child {
    margin-right: 0.3rem;
  }
  &:hover {
    transform: scale(1.1);
    color: rgb(40, 175, 253);
  }
`,Oa=g.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 1rem auto;
  text-align: center;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  width: 10rem;
  font-size: 1.2rem;

  background: ${e=>e.theme.primaryBackground};
  color: ${e=>e.theme.primaryText};
  font-weight: bold;
  margin-bottom: 2rem;
  cursor: pointer;
  &:hover {
    background: ${e=>e.theme.primaryText};
    color: ${e=>e.theme.primaryBackground};
  }
`,OP=g.span`
  padding: 0.5rem;
  background: #7bb5f8;
  margin-left: auto;
`,LP=g.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: #7bb5f8;
  font-size: 1.2rem;
  border-radius: 8px 8px 0 0;
`,PP=g.div`
  display: flex;
  margin-top: 3rem;
  gap: 1rem;
`,$P=g.button`
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  text-align: center;
  width: 10rem;
  font-size: 1.2rem;
  background-color: #0055a4;
  color: #ffffff;
  cursor: pointer;
  border: 2px solid #000c18;
  border-radius: 6px;

  &:hover {
    background-color: #ffffff;
    color: #0055a4;
  }
`,RP=g(Oa)`
  background: ${e=>e.theme.primaryText};
  color: ${e=>e.theme.primaryBackground};
  &:hover {
    background: ${e=>e.theme.primaryBackground};
    color: ${e=>e.theme.primaryText};
  }
`,La=ke("sentences/fetchSentences",async()=>{try{return(await Ce.get("/sentences/general")).data}catch(e){throw console.log(e),Error("Failed to fetch words")}}),zP={sentences:[],isLoading:!1,error:null},NP=qe({name:"sentences",initialState:zP,reducers:{},extraReducers:e=>{e.addCase(La.pending,t=>{t.isLoading=!0}).addCase(La.fulfilled,(t,n)=>{t.sentences=n.payload,t.isLoading=!1}).addCase(La.rejected,(t,n)=>{t.error=n.error.message})}}),FP=NP.reducer,bh=({sentenceData:e})=>{var O,L;const{handleListen:t,isActiveStates:n}=ut(),{t:r,i18n:i}=te(),o=fe(),s=H(P=>P.sentences.sentences)||[],[a,l]=S.useState(!1),[c,d]=S.useState([]),[f,p]=S.useState(!1),[y,v]=S.useState(!1),[x,k]=S.useState(0),m=e||s;S.useEffect(()=>{e||o(La())},[o,e]);const h=((O=m[x])==null?void 0:O.sentence)||"",w=((L=m[x])==null?void 0:L.words)||[],C=P=>{d($=>$.includes(P)?$.filter(z=>z!==P):[...$,P])},A=P=>{d($=>$.filter(z=>z!==P))},b=()=>{const P=c.map(V=>w[V]).join(" ").trim(),$=h.replace(/[^a-zA-Z0-9]/g,"").toLowerCase(),D=P.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()===$;p(D),l(!0),v(!0)},j=()=>{d([]),v(!1),l(!1)},E=()=>{d([]),v(!1),x+1<m.length&&k(P=>P+1)},T=x===m.length-1;return u.jsxs(DP,{children:[u.jsx(WP,{onClick:t(h),children:h}),u.jsxs(IP,{children:[u.jsx(kw,{isCorrect:f,isSubmit:a,children:c.map((P,$)=>u.jsx(BP,{onClick:()=>A(P),children:w[P]},$))}),u.jsx(_P,{children:w&&w.map((P,$)=>u.jsx(MP,{isSelected:c.includes($),onClick:()=>C($),children:P},$))})]}),u.jsx("div",{children:y?f?T?u.jsx("div",{onClick:E,children:u.jsx(et,{children:"Continue"})}):u.jsx("div",{onClick:E,children:u.jsx(et,{children:r("Suivant")})}):u.jsx("div",{onClick:j,children:u.jsx(et,{children:r("Réessayer")})}):u.jsx("div",{onClick:b,children:u.jsx(et,{children:r("Soumettre")})})})]})},DP=g.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin: 0 auto; */
  width: 100%;

  margin: 0 0.3rem;

  -webkit-box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  -moz-box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);

  background-color: ${e=>e.theme.secondaryBackground};
  color: ${e=>e.theme.primaryText};
  @media (min-width: 393px) and (max-width: 576px) {
  }
  /* width: 100%; */
  @media (max-width: 392px) {
  }
  @media (max-width: 281px) {
    max-width: 100%;
  }
`,IP=g.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  margin: 0 auto;
  outline: 1px solid ${e=>e.theme.highlight2};
  @media (min-width: 393px) and (max-width: 576px) {
    width: 360px;
  }
  /* width: 100%; */
  @media (max-width: 392px) {
    width: 340px;
  }
  @media (max-width: 281px) {
    overflow-x: scroll;
    width: 200px;
  }
`,kw=g.div`
  margin: 0 auto;
  width: 340px;

  height: 14rem;
  margin-bottom: 2rem;
  margin-top: 2rem;

  position: relative;
  flex-wrap: wrap;
  display: flex;
  outline: 1px solid ${e=>e.theme.primaryText};
  background-color: ${e=>e.isSubmit&&e.isCorrect?e.theme.correctBack:e.isSubmit&&!e.isCorrect?e.theme.wrongback:e.theme.tertiaryBackground};
`,BP=g.span`
  text-align: center;
  display: flex;
  align-items: center;
  background-color: ${e=>e.theme.highlight3};
  color: ${e=>e.theme.primaryText};
  border-bottom: 2px solid ${e=>e.theme.flagFirst};

  cursor: pointer;
  text-align: center;
  font-size: 1.5rem;
  margin: 0.5rem;
  padding: 0.2rem;
  height: 2.8rem;
  border-radius: 4px;
  @media (min-width: 393px) and (max-width: 576px) {
    font-size: 1.3rem;
  }
  @media (max-width: 392px) {
    font-size: 1.2rem;
    /* margin: 0.5rem; */
    /* padding: 0.2rem; */
  }
`,_P=g(kw)`
  background-color: ${e=>e.theme.tertiaryBackground};
  /* color: ${e=>e.theme.flagFirst}; */
  outline: 1px solid ${e=>e.theme.primaryText};
`,MP=g.button`
  text-align: center;
  display: flex;
  cursor: pointer;
  align-items: center;
  font-size: 1.6rem;
  margin: 0.5rem;
  padding: 0.2rem;
  height: 3rem;
  border-radius: 4px;
  max-width: 100%;
  border: none;
  display: ${e=>e.isSelected?"none":"block"};
`,WP=g.p`
  display: none;
`,UP=()=>{const{t:e,i18n:t}=te();return t.language,u.jsxs(VP,{children:[u.jsxs(Qu,{children:[u.jsx(Ot,{to:"/",children:"Home"}),u.jsx(Ot,{to:"/",children:"About"}),u.jsx(Ot,{to:"/",children:"Contact"}),u.jsx(Ot,{to:"/",children:"Services"})]}),u.jsxs(Qu,{children:[u.jsx(Ot,{to:"/books",children:e("Livres")}),u.jsx(Ot,{to:"/grammer/basic-grammer",children:e("Grammer")}),u.jsx(Ot,{to:"/courses",children:e("Courses")}),u.jsx(Ot,{to:"/dictionary",children:e("Dictionnaire")})]}),u.jsxs(Qu,{children:[u.jsx(Ot,{to:"/vocabulary-topics",children:e("Vocabulaire")}),u.jsx(Ot,{to:"/vocabulary-topics",children:e("Phrases")}),u.jsx(Ot,{to:"/dialogue-topics",children:e("Dialogues")}),u.jsx(Ot,{to:"/dialogue-topics",children:e("Nouvelles")})]})]})},HP=Et`
  0% {
    width: 0%;
    height: 1px;
    left: 50%;
  }

  50% {
    width: 100%;
    height: 1px;
    left: 0;
  }

  100% {
    width: 100%;
    height: 100%;
    left: 0;
  }
`,VP=g.div`
  height: 20rem;
  outline: 1px solid grey;
  border-top: 3px solid black;
  border-right: 3px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  background-color: grey;

  @media screen and (min-width: 576px) and (max-width: 768px) {
    gap: 1rem;
  }
  @media screen and (max-width: 576px) {
    gap: 0.5rem;
  }
`,Qu=g.div`
  display: flex;

  flex-direction: column;
`,Ot=g(ct)`
  text-decoration: none;
  margin: 0 auto;
  position: relative;
  padding: 0.5rem;
  background: ${e=>e.theme.primaryBackground};
  color: ${e=>e.theme.primaryText};
  outline: 1px solid grey;
  border-bottom: 3px solid black;
  border-right: 3px solid black;
  width: 10rem;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  transition: 0.4s all linear;
  &:hover {
    color: white;
    background-color: #258ff3;
  }

  &::before {
    position: absolute;
    content: "";
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    background-color: #0055a4;
    color: black;

    z-index: -1;
  }

  &:hover::before {
    animation: ${HP} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  }

  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 8rem;
    font-size: 1.3rem;
    padding: 0.3rem;
  }
  @media screen and (max-width: 576px) {
    width: 6rem;
    font-size: 1.1rem;
    padding: 0.2rem;
  }
`,QP=[{title:" Découverte de la littérature française.",description:"Plongez dans les trésors de la littérature française classique et contemporaine, en explorant différents niveaux de difficulté, dès le niveau A1. Découvrez :",listItems:[" 50 classiques littéraires"," 35 contemporains"," 20 adaptations"," 100 articles"],buttonLabel:"Lire",buttonColor:"#00384A",link:"/books"},{title:" Jouer Avec Le Français",description:"Améliorez vos compétences linguistiques en jouant à des jeux amusants et éducatifs qui vous aideront à maîtriser le français tout en vous amusant. Profitez de :",listItems:[" Quiz interactifs"," Jeux de mots"," Exercices de dictée"," Activités ludiques"],buttonLabel:"Jouer",buttonColor:"#2B4700",link:"/games"},{title:" Approndre Le Français",description:"Débutez votre parcours d'apprentissage du français, explorez les bases de la grammaire, du vocabulaire et de la communication, et avancez vers la maîtrise. Venez découvrir :",listItems:[" Les fondamentaux de la grammaire"," Un vaste vocabulaire"," La communication quotidienne"," Le perfectionnement"],buttonLabel:"Apprendre",buttonColor:"#67330A",link:""}],qP=()=>(te(),u.jsxs(GP,{children:[u.jsx("h1",{children:"Parlez-vous français?"}),u.jsx(KP,{children:QP.map(e=>{const{title:t,buttonLabel:n,description:r,listItems:i,buttonColor:o,link:s}=e;return u.jsxs(YP,{children:[u.jsx(e$,{children:t.toUpperCase()}),u.jsx("p",{children:r}),u.jsx(ZP,{children:i.map((a,l)=>u.jsx("li",{children:a},l))}),u.jsx(JP,{to:s,children:u.jsx(XP,{style:{backgroundColor:o},children:n})})]},t)})})]})),GP=g.div`
  display: flex;
  flex-direction: column;

  font-family: "Roboto Sans Serif", Verdana, sans-serif;
  line-height: 1.4;
  -webkit-text-size-adjust: 100%;

  margin: 0 1rem;
  margin: 0;
  padding: 0;
  h1 {
    color: ${e=>e.theme.primaryText};
  }
`,KP=g.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: ${e=>e.theme.background};
  gap: 1rem;

  @media (min-width: 576px) and (max-width: 767px) {
    flex-direction: column;
    font-size: 1.3rem;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
    gap: 0;
    margin: 0 auto;
    font-size: 1.2rem;
  }
`,YP=g.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  margin-bottom: 2rem;
  background-color: ${e=>e.theme.secondaryBackground};
  color: ${e=>e.theme.secondaryText};
  padding: 0 1rem;
  width: 335px;
  p {
    text-indent: 20px;
    text-align: center;
  }
  h3 {
    text-align: center;
    &:before {
      content: ${e=>e.theme.background==="#000000"?'"🔷"':'"🔶"'};
    }
    &:after {
      content: ${e=>e.theme.background==="#000000"?'" 🔷"':'" 🔶"'};
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    width: 380px;
    font-size: 1.3rem;
  }

  @media (min-width: 390px) and (max-width: 576px) {
    width: 360px;

    font-size: 1.2rem;
  }
  @media (max-width: 393px) {
    width: 325px;

    font-size: 1.2rem;
  }
`,JP=g(ct)`
  text-decoration: none;
  width: 100%;
  margin-top: auto;
`,XP=g.button`
  /* margin-left: auto; */
  padding: 0.5rem 1rem;
  color: white;
  font-weight: bold;
  width: 100%;
  margin: 1rem 0;
  font-size: 1.6rem;
  cursor: pointer;
  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 1.4rem;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 1.3rem;
  }

  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`,ZP=g.ul`
  list-style: none;
  padding-left: 1rem;
  color: ${e=>e.theme.secondaryText};

  li {
    &:before {
      content: ${e=>e.theme.background==="#000000"?'"🔹"':'"🔸"'};
    }
  }
`,e$=g.h3`
  color: ${e=>e.theme.primaryText};
`,t$=()=>{const{t:e}=te(),t=fe(),n=H(s=>s.books.books),r=H(s=>s.books.isLoading),i=H(s=>s.vocabularyTopics.vocabularyTopics)||[],o=H(s=>s.vocabularyTopics.isLoading);return S.useEffect(()=>{t(Io())},[]),S.useEffect(()=>{t(Bo())},[]),r?u.jsx(We,{}):u.jsxs(n$,{children:[u.jsx(bw,{}),u.jsx(qP,{}),u.jsx(cw,{}),u.jsxs(qu,{children:[u.jsxs(Gu,{children:[u.jsxs(Ku,{children:[e("Tous les livres")," "]}),u.jsx(Yu,{to:"/books/level/a2-b1",children:e("Tout afficher")})]}),u.jsx(n0,{books:n})]}),u.jsx(r$,{children:u.jsx(Sw,{})}),u.jsxs(qu,{children:[u.jsxs(Gu,{children:[u.jsxs(Ku,{children:[e("Vocabulaire thématique")," "]}),u.jsx(Yu,{to:"/vocabulary-topics",children:e("Tout afficher")})]}),u.jsx(dL,{vocabularyTopic:i,isLoadingvocabularyTopit:o})]}),u.jsx(bh,{}),u.jsxs(qu,{children:[u.jsxs(Gu,{children:[u.jsxs(Ku,{children:[e("Niveau A1")," "]}),u.jsx(Yu,{to:"/books/level/a2-b1",children:e("Tout afficher")})]}),u.jsx(n0,{books:n})]}),u.jsx(UP,{})]})},n$=g.section`
  margin: 0 1rem;

  background-color: ${e=>e.theme.primaryBackground};
  color: ${e=>e.theme.primaryText};
  max-width: 100%;
  font-size: 1.8rem;
  @media screen and (max-width: 576px) {
    margin: 0 0.2rem;
    font-size: 1.1rem;
  }
  @media screen and (min-width: 768px) {
    margin: 0 0.3rem;
    font-size: 1.3rem;
  }
  @media screen and (min-width: 992px) {
    margin: 0 0.6rem;
    font-size: 1.4rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 1.6rem;
  }
`;g.div`
  max-height: 100%;
`;const qu=g.div`
  background-image: url("/icons/tex.avif");
  background-repeat: repeat-x;
  margin: 0 2rem;

  border-bottom: 1.6rem solid #c26528;
  margin-bottom: 2rem;
  position: relative;
`;g.h2`
  background: white;
  width: 100%;

  margin: 0;
`;const Gu=g.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  font-size: 1.4rem;
`;g.div`
  height: 2.5rem;
`;const r$=g.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  margin-bottom: 1rem;
  border: 2px solid green;
  @media (min-width: 992px) and (max-width: 1199px) {
  }

  @media (min-width: 768px) and (max-width: 991px) {
  }

  @media (min-width: 576px) and (max-width: 766px) {
    flex-direction: column;
  }

  @media (max-width: 576px) {
    flex-direction: column;
  }
`,Ku=g.p`
  font-size: 2rem;
  background: ${e=>e.theme.vocabularyBack};
  color: #955cff;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #955cff;
  }
  @media screen and (max-width: 576px) {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    margin: 0 0.3rem;
    font-size: 1.3rem;
  }
`,Yu=g(mr)`
  font-weight: bold;
  font-size: 1.6rem;

  color: ${e=>e.theme.background};
  &:hover {
    text-decoration: underline;
    text-decoration-color: ${e=>e.theme.text};
    text-decoration-thickness: 4px;
    text-underline-offset: 6px; /* Adjust the spacing */
  }
  @media screen and (max-width: 576px) {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    margin: 0 0.3rem;
    font-size: 1.3rem;
  }
`,i$=g.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`,xo=g.button`
  background-color: #70ff41;
  color: black;
  width: 23rem;
  font-weight: bold;
  margin: 0 auto;
  padding: 1rem 2rem;
  border-radius: 1rem;
  text-align: center;
  font-size: 2rem;
  letter-spacing: 2px;
`,o$=g.section`
  display: flex;
  justify-content: space-between;
  /* background-color: white; */
  flex-direction: column;
  width: 100%;
  /* height: 100vh; */
  margin: 0 auto;
`,s$=g.div`
  display: flex;
  margin: 0 3rem;
  justify-content: ${e=>e.index%2===0?"flex-start":"flex-end"};
  align-items: center;
`,a$=g.li`
  display: flex;
  background-color: #3e3efa;
  color: white;
  padding: 1rem;
  border-radius: 3rem 0 2rem 0;
  align-items: center;
  margin-bottom: 1rem;
`,l$=g.li`
  display: flex;
  color: white;
  background-color: #4daffa;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0 3rem 0 2rem;
  align-items: center;
  justify-content: flex-end;
`,l0=g.img`
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  margin-right: 1rem;
  margin-left: 1rem;
`,c0=g.div`
  display: flex;
  flex-direction: column;
`,u0=g.span`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 1rem;
`,d0=g.span`
  font-size: 1.2rem;
  font-weight: 400;
`,Sh=g.div`
  margin: 0 auto;
  margin-bottom: 3rem;
`,c$=g.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  text-align: center;
`;g.div`
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 2rem;
  padding-left: 3rem;
  gap: 1rem 2rem;

  gap: 5rem;
  div {
    display: flex;

    p {
      background-color: #0c1c29;
      padding: 2rem;
      color: white;
      font-size: 1.6rem;
      border-radius: 1rem;
    }
  }
`;const u$=e=>e.showAnswers&&e.answers===e.option?e.questionCorrectAnswer&&e.showAnswers?"green":"red":e.usersAnswer&&e.answers===e.option?"violet":e.showAnswers&&e.allAnswersCorrect?"green":"white",d$=g.button`
  border-radius: 8px;
  font-size: 1.4rem;
  padding: 0.5rem;
  cursor: pointer;
  gap: 1rem;
  color: black;
  background-color: ${e=>u$(e)};

  &:first-child {
    margin-right: 0.6rem;
    margin-left: 0.2rem;
  }

  &:hover {
    transform: scale(1.1);
    color: rgb(40, 175, 253);
  }
`,Ju=g.button`
  background-color: #70ff41;
  background-color: #41c3ff;
  color: black;
  width: 20rem;
  font-weight: bold;

  margin: 0 auto;
  padding: 1rem 2rem;
  border-radius: 1rem;
  text-align: center;
  font-size: 2rem;
  letter-spacing: 2px;
`;g.div`
  width: 10rem;
  margin: 0 auto;
  padding: 1rem;
  background-color: #c3ffaf;
  border: 2px solid slateblue;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  span {
    font-size: 2rem;
    margin-left: 1rem;
  }
`;const f$=g.section`
  width: 100%;
  height: 100vh;
  display: flex;

  align-items: center;
  flex-direction: column;
  background-color: white;
`,p$=g.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,h$=g.div`
  border: 2px solid slateblue;
  margin: 0 auto;
  width: 30rem;
  height: 10rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
  padding: 1rem;
  position: relative;
  display: flex; /* Use flexbox */
  flex-wrap: wrap; /* Allow flex items to wrap to the next line */
`,m$=g.span`
  text-align: center;
  display: flex;
  cursor: pointer;
  align-items: center;
  font-size: 2rem;
  margin: 0.5rem;
  padding: 0.5rem;
  height: 3rem;
`,g$=g.div`
  background-color: #ffe1e1;

  margin: 0 auto;
  width: 30rem;
  height: 10rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
  padding: 1rem;
  position: relative;
  display: flex; /* Use flexbox */
  flex-wrap: wrap; /* Allow flex items to wrap to the next line */
`,y$=g.button`
  background-color: #ffe1e1;
  text-align: center;
  display: flex;
  cursor: pointer;
  align-items: center;
  font-size: 2rem;
  margin: 0.5rem;
  padding: 0.5rem;
  height: 3rem;
  border: none;
  display: ${e=>e.isSelected?"none":"block"};
`,v$=g.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: space-between;
`,x$=g.div`
  display: grid;
  grid-template-columns: 35% 35% 35%;
  justify-content: space-between;
  width: 100%;

  margin: 0 3rem;
`,w$=g.div`
  display: flex;
  color: white;
  background-color: #0c1c29;
  padding: 1rem;
  margin: 1rem;
  border-radius: 30px;
  margin-right: 3rem;
  /* width: 30rem; */
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`,b$=g.div`
  display: flex;
  align-items: center;
  height: 3rem;
  width: 100%;
  font-size: 1.6rem;
  font-weight: bold;
  border-radius: 30px;
  padding: 0 1rem;
  > :first-child {
    margin-right: 0.6rem;
  }
  > :last-child {
    margin-left: auto;
    margin-right: 2rem;
  }
`;g.div`
  display: flex;

  margin-right: auto;
  background-color: red;
  justify-content: flex-end;
`;const S$=g.div`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1rem;
  margin-left: 3rem;
  width: 100%;
`;g.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  h2 {
    text-align: center;
  }
`;const k$=g.div`
  display: flex;
  flex-direction: column;
  border: 2px solid rgb(219, 255, 161);
  border-radius: 6px;
  padding: 2rem;
  padding-left: 3rem;
  gap: 1rem 2rem;
  background-color: grey;

  div {
    width: 50%;
    padding: 1rem;
    margin-bottom: 0.4rem;
    font-size: 1.2rem;

    border-radius: 12px;
    background-color: rgb(219, 255, 161);
  }
`;g.button`
  border-radius: 8px;
  font-size: 1.2rem;
  padding: 4px 6px;
  cursor: pointer;
  gap: 1rem;
  color: black;
  &:first-child {
    margin-right: 0.6rem;
    margin-left: 0.2rem;
  }
  &:hover {
    transform: scale(1.1);
    background-color: rgb(253, 253, 40);
    color: rgb(40, 175, 253);
  }
`;g.button`
  margin-top: 1rem;
  margin: 0 auto;
  padding: 1rem;
  font-size: 1.1rem;
  width: 8rem;
  background-color: rgb(253, 253, 40);
  color: ${e=>e.theme.colors.text};
  cursor: pointer;
  &:hover {
    background-color: rgb(107, 253, 40);
    color: ${e=>e.theme.colors.text2};
  }
`;g.span`
  background-color: #70ff41;
  color: black;
  width: 20rem;
  font-weight: bold;

  margin: 0 auto;
  margin-top: 2rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  text-align: center;
  font-size: 2rem;
  letter-spacing: 2px;
  cursor: pointer;
  &:hover {
    &:hover {
      background-color: rgb(107, 253, 40);
      color: ${e=>e.theme.colors.text2};
    }
  }
`;const Pa=ke("dialogueExercises/fetchDialoguesExercises",async e=>{try{return(await Ce.get(`/course/elementary/exercise-1/${e}`)).data}catch{throw Error("Failed to fetch dialogues for lesson")}}),C$={dialogueExercises:[],isLoading:!1,error:null},A$=qe({name:"dialogueExercises",initialState:C$,reducers:{},extraReducers:e=>{e.addCase(Pa.pending,t=>{t.isLoading=!0,t.error=null}).addCase(Pa.fulfilled,(t,n)=>{t.dialogueExercises=n.payload,t.isLoading=!1}).addCase(Pa.rejected,(t,n)=>{t.isLoading=!1,t.error=n.error.message})}}),j$=A$.reducer,f0=e=>{const t=document.createElement("canvas"),r=t.getContext("2d").measureText(e).width;return t.remove(),r},E$=({Continue:e,lessonsCurrentIndex:t})=>{const n=fe();H(T=>T.dialogueExercises.isLoading),H(T=>T.dialogueExercises.error);const r=H(T=>T.dialogueExercises.dialogueExercises)||[],[i,o]=S.useState(Array(r.length).fill("")),[s,a]=S.useState(!1),[l,c]=S.useState(0),[d,f]=S.useState(!1),[p,y]=S.useState(!1),[v,x]=S.useState(!1),k=S.useRef([]),[m,h]=S.useState([]),w=S.useRef(null);S.useEffect(()=>{n(Pa(t))},[n,t]),S.useEffect(()=>{C()},[r]),S.useEffect(()=>{k.current=k.current.slice(0,r.length)},[r.length]),S.useEffect(()=>{const T=r.map(O=>{const L=O.message.indexOf("_"),P=f0(O.message.slice(0,L)),$=k.current[0].current.offsetWidth;return P/$*100+2});h(T)},[r,f0]);const C=()=>{o(Array(r.length).fill("")),a(!1),c(0),f(!1),x(!1),y(!1)},b=r.map(T=>T.correctAnswer).join(",")===i.join(","),j=(T,O)=>{const L=[...i];L[T]=O,o(L)},E=()=>{let T=0,O=!1;r.forEach((L,P)=>{L.correctAnswer===i[P]?T++:O=!0}),c(T),a(!0),f(T===r.length),x(O),y(!0)};return u.jsxs(c$,{children:[u.jsx("h2",{children:"Choisissez la bonne réponse."}),u.jsx(T$,{children:r.map((T,O)=>{const L=T.message.indexOf("_"),P=T.message.slice(0,L),$=T.message.slice(L+5);return k.current[O]=w,u.jsx("div",{ref:w,children:u.jsxs("p",{children:[O+1,": ",P,u.jsx("span",{style:{textDecoration:"underline"},children:T.options.map((z,D)=>u.jsx(d$,{onClick:()=>j(O,z),questionCorrectAnswer:T.correctAnswer===z,usersAnswer:i[O]===z,showAnswers:s&&i[O]===z,allAnswersCorrect:d,disabled:i[O]!=="",children:z},D))}),$]})},O)})}),u.jsx(Sh,{children:s?u.jsx("div",{onClick:C,children:v?u.jsx(Ju,{children:"Retry"}):e}):u.jsx("div",{onClick:E,children:b?d?e:u.jsx(Ju,{children:"Submit"}):u.jsx(Ju,{children:"Submit"})})}),b&&u.jsxs(k$,{children:[u.jsxs("p",{children:["Score: ",l]}),l===r.length&&u.jsx("p",{children:"Good job!"})]})]})},T$=g.div`
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  margin: 0 2rem;
  gap: 1rem;
  margin-bottom: 1rem;
  div {
    display: flex;
    align-items: center;
    p {
      background-color: #4b9fff;
      padding: 1rem;
      color: white;
      font-size: 1.3rem;
      border-radius: 1rem;
      letter-spacing: 2px;
      min-width: 400px;
      width: 100%;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    margin: 0 1rem;
    gap: 0.5rem;
    margin-bottom: 1rem;

    p {
      min-width: 350px;
      padding: 0.5rem;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    display: flex;
    margin: 0 0.5rem;
    margin-bottom: 1rem;
    min-width: 300px;

    flex-direction: column;
    div {
      p {
        width: 100%;
      }
    }
  }

  @media (min-width: 576px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    margin: 0 0.3rem;

    margin-bottom: 1rem;
    min-width: 300px;

    div {
      p {
        min-width: 300px;

        width: 100%;
      }
    }
  }

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    margin: 0 0.3rem;
    margin-bottom: 1rem;
    min-width: 300px;

    div {
      min-width: 300px;

      p {
        min-width: 300px;
        width: 100%;
      }
    }
  }
`,O$="/assets/jm-312650a2.jpeg",L$="/assets/clairefraser-8e4eedc8.webp",P$="/assets/bonjor je mappelle jaime-4a41d2e4.mp3",$$="/assets/et toi tu tappelle commonen jaime-95b48b2f.mp3",R$="/assets/enchante claire jaime-48728a03.mp3",Cw="/assets/bonjour jaime claire-dda50943.mp3",Aw="/assets/je mappelle Claire claire-db931124.mp3",jw="/assets/encante Claire-990951c9.mp3",Xu=ke("dialogues/fetchAudioFiles",async()=>{try{return(await Ce.get("/audio")).data}catch{throw Error("Failed to fetch audio files")}}),$a=ke("dialogues/fetchDialoguesForLesson",async e=>{try{return(await Ce.get(`/course/elementary/dialogues/${e}`)).data}catch{throw Error("Failed to fetch dialogues for lesson")}}),z$={dialogues:[],isLoading:!1,error:null},N$=qe({name:"dialogues",initialState:z$,reducers:{},extraReducers:e=>{e.addCase($a.pending,t=>{t.isLoading=!0,t.error=null}).addCase($a.fulfilled,(t,n)=>{t.dialogues=n.payload,t.isLoading=!1}).addCase($a.rejected,(t,n)=>{t.isLoading=!1,t.error=n.error.message}).addCase(Xu.pending,t=>{t.isLoading=!0,t.error=null}).addCase(Xu.fulfilled,(t,n)=>{t.audioFiles=n.payload,t.isLoading=!1}).addCase(Xu.rejected,(t,n)=>{t.isLoading=!1,t.error=n.error.message})}}),F$=N$.reducer,D$=({Continue:e,lessonsCurrentIndex:t})=>{const n=fe(),r=H(m=>m.dialogues.dialogues)||[];H(m=>m.dialogues.audioFiles);const[i,o]=S.useState(0),[s,a]=S.useState(0),l=S.useRef(null),[c,d]=S.useState(!1),f=[P$,Cw,$$,Aw,R$,jw],p=()=>{const m=f[s];new Audio(m).play(),a(s+1)};S.useEffect(()=>{p()},[]);const y=m=>{if(!c){d(!0);const h=new Audio(f[m]);h.play(),h.addEventListener("ended",()=>{setTimeout(()=>{d(!1)},2e3)})}};S.useEffect(()=>{n($a(t))},[]),S.useEffect(()=>{p()},[]),S.useEffect(()=>{let m;return c&&(m=setTimeout(()=>{d(!1)},1500)),()=>{clearTimeout(m)}},[c]);const v=()=>{o(i+1)},x=()=>{v(),p()},k=i>=r.length-1;return u.jsxs(o$,{onClick:x,ref:l,children:[u.jsx("ul",{children:r.slice(0,i+1).map((m,h)=>u.jsx(s$,{onClick:k&&!c?()=>y(h):void 0,index:h,children:h%2===0?u.jsxs(a$,{children:[u.jsx(l0,{src:O$,alt:"Jaime"}),u.jsxs(c0,{children:[u.jsx(u0,{children:m.message}),u.jsx(d0,{children:m.translation})]})]}):u.jsxs(l$,{children:[u.jsxs(c0,{children:[u.jsx(u0,{children:m.message}),u.jsx(d0,{children:m.translation})]}),u.jsx(l0,{src:L$,alt:"Claire"})]})},h))}),u.jsx(Sh,{children:k&&e})]})},I$="/assets/bonjourCl-13530681.mp3",B$="/assets/tu t appel commen Claire-c40a1782.mp3",_$="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAChElEQVR4nO2aT4hNURzHP8hjpjBvIc+InVlZsvM2/swWawkL2ekZGSmxUAY7u9lZCYshmSaklH8LU9hiQfRsGDUkpHF16nvrdNxz331v3p9zr/nW2fx+5957Pp3f+fc7Fxb0/6kMXAdmgSfAEDnUKmAaiKzymJxpBfDUgTDlNzlSP/AgASIuudAyYCoFIhcgJeB2A4jgQZYCtzJABA2yBLiaESIKGeJKExDNgGwD1tIFLQYuNwmRFWQQ+AJ8BvZ0EmIRMN4CRFaQNdbEMQfUOgVyqUWIZsfIMYGY50baDXFxHhCtDPa9gplrZ5idnSdE1GDMHdKi6mpEz85o/KQuZheAjw0+HnUQpCb/S2BDgj9ep26mgZzP+PFOgmwFXqnOhwSYCvBV/i2+l9QDADEaAB5aPeOG2Tn5buBRFAiI0Urgteqe4d9p2RwFfunQFgzIJmCHJ8wihZLb4Dvy7Q8FxEwwL2Q7ndCme/Id9kwK46GA9AEnFCrGPuy06YBnlop7azoUkFjHZb/r2Idkf+fYB2WvhwayWvZPjr1P9h+OfbnH3nOQigekX/bvGe09BxltEFpvHfu60ELLhM5Ja7DvdNp00DPYq7I/C3H6PZXQpvvymY2kraOhTb/xgrg9oT1V1Z3VtiXoBdGnAeCNZ4tSUSj+9G1RQtk0lpUfNvWeK/xsjck34XvBWAAgVasn3gPrHb/JqHwD/gCbfS8pCabeQ5Ca1RMuBFYywruFD+2oW0rZxsy0M9fV7eTDPiv5sJucpoNGNSYirR+5TNBNqr7piSMUIGW6iy6oEEnsQl0rFOqip1BXb4W6DC3U9XShfhhI+4XjETlVGbimk56B2NjrBi2ILugvduZVUeSyk34AAAAASUVORK5CYII=",Ji=({isActiveIndex:e})=>{const[t,n]=S.useState(!1),r=()=>{e!==-1&&(n(!0),setTimeout(()=>{n(!1)},2e3))};return u.jsx(M$,{isActive:t,onClick:r,children:u.jsx("img",{src:_$,alt:"listen"})})},M$=g.div`
  display: flex;
  align-items: center;
  & > img {
    width: ${e=>e.width||"1.2rem"};
    height: ${e=>e.height||"1.2rem"};
    cursor: pointer;
    filter: ${e=>e.isActive?"none":"invert(50%)"};
    transition: transform 0.3s ease-in-out;
    transform: ${e=>e.isActive?"scale(1.1)":"scale(1)"};
  }
`,Ra=ke("newPhrases/fetchNewPhrases",async e=>{try{return(await Ce.get(`/course/elementary/phrases/${e}`)).data}catch{throw Error("Failed to fetch phrases for lesson")}}),W$={newPhrases:[],isLoading:!1,error:null},U$=qe({name:"newPhrases",initialState:W$,reducers:{},extraReducers:e=>{e.addCase(Ra.pending,t=>{t.isLoading=!0,t.error=null}).addCase(Ra.fulfilled,(t,n)=>{t.newPhrases=n.payload,t.isLoading=!1}).addCase(Ra.rejected,(t,n)=>{t.isLoading=!1,t.error=n.error.message})}}),H$=U$.reducer,V$=({Continue:e,lessonsCurrentIndex:t})=>{const[n,r]=S.useState(0),i=fe(),o=H(d=>d.newPhrases.newPhrases)||[],s=H(d=>d.newPhrases.isLoading),a=()=>{r(d=>d+1)};S.useEffect(()=>{i(Ra(0))},[i]);const l=[I$,Cw,B$,Aw,jw];function c(d){const f=new Audio(l[d]);f.play(),console.log("audio",f)}if(s===!0)return u.jsx("p",{children:"Loading"});if(s===!1)return u.jsxs(v$,{onClick:a,children:[u.jsx(x$,{children:o&&o.originalPhrases&&o.translatedPhrases&&o.originalPhrases.slice(0,n+1).map((d,f)=>u.jsxs(w$,{children:[u.jsxs(b$,{onClick:()=>c(f),children:[u.jsx(Ji,{})," ",u.jsx("div",{children:d})]}),u.jsx(S$,{children:o.translatedPhrases[f]})]},`phrase-${f}`))}),u.jsx(Sh,{children:e})]})},Zu=ke("dialogues/fetchAudioFiles",async()=>{try{return(await Ce.get("/")).data}catch{throw Error("Failed to fetch audio files")}}),za=ke("sentenceBuilder/fetchSentenceBuilder",async e=>{try{return(await Ce.get(`/course/elementary/sentence-builder/${e}`)).data}catch{throw Error("Failed to fetch dialogues for lesson")}}),Q$={sentenceBuilder:[],audioFiles:[],isLoading:!1,error:null},q$=qe({name:"sentenceBuilder",initialState:Q$,reducers:{},extraReducers:e=>{e.addCase(za.pending,t=>{t.isLoading=!0,t.error=null}).addCase(za.fulfilled,(t,n)=>{t.sentenceBuilder=n.payload,t.isLoading=!1}).addCase(za.rejected,(t,n)=>{t.isLoading=!1,t.error=n.error.message}).addCase(Zu.pending,t=>{t.isLoading=!0,t.error=null}).addCase(Zu.fulfilled,(t,n)=>{t.audioFiles=n.payload,t.isLoading=!1}).addCase(Zu.rejected,(t,n)=>{t.isLoading=!1,t.error=n.error.message})}}),G$=q$.reducer,K$=({Continue:e,lessonsCurrentIndex:t})=>{const{handleListen:n,isActiveStates:r}=ut(),i=fe(),o=H(A=>A.sentenceBuilder.sentenceBuilder)||[],[s,a]=S.useState(0),{sentence:l,words:c}=o||{};console.log({sentence:l,words:c}),S.useEffect(()=>{i(za(t))},[i,t]);const[d,f]=S.useState([]),[p,y]=S.useState(!1),[v,x]=S.useState(!1),k=A=>{f(b=>b.includes(A)?b.filter(j=>j!==A):[...b,A])},m=A=>{f(b=>b.filter(j=>j!==A))},h=()=>{const A=d.map(j=>c[j]).join(" ").trim(),b=A===l;console.log(b,A,l),y(b),x(!0)};console.log("newPair",s),console.log("sentenceBuilders length",o.length);const w=()=>{f([]),x(!1)},C=s===o.length-1;return console.log("nextComponent",C),u.jsxs(f$,{children:[u.jsx("h2",{children:"Build the Sentence"}),u.jsx(ed,{onClick:n(l),children:"play the sentence"}),u.jsx(Y$,{onClick:n(l),children:l}),u.jsxs(p$,{children:[u.jsx(h$,{children:d.map((A,b)=>u.jsx(m$,{onClick:()=>m(A),children:c[A]},b))}),u.jsx(g$,{children:c&&c.map((A,b)=>u.jsx(y$,{isSelected:d.includes(b),onClick:()=>k(b),children:A},b))}),u.jsx("div",{children:v?p?e:u.jsx("div",{onClick:w,children:u.jsx(ed,{children:"Retry"})}):u.jsx("div",{onClick:h,children:u.jsx(ed,{children:"Submit"})})})]})]})},ed=g.div`
  background-color: #70ff41;
  color: black;
  width: 20rem;
  font-weight: bold;
  margin: 0 auto;
  padding: 1rem 2rem;
  border-radius: 1rem;
  text-align: center;
  font-size: 2rem;
  letter-spacing: 2px;
`,Y$=g.p`
  display: none;
`,Na=ke("gramer/getGrammer",async e=>{try{return(await Ce.get(`/course/elementary/grammer/${e}`)).data}catch{throw Error("Failed to fetch grammer for lesson")}}),J$={grammer:[],isLoading:!1,error:null},X$=qe({name:"grammer",initialState:J$,reducers:{},extraReducers:e=>e.addCase(Na.pending,t=>{t.isLoading=!0}).addCase(Na.fulfilled,(t,n)=>{t.grammer=n.payload,t.isLoading=!1}).addCase(Na.rejected,(t,n)=>{t.error=n.error.message})}),Z$=X$.reducer,eR=({lessonsCurrentIndex:e,Continue:t})=>{const n=fe(),r=H(a=>a.grammer.grammer)||[],i=H(a=>a.grammer.isLoading),{handleListen:o,isActiveStates:s}=ut();return S.useEffect(()=>{n(Na(e))},[n]),i?u.jsx("p",{children:"Loading"}):u.jsxs(tR,{children:[u.jsx("ul",{children:r&&r.map(a=>u.jsxs("div",{children:[u.jsx("h1",{children:a.title}),u.jsx("h3",{children:a.titleGeo}),u.jsx(td,{children:a.verbe.map((l,c)=>u.jsxs(nR,{children:[u.jsxs(m0,{children:[c+1,"."]}),u.jsxs(p0,{children:[u.jsx(g0,{onClick:o(l),className:s[c]?"active":"inactive",children:u.jsx("img",{src:cr,alt:"ListenImg",isActive:s[c]})}),l]}),u.jsx(h0,{children:a.verbeGeo[c]})]},c))}),u.jsx(td,{children:u.jsxs(td,{children:[u.jsx("h2",{children:"examples"}),a.examples&&a.examples.map((l,c)=>u.jsxs(rR,{children:[u.jsxs(m0,{children:[c+1,"."]}),u.jsx(g0,{onClick:o(l),className:s[c]?"active":"inactive",children:u.jsx("img",{src:cr,alt:"ListenImg",isActive:s[c]})}),u.jsx(p0,{children:l}),u.jsx(h0,{children:a.examplesGeo&&a.examplesGeo[c]})]},c))]})})]},a._id))}),t]})},tR=g.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 2rem;
  justify-content: center;
  ul {
    margin-bottom: 2rem;
  }
`,td=g.ul`
  display: flex;
  flex-direction: column;
`,nR=g.div`
  list-style: none;
  line-height: 2rem;
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid gold;
  border-radius: 0 0 0 8px;
  padding: 0.5rem;
  width: 100%;
`,p0=g.span`
  display: flex;
  min-width: 300px;
  font-size: 1.4rem;
  letter-spacing: 1px;

  font-weight: bold;
  &::after {
    content: "  ";
  }
  &::before {
    content: "  ";
  }
`,h0=g.span`
  font-size: 1.2rem;
  letter-spacing: 1.4px;
`,m0=g.span`
  font-size: 1.6rem;
`,g0=g.div`
  display: flex;
  align-items: center;
  margin: 0 0.3rem;
  & > img {
    width: ${e=>e.width||"1.2rem"};
    height: ${e=>e.height||"1.2rem"};
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  }

  &.active > img {
    transform: scale(1.1);
    filter: none;
  }

  &.inactive > img {
    transform: scale(1);
    filter: invert(-150%);
  }
`,rR=g.div`
  display: flex;
  padding: 0.5rem;
  width: 100%;
  border-bottom: 2px solid gold;
`,iR=()=>{const[e,t]=S.useState(0),[n,r]=S.useState(0),i=()=>{r(s=>s===o.length-1?(t(a=>a+1),0):s+1)},o=[u.jsx(eR,{lessonsCurrentIndex:e,Continue:u.jsx(xo,{onClick:i,children:"Continue"})}),u.jsx(D$,{lessonsCurrentIndex:e,Continue:u.jsx(xo,{onClick:i,children:"Continue"})}),u.jsx(E$,{lessonsCurrentIndex:e,Continue:u.jsx(xo,{onClick:i,children:"Continue"})}),u.jsx(K$,{lessonsCurrentIndex:e,Continue:u.jsx(xo,{onClick:i,children:"Continue"})}),u.jsx(V$,{lessonsCurrentIndex:e,Continue:u.jsx(xo,{onClick:i,children:"Continue"})})];return u.jsx("div",{children:u.jsx(i$,{children:o[n]})})},oR=g.div`
  padding: 20px;
`,sR=g.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`,aR=g.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`,lR=g.p`
  font-size: 18px;
  font-style: italic;
`,cR=()=>u.jsxs(oR,{children:[u.jsx(sR,{children:"Intermediate Page"}),u.jsx(lR,{children:`"Exciting things are on the horizon! We're working diligently to bring you the best learning experience for our Intermediate and Advanced courses. While the content is being carefully crafted, stay tuned and get ready to embark on an incredible language journey with us. We can't wait to share it all with you soon! Thank you for your patience and enthusiasm."`}),u.jsxs(aR,{children:[u.jsx("p",{children:"Welcome to the Intermediate level! This level is designed for learners who have some basic knowledge of the language and want to improve their skills further."}),u.jsx("p",{children:"In this course, you will learn more complex grammar structures, expand your vocabulary, and practice reading and listening to intermediate-level texts and dialogues."}),u.jsx("p",{children:"By the end of this course, you will be able to engage in more meaningful conversations and understand intermediate-level content."})]})]}),uR=()=>{};g.button`
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  margin-bottom: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;g.div`
  padding: 20px;
`;g.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;g.div`
  background-color: #ffebeb;
  color: #000;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;g.div`
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: ${e=>e.highlighted?"green":"black"};
`;g.div`
  display: ${e=>e.show?"block":"none"};
  color: red;
  margin-bottom: 10px;
  opacity: ${e=>e.show?1:0};
  transition: opacity 0.3s ease-in-out;
`;g.span`
  font-weight: bold;
`;g.span`
  margin-left: 5px;
`;g.button`
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #0056b3;
  }
`;g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;g.button`
  background-color: #007bff;
  color: #000;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #0056b3;
  }
`;g.div`
  font-weight: bold;
`;g.div`
  font-style: italic;
  margin-bottom: 5px;
`;g.div`
  padding: 20px;
`;g.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;g(ct)`
  display: block;
  font-size: 18px;
  color: #007bff;
  margin-bottom: 10px;
  text-decoration: none;
`;const dR=({title:e,duration:t,difficulty:n,vocabularyCount:r,description:i,image:o,phrase:s})=>u.jsxs(fR,{children:[u.jsxs(pR,{children:[u.jsx(hR,{src:o,alt:e}),u.jsx("p",{children:s})]}),u.jsx("h3",{children:e}),u.jsxs(mR,{children:["Duration:",u.jsx("span",{children:t})]}),u.jsxs(gR,{children:["Difficulty:",u.jsx("span",{children:n})]}),u.jsxs(yR,{children:["Vocabulary Count:",u.jsx("span",{children:r})]}),u.jsxs(vR,{children:["Description:",i]})]}),fR=g.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  min-width: 260px;
  max-width: 520px;
  height: 1000px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  line-height: 1.5;
  &:hover {
    transform: translateY(-1%) translateX(1%);
    transition: transform 0.3s ease;
  }
  p {
    font-size: 1.2rem;
  }
`,pR=g.div`
  display: flex;
  position: relative;
  height: 320px;

  p {
    line-height: 1.2;

    position: absolute;
    bottom: 0;
    text-align: center;
    padding: 0 3.2rem;
    color: black;
    background: #ffdbff;
    font-size: 1.8rem;
  }
`,hR=g.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,mR=g.p`
  padding: 0 1rem;

  span {
    font-size: 1.5rem;
    margin-left: 0.5rem;
    color: blue;
  }
`,gR=g.p`
  padding: 0 1rem;
  span {
    font-size: 1.5rem;
    margin-left: 0.5rem;
    color: #0d4d15;
  }
`,yR=g.p`
  padding: 0 1rem;

  span {
    font-size: 1.5rem;
    margin-left: 0.5rem;
    color: #ff9e1f;
  }
`,vR=g.p`
  padding: 0 1rem;

  span {
    font-size: 1.5rem;
    margin-left: 0.5rem;
    padding: 1rem;
    color: #ff9e1f;
  }
`,xR=[{imgUrl:"/images/vitrine-des-baguettes.jpg",phrase:"- Je veux une baguette s'il vous plaît",title:"Basic French",duration:"6 weeks",difficulty:"Beginner",vocabularyCount:"500",description:"The Basic French course is designed for absolute beginners who have little to no prior knowledge of the French language. Over the course of 6 weeks, students will be introduced to the fundamental aspects of French, including basic vocabulary, essential grammar rules, and simple conversational phrases. Through interactive lessons, fun exercises, and engaging activities, learners will gain the confidence to navigate everyday situations in French-speaking environments. By the end of the course, students can expect to have acquired approximately 500 commonly used vocabulary words and a basic understanding of French sentence structure. Whether you plan to travel to a French-speaking country, communicate with French-speaking friends or colleagues, or simply explore a new language, this course is the perfect starting point on your language journey."},{title:"Intermediate French",duration:"8 weeks",imgUrl:"/images/asking.jpg",phrase:"- Qu'est que vous me conseillez?",difficulty:"Intermediate",vocabularyCount:"1000",description:"The Intermediate French course is tailored for learners who have a foundational understanding of French and wish to deepen their language skills. Spanning 8 weeks, the course will delve into more complex grammar concepts, varied verb tenses, and idiomatic expressions. Students will engage in immersive language activities, authentic conversations, and reading comprehension exercises to strengthen their language proficiency. By the end of the course, students can expect to have expanded their vocabulary to approximately 1000 words and gained confidence in expressing themselves in various real-life situations. Whether you aim to enhance your career opportunities, connect with French-speaking communities, or appreciate French literature and culture, this course will provide the necessary tools to become a more proficient French speaker."},{title:"Advanced French",duration:"12 weeks",imgUrl:"/images/advanceImage.jpg",phrase:"- À qui est-ce que je dois m'adresser pour un échange?",difficulty:"Advanced",vocabularyCount:"2000",description:"The Advanced French course is designed for learners who already possess a strong foundation in the language and seek to achieve fluency and sophistication. Over the course of 12 weeks, students will engage in stimulating discussions, analyze authentic French texts, and participate in advanced grammar workshops. Emphasis will be placed on refining pronunciation, mastering intricate grammar rules, and comprehending complex literary works. By the end of the course, students can expect to have expanded their vocabulary to approximately 2000 words and attained a high level of proficiency in reading, writing, listening, and speaking French. Whether you aspire to pursue higher education in a French-speaking country, work in international settings, or simply enjoy French literature in its original form, this course will elevate your language skills to an advanced level."}],wR=()=>u.jsx(bR,{children:xR.map((e,t)=>u.jsx(SR,{to:`/${e.difficulty.toLowerCase()}`,children:u.jsx(dR,{image:e.imgUrl,phrase:e.phrase,title:e.title,duration:e.duration,difficulty:e.difficulty,vocabularyCount:e.vocabularyCount,description:e.description})},t))}),bR=g.div`
  display: flex;
  margin: 0 1rem;
  margin-top: 3rem;
  align-items: center;
  justify-content: space-evenly;

  gap: 20px;
`,SR=g(ct)`
  text-decoration: none;
  color: black;
`,kR=()=>{const[e,t]=S.useState(!1);return S.useEffect(()=>{const n=()=>{const r=window.scrollY;t(r>0)};return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}},[]),e},CR="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHDklEQVR4nO2Za3ATVRTHi+Ljs36h+N3HJ9FP6gBf/KIC9cGzWEXRwRHRpoUBEWdQhhYfjErtI22ed5M+kiZN32maQFqgQktb2rRUebS7YcZxRGjp6IyQDf6dc0tD22S3abN1/NAzcybJ3bt37y/nnnvOPZuWtiiLsiiL8n+QsUD6s+P+Zblj/uXP/KcPBg7eB9HypCxaX49Kwq5oWNjHVRJ2URtdoz6zjXPTn95EEDf96fJ4IB03/emRMd/yFQs7+e7SB+QR9mpUFJyyKFyPSgLUlPrIInPIYVsG3as07nhg2W6CiKl/We7CAAw6H4xK7GNZEq7ONnlFKEkIk7USAY35lz9Dlpi0yOjxx57WHCIStq2SJWFovgDxVmIXImG2Mg7Gt3zFuH9ZjuYQAJZERXZAFllUK4gpMHJUFPbTMzSddDyE835ZZEatARIAGehZU589unL92tHV68dHV21ckyIEltADkpnIrWGGHu8xNFryYf/hc670/XxLAb+WHIwgTLUMARDIjdVvvJL0pMdffO3R6yvX59x8buMjk220nGZ7+FCwGIc/2YHd27JQ9NVXcFit8DU2ca2yWHlb7ttv4nD2DvzcVjw7kMg+Tenfv7F6Y+7o6g0gmJhjq/jEH/0mPrlDuTno7urGiHRVVanPlzk65Os+wPWQWdVnIpLwwrxByBJjqzbo6JO2WLXd6Ze2YmRnbsYJnx8NNXXwVLnR0X56VhjStsAJZG/dhIvtJaq7GVRiTdJCcUINIidrKwK+VphLLKj1tKG+7iTsZhdOn+xICqa/P8THSARz59d6rlGR7Uw9YisEO1oSH7y6Fr6mFgiGCg4wVWur3bgyLMLjdMPX7FOFCYUGuWWuhUwJQWSJSSlZRRaF15SssW97FgqOHEMFq42DEAyV6O8LocJcjtqaE7zN29SO9uBJRZigP4A83Q7lJSaxtSmAMEeiQWnH2blpSxzApB73T0zYVGKdDmhyoOvsOUWYL3TZGDpepARSMS8IylBlkf1x57dm4M4t/POXGBt077ZMWPTlCSFqXAF0nu3iEyO/mXndXV49bfK+5ha+QQxeGMK5znOKVqFEM5msOR5EZE/xdXqjE1yif8eC3fsZ6xStYSo04vKweHdXCoIZ7DAVW2AuYSg32blzT0IEWvxwlDfy+1iplbflvJWlGDQxYntiziB3zxOIhss5DFmGflPE3rN9R0IIVlYJT1U16l11ON/bN2OrDaLR04DOs70I9Q/wtppKV+xeAh2RrqIgLw99LQWJrRK2ZWi27TaYD+Ogbp+iRdzVfv5ZVmCIQViKDaiy190DNlZy2M6fOmEzOaZZxGG1opnlKzn9R3MHEW2fJRqsNG8Pjh46qgjicQdgLDLDqjfzibU0elHtbI0HdrbizJkedJzu4H4zNPTLRP+GBti+O6CQsgj7NQMx5u/Bt198owhi1VtjPkLqqnAq9q2tCcCqN01bht76eti//zx1EAS3PXy7d+t7kQv7yqOSNW6wJkseDmbvVZyc3VqDU2334kUodAGGgjJuqYkYY4fdZEd1pffeUjNUoO14G+9fZbHAazuS+tKKdG9xyz2Z4DqQEzeYkrPT8hEMAlx2J66M3LMI6fCIBGNBCars9eg4NZG6WPTm2L11te3wONzaOnukO/PPGEhvVtxgkRGG9zIy4kCMhSbVNMRmtPMY461v4r8b3HUxKxkLzbh46bK222+ke4trEiQyoLuVaMC972yFWW+PC4QnAu2KIOQrpkIzWu/mXcNiGB6HC+6KagwODvG2rs4untorRPbf53QExqWXHrrds2X77Z7Md6Nhi1O++DVIp2e9RQlTFJejGZcuD6tapqe7F4ZjZWCllvgUJTubZ9SapigkVKtKBEK6f3sWCr8tmhFDAgh4W1VByBd4BlBsnp40tgaQn5PYGhMgtjWppvHhRAPfGDDj3TUvo/QHPSx6BrfTh1pPEPWuGlUQWkYueyXO/nQm1tbXF8LHmzfwk6aCNSQguDQtFeFlT4V/iQ5DdCjq6+uHr9GLmirXrEtrphKELitT9ZQYFYUPU4LgVkFwaVRkIWUYOupu4ueJuQBMLie699JJvRrEoCZHXRKqAPLimcLD6LRI6feXumyeis8GQLsTnT3IJ2iJqhYfRPZ8mpZC6YHivzZlNyMgKvn8mJ/PS0C+xkauFLEp2O1++03eR2l3ik7XvWlay1wKdBQ0KTpTFjtZoKPvfb4f+bVkxpBFoUxziBkl06RgUlFZFMpmlkwXAIYXsT9V85n5AzB5QZaTmlAFkHYUzUBENqC5YydbE6ZtkYpnFLDmbQW6VxQ+1GyLnU9NeFoGEBbWyRKrlCXh2uyTF65R7kS1qpQjdqo1YTUfwjB7fOKdItsZexlKlqN3hsPs8QV/kbMoi7Ioi5L2f5d/AbwhT5cpNaE8AAAAAElFTkSuQmCC",AR="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAG4klEQVR4nO1Z61MTVxSnte0f0H4B+kGMfcir8tCgTjvtt47UWqudNkD92FqtnREcS4AW7fiAAloJggoMESw4hoolYBUSBFHjg+wGlYcOArtBpQgCyW4YSaync24Eg+yGJCydfuDMnMnm7r3n3t+ee8797Vk/v3mZl3mZl/+DjOgDoiw6/6QRXWDkfzoxALxs7LUuMfbaPqcYbivF8slEGW4rtuE97DOTnVFdwBkEMaoLcFj0ATCqC7CP1AVGzOnijUZ4lWZtn1Esr6EZfohmeXCr2IfhT1KsbS2OFbNr0ftvRxCTqvNPmhMAbW3wGsVwP9AMZ55x8aLKscRbAoBGdIGR6IkJjww3vLlUchBG1voBzfIdvgOYqhTLtxtZ6/vTwNQFRlh0/omSgwCAlyiWT6MZ7olUIJ5vOc5Bs3wKzuE3l6IBWECxXLE3i7t+9xFR77zDFeFcrnMrS1vXJKtNlmS16RMJPMEVebKQq3cG4XhWMtSc1kKNajtoVTvINbbhPQ9jp8zVMwgAgShL6FiPF60svfZG8jFTYmJR2+sTbWQ7zTD5ydydoC9SguHXWICjC8FesJD8ul5fyowlfTSqXZ4AUs7q6StLW5OUx0yAYCYDWyQmqF4LVJaWgLZwN/QdCAHrIRmcTQ2G3QmhsDM+DNLiwoniNbadSw0GLl8GfftDQXt0D1SWqYkN0ZhhLKt8BoKeUKpN2/AXU6y77HTReBu6siNh/EgQlG8LgTRFODTkRYOlKQaeXFsxRbGtQRVF+lQkhpAxXdnRxIbbbGYUP2s8FnJOCAVx1yP448g+MGTFwmCuDJQbwqC5IHra4if0kV4OQ/rn4C4UREPKF2EwlCcjNiqPZBCbrnN0PhgjSputW2Z/YoscdsYeC7RkfgiDKhnsWB8OfTVyURAT2l21HNhqOfDNzv/mGjkZO6SSQUvmR9O22CQQlmNm5RWT2bZOCET9hRaSibhDQcQTnoBw1ftn5ECpl5FrViuHlA1hwKmCoFq1g9gWfHAMv8ZnIMiHhIxWlxeRDFSeGAIXD4tvJ3c62hgzCaYpfxmcSAwmNqt/LxaOFYav8AkEMlSa4QeFjNYWZ5DshEHrCwhXz/ScloPj6gpii8uXQU1RhkgG44c8Yc3ThOq1BgsZ1KgL4d7BpSTFns/zzRuu2vvncvKrz42CurQlxDbOITT3jR7Lu14DwXcHIWN6wy0YyFlEzgShFOutDjfEwECdnGy1PQmhMJC9CBqutIukYttaydJuraYCHucHQXrc7LaVq5rKnLGSrggntmsry0UCnvveayA0y6e+aOhK59+g3ZdAgjI9XnogP8eFOwN+30a40tEvBCbFZyB3+segb3gcWs3PMlaFes6ApMe/5wRSUSp20nsPBN/acLDjn6eAgmDwP2YVAkTCrdXqsrXg6ELQFmdKt7Umgn3Y5iBgbvePkZO3Sp0HgwfekizYe6rk8LAuhgT73oRQGDz4NpxS5wsSSd+CXST9ojZnryMsFgngbIEYS5ze0B2MhvqfgqE5Z70ogfQp/dqpjcvMnZV8R3fHVLZLd0P9Lx9LciAy1cuJ4oGY+lUYORB1u1eTOQRY8IDXr8Djxi+j7FScw0HFgZ36Gjp6OqcYPW+goC1nJaHiyGJ9ATFyPgaoY87DsDEvGk4mhUBbzipoNJikoyh2o2I7gphQ8+3T0wxfKPgOxguCCOFDFusNiL5a+WSmQjaMdB5tNeVvFt1WJob3/l19/Loi0k4p7E6PJDx90SOoVWUl0JS1nlBwpOLIYj0FwjXHTIIgND53MTRlbSA2hYFwTCPAK14DIWBM8RF2SpHYfUefgcb6DXHTJrhId8Hd7KUwlCsjnkEWi/t9JiDYB7eT88VqMdzNjiC2aBFv0Kx1s99sBZ8EzfA3hSbAikhV4X7QZccRaoFUHBMAEkBMpy8CwDbMThjYGBOPDwdBfZYCThXuF62uUAzfJsmrLgpWAJ8VzwQnu941BH/tWg2dGWEkmyGLFSs+4D3s05kRTsa4rXkxnIPqHVvpJ6UgPRB3PQ8N19rhcvsDOHdgE3RkREJnppNuuCq24b2zv20ifXGMO5sUw//oJ7V4WqCrb24BQ/t9uHSzBzR7vgHt8QKoOZ4Pmr3fwuUbvWBou0f6zGSHYrlChzF+jZ1SWBxGxeyqiyIlU4+qjRNbTujaExAagAUIgABpifO8uuiNZ7AC6C5mfFaGc8zJdnInWAHEjCIVCIrhb0ke2F7VvczWLXhg+Q4Cx1o3S5ZifS1uo+AiKNb2Kc3wJyiGf+jB03+I3AlrVT6f2FIWt8ViqPWe5R38pojemvgY6ry2rcV7c/4hx5vi9oyd52Ve5mVe/OZA/gVUmO1hSjgNggAAAABJRU5ErkJggg==",jR=({toggleTheme:e,isDarkMode:t})=>u.jsx(OR,{onClick:e,children:u.jsx(LR,{isDarkMode:t,children:u.jsx("img",{src:t?CR:AR,alt:"Toggle Icon"})})}),ER=Et`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
`,TR=Et`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`,OR=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: 100%;
`,LR=g.div`
  display: flex;
  width: 3rem;
  height: 1.8rem;
  padding: 0.1rem;
  background-color: ${e=>e.isDarkMode?"#E0E0E0":"#e4b315"};
  border-radius: 100px;
  cursor: pointer;
  &:not(input) {
    user-select: none;
  }
  img {
    width: 1.6rem;
    @media (min-width: 576px) and (max-width: 767px) {
      width: 1.4rem;
    }
    @media (max-width: 576px) {
      width: 1.5rem;
    }
    animation: ${e=>e.isDarkMode?Fr`
            ${ER} 0.8s forwards
          `:Fr`
            ${TR} 0.8s forwards
          `};
  }
`,PR=()=>{const{i18n:e}=te(),t=i=>{e.changeLanguage(i)},n=()=>{const i="fr";e.changeLanguage(i)},r=e.language==="ka";return u.jsxs($R,{children:[" ",u.jsxs("button",{onClick:n,children:[" ",u.jsx("img",{src:yw,alt:"FrenchFlag"})," "]}),r?u.jsxs("button",{onClick:()=>t("en"),children:[" ",u.jsx("img",{src:xw,alt:"EnglishFlag"})," "]}):u.jsx("button",{onClick:()=>t("ka"),children:u.jsx("img",{src:vw,alt:"GeorgianFlag"})})]})},$R=g.div`
  display: flex;

  /* flex-direction: column; */

  button {
    font-size: 1.3rem;
    border: none;
    background: none;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
    }
    img {
      width: 2.2rem;
    }
  }
`,RR=({isDarkMode:e,t})=>{const[n,r]=S.useState(!1),i=()=>{r(!1)};return u.jsx(zR,{class:"content",children:u.jsxs(NR,{id:"menuToggle",children:[u.jsx("input",{type:"checkbox",checked:n,onChange:()=>r(!n)}),u.jsx("span",{style:{background:e?"#ffffff":"#000000"}}),u.jsx("span",{style:{background:e?"#ffffff":"#000000"}}),u.jsx("span",{style:{background:e?"#ffffff":"#000000"}}),u.jsxs(FR,{onClick:i,children:[u.jsx("li",{children:u.jsx(wo,{to:"/grammar",children:t("Grammaire")})}),u.jsx("li",{children:u.jsx(wo,{to:"/vocabulary",onClick:i,children:t("Vocabulaire")})}),u.jsx("li",{children:u.jsx(wo,{to:"/reading-zone/french-easy-reading",onClick:i,children:t("Livres")})}),u.jsx("li",{children:u.jsx(wo,{to:"/dictionary",onClick:i,children:t("Dictionnaire")})}),u.jsx("li",{children:u.jsx(wo,{to:"/vocabulary/flashcards",onClick:i,children:t("Entraîneur de cartes mémoire")})})]})]})})},zR=g.div`
  display: flex;
  align-items: center;
`,NR=g.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 5%;
  left: 8%;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
  input {
    display: flex;
    width: 40px;
    height: 32px;
    position: absolute;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
  }
  span {
    display: flex;
    width: 29px;
    height: 3px;
    margin-top: 4px;
    margin-left: 0.2rem;
    position: relative;
    background: ${e=>e.isDarkMode?"#ff0000":"yellow"}; // Change these colors to match your theme
    border-radius: 3px;
    z-index: 1;
    transform-origin: 5px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
    &:first-child {
      transform-origin: 0% 0%;
    }
    &:nth-last-child(2) {
      transform-origin: 0% 100%;
    }
  }
  input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-3px, -1px);
    background: #36383f;
  }
  input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }
  input:checked ~ ul {
    transform: none;
  }
`,FR=g.ul`
  padding: 0;
  list-style-type: none;
  position: absolute;
  width: 100vw;
  height: 100vh;
  box-shadow: 0 0 10px #85888c;
  margin: -50px 0 0 -50px;
  padding: 50px;
  padding-top: 125px;
  background-color: ${e=>e.theme.primaryBackground};
  color: ${e=>e.theme.primaryText};

  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  li {
    padding: 10px 0;
    transition-delay: 2s;
    padding-left: 3rem;
  }
`,wo=g(ct)`
  text-decoration: none;
  color: ${e=>e.theme.primaryText};
  opacity: 1;
  font-family: "work sans", sans serif;
  font-size: 1.5em;
  font-weight: 400;
  transition: 200ms;
  font-style: italic;
  position: relative;
  padding: 0.5rem;

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0%;
    padding-bottom: 2.5rem;
    height: 6px;
    background-color: ${e=>e.theme.primaryText};
    color: ${e=>e.theme.primaryBackground};

    transition: width 0.3s ease;
  }

  &:hover::after {
    opacity: 0.5;

    width: calc(100% + 2px); /* Expand width to 100% on hover */
  }
`,DR=({toggleTheme:e,isDarkMode:t})=>{const{t:n,i18n:r}=te(),i=r.language==="ka";return kR(),u.jsxs(IR,{children:[u.jsx(RR,{isDarkMode:t,t:n}),u.jsx(_R,{children:u.jsx(MR,{to:"/",children:"Francophoenix"})}),u.jsxs(BR,{children:[u.jsx(na,{to:"/grammar",isGeorgian:i,children:n("Grammaire")}),u.jsx(na,{to:"/vocabulary",isGeorgian:i,children:n("Vocabulaire")}),u.jsx(na,{to:"/reading-zone/french-easy-reading",isGeorgian:i,children:n("Livres")}),u.jsx(na,{to:"/dictionary",isGeorgian:i,children:n("Dictionnaire")})]}),u.jsxs(WR,{children:[u.jsx(jR,{toggleTheme:e,isDarkMode:t}),u.jsx(PR,{})]})]})},IR=g.div`
  position: sticky;
  box-sizing: border-box;
  top: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${e=>e.theme.secondaryBackground};
  border-bottom: 3px solid ${e=>e.theme.highligt1};
  width: 100%;
`,BR=g.ul`
  display: flex;
  gap: 0.6rem;
  padding: 0;
  max-width: 50%;
  flex: 1;

  @media (min-width: 768px) and (max-width: 991px) {
    & > :nth-child(4) {
      display: none;
    }
  }

  @media (min-width: 576px) and (max-width: 767px) {
    & > :nth-child(3) {
      display: none;
    }
    & > :nth-child(4) {
      display: none;
    }
  }
  @media (max-width: 576px) {
    display: none;
  }
`,na=g(ct)`
  text-decoration: none;
  margin: 0 auto;
  position: relative;
  transition: 0.8s all linear;
  padding: 0.5rem;
  gap: 0;
  color: ${e=>e.theme.primaryText};
  font-size: ${e=>e.isGeorgian?"1.45rem":"1.8rem"};
  &:hover {
    color: ${e=>e.theme.primaryBackground};

    outline: 2px solid ${e=>e.theme.primaryText};
  }

  &::before {
    position: absolute;
    content: "";
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    background-color: ${e=>e.theme.primaryText};

    z-index: -1;
  }

  &:hover::before {
    animation: ${AL} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    font-size: ${e=>e.isGeorgian?"1.2rem":"1.5rem"};
  }

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: ${e=>e.isGeorgian?"1.1rem":"1.5rem"};
  }

  @media (min-width: 576px) and (max-width: 767px) {
    font-size: ${e=>e.isGeorgian?"1.1rem":"1.3rem"};
  }

  @media (max-width: 576px) {
    font-size: ${e=>e.isGeorgian?"1rem":"1.2rem"};
  }
`,_R=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  margin-left: 1rem;

  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 1.3rem;
    background-size: 120%;
  }

  @media (max-width: 576px) {
    font-size: 1.3rem;
    background-size: 100%;
    width: 200px;
    margin-left: 0.21rem;
  }
`,MR=g(ct)`
  font-size: 2.4rem;
  background-image: linear-gradient(-90deg, #0055a4, #f5e2e2, #ef4135);
  background-position: 0 10%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-size: 150%;
  max-width: 100%;
  font-weight: bold;
  &:hover {
    animation: ${jL} 5s linear infinite;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    font-size: 2rem;
    background-size: 130%;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 1.6rem;
    background-size: 120%;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 1.5rem;

    background-size: 120%;
    margin-left: 1rem;
  }

  @media (max-width: 576px) {
    font-size: 1.3rem;

    background-size: 100%;
  }
`;g.div`
  /* flex: 1; */
  border: 2px solid red;
`;const WR=g.div`
  max-width: 100%;
  margin-right: 0.5rem;
  padding: 0.2rem 0.5rem;
  /* outline: 1px solid ${e=>e.theme.tertiaryText}; */
  display: flex;
`,UR="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABRUlEQVR4nO2ZoU7EQBRFD/hdgwCDAwMOFHxCPRaJJeEvwCGxSCySZBMCKLD8AAIMYpFNgEc2GZJJ0zTvLZ2STe5JRnT6el9m5qQVBbH4TAArPO6GWIgNNIpTupFpIUF0Ik5MagWRWk5MagWRWk5MagWRWk5MagWRWk5MagWRWk5MagWRWk5MagWRWk5MagWRWk5MagWRWk5MagWRWk5MahXcsQp4TqMqkP8nPI02geuWH5w3wHYP+b3Q1WgMnAF1qpkCJ2lM01ydasZz5PdKW6Ml4BB4S/e+gUtgNatZAc6Bz1TzDhwDy478IjQb7QIP2fwjsNfx/A5wn9U/Afsd+cX4bbQGXABf6foVOGrZ4TZmJ3gAvGQneAWs/8dCPjLnT4HRHFmj9GzdyDQGoPkW2uohcyOdiA25kNvgdyFClbJnPQSLzA+xZBThStT1FQAAAABJRU5ErkJggg==",HR=g.div`
  width: 20.3rem;
  height: 41.9rem;
  margin: 1.9rem 0;
  border-radius: 1.6rem;
  perspective: 31.3rem;
  overflow: hidden;
  color: ${e=>e.theme.primaryText};

  background-color: ${e=>e.theme.tertiaryBackground};
  box-shadow: 2.3rem 2.3rem 3.1rem 0.9rem
    ${e=>e.theme.tertiaryBackground};
`,VR=g.div`
  position: fixed;
  top: 2rem;
  right: -15rem;
  width: 90%;
  padding: 1rem;

  margin-left: auto;
  z-index: 6;
  img {
    width: 2rem;
    cursor: pointer;
  }
`,Ew=g.div`
  height: 41.9rem;
  padding: 3rem;
  transition: transform 0.7s ease-in-out;
  background: ${e=>e.theme.primaryBackground};
`,QR=g.div`
  position: relative;
  height: 31rem;
  width: 40rem;
  left: -52.5%;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  background-color: ${e=>e.theme.secondaryBackground};
  transform-style: preserve-3d;
  transform-origin: 50% 40%;
  transition: transform 0.7s ease-in-out;
  z-index: 4;
  &:hover {
    transform: rotateX(75deg) translateZ(3px) scale(0.75);
    ~ ${Ew} {
      transform: translateY(-19rem);
    }
  }
`,qR=g.img`
  width: 10.5rem;
  position: absolute;
  top: 180px;
  left: 250px;
  z-index: 5;
  transform: translateZ(28.5px);
  border-radius: 1rem;
  object-fit: cover;
`,GR=g.img`
  position: absolute;
  border-radius: 4rem;
  top: 430px;
  left: 222px;
  transform: translateY(-15px) translateX(0px) translateZ(15px) rotateX(104deg);
`,KR=g.div`
  font-family: "Quicksand", sans-serif;
  font-size: 26px;
  margin-bottom: 10px;
`,YR=g.div`
  font-family: "Open Sans", sans-serif;
  font-style: italic;
  margin-bottom: 20px;
`,Tw=({books:e})=>u.jsxs(HR,{children:[u.jsx(VR,{children:u.jsx("img",{src:UR,alt:"BookmarkIcon"})}),u.jsxs(QR,{children:[u.jsx(qR,{src:e.poster,alt:"book-top"}),u.jsx(GR,{src:"https://raw.githubusercontent.com/atomic-variable/images-repo/e37f432405904a280858e5437ce1960753bc78a3/book-side.svg",alt:"book-side"})]}),u.jsxs(Ew,{children:[u.jsx(KR,{children:e.title}),u.jsxs(YR,{children:["by ",e.author]}),u.jsx("p",{children:e.description})]})]}),JR=({onChange:e,selectedLevel:t})=>{const{t:n}=te(),r=["Tous","A1","A2","B1","B2","C1"];return u.jsxs("div",{children:[u.jsxs("label",{htmlFor:"levelDropdown",children:[n("Choisir le niveau"),":"]}),u.jsx("select",{id:"levelDropdown",value:t,onChange:e,children:r.map(i=>u.jsx("option",{value:i,children:n(i)},i))})]})},y0=()=>{const e=fe(),t=H(a=>a.books.books)||[],n=H(a=>a.books.isLoading),[r,i]=S.useState(null);S.useEffect(()=>{e(Io())},[e]);const o=a=>{const l=a.target.value==="Tous"?null:a.target.value;i(l)},s=r?t.filter(a=>a.level===r):t;return n?u.jsx(We,{}):u.jsxs(XR,{children:[u.jsx(ZR,{children:"Our Best Books"}),u.jsx(JR,{onChange:o,selectedLevel:r}),u.jsx(e3,{children:s.map(a=>u.jsx(t3,{children:u.jsx(n3,{to:`/reading-zone/french-easy-reading/${a._id}`,children:u.jsx(Tw,{books:a})})},a._id))})]})},XR=g.div`
  /* min-height: 100vh; */
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  flex-wrap: wrap;

  /* background-color: #fdf3f2; */
`,ZR=g.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`,e3=g.ul`
  display: flex;
  width: 100%;

  gap: 2rem;
  list-style: none;
  padding: 0;
`,t3=g.li`
  font-size: 18px;
  margin-bottom: 5px;
  width: 100%;
  margin: 0 2rem;
`,n3=g(ct)`
  text-decoration: none;
  color: black;
`,r3=g.div`
  padding: 20px;
`,i3=g.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`,o3=g.ul`
  list-style: none;
  padding: 0;
`,nd=g.li`
  font-size: 18px;
  margin-bottom: 5px;
`,s3=()=>u.jsxs(r3,{children:[u.jsx(i3,{children:"A1-A2 Level Books"}),u.jsxs(o3,{children:[u.jsx(nd,{children:"Book 1 for A1-A2 Level"}),u.jsx(nd,{children:"Book 2 for A1-A2 Level"}),u.jsx(nd,{children:"Book 3 for A1-A2 Level"})]})]}),a3=g.div`
  padding: 20px;
`,l3=g.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`,c3=g.ul`
  list-style: none;
  padding: 0;
`,rd=g.li`
  font-size: 18px;
  margin-bottom: 5px;
`,u3=()=>u.jsxs(a3,{children:[u.jsx(l3,{children:"A1-A2 Level Books"}),u.jsxs(c3,{children:[u.jsx(rd,{children:"Book 1 for A1-A2 Level"}),u.jsx(rd,{children:"Book 2 for A1-A2 Level"}),u.jsx(rd,{children:"Book 3 for A1-A2 Level"})]})]}),d3=({content:e,children:t})=>{const{handleListen:n}=ut();return S.useState(!1),S.useState(!0),S.useState(!1),u.jsxs(f3,{children:[t,u.jsxs(p3,{children:[u.jsx(h3,{children:e}),u.jsxs(m3,{children:[u.jsx(g3,{onClick:n(t.props.children),children:u.jsx(Ji,{})}),u.jsx(Bc,{word:t,frenchExamples:"content missing",secondLanguageExamples:"content missing",secondLanguage:e}),u.jsx(pw,{word:t,frenchExamples:"content missing",secondLanguageExamples:"content missing",secondLanguage:e})]})]})]})},f3=g.div`
  display: inline;
  position: relative;
  background-color: #c223232f;
  /* padding: 0.2rem 0.3rem; */
  border-radius: 4px;
  outline: 2px solid #808080dc;
  width: 100%;
`,p3=g.div`
  display: flex;
  position: absolute;
  top: -90%;
  left: 100%;
  transform: translate(-30%, -50%);
  align-items: center;
  justify-content: center;

  height: 3rem;
  background-color: #fffd70;
  outline: 2px solid #f89411;

  border-radius: 4px;
  font-size: 1.1rem;
`,h3=g.div`
  display: inline-block; /* Change from position: absolute; to inline-block */

  color: black;

  max-width: 100%;
  height: 2rem;
  border-radius: 4px;
  margin-right: 1rem;
  visibility: visible;
  opacity: 1;
  text-indent: 5px;
  transition: opacity 0.3s ease;
  min-width: 200px;
  max-width: 350px;
`,m3=g.span`
  display: flex;
  align-items: center;
  max-width: 100%;
  padding-right: 4px;
  gap: 4px;
`,g3=g.span``,y3=({selectedChapter:e,totalChapters:t,onPrevious:n,onNext:r})=>u.jsxs(v3,{children:[u.jsx(v0,{onClick:n,disabled:e===0,children:"Previous chapter"}),u.jsx(v0,{onClick:r,disabled:e===t-1,children:"Next chapter"})]}),v3=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`,v0=g.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`,x3=()=>{var h,w,C,A;const{bookId:e}=sr(),t=fe(),{i18n:n}=te(),r=n.language==="ka",i=H(b=>b.books.selectedBook)||[],o=i.vocabulary||[],s={};o.forEach(b=>{s[b.french]=r?b.georgian:b.english});const a=b=>b.replace(/[^a-zA-Z0-9]/g,"").toLowerCase(),{chapters:l}=i||[],c=H(b=>b.books.isLoading),[d,f]=S.useState(0),[p,y]=S.useState(""),v=b=>{y(j=>j===b?"":b)};if(S.useEffect(()=>{t(ja(e))},[t,e]),c)return u.jsx(We,{});if(!i)return u.jsx("p",{children:"Book not found."});const x=b=>b.replace(/—/g,`
-`),k=b=>s.hasOwnProperty(b),m=l&&((w=(h=l[d])==null?void 0:h.text)==null?void 0:w.split(" "));return u.jsxs(b3,{children:[u.jsx("h1",{children:i==null?void 0:i.title}),u.jsx(S3,{children:i.author}),u.jsxs(C3,{children:[u.jsx(y3,{selectedChapter:d,totalChapters:(C=i==null?void 0:i.chapters)==null?void 0:C.length,onPrevious:()=>f(d-1),onNext:()=>f(d+1)}),(A=i==null?void 0:i.chapters)==null?void 0:A.map((b,j)=>u.jsxs(w3,{children:[u.jsx("h3",{children:x(b.chapterTitle)}),u.jsx("div",{children:m==null?void 0:m.map((E,T)=>{const O=a(E),L=s[O],P=p===E,z=k(O)?u.jsx(A3,{onClick:()=>v(E),children:E},T):x(E);return u.jsx(k3,{children:P&&L?u.jsx(d3,{content:L,handleWordClick:v,wordElement:z,children:z}):u.jsxs("span",{children:[z," "]})},T)})})]},j))]})]})},w3=g.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`,b3=g.div`
  background-color: ${e=>e.theme.secondaryBackground};
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0.1rem;
  padding: 2rem;
  /* max-width: 920px; */
`,S3=g.span`
  font-style: italic;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 50%;
    height: 2px;
    background-color: ${e=>e.theme.primaryText};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: calc(100% - 2px); /* Expand width to 100% on hover */
  }
`,k3=g.span`
  white-space: pre-line;
  line-height: 2;
  width: 100%;

  font-size: 1.3rem;
  letter-spacing: 1px;
  font-family: "Palatino", sans-serif;
  text-indent: 30px;
`,C3=g.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`,A3=g.span`
  background-color: #bdf5bd;
  padding: 0.2rem;
`,j3=(e,t)=>{const n=[],r=new Set,i=o=>Math.floor(Math.random()*o.length);for(;n.length<e.length;){const o=i(e),s=e[o];if(r.has(s))continue;const l=t[o],c=[];for(;c.length<3;){const p=t[i(t)];!c.includes(p)&&p!==l&&!r.has(p)&&c.push(p)}const d=[l,...c].sort(()=>Math.random()-.5),f={question:s,options:d,answer:l};n.push(f),r.add(s)}return n},E3=({onClose:e,isQuizFinished:t,isAllCorrect:n,Restart:r})=>{const{t:i}=te();return u.jsx(T3,{children:t&&u.jsxs(O3,{children:[n?u.jsx(x0,{children:i("Félicitations! Vous avez répondu correctement à tous.")}):u.jsx(x0,{children:i("Toutes les réponses ne sont pas correctes. Réessayer!")}),u.jsx(L3,{onClick:e,isAllCorrect:n,children:n?i("Fermer"):r})]})})},T3=g.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`,O3=g.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 250px;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 0 8px 2px #0889f385;
  ::before {
    content: "";
    position: absolute;
    bottom: -20px;
    right: calc(50% - 20px);
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid #fff;
    filter: drop-shadow(0.5px 4px 2px #0889f385);
  }
`,x0=g.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: black;
`,L3=g.button`
  padding: 1rem;
  text-align: center;
  align-self: center;
  width: 12rem;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #ffffff;
  cursor: pointer;
  background-color: ${e=>e.isAllCorrect?"#0055a4":"transparent"};

  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 auto;
  &:hover {
    background-color: ${e=>e.isAllCorrect?"white":"transparent"};
    color: ${e=>e.isAllCorrect?"#0055a4":"#white"};
    border: ${e=>e.isAllCorrect?"2px solid #0055a4":""};
  }
`,Ow=({french:e,english:t,georgian:n})=>{const{t:r,i18n:i}=te(),o=i.language==="ka",[s,a]=S.useState(!1),l=o?n:t,c=S.useMemo(()=>j3(e,l),[e,l]),[d,f]=S.useState({}),[p,y]=S.useState(0),[v,x]=S.useState({}),k=(b,j)=>{v[b]||(f({...d,[b]:j}),x({...v,[b]:!0}),m(b,j))},m=(b,j)=>{c[b].options[j]===c[b].answer&&y(p+1)},h=()=>{f({}),x({}),y(0)},w=c.every((b,j)=>{const E=d[j];return E!==void 0&&b.options[E]===b.answer}),C=c.length,A=Object.keys(v).length===C;return S.useEffect(()=>{A&&a(!0)},[A]),u.jsxs(P3,{children:[u.jsx($3,{children:c.map((b,j)=>u.jsxs(R3,{children:[u.jsxs(N3,{children:[" ","Score: ",p,"/",c.length]}),u.jsx("h2",{children:b.question}),u.jsx("ul",{children:b.options.map((E,T)=>u.jsx(z3,{onClick:()=>k(j,T),selectedAnswers:d[j]===T,correctAnswer:d[j]===b.options.indexOf(b.answer),disabled:v[j],children:E},T))})]},j))}),u.jsxs(w0,{onClick:h,children:[" ",r("Recommencer")]}),s&&u.jsx(E3,{onClose:()=>a(!1),isQuizFinished:A,isAllCorrect:w,Restart:u.jsx(w0,{onClick:h,children:r("Recommencer")})})," "]})},P3=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,$3=g.div`
  padding: 0 1rem;
  /* margin: 0 auto; */
  width: 95%;
`,R3=g.div`
  /* border: 2px solid wheat; */
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 12px;
  color: ${e=>e.theme.highlihgt1};
  background-color: ${e=>e.theme.secondaryBackground};
  h2 {
    padding: 1rem;
    border-radius: 1rem;
  }

  ul {
    list-style: none;
    /* border: 2px solid orange; */
    text-align: center;
    align-self: center;
  }
`,z3=g.li`
  border: 1px solid ${e=>e.theme.tertiaryText};
  padding: 0.5rem 1rem;
  margin: 1rem;
  border-radius: 0.5rem;
  max-width: 100%;
  margin-left: -1rem;
  align-self: center;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  background-color: ${e=>e.selectedAnswers?e.correctAnswer?e.theme.correctBack:e.theme.wrongback:"transparent"};
  color: ${e=>e.selectedAnswers?"black":e.theme.primaryText};

  &:hover {
    background-color: ${e=>e.disabled?"":e.theme.primaryBackground};
    color: ${e=>e.disabled?"":e.theme.primaryText};
  }
`,N3=g.p`
  color: ${e=>e.theme.text};
  background-color: ${e=>e.theme.background};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  box-shadow: 0px 2px 4px ${e=>e.theme.highlight2};
  margin-left: auto;
  width: 100px;
`,w0=g.button`
  padding: 1rem;
  text-align: center;
  align-self: center;
  width: 12rem;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  margin-top: 1rem;

  background-color: ${e=>e.theme.highlight2};
  color: ${e=>e.theme.primaryText};
  cursor: pointer;

  border-radius: 6px;

  &:hover {
    background-color: ${e=>e.theme.primaryText};
    color: ${e=>e.theme.highlight2};
  }
`,Lw=e=>e!=null&&e.startsWith("l'")?e.slice(2).replace(/\([^()]*\)/,"").trim("("):e!=null&&e.startsWith("les ")?e==null?void 0:e.slice(4):e!=null&&e.startsWith("le/la ")?null:e==null?void 0:e.slice(3),F3=e=>{for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e},Pw=({frenchWords:e})=>{const t=fe(),n=H(b=>b.quizData.topicNames)||[],r=H(b=>b.quizData.currentTopic.words)||[],i=H(b=>b.quizData.isLoading),o=n.map(b=>b.topic),s=r.map(b=>b.french),[a,l]=S.useState(0),[c,d]=S.useState(o[0]);S.useState([]);const f=b=>{const j=event.target.value;d(j);const E=o.indexOf(j);l(E),v(0),setCurrentWordIndex(0),setQuizStarted(!0)};S.useEffect(()=>{e||t(xi())},[e]),S.useEffect(()=>{if(!e&&n.length>0&&c){const b=n.findIndex(j=>j.topic===c);if(b!==-1){l(b);const j=n[b]._id;t(vi(j))}}},[e,n,c]);const{t:p}=te(),[y,v]=S.useState(0),[x,k]=S.useState({}),m=(b,j)=>{const E=j.toLowerCase().startsWith("la "),T=j.toLowerCase().startsWith("le "),O=j.toLowerCase().startsWith("l’");if(E&&b==="la"||T&&b==="le")return!0;if(O){if(j.includes("(m.)"))return b==="le";if(j.includes("(f.)"))return b==="la"}return!1},h=(b,j)=>{if(x[b])return;k(T=>({...T,[b]:j})),m(j,b)&&v(T=>T+1)},w=()=>{k({}),v(0)},C=e||s,A=C.filter(b=>b.startsWith("le/la "));return i?u.jsx(We,{}):u.jsxs(D3,{children:[u.jsxs(Q3,{children:[u.jsx("h2",{children:p("Les noms à double genre")}),A.map((b,j)=>u.jsx("ul",{children:u.jsx("li",{children:b})},j))]}),!e&&u.jsx(I3,{children:u.jsx(rw,{topic:o,onCategoryChange:f,selectedCategory:c})}),u.jsx(B3,{children:C.map((b,j)=>{const E=Lw(b);return E!==null?u.jsxs(_3,{children:[u.jsx(M3,{children:E}),u.jsxs(W3,{children:[b.startsWith("la ")&&u.jsxs(u.Fragment,{children:[u.jsx(qr,{onClick:()=>h(b,"le"),isSelected:x[b]==="le",isCorrect:m("le",b),children:"le"}),u.jsx(qr,{onClick:()=>h(b,"la"),isSelected:x[b]==="la",isCorrect:m("la",b),children:"la"})]}),b.startsWith("l'")&&u.jsxs(u.Fragment,{children:[u.jsx(qr,{onClick:()=>h(b,"le"),isSelected:x[b]==="le",isCorrect:m("le",b),children:"le"}),u.jsx(qr,{onClick:()=>h(b,"la"),isSelected:x[b]==="la",isCorrect:m("la",b),children:"la"})]}),b.startsWith("le")&&u.jsxs(u.Fragment,{children:[u.jsx(qr,{onClick:()=>h(b,"le"),isSelected:x[b]==="le",isCorrect:m("le",b),children:"le"}),u.jsx(qr,{onClick:()=>h(b,"la"),isSelected:x[b]==="la",isCorrect:m("la",b),children:"la"})]})]},j)]},j):null})}),u.jsxs(U3,{children:[u.jsxs(H3,{children:[p("Score"),": ",y]}),u.jsxs(V3,{onClick:w,children:[" ",p("Recommencer")]})]})]})},D3=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  /* outline: 2px solid red; */
  background-color: ${e=>e.theme.primaryBackground};
  @media (min-width: 577px) and (max-width: 767px) {
    width: 95%;
  }
  @media (min-width: 393px) and (max-width: 576px) {
    max-width: 94%;
  }
  /* width: 100%; */
  @media (max-width: 392px) {
    max-width: 96%;
    /* margin-right: auto; */
  }
`,I3=g.div`
  padding: 1rem;
  max-width: 100%;

  ul {
    list-style: none;
    li {
      font-size: 1.4rem;
    }
  }
`,B3=g.div`
  /* border: 2px solid black; */
`,_3=g.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.2rem;
  padding: 0 0.4rem;
  margin: 1rem;
  color: ${e=>e.theme.text};
  background-color: ${e=>e.theme.secondaryBackground};
  outline: 2px solid ${e=>e.theme.secondaryText};

  gap: 1rem;
  border-radius: 6px;

  max-width: 100%;
  @media (min-width: 577px) and (max-width: 767px) {
    width: 95%;
  }
  @media (min-width: 393px) and (max-width: 576px) {
    width: 90%;
  }
  /* width: 100%; */
  @media (max-width: 392px) {
    padding: 0;

    width: 93%;
    /* margin-right: auto; */
  }
`,M3=g.div`
  margin-right: 1rem;
  padding: 0.5rem 1rem;

  /* width: 70%; */
  max-width: 100%;
`,W3=g.div`
  display: flex;
  justify-content: center;

  gap: 1rem;
  @media (min-width: 577px) and (max-width: 767px) {
    gap: 0.8rem;
  }
  @media (min-width: 393px) and (max-width: 576px) {
    gap: 0.3rem;
  }
  @media (max-width: 392px) {
    gap: 0.3rem;
  }
`,qr=g.div`
  padding: 0.3rem 0.8rem;
  background-color: ${e=>e.isSelected?e.isCorrect?e.theme.correctBack:e.theme.wrongback:e.theme.primaryBackground};
  color: ${e=>e.isSelected?e.isCorrect?e.theme.wrongback:"black":""};
  margin: 0 0.5rem;
  border-radius: 4px;
  outline: 2px solid ${e=>e.theme.secondaryText};
  cursor: ${e=>e.isSelected?"default":"pointer"};
  pointer-events: ${e=>e.isSelected?"none":"auto"};
  max-width: 100%;

  &:hover {
    ${e=>!e.isSelected&&`
      background-color: ${e.theme.highlight3};
      color: ${e.theme.primaryText};
    `}
  }
  @media (max-width: 392px) {
    padding: 0.2rem 0.6rem;
  }
`,U3=g.div`
  display: flex;

  align-items: center;
`,H3=g.div`
  margin: 0.4rem;
  /* margin-right: 2rem; */
  margin-left: auto;
  font-size: 1rem;

  color: ${e=>e.theme.primaryText};
  background-color: ${e=>e.theme.secondaryBackground};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  /* box-shadow: 0px 2px 4px #0055a4; */
`,V3=g(et)`
  width: auto;

  @media (max-width: 576px) {
    font-size: 1.2rem;
    margin: 0;
    padding: 0.1 0.2rem;
  }
`,Q3=g(iw)`
  background-color: ${e=>e.theme.secondaryBackground};
  width: 100%;

  ul {
    li {
      list-style: none;
      font-size: 1.2rem;
    }
  }
`,$w=({index:e,expandedIndex:t,definition:n})=>u.jsx(q3,{isExpanded:e===t,children:u.jsx(G3,{children:n[e]})}),q3=g.div`
  width: 100%;
  margin: 0 auto;
  max-height: ${e=>e.isExpanded?"1000px":"0"};
  opacity: ${e=>e.isExpanded?"1":"0"};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
  background-color: ${e=>e.theme.tertiaryText};
  color: ${e=>e.theme.primaryBackground};

  position: relative;
  clip-path: polygon(0 0, 100% 0, 97% 100%, 3% 100%);
`,G3=g.div`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
  padding: 1rem 2rem;
  margin-top: 0.5rem;
  font-size: ${e=>e.theme.small};
`,K3=()=>{const e=Gi();S.useEffect(()=>{window.scrollTo(0,0)},[e])},Y3=({frenchWords:e,secondLanguage:t,definition:n})=>{K3(),te();const[r,i]=S.useState(null);S.useState(e==null?void 0:e.map(()=>!1));const{handleListen:o,isActiveStates:s}=ut(),a=l=>{i(c=>c===l?null:l)};return u.jsx(J3,{children:e==null?void 0:e.map((l,c)=>u.jsxs(X3,{children:[u.jsxs(Z3,{children:[u.jsx(e5,{children:l}),u.jsx(t5,{children:t[c]||""}),u.jsxs(n5,{children:[u.jsx(i5,{onClick:o(l),isActive:s[c],children:u.jsx("img",{src:cr,alt:"ListenImg"})}),u.jsx(Bc,{word:l,definition:n[c],secondLanguage:t[c]}),u.jsx(r5,{onClick:()=>a(c),isExpanded:c===r,children:"▾"})]})]}),u.jsx($w,{index:c,expandedIndex:r,definition:n})]},c))})},J3=g.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: 90%;
  /* margin: 0 auto; */
  /* outline: 1px solid blue; */
  /* border: 2px solid black; */
  margin-right: auto;

  background-color: ${e=>e.theme.primaryBackground};
  color: ${e=>e.theme.primaryText};
  @media (min-width: 767px) and (max-width: 920px) {
    /* margin-right: auto;
    border: 2px solid black; */
    align-items: center;
    max-width: 100%;
  }
  @media (min-width: 577px) and (max-width: 767px) {
    /* max-width: 60%; */
    /* border: 2px solid blue; */
  }
  @media (min-width: 393px) and (max-width: 576px) {
    width: 95%;
  }
  @media (max-width: 392px) {
    /* margin: 0 auto; */
    width: 95%;

    /* border: 2px solid grey; */
  }
`,X3=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90%;
  margin-bottom: 1rem;
  border-radius: 12px 12px 0 0;
  @media (min-width: 767px) and (max-width: 920px) {
    width: 100%;
  }
`,Z3=g.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: 0 auto;
  /* margin-right: auto; */
  width: 70%;
  overflow: hidden;

  cursor: pointer;
  background-color: ${e=>e.isExpanded?"#e6af68":e.theme.secondaryBackground};
  color: ${e=>e.theme.primaryText};
  &:hover {
    background-color: ${e=>e.theme.primaryBackground};
  }
  @media (min-width: 767px) and (max-width: 920px) {
    padding: 0.5rem;
    width: 98%;
  }
  @media (min-width: 577px) and (max-width: 767px) {
    /* font-size: ${({theme:e})=>e.medium}; */
  }

  @media (min-width: 393px) and (max-width: 576px) {
    /* margin: 0 auto; */
    /* border: 2px solid green; */

    width: 100%;
  }
  @media (max-width: 392px) {
    width: 100%;

    /* font-size: ${({theme:e})=>e.small}; */
  }
`,e5=g.p`
  font-weight: bold;
  /* border: 1px solid grey; */

  width: 40%;
  margin-left: 0.4rem;
  font-size: ${({theme:e})=>e.medium};
  @media (min-width: 577px) and (max-width: 767px) {
    font-size: ${({theme:e})=>e.mediumSmall};
  }
  @media (max-width: 577px) {
    font-size: ${({theme:e})=>e.small};
  }
`,t5=g.span`
  font-size: ${({theme:e})=>e.mediumSmall};
  width: 35%;
  /* border: 1px solid grey; */

  @media (max-width: 577px) {
    overflow-x: auto; /* Use 'auto' instead of 'scroll' */
    font-size: ${({theme:e})=>e.extraSmall};
    margin-left: 0.5rem;
  }
`,n5=g.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 0.1rem; */
  margin-left: auto;
  margin-right: 0.5rem;
  max-width: 100px;
  text-align: center;
  /* border: 1px solid grey; */
  pointer-events: ${e=>e.isExpanded?"none":"auto"};
`;g.span`
  margin: 0 0.5rem 0 1rem;
`;const r5=g.div`
  transform: ${e=>e.isExpanded?"rotate(180deg)":"rotate(0deg)"};
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  /* border: 1px solid grey; */
`,i5=g.div`
  display: flex;
  align-items: center;
  & > img {
    width: ${e=>e.width||"1.2rem"};
    height: ${e=>e.height||"1.2rem"};
    cursor: pointer;

    filter: ${e=>e.isActive?"none":"invert(-150%)"};
    transition: transform 0.3s ease-in-out;
    transform: ${e=>e.isActive?"scale(1.1)":"scale(1)"};
  }
`,_i=Math.min,Or=Math.max,Pl=Math.round,ra=Math.floor,ur=e=>({x:e,y:e}),o5={left:"right",right:"left",bottom:"top",top:"bottom"},s5={start:"end",end:"start"};function Mf(e,t,n){return Or(e,_i(t,n))}function Es(e,t){return typeof e=="function"?e(t):e}function Ir(e){return e.split("-")[0]}function Ts(e){return e.split("-")[1]}function Rw(e){return e==="x"?"y":"x"}function kh(e){return e==="y"?"height":"width"}function _c(e){return["top","bottom"].includes(Ir(e))?"y":"x"}function Ch(e){return Rw(_c(e))}function a5(e,t,n){n===void 0&&(n=!1);const r=Ts(e),i=Ch(e),o=kh(i);let s=i==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(s=$l(s)),[s,$l(s)]}function l5(e){const t=$l(e);return[Wf(e),t,Wf(t)]}function Wf(e){return e.replace(/start|end/g,t=>s5[t])}function c5(e,t,n){const r=["left","right"],i=["right","left"],o=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return n?t?i:r:t?r:i;case"left":case"right":return t?o:s;default:return[]}}function u5(e,t,n,r){const i=Ts(e);let o=c5(Ir(e),n==="start",r);return i&&(o=o.map(s=>s+"-"+i),t&&(o=o.concat(o.map(Wf)))),o}function $l(e){return e.replace(/left|right|bottom|top/g,t=>o5[t])}function d5(e){return{top:0,right:0,bottom:0,left:0,...e}}function zw(e){return typeof e!="number"?d5(e):{top:e,right:e,bottom:e,left:e}}function Rl(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function b0(e,t,n){let{reference:r,floating:i}=e;const o=_c(t),s=Ch(t),a=kh(s),l=Ir(t),c=o==="y",d=r.x+r.width/2-i.width/2,f=r.y+r.height/2-i.height/2,p=r[a]/2-i[a]/2;let y;switch(l){case"top":y={x:d,y:r.y-i.height};break;case"bottom":y={x:d,y:r.y+r.height};break;case"right":y={x:r.x+r.width,y:f};break;case"left":y={x:r.x-i.width,y:f};break;default:y={x:r.x,y:r.y}}switch(Ts(t)){case"start":y[s]-=p*(n&&c?-1:1);break;case"end":y[s]+=p*(n&&c?-1:1);break}return y}const f5=async(e,t,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:s}=n,a=o.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(t));let c=await s.getElementRects({reference:e,floating:t,strategy:i}),{x:d,y:f}=b0(c,r,l),p=r,y={},v=0;for(let x=0;x<a.length;x++){const{name:k,fn:m}=a[x],{x:h,y:w,data:C,reset:A}=await m({x:d,y:f,initialPlacement:r,placement:p,strategy:i,middlewareData:y,rects:c,platform:s,elements:{reference:e,floating:t}});if(d=h??d,f=w??f,y={...y,[k]:{...y[k],...C}},A&&v<=50){v++,typeof A=="object"&&(A.placement&&(p=A.placement),A.rects&&(c=A.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:i}):A.rects),{x:d,y:f}=b0(c,p,l)),x=-1;continue}}return{x:d,y:f,placement:p,strategy:i,middlewareData:y}};async function Nw(e,t){var n;t===void 0&&(t={});const{x:r,y:i,platform:o,rects:s,elements:a,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:f="floating",altBoundary:p=!1,padding:y=0}=Es(t,e),v=zw(y),k=a[p?f==="floating"?"reference":"floating":f],m=Rl(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement(k)))==null||n?k:k.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(a.floating)),boundary:c,rootBoundary:d,strategy:l})),h=f==="floating"?{...s.floating,x:r,y:i}:s.reference,w=await(o.getOffsetParent==null?void 0:o.getOffsetParent(a.floating)),C=await(o.isElement==null?void 0:o.isElement(w))?await(o.getScale==null?void 0:o.getScale(w))||{x:1,y:1}:{x:1,y:1},A=Rl(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({rect:h,offsetParent:w,strategy:l}):h);return{top:(m.top-A.top+v.top)/C.y,bottom:(A.bottom-m.bottom+v.bottom)/C.y,left:(m.left-A.left+v.left)/C.x,right:(A.right-m.right+v.right)/C.x}}const p5=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:i,rects:o,platform:s,elements:a}=t,{element:l,padding:c=0}=Es(e,t)||{};if(l==null)return{};const d=zw(c),f={x:n,y:r},p=Ch(i),y=kh(p),v=await s.getDimensions(l),x=p==="y",k=x?"top":"left",m=x?"bottom":"right",h=x?"clientHeight":"clientWidth",w=o.reference[y]+o.reference[p]-f[p]-o.floating[y],C=f[p]-o.reference[p],A=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l));let b=A?A[h]:0;(!b||!await(s.isElement==null?void 0:s.isElement(A)))&&(b=a.floating[h]||o.floating[y]);const j=w/2-C/2,E=b/2-v[y]/2-1,T=_i(d[k],E),O=_i(d[m],E),L=T,P=b-v[y]-O,$=b/2-v[y]/2+j,z=Mf(L,$,P),V=Ts(i)!=null&&$!=z&&o.reference[y]/2-($<L?T:O)-v[y]/2<0?$<L?L-$:P-$:0;return{[p]:f[p]-V,data:{[p]:z,centerOffset:$-z+V}}}}),h5=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n;const{placement:r,middlewareData:i,rects:o,initialPlacement:s,platform:a,elements:l}=t,{mainAxis:c=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:v=!0,...x}=Es(e,t),k=Ir(r),m=Ir(s)===s,h=await(a.isRTL==null?void 0:a.isRTL(l.floating)),w=f||(m||!v?[$l(s)]:l5(s));!f&&y!=="none"&&w.push(...u5(s,v,y,h));const C=[s,...w],A=await Nw(t,x),b=[];let j=((n=i.flip)==null?void 0:n.overflows)||[];if(c&&b.push(A[k]),d){const L=a5(r,o,h);b.push(A[L[0]],A[L[1]])}if(j=[...j,{placement:r,overflows:b}],!b.every(L=>L<=0)){var E,T;const L=(((E=i.flip)==null?void 0:E.index)||0)+1,P=C[L];if(P)return{data:{index:L,overflows:j},reset:{placement:P}};let $=(T=j.filter(z=>z.overflows[0]<=0).sort((z,D)=>z.overflows[1]-D.overflows[1])[0])==null?void 0:T.placement;if(!$)switch(p){case"bestFit":{var O;const z=(O=j.map(D=>[D.placement,D.overflows.filter(V=>V>0).reduce((V,Q)=>V+Q,0)]).sort((D,V)=>D[1]-V[1])[0])==null?void 0:O[0];z&&($=z);break}case"initialPlacement":$=s;break}if(r!==$)return{reset:{placement:$}}}return{}}}};async function m5(e,t){const{placement:n,platform:r,elements:i}=e,o=await(r.isRTL==null?void 0:r.isRTL(i.floating)),s=Ir(n),a=Ts(n),l=_c(n)==="y",c=["left","top"].includes(s)?-1:1,d=o&&l?-1:1,f=Es(t,e);let{mainAxis:p,crossAxis:y,alignmentAxis:v}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return a&&typeof v=="number"&&(y=a==="end"?v*-1:v),l?{x:y*d,y:p*c}:{x:p*c,y:y*d}}const g5=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:r}=t,i=await m5(t,e);return{x:n+i.x,y:r+i.y,data:i}}}},y5=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:i}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:a={fn:k=>{let{x:m,y:h}=k;return{x:m,y:h}}},...l}=Es(e,t),c={x:n,y:r},d=await Nw(t,l),f=_c(Ir(i)),p=Rw(f);let y=c[p],v=c[f];if(o){const k=p==="y"?"top":"left",m=p==="y"?"bottom":"right",h=y+d[k],w=y-d[m];y=Mf(h,y,w)}if(s){const k=f==="y"?"top":"left",m=f==="y"?"bottom":"right",h=v+d[k],w=v-d[m];v=Mf(h,v,w)}const x=a.fn({...t,[p]:y,[f]:v});return{...x,data:{x:x.x-n,y:x.y-r}}}}};function dr(e){return Fw(e)?(e.nodeName||"").toLowerCase():"#document"}function St(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Tn(e){var t;return(t=(Fw(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Fw(e){return e instanceof Node||e instanceof St(e).Node}function An(e){return e instanceof Element||e instanceof St(e).Element}function cn(e){return e instanceof HTMLElement||e instanceof St(e).HTMLElement}function S0(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof St(e).ShadowRoot}function Os(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=It(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function v5(e){return["table","td","th"].includes(dr(e))}function Ah(e){const t=jh(),n=It(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function x5(e){let t=Mi(e);for(;cn(t)&&!Mc(t);){if(Ah(t))return t;t=Mi(t)}return null}function jh(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Mc(e){return["html","body","#document"].includes(dr(e))}function It(e){return St(e).getComputedStyle(e)}function Wc(e){return An(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Mi(e){if(dr(e)==="html")return e;const t=e.assignedSlot||e.parentNode||S0(e)&&e.host||Tn(e);return S0(t)?t.host:t}function Dw(e){const t=Mi(e);return Mc(t)?e.ownerDocument?e.ownerDocument.body:e.body:cn(t)&&Os(t)?t:Dw(t)}function zl(e,t){var n;t===void 0&&(t=[]);const r=Dw(e),i=r===((n=e.ownerDocument)==null?void 0:n.body),o=St(r);return i?t.concat(o,o.visualViewport||[],Os(r)?r:[]):t.concat(r,zl(r))}function Iw(e){const t=It(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=cn(e),o=i?e.offsetWidth:n,s=i?e.offsetHeight:r,a=Pl(n)!==o||Pl(r)!==s;return a&&(n=o,r=s),{width:n,height:r,$:a}}function Eh(e){return An(e)?e:e.contextElement}function bi(e){const t=Eh(e);if(!cn(t))return ur(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=Iw(t);let s=(o?Pl(n.width):n.width)/r,a=(o?Pl(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const w5=ur(0);function Bw(e){const t=St(e);return!jh()||!t.visualViewport?w5:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function b5(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==St(e)?!1:t}function Br(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=Eh(e);let s=ur(1);t&&(r?An(r)&&(s=bi(r)):s=bi(e));const a=b5(o,n,r)?Bw(o):ur(0);let l=(i.left+a.x)/s.x,c=(i.top+a.y)/s.y,d=i.width/s.x,f=i.height/s.y;if(o){const p=St(o),y=r&&An(r)?St(r):r;let v=p.frameElement;for(;v&&r&&y!==p;){const x=bi(v),k=v.getBoundingClientRect(),m=It(v),h=k.left+(v.clientLeft+parseFloat(m.paddingLeft))*x.x,w=k.top+(v.clientTop+parseFloat(m.paddingTop))*x.y;l*=x.x,c*=x.y,d*=x.x,f*=x.y,l+=h,c+=w,v=St(v).frameElement}}return Rl({width:d,height:f,x:l,y:c})}function S5(e){let{rect:t,offsetParent:n,strategy:r}=e;const i=cn(n),o=Tn(n);if(n===o)return t;let s={scrollLeft:0,scrollTop:0},a=ur(1);const l=ur(0);if((i||!i&&r!=="fixed")&&((dr(n)!=="body"||Os(o))&&(s=Wc(n)),cn(n))){const c=Br(n);a=bi(n),l.x=c.x+n.clientLeft,l.y=c.y+n.clientTop}return{width:t.width*a.x,height:t.height*a.y,x:t.x*a.x-s.scrollLeft*a.x+l.x,y:t.y*a.y-s.scrollTop*a.y+l.y}}function k5(e){return Array.from(e.getClientRects())}function _w(e){return Br(Tn(e)).left+Wc(e).scrollLeft}function C5(e){const t=Tn(e),n=Wc(e),r=e.ownerDocument.body,i=Or(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),o=Or(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let s=-n.scrollLeft+_w(e);const a=-n.scrollTop;return It(r).direction==="rtl"&&(s+=Or(t.clientWidth,r.clientWidth)-i),{width:i,height:o,x:s,y:a}}function A5(e,t){const n=St(e),r=Tn(e),i=n.visualViewport;let o=r.clientWidth,s=r.clientHeight,a=0,l=0;if(i){o=i.width,s=i.height;const c=jh();(!c||c&&t==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:o,height:s,x:a,y:l}}function j5(e,t){const n=Br(e,!0,t==="fixed"),r=n.top+e.clientTop,i=n.left+e.clientLeft,o=cn(e)?bi(e):ur(1),s=e.clientWidth*o.x,a=e.clientHeight*o.y,l=i*o.x,c=r*o.y;return{width:s,height:a,x:l,y:c}}function k0(e,t,n){let r;if(t==="viewport")r=A5(e,n);else if(t==="document")r=C5(Tn(e));else if(An(t))r=j5(t,n);else{const i=Bw(e);r={...t,x:t.x-i.x,y:t.y-i.y}}return Rl(r)}function Mw(e,t){const n=Mi(e);return n===t||!An(n)||Mc(n)?!1:It(n).position==="fixed"||Mw(n,t)}function E5(e,t){const n=t.get(e);if(n)return n;let r=zl(e).filter(a=>An(a)&&dr(a)!=="body"),i=null;const o=It(e).position==="fixed";let s=o?Mi(e):e;for(;An(s)&&!Mc(s);){const a=It(s),l=Ah(s);!l&&a.position==="fixed"&&(i=null),(o?!l&&!i:!l&&a.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Os(s)&&!l&&Mw(e,s))?r=r.filter(d=>d!==s):i=a,s=Mi(s)}return t.set(e,r),r}function T5(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e;const s=[...n==="clippingAncestors"?E5(t,this._c):[].concat(n),r],a=s[0],l=s.reduce((c,d)=>{const f=k0(t,d,i);return c.top=Or(f.top,c.top),c.right=_i(f.right,c.right),c.bottom=_i(f.bottom,c.bottom),c.left=Or(f.left,c.left),c},k0(t,a,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function O5(e){return Iw(e)}function L5(e,t,n){const r=cn(t),i=Tn(t),o=n==="fixed",s=Br(e,!0,o,t);let a={scrollLeft:0,scrollTop:0};const l=ur(0);if(r||!r&&!o)if((dr(t)!=="body"||Os(i))&&(a=Wc(t)),r){const c=Br(t,!0,o,t);l.x=c.x+t.clientLeft,l.y=c.y+t.clientTop}else i&&(l.x=_w(i));return{x:s.left+a.scrollLeft-l.x,y:s.top+a.scrollTop-l.y,width:s.width,height:s.height}}function C0(e,t){return!cn(e)||It(e).position==="fixed"?null:t?t(e):e.offsetParent}function Ww(e,t){const n=St(e);if(!cn(e))return n;let r=C0(e,t);for(;r&&v5(r)&&It(r).position==="static";)r=C0(r,t);return r&&(dr(r)==="html"||dr(r)==="body"&&It(r).position==="static"&&!Ah(r))?n:r||x5(e)||n}const P5=async function(e){let{reference:t,floating:n,strategy:r}=e;const i=this.getOffsetParent||Ww,o=this.getDimensions;return{reference:L5(t,await i(n),r),floating:{x:0,y:0,...await o(n)}}};function $5(e){return It(e).direction==="rtl"}const R5={convertOffsetParentRelativeRectToViewportRelativeRect:S5,getDocumentElement:Tn,getClippingRect:T5,getOffsetParent:Ww,getElementRects:P5,getClientRects:k5,getDimensions:O5,getScale:bi,isElement:An,isRTL:$5};function z5(e,t){let n=null,r;const i=Tn(e);function o(){clearTimeout(r),n&&n.disconnect(),n=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),o();const{left:c,top:d,width:f,height:p}=e.getBoundingClientRect();if(a||t(),!f||!p)return;const y=ra(d),v=ra(i.clientWidth-(c+f)),x=ra(i.clientHeight-(d+p)),k=ra(c),h={rootMargin:-y+"px "+-v+"px "+-x+"px "+-k+"px",threshold:Or(0,_i(1,l))||1};let w=!0;function C(A){const b=A[0].intersectionRatio;if(b!==l){if(!w)return s();b?s(!1,b):r=setTimeout(()=>{s(!1,1e-7)},100)}w=!1}try{n=new IntersectionObserver(C,{...h,root:i.ownerDocument})}catch{n=new IntersectionObserver(C,h)}n.observe(e)}return s(!0),o}function N5(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,c=Eh(e),d=i||o?[...c?zl(c):[],...zl(t)]:[];d.forEach(m=>{i&&m.addEventListener("scroll",n,{passive:!0}),o&&m.addEventListener("resize",n)});const f=c&&a?z5(c,n):null;let p=-1,y=null;s&&(y=new ResizeObserver(m=>{let[h]=m;h&&h.target===c&&y&&(y.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{y&&y.observe(t)})),n()}),c&&!l&&y.observe(c),y.observe(t));let v,x=l?Br(e):null;l&&k();function k(){const m=Br(e);x&&(m.x!==x.x||m.y!==x.y||m.width!==x.width||m.height!==x.height)&&n(),x=m,v=requestAnimationFrame(k)}return n(),()=>{d.forEach(m=>{i&&m.removeEventListener("scroll",n),o&&m.removeEventListener("resize",n)}),f&&f(),y&&y.disconnect(),y=null,l&&cancelAnimationFrame(v)}}const A0=(e,t,n)=>{const r=new Map,i={platform:R5,...n},o={...i.platform,_c:r};return f5(e,t,{...i,platform:o})};/*
* React Tooltip
* {@link https://github.com/ReactTooltip/react-tooltip}
* @copyright ReactTooltip Team
* @license MIT
*/const F5="react-tooltip-core-styles",D5="react-tooltip-base-styles",j0={core:!1,base:!1};function E0({css:e,id:t=D5,type:n="base",ref:r}){var i,o;if(!e||typeof document>"u"||j0[n]||n==="core"&&typeof process<"u"&&(!((i=process==null?void 0:process.env)===null||i===void 0)&&i.REACT_TOOLTIP_DISABLE_CORE_STYLES)||n!=="base"&&typeof process<"u"&&(!((o=process==null?void 0:process.env)===null||o===void 0)&&o.REACT_TOOLTIP_DISABLE_BASE_STYLES))return;n==="core"&&(t=F5),r||(r={});const{insertAt:s}=r;if(document.getElementById(t))return void console.warn(`[react-tooltip] Element with id '${t}' already exists. Call \`removeStyle()\` first`);const a=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.id=t,l.type="text/css",s==="top"&&a.firstChild?a.insertBefore(l,a.firstChild):a.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e)),j0[n]=!0}const T0=(e,t,n)=>{let r=null;return function(...i){const o=()=>{r=null,n||e.apply(this,i)};n&&!r&&(e.apply(this,i),r=setTimeout(o,t)),n||(r&&clearTimeout(r),r=setTimeout(o,t))}},I5="DEFAULT_TOOLTIP_ID",B5={anchorRefs:new Set,activeAnchor:{current:null},attach:()=>{},detach:()=>{},setActiveAnchor:()=>{}},_5=S.createContext({getTooltipData:()=>B5});function Uw(e=I5){return S.useContext(_5).getTooltipData(e)}const M5=typeof window<"u"?S.useLayoutEffect:S.useEffect,W5=e=>{if(!(e instanceof HTMLElement||e instanceof SVGElement))return!1;const t=getComputedStyle(e);return["overflow","overflow-x","overflow-y"].some(n=>{const r=t.getPropertyValue(n);return r==="auto"||r==="scroll"})},O0=e=>{if(!e)return null;let t=e.parentElement;for(;t;){if(W5(t))return t;t=t.parentElement}return document.scrollingElement||document.documentElement},L0=async({elementReference:e=null,tooltipReference:t=null,tooltipArrowReference:n=null,place:r="top",offset:i=10,strategy:o="absolute",middlewares:s=[g5(Number(i)),h5(),y5({padding:5})],border:a})=>{if(!e)return{tooltipStyles:{},tooltipArrowStyles:{},place:r};if(t===null)return{tooltipStyles:{},tooltipArrowStyles:{},place:r};const l=s;return n?(l.push(p5({element:n,padding:5})),A0(e,t,{placement:r,strategy:o,middleware:l}).then(({x:c,y:d,placement:f,middlewareData:p})=>{var y,v;const x={left:`${c}px`,top:`${d}px`,border:a},{x:k,y:m}=(y=p.arrow)!==null&&y!==void 0?y:{x:0,y:0},h=(v={top:"bottom",right:"left",bottom:"top",left:"right"}[f.split("-")[0]])!==null&&v!==void 0?v:"bottom",w=a&&{borderBottom:a,borderRight:a};let C=0;if(a){const A=`${a}`.match(/(\d+)px/);C=A!=null&&A[1]?Number(A[1]):1}return{tooltipStyles:x,tooltipArrowStyles:{left:k!=null?`${k}px`:"",top:m!=null?`${m}px`:"",right:"",bottom:"",...w,[h]:`-${4+C}px`},place:f}})):A0(e,t,{placement:"bottom",strategy:o,middleware:l}).then(({x:c,y:d,placement:f})=>({tooltipStyles:{left:`${c}px`,top:`${d}px`},tooltipArrowStyles:{},place:f}))};var U5="core-styles-module_tooltip__3vRRp",H5="core-styles-module_fixed__pcSol",V5="core-styles-module_arrow__cvMwQ",Q5="core-styles-module_noArrow__xock6",q5="core-styles-module_clickable__ZuTTB",G5="core-styles-module_show__Nt9eE",id={tooltip:"styles-module_tooltip__mnnfp",arrow:"styles-module_arrow__K0L3T",dark:"styles-module_dark__xNqje",light:"styles-module_light__Z6W-X",success:"styles-module_success__A2AKt",warning:"styles-module_warning__SCK0X",error:"styles-module_error__JvumD",info:"styles-module_info__BWdHW"};const K5=({id:e,className:t,classNameArrow:n,variant:r="dark",anchorId:i,anchorSelect:o,place:s="top",offset:a=10,events:l=["hover"],openOnClick:c=!1,positionStrategy:d="absolute",middlewares:f,wrapper:p,delayShow:y=0,delayHide:v=0,float:x=!1,hidden:k=!1,noArrow:m=!1,clickable:h=!1,closeOnEsc:w=!1,closeOnScroll:C=!1,closeOnResize:A=!1,style:b,position:j,afterShow:E,afterHide:T,content:O,contentWrapperRef:L,isOpen:P,setIsOpen:$,activeAnchor:z,setActiveAnchor:D,border:V,opacity:Q,arrowColor:N})=>{const I=S.useRef(null),W=S.useRef(null),K=S.useRef(null),q=S.useRef(null),[Te,Ae]=S.useState(s),[dt,De]=S.useState({}),[ft,Kt]=S.useState({}),[Re,On]=S.useState(!1),[Yt,nt]=S.useState(!1),Xi=S.useRef(!1),Zi=S.useRef(null),{anchorRefs:eo,setActiveAnchor:Ls}=Uw(e),Wr=S.useRef(!1),[Ln,to]=S.useState([]),gr=S.useRef(!1),Ur=c||l.includes("click");M5(()=>(gr.current=!0,()=>{gr.current=!1}),[]),S.useEffect(()=>{if(!Re){const M=setTimeout(()=>{nt(!1)},150);return()=>{clearTimeout(M)}}return()=>null},[Re]);const Jt=M=>{gr.current&&(M&&nt(!0),setTimeout(()=>{gr.current&&($==null||$(M),P===void 0&&On(M))},10))};S.useEffect(()=>{if(P===void 0)return()=>null;P&&nt(!0);const M=setTimeout(()=>{On(P)},10);return()=>{clearTimeout(M)}},[P]),S.useEffect(()=>{Re!==Xi.current&&(Xi.current=Re,Re?E==null||E():T==null||T())},[Re]);const Hr=(M=v)=>{q.current&&clearTimeout(q.current),q.current=setTimeout(()=>{Wr.current||Jt(!1)},M)},Pn=M=>{var J;if(!M)return;const _=(J=M.currentTarget)!==null&&J!==void 0?J:M.target;if(!(_!=null&&_.isConnected))return D(null),void Ls({current:null});y?(K.current&&clearTimeout(K.current),K.current=setTimeout(()=>{Jt(!0)},y)):Jt(!0),D(_),Ls({current:_}),q.current&&clearTimeout(q.current)},Ps=()=>{h?Hr(v||100):v?Hr():Jt(!1),K.current&&clearTimeout(K.current)},no=({x:M,y:J})=>{L0({place:s,offset:a,elementReference:{getBoundingClientRect:()=>({x:M,y:J,width:0,height:0,top:J,left:M,right:M,bottom:J})},tooltipReference:I.current,tooltipArrowReference:W.current,strategy:d,middlewares:f,border:V}).then(_=>{Object.keys(_.tooltipStyles).length&&De(_.tooltipStyles),Object.keys(_.tooltipArrowStyles).length&&Kt(_.tooltipArrowStyles),Ae(_.place)})},$s=M=>{if(!M)return;const J=M,_={x:J.clientX,y:J.clientY};no(_),Zi.current=_},Rs=M=>{Pn(M),v&&Hr()},ro=M=>{var J;[document.querySelector(`[id='${i}']`),...Ln].some(_=>_==null?void 0:_.contains(M.target))||!((J=I.current)===null||J===void 0)&&J.contains(M.target)||(Jt(!1),K.current&&clearTimeout(K.current))},io=T0(Pn,50,!0),yr=T0(Ps,50,!0),$n=S.useCallback(()=>{j?no(j):x?Zi.current&&no(Zi.current):L0({place:s,offset:a,elementReference:z,tooltipReference:I.current,tooltipArrowReference:W.current,strategy:d,middlewares:f,border:V}).then(M=>{gr.current&&(Object.keys(M.tooltipStyles).length&&De(M.tooltipStyles),Object.keys(M.tooltipArrowStyles).length&&Kt(M.tooltipArrowStyles),Ae(M.place))})},[Re,z,O,b,s,a,d,j,x]);S.useEffect(()=>{var M,J;const _=new Set(eo);Ln.forEach(fn=>{_.add({current:fn})});const X=document.querySelector(`[id='${i}']`);X&&_.add({current:X});const ce=()=>{Jt(!1)},rt=O0(z),Ke=O0(I.current);C&&(window.addEventListener("scroll",ce),rt==null||rt.addEventListener("scroll",ce),Ke==null||Ke.addEventListener("scroll",ce));let Xt=null;A?window.addEventListener("resize",ce):z&&I.current&&(Xt=N5(z,I.current,$n,{ancestorResize:!0,elementResize:!0,layoutShift:!0}));const so=fn=>{fn.key==="Escape"&&Jt(!1)};w&&window.addEventListener("keydown",so);const dn=[];Ur?(window.addEventListener("click",ro),dn.push({event:"click",listener:Rs})):(dn.push({event:"mouseenter",listener:io},{event:"mouseleave",listener:yr},{event:"focus",listener:io},{event:"blur",listener:yr}),x&&dn.push({event:"mousemove",listener:$s}));const zs=()=>{Wr.current=!0},Ph=()=>{Wr.current=!1,Ps()};return h&&!Ur&&((M=I.current)===null||M===void 0||M.addEventListener("mouseenter",zs),(J=I.current)===null||J===void 0||J.addEventListener("mouseleave",Ph)),dn.forEach(({event:fn,listener:ao})=>{_.forEach(Hc=>{var lo;(lo=Hc.current)===null||lo===void 0||lo.addEventListener(fn,ao)})}),()=>{var fn,ao;C&&(window.removeEventListener("scroll",ce),rt==null||rt.removeEventListener("scroll",ce),Ke==null||Ke.removeEventListener("scroll",ce)),A?window.removeEventListener("resize",ce):Xt==null||Xt(),Ur&&window.removeEventListener("click",ro),w&&window.removeEventListener("keydown",so),h&&!Ur&&((fn=I.current)===null||fn===void 0||fn.removeEventListener("mouseenter",zs),(ao=I.current)===null||ao===void 0||ao.removeEventListener("mouseleave",Ph)),dn.forEach(({event:Hc,listener:lo})=>{_.forEach(db=>{var Vc;(Vc=db.current)===null||Vc===void 0||Vc.removeEventListener(Hc,lo)})})}},[z,$n,Yt,eo,Ln,w,l]),S.useEffect(()=>{let M=o??"";!M&&e&&(M=`[data-tooltip-id='${e}']`);const J=new MutationObserver(_=>{const X=[];_.forEach(ce=>{if(ce.type==="attributes"&&ce.attributeName==="data-tooltip-id"&&ce.target.getAttribute("data-tooltip-id")===e&&X.push(ce.target),ce.type==="childList"&&(z&&[...ce.removedNodes].some(rt=>{var Ke;return!!(!((Ke=rt==null?void 0:rt.contains)===null||Ke===void 0)&&Ke.call(rt,z))&&(nt(!1),Jt(!1),D(null),K.current&&clearTimeout(K.current),q.current&&clearTimeout(q.current),!0)}),M))try{const rt=[...ce.addedNodes].filter(Ke=>Ke.nodeType===1);X.push(...rt.filter(Ke=>Ke.matches(M))),X.push(...rt.flatMap(Ke=>[...Ke.querySelectorAll(M)]))}catch{}}),X.length&&to(ce=>[...ce,...X])});return J.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["data-tooltip-id"]}),()=>{J.disconnect()}},[e,o,z]),S.useEffect(()=>{$n()},[$n]),S.useEffect(()=>{if(!(L!=null&&L.current))return()=>null;const M=new ResizeObserver(()=>{$n()});return M.observe(L.current),()=>{M.disconnect()}},[O,L==null?void 0:L.current]),S.useEffect(()=>{var M;const J=document.querySelector(`[id='${i}']`),_=[...Ln,J];z&&_.includes(z)||D((M=Ln[0])!==null&&M!==void 0?M:J)},[i,Ln,z]),S.useEffect(()=>()=>{K.current&&clearTimeout(K.current),q.current&&clearTimeout(q.current)},[]),S.useEffect(()=>{let M=o;if(!M&&e&&(M=`[data-tooltip-id='${e}']`),M)try{const J=Array.from(document.querySelectorAll(M));to(J)}catch{to([])}},[e,o]);const oo=!k&&O&&Re&&Object.keys(dt).length>0;return Yt?Le.createElement(p,{id:e,role:"tooltip",className:Dg("react-tooltip",U5,id.tooltip,id[r],t,`react-tooltip__place-${Te}`,{"react-tooltip__show":oo,[G5]:oo,[H5]:d==="fixed",[q5]:h}),style:{...b,...dt,opacity:Q!==void 0&&oo?Q:void 0},ref:I},O,Le.createElement(p,{className:Dg("react-tooltip-arrow",V5,id.arrow,n,{[Q5]:m}),style:{...ft,background:N?`linear-gradient(to right bottom, transparent 50%, ${N} 50%)`:void 0},ref:W})):null},Y5=({content:e})=>Le.createElement("span",{dangerouslySetInnerHTML:{__html:e}}),J5=({id:e,anchorId:t,anchorSelect:n,content:r,html:i,render:o,className:s,classNameArrow:a,variant:l="dark",place:c="top",offset:d=10,wrapper:f="div",children:p=null,events:y=["hover"],openOnClick:v=!1,positionStrategy:x="absolute",middlewares:k,delayShow:m=0,delayHide:h=0,float:w=!1,hidden:C=!1,noArrow:A=!1,clickable:b=!1,closeOnEsc:j=!1,closeOnScroll:E=!1,closeOnResize:T=!1,style:O,position:L,isOpen:P,disableStyleInjection:$=!1,border:z,opacity:D,arrowColor:V,setIsOpen:Q,afterShow:N,afterHide:I})=>{const[W,K]=S.useState(r),[q,Te]=S.useState(i),[Ae,dt]=S.useState(c),[De,ft]=S.useState(l),[Kt,Re]=S.useState(d),[On,Yt]=S.useState(m),[nt,Xi]=S.useState(h),[Zi,eo]=S.useState(w),[Ls,Wr]=S.useState(C),[Ln,to]=S.useState(f),[gr,Ur]=S.useState(y),[Jt,Hr]=S.useState(x),[Pn,Ps]=S.useState(null),no=S.useRef($),{anchorRefs:$s,activeAnchor:Rs}=Uw(e),ro=M=>M==null?void 0:M.getAttributeNames().reduce((J,_)=>{var X;return _.startsWith("data-tooltip-")&&(J[_.replace(/^data-tooltip-/,"")]=(X=M==null?void 0:M.getAttribute(_))!==null&&X!==void 0?X:null),J},{}),io=M=>{const J={place:_=>{var X;dt((X=_)!==null&&X!==void 0?X:c)},content:_=>{K(_??r)},html:_=>{Te(_??i)},variant:_=>{var X;ft((X=_)!==null&&X!==void 0?X:l)},offset:_=>{Re(_===null?d:Number(_))},wrapper:_=>{var X;to((X=_)!==null&&X!==void 0?X:f)},events:_=>{const X=_==null?void 0:_.split(" ");Ur(X??y)},"position-strategy":_=>{var X;Hr((X=_)!==null&&X!==void 0?X:x)},"delay-show":_=>{Yt(_===null?m:Number(_))},"delay-hide":_=>{Xi(_===null?h:Number(_))},float:_=>{eo(_===null?w:_==="true")},hidden:_=>{Wr(_===null?C:_==="true")}};Object.values(J).forEach(_=>_(null)),Object.entries(M).forEach(([_,X])=>{var ce;(ce=J[_])===null||ce===void 0||ce.call(J,X)})};S.useEffect(()=>{K(r)},[r]),S.useEffect(()=>{Te(i)},[i]),S.useEffect(()=>{dt(c)},[c]),S.useEffect(()=>{ft(l)},[l]),S.useEffect(()=>{Re(d)},[d]),S.useEffect(()=>{Yt(m)},[m]),S.useEffect(()=>{Xi(h)},[h]),S.useEffect(()=>{eo(w)},[w]),S.useEffect(()=>{Wr(C)},[C]),S.useEffect(()=>{Hr(x)},[x]),S.useEffect(()=>{no.current!==$&&console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.")},[$]),S.useEffect(()=>{typeof window<"u"&&window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles",{detail:{disableCore:$==="core",disableBase:$}}))},[]),S.useEffect(()=>{var M;const J=new Set($s);let _=n;if(!_&&e&&(_=`[data-tooltip-id='${e}']`),_)try{document.querySelectorAll(_).forEach(Xt=>{J.add({current:Xt})})}catch{console.warn(`[react-tooltip] "${_}" is not a valid CSS selector`)}const X=document.querySelector(`[id='${t}']`);if(X&&J.add({current:X}),!J.size)return()=>null;const ce=(M=Pn??X)!==null&&M!==void 0?M:Rs.current,rt=new MutationObserver(Xt=>{Xt.forEach(so=>{var dn;if(!ce||so.type!=="attributes"||!(!((dn=so.attributeName)===null||dn===void 0)&&dn.startsWith("data-tooltip-")))return;const zs=ro(ce);io(zs)})}),Ke={attributes:!0,childList:!1,subtree:!1};if(ce){const Xt=ro(ce);io(Xt),rt.observe(ce,Ke)}return()=>{rt.disconnect()}},[$s,Rs,Pn,t,n]),S.useEffect(()=>{O!=null&&O.border&&console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."),z&&!CSS.supports("border",`${z}`)&&console.warn(`[react-tooltip] "${z}" is not a valid \`border\`.`),O!=null&&O.opacity&&console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."),D&&!CSS.supports("opacity",`${D}`)&&console.warn(`[react-tooltip] "${D}" is not a valid \`opacity\`.`)},[]);let yr=p;const $n=S.useRef(null);if(o){const M=o({content:W??null,activeAnchor:Pn});yr=M?Le.createElement("div",{ref:$n,className:"react-tooltip-content-wrapper"},M):null}else W&&(yr=W);q&&(yr=Le.createElement(Y5,{content:q}));const oo={id:e,anchorId:t,anchorSelect:n,className:s,classNameArrow:a,content:yr,contentWrapperRef:$n,place:Ae,variant:De,offset:Kt,wrapper:Ln,events:gr,openOnClick:v,positionStrategy:Jt,middlewares:k,delayShow:On,delayHide:nt,float:Zi,hidden:Ls,noArrow:A,clickable:b,closeOnEsc:j,closeOnScroll:E,closeOnResize:T,style:O,position:L,isOpen:P,border:z,opacity:D,arrowColor:V,setIsOpen:Q,afterShow:N,afterHide:I,activeAnchor:Pn,setActiveAnchor:M=>Ps(M)};return Le.createElement(K5,{...oo})};typeof window<"u"&&window.addEventListener("react-tooltip-inject-styles",e=>{e.detail.disableCore||E0({css:":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9}.core-styles-module_tooltip__3vRRp{visibility:hidden;position:absolute;top:0;left:0;pointer-events:none;opacity:0;transition:opacity 0.3s ease-out;will-change:opacity,visibility}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{visibility:visible;opacity:var(--rt-opacity)}",type:"core"}),e.detail.disableBase||E0({css:`
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`,type:"base"})});const Hw=()=>{const{verb:e}=sr(),{handleListen:t,isActiveStates:n}=ut(),r=Gi(),o=new URLSearchParams(r.search).get("conjugated"),s=fe(),a=H(x=>x.quizData.selectedVerbDetails)||[],l=H(x=>x.quizData.isLoading);H(x=>x.quizData.error),S.useEffect(()=>{s(Ea(e))},[s]);const{verb:c,verbEng:d,verbGeo:f,forms:p}=a,{i18n:y}=te(),v=y.language==="ka";return l?u.jsx(We,{}):u.jsxs(X5,{children:[u.jsxs(Z5,{children:[u.jsx("h1",{children:(c==null?void 0:c.charAt(0).toUpperCase())+(c==null?void 0:c.slice(1))}),u.jsx("h3",{children:v?f:d})]}),u.jsx(ez,{children:p&&(Object==null?void 0:Object.entries(p).map(([x,k])=>u.jsxs(tz,{children:[u.jsx("h2",{children:x.replace(/([A-Z])/g," $1").replace(/^./,m=>m.toUpperCase())}),u.jsx(nz,{children:u.jsx("ul",{children:k==null?void 0:k.map((m,h)=>u.jsxs("li",{children:[u.jsxs(oz,{highlight:m==null?void 0:m.french.includes(o),children:[u.jsx(rz,{children:m==null?void 0:m.french})," ",u.jsx(LL,{onClick:t(m==null?void 0:m.french),isActive:n[h],children:u.jsx("img",{src:cr,alt:"ListenImg"})})]}),u.jsx(iz,{children:v?m==null?void 0:m.georgian:m==null?void 0:m.english})]},h))})})]},x)))})]})},X5=g.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;

  height: auto;
`,Z5=g.div`
  margin-bottom: 1rem;
  /* background-color: ${e=>e.theme.tertiaryBackground}; */
  h1 {
    text-align: center;
    &:before {
      content: ${e=>e.theme.background==="#000000"?'"🔸"':'"🔹"'};
    }
  }
`,ez=g.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: space-between;
  width: 100%;
`,tz=g.div`
  margin-bottom: 1rem;
  outline: 2px solid grey;
  background-color: ${e=>e.theme.secondaryBackground};
  margin: 1rem;
  width: 400px;

  h2 {
    background-color: ${e=>e.theme.primaryBackground};
    padding: 1rem;
  }
`,nz=g.div`
  /* margin: 1rem; */
  ul {
    list-style: none;
  }
`,rz=g.p`
  &:before {
    content: ${e=>e.theme.background==="#000000"?'"🔸"':'"🔹"'};
  }
`,iz=g.span`
  margin-left: 2.5rem;
  color: ${e=>e.theme.secondaryText};
  padding: 1rem;
`,oz=g.div`
  background: ${e=>e.highlight?e.theme.primaryBackground:"transparent"};

  display: flex;
  border-top: 1px solid ${e=>e.theme.tertiaryBackground};
  padding-top: 0.4rem;
`,sz=({tooltipContent:e,index:t,conjugated:n,id:r})=>{console.log("conjugated in TooltipComponent",n);const{handleListen:i,isActiveStates:o}=ut(),[s,a]=S.useState(!1),l=()=>{a(!s)};return u.jsxs(az,{"data-tip":e,onClick:l,children:[u.jsx(mr,{to:`/verbs/${e}?conjugated=${n}`,children:e}),u.jsx(J5,{place:"top",effect:"solid"}),u.jsx(lz,{onClick:i(e),children:u.jsx(Ji,{isActive:o[t]})}),s&&u.jsx(cz,{children:u.jsx(Hw,{})})]})},az=g.span`
  width: 100%;
  height: 1.8rem;
  display: flex;
  text-align: center;
  align-items: center;
  position: relative;
`,lz=g.span`
  margin-left: 0.4rem;
`,cz=g.div`
  position: absolute;
  top: -1000%;
  left: 60%;
  width: 350px;
  height: 400px;
  overflow-y: scroll;
  background-color: white;
  border: 2px solid red;
  z-index: 999;
`,uz=e=>e!=null&&e.startsWith("l'")||e.startsWith("L'")?e==null?void 0:e.slice(2):e,dz=({text:e,vocabulary:t,isTextVerbs:n,verbFormMapping:r,vocabularyData:i})=>{const{t:o,i18n:s}=te(),[a,l]=S.useState(!1),[c,d]=S.useState(0),f=()=>{l(!a),d(A=>A+180)},p=e==null?void 0:e.split(" "),[y,v]=S.useState(null),x=r&&Object.values(r)||[],k=[...new Set(x)],h=(A=>{const b=A==null?void 0:A.split(".");return b==null?void 0:b.map(E=>{const T=E==null?void 0:E.trim(),O=T.split(/\s|,/).filter(P=>P.length>0),L=F3(O);return{sentence:T,words:L}})})(e),w=t==null?void 0:t.map(A=>{var b,j,E;return(E=(j=(b=Lw(A))==null?void 0:b.toLowerCase())==null?void 0:j.replace(" (f.)",""))==null?void 0:E.replace(" (m.)","")}),C=h.filter(A=>A.words.length<=7);return u.jsxs(fz,{children:[u.jsx("div",{children:u.jsxs(mz,{children:[u.jsx("h3",{children:o("Verbes utilisés dans le texte")}),k.map((A,b)=>u.jsx(mr,{to:`/verbs/${A}`,children:u.jsx("li",{children:u.jsx("button",{children:A})},b)}))]})}),p==null?void 0:p.map((A,b)=>{const j=uz(A).toLowerCase().replace(/[^a-z]/g,""),E=w==null?void 0:w.includes(j),T=n&&r[j],O=T?r[j]:"",L=()=>{T&&v(j)},P=()=>{T&&v(null)};return T?u.jsxs(pz,{onMouseEnter:L,onMouseLeave:P,children:[A,u.jsx(hz,{children:y===j&&u.jsx(sz,{id:`verb-tooltip-${b}`,tooltipContent:O,conjugated:A,index:b,offset:{top:-100}})})]},b):E?u.jsxs(Vw,{children:[A," "]},b):u.jsxs(gz,{className:b===0?"first":"",children:[A," "]},b)}),u.jsxs("h2",{onClick:f,children:[o("Construire la phrase"),u.jsx(nw,{isActive:a,onClick:f})]}),a&&u.jsx(bh,{sentenceData:C})]})},fz=g.div`
  font-family: "Poppins", sans-serif;
  font-size: ${e=>e.theme.medium};
  line-height: ${e=>e.theme.largeLineHeight};
  letter-spacing: ${e=>e.theme.extraMegaLetterSpacing};
  border-bottom: 1px solid ${e=>e.theme.tertiaryText};
  @media (min-width: 577px) and (max-width: 767px) {
    font-size: ${e=>e.theme.mediumSmall};
    line-height: ${e=>e.theme.mediumLineHeight};
    letter-spacing: ${e=>e.theme.megaLetterSpacing};
  }
  @media (min-width: 393px) and (max-width: 576px) {
    font-size: ${e=>e.theme.mediumSmall};
    line-height: ${e=>e.theme.largeLineHeight};
    letter-spacing: ${e=>e.theme.megaLetterSpacing};
  }
  @media (max-width: 392px) {
    font-size: ${e=>e.theme.small};
    line-height: ${e=>e.theme.largeLineHeight};
    letter-spacing: ${e=>e.theme.extraLargeLetterSpacing};
  }
  h2 {
    display: flex;

    justify-content: center;
  }
`,Vw=g.span`
  /* background-color: ${e=>e.theme.highlight1}; */
  font-weight: bold;

  position: relative;
  @media (max-width: 392px) {
  }
`,pz=g(Vw)`
  background-color: ${e=>e.theme.highlight2};
  margin: 0 0.3rem;
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
  font-weight: 500;

  @media (max-width: 392px) {
    padding: 0.1rem;
  }
`,hz=g.span`
  position: absolute;
  background-color: ${e=>e.theme.highlight3};
  top: -100%;
  left: 40%;
  /* padding: 0.2rem 0.4rem; */
  text-align: center;
  cursor: pointer;
`,mz=g.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  height: 170px;
  overflow-y: scroll;
  margin: 0;
  margin-bottom: 1rem;
  padding: 0;
  border-bottom: 2px solid ${e=>e.theme.highlight3};
  h3 {
    margin: 0 auto;
    width: 100%;
  }
  li {
    display: flex;
    text-decoration: none;
    padding: 0;
    margin: 0;
    flex-wrap: wrap;
    button {
      text-decoration: none;
      padding: 0.2rem;
      margin: 0;
      width: auto;
      background-color: ${e=>e.theme.secondaryText};
      color: ${e=>e.theme.secondaryBackground};
      cursor: pointer;
      font-size: ${e=>e.theme.small};
    }
  }
`,gz=g.span`
  &.first {
    margin-left: 1rem;
    font-size: ${e=>e.theme.medium};
    font-weight: bold;
  }
`,od=({type:e,isOpen:t,onToggle:n,french:r,vocabularyData:i,english:o,georgian:s})=>{S.useState(0);const a=S.useRef(null);return S.useEffect(()=>{if(t){const c=a.current.offsetTop-160;window.scrollTo({top:c,behavior:"smooth"})}},[t]),u.jsxs(yz,{children:[u.jsxs("h2",{onClick:n,children:[e,u.jsx(nw,{})]}),t&&u.jsxs(vz,{ref:a,children:[e==="Texte"&&u.jsx(dz,{text:i==null?void 0:i.text,vocabulary:r,verbFormMapping:i==null?void 0:i.verbFormMapping,isTextVerbs:i==null?void 0:i.textVerbs,vocabularyData:i}),e==="Genre des noms"&&u.jsx(Pw,{frenchWords:r,parentsData:!0}),e==="Questionnaire"&&u.jsx(Ow,{french:r,english:o,georgian:s})]})]})},yz=g.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid ${e=>e.theme.tertiaryText};
  align-items: left;

  h2 {
    display: flex;
    justify-content: space-between;
    align-items: center;

    text-align: left;
  }
`,vz=g.div``,xz=()=>{var x,k,m,h;const{topicId:e}=sr(),t=fe(),n=H(w=>w.quizData.currentTopic),r=H(w=>w.quizData.isLoading);S.useEffect(()=>{e&&t(vi(e))},[]);const[i,o]=S.useState(null),{vocabularyTopicId:s}=sr(),{t:a,i18n:l}=te(),c=l.language==="ka";if(S.useEffect(()=>{t(Bo())},[t,s]),r)return u.jsx(We,{});const d=(x=n==null?void 0:n.words)==null?void 0:x.map(w=>w==null?void 0:w.french),f=(k=n==null?void 0:n.words)==null?void 0:k.map(w=>w==null?void 0:w.english),p=(m=n==null?void 0:n.words)==null?void 0:m.map(w=>w==null?void 0:w.georgian),y=(h=n==null?void 0:n.words)==null?void 0:h.map(w=>w==null?void 0:w.definition),v=c?p:f;return u.jsxs(wz,{children:[u.jsxs(Sz,{children:[a("Les mots")," ",u.jsx("b",{children:d&&(d==null?void 0:d.length)})]}),u.jsx(bz,{children:u.jsx(Y3,{frenchWords:d,secondLanguage:v,definition:y})}),u.jsxs(Cz,{children:[u.jsx(od,{type:a("Texte"),isOpen:i==="Texte",onToggle:()=>o(i==="Texte"?null:"Texte"),vocabularyData:n,french:d}),u.jsx(od,{type:a("Genre des noms"),isOpen:i==="Genre des noms",onToggle:()=>o(i==="Genre des noms"?null:"Genre des noms"),french:d}),u.jsx(od,{type:a("Questionnaire"),isOpen:i==="Questionnaire",onToggle:()=>o(i==="Questionnaire"?null:"Questionnaire"),english:f,georgian:p,french:d})]})]})},wz=g.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
  align-items: flex-start;
  margin: 0;
  /* border: 2px solid red; */
  margin: 0 auto;
  /* width:100%; */
  @media (min-width: 577px) and (max-width: 767px) {
    width: 95%;
  }
  @media (min-width: 393px) and (max-width: 576px) {
    /* max-width: 95%; */
    /* outline: 1px solid red; */
    padding: 0;
    margin: 0;
    width: 90%;
    margin-right: auto;
  }
  /* width: 100%; */
  @media (max-width: 392px) {
    /* outline: 1px solid red; */
    padding: 0;
    margin: 0;
    width: 90%;
    margin-right: auto;
  }
`,bz=g.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 2rem; */
  margin: 0 auto;
  border-bottom: 4px solid ${e=>e.theme.tertiaryText};

  @media (max-width: 920px) {
    /* width: 768px; */
  }
  @media (max-width: 768px) {
    /* width: 630px; */
  }

  @media (max-width: 500px) {
    width: 374px;
    /* outline: 1px solid red; */
  }
`,Sz=g.div`
  width: 200px;
  border: 2px solid grey;
  padding: 0.5rem 1rem;
  text-align: center;
  margin: 0 auto;
  font-size: 1.2rem;

  b {
    font-size: 1.4rem;
    border-bottom: 2px solid ${e=>e.theme.primaryText};
  }
`,kz=g.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Cz=g(kz)`
  /* border: 2px solid gold; */
  margin: 0 auto;
  width: 98%;
  padding-left: 0.8rem;
`;g.div`
  display: flex;
  flex-wrap: wrap; /* Add this line to make the cards wrap */
  width: 100%;
  height: 100vh;
  background: green;
`;g.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  gap: 2rem;
  border-radius: 1rem;

  width: 400px;
  height: 550px;
  border: 4px solid violet;
  margin: 2rem 3rem;
  position: relative;

  @media (min-width: 992px) and (max-width: 1199px) {
    margin: 1rem 2rem;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 14rem;
    font-size: 1.4rem;
    padding: 0.6rem 1.2rem;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    flex-direction: column;
    margin: 1.4rem 0.8rem;
    padding: 0.4rem;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    margin: 0 0.4rem;
    /* padding: 0.3rem; */
  }
`;g.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;

  p {
    font-size: 1.2rem;
  }
`;g.div`
  display: flex;
  align-items: center;
  max-width: 100%;
  p {
    margin-right: 1rem;
    &::after {
      content: ":";
    }
  }

  b {
    font-size: 2rem;
  }
`;g.div`
  background-image: url(${e=>e.imageUrl});
  background-repeat: repeat;
  background-position: center;
  background-size: 100%;
  transition: background-size 1s ease;
  z-index: 1;
  font-family: "Arial", "Helvetica", sans-serif, "Times New Roman", "Times",
    serif, "Courier New", "Courier", monospace;

  /* Add the blur and color overlay */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background-color: #ab65fcc8; */
    filter: blur(8px);
    z-index: -1;
  }

  &:hover {
    background-size: 70%; /* Increase background-size on hover to make it approach */
    transition: background-size 1s ease;
  }
  img {
    width: 100%;
  }
`;const Az=()=>{const[e,t]=S.useState(null),{t:n}=te(),r=H(d=>d.isFavorite.favorites),i=fe(),{handleListen:o,isActiveStates:s}=ut(),a=d=>{i(dw(r[d]))},l=()=>{i(YL())},c=d=>{t(f=>f===d?null:d)};return u.jsxs(jz,{children:[u.jsx("h2",{children:n("Mots favoris")}),r.length===0?u.jsx("p",{children:n("Pas de mots favoris")}):u.jsxs(Ez,{children:[r.filter(d=>Object.keys(d).length>0).map((d,f)=>u.jsxs(Tz,{children:[u.jsxs(Oz,{children:[u.jsx("span",{children:d.word}),u.jsx("span",{children:d.secondLanguage}),u.jsxs(Lz,{children:[u.jsx(Rz,{onClick:o(d.word),isActive:s[f],children:u.jsx("img",{src:cr,alt:"ListenImg"})}),u.jsx(Pz,{src:fw,alt:"Favorite",onClick:()=>a(f)}),u.jsx($z,{onClick:()=>c(f),isExpanded:f===e,children:"▾"})]})]}),u.jsx($w,{index:f,expandedIndex:e,frenchExamples:d.frenchExamples,secondLanguageExamples:d.secondLanguageExamples})]},f)),u.jsx(et,{onClick:l,children:"Clear All"})]})]})},jz=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 365px;
  width: 100vw;
  height: 100%;
  margin: 0 0.4rem;
`,Ez=g.div`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  border-radius: 12px;
  min-width: 365px;
  max-width: 100%;
`,Tz=g.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 1.4rem;
  min-height: 4rem;
  max-width: 100%;
  border-bottom: 3px solid gold;
  padding: 0.5rem;
  border-radius: 0 0 0 12px;
  margin-bottom: 1rem;
  &:hover {
    /* background-color: #48b456; */
  }
`,Oz=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  cursor: pointer;
  background-color: ${e=>e.isExpanded?"#e6af68":e.theme.background};
  color: ${e=>e.theme.text};
  span {
    padding: 1rem;
    min-width: 30%;

    &:first-child {
      font-weight: bold;
    }
  }

  @media (max-width: 920px) {
    font-size: 1.3rem;
    padding: 0.8rem;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.6rem;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
    padding: 0.6rem;
  }
`;g.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  text-align: center;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  width: 10rem;
  font-size: 1.2rem;

  background: #001a1a;
  color: gold;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: gold;
    color: #001a1a;
  }
`;const Lz=g.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 60px;
  max-width: 120px;
  text-align: center;
  margin-left: auto;
  margin-right: 3rem;
  pointer-events: ${e=>e.isExpanded?"none":"auto"};
`,Pz=g.img`
  max-width: 1.5rem;
  max-height: 1.5rem;
  margin-left: auto;
`,$z=g.div`
  transform: ${e=>e.isExpanded?"rotate(180deg)":"rotate(0deg)"};
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  margin: 0 0.5rem;
`,Rz=g.div`
  display: flex;
  align-items: center;
  & > img {
    width: ${e=>e.width||"1.2rem"};
    height: ${e=>e.height||"1.2rem"};
    cursor: pointer;

    filter: ${e=>e.isActive?"none":"invert(-150%)"};
    transition: transform 0.3s ease-in-out;
    transform: ${e=>e.isActive?"scale(1.1)":"scale(1)"};
  }
`,zz=()=>{const e=fe(),{t,i18n:n}=te(),r=H(o=>o.quizData.topicNames)||[],i=H(o=>o.quizData.isLoading);return S.useState(null),S.useEffect(()=>{e(xi())},[e]),i?u.jsx(We,{}):u.jsx(Nz,{children:r.map(o=>u.jsx(Fz,{to:`/vocabulary-topics/${o._id}`,children:u.jsxs(Dz,{children:[u.jsx(Iz,{src:o.imageUrl,alt:"Topic"}),u.jsx(_z,{children:u.jsx(Bz,{children:o.topic})})," ",u.jsxs(Mz,{children:[u.jsx("span",{children:t("Nombre de Mots")}),u.jsx("strong",{children:o.wordsCount})]})]})},o._id))})},Nz=g.ul`
  display: flex;
  margin: 0 auto;
  align-items: center;
  width: 90%;
  /* outline: 2px solid red; */
  flex-wrap: wrap;
`;g(et)`
  transition: background-color 0.3s ease;
  width: auto;
`;const Fz=g(ct)`
  text-decoration: none;
  /* color: #333; */

  &:hover {
    color: #007bff;
  }
`,Dz=g.div`
  border-radius: 0.5rem;
  display: flex;
  height: 320px;
  width: 300px;
  flex-direction: column;
  align-items: center;
  outline: 2px solid ${e=>e.theme.secondaryText};
  background-color: ${e=>e.theme.secondaryBackground};
  color: ${e=>e.theme.primaryText};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin: 1rem auto;
  margin: 1rem;
  &:hover {
    outline: 2px solid ${e=>e.theme.secondaryText};
    box-shadow: 4px 8px 10px rgba(32, 31, 31, 0.5);
    transform: scale(1.02);
  }

  @media (min-width: 768px) and (max-width: 920px) {
    margin: 0.8rem;
  }

  @media (min-width: 577px) and (max-width: 767px) {
    margin: 0.4rem;
  }

  @media (min-width: 393px) and (max-width: 576px) {
    margin: 1rem auto;
    max-width: 370px;
  }

  @media (max-width: 392px) {
    margin: 1rem auto;
  }
  @media (max-width: 302px) {
    margin: 1rem auto;
    max-width: 210px;
  }
`,Iz=g.img`
  width: 100%;
  height: 50%; /* Adjust this value to set the desired image height */
  overflow: hidden;
  object-fit: cover;
  margin-bottom: 8px;
  border-radius: 8px 8px 0 0;
`,Bz=g.h3`
  /* font-size: 20px; */
  margin: 0;
  line-height: ${e=>e.theme.smallLineHeight};
  margin-bottom: 8px;
`,_z=g.p`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  font-size: 16px;
  margin: 0;
  color: ${e=>e.theme.primaryText};
  margin-bottom: 8px; /* Adjust this value for spacing */
`,Mz=g.h4`
  margin: 0 auto;
  margin-top: auto;
  margin-bottom: 1rem;
  color: ${e=>e.theme.secondaryText};

  strong {
    margin-left: 0.5rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: ${e=>e.theme.secondaryText};
    border-bottom: 2px solid ${e=>e.theme.secondaryText};
  }
`,Mo=ke("dialogueTopics/fetchDialogueTopics",async()=>{try{return(await Ce.get("/dialogueTopics")).data}catch{throw Error("Failed to fetch phrases for lesson")}}),Wz={dialogueTopics:[],isLoading:!1,error:null},Uz=qe({name:"dialogueTopics",initialState:Wz,reducers:{},extraReducers:e=>{e.addCase(Mo.pending,t=>{t.isLoading=!0,t.error=null}).addCase(Mo.fulfilled,(t,n)=>{t.dialogueTopics=n.payload,t.isLoading=!1}).addCase(Mo.rejected,(t,n)=>{t.isLoading=!1,t.error=n.error.message})}}),Hz=Uz.reducer,Vz=({dialogueTopics:e})=>{const{t,i18n:n}=te();return n.language,u.jsx(Qz,{children:e.map(r=>{const{_id:i,chapter:o,chapterName:{chapterNameEng:s,chapterNameFr:a,chapterNameGeo:l},dialogues:c}=r;return u.jsxs(qz,{children:[u.jsxs(Gz,{children:[u.jsx(Kz,{children:o}),u.jsx(Yz,{children:a})]}),u.jsx(Qw,{children:c.map(d=>{const{dialogueName:f,dialogueImg:p}=d;return u.jsx("div",{children:u.jsx("h4",{children:f})},f)})}),u.jsxs(Jz,{children:[u.jsxs("p",{children:[t("Des mots"),u.jsx("b",{children:"15"})]}),u.jsxs("p",{children:[t("Expressions"),u.jsx("b",{children:"10"})]}),u.jsxs("p",{children:[t("Des exercices")," ",u.jsx("b",{children:" 5"})]})]})]},i)})})},Qz=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
  border-radius: 3rem;
  border: 6px solid ${e=>e.theme.primaryText};
`,qz=g.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${e=>e.theme.secondaryBackground};
  color: ${e=>e.theme.primaryText};
`,Gz=g.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Kz=g.span`
  color: #1e072e;
  font-size: 1.4rem;
`,Yz=g.span`
  font-size: 1.6rem;
  border-bottom: 3px solid white;
  padding: 0.4rem 1rem;
  border-radius: 12px;
  text-align: center;
  margin: 0 auto;
`,Qw=g.div`
  padding: 0.2rem 1rem;
  width: 80%;
  margin: 1rem;
  border: 3px dashed ${e=>e.theme.primaryText};
  div {
    border-radius: 0 0 0 8px;
    border-bottom: 2px solid ${e=>e.theme.primaryText};
    &:last-child {
      margin-bottom: 1rem;
    }
  }
  p {
    font-size: 1.2rem;
    color: ${e=>e.theme.primaryText};
  }
  h4 {
    font-size: 1.4rem;

    color: ${e=>e.theme.primaryText};
    font-weight: bold;
  }
`,Jz=g(Qw)`
  display: flex;

  justify-content: space-evenly;
  p {
    display: flex;
    align-items: center;
    border-radius: 0 0 1rem;

    b {
      background: ${e=>e.theme.primaryText};
      color: ${e=>e.theme.background};

      border: 3px solid white;
      padding: 0.3rem;
      border-radius: 50%;
      margin-left: auto;
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    flex-direction: column;
    margin: 1rem 0.5rem;
    padding: 0.5rem;
    p {
      font-size: 1rem;
      margin: 1rem 0.5rem;

      b {
        background: green;
        color: white;
        border: 3px solid white;
        padding: 0.3rem;
        border-radius: 50%;
      }
    }
  }

  @media (max-width: 576px) {
    flex-direction: column;
    p {
      font-size: 1rem;
      margin: 1rem 0.5rem;
    }
  }
`,Xz=()=>{const e=fe(),t=H(r=>r.dialogueTopics.dialogueTopics)||[],n=H(r=>r.dialogueTopics.isLoading);return S.useEffect(()=>{e(Mo())},[]),n?u.jsx(We,{}):u.jsx("div",{children:t&&t.map(r=>u.jsx(Zz,{to:`/dialogue-topics/${r._id}`,children:u.jsx(Vz,{dialogueTopics:[r]})},r._id))})},Zz=g(ct)`
  text-decoration: none;
  /* background-color: red; */
`,e4=({words:e})=>{const t=e.map(p=>p.french),n=e.map(p=>p.english),r=e.map(p=>p.georgian),i=e.map(p=>p.definition),{handleListen:o,isActiveStates:s}=ut(),{t:a,i18n:l}=te(),c=l.language==="ka",d=c?r:n,f=c?"Geo":"Eng";return u.jsxs(t4,{children:[u.jsx(n4,{children:"Vocabulary"}),u.jsx("div",{children:t.map((p,y)=>u.jsxs(r4,{children:[u.jsx(i4,{onClick:o(p),children:p}),u.jsx(wh,{definition:i,secondLanguage:d,secondLangButtonName:f,french:t,index:y,isMultipleDefinitions:!0}),u.jsxs(o4,{children:[u.jsx("p",{children:"nom masculin"}),u.jsxs(s4,{children:[u.jsx(a4,{onClick:o(p),children:u.jsx(Ji,{})}),u.jsx(pw,{word:p,definition:i[y],secondLanguage:d[y],secondLanguageExamples:"No examples"}),u.jsx(Bc,{word:p,frenchExamples:i[y],secondLanguage:d[y],secondLanguageExamples:"No examples"})]})]})]},y))})]})},t4=g.div`
  margin-top: 5rem;
  h2 {
    margin-bottom: 3rem;
  }
`,n4=g.h1`
  &:before {
    content: "💥 ";
  }
`,r4=g.div`
  border-bottom: 5px solid ${e=>e.theme.primaryText};
  border-right: 5px solid ${e=>e.theme.primaryText};
  background: ${e=>e.theme.secondaryBackground};
  color: ${e=>e.theme.primaryText};
  padding: 1rem;
  margin: 1rem 0.5rem;
  position: relative;
  min-height: 3.5rem;
  border-radius: 0 0 0 12px;
  max-width: 100%;
`,i4=g.p`
  font-weight: bold;
  font-size: 1.4rem;
`,o4=g.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  :first-child {
    font-style: italic;
  }
`,s4=g.div`
  display: flex;

  gap: 1rem;
  align-items: center;
  justify-content: space-evenly;
  margin-right: 1rem;
  margin-left: auto;
`,a4=g.div`
  display: flex;
`,l4=({phrases:e})=>{const{t,i18n:n}=te(),r=n.language==="ka",i=e.map(y=>y.french),o=e.map(y=>y.english),s=e.map(y=>y.georgian),a=r?s:o,[l,c]=S.useState({}),[d,f]=S.useState(Array(s.length).fill(!1)),p=y=>{c(v=>({...v,[y]:v[y]===0?180:0})),f(v=>{const x=[...v];return x[y]=!x[y],x})};return u.jsxs(c4,{children:[u.jsx("h1",{children:"DialoguePhrase"}),u.jsx("div",{children:i.map((y,v)=>u.jsxs(u4,{children:[u.jsx(d4,{children:y}),d[v]&&u.jsx(h4,{children:a[v]}),u.jsx(f4,{onClick:()=>p(v),children:u.jsx(p4,{src:xh,alt:"ChevronDown",rotation:l[v]||0})})]},v))})]})},c4=g.div`
  width: 100%;
`,u4=g.div`
  background: #ffffec;
  padding: 1rem;
  margin: 1rem 0.5rem;
  position: relative;
  min-height: 3.5rem;
  border-radius: 0 0 0 12px;
  max-width: 100%;
  border-bottom: 5px solid ${e=>e.theme.primary};
  border-right: 5px solid ${e=>e.theme.primary};
  background: ${e=>e.theme.vocabularyBack};
  color: black;
`,d4=g.p`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`,f4=g.div`
  margin-left: auto;

  img {
    position: absolute;
    top: 15%;
    right: 3%;
  }
`,p4=g.img`
  width: 24px;
  height: 24px;
  transition: transform 0.5s ease;
  margin-left: 1rem;
  transform: ${({rotation:e})=>`rotate(${e}deg)`};
  cursor: pointer;
`,h4=g.div`
  /* color: grey; */
  margin-left: 1rem;
  font-size: 1.2rem;
  font-style: italic;
`,m4=({isActive:e,onClick:t})=>{const{t:n}=te();return u.jsxs(g4,{children:[u.jsx(v4,{children:n(e?"Cacher Toutes les Traductions":"Afficher toutes les traductions")}),u.jsx(y4,{isActive:e,onClick:t})]})},g4=g.div`
  display: flex;
  flex-direction: column;
`,y4=g.button`
  display: flex;
  align-items: center;
  background-color: #f8ad22;
  border: none;
  width: 4.6rem;
  height: 2.4rem;
  border-radius: 20px;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s;

  &::before {
    content: "";
    position: absolute;
    width: 2rem;
    height: 2rem;
    background-color: #fff;
    border-radius: 50%;
    transition: transform 0.3s;
    transform: ${({isActive:e})=>e?"translateX(0)":"translateX(100%)"};
  }
  @media (max-width: 768px) {
    width: 4rem;
    height: 2rem;
    &:before {
      width: 1.7rem;
      height: 1.7rem;
    }
  }
  @media (max-width: 576px) {
    width: 3.6rem;
    height: 1.6rem;
    &:before {
      width: 1.4rem;
      height: 1.4rem;
    }
  }
`,v4=g.span`
  font-size: 1.2rem;
  margin: 0 auto;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`,x4=()=>{const e=fe(),{dialogueTopicId:t}=sr(),{i18n:n}=te(),r=n.language==="ka",[i,o]=S.useState(!1),[s,a]=S.useState(-1),[l,c]=S.useState({}),{handleListen:d,isActiveStates:f}=ut(),p=b=>{c(j=>({...j,[b]:j[b]===0?180:0})),a(j=>j===b?-1:b)},y=H(b=>b.dialogueTopics.dialogueTopics)||[],v=H(b=>b.dialogueTopics.isLoading),x=y.find(b=>b._id===t);if(S.useEffect(()=>{e(Mo())},[]),v)return u.jsx(We,{});if(!x)return u.jsx("div",{children:"No data available for the selected topic."});const{_id:k,chapter:m,chapterName:{chapterNameEng:h,chapterNameFr:w,chapterNameGeo:C},dialogues:A}=x||{};return u.jsxs(w4,{children:[u.jsxs(P4,{children:[u.jsx("h1",{children:w}),u.jsx(m4,{isActive:i,onClick:()=>o(!i)})]}),u.jsx("div",{children:A&&A.map((b,j)=>{const{dialogueName:E,dialogueImg:T,dialogue:O,words:L,phrases:P}=b;return u.jsxs(b4,{children:[u.jsx(S4,{children:E}),O.map(($,z)=>{const{speaker:D,messageFr:V,messageEng:Q,messageGeo:N}=$,I=r?N:Q,W=i||s===z;return u.jsxs(k4,{children:[u.jsxs(A4,{children:[D,":"]}),u.jsxs(C4,{children:[u.jsx(j4,{children:V}),u.jsxs($4,{children:[u.jsx(L4,{onClick:d(V),children:u.jsx(Ji,{})}),u.jsx(T4,{onClick:()=>{p(z)},children:u.jsx(O4,{src:xh,alt:"ChevronDown",rotation:l[z]||0})})]}),W&&u.jsx(E4,{children:I})]})]},z)}),u.jsx("div",{children:u.jsx(e4,{words:L})}),u.jsx(l4,{phrases:P})]},j)})})]},k)},w4=g.section`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
`,b4=g.div`
  padding: 0.5rem;
  margin: 0.5rem;
  margin: 0 auto;
  max-width: 920px;
`,S4=g.h1`
  &::before {
    content: "⚜️  ";
  }
`,k4=g.div`
  display: flex;
  align-items: center;
  padding: 0.4rem;
  border-radius: 0 0 0 1rem;
  border-bottom: 5px solid ${e=>e.theme.primaryText};
  border-right: 5px solid ${e=>e.theme.primaryText};
  background: ${e=>e.theme.secondaryBackground};
  color: ${e=>e.theme.primaryText};
  margin-bottom: 1rem;

  @media (max-width: 576px) {
    flex-direction: column;
    p {
      font-size: 1rem;
      margin: 1rem 0.5rem;
    }
  }
`,C4=g.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  height: 6rem;
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow-y: scroll;
`,A4=g.p`
  font-weight: bold;
  width: 50%;

  background: ${e=>e.theme.primaryBackground};
  color: ${e=>e.theme.primaryText};
  padding: 1rem 0;
  text-align: center;
`,j4=g.span`
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  width: 80%;
  font-weight: bold;

  &:before {
    content: "🔹";
  }
`,E4=g.span`
  background: ${e=>e.theme.tertiaryBackground};
  color: ${e=>e.theme.secondaryText};

  margin-left: 1.2rem;
  padding: 0.4rem;

  &:before {
    content: "🔸";
  }
`,T4=g.div`
  /* margin-left: auto; */
  img {
    /* position: absolute;
    top: 15%;
    right: 3%; */
  }
`,O4=g.img`
  width: 24px;
  height: 24px;
  transition: transform 0.5s ease;
  margin-left: 0.4rem;
  transform: ${({rotation:e})=>`rotate(${e}deg)`};
  cursor: pointer;
`,L4=g.span`
  cursor: pointer;
`,P4=g.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  button {
    margin: 0 auto;
  }
`,$4=g.div`
  border-bottom: 2px solid grey;
  border-left: 2px solid grey;
  border-radius: 0 0 0 12px;
  padding: 0 0 0.2rem 0.4rem;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0%;
  right: 2%;
`,R4=()=>{const e=localStorage.getItem("grammerData");return e?JSON.parse(e):null},Fa=ke("grammer/fetchGrammer",async()=>{try{const t=(await Ce.get("/grammer/basic-grammer")).data;return localStorage.setItem("grammerData",JSON.stringify(t)),t}catch{throw Error("Failed to fetch grammer lessons")}}),Wo=ke("grammer/fetchByAspect",async e=>{try{return(await Ce.get(`/grammar/${e}`)).data}catch{throw Error("Failed to fetch grammer lessons")}}),Da=ke("grammer/fetchAspectList",async()=>{try{return(await Ce.get("/grammar/all-aspect")).data}catch{throw Error("Failed to fetch grammer lessons")}}),z4={quizData:[],topicsByAspect:{},aspectList:[],isLoading:!1,error:null,grammer:R4()||[]},N4=qe({name:"grammer",initialState:z4,reducers:{},extraReducers:e=>{e.addCase(Fa.pending,t=>{t.isLoading=!0}).addCase(Fa.fulfilled,(t,n)=>{t.grammer=n.payload,t.isLoading=!1}).addCase(Fa.rejected,(t,n)=>{t.error=n.error.message}).addCase(Wo.pending,t=>{t.isLoading=!0}).addCase(Wo.fulfilled,(t,n)=>{t.topicsByAspect[n.meta.arg]=n.payload,t.isLoading=!1}).addCase(Wo.rejected,(t,n)=>{t.error=n.error.message}).addCase(Da.pending,t=>{t.isLoading=!0}).addCase(Da.fulfilled,(t,n)=>{t.aspectList=n.payload,t.isLoading=!1}).addCase(Da.rejected,(t,n)=>{t.error=n.error.message})}}),F4=N4.reducer,D4=({topics:e})=>{const{i18n:t}=te(),n=t.language==="ka";if(!e)return null;const{title:{titleFr:r,titleEng:i,titleGeo:o}}=e,s=n?o:i;return u.jsxs(I4,{children:[u.jsx("h3",{children:r}),u.jsx("h5",{children:s})]})},I4=g.div`
  display: flex;
  flex-direction: column;
  margin: 0 0.15rem;
  padding: 0.2rem;
  width: 300px;
  height: 250px;
  border-radius: 12px;
  outline: 1px solid ${e=>e.theme.primaryText};

  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: ${e=>e.theme.secondaryBackground};
  color: ${e=>e.theme.secondaryText};
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    color: ${e=>e.theme.primaryText};
  }
  h5 {
    text-align: center;
    margin-top: auto;
  }
`,sd=ke("tenseNames/fetchTenseNames",async()=>{try{return(await Ce.get("/grammer/basic-verb-tenses/names")).data}catch(e){throw console.log(e),Error("Failed to fetch words")}}),ad=ke("selectedTense/fetchVerbDetails",async e=>{try{return(await Ce.get(`/grammer/basic-verb-tenses/${e}`)).data}catch(t){throw console.log(t),Error("Failed to fetch verb details")}}),B4={selectedTenseCache:{},selectedTense:[],tenseNames:[],isLoading:!1,error:null},_4=qe({name:"verbTenses",initialState:B4,reducers:{},extraReducers:e=>{e.addCase(sd.pending,t=>{t.isLoading=!0}).addCase(sd.fulfilled,(t,n)=>{t.tenseNames=n.payload,t.isLoading=!1}).addCase(sd.rejected,(t,n)=>{t.error=n.error.message}).addCase(ad.pending,t=>{t.isLoading=!0}).addCase(ad.fulfilled,(t,n)=>{const{_id:r}=n.payload;console.log("in Slice",n.payload),console.log("id in Slice",r),t.selectedTenseCache[r]=n.payload,t.selectedTense=n.payload,t.isLoading=!1}).addCase(ad.rejected,(t,n)=>{t.error=n.error.message})}}),M4=_4.reducer;g.div`
  flex-direction: column;
  display: flex;
  ul {
    list-style: none;
    display: inline-flex;
    flex-wrap: wrap;
    li {
      margin: 0.2rem;
      button {
        margin: 0.2rem;
      }
    }
  }
`;g(et)`
  width: auto;
`;g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  font-size: 1.4rem;
  background-color: ${e=>e.theme.secondaryBackground};
  color: ${e=>e.theme.primaryText};
`;g.div`
  padding: 1rem;
  font-size: 1.4rem;

  border: 2px solid grey;
`;const W4=g.p`
  padding: 0.4rem;

  &:before {
    content: ${e=>e.theme.background==="#000000"?'"🔹"':'"🔸"'};
  }
`;g(W4)`
  font-size: 1.1rem;
  color: ${e=>e.theme.secondaryText};
  text-indent: 3rem;
  &:before {
    content: "- ";
  }
`;const U4=g.li`
  font-style: italic;
  padding: 0.4rem;
  font-size: 1.2rem;
`;g(U4)`
  font-size: 1rem;
  list-style: none;
  color: ${e=>e.theme.secondaryText};
  &:before {
    content: "- ";
  }
`;const H4=()=>{S.useState(null);const e=fe(),t=H(i=>i.grammer.grammer)||[],n=H(i=>i.grammer.isLoading),r=H(i=>i.grammer.error);return S.useEffect(()=>{e(Fa())},[e]),n?u.jsx(We,{}):r?u.jsx("p",{children:r.message}):u.jsxs(V4,{children:[t&&t.map(i=>{const{_id:o}=i;return u.jsx(mr,{to:`/grammar-basic/${o}`,children:u.jsx(D4,{topics:i})},o)}),u.jsx("div",{})," "]})},V4=g.div`
  display: flex;

  align-items: center;
  justify-content: center;
  margin: 0 1rem;
  flex-wrap: wrap;
  background-color: ${e=>e.theme.primaryBackground};
  color: ${e=>e.theme.primaryText};
  h1 {
    text-align: center;
  }
`,qw=g.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0 1.8rem;
  max-width: 100%;

  @media (min-width: 768px) and (max-width: 920px) {
    margin: 0 0.2rem;
    max-width: 90%;
  }
  @media (min-width: 577px) and (max-width: 767px) {
  }

  @media (min-width: 393px) and (max-width: 576px) {
  }
  @media (max-width: 392px) {
  }
`,Gw=g.div``,Th=g.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;

  width: 100%;

  border-bottom: 3px solid black;
  @media (min-width: 768px) and (max-width: 920px) {
    margin: 0 0.2rem;
    width: 100%;
  }
  cursor: pointer;
  margin-bottom: 2rem;
`,Oh=g.div`
  display: flex;
  flex-direction: column;
  background-color: ${e=>e.theme.secondaryBackground};
  margin-bottom: 1rem;
  width: 94%;
  padding: 0.5rem;
  p {
    text-indent: 1rem;
    margin-bottom: 1rem;
    padding: 0.5rem;

    &:before {
      content: ${e=>e.theme.background==="#000000"?'"🔸"':'"🔹"'};
    }
  }
  span {
    text-indent: 1rem;
    margin-left: 2rem;

    color: ${e=>e.theme.secondaryText};
  }
  @media (min-width: 768px) and (max-width: 920px) {
    max-width: 88%;
  }

  @media (max-width: 392px) {
    width: 300px;
  }
`,Kw=g(Th)`
  width: 94%;
  padding: 0 1rem;

  p {
    font-size: 1.2rem;
    margin-bottom: 0;
  }

  @media (min-width: 577px) and (max-width: 767px) {
    width: 90%;
  }
  @media (min-width: 393px) and (max-width: 576px) {
    width: 90%;
  }
`,Yw=g(Oh)`
  width: 100%;

  @media (min-width: 393px) and (max-width: 576px) {
    width: 90%;
  }
  div {
    display: flex;
  }
  span {
    padding: 0.5rem 1rem;
  }
`,Jw=g.div`
  max-width: 100%;

  display: flex;
  align-items: center;
  margin-right: 3rem;
  margin-left: auto;
  & > img {
    color: black;
    width: ${e=>e.width||"1.2rem"};
    height: ${e=>e.height||"1.2rem"};
    cursor: pointer;

    filter: ${e=>e.isActive?"black":"invert(-150%)"};
    transition: transform 0.3s ease-in-out;
    transform: ${e=>e.isActive?"scale(1.1)":"scale(1)"};
  }
`,Q4=()=>{const{BasicGrammerTopicId:e}=sr(),{handleListen:t,isActiveStates:n}=ut(),{t:r,i18n:i}=te(),o=i.language==="ka";fe();const s=H(C=>C.grammer.grammer.find(A=>A._id===e))||[],a=H(C=>C.grammer.isLoading),l=H(C=>C.grammer.error);if(a)return u.jsx(We,{});if(l)return u.jsx("p",{children:l.message});if(!s)return;const{title:{titleFr:c,titleEng:d,titleGeo:f},description:{descriptionFr:p,descriptionEng:y,descriptionGeo:v},example:{exampleFr:x,exampleEng:k,exampleGeo:m}}=s,h=o?v:y,w=o?m:k;return u.jsxs(qw,{children:[u.jsx(Gw,{children:u.jsx("h2",{children:c})}),u.jsxs(Th,{children:[u.jsx("h2",{children:r("Qu'est-ce que c'est ?")}),p.map((C,A)=>u.jsxs(Oh,{children:[u.jsx("p",{children:C}),u.jsx("span",{children:h[A]})]},A))]}),u.jsxs(Kw,{children:[u.jsx("h2",{children:r("Examples")}),x.map((C,A)=>u.jsxs(Yw,{children:[u.jsxs("div",{children:[u.jsx("p",{children:C})," ",u.jsx(Jw,{onClick:t(C),isActive:n[A],children:u.jsx("img",{src:cr,alt:"ListenImg"})})]}),u.jsx("span",{children:w[A]})]},A))]})]})},q4=()=>u.jsx(G4,{children:u.jsx(K4,{children:"There are no words yet."})}),G4=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: #f7f7f7;
  border-radius: 8px;
  margin: 20px 0;
`,K4=g.p`
  font-size: 18px;
  color: #333;
`,Y4=({selectedFlashcards:e})=>{console.log("selectedFlashcards",e);const{handleListen:t,isActiveStates:n}=ut(),[r,i]=S.useState(0),[o,s]=S.useState([]),[a,l]=S.useState([]),[c,d]=S.useState(""),[f,p]=S.useState(null),[y,v]=S.useState([]);S.useEffect(()=>{if(e.length>0&&r<e.length){const A=e[r],b=A.split("");console.log("lettersAndSpaces",b),d(A),console.log("flashcard",A),b.sort(()=>Math.random()-.5),v([...b]),p(A),l([])}},[e,r]);const x=A=>{s(o.filter(b=>b!==A)),l(a.filter((b,j)=>j!==A)),v([...y,a[A]])},k=A=>{s([...o,A]),l([...a,y[A]]),v(y.filter((b,j)=>j!==A))},m=()=>{s([]),l([]),v(c.split(""))},h=a.join("")===c,w=o.length===c.length,C=()=>{s([]),l([]),r+1<e.length&&i(A=>A+1)};return u.jsxs(J4,{children:[u.jsx(tN,{onClick:t(f),children:"Play the word"}),u.jsxs(X4,{children:[u.jsx(Xw,{children:a.map((A,b)=>u.jsx(Z4,{onClick:()=>x(b),disabled:a.length>=c.length,selected:!0,children:A},b))}),u.jsx(eN,{children:y.map((A,b)=>u.jsx(Zw,{onClick:()=>k(b),selected:o.includes(b),children:A},b))})]}),w&&!h&&u.jsx("div",{children:"Incorrect! Try again."}),h&&u.jsxs("div",{children:["Correct! You assembled the word.",r<e.length-1&&u.jsx(et,{onClick:C,children:"Next"}),r===e.length-1&&u.jsxs(nN,{children:[u.jsx("p",{children:"Congratulations! You have completed all the words. "}),u.jsx(rN,{onClick:m,children:"Restart"})]})]})]})},J4=g.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 390px;
  min-height: 600px;
  margin: 1rem auto;
  background: #0055a4dd;
  -webkit-box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  -moz-box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  color: white;
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    max-width: 370px;
  }
`,X4=g.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Xw=g.div`
  background-color: #8ae8ff;
  margin: 0 auto;
  width: 100%;
  min-width: 390px;
  height: 10rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
  position: relative;
  display: flex;
  flex-wrap: wrap;
`,Zw=g.button`
  background-color: #8ae8ff;
  display: flex;
  cursor: pointer;
  align-items: center;
  font-size: 2rem;
  margin: 0.5rem;
  padding: 0.5rem;
  height: 2.2rem;
  width: 2.2rem;
  border-radius: 4px;
`,Z4=g(Zw)`
  border: ${e=>e.selected?"2px solid blue":"none"};
  color: ${e=>e.selected?"#e2ebf3dd":"#8ae8ff"};
  background-color: ${e=>e.selected?"#0055a4dd":"none"};
`,eN=g(Xw)`
  width: 100%;
  height: 10rem;
  color: black;
  background-color: #0055a4dd;
`,tN=g(et)`
  color: white;
  background-color: #023668dd;
  margin: 1rem;
`,nN=g.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #023668dd;
  padding: 1rem;
  p {
    padding: 0.3rem 0.6rem;
    letter-spacing: 1.4px;
    margin-bottom: 1rem;
  }
`,rN=g(et)`
  background-color: #f1f7fcdd;
  color: #ff4e07;
  &:hover {
    background-color: #ff4e07;
    color: #f1f7fcdd;
  }
`,iN=({selectedFlashcards:e})=>{const{t}=te(),[n,r]=S.useState(0),[i,o]=S.useState(0),[s,a]=S.useState(4),[l,c]=S.useState(100),[d,f]=S.useState(!1),[p,y]=S.useState(!1),v=e.map(h=>h.word),x=e.map(h=>h.secondLanguage);S.useEffect(()=>{const h=setInterval(()=>{!d&&!p&&(s>0?(a(w=>w-1),c(w=>w-25)):(r(w=>w===v.length-1?0:w+1),o(w=>w+1),a(4),c(100)))},1e3);return()=>{clearInterval(h)}},[s,v,d,n,p]),S.useEffect(()=>{n>0&&n%4===0&&f(!0)},[n]);const k=()=>{f(!1)},m=()=>{y(!p)};return u.jsxs(oN,{children:[d?u.jsxs(dN,{children:[u.jsxs("div",{children:[" ",t("Words already reviewed"),u.jsx("p",{children:i})]}),u.jsx(OL,{children:t("Vous suivez ?")}),u.jsx(ow,{onClick:k,children:t("Continue")})]}):u.jsx(u.Fragment,{children:u.jsxs(sN,{children:[u.jsxs(aN,{children:[u.jsx(uN,{children:s}),u.jsx("span",{children:v[n]})]}),u.jsx(lN,{style:{filter:`blur(${l}px)`},children:u.jsx(cN,{children:x[n]})})]})}),u.jsx(fN,{onClick:m,children:p?"Resume":"Pause"})]})},oN=g(iw)`
  width: 100%;
  margin-top: 2rem;
  /* background: ${e=>e.theme.secondaryBackground}; */
`,sN=g.div`
  width: 365px;
  height: 40rem;
  margin-bottom: 1rem;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${e=>e.theme.tertiaryBackground};
`,aN=g.span`
  font-size: 2rem;
  width: 100%;
  height: 20rem;

  border: 2px solid black;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  span {
    margin-top: -6rem;
  }
`,lN=g.div`
  width: 100%;
  height: 20rem;
  display: flex;
  flex-direction: column; /* Added this line */
  align-items: center;
  justify-content: center;

  filter: ${e=>`blur(${e.blurLevel}%)`}; /* Fix this line */
`,cN=g.span`
  font-size: 2rem;
  padding: 1rem 2rem;
  font-weight: bold;
  background: ${e=>e.theme.highlight2};
  color: ${e=>e.theme.primaryText};
`,uN=g.div`
  font-size: 2rem;
  margin-top: -3rem;
  color: ${e=>e.theme.primaryText};
`,dN=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid black;
  background: ${e=>e.theme.tertiaryBackground};

  width: 365px;
  height: 40rem;
  div {
    p {
      text-align: center;
      margin: 2rem;
      font-size: 2.6rem;
      font-style: bold;
      color: ${e=>e.theme.primaryText};
    }
  }
  p {
    margin-bottom: 2rem;
  }
`,fN=g(ow)`
  margin: 1rem;
  background-color: #3d3d3d;
  color: gold;
  &:hover {
    background-color: gold;
    color: #3d3d3d;
  }
`,P0=["apple","dog","jump","book","run","cat","tree","play","car","eat","flower","swim"],pN=({FrenchWord:e,secondLanguageWord:t})=>{const[n,r]=S.useState(0),[i,o]=S.useState(0),[s,a]=S.useState({}),[l,c]=S.useState(0),[d,f]=S.useState(!1),[p,y]=S.useState(!1);S.useEffect(()=>{v()},[i,n]);const v=()=>{if(p){a({});return}if(e.length===0||i>=e.length){y(!0);return}const k=e[i],m=t[i],h=[m];for(;h.length<2;){const w=Math.floor(Math.random()*P0.length),C=P0[w];h.includes(C)||h.push(C)}h.sort(()=>Math.random()-.5),a({question:k,options:h,correctOption:m})},x=k=>{d||f(!0),k===s.correctOption&&c(m=>m+1),setTimeout(()=>{i+1<e.length?o(m=>m+1):(o(0),r(m=>m+1),y(!0))},800)};return u.jsxs(hN,{children:[u.jsxs(gN,{children:[u.jsx("h2",{children:"Topic Title"}),u.jsx(mN,{children:s.question&&u.jsx(yN,{children:s.question})}),p?u.jsxs(wN,{children:[l===e.length?u.jsxs("div",{children:[u.jsx("h2",{children:"Congratulations! You mastered all words."}),u.jsx("ul",{children:e.map(k=>u.jsx("li",{children:k}))})]}):u.jsxs("h2",{children:["Quiz completed. You scored ",l," out of ",e.length,"."]}),u.jsx(bN,{onClick:()=>window.location.reload(),children:l===e.length?"Play Again":"Retry"})]}):Array.isArray(s.options)&&s.options.map((k,m)=>u.jsx(vN,{onClick:()=>x(k),isSelected:s.selectedOption===k,isCorrect:k===s.correctOption,children:k},m))]}),u.jsxs(xN,{children:["Score: ",l]})]})},hN=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem auto;

  max-width: 390px;
  -webkit-box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  -moz-box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  background: #0055a4dd;
  color: white;
  @media (max-width: 576px) {
    max-width: 370px;

    display: flex;
    flex-direction: column;
  }
`,mN=g.div``,gN=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
`,yN=g.div`
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
`,vN=g.div`
  border-bottom: 2px solid blue;
  border-right: 2px solid blue;
  padding: 0.3rem 1rem;
  margin: 0.3rem 1rem;
  font-size: 1.2rem;

  cursor: pointer;
  border-radius: 0.5rem;
  max-width: 100%;
  width: 330px;
  align-self: center;

  background-color: ${e=>e.isSelected?e.isCorrect?"green":"red":"#0f6dd8"};
  color: ${e=>e.isSelected?e.isCorrect?"white":"black":""};

  @media (max-width: 576px) {
    width: 300px;
  }
`,xN=g.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;g.button`
  padding: 1rem;
  text-align: center;
  align-self: center;
  width: 12rem;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  background-color: #0055a4;
  color: #ffffff;
  cursor: pointer;

  border-radius: 6px;
`;g.button`
  padding: 1rem;
  text-align: center;
  align-self: center;
  width: 10srem;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  background-color: #0055a4;
  color: #ffffff;
  cursor: pointer;

  border-radius: 6px;

  &:hover {
    background-color: #ffffff;
    color: #0055a4;
  }
`;const wN=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 250px;
`,bN=g.button`
  padding: 1rem;
  text-align: center;
  width: 10rem;
  font-size: 1.2rem;
  background-color: #0055a4;
  color: #ffffff;
  cursor: pointer;
  border-radius: 6px;

  &:hover {
    background-color: #ffffff;
    color: #0055a4;
  }
`,SN=()=>{const{t:e}=te(),t=fe(),n=H(h=>h.flashcards.flashcards),[r,i]=S.useState([]),[o,s]=S.useState(!1),[a,l]=S.useState(null),c=S.useRef(null),{handleListen:d,isActiveStates:f}=ut(),p=h=>{const w=n[h];r.some(C=>C.word===w.word)?i(r.filter(C=>C.word!==w.word)):i([...r,w])},y=h=>{t(mw(h))},v=()=>{t(nP())},x=()=>{if(console.log("handleShowTrainer called"),c.current){s(!0);const h=3*16,w=c.current.offsetTop-h;window.scrollTo({top:w,behavior:"smooth"})}},k=()=>{i([...n]),x()},m=r.map(h=>h.word);return u.jsx(kN,{children:n.length===0?u.jsx(q4,{}):u.jsxs(CN,{children:[n.map((h,w)=>{const{word:C,frenchExamples:A,secondLanguage:b,secondLanguageExamples:j}=h;return u.jsxs(AN,{children:[u.jsxs("p",{children:[u.jsx(jN,{children:C}),u.jsx(EN,{children:b})]}),u.jsxs(ON,{onClick:d(C),children:[u.jsx(Ji,{}),u.jsx(TN,{onClick:()=>y(w),src:gw,alt:"FlashcardIcon"}),u.jsxs(LN,{children:[u.jsx(PN,{type:"checkbox",id:`flashcard-${w}`,checked:r.includes(h),onChange:()=>p(w)}),u.jsx("label",{htmlFor:`flashcard-${w}`})]})]})]},w)}),u.jsxs(RN,{children:[u.jsxs($N,{onClick:k,children:[" ",e("Tout sélectionner")]}),u.jsx(eb,{onClick:v,children:e("Supprimer tout")})]}),r.length===0&&u.jsxs(NN,{children:[e("Aucun mot sélectionné. Veuillez sélectionner des mots pour choisir le mode entraîneur.")," "]}),u.jsxs(zN,{onClick:x,children:[u.jsx("h2",{children:e("Exercices")}),u.jsx(ia,{onClick:()=>l("blurry"),children:"Blurry Trainer"}),u.jsx(ia,{onClick:()=>l("wordJumble"),children:"Word Jumble Trainer"}),u.jsx(ia,{onClick:()=>l("FrQuizTrainer"),children:"FrQuizTrainer Trainer"})]}),a==="blurry"&&r.length>0&&u.jsx(ia,{ref:c,children:u.jsx(iN,{selectedFlashcards:r})}),a==="wordJumble"&&r.length>0&&u.jsx(Y4,{selectedFlashcards:m}),a==="FrQuizTrainer"&&r.length>0&&u.jsx(pN,{FrenchWord:r.map(h=>h.word),secondLanguageWord:r.map(h=>h.secondLanguage)})]})})},kN=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 95%;

  padding: 0 0.1rem;
  margin: 0;
  overflow: hidden;
  @media (min-width: 767px) and (max-width: 913px) {
    max-width: 92%;
  }
  @media (min-width: 577px) and (max-width: 767px) {
    max-width: 98%;
  }
  @media (min-width: 393px) and (max-width: 576px) {
    max-width: 98%;
    outline: 1px solid brown;
  }
  @media (max-width: 392px) {
    max-width: 95%;
    outline: 1px solid brown;
  }
  @media (max-width: 361px) {
    max-width: 85%;
  }
  @media (max-width: 340px) {
    max-width: 65%;
  }
`,CN=g.div`
  display: flex;
  flex-direction: column;

  border-radius: 12px;

  margin: 0 auto;
  margin-top: 4rem;
  margin-bottom: 1rem;
  max-width: 100%;

  @media (min-width: 577px) and (max-width: 767px) {
    gap: 0.8rem;
  }
  @media (min-width: 393px) and (max-width: 576px) {
    max-width: 100%;
  }
  @media (max-width: 392px) {
    max-width: 100%;
  }
`,AN=g.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 4rem;
  max-width: 95%;
  border-bottom: 3px solid ${e=>e.theme.primaryText};
  padding: 0.4rem 0.8rem;
  border-radius: 0 0 0 12px;
  margin: 0 0.5rem;
  margin-bottom: 1rem;
  background-color: ${e=>e.theme.secondaryBackground};
  @media (min-width: 767px) and (max-width: 913px) {
    max-width: 100%;
  }
  @media (min-width: 577px) and (max-width: 767px) {
  }
  @media (min-width: 393px) and (max-width: 576px) {
    max-width: 100%;
    min-height: 3rem;
  }
  @media (max-width: 392px) {
    max-width: 100%;
    min-height: 3rem;
    outline: 1px solid red;
  }
`,jN=g.span`
  font-size: ${e=>e.theme.large};
  font-style: bold;
  color: ${e=>e.theme.primaryText};

  &:after {
    content: " - ";
  }
  @media (min-width: 577px) and (max-width: 767px) {
    font-size: ${e=>e.theme.medium};
  }
  @media (min-width: 393px) and (max-width: 576px) {
    font-size: ${e=>e.theme.small};
  }
  @media (max-width: 392px) {
    font-size: ${e=>e.theme.small};
  }
`,EN=g.span`
  font-size: ${e=>e.theme.small};
  font-style: italic;
  @media (min-width: 577px) and (max-width: 767px) {
    font-size: ${e=>e.theme.small};
  }
  @media (min-width: 393px) and (max-width: 576px) {
    font-size: ${e=>e.theme.extraSmall};
  }
  @media (max-width: 392px) {
    font-size: ${e=>e.theme.extraSmall};
  }
`,eb=g.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  width: 10rem;
  font-size: 1.2rem;

  background: #001a1a;
  color: ${e=>e.theme.highlight1};
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: ${e=>e.theme.highlight1};
    color: #001a1a;
  }
  @media (max-width: 576px) {
    width: 8rem;
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
  }
`,TN=g.img`
  max-width: 1.3rem;
  max-height: 1.3rem;
  margin-left: auto;
  cursor: pointer;
`,ON=g.div`
  display: flex;
  align-items: center;

  gap: 1rem;

  text-align: center;
  margin-left: auto;
  margin-right: 1rem;
  @media (max-width: 576px) {
    margin-right: 0;
    gap: 0.2rem;
  }
`,LN=g.div`
  /* width: 5rem; */
`,PN=g.input`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  @media (max-width: 576px) {
    width: 1rem;
    height: 1rem;
  }
`,tb=g(eb)`
  background: ${e=>e.theme.highlight1};
  color: #001a1a;
  &:hover {
    background: #001a1a;
    color: ${e=>e.theme.highlight1};
  }
`,$N=g(tb)``,RN=g.div`
  display: flex;
  justify-content: space-around;
  margin: 2rem;
  gap: 1rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${e=>e.theme.highlight3};
  @media (max-width: 576px) {
    /* width: 8rem;
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem; */
  }
`,zN=g.div`
  display: flex;
  flex-direction: column;

  align-items: space-between;

  width: 100%;
`;g(tb)`
  width: 10rem;
  background: #ffffff;
  color: #001a1a;
  &:hover {
    background: #001a1a;
    color: #ffffff;
  }
`;const ia=g.button`
  width: auto;
  margin: 0.2rem;
  border-radius: 0.5rem;
  font-size: ${e=>e.theme.medium};
  background: ${e=>e.theme.highlight2};
  color: ${e=>e.theme.primaryText};
  cursor: pointer;
`,NN=g.div``,FN=({description:e,highlight:t,link:n})=>u.jsxs(IN,{children:[u.jsxs(nb,{children:[e,u.jsx(mr,{to:n,children:u.jsx(et,{children:"Explore"})})]}),u.jsx(DN,{children:u.jsx("img",{src:t,alt:"highlight"})})]}),nb=g.div`
  font-size: 1.4rem;
  width: 330px;
  padding: 0.5rem 1rem;
  outline: 2px solid ${e=>e.theme.primaryText};
  background-color: ${e=>e.theme.secondaryBackground};
  color: ${e=>e.theme.primaryText};
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-weight: bold;
  animation: ${EL} 0.3s ease-in-out;
`,DN=g.div`
  cursor: pointer;
  width: 360px;

  img {
    width: 100%;
    height: 100%;
  }
`,IN=g.div`
  display: flex;
  position: relative;
  transition: filter 0.3s, opacity 0.3s; /* Add transitions for smooth animations */
  background-color: ${e=>e.theme.secondaryBackground};

  &:hover ${nb} {
    display: block;
  }
`,BN=[{description:"Test your vocabulary knowledge with QuizPictures. Identify correct words based on images and improve your language skills.",highlight:"/images/screenShots/games/pictureQuiz.png",link:"/quiz-pictures"},{description:"SentenceBuilderEx is a game that helps you practice building sentences. Select words to construct accurate sentences and enhance your language abilities.",highlight:"/images/screenShots/games/sentenceBuilder.png",link:"/sentence-builder-Ex"},{description:"exercise-article is a game that helps you practice french articles.",highlight:"/images/screenShots/games/LeLa.png",link:"/vocabulary-topics/exercise-article"}],_N=()=>u.jsx(MN,{children:BN.map(e=>{const{description:t,highlight:n,link:r}=e;return u.jsx(FN,{link:r,description:t,highlight:n})})}),MN=g.div`
  display: flex;
  /* flex-direction: row; */
  margin: 1rem;
  padding: 2rem;
  background-color: ${e=>e.theme.primaryBackground};

  /* border: 1px solid #ccc; */
  flex-wrap: wrap;
  width: 100vw;
  height: 100%;
  justify-content: space-evenly;
  margin-bottom: 1rem;
`,WN=()=>u.jsx(UN,{children:u.jsx(HN,{children:"Content coming soon..."})}),UN=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
`,HN=g.p`
  font-size: 1.5rem;
  color: ${e=>e.theme.primaryText};
`,VN={fr:[{title:"Leçons de grammaire de base",question:"Voulez-vous apprendre les bases de la grammaire ?",description:"Explorez les leçons fondamentales de grammaire pour construire une base solide.",link:"basic-grammar-lessons"},{title:"Verbes",question:"Savez-vous comment conjuguer les verbes dans différents temps ?",description:"Explorez la conjugaison des verbes avec des traductions et des exemples dans divers temps et modes.",link:"verb"},{title:"article",question:"Voulez-vous en savoir plus sur les articles définis et indéfinis ?",description:"Découvrez l'usage et les règles des articles définis et indéfinis dans différents contextes.",link:"article"},{title:"Pronoms",question:"Souhaitez-vous explorer les différents types de pronoms ?",description:"Plongez dans le monde des pronoms et apprenez-en davantage sur leur rôle dans les phrases.",link:"pronom"},{title:"Jeux",question:"Êtes-vous prêt(e) à jouer à des jeux linguistiques ?",description:"Pratiquez vos compétences linguistiques avec des jeux interactifs.",link:"games"},{title:"Adverbes",question:"Êtes-vous curieux(se) de connaître l'utilisation des adverbes ?",description:"Découvrez comment les adverbes modifient les verbes, les adjectifs et d'autres adverbes pour fournir plus d'informations.",link:"adverbe"},{title:"Adjectifs",question:"Êtes-vous prêt(e) à découvrir les différents types d'adjectifs et leur utilisation ?",description:"Explorez les mots descriptifs qui enrichissent votre langage et expriment diverses qualités.",link:"adjectif"},{title:"Conjugaison",question:"Êtes-vous curieux(se) d'explorer la conjugaison des verbes dans différents temps et modes ?",description:"Apprenez comment les verbes changent en fonction du temps, du mode et du sujet, et pratiquez leur conjugaison.",link:"conjugaison"},{title:"Prépositions",question:"Êtes-vous prêt(e) à apprendre comment les prépositions indiquent les relations entre les mots ?",description:"Comprenez comment les prépositions aident à exprimer la position, la direction, le temps, etc.",link:"preposition"},{title:"Conjonctions",question:"Souhaitez-vous comprendre comment les conjonctions relient les mots et les propositions ?",description:"Explorez le rôle des conjonctions dans la liaison des mots, des phrases ou des propositions.",link:"conjonction"}],en:[{title:"Basic Grammar Lessons",question:"Do you want to learn the basics of grammar?",description:"Explore fundamental grammar lessons to build a strong foundation.",link:"/grammar/basic-grammer-lessons"},{title:"Verbs",question:"Do you know how to conjugate verbs in different tenses?",description:"Explore verb conjugation with translations and examples in various tenses and moods.",link:"/grammar/verbs"},{title:"Articles",question:"Would you like to learn about definite and indefinite articles?",description:"Discover the usage and rules of definite and indefinite articles in different contexts.",link:"/Content-Coming-Soon"},{title:"Games",question:"Ready to play some language games?",description:"Practice your language skills with interactive games.",link:"/games"},{title:"Pronouns",question:"Want to explore different types of pronouns?",description:"Dive into the world of pronouns and learn about their roles in sentences.",link:"/Content-Coming-Soon"},{title:"Adverbs",question:"Curious about the usage of adverbs?",description:"Discover how adverbs modify verbs, adjectives, and other adverbs to provide more information.",link:"/Content-Coming-Soon"},{title:"Adjectives",question:"Are you ready to discover different types of adjectives and their usage?",description:"Explore descriptive words that enhance your language and express various qualities.",link:"/Content-Coming-Soon"},{title:"Conjugation",question:"Interested in exploring verb conjugation in various tenses and moods?",description:"Learn how verbs change based on tense, mood, and subject, and practice conjugating them.",link:"/Content-Coming-Soon"},{title:"Prepositions",question:"Ready to learn how prepositions indicate relationships between words?",description:"Understand how prepositions help express location, direction, time, and more.",link:"/Content-Coming-Soon"},{title:"Conjunctions",question:"Do you want to understand how conjunctions connect words and clauses?",description:"Explore the role of conjunctions in joining words, phrases, or clauses together.",link:"/Content-Coming-Soon"}],ka:[{title:"Basic Grammar Lessons",question:"Do you want to learn the basics of grammar?",description:"Explore fundamental grammar lessons to build a strong foundation.",link:"/grammar/basic-grammar-lessons"},{title:"ზმნები",question:"იცით როგორ აუღლოთ ზმნები სხვადასხვა დროებში?",description:"ზმნების უღლება სხვადასხვა დროს.",link:"/grammar/verbs"},{title:"არტიკლები",question:"იცით რა არი განსაზღვრული და განუსაზღვრელი არტიკლები..",description:"არტიკლები",link:"/Content-Coming-Soon"},{title:"ნაცვალსახელები",question:"გსურთ გაიგოთ სხვადასხვა ტიპების ნაცვალსახელები?",description:"შეიძლება გაიმოიცანით პრონომების როლი წარმოადგენს წინადადების პროდუქტებში.",link:"/Content-Coming-Soon"},{title:"თამაშები",question:"გახდეთ ენის თამაშები?",description:"გააკეთეთ ენის კომუნიკაციის უნარი თამაშების საშუალებით.",link:"/games"},{title:"ადვილები",question:"ხართ კიდევ კურიოზი ადვილების გამოყენების შესახებ?",description:"გაიმოიცანით, როგორ შეიძლება ადვილებები შეცვალონ ხალხები, ადგილები და დროები.",link:"/Content-Coming-Soon"},{title:"ადიქტივები",question:"გყავთ ნამდვილი განცხადების ადიქტივების გამოყენების შესახებ?",description:"აღწერეთ როგორ იმუშავებენ ადიქტივები ქართველებს და როგორ შეიძლება მათ გამოყენება.",link:"/Content-Coming-Soon"},{title:"Conjugation",question:"Interested in exploring verb conjugation in various tenses and moods?",description:"Learn how verbs change based on tense, mood, and subject, and practice conjugating them.",link:"/Content-Coming-Soon"},{title:"Prepositions",question:"Ready to learn how prepositions indicate relationships between words?",description:"Understand how prepositions help express location, direction, time, and more.",link:"/Content-Coming-Soon"},{title:"Conjunctions",question:"Do you want to understand how conjunctions connect words and clauses?",description:"Explore the role of conjunctions in joining words, phrases, or clauses together.",link:"/Content-Coming-Soon"}]},QN=()=>{const{t:e,i18n:t}=te(),n=t.language,r=VN[n]||[];return u.jsxs(sw,{children:[u.jsx("h1",{children:e("Bienvenue dans la section Grammaire")}),u.jsx("p",{children:e("Découvrez différents sujets de grammaire pour améliorer vos compétences linguistiques")}),u.jsx(aw,{children:r.map((i,o)=>u.jsxs(lw,{index:o,children:[u.jsxs("div",{children:[u.jsx("h3",{"aria-label":"Topic Title",children:e(i.title)}),u.jsx("h4",{"aria-label":"Topic Question",children:e(i.question)}),u.jsx("p",{"aria-label":"Topic Description",children:e(i.description)})]}),u.jsx(GN,{to:i.link,children:u.jsx(qN,{children:e("Explorer")})},o)]}))})]})},qN=g(et)`
  margin-bottom: auto;
  width: 10rem;
`,GN=g(mr)`
  margin-top: auto;
  margin-left: auto;
  margin-bottom: 1rem;
`,rb={fr:[{title:"Vocabulaire par thèmes",question:"Voulez-vous apprendre les bases de la vocabulaire ?",description:"Explorez les leçons fondamentales de vocabulaire pour construire une base solide.",link:"/vocabulary/vocabulary-topics"},{title:"Exercice d'articles",question:"Voulez-vous pratiquer les genres des mots français ?",description:"Entraînez-vous à choisir le genre correct des mots en français.",link:"/vocabulary/exercise-article"},{title:"Exercice de temps des verbes",question:"Voulez-vous pratiquer les temps des verbes en français ?",description:"Entraînez-vous à choisir la forme correcte des verbes en français.",link:"/vocabulary/verb-tense-exercise"},{title:"Flashcards",question:"Voulez-vous pratiquer avec des flashcards ?",description:"Utilisez des flashcards pour renforcer votre vocabulaire en français.",link:"/vocabulary/flashcards"},{title:"Mots favoris",question:"Voulez-vous voir vos mots favoris ?",description:"Consultez la liste de vos mots favoris pour les réviser.",link:"/vocabulary/favorite-words"},{title:"Construire des phrases",question:"Voulez-vous pratiquer la construction de phrases ?",description:"Entraînez-vous à construire des phrases en français.",link:"/vocabulary/sentence-builder"}],eng:[{title:"Vocabulary By Topics",question:"Do you want to learn the basics of vocabulary?",description:"Explore fundamental vocabulary lessons to build a strong foundation.",link:"/vocabulary/vocabulary-topics"},{title:"Article Exercise",question:"Do you want to practice French word genders?",description:"Practice choosing the correct gender for French words.",link:"/vocabulary/article-exercise"},{title:"Verb Tense Exercise",question:"Do you want to practice verb tenses in French?",description:"Practice choosing the correct verb tense forms in French.",link:"/vocabulary/verb-tense-exercise"},{title:"Flashcards",question:"Do you want to practice with flashcards?",description:"Use flashcards to reinforce your vocabulary in French.",link:"/vocabulary/flashcards"},{title:"Favorite Words",question:"Do you want to see your favorite words?",description:"View the list of your favorite words for review.",link:"/vocabulary/favorite-words"},{title:"Sentence Builder",question:"Do you want to practice sentence construction?",description:"Practice building sentences in French.",link:"/vocabulary/sentence-builder"}],ka:[{title:"Basic Vocabulary Topics",question:"Do you want to learn the basics of vocabulary?",description:"Explore fundamental vocabulary lessons to build a strong foundation.",link:"/vocabulary/vocabulary-topics"},{title:"Article Exercise",question:"Do you want to practice French word genders?",description:"Practice choosing the correct gender for French words.",link:"/vocabulary/article-exercise"},{title:"Verb Tense Exercise",question:"Do you want to practice verb tenses in French?",description:"Practice choosing the correct verb tense forms in French.",link:"/vocabulary/verb-tense-exercise"},{title:"Flashcards",question:"Do you want to practice with flashcards?",description:"Use flashcards to reinforce your vocabulary in French.",link:"/vocabulary/flashcards"},{title:"Favorite Words",question:"Do you want to see your favorite words?",description:"View the list of your favorite words for review.",link:"/vocabulary/favorite-words"},{title:"Sentence Builder",question:"Do you want to practice sentence construction?",description:"Practice building sentences in French.",link:"/vocabulary/sentence-builder"}]},KN=()=>{const{t:e,i18n:t}=te(),n=t.language,r=rb[n]||[];return u.jsxs(sw,{children:[u.jsx("h1",{children:e("Bienvenue dans la section Vocabulaire")}),u.jsx("h3",{children:e("Explorez différents sujets de vocabulaire pour améliorer vos compétences linguistiques")}),u.jsx(aw,{children:r.map((i,o)=>u.jsxs(lw,{children:[u.jsxs("div",{children:[u.jsx("h3",{"aria-label":"Topic Title",children:e(i.title)}),u.jsx("h4",{"aria-label":"Topic Question",children:e(i.question)}),u.jsx("p",{"aria-label":"Topic Description",children:e(i.description)})]}),u.jsx(JN,{to:i.link,children:u.jsx(YN,{children:e("Explore")})},o)]}))})]})},YN=g(et)`
  margin-bottom: auto;
  width: 10rem;
`,JN=g(mr)`
  margin-top: auto;
  margin-left: auto;
  margin-bottom: 1rem;
`,ib=({error:e})=>(console.log("error in errorMessage",e),u.jsx(XN,{children:u.jsx(ZN,{children:e.message})})),XN=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: #fdecea; /* Use a suitable background color for error */
  border-radius: 8px;
  margin: 20px 0;
`,ZN=g.p`
  font-size: 18px;
  color: #c62828; /* Use a suitable text color for error */
`,eF=()=>{const{TopicId:e}=sr(),t=Px(),{handleListen:n,isActiveStates:r}=ut(),{t:i,i18n:o}=te(),s=o.language==="ka",a=(b,j)=>{for(const E in b)if(b.hasOwnProperty(E)&&Array.isArray(b[E])){const T=b[E].find(O=>O._id===j);if(T)return console.log("foundTopic in AspectTopicPage",T),T}return null},l=H(b=>a(b.grammer.topicsByAspect,e));console.log("selectedGrammerTopic in ",l);const c=H(b=>b.grammer.isLoading),d=H(b=>b.grammer.error);if(S.useEffect(()=>{l==null&&t("/grammar/basic-grammar-lessons")},[t,l]),c)return u.jsx(We,{});if(d)return u.jsx("p",{children:d.message});if(!l&&l===null)return null;const{title:{titleFr:f,titleEng:p,titleGeo:y},description:{descriptionFr:v,descriptionEng:x,descriptionGeo:k},example:{exampleFr:m,exampleEng:h,exampleGeo:w}}=l,C=s?k:x,A=s?w:h;return u.jsxs(qw,{children:[u.jsx(Gw,{children:u.jsx("h2",{children:f})}),u.jsxs(Th,{children:[u.jsx("h2",{children:i("Qu'est-ce que c'est ?")}),v.map((b,j)=>u.jsxs(Oh,{children:[u.jsx("p",{children:b}),u.jsx("span",{children:C[j]})]},j))]}),u.jsxs(Kw,{children:[u.jsx("h2",{children:i("Examples")}),m.map((b,j)=>u.jsxs(Yw,{children:[u.jsxs("div",{children:[u.jsx("p",{children:b}),b.length!==0&&u.jsx(Jw,{onClick:n(b),isActive:r[j],children:u.jsx("img",{src:cr,alt:"ListenImg"})})]}),u.jsx("span",{children:A[j]})]},j))]})]})},tF=({topics:e})=>{const{i18n:t}=te(),n=t.language==="ka";if(!e)return null;const{title:{titleFr:r,titleEn:i,titleGeo:o}}=e,s=n?o:i;return u.jsxs(nF,{children:[u.jsx("h2",{children:r}),u.jsx("h3",{children:s})]})},nF=g.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border: 2px solid grey;
  width: 350px;
  border-radius: 12px;
  outline: 1px solid grey;
  border-bottom: 3px solid black;
  border-right: 3px solid black;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: ${e=>e.theme.secondaryBackground};
  color: ${e=>e.theme.pimaryText};
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  }
`,rF=()=>{const{aspect:e}=sr(),t=fe(),n=H(s=>s.grammer.topicsByAspect)||{},r=H(s=>s.grammer.isLoading),i=H(s=>s.grammer.error),o=n[e]||[];return S.useEffect(()=>{t(Wo(e))},[t,e]),r?u.jsx(We,{}):i?u.jsx(ib,{error:i}):u.jsx("div",{children:o&&(o==null?void 0:o.map(s=>u.jsxs(mr,{to:`/grammar-topics/${s._id}`,children:[u.jsx(tF,{topics:s})," "]},s._id)))})},iF="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEZUlEQVR4nO2Z+W9UdRTFX1t3/UFjVGpKp53vPed+ZxortRgDitVAiIobAmJEZAlSjRSlRo0Yo8EFEcUlBEEFBOMWlxCMRv3rzEm+NWZC8pZ5nWrs/W2WzPuc97733GWybDEWYzFqCTO7tNFoXN1oNJaMjIw0xsbGgrs7gBbJ2Gq14O4jo6OjN4yPj1+Z/UtiQNAhhKUkR80sNJtNxBgpaDNrhxDG3P0mADcDWBZCuMXdl+t1CGFpu92+ZCHA+4eHh68RgO5qWXiStwK4LYSwIsa4IoRgk5OTF/eEfHBw8Ap3v7HZbA53C+/uK0neAeDOEMLKZrN5/bzC67iY2VDd8GY25e53k1ytnMmyrK9u9r4Y47U9gF9jZmtjjJPKr9roewlP8h6S9+r7yrX/yrFZ0wG/zsweIDnedcIuFLy7P0jyYV2/Kn9/UbfRhc1sJ4DdZvaMu+8lOevuz5nZFoFXgQfwiF6rSJaml8+XuPPL3H3TP+HN7KUQwn6Sr5F8PoRwVwX4DfrdlNSlYqBskWo2m8vdfUcnvLsfIPmORFSBJ7mZ5KOl2g8lbsUzf7ueQCe8ux8C8AHJZ8vCA3jMzB43s4nCApQ4VRNWgABeuQD8RwCOApguC0/yCXffUKjAKWG6dZsE9FYnPMnjJD9z9+1l4EluBbDNzK4rdHzqsEp339IJD+BzkqcBnAwhbC0Jv6NQXVA/X5fPA9hzAfizJL8xs9OCLArv7jtlALkCNIzUWaQA7O+EB/A9yR9JnhR0QfhdZrYxV4AmqTorLID7ABzqhHf3cwDOxxhPCDwPXkVS7+UK0Bg4D+3BejM73gnv7r8B+EN5UgB+Osa4O1eA+vG6exudcwCy1ffS0zgoizWzt0m+aWb78uBJqso/nStAx6dO+BCCnOZ1d/8QwBGS75M8nMS8qxwReB68iqDeyxWg7UHNXeWryYk+Ifmxjou7H5HFuvsBAE8WgZejqTEskgMjdcGrJyKpJP0UwLFUiefEHE6wheAB7NXv5grQ3qYOeAAzJE+paKn6SkiqB8ckQJAsAa9mUDy5AtT1dQsfY9xF8oyZnUn+f0qen+rBCXefqQC/r91uL8mKRMqBqmOgwM6amTz/awBfJTFfSgzJl6vAA3iq8LZCs0BF+M2pYP0gzwfwHclv54QAeKMi/AsAVmVFQ+s+bcxKHpv1AL4AcI7kzypYAP4Wkiy0EjzJ2Xa7fVVhAekpWIk7/5CchuSvAH4heX5OiJn9lFxoW8U7/6Kum5WNqampi7TuKzIGprb5TwC/qz2QEIlIx+dg6v8rwbv7zNDQ0OVZldCussoMW7Axy4UnqToSs25CvdFCwZvZ2qyG6Gu1WhO9hnf3TbWsFlMMqLD1EH7jfPxf0K+ZtEfHpj+br9DKxczurxs+xrin64QtWegmtTHrFp7krFyu0WhclvU60vZ6Ik1cZeH1+arSFXaeok9Lp5Qjq7U9ALDd3ac1BqaNglYo62QGqaus/W+kxViM/2P8Bcap0NYmk0C/AAAAAElFTkSuQmCC",oF=({uniqueValues:e,subTopicsByAspect:t,toggleSubSection:n,isSubSectionOpen:r})=>{const{t:i}=te();return bx(),u.jsxs(ob,{children:[u.jsx(ab,{children:u.jsx(ms,{to:"/grammar",children:i("Grammar")})}),e&&(e==null?void 0:e.map((o,s)=>{var a;return u.jsxs(sb,{children:[u.jsxs(lb,{onClick:()=>n(o),children:[u.jsx(ms,{to:`/grammar/${o}`,children:u.jsx("span",{children:o.toUpperCase()})}),u.jsx(lF,{children:r(o)?"▲":"▼"})]}),u.jsx(cF,{show:r(o),children:(a=t[o])==null?void 0:a.map((l,c)=>u.jsxs(uF,{children:[u.jsx("img",{src:iF,alt:"ArrowRight"}),u.jsx(dF,{to:`/grammar-topics/${l._id}`,children:l.title.titleFr})]},c))})]},s)}))]})},sF=({vocabularyAspects:e,toggleSubSection:t,isSubSectionOpen:n})=>{const{t:r}=te();return u.jsxs(ob,{children:[u.jsx(ab,{children:u.jsx(ms,{to:"/vocabulary",children:r("Vocabulary")})}),e&&(e==null?void 0:e.map((i,o)=>u.jsx(sb,{children:u.jsx(lb,{children:u.jsx(ms,{to:`${i.link}`,children:u.jsx("span",{children:r(i.title)})})})},o)))]})},aF=()=>{const e=fe(),{t,i18n:n}=te();n.language,S.useState(null),S.useState([]);const[r,i]=S.useState({}),o=H(y=>y.grammer.topicsByAspect)||{},s=H(y=>y.grammer.aspectList)||[],a=H(y=>y.grammer.isLoading),l=H(y=>y.grammer.error),c=y=>{e(Wo(y))};S.useEffect(()=>{e(Da())},[]);const d=y=>{o[y]||e(c(y)),i(v=>({...v,[y]:!v[y]}))},f=y=>r[y],p=s.map(y=>y.grammarAspect);return a?u.jsx(We,{}):l?u.jsx(ib,{error:l}):u.jsxs(u.Fragment,{children:[u.jsx(oF,{uniqueValues:p,subTopicsByAspect:o,toggleSubSection:d,isSubSectionOpen:f}),u.jsx(sF,{vocabularyAspects:rb[n.language],toggleSubSection:d,isSubSectionOpen:f})]})},ob=g.div`
  background-color: ${e=>e.theme.secondaryBackground};
  max-width: 100%;
  padding: 0.2rem 0.4rem;
  margin-right: 0.2rem;
  @media (min-width: 751px) and (max-width: 920px) {
    /* letter-spacing: ${({theme:e})=>e.largeLetterSpacing}; */
    /* border: 2px solid red; */
    width: 280px;
    font-size: ${({theme:e})=>e.small};
  }
`,sb=g.div`
  /* margin-bottom: 20px; */
  border-bottom: 2px solid ${e=>e.theme.tertiaryText};
  padding-bottom: 1rem;
`,ab=g.h2``,ms=g(ct)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${e=>e.theme.primaryText};
  margin: 0.2rem;
  padding: 0.2rem;
`,lF=g.span`
  margin-left: auto;
`,cF=g.div`
  display: ${e=>e.show?"flex":"none"};
  flex-direction: column;
  justify-content: center;

  background-color: ${e=>e.theme.primaryBackground};
`,lb=g.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* border-bottom: 1px solid ${e=>e.theme.tertiaryText}; */
  padding: 0.3rem;
`,uF=g.li`
  display: flex;
  align-items: center;
  margin-left: 0.6rem;
  cursor: pointer;
  position: relative;
  padding: 0.4rem 0.4rem 0 0.4rem;
  img {
    max-width: 20px;
    max-height: 20px;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 13%;
    height: 2px;
    background-color: ${e=>e.theme.primaryText};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: calc(100% - 2px); /* Expand width to 100% on hover */
  }
  &:last-child {
    margin-bottom: 0.5rem;
  }
`,dF=g(ms)``,fF=({children:e})=>u.jsxs(pF,{children:[u.jsx(hF,{children:u.jsx(aF,{})}),u.jsxs(mF,{children:[e,u.jsx(L2,{})]})]}),pF=g.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  /* border: 2px solid green; */
`,hF=g.div`
  background-color: ${e=>e.theme.secondaryBackground};

  padding: 0.1rem;
  min-width: 300px;
  padding: 0.2rem 0.4rem;
  margin-right: 0.2rem;
  @media (min-width: 751px) and (max-width: 920px) {
    letter-spacing: ${({theme:e})=>e.largeLetterSpacing};
    /* border: 2px solid yellow; */
    width: 280px;
    font-size: ${({theme:e})=>e.large};
  }

  @media screen and (max-width: 750px) {
    display: none;
  }
`,mF=g.div`
  flex: 1;
  padding: 1rem;
  /* border: 2px solid black; */
`;function gF(){const[e,t]=S.useState(!1),n=()=>{t(i=>!i)},r=e?kx:MC;return u.jsx(DC,{theme:r,children:u.jsxs(yF,{children:[u.jsx(TL,{}),u.jsx(DR,{toggleTheme:n,isDarkMode:e}),u.jsxs($2,{children:[u.jsx(re,{path:"/",element:u.jsx(t$,{})}),u.jsx(re,{path:"/courses",element:u.jsx(wR,{})}),u.jsx(re,{path:"/beginner",element:u.jsx(iR,{})}),u.jsx(re,{path:"/intermediate",element:u.jsx(cR,{})}),u.jsx(re,{path:"/advanced",element:u.jsx(uR,{})}),u.jsx(re,{path:"/book-display",element:u.jsx(Tw,{})}),u.jsx(re,{path:"/books/level/a1-a2",element:u.jsx(s3,{})}),u.jsx(re,{path:"/books/level/a2-b1",element:u.jsx(y0,{})}),u.jsx(re,{path:"/books/level/b1-b2",element:u.jsx(u3,{})}),u.jsxs(re,{element:u.jsx(fF,{}),children:[u.jsx(re,{path:"/dictionary",element:u.jsx(bw,{})}),u.jsx(re,{path:"/reading-zone/french-easy-reading",element:u.jsx(y0,{})}),u.jsx(re,{path:"/reading-zone/french-easy-reading/:bookId",element:u.jsx(x3,{})}),u.jsx(re,{path:"/grammar",element:u.jsx(QN,{})}),u.jsx(re,{path:"/grammar/basic-grammar-lessons",element:u.jsx(H4,{})}),u.jsx(re,{path:"/grammar/:aspect",element:u.jsx(rF,{})}),u.jsx(re,{path:"/grammar-basic/:BasicGrammerTopicId",element:u.jsx(Q4,{})}),u.jsx(re,{path:"/grammar-topics/:TopicId",element:u.jsx(eF,{})}),u.jsx(re,{path:"/vocabulary",element:u.jsx(KN,{})}),u.jsx(re,{path:"/vocabulary/vocabulary-topics",element:u.jsx(zz,{})}),u.jsx(re,{path:"/vocabulary-topics/:topicId",element:u.jsx(xz,{})}),u.jsx(re,{path:"/vocabulary/exercise-article",element:u.jsx(Pw,{})}),u.jsx(re,{path:"/vocabulary/verb-tense-exercise",element:u.jsx(Sw,{})}),u.jsx(re,{path:"/vocabulary/Flashcards",element:u.jsx(SN,{})}),u.jsx(re,{path:"/vocabulary-topics/exercise-quiz",element:u.jsx(Ow,{})}),u.jsx(re,{path:"/vocabulary/favorite-words",element:u.jsx(Az,{})}),u.jsx(re,{path:"/vocabulary/sentence-builder",element:u.jsx(bh,{})}),u.jsx(re,{path:"/games",element:u.jsx(_N,{})}),u.jsx(re,{path:"/Content-Coming-Soon",element:u.jsx(WN,{})}),u.jsx(re,{path:"/verbs/:verb",element:u.jsx(Hw,{})})]}),u.jsx(re,{path:"/dialogue-topics",element:u.jsx(Xz,{})}),u.jsx(re,{path:"/dialogue-topics/:dialogueTopicId",element:u.jsx(x4,{})}),u.jsx(re,{path:"/quiz-pictures",element:u.jsx(cw,{})})]})]})})}const yF=g.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  margin: 0 auto;
  width: 100%;
  outline: 1px solid blue;
`,ld=ke("allWordsFromDictionary/fetchDictionary",async()=>{try{return(await Ce.get("/words")).data}catch(e){throw console.log(e),Error("Failed to fetch dictionay")}}),vF={dictionary:[],isLoading:!1,error:null},xF=qe({name:"allWordsFromDictionary",initialState:vF,reducers:{},extraReducers:e=>{e.addCase(ld.pending,t=>{t.isLoading=!0}).addCase(ld.fulfilled,(t,n)=>{t.dictionary=n.payload,t.isLoading=!1}).addCase(ld.rejected,(t,n)=>{t.error=n.error.message})}}),wF=xF.reducer,bF=uj({reducer:{dialogues:F$,dialogueExercises:j$,sentenceBuilder:G$,newPhrases:H$,grammer:Z$,vocabularyTopics:WE,books:BE,dialogueTopics:Hz,dictionary:VL,allWordsFromDictionary:wF,isFavorite:JL,quizData:yL,presentTense:CP,sentences:FP,grammer:F4,flashcards:rP,verbTenses:M4}}),SF={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console&&console[e]&&console[e].apply(console,t)}};class Nl{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,n)}init(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=t||SF,this.options=n,this.debug=n.debug}log(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"log","",!0)}warn(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"warn","",!0)}error(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"error","")}deprecate(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(t,n,r,i){return i&&!this.debug?null:(typeof t[0]=="string"&&(t[0]=`${r}${this.prefix} ${t[0]}`),this.logger[n](t))}create(t){return new Nl(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new Nl(this.logger,t)}}var on=new Nl;class Uc{constructor(){this.observers={}}on(t,n){return t.split(" ").forEach(r=>{this.observers[r]=this.observers[r]||[],this.observers[r].push(n)}),this}off(t,n){if(this.observers[t]){if(!n){delete this.observers[t];return}this.observers[t]=this.observers[t].filter(r=>r!==n)}}emit(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];this.observers[t]&&[].concat(this.observers[t]).forEach(s=>{s(...r)}),this.observers["*"]&&[].concat(this.observers["*"]).forEach(s=>{s.apply(s,[t,...r])})}}function bo(){let e,t;const n=new Promise((r,i)=>{e=r,t=i});return n.resolve=e,n.reject=t,n}function $0(e){return e==null?"":""+e}function kF(e,t,n){e.forEach(r=>{t[r]&&(n[r]=t[r])})}function Lh(e,t,n){function r(s){return s&&s.indexOf("###")>-1?s.replace(/###/g,"."):s}function i(){return!e||typeof e=="string"}const o=typeof t!="string"?[].concat(t):t.split(".");for(;o.length>1;){if(i())return{};const s=r(o.shift());!e[s]&&n&&(e[s]=new n),Object.prototype.hasOwnProperty.call(e,s)?e=e[s]:e={}}return i()?{}:{obj:e,k:r(o.shift())}}function R0(e,t,n){const{obj:r,k:i}=Lh(e,t,Object);r[i]=n}function CF(e,t,n,r){const{obj:i,k:o}=Lh(e,t,Object);i[o]=i[o]||[],r&&(i[o]=i[o].concat(n)),r||i[o].push(n)}function Fl(e,t){const{obj:n,k:r}=Lh(e,t);if(n)return n[r]}function AF(e,t,n){const r=Fl(e,n);return r!==void 0?r:Fl(t,n)}function cb(e,t,n){for(const r in t)r!=="__proto__"&&r!=="constructor"&&(r in e?typeof e[r]=="string"||e[r]instanceof String||typeof t[r]=="string"||t[r]instanceof String?n&&(e[r]=t[r]):cb(e[r],t[r],n):e[r]=t[r]);return e}function Gr(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var jF={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function EF(e){return typeof e=="string"?e.replace(/[&<>"'\/]/g,t=>jF[t]):e}const TF=[" ",",","?","!",";"];function OF(e,t,n){t=t||"",n=n||"";const r=TF.filter(s=>t.indexOf(s)<0&&n.indexOf(s)<0);if(r.length===0)return!0;const i=new RegExp(`(${r.map(s=>s==="?"?"\\?":s).join("|")})`);let o=!i.test(e);if(!o){const s=e.indexOf(n);s>0&&!i.test(e.substring(0,s))&&(o=!0)}return o}function Dl(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!e)return;if(e[t])return e[t];const r=t.split(n);let i=e;for(let o=0;o<r.length;++o){if(!i||typeof i[r[o]]=="string"&&o+1<r.length)return;if(i[r[o]]===void 0){let s=2,a=r.slice(o,o+s).join(n),l=i[a];for(;l===void 0&&r.length>o+s;)s++,a=r.slice(o,o+s).join(n),l=i[a];if(l===void 0)return;if(l===null)return null;if(t.endsWith(a)){if(typeof l=="string")return l;if(a&&typeof l[a]=="string")return l[a]}const c=r.slice(o+s).join(n);return c?Dl(l,c,n):void 0}i=i[r[o]]}return i}function Il(e){return e&&e.indexOf("_")>0?e.replace("_","-"):e}class z0 extends Uc{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const n=this.options.ns.indexOf(t);n>-1&&this.options.ns.splice(n,1)}getResource(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const o=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,s=i.ignoreJSONStructure!==void 0?i.ignoreJSONStructure:this.options.ignoreJSONStructure;let a=[t,n];r&&typeof r!="string"&&(a=a.concat(r)),r&&typeof r=="string"&&(a=a.concat(o?r.split(o):r)),t.indexOf(".")>-1&&(a=t.split("."));const l=Fl(this.data,a);return l||!s||typeof r!="string"?l:Dl(this.data&&this.data[t]&&this.data[t][n],r,o)}addResource(t,n,r,i){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const s=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator;let a=[t,n];r&&(a=a.concat(s?r.split(s):r)),t.indexOf(".")>-1&&(a=t.split("."),i=n,n=a[1]),this.addNamespaces(n),R0(this.data,a,i),o.silent||this.emit("added",t,n,r,i)}addResources(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const o in r)(typeof r[o]=="string"||Object.prototype.toString.apply(r[o])==="[object Array]")&&this.addResource(t,n,o,r[o],{silent:!0});i.silent||this.emit("added",t,n,r)}addResourceBundle(t,n,r,i,o){let s=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1},a=[t,n];t.indexOf(".")>-1&&(a=t.split("."),i=r,r=n,n=a[1]),this.addNamespaces(n);let l=Fl(this.data,a)||{};i?cb(l,r,o):l={...l,...r},R0(this.data,a,l),s.silent||this.emit("added",t,n,r)}removeResourceBundle(t,n){this.hasResourceBundle(t,n)&&delete this.data[t][n],this.removeNamespaces(n),this.emit("removed",t,n)}hasResourceBundle(t,n){return this.getResource(t,n)!==void 0}getResourceBundle(t,n){return n||(n=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(t,n)}:this.getResource(t,n)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const n=this.getDataByLanguage(t);return!!(n&&Object.keys(n)||[]).find(i=>n[i]&&Object.keys(n[i]).length>0)}toJSON(){return this.data}}var ub={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,i){return e.forEach(o=>{this.processors[o]&&(t=this.processors[o].process(t,n,r,i))}),t}};const N0={};class Bl extends Uc{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),kF(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=on.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const r=this.resolve(t,n);return r&&r.res!==void 0}extractFromKey(t,n){let r=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;r===void 0&&(r=":");const i=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let o=n.ns||this.options.defaultNS||[];const s=r&&t.indexOf(r)>-1,a=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!OF(t,r,i);if(s&&!a){const l=t.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:t,namespaces:o};const c=t.split(r);(r!==i||r===i&&this.options.ns.indexOf(c[0])>-1)&&(o=c.shift()),t=c.join(i)}return typeof o=="string"&&(o=[o]),{key:t,namespaces:o}}translate(t,n,r){if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const i=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,o=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:s,namespaces:a}=this.extractFromKey(t[t.length-1],n),l=a[a.length-1],c=n.lng||this.language,d=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&c.toLowerCase()==="cimode"){if(d){const C=n.nsSeparator||this.options.nsSeparator;return i?{res:`${l}${C}${s}`,usedKey:s,exactUsedKey:s,usedLng:c,usedNS:l}:`${l}${C}${s}`}return i?{res:s,usedKey:s,exactUsedKey:s,usedLng:c,usedNS:l}:s}const f=this.resolve(t,n);let p=f&&f.res;const y=f&&f.usedKey||s,v=f&&f.exactUsedKey||s,x=Object.prototype.toString.apply(p),k=["[object Number]","[object Function]","[object RegExp]"],m=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,h=!this.i18nFormat||this.i18nFormat.handleAsObject;if(h&&p&&(typeof p!="string"&&typeof p!="boolean"&&typeof p!="number")&&k.indexOf(x)<0&&!(typeof m=="string"&&x==="[object Array]")){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const C=this.options.returnedObjectHandler?this.options.returnedObjectHandler(y,p,{...n,ns:a}):`key '${s} (${this.language})' returned an object instead of string.`;return i?(f.res=C,f):C}if(o){const C=x==="[object Array]",A=C?[]:{},b=C?v:y;for(const j in p)if(Object.prototype.hasOwnProperty.call(p,j)){const E=`${b}${o}${j}`;A[j]=this.translate(E,{...n,joinArrays:!1,ns:a}),A[j]===E&&(A[j]=p[j])}p=A}}else if(h&&typeof m=="string"&&x==="[object Array]")p=p.join(m),p&&(p=this.extendTranslation(p,t,n,r));else{let C=!1,A=!1;const b=n.count!==void 0&&typeof n.count!="string",j=Bl.hasDefaultValue(n),E=b?this.pluralResolver.getSuffix(c,n.count,n):"",T=n.ordinal&&b?this.pluralResolver.getSuffix(c,n.count,{ordinal:!1}):"",O=n[`defaultValue${E}`]||n[`defaultValue${T}`]||n.defaultValue;!this.isValidLookup(p)&&j&&(C=!0,p=O),this.isValidLookup(p)||(A=!0,p=s);const P=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&A?void 0:p,$=j&&O!==p&&this.options.updateMissing;if(A||C||$){if(this.logger.log($?"updateKey":"missingKey",c,l,s,$?O:p),o){const Q=this.resolve(s,{...n,keySeparator:!1});Q&&Q.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let z=[];const D=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&D&&D[0])for(let Q=0;Q<D.length;Q++)z.push(D[Q]);else this.options.saveMissingTo==="all"?z=this.languageUtils.toResolveHierarchy(n.lng||this.language):z.push(n.lng||this.language);const V=(Q,N,I)=>{const W=j&&I!==p?I:P;this.options.missingKeyHandler?this.options.missingKeyHandler(Q,l,N,W,$,n):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(Q,l,N,W,$,n),this.emit("missingKey",Q,l,N,p)};this.options.saveMissing&&(this.options.saveMissingPlurals&&b?z.forEach(Q=>{this.pluralResolver.getSuffixes(Q,n).forEach(N=>{V([Q],s+N,n[`defaultValue${N}`]||O)})}):V(z,s,O))}p=this.extendTranslation(p,t,n,f,r),A&&p===s&&this.options.appendNamespaceToMissingKey&&(p=`${l}:${s}`),(A||C)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?p=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${s}`:s,C?p:void 0):p=this.options.parseMissingKeyHandler(p))}return i?(f.res=p,f):p}extendTranslation(t,n,r,i,o){var s=this;if(this.i18nFormat&&this.i18nFormat.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...r},i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init({...r,interpolation:{...this.options.interpolation,...r.interpolation}});const c=typeof t=="string"&&(r&&r.interpolation&&r.interpolation.skipOnVariables!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let d;if(c){const p=t.match(this.interpolator.nestingRegexp);d=p&&p.length}let f=r.replace&&typeof r.replace!="string"?r.replace:r;if(this.options.interpolation.defaultVariables&&(f={...this.options.interpolation.defaultVariables,...f}),t=this.interpolator.interpolate(t,f,r.lng||this.language,r),c){const p=t.match(this.interpolator.nestingRegexp),y=p&&p.length;d<y&&(r.nest=!1)}!r.lng&&this.options.compatibilityAPI!=="v1"&&i&&i.res&&(r.lng=i.usedLng),r.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var p=arguments.length,y=new Array(p),v=0;v<p;v++)y[v]=arguments[v];return o&&o[0]===y[0]&&!r.context?(s.logger.warn(`It seems you are nesting recursively key: ${y[0]} in key: ${n[0]}`),null):s.translate(...y,n)},r)),r.interpolation&&this.interpolator.reset()}const a=r.postProcess||this.options.postProcess,l=typeof a=="string"?[a]:a;return t!=null&&l&&l.length&&r.applyPostProcessor!==!1&&(t=ub.handle(l,t,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:i,...r}:r,this)),t}resolve(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r,i,o,s,a;return typeof t=="string"&&(t=[t]),t.forEach(l=>{if(this.isValidLookup(r))return;const c=this.extractFromKey(l,n),d=c.key;i=d;let f=c.namespaces;this.options.fallbackNS&&(f=f.concat(this.options.fallbackNS));const p=n.count!==void 0&&typeof n.count!="string",y=p&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),v=n.context!==void 0&&(typeof n.context=="string"||typeof n.context=="number")&&n.context!=="",x=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);f.forEach(k=>{this.isValidLookup(r)||(a=k,!N0[`${x[0]}-${k}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&(N0[`${x[0]}-${k}`]=!0,this.logger.warn(`key "${i}" for languages "${x.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),x.forEach(m=>{if(this.isValidLookup(r))return;s=m;const h=[d];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(h,d,m,k,n);else{let C;p&&(C=this.pluralResolver.getSuffix(m,n.count,n));const A=`${this.options.pluralSeparator}zero`,b=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(p&&(h.push(d+C),n.ordinal&&C.indexOf(b)===0&&h.push(d+C.replace(b,this.options.pluralSeparator)),y&&h.push(d+A)),v){const j=`${d}${this.options.contextSeparator}${n.context}`;h.push(j),p&&(h.push(j+C),n.ordinal&&C.indexOf(b)===0&&h.push(j+C.replace(b,this.options.pluralSeparator)),y&&h.push(j+A))}}let w;for(;w=h.pop();)this.isValidLookup(r)||(o=w,r=this.getResource(m,k,w,n))}))})}),{res:r,usedKey:i,exactUsedKey:o,usedLng:s,usedNS:a}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(t,n,r,i):this.resourceStore.getResource(t,n,r,i)}static hasDefaultValue(t){const n="defaultValue";for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&n===r.substring(0,n.length)&&t[r]!==void 0)return!0;return!1}}function cd(e){return e.charAt(0).toUpperCase()+e.slice(1)}class F0{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=on.create("languageUtils")}getScriptPartFromCode(t){if(t=Il(t),!t||t.indexOf("-")<0)return null;const n=t.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(t){if(t=Il(t),!t||t.indexOf("-")<0)return t;const n=t.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(t){if(typeof t=="string"&&t.indexOf("-")>-1){const n=["hans","hant","latn","cyrl","cans","mong","arab"];let r=t.split("-");return this.options.lowerCaseLng?r=r.map(i=>i.toLowerCase()):r.length===2?(r[0]=r[0].toLowerCase(),r[1]=r[1].toUpperCase(),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=cd(r[1].toLowerCase()))):r.length===3&&(r[0]=r[0].toLowerCase(),r[1].length===2&&(r[1]=r[1].toUpperCase()),r[0]!=="sgn"&&r[2].length===2&&(r[2]=r[2].toUpperCase()),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=cd(r[1].toLowerCase())),n.indexOf(r[2].toLowerCase())>-1&&(r[2]=cd(r[2].toLowerCase()))),r.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let n;return t.forEach(r=>{if(n)return;const i=this.formatLanguageCode(r);(!this.options.supportedLngs||this.isSupportedCode(i))&&(n=i)}),!n&&this.options.supportedLngs&&t.forEach(r=>{if(n)return;const i=this.getLanguagePartFromCode(r);if(this.isSupportedCode(i))return n=i;n=this.options.supportedLngs.find(o=>{if(o===i)return o;if(!(o.indexOf("-")<0&&i.indexOf("-")<0)&&o.indexOf(i)===0)return o})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(t,n){if(!t)return[];if(typeof t=="function"&&(t=t(n)),typeof t=="string"&&(t=[t]),Object.prototype.toString.apply(t)==="[object Array]")return t;if(!n)return t.default||[];let r=t[n];return r||(r=t[this.getScriptPartFromCode(n)]),r||(r=t[this.formatLanguageCode(n)]),r||(r=t[this.getLanguagePartFromCode(n)]),r||(r=t.default),r||[]}toResolveHierarchy(t,n){const r=this.getFallbackCodes(n||this.options.fallbackLng||[],t),i=[],o=s=>{s&&(this.isSupportedCode(s)?i.push(s):this.logger.warn(`rejecting language code not found in supportedLngs: ${s}`))};return typeof t=="string"&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&o(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&o(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&o(this.getLanguagePartFromCode(t))):typeof t=="string"&&o(this.formatLanguageCode(t)),r.forEach(s=>{i.indexOf(s)<0&&o(this.formatLanguageCode(s))}),i}}let LF=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],PF={1:function(e){return+(e>1)},2:function(e){return+(e!=1)},3:function(e){return 0},4:function(e){return e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},5:function(e){return e==0?0:e==1?1:e==2?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5},6:function(e){return e==1?0:e>=2&&e<=4?1:2},7:function(e){return e==1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},8:function(e){return e==1?0:e==2?1:e!=8&&e!=11?2:3},9:function(e){return+(e>=2)},10:function(e){return e==1?0:e==2?1:e<7?2:e<11?3:4},11:function(e){return e==1||e==11?0:e==2||e==12?1:e>2&&e<20?2:3},12:function(e){return+(e%10!=1||e%100==11)},13:function(e){return+(e!==0)},14:function(e){return e==1?0:e==2?1:e==3?2:3},15:function(e){return e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2},16:function(e){return e%10==1&&e%100!=11?0:e!==0?1:2},17:function(e){return e==1||e%10==1&&e%100!=11?0:1},18:function(e){return e==0?0:e==1?1:2},19:function(e){return e==1?0:e==0||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3},20:function(e){return e==1?0:e==0||e%100>0&&e%100<20?1:2},21:function(e){return e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0},22:function(e){return e==1?0:e==2?1:(e<0||e>10)&&e%10==0?2:3}};const $F=["v1","v2","v3"],RF=["v4"],D0={zero:0,one:1,two:2,few:3,many:4,other:5};function zF(){const e={};return LF.forEach(t=>{t.lngs.forEach(n=>{e[n]={numbers:t.nr,plurals:PF[t.fc]}})}),e}class NF{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=n,this.logger=on.create("pluralResolver"),(!this.options.compatibilityJSON||RF.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=zF()}addRule(t,n){this.rules[t]=n}getRule(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(Il(t),{type:n.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]}needsPlural(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(t,n);return this.shouldUseIntlApi()?r&&r.resolvedOptions().pluralCategories.length>1:r&&r.numbers.length>1}getPluralFormsOfKey(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,r).map(i=>`${n}${i}`)}getSuffixes(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(t,n);return r?this.shouldUseIntlApi()?r.resolvedOptions().pluralCategories.sort((i,o)=>D0[i]-D0[o]).map(i=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${i}`):r.numbers.map(i=>this.getSuffix(t,i,n)):[]}getSuffix(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const i=this.getRule(t,r);return i?this.shouldUseIntlApi()?`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${i.select(n)}`:this.getSuffixRetroCompatible(i,n):(this.logger.warn(`no plural rule found for: ${t}`),"")}getSuffixRetroCompatible(t,n){const r=t.noAbs?t.plurals(n):t.plurals(Math.abs(n));let i=t.numbers[r];this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1&&(i===2?i="plural":i===1&&(i=""));const o=()=>this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString();return this.options.compatibilityJSON==="v1"?i===1?"":typeof i=="number"?`_plural_${i.toString()}`:o():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1?o():this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString()}shouldUseIntlApi(){return!$F.includes(this.options.compatibilityJSON)}}function I0(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,o=AF(e,t,n);return!o&&i&&typeof n=="string"&&(o=Dl(e,n,r),o===void 0&&(o=Dl(t,n,r))),o}class FF{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=on.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||(n=>n),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const n=t.interpolation;this.escape=n.escape!==void 0?n.escape:EF,this.escapeValue=n.escapeValue!==void 0?n.escapeValue:!0,this.useRawValueToEscape=n.useRawValueToEscape!==void 0?n.useRawValueToEscape:!1,this.prefix=n.prefix?Gr(n.prefix):n.prefixEscaped||"{{",this.suffix=n.suffix?Gr(n.suffix):n.suffixEscaped||"}}",this.formatSeparator=n.formatSeparator?n.formatSeparator:n.formatSeparator||",",this.unescapePrefix=n.unescapeSuffix?"":n.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":n.unescapeSuffix||"",this.nestingPrefix=n.nestingPrefix?Gr(n.nestingPrefix):n.nestingPrefixEscaped||Gr("$t("),this.nestingSuffix=n.nestingSuffix?Gr(n.nestingSuffix):n.nestingSuffixEscaped||Gr(")"),this.nestingOptionsSeparator=n.nestingOptionsSeparator?n.nestingOptionsSeparator:n.nestingOptionsSeparator||",",this.maxReplaces=n.maxReplaces?n.maxReplaces:1e3,this.alwaysFormat=n.alwaysFormat!==void 0?n.alwaysFormat:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=`${this.prefix}(.+?)${this.suffix}`;this.regexp=new RegExp(t,"g");const n=`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;this.regexpUnescape=new RegExp(n,"g");const r=`${this.nestingPrefix}(.+?)${this.nestingSuffix}`;this.nestingRegexp=new RegExp(r,"g")}interpolate(t,n,r,i){let o,s,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function c(v){return v.replace(/\$/g,"$$$$")}const d=v=>{if(v.indexOf(this.formatSeparator)<0){const h=I0(n,l,v,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(h,void 0,r,{...i,...n,interpolationkey:v}):h}const x=v.split(this.formatSeparator),k=x.shift().trim(),m=x.join(this.formatSeparator).trim();return this.format(I0(n,l,k,this.options.keySeparator,this.options.ignoreJSONStructure),m,r,{...i,...n,interpolationkey:k})};this.resetRegExp();const f=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,p=i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:v=>c(v)},{regex:this.regexp,safeValue:v=>this.escapeValue?c(this.escape(v)):c(v)}].forEach(v=>{for(a=0;o=v.regex.exec(t);){const x=o[1].trim();if(s=d(x),s===void 0)if(typeof f=="function"){const m=f(t,o,i);s=typeof m=="string"?m:""}else if(i&&Object.prototype.hasOwnProperty.call(i,x))s="";else if(p){s=o[0];continue}else this.logger.warn(`missed to pass in variable ${x} for interpolating ${t}`),s="";else typeof s!="string"&&!this.useRawValueToEscape&&(s=$0(s));const k=v.safeValue(s);if(t=t.replace(o[0],k),p?(v.regex.lastIndex+=s.length,v.regex.lastIndex-=o[0].length):v.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),t}nest(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i,o,s;function a(l,c){const d=this.nestingOptionsSeparator;if(l.indexOf(d)<0)return l;const f=l.split(new RegExp(`${d}[ ]*{`));let p=`{${f[1]}`;l=f[0],p=this.interpolate(p,s);const y=p.match(/'/g),v=p.match(/"/g);(y&&y.length%2===0&&!v||v.length%2!==0)&&(p=p.replace(/'/g,'"'));try{s=JSON.parse(p),c&&(s={...c,...s})}catch(x){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,x),`${l}${d}${p}`}return delete s.defaultValue,l}for(;i=this.nestingRegexp.exec(t);){let l=[];s={...r},s=s.replace&&typeof s.replace!="string"?s.replace:s,s.applyPostProcessor=!1,delete s.defaultValue;let c=!1;if(i[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(i[1])){const d=i[1].split(this.formatSeparator).map(f=>f.trim());i[1]=d.shift(),l=d,c=!0}if(o=n(a.call(this,i[1].trim(),s),s),o&&i[0]===t&&typeof o!="string")return o;typeof o!="string"&&(o=$0(o)),o||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`),o=""),c&&(o=l.reduce((d,f)=>this.format(d,f,r.lng,{...r,interpolationkey:i[1].trim()}),o.trim())),t=t.replace(i[0],o),this.regexp.lastIndex=0}return t}}function DF(e){let t=e.toLowerCase().trim();const n={};if(e.indexOf("(")>-1){const r=e.split("(");t=r[0].toLowerCase().trim();const i=r[1].substring(0,r[1].length-1);t==="currency"&&i.indexOf(":")<0?n.currency||(n.currency=i.trim()):t==="relativetime"&&i.indexOf(":")<0?n.range||(n.range=i.trim()):i.split(";").forEach(s=>{if(!s)return;const[a,...l]=s.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,"");n[a.trim()]||(n[a.trim()]=c),c==="false"&&(n[a.trim()]=!1),c==="true"&&(n[a.trim()]=!0),isNaN(c)||(n[a.trim()]=parseInt(c,10))})}return{formatName:t,formatOptions:n}}function Kr(e){const t={};return function(r,i,o){const s=i+JSON.stringify(o);let a=t[s];return a||(a=e(Il(i),o),t[s]=a),a(r)}}class IF{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=on.create("formatter"),this.options=t,this.formats={number:Kr((n,r)=>{const i=new Intl.NumberFormat(n,{...r});return o=>i.format(o)}),currency:Kr((n,r)=>{const i=new Intl.NumberFormat(n,{...r,style:"currency"});return o=>i.format(o)}),datetime:Kr((n,r)=>{const i=new Intl.DateTimeFormat(n,{...r});return o=>i.format(o)}),relativetime:Kr((n,r)=>{const i=new Intl.RelativeTimeFormat(n,{...r});return o=>i.format(o,r.range||"day")}),list:Kr((n,r)=>{const i=new Intl.ListFormat(n,{...r});return o=>i.format(o)})},this.init(t)}init(t){const r=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}}).interpolation;this.formatSeparator=r.formatSeparator?r.formatSeparator:r.formatSeparator||","}add(t,n){this.formats[t.toLowerCase().trim()]=n}addCached(t,n){this.formats[t.toLowerCase().trim()]=Kr(n)}format(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return n.split(this.formatSeparator).reduce((a,l)=>{const{formatName:c,formatOptions:d}=DF(l);if(this.formats[c]){let f=a;try{const p=i&&i.formatParams&&i.formatParams[i.interpolationkey]||{},y=p.locale||p.lng||i.locale||i.lng||r;f=this.formats[c](a,y,{...d,...i,...p})}catch(p){this.logger.warn(p)}return f}else this.logger.warn(`there was no format function for ${c}`);return a},t)}}function BF(e,t){e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)}class _F extends Uc{constructor(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=n,this.services=r,this.languageUtils=r.languageUtils,this.options=i,this.logger=on.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=i.maxParallelReads||10,this.readingCalls=0,this.maxRetries=i.maxRetries>=0?i.maxRetries:5,this.retryTimeout=i.retryTimeout>=1?i.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(r,i.backend,i)}queueLoad(t,n,r,i){const o={},s={},a={},l={};return t.forEach(c=>{let d=!0;n.forEach(f=>{const p=`${c}|${f}`;!r.reload&&this.store.hasResourceBundle(c,f)?this.state[p]=2:this.state[p]<0||(this.state[p]===1?s[p]===void 0&&(s[p]=!0):(this.state[p]=1,d=!1,s[p]===void 0&&(s[p]=!0),o[p]===void 0&&(o[p]=!0),l[f]===void 0&&(l[f]=!0)))}),d||(a[c]=!0)}),(Object.keys(o).length||Object.keys(s).length)&&this.queue.push({pending:s,pendingCount:Object.keys(s).length,loaded:{},errors:[],callback:i}),{toLoad:Object.keys(o),pending:Object.keys(s),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(t,n,r){const i=t.split("|"),o=i[0],s=i[1];n&&this.emit("failedLoading",o,s,n),r&&this.store.addResourceBundle(o,s,r),this.state[t]=n?-1:2;const a={};this.queue.forEach(l=>{CF(l.loaded,[o],s),BF(l,t),n&&l.errors.push(n),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{a[c]||(a[c]={});const d=l.loaded[c];d.length&&d.forEach(f=>{a[c][f]===void 0&&(a[c][f]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,s=arguments.length>5?arguments[5]:void 0;if(!t.length)return s(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:n,fcName:r,tried:i,wait:o,callback:s});return}this.readingCalls++;const a=(c,d)=>{if(this.readingCalls--,this.waitingReads.length>0){const f=this.waitingReads.shift();this.read(f.lng,f.ns,f.fcName,f.tried,f.wait,f.callback)}if(c&&d&&i<this.maxRetries){setTimeout(()=>{this.read.call(this,t,n,r,i+1,o*2,s)},o);return}s(c,d)},l=this.backend[r].bind(this.backend);if(l.length===2){try{const c=l(t,n);c&&typeof c.then=="function"?c.then(d=>a(null,d)).catch(a):a(null,c)}catch(c){a(c)}return}return l(t,n,a)}prepareLoading(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();typeof t=="string"&&(t=this.languageUtils.toResolveHierarchy(t)),typeof n=="string"&&(n=[n]);const o=this.queueLoad(t,n,r,i);if(!o.toLoad.length)return o.pending.length||i(),null;o.toLoad.forEach(s=>{this.loadOne(s)})}load(t,n,r){this.prepareLoading(t,n,{},r)}reload(t,n,r){this.prepareLoading(t,n,{reload:!0},r)}loadOne(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const r=t.split("|"),i=r[0],o=r[1];this.read(i,o,"read",void 0,void 0,(s,a)=>{s&&this.logger.warn(`${n}loading namespace ${o} for language ${i} failed`,s),!s&&a&&this.logger.log(`${n}loaded namespace ${o} for language ${i}`,a),this.loaded(t,s,a)})}saveMissing(t,n,r,i,o){let s=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(n)){this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(r==null||r==="")){if(this.backend&&this.backend.create){const l={...s,isUpdate:o},c=this.backend.create.bind(this.backend);if(c.length<6)try{let d;c.length===5?d=c(t,n,r,i,l):d=c(t,n,r,i),d&&typeof d.then=="function"?d.then(f=>a(null,f)).catch(a):a(null,d)}catch(d){a(d)}else c(t,n,r,i,a,l)}!t||!t[0]||this.store.addResource(t[0],n,r,i)}}}function B0(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){let n={};if(typeof t[1]=="object"&&(n=t[1]),typeof t[1]=="string"&&(n.defaultValue=t[1]),typeof t[2]=="string"&&(n.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const r=t[3]||t[2];Object.keys(r).forEach(i=>{n[i]=r[i]})}return n},interpolation:{escapeValue:!0,format:(e,t,n,r)=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function _0(e){return typeof e.ns=="string"&&(e.ns=[e.ns]),typeof e.fallbackLng=="string"&&(e.fallbackLng=[e.fallbackLng]),typeof e.fallbackNS=="string"&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function oa(){}function MF(e){Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(n=>{typeof e[n]=="function"&&(e[n]=e[n].bind(e))})}class gs extends Uc{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=_0(t),this.services={},this.logger=on,this.modules={external:[]},MF(this),n&&!this.isInitialized&&!t.isClone){if(!this.options.initImmediate)return this.init(t,n),this;setTimeout(()=>{this.init(t,n)},0)}}init(){var t=this;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;typeof n=="function"&&(r=n,n={}),!n.defaultNS&&n.defaultNS!==!1&&n.ns&&(typeof n.ns=="string"?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const i=B0();this.options={...i,...this.options,..._0(n)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...i.interpolation,...this.options.interpolation}),n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator);function o(d){return d?typeof d=="function"?new d:d:null}if(!this.options.isClone){this.modules.logger?on.init(o(this.modules.logger),this.options):on.init(null,this.options);let d;this.modules.formatter?d=this.modules.formatter:typeof Intl<"u"&&(d=IF);const f=new F0(this.options);this.store=new z0(this.options.resources,this.options);const p=this.services;p.logger=on,p.resourceStore=this.store,p.languageUtils=f,p.pluralResolver=new NF(f,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),d&&(!this.options.interpolation.format||this.options.interpolation.format===i.interpolation.format)&&(p.formatter=o(d),p.formatter.init(p,this.options),this.options.interpolation.format=p.formatter.format.bind(p.formatter)),p.interpolator=new FF(this.options),p.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},p.backendConnector=new _F(o(this.modules.backend),p.resourceStore,p,this.options),p.backendConnector.on("*",function(y){for(var v=arguments.length,x=new Array(v>1?v-1:0),k=1;k<v;k++)x[k-1]=arguments[k];t.emit(y,...x)}),this.modules.languageDetector&&(p.languageDetector=o(this.modules.languageDetector),p.languageDetector.init&&p.languageDetector.init(p,this.options.detection,this.options)),this.modules.i18nFormat&&(p.i18nFormat=o(this.modules.i18nFormat),p.i18nFormat.init&&p.i18nFormat.init(this)),this.translator=new Bl(this.services,this.options),this.translator.on("*",function(y){for(var v=arguments.length,x=new Array(v>1?v-1:0),k=1;k<v;k++)x[k-1]=arguments[k];t.emit(y,...x)}),this.modules.external.forEach(y=>{y.init&&y.init(this)})}if(this.format=this.options.interpolation.format,r||(r=oa),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const d=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);d.length>0&&d[0]!=="dev"&&(this.options.lng=d[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(d=>{this[d]=function(){return t.store[d](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(d=>{this[d]=function(){return t.store[d](...arguments),t}});const l=bo(),c=()=>{const d=(f,p)=>{this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(p),r(f,p)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return d(null,this.t.bind(this));this.changeLanguage(this.options.lng,d)};return this.options.resources||!this.options.initImmediate?c():setTimeout(c,0),l}loadResources(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:oa;const i=typeof t=="string"?t:this.language;if(typeof t=="function"&&(r=t),!this.options.resources||this.options.partialBundledLanguages){if(i&&i.toLowerCase()==="cimode")return r();const o=[],s=a=>{if(!a)return;this.services.languageUtils.toResolveHierarchy(a).forEach(c=>{o.indexOf(c)<0&&o.push(c)})};i?s(i):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>s(l)),this.options.preload&&this.options.preload.forEach(a=>s(a)),this.services.backendConnector.load(o,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),r(a)})}else r(null)}reloadResources(t,n,r){const i=bo();return t||(t=this.languages),n||(n=this.options.ns),r||(r=oa),this.services.backendConnector.reload(t,n,o=>{i.resolve(),r(o)}),i}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&ub.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let n=0;n<this.languages.length;n++){const r=this.languages[n];if(!(["cimode","dev"].indexOf(r)>-1)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}}changeLanguage(t,n){var r=this;this.isLanguageChangingTo=t;const i=bo();this.emit("languageChanging",t);const o=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},s=(l,c)=>{c?(o(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,i.resolve(function(){return r.t(...arguments)}),n&&n(l,function(){return r.t(...arguments)})},a=l=>{!t&&!l&&this.services.languageDetector&&(l=[]);const c=typeof l=="string"?l:this.services.languageUtils.getBestMatchFromCodes(l);c&&(this.language||o(c),this.translator.language||this.translator.changeLanguage(c),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(c)),this.loadResources(c,d=>{s(d,c)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(t),i}getFixedT(t,n,r){var i=this;const o=function(s,a){let l;if(typeof a!="object"){for(var c=arguments.length,d=new Array(c>2?c-2:0),f=2;f<c;f++)d[f-2]=arguments[f];l=i.options.overloadTranslationOptionHandler([s,a].concat(d))}else l={...a};l.lng=l.lng||o.lng,l.lngs=l.lngs||o.lngs,l.ns=l.ns||o.ns,l.keyPrefix=l.keyPrefix||r||o.keyPrefix;const p=i.options.keySeparator||".";let y;return l.keyPrefix&&Array.isArray(s)?y=s.map(v=>`${l.keyPrefix}${p}${v}`):y=l.keyPrefix?`${l.keyPrefix}${p}${s}`:s,i.t(y,l)};return typeof t=="string"?o.lng=t:o.lngs=t,o.ns=n,o.keyPrefix=r,o}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const r=n.lng||this.resolvedLanguage||this.languages[0],i=this.options?this.options.fallbackLng:!1,o=this.languages[this.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const s=(a,l)=>{const c=this.services.backendConnector.state[`${a}|${l}`];return c===-1||c===2};if(n.precheck){const a=n.precheck(this,s);if(a!==void 0)return a}return!!(this.hasResourceBundle(r,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||s(r,t)&&(!i||s(o,t)))}loadNamespaces(t,n){const r=bo();return this.options.ns?(typeof t=="string"&&(t=[t]),t.forEach(i=>{this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}),this.loadResources(i=>{r.resolve(),n&&n(i)}),r):(n&&n(),Promise.resolve())}loadLanguages(t,n){const r=bo();typeof t=="string"&&(t=[t]);const i=this.options.preload||[],o=t.filter(s=>i.indexOf(s)<0);return o.length?(this.options.preload=i.concat(o),this.loadResources(s=>{r.resolve(),n&&n(s)}),r):(n&&n(),Promise.resolve())}dir(t){if(t||(t=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!t)return"rtl";const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],r=this.services&&this.services.languageUtils||new F0(B0());return n.indexOf(r.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new gs(t,n)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:oa;const r=t.forkResourceStore;r&&delete t.forkResourceStore;const i={...this.options,...t,isClone:!0},o=new gs(i);return(t.debug!==void 0||t.prefix!==void 0)&&(o.logger=o.logger.clone(t)),["store","services","language"].forEach(a=>{o[a]=this[a]}),o.services={...this.services},o.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},r&&(o.store=new z0(this.store.data,i),o.services.resourceStore=o.store),o.translator=new Bl(o.services,i),o.translator.on("*",function(a){for(var l=arguments.length,c=new Array(l>1?l-1:0),d=1;d<l;d++)c[d-1]=arguments[d];o.emit(a,...c)}),o.init(i,n),o.translator.options=i,o.translator.backendConnector.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Ge=gs.createInstance();Ge.createInstance=gs.createInstance;Ge.createInstance;Ge.dir;Ge.init;Ge.loadResources;Ge.reloadResources;Ge.use;Ge.changeLanguage;Ge.getFixedT;Ge.t;Ge.exists;Ge.setDefaultNamespace;Ge.hasLoadedNamespace;Ge.loadNamespaces;Ge.loadLanguages;const WF="hello",UF="wellcome",HF="search",VF="login",QF="register",qF="home",GF="books",KF="No",YF="Yes",JF="Next",XF="Finish",ZF="Loading",eD="User Name",tD="Contact",nD="Articles",rD="Vocabulary",iD="Questions",oD="Total",sD="Example",aD="Examples",lD="Score",cD="Close",uD="Restart",dD="Dictionary",fD="Phrases",pD="Play",hD="Learn",mD="Read",gD="Explore",yD="Grammar",vD="All",xD="Next",wD="Submit",bD="Quiz",SD="Text",kD="Continue",CD={Bonjour:WF,Bienvenue:UF,Recherche:HF,Connexion:VF,"Se déconnecter":"logout",Inscription:QF,Accueil:qF,Livres:GF,Leçons:"lesson","Vous avez terminé la leçon":"You have completed the lesson","Voulez-vous recommencer?":"Do you want to start over?",No:KF,Oui:YF,Suivante:JF,"Leçon terminée!":"Lesson Completed!",Finir:XF,"Trois Mousquetaires":"Three Musketeers",Chargement:ZF,"Inscrivez-vous":"Signup now","Mot de passe oublié?":"Forgot Password?","pas de compte?":"not a member?","Mot de passe":"Password",Pseudonyme:eD,"E-mail":"E-mail","Avez-vous déjà un compte?":"Already Have Account?","Film&Musique":"Movie&Music",Contacter:tD,Articles:nD,"Bienvenue à Francophoenix":"Wellcome to Francophoenix","Tous les livres":"All Books","Tout afficher":"See All","Niveau A1":"Level A1","Niveau A2":"Level A2","Niveau B1":"Level B1","Niveau B2":"Level B2","Quantité de mots dans ce sujet":"Number of words in this topic","Les mots":"The words",Vocabulaire:rD,Questions:iD,Total:oD,"Masculin ou Féminin":"Masculine or feminine",Example:sD,Examples:aD,"Testez votre vocabulaire":"Test your vocabulary",Score:lD,"Toutes nos félicitations! Vous avez répondu correctement à tous.":"Congratulations! You have answered all correctly.","Toutes les réponses ne sont pas correctes. Réessayer!":"Not all answers are correct. Try again!",Fermer:cD,Recommencer:uD,"Vocabulaire thématique":"Thematic vocabulary","Lire l'extrait":"Read Extract","Explorez des sujets":"Explore topics",Dictionnaire:dD,"Mots favoris":"Favorite words","Pas de mots favoris":"No favorite words","Des mots":"Words",Expressions:fD,"Des exercices":"Exercises","Afficher toutes les traductions":"Show All Translations","Cacher Toutes les Traductions":"Hide All Translations",Jouer:pD,Apprendre:hD,Lire:mD,Définition:"Definition","Les Temps":"Tenses",Explorer:gD,Grammaire:yD,"Bienvenue dans la section Grammaire":"Welcome to the Grammar Section","Découvrez différents sujets de grammaire pour améliorer vos compétences linguistiques":"Explore various grammar topics to enhance your language skills","Bienvenue dans la section Vocabulaire":"Welcome to the Vocabulary Section","Explorez différents sujets de vocabulaire pour améliorer vos compétences linguistiques":"Explore different vocabulary topics to enhance your language skills","Lisez le texte":"Read the text","Les noms à double genre":"Double gender nouns","Construire la phrase":"Build the Sentence","Qu'est-ce que c'est ?":"What it is?","Nombre de Mots":"Word Count","Choisir le niveau":"Choose Level",Tous:vD,"Afficher tout":"Show All","Aucun mot trouvé":"No word found","Verbes utilisés dans le texte":"Verbes used in the text",Suivant:xD,Réessayer:"Retry",Soumettre:wD,"Genre des noms":"Gender of nouns",Questionnaire:bD,Texte:SD,"Tout sélectionner":"Select All","Supprimer tout":"Clear All","Aucun mot sélectionné. Veuillez sélectionner des mots pour choisir le mode entraîneur.":"No words selected. Please select words to chooce the trainer mode.","Entraîneur de cartes mémoire":"Flashcards trainer","Mots déjà revus":"Words already reviewed","Vous suivez ?":"Are you following?",Continue:kD},AD="გამარჯობა",jD="მოი",ED="მთავარი",TD="შესვლა",OD="რეგისტრაცია",LD="წიგნები",PD="იტვირთება",$D="არა",RD="დიახ",zD="შემდეგი",ND="დასრულება",FD="ფსევდონიმი",DD="მაგალითი",ID="მაგალითები",BD="კონტაქტი",_D="სტატიები",MD="კურსები",WD="ლექსიკა",UD="კითხვა",HD="სულ",VD="ქულა",QD="დახურე",qD="კიდევ სცადე",GD="ლექსიკონი",KD="ფრაზები",YD="ითამაშე",JD="ისწავლე",XD="წაიკითხე",ZD="გადადი",eI="გრამატიკა",tI="ყველა",nI="შემდეგი",rI="Submit",iI="ტესტი",oI="ტექსტი",sI="გაგრძელება.",aI={hello:AD,welcome:jD,Accueil:ED,"Recherche ":"ძებნა",Connexion:TD,Inscription:OD,Livres:LD,Leçons:"გაკვეთილები","Trois Mousquetaires":"სამი მუშკეტერი","Vous avez terminé la leçon":"თქვენ დაამთავრეთ ეს გაკვეთილი",Chargement:PD,"Voulez-vous recommencer?":"გსურთ თავიდან დაწყება?",No:$D,Oui:RD,Suivante:zD,"Leçon terminée!":"დასასრული",Finir:ND,"pas de compte ?":"არ გაქ ანგარიში?","Inscrivez-vous":"დარეგისტრირდი","Mot de passe oublié?":"Დაგავიწყდა პაროლი?","Mot de passe":"პაროლი",Pseudonyme:FD,"E-mail":"ელ.ფოსტა","Avez-vous déjà un compte?":"უკვე გაქვთ ანგარიში?",Example:DD,Examples:ID,"Film&Musique":"ფილმები&მუსიკა",Contacter:BD,Articles:_D,Courses:MD,"Bienvenue à Francophoenix":"კეთილი იყოს თქვენი მობრძანება ფრანკოფონიქსში","Tous les livres":"ყველა წიგნი","Tout afficher":"მაჩვენე ყველა","Niveau A1":"დონე A1","Niveau A2":"დონე A2","Niveau B1":"დონე B1","Niveau B2":"დონე B2","Quantité de mots dans ce sujet":"სიტყვების რაოდენობა ამ თემაში","Les mots":"სიტყვები",Vocabulaire:WD,Questions:UD,Total:HD,"Masculin ou Féminin":"მამრობითი თუ მდედრობითი","Testez votre vocabulaire":"გამოცადე შენი ლექსიკა",Score:VD,Fermer:QD,Recommencer:qD,"Félicitations! Vous avez répondu correctement à tous.":"გილოცავ! ყველაფერზე სწორად უპასუხე.","Toutes les réponses ne sont pas correctes. Réessayer!":"ყველა პასუხი არ არის სწორი. კიდევ სცადე!","Vocabulaire thématique":"თემატური ლექსიკა","Read Extract":"დაიწყე კითხვა","Explorez des sujets":"ნახე მთლიანად",Dictionnaire:GD,"Mots favoris":"ფავორიტი სიტყვების სია","Pas de mots favoris":"სია ცარიელია","Des mots":"სიტყვები",Expressions:KD,"Des exercices":"სავარჯიშოები","Afficher toutes les traductions":"გამოაჩინე სრული თარგმანი","Cacher Toutes les Traductions":"დამალე სრული თარგმანი",Jouer:YD,Apprendre:JD,Lire:XD,Définition:"განმარტება","Les Temps":"დროები",Explorer:ZD,Grammaire:eI,"Bienvenue dans la section Grammaire":"კეთილი იყოს თქვენი მობრძანება გრამატიკის სექციაში","Découvrez différents sujets de grammaire pour améliorer vos compétences linguistiques":"აღმოაჩინეთ გრამატიკის სხვადასხვა თემები და გაიუმჯობესეთ ენის ცოდნის დონე","Bienvenue dans la section Vocabulaire":"კეთილი იყოს თქვენი მობრძანება ლექსიკის განყოფილებაში","Explorez différents sujets de vocabulaire pour améliorer vos compétences linguistiques":"ნახეთ ლექსიკის სხვადასხვა თემები თქვენი ენის ცოდნის გასაუმჯობესებლად","Lisez le texte":"Წაიკითხეთ ტექსტი","Les noms à double genre":"არსებითი სახელები ორმაგი სქესით","Construire la phrase":"შეადგინე წინადადება","Qu'est-ce que c'est ?":"რა არის ეს?","Nombre de Mots":"სიტყვების რაოდენობა","Choisir le niveau":"აირჩიეთ დონე",Tous:tI,"Afficher tout":"ყველას ნახვა","Aucun mot trouvé":"სიტყვა ვერ მოიძებნა","Verbes utilisés dans le texte":"ტექსტში გამოყენებული ზმნები",Suivant:nI,Réessayer:"თავიდან სცადე",Soumettre:rI,"Genre des noms":"არსებითი სახელების სქესი",Questionnaire:iI,Texte:oI,"Tout sélectionner":"Მონიშნე ყველა","Supprimer tout":"წაშალე ყველა","Aucun mot sélectionné. Veuillez sélectionner des mots pour choisir le mode entraîneur.":"არც ერთი სიტყვა არ არის მონიშნული. გთხოვთ, მონიშნოთ სიტყვები სავარჯიშოს ასარჩევად.","Entraîneur de cartes mémoire":"შენახული სიტყვების სავარჯიშო","Mots déjà revus":"გავლილი სიყვების რაოდენობა.","Vous suivez ?":"მომყვები ?",Continue:sI};Ge.use(ZO).init({resources:{en:{translation:CD},ka:{translation:aI}},lng:"fr",fallbackLng:"fr",interpolation:{escapeValue:!1}});ud.createRoot(document.getElementById("root")).render(u.jsx(I2,{children:u.jsx(OA,{store:bF,children:u.jsx(nL,{i18n:Ge,children:u.jsx(gF,{})})})}));
