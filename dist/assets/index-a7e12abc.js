function sw(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Mo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Fg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function aw(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var o=Function.bind.apply(t,i);return new o}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Dg={exports:{}},Ga={},Mg={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oo=Symbol.for("react.element"),lw=Symbol.for("react.portal"),cw=Symbol.for("react.fragment"),uw=Symbol.for("react.strict_mode"),dw=Symbol.for("react.profiler"),fw=Symbol.for("react.provider"),pw=Symbol.for("react.context"),hw=Symbol.for("react.forward_ref"),mw=Symbol.for("react.suspense"),gw=Symbol.for("react.memo"),xw=Symbol.for("react.lazy"),Pp=Symbol.iterator;function yw(e){return e===null||typeof e!="object"?null:(e=Pp&&e[Pp]||e["@@iterator"],typeof e=="function"?e:null)}var _g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ug=Object.assign,Wg={};function fi(e,t,n){this.props=e,this.context=t,this.refs=Wg,this.updater=n||_g}fi.prototype.isReactComponent={};fi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Hg(){}Hg.prototype=fi.prototype;function Hd(e,t,n){this.props=e,this.context=t,this.refs=Wg,this.updater=n||_g}var Vd=Hd.prototype=new Hg;Vd.constructor=Hd;Ug(Vd,fi.prototype);Vd.isPureReactComponent=!0;var $p=Array.isArray,Vg=Object.prototype.hasOwnProperty,Qd={current:null},Qg={key:!0,ref:!0,__self:!0,__source:!0};function Gg(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Vg.call(t,r)&&!Qg.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Oo,type:e,key:o,ref:s,props:i,_owner:Qd.current}}function vw(e,t){return{$$typeof:Oo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Gd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Oo}function ww(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Rp=/\/+/g;function Jl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ww(""+e.key):t.toString(36)}function fs(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Oo:case lw:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Jl(s,0):r,$p(i)?(n="",e!=null&&(n=e.replace(Rp,"$&/")+"/"),fs(i,t,n,"",function(u){return u})):i!=null&&(Gd(i)&&(i=vw(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Rp,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",$p(e))for(var a=0;a<e.length;a++){o=e[a];var c=r+Jl(o,a);s+=fs(o,t,n,c,i)}else if(c=yw(e),typeof c=="function")for(e=c.call(e),a=0;!(o=e.next()).done;)o=o.value,c=r+Jl(o,a++),s+=fs(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function _o(e,t,n){if(e==null)return e;var r=[],i=0;return fs(e,r,"","",function(o){return t.call(n,o,i++)}),r}function bw(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var et={current:null},ps={transition:null},Sw={ReactCurrentDispatcher:et,ReactCurrentBatchConfig:ps,ReactCurrentOwner:Qd};Z.Children={map:_o,forEach:function(e,t,n){_o(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return _o(e,function(){t++}),t},toArray:function(e){return _o(e,function(t){return t})||[]},only:function(e){if(!Gd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Z.Component=fi;Z.Fragment=cw;Z.Profiler=dw;Z.PureComponent=Hd;Z.StrictMode=uw;Z.Suspense=mw;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sw;Z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ug({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Qd.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)Vg.call(t,c)&&!Qg.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Oo,type:e.type,key:i,ref:o,props:r,_owner:s}};Z.createContext=function(e){return e={$$typeof:pw,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:fw,_context:e},e.Consumer=e};Z.createElement=Gg;Z.createFactory=function(e){var t=Gg.bind(null,e);return t.type=e,t};Z.createRef=function(){return{current:null}};Z.forwardRef=function(e){return{$$typeof:hw,render:e}};Z.isValidElement=Gd;Z.lazy=function(e){return{$$typeof:xw,_payload:{_status:-1,_result:e},_init:bw}};Z.memo=function(e,t){return{$$typeof:gw,type:e,compare:t===void 0?null:t}};Z.startTransition=function(e){var t=ps.transition;ps.transition={};try{e()}finally{ps.transition=t}};Z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Z.useCallback=function(e,t){return et.current.useCallback(e,t)};Z.useContext=function(e){return et.current.useContext(e)};Z.useDebugValue=function(){};Z.useDeferredValue=function(e){return et.current.useDeferredValue(e)};Z.useEffect=function(e,t){return et.current.useEffect(e,t)};Z.useId=function(){return et.current.useId()};Z.useImperativeHandle=function(e,t,n){return et.current.useImperativeHandle(e,t,n)};Z.useInsertionEffect=function(e,t){return et.current.useInsertionEffect(e,t)};Z.useLayoutEffect=function(e,t){return et.current.useLayoutEffect(e,t)};Z.useMemo=function(e,t){return et.current.useMemo(e,t)};Z.useReducer=function(e,t,n){return et.current.useReducer(e,t,n)};Z.useRef=function(e){return et.current.useRef(e)};Z.useState=function(e){return et.current.useState(e)};Z.useSyncExternalStore=function(e,t,n){return et.current.useSyncExternalStore(e,t,n)};Z.useTransition=function(){return et.current.useTransition()};Z.version="18.2.0";Mg.exports=Z;var b=Mg.exports;const st=Fg(b),kw=sw({__proto__:null,default:st},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Aw=b,Cw=Symbol.for("react.element"),jw=Symbol.for("react.fragment"),Ew=Object.prototype.hasOwnProperty,Tw=Aw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lw={key:!0,ref:!0,__self:!0,__source:!0};function qg(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Ew.call(t,r)&&!Lw.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Cw,type:e,key:o,ref:s,props:i,_owner:Tw.current}}Ga.Fragment=jw;Ga.jsx=qg;Ga.jsxs=qg;Dg.exports=Ga;var l=Dg.exports,fu={},Kg={exports:{}},xt={},Yg={exports:{}},Jg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,I){var z=E.length;E.push(I);e:for(;0<z;){var V=z-1>>>1,G=E[V];if(0<i(G,I))E[V]=I,E[z]=G,z=V;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var I=E[0],z=E.pop();if(z!==I){E[0]=z;e:for(var V=0,G=E.length,ge=G>>>1;V<ge;){var be=2*(V+1)-1,Dt=E[be],Ye=be+1,rt=E[Ye];if(0>i(Dt,z))Ye<G&&0>i(rt,Dt)?(E[V]=rt,E[Ye]=z,V=Ye):(E[V]=Dt,E[be]=z,V=be);else if(Ye<G&&0>i(rt,z))E[V]=rt,E[Ye]=z,V=Ye;else break e}}return I}function i(E,I){var z=E.sortIndex-I.sortIndex;return z!==0?z:E.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var c=[],u=[],d=1,h=null,p=3,y=!1,x=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(E){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=E)r(u),I.sortIndex=I.expirationTime,t(c,I);else break;I=n(u)}}function k(E){if(v=!1,w(E),!x)if(n(c)!==null)x=!0,H(A);else{var I=n(u);I!==null&&$(k,I.startTime-E)}}function A(E,I){x=!1,v&&(v=!1,g(T),T=-1),y=!0;var z=p;try{for(w(I),h=n(c);h!==null&&(!(h.expirationTime>I)||E&&!P());){var V=h.callback;if(typeof V=="function"){h.callback=null,p=h.priorityLevel;var G=V(h.expirationTime<=I);I=e.unstable_now(),typeof G=="function"?h.callback=G:h===n(c)&&r(c),w(I)}else r(c);h=n(c)}if(h!==null)var ge=!0;else{var be=n(u);be!==null&&$(k,be.startTime-I),ge=!1}return ge}finally{h=null,p=z,y=!1}}var C=!1,j=null,T=-1,L=5,O=-1;function P(){return!(e.unstable_now()-O<L)}function N(){if(j!==null){var E=e.unstable_now();O=E;var I=!0;try{I=j(!0,E)}finally{I?B():(C=!1,j=null)}}else C=!1}var B;if(typeof m=="function")B=function(){m(N)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,U=D.port2;D.port1.onmessage=N,B=function(){U.postMessage(null)}}else B=function(){S(N,0)};function H(E){j=E,C||(C=!0,B())}function $(E,I){T=S(function(){E(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,H(A))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(E){switch(p){case 1:case 2:case 3:var I=3;break;default:I=p}var z=p;p=I;try{return E()}finally{p=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,I){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var z=p;p=E;try{return I()}finally{p=z}},e.unstable_scheduleCallback=function(E,I,z){var V=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?V+z:V):z=V,E){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=z+G,E={id:d++,callback:I,priorityLevel:E,startTime:z,expirationTime:G,sortIndex:-1},z>V?(E.sortIndex=z,t(u,E),n(c)===null&&E===n(u)&&(v?(g(T),T=-1):v=!0,$(k,z-V))):(E.sortIndex=G,t(c,E),x||y||(x=!0,H(A))),E},e.unstable_shouldYield=P,e.unstable_wrapCallback=function(E){var I=p;return function(){var z=p;p=I;try{return E.apply(this,arguments)}finally{p=z}}}})(Jg);Yg.exports=Jg;var Ow=Yg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg=b,mt=Ow;function F(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zg=new Set,eo={};function pr(e,t){qr(e,t),qr(e+"Capture",t)}function qr(e,t){for(eo[e]=t,e=0;e<t.length;e++)Zg.add(t[e])}var sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pu=Object.prototype.hasOwnProperty,Pw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zp={},Np={};function $w(e){return pu.call(Np,e)?!0:pu.call(zp,e)?!1:Pw.test(e)?Np[e]=!0:(zp[e]=!0,!1)}function Rw(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function zw(e,t,n,r){if(t===null||typeof t>"u"||Rw(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function tt(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Me[e]=new tt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Me[t]=new tt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Me[e]=new tt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Me[e]=new tt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Me[e]=new tt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Me[e]=new tt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Me[e]=new tt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Me[e]=new tt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Me[e]=new tt(e,5,!1,e.toLowerCase(),null,!1,!1)});var qd=/[\-:]([a-z])/g;function Kd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(qd,Kd);Me[t]=new tt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(qd,Kd);Me[t]=new tt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(qd,Kd);Me[t]=new tt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Me[e]=new tt(e,1,!1,e.toLowerCase(),null,!1,!1)});Me.xlinkHref=new tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Me[e]=new tt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Yd(e,t,n,r){var i=Me.hasOwnProperty(t)?Me[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(zw(t,n,i,r)&&(n=null),r||i===null?$w(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var dn=Xg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Uo=Symbol.for("react.element"),Sr=Symbol.for("react.portal"),kr=Symbol.for("react.fragment"),Jd=Symbol.for("react.strict_mode"),hu=Symbol.for("react.profiler"),ex=Symbol.for("react.provider"),tx=Symbol.for("react.context"),Xd=Symbol.for("react.forward_ref"),mu=Symbol.for("react.suspense"),gu=Symbol.for("react.suspense_list"),Zd=Symbol.for("react.memo"),yn=Symbol.for("react.lazy"),nx=Symbol.for("react.offscreen"),Bp=Symbol.iterator;function Si(e){return e===null||typeof e!="object"?null:(e=Bp&&e[Bp]||e["@@iterator"],typeof e=="function"?e:null)}var we=Object.assign,Xl;function Ri(e){if(Xl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Xl=t&&t[1]||""}return`
`+Xl+e}var Zl=!1;function ec(e,t){if(!e||Zl)return"";Zl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=a);break}}}finally{Zl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ri(e):""}function Nw(e){switch(e.tag){case 5:return Ri(e.type);case 16:return Ri("Lazy");case 13:return Ri("Suspense");case 19:return Ri("SuspenseList");case 0:case 2:case 15:return e=ec(e.type,!1),e;case 11:return e=ec(e.type.render,!1),e;case 1:return e=ec(e.type,!0),e;default:return""}}function xu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case kr:return"Fragment";case Sr:return"Portal";case hu:return"Profiler";case Jd:return"StrictMode";case mu:return"Suspense";case gu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case tx:return(e.displayName||"Context")+".Consumer";case ex:return(e._context.displayName||"Context")+".Provider";case Xd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zd:return t=e.displayName||null,t!==null?t:xu(e.type)||"Memo";case yn:t=e._payload,e=e._init;try{return xu(e(t))}catch{}}return null}function Bw(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xu(t);case 8:return t===Jd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Fn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rx(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Iw(e){var t=rx(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wo(e){e._valueTracker||(e._valueTracker=Iw(e))}function ix(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=rx(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function qs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function yu(e,t){var n=t.checked;return we({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ip(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Fn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ox(e,t){t=t.checked,t!=null&&Yd(e,"checked",t,!1)}function vu(e,t){ox(e,t);var n=Fn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?wu(e,t.type,n):t.hasOwnProperty("defaultValue")&&wu(e,t.type,Fn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function wu(e,t,n){(t!=="number"||qs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var zi=Array.isArray;function Nr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Fn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function bu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(F(91));return we({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Dp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(F(92));if(zi(n)){if(1<n.length)throw Error(F(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Fn(n)}}function sx(e,t){var n=Fn(t.value),r=Fn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Mp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ax(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Su(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ax(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ho,lx=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ho=Ho||document.createElement("div"),Ho.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ho.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function to(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Di={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fw=["Webkit","ms","Moz","O"];Object.keys(Di).forEach(function(e){Fw.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Di[t]=Di[e]})});function cx(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Di.hasOwnProperty(e)&&Di[e]?(""+t).trim():t+"px"}function ux(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=cx(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Dw=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ku(e,t){if(t){if(Dw[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(F(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(F(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(F(61))}if(t.style!=null&&typeof t.style!="object")throw Error(F(62))}}function Au(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cu=null;function ef(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ju=null,Br=null,Ir=null;function _p(e){if(e=Ro(e)){if(typeof ju!="function")throw Error(F(280));var t=e.stateNode;t&&(t=Xa(t),ju(e.stateNode,e.type,t))}}function dx(e){Br?Ir?Ir.push(e):Ir=[e]:Br=e}function fx(){if(Br){var e=Br,t=Ir;if(Ir=Br=null,_p(e),t)for(e=0;e<t.length;e++)_p(t[e])}}function px(e,t){return e(t)}function hx(){}var tc=!1;function mx(e,t,n){if(tc)return e(t,n);tc=!0;try{return px(e,t,n)}finally{tc=!1,(Br!==null||Ir!==null)&&(hx(),fx())}}function no(e,t){var n=e.stateNode;if(n===null)return null;var r=Xa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(F(231,t,typeof n));return n}var Eu=!1;if(sn)try{var ki={};Object.defineProperty(ki,"passive",{get:function(){Eu=!0}}),window.addEventListener("test",ki,ki),window.removeEventListener("test",ki,ki)}catch{Eu=!1}function Mw(e,t,n,r,i,o,s,a,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Mi=!1,Ks=null,Ys=!1,Tu=null,_w={onError:function(e){Mi=!0,Ks=e}};function Uw(e,t,n,r,i,o,s,a,c){Mi=!1,Ks=null,Mw.apply(_w,arguments)}function Ww(e,t,n,r,i,o,s,a,c){if(Uw.apply(this,arguments),Mi){if(Mi){var u=Ks;Mi=!1,Ks=null}else throw Error(F(198));Ys||(Ys=!0,Tu=u)}}function hr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function gx(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Up(e){if(hr(e)!==e)throw Error(F(188))}function Hw(e){var t=e.alternate;if(!t){if(t=hr(e),t===null)throw Error(F(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Up(i),e;if(o===r)return Up(i),t;o=o.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?e:t}function xx(e){return e=Hw(e),e!==null?yx(e):null}function yx(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=yx(e);if(t!==null)return t;e=e.sibling}return null}var vx=mt.unstable_scheduleCallback,Wp=mt.unstable_cancelCallback,Vw=mt.unstable_shouldYield,Qw=mt.unstable_requestPaint,ke=mt.unstable_now,Gw=mt.unstable_getCurrentPriorityLevel,tf=mt.unstable_ImmediatePriority,wx=mt.unstable_UserBlockingPriority,Js=mt.unstable_NormalPriority,qw=mt.unstable_LowPriority,bx=mt.unstable_IdlePriority,qa=null,Qt=null;function Kw(e){if(Qt&&typeof Qt.onCommitFiberRoot=="function")try{Qt.onCommitFiberRoot(qa,e,void 0,(e.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:Xw,Yw=Math.log,Jw=Math.LN2;function Xw(e){return e>>>=0,e===0?32:31-(Yw(e)/Jw|0)|0}var Vo=64,Qo=4194304;function Ni(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Ni(a):(o&=s,o!==0&&(r=Ni(o)))}else s=n&~i,s!==0?r=Ni(s):o!==0&&(r=Ni(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Nt(t),i=1<<n,r|=e[n],t&=~i;return r}function Zw(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function eb(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Nt(o),a=1<<s,c=i[s];c===-1?(!(a&n)||a&r)&&(i[s]=Zw(a,t)):c<=t&&(e.expiredLanes|=a),o&=~a}}function Lu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Sx(){var e=Vo;return Vo<<=1,!(Vo&4194240)&&(Vo=64),e}function nc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Po(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Nt(t),e[t]=n}function tb(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Nt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function nf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Nt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ie=0;function kx(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ax,rf,Cx,jx,Ex,Ou=!1,Go=[],En=null,Tn=null,Ln=null,ro=new Map,io=new Map,bn=[],nb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hp(e,t){switch(e){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":ro.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":io.delete(t.pointerId)}}function Ai(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ro(t),t!==null&&rf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function rb(e,t,n,r,i){switch(t){case"focusin":return En=Ai(En,e,t,n,r,i),!0;case"dragenter":return Tn=Ai(Tn,e,t,n,r,i),!0;case"mouseover":return Ln=Ai(Ln,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ro.set(o,Ai(ro.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,io.set(o,Ai(io.get(o)||null,e,t,n,r,i)),!0}return!1}function Tx(e){var t=Jn(e.target);if(t!==null){var n=hr(t);if(n!==null){if(t=n.tag,t===13){if(t=gx(n),t!==null){e.blockedOn=t,Ex(e.priority,function(){Cx(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Pu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Cu=r,n.target.dispatchEvent(r),Cu=null}else return t=Ro(n),t!==null&&rf(t),e.blockedOn=n,!1;t.shift()}return!0}function Vp(e,t,n){hs(e)&&n.delete(t)}function ib(){Ou=!1,En!==null&&hs(En)&&(En=null),Tn!==null&&hs(Tn)&&(Tn=null),Ln!==null&&hs(Ln)&&(Ln=null),ro.forEach(Vp),io.forEach(Vp)}function Ci(e,t){e.blockedOn===t&&(e.blockedOn=null,Ou||(Ou=!0,mt.unstable_scheduleCallback(mt.unstable_NormalPriority,ib)))}function oo(e){function t(i){return Ci(i,e)}if(0<Go.length){Ci(Go[0],e);for(var n=1;n<Go.length;n++){var r=Go[n];r.blockedOn===e&&(r.blockedOn=null)}}for(En!==null&&Ci(En,e),Tn!==null&&Ci(Tn,e),Ln!==null&&Ci(Ln,e),ro.forEach(t),io.forEach(t),n=0;n<bn.length;n++)r=bn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<bn.length&&(n=bn[0],n.blockedOn===null);)Tx(n),n.blockedOn===null&&bn.shift()}var Fr=dn.ReactCurrentBatchConfig,Zs=!0;function ob(e,t,n,r){var i=ie,o=Fr.transition;Fr.transition=null;try{ie=1,of(e,t,n,r)}finally{ie=i,Fr.transition=o}}function sb(e,t,n,r){var i=ie,o=Fr.transition;Fr.transition=null;try{ie=4,of(e,t,n,r)}finally{ie=i,Fr.transition=o}}function of(e,t,n,r){if(Zs){var i=Pu(e,t,n,r);if(i===null)fc(e,t,r,ea,n),Hp(e,r);else if(rb(i,e,t,n,r))r.stopPropagation();else if(Hp(e,r),t&4&&-1<nb.indexOf(e)){for(;i!==null;){var o=Ro(i);if(o!==null&&Ax(o),o=Pu(e,t,n,r),o===null&&fc(e,t,r,ea,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else fc(e,t,r,null,n)}}var ea=null;function Pu(e,t,n,r){if(ea=null,e=ef(r),e=Jn(e),e!==null)if(t=hr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=gx(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ea=e,null}function Lx(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gw()){case tf:return 1;case wx:return 4;case Js:case qw:return 16;case bx:return 536870912;default:return 16}default:return 16}}var An=null,sf=null,ms=null;function Ox(){if(ms)return ms;var e,t=sf,n=t.length,r,i="value"in An?An.value:An.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return ms=i.slice(e,1<r?1-r:void 0)}function gs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qo(){return!0}function Qp(){return!1}function yt(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?qo:Qp,this.isPropagationStopped=Qp,this}return we(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),t}var pi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},af=yt(pi),$o=we({},pi,{view:0,detail:0}),ab=yt($o),rc,ic,ji,Ka=we({},$o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ji&&(ji&&e.type==="mousemove"?(rc=e.screenX-ji.screenX,ic=e.screenY-ji.screenY):ic=rc=0,ji=e),rc)},movementY:function(e){return"movementY"in e?e.movementY:ic}}),Gp=yt(Ka),lb=we({},Ka,{dataTransfer:0}),cb=yt(lb),ub=we({},$o,{relatedTarget:0}),oc=yt(ub),db=we({},pi,{animationName:0,elapsedTime:0,pseudoElement:0}),fb=yt(db),pb=we({},pi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hb=yt(pb),mb=we({},pi,{data:0}),qp=yt(mb),gb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yb[e])?!!t[e]:!1}function lf(){return vb}var wb=we({},$o,{key:function(e){if(e.key){var t=gb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=gs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lf,charCode:function(e){return e.type==="keypress"?gs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bb=yt(wb),Sb=we({},Ka,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kp=yt(Sb),kb=we({},$o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lf}),Ab=yt(kb),Cb=we({},pi,{propertyName:0,elapsedTime:0,pseudoElement:0}),jb=yt(Cb),Eb=we({},Ka,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tb=yt(Eb),Lb=[9,13,27,32],cf=sn&&"CompositionEvent"in window,_i=null;sn&&"documentMode"in document&&(_i=document.documentMode);var Ob=sn&&"TextEvent"in window&&!_i,Px=sn&&(!cf||_i&&8<_i&&11>=_i),Yp=String.fromCharCode(32),Jp=!1;function $x(e,t){switch(e){case"keyup":return Lb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ar=!1;function Pb(e,t){switch(e){case"compositionend":return Rx(t);case"keypress":return t.which!==32?null:(Jp=!0,Yp);case"textInput":return e=t.data,e===Yp&&Jp?null:e;default:return null}}function $b(e,t){if(Ar)return e==="compositionend"||!cf&&$x(e,t)?(e=Ox(),ms=sf=An=null,Ar=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Px&&t.locale!=="ko"?null:t.data;default:return null}}var Rb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Rb[e.type]:t==="textarea"}function zx(e,t,n,r){dx(r),t=ta(t,"onChange"),0<t.length&&(n=new af("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ui=null,so=null;function zb(e){Vx(e,0)}function Ya(e){var t=Er(e);if(ix(t))return e}function Nb(e,t){if(e==="change")return t}var Nx=!1;if(sn){var sc;if(sn){var ac="oninput"in document;if(!ac){var Zp=document.createElement("div");Zp.setAttribute("oninput","return;"),ac=typeof Zp.oninput=="function"}sc=ac}else sc=!1;Nx=sc&&(!document.documentMode||9<document.documentMode)}function eh(){Ui&&(Ui.detachEvent("onpropertychange",Bx),so=Ui=null)}function Bx(e){if(e.propertyName==="value"&&Ya(so)){var t=[];zx(t,so,e,ef(e)),mx(zb,t)}}function Bb(e,t,n){e==="focusin"?(eh(),Ui=t,so=n,Ui.attachEvent("onpropertychange",Bx)):e==="focusout"&&eh()}function Ib(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ya(so)}function Fb(e,t){if(e==="click")return Ya(t)}function Db(e,t){if(e==="input"||e==="change")return Ya(t)}function Mb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ft=typeof Object.is=="function"?Object.is:Mb;function ao(e,t){if(Ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!pu.call(t,i)||!Ft(e[i],t[i]))return!1}return!0}function th(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nh(e,t){var n=th(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=th(n)}}function Ix(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ix(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fx(){for(var e=window,t=qs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=qs(e.document)}return t}function uf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _b(e){var t=Fx(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ix(n.ownerDocument.documentElement,n)){if(r!==null&&uf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=nh(n,o);var s=nh(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ub=sn&&"documentMode"in document&&11>=document.documentMode,Cr=null,$u=null,Wi=null,Ru=!1;function rh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ru||Cr==null||Cr!==qs(r)||(r=Cr,"selectionStart"in r&&uf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wi&&ao(Wi,r)||(Wi=r,r=ta($u,"onSelect"),0<r.length&&(t=new af("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Cr)))}function Ko(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var jr={animationend:Ko("Animation","AnimationEnd"),animationiteration:Ko("Animation","AnimationIteration"),animationstart:Ko("Animation","AnimationStart"),transitionend:Ko("Transition","TransitionEnd")},lc={},Dx={};sn&&(Dx=document.createElement("div").style,"AnimationEvent"in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),"TransitionEvent"in window||delete jr.transitionend.transition);function Ja(e){if(lc[e])return lc[e];if(!jr[e])return e;var t=jr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Dx)return lc[e]=t[n];return e}var Mx=Ja("animationend"),_x=Ja("animationiteration"),Ux=Ja("animationstart"),Wx=Ja("transitionend"),Hx=new Map,ih="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vn(e,t){Hx.set(e,t),pr(t,[e])}for(var cc=0;cc<ih.length;cc++){var uc=ih[cc],Wb=uc.toLowerCase(),Hb=uc[0].toUpperCase()+uc.slice(1);Vn(Wb,"on"+Hb)}Vn(Mx,"onAnimationEnd");Vn(_x,"onAnimationIteration");Vn(Ux,"onAnimationStart");Vn("dblclick","onDoubleClick");Vn("focusin","onFocus");Vn("focusout","onBlur");Vn(Wx,"onTransitionEnd");qr("onMouseEnter",["mouseout","mouseover"]);qr("onMouseLeave",["mouseout","mouseover"]);qr("onPointerEnter",["pointerout","pointerover"]);qr("onPointerLeave",["pointerout","pointerover"]);pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vb=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bi));function oh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ww(r,t,void 0,e),e.currentTarget=null}function Vx(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==o&&i.isPropagationStopped())break e;oh(i,a,u),o=c}else for(s=0;s<r.length;s++){if(a=r[s],c=a.instance,u=a.currentTarget,a=a.listener,c!==o&&i.isPropagationStopped())break e;oh(i,a,u),o=c}}}if(Ys)throw e=Tu,Ys=!1,Tu=null,e}function ue(e,t){var n=t[Fu];n===void 0&&(n=t[Fu]=new Set);var r=e+"__bubble";n.has(r)||(Qx(t,e,2,!1),n.add(r))}function dc(e,t,n){var r=0;t&&(r|=4),Qx(n,e,r,t)}var Yo="_reactListening"+Math.random().toString(36).slice(2);function lo(e){if(!e[Yo]){e[Yo]=!0,Zg.forEach(function(n){n!=="selectionchange"&&(Vb.has(n)||dc(n,!1,e),dc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yo]||(t[Yo]=!0,dc("selectionchange",!1,t))}}function Qx(e,t,n,r){switch(Lx(t)){case 1:var i=ob;break;case 4:i=sb;break;default:i=of}n=i.bind(null,t,n,e),i=void 0,!Eu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function fc(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Jn(a),s===null)return;if(c=s.tag,c===5||c===6){r=o=s;continue e}a=a.parentNode}}r=r.return}mx(function(){var u=o,d=ef(n),h=[];e:{var p=Hx.get(e);if(p!==void 0){var y=af,x=e;switch(e){case"keypress":if(gs(n)===0)break e;case"keydown":case"keyup":y=bb;break;case"focusin":x="focus",y=oc;break;case"focusout":x="blur",y=oc;break;case"beforeblur":case"afterblur":y=oc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Gp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=cb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Ab;break;case Mx:case _x:case Ux:y=fb;break;case Wx:y=jb;break;case"scroll":y=ab;break;case"wheel":y=Tb;break;case"copy":case"cut":case"paste":y=hb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Kp}var v=(t&4)!==0,S=!v&&e==="scroll",g=v?p!==null?p+"Capture":null:p;v=[];for(var m=u,w;m!==null;){w=m;var k=w.stateNode;if(w.tag===5&&k!==null&&(w=k,g!==null&&(k=no(m,g),k!=null&&v.push(co(m,k,w)))),S)break;m=m.return}0<v.length&&(p=new y(p,x,null,n,d),h.push({event:p,listeners:v}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&n!==Cu&&(x=n.relatedTarget||n.fromElement)&&(Jn(x)||x[an]))break e;if((y||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=u,x=x?Jn(x):null,x!==null&&(S=hr(x),x!==S||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=u),y!==x)){if(v=Gp,k="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(v=Kp,k="onPointerLeave",g="onPointerEnter",m="pointer"),S=y==null?p:Er(y),w=x==null?p:Er(x),p=new v(k,m+"leave",y,n,d),p.target=S,p.relatedTarget=w,k=null,Jn(d)===u&&(v=new v(g,m+"enter",x,n,d),v.target=w,v.relatedTarget=S,k=v),S=k,y&&x)t:{for(v=y,g=x,m=0,w=v;w;w=xr(w))m++;for(w=0,k=g;k;k=xr(k))w++;for(;0<m-w;)v=xr(v),m--;for(;0<w-m;)g=xr(g),w--;for(;m--;){if(v===g||g!==null&&v===g.alternate)break t;v=xr(v),g=xr(g)}v=null}else v=null;y!==null&&sh(h,p,y,v,!1),x!==null&&S!==null&&sh(h,S,x,v,!0)}}e:{if(p=u?Er(u):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var A=Nb;else if(Xp(p))if(Nx)A=Db;else{A=Ib;var C=Bb}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(A=Fb);if(A&&(A=A(e,u))){zx(h,A,n,d);break e}C&&C(e,p,u),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&wu(p,"number",p.value)}switch(C=u?Er(u):window,e){case"focusin":(Xp(C)||C.contentEditable==="true")&&(Cr=C,$u=u,Wi=null);break;case"focusout":Wi=$u=Cr=null;break;case"mousedown":Ru=!0;break;case"contextmenu":case"mouseup":case"dragend":Ru=!1,rh(h,n,d);break;case"selectionchange":if(Ub)break;case"keydown":case"keyup":rh(h,n,d)}var j;if(cf)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Ar?$x(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Px&&n.locale!=="ko"&&(Ar||T!=="onCompositionStart"?T==="onCompositionEnd"&&Ar&&(j=Ox()):(An=d,sf="value"in An?An.value:An.textContent,Ar=!0)),C=ta(u,T),0<C.length&&(T=new qp(T,e,null,n,d),h.push({event:T,listeners:C}),j?T.data=j:(j=Rx(n),j!==null&&(T.data=j)))),(j=Ob?Pb(e,n):$b(e,n))&&(u=ta(u,"onBeforeInput"),0<u.length&&(d=new qp("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=j))}Vx(h,t)})}function co(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ta(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=no(e,n),o!=null&&r.unshift(co(e,o,i)),o=no(e,t),o!=null&&r.push(co(e,o,i))),e=e.return}return r}function xr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function sh(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,c=a.alternate,u=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&u!==null&&(a=u,i?(c=no(n,o),c!=null&&s.unshift(co(n,c,a))):i||(c=no(n,o),c!=null&&s.push(co(n,c,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Qb=/\r\n?/g,Gb=/\u0000|\uFFFD/g;function ah(e){return(typeof e=="string"?e:""+e).replace(Qb,`
`).replace(Gb,"")}function Jo(e,t,n){if(t=ah(t),ah(e)!==t&&n)throw Error(F(425))}function na(){}var zu=null,Nu=null;function Bu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Iu=typeof setTimeout=="function"?setTimeout:void 0,qb=typeof clearTimeout=="function"?clearTimeout:void 0,lh=typeof Promise=="function"?Promise:void 0,Kb=typeof queueMicrotask=="function"?queueMicrotask:typeof lh<"u"?function(e){return lh.resolve(null).then(e).catch(Yb)}:Iu;function Yb(e){setTimeout(function(){throw e})}function pc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),oo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);oo(t)}function On(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ch(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var hi=Math.random().toString(36).slice(2),Wt="__reactFiber$"+hi,uo="__reactProps$"+hi,an="__reactContainer$"+hi,Fu="__reactEvents$"+hi,Jb="__reactListeners$"+hi,Xb="__reactHandles$"+hi;function Jn(e){var t=e[Wt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[an]||n[Wt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ch(e);e!==null;){if(n=e[Wt])return n;e=ch(e)}return t}e=n,n=e.parentNode}return null}function Ro(e){return e=e[Wt]||e[an],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(F(33))}function Xa(e){return e[uo]||null}var Du=[],Tr=-1;function Qn(e){return{current:e}}function fe(e){0>Tr||(e.current=Du[Tr],Du[Tr]=null,Tr--)}function ce(e,t){Tr++,Du[Tr]=e.current,e.current=t}var Dn={},Ke=Qn(Dn),lt=Qn(!1),or=Dn;function Kr(e,t){var n=e.type.contextTypes;if(!n)return Dn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ct(e){return e=e.childContextTypes,e!=null}function ra(){fe(lt),fe(Ke)}function uh(e,t,n){if(Ke.current!==Dn)throw Error(F(168));ce(Ke,t),ce(lt,n)}function Gx(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(F(108,Bw(e)||"Unknown",i));return we({},n,r)}function ia(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Dn,or=Ke.current,ce(Ke,e),ce(lt,lt.current),!0}function dh(e,t,n){var r=e.stateNode;if(!r)throw Error(F(169));n?(e=Gx(e,t,or),r.__reactInternalMemoizedMergedChildContext=e,fe(lt),fe(Ke),ce(Ke,e)):fe(lt),ce(lt,n)}var Zt=null,Za=!1,hc=!1;function qx(e){Zt===null?Zt=[e]:Zt.push(e)}function Zb(e){Za=!0,qx(e)}function Gn(){if(!hc&&Zt!==null){hc=!0;var e=0,t=ie;try{var n=Zt;for(ie=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Zt=null,Za=!1}catch(i){throw Zt!==null&&(Zt=Zt.slice(e+1)),vx(tf,Gn),i}finally{ie=t,hc=!1}}return null}var Lr=[],Or=0,oa=null,sa=0,bt=[],St=0,sr=null,en=1,tn="";function qn(e,t){Lr[Or++]=sa,Lr[Or++]=oa,oa=e,sa=t}function Kx(e,t,n){bt[St++]=en,bt[St++]=tn,bt[St++]=sr,sr=e;var r=en;e=tn;var i=32-Nt(r)-1;r&=~(1<<i),n+=1;var o=32-Nt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,en=1<<32-Nt(t)+i|n<<i|r,tn=o+e}else en=1<<o|n<<i|r,tn=e}function df(e){e.return!==null&&(qn(e,1),Kx(e,1,0))}function ff(e){for(;e===oa;)oa=Lr[--Or],Lr[Or]=null,sa=Lr[--Or],Lr[Or]=null;for(;e===sr;)sr=bt[--St],bt[St]=null,tn=bt[--St],bt[St]=null,en=bt[--St],bt[St]=null}var ht=null,pt=null,me=!1,Rt=null;function Yx(e,t){var n=kt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function fh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ht=e,pt=On(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ht=e,pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=sr!==null?{id:en,overflow:tn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=kt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ht=e,pt=null,!0):!1;default:return!1}}function Mu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _u(e){if(me){var t=pt;if(t){var n=t;if(!fh(e,t)){if(Mu(e))throw Error(F(418));t=On(n.nextSibling);var r=ht;t&&fh(e,t)?Yx(r,n):(e.flags=e.flags&-4097|2,me=!1,ht=e)}}else{if(Mu(e))throw Error(F(418));e.flags=e.flags&-4097|2,me=!1,ht=e}}}function ph(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ht=e}function Xo(e){if(e!==ht)return!1;if(!me)return ph(e),me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Bu(e.type,e.memoizedProps)),t&&(t=pt)){if(Mu(e))throw Jx(),Error(F(418));for(;t;)Yx(e,t),t=On(t.nextSibling)}if(ph(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(F(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){pt=On(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}pt=null}}else pt=ht?On(e.stateNode.nextSibling):null;return!0}function Jx(){for(var e=pt;e;)e=On(e.nextSibling)}function Yr(){pt=ht=null,me=!1}function pf(e){Rt===null?Rt=[e]:Rt.push(e)}var eS=dn.ReactCurrentBatchConfig;function Pt(e,t){if(e&&e.defaultProps){t=we({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var aa=Qn(null),la=null,Pr=null,hf=null;function mf(){hf=Pr=la=null}function gf(e){var t=aa.current;fe(aa),e._currentValue=t}function Uu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Dr(e,t){la=e,hf=Pr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(at=!0),e.firstContext=null)}function jt(e){var t=e._currentValue;if(hf!==e)if(e={context:e,memoizedValue:t,next:null},Pr===null){if(la===null)throw Error(F(308));Pr=e,la.dependencies={lanes:0,firstContext:e}}else Pr=Pr.next=e;return t}var Xn=null;function xf(e){Xn===null?Xn=[e]:Xn.push(e)}function Xx(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,xf(t)):(n.next=i.next,i.next=n),t.interleaved=n,ln(e,r)}function ln(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var vn=!1;function yf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zx(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Pn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,te&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ln(e,n)}return i=r.interleaved,i===null?(t.next=t,xf(r)):(t.next=i.next,i.next=t),r.interleaved=t,ln(e,n)}function xs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nf(e,n)}}function hh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ca(e,t,n,r){var i=e.updateQueue;vn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var c=a,u=c.next;c.next=null,s===null?o=u:s.next=u,s=c;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=c))}if(o!==null){var h=i.baseState;s=0,d=u=c=null,a=o;do{var p=a.lane,y=a.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,v=a;switch(p=t,y=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){h=x.call(y,h,p);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,p=typeof x=="function"?x.call(y,h,p):x,p==null)break e;h=we({},h,p);break e;case 2:vn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=y,c=h):d=d.next=y,s|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(d===null&&(c=h),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);lr|=s,e.lanes=s,e.memoizedState=h}}function mh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var e0=new Xg.Component().refs;function Wu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:we({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var el={isMounted:function(e){return(e=e._reactInternals)?hr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ze(),i=Rn(e),o=nn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Pn(e,o,i),t!==null&&(Bt(t,e,i,r),xs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ze(),i=Rn(e),o=nn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Pn(e,o,i),t!==null&&(Bt(t,e,i,r),xs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ze(),r=Rn(e),i=nn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Pn(e,i,r),t!==null&&(Bt(t,e,r,n),xs(t,e,r))}};function gh(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!ao(n,r)||!ao(i,o):!0}function t0(e,t,n){var r=!1,i=Dn,o=t.contextType;return typeof o=="object"&&o!==null?o=jt(o):(i=ct(t)?or:Ke.current,r=t.contextTypes,o=(r=r!=null)?Kr(e,i):Dn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=el,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function xh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&el.enqueueReplaceState(t,t.state,null)}function Hu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=e0,yf(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=jt(o):(o=ct(t)?or:Ke.current,i.context=Kr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Wu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&el.enqueueReplaceState(i,i.state,null),ca(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ei(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===e0&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,e))}return e}function Zo(e,t){throw e=Object.prototype.toString.call(t),Error(F(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yh(e){var t=e._init;return t(e._payload)}function n0(e){function t(g,m){if(e){var w=g.deletions;w===null?(g.deletions=[m],g.flags|=16):w.push(m)}}function n(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=zn(g,m),g.index=0,g.sibling=null,g}function o(g,m,w){return g.index=w,e?(w=g.alternate,w!==null?(w=w.index,w<m?(g.flags|=2,m):w):(g.flags|=2,m)):(g.flags|=1048576,m)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,m,w,k){return m===null||m.tag!==6?(m=bc(w,g.mode,k),m.return=g,m):(m=i(m,w),m.return=g,m)}function c(g,m,w,k){var A=w.type;return A===kr?d(g,m,w.props.children,k,w.key):m!==null&&(m.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===yn&&yh(A)===m.type)?(k=i(m,w.props),k.ref=Ei(g,m,w),k.return=g,k):(k=ks(w.type,w.key,w.props,null,g.mode,k),k.ref=Ei(g,m,w),k.return=g,k)}function u(g,m,w,k){return m===null||m.tag!==4||m.stateNode.containerInfo!==w.containerInfo||m.stateNode.implementation!==w.implementation?(m=Sc(w,g.mode,k),m.return=g,m):(m=i(m,w.children||[]),m.return=g,m)}function d(g,m,w,k,A){return m===null||m.tag!==7?(m=nr(w,g.mode,k,A),m.return=g,m):(m=i(m,w),m.return=g,m)}function h(g,m,w){if(typeof m=="string"&&m!==""||typeof m=="number")return m=bc(""+m,g.mode,w),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Uo:return w=ks(m.type,m.key,m.props,null,g.mode,w),w.ref=Ei(g,null,m),w.return=g,w;case Sr:return m=Sc(m,g.mode,w),m.return=g,m;case yn:var k=m._init;return h(g,k(m._payload),w)}if(zi(m)||Si(m))return m=nr(m,g.mode,w,null),m.return=g,m;Zo(g,m)}return null}function p(g,m,w,k){var A=m!==null?m.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return A!==null?null:a(g,m,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Uo:return w.key===A?c(g,m,w,k):null;case Sr:return w.key===A?u(g,m,w,k):null;case yn:return A=w._init,p(g,m,A(w._payload),k)}if(zi(w)||Si(w))return A!==null?null:d(g,m,w,k,null);Zo(g,w)}return null}function y(g,m,w,k,A){if(typeof k=="string"&&k!==""||typeof k=="number")return g=g.get(w)||null,a(m,g,""+k,A);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Uo:return g=g.get(k.key===null?w:k.key)||null,c(m,g,k,A);case Sr:return g=g.get(k.key===null?w:k.key)||null,u(m,g,k,A);case yn:var C=k._init;return y(g,m,w,C(k._payload),A)}if(zi(k)||Si(k))return g=g.get(w)||null,d(m,g,k,A,null);Zo(m,k)}return null}function x(g,m,w,k){for(var A=null,C=null,j=m,T=m=0,L=null;j!==null&&T<w.length;T++){j.index>T?(L=j,j=null):L=j.sibling;var O=p(g,j,w[T],k);if(O===null){j===null&&(j=L);break}e&&j&&O.alternate===null&&t(g,j),m=o(O,m,T),C===null?A=O:C.sibling=O,C=O,j=L}if(T===w.length)return n(g,j),me&&qn(g,T),A;if(j===null){for(;T<w.length;T++)j=h(g,w[T],k),j!==null&&(m=o(j,m,T),C===null?A=j:C.sibling=j,C=j);return me&&qn(g,T),A}for(j=r(g,j);T<w.length;T++)L=y(j,g,T,w[T],k),L!==null&&(e&&L.alternate!==null&&j.delete(L.key===null?T:L.key),m=o(L,m,T),C===null?A=L:C.sibling=L,C=L);return e&&j.forEach(function(P){return t(g,P)}),me&&qn(g,T),A}function v(g,m,w,k){var A=Si(w);if(typeof A!="function")throw Error(F(150));if(w=A.call(w),w==null)throw Error(F(151));for(var C=A=null,j=m,T=m=0,L=null,O=w.next();j!==null&&!O.done;T++,O=w.next()){j.index>T?(L=j,j=null):L=j.sibling;var P=p(g,j,O.value,k);if(P===null){j===null&&(j=L);break}e&&j&&P.alternate===null&&t(g,j),m=o(P,m,T),C===null?A=P:C.sibling=P,C=P,j=L}if(O.done)return n(g,j),me&&qn(g,T),A;if(j===null){for(;!O.done;T++,O=w.next())O=h(g,O.value,k),O!==null&&(m=o(O,m,T),C===null?A=O:C.sibling=O,C=O);return me&&qn(g,T),A}for(j=r(g,j);!O.done;T++,O=w.next())O=y(j,g,T,O.value,k),O!==null&&(e&&O.alternate!==null&&j.delete(O.key===null?T:O.key),m=o(O,m,T),C===null?A=O:C.sibling=O,C=O);return e&&j.forEach(function(N){return t(g,N)}),me&&qn(g,T),A}function S(g,m,w,k){if(typeof w=="object"&&w!==null&&w.type===kr&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Uo:e:{for(var A=w.key,C=m;C!==null;){if(C.key===A){if(A=w.type,A===kr){if(C.tag===7){n(g,C.sibling),m=i(C,w.props.children),m.return=g,g=m;break e}}else if(C.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===yn&&yh(A)===C.type){n(g,C.sibling),m=i(C,w.props),m.ref=Ei(g,C,w),m.return=g,g=m;break e}n(g,C);break}else t(g,C);C=C.sibling}w.type===kr?(m=nr(w.props.children,g.mode,k,w.key),m.return=g,g=m):(k=ks(w.type,w.key,w.props,null,g.mode,k),k.ref=Ei(g,m,w),k.return=g,g=k)}return s(g);case Sr:e:{for(C=w.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===w.containerInfo&&m.stateNode.implementation===w.implementation){n(g,m.sibling),m=i(m,w.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else t(g,m);m=m.sibling}m=Sc(w,g.mode,k),m.return=g,g=m}return s(g);case yn:return C=w._init,S(g,m,C(w._payload),k)}if(zi(w))return x(g,m,w,k);if(Si(w))return v(g,m,w,k);Zo(g,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,w),m.return=g,g=m):(n(g,m),m=bc(w,g.mode,k),m.return=g,g=m),s(g)):n(g,m)}return S}var Jr=n0(!0),r0=n0(!1),zo={},Gt=Qn(zo),fo=Qn(zo),po=Qn(zo);function Zn(e){if(e===zo)throw Error(F(174));return e}function vf(e,t){switch(ce(po,t),ce(fo,e),ce(Gt,zo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Su(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Su(t,e)}fe(Gt),ce(Gt,t)}function Xr(){fe(Gt),fe(fo),fe(po)}function i0(e){Zn(po.current);var t=Zn(Gt.current),n=Su(t,e.type);t!==n&&(ce(fo,e),ce(Gt,n))}function wf(e){fo.current===e&&(fe(Gt),fe(fo))}var ye=Qn(0);function ua(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var mc=[];function bf(){for(var e=0;e<mc.length;e++)mc[e]._workInProgressVersionPrimary=null;mc.length=0}var ys=dn.ReactCurrentDispatcher,gc=dn.ReactCurrentBatchConfig,ar=0,ve=null,Te=null,$e=null,da=!1,Hi=!1,ho=0,tS=0;function He(){throw Error(F(321))}function Sf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ft(e[n],t[n]))return!1;return!0}function kf(e,t,n,r,i,o){if(ar=o,ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ys.current=e===null||e.memoizedState===null?oS:sS,e=n(r,i),Hi){o=0;do{if(Hi=!1,ho=0,25<=o)throw Error(F(301));o+=1,$e=Te=null,t.updateQueue=null,ys.current=aS,e=n(r,i)}while(Hi)}if(ys.current=fa,t=Te!==null&&Te.next!==null,ar=0,$e=Te=ve=null,da=!1,t)throw Error(F(300));return e}function Af(){var e=ho!==0;return ho=0,e}function _t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?ve.memoizedState=$e=e:$e=$e.next=e,$e}function Et(){if(Te===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=$e===null?ve.memoizedState:$e.next;if(t!==null)$e=t,Te=e;else{if(e===null)throw Error(F(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},$e===null?ve.memoizedState=$e=e:$e=$e.next=e}return $e}function mo(e,t){return typeof t=="function"?t(e):t}function xc(e){var t=Et(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=Te,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,c=null,u=o;do{var d=u.lane;if((ar&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=h,s=r):c=c.next=h,ve.lanes|=d,lr|=d}u=u.next}while(u!==null&&u!==o);c===null?s=r:c.next=a,Ft(r,t.memoizedState)||(at=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ve.lanes|=o,lr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function yc(e){var t=Et(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Ft(o,t.memoizedState)||(at=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function o0(){}function s0(e,t){var n=ve,r=Et(),i=t(),o=!Ft(r.memoizedState,i);if(o&&(r.memoizedState=i,at=!0),r=r.queue,Cf(c0.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,go(9,l0.bind(null,n,r,i,t),void 0,null),Ne===null)throw Error(F(349));ar&30||a0(n,t,i)}return i}function a0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function l0(e,t,n,r){t.value=n,t.getSnapshot=r,u0(t)&&d0(e)}function c0(e,t,n){return n(function(){u0(t)&&d0(e)})}function u0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ft(e,n)}catch{return!0}}function d0(e){var t=ln(e,1);t!==null&&Bt(t,e,1,-1)}function vh(e){var t=_t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mo,lastRenderedState:e},t.queue=e,e=e.dispatch=iS.bind(null,ve,e),[t.memoizedState,e]}function go(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function f0(){return Et().memoizedState}function vs(e,t,n,r){var i=_t();ve.flags|=e,i.memoizedState=go(1|t,n,void 0,r===void 0?null:r)}function tl(e,t,n,r){var i=Et();r=r===void 0?null:r;var o=void 0;if(Te!==null){var s=Te.memoizedState;if(o=s.destroy,r!==null&&Sf(r,s.deps)){i.memoizedState=go(t,n,o,r);return}}ve.flags|=e,i.memoizedState=go(1|t,n,o,r)}function wh(e,t){return vs(8390656,8,e,t)}function Cf(e,t){return tl(2048,8,e,t)}function p0(e,t){return tl(4,2,e,t)}function h0(e,t){return tl(4,4,e,t)}function m0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function g0(e,t,n){return n=n!=null?n.concat([e]):null,tl(4,4,m0.bind(null,t,e),n)}function jf(){}function x0(e,t){var n=Et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Sf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function y0(e,t){var n=Et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Sf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function v0(e,t,n){return ar&21?(Ft(n,t)||(n=Sx(),ve.lanes|=n,lr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,at=!0),e.memoizedState=n)}function nS(e,t){var n=ie;ie=n!==0&&4>n?n:4,e(!0);var r=gc.transition;gc.transition={};try{e(!1),t()}finally{ie=n,gc.transition=r}}function w0(){return Et().memoizedState}function rS(e,t,n){var r=Rn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},b0(e))S0(t,n);else if(n=Xx(e,t,n,r),n!==null){var i=Ze();Bt(n,e,r,i),k0(n,t,r)}}function iS(e,t,n){var r=Rn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(b0(e))S0(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Ft(a,s)){var c=t.interleaved;c===null?(i.next=i,xf(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Xx(e,t,i,r),n!==null&&(i=Ze(),Bt(n,e,r,i),k0(n,t,r))}}function b0(e){var t=e.alternate;return e===ve||t!==null&&t===ve}function S0(e,t){Hi=da=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function k0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nf(e,n)}}var fa={readContext:jt,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},oS={readContext:jt,useCallback:function(e,t){return _t().memoizedState=[e,t===void 0?null:t],e},useContext:jt,useEffect:wh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,vs(4194308,4,m0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return vs(4194308,4,e,t)},useInsertionEffect:function(e,t){return vs(4,2,e,t)},useMemo:function(e,t){var n=_t();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=_t();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=rS.bind(null,ve,e),[r.memoizedState,e]},useRef:function(e){var t=_t();return e={current:e},t.memoizedState=e},useState:vh,useDebugValue:jf,useDeferredValue:function(e){return _t().memoizedState=e},useTransition:function(){var e=vh(!1),t=e[0];return e=nS.bind(null,e[1]),_t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ve,i=_t();if(me){if(n===void 0)throw Error(F(407));n=n()}else{if(n=t(),Ne===null)throw Error(F(349));ar&30||a0(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,wh(c0.bind(null,r,o,e),[e]),r.flags|=2048,go(9,l0.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=_t(),t=Ne.identifierPrefix;if(me){var n=tn,r=en;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ho++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=tS++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sS={readContext:jt,useCallback:x0,useContext:jt,useEffect:Cf,useImperativeHandle:g0,useInsertionEffect:p0,useLayoutEffect:h0,useMemo:y0,useReducer:xc,useRef:f0,useState:function(){return xc(mo)},useDebugValue:jf,useDeferredValue:function(e){var t=Et();return v0(t,Te.memoizedState,e)},useTransition:function(){var e=xc(mo)[0],t=Et().memoizedState;return[e,t]},useMutableSource:o0,useSyncExternalStore:s0,useId:w0,unstable_isNewReconciler:!1},aS={readContext:jt,useCallback:x0,useContext:jt,useEffect:Cf,useImperativeHandle:g0,useInsertionEffect:p0,useLayoutEffect:h0,useMemo:y0,useReducer:yc,useRef:f0,useState:function(){return yc(mo)},useDebugValue:jf,useDeferredValue:function(e){var t=Et();return Te===null?t.memoizedState=e:v0(t,Te.memoizedState,e)},useTransition:function(){var e=yc(mo)[0],t=Et().memoizedState;return[e,t]},useMutableSource:o0,useSyncExternalStore:s0,useId:w0,unstable_isNewReconciler:!1};function Zr(e,t){try{var n="",r=t;do n+=Nw(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function vc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Vu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var lS=typeof WeakMap=="function"?WeakMap:Map;function A0(e,t,n){n=nn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ha||(ha=!0,td=r),Vu(e,t)},n}function C0(e,t,n){n=nn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Vu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Vu(e,t),typeof r!="function"&&($n===null?$n=new Set([this]):$n.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function bh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new lS;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=SS.bind(null,e,t,n),t.then(e,e))}function Sh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function kh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=nn(-1,1),t.tag=2,Pn(n,t,1))),n.lanes|=1),e)}var cS=dn.ReactCurrentOwner,at=!1;function Xe(e,t,n,r){t.child=e===null?r0(t,null,n,r):Jr(t,e.child,n,r)}function Ah(e,t,n,r,i){n=n.render;var o=t.ref;return Dr(t,i),r=kf(e,t,n,r,o,i),n=Af(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,cn(e,t,i)):(me&&n&&df(t),t.flags|=1,Xe(e,t,r,i),t.child)}function Ch(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!zf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,j0(e,t,o,r,i)):(e=ks(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ao,n(s,r)&&e.ref===t.ref)return cn(e,t,i)}return t.flags|=1,e=zn(o,r),e.ref=t.ref,e.return=t,t.child=e}function j0(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ao(o,r)&&e.ref===t.ref)if(at=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(at=!0);else return t.lanes=e.lanes,cn(e,t,i)}return Qu(e,t,n,r,i)}function E0(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Rr,ft),ft|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ce(Rr,ft),ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ce(Rr,ft),ft|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ce(Rr,ft),ft|=r;return Xe(e,t,i,n),t.child}function T0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Qu(e,t,n,r,i){var o=ct(n)?or:Ke.current;return o=Kr(t,o),Dr(t,i),n=kf(e,t,n,r,o,i),r=Af(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,cn(e,t,i)):(me&&r&&df(t),t.flags|=1,Xe(e,t,n,i),t.child)}function jh(e,t,n,r,i){if(ct(n)){var o=!0;ia(t)}else o=!1;if(Dr(t,i),t.stateNode===null)ws(e,t),t0(t,n,r),Hu(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=jt(u):(u=ct(n)?or:Ke.current,u=Kr(t,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||c!==u)&&xh(t,s,r,u),vn=!1;var p=t.memoizedState;s.state=p,ca(t,r,s,i),c=t.memoizedState,a!==r||p!==c||lt.current||vn?(typeof d=="function"&&(Wu(t,n,d,r),c=t.memoizedState),(a=vn||gh(t,n,a,r,p,c,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Zx(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Pt(t.type,a),s.props=u,h=t.pendingProps,p=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=jt(c):(c=ct(n)?or:Ke.current,c=Kr(t,c));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||p!==c)&&xh(t,s,r,c),vn=!1,p=t.memoizedState,s.state=p,ca(t,r,s,i);var x=t.memoizedState;a!==h||p!==x||lt.current||vn?(typeof y=="function"&&(Wu(t,n,y,r),x=t.memoizedState),(u=vn||gh(t,n,u,r,p,x,c)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,x,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,x,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),s.props=r,s.state=x,s.context=c,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Gu(e,t,n,r,o,i)}function Gu(e,t,n,r,i,o){T0(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&dh(t,n,!1),cn(e,t,o);r=t.stateNode,cS.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Jr(t,e.child,null,o),t.child=Jr(t,null,a,o)):Xe(e,t,a,o),t.memoizedState=r.state,i&&dh(t,n,!0),t.child}function L0(e){var t=e.stateNode;t.pendingContext?uh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&uh(e,t.context,!1),vf(e,t.containerInfo)}function Eh(e,t,n,r,i){return Yr(),pf(i),t.flags|=256,Xe(e,t,n,r),t.child}var qu={dehydrated:null,treeContext:null,retryLane:0};function Ku(e){return{baseLanes:e,cachePool:null,transitions:null}}function O0(e,t,n){var r=t.pendingProps,i=ye.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ce(ye,i&1),e===null)return _u(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=il(s,r,0,null),e=nr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ku(n),t.memoizedState=qu,e):Ef(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return uS(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=zn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=zn(a,o):(o=nr(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Ku(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=qu,r}return o=e.child,e=o.sibling,r=zn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ef(e,t){return t=il({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function es(e,t,n,r){return r!==null&&pf(r),Jr(t,e.child,null,n),e=Ef(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function uS(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=vc(Error(F(422))),es(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=il({mode:"visible",children:r.children},i,0,null),o=nr(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Jr(t,e.child,null,s),t.child.memoizedState=Ku(s),t.memoizedState=qu,o);if(!(t.mode&1))return es(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(F(419)),r=vc(o,r,void 0),es(e,t,s,r)}if(a=(s&e.childLanes)!==0,at||a){if(r=Ne,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ln(e,i),Bt(r,e,i,-1))}return Rf(),r=vc(Error(F(421))),es(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=kS.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,pt=On(i.nextSibling),ht=t,me=!0,Rt=null,e!==null&&(bt[St++]=en,bt[St++]=tn,bt[St++]=sr,en=e.id,tn=e.overflow,sr=t),t=Ef(t,r.children),t.flags|=4096,t)}function Th(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Uu(e.return,t,n)}function wc(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function P0(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Xe(e,t,r.children,n),r=ye.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Th(e,n,t);else if(e.tag===19)Th(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ce(ye,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ua(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),wc(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ua(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}wc(t,!0,n,null,o);break;case"together":wc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ws(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function cn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),lr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(F(153));if(t.child!==null){for(e=t.child,n=zn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function dS(e,t,n){switch(t.tag){case 3:L0(t),Yr();break;case 5:i0(t);break;case 1:ct(t.type)&&ia(t);break;case 4:vf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ce(aa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ce(ye,ye.current&1),t.flags|=128,null):n&t.child.childLanes?O0(e,t,n):(ce(ye,ye.current&1),e=cn(e,t,n),e!==null?e.sibling:null);ce(ye,ye.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return P0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(ye,ye.current),r)break;return null;case 22:case 23:return t.lanes=0,E0(e,t,n)}return cn(e,t,n)}var $0,Yu,R0,z0;$0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yu=function(){};R0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Zn(Gt.current);var o=null;switch(n){case"input":i=yu(e,i),r=yu(e,r),o=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),o=[];break;case"textarea":i=bu(e,i),r=bu(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=na)}ku(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(eo.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&a[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(eo.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ue("scroll",e),o||a===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};z0=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ti(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function fS(e,t,n){var r=t.pendingProps;switch(ff(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(t),null;case 1:return ct(t.type)&&ra(),Ve(t),null;case 3:return r=t.stateNode,Xr(),fe(lt),fe(Ke),bf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Xo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Rt!==null&&(id(Rt),Rt=null))),Yu(e,t),Ve(t),null;case 5:wf(t);var i=Zn(po.current);if(n=t.type,e!==null&&t.stateNode!=null)R0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(F(166));return Ve(t),null}if(e=Zn(Gt.current),Xo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Wt]=t,r[uo]=o,e=(t.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(i=0;i<Bi.length;i++)ue(Bi[i],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":Ip(r,o),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ue("invalid",r);break;case"textarea":Dp(r,o),ue("invalid",r)}ku(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Jo(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Jo(r.textContent,a,e),i=["children",""+a]):eo.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ue("scroll",r)}switch(n){case"input":Wo(r),Fp(r,o,!0);break;case"textarea":Wo(r),Mp(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=na)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ax(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Wt]=t,e[uo]=r,$0(e,t,!1,!1),t.stateNode=e;e:{switch(s=Au(n,r),n){case"dialog":ue("cancel",e),ue("close",e),i=r;break;case"iframe":case"object":case"embed":ue("load",e),i=r;break;case"video":case"audio":for(i=0;i<Bi.length;i++)ue(Bi[i],e);i=r;break;case"source":ue("error",e),i=r;break;case"img":case"image":case"link":ue("error",e),ue("load",e),i=r;break;case"details":ue("toggle",e),i=r;break;case"input":Ip(e,r),i=yu(e,r),ue("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),ue("invalid",e);break;case"textarea":Dp(e,r),i=bu(e,r),ue("invalid",e);break;default:i=r}ku(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var c=a[o];o==="style"?ux(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&lx(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&to(e,c):typeof c=="number"&&to(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(eo.hasOwnProperty(o)?c!=null&&o==="onScroll"&&ue("scroll",e):c!=null&&Yd(e,o,c,s))}switch(n){case"input":Wo(e),Fp(e,r,!1);break;case"textarea":Wo(e),Mp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Fn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Nr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Nr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=na)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ve(t),null;case 6:if(e&&t.stateNode!=null)z0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(F(166));if(n=Zn(po.current),Zn(Gt.current),Xo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Wt]=t,(o=r.nodeValue!==n)&&(e=ht,e!==null))switch(e.tag){case 3:Jo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Jo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Wt]=t,t.stateNode=r}return Ve(t),null;case 13:if(fe(ye),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(me&&pt!==null&&t.mode&1&&!(t.flags&128))Jx(),Yr(),t.flags|=98560,o=!1;else if(o=Xo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(F(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(F(317));o[Wt]=t}else Yr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ve(t),o=!1}else Rt!==null&&(id(Rt),Rt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ye.current&1?Le===0&&(Le=3):Rf())),t.updateQueue!==null&&(t.flags|=4),Ve(t),null);case 4:return Xr(),Yu(e,t),e===null&&lo(t.stateNode.containerInfo),Ve(t),null;case 10:return gf(t.type._context),Ve(t),null;case 17:return ct(t.type)&&ra(),Ve(t),null;case 19:if(fe(ye),o=t.memoizedState,o===null)return Ve(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Ti(o,!1);else{if(Le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ua(e),s!==null){for(t.flags|=128,Ti(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ce(ye,ye.current&1|2),t.child}e=e.sibling}o.tail!==null&&ke()>ei&&(t.flags|=128,r=!0,Ti(o,!1),t.lanes=4194304)}else{if(!r)if(e=ua(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ti(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!me)return Ve(t),null}else 2*ke()-o.renderingStartTime>ei&&n!==1073741824&&(t.flags|=128,r=!0,Ti(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ke(),t.sibling=null,n=ye.current,ce(ye,r?n&1|2:n&1),t):(Ve(t),null);case 22:case 23:return $f(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ft&1073741824&&(Ve(t),t.subtreeFlags&6&&(t.flags|=8192)):Ve(t),null;case 24:return null;case 25:return null}throw Error(F(156,t.tag))}function pS(e,t){switch(ff(t),t.tag){case 1:return ct(t.type)&&ra(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xr(),fe(lt),fe(Ke),bf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return wf(t),null;case 13:if(fe(ye),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(F(340));Yr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(ye),null;case 4:return Xr(),null;case 10:return gf(t.type._context),null;case 22:case 23:return $f(),null;case 24:return null;default:return null}}var ts=!1,Ge=!1,hS=typeof WeakSet=="function"?WeakSet:Set,W=null;function $r(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(e,t,r)}else n.current=null}function Ju(e,t,n){try{n()}catch(r){Se(e,t,r)}}var Lh=!1;function mS(e,t){if(zu=Zs,e=Fx(),uf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,c=-1,u=0,d=0,h=e,p=null;t:for(;;){for(var y;h!==n||i!==0&&h.nodeType!==3||(a=s+i),h!==o||r!==0&&h.nodeType!==3||(c=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(y=h.firstChild)!==null;)p=h,h=y;for(;;){if(h===e)break t;if(p===n&&++u===i&&(a=s),p===o&&++d===r&&(c=s),(y=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=y}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nu={focusedElem:e,selectionRange:n},Zs=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,S=x.memoizedState,g=t.stateNode,m=g.getSnapshotBeforeUpdate(t.elementType===t.type?v:Pt(t.type,v),S);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(k){Se(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return x=Lh,Lh=!1,x}function Vi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ju(t,n,o)}i=i.next}while(i!==r)}}function nl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Xu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function N0(e){var t=e.alternate;t!==null&&(e.alternate=null,N0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Wt],delete t[uo],delete t[Fu],delete t[Jb],delete t[Xb])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function B0(e){return e.tag===5||e.tag===3||e.tag===4}function Oh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||B0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=na));else if(r!==4&&(e=e.child,e!==null))for(Zu(e,t,n),e=e.sibling;e!==null;)Zu(e,t,n),e=e.sibling}function ed(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ed(e,t,n),e=e.sibling;e!==null;)ed(e,t,n),e=e.sibling}var Fe=null,$t=!1;function mn(e,t,n){for(n=n.child;n!==null;)I0(e,t,n),n=n.sibling}function I0(e,t,n){if(Qt&&typeof Qt.onCommitFiberUnmount=="function")try{Qt.onCommitFiberUnmount(qa,n)}catch{}switch(n.tag){case 5:Ge||$r(n,t);case 6:var r=Fe,i=$t;Fe=null,mn(e,t,n),Fe=r,$t=i,Fe!==null&&($t?(e=Fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Fe.removeChild(n.stateNode));break;case 18:Fe!==null&&($t?(e=Fe,n=n.stateNode,e.nodeType===8?pc(e.parentNode,n):e.nodeType===1&&pc(e,n),oo(e)):pc(Fe,n.stateNode));break;case 4:r=Fe,i=$t,Fe=n.stateNode.containerInfo,$t=!0,mn(e,t,n),Fe=r,$t=i;break;case 0:case 11:case 14:case 15:if(!Ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ju(n,t,s),i=i.next}while(i!==r)}mn(e,t,n);break;case 1:if(!Ge&&($r(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Se(n,t,a)}mn(e,t,n);break;case 21:mn(e,t,n);break;case 22:n.mode&1?(Ge=(r=Ge)||n.memoizedState!==null,mn(e,t,n),Ge=r):mn(e,t,n);break;default:mn(e,t,n)}}function Ph(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new hS),t.forEach(function(r){var i=AS.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ot(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Fe=a.stateNode,$t=!1;break e;case 3:Fe=a.stateNode.containerInfo,$t=!0;break e;case 4:Fe=a.stateNode.containerInfo,$t=!0;break e}a=a.return}if(Fe===null)throw Error(F(160));I0(o,s,i),Fe=null,$t=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Se(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)F0(t,e),t=t.sibling}function F0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ot(t,e),Mt(e),r&4){try{Vi(3,e,e.return),nl(3,e)}catch(v){Se(e,e.return,v)}try{Vi(5,e,e.return)}catch(v){Se(e,e.return,v)}}break;case 1:Ot(t,e),Mt(e),r&512&&n!==null&&$r(n,n.return);break;case 5:if(Ot(t,e),Mt(e),r&512&&n!==null&&$r(n,n.return),e.flags&32){var i=e.stateNode;try{to(i,"")}catch(v){Se(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&ox(i,o),Au(a,s);var u=Au(a,o);for(s=0;s<c.length;s+=2){var d=c[s],h=c[s+1];d==="style"?ux(i,h):d==="dangerouslySetInnerHTML"?lx(i,h):d==="children"?to(i,h):Yd(i,d,h,u)}switch(a){case"input":vu(i,o);break;case"textarea":sx(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Nr(i,!!o.multiple,y,!1):p!==!!o.multiple&&(o.defaultValue!=null?Nr(i,!!o.multiple,o.defaultValue,!0):Nr(i,!!o.multiple,o.multiple?[]:"",!1))}i[uo]=o}catch(v){Se(e,e.return,v)}}break;case 6:if(Ot(t,e),Mt(e),r&4){if(e.stateNode===null)throw Error(F(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){Se(e,e.return,v)}}break;case 3:if(Ot(t,e),Mt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{oo(t.containerInfo)}catch(v){Se(e,e.return,v)}break;case 4:Ot(t,e),Mt(e);break;case 13:Ot(t,e),Mt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Of=ke())),r&4&&Ph(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ge=(u=Ge)||d,Ot(t,e),Ge=u):Ot(t,e),Mt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(W=e,d=e.child;d!==null;){for(h=W=d;W!==null;){switch(p=W,y=p.child,p.tag){case 0:case 11:case 14:case 15:Vi(4,p,p.return);break;case 1:$r(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(v){Se(r,n,v)}}break;case 5:$r(p,p.return);break;case 22:if(p.memoizedState!==null){Rh(h);continue}}y!==null?(y.return=p,W=y):Rh(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,c=h.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=cx("display",s))}catch(v){Se(e,e.return,v)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){Se(e,e.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ot(t,e),Mt(e),r&4&&Ph(e);break;case 21:break;default:Ot(t,e),Mt(e)}}function Mt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(B0(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(to(i,""),r.flags&=-33);var o=Oh(e);ed(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Oh(e);Zu(e,a,s);break;default:throw Error(F(161))}}catch(c){Se(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gS(e,t,n){W=e,D0(e)}function D0(e,t,n){for(var r=(e.mode&1)!==0;W!==null;){var i=W,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||ts;if(!s){var a=i.alternate,c=a!==null&&a.memoizedState!==null||Ge;a=ts;var u=Ge;if(ts=s,(Ge=c)&&!u)for(W=i;W!==null;)s=W,c=s.child,s.tag===22&&s.memoizedState!==null?zh(i):c!==null?(c.return=s,W=c):zh(i);for(;o!==null;)W=o,D0(o),o=o.sibling;W=i,ts=a,Ge=u}$h(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,W=o):$h(e)}}function $h(e){for(;W!==null;){var t=W;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ge||nl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ge)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Pt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&mh(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}mh(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&oo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}Ge||t.flags&512&&Xu(t)}catch(p){Se(t,t.return,p)}}if(t===e){W=null;break}if(n=t.sibling,n!==null){n.return=t.return,W=n;break}W=t.return}}function Rh(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var n=t.sibling;if(n!==null){n.return=t.return,W=n;break}W=t.return}}function zh(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{nl(4,t)}catch(c){Se(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Se(t,i,c)}}var o=t.return;try{Xu(t)}catch(c){Se(t,o,c)}break;case 5:var s=t.return;try{Xu(t)}catch(c){Se(t,s,c)}}}catch(c){Se(t,t.return,c)}if(t===e){W=null;break}var a=t.sibling;if(a!==null){a.return=t.return,W=a;break}W=t.return}}var xS=Math.ceil,pa=dn.ReactCurrentDispatcher,Tf=dn.ReactCurrentOwner,At=dn.ReactCurrentBatchConfig,te=0,Ne=null,Ce=null,De=0,ft=0,Rr=Qn(0),Le=0,xo=null,lr=0,rl=0,Lf=0,Qi=null,ot=null,Of=0,ei=1/0,Jt=null,ha=!1,td=null,$n=null,ns=!1,Cn=null,ma=0,Gi=0,nd=null,bs=-1,Ss=0;function Ze(){return te&6?ke():bs!==-1?bs:bs=ke()}function Rn(e){return e.mode&1?te&2&&De!==0?De&-De:eS.transition!==null?(Ss===0&&(Ss=Sx()),Ss):(e=ie,e!==0||(e=window.event,e=e===void 0?16:Lx(e.type)),e):1}function Bt(e,t,n,r){if(50<Gi)throw Gi=0,nd=null,Error(F(185));Po(e,n,r),(!(te&2)||e!==Ne)&&(e===Ne&&(!(te&2)&&(rl|=n),Le===4&&Sn(e,De)),ut(e,r),n===1&&te===0&&!(t.mode&1)&&(ei=ke()+500,Za&&Gn()))}function ut(e,t){var n=e.callbackNode;eb(e,t);var r=Xs(e,e===Ne?De:0);if(r===0)n!==null&&Wp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Wp(n),t===1)e.tag===0?Zb(Nh.bind(null,e)):qx(Nh.bind(null,e)),Kb(function(){!(te&6)&&Gn()}),n=null;else{switch(kx(r)){case 1:n=tf;break;case 4:n=wx;break;case 16:n=Js;break;case 536870912:n=bx;break;default:n=Js}n=G0(n,M0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function M0(e,t){if(bs=-1,Ss=0,te&6)throw Error(F(327));var n=e.callbackNode;if(Mr()&&e.callbackNode!==n)return null;var r=Xs(e,e===Ne?De:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ga(e,r);else{t=r;var i=te;te|=2;var o=U0();(Ne!==e||De!==t)&&(Jt=null,ei=ke()+500,tr(e,t));do try{wS();break}catch(a){_0(e,a)}while(1);mf(),pa.current=o,te=i,Ce!==null?t=0:(Ne=null,De=0,t=Le)}if(t!==0){if(t===2&&(i=Lu(e),i!==0&&(r=i,t=rd(e,i))),t===1)throw n=xo,tr(e,0),Sn(e,r),ut(e,ke()),n;if(t===6)Sn(e,r);else{if(i=e.current.alternate,!(r&30)&&!yS(i)&&(t=ga(e,r),t===2&&(o=Lu(e),o!==0&&(r=o,t=rd(e,o))),t===1))throw n=xo,tr(e,0),Sn(e,r),ut(e,ke()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(F(345));case 2:Kn(e,ot,Jt);break;case 3:if(Sn(e,r),(r&130023424)===r&&(t=Of+500-ke(),10<t)){if(Xs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ze(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Iu(Kn.bind(null,e,ot,Jt),t);break}Kn(e,ot,Jt);break;case 4:if(Sn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Nt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xS(r/1960))-r,10<r){e.timeoutHandle=Iu(Kn.bind(null,e,ot,Jt),r);break}Kn(e,ot,Jt);break;case 5:Kn(e,ot,Jt);break;default:throw Error(F(329))}}}return ut(e,ke()),e.callbackNode===n?M0.bind(null,e):null}function rd(e,t){var n=Qi;return e.current.memoizedState.isDehydrated&&(tr(e,t).flags|=256),e=ga(e,t),e!==2&&(t=ot,ot=n,t!==null&&id(t)),e}function id(e){ot===null?ot=e:ot.push.apply(ot,e)}function yS(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ft(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Sn(e,t){for(t&=~Lf,t&=~rl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Nt(t),r=1<<n;e[n]=-1,t&=~r}}function Nh(e){if(te&6)throw Error(F(327));Mr();var t=Xs(e,0);if(!(t&1))return ut(e,ke()),null;var n=ga(e,t);if(e.tag!==0&&n===2){var r=Lu(e);r!==0&&(t=r,n=rd(e,r))}if(n===1)throw n=xo,tr(e,0),Sn(e,t),ut(e,ke()),n;if(n===6)throw Error(F(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kn(e,ot,Jt),ut(e,ke()),null}function Pf(e,t){var n=te;te|=1;try{return e(t)}finally{te=n,te===0&&(ei=ke()+500,Za&&Gn())}}function cr(e){Cn!==null&&Cn.tag===0&&!(te&6)&&Mr();var t=te;te|=1;var n=At.transition,r=ie;try{if(At.transition=null,ie=1,e)return e()}finally{ie=r,At.transition=n,te=t,!(te&6)&&Gn()}}function $f(){ft=Rr.current,fe(Rr)}function tr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qb(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(ff(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ra();break;case 3:Xr(),fe(lt),fe(Ke),bf();break;case 5:wf(r);break;case 4:Xr();break;case 13:fe(ye);break;case 19:fe(ye);break;case 10:gf(r.type._context);break;case 22:case 23:$f()}n=n.return}if(Ne=e,Ce=e=zn(e.current,null),De=ft=t,Le=0,xo=null,Lf=rl=lr=0,ot=Qi=null,Xn!==null){for(t=0;t<Xn.length;t++)if(n=Xn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Xn=null}return e}function _0(e,t){do{var n=Ce;try{if(mf(),ys.current=fa,da){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}da=!1}if(ar=0,$e=Te=ve=null,Hi=!1,ho=0,Tf.current=null,n===null||n.return===null){Le=1,xo=t,Ce=null;break}e:{var o=e,s=n.return,a=n,c=t;if(t=De,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=Sh(s);if(y!==null){y.flags&=-257,kh(y,s,a,o,t),y.mode&1&&bh(o,u,t),t=y,c=u;var x=t.updateQueue;if(x===null){var v=new Set;v.add(c),t.updateQueue=v}else x.add(c);break e}else{if(!(t&1)){bh(o,u,t),Rf();break e}c=Error(F(426))}}else if(me&&a.mode&1){var S=Sh(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),kh(S,s,a,o,t),pf(Zr(c,a));break e}}o=c=Zr(c,a),Le!==4&&(Le=2),Qi===null?Qi=[o]:Qi.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=A0(o,c,t);hh(o,g);break e;case 1:a=c;var m=o.type,w=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&($n===null||!$n.has(w)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=C0(o,a,t);hh(o,k);break e}}o=o.return}while(o!==null)}H0(n)}catch(A){t=A,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(1)}function U0(){var e=pa.current;return pa.current=fa,e===null?fa:e}function Rf(){(Le===0||Le===3||Le===2)&&(Le=4),Ne===null||!(lr&268435455)&&!(rl&268435455)||Sn(Ne,De)}function ga(e,t){var n=te;te|=2;var r=U0();(Ne!==e||De!==t)&&(Jt=null,tr(e,t));do try{vS();break}catch(i){_0(e,i)}while(1);if(mf(),te=n,pa.current=r,Ce!==null)throw Error(F(261));return Ne=null,De=0,Le}function vS(){for(;Ce!==null;)W0(Ce)}function wS(){for(;Ce!==null&&!Vw();)W0(Ce)}function W0(e){var t=Q0(e.alternate,e,ft);e.memoizedProps=e.pendingProps,t===null?H0(e):Ce=t,Tf.current=null}function H0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=pS(n,t),n!==null){n.flags&=32767,Ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Le=6,Ce=null;return}}else if(n=fS(n,t,ft),n!==null){Ce=n;return}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);Le===0&&(Le=5)}function Kn(e,t,n){var r=ie,i=At.transition;try{At.transition=null,ie=1,bS(e,t,n,r)}finally{At.transition=i,ie=r}return null}function bS(e,t,n,r){do Mr();while(Cn!==null);if(te&6)throw Error(F(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(F(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(tb(e,o),e===Ne&&(Ce=Ne=null,De=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ns||(ns=!0,G0(Js,function(){return Mr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=At.transition,At.transition=null;var s=ie;ie=1;var a=te;te|=4,Tf.current=null,mS(e,n),F0(n,e),_b(Nu),Zs=!!zu,Nu=zu=null,e.current=n,gS(n),Qw(),te=a,ie=s,At.transition=o}else e.current=n;if(ns&&(ns=!1,Cn=e,ma=i),o=e.pendingLanes,o===0&&($n=null),Kw(n.stateNode),ut(e,ke()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ha)throw ha=!1,e=td,td=null,e;return ma&1&&e.tag!==0&&Mr(),o=e.pendingLanes,o&1?e===nd?Gi++:(Gi=0,nd=e):Gi=0,Gn(),null}function Mr(){if(Cn!==null){var e=kx(ma),t=At.transition,n=ie;try{if(At.transition=null,ie=16>e?16:e,Cn===null)var r=!1;else{if(e=Cn,Cn=null,ma=0,te&6)throw Error(F(331));var i=te;for(te|=4,W=e.current;W!==null;){var o=W,s=o.child;if(W.flags&16){var a=o.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for(W=u;W!==null;){var d=W;switch(d.tag){case 0:case 11:case 15:Vi(8,d,o)}var h=d.child;if(h!==null)h.return=d,W=h;else for(;W!==null;){d=W;var p=d.sibling,y=d.return;if(N0(d),d===u){W=null;break}if(p!==null){p.return=y,W=p;break}W=y}}}var x=o.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}W=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,W=s;else e:for(;W!==null;){if(o=W,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Vi(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,W=g;break e}W=o.return}}var m=e.current;for(W=m;W!==null;){s=W;var w=s.child;if(s.subtreeFlags&2064&&w!==null)w.return=s,W=w;else e:for(s=m;W!==null;){if(a=W,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:nl(9,a)}}catch(A){Se(a,a.return,A)}if(a===s){W=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,W=k;break e}W=a.return}}if(te=i,Gn(),Qt&&typeof Qt.onPostCommitFiberRoot=="function")try{Qt.onPostCommitFiberRoot(qa,e)}catch{}r=!0}return r}finally{ie=n,At.transition=t}}return!1}function Bh(e,t,n){t=Zr(n,t),t=A0(e,t,1),e=Pn(e,t,1),t=Ze(),e!==null&&(Po(e,1,t),ut(e,t))}function Se(e,t,n){if(e.tag===3)Bh(e,e,n);else for(;t!==null;){if(t.tag===3){Bh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($n===null||!$n.has(r))){e=Zr(n,e),e=C0(t,e,1),t=Pn(t,e,1),e=Ze(),t!==null&&(Po(t,1,e),ut(t,e));break}}t=t.return}}function SS(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ze(),e.pingedLanes|=e.suspendedLanes&n,Ne===e&&(De&n)===n&&(Le===4||Le===3&&(De&130023424)===De&&500>ke()-Of?tr(e,0):Lf|=n),ut(e,t)}function V0(e,t){t===0&&(e.mode&1?(t=Qo,Qo<<=1,!(Qo&130023424)&&(Qo=4194304)):t=1);var n=Ze();e=ln(e,t),e!==null&&(Po(e,t,n),ut(e,n))}function kS(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),V0(e,n)}function AS(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(t),V0(e,n)}var Q0;Q0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||lt.current)at=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return at=!1,dS(e,t,n);at=!!(e.flags&131072)}else at=!1,me&&t.flags&1048576&&Kx(t,sa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ws(e,t),e=t.pendingProps;var i=Kr(t,Ke.current);Dr(t,n),i=kf(null,t,r,e,i,n);var o=Af();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ct(r)?(o=!0,ia(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,yf(t),i.updater=el,t.stateNode=i,i._reactInternals=t,Hu(t,r,e,n),t=Gu(null,t,r,!0,o,n)):(t.tag=0,me&&o&&df(t),Xe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ws(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=jS(r),e=Pt(r,e),i){case 0:t=Qu(null,t,r,e,n);break e;case 1:t=jh(null,t,r,e,n);break e;case 11:t=Ah(null,t,r,e,n);break e;case 14:t=Ch(null,t,r,Pt(r.type,e),n);break e}throw Error(F(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),Qu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),jh(e,t,r,i,n);case 3:e:{if(L0(t),e===null)throw Error(F(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Zx(e,t),ca(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Zr(Error(F(423)),t),t=Eh(e,t,r,n,i);break e}else if(r!==i){i=Zr(Error(F(424)),t),t=Eh(e,t,r,n,i);break e}else for(pt=On(t.stateNode.containerInfo.firstChild),ht=t,me=!0,Rt=null,n=r0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yr(),r===i){t=cn(e,t,n);break e}Xe(e,t,r,n)}t=t.child}return t;case 5:return i0(t),e===null&&_u(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Bu(r,i)?s=null:o!==null&&Bu(r,o)&&(t.flags|=32),T0(e,t),Xe(e,t,s,n),t.child;case 6:return e===null&&_u(t),null;case 13:return O0(e,t,n);case 4:return vf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Jr(t,null,r,n):Xe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),Ah(e,t,r,i,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,ce(aa,r._currentValue),r._currentValue=s,o!==null)if(Ft(o.value,s)){if(o.children===i.children&&!lt.current){t=cn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=nn(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Uu(o.return,n,t),a.lanes|=n;break}c=c.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(F(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Uu(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Xe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Dr(t,n),i=jt(i),r=r(i),t.flags|=1,Xe(e,t,r,n),t.child;case 14:return r=t.type,i=Pt(r,t.pendingProps),i=Pt(r.type,i),Ch(e,t,r,i,n);case 15:return j0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),ws(e,t),t.tag=1,ct(r)?(e=!0,ia(t)):e=!1,Dr(t,n),t0(t,r,i),Hu(t,r,i,n),Gu(null,t,r,!0,e,n);case 19:return P0(e,t,n);case 22:return E0(e,t,n)}throw Error(F(156,t.tag))};function G0(e,t){return vx(e,t)}function CS(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(e,t,n,r){return new CS(e,t,n,r)}function zf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jS(e){if(typeof e=="function")return zf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xd)return 11;if(e===Zd)return 14}return 2}function zn(e,t){var n=e.alternate;return n===null?(n=kt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ks(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")zf(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case kr:return nr(n.children,i,o,t);case Jd:s=8,i|=8;break;case hu:return e=kt(12,n,t,i|2),e.elementType=hu,e.lanes=o,e;case mu:return e=kt(13,n,t,i),e.elementType=mu,e.lanes=o,e;case gu:return e=kt(19,n,t,i),e.elementType=gu,e.lanes=o,e;case nx:return il(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ex:s=10;break e;case tx:s=9;break e;case Xd:s=11;break e;case Zd:s=14;break e;case yn:s=16,r=null;break e}throw Error(F(130,e==null?e:typeof e,""))}return t=kt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function nr(e,t,n,r){return e=kt(7,e,r,t),e.lanes=n,e}function il(e,t,n,r){return e=kt(22,e,r,t),e.elementType=nx,e.lanes=n,e.stateNode={isHidden:!1},e}function bc(e,t,n){return e=kt(6,e,null,t),e.lanes=n,e}function Sc(e,t,n){return t=kt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ES(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nc(0),this.expirationTimes=nc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Nf(e,t,n,r,i,o,s,a,c){return e=new ES(e,t,n,a,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=kt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yf(o),e}function TS(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function q0(e){if(!e)return Dn;e=e._reactInternals;e:{if(hr(e)!==e||e.tag!==1)throw Error(F(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ct(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(F(171))}if(e.tag===1){var n=e.type;if(ct(n))return Gx(e,n,t)}return t}function K0(e,t,n,r,i,o,s,a,c){return e=Nf(n,r,!0,e,i,o,s,a,c),e.context=q0(null),n=e.current,r=Ze(),i=Rn(n),o=nn(r,i),o.callback=t??null,Pn(n,o,i),e.current.lanes=i,Po(e,i,r),ut(e,r),e}function ol(e,t,n,r){var i=t.current,o=Ze(),s=Rn(i);return n=q0(n),t.context===null?t.context=n:t.pendingContext=n,t=nn(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Pn(i,t,s),e!==null&&(Bt(e,i,s,o),xs(e,i,s)),s}function xa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ih(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Bf(e,t){Ih(e,t),(e=e.alternate)&&Ih(e,t)}function LS(){return null}var Y0=typeof reportError=="function"?reportError:function(e){console.error(e)};function If(e){this._internalRoot=e}sl.prototype.render=If.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(F(409));ol(e,t,null,null)};sl.prototype.unmount=If.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cr(function(){ol(null,e,null,null)}),t[an]=null}};function sl(e){this._internalRoot=e}sl.prototype.unstable_scheduleHydration=function(e){if(e){var t=jx();e={blockedOn:null,target:e,priority:t};for(var n=0;n<bn.length&&t!==0&&t<bn[n].priority;n++);bn.splice(n,0,e),n===0&&Tx(e)}};function Ff(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function al(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Fh(){}function OS(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=xa(s);o.call(u)}}var s=K0(t,r,e,0,null,!1,!1,"",Fh);return e._reactRootContainer=s,e[an]=s.current,lo(e.nodeType===8?e.parentNode:e),cr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=xa(c);a.call(u)}}var c=Nf(e,0,!1,null,null,!1,!1,"",Fh);return e._reactRootContainer=c,e[an]=c.current,lo(e.nodeType===8?e.parentNode:e),cr(function(){ol(t,c,n,r)}),c}function ll(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var c=xa(s);a.call(c)}}ol(t,s,e,i)}else s=OS(n,t,e,i,r);return xa(s)}Ax=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ni(t.pendingLanes);n!==0&&(nf(t,n|1),ut(t,ke()),!(te&6)&&(ei=ke()+500,Gn()))}break;case 13:cr(function(){var r=ln(e,1);if(r!==null){var i=Ze();Bt(r,e,1,i)}}),Bf(e,1)}};rf=function(e){if(e.tag===13){var t=ln(e,134217728);if(t!==null){var n=Ze();Bt(t,e,134217728,n)}Bf(e,134217728)}};Cx=function(e){if(e.tag===13){var t=Rn(e),n=ln(e,t);if(n!==null){var r=Ze();Bt(n,e,t,r)}Bf(e,t)}};jx=function(){return ie};Ex=function(e,t){var n=ie;try{return ie=e,t()}finally{ie=n}};ju=function(e,t,n){switch(t){case"input":if(vu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Xa(r);if(!i)throw Error(F(90));ix(r),vu(r,i)}}}break;case"textarea":sx(e,n);break;case"select":t=n.value,t!=null&&Nr(e,!!n.multiple,t,!1)}};px=Pf;hx=cr;var PS={usingClientEntryPoint:!1,Events:[Ro,Er,Xa,dx,fx,Pf]},Li={findFiberByHostInstance:Jn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},$S={bundleType:Li.bundleType,version:Li.version,rendererPackageName:Li.rendererPackageName,rendererConfig:Li.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xx(e),e===null?null:e.stateNode},findFiberByHostInstance:Li.findFiberByHostInstance||LS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rs.isDisabled&&rs.supportsFiber)try{qa=rs.inject($S),Qt=rs}catch{}}xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=PS;xt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ff(t))throw Error(F(200));return TS(e,t,null,n)};xt.createRoot=function(e,t){if(!Ff(e))throw Error(F(299));var n=!1,r="",i=Y0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Nf(e,1,!1,null,null,n,!1,r,i),e[an]=t.current,lo(e.nodeType===8?e.parentNode:e),new If(t)};xt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(F(188)):(e=Object.keys(e).join(","),Error(F(268,e)));return e=xx(t),e=e===null?null:e.stateNode,e};xt.flushSync=function(e){return cr(e)};xt.hydrate=function(e,t,n){if(!al(t))throw Error(F(200));return ll(null,e,t,!0,n)};xt.hydrateRoot=function(e,t,n){if(!Ff(e))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Y0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=K0(t,null,e,1,n??null,i,!1,o,s),e[an]=t.current,lo(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new sl(t)};xt.render=function(e,t,n){if(!al(t))throw Error(F(200));return ll(null,e,t,!1,n)};xt.unmountComponentAtNode=function(e){if(!al(e))throw Error(F(40));return e._reactRootContainer?(cr(function(){ll(null,null,e,!1,function(){e._reactRootContainer=null,e[an]=null})}),!0):!1};xt.unstable_batchedUpdates=Pf;xt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!al(n))throw Error(F(200));if(e==null||e._reactInternals===void 0)throw Error(F(38));return ll(e,t,n,!1,r)};xt.version="18.2.0-next-9e3b772b8-20220608";function J0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(J0)}catch(e){console.error(e)}}J0(),Kg.exports=xt;var X0=Kg.exports,Dh=X0;fu.createRoot=Dh.createRoot,fu.hydrateRoot=Dh.hydrateRoot;var ze=function(){return ze=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ze.apply(this,arguments)};function ti(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var de="-ms-",qi="-moz-",re="-webkit-",Z0="comm",cl="rule",Df="decl",RS="@import",ey="@keyframes",zS="@layer",NS=Math.abs,Mf=String.fromCharCode,od=Object.assign;function BS(e,t){return Re(e,0)^45?(((t<<2^Re(e,0))<<2^Re(e,1))<<2^Re(e,2))<<2^Re(e,3):0}function ty(e){return e.trim()}function Xt(e,t){return(e=t.exec(e))?e[0]:e}function K(e,t,n){return e.replace(t,n)}function As(e,t){return e.indexOf(t)}function Re(e,t){return e.charCodeAt(t)|0}function ni(e,t,n){return e.slice(t,n)}function Ut(e){return e.length}function ny(e){return e.length}function Ii(e,t){return t.push(e),e}function IS(e,t){return e.map(t).join("")}function Mh(e,t){return e.filter(function(n){return!Xt(n,t)})}var ul=1,ri=1,ry=0,Tt=0,Ae=0,mi="";function dl(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:ul,column:ri,length:s,return:"",siblings:a}}function xn(e,t){return od(dl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function yr(e){for(;e.root;)e=xn(e.root,{children:[e]});Ii(e,e.siblings)}function FS(){return Ae}function DS(){return Ae=Tt>0?Re(mi,--Tt):0,ri--,Ae===10&&(ri=1,ul--),Ae}function It(){return Ae=Tt<ry?Re(mi,Tt++):0,ri++,Ae===10&&(ri=1,ul++),Ae}function rr(){return Re(mi,Tt)}function Cs(){return Tt}function fl(e,t){return ni(mi,e,t)}function sd(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function MS(e){return ul=ri=1,ry=Ut(mi=e),Tt=0,[]}function _S(e){return mi="",e}function kc(e){return ty(fl(Tt-1,ad(e===91?e+2:e===40?e+1:e)))}function US(e){for(;(Ae=rr())&&Ae<33;)It();return sd(e)>2||sd(Ae)>3?"":" "}function WS(e,t){for(;--t&&It()&&!(Ae<48||Ae>102||Ae>57&&Ae<65||Ae>70&&Ae<97););return fl(e,Cs()+(t<6&&rr()==32&&It()==32))}function ad(e){for(;It();)switch(Ae){case e:return Tt;case 34:case 39:e!==34&&e!==39&&ad(Ae);break;case 40:e===41&&ad(e);break;case 92:It();break}return Tt}function HS(e,t){for(;It()&&e+Ae!==47+10;)if(e+Ae===42+42&&rr()===47)break;return"/*"+fl(t,Tt-1)+"*"+Mf(e===47?e:It())}function VS(e){for(;!sd(rr());)It();return fl(e,Tt)}function QS(e){return _S(js("",null,null,null,[""],e=MS(e),0,[0],e))}function js(e,t,n,r,i,o,s,a,c){for(var u=0,d=0,h=s,p=0,y=0,x=0,v=1,S=1,g=1,m=0,w="",k=i,A=o,C=r,j=w;S;)switch(x=m,m=It()){case 40:if(x!=108&&Re(j,h-1)==58){As(j+=K(kc(m),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:j+=kc(m);break;case 9:case 10:case 13:case 32:j+=US(x);break;case 92:j+=WS(Cs()-1,7);continue;case 47:switch(rr()){case 42:case 47:Ii(GS(HS(It(),Cs()),t,n,c),c);break;default:j+="/"}break;case 123*v:a[u++]=Ut(j)*g;case 125*v:case 59:case 0:switch(m){case 0:case 125:S=0;case 59+d:g==-1&&(j=K(j,/\f/g,"")),y>0&&Ut(j)-h&&Ii(y>32?Uh(j+";",r,n,h-1,c):Uh(K(j," ","")+";",r,n,h-2,c),c);break;case 59:j+=";";default:if(Ii(C=_h(j,t,n,u,d,i,a,w,k=[],A=[],h,o),o),m===123)if(d===0)js(j,t,C,C,k,o,h,a,A);else switch(p===99&&Re(j,3)===110?100:p){case 100:case 108:case 109:case 115:js(e,C,C,r&&Ii(_h(e,C,C,0,0,i,a,w,i,k=[],h,A),A),i,A,h,a,r?k:A);break;default:js(j,C,C,C,[""],A,0,a,A)}}u=d=y=0,v=g=1,w=j="",h=s;break;case 58:h=1+Ut(j),y=x;default:if(v<1){if(m==123)--v;else if(m==125&&v++==0&&DS()==125)continue}switch(j+=Mf(m),m*v){case 38:g=d>0?1:(j+="\f",-1);break;case 44:a[u++]=(Ut(j)-1)*g,g=1;break;case 64:rr()===45&&(j+=kc(It())),p=rr(),d=h=Ut(w=j+=VS(Cs())),m++;break;case 45:x===45&&Ut(j)==2&&(v=0)}}return o}function _h(e,t,n,r,i,o,s,a,c,u,d,h){for(var p=i-1,y=i===0?o:[""],x=ny(y),v=0,S=0,g=0;v<r;++v)for(var m=0,w=ni(e,p+1,p=NS(S=s[v])),k=e;m<x;++m)(k=ty(S>0?y[m]+" "+w:K(w,/&\f/g,y[m])))&&(c[g++]=k);return dl(e,t,n,i===0?cl:a,c,u,d,h)}function GS(e,t,n,r){return dl(e,t,n,Z0,Mf(FS()),ni(e,2,-2),0,r)}function Uh(e,t,n,r,i){return dl(e,t,n,Df,ni(e,0,r),ni(e,r+1,-1),r,i)}function iy(e,t,n){switch(BS(e,t)){case 5103:return re+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return re+e+e;case 4789:return qi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return re+e+qi+e+de+e+e;case 5936:switch(Re(e,t+11)){case 114:return re+e+de+K(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return re+e+de+K(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return re+e+de+K(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return re+e+de+e+e;case 6165:return re+e+de+"flex-"+e+e;case 5187:return re+e+K(e,/(\w+).+(:[^]+)/,re+"box-$1$2"+de+"flex-$1$2")+e;case 5443:return re+e+de+"flex-item-"+K(e,/flex-|-self/g,"")+(Xt(e,/flex-|baseline/)?"":de+"grid-row-"+K(e,/flex-|-self/g,""))+e;case 4675:return re+e+de+"flex-line-pack"+K(e,/align-content|flex-|-self/g,"")+e;case 5548:return re+e+de+K(e,"shrink","negative")+e;case 5292:return re+e+de+K(e,"basis","preferred-size")+e;case 6060:return re+"box-"+K(e,"-grow","")+re+e+de+K(e,"grow","positive")+e;case 4554:return re+K(e,/([^-])(transform)/g,"$1"+re+"$2")+e;case 6187:return K(K(K(e,/(zoom-|grab)/,re+"$1"),/(image-set)/,re+"$1"),e,"")+e;case 5495:case 3959:return K(e,/(image-set\([^]*)/,re+"$1$`$1");case 4968:return K(K(e,/(.+:)(flex-)?(.*)/,re+"box-pack:$3"+de+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+re+e+e;case 4200:if(!Xt(e,/flex-|baseline/))return de+"grid-column-align"+ni(e,t)+e;break;case 2592:case 3360:return de+K(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Xt(r.props,/grid-\w+-end/)})?~As(e+(n=n[t].value),"span")?e:de+K(e,"-start","")+e+de+"grid-row-span:"+(~As(n,"span")?Xt(n,/\d+/):+Xt(n,/\d+/)-+Xt(e,/\d+/))+";":de+K(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Xt(r.props,/grid-\w+-start/)})?e:de+K(K(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return K(e,/(.+)-inline(.+)/,re+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ut(e)-1-t>6)switch(Re(e,t+1)){case 109:if(Re(e,t+4)!==45)break;case 102:return K(e,/(.+:)(.+)-([^]+)/,"$1"+re+"$2-$3$1"+qi+(Re(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~As(e,"stretch")?iy(K(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return K(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,c,u){return de+i+":"+o+u+(s?de+i+"-span:"+(a?c:+c-+o)+u:"")+e});case 4949:if(Re(e,t+6)===121)return K(e,":",":"+re)+e;break;case 6444:switch(Re(e,Re(e,14)===45?18:11)){case 120:return K(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+re+(Re(e,14)===45?"inline-":"")+"box$3$1"+re+"$2$3$1"+de+"$2box$3")+e;case 100:return K(e,":",":"+de)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return K(e,"scroll-","scroll-snap-")+e}return e}function ya(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function qS(e,t,n,r){switch(e.type){case zS:if(e.children.length)break;case RS:case Df:return e.return=e.return||e.value;case Z0:return"";case ey:return e.return=e.value+"{"+ya(e.children,r)+"}";case cl:if(!Ut(e.value=e.props.join(",")))return""}return Ut(n=ya(e.children,r))?e.return=e.value+"{"+n+"}":""}function KS(e){var t=ny(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function YS(e){return function(t){t.root||(t=t.return)&&e(t)}}function JS(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Df:e.return=iy(e.value,e.length,n);return;case ey:return ya([xn(e,{value:K(e.value,"@","@"+re)})],r);case cl:if(e.length)return IS(n=e.props,function(i){switch(Xt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":yr(xn(e,{props:[K(i,/:(read-\w+)/,":"+qi+"$1")]})),yr(xn(e,{props:[i]})),od(e,{props:Mh(n,r)});break;case"::placeholder":yr(xn(e,{props:[K(i,/:(plac\w+)/,":"+re+"input-$1")]})),yr(xn(e,{props:[K(i,/:(plac\w+)/,":"+qi+"$1")]})),yr(xn(e,{props:[K(i,/:(plac\w+)/,de+"input-$1")]})),yr(xn(e,{props:[i]})),od(e,{props:Mh(n,r)});break}return""})}}var XS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ii=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",_f=typeof window<"u"&&"HTMLElement"in window,ZS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),ek={},Uf=Object.freeze([]),oi=Object.freeze({});function oy(e,t,n){return n===void 0&&(n=oi),e.theme!==n.theme&&e.theme||t||n.theme}var sy=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),tk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,nk=/(^-|-$)/g;function Wh(e){return e.replace(tk,"-").replace(nk,"")}var rk=/(a)(d)/gi,Hh=function(e){return String.fromCharCode(e+(e>25?39:97))};function ld(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Hh(t%52)+n;return(Hh(t%52)+n).replace(rk,"$1-$2")}var Ac,zr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ay=function(e){return zr(5381,e)};function Wf(e){return ld(ay(e)>>>0)}function ik(e){return e.displayName||e.name||"Component"}function Cc(e){return typeof e=="string"&&!0}var ly=typeof Symbol=="function"&&Symbol.for,cy=ly?Symbol.for("react.memo"):60115,ok=ly?Symbol.for("react.forward_ref"):60112,sk={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ak={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},uy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},lk=((Ac={})[ok]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ac[cy]=uy,Ac);function Vh(e){return("type"in(t=e)&&t.type.$$typeof)===cy?uy:"$$typeof"in e?lk[e.$$typeof]:sk;var t}var ck=Object.defineProperty,uk=Object.getOwnPropertyNames,Qh=Object.getOwnPropertySymbols,dk=Object.getOwnPropertyDescriptor,fk=Object.getPrototypeOf,Gh=Object.prototype;function dy(e,t,n){if(typeof t!="string"){if(Gh){var r=fk(t);r&&r!==Gh&&dy(e,r,n)}var i=uk(t);Qh&&(i=i.concat(Qh(t)));for(var o=Vh(e),s=Vh(t),a=0;a<i.length;++a){var c=i[a];if(!(c in ak||n&&n[c]||s&&c in s||o&&c in o)){var u=dk(t,c);try{ck(e,c,u)}catch{}}}}return e}function ur(e){return typeof e=="function"}function Hf(e){return typeof e=="object"&&"styledComponentId"in e}function er(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function va(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function yo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function cd(e,t,n){if(n===void 0&&(n=!1),!n&&!yo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=cd(e[r],t[r]);else if(yo(t))for(var r in t)e[r]=cd(e[r],t[r]);return e}function Vf(e,t){Object.defineProperty(e,"toString",{value:t})}function Mn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var pk=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Mn(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),c=(s=0,n.length);s<c;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(`/*!sc*/
`);return n},e}(),Es=new Map,wa=new Map,jc=1,is=function(e){if(Es.has(e))return Es.get(e);for(;wa.has(jc);)jc++;var t=jc++;return Es.set(e,t),wa.set(t,e),t},hk=function(e,t){Es.set(e,t),wa.set(t,e)},mk="style[".concat(ii,"][").concat("data-styled-version",'="').concat("6.0.1",'"]'),gk=new RegExp("^".concat(ii,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),xk=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},yk=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var c=a.match(gk);if(c){var u=0|parseInt(c[1],10),d=c[2];u!==0&&(hk(d,u),xk(e,d,c[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function vk(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var fy=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){return Array.from(a.querySelectorAll("style[".concat(ii,"]"))).at(-1)}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(ii,"active"),r.setAttribute("data-styled-version","6.0.1");var s=vk();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},wk=function(){function e(t){this.element=fy(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Mn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),bk=function(){function e(t){this.element=fy(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Sk=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),qh=_f,kk={isServer:!_f,useCSSOMInjection:!ZS},ba=function(){function e(t,n,r){t===void 0&&(t=oi),n===void 0&&(n={});var i=this;this.options=ze(ze({},kk),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&_f&&qh&&(qh=!1,function(o){for(var s=document.querySelectorAll(mk),a=0,c=s.length;a<c;a++){var u=s[a];u&&u.getAttribute(ii)!=="active"&&(yk(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Vf(this,function(){return function(o){for(var s=o.getTag(),a=s.length,c="",u=function(h){var p=function(g){return wa.get(g)}(h);if(p===void 0)return"continue";var y=o.names.get(p),x=s.getGroup(h);if(y===void 0||x.length===0)return"continue";var v="".concat(ii,".g").concat(h,'[id="').concat(p,'"]'),S="";y!==void 0&&y.forEach(function(g){g.length>0&&(S+="".concat(g,","))}),c+="".concat(x).concat(v,'{content:"').concat(S,'"}').concat(`/*!sc*/
`)},d=0;d<a;d++)u(d);return c}(i)})}return e.registerId=function(t){return is(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ze(ze({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Sk(i):r?new wk(i):new bk(i)}(this.options),new pk(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(is(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(is(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(is(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Ak=/&/g,Ck=/^\s*\/\/.*$/gm;function py(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=py(n.children,t)),n})}function jk(e){var t,n,r,i=e===void 0?oi:e,o=i.options,s=o===void 0?oi:o,a=i.plugins,c=a===void 0?Uf:a,u=function(p,y,x){return x===n||x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):p},d=c.slice();d.push(function(p){p.type===cl&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(Ak,n).replace(r,u))}),s.prefix&&d.push(JS),d.push(qS);var h=function(p,y,x,v){y===void 0&&(y=""),x===void 0&&(x=""),v===void 0&&(v="&"),t=v,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var S=p.replace(Ck,""),g=QS(x||y?"".concat(x," ").concat(y," { ").concat(S," }"):S);s.namespace&&(g=py(g,s.namespace));var m=[];return ya(g,KS(d.concat(YS(function(w){return m.push(w)})))),m};return h.hash=c.length?c.reduce(function(p,y){return y.name||Mn(15),zr(p,y.name)},5381).toString():"",h}var Ek=new ba,ud=jk(),hy=st.createContext({shouldForwardProp:void 0,styleSheet:Ek,stylis:ud});hy.Consumer;st.createContext(void 0);function dd(){return b.useContext(hy)}var my=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=ud);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Vf(this,function(){throw Mn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ud),this.name+t.hash},e}(),Tk=function(e){return e>="A"&&e<="Z"};function Kh(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Tk(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var gy=function(e){return e==null||e===!1||e===""},xy=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!gy(o)&&(Array.isArray(o)&&o.isCss||ur(o)?r.push("".concat(Kh(i),":"),o,";"):yo(o)?r.push.apply(r,ti(ti(["".concat(i," {")],xy(o),!1),["}"],!1)):r.push("".concat(Kh(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in XS||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Nn(e,t,n,r){if(gy(e))return[];if(Hf(e))return[".".concat(e.styledComponentId)];if(ur(e)){if(!ur(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Nn(i,t,n,r)}var o;return e instanceof my?n?(e.inject(n,r),[e.getName(r)]):[e]:yo(e)?xy(e):Array.isArray(e)?e.flatMap(function(s){return Nn(s,t,n,r)}):[e.toString()]}function yy(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ur(n)&&!Hf(n))return!1}return!0}var Lk=ay("6.0.1"),Ok=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&yy(t),this.componentId=n,this.baseHash=zr(Lk,n),this.baseStyle=r,ba.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=er(i,this.staticRulesId);else{var o=va(Nn(this.rules,t,n,r)),s=ld(zr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=er(i,s),this.staticRulesId=s}else{for(var c=zr(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var h=this.rules[d];if(typeof h=="string")u+=h;else if(h){var p=va(Nn(h,t,n,r));c=zr(c,p),u+=p}}if(u){var y=ld(c>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(u,".".concat(y),void 0,this.componentId)),i=er(i,y)}}return i},e}(),si=st.createContext(void 0);si.Consumer;function gi(){var e=b.useContext(si);if(!e)throw Mn(18);return e}function Pk(e){var t=st.useContext(si),n=b.useMemo(function(){return function(r,i){if(!r)throw Mn(14);if(ur(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw Mn(8);return i?ze(ze({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?st.createElement(si.Provider,{value:n},e.children):null}var Ec={};function $k(e,t,n){var r=Hf(e),i=e,o=!Cc(e),s=t.attrs,a=s===void 0?Uf:s,c=t.componentId,u=c===void 0?function(k,A){var C=typeof k!="string"?"sc":Wh(k);Ec[C]=(Ec[C]||0)+1;var j="".concat(C,"-").concat(Wf("6.0.1"+C+Ec[C]));return A?"".concat(A,"-").concat(j):j}(t.displayName,t.parentComponentId):c,d=t.displayName,h=d===void 0?function(k){return Cc(k)?"styled.".concat(k):"Styled(".concat(ik(k),")")}(e):d,p=t.displayName&&t.componentId?"".concat(Wh(t.displayName),"-").concat(t.componentId):t.componentId||u,y=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,x=t.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;x=function(k,A){return v(k,A)&&S(k,A)}}else x=v}var g=new Ok(n,p,r?i.componentStyle:void 0);g.isStatic&&a.length;function m(k,A){return function(C,j,T,L){var O=C.attrs,P=C.componentStyle,N=C.defaultProps,B=C.foldedComponentIds,D=C.styledComponentId,U=C.target,H=st.useContext(si),$=dd(),E=C.shouldForwardProp||$.shouldForwardProp,I=function(Dt,Ye,rt){for(var pn,Yt=ze(ze({},Ye),{className:void 0,theme:rt}),bi=0;bi<Dt.length;bi+=1){var gr=ur(pn=Dt[bi])?pn(Yt):pn;for(var hn in gr)Yt[hn]=hn==="className"?er(Yt[hn],gr[hn]):hn==="style"?ze(ze({},Yt[hn]),gr[hn]):gr[hn]}return Ye.className&&(Yt.className=er(Yt.className,Ye.className)),Yt}(O,j,oy(j,H,N)||oi),z=I.as||U,V={};for(var G in I)I[G]===void 0||G[0]==="$"||G==="as"||G==="theme"||(G==="forwardedAs"?V.as=I.forwardedAs:E&&!E(G,z)||(V[G]=I[G]));var ge=function(Dt,Ye){var rt=dd(),pn=Dt.generateAndInjectStyles(Ye,rt.styleSheet,rt.stylis);return pn}(P,I),be=er(B,D);return ge&&(be+=" "+ge),I.className&&(be+=" "+I.className),V[Cc(z)&&!sy.has(z)?"class":"className"]=be,V.ref=T,b.createElement(z,V)}(w,k,A)}m.displayName=h;var w=st.forwardRef(m);return w.attrs=y,w.componentStyle=g,w.displayName=h,w.shouldForwardProp=x,w.foldedComponentIds=r?er(i.foldedComponentIds,i.styledComponentId):"",w.styledComponentId=p,w.target=r?i.target:e,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=r?function(A){for(var C=[],j=1;j<arguments.length;j++)C[j-1]=arguments[j];for(var T=0,L=C;T<L.length;T++)cd(A,L[T],!0);return A}({},i.defaultProps,k):k}}),Vf(w,function(){return".".concat(w.styledComponentId)}),o&&dy(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Yh(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Jh=function(e){return Object.assign(e,{isCss:!0})};function dr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ur(e)||yo(e)){var r=e;return Jh(Nn(Yh(Uf,ti([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?Nn(i):Jh(Nn(Yh(i,t)))}function fd(e,t,n){if(n===void 0&&(n=oi),!t)throw Mn(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,dr.apply(void 0,ti([i],o,!1)))};return r.attrs=function(i){return fd(e,t,ze(ze({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return fd(e,t,ze(ze({},n),i))},r}var vy=function(e){return fd($k,e)},f=vy;sy.forEach(function(e){f[e]=vy(e)});var Rk=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=yy(t),ba.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(va(Nn(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&ba.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function zk(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=dr.apply(void 0,ti([e],t,!1)),i="sc-global-".concat(Wf(JSON.stringify(r))),o=new Rk(r,i),s=function(c){var u=dd(),d=st.useContext(si),h=st.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(h,c,u.styleSheet,d,u.stylis),(st.useInsertionEffect||st.useLayoutEffect)(function(){if(!u.styleSheet.server)return a(h,c,u.styleSheet,d,u.stylis),function(){return o.removeStyles(h,u.styleSheet)}},[h,c,u.styleSheet,d,u.stylis]),null};function a(c,u,d,h,p){if(o.isStatic)o.renderStyles(c,ek,d,p);else{var y=ze(ze({},u),{theme:oy(u,h,s.defaultProps)});o.renderStyles(c,y,d,p)}}return st.memo(s)}function dt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=va(dr.apply(void 0,ti([e],t,!1))),i=Wf(r);return new my(i,r)}const pl={background:"#000000",text:"#ffffff",primary:"#FD5602",secondary:"#FE6E00",tertiary:"#FEDEBE",tertiaryTone:"#fedebea9",buttonBack:"F3C699",formBoxShadow:"-3px -3px 7px #404040, 2px 2px 5px rgba(200, 200, 200, 0.5)",inputBoxShadow:"inset 2px 2px 5px #EFEFEF, inset -5px -5px 10px #FCFCFC",vocabularyBack:"#ffffec",flagFirst:"#1e1e1e",flagSecond:"#fdda24",flagThird:"#EF4135",flagAddon:"#fdda24",backTone:"#555555",textTone:"#e6e6e6",textTone2:"#cccccc",primaryBackground:"#191919",secondaryBackground:"#333333",tertiaryBackground:"#4c4c4c",primaryText:"#ffffff",secondaryText:"#b3b3b3",tertiaryText:"#808080",highlight1:"#FF00FF",highlight2:"#FFA500",highlight3:"#0000FF",highlight4:"#60c5d9",highlight5:"#ffffff",correctBack:"#70ff41",wrongback:"#DC143C",facebookLogo:"#000000",facebookBack:"#3b5998",facebookText:"#fcfcfd",extraSmall:"0.9rem",small:"1rem",mediumSmall:"1.2rem",medium:"1.4rem",large:"1.6rem",extraLarge:"2rem",mega:"2.4rem",extraMega:"3rem",smallLineHeight:"1.2",mediumLineHeight:"1.3",mediumSmallLineHeight:"1.4",extraMediumLineHeight:"1.5",largeLineHeight:"1.6",extraLargeLineHeight:"1.8",smallLetterSpacing:"0.03rem",mediumLetterSpacing:"0.04rem",largeLetterSpacing:"0.05rem",extraLargeLetterSpacing:"0.06rem",megaLetterSpacing:"0.07rem",extraMegaLetterSpacing:"0.08rem"},Nk={background:"#ffffff",text:"1e1e1e",buttonBack:"#0c76f0",primary:"#002EB8",secondary:"#0055a4dd",tertiary:"#809fff",tertiaryTone:"#80a0ffb5",formBoxShadow:"-3px -3px 7px #e8e8e8, 2px 2px 5px rgba(200, 200, 200, 0.5)",inputBoxShadow:"inset 2px 2px 5px #FCFCFC, inset -5px -5px 10px #737373",vocabularyBack:"#ffffdd",flagFirst:"#0055A4",flagSecond:"#FFFFFF",flagThird:"#EF4135",flagAddon:"#f5f5f5",backTone:"#e6e6e6",textTone:"#191919",textTone2:"#333333",primaryBackground:"#ffffff",secondaryBackground:"#f6f6f6",tertiaryBackground:"#cccccc",primaryText:"#333333",secondaryText:"#666666",tertiaryText:"#999999",highlight1:"#f5f3e0",highlight2:"#e0eaf1",highlight3:"#acc8e5",highlight4:"#FFA500",highlight5:"#000000",correctBack:"#70ff41",wrongback:"#DC143C",facebookLogo:"#083F87",facebookBack:"#fcfcfd",facebookText:"#3b5998",extraSmall:"0.9rem",small:"1rem",mediumSmall:"1.2rem",medium:"1.4rem",large:"1.6rem",extraLarge:"2rem",mega:"2.4rem",extraMega:"3rem",smallLineHeight:"1.2",mediumLineHeight:"1.3",mediumSmallLineHeight:"1.4",extraMediumLineHeight:"1.5",largeLineHeight:"1.6",extraLargeLineHeight:"1.8",smallLetterSpacing:"0.03rem",mediumLetterSpacing:"0.04rem",largeLetterSpacing:"0.05rem",extraLargeLetterSpacing:"0.06rem",megaLetterSpacing:"0.07rem",extraMegaLetterSpacing:"0.08rem"};/**
 * @remix-run/router v1.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vo(){return vo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vo.apply(this,arguments)}var jn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(jn||(jn={}));const Xh="popstate";function Bk(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return pd("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Sa(i)}return Fk(t,n,null,e)}function je(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Qf(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ik(){return Math.random().toString(36).substr(2,8)}function Zh(e,t){return{usr:e.state,key:e.key,idx:t}}function pd(e,t,n,r){return n===void 0&&(n=null),vo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?xi(t):t,{state:n,key:t&&t.key||r||Ik()})}function Sa(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function xi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Fk(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=jn.Pop,c=null,u=d();u==null&&(u=0,s.replaceState(vo({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function h(){a=jn.Pop;let S=d(),g=S==null?null:S-u;u=S,c&&c({action:a,location:v.location,delta:g})}function p(S,g){a=jn.Push;let m=pd(v.location,S,g);n&&n(m,S),u=d()+1;let w=Zh(m,u),k=v.createHref(m);try{s.pushState(w,"",k)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;i.location.assign(k)}o&&c&&c({action:a,location:v.location,delta:1})}function y(S,g){a=jn.Replace;let m=pd(v.location,S,g);n&&n(m,S),u=d();let w=Zh(m,u),k=v.createHref(m);s.replaceState(w,"",k),o&&c&&c({action:a,location:v.location,delta:0})}function x(S){let g=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof S=="string"?S:Sa(S);return je(g,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,g)}let v={get action(){return a},get location(){return e(i,s)},listen(S){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Xh,h),c=S,()=>{i.removeEventListener(Xh,h),c=null}},createHref(S){return t(i,S)},createURL:x,encodeLocation(S){let g=x(S);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:y,go(S){return s.go(S)}};return v}var em;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(em||(em={}));function Dk(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?xi(t):t,i=Gf(r.pathname||"/",n);if(i==null)return null;let o=wy(e);Mk(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=Kk(o[a],Xk(i));return s}function wy(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let c={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};c.relativePath.startsWith("/")&&(je(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Bn([r,c.relativePath]),d=n.concat(c);o.children&&o.children.length>0&&(je(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),wy(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Gk(u,o.index),routesMeta:d})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let c of by(o.path))i(o,s,c)}),t}function by(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=by(r.join("/")),a=[];return a.push(...s.map(c=>c===""?o:[o,c].join("/"))),i&&a.push(...s),a.map(c=>e.startsWith("/")&&c===""?"/":c)}function Mk(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:qk(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const _k=/^:\w+$/,Uk=3,Wk=2,Hk=1,Vk=10,Qk=-2,tm=e=>e==="*";function Gk(e,t){let n=e.split("/"),r=n.length;return n.some(tm)&&(r+=Qk),t&&(r+=Wk),n.filter(i=>!tm(i)).reduce((i,o)=>i+(_k.test(o)?Uk:o===""?Hk:Vk),r)}function qk(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Kk(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],c=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=Yk({path:a.relativePath,caseSensitive:a.caseSensitive,end:c},u);if(!d)return null;Object.assign(r,d.params);let h=a.route;o.push({params:r,pathname:Bn([i,d.pathname]),pathnameBase:nA(Bn([i,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(i=Bn([i,d.pathnameBase]))}return o}function Yk(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Jk(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,h)=>{if(d==="*"){let p=a[h]||"";s=o.slice(0,o.length-p.length).replace(/(.)\/+$/,"$1")}return u[d]=Zk(a[h]||"",d),u},{}),pathname:o,pathnameBase:s,pattern:e}}function Jk(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Qf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Xk(e){try{return decodeURI(e)}catch(t){return Qf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Zk(e,t){try{return decodeURIComponent(e)}catch(n){return Qf(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Gf(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function eA(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?xi(e):e;return{pathname:n?n.startsWith("/")?n:tA(n,t):t,search:rA(r),hash:iA(i)}}function tA(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Tc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Sy(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ky(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=xi(e):(i=vo({},e),je(!i.pathname||!i.pathname.includes("?"),Tc("?","pathname","search",i)),je(!i.pathname||!i.pathname.includes("#"),Tc("#","pathname","hash",i)),je(!i.search||!i.search.includes("#"),Tc("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let h=t.length-1;if(s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),h-=1;i.pathname=p.join("/")}a=h>=0?t[h]:"/"}let c=eA(i,a),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Bn=e=>e.join("/").replace(/\/\/+/g,"/"),nA=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),rA=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,iA=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function oA(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ay=["post","put","patch","delete"];new Set(Ay);const sA=["get",...Ay];new Set(sA);/**
 * React Router v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ka(){return ka=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ka.apply(this,arguments)}const qf=b.createContext(null),aA=b.createContext(null),yi=b.createContext(null),hl=b.createContext(null),fn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),Cy=b.createContext(null);function lA(e,t){let{relative:n}=t===void 0?{}:t;No()||je(!1);let{basename:r,navigator:i}=b.useContext(yi),{hash:o,pathname:s,search:a}=Ey(e,{relative:n}),c=s;return r!=="/"&&(c=s==="/"?r:Bn([r,s])),i.createHref({pathname:c,search:a,hash:o})}function No(){return b.useContext(hl)!=null}function mr(){return No()||je(!1),b.useContext(hl).location}function jy(e){b.useContext(yi).static||b.useLayoutEffect(e)}function Kf(){let{isDataRoute:e}=b.useContext(fn);return e?kA():cA()}function cA(){No()||je(!1);let e=b.useContext(qf),{basename:t,navigator:n}=b.useContext(yi),{matches:r}=b.useContext(fn),{pathname:i}=mr(),o=JSON.stringify(Sy(r).map(c=>c.pathnameBase)),s=b.useRef(!1);return jy(()=>{s.current=!0}),b.useCallback(function(c,u){if(u===void 0&&(u={}),!s.current)return;if(typeof c=="number"){n.go(c);return}let d=ky(c,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Bn([t,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,o,i,e])}const uA=b.createContext(null);function dA(e){let t=b.useContext(fn).outlet;return t&&b.createElement(uA.Provider,{value:e},t)}function _n(){let{matches:e}=b.useContext(fn),t=e[e.length-1];return t?t.params:{}}function Ey(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=b.useContext(fn),{pathname:i}=mr(),o=JSON.stringify(Sy(r).map(s=>s.pathnameBase));return b.useMemo(()=>ky(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function fA(e,t){return pA(e,t)}function pA(e,t,n){No()||je(!1);let{navigator:r}=b.useContext(yi),{matches:i}=b.useContext(fn),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let c=mr(),u;if(t){var d;let v=typeof t=="string"?xi(t):t;a==="/"||(d=v.pathname)!=null&&d.startsWith(a)||je(!1),u=v}else u=c;let h=u.pathname||"/",p=a==="/"?h:h.slice(a.length)||"/",y=Dk(e,{pathname:p}),x=yA(y&&y.map(v=>Object.assign({},v,{params:Object.assign({},s,v.params),pathname:Bn([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:Bn([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return t&&x?b.createElement(hl.Provider,{value:{location:ka({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:jn.Pop}},x):x}function hA(){let e=SA(),t=oA(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,o)}const mA=b.createElement(hA,null);class gA extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?b.createElement(fn.Provider,{value:this.props.routeContext},b.createElement(Cy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function xA(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(qf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(fn.Provider,{value:t},r)}function yA(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,s=(r=n)==null?void 0:r.errors;if(s!=null){let a=o.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id]));a>=0||je(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,c,u)=>{let d=c.route.id?s==null?void 0:s[c.route.id]:null,h=null;n&&(h=c.route.errorElement||mA);let p=t.concat(o.slice(0,u+1)),y=()=>{let x;return d?x=h:c.route.Component?x=b.createElement(c.route.Component,null):c.route.element?x=c.route.element:x=a,b.createElement(xA,{match:c,routeContext:{outlet:a,matches:p,isDataRoute:n!=null},children:x})};return n&&(c.route.ErrorBoundary||c.route.errorElement||u===0)?b.createElement(gA,{location:n.location,revalidation:n.revalidation,component:h,error:d,children:y(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):y()},null)}var hd;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(hd||(hd={}));var wo;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(wo||(wo={}));function vA(e){let t=b.useContext(qf);return t||je(!1),t}function wA(e){let t=b.useContext(aA);return t||je(!1),t}function bA(e){let t=b.useContext(fn);return t||je(!1),t}function Ty(e){let t=bA(),n=t.matches[t.matches.length-1];return n.route.id||je(!1),n.route.id}function SA(){var e;let t=b.useContext(Cy),n=wA(wo.UseRouteError),r=Ty(wo.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function kA(){let{router:e}=vA(hd.UseNavigateStable),t=Ty(wo.UseNavigateStable),n=b.useRef(!1);return jy(()=>{n.current=!0}),b.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ka({fromRouteId:t},o)))},[e,t])}function AA(e){return dA(e.context)}function Y(e){je(!1)}function CA(e){let{basename:t="/",children:n=null,location:r,navigationType:i=jn.Pop,navigator:o,static:s=!1}=e;No()&&je(!1);let a=t.replace(/^\/*/,"/"),c=b.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=xi(r));let{pathname:u="/",search:d="",hash:h="",state:p=null,key:y="default"}=r,x=b.useMemo(()=>{let v=Gf(u,a);return v==null?null:{location:{pathname:v,search:d,hash:h,state:p,key:y},navigationType:i}},[a,u,d,h,p,y,i]);return x==null?null:b.createElement(yi.Provider,{value:c},b.createElement(hl.Provider,{children:n,value:x}))}function jA(e){let{children:t,location:n}=e;return fA(md(t),n)}var nm;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(nm||(nm={}));new Promise(()=>{});function md(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let o=[...t,i];if(r.type===b.Fragment){n.push.apply(n,md(r.props.children,o));return}r.type!==Y&&je(!1),!r.props.index||!r.props.children||je(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=md(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gd(){return gd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gd.apply(this,arguments)}function EA(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function TA(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function LA(e,t){return e.button===0&&(!t||t==="_self")&&!TA(e)}const OA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],PA="startTransition",rm=kw[PA];function $A(e){let{basename:t,children:n,future:r,window:i}=e,o=b.useRef();o.current==null&&(o.current=Bk({window:i,v5Compat:!0}));let s=o.current,[a,c]=b.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=b.useCallback(h=>{u&&rm?rm(()=>c(h)):c(h)},[c,u]);return b.useLayoutEffect(()=>s.listen(d),[s,d]),b.createElement(CA,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s})}const RA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",zA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ee=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:c,to:u,preventScrollReset:d}=t,h=EA(t,OA),{basename:p}=b.useContext(yi),y,x=!1;if(typeof u=="string"&&zA.test(u)&&(y=u,RA))try{let m=new URL(window.location.href),w=u.startsWith("//")?new URL(m.protocol+u):new URL(u),k=Gf(w.pathname,p);w.origin===m.origin&&k!=null?u=k+w.search+w.hash:x=!0}catch{}let v=lA(u,{relative:i}),S=NA(u,{replace:s,state:a,target:c,preventScrollReset:d,relative:i});function g(m){r&&r(m),m.defaultPrevented||S(m)}return b.createElement("a",gd({},h,{href:y||v,onClick:x||o?r:g,ref:n,target:c}))});var im;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(im||(im={}));var om;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(om||(om={}));function NA(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s}=t===void 0?{}:t,a=Kf(),c=mr(),u=Ey(e,{relative:s});return b.useCallback(d=>{if(LA(d,n)){d.preventDefault();let h=r!==void 0?r:Sa(c)===Sa(u);a(e,{replace:h,state:i,preventScrollReset:o,relative:s})}},[c,a,u,r,i,n,e,o,s])}var Ly={exports:{}},Oy={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ai=b;function BA(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var IA=typeof Object.is=="function"?Object.is:BA,FA=ai.useState,DA=ai.useEffect,MA=ai.useLayoutEffect,_A=ai.useDebugValue;function UA(e,t){var n=t(),r=FA({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return MA(function(){i.value=n,i.getSnapshot=t,Lc(i)&&o({inst:i})},[e,n,t]),DA(function(){return Lc(i)&&o({inst:i}),e(function(){Lc(i)&&o({inst:i})})},[e]),_A(n),n}function Lc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!IA(e,n)}catch{return!0}}function WA(e,t){return t()}var HA=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?WA:UA;Oy.useSyncExternalStore=ai.useSyncExternalStore!==void 0?ai.useSyncExternalStore:HA;Ly.exports=Oy;var VA=Ly.exports,Py={exports:{}},$y={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ml=b,QA=VA;function GA(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qA=typeof Object.is=="function"?Object.is:GA,KA=QA.useSyncExternalStore,YA=ml.useRef,JA=ml.useEffect,XA=ml.useMemo,ZA=ml.useDebugValue;$y.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=YA(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=XA(function(){function c(y){if(!u){if(u=!0,d=y,y=r(y),i!==void 0&&s.hasValue){var x=s.value;if(i(x,y))return h=x}return h=y}if(x=h,qA(d,y))return x;var v=r(y);return i!==void 0&&i(x,v)?x:(d=y,h=v)}var u=!1,d,h,p=n===void 0?null:n;return[function(){return c(t())},p===null?void 0:function(){return c(p())}]},[t,n,r,i]);var a=KA(e,o[0],o[1]);return JA(function(){s.hasValue=!0,s.value=a},[a]),ZA(a),a};Py.exports=$y;var eC=Py.exports;function tC(e){e()}let Ry=tC;const nC=e=>Ry=e,rC=()=>Ry,sm=Symbol.for(`react-redux-context-${b.version}`),am=globalThis;function iC(){let e=am[sm];return e||(e=b.createContext(null),am[sm]=e),e}const Un=new Proxy({},new Proxy({},{get(e,t){const n=iC();return(r,...i)=>Reflect[t](n,...i)}}));function Yf(e=Un){return function(){return b.useContext(e)}}const zy=Yf(),oC=()=>{throw new Error("uSES not initialized!")};let Ny=oC;const sC=e=>{Ny=e},aC=(e,t)=>e===t;function lC(e=Un){const t=e===Un?zy:Yf(e);return function(r,i={}){const{equalityFn:o=aC,stabilityCheck:s=void 0,noopCheck:a=void 0}=typeof i=="function"?{equalityFn:i}:i,{store:c,subscription:u,getServerState:d,stabilityCheck:h,noopCheck:p}=t();b.useRef(!0);const y=b.useCallback({[r.name](v){return r(v)}}[r.name],[r,h,s]),x=Ny(u.addNestedSub,c.getState,d||c.getState,y,o);return b.useDebugValue(x),x}}const _=lC();var By={exports:{}},oe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ie=typeof Symbol=="function"&&Symbol.for,Jf=Ie?Symbol.for("react.element"):60103,Xf=Ie?Symbol.for("react.portal"):60106,gl=Ie?Symbol.for("react.fragment"):60107,xl=Ie?Symbol.for("react.strict_mode"):60108,yl=Ie?Symbol.for("react.profiler"):60114,vl=Ie?Symbol.for("react.provider"):60109,wl=Ie?Symbol.for("react.context"):60110,Zf=Ie?Symbol.for("react.async_mode"):60111,bl=Ie?Symbol.for("react.concurrent_mode"):60111,Sl=Ie?Symbol.for("react.forward_ref"):60112,kl=Ie?Symbol.for("react.suspense"):60113,cC=Ie?Symbol.for("react.suspense_list"):60120,Al=Ie?Symbol.for("react.memo"):60115,Cl=Ie?Symbol.for("react.lazy"):60116,uC=Ie?Symbol.for("react.block"):60121,dC=Ie?Symbol.for("react.fundamental"):60117,fC=Ie?Symbol.for("react.responder"):60118,pC=Ie?Symbol.for("react.scope"):60119;function vt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Jf:switch(e=e.type,e){case Zf:case bl:case gl:case yl:case xl:case kl:return e;default:switch(e=e&&e.$$typeof,e){case wl:case Sl:case Cl:case Al:case vl:return e;default:return t}}case Xf:return t}}}function Iy(e){return vt(e)===bl}oe.AsyncMode=Zf;oe.ConcurrentMode=bl;oe.ContextConsumer=wl;oe.ContextProvider=vl;oe.Element=Jf;oe.ForwardRef=Sl;oe.Fragment=gl;oe.Lazy=Cl;oe.Memo=Al;oe.Portal=Xf;oe.Profiler=yl;oe.StrictMode=xl;oe.Suspense=kl;oe.isAsyncMode=function(e){return Iy(e)||vt(e)===Zf};oe.isConcurrentMode=Iy;oe.isContextConsumer=function(e){return vt(e)===wl};oe.isContextProvider=function(e){return vt(e)===vl};oe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Jf};oe.isForwardRef=function(e){return vt(e)===Sl};oe.isFragment=function(e){return vt(e)===gl};oe.isLazy=function(e){return vt(e)===Cl};oe.isMemo=function(e){return vt(e)===Al};oe.isPortal=function(e){return vt(e)===Xf};oe.isProfiler=function(e){return vt(e)===yl};oe.isStrictMode=function(e){return vt(e)===xl};oe.isSuspense=function(e){return vt(e)===kl};oe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===gl||e===bl||e===yl||e===xl||e===kl||e===cC||typeof e=="object"&&e!==null&&(e.$$typeof===Cl||e.$$typeof===Al||e.$$typeof===vl||e.$$typeof===wl||e.$$typeof===Sl||e.$$typeof===dC||e.$$typeof===fC||e.$$typeof===pC||e.$$typeof===uC)};oe.typeOf=vt;By.exports=oe;var hC=By.exports,Fy=hC,mC={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},gC={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Dy={};Dy[Fy.ForwardRef]=mC;Dy[Fy.Memo]=gC;var se={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ep=Symbol.for("react.element"),tp=Symbol.for("react.portal"),jl=Symbol.for("react.fragment"),El=Symbol.for("react.strict_mode"),Tl=Symbol.for("react.profiler"),Ll=Symbol.for("react.provider"),Ol=Symbol.for("react.context"),xC=Symbol.for("react.server_context"),Pl=Symbol.for("react.forward_ref"),$l=Symbol.for("react.suspense"),Rl=Symbol.for("react.suspense_list"),zl=Symbol.for("react.memo"),Nl=Symbol.for("react.lazy"),yC=Symbol.for("react.offscreen"),My;My=Symbol.for("react.module.reference");function Lt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ep:switch(e=e.type,e){case jl:case Tl:case El:case $l:case Rl:return e;default:switch(e=e&&e.$$typeof,e){case xC:case Ol:case Pl:case Nl:case zl:case Ll:return e;default:return t}}case tp:return t}}}se.ContextConsumer=Ol;se.ContextProvider=Ll;se.Element=ep;se.ForwardRef=Pl;se.Fragment=jl;se.Lazy=Nl;se.Memo=zl;se.Portal=tp;se.Profiler=Tl;se.StrictMode=El;se.Suspense=$l;se.SuspenseList=Rl;se.isAsyncMode=function(){return!1};se.isConcurrentMode=function(){return!1};se.isContextConsumer=function(e){return Lt(e)===Ol};se.isContextProvider=function(e){return Lt(e)===Ll};se.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ep};se.isForwardRef=function(e){return Lt(e)===Pl};se.isFragment=function(e){return Lt(e)===jl};se.isLazy=function(e){return Lt(e)===Nl};se.isMemo=function(e){return Lt(e)===zl};se.isPortal=function(e){return Lt(e)===tp};se.isProfiler=function(e){return Lt(e)===Tl};se.isStrictMode=function(e){return Lt(e)===El};se.isSuspense=function(e){return Lt(e)===$l};se.isSuspenseList=function(e){return Lt(e)===Rl};se.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===jl||e===Tl||e===El||e===$l||e===Rl||e===yC||typeof e=="object"&&e!==null&&(e.$$typeof===Nl||e.$$typeof===zl||e.$$typeof===Ll||e.$$typeof===Ol||e.$$typeof===Pl||e.$$typeof===My||e.getModuleId!==void 0)};se.typeOf=Lt;function vC(){const e=rC();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,o=n={callback:r,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){!i||t===null||(i=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}const lm={notify(){},get:()=>[]};function wC(e,t){let n,r=lm;function i(h){return c(),r.subscribe(h)}function o(){r.notify()}function s(){d.onStateChange&&d.onStateChange()}function a(){return!!n}function c(){n||(n=t?t.addNestedSub(s):e.subscribe(s),r=vC())}function u(){n&&(n(),n=void 0,r.clear(),r=lm)}const d={addNestedSub:i,notifyNestedSubs:o,handleChangeWrapper:s,isSubscribed:a,trySubscribe:c,tryUnsubscribe:u,getListeners:()=>r};return d}const bC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",SC=bC?b.useLayoutEffect:b.useEffect;function kC({store:e,context:t,children:n,serverState:r,stabilityCheck:i="once",noopCheck:o="once"}){const s=b.useMemo(()=>{const u=wC(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,noopCheck:o}},[e,r,i,o]),a=b.useMemo(()=>e.getState(),[e]);SC(()=>{const{subscription:u}=s;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[s,a]);const c=t||Un;return st.createElement(c.Provider,{value:s},n)}function _y(e=Un){const t=e===Un?zy:Yf(e);return function(){const{store:r}=t();return r}}const AC=_y();function CC(e=Un){const t=e===Un?AC:_y(e);return function(){return t().dispatch}}const ne=CC();sC(eC.useSyncExternalStoreWithSelector);nC(X0.unstable_batchedUpdates);function zt(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Wn(e){return!!e&&!!e[he]}function un(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===zC}(e)||Array.isArray(e)||!!e[mm]||!!(!((t=e.constructor)===null||t===void 0)&&t[mm])||np(e)||rp(e))}function fr(e,t,n){n===void 0&&(n=!1),vi(e)===0?(n?Object.keys:Ur)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function vi(e){var t=e[he];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:np(e)?2:rp(e)?3:0}function _r(e,t){return vi(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function jC(e,t){return vi(e)===2?e.get(t):e[t]}function Uy(e,t,n){var r=vi(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function Wy(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function np(e){return $C&&e instanceof Map}function rp(e){return RC&&e instanceof Set}function Yn(e){return e.o||e.t}function ip(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Vy(e);delete t[he];for(var n=Ur(t),r=0;r<n.length;r++){var i=n[r],o=t[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function op(e,t){return t===void 0&&(t=!1),sp(e)||Wn(e)||!un(e)||(vi(e)>1&&(e.set=e.add=e.clear=e.delete=EC),Object.freeze(e),t&&fr(e,function(n,r){return op(r,!0)},!0)),e}function EC(){zt(2)}function sp(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function qt(e){var t=wd[e];return t||zt(18,e),t}function TC(e,t){wd[e]||(wd[e]=t)}function xd(){return bo}function Oc(e,t){t&&(qt("Patches"),e.u=[],e.s=[],e.v=t)}function Aa(e){yd(e),e.p.forEach(LC),e.p=null}function yd(e){e===bo&&(bo=e.l)}function cm(e){return bo={p:[],l:bo,h:e,m:!0,_:0}}function LC(e){var t=e[he];t.i===0||t.i===1?t.j():t.g=!0}function Pc(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||qt("ES5").S(t,e,r),r?(n[he].P&&(Aa(t),zt(4)),un(e)&&(e=Ca(t,e),t.l||ja(t,e)),t.u&&qt("Patches").M(n[he].t,e,t.u,t.s)):e=Ca(t,n,[]),Aa(t),t.u&&t.v(t.u,t.s),e!==Hy?e:void 0}function Ca(e,t,n){if(sp(t))return t;var r=t[he];if(!r)return fr(t,function(a,c){return um(e,r,t,a,c,n)},!0),t;if(r.A!==e)return t;if(!r.P)return ja(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=ip(r.k):r.o,o=i,s=!1;r.i===3&&(o=new Set(i),i.clear(),s=!0),fr(o,function(a,c){return um(e,r,i,a,c,n,s)}),ja(e,i,!1),n&&e.u&&qt("Patches").N(r,n,e.u,e.s)}return r.o}function um(e,t,n,r,i,o,s){if(Wn(i)){var a=Ca(e,i,o&&t&&t.i!==3&&!_r(t.R,r)?o.concat(r):void 0);if(Uy(n,r,a),!Wn(a))return;e.m=!1}else s&&n.add(i);if(un(i)&&!sp(i)){if(!e.h.D&&e._<1)return;Ca(e,i),t&&t.A.l||ja(e,i)}}function ja(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&op(t,n)}function $c(e,t){var n=e[he];return(n?Yn(n):e)[t]}function dm(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function kn(e){e.P||(e.P=!0,e.l&&kn(e.l))}function Rc(e){e.o||(e.o=ip(e.t))}function vd(e,t,n){var r=np(t)?qt("MapSet").F(t,n):rp(t)?qt("MapSet").T(t,n):e.O?function(i,o){var s=Array.isArray(i),a={i:s?1:0,A:o?o.A:xd(),P:!1,I:!1,R:{},l:o,t:i,k:null,o:null,j:null,C:!1},c=a,u=So;s&&(c=[a],u=Fi);var d=Proxy.revocable(c,u),h=d.revoke,p=d.proxy;return a.k=p,a.j=h,p}(t,n):qt("ES5").J(t,n);return(n?n.A:xd()).p.push(r),r}function OC(e){return Wn(e)||zt(22,e),function t(n){if(!un(n))return n;var r,i=n[he],o=vi(n);if(i){if(!i.P&&(i.i<4||!qt("ES5").K(i)))return i.t;i.I=!0,r=fm(n,o),i.I=!1}else r=fm(n,o);return fr(r,function(s,a){i&&jC(i.t,s)===a||Uy(r,s,t(a))}),o===3?new Set(r):r}(e)}function fm(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return ip(e)}function PC(){function e(o,s){var a=i[o];return a?a.enumerable=s:i[o]=a={configurable:!0,enumerable:s,get:function(){var c=this[he];return So.get(c,o)},set:function(c){var u=this[he];So.set(u,o,c)}},a}function t(o){for(var s=o.length-1;s>=0;s--){var a=o[s][he];if(!a.P)switch(a.i){case 5:r(a)&&kn(a);break;case 4:n(a)&&kn(a)}}}function n(o){for(var s=o.t,a=o.k,c=Ur(a),u=c.length-1;u>=0;u--){var d=c[u];if(d!==he){var h=s[d];if(h===void 0&&!_r(s,d))return!0;var p=a[d],y=p&&p[he];if(y?y.t!==h:!Wy(p,h))return!0}}var x=!!s[he];return c.length!==Ur(s).length+(x?0:1)}function r(o){var s=o.k;if(s.length!==o.t.length)return!0;var a=Object.getOwnPropertyDescriptor(s,s.length-1);if(a&&!a.get)return!0;for(var c=0;c<s.length;c++)if(!s.hasOwnProperty(c))return!0;return!1}var i={};TC("ES5",{J:function(o,s){var a=Array.isArray(o),c=function(d,h){if(d){for(var p=Array(h.length),y=0;y<h.length;y++)Object.defineProperty(p,""+y,e(y,!0));return p}var x=Vy(h);delete x[he];for(var v=Ur(x),S=0;S<v.length;S++){var g=v[S];x[g]=e(g,d||!!x[g].enumerable)}return Object.create(Object.getPrototypeOf(h),x)}(a,o),u={i:a?5:4,A:s?s.A:xd(),P:!1,I:!1,R:{},l:s,t:o,k:c,o:null,g:!1,C:!1};return Object.defineProperty(c,he,{value:u,writable:!0}),c},S:function(o,s,a){a?Wn(s)&&s[he].A===o&&t(o.p):(o.u&&function c(u){if(u&&typeof u=="object"){var d=u[he];if(d){var h=d.t,p=d.k,y=d.R,x=d.i;if(x===4)fr(p,function(w){w!==he&&(h[w]!==void 0||_r(h,w)?y[w]||c(p[w]):(y[w]=!0,kn(d)))}),fr(h,function(w){p[w]!==void 0||_r(p,w)||(y[w]=!1,kn(d))});else if(x===5){if(r(d)&&(kn(d),y.length=!0),p.length<h.length)for(var v=p.length;v<h.length;v++)y[v]=!1;else for(var S=h.length;S<p.length;S++)y[S]=!0;for(var g=Math.min(p.length,h.length),m=0;m<g;m++)p.hasOwnProperty(m)||(y[m]=!0),y[m]===void 0&&c(p[m])}}}}(o.p[0]),t(o.p))},K:function(o){return o.i===4?n(o):r(o)}})}var pm,bo,ap=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",$C=typeof Map<"u",RC=typeof Set<"u",hm=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Hy=ap?Symbol.for("immer-nothing"):((pm={})["immer-nothing"]=!0,pm),mm=ap?Symbol.for("immer-draftable"):"__$immer_draftable",he=ap?Symbol.for("immer-state"):"__$immer_state",zC=""+Object.prototype.constructor,Ur=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Vy=Object.getOwnPropertyDescriptors||function(e){var t={};return Ur(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},wd={},So={get:function(e,t){if(t===he)return e;var n=Yn(e);if(!_r(n,t))return function(i,o,s){var a,c=dm(o,s);return c?"value"in c?c.value:(a=c.get)===null||a===void 0?void 0:a.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!un(r)?r:r===$c(e.t,t)?(Rc(e),e.o[t]=vd(e.A.h,r,e)):r},has:function(e,t){return t in Yn(e)},ownKeys:function(e){return Reflect.ownKeys(Yn(e))},set:function(e,t,n){var r=dm(Yn(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=$c(Yn(e),t),o=i==null?void 0:i[he];if(o&&o.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(Wy(n,i)&&(n!==void 0||_r(e.t,t)))return!0;Rc(e),kn(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return $c(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Rc(e),kn(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Yn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){zt(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){zt(12)}},Fi={};fr(So,function(e,t){Fi[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Fi.deleteProperty=function(e,t){return Fi.set.call(this,e,t,void 0)},Fi.set=function(e,t,n){return So.set.call(this,e[0],t,n,e[0])};var NC=function(){function e(n){var r=this;this.O=hm,this.D=!0,this.produce=function(i,o,s){if(typeof i=="function"&&typeof o!="function"){var a=o;o=i;var c=r;return function(v){var S=this;v===void 0&&(v=a);for(var g=arguments.length,m=Array(g>1?g-1:0),w=1;w<g;w++)m[w-1]=arguments[w];return c.produce(v,function(k){var A;return(A=o).call.apply(A,[S,k].concat(m))})}}var u;if(typeof o!="function"&&zt(6),s!==void 0&&typeof s!="function"&&zt(7),un(i)){var d=cm(r),h=vd(r,i,void 0),p=!0;try{u=o(h),p=!1}finally{p?Aa(d):yd(d)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(v){return Oc(d,s),Pc(v,d)},function(v){throw Aa(d),v}):(Oc(d,s),Pc(u,d))}if(!i||typeof i!="object"){if((u=o(i))===void 0&&(u=i),u===Hy&&(u=void 0),r.D&&op(u,!0),s){var y=[],x=[];qt("Patches").M(i,u,y,x),s(y,x)}return u}zt(21,i)},this.produceWithPatches=function(i,o){if(typeof i=="function")return function(u){for(var d=arguments.length,h=Array(d>1?d-1:0),p=1;p<d;p++)h[p-1]=arguments[p];return r.produceWithPatches(u,function(y){return i.apply(void 0,[y].concat(h))})};var s,a,c=r.produce(i,o,function(u,d){s=u,a=d});return typeof Promise<"u"&&c instanceof Promise?c.then(function(u){return[u,s,a]}):[c,s,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){un(n)||zt(8),Wn(n)&&(n=OC(n));var r=cm(this),i=vd(this,n,void 0);return i[he].C=!0,yd(r),i},t.finishDraft=function(n,r){var i=n&&n[he],o=i.A;return Oc(o,r),Pc(void 0,o)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!hm&&zt(20),this.O=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var o=r[i];if(o.path.length===0&&o.op==="replace"){n=o.value;break}}i>-1&&(r=r.slice(i+1));var s=qt("Patches").$;return Wn(n)?s(n,r):this.produce(n,function(a){return s(a,r)})},e}(),gt=new NC,Qy=gt.produce;gt.produceWithPatches.bind(gt);gt.setAutoFreeze.bind(gt);gt.setUseProxies.bind(gt);gt.applyPatches.bind(gt);gt.createDraft.bind(gt);gt.finishDraft.bind(gt);function ko(e){"@babel/helpers - typeof";return ko=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ko(e)}function BC(e,t){if(ko(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ko(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function IC(e){var t=BC(e,"string");return ko(t)==="symbol"?t:String(t)}function FC(e,t,n){return t=IC(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function xm(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gm(Object(n),!0).forEach(function(r){FC(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Qe(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var ym=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),zc=function(){return Math.random().toString(36).substring(7).split("").join(".")},Ea={INIT:"@@redux/INIT"+zc(),REPLACE:"@@redux/REPLACE"+zc(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+zc()}};function DC(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Gy(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Qe(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Qe(1));return n(Gy)(e,t)}if(typeof e!="function")throw new Error(Qe(2));var i=e,o=t,s=[],a=s,c=!1;function u(){a===s&&(a=s.slice())}function d(){if(c)throw new Error(Qe(3));return o}function h(v){if(typeof v!="function")throw new Error(Qe(4));if(c)throw new Error(Qe(5));var S=!0;return u(),a.push(v),function(){if(S){if(c)throw new Error(Qe(6));S=!1,u();var m=a.indexOf(v);a.splice(m,1),s=null}}}function p(v){if(!DC(v))throw new Error(Qe(7));if(typeof v.type>"u")throw new Error(Qe(8));if(c)throw new Error(Qe(9));try{c=!0,o=i(o,v)}finally{c=!1}for(var S=s=a,g=0;g<S.length;g++){var m=S[g];m()}return v}function y(v){if(typeof v!="function")throw new Error(Qe(10));i=v,p({type:Ea.REPLACE})}function x(){var v,S=h;return v={subscribe:function(m){if(typeof m!="object"||m===null)throw new Error(Qe(11));function w(){m.next&&m.next(d())}w();var k=S(w);return{unsubscribe:k}}},v[ym]=function(){return this},v}return p({type:Ea.INIT}),r={dispatch:p,subscribe:h,getState:d,replaceReducer:y},r[ym]=x,r}function MC(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Ea.INIT});if(typeof r>"u")throw new Error(Qe(12));if(typeof n(void 0,{type:Ea.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Qe(13))})}function _C(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var o=Object.keys(n),s;try{MC(n)}catch(a){s=a}return function(c,u){if(c===void 0&&(c={}),s)throw s;for(var d=!1,h={},p=0;p<o.length;p++){var y=o[p],x=n[y],v=c[y],S=x(v,u);if(typeof S>"u")throw u&&u.type,new Error(Qe(14));h[y]=S,d=d||S!==v}return d=d||o.length!==Object.keys(c).length,d?h:c}}function Ta(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function UC(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),o=function(){throw new Error(Qe(15))},s={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},a=t.map(function(c){return c(s)});return o=Ta.apply(void 0,a)(i.dispatch),xm(xm({},i),{},{dispatch:o})}}}function qy(e){var t=function(r){var i=r.dispatch,o=r.getState;return function(s){return function(a){return typeof a=="function"?a(i,o,e):s(a)}}};return t}var Ky=qy();Ky.withExtraArgument=qy;const vm=Ky;var Yy=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),WC=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(u){return function(d){return c([u,d])}}function c(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1],o=u;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(u);break}o[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(d){u=[6,d],i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},li=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},HC=Object.defineProperty,VC=Object.defineProperties,QC=Object.getOwnPropertyDescriptors,wm=Object.getOwnPropertySymbols,GC=Object.prototype.hasOwnProperty,qC=Object.prototype.propertyIsEnumerable,bm=function(e,t,n){return t in e?HC(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},In=function(e,t){for(var n in t||(t={}))GC.call(t,n)&&bm(e,n,t[n]);if(wm)for(var r=0,i=wm(t);r<i.length;r++){var n=i[r];qC.call(t,n)&&bm(e,n,t[n])}return e},Nc=function(e,t){return VC(e,QC(t))},KC=function(e,t,n){return new Promise(function(r,i){var o=function(c){try{a(n.next(c))}catch(u){i(u)}},s=function(c){try{a(n.throw(c))}catch(u){i(u)}},a=function(c){return c.done?r(c.value):Promise.resolve(c.value).then(o,s)};a((n=n.apply(e,t)).next())})},YC=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Ta:Ta.apply(null,arguments)};function JC(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var XC=function(e){Yy(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,li([void 0],n[0].concat(this)))):new(t.bind.apply(t,li([void 0],n.concat(this))))},t}(Array),ZC=function(e){Yy(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,li([void 0],n[0].concat(this)))):new(t.bind.apply(t,li([void 0],n.concat(this))))},t}(Array);function bd(e){return un(e)?Qy(e,function(){}):e}function e2(e){return typeof e=="boolean"}function t2(){return function(t){return n2(t)}}function n2(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new XC;return n&&(e2(n)?r.push(vm):r.push(vm.withExtraArgument(n.extraArgument))),r}var r2=!0;function i2(e){var t=t2(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,o=n.middleware,s=o===void 0?t():o,a=n.devTools,c=a===void 0?!0:a,u=n.preloadedState,d=u===void 0?void 0:u,h=n.enhancers,p=h===void 0?void 0:h,y;if(typeof i=="function")y=i;else if(JC(i))y=_C(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var x=s;typeof x=="function"&&(x=x(t));var v=UC.apply(void 0,x),S=Ta;c&&(S=YC(In({trace:!r2},typeof c=="object"&&c)));var g=new ZC(v),m=g;Array.isArray(p)?m=li([v],p):typeof p=="function"&&(m=p(g));var w=S.apply(void 0,m);return Gy(y,d,w)}function rn(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var o=t.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return In(In({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function Jy(e){var t={},n=[],r,i={addCase:function(o,s){var a=typeof o=="string"?o:o.type;if(a in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[a]=s,i},addMatcher:function(o,s){return n.push({matcher:o,reducer:s}),i},addDefaultCase:function(o){return r=o,i}};return e(i),[t,n,r]}function o2(e){return typeof e=="function"}function s2(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?Jy(t):[t,n,r],o=i[0],s=i[1],a=i[2],c;if(o2(e))c=function(){return bd(e())};else{var u=bd(e);c=function(){return u}}function d(h,p){h===void 0&&(h=c());var y=li([o[p.type]],s.filter(function(x){var v=x.matcher;return v(p)}).map(function(x){var v=x.reducer;return v}));return y.filter(function(x){return!!x}).length===0&&(y=[a]),y.reduce(function(x,v){if(v)if(Wn(x)){var S=x,g=v(S,p);return g===void 0?x:g}else{if(un(x))return Qy(x,function(m){return v(m,p)});var g=v(x,p);if(g===void 0){if(x===null)return x;throw Error("A case reducer on a non-draftable value must not return undefined")}return g}return x},h)}return d.getInitialState=c,d}function a2(e,t){return e+"/"+t}function Pe(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:bd(e.initialState),r=e.reducers||{},i=Object.keys(r),o={},s={},a={};i.forEach(function(d){var h=r[d],p=a2(t,d),y,x;"reducer"in h?(y=h.reducer,x=h.prepare):y=h,o[d]=y,s[p]=y,a[d]=x?rn(p,x):rn(p)});function c(){var d=typeof e.extraReducers=="function"?Jy(e.extraReducers):[e.extraReducers],h=d[0],p=h===void 0?{}:h,y=d[1],x=y===void 0?[]:y,v=d[2],S=v===void 0?void 0:v,g=In(In({},p),s);return s2(n,function(m){for(var w in g)m.addCase(w,g[w]);for(var k=0,A=x;k<A.length;k++){var C=A[k];m.addMatcher(C.matcher,C.reducer)}S&&m.addDefaultCase(S)})}var u;return{name:t,reducer:function(d,h){return u||(u=c()),u(d,h)},actions:a,caseReducers:o,getInitialState:function(){return u||(u=c()),u.getInitialState()}}}var l2="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",c2=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=l2[Math.random()*64|0];return t},u2=["name","message","stack","code"],Bc=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Sm=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),d2=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=u2;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}},ae=function(){function e(t,n,r){var i=rn(t+"/fulfilled",function(u,d,h,p){return{payload:u,meta:Nc(In({},p||{}),{arg:h,requestId:d,requestStatus:"fulfilled"})}}),o=rn(t+"/pending",function(u,d,h){return{payload:void 0,meta:Nc(In({},h||{}),{arg:d,requestId:u,requestStatus:"pending"})}}),s=rn(t+"/rejected",function(u,d,h,p,y){return{payload:p,error:(r&&r.serializeError||d2)(u||"Rejected"),meta:Nc(In({},y||{}),{arg:h,requestId:d,rejectedWithValue:!!p,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),a=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function c(u){return function(d,h,p){var y=r!=null&&r.idGenerator?r.idGenerator(u):c2(),x=new a,v;function S(m){v=m,x.abort()}var g=function(){return KC(this,null,function(){var m,w,k,A,C,j,T;return WC(this,function(L){switch(L.label){case 0:return L.trys.push([0,4,,5]),A=(m=r==null?void 0:r.condition)==null?void 0:m.call(r,u,{getState:h,extra:p}),p2(A)?[4,A]:[3,2];case 1:A=L.sent(),L.label=2;case 2:if(A===!1||x.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return C=new Promise(function(O,P){return x.signal.addEventListener("abort",function(){return P({name:"AbortError",message:v||"Aborted"})})}),d(o(y,u,(w=r==null?void 0:r.getPendingMeta)==null?void 0:w.call(r,{requestId:y,arg:u},{getState:h,extra:p}))),[4,Promise.race([C,Promise.resolve(n(u,{dispatch:d,getState:h,extra:p,requestId:y,signal:x.signal,abort:S,rejectWithValue:function(O,P){return new Bc(O,P)},fulfillWithValue:function(O,P){return new Sm(O,P)}})).then(function(O){if(O instanceof Bc)throw O;return O instanceof Sm?i(O.payload,y,u,O.meta):i(O,y,u)})])];case 3:return k=L.sent(),[3,5];case 4:return j=L.sent(),k=j instanceof Bc?s(null,y,u,j.payload,j.meta):s(j,y,u),[3,5];case 5:return T=r&&!r.dispatchConditionRejection&&s.match(k)&&k.meta.condition,T||d(k),[2,k]}})})}();return Object.assign(g,{abort:S,requestId:y,arg:u,unwrap:function(){return g.then(f2)}})}}return Object.assign(c,{pending:o,rejected:s,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e}();function f2(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function p2(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var lp="listenerMiddleware";rn(lp+"/add");rn(lp+"/removeAll");rn(lp+"/remove");var km;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);PC();function Xy(e,t){return function(){return e.apply(t,arguments)}}const{toString:h2}=Object.prototype,{getPrototypeOf:cp}=Object,Bl=(e=>t=>{const n=h2.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Kt=e=>(e=e.toLowerCase(),t=>Bl(t)===e),Il=e=>t=>typeof t===e,{isArray:wi}=Array,Ao=Il("undefined");function m2(e){return e!==null&&!Ao(e)&&e.constructor!==null&&!Ao(e.constructor)&&Ct(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Zy=Kt("ArrayBuffer");function g2(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Zy(e.buffer),t}const x2=Il("string"),Ct=Il("function"),ev=Il("number"),Fl=e=>e!==null&&typeof e=="object",y2=e=>e===!0||e===!1,Ts=e=>{if(Bl(e)!=="object")return!1;const t=cp(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},v2=Kt("Date"),w2=Kt("File"),b2=Kt("Blob"),S2=Kt("FileList"),k2=e=>Fl(e)&&Ct(e.pipe),A2=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Ct(e.append)&&((t=Bl(e))==="formdata"||t==="object"&&Ct(e.toString)&&e.toString()==="[object FormData]"))},C2=Kt("URLSearchParams"),j2=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Bo(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),wi(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let a;for(r=0;r<s;r++)a=o[r],t.call(null,e[a],a,e)}}function tv(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const nv=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),rv=e=>!Ao(e)&&e!==nv;function Sd(){const{caseless:e}=rv(this)&&this||{},t={},n=(r,i)=>{const o=e&&tv(t,i)||i;Ts(t[o])&&Ts(r)?t[o]=Sd(t[o],r):Ts(r)?t[o]=Sd({},r):wi(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Bo(arguments[r],n);return t}const E2=(e,t,n,{allOwnKeys:r}={})=>(Bo(t,(i,o)=>{n&&Ct(i)?e[o]=Xy(i,n):e[o]=i},{allOwnKeys:r}),e),T2=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),L2=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},O2=(e,t,n,r)=>{let i,o,s;const a={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!r||r(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=n!==!1&&cp(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},P2=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},$2=e=>{if(!e)return null;if(wi(e))return e;let t=e.length;if(!ev(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},R2=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&cp(Uint8Array)),z2=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},N2=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},B2=Kt("HTMLFormElement"),I2=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Am=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),F2=Kt("RegExp"),iv=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Bo(n,(i,o)=>{t(i,o,e)!==!1&&(r[o]=i)}),Object.defineProperties(e,r)},D2=e=>{iv(e,(t,n)=>{if(Ct(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Ct(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},M2=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return wi(e)?r(e):r(String(e).split(t)),n},_2=()=>{},U2=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Ic="abcdefghijklmnopqrstuvwxyz",Cm="0123456789",ov={DIGIT:Cm,ALPHA:Ic,ALPHA_DIGIT:Ic+Ic.toUpperCase()+Cm},W2=(e=16,t=ov.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function H2(e){return!!(e&&Ct(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const V2=e=>{const t=new Array(10),n=(r,i)=>{if(Fl(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=wi(r)?[]:{};return Bo(r,(s,a)=>{const c=n(s,i+1);!Ao(c)&&(o[a]=c)}),t[i]=void 0,o}}return r};return n(e,0)},Q2=Kt("AsyncFunction"),G2=e=>e&&(Fl(e)||Ct(e))&&Ct(e.then)&&Ct(e.catch),R={isArray:wi,isArrayBuffer:Zy,isBuffer:m2,isFormData:A2,isArrayBufferView:g2,isString:x2,isNumber:ev,isBoolean:y2,isObject:Fl,isPlainObject:Ts,isUndefined:Ao,isDate:v2,isFile:w2,isBlob:b2,isRegExp:F2,isFunction:Ct,isStream:k2,isURLSearchParams:C2,isTypedArray:R2,isFileList:S2,forEach:Bo,merge:Sd,extend:E2,trim:j2,stripBOM:T2,inherits:L2,toFlatObject:O2,kindOf:Bl,kindOfTest:Kt,endsWith:P2,toArray:$2,forEachEntry:z2,matchAll:N2,isHTMLForm:B2,hasOwnProperty:Am,hasOwnProp:Am,reduceDescriptors:iv,freezeMethods:D2,toObjectSet:M2,toCamelCase:I2,noop:_2,toFiniteNumber:U2,findKey:tv,global:nv,isContextDefined:rv,ALPHABET:ov,generateString:W2,isSpecCompliantForm:H2,toJSONObject:V2,isAsyncFn:Q2,isThenable:G2};function ee(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}R.inherits(ee,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:R.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const sv=ee.prototype,av={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{av[e]={value:e}});Object.defineProperties(ee,av);Object.defineProperty(sv,"isAxiosError",{value:!0});ee.from=(e,t,n,r,i,o)=>{const s=Object.create(sv);return R.toFlatObject(e,s,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),ee.call(s,e.message,t,n,r,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const q2=null;function kd(e){return R.isPlainObject(e)||R.isArray(e)}function lv(e){return R.endsWith(e,"[]")?e.slice(0,-2):e}function jm(e,t,n){return e?e.concat(t).map(function(i,o){return i=lv(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function K2(e){return R.isArray(e)&&!e.some(kd)}const Y2=R.toFlatObject(R,{},null,function(t){return/^is[A-Z]/.test(t)});function Dl(e,t,n){if(!R.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=R.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,S){return!R.isUndefined(S[v])});const r=n.metaTokens,i=n.visitor||d,o=n.dots,s=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&R.isSpecCompliantForm(t);if(!R.isFunction(i))throw new TypeError("visitor must be a function");function u(x){if(x===null)return"";if(R.isDate(x))return x.toISOString();if(!c&&R.isBlob(x))throw new ee("Blob is not supported. Use a Buffer instead.");return R.isArrayBuffer(x)||R.isTypedArray(x)?c&&typeof Blob=="function"?new Blob([x]):Buffer.from(x):x}function d(x,v,S){let g=x;if(x&&!S&&typeof x=="object"){if(R.endsWith(v,"{}"))v=r?v:v.slice(0,-2),x=JSON.stringify(x);else if(R.isArray(x)&&K2(x)||(R.isFileList(x)||R.endsWith(v,"[]"))&&(g=R.toArray(x)))return v=lv(v),g.forEach(function(w,k){!(R.isUndefined(w)||w===null)&&t.append(s===!0?jm([v],k,o):s===null?v:v+"[]",u(w))}),!1}return kd(x)?!0:(t.append(jm(S,v,o),u(x)),!1)}const h=[],p=Object.assign(Y2,{defaultVisitor:d,convertValue:u,isVisitable:kd});function y(x,v){if(!R.isUndefined(x)){if(h.indexOf(x)!==-1)throw Error("Circular reference detected in "+v.join("."));h.push(x),R.forEach(x,function(g,m){(!(R.isUndefined(g)||g===null)&&i.call(t,g,R.isString(m)?m.trim():m,v,p))===!0&&y(g,v?v.concat(m):[m])}),h.pop()}}if(!R.isObject(e))throw new TypeError("data must be an object");return y(e),t}function Em(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function up(e,t){this._pairs=[],e&&Dl(e,this,t)}const cv=up.prototype;cv.append=function(t,n){this._pairs.push([t,n])};cv.toString=function(t){const n=t?function(r){return t.call(this,r,Em)}:Em;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function J2(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function uv(e,t,n){if(!t)return e;const r=n&&n.encode||J2,i=n&&n.serialize;let o;if(i?o=i(t,n):o=R.isURLSearchParams(t)?t.toString():new up(t,n).toString(r),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class X2{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){R.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Tm=X2,dv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Z2=typeof URLSearchParams<"u"?URLSearchParams:up,ej=typeof FormData<"u"?FormData:null,tj=typeof Blob<"u"?Blob:null,nj=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),rj=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Ht={isBrowser:!0,classes:{URLSearchParams:Z2,FormData:ej,Blob:tj},isStandardBrowserEnv:nj,isStandardBrowserWebWorkerEnv:rj,protocols:["http","https","file","blob","url","data"]};function ij(e,t){return Dl(e,new Ht.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return Ht.isNode&&R.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function oj(e){return R.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function sj(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function fv(e){function t(n,r,i,o){let s=n[o++];const a=Number.isFinite(+s),c=o>=n.length;return s=!s&&R.isArray(i)?i.length:s,c?(R.hasOwnProp(i,s)?i[s]=[i[s],r]:i[s]=r,!a):((!i[s]||!R.isObject(i[s]))&&(i[s]=[]),t(n,r,i[s],o)&&R.isArray(i[s])&&(i[s]=sj(i[s])),!a)}if(R.isFormData(e)&&R.isFunction(e.entries)){const n={};return R.forEachEntry(e,(r,i)=>{t(oj(r),i,n,0)}),n}return null}const aj={"Content-Type":void 0};function lj(e,t,n){if(R.isString(e))try{return(t||JSON.parse)(e),R.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Ml={transitional:dv,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=R.isObject(t);if(o&&R.isHTMLForm(t)&&(t=new FormData(t)),R.isFormData(t))return i&&i?JSON.stringify(fv(t)):t;if(R.isArrayBuffer(t)||R.isBuffer(t)||R.isStream(t)||R.isFile(t)||R.isBlob(t))return t;if(R.isArrayBufferView(t))return t.buffer;if(R.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return ij(t,this.formSerializer).toString();if((a=R.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Dl(a?{"files[]":t}:t,c&&new c,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),lj(t)):t}],transformResponse:[function(t){const n=this.transitional||Ml.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&R.isString(t)&&(r&&!this.responseType||i)){const s=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(a){if(s)throw a.name==="SyntaxError"?ee.from(a,ee.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ht.classes.FormData,Blob:Ht.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};R.forEach(["delete","get","head"],function(t){Ml.headers[t]={}});R.forEach(["post","put","patch"],function(t){Ml.headers[t]=R.merge(aj)});const dp=Ml,cj=R.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),uj=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),n=s.substring(0,i).trim().toLowerCase(),r=s.substring(i+1).trim(),!(!n||t[n]&&cj[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Lm=Symbol("internals");function Oi(e){return e&&String(e).trim().toLowerCase()}function Ls(e){return e===!1||e==null?e:R.isArray(e)?e.map(Ls):String(e)}function dj(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const fj=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Fc(e,t,n,r,i){if(R.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!R.isString(t)){if(R.isString(r))return t.indexOf(r)!==-1;if(R.isRegExp(r))return r.test(t)}}function pj(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function hj(e,t){const n=R.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,s){return this[r].call(this,t,i,o,s)},configurable:!0})})}class _l{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(a,c,u){const d=Oi(c);if(!d)throw new Error("header name must be a non-empty string");const h=R.findKey(i,d);(!h||i[h]===void 0||u===!0||u===void 0&&i[h]!==!1)&&(i[h||c]=Ls(a))}const s=(a,c)=>R.forEach(a,(u,d)=>o(u,d,c));return R.isPlainObject(t)||t instanceof this.constructor?s(t,n):R.isString(t)&&(t=t.trim())&&!fj(t)?s(uj(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=Oi(t),t){const r=R.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return dj(i);if(R.isFunction(n))return n.call(this,i,r);if(R.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Oi(t),t){const r=R.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Fc(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(s){if(s=Oi(s),s){const a=R.findKey(r,s);a&&(!n||Fc(r,r[a],a,n))&&(delete r[a],i=!0)}}return R.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||Fc(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return R.forEach(this,(i,o)=>{const s=R.findKey(r,o);if(s){n[s]=Ls(i),delete n[o];return}const a=t?pj(o):String(o).trim();a!==o&&delete n[o],n[a]=Ls(i),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return R.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&R.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Lm]=this[Lm]={accessors:{}}).accessors,i=this.prototype;function o(s){const a=Oi(s);r[a]||(hj(i,s),r[a]=!0)}return R.isArray(t)?t.forEach(o):o(t),this}}_l.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);R.freezeMethods(_l.prototype);R.freezeMethods(_l);const on=_l;function Dc(e,t){const n=this||dp,r=t||n,i=on.from(r.headers);let o=r.data;return R.forEach(e,function(a){o=a.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function pv(e){return!!(e&&e.__CANCEL__)}function Io(e,t,n){ee.call(this,e??"canceled",ee.ERR_CANCELED,t,n),this.name="CanceledError"}R.inherits(Io,ee,{__CANCEL__:!0});function mj(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new ee("Request failed with status code "+n.status,[ee.ERR_BAD_REQUEST,ee.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const gj=Ht.isStandardBrowserEnv?function(){return{write:function(n,r,i,o,s,a){const c=[];c.push(n+"="+encodeURIComponent(r)),R.isNumber(i)&&c.push("expires="+new Date(i).toGMTString()),R.isString(o)&&c.push("path="+o),R.isString(s)&&c.push("domain="+s),a===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function xj(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function yj(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function hv(e,t){return e&&!xj(t)?yj(e,t):t}const vj=Ht.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let s=o;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(s){const a=R.isString(s)?i(s):s;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function wj(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function bj(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,s;return t=t!==void 0?t:1e3,function(c){const u=Date.now(),d=r[o];s||(s=u),n[i]=c,r[i]=u;let h=o,p=0;for(;h!==i;)p+=n[h++],h=h%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-s<t)return;const y=d&&u-d;return y?Math.round(p*1e3/y):void 0}}function Om(e,t){let n=0;const r=bj(50,250);return i=>{const o=i.loaded,s=i.lengthComputable?i.total:void 0,a=o-n,c=r(a),u=o<=s;n=o;const d={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&u?(s-o)/c:void 0,event:i};d[t?"download":"upload"]=!0,e(d)}}const Sj=typeof XMLHttpRequest<"u",kj=Sj&&function(e){return new Promise(function(n,r){let i=e.data;const o=on.from(e.headers).normalize(),s=e.responseType;let a;function c(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}R.isFormData(i)&&(Ht.isStandardBrowserEnv||Ht.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let u=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",x=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(y+":"+x))}const d=hv(e.baseURL,e.url);u.open(e.method.toUpperCase(),uv(d,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function h(){if(!u)return;const y=on.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),v={data:!s||s==="text"||s==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:y,config:e,request:u};mj(function(g){n(g),c()},function(g){r(g),c()},v),u=null}if("onloadend"in u?u.onloadend=h:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(h)},u.onabort=function(){u&&(r(new ee("Request aborted",ee.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new ee("Network Error",ee.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let x=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const v=e.transitional||dv;e.timeoutErrorMessage&&(x=e.timeoutErrorMessage),r(new ee(x,v.clarifyTimeoutError?ee.ETIMEDOUT:ee.ECONNABORTED,e,u)),u=null},Ht.isStandardBrowserEnv){const y=(e.withCredentials||vj(d))&&e.xsrfCookieName&&gj.read(e.xsrfCookieName);y&&o.set(e.xsrfHeaderName,y)}i===void 0&&o.setContentType(null),"setRequestHeader"in u&&R.forEach(o.toJSON(),function(x,v){u.setRequestHeader(v,x)}),R.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),s&&s!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",Om(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Om(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=y=>{u&&(r(!y||y.type?new Io(null,e,u):y),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));const p=wj(d);if(p&&Ht.protocols.indexOf(p)===-1){r(new ee("Unsupported protocol "+p+":",ee.ERR_BAD_REQUEST,e));return}u.send(i||null)})},Os={http:q2,xhr:kj};R.forEach(Os,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Aj={getAdapter:e=>{e=R.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=R.isString(n)?Os[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new ee(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(R.hasOwnProp(Os,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!R.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Os};function Mc(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Io(null,e)}function Pm(e){return Mc(e),e.headers=on.from(e.headers),e.data=Dc.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Aj.getAdapter(e.adapter||dp.adapter)(e).then(function(r){return Mc(e),r.data=Dc.call(e,e.transformResponse,r),r.headers=on.from(r.headers),r},function(r){return pv(r)||(Mc(e),r&&r.response&&(r.response.data=Dc.call(e,e.transformResponse,r.response),r.response.headers=on.from(r.response.headers))),Promise.reject(r)})}const $m=e=>e instanceof on?e.toJSON():e;function ci(e,t){t=t||{};const n={};function r(u,d,h){return R.isPlainObject(u)&&R.isPlainObject(d)?R.merge.call({caseless:h},u,d):R.isPlainObject(d)?R.merge({},d):R.isArray(d)?d.slice():d}function i(u,d,h){if(R.isUndefined(d)){if(!R.isUndefined(u))return r(void 0,u,h)}else return r(u,d,h)}function o(u,d){if(!R.isUndefined(d))return r(void 0,d)}function s(u,d){if(R.isUndefined(d)){if(!R.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function a(u,d,h){if(h in t)return r(u,d);if(h in e)return r(void 0,u)}const c={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(u,d)=>i($m(u),$m(d),!0)};return R.forEach(Object.keys(Object.assign({},e,t)),function(d){const h=c[d]||i,p=h(e[d],t[d],d);R.isUndefined(p)&&h!==a||(n[d]=p)}),n}const mv="1.4.0",fp={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{fp[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Rm={};fp.transitional=function(t,n,r){function i(o,s){return"[Axios v"+mv+"] Transitional option '"+o+"'"+s+(r?". "+r:"")}return(o,s,a)=>{if(t===!1)throw new ee(i(s," has been removed"+(n?" in "+n:"")),ee.ERR_DEPRECATED);return n&&!Rm[s]&&(Rm[s]=!0,console.warn(i(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,s,a):!0}};function Cj(e,t,n){if(typeof e!="object")throw new ee("options must be an object",ee.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],s=t[o];if(s){const a=e[o],c=a===void 0||s(a,o,e);if(c!==!0)throw new ee("option "+o+" must be "+c,ee.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ee("Unknown option "+o,ee.ERR_BAD_OPTION)}}const Ad={assertOptions:Cj,validators:fp},gn=Ad.validators;class La{constructor(t){this.defaults=t,this.interceptors={request:new Tm,response:new Tm}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=ci(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&Ad.assertOptions(r,{silentJSONParsing:gn.transitional(gn.boolean),forcedJSONParsing:gn.transitional(gn.boolean),clarifyTimeoutError:gn.transitional(gn.boolean)},!1),i!=null&&(R.isFunction(i)?n.paramsSerializer={serialize:i}:Ad.assertOptions(i,{encode:gn.function,serialize:gn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s;s=o&&R.merge(o.common,o[n.method]),s&&R.forEach(["delete","get","head","post","put","patch","common"],x=>{delete o[x]}),n.headers=on.concat(s,o);const a=[];let c=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(c=c&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let d,h=0,p;if(!c){const x=[Pm.bind(this),void 0];for(x.unshift.apply(x,a),x.push.apply(x,u),p=x.length,d=Promise.resolve(n);h<p;)d=d.then(x[h++],x[h++]);return d}p=a.length;let y=n;for(h=0;h<p;){const x=a[h++],v=a[h++];try{y=x(y)}catch(S){v.call(this,S);break}}try{d=Pm.call(this,y)}catch(x){return Promise.reject(x)}for(h=0,p=u.length;h<p;)d=d.then(u[h++],u[h++]);return d}getUri(t){t=ci(this.defaults,t);const n=hv(t.baseURL,t.url);return uv(n,t.params,t.paramsSerializer)}}R.forEach(["delete","get","head","options"],function(t){La.prototype[t]=function(n,r){return this.request(ci(r||{},{method:t,url:n,data:(r||{}).data}))}});R.forEach(["post","put","patch"],function(t){function n(r){return function(o,s,a){return this.request(ci(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}La.prototype[t]=n(),La.prototype[t+"Form"]=n(!0)});const Ps=La;class pp{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(a=>{r.subscribe(a),o=a}).then(i);return s.cancel=function(){r.unsubscribe(o)},s},t(function(o,s,a){r.reason||(r.reason=new Io(o,s,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new pp(function(i){t=i}),cancel:t}}}const jj=pp;function Ej(e){return function(n){return e.apply(null,n)}}function Tj(e){return R.isObject(e)&&e.isAxiosError===!0}const Cd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Cd).forEach(([e,t])=>{Cd[t]=e});const Lj=Cd;function gv(e){const t=new Ps(e),n=Xy(Ps.prototype.request,t);return R.extend(n,Ps.prototype,t,{allOwnKeys:!0}),R.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return gv(ci(e,i))},n}const Oe=gv(dp);Oe.Axios=Ps;Oe.CanceledError=Io;Oe.CancelToken=jj;Oe.isCancel=pv;Oe.VERSION=mv;Oe.toFormData=Dl;Oe.AxiosError=ee;Oe.Cancel=Oe.CanceledError;Oe.all=function(t){return Promise.all(t)};Oe.spread=Ej;Oe.isAxiosError=Tj;Oe.mergeConfig=ci;Oe.AxiosHeaders=on;Oe.formToJSON=e=>fv(R.isHTMLForm(e)?new FormData(e):e);Oe.HttpStatusCode=Lj;Oe.default=Oe;const Oj=Oe,le=Oj.create({baseURL:"https://frang.ge"}),Ki=ae("books/fetchBooksPreview",async e=>{try{return(await le.get("books")).data}catch(t){throw console.log(t),Error("Failed to fetch books preview")}}),$s=ae("books/fetchSelectedBook",async e=>{try{return(await le.get(`books/${e}`)).data}catch(t){throw console.log(t),Error("Failed to fetch selected")}}),Pj={books:[],selectedBook:[],isLoading:!1,error:null},$j=Pe({name:"books",initialState:Pj,reducers:{},extraReducers:e=>{e.addCase(Ki.pending,t=>{t.isLoading=!0}).addCase(Ki.fulfilled,(t,n)=>{t.books=n.payload,t.isLoading=!1}).addCase(Ki.rejected,(t,n)=>{t.error=n.error.message}).addCase($s.pending,t=>{t.isLoading=!0}).addCase($s.fulfilled,(t,n)=>{t.selectedBook=n.payload,t.isLoading=!1}).addCase($s.rejected,(t,n)=>{t.error=n.error.message})}}),Rj=$j.reducer,Yi=ae("vocabularyTopics/fetchVocabularyTopics",async()=>{try{return(await le.get("/vocabulary-topics")).data}catch{throw Error("Failed to fetch phrases for lesson")}}),zj={vocabularyTopics:[],isLoading:!1,error:null},Nj=Pe({name:"vocabularyTopics",initialState:zj,reducers:{},extraReducers:e=>{e.addCase(Yi.pending,t=>{t.isLoading=!0,t.error=null}).addCase(Yi.fulfilled,(t,n)=>{t.vocabularyTopics=n.payload,t.isLoading=!1}).addCase(Yi.rejected,(t,n)=>{t.isLoading=!1,t.error=n.error.message})}}),Bj=Nj.reducer;var xv={},yv={},Ul={},vv={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0},n=t;e.default=n})(vv);var Ij="Expected a function",zm=0/0,Fj="[object Symbol]",Dj=/^\s+|\s+$/g,Mj=/^[-+]0x[0-9a-f]+$/i,_j=/^0b[01]+$/i,Uj=/^0o[0-7]+$/i,Wj=parseInt,Hj=typeof Mo=="object"&&Mo&&Mo.Object===Object&&Mo,Vj=typeof self=="object"&&self&&self.Object===Object&&self,Qj=Hj||Vj||Function("return this")(),Gj=Object.prototype,qj=Gj.toString,Kj=Math.max,Yj=Math.min,_c=function(){return Qj.Date.now()};function Jj(e,t,n){var r,i,o,s,a,c,u=0,d=!1,h=!1,p=!0;if(typeof e!="function")throw new TypeError(Ij);t=Nm(t)||0,jd(n)&&(d=!!n.leading,h="maxWait"in n,o=h?Kj(Nm(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p);function y(C){var j=r,T=i;return r=i=void 0,u=C,s=e.apply(T,j),s}function x(C){return u=C,a=setTimeout(g,t),d?y(C):s}function v(C){var j=C-c,T=C-u,L=t-j;return h?Yj(L,o-T):L}function S(C){var j=C-c,T=C-u;return c===void 0||j>=t||j<0||h&&T>=o}function g(){var C=_c();if(S(C))return m(C);a=setTimeout(g,v(C))}function m(C){return a=void 0,p&&r?y(C):(r=i=void 0,s)}function w(){a!==void 0&&clearTimeout(a),u=0,r=c=i=a=void 0}function k(){return a===void 0?s:m(_c())}function A(){var C=_c(),j=S(C);if(r=arguments,i=this,c=C,j){if(a===void 0)return x(c);if(h)return a=setTimeout(g,t),y(c)}return a===void 0&&(a=setTimeout(g,t)),s}return A.cancel=w,A.flush=k,A}function jd(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Xj(e){return!!e&&typeof e=="object"}function Zj(e){return typeof e=="symbol"||Xj(e)&&qj.call(e)==Fj}function Nm(e){if(typeof e=="number")return e;if(Zj(e))return zm;if(jd(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=jd(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Dj,"");var n=_j.test(e);return n||Uj.test(e)?Wj(e.slice(2),n?2:8):Mj.test(e)?zm:+e}var eE=Jj,wv={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var s=typeof o;if(s==="string"||s==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var a=n.apply(null,o);a&&r.push(a)}}else if(s==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var c in o)t.call(o,c)&&o[c]&&r.push(c)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(wv);var Wl=wv.exports,M={};Object.defineProperty(M,"__esModule",{value:!0});M.checkSpecKeys=M.checkNavigable=M.changeSlide=M.canUseDOM=M.canGoNext=void 0;M.clamp=bv;M.swipeStart=M.swipeMove=M.swipeEnd=M.slidesOnRight=M.slidesOnLeft=M.slideHandler=M.siblingDirection=M.safePreventDefault=M.lazyStartIndex=M.lazySlidesOnRight=M.lazySlidesOnLeft=M.lazyEndIndex=M.keyHandler=M.initializedState=M.getWidth=M.getTrackLeft=M.getTrackCSS=M.getTrackAnimateCSS=M.getTotalSlides=M.getSwipeDirection=M.getSlideCount=M.getRequiredLazySlides=M.getPreClones=M.getPostClones=M.getOnDemandLazySlides=M.getNavigableIndexes=M.getHeight=M.extractObject=void 0;var tE=nE(b);function nE(e){return e&&e.__esModule?e:{default:e}}function Bm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function pe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Bm(Object(n),!0).forEach(function(r){rE(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Bm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function rE(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function bv(e,t,n){return Math.max(t,Math.min(e,n))}var ir=function(t){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(t._reactName)||t.preventDefault()};M.safePreventDefault=ir;var hp=function(t){for(var n=[],r=mp(t),i=gp(t),o=r;o<i;o++)t.lazyLoadedList.indexOf(o)<0&&n.push(o);return n};M.getOnDemandLazySlides=hp;var iE=function(t){for(var n=[],r=mp(t),i=gp(t),o=r;o<i;o++)n.push(o);return n};M.getRequiredLazySlides=iE;var mp=function(t){return t.currentSlide-Sv(t)};M.lazyStartIndex=mp;var gp=function(t){return t.currentSlide+kv(t)};M.lazyEndIndex=gp;var Sv=function(t){return t.centerMode?Math.floor(t.slidesToShow/2)+(parseInt(t.centerPadding)>0?1:0):0};M.lazySlidesOnLeft=Sv;var kv=function(t){return t.centerMode?Math.floor((t.slidesToShow-1)/2)+1+(parseInt(t.centerPadding)>0?1:0):t.slidesToShow};M.lazySlidesOnRight=kv;var Oa=function(t){return t&&t.offsetWidth||0};M.getWidth=Oa;var xp=function(t){return t&&t.offsetHeight||0};M.getHeight=xp;var yp=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,o,s;return r=t.startX-t.curX,i=t.startY-t.curY,o=Math.atan2(i,r),s=Math.round(o*180/Math.PI),s<0&&(s=360-Math.abs(s)),s<=45&&s>=0||s<=360&&s>=315?"left":s>=135&&s<=225?"right":n===!0?s>=35&&s<=135?"up":"down":"vertical"};M.getSwipeDirection=yp;var vp=function(t){var n=!0;return t.infinite||(t.centerMode&&t.currentSlide>=t.slideCount-1||t.slideCount<=t.slidesToShow||t.currentSlide>=t.slideCount-t.slidesToShow)&&(n=!1),n};M.canGoNext=vp;var oE=function(t,n){var r={};return n.forEach(function(i){return r[i]=t[i]}),r};M.extractObject=oE;var sE=function(t){var n=tE.default.Children.count(t.children),r=t.listRef,i=Math.ceil(Oa(r)),o=t.trackRef&&t.trackRef.node,s=Math.ceil(Oa(o)),a;if(t.vertical)a=i;else{var c=t.centerMode&&parseInt(t.centerPadding)*2;typeof t.centerPadding=="string"&&t.centerPadding.slice(-1)==="%"&&(c*=i/100),a=Math.ceil((i-c)/t.slidesToShow)}var u=r&&xp(r.querySelector('[data-index="0"]')),d=u*t.slidesToShow,h=t.currentSlide===void 0?t.initialSlide:t.currentSlide;t.rtl&&t.currentSlide===void 0&&(h=n-1-t.initialSlide);var p=t.lazyLoadedList||[],y=hp(pe(pe({},t),{},{currentSlide:h,lazyLoadedList:p}));p=p.concat(y);var x={slideCount:n,slideWidth:a,listWidth:i,trackWidth:s,currentSlide:h,slideHeight:u,listHeight:d,lazyLoadedList:p};return t.autoplaying===null&&t.autoplay&&(x.autoplaying="playing"),x};M.initializedState=sE;var aE=function(t){var n=t.waitForAnimate,r=t.animating,i=t.fade,o=t.infinite,s=t.index,a=t.slideCount,c=t.lazyLoad,u=t.currentSlide,d=t.centerMode,h=t.slidesToScroll,p=t.slidesToShow,y=t.useCSS,x=t.lazyLoadedList;if(n&&r)return{};var v=s,S,g,m,w={},k={},A=o?s:bv(s,0,a-1);if(i){if(!o&&(s<0||s>=a))return{};s<0?v=s+a:s>=a&&(v=s-a),c&&x.indexOf(v)<0&&(x=x.concat(v)),w={animating:!0,currentSlide:v,lazyLoadedList:x,targetSlide:v},k={animating:!1,targetSlide:v}}else S=v,v<0?(S=v+a,o?a%h!==0&&(S=a-a%h):S=0):!vp(t)&&v>u?v=S=u:d&&v>=a?(v=o?a:a-1,S=o?0:a-1):v>=a&&(S=v-a,o?a%h!==0&&(S=0):S=a-p),!o&&v+p>=a&&(S=a-p),g=jo(pe(pe({},t),{},{slideIndex:v})),m=jo(pe(pe({},t),{},{slideIndex:S})),o||(g===m&&(v=S),g=m),c&&(x=x.concat(hp(pe(pe({},t),{},{currentSlide:v})))),y?(w={animating:!0,currentSlide:S,trackStyle:wp(pe(pe({},t),{},{left:g})),lazyLoadedList:x,targetSlide:A},k={animating:!1,currentSlide:S,trackStyle:Co(pe(pe({},t),{},{left:m})),swipeLeft:null,targetSlide:A}):w={currentSlide:S,trackStyle:Co(pe(pe({},t),{},{left:m})),lazyLoadedList:x,targetSlide:A};return{state:w,nextState:k}};M.slideHandler=aE;var lE=function(t,n){var r,i,o,s,a,c=t.slidesToScroll,u=t.slidesToShow,d=t.slideCount,h=t.currentSlide,p=t.targetSlide,y=t.lazyLoad,x=t.infinite;if(s=d%c!==0,r=s?0:(d-h)%c,n.message==="previous")o=r===0?c:u-r,a=h-o,y&&!x&&(i=h-o,a=i===-1?d-1:i),x||(a=p-c);else if(n.message==="next")o=r===0?c:r,a=h+o,y&&!x&&(a=(h+c)%d+r),x||(a=p+c);else if(n.message==="dots")a=n.index*n.slidesToScroll;else if(n.message==="children"){if(a=n.index,x){var v=Ev(pe(pe({},t),{},{targetSlide:a}));a>n.currentSlide&&v==="left"?a=a-d:a<n.currentSlide&&v==="right"&&(a=a+d)}}else n.message==="index"&&(a=Number(n.index));return a};M.changeSlide=lE;var cE=function(t,n,r){return t.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":t.keyCode===37?r?"next":"previous":t.keyCode===39?r?"previous":"next":""};M.keyHandler=cE;var uE=function(t,n,r){return t.target.tagName==="IMG"&&ir(t),!n||!r&&t.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:t.touches?t.touches[0].pageX:t.clientX,startY:t.touches?t.touches[0].pageY:t.clientY,curX:t.touches?t.touches[0].pageX:t.clientX,curY:t.touches?t.touches[0].pageY:t.clientY}}};M.swipeStart=uE;var dE=function(t,n){var r=n.scrolling,i=n.animating,o=n.vertical,s=n.swipeToSlide,a=n.verticalSwiping,c=n.rtl,u=n.currentSlide,d=n.edgeFriction,h=n.edgeDragged,p=n.onEdge,y=n.swiped,x=n.swiping,v=n.slideCount,S=n.slidesToScroll,g=n.infinite,m=n.touchObject,w=n.swipeEvent,k=n.listHeight,A=n.listWidth;if(!r){if(i)return ir(t);o&&s&&a&&ir(t);var C,j={},T=jo(n);m.curX=t.touches?t.touches[0].pageX:t.clientX,m.curY=t.touches?t.touches[0].pageY:t.clientY,m.swipeLength=Math.round(Math.sqrt(Math.pow(m.curX-m.startX,2)));var L=Math.round(Math.sqrt(Math.pow(m.curY-m.startY,2)));if(!a&&!x&&L>10)return{scrolling:!0};a&&(m.swipeLength=L);var O=(c?-1:1)*(m.curX>m.startX?1:-1);a&&(O=m.curY>m.startY?1:-1);var P=Math.ceil(v/S),N=yp(n.touchObject,a),B=m.swipeLength;return g||(u===0&&(N==="right"||N==="down")||u+1>=P&&(N==="left"||N==="up")||!vp(n)&&(N==="left"||N==="up"))&&(B=m.swipeLength*d,h===!1&&p&&(p(N),j.edgeDragged=!0)),!y&&w&&(w(N),j.swiped=!0),o?C=T+B*(k/A)*O:c?C=T-B*O:C=T+B*O,a&&(C=T+B*O),j=pe(pe({},j),{},{touchObject:m,swipeLeft:C,trackStyle:Co(pe(pe({},n),{},{left:C}))}),Math.abs(m.curX-m.startX)<Math.abs(m.curY-m.startY)*.8||m.swipeLength>10&&(j.swiping=!0,ir(t)),j}};M.swipeMove=dE;var fE=function(t,n){var r=n.dragging,i=n.swipe,o=n.touchObject,s=n.listWidth,a=n.touchThreshold,c=n.verticalSwiping,u=n.listHeight,d=n.swipeToSlide,h=n.scrolling,p=n.onSwipe,y=n.targetSlide,x=n.currentSlide,v=n.infinite;if(!r)return i&&ir(t),{};var S=c?u/a:s/a,g=yp(o,c),m={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(h||!o.swipeLength)return m;if(o.swipeLength>S){ir(t),p&&p(g);var w,k,A=v?x:y;switch(g){case"left":case"up":k=A+Td(n),w=d?Ed(n,k):k,m.currentDirection=0;break;case"right":case"down":k=A-Td(n),w=d?Ed(n,k):k,m.currentDirection=1;break;default:w=A}m.triggerSlideHandler=w}else{var C=jo(n);m.trackStyle=wp(pe(pe({},n),{},{left:C}))}return m};M.swipeEnd=fE;var Av=function(t){for(var n=t.infinite?t.slideCount*2:t.slideCount,r=t.infinite?t.slidesToShow*-1:0,i=t.infinite?t.slidesToShow*-1:0,o=[];r<n;)o.push(r),r=i+t.slidesToScroll,i+=Math.min(t.slidesToScroll,t.slidesToShow);return o};M.getNavigableIndexes=Av;var Ed=function(t,n){var r=Av(t),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var o in r){if(n<r[o]){n=i;break}i=r[o]}return n};M.checkNavigable=Ed;var Td=function(t){var n=t.centerMode?t.slideWidth*Math.floor(t.slidesToShow/2):0;if(t.swipeToSlide){var r,i=t.listRef,o=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(o).every(function(c){if(t.vertical){if(c.offsetTop+xp(c)/2>t.swipeLeft*-1)return r=c,!1}else if(c.offsetLeft-n+Oa(c)/2>t.swipeLeft*-1)return r=c,!1;return!0}),!r)return 0;var s=t.rtl===!0?t.slideCount-t.currentSlide:t.currentSlide,a=Math.abs(r.dataset.index-s)||1;return a}else return t.slidesToScroll};M.getSlideCount=Td;var Hl=function(t,n){return n.reduce(function(r,i){return r&&t.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",t)};M.checkSpecKeys=Hl;var Co=function(t){Hl(t,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=t.slideCount+2*t.slidesToShow;t.vertical?r=i*t.slideHeight:n=jv(t)*t.slideWidth;var o={opacity:1,transition:"",WebkitTransition:""};if(t.useTransform){var s=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",a=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",c=t.vertical?"translateY("+t.left+"px)":"translateX("+t.left+"px)";o=pe(pe({},o),{},{WebkitTransform:s,transform:a,msTransform:c})}else t.vertical?o.top=t.left:o.left=t.left;return t.fade&&(o={opacity:1}),n&&(o.width=n),r&&(o.height=r),window&&!window.addEventListener&&window.attachEvent&&(t.vertical?o.marginTop=t.left+"px":o.marginLeft=t.left+"px"),o};M.getTrackCSS=Co;var wp=function(t){Hl(t,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=Co(t);return t.useTransform?(n.WebkitTransition="-webkit-transform "+t.speed+"ms "+t.cssEase,n.transition="transform "+t.speed+"ms "+t.cssEase):t.vertical?n.transition="top "+t.speed+"ms "+t.cssEase:n.transition="left "+t.speed+"ms "+t.cssEase,n};M.getTrackAnimateCSS=wp;var jo=function(t){if(t.unslick)return 0;Hl(t,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=t.slideIndex,r=t.trackRef,i=t.infinite,o=t.centerMode,s=t.slideCount,a=t.slidesToShow,c=t.slidesToScroll,u=t.slideWidth,d=t.listWidth,h=t.variableWidth,p=t.slideHeight,y=t.fade,x=t.vertical,v=0,S,g,m=0;if(y||t.slideCount===1)return 0;var w=0;if(i?(w=-Ji(t),s%c!==0&&n+c>s&&(w=-(n>s?a-(n-s):s%c)),o&&(w+=parseInt(a/2))):(s%c!==0&&n+c>s&&(w=a-s%c),o&&(w=parseInt(a/2))),v=w*u,m=w*p,x?S=n*p*-1+m:S=n*u*-1+v,h===!0){var k,A=r&&r.node;if(k=n+Ji(t),g=A&&A.childNodes[k],S=g?g.offsetLeft*-1:0,o===!0){k=i?n+Ji(t):n,g=A&&A.children[k],S=0;for(var C=0;C<k;C++)S-=A&&A.children[C]&&A.children[C].offsetWidth;S-=parseInt(t.centerPadding),S+=g&&(d-g.offsetWidth)/2}}return S};M.getTrackLeft=jo;var Ji=function(t){return t.unslick||!t.infinite?0:t.variableWidth?t.slideCount:t.slidesToShow+(t.centerMode?1:0)};M.getPreClones=Ji;var Cv=function(t){return t.unslick||!t.infinite?0:t.slideCount};M.getPostClones=Cv;var jv=function(t){return t.slideCount===1?1:Ji(t)+t.slideCount+Cv(t)};M.getTotalSlides=jv;var Ev=function(t){return t.targetSlide>t.currentSlide?t.targetSlide>t.currentSlide+Tv(t)?"left":"right":t.targetSlide<t.currentSlide-Lv(t)?"right":"left"};M.siblingDirection=Ev;var Tv=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var s=(n-1)/2+1;return parseInt(o)>0&&(s+=1),i&&n%2===0&&(s+=1),s}return i?0:n-1};M.slidesOnRight=Tv;var Lv=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var s=(n-1)/2+1;return parseInt(o)>0&&(s+=1),!i&&n%2===0&&(s+=1),s}return i?n-1:0};M.slidesOnLeft=Lv;var pE=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};M.canUseDOM=pE;var Vl={};function Ld(e){"@babel/helpers - typeof";return Ld=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ld(e)}Object.defineProperty(Vl,"__esModule",{value:!0});Vl.Track=void 0;var wn=Ov(b),Uc=Ov(Wl),Wc=M;function Ov(e){return e&&e.__esModule?e:{default:e}}function Od(){return Od=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Od.apply(this,arguments)}function hE(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Im(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function mE(e,t,n){return t&&Im(e.prototype,t),n&&Im(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function gE(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Pd(e,t)}function Pd(e,t){return Pd=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Pd(e,t)}function xE(e){var t=vE();return function(){var r=Pa(e),i;if(t){var o=Pa(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return yE(this,i)}}function yE(e,t){if(t&&(Ld(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return $d(e)}function $d(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function vE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Pa(e){return Pa=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Pa(e)}function Fm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function it(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Fm(Object(n),!0).forEach(function(r){Rd(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Rd(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Hc=function(t){var n,r,i,o,s;t.rtl?s=t.slideCount-1-t.index:s=t.index,i=s<0||s>=t.slideCount,t.centerMode?(o=Math.floor(t.slidesToShow/2),r=(s-t.currentSlide)%t.slideCount===0,s>t.currentSlide-o-1&&s<=t.currentSlide+o&&(n=!0)):n=t.currentSlide<=s&&s<t.currentSlide+t.slidesToShow;var a;t.targetSlide<0?a=t.targetSlide+t.slideCount:t.targetSlide>=t.slideCount?a=t.targetSlide-t.slideCount:a=t.targetSlide;var c=s===a;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":c}},wE=function(t){var n={};return(t.variableWidth===void 0||t.variableWidth===!1)&&(n.width=t.slideWidth),t.fade&&(n.position="relative",t.vertical?n.top=-t.index*parseInt(t.slideHeight):n.left=-t.index*parseInt(t.slideWidth),n.opacity=t.currentSlide===t.index?1:0,t.useCSS&&(n.transition="opacity "+t.speed+"ms "+t.cssEase+", visibility "+t.speed+"ms "+t.cssEase)),n},Vc=function(t,n){return t.key||n},bE=function(t){var n,r=[],i=[],o=[],s=wn.default.Children.count(t.children),a=(0,Wc.lazyStartIndex)(t),c=(0,Wc.lazyEndIndex)(t);return wn.default.Children.forEach(t.children,function(u,d){var h,p={message:"children",index:d,slidesToScroll:t.slidesToScroll,currentSlide:t.currentSlide};!t.lazyLoad||t.lazyLoad&&t.lazyLoadedList.indexOf(d)>=0?h=u:h=wn.default.createElement("div",null);var y=wE(it(it({},t),{},{index:d})),x=h.props.className||"",v=Hc(it(it({},t),{},{index:d}));if(r.push(wn.default.cloneElement(h,{key:"original"+Vc(h,d),"data-index":d,className:(0,Uc.default)(v,x),tabIndex:"-1","aria-hidden":!v["slick-active"],style:it(it({outline:"none"},h.props.style||{}),y),onClick:function(m){h.props&&h.props.onClick&&h.props.onClick(m),t.focusOnSelect&&t.focusOnSelect(p)}})),t.infinite&&t.fade===!1){var S=s-d;S<=(0,Wc.getPreClones)(t)&&s!==t.slidesToShow&&(n=-S,n>=a&&(h=u),v=Hc(it(it({},t),{},{index:n})),i.push(wn.default.cloneElement(h,{key:"precloned"+Vc(h,n),"data-index":n,tabIndex:"-1",className:(0,Uc.default)(v,x),"aria-hidden":!v["slick-active"],style:it(it({},h.props.style||{}),y),onClick:function(m){h.props&&h.props.onClick&&h.props.onClick(m),t.focusOnSelect&&t.focusOnSelect(p)}}))),s!==t.slidesToShow&&(n=s+d,n<c&&(h=u),v=Hc(it(it({},t),{},{index:n})),o.push(wn.default.cloneElement(h,{key:"postcloned"+Vc(h,n),"data-index":n,tabIndex:"-1",className:(0,Uc.default)(v,x),"aria-hidden":!v["slick-active"],style:it(it({},h.props.style||{}),y),onClick:function(m){h.props&&h.props.onClick&&h.props.onClick(m),t.focusOnSelect&&t.focusOnSelect(p)}})))}}),t.rtl?i.concat(r,o).reverse():i.concat(r,o)},SE=function(e){gE(n,e);var t=xE(n);function n(){var r;hE(this,n);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return r=t.call.apply(t,[this].concat(o)),Rd($d(r),"node",null),Rd($d(r),"handleRef",function(a){r.node=a}),r}return mE(n,[{key:"render",value:function(){var i=bE(this.props),o=this.props,s=o.onMouseEnter,a=o.onMouseOver,c=o.onMouseLeave,u={onMouseEnter:s,onMouseOver:a,onMouseLeave:c};return wn.default.createElement("div",Od({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},u),i)}}]),n}(wn.default.PureComponent);Vl.Track=SE;var Ql={};function zd(e){"@babel/helpers - typeof";return zd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zd(e)}Object.defineProperty(Ql,"__esModule",{value:!0});Ql.Dots=void 0;var os=Pv(b),kE=Pv(Wl),Dm=M;function Pv(e){return e&&e.__esModule?e:{default:e}}function Mm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function AE(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mm(Object(n),!0).forEach(function(r){CE(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function CE(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function jE(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function EE(e,t,n){return t&&_m(e.prototype,t),n&&_m(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function TE(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Nd(e,t)}function Nd(e,t){return Nd=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Nd(e,t)}function LE(e){var t=$E();return function(){var r=$a(e),i;if(t){var o=$a(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return OE(this,i)}}function OE(e,t){if(t&&(zd(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return PE(e)}function PE(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function $E(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function $a(e){return $a=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},$a(e)}var RE=function(t){var n;return t.infinite?n=Math.ceil(t.slideCount/t.slidesToScroll):n=Math.ceil((t.slideCount-t.slidesToShow)/t.slidesToScroll)+1,n},zE=function(e){TE(n,e);var t=LE(n);function n(){return jE(this,n),t.apply(this,arguments)}return EE(n,[{key:"clickHandler",value:function(i,o){o.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,o=i.onMouseEnter,s=i.onMouseOver,a=i.onMouseLeave,c=i.infinite,u=i.slidesToScroll,d=i.slidesToShow,h=i.slideCount,p=i.currentSlide,y=RE({slideCount:h,slidesToScroll:u,slidesToShow:d,infinite:c}),x={onMouseEnter:o,onMouseOver:s,onMouseLeave:a},v=[],S=0;S<y;S++){var g=(S+1)*u-1,m=c?g:(0,Dm.clamp)(g,0,h-1),w=m-(u-1),k=c?w:(0,Dm.clamp)(w,0,h-1),A=(0,kE.default)({"slick-active":c?p>=k&&p<=m:p===k}),C={message:"dots",index:S,slidesToScroll:u,currentSlide:p},j=this.clickHandler.bind(this,C);v=v.concat(os.default.createElement("li",{key:S,className:A},os.default.cloneElement(this.props.customPaging(S),{onClick:j})))}return os.default.cloneElement(this.props.appendDots(v),AE({className:this.props.dotsClass},x))}}]),n}(os.default.PureComponent);Ql.Dots=zE;var ui={};function Bd(e){"@babel/helpers - typeof";return Bd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bd(e)}Object.defineProperty(ui,"__esModule",{value:!0});ui.PrevArrow=ui.NextArrow=void 0;var Wr=Rv(b),$v=Rv(Wl),NE=M;function Rv(e){return e&&e.__esModule?e:{default:e}}function Ra(){return Ra=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ra.apply(this,arguments)}function Um(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function za(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Um(Object(n),!0).forEach(function(r){BE(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Um(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function BE(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function zv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Wm(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Nv(e,t,n){return t&&Wm(e.prototype,t),n&&Wm(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Bv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Id(e,t)}function Id(e,t){return Id=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Id(e,t)}function Iv(e){var t=DE();return function(){var r=Na(e),i;if(t){var o=Na(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return IE(this,i)}}function IE(e,t){if(t&&(Bd(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return FE(e)}function FE(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function DE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Na(e){return Na=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Na(e)}var ME=function(e){Bv(n,e);var t=Iv(n);function n(){return zv(this,n),t.apply(this,arguments)}return Nv(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},o=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,o=null);var s={key:"0","data-role":"none",className:(0,$v.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},c;return this.props.prevArrow?c=Wr.default.cloneElement(this.props.prevArrow,za(za({},s),a)):c=Wr.default.createElement("button",Ra({key:"0",type:"button"},s)," ","Previous"),c}}]),n}(Wr.default.PureComponent);ui.PrevArrow=ME;var _E=function(e){Bv(n,e);var t=Iv(n);function n(){return zv(this,n),t.apply(this,arguments)}return Nv(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},o=this.clickHandler.bind(this,{message:"next"});(0,NE.canGoNext)(this.props)||(i["slick-disabled"]=!0,o=null);var s={key:"1","data-role":"none",className:(0,$v.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},c;return this.props.nextArrow?c=Wr.default.cloneElement(this.props.nextArrow,za(za({},s),a)):c=Wr.default.createElement("button",Ra({key:"1",type:"button"},s)," ","Next"),c}}]),n}(Wr.default.PureComponent);ui.NextArrow=_E;var Fv=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var s=o[i];n.call(r,s[1],s[0])}},t}()}(),Fd=typeof window<"u"&&typeof document<"u"&&window.document===document,Ba=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),UE=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Ba):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),WE=2;function HE(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&a()}function s(){UE(o)}function a(){var c=Date.now();if(n){if(c-i<WE)return;r=!0}else n=!0,r=!1,setTimeout(s,t);i=c}return a}var VE=20,QE=["top","right","bottom","left","width","height","size","weight"],GE=typeof MutationObserver<"u",qE=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=HE(this.refresh.bind(this),VE)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!Fd||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),GE?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!Fd||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=QE.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),Dv=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},di=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||Ba},Mv=Gl(0,0,0,0);function Ia(e){return parseFloat(e)||0}function Hm(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var o=e["border-"+i+"-width"];return r+Ia(o)},0)}function KE(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var o=i[r],s=e["padding-"+o];n[o]=Ia(s)}return n}function YE(e){var t=e.getBBox();return Gl(0,0,t.width,t.height)}function JE(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return Mv;var r=di(e).getComputedStyle(e),i=KE(r),o=i.left+i.right,s=i.top+i.bottom,a=Ia(r.width),c=Ia(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+o)!==t&&(a-=Hm(r,"left","right")+o),Math.round(c+s)!==n&&(c-=Hm(r,"top","bottom")+s)),!ZE(e)){var u=Math.round(a+o)-t,d=Math.round(c+s)-n;Math.abs(u)!==1&&(a-=u),Math.abs(d)!==1&&(c-=d)}return Gl(i.left,i.top,a,c)}var XE=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof di(e).SVGGraphicsElement}:function(e){return e instanceof di(e).SVGElement&&typeof e.getBBox=="function"}}();function ZE(e){return e===di(e).document.documentElement}function eT(e){return Fd?XE(e)?YE(e):JE(e):Mv}function tT(e){var t=e.x,n=e.y,r=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,s=Object.create(o.prototype);return Dv(s,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),s}function Gl(e,t,n,r){return{x:e,y:t,width:n,height:r}}var nT=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Gl(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=eT(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),rT=function(){function e(t,n){var r=tT(n);Dv(this,{target:t,contentRect:r})}return e}(),iT=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new Fv,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof di(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new nT(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof di(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new rT(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),_v=typeof WeakMap<"u"?new WeakMap:new Fv,Uv=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=qE.getInstance(),r=new iT(t,n,this);_v.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){Uv.prototype[e]=function(){var t;return(t=_v.get(this))[e].apply(t,arguments)}});var oT=function(){return typeof Ba.ResizeObserver<"u"?Ba.ResizeObserver:Uv}();const sT=Object.freeze(Object.defineProperty({__proto__:null,default:oT},Symbol.toStringTag,{value:"Module"})),aT=aw(sT);Object.defineProperty(Ul,"__esModule",{value:!0});Ul.InnerSlider=void 0;var Je=Fo(b),lT=Fo(vv),cT=Fo(eE),uT=Fo(Wl),xe=M,dT=Vl,fT=Ql,Vm=ui,pT=Fo(aT);function Fo(e){return e&&e.__esModule?e:{default:e}}function Fa(e){"@babel/helpers - typeof";return Fa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Fa(e)}function Da(){return Da=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Da.apply(this,arguments)}function hT(e,t){if(e==null)return{};var n=mT(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function mT(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Qm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Qm(Object(n),!0).forEach(function(r){X(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function gT(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Gm(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function xT(e,t,n){return t&&Gm(e.prototype,t),n&&Gm(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function yT(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Dd(e,t)}function Dd(e,t){return Dd=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Dd(e,t)}function vT(e){var t=bT();return function(){var r=Ma(e),i;if(t){var o=Ma(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return wT(this,i)}}function wT(e,t){if(t&&(Fa(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return J(e)}function J(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function bT(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ma(e){return Ma=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Ma(e)}function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ST=function(e){yT(n,e);var t=vT(n);function n(r){var i;gT(this,n),i=t.call(this,r),X(J(i),"listRefHandler",function(s){return i.list=s}),X(J(i),"trackRefHandler",function(s){return i.track=s}),X(J(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var s=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,xe.getHeight)(s)+"px"}}),X(J(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var s=(0,xe.getOnDemandLazySlides)(Q(Q({},i.props),i.state));s.length>0&&(i.setState(function(c){return{lazyLoadedList:c.lazyLoadedList.concat(s)}}),i.props.onLazyLoad&&i.props.onLazyLoad(s))}var a=Q({listRef:i.list,trackRef:i.track},i.props);i.updateState(a,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new pT.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(c){c.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,c.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),X(J(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(s){return clearTimeout(s)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),X(J(i),"componentDidUpdate",function(s){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var a=(0,xe.getOnDemandLazySlides)(Q(Q({},i.props),i.state));a.length>0&&(i.setState(function(d){return{lazyLoadedList:d.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}i.adaptHeight();var c=Q(Q({listRef:i.list,trackRef:i.track},i.props),i.state),u=i.didPropsChange(s);u&&i.updateState(c,u,function(){i.state.currentSlide>=Je.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:Je.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),X(J(i),"onWindowResized",function(s){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,cT.default)(function(){return i.resizeWindow(s)},50),i.debouncedResize()}),X(J(i),"resizeWindow",function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,a=!!(i.track&&i.track.node);if(a){var c=Q(Q({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(c,s,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),X(J(i),"updateState",function(s,a,c){var u=(0,xe.initializedState)(s);s=Q(Q(Q({},s),u),{},{slideIndex:u.currentSlide});var d=(0,xe.getTrackLeft)(s);s=Q(Q({},s),{},{left:d});var h=(0,xe.getTrackCSS)(s);(a||Je.default.Children.count(i.props.children)!==Je.default.Children.count(s.children))&&(u.trackStyle=h),i.setState(u,c)}),X(J(i),"ssrInit",function(){if(i.props.variableWidth){var s=0,a=0,c=[],u=(0,xe.getPreClones)(Q(Q(Q({},i.props),i.state),{},{slideCount:i.props.children.length})),d=(0,xe.getPostClones)(Q(Q(Q({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(j){c.push(j.props.style.width),s+=j.props.style.width});for(var h=0;h<u;h++)a+=c[c.length-1-h],s+=c[c.length-1-h];for(var p=0;p<d;p++)s+=c[p];for(var y=0;y<i.state.currentSlide;y++)a+=c[y];var x={width:s+"px",left:-a+"px"};if(i.props.centerMode){var v="".concat(c[i.state.currentSlide],"px");x.left="calc(".concat(x.left," + (100% - ").concat(v,") / 2 ) ")}return{trackStyle:x}}var S=Je.default.Children.count(i.props.children),g=Q(Q(Q({},i.props),i.state),{},{slideCount:S}),m=(0,xe.getPreClones)(g)+(0,xe.getPostClones)(g)+S,w=100/i.props.slidesToShow*m,k=100/m,A=-k*((0,xe.getPreClones)(g)+i.state.currentSlide)*w/100;i.props.centerMode&&(A+=(100-k*w/100)/2);var C={width:w+"%",left:A+"%"};return{slideWidth:k+"%",trackStyle:C}}),X(J(i),"checkImagesLoad",function(){var s=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],a=s.length,c=0;Array.prototype.forEach.call(s,function(u){var d=function(){return++c&&c>=a&&i.onWindowResized()};if(!u.onclick)u.onclick=function(){return u.parentNode.focus()};else{var h=u.onclick;u.onclick=function(){h(),u.parentNode.focus()}}u.onload||(i.props.lazyLoad?u.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(u.onload=d,u.onerror=function(){d(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),X(J(i),"progressiveLazyLoad",function(){for(var s=[],a=Q(Q({},i.props),i.state),c=i.state.currentSlide;c<i.state.slideCount+(0,xe.getPostClones)(a);c++)if(i.state.lazyLoadedList.indexOf(c)<0){s.push(c);break}for(var u=i.state.currentSlide-1;u>=-(0,xe.getPreClones)(a);u--)if(i.state.lazyLoadedList.indexOf(u)<0){s.push(u);break}s.length>0?(i.setState(function(d){return{lazyLoadedList:d.lazyLoadedList.concat(s)}}),i.props.onLazyLoad&&i.props.onLazyLoad(s)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),X(J(i),"slideHandler",function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=i.props,u=c.asNavFor,d=c.beforeChange,h=c.onLazyLoad,p=c.speed,y=c.afterChange,x=i.state.currentSlide,v=(0,xe.slideHandler)(Q(Q(Q({index:s},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!a})),S=v.state,g=v.nextState;if(S){d&&d(x,S.currentSlide);var m=S.lazyLoadedList.filter(function(w){return i.state.lazyLoadedList.indexOf(w)<0});h&&m.length>0&&h(m),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),y&&y(x),delete i.animationEndCallback),i.setState(S,function(){u&&i.asNavForIndex!==s&&(i.asNavForIndex=s,u.innerSlider.slideHandler(s)),g&&(i.animationEndCallback=setTimeout(function(){var w=g.animating,k=hT(g,["animating"]);i.setState(k,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:w})},10)),y&&y(S.currentSlide),delete i.animationEndCallback})},p))})}}),X(J(i),"changeSlide",function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=Q(Q({},i.props),i.state),u=(0,xe.changeSlide)(c,s);if(!(u!==0&&!u)&&(a===!0?i.slideHandler(u,a):i.slideHandler(u),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var d=i.list.querySelectorAll(".slick-current");d[0]&&d[0].focus()}}),X(J(i),"clickHandler",function(s){i.clickable===!1&&(s.stopPropagation(),s.preventDefault()),i.clickable=!0}),X(J(i),"keyHandler",function(s){var a=(0,xe.keyHandler)(s,i.props.accessibility,i.props.rtl);a!==""&&i.changeSlide({message:a})}),X(J(i),"selectHandler",function(s){i.changeSlide(s)}),X(J(i),"disableBodyScroll",function(){var s=function(c){c=c||window.event,c.preventDefault&&c.preventDefault(),c.returnValue=!1};window.ontouchmove=s}),X(J(i),"enableBodyScroll",function(){window.ontouchmove=null}),X(J(i),"swipeStart",function(s){i.props.verticalSwiping&&i.disableBodyScroll();var a=(0,xe.swipeStart)(s,i.props.swipe,i.props.draggable);a!==""&&i.setState(a)}),X(J(i),"swipeMove",function(s){var a=(0,xe.swipeMove)(s,Q(Q(Q({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));a&&(a.swiping&&(i.clickable=!1),i.setState(a))}),X(J(i),"swipeEnd",function(s){var a=(0,xe.swipeEnd)(s,Q(Q(Q({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(a){var c=a.triggerSlideHandler;delete a.triggerSlideHandler,i.setState(a),c!==void 0&&(i.slideHandler(c),i.props.verticalSwiping&&i.enableBodyScroll())}}),X(J(i),"touchEnd",function(s){i.swipeEnd(s),i.clickable=!0}),X(J(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),X(J(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),X(J(i),"slickGoTo",function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(s=Number(s),isNaN(s))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:s,currentSlide:i.state.currentSlide},a)},0))}),X(J(i),"play",function(){var s;if(i.props.rtl)s=i.state.currentSlide-i.props.slidesToScroll;else if((0,xe.canGoNext)(Q(Q({},i.props),i.state)))s=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(s)}),X(J(i),"autoPlay",function(s){i.autoplayTimer&&clearInterval(i.autoplayTimer);var a=i.state.autoplaying;if(s==="update"){if(a==="hovered"||a==="focused"||a==="paused")return}else if(s==="leave"){if(a==="paused"||a==="focused")return}else if(s==="blur"&&(a==="paused"||a==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),X(J(i),"pause",function(s){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var a=i.state.autoplaying;s==="paused"?i.setState({autoplaying:"paused"}):s==="focused"?(a==="hovered"||a==="playing")&&i.setState({autoplaying:"focused"}):a==="playing"&&i.setState({autoplaying:"hovered"})}),X(J(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),X(J(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),X(J(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),X(J(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),X(J(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),X(J(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),X(J(i),"render",function(){var s=(0,uT.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),a=Q(Q({},i.props),i.state),c=(0,xe.extractObject)(a,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),u=i.props.pauseOnHover;c=Q(Q({},c),{},{onMouseEnter:u?i.onTrackOver:null,onMouseLeave:u?i.onTrackLeave:null,onMouseOver:u?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var d;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var h=(0,xe.extractObject)(a,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),p=i.props.pauseOnDotsHover;h=Q(Q({},h),{},{clickHandler:i.changeSlide,onMouseEnter:p?i.onDotsLeave:null,onMouseOver:p?i.onDotsOver:null,onMouseLeave:p?i.onDotsLeave:null}),d=Je.default.createElement(fT.Dots,h)}var y,x,v=(0,xe.extractObject)(a,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);v.clickHandler=i.changeSlide,i.props.arrows&&(y=Je.default.createElement(Vm.PrevArrow,v),x=Je.default.createElement(Vm.NextArrow,v));var S=null;i.props.vertical&&(S={height:i.state.listHeight});var g=null;i.props.vertical===!1?i.props.centerMode===!0&&(g={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(g={padding:i.props.centerPadding+" 0px"});var m=Q(Q({},S),g),w=i.props.touchMove,k={className:"slick-list",style:m,onClick:i.clickHandler,onMouseDown:w?i.swipeStart:null,onMouseMove:i.state.dragging&&w?i.swipeMove:null,onMouseUp:w?i.swipeEnd:null,onMouseLeave:i.state.dragging&&w?i.swipeEnd:null,onTouchStart:w?i.swipeStart:null,onTouchMove:i.state.dragging&&w?i.swipeMove:null,onTouchEnd:w?i.touchEnd:null,onTouchCancel:i.state.dragging&&w?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},A={className:s,dir:"ltr",style:i.props.style};return i.props.unslick&&(k={className:"slick-list"},A={className:s}),Je.default.createElement("div",A,i.props.unslick?"":y,Je.default.createElement("div",Da({ref:i.listRefHandler},k),Je.default.createElement(dT.Track,Da({ref:i.trackRefHandler},c),i.props.children)),i.props.unslick?"":x,i.props.unslick?"":d)}),i.list=null,i.track=null,i.state=Q(Q({},lT.default),{},{currentSlide:i.props.initialSlide,slideCount:Je.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var o=i.ssrInit();return i.state=Q(Q({},i.state),o),i}return xT(n,[{key:"didPropsChange",value:function(i){for(var o=!1,s=0,a=Object.keys(this.props);s<a.length;s++){var c=a[s];if(!i.hasOwnProperty(c)){o=!0;break}if(!(Fa(i[c])==="object"||typeof i[c]=="function")&&i[c]!==this.props[c]){o=!0;break}}return o||Je.default.Children.count(this.props.children)!==Je.default.Children.count(i.children)}}]),n}(Je.default.Component);Ul.InnerSlider=ST;var kT=function(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()},AT=kT,CT=AT,jT=function(e){var t=/[height|width]$/;return t.test(e)},qm=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,i){var o=e[r];r=CT(r),jT(r)&&typeof o=="number"&&(o=o+"px"),o===!0?t+=r:o===!1?t+="not "+r:t+="("+r+": "+o+")",i<n.length-1&&(t+=" and ")}),t},ET=function(e){var t="";return typeof e=="string"?e:e instanceof Array?(e.forEach(function(n,r){t+=qm(n),r<e.length-1&&(t+=", ")}),t):qm(e)},TT=ET,Wv={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(b);function n(o){return o&&o.__esModule?o:{default:o}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(s){return t.default.createElement("ul",{style:{display:"block"}},s)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(s){return t.default.createElement("button",null,s+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},i=r;e.default=i})(Wv);var Qc,Km;function LT(){if(Km)return Qc;Km=1;function e(t){this.options=t,!t.deferSetup&&this.setup()}return e.prototype={constructor:e,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},Qc=e,Qc}var Gc,Ym;function Hv(){if(Ym)return Gc;Ym=1;function e(r,i){var o=0,s=r.length,a;for(o;o<s&&(a=i(r[o],o),a!==!1);o++);}function t(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return Gc={isFunction:n,isArray:t,each:e},Gc}var qc,Jm;function OT(){if(Jm)return qc;Jm=1;var e=LT(),t=Hv().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var o=this;this.listener=function(s){o.mql=s.currentTarget||s,o.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new e(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;t(i,function(o,s){if(o.equals(r))return o.destroy(),!i.splice(s,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){t(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";t(this.handlers,function(i){i[r]()})}},qc=n,qc}var Kc,Xm;function PT(){if(Xm)return Kc;Xm=1;var e=OT(),t=Hv(),n=t.each,r=t.isFunction,i=t.isArray;function o(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return o.prototype={constructor:o,register:function(s,a,c){var u=this.queries,d=c&&this.browserIsIncapable;return u[s]||(u[s]=new e(s,d)),r(a)&&(a={match:a}),i(a)||(a=[a]),n(a,function(h){r(h)&&(h={match:h}),u[s].addHandler(h)}),this},unregister:function(s,a){var c=this.queries[s];return c&&(a?c.removeHandler(a):(c.clear(),delete this.queries[s])),this}},Kc=o,Kc}var Yc,Zm;function $T(){if(Zm)return Yc;Zm=1;var e=PT();return Yc=new e,Yc}(function(e){function t(T){"@babel/helpers - typeof";return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(L){return typeof L}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L},t(T)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(b),r=Ul,i=a(TT),o=a(Wv),s=M;function a(T){return T&&T.__esModule?T:{default:T}}function c(){return c=Object.assign||function(T){for(var L=1;L<arguments.length;L++){var O=arguments[L];for(var P in O)Object.prototype.hasOwnProperty.call(O,P)&&(T[P]=O[P])}return T},c.apply(this,arguments)}function u(T,L){var O=Object.keys(T);if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(T);L&&(P=P.filter(function(N){return Object.getOwnPropertyDescriptor(T,N).enumerable})),O.push.apply(O,P)}return O}function d(T){for(var L=1;L<arguments.length;L++){var O=arguments[L]!=null?arguments[L]:{};L%2?u(Object(O),!0).forEach(function(P){A(T,P,O[P])}):Object.getOwnPropertyDescriptors?Object.defineProperties(T,Object.getOwnPropertyDescriptors(O)):u(Object(O)).forEach(function(P){Object.defineProperty(T,P,Object.getOwnPropertyDescriptor(O,P))})}return T}function h(T,L){if(!(T instanceof L))throw new TypeError("Cannot call a class as a function")}function p(T,L){for(var O=0;O<L.length;O++){var P=L[O];P.enumerable=P.enumerable||!1,P.configurable=!0,"value"in P&&(P.writable=!0),Object.defineProperty(T,P.key,P)}}function y(T,L,O){return L&&p(T.prototype,L),O&&p(T,O),Object.defineProperty(T,"prototype",{writable:!1}),T}function x(T,L){if(typeof L!="function"&&L!==null)throw new TypeError("Super expression must either be null or a function");T.prototype=Object.create(L&&L.prototype,{constructor:{value:T,writable:!0,configurable:!0}}),Object.defineProperty(T,"prototype",{writable:!1}),L&&v(T,L)}function v(T,L){return v=Object.setPrototypeOf||function(P,N){return P.__proto__=N,P},v(T,L)}function S(T){var L=w();return function(){var P=k(T),N;if(L){var B=k(this).constructor;N=Reflect.construct(P,arguments,B)}else N=P.apply(this,arguments);return g(this,N)}}function g(T,L){if(L&&(t(L)==="object"||typeof L=="function"))return L;if(L!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return m(T)}function m(T){if(T===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return T}function w(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function k(T){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(O){return O.__proto__||Object.getPrototypeOf(O)},k(T)}function A(T,L,O){return L in T?Object.defineProperty(T,L,{value:O,enumerable:!0,configurable:!0,writable:!0}):T[L]=O,T}var C=(0,s.canUseDOM)()&&$T(),j=function(T){x(O,T);var L=S(O);function O(P){var N;return h(this,O),N=L.call(this,P),A(m(N),"innerSliderRefHandler",function(B){return N.innerSlider=B}),A(m(N),"slickPrev",function(){return N.innerSlider.slickPrev()}),A(m(N),"slickNext",function(){return N.innerSlider.slickNext()}),A(m(N),"slickGoTo",function(B){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return N.innerSlider.slickGoTo(B,D)}),A(m(N),"slickPause",function(){return N.innerSlider.pause("paused")}),A(m(N),"slickPlay",function(){return N.innerSlider.autoPlay("play")}),N.state={breakpoint:null},N._responsiveMediaHandlers=[],N}return y(O,[{key:"media",value:function(N,B){C.register(N,B),this._responsiveMediaHandlers.push({query:N,handler:B})}},{key:"componentDidMount",value:function(){var N=this;if(this.props.responsive){var B=this.props.responsive.map(function(U){return U.breakpoint});B.sort(function(U,H){return U-H}),B.forEach(function(U,H){var $;H===0?$=(0,i.default)({minWidth:0,maxWidth:U}):$=(0,i.default)({minWidth:B[H-1]+1,maxWidth:U}),(0,s.canUseDOM)()&&N.media($,function(){N.setState({breakpoint:U})})});var D=(0,i.default)({minWidth:B.slice(-1)[0]});(0,s.canUseDOM)()&&this.media(D,function(){N.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(N){C.unregister(N.query,N.handler)})}},{key:"render",value:function(){var N=this,B,D;this.state.breakpoint?(D=this.props.responsive.filter(function(be){return be.breakpoint===N.state.breakpoint}),B=D[0].settings==="unslick"?"unslick":d(d(d({},o.default),this.props),D[0].settings)):B=d(d({},o.default),this.props),B.centerMode&&(B.slidesToScroll>1,B.slidesToScroll=1),B.fade&&(B.slidesToShow>1,B.slidesToScroll>1,B.slidesToShow=1,B.slidesToScroll=1);var U=n.default.Children.toArray(this.props.children);U=U.filter(function(be){return typeof be=="string"?!!be.trim():!!be}),B.variableWidth&&(B.rows>1||B.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),B.variableWidth=!1);for(var H=[],$=null,E=0;E<U.length;E+=B.rows*B.slidesPerRow){for(var I=[],z=E;z<E+B.rows*B.slidesPerRow;z+=B.slidesPerRow){for(var V=[],G=z;G<z+B.slidesPerRow&&(B.variableWidth&&U[G].props.style&&($=U[G].props.style.width),!(G>=U.length));G+=1)V.push(n.default.cloneElement(U[G],{key:100*E+10*z+G,tabIndex:-1,style:{width:"".concat(100/B.slidesPerRow,"%"),display:"inline-block"}}));I.push(n.default.createElement("div",{key:10*E+z},V))}B.variableWidth?H.push(n.default.createElement("div",{key:E,style:{width:$}},I)):H.push(n.default.createElement("div",{key:E},I))}if(B==="unslick"){var ge="regular slider "+(this.props.className||"");return n.default.createElement("div",{className:ge},U)}else H.length<=B.slidesToShow&&(B.unslick=!0);return n.default.createElement(r.InnerSlider,c({style:this.props.style,ref:this.innerSliderRefHandler},B),H)}}]),O}(n.default.Component);e.default=j})(yv);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(yv);function n(i){return i&&i.__esModule?i:{default:i}}var r=t.default;e.default=r})(xv);const RT=Fg(xv);function zT(){if(console&&console.warn){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&(t[0]=`react-i18next:: ${t[0]}`),console.warn(...t)}}const eg={};function Md(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&eg[t[0]]||(typeof t[0]=="string"&&(eg[t[0]]=new Date),zT(...t))}const Vv=(e,t)=>()=>{if(e.isInitialized)t();else{const n=()=>{setTimeout(()=>{e.off("initialized",n)},0),t()};e.on("initialized",n)}};function tg(e,t,n){e.loadNamespaces(t,Vv(e,n))}function ng(e,t,n,r){typeof n=="string"&&(n=[n]),n.forEach(i=>{e.options.ns.indexOf(i)<0&&e.options.ns.push(i)}),e.loadLanguages(t,Vv(e,r))}function NT(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=t.languages[0],i=t.options?t.options.fallbackLng:!1,o=t.languages[t.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const s=(a,c)=>{const u=t.services.backendConnector.state[`${a}|${c}`];return u===-1||u===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!s(t.isLanguageChangingTo,e)?!1:!!(t.hasResourceBundle(r,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||s(r,e)&&(!i||s(o,e)))}function BT(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!t.languages||!t.languages.length?(Md("i18n.languages were undefined or empty",t.languages),!0):t.options.ignoreJSONStructure!==void 0?t.hasLoadedNamespace(e,{lng:n.lng,precheck:(i,o)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!o(i.isLanguageChangingTo,e))return!1}}):NT(e,t,n)}const IT=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,FT={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},DT=e=>FT[e],MT=e=>e.replace(IT,DT);let _d={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:MT};function _T(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};_d={..._d,...e}}function UT(){return _d}let Qv;function WT(e){Qv=e}function HT(){return Qv}const VT={type:"3rdParty",init(e){_T(e.options.react),WT(e)}},Gv=b.createContext();class QT{constructor(){this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const GT=(e,t)=>{const n=b.useRef();return b.useEffect(()=>{n.current=t?n.current:e},[e,t]),n.current};function q(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:n}=t,{i18n:r,defaultNS:i}=b.useContext(Gv)||{},o=n||r||HT();if(o&&!o.reportNamespaces&&(o.reportNamespaces=new QT),!o){Md("You will need to pass in an i18next instance by using initReactI18next");const w=(A,C)=>typeof C=="string"?C:C&&typeof C=="object"&&typeof C.defaultValue=="string"?C.defaultValue:Array.isArray(A)?A[A.length-1]:A,k=[w,{},!1];return k.t=w,k.i18n={},k.ready=!1,k}o.options.react&&o.options.react.wait!==void 0&&Md("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const s={...UT(),...o.options.react,...t},{useSuspense:a,keyPrefix:c}=s;let u=e||i||o.options&&o.options.defaultNS;u=typeof u=="string"?[u]:u||["translation"],o.reportNamespaces.addUsedNamespaces&&o.reportNamespaces.addUsedNamespaces(u);const d=(o.isInitialized||o.initializedStoreOnce)&&u.every(w=>BT(w,o,s));function h(){return o.getFixedT(t.lng||null,s.nsMode==="fallback"?u:u[0],c)}const[p,y]=b.useState(h);let x=u.join();t.lng&&(x=`${t.lng}${x}`);const v=GT(x),S=b.useRef(!0);b.useEffect(()=>{const{bindI18n:w,bindI18nStore:k}=s;S.current=!0,!d&&!a&&(t.lng?ng(o,t.lng,u,()=>{S.current&&y(h)}):tg(o,u,()=>{S.current&&y(h)})),d&&v&&v!==x&&S.current&&y(h);function A(){S.current&&y(h)}return w&&o&&o.on(w,A),k&&o&&o.store.on(k,A),()=>{S.current=!1,w&&o&&w.split(" ").forEach(C=>o.off(C,A)),k&&o&&k.split(" ").forEach(C=>o.store.off(C,A))}},[o,x]);const g=b.useRef(!0);b.useEffect(()=>{S.current&&!g.current&&y(h),g.current=!1},[o,c]);const m=[p,o,d];if(m.t=p,m.i18n=o,m.ready=d,d||!d&&!a)return m;throw new Promise(w=>{t.lng?ng(o,t.lng,u,()=>w()):tg(o,u,()=>w())})}function qT(e){let{i18n:t,defaultNS:n,children:r}=e;const i=b.useMemo(()=>({i18n:t,defaultNS:n}),[t,n]);return b.createElement(Gv.Provider,{value:i},r)}const KT=dt`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`,YT=({books:e})=>{const{t}=q(),n=()=>{const i=window.innerWidth;return i>=1200?5:i>=992?4:i>=768?3:1},r={dots:!0,infinite:!0,speed:500,slidesToShow:n(),slidesToScroll:1,responsive:[{breakpoint:1200,settings:{slidesToShow:n()}},{breakpoint:992,settings:{slidesToShow:n()}},{breakpoint:768,settings:{slidesToShow:n()}},{breakpoint:0,settings:{slidesToShow:1}}]};return l.jsx(RT,{...r,children:e.map(i=>l.jsxs(JT,{children:[l.jsx(XT,{src:i.poster,alt:i.title}),l.jsx(Ee,{to:`books/${i._id}`,children:l.jsx(qv,{children:t("Lire Extrait")})})]},i._id))})},qv=f.span`
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
  animation: ${KT} 0.3s ease-in-out;
`,JT=f.div`
  width: 100%;
  max-width: 12rem;
  height: 18rem;
  margin: 0 2rem;

  position: relative;
  padding: 0;
  &:hover {
    cursor: pointer;
    ${qv} {
      display: block;
      /* transform: translateY(0); */
    }
  }
`,XT=f.img`
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
`;f(Ee)`
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
`;const ZT=dt`
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
`,eL=dt`
  from {
    stroke-dashoffset: 358;
  }
  50% {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: -358;
  }
`,tL=f.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  padding: 1.5em 0;
`,nL=f.svg`
  width: 16em;
  height: 8em;
`,rL=f.g`
  stroke: hsl(var(--hue), 90%, 90%);
  transition: stroke var(--trans-dur);
`,iL=f.path`
  animation: ${ZT} 2s linear infinite;
`,oL=f.path`
  animation: ${eL} 2s linear infinite;
`,Be=()=>l.jsx(tL,{children:l.jsxs(nL,{className:"ip",viewBox:"0 0 256 128",width:"256px",height:"128px",xmlns:"http://www.w3.org/2000/svg",children:[l.jsxs("defs",{children:[l.jsxs("linearGradient",{id:"grad1",x1:"0",y1:"0",x2:"1",y2:"0",children:[l.jsx("stop",{offset:"0%",stopColor:"#FFFFFF"}),l.jsx("stop",{offset:"33%",stopColor:"#0055A4"}),l.jsx("stop",{offset:"67%",stopColor:"#EF4135"}),l.jsx("stop",{offset:"100%",stopColor:"#FFFFFF"})]}),l.jsxs("linearGradient",{id:"grad2",x1:"1",y1:"0",x2:"0",y2:"0",children:[l.jsx("stop",{offset:"0%",stopColor:"#FFFFFF"}),l.jsx("stop",{offset:"33%",stopColor:"#EF4135"}),l.jsx("stop",{offset:"67%",stopColor:"#0055A4"}),l.jsx("stop",{offset:"100%",stopColor:"#FFFFFF"})]})]}),l.jsxs("g",{fill:"none",strokeLinecap:"round",strokeWidth:"16",children:[l.jsxs(rL,{className:"ip__track",stroke:"#ddd",children:[l.jsx("path",{d:"M8,64s0-56,60-56,60,112,120,112,60-56,60-56"}),l.jsx("path",{d:"M248,64s0-56-60-56-60,112-120,112S8,64,8,64"})]}),l.jsxs("g",{strokeDasharray:"180 656",children:[l.jsx(iL,{className:"ip__worm1",stroke:"url(#grad1)",strokeDashoffset:"0",d:"M8,64s0-56,60-56,60,112,120,112,60-56,60-56"}),l.jsx(oL,{className:"ip__worm2",stroke:"url(#grad2)",strokeDashoffset:"358",d:"M248,64s0-56-60-56-60,112-120,112S8,64,8,64"})]})]})]})}),sL=dt`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`,aL=f.span`
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
  animation: ${sL} 0.3s ease-in-out;
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
    ${aL} {
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
`;const Hr=ae("quizData/fetchQuizData",async e=>{try{return(await le.get(`/quiz-topic/${e}`)).data}catch(t){throw console.log(t),Error("Failed to fetch words")}}),Vr=ae("quizData/fetchTopicNames",async()=>{try{return(await le.get("/quiz-topic-names")).data}catch(e){throw console.log(e),Error("Failed to fetch words")}}),Rs=ae("selectedVerbDetails/fetchVerbDetails",async e=>{try{return(await le.get(`/get-verb-details/${e}`)).data}catch(t){throw console.log(t),Error("Failed to fetch verb details")}}),lL={selectedVerbDetails:[],currentTopic:[],topicNames:[],isLoading:!1,error:null},cL=Pe({name:"quizData",initialState:lL,reducers:{},extraReducers:e=>{e.addCase(Hr.pending,t=>{t.isLoading=!0}).addCase(Hr.fulfilled,(t,n)=>{t.currentTopic=n.payload,t.isLoading=!1}).addCase(Hr.rejected,(t,n)=>{t.error=n.error.message}).addCase(Vr.pending,t=>{t.isLoading=!0}).addCase(Vr.fulfilled,(t,n)=>{t.topicNames=n.payload,t.isLoading=!1}).addCase(Vr.rejected,(t,n)=>{t.error=n.error.message}).addCase(Rs.pending,t=>{t.isLoading=!0}).addCase(Rs.fulfilled,(t,n)=>{t.selectedVerbDetails=n.payload,t.isLoading=!1}).addCase(Rs.rejected,(t,n)=>{t.error=n.error.message})}}),uL=cL.reducer,bp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAlklEQVR4nO2PvQ2DMBBG3wopXIZhKKAhJdOQsAcjwC4oSyRIYQkjJBeWZV/4iVLdk677vrt3oCjK38mAO1Ac6JZAA1yl0BOwbnrAbFi8ZgavN0rhtxdcZwZqIV+7jN95SQdy4BMUrDM0grUvlO992QbfxKxjEl+pgCmyKHX4EBegE5bvtk5xC745ZZ3CAC3w+JW1orCJBcEfQjhF/QEaAAAAAElFTkSuQmCC",dL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACR0lEQVR4nO2XPWgUQRTHX0juvc0XCiIigopooYWFWIhWVoKgIIh1KltLW8u0KQPaiIWk0U7lovPmkkYJREFPsNAiBAsRNYVEov5lN1+3Md7tzcyuF5gfvG7Z9/vP7MzOEEUikUgkEukhYPku5miIegwYSmB5svODVgArTTT4BPUIUD4GlZepW9EAgMoStHatEsM2QPkyrHxZ9yoeYKN4Eq+JqWJgaABWxqHyu9XHIUBWL2DkcCXmRITpwQNQnt3OxTVAOhOfYOVC6fIq52H54788PAJk6yKdznFMUX9wcVAflG/Cys92Dn4BNmfjGaaH9wWTr4/ugeVHRXoHCpCFWIBNznrLm4HTsPyhaN+AAbJayaYd1Ockr3IdKj+66Rk6wPraeAhDuwuLz9IoVO679ConwGq9Q6N2svOo83GovHHtQwUCNJ1DqHyHlbE27x5be8Z1kJqdAxgacZ3ezcofCFcPYjLh9U6VB6jTro4BfBbYlpqHkaN4mhzK/uTu71lx3ijQSM5BedGj+de1chx1XkwduhbPhxjZC8t1v0/KSd7CDu33kt8IMUX9sHILKr/KF5f0uDKBOaoFkc8FUb7UejYvQX4JDb4aXDwXIl2YKq9KCPA2/UeUKr/lfnon4Pd+D09ouBL5v7ZaK8se8stQvlG5eC6ErZ2C8vvu5XkBZvAM9QLZeV75cRfyJuR9IuyNqt1WW+KNLhhQvgiVz9vIf4PyFdoJYCY5CJXnLQHmMSNHaCeBdKtVvp2VoeR/+0QikUgkEqES+AOFhOtBfI7NdwAAAABJRU5ErkJggg==",Kv=({isActive:e,onClick:t})=>{const r=gi()===pl?dL:bp;return l.jsx(fL,{src:r,alt:"chevron",rotation:e?180:0,onClick:t})},fL=f.img`
  width: 24px;
  height: 24px;
  transition: transform 0.5s ease;
  margin-left: 1rem;

  transform: ${({rotation:e})=>`rotate(${e}deg)`};
  cursor: pointer;
`,Yv=({topic:e,selectedCategory:t,onCategoryChange:n})=>(console.log("selectedCategory in CategoryDropdown",t),l.jsx(pL,{children:l.jsx(hL,{children:l.jsx(mL,{value:t,onChange:n,children:e.map((r,i)=>l.jsx("option",{value:r,children:r},i))})})})),pL=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
`,hL=f.div`
  position: relative;
`,mL=f.select`
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
`,gL=dt`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
`,xL=dt`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`,yL=dt`
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
`,vL=dt`
  0% {
    background-position: 0 0;
  }

  50% {
    background-position: 400% 0;
  }

  100% {
    background-position: 0 0;
  }
`,wL=dt`
0% {
  transform: translateY(100%);
  opacity: 0;
}
100% {
  transform: translateY(0);
  opacity: 1;
}
`,bL=zk`
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


`,SL=f.div`
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
`,Jv=f(qe)`
  width: 12rem;
  background: ${e=>e.theme.primaryBackground};
  color: ${e=>e.theme.primaryText};
  &:hover {
    background: ${e=>e.theme.primaryText};
    color: ${e=>e.theme.primaryBackground};
  }
`,kL=f.p`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0.4rem 0.8rem;
  letter-spacing: 1.5px;
  font-size: 1.3rem;
`,ql=f.div`
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
`,AL=f.span`
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
`,Xv=f.div`
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
`,Zv=f.div`
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
`,e1=f.div`
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
`,t1=f.p`
  margin: 0 1.8rem;
  padding-right: 0;

  text-align: center;
`,Hn=f(Ee)`
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
`;const Sp=({definition:e,secondLanguage:t,index:n,secondLangButtonName:r,isMultipleDefinitions:i})=>{const[o,s]=b.useState(!0),a=()=>{s(!o)};return l.jsxs(CL,{children:[l.jsxs(jL,{children:[l.jsx(n1,{showDefinition:o,onClick:a,children:r}),l.jsx(TL,{showDefinition:o,onClick:a,children:"Fr"})]}),l.jsx(EL,{children:i?o?t[n]:e[n]:o?t:e})]})},CL=f.div`
  width: 100%;
`,jL=f.div`
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
`,EL=f.div`
  margin-left: 1rem;
  min-height: 3rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  color: ${e=>e.theme.secondaryText};
  font-size: ${e=>e.theme.small};

  font-style: italic;
`,n1=f.button`
  background-color: ${e=>e.showDefinition?e.theme.highlight4:e.theme.primaryBackground};
  color: ${e=>e.showDefinition?e.theme.primaryBackground:e.theme.primaryText};
`,TL=f(n1)`
  background-color: ${e=>e.showDefinition?e.theme.primaryBackground:e.theme.highlight4};
  color: ${e=>e.theme.primaryText};
`,LL=()=>{const e=ne(),t=_(D=>D.quizData.currentTopic.words)||[],n=_(D=>D.quizData.topicNames)||[],r=_(D=>D.quizData.isLoading),[i,o]=b.useState(0),[s,a]=b.useState(0),[c,u]=b.useState([]),[d,h]=b.useState(0),[p,y]=b.useState(0),[x,v]=b.useState(!1),[S,g]=b.useState(!1),m=n.map(D=>D.topic),[w,k]=b.useState(m[0]);b.useEffect(()=>{e(Vr())},[e]),b.useEffect(()=>{var U;const D=(U=n[i])==null?void 0:U._id;e(Hr(D))},[w,e,i,n]),b.useEffect(()=>{t.length>0&&(S||A())},[t,x,S]);const A=()=>{const D=t.map(U=>{const H=C(U.french);return{image:U.imageUrl,options:H,correctOption:U.french,definition:[U.definition],english:[U.english],georgian:[U.georgian],selectedOption:""}});u(D),g(!1)},C=D=>{const U=t.map($=>$.french),H=[];for(;H.length<3;){const $=Math.floor(Math.random()*U.length),E=U[$];E!==D&&!H.includes(E)&&H.push(E)}return H.push(D),H.sort(()=>Math.random()-.5),H},j=D=>{const U=D.target.value;k(U);const H=m.indexOf(U);o(H),h(0),a(0),v(!0),A()},T=D=>{x||v(!0);const U=c[s],H=[...c];H[s]={...U,selectedOption:D},D===U.correctOption&&h($=>$+1),u(H),setTimeout(()=>{a($=>$+1<c.length?$+1:0),y($=>$+1<c.length?$+1:0),s===c.length-1&&g(!0)},800)},L=()=>{h(0),a(0),y(0),v(!1),g(!1),u(c.map(D=>({...D,selectedOption:""})))},{t:O,i18n:P}=q(),N=P.language==="ka",B=N?"Geo":"Eng";return r?l.jsx(Be,{}):t?l.jsx(OL,{children:l.jsxs(rg,{children:[l.jsx(Yv,{topic:m,selectedCategory:w,onCategoryChange:j}),S?l.jsxs(NL,{children:[l.jsxs(BL,{children:["Your final score is:",l.jsxs(ig,{children:[d," / ",c.length]})]}),l.jsxs("div",{children:[l.jsx("p",{children:"Do you want to restart?"}),l.jsx(IL,{onClick:L,children:"Restart"})]}),l.jsx("p",{children:"You can choose another topic from the dropdown menu above"})]}):c.map((D,U)=>{if(U===p){const{image:H,correctOption:$,options:E,selectedOption:I,georgian:z,english:V,definition:G}=D;return l.jsxs(rg,{children:[H?l.jsx(RL,{children:l.jsx(PL,{src:H,alt:"Word Image",loading:"lazy"})}):l.jsx(zL,{children:l.jsx(Sp,{index:U,secondLangButtonName:B,french:D.options,definition:G,secondLanguage:N?z:V,isMultipleDefinitions:!1})}),E.map(ge=>l.jsx($L,{onClick:()=>T(ge),isSelected:I===ge,isCorrect:ge===$,children:ge},ge)),l.jsxs(ig,{children:["Score: ",d," / ",c.length]})]},U)}return null})]})}):l.jsx(Be,{})},OL=f.div`
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
`,rg=f.div`
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
`,PL=f.img`
  width: 100%;
  height: 100%;
`,$L=f.div`
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
`,ig=f.span`
  font-size: 1.5rem;
  font-weight: bold;
  display: center;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 4px solid white;
`,RL=f.div`
  display: flex;

  align-items: center;
  width: 350px;
  height: 250px;
  background: white;
  margin-bottom: 1rem;
`,zL=f.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 350px;
  height: 250px;
  font-size: 1.4rem;
  background-color: ${e=>e.theme.flagAddon};
  color: ${e=>e.theme.flagFirst};
`,NL=f.div`
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
`,BL=f.p`
  font-size: 1.4rem;
  font-weight: bold;
  span {
    border-bottom: 3px solid blue;
    padding-bottom: 0.2rem;
    margin-left: 0.5rem;
  }
`,IL=f(qe)`
  height: 3rem;
  font-size: 1.4rem;
  &:hover {
  }
`,Qr=ae("dictionary/fetchWordsByLanguage",async({language:e,query:t})=>{try{return(await le.get(`/words/${e}/${t}`)).data}catch(n){throw console.error(n),Error("Failed to fetch words")}}),FL={searchResults:[],isLoading:!1,error:null},DL=Pe({name:"dictionary",initialState:FL,reducers:{clearSearchResults:e=>{e.searchResults=[]}},extraReducers:e=>{e.addCase(Qr.pending,t=>{t.isLoading=!0}).addCase(Qr.fulfilled,(t,n)=>{t.searchResults=n.payload,t.isLoading=!1}).addCase(Qr.rejected,(t,n)=>{t.error=n.error.message,t.isLoading=!1})}}),ML=()=>({type:"dictionary/clearSearchResults"}),_L=DL.reducer,UL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAChklEQVR4nO2Zu24TQRSGPxeElgYbEVIYHoECCJdXQAIH+YKECA+AxEVESAl0wAsgUUEKpCiiIDFKDYGGS96AhhZSBZGQ2MFwpH+lKQxi8czYu+wnjbTy5f/3jPecOTOGgoKR5AAwDcwDa8A6sKPxBfig9y4DFUaQM0Ab6AC9vxz22WXgNCPAEWDFubku8Aq4BhwDysAeDbs+DlwHVvXZ5HsvgMPDCqIFfNWNfAPuAftTfN8Cuw9sSmMDaBCZOWc2F4DxAbQOAYuO3iyRuCvDH7ouedK9CuzGCqYlIzOsBdCfcoKpEzCxk5y4FcoEmHFyphrCYMXJiZCUnJxph1gneqowE4RnXJWwB5zyKdyWqJXYWFhpNs8ln21HRwtYmnViUGyd6aq9seuBuaKZeUl8Xsv7kg+xeYlZ2xGbG/J+7ENsTWLWO8VmUt7vfIitSyxmfiRU5P3Zh9i2xMaIz155f89LIBt5ebQ++kx22xTF5qS8rQznovw+8iE2LTHbnsbmjbzP+XpOkxbFS6uQskXpAPt8iS5rZqyRi8UDeVpL740TEt0aQht/1Ld425khX/v0fpj2M3k9D2FQ1cLU03Y0FLflYSeTB0OZNJzDBzso8M0F5/DhLIGZdYKZ8fSYlfRLJEHs6sSGWMEkOWOHbP/KhJMT7rDS2yQCdSdnNlWa06wzZZXYLacx7PYJpkEEqk41S4xX1VpMajEd06jotZvqndybXlBiN4cZDDqyWUr5t4JtD572aUZ/F0ydiJR1UPAEeK8Suq3F7RPwFniom/rTtqAxCsH4wsp7p08wF8lRMC0yyFSegqn9D8E0yWgwO0UwGSkAc2SU885jdoeMU4v5d3ZBwa8Z+Ak4rhMJLuUtjQAAAABJRU5ErkJggg==",WL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAiUlEQVR4nO2USwqAMAwF5xIpekQ9roKCHkYRIrjwk9QoLnzQXTJDQ1r489VUQHLUJ+0xpQYmoDVKktZO2nsZARpt6IHSUVtYb2GRSC7cIpG78DOJRMH3JAPQRcK3khW8nDESfiQ4266wEZWR8F7H4nknbvia2xLLKkquxLPnkiN5/LN7/Lv+825mVoNLX0YKeGwAAAAASUVORK5CYII=",_e=()=>{const[e,t]=b.useState([]);b.useEffect(()=>{window.speechSynthesis.getVoices().length===0&&window.speechSynthesis.addEventListener("voiceschanged",()=>{window.speechSynthesis.getVoices().length>0})},[]);const n=i=>o=>{o.stopPropagation();const s=i.split(" (")[0],a=e.findIndex(c=>c.word===i);t(a===-1?c=>[...c,{word:i,isActive:!0}]:c=>c.map((u,d)=>d===a?{...u,isActive:!0}:u)),setTimeout(()=>{t(c=>c.map(u=>({...u,isActive:!1})))},1500),r(s)},r=i=>{const o=new SpeechSynthesisUtterance(i);o.lang="fr-FR",window.speechSynthesis.speak(o)};return{handleListen:n,isActiveStates:e}},HL={favorites:JSON.parse(localStorage.getItem("favorites"))||[],isLoading:!1,error:null},r1=Pe({name:"isFavorite",initialState:HL,reducers:{addToFavorites:(e,t)=>{const n=t.payload;e.favorites.some(i=>i.word===n.word)||(e.favorites.push(n),localStorage.setItem("favorites",JSON.stringify(e.favorites)))},removeFromFavorites:(e,t)=>{const n=t.payload;e.favorites.splice(n,1),localStorage.setItem("favorites",JSON.stringify(e.favorites))},clearFavorites:e=>{e.favorites=[],localStorage.setItem("favorites",JSON.stringify(e.favorites))},setLoading:(e,t)=>{e.isLoading=t.payload},setError:(e,t)=>{e.error=t.payload}}}),{addToFavorites:VL,removeFromFavorites:i1,clearFavorites:QL,setLoading:qI,setError:KI}=r1.actions,GL=r1.reducer,o1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEJ0lEQVR4nO2ZvW8bdRzGf1Q09r357MT3YikTZSgIwdAWCZA6MYBQ/oIKykCHDlUZujcUlQ2pVMAYJFQQUgckhKCxHb/cxU7sOunZvoiKdkCZUFGGVlS0gd/vQXcXv9upae4SG/mRnsny3ef5+vHd92xCJppoosAEW3sVdf0EGUfB0lTY2kPXlqaScRPq2jxsHag71ubJOAm/Ph+Crf+OuubAAzX1HoqzHBkXwU6cacHvuKp+QMZBAHkGNXWjCV5THXjAUm87r5FRF6r6221Tb8ADluL4LTLqQk1L9YW/pQDr8UUyyoKlvQRLZX3hvQDAuvIKGVXBUr/qqkwXfByozCyQkb1xWcpfPVNvh19zAkw/QiWeIKMmWMrH/SvTBr8243wCji+RURKKsxys+B994RvgLXjg5vQWLE04uOu8reioxY/B0uZgKWdhKdcGVqYd3IP3XJ6+hlLsLMrROazKx1BSdF/uE6grR7Chn4SdOIW6fgE1/Qpq6nVUtQKq6iaq6vbuV5kB8A1wDx4ox4CSZ7YadU1Xotu0KG/SFblAi5HrtBi5goJ0AcuRUyiIJ2HKz+0Ov5H4yF3AWktY9zrQfWMatjKd4H3g2UrDMlhxx4WI5+WGJcAQLw4OYOunUddZE757Heg39eEr0wHeCy+3wHvgJTBTAjUkBlN67wkV0t9FXdvumXoAlWH94Bvg3fCm9A8M8cxw34Oa+iaq2oNRqAxzJy8+RF56Zyj4Zoh1/QSqyr2DrAzz4LdgiG/8J/hWnZQjsOJ3DqIyzIHPi78hKx59KvhmCOf6vB6/5U9l5KEqwzx4G1ludk/wzRC2ImItntyPyjAXXsghFZN9ge94zq3MfBdkZZghOvDfo0i44NaIysynQVSGOfCG+DlADgUC3xGkHLvqZ2WYO3nxauDgzQCl2Cd+VYbtmOaFy/sXoBxb8qMyzHHeM83x6f2BBzmEUvT+XivTghfAcgJoln+Ai/vR/9XpF/dcmXwnPHOc5YGc+ELwAVbk9/2oTBM858G7ATL86cAD0FX5Sz8q44ELTXiW4UGXwl8EH6AYrfhVGbYD7pkDTYdvBgqPLAnTovx44NQ7dhlhC4ZwDlnhHM0JW/0qwxrwS5xrusQ9ds4RXICC9PoT19+8RGle/BoFofmnBkw5RrP8ZzQj/N0JzzXhWdpxGEiFXwsuQFH+cNf11xAzMISXB74/Kx6lGe6nXviw51QYSE6dDywAXZa+7QtuSpsw+d2fVduDpLk5mubudsM7pouhb4ILUJDudj6nin/SvDT/NL1FhRxGeuo8TYfve/AhsGQINDl1JxB4t8dmhDnw1JAoNcUF5Pk9/8aJn/kETU0t0GSIugFuhBh+JDF/qNtPtKgJ1BBvU1PKYTly3PfjJ589Tm9M5eji4V/wA+H9Pv5EE/1f9S9M4cKBWKiMUAAAAABJRU5ErkJggg==",qL=({word:e,secondLanguage:t,definition:n})=>{const r=_(a=>a.isFavorite.favorites),i=ne(),o=r.some(a=>a.word===e),s=()=>{i(o?i1(e):VL({word:e,definition:n,secondLanguage:t}))};return l.jsx(KL,{children:l.jsx(YL,{src:o1,alt:"Favorite",onClick:s,isWordInFavorites:o})})},KL=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
`,YL=f.img`
  width: 100%;
  height: 100%;
  max-width: 1.5rem;
  max-height: 1.5rem;

  filter: ${e=>e.isWordInFavorites?"none":"invert(50%)"};
`,JL={flashcards:JSON.parse(localStorage.getItem("flashcards"))||[],isLoading:!1,error:null},s1=Pe({name:"flashcards",initialState:JL,reducers:{addToFlashcard:(e,t)=>{const n=t.payload;e.flashcards.some(i=>i.word===n.word)||(e.flashcards.push(n),localStorage.setItem("flashcards",JSON.stringify(e.flashcards)))},removeFromFlashcards:(e,t)=>{const n=t.payload;e.flashcards.splice(n,1),localStorage.setItem("flashcards",JSON.stringify(e.flashcards))},clearFlashcards:(e,t)=>{e.flashcards=[],localStorage.setItem("flashcards",JSON.stringify(e.flashcards))},setLoading:(e,t)=>{e.isLoading=t.payload},setError:(e,t)=>{e.error=t.payload}}}),{addToFlashcard:XL,removeFromFlashcards:a1,clearFlashcards:ZL,setLoading:YI,setError:JI}=s1.actions,eO=s1.reducer,l1="/assets/flash-card-8631d30b.png",Do=({word:e,secondLanguage:t,definition:n})=>{const r=_(a=>a.flashcards.flashcards),i=ne(),o=r.some(a=>a.word===e),s=a=>{a.stopPropagation(),i(o?a1(e):XL({word:e,definition:n,secondLanguage:t}))};return l.jsx(tO,{onClick:s,children:l.jsx(nO,{isWordInFlashcards:o,children:l.jsx("img",{src:l1,alt:"FlashCardIcon"})})})},tO=f.button`
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`,nO=f.span`
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
`,c1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF4klEQVR4nO3Ze2xTVRwH8N895756+36spV3blW1ujM09GBM3hmODPYzEqcAI4gNEJ2BQMJL94UIIijFA2AioPLKJGQnTLJHgYoggijFBBkQHOuUVM5eJRgYb63rbje2Y27VboyLek8hf/SXfdOna7nx27jn3nFOAeMUrXvGKV7z+exkAwBwTDdCX8l7lM6YCQCEAVANALWZgk5nHzTaePWbh8XkLj69YeXzVzOFuA4d/tfC4AwMs/KcPzGQwtw3z2pOYk7owK15DmJUZhiHhIDyCMC9Phg1N/C4ShNCYKIoBJYIgDEUjajT+6PPR13IcN8JiNGzlWX+Gjr851yYNLE00BDakWsa2TreRA7kO8umsRPJFkTucU8UecmaOl7TmO4ldZP0RcKQQWoE50W/wFgcTcp4ijpm1xFW4nrhL6ol33pt3jKd0E2FZbrSrt5coudDdTb7p6vpbTpw9O/Hz9z094dcqj4hhyM2qFNVpm+kkJg5fjjafR5gNOAvX/Wtj7xSM2bHz3d3hRqkNYhhygwLQV5lCjBweAoD7FIAbc5ohmsYr4UVpRPnP0gAwQmPXK9UDlJTbtQMAUKMAtMr1TAuQ9ObQ5x0dVAAO47HfK5KpAC/5TMMAsCEyBNigZ+5GKoDO5JCPnDhBBeBZPHqtnA7w8lSzAqgPAzAn/uYqWk8FMNi8gdb2diqAhmNv95ZPpQLUJpmCkwBBd8GR/wIVwOhIDTS1tlIBtDw38st8OsByrzEAAOvCAJbXfWa7fykVwDQlXd7b0kIF0An8yM/z6AA1iXrlXvD8eA/wmkPW6U/Q9YAzQ37nwAEqgEEUhq+U+agAlTGzEGBW02yZ9ihdD7iy5J3791MBTBoxdIkSUGjR3ASAh6OD+D1z2iN0gMTs4I49e6gAZkkM/VRKB8jSCwqgOApoMKVWUgHM7tzg1l27qABWrRT8YW4SFcAncf0AkBMGMFjYQQ3wzAi+1dhIBUjQa4MXKAF2gR0EgJQIgH/XnLaA7hLyFoQ2b9tGBXAYdPJ3JV4qgJ7FyjSaEBnEwkFLxuN0AE/B8Bvbt1MBnCZ94NxDdAAOoREAEMeXEpx02Jq5mA7gzh/e0tBABfBYTUOniz2qG68sABHDjE5sB1heOm7LfpISkBd6e+dOKkCK0+7/ssitGnCtIjnaA+OFee0pe+6zlNNoTnDr7t1UgCyf55ay61ILUJYfAkbBGICu0zFj5T2/D8zMSBtQdldqAVfn+YjEoqFJACddmlKwig7gypIb9+2jAhTn5fS35E1RDbhY5iNaFg/GAnqcs9ZSAjLlXU1NVIDK4qL+vdl21QBl/SSxyD+5p2eFPtfs1+huZM6MAO1irrqqvL8hM0E1QFnBajAKTAIwN+Quef2e7weW1Swc3DLNqhrQ89dBrJz5KEckVIAEX+Dg4cNUgFWrXpTrUs3qp9Hy8DQ6HANAt71lm6kAeotLbjt6lApQV18/utpnogLwCIViLiFWvtsh1p2iM9mD7SdPUgG2NDSQJYn6EbWAH0uTiJZF/TH3AakzIfcZ6mOV46dPUwF2NzeTCrsuqBagHC9aeHwu9mjxaV7nGKQZB6KkH/66s5MK8EFbGykwS7LayyfXKPoRwIrYg10GcWKbYEj0Ox98RRWA44XbZy5epAJ8fOwYSdOLsjItdpYkkY453vBB7pEHXOTDfCdpynEQZZrdnG4ldanmseUeg+wU2UEjh9qVJVwsYLwfEPsqwvwtXu/s17tnyeb0BcQyrZooG37lMRpTasVEEEJk5Zo15LnVq0OLly0LPlZT469etGhgflVV/0NlZTeKS0v/yM7L60vPyOjzJSffsNntg0aTya+RpKBymo0YZkzEKGDg8HUjh3vNHL5sE/C3Vh5/ZeHYT4w8btFxuBEANgLAWgDIh7sUDwDlyrEdZvlmltd9pCy3WUF3CPOaFsyKTZgTG8PBwnYAeB8A6iKpjckSAFgMAIsAYD4AzI788WQAcEW+G2Du1ph4xSte8YoX/J/1J/MWTw3L2mxrAAAAAElFTkSuQmCC",kp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACGklEQVR4nO2XW0tUURTHz5eKnMpe7P4QlBhRnyBKZMgbIUrhyzjjUGRpXosascAhTUSahwIfvFbCBF3AEPOcsy9Hhj7BP2ZtGnyYHmLWhjm2/7A452Gx/vvHWusctuc5OTk5OTkdBkWlX+AKP3GkanB6eA6gFLMOyFwO4bUrEMOPrY2QyGbIQ+XzFgDm5ukQcnzMHsCjIcpTS0t8AHJqEqLjNkR3BxUPW28i7OqEHHrIBiDTKYTdnQhv3TAe5ff2JOTMTO0AYjBT9TCit4cNIEy2Vc2XT0ZqB9BbW9DrG1BzrysjpD5+gt7YZANQq2tUU44MmxFaWCBPXfzMuAO5nAF4cN/aDsiBlAHIz/LtQKUTmx8g599AraxYA9DLy+RR7jo7QOz/A1G9A/h/Ma3X8BxAwnUAboQOKvZLHMX9MxoddgC9vQ1dLEJ/+24P4MtX8oh+7PADyGdP6RAiO2gNQPTfozz56iUfgP7pQ+t9qMJbU/zFc0T7JejdPTYAvbNLNcXEBOWpd++hVQS959cOINID8E80wL9whooHZ5sQNCYgeu6wAYRtrQhOHkNw7pTJPX8a/vGjdD+oHSCbgX/pIl22CaClGUHLZYi+Xj6A9iTVLAd5XL9Kniw3sj+hFhfNCE1NWtsBOTpqRqhQ4NuBSvHxMQOQTlkDCO/2GYDpaX6A8lIdfNoA0P/g8f/9yKJ6B3BycnJycvJiqN/ap8O42q9mQQAAAABJRU5ErkJggg==",Ap="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+klEQVR4nO2VrQoCQRSFx5eybhAWtmkSxGLWJzD4ACbrWn0FFxQVDGKzCQo2g2lAFydZruyCFg3uMr/O+eDA3HYP9565jAEAAADAMERUCRoJyZaoVZWJ/aWBqDWn0Xj/bqBo3etvcxkxEDZndDjdKGMw3FHRut1dU3p/5MremQF+TZWJfZtAPDnSanOhemdJZerp4pzrNQHtBgLJMmIgkpgD7SEOJefAyDcaS8yB83eA685AJPkOaDUQ4g4kH3fA+QwIGKj+PgGVgdMSYm5BU9xrA0Jh4LT8QsKCpoTXBrgFe829DjF33YCwYK+F1yEWLhsAAAAAAGCleAKWmufwwWk9CQAAAABJRU5ErkJggg==",rO=({inputLanguage:e,toggleInputLanguage:t,isGeorgian:n,secondLanguage:r})=>{const{t:i}=q();return l.jsxs(iO,{children:[l.jsx(u1,{inputLanguage:e,onClick:t,children:i("Français")}),l.jsx(oO,{onClick:t,children:l.jsx(sO,{inputLanguage:e,children:l.jsx("img",{src:e==="french"?c1:n?kp:Ap,alt:"FrenchFlag"})})}),l.jsx(aO,{onClick:t,inputLanguage:e,children:n?"ქართული":"English"})]})},iO=f.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  @media (max-width: 290px) {
    flex-direction: column;
    width: 80%;
    /* outline: 1px solid red; */
  }
`,oO=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  /* width: 50%; */
  @media (max-width: 576px) {
  }
`,sO=f.div`
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
    animation: ${e=>e.inputLanguage==="french"?dr`
            ${xL} 0.8s forwards
          `:dr`
            ${gL} 0.8s forwards
          `};
  }
`,u1=f.div`
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
`,aO=f(u1)`
  text-align: center;
  background-color: ${e=>e.inputLanguage==="french"?e.theme.primaryBackground:"#830C24"};
  color: ${e=>e.inputLanguage==="french"?e.theme.primaryText:"white"};
`,Ue=()=>{const e=mr();b.useEffect(()=>{window.scrollTo(0,0)},[e])},lO="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAECElEQVR4nO2ZXagVVRTH/3538QOzMEgNfRB9sMcQAsWCyAQVIehFehD0QcUH5T6EdEUxFPQhLQIpMs+sfQ4eP9Ks6weCCor4oJYFlWkl+uC3kOJHln/ZM+tc596zZ+45M2fueOAsmJfZa6+9fvtj9lprgJa0pHmERD8aLKfBZRrcoeALltGGZhKWMZiCb2nAbo9gHZoKwmBPFUTw/IEmWonvIiDs839d9koYn523UYN2YggN9sVA+E/N9gRLdDseosHkbL2vE6IuEA9v0OCa9vuXBh1chf5Zn4m9tUDUA2KFWzGSBpsoeKz9O2nwIjJZCcEPtULUC1IRCqaHVudHljEKeUIkBbFCD2NpcE7PzSl6GIEGnYnOeiHiQHSLHqagxBLGOXWKeIUGv6mtPfbSTQ6xFS8khYgF+QrDaXBT9f6h4AOnXgnjKLihekuTQwj2J4XobWtxG17ruocETyj4yKlnMNtvN3jAAiYkOROpIGo9IzRot5dn3KxT8LUCe89eltFGwWYa3K4a3MP7anxDWoi67hHBQl2V/1jCm87DL7jvAwter3T6LHLwAkYryJ99CdJt8gQX7I5AD6HgU7X7eeXFrcjB9cuge7JhICxgKAVrafBhVHjPIHb7RWGWVbUXMEXt3rS6qGngBkB0syd4K/T+Ej3McMII5qrOZVeIQoPTfnsRM/MBWYX+9LCAgl9D8dS7EQnaRXX2bQfoOl2xNbmAhLbPABpsUWeucxtecjj7ifbfWNXmYZ62HcwVJDTrx1Wno6q9iJnadqyqrYAJle2ZO4jan6WrciYizrL9rzhWdJj2u/t8gBQwWnXuOZxtU2fvO/sKHvq2WyAmg61lcNoZKDbD1vIPu+CE6nzs2DrvqbNHYw773/l/fgVfqqPXXdlf6PO7IfLzKziQ34VosKgrURI8YhHvxF6IjtufBuu1/+r8QxTBX/QwraeTPUKUS84QRXDmWYiSR9AYpA5rWcR8V2RbFTQ68hIbvutE3AiCxiAXiRr8Zb9TZXkzOOxRQoON6uh5ZxhvS0VB++bwhbPJuTKCud2Cs75PrB6ziKkRn+QHfmJVwJTMCnFpQChY4WeGQZ9FsamuQaFmiBor7alB+A3GhOzbnH25U8/DnK7iQ9JCd1qYGLv2Prmqenfs/RBTaamUgxYnguj1R07aFREIDQyLeDWyQCf4XW3tTgWRFibxeCX/cP+sdk7agl5DQHzjWzDIzkzWIPQwI1TEPptNRT6A2dUnvxUE39t3DYdIApPoV4LgEQ1WpipaNxqmZnsGHdrnID1MytZ7F4xgZyRIRKrqtHUEA2kwMVuPe1+ZHREgP6GZhMHKbHeAVJU9n3thkDi1+5GrPbQ26CxjQN5+taQlqF+eAnM4XrcKYDSBAAAAAElFTkSuQmCC",cO="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADQ0lEQVR4nO2ZzWvUQBTAU6V+4kXFg1r/DUEQVBA/LkUweGl3plVzUg8VDx7US6UHe6mCIF7V4vfHoSIIte57i8IqCot5b9taahW0qAVFxc9Iktm63d3sZttsO5F9kEsmmXm/mfeZGEZd6hIjcZwGCdQhgMYk0oRAPmumXi024iRmJrNAAt+UyM6UC7jLiBOEQL5VBIHsCKBBIz4QdKcUhAL5bcTCnJBvB0HkLuN/gJA6g5hVQGgLYlYJoSWIWcGxYwFysC+7UCL3VQtRDkTlnvsSqFcODDbVHEL0jyyaLkQ5kHawl0ng916YRv4kgfbUFgL47nQhKplWa3J43aS5Av2RST5aG3OaIURYHxHAR9zk6b2T5AOhlXSLOYl0WiJ/LFy4De3d/uR0aqYQ1Ti7AN7vnQrSL4n2hnAvIZ0JWrgFh1a5z0jkl7MJMnXzaMi1CKOSCOAPgQs7ToP7jL870YG03Hu2VCJ1JlKcCCrvTS9PUUYFgEMVQcIsHAVE/nwJsDf/u0+jImlvKqkbULMHAjR2wnHmaQfiKiXRbpfAtq8o/5BobytSznEaBNKwAt6iHUhOzCvOfAl0zjcfGm99/GJF4TMC6aT3PlC3tiC5XZfAoEzoeBFIirYrkAG9QTxf4J1K2aeFY/seZdeqsdfag7hhXp3Il4CyyPWRb/EBQf5cOGal3ywJgtTWtATQk6KxgcGmeJiWG2KB0T8ROlY4nEjSDgX5QOvwK5DPK4jxvanM8qDw65YsWiZEgWwJZPLNhr/LZHZruYQYlP31KVGARyTwxnIlikQarViizEXRqFqHzjaglqDK1swrGkP1JaoXKbmw1U8rPdjJeqcGzh6kF1C37xucDVXGe7sD1FPyZICa/Um5ay4aK4H8s+0hr69mAyL/hjVdEIF82O8MvQRpRQYR5kt7FCCJFK/Jze/17EAdkUNEBRM4r5tPgN6qCDWRSPGumkFU/JEzwxORyBcE0MV2sFcbsyVWOt0ogW7UMmppDWPoKlY63SiQrsceJK/v7o09SF7UuRR7kEmfQboWCAL01YiLWK7PAF8tDcLPjTiJ5Z0MXy4ECfXZUzfxGifv9wBnJdA7t+h0/Wiu9apLXYzq5S+kKGNnPkgtRgAAAABJRU5ErkJggg==",nt=({isActiveIndex:e})=>{const[t,n]=b.useState(!1),i=gi()===pl?cO:lO,o=()=>{e!==-1&&(n(!0),setTimeout(()=>{n(!1)},2e3))};return l.jsx(uO,{isActive:t,onClick:o,children:l.jsx("img",{src:i,alt:"listen"})})},uO=f.div`
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
`,d1=e=>e!=null&&e.startsWith("l'")?e.slice(2).replace(/\([^()]*\)/,"").trim("("):e!=null&&e.startsWith("les ")?e==null?void 0:e.slice(4):e!=null&&e.startsWith("le/la ")?null:e==null?void 0:e.slice(3),dO=e=>{for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e},fO=e=>{const n=`https://conjugaison.bescherelle.com/verbes/${e.replace(/\s+/g,"-")}`;window.open(n,"_blank")},ss=(e,t)=>e.map(n=>n[t]),f1=()=>{Ue();const{handleListen:e,isActiveStates:t}=_e(),[n,r]=b.useState(!1);b.useState(!0);const{t:i,i18n:o}=q(),s=o.language==="ka",a=ne(),c=_(P=>P.dictionary.searchResults)||[],u=ss(c,"french"),d=ss(c,"georgian"),h=ss(c,"english"),p=ss(c,"definition"),y=s?d:h,x=s?"Geo":"Eng",[v,S]=b.useState(""),[g,m]=b.useState(!1),[w,k]=b.useState("french"),A=()=>{k(P=>P==="french"?s?"georgian":"english":"french")},C=()=>{v.trim()?a(Qr({language:w==="french"?"french":s?"georgian":"english",query:v})):a(Qr({language:"",query:""}))},j=()=>{m(!g)},T=()=>{S(""),a(Qr({language:"",query:""})),a(ML())},L=P=>{P.key==="Enter"&&C()},O=g?c:c.slice(0,4);return l.jsxs(pO,{children:[l.jsx(rO,{inputLanguage:w,toggleInputLanguage:A,isGeorgian:s,secondLanguage:y}),l.jsxs(hO,{className:n?"active":"",children:[l.jsx(vO,{onClick:T,src:WL,alt:"ClearIcon"}),l.jsx(mO,{type:"text",value:v,onFocus:()=>r(!0),onBlur:()=>r(!1),onChange:P=>S(P.target.value),onKeyPress:L,placeholder:w==="french"?"Rechercher dans le dictionnaire...":s?"შეიყვანე სიტყვა...":"Enter word..."}),l.jsx(gO,{onClick:C,src:UL,alt:"SearchIcon"})]}),O.map((P,N)=>l.jsxs(SO,{children:[l.jsxs(xO,{children:[l.jsx(bO,{onClick:e(P.french),isActive:t[N],children:l.jsx(nt,{})}),w==="french"?P.french:s?P.georgian:P.english]}),l.jsxs(AO,{children:[l.jsx("span",{children:P.part_of_speech}),l.jsx(Sp,{definition:p,secondLanguage:w==="french"?y:u,secondLangButtonName:x,french:w==="french"?u:y,index:N,isMultipleDefinitions:!0})]}),l.jsxs(kO,{children:[i("Ajouter à"),l.jsx(Do,{word:w==="french"?u[N]:y[N],secondLanguage:w==="french"?y[N]:u[N],definition:p[N]})]}),P.part_of_speech.includes("v")&&l.jsxs(CO,{children:[l.jsx("span",{children:i("Ce lien mène à la page Bachharelle Conjugaison.")}),l.jsx("button",{onClick:()=>fO(P.french),children:P.french})]})]},P._id)),c.length>4&&!g&&l.jsx(yO,{onClick:j,children:i("Afficher tout")})," ",v.trim()&&!g&&c.length===0&&l.jsx(wO,{children:i("Aucun mot trouvé")})]})},pO=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 800px;
  overflow: hidden;
`,hO=f.div`
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
`,mO=f.input`
  margin-left: 0.5rem;
  padding: 8px;
  border: none;
  flex: 1;
  width: 100%;
  font-size: 1.2rem;
  outline: none;
  border-radius: 1rem;
`,gO=f.img`
  width: 2rem;
  height: 2rem;
  margin-right: 0.6rem;
  cursor: pointer;
`,xO=f.p`
  display: flex;
  /* font-size: 1.4rem; */
  font-weight: bold;
  margin-right: 0.3rem;
  &:after {
    content: " ";
  }
`;f.p`
  font-size: ${e=>e.isGeorgian?"1rem":"1.3rem"};
`;const yO=f.button`
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
`,vO=f.img`
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
`,wO=f.div``,bO=f.div`
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
`,SO=f.div`
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
`,kO=f.span`
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
`,AO=f.div`
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
`,CO=f.div`
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
`,zs=ae("presentTense/fetchPresentTense",async()=>{try{return(await le.get("/verbs/tenses/present")).data}catch(e){throw console.log(e),Error("Failed to fetch words")}}),jO={presentTense:[],isLoading:!1,error:null},EO=Pe({name:"presentTense",initialState:jO,reducers:{},extraReducers:e=>{e.addCase(zs.pending,t=>{t.isLoading=!0}).addCase(zs.fulfilled,(t,n)=>{t.presentTense=n.payload,t.isLoading=!1}).addCase(zs.rejected,(t,n)=>{t.error=n.error.message})}}),TO=EO.reducer,LO=()=>{Ue();const e=ne(),t=_(P=>P.presentTense.presentTense.presentTenseVerbs)||[],n=_(P=>P.presentTense.isLoading),r=_(P=>P.presentTense.error),[i,o]=b.useState(0),[s,a]=b.useState([]),[c,u]=b.useState(Array(t.length).fill("")),[d,h]=b.useState(!1),[p,y]=b.useState(!1),[x,v]=b.useState(0),[S,g]=b.useState(!0),[m,w]=b.useState(!0),[k,A]=b.useState(!1);b.useEffect(()=>{e(zs())},[e]),b.useEffect(()=>{t.length>0&&a(t.slice(i,i+5))},[i,t]);const C=(P,N)=>{const B=[...c];B[P+i]=N,u(B)},j=()=>{if(s.every((P,N)=>c[N+i]!=="")){const P=s.every((B,D)=>c[D+i]===B.correctAnswer);h(P),y(!0);const N=s.reduce((B,D,U)=>c[U+i]===D.correctAnswer?B+1:B,0);v(B=>B+N),w(!1),A(!P)}},T=()=>{i+5>=t.length?g(!1):(o(P=>P+5),y(!1),w(!0),A(!1),u(Array(t.length).fill("")))},L=()=>{y(!1),w(!0),A(!1),u(Array(t.length).fill(""));const P=s.reduce((N,B,D)=>c[D+i]===B.correctAnswer?N+1:N,0);v(N=>N-P)},O=()=>{o(0),u(Array(t.length).fill("")),h(!1),y(!1),v(0),g(!0)};return n?l.jsx(Be,{}):r?l.jsx("div",{children:r}):l.jsxs(OO,{children:[l.jsxs(zO,{children:["Score: ",x,"/",t.length]}),s.map((P,N)=>{const B=P.sentence.indexOf("_"),D=P.sentence.slice(0,B),U=P.sentence.slice(B+5);return l.jsxs(PO,{children:[N+1+i,": ",D,l.jsxs("span",{children:[P.words.map((H,$)=>l.jsx(RO,{onClick:()=>C(N,H),"data-questioncorrectanswer":P.correctAnswer===H,"data-usersanswer":c[N+i],"data-showanswers":p&&c[N+i]===H,"data-allanswerscorrect":d,children:H},$)),U]})]},N)}),l.jsxs(BO,{children:[m&&l.jsx(Ns,{onClick:j,children:"Submit"}),p&&!d&&S&&l.jsx(l.Fragment,{children:k?l.jsx(Ns,{onClick:L,children:"Retry"}):l.jsx(Ns,{onClick:j,children:"Submit"})}),l.jsx(FO,{onClick:T,children:"Next"}),p&&!d&&!S&&l.jsxs(NO,{children:["Your final score is: ",x,l.jsx(IO,{onClick:O,children:"Restart"})]})]})]})},OO=f.div`
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
`,PO=f.div`
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
`,$O=e=>{const t=e["data-usersanswer"]===e.children,n=e["data-showanswers"],r=e["data-questioncorrectanswer"];return t&&n?r?"green":"red":t?"violet":n&&e["data-allanswerscorrect"]==="true"?"green":e.theme.secondaryBackground},RO=f.button`
  border-radius: 8px;
  font-size: 1.2rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  gap: 1rem;
  color: ${e=>e.theme.primaryText};
  background-color: ${e=>$O(e)};

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
`,Ns=f.button`
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
`,zO=f.span`
  padding: 0.5rem;
  background: #7bb5f8;
  margin-left: auto;
`,NO=f.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: #7bb5f8;
  font-size: 1.2rem;
  border-radius: 8px 8px 0 0;
`,BO=f.div`
  display: flex;
  margin-top: 3rem;
  gap: 1rem;
`,IO=f.button`
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
`,FO=f(Ns)`
  background: ${e=>e.theme.primaryText};
  color: ${e=>e.theme.primaryBackground};
  &:hover {
    background: ${e=>e.theme.primaryBackground};
    color: ${e=>e.theme.primaryText};
  }
`,Bs=ae("sentences/fetchSentences",async()=>{try{return(await le.get("/sentences/general")).data}catch(e){throw console.log(e),Error("Failed to fetch words")}}),DO={sentences:[],isLoading:!1,error:null},MO=Pe({name:"sentences",initialState:DO,reducers:{},extraReducers:e=>{e.addCase(Bs.pending,t=>{t.isLoading=!0}).addCase(Bs.fulfilled,(t,n)=>{t.sentences=n.payload,t.isLoading=!1}).addCase(Bs.rejected,(t,n)=>{t.error=n.error.message})}}),_O=MO.reducer,p1=(e,t)=>{if(!e||!e.current)return;const n=e.current.offsetTop-t;window.scrollTo({top:n,behavior:"smooth"})},UO=f.select`
  /* Add your styling here */
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  height: 2.8rem;
  outline: none;
`,as=f.option`
  /* Add your styling here */
`,WO=({selectedCategory:e,onCategorySelect:t})=>l.jsxs(UO,{onChange:n=>t(n.target.value),value:e,children:[l.jsx(as,{value:"",children:"All"}),l.jsx(as,{value:"simple",children:"Simple"}),l.jsx(as,{value:"interrogative",children:"Interrogative"}),l.jsx(as,{value:"negative",children:"Negative"})]}),og=e=>{window.innerWidth<376?e(6*16):window.innerWidth<576||window.innerWidth<768?e(7*16):window.innerWidth<968?e(10*16):e(13*16)},h1=({sentenceData:e,isActive:t})=>{var E,I;const n=b.useRef(),[r,i]=b.useState(0),[o,s]=b.useState(""),a=z=>{s(z)};Ue();const{handleListen:c,isActiveStates:u}=_e(),{t:d,i18n:h}=q(),p=ne(),y=_(z=>z.sentences.sentences)||[],[x,v]=b.useState(!1),[S,g]=b.useState([]),[m,w]=b.useState(!1),[k,A]=b.useState(!1),[C,j]=b.useState(0),T=e||y,L=()=>o==="negative"?T.filter(z=>z.sentence.includes("pas")):o==="interrogative"?T.filter(z=>z.sentence.includes("?")):o==="simple"?T.filter(z=>z.words.length<4):T;b.useEffect(()=>{e||p(Bs())},[p,e]);const O=((E=L()[C])==null?void 0:E.sentence)||"",P=((I=L()[C])==null?void 0:I.words)||[],N=z=>{g(V=>V.includes(z)?V.filter(G=>G!==z):[...V,z])},B=z=>{g(V=>V.filter(G=>G!==z))},D=()=>{const z=S.map(be=>P[be]).join(" ").trim(),V=O.replace(/[^a-zA-Z0-9]/g,"").toLowerCase(),ge=z.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()===V;w(ge),v(!0),A(!0)},U=()=>{g([]),A(!1),v(!1)},H=()=>{g([]),A(!1),v(!1),w(!1),C+1<L().length&&j(z=>z+1)};b.useEffect(()=>{og(i);const z=()=>{og(i)};return window.addEventListener("resize",z),()=>{window.removeEventListener("resize",z)}},[]),b.useEffect(()=>{t&&p1(n,r)},[t,r]);const $=C===L().length-1;return l.jsxs(HO,{ref:n,children:[l.jsxs(YO,{children:[l.jsxs("h4",{children:[d("Construire la phrase")," "]}),l.jsxs("span",{children:[l.jsxs("h5",{children:[d("Choisissez une catégorie")," "]}),l.jsx(WO,{selectedCategory:o,onCategorySelect:a})]})]}),l.jsx(KO,{onClick:c(O),children:O}),l.jsxs(VO,{children:[l.jsx(m1,{isCorrect:m,isSubmit:x,children:S.map((z,V)=>l.jsx(QO,{onClick:()=>B(z),children:P[z]},V))}),l.jsx(GO,{children:P&&P.map((z,V)=>l.jsx(qO,{isSelected:S.includes(V),onClick:()=>N(V),children:z},V))})]}),l.jsx("div",{children:k?m?$?l.jsx("div",{onClick:H,children:l.jsx(qe,{children:d("Continue")})}):l.jsx("div",{onClick:H,children:l.jsx(qe,{children:d("Suivant")})}):l.jsx("div",{onClick:U,children:l.jsx(qe,{children:d("Réessayer")})}):l.jsx("div",{onClick:D,children:l.jsx(qe,{children:d("Soumettre")})})})]})},HO=f.section`
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
`,VO=f.div`
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
`,m1=f.div`
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
`,QO=f.span`
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
`,GO=f(m1)`
  background-color: ${e=>e.theme.tertiaryBackground};
  /* color: ${e=>e.theme.flagFirst}; */
  outline: 1px solid ${e=>e.theme.primaryText};
`,qO=f.button`
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
`,KO=f.p`
  display: none;
`,YO=f.div`
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
`,JO=()=>{const{t:e,i18n:t}=q();return t.language,l.jsxs(ZO,{children:[l.jsxs(Jc,{children:[l.jsx(wt,{to:"/",children:"Home"}),l.jsx(wt,{to:"/",children:"About"}),l.jsx(wt,{to:"/",children:"Contact"}),l.jsx(wt,{to:"/",children:"Services"})]}),l.jsxs(Jc,{children:[l.jsx(wt,{to:"/books",children:e("Livres")}),l.jsx(wt,{to:"/grammer/basic-grammer",children:e("Grammer")}),l.jsx(wt,{to:"/courses",children:e("Courses")}),l.jsx(wt,{to:"/dictionary",children:e("Dictionnaire")})]}),l.jsxs(Jc,{children:[l.jsx(wt,{to:"/vocabulary-topics",children:e("Vocabulaire")}),l.jsx(wt,{to:"/vocabulary-topics",children:e("Phrases")}),l.jsx(wt,{to:"/dialogue-topics",children:e("Dialogues")}),l.jsx(wt,{to:"/dialogue-topics",children:e("Nouvelles")})]})]})},XO=dt`
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
`,ZO=f.div`
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
`,Jc=f.div`
  display: flex;

  flex-direction: column;
`,wt=f(Ee)`
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
    animation: ${XO} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
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
`,e3=[{title:"   Learn French",description:"Begin your journey of learning French, explore the basics of grammar, vocabulary, and communication, and progress towards mastery. Come and discover:",listItems:["Grammar fundamentals","Advanced learning"],buttonLabel:"Learn",buttonColor:"#67330A",link:"grammar"},{title:" Improve Your Vocabulary",description:"Begin your journey of learning French, explore the basics of grammar, vocabulary, and communication, and progress towards mastery. Come and discover:",listItems:["A vast vocabulary by topic","Everyday communication"],buttonLabel:"Learn",buttonColor:"#67330A",link:"vocabulary/vocabulary-topics"},{title:" Discover French Literature",description:"Dive into the treasures of classic and contemporary French literature, exploring different difficulty levels starting from level A1. Discover:",listItems:["50 literary classics","35 contemporary works","20 adaptations","100 articles"],buttonLabel:"Read",buttonColor:"#00384A",link:"/reading-zone/french-easy-reading"}],sg=[{title:"  ისწავლე ფრანგული",description:"დაიწყე ფრანგულის სწავლა, ჩვენი საბაზისო გრამატიკის სექციიდან :",listItems:["გრამატიკის საწყისი დონე"],buttonLabel:"ისწავლე",buttonColor:"#67330A",link:"grammar"},{title:" გაიუმჯობესე ლექსიკის დონე",description:"გაიუმჯობესე ლექსიკა, ნახე ჩვენი ლექსიკის სექცია, სადაც დაგხვდება:",listItems:["ლექსიკა თემების მიხედვით","ყოველდღიური საკომუნიკაციო ფრაზები"],buttonLabel:"ისწავლე",buttonColor:"#67330A",link:"vocabulary/vocabulary-topics"},{title:" ფრანგული წიგნები",description:"ფრანგი კლასიკოსების და თანამედროვე ავტორების საუკეთესო ნამუშევრები, როგორც ორიგინალურ ასევე ადაპტირებული სახით. ",listItems:["50 კლასიკური წიგნი","35 თანამედრვე ავტორი","20 ადაპტირებული","100 + სტატია"],buttonLabel:"წაიკითხე",buttonColor:"#00384A",link:"/reading-zone/french-easy-reading"}],t3=()=>{const{t:e,i18n:t}=q(),n=t.language==="fr"||t.language==="ka"?sg:e3;return l.jsxs(n3,{children:[l.jsx(c3,{children:e("Parlez-vous français?")}),l.jsx(r3,{children:n.map(r=>{const{title:i,buttonLabel:o,description:s,listItems:a,buttonColor:c,link:u}=r;return l.jsxs(i3,{children:[l.jsx(l3,{children:i.toUpperCase()}),l.jsx("p",{children:s}),l.jsx(a3,{children:a.map((d,h)=>l.jsx("li",{children:d},h))}),l.jsx(o3,{to:u,children:l.jsx(s3,{style:{backgroundColor:c},children:o})})]},i)})})]})},n3=f.div`
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
`,r3=f.div`
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
`,i3=f.div`
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
`,o3=f(Ee)`
  text-decoration: none;
  width: 100%;
  margin-top: auto;
`,s3=f.button`
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
`,a3=f.ul`
  list-style: none;
  padding-left: 1rem;
  color: ${e=>e.theme.secondaryText};

  li {
    &:before {
      content: ${e=>e.theme.background==="#000000"?'"🔹"':'"🔸"'};
    }
  }
`,l3=f.h3`
  color: ${e=>e.theme.primaryText};
  text-align: center;
  width: 100%;
`,c3=f.header`
  text-align: center;
  font-size: 2rem;
  padding: 1rem;
  font-weight: bold;
`,u3=({handleLanguagePopupClose:e})=>{const{t,i18n:n}=q(),[r,i]=b.useState(localStorage.getItem("languageSelected")||"");return r?null:l.jsxs(d3,{children:[l.jsx("h2",{children:t("Choisissez votre langue")}),l.jsxs("button",{onClick:()=>e("en"),children:[t("English"),l.jsx("img",{src:Ap,alt:"EnglishFlag"})]}),l.jsxs("button",{onClick:()=>e("ka"),children:[t("ქართული"),l.jsx("img",{src:kp,alt:"GeorgianFlag"})]})]})},d3=f.div`
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
`,f3=()=>{const[e,t]=b.useState(!0),[n,r]=b.useState(!1),[i,o]=b.useState(!0),s=mr(),{t:a,i18n:c}=q();b.useEffect(()=>{localStorage.getItem("languageSelected")?(t(!1),r(!0)):s.pathname==="/"&&t(!0),o(!1)},[s]);const u=p=>{t(!1),localStorage.setItem("languageSelected",p),r(!0),c.changeLanguage(p)},d=ne();Ue();const h=_(p=>p.books.books);return _(p=>p.books.isLoading),_(p=>p.vocabularyTopics.vocabularyTopics),_(p=>p.vocabularyTopics.isLoading),b.useEffect(()=>{d(Ki())},[]),b.useEffect(()=>{d(Yi())},[]),i?l.jsx(Be,{}):l.jsxs(p3,{children:[e&&l.jsx(v3,{showoverlay:e,children:l.jsx(h3,{children:l.jsx(u3,{handleLanguagePopupClose:u})})}),l.jsx(f1,{}),l.jsx(t3,{}),l.jsxs(m3,{children:[l.jsxs(g3,{children:[l.jsxs(x3,{children:[a("Tous les livres")," "]}),l.jsx(y3,{to:"/books/level/a2-b1",children:a("Tout afficher")})]}),l.jsx(YT,{books:h})]}),l.jsx(JO,{})]})},p3=f.section`
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
`,h3=f.div`
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999; /* Ensure it's on top */
`;f.div`
  max-height: 100%;
`;const m3=f.div`
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
`;const g3=f.div`
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
`;const x3=f.p`
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
`,y3=f(Ee)`
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
`,v3=f.div`
  position: absolute;
  top: 0%;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* Adjust the opacity as needed */
  z-index: ${({showoverlay:e})=>e?99:-1};
`,w3=f.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`,Pi=f.button`
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
`,b3=f.section`
  display: flex;
  justify-content: space-between;
  /* background-color: white; */
  flex-direction: column;
  width: 100%;
  /* height: 100vh; */
  margin: 0 auto;
`,S3=f.div`
  display: flex;
  margin: 0 3rem;
  justify-content: ${e=>e.index%2===0?"flex-start":"flex-end"};
  align-items: center;
`,k3=f.li`
  display: flex;
  background-color: #3e3efa;
  color: white;
  padding: 1rem;
  border-radius: 3rem 0 2rem 0;
  align-items: center;
  margin-bottom: 1rem;
`,A3=f.li`
  display: flex;
  color: white;
  background-color: #4daffa;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0 3rem 0 2rem;
  align-items: center;
  justify-content: flex-end;
`,ag=f.img`
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  margin-right: 1rem;
  margin-left: 1rem;
`,lg=f.div`
  display: flex;
  flex-direction: column;
`,cg=f.span`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 1rem;
`,ug=f.span`
  font-size: 1.2rem;
  font-weight: 400;
`,Cp=f.div`
  margin: 0 auto;
  margin-bottom: 3rem;
`,C3=f.section`
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
`;const j3=e=>e.showAnswers&&e.answers===e.option?e.questionCorrectAnswer&&e.showAnswers?"green":"red":e.usersAnswer&&e.answers===e.option?"violet":e.showAnswers&&e.allAnswersCorrect?"green":"white",E3=f.button`
  border-radius: 8px;
  font-size: 1.4rem;
  padding: 0.5rem;
  cursor: pointer;
  gap: 1rem;
  color: black;
  background-color: ${e=>j3(e)};

  &:first-child {
    margin-right: 0.6rem;
    margin-left: 0.2rem;
  }

  &:hover {
    transform: scale(1.1);
    color: rgb(40, 175, 253);
  }
`,Xc=f.button`
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
`;const T3=f.section`
  width: 100%;
  height: 100vh;
  display: flex;

  align-items: center;
  flex-direction: column;
  background-color: white;
`,L3=f.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,O3=f.div`
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
`,P3=f.span`
  text-align: center;
  display: flex;
  cursor: pointer;
  align-items: center;
  font-size: 2rem;
  margin: 0.5rem;
  padding: 0.5rem;
  height: 3rem;
`,$3=f.div`
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
`,R3=f.button`
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
`,z3=f.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: space-between;
`,N3=f.div`
  display: grid;
  grid-template-columns: 35% 35% 35%;
  justify-content: space-between;
  width: 100%;

  margin: 0 3rem;
`,B3=f.div`
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
`,I3=f.div`
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
`;const F3=f.div`
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
`;const D3=f.div`
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
`;const Is=ae("dialogueExercises/fetchDialoguesExercises",async e=>{try{return(await le.get(`/course/elementary/exercise-1/${e}`)).data}catch{throw Error("Failed to fetch dialogues for lesson")}}),M3={dialogueExercises:[],isLoading:!1,error:null},_3=Pe({name:"dialogueExercises",initialState:M3,reducers:{},extraReducers:e=>{e.addCase(Is.pending,t=>{t.isLoading=!0,t.error=null}).addCase(Is.fulfilled,(t,n)=>{t.dialogueExercises=n.payload,t.isLoading=!1}).addCase(Is.rejected,(t,n)=>{t.isLoading=!1,t.error=n.error.message})}}),U3=_3.reducer,dg=e=>{const t=document.createElement("canvas"),r=t.getContext("2d").measureText(e).width;return t.remove(),r},W3=({Continue:e,lessonsCurrentIndex:t})=>{const n=ne();_(L=>L.dialogueExercises.isLoading),_(L=>L.dialogueExercises.error);const r=_(L=>L.dialogueExercises.dialogueExercises)||[],[i,o]=b.useState(Array(r.length).fill("")),[s,a]=b.useState(!1),[c,u]=b.useState(0),[d,h]=b.useState(!1),[p,y]=b.useState(!1),[x,v]=b.useState(!1),S=b.useRef([]),[g,m]=b.useState([]),w=b.useRef(null);b.useEffect(()=>{n(Is(t))},[n,t]),b.useEffect(()=>{k()},[r]),b.useEffect(()=>{S.current=S.current.slice(0,r.length)},[r.length]),b.useEffect(()=>{const L=r.map(O=>{const P=O.message.indexOf("_"),N=dg(O.message.slice(0,P)),B=S.current[0].current.offsetWidth;return N/B*100+2});m(L)},[r,dg]);const k=()=>{o(Array(r.length).fill("")),a(!1),u(0),h(!1),v(!1),y(!1)},C=r.map(L=>L.correctAnswer).join(",")===i.join(","),j=(L,O)=>{const P=[...i];P[L]=O,o(P)},T=()=>{let L=0,O=!1;r.forEach((P,N)=>{P.correctAnswer===i[N]?L++:O=!0}),u(L),a(!0),h(L===r.length),v(O),y(!0)};return l.jsxs(C3,{children:[l.jsx("h2",{children:"Choisissez la bonne réponse."}),l.jsx(H3,{children:r.map((L,O)=>{const P=L.message.indexOf("_"),N=L.message.slice(0,P),B=L.message.slice(P+5);return S.current[O]=w,l.jsx("div",{ref:w,children:l.jsxs("p",{children:[O+1,": ",N,l.jsx("span",{style:{textDecoration:"underline"},children:L.options.map((D,U)=>l.jsx(E3,{onClick:()=>j(O,D),questionCorrectAnswer:L.correctAnswer===D,usersAnswer:i[O]===D,showAnswers:s&&i[O]===D,allAnswersCorrect:d,disabled:i[O]!=="",children:D},U))}),B]})},O)})}),l.jsx(Cp,{children:s?l.jsx("div",{onClick:k,children:x?l.jsx(Xc,{children:"Retry"}):e}):l.jsx("div",{onClick:T,children:C?d?e:l.jsx(Xc,{children:"Submit"}):l.jsx(Xc,{children:"Submit"})})}),C&&l.jsxs(D3,{children:[l.jsxs("p",{children:["Score: ",c]}),c===r.length&&l.jsx("p",{children:"Good job!"})]})]})},H3=f.div`
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
`,V3="/assets/jm-312650a2.jpeg",Q3="/assets/clairefraser-8e4eedc8.webp",G3="/assets/bonjor je mappelle jaime-4a41d2e4.mp3",q3="/assets/et toi tu tappelle commonen jaime-95b48b2f.mp3",K3="/assets/enchante claire jaime-48728a03.mp3",g1="/assets/bonjour jaime claire-dda50943.mp3",x1="/assets/je mappelle Claire claire-db931124.mp3",y1="/assets/encante Claire-990951c9.mp3",Zc=ae("dialogues/fetchAudioFiles",async()=>{try{return(await le.get("/audio")).data}catch{throw Error("Failed to fetch audio files")}}),Fs=ae("dialogues/fetchDialoguesForLesson",async e=>{try{return(await le.get(`/course/elementary/dialogues/${e}`)).data}catch{throw Error("Failed to fetch dialogues for lesson")}}),Y3={dialogues:[],isLoading:!1,error:null},J3=Pe({name:"dialogues",initialState:Y3,reducers:{},extraReducers:e=>{e.addCase(Fs.pending,t=>{t.isLoading=!0,t.error=null}).addCase(Fs.fulfilled,(t,n)=>{t.dialogues=n.payload,t.isLoading=!1}).addCase(Fs.rejected,(t,n)=>{t.isLoading=!1,t.error=n.error.message}).addCase(Zc.pending,t=>{t.isLoading=!0,t.error=null}).addCase(Zc.fulfilled,(t,n)=>{t.audioFiles=n.payload,t.isLoading=!1}).addCase(Zc.rejected,(t,n)=>{t.isLoading=!1,t.error=n.error.message})}}),X3=J3.reducer,Z3=({Continue:e,lessonsCurrentIndex:t})=>{const n=ne(),r=_(g=>g.dialogues.dialogues)||[];_(g=>g.dialogues.audioFiles);const[i,o]=b.useState(0),[s,a]=b.useState(0),c=b.useRef(null),[u,d]=b.useState(!1),h=[G3,g1,q3,x1,K3,y1],p=()=>{const g=h[s];new Audio(g).play(),a(s+1)};b.useEffect(()=>{p()},[]);const y=g=>{if(!u){d(!0);const m=new Audio(h[g]);m.play(),m.addEventListener("ended",()=>{setTimeout(()=>{d(!1)},2e3)})}};b.useEffect(()=>{n(Fs(t))},[]),b.useEffect(()=>{p()},[]),b.useEffect(()=>{let g;return u&&(g=setTimeout(()=>{d(!1)},1500)),()=>{clearTimeout(g)}},[u]);const x=()=>{o(i+1)},v=()=>{x(),p()},S=i>=r.length-1;return l.jsxs(b3,{onClick:v,ref:c,children:[l.jsx("ul",{children:r.slice(0,i+1).map((g,m)=>l.jsx(S3,{onClick:S&&!u?()=>y(m):void 0,index:m,children:m%2===0?l.jsxs(k3,{children:[l.jsx(ag,{src:V3,alt:"Jaime"}),l.jsxs(lg,{children:[l.jsx(cg,{children:g.message}),l.jsx(ug,{children:g.translation})]})]}):l.jsxs(A3,{children:[l.jsxs(lg,{children:[l.jsx(cg,{children:g.message}),l.jsx(ug,{children:g.translation})]}),l.jsx(ag,{src:Q3,alt:"Claire"})]})},m))}),l.jsx(Cp,{children:S&&e})]})},e5="/assets/bonjourCl-13530681.mp3",t5="/assets/tu t appel commen Claire-c40a1782.mp3",Ds=ae("newPhrases/fetchNewPhrases",async e=>{try{return(await le.get(`/course/elementary/phrases/${e}`)).data}catch{throw Error("Failed to fetch phrases for lesson")}}),n5={newPhrases:[],isLoading:!1,error:null},r5=Pe({name:"newPhrases",initialState:n5,reducers:{},extraReducers:e=>{e.addCase(Ds.pending,t=>{t.isLoading=!0,t.error=null}).addCase(Ds.fulfilled,(t,n)=>{t.newPhrases=n.payload,t.isLoading=!1}).addCase(Ds.rejected,(t,n)=>{t.isLoading=!1,t.error=n.error.message})}}),i5=r5.reducer,o5=({Continue:e,lessonsCurrentIndex:t})=>{const[n,r]=b.useState(0),i=ne(),o=_(d=>d.newPhrases.newPhrases)||[],s=_(d=>d.newPhrases.isLoading),a=()=>{r(d=>d+1)};b.useEffect(()=>{i(Ds(0))},[i]);const c=[e5,g1,t5,x1,y1];function u(d){const h=new Audio(c[d]);h.play(),console.log("audio",h)}if(s===!0)return l.jsx("p",{children:"Loading"});if(s===!1)return l.jsxs(z3,{onClick:a,children:[l.jsx(N3,{children:o&&o.originalPhrases&&o.translatedPhrases&&o.originalPhrases.slice(0,n+1).map((d,h)=>l.jsxs(B3,{children:[l.jsxs(I3,{onClick:()=>u(h),children:[l.jsx(nt,{})," ",l.jsx("div",{children:d})]}),l.jsx(F3,{children:o.translatedPhrases[h]})]},`phrase-${h}`))}),l.jsx(Cp,{children:e})]})},eu=ae("dialogues/fetchAudioFiles",async()=>{try{return(await le.get("/")).data}catch{throw Error("Failed to fetch audio files")}}),Ms=ae("sentenceBuilder/fetchSentenceBuilder",async e=>{try{return(await le.get(`/course/elementary/sentence-builder/${e}`)).data}catch{throw Error("Failed to fetch dialogues for lesson")}}),s5={sentenceBuilder:[],audioFiles:[],isLoading:!1,error:null},a5=Pe({name:"sentenceBuilder",initialState:s5,reducers:{},extraReducers:e=>{e.addCase(Ms.pending,t=>{t.isLoading=!0,t.error=null}).addCase(Ms.fulfilled,(t,n)=>{t.sentenceBuilder=n.payload,t.isLoading=!1}).addCase(Ms.rejected,(t,n)=>{t.isLoading=!1,t.error=n.error.message}).addCase(eu.pending,t=>{t.isLoading=!0,t.error=null}).addCase(eu.fulfilled,(t,n)=>{t.audioFiles=n.payload,t.isLoading=!1}).addCase(eu.rejected,(t,n)=>{t.isLoading=!1,t.error=n.error.message})}}),l5=a5.reducer,c5=({Continue:e,lessonsCurrentIndex:t})=>{const{handleListen:n,isActiveStates:r}=_e(),i=ne(),o=_(A=>A.sentenceBuilder.sentenceBuilder)||[],[s,a]=b.useState(0),{sentence:c,words:u}=o||{};console.log({sentence:c,words:u}),b.useEffect(()=>{i(Ms(t))},[i,t]);const[d,h]=b.useState([]),[p,y]=b.useState(!1),[x,v]=b.useState(!1),S=A=>{h(C=>C.includes(A)?C.filter(j=>j!==A):[...C,A])},g=A=>{h(C=>C.filter(j=>j!==A))},m=()=>{const A=d.map(j=>u[j]).join(" ").trim(),C=A===c;console.log(C,A,c),y(C),v(!0)};console.log("newPair",s),console.log("sentenceBuilders length",o.length);const w=()=>{h([]),v(!1)},k=s===o.length-1;return console.log("nextComponent",k),l.jsxs(T3,{children:[l.jsx("h2",{children:"Build the Sentence"}),l.jsx(tu,{onClick:n(c),children:"play the sentence"}),l.jsx(u5,{onClick:n(c),children:c}),l.jsxs(L3,{children:[l.jsx(O3,{children:d.map((A,C)=>l.jsx(P3,{onClick:()=>g(A),children:u[A]},C))}),l.jsx($3,{children:u&&u.map((A,C)=>l.jsx(R3,{isSelected:d.includes(C),onClick:()=>S(C),children:A},C))}),l.jsx("div",{children:x?p?e:l.jsx("div",{onClick:w,children:l.jsx(tu,{children:"Retry"})}):l.jsx("div",{onClick:m,children:l.jsx(tu,{children:"Submit"})})})]})]})},tu=f.div`
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
`,u5=f.p`
  display: none;
`,_s=ae("gramer/getGrammer",async e=>{try{return(await le.get(`/course/elementary/grammer/${e}`)).data}catch{throw Error("Failed to fetch grammer for lesson")}}),d5={grammer:[],isLoading:!1,error:null},f5=Pe({name:"grammer",initialState:d5,reducers:{},extraReducers:e=>e.addCase(_s.pending,t=>{t.isLoading=!0}).addCase(_s.fulfilled,(t,n)=>{t.grammer=n.payload,t.isLoading=!1}).addCase(_s.rejected,(t,n)=>{t.error=n.error.message})}),p5=f5.reducer,h5=({lessonsCurrentIndex:e,Continue:t})=>{const n=ne(),r=_(a=>a.grammer.grammer)||[],i=_(a=>a.grammer.isLoading),{handleListen:o,isActiveStates:s}=_e();return b.useEffect(()=>{n(_s(e))},[n]),i?l.jsx("p",{children:"Loading"}):l.jsxs(m5,{children:[l.jsx("ul",{children:r&&r.map(a=>l.jsxs("div",{children:[l.jsx("h1",{children:a.title}),l.jsx("h3",{children:a.titleGeo}),l.jsx(nu,{children:a.verbe.map((c,u)=>l.jsxs(g5,{children:[l.jsxs(hg,{children:[u+1,"."]}),l.jsxs(fg,{children:[l.jsx(mg,{onClick:o(c),className:s[u]?"active":"inactive",isActive:s[u],children:l.jsx(nt,{})}),c]}),l.jsx(pg,{children:a.verbeGeo[u]})]},u))}),l.jsx(nu,{children:l.jsxs(nu,{children:[l.jsx("h2",{children:"examples"}),a.examples&&a.examples.map((c,u)=>l.jsxs(x5,{children:[l.jsxs(hg,{children:[u+1,"."]}),l.jsx(mg,{onClick:o(c),className:s[u]?"active":"inactive",children:l.jsx("img",{src:ListenImg,alt:"ListenImg",isActive:s[u]})}),l.jsx(fg,{children:c}),l.jsx(pg,{children:a.examplesGeo&&a.examplesGeo[u]})]},u))]})})]},a._id))}),t]})},m5=f.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 2rem;
  justify-content: center;
  ul {
    margin-bottom: 2rem;
  }
`,nu=f.ul`
  display: flex;
  flex-direction: column;
`,g5=f.div`
  list-style: none;
  line-height: 2rem;
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid gold;
  border-radius: 0 0 0 8px;
  padding: 0.5rem;
  width: 100%;
`,fg=f.span`
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
`,pg=f.span`
  font-size: 1.2rem;
  letter-spacing: 1.4px;
`,hg=f.span`
  font-size: 1.6rem;
`,mg=f.div`
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
`,x5=f.div`
  display: flex;
  padding: 0.5rem;
  width: 100%;
  border-bottom: 2px solid gold;
`,y5=()=>{const[e,t]=b.useState(0),[n,r]=b.useState(0),i=()=>{r(s=>s===o.length-1?(t(a=>a+1),0):s+1)},o=[l.jsx(h5,{lessonsCurrentIndex:e,Continue:l.jsx(Pi,{onClick:i,children:"Continue"})}),l.jsx(Z3,{lessonsCurrentIndex:e,Continue:l.jsx(Pi,{onClick:i,children:"Continue"})}),l.jsx(W3,{lessonsCurrentIndex:e,Continue:l.jsx(Pi,{onClick:i,children:"Continue"})}),l.jsx(c5,{lessonsCurrentIndex:e,Continue:l.jsx(Pi,{onClick:i,children:"Continue"})}),l.jsx(o5,{lessonsCurrentIndex:e,Continue:l.jsx(Pi,{onClick:i,children:"Continue"})})];return l.jsx("div",{children:l.jsx(w3,{children:o[n]})})},v5=f.div`
  padding: 20px;
`,w5=f.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`,b5=f.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`,S5=f.p`
  font-size: 18px;
  font-style: italic;
`,k5=()=>l.jsxs(v5,{children:[l.jsx(w5,{children:"Intermediate Page"}),l.jsx(S5,{children:`"Exciting things are on the horizon! We're working diligently to bring you the best learning experience for our Intermediate and Advanced courses. While the content is being carefully crafted, stay tuned and get ready to embark on an incredible language journey with us. We can't wait to share it all with you soon! Thank you for your patience and enthusiasm."`}),l.jsxs(b5,{children:[l.jsx("p",{children:"Welcome to the Intermediate level! This level is designed for learners who have some basic knowledge of the language and want to improve their skills further."}),l.jsx("p",{children:"In this course, you will learn more complex grammar structures, expand your vocabulary, and practice reading and listening to intermediate-level texts and dialogues."}),l.jsx("p",{children:"By the end of this course, you will be able to engage in more meaningful conversations and understand intermediate-level content."})]})]}),A5=()=>{};f.button`
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
`;f(Ee)`
  display: block;
  font-size: 18px;
  color: #007bff;
  margin-bottom: 10px;
  text-decoration: none;
`;const C5=({title:e,duration:t,difficulty:n,vocabularyCount:r,description:i,image:o,phrase:s})=>l.jsxs(j5,{children:[l.jsxs(E5,{children:[l.jsx(T5,{src:o,alt:e}),l.jsx("p",{children:s})]}),l.jsx("h3",{children:e}),l.jsxs(L5,{children:["Duration:",l.jsx("span",{children:t})]}),l.jsxs(O5,{children:["Difficulty:",l.jsx("span",{children:n})]}),l.jsxs(P5,{children:["Vocabulary Count:",l.jsx("span",{children:r})]}),l.jsxs($5,{children:["Description:",i]})]}),j5=f.div`
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
`,E5=f.div`
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
`,T5=f.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,L5=f.p`
  padding: 0 1rem;

  span {
    font-size: 1.5rem;
    margin-left: 0.5rem;
    color: blue;
  }
`,O5=f.p`
  padding: 0 1rem;
  span {
    font-size: 1.5rem;
    margin-left: 0.5rem;
    color: #0d4d15;
  }
`,P5=f.p`
  padding: 0 1rem;

  span {
    font-size: 1.5rem;
    margin-left: 0.5rem;
    color: #ff9e1f;
  }
`,$5=f.p`
  padding: 0 1rem;

  span {
    font-size: 1.5rem;
    margin-left: 0.5rem;
    padding: 1rem;
    color: #ff9e1f;
  }
`,R5=[{imgUrl:"/images/vitrine-des-baguettes.jpg",phrase:"- Je veux une baguette s'il vous plaît",title:"Basic French",duration:"6 weeks",difficulty:"Beginner",vocabularyCount:"500",description:"The Basic French course is designed for absolute beginners who have little to no prior knowledge of the French language. Over the course of 6 weeks, students will be introduced to the fundamental aspects of French, including basic vocabulary, essential grammar rules, and simple conversational phrases. Through interactive lessons, fun exercises, and engaging activities, learners will gain the confidence to navigate everyday situations in French-speaking environments. By the end of the course, students can expect to have acquired approximately 500 commonly used vocabulary words and a basic understanding of French sentence structure. Whether you plan to travel to a French-speaking country, communicate with French-speaking friends or colleagues, or simply explore a new language, this course is the perfect starting point on your language journey."},{title:"Intermediate French",duration:"8 weeks",imgUrl:"/images/asking.jpg",phrase:"- Qu'est que vous me conseillez?",difficulty:"Intermediate",vocabularyCount:"1000",description:"The Intermediate French course is tailored for learners who have a foundational understanding of French and wish to deepen their language skills. Spanning 8 weeks, the course will delve into more complex grammar concepts, varied verb tenses, and idiomatic expressions. Students will engage in immersive language activities, authentic conversations, and reading comprehension exercises to strengthen their language proficiency. By the end of the course, students can expect to have expanded their vocabulary to approximately 1000 words and gained confidence in expressing themselves in various real-life situations. Whether you aim to enhance your career opportunities, connect with French-speaking communities, or appreciate French literature and culture, this course will provide the necessary tools to become a more proficient French speaker."},{title:"Advanced French",duration:"12 weeks",imgUrl:"/images/advanceImage.jpg",phrase:"- À qui est-ce que je dois m'adresser pour un échange?",difficulty:"Advanced",vocabularyCount:"2000",description:"The Advanced French course is designed for learners who already possess a strong foundation in the language and seek to achieve fluency and sophistication. Over the course of 12 weeks, students will engage in stimulating discussions, analyze authentic French texts, and participate in advanced grammar workshops. Emphasis will be placed on refining pronunciation, mastering intricate grammar rules, and comprehending complex literary works. By the end of the course, students can expect to have expanded their vocabulary to approximately 2000 words and attained a high level of proficiency in reading, writing, listening, and speaking French. Whether you aspire to pursue higher education in a French-speaking country, work in international settings, or simply enjoy French literature in its original form, this course will elevate your language skills to an advanced level."}],z5=()=>l.jsx(N5,{children:R5.map((e,t)=>l.jsx(B5,{to:`/${e.difficulty.toLowerCase()}`,children:l.jsx(C5,{image:e.imgUrl,phrase:e.phrase,title:e.title,duration:e.duration,difficulty:e.difficulty,vocabularyCount:e.vocabularyCount,description:e.description})},t))}),N5=f.div`
  display: flex;
  margin: 0 1rem;
  margin-top: 3rem;
  align-items: center;
  justify-content: space-evenly;

  gap: 20px;
`,B5=f(Ee)`
  text-decoration: none;
  color: black;
`,I5=()=>{const[e,t]=b.useState(!0),[n,r]=b.useState(window.pageYOffset),i=()=>{const o=window.pageYOffset;t(o<=n||o===0),r(o)};return b.useEffect(()=>(window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)}),[]),e},F5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHDklEQVR4nO2Za3ATVRTHi+Ljs36h+N3HJ9FP6gBf/KIC9cGzWEXRwRHRpoUBEWdQhhYfjErtI22ed5M+kiZN32maQFqgQktb2rRUebS7YcZxRGjp6IyQDf6dc0tD22S3abN1/NAzcybJ3bt37y/nnnvOPZuWtiiLsiiL8n+QsUD6s+P+Zblj/uXP/KcPBg7eB9HypCxaX49Kwq5oWNjHVRJ2URtdoz6zjXPTn95EEDf96fJ4IB03/emRMd/yFQs7+e7SB+QR9mpUFJyyKFyPSgLUlPrIInPIYVsG3as07nhg2W6CiKl/We7CAAw6H4xK7GNZEq7ONnlFKEkIk7USAY35lz9Dlpi0yOjxx57WHCIStq2SJWFovgDxVmIXImG2Mg7Gt3zFuH9ZjuYQAJZERXZAFllUK4gpMHJUFPbTMzSddDyE835ZZEatARIAGehZU589unL92tHV68dHV21ckyIEltADkpnIrWGGHu8xNFryYf/hc670/XxLAb+WHIwgTLUMARDIjdVvvJL0pMdffO3R6yvX59x8buMjk220nGZ7+FCwGIc/2YHd27JQ9NVXcFit8DU2ca2yWHlb7ttv4nD2DvzcVjw7kMg+Tenfv7F6Y+7o6g0gmJhjq/jEH/0mPrlDuTno7urGiHRVVanPlzk65Os+wPWQWdVnIpLwwrxByBJjqzbo6JO2WLXd6Ze2YmRnbsYJnx8NNXXwVLnR0X56VhjStsAJZG/dhIvtJaq7GVRiTdJCcUINIidrKwK+VphLLKj1tKG+7iTsZhdOn+xICqa/P8THSARz59d6rlGR7Uw9YisEO1oSH7y6Fr6mFgiGCg4wVWur3bgyLMLjdMPX7FOFCYUGuWWuhUwJQWSJSSlZRRaF15SssW97FgqOHEMFq42DEAyV6O8LocJcjtqaE7zN29SO9uBJRZigP4A83Q7lJSaxtSmAMEeiQWnH2blpSxzApB73T0zYVGKdDmhyoOvsOUWYL3TZGDpepARSMS8IylBlkf1x57dm4M4t/POXGBt077ZMWPTlCSFqXAF0nu3iEyO/mXndXV49bfK+5ha+QQxeGMK5znOKVqFEM5msOR5EZE/xdXqjE1yif8eC3fsZ6xStYSo04vKweHdXCoIZ7DAVW2AuYSg32blzT0IEWvxwlDfy+1iplbflvJWlGDQxYntiziB3zxOIhss5DFmGflPE3rN9R0IIVlYJT1U16l11ON/bN2OrDaLR04DOs70I9Q/wtppKV+xeAh2RrqIgLw99LQWJrRK2ZWi27TaYD+Ogbp+iRdzVfv5ZVmCIQViKDaiy190DNlZy2M6fOmEzOaZZxGG1opnlKzn9R3MHEW2fJRqsNG8Pjh46qgjicQdgLDLDqjfzibU0elHtbI0HdrbizJkedJzu4H4zNPTLRP+GBti+O6CQsgj7NQMx5u/Bt198owhi1VtjPkLqqnAq9q2tCcCqN01bht76eti//zx1EAS3PXy7d+t7kQv7yqOSNW6wJkseDmbvVZyc3VqDU2334kUodAGGgjJuqYkYY4fdZEd1pffeUjNUoO14G+9fZbHAazuS+tKKdG9xyz2Z4DqQEzeYkrPT8hEMAlx2J66M3LMI6fCIBGNBCars9eg4NZG6WPTm2L11te3wONzaOnukO/PPGEhvVtxgkRGG9zIy4kCMhSbVNMRmtPMY461v4r8b3HUxKxkLzbh46bK222+ke4trEiQyoLuVaMC972yFWW+PC4QnAu2KIOQrpkIzWu/mXcNiGB6HC+6KagwODvG2rs4untorRPbf53QExqWXHrrds2X77Z7Md6Nhi1O++DVIp2e9RQlTFJejGZcuD6tapqe7F4ZjZWCllvgUJTubZ9SapigkVKtKBEK6f3sWCr8tmhFDAgh4W1VByBd4BlBsnp40tgaQn5PYGhMgtjWppvHhRAPfGDDj3TUvo/QHPSx6BrfTh1pPEPWuGlUQWkYueyXO/nQm1tbXF8LHmzfwk6aCNSQguDQtFeFlT4V/iQ5DdCjq6+uHr9GLmirXrEtrphKELitT9ZQYFYUPU4LgVkFwaVRkIWUYOupu4ueJuQBMLie699JJvRrEoCZHXRKqAPLimcLD6LRI6feXumyeis8GQLsTnT3IJ2iJqhYfRPZ8mpZC6YHivzZlNyMgKvn8mJ/PS0C+xkauFLEp2O1++03eR2l3ik7XvWlay1wKdBQ0KTpTFjtZoKPvfb4f+bVkxpBFoUxziBkl06RgUlFZFMpmlkwXAIYXsT9V85n5AzB5QZaTmlAFkHYUzUBENqC5YydbE6ZtkYpnFLDmbQW6VxQ+1GyLnU9NeFoGEBbWyRKrlCXh2uyTF65R7kS1qpQjdqo1YTUfwjB7fOKdItsZexlKlqN3hsPs8QV/kbMoi7Ioi5L2f5d/AbwhT5cpNaE8AAAAAElFTkSuQmCC",D5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAG4klEQVR4nO1Z61MTVxSnte0f0H4B+kGMfcir8tCgTjvtt47UWqudNkD92FqtnREcS4AW7fiAAloJggoMESw4hoolYBUSBFHjg+wGlYcOArtBpQgCyW4YSaync24Eg+yGJCydfuDMnMnm7r3n3t+ee8797Vk/v3mZl3mZl/+DjOgDoiw6/6QRXWDkfzoxALxs7LUuMfbaPqcYbivF8slEGW4rtuE97DOTnVFdwBkEMaoLcFj0ATCqC7CP1AVGzOnijUZ4lWZtn1Esr6EZfohmeXCr2IfhT1KsbS2OFbNr0ftvRxCTqvNPmhMAbW3wGsVwP9AMZ55x8aLKscRbAoBGdIGR6IkJjww3vLlUchBG1voBzfIdvgOYqhTLtxtZ6/vTwNQFRlh0/omSgwCAlyiWT6MZ7olUIJ5vOc5Bs3wKzuE3l6IBWECxXLE3i7t+9xFR77zDFeFcrnMrS1vXJKtNlmS16RMJPMEVebKQq3cG4XhWMtSc1kKNajtoVTvINbbhPQ9jp8zVMwgAgShL6FiPF60svfZG8jFTYmJR2+sTbWQ7zTD5ydydoC9SguHXWICjC8FesJD8ul5fyowlfTSqXZ4AUs7q6StLW5OUx0yAYCYDWyQmqF4LVJaWgLZwN/QdCAHrIRmcTQ2G3QmhsDM+DNLiwoniNbadSw0GLl8GfftDQXt0D1SWqYkN0ZhhLKt8BoKeUKpN2/AXU6y77HTReBu6siNh/EgQlG8LgTRFODTkRYOlKQaeXFsxRbGtQRVF+lQkhpAxXdnRxIbbbGYUP2s8FnJOCAVx1yP448g+MGTFwmCuDJQbwqC5IHra4if0kV4OQ/rn4C4UREPKF2EwlCcjNiqPZBCbrnN0PhgjSputW2Z/YoscdsYeC7RkfgiDKhnsWB8OfTVyURAT2l21HNhqOfDNzv/mGjkZO6SSQUvmR9O22CQQlmNm5RWT2bZOCET9hRaSibhDQcQTnoBw1ftn5ECpl5FrViuHlA1hwKmCoFq1g9gWfHAMv8ZnIMiHhIxWlxeRDFSeGAIXD4tvJ3c62hgzCaYpfxmcSAwmNqt/LxaOFYav8AkEMlSa4QeFjNYWZ5DshEHrCwhXz/ScloPj6gpii8uXQU1RhkgG44c8Yc3ThOq1BgsZ1KgL4d7BpSTFns/zzRuu2vvncvKrz42CurQlxDbOITT3jR7Lu14DwXcHIWN6wy0YyFlEzgShFOutDjfEwECdnGy1PQmhMJC9CBqutIukYttaydJuraYCHucHQXrc7LaVq5rKnLGSrggntmsry0UCnvveayA0y6e+aOhK59+g3ZdAgjI9XnogP8eFOwN+30a40tEvBCbFZyB3+segb3gcWs3PMlaFes6ApMe/5wRSUSp20nsPBN/acLDjn6eAgmDwP2YVAkTCrdXqsrXg6ELQFmdKt7Umgn3Y5iBgbvePkZO3Sp0HgwfekizYe6rk8LAuhgT73oRQGDz4NpxS5wsSSd+CXST9ojZnryMsFgngbIEYS5ze0B2MhvqfgqE5Z70ogfQp/dqpjcvMnZV8R3fHVLZLd0P9Lx9LciAy1cuJ4oGY+lUYORB1u1eTOQRY8IDXr8Djxi+j7FScw0HFgZ36Gjp6OqcYPW+goC1nJaHiyGJ9ATFyPgaoY87DsDEvGk4mhUBbzipoNJikoyh2o2I7gphQ8+3T0wxfKPgOxguCCOFDFusNiL5a+WSmQjaMdB5tNeVvFt1WJob3/l19/Loi0k4p7E6PJDx90SOoVWUl0JS1nlBwpOLIYj0FwjXHTIIgND53MTRlbSA2hYFwTCPAK14DIWBM8RF2SpHYfUefgcb6DXHTJrhId8Hd7KUwlCsjnkEWi/t9JiDYB7eT88VqMdzNjiC2aBFv0Kx1s99sBZ8EzfA3hSbAikhV4X7QZccRaoFUHBMAEkBMpy8CwDbMThjYGBOPDwdBfZYCThXuF62uUAzfJsmrLgpWAJ8VzwQnu941BH/tWg2dGWEkmyGLFSs+4D3s05kRTsa4rXkxnIPqHVvpJ6UgPRB3PQ8N19rhcvsDOHdgE3RkREJnppNuuCq24b2zv20ifXGMO5sUw//oJ7V4WqCrb24BQ/t9uHSzBzR7vgHt8QKoOZ4Pmr3fwuUbvWBou0f6zGSHYrlChzF+jZ1SWBxGxeyqiyIlU4+qjRNbTujaExAagAUIgABpifO8uuiNZ7AC6C5mfFaGc8zJdnInWAHEjCIVCIrhb0ke2F7VvczWLXhg+Q4Cx1o3S5ZifS1uo+AiKNb2Kc3wJyiGf+jB03+I3AlrVT6f2FIWt8ViqPWe5R38pojemvgY6ry2rcV7c/4hx5vi9oyd52Ve5mVe/OZA/gVUmO1hSjgNggAAAABJRU5ErkJggg==",v1=({toggleTheme:e,isDarkMode:t})=>l.jsx(U5,{onClick:e,children:l.jsx(W5,{isDarkMode:t,children:l.jsx("img",{src:t?F5:D5,alt:"Toggle Icon"})})}),M5=dt`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
`,_5=dt`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`,U5=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: 100%;
`,W5=f.div`
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
    animation: ${e=>e.isDarkMode?dr`
            ${M5} 0.8s forwards
          `:dr`
            ${_5} 0.8s forwards
          `};
  }
`,w1=()=>{const{i18n:e}=q(),t=i=>{e.changeLanguage(i)},n=()=>{const i="fr";e.changeLanguage(i)},r=e.language==="ka";return l.jsxs(H5,{children:[" ",l.jsxs("button",{onClick:n,children:[" ",l.jsx("img",{src:c1,alt:"FrenchFlag"})," "]}),r?l.jsxs("button",{onClick:()=>t("en"),children:[" ",l.jsx("img",{src:Ap,alt:"EnglishFlag"})," "]}):l.jsx("button",{onClick:()=>t("ka"),children:l.jsx("img",{src:kp,alt:"GeorgianFlag"})})]})},H5=f.div`
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
`;/*! js-cookie v3.0.5 | MIT */function ls(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var V5={read:function(e){return e[0]==='"'&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function Ud(e,t){function n(i,o,s){if(!(typeof document>"u")){s=ls({},t,s),typeof s.expires=="number"&&(s.expires=new Date(Date.now()+s.expires*864e5)),s.expires&&(s.expires=s.expires.toUTCString()),i=encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var c in s)s[c]&&(a+="; "+c,s[c]!==!0&&(a+="="+s[c].split(";")[0]));return document.cookie=i+"="+e.write(o,i)+a}}function r(i){if(!(typeof document>"u"||arguments.length&&!i)){for(var o=document.cookie?document.cookie.split("; "):[],s={},a=0;a<o.length;a++){var c=o[a].split("="),u=c.slice(1).join("=");try{var d=decodeURIComponent(c[0]);if(s[d]=e.read(u,d),i===d)break}catch{}}return i?s[i]:s}}return Object.create({set:n,get:r,remove:function(i,o){n(i,"",ls({},o,{expires:-1}))},withAttributes:function(i){return Ud(this.converter,ls({},this.attributes,i))},withConverter:function(i){return Ud(ls({},this.converter,i),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(e)}})}var jp=Ud(V5,{path:"/"});const Q5=()=>({isLoading:!1,error:null,user:null,isAuthenticated:!!jp.get("authToken")}),Us=ae("auth/loginUser",async e=>{try{const t=await le.post("/auth/login",e);console.log("response data in login slice",t.data);const{accessToken:n}=t.data;return jp.set("authToken",n),t.data}catch(t){throw new Error(`Failed to register user:
 ${t.response.data.message}`)}}),Gr=ae("auth/logoutUser",async e=>{try{await le.post("/auth/logout",{id:e}),jp.remove("authToken");return}catch(t){throw t}}),G5=Q5(),q5=Pe({name:"auth",initialState:G5,reducers:{},extraReducers:e=>{e.addCase(Us.pending,t=>{t.isLoading=!0}).addCase(Us.fulfilled,(t,n)=>{t.auth=n.payload,t.isLoading=!1,t.isAuthenticated=!0}).addCase(Us.rejected,(t,n)=>{t.error=n.error.message}).addCase(Gr.pending,t=>{t.isLoading=!0}).addCase(Gr.fulfilled,t=>{t.auth=null,t.isAuthenticated=!1,t.isLoading=!1,t.error=null}).addCase(Gr.rejected,(t,n)=>{t.isLoading=!1,t.error=n.error.message})}}),K5=q5.reducer,Wd="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACZElEQVR4nO2ZPWtUQRSGHxNdiaZQxEpIndhpq6CNJloIJkgKg4VoERQtoiR+INFGC8mfkGisxcq/EPwKiPErWgQLCwUXRaO54cB7YVgkubOz7owyDwwsd89575mvO2dmIJP5Z6gBw8A94CVQV7Hfd/Wf2STNMeAdUKxR3gJDJEgnMOUE+hg4C/QBm1X69OyJY3dbvskwpcC+AyeBdavYdgCnZFtWJpnhVADfgD0efnudygwSmZozJ6wnfDkt3zexPwDDzpywIeOL+TyVhvVsNGYUxJkAjXPSmCYi8wqiN0BjpzRsnYnGVwXRHaDRLQ3Tika5HqSi0zS5Ig3kHmkVeWilNrS+KIAtARpbpfGZiDxXELsCNHZLw9L7aEwriAsBGhelcYeIHFIQ8wFJ4ytpDBCRTqXgFsh4E/4T8n2dwk5xP7AM/PBsVbP9CfwG9pEIN9SyS8BoBftR2ZrPdRJj3GM9KO1ukSiFZ0WSpcgVSYzif+iR7c4h3VqU51nbSIwBYEHBPahg/9BZCPuJTA0YAWadoWJnVDsq+PYALxy/WWnVaCM2HC4Bi04gH4ExYKOHzibgKvDJ0VmU9l8dctZa5509SJks2rOuAF2r/AlgztG1o6HJQN0/crDh3uORnq126u6LafVLu3zPB+Bwq15wRYldoVZrx+Q8ADzTO5fVO0FMSuwXcK3NqXYHcNlJLm82K3RErbGkU/dYDCrdt1iONjOxFwI2TK1mTLG89/1EH5ejTfANxGe9LlALrTeVuS8n2zCltnmb8XEqax89fWhIg8prusrUK9yVxyp1n4oUiZdMJoMfK+YhJaCnoLnkAAAAAElFTkSuQmCC",Y5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNklEQVR4nO3aMU4DMRCF4R8KWiRofRHEwWi3gcBNOEEaxAEoAhR0tCzXcGTJkdAqGzyJgt4MfpJLS/NpdtdrywBnwAPwDWSRMQKLWltz7gUKnxt3FshYJ12hk+sfnWnORq+WbK2rQ46c3Dsiltw7IpabKB0pGQgCMaVDjphHYAmce+/Iqtb0YsEoQhLwWesqqAuvkL0wqpAp5vU3jDLEhFGHbMNc4hTShPECmWLephhPkJ0Yb5BZzCGQE+Bd4NhodSjktL547iFhHi2pz3B2BEm71hIvkBRhQUwt/1vqkNT6O68MSZY9iSokRdhYpShb3Y8ohw/PwFOE46C90iF/kCFCRwZrXaqQ3CFiyb0jYsn/tiNjnVAusqhdqvmyTFoIHOfMjVsLpFzuKphNZxRG6URBNF88WwOccZGxk5w4qAAAAABJRU5ErkJggg==",Ep=({handleLogout:e})=>{const{t}=q();return l.jsx(J5,{onClick:e,children:l.jsxs("button",{children:[t("Se déconnecter"),l.jsx("img",{src:Y5,alt:"LogoutIcon"})]})})},J5=f.div`
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
`,X5=()=>{var h,p;const{t:e}=q(),t=ne(),n=_(y=>y.auth.isAuthenticated),r=_(y=>y.auth.isLoading),i=_(y=>y.auth.auth)||{},o=(h=i.user)==null?void 0:h.username,s=(p=i.user)==null?void 0:p._id,[a,c]=b.useState(!1),u=()=>{c(!a)},d=()=>{t(Gr(s))};return r?l.jsx(Be,{}):l.jsxs(Z5,{onClick:u,children:[l.jsxs(gg,{children:[l.jsx(oP,{src:Wd,alt:"User Icon",isConnected:n}),l.jsx(sP,{isConnected:n}),l.jsx("span",{children:n?o:e("Pas connecté")}),l.jsx(tP,{onClick:u,children:"▼ "})]}),l.jsx(nP,{children:a&&l.jsx(rP,{children:n?l.jsxs(l.Fragment,{children:[l.jsx(ru,{children:l.jsxs(iP,{to:"/profile-page",children:[e("Profil"),l.jsx(gg,{children:l.jsx("img",{src:Wd,alt:"User Icon"})})]})}),l.jsx(Ep,{handleLogout:d})]}):l.jsxs(l.Fragment,{children:[l.jsx(ru,{children:l.jsx(Hn,{to:"/register",children:e("Inscription")})}),l.jsx(ru,{children:l.jsx(Hn,{to:"/login",children:e("Connexion")})})]})})})]})},Z5=f.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`,eP=dt`
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
`;const tP=f.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
`,nP=f.div`
  position: relative;
`,rP=f.ul`
  position: absolute;
  top: 30px;
  right: 50%;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  list-style: none;
  padding: 0;
  margin: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,ru=f.li`
  padding: 10px;
  cursor: pointer;
  width: 100%;
`,iP=f(Hn)`
  display: flex;
  background-color: #e0fcdb;
  gap: 2rem;
  cursor: pointer;
`,gg=f.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  width: 140px;
  /* outline: 1px solid blue; */
  font-size: 0.8rem;
  background-color: ${e=>e.theme.tertiaryBackground};

  @media (max-width: 520px) {
    width: 100px;

    > span {
      visibility: hidden;
      height: 0;
      width: 0;
    }
  }
`,oP=f.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-right: 10px;
  background: white;
  outline: 1px solid ${e=>e.isConnected?"green":"red"};

  padding: 0.4rem;
  margin: 0.2rem;
`,sP=f.div`
  position: absolute;
  bottom: 12%;
  left: 28%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  animation: ${eP} 1s infinite;
  background-color: ${e=>e.isConnected?"green":"red"};
  @media (max-width: 520px) {
    left: 40%;
  }
`,Ws=ae("user/register",async e=>{try{return(await le.post("/register",e)).data}catch(t){throw new Error(`Failed to register user:
 ${t.response.data.message}`)}}),b1=rn("user/updateUserData"),Hs=ae("user/FetchupdateUser",async({id:e,newUsername:t},{dispatch:n})=>{try{const r=await le.post("/auth/update-username",{id:e,newUsername:t}),i=r.data;return n(b1(i)),r.data}catch(r){throw new Error(`Failed to update username: ${r.response.data.message}`)}}),aP={user:"user",isSuccess:!1,isLoading:!1,error:null},lP=Pe({name:"user",initialState:aP,reducers:{updateUserData:(e,t)=>{e.user=t.payload}},extraReducers:e=>{e.addCase(Ws.pending,t=>{t.isLoading=!0}).addCase(Ws.fulfilled,(t,n)=>{t.user=n.payload,t.isSuccess=!0,t.isLoading=!1}).addCase(Ws.rejected,(t,n)=>{t.error=n.error.message}).addCase(Hs.pending,t=>{t.isLoading=!0}).addCase(Hs.fulfilled,(t,n)=>{t.user=n.payload,t.isSuccess=!0,t.isLoading=!1}).addCase(Hs.rejected,(t,n)=>{t.error=n.error.message}).addCase(b1,(t,n)=>{t.user=n.payload})}}),cP=lP.reducer,uP="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACZElEQVR4nO2ZPWtUQRSGHxNdiaZQxEpIndhpq6CNJloIJkgKg4VoERQtoiR+INFGC8mfkGisxcq/EPwKiPErWgQLCwUXRaO54cB7YVgkubOz7owyDwwsd89575mvO2dmIJP5Z6gBw8A94CVQV7Hfd/Wf2STNMeAdUKxR3gJDJEgnMOUE+hg4C/QBm1X69OyJY3dbvskwpcC+AyeBdavYdgCnZFtWJpnhVADfgD0efnudygwSmZozJ6wnfDkt3zexPwDDzpywIeOL+TyVhvVsNGYUxJkAjXPSmCYi8wqiN0BjpzRsnYnGVwXRHaDRLQ3Tika5HqSi0zS5Ig3kHmkVeWilNrS+KIAtARpbpfGZiDxXELsCNHZLw9L7aEwriAsBGhelcYeIHFIQ8wFJ4ytpDBCRTqXgFsh4E/4T8n2dwk5xP7AM/PBsVbP9CfwG9pEIN9SyS8BoBftR2ZrPdRJj3GM9KO1ukSiFZ0WSpcgVSYzif+iR7c4h3VqU51nbSIwBYEHBPahg/9BZCPuJTA0YAWadoWJnVDsq+PYALxy/WWnVaCM2HC4Bi04gH4ExYKOHzibgKvDJ0VmU9l8dctZa5509SJks2rOuAF2r/AlgztG1o6HJQN0/crDh3uORnq126u6LafVLu3zPB+Bwq15wRYldoVZrx+Q8ADzTO5fVO0FMSuwXcK3NqXYHcNlJLm82K3RErbGkU/dYDCrdt1iONjOxFwI2TK1mTLG89/1EH5ejTfANxGe9LlALrTeVuS8n2zCltnmb8XEqax89fWhIg8prusrUK9yVxyp1n4oUiZdMJoMfK+YhJaCnoLnkAAAAAElFTkSuQmCC",S1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABtElEQVR4nO2ZSy8EQRDHfwf2YuNxdcYeBXvBF7CREB/G4+59JI74IBaJT0GcBOvGxeNGSSU1stnYZCZmegr9SyqZpKeru/pf3dNbC5G/Tw1YBU6BS+DFTJ+bwAowhmPqwBkgKU0DncIRvcAB8GETfAQOgQVTp89MnxeBI3tHrM8+0FN2EEPAuU3qFVgH+lP003c2gLc2dQYpUYkkle4ttbIyDtyYjwugQgkc2ARugeEf+NG+d+Zrj8DULb81nSZy8DdpafZuz8FIUkr3RF5smk89ooNQazud0mzstAwAT+Z7lACs2WB6xObNsfleJgBNG0y/CXmzZL5PCMC1DTZSYNpeEYBnG6xagO+q+dYxCie5K/1W/1/EQFIiUZGMxNQqY6EqwC7wkOEXX9HWArazXvV3HExcuthWlkBa1mkaP8y0KePvCMyIZJ1XDKRgJCriDImKOEOiIs6QqEgH81bn1RJno4R2yUuRpEab1HxDt0sMpIOGrZqu1lwJ7RI3uzMkKuIMiYo4Q6IizpB/q0jLOmgtyQuzNie9VKZm20FFUbqY/o2dGq2vajCJMh5MldAgvq39fgLrDI6q0s9yGAAAAABJRU5ErkJggg==",k1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB7UlEQVR4nO3YT6hNURTH8Y/nP+UlQoT0CgMGDKSkSCkpSSmlGChTQ6NXeiNTQwO9kjJRMjFgQErKSzJhQAyI/Mn//3/e0a316vS69/Z679x7zzntb+06nb322nuf3W+vtQ6JRCKR6BFZTZrabaSqZLXdyIDqMdBsI5+wX3XYg/etxD6K0+hTXqbhJP61EvtgrvMK+pWP/lhbFmsdbCX2/HE9xgblYR0eNpFBy1trFUbi3Rcc1Hv24WOs6cG4i6nt9TsHw7m+s5ip+0wPzY7GOi5i/mTiyHH8jv6bWKp7LMK1mPtPCHxKAXE7XoXNc2zReTbhacz5FruKiuwrcCfsfuKYznEY32Kue1hddIoyG2fG6WaW4pgRehjzfx5zO5lrHcH3GHMby02dJbiRO/GGNruSNG7Gsxj3BjtNnm14Gb5eYGu3s9/FuD6BW6UdjS//K3zcwrJepfHj7/kLmDeBcY04da6gOJUVWY8cwtfwcx9r2tiuxN2w/YGjZSus1uNR+HqH3U1sduB12DzBxrJWiAtwOfz9xakoCRqp94nQUqPvKhaWvdTtw1BON5eijdU7QwXXO1mna/a9+JDz/xkHqvrzYW2UBCPx3Amy2v5FqSpZ2kjJyNKJlIwsnUjJyGp7IlnFm9psJJFIJBK6zX+RmLvdeUFJ9AAAAABJRU5ErkJggg==",Eo=({error:e})=>l.jsx(dP,{children:l.jsx(fP,{style:{whiteSpace:"pre-line"},children:e})}),dP=f.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  border-radius: 8px;
  margin: 20px 0;
  background-color: ${e=>e.theme.secondaryBackground};
`,fP=f.p`
  font-size: 18px;
  font-weight: bold;
  color: #c62828; /* Use a suitable text color for error */
`,pP=()=>{Ue();const{t:e}=q(),t=ne();_(S=>S.user.isLoading);const n=_(S=>S.user.isSuccess),r=_(S=>S.user.error),[i,o]=b.useState(""),[s,a]=b.useState(""),[c,u]=b.useState(""),[d,h]=b.useState(""),p=b.useRef(null),y=b.useRef(null),x=S=>{if(S.preventDefault(),console.log("password before if",s),s===""||s.length<5){console.log("password in if",s),alert(e("Le mot de passe doit comporter au moins 5 caractères"));return}t(Ws({username:i,password:s,email:c}))},v=()=>{u(""),a("")};return b.useEffect(()=>{r&&(v(),p.current.focus())},[r]),l.jsxs(A1,{children:[r&&l.jsx(Eo,{error:r}),d&&l.jsx(Eo,{error:d}),n?l.jsx(l.Fragment,{children:l.jsxs("p",{children:["Registration successful ",l.jsx(Ee,{to:"/login",children:"Login"})]})}):l.jsxs(hP,{onSubmit:x,children:[" ",l.jsx("h2",{children:e("Inscription")}),l.jsxs(Xi,{children:[l.jsx("input",{type:"text",placeholder:e("Pseudonyme"),value:i,onChange:S=>o(S.target.value)}),l.jsx("img",{src:uP,alt:"userIcon"})]}),l.jsxs(Xi,{children:[l.jsx("input",{type:"email",placeholder:e("E-mail"),value:c,onChange:S=>u(S.target.value),ref:p}),l.jsx("img",{src:k1,alt:"emailIcon"})]}),l.jsxs(Xi,{children:[l.jsx("input",{type:"password",placeholder:e("Mot de passe"),value:s,onChange:S=>a(S.target.value),ref:y}),l.jsx("img",{src:S1,alt:"passwordIcon"})]}),l.jsx(C1,{type:"submit",children:e("Inscription")}),l.jsxs(Tp,{children:[e("Avez-vous déjà un compte?"),l.jsx(Kl,{to:"/login",children:e("Connexion")})]})]})]})},A1=f.div`
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
`,hP=f.form``,C1=f.button`
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
`,Xi=f.div`
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
`,Tp=f.div`
  margin: 10px 0;
  font-size: 1rem;
  color: ${e=>e.theme.primaryText};
`,Kl=f(Ee)`
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
`,mP=f(Kl)`
  font-weight: normal;
`,gP=[{title:"Grammaire",link:"/grammar/basic-grammar-lessons",subItems:[{title:"Sub-Item 1",link:"/sub-item-1"},{title:"Sub-Item 2",link:"/sub-item-2"}]},{title:"Vocabulaire",link:"/vocabulary/vocabulary-topics",subItems:[{title:"Entraîneur de cartes mémoire",link:"/vocabulary/flashcards"},{title:"Exercice d'articles",link:"/vocabulary/exercise-article"},{title:"Exercice de temps des verbes",link:"/vocabulary/verb-tense-exercise"},{title:"vocabulary/sentence-builder",link:"/vocabulary/exercise-article"}]},{title:"Livres",link:"/reading-zone/french-easy-reading"},{title:"Dictionnaire",link:"/dictionary"}],xg=()=>{const e=localStorage.getItem("grammerData");return e?JSON.parse(e):null},Vs=ae("grammer/fetchGrammer",async()=>{try{const t=(await le.get("/grammer/basic-grammer")).data;return localStorage.setItem("grammerData",JSON.stringify(t)),t}catch{throw Error("Failed to fetch grammer lessons")}}),Qs=ae("grammer/fetchAllAspectsData",async()=>{try{const t=(await le.get("/grammar/getAllAspects")).data;return localStorage.setItem("grammerData",JSON.stringify(t)),t}catch{throw Error("Failed to fetch grammer lessons")}}),Gs=ae("grammer/fetchByAspect",async e=>{try{return(await le.get(`/grammar/${e}`)).data}catch{throw Error("Failed to fetch grammer lessons")}}),xP={quizData:[],allAspectsData:xg()||[],topicsByAspect:{},isLoading:!1,error:null,grammer:xg()||[]},yP=Pe({name:"grammer",initialState:xP,reducers:{},extraReducers:e=>{e.addCase(Vs.pending,t=>{t.isLoading=!0}).addCase(Vs.fulfilled,(t,n)=>{t.grammer=n.payload,t.isLoading=!1}).addCase(Vs.rejected,(t,n)=>{t.error=n.error.message}).addCase(Gs.pending,t=>{t.isLoading=!0}).addCase(Gs.fulfilled,(t,n)=>{t.topicsByAspect[n.meta.arg]=n.payload,t.isLoading=!1}).addCase(Gs.rejected,(t,n)=>{t.error=n.error.message}).addCase(Qs.pending,t=>{t.isLoading=!0}).addCase(Qs.fulfilled,(t,n)=>{t.allAspectsData=n.payload,t.isLoading=!1}).addCase(Qs.rejected,(t,n)=>{t.error=n.error.message})}}),vP=yP.reducer,j1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEZUlEQVR4nO2Z+W9UdRTFX1t3/UFjVGpKp53vPed+ZxortRgDitVAiIobAmJEZAlSjRSlRo0Yo8EFEcUlBEEFBOMWlxCMRv3rzEm+NWZC8pZ5nWrs/W2WzPuc97733GWybDEWYzFqCTO7tNFoXN1oNJaMjIw0xsbGgrs7gBbJ2Gq14O4jo6OjN4yPj1+Z/UtiQNAhhKUkR80sNJtNxBgpaDNrhxDG3P0mADcDWBZCuMXdl+t1CGFpu92+ZCHA+4eHh68RgO5qWXiStwK4LYSwIsa4IoRgk5OTF/eEfHBw8Ap3v7HZbA53C+/uK0neAeDOEMLKZrN5/bzC67iY2VDd8GY25e53k1ytnMmyrK9u9r4Y47U9gF9jZmtjjJPKr9roewlP8h6S9+r7yrX/yrFZ0wG/zsweIDnedcIuFLy7P0jyYV2/Kn9/UbfRhc1sJ4DdZvaMu+8lOevuz5nZFoFXgQfwiF6rSJaml8+XuPPL3H3TP+HN7KUQwn6Sr5F8PoRwVwX4DfrdlNSlYqBskWo2m8vdfUcnvLsfIPmORFSBJ7mZ5KOl2g8lbsUzf7ueQCe8ux8C8AHJZ8vCA3jMzB43s4nCApQ4VRNWgABeuQD8RwCOApguC0/yCXffUKjAKWG6dZsE9FYnPMnjJD9z9+1l4EluBbDNzK4rdHzqsEp339IJD+BzkqcBnAwhbC0Jv6NQXVA/X5fPA9hzAfizJL8xs9OCLArv7jtlALkCNIzUWaQA7O+EB/A9yR9JnhR0QfhdZrYxV4AmqTorLID7ABzqhHf3cwDOxxhPCDwPXkVS7+UK0Bg4D+3BejM73gnv7r8B+EN5UgB+Osa4O1eA+vG6exudcwCy1ffS0zgoizWzt0m+aWb78uBJqso/nStAx6dO+BCCnOZ1d/8QwBGS75M8nMS8qxwReB68iqDeyxWg7UHNXeWryYk+Ifmxjou7H5HFuvsBAE8WgZejqTEskgMjdcGrJyKpJP0UwLFUiefEHE6wheAB7NXv5grQ3qYOeAAzJE+paKn6SkiqB8ckQJAsAa9mUDy5AtT1dQsfY9xF8oyZnUn+f0qen+rBCXefqQC/r91uL8mKRMqBqmOgwM6amTz/awBfJTFfSgzJl6vAA3iq8LZCs0BF+M2pYP0gzwfwHclv54QAeKMi/AsAVmVFQ+s+bcxKHpv1AL4AcI7kzypYAP4Wkiy0EjzJ2Xa7fVVhAekpWIk7/5CchuSvAH4heX5OiJn9lFxoW8U7/6Kum5WNqampi7TuKzIGprb5TwC/qz2QEIlIx+dg6v8rwbv7zNDQ0OVZldCussoMW7Axy4UnqToSs25CvdFCwZvZ2qyG6Gu1WhO9hnf3TbWsFlMMqLD1EH7jfPxf0K+ZtEfHpj+br9DKxczurxs+xrin64QtWegmtTHrFp7krFyu0WhclvU60vZ6Ik1cZeH1+arSFXaeok9Lp5Qjq7U9ALDd3ac1BqaNglYo62QGqaus/W+kxViM/2P8Bcap0NYmk0C/AAAAAElFTkSuQmCC",wP=({allAspectsData:e})=>{const{t,i18n:n}=q();gi();const[r,i]=b.useState({}),o=a=>{switch(n.language){case"fr":return a.titleFr;case"ka":return a.titleGeo;case"en":return a.titleEng;default:return a.titleFr}},s=a=>{i(c=>({...c,[a]:!c[a]}))};return l.jsxs(T1,{children:[l.jsx(O1,{children:l.jsx(To,{to:"/grammar",children:t("Grammaire")})}),e&&e.map((a,c)=>{const{_id:u,titles:d,subtopics:h}=a,p=r[u];return l.jsxs(L1,{children:[l.jsxs(P1,{onClick:()=>s(u),children:[l.jsx(To,{to:`/grammar/${u}`,children:l.jsx("span",{children:t(u)})}),l.jsx(kP,{children:p?"▲":"▼"})]}),l.jsx(AP,{show:p,children:d==null?void 0:d.map((y,x)=>l.jsxs($1,{children:[l.jsx("img",{src:j1,alt:"ArrowRight"}),l.jsx(_a,{to:`/grammar-basic/${h[x]}`,children:o(y)})]},x))})]},u)})]})},bP=({vocabularyAspects:e,toggleSubSection:t,isSubSectionOpen:n})=>{const{t:r}=q();return l.jsxs(T1,{children:[l.jsx(O1,{children:l.jsx(To,{to:"/vocabulary",children:r("Vocabulaire")})}),e&&(e==null?void 0:e.map((i,o)=>l.jsx(L1,{children:l.jsx(P1,{children:l.jsx(To,{to:`${i.link}`,children:l.jsx("span",{children:r(i.title)})})})},o)))]})},E1={fr:[{title:"Vocabulaire par thèmes",question:"Voulez-vous apprendre les bases de la vocabulaire ?",description:"Explorez les leçons fondamentales de vocabulaire pour construire une base solide.",link:"/vocabulary/vocabulary-topics"},{title:"Exercice d'articles",question:"Voulez-vous pratiquer les genres des mots français ?",description:"Entraînez-vous à choisir le genre correct des mots en français.",link:"/vocabulary/exercise-article"},{title:"Exercice de temps des verbes",question:"Voulez-vous pratiquer les temps des verbes en français ?",description:"Entraînez-vous à choisir la forme correcte des verbes en français.",link:"/vocabulary/verb-tense-exercise"},{title:"Flashcards",question:"Voulez-vous pratiquer avec des flashcards ?",description:"Utilisez des flashcards pour renforcer votre vocabulaire en français.",link:"/vocabulary/flashcards"},{title:"Construire des phrases",question:"Voulez-vous pratiquer la construction de phrases ?",description:"Entraînez-vous à construire des phrases en français.",link:"/vocabulary/sentence-builder"}],eng:[{title:"Vocabulary By Topics",question:"Do you want to learn the basics of vocabulary?",description:"Explore fundamental vocabulary lessons to build a strong foundation.",link:"/vocabulary/vocabulary-topics"},{title:"Article Exercise",question:"Do you want to practice French word genders?",description:"Practice choosing the correct gender for French words.",link:"/vocabulary/exercise-article"},{title:"Verb Tense Exercise",question:"Do you want to practice verb tenses in French?",description:"Practice choosing the correct verb tense forms in French.",link:"/vocabulary/verb-tense-exercise"},{title:"Flashcards",question:"Do you want to practice with flashcards?",description:"Use flashcards to reinforce your vocabulary in French.",link:"/vocabulary/flashcards"},{title:"Sentence Builder",question:"Do you want to practice sentence construction?",description:"Practice building sentences in French.",link:"/vocabulary/sentence-builder"}],ka:[{title:"ლექსიკის ტოპიკები",question:`გინდა გაიმდიდრო ლექსიკის მარაგი? 
მაშინ ეს განყოფილება შენთვისაა.`,description:"ამ განყოფილებაში დაგხვდება ლექსიკის ყველა აუცილებელი თემა.",link:"/vocabulary/vocabulary-topics"},{title:"არტიკლის სავარჯიშო",question:`გერევა არსებითი სახელების სქესი? 
მაშინ ეს განყოფილება შენთვისაა.`,description:"ამ სავარჯიშოს საშუალებას მოგცემს გამოცადო შენი ცოდნა..",link:"/vocabulary/exercise-article"},{title:"ზმნების დროები",question:`გინდა დაუფლო ზმნების სწორ ხმარებას სხვადასხვა დროში?
მაშინ ეს განყოფილება შენთვისაა.`,description:"ამ სავარჯიშოს მიზანია დაგეხმაროს ზმნის სწორი ფორმის შერჩევაში სხადასხვა დროში.",link:"/vocabulary/verb-tense-exercise"},{title:"შენახული სიტყვები",question:`გინდა კარგად ისწავლო შენახული სიტყვები?
მაშინ ეს განყოფილება შენთვისაა.`,description:"ამ განყოფილებაში დაგხვდება სხვადასხვა სავარჯიშო არჩეული სიტყვების კარგად სასწავლად.",link:"/vocabulary/flashcards"},{title:"წინადადების შედგენა",question:`გინდა ივარჯიშო წინადადების სწორად შედგენაში?
მაშინ ეს განყოფილება შენთვისაა`,description:"ამ სავარჯიშოში წინადადები არეულადაა მოცემული და შენი მიზანია სწორად დაალაგო ისინი.",link:"/vocabulary/sentence-builder"}]},SP=()=>{const e=ne(),{t,i18n:n}=q();n.language;const[r,i]=b.useState({}),o=_(a=>a.grammer.allAspectsData)||[];_(a=>a.grammer.isLoading),_(a=>a.grammer.error),b.useEffect(()=>{e(Qs())},[e]);const s=a=>r[a];return l.jsxs(l.Fragment,{children:[l.jsx(bP,{vocabularyAspects:E1[n.language],isSubSectionExpanded:r}),l.jsx(wP,{allAspectsData:o,isSubSectionOpen:s})]})},T1=f.div`
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
`,L1=f.div`
  /* margin-bottom: 20px; */
  border-bottom: 2px solid ${e=>e.theme.tertiaryText};
  padding-bottom: 1rem;
`,O1=f.h2``,To=f(Ee)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${e=>e.theme.primaryText};
  margin: 0.2rem;
  padding: 0.2rem;
`,kP=f.span`
  margin-left: auto;
  cursor: pointer;
`,AP=f.div`
  display: ${e=>e.show?"flex":"none"};
  flex-direction: column;
  justify-content: center;

  background-color: ${e=>e.theme.primaryBackground};
`,P1=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* border-bottom: 1px solid ${e=>e.theme.tertiaryText}; */
  padding: 0.3rem;
`,$1=f.li`
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
`,_a=f(To)``,CP=({isDarkMode:e,t,toggleTheme:n})=>{var v,S;const r=ne(),[i,o]=b.useState(!1),s=_(g=>g.auth.isAuthenticated),a=_(g=>g.auth.auth)||{},c=(v=a.user)==null?void 0:v._id,u=(S=a.user)==null?void 0:S.username;b.useState(!1);const[d,h]=b.useState({}),p=({e:g,categoryIndex:m})=>{g.stopPropagation(),h(w=>({...w,[m]:!w[m]}))},y=()=>{o(!1)},x=g=>{g.stopPropagation(),r(Gr(c))};return l.jsx(jP,{class:"content",children:l.jsxs(EP,{id:"menuToggle",children:[l.jsx("input",{type:"checkbox",checked:i,onChange:()=>o(!i)}),l.jsx("span",{style:{background:e?"#ffffff":"#000000"}}),l.jsx("span",{style:{background:e?"#ffffff":"#000000"}}),l.jsx("span",{style:{background:e?"#ffffff":"#000000"}}),l.jsxs(TP,{onClick:y,children:[l.jsxs(OP,{children:[l.jsx(R1,{to:"/",children:"Francophoenix"}),l.jsxs(zP,{children:[l.jsx(w1,{}),l.jsx(v1,{toggleTheme:n,isDarkMode:e})]}),l.jsx("div",{children:l.jsx(PP,{children:s?l.jsx($P,{children:l.jsxs(RP,{children:[l.jsx("img",{src:Wd,alt:"User Icon"}),u]})}):t("Pas connecté")})}),!s&&l.jsxs(l.Fragment,{children:[l.jsxs(yg,{children:[l.jsx("p",{children:t("Avez-vous déjà un compte?")}),l.jsx(vg,{to:"/login",children:t("Connexion")})]}),l.jsxs(yg,{children:[" ",l.jsx("p",{children:t("Pas de compte?")}),l.jsxs(vg,{to:"/register",children:[t("Inscrivez-vous")," "]})]})]})]}),l.jsx(l.Fragment,{children:gP.map((g,m)=>l.jsxs(NP,{children:[l.jsxs("div",{children:[l.jsx("img",{src:j1,alt:"ArrowRight"}),l.jsx(_a,{to:g.link,children:t(g.title)}),g.subItems&&g.subItems.length>0&&l.jsx("span",{onClick:w=>p({e:w,categoryIndex:m}),children:d[m]?"▲":"▼"})]}),d[m]&&g.subItems&&g.subItems.length>0&&l.jsx("ul",{children:g.subItems.map((w,k)=>l.jsx($1,{children:l.jsx(_a,{to:w.link,children:t(w.title)})},k))})]},m))}),s&&l.jsx(BP,{children:l.jsx(Ep,{handleLogout:x})}),l.jsx(LP,{})]})]})})},jP=f.div`
  display: flex;
  align-items: center;
`,EP=f.div`
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
`,TP=f.ul`
  overflow-x: hidden;

  padding: 0;
  list-style-type: none;
  position: absolute;
  width: 100vw;
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
`;f(Ee)`
  text-decoration: none;
  color: ${e=>e.theme.primaryText};
  opacity: 1;
  font-family: "work sans", sans serif;
  font-size: 1.5rem;
  font-weight: 400;
  transition: 200ms;
  /* border: 1px solid red; */
  font-style: italic;
  position: relative;
  /* padding: 0.5rem; */
`;const LP=f.li`
  margin-top: 3rem;
  height: 1rem;
  background-color: ${e=>e.theme.highlight4};
`,OP=f.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${e=>e.theme.secondaryBackground};
  /* outline: 2px solid red; */
  /* margin: 0 1rem; */
  margin-bottom: 3rem;
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
`;const PP=f.div`
  padding: 1rem;
  margin: 1rem;
  width: 24rem;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${e=>e.theme.tertiaryBackground};
`,$P=f.div`
  width: 100%;
  /* background: blue; */

  display: flex;
`,RP=f.div`
  display: flex;
  align-items: center;
  gap: 8px; /* Add some space between the image and the username */
  /* background: white; */
`,zP=f.div`
  width: 18rem;
  display: flex;
  /* outline: 1px solid ${e=>e.theme.tertiaryText}; */
  margin: 1rem 0;
`,yg=f(Tp)`
  display: flex;
  flex-direction: column;
  max-width: 25rem;
  margin-bottom: 0.5rem;
  margin-left: 1rem;
  background: ${e=>e.theme.primaryBackground};
  padding-bottom: 0.5rem;
  padding: 0.5rem;
`,vg=f(Kl)`
  margin-right: 2rem;
  margin-left: auto;
`,NP=f.div`
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
  }
`;f(_a)`
  margin-left: -3rem;
  border: 1px solid red;
`;const BP=f.div`
  margin-top: 2rem;
`,IP=({toggleTheme:e,isDarkMode:t})=>{const{t:n,i18n:r}=q(),i=r.language==="ka",o=I5();return l.jsxs(FP,{isVisible:o,children:[l.jsx(CP,{isDarkMode:t,toggleTheme:e,t:n}),l.jsx(MP,{children:l.jsx(R1,{to:"/",children:"Home"})}),l.jsxs(DP,{children:[l.jsx(cs,{to:"/grammar/basic-grammar-lessons",isGeorgian:i,children:n("Grammaire")}),l.jsx(cs,{to:"/vocabulary/vocabulary-topics",isGeorgian:i,children:n("Vocabulaire")}),l.jsx(cs,{to:"/reading-zone/french-easy-reading",isGeorgian:i,children:n("Livres")}),l.jsx(cs,{to:"/dictionary",isGeorgian:i,children:n("Dictionnaire")})]}),l.jsxs(_P,{children:[l.jsx(w1,{}),l.jsx(v1,{toggleTheme:e,isDarkMode:t}),l.jsx(X5,{})]})]})},FP=f.div`
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
  background-color: ${e=>e.isVisible?e.theme.highlight2:"transparent"};
  color: white;
  transition: background-color 0.3s ease-in-out;
  border-bottom: 3px solid ${e=>e.theme.primaryText};
  padding-left: 0.4rem;
  padding-right: 0.4rem;
`,DP=f.ul`
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
`,cs=f(Ee)`
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
    animation: ${yL} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
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
`,MP=f.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  margin-left: 1rem;

  @media (min-width: 576px) and (max-width: 767px) {
  }

  @media (max-width: 767px) {
  }
`,R1=f(Ee)`
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
    animation: ${vL} 5s linear infinite;
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
`;const _P=f.div`
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
    & > :nth-child(4) 1
      display: none;
    }
  }
`,UP="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABRUlEQVR4nO2ZoU7EQBRFD/hdgwCDAwMOFHxCPRaJJeEvwCGxSCySZBMCKLD8AAIMYpFNgEc2GZJJ0zTvLZ2STe5JRnT6el9m5qQVBbH4TAArPO6GWIgNNIpTupFpIUF0Ik5MagWRWk5MagWRWk5MagWRWk5MagWRWk5MagWRWk5MagWRWk5MagWRWk5MagWRWk5MagWRWk5MagWRWk5MahXcsQp4TqMqkP8nPI02geuWH5w3wHYP+b3Q1WgMnAF1qpkCJ2lM01ydasZz5PdKW6Ml4BB4S/e+gUtgNatZAc6Bz1TzDhwDy478IjQb7QIP2fwjsNfx/A5wn9U/Afsd+cX4bbQGXABf6foVOGrZ4TZmJ3gAvGQneAWs/8dCPjLnT4HRHFmj9GzdyDQGoPkW2uohcyOdiA25kNvgdyFClbJnPQSLzA+xZBThStT1FQAAAABJRU5ErkJggg==",WP=f.div`
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
`,HP=f.div`
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
`,z1=f.div`
  height: 28rem;
  padding: 3rem;
  transition: transform 0.7s ease-in-out;
  background: ${e=>e.theme.primaryBackground};
  transform: translateY(
    ${e=>e.showDescription?"-9.8rem":"0"}
  );
`,VP=f.div`
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
    ~ ${z1} {
      transform: translateY(-9.8rem);
    }
  }
`,QP=f.img`
  width: 10.5rem;
  background-color: black;
  position: absolute;
  top: 3rem;
  left: 250px;
  z-index: 5;
  transform: translateZ(28.5px);
  border-radius: 1rem 1rem 0 0;
  object-fit: cover;
`,GP=f.img`
  position: absolute;
  border-radius: 4rem;
  top: 300px;
  left: 222px;
  transform: translateY(-15px) translateX(0px) translateZ(15px) rotateX(104deg);
`,qP=f.h2`
  font-family: "Quicksand", sans-serif;
`,KP=f.h4`
  font-family: "Open Sans", sans-serif;
  font-style: italic;
  margin-left: 2rem;
`,N1=({books:e,description:t})=>{const[n,r]=b.useState(!1),i=()=>{r(!0),setTimeout(()=>{r(!1)},500)};return l.jsxs(WP,{children:[l.jsx(HP,{children:l.jsx("img",{src:UP,alt:"BookmarkIcon"})}),l.jsxs(VP,{onTouchStart:()=>{n?i():(r(!0),setTimeout(()=>{r(!1)},500))},children:[l.jsx(QP,{src:e.poster,alt:"book-top"}),l.jsx(GP,{src:"https://raw.githubusercontent.com/atomic-variable/images-repo/e37f432405904a280858e5437ce1960753bc78a3/book-side.svg",alt:"book-side"})]}),l.jsxs(z1,{showDescription:n,children:[l.jsx(qP,{children:e.title}),l.jsxs(KP,{children:["by ",e.author]}),l.jsx("p",{children:t})]})]})},YP=({onChange:e,selectedLevel:t})=>{const{t:n}=q(),r=["Tous","A1","A2","B1","B2","C1"];return l.jsxs(JP,{children:[l.jsxs(XP,{htmlFor:"levelDropdown",children:[n("Choisir le niveau"),":"]}),l.jsx(ZP,{id:"levelDropdown",value:t,onChange:e,children:r.map(i=>l.jsx(e$,{value:i,children:n(i)},i))})]})},JP=f.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 92%;
  /* gap: 1rem; */
  /* margin: 0 1rem; */

  /* outline: 1px solid black; */
`,XP=f.label`
  text-align: center;
  width: auto;

  padding: 0.25rem 0.5rem;
  /* font-size: 1.2rem; */
  /* outline: 1px solid blue; */
`,ZP=f.select`
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
`,e$=f.option`
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
`,t$=`Découvrez les aventures d’Alex Leroc, un journaliste d’investigation français qui travaille à Bruxelles et qui vit uniquement pour son travail.
Résumé:
Le festival de Cannes rassemble, comme chaque année, les stars du cinéma et toute la presse. Naturellement, Alex Leroc y va. C’est le printemps, il fait beau sur la Côte d’Azur. Les conditions sont idéales pour la grande fête du cinéma. Alex s’intéresse à un acteur parisien et sa petite amie top modèle, un couple apparemment parfait`,wg=()=>{Ue();const e=ne(),t=_(a=>a.books.books)||[],n=_(a=>a.books.isLoading),[r,i]=b.useState(null);b.useEffect(()=>{e(Ki())},[e]);const o=a=>{const c=a.target.value==="Tous"?null:a.target.value;i(c)},s=r?t.filter(a=>a.level===r):t;return n?l.jsx(Be,{}):l.jsxs(n$,{children:[l.jsx(r$,{children:"Our Best Books"}),l.jsx(YP,{onChange:o,selectedLevel:r}),l.jsx(i$,{children:s.map(a=>l.jsx(o$,{children:l.jsx(s$,{to:`/reading-zone/french-easy-reading/${a._id}`,children:l.jsx(N1,{books:a,description:t$})})},a._id))})]})},n$=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  overflow-x: hidden;
  /* outline: 1px solid red; */
`,r$=f.h2`
  font-weight: bold;
  overflow-x: hidden;
  margin-bottom: 10px;
`,i$=f.ul`
  display: flex;
  /* outline: 1px solid blue; */
  overflow-x: hidden;

  max-width: 100%;

  flex-wrap: wrap; //when i comment this line then all books are in one line horizontally. if i add this line then one by one vertically. why?
  list-style: none;
  padding: 0;
`,o$=f.li`
  font-size: 18px;
  margin-bottom: 5px;
  overflow-x: hidden;
  /* width: 100%; */
  /* outline: 1px solid yellow; */
  /* margin: 0 1rem; */
`,s$=f(Ee)`
  overflow-x: hidden;
  text-decoration: none;
  /* outline: 1px solid green; */
  color: black;
`,a$=f.div`
  padding: 20px;
`,l$=f.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`,c$=f.ul`
  list-style: none;
  padding: 0;
`,iu=f.li`
  font-size: 18px;
  margin-bottom: 5px;
`,u$=()=>l.jsxs(a$,{children:[l.jsx(l$,{children:"A1-A2 Level Books"}),l.jsxs(c$,{children:[l.jsx(iu,{children:"Book 1 for A1-A2 Level"}),l.jsx(iu,{children:"Book 2 for A1-A2 Level"}),l.jsx(iu,{children:"Book 3 for A1-A2 Level"})]})]}),d$=f.div`
  padding: 20px;
`,f$=f.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`,p$=f.ul`
  list-style: none;
  padding: 0;
`,ou=f.li`
  font-size: 18px;
  margin-bottom: 5px;
`,h$=()=>l.jsxs(d$,{children:[l.jsx(f$,{children:"A1-A2 Level Books"}),l.jsxs(p$,{children:[l.jsx(ou,{children:"Book 1 for A1-A2 Level"}),l.jsx(ou,{children:"Book 2 for A1-A2 Level"}),l.jsx(ou,{children:"Book 3 for A1-A2 Level"})]})]});f.div`
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
`;const bg=({selectedChapter:e,totalChapters:t,onPrevious:n,onNext:r})=>{const{t:i}=q();return l.jsxs(m$,{children:[l.jsx(Sg,{onClick:n,disabled:e===0,children:i("Chapitre précédent")}),l.jsx(Sg,{onClick:r,disabled:e===t-1,children:i("Chapitre suivant")})]})},m$=f.div`
  display: flex;
  /* outline: 1px solid red; */
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  gap: 1rem;
  max-width: 90%;
`,Sg=f.button`
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
*/const g$="react-tooltip-core-styles",x$="react-tooltip-base-styles",kg={core:!1,base:!1};function Ag({css:e,id:t=x$,type:n="base",ref:r}){var i,o;if(!e||typeof document>"u"||kg[n]||n==="core"&&typeof process<"u"&&(!((i=process==null?void 0:process.env)===null||i===void 0)&&i.REACT_TOOLTIP_DISABLE_CORE_STYLES)||n!=="base"&&typeof process<"u"&&(!((o=process==null?void 0:process.env)===null||o===void 0)&&o.REACT_TOOLTIP_DISABLE_BASE_STYLES))return;n==="core"&&(t=g$),r||(r={});const{insertAt:s}=r;if(document.getElementById(t))return void console.warn(`[react-tooltip] Element with id '${t}' already exists. Call \`removeStyle()\` first`);const a=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.id=t,c.type="text/css",s==="top"&&a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c),c.styleSheet?c.styleSheet.cssText=e:c.appendChild(document.createTextNode(e)),kg[n]=!0}const y$={anchorRefs:new Set,activeAnchor:{current:null},attach:()=>{},detach:()=>{},setActiveAnchor:()=>{}};b.createContext({getTooltipData:()=>y$});typeof window<"u"&&window.addEventListener("react-tooltip-inject-styles",e=>{e.detail.disableCore||Ag({css:":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9}.core-styles-module_tooltip__3vRRp{visibility:hidden;position:absolute;top:0;left:0;pointer-events:none;opacity:0;transition:opacity 0.3s ease-out;will-change:opacity,visibility}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{visibility:visible;opacity:var(--rt-opacity)}",type:"core"}),e.detail.disableBase||Ag({css:`
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`,type:"base"})});const B1=()=>{gi();const{verb:e}=_n(),{handleListen:t,isActiveStates:n}=_e(),r=mr(),o=new URLSearchParams(r.search).get("conjugated"),s=ne(),a=_(v=>v.quizData.selectedVerbDetails)||[],c=_(v=>v.quizData.isLoading);_(v=>v.quizData.error),b.useEffect(()=>{s(Rs(e))},[s]);const{verb:u,verbEng:d,verbGeo:h,forms:p}=a,{i18n:y}=q(),x=y.language==="ka";return c?l.jsx(Be,{}):l.jsxs(v$,{children:[l.jsxs(w$,{children:[l.jsx("h1",{children:(u==null?void 0:u.charAt(0).toUpperCase())+(u==null?void 0:u.slice(1))}),l.jsx("h3",{children:x?h:d})]}),l.jsx(b$,{children:p&&(Object==null?void 0:Object.entries(p).map(([v,S])=>l.jsxs(S$,{children:[l.jsx("h2",{children:v.replace(/([A-Z])/g," $1").replace(/^./,g=>g.toUpperCase())}),l.jsx(k$,{children:l.jsx("ul",{children:S==null?void 0:S.map((g,m)=>l.jsxs("li",{children:[l.jsxs(j$,{highlight:g==null?void 0:g.french.includes(o),children:[l.jsx(A$,{children:g==null?void 0:g.french})," ",l.jsx(ql,{onClick:t(g==null?void 0:g.french),isActive:n[m],children:l.jsx(nt,{})})]}),l.jsx(C$,{children:x?g==null?void 0:g.georgian:g==null?void 0:g.english})]},m))})})]},v)))})]})},v$=f.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  /* outline: 1px solid yellow; */
  height: auto;
`,w$=f.div`
  margin-bottom: 1rem;
  /* background-color: ${e=>e.theme.tertiaryBackground}; */
  h1 {
    text-align: center;
    &:before {
      content: ${e=>e.theme.background==="#000000"?'"🔸"':'"🔹"'};
    }
  }
`,b$=f.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: space-between;
  width: 100%;
`,S$=f.div`
  margin-bottom: 1rem;
  outline: 2px solid ${e=>e.theme.secondaryText};
  background-color: ${e=>e.theme.secondaryBackground};
  margin: 1rem;
  width: 100%;

  h2 {
    background-color: ${e=>e.theme.primaryBackground};
    padding: 1rem;
  }
`,k$=f.div`
  /* margin: 1rem; */
  ul {
    list-style: none;
    li {
      width: 90%;
      margin-bottom: 1rem;
      border-bottom: 1px solid ${e=>e.theme.primaryText};
    }
  }
`,A$=f.p`
  margin-bottom: 1rem;

  &:before {
    content: ${e=>e.theme.background==="#000000"?'"🔸"':'"🔹"'};
  }
`,C$=f.span`
  margin-left: 2rem;
  color: ${e=>e.theme.secondaryText};
  padding: 1rem;
`,j$=f.div`
  background: ${e=>e.highlight?e.theme.highlight2:"transparent"};

  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${e=>e.theme.highlight1};
  padding-top: 0.4rem;
`,I1=({tooltipContent:e,index:t,conjugated:n,id:r})=>{const{t:i,i18n:o}=q(),{definition:s,english:a,georgian:c,french:u}=e;console.log({definition:s,english:a,georgian:c,french:u});const{handleListen:d,isActiveStates:h}=_e(),[p,y]=b.useState(!1);return l.jsxs(E$,{children:[l.jsxs(T$,{children:[l.jsx(O$,{onClick:d(u),children:l.jsx(nt,{isActive:h[t]})}),l.jsx(R$,{to:`/verbs/${u}?conjugated=${n}`,children:l.jsx(F1,{children:u})})]}),l.jsx(L$,{children:o.language==="ka"?c:a}),l.jsxs(P$,{children:[l.jsx("span",{children:"Add to"}),l.jsx(Do,{word:u,secondLanguage:o.language==="ka"?c:a,definition:s})]}),p&&l.jsx($$,{children:l.jsx(B1,{})})]})},E$=f.span`
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
`,T$=f.span`
  /* margin-top: 1rem; */
  padding: 0.2rem 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  /* outline: 1px solid red; */
`,F1=f.span`
  font-size: ${e=>e.theme.smallMedium};
  font-weight: bold;
  color: ${e=>e.theme.primaryText};
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
`,L$=f(F1)`
  font-style: italic;
  font-weight: normal;
  font-size: ${e=>e.theme.small};
  cursor: auto;
`,O$=f.span`
  margin-left: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`,P$=f.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  padding: 0.2rem 0.4rem;
  font-size: 0.8rem;
  background-color: ${e=>e.theme.primaryText};
  color: ${e=>e.theme.primaryBackground};
`,$$=f.div`
  position: absolute;
  top: -1000%;
  left: 40%;
  width: 350px;
  height: 400px;
  overflow-y: scroll;
  /* background-color: red; */

  z-index: 999;
`,R$=f(Ee)`
  text-decoration: none;
  /* margin-top: 1rem; */
  width: 100%;
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  color: ${e=>e.theme.primaryBackground};
`,D1=({uniqueVerbs:e})=>{const{t}=q(),n=r=>{const o=`https://conjugaison.bescherelle.com/verbes/${r.replace(/\s+/g,"-")}`;window.open(o,"_blank")};return l.jsxs(z$,{children:[l.jsx("h3",{children:t("Verbes utilisés dans le texte")}),e.map((r,i)=>l.jsx("li",{children:l.jsx("button",{onClick:()=>n(r),children:r})},i))]})},z$=f.ul`
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
`,N$=f.div`
  overflow-x: hidden; /* Hide horizontal overflow */
`,B$=({vocabularyTranslations:e})=>{const{handleListen:t,isActiveStates:n}=_e();return l.jsx(N$,{children:Object.entries(e).map(([r,i],o)=>l.jsxs(I$,{children:[l.jsxs(F$,{children:[l.jsx(_$,{children:o+1}),l.jsx(D$,{children:r.replace(/\([^)]*\)/,"").trim()}),l.jsx(M$,{children:i})]}),l.jsxs(W$,{children:[l.jsx(U$,{onClick:t(r),children:l.jsx(nt,{isActive:n[o]})}),l.jsx(Do,{word:r,definition:"",secondLanguage:i})]})]},o))})},I$=f.span`
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
`,F$=f.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  /* justify-content: space-around; */
`,D$=f.span`
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
`,M$=f.span`
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
`,_$=f.span`
  color: ${e=>e.theme.secondartText};
  font-size: 1rem;
  /* margin-right: 0.6rem; */
  margin-left: 0.4rem;
  width: 1.6rem;
  &::after {
    content: " .";
  }
`,U$=f.span``,W$=f.span`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-direction: row;
`,H$={french:"Verb pas trouver",english:"Verb is missing",georgian:"ზმნა ვერ მოიძებნა",definition:"definition pas trouver.",part_of_speech:"v"},V$=()=>{var D,U,H,$;const{bookId:e}=_n(),t=ne(),[n,r]=b.useState(!1),[i,o]=b.useState(""),[s,a]=b.useState(null),{i18n:c}=q(),u=c.language==="ka",d=_(E=>E.books.selectedBook)||[],h=_(E=>E.books.isLoading),{chapters:p}=d||[],[y,x]=b.useState(0),[v,S]=b.useState(""),g=p&&p[y].chapterVocabulary,m=d&&(d==null?void 0:d.verbs),w=d&&(d==null?void 0:d.chapters)&&(d==null?void 0:d.chapters[y].verbFormMapping),k={};for(const E in w)if(w.hasOwnProperty(E)){const I=E,z=w[E],V=m.find(G=>G.french===z);V&&(k[I]=V)}const A={};g&&(g==null||g.forEach(E=>{A[E.french]=u?E.georgian:E.english}));const C=E=>E.replace(/[^a-zA-Z0-9]/g,"").toLowerCase(),j=E=>{S(I=>I===E?"":E)};if(b.useEffect(()=>{t($s(e))},[t,e]),h)return l.jsx(Be,{});if(d.lengt===0)return l.jsx(Be,{});if(!d)return l.jsx("p",{children:"Book not found."});const T=d&&(d==null?void 0:d.chapters)&&(d==null?void 0:d.chapters[y].textVerbs),L=w&&Object.values(w)||[],O=[...new Set(L)],P=E=>E.replace(/—/g,`
-`),N=E=>A.hasOwnProperty(E),B=p&&((U=(D=p[y])==null?void 0:D.text)==null?void 0:U.split(" "));return l.jsxs(Q$,{children:[l.jsx("h2",{children:d==null?void 0:d.title}),l.jsx(q$,{children:d.author}),l.jsx(bg,{selectedChapter:y,totalChapters:(H=d==null?void 0:d.chapters)==null?void 0:H.length,onPrevious:()=>x(y-1),onNext:()=>x(y+1)}),l.jsx(D1,{uniqueVerbs:O}),d&&d.chapters&&d.chapters[y]&&l.jsxs(G$,{children:[l.jsx("h2",{children:P(d.chapters[y].chapterTitle)}),l.jsx("div",{children:B==null?void 0:B.map((E,I)=>{const z=C(E),V=A[z],G=N(z),ge=T.includes(z);ge&&w[C];const be=ge?k[z]:"",Dt=pn=>{if(ge){r(!0),a(pn);const Yt=B[pn],bi=C(Yt),gr=w[bi];o(gr)}},Ye=()=>{ge&&(r(!1),o(""))};let rt=null;return G?rt=l.jsx("b",{children:E}):rt=l.jsxs(eR,{className:I===0?"first":"",onMouseEnter:()=>Dt(I),onMouseLeave:Ye,children:[E,l.jsx(X$,{children:n&&s===I&&l.jsx(I1,{id:`verb-tooltip-${I}`,tooltipContent:be||H$,conjugated:E,index:I})})]},I),l.jsx(K$,{children:ge?l.jsx(Y$,{content:V,handleWordClick:j,wordElement:rt,children:rt}):l.jsx("span",{className:I===0?" first":"",children:G?l.jsx(J$,{children:E}):l.jsxs("span",{children:[" ",E]})},I)},I)})})]},y),l.jsxs(Z$,{children:[l.jsx(tR,{children:l.jsx(B$,{vocabularyTranslations:A})}),l.jsx(bg,{selectedChapter:y,totalChapters:($=d==null?void 0:d.chapters)==null?void 0:$.length,onPrevious:()=>x(y-1),onNext:()=>x(y+1)})]})]})},Q$=f.div`
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
`,G$=f.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  max-width: 100%;
  padding: 0.4rem;
  /* margin-right: 0.2rem; */
  /* outline: 2px solid violet; */
  overflow-x: hidden;
  /* margin: 0 0.1rem; */
`,q$=f.span`
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
`,K$=f.span`
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
`;const Y$=f.span`
  margin: 0 0.3rem;
  padding: 0.2rem 0.4rem;
  /* border: 1px solid red; */
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  @media (max-width: 392px) {
    padding: 0.1rem;
  }
`,J$=f.span`
  /* border: 1px solid grey; */
  font-weight: bold;
  margin-left: 0.2rem;
  /* background: yellow; */
`,X$=f.span`
  position: absolute;
  width: 180px;

  /* outline: 1px solid blue; */
  background-color: ${e=>e.theme.highlight3};
  top: -480%;
  left: -30%;
  /* display: flex; */
  text-align: center;
  border-radius: 8px;
`,Z$=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`,eR=f.span`
  background-color: ${e=>e.theme.highlight2};
  /* text-decoration: underline; */
  position: relative;
  padding: 0.2rem 0.4rem;
  margin-top: 1rem;
`,tR=f.span`
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
`,nR=(e,t)=>{const n=[],r=new Set,i=o=>Math.floor(Math.random()*o.length);for(;n.length<e.length;){const o=i(e),s=e[o];if(r.has(s))continue;const c=t[o],u=[];for(;u.length<3;){const p=t[i(t)];!u.includes(p)&&p!==c&&!r.has(p)&&u.push(p)}const d=[c,...u].sort(()=>Math.random()-.5),h={question:s,options:d,answer:c};n.push(h),r.add(s)}return n},M1=({onClose:e,isQuizFinished:t,isAllCorrect:n,Restart:r,incorrectlyAnsweredQuestions:i})=>{const{t:o}=q(),s=()=>{e(),window.scrollTo({top:0,behavior:"smooth"})};return l.jsx(rR,{children:t&&l.jsxs(iR,{children:[n?l.jsx(Cg,{children:o("Félicitations! Vous avez répondu correctement à tous.")}):l.jsxs(Cg,{children:[o("Toutes les réponses ne sont pas correctes. Réessayer!"),l.jsx(aR,{children:i.map(a=>l.jsx("li",{children:a.question}))})]}),l.jsxs(sR,{children:[l.jsx(Jv,{onClick:s,children:o("Réviser le vocabulaire")}),l.jsx(oR,{onClick:e,isAllCorrect:n,children:n?o("Fermer"):r})]})]})})},rR=f.div`
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
`,iR=f.div`
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
`,Cg=f.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: ${e=>e.theme.primaryText};
`,oR=f.div`
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
`,sR=f.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  gap: 1rem;
`,aR=f.div`
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
`,_1=f.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Adjust the opacity as needed */
  z-index: 9998; /* Make sure it's behind the modal (9999) */
`,lR=({initialTime:e})=>{const[t,n]=b.useState(e);return b.useEffect(()=>{const r=setInterval(()=>{n(i=>i>0?i-1:e)},1e3);return()=>{clearInterval(r)}},[e]),l.jsx("div",{children:t})},U1=({french:e,english:t,georgian:n})=>{const{t:r,i18n:i}=q(),o=i.language==="ka",{handleListen:s,isActiveStates:a}=_e(),[c,u]=b.useState(!1),d=o?n:t,[h,p]=b.useState(!1);b.useState(!1);const[y,x]=b.useState(!1),[v,S]=b.useState(0),g=b.useMemo(()=>nR(e,d),[e,d]),[m,w]=b.useState({}),[k,A]=b.useState([]),[C,j]=b.useState(0),[T,L]=b.useState({}),O=($,E)=>{if(T[$])return;w({...m,[$]:E}),L({...T,[$]:!0}),P($,E);const I=$+1;I<g.length&&setTimeout(()=>{const z=document.getElementById(`question-${I}`);if(z){const G=z.getBoundingClientRect().top+window.scrollY-20;window.scrollTo({top:G,behavior:"smooth"})}},500)},P=($,E)=>{const I=g[$].options[E];I!==g[$].answer&&A(z=>[...z,g[$]]),I===g[$].answer&&j(C+1)},N=()=>{w({}),L({}),j(0);const $=0,E=document.getElementById(`question-${$}`);if(E){const I=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--navbar-height")),z=E.getBoundingClientRect().top+window.scrollY-I;window.scrollTo({top:z,behavior:"smooth"})}},B=g.every(($,E)=>{const I=m[E];return I!==void 0&&$.options[I]===$.answer}),D=async()=>{if(v<g.length){if(await new Promise($=>setTimeout($,3e3)),!h){const $=g[v].options.indexOf(g[v].answer);O(v,$);const E=v===g.length-1;setTimeout(E?()=>{u(!0),setTimeout(()=>{window.location.reload()},2500)}:()=>{S(v+1),D()},1500)}}else x(!1),u(!0)};b.useEffect(()=>{y&&v<g.length&&D(),v===g.length-1&&x(!1)},[y,v]);const U=g.length,H=Object.keys(T).length===U;return b.useEffect(()=>{H&&u(!0)},[H]),l.jsxs(cR,{children:[l.jsx(uR,{children:g.map(($,E)=>l.jsxs(dR,{id:`question-${E}`,children:[y&&v===E&&l.jsx(lR,{initialTime:3}),l.jsxs("h2",{children:[$.question,l.jsx(ql,{onClick:s($.question),isActive:a[E],children:l.jsx(nt,{})})," "]}),l.jsx("ul",{children:$.options.map((I,z)=>l.jsx(fR,{onClick:()=>O(E,z),selectedAnswers:m[E]===z,correctAnswer:m[E]===$.options.indexOf($.answer),disabled:T[E],children:I},z))}),l.jsxs(pR,{children:[" ",r("Score"),": ",C,"/",g.length]})]},E))}),l.jsxs(jg,{onClick:N,children:[" ",r("Recommencer")]}),c&&l.jsxs(l.Fragment,{children:[l.jsx(_1,{}),l.jsx(M1,{onClose:()=>u(!1),isQuizFinished:H,isAllCorrect:B,incorrectlyAnsweredQuestions:k,Restart:l.jsx(jg,{onClick:N,children:r("Recommencer")})})]})," "]})},cR=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,uR=f.div`
  padding: 0 1rem;
  /* margin: 0 auto; */
  width: 95%;
  max-width: 500px;
`,dR=f.div`
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
`,fR=f.li`
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
`,pR=f.p`
  color: ${e=>e.theme.text};
  background-color: ${e=>e.theme.background};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  box-shadow: 0px 2px 4px ${e=>e.theme.highlight2};
  margin-left: auto;
  width: 100px;
`,jg=f.button`
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
`;f.span``;const W1=({frenchWords:e})=>{const[t,n]=b.useState(!1);Ue();const[r,i]=b.useState({}),[o,s]=b.useState([]),[a,c]=b.useState(0),[u,d]=b.useState({}),[h,p]=b.useState(0),y=ne(),x=_($=>$.quizData.topicNames)||[],v=_($=>$.quizData.currentTopic.words)||[],S=_($=>$.quizData.isLoading),g=x.map($=>$.topic),[m,w]=b.useState(g[0]),k=v.map($=>$.french),A=$=>{const E=event.target.value;w(E);const I=g.indexOf(E);p(I),c(0),setCurrentWordIndex(0),setQuizStarted(!0)};b.useEffect(()=>{e||y(Vr())},[e]),b.useEffect(()=>{if(!e&&x.length>0&&m){const $=x.findIndex(E=>E.topic===m);if($!==-1){p($);const E=x[$]._id;y(Hr(E))}}},[e,x,m]);const{t:C}=q(),j=($,E)=>{const I=E.toLowerCase().startsWith("la "),z=E.toLowerCase().startsWith("le "),V=E.toLowerCase().startsWith("l'");if(I&&$==="la"||z&&$==="le")return!0;if(V){if(E.includes("(m.)"))return $==="le";if(E.includes("(f.)"))return $==="la"}return!1},T=($,E)=>{if(u[$])return;d(z=>({...z,[$]:E})),j(E,$)?c(z=>z+1):s(z=>[...z,{question:$,answer:E}])},L=()=>{i({}),d({}),c(0),s([]);const $=0,E=document.getElementById(`question-${$}`);if(E){const z=E.getBoundingClientRect().top+window.scrollY-450;window.scrollTo({top:z,behavior:"smooth"})}},O=e||k,P=O.filter($=>$.startsWith("le/la ")||$.includes("(m./f.)")).map($=>$.replace(/\(m\.\/f\.\)/,"").replace(/le\/la /,"").trim()),N=$=>$.filter(E=>{const I=E.includes("(m./f.)"),z=E.toLowerCase().startsWith("les "),V=E.toLowerCase().startsWith("le/la");return!z&&!I&&!V}),B=O.every(($,E)=>{const I=d[E];return I!==void 0&&$.options[I]===$.answer}),D=N(O),U=D.length,H=U>0&&Object.keys(u).length===U;return b.useEffect(()=>{H&&n(!0)},[H]),S?l.jsx(Be,{}):l.jsxs(hR,{children:[l.jsxs(SR,{children:[l.jsx("p",{children:P.length>0&&C("Les noms à double genre")}),l.jsx("ul",{children:P.map(($,E)=>l.jsx("li",{children:$},E))})]}),!e&&l.jsx(mR,{children:l.jsx(Yv,{topic:g,onCategoryChange:A,selectedCategory:m})}),l.jsx(gR,{children:D.map(($,E)=>{const I=d1($);return I!==null?l.jsxs(xR,{id:`question-${E}`,children:[l.jsx(yR,{children:I}),l.jsxs(vR,{children:[$.startsWith("la ")&&l.jsxs(l.Fragment,{children:[l.jsx(vr,{onClick:()=>T($,"le"),isSelected:u[$]==="le",isCorrect:j("le",$),children:"le"}),l.jsx(vr,{onClick:()=>T($,"la"),isSelected:u[$]==="la",isCorrect:j("la",$),children:"la"})]}),$.startsWith("l'")&&l.jsxs(l.Fragment,{children:[l.jsx(vr,{onClick:()=>T($,"le"),isSelected:u[$]==="le",isCorrect:j("le",$),children:"le"}),l.jsx(vr,{onClick:()=>T($,"la"),isSelected:u[$]==="la",isCorrect:j("la",$),children:"la"})]}),$.startsWith("le")&&l.jsxs(l.Fragment,{children:[l.jsx(vr,{onClick:()=>T($,"le"),isSelected:u[$]==="le",isCorrect:j("le",$),children:"le"}),l.jsx(vr,{onClick:()=>T($,"la"),isSelected:u[$]==="la",isCorrect:j("la",$),children:"la"})]})]},E)]},E):null})}),l.jsxs(wR,{children:[l.jsxs(bR,{children:[C("Score"),": ",a]}),l.jsxs(Eg,{onClick:L,children:[" ",C("Recommencer")]})]}),t&&l.jsxs(l.Fragment,{children:[l.jsx(_1,{}),l.jsx(M1,{onClose:()=>n(!1),isQuizFinished:H,isAllCorrect:B,incorrectlyAnsweredQuestions:o,Restart:l.jsx(Eg,{onClick:L,children:C("Recommencer")})})]})," "]})},hR=f.div`
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
`,mR=f.div`
  padding: 1rem;
  max-width: 100%;

  ul {
    list-style: none;
    li {
      font-size: 1.4rem;
    }
  }
`,gR=f.div`
  /* border: 2px solid black; */
`,xR=f.p`
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
`,yR=f.div`
  margin-right: 1rem;
  padding: 0.5rem 1rem;

  /* width: 70%; */
  max-width: 100%;
`,vR=f.div`
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
`,vr=f.div`
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
`,wR=f.div`
  display: flex;

  align-items: center;
`,bR=f.div`
  margin: 0.4rem;
  /* margin-right: 2rem; */
  margin-left: auto;
  font-size: 1rem;

  color: ${e=>e.theme.primaryText};
  background-color: ${e=>e.theme.secondaryBackground};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  /* box-shadow: 0px 2px 4px #0055a4; */
`,Eg=f(qe)`
  width: auto;

  @media (max-width: 576px) {
    font-size: 1.2rem;
    margin: 0;
    padding: 0.1 0.2rem;
  }
`,SR=f.div`
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
`,H1=({index:e,expandedIndex:t,definition:n})=>l.jsx(kR,{isExpanded:e===t,children:l.jsx(AR,{children:n[e]})}),kR=f.div`
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
`,AR=f.div`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
  padding: 1rem 2rem;
  margin-top: 0.5rem;
  font-size: ${e=>e.theme.small};
`,CR=({frenchWords:e,secondLanguage:t,definition:n})=>{Ue(),q();const[r,i]=b.useState(null);b.useState(e==null?void 0:e.map(()=>!1));const{handleListen:o,isActiveStates:s}=_e(),a=c=>{i(u=>u===c?null:c)};return l.jsx(jR,{children:e==null?void 0:e.map((c,u)=>l.jsxs(ER,{children:[l.jsxs(TR,{children:[l.jsxs(LR,{children:[l.jsx(OR,{children:c}),l.jsx(PR,{children:t[u]||""})]}),l.jsxs($R,{children:[l.jsx(ql,{onClick:o(c),isActive:s[u],children:l.jsx(nt,{})}),l.jsx(Do,{word:c,definition:n[u],secondLanguage:t[u]}),l.jsx(AL,{onClick:()=>a(u),isExpanded:u===r,children:"▾"})]})]}),l.jsx(H1,{index:u,expandedIndex:r,definition:n})]},u))})},jR=f.div`
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
`,ER=f.div`
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
`,TR=f.div`
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
`,LR=f.div`
  display: flex;
  justify-content: space-between;
  /* outline: 1px solid red; */
  width: 100%;
`,OR=f.p`
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
`,PR=f.span`
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
`,$R=f.div`
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
`;const RR=e=>e!=null&&e.startsWith("l'")||e.startsWith("L'")?e==null?void 0:e.slice(2):e,zR=({text:e,vocabulary:t,isTextVerbs:n,verbFormMapping:r,vocabularyData:i})=>{const{t:o,i18n:s}=q(),a=i.verbDetails;ne();const c={};for(const L in r)if(r.hasOwnProperty(L)){const O=L,P=r[L],N=a.find(B=>B.french===P);N&&(c[O]=N)}const[u,d]=b.useState(!1),[h,p]=b.useState(0),y=_(L=>L.auth.isAuthenticated),x=()=>{d(!u),p(L=>L+180)},v=e==null?void 0:e.split(" "),[S,g]=b.useState(null),m=new Set,w=r&&Object.values(r)||[],k=[...new Set(w)],C=(L=>{const O=L==null?void 0:L.split(".");return O==null?void 0:O.map(N=>{const B=N==null?void 0:N.trim(),D=B.split(/\s|,/).filter(H=>H.length>0),U=dO(D);return{sentence:B,words:U}})})(e),j=t==null?void 0:t.map(L=>{var O,P,N;return(N=(P=(O=d1(L))==null?void 0:O.toLowerCase())==null?void 0:P.replace(" (f.)",""))==null?void 0:N.replace(" (m.)","")}),T=C.filter(L=>L.words.length<=7);return l.jsxs(NR,{children:[l.jsx(MR,{children:l.jsx(D1,{uniqueVerbs:k})}),v==null?void 0:v.map((L,O)=>{const P=RR(L).toLowerCase().replace(/[^a-z]/g,""),N=j==null?void 0:j.includes(P),B=n&&r[P],D=B?c[P]:"",U=()=>{B&&g(P)},H=()=>{B&&g(null)};return B&&!m.has(P)?(m.add(P),l.jsxs(BR,{onMouseEnter:U,onMouseLeave:H,children:[L,l.jsx(IR,{children:S===P&&l.jsx(I1,{id:`verb-tooltip-${O}`,tooltipContent:D,conjugated:L,index:O,offset:{top:-100}})})]},O)):N?l.jsxs(V1,{children:[L," "]},O):l.jsxs(FR,{className:O===0?"first":"",children:[L," "]},O)}),l.jsxs(DR,{onClick:x,children:[o("Construire la phrase"),l.jsx(Kv,{isActive:u})]}),u&&y?l.jsx(h1,{sentenceData:T,isActive:u}):y?null:l.jsxs("p",{children:["login to use this exercise: ",l.jsx(Ee,{to:"/login",children:"login"})]})]})},NR=f.div`
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
`,V1=f.span`
  /* background-color: ${e=>e.theme.highlight1}; */
  font-weight: bold;

  position: relative;
  @media (max-width: 392px) {
  }
`,BR=f(V1)`
  background-color: ${e=>e.theme.highlight2};
  margin: 0 0.3rem;
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
  font-weight: 500;

  @media (max-width: 392px) {
    padding: 0.1rem;
  }
`,IR=f.span`
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
`,FR=f.span`
  &.first {
    margin-left: 1rem;
    font-size: ${e=>e.theme.medium};
    font-weight: bold;
  }
`,DR=f.p`
  margin: 2rem 0;
  font-weight: bold;
  /* text-align: center; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* margin-right: 2rem; */
`,MR=f.div`
  display: flex;

  margin: 0 1rem;
`,Q1=({selectedFlashcards:e})=>{const{handleListen:t,isActiveStates:n}=_e(),{t:r,i18n:i}=q(),o=i.language==="ka",[s,a]=b.useState(0),[c,u]=b.useState(0),[d,h]=b.useState(4),[p,y]=b.useState(100),[x,v]=b.useState(!1),[S,g]=b.useState(!1),[m,w]=b.useState(!0),k=e==null?void 0:e.map(L=>L.word),A=e==null?void 0:e.map(L=>L.secondLanguage);b.useEffect(()=>{const L=setInterval(()=>{!x&&!S&&(d>0?(h(O=>O-1),y(O=>O-25)):(a(O=>O===k.length-1?0:O+1),u(O=>O+1),h(4),y(100)))},1e3);return()=>{clearInterval(L)}},[d,k,x,s,S]),b.useEffect(()=>{s>0&&s%4===0&&v(!0)},[s]);const C=()=>{v(!1)},j=()=>{g(!S)},T=L=>{w(L.target.value==="word")};return l.jsx(UR,{children:x?l.jsxs(KR,{children:[l.jsxs("div",{children:[" ",r("Mots déjà revus"),l.jsx("p",{children:c})]}),l.jsx(kL,{children:r("Vous suivez ?")}),l.jsx(Jv,{onClick:C,children:r("Continue")})]}):l.jsxs(l.Fragment,{children:[l.jsxs(WR,{children:[l.jsxs(_R,{onChange:T,children:[l.jsx("option",{value:"word",children:r("Français")}),l.jsx("option",{value:"translation",children:r(o?"ქართული":"English")})]}),l.jsxs(HR,{children:[l.jsx(qR,{children:d}),l.jsxs(VR,{children:[l.jsx(ql,{onClick:t(k[s]),isActive:n[s],children:l.jsx(nt,{})}),m?k[s]:A[s]]})]}),l.jsx(QR,{style:{filter:`blur(${p}px)`},children:l.jsx(GR,{children:m?A[s]:k[s]})})]}),l.jsx(qe,{onClick:j,children:S?"Resume":"Pause"})]})})},_R=f.select`
  margin-top: 1rem;
  font-size: 1rem;
  padding: 0.25rem;
`,UR=f(SL)`
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
`,WR=f.div`
  width: 98%;
  height: 30rem;
  margin-bottom: 1rem;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${e=>e.theme.primaryBackground};
`,HR=f.span`
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
`,VR=f.span`
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
`,QR=f.div`
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
`,GR=f.span`
  font-size: 2rem;
  padding: 1rem 2rem;
  font-weight: bold;
  color: ${e=>e.theme.primaryText};
`,qR=f.div`
  font-size: 2rem;
  margin-top: -3rem;
  color: ${e=>e.theme.primaryText};
`,KR=f.div`
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
`,us=({type:e,isOpen:t,onToggle:n,french:r,vocabularyData:i,english:o,georgian:s,identifier:a,selectedFlashcards:c})=>{b.useState(0);const u=b.useRef(null),{t:d,i18n:h}=q();return h.language,i==null||i.words,b.useEffect(()=>{t&&p1(u,192)},[t]),l.jsxs(YR,{children:[l.jsxs("h2",{onClick:n,children:[e,l.jsx(Kv,{onClick:n,isActive:t})]}),t&&l.jsxs(JR,{ref:u,children:[a==="Mémoriser des mots"&&l.jsx(Q1,{selectedFlashcards:c}),a==="Texte"&&l.jsx(zR,{text:i==null?void 0:i.text,vocabulary:r,verbFormMapping:i==null?void 0:i.verbFormMapping,isTextVerbs:i==null?void 0:i.textVerbs,vocabularyData:i}),a==="Genre des noms"&&l.jsx(W1,{frenchWords:r,parentsData:!0}),a==="Questionnaire"&&l.jsx(U1,{french:r,english:o,georgian:s})]})]})},YR=f.div`
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
`,JR=f.div`
  /* border: 2px solid green; */
  width: 97%;
  padding: 1rem;
`,XR=()=>{var g,m,w,k;const{topicId:e}=_n(),t=ne(),n=_(A=>A.quizData.currentTopic),r=_(A=>A.quizData.isLoading),i=n==null?void 0:n.words,o=(g=n==null?void 0:n.words)==null?void 0:g.map(A=>A==null?void 0:A.french),s=(m=n==null?void 0:n.words)==null?void 0:m.map(A=>A==null?void 0:A.english),a=(w=n==null?void 0:n.words)==null?void 0:w.map(A=>A==null?void 0:A.georgian),c=(k=n==null?void 0:n.words)==null?void 0:k.map(A=>A==null?void 0:A.definition),{t:u,i18n:d}=q(),h=d.language==="ka",p=h?a:s,y=i==null?void 0:i.map(A=>({word:A==null?void 0:A.french,definition:A==null?void 0:A.definition,secondLanguage:h?A.georgian:A.english}));b.useEffect(()=>{e&&t(Hr(e))},[]);const[x,v]=b.useState(null),{vocabularyTopicId:S}=_n();return b.useEffect(()=>{t(Yi())},[t,S]),r?l.jsx(Be,{}):l.jsxs(ZR,{children:[l.jsxs(t4,{children:[u("Les mots")," ",l.jsx("b",{children:o&&(o==null?void 0:o.length)})]}),l.jsx(e4,{children:l.jsx(CR,{frenchWords:o,secondLanguage:p,definition:c})}),l.jsxs(r4,{children:[l.jsx(us,{type:u("Mémoriser des mots"),identifier:"Mémoriser des mots",isOpen:x==="Mémoriser des mots",onToggle:()=>v(x==="Mémoriser des mots"?null:"Mémoriser des mots"),selectedFlashcards:y}),l.jsx(us,{type:u("Texte"),identifier:"Texte",isOpen:x==="Texte",onToggle:()=>v(x==="Texte"?null:"Texte"),vocabularyData:n,french:o}),l.jsx(us,{type:u("Genre des noms"),identifier:"Genre des noms",isOpen:x==="Genre des noms",onToggle:()=>v(x==="Genre des noms"?null:"Genre des noms"),french:o}),l.jsx(us,{type:u("Questionnaire"),identifier:"Questionnaire",isOpen:x==="Questionnaire",onToggle:()=>v(x==="Questionnaire"?null:"Questionnaire"),english:s,georgian:a,french:o})]})]})},ZR=f.article`
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
`,e4=f.li`
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
`,t4=f.div`
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
`,n4=f.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,r4=f(n4)`
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
`;const i4=()=>{const[e,t]=b.useState(null),{t:n}=q(),r=_(d=>d.isFavorite.favorites),i=ne(),{handleListen:o,isActiveStates:s}=_e(),a=d=>{i(i1(r[d]))},c=()=>{i(QL())},u=d=>{t(h=>h===d?null:d)};return l.jsxs(o4,{children:[l.jsx("h2",{children:n("Mots favoris")}),r.length===0?l.jsx("p",{children:n("Pas de mots favoris")}):l.jsxs(s4,{children:[r.filter(d=>Object.keys(d).length>0).map((d,h)=>l.jsxs(a4,{children:[l.jsxs(l4,{children:[l.jsx("span",{children:d.word}),l.jsx("span",{children:d.secondLanguage}),l.jsxs(c4,{children:[l.jsx(f4,{onClick:o(d.word),isActive:s[h],children:l.jsx(nt,{})}),l.jsx(u4,{src:o1,alt:"Favorite",onClick:()=>a(h)}),l.jsx(d4,{onClick:()=>u(h),isExpanded:h===e,children:"▾"})]})]}),l.jsx(H1,{index:h,expandedIndex:e,frenchExamples:d.frenchExamples,secondLanguageExamples:d.secondLanguageExamples})]},h)),l.jsx(qe,{onClick:c,children:"Clear All"})]})]})},o4=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 365px;
  width: 100vw;
  height: 100%;
  margin: 0 0.4rem;
`,s4=f.div`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  border-radius: 12px;
  min-width: 365px;
  max-width: 100%;
`,a4=f.div`
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
`,l4=f.div`
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
`;const c4=f.div`
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
`,u4=f.img`
  max-width: 1.5rem;
  max-height: 1.5rem;
  margin-left: auto;
`,d4=f.div`
  transform: ${e=>e.isExpanded?"rotate(180deg)":"rotate(0deg)"};
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  margin: 0 0.5rem;
`,f4=f.div`
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
`,p4=()=>{Ue();const e=ne(),{t,i18n:n}=q(),r=_(o=>o.quizData.topicNames)||[],i=_(o=>o.quizData.isLoading);return b.useState(null),b.useEffect(()=>{e(Vr())},[e]),i?l.jsx(Be,{}):l.jsxs(h4,{children:[l.jsxs("h1",{children:[t("ფრანგული ლექსიკა")," "]}),r.map(o=>l.jsx(m4,{to:`/vocabulary-topics/${o._id}`,children:l.jsxs(g4,{children:[l.jsx(x4,{src:o.imageUrl,alt:"French Vocabulary Topic"}),l.jsxs(v4,{children:[l.jsx(G1,{children:o.topic}),l.jsx(y4,{children:n.language==="ka"?o.topicGeo:o.topicEng})]})," ",l.jsxs(w4,{children:[l.jsx("span",{children:t("Nombre de Mots")}),l.jsx("strong",{children:o.wordsCount})]})]})},o._id))]})},h4=f.ul`
  display: flex;
  align-items: center;

  max-width: 100%;

  flex-wrap: wrap;
  h1 {
    margin: 0 auto;
  }
`,m4=f(Ee)`
  text-decoration: none;
  /* color: #333; */

  &:hover {
    color: #007bff;
  }
`,g4=f.div`
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
`,x4=f.img`
  width: 100%;
  height: 50%; /* Adjust this value to set the desired image height */
  overflow: hidden;
  object-fit: cover;
  background: white;
  margin-bottom: 8px;
  border-radius: 8px 8px 0 0;
`,G1=f.h3`
  /* font-size: 20px; */
  margin: 0;
  padding: 0 0.4rem;
  line-height: ${e=>e.theme.smallLineHeight};
  margin-bottom: 8px;
`,y4=f(G1)`
  font-size: ${e=>e.theme.small};
`,v4=f.p`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  font-size: 16px;
  margin: 0;
  color: ${e=>e.theme.primaryText};
  margin-bottom: 8px; /* Adjust this value for spacing */
`,w4=f.h4`
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
`,Zi=ae("dialogueTopics/fetchDialogueTopics",async()=>{try{return(await le.get("/dialogueTopics")).data}catch{throw Error("Failed to fetch phrases for lesson")}}),b4={dialogueTopics:[],isLoading:!1,error:null},S4=Pe({name:"dialogueTopics",initialState:b4,reducers:{},extraReducers:e=>{e.addCase(Zi.pending,t=>{t.isLoading=!0,t.error=null}).addCase(Zi.fulfilled,(t,n)=>{t.dialogueTopics=n.payload,t.isLoading=!1}).addCase(Zi.rejected,(t,n)=>{t.isLoading=!1,t.error=n.error.message})}}),k4=S4.reducer,A4=({dialogueTopics:e})=>{const{t,i18n:n}=q();return n.language,l.jsx(C4,{children:e.map(r=>{const{_id:i,chapter:o,chapterName:{chapterNameEng:s,chapterNameFr:a,chapterNameGeo:c},dialogues:u}=r;return l.jsxs(j4,{children:[l.jsxs(E4,{children:[l.jsx(T4,{children:o}),l.jsx(L4,{children:a})]}),l.jsx(q1,{children:u.map(d=>{const{dialogueName:h,dialogueImg:p}=d;return l.jsx("div",{children:l.jsx("h4",{children:h})},h)})}),l.jsxs(O4,{children:[l.jsxs("p",{children:[t("Des mots"),l.jsx("b",{children:"15"})]}),l.jsxs("p",{children:[t("Expressions"),l.jsx("b",{children:"10"})]}),l.jsxs("p",{children:[t("Des exercices")," ",l.jsx("b",{children:" 5"})]})]})]},i)})})},C4=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
  border-radius: 3rem;
  border: 6px solid ${e=>e.theme.primaryText};
`,j4=f.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${e=>e.theme.secondaryBackground};
  color: ${e=>e.theme.primaryText};
`,E4=f.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,T4=f.span`
  color: #1e072e;
  font-size: 1.4rem;
`,L4=f.span`
  font-size: 1.6rem;
  border-bottom: 3px solid white;
  padding: 0.4rem 1rem;
  border-radius: 12px;
  text-align: center;
  margin: 0 auto;
`,q1=f.div`
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
`,O4=f(q1)`
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
`,P4=()=>{const e=ne(),t=_(r=>r.dialogueTopics.dialogueTopics)||[],n=_(r=>r.dialogueTopics.isLoading);return b.useEffect(()=>{e(Zi())},[]),n?l.jsx(Be,{}):l.jsx("div",{children:t&&t.map(r=>l.jsx($4,{to:`/dialogue-topics/${r._id}`,children:l.jsx(A4,{dialogueTopics:[r]})},r._id))})},$4=f(Ee)`
  text-decoration: none;
  /* background-color: red; */
`,R4=({words:e})=>{const t=e.map(p=>p.french),n=e.map(p=>p.english),r=e.map(p=>p.georgian),i=e.map(p=>p.definition),{handleListen:o,isActiveStates:s}=_e(),{t:a,i18n:c}=q(),u=c.language==="ka",d=u?r:n,h=u?"Geo":"Eng";return l.jsxs(z4,{children:[l.jsx(N4,{children:"Vocabulary"}),l.jsx("div",{children:t.map((p,y)=>l.jsxs(B4,{children:[l.jsx(I4,{onClick:o(p),children:p}),l.jsx(Sp,{definition:i,secondLanguage:d,secondLangButtonName:h,french:t,index:y,isMultipleDefinitions:!0}),l.jsx(F4,{children:l.jsxs(D4,{children:[l.jsx(M4,{onClick:o(p),children:l.jsx(nt,{})}),l.jsx(qL,{word:p,definition:i[y],secondLanguage:d[y],secondLanguageExamples:"No examples"}),l.jsx(Do,{word:p,frenchExamples:i[y],secondLanguage:d[y],secondLanguageExamples:"No examples"})]})})]},y))})]})},z4=f.div`
  margin-top: 5rem;
  h2 {
    margin-bottom: 3rem;
  }
`,N4=f.h1`
  &:before {
    content: "💥 ";
  }
`,B4=f.div`
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
`,I4=f.p`
  font-weight: bold;
  font-size: 1.4rem;
`,F4=f.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  :first-child {
    font-style: italic;
  }
`,D4=f.div`
  display: flex;

  gap: 1rem;
  align-items: center;
  justify-content: space-evenly;
  margin-right: 1rem;
  margin-left: auto;
`,M4=f.div`
  display: flex;
`,_4=({phrases:e})=>{const{t,i18n:n}=q(),r=n.language==="ka",i=e.map(y=>y.french),o=e.map(y=>y.english),s=e.map(y=>y.georgian),a=r?s:o,[c,u]=b.useState({}),[d,h]=b.useState(Array(s.length).fill(!1)),p=y=>{u(x=>({...x,[y]:x[y]===0?180:0})),h(x=>{const v=[...x];return v[y]=!v[y],v})};return l.jsxs(U4,{children:[l.jsx("h1",{children:"DialoguePhrase"}),l.jsx("div",{children:i.map((y,x)=>l.jsxs(W4,{children:[l.jsx(H4,{children:y}),d[x]&&l.jsx(G4,{children:a[x]}),l.jsx(V4,{onClick:()=>p(x),children:l.jsx(Q4,{src:bp,alt:"ChevronDown",rotation:c[x]||0})})]},x))})]})},U4=f.div`
  width: 100%;
`,W4=f.div`
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
`,H4=f.p`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`,V4=f.div`
  margin-left: auto;

  img {
    position: absolute;
    top: 15%;
    right: 3%;
  }
`,Q4=f.img`
  width: 24px;
  height: 24px;
  transition: transform 0.5s ease;
  margin-left: 1rem;
  transform: ${({rotation:e})=>`rotate(${e}deg)`};
  cursor: pointer;
`,G4=f.div`
  /* color: grey; */
  margin-left: 1rem;
  font-size: 1.2rem;
  font-style: italic;
`,q4=({isActive:e,onClick:t})=>{const{t:n}=q();return l.jsxs(K4,{children:[l.jsx(J4,{children:n(e?"Cacher Toutes les Traductions":"Afficher toutes les traductions")}),l.jsx(Y4,{isActive:e,onClick:t})]})},K4=f.div`
  display: flex;
  flex-direction: column;
`,Y4=f.button`
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
`,J4=f.span`
  font-size: 1.2rem;
  margin: 0 auto;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`,X4=()=>{const e=ne(),{dialogueTopicId:t}=_n(),{i18n:n}=q(),r=n.language==="ka",[i,o]=b.useState(!1),[s,a]=b.useState(-1),[c,u]=b.useState({}),{handleListen:d,isActiveStates:h}=_e(),p=C=>{u(j=>({...j,[C]:j[C]===0?180:0})),a(j=>j===C?-1:C)},y=_(C=>C.dialogueTopics.dialogueTopics)||[],x=_(C=>C.dialogueTopics.isLoading),v=y.find(C=>C._id===t);if(b.useEffect(()=>{e(Zi())},[]),x)return l.jsx(Be,{});if(!v)return l.jsx("div",{children:"No data available for the selected topic."});const{_id:S,chapter:g,chapterName:{chapterNameEng:m,chapterNameFr:w,chapterNameGeo:k},dialogues:A}=v||{};return l.jsxs(Z4,{children:[l.jsxs(uz,{children:[l.jsx("h1",{children:w}),l.jsx(q4,{isActive:i,onClick:()=>o(!i)})]}),l.jsx("div",{children:A&&A.map((C,j)=>{const{dialogueName:T,dialogueImg:L,dialogue:O,words:P,phrases:N}=C;return l.jsxs(ez,{children:[l.jsx(tz,{children:T}),O.map((B,D)=>{const{speaker:U,messageFr:H,messageEng:$,messageGeo:E}=B,I=r?E:$,z=i||s===D;return l.jsxs(nz,{children:[l.jsxs(iz,{children:[U,":"]}),l.jsxs(rz,{children:[l.jsx(oz,{children:H}),l.jsxs(dz,{children:[l.jsx(cz,{onClick:d(H),children:l.jsx(nt,{})}),l.jsx(az,{onClick:()=>{p(D)},children:l.jsx(lz,{src:bp,alt:"ChevronDown",rotation:c[D]||0})})]}),z&&l.jsx(sz,{children:I})]})]},D)}),l.jsx("div",{children:l.jsx(R4,{words:P})}),l.jsx(_4,{phrases:N})]},j)})})]},S)},Z4=f.section`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
`,ez=f.div`
  padding: 0.5rem;
  margin: 0.5rem;
  margin: 0 auto;
  max-width: 920px;
`,tz=f.h1`
  &::before {
    content: "⚜️  ";
  }
`,nz=f.div`
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
`,rz=f.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  height: 6rem;
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow-y: scroll;
`,iz=f.p`
  font-weight: bold;
  width: 50%;

  background: ${e=>e.theme.primaryBackground};
  color: ${e=>e.theme.primaryText};
  padding: 1rem 0;
  text-align: center;
`,oz=f.span`
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  width: 80%;
  font-weight: bold;

  &:before {
    content: "🔹";
  }
`,sz=f.span`
  background: ${e=>e.theme.tertiaryBackground};
  color: ${e=>e.theme.secondaryText};

  margin-left: 1.2rem;
  padding: 0.4rem;

  &:before {
    content: "🔸";
  }
`,az=f.div`
  /* margin-left: auto; */
  img {
    /* position: absolute;
    top: 15%;
    right: 3%; */
  }
`,lz=f.img`
  width: 24px;
  height: 24px;
  transition: transform 0.5s ease;
  margin-left: 0.4rem;
  transform: ${({rotation:e})=>`rotate(${e}deg)`};
  cursor: pointer;
`,cz=f.span`
  cursor: pointer;
`,uz=f.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  button {
    margin: 0 auto;
  }
`,dz=f.div`
  border-bottom: 2px solid grey;
  border-left: 2px solid grey;
  border-radius: 0 0 0 12px;
  padding: 0 0 0.2rem 0.4rem;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0%;
  right: 2%;
`,fz=({topics:e})=>{const{i18n:t}=q(),n=t.language==="ka";if(!e||!e.title)return null;const r=n?e.title.titleGeo:e.title.titleEng;return l.jsxs(pz,{children:[l.jsx("h2",{children:e.title.titleFr}),l.jsx("h5",{children:r})]})},pz=f.div`
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
`,su=ae("tenseNames/fetchTenseNames",async()=>{try{return(await le.get("/grammer/basic-verb-tenses/names")).data}catch(e){throw console.log(e),Error("Failed to fetch words")}}),au=ae("selectedTense/fetchVerbDetails",async e=>{try{return(await le.get(`/grammer/basic-verb-tenses/${e}`)).data}catch(t){throw console.log(t),Error("Failed to fetch verb details")}}),hz={selectedTenseCache:{},selectedTense:[],tenseNames:[],isLoading:!1,error:null},mz=Pe({name:"verbTenses",initialState:hz,reducers:{},extraReducers:e=>{e.addCase(su.pending,t=>{t.isLoading=!0}).addCase(su.fulfilled,(t,n)=>{t.tenseNames=n.payload,t.isLoading=!1}).addCase(su.rejected,(t,n)=>{t.error=n.error.message}).addCase(au.pending,t=>{t.isLoading=!0}).addCase(au.fulfilled,(t,n)=>{const{_id:r}=n.payload;console.log("in Slice",n.payload),console.log("id in Slice",r),t.selectedTenseCache[r]=n.payload,t.selectedTense=n.payload,t.isLoading=!1}).addCase(au.rejected,(t,n)=>{t.error=n.error.message})}}),gz=mz.reducer;f.div`
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
`;const xz=f.p`
  padding: 0.4rem;

  &:before {
    content: ${e=>e.theme.background==="#000000"?'"🔹"':'"🔸"'};
  }
`;f(xz)`
  font-size: 1.1rem;
  color: ${e=>e.theme.secondaryText};
  text-indent: 3rem;
  &:before {
    content: "- ";
  }
`;const yz=f.li`
  font-style: italic;
  padding: 0.4rem;
  font-size: 1.2rem;
`;f(yz)`
  font-size: 1rem;
  list-style: none;
  color: ${e=>e.theme.secondaryText};
  &:before {
    content: "- ";
  }
`;const vz=()=>{Ue(),b.useState(null);const e=ne(),t=_(i=>i.grammer.grammer)||[],n=_(i=>i.grammer.isLoading),r=_(i=>i.grammer.error);return b.useEffect(()=>{e(Vs())},[e]),n?l.jsx(Be,{}):r?l.jsx(Eo,{error:r}):l.jsxs(wz,{children:[t&&t.map(i=>{const{_id:o}=i;return console.log("topics",i),l.jsx(Hn,{to:`/grammar-basic/${o}`,children:l.jsx(fz,{topics:i})},o)}),l.jsx("div",{})," "]})},wz=f.div`
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
`,K1=f.div`
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
`,Y1=f.div``,J1=f.div`
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
`,Lp=f.div`
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
`,X1=f.div`
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
`,Z1=f(Lp)`
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
`,bz=f.div`
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
`,Sz=()=>{const{BasicGrammerTopicId:e}=_n();Ue();const{handleListen:t,isActiveStates:n}=_e(),{t:r,i18n:i}=q(),o=i.language==="ka";ne();const s=_(k=>k.grammer.grammer.find(A=>A._id===e))||[],a=_(k=>k.grammer.isLoading),c=_(k=>k.grammer.error);if(a)return l.jsx(Be,{});if(c)return l.jsx("p",{children:c.message});if(!s)return;const{title:{titleFr:u,titleEng:d,titleGeo:h},description:{descriptionFr:p,descriptionEng:y,descriptionGeo:x},example:{exampleFr:v,exampleEng:S,exampleGeo:g}}=s,m=o?x:y,w=o?g:S;return l.jsxs(K1,{children:[l.jsx(Y1,{children:l.jsx("h2",{children:u})}),l.jsxs(J1,{children:[l.jsx("h2",{children:r("Qu'est-ce que c'est ?")}),p.map((k,A)=>l.jsxs(Lp,{children:[k.split(`
`).map((C,j)=>l.jsx("p",{children:C},j)),l.jsx("span",{children:m[A]})]},A))]}),l.jsxs(X1,{children:[l.jsx("h2",{children:r("Examples")}),v.map((k,A)=>l.jsxs(Z1,{children:[l.jsxs("div",{children:[l.jsx("p",{children:k})," ",l.jsx(bz,{onClick:t(k),isActive:n[A],children:l.jsx(nt,{})})]}),l.jsx("span",{children:w[A]})]},A))]})]})},kz=()=>l.jsx(Az,{children:l.jsx(Cz,{children:"There are no words yet."})}),Az=f.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: #f7f7f7;
  border-radius: 8px;
  margin: 20px 0;
`,Cz=f.p`
  font-size: 18px;
  color: #333;
`,jz=({selectedFlashcards:e})=>{console.log("selectedFlashcards",e);const{handleListen:t,isActiveStates:n}=_e(),[r,i]=b.useState(0),[o,s]=b.useState([]),[a,c]=b.useState([]),[u,d]=b.useState(""),[h,p]=b.useState(null),[y,x]=b.useState([]);b.useEffect(()=>{if(e.length>0&&r<e.length){const A=e[r],C=A.split("");console.log("lettersAndSpaces",C),d(A),console.log("flashcard",A),C.sort(()=>Math.random()-.5),x([...C]),p(A),c([])}},[e,r]);const v=A=>{s(o.filter(C=>C!==A)),c(a.filter((C,j)=>j!==A)),x([...y,a[A]])},S=A=>{s([...o,A]),c([...a,y[A]]),x(y.filter((C,j)=>j!==A))},g=()=>{s([]),c([]),x(u.split(""))},m=a.join("")===u,w=o.length===u.length,k=()=>{s([]),c([]),r+1<e.length&&i(A=>A+1)};return l.jsxs(Ez,{children:[l.jsx(Pz,{onClick:t(h),children:"Play the word"}),l.jsxs(Tz,{children:[l.jsx(ew,{children:a.map((A,C)=>l.jsx(Lz,{onClick:()=>v(C),disabled:a.length>=u.length,selected:!0,children:A},C))}),l.jsx(Oz,{children:y.map((A,C)=>l.jsx(tw,{onClick:()=>S(C),selected:o.includes(C),children:A},C))})]}),w&&!m&&l.jsx("div",{children:"Incorrect! Try again."}),m&&l.jsxs("div",{children:["Correct! You assembled the word.",r<e.length-1&&l.jsx(qe,{onClick:k,children:"Next"}),r===e.length-1&&l.jsxs($z,{children:[l.jsx("p",{children:"Congratulations! You have completed all the words. "}),l.jsx(Rz,{onClick:g,children:"Restart"})]})]})]})},Ez=f.section`
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
`,Tz=f.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,ew=f.div`
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
`,tw=f.button`
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
`,Lz=f(tw)`
  border: ${e=>e.selected?"2px solid blue":"none"};
  color: ${e=>e.selected?"#e2ebf3dd":"#8ae8ff"};
  background-color: ${e=>e.selected?"#0055a4dd":"none"};
`,Oz=f(ew)`
  width: 100%;
  height: 10rem;
  color: black;
  background-color: #0055a4dd;
`,Pz=f(qe)`
  color: white;
  background-color: #023668dd;
  margin: 1rem;
`,$z=f.div`
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
`,Rz=f(qe)`
  background-color: #f1f7fcdd;
  color: #ff4e07;
  &:hover {
    background-color: #ff4e07;
    color: #f1f7fcdd;
  }
`,Tg=["apple","dog","jump","book","run","cat","tree","play","car","eat","flower","swim"],zz=({FrenchWord:e,secondLanguageWord:t})=>{const[n,r]=b.useState(0),[i,o]=b.useState(0),[s,a]=b.useState({}),[c,u]=b.useState(0),[d,h]=b.useState(!1),[p,y]=b.useState(!1);b.useEffect(()=>{x()},[i,n]);const x=()=>{if(p){a({});return}if(e.length===0||i>=e.length){y(!0);return}const S=e[i],g=t[i],m=[g];for(;m.length<2;){const w=Math.floor(Math.random()*Tg.length),k=Tg[w];m.includes(k)||m.push(k)}m.sort(()=>Math.random()-.5),a({question:S,options:m,correctOption:g})},v=S=>{d||h(!0),S===s.correctOption&&u(g=>g+1),setTimeout(()=>{i+1<e.length?o(g=>g+1):(o(0),r(g=>g+1),y(!0))},800)};return l.jsxs(Nz,{children:[l.jsxs(Iz,{children:[l.jsx("h2",{children:"Topic Title"}),l.jsx(Bz,{children:s.question&&l.jsx(Fz,{children:s.question})}),p?l.jsxs(_z,{children:[c===e.length?l.jsxs("div",{children:[l.jsx("h2",{children:"Congratulations! You mastered all words."}),l.jsx("ul",{children:e.map(S=>l.jsx("li",{children:S}))})]}):l.jsxs("h2",{children:["Quiz completed. You scored ",c," out of ",e.length,"."]}),l.jsx(Uz,{onClick:()=>window.location.reload(),children:c===e.length?"Play Again":"Retry"})]}):Array.isArray(s.options)&&s.options.map((S,g)=>l.jsx(Dz,{onClick:()=>v(S),isSelected:s.selectedOption===S,isCorrect:S===s.correctOption,children:S},g))]}),l.jsxs(Mz,{children:["Score: ",c]})]})},Nz=f.div`
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
`,Bz=f.div``,Iz=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
`,Fz=f.div`
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
`,Dz=f.div`
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
`,Mz=f.div`
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
`;const _z=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 250px;
`,Uz=f.button`
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
`,Wz=()=>{const{t:e}=q(),t=ne(),n=_(m=>m.flashcards.flashcards),[r,i]=b.useState([]),[o,s]=b.useState(!1),[a,c]=b.useState(null),u=b.useRef(null),{handleListen:d,isActiveStates:h}=_e(),p=m=>{const w=n[m];r.some(k=>k.word===w.word)?i(r.filter(k=>k.word!==w.word)):i([...r,w])},y=m=>{t(a1(m))},x=()=>{t(ZL())},v=()=>{if(console.log("handleShowTrainer called"),u.current){s(!0);const m=3*16,w=u.current.offsetTop-m;window.scrollTo({top:w,behavior:"smooth"})}},S=()=>{i([...n]),v()},g=r.map(m=>m.word);return l.jsx(Hz,{children:n.length===0?l.jsx(kz,{}):l.jsxs(Vz,{children:[n.map((m,w)=>{const{word:k,frenchExamples:A,secondLanguage:C,secondLanguageExamples:j}=m;return l.jsxs(Qz,{children:[l.jsxs("p",{children:[l.jsx(Gz,{children:k}),l.jsx(qz,{children:C})]}),l.jsxs(Yz,{onClick:d(k),children:[l.jsx(nt,{}),l.jsx(Kz,{onClick:()=>y(w),src:l1,alt:"FlashcardIcon"}),l.jsxs(Jz,{children:[l.jsx(Xz,{type:"checkbox",id:`flashcard-${w}`,checked:r.includes(m),onChange:()=>p(w)}),l.jsx("label",{htmlFor:`flashcard-${w}`})]})]})]},w)}),l.jsxs(tN,{children:[l.jsxs(eN,{onClick:S,children:[" ",e("Tout sélectionner")]}),l.jsx(nw,{onClick:x,children:e("Supprimer tout")})]}),r.length===0&&l.jsxs(rN,{children:[e("Aucun mot sélectionné. Veuillez sélectionner des mots pour choisir le mode entraîneur.")," "]}),l.jsxs(nN,{onClick:v,children:[l.jsx("h2",{children:e("Exercices")}),l.jsx(lu,{onClick:()=>c("blurry"),children:"Blurry Trainer"}),l.jsx(lu,{onClick:()=>c("wordJumble"),children:"Word Jumble Trainer"}),l.jsx(lu,{onClick:()=>c("FrQuizTrainer"),children:"Quiz"})]}),l.jsxs(iN,{children:[a==="blurry"&&r.length>0&&l.jsx(cu,{ref:u,children:l.jsx(Q1,{selectedFlashcards:r})}),a==="wordJumble"&&r.length>0&&l.jsx(cu,{ref:u,children:l.jsx(jz,{selectedFlashcards:g})}),a==="FrQuizTrainer"&&r.length>0&&l.jsx(cu,{ref:u,children:l.jsx(zz,{FrenchWord:r.map(m=>m.word),secondLanguageWord:r.map(m=>m.secondLanguage)})})]})]})})},Hz=f.div`
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
`,Vz=f.div`
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
`,Qz=f.div`
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
`,Gz=f.span`
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
`,qz=f.span`
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
`,nw=f.button`
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
`,Kz=f.img`
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
`,Yz=f.div`
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
`,Jz=f.div`
  /* width: 5rem; */
`,Xz=f.input`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  @media (max-width: 576px) {
    width: 1rem;
    height: 1rem;
  }
`,Zz=f(nw)`
  background: ${e=>e.theme.highlight2};
  color: black;

  &:hover {
    background: ${e=>e.theme.primaryBackground};
    color: ${e=>e.theme.highlight2};
  }
`,eN=f(Zz)``,tN=f.div`
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
`,nN=f.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 100%;
`,lu=f.button`
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
`,rN=f.div``,iN=f.div`
  /* outline: 1px solid blue; */
  width: 100%;
  margin-top: 2rem;
  overflow-x: hidden;
  display: flex;
  align-items: center;
`,cu=f.div`
  display: flex;
  align-items: center;
  display: flex;
  /* outline: 1px solid red; */
  overflow-x: hidden;
  width: 97%;
`,oN=({description:e,highlight:t,link:n})=>l.jsxs(aN,{children:[l.jsxs(rw,{children:[e,l.jsx(Hn,{to:n,children:l.jsx(qe,{children:"Explore"})})]}),l.jsx(sN,{children:l.jsx("img",{src:t,alt:"highlight"})})]}),rw=f.div`
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
  animation: ${wL} 0.3s ease-in-out;
`,sN=f.div`
  cursor: pointer;
  width: 360px;

  img {
    width: 100%;
    height: 100%;
  }
`,aN=f.div`
  display: flex;
  position: relative;
  transition: filter 0.3s, opacity 0.3s; /* Add transitions for smooth animations */
  background-color: ${e=>e.theme.secondaryBackground};

  &:hover ${rw} {
    display: block;
  }
`,lN=[{description:"Test your vocabulary knowledge with QuizPictures. Identify correct words based on images and improve your language skills.",highlight:"/images/screenShots/games/pictureQuiz.png",link:"/quiz-pictures"},{description:"SentenceBuilderEx is a game that helps you practice building sentences. Select words to construct accurate sentences and enhance your language abilities.",highlight:"/images/screenShots/games/sentenceBuilder.png",link:"/sentence-builder-Ex"},{description:"exercise-article is a game that helps you practice french articles.",highlight:"/images/screenShots/games/LeLa.png",link:"/vocabulary-topics/exercise-article"}],cN=()=>l.jsx(uN,{children:lN.map(e=>{const{description:t,highlight:n,link:r}=e;return l.jsx(oN,{link:r,description:t,highlight:n})})}),uN=f.div`
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
`,dN=()=>l.jsx(fN,{children:l.jsx(pN,{children:"Content coming soon..."})}),fN=f.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
`,pN=f.p`
  font-size: 1.5rem;
  color: ${e=>e.theme.primaryText};
`,hN={fr:[{title:"Leçons de grammaire de base",question:"Voulez-vous apprendre les bases de la grammaire ?",description:"Explorez les leçons fondamentales de grammaire pour construire une base solide.",link:"basic-grammar-lessons"},{title:"Verbes",question:"Savez-vous comment conjuguer les verbes dans différents temps ?",description:"Explorez la conjugaison des verbes avec des traductions et des exemples dans divers temps et modes.",link:"verb"},{title:"article",question:"Voulez-vous en savoir plus sur les articles définis et indéfinis ?",description:"Découvrez l'usage et les règles des articles définis et indéfinis dans différents contextes.",link:"article"},{title:"Pronoms",question:"Souhaitez-vous explorer les différents types de pronoms ?",description:"Plongez dans le monde des pronoms et apprenez-en davantage sur leur rôle dans les phrases.",link:"pronom"},{title:"Jeux",question:"Êtes-vous prêt(e) à jouer à des jeux linguistiques ?",description:"Pratiquez vos compétences linguistiques avec des jeux interactifs.",link:"games"},{title:"Adverbes",question:"Êtes-vous curieux(se) de connaître l'utilisation des adverbes ?",description:"Découvrez comment les adverbes modifient les verbes, les adjectifs et d'autres adverbes pour fournir plus d'informations.",link:"adverbe"},{title:"Adjectifs",question:"Êtes-vous prêt(e) à découvrir les différents types d'adjectifs et leur utilisation ?",description:"Explorez les mots descriptifs qui enrichissent votre langage et expriment diverses qualités.",link:"adjectif"},{title:"Conjugaison",question:"Êtes-vous curieux(se) d'explorer la conjugaison des verbes dans différents temps et modes ?",description:"Apprenez comment les verbes changent en fonction du temps, du mode et du sujet, et pratiquez leur conjugaison.",link:"conjugaison"},{title:"Prépositions",question:"Êtes-vous prêt(e) à apprendre comment les prépositions indiquent les relations entre les mots ?",description:"Comprenez comment les prépositions aident à exprimer la position, la direction, le temps, etc.",link:"preposition"},{title:"Conjonctions",question:"Souhaitez-vous comprendre comment les conjonctions relient les mots et les propositions ?",description:"Explorez le rôle des conjonctions dans la liaison des mots, des phrases ou des propositions.",link:"conjonction"}],en:[{title:"Basic Grammar Lessons",question:"Do you want to learn the basics of grammar?",description:"Explore fundamental grammar lessons to build a strong foundation.",link:"/grammar/basic-grammer-lessons"},{title:"Verbs",question:"Do you know how to conjugate verbs in different tenses?",description:"Explore verb conjugation with translations and examples in various tenses and moods.",link:"/grammar/verbs"},{title:"Articles",question:"Would you like to learn about definite and indefinite articles?",description:"Discover the usage and rules of definite and indefinite articles in different contexts.",link:"/Content-Coming-Soon"},{title:"Games",question:"Ready to play some language games?",description:"Practice your language skills with interactive games.",link:"/games"},{title:"Pronouns",question:"Want to explore different types of pronouns?",description:"Dive into the world of pronouns and learn about their roles in sentences.",link:"/Content-Coming-Soon"},{title:"Adverbs",question:"Curious about the usage of adverbs?",description:"Discover how adverbs modify verbs, adjectives, and other adverbs to provide more information.",link:"/Content-Coming-Soon"},{title:"Adjectives",question:"Are you ready to discover different types of adjectives and their usage?",description:"Explore descriptive words that enhance your language and express various qualities.",link:"/Content-Coming-Soon"},{title:"Conjugation",question:"Interested in exploring verb conjugation in various tenses and moods?",description:"Learn how verbs change based on tense, mood, and subject, and practice conjugating them.",link:"/Content-Coming-Soon"},{title:"Prepositions",question:"Ready to learn how prepositions indicate relationships between words?",description:"Understand how prepositions help express location, direction, time, and more.",link:"/Content-Coming-Soon"},{title:"Conjunctions",question:"Do you want to understand how conjunctions connect words and clauses?",description:"Explore the role of conjunctions in joining words, phrases, or clauses together.",link:"/Content-Coming-Soon"}],ka:[{title:"გრამატიკის საბაზისო გაკვეთილები",question:"გინდა დაიწყო გრამატიკის შესწავლა?",description:"მაშინ ეს განყოფილება შენთვისაა. აქ თავმოყრილია გრამატიკის საბაზისო თემები.",link:"/grammar/basic-grammar-lessons"},{title:"ზმნები",question:"იცით როგორ აუღლოთ ზმნები სხვადასხვა დროებში?",description:"ზმნების უღლება სხვადასხვა დროს.",link:"/grammar/verbs"},{title:"არტიკლები",question:"იცით რა არი განსაზღვრული და განუსაზღვრელი არტიკლები..",description:"არტიკლები",link:"/Content-Coming-Soon"},{title:"ნაცვალსახელები",question:"გსურთ გაიგოთ სხვადასხვა ტიპების ნაცვალსახელები?",description:"შეიძლება გაიმოიცანით პრონომების როლი წარმოადგენს წინადადების პროდუქტებში.",link:"/Content-Coming-Soon"},{title:"თამაშები",question:"გახდეთ ენის თამაშები?",description:"გააკეთეთ ენის კომუნიკაციის უნარი თამაშების საშუალებით.",link:"/games"},{title:"ადვილები",question:"ხართ კიდევ კურიოზი ადვილების გამოყენების შესახებ?",description:"გაიმოიცანით, როგორ შეიძლება ადვილებები შეცვალონ ხალხები, ადგილები და დროები.",link:"/Content-Coming-Soon"},{title:"ადიქტივები",question:"გყავთ ნამდვილი განცხადების ადიქტივების გამოყენების შესახებ?",description:"აღწერეთ როგორ იმუშავებენ ადიქტივები ქართველებს და როგორ შეიძლება მათ გამოყენება.",link:"/Content-Coming-Soon"},{title:"Conjugation",question:"Interested in exploring verb conjugation in various tenses and moods?",description:"Learn how verbs change based on tense, mood, and subject, and practice conjugating them.",link:"/Content-Coming-Soon"},{title:"Prepositions",question:"Ready to learn how prepositions indicate relationships between words?",description:"Understand how prepositions help express location, direction, time, and more.",link:"/Content-Coming-Soon"},{title:"Conjunctions",question:"Do you want to understand how conjunctions connect words and clauses?",description:"Explore the role of conjunctions in joining words, phrases, or clauses together.",link:"/Content-Coming-Soon"}]},mN=()=>{Ue();const{t:e,i18n:t}=q(),n=t.language,r=hN[n]||[];return l.jsxs(Xv,{children:[l.jsx("h1",{children:e("Bienvenue dans la section Grammaire")}),l.jsx(t1,{children:e("Découvrez différents sujets de grammaire pour améliorer vos compétences linguistiques")}),l.jsx(Zv,{children:r.map((i,o)=>l.jsxs(e1,{index:o,children:[l.jsxs("div",{children:[l.jsx("h3",{"aria-label":"Topic Title",children:e(i.title)}),l.jsx("h4",{"aria-label":"Topic Question",children:e(i.question)}),l.jsx("p",{"aria-label":"Topic Description",children:e(i.description)})]}),l.jsx(xN,{to:i.link,children:l.jsx(gN,{children:e("Explorer")})},o)]}))})]})},gN=f(qe)`
  margin-bottom: auto;
  width: 10rem;
`,xN=f(Hn)`
  margin-top: auto;
  margin-left: auto;
  margin-bottom: 1rem;
  @media (max-width: 376px) {
    margin-right: 1rem;
  }
  @media (max-width: 300px) {
    margin-right: 5rem;
  }
`,yN=()=>{const{t:e,i18n:t}=q(),n=t.language;Ue();const r=E1[n]||[];return l.jsxs(Xv,{children:[l.jsx("h1",{children:e("Bienvenue dans la section Vocabulaire")}),l.jsx(t1,{children:e("Explorez différents sujets de vocabulaire pour améliorer vos compétences linguistiques")}),l.jsx(Zv,{children:r.map((i,o)=>l.jsxs(e1,{children:[l.jsxs("div",{children:[l.jsx("h3",{"aria-label":"Topic Title",children:e(i.title)}),l.jsx("h4",{"aria-label":"Topic Question",children:e(i.question)}),l.jsx("p",{"aria-label":"Topic Description",children:e(i.description)})]}),l.jsx(wN,{to:i.link,children:l.jsx(vN,{children:e("Explore")})},o)]}))})]})},vN=f(qe)`
  margin-bottom: auto;
  width: 10rem;
  @media (max-width: 576px) {
    width: 6rem;
    font-size: 1.2rem;
  }
`,wN=f(Hn)`
  margin-top: auto;
  margin-left: auto;
  margin-bottom: 1rem;
  @media (max-width: 376px) {
    margin-right: 1rem;
  }
  @media (max-width: 300px) {
    margin-right: 5rem;
  }
`,bN=()=>{Ue();const{TopicId:e}=_n(),t=Kf(),{handleListen:n,isActiveStates:r}=_e(),{t:i,i18n:o}=q(),s=o.language==="ka",a=(C,j)=>{for(const T in C)if(C.hasOwnProperty(T)&&Array.isArray(C[T])){const L=C[T].find(O=>O._id===j);if(L)return L}return null},c=_(C=>a(C.grammer.topicsByAspect,e)),u=_(C=>C.grammer.isLoading),d=_(C=>C.grammer.error);if(b.useEffect(()=>{c==null&&t("/grammar/basic-grammar-lessons")},[t,c]),u)return l.jsx(Be,{});if(d)return l.jsx(Eo,{});if(!c&&c===null)return null;const{title:{titleFr:h,titleEng:p,titleGeo:y},description:{descriptionFr:x,descriptionEng:v,descriptionGeo:S},example:{exampleFr:g,exampleEng:m,exampleGeo:w}}=c,k=s?S:v,A=s?w:m;return l.jsxs(K1,{children:[l.jsx(Y1,{children:l.jsx("h1",{children:h})}),l.jsxs(J1,{children:[l.jsx("h2",{children:i("Qu'est-ce que c'est ?")}),x.map((C,j)=>l.jsxs(Lp,{children:[l.jsx("p",{children:C}),l.jsx("span",{children:k[j]})]},j))]}),l.jsxs(X1,{children:[l.jsx("h2",{children:i("Examples")}),g.map((C,j)=>l.jsxs(Z1,{children:[l.jsx("div",{children:l.jsxs("p",{children:[C,C.length!==0&&l.jsx(SN,{onClick:n(C),isActive:r[j],children:l.jsx(nt,{})})]})}),l.jsx("span",{children:A[j]})]},j))]})]})},SN=f.span`
  display: flex;
  align-items: center;
`,kN=({topics:e})=>{const{i18n:t}=q(),n=t.language==="ka";if(Ue(),!e)return null;const{title:{titleFr:r,titleEn:i,titleGeo:o}}=e,s=n?o:i;return l.jsxs(AN,{children:[l.jsx("h2",{children:r}),l.jsx("h3",{children:s})]})},AN=f.div`
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
`,CN=()=>{Ue();const{aspect:e}=_n(),t=ne(),n=_(s=>s.grammer.topicsByAspect)||{},r=_(s=>s.grammer.isLoading),i=_(s=>s.grammer.error),o=n[e]||[];return b.useEffect(()=>{t(Gs(e))},[t,e]),r?l.jsx(Be,{}):i?l.jsx(Eo,{error:i}):l.jsx("div",{children:o&&(o==null?void 0:o.map(s=>l.jsxs(Hn,{to:`/grammar-topics/${s._id}`,children:[l.jsx(kN,{topics:s})," "]},s._id)))})},jN=({children:e})=>l.jsxs(EN,{children:[l.jsx(TN,{children:l.jsx(SP,{})}),l.jsxs(LN,{children:[e,l.jsx(AA,{})]})]}),EN=f.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  /* border: 2px solid green; */
`,TN=f.div`
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
`,LN=f.div`
  flex: 1;
  padding: 1rem;
  /* border: 2px solid black; */
`,ON=()=>{Ue(),gi();const{t:e}=q(),t=ne(),n=Kf(),r=_(d=>d.auth.isLoading),i=_(d=>d.auth.isAuthenticated);_(d=>d.auth.error);const[o,s]=b.useState(""),[a,c]=b.useState(""),u=async d=>{d.preventDefault();const h={email:o,password:a};try{await t(Us(h)),n("/")}catch(p){console.log("error",p)}};return l.jsxs(A1,{children:[l.jsx("h2",{children:e("Connexion")}),l.jsxs("form",{onSubmit:u,children:[l.jsxs(Xi,{children:[l.jsx("input",{type:"email",placeholder:e("E-mail"),value:o,onChange:d=>s(d.target.value)}),l.jsx("label",{htmlFor:""}),l.jsx("img",{src:k1,alt:"emailIcon"})]}),l.jsxs(Xi,{children:[l.jsx("input",{type:"password",placeholder:e("Mot de passe"),value:a,onChange:d=>c(d.target.value)}),l.jsx("img",{src:S1,alt:"passwordIcon"})]}),l.jsx(PN,{children:l.jsx(mP,{to:"/",children:e("Mot de passe oublié?")})}),l.jsx(C1,{type:"submit",disabled:r,children:r?`${e("Chargement")}...`:e("Connexion")}),l.jsxs(Tp,{children:[" ",e("Pas de compte?"),l.jsxs(Kl,{to:"/register",children:[e("Inscrivez-vous")," "]})]}),i&&l.jsx("p",{children:"Login successful"})]})]})},PN=f.div`
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
`;const $N="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABf0lEQVR4nO2XO07DQBBAQ8sFoIFLhEvQ8mnCAaiIKJAyEwo6IgpEQELiANCk4QyIaxCizCQI5BkfAJCMZhOLyLKRQ9ZO45G2yGqc93Z3xp9arayIohUkOQKWF2B9A9abs/F4tUS4XgPJF5B0gOUYSQRZbsuFj3Q/ngaWJpIES4FbIOk5sgyWA2fZc/MszdrJ4GMdSa+QtLfwYLk/HelGDEeSb6SwMQtvsewiyyeQ3Fme2TwDCfkSaI3Dzdxwi7TEf8c8K48DWaPkGZUG9ybwB9wKLhPuRWAR+MICOeFWmK47fAsAaTetz+23zZucSQLLg3WIVwEYBnW7NrnyJNwxpm3qV4DlAlheZ88268wLEUCWvkn8QsJGcuWFCbSHwZbbftbDeCfc/5B206rduwCQdKYCkcGdxDCoZ+V7F0CWHYPaTuTKL6IG5olKAKsjoKoItWrDXnUjwsxbMSkD66N7kShiUHjgvjtYLlMF2qzbk4TJ0837sPdFlifsv6+lCfwAlMR0gJgCus0AAAAASUVORK5CYII=",RN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABeElEQVR4nO2Xz0rDQBDG49W7Op9gX8K+hFf/XOoDeLL4FIoH0QqCD6CXXnwEKTPFi4+gFRS86BN0FlZmTaSGRFq7SS8Z2EOW2Xy/yczsZpOkJvM+WXKCQ2U8qeBdmS79I5ZrE1emngpUhU4c40iZPlVwVau4Y9rL5t0QXRX6WIi4mQodK+NlMeJD2g3zQ3QTf79CKnTuBP15hzLd+MH6xoS4c4xOLvIdZYxVcG1+iRNiFXqNBsBoTS1uVuT4X5sp8sycwOdzVJt4LIA/xa3gysRjAMwlPi/A1OKMlnVHdAAVuijqc3sO2y5TL0AK3VqHRAUYMza/1/6OPC+eaoQ2jQqgTKcqGE3mtizn1QAIng3i5z2MTj7yygDGQu103UH2JezZaqKo2qMDqJ3pti6IYmQQVhNl/vEBmLaDqFB7Gv9KamAWawBckwJpihBNG/abjciVbcXK9OaE7mw7rmQI9u3eoYyzMoCt9GISTrfYI/1fHPiH1bUigC/d4fba72lbkgAAAABJRU5ErkJggg==",zN=()=>{var S,g,m;const{t:e}=q(),t=ne(),r=gi()===pl?$N:RN,[i,o]=b.useState(""),[s,a]=b.useState(!1),c=_(w=>w.auth.auth)||{},u=(S=c.user)==null?void 0:S.username,d=(g=c.user)==null?void 0:g.role,h=(m=c.user)==null?void 0:m._id,p=_(w=>w.user.user),y=p.updatedUser;b.useEffect(()=>{p&&o(p.username)},[p]);const x=()=>{const w=i.trim();if(w.length<3){alert(e("Pseudonyme doit comporter au moins 3 caractères"));return}t(Hs({id:h,newUsername:w})),o(""),a(!1)},v=()=>{t(Gr(h))};return l.jsxs(NN,{children:[l.jsxs(BN,{children:[l.jsxs(IN,{children:[l.jsx("h5",{children:e("Nom")}),l.jsxs("p",{children:[s?l.jsx(_N,{type:"text",placeholder:"New username",value:i,onChange:w=>o(w.target.value)}):y?y.username:u,s?l.jsx("button",{onClick:x,children:"save"}):l.jsx(FN,{src:r,alt:"Edit Icon",onClick:()=>a(!0)})]})]}),l.jsxs(DN,{children:[" ",l.jsxs("span",{children:[e("Statut"),":"]}),l.jsx("span",{children:d})]})]}),l.jsx(Ep,{handleLogout:v}),l.jsx(MN,{to:"/vocabulary/flashcards",children:e("Entraîneur de cartes mémoire")})]})},NN=f.div`
  background-color: ${e=>e.theme.secondaryBackground};
  color: ${e=>e.theme.primaryText};
  margin: 2rem;
  padding: 20px;
  width: 350px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px rgba(20, 12, 12, 0.2);
`,BN=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,IN=f.h2`
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
`,FN=f.img`
  width: 1rem;
  height: 1rem;

  cursor: pointer;
`;f.p`
  font-size: 18px;
  margin-bottom: 10px;
`;const DN=f.p`
  font-size: 16px;
  margin-bottom: 20px;
  gap: 1rem;
  span {
    margin-left: 0.5rem;
    &:last-child {
      font-weight: bold;
    }
  }
`,MN=f(Ee)`
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
`,_N=f.input``;function UN(){const[e,t]=b.useState(!1),n=()=>{t(i=>!i)},r=e?pl:Nk;return l.jsx(Pk,{theme:r,children:l.jsxs(WN,{children:[l.jsx(bL,{}),l.jsx(IP,{toggleTheme:n,isDarkMode:e}),l.jsxs(jA,{children:[l.jsx(Y,{path:"/",element:l.jsx(f3,{})}),l.jsx(Y,{path:"/courses",element:l.jsx(z5,{})}),l.jsx(Y,{path:"/beginner",element:l.jsx(y5,{})}),l.jsx(Y,{path:"/intermediate",element:l.jsx(k5,{})}),l.jsx(Y,{path:"/advanced",element:l.jsx(A5,{})}),l.jsx(Y,{path:"/book-display",element:l.jsx(N1,{})}),l.jsx(Y,{path:"/books/level/a1-a2",element:l.jsx(u$,{})}),l.jsx(Y,{path:"/books/level/a2-b1",element:l.jsx(wg,{})}),l.jsx(Y,{path:"/books/level/b1-b2",element:l.jsx(h$,{})}),l.jsx(Y,{path:"/register",element:l.jsx(pP,{})}),l.jsx(Y,{path:"/login",element:l.jsx(ON,{})}),l.jsx(Y,{path:"/profile-page",element:l.jsx(zN,{})}),l.jsxs(Y,{element:l.jsx(jN,{}),children:[l.jsx(Y,{path:"/dictionary",element:l.jsx(f1,{})}),l.jsx(Y,{path:"/reading-zone/french-easy-reading",element:l.jsx(wg,{})}),l.jsx(Y,{path:"/reading-zone/french-easy-reading/:bookId",element:l.jsx(V$,{})}),l.jsx(Y,{path:"/grammar",element:l.jsx(mN,{})}),l.jsx(Y,{path:"/grammar/basic-grammar-lessons",element:l.jsx(vz,{})}),l.jsx(Y,{path:"/grammar/:aspect",element:l.jsx(CN,{})}),l.jsx(Y,{path:"/grammar-basic/:BasicGrammerTopicId",element:l.jsx(Sz,{})}),l.jsx(Y,{path:"/grammar-topics/:TopicId",element:l.jsx(bN,{})}),l.jsx(Y,{path:"/vocabulary",element:l.jsx(yN,{})}),l.jsx(Y,{path:"/vocabulary/vocabulary-topics",element:l.jsx(p4,{})}),l.jsx(Y,{path:"/vocabulary-topics/:topicId",element:l.jsx(XR,{})}),l.jsx(Y,{path:"/vocabulary/exercise-article",element:l.jsx(W1,{})}),l.jsx(Y,{path:"/vocabulary/verb-tense-exercise",element:l.jsx(LO,{})}),l.jsx(Y,{path:"/vocabulary/Flashcards",element:l.jsx(Wz,{})}),l.jsx(Y,{path:"/vocabulary-topics/exercise-quiz",element:l.jsx(U1,{})}),l.jsx(Y,{path:"/vocabulary/favorite-words",element:l.jsx(i4,{})}),l.jsx(Y,{path:"/vocabulary/sentence-builder",element:l.jsx(h1,{})}),l.jsx(Y,{path:"/games",element:l.jsx(cN,{})}),l.jsx(Y,{path:"/Content-Coming-Soon",element:l.jsx(dN,{})}),l.jsx(Y,{path:"/verbs/:verb",element:l.jsx(B1,{})})]}),l.jsx(Y,{path:"/dialogue-topics",element:l.jsx(P4,{})}),l.jsx(Y,{path:"/dialogue-topics/:dialogueTopicId",element:l.jsx(X4,{})}),l.jsx(Y,{path:"/quiz-pictures",element:l.jsx(LL,{})})]})]})})}const WN=f.section`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 100%;
  overflow-x: hidden;
`,uu=ae("allWordsFromDictionary/fetchDictionary",async()=>{try{return(await le.get("/words")).data}catch(e){throw console.log(e),Error("Failed to fetch dictionay")}}),HN={dictionary:[],isLoading:!1,error:null},VN=Pe({name:"allWordsFromDictionary",initialState:HN,reducers:{},extraReducers:e=>{e.addCase(uu.pending,t=>{t.isLoading=!0}).addCase(uu.fulfilled,(t,n)=>{t.dictionary=n.payload,t.isLoading=!1}).addCase(uu.rejected,(t,n)=>{t.error=n.error.message})}}),QN=VN.reducer,GN=i2({reducer:{dialogues:X3,dialogueExercises:U3,sentenceBuilder:l5,newPhrases:i5,grammer:p5,vocabularyTopics:Bj,books:Rj,dialogueTopics:k4,dictionary:_L,allWordsFromDictionary:QN,isFavorite:GL,quizData:uL,presentTense:TO,sentences:_O,grammer:vP,flashcards:eO,verbTenses:gz,user:cP,auth:K5}}),qN={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console&&console[e]&&console[e].apply(console,t)}};class Ua{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,n)}init(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=t||qN,this.options=n,this.debug=n.debug}log(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"log","",!0)}warn(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"warn","",!0)}error(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"error","")}deprecate(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(t,n,r,i){return i&&!this.debug?null:(typeof t[0]=="string"&&(t[0]=`${r}${this.prefix} ${t[0]}`),this.logger[n](t))}create(t){return new Ua(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new Ua(this.logger,t)}}var Vt=new Ua;class Yl{constructor(){this.observers={}}on(t,n){return t.split(" ").forEach(r=>{this.observers[r]=this.observers[r]||[],this.observers[r].push(n)}),this}off(t,n){if(this.observers[t]){if(!n){delete this.observers[t];return}this.observers[t]=this.observers[t].filter(r=>r!==n)}}emit(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];this.observers[t]&&[].concat(this.observers[t]).forEach(s=>{s(...r)}),this.observers["*"]&&[].concat(this.observers["*"]).forEach(s=>{s.apply(s,[t,...r])})}}function $i(){let e,t;const n=new Promise((r,i)=>{e=r,t=i});return n.resolve=e,n.reject=t,n}function Lg(e){return e==null?"":""+e}function KN(e,t,n){e.forEach(r=>{t[r]&&(n[r]=t[r])})}function Op(e,t,n){function r(s){return s&&s.indexOf("###")>-1?s.replace(/###/g,"."):s}function i(){return!e||typeof e=="string"}const o=typeof t!="string"?[].concat(t):t.split(".");for(;o.length>1;){if(i())return{};const s=r(o.shift());!e[s]&&n&&(e[s]=new n),Object.prototype.hasOwnProperty.call(e,s)?e=e[s]:e={}}return i()?{}:{obj:e,k:r(o.shift())}}function Og(e,t,n){const{obj:r,k:i}=Op(e,t,Object);r[i]=n}function YN(e,t,n,r){const{obj:i,k:o}=Op(e,t,Object);i[o]=i[o]||[],r&&(i[o]=i[o].concat(n)),r||i[o].push(n)}function Wa(e,t){const{obj:n,k:r}=Op(e,t);if(n)return n[r]}function JN(e,t,n){const r=Wa(e,n);return r!==void 0?r:Wa(t,n)}function iw(e,t,n){for(const r in t)r!=="__proto__"&&r!=="constructor"&&(r in e?typeof e[r]=="string"||e[r]instanceof String||typeof t[r]=="string"||t[r]instanceof String?n&&(e[r]=t[r]):iw(e[r],t[r],n):e[r]=t[r]);return e}function wr(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var XN={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function ZN(e){return typeof e=="string"?e.replace(/[&<>"'\/]/g,t=>XN[t]):e}const eB=[" ",",","?","!",";"];function tB(e,t,n){t=t||"",n=n||"";const r=eB.filter(s=>t.indexOf(s)<0&&n.indexOf(s)<0);if(r.length===0)return!0;const i=new RegExp(`(${r.map(s=>s==="?"?"\\?":s).join("|")})`);let o=!i.test(e);if(!o){const s=e.indexOf(n);s>0&&!i.test(e.substring(0,s))&&(o=!0)}return o}function Ha(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!e)return;if(e[t])return e[t];const r=t.split(n);let i=e;for(let o=0;o<r.length;++o){if(!i||typeof i[r[o]]=="string"&&o+1<r.length)return;if(i[r[o]]===void 0){let s=2,a=r.slice(o,o+s).join(n),c=i[a];for(;c===void 0&&r.length>o+s;)s++,a=r.slice(o,o+s).join(n),c=i[a];if(c===void 0)return;if(c===null)return null;if(t.endsWith(a)){if(typeof c=="string")return c;if(a&&typeof c[a]=="string")return c[a]}const u=r.slice(o+s).join(n);return u?Ha(c,u,n):void 0}i=i[r[o]]}return i}function Va(e){return e&&e.indexOf("_")>0?e.replace("_","-"):e}class Pg extends Yl{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const n=this.options.ns.indexOf(t);n>-1&&this.options.ns.splice(n,1)}getResource(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const o=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,s=i.ignoreJSONStructure!==void 0?i.ignoreJSONStructure:this.options.ignoreJSONStructure;let a=[t,n];r&&typeof r!="string"&&(a=a.concat(r)),r&&typeof r=="string"&&(a=a.concat(o?r.split(o):r)),t.indexOf(".")>-1&&(a=t.split("."));const c=Wa(this.data,a);return c||!s||typeof r!="string"?c:Ha(this.data&&this.data[t]&&this.data[t][n],r,o)}addResource(t,n,r,i){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const s=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator;let a=[t,n];r&&(a=a.concat(s?r.split(s):r)),t.indexOf(".")>-1&&(a=t.split("."),i=n,n=a[1]),this.addNamespaces(n),Og(this.data,a,i),o.silent||this.emit("added",t,n,r,i)}addResources(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const o in r)(typeof r[o]=="string"||Object.prototype.toString.apply(r[o])==="[object Array]")&&this.addResource(t,n,o,r[o],{silent:!0});i.silent||this.emit("added",t,n,r)}addResourceBundle(t,n,r,i,o){let s=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1},a=[t,n];t.indexOf(".")>-1&&(a=t.split("."),i=r,r=n,n=a[1]),this.addNamespaces(n);let c=Wa(this.data,a)||{};i?iw(c,r,o):c={...c,...r},Og(this.data,a,c),s.silent||this.emit("added",t,n,r)}removeResourceBundle(t,n){this.hasResourceBundle(t,n)&&delete this.data[t][n],this.removeNamespaces(n),this.emit("removed",t,n)}hasResourceBundle(t,n){return this.getResource(t,n)!==void 0}getResourceBundle(t,n){return n||(n=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(t,n)}:this.getResource(t,n)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const n=this.getDataByLanguage(t);return!!(n&&Object.keys(n)||[]).find(i=>n[i]&&Object.keys(n[i]).length>0)}toJSON(){return this.data}}var ow={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,i){return e.forEach(o=>{this.processors[o]&&(t=this.processors[o].process(t,n,r,i))}),t}};const $g={};class Qa extends Yl{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),KN(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Vt.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const r=this.resolve(t,n);return r&&r.res!==void 0}extractFromKey(t,n){let r=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;r===void 0&&(r=":");const i=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let o=n.ns||this.options.defaultNS||[];const s=r&&t.indexOf(r)>-1,a=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!tB(t,r,i);if(s&&!a){const c=t.match(this.interpolator.nestingRegexp);if(c&&c.length>0)return{key:t,namespaces:o};const u=t.split(r);(r!==i||r===i&&this.options.ns.indexOf(u[0])>-1)&&(o=u.shift()),t=u.join(i)}return typeof o=="string"&&(o=[o]),{key:t,namespaces:o}}translate(t,n,r){if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const i=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,o=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:s,namespaces:a}=this.extractFromKey(t[t.length-1],n),c=a[a.length-1],u=n.lng||this.language,d=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(u&&u.toLowerCase()==="cimode"){if(d){const k=n.nsSeparator||this.options.nsSeparator;return i?{res:`${c}${k}${s}`,usedKey:s,exactUsedKey:s,usedLng:u,usedNS:c}:`${c}${k}${s}`}return i?{res:s,usedKey:s,exactUsedKey:s,usedLng:u,usedNS:c}:s}const h=this.resolve(t,n);let p=h&&h.res;const y=h&&h.usedKey||s,x=h&&h.exactUsedKey||s,v=Object.prototype.toString.apply(p),S=["[object Number]","[object Function]","[object RegExp]"],g=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,m=!this.i18nFormat||this.i18nFormat.handleAsObject;if(m&&p&&(typeof p!="string"&&typeof p!="boolean"&&typeof p!="number")&&S.indexOf(v)<0&&!(typeof g=="string"&&v==="[object Array]")){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const k=this.options.returnedObjectHandler?this.options.returnedObjectHandler(y,p,{...n,ns:a}):`key '${s} (${this.language})' returned an object instead of string.`;return i?(h.res=k,h):k}if(o){const k=v==="[object Array]",A=k?[]:{},C=k?x:y;for(const j in p)if(Object.prototype.hasOwnProperty.call(p,j)){const T=`${C}${o}${j}`;A[j]=this.translate(T,{...n,joinArrays:!1,ns:a}),A[j]===T&&(A[j]=p[j])}p=A}}else if(m&&typeof g=="string"&&v==="[object Array]")p=p.join(g),p&&(p=this.extendTranslation(p,t,n,r));else{let k=!1,A=!1;const C=n.count!==void 0&&typeof n.count!="string",j=Qa.hasDefaultValue(n),T=C?this.pluralResolver.getSuffix(u,n.count,n):"",L=n.ordinal&&C?this.pluralResolver.getSuffix(u,n.count,{ordinal:!1}):"",O=n[`defaultValue${T}`]||n[`defaultValue${L}`]||n.defaultValue;!this.isValidLookup(p)&&j&&(k=!0,p=O),this.isValidLookup(p)||(A=!0,p=s);const N=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&A?void 0:p,B=j&&O!==p&&this.options.updateMissing;if(A||k||B){if(this.logger.log(B?"updateKey":"missingKey",u,c,s,B?O:p),o){const $=this.resolve(s,{...n,keySeparator:!1});$&&$.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let D=[];const U=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&U&&U[0])for(let $=0;$<U.length;$++)D.push(U[$]);else this.options.saveMissingTo==="all"?D=this.languageUtils.toResolveHierarchy(n.lng||this.language):D.push(n.lng||this.language);const H=($,E,I)=>{const z=j&&I!==p?I:N;this.options.missingKeyHandler?this.options.missingKeyHandler($,c,E,z,B,n):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing($,c,E,z,B,n),this.emit("missingKey",$,c,E,p)};this.options.saveMissing&&(this.options.saveMissingPlurals&&C?D.forEach($=>{this.pluralResolver.getSuffixes($,n).forEach(E=>{H([$],s+E,n[`defaultValue${E}`]||O)})}):H(D,s,O))}p=this.extendTranslation(p,t,n,h,r),A&&p===s&&this.options.appendNamespaceToMissingKey&&(p=`${c}:${s}`),(A||k)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?p=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${c}:${s}`:s,k?p:void 0):p=this.options.parseMissingKeyHandler(p))}return i?(h.res=p,h):p}extendTranslation(t,n,r,i,o){var s=this;if(this.i18nFormat&&this.i18nFormat.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...r},i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init({...r,interpolation:{...this.options.interpolation,...r.interpolation}});const u=typeof t=="string"&&(r&&r.interpolation&&r.interpolation.skipOnVariables!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let d;if(u){const p=t.match(this.interpolator.nestingRegexp);d=p&&p.length}let h=r.replace&&typeof r.replace!="string"?r.replace:r;if(this.options.interpolation.defaultVariables&&(h={...this.options.interpolation.defaultVariables,...h}),t=this.interpolator.interpolate(t,h,r.lng||this.language,r),u){const p=t.match(this.interpolator.nestingRegexp),y=p&&p.length;d<y&&(r.nest=!1)}!r.lng&&this.options.compatibilityAPI!=="v1"&&i&&i.res&&(r.lng=i.usedLng),r.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var p=arguments.length,y=new Array(p),x=0;x<p;x++)y[x]=arguments[x];return o&&o[0]===y[0]&&!r.context?(s.logger.warn(`It seems you are nesting recursively key: ${y[0]} in key: ${n[0]}`),null):s.translate(...y,n)},r)),r.interpolation&&this.interpolator.reset()}const a=r.postProcess||this.options.postProcess,c=typeof a=="string"?[a]:a;return t!=null&&c&&c.length&&r.applyPostProcessor!==!1&&(t=ow.handle(c,t,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:i,...r}:r,this)),t}resolve(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r,i,o,s,a;return typeof t=="string"&&(t=[t]),t.forEach(c=>{if(this.isValidLookup(r))return;const u=this.extractFromKey(c,n),d=u.key;i=d;let h=u.namespaces;this.options.fallbackNS&&(h=h.concat(this.options.fallbackNS));const p=n.count!==void 0&&typeof n.count!="string",y=p&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),x=n.context!==void 0&&(typeof n.context=="string"||typeof n.context=="number")&&n.context!=="",v=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);h.forEach(S=>{this.isValidLookup(r)||(a=S,!$g[`${v[0]}-${S}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&($g[`${v[0]}-${S}`]=!0,this.logger.warn(`key "${i}" for languages "${v.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),v.forEach(g=>{if(this.isValidLookup(r))return;s=g;const m=[d];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(m,d,g,S,n);else{let k;p&&(k=this.pluralResolver.getSuffix(g,n.count,n));const A=`${this.options.pluralSeparator}zero`,C=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(p&&(m.push(d+k),n.ordinal&&k.indexOf(C)===0&&m.push(d+k.replace(C,this.options.pluralSeparator)),y&&m.push(d+A)),x){const j=`${d}${this.options.contextSeparator}${n.context}`;m.push(j),p&&(m.push(j+k),n.ordinal&&k.indexOf(C)===0&&m.push(j+k.replace(C,this.options.pluralSeparator)),y&&m.push(j+A))}}let w;for(;w=m.pop();)this.isValidLookup(r)||(o=w,r=this.getResource(g,S,w,n))}))})}),{res:r,usedKey:i,exactUsedKey:o,usedLng:s,usedNS:a}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(t,n,r,i):this.resourceStore.getResource(t,n,r,i)}static hasDefaultValue(t){const n="defaultValue";for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&n===r.substring(0,n.length)&&t[r]!==void 0)return!0;return!1}}function du(e){return e.charAt(0).toUpperCase()+e.slice(1)}class Rg{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Vt.create("languageUtils")}getScriptPartFromCode(t){if(t=Va(t),!t||t.indexOf("-")<0)return null;const n=t.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(t){if(t=Va(t),!t||t.indexOf("-")<0)return t;const n=t.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(t){if(typeof t=="string"&&t.indexOf("-")>-1){const n=["hans","hant","latn","cyrl","cans","mong","arab"];let r=t.split("-");return this.options.lowerCaseLng?r=r.map(i=>i.toLowerCase()):r.length===2?(r[0]=r[0].toLowerCase(),r[1]=r[1].toUpperCase(),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=du(r[1].toLowerCase()))):r.length===3&&(r[0]=r[0].toLowerCase(),r[1].length===2&&(r[1]=r[1].toUpperCase()),r[0]!=="sgn"&&r[2].length===2&&(r[2]=r[2].toUpperCase()),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=du(r[1].toLowerCase())),n.indexOf(r[2].toLowerCase())>-1&&(r[2]=du(r[2].toLowerCase()))),r.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let n;return t.forEach(r=>{if(n)return;const i=this.formatLanguageCode(r);(!this.options.supportedLngs||this.isSupportedCode(i))&&(n=i)}),!n&&this.options.supportedLngs&&t.forEach(r=>{if(n)return;const i=this.getLanguagePartFromCode(r);if(this.isSupportedCode(i))return n=i;n=this.options.supportedLngs.find(o=>{if(o===i)return o;if(!(o.indexOf("-")<0&&i.indexOf("-")<0)&&o.indexOf(i)===0)return o})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(t,n){if(!t)return[];if(typeof t=="function"&&(t=t(n)),typeof t=="string"&&(t=[t]),Object.prototype.toString.apply(t)==="[object Array]")return t;if(!n)return t.default||[];let r=t[n];return r||(r=t[this.getScriptPartFromCode(n)]),r||(r=t[this.formatLanguageCode(n)]),r||(r=t[this.getLanguagePartFromCode(n)]),r||(r=t.default),r||[]}toResolveHierarchy(t,n){const r=this.getFallbackCodes(n||this.options.fallbackLng||[],t),i=[],o=s=>{s&&(this.isSupportedCode(s)?i.push(s):this.logger.warn(`rejecting language code not found in supportedLngs: ${s}`))};return typeof t=="string"&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&o(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&o(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&o(this.getLanguagePartFromCode(t))):typeof t=="string"&&o(this.formatLanguageCode(t)),r.forEach(s=>{i.indexOf(s)<0&&o(this.formatLanguageCode(s))}),i}}let nB=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],rB={1:function(e){return+(e>1)},2:function(e){return+(e!=1)},3:function(e){return 0},4:function(e){return e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},5:function(e){return e==0?0:e==1?1:e==2?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5},6:function(e){return e==1?0:e>=2&&e<=4?1:2},7:function(e){return e==1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},8:function(e){return e==1?0:e==2?1:e!=8&&e!=11?2:3},9:function(e){return+(e>=2)},10:function(e){return e==1?0:e==2?1:e<7?2:e<11?3:4},11:function(e){return e==1||e==11?0:e==2||e==12?1:e>2&&e<20?2:3},12:function(e){return+(e%10!=1||e%100==11)},13:function(e){return+(e!==0)},14:function(e){return e==1?0:e==2?1:e==3?2:3},15:function(e){return e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2},16:function(e){return e%10==1&&e%100!=11?0:e!==0?1:2},17:function(e){return e==1||e%10==1&&e%100!=11?0:1},18:function(e){return e==0?0:e==1?1:2},19:function(e){return e==1?0:e==0||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3},20:function(e){return e==1?0:e==0||e%100>0&&e%100<20?1:2},21:function(e){return e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0},22:function(e){return e==1?0:e==2?1:(e<0||e>10)&&e%10==0?2:3}};const iB=["v1","v2","v3"],oB=["v4"],zg={zero:0,one:1,two:2,few:3,many:4,other:5};function sB(){const e={};return nB.forEach(t=>{t.lngs.forEach(n=>{e[n]={numbers:t.nr,plurals:rB[t.fc]}})}),e}class aB{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=n,this.logger=Vt.create("pluralResolver"),(!this.options.compatibilityJSON||oB.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=sB()}addRule(t,n){this.rules[t]=n}getRule(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(Va(t),{type:n.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]}needsPlural(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(t,n);return this.shouldUseIntlApi()?r&&r.resolvedOptions().pluralCategories.length>1:r&&r.numbers.length>1}getPluralFormsOfKey(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,r).map(i=>`${n}${i}`)}getSuffixes(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(t,n);return r?this.shouldUseIntlApi()?r.resolvedOptions().pluralCategories.sort((i,o)=>zg[i]-zg[o]).map(i=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${i}`):r.numbers.map(i=>this.getSuffix(t,i,n)):[]}getSuffix(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const i=this.getRule(t,r);return i?this.shouldUseIntlApi()?`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${i.select(n)}`:this.getSuffixRetroCompatible(i,n):(this.logger.warn(`no plural rule found for: ${t}`),"")}getSuffixRetroCompatible(t,n){const r=t.noAbs?t.plurals(n):t.plurals(Math.abs(n));let i=t.numbers[r];this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1&&(i===2?i="plural":i===1&&(i=""));const o=()=>this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString();return this.options.compatibilityJSON==="v1"?i===1?"":typeof i=="number"?`_plural_${i.toString()}`:o():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1?o():this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString()}shouldUseIntlApi(){return!iB.includes(this.options.compatibilityJSON)}}function Ng(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,o=JN(e,t,n);return!o&&i&&typeof n=="string"&&(o=Ha(e,n,r),o===void 0&&(o=Ha(t,n,r))),o}class lB{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Vt.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||(n=>n),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const n=t.interpolation;this.escape=n.escape!==void 0?n.escape:ZN,this.escapeValue=n.escapeValue!==void 0?n.escapeValue:!0,this.useRawValueToEscape=n.useRawValueToEscape!==void 0?n.useRawValueToEscape:!1,this.prefix=n.prefix?wr(n.prefix):n.prefixEscaped||"{{",this.suffix=n.suffix?wr(n.suffix):n.suffixEscaped||"}}",this.formatSeparator=n.formatSeparator?n.formatSeparator:n.formatSeparator||",",this.unescapePrefix=n.unescapeSuffix?"":n.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":n.unescapeSuffix||"",this.nestingPrefix=n.nestingPrefix?wr(n.nestingPrefix):n.nestingPrefixEscaped||wr("$t("),this.nestingSuffix=n.nestingSuffix?wr(n.nestingSuffix):n.nestingSuffixEscaped||wr(")"),this.nestingOptionsSeparator=n.nestingOptionsSeparator?n.nestingOptionsSeparator:n.nestingOptionsSeparator||",",this.maxReplaces=n.maxReplaces?n.maxReplaces:1e3,this.alwaysFormat=n.alwaysFormat!==void 0?n.alwaysFormat:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=`${this.prefix}(.+?)${this.suffix}`;this.regexp=new RegExp(t,"g");const n=`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;this.regexpUnescape=new RegExp(n,"g");const r=`${this.nestingPrefix}(.+?)${this.nestingSuffix}`;this.nestingRegexp=new RegExp(r,"g")}interpolate(t,n,r,i){let o,s,a;const c=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function u(x){return x.replace(/\$/g,"$$$$")}const d=x=>{if(x.indexOf(this.formatSeparator)<0){const m=Ng(n,c,x,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(m,void 0,r,{...i,...n,interpolationkey:x}):m}const v=x.split(this.formatSeparator),S=v.shift().trim(),g=v.join(this.formatSeparator).trim();return this.format(Ng(n,c,S,this.options.keySeparator,this.options.ignoreJSONStructure),g,r,{...i,...n,interpolationkey:S})};this.resetRegExp();const h=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,p=i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:x=>u(x)},{regex:this.regexp,safeValue:x=>this.escapeValue?u(this.escape(x)):u(x)}].forEach(x=>{for(a=0;o=x.regex.exec(t);){const v=o[1].trim();if(s=d(v),s===void 0)if(typeof h=="function"){const g=h(t,o,i);s=typeof g=="string"?g:""}else if(i&&Object.prototype.hasOwnProperty.call(i,v))s="";else if(p){s=o[0];continue}else this.logger.warn(`missed to pass in variable ${v} for interpolating ${t}`),s="";else typeof s!="string"&&!this.useRawValueToEscape&&(s=Lg(s));const S=x.safeValue(s);if(t=t.replace(o[0],S),p?(x.regex.lastIndex+=s.length,x.regex.lastIndex-=o[0].length):x.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),t}nest(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i,o,s;function a(c,u){const d=this.nestingOptionsSeparator;if(c.indexOf(d)<0)return c;const h=c.split(new RegExp(`${d}[ ]*{`));let p=`{${h[1]}`;c=h[0],p=this.interpolate(p,s);const y=p.match(/'/g),x=p.match(/"/g);(y&&y.length%2===0&&!x||x.length%2!==0)&&(p=p.replace(/'/g,'"'));try{s=JSON.parse(p),u&&(s={...u,...s})}catch(v){return this.logger.warn(`failed parsing options string in nesting for key ${c}`,v),`${c}${d}${p}`}return delete s.defaultValue,c}for(;i=this.nestingRegexp.exec(t);){let c=[];s={...r},s=s.replace&&typeof s.replace!="string"?s.replace:s,s.applyPostProcessor=!1,delete s.defaultValue;let u=!1;if(i[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(i[1])){const d=i[1].split(this.formatSeparator).map(h=>h.trim());i[1]=d.shift(),c=d,u=!0}if(o=n(a.call(this,i[1].trim(),s),s),o&&i[0]===t&&typeof o!="string")return o;typeof o!="string"&&(o=Lg(o)),o||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`),o=""),u&&(o=c.reduce((d,h)=>this.format(d,h,r.lng,{...r,interpolationkey:i[1].trim()}),o.trim())),t=t.replace(i[0],o),this.regexp.lastIndex=0}return t}}function cB(e){let t=e.toLowerCase().trim();const n={};if(e.indexOf("(")>-1){const r=e.split("(");t=r[0].toLowerCase().trim();const i=r[1].substring(0,r[1].length-1);t==="currency"&&i.indexOf(":")<0?n.currency||(n.currency=i.trim()):t==="relativetime"&&i.indexOf(":")<0?n.range||(n.range=i.trim()):i.split(";").forEach(s=>{if(!s)return;const[a,...c]=s.split(":"),u=c.join(":").trim().replace(/^'+|'+$/g,"");n[a.trim()]||(n[a.trim()]=u),u==="false"&&(n[a.trim()]=!1),u==="true"&&(n[a.trim()]=!0),isNaN(u)||(n[a.trim()]=parseInt(u,10))})}return{formatName:t,formatOptions:n}}function br(e){const t={};return function(r,i,o){const s=i+JSON.stringify(o);let a=t[s];return a||(a=e(Va(i),o),t[s]=a),a(r)}}class uB{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Vt.create("formatter"),this.options=t,this.formats={number:br((n,r)=>{const i=new Intl.NumberFormat(n,{...r});return o=>i.format(o)}),currency:br((n,r)=>{const i=new Intl.NumberFormat(n,{...r,style:"currency"});return o=>i.format(o)}),datetime:br((n,r)=>{const i=new Intl.DateTimeFormat(n,{...r});return o=>i.format(o)}),relativetime:br((n,r)=>{const i=new Intl.RelativeTimeFormat(n,{...r});return o=>i.format(o,r.range||"day")}),list:br((n,r)=>{const i=new Intl.ListFormat(n,{...r});return o=>i.format(o)})},this.init(t)}init(t){const r=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}}).interpolation;this.formatSeparator=r.formatSeparator?r.formatSeparator:r.formatSeparator||","}add(t,n){this.formats[t.toLowerCase().trim()]=n}addCached(t,n){this.formats[t.toLowerCase().trim()]=br(n)}format(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return n.split(this.formatSeparator).reduce((a,c)=>{const{formatName:u,formatOptions:d}=cB(c);if(this.formats[u]){let h=a;try{const p=i&&i.formatParams&&i.formatParams[i.interpolationkey]||{},y=p.locale||p.lng||i.locale||i.lng||r;h=this.formats[u](a,y,{...d,...i,...p})}catch(p){this.logger.warn(p)}return h}else this.logger.warn(`there was no format function for ${u}`);return a},t)}}function dB(e,t){e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)}class fB extends Yl{constructor(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=n,this.services=r,this.languageUtils=r.languageUtils,this.options=i,this.logger=Vt.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=i.maxParallelReads||10,this.readingCalls=0,this.maxRetries=i.maxRetries>=0?i.maxRetries:5,this.retryTimeout=i.retryTimeout>=1?i.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(r,i.backend,i)}queueLoad(t,n,r,i){const o={},s={},a={},c={};return t.forEach(u=>{let d=!0;n.forEach(h=>{const p=`${u}|${h}`;!r.reload&&this.store.hasResourceBundle(u,h)?this.state[p]=2:this.state[p]<0||(this.state[p]===1?s[p]===void 0&&(s[p]=!0):(this.state[p]=1,d=!1,s[p]===void 0&&(s[p]=!0),o[p]===void 0&&(o[p]=!0),c[h]===void 0&&(c[h]=!0)))}),d||(a[u]=!0)}),(Object.keys(o).length||Object.keys(s).length)&&this.queue.push({pending:s,pendingCount:Object.keys(s).length,loaded:{},errors:[],callback:i}),{toLoad:Object.keys(o),pending:Object.keys(s),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(c)}}loaded(t,n,r){const i=t.split("|"),o=i[0],s=i[1];n&&this.emit("failedLoading",o,s,n),r&&this.store.addResourceBundle(o,s,r),this.state[t]=n?-1:2;const a={};this.queue.forEach(c=>{YN(c.loaded,[o],s),dB(c,t),n&&c.errors.push(n),c.pendingCount===0&&!c.done&&(Object.keys(c.loaded).forEach(u=>{a[u]||(a[u]={});const d=c.loaded[u];d.length&&d.forEach(h=>{a[u][h]===void 0&&(a[u][h]=!0)})}),c.done=!0,c.errors.length?c.callback(c.errors):c.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(c=>!c.done)}read(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,s=arguments.length>5?arguments[5]:void 0;if(!t.length)return s(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:n,fcName:r,tried:i,wait:o,callback:s});return}this.readingCalls++;const a=(u,d)=>{if(this.readingCalls--,this.waitingReads.length>0){const h=this.waitingReads.shift();this.read(h.lng,h.ns,h.fcName,h.tried,h.wait,h.callback)}if(u&&d&&i<this.maxRetries){setTimeout(()=>{this.read.call(this,t,n,r,i+1,o*2,s)},o);return}s(u,d)},c=this.backend[r].bind(this.backend);if(c.length===2){try{const u=c(t,n);u&&typeof u.then=="function"?u.then(d=>a(null,d)).catch(a):a(null,u)}catch(u){a(u)}return}return c(t,n,a)}prepareLoading(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();typeof t=="string"&&(t=this.languageUtils.toResolveHierarchy(t)),typeof n=="string"&&(n=[n]);const o=this.queueLoad(t,n,r,i);if(!o.toLoad.length)return o.pending.length||i(),null;o.toLoad.forEach(s=>{this.loadOne(s)})}load(t,n,r){this.prepareLoading(t,n,{},r)}reload(t,n,r){this.prepareLoading(t,n,{reload:!0},r)}loadOne(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const r=t.split("|"),i=r[0],o=r[1];this.read(i,o,"read",void 0,void 0,(s,a)=>{s&&this.logger.warn(`${n}loading namespace ${o} for language ${i} failed`,s),!s&&a&&this.logger.log(`${n}loaded namespace ${o} for language ${i}`,a),this.loaded(t,s,a)})}saveMissing(t,n,r,i,o){let s=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(n)){this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(r==null||r==="")){if(this.backend&&this.backend.create){const c={...s,isUpdate:o},u=this.backend.create.bind(this.backend);if(u.length<6)try{let d;u.length===5?d=u(t,n,r,i,c):d=u(t,n,r,i),d&&typeof d.then=="function"?d.then(h=>a(null,h)).catch(a):a(null,d)}catch(d){a(d)}else u(t,n,r,i,a,c)}!t||!t[0]||this.store.addResource(t[0],n,r,i)}}}function Bg(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){let n={};if(typeof t[1]=="object"&&(n=t[1]),typeof t[1]=="string"&&(n.defaultValue=t[1]),typeof t[2]=="string"&&(n.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const r=t[3]||t[2];Object.keys(r).forEach(i=>{n[i]=r[i]})}return n},interpolation:{escapeValue:!0,format:(e,t,n,r)=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function Ig(e){return typeof e.ns=="string"&&(e.ns=[e.ns]),typeof e.fallbackLng=="string"&&(e.fallbackLng=[e.fallbackLng]),typeof e.fallbackNS=="string"&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function ds(){}function pB(e){Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(n=>{typeof e[n]=="function"&&(e[n]=e[n].bind(e))})}class Lo extends Yl{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Ig(t),this.services={},this.logger=Vt,this.modules={external:[]},pB(this),n&&!this.isInitialized&&!t.isClone){if(!this.options.initImmediate)return this.init(t,n),this;setTimeout(()=>{this.init(t,n)},0)}}init(){var t=this;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;typeof n=="function"&&(r=n,n={}),!n.defaultNS&&n.defaultNS!==!1&&n.ns&&(typeof n.ns=="string"?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const i=Bg();this.options={...i,...this.options,...Ig(n)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...i.interpolation,...this.options.interpolation}),n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator);function o(d){return d?typeof d=="function"?new d:d:null}if(!this.options.isClone){this.modules.logger?Vt.init(o(this.modules.logger),this.options):Vt.init(null,this.options);let d;this.modules.formatter?d=this.modules.formatter:typeof Intl<"u"&&(d=uB);const h=new Rg(this.options);this.store=new Pg(this.options.resources,this.options);const p=this.services;p.logger=Vt,p.resourceStore=this.store,p.languageUtils=h,p.pluralResolver=new aB(h,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),d&&(!this.options.interpolation.format||this.options.interpolation.format===i.interpolation.format)&&(p.formatter=o(d),p.formatter.init(p,this.options),this.options.interpolation.format=p.formatter.format.bind(p.formatter)),p.interpolator=new lB(this.options),p.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},p.backendConnector=new fB(o(this.modules.backend),p.resourceStore,p,this.options),p.backendConnector.on("*",function(y){for(var x=arguments.length,v=new Array(x>1?x-1:0),S=1;S<x;S++)v[S-1]=arguments[S];t.emit(y,...v)}),this.modules.languageDetector&&(p.languageDetector=o(this.modules.languageDetector),p.languageDetector.init&&p.languageDetector.init(p,this.options.detection,this.options)),this.modules.i18nFormat&&(p.i18nFormat=o(this.modules.i18nFormat),p.i18nFormat.init&&p.i18nFormat.init(this)),this.translator=new Qa(this.services,this.options),this.translator.on("*",function(y){for(var x=arguments.length,v=new Array(x>1?x-1:0),S=1;S<x;S++)v[S-1]=arguments[S];t.emit(y,...v)}),this.modules.external.forEach(y=>{y.init&&y.init(this)})}if(this.format=this.options.interpolation.format,r||(r=ds),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const d=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);d.length>0&&d[0]!=="dev"&&(this.options.lng=d[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(d=>{this[d]=function(){return t.store[d](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(d=>{this[d]=function(){return t.store[d](...arguments),t}});const c=$i(),u=()=>{const d=(h,p)=>{this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),c.resolve(p),r(h,p)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return d(null,this.t.bind(this));this.changeLanguage(this.options.lng,d)};return this.options.resources||!this.options.initImmediate?u():setTimeout(u,0),c}loadResources(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ds;const i=typeof t=="string"?t:this.language;if(typeof t=="function"&&(r=t),!this.options.resources||this.options.partialBundledLanguages){if(i&&i.toLowerCase()==="cimode")return r();const o=[],s=a=>{if(!a)return;this.services.languageUtils.toResolveHierarchy(a).forEach(u=>{o.indexOf(u)<0&&o.push(u)})};i?s(i):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(c=>s(c)),this.options.preload&&this.options.preload.forEach(a=>s(a)),this.services.backendConnector.load(o,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),r(a)})}else r(null)}reloadResources(t,n,r){const i=$i();return t||(t=this.languages),n||(n=this.options.ns),r||(r=ds),this.services.backendConnector.reload(t,n,o=>{i.resolve(),r(o)}),i}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&ow.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let n=0;n<this.languages.length;n++){const r=this.languages[n];if(!(["cimode","dev"].indexOf(r)>-1)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}}changeLanguage(t,n){var r=this;this.isLanguageChangingTo=t;const i=$i();this.emit("languageChanging",t);const o=c=>{this.language=c,this.languages=this.services.languageUtils.toResolveHierarchy(c),this.resolvedLanguage=void 0,this.setResolvedLanguage(c)},s=(c,u)=>{u?(o(u),this.translator.changeLanguage(u),this.isLanguageChangingTo=void 0,this.emit("languageChanged",u),this.logger.log("languageChanged",u)):this.isLanguageChangingTo=void 0,i.resolve(function(){return r.t(...arguments)}),n&&n(c,function(){return r.t(...arguments)})},a=c=>{!t&&!c&&this.services.languageDetector&&(c=[]);const u=typeof c=="string"?c:this.services.languageUtils.getBestMatchFromCodes(c);u&&(this.language||o(u),this.translator.language||this.translator.changeLanguage(u),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(u)),this.loadResources(u,d=>{s(d,u)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(t),i}getFixedT(t,n,r){var i=this;const o=function(s,a){let c;if(typeof a!="object"){for(var u=arguments.length,d=new Array(u>2?u-2:0),h=2;h<u;h++)d[h-2]=arguments[h];c=i.options.overloadTranslationOptionHandler([s,a].concat(d))}else c={...a};c.lng=c.lng||o.lng,c.lngs=c.lngs||o.lngs,c.ns=c.ns||o.ns,c.keyPrefix=c.keyPrefix||r||o.keyPrefix;const p=i.options.keySeparator||".";let y;return c.keyPrefix&&Array.isArray(s)?y=s.map(x=>`${c.keyPrefix}${p}${x}`):y=c.keyPrefix?`${c.keyPrefix}${p}${s}`:s,i.t(y,c)};return typeof t=="string"?o.lng=t:o.lngs=t,o.ns=n,o.keyPrefix=r,o}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const r=n.lng||this.resolvedLanguage||this.languages[0],i=this.options?this.options.fallbackLng:!1,o=this.languages[this.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const s=(a,c)=>{const u=this.services.backendConnector.state[`${a}|${c}`];return u===-1||u===2};if(n.precheck){const a=n.precheck(this,s);if(a!==void 0)return a}return!!(this.hasResourceBundle(r,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||s(r,t)&&(!i||s(o,t)))}loadNamespaces(t,n){const r=$i();return this.options.ns?(typeof t=="string"&&(t=[t]),t.forEach(i=>{this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}),this.loadResources(i=>{r.resolve(),n&&n(i)}),r):(n&&n(),Promise.resolve())}loadLanguages(t,n){const r=$i();typeof t=="string"&&(t=[t]);const i=this.options.preload||[],o=t.filter(s=>i.indexOf(s)<0);return o.length?(this.options.preload=i.concat(o),this.loadResources(s=>{r.resolve(),n&&n(s)}),r):(n&&n(),Promise.resolve())}dir(t){if(t||(t=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!t)return"rtl";const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],r=this.services&&this.services.languageUtils||new Rg(Bg());return n.indexOf(r.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new Lo(t,n)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ds;const r=t.forkResourceStore;r&&delete t.forkResourceStore;const i={...this.options,...t,isClone:!0},o=new Lo(i);return(t.debug!==void 0||t.prefix!==void 0)&&(o.logger=o.logger.clone(t)),["store","services","language"].forEach(a=>{o[a]=this[a]}),o.services={...this.services},o.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},r&&(o.store=new Pg(this.store.data,i),o.services.resourceStore=o.store),o.translator=new Qa(o.services,i),o.translator.on("*",function(a){for(var c=arguments.length,u=new Array(c>1?c-1:0),d=1;d<c;d++)u[d-1]=arguments[d];o.emit(a,...u)}),o.init(i,n),o.translator.options=i,o.translator.backendConnector.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const We=Lo.createInstance();We.createInstance=Lo.createInstance;We.createInstance;We.dir;We.init;We.loadResources;We.reloadResources;We.use;We.changeLanguage;We.getFixedT;We.t;We.exists;We.setDefaultNamespace;We.hasLoadedNamespace;We.loadNamespaces;We.loadLanguages;const hB="hello",mB="wellcome",gB="search",xB="login",yB="register",vB="Profile",wB="home",bB="books",SB="No",kB="Yes",AB="Next",CB="Finish",jB="Loading",EB="User Name",TB="Contact",LB="Articles",OB="Vocabulary",PB="Questions",$B="Total",RB="Example",zB="Examples",NB="Score",BB="Close",IB="Restart",FB="Dictionary",DB="Phrases",MB="Play",_B="Learn",UB="Read",WB="Explore",HB="Grammar",VB="All",QB="Next",GB="Submit",qB="Quiz",KB="Text",YB="Continue",JB="English",XB="Name",ZB="Status",eI={Bonjour:hB,Bienvenue:mB,Recherche:gB,Connexion:xB,"Se déconnecter":"logout",Inscription:yB,Profil:vB,Accueil:wB,Livres:bB,Leçons:"lesson","Vous avez terminé la leçon":"You have completed the lesson","Voulez-vous recommencer?":"Do you want to start over?",No:SB,Oui:kB,Suivante:AB,"Leçon terminée!":"Lesson Completed!",Finir:CB,"Trois Mousquetaires":"Three Musketeers",Chargement:jB,"Inscrivez-vous":"Signup now","Mot de passe oublié?":"Forgot Password?","Pas de compte?":"Not a member?","Pas connecté":"Not signed in","Mot de passe":"Password",Pseudonyme:EB,"E-mail":"E-mail","Avez-vous déjà un compte?":"Already Have Account?","Film&Musique":"Movie&Music",Contacter:TB,Articles:LB,"Bienvenue à Francophoenix":"Wellcome to Francophoenix","Tous les livres":"All Books","Tout afficher":"See All","Niveau A1":"Level A1","Niveau A2":"Level A2","Niveau B1":"Level B1","Niveau B2":"Level B2","Quantité de mots dans ce sujet":"Number of words in this topic","Les mots":"The words",Vocabulaire:OB,Questions:PB,Total:$B,"Masculin ou Féminin":"Masculine or feminine",Example:RB,Examples:zB,"Testez votre vocabulaire":"Test your vocabulary",Score:NB,"Toutes nos félicitations! Vous avez répondu correctement à tous.":"Congratulations! You have answered all correctly.","Toutes les réponses ne sont pas correctes. Réessayer!":"Not all answers are correct. Try again!",Fermer:BB,Recommencer:IB,"Vocabulaire thématique":"Thematic vocabulary","Lire l'extrait":"Read Extract","Explorez des sujets":"Explore topics",Dictionnaire:FB,"Mots favoris":"Favorite words","Pas de mots favoris":"No favorite words","Des mots":"Words",Expressions:DB,"Des exercices":"Exercises","Afficher toutes les traductions":"Show All Translations","Cacher Toutes les Traductions":"Hide All Translations",Jouer:MB,Apprendre:_B,Lire:UB,Définition:"Definition","Les Temps":"Tenses",Explorer:WB,Grammaire:HB,"Bienvenue dans la section Grammaire":"Welcome to the Grammar Section","Découvrez différents sujets de grammaire pour améliorer vos compétences linguistiques":"Explore various grammar topics to enhance your language skills","Bienvenue dans la section Vocabulaire":"Welcome to the Vocabulary Section","Explorez différents sujets de vocabulaire pour améliorer vos compétences linguistiques":"Explore different vocabulary topics to enhance your language skills","Lisez le texte":"Read the text","Les noms à double genre":"Double gender nouns","Construire la phrase":"Build the Sentence","Qu'est-ce que c'est ?":"What it is?","Nombre de Mots":"Word Count","Choisir le niveau":"Choose Level",Tous:VB,"Afficher tout":"Show All","Aucun mot trouvé":"No word found","Verbes utilisés dans le texte":"Verbes used in the text",Suivant:QB,Réessayer:"Retry",Soumettre:GB,"Genre des noms":"Gender of nouns",Questionnaire:qB,Texte:KB,"Tout sélectionner":"Select All","Supprimer tout":"Clear All","Aucun mot sélectionné. Veuillez sélectionner des mots pour choisir le mode entraîneur.":"No words selected. Please select words to chooce the trainer mode.","Entraîneur de cartes mémoire":"Flashcards trainer","Mots déjà revus":"Words already reviewed","Vous suivez ?":"Are you following?",Continue:YB,"Réviser le vocabulaire":"Review The Vocabulary","Chapitre précédent":"Previous chapter","Chapitre suivant":"Next chapter","Améliorez votre vocabulaire":"Improve Your Vocabular","Ce lien mène à la page Bachharelle Conjugaison.":"This link goes to the Bachharelle Conjugation page.","Ajouter à":"add to",Français:"French",Anglaise:JB,Géorgien:"Georgian","Choisissez votre langue":"Choose Your Language","Choisissez une catégorie":"Choose category","Exercice d'articles":"Article Exercise","Exercice de temps des verbes":"Verb Tense Exercise","Construire des phrases":"Sentence Builder",Nom:XB,Statut:ZB,"Pseudonyme doit comporter au moins 3 caractères":"Username must be at least 3 characters long","Le mot de passe doit comporter au moins 5 caractères":"Password must be at least 5 characters long","Mémoriser des mots":"Memorizing words","Lire Extrait":"Read Extract","Parlez-vous français?":"Do you speak French?","ფრანგული ლექსიკა":"French vocabulary"},tI="გამარჯობა",nI="მოი",rI="მთავარი",iI="შესვლა",oI="რეგისტრაცია",sI="წიგნები",aI="იტვირთება",lI="არა",cI="დიახ",uI="შემდეგი",dI="დასრულება",fI="პროფილი",pI="ფსევდონიმი",hI="მაგალითი",mI="მაგალითები",gI="კონტაქტი",xI="სტატიები",yI="კურსები",vI="ლექსიკა",wI="კითხვა",bI="სულ",SI="ქულა",kI="დახურე",AI="კიდევ სცადე",CI="ლექსიკონი",jI="ფრაზები",EI="ითამაშე",TI="ისწავლე",LI="წაიკითხე",OI="გადადი",PI="გრამატიკა",$I="ყველა",RI="შემდეგი",zI="Submit",NI="ტესტი",BI="ტექსტი",II="გაგრძელება",FI="ინგლისური",DI="სახელი",MI="სტატუსი",_I="არსებითი სახელი",UI="არტიკლი",WI="ზმნა",HI="ორთოგრაფია",VI="ფონოლოგია",QI={hello:tI,welcome:nI,Accueil:rI,"Recherche ":"ძებნა",Connexion:iI,Inscription:oI,Livres:sI,Leçons:"გაკვეთილები","Trois Mousquetaires":"სამი მუშკეტერი","Vous avez terminé la leçon":"თქვენ დაამთავრეთ ეს გაკვეთილი",Chargement:aI,"Voulez-vous recommencer?":"გსურთ თავიდან დაწყება?",No:lI,Oui:cI,Suivante:uI,"Leçon terminée!":"დასასრული",Finir:dI,"Pas de compte?":"არ გაქვთ ანგარიში?","Inscrivez-vous":"დარეგისტრირდი","Pas connecté":"არ ხართ შესული",Profil:fI,"Mot de passe oublié?":"Დაგავიწყდათ პაროლი?","Mot de passe":"პაროლი",Pseudonyme:pI,"E-mail":"ელ.ფოსტა","Avez-vous déjà un compte?":"უკვე გაქვთ ანგარიში?",Example:hI,Examples:mI,"Film&Musique":"ფილმები&მუსიკა",Contacter:gI,Articles:xI,Courses:yI,"Bienvenue à Francophoenix":"კეთილი იყოს თქვენი მობრძანება ფრანკოფონიქსში","Tous les livres":"ყველა წიგნი","Tout afficher":"მაჩვენე ყველა","Niveau A1":"დონე A1","Niveau A2":"დონე A2","Niveau B1":"დონე B1","Niveau B2":"დონე B2","Quantité de mots dans ce sujet":"სიტყვების რაოდენობა ამ თემაში","Les mots":"სიტყვები",Vocabulaire:vI,Questions:wI,Total:bI,"Masculin ou Féminin":"მამრობითი თუ მდედრობითი","Testez votre vocabulaire":"გამოცადე შენი ლექსიკა",Score:SI,Fermer:kI,Recommencer:AI,"Félicitations! Vous avez répondu correctement à tous.":"გილოცავ! ყველაფერზე სწორად უპასუხე.","Toutes les réponses ne sont pas correctes. Réessayer!":"ყველა პასუხი არ არის სწორი. კიდევ სცადე!","Vocabulaire thématique":"თემატური ლექსიკა","Read Extract":"დაიწყე კითხვა","Explorez des sujets":"ნახე მთლიანად",Dictionnaire:CI,"Mots favoris":"ფავორიტი სიტყვების სია","Pas de mots favoris":"სია ცარიელია","Des mots":"სიტყვები",Expressions:jI,"Des exercices":"სავარჯიშოები","Afficher toutes les traductions":"გამოაჩინე სრული თარგმანი","Cacher Toutes les Traductions":"დამალე სრული თარგმანი",Jouer:EI,Apprendre:TI,Lire:LI,Définition:"განმარტება","Les Temps":"დროები",Explorer:OI,Grammaire:PI,"Bienvenue dans la section Grammaire":"კეთილი იყოს თქვენი მობრძანება გრამატიკის სექციაში","Découvrez différents sujets de grammaire pour améliorer vos compétences linguistiques":"აღმოაჩინეთ გრამატიკის სხვადასხვა თემები და გაიუმჯობესეთ ენის ცოდნის დონე","Bienvenue dans la section Vocabulaire":"კეთილი იყოს თქვენი მობრძანება ლექსიკის განყოფილებაში","Explorez différents sujets de vocabulaire pour améliorer vos compétences linguistiques":"ნახეთ ლექსიკის სხვადასხვა თემები თქვენი ენის ცოდნის გასაუმჯობესებლად","Lisez le texte":"Წაიკითხეთ ტექსტი","Les noms à double genre":"არსებითი სახელები ორმაგი სქესით","Construire la phrase":"შეადგინე წინადადება","Qu'est-ce que c'est ?":"რა არის ეს?","Nombre de Mots":"სიტყვების რაოდენობა","Choisir le niveau":"აირჩიეთ დონე",Tous:$I,"Afficher tout":"ყველას ნახვა","Aucun mot trouvé":"სიტყვა ვერ მოიძებნა","Verbes utilisés dans le texte":"ტექსტში გამოყენებული ზმნები",Suivant:RI,Réessayer:"თავიდან სცადე",Soumettre:zI,"Genre des noms":"არსებითი სახელების სქესი",Questionnaire:NI,Texte:BI,"Tout sélectionner":"Მონიშნე ყველა","Supprimer tout":"წაშალე ყველა","Aucun mot sélectionné. Veuillez sélectionner des mots pour choisir le mode entraîneur.":"არც ერთი სიტყვა არ არის მონიშნული. გთხოვთ, მონიშნოთ სიტყვები სავარჯიშოს ასარჩევად.","Entraîneur de cartes mémoire":"შენახული სიტყვების სავარჯიშო","Mots déjà revus":"გავლილი სიტყვების რაოდენობა.","Vous suivez ?":"მომყვები ?",Continue:II,"Réviser le vocabulaire":"გადახედეთ სიტყვებს","Chapitre précédent":"წინა თავი","Chapitre suivant":"შემდეგი თავი","Ce lien mène à la page Bachharelle Conjugaison.":"ეს ბმული გადადის Bachharelle უღლების გვერდზე.","Ajouter à":"დაამატე",Français:"ფრანგული",Anglaise:FI,Géorgien:"ქართული","Choisissez votre langue":"Აირჩიეთ ენა","Choisissez une catégorie":"აირჩიეთ კატეგორია","Exercice d'articles":"არტიკლის სავარჯიშო","Exercice de temps des verbes":"ზმნების დროები","Construire des phrases":"წინადადების შედგენა",Nom:DI,Statut:MI,"Pseudonyme doit comporter au moins 3 caractères":"ფსევდონიმი უნდა შედგებოდეს სულ მცირე 3 სიმბოლოსგან","Le mot de passe doit comporter au moins 5 caractères":"პაროლი უნდა იყოს მინიმუმ 5 სიმბოლო",noun:_I,article:UI,verb:WI,orthography:HI,phonology:VI,"Mémoriser des mots":"სიტყვების დამახსოვრება","Lire Extrait":"დაიწყე კითხვა","Parlez-vous français?":"Საუბრობთ ფრანგულად?","Vocabulaire français":"ფრანგული ლექსიკა"},GI=localStorage.getItem("languageSelected");We.use(VT).init({resources:{en:{translation:eI},ka:{translation:QI}},lng:GI||"fr",fallbackLng:"fr",interpolation:{escapeValue:!1}});fu.createRoot(document.getElementById("root")).render(l.jsx($A,{children:l.jsx(kC,{store:GN,children:l.jsx(qT,{i18n:We,children:l.jsx(UN,{})})})}));
