function dw(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var _o=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _g(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function fw(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var o=Function.bind.apply(t,i);return new o}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Ug={exports:{}},qa={},Wg={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Po=Symbol.for("react.element"),pw=Symbol.for("react.portal"),hw=Symbol.for("react.fragment"),mw=Symbol.for("react.strict_mode"),gw=Symbol.for("react.profiler"),xw=Symbol.for("react.provider"),yw=Symbol.for("react.context"),vw=Symbol.for("react.forward_ref"),ww=Symbol.for("react.suspense"),bw=Symbol.for("react.memo"),Sw=Symbol.for("react.lazy"),Op=Symbol.iterator;function kw(e){return e===null||typeof e!="object"?null:(e=Op&&e[Op]||e["@@iterator"],typeof e=="function"?e:null)}var Hg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vg=Object.assign,Qg={};function pi(e,t,n){this.props=e,this.context=t,this.refs=Qg,this.updater=n||Hg}pi.prototype.isReactComponent={};pi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};pi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Gg(){}Gg.prototype=pi.prototype;function Vd(e,t,n){this.props=e,this.context=t,this.refs=Qg,this.updater=n||Hg}var Qd=Vd.prototype=new Gg;Qd.constructor=Vd;Vg(Qd,pi.prototype);Qd.isPureReactComponent=!0;var Pp=Array.isArray,qg=Object.prototype.hasOwnProperty,Gd={current:null},Kg={key:!0,ref:!0,__self:!0,__source:!0};function Yg(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)qg.call(t,r)&&!Kg.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Po,type:e,key:o,ref:s,props:i,_owner:Gd.current}}function Cw(e,t){return{$$typeof:Po,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function qd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Po}function Aw(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var $p=/\/+/g;function Xl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Aw(""+e.key):t.toString(36)}function ps(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Po:case pw:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Xl(s,0):r,Pp(i)?(n="",e!=null&&(n=e.replace($p,"$&/")+"/"),ps(i,t,n,"",function(u){return u})):i!=null&&(qd(i)&&(i=Cw(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace($p,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Pp(e))for(var a=0;a<e.length;a++){o=e[a];var c=r+Xl(o,a);s+=ps(o,t,n,c,i)}else if(c=kw(e),typeof c=="function")for(e=c.call(e),a=0;!(o=e.next()).done;)o=o.value,c=r+Xl(o,a++),s+=ps(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Uo(e,t,n){if(e==null)return e;var r=[],i=0;return ps(e,r,"","",function(o){return t.call(n,o,i++)}),r}function jw(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var et={current:null},hs={transition:null},Ew={ReactCurrentDispatcher:et,ReactCurrentBatchConfig:hs,ReactCurrentOwner:Gd};Z.Children={map:Uo,forEach:function(e,t,n){Uo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Uo(e,function(){t++}),t},toArray:function(e){return Uo(e,function(t){return t})||[]},only:function(e){if(!qd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Z.Component=pi;Z.Fragment=hw;Z.Profiler=gw;Z.PureComponent=Vd;Z.StrictMode=mw;Z.Suspense=ww;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ew;Z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Vg({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Gd.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)qg.call(t,c)&&!Kg.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Po,type:e.type,key:i,ref:o,props:r,_owner:s}};Z.createContext=function(e){return e={$$typeof:yw,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:xw,_context:e},e.Consumer=e};Z.createElement=Yg;Z.createFactory=function(e){var t=Yg.bind(null,e);return t.type=e,t};Z.createRef=function(){return{current:null}};Z.forwardRef=function(e){return{$$typeof:vw,render:e}};Z.isValidElement=qd;Z.lazy=function(e){return{$$typeof:Sw,_payload:{_status:-1,_result:e},_init:jw}};Z.memo=function(e,t){return{$$typeof:bw,type:e,compare:t===void 0?null:t}};Z.startTransition=function(e){var t=hs.transition;hs.transition={};try{e()}finally{hs.transition=t}};Z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Z.useCallback=function(e,t){return et.current.useCallback(e,t)};Z.useContext=function(e){return et.current.useContext(e)};Z.useDebugValue=function(){};Z.useDeferredValue=function(e){return et.current.useDeferredValue(e)};Z.useEffect=function(e,t){return et.current.useEffect(e,t)};Z.useId=function(){return et.current.useId()};Z.useImperativeHandle=function(e,t,n){return et.current.useImperativeHandle(e,t,n)};Z.useInsertionEffect=function(e,t){return et.current.useInsertionEffect(e,t)};Z.useLayoutEffect=function(e,t){return et.current.useLayoutEffect(e,t)};Z.useMemo=function(e,t){return et.current.useMemo(e,t)};Z.useReducer=function(e,t,n){return et.current.useReducer(e,t,n)};Z.useRef=function(e){return et.current.useRef(e)};Z.useState=function(e){return et.current.useState(e)};Z.useSyncExternalStore=function(e,t,n){return et.current.useSyncExternalStore(e,t,n)};Z.useTransition=function(){return et.current.useTransition()};Z.version="18.2.0";Wg.exports=Z;var S=Wg.exports;const st=_g(S),Tw=dw({__proto__:null,default:st},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lw=S,Ow=Symbol.for("react.element"),Pw=Symbol.for("react.fragment"),$w=Object.prototype.hasOwnProperty,Rw=Lw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zw={key:!0,ref:!0,__self:!0,__source:!0};function Jg(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)$w.call(t,r)&&!zw.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Ow,type:e,key:o,ref:s,props:i,_owner:Rw.current}}qa.Fragment=Pw;qa.jsx=Jg;qa.jsxs=Jg;Ug.exports=qa;var l=Ug.exports,pu={},Xg={exports:{}},xt={},Zg={exports:{}},ex={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,F){var N=L.length;L.push(F);e:for(;0<N;){var V=N-1>>>1,G=L[V];if(0<i(G,F))L[V]=F,L[N]=G,N=V;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var F=L[0],N=L.pop();if(N!==F){L[0]=N;e:for(var V=0,G=L.length,ge=G>>>1;V<ge;){var be=2*(V+1)-1,Dt=L[be],Ye=be+1,rt=L[Ye];if(0>i(Dt,N))Ye<G&&0>i(rt,Dt)?(L[V]=rt,L[Ye]=N,V=Ye):(L[V]=Dt,L[be]=N,V=be);else if(Ye<G&&0>i(rt,N))L[V]=rt,L[Ye]=N,V=Ye;else break e}}return F}function i(L,F){var N=L.sortIndex-F.sortIndex;return N!==0?N:L.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var c=[],u=[],d=1,p=null,h=3,g=!1,y=!1,v=!1,b=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(L){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=L)r(u),F.sortIndex=F.expirationTime,t(c,F);else break;F=n(u)}}function k(L){if(v=!1,w(L),!y)if(n(c)!==null)y=!0,_(A);else{var F=n(u);F!==null&&$(k,F.startTime-L)}}function A(L,F){y=!1,v&&(v=!1,x(T),T=-1),g=!0;var N=h;try{for(w(F),p=n(c);p!==null&&(!(p.expirationTime>F)||L&&!E());){var V=p.callback;if(typeof V=="function"){p.callback=null,h=p.priorityLevel;var G=V(p.expirationTime<=F);F=e.unstable_now(),typeof G=="function"?p.callback=G:p===n(c)&&r(c),w(F)}else r(c);p=n(c)}if(p!==null)var ge=!0;else{var be=n(u);be!==null&&$(k,be.startTime-F),ge=!1}return ge}finally{p=null,h=N,g=!1}}var C=!1,j=null,T=-1,O=5,P=-1;function E(){return!(e.unstable_now()-P<O)}function z(){if(j!==null){var L=e.unstable_now();P=L;var F=!0;try{F=j(!0,L)}finally{F?B():(C=!1,j=null)}}else C=!1}var B;if(typeof m=="function")B=function(){m(z)};else if(typeof MessageChannel<"u"){var M=new MessageChannel,I=M.port2;M.port1.onmessage=z,B=function(){I.postMessage(null)}}else B=function(){b(z,0)};function _(L){j=L,C||(C=!0,B())}function $(L,F){T=b(function(){L(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,_(A))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(L){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var N=h;h=F;try{return L()}finally{h=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,F){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var N=h;h=L;try{return F()}finally{h=N}},e.unstable_scheduleCallback=function(L,F,N){var V=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?V+N:V):N=V,L){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=N+G,L={id:d++,callback:F,priorityLevel:L,startTime:N,expirationTime:G,sortIndex:-1},N>V?(L.sortIndex=N,t(u,L),n(c)===null&&L===n(u)&&(v?(x(T),T=-1):v=!0,$(k,N-V))):(L.sortIndex=G,t(c,L),y||g||(y=!0,_(A))),L},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(L){var F=h;return function(){var N=h;h=F;try{return L.apply(this,arguments)}finally{h=N}}}})(ex);Zg.exports=ex;var Nw=Zg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tx=S,mt=Nw;function D(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nx=new Set,to={};function hr(e,t){Kr(e,t),Kr(e+"Capture",t)}function Kr(e,t){for(to[e]=t,e=0;e<t.length;e++)nx.add(t[e])}var sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hu=Object.prototype.hasOwnProperty,Bw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rp={},zp={};function Iw(e){return hu.call(zp,e)?!0:hu.call(Rp,e)?!1:Bw.test(e)?zp[e]=!0:(Rp[e]=!0,!1)}function Fw(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Dw(e,t,n,r){if(t===null||typeof t>"u"||Fw(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function tt(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Me[e]=new tt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Me[t]=new tt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Me[e]=new tt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Me[e]=new tt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Me[e]=new tt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Me[e]=new tt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Me[e]=new tt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Me[e]=new tt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Me[e]=new tt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Kd=/[\-:]([a-z])/g;function Yd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Kd,Yd);Me[t]=new tt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Kd,Yd);Me[t]=new tt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Kd,Yd);Me[t]=new tt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Me[e]=new tt(e,1,!1,e.toLowerCase(),null,!1,!1)});Me.xlinkHref=new tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Me[e]=new tt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Jd(e,t,n,r){var i=Me.hasOwnProperty(t)?Me[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Dw(t,n,i,r)&&(n=null),r||i===null?Iw(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var dn=tx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wo=Symbol.for("react.element"),kr=Symbol.for("react.portal"),Cr=Symbol.for("react.fragment"),Xd=Symbol.for("react.strict_mode"),mu=Symbol.for("react.profiler"),rx=Symbol.for("react.provider"),ix=Symbol.for("react.context"),Zd=Symbol.for("react.forward_ref"),gu=Symbol.for("react.suspense"),xu=Symbol.for("react.suspense_list"),ef=Symbol.for("react.memo"),yn=Symbol.for("react.lazy"),ox=Symbol.for("react.offscreen"),Np=Symbol.iterator;function ki(e){return e===null||typeof e!="object"?null:(e=Np&&e[Np]||e["@@iterator"],typeof e=="function"?e:null)}var we=Object.assign,Zl;function zi(e){if(Zl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Zl=t&&t[1]||""}return`
`+Zl+e}var ec=!1;function tc(e,t){if(!e||ec)return"";ec=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=a);break}}}finally{ec=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?zi(e):""}function Mw(e){switch(e.tag){case 5:return zi(e.type);case 16:return zi("Lazy");case 13:return zi("Suspense");case 19:return zi("SuspenseList");case 0:case 2:case 15:return e=tc(e.type,!1),e;case 11:return e=tc(e.type.render,!1),e;case 1:return e=tc(e.type,!0),e;default:return""}}function yu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Cr:return"Fragment";case kr:return"Portal";case mu:return"Profiler";case Xd:return"StrictMode";case gu:return"Suspense";case xu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ix:return(e.displayName||"Context")+".Consumer";case rx:return(e._context.displayName||"Context")+".Provider";case Zd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ef:return t=e.displayName||null,t!==null?t:yu(e.type)||"Memo";case yn:t=e._payload,e=e._init;try{return yu(e(t))}catch{}}return null}function _w(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yu(t);case 8:return t===Xd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Fn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sx(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Uw(e){var t=sx(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ho(e){e._valueTracker||(e._valueTracker=Uw(e))}function ax(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=sx(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ks(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function vu(e,t){var n=t.checked;return we({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Bp(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Fn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function lx(e,t){t=t.checked,t!=null&&Jd(e,"checked",t,!1)}function wu(e,t){lx(e,t);var n=Fn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bu(e,t.type,n):t.hasOwnProperty("defaultValue")&&bu(e,t.type,Fn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ip(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function bu(e,t,n){(t!=="number"||Ks(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ni=Array.isArray;function Br(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Fn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Su(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(D(91));return we({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(D(92));if(Ni(n)){if(1<n.length)throw Error(D(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Fn(n)}}function cx(e,t){var n=Fn(t.value),r=Fn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Dp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ux(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ku(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ux(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Vo,dx=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Vo=Vo||document.createElement("div"),Vo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Vo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function no(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ww=["Webkit","ms","Moz","O"];Object.keys(Mi).forEach(function(e){Ww.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mi[t]=Mi[e]})});function fx(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Mi.hasOwnProperty(e)&&Mi[e]?(""+t).trim():t+"px"}function px(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=fx(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Hw=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cu(e,t){if(t){if(Hw[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(D(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(D(61))}if(t.style!=null&&typeof t.style!="object")throw Error(D(62))}}function Au(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ju=null;function tf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Eu=null,Ir=null,Fr=null;function Mp(e){if(e=zo(e)){if(typeof Eu!="function")throw Error(D(280));var t=e.stateNode;t&&(t=Za(t),Eu(e.stateNode,e.type,t))}}function hx(e){Ir?Fr?Fr.push(e):Fr=[e]:Ir=e}function mx(){if(Ir){var e=Ir,t=Fr;if(Fr=Ir=null,Mp(e),t)for(e=0;e<t.length;e++)Mp(t[e])}}function gx(e,t){return e(t)}function xx(){}var nc=!1;function yx(e,t,n){if(nc)return e(t,n);nc=!0;try{return gx(e,t,n)}finally{nc=!1,(Ir!==null||Fr!==null)&&(xx(),mx())}}function ro(e,t){var n=e.stateNode;if(n===null)return null;var r=Za(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(D(231,t,typeof n));return n}var Tu=!1;if(sn)try{var Ci={};Object.defineProperty(Ci,"passive",{get:function(){Tu=!0}}),window.addEventListener("test",Ci,Ci),window.removeEventListener("test",Ci,Ci)}catch{Tu=!1}function Vw(e,t,n,r,i,o,s,a,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var _i=!1,Ys=null,Js=!1,Lu=null,Qw={onError:function(e){_i=!0,Ys=e}};function Gw(e,t,n,r,i,o,s,a,c){_i=!1,Ys=null,Vw.apply(Qw,arguments)}function qw(e,t,n,r,i,o,s,a,c){if(Gw.apply(this,arguments),_i){if(_i){var u=Ys;_i=!1,Ys=null}else throw Error(D(198));Js||(Js=!0,Lu=u)}}function mr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function vx(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _p(e){if(mr(e)!==e)throw Error(D(188))}function Kw(e){var t=e.alternate;if(!t){if(t=mr(e),t===null)throw Error(D(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return _p(i),e;if(o===r)return _p(i),t;o=o.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?e:t}function wx(e){return e=Kw(e),e!==null?bx(e):null}function bx(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=bx(e);if(t!==null)return t;e=e.sibling}return null}var Sx=mt.unstable_scheduleCallback,Up=mt.unstable_cancelCallback,Yw=mt.unstable_shouldYield,Jw=mt.unstable_requestPaint,ke=mt.unstable_now,Xw=mt.unstable_getCurrentPriorityLevel,nf=mt.unstable_ImmediatePriority,kx=mt.unstable_UserBlockingPriority,Xs=mt.unstable_NormalPriority,Zw=mt.unstable_LowPriority,Cx=mt.unstable_IdlePriority,Ka=null,Qt=null;function eb(e){if(Qt&&typeof Qt.onCommitFiberRoot=="function")try{Qt.onCommitFiberRoot(Ka,e,void 0,(e.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:rb,tb=Math.log,nb=Math.LN2;function rb(e){return e>>>=0,e===0?32:31-(tb(e)/nb|0)|0}var Qo=64,Go=4194304;function Bi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Bi(a):(o&=s,o!==0&&(r=Bi(o)))}else s=n&~i,s!==0?r=Bi(s):o!==0&&(r=Bi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Nt(t),i=1<<n,r|=e[n],t&=~i;return r}function ib(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ob(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Nt(o),a=1<<s,c=i[s];c===-1?(!(a&n)||a&r)&&(i[s]=ib(a,t)):c<=t&&(e.expiredLanes|=a),o&=~a}}function Ou(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ax(){var e=Qo;return Qo<<=1,!(Qo&4194240)&&(Qo=64),e}function rc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $o(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Nt(t),e[t]=n}function sb(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Nt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function rf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Nt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ie=0;function jx(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ex,of,Tx,Lx,Ox,Pu=!1,qo=[],En=null,Tn=null,Ln=null,io=new Map,oo=new Map,bn=[],ab="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wp(e,t){switch(e){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":io.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(t.pointerId)}}function Ai(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=zo(t),t!==null&&of(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function lb(e,t,n,r,i){switch(t){case"focusin":return En=Ai(En,e,t,n,r,i),!0;case"dragenter":return Tn=Ai(Tn,e,t,n,r,i),!0;case"mouseover":return Ln=Ai(Ln,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return io.set(o,Ai(io.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,oo.set(o,Ai(oo.get(o)||null,e,t,n,r,i)),!0}return!1}function Px(e){var t=Jn(e.target);if(t!==null){var n=mr(t);if(n!==null){if(t=n.tag,t===13){if(t=vx(n),t!==null){e.blockedOn=t,Ox(e.priority,function(){Tx(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ms(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$u(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ju=r,n.target.dispatchEvent(r),ju=null}else return t=zo(n),t!==null&&of(t),e.blockedOn=n,!1;t.shift()}return!0}function Hp(e,t,n){ms(e)&&n.delete(t)}function cb(){Pu=!1,En!==null&&ms(En)&&(En=null),Tn!==null&&ms(Tn)&&(Tn=null),Ln!==null&&ms(Ln)&&(Ln=null),io.forEach(Hp),oo.forEach(Hp)}function ji(e,t){e.blockedOn===t&&(e.blockedOn=null,Pu||(Pu=!0,mt.unstable_scheduleCallback(mt.unstable_NormalPriority,cb)))}function so(e){function t(i){return ji(i,e)}if(0<qo.length){ji(qo[0],e);for(var n=1;n<qo.length;n++){var r=qo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(En!==null&&ji(En,e),Tn!==null&&ji(Tn,e),Ln!==null&&ji(Ln,e),io.forEach(t),oo.forEach(t),n=0;n<bn.length;n++)r=bn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<bn.length&&(n=bn[0],n.blockedOn===null);)Px(n),n.blockedOn===null&&bn.shift()}var Dr=dn.ReactCurrentBatchConfig,ea=!0;function ub(e,t,n,r){var i=ie,o=Dr.transition;Dr.transition=null;try{ie=1,sf(e,t,n,r)}finally{ie=i,Dr.transition=o}}function db(e,t,n,r){var i=ie,o=Dr.transition;Dr.transition=null;try{ie=4,sf(e,t,n,r)}finally{ie=i,Dr.transition=o}}function sf(e,t,n,r){if(ea){var i=$u(e,t,n,r);if(i===null)pc(e,t,r,ta,n),Wp(e,r);else if(lb(i,e,t,n,r))r.stopPropagation();else if(Wp(e,r),t&4&&-1<ab.indexOf(e)){for(;i!==null;){var o=zo(i);if(o!==null&&Ex(o),o=$u(e,t,n,r),o===null&&pc(e,t,r,ta,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else pc(e,t,r,null,n)}}var ta=null;function $u(e,t,n,r){if(ta=null,e=tf(r),e=Jn(e),e!==null)if(t=mr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=vx(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ta=e,null}function $x(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xw()){case nf:return 1;case kx:return 4;case Xs:case Zw:return 16;case Cx:return 536870912;default:return 16}default:return 16}}var Cn=null,af=null,gs=null;function Rx(){if(gs)return gs;var e,t=af,n=t.length,r,i="value"in Cn?Cn.value:Cn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return gs=i.slice(e,1<r?1-r:void 0)}function xs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ko(){return!0}function Vp(){return!1}function yt(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ko:Vp,this.isPropagationStopped=Vp,this}return we(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ko)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ko)},persist:function(){},isPersistent:Ko}),t}var hi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lf=yt(hi),Ro=we({},hi,{view:0,detail:0}),fb=yt(Ro),ic,oc,Ei,Ya=we({},Ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ei&&(Ei&&e.type==="mousemove"?(ic=e.screenX-Ei.screenX,oc=e.screenY-Ei.screenY):oc=ic=0,Ei=e),ic)},movementY:function(e){return"movementY"in e?e.movementY:oc}}),Qp=yt(Ya),pb=we({},Ya,{dataTransfer:0}),hb=yt(pb),mb=we({},Ro,{relatedTarget:0}),sc=yt(mb),gb=we({},hi,{animationName:0,elapsedTime:0,pseudoElement:0}),xb=yt(gb),yb=we({},hi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vb=yt(yb),wb=we({},hi,{data:0}),Gp=yt(wb),bb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=kb[e])?!!t[e]:!1}function cf(){return Cb}var Ab=we({},Ro,{key:function(e){if(e.key){var t=bb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cf,charCode:function(e){return e.type==="keypress"?xs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jb=yt(Ab),Eb=we({},Ya,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qp=yt(Eb),Tb=we({},Ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cf}),Lb=yt(Tb),Ob=we({},hi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pb=yt(Ob),$b=we({},Ya,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rb=yt($b),zb=[9,13,27,32],uf=sn&&"CompositionEvent"in window,Ui=null;sn&&"documentMode"in document&&(Ui=document.documentMode);var Nb=sn&&"TextEvent"in window&&!Ui,zx=sn&&(!uf||Ui&&8<Ui&&11>=Ui),Kp=String.fromCharCode(32),Yp=!1;function Nx(e,t){switch(e){case"keyup":return zb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ar=!1;function Bb(e,t){switch(e){case"compositionend":return Bx(t);case"keypress":return t.which!==32?null:(Yp=!0,Kp);case"textInput":return e=t.data,e===Kp&&Yp?null:e;default:return null}}function Ib(e,t){if(Ar)return e==="compositionend"||!uf&&Nx(e,t)?(e=Rx(),gs=af=Cn=null,Ar=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zx&&t.locale!=="ko"?null:t.data;default:return null}}var Fb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fb[e.type]:t==="textarea"}function Ix(e,t,n,r){hx(r),t=na(t,"onChange"),0<t.length&&(n=new lf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Wi=null,ao=null;function Db(e){qx(e,0)}function Ja(e){var t=Tr(e);if(ax(t))return e}function Mb(e,t){if(e==="change")return t}var Fx=!1;if(sn){var ac;if(sn){var lc="oninput"in document;if(!lc){var Xp=document.createElement("div");Xp.setAttribute("oninput","return;"),lc=typeof Xp.oninput=="function"}ac=lc}else ac=!1;Fx=ac&&(!document.documentMode||9<document.documentMode)}function Zp(){Wi&&(Wi.detachEvent("onpropertychange",Dx),ao=Wi=null)}function Dx(e){if(e.propertyName==="value"&&Ja(ao)){var t=[];Ix(t,ao,e,tf(e)),yx(Db,t)}}function _b(e,t,n){e==="focusin"?(Zp(),Wi=t,ao=n,Wi.attachEvent("onpropertychange",Dx)):e==="focusout"&&Zp()}function Ub(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ja(ao)}function Wb(e,t){if(e==="click")return Ja(t)}function Hb(e,t){if(e==="input"||e==="change")return Ja(t)}function Vb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ft=typeof Object.is=="function"?Object.is:Vb;function lo(e,t){if(Ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!hu.call(t,i)||!Ft(e[i],t[i]))return!1}return!0}function eh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function th(e,t){var n=eh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=eh(n)}}function Mx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _x(){for(var e=window,t=Ks();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ks(e.document)}return t}function df(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Qb(e){var t=_x(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Mx(n.ownerDocument.documentElement,n)){if(r!==null&&df(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=th(n,o);var s=th(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gb=sn&&"documentMode"in document&&11>=document.documentMode,jr=null,Ru=null,Hi=null,zu=!1;function nh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zu||jr==null||jr!==Ks(r)||(r=jr,"selectionStart"in r&&df(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hi&&lo(Hi,r)||(Hi=r,r=na(Ru,"onSelect"),0<r.length&&(t=new lf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=jr)))}function Yo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Er={animationend:Yo("Animation","AnimationEnd"),animationiteration:Yo("Animation","AnimationIteration"),animationstart:Yo("Animation","AnimationStart"),transitionend:Yo("Transition","TransitionEnd")},cc={},Ux={};sn&&(Ux=document.createElement("div").style,"AnimationEvent"in window||(delete Er.animationend.animation,delete Er.animationiteration.animation,delete Er.animationstart.animation),"TransitionEvent"in window||delete Er.transitionend.transition);function Xa(e){if(cc[e])return cc[e];if(!Er[e])return e;var t=Er[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ux)return cc[e]=t[n];return e}var Wx=Xa("animationend"),Hx=Xa("animationiteration"),Vx=Xa("animationstart"),Qx=Xa("transitionend"),Gx=new Map,rh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vn(e,t){Gx.set(e,t),hr(t,[e])}for(var uc=0;uc<rh.length;uc++){var dc=rh[uc],qb=dc.toLowerCase(),Kb=dc[0].toUpperCase()+dc.slice(1);Vn(qb,"on"+Kb)}Vn(Wx,"onAnimationEnd");Vn(Hx,"onAnimationIteration");Vn(Vx,"onAnimationStart");Vn("dblclick","onDoubleClick");Vn("focusin","onFocus");Vn("focusout","onBlur");Vn(Qx,"onTransitionEnd");Kr("onMouseEnter",["mouseout","mouseover"]);Kr("onMouseLeave",["mouseout","mouseover"]);Kr("onPointerEnter",["pointerout","pointerover"]);Kr("onPointerLeave",["pointerout","pointerover"]);hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yb=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ii));function ih(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,qw(r,t,void 0,e),e.currentTarget=null}function qx(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==o&&i.isPropagationStopped())break e;ih(i,a,u),o=c}else for(s=0;s<r.length;s++){if(a=r[s],c=a.instance,u=a.currentTarget,a=a.listener,c!==o&&i.isPropagationStopped())break e;ih(i,a,u),o=c}}}if(Js)throw e=Lu,Js=!1,Lu=null,e}function ue(e,t){var n=t[Du];n===void 0&&(n=t[Du]=new Set);var r=e+"__bubble";n.has(r)||(Kx(t,e,2,!1),n.add(r))}function fc(e,t,n){var r=0;t&&(r|=4),Kx(n,e,r,t)}var Jo="_reactListening"+Math.random().toString(36).slice(2);function co(e){if(!e[Jo]){e[Jo]=!0,nx.forEach(function(n){n!=="selectionchange"&&(Yb.has(n)||fc(n,!1,e),fc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Jo]||(t[Jo]=!0,fc("selectionchange",!1,t))}}function Kx(e,t,n,r){switch($x(t)){case 1:var i=ub;break;case 4:i=db;break;default:i=sf}n=i.bind(null,t,n,e),i=void 0,!Tu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function pc(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Jn(a),s===null)return;if(c=s.tag,c===5||c===6){r=o=s;continue e}a=a.parentNode}}r=r.return}yx(function(){var u=o,d=tf(n),p=[];e:{var h=Gx.get(e);if(h!==void 0){var g=lf,y=e;switch(e){case"keypress":if(xs(n)===0)break e;case"keydown":case"keyup":g=jb;break;case"focusin":y="focus",g=sc;break;case"focusout":y="blur",g=sc;break;case"beforeblur":case"afterblur":g=sc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Qp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=hb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Lb;break;case Wx:case Hx:case Vx:g=xb;break;case Qx:g=Pb;break;case"scroll":g=fb;break;case"wheel":g=Rb;break;case"copy":case"cut":case"paste":g=vb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=qp}var v=(t&4)!==0,b=!v&&e==="scroll",x=v?h!==null?h+"Capture":null:h;v=[];for(var m=u,w;m!==null;){w=m;var k=w.stateNode;if(w.tag===5&&k!==null&&(w=k,x!==null&&(k=ro(m,x),k!=null&&v.push(uo(m,k,w)))),b)break;m=m.return}0<v.length&&(h=new g(h,y,null,n,d),p.push({event:h,listeners:v}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==ju&&(y=n.relatedTarget||n.fromElement)&&(Jn(y)||y[an]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Jn(y):null,y!==null&&(b=mr(y),y!==b||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(v=Qp,k="onMouseLeave",x="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(v=qp,k="onPointerLeave",x="onPointerEnter",m="pointer"),b=g==null?h:Tr(g),w=y==null?h:Tr(y),h=new v(k,m+"leave",g,n,d),h.target=b,h.relatedTarget=w,k=null,Jn(d)===u&&(v=new v(x,m+"enter",y,n,d),v.target=w,v.relatedTarget=b,k=v),b=k,g&&y)t:{for(v=g,x=y,m=0,w=v;w;w=yr(w))m++;for(w=0,k=x;k;k=yr(k))w++;for(;0<m-w;)v=yr(v),m--;for(;0<w-m;)x=yr(x),w--;for(;m--;){if(v===x||x!==null&&v===x.alternate)break t;v=yr(v),x=yr(x)}v=null}else v=null;g!==null&&oh(p,h,g,v,!1),y!==null&&b!==null&&oh(p,b,y,v,!0)}}e:{if(h=u?Tr(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var A=Mb;else if(Jp(h))if(Fx)A=Hb;else{A=Ub;var C=_b}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(A=Wb);if(A&&(A=A(e,u))){Ix(p,A,n,d);break e}C&&C(e,h,u),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&bu(h,"number",h.value)}switch(C=u?Tr(u):window,e){case"focusin":(Jp(C)||C.contentEditable==="true")&&(jr=C,Ru=u,Hi=null);break;case"focusout":Hi=Ru=jr=null;break;case"mousedown":zu=!0;break;case"contextmenu":case"mouseup":case"dragend":zu=!1,nh(p,n,d);break;case"selectionchange":if(Gb)break;case"keydown":case"keyup":nh(p,n,d)}var j;if(uf)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Ar?Nx(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(zx&&n.locale!=="ko"&&(Ar||T!=="onCompositionStart"?T==="onCompositionEnd"&&Ar&&(j=Rx()):(Cn=d,af="value"in Cn?Cn.value:Cn.textContent,Ar=!0)),C=na(u,T),0<C.length&&(T=new Gp(T,e,null,n,d),p.push({event:T,listeners:C}),j?T.data=j:(j=Bx(n),j!==null&&(T.data=j)))),(j=Nb?Bb(e,n):Ib(e,n))&&(u=na(u,"onBeforeInput"),0<u.length&&(d=new Gp("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=j))}qx(p,t)})}function uo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function na(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ro(e,n),o!=null&&r.unshift(uo(e,o,i)),o=ro(e,t),o!=null&&r.push(uo(e,o,i))),e=e.return}return r}function yr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function oh(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,c=a.alternate,u=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&u!==null&&(a=u,i?(c=ro(n,o),c!=null&&s.unshift(uo(n,c,a))):i||(c=ro(n,o),c!=null&&s.push(uo(n,c,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Jb=/\r\n?/g,Xb=/\u0000|\uFFFD/g;function sh(e){return(typeof e=="string"?e:""+e).replace(Jb,`
`).replace(Xb,"")}function Xo(e,t,n){if(t=sh(t),sh(e)!==t&&n)throw Error(D(425))}function ra(){}var Nu=null,Bu=null;function Iu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Fu=typeof setTimeout=="function"?setTimeout:void 0,Zb=typeof clearTimeout=="function"?clearTimeout:void 0,ah=typeof Promise=="function"?Promise:void 0,eS=typeof queueMicrotask=="function"?queueMicrotask:typeof ah<"u"?function(e){return ah.resolve(null).then(e).catch(tS)}:Fu;function tS(e){setTimeout(function(){throw e})}function hc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),so(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);so(t)}function On(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function lh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var mi=Math.random().toString(36).slice(2),Wt="__reactFiber$"+mi,fo="__reactProps$"+mi,an="__reactContainer$"+mi,Du="__reactEvents$"+mi,nS="__reactListeners$"+mi,rS="__reactHandles$"+mi;function Jn(e){var t=e[Wt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[an]||n[Wt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=lh(e);e!==null;){if(n=e[Wt])return n;e=lh(e)}return t}e=n,n=e.parentNode}return null}function zo(e){return e=e[Wt]||e[an],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function Za(e){return e[fo]||null}var Mu=[],Lr=-1;function Qn(e){return{current:e}}function fe(e){0>Lr||(e.current=Mu[Lr],Mu[Lr]=null,Lr--)}function ce(e,t){Lr++,Mu[Lr]=e.current,e.current=t}var Dn={},Ke=Qn(Dn),lt=Qn(!1),sr=Dn;function Yr(e,t){var n=e.type.contextTypes;if(!n)return Dn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ct(e){return e=e.childContextTypes,e!=null}function ia(){fe(lt),fe(Ke)}function ch(e,t,n){if(Ke.current!==Dn)throw Error(D(168));ce(Ke,t),ce(lt,n)}function Yx(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(D(108,_w(e)||"Unknown",i));return we({},n,r)}function oa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Dn,sr=Ke.current,ce(Ke,e),ce(lt,lt.current),!0}function uh(e,t,n){var r=e.stateNode;if(!r)throw Error(D(169));n?(e=Yx(e,t,sr),r.__reactInternalMemoizedMergedChildContext=e,fe(lt),fe(Ke),ce(Ke,e)):fe(lt),ce(lt,n)}var Zt=null,el=!1,mc=!1;function Jx(e){Zt===null?Zt=[e]:Zt.push(e)}function iS(e){el=!0,Jx(e)}function Gn(){if(!mc&&Zt!==null){mc=!0;var e=0,t=ie;try{var n=Zt;for(ie=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Zt=null,el=!1}catch(i){throw Zt!==null&&(Zt=Zt.slice(e+1)),Sx(nf,Gn),i}finally{ie=t,mc=!1}}return null}var Or=[],Pr=0,sa=null,aa=0,bt=[],St=0,ar=null,en=1,tn="";function qn(e,t){Or[Pr++]=aa,Or[Pr++]=sa,sa=e,aa=t}function Xx(e,t,n){bt[St++]=en,bt[St++]=tn,bt[St++]=ar,ar=e;var r=en;e=tn;var i=32-Nt(r)-1;r&=~(1<<i),n+=1;var o=32-Nt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,en=1<<32-Nt(t)+i|n<<i|r,tn=o+e}else en=1<<o|n<<i|r,tn=e}function ff(e){e.return!==null&&(qn(e,1),Xx(e,1,0))}function pf(e){for(;e===sa;)sa=Or[--Pr],Or[Pr]=null,aa=Or[--Pr],Or[Pr]=null;for(;e===ar;)ar=bt[--St],bt[St]=null,tn=bt[--St],bt[St]=null,en=bt[--St],bt[St]=null}var ht=null,pt=null,me=!1,Rt=null;function Zx(e,t){var n=kt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function dh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ht=e,pt=On(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ht=e,pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ar!==null?{id:en,overflow:tn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=kt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ht=e,pt=null,!0):!1;default:return!1}}function _u(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Uu(e){if(me){var t=pt;if(t){var n=t;if(!dh(e,t)){if(_u(e))throw Error(D(418));t=On(n.nextSibling);var r=ht;t&&dh(e,t)?Zx(r,n):(e.flags=e.flags&-4097|2,me=!1,ht=e)}}else{if(_u(e))throw Error(D(418));e.flags=e.flags&-4097|2,me=!1,ht=e}}}function fh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ht=e}function Zo(e){if(e!==ht)return!1;if(!me)return fh(e),me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Iu(e.type,e.memoizedProps)),t&&(t=pt)){if(_u(e))throw e0(),Error(D(418));for(;t;)Zx(e,t),t=On(t.nextSibling)}if(fh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){pt=On(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}pt=null}}else pt=ht?On(e.stateNode.nextSibling):null;return!0}function e0(){for(var e=pt;e;)e=On(e.nextSibling)}function Jr(){pt=ht=null,me=!1}function hf(e){Rt===null?Rt=[e]:Rt.push(e)}var oS=dn.ReactCurrentBatchConfig;function Pt(e,t){if(e&&e.defaultProps){t=we({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var la=Qn(null),ca=null,$r=null,mf=null;function gf(){mf=$r=ca=null}function xf(e){var t=la.current;fe(la),e._currentValue=t}function Wu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Mr(e,t){ca=e,mf=$r=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(at=!0),e.firstContext=null)}function jt(e){var t=e._currentValue;if(mf!==e)if(e={context:e,memoizedValue:t,next:null},$r===null){if(ca===null)throw Error(D(308));$r=e,ca.dependencies={lanes:0,firstContext:e}}else $r=$r.next=e;return t}var Xn=null;function yf(e){Xn===null?Xn=[e]:Xn.push(e)}function t0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,yf(t)):(n.next=i.next,i.next=n),t.interleaved=n,ln(e,r)}function ln(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var vn=!1;function vf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function n0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Pn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,te&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ln(e,n)}return i=r.interleaved,i===null?(t.next=t,yf(r)):(t.next=i.next,i.next=t),r.interleaved=t,ln(e,n)}function ys(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,rf(e,n)}}function ph(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ua(e,t,n,r){var i=e.updateQueue;vn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var c=a,u=c.next;c.next=null,s===null?o=u:s.next=u,s=c;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=c))}if(o!==null){var p=i.baseState;s=0,d=u=c=null,a=o;do{var h=a.lane,g=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,v=a;switch(h=t,g=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){p=y.call(g,p,h);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,h=typeof y=="function"?y.call(g,p,h):y,h==null)break e;p=we({},p,h);break e;case 2:vn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=g,c=p):d=d.next=g,s|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(d===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);cr|=s,e.lanes=s,e.memoizedState=p}}function hh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var r0=new tx.Component().refs;function Hu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:we({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var tl={isMounted:function(e){return(e=e._reactInternals)?mr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ze(),i=Rn(e),o=nn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Pn(e,o,i),t!==null&&(Bt(t,e,i,r),ys(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ze(),i=Rn(e),o=nn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Pn(e,o,i),t!==null&&(Bt(t,e,i,r),ys(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ze(),r=Rn(e),i=nn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Pn(e,i,r),t!==null&&(Bt(t,e,r,n),ys(t,e,r))}};function mh(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!lo(n,r)||!lo(i,o):!0}function i0(e,t,n){var r=!1,i=Dn,o=t.contextType;return typeof o=="object"&&o!==null?o=jt(o):(i=ct(t)?sr:Ke.current,r=t.contextTypes,o=(r=r!=null)?Yr(e,i):Dn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=tl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function gh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&tl.enqueueReplaceState(t,t.state,null)}function Vu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=r0,vf(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=jt(o):(o=ct(t)?sr:Ke.current,i.context=Yr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Hu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&tl.enqueueReplaceState(i,i.state,null),ua(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ti(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===r0&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,e))}return e}function es(e,t){throw e=Object.prototype.toString.call(t),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xh(e){var t=e._init;return t(e._payload)}function o0(e){function t(x,m){if(e){var w=x.deletions;w===null?(x.deletions=[m],x.flags|=16):w.push(m)}}function n(x,m){if(!e)return null;for(;m!==null;)t(x,m),m=m.sibling;return null}function r(x,m){for(x=new Map;m!==null;)m.key!==null?x.set(m.key,m):x.set(m.index,m),m=m.sibling;return x}function i(x,m){return x=zn(x,m),x.index=0,x.sibling=null,x}function o(x,m,w){return x.index=w,e?(w=x.alternate,w!==null?(w=w.index,w<m?(x.flags|=2,m):w):(x.flags|=2,m)):(x.flags|=1048576,m)}function s(x){return e&&x.alternate===null&&(x.flags|=2),x}function a(x,m,w,k){return m===null||m.tag!==6?(m=Sc(w,x.mode,k),m.return=x,m):(m=i(m,w),m.return=x,m)}function c(x,m,w,k){var A=w.type;return A===Cr?d(x,m,w.props.children,k,w.key):m!==null&&(m.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===yn&&xh(A)===m.type)?(k=i(m,w.props),k.ref=Ti(x,m,w),k.return=x,k):(k=Cs(w.type,w.key,w.props,null,x.mode,k),k.ref=Ti(x,m,w),k.return=x,k)}function u(x,m,w,k){return m===null||m.tag!==4||m.stateNode.containerInfo!==w.containerInfo||m.stateNode.implementation!==w.implementation?(m=kc(w,x.mode,k),m.return=x,m):(m=i(m,w.children||[]),m.return=x,m)}function d(x,m,w,k,A){return m===null||m.tag!==7?(m=rr(w,x.mode,k,A),m.return=x,m):(m=i(m,w),m.return=x,m)}function p(x,m,w){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Sc(""+m,x.mode,w),m.return=x,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Wo:return w=Cs(m.type,m.key,m.props,null,x.mode,w),w.ref=Ti(x,null,m),w.return=x,w;case kr:return m=kc(m,x.mode,w),m.return=x,m;case yn:var k=m._init;return p(x,k(m._payload),w)}if(Ni(m)||ki(m))return m=rr(m,x.mode,w,null),m.return=x,m;es(x,m)}return null}function h(x,m,w,k){var A=m!==null?m.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return A!==null?null:a(x,m,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Wo:return w.key===A?c(x,m,w,k):null;case kr:return w.key===A?u(x,m,w,k):null;case yn:return A=w._init,h(x,m,A(w._payload),k)}if(Ni(w)||ki(w))return A!==null?null:d(x,m,w,k,null);es(x,w)}return null}function g(x,m,w,k,A){if(typeof k=="string"&&k!==""||typeof k=="number")return x=x.get(w)||null,a(m,x,""+k,A);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Wo:return x=x.get(k.key===null?w:k.key)||null,c(m,x,k,A);case kr:return x=x.get(k.key===null?w:k.key)||null,u(m,x,k,A);case yn:var C=k._init;return g(x,m,w,C(k._payload),A)}if(Ni(k)||ki(k))return x=x.get(w)||null,d(m,x,k,A,null);es(m,k)}return null}function y(x,m,w,k){for(var A=null,C=null,j=m,T=m=0,O=null;j!==null&&T<w.length;T++){j.index>T?(O=j,j=null):O=j.sibling;var P=h(x,j,w[T],k);if(P===null){j===null&&(j=O);break}e&&j&&P.alternate===null&&t(x,j),m=o(P,m,T),C===null?A=P:C.sibling=P,C=P,j=O}if(T===w.length)return n(x,j),me&&qn(x,T),A;if(j===null){for(;T<w.length;T++)j=p(x,w[T],k),j!==null&&(m=o(j,m,T),C===null?A=j:C.sibling=j,C=j);return me&&qn(x,T),A}for(j=r(x,j);T<w.length;T++)O=g(j,x,T,w[T],k),O!==null&&(e&&O.alternate!==null&&j.delete(O.key===null?T:O.key),m=o(O,m,T),C===null?A=O:C.sibling=O,C=O);return e&&j.forEach(function(E){return t(x,E)}),me&&qn(x,T),A}function v(x,m,w,k){var A=ki(w);if(typeof A!="function")throw Error(D(150));if(w=A.call(w),w==null)throw Error(D(151));for(var C=A=null,j=m,T=m=0,O=null,P=w.next();j!==null&&!P.done;T++,P=w.next()){j.index>T?(O=j,j=null):O=j.sibling;var E=h(x,j,P.value,k);if(E===null){j===null&&(j=O);break}e&&j&&E.alternate===null&&t(x,j),m=o(E,m,T),C===null?A=E:C.sibling=E,C=E,j=O}if(P.done)return n(x,j),me&&qn(x,T),A;if(j===null){for(;!P.done;T++,P=w.next())P=p(x,P.value,k),P!==null&&(m=o(P,m,T),C===null?A=P:C.sibling=P,C=P);return me&&qn(x,T),A}for(j=r(x,j);!P.done;T++,P=w.next())P=g(j,x,T,P.value,k),P!==null&&(e&&P.alternate!==null&&j.delete(P.key===null?T:P.key),m=o(P,m,T),C===null?A=P:C.sibling=P,C=P);return e&&j.forEach(function(z){return t(x,z)}),me&&qn(x,T),A}function b(x,m,w,k){if(typeof w=="object"&&w!==null&&w.type===Cr&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Wo:e:{for(var A=w.key,C=m;C!==null;){if(C.key===A){if(A=w.type,A===Cr){if(C.tag===7){n(x,C.sibling),m=i(C,w.props.children),m.return=x,x=m;break e}}else if(C.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===yn&&xh(A)===C.type){n(x,C.sibling),m=i(C,w.props),m.ref=Ti(x,C,w),m.return=x,x=m;break e}n(x,C);break}else t(x,C);C=C.sibling}w.type===Cr?(m=rr(w.props.children,x.mode,k,w.key),m.return=x,x=m):(k=Cs(w.type,w.key,w.props,null,x.mode,k),k.ref=Ti(x,m,w),k.return=x,x=k)}return s(x);case kr:e:{for(C=w.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===w.containerInfo&&m.stateNode.implementation===w.implementation){n(x,m.sibling),m=i(m,w.children||[]),m.return=x,x=m;break e}else{n(x,m);break}else t(x,m);m=m.sibling}m=kc(w,x.mode,k),m.return=x,x=m}return s(x);case yn:return C=w._init,b(x,m,C(w._payload),k)}if(Ni(w))return y(x,m,w,k);if(ki(w))return v(x,m,w,k);es(x,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,m!==null&&m.tag===6?(n(x,m.sibling),m=i(m,w),m.return=x,x=m):(n(x,m),m=Sc(w,x.mode,k),m.return=x,x=m),s(x)):n(x,m)}return b}var Xr=o0(!0),s0=o0(!1),No={},Gt=Qn(No),po=Qn(No),ho=Qn(No);function Zn(e){if(e===No)throw Error(D(174));return e}function wf(e,t){switch(ce(ho,t),ce(po,e),ce(Gt,No),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ku(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ku(t,e)}fe(Gt),ce(Gt,t)}function Zr(){fe(Gt),fe(po),fe(ho)}function a0(e){Zn(ho.current);var t=Zn(Gt.current),n=ku(t,e.type);t!==n&&(ce(po,e),ce(Gt,n))}function bf(e){po.current===e&&(fe(Gt),fe(po))}var ye=Qn(0);function da(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var gc=[];function Sf(){for(var e=0;e<gc.length;e++)gc[e]._workInProgressVersionPrimary=null;gc.length=0}var vs=dn.ReactCurrentDispatcher,xc=dn.ReactCurrentBatchConfig,lr=0,ve=null,Ee=null,$e=null,fa=!1,Vi=!1,mo=0,sS=0;function He(){throw Error(D(321))}function kf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ft(e[n],t[n]))return!1;return!0}function Cf(e,t,n,r,i,o){if(lr=o,ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,vs.current=e===null||e.memoizedState===null?uS:dS,e=n(r,i),Vi){o=0;do{if(Vi=!1,mo=0,25<=o)throw Error(D(301));o+=1,$e=Ee=null,t.updateQueue=null,vs.current=fS,e=n(r,i)}while(Vi)}if(vs.current=pa,t=Ee!==null&&Ee.next!==null,lr=0,$e=Ee=ve=null,fa=!1,t)throw Error(D(300));return e}function Af(){var e=mo!==0;return mo=0,e}function _t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?ve.memoizedState=$e=e:$e=$e.next=e,$e}function Et(){if(Ee===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=$e===null?ve.memoizedState:$e.next;if(t!==null)$e=t,Ee=e;else{if(e===null)throw Error(D(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},$e===null?ve.memoizedState=$e=e:$e=$e.next=e}return $e}function go(e,t){return typeof t=="function"?t(e):t}function yc(e){var t=Et(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=Ee,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,c=null,u=o;do{var d=u.lane;if((lr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=p,s=r):c=c.next=p,ve.lanes|=d,cr|=d}u=u.next}while(u!==null&&u!==o);c===null?s=r:c.next=a,Ft(r,t.memoizedState)||(at=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ve.lanes|=o,cr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function vc(e){var t=Et(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Ft(o,t.memoizedState)||(at=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function l0(){}function c0(e,t){var n=ve,r=Et(),i=t(),o=!Ft(r.memoizedState,i);if(o&&(r.memoizedState=i,at=!0),r=r.queue,jf(f0.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,xo(9,d0.bind(null,n,r,i,t),void 0,null),Ne===null)throw Error(D(349));lr&30||u0(n,t,i)}return i}function u0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function d0(e,t,n,r){t.value=n,t.getSnapshot=r,p0(t)&&h0(e)}function f0(e,t,n){return n(function(){p0(t)&&h0(e)})}function p0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ft(e,n)}catch{return!0}}function h0(e){var t=ln(e,1);t!==null&&Bt(t,e,1,-1)}function yh(e){var t=_t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:go,lastRenderedState:e},t.queue=e,e=e.dispatch=cS.bind(null,ve,e),[t.memoizedState,e]}function xo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function m0(){return Et().memoizedState}function ws(e,t,n,r){var i=_t();ve.flags|=e,i.memoizedState=xo(1|t,n,void 0,r===void 0?null:r)}function nl(e,t,n,r){var i=Et();r=r===void 0?null:r;var o=void 0;if(Ee!==null){var s=Ee.memoizedState;if(o=s.destroy,r!==null&&kf(r,s.deps)){i.memoizedState=xo(t,n,o,r);return}}ve.flags|=e,i.memoizedState=xo(1|t,n,o,r)}function vh(e,t){return ws(8390656,8,e,t)}function jf(e,t){return nl(2048,8,e,t)}function g0(e,t){return nl(4,2,e,t)}function x0(e,t){return nl(4,4,e,t)}function y0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function v0(e,t,n){return n=n!=null?n.concat([e]):null,nl(4,4,y0.bind(null,t,e),n)}function Ef(){}function w0(e,t){var n=Et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&kf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function b0(e,t){var n=Et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&kf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function S0(e,t,n){return lr&21?(Ft(n,t)||(n=Ax(),ve.lanes|=n,cr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,at=!0),e.memoizedState=n)}function aS(e,t){var n=ie;ie=n!==0&&4>n?n:4,e(!0);var r=xc.transition;xc.transition={};try{e(!1),t()}finally{ie=n,xc.transition=r}}function k0(){return Et().memoizedState}function lS(e,t,n){var r=Rn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},C0(e))A0(t,n);else if(n=t0(e,t,n,r),n!==null){var i=Ze();Bt(n,e,r,i),j0(n,t,r)}}function cS(e,t,n){var r=Rn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(C0(e))A0(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Ft(a,s)){var c=t.interleaved;c===null?(i.next=i,yf(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=t0(e,t,i,r),n!==null&&(i=Ze(),Bt(n,e,r,i),j0(n,t,r))}}function C0(e){var t=e.alternate;return e===ve||t!==null&&t===ve}function A0(e,t){Vi=fa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function j0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,rf(e,n)}}var pa={readContext:jt,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},uS={readContext:jt,useCallback:function(e,t){return _t().memoizedState=[e,t===void 0?null:t],e},useContext:jt,useEffect:vh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ws(4194308,4,y0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ws(4194308,4,e,t)},useInsertionEffect:function(e,t){return ws(4,2,e,t)},useMemo:function(e,t){var n=_t();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=_t();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=lS.bind(null,ve,e),[r.memoizedState,e]},useRef:function(e){var t=_t();return e={current:e},t.memoizedState=e},useState:yh,useDebugValue:Ef,useDeferredValue:function(e){return _t().memoizedState=e},useTransition:function(){var e=yh(!1),t=e[0];return e=aS.bind(null,e[1]),_t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ve,i=_t();if(me){if(n===void 0)throw Error(D(407));n=n()}else{if(n=t(),Ne===null)throw Error(D(349));lr&30||u0(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,vh(f0.bind(null,r,o,e),[e]),r.flags|=2048,xo(9,d0.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=_t(),t=Ne.identifierPrefix;if(me){var n=tn,r=en;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=mo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=sS++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},dS={readContext:jt,useCallback:w0,useContext:jt,useEffect:jf,useImperativeHandle:v0,useInsertionEffect:g0,useLayoutEffect:x0,useMemo:b0,useReducer:yc,useRef:m0,useState:function(){return yc(go)},useDebugValue:Ef,useDeferredValue:function(e){var t=Et();return S0(t,Ee.memoizedState,e)},useTransition:function(){var e=yc(go)[0],t=Et().memoizedState;return[e,t]},useMutableSource:l0,useSyncExternalStore:c0,useId:k0,unstable_isNewReconciler:!1},fS={readContext:jt,useCallback:w0,useContext:jt,useEffect:jf,useImperativeHandle:v0,useInsertionEffect:g0,useLayoutEffect:x0,useMemo:b0,useReducer:vc,useRef:m0,useState:function(){return vc(go)},useDebugValue:Ef,useDeferredValue:function(e){var t=Et();return Ee===null?t.memoizedState=e:S0(t,Ee.memoizedState,e)},useTransition:function(){var e=vc(go)[0],t=Et().memoizedState;return[e,t]},useMutableSource:l0,useSyncExternalStore:c0,useId:k0,unstable_isNewReconciler:!1};function ei(e,t){try{var n="",r=t;do n+=Mw(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function wc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Qu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var pS=typeof WeakMap=="function"?WeakMap:Map;function E0(e,t,n){n=nn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ma||(ma=!0,nd=r),Qu(e,t)},n}function T0(e,t,n){n=nn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Qu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Qu(e,t),typeof r!="function"&&($n===null?$n=new Set([this]):$n.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function wh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new pS;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=ES.bind(null,e,t,n),t.then(e,e))}function bh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Sh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=nn(-1,1),t.tag=2,Pn(n,t,1))),n.lanes|=1),e)}var hS=dn.ReactCurrentOwner,at=!1;function Xe(e,t,n,r){t.child=e===null?s0(t,null,n,r):Xr(t,e.child,n,r)}function kh(e,t,n,r,i){n=n.render;var o=t.ref;return Mr(t,i),r=Cf(e,t,n,r,o,i),n=Af(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,cn(e,t,i)):(me&&n&&ff(t),t.flags|=1,Xe(e,t,r,i),t.child)}function Ch(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Nf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,L0(e,t,o,r,i)):(e=Cs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:lo,n(s,r)&&e.ref===t.ref)return cn(e,t,i)}return t.flags|=1,e=zn(o,r),e.ref=t.ref,e.return=t,t.child=e}function L0(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(lo(o,r)&&e.ref===t.ref)if(at=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(at=!0);else return t.lanes=e.lanes,cn(e,t,i)}return Gu(e,t,n,r,i)}function O0(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(zr,ft),ft|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ce(zr,ft),ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ce(zr,ft),ft|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ce(zr,ft),ft|=r;return Xe(e,t,i,n),t.child}function P0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Gu(e,t,n,r,i){var o=ct(n)?sr:Ke.current;return o=Yr(t,o),Mr(t,i),n=Cf(e,t,n,r,o,i),r=Af(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,cn(e,t,i)):(me&&r&&ff(t),t.flags|=1,Xe(e,t,n,i),t.child)}function Ah(e,t,n,r,i){if(ct(n)){var o=!0;oa(t)}else o=!1;if(Mr(t,i),t.stateNode===null)bs(e,t),i0(t,n,r),Vu(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=jt(u):(u=ct(n)?sr:Ke.current,u=Yr(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||c!==u)&&gh(t,s,r,u),vn=!1;var h=t.memoizedState;s.state=h,ua(t,r,s,i),c=t.memoizedState,a!==r||h!==c||lt.current||vn?(typeof d=="function"&&(Hu(t,n,d,r),c=t.memoizedState),(a=vn||mh(t,n,a,r,h,c,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,n0(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Pt(t.type,a),s.props=u,p=t.pendingProps,h=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=jt(c):(c=ct(n)?sr:Ke.current,c=Yr(t,c));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||h!==c)&&gh(t,s,r,c),vn=!1,h=t.memoizedState,s.state=h,ua(t,r,s,i);var y=t.memoizedState;a!==p||h!==y||lt.current||vn?(typeof g=="function"&&(Hu(t,n,g,r),y=t.memoizedState),(u=vn||mh(t,n,u,r,h,y,c)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=c,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return qu(e,t,n,r,o,i)}function qu(e,t,n,r,i,o){P0(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&uh(t,n,!1),cn(e,t,o);r=t.stateNode,hS.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Xr(t,e.child,null,o),t.child=Xr(t,null,a,o)):Xe(e,t,a,o),t.memoizedState=r.state,i&&uh(t,n,!0),t.child}function $0(e){var t=e.stateNode;t.pendingContext?ch(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ch(e,t.context,!1),wf(e,t.containerInfo)}function jh(e,t,n,r,i){return Jr(),hf(i),t.flags|=256,Xe(e,t,n,r),t.child}var Ku={dehydrated:null,treeContext:null,retryLane:0};function Yu(e){return{baseLanes:e,cachePool:null,transitions:null}}function R0(e,t,n){var r=t.pendingProps,i=ye.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ce(ye,i&1),e===null)return Uu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ol(s,r,0,null),e=rr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Yu(n),t.memoizedState=Ku,e):Tf(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return mS(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=zn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=zn(a,o):(o=rr(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Yu(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Ku,r}return o=e.child,e=o.sibling,r=zn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Tf(e,t){return t=ol({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ts(e,t,n,r){return r!==null&&hf(r),Xr(t,e.child,null,n),e=Tf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mS(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=wc(Error(D(422))),ts(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ol({mode:"visible",children:r.children},i,0,null),o=rr(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Xr(t,e.child,null,s),t.child.memoizedState=Yu(s),t.memoizedState=Ku,o);if(!(t.mode&1))return ts(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(D(419)),r=wc(o,r,void 0),ts(e,t,s,r)}if(a=(s&e.childLanes)!==0,at||a){if(r=Ne,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ln(e,i),Bt(r,e,i,-1))}return zf(),r=wc(Error(D(421))),ts(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=TS.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,pt=On(i.nextSibling),ht=t,me=!0,Rt=null,e!==null&&(bt[St++]=en,bt[St++]=tn,bt[St++]=ar,en=e.id,tn=e.overflow,ar=t),t=Tf(t,r.children),t.flags|=4096,t)}function Eh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Wu(e.return,t,n)}function bc(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function z0(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Xe(e,t,r.children,n),r=ye.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Eh(e,n,t);else if(e.tag===19)Eh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ce(ye,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&da(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),bc(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&da(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}bc(t,!0,n,null,o);break;case"together":bc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function cn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),cr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(D(153));if(t.child!==null){for(e=t.child,n=zn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gS(e,t,n){switch(t.tag){case 3:$0(t),Jr();break;case 5:a0(t);break;case 1:ct(t.type)&&oa(t);break;case 4:wf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ce(la,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ce(ye,ye.current&1),t.flags|=128,null):n&t.child.childLanes?R0(e,t,n):(ce(ye,ye.current&1),e=cn(e,t,n),e!==null?e.sibling:null);ce(ye,ye.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return z0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(ye,ye.current),r)break;return null;case 22:case 23:return t.lanes=0,O0(e,t,n)}return cn(e,t,n)}var N0,Ju,B0,I0;N0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ju=function(){};B0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Zn(Gt.current);var o=null;switch(n){case"input":i=vu(e,i),r=vu(e,r),o=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),o=[];break;case"textarea":i=Su(e,i),r=Su(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ra)}Cu(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(to.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&a[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(to.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ue("scroll",e),o||a===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};I0=function(e,t,n,r){n!==r&&(t.flags|=4)};function Li(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function xS(e,t,n){var r=t.pendingProps;switch(pf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(t),null;case 1:return ct(t.type)&&ia(),Ve(t),null;case 3:return r=t.stateNode,Zr(),fe(lt),fe(Ke),Sf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Zo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Rt!==null&&(od(Rt),Rt=null))),Ju(e,t),Ve(t),null;case 5:bf(t);var i=Zn(ho.current);if(n=t.type,e!==null&&t.stateNode!=null)B0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(D(166));return Ve(t),null}if(e=Zn(Gt.current),Zo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Wt]=t,r[fo]=o,e=(t.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(i=0;i<Ii.length;i++)ue(Ii[i],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":Bp(r,o),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ue("invalid",r);break;case"textarea":Fp(r,o),ue("invalid",r)}Cu(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Xo(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Xo(r.textContent,a,e),i=["children",""+a]):to.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ue("scroll",r)}switch(n){case"input":Ho(r),Ip(r,o,!0);break;case"textarea":Ho(r),Dp(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ra)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ux(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Wt]=t,e[fo]=r,N0(e,t,!1,!1),t.stateNode=e;e:{switch(s=Au(n,r),n){case"dialog":ue("cancel",e),ue("close",e),i=r;break;case"iframe":case"object":case"embed":ue("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ii.length;i++)ue(Ii[i],e);i=r;break;case"source":ue("error",e),i=r;break;case"img":case"image":case"link":ue("error",e),ue("load",e),i=r;break;case"details":ue("toggle",e),i=r;break;case"input":Bp(e,r),i=vu(e,r),ue("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),ue("invalid",e);break;case"textarea":Fp(e,r),i=Su(e,r),ue("invalid",e);break;default:i=r}Cu(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var c=a[o];o==="style"?px(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&dx(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&no(e,c):typeof c=="number"&&no(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(to.hasOwnProperty(o)?c!=null&&o==="onScroll"&&ue("scroll",e):c!=null&&Jd(e,o,c,s))}switch(n){case"input":Ho(e),Ip(e,r,!1);break;case"textarea":Ho(e),Dp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Fn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Br(e,!!r.multiple,o,!1):r.defaultValue!=null&&Br(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ra)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ve(t),null;case 6:if(e&&t.stateNode!=null)I0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(D(166));if(n=Zn(ho.current),Zn(Gt.current),Zo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Wt]=t,(o=r.nodeValue!==n)&&(e=ht,e!==null))switch(e.tag){case 3:Xo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Xo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Wt]=t,t.stateNode=r}return Ve(t),null;case 13:if(fe(ye),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(me&&pt!==null&&t.mode&1&&!(t.flags&128))e0(),Jr(),t.flags|=98560,o=!1;else if(o=Zo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(D(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(D(317));o[Wt]=t}else Jr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ve(t),o=!1}else Rt!==null&&(od(Rt),Rt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ye.current&1?Te===0&&(Te=3):zf())),t.updateQueue!==null&&(t.flags|=4),Ve(t),null);case 4:return Zr(),Ju(e,t),e===null&&co(t.stateNode.containerInfo),Ve(t),null;case 10:return xf(t.type._context),Ve(t),null;case 17:return ct(t.type)&&ia(),Ve(t),null;case 19:if(fe(ye),o=t.memoizedState,o===null)return Ve(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Li(o,!1);else{if(Te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=da(e),s!==null){for(t.flags|=128,Li(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ce(ye,ye.current&1|2),t.child}e=e.sibling}o.tail!==null&&ke()>ti&&(t.flags|=128,r=!0,Li(o,!1),t.lanes=4194304)}else{if(!r)if(e=da(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Li(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!me)return Ve(t),null}else 2*ke()-o.renderingStartTime>ti&&n!==1073741824&&(t.flags|=128,r=!0,Li(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ke(),t.sibling=null,n=ye.current,ce(ye,r?n&1|2:n&1),t):(Ve(t),null);case 22:case 23:return Rf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ft&1073741824&&(Ve(t),t.subtreeFlags&6&&(t.flags|=8192)):Ve(t),null;case 24:return null;case 25:return null}throw Error(D(156,t.tag))}function yS(e,t){switch(pf(t),t.tag){case 1:return ct(t.type)&&ia(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zr(),fe(lt),fe(Ke),Sf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return bf(t),null;case 13:if(fe(ye),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(D(340));Jr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(ye),null;case 4:return Zr(),null;case 10:return xf(t.type._context),null;case 22:case 23:return Rf(),null;case 24:return null;default:return null}}var ns=!1,Ge=!1,vS=typeof WeakSet=="function"?WeakSet:Set,H=null;function Rr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(e,t,r)}else n.current=null}function Xu(e,t,n){try{n()}catch(r){Se(e,t,r)}}var Th=!1;function wS(e,t){if(Nu=ea,e=_x(),df(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,c=-1,u=0,d=0,p=e,h=null;t:for(;;){for(var g;p!==n||i!==0&&p.nodeType!==3||(a=s+i),p!==o||r!==0&&p.nodeType!==3||(c=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(g=p.firstChild)!==null;)h=p,p=g;for(;;){if(p===e)break t;if(h===n&&++u===i&&(a=s),h===o&&++d===r&&(c=s),(g=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=g}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bu={focusedElem:e,selectionRange:n},ea=!1,H=t;H!==null;)if(t=H,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,H=e;else for(;H!==null;){t=H;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,b=y.memoizedState,x=t.stateNode,m=x.getSnapshotBeforeUpdate(t.elementType===t.type?v:Pt(t.type,v),b);x.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(k){Se(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return y=Th,Th=!1,y}function Qi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Xu(t,n,o)}i=i.next}while(i!==r)}}function rl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Zu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function F0(e){var t=e.alternate;t!==null&&(e.alternate=null,F0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Wt],delete t[fo],delete t[Du],delete t[nS],delete t[rS])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function D0(e){return e.tag===5||e.tag===3||e.tag===4}function Lh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||D0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ed(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ra));else if(r!==4&&(e=e.child,e!==null))for(ed(e,t,n),e=e.sibling;e!==null;)ed(e,t,n),e=e.sibling}function td(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(td(e,t,n),e=e.sibling;e!==null;)td(e,t,n),e=e.sibling}var Fe=null,$t=!1;function mn(e,t,n){for(n=n.child;n!==null;)M0(e,t,n),n=n.sibling}function M0(e,t,n){if(Qt&&typeof Qt.onCommitFiberUnmount=="function")try{Qt.onCommitFiberUnmount(Ka,n)}catch{}switch(n.tag){case 5:Ge||Rr(n,t);case 6:var r=Fe,i=$t;Fe=null,mn(e,t,n),Fe=r,$t=i,Fe!==null&&($t?(e=Fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Fe.removeChild(n.stateNode));break;case 18:Fe!==null&&($t?(e=Fe,n=n.stateNode,e.nodeType===8?hc(e.parentNode,n):e.nodeType===1&&hc(e,n),so(e)):hc(Fe,n.stateNode));break;case 4:r=Fe,i=$t,Fe=n.stateNode.containerInfo,$t=!0,mn(e,t,n),Fe=r,$t=i;break;case 0:case 11:case 14:case 15:if(!Ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Xu(n,t,s),i=i.next}while(i!==r)}mn(e,t,n);break;case 1:if(!Ge&&(Rr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Se(n,t,a)}mn(e,t,n);break;case 21:mn(e,t,n);break;case 22:n.mode&1?(Ge=(r=Ge)||n.memoizedState!==null,mn(e,t,n),Ge=r):mn(e,t,n);break;default:mn(e,t,n)}}function Oh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new vS),t.forEach(function(r){var i=LS.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ot(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Fe=a.stateNode,$t=!1;break e;case 3:Fe=a.stateNode.containerInfo,$t=!0;break e;case 4:Fe=a.stateNode.containerInfo,$t=!0;break e}a=a.return}if(Fe===null)throw Error(D(160));M0(o,s,i),Fe=null,$t=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Se(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)_0(t,e),t=t.sibling}function _0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ot(t,e),Mt(e),r&4){try{Qi(3,e,e.return),rl(3,e)}catch(v){Se(e,e.return,v)}try{Qi(5,e,e.return)}catch(v){Se(e,e.return,v)}}break;case 1:Ot(t,e),Mt(e),r&512&&n!==null&&Rr(n,n.return);break;case 5:if(Ot(t,e),Mt(e),r&512&&n!==null&&Rr(n,n.return),e.flags&32){var i=e.stateNode;try{no(i,"")}catch(v){Se(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&lx(i,o),Au(a,s);var u=Au(a,o);for(s=0;s<c.length;s+=2){var d=c[s],p=c[s+1];d==="style"?px(i,p):d==="dangerouslySetInnerHTML"?dx(i,p):d==="children"?no(i,p):Jd(i,d,p,u)}switch(a){case"input":wu(i,o);break;case"textarea":cx(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Br(i,!!o.multiple,g,!1):h!==!!o.multiple&&(o.defaultValue!=null?Br(i,!!o.multiple,o.defaultValue,!0):Br(i,!!o.multiple,o.multiple?[]:"",!1))}i[fo]=o}catch(v){Se(e,e.return,v)}}break;case 6:if(Ot(t,e),Mt(e),r&4){if(e.stateNode===null)throw Error(D(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){Se(e,e.return,v)}}break;case 3:if(Ot(t,e),Mt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{so(t.containerInfo)}catch(v){Se(e,e.return,v)}break;case 4:Ot(t,e),Mt(e);break;case 13:Ot(t,e),Mt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Pf=ke())),r&4&&Oh(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ge=(u=Ge)||d,Ot(t,e),Ge=u):Ot(t,e),Mt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(H=e,d=e.child;d!==null;){for(p=H=d;H!==null;){switch(h=H,g=h.child,h.tag){case 0:case 11:case 14:case 15:Qi(4,h,h.return);break;case 1:Rr(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){Se(r,n,v)}}break;case 5:Rr(h,h.return);break;case 22:if(h.memoizedState!==null){$h(p);continue}}g!==null?(g.return=h,H=g):$h(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,c=p.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=fx("display",s))}catch(v){Se(e,e.return,v)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(v){Se(e,e.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ot(t,e),Mt(e),r&4&&Oh(e);break;case 21:break;default:Ot(t,e),Mt(e)}}function Mt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(D0(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(no(i,""),r.flags&=-33);var o=Lh(e);td(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Lh(e);ed(e,a,s);break;default:throw Error(D(161))}}catch(c){Se(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bS(e,t,n){H=e,U0(e)}function U0(e,t,n){for(var r=(e.mode&1)!==0;H!==null;){var i=H,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||ns;if(!s){var a=i.alternate,c=a!==null&&a.memoizedState!==null||Ge;a=ns;var u=Ge;if(ns=s,(Ge=c)&&!u)for(H=i;H!==null;)s=H,c=s.child,s.tag===22&&s.memoizedState!==null?Rh(i):c!==null?(c.return=s,H=c):Rh(i);for(;o!==null;)H=o,U0(o),o=o.sibling;H=i,ns=a,Ge=u}Ph(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,H=o):Ph(e)}}function Ph(e){for(;H!==null;){var t=H;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ge||rl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ge)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Pt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&hh(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}hh(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&so(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}Ge||t.flags&512&&Zu(t)}catch(h){Se(t,t.return,h)}}if(t===e){H=null;break}if(n=t.sibling,n!==null){n.return=t.return,H=n;break}H=t.return}}function $h(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var n=t.sibling;if(n!==null){n.return=t.return,H=n;break}H=t.return}}function Rh(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rl(4,t)}catch(c){Se(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Se(t,i,c)}}var o=t.return;try{Zu(t)}catch(c){Se(t,o,c)}break;case 5:var s=t.return;try{Zu(t)}catch(c){Se(t,s,c)}}}catch(c){Se(t,t.return,c)}if(t===e){H=null;break}var a=t.sibling;if(a!==null){a.return=t.return,H=a;break}H=t.return}}var SS=Math.ceil,ha=dn.ReactCurrentDispatcher,Lf=dn.ReactCurrentOwner,Ct=dn.ReactCurrentBatchConfig,te=0,Ne=null,Ae=null,De=0,ft=0,zr=Qn(0),Te=0,yo=null,cr=0,il=0,Of=0,Gi=null,ot=null,Pf=0,ti=1/0,Jt=null,ma=!1,nd=null,$n=null,rs=!1,An=null,ga=0,qi=0,rd=null,Ss=-1,ks=0;function Ze(){return te&6?ke():Ss!==-1?Ss:Ss=ke()}function Rn(e){return e.mode&1?te&2&&De!==0?De&-De:oS.transition!==null?(ks===0&&(ks=Ax()),ks):(e=ie,e!==0||(e=window.event,e=e===void 0?16:$x(e.type)),e):1}function Bt(e,t,n,r){if(50<qi)throw qi=0,rd=null,Error(D(185));$o(e,n,r),(!(te&2)||e!==Ne)&&(e===Ne&&(!(te&2)&&(il|=n),Te===4&&Sn(e,De)),ut(e,r),n===1&&te===0&&!(t.mode&1)&&(ti=ke()+500,el&&Gn()))}function ut(e,t){var n=e.callbackNode;ob(e,t);var r=Zs(e,e===Ne?De:0);if(r===0)n!==null&&Up(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Up(n),t===1)e.tag===0?iS(zh.bind(null,e)):Jx(zh.bind(null,e)),eS(function(){!(te&6)&&Gn()}),n=null;else{switch(jx(r)){case 1:n=nf;break;case 4:n=kx;break;case 16:n=Xs;break;case 536870912:n=Cx;break;default:n=Xs}n=Y0(n,W0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function W0(e,t){if(Ss=-1,ks=0,te&6)throw Error(D(327));var n=e.callbackNode;if(_r()&&e.callbackNode!==n)return null;var r=Zs(e,e===Ne?De:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=xa(e,r);else{t=r;var i=te;te|=2;var o=V0();(Ne!==e||De!==t)&&(Jt=null,ti=ke()+500,nr(e,t));do try{AS();break}catch(a){H0(e,a)}while(1);gf(),ha.current=o,te=i,Ae!==null?t=0:(Ne=null,De=0,t=Te)}if(t!==0){if(t===2&&(i=Ou(e),i!==0&&(r=i,t=id(e,i))),t===1)throw n=yo,nr(e,0),Sn(e,r),ut(e,ke()),n;if(t===6)Sn(e,r);else{if(i=e.current.alternate,!(r&30)&&!kS(i)&&(t=xa(e,r),t===2&&(o=Ou(e),o!==0&&(r=o,t=id(e,o))),t===1))throw n=yo,nr(e,0),Sn(e,r),ut(e,ke()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(D(345));case 2:Kn(e,ot,Jt);break;case 3:if(Sn(e,r),(r&130023424)===r&&(t=Pf+500-ke(),10<t)){if(Zs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ze(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Fu(Kn.bind(null,e,ot,Jt),t);break}Kn(e,ot,Jt);break;case 4:if(Sn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Nt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*SS(r/1960))-r,10<r){e.timeoutHandle=Fu(Kn.bind(null,e,ot,Jt),r);break}Kn(e,ot,Jt);break;case 5:Kn(e,ot,Jt);break;default:throw Error(D(329))}}}return ut(e,ke()),e.callbackNode===n?W0.bind(null,e):null}function id(e,t){var n=Gi;return e.current.memoizedState.isDehydrated&&(nr(e,t).flags|=256),e=xa(e,t),e!==2&&(t=ot,ot=n,t!==null&&od(t)),e}function od(e){ot===null?ot=e:ot.push.apply(ot,e)}function kS(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ft(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Sn(e,t){for(t&=~Of,t&=~il,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Nt(t),r=1<<n;e[n]=-1,t&=~r}}function zh(e){if(te&6)throw Error(D(327));_r();var t=Zs(e,0);if(!(t&1))return ut(e,ke()),null;var n=xa(e,t);if(e.tag!==0&&n===2){var r=Ou(e);r!==0&&(t=r,n=id(e,r))}if(n===1)throw n=yo,nr(e,0),Sn(e,t),ut(e,ke()),n;if(n===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kn(e,ot,Jt),ut(e,ke()),null}function $f(e,t){var n=te;te|=1;try{return e(t)}finally{te=n,te===0&&(ti=ke()+500,el&&Gn())}}function ur(e){An!==null&&An.tag===0&&!(te&6)&&_r();var t=te;te|=1;var n=Ct.transition,r=ie;try{if(Ct.transition=null,ie=1,e)return e()}finally{ie=r,Ct.transition=n,te=t,!(te&6)&&Gn()}}function Rf(){ft=zr.current,fe(zr)}function nr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Zb(n)),Ae!==null)for(n=Ae.return;n!==null;){var r=n;switch(pf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ia();break;case 3:Zr(),fe(lt),fe(Ke),Sf();break;case 5:bf(r);break;case 4:Zr();break;case 13:fe(ye);break;case 19:fe(ye);break;case 10:xf(r.type._context);break;case 22:case 23:Rf()}n=n.return}if(Ne=e,Ae=e=zn(e.current,null),De=ft=t,Te=0,yo=null,Of=il=cr=0,ot=Gi=null,Xn!==null){for(t=0;t<Xn.length;t++)if(n=Xn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Xn=null}return e}function H0(e,t){do{var n=Ae;try{if(gf(),vs.current=pa,fa){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}fa=!1}if(lr=0,$e=Ee=ve=null,Vi=!1,mo=0,Lf.current=null,n===null||n.return===null){Te=1,yo=t,Ae=null;break}e:{var o=e,s=n.return,a=n,c=t;if(t=De,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=bh(s);if(g!==null){g.flags&=-257,Sh(g,s,a,o,t),g.mode&1&&wh(o,u,t),t=g,c=u;var y=t.updateQueue;if(y===null){var v=new Set;v.add(c),t.updateQueue=v}else y.add(c);break e}else{if(!(t&1)){wh(o,u,t),zf();break e}c=Error(D(426))}}else if(me&&a.mode&1){var b=bh(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Sh(b,s,a,o,t),hf(ei(c,a));break e}}o=c=ei(c,a),Te!==4&&(Te=2),Gi===null?Gi=[o]:Gi.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var x=E0(o,c,t);ph(o,x);break e;case 1:a=c;var m=o.type,w=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&($n===null||!$n.has(w)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=T0(o,a,t);ph(o,k);break e}}o=o.return}while(o!==null)}G0(n)}catch(A){t=A,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(1)}function V0(){var e=ha.current;return ha.current=pa,e===null?pa:e}function zf(){(Te===0||Te===3||Te===2)&&(Te=4),Ne===null||!(cr&268435455)&&!(il&268435455)||Sn(Ne,De)}function xa(e,t){var n=te;te|=2;var r=V0();(Ne!==e||De!==t)&&(Jt=null,nr(e,t));do try{CS();break}catch(i){H0(e,i)}while(1);if(gf(),te=n,ha.current=r,Ae!==null)throw Error(D(261));return Ne=null,De=0,Te}function CS(){for(;Ae!==null;)Q0(Ae)}function AS(){for(;Ae!==null&&!Yw();)Q0(Ae)}function Q0(e){var t=K0(e.alternate,e,ft);e.memoizedProps=e.pendingProps,t===null?G0(e):Ae=t,Lf.current=null}function G0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=yS(n,t),n!==null){n.flags&=32767,Ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Te=6,Ae=null;return}}else if(n=xS(n,t,ft),n!==null){Ae=n;return}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);Te===0&&(Te=5)}function Kn(e,t,n){var r=ie,i=Ct.transition;try{Ct.transition=null,ie=1,jS(e,t,n,r)}finally{Ct.transition=i,ie=r}return null}function jS(e,t,n,r){do _r();while(An!==null);if(te&6)throw Error(D(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(sb(e,o),e===Ne&&(Ae=Ne=null,De=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||rs||(rs=!0,Y0(Xs,function(){return _r(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ct.transition,Ct.transition=null;var s=ie;ie=1;var a=te;te|=4,Lf.current=null,wS(e,n),_0(n,e),Qb(Bu),ea=!!Nu,Bu=Nu=null,e.current=n,bS(n),Jw(),te=a,ie=s,Ct.transition=o}else e.current=n;if(rs&&(rs=!1,An=e,ga=i),o=e.pendingLanes,o===0&&($n=null),eb(n.stateNode),ut(e,ke()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ma)throw ma=!1,e=nd,nd=null,e;return ga&1&&e.tag!==0&&_r(),o=e.pendingLanes,o&1?e===rd?qi++:(qi=0,rd=e):qi=0,Gn(),null}function _r(){if(An!==null){var e=jx(ga),t=Ct.transition,n=ie;try{if(Ct.transition=null,ie=16>e?16:e,An===null)var r=!1;else{if(e=An,An=null,ga=0,te&6)throw Error(D(331));var i=te;for(te|=4,H=e.current;H!==null;){var o=H,s=o.child;if(H.flags&16){var a=o.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for(H=u;H!==null;){var d=H;switch(d.tag){case 0:case 11:case 15:Qi(8,d,o)}var p=d.child;if(p!==null)p.return=d,H=p;else for(;H!==null;){d=H;var h=d.sibling,g=d.return;if(F0(d),d===u){H=null;break}if(h!==null){h.return=g,H=h;break}H=g}}}var y=o.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var b=v.sibling;v.sibling=null,v=b}while(v!==null)}}H=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,H=s;else e:for(;H!==null;){if(o=H,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Qi(9,o,o.return)}var x=o.sibling;if(x!==null){x.return=o.return,H=x;break e}H=o.return}}var m=e.current;for(H=m;H!==null;){s=H;var w=s.child;if(s.subtreeFlags&2064&&w!==null)w.return=s,H=w;else e:for(s=m;H!==null;){if(a=H,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:rl(9,a)}}catch(A){Se(a,a.return,A)}if(a===s){H=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,H=k;break e}H=a.return}}if(te=i,Gn(),Qt&&typeof Qt.onPostCommitFiberRoot=="function")try{Qt.onPostCommitFiberRoot(Ka,e)}catch{}r=!0}return r}finally{ie=n,Ct.transition=t}}return!1}function Nh(e,t,n){t=ei(n,t),t=E0(e,t,1),e=Pn(e,t,1),t=Ze(),e!==null&&($o(e,1,t),ut(e,t))}function Se(e,t,n){if(e.tag===3)Nh(e,e,n);else for(;t!==null;){if(t.tag===3){Nh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($n===null||!$n.has(r))){e=ei(n,e),e=T0(t,e,1),t=Pn(t,e,1),e=Ze(),t!==null&&($o(t,1,e),ut(t,e));break}}t=t.return}}function ES(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ze(),e.pingedLanes|=e.suspendedLanes&n,Ne===e&&(De&n)===n&&(Te===4||Te===3&&(De&130023424)===De&&500>ke()-Pf?nr(e,0):Of|=n),ut(e,t)}function q0(e,t){t===0&&(e.mode&1?(t=Go,Go<<=1,!(Go&130023424)&&(Go=4194304)):t=1);var n=Ze();e=ln(e,t),e!==null&&($o(e,t,n),ut(e,n))}function TS(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),q0(e,n)}function LS(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(t),q0(e,n)}var K0;K0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||lt.current)at=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return at=!1,gS(e,t,n);at=!!(e.flags&131072)}else at=!1,me&&t.flags&1048576&&Xx(t,aa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;bs(e,t),e=t.pendingProps;var i=Yr(t,Ke.current);Mr(t,n),i=Cf(null,t,r,e,i,n);var o=Af();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ct(r)?(o=!0,oa(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,vf(t),i.updater=tl,t.stateNode=i,i._reactInternals=t,Vu(t,r,e,n),t=qu(null,t,r,!0,o,n)):(t.tag=0,me&&o&&ff(t),Xe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(bs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=PS(r),e=Pt(r,e),i){case 0:t=Gu(null,t,r,e,n);break e;case 1:t=Ah(null,t,r,e,n);break e;case 11:t=kh(null,t,r,e,n);break e;case 14:t=Ch(null,t,r,Pt(r.type,e),n);break e}throw Error(D(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),Gu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),Ah(e,t,r,i,n);case 3:e:{if($0(t),e===null)throw Error(D(387));r=t.pendingProps,o=t.memoizedState,i=o.element,n0(e,t),ua(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=ei(Error(D(423)),t),t=jh(e,t,r,n,i);break e}else if(r!==i){i=ei(Error(D(424)),t),t=jh(e,t,r,n,i);break e}else for(pt=On(t.stateNode.containerInfo.firstChild),ht=t,me=!0,Rt=null,n=s0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jr(),r===i){t=cn(e,t,n);break e}Xe(e,t,r,n)}t=t.child}return t;case 5:return a0(t),e===null&&Uu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Iu(r,i)?s=null:o!==null&&Iu(r,o)&&(t.flags|=32),P0(e,t),Xe(e,t,s,n),t.child;case 6:return e===null&&Uu(t),null;case 13:return R0(e,t,n);case 4:return wf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Xr(t,null,r,n):Xe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),kh(e,t,r,i,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,ce(la,r._currentValue),r._currentValue=s,o!==null)if(Ft(o.value,s)){if(o.children===i.children&&!lt.current){t=cn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=nn(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Wu(o.return,n,t),a.lanes|=n;break}c=c.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(D(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Wu(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Xe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Mr(t,n),i=jt(i),r=r(i),t.flags|=1,Xe(e,t,r,n),t.child;case 14:return r=t.type,i=Pt(r,t.pendingProps),i=Pt(r.type,i),Ch(e,t,r,i,n);case 15:return L0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),bs(e,t),t.tag=1,ct(r)?(e=!0,oa(t)):e=!1,Mr(t,n),i0(t,r,i),Vu(t,r,i,n),qu(null,t,r,!0,e,n);case 19:return z0(e,t,n);case 22:return O0(e,t,n)}throw Error(D(156,t.tag))};function Y0(e,t){return Sx(e,t)}function OS(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(e,t,n,r){return new OS(e,t,n,r)}function Nf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function PS(e){if(typeof e=="function")return Nf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Zd)return 11;if(e===ef)return 14}return 2}function zn(e,t){var n=e.alternate;return n===null?(n=kt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Cs(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Nf(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Cr:return rr(n.children,i,o,t);case Xd:s=8,i|=8;break;case mu:return e=kt(12,n,t,i|2),e.elementType=mu,e.lanes=o,e;case gu:return e=kt(13,n,t,i),e.elementType=gu,e.lanes=o,e;case xu:return e=kt(19,n,t,i),e.elementType=xu,e.lanes=o,e;case ox:return ol(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case rx:s=10;break e;case ix:s=9;break e;case Zd:s=11;break e;case ef:s=14;break e;case yn:s=16,r=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return t=kt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function rr(e,t,n,r){return e=kt(7,e,r,t),e.lanes=n,e}function ol(e,t,n,r){return e=kt(22,e,r,t),e.elementType=ox,e.lanes=n,e.stateNode={isHidden:!1},e}function Sc(e,t,n){return e=kt(6,e,null,t),e.lanes=n,e}function kc(e,t,n){return t=kt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $S(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rc(0),this.expirationTimes=rc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Bf(e,t,n,r,i,o,s,a,c){return e=new $S(e,t,n,a,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=kt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vf(o),e}function RS(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function J0(e){if(!e)return Dn;e=e._reactInternals;e:{if(mr(e)!==e||e.tag!==1)throw Error(D(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ct(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(D(171))}if(e.tag===1){var n=e.type;if(ct(n))return Yx(e,n,t)}return t}function X0(e,t,n,r,i,o,s,a,c){return e=Bf(n,r,!0,e,i,o,s,a,c),e.context=J0(null),n=e.current,r=Ze(),i=Rn(n),o=nn(r,i),o.callback=t??null,Pn(n,o,i),e.current.lanes=i,$o(e,i,r),ut(e,r),e}function sl(e,t,n,r){var i=t.current,o=Ze(),s=Rn(i);return n=J0(n),t.context===null?t.context=n:t.pendingContext=n,t=nn(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Pn(i,t,s),e!==null&&(Bt(e,i,s,o),ys(e,i,s)),s}function ya(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function If(e,t){Bh(e,t),(e=e.alternate)&&Bh(e,t)}function zS(){return null}var Z0=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ff(e){this._internalRoot=e}al.prototype.render=Ff.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(D(409));sl(e,t,null,null)};al.prototype.unmount=Ff.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ur(function(){sl(null,e,null,null)}),t[an]=null}};function al(e){this._internalRoot=e}al.prototype.unstable_scheduleHydration=function(e){if(e){var t=Lx();e={blockedOn:null,target:e,priority:t};for(var n=0;n<bn.length&&t!==0&&t<bn[n].priority;n++);bn.splice(n,0,e),n===0&&Px(e)}};function Df(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ll(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ih(){}function NS(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ya(s);o.call(u)}}var s=X0(t,r,e,0,null,!1,!1,"",Ih);return e._reactRootContainer=s,e[an]=s.current,co(e.nodeType===8?e.parentNode:e),ur(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ya(c);a.call(u)}}var c=Bf(e,0,!1,null,null,!1,!1,"",Ih);return e._reactRootContainer=c,e[an]=c.current,co(e.nodeType===8?e.parentNode:e),ur(function(){sl(t,c,n,r)}),c}function cl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var c=ya(s);a.call(c)}}sl(t,s,e,i)}else s=NS(n,t,e,i,r);return ya(s)}Ex=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Bi(t.pendingLanes);n!==0&&(rf(t,n|1),ut(t,ke()),!(te&6)&&(ti=ke()+500,Gn()))}break;case 13:ur(function(){var r=ln(e,1);if(r!==null){var i=Ze();Bt(r,e,1,i)}}),If(e,1)}};of=function(e){if(e.tag===13){var t=ln(e,134217728);if(t!==null){var n=Ze();Bt(t,e,134217728,n)}If(e,134217728)}};Tx=function(e){if(e.tag===13){var t=Rn(e),n=ln(e,t);if(n!==null){var r=Ze();Bt(n,e,t,r)}If(e,t)}};Lx=function(){return ie};Ox=function(e,t){var n=ie;try{return ie=e,t()}finally{ie=n}};Eu=function(e,t,n){switch(t){case"input":if(wu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Za(r);if(!i)throw Error(D(90));ax(r),wu(r,i)}}}break;case"textarea":cx(e,n);break;case"select":t=n.value,t!=null&&Br(e,!!n.multiple,t,!1)}};gx=$f;xx=ur;var BS={usingClientEntryPoint:!1,Events:[zo,Tr,Za,hx,mx,$f]},Oi={findFiberByHostInstance:Jn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},IS={bundleType:Oi.bundleType,version:Oi.version,rendererPackageName:Oi.rendererPackageName,rendererConfig:Oi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wx(e),e===null?null:e.stateNode},findFiberByHostInstance:Oi.findFiberByHostInstance||zS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var is=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!is.isDisabled&&is.supportsFiber)try{Ka=is.inject(IS),Qt=is}catch{}}xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=BS;xt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Df(t))throw Error(D(200));return RS(e,t,null,n)};xt.createRoot=function(e,t){if(!Df(e))throw Error(D(299));var n=!1,r="",i=Z0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Bf(e,1,!1,null,null,n,!1,r,i),e[an]=t.current,co(e.nodeType===8?e.parentNode:e),new Ff(t)};xt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=wx(t),e=e===null?null:e.stateNode,e};xt.flushSync=function(e){return ur(e)};xt.hydrate=function(e,t,n){if(!ll(t))throw Error(D(200));return cl(null,e,t,!0,n)};xt.hydrateRoot=function(e,t,n){if(!Df(e))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Z0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=X0(t,null,e,1,n??null,i,!1,o,s),e[an]=t.current,co(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new al(t)};xt.render=function(e,t,n){if(!ll(t))throw Error(D(200));return cl(null,e,t,!1,n)};xt.unmountComponentAtNode=function(e){if(!ll(e))throw Error(D(40));return e._reactRootContainer?(ur(function(){cl(null,null,e,!1,function(){e._reactRootContainer=null,e[an]=null})}),!0):!1};xt.unstable_batchedUpdates=$f;xt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ll(n))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return cl(e,t,n,!1,r)};xt.version="18.2.0-next-9e3b772b8-20220608";function ey(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ey)}catch(e){console.error(e)}}ey(),Xg.exports=xt;var ty=Xg.exports,Fh=ty;pu.createRoot=Fh.createRoot,pu.hydrateRoot=Fh.hydrateRoot;var ze=function(){return ze=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ze.apply(this,arguments)};function ni(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var de="-ms-",Ki="-moz-",re="-webkit-",ny="comm",ul="rule",Mf="decl",FS="@import",ry="@keyframes",DS="@layer",MS=Math.abs,_f=String.fromCharCode,sd=Object.assign;function _S(e,t){return Re(e,0)^45?(((t<<2^Re(e,0))<<2^Re(e,1))<<2^Re(e,2))<<2^Re(e,3):0}function iy(e){return e.trim()}function Xt(e,t){return(e=t.exec(e))?e[0]:e}function K(e,t,n){return e.replace(t,n)}function As(e,t){return e.indexOf(t)}function Re(e,t){return e.charCodeAt(t)|0}function ri(e,t,n){return e.slice(t,n)}function Ut(e){return e.length}function oy(e){return e.length}function Fi(e,t){return t.push(e),e}function US(e,t){return e.map(t).join("")}function Dh(e,t){return e.filter(function(n){return!Xt(n,t)})}var dl=1,ii=1,sy=0,Tt=0,Ce=0,gi="";function fl(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:dl,column:ii,length:s,return:"",siblings:a}}function xn(e,t){return sd(fl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function vr(e){for(;e.root;)e=xn(e.root,{children:[e]});Fi(e,e.siblings)}function WS(){return Ce}function HS(){return Ce=Tt>0?Re(gi,--Tt):0,ii--,Ce===10&&(ii=1,dl--),Ce}function It(){return Ce=Tt<sy?Re(gi,Tt++):0,ii++,Ce===10&&(ii=1,dl++),Ce}function ir(){return Re(gi,Tt)}function js(){return Tt}function pl(e,t){return ri(gi,e,t)}function ad(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function VS(e){return dl=ii=1,sy=Ut(gi=e),Tt=0,[]}function QS(e){return gi="",e}function Cc(e){return iy(pl(Tt-1,ld(e===91?e+2:e===40?e+1:e)))}function GS(e){for(;(Ce=ir())&&Ce<33;)It();return ad(e)>2||ad(Ce)>3?"":" "}function qS(e,t){for(;--t&&It()&&!(Ce<48||Ce>102||Ce>57&&Ce<65||Ce>70&&Ce<97););return pl(e,js()+(t<6&&ir()==32&&It()==32))}function ld(e){for(;It();)switch(Ce){case e:return Tt;case 34:case 39:e!==34&&e!==39&&ld(Ce);break;case 40:e===41&&ld(e);break;case 92:It();break}return Tt}function KS(e,t){for(;It()&&e+Ce!==47+10;)if(e+Ce===42+42&&ir()===47)break;return"/*"+pl(t,Tt-1)+"*"+_f(e===47?e:It())}function YS(e){for(;!ad(ir());)It();return pl(e,Tt)}function JS(e){return QS(Es("",null,null,null,[""],e=VS(e),0,[0],e))}function Es(e,t,n,r,i,o,s,a,c){for(var u=0,d=0,p=s,h=0,g=0,y=0,v=1,b=1,x=1,m=0,w="",k=i,A=o,C=r,j=w;b;)switch(y=m,m=It()){case 40:if(y!=108&&Re(j,p-1)==58){As(j+=K(Cc(m),"&","&\f"),"&\f")!=-1&&(x=-1);break}case 34:case 39:case 91:j+=Cc(m);break;case 9:case 10:case 13:case 32:j+=GS(y);break;case 92:j+=qS(js()-1,7);continue;case 47:switch(ir()){case 42:case 47:Fi(XS(KS(It(),js()),t,n,c),c);break;default:j+="/"}break;case 123*v:a[u++]=Ut(j)*x;case 125*v:case 59:case 0:switch(m){case 0:case 125:b=0;case 59+d:x==-1&&(j=K(j,/\f/g,"")),g>0&&Ut(j)-p&&Fi(g>32?_h(j+";",r,n,p-1,c):_h(K(j," ","")+";",r,n,p-2,c),c);break;case 59:j+=";";default:if(Fi(C=Mh(j,t,n,u,d,i,a,w,k=[],A=[],p,o),o),m===123)if(d===0)Es(j,t,C,C,k,o,p,a,A);else switch(h===99&&Re(j,3)===110?100:h){case 100:case 108:case 109:case 115:Es(e,C,C,r&&Fi(Mh(e,C,C,0,0,i,a,w,i,k=[],p,A),A),i,A,p,a,r?k:A);break;default:Es(j,C,C,C,[""],A,0,a,A)}}u=d=g=0,v=x=1,w=j="",p=s;break;case 58:p=1+Ut(j),g=y;default:if(v<1){if(m==123)--v;else if(m==125&&v++==0&&HS()==125)continue}switch(j+=_f(m),m*v){case 38:x=d>0?1:(j+="\f",-1);break;case 44:a[u++]=(Ut(j)-1)*x,x=1;break;case 64:ir()===45&&(j+=Cc(It())),h=ir(),d=p=Ut(w=j+=YS(js())),m++;break;case 45:y===45&&Ut(j)==2&&(v=0)}}return o}function Mh(e,t,n,r,i,o,s,a,c,u,d,p){for(var h=i-1,g=i===0?o:[""],y=oy(g),v=0,b=0,x=0;v<r;++v)for(var m=0,w=ri(e,h+1,h=MS(b=s[v])),k=e;m<y;++m)(k=iy(b>0?g[m]+" "+w:K(w,/&\f/g,g[m])))&&(c[x++]=k);return fl(e,t,n,i===0?ul:a,c,u,d,p)}function XS(e,t,n,r){return fl(e,t,n,ny,_f(WS()),ri(e,2,-2),0,r)}function _h(e,t,n,r,i){return fl(e,t,n,Mf,ri(e,0,r),ri(e,r+1,-1),r,i)}function ay(e,t,n){switch(_S(e,t)){case 5103:return re+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return re+e+e;case 4789:return Ki+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return re+e+Ki+e+de+e+e;case 5936:switch(Re(e,t+11)){case 114:return re+e+de+K(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return re+e+de+K(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return re+e+de+K(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return re+e+de+e+e;case 6165:return re+e+de+"flex-"+e+e;case 5187:return re+e+K(e,/(\w+).+(:[^]+)/,re+"box-$1$2"+de+"flex-$1$2")+e;case 5443:return re+e+de+"flex-item-"+K(e,/flex-|-self/g,"")+(Xt(e,/flex-|baseline/)?"":de+"grid-row-"+K(e,/flex-|-self/g,""))+e;case 4675:return re+e+de+"flex-line-pack"+K(e,/align-content|flex-|-self/g,"")+e;case 5548:return re+e+de+K(e,"shrink","negative")+e;case 5292:return re+e+de+K(e,"basis","preferred-size")+e;case 6060:return re+"box-"+K(e,"-grow","")+re+e+de+K(e,"grow","positive")+e;case 4554:return re+K(e,/([^-])(transform)/g,"$1"+re+"$2")+e;case 6187:return K(K(K(e,/(zoom-|grab)/,re+"$1"),/(image-set)/,re+"$1"),e,"")+e;case 5495:case 3959:return K(e,/(image-set\([^]*)/,re+"$1$`$1");case 4968:return K(K(e,/(.+:)(flex-)?(.*)/,re+"box-pack:$3"+de+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+re+e+e;case 4200:if(!Xt(e,/flex-|baseline/))return de+"grid-column-align"+ri(e,t)+e;break;case 2592:case 3360:return de+K(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Xt(r.props,/grid-\w+-end/)})?~As(e+(n=n[t].value),"span")?e:de+K(e,"-start","")+e+de+"grid-row-span:"+(~As(n,"span")?Xt(n,/\d+/):+Xt(n,/\d+/)-+Xt(e,/\d+/))+";":de+K(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Xt(r.props,/grid-\w+-start/)})?e:de+K(K(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return K(e,/(.+)-inline(.+)/,re+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ut(e)-1-t>6)switch(Re(e,t+1)){case 109:if(Re(e,t+4)!==45)break;case 102:return K(e,/(.+:)(.+)-([^]+)/,"$1"+re+"$2-$3$1"+Ki+(Re(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~As(e,"stretch")?ay(K(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return K(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,c,u){return de+i+":"+o+u+(s?de+i+"-span:"+(a?c:+c-+o)+u:"")+e});case 4949:if(Re(e,t+6)===121)return K(e,":",":"+re)+e;break;case 6444:switch(Re(e,Re(e,14)===45?18:11)){case 120:return K(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+re+(Re(e,14)===45?"inline-":"")+"box$3$1"+re+"$2$3$1"+de+"$2box$3")+e;case 100:return K(e,":",":"+de)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return K(e,"scroll-","scroll-snap-")+e}return e}function va(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function ZS(e,t,n,r){switch(e.type){case DS:if(e.children.length)break;case FS:case Mf:return e.return=e.return||e.value;case ny:return"";case ry:return e.return=e.value+"{"+va(e.children,r)+"}";case ul:if(!Ut(e.value=e.props.join(",")))return""}return Ut(n=va(e.children,r))?e.return=e.value+"{"+n+"}":""}function ek(e){var t=oy(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function tk(e){return function(t){t.root||(t=t.return)&&e(t)}}function nk(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Mf:e.return=ay(e.value,e.length,n);return;case ry:return va([xn(e,{value:K(e.value,"@","@"+re)})],r);case ul:if(e.length)return US(n=e.props,function(i){switch(Xt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":vr(xn(e,{props:[K(i,/:(read-\w+)/,":"+Ki+"$1")]})),vr(xn(e,{props:[i]})),sd(e,{props:Dh(n,r)});break;case"::placeholder":vr(xn(e,{props:[K(i,/:(plac\w+)/,":"+re+"input-$1")]})),vr(xn(e,{props:[K(i,/:(plac\w+)/,":"+Ki+"$1")]})),vr(xn(e,{props:[K(i,/:(plac\w+)/,de+"input-$1")]})),vr(xn(e,{props:[i]})),sd(e,{props:Dh(n,r)});break}return""})}}var rk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},oi=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Uf=typeof window<"u"&&"HTMLElement"in window,ik=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),ok={},Wf=Object.freeze([]),si=Object.freeze({});function ly(e,t,n){return n===void 0&&(n=si),e.theme!==n.theme&&e.theme||t||n.theme}var cy=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),sk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ak=/(^-|-$)/g;function Uh(e){return e.replace(sk,"-").replace(ak,"")}var lk=/(a)(d)/gi,Wh=function(e){return String.fromCharCode(e+(e>25?39:97))};function cd(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Wh(t%52)+n;return(Wh(t%52)+n).replace(lk,"$1-$2")}var Ac,Nr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},uy=function(e){return Nr(5381,e)};function Hf(e){return cd(uy(e)>>>0)}function ck(e){return e.displayName||e.name||"Component"}function jc(e){return typeof e=="string"&&!0}var dy=typeof Symbol=="function"&&Symbol.for,fy=dy?Symbol.for("react.memo"):60115,uk=dy?Symbol.for("react.forward_ref"):60112,dk={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},fk={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},py={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},pk=((Ac={})[uk]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ac[fy]=py,Ac);function Hh(e){return("type"in(t=e)&&t.type.$$typeof)===fy?py:"$$typeof"in e?pk[e.$$typeof]:dk;var t}var hk=Object.defineProperty,mk=Object.getOwnPropertyNames,Vh=Object.getOwnPropertySymbols,gk=Object.getOwnPropertyDescriptor,xk=Object.getPrototypeOf,Qh=Object.prototype;function hy(e,t,n){if(typeof t!="string"){if(Qh){var r=xk(t);r&&r!==Qh&&hy(e,r,n)}var i=mk(t);Vh&&(i=i.concat(Vh(t)));for(var o=Hh(e),s=Hh(t),a=0;a<i.length;++a){var c=i[a];if(!(c in fk||n&&n[c]||s&&c in s||o&&c in o)){var u=gk(t,c);try{hk(e,c,u)}catch{}}}}return e}function dr(e){return typeof e=="function"}function Vf(e){return typeof e=="object"&&"styledComponentId"in e}function er(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function wa(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function vo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ud(e,t,n){if(n===void 0&&(n=!1),!n&&!vo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ud(e[r],t[r]);else if(vo(t))for(var r in t)e[r]=ud(e[r],t[r]);return e}function Qf(e,t){Object.defineProperty(e,"toString",{value:t})}function Mn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var yk=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Mn(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),c=(s=0,n.length);s<c;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(`/*!sc*/
`);return n},e}(),Ts=new Map,ba=new Map,Ec=1,os=function(e){if(Ts.has(e))return Ts.get(e);for(;ba.has(Ec);)Ec++;var t=Ec++;return Ts.set(e,t),ba.set(t,e),t},vk=function(e,t){Ts.set(e,t),ba.set(t,e)},wk="style[".concat(oi,"][").concat("data-styled-version",'="').concat("6.0.1",'"]'),bk=new RegExp("^".concat(oi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Sk=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},kk=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var c=a.match(bk);if(c){var u=0|parseInt(c[1],10),d=c[2];u!==0&&(vk(d,u),Sk(e,d,c[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function Ck(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var my=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){return Array.from(a.querySelectorAll("style[".concat(oi,"]"))).at(-1)}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(oi,"active"),r.setAttribute("data-styled-version","6.0.1");var s=Ck();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},Ak=function(){function e(t){this.element=my(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Mn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),jk=function(){function e(t){this.element=my(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Ek=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Gh=Uf,Tk={isServer:!Uf,useCSSOMInjection:!ik},Sa=function(){function e(t,n,r){t===void 0&&(t=si),n===void 0&&(n={});var i=this;this.options=ze(ze({},Tk),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Uf&&Gh&&(Gh=!1,function(o){for(var s=document.querySelectorAll(wk),a=0,c=s.length;a<c;a++){var u=s[a];u&&u.getAttribute(oi)!=="active"&&(kk(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Qf(this,function(){return function(o){for(var s=o.getTag(),a=s.length,c="",u=function(p){var h=function(x){return ba.get(x)}(p);if(h===void 0)return"continue";var g=o.names.get(h),y=s.getGroup(p);if(g===void 0||y.length===0)return"continue";var v="".concat(oi,".g").concat(p,'[id="').concat(h,'"]'),b="";g!==void 0&&g.forEach(function(x){x.length>0&&(b+="".concat(x,","))}),c+="".concat(y).concat(v,'{content:"').concat(b,'"}').concat(`/*!sc*/
`)},d=0;d<a;d++)u(d);return c}(i)})}return e.registerId=function(t){return os(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ze(ze({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Ek(i):r?new Ak(i):new jk(i)}(this.options),new yk(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(os(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(os(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(os(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Lk=/&/g,Ok=/^\s*\/\/.*$/gm;function gy(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=gy(n.children,t)),n})}function Pk(e){var t,n,r,i=e===void 0?si:e,o=i.options,s=o===void 0?si:o,a=i.plugins,c=a===void 0?Wf:a,u=function(h,g,y){return y===n||y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):h},d=c.slice();d.push(function(h){h.type===ul&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(Lk,n).replace(r,u))}),s.prefix&&d.push(nk),d.push(ZS);var p=function(h,g,y,v){g===void 0&&(g=""),y===void 0&&(y=""),v===void 0&&(v="&"),t=v,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var b=h.replace(Ok,""),x=JS(y||g?"".concat(y," ").concat(g," { ").concat(b," }"):b);s.namespace&&(x=gy(x,s.namespace));var m=[];return va(x,ek(d.concat(tk(function(w){return m.push(w)})))),m};return p.hash=c.length?c.reduce(function(h,g){return g.name||Mn(15),Nr(h,g.name)},5381).toString():"",p}var $k=new Sa,dd=Pk(),xy=st.createContext({shouldForwardProp:void 0,styleSheet:$k,stylis:dd});xy.Consumer;st.createContext(void 0);function fd(){return S.useContext(xy)}var yy=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=dd);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Qf(this,function(){throw Mn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=dd),this.name+t.hash},e}(),Rk=function(e){return e>="A"&&e<="Z"};function qh(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Rk(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var vy=function(e){return e==null||e===!1||e===""},wy=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!vy(o)&&(Array.isArray(o)&&o.isCss||dr(o)?r.push("".concat(qh(i),":"),o,";"):vo(o)?r.push.apply(r,ni(ni(["".concat(i," {")],wy(o),!1),["}"],!1)):r.push("".concat(qh(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in rk||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Nn(e,t,n,r){if(vy(e))return[];if(Vf(e))return[".".concat(e.styledComponentId)];if(dr(e)){if(!dr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Nn(i,t,n,r)}var o;return e instanceof yy?n?(e.inject(n,r),[e.getName(r)]):[e]:vo(e)?wy(e):Array.isArray(e)?e.flatMap(function(s){return Nn(s,t,n,r)}):[e.toString()]}function by(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(dr(n)&&!Vf(n))return!1}return!0}var zk=uy("6.0.1"),Nk=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&by(t),this.componentId=n,this.baseHash=Nr(zk,n),this.baseStyle=r,Sa.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=er(i,this.staticRulesId);else{var o=wa(Nn(this.rules,t,n,r)),s=cd(Nr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=er(i,s),this.staticRulesId=s}else{for(var c=Nr(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var p=this.rules[d];if(typeof p=="string")u+=p;else if(p){var h=wa(Nn(p,t,n,r));c=Nr(c,h),u+=h}}if(u){var g=cd(c>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=er(i,g)}}return i},e}(),ai=st.createContext(void 0);ai.Consumer;function xi(){var e=S.useContext(ai);if(!e)throw Mn(18);return e}function Bk(e){var t=st.useContext(ai),n=S.useMemo(function(){return function(r,i){if(!r)throw Mn(14);if(dr(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw Mn(8);return i?ze(ze({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?st.createElement(ai.Provider,{value:n},e.children):null}var Tc={};function Ik(e,t,n){var r=Vf(e),i=e,o=!jc(e),s=t.attrs,a=s===void 0?Wf:s,c=t.componentId,u=c===void 0?function(k,A){var C=typeof k!="string"?"sc":Uh(k);Tc[C]=(Tc[C]||0)+1;var j="".concat(C,"-").concat(Hf("6.0.1"+C+Tc[C]));return A?"".concat(A,"-").concat(j):j}(t.displayName,t.parentComponentId):c,d=t.displayName,p=d===void 0?function(k){return jc(k)?"styled.".concat(k):"Styled(".concat(ck(k),")")}(e):d,h=t.displayName&&t.componentId?"".concat(Uh(t.displayName),"-").concat(t.componentId):t.componentId||u,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(t.shouldForwardProp){var b=t.shouldForwardProp;y=function(k,A){return v(k,A)&&b(k,A)}}else y=v}var x=new Nk(n,h,r?i.componentStyle:void 0);x.isStatic&&a.length;function m(k,A){return function(C,j,T,O){var P=C.attrs,E=C.componentStyle,z=C.defaultProps,B=C.foldedComponentIds,M=C.styledComponentId,I=C.target,_=st.useContext(ai),$=fd(),L=C.shouldForwardProp||$.shouldForwardProp,F=function(Dt,Ye,rt){for(var pn,Yt=ze(ze({},Ye),{className:void 0,theme:rt}),Si=0;Si<Dt.length;Si+=1){var xr=dr(pn=Dt[Si])?pn(Yt):pn;for(var hn in xr)Yt[hn]=hn==="className"?er(Yt[hn],xr[hn]):hn==="style"?ze(ze({},Yt[hn]),xr[hn]):xr[hn]}return Ye.className&&(Yt.className=er(Yt.className,Ye.className)),Yt}(P,j,ly(j,_,z)||si),N=F.as||I,V={};for(var G in F)F[G]===void 0||G[0]==="$"||G==="as"||G==="theme"||(G==="forwardedAs"?V.as=F.forwardedAs:L&&!L(G,N)||(V[G]=F[G]));var ge=function(Dt,Ye){var rt=fd(),pn=Dt.generateAndInjectStyles(Ye,rt.styleSheet,rt.stylis);return pn}(E,F),be=er(B,M);return ge&&(be+=" "+ge),F.className&&(be+=" "+F.className),V[jc(N)&&!cy.has(N)?"class":"className"]=be,V.ref=T,S.createElement(N,V)}(w,k,A)}m.displayName=p;var w=st.forwardRef(m);return w.attrs=g,w.componentStyle=x,w.displayName=p,w.shouldForwardProp=y,w.foldedComponentIds=r?er(i.foldedComponentIds,i.styledComponentId):"",w.styledComponentId=h,w.target=r?i.target:e,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=r?function(A){for(var C=[],j=1;j<arguments.length;j++)C[j-1]=arguments[j];for(var T=0,O=C;T<O.length;T++)ud(A,O[T],!0);return A}({},i.defaultProps,k):k}}),Qf(w,function(){return".".concat(w.styledComponentId)}),o&&hy(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Kh(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Yh=function(e){return Object.assign(e,{isCss:!0})};function fr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(dr(e)||vo(e)){var r=e;return Yh(Nn(Kh(Wf,ni([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?Nn(i):Yh(Nn(Kh(i,t)))}function pd(e,t,n){if(n===void 0&&(n=si),!t)throw Mn(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,fr.apply(void 0,ni([i],o,!1)))};return r.attrs=function(i){return pd(e,t,ze(ze({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return pd(e,t,ze(ze({},n),i))},r}var Sy=function(e){return pd(Ik,e)},f=Sy;cy.forEach(function(e){f[e]=Sy(e)});var Fk=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=by(t),Sa.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(wa(Nn(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Sa.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function Dk(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=fr.apply(void 0,ni([e],t,!1)),i="sc-global-".concat(Hf(JSON.stringify(r))),o=new Fk(r,i),s=function(c){var u=fd(),d=st.useContext(ai),p=st.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(p,c,u.styleSheet,d,u.stylis),(st.useInsertionEffect||st.useLayoutEffect)(function(){if(!u.styleSheet.server)return a(p,c,u.styleSheet,d,u.stylis),function(){return o.removeStyles(p,u.styleSheet)}},[p,c,u.styleSheet,d,u.stylis]),null};function a(c,u,d,p,h){if(o.isStatic)o.renderStyles(c,ok,d,h);else{var g=ze(ze({},u),{theme:ly(u,p,s.defaultProps)});o.renderStyles(c,g,d,h)}}return st.memo(s)}function dt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=wa(fr.apply(void 0,ni([e],t,!1))),i=Hf(r);return new yy(i,r)}const hl={background:"#000000",text:"#ffffff",primary:"#FD5602",secondary:"#FE6E00",tertiary:"#FEDEBE",tertiaryTone:"#fedebea9",buttonBack:"F3C699",formBoxShadow:"-3px -3px 7px #404040, 2px 2px 5px rgba(200, 200, 200, 0.5)",inputBoxShadow:"inset 2px 2px 5px #EFEFEF, inset -5px -5px 10px #FCFCFC",localizationBoxShadow:"inset 2px 2px 5px #EFEFEF, inset -2px -2px 5px #FCFCFC",vocabularyBack:"#ffffec",flagFirst:"#1e1e1e",flagSecond:"#fdda24",flagThird:"#EF4135",flagAddon:"#fdda24",backTone:"#555555",textTone:"#e6e6e6",textTone2:"#cccccc",primaryBackground:"#191919",secondaryBackground:"#333333",tertiaryBackground:"#4c4c4c",primaryText:"#ffffff",secondaryText:"#b3b3b3",tertiaryText:"#808080",highlight1:"#FF00FF",highlight2:"#FFA500",highlight3:"#0000FF",highlight4:"#60c5d9",highlight5:"#ffffff",correctBack:"#70ff41",wrongback:"#DC143C",facebookLogo:"#000000",facebookBack:"#3b5998",facebookText:"#fcfcfd",extraSmall:"0.9rem",small:"1rem",mediumSmall:"1.2rem",medium:"1.4rem",large:"1.6rem",extraLarge:"2rem",mega:"2.4rem",extraMega:"3rem",smallLineHeight:"1.2",mediumLineHeight:"1.3",mediumSmallLineHeight:"1.4",extraMediumLineHeight:"1.5",largeLineHeight:"1.6",extraLargeLineHeight:"1.8",smallLetterSpacing:"0.03rem",mediumLetterSpacing:"0.04rem",largeLetterSpacing:"0.05rem",extraLargeLetterSpacing:"0.06rem",megaLetterSpacing:"0.07rem",extraMegaLetterSpacing:"0.08rem"},Mk={background:"#ffffff",text:"1e1e1e",buttonBack:"#0c76f0",primary:"#002EB8",secondary:"#0055a4dd",tertiary:"#809fff",tertiaryTone:"#80a0ffb5",formBoxShadow:"-3px -3px 7px #e8e8e8, 2px 2px 5px rgba(200, 200, 200, 0.5)",inputBoxShadow:"inset 2px 2px 5px #FCFCFC, inset -5px -5px 10px #737373",localizationBoxShadow:"inset 2px 2px 5px #FCFCFC, inset -2px -2px 5px #737373",vocabularyBack:"#ffffdd",flagFirst:"#0055A4",flagSecond:"#FFFFFF",flagThird:"#EF4135",flagAddon:"#f5f5f5",backTone:"#e6e6e6",textTone:"#191919",textTone2:"#333333",primaryBackground:"#ffffff",secondaryBackground:"#f6f6f6",tertiaryBackground:"#cccccc",primaryText:"#333333",secondaryText:"#666666",tertiaryText:"#999999",highlight1:"#f5f3e0",highlight2:"#e0eaf1",highlight3:"#acc8e5",highlight4:"#FFA500",highlight5:"#000000",correctBack:"#70ff41",wrongback:"#DC143C",facebookLogo:"#083F87",facebookBack:"#fcfcfd",facebookText:"#3b5998",extraSmall:"0.9rem",small:"1rem",mediumSmall:"1.2rem",medium:"1.4rem",large:"1.6rem",extraLarge:"2rem",mega:"2.4rem",extraMega:"3rem",smallLineHeight:"1.2",mediumLineHeight:"1.3",mediumSmallLineHeight:"1.4",extraMediumLineHeight:"1.5",largeLineHeight:"1.6",extraLargeLineHeight:"1.8",smallLetterSpacing:"0.03rem",mediumLetterSpacing:"0.04rem",largeLetterSpacing:"0.05rem",extraLargeLetterSpacing:"0.06rem",megaLetterSpacing:"0.07rem",extraMegaLetterSpacing:"0.08rem"};/**
 * @remix-run/router v1.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wo(){return wo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wo.apply(this,arguments)}var jn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(jn||(jn={}));const Jh="popstate";function _k(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return hd("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ka(i)}return Wk(t,n,null,e)}function je(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Gf(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Uk(){return Math.random().toString(36).substr(2,8)}function Xh(e,t){return{usr:e.state,key:e.key,idx:t}}function hd(e,t,n,r){return n===void 0&&(n=null),wo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?yi(t):t,{state:n,key:t&&t.key||r||Uk()})}function ka(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function yi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Wk(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=jn.Pop,c=null,u=d();u==null&&(u=0,s.replaceState(wo({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function p(){a=jn.Pop;let b=d(),x=b==null?null:b-u;u=b,c&&c({action:a,location:v.location,delta:x})}function h(b,x){a=jn.Push;let m=hd(v.location,b,x);n&&n(m,b),u=d()+1;let w=Xh(m,u),k=v.createHref(m);try{s.pushState(w,"",k)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;i.location.assign(k)}o&&c&&c({action:a,location:v.location,delta:1})}function g(b,x){a=jn.Replace;let m=hd(v.location,b,x);n&&n(m,b),u=d();let w=Xh(m,u),k=v.createHref(m);s.replaceState(w,"",k),o&&c&&c({action:a,location:v.location,delta:0})}function y(b){let x=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof b=="string"?b:ka(b);return je(x,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,x)}let v={get action(){return a},get location(){return e(i,s)},listen(b){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Jh,p),c=b,()=>{i.removeEventListener(Jh,p),c=null}},createHref(b){return t(i,b)},createURL:y,encodeLocation(b){let x=y(b);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:h,replace:g,go(b){return s.go(b)}};return v}var Zh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Zh||(Zh={}));function Hk(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?yi(t):t,i=qf(r.pathname||"/",n);if(i==null)return null;let o=ky(e);Vk(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=eC(o[a],rC(i));return s}function ky(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let c={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};c.relativePath.startsWith("/")&&(je(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Bn([r,c.relativePath]),d=n.concat(c);o.children&&o.children.length>0&&(je(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),ky(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Xk(u,o.index),routesMeta:d})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let c of Cy(o.path))i(o,s,c)}),t}function Cy(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Cy(r.join("/")),a=[];return a.push(...s.map(c=>c===""?o:[o,c].join("/"))),i&&a.push(...s),a.map(c=>e.startsWith("/")&&c===""?"/":c)}function Vk(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Zk(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Qk=/^:\w+$/,Gk=3,qk=2,Kk=1,Yk=10,Jk=-2,em=e=>e==="*";function Xk(e,t){let n=e.split("/"),r=n.length;return n.some(em)&&(r+=Jk),t&&(r+=qk),n.filter(i=>!em(i)).reduce((i,o)=>i+(Qk.test(o)?Gk:o===""?Kk:Yk),r)}function Zk(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function eC(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],c=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=tC({path:a.relativePath,caseSensitive:a.caseSensitive,end:c},u);if(!d)return null;Object.assign(r,d.params);let p=a.route;o.push({params:r,pathname:Bn([i,d.pathname]),pathnameBase:aC(Bn([i,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(i=Bn([i,d.pathnameBase]))}return o}function tC(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=nC(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,p)=>{if(d==="*"){let h=a[p]||"";s=o.slice(0,o.length-h.length).replace(/(.)\/+$/,"$1")}return u[d]=iC(a[p]||"",d),u},{}),pathname:o,pathnameBase:s,pattern:e}}function nC(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Gf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function rC(e){try{return decodeURI(e)}catch(t){return Gf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function iC(e,t){try{return decodeURIComponent(e)}catch(n){return Gf(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function qf(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function oC(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?yi(e):e;return{pathname:n?n.startsWith("/")?n:sC(n,t):t,search:lC(r),hash:cC(i)}}function sC(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Lc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ay(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function jy(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=yi(e):(i=wo({},e),je(!i.pathname||!i.pathname.includes("?"),Lc("?","pathname","search",i)),je(!i.pathname||!i.pathname.includes("#"),Lc("#","pathname","hash",i)),je(!i.search||!i.search.includes("#"),Lc("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let p=t.length-1;if(s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),p-=1;i.pathname=h.join("/")}a=p>=0?t[p]:"/"}let c=oC(i,a),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Bn=e=>e.join("/").replace(/\/\/+/g,"/"),aC=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),lC=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,cC=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function uC(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ey=["post","put","patch","delete"];new Set(Ey);const dC=["get",...Ey];new Set(dC);/**
 * React Router v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ca(){return Ca=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ca.apply(this,arguments)}const Kf=S.createContext(null),fC=S.createContext(null),vi=S.createContext(null),ml=S.createContext(null),fn=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Ty=S.createContext(null);function pC(e,t){let{relative:n}=t===void 0?{}:t;Bo()||je(!1);let{basename:r,navigator:i}=S.useContext(vi),{hash:o,pathname:s,search:a}=Oy(e,{relative:n}),c=s;return r!=="/"&&(c=s==="/"?r:Bn([r,s])),i.createHref({pathname:c,search:a,hash:o})}function Bo(){return S.useContext(ml)!=null}function gr(){return Bo()||je(!1),S.useContext(ml).location}function Ly(e){S.useContext(vi).static||S.useLayoutEffect(e)}function Yf(){let{isDataRoute:e}=S.useContext(fn);return e?TC():hC()}function hC(){Bo()||je(!1);let e=S.useContext(Kf),{basename:t,navigator:n}=S.useContext(vi),{matches:r}=S.useContext(fn),{pathname:i}=gr(),o=JSON.stringify(Ay(r).map(c=>c.pathnameBase)),s=S.useRef(!1);return Ly(()=>{s.current=!0}),S.useCallback(function(c,u){if(u===void 0&&(u={}),!s.current)return;if(typeof c=="number"){n.go(c);return}let d=jy(c,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Bn([t,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,o,i,e])}const mC=S.createContext(null);function gC(e){let t=S.useContext(fn).outlet;return t&&S.createElement(mC.Provider,{value:e},t)}function _n(){let{matches:e}=S.useContext(fn),t=e[e.length-1];return t?t.params:{}}function Oy(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=S.useContext(fn),{pathname:i}=gr(),o=JSON.stringify(Ay(r).map(s=>s.pathnameBase));return S.useMemo(()=>jy(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function xC(e,t){return yC(e,t)}function yC(e,t,n){Bo()||je(!1);let{navigator:r}=S.useContext(vi),{matches:i}=S.useContext(fn),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let c=gr(),u;if(t){var d;let v=typeof t=="string"?yi(t):t;a==="/"||(d=v.pathname)!=null&&d.startsWith(a)||je(!1),u=v}else u=c;let p=u.pathname||"/",h=a==="/"?p:p.slice(a.length)||"/",g=Hk(e,{pathname:h}),y=kC(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},s,v.params),pathname:Bn([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:Bn([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return t&&y?S.createElement(ml.Provider,{value:{location:Ca({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:jn.Pop}},y):y}function vC(){let e=EC(),t=uC(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:i},n):null,o)}const wC=S.createElement(vC,null);class bC extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?S.createElement(fn.Provider,{value:this.props.routeContext},S.createElement(Ty.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function SC(e){let{routeContext:t,match:n,children:r}=e,i=S.useContext(Kf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(fn.Provider,{value:t},r)}function kC(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,s=(r=n)==null?void 0:r.errors;if(s!=null){let a=o.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id]));a>=0||je(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,c,u)=>{let d=c.route.id?s==null?void 0:s[c.route.id]:null,p=null;n&&(p=c.route.errorElement||wC);let h=t.concat(o.slice(0,u+1)),g=()=>{let y;return d?y=p:c.route.Component?y=S.createElement(c.route.Component,null):c.route.element?y=c.route.element:y=a,S.createElement(SC,{match:c,routeContext:{outlet:a,matches:h,isDataRoute:n!=null},children:y})};return n&&(c.route.ErrorBoundary||c.route.errorElement||u===0)?S.createElement(bC,{location:n.location,revalidation:n.revalidation,component:p,error:d,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):g()},null)}var md;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(md||(md={}));var bo;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(bo||(bo={}));function CC(e){let t=S.useContext(Kf);return t||je(!1),t}function AC(e){let t=S.useContext(fC);return t||je(!1),t}function jC(e){let t=S.useContext(fn);return t||je(!1),t}function Py(e){let t=jC(),n=t.matches[t.matches.length-1];return n.route.id||je(!1),n.route.id}function EC(){var e;let t=S.useContext(Ty),n=AC(bo.UseRouteError),r=Py(bo.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function TC(){let{router:e}=CC(md.UseNavigateStable),t=Py(bo.UseNavigateStable),n=S.useRef(!1);return Ly(()=>{n.current=!0}),S.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ca({fromRouteId:t},o)))},[e,t])}function LC(e){return gC(e.context)}function Y(e){je(!1)}function OC(e){let{basename:t="/",children:n=null,location:r,navigationType:i=jn.Pop,navigator:o,static:s=!1}=e;Bo()&&je(!1);let a=t.replace(/^\/*/,"/"),c=S.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=yi(r));let{pathname:u="/",search:d="",hash:p="",state:h=null,key:g="default"}=r,y=S.useMemo(()=>{let v=qf(u,a);return v==null?null:{location:{pathname:v,search:d,hash:p,state:h,key:g},navigationType:i}},[a,u,d,p,h,g,i]);return y==null?null:S.createElement(vi.Provider,{value:c},S.createElement(ml.Provider,{children:n,value:y}))}function PC(e){let{children:t,location:n}=e;return xC(gd(t),n)}var tm;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(tm||(tm={}));new Promise(()=>{});function gd(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,i)=>{if(!S.isValidElement(r))return;let o=[...t,i];if(r.type===S.Fragment){n.push.apply(n,gd(r.props.children,o));return}r.type!==Y&&je(!1),!r.props.index||!r.props.children||je(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=gd(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xd(){return xd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xd.apply(this,arguments)}function $C(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function RC(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function zC(e,t){return e.button===0&&(!t||t==="_self")&&!RC(e)}const NC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],BC="startTransition",nm=Tw[BC];function IC(e){let{basename:t,children:n,future:r,window:i}=e,o=S.useRef();o.current==null&&(o.current=_k({window:i,v5Compat:!0}));let s=o.current,[a,c]=S.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=S.useCallback(p=>{u&&nm?nm(()=>c(p)):c(p)},[c,u]);return S.useLayoutEffect(()=>s.listen(d),[s,d]),S.createElement(OC,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s})}const FC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",DC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Oe=S.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:c,to:u,preventScrollReset:d}=t,p=$C(t,NC),{basename:h}=S.useContext(vi),g,y=!1;if(typeof u=="string"&&DC.test(u)&&(g=u,FC))try{let m=new URL(window.location.href),w=u.startsWith("//")?new URL(m.protocol+u):new URL(u),k=qf(w.pathname,h);w.origin===m.origin&&k!=null?u=k+w.search+w.hash:y=!0}catch{}let v=pC(u,{relative:i}),b=MC(u,{replace:s,state:a,target:c,preventScrollReset:d,relative:i});function x(m){r&&r(m),m.defaultPrevented||b(m)}return S.createElement("a",xd({},p,{href:g||v,onClick:y||o?r:x,ref:n,target:c}))});var rm;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(rm||(rm={}));var im;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(im||(im={}));function MC(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s}=t===void 0?{}:t,a=Yf(),c=gr(),u=Oy(e,{relative:s});return S.useCallback(d=>{if(zC(d,n)){d.preventDefault();let p=r!==void 0?r:ka(c)===ka(u);a(e,{replace:p,state:i,preventScrollReset:o,relative:s})}},[c,a,u,r,i,n,e,o,s])}var $y={exports:{}},Ry={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var li=S;function _C(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var UC=typeof Object.is=="function"?Object.is:_C,WC=li.useState,HC=li.useEffect,VC=li.useLayoutEffect,QC=li.useDebugValue;function GC(e,t){var n=t(),r=WC({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return VC(function(){i.value=n,i.getSnapshot=t,Oc(i)&&o({inst:i})},[e,n,t]),HC(function(){return Oc(i)&&o({inst:i}),e(function(){Oc(i)&&o({inst:i})})},[e]),QC(n),n}function Oc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!UC(e,n)}catch{return!0}}function qC(e,t){return t()}var KC=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?qC:GC;Ry.useSyncExternalStore=li.useSyncExternalStore!==void 0?li.useSyncExternalStore:KC;$y.exports=Ry;var YC=$y.exports,zy={exports:{}},Ny={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gl=S,JC=YC;function XC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ZC=typeof Object.is=="function"?Object.is:XC,eA=JC.useSyncExternalStore,tA=gl.useRef,nA=gl.useEffect,rA=gl.useMemo,iA=gl.useDebugValue;Ny.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=tA(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=rA(function(){function c(g){if(!u){if(u=!0,d=g,g=r(g),i!==void 0&&s.hasValue){var y=s.value;if(i(y,g))return p=y}return p=g}if(y=p,ZC(d,g))return y;var v=r(g);return i!==void 0&&i(y,v)?y:(d=g,p=v)}var u=!1,d,p,h=n===void 0?null:n;return[function(){return c(t())},h===null?void 0:function(){return c(h())}]},[t,n,r,i]);var a=eA(e,o[0],o[1]);return nA(function(){s.hasValue=!0,s.value=a},[a]),iA(a),a};zy.exports=Ny;var oA=zy.exports;function sA(e){e()}let By=sA;const aA=e=>By=e,lA=()=>By,om=Symbol.for(`react-redux-context-${S.version}`),sm=globalThis;function cA(){let e=sm[om];return e||(e=S.createContext(null),sm[om]=e),e}const Un=new Proxy({},new Proxy({},{get(e,t){const n=cA();return(r,...i)=>Reflect[t](n,...i)}}));function Jf(e=Un){return function(){return S.useContext(e)}}const Iy=Jf(),uA=()=>{throw new Error("uSES not initialized!")};let Fy=uA;const dA=e=>{Fy=e},fA=(e,t)=>e===t;function pA(e=Un){const t=e===Un?Iy:Jf(e);return function(r,i={}){const{equalityFn:o=fA,stabilityCheck:s=void 0,noopCheck:a=void 0}=typeof i=="function"?{equalityFn:i}:i,{store:c,subscription:u,getServerState:d,stabilityCheck:p,noopCheck:h}=t();S.useRef(!0);const g=S.useCallback({[r.name](v){return r(v)}}[r.name],[r,p,s]),y=Fy(u.addNestedSub,c.getState,d||c.getState,g,o);return S.useDebugValue(y),y}}const W=pA();var Dy={exports:{}},oe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ie=typeof Symbol=="function"&&Symbol.for,Xf=Ie?Symbol.for("react.element"):60103,Zf=Ie?Symbol.for("react.portal"):60106,xl=Ie?Symbol.for("react.fragment"):60107,yl=Ie?Symbol.for("react.strict_mode"):60108,vl=Ie?Symbol.for("react.profiler"):60114,wl=Ie?Symbol.for("react.provider"):60109,bl=Ie?Symbol.for("react.context"):60110,ep=Ie?Symbol.for("react.async_mode"):60111,Sl=Ie?Symbol.for("react.concurrent_mode"):60111,kl=Ie?Symbol.for("react.forward_ref"):60112,Cl=Ie?Symbol.for("react.suspense"):60113,hA=Ie?Symbol.for("react.suspense_list"):60120,Al=Ie?Symbol.for("react.memo"):60115,jl=Ie?Symbol.for("react.lazy"):60116,mA=Ie?Symbol.for("react.block"):60121,gA=Ie?Symbol.for("react.fundamental"):60117,xA=Ie?Symbol.for("react.responder"):60118,yA=Ie?Symbol.for("react.scope"):60119;function vt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Xf:switch(e=e.type,e){case ep:case Sl:case xl:case vl:case yl:case Cl:return e;default:switch(e=e&&e.$$typeof,e){case bl:case kl:case jl:case Al:case wl:return e;default:return t}}case Zf:return t}}}function My(e){return vt(e)===Sl}oe.AsyncMode=ep;oe.ConcurrentMode=Sl;oe.ContextConsumer=bl;oe.ContextProvider=wl;oe.Element=Xf;oe.ForwardRef=kl;oe.Fragment=xl;oe.Lazy=jl;oe.Memo=Al;oe.Portal=Zf;oe.Profiler=vl;oe.StrictMode=yl;oe.Suspense=Cl;oe.isAsyncMode=function(e){return My(e)||vt(e)===ep};oe.isConcurrentMode=My;oe.isContextConsumer=function(e){return vt(e)===bl};oe.isContextProvider=function(e){return vt(e)===wl};oe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xf};oe.isForwardRef=function(e){return vt(e)===kl};oe.isFragment=function(e){return vt(e)===xl};oe.isLazy=function(e){return vt(e)===jl};oe.isMemo=function(e){return vt(e)===Al};oe.isPortal=function(e){return vt(e)===Zf};oe.isProfiler=function(e){return vt(e)===vl};oe.isStrictMode=function(e){return vt(e)===yl};oe.isSuspense=function(e){return vt(e)===Cl};oe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===xl||e===Sl||e===vl||e===yl||e===Cl||e===hA||typeof e=="object"&&e!==null&&(e.$$typeof===jl||e.$$typeof===Al||e.$$typeof===wl||e.$$typeof===bl||e.$$typeof===kl||e.$$typeof===gA||e.$$typeof===xA||e.$$typeof===yA||e.$$typeof===mA)};oe.typeOf=vt;Dy.exports=oe;var vA=Dy.exports,_y=vA,wA={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},bA={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Uy={};Uy[_y.ForwardRef]=wA;Uy[_y.Memo]=bA;var se={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tp=Symbol.for("react.element"),np=Symbol.for("react.portal"),El=Symbol.for("react.fragment"),Tl=Symbol.for("react.strict_mode"),Ll=Symbol.for("react.profiler"),Ol=Symbol.for("react.provider"),Pl=Symbol.for("react.context"),SA=Symbol.for("react.server_context"),$l=Symbol.for("react.forward_ref"),Rl=Symbol.for("react.suspense"),zl=Symbol.for("react.suspense_list"),Nl=Symbol.for("react.memo"),Bl=Symbol.for("react.lazy"),kA=Symbol.for("react.offscreen"),Wy;Wy=Symbol.for("react.module.reference");function Lt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case tp:switch(e=e.type,e){case El:case Ll:case Tl:case Rl:case zl:return e;default:switch(e=e&&e.$$typeof,e){case SA:case Pl:case $l:case Bl:case Nl:case Ol:return e;default:return t}}case np:return t}}}se.ContextConsumer=Pl;se.ContextProvider=Ol;se.Element=tp;se.ForwardRef=$l;se.Fragment=El;se.Lazy=Bl;se.Memo=Nl;se.Portal=np;se.Profiler=Ll;se.StrictMode=Tl;se.Suspense=Rl;se.SuspenseList=zl;se.isAsyncMode=function(){return!1};se.isConcurrentMode=function(){return!1};se.isContextConsumer=function(e){return Lt(e)===Pl};se.isContextProvider=function(e){return Lt(e)===Ol};se.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===tp};se.isForwardRef=function(e){return Lt(e)===$l};se.isFragment=function(e){return Lt(e)===El};se.isLazy=function(e){return Lt(e)===Bl};se.isMemo=function(e){return Lt(e)===Nl};se.isPortal=function(e){return Lt(e)===np};se.isProfiler=function(e){return Lt(e)===Ll};se.isStrictMode=function(e){return Lt(e)===Tl};se.isSuspense=function(e){return Lt(e)===Rl};se.isSuspenseList=function(e){return Lt(e)===zl};se.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===El||e===Ll||e===Tl||e===Rl||e===zl||e===kA||typeof e=="object"&&e!==null&&(e.$$typeof===Bl||e.$$typeof===Nl||e.$$typeof===Ol||e.$$typeof===Pl||e.$$typeof===$l||e.$$typeof===Wy||e.getModuleId!==void 0)};se.typeOf=Lt;function CA(){const e=lA();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,o=n={callback:r,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){!i||t===null||(i=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}const am={notify(){},get:()=>[]};function AA(e,t){let n,r=am;function i(p){return c(),r.subscribe(p)}function o(){r.notify()}function s(){d.onStateChange&&d.onStateChange()}function a(){return!!n}function c(){n||(n=t?t.addNestedSub(s):e.subscribe(s),r=CA())}function u(){n&&(n(),n=void 0,r.clear(),r=am)}const d={addNestedSub:i,notifyNestedSubs:o,handleChangeWrapper:s,isSubscribed:a,trySubscribe:c,tryUnsubscribe:u,getListeners:()=>r};return d}const jA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",EA=jA?S.useLayoutEffect:S.useEffect;function TA({store:e,context:t,children:n,serverState:r,stabilityCheck:i="once",noopCheck:o="once"}){const s=S.useMemo(()=>{const u=AA(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,noopCheck:o}},[e,r,i,o]),a=S.useMemo(()=>e.getState(),[e]);EA(()=>{const{subscription:u}=s;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[s,a]);const c=t||Un;return st.createElement(c.Provider,{value:s},n)}function Hy(e=Un){const t=e===Un?Iy:Jf(e);return function(){const{store:r}=t();return r}}const LA=Hy();function OA(e=Un){const t=e===Un?LA:Hy(e);return function(){return t().dispatch}}const ne=OA();dA(oA.useSyncExternalStoreWithSelector);aA(ty.unstable_batchedUpdates);function zt(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Wn(e){return!!e&&!!e[he]}function un(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===DA}(e)||Array.isArray(e)||!!e[hm]||!!(!((t=e.constructor)===null||t===void 0)&&t[hm])||rp(e)||ip(e))}function pr(e,t,n){n===void 0&&(n=!1),wi(e)===0?(n?Object.keys:Wr)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function wi(e){var t=e[he];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:rp(e)?2:ip(e)?3:0}function Ur(e,t){return wi(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function PA(e,t){return wi(e)===2?e.get(t):e[t]}function Vy(e,t,n){var r=wi(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function Qy(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function rp(e){return IA&&e instanceof Map}function ip(e){return FA&&e instanceof Set}function Yn(e){return e.o||e.t}function op(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=qy(e);delete t[he];for(var n=Wr(t),r=0;r<n.length;r++){var i=n[r],o=t[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function sp(e,t){return t===void 0&&(t=!1),ap(e)||Wn(e)||!un(e)||(wi(e)>1&&(e.set=e.add=e.clear=e.delete=$A),Object.freeze(e),t&&pr(e,function(n,r){return sp(r,!0)},!0)),e}function $A(){zt(2)}function ap(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function qt(e){var t=bd[e];return t||zt(18,e),t}function RA(e,t){bd[e]||(bd[e]=t)}function yd(){return So}function Pc(e,t){t&&(qt("Patches"),e.u=[],e.s=[],e.v=t)}function Aa(e){vd(e),e.p.forEach(zA),e.p=null}function vd(e){e===So&&(So=e.l)}function lm(e){return So={p:[],l:So,h:e,m:!0,_:0}}function zA(e){var t=e[he];t.i===0||t.i===1?t.j():t.g=!0}function $c(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||qt("ES5").S(t,e,r),r?(n[he].P&&(Aa(t),zt(4)),un(e)&&(e=ja(t,e),t.l||Ea(t,e)),t.u&&qt("Patches").M(n[he].t,e,t.u,t.s)):e=ja(t,n,[]),Aa(t),t.u&&t.v(t.u,t.s),e!==Gy?e:void 0}function ja(e,t,n){if(ap(t))return t;var r=t[he];if(!r)return pr(t,function(a,c){return cm(e,r,t,a,c,n)},!0),t;if(r.A!==e)return t;if(!r.P)return Ea(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=op(r.k):r.o,o=i,s=!1;r.i===3&&(o=new Set(i),i.clear(),s=!0),pr(o,function(a,c){return cm(e,r,i,a,c,n,s)}),Ea(e,i,!1),n&&e.u&&qt("Patches").N(r,n,e.u,e.s)}return r.o}function cm(e,t,n,r,i,o,s){if(Wn(i)){var a=ja(e,i,o&&t&&t.i!==3&&!Ur(t.R,r)?o.concat(r):void 0);if(Vy(n,r,a),!Wn(a))return;e.m=!1}else s&&n.add(i);if(un(i)&&!ap(i)){if(!e.h.D&&e._<1)return;ja(e,i),t&&t.A.l||Ea(e,i)}}function Ea(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&sp(t,n)}function Rc(e,t){var n=e[he];return(n?Yn(n):e)[t]}function um(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function kn(e){e.P||(e.P=!0,e.l&&kn(e.l))}function zc(e){e.o||(e.o=op(e.t))}function wd(e,t,n){var r=rp(t)?qt("MapSet").F(t,n):ip(t)?qt("MapSet").T(t,n):e.O?function(i,o){var s=Array.isArray(i),a={i:s?1:0,A:o?o.A:yd(),P:!1,I:!1,R:{},l:o,t:i,k:null,o:null,j:null,C:!1},c=a,u=ko;s&&(c=[a],u=Di);var d=Proxy.revocable(c,u),p=d.revoke,h=d.proxy;return a.k=h,a.j=p,h}(t,n):qt("ES5").J(t,n);return(n?n.A:yd()).p.push(r),r}function NA(e){return Wn(e)||zt(22,e),function t(n){if(!un(n))return n;var r,i=n[he],o=wi(n);if(i){if(!i.P&&(i.i<4||!qt("ES5").K(i)))return i.t;i.I=!0,r=dm(n,o),i.I=!1}else r=dm(n,o);return pr(r,function(s,a){i&&PA(i.t,s)===a||Vy(r,s,t(a))}),o===3?new Set(r):r}(e)}function dm(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return op(e)}function BA(){function e(o,s){var a=i[o];return a?a.enumerable=s:i[o]=a={configurable:!0,enumerable:s,get:function(){var c=this[he];return ko.get(c,o)},set:function(c){var u=this[he];ko.set(u,o,c)}},a}function t(o){for(var s=o.length-1;s>=0;s--){var a=o[s][he];if(!a.P)switch(a.i){case 5:r(a)&&kn(a);break;case 4:n(a)&&kn(a)}}}function n(o){for(var s=o.t,a=o.k,c=Wr(a),u=c.length-1;u>=0;u--){var d=c[u];if(d!==he){var p=s[d];if(p===void 0&&!Ur(s,d))return!0;var h=a[d],g=h&&h[he];if(g?g.t!==p:!Qy(h,p))return!0}}var y=!!s[he];return c.length!==Wr(s).length+(y?0:1)}function r(o){var s=o.k;if(s.length!==o.t.length)return!0;var a=Object.getOwnPropertyDescriptor(s,s.length-1);if(a&&!a.get)return!0;for(var c=0;c<s.length;c++)if(!s.hasOwnProperty(c))return!0;return!1}var i={};RA("ES5",{J:function(o,s){var a=Array.isArray(o),c=function(d,p){if(d){for(var h=Array(p.length),g=0;g<p.length;g++)Object.defineProperty(h,""+g,e(g,!0));return h}var y=qy(p);delete y[he];for(var v=Wr(y),b=0;b<v.length;b++){var x=v[b];y[x]=e(x,d||!!y[x].enumerable)}return Object.create(Object.getPrototypeOf(p),y)}(a,o),u={i:a?5:4,A:s?s.A:yd(),P:!1,I:!1,R:{},l:s,t:o,k:c,o:null,g:!1,C:!1};return Object.defineProperty(c,he,{value:u,writable:!0}),c},S:function(o,s,a){a?Wn(s)&&s[he].A===o&&t(o.p):(o.u&&function c(u){if(u&&typeof u=="object"){var d=u[he];if(d){var p=d.t,h=d.k,g=d.R,y=d.i;if(y===4)pr(h,function(w){w!==he&&(p[w]!==void 0||Ur(p,w)?g[w]||c(h[w]):(g[w]=!0,kn(d)))}),pr(p,function(w){h[w]!==void 0||Ur(h,w)||(g[w]=!1,kn(d))});else if(y===5){if(r(d)&&(kn(d),g.length=!0),h.length<p.length)for(var v=h.length;v<p.length;v++)g[v]=!1;else for(var b=p.length;b<h.length;b++)g[b]=!0;for(var x=Math.min(h.length,p.length),m=0;m<x;m++)h.hasOwnProperty(m)||(g[m]=!0),g[m]===void 0&&c(h[m])}}}}(o.p[0]),t(o.p))},K:function(o){return o.i===4?n(o):r(o)}})}var fm,So,lp=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",IA=typeof Map<"u",FA=typeof Set<"u",pm=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Gy=lp?Symbol.for("immer-nothing"):((fm={})["immer-nothing"]=!0,fm),hm=lp?Symbol.for("immer-draftable"):"__$immer_draftable",he=lp?Symbol.for("immer-state"):"__$immer_state",DA=""+Object.prototype.constructor,Wr=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,qy=Object.getOwnPropertyDescriptors||function(e){var t={};return Wr(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},bd={},ko={get:function(e,t){if(t===he)return e;var n=Yn(e);if(!Ur(n,t))return function(i,o,s){var a,c=um(o,s);return c?"value"in c?c.value:(a=c.get)===null||a===void 0?void 0:a.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!un(r)?r:r===Rc(e.t,t)?(zc(e),e.o[t]=wd(e.A.h,r,e)):r},has:function(e,t){return t in Yn(e)},ownKeys:function(e){return Reflect.ownKeys(Yn(e))},set:function(e,t,n){var r=um(Yn(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=Rc(Yn(e),t),o=i==null?void 0:i[he];if(o&&o.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(Qy(n,i)&&(n!==void 0||Ur(e.t,t)))return!0;zc(e),kn(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return Rc(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,zc(e),kn(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Yn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){zt(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){zt(12)}},Di={};pr(ko,function(e,t){Di[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Di.deleteProperty=function(e,t){return Di.set.call(this,e,t,void 0)},Di.set=function(e,t,n){return ko.set.call(this,e[0],t,n,e[0])};var MA=function(){function e(n){var r=this;this.O=pm,this.D=!0,this.produce=function(i,o,s){if(typeof i=="function"&&typeof o!="function"){var a=o;o=i;var c=r;return function(v){var b=this;v===void 0&&(v=a);for(var x=arguments.length,m=Array(x>1?x-1:0),w=1;w<x;w++)m[w-1]=arguments[w];return c.produce(v,function(k){var A;return(A=o).call.apply(A,[b,k].concat(m))})}}var u;if(typeof o!="function"&&zt(6),s!==void 0&&typeof s!="function"&&zt(7),un(i)){var d=lm(r),p=wd(r,i,void 0),h=!0;try{u=o(p),h=!1}finally{h?Aa(d):vd(d)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(v){return Pc(d,s),$c(v,d)},function(v){throw Aa(d),v}):(Pc(d,s),$c(u,d))}if(!i||typeof i!="object"){if((u=o(i))===void 0&&(u=i),u===Gy&&(u=void 0),r.D&&sp(u,!0),s){var g=[],y=[];qt("Patches").M(i,u,g,y),s(g,y)}return u}zt(21,i)},this.produceWithPatches=function(i,o){if(typeof i=="function")return function(u){for(var d=arguments.length,p=Array(d>1?d-1:0),h=1;h<d;h++)p[h-1]=arguments[h];return r.produceWithPatches(u,function(g){return i.apply(void 0,[g].concat(p))})};var s,a,c=r.produce(i,o,function(u,d){s=u,a=d});return typeof Promise<"u"&&c instanceof Promise?c.then(function(u){return[u,s,a]}):[c,s,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){un(n)||zt(8),Wn(n)&&(n=NA(n));var r=lm(this),i=wd(this,n,void 0);return i[he].C=!0,vd(r),i},t.finishDraft=function(n,r){var i=n&&n[he],o=i.A;return Pc(o,r),$c(void 0,o)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!pm&&zt(20),this.O=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var o=r[i];if(o.path.length===0&&o.op==="replace"){n=o.value;break}}i>-1&&(r=r.slice(i+1));var s=qt("Patches").$;return Wn(n)?s(n,r):this.produce(n,function(a){return s(a,r)})},e}(),gt=new MA,Ky=gt.produce;gt.produceWithPatches.bind(gt);gt.setAutoFreeze.bind(gt);gt.setUseProxies.bind(gt);gt.applyPatches.bind(gt);gt.createDraft.bind(gt);gt.finishDraft.bind(gt);function Co(e){"@babel/helpers - typeof";return Co=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Co(e)}function _A(e,t){if(Co(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Co(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function UA(e){var t=_A(e,"string");return Co(t)==="symbol"?t:String(t)}function WA(e,t,n){return t=UA(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function mm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function gm(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?mm(Object(n),!0).forEach(function(r){WA(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):mm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Qe(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var xm=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Nc=function(){return Math.random().toString(36).substring(7).split("").join(".")},Ta={INIT:"@@redux/INIT"+Nc(),REPLACE:"@@redux/REPLACE"+Nc(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Nc()}};function HA(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Yy(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Qe(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Qe(1));return n(Yy)(e,t)}if(typeof e!="function")throw new Error(Qe(2));var i=e,o=t,s=[],a=s,c=!1;function u(){a===s&&(a=s.slice())}function d(){if(c)throw new Error(Qe(3));return o}function p(v){if(typeof v!="function")throw new Error(Qe(4));if(c)throw new Error(Qe(5));var b=!0;return u(),a.push(v),function(){if(b){if(c)throw new Error(Qe(6));b=!1,u();var m=a.indexOf(v);a.splice(m,1),s=null}}}function h(v){if(!HA(v))throw new Error(Qe(7));if(typeof v.type>"u")throw new Error(Qe(8));if(c)throw new Error(Qe(9));try{c=!0,o=i(o,v)}finally{c=!1}for(var b=s=a,x=0;x<b.length;x++){var m=b[x];m()}return v}function g(v){if(typeof v!="function")throw new Error(Qe(10));i=v,h({type:Ta.REPLACE})}function y(){var v,b=p;return v={subscribe:function(m){if(typeof m!="object"||m===null)throw new Error(Qe(11));function w(){m.next&&m.next(d())}w();var k=b(w);return{unsubscribe:k}}},v[xm]=function(){return this},v}return h({type:Ta.INIT}),r={dispatch:h,subscribe:p,getState:d,replaceReducer:g},r[xm]=y,r}function VA(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Ta.INIT});if(typeof r>"u")throw new Error(Qe(12));if(typeof n(void 0,{type:Ta.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Qe(13))})}function QA(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var o=Object.keys(n),s;try{VA(n)}catch(a){s=a}return function(c,u){if(c===void 0&&(c={}),s)throw s;for(var d=!1,p={},h=0;h<o.length;h++){var g=o[h],y=n[g],v=c[g],b=y(v,u);if(typeof b>"u")throw u&&u.type,new Error(Qe(14));p[g]=b,d=d||b!==v}return d=d||o.length!==Object.keys(c).length,d?p:c}}function La(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function GA(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),o=function(){throw new Error(Qe(15))},s={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},a=t.map(function(c){return c(s)});return o=La.apply(void 0,a)(i.dispatch),gm(gm({},i),{},{dispatch:o})}}}function Jy(e){var t=function(r){var i=r.dispatch,o=r.getState;return function(s){return function(a){return typeof a=="function"?a(i,o,e):s(a)}}};return t}var Xy=Jy();Xy.withExtraArgument=Jy;const ym=Xy;var Zy=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),qA=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(u){return function(d){return c([u,d])}}function c(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1],o=u;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(u);break}o[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(d){u=[6,d],i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},ci=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},KA=Object.defineProperty,YA=Object.defineProperties,JA=Object.getOwnPropertyDescriptors,vm=Object.getOwnPropertySymbols,XA=Object.prototype.hasOwnProperty,ZA=Object.prototype.propertyIsEnumerable,wm=function(e,t,n){return t in e?KA(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},In=function(e,t){for(var n in t||(t={}))XA.call(t,n)&&wm(e,n,t[n]);if(vm)for(var r=0,i=vm(t);r<i.length;r++){var n=i[r];ZA.call(t,n)&&wm(e,n,t[n])}return e},Bc=function(e,t){return YA(e,JA(t))},e2=function(e,t,n){return new Promise(function(r,i){var o=function(c){try{a(n.next(c))}catch(u){i(u)}},s=function(c){try{a(n.throw(c))}catch(u){i(u)}},a=function(c){return c.done?r(c.value):Promise.resolve(c.value).then(o,s)};a((n=n.apply(e,t)).next())})},t2=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?La:La.apply(null,arguments)};function n2(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var r2=function(e){Zy(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,ci([void 0],n[0].concat(this)))):new(t.bind.apply(t,ci([void 0],n.concat(this))))},t}(Array),i2=function(e){Zy(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,ci([void 0],n[0].concat(this)))):new(t.bind.apply(t,ci([void 0],n.concat(this))))},t}(Array);function Sd(e){return un(e)?Ky(e,function(){}):e}function o2(e){return typeof e=="boolean"}function s2(){return function(t){return a2(t)}}function a2(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new r2;return n&&(o2(n)?r.push(ym):r.push(ym.withExtraArgument(n.extraArgument))),r}var l2=!0;function c2(e){var t=s2(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,o=n.middleware,s=o===void 0?t():o,a=n.devTools,c=a===void 0?!0:a,u=n.preloadedState,d=u===void 0?void 0:u,p=n.enhancers,h=p===void 0?void 0:p,g;if(typeof i=="function")g=i;else if(n2(i))g=QA(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var y=s;typeof y=="function"&&(y=y(t));var v=GA.apply(void 0,y),b=La;c&&(b=t2(In({trace:!l2},typeof c=="object"&&c)));var x=new i2(v),m=x;Array.isArray(h)?m=ci([v],h):typeof h=="function"&&(m=h(x));var w=b.apply(void 0,m);return Yy(g,d,w)}function rn(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var o=t.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return In(In({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function ev(e){var t={},n=[],r,i={addCase:function(o,s){var a=typeof o=="string"?o:o.type;if(a in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[a]=s,i},addMatcher:function(o,s){return n.push({matcher:o,reducer:s}),i},addDefaultCase:function(o){return r=o,i}};return e(i),[t,n,r]}function u2(e){return typeof e=="function"}function d2(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?ev(t):[t,n,r],o=i[0],s=i[1],a=i[2],c;if(u2(e))c=function(){return Sd(e())};else{var u=Sd(e);c=function(){return u}}function d(p,h){p===void 0&&(p=c());var g=ci([o[h.type]],s.filter(function(y){var v=y.matcher;return v(h)}).map(function(y){var v=y.reducer;return v}));return g.filter(function(y){return!!y}).length===0&&(g=[a]),g.reduce(function(y,v){if(v)if(Wn(y)){var b=y,x=v(b,h);return x===void 0?y:x}else{if(un(y))return Ky(y,function(m){return v(m,h)});var x=v(y,h);if(x===void 0){if(y===null)return y;throw Error("A case reducer on a non-draftable value must not return undefined")}return x}return y},p)}return d.getInitialState=c,d}function f2(e,t){return e+"/"+t}function Pe(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:Sd(e.initialState),r=e.reducers||{},i=Object.keys(r),o={},s={},a={};i.forEach(function(d){var p=r[d],h=f2(t,d),g,y;"reducer"in p?(g=p.reducer,y=p.prepare):g=p,o[d]=g,s[h]=g,a[d]=y?rn(h,y):rn(h)});function c(){var d=typeof e.extraReducers=="function"?ev(e.extraReducers):[e.extraReducers],p=d[0],h=p===void 0?{}:p,g=d[1],y=g===void 0?[]:g,v=d[2],b=v===void 0?void 0:v,x=In(In({},h),s);return d2(n,function(m){for(var w in x)m.addCase(w,x[w]);for(var k=0,A=y;k<A.length;k++){var C=A[k];m.addMatcher(C.matcher,C.reducer)}b&&m.addDefaultCase(b)})}var u;return{name:t,reducer:function(d,p){return u||(u=c()),u(d,p)},actions:a,caseReducers:o,getInitialState:function(){return u||(u=c()),u.getInitialState()}}}var p2="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",h2=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=p2[Math.random()*64|0];return t},m2=["name","message","stack","code"],Ic=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),bm=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),g2=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=m2;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}},ae=function(){function e(t,n,r){var i=rn(t+"/fulfilled",function(u,d,p,h){return{payload:u,meta:Bc(In({},h||{}),{arg:p,requestId:d,requestStatus:"fulfilled"})}}),o=rn(t+"/pending",function(u,d,p){return{payload:void 0,meta:Bc(In({},p||{}),{arg:d,requestId:u,requestStatus:"pending"})}}),s=rn(t+"/rejected",function(u,d,p,h,g){return{payload:h,error:(r&&r.serializeError||g2)(u||"Rejected"),meta:Bc(In({},g||{}),{arg:p,requestId:d,rejectedWithValue:!!h,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),a=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function c(u){return function(d,p,h){var g=r!=null&&r.idGenerator?r.idGenerator(u):h2(),y=new a,v;function b(m){v=m,y.abort()}var x=function(){return e2(this,null,function(){var m,w,k,A,C,j,T;return qA(this,function(O){switch(O.label){case 0:return O.trys.push([0,4,,5]),A=(m=r==null?void 0:r.condition)==null?void 0:m.call(r,u,{getState:p,extra:h}),y2(A)?[4,A]:[3,2];case 1:A=O.sent(),O.label=2;case 2:if(A===!1||y.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return C=new Promise(function(P,E){return y.signal.addEventListener("abort",function(){return E({name:"AbortError",message:v||"Aborted"})})}),d(o(g,u,(w=r==null?void 0:r.getPendingMeta)==null?void 0:w.call(r,{requestId:g,arg:u},{getState:p,extra:h}))),[4,Promise.race([C,Promise.resolve(n(u,{dispatch:d,getState:p,extra:h,requestId:g,signal:y.signal,abort:b,rejectWithValue:function(P,E){return new Ic(P,E)},fulfillWithValue:function(P,E){return new bm(P,E)}})).then(function(P){if(P instanceof Ic)throw P;return P instanceof bm?i(P.payload,g,u,P.meta):i(P,g,u)})])];case 3:return k=O.sent(),[3,5];case 4:return j=O.sent(),k=j instanceof Ic?s(null,g,u,j.payload,j.meta):s(j,g,u),[3,5];case 5:return T=r&&!r.dispatchConditionRejection&&s.match(k)&&k.meta.condition,T||d(k),[2,k]}})})}();return Object.assign(x,{abort:b,requestId:g,arg:u,unwrap:function(){return x.then(x2)}})}}return Object.assign(c,{pending:o,rejected:s,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e}();function x2(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function y2(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var cp="listenerMiddleware";rn(cp+"/add");rn(cp+"/removeAll");rn(cp+"/remove");var Sm;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);BA();function tv(e,t){return function(){return e.apply(t,arguments)}}const{toString:v2}=Object.prototype,{getPrototypeOf:up}=Object,Il=(e=>t=>{const n=v2.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Kt=e=>(e=e.toLowerCase(),t=>Il(t)===e),Fl=e=>t=>typeof t===e,{isArray:bi}=Array,Ao=Fl("undefined");function w2(e){return e!==null&&!Ao(e)&&e.constructor!==null&&!Ao(e.constructor)&&At(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const nv=Kt("ArrayBuffer");function b2(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&nv(e.buffer),t}const S2=Fl("string"),At=Fl("function"),rv=Fl("number"),Dl=e=>e!==null&&typeof e=="object",k2=e=>e===!0||e===!1,Ls=e=>{if(Il(e)!=="object")return!1;const t=up(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},C2=Kt("Date"),A2=Kt("File"),j2=Kt("Blob"),E2=Kt("FileList"),T2=e=>Dl(e)&&At(e.pipe),L2=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||At(e.append)&&((t=Il(e))==="formdata"||t==="object"&&At(e.toString)&&e.toString()==="[object FormData]"))},O2=Kt("URLSearchParams"),P2=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Io(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),bi(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let a;for(r=0;r<s;r++)a=o[r],t.call(null,e[a],a,e)}}function iv(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const ov=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),sv=e=>!Ao(e)&&e!==ov;function kd(){const{caseless:e}=sv(this)&&this||{},t={},n=(r,i)=>{const o=e&&iv(t,i)||i;Ls(t[o])&&Ls(r)?t[o]=kd(t[o],r):Ls(r)?t[o]=kd({},r):bi(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Io(arguments[r],n);return t}const $2=(e,t,n,{allOwnKeys:r}={})=>(Io(t,(i,o)=>{n&&At(i)?e[o]=tv(i,n):e[o]=i},{allOwnKeys:r}),e),R2=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),z2=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},N2=(e,t,n,r)=>{let i,o,s;const a={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!r||r(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=n!==!1&&up(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},B2=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},I2=e=>{if(!e)return null;if(bi(e))return e;let t=e.length;if(!rv(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},F2=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&up(Uint8Array)),D2=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},M2=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},_2=Kt("HTMLFormElement"),U2=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),km=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),W2=Kt("RegExp"),av=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Io(n,(i,o)=>{t(i,o,e)!==!1&&(r[o]=i)}),Object.defineProperties(e,r)},H2=e=>{av(e,(t,n)=>{if(At(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(At(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},V2=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return bi(e)?r(e):r(String(e).split(t)),n},Q2=()=>{},G2=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Fc="abcdefghijklmnopqrstuvwxyz",Cm="0123456789",lv={DIGIT:Cm,ALPHA:Fc,ALPHA_DIGIT:Fc+Fc.toUpperCase()+Cm},q2=(e=16,t=lv.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function K2(e){return!!(e&&At(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Y2=e=>{const t=new Array(10),n=(r,i)=>{if(Dl(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=bi(r)?[]:{};return Io(r,(s,a)=>{const c=n(s,i+1);!Ao(c)&&(o[a]=c)}),t[i]=void 0,o}}return r};return n(e,0)},J2=Kt("AsyncFunction"),X2=e=>e&&(Dl(e)||At(e))&&At(e.then)&&At(e.catch),R={isArray:bi,isArrayBuffer:nv,isBuffer:w2,isFormData:L2,isArrayBufferView:b2,isString:S2,isNumber:rv,isBoolean:k2,isObject:Dl,isPlainObject:Ls,isUndefined:Ao,isDate:C2,isFile:A2,isBlob:j2,isRegExp:W2,isFunction:At,isStream:T2,isURLSearchParams:O2,isTypedArray:F2,isFileList:E2,forEach:Io,merge:kd,extend:$2,trim:P2,stripBOM:R2,inherits:z2,toFlatObject:N2,kindOf:Il,kindOfTest:Kt,endsWith:B2,toArray:I2,forEachEntry:D2,matchAll:M2,isHTMLForm:_2,hasOwnProperty:km,hasOwnProp:km,reduceDescriptors:av,freezeMethods:H2,toObjectSet:V2,toCamelCase:U2,noop:Q2,toFiniteNumber:G2,findKey:iv,global:ov,isContextDefined:sv,ALPHABET:lv,generateString:q2,isSpecCompliantForm:K2,toJSONObject:Y2,isAsyncFn:J2,isThenable:X2};function ee(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}R.inherits(ee,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:R.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const cv=ee.prototype,uv={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{uv[e]={value:e}});Object.defineProperties(ee,uv);Object.defineProperty(cv,"isAxiosError",{value:!0});ee.from=(e,t,n,r,i,o)=>{const s=Object.create(cv);return R.toFlatObject(e,s,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),ee.call(s,e.message,t,n,r,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const Z2=null;function Cd(e){return R.isPlainObject(e)||R.isArray(e)}function dv(e){return R.endsWith(e,"[]")?e.slice(0,-2):e}function Am(e,t,n){return e?e.concat(t).map(function(i,o){return i=dv(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function ej(e){return R.isArray(e)&&!e.some(Cd)}const tj=R.toFlatObject(R,{},null,function(t){return/^is[A-Z]/.test(t)});function Ml(e,t,n){if(!R.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=R.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,b){return!R.isUndefined(b[v])});const r=n.metaTokens,i=n.visitor||d,o=n.dots,s=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&R.isSpecCompliantForm(t);if(!R.isFunction(i))throw new TypeError("visitor must be a function");function u(y){if(y===null)return"";if(R.isDate(y))return y.toISOString();if(!c&&R.isBlob(y))throw new ee("Blob is not supported. Use a Buffer instead.");return R.isArrayBuffer(y)||R.isTypedArray(y)?c&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function d(y,v,b){let x=y;if(y&&!b&&typeof y=="object"){if(R.endsWith(v,"{}"))v=r?v:v.slice(0,-2),y=JSON.stringify(y);else if(R.isArray(y)&&ej(y)||(R.isFileList(y)||R.endsWith(v,"[]"))&&(x=R.toArray(y)))return v=dv(v),x.forEach(function(w,k){!(R.isUndefined(w)||w===null)&&t.append(s===!0?Am([v],k,o):s===null?v:v+"[]",u(w))}),!1}return Cd(y)?!0:(t.append(Am(b,v,o),u(y)),!1)}const p=[],h=Object.assign(tj,{defaultVisitor:d,convertValue:u,isVisitable:Cd});function g(y,v){if(!R.isUndefined(y)){if(p.indexOf(y)!==-1)throw Error("Circular reference detected in "+v.join("."));p.push(y),R.forEach(y,function(x,m){(!(R.isUndefined(x)||x===null)&&i.call(t,x,R.isString(m)?m.trim():m,v,h))===!0&&g(x,v?v.concat(m):[m])}),p.pop()}}if(!R.isObject(e))throw new TypeError("data must be an object");return g(e),t}function jm(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function dp(e,t){this._pairs=[],e&&Ml(e,this,t)}const fv=dp.prototype;fv.append=function(t,n){this._pairs.push([t,n])};fv.toString=function(t){const n=t?function(r){return t.call(this,r,jm)}:jm;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function nj(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function pv(e,t,n){if(!t)return e;const r=n&&n.encode||nj,i=n&&n.serialize;let o;if(i?o=i(t,n):o=R.isURLSearchParams(t)?t.toString():new dp(t,n).toString(r),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class rj{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){R.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Em=rj,hv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ij=typeof URLSearchParams<"u"?URLSearchParams:dp,oj=typeof FormData<"u"?FormData:null,sj=typeof Blob<"u"?Blob:null,aj=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),lj=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Ht={isBrowser:!0,classes:{URLSearchParams:ij,FormData:oj,Blob:sj},isStandardBrowserEnv:aj,isStandardBrowserWebWorkerEnv:lj,protocols:["http","https","file","blob","url","data"]};function cj(e,t){return Ml(e,new Ht.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return Ht.isNode&&R.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function uj(e){return R.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function dj(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function mv(e){function t(n,r,i,o){let s=n[o++];const a=Number.isFinite(+s),c=o>=n.length;return s=!s&&R.isArray(i)?i.length:s,c?(R.hasOwnProp(i,s)?i[s]=[i[s],r]:i[s]=r,!a):((!i[s]||!R.isObject(i[s]))&&(i[s]=[]),t(n,r,i[s],o)&&R.isArray(i[s])&&(i[s]=dj(i[s])),!a)}if(R.isFormData(e)&&R.isFunction(e.entries)){const n={};return R.forEachEntry(e,(r,i)=>{t(uj(r),i,n,0)}),n}return null}const fj={"Content-Type":void 0};function pj(e,t,n){if(R.isString(e))try{return(t||JSON.parse)(e),R.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const _l={transitional:hv,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=R.isObject(t);if(o&&R.isHTMLForm(t)&&(t=new FormData(t)),R.isFormData(t))return i&&i?JSON.stringify(mv(t)):t;if(R.isArrayBuffer(t)||R.isBuffer(t)||R.isStream(t)||R.isFile(t)||R.isBlob(t))return t;if(R.isArrayBufferView(t))return t.buffer;if(R.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return cj(t,this.formSerializer).toString();if((a=R.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Ml(a?{"files[]":t}:t,c&&new c,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),pj(t)):t}],transformResponse:[function(t){const n=this.transitional||_l.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&R.isString(t)&&(r&&!this.responseType||i)){const s=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(a){if(s)throw a.name==="SyntaxError"?ee.from(a,ee.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ht.classes.FormData,Blob:Ht.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};R.forEach(["delete","get","head"],function(t){_l.headers[t]={}});R.forEach(["post","put","patch"],function(t){_l.headers[t]=R.merge(fj)});const fp=_l,hj=R.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),mj=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),n=s.substring(0,i).trim().toLowerCase(),r=s.substring(i+1).trim(),!(!n||t[n]&&hj[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Tm=Symbol("internals");function Pi(e){return e&&String(e).trim().toLowerCase()}function Os(e){return e===!1||e==null?e:R.isArray(e)?e.map(Os):String(e)}function gj(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const xj=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Dc(e,t,n,r,i){if(R.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!R.isString(t)){if(R.isString(r))return t.indexOf(r)!==-1;if(R.isRegExp(r))return r.test(t)}}function yj(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function vj(e,t){const n=R.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,s){return this[r].call(this,t,i,o,s)},configurable:!0})})}class Ul{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(a,c,u){const d=Pi(c);if(!d)throw new Error("header name must be a non-empty string");const p=R.findKey(i,d);(!p||i[p]===void 0||u===!0||u===void 0&&i[p]!==!1)&&(i[p||c]=Os(a))}const s=(a,c)=>R.forEach(a,(u,d)=>o(u,d,c));return R.isPlainObject(t)||t instanceof this.constructor?s(t,n):R.isString(t)&&(t=t.trim())&&!xj(t)?s(mj(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=Pi(t),t){const r=R.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return gj(i);if(R.isFunction(n))return n.call(this,i,r);if(R.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Pi(t),t){const r=R.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Dc(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(s){if(s=Pi(s),s){const a=R.findKey(r,s);a&&(!n||Dc(r,r[a],a,n))&&(delete r[a],i=!0)}}return R.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||Dc(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return R.forEach(this,(i,o)=>{const s=R.findKey(r,o);if(s){n[s]=Os(i),delete n[o];return}const a=t?yj(o):String(o).trim();a!==o&&delete n[o],n[a]=Os(i),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return R.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&R.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Tm]=this[Tm]={accessors:{}}).accessors,i=this.prototype;function o(s){const a=Pi(s);r[a]||(vj(i,s),r[a]=!0)}return R.isArray(t)?t.forEach(o):o(t),this}}Ul.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);R.freezeMethods(Ul.prototype);R.freezeMethods(Ul);const on=Ul;function Mc(e,t){const n=this||fp,r=t||n,i=on.from(r.headers);let o=r.data;return R.forEach(e,function(a){o=a.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function gv(e){return!!(e&&e.__CANCEL__)}function Fo(e,t,n){ee.call(this,e??"canceled",ee.ERR_CANCELED,t,n),this.name="CanceledError"}R.inherits(Fo,ee,{__CANCEL__:!0});function wj(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new ee("Request failed with status code "+n.status,[ee.ERR_BAD_REQUEST,ee.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const bj=Ht.isStandardBrowserEnv?function(){return{write:function(n,r,i,o,s,a){const c=[];c.push(n+"="+encodeURIComponent(r)),R.isNumber(i)&&c.push("expires="+new Date(i).toGMTString()),R.isString(o)&&c.push("path="+o),R.isString(s)&&c.push("domain="+s),a===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Sj(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function kj(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function xv(e,t){return e&&!Sj(t)?kj(e,t):t}const Cj=Ht.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let s=o;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(s){const a=R.isString(s)?i(s):s;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function Aj(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function jj(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,s;return t=t!==void 0?t:1e3,function(c){const u=Date.now(),d=r[o];s||(s=u),n[i]=c,r[i]=u;let p=o,h=0;for(;p!==i;)h+=n[p++],p=p%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-s<t)return;const g=d&&u-d;return g?Math.round(h*1e3/g):void 0}}function Lm(e,t){let n=0;const r=jj(50,250);return i=>{const o=i.loaded,s=i.lengthComputable?i.total:void 0,a=o-n,c=r(a),u=o<=s;n=o;const d={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&u?(s-o)/c:void 0,event:i};d[t?"download":"upload"]=!0,e(d)}}const Ej=typeof XMLHttpRequest<"u",Tj=Ej&&function(e){return new Promise(function(n,r){let i=e.data;const o=on.from(e.headers).normalize(),s=e.responseType;let a;function c(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}R.isFormData(i)&&(Ht.isStandardBrowserEnv||Ht.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let u=new XMLHttpRequest;if(e.auth){const g=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(g+":"+y))}const d=xv(e.baseURL,e.url);u.open(e.method.toUpperCase(),pv(d,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function p(){if(!u)return;const g=on.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),v={data:!s||s==="text"||s==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:g,config:e,request:u};wj(function(x){n(x),c()},function(x){r(x),c()},v),u=null}if("onloadend"in u?u.onloadend=p:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(p)},u.onabort=function(){u&&(r(new ee("Request aborted",ee.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new ee("Network Error",ee.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let y=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const v=e.transitional||hv;e.timeoutErrorMessage&&(y=e.timeoutErrorMessage),r(new ee(y,v.clarifyTimeoutError?ee.ETIMEDOUT:ee.ECONNABORTED,e,u)),u=null},Ht.isStandardBrowserEnv){const g=(e.withCredentials||Cj(d))&&e.xsrfCookieName&&bj.read(e.xsrfCookieName);g&&o.set(e.xsrfHeaderName,g)}i===void 0&&o.setContentType(null),"setRequestHeader"in u&&R.forEach(o.toJSON(),function(y,v){u.setRequestHeader(v,y)}),R.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),s&&s!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",Lm(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Lm(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=g=>{u&&(r(!g||g.type?new Fo(null,e,u):g),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));const h=Aj(d);if(h&&Ht.protocols.indexOf(h)===-1){r(new ee("Unsupported protocol "+h+":",ee.ERR_BAD_REQUEST,e));return}u.send(i||null)})},Ps={http:Z2,xhr:Tj};R.forEach(Ps,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Lj={getAdapter:e=>{e=R.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=R.isString(n)?Ps[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new ee(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(R.hasOwnProp(Ps,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!R.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Ps};function _c(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Fo(null,e)}function Om(e){return _c(e),e.headers=on.from(e.headers),e.data=Mc.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Lj.getAdapter(e.adapter||fp.adapter)(e).then(function(r){return _c(e),r.data=Mc.call(e,e.transformResponse,r),r.headers=on.from(r.headers),r},function(r){return gv(r)||(_c(e),r&&r.response&&(r.response.data=Mc.call(e,e.transformResponse,r.response),r.response.headers=on.from(r.response.headers))),Promise.reject(r)})}const Pm=e=>e instanceof on?e.toJSON():e;function ui(e,t){t=t||{};const n={};function r(u,d,p){return R.isPlainObject(u)&&R.isPlainObject(d)?R.merge.call({caseless:p},u,d):R.isPlainObject(d)?R.merge({},d):R.isArray(d)?d.slice():d}function i(u,d,p){if(R.isUndefined(d)){if(!R.isUndefined(u))return r(void 0,u,p)}else return r(u,d,p)}function o(u,d){if(!R.isUndefined(d))return r(void 0,d)}function s(u,d){if(R.isUndefined(d)){if(!R.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function a(u,d,p){if(p in t)return r(u,d);if(p in e)return r(void 0,u)}const c={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(u,d)=>i(Pm(u),Pm(d),!0)};return R.forEach(Object.keys(Object.assign({},e,t)),function(d){const p=c[d]||i,h=p(e[d],t[d],d);R.isUndefined(h)&&p!==a||(n[d]=h)}),n}const yv="1.4.0",pp={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{pp[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const $m={};pp.transitional=function(t,n,r){function i(o,s){return"[Axios v"+yv+"] Transitional option '"+o+"'"+s+(r?". "+r:"")}return(o,s,a)=>{if(t===!1)throw new ee(i(s," has been removed"+(n?" in "+n:"")),ee.ERR_DEPRECATED);return n&&!$m[s]&&($m[s]=!0,console.warn(i(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,s,a):!0}};function Oj(e,t,n){if(typeof e!="object")throw new ee("options must be an object",ee.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],s=t[o];if(s){const a=e[o],c=a===void 0||s(a,o,e);if(c!==!0)throw new ee("option "+o+" must be "+c,ee.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ee("Unknown option "+o,ee.ERR_BAD_OPTION)}}const Ad={assertOptions:Oj,validators:pp},gn=Ad.validators;class Oa{constructor(t){this.defaults=t,this.interceptors={request:new Em,response:new Em}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=ui(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&Ad.assertOptions(r,{silentJSONParsing:gn.transitional(gn.boolean),forcedJSONParsing:gn.transitional(gn.boolean),clarifyTimeoutError:gn.transitional(gn.boolean)},!1),i!=null&&(R.isFunction(i)?n.paramsSerializer={serialize:i}:Ad.assertOptions(i,{encode:gn.function,serialize:gn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s;s=o&&R.merge(o.common,o[n.method]),s&&R.forEach(["delete","get","head","post","put","patch","common"],y=>{delete o[y]}),n.headers=on.concat(s,o);const a=[];let c=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(c=c&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let d,p=0,h;if(!c){const y=[Om.bind(this),void 0];for(y.unshift.apply(y,a),y.push.apply(y,u),h=y.length,d=Promise.resolve(n);p<h;)d=d.then(y[p++],y[p++]);return d}h=a.length;let g=n;for(p=0;p<h;){const y=a[p++],v=a[p++];try{g=y(g)}catch(b){v.call(this,b);break}}try{d=Om.call(this,g)}catch(y){return Promise.reject(y)}for(p=0,h=u.length;p<h;)d=d.then(u[p++],u[p++]);return d}getUri(t){t=ui(this.defaults,t);const n=xv(t.baseURL,t.url);return pv(n,t.params,t.paramsSerializer)}}R.forEach(["delete","get","head","options"],function(t){Oa.prototype[t]=function(n,r){return this.request(ui(r||{},{method:t,url:n,data:(r||{}).data}))}});R.forEach(["post","put","patch"],function(t){function n(r){return function(o,s,a){return this.request(ui(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}Oa.prototype[t]=n(),Oa.prototype[t+"Form"]=n(!0)});const $s=Oa;class hp{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(a=>{r.subscribe(a),o=a}).then(i);return s.cancel=function(){r.unsubscribe(o)},s},t(function(o,s,a){r.reason||(r.reason=new Fo(o,s,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new hp(function(i){t=i}),cancel:t}}}const Pj=hp;function $j(e){return function(n){return e.apply(null,n)}}function Rj(e){return R.isObject(e)&&e.isAxiosError===!0}const jd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(jd).forEach(([e,t])=>{jd[t]=e});const zj=jd;function vv(e){const t=new $s(e),n=tv($s.prototype.request,t);return R.extend(n,$s.prototype,t,{allOwnKeys:!0}),R.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return vv(ui(e,i))},n}const Le=vv(fp);Le.Axios=$s;Le.CanceledError=Fo;Le.CancelToken=Pj;Le.isCancel=gv;Le.VERSION=yv;Le.toFormData=Ml;Le.AxiosError=ee;Le.Cancel=Le.CanceledError;Le.all=function(t){return Promise.all(t)};Le.spread=$j;Le.isAxiosError=Rj;Le.mergeConfig=ui;Le.AxiosHeaders=on;Le.formToJSON=e=>mv(R.isHTMLForm(e)?new FormData(e):e);Le.HttpStatusCode=zj;Le.default=Le;const Nj=Le,le=Nj.create({baseURL:"https://frang.ge"}),Yi=ae("books/fetchBooksPreview",async e=>{try{return(await le.get("books")).data}catch(t){throw console.log(t),Error("Failed to fetch books preview")}}),Rs=ae("books/fetchSelectedBook",async e=>{try{return(await le.get(`books/${e}`)).data}catch(t){throw console.log(t),Error("Failed to fetch selected")}}),Bj={books:[],selectedBook:[],isLoading:!1,error:null},Ij=Pe({name:"books",initialState:Bj,reducers:{},extraReducers:e=>{e.addCase(Yi.pending,t=>{t.isLoading=!0}).addCase(Yi.fulfilled,(t,n)=>{t.books=n.payload,t.isLoading=!1}).addCase(Yi.rejected,(t,n)=>{t.error=n.error.message}).addCase(Rs.pending,t=>{t.isLoading=!0}).addCase(Rs.fulfilled,(t,n)=>{t.selectedBook=n.payload,t.isLoading=!1}).addCase(Rs.rejected,(t,n)=>{t.error=n.error.message})}}),Fj=Ij.reducer,Ji=ae("vocabularyTopics/fetchVocabularyTopics",async()=>{try{return(await le.get("/vocabulary-topics")).data}catch{throw Error("Failed to fetch phrases for lesson")}}),Dj={vocabularyTopics:[],isLoading:!1,error:null},Mj=Pe({name:"vocabularyTopics",initialState:Dj,reducers:{},extraReducers:e=>{e.addCase(Ji.pending,t=>{t.isLoading=!0,t.error=null}).addCase(Ji.fulfilled,(t,n)=>{t.vocabularyTopics=n.payload,t.isLoading=!1}).addCase(Ji.rejected,(t,n)=>{t.isLoading=!1,t.error=n.error.message})}}),_j=Mj.reducer;var wv={},bv={},Wl={},Sv={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0},n=t;e.default=n})(Sv);var Uj="Expected a function",Rm=0/0,Wj="[object Symbol]",Hj=/^\s+|\s+$/g,Vj=/^[-+]0x[0-9a-f]+$/i,Qj=/^0b[01]+$/i,Gj=/^0o[0-7]+$/i,qj=parseInt,Kj=typeof _o=="object"&&_o&&_o.Object===Object&&_o,Yj=typeof self=="object"&&self&&self.Object===Object&&self,Jj=Kj||Yj||Function("return this")(),Xj=Object.prototype,Zj=Xj.toString,eE=Math.max,tE=Math.min,Uc=function(){return Jj.Date.now()};function nE(e,t,n){var r,i,o,s,a,c,u=0,d=!1,p=!1,h=!0;if(typeof e!="function")throw new TypeError(Uj);t=zm(t)||0,Ed(n)&&(d=!!n.leading,p="maxWait"in n,o=p?eE(zm(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h);function g(C){var j=r,T=i;return r=i=void 0,u=C,s=e.apply(T,j),s}function y(C){return u=C,a=setTimeout(x,t),d?g(C):s}function v(C){var j=C-c,T=C-u,O=t-j;return p?tE(O,o-T):O}function b(C){var j=C-c,T=C-u;return c===void 0||j>=t||j<0||p&&T>=o}function x(){var C=Uc();if(b(C))return m(C);a=setTimeout(x,v(C))}function m(C){return a=void 0,h&&r?g(C):(r=i=void 0,s)}function w(){a!==void 0&&clearTimeout(a),u=0,r=c=i=a=void 0}function k(){return a===void 0?s:m(Uc())}function A(){var C=Uc(),j=b(C);if(r=arguments,i=this,c=C,j){if(a===void 0)return y(c);if(p)return a=setTimeout(x,t),g(c)}return a===void 0&&(a=setTimeout(x,t)),s}return A.cancel=w,A.flush=k,A}function Ed(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function rE(e){return!!e&&typeof e=="object"}function iE(e){return typeof e=="symbol"||rE(e)&&Zj.call(e)==Wj}function zm(e){if(typeof e=="number")return e;if(iE(e))return Rm;if(Ed(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Ed(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Hj,"");var n=Qj.test(e);return n||Gj.test(e)?qj(e.slice(2),n?2:8):Vj.test(e)?Rm:+e}var oE=nE,kv={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var s=typeof o;if(s==="string"||s==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var a=n.apply(null,o);a&&r.push(a)}}else if(s==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var c in o)t.call(o,c)&&o[c]&&r.push(c)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(kv);var Hl=kv.exports,U={};Object.defineProperty(U,"__esModule",{value:!0});U.checkSpecKeys=U.checkNavigable=U.changeSlide=U.canUseDOM=U.canGoNext=void 0;U.clamp=Cv;U.swipeStart=U.swipeMove=U.swipeEnd=U.slidesOnRight=U.slidesOnLeft=U.slideHandler=U.siblingDirection=U.safePreventDefault=U.lazyStartIndex=U.lazySlidesOnRight=U.lazySlidesOnLeft=U.lazyEndIndex=U.keyHandler=U.initializedState=U.getWidth=U.getTrackLeft=U.getTrackCSS=U.getTrackAnimateCSS=U.getTotalSlides=U.getSwipeDirection=U.getSlideCount=U.getRequiredLazySlides=U.getPreClones=U.getPostClones=U.getOnDemandLazySlides=U.getNavigableIndexes=U.getHeight=U.extractObject=void 0;var sE=aE(S);function aE(e){return e&&e.__esModule?e:{default:e}}function Nm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function pe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Nm(Object(n),!0).forEach(function(r){lE(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Nm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function lE(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Cv(e,t,n){return Math.max(t,Math.min(e,n))}var or=function(t){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(t._reactName)||t.preventDefault()};U.safePreventDefault=or;var mp=function(t){for(var n=[],r=gp(t),i=xp(t),o=r;o<i;o++)t.lazyLoadedList.indexOf(o)<0&&n.push(o);return n};U.getOnDemandLazySlides=mp;var cE=function(t){for(var n=[],r=gp(t),i=xp(t),o=r;o<i;o++)n.push(o);return n};U.getRequiredLazySlides=cE;var gp=function(t){return t.currentSlide-Av(t)};U.lazyStartIndex=gp;var xp=function(t){return t.currentSlide+jv(t)};U.lazyEndIndex=xp;var Av=function(t){return t.centerMode?Math.floor(t.slidesToShow/2)+(parseInt(t.centerPadding)>0?1:0):0};U.lazySlidesOnLeft=Av;var jv=function(t){return t.centerMode?Math.floor((t.slidesToShow-1)/2)+1+(parseInt(t.centerPadding)>0?1:0):t.slidesToShow};U.lazySlidesOnRight=jv;var Pa=function(t){return t&&t.offsetWidth||0};U.getWidth=Pa;var yp=function(t){return t&&t.offsetHeight||0};U.getHeight=yp;var vp=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,o,s;return r=t.startX-t.curX,i=t.startY-t.curY,o=Math.atan2(i,r),s=Math.round(o*180/Math.PI),s<0&&(s=360-Math.abs(s)),s<=45&&s>=0||s<=360&&s>=315?"left":s>=135&&s<=225?"right":n===!0?s>=35&&s<=135?"up":"down":"vertical"};U.getSwipeDirection=vp;var wp=function(t){var n=!0;return t.infinite||(t.centerMode&&t.currentSlide>=t.slideCount-1||t.slideCount<=t.slidesToShow||t.currentSlide>=t.slideCount-t.slidesToShow)&&(n=!1),n};U.canGoNext=wp;var uE=function(t,n){var r={};return n.forEach(function(i){return r[i]=t[i]}),r};U.extractObject=uE;var dE=function(t){var n=sE.default.Children.count(t.children),r=t.listRef,i=Math.ceil(Pa(r)),o=t.trackRef&&t.trackRef.node,s=Math.ceil(Pa(o)),a;if(t.vertical)a=i;else{var c=t.centerMode&&parseInt(t.centerPadding)*2;typeof t.centerPadding=="string"&&t.centerPadding.slice(-1)==="%"&&(c*=i/100),a=Math.ceil((i-c)/t.slidesToShow)}var u=r&&yp(r.querySelector('[data-index="0"]')),d=u*t.slidesToShow,p=t.currentSlide===void 0?t.initialSlide:t.currentSlide;t.rtl&&t.currentSlide===void 0&&(p=n-1-t.initialSlide);var h=t.lazyLoadedList||[],g=mp(pe(pe({},t),{},{currentSlide:p,lazyLoadedList:h}));h=h.concat(g);var y={slideCount:n,slideWidth:a,listWidth:i,trackWidth:s,currentSlide:p,slideHeight:u,listHeight:d,lazyLoadedList:h};return t.autoplaying===null&&t.autoplay&&(y.autoplaying="playing"),y};U.initializedState=dE;var fE=function(t){var n=t.waitForAnimate,r=t.animating,i=t.fade,o=t.infinite,s=t.index,a=t.slideCount,c=t.lazyLoad,u=t.currentSlide,d=t.centerMode,p=t.slidesToScroll,h=t.slidesToShow,g=t.useCSS,y=t.lazyLoadedList;if(n&&r)return{};var v=s,b,x,m,w={},k={},A=o?s:Cv(s,0,a-1);if(i){if(!o&&(s<0||s>=a))return{};s<0?v=s+a:s>=a&&(v=s-a),c&&y.indexOf(v)<0&&(y=y.concat(v)),w={animating:!0,currentSlide:v,lazyLoadedList:y,targetSlide:v},k={animating:!1,targetSlide:v}}else b=v,v<0?(b=v+a,o?a%p!==0&&(b=a-a%p):b=0):!wp(t)&&v>u?v=b=u:d&&v>=a?(v=o?a:a-1,b=o?0:a-1):v>=a&&(b=v-a,o?a%p!==0&&(b=0):b=a-h),!o&&v+h>=a&&(b=a-h),x=Eo(pe(pe({},t),{},{slideIndex:v})),m=Eo(pe(pe({},t),{},{slideIndex:b})),o||(x===m&&(v=b),x=m),c&&(y=y.concat(mp(pe(pe({},t),{},{currentSlide:v})))),g?(w={animating:!0,currentSlide:b,trackStyle:bp(pe(pe({},t),{},{left:x})),lazyLoadedList:y,targetSlide:A},k={animating:!1,currentSlide:b,trackStyle:jo(pe(pe({},t),{},{left:m})),swipeLeft:null,targetSlide:A}):w={currentSlide:b,trackStyle:jo(pe(pe({},t),{},{left:m})),lazyLoadedList:y,targetSlide:A};return{state:w,nextState:k}};U.slideHandler=fE;var pE=function(t,n){var r,i,o,s,a,c=t.slidesToScroll,u=t.slidesToShow,d=t.slideCount,p=t.currentSlide,h=t.targetSlide,g=t.lazyLoad,y=t.infinite;if(s=d%c!==0,r=s?0:(d-p)%c,n.message==="previous")o=r===0?c:u-r,a=p-o,g&&!y&&(i=p-o,a=i===-1?d-1:i),y||(a=h-c);else if(n.message==="next")o=r===0?c:r,a=p+o,g&&!y&&(a=(p+c)%d+r),y||(a=h+c);else if(n.message==="dots")a=n.index*n.slidesToScroll;else if(n.message==="children"){if(a=n.index,y){var v=Ov(pe(pe({},t),{},{targetSlide:a}));a>n.currentSlide&&v==="left"?a=a-d:a<n.currentSlide&&v==="right"&&(a=a+d)}}else n.message==="index"&&(a=Number(n.index));return a};U.changeSlide=pE;var hE=function(t,n,r){return t.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":t.keyCode===37?r?"next":"previous":t.keyCode===39?r?"previous":"next":""};U.keyHandler=hE;var mE=function(t,n,r){return t.target.tagName==="IMG"&&or(t),!n||!r&&t.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:t.touches?t.touches[0].pageX:t.clientX,startY:t.touches?t.touches[0].pageY:t.clientY,curX:t.touches?t.touches[0].pageX:t.clientX,curY:t.touches?t.touches[0].pageY:t.clientY}}};U.swipeStart=mE;var gE=function(t,n){var r=n.scrolling,i=n.animating,o=n.vertical,s=n.swipeToSlide,a=n.verticalSwiping,c=n.rtl,u=n.currentSlide,d=n.edgeFriction,p=n.edgeDragged,h=n.onEdge,g=n.swiped,y=n.swiping,v=n.slideCount,b=n.slidesToScroll,x=n.infinite,m=n.touchObject,w=n.swipeEvent,k=n.listHeight,A=n.listWidth;if(!r){if(i)return or(t);o&&s&&a&&or(t);var C,j={},T=Eo(n);m.curX=t.touches?t.touches[0].pageX:t.clientX,m.curY=t.touches?t.touches[0].pageY:t.clientY,m.swipeLength=Math.round(Math.sqrt(Math.pow(m.curX-m.startX,2)));var O=Math.round(Math.sqrt(Math.pow(m.curY-m.startY,2)));if(!a&&!y&&O>10)return{scrolling:!0};a&&(m.swipeLength=O);var P=(c?-1:1)*(m.curX>m.startX?1:-1);a&&(P=m.curY>m.startY?1:-1);var E=Math.ceil(v/b),z=vp(n.touchObject,a),B=m.swipeLength;return x||(u===0&&(z==="right"||z==="down")||u+1>=E&&(z==="left"||z==="up")||!wp(n)&&(z==="left"||z==="up"))&&(B=m.swipeLength*d,p===!1&&h&&(h(z),j.edgeDragged=!0)),!g&&w&&(w(z),j.swiped=!0),o?C=T+B*(k/A)*P:c?C=T-B*P:C=T+B*P,a&&(C=T+B*P),j=pe(pe({},j),{},{touchObject:m,swipeLeft:C,trackStyle:jo(pe(pe({},n),{},{left:C}))}),Math.abs(m.curX-m.startX)<Math.abs(m.curY-m.startY)*.8||m.swipeLength>10&&(j.swiping=!0,or(t)),j}};U.swipeMove=gE;var xE=function(t,n){var r=n.dragging,i=n.swipe,o=n.touchObject,s=n.listWidth,a=n.touchThreshold,c=n.verticalSwiping,u=n.listHeight,d=n.swipeToSlide,p=n.scrolling,h=n.onSwipe,g=n.targetSlide,y=n.currentSlide,v=n.infinite;if(!r)return i&&or(t),{};var b=c?u/a:s/a,x=vp(o,c),m={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(p||!o.swipeLength)return m;if(o.swipeLength>b){or(t),h&&h(x);var w,k,A=v?y:g;switch(x){case"left":case"up":k=A+Ld(n),w=d?Td(n,k):k,m.currentDirection=0;break;case"right":case"down":k=A-Ld(n),w=d?Td(n,k):k,m.currentDirection=1;break;default:w=A}m.triggerSlideHandler=w}else{var C=Eo(n);m.trackStyle=bp(pe(pe({},n),{},{left:C}))}return m};U.swipeEnd=xE;var Ev=function(t){for(var n=t.infinite?t.slideCount*2:t.slideCount,r=t.infinite?t.slidesToShow*-1:0,i=t.infinite?t.slidesToShow*-1:0,o=[];r<n;)o.push(r),r=i+t.slidesToScroll,i+=Math.min(t.slidesToScroll,t.slidesToShow);return o};U.getNavigableIndexes=Ev;var Td=function(t,n){var r=Ev(t),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var o in r){if(n<r[o]){n=i;break}i=r[o]}return n};U.checkNavigable=Td;var Ld=function(t){var n=t.centerMode?t.slideWidth*Math.floor(t.slidesToShow/2):0;if(t.swipeToSlide){var r,i=t.listRef,o=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(o).every(function(c){if(t.vertical){if(c.offsetTop+yp(c)/2>t.swipeLeft*-1)return r=c,!1}else if(c.offsetLeft-n+Pa(c)/2>t.swipeLeft*-1)return r=c,!1;return!0}),!r)return 0;var s=t.rtl===!0?t.slideCount-t.currentSlide:t.currentSlide,a=Math.abs(r.dataset.index-s)||1;return a}else return t.slidesToScroll};U.getSlideCount=Ld;var Vl=function(t,n){return n.reduce(function(r,i){return r&&t.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",t)};U.checkSpecKeys=Vl;var jo=function(t){Vl(t,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=t.slideCount+2*t.slidesToShow;t.vertical?r=i*t.slideHeight:n=Lv(t)*t.slideWidth;var o={opacity:1,transition:"",WebkitTransition:""};if(t.useTransform){var s=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",a=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",c=t.vertical?"translateY("+t.left+"px)":"translateX("+t.left+"px)";o=pe(pe({},o),{},{WebkitTransform:s,transform:a,msTransform:c})}else t.vertical?o.top=t.left:o.left=t.left;return t.fade&&(o={opacity:1}),n&&(o.width=n),r&&(o.height=r),window&&!window.addEventListener&&window.attachEvent&&(t.vertical?o.marginTop=t.left+"px":o.marginLeft=t.left+"px"),o};U.getTrackCSS=jo;var bp=function(t){Vl(t,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=jo(t);return t.useTransform?(n.WebkitTransition="-webkit-transform "+t.speed+"ms "+t.cssEase,n.transition="transform "+t.speed+"ms "+t.cssEase):t.vertical?n.transition="top "+t.speed+"ms "+t.cssEase:n.transition="left "+t.speed+"ms "+t.cssEase,n};U.getTrackAnimateCSS=bp;var Eo=function(t){if(t.unslick)return 0;Vl(t,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=t.slideIndex,r=t.trackRef,i=t.infinite,o=t.centerMode,s=t.slideCount,a=t.slidesToShow,c=t.slidesToScroll,u=t.slideWidth,d=t.listWidth,p=t.variableWidth,h=t.slideHeight,g=t.fade,y=t.vertical,v=0,b,x,m=0;if(g||t.slideCount===1)return 0;var w=0;if(i?(w=-Xi(t),s%c!==0&&n+c>s&&(w=-(n>s?a-(n-s):s%c)),o&&(w+=parseInt(a/2))):(s%c!==0&&n+c>s&&(w=a-s%c),o&&(w=parseInt(a/2))),v=w*u,m=w*h,y?b=n*h*-1+m:b=n*u*-1+v,p===!0){var k,A=r&&r.node;if(k=n+Xi(t),x=A&&A.childNodes[k],b=x?x.offsetLeft*-1:0,o===!0){k=i?n+Xi(t):n,x=A&&A.children[k],b=0;for(var C=0;C<k;C++)b-=A&&A.children[C]&&A.children[C].offsetWidth;b-=parseInt(t.centerPadding),b+=x&&(d-x.offsetWidth)/2}}return b};U.getTrackLeft=Eo;var Xi=function(t){return t.unslick||!t.infinite?0:t.variableWidth?t.slideCount:t.slidesToShow+(t.centerMode?1:0)};U.getPreClones=Xi;var Tv=function(t){return t.unslick||!t.infinite?0:t.slideCount};U.getPostClones=Tv;var Lv=function(t){return t.slideCount===1?1:Xi(t)+t.slideCount+Tv(t)};U.getTotalSlides=Lv;var Ov=function(t){return t.targetSlide>t.currentSlide?t.targetSlide>t.currentSlide+Pv(t)?"left":"right":t.targetSlide<t.currentSlide-$v(t)?"right":"left"};U.siblingDirection=Ov;var Pv=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var s=(n-1)/2+1;return parseInt(o)>0&&(s+=1),i&&n%2===0&&(s+=1),s}return i?0:n-1};U.slidesOnRight=Pv;var $v=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var s=(n-1)/2+1;return parseInt(o)>0&&(s+=1),!i&&n%2===0&&(s+=1),s}return i?n-1:0};U.slidesOnLeft=$v;var yE=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};U.canUseDOM=yE;var Ql={};function Od(e){"@babel/helpers - typeof";return Od=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Od(e)}Object.defineProperty(Ql,"__esModule",{value:!0});Ql.Track=void 0;var wn=Rv(S),Wc=Rv(Hl),Hc=U;function Rv(e){return e&&e.__esModule?e:{default:e}}function Pd(){return Pd=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pd.apply(this,arguments)}function vE(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Bm(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function wE(e,t,n){return t&&Bm(e.prototype,t),n&&Bm(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function bE(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&$d(e,t)}function $d(e,t){return $d=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},$d(e,t)}function SE(e){var t=CE();return function(){var r=$a(e),i;if(t){var o=$a(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return kE(this,i)}}function kE(e,t){if(t&&(Od(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Rd(e)}function Rd(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function CE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function $a(e){return $a=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},$a(e)}function Im(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function it(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Im(Object(n),!0).forEach(function(r){zd(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Im(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zd(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Vc=function(t){var n,r,i,o,s;t.rtl?s=t.slideCount-1-t.index:s=t.index,i=s<0||s>=t.slideCount,t.centerMode?(o=Math.floor(t.slidesToShow/2),r=(s-t.currentSlide)%t.slideCount===0,s>t.currentSlide-o-1&&s<=t.currentSlide+o&&(n=!0)):n=t.currentSlide<=s&&s<t.currentSlide+t.slidesToShow;var a;t.targetSlide<0?a=t.targetSlide+t.slideCount:t.targetSlide>=t.slideCount?a=t.targetSlide-t.slideCount:a=t.targetSlide;var c=s===a;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":c}},AE=function(t){var n={};return(t.variableWidth===void 0||t.variableWidth===!1)&&(n.width=t.slideWidth),t.fade&&(n.position="relative",t.vertical?n.top=-t.index*parseInt(t.slideHeight):n.left=-t.index*parseInt(t.slideWidth),n.opacity=t.currentSlide===t.index?1:0,t.useCSS&&(n.transition="opacity "+t.speed+"ms "+t.cssEase+", visibility "+t.speed+"ms "+t.cssEase)),n},Qc=function(t,n){return t.key||n},jE=function(t){var n,r=[],i=[],o=[],s=wn.default.Children.count(t.children),a=(0,Hc.lazyStartIndex)(t),c=(0,Hc.lazyEndIndex)(t);return wn.default.Children.forEach(t.children,function(u,d){var p,h={message:"children",index:d,slidesToScroll:t.slidesToScroll,currentSlide:t.currentSlide};!t.lazyLoad||t.lazyLoad&&t.lazyLoadedList.indexOf(d)>=0?p=u:p=wn.default.createElement("div",null);var g=AE(it(it({},t),{},{index:d})),y=p.props.className||"",v=Vc(it(it({},t),{},{index:d}));if(r.push(wn.default.cloneElement(p,{key:"original"+Qc(p,d),"data-index":d,className:(0,Wc.default)(v,y),tabIndex:"-1","aria-hidden":!v["slick-active"],style:it(it({outline:"none"},p.props.style||{}),g),onClick:function(m){p.props&&p.props.onClick&&p.props.onClick(m),t.focusOnSelect&&t.focusOnSelect(h)}})),t.infinite&&t.fade===!1){var b=s-d;b<=(0,Hc.getPreClones)(t)&&s!==t.slidesToShow&&(n=-b,n>=a&&(p=u),v=Vc(it(it({},t),{},{index:n})),i.push(wn.default.cloneElement(p,{key:"precloned"+Qc(p,n),"data-index":n,tabIndex:"-1",className:(0,Wc.default)(v,y),"aria-hidden":!v["slick-active"],style:it(it({},p.props.style||{}),g),onClick:function(m){p.props&&p.props.onClick&&p.props.onClick(m),t.focusOnSelect&&t.focusOnSelect(h)}}))),s!==t.slidesToShow&&(n=s+d,n<c&&(p=u),v=Vc(it(it({},t),{},{index:n})),o.push(wn.default.cloneElement(p,{key:"postcloned"+Qc(p,n),"data-index":n,tabIndex:"-1",className:(0,Wc.default)(v,y),"aria-hidden":!v["slick-active"],style:it(it({},p.props.style||{}),g),onClick:function(m){p.props&&p.props.onClick&&p.props.onClick(m),t.focusOnSelect&&t.focusOnSelect(h)}})))}}),t.rtl?i.concat(r,o).reverse():i.concat(r,o)},EE=function(e){bE(n,e);var t=SE(n);function n(){var r;vE(this,n);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return r=t.call.apply(t,[this].concat(o)),zd(Rd(r),"node",null),zd(Rd(r),"handleRef",function(a){r.node=a}),r}return wE(n,[{key:"render",value:function(){var i=jE(this.props),o=this.props,s=o.onMouseEnter,a=o.onMouseOver,c=o.onMouseLeave,u={onMouseEnter:s,onMouseOver:a,onMouseLeave:c};return wn.default.createElement("div",Pd({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},u),i)}}]),n}(wn.default.PureComponent);Ql.Track=EE;var Gl={};function Nd(e){"@babel/helpers - typeof";return Nd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Nd(e)}Object.defineProperty(Gl,"__esModule",{value:!0});Gl.Dots=void 0;var ss=zv(S),TE=zv(Hl),Fm=U;function zv(e){return e&&e.__esModule?e:{default:e}}function Dm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function LE(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Dm(Object(n),!0).forEach(function(r){OE(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Dm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function OE(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function PE(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Mm(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $E(e,t,n){return t&&Mm(e.prototype,t),n&&Mm(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function RE(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Bd(e,t)}function Bd(e,t){return Bd=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Bd(e,t)}function zE(e){var t=IE();return function(){var r=Ra(e),i;if(t){var o=Ra(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return NE(this,i)}}function NE(e,t){if(t&&(Nd(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return BE(e)}function BE(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function IE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ra(e){return Ra=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Ra(e)}var FE=function(t){var n;return t.infinite?n=Math.ceil(t.slideCount/t.slidesToScroll):n=Math.ceil((t.slideCount-t.slidesToShow)/t.slidesToScroll)+1,n},DE=function(e){RE(n,e);var t=zE(n);function n(){return PE(this,n),t.apply(this,arguments)}return $E(n,[{key:"clickHandler",value:function(i,o){o.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,o=i.onMouseEnter,s=i.onMouseOver,a=i.onMouseLeave,c=i.infinite,u=i.slidesToScroll,d=i.slidesToShow,p=i.slideCount,h=i.currentSlide,g=FE({slideCount:p,slidesToScroll:u,slidesToShow:d,infinite:c}),y={onMouseEnter:o,onMouseOver:s,onMouseLeave:a},v=[],b=0;b<g;b++){var x=(b+1)*u-1,m=c?x:(0,Fm.clamp)(x,0,p-1),w=m-(u-1),k=c?w:(0,Fm.clamp)(w,0,p-1),A=(0,TE.default)({"slick-active":c?h>=k&&h<=m:h===k}),C={message:"dots",index:b,slidesToScroll:u,currentSlide:h},j=this.clickHandler.bind(this,C);v=v.concat(ss.default.createElement("li",{key:b,className:A},ss.default.cloneElement(this.props.customPaging(b),{onClick:j})))}return ss.default.cloneElement(this.props.appendDots(v),LE({className:this.props.dotsClass},y))}}]),n}(ss.default.PureComponent);Gl.Dots=DE;var di={};function Id(e){"@babel/helpers - typeof";return Id=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Id(e)}Object.defineProperty(di,"__esModule",{value:!0});di.PrevArrow=di.NextArrow=void 0;var Hr=Bv(S),Nv=Bv(Hl),ME=U;function Bv(e){return e&&e.__esModule?e:{default:e}}function za(){return za=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},za.apply(this,arguments)}function _m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Na(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_m(Object(n),!0).forEach(function(r){_E(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_m(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function _E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Iv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Um(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Fv(e,t,n){return t&&Um(e.prototype,t),n&&Um(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Dv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Fd(e,t)}function Fd(e,t){return Fd=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Fd(e,t)}function Mv(e){var t=HE();return function(){var r=Ba(e),i;if(t){var o=Ba(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return UE(this,i)}}function UE(e,t){if(t&&(Id(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return WE(e)}function WE(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function HE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ba(e){return Ba=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Ba(e)}var VE=function(e){Dv(n,e);var t=Mv(n);function n(){return Iv(this,n),t.apply(this,arguments)}return Fv(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},o=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,o=null);var s={key:"0","data-role":"none",className:(0,Nv.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},c;return this.props.prevArrow?c=Hr.default.cloneElement(this.props.prevArrow,Na(Na({},s),a)):c=Hr.default.createElement("button",za({key:"0",type:"button"},s)," ","Previous"),c}}]),n}(Hr.default.PureComponent);di.PrevArrow=VE;var QE=function(e){Dv(n,e);var t=Mv(n);function n(){return Iv(this,n),t.apply(this,arguments)}return Fv(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},o=this.clickHandler.bind(this,{message:"next"});(0,ME.canGoNext)(this.props)||(i["slick-disabled"]=!0,o=null);var s={key:"1","data-role":"none",className:(0,Nv.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},c;return this.props.nextArrow?c=Hr.default.cloneElement(this.props.nextArrow,Na(Na({},s),a)):c=Hr.default.createElement("button",za({key:"1",type:"button"},s)," ","Next"),c}}]),n}(Hr.default.PureComponent);di.NextArrow=QE;var _v=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var s=o[i];n.call(r,s[1],s[0])}},t}()}(),Dd=typeof window<"u"&&typeof document<"u"&&window.document===document,Ia=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),GE=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Ia):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),qE=2;function KE(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&a()}function s(){GE(o)}function a(){var c=Date.now();if(n){if(c-i<qE)return;r=!0}else n=!0,r=!1,setTimeout(s,t);i=c}return a}var YE=20,JE=["top","right","bottom","left","width","height","size","weight"],XE=typeof MutationObserver<"u",ZE=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=KE(this.refresh.bind(this),YE)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!Dd||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),XE?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!Dd||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=JE.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),Uv=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},fi=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||Ia},Wv=ql(0,0,0,0);function Fa(e){return parseFloat(e)||0}function Wm(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var o=e["border-"+i+"-width"];return r+Fa(o)},0)}function eT(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var o=i[r],s=e["padding-"+o];n[o]=Fa(s)}return n}function tT(e){var t=e.getBBox();return ql(0,0,t.width,t.height)}function nT(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return Wv;var r=fi(e).getComputedStyle(e),i=eT(r),o=i.left+i.right,s=i.top+i.bottom,a=Fa(r.width),c=Fa(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+o)!==t&&(a-=Wm(r,"left","right")+o),Math.round(c+s)!==n&&(c-=Wm(r,"top","bottom")+s)),!iT(e)){var u=Math.round(a+o)-t,d=Math.round(c+s)-n;Math.abs(u)!==1&&(a-=u),Math.abs(d)!==1&&(c-=d)}return ql(i.left,i.top,a,c)}var rT=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof fi(e).SVGGraphicsElement}:function(e){return e instanceof fi(e).SVGElement&&typeof e.getBBox=="function"}}();function iT(e){return e===fi(e).document.documentElement}function oT(e){return Dd?rT(e)?tT(e):nT(e):Wv}function sT(e){var t=e.x,n=e.y,r=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,s=Object.create(o.prototype);return Uv(s,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),s}function ql(e,t,n,r){return{x:e,y:t,width:n,height:r}}var aT=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=ql(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=oT(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),lT=function(){function e(t,n){var r=sT(n);Uv(this,{target:t,contentRect:r})}return e}(),cT=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new _v,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof fi(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new aT(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof fi(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new lT(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),Hv=typeof WeakMap<"u"?new WeakMap:new _v,Vv=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=ZE.getInstance(),r=new cT(t,n,this);Hv.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){Vv.prototype[e]=function(){var t;return(t=Hv.get(this))[e].apply(t,arguments)}});var uT=function(){return typeof Ia.ResizeObserver<"u"?Ia.ResizeObserver:Vv}();const dT=Object.freeze(Object.defineProperty({__proto__:null,default:uT},Symbol.toStringTag,{value:"Module"})),fT=fw(dT);Object.defineProperty(Wl,"__esModule",{value:!0});Wl.InnerSlider=void 0;var Je=Do(S),pT=Do(Sv),hT=Do(oE),mT=Do(Hl),xe=U,gT=Ql,xT=Gl,Hm=di,yT=Do(fT);function Do(e){return e&&e.__esModule?e:{default:e}}function Da(e){"@babel/helpers - typeof";return Da=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Da(e)}function Ma(){return Ma=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ma.apply(this,arguments)}function vT(e,t){if(e==null)return{};var n=wT(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function wT(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Vm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Vm(Object(n),!0).forEach(function(r){X(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function bT(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Qm(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ST(e,t,n){return t&&Qm(e.prototype,t),n&&Qm(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function kT(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Md(e,t)}function Md(e,t){return Md=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Md(e,t)}function CT(e){var t=jT();return function(){var r=_a(e),i;if(t){var o=_a(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return AT(this,i)}}function AT(e,t){if(t&&(Da(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return J(e)}function J(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function jT(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function _a(e){return _a=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},_a(e)}function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ET=function(e){kT(n,e);var t=CT(n);function n(r){var i;bT(this,n),i=t.call(this,r),X(J(i),"listRefHandler",function(s){return i.list=s}),X(J(i),"trackRefHandler",function(s){return i.track=s}),X(J(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var s=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,xe.getHeight)(s)+"px"}}),X(J(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var s=(0,xe.getOnDemandLazySlides)(Q(Q({},i.props),i.state));s.length>0&&(i.setState(function(c){return{lazyLoadedList:c.lazyLoadedList.concat(s)}}),i.props.onLazyLoad&&i.props.onLazyLoad(s))}var a=Q({listRef:i.list,trackRef:i.track},i.props);i.updateState(a,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new yT.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(c){c.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,c.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),X(J(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(s){return clearTimeout(s)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),X(J(i),"componentDidUpdate",function(s){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var a=(0,xe.getOnDemandLazySlides)(Q(Q({},i.props),i.state));a.length>0&&(i.setState(function(d){return{lazyLoadedList:d.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}i.adaptHeight();var c=Q(Q({listRef:i.list,trackRef:i.track},i.props),i.state),u=i.didPropsChange(s);u&&i.updateState(c,u,function(){i.state.currentSlide>=Je.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:Je.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),X(J(i),"onWindowResized",function(s){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,hT.default)(function(){return i.resizeWindow(s)},50),i.debouncedResize()}),X(J(i),"resizeWindow",function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,a=!!(i.track&&i.track.node);if(a){var c=Q(Q({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(c,s,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),X(J(i),"updateState",function(s,a,c){var u=(0,xe.initializedState)(s);s=Q(Q(Q({},s),u),{},{slideIndex:u.currentSlide});var d=(0,xe.getTrackLeft)(s);s=Q(Q({},s),{},{left:d});var p=(0,xe.getTrackCSS)(s);(a||Je.default.Children.count(i.props.children)!==Je.default.Children.count(s.children))&&(u.trackStyle=p),i.setState(u,c)}),X(J(i),"ssrInit",function(){if(i.props.variableWidth){var s=0,a=0,c=[],u=(0,xe.getPreClones)(Q(Q(Q({},i.props),i.state),{},{slideCount:i.props.children.length})),d=(0,xe.getPostClones)(Q(Q(Q({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(j){c.push(j.props.style.width),s+=j.props.style.width});for(var p=0;p<u;p++)a+=c[c.length-1-p],s+=c[c.length-1-p];for(var h=0;h<d;h++)s+=c[h];for(var g=0;g<i.state.currentSlide;g++)a+=c[g];var y={width:s+"px",left:-a+"px"};if(i.props.centerMode){var v="".concat(c[i.state.currentSlide],"px");y.left="calc(".concat(y.left," + (100% - ").concat(v,") / 2 ) ")}return{trackStyle:y}}var b=Je.default.Children.count(i.props.children),x=Q(Q(Q({},i.props),i.state),{},{slideCount:b}),m=(0,xe.getPreClones)(x)+(0,xe.getPostClones)(x)+b,w=100/i.props.slidesToShow*m,k=100/m,A=-k*((0,xe.getPreClones)(x)+i.state.currentSlide)*w/100;i.props.centerMode&&(A+=(100-k*w/100)/2);var C={width:w+"%",left:A+"%"};return{slideWidth:k+"%",trackStyle:C}}),X(J(i),"checkImagesLoad",function(){var s=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],a=s.length,c=0;Array.prototype.forEach.call(s,function(u){var d=function(){return++c&&c>=a&&i.onWindowResized()};if(!u.onclick)u.onclick=function(){return u.parentNode.focus()};else{var p=u.onclick;u.onclick=function(){p(),u.parentNode.focus()}}u.onload||(i.props.lazyLoad?u.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(u.onload=d,u.onerror=function(){d(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),X(J(i),"progressiveLazyLoad",function(){for(var s=[],a=Q(Q({},i.props),i.state),c=i.state.currentSlide;c<i.state.slideCount+(0,xe.getPostClones)(a);c++)if(i.state.lazyLoadedList.indexOf(c)<0){s.push(c);break}for(var u=i.state.currentSlide-1;u>=-(0,xe.getPreClones)(a);u--)if(i.state.lazyLoadedList.indexOf(u)<0){s.push(u);break}s.length>0?(i.setState(function(d){return{lazyLoadedList:d.lazyLoadedList.concat(s)}}),i.props.onLazyLoad&&i.props.onLazyLoad(s)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),X(J(i),"slideHandler",function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=i.props,u=c.asNavFor,d=c.beforeChange,p=c.onLazyLoad,h=c.speed,g=c.afterChange,y=i.state.currentSlide,v=(0,xe.slideHandler)(Q(Q(Q({index:s},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!a})),b=v.state,x=v.nextState;if(b){d&&d(y,b.currentSlide);var m=b.lazyLoadedList.filter(function(w){return i.state.lazyLoadedList.indexOf(w)<0});p&&m.length>0&&p(m),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),g&&g(y),delete i.animationEndCallback),i.setState(b,function(){u&&i.asNavForIndex!==s&&(i.asNavForIndex=s,u.innerSlider.slideHandler(s)),x&&(i.animationEndCallback=setTimeout(function(){var w=x.animating,k=vT(x,["animating"]);i.setState(k,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:w})},10)),g&&g(b.currentSlide),delete i.animationEndCallback})},h))})}}),X(J(i),"changeSlide",function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=Q(Q({},i.props),i.state),u=(0,xe.changeSlide)(c,s);if(!(u!==0&&!u)&&(a===!0?i.slideHandler(u,a):i.slideHandler(u),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var d=i.list.querySelectorAll(".slick-current");d[0]&&d[0].focus()}}),X(J(i),"clickHandler",function(s){i.clickable===!1&&(s.stopPropagation(),s.preventDefault()),i.clickable=!0}),X(J(i),"keyHandler",function(s){var a=(0,xe.keyHandler)(s,i.props.accessibility,i.props.rtl);a!==""&&i.changeSlide({message:a})}),X(J(i),"selectHandler",function(s){i.changeSlide(s)}),X(J(i),"disableBodyScroll",function(){var s=function(c){c=c||window.event,c.preventDefault&&c.preventDefault(),c.returnValue=!1};window.ontouchmove=s}),X(J(i),"enableBodyScroll",function(){window.ontouchmove=null}),X(J(i),"swipeStart",function(s){i.props.verticalSwiping&&i.disableBodyScroll();var a=(0,xe.swipeStart)(s,i.props.swipe,i.props.draggable);a!==""&&i.setState(a)}),X(J(i),"swipeMove",function(s){var a=(0,xe.swipeMove)(s,Q(Q(Q({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));a&&(a.swiping&&(i.clickable=!1),i.setState(a))}),X(J(i),"swipeEnd",function(s){var a=(0,xe.swipeEnd)(s,Q(Q(Q({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(a){var c=a.triggerSlideHandler;delete a.triggerSlideHandler,i.setState(a),c!==void 0&&(i.slideHandler(c),i.props.verticalSwiping&&i.enableBodyScroll())}}),X(J(i),"touchEnd",function(s){i.swipeEnd(s),i.clickable=!0}),X(J(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),X(J(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),X(J(i),"slickGoTo",function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(s=Number(s),isNaN(s))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:s,currentSlide:i.state.currentSlide},a)},0))}),X(J(i),"play",function(){var s;if(i.props.rtl)s=i.state.currentSlide-i.props.slidesToScroll;else if((0,xe.canGoNext)(Q(Q({},i.props),i.state)))s=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(s)}),X(J(i),"autoPlay",function(s){i.autoplayTimer&&clearInterval(i.autoplayTimer);var a=i.state.autoplaying;if(s==="update"){if(a==="hovered"||a==="focused"||a==="paused")return}else if(s==="leave"){if(a==="paused"||a==="focused")return}else if(s==="blur"&&(a==="paused"||a==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),X(J(i),"pause",function(s){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var a=i.state.autoplaying;s==="paused"?i.setState({autoplaying:"paused"}):s==="focused"?(a==="hovered"||a==="playing")&&i.setState({autoplaying:"focused"}):a==="playing"&&i.setState({autoplaying:"hovered"})}),X(J(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),X(J(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),X(J(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),X(J(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),X(J(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),X(J(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),X(J(i),"render",function(){var s=(0,mT.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),a=Q(Q({},i.props),i.state),c=(0,xe.extractObject)(a,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),u=i.props.pauseOnHover;c=Q(Q({},c),{},{onMouseEnter:u?i.onTrackOver:null,onMouseLeave:u?i.onTrackLeave:null,onMouseOver:u?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var d;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var p=(0,xe.extractObject)(a,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),h=i.props.pauseOnDotsHover;p=Q(Q({},p),{},{clickHandler:i.changeSlide,onMouseEnter:h?i.onDotsLeave:null,onMouseOver:h?i.onDotsOver:null,onMouseLeave:h?i.onDotsLeave:null}),d=Je.default.createElement(xT.Dots,p)}var g,y,v=(0,xe.extractObject)(a,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);v.clickHandler=i.changeSlide,i.props.arrows&&(g=Je.default.createElement(Hm.PrevArrow,v),y=Je.default.createElement(Hm.NextArrow,v));var b=null;i.props.vertical&&(b={height:i.state.listHeight});var x=null;i.props.vertical===!1?i.props.centerMode===!0&&(x={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(x={padding:i.props.centerPadding+" 0px"});var m=Q(Q({},b),x),w=i.props.touchMove,k={className:"slick-list",style:m,onClick:i.clickHandler,onMouseDown:w?i.swipeStart:null,onMouseMove:i.state.dragging&&w?i.swipeMove:null,onMouseUp:w?i.swipeEnd:null,onMouseLeave:i.state.dragging&&w?i.swipeEnd:null,onTouchStart:w?i.swipeStart:null,onTouchMove:i.state.dragging&&w?i.swipeMove:null,onTouchEnd:w?i.touchEnd:null,onTouchCancel:i.state.dragging&&w?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},A={className:s,dir:"ltr",style:i.props.style};return i.props.unslick&&(k={className:"slick-list"},A={className:s}),Je.default.createElement("div",A,i.props.unslick?"":g,Je.default.createElement("div",Ma({ref:i.listRefHandler},k),Je.default.createElement(gT.Track,Ma({ref:i.trackRefHandler},c),i.props.children)),i.props.unslick?"":y,i.props.unslick?"":d)}),i.list=null,i.track=null,i.state=Q(Q({},pT.default),{},{currentSlide:i.props.initialSlide,slideCount:Je.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var o=i.ssrInit();return i.state=Q(Q({},i.state),o),i}return ST(n,[{key:"didPropsChange",value:function(i){for(var o=!1,s=0,a=Object.keys(this.props);s<a.length;s++){var c=a[s];if(!i.hasOwnProperty(c)){o=!0;break}if(!(Da(i[c])==="object"||typeof i[c]=="function")&&i[c]!==this.props[c]){o=!0;break}}return o||Je.default.Children.count(this.props.children)!==Je.default.Children.count(i.children)}}]),n}(Je.default.Component);Wl.InnerSlider=ET;var TT=function(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()},LT=TT,OT=LT,PT=function(e){var t=/[height|width]$/;return t.test(e)},Gm=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,i){var o=e[r];r=OT(r),PT(r)&&typeof o=="number"&&(o=o+"px"),o===!0?t+=r:o===!1?t+="not "+r:t+="("+r+": "+o+")",i<n.length-1&&(t+=" and ")}),t},$T=function(e){var t="";return typeof e=="string"?e:e instanceof Array?(e.forEach(function(n,r){t+=Gm(n),r<e.length-1&&(t+=", ")}),t):Gm(e)},RT=$T,Qv={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(S);function n(o){return o&&o.__esModule?o:{default:o}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(s){return t.default.createElement("ul",{style:{display:"block"}},s)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(s){return t.default.createElement("button",null,s+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},i=r;e.default=i})(Qv);var Gc,qm;function zT(){if(qm)return Gc;qm=1;function e(t){this.options=t,!t.deferSetup&&this.setup()}return e.prototype={constructor:e,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},Gc=e,Gc}var qc,Km;function Gv(){if(Km)return qc;Km=1;function e(r,i){var o=0,s=r.length,a;for(o;o<s&&(a=i(r[o],o),a!==!1);o++);}function t(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return qc={isFunction:n,isArray:t,each:e},qc}var Kc,Ym;function NT(){if(Ym)return Kc;Ym=1;var e=zT(),t=Gv().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var o=this;this.listener=function(s){o.mql=s.currentTarget||s,o.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new e(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;t(i,function(o,s){if(o.equals(r))return o.destroy(),!i.splice(s,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){t(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";t(this.handlers,function(i){i[r]()})}},Kc=n,Kc}var Yc,Jm;function BT(){if(Jm)return Yc;Jm=1;var e=NT(),t=Gv(),n=t.each,r=t.isFunction,i=t.isArray;function o(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return o.prototype={constructor:o,register:function(s,a,c){var u=this.queries,d=c&&this.browserIsIncapable;return u[s]||(u[s]=new e(s,d)),r(a)&&(a={match:a}),i(a)||(a=[a]),n(a,function(p){r(p)&&(p={match:p}),u[s].addHandler(p)}),this},unregister:function(s,a){var c=this.queries[s];return c&&(a?c.removeHandler(a):(c.clear(),delete this.queries[s])),this}},Yc=o,Yc}var Jc,Xm;function IT(){if(Xm)return Jc;Xm=1;var e=BT();return Jc=new e,Jc}(function(e){function t(T){"@babel/helpers - typeof";return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(O){return typeof O}:function(O){return O&&typeof Symbol=="function"&&O.constructor===Symbol&&O!==Symbol.prototype?"symbol":typeof O},t(T)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(S),r=Wl,i=a(RT),o=a(Qv),s=U;function a(T){return T&&T.__esModule?T:{default:T}}function c(){return c=Object.assign||function(T){for(var O=1;O<arguments.length;O++){var P=arguments[O];for(var E in P)Object.prototype.hasOwnProperty.call(P,E)&&(T[E]=P[E])}return T},c.apply(this,arguments)}function u(T,O){var P=Object.keys(T);if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(T);O&&(E=E.filter(function(z){return Object.getOwnPropertyDescriptor(T,z).enumerable})),P.push.apply(P,E)}return P}function d(T){for(var O=1;O<arguments.length;O++){var P=arguments[O]!=null?arguments[O]:{};O%2?u(Object(P),!0).forEach(function(E){A(T,E,P[E])}):Object.getOwnPropertyDescriptors?Object.defineProperties(T,Object.getOwnPropertyDescriptors(P)):u(Object(P)).forEach(function(E){Object.defineProperty(T,E,Object.getOwnPropertyDescriptor(P,E))})}return T}function p(T,O){if(!(T instanceof O))throw new TypeError("Cannot call a class as a function")}function h(T,O){for(var P=0;P<O.length;P++){var E=O[P];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(T,E.key,E)}}function g(T,O,P){return O&&h(T.prototype,O),P&&h(T,P),Object.defineProperty(T,"prototype",{writable:!1}),T}function y(T,O){if(typeof O!="function"&&O!==null)throw new TypeError("Super expression must either be null or a function");T.prototype=Object.create(O&&O.prototype,{constructor:{value:T,writable:!0,configurable:!0}}),Object.defineProperty(T,"prototype",{writable:!1}),O&&v(T,O)}function v(T,O){return v=Object.setPrototypeOf||function(E,z){return E.__proto__=z,E},v(T,O)}function b(T){var O=w();return function(){var E=k(T),z;if(O){var B=k(this).constructor;z=Reflect.construct(E,arguments,B)}else z=E.apply(this,arguments);return x(this,z)}}function x(T,O){if(O&&(t(O)==="object"||typeof O=="function"))return O;if(O!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return m(T)}function m(T){if(T===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return T}function w(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function k(T){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(P){return P.__proto__||Object.getPrototypeOf(P)},k(T)}function A(T,O,P){return O in T?Object.defineProperty(T,O,{value:P,enumerable:!0,configurable:!0,writable:!0}):T[O]=P,T}var C=(0,s.canUseDOM)()&&IT(),j=function(T){y(P,T);var O=b(P);function P(E){var z;return p(this,P),z=O.call(this,E),A(m(z),"innerSliderRefHandler",function(B){return z.innerSlider=B}),A(m(z),"slickPrev",function(){return z.innerSlider.slickPrev()}),A(m(z),"slickNext",function(){return z.innerSlider.slickNext()}),A(m(z),"slickGoTo",function(B){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return z.innerSlider.slickGoTo(B,M)}),A(m(z),"slickPause",function(){return z.innerSlider.pause("paused")}),A(m(z),"slickPlay",function(){return z.innerSlider.autoPlay("play")}),z.state={breakpoint:null},z._responsiveMediaHandlers=[],z}return g(P,[{key:"media",value:function(z,B){C.register(z,B),this._responsiveMediaHandlers.push({query:z,handler:B})}},{key:"componentDidMount",value:function(){var z=this;if(this.props.responsive){var B=this.props.responsive.map(function(I){return I.breakpoint});B.sort(function(I,_){return I-_}),B.forEach(function(I,_){var $;_===0?$=(0,i.default)({minWidth:0,maxWidth:I}):$=(0,i.default)({minWidth:B[_-1]+1,maxWidth:I}),(0,s.canUseDOM)()&&z.media($,function(){z.setState({breakpoint:I})})});var M=(0,i.default)({minWidth:B.slice(-1)[0]});(0,s.canUseDOM)()&&this.media(M,function(){z.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(z){C.unregister(z.query,z.handler)})}},{key:"render",value:function(){var z=this,B,M;this.state.breakpoint?(M=this.props.responsive.filter(function(be){return be.breakpoint===z.state.breakpoint}),B=M[0].settings==="unslick"?"unslick":d(d(d({},o.default),this.props),M[0].settings)):B=d(d({},o.default),this.props),B.centerMode&&(B.slidesToScroll>1,B.slidesToScroll=1),B.fade&&(B.slidesToShow>1,B.slidesToScroll>1,B.slidesToShow=1,B.slidesToScroll=1);var I=n.default.Children.toArray(this.props.children);I=I.filter(function(be){return typeof be=="string"?!!be.trim():!!be}),B.variableWidth&&(B.rows>1||B.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),B.variableWidth=!1);for(var _=[],$=null,L=0;L<I.length;L+=B.rows*B.slidesPerRow){for(var F=[],N=L;N<L+B.rows*B.slidesPerRow;N+=B.slidesPerRow){for(var V=[],G=N;G<N+B.slidesPerRow&&(B.variableWidth&&I[G].props.style&&($=I[G].props.style.width),!(G>=I.length));G+=1)V.push(n.default.cloneElement(I[G],{key:100*L+10*N+G,tabIndex:-1,style:{width:"".concat(100/B.slidesPerRow,"%"),display:"inline-block"}}));F.push(n.default.createElement("div",{key:10*L+N},V))}B.variableWidth?_.push(n.default.createElement("div",{key:L,style:{width:$}},F)):_.push(n.default.createElement("div",{key:L},F))}if(B==="unslick"){var ge="regular slider "+(this.props.className||"");return n.default.createElement("div",{className:ge},I)}else _.length<=B.slidesToShow&&(B.unslick=!0);return n.default.createElement(r.InnerSlider,c({style:this.props.style,ref:this.innerSliderRefHandler},B),_)}}]),P}(n.default.Component);e.default=j})(bv);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(bv);function n(i){return i&&i.__esModule?i:{default:i}}var r=t.default;e.default=r})(wv);const FT=_g(wv);function DT(){if(console&&console.warn){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&(t[0]=`react-i18next:: ${t[0]}`),console.warn(...t)}}const Zm={};function _d(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&Zm[t[0]]||(typeof t[0]=="string"&&(Zm[t[0]]=new Date),DT(...t))}const qv=(e,t)=>()=>{if(e.isInitialized)t();else{const n=()=>{setTimeout(()=>{e.off("initialized",n)},0),t()};e.on("initialized",n)}};function eg(e,t,n){e.loadNamespaces(t,qv(e,n))}function tg(e,t,n,r){typeof n=="string"&&(n=[n]),n.forEach(i=>{e.options.ns.indexOf(i)<0&&e.options.ns.push(i)}),e.loadLanguages(t,qv(e,r))}function MT(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=t.languages[0],i=t.options?t.options.fallbackLng:!1,o=t.languages[t.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const s=(a,c)=>{const u=t.services.backendConnector.state[`${a}|${c}`];return u===-1||u===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!s(t.isLanguageChangingTo,e)?!1:!!(t.hasResourceBundle(r,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||s(r,e)&&(!i||s(o,e)))}function _T(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!t.languages||!t.languages.length?(_d("i18n.languages were undefined or empty",t.languages),!0):t.options.ignoreJSONStructure!==void 0?t.hasLoadedNamespace(e,{lng:n.lng,precheck:(i,o)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!o(i.isLanguageChangingTo,e))return!1}}):MT(e,t,n)}const UT=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,WT={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},HT=e=>WT[e],VT=e=>e.replace(UT,HT);let Ud={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:VT};function QT(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ud={...Ud,...e}}function GT(){return Ud}let Kv;function qT(e){Kv=e}function KT(){return Kv}const YT={type:"3rdParty",init(e){QT(e.options.react),qT(e)}},Yv=S.createContext();class JT{constructor(){this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const XT=(e,t)=>{const n=S.useRef();return S.useEffect(()=>{n.current=t?n.current:e},[e,t]),n.current};function q(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:n}=t,{i18n:r,defaultNS:i}=S.useContext(Yv)||{},o=n||r||KT();if(o&&!o.reportNamespaces&&(o.reportNamespaces=new JT),!o){_d("You will need to pass in an i18next instance by using initReactI18next");const w=(A,C)=>typeof C=="string"?C:C&&typeof C=="object"&&typeof C.defaultValue=="string"?C.defaultValue:Array.isArray(A)?A[A.length-1]:A,k=[w,{},!1];return k.t=w,k.i18n={},k.ready=!1,k}o.options.react&&o.options.react.wait!==void 0&&_d("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const s={...GT(),...o.options.react,...t},{useSuspense:a,keyPrefix:c}=s;let u=e||i||o.options&&o.options.defaultNS;u=typeof u=="string"?[u]:u||["translation"],o.reportNamespaces.addUsedNamespaces&&o.reportNamespaces.addUsedNamespaces(u);const d=(o.isInitialized||o.initializedStoreOnce)&&u.every(w=>_T(w,o,s));function p(){return o.getFixedT(t.lng||null,s.nsMode==="fallback"?u:u[0],c)}const[h,g]=S.useState(p);let y=u.join();t.lng&&(y=`${t.lng}${y}`);const v=XT(y),b=S.useRef(!0);S.useEffect(()=>{const{bindI18n:w,bindI18nStore:k}=s;b.current=!0,!d&&!a&&(t.lng?tg(o,t.lng,u,()=>{b.current&&g(p)}):eg(o,u,()=>{b.current&&g(p)})),d&&v&&v!==y&&b.current&&g(p);function A(){b.current&&g(p)}return w&&o&&o.on(w,A),k&&o&&o.store.on(k,A),()=>{b.current=!1,w&&o&&w.split(" ").forEach(C=>o.off(C,A)),k&&o&&k.split(" ").forEach(C=>o.store.off(C,A))}},[o,y]);const x=S.useRef(!0);S.useEffect(()=>{b.current&&!x.current&&g(p),x.current=!1},[o,c]);const m=[h,o,d];if(m.t=h,m.i18n=o,m.ready=d,d||!d&&!a)return m;throw new Promise(w=>{t.lng?tg(o,t.lng,u,()=>w()):eg(o,u,()=>w())})}function ZT(e){let{i18n:t,defaultNS:n,children:r}=e;const i=S.useMemo(()=>({i18n:t,defaultNS:n}),[t,n]);return S.createElement(Yv.Provider,{value:i},r)}const eL=dt`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`,tL=({books:e})=>{const{t}=q(),n=()=>{const i=window.innerWidth;return i>=1200?5:i>=992?4:i>=768?3:1},r={dots:!0,infinite:!0,speed:500,slidesToShow:n(),slidesToScroll:1,responsive:[{breakpoint:1200,settings:{slidesToShow:n()}},{breakpoint:992,settings:{slidesToShow:n()}},{breakpoint:768,settings:{slidesToShow:n()}},{breakpoint:0,settings:{slidesToShow:1}}]};return l.jsx(FT,{...r,children:e.map(i=>l.jsxs(nL,{children:[l.jsx(rL,{src:i.poster,alt:i.title}),l.jsx(Oe,{to:`books/${i._id}`,children:l.jsx(Jv,{children:t("Lire Extrait")})})]},i._id))})},Jv=f.span`
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${e=>e.theme.highlight5};
  color: ${e=>e.theme.background};
  padding: 8px;
  text-align: center;
  font-weight: bold;
  animation: ${eL} 0.3s ease-in-out;
`,nL=f.div`
  width: 100%;
  max-width: 12rem;
  height: 18rem;
  margin: 0 2rem;

  position: relative;
  padding: 0;
  &:hover {
    cursor: pointer;
    ${Jv} {
      display: block;
      /* transform: translateY(0); */
    }
  }
`,rL=f.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 0;
  margin: 0;
`;dt`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;f.div`
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
`;f(Oe)`
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
`;f.button`
  margin: 0 2rem;
`;const iL=dt`
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
`,oL=dt`
  from {
    stroke-dashoffset: 358;
  }
  50% {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: -358;
  }
`,sL=f.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  padding: 1.5em 0;
`,aL=f.svg`
  width: 16em;
  height: 8em;
`,lL=f.g`
  stroke: hsl(var(--hue), 90%, 90%);
  transition: stroke var(--trans-dur);
`,cL=f.path`
  animation: ${iL} 2s linear infinite;
`,uL=f.path`
  animation: ${oL} 2s linear infinite;
`,Be=()=>l.jsx(sL,{children:l.jsxs(aL,{className:"ip",viewBox:"0 0 256 128",width:"256px",height:"128px",xmlns:"http://www.w3.org/2000/svg",children:[l.jsxs("defs",{children:[l.jsxs("linearGradient",{id:"grad1",x1:"0",y1:"0",x2:"1",y2:"0",children:[l.jsx("stop",{offset:"0%",stopColor:"#FFFFFF"}),l.jsx("stop",{offset:"33%",stopColor:"#0055A4"}),l.jsx("stop",{offset:"67%",stopColor:"#EF4135"}),l.jsx("stop",{offset:"100%",stopColor:"#FFFFFF"})]}),l.jsxs("linearGradient",{id:"grad2",x1:"1",y1:"0",x2:"0",y2:"0",children:[l.jsx("stop",{offset:"0%",stopColor:"#FFFFFF"}),l.jsx("stop",{offset:"33%",stopColor:"#EF4135"}),l.jsx("stop",{offset:"67%",stopColor:"#0055A4"}),l.jsx("stop",{offset:"100%",stopColor:"#FFFFFF"})]})]}),l.jsxs("g",{fill:"none",strokeLinecap:"round",strokeWidth:"16",children:[l.jsxs(lL,{className:"ip__track",stroke:"#ddd",children:[l.jsx("path",{d:"M8,64s0-56,60-56,60,112,120,112,60-56,60-56"}),l.jsx("path",{d:"M248,64s0-56-60-56-60,112-120,112S8,64,8,64"})]}),l.jsxs("g",{strokeDasharray:"180 656",children:[l.jsx(cL,{className:"ip__worm1",stroke:"url(#grad1)",strokeDashoffset:"0",d:"M8,64s0-56,60-56,60,112,120,112,60-56,60-56"}),l.jsx(uL,{className:"ip__worm2",stroke:"url(#grad2)",strokeDashoffset:"358",d:"M248,64s0-56-60-56-60,112-120,112S8,64,8,64"})]})]})]})}),dL=dt`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`,fL=f.span`
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
  animation: ${dL} 0.3s ease-in-out;
`;f.div`
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
    ${fL} {
      display: block;
    }
  }
`;f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 0.3rem;

  p {
    font-size: 1.2rem;
  }
`;f.div`
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
`;const Vr=ae("quizData/fetchQuizData",async e=>{try{return(await le.get(`/quiz-topic/${e}`)).data}catch(t){throw console.log(t),Error("Failed to fetch words")}}),Qr=ae("quizData/fetchTopicNames",async()=>{try{return(await le.get("/quiz-topic-names")).data}catch(e){throw console.log(e),Error("Failed to fetch words")}}),zs=ae("selectedVerbDetails/fetchVerbDetails",async e=>{try{return(await le.get(`/get-verb-details/${e}`)).data}catch(t){throw console.log(t),Error("Failed to fetch verb details")}}),pL={selectedVerbDetails:[],currentTopic:[],topicNames:[],isLoading:!1,error:null},hL=Pe({name:"quizData",initialState:pL,reducers:{},extraReducers:e=>{e.addCase(Vr.pending,t=>{t.isLoading=!0}).addCase(Vr.fulfilled,(t,n)=>{t.currentTopic=n.payload,t.isLoading=!1}).addCase(Vr.rejected,(t,n)=>{t.error=n.error.message}).addCase(Qr.pending,t=>{t.isLoading=!0}).addCase(Qr.fulfilled,(t,n)=>{t.topicNames=n.payload,t.isLoading=!1}).addCase(Qr.rejected,(t,n)=>{t.error=n.error.message}).addCase(zs.pending,t=>{t.isLoading=!0}).addCase(zs.fulfilled,(t,n)=>{t.selectedVerbDetails=n.payload,t.isLoading=!1}).addCase(zs.rejected,(t,n)=>{t.error=n.error.message})}}),mL=hL.reducer,Sp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAlklEQVR4nO2PvQ2DMBBG3wopXIZhKKAhJdOQsAcjwC4oSyRIYQkjJBeWZV/4iVLdk677vrt3oCjK38mAO1Ac6JZAA1yl0BOwbnrAbFi8ZgavN0rhtxdcZwZqIV+7jN95SQdy4BMUrDM0grUvlO992QbfxKxjEl+pgCmyKHX4EBegE5bvtk5xC745ZZ3CAC3w+JW1orCJBcEfQjhF/QEaAAAAAElFTkSuQmCC",gL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACR0lEQVR4nO2XPWgUQRTHX0juvc0XCiIigopooYWFWIhWVoKgIIh1KltLW8u0KQPaiIWk0U7lovPmkkYJREFPsNAiBAsRNYVEov5lN1+3Md7tzcyuF5gfvG7Z9/vP7MzOEEUikUgkEukhYPku5miIegwYSmB5svODVgArTTT4BPUIUD4GlZepW9EAgMoStHatEsM2QPkyrHxZ9yoeYKN4Eq+JqWJgaABWxqHyu9XHIUBWL2DkcCXmRITpwQNQnt3OxTVAOhOfYOVC6fIq52H54788PAJk6yKdznFMUX9wcVAflG/Cys92Dn4BNmfjGaaH9wWTr4/ugeVHRXoHCpCFWIBNznrLm4HTsPyhaN+AAbJayaYd1Ockr3IdKj+66Rk6wPraeAhDuwuLz9IoVO679ConwGq9Q6N2svOo83GovHHtQwUCNJ1DqHyHlbE27x5be8Z1kJqdAxgacZ3ezcofCFcPYjLh9U6VB6jTro4BfBbYlpqHkaN4mhzK/uTu71lx3ijQSM5BedGj+de1chx1XkwduhbPhxjZC8t1v0/KSd7CDu33kt8IMUX9sHILKr/KF5f0uDKBOaoFkc8FUb7UejYvQX4JDb4aXDwXIl2YKq9KCPA2/UeUKr/lfnon4Pd+D09ouBL5v7ZaK8se8stQvlG5eC6ErZ2C8vvu5XkBZvAM9QLZeV75cRfyJuR9IuyNqt1WW+KNLhhQvgiVz9vIf4PyFdoJYCY5CJXnLQHmMSNHaCeBdKtVvp2VoeR/+0QikUgkEqES+AOFhOtBfI7NdwAAAABJRU5ErkJggg==",Xv=({isActive:e,onClick:t})=>{const r=xi()===hl?gL:Sp;return l.jsx(xL,{src:r,alt:"chevron",rotation:e?180:0,onClick:t})},xL=f.img`
  width: 24px;
  height: 24px;
  transition: transform 0.5s ease;
  margin-left: 1rem;

  transform: ${({rotation:e})=>`rotate(${e}deg)`};
  cursor: pointer;
`,Zv=({topic:e,selectedCategory:t,onCategoryChange:n})=>(console.log("selectedCategory in CategoryDropdown",t),l.jsx(yL,{children:l.jsx(vL,{children:l.jsx(wL,{value:t,onChange:n,children:e.map((r,i)=>l.jsx("option",{value:r,children:r},i))})})})),yL=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
`,vL=f.div`
  position: relative;
`,wL=f.select`
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
`,bL=dt`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
`,SL=dt`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`,kL=dt`
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
`,CL=dt`
  0% {
    background-position: 0 0;
  }

  50% {
    background-position: 400% 0;
  }

  100% {
    background-position: 0 0;
  }
`,AL=dt`
0% {
  transform: translateY(100%);
  opacity: 0;
}
100% {
  transform: translateY(0);
  opacity: 1;
}
`,jL=Dk`
  body {

    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    overflow-x: hidden;
  /* overflow-y: hidden; */

    font-family: 'Poppins', sans-serif;
    width: 100vw;
    background-color: ${e=>e.theme.primaryBackground};
    color: ${e=>e.theme.primaryText};

  }
  @media (max-width: 520px) {
  :root {
    --navbar-height: 230px;
  }
}

/* Tablet and larger screens navbar */
@media (min-width: 521px) {
  :root {
    --navbar-height: 300px;
  }
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


`,EL=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;f.button`
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
`;const qe=f.button`
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
`,e1=f(qe)`
  width: 12rem;
  background: ${e=>e.theme.primaryBackground};
  color: ${e=>e.theme.primaryText};
  &:hover {
    background: ${e=>e.theme.primaryText};
    color: ${e=>e.theme.primaryBackground};
  }
`,TL=f.p`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0.4rem 0.8rem;
  letter-spacing: 1.5px;
  font-size: 1.3rem;
`,Kl=f.div`
  display: flex;
  align-items: center;
  width: 1.8rem;
  height: 1.8rem;
  @media (min-width: 767px) and (max-width: 920px) {
    width: 1.8rem;
    height: 1.8rem;
  }
  @media (min-width: 577px) and (max-width: 767px) {
    width: 1.6rem;
    height: 1.6rem;
  }
  @media (min-width: 393px) and (max-width: 576px) {
    width: 1.4rem;
    height: 1.4rem;
  }
  @media (max-width: 392px) {
    width: 1.2rem;
    height: 1.2rem;
  }
  & > img {
    max-width: 100%;
    max-height: 100%;
    cursor: pointer;

    filter: ${e=>e.isActive?"none":"invert(-150%)"};
    transition: transform 0.3s ease-in-out;
    transform: ${e=>e.isActive?"scale(1.1)":"scale(1)"};
  }
`,LL=f.span`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${e=>e.isExpanded?"rotate(180deg)":"rotate(0deg)"};
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  margin: 0;
  font-size: 2rem;
  /* margin-left:auto; */
  /* border: 2px solid red; */
  @media (min-width: 767px) and (max-width: 920px) {
    font-size: 1.8rem;
  }
  @media (min-width: 577px) and (max-width: 767px) {
    font-size: 1.6rem;
  }
  @media (min-width: 393px) and (max-width: 576px) {
    font-size: 1.4rem;
  }
  @media (max-width: 392px) {
    font-size: 1.2rem;
  }
`,t1=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  /* outline: 2px solid ${e=>e.theme.tertiaryText}; */
  overflow-x: hidden;
  /* margin: 0 auto; */
  width: 96%;
  h1 {
    color: ${e=>e.theme.primaryText};
    margin: 1rem;
    @media (max-width: 361px) {
      font-size: 1rem;
    }
  }
  h4 {
    @media (max-width: 421px) {
      font-size: 1rem;
    }
  }
  p {
    margin-bottom: 2rem;
    @media (max-width: 361px) {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 361px) {
    max-width: 90%;
  }
  @media (max-width: 321px) {
    max-width: 82%;
  }
`,n1=f.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: ${e=>e.theme.primaryBackground};
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
`,r1=f.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 2rem;
  background-color: ${e=>e.theme.secondaryBackground};
  color: ${e=>e.theme.secondaryText};
  padding: 0 1rem;
  width: 335px;
  h3 {
    /* width: 100%; */

    text-align: center;
    color: ${e=>e.theme.primaryText};

    &:before {
      content: ${e=>e.theme.background==="#000000"?'"🔷"':'"🔶"'};
    }
    &:after {
      content: ${e=>e.theme.background==="#000000"?'" 🔷"':'" 🔶"'};
    }
    @media (max-width: 376px) {
      width: 89%;
    }
    @media (max-width: 300px) {
      width: 70%;
    }
  }
  h4 {
    text-align: left;

    &:before {
      content: ${e=>e.theme.background==="#000000"?'"❔"':'"❓"'};
    }
    @media (max-width: 376px) {
      width: 89%;
    }
    @media (max-width: 300px) {
      width: 70%;
    }
  }
  p {
    text-align: left;
    &:before {
      content: ${e=>e.theme.background==="#000000"?'"🔸"':'"🔹"'};
    }
    @media (max-width: 376px) {
      width: 89%;
    }
    @media (max-width: 300px) {
      width: 70%;
    }
  }
  @media (min-width: 376px) and (max-width: 420px) {
  }
  @media (max-width: 376px) {
    width: 99%;
  }
`,i1=f.p`
  margin: 0 1.8rem;
  padding-right: 0;

  text-align: center;
`,Hn=f(Oe)`
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
`;f.div`
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
`;f.button`
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
`;f.nav`
  margin-bottom: 1rem;

  display: flex;
  justify-content: space-between;
  height: 70px;
  align-items: center;
`;f.ul`
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
`;f.li`
  cursor: pointer;
  text-decoration: none;
  margin: 0.2rem;
  padding: 0.2rem;
`;f.ul`
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
`;f.div`
  width: 100%;
  display: flex;
  gap: 20px;
  width: 100%;
  height: calc(100vh - 16px);
`;f.li`
  cursor: pointer;

  margin: 1rem;
  padding: 1rem;
  ${e=>e.selected?{backgroundColor:"#bfbfbf",borderRadius:"4px"}:{}};

  &:hover {
    background-color: ${e=>e.theme.colors.inputBackground};
    color: ${e=>e.theme.colors.primeBackground};
  }
`;f.div`
  flex-grow: 1;
  width: 80%;
`;f.div`
  padding: 24px;
  border-radius: 4px;
  cursor: pointer;
  overflow-y: auto;
  height: calc(100vh - 16px);
  &:not(input) {
    user-select: none;
  }
`;f.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  cursor: pointer;
  color: ${e=>e.theme.text};
`;f.span`
  margin-bottom: 2rem;
  font-size: 24px;

  line-height: 1.4;
`;f.ul`
  margin: 0 auto;
  list-style-type: none;
  margin-top: 3rem;
  &:first-child {
    margin-top: 3rem;
  }
`;f.ul`
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
`;f.div`
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
`;f.div`
  display: flex;
  margin-left: auto;
  gap: 1rem;
`;f.section`
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
`;f.div`
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
`;const kp=({definition:e,secondLanguage:t,index:n,secondLangButtonName:r,isMultipleDefinitions:i})=>{const[o,s]=S.useState(!0),a=()=>{s(!o)};return l.jsxs(OL,{children:[l.jsxs(PL,{children:[l.jsx(o1,{showDefinition:o,onClick:a,children:r}),l.jsx(RL,{showDefinition:o,onClick:a,children:"Fr"})]}),l.jsx($L,{children:i?o?t[n]:e[n]:o?t:e})]})},OL=f.div`
  width: 100%;
`,PL=f.div`
  position: absolute;
  top: 2%;
  right: 1%;
  font-size: 1.4rem;

  button {
    border: none;
    font-size: 1.1rem;
    width: 2.6rem;
    height: 1.6rem;
    transition: background-color 0.5s ease;
    outline: 1px solid ${e=>e.theme.secondaryText};
    /* background:  */
    color: ${e=>e.theme.primaryText};
  }
`,$L=f.div`
  margin-left: 1rem;
  min-height: 3rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  color: ${e=>e.theme.secondaryText};
  font-size: ${e=>e.theme.small};

  font-style: italic;
`,o1=f.button`
  background-color: ${e=>e.showDefinition?e.theme.highlight4:e.theme.primaryBackground};
  color: ${e=>e.showDefinition?e.theme.primaryBackground:e.theme.primaryText};
`,RL=f(o1)`
  background-color: ${e=>e.showDefinition?e.theme.primaryBackground:e.theme.highlight4};
  color: ${e=>e.theme.primaryText};
`,zL=()=>{const e=ne(),t=W(M=>M.quizData.currentTopic.words)||[],n=W(M=>M.quizData.topicNames)||[],r=W(M=>M.quizData.isLoading),[i,o]=S.useState(0),[s,a]=S.useState(0),[c,u]=S.useState([]),[d,p]=S.useState(0),[h,g]=S.useState(0),[y,v]=S.useState(!1),[b,x]=S.useState(!1),m=n.map(M=>M.topic),[w,k]=S.useState(m[0]);S.useEffect(()=>{e(Qr())},[e]),S.useEffect(()=>{var I;const M=(I=n[i])==null?void 0:I._id;e(Vr(M))},[w,e,i,n]),S.useEffect(()=>{t.length>0&&(b||A())},[t,y,b]);const A=()=>{const M=t.map(I=>{const _=C(I.french);return{image:I.imageUrl,options:_,correctOption:I.french,definition:[I.definition],english:[I.english],georgian:[I.georgian],selectedOption:""}});u(M),x(!1)},C=M=>{const I=t.map($=>$.french),_=[];for(;_.length<3;){const $=Math.floor(Math.random()*I.length),L=I[$];L!==M&&!_.includes(L)&&_.push(L)}return _.push(M),_.sort(()=>Math.random()-.5),_},j=M=>{const I=M.target.value;k(I);const _=m.indexOf(I);o(_),p(0),a(0),v(!0),A()},T=M=>{y||v(!0);const I=c[s],_=[...c];_[s]={...I,selectedOption:M},M===I.correctOption&&p($=>$+1),u(_),setTimeout(()=>{a($=>$+1<c.length?$+1:0),g($=>$+1<c.length?$+1:0),s===c.length-1&&x(!0)},800)},O=()=>{p(0),a(0),g(0),v(!1),x(!1),u(c.map(M=>({...M,selectedOption:""})))},{t:P,i18n:E}=q(),z=E.language==="ka",B=z?"Geo":"Eng";return r?l.jsx(Be,{}):t?l.jsx(NL,{children:l.jsxs(ng,{children:[l.jsx(Zv,{topic:m,selectedCategory:w,onCategoryChange:j}),b?l.jsxs(ML,{children:[l.jsxs(_L,{children:["Your final score is:",l.jsxs(rg,{children:[d," / ",c.length]})]}),l.jsxs("div",{children:[l.jsx("p",{children:"Do you want to restart?"}),l.jsx(UL,{onClick:O,children:"Restart"})]}),l.jsx("p",{children:"You can choose another topic from the dropdown menu above"})]}):c.map((M,I)=>{if(I===h){const{image:_,correctOption:$,options:L,selectedOption:F,georgian:N,english:V,definition:G}=M;return l.jsxs(ng,{children:[_?l.jsx(FL,{children:l.jsx(BL,{src:_,alt:"Word Image",loading:"lazy"})}):l.jsx(DL,{children:l.jsx(kp,{index:I,secondLangButtonName:B,french:M.options,definition:G,secondLanguage:z?N:V,isMultipleDefinitions:!1})}),L.map(ge=>l.jsx(IL,{onClick:()=>T(ge),isSelected:F===ge,isCorrect:ge===$,children:ge},ge)),l.jsxs(rg,{children:["Score: ",d," / ",c.length]})]},I)}return null})]})}):l.jsx(Be,{})},NL=f.div`
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
`,ng=f.div`
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
`,BL=f.img`
  width: 100%;
  height: 100%;
`,IL=f.div`
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
`,rg=f.span`
  font-size: 1.5rem;
  font-weight: bold;
  display: center;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 4px solid white;
`,FL=f.div`
  display: flex;

  align-items: center;
  width: 350px;
  height: 250px;
  background: white;
  margin-bottom: 1rem;
`,DL=f.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 350px;
  height: 250px;
  font-size: 1.4rem;
  background-color: ${e=>e.theme.flagAddon};
  color: ${e=>e.theme.flagFirst};
`,ML=f.div`
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
`,_L=f.p`
  font-size: 1.4rem;
  font-weight: bold;
  span {
    border-bottom: 3px solid blue;
    padding-bottom: 0.2rem;
    margin-left: 0.5rem;
  }
`,UL=f(qe)`
  height: 3rem;
  font-size: 1.4rem;
  &:hover {
  }
`,Gr=ae("dictionary/fetchWordsByLanguage",async({language:e,query:t})=>{try{return(await le.get(`/words/${e}/${t}`)).data}catch(n){throw console.error(n),Error("Failed to fetch words")}}),WL={searchResults:[],isLoading:!1,error:null},HL=Pe({name:"dictionary",initialState:WL,reducers:{clearSearchResults:e=>{e.searchResults=[]}},extraReducers:e=>{e.addCase(Gr.pending,t=>{t.isLoading=!0}).addCase(Gr.fulfilled,(t,n)=>{t.searchResults=n.payload,t.isLoading=!1}).addCase(Gr.rejected,(t,n)=>{t.error=n.error.message,t.isLoading=!1})}}),VL=()=>({type:"dictionary/clearSearchResults"}),QL=HL.reducer,GL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAChklEQVR4nO2Zu24TQRSGPxeElgYbEVIYHoECCJdXQAIH+YKECA+AxEVESAl0wAsgUUEKpCiiIDFKDYGGS96AhhZSBZGQ2MFwpH+lKQxi8czYu+wnjbTy5f/3jPecOTOGgoKR5AAwDcwDa8A6sKPxBfig9y4DFUaQM0Ab6AC9vxz22WXgNCPAEWDFubku8Aq4BhwDysAeDbs+DlwHVvXZ5HsvgMPDCqIFfNWNfAPuAftTfN8Cuw9sSmMDaBCZOWc2F4DxAbQOAYuO3iyRuCvDH7ouedK9CuzGCqYlIzOsBdCfcoKpEzCxk5y4FcoEmHFyphrCYMXJiZCUnJxph1gneqowE4RnXJWwB5zyKdyWqJXYWFhpNs8ln21HRwtYmnViUGyd6aq9seuBuaKZeUl8Xsv7kg+xeYlZ2xGbG/J+7ENsTWLWO8VmUt7vfIitSyxmfiRU5P3Zh9i2xMaIz155f89LIBt5ebQ++kx22xTF5qS8rQznovw+8iE2LTHbnsbmjbzP+XpOkxbFS6uQskXpAPt8iS5rZqyRi8UDeVpL740TEt0aQht/1Ld425khX/v0fpj2M3k9D2FQ1cLU03Y0FLflYSeTB0OZNJzDBzso8M0F5/DhLIGZdYKZ8fSYlfRLJEHs6sSGWMEkOWOHbP/KhJMT7rDS2yQCdSdnNlWa06wzZZXYLacx7PYJpkEEqk41S4xX1VpMajEd06jotZvqndybXlBiN4cZDDqyWUr5t4JtD572aUZ/F0ydiJR1UPAEeK8Suq3F7RPwFniom/rTtqAxCsH4wsp7p08wF8lRMC0yyFSegqn9D8E0yWgwO0UwGSkAc2SU885jdoeMU4v5d3ZBwa8Z+Ak4rhMJLuUtjQAAAABJRU5ErkJggg==",qL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAiUlEQVR4nO2USwqAMAwF5xIpekQ9roKCHkYRIrjwk9QoLnzQXTJDQ1r489VUQHLUJ+0xpQYmoDVKktZO2nsZARpt6IHSUVtYb2GRSC7cIpG78DOJRMH3JAPQRcK3khW8nDESfiQ4266wEZWR8F7H4nknbvia2xLLKkquxLPnkiN5/LN7/Lv+825mVoNLX0YKeGwAAAAASUVORK5CYII=",_e=()=>{const[e,t]=S.useState([]);S.useEffect(()=>{window.speechSynthesis.getVoices().length===0&&window.speechSynthesis.addEventListener("voiceschanged",()=>{window.speechSynthesis.getVoices().length>0})},[]);const n=(i,o)=>s=>{s.stopPropagation();const a=i.split(" (")[0];r(a,o);const c=e.findIndex(u=>u.word===i);t(c===-1?u=>[...u,{word:i,isActive:!0}]:u=>u.map((d,p)=>p===c?{...d,isActive:!0}:d)),setTimeout(()=>{t(u=>u.map(d=>({...d,isActive:!1})))},1500)},r=(i,o)=>{const s=new SpeechSynthesisUtterance(i);s.lang=o||"fr-FR",window.speechSynthesis.speak(s)};return{handleListen:n,isActiveStates:e}},KL={favorites:JSON.parse(localStorage.getItem("favorites"))||[],isLoading:!1,error:null},s1=Pe({name:"isFavorite",initialState:KL,reducers:{addToFavorites:(e,t)=>{const n=t.payload;e.favorites.some(i=>i.word===n.word)||(e.favorites.push(n),localStorage.setItem("favorites",JSON.stringify(e.favorites)))},removeFromFavorites:(e,t)=>{const n=t.payload;e.favorites.splice(n,1),localStorage.setItem("favorites",JSON.stringify(e.favorites))},clearFavorites:e=>{e.favorites=[],localStorage.setItem("favorites",JSON.stringify(e.favorites))},setLoading:(e,t)=>{e.isLoading=t.payload},setError:(e,t)=>{e.error=t.payload}}}),{addToFavorites:YL,removeFromFavorites:a1,clearFavorites:JL,setLoading:p6,setError:h6}=s1.actions,XL=s1.reducer,l1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEJ0lEQVR4nO2ZvW8bdRzGf1Q09r357MT3YikTZSgIwdAWCZA6MYBQ/oIKykCHDlUZujcUlQ2pVMAYJFQQUgckhKCxHb/cxU7sOunZvoiKdkCZUFGGVlS0gd/vQXcXv9upae4SG/mRnsny3ef5+vHd92xCJppoosAEW3sVdf0EGUfB0lTY2kPXlqaScRPq2jxsHag71ubJOAm/Ph+Crf+OuubAAzX1HoqzHBkXwU6cacHvuKp+QMZBAHkGNXWjCV5THXjAUm87r5FRF6r6221Tb8ADluL4LTLqQk1L9YW/pQDr8UUyyoKlvQRLZX3hvQDAuvIKGVXBUr/qqkwXfByozCyQkb1xWcpfPVNvh19zAkw/QiWeIKMmWMrH/SvTBr8243wCji+RURKKsxys+B994RvgLXjg5vQWLE04uOu8reioxY/B0uZgKWdhKdcGVqYd3IP3XJ6+hlLsLMrROazKx1BSdF/uE6grR7Chn4SdOIW6fgE1/Qpq6nVUtQKq6iaq6vbuV5kB8A1wDx4ox4CSZ7YadU1Xotu0KG/SFblAi5HrtBi5goJ0AcuRUyiIJ2HKz+0Ov5H4yF3AWktY9zrQfWMatjKd4H3g2UrDMlhxx4WI5+WGJcAQLw4OYOunUddZE757Heg39eEr0wHeCy+3wHvgJTBTAjUkBlN67wkV0t9FXdvumXoAlWH94Bvg3fCm9A8M8cxw34Oa+iaq2oNRqAxzJy8+RF56Zyj4Zoh1/QSqyr2DrAzz4LdgiG/8J/hWnZQjsOJ3DqIyzIHPi78hKx59KvhmCOf6vB6/5U9l5KEqwzx4G1ludk/wzRC2ImItntyPyjAXXsghFZN9ge94zq3MfBdkZZghOvDfo0i44NaIysynQVSGOfCG+DlADgUC3xGkHLvqZ2WYO3nxauDgzQCl2Cd+VYbtmOaFy/sXoBxb8qMyzHHeM83x6f2BBzmEUvT+XivTghfAcgJoln+Ai/vR/9XpF/dcmXwnPHOc5YGc+ELwAVbk9/2oTBM858G7ATL86cAD0FX5Sz8q44ELTXiW4UGXwl8EH6AYrfhVGbYD7pkDTYdvBgqPLAnTovx44NQ7dhlhC4ZwDlnhHM0JW/0qwxrwS5xrusQ9ds4RXICC9PoT19+8RGle/BoFofmnBkw5RrP8ZzQj/N0JzzXhWdpxGEiFXwsuQFH+cNf11xAzMISXB74/Kx6lGe6nXviw51QYSE6dDywAXZa+7QtuSpsw+d2fVduDpLk5mubudsM7pouhb4ILUJDudj6nin/SvDT/NL1FhRxGeuo8TYfve/AhsGQINDl1JxB4t8dmhDnw1JAoNcUF5Pk9/8aJn/kETU0t0GSIugFuhBh+JDF/qNtPtKgJ1BBvU1PKYTly3PfjJ589Tm9M5eji4V/wA+H9Pv5EE/1f9S9M4cKBWKiMUAAAAABJRU5ErkJggg==",ZL=({word:e,secondLanguage:t,definition:n})=>{const r=W(a=>a.isFavorite.favorites),i=ne(),o=r.some(a=>a.word===e),s=()=>{i(o?a1(e):YL({word:e,definition:n,secondLanguage:t}))};return l.jsx(eO,{children:l.jsx(tO,{src:l1,alt:"Favorite",onClick:s,isWordInFavorites:o})})},eO=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
`,tO=f.img`
  width: 100%;
  height: 100%;
  max-width: 1.5rem;
  max-height: 1.5rem;

  filter: ${e=>e.isWordInFavorites?"none":"invert(50%)"};
`,nO={flashcards:JSON.parse(localStorage.getItem("flashcards"))||[],isLoading:!1,error:null},c1=Pe({name:"flashcards",initialState:nO,reducers:{addToFlashcard:(e,t)=>{const n=t.payload;e.flashcards.some(i=>i.word===n.word)||(e.flashcards.push(n),localStorage.setItem("flashcards",JSON.stringify(e.flashcards)))},removeFromFlashcards:(e,t)=>{const n=t.payload;e.flashcards.splice(n,1),localStorage.setItem("flashcards",JSON.stringify(e.flashcards))},clearFlashcards:(e,t)=>{e.flashcards=[],localStorage.setItem("flashcards",JSON.stringify(e.flashcards))},setLoading:(e,t)=>{e.isLoading=t.payload},setError:(e,t)=>{e.error=t.payload}}}),{addToFlashcard:rO,removeFromFlashcards:u1,clearFlashcards:iO,setLoading:m6,setError:g6}=c1.actions,oO=c1.reducer,d1="/assets/flash-card-8631d30b.png",Mo=({word:e,secondLanguage:t,definition:n})=>{const r=W(a=>a.flashcards.flashcards),i=ne(),o=r.some(a=>a.word===e),s=a=>{a.stopPropagation(),i(o?u1(e):rO({word:e,definition:n,secondLanguage:t}))};return l.jsx(sO,{onClick:s,children:l.jsx(aO,{isWordInFlashcards:o,children:l.jsx("img",{src:d1,alt:"FlashCardIcon"})})})},sO=f.button`
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`,aO=f.span`
  display: flex;
  align-items: center;
  width: 2rem;
  /* outline: 1px solid red; */
  height: 2rem;
  img {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    filter: ${e=>e.isWordInFlashcards?"":"invert(50%)"};
    transition: transform 0.3s ease-in-out;
    transform: ${e=>e.isWordInFlashcards?"scale(1.1)":"scale(1)"};
    @media (min-width: 767px) and (max-width: 920px) {
      width: 1.8rem;
      height: 1.8rem;
    }
    @media (min-width: 577px) and (max-width: 767px) {
      width: 1.6rem;
      height: 1.6rem;
    }
    @media (min-width: 393px) and (max-width: 576px) {
      width: 1.4rem;
      height: 1.4rem;
    }
    @media (max-width: 392px) {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`,f1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF4klEQVR4nO3Ze2xTVRwH8N895756+36spV3blW1ujM09GBM3hmODPYzEqcAI4gNEJ2BQMJL94UIIijFA2AioPLKJGQnTLJHgYoggijFBBkQHOuUVM5eJRgYb63rbje2Y27VboyLek8hf/SXfdOna7nx27jn3nFOAeMUrXvGKV7z+exkAwBwTDdCX8l7lM6YCQCEAVANALWZgk5nHzTaePWbh8XkLj69YeXzVzOFuA4d/tfC4AwMs/KcPzGQwtw3z2pOYk7owK15DmJUZhiHhIDyCMC9Phg1N/C4ShNCYKIoBJYIgDEUjajT+6PPR13IcN8JiNGzlWX+Gjr851yYNLE00BDakWsa2TreRA7kO8umsRPJFkTucU8UecmaOl7TmO4ldZP0RcKQQWoE50W/wFgcTcp4ijpm1xFW4nrhL6ol33pt3jKd0E2FZbrSrt5coudDdTb7p6vpbTpw9O/Hz9z094dcqj4hhyM2qFNVpm+kkJg5fjjafR5gNOAvX/Wtj7xSM2bHz3d3hRqkNYhhygwLQV5lCjBweAoD7FIAbc5ohmsYr4UVpRPnP0gAwQmPXK9UDlJTbtQMAUKMAtMr1TAuQ9ObQ5x0dVAAO47HfK5KpAC/5TMMAsCEyBNigZ+5GKoDO5JCPnDhBBeBZPHqtnA7w8lSzAqgPAzAn/uYqWk8FMNi8gdb2diqAhmNv95ZPpQLUJpmCkwBBd8GR/wIVwOhIDTS1tlIBtDw38st8OsByrzEAAOvCAJbXfWa7fykVwDQlXd7b0kIF0An8yM/z6AA1iXrlXvD8eA/wmkPW6U/Q9YAzQ37nwAEqgEEUhq+U+agAlTGzEGBW02yZ9ihdD7iy5J3791MBTBoxdIkSUGjR3ASAh6OD+D1z2iN0gMTs4I49e6gAZkkM/VRKB8jSCwqgOApoMKVWUgHM7tzg1l27qABWrRT8YW4SFcAncf0AkBMGMFjYQQ3wzAi+1dhIBUjQa4MXKAF2gR0EgJQIgH/XnLaA7hLyFoQ2b9tGBXAYdPJ3JV4qgJ7FyjSaEBnEwkFLxuN0AE/B8Bvbt1MBnCZ94NxDdAAOoREAEMeXEpx02Jq5mA7gzh/e0tBABfBYTUOniz2qG68sABHDjE5sB1heOm7LfpISkBd6e+dOKkCK0+7/ssitGnCtIjnaA+OFee0pe+6zlNNoTnDr7t1UgCyf55ay61ILUJYfAkbBGICu0zFj5T2/D8zMSBtQdldqAVfn+YjEoqFJACddmlKwig7gypIb9+2jAhTn5fS35E1RDbhY5iNaFg/GAnqcs9ZSAjLlXU1NVIDK4qL+vdl21QBl/SSxyD+5p2eFPtfs1+huZM6MAO1irrqqvL8hM0E1QFnBajAKTAIwN+Quef2e7weW1Swc3DLNqhrQ89dBrJz5KEckVIAEX+Dg4cNUgFWrXpTrUs3qp9Hy8DQ6HANAt71lm6kAeotLbjt6lApQV18/utpnogLwCIViLiFWvtsh1p2iM9mD7SdPUgG2NDSQJYn6EbWAH0uTiJZF/TH3AakzIfcZ6mOV46dPUwF2NzeTCrsuqBagHC9aeHwu9mjxaV7nGKQZB6KkH/66s5MK8EFbGykwS7LayyfXKPoRwIrYg10GcWKbYEj0Ox98RRWA44XbZy5epAJ8fOwYSdOLsjItdpYkkY453vBB7pEHXOTDfCdpynEQZZrdnG4ldanmseUeg+wU2UEjh9qVJVwsYLwfEPsqwvwtXu/s17tnyeb0BcQyrZooG37lMRpTasVEEEJk5Zo15LnVq0OLly0LPlZT469etGhgflVV/0NlZTeKS0v/yM7L60vPyOjzJSffsNntg0aTya+RpKBymo0YZkzEKGDg8HUjh3vNHL5sE/C3Vh5/ZeHYT4w8btFxuBEANgLAWgDIh7sUDwDlyrEdZvlmltd9pCy3WUF3CPOaFsyKTZgTG8PBwnYAeB8A6iKpjckSAFgMAIsAYD4AzI788WQAcEW+G2Du1ph4xSte8YoX/J/1J/MWTw3L2mxrAAAAAElFTkSuQmCC",p1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACGklEQVR4nO2XW0tUURTHz5eKnMpe7P4QlBhRnyBKZMgbIUrhyzjjUGRpXosascAhTUSahwIfvFbCBF3AEPOcsy9Hhj7BP2ZtGnyYHmLWhjm2/7A452Gx/vvHWusctuc5OTk5OTkdBkWlX+AKP3GkanB6eA6gFLMOyFwO4bUrEMOPrY2QyGbIQ+XzFgDm5ukQcnzMHsCjIcpTS0t8AHJqEqLjNkR3BxUPW28i7OqEHHrIBiDTKYTdnQhv3TAe5ff2JOTMTO0AYjBT9TCit4cNIEy2Vc2XT0ZqB9BbW9DrG1BzrysjpD5+gt7YZANQq2tUU44MmxFaWCBPXfzMuAO5nAF4cN/aDsiBlAHIz/LtQKUTmx8g599AraxYA9DLy+RR7jo7QOz/A1G9A/h/Ma3X8BxAwnUAboQOKvZLHMX9MxoddgC9vQ1dLEJ/+24P4MtX8oh+7PADyGdP6RAiO2gNQPTfozz56iUfgP7pQ+t9qMJbU/zFc0T7JejdPTYAvbNLNcXEBOWpd++hVQS959cOINID8E80wL9whooHZ5sQNCYgeu6wAYRtrQhOHkNw7pTJPX8a/vGjdD+oHSCbgX/pIl22CaClGUHLZYi+Xj6A9iTVLAd5XL9Kniw3sj+hFhfNCE1NWtsBOTpqRqhQ4NuBSvHxMQOQTlkDCO/2GYDpaX6A8lIdfNoA0P/g8f/9yKJ6B3BycnJycvJiqN/ap8O42q9mQQAAAABJRU5ErkJggg==",h1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+klEQVR4nO2VrQoCQRSFx5eybhAWtmkSxGLWJzD4ACbrWn0FFxQVDGKzCQo2g2lAFydZruyCFg3uMr/O+eDA3HYP9565jAEAAADAMERUCRoJyZaoVZWJ/aWBqDWn0Xj/bqBo3etvcxkxEDZndDjdKGMw3FHRut1dU3p/5MremQF+TZWJfZtAPDnSanOhemdJZerp4pzrNQHtBgLJMmIgkpgD7SEOJefAyDcaS8yB83eA685AJPkOaDUQ4g4kH3fA+QwIGKj+PgGVgdMSYm5BU9xrA0Jh4LT8QsKCpoTXBrgFe829DjF33YCwYK+F1yEWLhsAAAAAAGCleAKWmufwwWk9CQAAAABJRU5ErkJggg==",lO=({inputLanguage:e,toggleInputLanguage:t,isGeorgian:n,secondLanguage:r})=>{const{t:i}=q();return l.jsxs(cO,{children:[l.jsx(m1,{inputLanguage:e,onClick:t,children:i("Français")}),l.jsx(uO,{onClick:t,children:l.jsx(dO,{inputLanguage:e,children:l.jsx("img",{src:e==="french"?f1:n?p1:h1,alt:"FrenchFlag"})})}),l.jsx(fO,{onClick:t,inputLanguage:e,children:n?"ქართული":"English"})]})},cO=f.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  @media (max-width: 290px) {
    flex-direction: column;
    width: 80%;
    /* outline: 1px solid red; */
  }
`,uO=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  /* width: 50%; */
  @media (max-width: 576px) {
  }
`,dO=f.div`
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
      height: 2.2rem;
    }
    animation: ${e=>e.inputLanguage==="french"?fr`
            ${SL} 0.8s forwards
          `:fr`
            ${bL} 0.8s forwards
          `};
  }
`,m1=f.div`
  margin: 0.5rem auto;
  outline: 2px solid ${e=>e.theme.primarText};
  background-color: ${e=>e.inputLanguage==="french"?"#830C24":e.theme.primaryBackground};
  color: ${e=>e.inputLanguage==="french"?"white":e.theme.primaryText};

  padding: 0.5rem 2rem;
  border-radius: 12px;
  @media (max-width: 576px) {
    font-size: 1rem;
    padding: 0.4rem 0.8rem;
    width: 5.2rem;
  }
  @media (max-width: 320px) {
    font-size: 0.8rem;
    padding: 0.2rem 4rem;
  }
`,fO=f(m1)`
  text-align: center;
  background-color: ${e=>e.inputLanguage==="french"?e.theme.primaryBackground:"#830C24"};
  color: ${e=>e.inputLanguage==="french"?e.theme.primaryText:"white"};
`,Ue=()=>{const e=gr();S.useEffect(()=>{window.scrollTo(0,0)},[e])},pO="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAECElEQVR4nO2ZXagVVRTH/3538QOzMEgNfRB9sMcQAsWCyAQVIehFehD0QcUH5T6EdEUxFPQhLQIpMs+sfQ4eP9Ks6weCCor4oJYFlWkl+uC3kOJHln/ZM+tc596zZ+45M2fueOAsmJfZa6+9fvtj9lprgJa0pHmERD8aLKfBZRrcoeALltGGZhKWMZiCb2nAbo9gHZoKwmBPFUTw/IEmWonvIiDs839d9koYn523UYN2YggN9sVA+E/N9gRLdDseosHkbL2vE6IuEA9v0OCa9vuXBh1chf5Zn4m9tUDUA2KFWzGSBpsoeKz9O2nwIjJZCcEPtULUC1IRCqaHVudHljEKeUIkBbFCD2NpcE7PzSl6GIEGnYnOeiHiQHSLHqagxBLGOXWKeIUGv6mtPfbSTQ6xFS8khYgF+QrDaXBT9f6h4AOnXgnjKLihekuTQwj2J4XobWtxG17ruocETyj4yKlnMNtvN3jAAiYkOROpIGo9IzRot5dn3KxT8LUCe89eltFGwWYa3K4a3MP7anxDWoi67hHBQl2V/1jCm87DL7jvAwter3T6LHLwAkYryJ99CdJt8gQX7I5AD6HgU7X7eeXFrcjB9cuge7JhICxgKAVrafBhVHjPIHb7RWGWVbUXMEXt3rS6qGngBkB0syd4K/T+Ej3McMII5qrOZVeIQoPTfnsRM/MBWYX+9LCAgl9D8dS7EQnaRXX2bQfoOl2xNbmAhLbPABpsUWeucxtecjj7ifbfWNXmYZ62HcwVJDTrx1Wno6q9iJnadqyqrYAJle2ZO4jan6WrciYizrL9rzhWdJj2u/t8gBQwWnXuOZxtU2fvO/sKHvq2WyAmg61lcNoZKDbD1vIPu+CE6nzs2DrvqbNHYw773/l/fgVfqqPXXdlf6PO7IfLzKziQ34VosKgrURI8YhHvxF6IjtufBuu1/+r8QxTBX/QwraeTPUKUS84QRXDmWYiSR9AYpA5rWcR8V2RbFTQ68hIbvutE3AiCxiAXiRr8Zb9TZXkzOOxRQoON6uh5ZxhvS0VB++bwhbPJuTKCud2Cs75PrB6ziKkRn+QHfmJVwJTMCnFpQChY4WeGQZ9FsamuQaFmiBor7alB+A3GhOzbnH25U8/DnK7iQ9JCd1qYGLv2Prmqenfs/RBTaamUgxYnguj1R07aFREIDQyLeDWyQCf4XW3tTgWRFibxeCX/cP+sdk7agl5DQHzjWzDIzkzWIPQwI1TEPptNRT6A2dUnvxUE39t3DYdIApPoV4LgEQ1WpipaNxqmZnsGHdrnID1MytZ7F4xgZyRIRKrqtHUEA2kwMVuPe1+ZHREgP6GZhMHKbHeAVJU9n3thkDi1+5GrPbQ26CxjQN5+taQlqF+eAnM4XrcKYDSBAAAAAElFTkSuQmCC",hO="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADQ0lEQVR4nO2ZzWvUQBTAU6V+4kXFg1r/DUEQVBA/LkUweGl3plVzUg8VDx7US6UHe6mCIF7V4vfHoSIIte57i8IqCot5b9taahW0qAVFxc9Iktm63d3sZttsO5F9kEsmmXm/mfeZGEZd6hIjcZwGCdQhgMYk0oRAPmumXi024iRmJrNAAt+UyM6UC7jLiBOEQL5VBIHsCKBBIz4QdKcUhAL5bcTCnJBvB0HkLuN/gJA6g5hVQGgLYlYJoSWIWcGxYwFysC+7UCL3VQtRDkTlnvsSqFcODDbVHEL0jyyaLkQ5kHawl0ng916YRv4kgfbUFgL47nQhKplWa3J43aS5Av2RST5aG3OaIURYHxHAR9zk6b2T5AOhlXSLOYl0WiJ/LFy4De3d/uR0aqYQ1Ti7AN7vnQrSL4n2hnAvIZ0JWrgFh1a5z0jkl7MJMnXzaMi1CKOSCOAPgQs7ToP7jL870YG03Hu2VCJ1JlKcCCrvTS9PUUYFgEMVQcIsHAVE/nwJsDf/u0+jImlvKqkbULMHAjR2wnHmaQfiKiXRbpfAtq8o/5BobytSznEaBNKwAt6iHUhOzCvOfAl0zjcfGm99/GJF4TMC6aT3PlC3tiC5XZfAoEzoeBFIirYrkAG9QTxf4J1K2aeFY/seZdeqsdfag7hhXp3Il4CyyPWRb/EBQf5cOGal3ywJgtTWtATQk6KxgcGmeJiWG2KB0T8ROlY4nEjSDgX5QOvwK5DPK4jxvanM8qDw65YsWiZEgWwJZPLNhr/LZHZruYQYlP31KVGARyTwxnIlikQarViizEXRqFqHzjaglqDK1swrGkP1JaoXKbmw1U8rPdjJeqcGzh6kF1C37xucDVXGe7sD1FPyZICa/Um5ay4aK4H8s+0hr69mAyL/hjVdEIF82O8MvQRpRQYR5kt7FCCJFK/Jze/17EAdkUNEBRM4r5tPgN6qCDWRSPGumkFU/JEzwxORyBcE0MV2sFcbsyVWOt0ogW7UMmppDWPoKlY63SiQrsceJK/v7o09SF7UuRR7kEmfQboWCAL01YiLWK7PAF8tDcLPjTiJ5Z0MXy4ECfXZUzfxGifv9wBnJdA7t+h0/Wiu9apLXYzq5S+kKGNnPkgtRgAAAABJRU5ErkJggg==",nt=({isActiveIndex:e})=>{const[t,n]=S.useState(!1),i=xi()===hl?hO:pO,o=()=>{e!==-1&&(n(!0),setTimeout(()=>{n(!1)},2e3))};return l.jsx(mO,{isActive:t,onClick:o,children:l.jsx("img",{src:i,alt:"listen"})})},mO=f.div`
  display: flex;
  align-items: center;
  width: 1.8rem;
  height: 1.8rem;
  @media (min-width: 767px) and (max-width: 920px) {
    width: 1.8rem;
    height: 1.8rem;
  }
  @media (min-width: 577px) and (max-width: 767px) {
    width: 1.6rem;
    height: 1.6rem;
  }
  @media (min-width: 393px) and (max-width: 576px) {
    width: 1.4rem;
    height: 1.4rem;
  }
  @media (max-width: 392px) {
    width: 1.2rem;
    height: 1.2rem;
  }
  & > img {
    max-width: 100%;
    max-height: 100%;
    cursor: pointer;

    filter: ${e=>e.isActive?"none":"invert(-150%)"};
    transition: transform 0.3s ease-in-out;
    transform: ${e=>e.isActive?"scale(1.1)":"scale(1)"};
  }
`,g1=e=>e!=null&&e.startsWith("l'")?e.slice(2).replace(/\([^()]*\)/,"").trim("("):e!=null&&e.startsWith("les ")?e==null?void 0:e.slice(4):e!=null&&e.startsWith("le/la ")?null:e==null?void 0:e.slice(3),gO=e=>{for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e},xO=e=>{const n=`https://conjugaison.bescherelle.com/verbes/${e.replace(/\s+/g,"-")}`;window.open(n,"_blank")},as=(e,t)=>e.map(n=>n[t]),x1=()=>{Ue();const{handleListen:e,isActiveStates:t}=_e(),[n,r]=S.useState(!1);S.useState(!0);const{t:i,i18n:o}=q(),s=o.language==="ka",a=ne(),c=W(E=>E.dictionary.searchResults)||[],u=as(c,"french"),d=as(c,"georgian"),p=as(c,"english"),h=as(c,"definition"),g=s?d:p,y=s?"Geo":"Eng",[v,b]=S.useState(""),[x,m]=S.useState(!1),[w,k]=S.useState("french"),A=()=>{k(E=>E==="french"?s?"georgian":"english":"french")},C=()=>{v.trim()?a(Gr({language:w==="french"?"french":s?"georgian":"english",query:v})):a(Gr({language:"",query:""}))},j=()=>{m(!x)},T=()=>{b(""),a(Gr({language:"",query:""})),a(VL())},O=E=>{E.key==="Enter"&&C()},P=x?c:c.slice(0,4);return l.jsxs(yO,{children:[l.jsx(lO,{inputLanguage:w,toggleInputLanguage:A,isGeorgian:s,secondLanguage:g}),l.jsxs(vO,{className:n?"active":"",children:[l.jsx(CO,{onClick:T,src:qL,alt:"ClearIcon"}),l.jsx(wO,{type:"text",value:v,onFocus:()=>r(!0),onBlur:()=>r(!1),onChange:E=>b(E.target.value),onKeyPress:O,placeholder:w==="french"?"Rechercher dans le dictionnaire...":s?"შეიყვანე სიტყვა...":"Enter word..."}),l.jsx(bO,{onClick:C,src:GL,alt:"SearchIcon"})]}),P.map((E,z)=>l.jsxs(EO,{children:[l.jsxs(SO,{children:[l.jsx(jO,{onClick:e(E.french),isActive:t[z],children:l.jsx(nt,{})}),w==="french"?E.french:s?E.georgian:E.english]}),l.jsxs(LO,{children:[l.jsx("span",{children:E.part_of_speech}),l.jsx(kp,{definition:h,secondLanguage:w==="french"?g:u,secondLangButtonName:y,french:w==="french"?u:g,index:z,isMultipleDefinitions:!0})]}),l.jsxs(TO,{children:[i("Ajouter à"),l.jsx(Mo,{word:w==="french"?u[z]:g[z],secondLanguage:w==="french"?g[z]:u[z],definition:h[z]})]}),E.part_of_speech.includes("v")&&l.jsxs(OO,{children:[l.jsx("span",{children:i("Ce lien mène à la page Bachharelle Conjugaison.")}),l.jsx("button",{onClick:()=>xO(E.french),children:E.french})]})]},E._id)),c.length>4&&!x&&l.jsx(kO,{onClick:j,children:i("Afficher tout")})," ",v.trim()&&!x&&c.length===0&&l.jsx(AO,{children:i("Aucun mot trouvé")})]})},yO=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 800px;
  overflow: hidden;
`,vO=f.div`
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
`,wO=f.input`
  margin-left: 0.5rem;
  padding: 8px;
  border: none;
  flex: 1;
  width: 100%;
  font-size: 1.2rem;
  outline: none;
  border-radius: 1rem;
`,bO=f.img`
  width: 2rem;
  height: 2rem;
  margin-right: 0.6rem;
  cursor: pointer;
`,SO=f.p`
  display: flex;
  /* font-size: 1.4rem; */
  font-weight: bold;
  margin-right: 0.3rem;
  &:after {
    content: " ";
  }
`;f.p`
  font-size: ${e=>e.isGeorgian?"1rem":"1.3rem"};
`;const kO=f.button`
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
`,CO=f.img`
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
`,AO=f.div``,jO=f.div`
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
`,EO=f.div`
  max-width: 100%;
  border-bottom: 5px solid ${e=>e.theme.primaryText};
  border-right: 5px solid ${e=>e.theme.primaryText};
  background: ${e=>e.theme.secondaryBackground};
  color: ${e=>e.theme.primaryText};
  padding: 1rem;
  margin: 1rem 0.5rem;
  position: relative;
  min-height: 3.5rem;
  border-radius: 0 0 0 12px;
  min-width: 85%;
  position: relative;
`,TO=f.span`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  margin-left: auto;
  margin-right: -1rem;

  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid ${e=>e.theme.primaryText};
  padding-bottom: 0;
  width: 30%;
`,LO=f.div`
  display: flex;
  align-items: center;
  /* outline: 1px solid red; */
  justify-content: center;
  span {
    font-style: bold;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
  }
`,OO=f.div`
  display: flex;
  max-width: 100%;
  span {
    font-size: 0.6rem;
    color: ${e=>e.theme.tertiaryText};
    margin-right: 1rem;
  }
  button {
    border: none;
    font-style: italic;
    position: relative;
    background-color: ${e=>e.theme.secondaryBackground};
    color: ${e=>e.theme.primaryText};

    cursor: pointer;
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
  }
`,Ns=ae("presentTense/fetchPresentTense",async()=>{try{return(await le.get("/verbs/tenses/present")).data}catch(e){throw console.log(e),Error("Failed to fetch words")}}),PO={presentTense:[],isLoading:!1,error:null},$O=Pe({name:"presentTense",initialState:PO,reducers:{},extraReducers:e=>{e.addCase(Ns.pending,t=>{t.isLoading=!0}).addCase(Ns.fulfilled,(t,n)=>{t.presentTense=n.payload,t.isLoading=!1}).addCase(Ns.rejected,(t,n)=>{t.error=n.error.message})}}),RO=$O.reducer,zO=()=>{Ue();const e=ne(),t=W(E=>E.presentTense.presentTense.presentTenseVerbs)||[],n=W(E=>E.presentTense.isLoading),r=W(E=>E.presentTense.error),[i,o]=S.useState(0),[s,a]=S.useState([]),[c,u]=S.useState(Array(t.length).fill("")),[d,p]=S.useState(!1),[h,g]=S.useState(!1),[y,v]=S.useState(0),[b,x]=S.useState(!0),[m,w]=S.useState(!0),[k,A]=S.useState(!1);S.useEffect(()=>{e(Ns())},[e]),S.useEffect(()=>{t.length>0&&a(t.slice(i,i+5))},[i,t]);const C=(E,z)=>{const B=[...c];B[E+i]=z,u(B)},j=()=>{if(s.every((E,z)=>c[z+i]!=="")){const E=s.every((B,M)=>c[M+i]===B.correctAnswer);p(E),g(!0);const z=s.reduce((B,M,I)=>c[I+i]===M.correctAnswer?B+1:B,0);v(B=>B+z),w(!1),A(!E)}},T=()=>{i+5>=t.length?x(!1):(o(E=>E+5),g(!1),w(!0),A(!1),u(Array(t.length).fill("")))},O=()=>{g(!1),w(!0),A(!1),u(Array(t.length).fill(""));const E=s.reduce((z,B,M)=>c[M+i]===B.correctAnswer?z+1:z,0);v(z=>z-E)},P=()=>{o(0),u(Array(t.length).fill("")),p(!1),g(!1),v(0),x(!0)};return n?l.jsx(Be,{}):r?l.jsx("div",{children:r}):l.jsxs(NO,{children:[l.jsxs(DO,{children:["Score: ",y,"/",t.length]}),s.map((E,z)=>{const B=E.sentence.indexOf("_"),M=E.sentence.slice(0,B),I=E.sentence.slice(B+5);return l.jsxs(BO,{children:[z+1+i,": ",M,l.jsxs("span",{children:[E.words.map((_,$)=>l.jsx(FO,{onClick:()=>C(z,_),"data-questioncorrectanswer":E.correctAnswer===_,"data-usersanswer":c[z+i],"data-showanswers":h&&c[z+i]===_,"data-allanswerscorrect":d,children:_},$)),I]})]},z)}),l.jsxs(_O,{children:[m&&l.jsx(Bs,{onClick:j,children:"Submit"}),h&&!d&&b&&l.jsx(l.Fragment,{children:k?l.jsx(Bs,{onClick:O,children:"Retry"}):l.jsx(Bs,{onClick:j,children:"Submit"})}),l.jsx(WO,{onClick:T,children:"Next"}),h&&!d&&!b&&l.jsxs(MO,{children:["Your final score is: ",y,l.jsx(UO,{onClick:P,children:"Restart"})]})]})]})},NO=f.div`
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
`,BO=f.div`
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
`,IO=e=>{const t=e["data-usersanswer"]===e.children,n=e["data-showanswers"],r=e["data-questioncorrectanswer"];return t&&n?r?"green":"red":t?"violet":n&&e["data-allanswerscorrect"]==="true"?"green":e.theme.secondaryBackground},FO=f.button`
  border-radius: 8px;
  font-size: 1.2rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  gap: 1rem;
  color: ${e=>e.theme.primaryText};
  background-color: ${e=>IO(e)};

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
`,Bs=f.button`
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
`,DO=f.span`
  padding: 0.5rem;
  background: #7bb5f8;
  margin-left: auto;
`,MO=f.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: #7bb5f8;
  font-size: 1.2rem;
  border-radius: 8px 8px 0 0;
`,_O=f.div`
  display: flex;
  margin-top: 3rem;
  gap: 1rem;
`,UO=f.button`
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
`,WO=f(Bs)`
  background: ${e=>e.theme.primaryText};
  color: ${e=>e.theme.primaryBackground};
  &:hover {
    background: ${e=>e.theme.primaryBackground};
    color: ${e=>e.theme.primaryText};
  }
`,Is=ae("sentences/fetchSentences",async()=>{try{return(await le.get("/sentences/general")).data}catch(e){throw console.log(e),Error("Failed to fetch words")}}),HO={sentences:[],isLoading:!1,error:null},VO=Pe({name:"sentences",initialState:HO,reducers:{},extraReducers:e=>{e.addCase(Is.pending,t=>{t.isLoading=!0}).addCase(Is.fulfilled,(t,n)=>{t.sentences=n.payload,t.isLoading=!1}).addCase(Is.rejected,(t,n)=>{t.error=n.error.message})}}),QO=VO.reducer,y1=(e,t)=>{if(!e||!e.current)return;const n=e.current.offsetTop-t;window.scrollTo({top:n,behavior:"smooth"})},GO=f.select`
  /* Add your styling here */
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  height: 2.8rem;
  outline: none;
`,ls=f.option`
  /* Add your styling here */
`,qO=({selectedCategory:e,onCategorySelect:t})=>l.jsxs(GO,{onChange:n=>t(n.target.value),value:e,children:[l.jsx(ls,{value:"",children:"All"}),l.jsx(ls,{value:"simple",children:"Simple"}),l.jsx(ls,{value:"interrogative",children:"Interrogative"}),l.jsx(ls,{value:"negative",children:"Negative"})]}),ig=e=>{window.innerWidth<376?e(6*16):window.innerWidth<576||window.innerWidth<768?e(7*16):window.innerWidth<968?e(10*16):e(13*16)},v1=({sentenceData:e,isActive:t})=>{var L,F;const n=S.useRef(),[r,i]=S.useState(0),[o,s]=S.useState(""),a=N=>{s(N)};Ue();const{handleListen:c,isActiveStates:u}=_e(),{t:d,i18n:p}=q(),h=ne(),g=W(N=>N.sentences.sentences)||[],[y,v]=S.useState(!1),[b,x]=S.useState([]),[m,w]=S.useState(!1),[k,A]=S.useState(!1),[C,j]=S.useState(0),T=e||g,O=()=>o==="negative"?T.filter(N=>N.sentence.includes("pas")):o==="interrogative"?T.filter(N=>N.sentence.includes("?")):o==="simple"?T.filter(N=>N.words.length<4):T;S.useEffect(()=>{e||h(Is())},[h,e]);const P=((L=O()[C])==null?void 0:L.sentence)||"",E=((F=O()[C])==null?void 0:F.words)||[],z=N=>{x(V=>V.includes(N)?V.filter(G=>G!==N):[...V,N])},B=N=>{x(V=>V.filter(G=>G!==N))},M=()=>{const N=b.map(be=>E[be]).join(" ").trim(),V=P.replace(/[^a-zA-Z0-9]/g,"").toLowerCase(),ge=N.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()===V;w(ge),v(!0),A(!0)},I=()=>{x([]),A(!1),v(!1)},_=()=>{x([]),A(!1),v(!1),w(!1),C+1<O().length&&j(N=>N+1)};S.useEffect(()=>{ig(i);const N=()=>{ig(i)};return window.addEventListener("resize",N),()=>{window.removeEventListener("resize",N)}},[]),S.useEffect(()=>{t&&y1(n,r)},[t,r]);const $=C===O().length-1;return l.jsxs(KO,{ref:n,children:[l.jsxs(t3,{children:[l.jsxs("h4",{children:[d("Construire la phrase")," "]}),l.jsxs("span",{children:[l.jsxs("h5",{children:[d("Choisissez une catégorie")," "]}),l.jsx(qO,{selectedCategory:o,onCategorySelect:a})]})]}),l.jsx(e3,{onClick:c(P),children:P}),l.jsxs(YO,{children:[l.jsx(w1,{isCorrect:m,isSubmit:y,children:b.map((N,V)=>l.jsx(JO,{onClick:()=>B(N),children:E[N]},V))}),l.jsx(XO,{children:E&&E.map((N,V)=>l.jsx(ZO,{isSelected:b.includes(V),onClick:()=>z(V),children:N},V))})]}),l.jsx("div",{children:k?m?$?l.jsx("div",{onClick:_,children:l.jsx(qe,{children:d("Continue")})}):l.jsx("div",{onClick:_,children:l.jsx(qe,{children:d("Suivant")})}):l.jsx("div",{onClick:I,children:l.jsx(qe,{children:d("Réessayer")})}):l.jsx("div",{onClick:M,children:l.jsx(qe,{children:d("Soumettre")})})})]})},KO=f.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  max-width: 390px;
  /* justify-content: center; */
  margin: 0 auto;
  /* max-width: 98%; */
  /* outline: 1px solid red; */

  /* margin: 0 0.3rem; */

  -webkit-box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  -moz-box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);

  background-color: ${e=>e.theme.secondaryBackground};
  color: ${e=>e.theme.primaryText};
  @media (min-width: 393px) and (max-width: 576px) {
  }
  /* width: 100%; */
  @media (max-width: 392px) {
    /* height: 92vh; */
  }
  @media (max-width: 300px) {
    /* width: 90%; */
  }
`,YO=f.div`
  width: 98%;
  display: flex;
  flex-direction: column;
  /* outline: 3px solid blue; */
  overflow-x: hidden;

  align-items: center;
  /* margin: 0 auto; */
  outline: 1px solid ${e=>e.theme.highlight2};
  @media (min-width: 393px) and (max-width: 576px) {
    /* width: 360px; */
    /* outline: 3px solid blue; */
  }
  /* width: 100%; */
  @media (max-width: 392px) {
    /* width: 340px; */
  }
  @media (max-width: 362px) {
    overflow-x: scroll;
    width: 270px;
  }
  @media (max-width: 301px) {
    overflow-x: scroll;
    width: 210px;
  }
`,w1=f.div`
  margin: 0 auto;
  width: 90%;

  height: 14rem;
  margin-bottom: 1rem;
  margin-top: 1rem;

  position: relative;
  flex-wrap: wrap;
  display: flex;
  outline: 1px solid ${e=>e.theme.primaryText};
  background-color: ${e=>e.isSubmit&&e.isCorrect?e.theme.correctBack:e.isSubmit&&!e.isCorrect?e.theme.wrongback:e.theme.tertiaryBackground};
`,JO=f.span`
  text-align: center;
  display: flex;
  align-items: center;
  background-color: ${e=>e.theme.facebookLogo};
  color: white;
  border-bottom: 2px solid ${e=>e.theme.flagFirst};
  /* overflow-x: scroll; */
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
    margin: 0.4rem;
    padding: 0.2rem;
    /* outline: 1px solid blue; */
    height: 2rem;
  }
`,XO=f(w1)`
  background-color: ${e=>e.theme.tertiaryBackground};
  /* color: ${e=>e.theme.flagFirst}; */
  outline: 1px solid ${e=>e.theme.primaryText};
`,ZO=f.button`
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
  @media (max-width: 412px) {
    font-size: 1.4rem;
    margin: 0.4rem;
    padding: 0.2rem;
    /* outline: 1px solid blue; */
    height: 2.6rem;
  }
`,e3=f.p`
  display: none;
`,t3=f.div`
  /* display: flex; */
  align-items: center;

  gap: 1rem;
  /* margin-bottom: 0.5rem; */
  /* height: 4rem; */
  h4 {
    text-align: center;
    margin: 0;
  }
  span {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`,n3=()=>{const{t:e,i18n:t}=q();return t.language,l.jsxs(i3,{children:[l.jsxs(Xc,{children:[l.jsx(wt,{to:"/",children:"Home"}),l.jsx(wt,{to:"/",children:"About"}),l.jsx(wt,{to:"/",children:"Contact"}),l.jsx(wt,{to:"/",children:"Services"})]}),l.jsxs(Xc,{children:[l.jsx(wt,{to:"/books",children:e("Livres")}),l.jsx(wt,{to:"/grammer/basic-grammer",children:e("Grammer")}),l.jsx(wt,{to:"/courses",children:e("Courses")}),l.jsx(wt,{to:"/dictionary",children:e("Dictionnaire")})]}),l.jsxs(Xc,{children:[l.jsx(wt,{to:"/vocabulary-topics",children:e("Vocabulaire")}),l.jsx(wt,{to:"/vocabulary-topics",children:e("Phrases")}),l.jsx(wt,{to:"/dialogue-topics",children:e("Dialogues")}),l.jsx(wt,{to:"/dialogue-topics",children:e("Nouvelles")})]})]})},r3=dt`
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
`,i3=f.div`
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
`,Xc=f.div`
  display: flex;

  flex-direction: column;
`,wt=f(Oe)`
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
    animation: ${r3} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
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
`,o3=[{title:"   Learn French",description:"Begin your journey of learning French, explore the basics of grammar, vocabulary, and communication, and progress towards mastery. Come and discover:",listItems:["Grammar fundamentals","Advanced learning"],buttonLabel:"Learn",buttonColor:"#67330A",link:"grammar"},{title:" Improve Your Vocabulary",description:"Begin your journey of learning French, explore the basics of grammar, vocabulary, and communication, and progress towards mastery. Come and discover:",listItems:["A vast vocabulary by topic","Everyday communication"],buttonLabel:"Learn",buttonColor:"#67330A",link:"vocabulary/vocabulary-topics"},{title:" Discover French Literature",description:"Dive into the treasures of classic and contemporary French literature, exploring different difficulty levels starting from level A1. Discover:",listItems:["50 literary classics","35 contemporary works","20 adaptations","100 articles"],buttonLabel:"Read",buttonColor:"#00384A",link:"/reading-zone/french-easy-reading"}],og=[{title:"  ისწავლე ფრანგული",description:"დაიწყე ფრანგულის სწავლა, ჩვენი საბაზისო გრამატიკის სექციიდან :",listItems:["გრამატიკის საწყისი დონე"],buttonLabel:"ისწავლე",buttonColor:"#67330A",link:"grammar"},{title:" გაიუმჯობესე ლექსიკის დონე",description:"გაიუმჯობესე ლექსიკა, ნახე ჩვენი ლექსიკის სექცია, სადაც დაგხვდება:",listItems:["ლექსიკა თემების მიხედვით","ყოველდღიური საკომუნიკაციო ფრაზები"],buttonLabel:"ისწავლე",buttonColor:"#67330A",link:"vocabulary/vocabulary-topics"},{title:" ფრანგული წიგნები",description:"ფრანგი კლასიკოსების და თანამედროვე ავტორების საუკეთესო ნამუშევრები, როგორც ორიგინალურ ასევე ადაპტირებული სახით. ",listItems:["50 კლასიკური წიგნი","35 თანამედრვე ავტორი","20 ადაპტირებული","100 + სტატია"],buttonLabel:"წაიკითხე",buttonColor:"#00384A",link:"/reading-zone/french-easy-reading"}],s3=()=>{const{t:e,i18n:t}=q(),n=t.language==="fr"||t.language==="ka"?og:o3;return l.jsxs(a3,{children:[l.jsx(h3,{children:e("Parlez-vous français?")}),l.jsx(l3,{children:n.map(r=>{const{title:i,buttonLabel:o,description:s,listItems:a,buttonColor:c,link:u}=r;return l.jsxs(c3,{children:[l.jsx(p3,{children:i.toUpperCase()}),l.jsx("p",{children:s}),l.jsx(f3,{children:a.map((d,p)=>l.jsx("li",{children:d},p))}),l.jsx(u3,{to:u,children:l.jsx(d3,{style:{backgroundColor:c},children:o})})]},i)})})]})},a3=f.div`
  display: flex;
  flex-direction: column;

  font-family: "Roboto Sans Serif", Verdana, sans-serif;
  line-height: 1.4;
  -webkit-text-size-adjust: 100%;
  /* outline: 1px solid red; */
  margin: 0 1rem;
  margin: 0;
  padding: 0;
  h1 {
    padding: 0;
    outline: 1px solid red;

    color: ${e=>e.theme.primaryText};
  }
`,l3=f.div`
  /* outline: 1px solid blue; */

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
`,c3=f.div`
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
    text-align: left;
    font-size: 1.1rem;
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
`,u3=f(Oe)`
  text-decoration: none;
  width: 100%;
  margin-top: auto;
`,d3=f.button`
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
`,f3=f.ul`
  list-style: none;
  padding-left: 1rem;
  color: ${e=>e.theme.secondaryText};

  li {
    &:before {
      content: ${e=>e.theme.background==="#000000"?'"🔹"':'"🔸"'};
    }
  }
`,p3=f.h3`
  color: ${e=>e.theme.primaryText};
  text-align: center;
  width: 100%;
`,h3=f.header`
  text-align: center;
  font-size: 2rem;
  padding: 1rem;
  font-weight: bold;
`,tr=[{code:"en",name:"English",icon:h1},{code:"ka",name:"ქართული",icon:p1},{code:"fr",name:"Français",icon:f1}],m3=({selectedNativeLanguage:e,onTargetLanguageSelected:t})=>{const[n,r]=S.useState(localStorage.getItem("targetLanguageSelected")||""),i=o=>{r(o),t(e,o),localStorage.setItem("targetLanguageSelected",o)};return S.useEffect(()=>{localStorage.setItem("targetLanguageSelected",n)},[n]),l.jsxs(b1,{children:[l.jsx("h2",{children:"Choose the language you want to learn"}),tr.filter(o=>o.code!==e).map(o=>l.jsxs("button",{onClick:()=>i(o.code),children:[o.name,l.jsx("img",{src:o.icon,alt:`${o.code}Flag`})]},o.code))]})},g3=({handleLanguagePopupClose:e})=>{const{t,i18n:n}=q(),[r,i]=S.useState(localStorage.getItem("nativeLanguageSelected")||""),o=s=>{n.changeLanguage(s),i(s)};return r?l.jsx(m3,{selectedNativeLanguage:r,onTargetLanguageSelected:e}):l.jsxs(b1,{children:[l.jsx("h3",{children:"I speak"}),tr.map(s=>l.jsxs("button",{onClick:()=>o(s.code),children:[t(s.name),l.jsx("img",{src:s.icon,alt:`${s.code}Flag`})]},s.code))]})},b1=f.div`
  min-width: 300px;
  max-width: 500px;
  height: 20rem;
  background: ${e=>e.theme.highlight4};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  outline: 3px solid ${e=>e.theme.primaryBackground};
  z-index: 9999; /* Ensure it's on top */
  button {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;
    margin-bottom: 1rem;
    img {
      /* margin-right: 3rem;
      margin-left: auto; */
    }
  }
`,x3=()=>{const[e,t]=S.useState(!0),[n,r]=S.useState(!1),[i,o]=S.useState(!0),s=gr(),{t:a,i18n:c}=q();S.useEffect(()=>{localStorage.getItem("nativeLanguageSelected")?(t(!1),r(!0)):s.pathname==="/"&&t(!0),o(!1)},[s]);const u=h=>{t(!1),localStorage.setItem("nativeLanguageSelected",h),r(!0),c.changeLanguage(h)},d=ne();Ue();const p=W(h=>h.books.books);return W(h=>h.books.isLoading),W(h=>h.vocabularyTopics.vocabularyTopics),W(h=>h.vocabularyTopics.isLoading),S.useEffect(()=>{d(Yi())},[]),S.useEffect(()=>{d(Ji())},[]),i?l.jsx(Be,{}):l.jsxs(y3,{children:[e&&l.jsx(C3,{showoverlay:e,children:l.jsx(v3,{children:l.jsx(g3,{handleLanguagePopupClose:u})})}),l.jsx(x1,{}),l.jsx(s3,{}),l.jsxs(w3,{children:[l.jsxs(b3,{children:[l.jsxs(S3,{children:[a("Tous les livres")," "]}),l.jsx(k3,{to:"/books/level/a2-b1",children:a("Tout afficher")})]}),l.jsx(tL,{books:p})]}),l.jsx(n3,{})]})},y3=f.section`
  margin: 0 1rem;

  background-color: ${e=>e.theme.primaryBackground};
  color: ${e=>e.theme.primaryText};
  max-width: 100%;
  position: relative;

  overflow-x: hidden;
  /* outline:1px solid green; */
  @media screen and (max-width: 576px) {
    margin: 0 0.2rem;
  }
  @media screen and (min-width: 768px) {
    margin: 0 0.3rem;
  }
  @media screen and (min-width: 992px) {
    margin: 0 0.6rem;
  }
`,v3=f.div`
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999; /* Ensure it's on top */
`;f.div`
  max-height: 100%;
`;const w3=f.div`
  background-image: url("src/assets/icons/tex.avif");

  background-repeat: repeat-x;
  margin: 0 2rem;

  border-bottom: 1.6rem solid #c26528;
  margin-bottom: 2rem;
  position: relative;
`;f.h2`
  background: white;
  width: 100%;

  margin: 0;
`;const b3=f.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  font-size: 1.4rem;
`;f.div`
  height: 2.5rem;
`;f.div`
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
`;const S3=f.p`
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
`,k3=f(Oe)`
  font-weight: bold;
  font-size: 2rem;
  text-decoration: none;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  color: white;
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
`,C3=f.div`
  position: absolute;
  top: 0%;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* Adjust the opacity as needed */
  z-index: ${({showoverlay:e})=>e?99:-1};
`,A3=f.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`,$i=f.button`
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
`,j3=f.section`
  display: flex;
  justify-content: space-between;
  /* background-color: white; */
  flex-direction: column;
  width: 100%;
  /* height: 100vh; */
  margin: 0 auto;
`,E3=f.div`
  display: flex;
  margin: 0 3rem;
  justify-content: ${e=>e.index%2===0?"flex-start":"flex-end"};
  align-items: center;
`,T3=f.li`
  display: flex;
  background-color: #3e3efa;
  color: white;
  padding: 1rem;
  border-radius: 3rem 0 2rem 0;
  align-items: center;
  margin-bottom: 1rem;
`,L3=f.li`
  display: flex;
  color: white;
  background-color: #4daffa;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0 3rem 0 2rem;
  align-items: center;
  justify-content: flex-end;
`,sg=f.img`
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  margin-right: 1rem;
  margin-left: 1rem;
`,ag=f.div`
  display: flex;
  flex-direction: column;
`,lg=f.span`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 1rem;
`,cg=f.span`
  font-size: 1.2rem;
  font-weight: 400;
`,Cp=f.div`
  margin: 0 auto;
  margin-bottom: 3rem;
`,O3=f.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  text-align: center;
`;f.div`
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
`;const P3=e=>e.showAnswers&&e.answers===e.option?e.questionCorrectAnswer&&e.showAnswers?"green":"red":e.usersAnswer&&e.answers===e.option?"violet":e.showAnswers&&e.allAnswersCorrect?"green":"white",$3=f.button`
  border-radius: 8px;
  font-size: 1.4rem;
  padding: 0.5rem;
  cursor: pointer;
  gap: 1rem;
  color: black;
  background-color: ${e=>P3(e)};

  &:first-child {
    margin-right: 0.6rem;
    margin-left: 0.2rem;
  }

  &:hover {
    transform: scale(1.1);
    color: rgb(40, 175, 253);
  }
`,Zc=f.button`
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
`;f.div`
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
`;const R3=f.section`
  width: 100%;
  height: 100vh;
  display: flex;

  align-items: center;
  flex-direction: column;
  background-color: white;
`,z3=f.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,N3=f.div`
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
`,B3=f.span`
  text-align: center;
  display: flex;
  cursor: pointer;
  align-items: center;
  font-size: 2rem;
  margin: 0.5rem;
  padding: 0.5rem;
  height: 3rem;
`,I3=f.div`
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
`,F3=f.button`
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
`,D3=f.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: space-between;
`,M3=f.div`
  display: grid;
  grid-template-columns: 35% 35% 35%;
  justify-content: space-between;
  width: 100%;

  margin: 0 3rem;
`,_3=f.div`
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
`,U3=f.div`
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
`;f.div`
  display: flex;

  margin-right: auto;
  background-color: red;
  justify-content: flex-end;
`;const W3=f.div`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1rem;
  margin-left: 3rem;
  width: 100%;
`;f.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  h2 {
    text-align: center;
  }
`;const H3=f.div`
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
`;f.button`
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
`;f.button`
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
`;f.span`
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
`;const Fs=ae("dialogueExercises/fetchDialoguesExercises",async e=>{try{return(await le.get(`/course/elementary/exercise-1/${e}`)).data}catch{throw Error("Failed to fetch dialogues for lesson")}}),V3={dialogueExercises:[],isLoading:!1,error:null},Q3=Pe({name:"dialogueExercises",initialState:V3,reducers:{},extraReducers:e=>{e.addCase(Fs.pending,t=>{t.isLoading=!0,t.error=null}).addCase(Fs.fulfilled,(t,n)=>{t.dialogueExercises=n.payload,t.isLoading=!1}).addCase(Fs.rejected,(t,n)=>{t.isLoading=!1,t.error=n.error.message})}}),G3=Q3.reducer,ug=e=>{const t=document.createElement("canvas"),r=t.getContext("2d").measureText(e).width;return t.remove(),r},q3=({Continue:e,lessonsCurrentIndex:t})=>{const n=ne();W(O=>O.dialogueExercises.isLoading),W(O=>O.dialogueExercises.error);const r=W(O=>O.dialogueExercises.dialogueExercises)||[],[i,o]=S.useState(Array(r.length).fill("")),[s,a]=S.useState(!1),[c,u]=S.useState(0),[d,p]=S.useState(!1),[h,g]=S.useState(!1),[y,v]=S.useState(!1),b=S.useRef([]),[x,m]=S.useState([]),w=S.useRef(null);S.useEffect(()=>{n(Fs(t))},[n,t]),S.useEffect(()=>{k()},[r]),S.useEffect(()=>{b.current=b.current.slice(0,r.length)},[r.length]),S.useEffect(()=>{const O=r.map(P=>{const E=P.message.indexOf("_"),z=ug(P.message.slice(0,E)),B=b.current[0].current.offsetWidth;return z/B*100+2});m(O)},[r,ug]);const k=()=>{o(Array(r.length).fill("")),a(!1),u(0),p(!1),v(!1),g(!1)},C=r.map(O=>O.correctAnswer).join(",")===i.join(","),j=(O,P)=>{const E=[...i];E[O]=P,o(E)},T=()=>{let O=0,P=!1;r.forEach((E,z)=>{E.correctAnswer===i[z]?O++:P=!0}),u(O),a(!0),p(O===r.length),v(P),g(!0)};return l.jsxs(O3,{children:[l.jsx("h2",{children:"Choisissez la bonne réponse."}),l.jsx(K3,{children:r.map((O,P)=>{const E=O.message.indexOf("_"),z=O.message.slice(0,E),B=O.message.slice(E+5);return b.current[P]=w,l.jsx("div",{ref:w,children:l.jsxs("p",{children:[P+1,": ",z,l.jsx("span",{style:{textDecoration:"underline"},children:O.options.map((M,I)=>l.jsx($3,{onClick:()=>j(P,M),questionCorrectAnswer:O.correctAnswer===M,usersAnswer:i[P]===M,showAnswers:s&&i[P]===M,allAnswersCorrect:d,disabled:i[P]!=="",children:M},I))}),B]})},P)})}),l.jsx(Cp,{children:s?l.jsx("div",{onClick:k,children:y?l.jsx(Zc,{children:"Retry"}):e}):l.jsx("div",{onClick:T,children:C?d?e:l.jsx(Zc,{children:"Submit"}):l.jsx(Zc,{children:"Submit"})})}),C&&l.jsxs(H3,{children:[l.jsxs("p",{children:["Score: ",c]}),c===r.length&&l.jsx("p",{children:"Good job!"})]})]})},K3=f.div`
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
`,Y3="/assets/jm-312650a2.jpeg",J3="/assets/clairefraser-8e4eedc8.webp",X3="/assets/bonjor je mappelle jaime-4a41d2e4.mp3",Z3="/assets/et toi tu tappelle commonen jaime-95b48b2f.mp3",e5="/assets/enchante claire jaime-48728a03.mp3",S1="/assets/bonjour jaime claire-dda50943.mp3",k1="/assets/je mappelle Claire claire-db931124.mp3",C1="/assets/encante Claire-990951c9.mp3",eu=ae("dialogues/fetchAudioFiles",async()=>{try{return(await le.get("/audio")).data}catch{throw Error("Failed to fetch audio files")}}),Ds=ae("dialogues/fetchDialoguesForLesson",async e=>{try{return(await le.get(`/course/elementary/dialogues/${e}`)).data}catch{throw Error("Failed to fetch dialogues for lesson")}}),t5={dialogues:[],isLoading:!1,error:null},n5=Pe({name:"dialogues",initialState:t5,reducers:{},extraReducers:e=>{e.addCase(Ds.pending,t=>{t.isLoading=!0,t.error=null}).addCase(Ds.fulfilled,(t,n)=>{t.dialogues=n.payload,t.isLoading=!1}).addCase(Ds.rejected,(t,n)=>{t.isLoading=!1,t.error=n.error.message}).addCase(eu.pending,t=>{t.isLoading=!0,t.error=null}).addCase(eu.fulfilled,(t,n)=>{t.audioFiles=n.payload,t.isLoading=!1}).addCase(eu.rejected,(t,n)=>{t.isLoading=!1,t.error=n.error.message})}}),r5=n5.reducer,i5=({Continue:e,lessonsCurrentIndex:t})=>{const n=ne(),r=W(x=>x.dialogues.dialogues)||[];W(x=>x.dialogues.audioFiles);const[i,o]=S.useState(0),[s,a]=S.useState(0),c=S.useRef(null),[u,d]=S.useState(!1),p=[X3,S1,Z3,k1,e5,C1],h=()=>{const x=p[s];new Audio(x).play(),a(s+1)};S.useEffect(()=>{h()},[]);const g=x=>{if(!u){d(!0);const m=new Audio(p[x]);m.play(),m.addEventListener("ended",()=>{setTimeout(()=>{d(!1)},2e3)})}};S.useEffect(()=>{n(Ds(t))},[]),S.useEffect(()=>{h()},[]),S.useEffect(()=>{let x;return u&&(x=setTimeout(()=>{d(!1)},1500)),()=>{clearTimeout(x)}},[u]);const y=()=>{o(i+1)},v=()=>{y(),h()},b=i>=r.length-1;return l.jsxs(j3,{onClick:v,ref:c,children:[l.jsx("ul",{children:r.slice(0,i+1).map((x,m)=>l.jsx(E3,{onClick:b&&!u?()=>g(m):void 0,index:m,children:m%2===0?l.jsxs(T3,{children:[l.jsx(sg,{src:Y3,alt:"Jaime"}),l.jsxs(ag,{children:[l.jsx(lg,{children:x.message}),l.jsx(cg,{children:x.translation})]})]}):l.jsxs(L3,{children:[l.jsxs(ag,{children:[l.jsx(lg,{children:x.message}),l.jsx(cg,{children:x.translation})]}),l.jsx(sg,{src:J3,alt:"Claire"})]})},m))}),l.jsx(Cp,{children:b&&e})]})},o5="/assets/bonjourCl-13530681.mp3",s5="/assets/tu t appel commen Claire-c40a1782.mp3",Ms=ae("newPhrases/fetchNewPhrases",async e=>{try{return(await le.get(`/course/elementary/phrases/${e}`)).data}catch{throw Error("Failed to fetch phrases for lesson")}}),a5={newPhrases:[],isLoading:!1,error:null},l5=Pe({name:"newPhrases",initialState:a5,reducers:{},extraReducers:e=>{e.addCase(Ms.pending,t=>{t.isLoading=!0,t.error=null}).addCase(Ms.fulfilled,(t,n)=>{t.newPhrases=n.payload,t.isLoading=!1}).addCase(Ms.rejected,(t,n)=>{t.isLoading=!1,t.error=n.error.message})}}),c5=l5.reducer,u5=({Continue:e,lessonsCurrentIndex:t})=>{const[n,r]=S.useState(0),i=ne(),o=W(d=>d.newPhrases.newPhrases)||[],s=W(d=>d.newPhrases.isLoading),a=()=>{r(d=>d+1)};S.useEffect(()=>{i(Ms(0))},[i]);const c=[o5,S1,s5,k1,C1];function u(d){const p=new Audio(c[d]);p.play(),console.log("audio",p)}if(s===!0)return l.jsx("p",{children:"Loading"});if(s===!1)return l.jsxs(D3,{onClick:a,children:[l.jsx(M3,{children:o&&o.originalPhrases&&o.translatedPhrases&&o.originalPhrases.slice(0,n+1).map((d,p)=>l.jsxs(_3,{children:[l.jsxs(U3,{onClick:()=>u(p),children:[l.jsx(nt,{})," ",l.jsx("div",{children:d})]}),l.jsx(W3,{children:o.translatedPhrases[p]})]},`phrase-${p}`))}),l.jsx(Cp,{children:e})]})},tu=ae("dialogues/fetchAudioFiles",async()=>{try{return(await le.get("/")).data}catch{throw Error("Failed to fetch audio files")}}),_s=ae("sentenceBuilder/fetchSentenceBuilder",async e=>{try{return(await le.get(`/course/elementary/sentence-builder/${e}`)).data}catch{throw Error("Failed to fetch dialogues for lesson")}}),d5={sentenceBuilder:[],audioFiles:[],isLoading:!1,error:null},f5=Pe({name:"sentenceBuilder",initialState:d5,reducers:{},extraReducers:e=>{e.addCase(_s.pending,t=>{t.isLoading=!0,t.error=null}).addCase(_s.fulfilled,(t,n)=>{t.sentenceBuilder=n.payload,t.isLoading=!1}).addCase(_s.rejected,(t,n)=>{t.isLoading=!1,t.error=n.error.message}).addCase(tu.pending,t=>{t.isLoading=!0,t.error=null}).addCase(tu.fulfilled,(t,n)=>{t.audioFiles=n.payload,t.isLoading=!1}).addCase(tu.rejected,(t,n)=>{t.isLoading=!1,t.error=n.error.message})}}),p5=f5.reducer,h5=({Continue:e,lessonsCurrentIndex:t})=>{const{handleListen:n,isActiveStates:r}=_e(),i=ne(),o=W(A=>A.sentenceBuilder.sentenceBuilder)||[],[s,a]=S.useState(0),{sentence:c,words:u}=o||{};console.log({sentence:c,words:u}),S.useEffect(()=>{i(_s(t))},[i,t]);const[d,p]=S.useState([]),[h,g]=S.useState(!1),[y,v]=S.useState(!1),b=A=>{p(C=>C.includes(A)?C.filter(j=>j!==A):[...C,A])},x=A=>{p(C=>C.filter(j=>j!==A))},m=()=>{const A=d.map(j=>u[j]).join(" ").trim(),C=A===c;console.log(C,A,c),g(C),v(!0)};console.log("newPair",s),console.log("sentenceBuilders length",o.length);const w=()=>{p([]),v(!1)},k=s===o.length-1;return console.log("nextComponent",k),l.jsxs(R3,{children:[l.jsx("h2",{children:"Build the Sentence"}),l.jsx(nu,{onClick:n(c),children:"play the sentence"}),l.jsx(m5,{onClick:n(c),children:c}),l.jsxs(z3,{children:[l.jsx(N3,{children:d.map((A,C)=>l.jsx(B3,{onClick:()=>x(A),children:u[A]},C))}),l.jsx(I3,{children:u&&u.map((A,C)=>l.jsx(F3,{isSelected:d.includes(C),onClick:()=>b(C),children:A},C))}),l.jsx("div",{children:y?h?e:l.jsx("div",{onClick:w,children:l.jsx(nu,{children:"Retry"})}):l.jsx("div",{onClick:m,children:l.jsx(nu,{children:"Submit"})})})]})]})},nu=f.div`
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
`,m5=f.p`
  display: none;
`,Us=ae("gramer/getGrammer",async e=>{try{return(await le.get(`/course/elementary/grammer/${e}`)).data}catch{throw Error("Failed to fetch grammer for lesson")}}),g5={grammer:[],isLoading:!1,error:null},x5=Pe({name:"grammer",initialState:g5,reducers:{},extraReducers:e=>e.addCase(Us.pending,t=>{t.isLoading=!0}).addCase(Us.fulfilled,(t,n)=>{t.grammer=n.payload,t.isLoading=!1}).addCase(Us.rejected,(t,n)=>{t.error=n.error.message})}),y5=x5.reducer,v5=({lessonsCurrentIndex:e,Continue:t})=>{const n=ne(),r=W(a=>a.grammer.grammer)||[],i=W(a=>a.grammer.isLoading),{handleListen:o,isActiveStates:s}=_e();return S.useEffect(()=>{n(Us(e))},[n]),i?l.jsx("p",{children:"Loading"}):l.jsxs(w5,{children:[l.jsx("ul",{children:r&&r.map(a=>l.jsxs("div",{children:[l.jsx("h1",{children:a.title}),l.jsx("h3",{children:a.titleGeo}),l.jsx(ru,{children:a.verbe.map((c,u)=>l.jsxs(b5,{children:[l.jsxs(pg,{children:[u+1,"."]}),l.jsxs(dg,{children:[l.jsx(hg,{onClick:o(c),className:s[u]?"active":"inactive",isActive:s[u],children:l.jsx(nt,{})}),c]}),l.jsx(fg,{children:a.verbeGeo[u]})]},u))}),l.jsx(ru,{children:l.jsxs(ru,{children:[l.jsx("h2",{children:"examples"}),a.examples&&a.examples.map((c,u)=>l.jsxs(S5,{children:[l.jsxs(pg,{children:[u+1,"."]}),l.jsx(hg,{onClick:o(c),className:s[u]?"active":"inactive",children:l.jsx("img",{src:ListenImg,alt:"ListenImg",isActive:s[u]})}),l.jsx(dg,{children:c}),l.jsx(fg,{children:a.examplesGeo&&a.examplesGeo[u]})]},u))]})})]},a._id))}),t]})},w5=f.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 2rem;
  justify-content: center;
  ul {
    margin-bottom: 2rem;
  }
`,ru=f.ul`
  display: flex;
  flex-direction: column;
`,b5=f.div`
  list-style: none;
  line-height: 2rem;
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid gold;
  border-radius: 0 0 0 8px;
  padding: 0.5rem;
  width: 100%;
`,dg=f.span`
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
`,fg=f.span`
  font-size: 1.2rem;
  letter-spacing: 1.4px;
`,pg=f.span`
  font-size: 1.6rem;
`,hg=f.div`
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
`,S5=f.div`
  display: flex;
  padding: 0.5rem;
  width: 100%;
  border-bottom: 2px solid gold;
`,k5=()=>{const[e,t]=S.useState(0),[n,r]=S.useState(0),i=()=>{r(s=>s===o.length-1?(t(a=>a+1),0):s+1)},o=[l.jsx(v5,{lessonsCurrentIndex:e,Continue:l.jsx($i,{onClick:i,children:"Continue"})}),l.jsx(i5,{lessonsCurrentIndex:e,Continue:l.jsx($i,{onClick:i,children:"Continue"})}),l.jsx(q3,{lessonsCurrentIndex:e,Continue:l.jsx($i,{onClick:i,children:"Continue"})}),l.jsx(h5,{lessonsCurrentIndex:e,Continue:l.jsx($i,{onClick:i,children:"Continue"})}),l.jsx(u5,{lessonsCurrentIndex:e,Continue:l.jsx($i,{onClick:i,children:"Continue"})})];return l.jsx("div",{children:l.jsx(A3,{children:o[n]})})},C5=f.div`
  padding: 20px;
`,A5=f.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`,j5=f.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`,E5=f.p`
  font-size: 18px;
  font-style: italic;
`,T5=()=>l.jsxs(C5,{children:[l.jsx(A5,{children:"Intermediate Page"}),l.jsx(E5,{children:`"Exciting things are on the horizon! We're working diligently to bring you the best learning experience for our Intermediate and Advanced courses. While the content is being carefully crafted, stay tuned and get ready to embark on an incredible language journey with us. We can't wait to share it all with you soon! Thank you for your patience and enthusiasm."`}),l.jsxs(j5,{children:[l.jsx("p",{children:"Welcome to the Intermediate level! This level is designed for learners who have some basic knowledge of the language and want to improve their skills further."}),l.jsx("p",{children:"In this course, you will learn more complex grammar structures, expand your vocabulary, and practice reading and listening to intermediate-level texts and dialogues."}),l.jsx("p",{children:"By the end of this course, you will be able to engage in more meaningful conversations and understand intermediate-level content."})]})]}),L5=()=>{};f.button`
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
`;f.div`
  padding: 20px;
`;f.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;f.div`
  background-color: #ffebeb;
  color: #000;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;f.div`
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: ${e=>e.highlighted?"green":"black"};
`;f.div`
  display: ${e=>e.show?"block":"none"};
  color: red;
  margin-bottom: 10px;
  opacity: ${e=>e.show?1:0};
  transition: opacity 0.3s ease-in-out;
`;f.span`
  font-weight: bold;
`;f.span`
  margin-left: 5px;
`;f.button`
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
`;f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;f.button`
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
`;f.div`
  font-weight: bold;
`;f.div`
  font-style: italic;
  margin-bottom: 5px;
`;f.div`
  padding: 20px;
`;f.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;f(Oe)`
  display: block;
  font-size: 18px;
  color: #007bff;
  margin-bottom: 10px;
  text-decoration: none;
`;const O5=({title:e,duration:t,difficulty:n,vocabularyCount:r,description:i,image:o,phrase:s})=>l.jsxs(P5,{children:[l.jsxs($5,{children:[l.jsx(R5,{src:o,alt:e}),l.jsx("p",{children:s})]}),l.jsx("h3",{children:e}),l.jsxs(z5,{children:["Duration:",l.jsx("span",{children:t})]}),l.jsxs(N5,{children:["Difficulty:",l.jsx("span",{children:n})]}),l.jsxs(B5,{children:["Vocabulary Count:",l.jsx("span",{children:r})]}),l.jsxs(I5,{children:["Description:",i]})]}),P5=f.div`
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
`,$5=f.div`
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
`,R5=f.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,z5=f.p`
  padding: 0 1rem;

  span {
    font-size: 1.5rem;
    margin-left: 0.5rem;
    color: blue;
  }
`,N5=f.p`
  padding: 0 1rem;
  span {
    font-size: 1.5rem;
    margin-left: 0.5rem;
    color: #0d4d15;
  }
`,B5=f.p`
  padding: 0 1rem;

  span {
    font-size: 1.5rem;
    margin-left: 0.5rem;
    color: #ff9e1f;
  }
`,I5=f.p`
  padding: 0 1rem;

  span {
    font-size: 1.5rem;
    margin-left: 0.5rem;
    padding: 1rem;
    color: #ff9e1f;
  }
`,F5=[{imgUrl:"/images/vitrine-des-baguettes.jpg",phrase:"- Je veux une baguette s'il vous plaît",title:"Basic French",duration:"6 weeks",difficulty:"Beginner",vocabularyCount:"500",description:"The Basic French course is designed for absolute beginners who have little to no prior knowledge of the French language. Over the course of 6 weeks, students will be introduced to the fundamental aspects of French, including basic vocabulary, essential grammar rules, and simple conversational phrases. Through interactive lessons, fun exercises, and engaging activities, learners will gain the confidence to navigate everyday situations in French-speaking environments. By the end of the course, students can expect to have acquired approximately 500 commonly used vocabulary words and a basic understanding of French sentence structure. Whether you plan to travel to a French-speaking country, communicate with French-speaking friends or colleagues, or simply explore a new language, this course is the perfect starting point on your language journey."},{title:"Intermediate French",duration:"8 weeks",imgUrl:"/images/asking.jpg",phrase:"- Qu'est que vous me conseillez?",difficulty:"Intermediate",vocabularyCount:"1000",description:"The Intermediate French course is tailored for learners who have a foundational understanding of French and wish to deepen their language skills. Spanning 8 weeks, the course will delve into more complex grammar concepts, varied verb tenses, and idiomatic expressions. Students will engage in immersive language activities, authentic conversations, and reading comprehension exercises to strengthen their language proficiency. By the end of the course, students can expect to have expanded their vocabulary to approximately 1000 words and gained confidence in expressing themselves in various real-life situations. Whether you aim to enhance your career opportunities, connect with French-speaking communities, or appreciate French literature and culture, this course will provide the necessary tools to become a more proficient French speaker."},{title:"Advanced French",duration:"12 weeks",imgUrl:"/images/advanceImage.jpg",phrase:"- À qui est-ce que je dois m'adresser pour un échange?",difficulty:"Advanced",vocabularyCount:"2000",description:"The Advanced French course is designed for learners who already possess a strong foundation in the language and seek to achieve fluency and sophistication. Over the course of 12 weeks, students will engage in stimulating discussions, analyze authentic French texts, and participate in advanced grammar workshops. Emphasis will be placed on refining pronunciation, mastering intricate grammar rules, and comprehending complex literary works. By the end of the course, students can expect to have expanded their vocabulary to approximately 2000 words and attained a high level of proficiency in reading, writing, listening, and speaking French. Whether you aspire to pursue higher education in a French-speaking country, work in international settings, or simply enjoy French literature in its original form, this course will elevate your language skills to an advanced level."}],D5=()=>l.jsx(M5,{children:F5.map((e,t)=>l.jsx(_5,{to:`/${e.difficulty.toLowerCase()}`,children:l.jsx(O5,{image:e.imgUrl,phrase:e.phrase,title:e.title,duration:e.duration,difficulty:e.difficulty,vocabularyCount:e.vocabularyCount,description:e.description})},t))}),M5=f.div`
  display: flex;
  margin: 0 1rem;
  margin-top: 3rem;
  align-items: center;
  justify-content: space-evenly;

  gap: 20px;
`,_5=f(Oe)`
  text-decoration: none;
  color: black;
`,U5=()=>{const[e,t]=S.useState(!0),[n,r]=S.useState(window.pageYOffset),i=()=>{const o=window.pageYOffset;t(o<=n||o===0),r(o)};return S.useEffect(()=>(window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)}),[]),e},W5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHDklEQVR4nO2Za3ATVRTHi+Ljs36h+N3HJ9FP6gBf/KIC9cGzWEXRwRHRpoUBEWdQhhYfjErtI22ed5M+kiZN32maQFqgQktb2rRUebS7YcZxRGjp6IyQDf6dc0tD22S3abN1/NAzcybJ3bt37y/nnnvOPZuWtiiLsiiL8n+QsUD6s+P+Zblj/uXP/KcPBg7eB9HypCxaX49Kwq5oWNjHVRJ2URtdoz6zjXPTn95EEDf96fJ4IB03/emRMd/yFQs7+e7SB+QR9mpUFJyyKFyPSgLUlPrIInPIYVsG3as07nhg2W6CiKl/We7CAAw6H4xK7GNZEq7ONnlFKEkIk7USAY35lz9Dlpi0yOjxx57WHCIStq2SJWFovgDxVmIXImG2Mg7Gt3zFuH9ZjuYQAJZERXZAFllUK4gpMHJUFPbTMzSddDyE835ZZEatARIAGehZU589unL92tHV68dHV21ckyIEltADkpnIrWGGHu8xNFryYf/hc670/XxLAb+WHIwgTLUMARDIjdVvvJL0pMdffO3R6yvX59x8buMjk220nGZ7+FCwGIc/2YHd27JQ9NVXcFit8DU2ca2yWHlb7ttv4nD2DvzcVjw7kMg+Tenfv7F6Y+7o6g0gmJhjq/jEH/0mPrlDuTno7urGiHRVVanPlzk65Os+wPWQWdVnIpLwwrxByBJjqzbo6JO2WLXd6Ze2YmRnbsYJnx8NNXXwVLnR0X56VhjStsAJZG/dhIvtJaq7GVRiTdJCcUINIidrKwK+VphLLKj1tKG+7iTsZhdOn+xICqa/P8THSARz59d6rlGR7Uw9YisEO1oSH7y6Fr6mFgiGCg4wVWur3bgyLMLjdMPX7FOFCYUGuWWuhUwJQWSJSSlZRRaF15SssW97FgqOHEMFq42DEAyV6O8LocJcjtqaE7zN29SO9uBJRZigP4A83Q7lJSaxtSmAMEeiQWnH2blpSxzApB73T0zYVGKdDmhyoOvsOUWYL3TZGDpepARSMS8IylBlkf1x57dm4M4t/POXGBt077ZMWPTlCSFqXAF0nu3iEyO/mXndXV49bfK+5ha+QQxeGMK5znOKVqFEM5msOR5EZE/xdXqjE1yif8eC3fsZ6xStYSo04vKweHdXCoIZ7DAVW2AuYSg32blzT0IEWvxwlDfy+1iplbflvJWlGDQxYntiziB3zxOIhss5DFmGflPE3rN9R0IIVlYJT1U16l11ON/bN2OrDaLR04DOs70I9Q/wtppKV+xeAh2RrqIgLw99LQWJrRK2ZWi27TaYD+Ogbp+iRdzVfv5ZVmCIQViKDaiy190DNlZy2M6fOmEzOaZZxGG1opnlKzn9R3MHEW2fJRqsNG8Pjh46qgjicQdgLDLDqjfzibU0elHtbI0HdrbizJkedJzu4H4zNPTLRP+GBti+O6CQsgj7NQMx5u/Bt198owhi1VtjPkLqqnAq9q2tCcCqN01bht76eti//zx1EAS3PXy7d+t7kQv7yqOSNW6wJkseDmbvVZyc3VqDU2334kUodAGGgjJuqYkYY4fdZEd1pffeUjNUoO14G+9fZbHAazuS+tKKdG9xyz2Z4DqQEzeYkrPT8hEMAlx2J66M3LMI6fCIBGNBCars9eg4NZG6WPTm2L11te3wONzaOnukO/PPGEhvVtxgkRGG9zIy4kCMhSbVNMRmtPMY461v4r8b3HUxKxkLzbh46bK222+ke4trEiQyoLuVaMC972yFWW+PC4QnAu2KIOQrpkIzWu/mXcNiGB6HC+6KagwODvG2rs4untorRPbf53QExqWXHrrds2X77Z7Md6Nhi1O++DVIp2e9RQlTFJejGZcuD6tapqe7F4ZjZWCllvgUJTubZ9SapigkVKtKBEK6f3sWCr8tmhFDAgh4W1VByBd4BlBsnp40tgaQn5PYGhMgtjWppvHhRAPfGDDj3TUvo/QHPSx6BrfTh1pPEPWuGlUQWkYueyXO/nQm1tbXF8LHmzfwk6aCNSQguDQtFeFlT4V/iQ5DdCjq6+uHr9GLmirXrEtrphKELitT9ZQYFYUPU4LgVkFwaVRkIWUYOupu4ueJuQBMLie699JJvRrEoCZHXRKqAPLimcLD6LRI6feXumyeis8GQLsTnT3IJ2iJqhYfRPZ8mpZC6YHivzZlNyMgKvn8mJ/PS0C+xkauFLEp2O1++03eR2l3ik7XvWlay1wKdBQ0KTpTFjtZoKPvfb4f+bVkxpBFoUxziBkl06RgUlFZFMpmlkwXAIYXsT9V85n5AzB5QZaTmlAFkHYUzUBENqC5YydbE6ZtkYpnFLDmbQW6VxQ+1GyLnU9NeFoGEBbWyRKrlCXh2uyTF65R7kS1qpQjdqo1YTUfwjB7fOKdItsZexlKlqN3hsPs8QV/kbMoi7Ioi5L2f5d/AbwhT5cpNaE8AAAAAElFTkSuQmCC",H5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAG4klEQVR4nO1Z61MTVxSnte0f0H4B+kGMfcir8tCgTjvtt47UWqudNkD92FqtnREcS4AW7fiAAloJggoMESw4hoolYBUSBFHjg+wGlYcOArtBpQgCyW4YSaync24Eg+yGJCydfuDMnMnm7r3n3t+ee8797Vk/v3mZl3mZl/+DjOgDoiw6/6QRXWDkfzoxALxs7LUuMfbaPqcYbivF8slEGW4rtuE97DOTnVFdwBkEMaoLcFj0ATCqC7CP1AVGzOnijUZ4lWZtn1Esr6EZfohmeXCr2IfhT1KsbS2OFbNr0ftvRxCTqvNPmhMAbW3wGsVwP9AMZ55x8aLKscRbAoBGdIGR6IkJjww3vLlUchBG1voBzfIdvgOYqhTLtxtZ6/vTwNQFRlh0/omSgwCAlyiWT6MZ7olUIJ5vOc5Bs3wKzuE3l6IBWECxXLE3i7t+9xFR77zDFeFcrnMrS1vXJKtNlmS16RMJPMEVebKQq3cG4XhWMtSc1kKNajtoVTvINbbhPQ9jp8zVMwgAgShL6FiPF60svfZG8jFTYmJR2+sTbWQ7zTD5ydydoC9SguHXWICjC8FesJD8ul5fyowlfTSqXZ4AUs7q6StLW5OUx0yAYCYDWyQmqF4LVJaWgLZwN/QdCAHrIRmcTQ2G3QmhsDM+DNLiwoniNbadSw0GLl8GfftDQXt0D1SWqYkN0ZhhLKt8BoKeUKpN2/AXU6y77HTReBu6siNh/EgQlG8LgTRFODTkRYOlKQaeXFsxRbGtQRVF+lQkhpAxXdnRxIbbbGYUP2s8FnJOCAVx1yP448g+MGTFwmCuDJQbwqC5IHra4if0kV4OQ/rn4C4UREPKF2EwlCcjNiqPZBCbrnN0PhgjSputW2Z/YoscdsYeC7RkfgiDKhnsWB8OfTVyURAT2l21HNhqOfDNzv/mGjkZO6SSQUvmR9O22CQQlmNm5RWT2bZOCET9hRaSibhDQcQTnoBw1ftn5ECpl5FrViuHlA1hwKmCoFq1g9gWfHAMv8ZnIMiHhIxWlxeRDFSeGAIXD4tvJ3c62hgzCaYpfxmcSAwmNqt/LxaOFYav8AkEMlSa4QeFjNYWZ5DshEHrCwhXz/ScloPj6gpii8uXQU1RhkgG44c8Yc3ThOq1BgsZ1KgL4d7BpSTFns/zzRuu2vvncvKrz42CurQlxDbOITT3jR7Lu14DwXcHIWN6wy0YyFlEzgShFOutDjfEwECdnGy1PQmhMJC9CBqutIukYttaydJuraYCHucHQXrc7LaVq5rKnLGSrggntmsry0UCnvveayA0y6e+aOhK59+g3ZdAgjI9XnogP8eFOwN+30a40tEvBCbFZyB3+segb3gcWs3PMlaFes6ApMe/5wRSUSp20nsPBN/acLDjn6eAgmDwP2YVAkTCrdXqsrXg6ELQFmdKt7Umgn3Y5iBgbvePkZO3Sp0HgwfekizYe6rk8LAuhgT73oRQGDz4NpxS5wsSSd+CXST9ojZnryMsFgngbIEYS5ze0B2MhvqfgqE5Z70ogfQp/dqpjcvMnZV8R3fHVLZLd0P9Lx9LciAy1cuJ4oGY+lUYORB1u1eTOQRY8IDXr8Djxi+j7FScw0HFgZ36Gjp6OqcYPW+goC1nJaHiyGJ9ATFyPgaoY87DsDEvGk4mhUBbzipoNJikoyh2o2I7gphQ8+3T0wxfKPgOxguCCOFDFusNiL5a+WSmQjaMdB5tNeVvFt1WJob3/l19/Loi0k4p7E6PJDx90SOoVWUl0JS1nlBwpOLIYj0FwjXHTIIgND53MTRlbSA2hYFwTCPAK14DIWBM8RF2SpHYfUefgcb6DXHTJrhId8Hd7KUwlCsjnkEWi/t9JiDYB7eT88VqMdzNjiC2aBFv0Kx1s99sBZ8EzfA3hSbAikhV4X7QZccRaoFUHBMAEkBMpy8CwDbMThjYGBOPDwdBfZYCThXuF62uUAzfJsmrLgpWAJ8VzwQnu941BH/tWg2dGWEkmyGLFSs+4D3s05kRTsa4rXkxnIPqHVvpJ6UgPRB3PQ8N19rhcvsDOHdgE3RkREJnppNuuCq24b2zv20ifXGMO5sUw//oJ7V4WqCrb24BQ/t9uHSzBzR7vgHt8QKoOZ4Pmr3fwuUbvWBou0f6zGSHYrlChzF+jZ1SWBxGxeyqiyIlU4+qjRNbTujaExAagAUIgABpifO8uuiNZ7AC6C5mfFaGc8zJdnInWAHEjCIVCIrhb0ke2F7VvczWLXhg+Q4Cx1o3S5ZifS1uo+AiKNb2Kc3wJyiGf+jB03+I3AlrVT6f2FIWt8ViqPWe5R38pojemvgY6ry2rcV7c/4hx5vi9oyd52Ve5mVe/OZA/gVUmO1hSjgNggAAAABJRU5ErkJggg==",A1=({toggleTheme:e,isDarkMode:t})=>l.jsx(G5,{onClick:e,children:l.jsx(q5,{isDarkMode:t,children:l.jsx("img",{src:t?W5:H5,alt:"Toggle Icon"})})}),V5=dt`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
`,Q5=dt`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`,G5=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: 100%;
`,q5=f.div`
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
    animation: ${e=>e.isDarkMode?fr`
            ${V5} 0.8s forwards
          `:fr`
            ${Q5} 0.8s forwards
          `};
  }
`,j1=()=>{const{t:e,i18n:t}=q(),[n,r]=S.useState(!1),[i,o]=S.useState(!1),s=localStorage.getItem("nativeLanguageSelected"),a=localStorage.getItem("targetLanguageSelected"),c=(g,y)=>{t.changeLanguage(g),localStorage.setItem(`${y}LanguageSelected`,g),r(!1),o(!1)},u=tr.filter(g=>g.code!==s&&g.code!==a),d=tr.filter(g=>g.code!==s&&g.code!==a),p=tr.find(g=>g.code===s),h=tr.find(g=>g.code===a);return l.jsxs(K5,{children:[l.jsxs(mg,{children:[l.jsxs(gg,{onClick:()=>r(!n),children:[l.jsx(Y5,{children:e("Je parle")}),l.jsxs(yg,{children:[l.jsx("img",{src:p==null?void 0:p.icon,alt:p==null?void 0:p.code}),p==null?void 0:p.name]})]}),n&&l.jsx(xg,{children:u.map(g=>l.jsxs("button",{onClick:()=>c(g.code,"native"),children:[l.jsx("img",{src:g.icon,alt:g.code}),g.name]},g.code))})]}),l.jsxs(mg,{children:[l.jsxs(gg,{onClick:()=>o(!i),children:[l.jsxs(yg,{children:[l.jsx("img",{src:h==null?void 0:h.icon,alt:h==null?void 0:h.code}),h==null?void 0:h.name]}),l.jsx(J5,{children:e("J'apprends")})]}),i&&l.jsx(xg,{children:d.map(g=>l.jsxs("button",{onClick:()=>c(g.code,"target"),children:[l.jsx("img",{src:g.icon,alt:g.code}),g.name]},g.code))})]})]})},K5=f.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 480px;
  background: ${e=>e.theme.secondaryBackground};
  /* outline: 2px solid ${e=>e.theme.highlight2}; */
  box-shadow: ${e=>e.theme.localizationBoxShadow};
  @media (max-width: 855px) {
    width: 90%;
    flex-direction: column;
    margin: 0 auto;
    padding-left: 1rem;
  }
  @media (max-width: 300px) {
    width: 90%;
    flex-direction: column;
    margin: 0 auto;
    padding-left: 1rem;
  }
`,mg=f.div`
  cursor: pointer;
  padding: 0.2rem;
  position: relative;
`,gg=f.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 230px;
  @media (max-width: 300px) {
    width: 90%;
    flex-direction: column;
    margin: 0 auto;
    padding-left: 1rem;
  }
`,xg=f.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: ${e=>e.theme.primaryBackground};

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 4px;
  button {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0.4rem 0.8rem;
    color: ${e=>e.theme.primaryText};

    img {
      width: 2rem;
      margin-right: 0.5rem;
    }
    &:hover {
      background-color: #f0f0f0;
    }
  }
`,yg=f.div`
  display: flex;
  align-items: center;
  padding: 0.2rem 0.4rem;

  font-weight: bold;
  font-size: 1rem;
  outline: 1px solid ${e=>e.theme.highlight4};
  color: ${e=>e.theme.primaryBackground};
  color: ${e=>e.theme.secondaryText};

  img {
    width: 1.8rem;
    margin-right: 0.2rem;
  }
`,Y5=f.h5`
  margin-right: 0.4rem;
  &::after {
    content: " -";
  }
`,J5=f.h5`
  margin-left: 0.4rem;
  &::before {
    content: " - ";
  }
`;/*! js-cookie v3.0.5 | MIT */function cs(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var X5={read:function(e){return e[0]==='"'&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function Wd(e,t){function n(i,o,s){if(!(typeof document>"u")){s=cs({},t,s),typeof s.expires=="number"&&(s.expires=new Date(Date.now()+s.expires*864e5)),s.expires&&(s.expires=s.expires.toUTCString()),i=encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var c in s)s[c]&&(a+="; "+c,s[c]!==!0&&(a+="="+s[c].split(";")[0]));return document.cookie=i+"="+e.write(o,i)+a}}function r(i){if(!(typeof document>"u"||arguments.length&&!i)){for(var o=document.cookie?document.cookie.split("; "):[],s={},a=0;a<o.length;a++){var c=o[a].split("="),u=c.slice(1).join("=");try{var d=decodeURIComponent(c[0]);if(s[d]=e.read(u,d),i===d)break}catch{}}return i?s[i]:s}}return Object.create({set:n,get:r,remove:function(i,o){n(i,"",cs({},o,{expires:-1}))},withAttributes:function(i){return Wd(this.converter,cs({},this.attributes,i))},withConverter:function(i){return Wd(cs({},this.converter,i),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(e)}})}var Ap=Wd(X5,{path:"/"});const Z5=()=>({isLoading:!1,error:null,user:null,isAuthenticated:!!Ap.get("authToken")}),Ws=ae("auth/loginUser",async e=>{try{const t=await le.post("/auth/login",e);console.log("response data in login slice",t.data);const{accessToken:n}=t.data;return Ap.set("authToken",n),t.data}catch(t){throw new Error(`Failed to register user:
 ${t.response.data.message}`)}}),qr=ae("auth/logoutUser",async e=>{try{await le.post("/auth/logout",{id:e}),Ap.remove("authToken");return}catch(t){throw t}}),eP=Z5(),tP=Pe({name:"auth",initialState:eP,reducers:{},extraReducers:e=>{e.addCase(Ws.pending,t=>{t.isLoading=!0}).addCase(Ws.fulfilled,(t,n)=>{t.auth=n.payload,t.isLoading=!1,t.isAuthenticated=!0}).addCase(Ws.rejected,(t,n)=>{t.error=n.error.message}).addCase(qr.pending,t=>{t.isLoading=!0}).addCase(qr.fulfilled,t=>{t.auth=null,t.isAuthenticated=!1,t.isLoading=!1,t.error=null}).addCase(qr.rejected,(t,n)=>{t.isLoading=!1,t.error=n.error.message})}}),nP=tP.reducer,Hd="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACZElEQVR4nO2ZPWtUQRSGHxNdiaZQxEpIndhpq6CNJloIJkgKg4VoERQtoiR+INFGC8mfkGisxcq/EPwKiPErWgQLCwUXRaO54cB7YVgkubOz7owyDwwsd89575mvO2dmIJP5Z6gBw8A94CVQV7Hfd/Wf2STNMeAdUKxR3gJDJEgnMOUE+hg4C/QBm1X69OyJY3dbvskwpcC+AyeBdavYdgCnZFtWJpnhVADfgD0efnudygwSmZozJ6wnfDkt3zexPwDDzpywIeOL+TyVhvVsNGYUxJkAjXPSmCYi8wqiN0BjpzRsnYnGVwXRHaDRLQ3Tika5HqSi0zS5Ig3kHmkVeWilNrS+KIAtARpbpfGZiDxXELsCNHZLw9L7aEwriAsBGhelcYeIHFIQ8wFJ4ytpDBCRTqXgFsh4E/4T8n2dwk5xP7AM/PBsVbP9CfwG9pEIN9SyS8BoBftR2ZrPdRJj3GM9KO1ukSiFZ0WSpcgVSYzif+iR7c4h3VqU51nbSIwBYEHBPahg/9BZCPuJTA0YAWadoWJnVDsq+PYALxy/WWnVaCM2HC4Bi04gH4ExYKOHzibgKvDJ0VmU9l8dctZa5509SJks2rOuAF2r/AlgztG1o6HJQN0/crDh3uORnq126u6LafVLu3zPB+Bwq15wRYldoVZrx+Q8ADzTO5fVO0FMSuwXcK3NqXYHcNlJLm82K3RErbGkU/dYDCrdt1iONjOxFwI2TK1mTLG89/1EH5ejTfANxGe9LlALrTeVuS8n2zCltnmb8XEqax89fWhIg8prusrUK9yVxyp1n4oUiZdMJoMfK+YhJaCnoLnkAAAAAElFTkSuQmCC",rP="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNklEQVR4nO3aMU4DMRCF4R8KWiRofRHEwWi3gcBNOEEaxAEoAhR0tCzXcGTJkdAqGzyJgt4MfpJLS/NpdtdrywBnwAPwDWSRMQKLWltz7gUKnxt3FshYJ12hk+sfnWnORq+WbK2rQ46c3Dsiltw7IpabKB0pGQgCMaVDjphHYAmce+/Iqtb0YsEoQhLwWesqqAuvkL0wqpAp5vU3jDLEhFGHbMNc4hTShPECmWLephhPkJ0Yb5BZzCGQE+Bd4NhodSjktL547iFhHi2pz3B2BEm71hIvkBRhQUwt/1vqkNT6O68MSZY9iSokRdhYpShb3Y8ohw/PwFOE46C90iF/kCFCRwZrXaqQ3CFiyb0jYsn/tiNjnVAusqhdqvmyTFoIHOfMjVsLpFzuKphNZxRG6URBNF88WwOccZGxk5w4qAAAAABJRU5ErkJggg==",jp=({handleLogout:e})=>{const{t}=q();return l.jsx(iP,{onClick:e,children:l.jsxs("button",{children:[t("Se déconnecter"),l.jsx("img",{src:rP,alt:"LogoutIcon"})]})})},iP=f.div`
  button {
    background-color: ${e=>e.theme.primaryBackground};
    color: ${e=>e.theme.primaryText};
    border: none;
    padding: 6px 10px;
    cursor: pointer;
    border-radius: 4px;

    cursor: pointer;
    border-radius: 4px;
    &:hover {
      outline: none;
      transform: scale(1.1);
    }
    img {
      max-width: 1rem;
      max-height: 1rem;
    }
  }
`,oP=()=>{var p,h;const{t:e}=q(),t=ne(),n=W(g=>g.auth.isAuthenticated),r=W(g=>g.auth.isLoading),i=W(g=>g.auth.auth)||{},o=(p=i.user)==null?void 0:p.username,s=(h=i.user)==null?void 0:h._id,[a,c]=S.useState(!1),u=()=>{c(!a)},d=()=>{t(qr(s))};return r?l.jsx(Be,{}):l.jsxs(sP,{onClick:u,children:[l.jsxs(vg,{children:[l.jsx(fP,{src:Hd,alt:"User Icon",isConnected:n}),l.jsx(pP,{isConnected:n}),l.jsx("span",{children:n?o:e("Pas connecté")}),l.jsx(lP,{onClick:u,children:"▼ "})]}),l.jsx(cP,{children:a&&l.jsx(uP,{children:n?l.jsxs(l.Fragment,{children:[l.jsx(iu,{children:l.jsxs(dP,{to:"/profile-page",children:[e("Profil"),l.jsx(vg,{children:l.jsx("img",{src:Hd,alt:"User Icon"})})]})}),l.jsx(jp,{handleLogout:d})]}):l.jsxs(l.Fragment,{children:[l.jsx(iu,{children:l.jsx(Hn,{to:"/login",children:e("Connexion")})}),l.jsx(iu,{children:l.jsx(Hn,{to:"/register",children:e("Inscription")})})]})})})]})},sP=f.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`,aP=dt`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;f.div`
  font-weight: bold;
`;const lP=f.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: ${e=>e.theme.primaryText};
`,cP=f.div`
  position: relative;
`,uP=f.ul`
  position: absolute;
  top: 30px;
  right: 50%;
  background-color: ${e=>e.theme.primaryText};
  color: ${e=>e.theme.primaryBackground};

  border: 1px solid #ccc;
  border-radius: 5px;
  list-style: none;
  padding: 0;
  margin: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,iu=f.li`
  cursor: pointer;
  width: 100%;
  color: red;
`,dP=f(Hn)`
  display: flex;

  gap: 2rem;
  cursor: pointer;
`,vg=f.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  width: 140px;
  /* outline: 1px solid blue; */
  font-size: 0.8rem;
  background-color: ${e=>e.theme.primaryBackground};
  padding: 0.1rem;
  @media (max-width: 520px) {
    width: 100px;

    > span {
      visibility: hidden;
      height: 0;
      width: 0;
    }
  }
`,fP=f.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-right: 10px;
  background: white;
  outline: 1px solid ${e=>e.isConnected?"green":"red"};

  padding: 0.4rem;
  margin: 0.2rem;
`,pP=f.div`
  position: absolute;
  bottom: 12%;
  left: 28%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  animation: ${aP} 1s infinite;
  background-color: ${e=>e.isConnected?"green":"red"};
  @media (max-width: 520px) {
    left: 40%;
  }
`,Hs=ae("user/register",async e=>{try{return(await le.post("/register",e)).data}catch(t){throw new Error(`Failed to register user:
 ${t.response.data.message}`)}}),E1=rn("user/updateUserData"),Vs=ae("user/FetchupdateUser",async({id:e,newUsername:t},{dispatch:n})=>{try{const r=await le.post("/auth/update-username",{id:e,newUsername:t}),i=r.data;return n(E1(i)),r.data}catch(r){throw new Error(`Failed to update username: ${r.response.data.message}`)}}),hP={user:"user",isSuccess:!1,isLoading:!1,error:null},mP=Pe({name:"user",initialState:hP,reducers:{updateUserData:(e,t)=>{e.user=t.payload}},extraReducers:e=>{e.addCase(Hs.pending,t=>{t.isLoading=!0}).addCase(Hs.fulfilled,(t,n)=>{t.user=n.payload,t.isSuccess=!0,t.isLoading=!1}).addCase(Hs.rejected,(t,n)=>{t.error=n.error.message}).addCase(Vs.pending,t=>{t.isLoading=!0}).addCase(Vs.fulfilled,(t,n)=>{t.user=n.payload,t.isSuccess=!0,t.isLoading=!1}).addCase(Vs.rejected,(t,n)=>{t.error=n.error.message}).addCase(E1,(t,n)=>{t.user=n.payload})}}),gP=mP.reducer,xP="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACZElEQVR4nO2ZPWtUQRSGHxNdiaZQxEpIndhpq6CNJloIJkgKg4VoERQtoiR+INFGC8mfkGisxcq/EPwKiPErWgQLCwUXRaO54cB7YVgkubOz7owyDwwsd89575mvO2dmIJP5Z6gBw8A94CVQV7Hfd/Wf2STNMeAdUKxR3gJDJEgnMOUE+hg4C/QBm1X69OyJY3dbvskwpcC+AyeBdavYdgCnZFtWJpnhVADfgD0efnudygwSmZozJ6wnfDkt3zexPwDDzpywIeOL+TyVhvVsNGYUxJkAjXPSmCYi8wqiN0BjpzRsnYnGVwXRHaDRLQ3Tika5HqSi0zS5Ig3kHmkVeWilNrS+KIAtARpbpfGZiDxXELsCNHZLw9L7aEwriAsBGhelcYeIHFIQ8wFJ4ytpDBCRTqXgFsh4E/4T8n2dwk5xP7AM/PBsVbP9CfwG9pEIN9SyS8BoBftR2ZrPdRJj3GM9KO1ukSiFZ0WSpcgVSYzif+iR7c4h3VqU51nbSIwBYEHBPahg/9BZCPuJTA0YAWadoWJnVDsq+PYALxy/WWnVaCM2HC4Bi04gH4ExYKOHzibgKvDJ0VmU9l8dctZa5509SJks2rOuAF2r/AlgztG1o6HJQN0/crDh3uORnq126u6LafVLu3zPB+Bwq15wRYldoVZrx+Q8ADzTO5fVO0FMSuwXcK3NqXYHcNlJLm82K3RErbGkU/dYDCrdt1iONjOxFwI2TK1mTLG89/1EH5ejTfANxGe9LlALrTeVuS8n2zCltnmb8XEqax89fWhIg8prusrUK9yVxyp1n4oUiZdMJoMfK+YhJaCnoLnkAAAAAElFTkSuQmCC",T1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABtElEQVR4nO2ZSy8EQRDHfwf2YuNxdcYeBXvBF7CREB/G4+59JI74IBaJT0GcBOvGxeNGSSU1stnYZCZmegr9SyqZpKeru/pf3dNbC5G/Tw1YBU6BS+DFTJ+bwAowhmPqwBkgKU0DncIRvcAB8GETfAQOgQVTp89MnxeBI3tHrM8+0FN2EEPAuU3qFVgH+lP003c2gLc2dQYpUYkkle4ttbIyDtyYjwugQgkc2ARugeEf+NG+d+Zrj8DULb81nSZy8DdpafZuz8FIUkr3RF5smk89ooNQazud0mzstAwAT+Z7lACs2WB6xObNsfleJgBNG0y/CXmzZL5PCMC1DTZSYNpeEYBnG6xagO+q+dYxCie5K/1W/1/EQFIiUZGMxNQqY6EqwC7wkOEXX9HWArazXvV3HExcuthWlkBa1mkaP8y0KePvCMyIZJ1XDKRgJCriDImKOEOiIs6QqEgH81bn1RJno4R2yUuRpEab1HxDt0sMpIOGrZqu1lwJ7RI3uzMkKuIMiYo4Q6IizpB/q0jLOmgtyQuzNie9VKZm20FFUbqY/o2dGq2vajCJMh5MldAgvq39fgLrDI6q0s9yGAAAAABJRU5ErkJggg==",L1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB7UlEQVR4nO3YT6hNURTH8Y/nP+UlQoT0CgMGDKSkSCkpSSmlGChTQ6NXeiNTQwO9kjJRMjFgQErKSzJhQAyI/Mn//3/e0a316vS69/Z679x7zzntb+06nb322nuf3W+vtQ6JRCKR6BFZTZrabaSqZLXdyIDqMdBsI5+wX3XYg/etxD6K0+hTXqbhJP61EvtgrvMK+pWP/lhbFmsdbCX2/HE9xgblYR0eNpFBy1trFUbi3Rcc1Hv24WOs6cG4i6nt9TsHw7m+s5ip+0wPzY7GOi5i/mTiyHH8jv6bWKp7LMK1mPtPCHxKAXE7XoXNc2zReTbhacz5FruKiuwrcCfsfuKYznEY32Kue1hddIoyG2fG6WaW4pgRehjzfx5zO5lrHcH3GHMby02dJbiRO/GGNruSNG7Gsxj3BjtNnm14Gb5eYGu3s9/FuD6BW6UdjS//K3zcwrJepfHj7/kLmDeBcY04da6gOJUVWY8cwtfwcx9r2tiuxN2w/YGjZSus1uNR+HqH3U1sduB12DzBxrJWiAtwOfz9xakoCRqp94nQUqPvKhaWvdTtw1BON5eijdU7QwXXO1mna/a9+JDz/xkHqvrzYW2UBCPx3Amy2v5FqSpZ2kjJyNKJlIwsnUjJyGp7IlnFm9psJJFIJBK6zX+RmLvdeUFJ9AAAAABJRU5ErkJggg==",To=({error:e})=>l.jsx(yP,{children:l.jsx(vP,{style:{whiteSpace:"pre-line"},children:e})}),yP=f.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  border-radius: 8px;
  margin: 20px 0;
  background-color: ${e=>e.theme.secondaryBackground};
`,vP=f.p`
  font-size: 18px;
  font-weight: bold;
  color: #c62828; /* Use a suitable text color for error */
`,wP=()=>{Ue();const{t:e}=q(),t=ne();W(b=>b.user.isLoading);const n=W(b=>b.user.isSuccess),r=W(b=>b.user.error),[i,o]=S.useState(""),[s,a]=S.useState(""),[c,u]=S.useState(""),[d,p]=S.useState(""),h=S.useRef(null),g=S.useRef(null),y=b=>{if(b.preventDefault(),console.log("password before if",s),s===""||s.length<5){console.log("password in if",s),alert(e("Le mot de passe doit comporter au moins 5 caractères"));return}t(Hs({username:i,password:s,email:c}))},v=()=>{u(""),a("")};return S.useEffect(()=>{r&&(v(),h.current.focus())},[r]),l.jsxs(O1,{children:[r&&l.jsx(To,{error:r}),d&&l.jsx(To,{error:d}),n?l.jsx(l.Fragment,{children:l.jsxs("p",{children:["Registration successful ",l.jsx(Oe,{to:"/login",children:"Login"})]})}):l.jsxs(bP,{onSubmit:y,children:[" ",l.jsx("h2",{children:e("Inscription")}),l.jsxs(Zi,{children:[l.jsx("input",{type:"text",placeholder:e("Pseudonyme"),value:i,onChange:b=>o(b.target.value)}),l.jsx("img",{src:xP,alt:"userIcon"})]}),l.jsxs(Zi,{children:[l.jsx("input",{type:"email",placeholder:e("E-mail"),value:c,onChange:b=>u(b.target.value),ref:h}),l.jsx("img",{src:L1,alt:"emailIcon"})]}),l.jsxs(Zi,{children:[l.jsx("input",{type:"password",placeholder:e("Mot de passe"),value:s,onChange:b=>a(b.target.value),ref:g}),l.jsx("img",{src:T1,alt:"passwordIcon"})]}),l.jsx(P1,{type:"submit",children:e("Inscription")}),l.jsxs(Ep,{children:[e("Avez-vous déjà un compte?"),l.jsx(Yl,{to:"/login",children:e("Connexion")})]})]})]})},O1=f.div`
  margin: 5rem auto;
  width: 18rem;
  padding: 0.2rem 1rem;
  background-color: ${e=>e.theme.secondaryBackground};
  color: ${e=>e.theme.primaryText};
  box-shadow: ${e=>e.theme.formBoxShadow};

  text-align: center;

  h2 {
    font-size: 33px;
    font-weight: 600;
    margin-bottom: 35px;
    color: ${e=>e.theme.primaryText};
    justify-self: center;
  }
  @media (max-width: 420px) {
    margin: 1rem auto;
  }
`,bP=f.form``,P1=f.button`
  margin: 15px 0;
  width: 100%;
  height: 4rem;
  font-size: 18px;
  line-height: 50px;
  font-weight: 600;
  background: ${e=>e.theme.highlight4};
  border-radius: 25px;
  border: none;
  outline: none;
  cursor: pointer;
`,Zi=f.div`
  height: 3rem;

  width: 100%;
  display: flex;
  position: relative;
  &:nth-child(2) {
    /* outline: 2px solid blue; */
    margin-top: 2rem;
  }
  &:nth-child(3) {
    /* outline: 2px solid red; */
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  &:nth-child(4) {
    margin-bottom: 2rem;
  }
  input {
    height: 100%;
    width: 100%;
    padding-left: 3rem;
    outline: none;
    border: none;
    font-size: 18px;
    outline: 2px solid ${e=>e.theme.highlight4};

    border-radius: 25px;

    &:focus {
    }
    &::placeholder {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 4rem;
      pointer-events: none;
      font-size: 1rem;
    }
  }

  img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #595959;
    width: 1.3rem;
    padding-left: 1.2rem;
    line-height: 30px;
  }
`,Ep=f.div`
  margin: 10px 0;
  font-size: 1rem;
  color: ${e=>e.theme.primaryText};
`,Yl=f(Oe)`
  text-decoration: none;
  padding-left: 0.5rem;

  font-weight: bold;
  font-style: italic;
  position: relative;
  color: ${e=>e.theme.primaryText};
  text-decoration: none;
  &::after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 10px;
    width: 50%;
    height: 2px;
    background-color: ${e=>e.theme.primaryText};
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: calc(100% - 2px); /* Expand width to 100% on hover */
  }
`,SP=f(Yl)`
  font-weight: normal;
`,kP=[{title:"Grammaire",link:"/grammar/basic-grammar-lessons",subItems:[{title:"Sub-Item 1",link:"/sub-item-1"},{title:"Sub-Item 2",link:"/sub-item-2"}]},{title:"Vocabulaire",link:"/vocabulary/vocabulary-topics",subItems:[{title:"Entraîneur de cartes mémoire",link:"/vocabulary/flashcards"},{title:"Exercice d'articles",link:"/vocabulary/exercise-article"},{title:"Exercice de temps des verbes",link:"/vocabulary/verb-tense-exercise"},{title:"vocabulary/sentence-builder",link:"/vocabulary/exercise-article"}]},{title:"Livres",link:"/reading-zone/french-easy-reading"},{title:"Dictionnaire",link:"/dictionary"}],wg=()=>{const e=localStorage.getItem("grammerData");return e?JSON.parse(e):null},Qs=ae("grammer/fetchGrammer",async()=>{try{const t=(await le.get("/grammer/basic-grammer")).data;return localStorage.setItem("grammerData",JSON.stringify(t)),t}catch{throw Error("Failed to fetch grammer lessons")}}),Gs=ae("grammer/fetchAllAspectsData",async()=>{try{const t=(await le.get("/grammar/getAllAspects")).data;return localStorage.setItem("grammerData",JSON.stringify(t)),t}catch{throw Error("Failed to fetch grammer lessons")}}),qs=ae("grammer/fetchByAspect",async e=>{try{return(await le.get(`/grammar/${e}`)).data}catch{throw Error("Failed to fetch grammer lessons")}}),CP={quizData:[],allAspectsData:wg()||[],topicsByAspect:{},isLoading:!1,error:null,grammer:wg()||[]},AP=Pe({name:"grammer",initialState:CP,reducers:{},extraReducers:e=>{e.addCase(Qs.pending,t=>{t.isLoading=!0}).addCase(Qs.fulfilled,(t,n)=>{t.grammer=n.payload,t.isLoading=!1}).addCase(Qs.rejected,(t,n)=>{t.error=n.error.message}).addCase(qs.pending,t=>{t.isLoading=!0}).addCase(qs.fulfilled,(t,n)=>{t.topicsByAspect[n.meta.arg]=n.payload,t.isLoading=!1}).addCase(qs.rejected,(t,n)=>{t.error=n.error.message}).addCase(Gs.pending,t=>{t.isLoading=!0}).addCase(Gs.fulfilled,(t,n)=>{t.allAspectsData=n.payload,t.isLoading=!1}).addCase(Gs.rejected,(t,n)=>{t.error=n.error.message})}}),jP=AP.reducer,EP="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEZUlEQVR4nO2Z+W9UdRTFX1t3/UFjVGpKp53vPed+ZxortRgDitVAiIobAmJEZAlSjRSlRo0Yo8EFEcUlBEEFBOMWlxCMRv3rzEm+NWZC8pZ5nWrs/W2WzPuc97733GWybDEWYzFqCTO7tNFoXN1oNJaMjIw0xsbGgrs7gBbJ2Gq14O4jo6OjN4yPj1+Z/UtiQNAhhKUkR80sNJtNxBgpaDNrhxDG3P0mADcDWBZCuMXdl+t1CGFpu92+ZCHA+4eHh68RgO5qWXiStwK4LYSwIsa4IoRgk5OTF/eEfHBw8Ap3v7HZbA53C+/uK0neAeDOEMLKZrN5/bzC67iY2VDd8GY25e53k1ytnMmyrK9u9r4Y47U9gF9jZmtjjJPKr9roewlP8h6S9+r7yrX/yrFZ0wG/zsweIDnedcIuFLy7P0jyYV2/Kn9/UbfRhc1sJ4DdZvaMu+8lOevuz5nZFoFXgQfwiF6rSJaml8+XuPPL3H3TP+HN7KUQwn6Sr5F8PoRwVwX4DfrdlNSlYqBskWo2m8vdfUcnvLsfIPmORFSBJ7mZ5KOl2g8lbsUzf7ueQCe8ux8C8AHJZ8vCA3jMzB43s4nCApQ4VRNWgABeuQD8RwCOApguC0/yCXffUKjAKWG6dZsE9FYnPMnjJD9z9+1l4EluBbDNzK4rdHzqsEp339IJD+BzkqcBnAwhbC0Jv6NQXVA/X5fPA9hzAfizJL8xs9OCLArv7jtlALkCNIzUWaQA7O+EB/A9yR9JnhR0QfhdZrYxV4AmqTorLID7ABzqhHf3cwDOxxhPCDwPXkVS7+UK0Bg4D+3BejM73gnv7r8B+EN5UgB+Osa4O1eA+vG6exudcwCy1ffS0zgoizWzt0m+aWb78uBJqso/nStAx6dO+BCCnOZ1d/8QwBGS75M8nMS8qxwReB68iqDeyxWg7UHNXeWryYk+Ifmxjou7H5HFuvsBAE8WgZejqTEskgMjdcGrJyKpJP0UwLFUiefEHE6wheAB7NXv5grQ3qYOeAAzJE+paKn6SkiqB8ckQJAsAa9mUDy5AtT1dQsfY9xF8oyZnUn+f0qen+rBCXefqQC/r91uL8mKRMqBqmOgwM6amTz/awBfJTFfSgzJl6vAA3iq8LZCs0BF+M2pYP0gzwfwHclv54QAeKMi/AsAVmVFQ+s+bcxKHpv1AL4AcI7kzypYAP4Wkiy0EjzJ2Xa7fVVhAekpWIk7/5CchuSvAH4heX5OiJn9lFxoW8U7/6Kum5WNqampi7TuKzIGprb5TwC/qz2QEIlIx+dg6v8rwbv7zNDQ0OVZldCussoMW7Axy4UnqToSs25CvdFCwZvZ2qyG6Gu1WhO9hnf3TbWsFlMMqLD1EH7jfPxf0K+ZtEfHpj+br9DKxczurxs+xrin64QtWegmtTHrFp7krFyu0WhclvU60vZ6Ik1cZeH1+arSFXaeok9Lp5Qjq7U9ALDd3ac1BqaNglYo62QGqaus/W+kxViM/2P8Bcap0NYmk0C/AAAAAElFTkSuQmCC",TP=({allAspectsData:e})=>{const{t,i18n:n}=q();xi();const[r,i]=S.useState({}),o=a=>{switch(n.language){case"fr":return a.titleFr;case"ka":return a.titleGeo;case"en":return a.titleEng;default:return a.titleFr}},s=a=>{i(c=>({...c,[a]:!c[a]}))};return l.jsxs(R1,{children:[l.jsx(N1,{children:l.jsx(Lo,{to:"/grammar",children:t("Grammaire")})}),e&&e.map((a,c)=>{const{_id:u,titles:d,subtopics:p}=a,h=r[u];return l.jsxs(z1,{children:[l.jsxs(B1,{onClick:()=>s(u),children:[l.jsx(Lo,{to:`/grammar/${u}`,children:l.jsx("span",{children:t(u)})}),l.jsx(PP,{children:h?"▲":"▼"})]}),l.jsx($P,{show:h,children:d==null?void 0:d.map((g,y)=>l.jsxs(I1,{children:[l.jsx("img",{src:EP,alt:"ArrowRight"}),l.jsx(Ua,{to:`/grammar-basic/${p[y]}`,children:o(g)})]},y))})]},u)})]})},LP=({vocabularyAspects:e,toggleSubSection:t,isSubSectionOpen:n})=>{const{t:r}=q();return l.jsxs(R1,{children:[l.jsx(N1,{children:l.jsx(Lo,{to:"/vocabulary",children:r("Vocabulaire")})}),e&&(e==null?void 0:e.map((i,o)=>l.jsx(z1,{children:l.jsx(B1,{children:l.jsx(Lo,{to:`${i.link}`,children:l.jsx("span",{children:r(i.title)})})})},o)))]})},$1={fr:[{title:"Vocabulaire par thèmes",question:"Voulez-vous apprendre les bases de la vocabulaire ?",description:"Explorez les leçons fondamentales de vocabulaire pour construire une base solide.",link:"/vocabulary/vocabulary-topics"},{title:"Exercice d'articles",question:"Voulez-vous pratiquer les genres des mots français ?",description:"Entraînez-vous à choisir le genre correct des mots en français.",link:"/vocabulary/exercise-article"},{title:"Exercice de temps des verbes",question:"Voulez-vous pratiquer les temps des verbes en français ?",description:"Entraînez-vous à choisir la forme correcte des verbes en français.",link:"/vocabulary/verb-tense-exercise"},{title:"Flashcards",question:"Voulez-vous pratiquer avec des flashcards ?",description:"Utilisez des flashcards pour renforcer votre vocabulaire en français.",link:"/vocabulary/flashcards"},{title:"Construire des phrases",question:"Voulez-vous pratiquer la construction de phrases ?",description:"Entraînez-vous à construire des phrases en français.",link:"/vocabulary/sentence-builder"}],eng:[{title:"Vocabulary By Topics",question:"Do you want to learn the basics of vocabulary?",description:"Explore fundamental vocabulary lessons to build a strong foundation.",link:"/vocabulary/vocabulary-topics"},{title:"Article Exercise",question:"Do you want to practice French word genders?",description:"Practice choosing the correct gender for French words.",link:"/vocabulary/exercise-article"},{title:"Verb Tense Exercise",question:"Do you want to practice verb tenses in French?",description:"Practice choosing the correct verb tense forms in French.",link:"/vocabulary/verb-tense-exercise"},{title:"Flashcards",question:"Do you want to practice with flashcards?",description:"Use flashcards to reinforce your vocabulary in French.",link:"/vocabulary/flashcards"},{title:"Sentence Builder",question:"Do you want to practice sentence construction?",description:"Practice building sentences in French.",link:"/vocabulary/sentence-builder"}],ka:[{title:"ლექსიკის ტოპიკები",question:`გინდა გაიმდიდრო ლექსიკის მარაგი? 
მაშინ ეს განყოფილება შენთვისაა.`,description:"ამ განყოფილებაში დაგხვდება ლექსიკის ყველა აუცილებელი თემა.",link:"/vocabulary/vocabulary-topics"},{title:"არტიკლის სავარჯიშო",question:`გერევა არსებითი სახელების სქესი? 
მაშინ ეს განყოფილება შენთვისაა.`,description:"ამ სავარჯიშოს საშუალებას მოგცემს გამოცადო შენი ცოდნა..",link:"/vocabulary/exercise-article"},{title:"ზმნების დროები",question:`გინდა დაუფლო ზმნების სწორ ხმარებას სხვადასხვა დროში?
მაშინ ეს განყოფილება შენთვისაა.`,description:"ამ სავარჯიშოს მიზანია დაგეხმაროს ზმნის სწორი ფორმის შერჩევაში სხადასხვა დროში.",link:"/vocabulary/verb-tense-exercise"},{title:"შენახული სიტყვები",question:`გინდა კარგად ისწავლო შენახული სიტყვები?
მაშინ ეს განყოფილება შენთვისაა.`,description:"ამ განყოფილებაში დაგხვდება სხვადასხვა სავარჯიშო არჩეული სიტყვების კარგად სასწავლად.",link:"/vocabulary/flashcards"},{title:"წინადადების შედგენა",question:`გინდა ივარჯიშო წინადადების სწორად შედგენაში?
მაშინ ეს განყოფილება შენთვისაა`,description:"ამ სავარჯიშოში წინადადები არეულადაა მოცემული და შენი მიზანია სწორად დაალაგო ისინი.",link:"/vocabulary/sentence-builder"}]},OP=()=>{const e=ne(),{t,i18n:n}=q();n.language;const[r,i]=S.useState({}),o=W(a=>a.grammer.allAspectsData)||[];W(a=>a.grammer.isLoading),W(a=>a.grammer.error),S.useEffect(()=>{e(Gs())},[e]);const s=a=>r[a];return l.jsxs(l.Fragment,{children:[l.jsx(LP,{vocabularyAspects:$1[n.language],isSubSectionExpanded:r}),l.jsx(TP,{allAspectsData:o,isSubSectionOpen:s})]})},R1=f.div`
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
`,z1=f.div`
  /* margin-bottom: 20px; */
  border-bottom: 2px solid ${e=>e.theme.tertiaryText};
  padding-bottom: 1rem;
`,N1=f.h2``,Lo=f(Oe)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${e=>e.theme.primaryText};
  margin: 0.2rem;
  padding: 0.2rem;
`,PP=f.span`
  margin-left: auto;
  cursor: pointer;
`,$P=f.div`
  display: ${e=>e.show?"flex":"none"};
  flex-direction: column;
  justify-content: center;

  background-color: ${e=>e.theme.primaryBackground};
`,B1=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* border-bottom: 1px solid ${e=>e.theme.tertiaryText}; */
  padding: 0.3rem;
`,I1=f.li`
  display: flex;
  align-items: center;
  margin-left: 0.6rem;
  cursor: pointer;
  position: relative;
  padding: 0.4rem 0.4rem 0 0.4rem;
  max-width: 300px;

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
`,Ua=f(Lo)``,RP=({isDarkMode:e,t,toggleTheme:n,handleMenuClick:r})=>{var b,x;const i=ne(),[o,s]=S.useState(!1),a=W(m=>m.auth.isAuthenticated),c=W(m=>m.auth.auth)||{},u=(b=c.user)==null?void 0:b._id,d=(x=c.user)==null?void 0:x.username;S.useState(!1);const[p,h]=S.useState({}),g=({e:m,categoryIndex:w})=>{m.stopPropagation(),h(k=>({...k,[w]:!k[w]}))},y=()=>{s(!1)};S.useEffect(()=>(document.body.addEventListener("click",y),()=>{document.body.removeEventListener("click",y)}),[]);const v=m=>{m.stopPropagation(),i(qr(u))};return l.jsx(zP,{class:"content",children:l.jsxs(NP,{id:"menuToggle",onClick:m=>r(m),children:[l.jsx("input",{type:"checkbox",checked:o,onChange:()=>s(!o)}),l.jsx("span",{style:{background:e?"#ffffff":"#000000"}}),l.jsx("span",{style:{background:e?"#ffffff":"#000000"}}),l.jsx("span",{style:{background:e?"#ffffff":"#000000"}}),l.jsxs(BP,{children:[l.jsxs(FP,{children:[l.jsxs(DP,{children:[l.jsx(F1,{to:"/",children:"Francophoenix"}),l.jsx(HP,{children:l.jsx(A1,{toggleTheme:n,isDarkMode:e})})]}),l.jsx(j1,{}),l.jsx(MP,{children:l.jsx(_P,{children:a?l.jsx(UP,{children:l.jsxs(WP,{children:[l.jsx("img",{src:Hd,alt:"User Icon"}),d]})}):t("Pas connecté")})}),!a&&l.jsxs(l.Fragment,{children:[l.jsxs(bg,{children:[l.jsx("p",{children:t("Avez-vous déjà un compte?")}),l.jsx(Sg,{to:"/login",children:t("Connexion")})]}),l.jsxs(bg,{children:[" ",l.jsx("p",{children:t("Pas de compte?")}),l.jsxs(Sg,{to:"/register",children:[t("Inscrivez-vous")," "]})]})]})]}),l.jsx(l.Fragment,{children:kP.map((m,w)=>l.jsxs(VP,{children:[l.jsxs("div",{children:[l.jsx(Ua,{to:m.link,children:t(m.title)}),m.subItems&&m.subItems.length>0&&l.jsx(GP,{onClick:k=>g({e:k,categoryIndex:w}),children:p[w]?"▲":"▼"})]}),p[w]&&m.subItems&&m.subItems.length>0&&l.jsx("ul",{children:m.subItems.map((k,A)=>l.jsx(I1,{children:l.jsx(Ua,{to:k.link,children:t(k.title)})},A))})]},w))}),a&&l.jsx(QP,{children:l.jsx(jp,{handleLogout:v})}),l.jsx(IP,{})]})]})})},zP=f.div`
  display: flex;
  align-items: center;
`,NP=f.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 5%;
  left: 8%;
  /* color:red; */
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
  input {
    display: flex;
    width: 30px;
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
    margin-left: 0.5rem;
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
`,BP=f.ul`
  overflow-x: hidden;

  padding: 0;
  list-style-type: none;
  position: absolute;
  width: 50vw;
  height: 100vh;
  box-shadow: 0 0 10px #85888c;
  margin: -3rem 0 0 -50px;
  padding: 50px;
  padding-top: 5rem;
  background-color: ${e=>e.theme.primaryBackground};
  color: ${e=>e.theme.primaryText};

  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  /* outline: 1px solid red; */
  @media (max-width: 555px) {
    width: 70vw;
  }
`,IP=f.li`
  margin-top: 3rem;
  height: 1rem;
  background-color: ${e=>e.theme.highlight4};
`,FP=f.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${e=>e.theme.secondaryBackground};
  /* outline: 1px solid red; */
  padding: 1rem;
  margin-bottom: 3rem;
  width: 100%;
`;f.div`
  /* outline: 6px solid ${e=>e.theme.secondaryBackground};
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* outline: 2px solid blue; */
  /* margin: 0 auto; */
  /* width: 17rem;
  height: 3rem;
  margin-bottom: 1rem;
  padding: 0.4rem;
  background: ${e=>e.theme.tertiaryBackground};
  @media (max-width: 359px) {
    width: 12rem;
  } */
`;const DP=f.div`
  display: flex;
  align-items: center;
  @media (max-width: 300px) {
    width: 100%;
    flex-direction: column;
    margin: 0 auto;
    padding-left: 1rem;
  }
`,MP=f.div`
  max-width: 100%;
`,_P=f.div`
  padding: 1rem;
  margin: 1rem;
  max-width: 100%;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${e=>e.theme.primaryBackground};
`,UP=f.div`
  width: 100%;
  /* background: blue; */

  display: flex;
`,WP=f.div`
  display: flex;
  align-items: center;
  gap: 8px; /* Add some space between the image and the username */
  /* background: white; */
`,HP=f.div`
  width: 18rem;
  display: flex;
  /* outline: 1px solid ${e=>e.theme.tertiaryText}; */
  margin: 1rem 0;
`,bg=f(Ep)`
  display: flex;
  flex-direction: column;
  max-width: 25rem;
  margin-bottom: 0.5rem;
  margin-left: 1rem;
  background: ${e=>e.theme.primaryBackground};
  padding-bottom: 0.5rem;
  padding: 0.5rem;
`,Sg=f(Yl)`
  margin-right: 2rem;
  margin-left: auto;
`,VP=f.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${e=>e.theme.secondaryText};
    max-width: 27rem;
  }
  ul {
    display: flex;
    flex-direction: column;
  }
  img {
    width: 1.4rem;
    height: 1.4rem;
  }
  span {
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: transparent;
    margin-left: auto;
  }
`;f(Ua)`
  margin-left: -3rem;
  border: 1px solid red;
`;const QP=f.div`
  margin-top: 2rem;
`,GP=f.span`
  /* padding: 1rem; */
`,qP=({toggleTheme:e,isDarkMode:t})=>{const{t:n,i18n:r}=q(),i=r.language==="ka",o=U5();S.useState(!1);const s=a=>{a.stopPropagation()};return l.jsxs(KP,{isVisible:o,children:[l.jsx(RP,{isDarkMode:t,toggleTheme:e,t:n,handleMenuClick:s}),l.jsx(JP,{children:l.jsx(F1,{to:"/",children:"Home"})}),l.jsxs(YP,{children:[l.jsx(us,{to:"/grammar/basic-grammar-lessons",isGeorgian:i,children:n("Grammaire")}),l.jsx(us,{to:"/vocabulary/vocabulary-topics",isGeorgian:i,children:n("Vocabulaire")}),l.jsx(us,{to:"/reading-zone/french-easy-reading",isGeorgian:i,children:n("Livres")}),l.jsx(us,{to:"/dictionary",isGeorgian:i,children:n("Dictionnaire")})]}),l.jsxs(XP,{children:[l.jsx(A1,{toggleTheme:e,isDarkMode:t}),l.jsx(oP,{})]})]})},KP=f.div`
  box-sizing: border-box;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  width: 100%;
  min-height: 4rem;
  align-items: center;
  justify-content: space-between;
  background-color: ${e=>e.isVisible?e.theme.tertiaryBackground:"transparent"};
  /* color: ${e=>e.theme.primaryBackground}; */
  transition: background-color 0.3s ease-in-out;
  border-bottom: 3px solid ${e=>e.theme.primaryText};
  padding-left: 0.4rem;
  padding-right: 0.4rem;
`,YP=f.ul`
  display: flex;
  overflow: hidden;
  /* gap: 0.6rem; */
  padding: 0;
  max-width: 50%;
  flex: 1;

  @media (min-width: 992px) and (max-width: 1025) {
    & > :nth-child(4) {
      display: none;
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    & > :nth-child(4) {
      display: none;
    }
    & > :nth-child(3) {
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
    & > :nth-child(1) {
      display: none;
    }
    & > :nth-child(2) {
      display: none;
    }
  }
  @media (max-width: 576px) {
    display: none;
  }
`,us=f(Oe)`
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
    animation: ${kL} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
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
`,JP=f.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  margin-left: 1rem;

  @media (min-width: 576px) and (max-width: 767px) {
  }

  @media (max-width: 767px) {
  }
`,F1=f(Oe)`
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
    animation: ${CL} 5s linear infinite;
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
    font-size: 1.35rem;
    margin: 0;
    padding: 0;
    background-size: 120%;

    font-weight: 400;
  }
  @media (max-width: 320px) {
    margin-right: 3rem;
  }
`;f.div`
  /* flex: 1; */
  /* border: 2px solid red; */
`;const XP=f.div`
  max-width: 100%;
  margin-right: 0.5rem;
  padding: 0.2rem 0.5rem;
  display: flex;
  gap: 1rem;
  @media (min-width: 394px) and (max-width: 415px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border: 1px solid red; */
    gap: 1rem;
  }

  @media (max-width: 393px) {
    gap: 0.2rem;

    & > :nth-child() {
      display: none;
    }
  }
  @media (max-width: 361px) {
    gap: 0.2rem;

    & > :nth-child() {
      display: none;
    }
    & > :nth-child(1) {
      display: none;
    }
    & > :nth-child(4) {
      display: none;
    }
  }
`,ZP="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABRUlEQVR4nO2ZoU7EQBRFD/hdgwCDAwMOFHxCPRaJJeEvwCGxSCySZBMCKLD8AAIMYpFNgEc2GZJJ0zTvLZ2STe5JRnT6el9m5qQVBbH4TAArPO6GWIgNNIpTupFpIUF0Ik5MagWRWk5MagWRWk5MagWRWk5MagWRWk5MagWRWk5MagWRWk5MagWRWk5MagWRWk5MagWRWk5MagWRWk5MahXcsQp4TqMqkP8nPI02geuWH5w3wHYP+b3Q1WgMnAF1qpkCJ2lM01ydasZz5PdKW6Ml4BB4S/e+gUtgNatZAc6Bz1TzDhwDy478IjQb7QIP2fwjsNfx/A5wn9U/Afsd+cX4bbQGXABf6foVOGrZ4TZmJ3gAvGQneAWs/8dCPjLnT4HRHFmj9GzdyDQGoPkW2uohcyOdiA25kNvgdyFClbJnPQSLzA+xZBThStT1FQAAAABJRU5ErkJggg==",e$=f.div`
  width: 20.3rem;
  height: 41.9rem;
  margin: 1.9rem 0;
  border-radius: 1rem;
  perspective: 31.3rem;
  overflow: hidden;
  color: ${e=>e.theme.primaryText};

  background-color: ${e=>e.theme.tertiaryBackground};
  box-shadow: 2.3rem 2.3rem 3.1rem 0.9rem
    ${e=>e.theme.tertiaryBackground};
  outline: 1px solid ${e=>e.theme.highlight1};
`,t$=f.div`
  position: fixed;
  top: 0rem;
  right: -16rem;
  width: 90%;
  padding: 1rem;

  margin-left: auto;
  z-index: 6;
  img {
    width: 2rem;
    cursor: pointer;
  }
`,D1=f.div`
  height: 28rem;
  padding: 3rem;
  transition: transform 0.7s ease-in-out;
  background: ${e=>e.theme.primaryBackground};
  transform: translateY(
    ${e=>e.showDescription?"-9.8rem":"0"}
  );
`,n$=f.div`
  position: relative;
  height: 23rem;
  width: 40rem;
  left: -52.5%;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  background: ${e=>e.theme.secondaryBackground};
  transform-style: preserve-3d;
  transform-origin: 50% 60%;
  transition: transform 0.7s ease-in-out;
  z-index: 4;
  &:hover,
  &.double-tap {
    transform: rotateX(75deg) translateZ(3px) scale(0.75);
    ~ ${D1} {
      transform: translateY(-9.8rem);
    }
  }
`,r$=f.img`
  width: 10.5rem;
  background-color: black;
  position: absolute;
  top: 3rem;
  left: 250px;
  z-index: 5;
  transform: translateZ(28.5px);
  border-radius: 1rem 1rem 0 0;
  object-fit: cover;
`,i$=f.img`
  position: absolute;
  border-radius: 4rem;
  top: 300px;
  left: 222px;
  transform: translateY(-15px) translateX(0px) translateZ(15px) rotateX(104deg);
`,o$=f.h2`
  font-family: "Quicksand", sans-serif;
`,s$=f.h4`
  font-family: "Open Sans", sans-serif;
  font-style: italic;
  margin-left: 2rem;
`,M1=({books:e,description:t})=>{const[n,r]=S.useState(!1),i=()=>{r(!0),setTimeout(()=>{r(!1)},500)};return l.jsxs(e$,{children:[l.jsx(t$,{children:l.jsx("img",{src:ZP,alt:"BookmarkIcon"})}),l.jsxs(n$,{onTouchStart:()=>{n?i():(r(!0),setTimeout(()=>{r(!1)},500))},children:[l.jsx(r$,{src:e.poster,alt:"book-top"}),l.jsx(i$,{src:"https://raw.githubusercontent.com/atomic-variable/images-repo/e37f432405904a280858e5437ce1960753bc78a3/book-side.svg",alt:"book-side"})]}),l.jsxs(D1,{showDescription:n,children:[l.jsx(o$,{children:e.title}),l.jsxs(s$,{children:["by ",e.author]}),l.jsx("p",{children:t})]})]})},a$=({onChange:e,selectedLevel:t})=>{const{t:n}=q(),r=["Tous","A1","A2","B1","B2","C1"];return l.jsxs(l$,{children:[l.jsxs(c$,{htmlFor:"levelDropdown",children:[n("Choisir le niveau"),":"]}),l.jsx(u$,{id:"levelDropdown",value:t,onChange:e,children:r.map(i=>l.jsx(d$,{value:i,children:n(i)},i))})]})},l$=f.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 92%;
  /* gap: 1rem; */
  /* margin: 0 1rem; */

  /* outline: 1px solid black; */
`,c$=f.label`
  text-align: center;
  width: auto;

  padding: 0.25rem 0.5rem;
  /* font-size: 1.2rem; */
  /* outline: 1px solid blue; */
`,u$=f.select`
  width: 100%;
  min-width: 5rem;
  max-width: 10rem;
  border: 1px solid ${e=>e.theme.secondaryText};
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;
  /* outline: 1px solid red; */

  background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
`,d$=f.option`
  font-size: 22px;
  color: #000;
  max-height: 245px;
  margin: 0;
  padding: 0;

  padding: 16px 30px 18px;
  margin: 0;
  border-bottom: 1px solid #e5e5e5;
  -webkit-transition: all 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  -o-transition: all 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  transition: all 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  line-height: 20px;
`,f$=`Découvrez les aventures d’Alex Leroc, un journaliste d’investigation français qui travaille à Bruxelles et qui vit uniquement pour son travail.
Résumé:
Le festival de Cannes rassemble, comme chaque année, les stars du cinéma et toute la presse. Naturellement, Alex Leroc y va. C’est le printemps, il fait beau sur la Côte d’Azur. Les conditions sont idéales pour la grande fête du cinéma. Alex s’intéresse à un acteur parisien et sa petite amie top modèle, un couple apparemment parfait`,kg=()=>{Ue();const e=ne(),t=W(a=>a.books.books)||[],n=W(a=>a.books.isLoading),[r,i]=S.useState(null);S.useEffect(()=>{e(Yi())},[e]);const o=a=>{const c=a.target.value==="Tous"?null:a.target.value;i(c)},s=r?t.filter(a=>a.level===r):t;return n?l.jsx(Be,{}):l.jsxs(p$,{children:[l.jsx(h$,{children:"Our Best Books"}),l.jsx(a$,{onChange:o,selectedLevel:r}),l.jsx(m$,{children:s.map(a=>l.jsx(g$,{children:l.jsx(x$,{to:`/reading-zone/french-easy-reading/${a._id}`,children:l.jsx(M1,{books:a,description:f$})})},a._id))})]})},p$=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  overflow-x: hidden;
  /* outline: 1px solid red; */
`,h$=f.h2`
  font-weight: bold;
  overflow-x: hidden;
  margin-bottom: 10px;
`,m$=f.ul`
  display: flex;
  /* outline: 1px solid blue; */
  overflow-x: hidden;

  max-width: 100%;

  flex-wrap: wrap; //when i comment this line then all books are in one line horizontally. if i add this line then one by one vertically. why?
  list-style: none;
  padding: 0;
`,g$=f.li`
  font-size: 18px;
  margin-bottom: 5px;
  overflow-x: hidden;
  /* width: 100%; */
  /* outline: 1px solid yellow; */
  /* margin: 0 1rem; */
`,x$=f(Oe)`
  overflow-x: hidden;
  text-decoration: none;
  /* outline: 1px solid green; */
  color: black;
`,y$=f.div`
  padding: 20px;
`,v$=f.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`,w$=f.ul`
  list-style: none;
  padding: 0;
`,ou=f.li`
  font-size: 18px;
  margin-bottom: 5px;
`,b$=()=>l.jsxs(y$,{children:[l.jsx(v$,{children:"A1-A2 Level Books"}),l.jsxs(w$,{children:[l.jsx(ou,{children:"Book 1 for A1-A2 Level"}),l.jsx(ou,{children:"Book 2 for A1-A2 Level"}),l.jsx(ou,{children:"Book 3 for A1-A2 Level"})]})]}),S$=f.div`
  padding: 20px;
`,k$=f.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`,C$=f.ul`
  list-style: none;
  padding: 0;
`,su=f.li`
  font-size: 18px;
  margin-bottom: 5px;
`,A$=()=>l.jsxs(S$,{children:[l.jsx(k$,{children:"A1-A2 Level Books"}),l.jsxs(C$,{children:[l.jsx(su,{children:"Book 1 for A1-A2 Level"}),l.jsx(su,{children:"Book 2 for A1-A2 Level"}),l.jsx(su,{children:"Book 3 for A1-A2 Level"})]})]});f.div`
  display: inline;
  position: relative;
`;f.div`
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
`;f.div`
  display: inline-block;
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
`;const Cg=({selectedChapter:e,totalChapters:t,onPrevious:n,onNext:r})=>{const{t:i}=q();return l.jsxs(j$,{children:[l.jsx(Ag,{onClick:n,disabled:e===0,children:i("Chapitre précédent")}),l.jsx(Ag,{onClick:r,disabled:e===t-1,children:i("Chapitre suivant")})]})},j$=f.div`
  display: flex;
  /* outline: 1px solid red; */
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  gap: 1rem;
  max-width: 90%;
`,Ag=f.button`
  padding: 0.4rem 0.8rem;
  font-size: 1rem;
  background-color: ${e=>e.theme.highlight4};
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:disabled {
    background-color: #ccc;
    color: ${e=>e.theme.tertiaryText};

    cursor: not-allowed;
  }
`;/*
* React Tooltip
* {@link https://github.com/ReactTooltip/react-tooltip}
* @copyright ReactTooltip Team
* @license MIT
*/const E$="react-tooltip-core-styles",T$="react-tooltip-base-styles",jg={core:!1,base:!1};function Eg({css:e,id:t=T$,type:n="base",ref:r}){var i,o;if(!e||typeof document>"u"||jg[n]||n==="core"&&typeof process<"u"&&(!((i=process==null?void 0:process.env)===null||i===void 0)&&i.REACT_TOOLTIP_DISABLE_CORE_STYLES)||n!=="base"&&typeof process<"u"&&(!((o=process==null?void 0:process.env)===null||o===void 0)&&o.REACT_TOOLTIP_DISABLE_BASE_STYLES))return;n==="core"&&(t=E$),r||(r={});const{insertAt:s}=r;if(document.getElementById(t))return void console.warn(`[react-tooltip] Element with id '${t}' already exists. Call \`removeStyle()\` first`);const a=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.id=t,c.type="text/css",s==="top"&&a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c),c.styleSheet?c.styleSheet.cssText=e:c.appendChild(document.createTextNode(e)),jg[n]=!0}const L$={anchorRefs:new Set,activeAnchor:{current:null},attach:()=>{},detach:()=>{},setActiveAnchor:()=>{}};S.createContext({getTooltipData:()=>L$});typeof window<"u"&&window.addEventListener("react-tooltip-inject-styles",e=>{e.detail.disableCore||Eg({css:":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9}.core-styles-module_tooltip__3vRRp{visibility:hidden;position:absolute;top:0;left:0;pointer-events:none;opacity:0;transition:opacity 0.3s ease-out;will-change:opacity,visibility}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{visibility:visible;opacity:var(--rt-opacity)}",type:"core"}),e.detail.disableBase||Eg({css:`
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`,type:"base"})});const _1=()=>{xi();const{verb:e}=_n(),{handleListen:t,isActiveStates:n}=_e(),r=gr(),o=new URLSearchParams(r.search).get("conjugated"),s=ne(),a=W(v=>v.quizData.selectedVerbDetails)||[],c=W(v=>v.quizData.isLoading);W(v=>v.quizData.error),S.useEffect(()=>{s(zs(e))},[s]);const{verb:u,verbEng:d,verbGeo:p,forms:h}=a,{i18n:g}=q(),y=g.language==="ka";return c?l.jsx(Be,{}):l.jsxs(O$,{children:[l.jsxs(P$,{children:[l.jsx("h1",{children:(u==null?void 0:u.charAt(0).toUpperCase())+(u==null?void 0:u.slice(1))}),l.jsx("h3",{children:y?p:d})]}),l.jsx($$,{children:h&&(Object==null?void 0:Object.entries(h).map(([v,b])=>l.jsxs(R$,{children:[l.jsx("h2",{children:v.replace(/([A-Z])/g," $1").replace(/^./,x=>x.toUpperCase())}),l.jsx(z$,{children:l.jsx("ul",{children:b==null?void 0:b.map((x,m)=>l.jsxs("li",{children:[l.jsxs(I$,{highlight:x==null?void 0:x.french.includes(o),children:[l.jsx(N$,{children:x==null?void 0:x.french})," ",l.jsx(Kl,{onClick:t(x==null?void 0:x.french),isActive:n[m],children:l.jsx(nt,{})})]}),l.jsx(B$,{children:y?x==null?void 0:x.georgian:x==null?void 0:x.english})]},m))})})]},v)))})]})},O$=f.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  /* outline: 1px solid yellow; */
  height: auto;
`,P$=f.div`
  margin-bottom: 1rem;
  /* background-color: ${e=>e.theme.tertiaryBackground}; */
  h1 {
    text-align: center;
    &:before {
      content: ${e=>e.theme.background==="#000000"?'"🔸"':'"🔹"'};
    }
  }
`,$$=f.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: space-between;
  width: 100%;
`,R$=f.div`
  margin-bottom: 1rem;
  outline: 2px solid ${e=>e.theme.secondaryText};
  background-color: ${e=>e.theme.secondaryBackground};
  margin: 1rem;
  width: 100%;

  h2 {
    background-color: ${e=>e.theme.primaryBackground};
    padding: 1rem;
  }
`,z$=f.div`
  /* margin: 1rem; */
  ul {
    list-style: none;
    li {
      width: 90%;
      margin-bottom: 1rem;
      border-bottom: 1px solid ${e=>e.theme.primaryText};
    }
  }
`,N$=f.p`
  margin-bottom: 1rem;

  &:before {
    content: ${e=>e.theme.background==="#000000"?'"🔸"':'"🔹"'};
  }
`,B$=f.span`
  margin-left: 2rem;
  color: ${e=>e.theme.secondaryText};
  padding: 1rem;
`,I$=f.div`
  background: ${e=>e.highlight?e.theme.highlight2:"transparent"};

  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${e=>e.theme.highlight1};
  padding-top: 0.4rem;
`,U1=({tooltipContent:e,index:t,conjugated:n,id:r})=>{const{t:i,i18n:o}=q(),{definition:s,english:a,georgian:c,french:u}=e;console.log({definition:s,english:a,georgian:c,french:u});const{handleListen:d,isActiveStates:p}=_e(),[h,g]=S.useState(!1);return l.jsxs(F$,{children:[l.jsxs(D$,{children:[l.jsx(_$,{onClick:d(u),children:l.jsx(nt,{isActive:p[t]})}),l.jsx(H$,{to:`/verbs/${u}?conjugated=${n}`,children:l.jsx(W1,{children:u})})]}),l.jsx(M$,{children:o.language==="ka"?c:a}),l.jsxs(U$,{children:[l.jsx("span",{children:"Add to"}),l.jsx(Mo,{word:u,secondLanguage:o.language==="ka"?c:a,definition:s})]}),h&&l.jsx(W$,{children:l.jsx(_1,{})})]})},F$=f.span`
  max-width: 100%;

  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
  background-color: ${e=>e.theme.secondaryBackground};
  color: ${e=>e.theme.primaryText};
  border-radius: 8px;
  padding-right: 1rem;
  height: 8rem;

  /* border: 1px solid red; */
`,D$=f.span`
  /* margin-top: 1rem; */
  padding: 0.2rem 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  /* outline: 1px solid red; */
`,W1=f.span`
  font-size: ${e=>e.theme.smallMedium};
  font-weight: bold;
  color: ${e=>e.theme.primaryText};
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
`,M$=f(W1)`
  font-style: italic;
  font-weight: normal;
  font-size: ${e=>e.theme.small};
  cursor: auto;
`,_$=f.span`
  margin-left: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`,U$=f.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  padding: 0.2rem 0.4rem;
  font-size: 0.8rem;
  background-color: ${e=>e.theme.primaryText};
  color: ${e=>e.theme.primaryBackground};
`,W$=f.div`
  position: absolute;
  top: -1000%;
  left: 40%;
  width: 350px;
  height: 400px;
  overflow-y: scroll;
  /* background-color: red; */

  z-index: 999;
`,H$=f(Oe)`
  text-decoration: none;
  /* margin-top: 1rem; */
  width: 100%;
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  color: ${e=>e.theme.primaryBackground};
`,H1=({uniqueVerbs:e})=>{const{t}=q(),n=r=>{const o=`https://conjugaison.bescherelle.com/verbes/${r.replace(/\s+/g,"-")}`;window.open(o,"_blank")};return l.jsxs(V$,{children:[l.jsx("h3",{children:t("Verbes utilisés dans le texte")}),e.map((r,i)=>l.jsx("li",{children:l.jsx("button",{onClick:()=>n(r),children:r})},i))]})},V$=f.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  height: 170px;
  overflow-y: scroll;
  margin: 0;
  margin-bottom: 1rem;
  margin-top: 1rem;

  padding: 0;
  border-bottom: 2px solid ${e=>e.theme.highlight3};
  background-color: ${e=>e.theme.secondaryBackground};

  max-width: 90%;
  h3 {
    margin: 0 auto;
    width: 100%;
  }
  li {
    display: flex;
    text-decoration: none;
    padding: 0;
    margin: 0.5rem;
    flex-wrap: wrap;

    button {
      text-decoration: none;
      border-radius: 4px;
      padding: 0.2rem;
      margin: 0;
      width: auto;
      background-color: ${e=>e.theme.primaryText};
      color: ${e=>e.theme.secondaryBackground};
      cursor: pointer;
      font-size: ${e=>e.theme.small};
      &:hover {
        background-color: ${e=>e.theme.secondaryBackground};
        color: ${e=>e.theme.primaryText};
      }
    }
  }
`,Q$=f.div`
  overflow-x: hidden; /* Hide horizontal overflow */
`,G$=({vocabularyTranslations:e})=>{const{handleListen:t,isActiveStates:n}=_e();return l.jsx(Q$,{children:Object.entries(e).map(([r,i],o)=>l.jsxs(q$,{children:[l.jsxs(K$,{children:[l.jsx(X$,{children:o+1}),l.jsx(Y$,{children:r.replace(/\([^)]*\)/,"").trim()}),l.jsx(J$,{children:i})]}),l.jsxs(eR,{children:[l.jsx(Z$,{onClick:t(r),children:l.jsx(nt,{isActive:n[o]})}),l.jsx(Mo,{word:r,definition:"",secondLanguage:i})]})]},o))})},q$=f.span`
  background-color: ${e=>e.theme.primaryBackground};
  color: ${e=>e.theme.text};
  display: flex;
  /* align-items: center; */
  border-radius: 12px;
  font-style: oblique;
  box-sizing: border-box;
  padding: 0.4rem 0;
  padding-left: 0.1rem;
  margin-bottom: 0.4rem;
  border-bottom: 2px solid ${e=>e.theme.highlight3};
  margin: 0.4rem 0;
  @media (max-width: 415px) {
    flex-direction: column;
  }
`,K$=f.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  /* justify-content: space-around; */
`,Y$=f.span`
  font-size: 1rem;
  font-weight: bold;
  margin-right: 0.4rem;
  /* outline: 1px solid red; */
  display: flex;
  align-items: center;
  /* width: 35%; */
  &::after {
    content: " :";
  }
`,J$=f.span`
  font-size: 0.9rem;
  /* height: 2rem; */
  font-weight: 400;
  color: ${e=>e.theme.secondaryText};

  display: flex;
  &::after {
    content: "";
  }
  @media (max-width: 415px) {
    overflow-x: scroll;
  }
`,X$=f.span`
  color: ${e=>e.theme.secondartText};
  font-size: 1rem;
  /* margin-right: 0.6rem; */
  margin-left: 0.4rem;
  width: 1.6rem;
  &::after {
    content: " .";
  }
`,Z$=f.span``,eR=f.span`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-direction: row;
`,tR={french:"Verb pas trouver",english:"Verb is missing",georgian:"ზმნა ვერ მოიძებნა",definition:"definition pas trouver.",part_of_speech:"v"},nR=()=>{var M,I,_,$;const{bookId:e}=_n(),t=ne(),[n,r]=S.useState(!1),[i,o]=S.useState(""),[s,a]=S.useState(null),{i18n:c}=q(),u=c.language==="ka",d=W(L=>L.books.selectedBook)||[],p=W(L=>L.books.isLoading),{chapters:h}=d||[],[g,y]=S.useState(0),[v,b]=S.useState(""),x=h&&h[g].chapterVocabulary,m=d&&(d==null?void 0:d.verbs),w=d&&(d==null?void 0:d.chapters)&&(d==null?void 0:d.chapters[g].verbFormMapping),k={};for(const L in w)if(w.hasOwnProperty(L)){const F=L,N=w[L],V=m.find(G=>G.french===N);V&&(k[F]=V)}const A={};x&&(x==null||x.forEach(L=>{A[L.french]=u?L.georgian:L.english}));const C=L=>L.replace(/[^a-zA-Z0-9]/g,"").toLowerCase(),j=L=>{b(F=>F===L?"":L)};if(S.useEffect(()=>{t(Rs(e))},[t,e]),p)return l.jsx(Be,{});if(d.lengt===0)return l.jsx(Be,{});if(!d)return l.jsx("p",{children:"Book not found."});const T=d&&(d==null?void 0:d.chapters)&&(d==null?void 0:d.chapters[g].textVerbs),O=w&&Object.values(w)||[],P=[...new Set(O)],E=L=>L.replace(/—/g,`
-`),z=L=>A.hasOwnProperty(L),B=h&&((I=(M=h[g])==null?void 0:M.text)==null?void 0:I.split(" "));return l.jsxs(rR,{children:[l.jsx("h2",{children:d==null?void 0:d.title}),l.jsx(oR,{children:d.author}),l.jsx(Cg,{selectedChapter:g,totalChapters:(_=d==null?void 0:d.chapters)==null?void 0:_.length,onPrevious:()=>y(g-1),onNext:()=>y(g+1)}),l.jsx(H1,{uniqueVerbs:P}),d&&d.chapters&&d.chapters[g]&&l.jsxs(iR,{children:[l.jsx("h2",{children:E(d.chapters[g].chapterTitle)}),l.jsx("div",{children:B==null?void 0:B.map((L,F)=>{const N=C(L),V=A[N],G=z(N),ge=T.includes(N);ge&&w[C];const be=ge?k[N]:"",Dt=pn=>{if(ge){r(!0),a(pn);const Yt=B[pn],Si=C(Yt),xr=w[Si];o(xr)}},Ye=()=>{ge&&(r(!1),o(""))};let rt=null;return G?rt=l.jsx("b",{children:L}):rt=l.jsxs(dR,{className:F===0?"first":"",onMouseEnter:()=>Dt(F),onMouseLeave:Ye,children:[L,l.jsx(cR,{children:n&&s===F&&l.jsx(U1,{id:`verb-tooltip-${F}`,tooltipContent:be||tR,conjugated:L,index:F})})]},F),l.jsx(sR,{children:ge?l.jsx(aR,{content:V,handleWordClick:j,wordElement:rt,children:rt}):l.jsx("span",{className:F===0?" first":"",children:G?l.jsx(lR,{children:L}):l.jsxs("span",{children:[" ",L]})},F)},F)})})]},g),l.jsxs(uR,{children:[l.jsx(fR,{children:l.jsx(G$,{vocabularyTranslations:A})}),l.jsx(Cg,{selectedChapter:g,totalChapters:($=d==null?void 0:d.chapters)==null?void 0:$.length,onPrevious:()=>y(g-1),onNext:()=>y(g+1)})]})]})},rR=f.div`
  background-color: ${e=>e.theme.primaryBackground};
  display: flex;

  flex-direction: column;
  align-items: center;
  /* padding: 2rem; */
  max-width: 95%;
  /* outline: 1px solid red; */
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 0.4rem;
  margin: 0;
  margin-top: 3rem;
  /* margin: 0 auto; */
  span {
    &.first {
      margin-left: 1rem;
      font-size: ${e=>e.theme.medium};
      font-weight: bold;
    }
  }
`,iR=f.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  max-width: 100%;
  padding: 0.4rem;
  /* margin-right: 0.2rem; */
  /* outline: 2px solid violet; */
  overflow-x: hidden;
  /* margin: 0 0.1rem; */
`,oR=f.span`
  font-style: italic;
  position: relative;
  /* outline: 1px solid green; */

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
`,sR=f.span`
  white-space: pre-line;
  line-height: 2;
  max-width: 100%;
  font-size: 1.1rem;
  letter-spacing: 1px;

  font-family: "Palatino", sans-serif;
  /* outline: 1px solid green; */
`;f.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  outline: 1px solid black;

  /* gap: 1rem; */
  max-width: 90%;
`;const aR=f.span`
  margin: 0 0.3rem;
  padding: 0.2rem 0.4rem;
  /* border: 1px solid red; */
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  @media (max-width: 392px) {
    padding: 0.1rem;
  }
`,lR=f.span`
  /* border: 1px solid grey; */
  font-weight: bold;
  margin-left: 0.2rem;
  /* background: yellow; */
`,cR=f.span`
  position: absolute;
  width: 180px;

  /* outline: 1px solid blue; */
  background-color: ${e=>e.theme.highlight3};
  top: -480%;
  left: -30%;
  /* display: flex; */
  text-align: center;
  border-radius: 8px;
`,uR=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`,dR=f.span`
  background-color: ${e=>e.theme.highlight2};
  /* text-decoration: underline; */
  position: relative;
  padding: 0.2rem 0.4rem;
  margin-top: 1rem;
`,fR=f.span`
  overflow-x: hidden; /* Hide horizontal overflow */
  box-sizing: border-box;
  max-width: 100%;
  /* border: 1px solid red; */

  display: flex;
  align-items: flex-start;
  align-self: flex-start;
  margin-right: auto;
  flex-direction: column;
  /* align-items: center; */
`,pR=(e,t)=>{const n=[],r=new Set,i=o=>Math.floor(Math.random()*t.length);for(;n.length<e.length;){const o=i();if(r.has(o))continue;const s=e[o],c=t[o],u=[];for(;u.length<3;){const h=i(),g=t[h];!u.includes(g)&&g!==c&&u.push(g)}const d=[c,...u].sort(()=>Math.random()-.5),p={question:s,options:d,answer:c};n.push(p),r.add(o)}return n},V1=({onClose:e,isQuizFinished:t,isAllCorrect:n,Restart:r,incorrectlyAnsweredQuestions:i})=>{const{t:o}=q(),s=()=>{e(),window.scrollTo({top:0,behavior:"smooth"})};return l.jsx(hR,{children:t&&l.jsxs(mR,{children:[n?l.jsx(Tg,{children:o("Félicitations! Vous avez répondu correctement à tous.")}):l.jsxs(Tg,{children:[o("Toutes les réponses ne sont pas correctes. Réessayer!"),l.jsx(yR,{children:i.map(a=>l.jsx("li",{children:a.question}))})]}),l.jsxs(xR,{children:[l.jsx(e1,{onClick:s,children:o("Réviser le vocabulaire")}),l.jsx(gR,{onClick:e,isAllCorrect:n,children:n?o("Fermer"):r})]})]})})},hR=f.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: ${e=>e.theme.tertiaryBackground} 0.5; */

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`,mR=f.div`
  display: flex;
  flex-direction: column;
  background-color: ${e=>e.theme.secondaryBackground};
  color: ${e=>e.theme.primaryText};

  width: 280px;
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
  @media (max-width: 361px) {
    width: 200px;
    align-self: center;
  }
`,Tg=f.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: ${e=>e.theme.primaryText};
`,gR=f.div`
  cursor: pointer;
  padding: 1rem;
  width: 12rem;
  text-align: center;
  font-size: ${e=>e.theme.large};
  border-radius: 8px;
  font-weight: bold;
  background-color: ${e=>e.isAllCorrect?e.theme.primaryText:"transparent"};
  color: ${e=>e.theme.primaryBackground};
  &:hover {
    background-color: ${e=>e.isAllCorrect?"white":"transparent"};
    color: ${e=>e.isAllCorrect?"#0055a4":"#white"};
    border: ${e=>e.isAllCorrect?"2px solid #0055a4":""};
  }
`,xR=f.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  gap: 1rem;
`,yR=f.div`
  width: 90%;
  height: 12rem;
  border: 1px solid ${e=>e.theme.primaryText};
  background-color: ${e=>e.theme.tertiaryBackground};
  margin: 0 auto;
  border-radius: 4px;
  overflow-x: scroll;
  padding: 0.4rem;
  margin-top: 1rem;
  li {
    padding: 0.4rem;
  }
`,Q1=f.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Adjust the opacity as needed */
  z-index: 9998; /* Make sure it's behind the modal (9999) */
`,vR=({initialTime:e})=>{const[t,n]=S.useState(e);return S.useEffect(()=>{const r=setInterval(()=>{n(i=>i>0?i-1:e)},1e3);return()=>{clearInterval(r)}},[e]),l.jsx("div",{children:t})},G1=({secondLanguage:e,wordsInTargetLanguage:t})=>{const{t:n,i18n:r}=q();r.language;const{handleListen:i,isActiveStates:o}=_e(),s=localStorage.getItem("targetLanguageSelected");localStorage.getItem("nativeLanguageSelected");const[a,c]=S.useState(!1),[u,d]=S.useState(!1);S.useState(!1);const[p,h]=S.useState(!1),[g,y]=S.useState(0),v=S.useMemo(()=>pR(t,e),[t,e]),[b,x]=S.useState({}),[m,w]=S.useState([]),[k,A]=S.useState(0),[C,j]=S.useState({}),T=(I,_)=>{if(C[I])return;x({...b,[I]:_}),j({...C,[I]:!0}),O(I,_);const $=I+1;$<v.length&&setTimeout(()=>{const L=document.getElementById(`question-${$}`);if(L){const N=L.getBoundingClientRect().top+window.scrollY-20;window.scrollTo({top:N,behavior:"smooth"})}},500)},O=(I,_)=>{const $=v[I].options[_];$!==v[I].answer&&w(L=>[...L,v[I]]),$===v[I].answer&&A(k+1)},P=()=>{x({}),j({}),A(0);const I=0,_=document.getElementById(`question-${I}`);if(_){const $=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--navbar-height")),L=_.getBoundingClientRect().top+window.scrollY-$;window.scrollTo({top:L,behavior:"smooth"})}},E=v.every((I,_)=>{const $=b[_];return $!==void 0&&I.options[$]===I.answer}),z=async()=>{if(g<v.length){if(await new Promise(I=>setTimeout(I,3e3)),!u){const I=v[g].options.indexOf(v[g].answer);T(g,I);const _=g===v.length-1;setTimeout(_?()=>{c(!0),setTimeout(()=>{window.location.reload()},2500)}:()=>{y(g+1),z()},1500)}}else h(!1),c(!0)};S.useEffect(()=>{p&&g<v.length&&z(),g===v.length-1&&h(!1)},[p,g]);const B=v.length,M=Object.keys(C).length===B;return S.useEffect(()=>{M&&c(!0)},[M]),l.jsxs(wR,{children:[l.jsx(bR,{children:v.map((I,_)=>l.jsxs(SR,{id:`question-${_}`,children:[p&&g===_&&l.jsx(vR,{initialTime:3}),l.jsxs("h2",{children:[I.question,l.jsx(Kl,{onClick:i(I.question,s),isActive:o[_],children:l.jsx(nt,{})})," "]}),l.jsx("ul",{children:I.options.map(($,L)=>l.jsx(kR,{onClick:()=>T(_,L),selectedAnswers:b[_]===L,correctAnswer:b[_]===I.options.indexOf(I.answer),disabled:C[_],children:$},L))}),l.jsxs(CR,{children:[" ",n("Score"),": ",k,"/",v.length]})]},_))}),l.jsxs(Lg,{onClick:P,children:[" ",n("Recommencer")]}),a&&l.jsxs(l.Fragment,{children:[l.jsx(Q1,{}),l.jsx(V1,{onClose:()=>c(!1),isQuizFinished:M,isAllCorrect:E,incorrectlyAnsweredQuestions:m,Restart:l.jsx(Lg,{onClick:P,children:n("Recommencer")})})]})," "]})},wR=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,bR=f.div`
  padding: 0 1rem;
  /* margin: 0 auto; */
  width: 95%;
  max-width: 500px;
`,SR=f.div`
  /* border: 2px solid wheat; */
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 12px;
  color: ${e=>e.theme.highlihgt1};
  background-color: ${e=>e.theme.secondaryBackground};
  /* transition: scroll-behavior 3.5s ease-in-out; */

  h2 {
    padding: 1rem;
    border-radius: 1rem;
    margin-left: -0.5rem;
    gap: 1rem;
  }

  ul {
    list-style: none;
    /* border: 2px solid orange; */
    text-align: center;
    align-self: center;
  }
`,kR=f.li`
  border: 1px solid ${e=>e.theme.primaryText};
  padding: 0.5rem 1rem;
  margin: 1rem;
  border-radius: 0.5rem;
  max-width: 100%;
  margin-left: -1rem;
  align-self: center;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  background-color: ${e=>e.selectedAnswers?e.correctAnswer?e.theme.correctBack:e.theme.wrongback:e.theme.primaryBackground};
  color: ${e=>e.selectedAnswers?"black":e.theme.primaryText};

  &:hover {
    background-color: ${e=>e.disabled?"":e.theme.tertiaryBackground};
    color: ${e=>e.disabled?"":e.theme.primaryText};
  }
`,CR=f.p`
  color: ${e=>e.theme.text};
  background-color: ${e=>e.theme.background};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  box-shadow: 0px 2px 4px ${e=>e.theme.highlight2};
  margin-left: auto;
  width: 100px;
`,Lg=f.button`
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
`;f.span``;const q1=({frenchWords:e})=>{const[t,n]=S.useState(!1);Ue();const[r,i]=S.useState({}),[o,s]=S.useState([]),[a,c]=S.useState(0),[u,d]=S.useState({}),[p,h]=S.useState(0),g=ne(),y=W($=>$.quizData.topicNames)||[],v=W($=>$.quizData.currentTopic.words)||[],b=W($=>$.quizData.isLoading),x=y.map($=>$.topic),[m,w]=S.useState(x[0]),k=v.map($=>$.french),A=$=>{const L=event.target.value;w(L);const F=x.indexOf(L);h(F),c(0),setCurrentWordIndex(0),setQuizStarted(!0)};S.useEffect(()=>{e||g(Qr())},[e]),S.useEffect(()=>{if(!e&&y.length>0&&m){const $=y.findIndex(L=>L.topic===m);if($!==-1){h($);const L=y[$]._id;g(Vr(L))}}},[e,y,m]);const{t:C}=q(),j=($,L)=>{const F=L.toLowerCase().startsWith("la "),N=L.toLowerCase().startsWith("le "),V=L.toLowerCase().startsWith("l'");if(F&&$==="la"||N&&$==="le")return!0;if(V){if(L.includes("(m.)"))return $==="le";if(L.includes("(f.)"))return $==="la"}return!1},T=($,L)=>{if(u[$])return;d(N=>({...N,[$]:L})),j(L,$)?c(N=>N+1):s(N=>[...N,{question:$,answer:L}])},O=()=>{i({}),d({}),c(0),s([]);const $=0,L=document.getElementById(`question-${$}`);if(L){const N=L.getBoundingClientRect().top+window.scrollY-450;window.scrollTo({top:N,behavior:"smooth"})}},P=e||k,E=P.filter($=>$.startsWith("le/la ")||$.includes("(m./f.)")).map($=>$.replace(/\(m\.\/f\.\)/,"").replace(/le\/la /,"").trim()),z=$=>$.filter(L=>{const F=L.includes("(m./f.)"),N=L.toLowerCase().startsWith("les "),V=L.toLowerCase().startsWith("le/la");return!N&&!F&&!V}),B=P.every(($,L)=>{const F=d[L];return F!==void 0&&$.options[F]===$.answer}),M=z(P),I=M.length,_=I>0&&Object.keys(u).length===I;return S.useEffect(()=>{_&&n(!0)},[_]),b?l.jsx(Be,{}):l.jsxs(AR,{children:[l.jsxs(RR,{children:[l.jsx("p",{children:E.length>0&&C("Les noms à double genre")}),l.jsx("ul",{children:E.map(($,L)=>l.jsx("li",{children:$},L))})]}),!e&&l.jsx(jR,{children:l.jsx(Zv,{topic:x,onCategoryChange:A,selectedCategory:m})}),l.jsx(ER,{children:M.map(($,L)=>{const F=g1($);return F!==null?l.jsxs(TR,{id:`question-${L}`,children:[l.jsx(LR,{children:F}),l.jsxs(OR,{children:[$.startsWith("la ")&&l.jsxs(l.Fragment,{children:[l.jsx(wr,{onClick:()=>T($,"le"),isSelected:u[$]==="le",isCorrect:j("le",$),children:"le"}),l.jsx(wr,{onClick:()=>T($,"la"),isSelected:u[$]==="la",isCorrect:j("la",$),children:"la"})]}),$.startsWith("l'")&&l.jsxs(l.Fragment,{children:[l.jsx(wr,{onClick:()=>T($,"le"),isSelected:u[$]==="le",isCorrect:j("le",$),children:"le"}),l.jsx(wr,{onClick:()=>T($,"la"),isSelected:u[$]==="la",isCorrect:j("la",$),children:"la"})]}),$.startsWith("le")&&l.jsxs(l.Fragment,{children:[l.jsx(wr,{onClick:()=>T($,"le"),isSelected:u[$]==="le",isCorrect:j("le",$),children:"le"}),l.jsx(wr,{onClick:()=>T($,"la"),isSelected:u[$]==="la",isCorrect:j("la",$),children:"la"})]})]},L)]},L):null})}),l.jsxs(PR,{children:[l.jsxs($R,{children:[C("Score"),": ",a]}),l.jsxs(Og,{onClick:O,children:[" ",C("Recommencer")]})]}),t&&l.jsxs(l.Fragment,{children:[l.jsx(Q1,{}),l.jsx(V1,{onClose:()=>n(!1),isQuizFinished:_,isAllCorrect:B,incorrectlyAnsweredQuestions:o,Restart:l.jsx(Og,{onClick:O,children:C("Recommencer")})})]})," "]})},AR=f.div`
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
`,jR=f.div`
  padding: 1rem;
  max-width: 100%;

  ul {
    list-style: none;
    li {
      font-size: 1.4rem;
    }
  }
`,ER=f.div`
  /* border: 2px solid black; */
`,TR=f.p`
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
`,LR=f.div`
  margin-right: 1rem;
  padding: 0.5rem 1rem;

  /* width: 70%; */
  max-width: 100%;
`,OR=f.div`
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
`,wr=f.div`
  padding: 0.3rem 0.8rem;
  background-color: ${e=>e.isSelected?e.isCorrect?e.theme.correctBack:e.theme.wrongback:e.theme.primaryBackground};
  color: ${e=>e.isSelected?e.isCorrect?e.theme.primaryText:e.theme.primaryBackground:""};
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
`,PR=f.div`
  display: flex;

  align-items: center;
`,$R=f.div`
  margin: 0.4rem;
  /* margin-right: 2rem; */
  margin-left: auto;
  font-size: 1rem;

  color: ${e=>e.theme.primaryText};
  background-color: ${e=>e.theme.secondaryBackground};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  /* box-shadow: 0px 2px 4px #0055a4; */
`,Og=f(qe)`
  width: auto;

  @media (max-width: 576px) {
    font-size: 1.2rem;
    margin: 0;
    padding: 0.1 0.2rem;
  }
`,RR=f.div`
  background-color: ${e=>e.theme.secondaryBackground};
  max-width: 100%;

  p {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    text-align: center;
    padding: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0 auto;
    display: flex;
    align-items: center;
    /* flex-direction: row; */
    flex-wrap: wrap;
    /* outline: 1px solid red; */
    gap: 1rem;

    li {
      font-size: 1.2rem;
      /* margin: 0 auto; */
      background-color: ${e=>e.theme.primaryBackground};
      border-radius: 4px;
      padding: 0.5rem;
      outline: 1px solid ${e=>e.theme.highlight4};
      margin-left: 1rem;
      margin-bottom: 1rem;
    }
  }
`,K1=({index:e,expandedIndex:t,definition:n})=>l.jsx(zR,{isExpanded:e===t,children:l.jsx(NR,{children:n[e]})}),zR=f.div`
  width: 95%;
  margin: 0 auto;
  margin-left: -0.1rem;

  /* outline: 4px solid red; */
  max-height: ${e=>e.isExpanded?"1000px":"0"};
  opacity: ${e=>e.isExpanded?"1":"0"};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
  background-color: ${e=>e.theme.tertiaryBackground};
  color: ${e=>e.theme.primaryText};
  position: relative;
  clip-path: polygon(0 0, 100% 0, 97% 100%, 3% 100%);
  @media (min-width: 303px) and (max-width: 576px) {
    margin-left: -0.1rem;
  }
  @media (max-width: 302px) {
    width: 91%;

    margin-left: -0.4rem;
  }
`,NR=f.div`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
  padding: 1rem 2rem;
  margin-top: 0.5rem;
  font-size: ${e=>e.theme.small};
`,BR=({wordsInTargetLanguage:e,secondLanguage:t,definition:n})=>{console.log({wordsInTargetLanguage:e,secondLanguage:t,definition:n}),Ue(),q();const[r,i]=S.useState(null);S.useState(e==null?void 0:e.map(()=>!1));const{handleListen:o,isActiveStates:s}=_e(),a=u=>{i(d=>d===u?null:u)},c=localStorage.getItem("targetLanguageSelected");return l.jsx(IR,{children:e==null?void 0:e.map((u,d)=>l.jsxs(FR,{children:[l.jsxs(DR,{children:[l.jsxs(MR,{children:[l.jsx(_R,{children:u}),l.jsx(UR,{children:t[d]||""})]}),l.jsxs(WR,{children:[l.jsx(Kl,{onClick:o(u,c),isActive:s[d],children:l.jsx(nt,{})}),l.jsx(Mo,{word:u,definition:n[d],secondLanguage:t[d]}),l.jsx(LL,{onClick:()=>a(d),isExpanded:d===r,children:"▾"})]})]}),l.jsx(K1,{index:d,expandedIndex:r,definition:n})]},d))})},IR=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 99%;
  overflow-x: hidden;
  justify-content: center;

  /* margin-right: auto; */

  background-color: ${e=>e.theme.primaryBackground};
  color: ${e=>e.theme.primaryText};
  @media (min-width: 767px) and (max-width: 920px) {
    align-items: center;
    overflow-x: hidden;
    max-width: 99%;
  }
  @media (min-width: 577px) and (max-width: 767px) {
    max-width: 99%;
    /* outline: 2px solid red; */
    overflow-x: hidden;
  }
  @media (min-width: 393px) and (max-width: 576px) {
    width: 99%;
    overflow-x: hidden;
    /* outline: 2px solid red; */
  }
  @media (max-width: 392px) {
    overflow-x: hidden;
    width: 100%;
  }
`,FR=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* outline: 2px solid blue; */
  margin-left: 0.5rem;
  width: 96%;
  margin-bottom: 1rem;
  border-radius: 12px 12px 0 0;

  @media (min-width: 767px) and (max-width: 920px) {
    width: 97%;
  }
`,DR=f.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: 0.5rem auto;
  /* margin-right: auto; */
  width: 94%;
  outline: 1px solid ${e=>e.theme.highlight4};
  /* outline: 2px solid blue; */

  overflow: hidden;

  cursor: pointer;
  background-color: ${e=>e.isExpanded?"#e6af68":e.theme.secondaryBackground};
  color: ${e=>e.theme.primaryText};
  &:hover {
    background-color: ${e=>e.theme.tertiaryBackground};
  }

  @media (min-width: 577px) and (max-width: 920px) {
    margin-left: -0.5rem;
    flex-direction: column;
    max-width: 95%;
  }

  @media (min-width: 360px) and (max-width: 576px) {
    flex-direction: column;
    margin-left: -0.5rem;

    width: 90%;
  }
  @media (min-width: 322px) and (max-width: 359px) {
    /* outline: 2px solid black; */
    width: 84%;
    flex-wrap: wrap;
    font-size: ${({theme:e})=>e.extraSmall};
  }
  @media (max-width: 321px) {
    /* outline: 2px solid red; */
    width: 70%;
    flex-wrap: wrap;
    font-size: ${({theme:e})=>e.extraSmall};
  }
`,MR=f.div`
  display: flex;
  justify-content: space-between;
  /* outline: 1px solid red; */
  width: 100%;
`,_R=f.p`
  font-weight: bold;
  /* border: 1px solid grey; */

  width: 40%;
  margin-left: 0.4rem;
  font-size: ${({theme:e})=>e.medium};
  &::after {
    content: " :";
  }

  @media (min-width: 769px) and (max-width: 919px) {
    font-size: ${({theme:e})=>e.mediumSmall};
    width: 35%;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    font-size: ${({theme:e})=>e.mediumSmall};
  }
  @media (max-width: 577px) {
    font-size: ${({theme:e})=>e.small};
    margin-left: 0.2rem;
    width: 49%;
  }
  @media (max-width: 364px) {
    margin-left: 0;

    font-size: ${({theme:e})=>e.extraSmall};
  }
  @media (max-width: 321px) {
    margin-left: 0;
    width: 60%;

    font-size: ${({theme:e})=>e.extraSmall};
  }
`,UR=f.span`
  font-size: ${({theme:e})=>e.mediumSmall};
  width: 35%;
  /* border: 1px solid grey; */

  @media (min-width: 769px) and (max-width: 919px) {
    font-size: ${({theme:e})=>e.mediumSmall};
    width: 40%;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    font-size: ${({theme:e})=>e.mediumSmall};
    width: 45%;
  }
  @media (max-width: 577px) {
    overflow-x: auto; /* Use 'auto' instead of 'scroll' */
    font-size: ${({theme:e})=>e.extraSmall};
    margin-left: 0.5rem;
    width: 48%;
    /* outline: 1px solid red; */
  }
  @media (max-width: 364px) {
    margin-left: 1rem;

    font-size: ${({theme:e})=>e.extraSmall};
  }
`,WR=f.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 0.4rem;
  gap: 1rem;
  text-align: center;
  /* border: 1px solid grey; */
  pointer-events: ${e=>e.isExpanded?"none":"auto"};
  @media (min-width: 768px) and (max-width: 1220px) {
    /* outline: 1px solid red; */
    gap: 1rem;
    /* width: 90%; */
  }
`;f.span`
  margin: 0 0.5rem 0 1rem;
`;f.div`
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
`;const HR=e=>e!=null&&e.startsWith("l'")||e.startsWith("L'")?e==null?void 0:e.slice(2):e,VR=({text:e,vocabulary:t,isTextVerbs:n,verbFormMapping:r,vocabularyData:i})=>{const{t:o,i18n:s}=q(),a=i.verbDetails;ne();const c={};for(const O in r)if(r.hasOwnProperty(O)){const P=O,E=r[O],z=a.find(B=>B.french===E);z&&(c[P]=z)}const[u,d]=S.useState(!1),[p,h]=S.useState(0),g=W(O=>O.auth.isAuthenticated),y=()=>{d(!u),h(O=>O+180)},v=e==null?void 0:e.split(" "),[b,x]=S.useState(null),m=new Set,w=r&&Object.values(r)||[],k=[...new Set(w)],C=(O=>{const P=O==null?void 0:O.split(".");return P==null?void 0:P.map(z=>{const B=z==null?void 0:z.trim(),M=B.split(/\s|,/).filter(_=>_.length>0),I=gO(M);return{sentence:B,words:I}})})(e),j=t==null?void 0:t.map(O=>{var P,E,z;return(z=(E=(P=g1(O))==null?void 0:P.toLowerCase())==null?void 0:E.replace(" (f.)",""))==null?void 0:z.replace(" (m.)","")}),T=C.filter(O=>O.words.length<=7);return l.jsxs(QR,{children:[l.jsx(JR,{children:l.jsx(H1,{uniqueVerbs:k})}),v==null?void 0:v.map((O,P)=>{const E=HR(O).toLowerCase().replace(/[^a-z]/g,""),z=j==null?void 0:j.includes(E),B=n&&r[E],M=B?c[E]:"",I=()=>{B&&x(E)},_=()=>{B&&x(null)};return B&&!m.has(E)?(m.add(E),l.jsxs(GR,{onMouseEnter:I,onMouseLeave:_,children:[O,l.jsx(qR,{children:b===E&&l.jsx(U1,{id:`verb-tooltip-${P}`,tooltipContent:M,conjugated:O,index:P,offset:{top:-100}})})]},P)):z?l.jsxs(Y1,{children:[O," "]},P):l.jsxs(KR,{className:P===0?"first":"",children:[O," "]},P)}),l.jsxs(YR,{onClick:y,children:[o("Construire la phrase"),l.jsx(Xv,{isActive:u})]}),u&&g?l.jsx(v1,{sentenceData:T,isActive:u}):g?null:l.jsxs("p",{children:["login to use this exercise: ",l.jsx(Oe,{to:"/login",children:"login"})]})]})},QR=f.div`
  font-family: "Poppins", sans-serif;
  font-size: ${e=>e.theme.medium};
  line-height: ${e=>e.theme.largeLineHeight};
  letter-spacing: ${e=>e.theme.extraMegaLetterSpacing};
  border-bottom: 3px solid ${e=>e.theme.highlight3};
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
`,Y1=f.span`
  /* background-color: ${e=>e.theme.highlight1}; */
  font-weight: bold;

  position: relative;
  @media (max-width: 392px) {
  }
`,GR=f(Y1)`
  background-color: ${e=>e.theme.highlight2};
  margin: 0 0.3rem;
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
  font-weight: 500;

  @media (max-width: 392px) {
    padding: 0.1rem;
  }
`,qR=f.span`
  position: absolute;
  width: 180px;

  /* outline: 1px solid blue; */
  background-color: ${e=>e.theme.highlight3};
  top: -365%;
  left: -40%;
  /* display: flex; */
  text-align: center;
  border-radius: 8px;

  @media (min-width: 767px) and (max-width: 1767px) {
    top: -365%;
    left: -40%;
  }
  @media (min-width: 393px) and (max-width: 767px) {
    top: -420%;
    left: -30%;
  }
  @media (max-width: 392px) {
    top: -480%;
    left: -30%;
  }
`,KR=f.span`
  &.first {
    margin-left: 1rem;
    font-size: ${e=>e.theme.medium};
    font-weight: bold;
  }
`,YR=f.p`
  margin: 2rem 0;
  font-weight: bold;
  /* text-align: center; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* margin-right: 2rem; */
`,JR=f.div`
  display: flex;

  margin: 0 1rem;
`,J1=({selectedFlashcards:e})=>{const{handleListen:t,isActiveStates:n}=_e(),{t:r,i18n:i}=q(),o=i.language==="ka",[s,a]=S.useState(0),[c,u]=S.useState(0),[d,p]=S.useState(4),[h,g]=S.useState(100),[y,v]=S.useState(!1),[b,x]=S.useState(!1),[m,w]=S.useState(!0),k=e==null?void 0:e.map(P=>P.word),A=e==null?void 0:e.map(P=>P.secondLanguage);S.useEffect(()=>{const P=setInterval(()=>{!y&&!b&&(d>0?(p(E=>E-1),g(E=>E-25)):(a(E=>E===k.length-1?0:E+1),u(E=>E+1),p(4),g(100)))},1e3);return()=>{clearInterval(P)}},[d,k,y,s,b]),S.useEffect(()=>{s>0&&s%4===0&&v(!0)},[s]);const C=()=>{v(!1)},j=()=>{x(!b)},T=P=>{w(P.target.value==="word")},O=localStorage.getItem("targetLanguageSelected");return l.jsx(ZR,{children:y?l.jsxs(s4,{children:[l.jsxs("div",{children:[" ",r("Mots déjà revus"),l.jsx("p",{children:c})]}),l.jsx(TL,{children:r("Vous suivez ?")}),l.jsx(e1,{onClick:C,children:r("Continue")})]}):l.jsxs(l.Fragment,{children:[l.jsxs(e4,{children:[l.jsxs(XR,{onChange:T,children:[l.jsx("option",{value:"word",children:r("Français")}),l.jsx("option",{value:"translation",children:r(o?"ქართული":"English")})]}),l.jsxs(t4,{children:[l.jsx(o4,{children:d}),l.jsxs(n4,{children:[l.jsx(Kl,{onClick:t(k[s],O),isActive:n[s],children:l.jsx(nt,{})}),m?k[s]:A[s]]})]}),l.jsx(r4,{style:{filter:`blur(${h}px)`},children:l.jsx(i4,{children:m?A[s]:k[s]})})]}),l.jsx(qe,{onClick:j,children:b?"Resume":"Pause"})]})})},XR=f.select`
  margin-top: 1rem;
  font-size: 1rem;
  padding: 0.25rem;
`,ZR=f(EL)`
  margin-top: 2rem;
  margin: 0 auto;
  overflow-x: hidden;
  /* outline: 1px solid blue; */
  align-self: center;
  width: 370px;
  @media (min-width: 416px) and (max-width: 541px) {
    /* margin: 0; */
    width: 360px;
  }
  @media (min-width: 394px) and (max-width: 415px) {
    /* margin: 0; */
    width: 345px;
  }
  @media (min-width: 360px) and (max-width: 393px) {
    margin: 0;
    width: 330px;
  }
  @media (min-width: 301px) and (max-width: 359px) {
    width: 270px;
    margin: 0;
  }
  @media (max-width: 300px) {
    width: 240px;
    margin: 0;
  }
`,e4=f.div`
  width: 98%;
  height: 30rem;
  margin-bottom: 1rem;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${e=>e.theme.primaryBackground};
`,t4=f.span`
  font-size: 2rem;
  width: 100%;
  height: 20rem;

  /* border: 2px solid black; */
  font-weight: bold;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-around;
  flex-direction: column;
  span {
    margin-top: -6rem;
  }
`,n4=f.span`
  display: flex;
  align-items: center;
  gap: 0.21rem;
  width: 90%;
  padding: 0.2rem 0.4rem;
  font-size: ${e=>e.theme.extraLarge};
  margin: 0 auto;
  outline: 1px solid ${e=>e.theme.highlight4};
  background: ${e=>e.theme.secondaryBackground};
  justify-content: space-evenly;
`,r4=f.div`
  width: 100%;
  height: 18rem;
  border-radius: 50%;
  /* margin: 1rem; */
  display: flex;
  flex-direction: column; /* Added this line */
  align-items: center;
  justify-content: center;
  background: ${e=>e.theme.highlight2};
  font-size: ${e=>e.theme.medium};

  filter: ${e=>`blur(${e.blurLevel}%)`}; /* Fix this line */
`,i4=f.span`
  font-size: 2rem;
  padding: 1rem 2rem;
  font-weight: bold;
  color: ${e=>e.theme.primaryText};
`,o4=f.div`
  font-size: 2rem;
  margin-top: -3rem;
  color: ${e=>e.theme.primaryText};
`,s4=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid black;
  background: ${e=>e.theme.secondaryBackground};
  color: ${e=>e.theme.text};
  font-size: 1.2rem;
  width: 100%;
  outline: 1px solid red;
  height: 38rem;
  div {
    text-align: center;
    padding: 1rem;
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
    font-size: 2.2rem;
  }
  @media (min-width: 360px) and (max-width: 415px) {
    width: 350px;
  }
`,ds=({type:e,isOpen:t,onToggle:n,french:r,vocabularyData:i,identifier:o,selectedFlashcards:s,wordsInTargetLanguage:a,secondLanguage:c,english:u})=>{S.useState(0);const d=S.useRef(null);return q(),i==null||i.words,S.useEffect(()=>{t&&y1(d,192)},[t]),l.jsxs(a4,{children:[l.jsxs("h2",{onClick:n,children:[e,l.jsx(Xv,{onClick:n,isActive:t})]}),t&&l.jsxs(l4,{ref:d,children:[o==="Mémoriser des mots"&&l.jsx(J1,{selectedFlashcards:s}),o==="Texte"&&l.jsx(VR,{text:i==null?void 0:i.text,vocabulary:r,verbFormMapping:i==null?void 0:i.verbFormMapping,isTextVerbs:i==null?void 0:i.textVerbs,vocabularyData:i}),o==="Genre des noms"&&l.jsx(q1,{frenchWords:r,parentsData:!0}),o==="Questionnaire"&&l.jsx(G1,{wordsInTargetLanguage:a,secondLanguage:c,french:r})]})]})},a4=f.div`
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid ${e=>e.theme.tertiaryText};
  align-items: left;
  /* margin-bottom: 2rem; */

  width: 99%;
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    width: 95%;

    /* border: 2px solid green; */
    /* text-align: left; */
  }
  @media (min-width: 768px) and (max-width: 1220px) {
  }
  @media (min-width: 415px) and (max-width: 767px) {
  }
  @media (min-width: 359px) and (max-width: 415px) {
    /* width: 350px; */
  }
  @media (max-width: 364px) {
  }
  @media (max-width: 321px) {
  }
`,l4=f.div`
  /* border: 2px solid green; */
  width: 97%;
  padding: 1rem;
`,c4=()=>{var A,C,j,T,O,P;const{topicId:e}=_n(),t=ne(),n=W(E=>E.quizData.currentTopic),r=W(E=>E.quizData.isLoading),i=n==null?void 0:n.words,o=(A=n==null?void 0:n.words)==null?void 0:A.map(E=>E==null?void 0:E.french);(C=n==null?void 0:n.words)==null||C.map(E=>E==null?void 0:E.english),(j=n==null?void 0:n.words)==null||j.map(E=>E==null?void 0:E.georgian);const s=(T=n==null?void 0:n.words)==null?void 0:T.map(E=>E==null?void 0:E.definition),{t:a,i18n:c}=q(),u=c.language==="ka",d=i==null?void 0:i.map(E=>({word:E==null?void 0:E.french,definition:E==null?void 0:E.definition,secondLanguage:u?E.georgian:E.english})),p=localStorage.getItem("targetLanguageSelected"),h=localStorage.getItem("nativeLanguageSelected"),g={fr:"french",en:"english",ka:"georgian"},y=g[p],v=(O=n==null?void 0:n.words)==null?void 0:O.map(E=>E==null?void 0:E[y]),b=g[h],x=(P=n==null?void 0:n.words)==null?void 0:P.map(E=>E==null?void 0:E[b]);S.useEffect(()=>{e&&t(Vr(e))},[]);const[m,w]=S.useState(null),{vocabularyTopicId:k}=_n();return S.useEffect(()=>{t(Ji())},[t,k]),r?l.jsx(Be,{}):l.jsxs(u4,{children:[l.jsx(j1,{}),l.jsxs(f4,{children:[a("Les mots")," ",l.jsx("b",{children:o&&(o==null?void 0:o.length)})]}),l.jsx(d4,{children:l.jsx(BR,{wordsInTargetLanguage:v,secondLanguage:x,definition:s})}),l.jsxs(h4,{children:[l.jsx(ds,{type:a("Mémoriser des mots"),identifier:"Mémoriser des mots",isOpen:m==="Mémoriser des mots",onToggle:()=>w(m==="Mémoriser des mots"?null:"Mémoriser des mots"),selectedFlashcards:d}),l.jsx(ds,{type:a("Texte"),identifier:"Texte",isOpen:m==="Texte",onToggle:()=>w(m==="Texte"?null:"Texte"),vocabularyData:n,french:o}),l.jsx(ds,{type:a("Genre des noms"),identifier:"Genre des noms",isOpen:m==="Genre des noms",onToggle:()=>w(m==="Genre des noms"?null:"Genre des noms"),french:o}),l.jsx(ds,{type:a("Questionnaire"),identifier:"Questionnaire",isOpen:m==="Questionnaire",onToggle:()=>w(m==="Questionnaire"?null:"Questionnaire"),secondLanguage:x,wordsInTargetLanguage:v,french:o})]})]})},u4=f.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
  align-items: center;
  overflow-x: hidden;
  margin: 0 auto;
  max-width: 100%;
  @media (min-width: 577px) and (max-width: 767px) {
    width: 95%;
  }
  @media (min-width: 393px) and (max-width: 576px) {
    padding: 0;
    margin: 0;
    width: 100%;
    overflow-x: hidden;
  }
  /* width: 100%; */
  @media (max-width: 392px) {
    padding: 0;
    margin: 0;

    overflow-x: hidden;
    width: 95%;
  }
`,d4=f.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 99%;

  margin: 0 auto;
  border-bottom: 4px solid ${e=>e.theme.tertiaryText};

  @media (max-width: 920px) {
    width: 99%;
  }
  @media (min-width: 513px) and (max-width: 768px) {
    width: 99%;
  }
  @media (min-width: 420px) and (max-width: 512px) {
    width: 99%;
  }
  @media (min-width: 365px) and (max-width: 420px) {
    width: 100%;
  }
  @media (max-width: 364px) {
    width: 335px;
  }
  @media (max-width: 321px) {
    align-self: center;
    width: 279px;
  }
`,f4=f.div`
  width: 200px;
  border: 2px solid grey;
  padding: 0.5rem 1rem;
  text-align: center;
  margin: 0 auto;
  margin-top: 3rem;
  font-size: 1.2rem;
  background-color: ${e=>e.theme.secondaryBackground};
  margin-bottom: 1rem;
  b {
    font-size: 1.4rem;
    border-bottom: 2px solid ${e=>e.theme.primaryText};
  }
`,p4=f.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,h4=f(p4)`
  /* border: 2px solid gold; */
  margin: 0 auto;
  padding-bottom: 5rem;
  padding-top: 1rem;

  width: 99%;
  /* outline: 2px solid red; */
  overflow-x: hidden;
  @media (min-width: 768px) and (max-width: 1220px) {
  }
  @media (min-width: 415px) and (max-width: 767px) {
  }
  @media (min-width: 359px) and (max-width: 415px) {
    /* outline: 2px solid blue; */
  }
  @media (max-width: 364px) {
  }
`;f.div`
  display: flex;
  flex-wrap: wrap; /* Add this line to make the cards wrap */
  width: 100%;
  height: 100vh;
  background: green;
`;f.div`
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
`;f.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;

  p {
    font-size: 1.2rem;
  }
`;f.div`
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
`;f.div`
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
`;const m4=()=>{const[e,t]=S.useState(null),{t:n}=q(),r=W(d=>d.isFavorite.favorites),i=ne(),{handleListen:o,isActiveStates:s}=_e(),a=d=>{i(a1(r[d]))},c=()=>{i(JL())},u=d=>{t(p=>p===d?null:d)};return l.jsxs(g4,{children:[l.jsx("h2",{children:n("Mots favoris")}),r.length===0?l.jsx("p",{children:n("Pas de mots favoris")}):l.jsxs(x4,{children:[r.filter(d=>Object.keys(d).length>0).map((d,p)=>l.jsxs(y4,{children:[l.jsxs(v4,{children:[l.jsx("span",{children:d.word}),l.jsx("span",{children:d.secondLanguage}),l.jsxs(w4,{children:[l.jsx(k4,{onClick:o(d.word),isActive:s[p],children:l.jsx(nt,{})}),l.jsx(b4,{src:l1,alt:"Favorite",onClick:()=>a(p)}),l.jsx(S4,{onClick:()=>u(p),isExpanded:p===e,children:"▾"})]})]}),l.jsx(K1,{index:p,expandedIndex:e,frenchExamples:d.frenchExamples,secondLanguageExamples:d.secondLanguageExamples})]},p)),l.jsx(qe,{onClick:c,children:"Clear All"})]})]})},g4=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 365px;
  width: 100vw;
  height: 100%;
  margin: 0 0.4rem;
`,x4=f.div`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  border-radius: 12px;
  min-width: 365px;
  max-width: 100%;
`,y4=f.div`
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
`,v4=f.div`
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
`;f.button`
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
`;const w4=f.div`
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
`,b4=f.img`
  max-width: 1.5rem;
  max-height: 1.5rem;
  margin-left: auto;
`,S4=f.div`
  transform: ${e=>e.isExpanded?"rotate(180deg)":"rotate(0deg)"};
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  margin: 0 0.5rem;
`,k4=f.div`
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
`,C4=()=>{Ue();const e=ne(),{t,i18n:n}=q(),r=W(b=>b.quizData.topicNames)||[],i=W(b=>b.quizData.isLoading);S.useState(null);const[o,s]=S.useState(""),[a,c]=S.useState(!1),u=[...new Set(r.map(b=>JSON.stringify(b.category)))].map(b=>JSON.parse(b));S.useEffect(()=>{e(Qr())},[e]);const d=localStorage.getItem("targetLanguageSelected"),p=localStorage.getItem("nativeLanguageSelected"),h=o?r.filter(b=>{const x=`category${p.charAt(0).toUpperCase()+p.slice(1)}`;return b.category[x]===o}):r,g=(b,x)=>{if(tr.find(w=>w.code===x))switch(x){case"fr":return b.topic;case"en":return b.topicEng;case"ka":return b.topicGeo;default:return b.topic}return b.topic},y=()=>{c(!a)},v=b=>{const x=`category${p.charAt(0).toUpperCase()+p.slice(1)}`;s(b[x]||b.categoryEn),c(!1)};return i?l.jsx(Be,{}):l.jsxs("div",{children:[l.jsxs(R4,{children:[l.jsxs(z4,{onClick:y,children:[o||"All",l.jsx(N4,{})]}),l.jsx(B4,{showOptions:a,children:u.map(b=>l.jsx(I4,{value:b.categoryEn,onClick:()=>v(b),children:b[`category${p.charAt(0).toUpperCase()+p.slice(1)}`]},b.categoryFr))})]}),l.jsx(A4,{children:h.map(b=>l.jsx(j4,{to:`/vocabulary-topics/${b._id}`,children:l.jsxs(E4,{children:[l.jsx(T4,{src:b.imageUrl,alt:"Vocabulary Topic"}),l.jsxs(O4,{children:[l.jsxs(X1,{children:[g(b,d)," "]}),l.jsxs(L4,{children:[g(b,p)," "]})]})," ",l.jsxs(P4,{children:[l.jsx("span",{children:t("Nombre de mots")}),l.jsx("strong",{children:b.wordsCount})]}),l.jsx($4,{children:b.type[`type${p.charAt(0).toUpperCase()+p.slice(1)}`]})]})},b._id))})]})},A4=f.ul`
  display: flex;
  align-items: center;

  max-width: 100%;

  flex-wrap: wrap;
  h1 {
    margin: 0 auto;
  }
`,j4=f(Oe)`
  text-decoration: none;
  /* color: #333; */

  &:hover {
    color: #007bff;
  }
`,E4=f.div`
  border-radius: 0.5rem;
  position: relative;

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
    outline: none;
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
    display: flex;

    margin: 1rem auto;
    padding: 0;
    max-width: 280px;
  }
  @media (max-width: 348px) {
    margin: 1rem auto;
    max-width: 240px;
  }
  @media (max-width: 313px) {
    max-width: 210px;
  }
`,T4=f.img`
  width: 100%;
  height: 50%; /* Adjust this value to set the desired image height */
  overflow: hidden;
  object-fit: cover;
  background: white;
  margin-bottom: 8px;
  border-radius: 8px 8px 0 0;
`,X1=f.h3`
  /* font-size: 20px; */
  margin: 0;
  padding: 0 0.4rem;
  line-height: ${e=>e.theme.smallLineHeight};
  margin-bottom: 8px;
  /* hyphens: auto; */
  /* To allow long words to break and wrap */
  word-wrap: break-word;
`,L4=f(X1)`
  font-size: ${e=>e.theme.small};
  word-wrap: break-word;
`,O4=f.p`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  font-size: 16px;
  margin: 0;
  color: ${e=>e.theme.primaryText};
  margin-bottom: 8px; /* Adjust this value for spacing */
`,P4=f.h4`
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
`,$4=f.span`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 200px;
  height: 30px;
  background-color: ${e=>e.theme.highlight4};
  color: ${e=>e.theme.primaryText};
  text-align: center;
  padding: 4px;
  border-radius: 8px 8px 0 0;
  transform: translate(13%, -50%) rotate(-90deg);
  font-weight: bold;
`,R4=f.div`
  position: relative;
  width: 300px;
  margin-right: 3rem;
  margin-left: auto;
`,z4=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  border: 1px solid ${e=>e.theme.highlight4};
  border-radius: 4px;
  background-color: ${e=>e.theme.primaryText};
  color: ${e=>e.theme.primaryBackground};
  cursor: pointer;
`,N4=f.div`
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid ${e=>e.theme.primaryBackground};
`,B4=f.div`
  position: absolute;
  top: 100%;
  left: 1%;
  width: 105%;
  background-color: ${e=>e.theme.primaryBackground};
  border: 1px solid ${e=>e.theme.highlight4};
  border-top: none;
  max-height: 150px;
  overflow-y: auto;
  z-index: 1;
  display: ${e=>e.showOptions?"block":"none"}; /* Show/hide options */
`,I4=f.div`
  padding: 10px;
  color: ${e=>e.theme.primaryText};
  cursor: pointer;

  &:hover {
    background-color: ${e=>e.theme.highlight4};
  }
`,eo=ae("dialogueTopics/fetchDialogueTopics",async()=>{try{return(await le.get("/dialogueTopics")).data}catch{throw Error("Failed to fetch phrases for lesson")}}),F4={dialogueTopics:[],isLoading:!1,error:null},D4=Pe({name:"dialogueTopics",initialState:F4,reducers:{},extraReducers:e=>{e.addCase(eo.pending,t=>{t.isLoading=!0,t.error=null}).addCase(eo.fulfilled,(t,n)=>{t.dialogueTopics=n.payload,t.isLoading=!1}).addCase(eo.rejected,(t,n)=>{t.isLoading=!1,t.error=n.error.message})}}),M4=D4.reducer,_4=({dialogueTopics:e})=>{const{t,i18n:n}=q();return n.language,l.jsx(U4,{children:e.map(r=>{const{_id:i,chapter:o,chapterName:{chapterNameEng:s,chapterNameFr:a,chapterNameGeo:c},dialogues:u}=r;return l.jsxs(W4,{children:[l.jsxs(H4,{children:[l.jsx(V4,{children:o}),l.jsx(Q4,{children:a})]}),l.jsx(Z1,{children:u.map(d=>{const{dialogueName:p,dialogueImg:h}=d;return l.jsx("div",{children:l.jsx("h4",{children:p})},p)})}),l.jsxs(G4,{children:[l.jsxs("p",{children:[t("Des mots"),l.jsx("b",{children:"15"})]}),l.jsxs("p",{children:[t("Expressions"),l.jsx("b",{children:"10"})]}),l.jsxs("p",{children:[t("Des exercices")," ",l.jsx("b",{children:" 5"})]})]})]},i)})})},U4=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
  border-radius: 3rem;
  border: 6px solid ${e=>e.theme.primaryText};
`,W4=f.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${e=>e.theme.secondaryBackground};
  color: ${e=>e.theme.primaryText};
`,H4=f.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,V4=f.span`
  color: #1e072e;
  font-size: 1.4rem;
`,Q4=f.span`
  font-size: 1.6rem;
  border-bottom: 3px solid white;
  padding: 0.4rem 1rem;
  border-radius: 12px;
  text-align: center;
  margin: 0 auto;
`,Z1=f.div`
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
`,G4=f(Z1)`
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
`,q4=()=>{const e=ne(),t=W(r=>r.dialogueTopics.dialogueTopics)||[],n=W(r=>r.dialogueTopics.isLoading);return S.useEffect(()=>{e(eo())},[]),n?l.jsx(Be,{}):l.jsx("div",{children:t&&t.map(r=>l.jsx(K4,{to:`/dialogue-topics/${r._id}`,children:l.jsx(_4,{dialogueTopics:[r]})},r._id))})},K4=f(Oe)`
  text-decoration: none;
  /* background-color: red; */
`,Y4=({words:e})=>{const t=e.map(h=>h.french),n=e.map(h=>h.english),r=e.map(h=>h.georgian),i=e.map(h=>h.definition),{handleListen:o,isActiveStates:s}=_e(),{t:a,i18n:c}=q(),u=c.language==="ka",d=u?r:n,p=u?"Geo":"Eng";return l.jsxs(J4,{children:[l.jsx(X4,{children:"Vocabulary"}),l.jsx("div",{children:t.map((h,g)=>l.jsxs(Z4,{children:[l.jsx(ez,{onClick:o(h),children:h}),l.jsx(kp,{definition:i,secondLanguage:d,secondLangButtonName:p,french:t,index:g,isMultipleDefinitions:!0}),l.jsx(tz,{children:l.jsxs(nz,{children:[l.jsx(rz,{onClick:o(h),children:l.jsx(nt,{})}),l.jsx(ZL,{word:h,definition:i[g],secondLanguage:d[g],secondLanguageExamples:"No examples"}),l.jsx(Mo,{word:h,frenchExamples:i[g],secondLanguage:d[g],secondLanguageExamples:"No examples"})]})})]},g))})]})},J4=f.div`
  margin-top: 5rem;
  h2 {
    margin-bottom: 3rem;
  }
`,X4=f.h1`
  &:before {
    content: "💥 ";
  }
`,Z4=f.div`
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
`,ez=f.p`
  font-weight: bold;
  font-size: 1.4rem;
`,tz=f.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  :first-child {
    font-style: italic;
  }
`,nz=f.div`
  display: flex;

  gap: 1rem;
  align-items: center;
  justify-content: space-evenly;
  margin-right: 1rem;
  margin-left: auto;
`,rz=f.div`
  display: flex;
`,iz=({phrases:e})=>{const{t,i18n:n}=q(),r=n.language==="ka",i=e.map(g=>g.french),o=e.map(g=>g.english),s=e.map(g=>g.georgian),a=r?s:o,[c,u]=S.useState({}),[d,p]=S.useState(Array(s.length).fill(!1)),h=g=>{u(y=>({...y,[g]:y[g]===0?180:0})),p(y=>{const v=[...y];return v[g]=!v[g],v})};return l.jsxs(oz,{children:[l.jsx("h1",{children:"DialoguePhrase"}),l.jsx("div",{children:i.map((g,y)=>l.jsxs(sz,{children:[l.jsx(az,{children:g}),d[y]&&l.jsx(uz,{children:a[y]}),l.jsx(lz,{onClick:()=>h(y),children:l.jsx(cz,{src:Sp,alt:"ChevronDown",rotation:c[y]||0})})]},y))})]})},oz=f.div`
  width: 100%;
`,sz=f.div`
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
`,az=f.p`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`,lz=f.div`
  margin-left: auto;

  img {
    position: absolute;
    top: 15%;
    right: 3%;
  }
`,cz=f.img`
  width: 24px;
  height: 24px;
  transition: transform 0.5s ease;
  margin-left: 1rem;
  transform: ${({rotation:e})=>`rotate(${e}deg)`};
  cursor: pointer;
`,uz=f.div`
  /* color: grey; */
  margin-left: 1rem;
  font-size: 1.2rem;
  font-style: italic;
`,dz=({isActive:e,onClick:t})=>{const{t:n}=q();return l.jsxs(fz,{children:[l.jsx(hz,{children:n(e?"Cacher Toutes les Traductions":"Afficher toutes les traductions")}),l.jsx(pz,{isActive:e,onClick:t})]})},fz=f.div`
  display: flex;
  flex-direction: column;
`,pz=f.button`
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
`,hz=f.span`
  font-size: 1.2rem;
  margin: 0 auto;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`,mz=()=>{const e=ne(),{dialogueTopicId:t}=_n(),{i18n:n}=q(),r=n.language==="ka",[i,o]=S.useState(!1),[s,a]=S.useState(-1),[c,u]=S.useState({}),{handleListen:d,isActiveStates:p}=_e(),h=C=>{u(j=>({...j,[C]:j[C]===0?180:0})),a(j=>j===C?-1:C)},g=W(C=>C.dialogueTopics.dialogueTopics)||[],y=W(C=>C.dialogueTopics.isLoading),v=g.find(C=>C._id===t);if(S.useEffect(()=>{e(eo())},[]),y)return l.jsx(Be,{});if(!v)return l.jsx("div",{children:"No data available for the selected topic."});const{_id:b,chapter:x,chapterName:{chapterNameEng:m,chapterNameFr:w,chapterNameGeo:k},dialogues:A}=v||{};return l.jsxs(gz,{children:[l.jsxs(Ez,{children:[l.jsx("h1",{children:w}),l.jsx(dz,{isActive:i,onClick:()=>o(!i)})]}),l.jsx("div",{children:A&&A.map((C,j)=>{const{dialogueName:T,dialogueImg:O,dialogue:P,words:E,phrases:z}=C;return l.jsxs(xz,{children:[l.jsx(yz,{children:T}),P.map((B,M)=>{const{speaker:I,messageFr:_,messageEng:$,messageGeo:L}=B,F=r?L:$,N=i||s===M;return l.jsxs(vz,{children:[l.jsxs(bz,{children:[I,":"]}),l.jsxs(wz,{children:[l.jsx(Sz,{children:_}),l.jsxs(Tz,{children:[l.jsx(jz,{onClick:d(_),children:l.jsx(nt,{})}),l.jsx(Cz,{onClick:()=>{h(M)},children:l.jsx(Az,{src:Sp,alt:"ChevronDown",rotation:c[M]||0})})]}),N&&l.jsx(kz,{children:F})]})]},M)}),l.jsx("div",{children:l.jsx(Y4,{words:E})}),l.jsx(iz,{phrases:z})]},j)})})]},b)},gz=f.section`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
`,xz=f.div`
  padding: 0.5rem;
  margin: 0.5rem;
  margin: 0 auto;
  max-width: 920px;
`,yz=f.h1`
  &::before {
    content: "⚜️  ";
  }
`,vz=f.div`
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
`,wz=f.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  height: 6rem;
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow-y: scroll;
`,bz=f.p`
  font-weight: bold;
  width: 50%;

  background: ${e=>e.theme.primaryBackground};
  color: ${e=>e.theme.primaryText};
  padding: 1rem 0;
  text-align: center;
`,Sz=f.span`
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  width: 80%;
  font-weight: bold;

  &:before {
    content: "🔹";
  }
`,kz=f.span`
  background: ${e=>e.theme.tertiaryBackground};
  color: ${e=>e.theme.secondaryText};

  margin-left: 1.2rem;
  padding: 0.4rem;

  &:before {
    content: "🔸";
  }
`,Cz=f.div`
  /* margin-left: auto; */
  img {
    /* position: absolute;
    top: 15%;
    right: 3%; */
  }
`,Az=f.img`
  width: 24px;
  height: 24px;
  transition: transform 0.5s ease;
  margin-left: 0.4rem;
  transform: ${({rotation:e})=>`rotate(${e}deg)`};
  cursor: pointer;
`,jz=f.span`
  cursor: pointer;
`,Ez=f.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  button {
    margin: 0 auto;
  }
`,Tz=f.div`
  border-bottom: 2px solid grey;
  border-left: 2px solid grey;
  border-radius: 0 0 0 12px;
  padding: 0 0 0.2rem 0.4rem;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0%;
  right: 2%;
`,Lz=({topics:e})=>{const{i18n:t}=q(),n=t.language==="ka";if(!e||!e.title)return null;const r=n?e.title.titleGeo:e.title.titleEng;return l.jsxs(Oz,{children:[l.jsx("h2",{children:e.title.titleFr}),l.jsx("h5",{children:r})]})},Oz=f.div`
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
  @media (max-width: 356px) {
    width: auto;
  }
`,au=ae("tenseNames/fetchTenseNames",async()=>{try{return(await le.get("/grammer/basic-verb-tenses/names")).data}catch(e){throw console.log(e),Error("Failed to fetch words")}}),lu=ae("selectedTense/fetchVerbDetails",async e=>{try{return(await le.get(`/grammer/basic-verb-tenses/${e}`)).data}catch(t){throw console.log(t),Error("Failed to fetch verb details")}}),Pz={selectedTenseCache:{},selectedTense:[],tenseNames:[],isLoading:!1,error:null},$z=Pe({name:"verbTenses",initialState:Pz,reducers:{},extraReducers:e=>{e.addCase(au.pending,t=>{t.isLoading=!0}).addCase(au.fulfilled,(t,n)=>{t.tenseNames=n.payload,t.isLoading=!1}).addCase(au.rejected,(t,n)=>{t.error=n.error.message}).addCase(lu.pending,t=>{t.isLoading=!0}).addCase(lu.fulfilled,(t,n)=>{const{_id:r}=n.payload;console.log("in Slice",n.payload),console.log("id in Slice",r),t.selectedTenseCache[r]=n.payload,t.selectedTense=n.payload,t.isLoading=!1}).addCase(lu.rejected,(t,n)=>{t.error=n.error.message})}}),Rz=$z.reducer;f.div`
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
`;f(qe)`
  width: auto;
`;f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  font-size: 1.4rem;
  background-color: ${e=>e.theme.secondaryBackground};
  color: ${e=>e.theme.primaryText};
`;f.div`
  padding: 1rem;
  font-size: 1.4rem;

  border: 2px solid grey;
`;const zz=f.p`
  padding: 0.4rem;

  &:before {
    content: ${e=>e.theme.background==="#000000"?'"🔹"':'"🔸"'};
  }
`;f(zz)`
  font-size: 1.1rem;
  color: ${e=>e.theme.secondaryText};
  text-indent: 3rem;
  &:before {
    content: "- ";
  }
`;const Nz=f.li`
  font-style: italic;
  padding: 0.4rem;
  font-size: 1.2rem;
`;f(Nz)`
  font-size: 1rem;
  list-style: none;
  color: ${e=>e.theme.secondaryText};
  &:before {
    content: "- ";
  }
`;const Bz=()=>{Ue(),S.useState(null);const e=ne(),t=W(i=>i.grammer.grammer)||[],n=W(i=>i.grammer.isLoading),r=W(i=>i.grammer.error);return S.useEffect(()=>{e(Qs())},[e]),n?l.jsx(Be,{}):r?l.jsx(To,{error:r}):l.jsxs(Iz,{children:[t&&t.map(i=>{const{_id:o}=i;return console.log("topics",i),l.jsx(Hn,{to:`/grammar-basic/${o}`,children:l.jsx(Lz,{topics:i})},o)}),l.jsx("div",{})," "]})},Iz=f.div`
  display: flex;
  /* overflow-x: hidden; */
  align-items: center;
  justify-content: center;
  /* margin: 0 1rem; */
  flex-wrap: wrap;
  background-color: ${e=>e.theme.primaryBackground};
  color: ${e=>e.theme.primaryText};
  h1 {
    text-align: center;
  }
`,ew=f.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* outline: 2px solid black; */

  width: 99%;

  @media (min-width: 768px) and (max-width: 920px) {
  }
  @media (min-width: 577px) and (max-width: 767px) {
  }

  @media (min-width: 393px) and (max-width: 576px) {
  }
  @media (max-width: 392px) {
  }
`,tw=f.div``,nw=f.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* outline: 2px solid red; */
  margin: 0 auto;

  width: 100%;

  border-bottom: 3px solid black;

  margin-bottom: 2rem;
  @media (min-width: 768px) and (max-width: 920px) {
    /* margin: 0 0.2rem; */
    width: 100%;
  }
`,Tp=f.div`
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
  @media (max-width: 320px) {
    width: 240px;
  }
`,rw=f.div`
  display: flex;
  flex-direction: column;
  background-color: ${e=>e.theme.primaryBackground};
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
    /* max-width: 99%; */
  }
  @media (min-width: 392px) and (max-width: 768px) {
    width: 98%;
  }
  @media (max-width: 392px) {
    width: 300px;
  }
  @media (max-width: 320px) {
    width: 240px;
  }
`,iw=f(Tp)`
  display: flex;
  /* outline: 2px solid red; */
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
  p {
    /* outline: 2px solid blue; */

    display: flex;
  }
`,Fz=f.div`
  max-width: 100%;

  display: flex;
  align-items: center;
  margin-right: 3rem;
  margin-left: auto;
  & > img {
    width: ${e=>e.width||"1.2rem"};
    height: ${e=>e.height||"1.2rem"};
    cursor: pointer;

    filter: ${e=>e.isActive?"black":"invert(-150%)"};
    transition: transform 0.3s ease-in-out;
    transform: ${e=>e.isActive?"scale(1.1)":"scale(1)"};
  }
`,Dz=()=>{const{BasicGrammerTopicId:e}=_n();Ue();const{handleListen:t,isActiveStates:n}=_e(),{t:r,i18n:i}=q(),o=i.language==="ka";ne();const s=W(k=>k.grammer.grammer.find(A=>A._id===e))||[],a=W(k=>k.grammer.isLoading),c=W(k=>k.grammer.error);if(a)return l.jsx(Be,{});if(c)return l.jsx("p",{children:c.message});if(!s)return;const{title:{titleFr:u,titleEng:d,titleGeo:p},description:{descriptionFr:h,descriptionEng:g,descriptionGeo:y},example:{exampleFr:v,exampleEng:b,exampleGeo:x}}=s,m=o?y:g,w=o?x:b;return l.jsxs(ew,{children:[l.jsx(tw,{children:l.jsx("h2",{children:u})}),l.jsxs(nw,{children:[l.jsx("h2",{children:r("Qu'est-ce que c'est ?")}),h.map((k,A)=>l.jsxs(Tp,{children:[k.split(`
`).map((C,j)=>l.jsx("p",{children:C},j)),l.jsx("span",{children:m[A]})]},A))]}),l.jsxs(rw,{children:[l.jsx("h2",{children:r("Examples")}),v.map((k,A)=>l.jsxs(iw,{children:[l.jsxs("div",{children:[l.jsx("p",{children:k})," ",l.jsx(Fz,{onClick:t(k),isActive:n[A],children:l.jsx(nt,{})})]}),l.jsx("span",{children:w[A]})]},A))]})]})},Mz=()=>l.jsx(_z,{children:l.jsx(Uz,{children:"There are no words yet."})}),_z=f.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: #f7f7f7;
  border-radius: 8px;
  margin: 20px 0;
`,Uz=f.p`
  font-size: 18px;
  color: #333;
`,Wz=({selectedFlashcards:e})=>{console.log("selectedFlashcards",e);const{handleListen:t,isActiveStates:n}=_e(),[r,i]=S.useState(0),[o,s]=S.useState([]),[a,c]=S.useState([]),[u,d]=S.useState(""),[p,h]=S.useState(null),[g,y]=S.useState([]);S.useEffect(()=>{if(e.length>0&&r<e.length){const A=e[r],C=A.split("");console.log("lettersAndSpaces",C),d(A),console.log("flashcard",A),C.sort(()=>Math.random()-.5),y([...C]),h(A),c([])}},[e,r]);const v=A=>{s(o.filter(C=>C!==A)),c(a.filter((C,j)=>j!==A)),y([...g,a[A]])},b=A=>{s([...o,A]),c([...a,g[A]]),y(g.filter((C,j)=>j!==A))},x=()=>{s([]),c([]),y(u.split(""))},m=a.join("")===u,w=o.length===u.length,k=()=>{s([]),c([]),r+1<e.length&&i(A=>A+1)};return l.jsxs(Hz,{children:[l.jsx(qz,{onClick:t(p),children:"Play the word"}),l.jsxs(Vz,{children:[l.jsx(ow,{children:a.map((A,C)=>l.jsx(Qz,{onClick:()=>v(C),disabled:a.length>=u.length,selected:!0,children:A},C))}),l.jsx(Gz,{children:g.map((A,C)=>l.jsx(sw,{onClick:()=>b(C),selected:o.includes(C),children:A},C))})]}),w&&!m&&l.jsx("div",{children:"Incorrect! Try again."}),m&&l.jsxs("div",{children:["Correct! You assembled the word.",r<e.length-1&&l.jsx(qe,{onClick:k,children:"Next"}),r===e.length-1&&l.jsxs(Kz,{children:[l.jsx("p",{children:"Congratulations! You have completed all the words. "}),l.jsx(Yz,{onClick:x,children:"Restart"})]})]})]})},Hz=f.section`
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
`,Vz=f.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,ow=f.div`
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
`,sw=f.button`
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
`,Qz=f(sw)`
  border: ${e=>e.selected?"2px solid blue":"none"};
  color: ${e=>e.selected?"#e2ebf3dd":"#8ae8ff"};
  background-color: ${e=>e.selected?"#0055a4dd":"none"};
`,Gz=f(ow)`
  width: 100%;
  height: 10rem;
  color: black;
  background-color: #0055a4dd;
`,qz=f(qe)`
  color: white;
  background-color: #023668dd;
  margin: 1rem;
`,Kz=f.div`
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
`,Yz=f(qe)`
  background-color: #f1f7fcdd;
  color: #ff4e07;
  &:hover {
    background-color: #ff4e07;
    color: #f1f7fcdd;
  }
`,Pg=["apple","dog","jump","book","run","cat","tree","play","car","eat","flower","swim"],Jz=({FrenchWord:e,secondLanguageWord:t})=>{const[n,r]=S.useState(0),[i,o]=S.useState(0),[s,a]=S.useState({}),[c,u]=S.useState(0),[d,p]=S.useState(!1),[h,g]=S.useState(!1);S.useEffect(()=>{y()},[i,n]);const y=()=>{if(h){a({});return}if(e.length===0||i>=e.length){g(!0);return}const b=e[i],x=t[i],m=[x];for(;m.length<2;){const w=Math.floor(Math.random()*Pg.length),k=Pg[w];m.includes(k)||m.push(k)}m.sort(()=>Math.random()-.5),a({question:b,options:m,correctOption:x})},v=b=>{d||p(!0),b===s.correctOption&&u(x=>x+1),setTimeout(()=>{i+1<e.length?o(x=>x+1):(o(0),r(x=>x+1),g(!0))},800)};return l.jsxs(Xz,{children:[l.jsxs(eN,{children:[l.jsx("h2",{children:"Topic Title"}),l.jsx(Zz,{children:s.question&&l.jsx(tN,{children:s.question})}),h?l.jsxs(iN,{children:[c===e.length?l.jsxs("div",{children:[l.jsx("h2",{children:"Congratulations! You mastered all words."}),l.jsx("ul",{children:e.map(b=>l.jsx("li",{children:b}))})]}):l.jsxs("h2",{children:["Quiz completed. You scored ",c," out of ",e.length,"."]}),l.jsx(oN,{onClick:()=>window.location.reload(),children:c===e.length?"Play Again":"Retry"})]}):Array.isArray(s.options)&&s.options.map((b,x)=>l.jsx(nN,{onClick:()=>v(b),isSelected:s.selectedOption===b,isCorrect:b===s.correctOption,children:b},x))]}),l.jsxs(rN,{children:["Score: ",c]})]})},Xz=f.div`
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
`,Zz=f.div``,eN=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
`,tN=f.div`
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
`,nN=f.div`
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
`,rN=f.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;f.button`
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
`;f.button`
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
`;const iN=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 250px;
`,oN=f.button`
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
`,sN=()=>{const{t:e}=q(),t=ne(),n=W(m=>m.flashcards.flashcards),[r,i]=S.useState([]),[o,s]=S.useState(!1),[a,c]=S.useState(null),u=S.useRef(null),{handleListen:d,isActiveStates:p}=_e(),h=m=>{const w=n[m];r.some(k=>k.word===w.word)?i(r.filter(k=>k.word!==w.word)):i([...r,w])},g=m=>{t(u1(m))},y=()=>{t(iO())},v=()=>{if(console.log("handleShowTrainer called"),u.current){s(!0);const m=3*16,w=u.current.offsetTop-m;window.scrollTo({top:w,behavior:"smooth"})}},b=()=>{i([...n]),v()},x=r.map(m=>m.word);return l.jsx(aN,{children:n.length===0?l.jsx(Mz,{}):l.jsxs(lN,{children:[n.map((m,w)=>{const{word:k,frenchExamples:A,secondLanguage:C,secondLanguageExamples:j}=m;return l.jsxs(cN,{children:[l.jsxs("p",{children:[l.jsx(uN,{children:k}),l.jsx(dN,{children:C})]}),l.jsxs(pN,{onClick:d(k),children:[l.jsx(nt,{}),l.jsx(fN,{onClick:()=>g(w),src:d1,alt:"FlashcardIcon"}),l.jsxs(hN,{children:[l.jsx(mN,{type:"checkbox",id:`flashcard-${w}`,checked:r.includes(m),onChange:()=>h(w)}),l.jsx("label",{htmlFor:`flashcard-${w}`})]})]})]},w)}),l.jsxs(yN,{children:[l.jsxs(xN,{onClick:b,children:[" ",e("Tout sélectionner")]}),l.jsx(aw,{onClick:y,children:e("Supprimer tout")})]}),r.length===0&&l.jsxs(wN,{children:[e("Aucun mot sélectionné. Veuillez sélectionner des mots pour choisir le mode entraîneur.")," "]}),l.jsxs(vN,{onClick:v,children:[l.jsx("h2",{children:e("Exercices")}),l.jsx(cu,{onClick:()=>c("blurry"),children:"Blurry Trainer"}),l.jsx(cu,{onClick:()=>c("wordJumble"),children:"Word Jumble Trainer"}),l.jsx(cu,{onClick:()=>c("FrQuizTrainer"),children:"Quiz"})]}),l.jsxs(bN,{children:[a==="blurry"&&r.length>0&&l.jsx(uu,{ref:u,children:l.jsx(J1,{selectedFlashcards:r})}),a==="wordJumble"&&r.length>0&&l.jsx(uu,{ref:u,children:l.jsx(Wz,{selectedFlashcards:x})}),a==="FrQuizTrainer"&&r.length>0&&l.jsx(uu,{ref:u,children:l.jsx(Jz,{FrenchWord:r.map(m=>m.word),secondLanguageWord:r.map(m=>m.secondLanguage)})})]})]})})},aN=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  padding: 0 0.1rem;
  margin: 0;
  overflow-x: hidden;
  @media (min-width: 767px) and (max-width: 913px) {
    max-width: 92%;
  }
  @media (min-width: 577px) and (max-width: 767px) {
    max-width: 98%;
  }
  @media (min-width: 393px) and (max-width: 576px) {
    width: 100%;
  }
  @media (min-width: 359px) and (max-width: 393px) {
    width: 95%;
  }
  @media (min-width: 300px) and (max-width: 359px) {
    width: 80%;
  }
  @media (max-width: 300px) {
    width: 70%;
  }
`,lN=f.div`
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
`,cN=f.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 4rem;
  max-width: 95%;

  border-bottom: 3px solid ${e=>e.theme.primaryText};
  border-right: 2px solid ${e=>e.theme.primaryText};
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
    /* outline: 1px solid red; */
  }
  @media (min-width: 359px) and(max-width: 392px) {
    width: 100%;
    /* min-height: 3rem; */
    /* outline: 1px solid red; */
  }
  @media (min-width: 280px) and(max-width: 358px) {
    width: 70%;
    /* min-height: 3rem; */
    outline: 1px solid red;
  }
`,uN=f.span`
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
`,dN=f.span`
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
`,aw=f.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  width: 10rem;
  font-size: 1.2rem;
  font-weight: bold;

  cursor: pointer;
  background: ${e=>e.theme.highlight3};
  color: ${e=>e.theme.primaryText};

  &:hover {
    background: ${e=>e.theme.primaryText};
    color: ${e=>e.theme.highlight3};
  }

  @media (max-width: 576px) {
    width: 8rem;
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
  }
`,fN=f.img`
  margin-left: auto;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 1.8rem;

  height: 1.8rem;
  img {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    filter: ${e=>e.isWordInFlashcards?"":"invert(50%)"};
    transition: transform 0.3s ease-in-out;
    transform: ${e=>e.isWordInFlashcards?"scale(1.1)":"scale(1)"};
    @media (min-width: 767px) and (max-width: 920px) {
      width: 1.8rem;
      height: 1.8rem;
    }
    @media (min-width: 577px) and (max-width: 767px) {
      width: 1.6rem;
      height: 1.6rem;
    }
    @media (min-width: 393px) and (max-width: 576px) {
      width: 1.4rem;
      height: 1.4rem;
    }
    @media (max-width: 392px) {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`,pN=f.div`
  display: flex;
  align-items: center;

  gap: 1rem;

  text-align: center;
  margin-left: auto;
  margin-right: 1rem;
  @media (max-width: 576px) {
    margin-right: 0;
    gap: 0.5rem;
  }
`,hN=f.div`
  /* width: 5rem; */
`,mN=f.input`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  @media (max-width: 576px) {
    width: 1rem;
    height: 1rem;
  }
`,gN=f(aw)`
  background: ${e=>e.theme.highlight2};
  color: black;

  &:hover {
    background: ${e=>e.theme.primaryBackground};
    color: ${e=>e.theme.highlight2};
  }
`,xN=f(gN)``,yN=f.div`
  display: flex;
  justify-content: space-around;
  margin: 2rem;
  gap: 1rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${e=>e.theme.highlight2};
  @media (max-width: 576px) {
    /* width: 8rem;
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem; */
  }
`,vN=f.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 100%;
`,cu=f.button`
  display: flex;
  text-align: center;
  justify-content: center;
  overflow-x: hidden;
  width: 70%;
  padding: 1rem;
  margin: 1rem 0;
  font-size: ${e=>e.theme.medium};
  background: ${e=>e.theme.highlight2};

  cursor: pointer;
`,wN=f.div``,bN=f.div`
  /* outline: 1px solid blue; */
  width: 100%;
  margin-top: 2rem;
  overflow-x: hidden;
  display: flex;
  align-items: center;
`,uu=f.div`
  display: flex;
  align-items: center;
  display: flex;
  /* outline: 1px solid red; */
  overflow-x: hidden;
  width: 97%;
`,SN=({description:e,highlight:t,link:n})=>l.jsxs(CN,{children:[l.jsxs(lw,{children:[e,l.jsx(Hn,{to:n,children:l.jsx(qe,{children:"Explore"})})]}),l.jsx(kN,{children:l.jsx("img",{src:t,alt:"highlight"})})]}),lw=f.div`
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
  animation: ${AL} 0.3s ease-in-out;
`,kN=f.div`
  cursor: pointer;
  width: 360px;

  img {
    width: 100%;
    height: 100%;
  }
`,CN=f.div`
  display: flex;
  position: relative;
  transition: filter 0.3s, opacity 0.3s; /* Add transitions for smooth animations */
  background-color: ${e=>e.theme.secondaryBackground};

  &:hover ${lw} {
    display: block;
  }
`,AN=[{description:"Test your vocabulary knowledge with QuizPictures. Identify correct words based on images and improve your language skills.",highlight:"/images/screenShots/games/pictureQuiz.png",link:"/quiz-pictures"},{description:"SentenceBuilderEx is a game that helps you practice building sentences. Select words to construct accurate sentences and enhance your language abilities.",highlight:"/images/screenShots/games/sentenceBuilder.png",link:"/sentence-builder-Ex"},{description:"exercise-article is a game that helps you practice french articles.",highlight:"/images/screenShots/games/LeLa.png",link:"/vocabulary-topics/exercise-article"}],jN=()=>l.jsx(EN,{children:AN.map(e=>{const{description:t,highlight:n,link:r}=e;return l.jsx(SN,{link:r,description:t,highlight:n})})}),EN=f.div`
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
`,TN=()=>l.jsx(LN,{children:l.jsx(ON,{children:"Content coming soon..."})}),LN=f.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
`,ON=f.p`
  font-size: 1.5rem;
  color: ${e=>e.theme.primaryText};
`,PN={fr:[{title:"Leçons de grammaire de base",question:"Voulez-vous apprendre les bases de la grammaire ?",description:"Explorez les leçons fondamentales de grammaire pour construire une base solide.",link:"basic-grammar-lessons"},{title:"Verbes",question:"Savez-vous comment conjuguer les verbes dans différents temps ?",description:"Explorez la conjugaison des verbes avec des traductions et des exemples dans divers temps et modes.",link:"verb"},{title:"article",question:"Voulez-vous en savoir plus sur les articles définis et indéfinis ?",description:"Découvrez l'usage et les règles des articles définis et indéfinis dans différents contextes.",link:"article"},{title:"Pronoms",question:"Souhaitez-vous explorer les différents types de pronoms ?",description:"Plongez dans le monde des pronoms et apprenez-en davantage sur leur rôle dans les phrases.",link:"pronom"},{title:"Jeux",question:"Êtes-vous prêt(e) à jouer à des jeux linguistiques ?",description:"Pratiquez vos compétences linguistiques avec des jeux interactifs.",link:"games"},{title:"Adverbes",question:"Êtes-vous curieux(se) de connaître l'utilisation des adverbes ?",description:"Découvrez comment les adverbes modifient les verbes, les adjectifs et d'autres adverbes pour fournir plus d'informations.",link:"adverbe"},{title:"Adjectifs",question:"Êtes-vous prêt(e) à découvrir les différents types d'adjectifs et leur utilisation ?",description:"Explorez les mots descriptifs qui enrichissent votre langage et expriment diverses qualités.",link:"adjectif"},{title:"Conjugaison",question:"Êtes-vous curieux(se) d'explorer la conjugaison des verbes dans différents temps et modes ?",description:"Apprenez comment les verbes changent en fonction du temps, du mode et du sujet, et pratiquez leur conjugaison.",link:"conjugaison"},{title:"Prépositions",question:"Êtes-vous prêt(e) à apprendre comment les prépositions indiquent les relations entre les mots ?",description:"Comprenez comment les prépositions aident à exprimer la position, la direction, le temps, etc.",link:"preposition"},{title:"Conjonctions",question:"Souhaitez-vous comprendre comment les conjonctions relient les mots et les propositions ?",description:"Explorez le rôle des conjonctions dans la liaison des mots, des phrases ou des propositions.",link:"conjonction"}],en:[{title:"Basic Grammar Lessons",question:"Do you want to learn the basics of grammar?",description:"Explore fundamental grammar lessons to build a strong foundation.",link:"/grammar/basic-grammer-lessons"},{title:"Verbs",question:"Do you know how to conjugate verbs in different tenses?",description:"Explore verb conjugation with translations and examples in various tenses and moods.",link:"/grammar/verbs"},{title:"Articles",question:"Would you like to learn about definite and indefinite articles?",description:"Discover the usage and rules of definite and indefinite articles in different contexts.",link:"/Content-Coming-Soon"},{title:"Games",question:"Ready to play some language games?",description:"Practice your language skills with interactive games.",link:"/games"},{title:"Pronouns",question:"Want to explore different types of pronouns?",description:"Dive into the world of pronouns and learn about their roles in sentences.",link:"/Content-Coming-Soon"},{title:"Adverbs",question:"Curious about the usage of adverbs?",description:"Discover how adverbs modify verbs, adjectives, and other adverbs to provide more information.",link:"/Content-Coming-Soon"},{title:"Adjectives",question:"Are you ready to discover different types of adjectives and their usage?",description:"Explore descriptive words that enhance your language and express various qualities.",link:"/Content-Coming-Soon"},{title:"Conjugation",question:"Interested in exploring verb conjugation in various tenses and moods?",description:"Learn how verbs change based on tense, mood, and subject, and practice conjugating them.",link:"/Content-Coming-Soon"},{title:"Prepositions",question:"Ready to learn how prepositions indicate relationships between words?",description:"Understand how prepositions help express location, direction, time, and more.",link:"/Content-Coming-Soon"},{title:"Conjunctions",question:"Do you want to understand how conjunctions connect words and clauses?",description:"Explore the role of conjunctions in joining words, phrases, or clauses together.",link:"/Content-Coming-Soon"}],ka:[{title:"გრამატიკის საბაზისო გაკვეთილები",question:"გინდა დაიწყო გრამატიკის შესწავლა?",description:"მაშინ ეს განყოფილება შენთვისაა. აქ თავმოყრილია გრამატიკის საბაზისო თემები.",link:"/grammar/basic-grammar-lessons"},{title:"ზმნები",question:"იცით როგორ აუღლოთ ზმნები სხვადასხვა დროებში?",description:"ზმნების უღლება სხვადასხვა დროს.",link:"/grammar/verbs"},{title:"არტიკლები",question:"იცით რა არი განსაზღვრული და განუსაზღვრელი არტიკლები..",description:"არტიკლები",link:"/Content-Coming-Soon"},{title:"ნაცვალსახელები",question:"გსურთ გაიგოთ სხვადასხვა ტიპების ნაცვალსახელები?",description:"შეიძლება გაიმოიცანით პრონომების როლი წარმოადგენს წინადადების პროდუქტებში.",link:"/Content-Coming-Soon"},{title:"თამაშები",question:"გახდეთ ენის თამაშები?",description:"გააკეთეთ ენის კომუნიკაციის უნარი თამაშების საშუალებით.",link:"/games"},{title:"ადვილები",question:"ხართ კიდევ კურიოზი ადვილების გამოყენების შესახებ?",description:"გაიმოიცანით, როგორ შეიძლება ადვილებები შეცვალონ ხალხები, ადგილები და დროები.",link:"/Content-Coming-Soon"},{title:"ადიქტივები",question:"გყავთ ნამდვილი განცხადების ადიქტივების გამოყენების შესახებ?",description:"აღწერეთ როგორ იმუშავებენ ადიქტივები ქართველებს და როგორ შეიძლება მათ გამოყენება.",link:"/Content-Coming-Soon"},{title:"Conjugation",question:"Interested in exploring verb conjugation in various tenses and moods?",description:"Learn how verbs change based on tense, mood, and subject, and practice conjugating them.",link:"/Content-Coming-Soon"},{title:"Prepositions",question:"Ready to learn how prepositions indicate relationships between words?",description:"Understand how prepositions help express location, direction, time, and more.",link:"/Content-Coming-Soon"},{title:"Conjunctions",question:"Do you want to understand how conjunctions connect words and clauses?",description:"Explore the role of conjunctions in joining words, phrases, or clauses together.",link:"/Content-Coming-Soon"}]},$N=()=>{Ue();const{t:e,i18n:t}=q(),n=t.language,r=PN[n]||[];return l.jsxs(t1,{children:[l.jsx("h1",{children:e("Bienvenue dans la section Grammaire")}),l.jsx(i1,{children:e("Découvrez différents sujets de grammaire pour améliorer vos compétences linguistiques")}),l.jsx(n1,{children:r.map((i,o)=>l.jsxs(r1,{index:o,children:[l.jsxs("div",{children:[l.jsx("h3",{"aria-label":"Topic Title",children:e(i.title)}),l.jsx("h4",{"aria-label":"Topic Question",children:e(i.question)}),l.jsx("p",{"aria-label":"Topic Description",children:e(i.description)})]}),l.jsx(zN,{to:i.link,children:l.jsx(RN,{children:e("Explorer")})},o)]}))})]})},RN=f(qe)`
  margin-bottom: auto;
  width: 10rem;
`,zN=f(Hn)`
  margin-top: auto;
  margin-left: auto;
  margin-bottom: 1rem;
  @media (max-width: 376px) {
    margin-right: 1rem;
  }
  @media (max-width: 300px) {
    margin-right: 5rem;
  }
`,NN=()=>{const{t:e,i18n:t}=q(),n=t.language;Ue();const r=$1[n]||[];return l.jsxs(t1,{children:[l.jsx("h1",{children:e("Bienvenue dans la section Vocabulaire")}),l.jsx(i1,{children:e("Explorez différents sujets de vocabulaire pour améliorer vos compétences linguistiques")}),l.jsx(n1,{children:r.map((i,o)=>l.jsxs(r1,{children:[l.jsxs("div",{children:[l.jsx("h3",{"aria-label":"Topic Title",children:e(i.title)}),l.jsx("h4",{"aria-label":"Topic Question",children:e(i.question)}),l.jsx("p",{"aria-label":"Topic Description",children:e(i.description)})]}),l.jsx(IN,{to:i.link,children:l.jsx(BN,{children:e("Explore")})},o)]}))})]})},BN=f(qe)`
  margin-bottom: auto;
  width: 10rem;
  @media (max-width: 576px) {
    width: 6rem;
    font-size: 1.2rem;
  }
`,IN=f(Hn)`
  margin-top: auto;
  margin-left: auto;
  margin-bottom: 1rem;
  @media (max-width: 376px) {
    margin-right: 1rem;
  }
  @media (max-width: 300px) {
    margin-right: 5rem;
  }
`,FN=()=>{Ue();const{TopicId:e}=_n(),t=Yf(),{handleListen:n,isActiveStates:r}=_e(),{t:i,i18n:o}=q(),s=o.language==="ka",a=(C,j)=>{for(const T in C)if(C.hasOwnProperty(T)&&Array.isArray(C[T])){const O=C[T].find(P=>P._id===j);if(O)return O}return null},c=W(C=>a(C.grammer.topicsByAspect,e)),u=W(C=>C.grammer.isLoading),d=W(C=>C.grammer.error);if(S.useEffect(()=>{c==null&&t("/grammar/basic-grammar-lessons")},[t,c]),u)return l.jsx(Be,{});if(d)return l.jsx(To,{});if(!c&&c===null)return null;const{title:{titleFr:p,titleEng:h,titleGeo:g},description:{descriptionFr:y,descriptionEng:v,descriptionGeo:b},example:{exampleFr:x,exampleEng:m,exampleGeo:w}}=c,k=s?b:v,A=s?w:m;return l.jsxs(ew,{children:[l.jsx(tw,{children:l.jsx("h1",{children:p})}),l.jsxs(nw,{children:[l.jsx("h2",{children:i("Qu'est-ce que c'est ?")}),y.map((C,j)=>l.jsxs(Tp,{children:[l.jsx("p",{children:C}),l.jsx("span",{children:k[j]})]},j))]}),l.jsxs(rw,{children:[l.jsx("h2",{children:i("Examples")}),x.map((C,j)=>l.jsxs(iw,{children:[l.jsx("div",{children:l.jsxs("p",{children:[C,C.length!==0&&l.jsx(DN,{onClick:n(C),isActive:r[j],children:l.jsx(nt,{})})]})}),l.jsx("span",{children:A[j]})]},j))]})]})},DN=f.span`
  display: flex;
  align-items: center;
`,MN=({topics:e})=>{const{i18n:t}=q(),n=t.language==="ka";if(Ue(),!e)return null;const{title:{titleFr:r,titleEn:i,titleGeo:o}}=e,s=n?o:i;return l.jsxs(_N,{children:[l.jsx("h2",{children:r}),l.jsx("h3",{children:s})]})},_N=f.div`
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
`,UN=()=>{Ue();const{aspect:e}=_n(),t=ne(),n=W(s=>s.grammer.topicsByAspect)||{},r=W(s=>s.grammer.isLoading),i=W(s=>s.grammer.error),o=n[e]||[];return S.useEffect(()=>{t(qs(e))},[t,e]),r?l.jsx(Be,{}):i?l.jsx(To,{error:i}):l.jsx("div",{children:o&&(o==null?void 0:o.map(s=>l.jsxs(Hn,{to:`/grammar-topics/${s._id}`,children:[l.jsx(MN,{topics:s})," "]},s._id)))})},WN=({children:e})=>l.jsxs(HN,{children:[l.jsx(VN,{children:l.jsx(OP,{})}),l.jsxs(QN,{children:[e,l.jsx(LC,{})]})]}),HN=f.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  /* border: 2px solid green; */
`,VN=f.div`
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
`,QN=f.div`
  flex: 1;
  padding: 1rem;
  /* border: 2px solid black; */
`,GN=()=>{Ue(),xi();const{t:e}=q(),t=ne(),n=Yf(),r=W(d=>d.auth.isLoading),i=W(d=>d.auth.isAuthenticated);W(d=>d.auth.error);const[o,s]=S.useState(""),[a,c]=S.useState(""),u=async d=>{d.preventDefault();const p={email:o,password:a};try{await t(Ws(p)),n("/")}catch(h){console.log("error",h)}};return l.jsxs(O1,{children:[l.jsx("h2",{children:e("Connexion")}),l.jsxs("form",{onSubmit:u,children:[l.jsxs(Zi,{children:[l.jsx("input",{type:"email",placeholder:e("E-mail"),value:o,onChange:d=>s(d.target.value)}),l.jsx("label",{htmlFor:""}),l.jsx("img",{src:L1,alt:"emailIcon"})]}),l.jsxs(Zi,{children:[l.jsx("input",{type:"password",placeholder:e("Mot de passe"),value:a,onChange:d=>c(d.target.value)}),l.jsx("img",{src:T1,alt:"passwordIcon"})]}),l.jsx(qN,{children:l.jsx(SP,{to:"/",children:e("Mot de passe oublié?")})}),l.jsx(P1,{type:"submit",disabled:r,children:r?`${e("Chargement")}...`:e("Connexion")}),l.jsxs(Ep,{children:[" ",e("Pas de compte?"),l.jsxs(Yl,{to:"/register",children:[e("Inscrivez-vous")," "]})]}),i&&l.jsx("p",{children:"Login successful"})]})]})},qN=f.div`
  text-align: left;
  margin: 1rem 0 10px 5px;
`;f.div``;f.div`
  display: flex;
  align-items: center;
  border-radius: 25px;
  background-color: ${e=>e.theme.facebookBack};
  color: ${e=>e.theme.facebookText};
  outline: 5px solid rgb(166, 185, 226);
  /* border-radius: 2px; */
  width: 17.6rem;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 1rem;
  img {
    max-width: 2.8;
    max-height: 2.8rem;
    padding: 0.4rem;
    background-color: ${e=>e.theme.facebookLogo};
    border-radius: 25px 0 0 25px;
  }
  span {
    display: flex;
    padding: 0.1rem;
    font-size: 1.08rem;
    font-weight: bold;
    margin-left: 0.4rem;
  }
`;f.div`
  margin-top: 1rem;
  width: 18rem;
  cursor: pointer;

  img {
    width: 18rem;
    border-radius: 25px;

    /* max-height: 100%; */
  }
`;const KN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABf0lEQVR4nO2XO07DQBBAQ8sFoIFLhEvQ8mnCAaiIKJAyEwo6IgpEQELiANCk4QyIaxCizCQI5BkfAJCMZhOLyLKRQ9ZO45G2yGqc93Z3xp9arayIohUkOQKWF2B9A9abs/F4tUS4XgPJF5B0gOUYSQRZbsuFj3Q/ngaWJpIES4FbIOk5sgyWA2fZc/MszdrJ4GMdSa+QtLfwYLk/HelGDEeSb6SwMQtvsewiyyeQ3Fme2TwDCfkSaI3Dzdxwi7TEf8c8K48DWaPkGZUG9ybwB9wKLhPuRWAR+MICOeFWmK47fAsAaTetz+23zZucSQLLg3WIVwEYBnW7NrnyJNwxpm3qV4DlAlheZ88268wLEUCWvkn8QsJGcuWFCbSHwZbbftbDeCfc/5B206rduwCQdKYCkcGdxDCoZ+V7F0CWHYPaTuTKL6IG5olKAKsjoKoItWrDXnUjwsxbMSkD66N7kShiUHjgvjtYLlMF2qzbk4TJ0837sPdFlifsv6+lCfwAlMR0gJgCus0AAAAASUVORK5CYII=",YN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABeElEQVR4nO2Xz0rDQBDG49W7Op9gX8K+hFf/XOoDeLL4FIoH0QqCD6CXXnwEKTPFi4+gFRS86BN0FlZmTaSGRFq7SS8Z2EOW2Xy/yczsZpOkJvM+WXKCQ2U8qeBdmS79I5ZrE1emngpUhU4c40iZPlVwVau4Y9rL5t0QXRX6WIi4mQodK+NlMeJD2g3zQ3QTf79CKnTuBP15hzLd+MH6xoS4c4xOLvIdZYxVcG1+iRNiFXqNBsBoTS1uVuT4X5sp8sycwOdzVJt4LIA/xa3gysRjAMwlPi/A1OKMlnVHdAAVuijqc3sO2y5TL0AK3VqHRAUYMza/1/6OPC+eaoQ2jQqgTKcqGE3mtizn1QAIng3i5z2MTj7yygDGQu103UH2JezZaqKo2qMDqJ3pti6IYmQQVhNl/vEBmLaDqFB7Gv9KamAWawBckwJpihBNG/abjciVbcXK9OaE7mw7rmQI9u3eoYyzMoCt9GISTrfYI/1fHPiH1bUigC/d4fba72lbkgAAAABJRU5ErkJggg==",JN=()=>{var b,x,m;const{t:e}=q(),t=ne(),r=xi()===hl?KN:YN,[i,o]=S.useState(""),[s,a]=S.useState(!1),c=W(w=>w.auth.auth)||{},u=(b=c.user)==null?void 0:b.username,d=(x=c.user)==null?void 0:x.role,p=(m=c.user)==null?void 0:m._id,h=W(w=>w.user.user),g=h.updatedUser;S.useEffect(()=>{h&&o(h.username)},[h]);const y=()=>{const w=i.trim();if(w.length<3){alert(e("Pseudonyme doit comporter au moins 3 caractères"));return}t(Vs({id:p,newUsername:w})),o(""),a(!1)},v=()=>{t(qr(p))};return l.jsxs(XN,{children:[l.jsxs(ZN,{children:[l.jsxs(eB,{children:[l.jsx("h5",{children:e("Nom")}),l.jsxs("p",{children:[s?l.jsx(iB,{type:"text",placeholder:"New username",value:i,onChange:w=>o(w.target.value)}):g?g.username:u,s?l.jsx("button",{onClick:y,children:"save"}):l.jsx(tB,{src:r,alt:"Edit Icon",onClick:()=>a(!0)})]})]}),l.jsxs(nB,{children:[" ",l.jsxs("span",{children:[e("Statut"),":"]}),l.jsx("span",{children:d})]})]}),l.jsx(jp,{handleLogout:v}),l.jsx(rB,{to:"/vocabulary/flashcards",children:e("Entraîneur de cartes mémoire")})]})},XN=f.div`
  background-color: ${e=>e.theme.secondaryBackground};
  color: ${e=>e.theme.primaryText};
  margin: 2rem;
  padding: 20px;
  width: 350px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px rgba(20, 12, 12, 0.2);
`,ZN=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,eB=f.h2`
  display: flex;

  gap: 1rem;
  margin-bottom: 10px;
  h5 {
    display: flex;
    align-items: center;
    text-align: center;

    font-size: 1rem;
    margin: 0;
    &::after {
      content: ":";
    }
  }
  p {
    display: flex;
  }
`,tB=f.img`
  width: 1rem;
  height: 1rem;

  cursor: pointer;
`;f.p`
  font-size: 18px;
  margin-bottom: 10px;
`;const nB=f.p`
  font-size: 16px;
  margin-bottom: 20px;
  gap: 1rem;
  span {
    margin-left: 0.5rem;
    &:last-child {
      font-weight: bold;
    }
  }
`,rB=f(Oe)`
  display: block;
  text-align: center;
  background-color: #007bff;
  cursor: pointer;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`,iB=f.input``;function oB(){const[e,t]=S.useState(!1),n=()=>{t(i=>!i)},r=e?hl:Mk;return l.jsx(Bk,{theme:r,children:l.jsxs(sB,{children:[l.jsx(jL,{}),l.jsx(qP,{toggleTheme:n,isDarkMode:e}),l.jsxs(PC,{children:[l.jsx(Y,{path:"/",element:l.jsx(x3,{})}),l.jsx(Y,{path:"/courses",element:l.jsx(D5,{})}),l.jsx(Y,{path:"/beginner",element:l.jsx(k5,{})}),l.jsx(Y,{path:"/intermediate",element:l.jsx(T5,{})}),l.jsx(Y,{path:"/advanced",element:l.jsx(L5,{})}),l.jsx(Y,{path:"/book-display",element:l.jsx(M1,{})}),l.jsx(Y,{path:"/books/level/a1-a2",element:l.jsx(b$,{})}),l.jsx(Y,{path:"/books/level/a2-b1",element:l.jsx(kg,{})}),l.jsx(Y,{path:"/books/level/b1-b2",element:l.jsx(A$,{})}),l.jsx(Y,{path:"/register",element:l.jsx(wP,{})}),l.jsx(Y,{path:"/login",element:l.jsx(GN,{})}),l.jsx(Y,{path:"/profile-page",element:l.jsx(JN,{})}),l.jsxs(Y,{element:l.jsx(WN,{}),children:[l.jsx(Y,{path:"/dictionary",element:l.jsx(x1,{})}),l.jsx(Y,{path:"/reading-zone/french-easy-reading",element:l.jsx(kg,{})}),l.jsx(Y,{path:"/reading-zone/french-easy-reading/:bookId",element:l.jsx(nR,{})}),l.jsx(Y,{path:"/grammar",element:l.jsx($N,{})}),l.jsx(Y,{path:"/grammar/basic-grammar-lessons",element:l.jsx(Bz,{})}),l.jsx(Y,{path:"/grammar/:aspect",element:l.jsx(UN,{})}),l.jsx(Y,{path:"/grammar-basic/:BasicGrammerTopicId",element:l.jsx(Dz,{})}),l.jsx(Y,{path:"/grammar-topics/:TopicId",element:l.jsx(FN,{})}),l.jsx(Y,{path:"/vocabulary",element:l.jsx(NN,{})}),l.jsx(Y,{path:"/vocabulary/vocabulary-topics",element:l.jsx(C4,{})}),l.jsx(Y,{path:"/vocabulary-topics/:topicId",element:l.jsx(c4,{})}),l.jsx(Y,{path:"/vocabulary/exercise-article",element:l.jsx(q1,{})}),l.jsx(Y,{path:"/vocabulary/verb-tense-exercise",element:l.jsx(zO,{})}),l.jsx(Y,{path:"/vocabulary/Flashcards",element:l.jsx(sN,{})}),l.jsx(Y,{path:"/vocabulary-topics/exercise-quiz",element:l.jsx(G1,{})}),l.jsx(Y,{path:"/vocabulary/favorite-words",element:l.jsx(m4,{})}),l.jsx(Y,{path:"/vocabulary/sentence-builder",element:l.jsx(v1,{})}),l.jsx(Y,{path:"/games",element:l.jsx(jN,{})}),l.jsx(Y,{path:"/Content-Coming-Soon",element:l.jsx(TN,{})}),l.jsx(Y,{path:"/verbs/:verb",element:l.jsx(_1,{})})]}),l.jsx(Y,{path:"/dialogue-topics",element:l.jsx(q4,{})}),l.jsx(Y,{path:"/dialogue-topics/:dialogueTopicId",element:l.jsx(mz,{})}),l.jsx(Y,{path:"/quiz-pictures",element:l.jsx(zL,{})})]})]})})}const sB=f.section`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 100%;
  overflow-x: hidden;
`,du=ae("allWordsFromDictionary/fetchDictionary",async()=>{try{return(await le.get("/words")).data}catch(e){throw console.log(e),Error("Failed to fetch dictionay")}}),aB={dictionary:[],isLoading:!1,error:null},lB=Pe({name:"allWordsFromDictionary",initialState:aB,reducers:{},extraReducers:e=>{e.addCase(du.pending,t=>{t.isLoading=!0}).addCase(du.fulfilled,(t,n)=>{t.dictionary=n.payload,t.isLoading=!1}).addCase(du.rejected,(t,n)=>{t.error=n.error.message})}}),cB=lB.reducer,uB=c2({reducer:{dialogues:r5,dialogueExercises:G3,sentenceBuilder:p5,newPhrases:c5,grammer:y5,vocabularyTopics:_j,books:Fj,dialogueTopics:M4,dictionary:QL,allWordsFromDictionary:cB,isFavorite:XL,quizData:mL,presentTense:RO,sentences:QO,grammer:jP,flashcards:oO,verbTenses:Rz,user:gP,auth:nP}}),dB={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console&&console[e]&&console[e].apply(console,t)}};class Wa{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,n)}init(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=t||dB,this.options=n,this.debug=n.debug}log(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"log","",!0)}warn(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"warn","",!0)}error(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"error","")}deprecate(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(t,n,r,i){return i&&!this.debug?null:(typeof t[0]=="string"&&(t[0]=`${r}${this.prefix} ${t[0]}`),this.logger[n](t))}create(t){return new Wa(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new Wa(this.logger,t)}}var Vt=new Wa;class Jl{constructor(){this.observers={}}on(t,n){return t.split(" ").forEach(r=>{this.observers[r]=this.observers[r]||[],this.observers[r].push(n)}),this}off(t,n){if(this.observers[t]){if(!n){delete this.observers[t];return}this.observers[t]=this.observers[t].filter(r=>r!==n)}}emit(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];this.observers[t]&&[].concat(this.observers[t]).forEach(s=>{s(...r)}),this.observers["*"]&&[].concat(this.observers["*"]).forEach(s=>{s.apply(s,[t,...r])})}}function Ri(){let e,t;const n=new Promise((r,i)=>{e=r,t=i});return n.resolve=e,n.reject=t,n}function $g(e){return e==null?"":""+e}function fB(e,t,n){e.forEach(r=>{t[r]&&(n[r]=t[r])})}function Lp(e,t,n){function r(s){return s&&s.indexOf("###")>-1?s.replace(/###/g,"."):s}function i(){return!e||typeof e=="string"}const o=typeof t!="string"?[].concat(t):t.split(".");for(;o.length>1;){if(i())return{};const s=r(o.shift());!e[s]&&n&&(e[s]=new n),Object.prototype.hasOwnProperty.call(e,s)?e=e[s]:e={}}return i()?{}:{obj:e,k:r(o.shift())}}function Rg(e,t,n){const{obj:r,k:i}=Lp(e,t,Object);r[i]=n}function pB(e,t,n,r){const{obj:i,k:o}=Lp(e,t,Object);i[o]=i[o]||[],r&&(i[o]=i[o].concat(n)),r||i[o].push(n)}function Ha(e,t){const{obj:n,k:r}=Lp(e,t);if(n)return n[r]}function hB(e,t,n){const r=Ha(e,n);return r!==void 0?r:Ha(t,n)}function cw(e,t,n){for(const r in t)r!=="__proto__"&&r!=="constructor"&&(r in e?typeof e[r]=="string"||e[r]instanceof String||typeof t[r]=="string"||t[r]instanceof String?n&&(e[r]=t[r]):cw(e[r],t[r],n):e[r]=t[r]);return e}function br(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var mB={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function gB(e){return typeof e=="string"?e.replace(/[&<>"'\/]/g,t=>mB[t]):e}const xB=[" ",",","?","!",";"];function yB(e,t,n){t=t||"",n=n||"";const r=xB.filter(s=>t.indexOf(s)<0&&n.indexOf(s)<0);if(r.length===0)return!0;const i=new RegExp(`(${r.map(s=>s==="?"?"\\?":s).join("|")})`);let o=!i.test(e);if(!o){const s=e.indexOf(n);s>0&&!i.test(e.substring(0,s))&&(o=!0)}return o}function Va(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!e)return;if(e[t])return e[t];const r=t.split(n);let i=e;for(let o=0;o<r.length;++o){if(!i||typeof i[r[o]]=="string"&&o+1<r.length)return;if(i[r[o]]===void 0){let s=2,a=r.slice(o,o+s).join(n),c=i[a];for(;c===void 0&&r.length>o+s;)s++,a=r.slice(o,o+s).join(n),c=i[a];if(c===void 0)return;if(c===null)return null;if(t.endsWith(a)){if(typeof c=="string")return c;if(a&&typeof c[a]=="string")return c[a]}const u=r.slice(o+s).join(n);return u?Va(c,u,n):void 0}i=i[r[o]]}return i}function Qa(e){return e&&e.indexOf("_")>0?e.replace("_","-"):e}class zg extends Jl{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const n=this.options.ns.indexOf(t);n>-1&&this.options.ns.splice(n,1)}getResource(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const o=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,s=i.ignoreJSONStructure!==void 0?i.ignoreJSONStructure:this.options.ignoreJSONStructure;let a=[t,n];r&&typeof r!="string"&&(a=a.concat(r)),r&&typeof r=="string"&&(a=a.concat(o?r.split(o):r)),t.indexOf(".")>-1&&(a=t.split("."));const c=Ha(this.data,a);return c||!s||typeof r!="string"?c:Va(this.data&&this.data[t]&&this.data[t][n],r,o)}addResource(t,n,r,i){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const s=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator;let a=[t,n];r&&(a=a.concat(s?r.split(s):r)),t.indexOf(".")>-1&&(a=t.split("."),i=n,n=a[1]),this.addNamespaces(n),Rg(this.data,a,i),o.silent||this.emit("added",t,n,r,i)}addResources(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const o in r)(typeof r[o]=="string"||Object.prototype.toString.apply(r[o])==="[object Array]")&&this.addResource(t,n,o,r[o],{silent:!0});i.silent||this.emit("added",t,n,r)}addResourceBundle(t,n,r,i,o){let s=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1},a=[t,n];t.indexOf(".")>-1&&(a=t.split("."),i=r,r=n,n=a[1]),this.addNamespaces(n);let c=Ha(this.data,a)||{};i?cw(c,r,o):c={...c,...r},Rg(this.data,a,c),s.silent||this.emit("added",t,n,r)}removeResourceBundle(t,n){this.hasResourceBundle(t,n)&&delete this.data[t][n],this.removeNamespaces(n),this.emit("removed",t,n)}hasResourceBundle(t,n){return this.getResource(t,n)!==void 0}getResourceBundle(t,n){return n||(n=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(t,n)}:this.getResource(t,n)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const n=this.getDataByLanguage(t);return!!(n&&Object.keys(n)||[]).find(i=>n[i]&&Object.keys(n[i]).length>0)}toJSON(){return this.data}}var uw={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,i){return e.forEach(o=>{this.processors[o]&&(t=this.processors[o].process(t,n,r,i))}),t}};const Ng={};class Ga extends Jl{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),fB(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Vt.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const r=this.resolve(t,n);return r&&r.res!==void 0}extractFromKey(t,n){let r=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;r===void 0&&(r=":");const i=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let o=n.ns||this.options.defaultNS||[];const s=r&&t.indexOf(r)>-1,a=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!yB(t,r,i);if(s&&!a){const c=t.match(this.interpolator.nestingRegexp);if(c&&c.length>0)return{key:t,namespaces:o};const u=t.split(r);(r!==i||r===i&&this.options.ns.indexOf(u[0])>-1)&&(o=u.shift()),t=u.join(i)}return typeof o=="string"&&(o=[o]),{key:t,namespaces:o}}translate(t,n,r){if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const i=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,o=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:s,namespaces:a}=this.extractFromKey(t[t.length-1],n),c=a[a.length-1],u=n.lng||this.language,d=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(u&&u.toLowerCase()==="cimode"){if(d){const k=n.nsSeparator||this.options.nsSeparator;return i?{res:`${c}${k}${s}`,usedKey:s,exactUsedKey:s,usedLng:u,usedNS:c}:`${c}${k}${s}`}return i?{res:s,usedKey:s,exactUsedKey:s,usedLng:u,usedNS:c}:s}const p=this.resolve(t,n);let h=p&&p.res;const g=p&&p.usedKey||s,y=p&&p.exactUsedKey||s,v=Object.prototype.toString.apply(h),b=["[object Number]","[object Function]","[object RegExp]"],x=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,m=!this.i18nFormat||this.i18nFormat.handleAsObject;if(m&&h&&(typeof h!="string"&&typeof h!="boolean"&&typeof h!="number")&&b.indexOf(v)<0&&!(typeof x=="string"&&v==="[object Array]")){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const k=this.options.returnedObjectHandler?this.options.returnedObjectHandler(g,h,{...n,ns:a}):`key '${s} (${this.language})' returned an object instead of string.`;return i?(p.res=k,p):k}if(o){const k=v==="[object Array]",A=k?[]:{},C=k?y:g;for(const j in h)if(Object.prototype.hasOwnProperty.call(h,j)){const T=`${C}${o}${j}`;A[j]=this.translate(T,{...n,joinArrays:!1,ns:a}),A[j]===T&&(A[j]=h[j])}h=A}}else if(m&&typeof x=="string"&&v==="[object Array]")h=h.join(x),h&&(h=this.extendTranslation(h,t,n,r));else{let k=!1,A=!1;const C=n.count!==void 0&&typeof n.count!="string",j=Ga.hasDefaultValue(n),T=C?this.pluralResolver.getSuffix(u,n.count,n):"",O=n.ordinal&&C?this.pluralResolver.getSuffix(u,n.count,{ordinal:!1}):"",P=n[`defaultValue${T}`]||n[`defaultValue${O}`]||n.defaultValue;!this.isValidLookup(h)&&j&&(k=!0,h=P),this.isValidLookup(h)||(A=!0,h=s);const z=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&A?void 0:h,B=j&&P!==h&&this.options.updateMissing;if(A||k||B){if(this.logger.log(B?"updateKey":"missingKey",u,c,s,B?P:h),o){const $=this.resolve(s,{...n,keySeparator:!1});$&&$.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let M=[];const I=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&I&&I[0])for(let $=0;$<I.length;$++)M.push(I[$]);else this.options.saveMissingTo==="all"?M=this.languageUtils.toResolveHierarchy(n.lng||this.language):M.push(n.lng||this.language);const _=($,L,F)=>{const N=j&&F!==h?F:z;this.options.missingKeyHandler?this.options.missingKeyHandler($,c,L,N,B,n):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing($,c,L,N,B,n),this.emit("missingKey",$,c,L,h)};this.options.saveMissing&&(this.options.saveMissingPlurals&&C?M.forEach($=>{this.pluralResolver.getSuffixes($,n).forEach(L=>{_([$],s+L,n[`defaultValue${L}`]||P)})}):_(M,s,P))}h=this.extendTranslation(h,t,n,p,r),A&&h===s&&this.options.appendNamespaceToMissingKey&&(h=`${c}:${s}`),(A||k)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?h=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${c}:${s}`:s,k?h:void 0):h=this.options.parseMissingKeyHandler(h))}return i?(p.res=h,p):h}extendTranslation(t,n,r,i,o){var s=this;if(this.i18nFormat&&this.i18nFormat.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...r},i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init({...r,interpolation:{...this.options.interpolation,...r.interpolation}});const u=typeof t=="string"&&(r&&r.interpolation&&r.interpolation.skipOnVariables!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let d;if(u){const h=t.match(this.interpolator.nestingRegexp);d=h&&h.length}let p=r.replace&&typeof r.replace!="string"?r.replace:r;if(this.options.interpolation.defaultVariables&&(p={...this.options.interpolation.defaultVariables,...p}),t=this.interpolator.interpolate(t,p,r.lng||this.language,r),u){const h=t.match(this.interpolator.nestingRegexp),g=h&&h.length;d<g&&(r.nest=!1)}!r.lng&&this.options.compatibilityAPI!=="v1"&&i&&i.res&&(r.lng=i.usedLng),r.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var h=arguments.length,g=new Array(h),y=0;y<h;y++)g[y]=arguments[y];return o&&o[0]===g[0]&&!r.context?(s.logger.warn(`It seems you are nesting recursively key: ${g[0]} in key: ${n[0]}`),null):s.translate(...g,n)},r)),r.interpolation&&this.interpolator.reset()}const a=r.postProcess||this.options.postProcess,c=typeof a=="string"?[a]:a;return t!=null&&c&&c.length&&r.applyPostProcessor!==!1&&(t=uw.handle(c,t,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:i,...r}:r,this)),t}resolve(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r,i,o,s,a;return typeof t=="string"&&(t=[t]),t.forEach(c=>{if(this.isValidLookup(r))return;const u=this.extractFromKey(c,n),d=u.key;i=d;let p=u.namespaces;this.options.fallbackNS&&(p=p.concat(this.options.fallbackNS));const h=n.count!==void 0&&typeof n.count!="string",g=h&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),y=n.context!==void 0&&(typeof n.context=="string"||typeof n.context=="number")&&n.context!=="",v=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);p.forEach(b=>{this.isValidLookup(r)||(a=b,!Ng[`${v[0]}-${b}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&(Ng[`${v[0]}-${b}`]=!0,this.logger.warn(`key "${i}" for languages "${v.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),v.forEach(x=>{if(this.isValidLookup(r))return;s=x;const m=[d];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(m,d,x,b,n);else{let k;h&&(k=this.pluralResolver.getSuffix(x,n.count,n));const A=`${this.options.pluralSeparator}zero`,C=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(h&&(m.push(d+k),n.ordinal&&k.indexOf(C)===0&&m.push(d+k.replace(C,this.options.pluralSeparator)),g&&m.push(d+A)),y){const j=`${d}${this.options.contextSeparator}${n.context}`;m.push(j),h&&(m.push(j+k),n.ordinal&&k.indexOf(C)===0&&m.push(j+k.replace(C,this.options.pluralSeparator)),g&&m.push(j+A))}}let w;for(;w=m.pop();)this.isValidLookup(r)||(o=w,r=this.getResource(x,b,w,n))}))})}),{res:r,usedKey:i,exactUsedKey:o,usedLng:s,usedNS:a}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(t,n,r,i):this.resourceStore.getResource(t,n,r,i)}static hasDefaultValue(t){const n="defaultValue";for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&n===r.substring(0,n.length)&&t[r]!==void 0)return!0;return!1}}function fu(e){return e.charAt(0).toUpperCase()+e.slice(1)}class Bg{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Vt.create("languageUtils")}getScriptPartFromCode(t){if(t=Qa(t),!t||t.indexOf("-")<0)return null;const n=t.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(t){if(t=Qa(t),!t||t.indexOf("-")<0)return t;const n=t.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(t){if(typeof t=="string"&&t.indexOf("-")>-1){const n=["hans","hant","latn","cyrl","cans","mong","arab"];let r=t.split("-");return this.options.lowerCaseLng?r=r.map(i=>i.toLowerCase()):r.length===2?(r[0]=r[0].toLowerCase(),r[1]=r[1].toUpperCase(),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=fu(r[1].toLowerCase()))):r.length===3&&(r[0]=r[0].toLowerCase(),r[1].length===2&&(r[1]=r[1].toUpperCase()),r[0]!=="sgn"&&r[2].length===2&&(r[2]=r[2].toUpperCase()),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=fu(r[1].toLowerCase())),n.indexOf(r[2].toLowerCase())>-1&&(r[2]=fu(r[2].toLowerCase()))),r.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let n;return t.forEach(r=>{if(n)return;const i=this.formatLanguageCode(r);(!this.options.supportedLngs||this.isSupportedCode(i))&&(n=i)}),!n&&this.options.supportedLngs&&t.forEach(r=>{if(n)return;const i=this.getLanguagePartFromCode(r);if(this.isSupportedCode(i))return n=i;n=this.options.supportedLngs.find(o=>{if(o===i)return o;if(!(o.indexOf("-")<0&&i.indexOf("-")<0)&&o.indexOf(i)===0)return o})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(t,n){if(!t)return[];if(typeof t=="function"&&(t=t(n)),typeof t=="string"&&(t=[t]),Object.prototype.toString.apply(t)==="[object Array]")return t;if(!n)return t.default||[];let r=t[n];return r||(r=t[this.getScriptPartFromCode(n)]),r||(r=t[this.formatLanguageCode(n)]),r||(r=t[this.getLanguagePartFromCode(n)]),r||(r=t.default),r||[]}toResolveHierarchy(t,n){const r=this.getFallbackCodes(n||this.options.fallbackLng||[],t),i=[],o=s=>{s&&(this.isSupportedCode(s)?i.push(s):this.logger.warn(`rejecting language code not found in supportedLngs: ${s}`))};return typeof t=="string"&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&o(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&o(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&o(this.getLanguagePartFromCode(t))):typeof t=="string"&&o(this.formatLanguageCode(t)),r.forEach(s=>{i.indexOf(s)<0&&o(this.formatLanguageCode(s))}),i}}let vB=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],wB={1:function(e){return+(e>1)},2:function(e){return+(e!=1)},3:function(e){return 0},4:function(e){return e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},5:function(e){return e==0?0:e==1?1:e==2?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5},6:function(e){return e==1?0:e>=2&&e<=4?1:2},7:function(e){return e==1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},8:function(e){return e==1?0:e==2?1:e!=8&&e!=11?2:3},9:function(e){return+(e>=2)},10:function(e){return e==1?0:e==2?1:e<7?2:e<11?3:4},11:function(e){return e==1||e==11?0:e==2||e==12?1:e>2&&e<20?2:3},12:function(e){return+(e%10!=1||e%100==11)},13:function(e){return+(e!==0)},14:function(e){return e==1?0:e==2?1:e==3?2:3},15:function(e){return e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2},16:function(e){return e%10==1&&e%100!=11?0:e!==0?1:2},17:function(e){return e==1||e%10==1&&e%100!=11?0:1},18:function(e){return e==0?0:e==1?1:2},19:function(e){return e==1?0:e==0||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3},20:function(e){return e==1?0:e==0||e%100>0&&e%100<20?1:2},21:function(e){return e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0},22:function(e){return e==1?0:e==2?1:(e<0||e>10)&&e%10==0?2:3}};const bB=["v1","v2","v3"],SB=["v4"],Ig={zero:0,one:1,two:2,few:3,many:4,other:5};function kB(){const e={};return vB.forEach(t=>{t.lngs.forEach(n=>{e[n]={numbers:t.nr,plurals:wB[t.fc]}})}),e}class CB{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=n,this.logger=Vt.create("pluralResolver"),(!this.options.compatibilityJSON||SB.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=kB()}addRule(t,n){this.rules[t]=n}getRule(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(Qa(t),{type:n.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]}needsPlural(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(t,n);return this.shouldUseIntlApi()?r&&r.resolvedOptions().pluralCategories.length>1:r&&r.numbers.length>1}getPluralFormsOfKey(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,r).map(i=>`${n}${i}`)}getSuffixes(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(t,n);return r?this.shouldUseIntlApi()?r.resolvedOptions().pluralCategories.sort((i,o)=>Ig[i]-Ig[o]).map(i=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${i}`):r.numbers.map(i=>this.getSuffix(t,i,n)):[]}getSuffix(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const i=this.getRule(t,r);return i?this.shouldUseIntlApi()?`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${i.select(n)}`:this.getSuffixRetroCompatible(i,n):(this.logger.warn(`no plural rule found for: ${t}`),"")}getSuffixRetroCompatible(t,n){const r=t.noAbs?t.plurals(n):t.plurals(Math.abs(n));let i=t.numbers[r];this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1&&(i===2?i="plural":i===1&&(i=""));const o=()=>this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString();return this.options.compatibilityJSON==="v1"?i===1?"":typeof i=="number"?`_plural_${i.toString()}`:o():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1?o():this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString()}shouldUseIntlApi(){return!bB.includes(this.options.compatibilityJSON)}}function Fg(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,o=hB(e,t,n);return!o&&i&&typeof n=="string"&&(o=Va(e,n,r),o===void 0&&(o=Va(t,n,r))),o}class AB{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Vt.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||(n=>n),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const n=t.interpolation;this.escape=n.escape!==void 0?n.escape:gB,this.escapeValue=n.escapeValue!==void 0?n.escapeValue:!0,this.useRawValueToEscape=n.useRawValueToEscape!==void 0?n.useRawValueToEscape:!1,this.prefix=n.prefix?br(n.prefix):n.prefixEscaped||"{{",this.suffix=n.suffix?br(n.suffix):n.suffixEscaped||"}}",this.formatSeparator=n.formatSeparator?n.formatSeparator:n.formatSeparator||",",this.unescapePrefix=n.unescapeSuffix?"":n.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":n.unescapeSuffix||"",this.nestingPrefix=n.nestingPrefix?br(n.nestingPrefix):n.nestingPrefixEscaped||br("$t("),this.nestingSuffix=n.nestingSuffix?br(n.nestingSuffix):n.nestingSuffixEscaped||br(")"),this.nestingOptionsSeparator=n.nestingOptionsSeparator?n.nestingOptionsSeparator:n.nestingOptionsSeparator||",",this.maxReplaces=n.maxReplaces?n.maxReplaces:1e3,this.alwaysFormat=n.alwaysFormat!==void 0?n.alwaysFormat:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=`${this.prefix}(.+?)${this.suffix}`;this.regexp=new RegExp(t,"g");const n=`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;this.regexpUnescape=new RegExp(n,"g");const r=`${this.nestingPrefix}(.+?)${this.nestingSuffix}`;this.nestingRegexp=new RegExp(r,"g")}interpolate(t,n,r,i){let o,s,a;const c=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function u(y){return y.replace(/\$/g,"$$$$")}const d=y=>{if(y.indexOf(this.formatSeparator)<0){const m=Fg(n,c,y,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(m,void 0,r,{...i,...n,interpolationkey:y}):m}const v=y.split(this.formatSeparator),b=v.shift().trim(),x=v.join(this.formatSeparator).trim();return this.format(Fg(n,c,b,this.options.keySeparator,this.options.ignoreJSONStructure),x,r,{...i,...n,interpolationkey:b})};this.resetRegExp();const p=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,h=i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:y=>u(y)},{regex:this.regexp,safeValue:y=>this.escapeValue?u(this.escape(y)):u(y)}].forEach(y=>{for(a=0;o=y.regex.exec(t);){const v=o[1].trim();if(s=d(v),s===void 0)if(typeof p=="function"){const x=p(t,o,i);s=typeof x=="string"?x:""}else if(i&&Object.prototype.hasOwnProperty.call(i,v))s="";else if(h){s=o[0];continue}else this.logger.warn(`missed to pass in variable ${v} for interpolating ${t}`),s="";else typeof s!="string"&&!this.useRawValueToEscape&&(s=$g(s));const b=y.safeValue(s);if(t=t.replace(o[0],b),h?(y.regex.lastIndex+=s.length,y.regex.lastIndex-=o[0].length):y.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),t}nest(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i,o,s;function a(c,u){const d=this.nestingOptionsSeparator;if(c.indexOf(d)<0)return c;const p=c.split(new RegExp(`${d}[ ]*{`));let h=`{${p[1]}`;c=p[0],h=this.interpolate(h,s);const g=h.match(/'/g),y=h.match(/"/g);(g&&g.length%2===0&&!y||y.length%2!==0)&&(h=h.replace(/'/g,'"'));try{s=JSON.parse(h),u&&(s={...u,...s})}catch(v){return this.logger.warn(`failed parsing options string in nesting for key ${c}`,v),`${c}${d}${h}`}return delete s.defaultValue,c}for(;i=this.nestingRegexp.exec(t);){let c=[];s={...r},s=s.replace&&typeof s.replace!="string"?s.replace:s,s.applyPostProcessor=!1,delete s.defaultValue;let u=!1;if(i[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(i[1])){const d=i[1].split(this.formatSeparator).map(p=>p.trim());i[1]=d.shift(),c=d,u=!0}if(o=n(a.call(this,i[1].trim(),s),s),o&&i[0]===t&&typeof o!="string")return o;typeof o!="string"&&(o=$g(o)),o||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`),o=""),u&&(o=c.reduce((d,p)=>this.format(d,p,r.lng,{...r,interpolationkey:i[1].trim()}),o.trim())),t=t.replace(i[0],o),this.regexp.lastIndex=0}return t}}function jB(e){let t=e.toLowerCase().trim();const n={};if(e.indexOf("(")>-1){const r=e.split("(");t=r[0].toLowerCase().trim();const i=r[1].substring(0,r[1].length-1);t==="currency"&&i.indexOf(":")<0?n.currency||(n.currency=i.trim()):t==="relativetime"&&i.indexOf(":")<0?n.range||(n.range=i.trim()):i.split(";").forEach(s=>{if(!s)return;const[a,...c]=s.split(":"),u=c.join(":").trim().replace(/^'+|'+$/g,"");n[a.trim()]||(n[a.trim()]=u),u==="false"&&(n[a.trim()]=!1),u==="true"&&(n[a.trim()]=!0),isNaN(u)||(n[a.trim()]=parseInt(u,10))})}return{formatName:t,formatOptions:n}}function Sr(e){const t={};return function(r,i,o){const s=i+JSON.stringify(o);let a=t[s];return a||(a=e(Qa(i),o),t[s]=a),a(r)}}class EB{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Vt.create("formatter"),this.options=t,this.formats={number:Sr((n,r)=>{const i=new Intl.NumberFormat(n,{...r});return o=>i.format(o)}),currency:Sr((n,r)=>{const i=new Intl.NumberFormat(n,{...r,style:"currency"});return o=>i.format(o)}),datetime:Sr((n,r)=>{const i=new Intl.DateTimeFormat(n,{...r});return o=>i.format(o)}),relativetime:Sr((n,r)=>{const i=new Intl.RelativeTimeFormat(n,{...r});return o=>i.format(o,r.range||"day")}),list:Sr((n,r)=>{const i=new Intl.ListFormat(n,{...r});return o=>i.format(o)})},this.init(t)}init(t){const r=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}}).interpolation;this.formatSeparator=r.formatSeparator?r.formatSeparator:r.formatSeparator||","}add(t,n){this.formats[t.toLowerCase().trim()]=n}addCached(t,n){this.formats[t.toLowerCase().trim()]=Sr(n)}format(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return n.split(this.formatSeparator).reduce((a,c)=>{const{formatName:u,formatOptions:d}=jB(c);if(this.formats[u]){let p=a;try{const h=i&&i.formatParams&&i.formatParams[i.interpolationkey]||{},g=h.locale||h.lng||i.locale||i.lng||r;p=this.formats[u](a,g,{...d,...i,...h})}catch(h){this.logger.warn(h)}return p}else this.logger.warn(`there was no format function for ${u}`);return a},t)}}function TB(e,t){e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)}class LB extends Jl{constructor(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=n,this.services=r,this.languageUtils=r.languageUtils,this.options=i,this.logger=Vt.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=i.maxParallelReads||10,this.readingCalls=0,this.maxRetries=i.maxRetries>=0?i.maxRetries:5,this.retryTimeout=i.retryTimeout>=1?i.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(r,i.backend,i)}queueLoad(t,n,r,i){const o={},s={},a={},c={};return t.forEach(u=>{let d=!0;n.forEach(p=>{const h=`${u}|${p}`;!r.reload&&this.store.hasResourceBundle(u,p)?this.state[h]=2:this.state[h]<0||(this.state[h]===1?s[h]===void 0&&(s[h]=!0):(this.state[h]=1,d=!1,s[h]===void 0&&(s[h]=!0),o[h]===void 0&&(o[h]=!0),c[p]===void 0&&(c[p]=!0)))}),d||(a[u]=!0)}),(Object.keys(o).length||Object.keys(s).length)&&this.queue.push({pending:s,pendingCount:Object.keys(s).length,loaded:{},errors:[],callback:i}),{toLoad:Object.keys(o),pending:Object.keys(s),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(c)}}loaded(t,n,r){const i=t.split("|"),o=i[0],s=i[1];n&&this.emit("failedLoading",o,s,n),r&&this.store.addResourceBundle(o,s,r),this.state[t]=n?-1:2;const a={};this.queue.forEach(c=>{pB(c.loaded,[o],s),TB(c,t),n&&c.errors.push(n),c.pendingCount===0&&!c.done&&(Object.keys(c.loaded).forEach(u=>{a[u]||(a[u]={});const d=c.loaded[u];d.length&&d.forEach(p=>{a[u][p]===void 0&&(a[u][p]=!0)})}),c.done=!0,c.errors.length?c.callback(c.errors):c.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(c=>!c.done)}read(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,s=arguments.length>5?arguments[5]:void 0;if(!t.length)return s(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:n,fcName:r,tried:i,wait:o,callback:s});return}this.readingCalls++;const a=(u,d)=>{if(this.readingCalls--,this.waitingReads.length>0){const p=this.waitingReads.shift();this.read(p.lng,p.ns,p.fcName,p.tried,p.wait,p.callback)}if(u&&d&&i<this.maxRetries){setTimeout(()=>{this.read.call(this,t,n,r,i+1,o*2,s)},o);return}s(u,d)},c=this.backend[r].bind(this.backend);if(c.length===2){try{const u=c(t,n);u&&typeof u.then=="function"?u.then(d=>a(null,d)).catch(a):a(null,u)}catch(u){a(u)}return}return c(t,n,a)}prepareLoading(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();typeof t=="string"&&(t=this.languageUtils.toResolveHierarchy(t)),typeof n=="string"&&(n=[n]);const o=this.queueLoad(t,n,r,i);if(!o.toLoad.length)return o.pending.length||i(),null;o.toLoad.forEach(s=>{this.loadOne(s)})}load(t,n,r){this.prepareLoading(t,n,{},r)}reload(t,n,r){this.prepareLoading(t,n,{reload:!0},r)}loadOne(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const r=t.split("|"),i=r[0],o=r[1];this.read(i,o,"read",void 0,void 0,(s,a)=>{s&&this.logger.warn(`${n}loading namespace ${o} for language ${i} failed`,s),!s&&a&&this.logger.log(`${n}loaded namespace ${o} for language ${i}`,a),this.loaded(t,s,a)})}saveMissing(t,n,r,i,o){let s=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(n)){this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(r==null||r==="")){if(this.backend&&this.backend.create){const c={...s,isUpdate:o},u=this.backend.create.bind(this.backend);if(u.length<6)try{let d;u.length===5?d=u(t,n,r,i,c):d=u(t,n,r,i),d&&typeof d.then=="function"?d.then(p=>a(null,p)).catch(a):a(null,d)}catch(d){a(d)}else u(t,n,r,i,a,c)}!t||!t[0]||this.store.addResource(t[0],n,r,i)}}}function Dg(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){let n={};if(typeof t[1]=="object"&&(n=t[1]),typeof t[1]=="string"&&(n.defaultValue=t[1]),typeof t[2]=="string"&&(n.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const r=t[3]||t[2];Object.keys(r).forEach(i=>{n[i]=r[i]})}return n},interpolation:{escapeValue:!0,format:(e,t,n,r)=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function Mg(e){return typeof e.ns=="string"&&(e.ns=[e.ns]),typeof e.fallbackLng=="string"&&(e.fallbackLng=[e.fallbackLng]),typeof e.fallbackNS=="string"&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function fs(){}function OB(e){Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(n=>{typeof e[n]=="function"&&(e[n]=e[n].bind(e))})}class Oo extends Jl{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Mg(t),this.services={},this.logger=Vt,this.modules={external:[]},OB(this),n&&!this.isInitialized&&!t.isClone){if(!this.options.initImmediate)return this.init(t,n),this;setTimeout(()=>{this.init(t,n)},0)}}init(){var t=this;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;typeof n=="function"&&(r=n,n={}),!n.defaultNS&&n.defaultNS!==!1&&n.ns&&(typeof n.ns=="string"?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const i=Dg();this.options={...i,...this.options,...Mg(n)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...i.interpolation,...this.options.interpolation}),n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator);function o(d){return d?typeof d=="function"?new d:d:null}if(!this.options.isClone){this.modules.logger?Vt.init(o(this.modules.logger),this.options):Vt.init(null,this.options);let d;this.modules.formatter?d=this.modules.formatter:typeof Intl<"u"&&(d=EB);const p=new Bg(this.options);this.store=new zg(this.options.resources,this.options);const h=this.services;h.logger=Vt,h.resourceStore=this.store,h.languageUtils=p,h.pluralResolver=new CB(p,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),d&&(!this.options.interpolation.format||this.options.interpolation.format===i.interpolation.format)&&(h.formatter=o(d),h.formatter.init(h,this.options),this.options.interpolation.format=h.formatter.format.bind(h.formatter)),h.interpolator=new AB(this.options),h.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},h.backendConnector=new LB(o(this.modules.backend),h.resourceStore,h,this.options),h.backendConnector.on("*",function(g){for(var y=arguments.length,v=new Array(y>1?y-1:0),b=1;b<y;b++)v[b-1]=arguments[b];t.emit(g,...v)}),this.modules.languageDetector&&(h.languageDetector=o(this.modules.languageDetector),h.languageDetector.init&&h.languageDetector.init(h,this.options.detection,this.options)),this.modules.i18nFormat&&(h.i18nFormat=o(this.modules.i18nFormat),h.i18nFormat.init&&h.i18nFormat.init(this)),this.translator=new Ga(this.services,this.options),this.translator.on("*",function(g){for(var y=arguments.length,v=new Array(y>1?y-1:0),b=1;b<y;b++)v[b-1]=arguments[b];t.emit(g,...v)}),this.modules.external.forEach(g=>{g.init&&g.init(this)})}if(this.format=this.options.interpolation.format,r||(r=fs),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const d=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);d.length>0&&d[0]!=="dev"&&(this.options.lng=d[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(d=>{this[d]=function(){return t.store[d](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(d=>{this[d]=function(){return t.store[d](...arguments),t}});const c=Ri(),u=()=>{const d=(p,h)=>{this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),c.resolve(h),r(p,h)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return d(null,this.t.bind(this));this.changeLanguage(this.options.lng,d)};return this.options.resources||!this.options.initImmediate?u():setTimeout(u,0),c}loadResources(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fs;const i=typeof t=="string"?t:this.language;if(typeof t=="function"&&(r=t),!this.options.resources||this.options.partialBundledLanguages){if(i&&i.toLowerCase()==="cimode")return r();const o=[],s=a=>{if(!a)return;this.services.languageUtils.toResolveHierarchy(a).forEach(u=>{o.indexOf(u)<0&&o.push(u)})};i?s(i):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(c=>s(c)),this.options.preload&&this.options.preload.forEach(a=>s(a)),this.services.backendConnector.load(o,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),r(a)})}else r(null)}reloadResources(t,n,r){const i=Ri();return t||(t=this.languages),n||(n=this.options.ns),r||(r=fs),this.services.backendConnector.reload(t,n,o=>{i.resolve(),r(o)}),i}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&uw.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let n=0;n<this.languages.length;n++){const r=this.languages[n];if(!(["cimode","dev"].indexOf(r)>-1)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}}changeLanguage(t,n){var r=this;this.isLanguageChangingTo=t;const i=Ri();this.emit("languageChanging",t);const o=c=>{this.language=c,this.languages=this.services.languageUtils.toResolveHierarchy(c),this.resolvedLanguage=void 0,this.setResolvedLanguage(c)},s=(c,u)=>{u?(o(u),this.translator.changeLanguage(u),this.isLanguageChangingTo=void 0,this.emit("languageChanged",u),this.logger.log("languageChanged",u)):this.isLanguageChangingTo=void 0,i.resolve(function(){return r.t(...arguments)}),n&&n(c,function(){return r.t(...arguments)})},a=c=>{!t&&!c&&this.services.languageDetector&&(c=[]);const u=typeof c=="string"?c:this.services.languageUtils.getBestMatchFromCodes(c);u&&(this.language||o(u),this.translator.language||this.translator.changeLanguage(u),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(u)),this.loadResources(u,d=>{s(d,u)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(t),i}getFixedT(t,n,r){var i=this;const o=function(s,a){let c;if(typeof a!="object"){for(var u=arguments.length,d=new Array(u>2?u-2:0),p=2;p<u;p++)d[p-2]=arguments[p];c=i.options.overloadTranslationOptionHandler([s,a].concat(d))}else c={...a};c.lng=c.lng||o.lng,c.lngs=c.lngs||o.lngs,c.ns=c.ns||o.ns,c.keyPrefix=c.keyPrefix||r||o.keyPrefix;const h=i.options.keySeparator||".";let g;return c.keyPrefix&&Array.isArray(s)?g=s.map(y=>`${c.keyPrefix}${h}${y}`):g=c.keyPrefix?`${c.keyPrefix}${h}${s}`:s,i.t(g,c)};return typeof t=="string"?o.lng=t:o.lngs=t,o.ns=n,o.keyPrefix=r,o}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const r=n.lng||this.resolvedLanguage||this.languages[0],i=this.options?this.options.fallbackLng:!1,o=this.languages[this.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const s=(a,c)=>{const u=this.services.backendConnector.state[`${a}|${c}`];return u===-1||u===2};if(n.precheck){const a=n.precheck(this,s);if(a!==void 0)return a}return!!(this.hasResourceBundle(r,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||s(r,t)&&(!i||s(o,t)))}loadNamespaces(t,n){const r=Ri();return this.options.ns?(typeof t=="string"&&(t=[t]),t.forEach(i=>{this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}),this.loadResources(i=>{r.resolve(),n&&n(i)}),r):(n&&n(),Promise.resolve())}loadLanguages(t,n){const r=Ri();typeof t=="string"&&(t=[t]);const i=this.options.preload||[],o=t.filter(s=>i.indexOf(s)<0);return o.length?(this.options.preload=i.concat(o),this.loadResources(s=>{r.resolve(),n&&n(s)}),r):(n&&n(),Promise.resolve())}dir(t){if(t||(t=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!t)return"rtl";const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],r=this.services&&this.services.languageUtils||new Bg(Dg());return n.indexOf(r.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new Oo(t,n)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fs;const r=t.forkResourceStore;r&&delete t.forkResourceStore;const i={...this.options,...t,isClone:!0},o=new Oo(i);return(t.debug!==void 0||t.prefix!==void 0)&&(o.logger=o.logger.clone(t)),["store","services","language"].forEach(a=>{o[a]=this[a]}),o.services={...this.services},o.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},r&&(o.store=new zg(this.store.data,i),o.services.resourceStore=o.store),o.translator=new Ga(o.services,i),o.translator.on("*",function(a){for(var c=arguments.length,u=new Array(c>1?c-1:0),d=1;d<c;d++)u[d-1]=arguments[d];o.emit(a,...u)}),o.init(i,n),o.translator.options=i,o.translator.backendConnector.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const We=Oo.createInstance();We.createInstance=Oo.createInstance;We.createInstance;We.dir;We.init;We.loadResources;We.reloadResources;We.use;We.changeLanguage;We.getFixedT;We.t;We.exists;We.setDefaultNamespace;We.hasLoadedNamespace;We.loadNamespaces;We.loadLanguages;const PB="hello",$B="wellcome",RB="search",zB="login",NB="register",BB="Profile",IB="home",FB="books",DB="No",MB="Yes",_B="Next",UB="Finish",WB="Loading",HB="User Name",VB="Contact",QB="Articles",GB="Vocabulary",qB="Questions",KB="Total",YB="Example",JB="Examples",XB="Score",ZB="Close",eI="Restart",tI="Dictionary",nI="Phrases",rI="Play",iI="Learn",oI="Read",sI="Explore",aI="Grammar",lI="All",cI="Next",uI="Submit",dI="Quiz",fI="Text",pI="Continue",hI="English",mI="Name",gI="Status",xI="Languages",yI={Bonjour:PB,Bienvenue:$B,Recherche:RB,Connexion:zB,"Se déconnecter":"logout",Inscription:NB,Profil:BB,Accueil:IB,Livres:FB,Leçons:"lesson","Vous avez terminé la leçon":"You have completed the lesson","Voulez-vous recommencer?":"Do you want to start over?",No:DB,Oui:MB,Suivante:_B,"Leçon terminée!":"Lesson Completed!",Finir:UB,"Trois Mousquetaires":"Three Musketeers",Chargement:WB,"Inscrivez-vous":"Signup now","Mot de passe oublié?":"Forgot Password?","Pas de compte?":"Not a member?","Pas connecté":"Not signed in","Mot de passe":"Password",Pseudonyme:HB,"E-mail":"E-mail","Avez-vous déjà un compte?":"Already Have Account?","Film&Musique":"Movie&Music",Contacter:VB,Articles:QB,"Bienvenue à Francophoenix":"Wellcome to Francophoenix","Tous les livres":"All Books","Tout afficher":"See All","Niveau A1":"Level A1","Niveau A2":"Level A2","Niveau B1":"Level B1","Niveau B2":"Level B2","Quantité de mots dans ce sujet":"Number of words in this topic","Nombre de mots":"Number of words","Les mots":"The words",Vocabulaire:GB,Questions:qB,Total:KB,"Masculin ou Féminin":"Masculine or feminine",Example:YB,Examples:JB,"Testez votre vocabulaire":"Test your vocabulary",Score:XB,"Toutes nos félicitations! Vous avez répondu correctement à tous.":"Congratulations! You have answered all correctly.","Toutes les réponses ne sont pas correctes. Réessayer!":"Not all answers are correct. Try again!",Fermer:ZB,Recommencer:eI,"Vocabulaire thématique":"Thematic vocabulary","Lire l'extrait":"Read Extract","Explorez des sujets":"Explore topics",Dictionnaire:tI,"Mots favoris":"Favorite words","Pas de mots favoris":"No favorite words","Des mots":"Words",Expressions:nI,"Des exercices":"Exercises","Afficher toutes les traductions":"Show All Translations","Cacher Toutes les Traductions":"Hide All Translations",Jouer:rI,Apprendre:iI,Lire:oI,Définition:"Definition","Les Temps":"Tenses",Explorer:sI,Grammaire:aI,"Bienvenue dans la section Grammaire":"Welcome to the Grammar Section","Découvrez différents sujets de grammaire pour améliorer vos compétences linguistiques":"Explore various grammar topics to enhance your language skills","Bienvenue dans la section Vocabulaire":"Welcome to the Vocabulary Section","Explorez différents sujets de vocabulaire pour améliorer vos compétences linguistiques":"Explore different vocabulary topics to enhance your language skills","Lisez le texte":"Read the text","Les noms à double genre":"Double gender nouns","Construire la phrase":"Build the Sentence","Qu'est-ce que c'est ?":"What it is?","Nombre de Mots":"Word Count","Choisir le niveau":"Choose Level",Tous:lI,"Afficher tout":"Show All","Aucun mot trouvé":"No word found","Verbes utilisés dans le texte":"Verbes used in the text",Suivant:cI,Réessayer:"Retry",Soumettre:uI,"Genre des noms":"Gender of nouns",Questionnaire:dI,Texte:fI,"Tout sélectionner":"Select All","Supprimer tout":"Clear All","Aucun mot sélectionné. Veuillez sélectionner des mots pour choisir le mode entraîneur.":"No words selected. Please select words to chooce the trainer mode.","Entraîneur de cartes mémoire":"Flashcards trainer","Mots déjà revus":"Words already reviewed","Vous suivez ?":"Are you following?",Continue:pI,"Réviser le vocabulaire":"Review The Vocabulary","Chapitre précédent":"Previous chapter","Chapitre suivant":"Next chapter","Améliorez votre vocabulaire":"Improve Your Vocabular","Ce lien mène à la page Bachharelle Conjugaison.":"This link goes to the Bachharelle Conjugation page.","Ajouter à":"add to",Français:"French",Anglaise:hI,Géorgien:"Georgian","Choisissez votre langue":"Choose Your Language","Choisissez une catégorie":"Choose category","Exercice d'articles":"Article Exercise","Exercice de temps des verbes":"Verb Tense Exercise","Construire des phrases":"Sentence Builder",Nom:mI,Statut:gI,"Pseudonyme doit comporter au moins 3 caractères":"Username must be at least 3 characters long","Le mot de passe doit comporter au moins 5 caractères":"Password must be at least 5 characters long","Mémoriser des mots":"Memorizing words","Lire Extrait":"Read Extract","Parlez-vous français?":"Do you speak French?","ფრანგული ლექსიკა":"French vocabulary","Je parle":"I Speak","J'apprends":"I Learn",Langues:xI},vI="გამარჯობა",wI="მოი",bI="მთავარი",SI="შესვლა",kI="რეგისტრაცია",CI="წიგნები",AI="იტვირთება",jI="არა",EI="დიახ",TI="შემდეგი",LI="დასრულება",OI="პროფილი",PI="ფსევდონიმი",$I="მაგალითი",RI="მაგალითები",zI="კონტაქტი",NI="სტატიები",BI="კურსები",II="ლექსიკა",FI="კითხვა",DI="სულ",MI="ქულა",_I="დახურე",UI="კიდევ სცადე",WI="ლექსიკონი",HI="ფრაზები",VI="ითამაშე",QI="ისწავლე",GI="წაიკითხე",qI="გადადი",KI="გრამატიკა",YI="ყველა",JI="შემდეგი",XI="Submit",ZI="ტესტი",e6="ტექსტი",t6="გაგრძელება",n6="ინგლისური",r6="სახელი",i6="სტატუსი",o6="არსებითი სახელი",s6="არტიკლი",a6="ზმნა",l6="ორთოგრაფია",c6="ფონოლოგია",u6="ენები",d6={hello:vI,welcome:wI,Accueil:bI,"Recherche ":"ძებნა",Connexion:SI,Inscription:kI,Livres:CI,Leçons:"გაკვეთილები","Trois Mousquetaires":"სამი მუშკეტერი","Vous avez terminé la leçon":"თქვენ დაამთავრეთ ეს გაკვეთილი",Chargement:AI,"Voulez-vous recommencer?":"გსურთ თავიდან დაწყება?",No:jI,Oui:EI,Suivante:TI,"Leçon terminée!":"დასასრული",Finir:LI,"Pas de compte?":"არ გაქვთ ანგარიში?","Inscrivez-vous":"დარეგისტრირდი","Pas connecté":"არ ხართ შესული",Profil:OI,"Mot de passe oublié?":"Დაგავიწყდათ პაროლი?","Mot de passe":"პაროლი",Pseudonyme:PI,"E-mail":"ელ.ფოსტა","Avez-vous déjà un compte?":"უკვე გაქვთ ანგარიში?",Example:$I,Examples:RI,"Film&Musique":"ფილმები&მუსიკა",Contacter:zI,Articles:NI,Courses:BI,"Bienvenue à Francophoenix":"კეთილი იყოს თქვენი მობრძანება ფრანკოფონიქსში","Tous les livres":"ყველა წიგნი","Tout afficher":"მაჩვენე ყველა","Niveau A1":"დონე A1","Niveau A2":"დონე A2","Niveau B1":"დონე B1","Niveau B2":"დონე B2","Quantité de mots dans ce sujet":"სიტყვების რაოდენობა ამ თემაში","Les mots":"სიტყვები",Vocabulaire:II,Questions:FI,Total:DI,"Masculin ou Féminin":"მამრობითი თუ მდედრობითი","Testez votre vocabulaire":"გამოცადე შენი ლექსიკა",Score:MI,Fermer:_I,Recommencer:UI,"Félicitations! Vous avez répondu correctement à tous.":"გილოცავ! ყველაფერზე სწორად უპასუხე.","Toutes les réponses ne sont pas correctes. Réessayer!":"ყველა პასუხი არ არის სწორი. კიდევ სცადე!","Vocabulaire thématique":"თემატური ლექსიკა","Read Extract":"დაიწყე კითხვა","Explorez des sujets":"ნახე მთლიანად",Dictionnaire:WI,"Mots favoris":"ფავორიტი სიტყვების სია","Pas de mots favoris":"სია ცარიელია","Des mots":"სიტყვები",Expressions:HI,"Des exercices":"სავარჯიშოები","Afficher toutes les traductions":"გამოაჩინე სრული თარგმანი","Cacher Toutes les Traductions":"დამალე სრული თარგმანი",Jouer:VI,Apprendre:QI,Lire:GI,Définition:"განმარტება","Les Temps":"დროები",Explorer:qI,Grammaire:KI,"Bienvenue dans la section Grammaire":"კეთილი იყოს თქვენი მობრძანება გრამატიკის სექციაში","Découvrez différents sujets de grammaire pour améliorer vos compétences linguistiques":"აღმოაჩინეთ გრამატიკის სხვადასხვა თემები და გაიუმჯობესეთ ენის ცოდნის დონე","Bienvenue dans la section Vocabulaire":"კეთილი იყოს თქვენი მობრძანება ლექსიკის განყოფილებაში","Explorez différents sujets de vocabulaire pour améliorer vos compétences linguistiques":"ნახეთ ლექსიკის სხვადასხვა თემები თქვენი ენის ცოდნის გასაუმჯობესებლად","Lisez le texte":"Წაიკითხეთ ტექსტი","Les noms à double genre":"არსებითი სახელები ორმაგი სქესით","Construire la phrase":"შეადგინე წინადადება","Qu'est-ce que c'est ?":"რა არის ეს?","Nombre de mots   ":"სიტყვების რაოდენობა","Choisir le niveau":"აირჩიეთ დონე",Tous:YI,"Afficher tout":"ყველას ნახვა","Aucun mot trouvé":"სიტყვა ვერ მოიძებნა","Verbes utilisés dans le texte":"ტექსტში გამოყენებული ზმნები",Suivant:JI,Réessayer:"თავიდან სცადე",Soumettre:XI,"Genre des noms":"არსებითი სახელების სქესი",Questionnaire:ZI,Texte:e6,"Tout sélectionner":"Მონიშნე ყველა","Supprimer tout":"წაშალე ყველა","Aucun mot sélectionné. Veuillez sélectionner des mots pour choisir le mode entraîneur.":"არც ერთი სიტყვა არ არის მონიშნული. გთხოვთ, მონიშნოთ სიტყვები სავარჯიშოს ასარჩევად.","Entraîneur de cartes mémoire":"შენახული სიტყვების სავარჯიშო","Mots déjà revus":"გავლილი სიტყვების რაოდენობა.","Vous suivez ?":"მომყვები ?",Continue:t6,"Réviser le vocabulaire":"გადახედეთ სიტყვებს","Chapitre précédent":"წინა თავი","Chapitre suivant":"შემდეგი თავი","Ce lien mène à la page Bachharelle Conjugaison.":"ეს ბმული გადადის Bachharelle უღლების გვერდზე.","Ajouter à":"დაამატე",Français:"ფრანგული",Anglaise:n6,Géorgien:"ქართული","Choisissez votre langue":"Აირჩიეთ ენა","Choisissez une catégorie":"აირჩიეთ კატეგორია","Exercice d'articles":"არტიკლის სავარჯიშო","Exercice de temps des verbes":"ზმნების დროები","Construire des phrases":"წინადადების შედგენა",Nom:r6,Statut:i6,"Pseudonyme doit comporter au moins 3 caractères":"ფსევდონიმი უნდა შედგებოდეს სულ მცირე 3 სიმბოლოსგან","Le mot de passe doit comporter au moins 5 caractères":"პაროლი უნდა იყოს მინიმუმ 5 სიმბოლო",noun:o6,article:s6,verb:a6,orthography:l6,phonology:c6,"Mémoriser des mots":"სიტყვების დამახსოვრება","Lire Extrait":"დაიწყე კითხვა","Parlez-vous français?":"Საუბრობთ ფრანგულად?","Vocabulaire français":"ფრანგული ლექსიკა","Je parle":"ვლაპარაკობ","J'apprends":"ვსწავლობ",Langues:u6},f6=localStorage.getItem("nativeLanguageSelected");We.use(YT).init({resources:{en:{translation:yI},ka:{translation:d6}},lng:f6||"fr",fallbackLng:"fr",interpolation:{escapeValue:!1}});pu.createRoot(document.getElementById("root")).render(l.jsx(IC,{children:l.jsx(TA,{store:uB,children:l.jsx(ZT,{i18n:We,children:l.jsx(oB,{})})})}));
