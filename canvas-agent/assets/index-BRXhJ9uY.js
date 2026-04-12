(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();var ul={exports:{}},la={},dl={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zt=Symbol.for("react.element"),Td=Symbol.for("react.portal"),Ud=Symbol.for("react.fragment"),Id=Symbol.for("react.strict_mode"),Od=Symbol.for("react.profiler"),Rd=Symbol.for("react.provider"),jd=Symbol.for("react.context"),Nd=Symbol.for("react.forward_ref"),Ld=Symbol.for("react.suspense"),Dd=Symbol.for("react.memo"),Hd=Symbol.for("react.lazy"),Bs=Symbol.iterator;function Wd(n){return n===null||typeof n!="object"?null:(n=Bs&&n[Bs]||n["@@iterator"],typeof n=="function"?n:null)}var cl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pl=Object.assign,ml={};function ut(n,e,t){this.props=n,this.context=e,this.refs=ml,this.updater=t||cl}ut.prototype.isReactComponent={};ut.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ut.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function fl(){}fl.prototype=ut.prototype;function Ji(n,e,t){this.props=n,this.context=e,this.refs=ml,this.updater=t||cl}var $i=Ji.prototype=new fl;$i.constructor=Ji;pl($i,ut.prototype);$i.isPureReactComponent=!0;var Gs=Array.isArray,gl=Object.prototype.hasOwnProperty,Yi={current:null},hl={key:!0,ref:!0,__self:!0,__source:!0};function vl(n,e,t){var r,a={},i=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(i=""+e.key),e)gl.call(e,r)&&!hl.hasOwnProperty(r)&&(a[r]=e[r]);var o=arguments.length-2;if(o===1)a.children=t;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];a.children=l}if(n&&n.defaultProps)for(r in o=n.defaultProps,o)a[r]===void 0&&(a[r]=o[r]);return{$$typeof:Zt,type:n,key:i,ref:s,props:a,_owner:Yi.current}}function Vd(n,e){return{$$typeof:Zt,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Qi(n){return typeof n=="object"&&n!==null&&n.$$typeof===Zt}function zd(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var qs=/\/+/g;function Fa(n,e){return typeof n=="object"&&n!==null&&n.key!=null?zd(""+n.key):e.toString(36)}function Er(n,e,t,r,a){var i=typeof n;(i==="undefined"||i==="boolean")&&(n=null);var s=!1;if(n===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(n.$$typeof){case Zt:case Td:s=!0}}if(s)return s=n,a=a(s),n=r===""?"."+Fa(s,0):r,Gs(a)?(t="",n!=null&&(t=n.replace(qs,"$&/")+"/"),Er(a,e,t,"",function(u){return u})):a!=null&&(Qi(a)&&(a=Vd(a,t+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(qs,"$&/")+"/")+n)),e.push(a)),1;if(s=0,r=r===""?".":r+":",Gs(n))for(var o=0;o<n.length;o++){i=n[o];var l=r+Fa(i,o);s+=Er(i,e,t,l,a)}else if(l=Wd(n),typeof l=="function")for(n=l.call(n),o=0;!(i=n.next()).done;)i=i.value,l=r+Fa(i,o++),s+=Er(i,e,t,l,a);else if(i==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function sr(n,e,t){if(n==null)return n;var r=[],a=0;return Er(n,r,"","",function(i){return e.call(t,i,a++)}),r}function Bd(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var dn={current:null},kr={transition:null},Gd={ReactCurrentDispatcher:dn,ReactCurrentBatchConfig:kr,ReactCurrentOwner:Yi};function _l(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:sr,forEach:function(n,e,t){sr(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return sr(n,function(){e++}),e},toArray:function(n){return sr(n,function(e){return e})||[]},only:function(n){if(!Qi(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};M.Component=ut;M.Fragment=Ud;M.Profiler=Od;M.PureComponent=Ji;M.StrictMode=Id;M.Suspense=Ld;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gd;M.act=_l;M.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var r=pl({},n.props),a=n.key,i=n.ref,s=n._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,s=Yi.current),e.key!==void 0&&(a=""+e.key),n.type&&n.type.defaultProps)var o=n.type.defaultProps;for(l in e)gl.call(e,l)&&!hl.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];r.children=o}return{$$typeof:Zt,type:n.type,key:a,ref:i,props:r,_owner:s}};M.createContext=function(n){return n={$$typeof:jd,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Rd,_context:n},n.Consumer=n};M.createElement=vl;M.createFactory=function(n){var e=vl.bind(null,n);return e.type=n,e};M.createRef=function(){return{current:null}};M.forwardRef=function(n){return{$$typeof:Nd,render:n}};M.isValidElement=Qi;M.lazy=function(n){return{$$typeof:Hd,_payload:{_status:-1,_result:n},_init:Bd}};M.memo=function(n,e){return{$$typeof:Dd,type:n,compare:e===void 0?null:e}};M.startTransition=function(n){var e=kr.transition;kr.transition={};try{n()}finally{kr.transition=e}};M.unstable_act=_l;M.useCallback=function(n,e){return dn.current.useCallback(n,e)};M.useContext=function(n){return dn.current.useContext(n)};M.useDebugValue=function(){};M.useDeferredValue=function(n){return dn.current.useDeferredValue(n)};M.useEffect=function(n,e){return dn.current.useEffect(n,e)};M.useId=function(){return dn.current.useId()};M.useImperativeHandle=function(n,e,t){return dn.current.useImperativeHandle(n,e,t)};M.useInsertionEffect=function(n,e){return dn.current.useInsertionEffect(n,e)};M.useLayoutEffect=function(n,e){return dn.current.useLayoutEffect(n,e)};M.useMemo=function(n,e){return dn.current.useMemo(n,e)};M.useReducer=function(n,e,t){return dn.current.useReducer(n,e,t)};M.useRef=function(n){return dn.current.useRef(n)};M.useState=function(n){return dn.current.useState(n)};M.useSyncExternalStore=function(n,e,t){return dn.current.useSyncExternalStore(n,e,t)};M.useTransition=function(){return dn.current.useTransition()};M.version="18.3.1";dl.exports=M;var J=dl.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd=J,Jd=Symbol.for("react.element"),$d=Symbol.for("react.fragment"),Yd=Object.prototype.hasOwnProperty,Qd=qd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Kd={key:!0,ref:!0,__self:!0,__source:!0};function wl(n,e,t){var r,a={},i=null,s=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)Yd.call(e,r)&&!Kd.hasOwnProperty(r)&&(a[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)a[r]===void 0&&(a[r]=e[r]);return{$$typeof:Jd,type:n,key:i,ref:s,props:a,_owner:Qd.current}}la.Fragment=$d;la.jsx=wl;la.jsxs=wl;ul.exports=la;var b=ul.exports,yl={exports:{}},Pn={},Pl={exports:{}},Sl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(x,C){var A=x.length;x.push(C);n:for(;0<A;){var G=A-1>>>1,K=x[G];if(0<a(K,C))x[G]=C,x[A]=K,A=G;else break n}}function t(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var C=x[0],A=x.pop();if(A!==C){x[0]=A;n:for(var G=0,K=x.length,ar=K>>>1;G<ar;){var _e=2*(G+1)-1,xa=x[_e],we=_e+1,ir=x[we];if(0>a(xa,A))we<K&&0>a(ir,xa)?(x[G]=ir,x[we]=A,G=we):(x[G]=xa,x[_e]=A,G=_e);else if(we<K&&0>a(ir,A))x[G]=ir,x[we]=A,G=we;else break n}}return C}function a(x,C){var A=x.sortIndex-C.sortIndex;return A!==0?A:x.id-C.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;n.unstable_now=function(){return i.now()}}else{var s=Date,o=s.now();n.unstable_now=function(){return s.now()-o}}var l=[],u=[],f=1,g=null,m=3,h=!1,v=!1,y=!1,I=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(x){for(var C=t(u);C!==null;){if(C.callback===null)r(u);else if(C.startTime<=x)r(u),C.sortIndex=C.expirationTime,e(l,C);else break;C=t(u)}}function _(x){if(y=!1,p(x),!v)if(t(l)!==null)v=!0,Ea(P);else{var C=t(u);C!==null&&ka(_,C.startTime-x)}}function P(x,C){v=!1,y&&(y=!1,c(F),F=-1),h=!0;var A=m;try{for(p(C),g=t(l);g!==null&&(!(g.expirationTime>C)||x&&!An());){var G=g.callback;if(typeof G=="function"){g.callback=null,m=g.priorityLevel;var K=G(g.expirationTime<=C);C=n.unstable_now(),typeof K=="function"?g.callback=K:g===t(l)&&r(l),p(C)}else r(l);g=t(l)}if(g!==null)var ar=!0;else{var _e=t(u);_e!==null&&ka(_,_e.startTime-C),ar=!1}return ar}finally{g=null,m=A,h=!1}}var E=!1,S=null,F=-1,j=5,T=-1;function An(){return!(n.unstable_now()-T<j)}function pt(){if(S!==null){var x=n.unstable_now();T=x;var C=!0;try{C=S(!0,x)}finally{C?mt():(E=!1,S=null)}}else E=!1}var mt;if(typeof d=="function")mt=function(){d(pt)};else if(typeof MessageChannel<"u"){var zs=new MessageChannel,Md=zs.port2;zs.port1.onmessage=pt,mt=function(){Md.postMessage(null)}}else mt=function(){I(pt,0)};function Ea(x){S=x,E||(E=!0,mt())}function ka(x,C){F=I(function(){x(n.unstable_now())},C)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(x){x.callback=null},n.unstable_continueExecution=function(){v||h||(v=!0,Ea(P))},n.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<x?Math.floor(1e3/x):5},n.unstable_getCurrentPriorityLevel=function(){return m},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(x){switch(m){case 1:case 2:case 3:var C=3;break;default:C=m}var A=m;m=C;try{return x()}finally{m=A}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(x,C){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var A=m;m=x;try{return C()}finally{m=A}},n.unstable_scheduleCallback=function(x,C,A){var G=n.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?G+A:G):A=G,x){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=A+K,x={id:f++,callback:C,priorityLevel:x,startTime:A,expirationTime:K,sortIndex:-1},A>G?(x.sortIndex=A,e(u,x),t(l)===null&&x===t(u)&&(y?(c(F),F=-1):y=!0,ka(_,A-G))):(x.sortIndex=K,e(l,x),v||h||(v=!0,Ea(P))),x},n.unstable_shouldYield=An,n.unstable_wrapCallback=function(x){var C=m;return function(){var A=m;m=C;try{return x.apply(this,arguments)}finally{m=A}}}})(Sl);Pl.exports=Sl;var Xd=Pl.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zd=J,yn=Xd;function w(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bl=new Set,jt={};function Ie(n,e){tt(n,e),tt(n+"Capture",e)}function tt(n,e){for(jt[n]=e,n=0;n<e.length;n++)bl.add(e[n])}var Jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ei=Object.prototype.hasOwnProperty,nc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Js={},$s={};function ec(n){return ei.call($s,n)?!0:ei.call(Js,n)?!1:nc.test(n)?$s[n]=!0:(Js[n]=!0,!1)}function tc(n,e,t,r){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function rc(n,e,t,r){if(e===null||typeof e>"u"||tc(n,e,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function cn(n,e,t,r,a,i,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=i,this.removeEmptyString=s}var tn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){tn[n]=new cn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];tn[e]=new cn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){tn[n]=new cn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){tn[n]=new cn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){tn[n]=new cn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){tn[n]=new cn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){tn[n]=new cn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){tn[n]=new cn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){tn[n]=new cn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Ki=/[\-:]([a-z])/g;function Xi(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Ki,Xi);tn[e]=new cn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Ki,Xi);tn[e]=new cn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Ki,Xi);tn[e]=new cn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){tn[n]=new cn(n,1,!1,n.toLowerCase(),null,!1,!1)});tn.xlinkHref=new cn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){tn[n]=new cn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Zi(n,e,t,r){var a=tn.hasOwnProperty(e)?tn[e]:null;(a!==null?a.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(rc(e,t,a,r)&&(t=null),r||a===null?ec(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):a.mustUseProperty?n[a.propertyName]=t===null?a.type===3?!1:"":t:(e=a.attributeName,r=a.attributeNamespace,t===null?n.removeAttribute(e):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,r?n.setAttributeNS(r,e,t):n.setAttribute(e,t))))}var Kn=Zd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,or=Symbol.for("react.element"),Ne=Symbol.for("react.portal"),Le=Symbol.for("react.fragment"),ns=Symbol.for("react.strict_mode"),ti=Symbol.for("react.profiler"),El=Symbol.for("react.provider"),kl=Symbol.for("react.context"),es=Symbol.for("react.forward_ref"),ri=Symbol.for("react.suspense"),ai=Symbol.for("react.suspense_list"),ts=Symbol.for("react.memo"),Zn=Symbol.for("react.lazy"),xl=Symbol.for("react.offscreen"),Ys=Symbol.iterator;function ft(n){return n===null||typeof n!="object"?null:(n=Ys&&n[Ys]||n["@@iterator"],typeof n=="function"?n:null)}var z=Object.assign,Ca;function St(n){if(Ca===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Ca=e&&e[1]||""}return`
`+Ca+n}var Aa=!1;function Ma(n,e){if(!n||Aa)return"";Aa=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){r=u}n.call(e.prototype)}else{try{throw Error()}catch(u){r=u}n()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),i=r.stack.split(`
`),s=a.length-1,o=i.length-1;1<=s&&0<=o&&a[s]!==i[o];)o--;for(;1<=s&&0<=o;s--,o--)if(a[s]!==i[o]){if(s!==1||o!==1)do if(s--,o--,0>o||a[s]!==i[o]){var l=`
`+a[s].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=s&&0<=o);break}}}finally{Aa=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?St(n):""}function ac(n){switch(n.tag){case 5:return St(n.type);case 16:return St("Lazy");case 13:return St("Suspense");case 19:return St("SuspenseList");case 0:case 2:case 15:return n=Ma(n.type,!1),n;case 11:return n=Ma(n.type.render,!1),n;case 1:return n=Ma(n.type,!0),n;default:return""}}function ii(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Le:return"Fragment";case Ne:return"Portal";case ti:return"Profiler";case ns:return"StrictMode";case ri:return"Suspense";case ai:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case kl:return(n.displayName||"Context")+".Consumer";case El:return(n._context.displayName||"Context")+".Provider";case es:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ts:return e=n.displayName||null,e!==null?e:ii(n.type)||"Memo";case Zn:e=n._payload,n=n._init;try{return ii(n(e))}catch{}}return null}function ic(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ii(e);case 8:return e===ns?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Fl(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sc(n){var e=Fl(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),r=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,i=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return a.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function lr(n){n._valueTracker||(n._valueTracker=sc(n))}function Cl(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),r="";return n&&(r=Fl(n)?n.checked?"true":"false":n.value),n=r,n!==t?(e.setValue(n),!0):!1}function jr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function si(n,e){var t=e.checked;return z({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Qs(n,e){var t=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;t=me(e.value!=null?e.value:t),n._wrapperState={initialChecked:r,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Al(n,e){e=e.checked,e!=null&&Zi(n,"checked",e,!1)}function oi(n,e){Al(n,e);var t=me(e.value),r=e.type;if(t!=null)r==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(r==="submit"||r==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?li(n,e.type,t):e.hasOwnProperty("defaultValue")&&li(n,e.type,me(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Ks(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function li(n,e,t){(e!=="number"||jr(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var bt=Array.isArray;function Ye(n,e,t,r){if(n=n.options,e){e={};for(var a=0;a<t.length;a++)e["$"+t[a]]=!0;for(t=0;t<n.length;t++)a=e.hasOwnProperty("$"+n[t].value),n[t].selected!==a&&(n[t].selected=a),a&&r&&(n[t].defaultSelected=!0)}else{for(t=""+me(t),e=null,a=0;a<n.length;a++){if(n[a].value===t){n[a].selected=!0,r&&(n[a].defaultSelected=!0);return}e!==null||n[a].disabled||(e=n[a])}e!==null&&(e.selected=!0)}}function ui(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(w(91));return z({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Xs(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(w(92));if(bt(t)){if(1<t.length)throw Error(w(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:me(t)}}function Ml(n,e){var t=me(e.value),r=me(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),r!=null&&(n.defaultValue=""+r)}function Zs(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Tl(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function di(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Tl(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ur,Ul=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,r,a){MSApp.execUnsafeLocalFunction(function(){return n(e,t,r,a)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(ur=ur||document.createElement("div"),ur.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ur.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Nt(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Ft={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oc=["Webkit","ms","Moz","O"];Object.keys(Ft).forEach(function(n){oc.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Ft[e]=Ft[n]})});function Il(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Ft.hasOwnProperty(n)&&Ft[n]?(""+e).trim():e+"px"}function Ol(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var r=t.indexOf("--")===0,a=Il(t,e[t],r);t==="float"&&(t="cssFloat"),r?n.setProperty(t,a):n[t]=a}}var lc=z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ci(n,e){if(e){if(lc[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(w(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(w(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(w(61))}if(e.style!=null&&typeof e.style!="object")throw Error(w(62))}}function pi(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mi=null;function rs(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var fi=null,Qe=null,Ke=null;function no(n){if(n=tr(n)){if(typeof fi!="function")throw Error(w(280));var e=n.stateNode;e&&(e=ma(e),fi(n.stateNode,n.type,e))}}function Rl(n){Qe?Ke?Ke.push(n):Ke=[n]:Qe=n}function jl(){if(Qe){var n=Qe,e=Ke;if(Ke=Qe=null,no(n),e)for(n=0;n<e.length;n++)no(e[n])}}function Nl(n,e){return n(e)}function Ll(){}var Ta=!1;function Dl(n,e,t){if(Ta)return n(e,t);Ta=!0;try{return Nl(n,e,t)}finally{Ta=!1,(Qe!==null||Ke!==null)&&(Ll(),jl())}}function Lt(n,e){var t=n.stateNode;if(t===null)return null;var r=ma(t);if(r===null)return null;t=r[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(n=n.type,r=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!r;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(w(231,e,typeof t));return t}var gi=!1;if(Jn)try{var gt={};Object.defineProperty(gt,"passive",{get:function(){gi=!0}}),window.addEventListener("test",gt,gt),window.removeEventListener("test",gt,gt)}catch{gi=!1}function uc(n,e,t,r,a,i,s,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(f){this.onError(f)}}var Ct=!1,Nr=null,Lr=!1,hi=null,dc={onError:function(n){Ct=!0,Nr=n}};function cc(n,e,t,r,a,i,s,o,l){Ct=!1,Nr=null,uc.apply(dc,arguments)}function pc(n,e,t,r,a,i,s,o,l){if(cc.apply(this,arguments),Ct){if(Ct){var u=Nr;Ct=!1,Nr=null}else throw Error(w(198));Lr||(Lr=!0,hi=u)}}function Oe(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Hl(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function eo(n){if(Oe(n)!==n)throw Error(w(188))}function mc(n){var e=n.alternate;if(!e){if(e=Oe(n),e===null)throw Error(w(188));return e!==n?null:n}for(var t=n,r=e;;){var a=t.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){t=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===t)return eo(a),n;if(i===r)return eo(a),e;i=i.sibling}throw Error(w(188))}if(t.return!==r.return)t=a,r=i;else{for(var s=!1,o=a.child;o;){if(o===t){s=!0,t=a,r=i;break}if(o===r){s=!0,r=a,t=i;break}o=o.sibling}if(!s){for(o=i.child;o;){if(o===t){s=!0,t=i,r=a;break}if(o===r){s=!0,r=i,t=a;break}o=o.sibling}if(!s)throw Error(w(189))}}if(t.alternate!==r)throw Error(w(190))}if(t.tag!==3)throw Error(w(188));return t.stateNode.current===t?n:e}function Wl(n){return n=mc(n),n!==null?Vl(n):null}function Vl(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Vl(n);if(e!==null)return e;n=n.sibling}return null}var zl=yn.unstable_scheduleCallback,to=yn.unstable_cancelCallback,fc=yn.unstable_shouldYield,gc=yn.unstable_requestPaint,q=yn.unstable_now,hc=yn.unstable_getCurrentPriorityLevel,as=yn.unstable_ImmediatePriority,Bl=yn.unstable_UserBlockingPriority,Dr=yn.unstable_NormalPriority,vc=yn.unstable_LowPriority,Gl=yn.unstable_IdlePriority,ua=null,Hn=null;function _c(n){if(Hn&&typeof Hn.onCommitFiberRoot=="function")try{Hn.onCommitFiberRoot(ua,n,void 0,(n.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:Pc,wc=Math.log,yc=Math.LN2;function Pc(n){return n>>>=0,n===0?32:31-(wc(n)/yc|0)|0}var dr=64,cr=4194304;function Et(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Hr(n,e){var t=n.pendingLanes;if(t===0)return 0;var r=0,a=n.suspendedLanes,i=n.pingedLanes,s=t&268435455;if(s!==0){var o=s&~a;o!==0?r=Et(o):(i&=s,i!==0&&(r=Et(i)))}else s=t&~a,s!==0?r=Et(s):i!==0&&(r=Et(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&a)&&(a=r&-r,i=e&-e,a>=i||a===16&&(i&4194240)!==0))return e;if(r&4&&(r|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=r;0<e;)t=31-On(e),a=1<<t,r|=n[t],e&=~a;return r}function Sc(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bc(n,e){for(var t=n.suspendedLanes,r=n.pingedLanes,a=n.expirationTimes,i=n.pendingLanes;0<i;){var s=31-On(i),o=1<<s,l=a[s];l===-1?(!(o&t)||o&r)&&(a[s]=Sc(o,e)):l<=e&&(n.expiredLanes|=o),i&=~o}}function vi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ql(){var n=dr;return dr<<=1,!(dr&4194240)&&(dr=64),n}function Ua(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function nr(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-On(e),n[e]=t}function Ec(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var r=n.eventTimes;for(n=n.expirationTimes;0<t;){var a=31-On(t),i=1<<a;e[a]=0,r[a]=-1,n[a]=-1,t&=~i}}function is(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var r=31-On(t),a=1<<r;a&e|n[r]&e&&(n[r]|=e),t&=~a}}var R=0;function Jl(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var $l,ss,Yl,Ql,Kl,_i=!1,pr=[],ie=null,se=null,oe=null,Dt=new Map,Ht=new Map,ee=[],kc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ro(n,e){switch(n){case"focusin":case"focusout":ie=null;break;case"dragenter":case"dragleave":se=null;break;case"mouseover":case"mouseout":oe=null;break;case"pointerover":case"pointerout":Dt.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ht.delete(e.pointerId)}}function ht(n,e,t,r,a,i){return n===null||n.nativeEvent!==i?(n={blockedOn:e,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},e!==null&&(e=tr(e),e!==null&&ss(e)),n):(n.eventSystemFlags|=r,e=n.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),n)}function xc(n,e,t,r,a){switch(e){case"focusin":return ie=ht(ie,n,e,t,r,a),!0;case"dragenter":return se=ht(se,n,e,t,r,a),!0;case"mouseover":return oe=ht(oe,n,e,t,r,a),!0;case"pointerover":var i=a.pointerId;return Dt.set(i,ht(Dt.get(i)||null,n,e,t,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Ht.set(i,ht(Ht.get(i)||null,n,e,t,r,a)),!0}return!1}function Xl(n){var e=Se(n.target);if(e!==null){var t=Oe(e);if(t!==null){if(e=t.tag,e===13){if(e=Hl(t),e!==null){n.blockedOn=e,Kl(n.priority,function(){Yl(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function xr(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=wi(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var r=new t.constructor(t.type,t);mi=r,t.target.dispatchEvent(r),mi=null}else return e=tr(t),e!==null&&ss(e),n.blockedOn=t,!1;e.shift()}return!0}function ao(n,e,t){xr(n)&&t.delete(e)}function Fc(){_i=!1,ie!==null&&xr(ie)&&(ie=null),se!==null&&xr(se)&&(se=null),oe!==null&&xr(oe)&&(oe=null),Dt.forEach(ao),Ht.forEach(ao)}function vt(n,e){n.blockedOn===e&&(n.blockedOn=null,_i||(_i=!0,yn.unstable_scheduleCallback(yn.unstable_NormalPriority,Fc)))}function Wt(n){function e(a){return vt(a,n)}if(0<pr.length){vt(pr[0],n);for(var t=1;t<pr.length;t++){var r=pr[t];r.blockedOn===n&&(r.blockedOn=null)}}for(ie!==null&&vt(ie,n),se!==null&&vt(se,n),oe!==null&&vt(oe,n),Dt.forEach(e),Ht.forEach(e),t=0;t<ee.length;t++)r=ee[t],r.blockedOn===n&&(r.blockedOn=null);for(;0<ee.length&&(t=ee[0],t.blockedOn===null);)Xl(t),t.blockedOn===null&&ee.shift()}var Xe=Kn.ReactCurrentBatchConfig,Wr=!0;function Cc(n,e,t,r){var a=R,i=Xe.transition;Xe.transition=null;try{R=1,os(n,e,t,r)}finally{R=a,Xe.transition=i}}function Ac(n,e,t,r){var a=R,i=Xe.transition;Xe.transition=null;try{R=4,os(n,e,t,r)}finally{R=a,Xe.transition=i}}function os(n,e,t,r){if(Wr){var a=wi(n,e,t,r);if(a===null)Va(n,e,r,Vr,t),ro(n,r);else if(xc(a,n,e,t,r))r.stopPropagation();else if(ro(n,r),e&4&&-1<kc.indexOf(n)){for(;a!==null;){var i=tr(a);if(i!==null&&$l(i),i=wi(n,e,t,r),i===null&&Va(n,e,r,Vr,t),i===a)break;a=i}a!==null&&r.stopPropagation()}else Va(n,e,r,null,t)}}var Vr=null;function wi(n,e,t,r){if(Vr=null,n=rs(r),n=Se(n),n!==null)if(e=Oe(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Hl(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Vr=n,null}function Zl(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hc()){case as:return 1;case Bl:return 4;case Dr:case vc:return 16;case Gl:return 536870912;default:return 16}default:return 16}}var re=null,ls=null,Fr=null;function nu(){if(Fr)return Fr;var n,e=ls,t=e.length,r,a="value"in re?re.value:re.textContent,i=a.length;for(n=0;n<t&&e[n]===a[n];n++);var s=t-n;for(r=1;r<=s&&e[t-r]===a[i-r];r++);return Fr=a.slice(n,1<r?1-r:void 0)}function Cr(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function mr(){return!0}function io(){return!1}function Sn(n){function e(t,r,a,i,s){this._reactName=t,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?mr:io,this.isPropagationStopped=io,this}return z(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=mr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=mr)},persist:function(){},isPersistent:mr}),e}var dt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},us=Sn(dt),er=z({},dt,{view:0,detail:0}),Mc=Sn(er),Ia,Oa,_t,da=z({},er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ds,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==_t&&(_t&&n.type==="mousemove"?(Ia=n.screenX-_t.screenX,Oa=n.screenY-_t.screenY):Oa=Ia=0,_t=n),Ia)},movementY:function(n){return"movementY"in n?n.movementY:Oa}}),so=Sn(da),Tc=z({},da,{dataTransfer:0}),Uc=Sn(Tc),Ic=z({},er,{relatedTarget:0}),Ra=Sn(Ic),Oc=z({},dt,{animationName:0,elapsedTime:0,pseudoElement:0}),Rc=Sn(Oc),jc=z({},dt,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Nc=Sn(jc),Lc=z({},dt,{data:0}),oo=Sn(Lc),Dc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vc(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Wc[n])?!!e[n]:!1}function ds(){return Vc}var zc=z({},er,{key:function(n){if(n.key){var e=Dc[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Cr(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Hc[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ds,charCode:function(n){return n.type==="keypress"?Cr(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Cr(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Bc=Sn(zc),Gc=z({},da,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lo=Sn(Gc),qc=z({},er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ds}),Jc=Sn(qc),$c=z({},dt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yc=Sn($c),Qc=z({},da,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Kc=Sn(Qc),Xc=[9,13,27,32],cs=Jn&&"CompositionEvent"in window,At=null;Jn&&"documentMode"in document&&(At=document.documentMode);var Zc=Jn&&"TextEvent"in window&&!At,eu=Jn&&(!cs||At&&8<At&&11>=At),uo=" ",co=!1;function tu(n,e){switch(n){case"keyup":return Xc.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ru(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var De=!1;function np(n,e){switch(n){case"compositionend":return ru(e);case"keypress":return e.which!==32?null:(co=!0,uo);case"textInput":return n=e.data,n===uo&&co?null:n;default:return null}}function ep(n,e){if(De)return n==="compositionend"||!cs&&tu(n,e)?(n=nu(),Fr=ls=re=null,De=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return eu&&e.locale!=="ko"?null:e.data;default:return null}}var tp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function po(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!tp[n.type]:e==="textarea"}function au(n,e,t,r){Rl(r),e=zr(e,"onChange"),0<e.length&&(t=new us("onChange","change",null,t,r),n.push({event:t,listeners:e}))}var Mt=null,Vt=null;function rp(n){gu(n,0)}function ca(n){var e=Ve(n);if(Cl(e))return n}function ap(n,e){if(n==="change")return e}var iu=!1;if(Jn){var ja;if(Jn){var Na="oninput"in document;if(!Na){var mo=document.createElement("div");mo.setAttribute("oninput","return;"),Na=typeof mo.oninput=="function"}ja=Na}else ja=!1;iu=ja&&(!document.documentMode||9<document.documentMode)}function fo(){Mt&&(Mt.detachEvent("onpropertychange",su),Vt=Mt=null)}function su(n){if(n.propertyName==="value"&&ca(Vt)){var e=[];au(e,Vt,n,rs(n)),Dl(rp,e)}}function ip(n,e,t){n==="focusin"?(fo(),Mt=e,Vt=t,Mt.attachEvent("onpropertychange",su)):n==="focusout"&&fo()}function sp(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ca(Vt)}function op(n,e){if(n==="click")return ca(e)}function lp(n,e){if(n==="input"||n==="change")return ca(e)}function up(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var jn=typeof Object.is=="function"?Object.is:up;function zt(n,e){if(jn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),r=Object.keys(e);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var a=t[r];if(!ei.call(e,a)||!jn(n[a],e[a]))return!1}return!0}function go(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ho(n,e){var t=go(n);n=0;for(var r;t;){if(t.nodeType===3){if(r=n+t.textContent.length,n<=e&&r>=e)return{node:t,offset:e-n};n=r}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=go(t)}}function ou(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?ou(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function lu(){for(var n=window,e=jr();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=jr(n.document)}return e}function ps(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function dp(n){var e=lu(),t=n.focusedElem,r=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&ou(t.ownerDocument.documentElement,t)){if(r!==null&&ps(t)){if(e=r.start,n=r.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var a=t.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!n.extend&&i>r&&(a=r,r=i,i=a),a=ho(t,i);var s=ho(t,r);a&&s&&(n.rangeCount!==1||n.anchorNode!==a.node||n.anchorOffset!==a.offset||n.focusNode!==s.node||n.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(a.node,a.offset),n.removeAllRanges(),i>r?(n.addRange(e),n.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var cp=Jn&&"documentMode"in document&&11>=document.documentMode,He=null,yi=null,Tt=null,Pi=!1;function vo(n,e,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Pi||He==null||He!==jr(r)||(r=He,"selectionStart"in r&&ps(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Tt&&zt(Tt,r)||(Tt=r,r=zr(yi,"onSelect"),0<r.length&&(e=new us("onSelect","select",null,e,t),n.push({event:e,listeners:r}),e.target=He)))}function fr(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var We={animationend:fr("Animation","AnimationEnd"),animationiteration:fr("Animation","AnimationIteration"),animationstart:fr("Animation","AnimationStart"),transitionend:fr("Transition","TransitionEnd")},La={},uu={};Jn&&(uu=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function pa(n){if(La[n])return La[n];if(!We[n])return n;var e=We[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in uu)return La[n]=e[t];return n}var du=pa("animationend"),cu=pa("animationiteration"),pu=pa("animationstart"),mu=pa("transitionend"),fu=new Map,_o="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ge(n,e){fu.set(n,e),Ie(e,[n])}for(var Da=0;Da<_o.length;Da++){var Ha=_o[Da],pp=Ha.toLowerCase(),mp=Ha[0].toUpperCase()+Ha.slice(1);ge(pp,"on"+mp)}ge(du,"onAnimationEnd");ge(cu,"onAnimationIteration");ge(pu,"onAnimationStart");ge("dblclick","onDoubleClick");ge("focusin","onFocus");ge("focusout","onBlur");ge(mu,"onTransitionEnd");tt("onMouseEnter",["mouseout","mouseover"]);tt("onMouseLeave",["mouseout","mouseover"]);tt("onPointerEnter",["pointerout","pointerover"]);tt("onPointerLeave",["pointerout","pointerover"]);Ie("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ie("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ie("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ie("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ie("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ie("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fp=new Set("cancel close invalid load scroll toggle".split(" ").concat(kt));function wo(n,e,t){var r=n.type||"unknown-event";n.currentTarget=t,pc(r,e,void 0,n),n.currentTarget=null}function gu(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var r=n[t],a=r.event;r=r.listeners;n:{var i=void 0;if(e)for(var s=r.length-1;0<=s;s--){var o=r[s],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==i&&a.isPropagationStopped())break n;wo(a,o,u),i=l}else for(s=0;s<r.length;s++){if(o=r[s],l=o.instance,u=o.currentTarget,o=o.listener,l!==i&&a.isPropagationStopped())break n;wo(a,o,u),i=l}}}if(Lr)throw n=hi,Lr=!1,hi=null,n}function L(n,e){var t=e[xi];t===void 0&&(t=e[xi]=new Set);var r=n+"__bubble";t.has(r)||(hu(e,n,2,!1),t.add(r))}function Wa(n,e,t){var r=0;e&&(r|=4),hu(t,n,r,e)}var gr="_reactListening"+Math.random().toString(36).slice(2);function Bt(n){if(!n[gr]){n[gr]=!0,bl.forEach(function(t){t!=="selectionchange"&&(fp.has(t)||Wa(t,!1,n),Wa(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[gr]||(e[gr]=!0,Wa("selectionchange",!1,e))}}function hu(n,e,t,r){switch(Zl(e)){case 1:var a=Cc;break;case 4:a=Ac;break;default:a=os}t=a.bind(null,e,t,n),a=void 0,!gi||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),r?a!==void 0?n.addEventListener(e,t,{capture:!0,passive:a}):n.addEventListener(e,t,!0):a!==void 0?n.addEventListener(e,t,{passive:a}):n.addEventListener(e,t,!1)}function Va(n,e,t,r,a){var i=r;if(!(e&1)&&!(e&2)&&r!==null)n:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var o=r.stateNode.containerInfo;if(o===a||o.nodeType===8&&o.parentNode===a)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===a||l.nodeType===8&&l.parentNode===a))return;s=s.return}for(;o!==null;){if(s=Se(o),s===null)return;if(l=s.tag,l===5||l===6){r=i=s;continue n}o=o.parentNode}}r=r.return}Dl(function(){var u=i,f=rs(t),g=[];n:{var m=fu.get(n);if(m!==void 0){var h=us,v=n;switch(n){case"keypress":if(Cr(t)===0)break n;case"keydown":case"keyup":h=Bc;break;case"focusin":v="focus",h=Ra;break;case"focusout":v="blur",h=Ra;break;case"beforeblur":case"afterblur":h=Ra;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=so;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Uc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Jc;break;case du:case cu:case pu:h=Rc;break;case mu:h=Yc;break;case"scroll":h=Mc;break;case"wheel":h=Kc;break;case"copy":case"cut":case"paste":h=Nc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=lo}var y=(e&4)!==0,I=!y&&n==="scroll",c=y?m!==null?m+"Capture":null:m;y=[];for(var d=u,p;d!==null;){p=d;var _=p.stateNode;if(p.tag===5&&_!==null&&(p=_,c!==null&&(_=Lt(d,c),_!=null&&y.push(Gt(d,_,p)))),I)break;d=d.return}0<y.length&&(m=new h(m,v,null,t,f),g.push({event:m,listeners:y}))}}if(!(e&7)){n:{if(m=n==="mouseover"||n==="pointerover",h=n==="mouseout"||n==="pointerout",m&&t!==mi&&(v=t.relatedTarget||t.fromElement)&&(Se(v)||v[$n]))break n;if((h||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,h?(v=t.relatedTarget||t.toElement,h=u,v=v?Se(v):null,v!==null&&(I=Oe(v),v!==I||v.tag!==5&&v.tag!==6)&&(v=null)):(h=null,v=u),h!==v)){if(y=so,_="onMouseLeave",c="onMouseEnter",d="mouse",(n==="pointerout"||n==="pointerover")&&(y=lo,_="onPointerLeave",c="onPointerEnter",d="pointer"),I=h==null?m:Ve(h),p=v==null?m:Ve(v),m=new y(_,d+"leave",h,t,f),m.target=I,m.relatedTarget=p,_=null,Se(f)===u&&(y=new y(c,d+"enter",v,t,f),y.target=p,y.relatedTarget=I,_=y),I=_,h&&v)e:{for(y=h,c=v,d=0,p=y;p;p=Re(p))d++;for(p=0,_=c;_;_=Re(_))p++;for(;0<d-p;)y=Re(y),d--;for(;0<p-d;)c=Re(c),p--;for(;d--;){if(y===c||c!==null&&y===c.alternate)break e;y=Re(y),c=Re(c)}y=null}else y=null;h!==null&&yo(g,m,h,y,!1),v!==null&&I!==null&&yo(g,I,v,y,!0)}}n:{if(m=u?Ve(u):window,h=m.nodeName&&m.nodeName.toLowerCase(),h==="select"||h==="input"&&m.type==="file")var P=ap;else if(po(m))if(iu)P=lp;else{P=sp;var E=ip}else(h=m.nodeName)&&h.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(P=op);if(P&&(P=P(n,u))){au(g,P,t,f);break n}E&&E(n,m,u),n==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&li(m,"number",m.value)}switch(E=u?Ve(u):window,n){case"focusin":(po(E)||E.contentEditable==="true")&&(He=E,yi=u,Tt=null);break;case"focusout":Tt=yi=He=null;break;case"mousedown":Pi=!0;break;case"contextmenu":case"mouseup":case"dragend":Pi=!1,vo(g,t,f);break;case"selectionchange":if(cp)break;case"keydown":case"keyup":vo(g,t,f)}var S;if(cs)n:{switch(n){case"compositionstart":var F="onCompositionStart";break n;case"compositionend":F="onCompositionEnd";break n;case"compositionupdate":F="onCompositionUpdate";break n}F=void 0}else De?tu(n,t)&&(F="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(F="onCompositionStart");F&&(eu&&t.locale!=="ko"&&(De||F!=="onCompositionStart"?F==="onCompositionEnd"&&De&&(S=nu()):(re=f,ls="value"in re?re.value:re.textContent,De=!0)),E=zr(u,F),0<E.length&&(F=new oo(F,n,null,t,f),g.push({event:F,listeners:E}),S?F.data=S:(S=ru(t),S!==null&&(F.data=S)))),(S=Zc?np(n,t):ep(n,t))&&(u=zr(u,"onBeforeInput"),0<u.length&&(f=new oo("onBeforeInput","beforeinput",null,t,f),g.push({event:f,listeners:u}),f.data=S))}gu(g,e)})}function Gt(n,e,t){return{instance:n,listener:e,currentTarget:t}}function zr(n,e){for(var t=e+"Capture",r=[];n!==null;){var a=n,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Lt(n,t),i!=null&&r.unshift(Gt(n,i,a)),i=Lt(n,e),i!=null&&r.push(Gt(n,i,a))),n=n.return}return r}function Re(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function yo(n,e,t,r,a){for(var i=e._reactName,s=[];t!==null&&t!==r;){var o=t,l=o.alternate,u=o.stateNode;if(l!==null&&l===r)break;o.tag===5&&u!==null&&(o=u,a?(l=Lt(t,i),l!=null&&s.unshift(Gt(t,l,o))):a||(l=Lt(t,i),l!=null&&s.push(Gt(t,l,o)))),t=t.return}s.length!==0&&n.push({event:e,listeners:s})}var gp=/\r\n?/g,hp=/\u0000|\uFFFD/g;function Po(n){return(typeof n=="string"?n:""+n).replace(gp,`
`).replace(hp,"")}function hr(n,e,t){if(e=Po(e),Po(n)!==e&&t)throw Error(w(425))}function Br(){}var Si=null,bi=null;function Ei(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ki=typeof setTimeout=="function"?setTimeout:void 0,vp=typeof clearTimeout=="function"?clearTimeout:void 0,So=typeof Promise=="function"?Promise:void 0,_p=typeof queueMicrotask=="function"?queueMicrotask:typeof So<"u"?function(n){return So.resolve(null).then(n).catch(wp)}:ki;function wp(n){setTimeout(function(){throw n})}function za(n,e){var t=e,r=0;do{var a=t.nextSibling;if(n.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(r===0){n.removeChild(a),Wt(e);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=a}while(t);Wt(e)}function le(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function bo(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var ct=Math.random().toString(36).slice(2),Dn="__reactFiber$"+ct,qt="__reactProps$"+ct,$n="__reactContainer$"+ct,xi="__reactEvents$"+ct,yp="__reactListeners$"+ct,Pp="__reactHandles$"+ct;function Se(n){var e=n[Dn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[$n]||t[Dn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=bo(n);n!==null;){if(t=n[Dn])return t;n=bo(n)}return e}n=t,t=n.parentNode}return null}function tr(n){return n=n[Dn]||n[$n],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ve(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(w(33))}function ma(n){return n[qt]||null}var Fi=[],ze=-1;function he(n){return{current:n}}function D(n){0>ze||(n.current=Fi[ze],Fi[ze]=null,ze--)}function N(n,e){ze++,Fi[ze]=n.current,n.current=e}var fe={},on=he(fe),fn=he(!1),Ce=fe;function rt(n,e){var t=n.type.contextTypes;if(!t)return fe;var r=n.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in t)a[i]=e[i];return r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=a),a}function gn(n){return n=n.childContextTypes,n!=null}function Gr(){D(fn),D(on)}function Eo(n,e,t){if(on.current!==fe)throw Error(w(168));N(on,e),N(fn,t)}function vu(n,e,t){var r=n.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var a in r)if(!(a in e))throw Error(w(108,ic(n)||"Unknown",a));return z({},t,r)}function qr(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||fe,Ce=on.current,N(on,n),N(fn,fn.current),!0}function ko(n,e,t){var r=n.stateNode;if(!r)throw Error(w(169));t?(n=vu(n,e,Ce),r.__reactInternalMemoizedMergedChildContext=n,D(fn),D(on),N(on,n)):D(fn),N(fn,t)}var zn=null,fa=!1,Ba=!1;function _u(n){zn===null?zn=[n]:zn.push(n)}function Sp(n){fa=!0,_u(n)}function ve(){if(!Ba&&zn!==null){Ba=!0;var n=0,e=R;try{var t=zn;for(R=1;n<t.length;n++){var r=t[n];do r=r(!0);while(r!==null)}zn=null,fa=!1}catch(a){throw zn!==null&&(zn=zn.slice(n+1)),zl(as,ve),a}finally{R=e,Ba=!1}}return null}var Be=[],Ge=0,Jr=null,$r=0,bn=[],En=0,Ae=null,Bn=1,Gn="";function ye(n,e){Be[Ge++]=$r,Be[Ge++]=Jr,Jr=n,$r=e}function wu(n,e,t){bn[En++]=Bn,bn[En++]=Gn,bn[En++]=Ae,Ae=n;var r=Bn;n=Gn;var a=32-On(r)-1;r&=~(1<<a),t+=1;var i=32-On(e)+a;if(30<i){var s=a-a%5;i=(r&(1<<s)-1).toString(32),r>>=s,a-=s,Bn=1<<32-On(e)+a|t<<a|r,Gn=i+n}else Bn=1<<i|t<<a|r,Gn=n}function ms(n){n.return!==null&&(ye(n,1),wu(n,1,0))}function fs(n){for(;n===Jr;)Jr=Be[--Ge],Be[Ge]=null,$r=Be[--Ge],Be[Ge]=null;for(;n===Ae;)Ae=bn[--En],bn[En]=null,Gn=bn[--En],bn[En]=null,Bn=bn[--En],bn[En]=null}var wn=null,_n=null,H=!1,In=null;function yu(n,e){var t=kn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function xo(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,wn=n,_n=le(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,wn=n,_n=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Ae!==null?{id:Bn,overflow:Gn}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=kn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,wn=n,_n=null,!0):!1;default:return!1}}function Ci(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ai(n){if(H){var e=_n;if(e){var t=e;if(!xo(n,e)){if(Ci(n))throw Error(w(418));e=le(t.nextSibling);var r=wn;e&&xo(n,e)?yu(r,t):(n.flags=n.flags&-4097|2,H=!1,wn=n)}}else{if(Ci(n))throw Error(w(418));n.flags=n.flags&-4097|2,H=!1,wn=n}}}function Fo(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;wn=n}function vr(n){if(n!==wn)return!1;if(!H)return Fo(n),H=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Ei(n.type,n.memoizedProps)),e&&(e=_n)){if(Ci(n))throw Pu(),Error(w(418));for(;e;)yu(n,e),e=le(e.nextSibling)}if(Fo(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(w(317));n:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){_n=le(n.nextSibling);break n}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}_n=null}}else _n=wn?le(n.stateNode.nextSibling):null;return!0}function Pu(){for(var n=_n;n;)n=le(n.nextSibling)}function at(){_n=wn=null,H=!1}function gs(n){In===null?In=[n]:In.push(n)}var bp=Kn.ReactCurrentBatchConfig;function wt(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(w(309));var r=t.stateNode}if(!r)throw Error(w(147,n));var a=r,i=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(s){var o=a.refs;s===null?delete o[i]:o[i]=s},e._stringRef=i,e)}if(typeof n!="string")throw Error(w(284));if(!t._owner)throw Error(w(290,n))}return n}function _r(n,e){throw n=Object.prototype.toString.call(e),Error(w(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Co(n){var e=n._init;return e(n._payload)}function Su(n){function e(c,d){if(n){var p=c.deletions;p===null?(c.deletions=[d],c.flags|=16):p.push(d)}}function t(c,d){if(!n)return null;for(;d!==null;)e(c,d),d=d.sibling;return null}function r(c,d){for(c=new Map;d!==null;)d.key!==null?c.set(d.key,d):c.set(d.index,d),d=d.sibling;return c}function a(c,d){return c=pe(c,d),c.index=0,c.sibling=null,c}function i(c,d,p){return c.index=p,n?(p=c.alternate,p!==null?(p=p.index,p<d?(c.flags|=2,d):p):(c.flags|=2,d)):(c.flags|=1048576,d)}function s(c){return n&&c.alternate===null&&(c.flags|=2),c}function o(c,d,p,_){return d===null||d.tag!==6?(d=Ka(p,c.mode,_),d.return=c,d):(d=a(d,p),d.return=c,d)}function l(c,d,p,_){var P=p.type;return P===Le?f(c,d,p.props.children,_,p.key):d!==null&&(d.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Zn&&Co(P)===d.type)?(_=a(d,p.props),_.ref=wt(c,d,p),_.return=c,_):(_=Rr(p.type,p.key,p.props,null,c.mode,_),_.ref=wt(c,d,p),_.return=c,_)}function u(c,d,p,_){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=Xa(p,c.mode,_),d.return=c,d):(d=a(d,p.children||[]),d.return=c,d)}function f(c,d,p,_,P){return d===null||d.tag!==7?(d=xe(p,c.mode,_,P),d.return=c,d):(d=a(d,p),d.return=c,d)}function g(c,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Ka(""+d,c.mode,p),d.return=c,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case or:return p=Rr(d.type,d.key,d.props,null,c.mode,p),p.ref=wt(c,null,d),p.return=c,p;case Ne:return d=Xa(d,c.mode,p),d.return=c,d;case Zn:var _=d._init;return g(c,_(d._payload),p)}if(bt(d)||ft(d))return d=xe(d,c.mode,p,null),d.return=c,d;_r(c,d)}return null}function m(c,d,p,_){var P=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return P!==null?null:o(c,d,""+p,_);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case or:return p.key===P?l(c,d,p,_):null;case Ne:return p.key===P?u(c,d,p,_):null;case Zn:return P=p._init,m(c,d,P(p._payload),_)}if(bt(p)||ft(p))return P!==null?null:f(c,d,p,_,null);_r(c,p)}return null}function h(c,d,p,_,P){if(typeof _=="string"&&_!==""||typeof _=="number")return c=c.get(p)||null,o(d,c,""+_,P);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case or:return c=c.get(_.key===null?p:_.key)||null,l(d,c,_,P);case Ne:return c=c.get(_.key===null?p:_.key)||null,u(d,c,_,P);case Zn:var E=_._init;return h(c,d,p,E(_._payload),P)}if(bt(_)||ft(_))return c=c.get(p)||null,f(d,c,_,P,null);_r(d,_)}return null}function v(c,d,p,_){for(var P=null,E=null,S=d,F=d=0,j=null;S!==null&&F<p.length;F++){S.index>F?(j=S,S=null):j=S.sibling;var T=m(c,S,p[F],_);if(T===null){S===null&&(S=j);break}n&&S&&T.alternate===null&&e(c,S),d=i(T,d,F),E===null?P=T:E.sibling=T,E=T,S=j}if(F===p.length)return t(c,S),H&&ye(c,F),P;if(S===null){for(;F<p.length;F++)S=g(c,p[F],_),S!==null&&(d=i(S,d,F),E===null?P=S:E.sibling=S,E=S);return H&&ye(c,F),P}for(S=r(c,S);F<p.length;F++)j=h(S,c,F,p[F],_),j!==null&&(n&&j.alternate!==null&&S.delete(j.key===null?F:j.key),d=i(j,d,F),E===null?P=j:E.sibling=j,E=j);return n&&S.forEach(function(An){return e(c,An)}),H&&ye(c,F),P}function y(c,d,p,_){var P=ft(p);if(typeof P!="function")throw Error(w(150));if(p=P.call(p),p==null)throw Error(w(151));for(var E=P=null,S=d,F=d=0,j=null,T=p.next();S!==null&&!T.done;F++,T=p.next()){S.index>F?(j=S,S=null):j=S.sibling;var An=m(c,S,T.value,_);if(An===null){S===null&&(S=j);break}n&&S&&An.alternate===null&&e(c,S),d=i(An,d,F),E===null?P=An:E.sibling=An,E=An,S=j}if(T.done)return t(c,S),H&&ye(c,F),P;if(S===null){for(;!T.done;F++,T=p.next())T=g(c,T.value,_),T!==null&&(d=i(T,d,F),E===null?P=T:E.sibling=T,E=T);return H&&ye(c,F),P}for(S=r(c,S);!T.done;F++,T=p.next())T=h(S,c,F,T.value,_),T!==null&&(n&&T.alternate!==null&&S.delete(T.key===null?F:T.key),d=i(T,d,F),E===null?P=T:E.sibling=T,E=T);return n&&S.forEach(function(pt){return e(c,pt)}),H&&ye(c,F),P}function I(c,d,p,_){if(typeof p=="object"&&p!==null&&p.type===Le&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case or:n:{for(var P=p.key,E=d;E!==null;){if(E.key===P){if(P=p.type,P===Le){if(E.tag===7){t(c,E.sibling),d=a(E,p.props.children),d.return=c,c=d;break n}}else if(E.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Zn&&Co(P)===E.type){t(c,E.sibling),d=a(E,p.props),d.ref=wt(c,E,p),d.return=c,c=d;break n}t(c,E);break}else e(c,E);E=E.sibling}p.type===Le?(d=xe(p.props.children,c.mode,_,p.key),d.return=c,c=d):(_=Rr(p.type,p.key,p.props,null,c.mode,_),_.ref=wt(c,d,p),_.return=c,c=_)}return s(c);case Ne:n:{for(E=p.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){t(c,d.sibling),d=a(d,p.children||[]),d.return=c,c=d;break n}else{t(c,d);break}else e(c,d);d=d.sibling}d=Xa(p,c.mode,_),d.return=c,c=d}return s(c);case Zn:return E=p._init,I(c,d,E(p._payload),_)}if(bt(p))return v(c,d,p,_);if(ft(p))return y(c,d,p,_);_r(c,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(t(c,d.sibling),d=a(d,p),d.return=c,c=d):(t(c,d),d=Ka(p,c.mode,_),d.return=c,c=d),s(c)):t(c,d)}return I}var it=Su(!0),bu=Su(!1),Yr=he(null),Qr=null,qe=null,hs=null;function vs(){hs=qe=Qr=null}function _s(n){var e=Yr.current;D(Yr),n._currentValue=e}function Mi(n,e,t){for(;n!==null;){var r=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),n===t)break;n=n.return}}function Ze(n,e){Qr=n,hs=qe=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(mn=!0),n.firstContext=null)}function Fn(n){var e=n._currentValue;if(hs!==n)if(n={context:n,memoizedValue:e,next:null},qe===null){if(Qr===null)throw Error(w(308));qe=n,Qr.dependencies={lanes:0,firstContext:n}}else qe=qe.next=n;return e}var be=null;function ws(n){be===null?be=[n]:be.push(n)}function Eu(n,e,t,r){var a=e.interleaved;return a===null?(t.next=t,ws(e)):(t.next=a.next,a.next=t),e.interleaved=t,Yn(n,r)}function Yn(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var ne=!1;function ys(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ku(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function qn(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function ue(n,e,t){var r=n.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var a=r.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),r.pending=e,Yn(n,t)}return a=r.interleaved,a===null?(e.next=e,ws(r)):(e.next=a.next,a.next=e),r.interleaved=e,Yn(n,t)}function Ar(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,is(n,t)}}function Ao(n,e){var t=n.updateQueue,r=n.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var a=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?a=i=s:i=i.next=s,t=t.next}while(t!==null);i===null?a=i=e:i=i.next=e}else a=i=e;t={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Kr(n,e,t,r){var a=n.updateQueue;ne=!1;var i=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,u=l.next;l.next=null,s===null?i=u:s.next=u,s=l;var f=n.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==s&&(o===null?f.firstBaseUpdate=u:o.next=u,f.lastBaseUpdate=l))}if(i!==null){var g=a.baseState;s=0,f=u=l=null,o=i;do{var m=o.lane,h=o.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:h,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});n:{var v=n,y=o;switch(m=e,h=t,y.tag){case 1:if(v=y.payload,typeof v=="function"){g=v.call(h,g,m);break n}g=v;break n;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,m=typeof v=="function"?v.call(h,g,m):v,m==null)break n;g=z({},g,m);break n;case 2:ne=!0}}o.callback!==null&&o.lane!==0&&(n.flags|=64,m=a.effects,m===null?a.effects=[o]:m.push(o))}else h={eventTime:h,lane:m,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(u=f=h,l=g):f=f.next=h,s|=m;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;m=o,o=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(!0);if(f===null&&(l=g),a.baseState=l,a.firstBaseUpdate=u,a.lastBaseUpdate=f,e=a.shared.interleaved,e!==null){a=e;do s|=a.lane,a=a.next;while(a!==e)}else i===null&&(a.shared.lanes=0);Te|=s,n.lanes=s,n.memoizedState=g}}function Mo(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var r=n[e],a=r.callback;if(a!==null){if(r.callback=null,r=t,typeof a!="function")throw Error(w(191,a));a.call(r)}}}var rr={},Wn=he(rr),Jt=he(rr),$t=he(rr);function Ee(n){if(n===rr)throw Error(w(174));return n}function Ps(n,e){switch(N($t,e),N(Jt,n),N(Wn,rr),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:di(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=di(e,n)}D(Wn),N(Wn,e)}function st(){D(Wn),D(Jt),D($t)}function xu(n){Ee($t.current);var e=Ee(Wn.current),t=di(e,n.type);e!==t&&(N(Jt,n),N(Wn,t))}function Ss(n){Jt.current===n&&(D(Wn),D(Jt))}var W=he(0);function Xr(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ga=[];function bs(){for(var n=0;n<Ga.length;n++)Ga[n]._workInProgressVersionPrimary=null;Ga.length=0}var Mr=Kn.ReactCurrentDispatcher,qa=Kn.ReactCurrentBatchConfig,Me=0,V=null,Y=null,X=null,Zr=!1,Ut=!1,Yt=0,Ep=0;function rn(){throw Error(w(321))}function Es(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!jn(n[t],e[t]))return!1;return!0}function ks(n,e,t,r,a,i){if(Me=i,V=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Mr.current=n===null||n.memoizedState===null?Cp:Ap,n=t(r,a),Ut){i=0;do{if(Ut=!1,Yt=0,25<=i)throw Error(w(301));i+=1,X=Y=null,e.updateQueue=null,Mr.current=Mp,n=t(r,a)}while(Ut)}if(Mr.current=na,e=Y!==null&&Y.next!==null,Me=0,X=Y=V=null,Zr=!1,e)throw Error(w(300));return n}function xs(){var n=Yt!==0;return Yt=0,n}function Ln(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return X===null?V.memoizedState=X=n:X=X.next=n,X}function Cn(){if(Y===null){var n=V.alternate;n=n!==null?n.memoizedState:null}else n=Y.next;var e=X===null?V.memoizedState:X.next;if(e!==null)X=e,Y=n;else{if(n===null)throw Error(w(310));Y=n,n={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},X===null?V.memoizedState=X=n:X=X.next=n}return X}function Qt(n,e){return typeof e=="function"?e(n):e}function Ja(n){var e=Cn(),t=e.queue;if(t===null)throw Error(w(311));t.lastRenderedReducer=n;var r=Y,a=r.baseQueue,i=t.pending;if(i!==null){if(a!==null){var s=a.next;a.next=i.next,i.next=s}r.baseQueue=a=i,t.pending=null}if(a!==null){i=a.next,r=r.baseState;var o=s=null,l=null,u=i;do{var f=u.lane;if((Me&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:n(r,u.action);else{var g={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=g,s=r):l=l.next=g,V.lanes|=f,Te|=f}u=u.next}while(u!==null&&u!==i);l===null?s=r:l.next=o,jn(r,e.memoizedState)||(mn=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,t.lastRenderedState=r}if(n=t.interleaved,n!==null){a=n;do i=a.lane,V.lanes|=i,Te|=i,a=a.next;while(a!==n)}else a===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function $a(n){var e=Cn(),t=e.queue;if(t===null)throw Error(w(311));t.lastRenderedReducer=n;var r=t.dispatch,a=t.pending,i=e.memoizedState;if(a!==null){t.pending=null;var s=a=a.next;do i=n(i,s.action),s=s.next;while(s!==a);jn(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),t.lastRenderedState=i}return[i,r]}function Fu(){}function Cu(n,e){var t=V,r=Cn(),a=e(),i=!jn(r.memoizedState,a);if(i&&(r.memoizedState=a,mn=!0),r=r.queue,Fs(Tu.bind(null,t,r,n),[n]),r.getSnapshot!==e||i||X!==null&&X.memoizedState.tag&1){if(t.flags|=2048,Kt(9,Mu.bind(null,t,r,a,e),void 0,null),Z===null)throw Error(w(349));Me&30||Au(t,e,a)}return a}function Au(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=V.updateQueue,e===null?(e={lastEffect:null,stores:null},V.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Mu(n,e,t,r){e.value=t,e.getSnapshot=r,Uu(e)&&Iu(n)}function Tu(n,e,t){return t(function(){Uu(e)&&Iu(n)})}function Uu(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!jn(n,t)}catch{return!0}}function Iu(n){var e=Yn(n,1);e!==null&&Rn(e,n,1,-1)}function To(n){var e=Ln();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:n},e.queue=n,n=n.dispatch=Fp.bind(null,V,n),[e.memoizedState,n]}function Kt(n,e,t,r){return n={tag:n,create:e,destroy:t,deps:r,next:null},e=V.updateQueue,e===null?(e={lastEffect:null,stores:null},V.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(r=t.next,t.next=n,n.next=r,e.lastEffect=n)),n}function Ou(){return Cn().memoizedState}function Tr(n,e,t,r){var a=Ln();V.flags|=n,a.memoizedState=Kt(1|e,t,void 0,r===void 0?null:r)}function ga(n,e,t,r){var a=Cn();r=r===void 0?null:r;var i=void 0;if(Y!==null){var s=Y.memoizedState;if(i=s.destroy,r!==null&&Es(r,s.deps)){a.memoizedState=Kt(e,t,i,r);return}}V.flags|=n,a.memoizedState=Kt(1|e,t,i,r)}function Uo(n,e){return Tr(8390656,8,n,e)}function Fs(n,e){return ga(2048,8,n,e)}function Ru(n,e){return ga(4,2,n,e)}function ju(n,e){return ga(4,4,n,e)}function Nu(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Lu(n,e,t){return t=t!=null?t.concat([n]):null,ga(4,4,Nu.bind(null,e,n),t)}function Cs(){}function Du(n,e){var t=Cn();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&Es(e,r[1])?r[0]:(t.memoizedState=[n,e],n)}function Hu(n,e){var t=Cn();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&Es(e,r[1])?r[0]:(n=n(),t.memoizedState=[n,e],n)}function Wu(n,e,t){return Me&21?(jn(t,e)||(t=ql(),V.lanes|=t,Te|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,mn=!0),n.memoizedState=t)}function kp(n,e){var t=R;R=t!==0&&4>t?t:4,n(!0);var r=qa.transition;qa.transition={};try{n(!1),e()}finally{R=t,qa.transition=r}}function Vu(){return Cn().memoizedState}function xp(n,e,t){var r=ce(n);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},zu(n))Bu(e,t);else if(t=Eu(n,e,t,r),t!==null){var a=un();Rn(t,n,r,a),Gu(t,e,r)}}function Fp(n,e,t){var r=ce(n),a={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(zu(n))Bu(e,a);else{var i=n.alternate;if(n.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var s=e.lastRenderedState,o=i(s,t);if(a.hasEagerState=!0,a.eagerState=o,jn(o,s)){var l=e.interleaved;l===null?(a.next=a,ws(e)):(a.next=l.next,l.next=a),e.interleaved=a;return}}catch{}finally{}t=Eu(n,e,a,r),t!==null&&(a=un(),Rn(t,n,r,a),Gu(t,e,r))}}function zu(n){var e=n.alternate;return n===V||e!==null&&e===V}function Bu(n,e){Ut=Zr=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Gu(n,e,t){if(t&4194240){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,is(n,t)}}var na={readContext:Fn,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useInsertionEffect:rn,useLayoutEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useMutableSource:rn,useSyncExternalStore:rn,useId:rn,unstable_isNewReconciler:!1},Cp={readContext:Fn,useCallback:function(n,e){return Ln().memoizedState=[n,e===void 0?null:e],n},useContext:Fn,useEffect:Uo,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Tr(4194308,4,Nu.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Tr(4194308,4,n,e)},useInsertionEffect:function(n,e){return Tr(4,2,n,e)},useMemo:function(n,e){var t=Ln();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var r=Ln();return e=t!==void 0?t(e):e,r.memoizedState=r.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},r.queue=n,n=n.dispatch=xp.bind(null,V,n),[r.memoizedState,n]},useRef:function(n){var e=Ln();return n={current:n},e.memoizedState=n},useState:To,useDebugValue:Cs,useDeferredValue:function(n){return Ln().memoizedState=n},useTransition:function(){var n=To(!1),e=n[0];return n=kp.bind(null,n[1]),Ln().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var r=V,a=Ln();if(H){if(t===void 0)throw Error(w(407));t=t()}else{if(t=e(),Z===null)throw Error(w(349));Me&30||Au(r,e,t)}a.memoizedState=t;var i={value:t,getSnapshot:e};return a.queue=i,Uo(Tu.bind(null,r,i,n),[n]),r.flags|=2048,Kt(9,Mu.bind(null,r,i,t,e),void 0,null),t},useId:function(){var n=Ln(),e=Z.identifierPrefix;if(H){var t=Gn,r=Bn;t=(r&~(1<<32-On(r)-1)).toString(32)+t,e=":"+e+"R"+t,t=Yt++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=Ep++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Ap={readContext:Fn,useCallback:Du,useContext:Fn,useEffect:Fs,useImperativeHandle:Lu,useInsertionEffect:Ru,useLayoutEffect:ju,useMemo:Hu,useReducer:Ja,useRef:Ou,useState:function(){return Ja(Qt)},useDebugValue:Cs,useDeferredValue:function(n){var e=Cn();return Wu(e,Y.memoizedState,n)},useTransition:function(){var n=Ja(Qt)[0],e=Cn().memoizedState;return[n,e]},useMutableSource:Fu,useSyncExternalStore:Cu,useId:Vu,unstable_isNewReconciler:!1},Mp={readContext:Fn,useCallback:Du,useContext:Fn,useEffect:Fs,useImperativeHandle:Lu,useInsertionEffect:Ru,useLayoutEffect:ju,useMemo:Hu,useReducer:$a,useRef:Ou,useState:function(){return $a(Qt)},useDebugValue:Cs,useDeferredValue:function(n){var e=Cn();return Y===null?e.memoizedState=n:Wu(e,Y.memoizedState,n)},useTransition:function(){var n=$a(Qt)[0],e=Cn().memoizedState;return[n,e]},useMutableSource:Fu,useSyncExternalStore:Cu,useId:Vu,unstable_isNewReconciler:!1};function Tn(n,e){if(n&&n.defaultProps){e=z({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Ti(n,e,t,r){e=n.memoizedState,t=t(r,e),t=t==null?e:z({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var ha={isMounted:function(n){return(n=n._reactInternals)?Oe(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var r=un(),a=ce(n),i=qn(r,a);i.payload=e,t!=null&&(i.callback=t),e=ue(n,i,a),e!==null&&(Rn(e,n,a,r),Ar(e,n,a))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var r=un(),a=ce(n),i=qn(r,a);i.tag=1,i.payload=e,t!=null&&(i.callback=t),e=ue(n,i,a),e!==null&&(Rn(e,n,a,r),Ar(e,n,a))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=un(),r=ce(n),a=qn(t,r);a.tag=2,e!=null&&(a.callback=e),e=ue(n,a,r),e!==null&&(Rn(e,n,r,t),Ar(e,n,r))}};function Io(n,e,t,r,a,i,s){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(r,i,s):e.prototype&&e.prototype.isPureReactComponent?!zt(t,r)||!zt(a,i):!0}function qu(n,e,t){var r=!1,a=fe,i=e.contextType;return typeof i=="object"&&i!==null?i=Fn(i):(a=gn(e)?Ce:on.current,r=e.contextTypes,i=(r=r!=null)?rt(n,a):fe),e=new e(t,i),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ha,n.stateNode=e,e._reactInternals=n,r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=a,n.__reactInternalMemoizedMaskedChildContext=i),e}function Oo(n,e,t,r){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,r),e.state!==n&&ha.enqueueReplaceState(e,e.state,null)}function Ui(n,e,t,r){var a=n.stateNode;a.props=t,a.state=n.memoizedState,a.refs={},ys(n);var i=e.contextType;typeof i=="object"&&i!==null?a.context=Fn(i):(i=gn(e)?Ce:on.current,a.context=rt(n,i)),a.state=n.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Ti(n,e,i,t),a.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(e=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),e!==a.state&&ha.enqueueReplaceState(a,a.state,null),Kr(n,t,a,r),a.state=n.memoizedState),typeof a.componentDidMount=="function"&&(n.flags|=4194308)}function ot(n,e){try{var t="",r=e;do t+=ac(r),r=r.return;while(r);var a=t}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:n,source:e,stack:a,digest:null}}function Ya(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Ii(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var Tp=typeof WeakMap=="function"?WeakMap:Map;function Ju(n,e,t){t=qn(-1,t),t.tag=3,t.payload={element:null};var r=e.value;return t.callback=function(){ta||(ta=!0,zi=r),Ii(n,e)},t}function $u(n,e,t){t=qn(-1,t),t.tag=3;var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var a=e.value;t.payload=function(){return r(a)},t.callback=function(){Ii(n,e)}}var i=n.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Ii(n,e),typeof r!="function"&&(de===null?de=new Set([this]):de.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),t}function Ro(n,e,t){var r=n.pingCache;if(r===null){r=n.pingCache=new Tp;var a=new Set;r.set(e,a)}else a=r.get(e),a===void 0&&(a=new Set,r.set(e,a));a.has(t)||(a.add(t),n=Gp.bind(null,n,e,t),e.then(n,n))}function jo(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function No(n,e,t,r,a){return n.mode&1?(n.flags|=65536,n.lanes=a,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=qn(-1,1),e.tag=2,ue(t,e,1))),t.lanes|=1),n)}var Up=Kn.ReactCurrentOwner,mn=!1;function ln(n,e,t,r){e.child=n===null?bu(e,null,t,r):it(e,n.child,t,r)}function Lo(n,e,t,r,a){t=t.render;var i=e.ref;return Ze(e,a),r=ks(n,e,t,r,i,a),t=xs(),n!==null&&!mn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~a,Qn(n,e,a)):(H&&t&&ms(e),e.flags|=1,ln(n,e,r,a),e.child)}function Do(n,e,t,r,a){if(n===null){var i=t.type;return typeof i=="function"&&!js(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=i,Yu(n,e,i,r,a)):(n=Rr(t.type,null,r,e,e.mode,a),n.ref=e.ref,n.return=e,e.child=n)}if(i=n.child,!(n.lanes&a)){var s=i.memoizedProps;if(t=t.compare,t=t!==null?t:zt,t(s,r)&&n.ref===e.ref)return Qn(n,e,a)}return e.flags|=1,n=pe(i,r),n.ref=e.ref,n.return=e,e.child=n}function Yu(n,e,t,r,a){if(n!==null){var i=n.memoizedProps;if(zt(i,r)&&n.ref===e.ref)if(mn=!1,e.pendingProps=r=i,(n.lanes&a)!==0)n.flags&131072&&(mn=!0);else return e.lanes=n.lanes,Qn(n,e,a)}return Oi(n,e,t,r,a)}function Qu(n,e,t){var r=e.pendingProps,a=r.children,i=n!==null?n.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},N($e,vn),vn|=t;else{if(!(t&1073741824))return n=i!==null?i.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,N($e,vn),vn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,N($e,vn),vn|=r}else i!==null?(r=i.baseLanes|t,e.memoizedState=null):r=t,N($e,vn),vn|=r;return ln(n,e,a,t),e.child}function Ku(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Oi(n,e,t,r,a){var i=gn(t)?Ce:on.current;return i=rt(e,i),Ze(e,a),t=ks(n,e,t,r,i,a),r=xs(),n!==null&&!mn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~a,Qn(n,e,a)):(H&&r&&ms(e),e.flags|=1,ln(n,e,t,a),e.child)}function Ho(n,e,t,r,a){if(gn(t)){var i=!0;qr(e)}else i=!1;if(Ze(e,a),e.stateNode===null)Ur(n,e),qu(e,t,r),Ui(e,t,r,a),r=!0;else if(n===null){var s=e.stateNode,o=e.memoizedProps;s.props=o;var l=s.context,u=t.contextType;typeof u=="object"&&u!==null?u=Fn(u):(u=gn(t)?Ce:on.current,u=rt(e,u));var f=t.getDerivedStateFromProps,g=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";g||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==r||l!==u)&&Oo(e,s,r,u),ne=!1;var m=e.memoizedState;s.state=m,Kr(e,r,s,a),l=e.memoizedState,o!==r||m!==l||fn.current||ne?(typeof f=="function"&&(Ti(e,t,f,r),l=e.memoizedState),(o=ne||Io(e,t,o,r,m,l,u))?(g||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=u,r=o):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,ku(n,e),o=e.memoizedProps,u=e.type===e.elementType?o:Tn(e.type,o),s.props=u,g=e.pendingProps,m=s.context,l=t.contextType,typeof l=="object"&&l!==null?l=Fn(l):(l=gn(t)?Ce:on.current,l=rt(e,l));var h=t.getDerivedStateFromProps;(f=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==g||m!==l)&&Oo(e,s,r,l),ne=!1,m=e.memoizedState,s.state=m,Kr(e,r,s,a);var v=e.memoizedState;o!==g||m!==v||fn.current||ne?(typeof h=="function"&&(Ti(e,t,h,r),v=e.memoizedState),(u=ne||Io(e,t,u,r,m,v,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===n.memoizedProps&&m===n.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&m===n.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),s.props=r,s.state=v,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||o===n.memoizedProps&&m===n.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&m===n.memoizedState||(e.flags|=1024),r=!1)}return Ri(n,e,t,r,i,a)}function Ri(n,e,t,r,a,i){Ku(n,e);var s=(e.flags&128)!==0;if(!r&&!s)return a&&ko(e,t,!1),Qn(n,e,i);r=e.stateNode,Up.current=e;var o=s&&typeof t.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,n!==null&&s?(e.child=it(e,n.child,null,i),e.child=it(e,null,o,i)):ln(n,e,o,i),e.memoizedState=r.state,a&&ko(e,t,!0),e.child}function Xu(n){var e=n.stateNode;e.pendingContext?Eo(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Eo(n,e.context,!1),Ps(n,e.containerInfo)}function Wo(n,e,t,r,a){return at(),gs(a),e.flags|=256,ln(n,e,t,r),e.child}var ji={dehydrated:null,treeContext:null,retryLane:0};function Ni(n){return{baseLanes:n,cachePool:null,transitions:null}}function Zu(n,e,t){var r=e.pendingProps,a=W.current,i=!1,s=(e.flags&128)!==0,o;if((o=s)||(o=n!==null&&n.memoizedState===null?!1:(a&2)!==0),o?(i=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(a|=1),N(W,a&1),n===null)return Ai(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,n=r.fallback,i?(r=e.mode,i=e.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=wa(s,r,0,null),n=xe(n,r,t,null),i.return=e,n.return=e,i.sibling=n,e.child=i,e.child.memoizedState=Ni(t),e.memoizedState=ji,n):As(e,s));if(a=n.memoizedState,a!==null&&(o=a.dehydrated,o!==null))return Ip(n,e,s,r,o,a,t);if(i){i=r.fallback,s=e.mode,a=n.child,o=a.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==a?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=pe(a,l),r.subtreeFlags=a.subtreeFlags&14680064),o!==null?i=pe(o,i):(i=xe(i,s,t,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,s=n.child.memoizedState,s=s===null?Ni(t):{baseLanes:s.baseLanes|t,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=n.childLanes&~t,e.memoizedState=ji,r}return i=n.child,n=i.sibling,r=pe(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=t),r.return=e,r.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=r,e.memoizedState=null,r}function As(n,e){return e=wa({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function wr(n,e,t,r){return r!==null&&gs(r),it(e,n.child,null,t),n=As(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Ip(n,e,t,r,a,i,s){if(t)return e.flags&256?(e.flags&=-257,r=Ya(Error(w(422))),wr(n,e,s,r)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(i=r.fallback,a=e.mode,r=wa({mode:"visible",children:r.children},a,0,null),i=xe(i,a,s,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&it(e,n.child,null,s),e.child.memoizedState=Ni(s),e.memoizedState=ji,i);if(!(e.mode&1))return wr(n,e,s,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var o=r.dgst;return r=o,i=Error(w(419)),r=Ya(i,r,void 0),wr(n,e,s,r)}if(o=(s&n.childLanes)!==0,mn||o){if(r=Z,r!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|s)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,Yn(n,a),Rn(r,n,a,-1))}return Rs(),r=Ya(Error(w(421))),wr(n,e,s,r)}return a.data==="$?"?(e.flags|=128,e.child=n.child,e=qp.bind(null,n),a._reactRetry=e,null):(n=i.treeContext,_n=le(a.nextSibling),wn=e,H=!0,In=null,n!==null&&(bn[En++]=Bn,bn[En++]=Gn,bn[En++]=Ae,Bn=n.id,Gn=n.overflow,Ae=e),e=As(e,r.children),e.flags|=4096,e)}function Vo(n,e,t){n.lanes|=e;var r=n.alternate;r!==null&&(r.lanes|=e),Mi(n.return,e,t)}function Qa(n,e,t,r,a){var i=n.memoizedState;i===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:a}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=a)}function nd(n,e,t){var r=e.pendingProps,a=r.revealOrder,i=r.tail;if(ln(n,e,r.children,t),r=W.current,r&2)r=r&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Vo(n,t,e);else if(n.tag===19)Vo(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}r&=1}if(N(W,r),!(e.mode&1))e.memoizedState=null;else switch(a){case"forwards":for(t=e.child,a=null;t!==null;)n=t.alternate,n!==null&&Xr(n)===null&&(a=t),t=t.sibling;t=a,t===null?(a=e.child,e.child=null):(a=t.sibling,t.sibling=null),Qa(e,!1,a,t,i);break;case"backwards":for(t=null,a=e.child,e.child=null;a!==null;){if(n=a.alternate,n!==null&&Xr(n)===null){e.child=a;break}n=a.sibling,a.sibling=t,t=a,a=n}Qa(e,!0,t,null,i);break;case"together":Qa(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ur(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Qn(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Te|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(w(153));if(e.child!==null){for(n=e.child,t=pe(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=pe(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Op(n,e,t){switch(e.tag){case 3:Xu(e),at();break;case 5:xu(e);break;case 1:gn(e.type)&&qr(e);break;case 4:Ps(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,a=e.memoizedProps.value;N(Yr,r._currentValue),r._currentValue=a;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(N(W,W.current&1),e.flags|=128,null):t&e.child.childLanes?Zu(n,e,t):(N(W,W.current&1),n=Qn(n,e,t),n!==null?n.sibling:null);N(W,W.current&1);break;case 19:if(r=(t&e.childLanes)!==0,n.flags&128){if(r)return nd(n,e,t);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),N(W,W.current),r)break;return null;case 22:case 23:return e.lanes=0,Qu(n,e,t)}return Qn(n,e,t)}var ed,Li,td,rd;ed=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Li=function(){};td=function(n,e,t,r){var a=n.memoizedProps;if(a!==r){n=e.stateNode,Ee(Wn.current);var i=null;switch(t){case"input":a=si(n,a),r=si(n,r),i=[];break;case"select":a=z({},a,{value:void 0}),r=z({},r,{value:void 0}),i=[];break;case"textarea":a=ui(n,a),r=ui(n,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(n.onclick=Br)}ci(t,r);var s;t=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var o=a[u];for(s in o)o.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(jt.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(o=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(t||(t={}),t[s]=l[s])}else t||(i||(i=[]),i.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(jt.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&L("scroll",n),i||o===l||(i=[])):(i=i||[]).push(u,l))}t&&(i=i||[]).push("style",t);var u=i;(e.updateQueue=u)&&(e.flags|=4)}};rd=function(n,e,t,r){t!==r&&(e.flags|=4)};function yt(n,e){if(!H)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:r.sibling=null}}function an(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,r=0;if(e)for(var a=n.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=n,a=a.sibling;else for(a=n.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=n,a=a.sibling;return n.subtreeFlags|=r,n.childLanes=t,e}function Rp(n,e,t){var r=e.pendingProps;switch(fs(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(e),null;case 1:return gn(e.type)&&Gr(),an(e),null;case 3:return r=e.stateNode,st(),D(fn),D(on),bs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(n===null||n.child===null)&&(vr(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,In!==null&&(qi(In),In=null))),Li(n,e),an(e),null;case 5:Ss(e);var a=Ee($t.current);if(t=e.type,n!==null&&e.stateNode!=null)td(n,e,t,r,a),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(w(166));return an(e),null}if(n=Ee(Wn.current),vr(e)){r=e.stateNode,t=e.type;var i=e.memoizedProps;switch(r[Dn]=e,r[qt]=i,n=(e.mode&1)!==0,t){case"dialog":L("cancel",r),L("close",r);break;case"iframe":case"object":case"embed":L("load",r);break;case"video":case"audio":for(a=0;a<kt.length;a++)L(kt[a],r);break;case"source":L("error",r);break;case"img":case"image":case"link":L("error",r),L("load",r);break;case"details":L("toggle",r);break;case"input":Qs(r,i),L("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},L("invalid",r);break;case"textarea":Xs(r,i),L("invalid",r)}ci(t,i),a=null;for(var s in i)if(i.hasOwnProperty(s)){var o=i[s];s==="children"?typeof o=="string"?r.textContent!==o&&(i.suppressHydrationWarning!==!0&&hr(r.textContent,o,n),a=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(i.suppressHydrationWarning!==!0&&hr(r.textContent,o,n),a=["children",""+o]):jt.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&L("scroll",r)}switch(t){case"input":lr(r),Ks(r,i,!0);break;case"textarea":lr(r),Zs(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Br)}r=a,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=a.nodeType===9?a:a.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Tl(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=s.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof r.is=="string"?n=s.createElement(t,{is:r.is}):(n=s.createElement(t),t==="select"&&(s=n,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):n=s.createElementNS(n,t),n[Dn]=e,n[qt]=r,ed(n,e,!1,!1),e.stateNode=n;n:{switch(s=pi(t,r),t){case"dialog":L("cancel",n),L("close",n),a=r;break;case"iframe":case"object":case"embed":L("load",n),a=r;break;case"video":case"audio":for(a=0;a<kt.length;a++)L(kt[a],n);a=r;break;case"source":L("error",n),a=r;break;case"img":case"image":case"link":L("error",n),L("load",n),a=r;break;case"details":L("toggle",n),a=r;break;case"input":Qs(n,r),a=si(n,r),L("invalid",n);break;case"option":a=r;break;case"select":n._wrapperState={wasMultiple:!!r.multiple},a=z({},r,{value:void 0}),L("invalid",n);break;case"textarea":Xs(n,r),a=ui(n,r),L("invalid",n);break;default:a=r}ci(t,a),o=a;for(i in o)if(o.hasOwnProperty(i)){var l=o[i];i==="style"?Ol(n,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ul(n,l)):i==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Nt(n,l):typeof l=="number"&&Nt(n,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(jt.hasOwnProperty(i)?l!=null&&i==="onScroll"&&L("scroll",n):l!=null&&Zi(n,i,l,s))}switch(t){case"input":lr(n),Ks(n,r,!1);break;case"textarea":lr(n),Zs(n);break;case"option":r.value!=null&&n.setAttribute("value",""+me(r.value));break;case"select":n.multiple=!!r.multiple,i=r.value,i!=null?Ye(n,!!r.multiple,i,!1):r.defaultValue!=null&&Ye(n,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(n.onclick=Br)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break n;case"img":r=!0;break n;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return an(e),null;case 6:if(n&&e.stateNode!=null)rd(n,e,n.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(w(166));if(t=Ee($t.current),Ee(Wn.current),vr(e)){if(r=e.stateNode,t=e.memoizedProps,r[Dn]=e,(i=r.nodeValue!==t)&&(n=wn,n!==null))switch(n.tag){case 3:hr(r.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&hr(r.nodeValue,t,(n.mode&1)!==0)}i&&(e.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Dn]=e,e.stateNode=r}return an(e),null;case 13:if(D(W),r=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(H&&_n!==null&&e.mode&1&&!(e.flags&128))Pu(),at(),e.flags|=98560,i=!1;else if(i=vr(e),r!==null&&r.dehydrated!==null){if(n===null){if(!i)throw Error(w(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(w(317));i[Dn]=e}else at(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;an(e),i=!1}else In!==null&&(qi(In),In=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(r=r!==null,r!==(n!==null&&n.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(n===null||W.current&1?Q===0&&(Q=3):Rs())),e.updateQueue!==null&&(e.flags|=4),an(e),null);case 4:return st(),Li(n,e),n===null&&Bt(e.stateNode.containerInfo),an(e),null;case 10:return _s(e.type._context),an(e),null;case 17:return gn(e.type)&&Gr(),an(e),null;case 19:if(D(W),i=e.memoizedState,i===null)return an(e),null;if(r=(e.flags&128)!==0,s=i.rendering,s===null)if(r)yt(i,!1);else{if(Q!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(s=Xr(n),s!==null){for(e.flags|=128,yt(i,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=t,t=e.child;t!==null;)i=t,n=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=n,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,n=s.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return N(W,W.current&1|2),e.child}n=n.sibling}i.tail!==null&&q()>lt&&(e.flags|=128,r=!0,yt(i,!1),e.lanes=4194304)}else{if(!r)if(n=Xr(s),n!==null){if(e.flags|=128,r=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),yt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!H)return an(e),null}else 2*q()-i.renderingStartTime>lt&&t!==1073741824&&(e.flags|=128,r=!0,yt(i,!1),e.lanes=4194304);i.isBackwards?(s.sibling=e.child,e.child=s):(t=i.last,t!==null?t.sibling=s:e.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=q(),e.sibling=null,t=W.current,N(W,r?t&1|2:t&1),e):(an(e),null);case 22:case 23:return Os(),r=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?vn&1073741824&&(an(e),e.subtreeFlags&6&&(e.flags|=8192)):an(e),null;case 24:return null;case 25:return null}throw Error(w(156,e.tag))}function jp(n,e){switch(fs(e),e.tag){case 1:return gn(e.type)&&Gr(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return st(),D(fn),D(on),bs(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Ss(e),null;case 13:if(D(W),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(w(340));at()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return D(W),null;case 4:return st(),null;case 10:return _s(e.type._context),null;case 22:case 23:return Os(),null;case 24:return null;default:return null}}var yr=!1,sn=!1,Np=typeof WeakSet=="function"?WeakSet:Set,k=null;function Je(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){B(n,e,r)}else t.current=null}function Di(n,e,t){try{t()}catch(r){B(n,e,r)}}var zo=!1;function Lp(n,e){if(Si=Wr,n=lu(),ps(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else n:{t=(t=n.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break n}var s=0,o=-1,l=-1,u=0,f=0,g=n,m=null;e:for(;;){for(var h;g!==t||a!==0&&g.nodeType!==3||(o=s+a),g!==i||r!==0&&g.nodeType!==3||(l=s+r),g.nodeType===3&&(s+=g.nodeValue.length),(h=g.firstChild)!==null;)m=g,g=h;for(;;){if(g===n)break e;if(m===t&&++u===a&&(o=s),m===i&&++f===r&&(l=s),(h=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=h}t=o===-1||l===-1?null:{start:o,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(bi={focusedElem:n,selectionRange:t},Wr=!1,k=e;k!==null;)if(e=k,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,k=n;else for(;k!==null;){e=k;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,I=v.memoizedState,c=e.stateNode,d=c.getSnapshotBeforeUpdate(e.elementType===e.type?y:Tn(e.type,y),I);c.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(_){B(e,e.return,_)}if(n=e.sibling,n!==null){n.return=e.return,k=n;break}k=e.return}return v=zo,zo=!1,v}function It(n,e,t){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var i=a.destroy;a.destroy=void 0,i!==void 0&&Di(e,t,i)}a=a.next}while(a!==r)}}function va(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}}function Hi(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function ad(n){var e=n.alternate;e!==null&&(n.alternate=null,ad(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Dn],delete e[qt],delete e[xi],delete e[yp],delete e[Pp])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function id(n){return n.tag===5||n.tag===3||n.tag===4}function Bo(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||id(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Wi(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Br));else if(r!==4&&(n=n.child,n!==null))for(Wi(n,e,t),n=n.sibling;n!==null;)Wi(n,e,t),n=n.sibling}function Vi(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(r!==4&&(n=n.child,n!==null))for(Vi(n,e,t),n=n.sibling;n!==null;)Vi(n,e,t),n=n.sibling}var nn=null,Un=!1;function Xn(n,e,t){for(t=t.child;t!==null;)sd(n,e,t),t=t.sibling}function sd(n,e,t){if(Hn&&typeof Hn.onCommitFiberUnmount=="function")try{Hn.onCommitFiberUnmount(ua,t)}catch{}switch(t.tag){case 5:sn||Je(t,e);case 6:var r=nn,a=Un;nn=null,Xn(n,e,t),nn=r,Un=a,nn!==null&&(Un?(n=nn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):nn.removeChild(t.stateNode));break;case 18:nn!==null&&(Un?(n=nn,t=t.stateNode,n.nodeType===8?za(n.parentNode,t):n.nodeType===1&&za(n,t),Wt(n)):za(nn,t.stateNode));break;case 4:r=nn,a=Un,nn=t.stateNode.containerInfo,Un=!0,Xn(n,e,t),nn=r,Un=a;break;case 0:case 11:case 14:case 15:if(!sn&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Di(t,e,s),a=a.next}while(a!==r)}Xn(n,e,t);break;case 1:if(!sn&&(Je(t,e),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(o){B(t,e,o)}Xn(n,e,t);break;case 21:Xn(n,e,t);break;case 22:t.mode&1?(sn=(r=sn)||t.memoizedState!==null,Xn(n,e,t),sn=r):Xn(n,e,t);break;default:Xn(n,e,t)}}function Go(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new Np),e.forEach(function(r){var a=Jp.bind(null,n,r);t.has(r)||(t.add(r),r.then(a,a))})}}function Mn(n,e){var t=e.deletions;if(t!==null)for(var r=0;r<t.length;r++){var a=t[r];try{var i=n,s=e,o=s;n:for(;o!==null;){switch(o.tag){case 5:nn=o.stateNode,Un=!1;break n;case 3:nn=o.stateNode.containerInfo,Un=!0;break n;case 4:nn=o.stateNode.containerInfo,Un=!0;break n}o=o.return}if(nn===null)throw Error(w(160));sd(i,s,a),nn=null,Un=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(u){B(a,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)od(e,n),e=e.sibling}function od(n,e){var t=n.alternate,r=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Mn(e,n),Nn(n),r&4){try{It(3,n,n.return),va(3,n)}catch(y){B(n,n.return,y)}try{It(5,n,n.return)}catch(y){B(n,n.return,y)}}break;case 1:Mn(e,n),Nn(n),r&512&&t!==null&&Je(t,t.return);break;case 5:if(Mn(e,n),Nn(n),r&512&&t!==null&&Je(t,t.return),n.flags&32){var a=n.stateNode;try{Nt(a,"")}catch(y){B(n,n.return,y)}}if(r&4&&(a=n.stateNode,a!=null)){var i=n.memoizedProps,s=t!==null?t.memoizedProps:i,o=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{o==="input"&&i.type==="radio"&&i.name!=null&&Al(a,i),pi(o,s);var u=pi(o,i);for(s=0;s<l.length;s+=2){var f=l[s],g=l[s+1];f==="style"?Ol(a,g):f==="dangerouslySetInnerHTML"?Ul(a,g):f==="children"?Nt(a,g):Zi(a,f,g,u)}switch(o){case"input":oi(a,i);break;case"textarea":Ml(a,i);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var h=i.value;h!=null?Ye(a,!!i.multiple,h,!1):m!==!!i.multiple&&(i.defaultValue!=null?Ye(a,!!i.multiple,i.defaultValue,!0):Ye(a,!!i.multiple,i.multiple?[]:"",!1))}a[qt]=i}catch(y){B(n,n.return,y)}}break;case 6:if(Mn(e,n),Nn(n),r&4){if(n.stateNode===null)throw Error(w(162));a=n.stateNode,i=n.memoizedProps;try{a.nodeValue=i}catch(y){B(n,n.return,y)}}break;case 3:if(Mn(e,n),Nn(n),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Wt(e.containerInfo)}catch(y){B(n,n.return,y)}break;case 4:Mn(e,n),Nn(n);break;case 13:Mn(e,n),Nn(n),a=n.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(Us=q())),r&4&&Go(n);break;case 22:if(f=t!==null&&t.memoizedState!==null,n.mode&1?(sn=(u=sn)||f,Mn(e,n),sn=u):Mn(e,n),Nn(n),r&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!f&&n.mode&1)for(k=n,f=n.child;f!==null;){for(g=k=f;k!==null;){switch(m=k,h=m.child,m.tag){case 0:case 11:case 14:case 15:It(4,m,m.return);break;case 1:Je(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){r=m,t=m.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){B(r,t,y)}}break;case 5:Je(m,m.return);break;case 22:if(m.memoizedState!==null){Jo(g);continue}}h!==null?(h.return=m,k=h):Jo(g)}f=f.sibling}n:for(f=null,g=n;;){if(g.tag===5){if(f===null){f=g;try{a=g.stateNode,u?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(o=g.stateNode,l=g.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Il("display",s))}catch(y){B(n,n.return,y)}}}else if(g.tag===6){if(f===null)try{g.stateNode.nodeValue=u?"":g.memoizedProps}catch(y){B(n,n.return,y)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===n)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break n;for(;g.sibling===null;){if(g.return===null||g.return===n)break n;f===g&&(f=null),g=g.return}f===g&&(f=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Mn(e,n),Nn(n),r&4&&Go(n);break;case 21:break;default:Mn(e,n),Nn(n)}}function Nn(n){var e=n.flags;if(e&2){try{n:{for(var t=n.return;t!==null;){if(id(t)){var r=t;break n}t=t.return}throw Error(w(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Nt(a,""),r.flags&=-33);var i=Bo(n);Vi(n,i,a);break;case 3:case 4:var s=r.stateNode.containerInfo,o=Bo(n);Wi(n,o,s);break;default:throw Error(w(161))}}catch(l){B(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Dp(n,e,t){k=n,ld(n)}function ld(n,e,t){for(var r=(n.mode&1)!==0;k!==null;){var a=k,i=a.child;if(a.tag===22&&r){var s=a.memoizedState!==null||yr;if(!s){var o=a.alternate,l=o!==null&&o.memoizedState!==null||sn;o=yr;var u=sn;if(yr=s,(sn=l)&&!u)for(k=a;k!==null;)s=k,l=s.child,s.tag===22&&s.memoizedState!==null?$o(a):l!==null?(l.return=s,k=l):$o(a);for(;i!==null;)k=i,ld(i),i=i.sibling;k=a,yr=o,sn=u}qo(n)}else a.subtreeFlags&8772&&i!==null?(i.return=a,k=i):qo(n)}}function qo(n){for(;k!==null;){var e=k;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:sn||va(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!sn)if(t===null)r.componentDidMount();else{var a=e.elementType===e.type?t.memoizedProps:Tn(e.type,t.memoizedProps);r.componentDidUpdate(a,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Mo(e,i,r);break;case 3:var s=e.updateQueue;if(s!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Mo(e,s,t)}break;case 5:var o=e.stateNode;if(t===null&&e.flags&4){t=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var g=f.dehydrated;g!==null&&Wt(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}sn||e.flags&512&&Hi(e)}catch(m){B(e,e.return,m)}}if(e===n){k=null;break}if(t=e.sibling,t!==null){t.return=e.return,k=t;break}k=e.return}}function Jo(n){for(;k!==null;){var e=k;if(e===n){k=null;break}var t=e.sibling;if(t!==null){t.return=e.return,k=t;break}k=e.return}}function $o(n){for(;k!==null;){var e=k;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{va(4,e)}catch(l){B(e,t,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var a=e.return;try{r.componentDidMount()}catch(l){B(e,a,l)}}var i=e.return;try{Hi(e)}catch(l){B(e,i,l)}break;case 5:var s=e.return;try{Hi(e)}catch(l){B(e,s,l)}}}catch(l){B(e,e.return,l)}if(e===n){k=null;break}var o=e.sibling;if(o!==null){o.return=e.return,k=o;break}k=e.return}}var Hp=Math.ceil,ea=Kn.ReactCurrentDispatcher,Ms=Kn.ReactCurrentOwner,xn=Kn.ReactCurrentBatchConfig,U=0,Z=null,$=null,en=0,vn=0,$e=he(0),Q=0,Xt=null,Te=0,_a=0,Ts=0,Ot=null,pn=null,Us=0,lt=1/0,Vn=null,ta=!1,zi=null,de=null,Pr=!1,ae=null,ra=0,Rt=0,Bi=null,Ir=-1,Or=0;function un(){return U&6?q():Ir!==-1?Ir:Ir=q()}function ce(n){return n.mode&1?U&2&&en!==0?en&-en:bp.transition!==null?(Or===0&&(Or=ql()),Or):(n=R,n!==0||(n=window.event,n=n===void 0?16:Zl(n.type)),n):1}function Rn(n,e,t,r){if(50<Rt)throw Rt=0,Bi=null,Error(w(185));nr(n,t,r),(!(U&2)||n!==Z)&&(n===Z&&(!(U&2)&&(_a|=t),Q===4&&te(n,en)),hn(n,r),t===1&&U===0&&!(e.mode&1)&&(lt=q()+500,fa&&ve()))}function hn(n,e){var t=n.callbackNode;bc(n,e);var r=Hr(n,n===Z?en:0);if(r===0)t!==null&&to(t),n.callbackNode=null,n.callbackPriority=0;else if(e=r&-r,n.callbackPriority!==e){if(t!=null&&to(t),e===1)n.tag===0?Sp(Yo.bind(null,n)):_u(Yo.bind(null,n)),_p(function(){!(U&6)&&ve()}),t=null;else{switch(Jl(r)){case 1:t=as;break;case 4:t=Bl;break;case 16:t=Dr;break;case 536870912:t=Gl;break;default:t=Dr}t=hd(t,ud.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function ud(n,e){if(Ir=-1,Or=0,U&6)throw Error(w(327));var t=n.callbackNode;if(nt()&&n.callbackNode!==t)return null;var r=Hr(n,n===Z?en:0);if(r===0)return null;if(r&30||r&n.expiredLanes||e)e=aa(n,r);else{e=r;var a=U;U|=2;var i=cd();(Z!==n||en!==e)&&(Vn=null,lt=q()+500,ke(n,e));do try{zp();break}catch(o){dd(n,o)}while(!0);vs(),ea.current=i,U=a,$!==null?e=0:(Z=null,en=0,e=Q)}if(e!==0){if(e===2&&(a=vi(n),a!==0&&(r=a,e=Gi(n,a))),e===1)throw t=Xt,ke(n,0),te(n,r),hn(n,q()),t;if(e===6)te(n,r);else{if(a=n.current.alternate,!(r&30)&&!Wp(a)&&(e=aa(n,r),e===2&&(i=vi(n),i!==0&&(r=i,e=Gi(n,i))),e===1))throw t=Xt,ke(n,0),te(n,r),hn(n,q()),t;switch(n.finishedWork=a,n.finishedLanes=r,e){case 0:case 1:throw Error(w(345));case 2:Pe(n,pn,Vn);break;case 3:if(te(n,r),(r&130023424)===r&&(e=Us+500-q(),10<e)){if(Hr(n,0)!==0)break;if(a=n.suspendedLanes,(a&r)!==r){un(),n.pingedLanes|=n.suspendedLanes&a;break}n.timeoutHandle=ki(Pe.bind(null,n,pn,Vn),e);break}Pe(n,pn,Vn);break;case 4:if(te(n,r),(r&4194240)===r)break;for(e=n.eventTimes,a=-1;0<r;){var s=31-On(r);i=1<<s,s=e[s],s>a&&(a=s),r&=~i}if(r=a,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Hp(r/1960))-r,10<r){n.timeoutHandle=ki(Pe.bind(null,n,pn,Vn),r);break}Pe(n,pn,Vn);break;case 5:Pe(n,pn,Vn);break;default:throw Error(w(329))}}}return hn(n,q()),n.callbackNode===t?ud.bind(null,n):null}function Gi(n,e){var t=Ot;return n.current.memoizedState.isDehydrated&&(ke(n,e).flags|=256),n=aa(n,e),n!==2&&(e=pn,pn=t,e!==null&&qi(e)),n}function qi(n){pn===null?pn=n:pn.push.apply(pn,n)}function Wp(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var a=t[r],i=a.getSnapshot;a=a.value;try{if(!jn(i(),a))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function te(n,e){for(e&=~Ts,e&=~_a,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-On(e),r=1<<t;n[t]=-1,e&=~r}}function Yo(n){if(U&6)throw Error(w(327));nt();var e=Hr(n,0);if(!(e&1))return hn(n,q()),null;var t=aa(n,e);if(n.tag!==0&&t===2){var r=vi(n);r!==0&&(e=r,t=Gi(n,r))}if(t===1)throw t=Xt,ke(n,0),te(n,e),hn(n,q()),t;if(t===6)throw Error(w(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Pe(n,pn,Vn),hn(n,q()),null}function Is(n,e){var t=U;U|=1;try{return n(e)}finally{U=t,U===0&&(lt=q()+500,fa&&ve())}}function Ue(n){ae!==null&&ae.tag===0&&!(U&6)&&nt();var e=U;U|=1;var t=xn.transition,r=R;try{if(xn.transition=null,R=1,n)return n()}finally{R=r,xn.transition=t,U=e,!(U&6)&&ve()}}function Os(){vn=$e.current,D($e)}function ke(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,vp(t)),$!==null)for(t=$.return;t!==null;){var r=t;switch(fs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gr();break;case 3:st(),D(fn),D(on),bs();break;case 5:Ss(r);break;case 4:st();break;case 13:D(W);break;case 19:D(W);break;case 10:_s(r.type._context);break;case 22:case 23:Os()}t=t.return}if(Z=n,$=n=pe(n.current,null),en=vn=e,Q=0,Xt=null,Ts=_a=Te=0,pn=Ot=null,be!==null){for(e=0;e<be.length;e++)if(t=be[e],r=t.interleaved,r!==null){t.interleaved=null;var a=r.next,i=t.pending;if(i!==null){var s=i.next;i.next=a,r.next=s}t.pending=r}be=null}return n}function dd(n,e){do{var t=$;try{if(vs(),Mr.current=na,Zr){for(var r=V.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Zr=!1}if(Me=0,X=Y=V=null,Ut=!1,Yt=0,Ms.current=null,t===null||t.return===null){Q=1,Xt=e,$=null;break}n:{var i=n,s=t.return,o=t,l=e;if(e=en,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=o,g=f.tag;if(!(f.mode&1)&&(g===0||g===11||g===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var h=jo(s);if(h!==null){h.flags&=-257,No(h,s,o,i,e),h.mode&1&&Ro(i,u,e),e=h,l=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break n}else{if(!(e&1)){Ro(i,u,e),Rs();break n}l=Error(w(426))}}else if(H&&o.mode&1){var I=jo(s);if(I!==null){!(I.flags&65536)&&(I.flags|=256),No(I,s,o,i,e),gs(ot(l,o));break n}}i=l=ot(l,o),Q!==4&&(Q=2),Ot===null?Ot=[i]:Ot.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var c=Ju(i,l,e);Ao(i,c);break n;case 1:o=l;var d=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(de===null||!de.has(p)))){i.flags|=65536,e&=-e,i.lanes|=e;var _=$u(i,o,e);Ao(i,_);break n}}i=i.return}while(i!==null)}md(t)}catch(P){e=P,$===t&&t!==null&&($=t=t.return);continue}break}while(!0)}function cd(){var n=ea.current;return ea.current=na,n===null?na:n}function Rs(){(Q===0||Q===3||Q===2)&&(Q=4),Z===null||!(Te&268435455)&&!(_a&268435455)||te(Z,en)}function aa(n,e){var t=U;U|=2;var r=cd();(Z!==n||en!==e)&&(Vn=null,ke(n,e));do try{Vp();break}catch(a){dd(n,a)}while(!0);if(vs(),U=t,ea.current=r,$!==null)throw Error(w(261));return Z=null,en=0,Q}function Vp(){for(;$!==null;)pd($)}function zp(){for(;$!==null&&!fc();)pd($)}function pd(n){var e=gd(n.alternate,n,vn);n.memoizedProps=n.pendingProps,e===null?md(n):$=e,Ms.current=null}function md(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=jp(t,e),t!==null){t.flags&=32767,$=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Q=6,$=null;return}}else if(t=Rp(t,e,vn),t!==null){$=t;return}if(e=e.sibling,e!==null){$=e;return}$=e=n}while(e!==null);Q===0&&(Q=5)}function Pe(n,e,t){var r=R,a=xn.transition;try{xn.transition=null,R=1,Bp(n,e,t,r)}finally{xn.transition=a,R=r}return null}function Bp(n,e,t,r){do nt();while(ae!==null);if(U&6)throw Error(w(327));t=n.finishedWork;var a=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(w(177));n.callbackNode=null,n.callbackPriority=0;var i=t.lanes|t.childLanes;if(Ec(n,i),n===Z&&($=Z=null,en=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Pr||(Pr=!0,hd(Dr,function(){return nt(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=xn.transition,xn.transition=null;var s=R;R=1;var o=U;U|=4,Ms.current=null,Lp(n,t),od(t,n),dp(bi),Wr=!!Si,bi=Si=null,n.current=t,Dp(t),gc(),U=o,R=s,xn.transition=i}else n.current=t;if(Pr&&(Pr=!1,ae=n,ra=a),i=n.pendingLanes,i===0&&(de=null),_c(t.stateNode),hn(n,q()),e!==null)for(r=n.onRecoverableError,t=0;t<e.length;t++)a=e[t],r(a.value,{componentStack:a.stack,digest:a.digest});if(ta)throw ta=!1,n=zi,zi=null,n;return ra&1&&n.tag!==0&&nt(),i=n.pendingLanes,i&1?n===Bi?Rt++:(Rt=0,Bi=n):Rt=0,ve(),null}function nt(){if(ae!==null){var n=Jl(ra),e=xn.transition,t=R;try{if(xn.transition=null,R=16>n?16:n,ae===null)var r=!1;else{if(n=ae,ae=null,ra=0,U&6)throw Error(w(331));var a=U;for(U|=4,k=n.current;k!==null;){var i=k,s=i.child;if(k.flags&16){var o=i.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(k=u;k!==null;){var f=k;switch(f.tag){case 0:case 11:case 15:It(8,f,i)}var g=f.child;if(g!==null)g.return=f,k=g;else for(;k!==null;){f=k;var m=f.sibling,h=f.return;if(ad(f),f===u){k=null;break}if(m!==null){m.return=h,k=m;break}k=h}}}var v=i.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var I=y.sibling;y.sibling=null,y=I}while(y!==null)}}k=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,k=s;else n:for(;k!==null;){if(i=k,i.flags&2048)switch(i.tag){case 0:case 11:case 15:It(9,i,i.return)}var c=i.sibling;if(c!==null){c.return=i.return,k=c;break n}k=i.return}}var d=n.current;for(k=d;k!==null;){s=k;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,k=p;else n:for(s=d;k!==null;){if(o=k,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:va(9,o)}}catch(P){B(o,o.return,P)}if(o===s){k=null;break n}var _=o.sibling;if(_!==null){_.return=o.return,k=_;break n}k=o.return}}if(U=a,ve(),Hn&&typeof Hn.onPostCommitFiberRoot=="function")try{Hn.onPostCommitFiberRoot(ua,n)}catch{}r=!0}return r}finally{R=t,xn.transition=e}}return!1}function Qo(n,e,t){e=ot(t,e),e=Ju(n,e,1),n=ue(n,e,1),e=un(),n!==null&&(nr(n,1,e),hn(n,e))}function B(n,e,t){if(n.tag===3)Qo(n,n,t);else for(;e!==null;){if(e.tag===3){Qo(e,n,t);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(de===null||!de.has(r))){n=ot(t,n),n=$u(e,n,1),e=ue(e,n,1),n=un(),e!==null&&(nr(e,1,n),hn(e,n));break}}e=e.return}}function Gp(n,e,t){var r=n.pingCache;r!==null&&r.delete(e),e=un(),n.pingedLanes|=n.suspendedLanes&t,Z===n&&(en&t)===t&&(Q===4||Q===3&&(en&130023424)===en&&500>q()-Us?ke(n,0):Ts|=t),hn(n,e)}function fd(n,e){e===0&&(n.mode&1?(e=cr,cr<<=1,!(cr&130023424)&&(cr=4194304)):e=1);var t=un();n=Yn(n,e),n!==null&&(nr(n,e,t),hn(n,t))}function qp(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),fd(n,t)}function Jp(n,e){var t=0;switch(n.tag){case 13:var r=n.stateNode,a=n.memoizedState;a!==null&&(t=a.retryLane);break;case 19:r=n.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(e),fd(n,t)}var gd;gd=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||fn.current)mn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return mn=!1,Op(n,e,t);mn=!!(n.flags&131072)}else mn=!1,H&&e.flags&1048576&&wu(e,$r,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ur(n,e),n=e.pendingProps;var a=rt(e,on.current);Ze(e,t),a=ks(null,e,r,n,a,t);var i=xs();return e.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gn(r)?(i=!0,qr(e)):i=!1,e.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ys(e),a.updater=ha,e.stateNode=a,a._reactInternals=e,Ui(e,r,n,t),e=Ri(null,e,r,!0,i,t)):(e.tag=0,H&&i&&ms(e),ln(null,e,a,t),e=e.child),e;case 16:r=e.elementType;n:{switch(Ur(n,e),n=e.pendingProps,a=r._init,r=a(r._payload),e.type=r,a=e.tag=Yp(r),n=Tn(r,n),a){case 0:e=Oi(null,e,r,n,t);break n;case 1:e=Ho(null,e,r,n,t);break n;case 11:e=Lo(null,e,r,n,t);break n;case 14:e=Do(null,e,r,Tn(r.type,n),t);break n}throw Error(w(306,r,""))}return e;case 0:return r=e.type,a=e.pendingProps,a=e.elementType===r?a:Tn(r,a),Oi(n,e,r,a,t);case 1:return r=e.type,a=e.pendingProps,a=e.elementType===r?a:Tn(r,a),Ho(n,e,r,a,t);case 3:n:{if(Xu(e),n===null)throw Error(w(387));r=e.pendingProps,i=e.memoizedState,a=i.element,ku(n,e),Kr(e,r,null,t);var s=e.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){a=ot(Error(w(423)),e),e=Wo(n,e,r,t,a);break n}else if(r!==a){a=ot(Error(w(424)),e),e=Wo(n,e,r,t,a);break n}else for(_n=le(e.stateNode.containerInfo.firstChild),wn=e,H=!0,In=null,t=bu(e,null,r,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(at(),r===a){e=Qn(n,e,t);break n}ln(n,e,r,t)}e=e.child}return e;case 5:return xu(e),n===null&&Ai(e),r=e.type,a=e.pendingProps,i=n!==null?n.memoizedProps:null,s=a.children,Ei(r,a)?s=null:i!==null&&Ei(r,i)&&(e.flags|=32),Ku(n,e),ln(n,e,s,t),e.child;case 6:return n===null&&Ai(e),null;case 13:return Zu(n,e,t);case 4:return Ps(e,e.stateNode.containerInfo),r=e.pendingProps,n===null?e.child=it(e,null,r,t):ln(n,e,r,t),e.child;case 11:return r=e.type,a=e.pendingProps,a=e.elementType===r?a:Tn(r,a),Lo(n,e,r,a,t);case 7:return ln(n,e,e.pendingProps,t),e.child;case 8:return ln(n,e,e.pendingProps.children,t),e.child;case 12:return ln(n,e,e.pendingProps.children,t),e.child;case 10:n:{if(r=e.type._context,a=e.pendingProps,i=e.memoizedProps,s=a.value,N(Yr,r._currentValue),r._currentValue=s,i!==null)if(jn(i.value,s)){if(i.children===a.children&&!fn.current){e=Qn(n,e,t);break n}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var o=i.dependencies;if(o!==null){s=i.child;for(var l=o.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=qn(-1,t&-t),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}i.lanes|=t,l=i.alternate,l!==null&&(l.lanes|=t),Mi(i.return,t,e),o.lanes|=t;break}l=l.next}}else if(i.tag===10)s=i.type===e.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(w(341));s.lanes|=t,o=s.alternate,o!==null&&(o.lanes|=t),Mi(s,t,e),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===e){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}ln(n,e,a.children,t),e=e.child}return e;case 9:return a=e.type,r=e.pendingProps.children,Ze(e,t),a=Fn(a),r=r(a),e.flags|=1,ln(n,e,r,t),e.child;case 14:return r=e.type,a=Tn(r,e.pendingProps),a=Tn(r.type,a),Do(n,e,r,a,t);case 15:return Yu(n,e,e.type,e.pendingProps,t);case 17:return r=e.type,a=e.pendingProps,a=e.elementType===r?a:Tn(r,a),Ur(n,e),e.tag=1,gn(r)?(n=!0,qr(e)):n=!1,Ze(e,t),qu(e,r,a),Ui(e,r,a,t),Ri(null,e,r,!0,n,t);case 19:return nd(n,e,t);case 22:return Qu(n,e,t)}throw Error(w(156,e.tag))};function hd(n,e){return zl(n,e)}function $p(n,e,t,r){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(n,e,t,r){return new $p(n,e,t,r)}function js(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Yp(n){if(typeof n=="function")return js(n)?1:0;if(n!=null){if(n=n.$$typeof,n===es)return 11;if(n===ts)return 14}return 2}function pe(n,e){var t=n.alternate;return t===null?(t=kn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Rr(n,e,t,r,a,i){var s=2;if(r=n,typeof n=="function")js(n)&&(s=1);else if(typeof n=="string")s=5;else n:switch(n){case Le:return xe(t.children,a,i,e);case ns:s=8,a|=8;break;case ti:return n=kn(12,t,e,a|2),n.elementType=ti,n.lanes=i,n;case ri:return n=kn(13,t,e,a),n.elementType=ri,n.lanes=i,n;case ai:return n=kn(19,t,e,a),n.elementType=ai,n.lanes=i,n;case xl:return wa(t,a,i,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case El:s=10;break n;case kl:s=9;break n;case es:s=11;break n;case ts:s=14;break n;case Zn:s=16,r=null;break n}throw Error(w(130,n==null?n:typeof n,""))}return e=kn(s,t,e,a),e.elementType=n,e.type=r,e.lanes=i,e}function xe(n,e,t,r){return n=kn(7,n,r,e),n.lanes=t,n}function wa(n,e,t,r){return n=kn(22,n,r,e),n.elementType=xl,n.lanes=t,n.stateNode={isHidden:!1},n}function Ka(n,e,t){return n=kn(6,n,null,e),n.lanes=t,n}function Xa(n,e,t){return e=kn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Qp(n,e,t,r,a){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ua(0),this.expirationTimes=Ua(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ua(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ns(n,e,t,r,a,i,s,o,l){return n=new Qp(n,e,t,o,l),e===1?(e=1,i===!0&&(e|=8)):e=0,i=kn(3,null,null,e),n.current=i,i.stateNode=n,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ys(i),n}function Kp(n,e,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ne,key:r==null?null:""+r,children:n,containerInfo:e,implementation:t}}function vd(n){if(!n)return fe;n=n._reactInternals;n:{if(Oe(n)!==n||n.tag!==1)throw Error(w(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break n;case 1:if(gn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break n}}e=e.return}while(e!==null);throw Error(w(171))}if(n.tag===1){var t=n.type;if(gn(t))return vu(n,t,e)}return e}function _d(n,e,t,r,a,i,s,o,l){return n=Ns(t,r,!0,n,a,i,s,o,l),n.context=vd(null),t=n.current,r=un(),a=ce(t),i=qn(r,a),i.callback=e??null,ue(t,i,a),n.current.lanes=a,nr(n,a,r),hn(n,r),n}function ya(n,e,t,r){var a=e.current,i=un(),s=ce(a);return t=vd(t),e.context===null?e.context=t:e.pendingContext=t,e=qn(i,s),e.payload={element:n},r=r===void 0?null:r,r!==null&&(e.callback=r),n=ue(a,e,s),n!==null&&(Rn(n,a,s,i),Ar(n,a,s)),s}function ia(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Ko(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Ls(n,e){Ko(n,e),(n=n.alternate)&&Ko(n,e)}function Xp(){return null}var wd=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ds(n){this._internalRoot=n}Pa.prototype.render=Ds.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(w(409));ya(n,e,null,null)};Pa.prototype.unmount=Ds.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Ue(function(){ya(null,n,null,null)}),e[$n]=null}};function Pa(n){this._internalRoot=n}Pa.prototype.unstable_scheduleHydration=function(n){if(n){var e=Ql();n={blockedOn:null,target:n,priority:e};for(var t=0;t<ee.length&&e!==0&&e<ee[t].priority;t++);ee.splice(t,0,n),t===0&&Xl(n)}};function Hs(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Sa(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Xo(){}function Zp(n,e,t,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var u=ia(s);i.call(u)}}var s=_d(e,r,n,0,null,!1,!1,"",Xo);return n._reactRootContainer=s,n[$n]=s.current,Bt(n.nodeType===8?n.parentNode:n),Ue(),s}for(;a=n.lastChild;)n.removeChild(a);if(typeof r=="function"){var o=r;r=function(){var u=ia(l);o.call(u)}}var l=Ns(n,0,!1,null,null,!1,!1,"",Xo);return n._reactRootContainer=l,n[$n]=l.current,Bt(n.nodeType===8?n.parentNode:n),Ue(function(){ya(e,l,t,r)}),l}function ba(n,e,t,r,a){var i=t._reactRootContainer;if(i){var s=i;if(typeof a=="function"){var o=a;a=function(){var l=ia(s);o.call(l)}}ya(e,s,n,a)}else s=Zp(t,e,n,a,r);return ia(s)}$l=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Et(e.pendingLanes);t!==0&&(is(e,t|1),hn(e,q()),!(U&6)&&(lt=q()+500,ve()))}break;case 13:Ue(function(){var r=Yn(n,1);if(r!==null){var a=un();Rn(r,n,1,a)}}),Ls(n,1)}};ss=function(n){if(n.tag===13){var e=Yn(n,134217728);if(e!==null){var t=un();Rn(e,n,134217728,t)}Ls(n,134217728)}};Yl=function(n){if(n.tag===13){var e=ce(n),t=Yn(n,e);if(t!==null){var r=un();Rn(t,n,e,r)}Ls(n,e)}};Ql=function(){return R};Kl=function(n,e){var t=R;try{return R=n,e()}finally{R=t}};fi=function(n,e,t){switch(e){case"input":if(oi(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var r=t[e];if(r!==n&&r.form===n.form){var a=ma(r);if(!a)throw Error(w(90));Cl(r),oi(r,a)}}}break;case"textarea":Ml(n,t);break;case"select":e=t.value,e!=null&&Ye(n,!!t.multiple,e,!1)}};Nl=Is;Ll=Ue;var nm={usingClientEntryPoint:!1,Events:[tr,Ve,ma,Rl,jl,Is]},Pt={findFiberByHostInstance:Se,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},em={bundleType:Pt.bundleType,version:Pt.version,rendererPackageName:Pt.rendererPackageName,rendererConfig:Pt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Wl(n),n===null?null:n.stateNode},findFiberByHostInstance:Pt.findFiberByHostInstance||Xp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sr.isDisabled&&Sr.supportsFiber)try{ua=Sr.inject(em),Hn=Sr}catch{}}Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nm;Pn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hs(e))throw Error(w(200));return Kp(n,e,null,t)};Pn.createRoot=function(n,e){if(!Hs(n))throw Error(w(299));var t=!1,r="",a=wd;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(a=e.onRecoverableError)),e=Ns(n,1,!1,null,null,t,!1,r,a),n[$n]=e.current,Bt(n.nodeType===8?n.parentNode:n),new Ds(e)};Pn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(w(188)):(n=Object.keys(n).join(","),Error(w(268,n)));return n=Wl(e),n=n===null?null:n.stateNode,n};Pn.flushSync=function(n){return Ue(n)};Pn.hydrate=function(n,e,t){if(!Sa(e))throw Error(w(200));return ba(null,n,e,!0,t)};Pn.hydrateRoot=function(n,e,t){if(!Hs(n))throw Error(w(405));var r=t!=null&&t.hydratedSources||null,a=!1,i="",s=wd;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),e=_d(e,null,n,1,t??null,a,!1,i,s),n[$n]=e.current,Bt(n),r)for(n=0;n<r.length;n++)t=r[n],a=t._getVersion,a=a(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,a]:e.mutableSourceEagerHydrationData.push(t,a);return new Pa(e)};Pn.render=function(n,e,t){if(!Sa(e))throw Error(w(200));return ba(null,n,e,!1,t)};Pn.unmountComponentAtNode=function(n){if(!Sa(n))throw Error(w(40));return n._reactRootContainer?(Ue(function(){ba(null,null,n,!1,function(){n._reactRootContainer=null,n[$n]=null})}),!0):!1};Pn.unstable_batchedUpdates=Is;Pn.unstable_renderSubtreeIntoContainer=function(n,e,t,r){if(!Sa(t))throw Error(w(200));if(n==null||n._reactInternals===void 0)throw Error(w(38));return ba(n,e,t,!1,r)};Pn.version="18.3.1-next-f1338f8080-20240426";function yd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yd)}catch(n){console.error(n)}}yd(),yl.exports=Pn;var tm=yl.exports,Pd,Zo=tm;Pd=Zo.createRoot,Zo.hydrateRoot;const Sd=2,bd={erro_evt:{name:"erro_evt",structName:"glue_msg_error",className:"GlueMsgError",fields:[{type:"str",name:"message",isNullable:!1}]},load_req:{name:"load_req",structName:"glue_msg_load_req",className:"GlueMsgLoadReq",fields:[{type:"arr_str",name:"model_paths",isNullable:!1},{type:"bool",name:"n_ctx_auto",isNullable:!1},{type:"bool",name:"use_mmap",isNullable:!1},{type:"bool",name:"use_mlock",isNullable:!1},{type:"bool",name:"use_webgpu",isNullable:!1},{type:"int",name:"n_gpu_layers",isNullable:!1},{type:"bool",name:"no_perf",isNullable:!1},{type:"int",name:"seed",isNullable:!1},{type:"int",name:"n_ctx",isNullable:!1},{type:"int",name:"n_threads",isNullable:!1},{type:"bool",name:"embeddings",isNullable:!0},{type:"bool",name:"offload_kqv",isNullable:!0},{type:"int",name:"n_batch",isNullable:!0},{type:"int",name:"n_seq_max",isNullable:!0},{type:"str",name:"pooling_type",isNullable:!0},{type:"str",name:"rope_scaling_type",isNullable:!0},{type:"float",name:"rope_freq_base",isNullable:!0},{type:"float",name:"rope_freq_scale",isNullable:!0},{type:"float",name:"yarn_ext_factor",isNullable:!0},{type:"float",name:"yarn_attn_factor",isNullable:!0},{type:"float",name:"yarn_beta_fast",isNullable:!0},{type:"float",name:"yarn_beta_slow",isNullable:!0},{type:"int",name:"yarn_orig_ctx",isNullable:!0},{type:"str",name:"cache_type_k",isNullable:!0},{type:"str",name:"cache_type_v",isNullable:!0},{type:"bool",name:"flash_attn",isNullable:!0},{type:"bool",name:"swa_full",isNullable:!0}]},load_res:{name:"load_res",structName:"glue_msg_load_res",className:"GlueMsgLoadRes",fields:[{type:"bool",name:"success",isNullable:!1},{type:"int",name:"n_ctx",isNullable:!1},{type:"int",name:"n_batch",isNullable:!1},{type:"int",name:"n_ubatch",isNullable:!1},{type:"int",name:"n_vocab",isNullable:!1},{type:"int",name:"n_ctx_train",isNullable:!1},{type:"int",name:"n_embd",isNullable:!1},{type:"int",name:"n_layer",isNullable:!1},{type:"arr_str",name:"metadata_key",isNullable:!1},{type:"arr_str",name:"metadata_val",isNullable:!1},{type:"int",name:"token_bos",isNullable:!1},{type:"int",name:"token_eos",isNullable:!1},{type:"int",name:"token_eot",isNullable:!1},{type:"arr_int",name:"list_tokens_eog",isNullable:!1},{type:"bool",name:"add_bos_token",isNullable:!1},{type:"bool",name:"add_eos_token",isNullable:!1},{type:"bool",name:"has_encoder",isNullable:!1},{type:"int",name:"token_decoder_start",isNullable:!1}]},opti_req:{name:"opti_req",structName:"glue_msg_set_options_req",className:"GlueMsgSetOptionsReq",fields:[{type:"bool",name:"embeddings",isNullable:!1}]},opti_res:{name:"opti_res",structName:"glue_msg_set_options_res",className:"GlueMsgSetOptionsRes",fields:[{type:"bool",name:"success",isNullable:!1}]},sint_req:{name:"sint_req",structName:"glue_msg_sampling_init_req",className:"GlueMsgSamplingInitReq",fields:[{type:"int",name:"mirostat",isNullable:!0},{type:"float",name:"mirostat_tau",isNullable:!0},{type:"float",name:"mirostat_eta",isNullable:!0},{type:"float",name:"temp",isNullable:!0},{type:"float",name:"top_p",isNullable:!0},{type:"int",name:"top_k",isNullable:!0},{type:"int",name:"penalty_last_n",isNullable:!0},{type:"float",name:"penalty_repeat",isNullable:!0},{type:"float",name:"penalty_freq",isNullable:!0},{type:"float",name:"penalty_present",isNullable:!0},{type:"float",name:"dynatemp_range",isNullable:!0},{type:"float",name:"dynatemp_exponent",isNullable:!0},{type:"arr_str",name:"samplers_sequence",isNullable:!0},{type:"str",name:"grammar",isNullable:!0},{type:"int",name:"n_prev",isNullable:!0},{type:"int",name:"n_probs",isNullable:!0},{type:"float",name:"min_p",isNullable:!0},{type:"float",name:"typical_p",isNullable:!0},{type:"float",name:"typ_p",isNullable:!0},{type:"arr_int",name:"logit_bias_toks",isNullable:!0},{type:"arr_float",name:"logit_bias_vals",isNullable:!0},{type:"arr_int",name:"tokens",isNullable:!0}]},sint_res:{name:"sint_res",structName:"glue_msg_sampling_init_res",className:"GlueMsgSamplingInitRes",fields:[{type:"bool",name:"success",isNullable:!1}]},gvoc_req:{name:"gvoc_req",structName:"glue_msg_get_vocab_req",className:"GlueMsgGetVocabReq",fields:[]},gvoc_res:{name:"gvoc_res",structName:"glue_msg_get_vocab_res",className:"GlueMsgGetVocabRes",fields:[{type:"bool",name:"success",isNullable:!1},{type:"arr_raw",name:"vocab",isNullable:!1}]},lkup_req:{name:"lkup_req",structName:"glue_msg_lookup_token_req",className:"GlueMsgLookupTokenReq",fields:[{type:"str",name:"piece",isNullable:!1}]},lkup_res:{name:"lkup_res",structName:"glue_msg_lookup_token_res",className:"GlueMsgLookupTokenRes",fields:[{type:"bool",name:"success",isNullable:!1},{type:"int",name:"token",isNullable:!1}]},tokn_req:{name:"tokn_req",structName:"glue_msg_tokenize_req",className:"GlueMsgTokenizeReq",fields:[{type:"str",name:"text",isNullable:!1},{type:"bool",name:"special",isNullable:!1}]},tokn_res:{name:"tokn_res",structName:"glue_msg_tokenize_res",className:"GlueMsgTokenizeRes",fields:[{type:"bool",name:"success",isNullable:!1},{type:"arr_int",name:"tokens",isNullable:!1}]},dtkn_req:{name:"dtkn_req",structName:"glue_msg_detokenize_req",className:"GlueMsgDetokenizeReq",fields:[{type:"arr_int",name:"tokens",isNullable:!1}]},dtkn_res:{name:"dtkn_res",structName:"glue_msg_detokenize_res",className:"GlueMsgDetokenizeRes",fields:[{type:"bool",name:"success",isNullable:!1},{type:"raw",name:"buffer",isNullable:!1}]},deco_req:{name:"deco_req",structName:"glue_msg_decode_req",className:"GlueMsgDecodeReq",fields:[{type:"arr_int",name:"tokens",isNullable:!1},{type:"bool",name:"skip_logits",isNullable:!1}]},deco_res:{name:"deco_res",structName:"glue_msg_decode_res",className:"GlueMsgDecodeRes",fields:[{type:"bool",name:"success",isNullable:!1},{type:"str",name:"message",isNullable:!1},{type:"int",name:"n_past",isNullable:!1}]},enco_req:{name:"enco_req",structName:"glue_msg_encode_req",className:"GlueMsgEncodeReq",fields:[{type:"arr_int",name:"tokens",isNullable:!1}]},enco_res:{name:"enco_res",structName:"glue_msg_encode_res",className:"GlueMsgEncodeRes",fields:[{type:"bool",name:"success",isNullable:!1},{type:"str",name:"message",isNullable:!1},{type:"int",name:"n_past",isNullable:!1}]},ssam_req:{name:"ssam_req",structName:"glue_msg_sampling_sample_req",className:"GlueMsgSamplingSampleReq",fields:[]},ssam_res:{name:"ssam_res",structName:"glue_msg_sampling_sample_res",className:"GlueMsgSamplingSampleRes",fields:[{type:"bool",name:"success",isNullable:!1},{type:"raw",name:"piece",isNullable:!1},{type:"int",name:"token",isNullable:!1}]},sacc_req:{name:"sacc_req",structName:"glue_msg_sampling_accept_req",className:"GlueMsgSamplingAcceptReq",fields:[{type:"arr_int",name:"tokens",isNullable:!1}]},sacc_res:{name:"sacc_res",structName:"glue_msg_sampling_accept_res",className:"GlueMsgSamplingAcceptRes",fields:[{type:"bool",name:"success",isNullable:!1}]},glog_req:{name:"glog_req",structName:"glue_msg_get_logits_req",className:"GlueMsgGetLogitsReq",fields:[{type:"int",name:"top_k",isNullable:!1}]},glog_res:{name:"glog_res",structName:"glue_msg_get_logits_res",className:"GlueMsgGetLogitsRes",fields:[{type:"bool",name:"success",isNullable:!1},{type:"arr_int",name:"tokens",isNullable:!1},{type:"arr_float",name:"probs",isNullable:!1}]},gemb_req:{name:"gemb_req",structName:"glue_msg_get_embeddings_req",className:"GlueMsgGetEmbeddingsReq",fields:[{type:"arr_int",name:"tokens",isNullable:!1}]},gemb_res:{name:"gemb_res",structName:"glue_msg_get_embeddings_res",className:"GlueMsgGetEmbeddingsRes",fields:[{type:"bool",name:"success",isNullable:!1},{type:"str",name:"message",isNullable:!1},{type:"arr_float",name:"embeddings",isNullable:!1}]},kvcr_req:{name:"kvcr_req",structName:"glue_msg_get_kv_remove_req",className:"GlueMsgGetKvRemoveReq",fields:[{type:"int",name:"n_keep",isNullable:!1},{type:"int",name:"n_discard",isNullable:!1}]},kvcr_res:{name:"kvcr_res",structName:"glue_msg_get_kv_remove_res",className:"GlueMsgGetKvRemoveRes",fields:[{type:"int",name:"n_past",isNullable:!1},{type:"bool",name:"success",isNullable:!1}]},kvcc_req:{name:"kvcc_req",structName:"glue_msg_get_kv_clear_req",className:"GlueMsgGetKvClearReq",fields:[]},kvcc_res:{name:"kvcc_res",structName:"glue_msg_get_kv_clear_res",className:"GlueMsgGetKvClearRes",fields:[{type:"int",name:"n_past",isNullable:!1},{type:"bool",name:"success",isNullable:!1}]},sesa_req:{name:"sesa_req",structName:"glue_msg_session_save_req",className:"GlueMsgSessionSaveReq",fields:[{type:"str",name:"session_path",isNullable:!1}]},sesa_res:{name:"sesa_res",structName:"glue_msg_session_save_res",className:"GlueMsgSessionSaveRes",fields:[{type:"bool",name:"success",isNullable:!1},{type:"arr_int",name:"tokens",isNullable:!1}]},sesl_req:{name:"sesl_req",structName:"glue_msg_session_load_req",className:"GlueMsgSessionLoadReq",fields:[{type:"str",name:"session_path",isNullable:!1},{type:"arr_int",name:"tokens",isNullable:!1}]},sesl_res:{name:"sesl_res",structName:"glue_msg_session_load_res",className:"GlueMsgSessionLoadRes",fields:[{type:"bool",name:"success",isNullable:!1}]},stat_req:{name:"stat_req",structName:"glue_msg_status_req",className:"GlueMsgStatusReq",fields:[]},stat_res:{name:"stat_res",structName:"glue_msg_status_res",className:"GlueMsgStatusRes",fields:[{type:"bool",name:"success",isNullable:!1},{type:"arr_int",name:"tokens",isNullable:!1}]},pctx_req:{name:"pctx_req",structName:"glue_msg_perf_context_req",className:"GlueMsgPerfContextReq",fields:[]},pctx_res:{name:"pctx_res",structName:"glue_msg_perf_context_res",className:"GlueMsgPerfContextRes",fields:[{type:"bool",name:"success",isNullable:!1},{type:"float",name:"t_start_ms",isNullable:!1},{type:"float",name:"t_load_ms",isNullable:!1},{type:"float",name:"t_p_eval_ms",isNullable:!1},{type:"float",name:"t_eval_ms",isNullable:!1},{type:"int",name:"n_p_eval",isNullable:!1},{type:"int",name:"n_eval",isNullable:!1},{type:"int",name:"n_reused",isNullable:!1}]},prst_req:{name:"prst_req",structName:"glue_msg_perf_reset_req",className:"GlueMsgPerfResetReq",fields:[]},prst_res:{name:"prst_res",structName:"glue_msg_perf_reset_res",className:"GlueMsgPerfResetRes",fields:[{type:"bool",name:"success",isNullable:!1}]},tben_req:{name:"tben_req",structName:"glue_msg_test_benchmark_req",className:"GlueMsgTestBenchmarkReq",fields:[{type:"str",name:"type",isNullable:!1},{type:"int",name:"n_samples",isNullable:!1}]},tben_res:{name:"tben_res",structName:"glue_msg_test_benchmark_res",className:"GlueMsgTestBenchmarkRes",fields:[{type:"bool",name:"success",isNullable:!1},{type:"str",name:"message",isNullable:!1},{type:"int",name:"t_ms",isNullable:!1}]},tper_req:{name:"tper_req",structName:"glue_msg_test_perplexity_req",className:"GlueMsgTestPerplexityReq",fields:[{type:"arr_int",name:"tokens",isNullable:!1}]},tper_res:{name:"tper_res",structName:"glue_msg_test_perplexity_res",className:"GlueMsgTestPerplexityRes",fields:[{type:"bool",name:"success",isNullable:!1},{type:"str",name:"message",isNullable:!1},{type:"float",name:"ppl",isNullable:!1},{type:"float",name:"nll",isNullable:!1},{type:"float",name:"cross_entropy",isNullable:!1},{type:"int",name:"n_tokens",isNullable:!1},{type:"int",name:"t_ms",isNullable:!1}]},cfmt_req:{name:"cfmt_req",structName:"glue_msg_chat_format_req",className:"GlueMsgChatFormatReq",fields:[{type:"str",name:"tmpl",isNullable:!0},{type:"bool",name:"add_ass",isNullable:!0},{type:"arr_str",name:"roles",isNullable:!1},{type:"arr_str",name:"contents",isNullable:!1}]},cfmt_res:{name:"cfmt_res",structName:"glue_msg_chat_format_res",className:"GlueMsgChatFormatRes",fields:[{type:"bool",name:"success",isNullable:!1},{type:"str",name:"message",isNullable:!1},{type:"str",name:"formatted_chat",isNullable:!1}]}},xt=new Uint8Array([71,76,85,69]),Ws=0,rm=1,am=2,im=3,sm=4,om=5,lm=6,um=7,dm=8,cm=9,pm=10,Ed={str:sm,int:am,float:im,bool:rm,raw:om,arr_str:cm,arr_int:um,arr_float:dm,arr_bool:lm,arr_raw:pm,null:Ws};function mm(n){let e=0;const t=new DataView(n.buffer),r=()=>{const c=t.getUint32(e,!0);return e+=4,c},a=()=>{const c=t.getInt32(e,!0);return e+=4,c},i=()=>{const c=t.getFloat32(e,!0);return e+=4,c},s=()=>r()!==0,o=c=>{const d=c??r(),p=new TextDecoder().decode(n.slice(e,e+d));return e+=d,p},l=()=>{const c=r(),d=n.slice(e,e+c);return e+=c,d},u=c=>{const d=r(),p=new Array(d);for(let _=0;_<d;_++)p[_]=c();return p},f=()=>null,g=c=>{switch(c.type){case"str":return o();case"int":return a();case"float":return i();case"bool":return s();case"raw":return l();case"arr_str":return u(o);case"arr_int":return u(a);case"arr_float":return u(i);case"arr_bool":return u(s);case"arr_raw":return u(l);case"null":return f()}},m=n[0]===xt[0]&&n[1]===xt[1]&&n[2]===xt[2]&&n[3]===xt[3];if(e+=4,!m)throw new Error("Invalid magic number");if(r()!==Sd)throw new Error("Invalid version number");const v=o(8),y=bd[v];if(!y)throw new Error(`Unknown message name: ${v}`);const I={_name:v};for(const c of y.fields){const d=r();if(d===Ws){if(!c.isNullable)throw new Error(`${v}: Expect field ${c.name} to be non-nullable`);I[c.name]=null;continue}if(d!==Ed[c.type])throw new Error(`${v}: Expect field ${c.name} to have type ${c.type}`);I[c.name]=g(c)}return I}function fm(n){const e=bd[n._name];if(!e)throw new Error(`Unknown message name: ${n._name}`);const t=[],r=h=>{const v=new ArrayBuffer(4);new DataView(v).setUint32(0,h,!0),t.push(new Uint8Array(v))},a=h=>{const v=new ArrayBuffer(4);new DataView(v).setInt32(0,h,!0),t.push(new Uint8Array(v))},i=h=>{const v=new ArrayBuffer(4);new DataView(v).setFloat32(0,h,!0),t.push(new Uint8Array(v))},s=h=>{r(h?1:0)},o=h=>{const v=new TextEncoder().encode(h);r(v.byteLength),t.push(v)},l=h=>{r(h.byteLength),t.push(h)},u=(h,v)=>{r(h.length);for(const y of h)v(y)};t.push(xt),r(Sd);{const h=new TextEncoder().encode(n._name);t.push(h)}for(const h of e.fields){const v=n[h.name];if(!h.isNullable&&v==null)throw new Error(`${n._name}: Expect field ${h.name} to be non-nullable`);if(v==null){r(Ws);continue}switch(r(Ed[h.type]),h.type){case"str":o(v);break;case"int":a(v);break;case"float":i(v);break;case"bool":s(v);break;case"raw":l(v);break;case"arr_str":u(v,o);break;case"arr_int":u(v,a);break;case"arr_float":u(v,i);break;case"arr_bool":u(v,s);break;case"arr_raw":u(v,l);break}}const f=t.reduce((h,v)=>h+v.byteLength,0),g=new Uint8Array(f);let m=0;for(const h of t)g.set(h,m),m+=h.byteLength;return g}const gm=n=>{const e=n.reduce((r,a)=>r+a.length,0),t=new Uint8Array(e);t.set(n[0],0);for(let r=1;r<n.length;r++)t.set(n[r],n[r-1].length);return t},hm=new TextDecoder,Za=n=>hm.decode(n),nl=/-(\d{5})-of-(\d{5})\.gguf(?:\?.*)?$/,el=n=>{const e=n.match(nl);return e?{baseURL:n.replace(nl,""),current:parseInt(e[1]),total:parseInt(e[2])}:{baseURL:n,current:1,total:1}},vm=n=>{n.every(t=>!!t.name)&&n.length>1&&n.sort((r,a)=>{const i=el(r.name),s=el(a.name);return i.current-s.current})},tl=n=>new URL(n,document.baseURI).href,ni=n=>n.reduce((e,t)=>e+t,0),kd=n=>!!(n!=null&&n.startsWith),_m=()=>(async n=>{try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(n)}catch{return!1}})(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11])),wm=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,6,64,25,11,11])),ym=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11])),Pm=async()=>{if(!await wm())throw new Error("WebAssembly runtime does not support exception handling");if(!await ym())throw new Error("WebAssembly runtime does not support SIMD")},Sm=/^.*\.gguf(?:\?.*)?$/,xd=n=>Sm.test(n),Fd=()=>!!navigator.userAgent.match(/Version\/([0-9\._]+).*Mobile.*Safari.*/),Vs=n=>{const e=URL.createObjectURL(kd(n)?new Blob([n],{type:"text/javascript"}):n);return new Worker(e,{type:"module"})},bm=n=>(...e)=>{let t=[],r;return t.push(new Promise(a=>{r=a})),n(...e,(a,i)=>{r([a,i]),t.push(new Promise(s=>{r=s}))}),async function*(){let a;for(let i=0,s=!1;!s;i++)[a,s]=await t[i],delete t[i],a!==void 0&&(yield a)}()},Em="b1-01eb54e",km=`// Start the main llama.cpp
let wllamaMalloc;
let wllamaStart;
let wllamaAction;
let wllamaExit;
let wllamaDebug;

let Module = null;

//////////////////////////////////////////////////////////////
// UTILS
//////////////////////////////////////////////////////////////

// send message back to main thread
const msg = (data, transfer) => postMessage(data, transfer);

// Convert CPP log into JS log
const cppLogToJSLog = (line) => {
  const matched = line.match(/@@(DEBUG|INFO|WARN|ERROR)@@(.*)/);
  return !!matched
    ? {
        level: (matched[1] === 'INFO' ? 'debug' : matched[1]).toLowerCase(),
        text: matched[2],
      }
    : { level: 'log', text: line };
};

// Get module config that forwards stdout/err to main thread
const getWModuleConfig = (_argMainScriptBlob) => {
  var pathConfig = RUN_OPTIONS.pathConfig;
  var pthreadPoolSize = RUN_OPTIONS.nbThread;
  var argMainScriptBlob = _argMainScriptBlob;

  if (!pathConfig['wllama.wasm']) {
    throw new Error('"wllama.wasm" is missing in pathConfig');
  }
  return {
    noInitialRun: true,
    print: function (text) {
      if (arguments.length > 1)
        text = Array.prototype.slice.call(arguments).join(' ');
      msg({ verb: 'console.log', args: [text] });
    },
    printErr: function (text) {
      if (arguments.length > 1)
        text = Array.prototype.slice.call(arguments).join(' ');
      const logLine = cppLogToJSLog(text);
      msg({ verb: 'console.' + logLine.level, args: [logLine.text] });
    },
    locateFile: function (filename, basePath) {
      const p = pathConfig[filename];
      const truncate = (str) =>
        str.length > 128 ? \`\${str.substr(0, 128)}...\` : str;
      if (filename.match(/wllama\\.worker\\.js/)) {
        msg({
          verb: 'console.error',
          args: [
            '"wllama.worker.js" is removed from v2.2.1. Hint: make sure to clear browser\\'s cache.',
          ],
        });
      } else {
        msg({
          verb: 'console.debug',
          args: [\`Loading "\${filename}" from "\${truncate(p)}"\`],
        });
        return p;
      }
    },
    mainScriptUrlOrBlob: argMainScriptBlob,
    pthreadPoolSize,
    wasmMemory: pthreadPoolSize > 1 ? getWasmMemory() : null,
    onAbort: function (text) {
      msg({ verb: 'signal.abort', args: [text] });
    },
  };
};

// Get the memory to be used by wasm. (Only used in multi-thread mode)
// Because we have a weird OOM issue on iOS, we need to try some values
// See: https://github.com/emscripten-core/emscripten/issues/19144
//      https://github.com/godotengine/godot/issues/70621
const getWasmMemory = () => {
  let minBytes = 128 * 1024 * 1024;
  let maxBytes = 4096 * 1024 * 1024;
  let stepBytes = 128 * 1024 * 1024;
  while (maxBytes > minBytes) {
    try {
      const wasmMemory = new WebAssembly.Memory({
        initial: minBytes / 65536,
        maximum: maxBytes / 65536,
        shared: true,
      });
      return wasmMemory;
    } catch (e) {
      maxBytes -= stepBytes;
      continue; // retry
    }
  }
  throw new Error('Cannot allocate WebAssembly.Memory');
};

//////////////////////////////////////////////////////////////
// MEMFS PATCH
//////////////////////////////////////////////////////////////

/**
 * By default, emscripten uses memfs. The way it works is by
 * allocating new Uint8Array in javascript heap. This is not good
 * because it requires files to be copied to wasm heap each time
 * a file is read.
 *
 * HeapFS is an alternative, which resolves this problem by
 * allocating space for file directly inside wasm heap. This
 * allows us to mmap without doing any copy.
 *
 * For llama.cpp, this is great because we use MAP_SHARED
 *
 * Ref: https://github.com/ngxson/wllama/pull/39
 * Ref: https://github.com/emscripten-core/emscripten/blob/main/src/library_memfs.js
 *
 * Note 29/05/2024 @ngxson
 * Due to ftell() being limited to MAX_LONG, we cannot load files bigger than 2^31 bytes (or 2GB)
 * Ref: https://github.com/emscripten-core/emscripten/blob/main/system/lib/libc/musl/src/stdio/ftell.c
 *
 * For WebGPU, we want to extend this idea one level further to
 * avoid hitting memory limits, especially on mobile devices.
 * Download models directly to disk via OPFS, avoiding the WASM
 * heap to prevent growing the heap and having an extra copy of the model.
 * Then, stream it from disk directly to llama.cpp. We still need to
 * support async tensor uploads in llama.cpp WebGPU backend, which should
 * decrease memory usage even further.
 *
 * Note that the model cache manager is already backed by OPFS.
 */

const fsNameToFile = {}; // map Name => File
const fsIdToFile = {}; // map ID => File
let currFileId = 0;
const opfsHandles = {}; // map Name => { synchandle, size } for OPFS-backed files

// Patch and redirect memfs calls to wllama
const patchMEMFS = () => {
  const m = Module;
  // save functions
  m.MEMFS.stream_ops._read = m.MEMFS.stream_ops.read;
  m.MEMFS.stream_ops._write = m.MEMFS.stream_ops.write;
  m.MEMFS.stream_ops._llseek = m.MEMFS.stream_ops.llseek;
  m.MEMFS.stream_ops._allocate = m.MEMFS.stream_ops.allocate;
  m.MEMFS.stream_ops._mmap = m.MEMFS.stream_ops.mmap;
  m.MEMFS.stream_ops._msync = m.MEMFS.stream_ops.msync;

  const patchStream = (stream) => {
    const name = stream.node.name;
    if (fsNameToFile[name]) {
      const f = fsNameToFile[name];
      stream.node.contents = m.HEAPU8.subarray(f.ptr, f.ptr + f.size);
      stream.node.usedBytes = f.size;
    }
  };

  // replace "read" functions
  m.MEMFS.stream_ops.read = function (
    stream,
    buffer,
    offset,
    length,
    position
  ) {
    const name = stream.node.name;
    // OPFS-backed path for WebGPU
    if (opfsHandles[name]) {
      const { syncHandle, size } = opfsHandles[name];
      const toRead = Math.min(length, size - position);
      if (toRead <= 0) return 0;
      const view = new Uint8Array(
        buffer.buffer,
        buffer.byteOffset + offset,
        toRead
      );
      return syncHandle.read(view, { at: position });
    }
    // WASM heap-backed path for WASM
    patchStream(stream);
    return m.MEMFS.stream_ops._read(stream, buffer, offset, length, position);
  };
  m.MEMFS.ops_table.file.stream.read = m.MEMFS.stream_ops.read;

  // replace "llseek" functions
  m.MEMFS.stream_ops.llseek = function (stream, offset, whence) {
    const name = stream.node.name;
    // OPFS-backed path for WebGPU
    if (opfsHandles[name]) {
      const { size } = opfsHandles[name];
      let newPos = offset;
      if (whence === 1) newPos += stream.position; // SEEK_CUR
      if (whence === 2) newPos += size; // SEEK_END
      if (newPos < 0) throw new Error('SEEK before start of file');
      stream.position = newPos;
      return newPos;
    }
    // WASM heap-backed path for WASM
    patchStream(stream);
    return m.MEMFS.stream_ops._llseek(stream, offset, whence);
  };
  m.MEMFS.ops_table.file.stream.llseek = m.MEMFS.stream_ops.llseek;

  // replace "mmap" functions
  m.MEMFS.stream_ops.mmap = function (stream, length, position, prot, flags) {
    const name = stream.node.name;
    if (opfsHandles[name]) {
      // OPFS-backed files must never be mmap'd — that would copy the entire model
      // onto the WASM heap, defeating the whole point of the OPFS path.
      // use_mmap=false is set in wllama.ts for WebGPU loads, so llama.cpp should
      // never reach this branch. If it does, throw immediately so the bug is visible.
      console.error(
        \`[OPFS] mmap called on OPFS-backed file "\${name}" (length=\${length}, position=\${position}). This should never happen when use_mmap=false is set. Please report this as a bug.\`
      );
      throw new Error(
        \`[wllama] mmap called on OPFS-backed file "\${name}". \` +
          \`This should never happen when use_mmap=false is set. \` +
          \`Please report this as a bug.\`
      );
    }

    console.debug(
      \`[OPFS] mmap: file="\${name}", length=\${length}, position=\${position}\`
    );
    patchStream(stream);

    if (fsNameToFile[name]) {
      const f = fsNameToFile[name];
      return {
        ptr: f.ptr + position,
        allocated: false,
      };
    } else {
      return m.MEMFS.stream_ops._mmap(stream, length, position, prot, flags);
    }
  };
  m.MEMFS.ops_table.file.stream.mmap = m.MEMFS.stream_ops.mmap;

  // mount FS
  m.FS.mkdir('/models');
  m.FS.mount(m.MEMFS, { root: '.' }, '/models');
};

// Allocate a new file in wllama heapfs, returns file ID
const heapfsAlloc = (name, size) => {
  if (size < 1) {
    throw new Error('File size must be bigger than 0');
  }
  const m = Module;
  const ptr = m.mmapAlloc(size);
  const file = {
    ptr: ptr,
    size: size,
    id: currFileId++,
  };
  fsIdToFile[file.id] = file;
  fsNameToFile[name] = file;
  return file.id;
};

// Add new file to wllama heapfs, return number of written bytes
const heapfsWrite = (id, buffer, offset) => {
  const m = Module;
  if (fsIdToFile[id]) {
    const { ptr, size } = fsIdToFile[id];
    const afterWriteByte = offset + buffer.byteLength;
    if (afterWriteByte > size) {
      throw new Error(
        \`File ID \${id} write out of bound, afterWriteByte = \${afterWriteByte} while size = \${size}\`
      );
    }
    m.HEAPU8.set(buffer, ptr + offset);
    return buffer.byteLength;
  } else {
    throw new Error(\`File ID \${id} not found in heapfs\`);
  }
};

const opfsAlloc = async (logicalName, opfsCacheFileName) => {
  const mb = (bytes) => (bytes / 1024 / 1024).toFixed(1) + ' MB';
  console.log(\`[OPFS] opfsAlloc: logicalName="\${logicalName}" 
    opfsCacheFileName="\${opfsCacheFileName}"\`);

  const opfsRoot = await navigator.storage.getDirectory();
  const cacheDir = await opfsRoot.getDirectoryHandle('cache');
  const fileHandle = await cacheDir.getFileHandle(opfsCacheFileName);
  const syncHandle = await fileHandle.createSyncAccessHandle();
  const size = syncHandle.getSize();
  opfsHandles[logicalName] = { syncHandle, size };

  console.debug(
    \`[OPFS] registered sync handle for "\${logicalName}", size="\${mb(size)}"\`
  );

  // TODO(nikhil.jain) what is this for?
  Module['FS_createDataFile'](
    '/models',
    logicalName,
    new Uint8Array(0),
    true,
    true,
    true
  );
  // Set usedBytes so fstat() returns the real file size.
  Module.FS.lookupPath('/models/' + logicalName).node.usedBytes = size;
  console.log(
    \`[OPFS] opfsAlloc: created MEMFS placeholder at /models/\${logicalName} with usedBytes=\${size}\`
  );

  return size;
};

const opfsFreeAll = () => {
  const names = Object.keys(opfsHandles);
  if (names.length === 0) {
    console.debug(\`[OPFS] opfsFreeAll: no OPFS handles to free\`);
    return;
  }
  console.debug(
    \`[OPFS] opfsFreeAll: freeing \${names.length} OPFS handles: \${names.join(', ')}\`
  );
  for (const [name, { syncHandle }] of Object.entries(opfsHandles)) {
    try {
      console.debug(\`[OPFS] opfsFreeAll: closing handle for "\${name}"\`);
      syncHandle.close();
      Module.FS.unlink('/models/' + name);
      console.debug(
        \`[OPFS] opfsFreeAll: successfully closed handle for "\${name}"\`
      );
    } catch (e) {
      console.warn('[OPFS] Error freeing ' + name + ': ' + e);
    }
    delete opfsHandles[name];
  }
  console.debug(\`[OPFS] opfsFreeAll: done\`);
};

//////////////////////////////////////////////////////////////
// MAIN CODE
//////////////////////////////////////////////////////////////

const callWrapper = (name, ret, args, isAsync) => {
  const fn = Module.cwrap(
    name,
    ret,
    args,
    isAsync ? { async: true } : undefined
  );
  return async (...callArgs) => {
    let result;
    try {
      result = isAsync ? await fn(...callArgs) : fn(...callArgs);
    } catch (ex) {
      console.error(ex);
      throw ex;
    }
    return result;
  };
};

onmessage = async (e) => {
  if (!e.data) return;
  const { verb, args, callbackId } = e.data;

  if (!callbackId) {
    msg({ verb: 'console.error', args: ['callbackId is required', e.data] });
    return;
  }

  if (verb === 'module.init') {
    const argMainScriptBlob = args[0];
    try {
      Module = getWModuleConfig(argMainScriptBlob);
      Module.onRuntimeInitialized = () => {
        // async call once module is ready
        // init FS
        patchMEMFS();
        // init cwrap
        const pointer = 'number';
        // TODO: note sure why emscripten cannot bind if there is only 1 argument
        wllamaMalloc = callWrapper(
          'wllama_malloc',
          pointer,
          ['number', pointer],
          false
        );
        wllamaStart = callWrapper('wllama_start', 'string', [], true);
        wllamaAction = callWrapper(
          'wllama_action',
          pointer,
          ['string', pointer],
          true
        );
        wllamaExit = callWrapper('wllama_exit', 'string', [], false);
        wllamaDebug = callWrapper('wllama_debug', 'string', [], false);
        msg({ callbackId, result: null });
      };
      wModuleInit();
    } catch (err) {
      msg({ callbackId, err });
    }
    return;
  }

  if (verb === 'fs.alloc') {
    const argFilename = args[0];
    const argSize = args[1];
    try {
      // create blank file
      const emptyBuffer = new Uint8Array(0);
      Module['FS_createDataFile'](
        '/models',
        argFilename,
        emptyBuffer,
        true,
        true,
        true
      );
      // alloc data on heap
      const fileId = heapfsAlloc(argFilename, argSize);
      msg({ callbackId, result: { fileId } });
    } catch (err) {
      msg({ callbackId, err });
    }
    return;
  }

  if (verb === 'fs.opfs-alloc') {
    const argLogicalName = args[0];
    const argOpfsCacheFileName = args[1];
    console.debug(
      \`[OPFS] received fs.opfs-alloc: logicalName="\${argLogicalName}" opfsCacheFileName="\${argOpfsCacheFileName}"\`
    );
    try {
      const size = await opfsAlloc(argLogicalName, argOpfsCacheFileName);
      console.debug(
        \`[OPFS] fs.opfs-alloc complete: "\${argLogicalName}" size=\${size}\`
      );
      msg({ callbackId, result: { size } });
    } catch (err) {
      console.error(
        \`[OPFSFS] fs.opfs-alloc failed for "\${argLogicalName}": \${err}\`
      );
      msg({ callbackId, err });
    }
    return;
  }

  if (verb === 'fs.write') {
    const argFileId = args[0];
    const argBuffer = args[1];
    const argOffset = args[2];
    try {
      const writtenBytes = heapfsWrite(argFileId, argBuffer, argOffset);
      msg({ callbackId, result: { writtenBytes } });
    } catch (err) {
      msg({ callbackId, err });
    }
    return;
  }

  if (verb === 'wllama.start') {
    try {
      const result = await wllamaStart();
      msg({ callbackId, result });
    } catch (err) {
      msg({ callbackId, err });
    }
    return;
  }

  if (verb === 'wllama.action') {
    const argAction = args[0];
    const argEncodedMsg = args[1];
    try {
      const inputPtr = await wllamaMalloc(argEncodedMsg.byteLength, 0);
      // copy data to wasm heap
      const inputBuffer = new Uint8Array(
        Module.HEAPU8.buffer,
        inputPtr,
        argEncodedMsg.byteLength
      );
      inputBuffer.set(argEncodedMsg, 0);
      const outputPtr = await wllamaAction(argAction, inputPtr);
      // length of output buffer is written at the first 4 bytes of input buffer
      const outputLen = new Uint32Array(Module.HEAPU8.buffer, inputPtr, 1)[0];
      // copy the output buffer to JS heap
      const outputBuffer = new Uint8Array(outputLen);
      const outputSrcView = new Uint8Array(
        Module.HEAPU8.buffer,
        outputPtr,
        outputLen
      );
      outputBuffer.set(outputSrcView, 0); // copy it

      // After the model is loaded into WebGPU buffers, we can delete
      // the OPFS copy.
      const useWebGPU = RUN_OPTIONS.pathConfig['wllama.useWebGPU'];
      console.debug('[HeapFS] action=load useWebGPU=' + useWebGPU);
      if (argAction === 'load' && useWebGPU) {
        opfsFreeAll();
      }
      msg({ callbackId, result: outputBuffer }, [outputBuffer.buffer]);
    } catch (err) {
      msg({ callbackId, err });
    }
    return;
  }

  if (verb === 'wllama.exit') {
    try {
      const result = await wllamaExit();
      msg({ callbackId, result });
    } catch (err) {
      msg({ callbackId, err });
    }
    return;
  }

  if (verb === 'wllama.debug') {
    try {
      const result = await wllamaDebug();
      msg({ callbackId, result });
    } catch (err) {
      msg({ callbackId, err });
    }
    return;
  }
};
`,Cd=`let accessHandle;
let abortController = new AbortController();

async function openFile(filename) {
  const opfsRoot = await navigator.storage.getDirectory();
  const cacheDir = await opfsRoot.getDirectoryHandle('cache', { create: true });
  const fileHandler = await cacheDir.getFileHandle(filename, { create: true });
  accessHandle = await fileHandler.createSyncAccessHandle();
  accessHandle.truncate(0); // clear file content
}

async function writeFile(buf) {
  accessHandle.write(buf);
}

async function closeFile() {
  accessHandle.flush();
  accessHandle.close();
}

async function writeTextFile(filename, str) {
  await openFile(filename);
  await writeFile(new TextEncoder().encode(str));
  await closeFile();
}

const throttled = (func, delay) => {
  let lastRun = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastRun > delay) {
      lastRun = now;
      func.apply(null, args);
    }
  };
};

const assertNonNull = (val) => {
  if (val === null || val === undefined) {
    throw new Error('OPFS Worker: Assertion failed');
  }
};

// respond to main thread
const resOK = () => postMessage({ ok: true });
const resProgress = (loaded, total) =>
  postMessage({ progress: { loaded, total } });
const resErr = (err) => postMessage({ err });

onmessage = async (e) => {
  try {
    if (!e.data) return;

    /**
     * @param {Object} e.data
     *
     * Fine-control FS actions:
     * - { action: 'open', filename: 'string' }
     * - { action: 'write', buf: ArrayBuffer }
     * - { action: 'close' }
     *
     * Simple write API:
     * - { action: 'write-simple', filename: 'string', buf: ArrayBuffer }
     *
     * Download API:
     * - { action: 'download', url: 'string', filename: 'string', options: Object, metadataFileName: 'string' }
     * - { action: 'download-abort' }
     */
    const { action, filename, buf, url, options, metadataFileName } = e.data;

    if (action === 'open') {
      assertNonNull(filename);
      await openFile(filename);
      return resOK();
    } else if (action === 'write') {
      assertNonNull(buf);
      await writeFile(buf);
      return resOK();
    } else if (action === 'close') {
      await closeFile();
      return resOK();
    } else if (action === 'write-simple') {
      assertNonNull(filename);
      assertNonNull(buf);
      await openFile(filename);
      await writeFile(buf);
      await closeFile();
      return resOK();
    } else if (action === 'download') {
      assertNonNull(url);
      assertNonNull(filename);
      assertNonNull(metadataFileName);
      assertNonNull(options);
      assertNonNull(options.aborted);
      abortController = new AbortController();
      if (options.aborted) abortController.abort();
      const response = await fetch(url, {
        ...options,
        signal: abortController.signal,
      });
      const contentLength = response.headers.get('content-length');
      const etag = (response.headers.get('etag') || '').replace(
        /[^A-Za-z0-9]/g,
        ''
      );
      const total = parseInt(contentLength, 10);
      const reader = response.body.getReader();
      await openFile(filename);
      let loaded = 0;
      const throttledProgress = throttled(resProgress, 100);
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        loaded += value.byteLength;
        await writeFile(value);
        throttledProgress(loaded, total);
      }
      resProgress(total, total); // 100% done
      await closeFile();
      // make sure this is in-sync with CacheEntryMetadata
      await writeTextFile(
        metadataFileName,
        JSON.stringify({
          originalURL: url,
          originalSize: total,
          etag,
        })
      );
      return resOK();
    } else if (action === 'download-abort') {
      if (abortController) {
        abortController.abort();
      }
      return;
    }

    throw new Error('OPFS Worker: Invalid action', e.data);
  } catch (err) {
    return resErr(err);
  }
};
`,xm=`var Module = typeof Module != 'undefined' ? Module : {};
var ENVIRONMENT_IS_WEB = !!globalThis.window;
var ENVIRONMENT_IS_WORKER = !!globalThis.WorkerGlobalScope;
var ENVIRONMENT_IS_NODE =
  globalThis.process?.versions?.node && globalThis.process?.type != 'renderer';
var ENVIRONMENT_IS_PTHREAD =
  ENVIRONMENT_IS_WORKER && self.name?.startsWith('em-pthread');
if (ENVIRONMENT_IS_NODE) {
  var worker_threads = require('worker_threads');
  global.Worker = worker_threads.Worker;
  ENVIRONMENT_IS_WORKER = !worker_threads.isMainThread;
  ENVIRONMENT_IS_PTHREAD =
    ENVIRONMENT_IS_WORKER && worker_threads['workerData'] == 'em-pthread';
}
var arguments_ = [];
var thisProgram = './this.program';
var quit_ = (status, toThrow) => {
  throw toThrow;
};
var _scriptName = globalThis.document?.currentScript?.src;
if (typeof __filename != 'undefined') {
  _scriptName = __filename;
} else if (ENVIRONMENT_IS_WORKER) {
  _scriptName = self.location.href;
}
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}
var readAsync, readBinary;
if (ENVIRONMENT_IS_NODE) {
  var fs = require('fs');
  scriptDirectory = __dirname + '/';
  readBinary = (filename) => {
    filename = isFileURI(filename) ? new URL(filename) : filename;
    var ret = fs.readFileSync(filename);
    return ret;
  };
  readAsync = async (filename, binary = true) => {
    filename = isFileURI(filename) ? new URL(filename) : filename;
    var ret = fs.readFileSync(filename, binary ? undefined : 'utf8');
    return ret;
  };
  if (process.argv.length > 1) {
    thisProgram = process.argv[1].replace(/\\\\/g, '/');
  }
  arguments_ = process.argv.slice(2);
  if (typeof module != 'undefined') {
    module['exports'] = Module;
  }
  quit_ = (status, toThrow) => {
    process.exitCode = status;
    throw toThrow;
  };
} else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  try {
    scriptDirectory = new URL('.', _scriptName).href;
  } catch {}
  if (!ENVIRONMENT_IS_NODE) {
    if (ENVIRONMENT_IS_WORKER) {
      readBinary = (url) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.responseType = 'arraybuffer';
        xhr.send(null);
        return new Uint8Array(xhr.response);
      };
    }
    readAsync = async (url) => {
      if (isFileURI(url)) {
        return new Promise((resolve, reject) => {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.responseType = 'arraybuffer';
          xhr.onload = () => {
            if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) {
              resolve(xhr.response);
              return;
            }
            reject(xhr.status);
          };
          xhr.onerror = reject;
          xhr.send(null);
        });
      }
      var response = await fetch(url, { credentials: 'same-origin' });
      if (response.ok) {
        return response.arrayBuffer();
      }
      throw new Error(response.status + ' : ' + response.url);
    };
  }
} else {
}
var defaultPrint = console.log.bind(console);
var defaultPrintErr = console.error.bind(console);
if (ENVIRONMENT_IS_NODE) {
  var utils = require('util');
  var stringify = (a) => (typeof a == 'object' ? utils.inspect(a) : a);
  defaultPrint = (...args) =>
    fs.writeSync(1, args.map(stringify).join(' ') + '\\n');
  defaultPrintErr = (...args) =>
    fs.writeSync(2, args.map(stringify).join(' ') + '\\n');
}
var out = defaultPrint;
var err = defaultPrintErr;
var wasmBinary;
var wasmModule;
var ABORT = false;
var EXITSTATUS;
function assert(condition, text) {
  if (!condition) {
    abort(text);
  }
}
var isFileURI = (filename) => filename.startsWith('file://');
function growMemViews() {
  if (wasmMemory.buffer != HEAP8.buffer) {
    updateMemoryViews();
  }
}
if (ENVIRONMENT_IS_NODE && ENVIRONMENT_IS_PTHREAD) {
  var parentPort = worker_threads['parentPort'];
  parentPort.on('message', (msg) => global.onmessage?.({ data: msg }));
  Object.assign(globalThis, {
    self: global,
    postMessage: (msg) => parentPort['postMessage'](msg),
  });
  process.on('uncaughtException', (err) => {
    postMessage({ cmd: 'uncaughtException', error: err });
    process.exit(1);
  });
}
var startWorker;
if (ENVIRONMENT_IS_PTHREAD) {
  var initializedJS = false;
  self.onunhandledrejection = (e) => {
    throw e.reason || e;
  };
  async function handleMessage(e) {
    try {
      var msgData = e['data'];
      var cmd = msgData.cmd;
      if (cmd === 'load') {
        let messageQueue = [];
        self.onmessage = (e) => messageQueue.push(e);
        startWorker = () => {
          postMessage({ cmd: 'loaded' });
          for (let msg of messageQueue) {
            handleMessage(msg);
          }
          self.onmessage = handleMessage;
        };
        for (const handler of msgData.handlers) {
          if (!Module[handler] || Module[handler].proxy) {
            Module[handler] = (...args) => {
              postMessage({ cmd: 'callHandler', handler, args });
            };
            if (handler == 'print') out = Module[handler];
            if (handler == 'printErr') err = Module[handler];
          }
        }
        wasmMemory = msgData.wasmMemory;
        updateMemoryViews();
        wasmModule = msgData.wasmModule;
        createWasm();
        run();
      } else if (cmd === 'run') {
        establishStackSpace(msgData.pthread_ptr);
        __emscripten_thread_init(msgData.pthread_ptr, 0, 0, 1, 0, 0);
        PThread.threadInitTLS();
        __emscripten_thread_mailbox_await(msgData.pthread_ptr);
        if (!initializedJS) {
          initializedJS = true;
        }
        try {
          await invokeEntryPoint(msgData.start_routine, msgData.arg);
        } catch (ex) {
          if (ex != 'unwind') {
            throw ex;
          }
        }
      } else if (msgData.target === 'setimmediate') {
      } else if (cmd === 'checkMailbox') {
        if (initializedJS) {
          checkMailbox();
        }
      } else if (cmd) {
        err(\`worker: received unknown command \${cmd}\`);
        err(msgData);
      }
    } catch (ex) {
      __emscripten_thread_crashed();
      throw ex;
    }
  }
  self.onmessage = handleMessage;
}
var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
var HEAP64, HEAPU64;
var runtimeInitialized = false;
function updateMemoryViews() {
  var b = wasmMemory.buffer;
  HEAP8 = new Int8Array(b);
  HEAP16 = new Int16Array(b);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(b);
  HEAPU16 = new Uint16Array(b);
  HEAP32 = new Int32Array(b);
  HEAPU32 = new Uint32Array(b);
  HEAPF32 = new Float32Array(b);
  HEAPF64 = new Float64Array(b);
  HEAP64 = new BigInt64Array(b);
  HEAPU64 = new BigUint64Array(b);
}
function initMemory() {
  if (ENVIRONMENT_IS_PTHREAD) {
    return;
  }
  if (Module['wasmMemory']) {
    wasmMemory = Module['wasmMemory'];
  } else {
    var INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 134217728;
    wasmMemory = new WebAssembly.Memory({
      initial: INITIAL_MEMORY / 65536,
      maximum: 65536,
      shared: true,
    });
  }
  updateMemoryViews();
}
function preRun() {
  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function')
      Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }
  callRuntimeCallbacks(onPreRuns);
}
function initRuntime() {
  runtimeInitialized = true;
  if (ENVIRONMENT_IS_PTHREAD) return startWorker();
  if (!Module['noFSInit'] && !FS.initialized) FS.init();
  TTY.init();
  wasmExports['__wasm_call_ctors']();
  FS.ignorePermissions = false;
}
function preMain() {}
function postRun() {
  if (ENVIRONMENT_IS_PTHREAD) {
    return;
  }
  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function')
      Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }
  callRuntimeCallbacks(onPostRuns);
}
function abort(what) {
  Module['onAbort']?.(what);
  what = 'Aborted(' + what + ')';
  err(what);
  ABORT = true;
  what += '. Build with -sASSERTIONS for more info.';
  if (runtimeInitialized) {
    ___trap();
  }
  var e = new WebAssembly.RuntimeError(what);
  throw e;
}
var wasmBinaryFile;
function findWasmBinary() {
  return locateFile('wllama.wasm');
}
function getBinarySync(file) {
  if (file == wasmBinaryFile && wasmBinary) {
    return new Uint8Array(wasmBinary);
  }
  if (readBinary) {
    return readBinary(file);
  }
  throw 'both async and sync fetching of the wasm failed';
}
async function getWasmBinary(binaryFile) {
  if (!wasmBinary) {
    try {
      var response = await readAsync(binaryFile);
      return new Uint8Array(response);
    } catch {}
  }
  return getBinarySync(binaryFile);
}
async function instantiateArrayBuffer(binaryFile, imports) {
  try {
    var binary = await getWasmBinary(binaryFile);
    var instance = await WebAssembly.instantiate(binary, imports);
    return instance;
  } catch (reason) {
    err(\`failed to asynchronously prepare wasm: \${reason}\`);
    abort(reason);
  }
}
async function instantiateAsync(binary, binaryFile, imports) {
  if (!binary && !isFileURI(binaryFile) && !ENVIRONMENT_IS_NODE) {
    try {
      var response = fetch(binaryFile, { credentials: 'same-origin' });
      var instantiationResult = await WebAssembly.instantiateStreaming(
        response,
        imports
      );
      return instantiationResult;
    } catch (reason) {
      err(\`wasm streaming compile failed: \${reason}\`);
      err('falling back to ArrayBuffer instantiation');
    }
  }
  return instantiateArrayBuffer(binaryFile, imports);
}
function getWasmImports() {
  assignWasmImports();
  if (!wasmImports.__instrumented) {
    wasmImports.__instrumented = true;
    Asyncify.instrumentWasmImports(wasmImports);
  }
  var imports = { env: wasmImports, wasi_snapshot_preview1: wasmImports };
  return imports;
}
async function createWasm() {
  function receiveInstance(instance, module) {
    wasmExports = instance.exports;
    wasmExports = Asyncify.instrumentWasmExports(wasmExports);
    wasmExports = applySignatureConversions(wasmExports);
    registerTLSInit(wasmExports['_emscripten_tls_init']);
    assignWasmExports(wasmExports);
    wasmModule = module;
    removeRunDependency('wasm-instantiate');
    return wasmExports;
  }
  addRunDependency('wasm-instantiate');
  function receiveInstantiationResult(result) {
    return receiveInstance(result['instance'], result['module']);
  }
  var info = getWasmImports();
  if (Module['instantiateWasm']) {
    return new Promise((resolve, reject) => {
      Module['instantiateWasm'](info, (inst, mod) => {
        resolve(receiveInstance(inst, mod));
      });
    });
  }
  if (ENVIRONMENT_IS_PTHREAD) {
    var instance = new WebAssembly.Instance(wasmModule, getWasmImports());
    return receiveInstance(instance, wasmModule);
  }
  wasmBinaryFile ??= findWasmBinary();
  var result = await instantiateAsync(wasmBinary, wasmBinaryFile, info);
  var exports = receiveInstantiationResult(result);
  return exports;
}
class ExitStatus {
  name = 'ExitStatus';
  constructor(status) {
    this.message = \`Program terminated with exit(\${status})\`;
    this.status = status;
  }
}
var terminateWorker = (worker) => {
  worker.terminate();
  worker.onmessage = (e) => {};
};
var cleanupThread = (pthread_ptr) => {
  var worker = PThread.pthreads[pthread_ptr];
  PThread.returnWorkerToPool(worker);
};
var callRuntimeCallbacks = (callbacks) => {
  while (callbacks.length > 0) {
    callbacks.shift()(Module);
  }
};
var onPreRuns = [];
var addOnPreRun = (cb) => onPreRuns.push(cb);
var runDependencies = 0;
var dependenciesFulfilled = null;
var removeRunDependency = (id) => {
  runDependencies--;
  Module['monitorRunDependencies']?.(runDependencies);
  if (runDependencies == 0) {
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback();
    }
  }
};
var addRunDependency = (id) => {
  runDependencies++;
  Module['monitorRunDependencies']?.(runDependencies);
};
var spawnThread = (threadParams) => {
  var worker = PThread.getNewWorker();
  if (!worker) {
    return 6;
  }
  PThread.runningWorkers.push(worker);
  PThread.pthreads[threadParams.pthread_ptr] = worker;
  worker.pthread_ptr = threadParams.pthread_ptr;
  var msg = {
    cmd: 'run',
    start_routine: threadParams.startRoutine,
    arg: threadParams.arg,
    pthread_ptr: threadParams.pthread_ptr,
  };
  if (ENVIRONMENT_IS_NODE) {
    worker.unref();
  }
  worker.postMessage(msg, threadParams.transferList);
  return 0;
};
var runtimeKeepaliveCounter = 0;
var keepRuntimeAlive = () => noExitRuntime || runtimeKeepaliveCounter > 0;
var stackSave = () => _emscripten_stack_get_current();
var stackRestore = (val) => __emscripten_stack_restore(val);
var stackAlloc = (sz) => __emscripten_stack_alloc(sz);
var proxyToMainThread = (funcIndex, emAsmAddr, sync, ...callArgs) => {
  var serializedNumCallArgs = callArgs.length * 2;
  var sp = stackSave();
  var args = stackAlloc(serializedNumCallArgs * 8);
  var b = args >>> 3;
  for (var i = 0; i < callArgs.length; i++) {
    var arg = callArgs[i];
    if (typeof arg == 'bigint') {
      (growMemViews(), HEAP64)[(b + 2 * i) >>> 0] = 1n;
      (growMemViews(), HEAP64)[(b + 2 * i + 1) >>> 0] = arg;
    } else {
      (growMemViews(), HEAP64)[(b + 2 * i) >>> 0] = 0n;
      (growMemViews(), HEAPF64)[(b + 2 * i + 1) >>> 0] = arg;
    }
  }
  var rtn = __emscripten_run_js_on_main_thread(
    funcIndex,
    emAsmAddr,
    serializedNumCallArgs,
    args,
    sync
  );
  stackRestore(sp);
  return rtn;
};
function _proc_exit(code) {
  if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(0, 0, 1, code);
  EXITSTATUS = code;
  if (!keepRuntimeAlive()) {
    PThread.terminateAllThreads();
    Module['onExit']?.(code);
    ABORT = true;
  }
  quit_(code, new ExitStatus(code));
}
function exitOnMainThread(returnCode) {
  if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(1, 0, 0, returnCode);
  _exit(returnCode);
}
var exitJS = (status, implicit) => {
  EXITSTATUS = status;
  if (ENVIRONMENT_IS_PTHREAD) {
    exitOnMainThread(status);
    throw 'unwind';
  }
  _proc_exit(status);
};
var _exit = exitJS;
var PThread = {
  unusedWorkers: [],
  runningWorkers: [],
  tlsInitFunctions: [],
  pthreads: {},
  init() {
    if (!ENVIRONMENT_IS_PTHREAD) {
      PThread.initMainThread();
    }
  },
  initMainThread() {
    var pthreadPoolSize = Module['pthreadPoolSize'];
    while (pthreadPoolSize--) {
      PThread.allocateUnusedWorker();
    }
    addOnPreRun(async () => {
      var pthreadPoolReady = PThread.loadWasmModuleToAllWorkers();
      addRunDependency('loading-workers');
      await pthreadPoolReady;
      removeRunDependency('loading-workers');
    });
  },
  terminateAllThreads: () => {
    for (var worker of PThread.runningWorkers) {
      terminateWorker(worker);
    }
    for (var worker of PThread.unusedWorkers) {
      terminateWorker(worker);
    }
    PThread.unusedWorkers = [];
    PThread.runningWorkers = [];
    PThread.pthreads = {};
  },
  returnWorkerToPool: (worker) => {
    var pthread_ptr = worker.pthread_ptr;
    delete PThread.pthreads[pthread_ptr];
    PThread.unusedWorkers.push(worker);
    PThread.runningWorkers.splice(PThread.runningWorkers.indexOf(worker), 1);
    worker.pthread_ptr = 0;
    __emscripten_thread_free_data(pthread_ptr);
  },
  threadInitTLS() {
    PThread.tlsInitFunctions.forEach((f) => f());
  },
  loadWasmModuleToWorker: (worker) =>
    new Promise((onFinishedLoading) => {
      worker.onmessage = (e) => {
        var d = e['data'];
        var cmd = d.cmd;
        if (d.targetThread && d.targetThread != _pthread_self()) {
          var targetWorker = PThread.pthreads[d.targetThread];
          if (targetWorker) {
            targetWorker.postMessage(d, d.transferList);
          } else {
            err(
              \`Internal error! Worker sent a message "\${cmd}" to target pthread \${d.targetThread}, but that thread no longer exists!\`
            );
          }
          return;
        }
        if (cmd === 'checkMailbox') {
          checkMailbox();
        } else if (cmd === 'spawnThread') {
          spawnThread(d);
        } else if (cmd === 'cleanupThread') {
          callUserCallback(() => cleanupThread(d.thread));
        } else if (cmd === 'loaded') {
          worker.loaded = true;
          if (ENVIRONMENT_IS_NODE && !worker.pthread_ptr) {
            worker.unref();
          }
          onFinishedLoading(worker);
        } else if (d.target === 'setimmediate') {
          worker.postMessage(d);
        } else if (cmd === 'uncaughtException') {
          worker.onerror(d.error);
        } else if (cmd === 'callHandler') {
          Module[d.handler](...d.args);
        } else if (cmd) {
          err(\`worker sent an unknown command \${cmd}\`);
        }
      };
      worker.onerror = (e) => {
        var message = 'worker sent an error!';
        err(\`\${message} \${e.filename}:\${e.lineno}: \${e.message}\`);
        throw e;
      };
      if (ENVIRONMENT_IS_NODE) {
        worker.on('message', (data) => worker.onmessage({ data }));
        worker.on('error', (e) => worker.onerror(e));
      }
      var handlers = [];
      var knownHandlers = ['onExit', 'onAbort', 'print', 'printErr'];
      for (var handler of knownHandlers) {
        if (Module.propertyIsEnumerable(handler)) {
          handlers.push(handler);
        }
      }
      worker.postMessage({ cmd: 'load', handlers, wasmMemory, wasmModule });
    }),
  async loadWasmModuleToAllWorkers() {
    if (ENVIRONMENT_IS_PTHREAD) {
      return;
    }
    let pthreadPoolReady = Promise.all(
      PThread.unusedWorkers.map(PThread.loadWasmModuleToWorker)
    );
    return pthreadPoolReady;
  },
  allocateUnusedWorker() {
    var worker;
    var pthreadMainJs = _scriptName;
    if (Module['mainScriptUrlOrBlob']) {
      pthreadMainJs = Module['mainScriptUrlOrBlob'];
      if (typeof pthreadMainJs != 'string') {
        pthreadMainJs = URL.createObjectURL(pthreadMainJs);
      }
    }
    worker = new Worker(pthreadMainJs, {
      workerData: 'em-pthread',
      name: 'em-pthread',
    });
    PThread.unusedWorkers.push(worker);
  },
  getNewWorker() {
    if (PThread.unusedWorkers.length == 0) {
      PThread.allocateUnusedWorker();
      PThread.loadWasmModuleToWorker(PThread.unusedWorkers[0]);
    }
    return PThread.unusedWorkers.pop();
  },
};
var onPostRuns = [];
var addOnPostRun = (cb) => onPostRuns.push(cb);
function establishStackSpace(pthread_ptr) {
  var stackHigh = (growMemViews(), HEAPU32)[((pthread_ptr + 52) >>> 2) >>> 0];
  var stackSize = (growMemViews(), HEAPU32)[((pthread_ptr + 56) >>> 2) >>> 0];
  var stackLow = stackHigh - stackSize;
  _emscripten_stack_set_limits(stackHigh, stackLow);
  stackRestore(stackHigh);
}
var wasmTableMirror = [];
var getWasmTableEntry = (funcPtr) => {
  var func = wasmTableMirror[funcPtr];
  if (!func) {
    wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
    if (Asyncify.isAsyncExport(func)) {
      wasmTableMirror[funcPtr] = func = Asyncify.makeAsyncFunction(func);
    }
  }
  return func;
};
var invokeEntryPoint = async (ptr, arg) => {
  runtimeKeepaliveCounter = 0;
  noExitRuntime = 0;
  var result = WebAssembly.promising(getWasmTableEntry(ptr))(arg);
  function finish(result) {
    if (keepRuntimeAlive()) {
      EXITSTATUS = result;
      return;
    }
    __emscripten_thread_exit(result);
  }
  result = await result;
  finish(result);
};
invokeEntryPoint.isAsync = true;
var noExitRuntime = true;
var registerTLSInit = (tlsInitFunc) =>
  PThread.tlsInitFunctions.push(tlsInitFunc);
var wasmMemory;
var INT53_MAX = 9007199254740992;
var INT53_MIN = -9007199254740992;
var bigintToI53Checked = (num) =>
  num < INT53_MIN || num > INT53_MAX ? NaN : Number(num);
var UTF8Decoder = globalThis.TextDecoder && new TextDecoder();
var findStringEnd = (heapOrArray, idx, maxBytesToRead, ignoreNul) => {
  var maxIdx = idx + maxBytesToRead;
  if (ignoreNul) return maxIdx;
  while (heapOrArray[idx] && !(idx >= maxIdx)) ++idx;
  return idx;
};
var UTF8ArrayToString = (heapOrArray, idx = 0, maxBytesToRead, ignoreNul) => {
  idx >>>= 0;
  var endPtr = findStringEnd(heapOrArray, idx, maxBytesToRead, ignoreNul);
  if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
    return UTF8Decoder.decode(
      heapOrArray.buffer instanceof ArrayBuffer
        ? heapOrArray.subarray(idx, endPtr)
        : heapOrArray.slice(idx, endPtr)
    );
  }
  var str = '';
  while (idx < endPtr) {
    var u0 = heapOrArray[idx++];
    if (!(u0 & 128)) {
      str += String.fromCharCode(u0);
      continue;
    }
    var u1 = heapOrArray[idx++] & 63;
    if ((u0 & 224) == 192) {
      str += String.fromCharCode(((u0 & 31) << 6) | u1);
      continue;
    }
    var u2 = heapOrArray[idx++] & 63;
    if ((u0 & 240) == 224) {
      u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
    } else {
      u0 =
        ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heapOrArray[idx++] & 63);
    }
    if (u0 < 65536) {
      str += String.fromCharCode(u0);
    } else {
      var ch = u0 - 65536;
      str += String.fromCharCode(55296 | (ch >> 10), 56320 | (ch & 1023));
    }
  }
  return str;
};
var UTF8ToString = (ptr, maxBytesToRead, ignoreNul) => {
  ptr >>>= 0;
  return ptr
    ? UTF8ArrayToString(
        (growMemViews(), HEAPU8),
        ptr,
        maxBytesToRead,
        ignoreNul
      )
    : '';
};
function pthreadCreateProxied(pthread_ptr, attr, startRoutine, arg) {
  if (ENVIRONMENT_IS_PTHREAD)
    return proxyToMainThread(2, 0, 1, pthread_ptr, attr, startRoutine, arg);
  return ___pthread_create_js(pthread_ptr, attr, startRoutine, arg);
}
var _emscripten_has_threading_support = () => !!globalThis.SharedArrayBuffer;
function ___pthread_create_js(pthread_ptr, attr, startRoutine, arg) {
  pthread_ptr >>>= 0;
  attr >>>= 0;
  startRoutine >>>= 0;
  arg >>>= 0;
  if (!_emscripten_has_threading_support()) {
    return 6;
  }
  var transferList = [];
  var error = 0;
  if (ENVIRONMENT_IS_PTHREAD && (transferList.length === 0 || error)) {
    return pthreadCreateProxied(pthread_ptr, attr, startRoutine, arg);
  }
  if (error) return error;
  var threadParams = { startRoutine, pthread_ptr, arg, transferList };
  if (ENVIRONMENT_IS_PTHREAD) {
    threadParams.cmd = 'spawnThread';
    postMessage(threadParams, transferList);
    return 0;
  }
  return spawnThread(threadParams);
}
var syscallGetVarargI = () => {
  var ret = (growMemViews(), HEAP32)[(+SYSCALLS.varargs >>> 2) >>> 0];
  SYSCALLS.varargs += 4;
  return ret;
};
var syscallGetVarargP = syscallGetVarargI;
var PATH = {
  isAbs: (path) => path.charAt(0) === '/',
  splitPath: (filename) => {
    var splitPathRe =
      /^(\\/?|)([\\s\\S]*?)((?:\\.{1,2}|[^\\/]+?|)(\\.[^.\\/]*|))(?:[\\/]*)$/;
    return splitPathRe.exec(filename).slice(1);
  },
  normalizeArray: (parts, allowAboveRoot) => {
    var up = 0;
    for (var i = parts.length - 1; i >= 0; i--) {
      var last = parts[i];
      if (last === '.') {
        parts.splice(i, 1);
      } else if (last === '..') {
        parts.splice(i, 1);
        up++;
      } else if (up) {
        parts.splice(i, 1);
        up--;
      }
    }
    if (allowAboveRoot) {
      for (; up; up--) {
        parts.unshift('..');
      }
    }
    return parts;
  },
  normalize: (path) => {
    var isAbsolute = PATH.isAbs(path),
      trailingSlash = path.slice(-1) === '/';
    path = PATH.normalizeArray(
      path.split('/').filter((p) => !!p),
      !isAbsolute
    ).join('/');
    if (!path && !isAbsolute) {
      path = '.';
    }
    if (path && trailingSlash) {
      path += '/';
    }
    return (isAbsolute ? '/' : '') + path;
  },
  dirname: (path) => {
    var result = PATH.splitPath(path),
      root = result[0],
      dir = result[1];
    if (!root && !dir) {
      return '.';
    }
    if (dir) {
      dir = dir.slice(0, -1);
    }
    return root + dir;
  },
  basename: (path) => path && path.match(/([^\\/]+|\\/)\\/*$/)[1],
  join: (...paths) => PATH.normalize(paths.join('/')),
  join2: (l, r) => PATH.normalize(l + '/' + r),
};
var initRandomFill = () => {
  if (ENVIRONMENT_IS_NODE) {
    var nodeCrypto = require('crypto');
    return (view) => nodeCrypto.randomFillSync(view);
  }
  return (view) =>
    view.set(crypto.getRandomValues(new Uint8Array(view.byteLength)));
};
var randomFill = (view) => {
  (randomFill = initRandomFill())(view);
};
var PATH_FS = {
  resolve: (...args) => {
    var resolvedPath = '',
      resolvedAbsolute = false;
    for (var i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path = i >= 0 ? args[i] : FS.cwd();
      if (typeof path != 'string') {
        throw new TypeError('Arguments to path.resolve must be strings');
      } else if (!path) {
        return '';
      }
      resolvedPath = path + '/' + resolvedPath;
      resolvedAbsolute = PATH.isAbs(path);
    }
    resolvedPath = PATH.normalizeArray(
      resolvedPath.split('/').filter((p) => !!p),
      !resolvedAbsolute
    ).join('/');
    return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
  },
  relative: (from, to) => {
    from = PATH_FS.resolve(from).slice(1);
    to = PATH_FS.resolve(to).slice(1);
    function trim(arr) {
      var start = 0;
      for (; start < arr.length; start++) {
        if (arr[start] !== '') break;
      }
      var end = arr.length - 1;
      for (; end >= 0; end--) {
        if (arr[end] !== '') break;
      }
      if (start > end) return [];
      return arr.slice(start, end - start + 1);
    }
    var fromParts = trim(from.split('/'));
    var toParts = trim(to.split('/'));
    var length = Math.min(fromParts.length, toParts.length);
    var samePartsLength = length;
    for (var i = 0; i < length; i++) {
      if (fromParts[i] !== toParts[i]) {
        samePartsLength = i;
        break;
      }
    }
    var outputParts = [];
    for (var i = samePartsLength; i < fromParts.length; i++) {
      outputParts.push('..');
    }
    outputParts = outputParts.concat(toParts.slice(samePartsLength));
    return outputParts.join('/');
  },
};
var FS_stdin_getChar_buffer = [];
var lengthBytesUTF8 = (str) => {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    var c = str.charCodeAt(i);
    if (c <= 127) {
      len++;
    } else if (c <= 2047) {
      len += 2;
    } else if (c >= 55296 && c <= 57343) {
      len += 4;
      ++i;
    } else {
      len += 3;
    }
  }
  return len;
};
var stringToUTF8Array = (str, heap, outIdx, maxBytesToWrite) => {
  outIdx >>>= 0;
  if (!(maxBytesToWrite > 0)) return 0;
  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1;
  for (var i = 0; i < str.length; ++i) {
    var u = str.codePointAt(i);
    if (u <= 127) {
      if (outIdx >= endIdx) break;
      heap[outIdx++ >>> 0] = u;
    } else if (u <= 2047) {
      if (outIdx + 1 >= endIdx) break;
      heap[outIdx++ >>> 0] = 192 | (u >> 6);
      heap[outIdx++ >>> 0] = 128 | (u & 63);
    } else if (u <= 65535) {
      if (outIdx + 2 >= endIdx) break;
      heap[outIdx++ >>> 0] = 224 | (u >> 12);
      heap[outIdx++ >>> 0] = 128 | ((u >> 6) & 63);
      heap[outIdx++ >>> 0] = 128 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      heap[outIdx++ >>> 0] = 240 | (u >> 18);
      heap[outIdx++ >>> 0] = 128 | ((u >> 12) & 63);
      heap[outIdx++ >>> 0] = 128 | ((u >> 6) & 63);
      heap[outIdx++ >>> 0] = 128 | (u & 63);
      i++;
    }
  }
  heap[outIdx >>> 0] = 0;
  return outIdx - startIdx;
};
var intArrayFromString = (stringy, dontAddNull, length) => {
  var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
};
var FS_stdin_getChar = () => {
  if (!FS_stdin_getChar_buffer.length) {
    var result = null;
    if (ENVIRONMENT_IS_NODE) {
      var BUFSIZE = 256;
      var buf = Buffer.alloc(BUFSIZE);
      var bytesRead = 0;
      var fd = process.stdin.fd;
      try {
        bytesRead = fs.readSync(fd, buf, 0, BUFSIZE);
      } catch (e) {
        if (e.toString().includes('EOF')) bytesRead = 0;
        else throw e;
      }
      if (bytesRead > 0) {
        result = buf.slice(0, bytesRead).toString('utf-8');
      }
    } else if (globalThis.window?.prompt) {
      result = window.prompt('Input: ');
      if (result !== null) {
        result += '\\n';
      }
    } else {
    }
    if (!result) {
      return null;
    }
    FS_stdin_getChar_buffer = intArrayFromString(result, true);
  }
  return FS_stdin_getChar_buffer.shift();
};
var TTY = {
  ttys: [],
  init() {},
  shutdown() {},
  register(dev, ops) {
    TTY.ttys[dev] = { input: [], output: [], ops };
    FS.registerDevice(dev, TTY.stream_ops);
  },
  stream_ops: {
    open(stream) {
      var tty = TTY.ttys[stream.node.rdev];
      if (!tty) {
        throw new FS.ErrnoError(43);
      }
      stream.tty = tty;
      stream.seekable = false;
    },
    close(stream) {
      stream.tty.ops.fsync(stream.tty);
    },
    fsync(stream) {
      stream.tty.ops.fsync(stream.tty);
    },
    read(stream, buffer, offset, length, pos) {
      if (!stream.tty || !stream.tty.ops.get_char) {
        throw new FS.ErrnoError(60);
      }
      var bytesRead = 0;
      for (var i = 0; i < length; i++) {
        var result;
        try {
          result = stream.tty.ops.get_char(stream.tty);
        } catch (e) {
          throw new FS.ErrnoError(29);
        }
        if (result === undefined && bytesRead === 0) {
          throw new FS.ErrnoError(6);
        }
        if (result === null || result === undefined) break;
        bytesRead++;
        buffer[offset + i] = result;
      }
      if (bytesRead) {
        stream.node.atime = Date.now();
      }
      return bytesRead;
    },
    write(stream, buffer, offset, length, pos) {
      if (!stream.tty || !stream.tty.ops.put_char) {
        throw new FS.ErrnoError(60);
      }
      try {
        for (var i = 0; i < length; i++) {
          stream.tty.ops.put_char(stream.tty, buffer[offset + i]);
        }
      } catch (e) {
        throw new FS.ErrnoError(29);
      }
      if (length) {
        stream.node.mtime = stream.node.ctime = Date.now();
      }
      return i;
    },
  },
  default_tty_ops: {
    get_char(tty) {
      return FS_stdin_getChar();
    },
    put_char(tty, val) {
      if (val === null || val === 10) {
        out(UTF8ArrayToString(tty.output));
        tty.output = [];
      } else {
        if (val != 0) tty.output.push(val);
      }
    },
    fsync(tty) {
      if (tty.output?.length > 0) {
        out(UTF8ArrayToString(tty.output));
        tty.output = [];
      }
    },
    ioctl_tcgets(tty) {
      return {
        c_iflag: 25856,
        c_oflag: 5,
        c_cflag: 191,
        c_lflag: 35387,
        c_cc: [
          3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
      };
    },
    ioctl_tcsets(tty, optional_actions, data) {
      return 0;
    },
    ioctl_tiocgwinsz(tty) {
      return [24, 80];
    },
  },
  default_tty1_ops: {
    put_char(tty, val) {
      if (val === null || val === 10) {
        err(UTF8ArrayToString(tty.output));
        tty.output = [];
      } else {
        if (val != 0) tty.output.push(val);
      }
    },
    fsync(tty) {
      if (tty.output?.length > 0) {
        err(UTF8ArrayToString(tty.output));
        tty.output = [];
      }
    },
  },
};
var zeroMemory = (ptr, size) =>
  (growMemViews(), HEAPU8).fill(0, ptr, ptr + size);
var alignMemory = (size, alignment) => Math.ceil(size / alignment) * alignment;
var mmapAlloc = (size) => {
  size = alignMemory(size, 65536);
  var ptr = _emscripten_builtin_memalign(65536, size);
  if (ptr) zeroMemory(ptr, size);
  return ptr;
};
var MEMFS = {
  ops_table: null,
  mount(mount) {
    return MEMFS.createNode(null, '/', 16895, 0);
  },
  createNode(parent, name, mode, dev) {
    if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
      throw new FS.ErrnoError(63);
    }
    MEMFS.ops_table ||= {
      dir: {
        node: {
          getattr: MEMFS.node_ops.getattr,
          setattr: MEMFS.node_ops.setattr,
          lookup: MEMFS.node_ops.lookup,
          mknod: MEMFS.node_ops.mknod,
          rename: MEMFS.node_ops.rename,
          unlink: MEMFS.node_ops.unlink,
          rmdir: MEMFS.node_ops.rmdir,
          readdir: MEMFS.node_ops.readdir,
          symlink: MEMFS.node_ops.symlink,
        },
        stream: { llseek: MEMFS.stream_ops.llseek },
      },
      file: {
        node: {
          getattr: MEMFS.node_ops.getattr,
          setattr: MEMFS.node_ops.setattr,
        },
        stream: {
          llseek: MEMFS.stream_ops.llseek,
          read: MEMFS.stream_ops.read,
          write: MEMFS.stream_ops.write,
          mmap: MEMFS.stream_ops.mmap,
          msync: MEMFS.stream_ops.msync,
        },
      },
      link: {
        node: {
          getattr: MEMFS.node_ops.getattr,
          setattr: MEMFS.node_ops.setattr,
          readlink: MEMFS.node_ops.readlink,
        },
        stream: {},
      },
      chrdev: {
        node: {
          getattr: MEMFS.node_ops.getattr,
          setattr: MEMFS.node_ops.setattr,
        },
        stream: FS.chrdev_stream_ops,
      },
    };
    var node = FS.createNode(parent, name, mode, dev);
    if (FS.isDir(node.mode)) {
      node.node_ops = MEMFS.ops_table.dir.node;
      node.stream_ops = MEMFS.ops_table.dir.stream;
      node.contents = {};
    } else if (FS.isFile(node.mode)) {
      node.node_ops = MEMFS.ops_table.file.node;
      node.stream_ops = MEMFS.ops_table.file.stream;
      node.usedBytes = 0;
      node.contents = null;
    } else if (FS.isLink(node.mode)) {
      node.node_ops = MEMFS.ops_table.link.node;
      node.stream_ops = MEMFS.ops_table.link.stream;
    } else if (FS.isChrdev(node.mode)) {
      node.node_ops = MEMFS.ops_table.chrdev.node;
      node.stream_ops = MEMFS.ops_table.chrdev.stream;
    }
    node.atime = node.mtime = node.ctime = Date.now();
    if (parent) {
      parent.contents[name] = node;
      parent.atime = parent.mtime = parent.ctime = node.atime;
    }
    return node;
  },
  getFileDataAsTypedArray(node) {
    if (!node.contents) return new Uint8Array(0);
    if (node.contents.subarray)
      return node.contents.subarray(0, node.usedBytes);
    return new Uint8Array(node.contents);
  },
  expandFileStorage(node, newCapacity) {
    var prevCapacity = node.contents ? node.contents.length : 0;
    if (prevCapacity >= newCapacity) return;
    var CAPACITY_DOUBLING_MAX = 1024 * 1024;
    newCapacity = Math.max(
      newCapacity,
      (prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125)) >>> 0
    );
    if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256);
    var oldContents = node.contents;
    node.contents = new Uint8Array(newCapacity);
    if (node.usedBytes > 0)
      node.contents.set(oldContents.subarray(0, node.usedBytes), 0);
  },
  resizeFileStorage(node, newSize) {
    if (node.usedBytes == newSize) return;
    if (newSize == 0) {
      node.contents = null;
      node.usedBytes = 0;
    } else {
      var oldContents = node.contents;
      node.contents = new Uint8Array(newSize);
      if (oldContents) {
        node.contents.set(
          oldContents.subarray(0, Math.min(newSize, node.usedBytes))
        );
      }
      node.usedBytes = newSize;
    }
  },
  node_ops: {
    getattr(node) {
      var attr = {};
      attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
      attr.ino = node.id;
      attr.mode = node.mode;
      attr.nlink = 1;
      attr.uid = 0;
      attr.gid = 0;
      attr.rdev = node.rdev;
      if (FS.isDir(node.mode)) {
        attr.size = 4096;
      } else if (FS.isFile(node.mode)) {
        attr.size = node.usedBytes;
      } else if (FS.isLink(node.mode)) {
        attr.size = node.link.length;
      } else {
        attr.size = 0;
      }
      attr.atime = new Date(node.atime);
      attr.mtime = new Date(node.mtime);
      attr.ctime = new Date(node.ctime);
      attr.blksize = 4096;
      attr.blocks = Math.ceil(attr.size / attr.blksize);
      return attr;
    },
    setattr(node, attr) {
      for (const key of ['mode', 'atime', 'mtime', 'ctime']) {
        if (attr[key] != null) {
          node[key] = attr[key];
        }
      }
      if (attr.size !== undefined) {
        MEMFS.resizeFileStorage(node, attr.size);
      }
    },
    lookup(parent, name) {
      if (!MEMFS.doesNotExistError) {
        MEMFS.doesNotExistError = new FS.ErrnoError(44);
        MEMFS.doesNotExistError.stack = '<generic error, no stack>';
      }
      throw MEMFS.doesNotExistError;
    },
    mknod(parent, name, mode, dev) {
      return MEMFS.createNode(parent, name, mode, dev);
    },
    rename(old_node, new_dir, new_name) {
      var new_node;
      try {
        new_node = FS.lookupNode(new_dir, new_name);
      } catch (e) {}
      if (new_node) {
        if (FS.isDir(old_node.mode)) {
          for (var i in new_node.contents) {
            throw new FS.ErrnoError(55);
          }
        }
        FS.hashRemoveNode(new_node);
      }
      delete old_node.parent.contents[old_node.name];
      new_dir.contents[new_name] = old_node;
      old_node.name = new_name;
      new_dir.ctime =
        new_dir.mtime =
        old_node.parent.ctime =
        old_node.parent.mtime =
          Date.now();
    },
    unlink(parent, name) {
      delete parent.contents[name];
      parent.ctime = parent.mtime = Date.now();
    },
    rmdir(parent, name) {
      var node = FS.lookupNode(parent, name);
      for (var i in node.contents) {
        throw new FS.ErrnoError(55);
      }
      delete parent.contents[name];
      parent.ctime = parent.mtime = Date.now();
    },
    readdir(node) {
      return ['.', '..', ...Object.keys(node.contents)];
    },
    symlink(parent, newname, oldpath) {
      var node = MEMFS.createNode(parent, newname, 511 | 40960, 0);
      node.link = oldpath;
      return node;
    },
    readlink(node) {
      if (!FS.isLink(node.mode)) {
        throw new FS.ErrnoError(28);
      }
      return node.link;
    },
  },
  stream_ops: {
    read(stream, buffer, offset, length, position) {
      var contents = stream.node.contents;
      if (position >= stream.node.usedBytes) return 0;
      var size = Math.min(stream.node.usedBytes - position, length);
      if (size > 8 && contents.subarray) {
        buffer.set(contents.subarray(position, position + size), offset);
      } else {
        for (var i = 0; i < size; i++)
          buffer[offset + i] = contents[position + i];
      }
      return size;
    },
    write(stream, buffer, offset, length, position, canOwn) {
      if (buffer.buffer === (growMemViews(), HEAP8).buffer) {
        canOwn = false;
      }
      if (!length) return 0;
      var node = stream.node;
      node.mtime = node.ctime = Date.now();
      if (buffer.subarray && (!node.contents || node.contents.subarray)) {
        if (canOwn) {
          node.contents = buffer.subarray(offset, offset + length);
          node.usedBytes = length;
          return length;
        } else if (node.usedBytes === 0 && position === 0) {
          node.contents = buffer.slice(offset, offset + length);
          node.usedBytes = length;
          return length;
        } else if (position + length <= node.usedBytes) {
          node.contents.set(buffer.subarray(offset, offset + length), position);
          return length;
        }
      }
      MEMFS.expandFileStorage(node, position + length);
      if (node.contents.subarray && buffer.subarray) {
        node.contents.set(buffer.subarray(offset, offset + length), position);
      } else {
        for (var i = 0; i < length; i++) {
          node.contents[position + i] = buffer[offset + i];
        }
      }
      node.usedBytes = Math.max(node.usedBytes, position + length);
      return length;
    },
    llseek(stream, offset, whence) {
      var position = offset;
      if (whence === 1) {
        position += stream.position;
      } else if (whence === 2) {
        if (FS.isFile(stream.node.mode)) {
          position += stream.node.usedBytes;
        }
      }
      if (position < 0) {
        throw new FS.ErrnoError(28);
      }
      return position;
    },
    mmap(stream, length, position, prot, flags) {
      if (!FS.isFile(stream.node.mode)) {
        throw new FS.ErrnoError(43);
      }
      var ptr;
      var allocated;
      var contents = stream.node.contents;
      if (
        !(flags & 2) &&
        contents &&
        contents.buffer === (growMemViews(), HEAP8).buffer
      ) {
        allocated = false;
        ptr = contents.byteOffset;
      } else {
        allocated = true;
        ptr = mmapAlloc(length);
        if (!ptr) {
          throw new FS.ErrnoError(48);
        }
        if (contents) {
          if (position > 0 || position + length < contents.length) {
            if (contents.subarray) {
              contents = contents.subarray(position, position + length);
            } else {
              contents = Array.prototype.slice.call(
                contents,
                position,
                position + length
              );
            }
          }
          (growMemViews(), HEAP8).set(contents, ptr >>> 0);
        }
      }
      return { ptr, allocated };
    },
    msync(stream, buffer, offset, length, mmapFlags) {
      MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
      return 0;
    },
  },
};
var FS_modeStringToFlags = (str) => {
  var flagModes = {
    r: 0,
    'r+': 2,
    w: 512 | 64 | 1,
    'w+': 512 | 64 | 2,
    a: 1024 | 64 | 1,
    'a+': 1024 | 64 | 2,
  };
  var flags = flagModes[str];
  if (typeof flags == 'undefined') {
    throw new Error(\`Unknown file open mode: \${str}\`);
  }
  return flags;
};
var FS_getMode = (canRead, canWrite) => {
  var mode = 0;
  if (canRead) mode |= 292 | 73;
  if (canWrite) mode |= 146;
  return mode;
};
var asyncLoad = async (url) => {
  var arrayBuffer = await readAsync(url);
  return new Uint8Array(arrayBuffer);
};
var FS_createDataFile = (...args) => FS.createDataFile(...args);
var getUniqueRunDependency = (id) => id;
var preloadPlugins = [];
var FS_handledByPreloadPlugin = async (byteArray, fullname) => {
  if (typeof Browser != 'undefined') Browser.init();
  for (var plugin of preloadPlugins) {
    if (plugin['canHandle'](fullname)) {
      return plugin['handle'](byteArray, fullname);
    }
  }
  return byteArray;
};
var FS_preloadFile = async (
  parent,
  name,
  url,
  canRead,
  canWrite,
  dontCreateFile,
  canOwn,
  preFinish
) => {
  var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
  var dep = getUniqueRunDependency(\`cp \${fullname}\`);
  addRunDependency(dep);
  try {
    var byteArray = url;
    if (typeof url == 'string') {
      byteArray = await asyncLoad(url);
    }
    byteArray = await FS_handledByPreloadPlugin(byteArray, fullname);
    preFinish?.();
    if (!dontCreateFile) {
      FS_createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
    }
  } finally {
    removeRunDependency(dep);
  }
};
var FS_createPreloadedFile = (
  parent,
  name,
  url,
  canRead,
  canWrite,
  onload,
  onerror,
  dontCreateFile,
  canOwn,
  preFinish
) => {
  FS_preloadFile(
    parent,
    name,
    url,
    canRead,
    canWrite,
    dontCreateFile,
    canOwn,
    preFinish
  )
    .then(onload)
    .catch(onerror);
};
var FS = {
  root: null,
  mounts: [],
  devices: {},
  streams: [],
  nextInode: 1,
  nameTable: null,
  currentPath: '/',
  initialized: false,
  ignorePermissions: true,
  filesystems: null,
  syncFSRequests: 0,
  readFiles: {},
  ErrnoError: class {
    name = 'ErrnoError';
    constructor(errno) {
      this.errno = errno;
    }
  },
  FSStream: class {
    shared = {};
    get object() {
      return this.node;
    }
    set object(val) {
      this.node = val;
    }
    get isRead() {
      return (this.flags & 2097155) !== 1;
    }
    get isWrite() {
      return (this.flags & 2097155) !== 0;
    }
    get isAppend() {
      return this.flags & 1024;
    }
    get flags() {
      return this.shared.flags;
    }
    set flags(val) {
      this.shared.flags = val;
    }
    get position() {
      return this.shared.position;
    }
    set position(val) {
      this.shared.position = val;
    }
  },
  FSNode: class {
    node_ops = {};
    stream_ops = {};
    readMode = 292 | 73;
    writeMode = 146;
    mounted = null;
    constructor(parent, name, mode, rdev) {
      if (!parent) {
        parent = this;
      }
      this.parent = parent;
      this.mount = parent.mount;
      this.id = FS.nextInode++;
      this.name = name;
      this.mode = mode;
      this.rdev = rdev;
      this.atime = this.mtime = this.ctime = Date.now();
    }
    get read() {
      return (this.mode & this.readMode) === this.readMode;
    }
    set read(val) {
      val ? (this.mode |= this.readMode) : (this.mode &= ~this.readMode);
    }
    get write() {
      return (this.mode & this.writeMode) === this.writeMode;
    }
    set write(val) {
      val ? (this.mode |= this.writeMode) : (this.mode &= ~this.writeMode);
    }
    get isFolder() {
      return FS.isDir(this.mode);
    }
    get isDevice() {
      return FS.isChrdev(this.mode);
    }
  },
  lookupPath(path, opts = {}) {
    if (!path) {
      throw new FS.ErrnoError(44);
    }
    opts.follow_mount ??= true;
    if (!PATH.isAbs(path)) {
      path = FS.cwd() + '/' + path;
    }
    linkloop: for (var nlinks = 0; nlinks < 40; nlinks++) {
      var parts = path.split('/').filter((p) => !!p);
      var current = FS.root;
      var current_path = '/';
      for (var i = 0; i < parts.length; i++) {
        var islast = i === parts.length - 1;
        if (islast && opts.parent) {
          break;
        }
        if (parts[i] === '.') {
          continue;
        }
        if (parts[i] === '..') {
          current_path = PATH.dirname(current_path);
          if (FS.isRoot(current)) {
            path = current_path + '/' + parts.slice(i + 1).join('/');
            nlinks--;
            continue linkloop;
          } else {
            current = current.parent;
          }
          continue;
        }
        current_path = PATH.join2(current_path, parts[i]);
        try {
          current = FS.lookupNode(current, parts[i]);
        } catch (e) {
          if (e?.errno === 44 && islast && opts.noent_okay) {
            return { path: current_path };
          }
          throw e;
        }
        if (FS.isMountpoint(current) && (!islast || opts.follow_mount)) {
          current = current.mounted.root;
        }
        if (FS.isLink(current.mode) && (!islast || opts.follow)) {
          if (!current.node_ops.readlink) {
            throw new FS.ErrnoError(52);
          }
          var link = current.node_ops.readlink(current);
          if (!PATH.isAbs(link)) {
            link = PATH.dirname(current_path) + '/' + link;
          }
          path = link + '/' + parts.slice(i + 1).join('/');
          continue linkloop;
        }
      }
      return { path: current_path, node: current };
    }
    throw new FS.ErrnoError(32);
  },
  getPath(node) {
    var path;
    while (true) {
      if (FS.isRoot(node)) {
        var mount = node.mount.mountpoint;
        if (!path) return mount;
        return mount[mount.length - 1] !== '/'
          ? \`\${mount}/\${path}\`
          : mount + path;
      }
      path = path ? \`\${node.name}/\${path}\` : node.name;
      node = node.parent;
    }
  },
  hashName(parentid, name) {
    var hash = 0;
    for (var i = 0; i < name.length; i++) {
      hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
    }
    return ((parentid + hash) >>> 0) % FS.nameTable.length;
  },
  hashAddNode(node) {
    var hash = FS.hashName(node.parent.id, node.name);
    node.name_next = FS.nameTable[hash];
    FS.nameTable[hash] = node;
  },
  hashRemoveNode(node) {
    var hash = FS.hashName(node.parent.id, node.name);
    if (FS.nameTable[hash] === node) {
      FS.nameTable[hash] = node.name_next;
    } else {
      var current = FS.nameTable[hash];
      while (current) {
        if (current.name_next === node) {
          current.name_next = node.name_next;
          break;
        }
        current = current.name_next;
      }
    }
  },
  lookupNode(parent, name) {
    var errCode = FS.mayLookup(parent);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    var hash = FS.hashName(parent.id, name);
    for (var node = FS.nameTable[hash]; node; node = node.name_next) {
      var nodeName = node.name;
      if (node.parent.id === parent.id && nodeName === name) {
        return node;
      }
    }
    return FS.lookup(parent, name);
  },
  createNode(parent, name, mode, rdev) {
    var node = new FS.FSNode(parent, name, mode, rdev);
    FS.hashAddNode(node);
    return node;
  },
  destroyNode(node) {
    FS.hashRemoveNode(node);
  },
  isRoot(node) {
    return node === node.parent;
  },
  isMountpoint(node) {
    return !!node.mounted;
  },
  isFile(mode) {
    return (mode & 61440) === 32768;
  },
  isDir(mode) {
    return (mode & 61440) === 16384;
  },
  isLink(mode) {
    return (mode & 61440) === 40960;
  },
  isChrdev(mode) {
    return (mode & 61440) === 8192;
  },
  isBlkdev(mode) {
    return (mode & 61440) === 24576;
  },
  isFIFO(mode) {
    return (mode & 61440) === 4096;
  },
  isSocket(mode) {
    return (mode & 49152) === 49152;
  },
  flagsToPermissionString(flag) {
    var perms = ['r', 'w', 'rw'][flag & 3];
    if (flag & 512) {
      perms += 'w';
    }
    return perms;
  },
  nodePermissions(node, perms) {
    if (FS.ignorePermissions) {
      return 0;
    }
    if (perms.includes('r') && !(node.mode & 292)) {
      return 2;
    } else if (perms.includes('w') && !(node.mode & 146)) {
      return 2;
    } else if (perms.includes('x') && !(node.mode & 73)) {
      return 2;
    }
    return 0;
  },
  mayLookup(dir) {
    if (!FS.isDir(dir.mode)) return 54;
    var errCode = FS.nodePermissions(dir, 'x');
    if (errCode) return errCode;
    if (!dir.node_ops.lookup) return 2;
    return 0;
  },
  mayCreate(dir, name) {
    if (!FS.isDir(dir.mode)) {
      return 54;
    }
    try {
      var node = FS.lookupNode(dir, name);
      return 20;
    } catch (e) {}
    return FS.nodePermissions(dir, 'wx');
  },
  mayDelete(dir, name, isdir) {
    var node;
    try {
      node = FS.lookupNode(dir, name);
    } catch (e) {
      return e.errno;
    }
    var errCode = FS.nodePermissions(dir, 'wx');
    if (errCode) {
      return errCode;
    }
    if (isdir) {
      if (!FS.isDir(node.mode)) {
        return 54;
      }
      if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
        return 10;
      }
    } else {
      if (FS.isDir(node.mode)) {
        return 31;
      }
    }
    return 0;
  },
  mayOpen(node, flags) {
    if (!node) {
      return 44;
    }
    if (FS.isLink(node.mode)) {
      return 32;
    } else if (FS.isDir(node.mode)) {
      if (FS.flagsToPermissionString(flags) !== 'r' || flags & (512 | 64)) {
        return 31;
      }
    }
    return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
  },
  checkOpExists(op, err) {
    if (!op) {
      throw new FS.ErrnoError(err);
    }
    return op;
  },
  MAX_OPEN_FDS: 4096,
  nextfd() {
    for (var fd = 0; fd <= FS.MAX_OPEN_FDS; fd++) {
      if (!FS.streams[fd]) {
        return fd;
      }
    }
    throw new FS.ErrnoError(33);
  },
  getStreamChecked(fd) {
    var stream = FS.getStream(fd);
    if (!stream) {
      throw new FS.ErrnoError(8);
    }
    return stream;
  },
  getStream: (fd) => FS.streams[fd],
  createStream(stream, fd = -1) {
    stream = Object.assign(new FS.FSStream(), stream);
    if (fd == -1) {
      fd = FS.nextfd();
    }
    stream.fd = fd;
    FS.streams[fd] = stream;
    return stream;
  },
  closeStream(fd) {
    FS.streams[fd] = null;
  },
  dupStream(origStream, fd = -1) {
    var stream = FS.createStream(origStream, fd);
    stream.stream_ops?.dup?.(stream);
    return stream;
  },
  doSetAttr(stream, node, attr) {
    var setattr = stream?.stream_ops.setattr;
    var arg = setattr ? stream : node;
    setattr ??= node.node_ops.setattr;
    FS.checkOpExists(setattr, 63);
    setattr(arg, attr);
  },
  chrdev_stream_ops: {
    open(stream) {
      var device = FS.getDevice(stream.node.rdev);
      stream.stream_ops = device.stream_ops;
      stream.stream_ops.open?.(stream);
    },
    llseek() {
      throw new FS.ErrnoError(70);
    },
  },
  major: (dev) => dev >> 8,
  minor: (dev) => dev & 255,
  makedev: (ma, mi) => (ma << 8) | mi,
  registerDevice(dev, ops) {
    FS.devices[dev] = { stream_ops: ops };
  },
  getDevice: (dev) => FS.devices[dev],
  getMounts(mount) {
    var mounts = [];
    var check = [mount];
    while (check.length) {
      var m = check.pop();
      mounts.push(m);
      check.push(...m.mounts);
    }
    return mounts;
  },
  syncfs(populate, callback) {
    if (typeof populate == 'function') {
      callback = populate;
      populate = false;
    }
    FS.syncFSRequests++;
    if (FS.syncFSRequests > 1) {
      err(
        \`warning: \${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work\`
      );
    }
    var mounts = FS.getMounts(FS.root.mount);
    var completed = 0;
    function doCallback(errCode) {
      FS.syncFSRequests--;
      return callback(errCode);
    }
    function done(errCode) {
      if (errCode) {
        if (!done.errored) {
          done.errored = true;
          return doCallback(errCode);
        }
        return;
      }
      if (++completed >= mounts.length) {
        doCallback(null);
      }
    }
    for (var mount of mounts) {
      if (mount.type.syncfs) {
        mount.type.syncfs(mount, populate, done);
      } else {
        done(null);
      }
    }
  },
  mount(type, opts, mountpoint) {
    var root = mountpoint === '/';
    var pseudo = !mountpoint;
    var node;
    if (root && FS.root) {
      throw new FS.ErrnoError(10);
    } else if (!root && !pseudo) {
      var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
      mountpoint = lookup.path;
      node = lookup.node;
      if (FS.isMountpoint(node)) {
        throw new FS.ErrnoError(10);
      }
      if (!FS.isDir(node.mode)) {
        throw new FS.ErrnoError(54);
      }
    }
    var mount = { type, opts, mountpoint, mounts: [] };
    var mountRoot = type.mount(mount);
    mountRoot.mount = mount;
    mount.root = mountRoot;
    if (root) {
      FS.root = mountRoot;
    } else if (node) {
      node.mounted = mount;
      if (node.mount) {
        node.mount.mounts.push(mount);
      }
    }
    return mountRoot;
  },
  unmount(mountpoint) {
    var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
    if (!FS.isMountpoint(lookup.node)) {
      throw new FS.ErrnoError(28);
    }
    var node = lookup.node;
    var mount = node.mounted;
    var mounts = FS.getMounts(mount);
    for (var [hash, current] of Object.entries(FS.nameTable)) {
      while (current) {
        var next = current.name_next;
        if (mounts.includes(current.mount)) {
          FS.destroyNode(current);
        }
        current = next;
      }
    }
    node.mounted = null;
    var idx = node.mount.mounts.indexOf(mount);
    node.mount.mounts.splice(idx, 1);
  },
  lookup(parent, name) {
    return parent.node_ops.lookup(parent, name);
  },
  mknod(path, mode, dev) {
    var lookup = FS.lookupPath(path, { parent: true });
    var parent = lookup.node;
    var name = PATH.basename(path);
    if (!name) {
      throw new FS.ErrnoError(28);
    }
    if (name === '.' || name === '..') {
      throw new FS.ErrnoError(20);
    }
    var errCode = FS.mayCreate(parent, name);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    if (!parent.node_ops.mknod) {
      throw new FS.ErrnoError(63);
    }
    return parent.node_ops.mknod(parent, name, mode, dev);
  },
  statfs(path) {
    return FS.statfsNode(FS.lookupPath(path, { follow: true }).node);
  },
  statfsStream(stream) {
    return FS.statfsNode(stream.node);
  },
  statfsNode(node) {
    var rtn = {
      bsize: 4096,
      frsize: 4096,
      blocks: 1e6,
      bfree: 5e5,
      bavail: 5e5,
      files: FS.nextInode,
      ffree: FS.nextInode - 1,
      fsid: 42,
      flags: 2,
      namelen: 255,
    };
    if (node.node_ops.statfs) {
      Object.assign(rtn, node.node_ops.statfs(node.mount.opts.root));
    }
    return rtn;
  },
  create(path, mode = 438) {
    mode &= 4095;
    mode |= 32768;
    return FS.mknod(path, mode, 0);
  },
  mkdir(path, mode = 511) {
    mode &= 511 | 512;
    mode |= 16384;
    return FS.mknod(path, mode, 0);
  },
  mkdirTree(path, mode) {
    var dirs = path.split('/');
    var d = '';
    for (var dir of dirs) {
      if (!dir) continue;
      if (d || PATH.isAbs(path)) d += '/';
      d += dir;
      try {
        FS.mkdir(d, mode);
      } catch (e) {
        if (e.errno != 20) throw e;
      }
    }
  },
  mkdev(path, mode, dev) {
    if (typeof dev == 'undefined') {
      dev = mode;
      mode = 438;
    }
    mode |= 8192;
    return FS.mknod(path, mode, dev);
  },
  symlink(oldpath, newpath) {
    if (!PATH_FS.resolve(oldpath)) {
      throw new FS.ErrnoError(44);
    }
    var lookup = FS.lookupPath(newpath, { parent: true });
    var parent = lookup.node;
    if (!parent) {
      throw new FS.ErrnoError(44);
    }
    var newname = PATH.basename(newpath);
    var errCode = FS.mayCreate(parent, newname);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    if (!parent.node_ops.symlink) {
      throw new FS.ErrnoError(63);
    }
    return parent.node_ops.symlink(parent, newname, oldpath);
  },
  rename(old_path, new_path) {
    var old_dirname = PATH.dirname(old_path);
    var new_dirname = PATH.dirname(new_path);
    var old_name = PATH.basename(old_path);
    var new_name = PATH.basename(new_path);
    var lookup, old_dir, new_dir;
    lookup = FS.lookupPath(old_path, { parent: true });
    old_dir = lookup.node;
    lookup = FS.lookupPath(new_path, { parent: true });
    new_dir = lookup.node;
    if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
    if (old_dir.mount !== new_dir.mount) {
      throw new FS.ErrnoError(75);
    }
    var old_node = FS.lookupNode(old_dir, old_name);
    var relative = PATH_FS.relative(old_path, new_dirname);
    if (relative.charAt(0) !== '.') {
      throw new FS.ErrnoError(28);
    }
    relative = PATH_FS.relative(new_path, old_dirname);
    if (relative.charAt(0) !== '.') {
      throw new FS.ErrnoError(55);
    }
    var new_node;
    try {
      new_node = FS.lookupNode(new_dir, new_name);
    } catch (e) {}
    if (old_node === new_node) {
      return;
    }
    var isdir = FS.isDir(old_node.mode);
    var errCode = FS.mayDelete(old_dir, old_name, isdir);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    errCode = new_node
      ? FS.mayDelete(new_dir, new_name, isdir)
      : FS.mayCreate(new_dir, new_name);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    if (!old_dir.node_ops.rename) {
      throw new FS.ErrnoError(63);
    }
    if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
      throw new FS.ErrnoError(10);
    }
    if (new_dir !== old_dir) {
      errCode = FS.nodePermissions(old_dir, 'w');
      if (errCode) {
        throw new FS.ErrnoError(errCode);
      }
    }
    FS.hashRemoveNode(old_node);
    try {
      old_dir.node_ops.rename(old_node, new_dir, new_name);
      old_node.parent = new_dir;
    } catch (e) {
      throw e;
    } finally {
      FS.hashAddNode(old_node);
    }
  },
  rmdir(path) {
    var lookup = FS.lookupPath(path, { parent: true });
    var parent = lookup.node;
    var name = PATH.basename(path);
    var node = FS.lookupNode(parent, name);
    var errCode = FS.mayDelete(parent, name, true);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    if (!parent.node_ops.rmdir) {
      throw new FS.ErrnoError(63);
    }
    if (FS.isMountpoint(node)) {
      throw new FS.ErrnoError(10);
    }
    parent.node_ops.rmdir(parent, name);
    FS.destroyNode(node);
  },
  readdir(path) {
    var lookup = FS.lookupPath(path, { follow: true });
    var node = lookup.node;
    var readdir = FS.checkOpExists(node.node_ops.readdir, 54);
    return readdir(node);
  },
  unlink(path) {
    var lookup = FS.lookupPath(path, { parent: true });
    var parent = lookup.node;
    if (!parent) {
      throw new FS.ErrnoError(44);
    }
    var name = PATH.basename(path);
    var node = FS.lookupNode(parent, name);
    var errCode = FS.mayDelete(parent, name, false);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    if (!parent.node_ops.unlink) {
      throw new FS.ErrnoError(63);
    }
    if (FS.isMountpoint(node)) {
      throw new FS.ErrnoError(10);
    }
    parent.node_ops.unlink(parent, name);
    FS.destroyNode(node);
  },
  readlink(path) {
    var lookup = FS.lookupPath(path);
    var link = lookup.node;
    if (!link) {
      throw new FS.ErrnoError(44);
    }
    if (!link.node_ops.readlink) {
      throw new FS.ErrnoError(28);
    }
    return link.node_ops.readlink(link);
  },
  stat(path, dontFollow) {
    var lookup = FS.lookupPath(path, { follow: !dontFollow });
    var node = lookup.node;
    var getattr = FS.checkOpExists(node.node_ops.getattr, 63);
    return getattr(node);
  },
  fstat(fd) {
    var stream = FS.getStreamChecked(fd);
    var node = stream.node;
    var getattr = stream.stream_ops.getattr;
    var arg = getattr ? stream : node;
    getattr ??= node.node_ops.getattr;
    FS.checkOpExists(getattr, 63);
    return getattr(arg);
  },
  lstat(path) {
    return FS.stat(path, true);
  },
  doChmod(stream, node, mode, dontFollow) {
    FS.doSetAttr(stream, node, {
      mode: (mode & 4095) | (node.mode & ~4095),
      ctime: Date.now(),
      dontFollow,
    });
  },
  chmod(path, mode, dontFollow) {
    var node;
    if (typeof path == 'string') {
      var lookup = FS.lookupPath(path, { follow: !dontFollow });
      node = lookup.node;
    } else {
      node = path;
    }
    FS.doChmod(null, node, mode, dontFollow);
  },
  lchmod(path, mode) {
    FS.chmod(path, mode, true);
  },
  fchmod(fd, mode) {
    var stream = FS.getStreamChecked(fd);
    FS.doChmod(stream, stream.node, mode, false);
  },
  doChown(stream, node, dontFollow) {
    FS.doSetAttr(stream, node, { timestamp: Date.now(), dontFollow });
  },
  chown(path, uid, gid, dontFollow) {
    var node;
    if (typeof path == 'string') {
      var lookup = FS.lookupPath(path, { follow: !dontFollow });
      node = lookup.node;
    } else {
      node = path;
    }
    FS.doChown(null, node, dontFollow);
  },
  lchown(path, uid, gid) {
    FS.chown(path, uid, gid, true);
  },
  fchown(fd, uid, gid) {
    var stream = FS.getStreamChecked(fd);
    FS.doChown(stream, stream.node, false);
  },
  doTruncate(stream, node, len) {
    if (FS.isDir(node.mode)) {
      throw new FS.ErrnoError(31);
    }
    if (!FS.isFile(node.mode)) {
      throw new FS.ErrnoError(28);
    }
    var errCode = FS.nodePermissions(node, 'w');
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    FS.doSetAttr(stream, node, { size: len, timestamp: Date.now() });
  },
  truncate(path, len) {
    if (len < 0) {
      throw new FS.ErrnoError(28);
    }
    var node;
    if (typeof path == 'string') {
      var lookup = FS.lookupPath(path, { follow: true });
      node = lookup.node;
    } else {
      node = path;
    }
    FS.doTruncate(null, node, len);
  },
  ftruncate(fd, len) {
    var stream = FS.getStreamChecked(fd);
    if (len < 0 || (stream.flags & 2097155) === 0) {
      throw new FS.ErrnoError(28);
    }
    FS.doTruncate(stream, stream.node, len);
  },
  utime(path, atime, mtime) {
    var lookup = FS.lookupPath(path, { follow: true });
    var node = lookup.node;
    var setattr = FS.checkOpExists(node.node_ops.setattr, 63);
    setattr(node, { atime, mtime });
  },
  open(path, flags, mode = 438) {
    if (path === '') {
      throw new FS.ErrnoError(44);
    }
    flags = typeof flags == 'string' ? FS_modeStringToFlags(flags) : flags;
    if (flags & 64) {
      mode = (mode & 4095) | 32768;
    } else {
      mode = 0;
    }
    var node;
    var isDirPath;
    if (typeof path == 'object') {
      node = path;
    } else {
      isDirPath = path.endsWith('/');
      var lookup = FS.lookupPath(path, {
        follow: !(flags & 131072),
        noent_okay: true,
      });
      node = lookup.node;
      path = lookup.path;
    }
    var created = false;
    if (flags & 64) {
      if (node) {
        if (flags & 128) {
          throw new FS.ErrnoError(20);
        }
      } else if (isDirPath) {
        throw new FS.ErrnoError(31);
      } else {
        node = FS.mknod(path, mode | 511, 0);
        created = true;
      }
    }
    if (!node) {
      throw new FS.ErrnoError(44);
    }
    if (FS.isChrdev(node.mode)) {
      flags &= ~512;
    }
    if (flags & 65536 && !FS.isDir(node.mode)) {
      throw new FS.ErrnoError(54);
    }
    if (!created) {
      var errCode = FS.mayOpen(node, flags);
      if (errCode) {
        throw new FS.ErrnoError(errCode);
      }
    }
    if (flags & 512 && !created) {
      FS.truncate(node, 0);
    }
    flags &= ~(128 | 512 | 131072);
    var stream = FS.createStream({
      node,
      path: FS.getPath(node),
      flags,
      seekable: true,
      position: 0,
      stream_ops: node.stream_ops,
      ungotten: [],
      error: false,
    });
    if (stream.stream_ops.open) {
      stream.stream_ops.open(stream);
    }
    if (created) {
      FS.chmod(node, mode & 511);
    }
    if (Module['logReadFiles'] && !(flags & 1)) {
      if (!(path in FS.readFiles)) {
        FS.readFiles[path] = 1;
      }
    }
    return stream;
  },
  close(stream) {
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(8);
    }
    if (stream.getdents) stream.getdents = null;
    try {
      if (stream.stream_ops.close) {
        stream.stream_ops.close(stream);
      }
    } catch (e) {
      throw e;
    } finally {
      FS.closeStream(stream.fd);
    }
    stream.fd = null;
  },
  isClosed(stream) {
    return stream.fd === null;
  },
  llseek(stream, offset, whence) {
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(8);
    }
    if (!stream.seekable || !stream.stream_ops.llseek) {
      throw new FS.ErrnoError(70);
    }
    if (whence != 0 && whence != 1 && whence != 2) {
      throw new FS.ErrnoError(28);
    }
    stream.position = stream.stream_ops.llseek(stream, offset, whence);
    stream.ungotten = [];
    return stream.position;
  },
  read(stream, buffer, offset, length, position) {
    if (length < 0 || position < 0) {
      throw new FS.ErrnoError(28);
    }
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(8);
    }
    if ((stream.flags & 2097155) === 1) {
      throw new FS.ErrnoError(8);
    }
    if (FS.isDir(stream.node.mode)) {
      throw new FS.ErrnoError(31);
    }
    if (!stream.stream_ops.read) {
      throw new FS.ErrnoError(28);
    }
    var seeking = typeof position != 'undefined';
    if (!seeking) {
      position = stream.position;
    } else if (!stream.seekable) {
      throw new FS.ErrnoError(70);
    }
    var bytesRead = stream.stream_ops.read(
      stream,
      buffer,
      offset,
      length,
      position
    );
    if (!seeking) stream.position += bytesRead;
    return bytesRead;
  },
  write(stream, buffer, offset, length, position, canOwn) {
    if (length < 0 || position < 0) {
      throw new FS.ErrnoError(28);
    }
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(8);
    }
    if ((stream.flags & 2097155) === 0) {
      throw new FS.ErrnoError(8);
    }
    if (FS.isDir(stream.node.mode)) {
      throw new FS.ErrnoError(31);
    }
    if (!stream.stream_ops.write) {
      throw new FS.ErrnoError(28);
    }
    if (stream.seekable && stream.flags & 1024) {
      FS.llseek(stream, 0, 2);
    }
    var seeking = typeof position != 'undefined';
    if (!seeking) {
      position = stream.position;
    } else if (!stream.seekable) {
      throw new FS.ErrnoError(70);
    }
    var bytesWritten = stream.stream_ops.write(
      stream,
      buffer,
      offset,
      length,
      position,
      canOwn
    );
    if (!seeking) stream.position += bytesWritten;
    return bytesWritten;
  },
  mmap(stream, length, position, prot, flags) {
    if (
      (prot & 2) !== 0 &&
      (flags & 2) === 0 &&
      (stream.flags & 2097155) !== 2
    ) {
      throw new FS.ErrnoError(2);
    }
    if ((stream.flags & 2097155) === 1) {
      throw new FS.ErrnoError(2);
    }
    if (!stream.stream_ops.mmap) {
      throw new FS.ErrnoError(43);
    }
    if (!length) {
      throw new FS.ErrnoError(28);
    }
    return stream.stream_ops.mmap(stream, length, position, prot, flags);
  },
  msync(stream, buffer, offset, length, mmapFlags) {
    if (!stream.stream_ops.msync) {
      return 0;
    }
    return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
  },
  ioctl(stream, cmd, arg) {
    if (!stream.stream_ops.ioctl) {
      throw new FS.ErrnoError(59);
    }
    return stream.stream_ops.ioctl(stream, cmd, arg);
  },
  readFile(path, opts = {}) {
    opts.flags = opts.flags || 0;
    opts.encoding = opts.encoding || 'binary';
    if (opts.encoding !== 'utf8' && opts.encoding !== 'binary') {
      abort(\`Invalid encoding type "\${opts.encoding}"\`);
    }
    var stream = FS.open(path, opts.flags);
    var stat = FS.stat(path);
    var length = stat.size;
    var buf = new Uint8Array(length);
    FS.read(stream, buf, 0, length, 0);
    if (opts.encoding === 'utf8') {
      buf = UTF8ArrayToString(buf);
    }
    FS.close(stream);
    return buf;
  },
  writeFile(path, data, opts = {}) {
    opts.flags = opts.flags || 577;
    var stream = FS.open(path, opts.flags, opts.mode);
    if (typeof data == 'string') {
      data = new Uint8Array(intArrayFromString(data, true));
    }
    if (ArrayBuffer.isView(data)) {
      FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
    } else {
      abort('Unsupported data type');
    }
    FS.close(stream);
  },
  cwd: () => FS.currentPath,
  chdir(path) {
    var lookup = FS.lookupPath(path, { follow: true });
    if (lookup.node === null) {
      throw new FS.ErrnoError(44);
    }
    if (!FS.isDir(lookup.node.mode)) {
      throw new FS.ErrnoError(54);
    }
    var errCode = FS.nodePermissions(lookup.node, 'x');
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    FS.currentPath = lookup.path;
  },
  createDefaultDirectories() {
    FS.mkdir('/tmp');
    FS.mkdir('/home');
    FS.mkdir('/home/web_user');
  },
  createDefaultDevices() {
    FS.mkdir('/dev');
    FS.registerDevice(FS.makedev(1, 3), {
      read: () => 0,
      write: (stream, buffer, offset, length, pos) => length,
      llseek: () => 0,
    });
    FS.mkdev('/dev/null', FS.makedev(1, 3));
    TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
    TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
    FS.mkdev('/dev/tty', FS.makedev(5, 0));
    FS.mkdev('/dev/tty1', FS.makedev(6, 0));
    var randomBuffer = new Uint8Array(1024),
      randomLeft = 0;
    var randomByte = () => {
      if (randomLeft === 0) {
        randomFill(randomBuffer);
        randomLeft = randomBuffer.byteLength;
      }
      return randomBuffer[--randomLeft];
    };
    FS.createDevice('/dev', 'random', randomByte);
    FS.createDevice('/dev', 'urandom', randomByte);
    FS.mkdir('/dev/shm');
    FS.mkdir('/dev/shm/tmp');
  },
  createSpecialDirectories() {
    FS.mkdir('/proc');
    var proc_self = FS.mkdir('/proc/self');
    FS.mkdir('/proc/self/fd');
    FS.mount(
      {
        mount() {
          var node = FS.createNode(proc_self, 'fd', 16895, 73);
          node.stream_ops = { llseek: MEMFS.stream_ops.llseek };
          node.node_ops = {
            lookup(parent, name) {
              var fd = +name;
              var stream = FS.getStreamChecked(fd);
              var ret = {
                parent: null,
                mount: { mountpoint: 'fake' },
                node_ops: { readlink: () => stream.path },
                id: fd + 1,
              };
              ret.parent = ret;
              return ret;
            },
            readdir() {
              return Array.from(FS.streams.entries())
                .filter(([k, v]) => v)
                .map(([k, v]) => k.toString());
            },
          };
          return node;
        },
      },
      {},
      '/proc/self/fd'
    );
  },
  createStandardStreams(input, output, error) {
    if (input) {
      FS.createDevice('/dev', 'stdin', input);
    } else {
      FS.symlink('/dev/tty', '/dev/stdin');
    }
    if (output) {
      FS.createDevice('/dev', 'stdout', null, output);
    } else {
      FS.symlink('/dev/tty', '/dev/stdout');
    }
    if (error) {
      FS.createDevice('/dev', 'stderr', null, error);
    } else {
      FS.symlink('/dev/tty1', '/dev/stderr');
    }
    var stdin = FS.open('/dev/stdin', 0);
    var stdout = FS.open('/dev/stdout', 1);
    var stderr = FS.open('/dev/stderr', 1);
  },
  staticInit() {
    FS.nameTable = new Array(4096);
    FS.mount(MEMFS, {}, '/');
    FS.createDefaultDirectories();
    FS.createDefaultDevices();
    FS.createSpecialDirectories();
    FS.filesystems = { MEMFS };
  },
  init(input, output, error) {
    FS.initialized = true;
    input ??= Module['stdin'];
    output ??= Module['stdout'];
    error ??= Module['stderr'];
    FS.createStandardStreams(input, output, error);
  },
  quit() {
    FS.initialized = false;
    for (var stream of FS.streams) {
      if (stream) {
        FS.close(stream);
      }
    }
  },
  findObject(path, dontResolveLastLink) {
    var ret = FS.analyzePath(path, dontResolveLastLink);
    if (!ret.exists) {
      return null;
    }
    return ret.object;
  },
  analyzePath(path, dontResolveLastLink) {
    try {
      var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
      path = lookup.path;
    } catch (e) {}
    var ret = {
      isRoot: false,
      exists: false,
      error: 0,
      name: null,
      path: null,
      object: null,
      parentExists: false,
      parentPath: null,
      parentObject: null,
    };
    try {
      var lookup = FS.lookupPath(path, { parent: true });
      ret.parentExists = true;
      ret.parentPath = lookup.path;
      ret.parentObject = lookup.node;
      ret.name = PATH.basename(path);
      lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
      ret.exists = true;
      ret.path = lookup.path;
      ret.object = lookup.node;
      ret.name = lookup.node.name;
      ret.isRoot = lookup.path === '/';
    } catch (e) {
      ret.error = e.errno;
    }
    return ret;
  },
  createPath(parent, path, canRead, canWrite) {
    parent = typeof parent == 'string' ? parent : FS.getPath(parent);
    var parts = path.split('/').reverse();
    while (parts.length) {
      var part = parts.pop();
      if (!part) continue;
      var current = PATH.join2(parent, part);
      try {
        FS.mkdir(current);
      } catch (e) {
        if (e.errno != 20) throw e;
      }
      parent = current;
    }
    return current;
  },
  createFile(parent, name, properties, canRead, canWrite) {
    var path = PATH.join2(
      typeof parent == 'string' ? parent : FS.getPath(parent),
      name
    );
    var mode = FS_getMode(canRead, canWrite);
    return FS.create(path, mode);
  },
  createDataFile(parent, name, data, canRead, canWrite, canOwn) {
    var path = name;
    if (parent) {
      parent = typeof parent == 'string' ? parent : FS.getPath(parent);
      path = name ? PATH.join2(parent, name) : parent;
    }
    var mode = FS_getMode(canRead, canWrite);
    var node = FS.create(path, mode);
    if (data) {
      if (typeof data == 'string') {
        var arr = new Array(data.length);
        for (var i = 0, len = data.length; i < len; ++i)
          arr[i] = data.charCodeAt(i);
        data = arr;
      }
      FS.chmod(node, mode | 146);
      var stream = FS.open(node, 577);
      FS.write(stream, data, 0, data.length, 0, canOwn);
      FS.close(stream);
      FS.chmod(node, mode);
    }
  },
  createDevice(parent, name, input, output) {
    var path = PATH.join2(
      typeof parent == 'string' ? parent : FS.getPath(parent),
      name
    );
    var mode = FS_getMode(!!input, !!output);
    FS.createDevice.major ??= 64;
    var dev = FS.makedev(FS.createDevice.major++, 0);
    FS.registerDevice(dev, {
      open(stream) {
        stream.seekable = false;
      },
      close(stream) {
        if (output?.buffer?.length) {
          output(10);
        }
      },
      read(stream, buffer, offset, length, pos) {
        var bytesRead = 0;
        for (var i = 0; i < length; i++) {
          var result;
          try {
            result = input();
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (result === undefined && bytesRead === 0) {
            throw new FS.ErrnoError(6);
          }
          if (result === null || result === undefined) break;
          bytesRead++;
          buffer[offset + i] = result;
        }
        if (bytesRead) {
          stream.node.atime = Date.now();
        }
        return bytesRead;
      },
      write(stream, buffer, offset, length, pos) {
        for (var i = 0; i < length; i++) {
          try {
            output(buffer[offset + i]);
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
        }
        if (length) {
          stream.node.mtime = stream.node.ctime = Date.now();
        }
        return i;
      },
    });
    return FS.mkdev(path, mode, dev);
  },
  forceLoadFile(obj) {
    if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
    if (globalThis.XMLHttpRequest) {
      abort(
        'Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.'
      );
    } else {
      try {
        obj.contents = readBinary(obj.url);
      } catch (e) {
        throw new FS.ErrnoError(29);
      }
    }
  },
  createLazyFile(parent, name, url, canRead, canWrite) {
    class LazyUint8Array {
      lengthKnown = false;
      chunks = [];
      get(idx) {
        if (idx > this.length - 1 || idx < 0) {
          return undefined;
        }
        var chunkOffset = idx % this.chunkSize;
        var chunkNum = (idx / this.chunkSize) | 0;
        return this.getter(chunkNum)[chunkOffset];
      }
      setDataGetter(getter) {
        this.getter = getter;
      }
      cacheLength() {
        var xhr = new XMLHttpRequest();
        xhr.open('HEAD', url, false);
        xhr.send(null);
        if (!((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304))
          abort("Couldn't load " + url + '. Status: ' + xhr.status);
        var datalength = Number(xhr.getResponseHeader('Content-length'));
        var header;
        var hasByteServing =
          (header = xhr.getResponseHeader('Accept-Ranges')) &&
          header === 'bytes';
        var usesGzip =
          (header = xhr.getResponseHeader('Content-Encoding')) &&
          header === 'gzip';
        var chunkSize = 1024 * 1024;
        if (!hasByteServing) chunkSize = datalength;
        var doXHR = (from, to) => {
          if (from > to)
            abort(
              'invalid range (' + from + ', ' + to + ') or no bytes requested!'
            );
          if (to > datalength - 1)
            abort('only ' + datalength + ' bytes available! programmer error!');
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, false);
          if (datalength !== chunkSize)
            xhr.setRequestHeader('Range', 'bytes=' + from + '-' + to);
          xhr.responseType = 'arraybuffer';
          if (xhr.overrideMimeType) {
            xhr.overrideMimeType('text/plain; charset=x-user-defined');
          }
          xhr.send(null);
          if (!((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304))
            abort("Couldn't load " + url + '. Status: ' + xhr.status);
          if (xhr.response !== undefined) {
            return new Uint8Array(xhr.response || []);
          }
          return intArrayFromString(xhr.responseText || '', true);
        };
        var lazyArray = this;
        lazyArray.setDataGetter((chunkNum) => {
          var start = chunkNum * chunkSize;
          var end = (chunkNum + 1) * chunkSize - 1;
          end = Math.min(end, datalength - 1);
          if (typeof lazyArray.chunks[chunkNum] == 'undefined') {
            lazyArray.chunks[chunkNum] = doXHR(start, end);
          }
          if (typeof lazyArray.chunks[chunkNum] == 'undefined')
            abort('doXHR failed!');
          return lazyArray.chunks[chunkNum];
        });
        if (usesGzip || !datalength) {
          chunkSize = datalength = 1;
          datalength = this.getter(0).length;
          chunkSize = datalength;
          out(
            'LazyFiles on gzip forces download of the whole file when length is accessed'
          );
        }
        this._length = datalength;
        this._chunkSize = chunkSize;
        this.lengthKnown = true;
      }
      get length() {
        if (!this.lengthKnown) {
          this.cacheLength();
        }
        return this._length;
      }
      get chunkSize() {
        if (!this.lengthKnown) {
          this.cacheLength();
        }
        return this._chunkSize;
      }
    }
    if (globalThis.XMLHttpRequest) {
      if (!ENVIRONMENT_IS_WORKER)
        abort(
          'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc'
        );
      var lazyArray = new LazyUint8Array();
      var properties = { isDevice: false, contents: lazyArray };
    } else {
      var properties = { isDevice: false, url };
    }
    var node = FS.createFile(parent, name, properties, canRead, canWrite);
    if (properties.contents) {
      node.contents = properties.contents;
    } else if (properties.url) {
      node.contents = null;
      node.url = properties.url;
    }
    Object.defineProperties(node, {
      usedBytes: {
        get: function () {
          return this.contents.length;
        },
      },
    });
    var stream_ops = {};
    for (const [key, fn] of Object.entries(node.stream_ops)) {
      stream_ops[key] = (...args) => {
        FS.forceLoadFile(node);
        return fn(...args);
      };
    }
    function writeChunks(stream, buffer, offset, length, position) {
      var contents = stream.node.contents;
      if (position >= contents.length) return 0;
      var size = Math.min(contents.length - position, length);
      if (contents.slice) {
        for (var i = 0; i < size; i++) {
          buffer[offset + i] = contents[position + i];
        }
      } else {
        for (var i = 0; i < size; i++) {
          buffer[offset + i] = contents.get(position + i);
        }
      }
      return size;
    }
    stream_ops.read = (stream, buffer, offset, length, position) => {
      FS.forceLoadFile(node);
      return writeChunks(stream, buffer, offset, length, position);
    };
    stream_ops.mmap = (stream, length, position, prot, flags) => {
      FS.forceLoadFile(node);
      var ptr = mmapAlloc(length);
      if (!ptr) {
        throw new FS.ErrnoError(48);
      }
      writeChunks(stream, (growMemViews(), HEAP8), ptr, length, position);
      return { ptr, allocated: true };
    };
    node.stream_ops = stream_ops;
    return node;
  },
};
var SYSCALLS = {
  DEFAULT_POLLMASK: 5,
  calculateAt(dirfd, path, allowEmpty) {
    if (PATH.isAbs(path)) {
      return path;
    }
    var dir;
    if (dirfd === -100) {
      dir = FS.cwd();
    } else {
      var dirstream = SYSCALLS.getStreamFromFD(dirfd);
      dir = dirstream.path;
    }
    if (path.length == 0) {
      if (!allowEmpty) {
        throw new FS.ErrnoError(44);
      }
      return dir;
    }
    return dir + '/' + path;
  },
  writeStat(buf, stat) {
    (growMemViews(), HEAPU32)[(buf >>> 2) >>> 0] = stat.dev;
    (growMemViews(), HEAPU32)[((buf + 4) >>> 2) >>> 0] = stat.mode;
    (growMemViews(), HEAPU32)[((buf + 8) >>> 2) >>> 0] = stat.nlink;
    (growMemViews(), HEAPU32)[((buf + 12) >>> 2) >>> 0] = stat.uid;
    (growMemViews(), HEAPU32)[((buf + 16) >>> 2) >>> 0] = stat.gid;
    (growMemViews(), HEAPU32)[((buf + 20) >>> 2) >>> 0] = stat.rdev;
    (growMemViews(), HEAP64)[((buf + 24) >>> 3) >>> 0] = BigInt(stat.size);
    (growMemViews(), HEAP32)[((buf + 32) >>> 2) >>> 0] = 4096;
    (growMemViews(), HEAP32)[((buf + 36) >>> 2) >>> 0] = stat.blocks;
    var atime = stat.atime.getTime();
    var mtime = stat.mtime.getTime();
    var ctime = stat.ctime.getTime();
    (growMemViews(), HEAP64)[((buf + 40) >>> 3) >>> 0] = BigInt(
      Math.floor(atime / 1e3)
    );
    (growMemViews(), HEAPU32)[((buf + 48) >>> 2) >>> 0] =
      (atime % 1e3) * 1e3 * 1e3;
    (growMemViews(), HEAP64)[((buf + 56) >>> 3) >>> 0] = BigInt(
      Math.floor(mtime / 1e3)
    );
    (growMemViews(), HEAPU32)[((buf + 64) >>> 2) >>> 0] =
      (mtime % 1e3) * 1e3 * 1e3;
    (growMemViews(), HEAP64)[((buf + 72) >>> 3) >>> 0] = BigInt(
      Math.floor(ctime / 1e3)
    );
    (growMemViews(), HEAPU32)[((buf + 80) >>> 2) >>> 0] =
      (ctime % 1e3) * 1e3 * 1e3;
    (growMemViews(), HEAP64)[((buf + 88) >>> 3) >>> 0] = BigInt(stat.ino);
    return 0;
  },
  writeStatFs(buf, stats) {
    (growMemViews(), HEAPU32)[((buf + 4) >>> 2) >>> 0] = stats.bsize;
    (growMemViews(), HEAPU32)[((buf + 60) >>> 2) >>> 0] = stats.bsize;
    (growMemViews(), HEAP64)[((buf + 8) >>> 3) >>> 0] = BigInt(stats.blocks);
    (growMemViews(), HEAP64)[((buf + 16) >>> 3) >>> 0] = BigInt(stats.bfree);
    (growMemViews(), HEAP64)[((buf + 24) >>> 3) >>> 0] = BigInt(stats.bavail);
    (growMemViews(), HEAP64)[((buf + 32) >>> 3) >>> 0] = BigInt(stats.files);
    (growMemViews(), HEAP64)[((buf + 40) >>> 3) >>> 0] = BigInt(stats.ffree);
    (growMemViews(), HEAPU32)[((buf + 48) >>> 2) >>> 0] = stats.fsid;
    (growMemViews(), HEAPU32)[((buf + 64) >>> 2) >>> 0] = stats.flags;
    (growMemViews(), HEAPU32)[((buf + 56) >>> 2) >>> 0] = stats.namelen;
  },
  doMsync(addr, stream, len, flags, offset) {
    if (!FS.isFile(stream.node.mode)) {
      throw new FS.ErrnoError(43);
    }
    if (flags & 2) {
      return 0;
    }
    var buffer = (growMemViews(), HEAPU8).slice(addr, addr + len);
    FS.msync(stream, buffer, offset, len, flags);
  },
  getStreamFromFD(fd) {
    var stream = FS.getStreamChecked(fd);
    return stream;
  },
  varargs: undefined,
  getStr(ptr) {
    var ret = UTF8ToString(ptr);
    return ret;
  },
};
function ___syscall_fcntl64(fd, cmd, varargs) {
  if (ENVIRONMENT_IS_PTHREAD)
    return proxyToMainThread(3, 0, 1, fd, cmd, varargs);
  varargs >>>= 0;
  SYSCALLS.varargs = varargs;
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    switch (cmd) {
      case 0: {
        var arg = syscallGetVarargI();
        if (arg < 0) {
          return -28;
        }
        while (FS.streams[arg]) {
          arg++;
        }
        var newStream;
        newStream = FS.dupStream(stream, arg);
        return newStream.fd;
      }
      case 1:
      case 2:
        return 0;
      case 3:
        return stream.flags;
      case 4: {
        var arg = syscallGetVarargI();
        stream.flags |= arg;
        return 0;
      }
      case 12: {
        var arg = syscallGetVarargP();
        var offset = 0;
        (growMemViews(), HEAP16)[((arg + offset) >>> 1) >>> 0] = 2;
        return 0;
      }
      case 13:
      case 14:
        return 0;
    }
    return -28;
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
}
function ___syscall_ioctl(fd, op, varargs) {
  if (ENVIRONMENT_IS_PTHREAD)
    return proxyToMainThread(4, 0, 1, fd, op, varargs);
  varargs >>>= 0;
  SYSCALLS.varargs = varargs;
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    switch (op) {
      case 21509: {
        if (!stream.tty) return -59;
        return 0;
      }
      case 21505: {
        if (!stream.tty) return -59;
        if (stream.tty.ops.ioctl_tcgets) {
          var termios = stream.tty.ops.ioctl_tcgets(stream);
          var argp = syscallGetVarargP();
          (growMemViews(), HEAP32)[(argp >>> 2) >>> 0] = termios.c_iflag || 0;
          (growMemViews(), HEAP32)[((argp + 4) >>> 2) >>> 0] =
            termios.c_oflag || 0;
          (growMemViews(), HEAP32)[((argp + 8) >>> 2) >>> 0] =
            termios.c_cflag || 0;
          (growMemViews(), HEAP32)[((argp + 12) >>> 2) >>> 0] =
            termios.c_lflag || 0;
          for (var i = 0; i < 32; i++) {
            (growMemViews(), HEAP8)[(argp + i + 17) >>> 0] =
              termios.c_cc[i] || 0;
          }
          return 0;
        }
        return 0;
      }
      case 21510:
      case 21511:
      case 21512: {
        if (!stream.tty) return -59;
        return 0;
      }
      case 21506:
      case 21507:
      case 21508: {
        if (!stream.tty) return -59;
        if (stream.tty.ops.ioctl_tcsets) {
          var argp = syscallGetVarargP();
          var c_iflag = (growMemViews(), HEAP32)[(argp >>> 2) >>> 0];
          var c_oflag = (growMemViews(), HEAP32)[((argp + 4) >>> 2) >>> 0];
          var c_cflag = (growMemViews(), HEAP32)[((argp + 8) >>> 2) >>> 0];
          var c_lflag = (growMemViews(), HEAP32)[((argp + 12) >>> 2) >>> 0];
          var c_cc = [];
          for (var i = 0; i < 32; i++) {
            c_cc.push((growMemViews(), HEAP8)[(argp + i + 17) >>> 0]);
          }
          return stream.tty.ops.ioctl_tcsets(stream.tty, op, {
            c_iflag,
            c_oflag,
            c_cflag,
            c_lflag,
            c_cc,
          });
        }
        return 0;
      }
      case 21519: {
        if (!stream.tty) return -59;
        var argp = syscallGetVarargP();
        (growMemViews(), HEAP32)[(argp >>> 2) >>> 0] = 0;
        return 0;
      }
      case 21520: {
        if (!stream.tty) return -59;
        return -28;
      }
      case 21537:
      case 21531: {
        var argp = syscallGetVarargP();
        return FS.ioctl(stream, op, argp);
      }
      case 21523: {
        if (!stream.tty) return -59;
        if (stream.tty.ops.ioctl_tiocgwinsz) {
          var winsize = stream.tty.ops.ioctl_tiocgwinsz(stream.tty);
          var argp = syscallGetVarargP();
          (growMemViews(), HEAP16)[(argp >>> 1) >>> 0] = winsize[0];
          (growMemViews(), HEAP16)[((argp + 2) >>> 1) >>> 0] = winsize[1];
        }
        return 0;
      }
      case 21524: {
        if (!stream.tty) return -59;
        return 0;
      }
      case 21515: {
        if (!stream.tty) return -59;
        return 0;
      }
      default:
        return -28;
    }
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
}
function ___syscall_openat(dirfd, path, flags, varargs) {
  if (ENVIRONMENT_IS_PTHREAD)
    return proxyToMainThread(5, 0, 1, dirfd, path, flags, varargs);
  path >>>= 0;
  varargs >>>= 0;
  SYSCALLS.varargs = varargs;
  try {
    path = SYSCALLS.getStr(path);
    path = SYSCALLS.calculateAt(dirfd, path);
    var mode = varargs ? syscallGetVarargI() : 0;
    return FS.open(path, flags, mode).fd;
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
}
var __abort_js = () => abort('');
function __emscripten_init_main_thread_js(tb) {
  tb >>>= 0;
  __emscripten_thread_init(
    tb,
    !ENVIRONMENT_IS_WORKER,
    1,
    !ENVIRONMENT_IS_WEB,
    65536,
    false
  );
  PThread.threadInitTLS();
}
var handleException = (e) => {
  if (e instanceof ExitStatus || e == 'unwind') {
    return EXITSTATUS;
  }
  quit_(1, e);
};
var maybeExit = () => {
  if (!keepRuntimeAlive()) {
    try {
      if (ENVIRONMENT_IS_PTHREAD) {
        if (_pthread_self()) __emscripten_thread_exit(EXITSTATUS);
        return;
      }
      _exit(EXITSTATUS);
    } catch (e) {
      handleException(e);
    }
  }
};
var callUserCallback = (func) => {
  if (ABORT) {
    return;
  }
  try {
    func();
    maybeExit();
  } catch (e) {
    handleException(e);
  }
};
function __emscripten_thread_mailbox_await(pthread_ptr) {
  pthread_ptr >>>= 0;
  if (Atomics.waitAsync) {
    var wait = Atomics.waitAsync(
      (growMemViews(), HEAP32),
      pthread_ptr >>> 2,
      pthread_ptr
    );
    wait.value.then(checkMailbox);
    var waitingAsync = pthread_ptr + 128;
    Atomics.store((growMemViews(), HEAP32), waitingAsync >>> 2, 1);
  }
}
var checkMailbox = () =>
  callUserCallback(() => {
    var pthread_ptr = _pthread_self();
    if (pthread_ptr) {
      __emscripten_thread_mailbox_await(pthread_ptr);
      __emscripten_check_mailbox();
    }
  });
function __emscripten_notify_mailbox_postmessage(targetThread, currThreadId) {
  targetThread >>>= 0;
  currThreadId >>>= 0;
  if (targetThread == currThreadId) {
    setTimeout(checkMailbox);
  } else if (ENVIRONMENT_IS_PTHREAD) {
    postMessage({ targetThread, cmd: 'checkMailbox' });
  } else {
    var worker = PThread.pthreads[targetThread];
    if (!worker) {
      return;
    }
    worker.postMessage({ cmd: 'checkMailbox' });
  }
}
var proxiedJSCallArgs = [];
function __emscripten_receive_on_main_thread_js(
  funcIndex,
  emAsmAddr,
  callingThread,
  numCallArgs,
  args
) {
  emAsmAddr >>>= 0;
  callingThread >>>= 0;
  args >>>= 0;
  numCallArgs /= 2;
  proxiedJSCallArgs.length = numCallArgs;
  var b = args >>> 3;
  for (var i = 0; i < numCallArgs; i++) {
    if ((growMemViews(), HEAP64)[(b + 2 * i) >>> 0]) {
      proxiedJSCallArgs[i] = (growMemViews(), HEAP64)[(b + 2 * i + 1) >>> 0];
    } else {
      proxiedJSCallArgs[i] = (growMemViews(), HEAPF64)[(b + 2 * i + 1) >>> 0];
    }
  }
  var func = proxiedFunctionTable[funcIndex];
  PThread.currentProxiedOperationCallerThread = callingThread;
  var rtn = func(...proxiedJSCallArgs);
  PThread.currentProxiedOperationCallerThread = 0;
  return rtn;
}
var __emscripten_runtime_keepalive_clear = () => {
  noExitRuntime = false;
  runtimeKeepaliveCounter = 0;
};
function __emscripten_thread_cleanup(thread) {
  thread >>>= 0;
  if (!ENVIRONMENT_IS_PTHREAD) cleanupThread(thread);
  else postMessage({ cmd: 'cleanupThread', thread });
}
function __emscripten_thread_set_strongref(thread) {
  thread >>>= 0;
  if (ENVIRONMENT_IS_NODE) {
    PThread.pthreads[thread].ref();
  }
}
function __mmap_js(len, prot, flags, fd, offset, allocated, addr) {
  if (ENVIRONMENT_IS_PTHREAD)
    return proxyToMainThread(
      6,
      0,
      1,
      len,
      prot,
      flags,
      fd,
      offset,
      allocated,
      addr
    );
  len >>>= 0;
  offset = bigintToI53Checked(offset);
  allocated >>>= 0;
  addr >>>= 0;
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    var res = FS.mmap(stream, len, offset, prot, flags);
    var ptr = res.ptr;
    (growMemViews(), HEAP32)[(allocated >>> 2) >>> 0] = res.allocated;
    (growMemViews(), HEAPU32)[(addr >>> 2) >>> 0] = ptr;
    return 0;
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
}
function __munmap_js(addr, len, prot, flags, fd, offset) {
  if (ENVIRONMENT_IS_PTHREAD)
    return proxyToMainThread(7, 0, 1, addr, len, prot, flags, fd, offset);
  addr >>>= 0;
  len >>>= 0;
  offset = bigintToI53Checked(offset);
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    if (prot & 2) {
      SYSCALLS.doMsync(addr, stream, len, flags, offset);
    }
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
}
var timers = {};
var _emscripten_get_now = () => performance.timeOrigin + performance.now();
function __setitimer_js(which, timeout_ms) {
  if (ENVIRONMENT_IS_PTHREAD)
    return proxyToMainThread(8, 0, 1, which, timeout_ms);
  if (timers[which]) {
    clearTimeout(timers[which].id);
    delete timers[which];
  }
  if (!timeout_ms) return 0;
  var id = setTimeout(() => {
    delete timers[which];
    callUserCallback(() => __emscripten_timeout(which, _emscripten_get_now()));
  }, timeout_ms);
  timers[which] = { id, timeout_ms };
  return 0;
}
var stringToUTF8 = (str, outPtr, maxBytesToWrite) =>
  stringToUTF8Array(str, (growMemViews(), HEAPU8), outPtr, maxBytesToWrite);
var __tzset_js = function (timezone, daylight, std_name, dst_name) {
  timezone >>>= 0;
  daylight >>>= 0;
  std_name >>>= 0;
  dst_name >>>= 0;
  var currentYear = new Date().getFullYear();
  var winter = new Date(currentYear, 0, 1);
  var summer = new Date(currentYear, 6, 1);
  var winterOffset = winter.getTimezoneOffset();
  var summerOffset = summer.getTimezoneOffset();
  var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
  (growMemViews(), HEAPU32)[(timezone >>> 2) >>> 0] = stdTimezoneOffset * 60;
  (growMemViews(), HEAP32)[(daylight >>> 2) >>> 0] = Number(
    winterOffset != summerOffset
  );
  var extractZone = (timezoneOffset) => {
    var sign = timezoneOffset >= 0 ? '-' : '+';
    var absOffset = Math.abs(timezoneOffset);
    var hours = String(Math.floor(absOffset / 60)).padStart(2, '0');
    var minutes = String(absOffset % 60).padStart(2, '0');
    return \`UTC\${sign}\${hours}\${minutes}\`;
  };
  var winterName = extractZone(winterOffset);
  var summerName = extractZone(summerOffset);
  if (summerOffset < winterOffset) {
    stringToUTF8(winterName, std_name, 17);
    stringToUTF8(summerName, dst_name, 17);
  } else {
    stringToUTF8(winterName, dst_name, 17);
    stringToUTF8(summerName, std_name, 17);
  }
};
var _emscripten_date_now = () => Date.now();
var nowIsMonotonic = 1;
var checkWasiClock = (clock_id) => clock_id >= 0 && clock_id <= 3;
function _clock_time_get(clk_id, ignored_precision, ptime) {
  ignored_precision = bigintToI53Checked(ignored_precision);
  ptime >>>= 0;
  if (!checkWasiClock(clk_id)) {
    return 28;
  }
  var now;
  if (clk_id === 0) {
    now = _emscripten_date_now();
  } else if (nowIsMonotonic) {
    now = _emscripten_get_now();
  } else {
    return 52;
  }
  var nsec = Math.round(now * 1e3 * 1e3);
  (growMemViews(), HEAP64)[(ptime >>> 3) >>> 0] = BigInt(nsec);
  return 0;
}
var _emscripten_check_blocking_allowed = () => {};
var runtimeKeepalivePush = () => {
  runtimeKeepaliveCounter += 1;
};
var _emscripten_exit_with_live_runtime = () => {
  runtimeKeepalivePush();
  throw 'unwind';
};
var getHeapMax = () => 4294901760;
function _emscripten_get_heap_max() {
  return getHeapMax();
}
var _emscripten_has_asyncify = () => 2;
var _emscripten_num_logical_cores = () =>
  ENVIRONMENT_IS_NODE
    ? require('os').cpus().length
    : navigator['hardwareConcurrency'];
var growMemory = (size) => {
  var oldHeapSize = wasmMemory.buffer.byteLength;
  var pages = ((size - oldHeapSize + 65535) / 65536) | 0;
  try {
    wasmMemory.grow(pages);
    updateMemoryViews();
    return 1;
  } catch (e) {}
};
function _emscripten_resize_heap(requestedSize) {
  requestedSize >>>= 0;
  var oldSize = (growMemViews(), HEAPU8).length;
  if (requestedSize <= oldSize) {
    return false;
  }
  var maxHeapSize = getHeapMax();
  if (requestedSize > maxHeapSize) {
    return false;
  }
  for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
    var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
    overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
    var newSize = Math.min(
      maxHeapSize,
      alignMemory(Math.max(requestedSize, overGrownHeapSize), 65536)
    );
    var replacement = growMemory(newSize);
    if (replacement) {
      return true;
    }
  }
  return false;
}
var stringToUTF8OnStack = (str) => {
  var size = lengthBytesUTF8(str) + 1;
  var ret = stackAlloc(size);
  stringToUTF8(str, ret, size);
  return ret;
};
var writeI53ToI64 = (ptr, num) => {
  (growMemViews(), HEAPU32)[(ptr >>> 2) >>> 0] = num;
  var lower = (growMemViews(), HEAPU32)[(ptr >>> 2) >>> 0];
  (growMemViews(), HEAPU32)[((ptr + 4) >>> 2) >>> 0] =
    (num - lower) / 4294967296;
};
var stringToNewUTF8 = (str) => {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _malloc(size);
  if (ret) stringToUTF8(str, ret, size);
  return ret;
};
var readI53FromI64 = (ptr) =>
  (growMemViews(), HEAPU32)[(ptr >>> 2) >>> 0] +
  (growMemViews(), HEAP32)[((ptr + 4) >>> 2) >>> 0] * 4294967296;
var WebGPU = {
  Internals: {
    jsObjects: [],
    jsObjectInsert: (ptr, jsObject) => {
      ptr >>>= 0;
      WebGPU.Internals.jsObjects[ptr] = jsObject;
    },
    bufferOnUnmaps: [],
    futures: [],
    futureInsert: (futureId, promise) => {
      WebGPU.Internals.futures[futureId] = new Promise((resolve) =>
        promise.finally(() => resolve(futureId))
      );
    },
  },
  getJsObject: (ptr) => {
    if (!ptr) return undefined;
    ptr >>>= 0;
    return WebGPU.Internals.jsObjects[ptr];
  },
  importJsAdapter: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateAdapter(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsBindGroup: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateBindGroup(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsBindGroupLayout: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateBindGroupLayout(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsBuffer: (buffer, parentPtr = 0) => {
    assert(buffer.mapState === 'unmapped');
    var bufferPtr = _emwgpuCreateBuffer(parentPtr);
    WebGPU.Internals.jsObjectInsert(bufferPtr, buffer);
    return bufferPtr;
  },
  importJsCommandBuffer: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateCommandBuffer(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsCommandEncoder: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateCommandEncoder(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsComputePassEncoder: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateComputePassEncoder(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsComputePipeline: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateComputePipeline(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsDevice: (device, parentPtr = 0) => {
    var queuePtr = _emwgpuCreateQueue(parentPtr);
    var devicePtr = _emwgpuCreateDevice(parentPtr, queuePtr);
    WebGPU.Internals.jsObjectInsert(queuePtr, device.queue);
    WebGPU.Internals.jsObjectInsert(devicePtr, device);
    return devicePtr;
  },
  importJsExternalTexture: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateExternalTexture(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsPipelineLayout: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreatePipelineLayout(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsQuerySet: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateQuerySet(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsQueue: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateQueue(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsRenderBundle: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateRenderBundle(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsRenderBundleEncoder: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateRenderBundleEncoder(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsRenderPassEncoder: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateRenderPassEncoder(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsRenderPipeline: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateRenderPipeline(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsSampler: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateSampler(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsShaderModule: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateShaderModule(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsSurface: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateSurface(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsTexture: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateTexture(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsTextureView: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateTextureView(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  errorCallback: (callback, type, message, userdata) => {
    var sp = stackSave();
    var messagePtr = stringToUTF8OnStack(message);
    getWasmTableEntry(callback)(type, messagePtr, userdata);
    stackRestore(sp);
  },
  iterateExtensions: (root, handlers) => {
    for (
      var ptr = (growMemViews(), HEAPU32)[(root >>> 2) >>> 0];
      ptr;
      ptr = (growMemViews(), HEAPU32)[(ptr >>> 2) >>> 0]
    ) {
      var sType = (growMemViews(), HEAP32)[((ptr + 4) >>> 2) >>> 0];
      var handler = handlers[sType](ptr);
    }
  },
  setStringView: (ptr, data, length) => {
    (growMemViews(), HEAPU32)[(ptr >>> 2) >>> 0] = data;
    (growMemViews(), HEAPU32)[((ptr + 4) >>> 2) >>> 0] = length;
  },
  makeStringFromStringView: (stringViewPtr) => {
    var ptr = (growMemViews(), HEAPU32)[(stringViewPtr >>> 2) >>> 0];
    var length = (growMemViews(), HEAPU32)[((stringViewPtr + 4) >>> 2) >>> 0];
    return UTF8ToString(ptr, length);
  },
  makeStringFromOptionalStringView: (stringViewPtr) => {
    var ptr = (growMemViews(), HEAPU32)[(stringViewPtr >>> 2) >>> 0];
    var length = (growMemViews(), HEAPU32)[((stringViewPtr + 4) >>> 2) >>> 0];
    if (!ptr) {
      if (length === 0) {
        return '';
      }
      return undefined;
    }
    return UTF8ToString(ptr, length);
  },
  makeColor: (ptr) => ({
    r: (growMemViews(), HEAPF64)[(ptr >>> 3) >>> 0],
    g: (growMemViews(), HEAPF64)[((ptr + 8) >>> 3) >>> 0],
    b: (growMemViews(), HEAPF64)[((ptr + 16) >>> 3) >>> 0],
    a: (growMemViews(), HEAPF64)[((ptr + 24) >>> 3) >>> 0],
  }),
  makeExtent3D: (ptr) => ({
    width: (growMemViews(), HEAPU32)[(ptr >>> 2) >>> 0],
    height: (growMemViews(), HEAPU32)[((ptr + 4) >>> 2) >>> 0],
    depthOrArrayLayers: (growMemViews(), HEAPU32)[((ptr + 8) >>> 2) >>> 0],
  }),
  makeOrigin3D: (ptr) => ({
    x: (growMemViews(), HEAPU32)[(ptr >>> 2) >>> 0],
    y: (growMemViews(), HEAPU32)[((ptr + 4) >>> 2) >>> 0],
    z: (growMemViews(), HEAPU32)[((ptr + 8) >>> 2) >>> 0],
  }),
  makeTexelCopyTextureInfo: (ptr) => ({
    texture: WebGPU.getJsObject((growMemViews(), HEAPU32)[(ptr >>> 2) >>> 0]),
    mipLevel: (growMemViews(), HEAPU32)[((ptr + 4) >>> 2) >>> 0],
    origin: WebGPU.makeOrigin3D(ptr + 8),
    aspect:
      WebGPU.TextureAspect[(growMemViews(), HEAP32)[((ptr + 20) >>> 2) >>> 0]],
  }),
  makeTexelCopyBufferLayout: (ptr) => {
    var bytesPerRow = (growMemViews(), HEAPU32)[((ptr + 8) >>> 2) >>> 0];
    var rowsPerImage = (growMemViews(), HEAPU32)[((ptr + 12) >>> 2) >>> 0];
    return {
      offset: readI53FromI64(ptr),
      bytesPerRow: bytesPerRow === 4294967295 ? undefined : bytesPerRow,
      rowsPerImage: rowsPerImage === 4294967295 ? undefined : rowsPerImage,
    };
  },
  makeTexelCopyBufferInfo: (ptr) => {
    var layoutPtr = ptr + 0;
    var bufferCopyView = WebGPU.makeTexelCopyBufferLayout(layoutPtr);
    bufferCopyView['buffer'] = WebGPU.getJsObject(
      (growMemViews(), HEAPU32)[((ptr + 16) >>> 2) >>> 0]
    );
    return bufferCopyView;
  },
  makePassTimestampWrites: (ptr) => {
    if (ptr === 0) return undefined;
    return {
      querySet: WebGPU.getJsObject(
        (growMemViews(), HEAPU32)[((ptr + 4) >>> 2) >>> 0]
      ),
      beginningOfPassWriteIndex: (growMemViews(), HEAPU32)[
        ((ptr + 8) >>> 2) >>> 0
      ],
      endOfPassWriteIndex: (growMemViews(), HEAPU32)[((ptr + 12) >>> 2) >>> 0],
    };
  },
  makePipelineConstants: (constantCount, constantsPtr) => {
    if (!constantCount) return;
    var constants = {};
    for (var i = 0; i < constantCount; ++i) {
      var entryPtr = constantsPtr + 24 * i;
      var key = WebGPU.makeStringFromStringView(entryPtr + 4);
      constants[key] = (growMemViews(), HEAPF64)[((entryPtr + 16) >>> 3) >>> 0];
    }
    return constants;
  },
  makePipelineLayout: (layoutPtr) => {
    if (!layoutPtr) return 'auto';
    return WebGPU.getJsObject(layoutPtr);
  },
  makeComputeState: (ptr) => {
    if (!ptr) return undefined;
    var desc = {
      module: WebGPU.getJsObject(
        (growMemViews(), HEAPU32)[((ptr + 4) >>> 2) >>> 0]
      ),
      constants: WebGPU.makePipelineConstants(
        (growMemViews(), HEAPU32)[((ptr + 16) >>> 2) >>> 0],
        (growMemViews(), HEAPU32)[((ptr + 20) >>> 2) >>> 0]
      ),
      entryPoint: WebGPU.makeStringFromOptionalStringView(ptr + 8),
    };
    return desc;
  },
  makeComputePipelineDesc: (descriptor) => {
    var desc = {
      label: WebGPU.makeStringFromOptionalStringView(descriptor + 4),
      layout: WebGPU.makePipelineLayout(
        (growMemViews(), HEAPU32)[((descriptor + 12) >>> 2) >>> 0]
      ),
      compute: WebGPU.makeComputeState(descriptor + 16),
    };
    return desc;
  },
  makeRenderPipelineDesc: (descriptor) => {
    function makePrimitiveState(psPtr) {
      if (!psPtr) return undefined;
      return {
        topology:
          WebGPU.PrimitiveTopology[
            (growMemViews(), HEAP32)[((psPtr + 4) >>> 2) >>> 0]
          ],
        stripIndexFormat:
          WebGPU.IndexFormat[
            (growMemViews(), HEAP32)[((psPtr + 8) >>> 2) >>> 0]
          ],
        frontFace:
          WebGPU.FrontFace[
            (growMemViews(), HEAP32)[((psPtr + 12) >>> 2) >>> 0]
          ],
        cullMode:
          WebGPU.CullMode[(growMemViews(), HEAP32)[((psPtr + 16) >>> 2) >>> 0]],
        unclippedDepth: !!(growMemViews(), HEAPU32)[((psPtr + 20) >>> 2) >>> 0],
      };
    }
    function makeBlendComponent(bdPtr) {
      if (!bdPtr) return undefined;
      return {
        operation:
          WebGPU.BlendOperation[(growMemViews(), HEAP32)[(bdPtr >>> 2) >>> 0]],
        srcFactor:
          WebGPU.BlendFactor[
            (growMemViews(), HEAP32)[((bdPtr + 4) >>> 2) >>> 0]
          ],
        dstFactor:
          WebGPU.BlendFactor[
            (growMemViews(), HEAP32)[((bdPtr + 8) >>> 2) >>> 0]
          ],
      };
    }
    function makeBlendState(bsPtr) {
      if (!bsPtr) return undefined;
      return {
        alpha: makeBlendComponent(bsPtr + 12),
        color: makeBlendComponent(bsPtr + 0),
      };
    }
    function makeColorState(csPtr) {
      var format =
        WebGPU.TextureFormat[
          (growMemViews(), HEAP32)[((csPtr + 4) >>> 2) >>> 0]
        ];
      return format
        ? {
            format,
            blend: makeBlendState(
              (growMemViews(), HEAPU32)[((csPtr + 8) >>> 2) >>> 0]
            ),
            writeMask: (growMemViews(), HEAPU32)[((csPtr + 16) >>> 2) >>> 0],
          }
        : undefined;
    }
    function makeColorStates(count, csArrayPtr) {
      var states = [];
      for (var i = 0; i < count; ++i) {
        states.push(makeColorState(csArrayPtr + 24 * i));
      }
      return states;
    }
    function makeStencilStateFace(ssfPtr) {
      return {
        compare:
          WebGPU.CompareFunction[
            (growMemViews(), HEAP32)[(ssfPtr >>> 2) >>> 0]
          ],
        failOp:
          WebGPU.StencilOperation[
            (growMemViews(), HEAP32)[((ssfPtr + 4) >>> 2) >>> 0]
          ],
        depthFailOp:
          WebGPU.StencilOperation[
            (growMemViews(), HEAP32)[((ssfPtr + 8) >>> 2) >>> 0]
          ],
        passOp:
          WebGPU.StencilOperation[
            (growMemViews(), HEAP32)[((ssfPtr + 12) >>> 2) >>> 0]
          ],
      };
    }
    function makeDepthStencilState(dssPtr) {
      if (!dssPtr) return undefined;
      return {
        format:
          WebGPU.TextureFormat[
            (growMemViews(), HEAP32)[((dssPtr + 4) >>> 2) >>> 0]
          ],
        depthWriteEnabled: !!(growMemViews(), HEAPU32)[
          ((dssPtr + 8) >>> 2) >>> 0
        ],
        depthCompare:
          WebGPU.CompareFunction[
            (growMemViews(), HEAP32)[((dssPtr + 12) >>> 2) >>> 0]
          ],
        stencilFront: makeStencilStateFace(dssPtr + 16),
        stencilBack: makeStencilStateFace(dssPtr + 32),
        stencilReadMask: (growMemViews(), HEAPU32)[((dssPtr + 48) >>> 2) >>> 0],
        stencilWriteMask: (growMemViews(), HEAPU32)[
          ((dssPtr + 52) >>> 2) >>> 0
        ],
        depthBias: (growMemViews(), HEAP32)[((dssPtr + 56) >>> 2) >>> 0],
        depthBiasSlopeScale: (growMemViews(), HEAPF32)[
          ((dssPtr + 60) >>> 2) >>> 0
        ],
        depthBiasClamp: (growMemViews(), HEAPF32)[((dssPtr + 64) >>> 2) >>> 0],
      };
    }
    function makeVertexAttribute(vaPtr) {
      return {
        format:
          WebGPU.VertexFormat[
            (growMemViews(), HEAP32)[((vaPtr + 4) >>> 2) >>> 0]
          ],
        offset: readI53FromI64(vaPtr + 8),
        shaderLocation: (growMemViews(), HEAPU32)[((vaPtr + 16) >>> 2) >>> 0],
      };
    }
    function makeVertexAttributes(count, vaArrayPtr) {
      var vas = [];
      for (var i = 0; i < count; ++i) {
        vas.push(makeVertexAttribute(vaArrayPtr + i * 24));
      }
      return vas;
    }
    function makeVertexBuffer(vbPtr) {
      if (!vbPtr) return undefined;
      var stepMode =
        WebGPU.VertexStepMode[
          (growMemViews(), HEAP32)[((vbPtr + 4) >>> 2) >>> 0]
        ];
      var attributeCount = (growMemViews(), HEAPU32)[
        ((vbPtr + 16) >>> 2) >>> 0
      ];
      if (!stepMode && !attributeCount) {
        return null;
      }
      return {
        arrayStride: readI53FromI64(vbPtr + 8),
        stepMode,
        attributes: makeVertexAttributes(
          attributeCount,
          (growMemViews(), HEAPU32)[((vbPtr + 20) >>> 2) >>> 0]
        ),
      };
    }
    function makeVertexBuffers(count, vbArrayPtr) {
      if (!count) return undefined;
      var vbs = [];
      for (var i = 0; i < count; ++i) {
        vbs.push(makeVertexBuffer(vbArrayPtr + i * 24));
      }
      return vbs;
    }
    function makeVertexState(viPtr) {
      if (!viPtr) return undefined;
      var desc = {
        module: WebGPU.getJsObject(
          (growMemViews(), HEAPU32)[((viPtr + 4) >>> 2) >>> 0]
        ),
        constants: WebGPU.makePipelineConstants(
          (growMemViews(), HEAPU32)[((viPtr + 16) >>> 2) >>> 0],
          (growMemViews(), HEAPU32)[((viPtr + 20) >>> 2) >>> 0]
        ),
        buffers: makeVertexBuffers(
          (growMemViews(), HEAPU32)[((viPtr + 24) >>> 2) >>> 0],
          (growMemViews(), HEAPU32)[((viPtr + 28) >>> 2) >>> 0]
        ),
        entryPoint: WebGPU.makeStringFromOptionalStringView(viPtr + 8),
      };
      return desc;
    }
    function makeMultisampleState(msPtr) {
      if (!msPtr) return undefined;
      return {
        count: (growMemViews(), HEAPU32)[((msPtr + 4) >>> 2) >>> 0],
        mask: (growMemViews(), HEAPU32)[((msPtr + 8) >>> 2) >>> 0],
        alphaToCoverageEnabled: !!(growMemViews(), HEAPU32)[
          ((msPtr + 12) >>> 2) >>> 0
        ],
      };
    }
    function makeFragmentState(fsPtr) {
      if (!fsPtr) return undefined;
      var desc = {
        module: WebGPU.getJsObject(
          (growMemViews(), HEAPU32)[((fsPtr + 4) >>> 2) >>> 0]
        ),
        constants: WebGPU.makePipelineConstants(
          (growMemViews(), HEAPU32)[((fsPtr + 16) >>> 2) >>> 0],
          (growMemViews(), HEAPU32)[((fsPtr + 20) >>> 2) >>> 0]
        ),
        targets: makeColorStates(
          (growMemViews(), HEAPU32)[((fsPtr + 24) >>> 2) >>> 0],
          (growMemViews(), HEAPU32)[((fsPtr + 28) >>> 2) >>> 0]
        ),
        entryPoint: WebGPU.makeStringFromOptionalStringView(fsPtr + 8),
      };
      return desc;
    }
    var desc = {
      label: WebGPU.makeStringFromOptionalStringView(descriptor + 4),
      layout: WebGPU.makePipelineLayout(
        (growMemViews(), HEAPU32)[((descriptor + 12) >>> 2) >>> 0]
      ),
      vertex: makeVertexState(descriptor + 16),
      primitive: makePrimitiveState(descriptor + 48),
      depthStencil: makeDepthStencilState(
        (growMemViews(), HEAPU32)[((descriptor + 72) >>> 2) >>> 0]
      ),
      multisample: makeMultisampleState(descriptor + 76),
      fragment: makeFragmentState(
        (growMemViews(), HEAPU32)[((descriptor + 92) >>> 2) >>> 0]
      ),
    };
    return desc;
  },
  fillLimitStruct: (limits, limitsOutPtr) => {
    var nextInChainPtr = (growMemViews(), HEAPU32)[(limitsOutPtr >>> 2) >>> 0];
    function setLimitValueU32(name, basePtr, limitOffset, fallbackValue = 0) {
      var limitValue = limits[name] ?? fallbackValue;
      (growMemViews(), HEAPU32)[((basePtr + limitOffset) >>> 2) >>> 0] =
        limitValue;
    }
    function setLimitValueU64(name, basePtr, limitOffset, fallbackValue = 0) {
      var limitValue = limits[name] ?? fallbackValue;
      writeI53ToI64(basePtr + limitOffset, limitValue);
    }
    setLimitValueU32('maxTextureDimension1D', limitsOutPtr, 4);
    setLimitValueU32('maxTextureDimension2D', limitsOutPtr, 8);
    setLimitValueU32('maxTextureDimension3D', limitsOutPtr, 12);
    setLimitValueU32('maxTextureArrayLayers', limitsOutPtr, 16);
    setLimitValueU32('maxBindGroups', limitsOutPtr, 20);
    setLimitValueU32('maxBindGroupsPlusVertexBuffers', limitsOutPtr, 24);
    setLimitValueU32('maxBindingsPerBindGroup', limitsOutPtr, 28);
    setLimitValueU32(
      'maxDynamicUniformBuffersPerPipelineLayout',
      limitsOutPtr,
      32
    );
    setLimitValueU32(
      'maxDynamicStorageBuffersPerPipelineLayout',
      limitsOutPtr,
      36
    );
    setLimitValueU32('maxSampledTexturesPerShaderStage', limitsOutPtr, 40);
    setLimitValueU32('maxSamplersPerShaderStage', limitsOutPtr, 44);
    setLimitValueU32('maxStorageBuffersPerShaderStage', limitsOutPtr, 48);
    setLimitValueU32('maxStorageTexturesPerShaderStage', limitsOutPtr, 52);
    setLimitValueU32('maxUniformBuffersPerShaderStage', limitsOutPtr, 56);
    setLimitValueU32('minUniformBufferOffsetAlignment', limitsOutPtr, 80);
    setLimitValueU32('minStorageBufferOffsetAlignment', limitsOutPtr, 84);
    setLimitValueU64('maxUniformBufferBindingSize', limitsOutPtr, 64);
    setLimitValueU64('maxStorageBufferBindingSize', limitsOutPtr, 72);
    setLimitValueU32('maxVertexBuffers', limitsOutPtr, 88);
    setLimitValueU64('maxBufferSize', limitsOutPtr, 96);
    setLimitValueU32('maxVertexAttributes', limitsOutPtr, 104);
    setLimitValueU32('maxVertexBufferArrayStride', limitsOutPtr, 108);
    setLimitValueU32('maxInterStageShaderVariables', limitsOutPtr, 112);
    setLimitValueU32('maxColorAttachments', limitsOutPtr, 116);
    setLimitValueU32('maxColorAttachmentBytesPerSample', limitsOutPtr, 120);
    setLimitValueU32('maxComputeWorkgroupStorageSize', limitsOutPtr, 124);
    setLimitValueU32('maxComputeInvocationsPerWorkgroup', limitsOutPtr, 128);
    setLimitValueU32('maxComputeWorkgroupSizeX', limitsOutPtr, 132);
    setLimitValueU32('maxComputeWorkgroupSizeY', limitsOutPtr, 136);
    setLimitValueU32('maxComputeWorkgroupSizeZ', limitsOutPtr, 140);
    setLimitValueU32('maxComputeWorkgroupsPerDimension', limitsOutPtr, 144);
    setLimitValueU32('maxImmediateSize', limitsOutPtr, 148);
    if (nextInChainPtr !== 0) {
      var sType = (growMemViews(), HEAP32)[((nextInChainPtr + 4) >>> 2) >>> 0];
      var compatibilityModeLimitsPtr = nextInChainPtr;
      setLimitValueU32(
        'maxStorageBuffersInVertexStage',
        compatibilityModeLimitsPtr,
        8,
        limits.maxStorageBuffersPerShaderStage
      );
      setLimitValueU32(
        'maxStorageBuffersInFragmentStage',
        compatibilityModeLimitsPtr,
        16,
        limits.maxStorageBuffersPerShaderStage
      );
      setLimitValueU32(
        'maxStorageTexturesInVertexStage',
        compatibilityModeLimitsPtr,
        12,
        limits.maxStorageTexturesPerShaderStage
      );
      setLimitValueU32(
        'maxStorageTexturesInFragmentStage',
        compatibilityModeLimitsPtr,
        20,
        limits.maxStorageTexturesPerShaderStage
      );
    }
  },
  fillAdapterInfoStruct: (info, infoStruct) => {
    (growMemViews(), HEAPU32)[((infoStruct + 52) >>> 2) >>> 0] =
      info.subgroupMinSize;
    (growMemViews(), HEAPU32)[((infoStruct + 56) >>> 2) >>> 0] =
      info.subgroupMaxSize;
    var strs = info.vendor + info.architecture + info.device + info.description;
    var strPtr = stringToNewUTF8(strs);
    var vendorLen = lengthBytesUTF8(info.vendor);
    WebGPU.setStringView(infoStruct + 4, strPtr, vendorLen);
    strPtr += vendorLen;
    var architectureLen = lengthBytesUTF8(info.architecture);
    WebGPU.setStringView(infoStruct + 12, strPtr, architectureLen);
    strPtr += architectureLen;
    var deviceLen = lengthBytesUTF8(info.device);
    WebGPU.setStringView(infoStruct + 20, strPtr, deviceLen);
    strPtr += deviceLen;
    var descriptionLen = lengthBytesUTF8(info.description);
    WebGPU.setStringView(infoStruct + 28, strPtr, descriptionLen);
    strPtr += descriptionLen;
    (growMemViews(), HEAP32)[((infoStruct + 36) >>> 2) >>> 0] = 2;
    var adapterType = info.isFallbackAdapter ? 3 : 4;
    (growMemViews(), HEAP32)[((infoStruct + 40) >>> 2) >>> 0] = adapterType;
    (growMemViews(), HEAPU32)[((infoStruct + 44) >>> 2) >>> 0] = 0;
    (growMemViews(), HEAPU32)[((infoStruct + 48) >>> 2) >>> 0] = 0;
  },
  AddressMode: [, 'clamp-to-edge', 'repeat', 'mirror-repeat'],
  BlendFactor: [
    ,
    'zero',
    'one',
    'src',
    'one-minus-src',
    'src-alpha',
    'one-minus-src-alpha',
    'dst',
    'one-minus-dst',
    'dst-alpha',
    'one-minus-dst-alpha',
    'src-alpha-saturated',
    'constant',
    'one-minus-constant',
    'src1',
    'one-minus-src1',
    'src1-alpha',
    'one-minus-src1-alpha',
  ],
  BlendOperation: [, 'add', 'subtract', 'reverse-subtract', 'min', 'max'],
  BufferBindingType: [, , 'uniform', 'storage', 'read-only-storage'],
  BufferMapState: [, 'unmapped', 'pending', 'mapped'],
  CompareFunction: [
    ,
    'never',
    'less',
    'equal',
    'less-equal',
    'greater',
    'not-equal',
    'greater-equal',
    'always',
  ],
  CompilationInfoRequestStatus: [, 'success', 'callback-cancelled'],
  ComponentSwizzle: [, '0', '1', 'r', 'g', 'b', 'a'],
  CompositeAlphaMode: [
    ,
    'opaque',
    'premultiplied',
    'unpremultiplied',
    'inherit',
  ],
  CullMode: [, 'none', 'front', 'back'],
  ErrorFilter: [, 'validation', 'out-of-memory', 'internal'],
  FeatureLevel: [, 'compatibility', 'core'],
  FeatureName: {
    1: 'core-features-and-limits',
    2: 'depth-clip-control',
    3: 'depth32float-stencil8',
    4: 'texture-compression-bc',
    5: 'texture-compression-bc-sliced-3d',
    6: 'texture-compression-etc2',
    7: 'texture-compression-astc',
    8: 'texture-compression-astc-sliced-3d',
    9: 'timestamp-query',
    10: 'indirect-first-instance',
    11: 'shader-f16',
    12: 'rg11b10ufloat-renderable',
    13: 'bgra8unorm-storage',
    14: 'float32-filterable',
    15: 'float32-blendable',
    16: 'clip-distances',
    17: 'dual-source-blending',
    18: 'subgroups',
    19: 'texture-formats-tier1',
    20: 'texture-formats-tier2',
    21: 'primitive-index',
    22: 'texture-component-swizzle',
    327692: 'chromium-experimental-unorm16-texture-formats',
    327729: 'chromium-experimental-multi-draw-indirect',
  },
  FilterMode: [, 'nearest', 'linear'],
  FrontFace: [, 'ccw', 'cw'],
  IndexFormat: [, 'uint16', 'uint32'],
  InstanceFeatureName: [
    ,
    'timed-wait-any',
    'shader-source-spirv',
    'multiple-devices-per-adapter',
  ],
  LoadOp: [, 'load', 'clear'],
  MipmapFilterMode: [, 'nearest', 'linear'],
  OptionalBool: ['false', 'true'],
  PowerPreference: [, 'low-power', 'high-performance'],
  PredefinedColorSpace: [, 'srgb', 'display-p3'],
  PrimitiveTopology: [
    ,
    'point-list',
    'line-list',
    'line-strip',
    'triangle-list',
    'triangle-strip',
  ],
  QueryType: [, 'occlusion', 'timestamp'],
  SamplerBindingType: [, , 'filtering', 'non-filtering', 'comparison'],
  Status: [, 'success', 'error'],
  StencilOperation: [
    ,
    'keep',
    'zero',
    'replace',
    'invert',
    'increment-clamp',
    'decrement-clamp',
    'increment-wrap',
    'decrement-wrap',
  ],
  StorageTextureAccess: [, , 'write-only', 'read-only', 'read-write'],
  StoreOp: [, 'store', 'discard'],
  SurfaceGetCurrentTextureStatus: [
    ,
    'success-optimal',
    'success-suboptimal',
    'timeout',
    'outdated',
    'lost',
    'error',
  ],
  TextureAspect: [, 'all', 'stencil-only', 'depth-only'],
  TextureDimension: [, '1d', '2d', '3d'],
  TextureFormat: [
    ,
    'r8unorm',
    'r8snorm',
    'r8uint',
    'r8sint',
    'r16unorm',
    'r16snorm',
    'r16uint',
    'r16sint',
    'r16float',
    'rg8unorm',
    'rg8snorm',
    'rg8uint',
    'rg8sint',
    'r32float',
    'r32uint',
    'r32sint',
    'rg16unorm',
    'rg16snorm',
    'rg16uint',
    'rg16sint',
    'rg16float',
    'rgba8unorm',
    'rgba8unorm-srgb',
    'rgba8snorm',
    'rgba8uint',
    'rgba8sint',
    'bgra8unorm',
    'bgra8unorm-srgb',
    'rgb10a2uint',
    'rgb10a2unorm',
    'rg11b10ufloat',
    'rgb9e5ufloat',
    'rg32float',
    'rg32uint',
    'rg32sint',
    'rgba16unorm',
    'rgba16snorm',
    'rgba16uint',
    'rgba16sint',
    'rgba16float',
    'rgba32float',
    'rgba32uint',
    'rgba32sint',
    'stencil8',
    'depth16unorm',
    'depth24plus',
    'depth24plus-stencil8',
    'depth32float',
    'depth32float-stencil8',
    'bc1-rgba-unorm',
    'bc1-rgba-unorm-srgb',
    'bc2-rgba-unorm',
    'bc2-rgba-unorm-srgb',
    'bc3-rgba-unorm',
    'bc3-rgba-unorm-srgb',
    'bc4-r-unorm',
    'bc4-r-snorm',
    'bc5-rg-unorm',
    'bc5-rg-snorm',
    'bc6h-rgb-ufloat',
    'bc6h-rgb-float',
    'bc7-rgba-unorm',
    'bc7-rgba-unorm-srgb',
    'etc2-rgb8unorm',
    'etc2-rgb8unorm-srgb',
    'etc2-rgb8a1unorm',
    'etc2-rgb8a1unorm-srgb',
    'etc2-rgba8unorm',
    'etc2-rgba8unorm-srgb',
    'eac-r11unorm',
    'eac-r11snorm',
    'eac-rg11unorm',
    'eac-rg11snorm',
    'astc-4x4-unorm',
    'astc-4x4-unorm-srgb',
    'astc-5x4-unorm',
    'astc-5x4-unorm-srgb',
    'astc-5x5-unorm',
    'astc-5x5-unorm-srgb',
    'astc-6x5-unorm',
    'astc-6x5-unorm-srgb',
    'astc-6x6-unorm',
    'astc-6x6-unorm-srgb',
    'astc-8x5-unorm',
    'astc-8x5-unorm-srgb',
    'astc-8x6-unorm',
    'astc-8x6-unorm-srgb',
    'astc-8x8-unorm',
    'astc-8x8-unorm-srgb',
    'astc-10x5-unorm',
    'astc-10x5-unorm-srgb',
    'astc-10x6-unorm',
    'astc-10x6-unorm-srgb',
    'astc-10x8-unorm',
    'astc-10x8-unorm-srgb',
    'astc-10x10-unorm',
    'astc-10x10-unorm-srgb',
    'astc-12x10-unorm',
    'astc-12x10-unorm-srgb',
    'astc-12x12-unorm',
    'astc-12x12-unorm-srgb',
  ],
  TextureSampleType: [
    ,
    ,
    'float',
    'unfilterable-float',
    'depth',
    'sint',
    'uint',
  ],
  TextureViewDimension: [, '1d', '2d', '2d-array', 'cube', 'cube-array', '3d'],
  ToneMappingMode: [, 'standard', 'extended'],
  VertexFormat: [
    ,
    'uint8',
    'uint8x2',
    'uint8x4',
    'sint8',
    'sint8x2',
    'sint8x4',
    'unorm8',
    'unorm8x2',
    'unorm8x4',
    'snorm8',
    'snorm8x2',
    'snorm8x4',
    'uint16',
    'uint16x2',
    'uint16x4',
    'sint16',
    'sint16x2',
    'sint16x4',
    'unorm16',
    'unorm16x2',
    'unorm16x4',
    'snorm16',
    'snorm16x2',
    'snorm16x4',
    'float16',
    'float16x2',
    'float16x4',
    'float32',
    'float32x2',
    'float32x3',
    'float32x4',
    'uint32',
    'uint32x2',
    'uint32x3',
    'uint32x4',
    'sint32',
    'sint32x2',
    'sint32x3',
    'sint32x4',
    'unorm10-10-10-2',
    'unorm8x4-bgra',
  ],
  VertexStepMode: [, 'vertex', 'instance'],
  WGSLLanguageFeatureName: [
    ,
    'readonly_and_readwrite_storage_textures',
    'packed_4x8_integer_dot_product',
    'unrestricted_pointer_parameters',
    'pointer_composite_access',
    'uniform_buffer_standard_layout',
    'subgroup_id',
    'texture_and_sampler_let',
    'subgroup_uniformity',
    'texture_formats_tier1',
  ],
};
var emwgpuStringToInt_DeviceLostReason = {
  undefined: 1,
  unknown: 1,
  destroyed: 2,
};
var runtimeKeepalivePop = () => {
  runtimeKeepaliveCounter -= 1;
};
function _emwgpuAdapterRequestDevice(
  adapterPtr,
  futureId,
  deviceLostFutureId,
  devicePtr,
  queuePtr,
  descriptor
) {
  adapterPtr >>>= 0;
  futureId = bigintToI53Checked(futureId);
  deviceLostFutureId = bigintToI53Checked(deviceLostFutureId);
  devicePtr >>>= 0;
  queuePtr >>>= 0;
  descriptor >>>= 0;
  var adapter = WebGPU.getJsObject(adapterPtr);
  var desc = {};
  if (descriptor) {
    var requiredFeatureCount = (growMemViews(), HEAPU32)[
      ((descriptor + 12) >>> 2) >>> 0
    ];
    if (requiredFeatureCount) {
      var requiredFeaturesPtr = (growMemViews(), HEAPU32)[
        ((descriptor + 16) >>> 2) >>> 0
      ];
      desc['requiredFeatures'] = Array.from(
        (growMemViews(), HEAPU32).subarray(
          (requiredFeaturesPtr >>> 2) >>> 0,
          ((requiredFeaturesPtr + requiredFeatureCount * 4) >>> 2) >>> 0
        ),
        (feature) => WebGPU.FeatureName[feature]
      );
    }
    var limitsPtr = (growMemViews(), HEAPU32)[((descriptor + 20) >>> 2) >>> 0];
    if (limitsPtr) {
      var nextInChainPtr = (growMemViews(), HEAPU32)[(limitsPtr >>> 2) >>> 0];
      var requiredLimits = {};
      function setLimitU32IfDefined(
        name,
        basePtr,
        limitOffset,
        ignoreIfZero = false
      ) {
        var ptr = basePtr + limitOffset;
        var value = (growMemViews(), HEAPU32)[(ptr >>> 2) >>> 0];
        if (value != 4294967295 && (!ignoreIfZero || value != 0)) {
          requiredLimits[name] = value;
        }
      }
      function setLimitU64IfDefined(name, basePtr, limitOffset) {
        var ptr = basePtr + limitOffset;
        var limitPart1 = (growMemViews(), HEAPU32)[(ptr >>> 2) >>> 0];
        var limitPart2 = (growMemViews(), HEAPU32)[((ptr + 4) >>> 2) >>> 0];
        if (limitPart1 != 4294967295 || limitPart2 != 4294967295) {
          requiredLimits[name] = readI53FromI64(ptr);
        }
      }
      setLimitU32IfDefined('maxTextureDimension1D', limitsPtr, 4);
      setLimitU32IfDefined('maxTextureDimension2D', limitsPtr, 8);
      setLimitU32IfDefined('maxTextureDimension3D', limitsPtr, 12);
      setLimitU32IfDefined('maxTextureArrayLayers', limitsPtr, 16);
      setLimitU32IfDefined('maxBindGroups', limitsPtr, 20);
      setLimitU32IfDefined('maxBindGroupsPlusVertexBuffers', limitsPtr, 24);
      setLimitU32IfDefined('maxBindingsPerBindGroup', limitsPtr, 28);
      setLimitU32IfDefined(
        'maxDynamicUniformBuffersPerPipelineLayout',
        limitsPtr,
        32
      );
      setLimitU32IfDefined(
        'maxDynamicStorageBuffersPerPipelineLayout',
        limitsPtr,
        36
      );
      setLimitU32IfDefined('maxSampledTexturesPerShaderStage', limitsPtr, 40);
      setLimitU32IfDefined('maxSamplersPerShaderStage', limitsPtr, 44);
      setLimitU32IfDefined('maxStorageBuffersPerShaderStage', limitsPtr, 48);
      setLimitU32IfDefined('maxStorageTexturesPerShaderStage', limitsPtr, 52);
      setLimitU32IfDefined('maxUniformBuffersPerShaderStage', limitsPtr, 56);
      setLimitU32IfDefined('minUniformBufferOffsetAlignment', limitsPtr, 80);
      setLimitU32IfDefined('minStorageBufferOffsetAlignment', limitsPtr, 84);
      setLimitU64IfDefined('maxUniformBufferBindingSize', limitsPtr, 64);
      setLimitU64IfDefined('maxStorageBufferBindingSize', limitsPtr, 72);
      setLimitU32IfDefined('maxVertexBuffers', limitsPtr, 88);
      setLimitU64IfDefined('maxBufferSize', limitsPtr, 96);
      setLimitU32IfDefined('maxVertexAttributes', limitsPtr, 104);
      setLimitU32IfDefined('maxVertexBufferArrayStride', limitsPtr, 108);
      setLimitU32IfDefined('maxInterStageShaderVariables', limitsPtr, 112);
      setLimitU32IfDefined('maxColorAttachments', limitsPtr, 116);
      setLimitU32IfDefined('maxColorAttachmentBytesPerSample', limitsPtr, 120);
      setLimitU32IfDefined('maxComputeWorkgroupStorageSize', limitsPtr, 124);
      setLimitU32IfDefined('maxComputeInvocationsPerWorkgroup', limitsPtr, 128);
      setLimitU32IfDefined('maxComputeWorkgroupSizeX', limitsPtr, 132);
      setLimitU32IfDefined('maxComputeWorkgroupSizeY', limitsPtr, 136);
      setLimitU32IfDefined('maxComputeWorkgroupSizeZ', limitsPtr, 140);
      setLimitU32IfDefined('maxComputeWorkgroupsPerDimension', limitsPtr, 144);
      setLimitU32IfDefined('maxImmediateSize', limitsPtr, 148, true);
      if (nextInChainPtr !== 0) {
        var sType = (growMemViews(), HEAP32)[
          ((nextInChainPtr + 4) >>> 2) >>> 0
        ];
        var compatibilityModeLimitsPtr = nextInChainPtr;
        if ('maxStorageBuffersInVertexStage' in GPUSupportedLimits.prototype) {
          setLimitU32IfDefined(
            'maxStorageBuffersInVertexStage',
            compatibilityModeLimitsPtr,
            8
          );
          setLimitU32IfDefined(
            'maxStorageTexturesInVertexStage',
            compatibilityModeLimitsPtr,
            12
          );
          setLimitU32IfDefined(
            'maxStorageBuffersInFragmentStage',
            compatibilityModeLimitsPtr,
            16
          );
          setLimitU32IfDefined(
            'maxStorageTexturesInFragmentStage',
            compatibilityModeLimitsPtr,
            20
          );
        }
      }
      desc['requiredLimits'] = requiredLimits;
    }
    var defaultQueuePtr = (growMemViews(), HEAPU32)[
      ((descriptor + 24) >>> 2) >>> 0
    ];
    if (defaultQueuePtr) {
      var defaultQueueDesc = {
        label: WebGPU.makeStringFromOptionalStringView(defaultQueuePtr + 4),
      };
      desc['defaultQueue'] = defaultQueueDesc;
    }
    desc['label'] = WebGPU.makeStringFromOptionalStringView(descriptor + 4);
  }
  runtimeKeepalivePush();
  WebGPU.Internals.futureInsert(
    futureId,
    adapter.requestDevice(desc).then(
      (device) => {
        runtimeKeepalivePop();
        callUserCallback(() => {
          WebGPU.Internals.jsObjectInsert(queuePtr, device.queue);
          WebGPU.Internals.jsObjectInsert(devicePtr, device);
          WebGPU.Internals.futureInsert(
            deviceLostFutureId,
            device.lost.then((info) => {
              callUserCallback(() => {
                device.onuncapturederror = (ev) => {};
                var sp = stackSave();
                var messagePtr = stringToUTF8OnStack(info.message);
                _emwgpuOnDeviceLostCompleted(
                  deviceLostFutureId,
                  emwgpuStringToInt_DeviceLostReason[info.reason],
                  messagePtr
                );
                stackRestore(sp);
              });
            })
          );
          device.onuncapturederror = (ev) => {
            var type = 5;
            if (ev.error instanceof GPUValidationError) type = 2;
            else if (ev.error instanceof GPUOutOfMemoryError) type = 3;
            else if (ev.error instanceof GPUInternalError) type = 4;
            var sp = stackSave();
            var messagePtr = stringToUTF8OnStack(ev.error.message);
            _emwgpuOnUncapturedError(devicePtr, type, messagePtr);
            stackRestore(sp);
          };
          _emwgpuOnRequestDeviceCompleted(futureId, 1, devicePtr, 0);
        });
      },
      (ex) => {
        runtimeKeepalivePop();
        callUserCallback(() => {
          var sp = stackSave();
          var messagePtr = stringToUTF8OnStack(ex.message);
          _emwgpuOnRequestDeviceCompleted(futureId, 3, devicePtr, messagePtr);
          if (deviceLostFutureId) {
            _emwgpuOnDeviceLostCompleted(deviceLostFutureId, 4, messagePtr);
          }
          stackRestore(sp);
        });
      }
    )
  );
}
function _emwgpuBufferDestroy(bufferPtr) {
  bufferPtr >>>= 0;
  var buffer = WebGPU.getJsObject(bufferPtr);
  var onUnmap = WebGPU.Internals.bufferOnUnmaps[bufferPtr];
  if (onUnmap) {
    for (var i = 0; i < onUnmap.length; ++i) {
      onUnmap[i]();
    }
    delete WebGPU.Internals.bufferOnUnmaps[bufferPtr];
  }
  buffer.destroy();
}
var warnOnce = (text) => {
  warnOnce.shown ||= {};
  if (!warnOnce.shown[text]) {
    warnOnce.shown[text] = 1;
    if (ENVIRONMENT_IS_NODE) text = 'warning: ' + text;
    err(text);
  }
};
function _emwgpuBufferGetConstMappedRange(bufferPtr, offset, size) {
  bufferPtr >>>= 0;
  offset >>>= 0;
  size >>>= 0;
  var buffer = WebGPU.getJsObject(bufferPtr);
  if (size == 4294967295) size = undefined;
  var mapped;
  try {
    mapped = buffer.getMappedRange(offset, size);
  } catch (ex) {
    return 0;
  }
  var data = _memalign(16, mapped.byteLength);
  (growMemViews(), HEAPU8).set(new Uint8Array(mapped), data >>> 0);
  WebGPU.Internals.bufferOnUnmaps[bufferPtr].push(() => _free(data));
  return data;
}
var _emwgpuBufferMapAsync = function (bufferPtr, futureId, mode, offset, size) {
  bufferPtr >>>= 0;
  futureId = bigintToI53Checked(futureId);
  mode = bigintToI53Checked(mode);
  offset >>>= 0;
  size >>>= 0;
  var buffer = WebGPU.getJsObject(bufferPtr);
  WebGPU.Internals.bufferOnUnmaps[bufferPtr] = [];
  if (size == 4294967295) size = undefined;
  runtimeKeepalivePush();
  WebGPU.Internals.futureInsert(
    futureId,
    buffer.mapAsync(mode, offset, size).then(
      () => {
        runtimeKeepalivePop();
        callUserCallback(() => {
          _emwgpuOnMapAsyncCompleted(futureId, 1, 0);
        });
      },
      (ex) => {
        runtimeKeepalivePop();
        callUserCallback(() => {
          var sp = stackSave();
          var messagePtr = stringToUTF8OnStack(ex.message);
          var status =
            ex.name === 'AbortError' ? 4 : ex.name === 'OperationError' ? 3 : 0;
          _emwgpuOnMapAsyncCompleted(futureId, status, messagePtr);
          delete WebGPU.Internals.bufferOnUnmaps[bufferPtr];
        });
      }
    )
  );
};
function _emwgpuBufferUnmap(bufferPtr) {
  bufferPtr >>>= 0;
  var buffer = WebGPU.getJsObject(bufferPtr);
  var onUnmap = WebGPU.Internals.bufferOnUnmaps[bufferPtr];
  if (!onUnmap) {
    return;
  }
  for (var i = 0; i < onUnmap.length; ++i) {
    onUnmap[i]();
  }
  delete WebGPU.Internals.bufferOnUnmaps[bufferPtr];
  buffer.unmap();
}
function _emwgpuDelete(ptr) {
  ptr >>>= 0;
  delete WebGPU.Internals.jsObjects[ptr];
}
function _emwgpuDeviceCreateBuffer(devicePtr, descriptor, bufferPtr) {
  devicePtr >>>= 0;
  descriptor >>>= 0;
  bufferPtr >>>= 0;
  var mappedAtCreation = !!(growMemViews(), HEAPU32)[
    ((descriptor + 32) >>> 2) >>> 0
  ];
  var desc = {
    label: WebGPU.makeStringFromOptionalStringView(descriptor + 4),
    usage: (growMemViews(), HEAPU32)[((descriptor + 16) >>> 2) >>> 0],
    size: readI53FromI64(descriptor + 24),
    mappedAtCreation,
  };
  var device = WebGPU.getJsObject(devicePtr);
  var buffer;
  try {
    buffer = device.createBuffer(desc);
  } catch (ex) {
    return false;
  }
  WebGPU.Internals.jsObjectInsert(bufferPtr, buffer);
  if (mappedAtCreation) {
    WebGPU.Internals.bufferOnUnmaps[bufferPtr] = [];
  }
  return true;
}
function _emwgpuDeviceCreateShaderModule(
  devicePtr,
  descriptor,
  shaderModulePtr
) {
  devicePtr >>>= 0;
  descriptor >>>= 0;
  shaderModulePtr >>>= 0;
  var nextInChainPtr = (growMemViews(), HEAPU32)[(descriptor >>> 2) >>> 0];
  var sType = (growMemViews(), HEAP32)[((nextInChainPtr + 4) >>> 2) >>> 0];
  var desc = {
    label: WebGPU.makeStringFromOptionalStringView(descriptor + 4),
    code: '',
  };
  switch (sType) {
    case 2: {
      desc['code'] = WebGPU.makeStringFromStringView(nextInChainPtr + 8);
      break;
    }
  }
  var device = WebGPU.getJsObject(devicePtr);
  WebGPU.Internals.jsObjectInsert(
    shaderModulePtr,
    device.createShaderModule(desc)
  );
}
var _emwgpuDeviceDestroy = (devicePtr) => {
  const device = WebGPU.getJsObject(devicePtr);
  device.onuncapturederror = null;
  device.destroy();
};
function _emwgpuInstanceRequestAdapter(
  instancePtr,
  futureId,
  options,
  adapterPtr
) {
  instancePtr >>>= 0;
  futureId = bigintToI53Checked(futureId);
  options >>>= 0;
  adapterPtr >>>= 0;
  var opts;
  if (options) {
    opts = {
      featureLevel:
        WebGPU.FeatureLevel[
          (growMemViews(), HEAP32)[((options + 4) >>> 2) >>> 0]
        ],
      powerPreference:
        WebGPU.PowerPreference[
          (growMemViews(), HEAP32)[((options + 8) >>> 2) >>> 0]
        ],
      forceFallbackAdapter: !!(growMemViews(), HEAPU32)[
        ((options + 12) >>> 2) >>> 0
      ],
    };
    var nextInChainPtr = (growMemViews(), HEAPU32)[(options >>> 2) >>> 0];
    if (nextInChainPtr !== 0) {
      var sType = (growMemViews(), HEAP32)[((nextInChainPtr + 4) >>> 2) >>> 0];
      var webxrOptions = nextInChainPtr;
      opts.xrCompatible = !!(growMemViews(), HEAPU32)[
        ((webxrOptions + 8) >>> 2) >>> 0
      ];
    }
  }
  if (!('gpu' in navigator)) {
    var sp = stackSave();
    var messagePtr = stringToUTF8OnStack(
      'WebGPU not available on this browser (navigator.gpu is not available)'
    );
    _emwgpuOnRequestAdapterCompleted(futureId, 3, adapterPtr, messagePtr);
    stackRestore(sp);
    return;
  }
  runtimeKeepalivePush();
  WebGPU.Internals.futureInsert(
    futureId,
    navigator.gpu.requestAdapter(opts).then(
      (adapter) => {
        runtimeKeepalivePop();
        callUserCallback(() => {
          if (adapter) {
            WebGPU.Internals.jsObjectInsert(adapterPtr, adapter);
            _emwgpuOnRequestAdapterCompleted(futureId, 1, adapterPtr, 0);
          } else {
            var sp = stackSave();
            var messagePtr = stringToUTF8OnStack(
              'WebGPU not available on this browser (requestAdapter returned null)'
            );
            _emwgpuOnRequestAdapterCompleted(
              futureId,
              3,
              adapterPtr,
              messagePtr
            );
            stackRestore(sp);
          }
        });
      },
      (ex) => {
        runtimeKeepalivePop();
        callUserCallback(() => {
          var sp = stackSave();
          var messagePtr = stringToUTF8OnStack(ex.message);
          _emwgpuOnRequestAdapterCompleted(futureId, 4, adapterPtr, messagePtr);
          stackRestore(sp);
        });
      }
    )
  );
}
var _emwgpuQueueOnSubmittedWorkDone = function (queuePtr, futureId) {
  queuePtr >>>= 0;
  futureId = bigintToI53Checked(futureId);
  var queue = WebGPU.getJsObject(queuePtr);
  runtimeKeepalivePush();
  WebGPU.Internals.futureInsert(
    futureId,
    queue.onSubmittedWorkDone().then(() => {
      runtimeKeepalivePop();
      callUserCallback(() => {
        _emwgpuOnWorkDoneCompleted(futureId, 1);
      });
    })
  );
};
var _emwgpuWaitAny = function (futurePtr, futureCount, timeoutMSPtr) {
  futurePtr >>>= 0;
  futureCount >>>= 0;
  timeoutMSPtr >>>= 0;
  return Asyncify.handleAsync(async () => {
    var promises = [];
    if (timeoutMSPtr) {
      var timeoutMS = (growMemViews(), HEAP32)[(timeoutMSPtr >>> 2) >>> 0];
      promises.length = futureCount + 1;
      promises[futureCount] = new Promise((resolve) =>
        setTimeout(resolve, timeoutMS, 0)
      );
    } else {
      promises.length = futureCount;
    }
    for (var i = 0; i < futureCount; ++i) {
      var futureId = readI53FromI64(futurePtr + i * 8);
      if (!(futureId in WebGPU.Internals.futures)) {
        return futureId;
      }
      promises[i] = WebGPU.Internals.futures[futureId];
    }
    const firstResolvedFuture = await Promise.race(promises);
    delete WebGPU.Internals.futures[firstResolvedFuture];
    return firstResolvedFuture;
  });
};
_emwgpuWaitAny.isAsync = true;
var ENV = {};
var getExecutableName = () => thisProgram || './this.program';
var getEnvStrings = () => {
  if (!getEnvStrings.strings) {
    var lang =
      ((typeof navigator == 'object' && navigator.language) || 'C').replace(
        '-',
        '_'
      ) + '.UTF-8';
    var env = {
      USER: 'web_user',
      LOGNAME: 'web_user',
      PATH: '/',
      PWD: '/',
      HOME: '/home/web_user',
      LANG: lang,
      _: getExecutableName(),
    };
    for (var x in ENV) {
      if (ENV[x] === undefined) delete env[x];
      else env[x] = ENV[x];
    }
    var strings = [];
    for (var x in env) {
      strings.push(\`\${x}=\${env[x]}\`);
    }
    getEnvStrings.strings = strings;
  }
  return getEnvStrings.strings;
};
function _environ_get(__environ, environ_buf) {
  if (ENVIRONMENT_IS_PTHREAD)
    return proxyToMainThread(9, 0, 1, __environ, environ_buf);
  __environ >>>= 0;
  environ_buf >>>= 0;
  var bufSize = 0;
  var envp = 0;
  for (var string of getEnvStrings()) {
    var ptr = environ_buf + bufSize;
    (growMemViews(), HEAPU32)[((__environ + envp) >>> 2) >>> 0] = ptr;
    bufSize += stringToUTF8(string, ptr, Infinity) + 1;
    envp += 4;
  }
  return 0;
}
function _environ_sizes_get(penviron_count, penviron_buf_size) {
  if (ENVIRONMENT_IS_PTHREAD)
    return proxyToMainThread(10, 0, 1, penviron_count, penviron_buf_size);
  penviron_count >>>= 0;
  penviron_buf_size >>>= 0;
  var strings = getEnvStrings();
  (growMemViews(), HEAPU32)[(penviron_count >>> 2) >>> 0] = strings.length;
  var bufSize = 0;
  for (var string of strings) {
    bufSize += lengthBytesUTF8(string) + 1;
  }
  (growMemViews(), HEAPU32)[(penviron_buf_size >>> 2) >>> 0] = bufSize;
  return 0;
}
function _fd_close(fd) {
  if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(11, 0, 1, fd);
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    FS.close(stream);
    return 0;
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
}
var doReadv = (stream, iov, iovcnt, offset) => {
  var ret = 0;
  for (var i = 0; i < iovcnt; i++) {
    var ptr = (growMemViews(), HEAPU32)[(iov >>> 2) >>> 0];
    var len = (growMemViews(), HEAPU32)[((iov + 4) >>> 2) >>> 0];
    iov += 8;
    var curr = FS.read(stream, (growMemViews(), HEAP8), ptr, len, offset);
    if (curr < 0) return -1;
    ret += curr;
    if (curr < len) break;
    if (typeof offset != 'undefined') {
      offset += curr;
    }
  }
  return ret;
};
function _fd_read(fd, iov, iovcnt, pnum) {
  if (ENVIRONMENT_IS_PTHREAD)
    return proxyToMainThread(12, 0, 1, fd, iov, iovcnt, pnum);
  iov >>>= 0;
  iovcnt >>>= 0;
  pnum >>>= 0;
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    var num = doReadv(stream, iov, iovcnt);
    (growMemViews(), HEAPU32)[(pnum >>> 2) >>> 0] = num;
    return 0;
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
}
function _fd_seek(fd, offset, whence, newOffset) {
  if (ENVIRONMENT_IS_PTHREAD)
    return proxyToMainThread(13, 0, 1, fd, offset, whence, newOffset);
  offset = bigintToI53Checked(offset);
  newOffset >>>= 0;
  try {
    if (isNaN(offset)) return 61;
    var stream = SYSCALLS.getStreamFromFD(fd);
    FS.llseek(stream, offset, whence);
    (growMemViews(), HEAP64)[(newOffset >>> 3) >>> 0] = BigInt(stream.position);
    if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null;
    return 0;
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
}
var doWritev = (stream, iov, iovcnt, offset) => {
  var ret = 0;
  for (var i = 0; i < iovcnt; i++) {
    var ptr = (growMemViews(), HEAPU32)[(iov >>> 2) >>> 0];
    var len = (growMemViews(), HEAPU32)[((iov + 4) >>> 2) >>> 0];
    iov += 8;
    var curr = FS.write(stream, (growMemViews(), HEAP8), ptr, len, offset);
    if (curr < 0) return -1;
    ret += curr;
    if (curr < len) {
      break;
    }
    if (typeof offset != 'undefined') {
      offset += curr;
    }
  }
  return ret;
};
function _fd_write(fd, iov, iovcnt, pnum) {
  if (ENVIRONMENT_IS_PTHREAD)
    return proxyToMainThread(14, 0, 1, fd, iov, iovcnt, pnum);
  iov >>>= 0;
  iovcnt >>>= 0;
  pnum >>>= 0;
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    var num = doWritev(stream, iov, iovcnt);
    (growMemViews(), HEAPU32)[(pnum >>> 2) >>> 0] = num;
    return 0;
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
}
function _random_get(buffer, size) {
  buffer >>>= 0;
  size >>>= 0;
  try {
    randomFill(
      (growMemViews(), HEAPU8).subarray(buffer >>> 0, (buffer + size) >>> 0)
    );
    return 0;
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
}
var emwgpuStringToInt_FeatureName = {
  'core-features-and-limits': 1,
  'depth-clip-control': 2,
  'depth32float-stencil8': 3,
  'texture-compression-bc': 4,
  'texture-compression-bc-sliced-3d': 5,
  'texture-compression-etc2': 6,
  'texture-compression-astc': 7,
  'texture-compression-astc-sliced-3d': 8,
  'timestamp-query': 9,
  'indirect-first-instance': 10,
  'shader-f16': 11,
  'rg11b10ufloat-renderable': 12,
  'bgra8unorm-storage': 13,
  'float32-filterable': 14,
  'float32-blendable': 15,
  'clip-distances': 16,
  'dual-source-blending': 17,
  subgroups: 18,
  'texture-formats-tier1': 19,
  'texture-formats-tier2': 20,
  'primitive-index': 21,
  'texture-component-swizzle': 22,
  'chromium-experimental-unorm16-texture-formats': 327692,
  'chromium-experimental-multi-draw-indirect': 327729,
};
function _wgpuAdapterGetFeatures(adapterPtr, supportedFeatures) {
  adapterPtr >>>= 0;
  supportedFeatures >>>= 0;
  var adapter = WebGPU.getJsObject(adapterPtr);
  var featuresPtr = _malloc(adapter.features.size * 4);
  var offset = 0;
  var numFeatures = 0;
  for (const feature of adapter.features) {
    var featureEnumValue = emwgpuStringToInt_FeatureName[feature];
    if (featureEnumValue >= 0) {
      (growMemViews(), HEAP32)[((featuresPtr + offset) >>> 2) >>> 0] =
        featureEnumValue;
      offset += 4;
      numFeatures++;
    }
  }
  (growMemViews(), HEAPU32)[((supportedFeatures + 4) >>> 2) >>> 0] =
    featuresPtr;
  (growMemViews(), HEAPU32)[(supportedFeatures >>> 2) >>> 0] = numFeatures;
}
function _wgpuAdapterGetInfo(adapterPtr, info) {
  adapterPtr >>>= 0;
  info >>>= 0;
  var adapter = WebGPU.getJsObject(adapterPtr);
  WebGPU.fillAdapterInfoStruct(adapter.info, info);
  return 1;
}
function _wgpuAdapterGetLimits(adapterPtr, limitsOutPtr) {
  adapterPtr >>>= 0;
  limitsOutPtr >>>= 0;
  var adapter = WebGPU.getJsObject(adapterPtr);
  WebGPU.fillLimitStruct(adapter.limits, limitsOutPtr);
  return 1;
}
function _wgpuAdapterHasFeature(adapterPtr, featureEnumValue) {
  adapterPtr >>>= 0;
  var adapter = WebGPU.getJsObject(adapterPtr);
  return adapter.features.has(WebGPU.FeatureName[featureEnumValue]);
}
var _wgpuBufferGetSize = function (bufferPtr) {
  bufferPtr >>>= 0;
  var ret = (() => {
    var buffer = WebGPU.getJsObject(bufferPtr);
    return buffer.size;
  })();
  return BigInt(ret);
};
function _wgpuCommandEncoderBeginComputePass(encoderPtr, descriptor) {
  encoderPtr >>>= 0;
  descriptor >>>= 0;
  var desc;
  if (descriptor) {
    desc = {
      label: WebGPU.makeStringFromOptionalStringView(descriptor + 4),
      timestampWrites: WebGPU.makePassTimestampWrites(
        (growMemViews(), HEAPU32)[((descriptor + 12) >>> 2) >>> 0]
      ),
    };
  }
  var commandEncoder = WebGPU.getJsObject(encoderPtr);
  var ptr = _emwgpuCreateComputePassEncoder(0);
  WebGPU.Internals.jsObjectInsert(ptr, commandEncoder.beginComputePass(desc));
  return ptr;
}
function _wgpuCommandEncoderCopyBufferToBuffer(
  encoderPtr,
  srcPtr,
  srcOffset,
  dstPtr,
  dstOffset,
  size
) {
  encoderPtr >>>= 0;
  srcPtr >>>= 0;
  srcOffset = bigintToI53Checked(srcOffset);
  dstPtr >>>= 0;
  dstOffset = bigintToI53Checked(dstOffset);
  size = bigintToI53Checked(size);
  var commandEncoder = WebGPU.getJsObject(encoderPtr);
  var src = WebGPU.getJsObject(srcPtr);
  var dst = WebGPU.getJsObject(dstPtr);
  commandEncoder.copyBufferToBuffer(src, srcOffset, dst, dstOffset, size);
}
function _wgpuCommandEncoderFinish(encoderPtr, descriptor) {
  encoderPtr >>>= 0;
  descriptor >>>= 0;
  var commandEncoder = WebGPU.getJsObject(encoderPtr);
  var ptr = _emwgpuCreateCommandBuffer(0);
  WebGPU.Internals.jsObjectInsert(ptr, commandEncoder.finish());
  return ptr;
}
function _wgpuComputePassEncoderDispatchWorkgroups(passPtr, x, y, z) {
  passPtr >>>= 0;
  var pass = WebGPU.getJsObject(passPtr);
  pass.dispatchWorkgroups(x, y, z);
}
function _wgpuComputePassEncoderEnd(passPtr) {
  passPtr >>>= 0;
  var pass = WebGPU.getJsObject(passPtr);
  pass.end();
}
function _wgpuComputePassEncoderSetBindGroup(
  passPtr,
  groupIndex,
  groupPtr,
  dynamicOffsetCount,
  dynamicOffsetsPtr
) {
  passPtr >>>= 0;
  groupPtr >>>= 0;
  dynamicOffsetCount >>>= 0;
  dynamicOffsetsPtr >>>= 0;
  var pass = WebGPU.getJsObject(passPtr);
  var group = WebGPU.getJsObject(groupPtr);
  if (dynamicOffsetCount == 0) {
    pass.setBindGroup(groupIndex, group);
  } else {
    pass.setBindGroup(
      groupIndex,
      group,
      (growMemViews(), HEAPU32),
      dynamicOffsetsPtr >>> 2,
      dynamicOffsetCount
    );
  }
}
function _wgpuComputePassEncoderSetPipeline(passPtr, pipelinePtr) {
  passPtr >>>= 0;
  pipelinePtr >>>= 0;
  var pass = WebGPU.getJsObject(passPtr);
  var pipeline = WebGPU.getJsObject(pipelinePtr);
  pass.setPipeline(pipeline);
}
function _wgpuComputePipelineGetBindGroupLayout(pipelinePtr, groupIndex) {
  pipelinePtr >>>= 0;
  var pipeline = WebGPU.getJsObject(pipelinePtr);
  var ptr = _emwgpuCreateBindGroupLayout(0);
  WebGPU.Internals.jsObjectInsert(ptr, pipeline.getBindGroupLayout(groupIndex));
  return ptr;
}
var _wgpuDeviceCreateBindGroup = function (devicePtr, descriptor) {
  devicePtr >>>= 0;
  descriptor >>>= 0;
  function makeEntry(entryPtr) {
    var bufferPtr = (growMemViews(), HEAPU32)[((entryPtr + 8) >>> 2) >>> 0];
    var samplerPtr = (growMemViews(), HEAPU32)[((entryPtr + 32) >>> 2) >>> 0];
    var textureViewPtr = (growMemViews(), HEAPU32)[
      ((entryPtr + 36) >>> 2) >>> 0
    ];
    var externalTexturePtr = 0;
    WebGPU.iterateExtensions(entryPtr, {
      327681: (ptr) => {
        externalTexturePtr = (growMemViews(), HEAPU32)[((ptr + 8) >>> 2) >>> 0];
      },
    });
    var resource;
    if (bufferPtr) {
      var size = readI53FromI64(entryPtr + 24);
      if (size == -1) size = undefined;
      resource = {
        buffer: WebGPU.getJsObject(bufferPtr),
        offset: readI53FromI64(entryPtr + 16),
        size,
      };
    } else {
      resource = WebGPU.getJsObject(
        samplerPtr || textureViewPtr || externalTexturePtr
      );
    }
    return {
      binding: (growMemViews(), HEAPU32)[((entryPtr + 4) >>> 2) >>> 0],
      resource,
    };
  }
  function makeEntries(count, entriesPtrs) {
    var entries = [];
    for (var i = 0; i < count; ++i) {
      entries.push(makeEntry(entriesPtrs + 40 * i));
    }
    return entries;
  }
  var desc = {
    label: WebGPU.makeStringFromOptionalStringView(descriptor + 4),
    layout: WebGPU.getJsObject(
      (growMemViews(), HEAPU32)[((descriptor + 12) >>> 2) >>> 0]
    ),
    entries: makeEntries(
      (growMemViews(), HEAPU32)[((descriptor + 16) >>> 2) >>> 0],
      (growMemViews(), HEAPU32)[((descriptor + 20) >>> 2) >>> 0]
    ),
  };
  var device = WebGPU.getJsObject(devicePtr);
  var ptr = _emwgpuCreateBindGroup(0);
  WebGPU.Internals.jsObjectInsert(ptr, device.createBindGroup(desc));
  return ptr;
};
function _wgpuDeviceCreateCommandEncoder(devicePtr, descriptor) {
  devicePtr >>>= 0;
  descriptor >>>= 0;
  var desc;
  if (descriptor) {
    desc = { label: WebGPU.makeStringFromOptionalStringView(descriptor + 4) };
  }
  var device = WebGPU.getJsObject(devicePtr);
  var ptr = _emwgpuCreateCommandEncoder(0);
  WebGPU.Internals.jsObjectInsert(ptr, device.createCommandEncoder(desc));
  return ptr;
}
function _wgpuDeviceCreateComputePipeline(devicePtr, descriptor) {
  devicePtr >>>= 0;
  descriptor >>>= 0;
  var desc = WebGPU.makeComputePipelineDesc(descriptor);
  var device = WebGPU.getJsObject(devicePtr);
  var ptr = _emwgpuCreateComputePipeline(0);
  WebGPU.Internals.jsObjectInsert(ptr, device.createComputePipeline(desc));
  return ptr;
}
var _wgpuQueueSubmit = function (queuePtr, commandCount, commands) {
  queuePtr >>>= 0;
  commandCount >>>= 0;
  commands >>>= 0;
  var queue = WebGPU.getJsObject(queuePtr);
  var cmds = Array.from(
    (growMemViews(), HEAP32).subarray(
      (commands >>> 2) >>> 0,
      ((commands + commandCount * 4) >>> 2) >>> 0
    ),
    (id) => WebGPU.getJsObject(id)
  );
  queue.submit(cmds);
};
function _wgpuQueueWriteBuffer(queuePtr, bufferPtr, bufferOffset, data, size) {
  queuePtr >>>= 0;
  bufferPtr >>>= 0;
  bufferOffset = bigintToI53Checked(bufferOffset);
  data >>>= 0;
  size >>>= 0;
  var queue = WebGPU.getJsObject(queuePtr);
  var buffer = WebGPU.getJsObject(bufferPtr);
  var subarray = (growMemViews(), HEAPU8).subarray(
    data >>> 0,
    (data + size) >>> 0
  );
  queue.writeBuffer(buffer, bufferOffset, subarray, 0, size);
}
var Asyncify = {
  instrumentWasmImports(imports) {
    var importPattern = /^(invoke_.*|__asyncjs__.*)$/;
    for (let [x, original] of Object.entries(imports)) {
      if (typeof original == 'function') {
        let isAsyncifyImport = original.isAsync || importPattern.test(x);
        if (isAsyncifyImport) {
          imports[x] = original = new WebAssembly.Suspending(original);
        }
      }
    }
  },
  instrumentFunction(original) {
    var wrapper = (...args) => original(...args);
    return wrapper;
  },
  instrumentWasmExports(exports) {
    var exportPattern = /^(wllama_start|wllama_action|main|__main_argc_argv)$/;
    Asyncify.asyncExports = new Set();
    var ret = {};
    for (let [x, original] of Object.entries(exports)) {
      if (typeof original == 'function') {
        let isAsyncifyExport = exportPattern.test(x);
        if (isAsyncifyExport) {
          Asyncify.asyncExports.add(original);
          original = Asyncify.makeAsyncFunction(original);
        }
        var wrapper = Asyncify.instrumentFunction(original);
        ret[x] = wrapper;
      } else {
        ret[x] = original;
      }
    }
    return ret;
  },
  asyncExports: null,
  isAsyncExport(func) {
    return Asyncify.asyncExports?.has(func);
  },
  handleAsync: async (startAsync) => {
    runtimeKeepalivePush();
    try {
      return await startAsync();
    } finally {
      runtimeKeepalivePop();
    }
  },
  handleSleep: (startAsync) =>
    Asyncify.handleAsync(() => new Promise(startAsync)),
  makeAsyncFunction(original) {
    return WebAssembly.promising(original);
  },
};
var getCFunc = (ident) => {
  var func = Module['_' + ident];
  return func;
};
var writeArrayToMemory = (array, buffer) => {
  (growMemViews(), HEAP8).set(array, buffer >>> 0);
};
var ccall = (ident, returnType, argTypes, args, opts) => {
  var toC = {
    string: (str) => {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) {
        ret = stringToUTF8OnStack(str);
      }
      return ret;
    },
    array: (arr) => {
      var ret = stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    },
  };
  function convertReturnValue(ret) {
    if (returnType === 'string') {
      return UTF8ToString(ret);
    }
    if (returnType === 'pointer') return ret >>> 0;
    if (returnType === 'boolean') return Boolean(ret);
    return ret;
  }
  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  var ret = func(...cArgs);
  function onDone(ret) {
    if (stack !== 0) stackRestore(stack);
    return convertReturnValue(ret);
  }
  var asyncMode = opts?.async;
  if (asyncMode) return ret.then(onDone);
  ret = onDone(ret);
  return ret;
};
var cwrap = (ident, returnType, argTypes, opts) => {
  var numericArgs =
    !argTypes ||
    argTypes.every((type) => type === 'number' || type === 'boolean');
  var numericRet = returnType !== 'string';
  if (numericRet && numericArgs && !opts) {
    return getCFunc(ident);
  }
  return (...args) => ccall(ident, returnType, argTypes, args, opts);
};
var FS_createPath = (...args) => FS.createPath(...args);
var FS_unlink = (...args) => FS.unlink(...args);
var FS_createLazyFile = (...args) => FS.createLazyFile(...args);
var FS_createDevice = (...args) => FS.createDevice(...args);
PThread.init();
FS.createPreloadedFile = FS_createPreloadedFile;
FS.preloadFile = FS_preloadFile;
FS.staticInit();
{
  initMemory();
  if (Module['noExitRuntime']) noExitRuntime = Module['noExitRuntime'];
  if (Module['preloadPlugins']) preloadPlugins = Module['preloadPlugins'];
  if (Module['print']) out = Module['print'];
  if (Module['printErr']) err = Module['printErr'];
  if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];
  if (Module['arguments']) arguments_ = Module['arguments'];
  if (Module['thisProgram']) thisProgram = Module['thisProgram'];
  if (Module['preInit']) {
    if (typeof Module['preInit'] == 'function')
      Module['preInit'] = [Module['preInit']];
    while (Module['preInit'].length > 0) {
      Module['preInit'].shift()();
    }
  }
}
Module['mmapAlloc'] = mmapAlloc;
Module['addRunDependency'] = addRunDependency;
Module['removeRunDependency'] = removeRunDependency;
Module['ccall'] = ccall;
Module['cwrap'] = cwrap;
Module['FS_preloadFile'] = FS_preloadFile;
Module['FS_unlink'] = FS_unlink;
Module['FS_createPath'] = FS_createPath;
Module['FS_createDevice'] = FS_createDevice;
Module['FS'] = FS;
Module['FS_createDataFile'] = FS_createDataFile;
Module['FS_createLazyFile'] = FS_createLazyFile;
Module['MEMFS'] = MEMFS;
var proxiedFunctionTable = [
  _proc_exit,
  exitOnMainThread,
  pthreadCreateProxied,
  ___syscall_fcntl64,
  ___syscall_ioctl,
  ___syscall_openat,
  __mmap_js,
  __munmap_js,
  __setitimer_js,
  _environ_get,
  _environ_sizes_get,
  _fd_close,
  _fd_read,
  _fd_seek,
  _fd_write,
];
function ggml_webgpu_is_ios_browser() {
  const ua = navigator.userAgent;
  return ua.includes('iPhone') || ua.includes('iPad') ? 1 : 0;
}
ggml_webgpu_is_ios_browser.sig = 'i';
var _wllama_malloc,
  _wllama_start,
  _wllama_action,
  _wllama_exit,
  _wllama_debug,
  _main,
  _malloc,
  _free,
  _emwgpuCreateBindGroup,
  _emwgpuCreateBindGroupLayout,
  _emwgpuCreateCommandBuffer,
  _emwgpuCreateCommandEncoder,
  _emwgpuCreateComputePassEncoder,
  _emwgpuCreateComputePipeline,
  _emwgpuCreateExternalTexture,
  _emwgpuCreatePipelineLayout,
  _emwgpuCreateQuerySet,
  _emwgpuCreateRenderBundle,
  _emwgpuCreateRenderBundleEncoder,
  _emwgpuCreateRenderPassEncoder,
  _emwgpuCreateRenderPipeline,
  _emwgpuCreateSampler,
  _emwgpuCreateSurface,
  _emwgpuCreateTexture,
  _emwgpuCreateTextureView,
  _emwgpuCreateAdapter,
  _emwgpuCreateBuffer,
  _emwgpuCreateDevice,
  _emwgpuCreateQueue,
  _emwgpuCreateShaderModule,
  _emwgpuOnDeviceLostCompleted,
  _emwgpuOnMapAsyncCompleted,
  _emwgpuOnRequestAdapterCompleted,
  _emwgpuOnRequestDeviceCompleted,
  _emwgpuOnWorkDoneCompleted,
  _emwgpuOnUncapturedError,
  __emscripten_tls_init,
  _pthread_self,
  _emscripten_builtin_memalign,
  __emscripten_thread_init,
  __emscripten_thread_crashed,
  __emscripten_run_js_on_main_thread,
  __emscripten_thread_free_data,
  __emscripten_thread_exit,
  __emscripten_timeout,
  __emscripten_check_mailbox,
  _memalign,
  ___trap,
  _emscripten_stack_set_limits,
  __emscripten_stack_restore,
  __emscripten_stack_alloc,
  _emscripten_stack_get_current,
  __indirect_function_table,
  wasmTable;
function assignWasmExports(wasmExports) {
  _wllama_malloc = Module['_wllama_malloc'] = wasmExports['wllama_malloc'];
  _wllama_start = Module['_wllama_start'] = wasmExports['wllama_start'];
  _wllama_action = Module['_wllama_action'] = wasmExports['wllama_action'];
  _wllama_exit = Module['_wllama_exit'] = wasmExports['wllama_exit'];
  _wllama_debug = Module['_wllama_debug'] = wasmExports['wllama_debug'];
  _main = Module['_main'] = wasmExports['main'];
  _malloc = wasmExports['malloc'];
  _free = wasmExports['free'];
  _emwgpuCreateBindGroup = wasmExports['emwgpuCreateBindGroup'];
  _emwgpuCreateBindGroupLayout = wasmExports['emwgpuCreateBindGroupLayout'];
  _emwgpuCreateCommandBuffer = wasmExports['emwgpuCreateCommandBuffer'];
  _emwgpuCreateCommandEncoder = wasmExports['emwgpuCreateCommandEncoder'];
  _emwgpuCreateComputePassEncoder =
    wasmExports['emwgpuCreateComputePassEncoder'];
  _emwgpuCreateComputePipeline = wasmExports['emwgpuCreateComputePipeline'];
  _emwgpuCreateExternalTexture = wasmExports['emwgpuCreateExternalTexture'];
  _emwgpuCreatePipelineLayout = wasmExports['emwgpuCreatePipelineLayout'];
  _emwgpuCreateQuerySet = wasmExports['emwgpuCreateQuerySet'];
  _emwgpuCreateRenderBundle = wasmExports['emwgpuCreateRenderBundle'];
  _emwgpuCreateRenderBundleEncoder =
    wasmExports['emwgpuCreateRenderBundleEncoder'];
  _emwgpuCreateRenderPassEncoder = wasmExports['emwgpuCreateRenderPassEncoder'];
  _emwgpuCreateRenderPipeline = wasmExports['emwgpuCreateRenderPipeline'];
  _emwgpuCreateSampler = wasmExports['emwgpuCreateSampler'];
  _emwgpuCreateSurface = wasmExports['emwgpuCreateSurface'];
  _emwgpuCreateTexture = wasmExports['emwgpuCreateTexture'];
  _emwgpuCreateTextureView = wasmExports['emwgpuCreateTextureView'];
  _emwgpuCreateAdapter = wasmExports['emwgpuCreateAdapter'];
  _emwgpuCreateBuffer = wasmExports['emwgpuCreateBuffer'];
  _emwgpuCreateDevice = wasmExports['emwgpuCreateDevice'];
  _emwgpuCreateQueue = wasmExports['emwgpuCreateQueue'];
  _emwgpuCreateShaderModule = wasmExports['emwgpuCreateShaderModule'];
  _emwgpuOnDeviceLostCompleted = wasmExports['emwgpuOnDeviceLostCompleted'];
  _emwgpuOnMapAsyncCompleted = wasmExports['emwgpuOnMapAsyncCompleted'];
  _emwgpuOnRequestAdapterCompleted =
    wasmExports['emwgpuOnRequestAdapterCompleted'];
  _emwgpuOnRequestDeviceCompleted =
    wasmExports['emwgpuOnRequestDeviceCompleted'];
  _emwgpuOnWorkDoneCompleted = wasmExports['emwgpuOnWorkDoneCompleted'];
  _emwgpuOnUncapturedError = wasmExports['emwgpuOnUncapturedError'];
  __emscripten_tls_init = wasmExports['_emscripten_tls_init'];
  _pthread_self = wasmExports['pthread_self'];
  _emscripten_builtin_memalign = wasmExports['emscripten_builtin_memalign'];
  __emscripten_thread_init = wasmExports['_emscripten_thread_init'];
  __emscripten_thread_crashed = wasmExports['_emscripten_thread_crashed'];
  __emscripten_run_js_on_main_thread =
    wasmExports['_emscripten_run_js_on_main_thread'];
  __emscripten_thread_free_data = wasmExports['_emscripten_thread_free_data'];
  __emscripten_thread_exit = wasmExports['_emscripten_thread_exit'];
  __emscripten_timeout = wasmExports['_emscripten_timeout'];
  __emscripten_check_mailbox = wasmExports['_emscripten_check_mailbox'];
  _memalign = wasmExports['memalign'];
  ___trap = wasmExports['__trap'];
  _emscripten_stack_set_limits = wasmExports['emscripten_stack_set_limits'];
  __emscripten_stack_restore = wasmExports['_emscripten_stack_restore'];
  __emscripten_stack_alloc = wasmExports['_emscripten_stack_alloc'];
  _emscripten_stack_get_current = wasmExports['emscripten_stack_get_current'];
  __indirect_function_table = wasmTable =
    wasmExports['__indirect_function_table'];
}
var wasmImports;
function assignWasmImports() {
  wasmImports = {
    __pthread_create_js: ___pthread_create_js,
    __syscall_fcntl64: ___syscall_fcntl64,
    __syscall_ioctl: ___syscall_ioctl,
    __syscall_openat: ___syscall_openat,
    _abort_js: __abort_js,
    _emscripten_init_main_thread_js: __emscripten_init_main_thread_js,
    _emscripten_notify_mailbox_postmessage:
      __emscripten_notify_mailbox_postmessage,
    _emscripten_receive_on_main_thread_js:
      __emscripten_receive_on_main_thread_js,
    _emscripten_runtime_keepalive_clear: __emscripten_runtime_keepalive_clear,
    _emscripten_thread_cleanup: __emscripten_thread_cleanup,
    _emscripten_thread_mailbox_await: __emscripten_thread_mailbox_await,
    _emscripten_thread_set_strongref: __emscripten_thread_set_strongref,
    _mmap_js: __mmap_js,
    _munmap_js: __munmap_js,
    _setitimer_js: __setitimer_js,
    _tzset_js: __tzset_js,
    clock_time_get: _clock_time_get,
    emscripten_check_blocking_allowed: _emscripten_check_blocking_allowed,
    emscripten_date_now: _emscripten_date_now,
    emscripten_exit_with_live_runtime: _emscripten_exit_with_live_runtime,
    emscripten_get_heap_max: _emscripten_get_heap_max,
    emscripten_get_now: _emscripten_get_now,
    emscripten_has_asyncify: _emscripten_has_asyncify,
    emscripten_num_logical_cores: _emscripten_num_logical_cores,
    emscripten_resize_heap: _emscripten_resize_heap,
    emwgpuAdapterRequestDevice: _emwgpuAdapterRequestDevice,
    emwgpuBufferDestroy: _emwgpuBufferDestroy,
    emwgpuBufferGetConstMappedRange: _emwgpuBufferGetConstMappedRange,
    emwgpuBufferMapAsync: _emwgpuBufferMapAsync,
    emwgpuBufferUnmap: _emwgpuBufferUnmap,
    emwgpuDelete: _emwgpuDelete,
    emwgpuDeviceCreateBuffer: _emwgpuDeviceCreateBuffer,
    emwgpuDeviceCreateShaderModule: _emwgpuDeviceCreateShaderModule,
    emwgpuDeviceDestroy: _emwgpuDeviceDestroy,
    emwgpuInstanceRequestAdapter: _emwgpuInstanceRequestAdapter,
    emwgpuQueueOnSubmittedWorkDone: _emwgpuQueueOnSubmittedWorkDone,
    emwgpuWaitAny: _emwgpuWaitAny,
    environ_get: _environ_get,
    environ_sizes_get: _environ_sizes_get,
    exit: _exit,
    fd_close: _fd_close,
    fd_read: _fd_read,
    fd_seek: _fd_seek,
    fd_write: _fd_write,
    ggml_webgpu_is_ios_browser,
    memory: wasmMemory,
    proc_exit: _proc_exit,
    random_get: _random_get,
    wgpuAdapterGetFeatures: _wgpuAdapterGetFeatures,
    wgpuAdapterGetInfo: _wgpuAdapterGetInfo,
    wgpuAdapterGetLimits: _wgpuAdapterGetLimits,
    wgpuAdapterHasFeature: _wgpuAdapterHasFeature,
    wgpuBufferGetSize: _wgpuBufferGetSize,
    wgpuCommandEncoderBeginComputePass: _wgpuCommandEncoderBeginComputePass,
    wgpuCommandEncoderCopyBufferToBuffer: _wgpuCommandEncoderCopyBufferToBuffer,
    wgpuCommandEncoderFinish: _wgpuCommandEncoderFinish,
    wgpuComputePassEncoderDispatchWorkgroups:
      _wgpuComputePassEncoderDispatchWorkgroups,
    wgpuComputePassEncoderEnd: _wgpuComputePassEncoderEnd,
    wgpuComputePassEncoderSetBindGroup: _wgpuComputePassEncoderSetBindGroup,
    wgpuComputePassEncoderSetPipeline: _wgpuComputePassEncoderSetPipeline,
    wgpuComputePipelineGetBindGroupLayout:
      _wgpuComputePipelineGetBindGroupLayout,
    wgpuDeviceCreateBindGroup: _wgpuDeviceCreateBindGroup,
    wgpuDeviceCreateCommandEncoder: _wgpuDeviceCreateCommandEncoder,
    wgpuDeviceCreateComputePipeline: _wgpuDeviceCreateComputePipeline,
    wgpuQueueSubmit: _wgpuQueueSubmit,
    wgpuQueueWriteBuffer: _wgpuQueueWriteBuffer,
  };
}
function applySignatureConversions(wasmExports) {
  wasmExports = Object.assign({}, wasmExports);
  var makeWrapper_pp = (f) => (a0) => f(a0) >>> 0;
  var makeWrapper_p = (f) => () => f() >>> 0;
  var makeWrapper_ppp = (f) => (a0, a1) => f(a0, a1) >>> 0;
  wasmExports['malloc'] = makeWrapper_pp(wasmExports['malloc']);
  wasmExports['pthread_self'] = makeWrapper_p(wasmExports['pthread_self']);
  wasmExports['emscripten_builtin_memalign'] = makeWrapper_ppp(
    wasmExports['emscripten_builtin_memalign']
  );
  wasmExports['memalign'] = makeWrapper_ppp(wasmExports['memalign']);
  wasmExports['_emscripten_stack_alloc'] = makeWrapper_pp(
    wasmExports['_emscripten_stack_alloc']
  );
  wasmExports['emscripten_stack_get_current'] = makeWrapper_p(
    wasmExports['emscripten_stack_get_current']
  );
  return wasmExports;
}
async function callMain() {
  var entryFunction = _main;
  var argc = 0;
  var argv = 0;
  try {
    var ret = entryFunction(argc, argv);
    ret = await ret;
    exitJS(ret, true);
    return ret;
  } catch (e) {
    return handleException(e);
  }
}
function run() {
  if (runDependencies > 0) {
    dependenciesFulfilled = run;
    return;
  }
  if (ENVIRONMENT_IS_PTHREAD) {
    initRuntime();
    return;
  }
  preRun();
  if (runDependencies > 0) {
    dependenciesFulfilled = run;
    return;
  }
  async function doRun() {
    Module['calledRun'] = true;
    if (ABORT) return;
    initRuntime();
    preMain();
    Module['onRuntimeInitialized']?.();
    var noInitialRun = Module['noInitialRun'] || false;
    if (!noInitialRun) await callMain();
    postRun();
  }
  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(() => {
      setTimeout(() => Module['setStatus'](''), 1);
      doRun();
    }, 1);
  } else {
    doRun();
  }
}
var wasmExports;
if (!ENVIRONMENT_IS_PTHREAD) {
  createWasm();
  run();
}
`,Fm=`var Module = typeof Module != 'undefined' ? Module : {};
var ENVIRONMENT_IS_WEB = !!globalThis.window;
var ENVIRONMENT_IS_WORKER = !!globalThis.WorkerGlobalScope;
var ENVIRONMENT_IS_NODE =
  globalThis.process?.versions?.node && globalThis.process?.type != 'renderer';
var arguments_ = [];
var thisProgram = './this.program';
var quit_ = (status, toThrow) => {
  throw toThrow;
};
var _scriptName = globalThis.document?.currentScript?.src;
if (typeof __filename != 'undefined') {
  _scriptName = __filename;
} else if (ENVIRONMENT_IS_WORKER) {
  _scriptName = self.location.href;
}
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}
var readAsync, readBinary;
if (ENVIRONMENT_IS_NODE) {
  var fs = require('fs');
  scriptDirectory = __dirname + '/';
  readBinary = (filename) => {
    filename = isFileURI(filename) ? new URL(filename) : filename;
    var ret = fs.readFileSync(filename);
    return ret;
  };
  readAsync = async (filename, binary = true) => {
    filename = isFileURI(filename) ? new URL(filename) : filename;
    var ret = fs.readFileSync(filename, binary ? undefined : 'utf8');
    return ret;
  };
  if (process.argv.length > 1) {
    thisProgram = process.argv[1].replace(/\\\\/g, '/');
  }
  arguments_ = process.argv.slice(2);
  if (typeof module != 'undefined') {
    module['exports'] = Module;
  }
  quit_ = (status, toThrow) => {
    process.exitCode = status;
    throw toThrow;
  };
} else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  try {
    scriptDirectory = new URL('.', _scriptName).href;
  } catch {}
  {
    if (ENVIRONMENT_IS_WORKER) {
      readBinary = (url) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.responseType = 'arraybuffer';
        xhr.send(null);
        return new Uint8Array(xhr.response);
      };
    }
    readAsync = async (url) => {
      if (isFileURI(url)) {
        return new Promise((resolve, reject) => {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.responseType = 'arraybuffer';
          xhr.onload = () => {
            if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) {
              resolve(xhr.response);
              return;
            }
            reject(xhr.status);
          };
          xhr.onerror = reject;
          xhr.send(null);
        });
      }
      var response = await fetch(url, { credentials: 'same-origin' });
      if (response.ok) {
        return response.arrayBuffer();
      }
      throw new Error(response.status + ' : ' + response.url);
    };
  }
} else {
}
var out = console.log.bind(console);
var err = console.error.bind(console);
var wasmBinary;
var ABORT = false;
var EXITSTATUS;
function assert(condition, text) {
  if (!condition) {
    abort(text);
  }
}
var isFileURI = (filename) => filename.startsWith('file://');
var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
var HEAP64, HEAPU64;
var runtimeInitialized = false;
function updateMemoryViews() {
  var b = wasmMemory.buffer;
  HEAP8 = new Int8Array(b);
  HEAP16 = new Int16Array(b);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(b);
  HEAPU16 = new Uint16Array(b);
  HEAP32 = new Int32Array(b);
  HEAPU32 = new Uint32Array(b);
  HEAPF32 = new Float32Array(b);
  HEAPF64 = new Float64Array(b);
  HEAP64 = new BigInt64Array(b);
  HEAPU64 = new BigUint64Array(b);
}
function initMemory() {
  if (Module['wasmMemory']) {
    wasmMemory = Module['wasmMemory'];
  } else {
    var INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 134217728;
    wasmMemory = new WebAssembly.Memory({
      initial: INITIAL_MEMORY / 65536,
      maximum: 65536,
    });
  }
  updateMemoryViews();
}
function preRun() {
  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function')
      Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }
  callRuntimeCallbacks(onPreRuns);
}
function initRuntime() {
  runtimeInitialized = true;
  if (!Module['noFSInit'] && !FS.initialized) FS.init();
  TTY.init();
  wasmExports['__wasm_call_ctors']();
  FS.ignorePermissions = false;
}
function preMain() {}
function postRun() {
  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function')
      Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }
  callRuntimeCallbacks(onPostRuns);
}
function abort(what) {
  Module['onAbort']?.(what);
  what = 'Aborted(' + what + ')';
  err(what);
  ABORT = true;
  what += '. Build with -sASSERTIONS for more info.';
  if (runtimeInitialized) {
    ___trap();
  }
  var e = new WebAssembly.RuntimeError(what);
  throw e;
}
var wasmBinaryFile;
function findWasmBinary() {
  return locateFile('wllama.wasm');
}
function getBinarySync(file) {
  if (file == wasmBinaryFile && wasmBinary) {
    return new Uint8Array(wasmBinary);
  }
  if (readBinary) {
    return readBinary(file);
  }
  throw 'both async and sync fetching of the wasm failed';
}
async function getWasmBinary(binaryFile) {
  if (!wasmBinary) {
    try {
      var response = await readAsync(binaryFile);
      return new Uint8Array(response);
    } catch {}
  }
  return getBinarySync(binaryFile);
}
async function instantiateArrayBuffer(binaryFile, imports) {
  try {
    var binary = await getWasmBinary(binaryFile);
    var instance = await WebAssembly.instantiate(binary, imports);
    return instance;
  } catch (reason) {
    err(\`failed to asynchronously prepare wasm: \${reason}\`);
    abort(reason);
  }
}
async function instantiateAsync(binary, binaryFile, imports) {
  if (!binary && !isFileURI(binaryFile) && !ENVIRONMENT_IS_NODE) {
    try {
      var response = fetch(binaryFile, { credentials: 'same-origin' });
      var instantiationResult = await WebAssembly.instantiateStreaming(
        response,
        imports
      );
      return instantiationResult;
    } catch (reason) {
      err(\`wasm streaming compile failed: \${reason}\`);
      err('falling back to ArrayBuffer instantiation');
    }
  }
  return instantiateArrayBuffer(binaryFile, imports);
}
function getWasmImports() {
  Asyncify.instrumentWasmImports(wasmImports);
  var imports = { env: wasmImports, wasi_snapshot_preview1: wasmImports };
  return imports;
}
async function createWasm() {
  function receiveInstance(instance, module) {
    wasmExports = instance.exports;
    wasmExports = Asyncify.instrumentWasmExports(wasmExports);
    wasmExports = applySignatureConversions(wasmExports);
    assignWasmExports(wasmExports);
    removeRunDependency('wasm-instantiate');
    return wasmExports;
  }
  addRunDependency('wasm-instantiate');
  function receiveInstantiationResult(result) {
    return receiveInstance(result['instance']);
  }
  var info = getWasmImports();
  if (Module['instantiateWasm']) {
    return new Promise((resolve, reject) => {
      Module['instantiateWasm'](info, (inst, mod) => {
        resolve(receiveInstance(inst, mod));
      });
    });
  }
  wasmBinaryFile ??= findWasmBinary();
  var result = await instantiateAsync(wasmBinary, wasmBinaryFile, info);
  var exports = receiveInstantiationResult(result);
  return exports;
}
class ExitStatus {
  name = 'ExitStatus';
  constructor(status) {
    this.message = \`Program terminated with exit(\${status})\`;
    this.status = status;
  }
}
var callRuntimeCallbacks = (callbacks) => {
  while (callbacks.length > 0) {
    callbacks.shift()(Module);
  }
};
var onPostRuns = [];
var addOnPostRun = (cb) => onPostRuns.push(cb);
var onPreRuns = [];
var addOnPreRun = (cb) => onPreRuns.push(cb);
var runDependencies = 0;
var dependenciesFulfilled = null;
var removeRunDependency = (id) => {
  runDependencies--;
  Module['monitorRunDependencies']?.(runDependencies);
  if (runDependencies == 0) {
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback();
    }
  }
};
var addRunDependency = (id) => {
  runDependencies++;
  Module['monitorRunDependencies']?.(runDependencies);
};
var noExitRuntime = true;
var wasmMemory;
var syscallGetVarargI = () => {
  var ret = HEAP32[(+SYSCALLS.varargs >>> 2) >>> 0];
  SYSCALLS.varargs += 4;
  return ret;
};
var syscallGetVarargP = syscallGetVarargI;
var PATH = {
  isAbs: (path) => path.charAt(0) === '/',
  splitPath: (filename) => {
    var splitPathRe =
      /^(\\/?|)([\\s\\S]*?)((?:\\.{1,2}|[^\\/]+?|)(\\.[^.\\/]*|))(?:[\\/]*)$/;
    return splitPathRe.exec(filename).slice(1);
  },
  normalizeArray: (parts, allowAboveRoot) => {
    var up = 0;
    for (var i = parts.length - 1; i >= 0; i--) {
      var last = parts[i];
      if (last === '.') {
        parts.splice(i, 1);
      } else if (last === '..') {
        parts.splice(i, 1);
        up++;
      } else if (up) {
        parts.splice(i, 1);
        up--;
      }
    }
    if (allowAboveRoot) {
      for (; up; up--) {
        parts.unshift('..');
      }
    }
    return parts;
  },
  normalize: (path) => {
    var isAbsolute = PATH.isAbs(path),
      trailingSlash = path.slice(-1) === '/';
    path = PATH.normalizeArray(
      path.split('/').filter((p) => !!p),
      !isAbsolute
    ).join('/');
    if (!path && !isAbsolute) {
      path = '.';
    }
    if (path && trailingSlash) {
      path += '/';
    }
    return (isAbsolute ? '/' : '') + path;
  },
  dirname: (path) => {
    var result = PATH.splitPath(path),
      root = result[0],
      dir = result[1];
    if (!root && !dir) {
      return '.';
    }
    if (dir) {
      dir = dir.slice(0, -1);
    }
    return root + dir;
  },
  basename: (path) => path && path.match(/([^\\/]+|\\/)\\/*$/)[1],
  join: (...paths) => PATH.normalize(paths.join('/')),
  join2: (l, r) => PATH.normalize(l + '/' + r),
};
var initRandomFill = () => {
  if (ENVIRONMENT_IS_NODE) {
    var nodeCrypto = require('crypto');
    return (view) => nodeCrypto.randomFillSync(view);
  }
  return (view) => crypto.getRandomValues(view);
};
var randomFill = (view) => {
  (randomFill = initRandomFill())(view);
};
var PATH_FS = {
  resolve: (...args) => {
    var resolvedPath = '',
      resolvedAbsolute = false;
    for (var i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path = i >= 0 ? args[i] : FS.cwd();
      if (typeof path != 'string') {
        throw new TypeError('Arguments to path.resolve must be strings');
      } else if (!path) {
        return '';
      }
      resolvedPath = path + '/' + resolvedPath;
      resolvedAbsolute = PATH.isAbs(path);
    }
    resolvedPath = PATH.normalizeArray(
      resolvedPath.split('/').filter((p) => !!p),
      !resolvedAbsolute
    ).join('/');
    return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
  },
  relative: (from, to) => {
    from = PATH_FS.resolve(from).slice(1);
    to = PATH_FS.resolve(to).slice(1);
    function trim(arr) {
      var start = 0;
      for (; start < arr.length; start++) {
        if (arr[start] !== '') break;
      }
      var end = arr.length - 1;
      for (; end >= 0; end--) {
        if (arr[end] !== '') break;
      }
      if (start > end) return [];
      return arr.slice(start, end - start + 1);
    }
    var fromParts = trim(from.split('/'));
    var toParts = trim(to.split('/'));
    var length = Math.min(fromParts.length, toParts.length);
    var samePartsLength = length;
    for (var i = 0; i < length; i++) {
      if (fromParts[i] !== toParts[i]) {
        samePartsLength = i;
        break;
      }
    }
    var outputParts = [];
    for (var i = samePartsLength; i < fromParts.length; i++) {
      outputParts.push('..');
    }
    outputParts = outputParts.concat(toParts.slice(samePartsLength));
    return outputParts.join('/');
  },
};
var UTF8Decoder = globalThis.TextDecoder && new TextDecoder();
var findStringEnd = (heapOrArray, idx, maxBytesToRead, ignoreNul) => {
  var maxIdx = idx + maxBytesToRead;
  if (ignoreNul) return maxIdx;
  while (heapOrArray[idx] && !(idx >= maxIdx)) ++idx;
  return idx;
};
var UTF8ArrayToString = (heapOrArray, idx = 0, maxBytesToRead, ignoreNul) => {
  idx >>>= 0;
  var endPtr = findStringEnd(heapOrArray, idx, maxBytesToRead, ignoreNul);
  if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
    return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
  }
  var str = '';
  while (idx < endPtr) {
    var u0 = heapOrArray[idx++];
    if (!(u0 & 128)) {
      str += String.fromCharCode(u0);
      continue;
    }
    var u1 = heapOrArray[idx++] & 63;
    if ((u0 & 224) == 192) {
      str += String.fromCharCode(((u0 & 31) << 6) | u1);
      continue;
    }
    var u2 = heapOrArray[idx++] & 63;
    if ((u0 & 240) == 224) {
      u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
    } else {
      u0 =
        ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heapOrArray[idx++] & 63);
    }
    if (u0 < 65536) {
      str += String.fromCharCode(u0);
    } else {
      var ch = u0 - 65536;
      str += String.fromCharCode(55296 | (ch >> 10), 56320 | (ch & 1023));
    }
  }
  return str;
};
var FS_stdin_getChar_buffer = [];
var lengthBytesUTF8 = (str) => {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    var c = str.charCodeAt(i);
    if (c <= 127) {
      len++;
    } else if (c <= 2047) {
      len += 2;
    } else if (c >= 55296 && c <= 57343) {
      len += 4;
      ++i;
    } else {
      len += 3;
    }
  }
  return len;
};
var stringToUTF8Array = (str, heap, outIdx, maxBytesToWrite) => {
  outIdx >>>= 0;
  if (!(maxBytesToWrite > 0)) return 0;
  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1;
  for (var i = 0; i < str.length; ++i) {
    var u = str.codePointAt(i);
    if (u <= 127) {
      if (outIdx >= endIdx) break;
      heap[outIdx++ >>> 0] = u;
    } else if (u <= 2047) {
      if (outIdx + 1 >= endIdx) break;
      heap[outIdx++ >>> 0] = 192 | (u >> 6);
      heap[outIdx++ >>> 0] = 128 | (u & 63);
    } else if (u <= 65535) {
      if (outIdx + 2 >= endIdx) break;
      heap[outIdx++ >>> 0] = 224 | (u >> 12);
      heap[outIdx++ >>> 0] = 128 | ((u >> 6) & 63);
      heap[outIdx++ >>> 0] = 128 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      heap[outIdx++ >>> 0] = 240 | (u >> 18);
      heap[outIdx++ >>> 0] = 128 | ((u >> 12) & 63);
      heap[outIdx++ >>> 0] = 128 | ((u >> 6) & 63);
      heap[outIdx++ >>> 0] = 128 | (u & 63);
      i++;
    }
  }
  heap[outIdx >>> 0] = 0;
  return outIdx - startIdx;
};
var intArrayFromString = (stringy, dontAddNull, length) => {
  var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
};
var FS_stdin_getChar = () => {
  if (!FS_stdin_getChar_buffer.length) {
    var result = null;
    if (ENVIRONMENT_IS_NODE) {
      var BUFSIZE = 256;
      var buf = Buffer.alloc(BUFSIZE);
      var bytesRead = 0;
      var fd = process.stdin.fd;
      try {
        bytesRead = fs.readSync(fd, buf, 0, BUFSIZE);
      } catch (e) {
        if (e.toString().includes('EOF')) bytesRead = 0;
        else throw e;
      }
      if (bytesRead > 0) {
        result = buf.slice(0, bytesRead).toString('utf-8');
      }
    } else if (globalThis.window?.prompt) {
      result = window.prompt('Input: ');
      if (result !== null) {
        result += '\\n';
      }
    } else {
    }
    if (!result) {
      return null;
    }
    FS_stdin_getChar_buffer = intArrayFromString(result, true);
  }
  return FS_stdin_getChar_buffer.shift();
};
var TTY = {
  ttys: [],
  init() {},
  shutdown() {},
  register(dev, ops) {
    TTY.ttys[dev] = { input: [], output: [], ops };
    FS.registerDevice(dev, TTY.stream_ops);
  },
  stream_ops: {
    open(stream) {
      var tty = TTY.ttys[stream.node.rdev];
      if (!tty) {
        throw new FS.ErrnoError(43);
      }
      stream.tty = tty;
      stream.seekable = false;
    },
    close(stream) {
      stream.tty.ops.fsync(stream.tty);
    },
    fsync(stream) {
      stream.tty.ops.fsync(stream.tty);
    },
    read(stream, buffer, offset, length, pos) {
      if (!stream.tty || !stream.tty.ops.get_char) {
        throw new FS.ErrnoError(60);
      }
      var bytesRead = 0;
      for (var i = 0; i < length; i++) {
        var result;
        try {
          result = stream.tty.ops.get_char(stream.tty);
        } catch (e) {
          throw new FS.ErrnoError(29);
        }
        if (result === undefined && bytesRead === 0) {
          throw new FS.ErrnoError(6);
        }
        if (result === null || result === undefined) break;
        bytesRead++;
        buffer[offset + i] = result;
      }
      if (bytesRead) {
        stream.node.atime = Date.now();
      }
      return bytesRead;
    },
    write(stream, buffer, offset, length, pos) {
      if (!stream.tty || !stream.tty.ops.put_char) {
        throw new FS.ErrnoError(60);
      }
      try {
        for (var i = 0; i < length; i++) {
          stream.tty.ops.put_char(stream.tty, buffer[offset + i]);
        }
      } catch (e) {
        throw new FS.ErrnoError(29);
      }
      if (length) {
        stream.node.mtime = stream.node.ctime = Date.now();
      }
      return i;
    },
  },
  default_tty_ops: {
    get_char(tty) {
      return FS_stdin_getChar();
    },
    put_char(tty, val) {
      if (val === null || val === 10) {
        out(UTF8ArrayToString(tty.output));
        tty.output = [];
      } else {
        if (val != 0) tty.output.push(val);
      }
    },
    fsync(tty) {
      if (tty.output?.length > 0) {
        out(UTF8ArrayToString(tty.output));
        tty.output = [];
      }
    },
    ioctl_tcgets(tty) {
      return {
        c_iflag: 25856,
        c_oflag: 5,
        c_cflag: 191,
        c_lflag: 35387,
        c_cc: [
          3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
      };
    },
    ioctl_tcsets(tty, optional_actions, data) {
      return 0;
    },
    ioctl_tiocgwinsz(tty) {
      return [24, 80];
    },
  },
  default_tty1_ops: {
    put_char(tty, val) {
      if (val === null || val === 10) {
        err(UTF8ArrayToString(tty.output));
        tty.output = [];
      } else {
        if (val != 0) tty.output.push(val);
      }
    },
    fsync(tty) {
      if (tty.output?.length > 0) {
        err(UTF8ArrayToString(tty.output));
        tty.output = [];
      }
    },
  },
};
var zeroMemory = (ptr, size) => HEAPU8.fill(0, ptr, ptr + size);
var alignMemory = (size, alignment) => Math.ceil(size / alignment) * alignment;
var mmapAlloc = (size) => {
  size = alignMemory(size, 65536);
  var ptr = _emscripten_builtin_memalign(65536, size);
  if (ptr) zeroMemory(ptr, size);
  return ptr;
};
var MEMFS = {
  ops_table: null,
  mount(mount) {
    return MEMFS.createNode(null, '/', 16895, 0);
  },
  createNode(parent, name, mode, dev) {
    if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
      throw new FS.ErrnoError(63);
    }
    MEMFS.ops_table ||= {
      dir: {
        node: {
          getattr: MEMFS.node_ops.getattr,
          setattr: MEMFS.node_ops.setattr,
          lookup: MEMFS.node_ops.lookup,
          mknod: MEMFS.node_ops.mknod,
          rename: MEMFS.node_ops.rename,
          unlink: MEMFS.node_ops.unlink,
          rmdir: MEMFS.node_ops.rmdir,
          readdir: MEMFS.node_ops.readdir,
          symlink: MEMFS.node_ops.symlink,
        },
        stream: { llseek: MEMFS.stream_ops.llseek },
      },
      file: {
        node: {
          getattr: MEMFS.node_ops.getattr,
          setattr: MEMFS.node_ops.setattr,
        },
        stream: {
          llseek: MEMFS.stream_ops.llseek,
          read: MEMFS.stream_ops.read,
          write: MEMFS.stream_ops.write,
          mmap: MEMFS.stream_ops.mmap,
          msync: MEMFS.stream_ops.msync,
        },
      },
      link: {
        node: {
          getattr: MEMFS.node_ops.getattr,
          setattr: MEMFS.node_ops.setattr,
          readlink: MEMFS.node_ops.readlink,
        },
        stream: {},
      },
      chrdev: {
        node: {
          getattr: MEMFS.node_ops.getattr,
          setattr: MEMFS.node_ops.setattr,
        },
        stream: FS.chrdev_stream_ops,
      },
    };
    var node = FS.createNode(parent, name, mode, dev);
    if (FS.isDir(node.mode)) {
      node.node_ops = MEMFS.ops_table.dir.node;
      node.stream_ops = MEMFS.ops_table.dir.stream;
      node.contents = {};
    } else if (FS.isFile(node.mode)) {
      node.node_ops = MEMFS.ops_table.file.node;
      node.stream_ops = MEMFS.ops_table.file.stream;
      node.usedBytes = 0;
      node.contents = null;
    } else if (FS.isLink(node.mode)) {
      node.node_ops = MEMFS.ops_table.link.node;
      node.stream_ops = MEMFS.ops_table.link.stream;
    } else if (FS.isChrdev(node.mode)) {
      node.node_ops = MEMFS.ops_table.chrdev.node;
      node.stream_ops = MEMFS.ops_table.chrdev.stream;
    }
    node.atime = node.mtime = node.ctime = Date.now();
    if (parent) {
      parent.contents[name] = node;
      parent.atime = parent.mtime = parent.ctime = node.atime;
    }
    return node;
  },
  getFileDataAsTypedArray(node) {
    if (!node.contents) return new Uint8Array(0);
    if (node.contents.subarray)
      return node.contents.subarray(0, node.usedBytes);
    return new Uint8Array(node.contents);
  },
  expandFileStorage(node, newCapacity) {
    var prevCapacity = node.contents ? node.contents.length : 0;
    if (prevCapacity >= newCapacity) return;
    var CAPACITY_DOUBLING_MAX = 1024 * 1024;
    newCapacity = Math.max(
      newCapacity,
      (prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125)) >>> 0
    );
    if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256);
    var oldContents = node.contents;
    node.contents = new Uint8Array(newCapacity);
    if (node.usedBytes > 0)
      node.contents.set(oldContents.subarray(0, node.usedBytes), 0);
  },
  resizeFileStorage(node, newSize) {
    if (node.usedBytes == newSize) return;
    if (newSize == 0) {
      node.contents = null;
      node.usedBytes = 0;
    } else {
      var oldContents = node.contents;
      node.contents = new Uint8Array(newSize);
      if (oldContents) {
        node.contents.set(
          oldContents.subarray(0, Math.min(newSize, node.usedBytes))
        );
      }
      node.usedBytes = newSize;
    }
  },
  node_ops: {
    getattr(node) {
      var attr = {};
      attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
      attr.ino = node.id;
      attr.mode = node.mode;
      attr.nlink = 1;
      attr.uid = 0;
      attr.gid = 0;
      attr.rdev = node.rdev;
      if (FS.isDir(node.mode)) {
        attr.size = 4096;
      } else if (FS.isFile(node.mode)) {
        attr.size = node.usedBytes;
      } else if (FS.isLink(node.mode)) {
        attr.size = node.link.length;
      } else {
        attr.size = 0;
      }
      attr.atime = new Date(node.atime);
      attr.mtime = new Date(node.mtime);
      attr.ctime = new Date(node.ctime);
      attr.blksize = 4096;
      attr.blocks = Math.ceil(attr.size / attr.blksize);
      return attr;
    },
    setattr(node, attr) {
      for (const key of ['mode', 'atime', 'mtime', 'ctime']) {
        if (attr[key] != null) {
          node[key] = attr[key];
        }
      }
      if (attr.size !== undefined) {
        MEMFS.resizeFileStorage(node, attr.size);
      }
    },
    lookup(parent, name) {
      if (!MEMFS.doesNotExistError) {
        MEMFS.doesNotExistError = new FS.ErrnoError(44);
        MEMFS.doesNotExistError.stack = '<generic error, no stack>';
      }
      throw MEMFS.doesNotExistError;
    },
    mknod(parent, name, mode, dev) {
      return MEMFS.createNode(parent, name, mode, dev);
    },
    rename(old_node, new_dir, new_name) {
      var new_node;
      try {
        new_node = FS.lookupNode(new_dir, new_name);
      } catch (e) {}
      if (new_node) {
        if (FS.isDir(old_node.mode)) {
          for (var i in new_node.contents) {
            throw new FS.ErrnoError(55);
          }
        }
        FS.hashRemoveNode(new_node);
      }
      delete old_node.parent.contents[old_node.name];
      new_dir.contents[new_name] = old_node;
      old_node.name = new_name;
      new_dir.ctime =
        new_dir.mtime =
        old_node.parent.ctime =
        old_node.parent.mtime =
          Date.now();
    },
    unlink(parent, name) {
      delete parent.contents[name];
      parent.ctime = parent.mtime = Date.now();
    },
    rmdir(parent, name) {
      var node = FS.lookupNode(parent, name);
      for (var i in node.contents) {
        throw new FS.ErrnoError(55);
      }
      delete parent.contents[name];
      parent.ctime = parent.mtime = Date.now();
    },
    readdir(node) {
      return ['.', '..', ...Object.keys(node.contents)];
    },
    symlink(parent, newname, oldpath) {
      var node = MEMFS.createNode(parent, newname, 511 | 40960, 0);
      node.link = oldpath;
      return node;
    },
    readlink(node) {
      if (!FS.isLink(node.mode)) {
        throw new FS.ErrnoError(28);
      }
      return node.link;
    },
  },
  stream_ops: {
    read(stream, buffer, offset, length, position) {
      var contents = stream.node.contents;
      if (position >= stream.node.usedBytes) return 0;
      var size = Math.min(stream.node.usedBytes - position, length);
      if (size > 8 && contents.subarray) {
        buffer.set(contents.subarray(position, position + size), offset);
      } else {
        for (var i = 0; i < size; i++)
          buffer[offset + i] = contents[position + i];
      }
      return size;
    },
    write(stream, buffer, offset, length, position, canOwn) {
      if (buffer.buffer === HEAP8.buffer) {
        canOwn = false;
      }
      if (!length) return 0;
      var node = stream.node;
      node.mtime = node.ctime = Date.now();
      if (buffer.subarray && (!node.contents || node.contents.subarray)) {
        if (canOwn) {
          node.contents = buffer.subarray(offset, offset + length);
          node.usedBytes = length;
          return length;
        } else if (node.usedBytes === 0 && position === 0) {
          node.contents = buffer.slice(offset, offset + length);
          node.usedBytes = length;
          return length;
        } else if (position + length <= node.usedBytes) {
          node.contents.set(buffer.subarray(offset, offset + length), position);
          return length;
        }
      }
      MEMFS.expandFileStorage(node, position + length);
      if (node.contents.subarray && buffer.subarray) {
        node.contents.set(buffer.subarray(offset, offset + length), position);
      } else {
        for (var i = 0; i < length; i++) {
          node.contents[position + i] = buffer[offset + i];
        }
      }
      node.usedBytes = Math.max(node.usedBytes, position + length);
      return length;
    },
    llseek(stream, offset, whence) {
      var position = offset;
      if (whence === 1) {
        position += stream.position;
      } else if (whence === 2) {
        if (FS.isFile(stream.node.mode)) {
          position += stream.node.usedBytes;
        }
      }
      if (position < 0) {
        throw new FS.ErrnoError(28);
      }
      return position;
    },
    mmap(stream, length, position, prot, flags) {
      if (!FS.isFile(stream.node.mode)) {
        throw new FS.ErrnoError(43);
      }
      var ptr;
      var allocated;
      var contents = stream.node.contents;
      if (!(flags & 2) && contents && contents.buffer === HEAP8.buffer) {
        allocated = false;
        ptr = contents.byteOffset;
      } else {
        allocated = true;
        ptr = mmapAlloc(length);
        if (!ptr) {
          throw new FS.ErrnoError(48);
        }
        if (contents) {
          if (position > 0 || position + length < contents.length) {
            if (contents.subarray) {
              contents = contents.subarray(position, position + length);
            } else {
              contents = Array.prototype.slice.call(
                contents,
                position,
                position + length
              );
            }
          }
          HEAP8.set(contents, ptr >>> 0);
        }
      }
      return { ptr, allocated };
    },
    msync(stream, buffer, offset, length, mmapFlags) {
      MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
      return 0;
    },
  },
};
var FS_modeStringToFlags = (str) => {
  var flagModes = {
    r: 0,
    'r+': 2,
    w: 512 | 64 | 1,
    'w+': 512 | 64 | 2,
    a: 1024 | 64 | 1,
    'a+': 1024 | 64 | 2,
  };
  var flags = flagModes[str];
  if (typeof flags == 'undefined') {
    throw new Error(\`Unknown file open mode: \${str}\`);
  }
  return flags;
};
var FS_getMode = (canRead, canWrite) => {
  var mode = 0;
  if (canRead) mode |= 292 | 73;
  if (canWrite) mode |= 146;
  return mode;
};
var asyncLoad = async (url) => {
  var arrayBuffer = await readAsync(url);
  return new Uint8Array(arrayBuffer);
};
var FS_createDataFile = (...args) => FS.createDataFile(...args);
var getUniqueRunDependency = (id) => id;
var preloadPlugins = [];
var FS_handledByPreloadPlugin = async (byteArray, fullname) => {
  if (typeof Browser != 'undefined') Browser.init();
  for (var plugin of preloadPlugins) {
    if (plugin['canHandle'](fullname)) {
      return plugin['handle'](byteArray, fullname);
    }
  }
  return byteArray;
};
var FS_preloadFile = async (
  parent,
  name,
  url,
  canRead,
  canWrite,
  dontCreateFile,
  canOwn,
  preFinish
) => {
  var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
  var dep = getUniqueRunDependency(\`cp \${fullname}\`);
  addRunDependency(dep);
  try {
    var byteArray = url;
    if (typeof url == 'string') {
      byteArray = await asyncLoad(url);
    }
    byteArray = await FS_handledByPreloadPlugin(byteArray, fullname);
    preFinish?.();
    if (!dontCreateFile) {
      FS_createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
    }
  } finally {
    removeRunDependency(dep);
  }
};
var FS_createPreloadedFile = (
  parent,
  name,
  url,
  canRead,
  canWrite,
  onload,
  onerror,
  dontCreateFile,
  canOwn,
  preFinish
) => {
  FS_preloadFile(
    parent,
    name,
    url,
    canRead,
    canWrite,
    dontCreateFile,
    canOwn,
    preFinish
  )
    .then(onload)
    .catch(onerror);
};
var FS = {
  root: null,
  mounts: [],
  devices: {},
  streams: [],
  nextInode: 1,
  nameTable: null,
  currentPath: '/',
  initialized: false,
  ignorePermissions: true,
  filesystems: null,
  syncFSRequests: 0,
  readFiles: {},
  ErrnoError: class {
    name = 'ErrnoError';
    constructor(errno) {
      this.errno = errno;
    }
  },
  FSStream: class {
    shared = {};
    get object() {
      return this.node;
    }
    set object(val) {
      this.node = val;
    }
    get isRead() {
      return (this.flags & 2097155) !== 1;
    }
    get isWrite() {
      return (this.flags & 2097155) !== 0;
    }
    get isAppend() {
      return this.flags & 1024;
    }
    get flags() {
      return this.shared.flags;
    }
    set flags(val) {
      this.shared.flags = val;
    }
    get position() {
      return this.shared.position;
    }
    set position(val) {
      this.shared.position = val;
    }
  },
  FSNode: class {
    node_ops = {};
    stream_ops = {};
    readMode = 292 | 73;
    writeMode = 146;
    mounted = null;
    constructor(parent, name, mode, rdev) {
      if (!parent) {
        parent = this;
      }
      this.parent = parent;
      this.mount = parent.mount;
      this.id = FS.nextInode++;
      this.name = name;
      this.mode = mode;
      this.rdev = rdev;
      this.atime = this.mtime = this.ctime = Date.now();
    }
    get read() {
      return (this.mode & this.readMode) === this.readMode;
    }
    set read(val) {
      val ? (this.mode |= this.readMode) : (this.mode &= ~this.readMode);
    }
    get write() {
      return (this.mode & this.writeMode) === this.writeMode;
    }
    set write(val) {
      val ? (this.mode |= this.writeMode) : (this.mode &= ~this.writeMode);
    }
    get isFolder() {
      return FS.isDir(this.mode);
    }
    get isDevice() {
      return FS.isChrdev(this.mode);
    }
  },
  lookupPath(path, opts = {}) {
    if (!path) {
      throw new FS.ErrnoError(44);
    }
    opts.follow_mount ??= true;
    if (!PATH.isAbs(path)) {
      path = FS.cwd() + '/' + path;
    }
    linkloop: for (var nlinks = 0; nlinks < 40; nlinks++) {
      var parts = path.split('/').filter((p) => !!p);
      var current = FS.root;
      var current_path = '/';
      for (var i = 0; i < parts.length; i++) {
        var islast = i === parts.length - 1;
        if (islast && opts.parent) {
          break;
        }
        if (parts[i] === '.') {
          continue;
        }
        if (parts[i] === '..') {
          current_path = PATH.dirname(current_path);
          if (FS.isRoot(current)) {
            path = current_path + '/' + parts.slice(i + 1).join('/');
            nlinks--;
            continue linkloop;
          } else {
            current = current.parent;
          }
          continue;
        }
        current_path = PATH.join2(current_path, parts[i]);
        try {
          current = FS.lookupNode(current, parts[i]);
        } catch (e) {
          if (e?.errno === 44 && islast && opts.noent_okay) {
            return { path: current_path };
          }
          throw e;
        }
        if (FS.isMountpoint(current) && (!islast || opts.follow_mount)) {
          current = current.mounted.root;
        }
        if (FS.isLink(current.mode) && (!islast || opts.follow)) {
          if (!current.node_ops.readlink) {
            throw new FS.ErrnoError(52);
          }
          var link = current.node_ops.readlink(current);
          if (!PATH.isAbs(link)) {
            link = PATH.dirname(current_path) + '/' + link;
          }
          path = link + '/' + parts.slice(i + 1).join('/');
          continue linkloop;
        }
      }
      return { path: current_path, node: current };
    }
    throw new FS.ErrnoError(32);
  },
  getPath(node) {
    var path;
    while (true) {
      if (FS.isRoot(node)) {
        var mount = node.mount.mountpoint;
        if (!path) return mount;
        return mount[mount.length - 1] !== '/'
          ? \`\${mount}/\${path}\`
          : mount + path;
      }
      path = path ? \`\${node.name}/\${path}\` : node.name;
      node = node.parent;
    }
  },
  hashName(parentid, name) {
    var hash = 0;
    for (var i = 0; i < name.length; i++) {
      hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
    }
    return ((parentid + hash) >>> 0) % FS.nameTable.length;
  },
  hashAddNode(node) {
    var hash = FS.hashName(node.parent.id, node.name);
    node.name_next = FS.nameTable[hash];
    FS.nameTable[hash] = node;
  },
  hashRemoveNode(node) {
    var hash = FS.hashName(node.parent.id, node.name);
    if (FS.nameTable[hash] === node) {
      FS.nameTable[hash] = node.name_next;
    } else {
      var current = FS.nameTable[hash];
      while (current) {
        if (current.name_next === node) {
          current.name_next = node.name_next;
          break;
        }
        current = current.name_next;
      }
    }
  },
  lookupNode(parent, name) {
    var errCode = FS.mayLookup(parent);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    var hash = FS.hashName(parent.id, name);
    for (var node = FS.nameTable[hash]; node; node = node.name_next) {
      var nodeName = node.name;
      if (node.parent.id === parent.id && nodeName === name) {
        return node;
      }
    }
    return FS.lookup(parent, name);
  },
  createNode(parent, name, mode, rdev) {
    var node = new FS.FSNode(parent, name, mode, rdev);
    FS.hashAddNode(node);
    return node;
  },
  destroyNode(node) {
    FS.hashRemoveNode(node);
  },
  isRoot(node) {
    return node === node.parent;
  },
  isMountpoint(node) {
    return !!node.mounted;
  },
  isFile(mode) {
    return (mode & 61440) === 32768;
  },
  isDir(mode) {
    return (mode & 61440) === 16384;
  },
  isLink(mode) {
    return (mode & 61440) === 40960;
  },
  isChrdev(mode) {
    return (mode & 61440) === 8192;
  },
  isBlkdev(mode) {
    return (mode & 61440) === 24576;
  },
  isFIFO(mode) {
    return (mode & 61440) === 4096;
  },
  isSocket(mode) {
    return (mode & 49152) === 49152;
  },
  flagsToPermissionString(flag) {
    var perms = ['r', 'w', 'rw'][flag & 3];
    if (flag & 512) {
      perms += 'w';
    }
    return perms;
  },
  nodePermissions(node, perms) {
    if (FS.ignorePermissions) {
      return 0;
    }
    if (perms.includes('r') && !(node.mode & 292)) {
      return 2;
    } else if (perms.includes('w') && !(node.mode & 146)) {
      return 2;
    } else if (perms.includes('x') && !(node.mode & 73)) {
      return 2;
    }
    return 0;
  },
  mayLookup(dir) {
    if (!FS.isDir(dir.mode)) return 54;
    var errCode = FS.nodePermissions(dir, 'x');
    if (errCode) return errCode;
    if (!dir.node_ops.lookup) return 2;
    return 0;
  },
  mayCreate(dir, name) {
    if (!FS.isDir(dir.mode)) {
      return 54;
    }
    try {
      var node = FS.lookupNode(dir, name);
      return 20;
    } catch (e) {}
    return FS.nodePermissions(dir, 'wx');
  },
  mayDelete(dir, name, isdir) {
    var node;
    try {
      node = FS.lookupNode(dir, name);
    } catch (e) {
      return e.errno;
    }
    var errCode = FS.nodePermissions(dir, 'wx');
    if (errCode) {
      return errCode;
    }
    if (isdir) {
      if (!FS.isDir(node.mode)) {
        return 54;
      }
      if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
        return 10;
      }
    } else {
      if (FS.isDir(node.mode)) {
        return 31;
      }
    }
    return 0;
  },
  mayOpen(node, flags) {
    if (!node) {
      return 44;
    }
    if (FS.isLink(node.mode)) {
      return 32;
    } else if (FS.isDir(node.mode)) {
      if (FS.flagsToPermissionString(flags) !== 'r' || flags & (512 | 64)) {
        return 31;
      }
    }
    return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
  },
  checkOpExists(op, err) {
    if (!op) {
      throw new FS.ErrnoError(err);
    }
    return op;
  },
  MAX_OPEN_FDS: 4096,
  nextfd() {
    for (var fd = 0; fd <= FS.MAX_OPEN_FDS; fd++) {
      if (!FS.streams[fd]) {
        return fd;
      }
    }
    throw new FS.ErrnoError(33);
  },
  getStreamChecked(fd) {
    var stream = FS.getStream(fd);
    if (!stream) {
      throw new FS.ErrnoError(8);
    }
    return stream;
  },
  getStream: (fd) => FS.streams[fd],
  createStream(stream, fd = -1) {
    stream = Object.assign(new FS.FSStream(), stream);
    if (fd == -1) {
      fd = FS.nextfd();
    }
    stream.fd = fd;
    FS.streams[fd] = stream;
    return stream;
  },
  closeStream(fd) {
    FS.streams[fd] = null;
  },
  dupStream(origStream, fd = -1) {
    var stream = FS.createStream(origStream, fd);
    stream.stream_ops?.dup?.(stream);
    return stream;
  },
  doSetAttr(stream, node, attr) {
    var setattr = stream?.stream_ops.setattr;
    var arg = setattr ? stream : node;
    setattr ??= node.node_ops.setattr;
    FS.checkOpExists(setattr, 63);
    setattr(arg, attr);
  },
  chrdev_stream_ops: {
    open(stream) {
      var device = FS.getDevice(stream.node.rdev);
      stream.stream_ops = device.stream_ops;
      stream.stream_ops.open?.(stream);
    },
    llseek() {
      throw new FS.ErrnoError(70);
    },
  },
  major: (dev) => dev >> 8,
  minor: (dev) => dev & 255,
  makedev: (ma, mi) => (ma << 8) | mi,
  registerDevice(dev, ops) {
    FS.devices[dev] = { stream_ops: ops };
  },
  getDevice: (dev) => FS.devices[dev],
  getMounts(mount) {
    var mounts = [];
    var check = [mount];
    while (check.length) {
      var m = check.pop();
      mounts.push(m);
      check.push(...m.mounts);
    }
    return mounts;
  },
  syncfs(populate, callback) {
    if (typeof populate == 'function') {
      callback = populate;
      populate = false;
    }
    FS.syncFSRequests++;
    if (FS.syncFSRequests > 1) {
      err(
        \`warning: \${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work\`
      );
    }
    var mounts = FS.getMounts(FS.root.mount);
    var completed = 0;
    function doCallback(errCode) {
      FS.syncFSRequests--;
      return callback(errCode);
    }
    function done(errCode) {
      if (errCode) {
        if (!done.errored) {
          done.errored = true;
          return doCallback(errCode);
        }
        return;
      }
      if (++completed >= mounts.length) {
        doCallback(null);
      }
    }
    for (var mount of mounts) {
      if (mount.type.syncfs) {
        mount.type.syncfs(mount, populate, done);
      } else {
        done(null);
      }
    }
  },
  mount(type, opts, mountpoint) {
    var root = mountpoint === '/';
    var pseudo = !mountpoint;
    var node;
    if (root && FS.root) {
      throw new FS.ErrnoError(10);
    } else if (!root && !pseudo) {
      var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
      mountpoint = lookup.path;
      node = lookup.node;
      if (FS.isMountpoint(node)) {
        throw new FS.ErrnoError(10);
      }
      if (!FS.isDir(node.mode)) {
        throw new FS.ErrnoError(54);
      }
    }
    var mount = { type, opts, mountpoint, mounts: [] };
    var mountRoot = type.mount(mount);
    mountRoot.mount = mount;
    mount.root = mountRoot;
    if (root) {
      FS.root = mountRoot;
    } else if (node) {
      node.mounted = mount;
      if (node.mount) {
        node.mount.mounts.push(mount);
      }
    }
    return mountRoot;
  },
  unmount(mountpoint) {
    var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
    if (!FS.isMountpoint(lookup.node)) {
      throw new FS.ErrnoError(28);
    }
    var node = lookup.node;
    var mount = node.mounted;
    var mounts = FS.getMounts(mount);
    for (var [hash, current] of Object.entries(FS.nameTable)) {
      while (current) {
        var next = current.name_next;
        if (mounts.includes(current.mount)) {
          FS.destroyNode(current);
        }
        current = next;
      }
    }
    node.mounted = null;
    var idx = node.mount.mounts.indexOf(mount);
    node.mount.mounts.splice(idx, 1);
  },
  lookup(parent, name) {
    return parent.node_ops.lookup(parent, name);
  },
  mknod(path, mode, dev) {
    var lookup = FS.lookupPath(path, { parent: true });
    var parent = lookup.node;
    var name = PATH.basename(path);
    if (!name) {
      throw new FS.ErrnoError(28);
    }
    if (name === '.' || name === '..') {
      throw new FS.ErrnoError(20);
    }
    var errCode = FS.mayCreate(parent, name);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    if (!parent.node_ops.mknod) {
      throw new FS.ErrnoError(63);
    }
    return parent.node_ops.mknod(parent, name, mode, dev);
  },
  statfs(path) {
    return FS.statfsNode(FS.lookupPath(path, { follow: true }).node);
  },
  statfsStream(stream) {
    return FS.statfsNode(stream.node);
  },
  statfsNode(node) {
    var rtn = {
      bsize: 4096,
      frsize: 4096,
      blocks: 1e6,
      bfree: 5e5,
      bavail: 5e5,
      files: FS.nextInode,
      ffree: FS.nextInode - 1,
      fsid: 42,
      flags: 2,
      namelen: 255,
    };
    if (node.node_ops.statfs) {
      Object.assign(rtn, node.node_ops.statfs(node.mount.opts.root));
    }
    return rtn;
  },
  create(path, mode = 438) {
    mode &= 4095;
    mode |= 32768;
    return FS.mknod(path, mode, 0);
  },
  mkdir(path, mode = 511) {
    mode &= 511 | 512;
    mode |= 16384;
    return FS.mknod(path, mode, 0);
  },
  mkdirTree(path, mode) {
    var dirs = path.split('/');
    var d = '';
    for (var dir of dirs) {
      if (!dir) continue;
      if (d || PATH.isAbs(path)) d += '/';
      d += dir;
      try {
        FS.mkdir(d, mode);
      } catch (e) {
        if (e.errno != 20) throw e;
      }
    }
  },
  mkdev(path, mode, dev) {
    if (typeof dev == 'undefined') {
      dev = mode;
      mode = 438;
    }
    mode |= 8192;
    return FS.mknod(path, mode, dev);
  },
  symlink(oldpath, newpath) {
    if (!PATH_FS.resolve(oldpath)) {
      throw new FS.ErrnoError(44);
    }
    var lookup = FS.lookupPath(newpath, { parent: true });
    var parent = lookup.node;
    if (!parent) {
      throw new FS.ErrnoError(44);
    }
    var newname = PATH.basename(newpath);
    var errCode = FS.mayCreate(parent, newname);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    if (!parent.node_ops.symlink) {
      throw new FS.ErrnoError(63);
    }
    return parent.node_ops.symlink(parent, newname, oldpath);
  },
  rename(old_path, new_path) {
    var old_dirname = PATH.dirname(old_path);
    var new_dirname = PATH.dirname(new_path);
    var old_name = PATH.basename(old_path);
    var new_name = PATH.basename(new_path);
    var lookup, old_dir, new_dir;
    lookup = FS.lookupPath(old_path, { parent: true });
    old_dir = lookup.node;
    lookup = FS.lookupPath(new_path, { parent: true });
    new_dir = lookup.node;
    if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
    if (old_dir.mount !== new_dir.mount) {
      throw new FS.ErrnoError(75);
    }
    var old_node = FS.lookupNode(old_dir, old_name);
    var relative = PATH_FS.relative(old_path, new_dirname);
    if (relative.charAt(0) !== '.') {
      throw new FS.ErrnoError(28);
    }
    relative = PATH_FS.relative(new_path, old_dirname);
    if (relative.charAt(0) !== '.') {
      throw new FS.ErrnoError(55);
    }
    var new_node;
    try {
      new_node = FS.lookupNode(new_dir, new_name);
    } catch (e) {}
    if (old_node === new_node) {
      return;
    }
    var isdir = FS.isDir(old_node.mode);
    var errCode = FS.mayDelete(old_dir, old_name, isdir);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    errCode = new_node
      ? FS.mayDelete(new_dir, new_name, isdir)
      : FS.mayCreate(new_dir, new_name);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    if (!old_dir.node_ops.rename) {
      throw new FS.ErrnoError(63);
    }
    if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
      throw new FS.ErrnoError(10);
    }
    if (new_dir !== old_dir) {
      errCode = FS.nodePermissions(old_dir, 'w');
      if (errCode) {
        throw new FS.ErrnoError(errCode);
      }
    }
    FS.hashRemoveNode(old_node);
    try {
      old_dir.node_ops.rename(old_node, new_dir, new_name);
      old_node.parent = new_dir;
    } catch (e) {
      throw e;
    } finally {
      FS.hashAddNode(old_node);
    }
  },
  rmdir(path) {
    var lookup = FS.lookupPath(path, { parent: true });
    var parent = lookup.node;
    var name = PATH.basename(path);
    var node = FS.lookupNode(parent, name);
    var errCode = FS.mayDelete(parent, name, true);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    if (!parent.node_ops.rmdir) {
      throw new FS.ErrnoError(63);
    }
    if (FS.isMountpoint(node)) {
      throw new FS.ErrnoError(10);
    }
    parent.node_ops.rmdir(parent, name);
    FS.destroyNode(node);
  },
  readdir(path) {
    var lookup = FS.lookupPath(path, { follow: true });
    var node = lookup.node;
    var readdir = FS.checkOpExists(node.node_ops.readdir, 54);
    return readdir(node);
  },
  unlink(path) {
    var lookup = FS.lookupPath(path, { parent: true });
    var parent = lookup.node;
    if (!parent) {
      throw new FS.ErrnoError(44);
    }
    var name = PATH.basename(path);
    var node = FS.lookupNode(parent, name);
    var errCode = FS.mayDelete(parent, name, false);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    if (!parent.node_ops.unlink) {
      throw new FS.ErrnoError(63);
    }
    if (FS.isMountpoint(node)) {
      throw new FS.ErrnoError(10);
    }
    parent.node_ops.unlink(parent, name);
    FS.destroyNode(node);
  },
  readlink(path) {
    var lookup = FS.lookupPath(path);
    var link = lookup.node;
    if (!link) {
      throw new FS.ErrnoError(44);
    }
    if (!link.node_ops.readlink) {
      throw new FS.ErrnoError(28);
    }
    return link.node_ops.readlink(link);
  },
  stat(path, dontFollow) {
    var lookup = FS.lookupPath(path, { follow: !dontFollow });
    var node = lookup.node;
    var getattr = FS.checkOpExists(node.node_ops.getattr, 63);
    return getattr(node);
  },
  fstat(fd) {
    var stream = FS.getStreamChecked(fd);
    var node = stream.node;
    var getattr = stream.stream_ops.getattr;
    var arg = getattr ? stream : node;
    getattr ??= node.node_ops.getattr;
    FS.checkOpExists(getattr, 63);
    return getattr(arg);
  },
  lstat(path) {
    return FS.stat(path, true);
  },
  doChmod(stream, node, mode, dontFollow) {
    FS.doSetAttr(stream, node, {
      mode: (mode & 4095) | (node.mode & ~4095),
      ctime: Date.now(),
      dontFollow,
    });
  },
  chmod(path, mode, dontFollow) {
    var node;
    if (typeof path == 'string') {
      var lookup = FS.lookupPath(path, { follow: !dontFollow });
      node = lookup.node;
    } else {
      node = path;
    }
    FS.doChmod(null, node, mode, dontFollow);
  },
  lchmod(path, mode) {
    FS.chmod(path, mode, true);
  },
  fchmod(fd, mode) {
    var stream = FS.getStreamChecked(fd);
    FS.doChmod(stream, stream.node, mode, false);
  },
  doChown(stream, node, dontFollow) {
    FS.doSetAttr(stream, node, { timestamp: Date.now(), dontFollow });
  },
  chown(path, uid, gid, dontFollow) {
    var node;
    if (typeof path == 'string') {
      var lookup = FS.lookupPath(path, { follow: !dontFollow });
      node = lookup.node;
    } else {
      node = path;
    }
    FS.doChown(null, node, dontFollow);
  },
  lchown(path, uid, gid) {
    FS.chown(path, uid, gid, true);
  },
  fchown(fd, uid, gid) {
    var stream = FS.getStreamChecked(fd);
    FS.doChown(stream, stream.node, false);
  },
  doTruncate(stream, node, len) {
    if (FS.isDir(node.mode)) {
      throw new FS.ErrnoError(31);
    }
    if (!FS.isFile(node.mode)) {
      throw new FS.ErrnoError(28);
    }
    var errCode = FS.nodePermissions(node, 'w');
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    FS.doSetAttr(stream, node, { size: len, timestamp: Date.now() });
  },
  truncate(path, len) {
    if (len < 0) {
      throw new FS.ErrnoError(28);
    }
    var node;
    if (typeof path == 'string') {
      var lookup = FS.lookupPath(path, { follow: true });
      node = lookup.node;
    } else {
      node = path;
    }
    FS.doTruncate(null, node, len);
  },
  ftruncate(fd, len) {
    var stream = FS.getStreamChecked(fd);
    if (len < 0 || (stream.flags & 2097155) === 0) {
      throw new FS.ErrnoError(28);
    }
    FS.doTruncate(stream, stream.node, len);
  },
  utime(path, atime, mtime) {
    var lookup = FS.lookupPath(path, { follow: true });
    var node = lookup.node;
    var setattr = FS.checkOpExists(node.node_ops.setattr, 63);
    setattr(node, { atime, mtime });
  },
  open(path, flags, mode = 438) {
    if (path === '') {
      throw new FS.ErrnoError(44);
    }
    flags = typeof flags == 'string' ? FS_modeStringToFlags(flags) : flags;
    if (flags & 64) {
      mode = (mode & 4095) | 32768;
    } else {
      mode = 0;
    }
    var node;
    var isDirPath;
    if (typeof path == 'object') {
      node = path;
    } else {
      isDirPath = path.endsWith('/');
      var lookup = FS.lookupPath(path, {
        follow: !(flags & 131072),
        noent_okay: true,
      });
      node = lookup.node;
      path = lookup.path;
    }
    var created = false;
    if (flags & 64) {
      if (node) {
        if (flags & 128) {
          throw new FS.ErrnoError(20);
        }
      } else if (isDirPath) {
        throw new FS.ErrnoError(31);
      } else {
        node = FS.mknod(path, mode | 511, 0);
        created = true;
      }
    }
    if (!node) {
      throw new FS.ErrnoError(44);
    }
    if (FS.isChrdev(node.mode)) {
      flags &= ~512;
    }
    if (flags & 65536 && !FS.isDir(node.mode)) {
      throw new FS.ErrnoError(54);
    }
    if (!created) {
      var errCode = FS.mayOpen(node, flags);
      if (errCode) {
        throw new FS.ErrnoError(errCode);
      }
    }
    if (flags & 512 && !created) {
      FS.truncate(node, 0);
    }
    flags &= ~(128 | 512 | 131072);
    var stream = FS.createStream({
      node,
      path: FS.getPath(node),
      flags,
      seekable: true,
      position: 0,
      stream_ops: node.stream_ops,
      ungotten: [],
      error: false,
    });
    if (stream.stream_ops.open) {
      stream.stream_ops.open(stream);
    }
    if (created) {
      FS.chmod(node, mode & 511);
    }
    if (Module['logReadFiles'] && !(flags & 1)) {
      if (!(path in FS.readFiles)) {
        FS.readFiles[path] = 1;
      }
    }
    return stream;
  },
  close(stream) {
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(8);
    }
    if (stream.getdents) stream.getdents = null;
    try {
      if (stream.stream_ops.close) {
        stream.stream_ops.close(stream);
      }
    } catch (e) {
      throw e;
    } finally {
      FS.closeStream(stream.fd);
    }
    stream.fd = null;
  },
  isClosed(stream) {
    return stream.fd === null;
  },
  llseek(stream, offset, whence) {
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(8);
    }
    if (!stream.seekable || !stream.stream_ops.llseek) {
      throw new FS.ErrnoError(70);
    }
    if (whence != 0 && whence != 1 && whence != 2) {
      throw new FS.ErrnoError(28);
    }
    stream.position = stream.stream_ops.llseek(stream, offset, whence);
    stream.ungotten = [];
    return stream.position;
  },
  read(stream, buffer, offset, length, position) {
    if (length < 0 || position < 0) {
      throw new FS.ErrnoError(28);
    }
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(8);
    }
    if ((stream.flags & 2097155) === 1) {
      throw new FS.ErrnoError(8);
    }
    if (FS.isDir(stream.node.mode)) {
      throw new FS.ErrnoError(31);
    }
    if (!stream.stream_ops.read) {
      throw new FS.ErrnoError(28);
    }
    var seeking = typeof position != 'undefined';
    if (!seeking) {
      position = stream.position;
    } else if (!stream.seekable) {
      throw new FS.ErrnoError(70);
    }
    var bytesRead = stream.stream_ops.read(
      stream,
      buffer,
      offset,
      length,
      position
    );
    if (!seeking) stream.position += bytesRead;
    return bytesRead;
  },
  write(stream, buffer, offset, length, position, canOwn) {
    if (length < 0 || position < 0) {
      throw new FS.ErrnoError(28);
    }
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(8);
    }
    if ((stream.flags & 2097155) === 0) {
      throw new FS.ErrnoError(8);
    }
    if (FS.isDir(stream.node.mode)) {
      throw new FS.ErrnoError(31);
    }
    if (!stream.stream_ops.write) {
      throw new FS.ErrnoError(28);
    }
    if (stream.seekable && stream.flags & 1024) {
      FS.llseek(stream, 0, 2);
    }
    var seeking = typeof position != 'undefined';
    if (!seeking) {
      position = stream.position;
    } else if (!stream.seekable) {
      throw new FS.ErrnoError(70);
    }
    var bytesWritten = stream.stream_ops.write(
      stream,
      buffer,
      offset,
      length,
      position,
      canOwn
    );
    if (!seeking) stream.position += bytesWritten;
    return bytesWritten;
  },
  mmap(stream, length, position, prot, flags) {
    if (
      (prot & 2) !== 0 &&
      (flags & 2) === 0 &&
      (stream.flags & 2097155) !== 2
    ) {
      throw new FS.ErrnoError(2);
    }
    if ((stream.flags & 2097155) === 1) {
      throw new FS.ErrnoError(2);
    }
    if (!stream.stream_ops.mmap) {
      throw new FS.ErrnoError(43);
    }
    if (!length) {
      throw new FS.ErrnoError(28);
    }
    return stream.stream_ops.mmap(stream, length, position, prot, flags);
  },
  msync(stream, buffer, offset, length, mmapFlags) {
    if (!stream.stream_ops.msync) {
      return 0;
    }
    return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
  },
  ioctl(stream, cmd, arg) {
    if (!stream.stream_ops.ioctl) {
      throw new FS.ErrnoError(59);
    }
    return stream.stream_ops.ioctl(stream, cmd, arg);
  },
  readFile(path, opts = {}) {
    opts.flags = opts.flags || 0;
    opts.encoding = opts.encoding || 'binary';
    if (opts.encoding !== 'utf8' && opts.encoding !== 'binary') {
      abort(\`Invalid encoding type "\${opts.encoding}"\`);
    }
    var stream = FS.open(path, opts.flags);
    var stat = FS.stat(path);
    var length = stat.size;
    var buf = new Uint8Array(length);
    FS.read(stream, buf, 0, length, 0);
    if (opts.encoding === 'utf8') {
      buf = UTF8ArrayToString(buf);
    }
    FS.close(stream);
    return buf;
  },
  writeFile(path, data, opts = {}) {
    opts.flags = opts.flags || 577;
    var stream = FS.open(path, opts.flags, opts.mode);
    if (typeof data == 'string') {
      data = new Uint8Array(intArrayFromString(data, true));
    }
    if (ArrayBuffer.isView(data)) {
      FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
    } else {
      abort('Unsupported data type');
    }
    FS.close(stream);
  },
  cwd: () => FS.currentPath,
  chdir(path) {
    var lookup = FS.lookupPath(path, { follow: true });
    if (lookup.node === null) {
      throw new FS.ErrnoError(44);
    }
    if (!FS.isDir(lookup.node.mode)) {
      throw new FS.ErrnoError(54);
    }
    var errCode = FS.nodePermissions(lookup.node, 'x');
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    FS.currentPath = lookup.path;
  },
  createDefaultDirectories() {
    FS.mkdir('/tmp');
    FS.mkdir('/home');
    FS.mkdir('/home/web_user');
  },
  createDefaultDevices() {
    FS.mkdir('/dev');
    FS.registerDevice(FS.makedev(1, 3), {
      read: () => 0,
      write: (stream, buffer, offset, length, pos) => length,
      llseek: () => 0,
    });
    FS.mkdev('/dev/null', FS.makedev(1, 3));
    TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
    TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
    FS.mkdev('/dev/tty', FS.makedev(5, 0));
    FS.mkdev('/dev/tty1', FS.makedev(6, 0));
    var randomBuffer = new Uint8Array(1024),
      randomLeft = 0;
    var randomByte = () => {
      if (randomLeft === 0) {
        randomFill(randomBuffer);
        randomLeft = randomBuffer.byteLength;
      }
      return randomBuffer[--randomLeft];
    };
    FS.createDevice('/dev', 'random', randomByte);
    FS.createDevice('/dev', 'urandom', randomByte);
    FS.mkdir('/dev/shm');
    FS.mkdir('/dev/shm/tmp');
  },
  createSpecialDirectories() {
    FS.mkdir('/proc');
    var proc_self = FS.mkdir('/proc/self');
    FS.mkdir('/proc/self/fd');
    FS.mount(
      {
        mount() {
          var node = FS.createNode(proc_self, 'fd', 16895, 73);
          node.stream_ops = { llseek: MEMFS.stream_ops.llseek };
          node.node_ops = {
            lookup(parent, name) {
              var fd = +name;
              var stream = FS.getStreamChecked(fd);
              var ret = {
                parent: null,
                mount: { mountpoint: 'fake' },
                node_ops: { readlink: () => stream.path },
                id: fd + 1,
              };
              ret.parent = ret;
              return ret;
            },
            readdir() {
              return Array.from(FS.streams.entries())
                .filter(([k, v]) => v)
                .map(([k, v]) => k.toString());
            },
          };
          return node;
        },
      },
      {},
      '/proc/self/fd'
    );
  },
  createStandardStreams(input, output, error) {
    if (input) {
      FS.createDevice('/dev', 'stdin', input);
    } else {
      FS.symlink('/dev/tty', '/dev/stdin');
    }
    if (output) {
      FS.createDevice('/dev', 'stdout', null, output);
    } else {
      FS.symlink('/dev/tty', '/dev/stdout');
    }
    if (error) {
      FS.createDevice('/dev', 'stderr', null, error);
    } else {
      FS.symlink('/dev/tty1', '/dev/stderr');
    }
    var stdin = FS.open('/dev/stdin', 0);
    var stdout = FS.open('/dev/stdout', 1);
    var stderr = FS.open('/dev/stderr', 1);
  },
  staticInit() {
    FS.nameTable = new Array(4096);
    FS.mount(MEMFS, {}, '/');
    FS.createDefaultDirectories();
    FS.createDefaultDevices();
    FS.createSpecialDirectories();
    FS.filesystems = { MEMFS };
  },
  init(input, output, error) {
    FS.initialized = true;
    input ??= Module['stdin'];
    output ??= Module['stdout'];
    error ??= Module['stderr'];
    FS.createStandardStreams(input, output, error);
  },
  quit() {
    FS.initialized = false;
    for (var stream of FS.streams) {
      if (stream) {
        FS.close(stream);
      }
    }
  },
  findObject(path, dontResolveLastLink) {
    var ret = FS.analyzePath(path, dontResolveLastLink);
    if (!ret.exists) {
      return null;
    }
    return ret.object;
  },
  analyzePath(path, dontResolveLastLink) {
    try {
      var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
      path = lookup.path;
    } catch (e) {}
    var ret = {
      isRoot: false,
      exists: false,
      error: 0,
      name: null,
      path: null,
      object: null,
      parentExists: false,
      parentPath: null,
      parentObject: null,
    };
    try {
      var lookup = FS.lookupPath(path, { parent: true });
      ret.parentExists = true;
      ret.parentPath = lookup.path;
      ret.parentObject = lookup.node;
      ret.name = PATH.basename(path);
      lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
      ret.exists = true;
      ret.path = lookup.path;
      ret.object = lookup.node;
      ret.name = lookup.node.name;
      ret.isRoot = lookup.path === '/';
    } catch (e) {
      ret.error = e.errno;
    }
    return ret;
  },
  createPath(parent, path, canRead, canWrite) {
    parent = typeof parent == 'string' ? parent : FS.getPath(parent);
    var parts = path.split('/').reverse();
    while (parts.length) {
      var part = parts.pop();
      if (!part) continue;
      var current = PATH.join2(parent, part);
      try {
        FS.mkdir(current);
      } catch (e) {
        if (e.errno != 20) throw e;
      }
      parent = current;
    }
    return current;
  },
  createFile(parent, name, properties, canRead, canWrite) {
    var path = PATH.join2(
      typeof parent == 'string' ? parent : FS.getPath(parent),
      name
    );
    var mode = FS_getMode(canRead, canWrite);
    return FS.create(path, mode);
  },
  createDataFile(parent, name, data, canRead, canWrite, canOwn) {
    var path = name;
    if (parent) {
      parent = typeof parent == 'string' ? parent : FS.getPath(parent);
      path = name ? PATH.join2(parent, name) : parent;
    }
    var mode = FS_getMode(canRead, canWrite);
    var node = FS.create(path, mode);
    if (data) {
      if (typeof data == 'string') {
        var arr = new Array(data.length);
        for (var i = 0, len = data.length; i < len; ++i)
          arr[i] = data.charCodeAt(i);
        data = arr;
      }
      FS.chmod(node, mode | 146);
      var stream = FS.open(node, 577);
      FS.write(stream, data, 0, data.length, 0, canOwn);
      FS.close(stream);
      FS.chmod(node, mode);
    }
  },
  createDevice(parent, name, input, output) {
    var path = PATH.join2(
      typeof parent == 'string' ? parent : FS.getPath(parent),
      name
    );
    var mode = FS_getMode(!!input, !!output);
    FS.createDevice.major ??= 64;
    var dev = FS.makedev(FS.createDevice.major++, 0);
    FS.registerDevice(dev, {
      open(stream) {
        stream.seekable = false;
      },
      close(stream) {
        if (output?.buffer?.length) {
          output(10);
        }
      },
      read(stream, buffer, offset, length, pos) {
        var bytesRead = 0;
        for (var i = 0; i < length; i++) {
          var result;
          try {
            result = input();
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (result === undefined && bytesRead === 0) {
            throw new FS.ErrnoError(6);
          }
          if (result === null || result === undefined) break;
          bytesRead++;
          buffer[offset + i] = result;
        }
        if (bytesRead) {
          stream.node.atime = Date.now();
        }
        return bytesRead;
      },
      write(stream, buffer, offset, length, pos) {
        for (var i = 0; i < length; i++) {
          try {
            output(buffer[offset + i]);
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
        }
        if (length) {
          stream.node.mtime = stream.node.ctime = Date.now();
        }
        return i;
      },
    });
    return FS.mkdev(path, mode, dev);
  },
  forceLoadFile(obj) {
    if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
    if (globalThis.XMLHttpRequest) {
      abort(
        'Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.'
      );
    } else {
      try {
        obj.contents = readBinary(obj.url);
      } catch (e) {
        throw new FS.ErrnoError(29);
      }
    }
  },
  createLazyFile(parent, name, url, canRead, canWrite) {
    class LazyUint8Array {
      lengthKnown = false;
      chunks = [];
      get(idx) {
        if (idx > this.length - 1 || idx < 0) {
          return undefined;
        }
        var chunkOffset = idx % this.chunkSize;
        var chunkNum = (idx / this.chunkSize) | 0;
        return this.getter(chunkNum)[chunkOffset];
      }
      setDataGetter(getter) {
        this.getter = getter;
      }
      cacheLength() {
        var xhr = new XMLHttpRequest();
        xhr.open('HEAD', url, false);
        xhr.send(null);
        if (!((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304))
          abort("Couldn't load " + url + '. Status: ' + xhr.status);
        var datalength = Number(xhr.getResponseHeader('Content-length'));
        var header;
        var hasByteServing =
          (header = xhr.getResponseHeader('Accept-Ranges')) &&
          header === 'bytes';
        var usesGzip =
          (header = xhr.getResponseHeader('Content-Encoding')) &&
          header === 'gzip';
        var chunkSize = 1024 * 1024;
        if (!hasByteServing) chunkSize = datalength;
        var doXHR = (from, to) => {
          if (from > to)
            abort(
              'invalid range (' + from + ', ' + to + ') or no bytes requested!'
            );
          if (to > datalength - 1)
            abort('only ' + datalength + ' bytes available! programmer error!');
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, false);
          if (datalength !== chunkSize)
            xhr.setRequestHeader('Range', 'bytes=' + from + '-' + to);
          xhr.responseType = 'arraybuffer';
          if (xhr.overrideMimeType) {
            xhr.overrideMimeType('text/plain; charset=x-user-defined');
          }
          xhr.send(null);
          if (!((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304))
            abort("Couldn't load " + url + '. Status: ' + xhr.status);
          if (xhr.response !== undefined) {
            return new Uint8Array(xhr.response || []);
          }
          return intArrayFromString(xhr.responseText || '', true);
        };
        var lazyArray = this;
        lazyArray.setDataGetter((chunkNum) => {
          var start = chunkNum * chunkSize;
          var end = (chunkNum + 1) * chunkSize - 1;
          end = Math.min(end, datalength - 1);
          if (typeof lazyArray.chunks[chunkNum] == 'undefined') {
            lazyArray.chunks[chunkNum] = doXHR(start, end);
          }
          if (typeof lazyArray.chunks[chunkNum] == 'undefined')
            abort('doXHR failed!');
          return lazyArray.chunks[chunkNum];
        });
        if (usesGzip || !datalength) {
          chunkSize = datalength = 1;
          datalength = this.getter(0).length;
          chunkSize = datalength;
          out(
            'LazyFiles on gzip forces download of the whole file when length is accessed'
          );
        }
        this._length = datalength;
        this._chunkSize = chunkSize;
        this.lengthKnown = true;
      }
      get length() {
        if (!this.lengthKnown) {
          this.cacheLength();
        }
        return this._length;
      }
      get chunkSize() {
        if (!this.lengthKnown) {
          this.cacheLength();
        }
        return this._chunkSize;
      }
    }
    if (globalThis.XMLHttpRequest) {
      if (!ENVIRONMENT_IS_WORKER)
        abort(
          'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc'
        );
      var lazyArray = new LazyUint8Array();
      var properties = { isDevice: false, contents: lazyArray };
    } else {
      var properties = { isDevice: false, url };
    }
    var node = FS.createFile(parent, name, properties, canRead, canWrite);
    if (properties.contents) {
      node.contents = properties.contents;
    } else if (properties.url) {
      node.contents = null;
      node.url = properties.url;
    }
    Object.defineProperties(node, {
      usedBytes: {
        get: function () {
          return this.contents.length;
        },
      },
    });
    var stream_ops = {};
    for (const [key, fn] of Object.entries(node.stream_ops)) {
      stream_ops[key] = (...args) => {
        FS.forceLoadFile(node);
        return fn(...args);
      };
    }
    function writeChunks(stream, buffer, offset, length, position) {
      var contents = stream.node.contents;
      if (position >= contents.length) return 0;
      var size = Math.min(contents.length - position, length);
      if (contents.slice) {
        for (var i = 0; i < size; i++) {
          buffer[offset + i] = contents[position + i];
        }
      } else {
        for (var i = 0; i < size; i++) {
          buffer[offset + i] = contents.get(position + i);
        }
      }
      return size;
    }
    stream_ops.read = (stream, buffer, offset, length, position) => {
      FS.forceLoadFile(node);
      return writeChunks(stream, buffer, offset, length, position);
    };
    stream_ops.mmap = (stream, length, position, prot, flags) => {
      FS.forceLoadFile(node);
      var ptr = mmapAlloc(length);
      if (!ptr) {
        throw new FS.ErrnoError(48);
      }
      writeChunks(stream, HEAP8, ptr, length, position);
      return { ptr, allocated: true };
    };
    node.stream_ops = stream_ops;
    return node;
  },
};
var UTF8ToString = (ptr, maxBytesToRead, ignoreNul) => {
  ptr >>>= 0;
  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead, ignoreNul) : '';
};
var SYSCALLS = {
  DEFAULT_POLLMASK: 5,
  calculateAt(dirfd, path, allowEmpty) {
    if (PATH.isAbs(path)) {
      return path;
    }
    var dir;
    if (dirfd === -100) {
      dir = FS.cwd();
    } else {
      var dirstream = SYSCALLS.getStreamFromFD(dirfd);
      dir = dirstream.path;
    }
    if (path.length == 0) {
      if (!allowEmpty) {
        throw new FS.ErrnoError(44);
      }
      return dir;
    }
    return dir + '/' + path;
  },
  writeStat(buf, stat) {
    HEAPU32[(buf >>> 2) >>> 0] = stat.dev;
    HEAPU32[((buf + 4) >>> 2) >>> 0] = stat.mode;
    HEAPU32[((buf + 8) >>> 2) >>> 0] = stat.nlink;
    HEAPU32[((buf + 12) >>> 2) >>> 0] = stat.uid;
    HEAPU32[((buf + 16) >>> 2) >>> 0] = stat.gid;
    HEAPU32[((buf + 20) >>> 2) >>> 0] = stat.rdev;
    HEAP64[((buf + 24) >>> 3) >>> 0] = BigInt(stat.size);
    HEAP32[((buf + 32) >>> 2) >>> 0] = 4096;
    HEAP32[((buf + 36) >>> 2) >>> 0] = stat.blocks;
    var atime = stat.atime.getTime();
    var mtime = stat.mtime.getTime();
    var ctime = stat.ctime.getTime();
    HEAP64[((buf + 40) >>> 3) >>> 0] = BigInt(Math.floor(atime / 1e3));
    HEAPU32[((buf + 48) >>> 2) >>> 0] = (atime % 1e3) * 1e3 * 1e3;
    HEAP64[((buf + 56) >>> 3) >>> 0] = BigInt(Math.floor(mtime / 1e3));
    HEAPU32[((buf + 64) >>> 2) >>> 0] = (mtime % 1e3) * 1e3 * 1e3;
    HEAP64[((buf + 72) >>> 3) >>> 0] = BigInt(Math.floor(ctime / 1e3));
    HEAPU32[((buf + 80) >>> 2) >>> 0] = (ctime % 1e3) * 1e3 * 1e3;
    HEAP64[((buf + 88) >>> 3) >>> 0] = BigInt(stat.ino);
    return 0;
  },
  writeStatFs(buf, stats) {
    HEAPU32[((buf + 4) >>> 2) >>> 0] = stats.bsize;
    HEAPU32[((buf + 60) >>> 2) >>> 0] = stats.bsize;
    HEAP64[((buf + 8) >>> 3) >>> 0] = BigInt(stats.blocks);
    HEAP64[((buf + 16) >>> 3) >>> 0] = BigInt(stats.bfree);
    HEAP64[((buf + 24) >>> 3) >>> 0] = BigInt(stats.bavail);
    HEAP64[((buf + 32) >>> 3) >>> 0] = BigInt(stats.files);
    HEAP64[((buf + 40) >>> 3) >>> 0] = BigInt(stats.ffree);
    HEAPU32[((buf + 48) >>> 2) >>> 0] = stats.fsid;
    HEAPU32[((buf + 64) >>> 2) >>> 0] = stats.flags;
    HEAPU32[((buf + 56) >>> 2) >>> 0] = stats.namelen;
  },
  doMsync(addr, stream, len, flags, offset) {
    if (!FS.isFile(stream.node.mode)) {
      throw new FS.ErrnoError(43);
    }
    if (flags & 2) {
      return 0;
    }
    var buffer = HEAPU8.slice(addr, addr + len);
    FS.msync(stream, buffer, offset, len, flags);
  },
  getStreamFromFD(fd) {
    var stream = FS.getStreamChecked(fd);
    return stream;
  },
  varargs: undefined,
  getStr(ptr) {
    var ret = UTF8ToString(ptr);
    return ret;
  },
};
var INT53_MAX = 9007199254740992;
var INT53_MIN = -9007199254740992;
var bigintToI53Checked = (num) =>
  num < INT53_MIN || num > INT53_MAX ? NaN : Number(num);
function ___syscall_fcntl64(fd, cmd, varargs) {
  varargs >>>= 0;
  SYSCALLS.varargs = varargs;
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    switch (cmd) {
      case 0: {
        var arg = syscallGetVarargI();
        if (arg < 0) {
          return -28;
        }
        while (FS.streams[arg]) {
          arg++;
        }
        var newStream;
        newStream = FS.dupStream(stream, arg);
        return newStream.fd;
      }
      case 1:
      case 2:
        return 0;
      case 3:
        return stream.flags;
      case 4: {
        var arg = syscallGetVarargI();
        stream.flags |= arg;
        return 0;
      }
      case 12: {
        var arg = syscallGetVarargP();
        var offset = 0;
        HEAP16[((arg + offset) >>> 1) >>> 0] = 2;
        return 0;
      }
      case 13:
      case 14:
        return 0;
    }
    return -28;
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
}
function ___syscall_ioctl(fd, op, varargs) {
  varargs >>>= 0;
  SYSCALLS.varargs = varargs;
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    switch (op) {
      case 21509: {
        if (!stream.tty) return -59;
        return 0;
      }
      case 21505: {
        if (!stream.tty) return -59;
        if (stream.tty.ops.ioctl_tcgets) {
          var termios = stream.tty.ops.ioctl_tcgets(stream);
          var argp = syscallGetVarargP();
          HEAP32[(argp >>> 2) >>> 0] = termios.c_iflag || 0;
          HEAP32[((argp + 4) >>> 2) >>> 0] = termios.c_oflag || 0;
          HEAP32[((argp + 8) >>> 2) >>> 0] = termios.c_cflag || 0;
          HEAP32[((argp + 12) >>> 2) >>> 0] = termios.c_lflag || 0;
          for (var i = 0; i < 32; i++) {
            HEAP8[(argp + i + 17) >>> 0] = termios.c_cc[i] || 0;
          }
          return 0;
        }
        return 0;
      }
      case 21510:
      case 21511:
      case 21512: {
        if (!stream.tty) return -59;
        return 0;
      }
      case 21506:
      case 21507:
      case 21508: {
        if (!stream.tty) return -59;
        if (stream.tty.ops.ioctl_tcsets) {
          var argp = syscallGetVarargP();
          var c_iflag = HEAP32[(argp >>> 2) >>> 0];
          var c_oflag = HEAP32[((argp + 4) >>> 2) >>> 0];
          var c_cflag = HEAP32[((argp + 8) >>> 2) >>> 0];
          var c_lflag = HEAP32[((argp + 12) >>> 2) >>> 0];
          var c_cc = [];
          for (var i = 0; i < 32; i++) {
            c_cc.push(HEAP8[(argp + i + 17) >>> 0]);
          }
          return stream.tty.ops.ioctl_tcsets(stream.tty, op, {
            c_iflag,
            c_oflag,
            c_cflag,
            c_lflag,
            c_cc,
          });
        }
        return 0;
      }
      case 21519: {
        if (!stream.tty) return -59;
        var argp = syscallGetVarargP();
        HEAP32[(argp >>> 2) >>> 0] = 0;
        return 0;
      }
      case 21520: {
        if (!stream.tty) return -59;
        return -28;
      }
      case 21537:
      case 21531: {
        var argp = syscallGetVarargP();
        return FS.ioctl(stream, op, argp);
      }
      case 21523: {
        if (!stream.tty) return -59;
        if (stream.tty.ops.ioctl_tiocgwinsz) {
          var winsize = stream.tty.ops.ioctl_tiocgwinsz(stream.tty);
          var argp = syscallGetVarargP();
          HEAP16[(argp >>> 1) >>> 0] = winsize[0];
          HEAP16[((argp + 2) >>> 1) >>> 0] = winsize[1];
        }
        return 0;
      }
      case 21524: {
        if (!stream.tty) return -59;
        return 0;
      }
      case 21515: {
        if (!stream.tty) return -59;
        return 0;
      }
      default:
        return -28;
    }
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
}
function ___syscall_openat(dirfd, path, flags, varargs) {
  path >>>= 0;
  varargs >>>= 0;
  SYSCALLS.varargs = varargs;
  try {
    path = SYSCALLS.getStr(path);
    path = SYSCALLS.calculateAt(dirfd, path);
    var mode = varargs ? syscallGetVarargI() : 0;
    return FS.open(path, flags, mode).fd;
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
}
var __abort_js = () => abort('');
var runtimeKeepaliveCounter = 0;
var __emscripten_runtime_keepalive_clear = () => {
  noExitRuntime = false;
  runtimeKeepaliveCounter = 0;
};
function __mmap_js(len, prot, flags, fd, offset, allocated, addr) {
  len >>>= 0;
  offset = bigintToI53Checked(offset);
  allocated >>>= 0;
  addr >>>= 0;
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    var res = FS.mmap(stream, len, offset, prot, flags);
    var ptr = res.ptr;
    HEAP32[(allocated >>> 2) >>> 0] = res.allocated;
    HEAPU32[(addr >>> 2) >>> 0] = ptr;
    return 0;
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
}
function __munmap_js(addr, len, prot, flags, fd, offset) {
  addr >>>= 0;
  len >>>= 0;
  offset = bigintToI53Checked(offset);
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    if (prot & 2) {
      SYSCALLS.doMsync(addr, stream, len, flags, offset);
    }
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
}
var timers = {};
var handleException = (e) => {
  if (e instanceof ExitStatus || e == 'unwind') {
    return EXITSTATUS;
  }
  quit_(1, e);
};
var keepRuntimeAlive = () => noExitRuntime || runtimeKeepaliveCounter > 0;
var _proc_exit = (code) => {
  EXITSTATUS = code;
  if (!keepRuntimeAlive()) {
    Module['onExit']?.(code);
    ABORT = true;
  }
  quit_(code, new ExitStatus(code));
};
var exitJS = (status, implicit) => {
  EXITSTATUS = status;
  _proc_exit(status);
};
var _exit = exitJS;
var maybeExit = () => {
  if (!keepRuntimeAlive()) {
    try {
      _exit(EXITSTATUS);
    } catch (e) {
      handleException(e);
    }
  }
};
var callUserCallback = (func) => {
  if (ABORT) {
    return;
  }
  try {
    func();
    maybeExit();
  } catch (e) {
    handleException(e);
  }
};
var _emscripten_get_now = () => performance.now();
var __setitimer_js = (which, timeout_ms) => {
  if (timers[which]) {
    clearTimeout(timers[which].id);
    delete timers[which];
  }
  if (!timeout_ms) return 0;
  var id = setTimeout(() => {
    delete timers[which];
    callUserCallback(() => __emscripten_timeout(which, _emscripten_get_now()));
  }, timeout_ms);
  timers[which] = { id, timeout_ms };
  return 0;
};
var stringToUTF8 = (str, outPtr, maxBytesToWrite) =>
  stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
var __tzset_js = function (timezone, daylight, std_name, dst_name) {
  timezone >>>= 0;
  daylight >>>= 0;
  std_name >>>= 0;
  dst_name >>>= 0;
  var currentYear = new Date().getFullYear();
  var winter = new Date(currentYear, 0, 1);
  var summer = new Date(currentYear, 6, 1);
  var winterOffset = winter.getTimezoneOffset();
  var summerOffset = summer.getTimezoneOffset();
  var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
  HEAPU32[(timezone >>> 2) >>> 0] = stdTimezoneOffset * 60;
  HEAP32[(daylight >>> 2) >>> 0] = Number(winterOffset != summerOffset);
  var extractZone = (timezoneOffset) => {
    var sign = timezoneOffset >= 0 ? '-' : '+';
    var absOffset = Math.abs(timezoneOffset);
    var hours = String(Math.floor(absOffset / 60)).padStart(2, '0');
    var minutes = String(absOffset % 60).padStart(2, '0');
    return \`UTC\${sign}\${hours}\${minutes}\`;
  };
  var winterName = extractZone(winterOffset);
  var summerName = extractZone(summerOffset);
  if (summerOffset < winterOffset) {
    stringToUTF8(winterName, std_name, 17);
    stringToUTF8(summerName, dst_name, 17);
  } else {
    stringToUTF8(winterName, dst_name, 17);
    stringToUTF8(summerName, std_name, 17);
  }
};
var _emscripten_date_now = () => Date.now();
var nowIsMonotonic = 1;
var checkWasiClock = (clock_id) => clock_id >= 0 && clock_id <= 3;
function _clock_time_get(clk_id, ignored_precision, ptime) {
  ignored_precision = bigintToI53Checked(ignored_precision);
  ptime >>>= 0;
  if (!checkWasiClock(clk_id)) {
    return 28;
  }
  var now;
  if (clk_id === 0) {
    now = _emscripten_date_now();
  } else if (nowIsMonotonic) {
    now = _emscripten_get_now();
  } else {
    return 52;
  }
  var nsec = Math.round(now * 1e3 * 1e3);
  HEAP64[(ptime >>> 3) >>> 0] = BigInt(nsec);
  return 0;
}
var getHeapMax = () => 4294901760;
function _emscripten_get_heap_max() {
  return getHeapMax();
}
var _emscripten_has_asyncify = () => 2;
var growMemory = (size) => {
  var oldHeapSize = wasmMemory.buffer.byteLength;
  var pages = ((size - oldHeapSize + 65535) / 65536) | 0;
  try {
    wasmMemory.grow(pages);
    updateMemoryViews();
    return 1;
  } catch (e) {}
};
function _emscripten_resize_heap(requestedSize) {
  requestedSize >>>= 0;
  var oldSize = HEAPU8.length;
  var maxHeapSize = getHeapMax();
  if (requestedSize > maxHeapSize) {
    return false;
  }
  for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
    var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
    overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
    var newSize = Math.min(
      maxHeapSize,
      alignMemory(Math.max(requestedSize, overGrownHeapSize), 65536)
    );
    var replacement = growMemory(newSize);
    if (replacement) {
      return true;
    }
  }
  return false;
}
var stackSave = () => _emscripten_stack_get_current();
var stackRestore = (val) => __emscripten_stack_restore(val);
var stackAlloc = (sz) => __emscripten_stack_alloc(sz);
var stringToUTF8OnStack = (str) => {
  var size = lengthBytesUTF8(str) + 1;
  var ret = stackAlloc(size);
  stringToUTF8(str, ret, size);
  return ret;
};
var writeI53ToI64 = (ptr, num) => {
  HEAPU32[(ptr >>> 2) >>> 0] = num;
  var lower = HEAPU32[(ptr >>> 2) >>> 0];
  HEAPU32[((ptr + 4) >>> 2) >>> 0] = (num - lower) / 4294967296;
};
var stringToNewUTF8 = (str) => {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _malloc(size);
  if (ret) stringToUTF8(str, ret, size);
  return ret;
};
var readI53FromI64 = (ptr) =>
  HEAPU32[(ptr >>> 2) >>> 0] + HEAP32[((ptr + 4) >>> 2) >>> 0] * 4294967296;
var wasmTableMirror = [];
var getWasmTableEntry = (funcPtr) => {
  var func = wasmTableMirror[funcPtr];
  if (!func) {
    wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
    if (Asyncify.isAsyncExport(func)) {
      wasmTableMirror[funcPtr] = func = Asyncify.makeAsyncFunction(func);
    }
  }
  return func;
};
var WebGPU = {
  Internals: {
    jsObjects: [],
    jsObjectInsert: (ptr, jsObject) => {
      ptr >>>= 0;
      WebGPU.Internals.jsObjects[ptr] = jsObject;
    },
    bufferOnUnmaps: [],
    futures: [],
    futureInsert: (futureId, promise) => {
      WebGPU.Internals.futures[futureId] = new Promise((resolve) =>
        promise.finally(() => resolve(futureId))
      );
    },
  },
  getJsObject: (ptr) => {
    if (!ptr) return undefined;
    ptr >>>= 0;
    return WebGPU.Internals.jsObjects[ptr];
  },
  importJsAdapter: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateAdapter(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsBindGroup: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateBindGroup(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsBindGroupLayout: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateBindGroupLayout(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsBuffer: (buffer, parentPtr = 0) => {
    assert(buffer.mapState === 'unmapped');
    var bufferPtr = _emwgpuCreateBuffer(parentPtr);
    WebGPU.Internals.jsObjectInsert(bufferPtr, buffer);
    return bufferPtr;
  },
  importJsCommandBuffer: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateCommandBuffer(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsCommandEncoder: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateCommandEncoder(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsComputePassEncoder: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateComputePassEncoder(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsComputePipeline: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateComputePipeline(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsDevice: (device, parentPtr = 0) => {
    var queuePtr = _emwgpuCreateQueue(parentPtr);
    var devicePtr = _emwgpuCreateDevice(parentPtr, queuePtr);
    WebGPU.Internals.jsObjectInsert(queuePtr, device.queue);
    WebGPU.Internals.jsObjectInsert(devicePtr, device);
    return devicePtr;
  },
  importJsExternalTexture: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateExternalTexture(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsPipelineLayout: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreatePipelineLayout(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsQuerySet: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateQuerySet(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsQueue: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateQueue(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsRenderBundle: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateRenderBundle(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsRenderBundleEncoder: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateRenderBundleEncoder(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsRenderPassEncoder: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateRenderPassEncoder(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsRenderPipeline: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateRenderPipeline(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsSampler: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateSampler(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsShaderModule: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateShaderModule(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsSurface: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateSurface(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsTexture: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateTexture(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsTextureView: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateTextureView(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  errorCallback: (callback, type, message, userdata) => {
    var sp = stackSave();
    var messagePtr = stringToUTF8OnStack(message);
    getWasmTableEntry(callback)(type, messagePtr, userdata);
    stackRestore(sp);
  },
  iterateExtensions: (root, handlers) => {
    for (
      var ptr = HEAPU32[(root >>> 2) >>> 0];
      ptr;
      ptr = HEAPU32[(ptr >>> 2) >>> 0]
    ) {
      var sType = HEAP32[((ptr + 4) >>> 2) >>> 0];
      var handler = handlers[sType](ptr);
    }
  },
  setStringView: (ptr, data, length) => {
    HEAPU32[(ptr >>> 2) >>> 0] = data;
    HEAPU32[((ptr + 4) >>> 2) >>> 0] = length;
  },
  makeStringFromStringView: (stringViewPtr) => {
    var ptr = HEAPU32[(stringViewPtr >>> 2) >>> 0];
    var length = HEAPU32[((stringViewPtr + 4) >>> 2) >>> 0];
    return UTF8ToString(ptr, length);
  },
  makeStringFromOptionalStringView: (stringViewPtr) => {
    var ptr = HEAPU32[(stringViewPtr >>> 2) >>> 0];
    var length = HEAPU32[((stringViewPtr + 4) >>> 2) >>> 0];
    if (!ptr) {
      if (length === 0) {
        return '';
      }
      return undefined;
    }
    return UTF8ToString(ptr, length);
  },
  makeColor: (ptr) => ({
    r: HEAPF64[(ptr >>> 3) >>> 0],
    g: HEAPF64[((ptr + 8) >>> 3) >>> 0],
    b: HEAPF64[((ptr + 16) >>> 3) >>> 0],
    a: HEAPF64[((ptr + 24) >>> 3) >>> 0],
  }),
  makeExtent3D: (ptr) => ({
    width: HEAPU32[(ptr >>> 2) >>> 0],
    height: HEAPU32[((ptr + 4) >>> 2) >>> 0],
    depthOrArrayLayers: HEAPU32[((ptr + 8) >>> 2) >>> 0],
  }),
  makeOrigin3D: (ptr) => ({
    x: HEAPU32[(ptr >>> 2) >>> 0],
    y: HEAPU32[((ptr + 4) >>> 2) >>> 0],
    z: HEAPU32[((ptr + 8) >>> 2) >>> 0],
  }),
  makeTexelCopyTextureInfo: (ptr) => ({
    texture: WebGPU.getJsObject(HEAPU32[(ptr >>> 2) >>> 0]),
    mipLevel: HEAPU32[((ptr + 4) >>> 2) >>> 0],
    origin: WebGPU.makeOrigin3D(ptr + 8),
    aspect: WebGPU.TextureAspect[HEAP32[((ptr + 20) >>> 2) >>> 0]],
  }),
  makeTexelCopyBufferLayout: (ptr) => {
    var bytesPerRow = HEAPU32[((ptr + 8) >>> 2) >>> 0];
    var rowsPerImage = HEAPU32[((ptr + 12) >>> 2) >>> 0];
    return {
      offset: readI53FromI64(ptr),
      bytesPerRow: bytesPerRow === 4294967295 ? undefined : bytesPerRow,
      rowsPerImage: rowsPerImage === 4294967295 ? undefined : rowsPerImage,
    };
  },
  makeTexelCopyBufferInfo: (ptr) => {
    var layoutPtr = ptr + 0;
    var bufferCopyView = WebGPU.makeTexelCopyBufferLayout(layoutPtr);
    bufferCopyView['buffer'] = WebGPU.getJsObject(
      HEAPU32[((ptr + 16) >>> 2) >>> 0]
    );
    return bufferCopyView;
  },
  makePassTimestampWrites: (ptr) => {
    if (ptr === 0) return undefined;
    return {
      querySet: WebGPU.getJsObject(HEAPU32[((ptr + 4) >>> 2) >>> 0]),
      beginningOfPassWriteIndex: HEAPU32[((ptr + 8) >>> 2) >>> 0],
      endOfPassWriteIndex: HEAPU32[((ptr + 12) >>> 2) >>> 0],
    };
  },
  makePipelineConstants: (constantCount, constantsPtr) => {
    if (!constantCount) return;
    var constants = {};
    for (var i = 0; i < constantCount; ++i) {
      var entryPtr = constantsPtr + 24 * i;
      var key = WebGPU.makeStringFromStringView(entryPtr + 4);
      constants[key] = HEAPF64[((entryPtr + 16) >>> 3) >>> 0];
    }
    return constants;
  },
  makePipelineLayout: (layoutPtr) => {
    if (!layoutPtr) return 'auto';
    return WebGPU.getJsObject(layoutPtr);
  },
  makeComputeState: (ptr) => {
    if (!ptr) return undefined;
    var desc = {
      module: WebGPU.getJsObject(HEAPU32[((ptr + 4) >>> 2) >>> 0]),
      constants: WebGPU.makePipelineConstants(
        HEAPU32[((ptr + 16) >>> 2) >>> 0],
        HEAPU32[((ptr + 20) >>> 2) >>> 0]
      ),
      entryPoint: WebGPU.makeStringFromOptionalStringView(ptr + 8),
    };
    return desc;
  },
  makeComputePipelineDesc: (descriptor) => {
    var desc = {
      label: WebGPU.makeStringFromOptionalStringView(descriptor + 4),
      layout: WebGPU.makePipelineLayout(
        HEAPU32[((descriptor + 12) >>> 2) >>> 0]
      ),
      compute: WebGPU.makeComputeState(descriptor + 16),
    };
    return desc;
  },
  makeRenderPipelineDesc: (descriptor) => {
    function makePrimitiveState(psPtr) {
      if (!psPtr) return undefined;
      return {
        topology: WebGPU.PrimitiveTopology[HEAP32[((psPtr + 4) >>> 2) >>> 0]],
        stripIndexFormat: WebGPU.IndexFormat[HEAP32[((psPtr + 8) >>> 2) >>> 0]],
        frontFace: WebGPU.FrontFace[HEAP32[((psPtr + 12) >>> 2) >>> 0]],
        cullMode: WebGPU.CullMode[HEAP32[((psPtr + 16) >>> 2) >>> 0]],
        unclippedDepth: !!HEAPU32[((psPtr + 20) >>> 2) >>> 0],
      };
    }
    function makeBlendComponent(bdPtr) {
      if (!bdPtr) return undefined;
      return {
        operation: WebGPU.BlendOperation[HEAP32[(bdPtr >>> 2) >>> 0]],
        srcFactor: WebGPU.BlendFactor[HEAP32[((bdPtr + 4) >>> 2) >>> 0]],
        dstFactor: WebGPU.BlendFactor[HEAP32[((bdPtr + 8) >>> 2) >>> 0]],
      };
    }
    function makeBlendState(bsPtr) {
      if (!bsPtr) return undefined;
      return {
        alpha: makeBlendComponent(bsPtr + 12),
        color: makeBlendComponent(bsPtr + 0),
      };
    }
    function makeColorState(csPtr) {
      var format = WebGPU.TextureFormat[HEAP32[((csPtr + 4) >>> 2) >>> 0]];
      return format
        ? {
            format,
            blend: makeBlendState(HEAPU32[((csPtr + 8) >>> 2) >>> 0]),
            writeMask: HEAPU32[((csPtr + 16) >>> 2) >>> 0],
          }
        : undefined;
    }
    function makeColorStates(count, csArrayPtr) {
      var states = [];
      for (var i = 0; i < count; ++i) {
        states.push(makeColorState(csArrayPtr + 24 * i));
      }
      return states;
    }
    function makeStencilStateFace(ssfPtr) {
      return {
        compare: WebGPU.CompareFunction[HEAP32[(ssfPtr >>> 2) >>> 0]],
        failOp: WebGPU.StencilOperation[HEAP32[((ssfPtr + 4) >>> 2) >>> 0]],
        depthFailOp:
          WebGPU.StencilOperation[HEAP32[((ssfPtr + 8) >>> 2) >>> 0]],
        passOp: WebGPU.StencilOperation[HEAP32[((ssfPtr + 12) >>> 2) >>> 0]],
      };
    }
    function makeDepthStencilState(dssPtr) {
      if (!dssPtr) return undefined;
      return {
        format: WebGPU.TextureFormat[HEAP32[((dssPtr + 4) >>> 2) >>> 0]],
        depthWriteEnabled: !!HEAPU32[((dssPtr + 8) >>> 2) >>> 0],
        depthCompare:
          WebGPU.CompareFunction[HEAP32[((dssPtr + 12) >>> 2) >>> 0]],
        stencilFront: makeStencilStateFace(dssPtr + 16),
        stencilBack: makeStencilStateFace(dssPtr + 32),
        stencilReadMask: HEAPU32[((dssPtr + 48) >>> 2) >>> 0],
        stencilWriteMask: HEAPU32[((dssPtr + 52) >>> 2) >>> 0],
        depthBias: HEAP32[((dssPtr + 56) >>> 2) >>> 0],
        depthBiasSlopeScale: HEAPF32[((dssPtr + 60) >>> 2) >>> 0],
        depthBiasClamp: HEAPF32[((dssPtr + 64) >>> 2) >>> 0],
      };
    }
    function makeVertexAttribute(vaPtr) {
      return {
        format: WebGPU.VertexFormat[HEAP32[((vaPtr + 4) >>> 2) >>> 0]],
        offset: readI53FromI64(vaPtr + 8),
        shaderLocation: HEAPU32[((vaPtr + 16) >>> 2) >>> 0],
      };
    }
    function makeVertexAttributes(count, vaArrayPtr) {
      var vas = [];
      for (var i = 0; i < count; ++i) {
        vas.push(makeVertexAttribute(vaArrayPtr + i * 24));
      }
      return vas;
    }
    function makeVertexBuffer(vbPtr) {
      if (!vbPtr) return undefined;
      var stepMode = WebGPU.VertexStepMode[HEAP32[((vbPtr + 4) >>> 2) >>> 0]];
      var attributeCount = HEAPU32[((vbPtr + 16) >>> 2) >>> 0];
      if (!stepMode && !attributeCount) {
        return null;
      }
      return {
        arrayStride: readI53FromI64(vbPtr + 8),
        stepMode,
        attributes: makeVertexAttributes(
          attributeCount,
          HEAPU32[((vbPtr + 20) >>> 2) >>> 0]
        ),
      };
    }
    function makeVertexBuffers(count, vbArrayPtr) {
      if (!count) return undefined;
      var vbs = [];
      for (var i = 0; i < count; ++i) {
        vbs.push(makeVertexBuffer(vbArrayPtr + i * 24));
      }
      return vbs;
    }
    function makeVertexState(viPtr) {
      if (!viPtr) return undefined;
      var desc = {
        module: WebGPU.getJsObject(HEAPU32[((viPtr + 4) >>> 2) >>> 0]),
        constants: WebGPU.makePipelineConstants(
          HEAPU32[((viPtr + 16) >>> 2) >>> 0],
          HEAPU32[((viPtr + 20) >>> 2) >>> 0]
        ),
        buffers: makeVertexBuffers(
          HEAPU32[((viPtr + 24) >>> 2) >>> 0],
          HEAPU32[((viPtr + 28) >>> 2) >>> 0]
        ),
        entryPoint: WebGPU.makeStringFromOptionalStringView(viPtr + 8),
      };
      return desc;
    }
    function makeMultisampleState(msPtr) {
      if (!msPtr) return undefined;
      return {
        count: HEAPU32[((msPtr + 4) >>> 2) >>> 0],
        mask: HEAPU32[((msPtr + 8) >>> 2) >>> 0],
        alphaToCoverageEnabled: !!HEAPU32[((msPtr + 12) >>> 2) >>> 0],
      };
    }
    function makeFragmentState(fsPtr) {
      if (!fsPtr) return undefined;
      var desc = {
        module: WebGPU.getJsObject(HEAPU32[((fsPtr + 4) >>> 2) >>> 0]),
        constants: WebGPU.makePipelineConstants(
          HEAPU32[((fsPtr + 16) >>> 2) >>> 0],
          HEAPU32[((fsPtr + 20) >>> 2) >>> 0]
        ),
        targets: makeColorStates(
          HEAPU32[((fsPtr + 24) >>> 2) >>> 0],
          HEAPU32[((fsPtr + 28) >>> 2) >>> 0]
        ),
        entryPoint: WebGPU.makeStringFromOptionalStringView(fsPtr + 8),
      };
      return desc;
    }
    var desc = {
      label: WebGPU.makeStringFromOptionalStringView(descriptor + 4),
      layout: WebGPU.makePipelineLayout(
        HEAPU32[((descriptor + 12) >>> 2) >>> 0]
      ),
      vertex: makeVertexState(descriptor + 16),
      primitive: makePrimitiveState(descriptor + 48),
      depthStencil: makeDepthStencilState(
        HEAPU32[((descriptor + 72) >>> 2) >>> 0]
      ),
      multisample: makeMultisampleState(descriptor + 76),
      fragment: makeFragmentState(HEAPU32[((descriptor + 92) >>> 2) >>> 0]),
    };
    return desc;
  },
  fillLimitStruct: (limits, limitsOutPtr) => {
    var nextInChainPtr = HEAPU32[(limitsOutPtr >>> 2) >>> 0];
    function setLimitValueU32(name, basePtr, limitOffset, fallbackValue = 0) {
      var limitValue = limits[name] ?? fallbackValue;
      HEAPU32[((basePtr + limitOffset) >>> 2) >>> 0] = limitValue;
    }
    function setLimitValueU64(name, basePtr, limitOffset, fallbackValue = 0) {
      var limitValue = limits[name] ?? fallbackValue;
      writeI53ToI64(basePtr + limitOffset, limitValue);
    }
    setLimitValueU32('maxTextureDimension1D', limitsOutPtr, 4);
    setLimitValueU32('maxTextureDimension2D', limitsOutPtr, 8);
    setLimitValueU32('maxTextureDimension3D', limitsOutPtr, 12);
    setLimitValueU32('maxTextureArrayLayers', limitsOutPtr, 16);
    setLimitValueU32('maxBindGroups', limitsOutPtr, 20);
    setLimitValueU32('maxBindGroupsPlusVertexBuffers', limitsOutPtr, 24);
    setLimitValueU32('maxBindingsPerBindGroup', limitsOutPtr, 28);
    setLimitValueU32(
      'maxDynamicUniformBuffersPerPipelineLayout',
      limitsOutPtr,
      32
    );
    setLimitValueU32(
      'maxDynamicStorageBuffersPerPipelineLayout',
      limitsOutPtr,
      36
    );
    setLimitValueU32('maxSampledTexturesPerShaderStage', limitsOutPtr, 40);
    setLimitValueU32('maxSamplersPerShaderStage', limitsOutPtr, 44);
    setLimitValueU32('maxStorageBuffersPerShaderStage', limitsOutPtr, 48);
    setLimitValueU32('maxStorageTexturesPerShaderStage', limitsOutPtr, 52);
    setLimitValueU32('maxUniformBuffersPerShaderStage', limitsOutPtr, 56);
    setLimitValueU32('minUniformBufferOffsetAlignment', limitsOutPtr, 80);
    setLimitValueU32('minStorageBufferOffsetAlignment', limitsOutPtr, 84);
    setLimitValueU64('maxUniformBufferBindingSize', limitsOutPtr, 64);
    setLimitValueU64('maxStorageBufferBindingSize', limitsOutPtr, 72);
    setLimitValueU32('maxVertexBuffers', limitsOutPtr, 88);
    setLimitValueU64('maxBufferSize', limitsOutPtr, 96);
    setLimitValueU32('maxVertexAttributes', limitsOutPtr, 104);
    setLimitValueU32('maxVertexBufferArrayStride', limitsOutPtr, 108);
    setLimitValueU32('maxInterStageShaderVariables', limitsOutPtr, 112);
    setLimitValueU32('maxColorAttachments', limitsOutPtr, 116);
    setLimitValueU32('maxColorAttachmentBytesPerSample', limitsOutPtr, 120);
    setLimitValueU32('maxComputeWorkgroupStorageSize', limitsOutPtr, 124);
    setLimitValueU32('maxComputeInvocationsPerWorkgroup', limitsOutPtr, 128);
    setLimitValueU32('maxComputeWorkgroupSizeX', limitsOutPtr, 132);
    setLimitValueU32('maxComputeWorkgroupSizeY', limitsOutPtr, 136);
    setLimitValueU32('maxComputeWorkgroupSizeZ', limitsOutPtr, 140);
    setLimitValueU32('maxComputeWorkgroupsPerDimension', limitsOutPtr, 144);
    setLimitValueU32('maxImmediateSize', limitsOutPtr, 148);
    if (nextInChainPtr !== 0) {
      var sType = HEAP32[((nextInChainPtr + 4) >>> 2) >>> 0];
      var compatibilityModeLimitsPtr = nextInChainPtr;
      setLimitValueU32(
        'maxStorageBuffersInVertexStage',
        compatibilityModeLimitsPtr,
        8,
        limits.maxStorageBuffersPerShaderStage
      );
      setLimitValueU32(
        'maxStorageBuffersInFragmentStage',
        compatibilityModeLimitsPtr,
        16,
        limits.maxStorageBuffersPerShaderStage
      );
      setLimitValueU32(
        'maxStorageTexturesInVertexStage',
        compatibilityModeLimitsPtr,
        12,
        limits.maxStorageTexturesPerShaderStage
      );
      setLimitValueU32(
        'maxStorageTexturesInFragmentStage',
        compatibilityModeLimitsPtr,
        20,
        limits.maxStorageTexturesPerShaderStage
      );
    }
  },
  fillAdapterInfoStruct: (info, infoStruct) => {
    HEAPU32[((infoStruct + 52) >>> 2) >>> 0] = info.subgroupMinSize;
    HEAPU32[((infoStruct + 56) >>> 2) >>> 0] = info.subgroupMaxSize;
    var strs = info.vendor + info.architecture + info.device + info.description;
    var strPtr = stringToNewUTF8(strs);
    var vendorLen = lengthBytesUTF8(info.vendor);
    WebGPU.setStringView(infoStruct + 4, strPtr, vendorLen);
    strPtr += vendorLen;
    var architectureLen = lengthBytesUTF8(info.architecture);
    WebGPU.setStringView(infoStruct + 12, strPtr, architectureLen);
    strPtr += architectureLen;
    var deviceLen = lengthBytesUTF8(info.device);
    WebGPU.setStringView(infoStruct + 20, strPtr, deviceLen);
    strPtr += deviceLen;
    var descriptionLen = lengthBytesUTF8(info.description);
    WebGPU.setStringView(infoStruct + 28, strPtr, descriptionLen);
    strPtr += descriptionLen;
    HEAP32[((infoStruct + 36) >>> 2) >>> 0] = 2;
    var adapterType = info.isFallbackAdapter ? 3 : 4;
    HEAP32[((infoStruct + 40) >>> 2) >>> 0] = adapterType;
    HEAPU32[((infoStruct + 44) >>> 2) >>> 0] = 0;
    HEAPU32[((infoStruct + 48) >>> 2) >>> 0] = 0;
  },
  AddressMode: [, 'clamp-to-edge', 'repeat', 'mirror-repeat'],
  BlendFactor: [
    ,
    'zero',
    'one',
    'src',
    'one-minus-src',
    'src-alpha',
    'one-minus-src-alpha',
    'dst',
    'one-minus-dst',
    'dst-alpha',
    'one-minus-dst-alpha',
    'src-alpha-saturated',
    'constant',
    'one-minus-constant',
    'src1',
    'one-minus-src1',
    'src1-alpha',
    'one-minus-src1-alpha',
  ],
  BlendOperation: [, 'add', 'subtract', 'reverse-subtract', 'min', 'max'],
  BufferBindingType: [, , 'uniform', 'storage', 'read-only-storage'],
  BufferMapState: [, 'unmapped', 'pending', 'mapped'],
  CompareFunction: [
    ,
    'never',
    'less',
    'equal',
    'less-equal',
    'greater',
    'not-equal',
    'greater-equal',
    'always',
  ],
  CompilationInfoRequestStatus: [, 'success', 'callback-cancelled'],
  ComponentSwizzle: [, '0', '1', 'r', 'g', 'b', 'a'],
  CompositeAlphaMode: [
    ,
    'opaque',
    'premultiplied',
    'unpremultiplied',
    'inherit',
  ],
  CullMode: [, 'none', 'front', 'back'],
  ErrorFilter: [, 'validation', 'out-of-memory', 'internal'],
  FeatureLevel: [, 'compatibility', 'core'],
  FeatureName: {
    1: 'core-features-and-limits',
    2: 'depth-clip-control',
    3: 'depth32float-stencil8',
    4: 'texture-compression-bc',
    5: 'texture-compression-bc-sliced-3d',
    6: 'texture-compression-etc2',
    7: 'texture-compression-astc',
    8: 'texture-compression-astc-sliced-3d',
    9: 'timestamp-query',
    10: 'indirect-first-instance',
    11: 'shader-f16',
    12: 'rg11b10ufloat-renderable',
    13: 'bgra8unorm-storage',
    14: 'float32-filterable',
    15: 'float32-blendable',
    16: 'clip-distances',
    17: 'dual-source-blending',
    18: 'subgroups',
    19: 'texture-formats-tier1',
    20: 'texture-formats-tier2',
    21: 'primitive-index',
    22: 'texture-component-swizzle',
    327692: 'chromium-experimental-unorm16-texture-formats',
    327729: 'chromium-experimental-multi-draw-indirect',
  },
  FilterMode: [, 'nearest', 'linear'],
  FrontFace: [, 'ccw', 'cw'],
  IndexFormat: [, 'uint16', 'uint32'],
  InstanceFeatureName: [
    ,
    'timed-wait-any',
    'shader-source-spirv',
    'multiple-devices-per-adapter',
  ],
  LoadOp: [, 'load', 'clear'],
  MipmapFilterMode: [, 'nearest', 'linear'],
  OptionalBool: ['false', 'true'],
  PowerPreference: [, 'low-power', 'high-performance'],
  PredefinedColorSpace: [, 'srgb', 'display-p3'],
  PrimitiveTopology: [
    ,
    'point-list',
    'line-list',
    'line-strip',
    'triangle-list',
    'triangle-strip',
  ],
  QueryType: [, 'occlusion', 'timestamp'],
  SamplerBindingType: [, , 'filtering', 'non-filtering', 'comparison'],
  Status: [, 'success', 'error'],
  StencilOperation: [
    ,
    'keep',
    'zero',
    'replace',
    'invert',
    'increment-clamp',
    'decrement-clamp',
    'increment-wrap',
    'decrement-wrap',
  ],
  StorageTextureAccess: [, , 'write-only', 'read-only', 'read-write'],
  StoreOp: [, 'store', 'discard'],
  SurfaceGetCurrentTextureStatus: [
    ,
    'success-optimal',
    'success-suboptimal',
    'timeout',
    'outdated',
    'lost',
    'error',
  ],
  TextureAspect: [, 'all', 'stencil-only', 'depth-only'],
  TextureDimension: [, '1d', '2d', '3d'],
  TextureFormat: [
    ,
    'r8unorm',
    'r8snorm',
    'r8uint',
    'r8sint',
    'r16unorm',
    'r16snorm',
    'r16uint',
    'r16sint',
    'r16float',
    'rg8unorm',
    'rg8snorm',
    'rg8uint',
    'rg8sint',
    'r32float',
    'r32uint',
    'r32sint',
    'rg16unorm',
    'rg16snorm',
    'rg16uint',
    'rg16sint',
    'rg16float',
    'rgba8unorm',
    'rgba8unorm-srgb',
    'rgba8snorm',
    'rgba8uint',
    'rgba8sint',
    'bgra8unorm',
    'bgra8unorm-srgb',
    'rgb10a2uint',
    'rgb10a2unorm',
    'rg11b10ufloat',
    'rgb9e5ufloat',
    'rg32float',
    'rg32uint',
    'rg32sint',
    'rgba16unorm',
    'rgba16snorm',
    'rgba16uint',
    'rgba16sint',
    'rgba16float',
    'rgba32float',
    'rgba32uint',
    'rgba32sint',
    'stencil8',
    'depth16unorm',
    'depth24plus',
    'depth24plus-stencil8',
    'depth32float',
    'depth32float-stencil8',
    'bc1-rgba-unorm',
    'bc1-rgba-unorm-srgb',
    'bc2-rgba-unorm',
    'bc2-rgba-unorm-srgb',
    'bc3-rgba-unorm',
    'bc3-rgba-unorm-srgb',
    'bc4-r-unorm',
    'bc4-r-snorm',
    'bc5-rg-unorm',
    'bc5-rg-snorm',
    'bc6h-rgb-ufloat',
    'bc6h-rgb-float',
    'bc7-rgba-unorm',
    'bc7-rgba-unorm-srgb',
    'etc2-rgb8unorm',
    'etc2-rgb8unorm-srgb',
    'etc2-rgb8a1unorm',
    'etc2-rgb8a1unorm-srgb',
    'etc2-rgba8unorm',
    'etc2-rgba8unorm-srgb',
    'eac-r11unorm',
    'eac-r11snorm',
    'eac-rg11unorm',
    'eac-rg11snorm',
    'astc-4x4-unorm',
    'astc-4x4-unorm-srgb',
    'astc-5x4-unorm',
    'astc-5x4-unorm-srgb',
    'astc-5x5-unorm',
    'astc-5x5-unorm-srgb',
    'astc-6x5-unorm',
    'astc-6x5-unorm-srgb',
    'astc-6x6-unorm',
    'astc-6x6-unorm-srgb',
    'astc-8x5-unorm',
    'astc-8x5-unorm-srgb',
    'astc-8x6-unorm',
    'astc-8x6-unorm-srgb',
    'astc-8x8-unorm',
    'astc-8x8-unorm-srgb',
    'astc-10x5-unorm',
    'astc-10x5-unorm-srgb',
    'astc-10x6-unorm',
    'astc-10x6-unorm-srgb',
    'astc-10x8-unorm',
    'astc-10x8-unorm-srgb',
    'astc-10x10-unorm',
    'astc-10x10-unorm-srgb',
    'astc-12x10-unorm',
    'astc-12x10-unorm-srgb',
    'astc-12x12-unorm',
    'astc-12x12-unorm-srgb',
  ],
  TextureSampleType: [
    ,
    ,
    'float',
    'unfilterable-float',
    'depth',
    'sint',
    'uint',
  ],
  TextureViewDimension: [, '1d', '2d', '2d-array', 'cube', 'cube-array', '3d'],
  ToneMappingMode: [, 'standard', 'extended'],
  VertexFormat: [
    ,
    'uint8',
    'uint8x2',
    'uint8x4',
    'sint8',
    'sint8x2',
    'sint8x4',
    'unorm8',
    'unorm8x2',
    'unorm8x4',
    'snorm8',
    'snorm8x2',
    'snorm8x4',
    'uint16',
    'uint16x2',
    'uint16x4',
    'sint16',
    'sint16x2',
    'sint16x4',
    'unorm16',
    'unorm16x2',
    'unorm16x4',
    'snorm16',
    'snorm16x2',
    'snorm16x4',
    'float16',
    'float16x2',
    'float16x4',
    'float32',
    'float32x2',
    'float32x3',
    'float32x4',
    'uint32',
    'uint32x2',
    'uint32x3',
    'uint32x4',
    'sint32',
    'sint32x2',
    'sint32x3',
    'sint32x4',
    'unorm10-10-10-2',
    'unorm8x4-bgra',
  ],
  VertexStepMode: [, 'vertex', 'instance'],
  WGSLLanguageFeatureName: [
    ,
    'readonly_and_readwrite_storage_textures',
    'packed_4x8_integer_dot_product',
    'unrestricted_pointer_parameters',
    'pointer_composite_access',
    'uniform_buffer_standard_layout',
    'subgroup_id',
    'texture_and_sampler_let',
    'subgroup_uniformity',
    'texture_formats_tier1',
  ],
};
var emwgpuStringToInt_DeviceLostReason = {
  undefined: 1,
  unknown: 1,
  destroyed: 2,
};
function _emwgpuAdapterRequestDevice(
  adapterPtr,
  futureId,
  deviceLostFutureId,
  devicePtr,
  queuePtr,
  descriptor
) {
  adapterPtr >>>= 0;
  futureId = bigintToI53Checked(futureId);
  deviceLostFutureId = bigintToI53Checked(deviceLostFutureId);
  devicePtr >>>= 0;
  queuePtr >>>= 0;
  descriptor >>>= 0;
  var adapter = WebGPU.getJsObject(adapterPtr);
  var desc = {};
  if (descriptor) {
    var requiredFeatureCount = HEAPU32[((descriptor + 12) >>> 2) >>> 0];
    if (requiredFeatureCount) {
      var requiredFeaturesPtr = HEAPU32[((descriptor + 16) >>> 2) >>> 0];
      desc['requiredFeatures'] = Array.from(
        HEAPU32.subarray(
          (requiredFeaturesPtr >>> 2) >>> 0,
          ((requiredFeaturesPtr + requiredFeatureCount * 4) >>> 2) >>> 0
        ),
        (feature) => WebGPU.FeatureName[feature]
      );
    }
    var limitsPtr = HEAPU32[((descriptor + 20) >>> 2) >>> 0];
    if (limitsPtr) {
      var nextInChainPtr = HEAPU32[(limitsPtr >>> 2) >>> 0];
      var requiredLimits = {};
      function setLimitU32IfDefined(
        name,
        basePtr,
        limitOffset,
        ignoreIfZero = false
      ) {
        var ptr = basePtr + limitOffset;
        var value = HEAPU32[(ptr >>> 2) >>> 0];
        if (value != 4294967295 && (!ignoreIfZero || value != 0)) {
          requiredLimits[name] = value;
        }
      }
      function setLimitU64IfDefined(name, basePtr, limitOffset) {
        var ptr = basePtr + limitOffset;
        var limitPart1 = HEAPU32[(ptr >>> 2) >>> 0];
        var limitPart2 = HEAPU32[((ptr + 4) >>> 2) >>> 0];
        if (limitPart1 != 4294967295 || limitPart2 != 4294967295) {
          requiredLimits[name] = readI53FromI64(ptr);
        }
      }
      setLimitU32IfDefined('maxTextureDimension1D', limitsPtr, 4);
      setLimitU32IfDefined('maxTextureDimension2D', limitsPtr, 8);
      setLimitU32IfDefined('maxTextureDimension3D', limitsPtr, 12);
      setLimitU32IfDefined('maxTextureArrayLayers', limitsPtr, 16);
      setLimitU32IfDefined('maxBindGroups', limitsPtr, 20);
      setLimitU32IfDefined('maxBindGroupsPlusVertexBuffers', limitsPtr, 24);
      setLimitU32IfDefined('maxBindingsPerBindGroup', limitsPtr, 28);
      setLimitU32IfDefined(
        'maxDynamicUniformBuffersPerPipelineLayout',
        limitsPtr,
        32
      );
      setLimitU32IfDefined(
        'maxDynamicStorageBuffersPerPipelineLayout',
        limitsPtr,
        36
      );
      setLimitU32IfDefined('maxSampledTexturesPerShaderStage', limitsPtr, 40);
      setLimitU32IfDefined('maxSamplersPerShaderStage', limitsPtr, 44);
      setLimitU32IfDefined('maxStorageBuffersPerShaderStage', limitsPtr, 48);
      setLimitU32IfDefined('maxStorageTexturesPerShaderStage', limitsPtr, 52);
      setLimitU32IfDefined('maxUniformBuffersPerShaderStage', limitsPtr, 56);
      setLimitU32IfDefined('minUniformBufferOffsetAlignment', limitsPtr, 80);
      setLimitU32IfDefined('minStorageBufferOffsetAlignment', limitsPtr, 84);
      setLimitU64IfDefined('maxUniformBufferBindingSize', limitsPtr, 64);
      setLimitU64IfDefined('maxStorageBufferBindingSize', limitsPtr, 72);
      setLimitU32IfDefined('maxVertexBuffers', limitsPtr, 88);
      setLimitU64IfDefined('maxBufferSize', limitsPtr, 96);
      setLimitU32IfDefined('maxVertexAttributes', limitsPtr, 104);
      setLimitU32IfDefined('maxVertexBufferArrayStride', limitsPtr, 108);
      setLimitU32IfDefined('maxInterStageShaderVariables', limitsPtr, 112);
      setLimitU32IfDefined('maxColorAttachments', limitsPtr, 116);
      setLimitU32IfDefined('maxColorAttachmentBytesPerSample', limitsPtr, 120);
      setLimitU32IfDefined('maxComputeWorkgroupStorageSize', limitsPtr, 124);
      setLimitU32IfDefined('maxComputeInvocationsPerWorkgroup', limitsPtr, 128);
      setLimitU32IfDefined('maxComputeWorkgroupSizeX', limitsPtr, 132);
      setLimitU32IfDefined('maxComputeWorkgroupSizeY', limitsPtr, 136);
      setLimitU32IfDefined('maxComputeWorkgroupSizeZ', limitsPtr, 140);
      setLimitU32IfDefined('maxComputeWorkgroupsPerDimension', limitsPtr, 144);
      setLimitU32IfDefined('maxImmediateSize', limitsPtr, 148, true);
      if (nextInChainPtr !== 0) {
        var sType = HEAP32[((nextInChainPtr + 4) >>> 2) >>> 0];
        var compatibilityModeLimitsPtr = nextInChainPtr;
        if ('maxStorageBuffersInVertexStage' in GPUSupportedLimits.prototype) {
          setLimitU32IfDefined(
            'maxStorageBuffersInVertexStage',
            compatibilityModeLimitsPtr,
            8
          );
          setLimitU32IfDefined(
            'maxStorageTexturesInVertexStage',
            compatibilityModeLimitsPtr,
            12
          );
          setLimitU32IfDefined(
            'maxStorageBuffersInFragmentStage',
            compatibilityModeLimitsPtr,
            16
          );
          setLimitU32IfDefined(
            'maxStorageTexturesInFragmentStage',
            compatibilityModeLimitsPtr,
            20
          );
        }
      }
      desc['requiredLimits'] = requiredLimits;
    }
    var defaultQueuePtr = HEAPU32[((descriptor + 24) >>> 2) >>> 0];
    if (defaultQueuePtr) {
      var defaultQueueDesc = {
        label: WebGPU.makeStringFromOptionalStringView(defaultQueuePtr + 4),
      };
      desc['defaultQueue'] = defaultQueueDesc;
    }
    desc['label'] = WebGPU.makeStringFromOptionalStringView(descriptor + 4);
  }
  WebGPU.Internals.futureInsert(
    futureId,
    adapter.requestDevice(desc).then(
      (device) => {
        callUserCallback(() => {
          WebGPU.Internals.jsObjectInsert(queuePtr, device.queue);
          WebGPU.Internals.jsObjectInsert(devicePtr, device);
          WebGPU.Internals.futureInsert(
            deviceLostFutureId,
            device.lost.then((info) => {
              callUserCallback(() => {
                device.onuncapturederror = (ev) => {};
                var sp = stackSave();
                var messagePtr = stringToUTF8OnStack(info.message);
                _emwgpuOnDeviceLostCompleted(
                  deviceLostFutureId,
                  emwgpuStringToInt_DeviceLostReason[info.reason],
                  messagePtr
                );
                stackRestore(sp);
              });
            })
          );
          device.onuncapturederror = (ev) => {
            var type = 5;
            if (ev.error instanceof GPUValidationError) type = 2;
            else if (ev.error instanceof GPUOutOfMemoryError) type = 3;
            else if (ev.error instanceof GPUInternalError) type = 4;
            var sp = stackSave();
            var messagePtr = stringToUTF8OnStack(ev.error.message);
            _emwgpuOnUncapturedError(devicePtr, type, messagePtr);
            stackRestore(sp);
          };
          _emwgpuOnRequestDeviceCompleted(futureId, 1, devicePtr, 0);
        });
      },
      (ex) => {
        callUserCallback(() => {
          var sp = stackSave();
          var messagePtr = stringToUTF8OnStack(ex.message);
          _emwgpuOnRequestDeviceCompleted(futureId, 3, devicePtr, messagePtr);
          if (deviceLostFutureId) {
            _emwgpuOnDeviceLostCompleted(deviceLostFutureId, 4, messagePtr);
          }
          stackRestore(sp);
        });
      }
    )
  );
}
function _emwgpuBufferDestroy(bufferPtr) {
  bufferPtr >>>= 0;
  var buffer = WebGPU.getJsObject(bufferPtr);
  var onUnmap = WebGPU.Internals.bufferOnUnmaps[bufferPtr];
  if (onUnmap) {
    for (var i = 0; i < onUnmap.length; ++i) {
      onUnmap[i]();
    }
    delete WebGPU.Internals.bufferOnUnmaps[bufferPtr];
  }
  buffer.destroy();
}
var warnOnce = (text) => {
  warnOnce.shown ||= {};
  if (!warnOnce.shown[text]) {
    warnOnce.shown[text] = 1;
    if (ENVIRONMENT_IS_NODE) text = 'warning: ' + text;
    err(text);
  }
};
function _emwgpuBufferGetConstMappedRange(bufferPtr, offset, size) {
  bufferPtr >>>= 0;
  offset >>>= 0;
  size >>>= 0;
  var buffer = WebGPU.getJsObject(bufferPtr);
  if (size == 4294967295) size = undefined;
  var mapped;
  try {
    mapped = buffer.getMappedRange(offset, size);
  } catch (ex) {
    return 0;
  }
  var data = _memalign(16, mapped.byteLength);
  HEAPU8.set(new Uint8Array(mapped), data >>> 0);
  WebGPU.Internals.bufferOnUnmaps[bufferPtr].push(() => _free(data));
  return data;
}
var _emwgpuBufferMapAsync = function (bufferPtr, futureId, mode, offset, size) {
  bufferPtr >>>= 0;
  futureId = bigintToI53Checked(futureId);
  mode = bigintToI53Checked(mode);
  offset >>>= 0;
  size >>>= 0;
  var buffer = WebGPU.getJsObject(bufferPtr);
  WebGPU.Internals.bufferOnUnmaps[bufferPtr] = [];
  if (size == 4294967295) size = undefined;
  WebGPU.Internals.futureInsert(
    futureId,
    buffer.mapAsync(mode, offset, size).then(
      () => {
        callUserCallback(() => {
          _emwgpuOnMapAsyncCompleted(futureId, 1, 0);
        });
      },
      (ex) => {
        callUserCallback(() => {
          var sp = stackSave();
          var messagePtr = stringToUTF8OnStack(ex.message);
          var status =
            ex.name === 'AbortError' ? 4 : ex.name === 'OperationError' ? 3 : 0;
          _emwgpuOnMapAsyncCompleted(futureId, status, messagePtr);
          delete WebGPU.Internals.bufferOnUnmaps[bufferPtr];
        });
      }
    )
  );
};
function _emwgpuBufferUnmap(bufferPtr) {
  bufferPtr >>>= 0;
  var buffer = WebGPU.getJsObject(bufferPtr);
  var onUnmap = WebGPU.Internals.bufferOnUnmaps[bufferPtr];
  if (!onUnmap) {
    return;
  }
  for (var i = 0; i < onUnmap.length; ++i) {
    onUnmap[i]();
  }
  delete WebGPU.Internals.bufferOnUnmaps[bufferPtr];
  buffer.unmap();
}
function _emwgpuDelete(ptr) {
  ptr >>>= 0;
  delete WebGPU.Internals.jsObjects[ptr];
}
function _emwgpuDeviceCreateBuffer(devicePtr, descriptor, bufferPtr) {
  devicePtr >>>= 0;
  descriptor >>>= 0;
  bufferPtr >>>= 0;
  var mappedAtCreation = !!HEAPU32[((descriptor + 32) >>> 2) >>> 0];
  var desc = {
    label: WebGPU.makeStringFromOptionalStringView(descriptor + 4),
    usage: HEAPU32[((descriptor + 16) >>> 2) >>> 0],
    size: readI53FromI64(descriptor + 24),
    mappedAtCreation,
  };
  var device = WebGPU.getJsObject(devicePtr);
  var buffer;
  try {
    buffer = device.createBuffer(desc);
  } catch (ex) {
    return false;
  }
  WebGPU.Internals.jsObjectInsert(bufferPtr, buffer);
  if (mappedAtCreation) {
    WebGPU.Internals.bufferOnUnmaps[bufferPtr] = [];
  }
  return true;
}
function _emwgpuDeviceCreateShaderModule(
  devicePtr,
  descriptor,
  shaderModulePtr
) {
  devicePtr >>>= 0;
  descriptor >>>= 0;
  shaderModulePtr >>>= 0;
  var nextInChainPtr = HEAPU32[(descriptor >>> 2) >>> 0];
  var sType = HEAP32[((nextInChainPtr + 4) >>> 2) >>> 0];
  var desc = {
    label: WebGPU.makeStringFromOptionalStringView(descriptor + 4),
    code: '',
  };
  switch (sType) {
    case 2: {
      desc['code'] = WebGPU.makeStringFromStringView(nextInChainPtr + 8);
      break;
    }
  }
  var device = WebGPU.getJsObject(devicePtr);
  WebGPU.Internals.jsObjectInsert(
    shaderModulePtr,
    device.createShaderModule(desc)
  );
}
var _emwgpuDeviceDestroy = (devicePtr) => {
  const device = WebGPU.getJsObject(devicePtr);
  device.onuncapturederror = null;
  device.destroy();
};
function _emwgpuInstanceRequestAdapter(
  instancePtr,
  futureId,
  options,
  adapterPtr
) {
  instancePtr >>>= 0;
  futureId = bigintToI53Checked(futureId);
  options >>>= 0;
  adapterPtr >>>= 0;
  var opts;
  if (options) {
    opts = {
      featureLevel: WebGPU.FeatureLevel[HEAP32[((options + 4) >>> 2) >>> 0]],
      powerPreference:
        WebGPU.PowerPreference[HEAP32[((options + 8) >>> 2) >>> 0]],
      forceFallbackAdapter: !!HEAPU32[((options + 12) >>> 2) >>> 0],
    };
    var nextInChainPtr = HEAPU32[(options >>> 2) >>> 0];
    if (nextInChainPtr !== 0) {
      var sType = HEAP32[((nextInChainPtr + 4) >>> 2) >>> 0];
      var webxrOptions = nextInChainPtr;
      opts.xrCompatible = !!HEAPU32[((webxrOptions + 8) >>> 2) >>> 0];
    }
  }
  if (!('gpu' in navigator)) {
    var sp = stackSave();
    var messagePtr = stringToUTF8OnStack(
      'WebGPU not available on this browser (navigator.gpu is not available)'
    );
    _emwgpuOnRequestAdapterCompleted(futureId, 3, adapterPtr, messagePtr);
    stackRestore(sp);
    return;
  }
  WebGPU.Internals.futureInsert(
    futureId,
    navigator.gpu.requestAdapter(opts).then(
      (adapter) => {
        callUserCallback(() => {
          if (adapter) {
            WebGPU.Internals.jsObjectInsert(adapterPtr, adapter);
            _emwgpuOnRequestAdapterCompleted(futureId, 1, adapterPtr, 0);
          } else {
            var sp = stackSave();
            var messagePtr = stringToUTF8OnStack(
              'WebGPU not available on this browser (requestAdapter returned null)'
            );
            _emwgpuOnRequestAdapterCompleted(
              futureId,
              3,
              adapterPtr,
              messagePtr
            );
            stackRestore(sp);
          }
        });
      },
      (ex) => {
        callUserCallback(() => {
          var sp = stackSave();
          var messagePtr = stringToUTF8OnStack(ex.message);
          _emwgpuOnRequestAdapterCompleted(futureId, 4, adapterPtr, messagePtr);
          stackRestore(sp);
        });
      }
    )
  );
}
var _emwgpuQueueOnSubmittedWorkDone = function (queuePtr, futureId) {
  queuePtr >>>= 0;
  futureId = bigintToI53Checked(futureId);
  var queue = WebGPU.getJsObject(queuePtr);
  WebGPU.Internals.futureInsert(
    futureId,
    queue.onSubmittedWorkDone().then(() => {
      callUserCallback(() => {
        _emwgpuOnWorkDoneCompleted(futureId, 1);
      });
    })
  );
};
var _emwgpuWaitAny = function (futurePtr, futureCount, timeoutMSPtr) {
  futurePtr >>>= 0;
  futureCount >>>= 0;
  timeoutMSPtr >>>= 0;
  return Asyncify.handleAsync(async () => {
    var promises = [];
    if (timeoutMSPtr) {
      var timeoutMS = HEAP32[(timeoutMSPtr >>> 2) >>> 0];
      promises.length = futureCount + 1;
      promises[futureCount] = new Promise((resolve) =>
        setTimeout(resolve, timeoutMS, 0)
      );
    } else {
      promises.length = futureCount;
    }
    for (var i = 0; i < futureCount; ++i) {
      var futureId = readI53FromI64(futurePtr + i * 8);
      if (!(futureId in WebGPU.Internals.futures)) {
        return futureId;
      }
      promises[i] = WebGPU.Internals.futures[futureId];
    }
    const firstResolvedFuture = await Promise.race(promises);
    delete WebGPU.Internals.futures[firstResolvedFuture];
    return firstResolvedFuture;
  });
};
_emwgpuWaitAny.isAsync = true;
var ENV = {};
var getExecutableName = () => thisProgram || './this.program';
var getEnvStrings = () => {
  if (!getEnvStrings.strings) {
    var lang =
      ((typeof navigator == 'object' && navigator.language) || 'C').replace(
        '-',
        '_'
      ) + '.UTF-8';
    var env = {
      USER: 'web_user',
      LOGNAME: 'web_user',
      PATH: '/',
      PWD: '/',
      HOME: '/home/web_user',
      LANG: lang,
      _: getExecutableName(),
    };
    for (var x in ENV) {
      if (ENV[x] === undefined) delete env[x];
      else env[x] = ENV[x];
    }
    var strings = [];
    for (var x in env) {
      strings.push(\`\${x}=\${env[x]}\`);
    }
    getEnvStrings.strings = strings;
  }
  return getEnvStrings.strings;
};
function _environ_get(__environ, environ_buf) {
  __environ >>>= 0;
  environ_buf >>>= 0;
  var bufSize = 0;
  var envp = 0;
  for (var string of getEnvStrings()) {
    var ptr = environ_buf + bufSize;
    HEAPU32[((__environ + envp) >>> 2) >>> 0] = ptr;
    bufSize += stringToUTF8(string, ptr, Infinity) + 1;
    envp += 4;
  }
  return 0;
}
function _environ_sizes_get(penviron_count, penviron_buf_size) {
  penviron_count >>>= 0;
  penviron_buf_size >>>= 0;
  var strings = getEnvStrings();
  HEAPU32[(penviron_count >>> 2) >>> 0] = strings.length;
  var bufSize = 0;
  for (var string of strings) {
    bufSize += lengthBytesUTF8(string) + 1;
  }
  HEAPU32[(penviron_buf_size >>> 2) >>> 0] = bufSize;
  return 0;
}
function _fd_close(fd) {
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    FS.close(stream);
    return 0;
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
}
var doReadv = (stream, iov, iovcnt, offset) => {
  var ret = 0;
  for (var i = 0; i < iovcnt; i++) {
    var ptr = HEAPU32[(iov >>> 2) >>> 0];
    var len = HEAPU32[((iov + 4) >>> 2) >>> 0];
    iov += 8;
    var curr = FS.read(stream, HEAP8, ptr, len, offset);
    if (curr < 0) return -1;
    ret += curr;
    if (curr < len) break;
    if (typeof offset != 'undefined') {
      offset += curr;
    }
  }
  return ret;
};
function _fd_read(fd, iov, iovcnt, pnum) {
  iov >>>= 0;
  iovcnt >>>= 0;
  pnum >>>= 0;
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    var num = doReadv(stream, iov, iovcnt);
    HEAPU32[(pnum >>> 2) >>> 0] = num;
    return 0;
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
}
function _fd_seek(fd, offset, whence, newOffset) {
  offset = bigintToI53Checked(offset);
  newOffset >>>= 0;
  try {
    if (isNaN(offset)) return 61;
    var stream = SYSCALLS.getStreamFromFD(fd);
    FS.llseek(stream, offset, whence);
    HEAP64[(newOffset >>> 3) >>> 0] = BigInt(stream.position);
    if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null;
    return 0;
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
}
var doWritev = (stream, iov, iovcnt, offset) => {
  var ret = 0;
  for (var i = 0; i < iovcnt; i++) {
    var ptr = HEAPU32[(iov >>> 2) >>> 0];
    var len = HEAPU32[((iov + 4) >>> 2) >>> 0];
    iov += 8;
    var curr = FS.write(stream, HEAP8, ptr, len, offset);
    if (curr < 0) return -1;
    ret += curr;
    if (curr < len) {
      break;
    }
    if (typeof offset != 'undefined') {
      offset += curr;
    }
  }
  return ret;
};
function _fd_write(fd, iov, iovcnt, pnum) {
  iov >>>= 0;
  iovcnt >>>= 0;
  pnum >>>= 0;
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    var num = doWritev(stream, iov, iovcnt);
    HEAPU32[(pnum >>> 2) >>> 0] = num;
    return 0;
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
}
function _random_get(buffer, size) {
  buffer >>>= 0;
  size >>>= 0;
  try {
    randomFill(HEAPU8.subarray(buffer >>> 0, (buffer + size) >>> 0));
    return 0;
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
}
var emwgpuStringToInt_FeatureName = {
  'core-features-and-limits': 1,
  'depth-clip-control': 2,
  'depth32float-stencil8': 3,
  'texture-compression-bc': 4,
  'texture-compression-bc-sliced-3d': 5,
  'texture-compression-etc2': 6,
  'texture-compression-astc': 7,
  'texture-compression-astc-sliced-3d': 8,
  'timestamp-query': 9,
  'indirect-first-instance': 10,
  'shader-f16': 11,
  'rg11b10ufloat-renderable': 12,
  'bgra8unorm-storage': 13,
  'float32-filterable': 14,
  'float32-blendable': 15,
  'clip-distances': 16,
  'dual-source-blending': 17,
  subgroups: 18,
  'texture-formats-tier1': 19,
  'texture-formats-tier2': 20,
  'primitive-index': 21,
  'texture-component-swizzle': 22,
  'chromium-experimental-unorm16-texture-formats': 327692,
  'chromium-experimental-multi-draw-indirect': 327729,
};
function _wgpuAdapterGetFeatures(adapterPtr, supportedFeatures) {
  adapterPtr >>>= 0;
  supportedFeatures >>>= 0;
  var adapter = WebGPU.getJsObject(adapterPtr);
  var featuresPtr = _malloc(adapter.features.size * 4);
  var offset = 0;
  var numFeatures = 0;
  for (const feature of adapter.features) {
    var featureEnumValue = emwgpuStringToInt_FeatureName[feature];
    if (featureEnumValue >= 0) {
      HEAP32[((featuresPtr + offset) >>> 2) >>> 0] = featureEnumValue;
      offset += 4;
      numFeatures++;
    }
  }
  HEAPU32[((supportedFeatures + 4) >>> 2) >>> 0] = featuresPtr;
  HEAPU32[(supportedFeatures >>> 2) >>> 0] = numFeatures;
}
function _wgpuAdapterGetInfo(adapterPtr, info) {
  adapterPtr >>>= 0;
  info >>>= 0;
  var adapter = WebGPU.getJsObject(adapterPtr);
  WebGPU.fillAdapterInfoStruct(adapter.info, info);
  return 1;
}
function _wgpuAdapterGetLimits(adapterPtr, limitsOutPtr) {
  adapterPtr >>>= 0;
  limitsOutPtr >>>= 0;
  var adapter = WebGPU.getJsObject(adapterPtr);
  WebGPU.fillLimitStruct(adapter.limits, limitsOutPtr);
  return 1;
}
function _wgpuAdapterHasFeature(adapterPtr, featureEnumValue) {
  adapterPtr >>>= 0;
  var adapter = WebGPU.getJsObject(adapterPtr);
  return adapter.features.has(WebGPU.FeatureName[featureEnumValue]);
}
var _wgpuBufferGetSize = function (bufferPtr) {
  bufferPtr >>>= 0;
  var ret = (() => {
    var buffer = WebGPU.getJsObject(bufferPtr);
    return buffer.size;
  })();
  return BigInt(ret);
};
function _wgpuCommandEncoderBeginComputePass(encoderPtr, descriptor) {
  encoderPtr >>>= 0;
  descriptor >>>= 0;
  var desc;
  if (descriptor) {
    desc = {
      label: WebGPU.makeStringFromOptionalStringView(descriptor + 4),
      timestampWrites: WebGPU.makePassTimestampWrites(
        HEAPU32[((descriptor + 12) >>> 2) >>> 0]
      ),
    };
  }
  var commandEncoder = WebGPU.getJsObject(encoderPtr);
  var ptr = _emwgpuCreateComputePassEncoder(0);
  WebGPU.Internals.jsObjectInsert(ptr, commandEncoder.beginComputePass(desc));
  return ptr;
}
function _wgpuCommandEncoderCopyBufferToBuffer(
  encoderPtr,
  srcPtr,
  srcOffset,
  dstPtr,
  dstOffset,
  size
) {
  encoderPtr >>>= 0;
  srcPtr >>>= 0;
  srcOffset = bigintToI53Checked(srcOffset);
  dstPtr >>>= 0;
  dstOffset = bigintToI53Checked(dstOffset);
  size = bigintToI53Checked(size);
  var commandEncoder = WebGPU.getJsObject(encoderPtr);
  var src = WebGPU.getJsObject(srcPtr);
  var dst = WebGPU.getJsObject(dstPtr);
  commandEncoder.copyBufferToBuffer(src, srcOffset, dst, dstOffset, size);
}
function _wgpuCommandEncoderFinish(encoderPtr, descriptor) {
  encoderPtr >>>= 0;
  descriptor >>>= 0;
  var commandEncoder = WebGPU.getJsObject(encoderPtr);
  var ptr = _emwgpuCreateCommandBuffer(0);
  WebGPU.Internals.jsObjectInsert(ptr, commandEncoder.finish());
  return ptr;
}
function _wgpuComputePassEncoderDispatchWorkgroups(passPtr, x, y, z) {
  passPtr >>>= 0;
  var pass = WebGPU.getJsObject(passPtr);
  pass.dispatchWorkgroups(x, y, z);
}
function _wgpuComputePassEncoderEnd(passPtr) {
  passPtr >>>= 0;
  var pass = WebGPU.getJsObject(passPtr);
  pass.end();
}
function _wgpuComputePassEncoderSetBindGroup(
  passPtr,
  groupIndex,
  groupPtr,
  dynamicOffsetCount,
  dynamicOffsetsPtr
) {
  passPtr >>>= 0;
  groupPtr >>>= 0;
  dynamicOffsetCount >>>= 0;
  dynamicOffsetsPtr >>>= 0;
  var pass = WebGPU.getJsObject(passPtr);
  var group = WebGPU.getJsObject(groupPtr);
  if (dynamicOffsetCount == 0) {
    pass.setBindGroup(groupIndex, group);
  } else {
    pass.setBindGroup(
      groupIndex,
      group,
      HEAPU32,
      dynamicOffsetsPtr >>> 2,
      dynamicOffsetCount
    );
  }
}
function _wgpuComputePassEncoderSetPipeline(passPtr, pipelinePtr) {
  passPtr >>>= 0;
  pipelinePtr >>>= 0;
  var pass = WebGPU.getJsObject(passPtr);
  var pipeline = WebGPU.getJsObject(pipelinePtr);
  pass.setPipeline(pipeline);
}
function _wgpuComputePipelineGetBindGroupLayout(pipelinePtr, groupIndex) {
  pipelinePtr >>>= 0;
  var pipeline = WebGPU.getJsObject(pipelinePtr);
  var ptr = _emwgpuCreateBindGroupLayout(0);
  WebGPU.Internals.jsObjectInsert(ptr, pipeline.getBindGroupLayout(groupIndex));
  return ptr;
}
var _wgpuDeviceCreateBindGroup = function (devicePtr, descriptor) {
  devicePtr >>>= 0;
  descriptor >>>= 0;
  function makeEntry(entryPtr) {
    var bufferPtr = HEAPU32[((entryPtr + 8) >>> 2) >>> 0];
    var samplerPtr = HEAPU32[((entryPtr + 32) >>> 2) >>> 0];
    var textureViewPtr = HEAPU32[((entryPtr + 36) >>> 2) >>> 0];
    var externalTexturePtr = 0;
    WebGPU.iterateExtensions(entryPtr, {
      327681: (ptr) => {
        externalTexturePtr = HEAPU32[((ptr + 8) >>> 2) >>> 0];
      },
    });
    var resource;
    if (bufferPtr) {
      var size = readI53FromI64(entryPtr + 24);
      if (size == -1) size = undefined;
      resource = {
        buffer: WebGPU.getJsObject(bufferPtr),
        offset: readI53FromI64(entryPtr + 16),
        size,
      };
    } else {
      resource = WebGPU.getJsObject(
        samplerPtr || textureViewPtr || externalTexturePtr
      );
    }
    return { binding: HEAPU32[((entryPtr + 4) >>> 2) >>> 0], resource };
  }
  function makeEntries(count, entriesPtrs) {
    var entries = [];
    for (var i = 0; i < count; ++i) {
      entries.push(makeEntry(entriesPtrs + 40 * i));
    }
    return entries;
  }
  var desc = {
    label: WebGPU.makeStringFromOptionalStringView(descriptor + 4),
    layout: WebGPU.getJsObject(HEAPU32[((descriptor + 12) >>> 2) >>> 0]),
    entries: makeEntries(
      HEAPU32[((descriptor + 16) >>> 2) >>> 0],
      HEAPU32[((descriptor + 20) >>> 2) >>> 0]
    ),
  };
  var device = WebGPU.getJsObject(devicePtr);
  var ptr = _emwgpuCreateBindGroup(0);
  WebGPU.Internals.jsObjectInsert(ptr, device.createBindGroup(desc));
  return ptr;
};
function _wgpuDeviceCreateCommandEncoder(devicePtr, descriptor) {
  devicePtr >>>= 0;
  descriptor >>>= 0;
  var desc;
  if (descriptor) {
    desc = { label: WebGPU.makeStringFromOptionalStringView(descriptor + 4) };
  }
  var device = WebGPU.getJsObject(devicePtr);
  var ptr = _emwgpuCreateCommandEncoder(0);
  WebGPU.Internals.jsObjectInsert(ptr, device.createCommandEncoder(desc));
  return ptr;
}
function _wgpuDeviceCreateComputePipeline(devicePtr, descriptor) {
  devicePtr >>>= 0;
  descriptor >>>= 0;
  var desc = WebGPU.makeComputePipelineDesc(descriptor);
  var device = WebGPU.getJsObject(devicePtr);
  var ptr = _emwgpuCreateComputePipeline(0);
  WebGPU.Internals.jsObjectInsert(ptr, device.createComputePipeline(desc));
  return ptr;
}
var _wgpuQueueSubmit = function (queuePtr, commandCount, commands) {
  queuePtr >>>= 0;
  commandCount >>>= 0;
  commands >>>= 0;
  var queue = WebGPU.getJsObject(queuePtr);
  var cmds = Array.from(
    HEAP32.subarray(
      (commands >>> 2) >>> 0,
      ((commands + commandCount * 4) >>> 2) >>> 0
    ),
    (id) => WebGPU.getJsObject(id)
  );
  queue.submit(cmds);
};
function _wgpuQueueWriteBuffer(queuePtr, bufferPtr, bufferOffset, data, size) {
  queuePtr >>>= 0;
  bufferPtr >>>= 0;
  bufferOffset = bigintToI53Checked(bufferOffset);
  data >>>= 0;
  size >>>= 0;
  var queue = WebGPU.getJsObject(queuePtr);
  var buffer = WebGPU.getJsObject(bufferPtr);
  var subarray = HEAPU8.subarray(data >>> 0, (data + size) >>> 0);
  queue.writeBuffer(buffer, bufferOffset, subarray, 0, size);
}
var Asyncify = {
  instrumentWasmImports(imports) {
    var importPattern = /^(invoke_.*|__asyncjs__.*)$/;
    for (let [x, original] of Object.entries(imports)) {
      if (typeof original == 'function') {
        let isAsyncifyImport = original.isAsync || importPattern.test(x);
        if (isAsyncifyImport) {
          imports[x] = original = new WebAssembly.Suspending(original);
        }
      }
    }
  },
  instrumentFunction(original) {
    var wrapper = (...args) => original(...args);
    return wrapper;
  },
  instrumentWasmExports(exports) {
    var exportPattern = /^(wllama_start|wllama_action|main|__main_argc_argv)$/;
    Asyncify.asyncExports = new Set();
    var ret = {};
    for (let [x, original] of Object.entries(exports)) {
      if (typeof original == 'function') {
        let isAsyncifyExport = exportPattern.test(x);
        if (isAsyncifyExport) {
          Asyncify.asyncExports.add(original);
          original = Asyncify.makeAsyncFunction(original);
        }
        var wrapper = Asyncify.instrumentFunction(original);
        ret[x] = wrapper;
      } else {
        ret[x] = original;
      }
    }
    return ret;
  },
  asyncExports: null,
  isAsyncExport(func) {
    return Asyncify.asyncExports?.has(func);
  },
  handleAsync: async (startAsync) => {
    try {
      return await startAsync();
    } finally {
    }
  },
  handleSleep: (startAsync) =>
    Asyncify.handleAsync(() => new Promise(startAsync)),
  makeAsyncFunction(original) {
    return WebAssembly.promising(original);
  },
};
var getCFunc = (ident) => {
  var func = Module['_' + ident];
  return func;
};
var writeArrayToMemory = (array, buffer) => {
  HEAP8.set(array, buffer >>> 0);
};
var ccall = (ident, returnType, argTypes, args, opts) => {
  var toC = {
    string: (str) => {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) {
        ret = stringToUTF8OnStack(str);
      }
      return ret;
    },
    array: (arr) => {
      var ret = stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    },
  };
  function convertReturnValue(ret) {
    if (returnType === 'string') {
      return UTF8ToString(ret);
    }
    if (returnType === 'pointer') return ret >>> 0;
    if (returnType === 'boolean') return Boolean(ret);
    return ret;
  }
  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  var ret = func(...cArgs);
  function onDone(ret) {
    if (stack !== 0) stackRestore(stack);
    return convertReturnValue(ret);
  }
  var asyncMode = opts?.async;
  if (asyncMode) return ret.then(onDone);
  ret = onDone(ret);
  return ret;
};
var cwrap = (ident, returnType, argTypes, opts) => {
  var numericArgs =
    !argTypes ||
    argTypes.every((type) => type === 'number' || type === 'boolean');
  var numericRet = returnType !== 'string';
  if (numericRet && numericArgs && !opts) {
    return getCFunc(ident);
  }
  return (...args) => ccall(ident, returnType, argTypes, args, opts);
};
var FS_createPath = (...args) => FS.createPath(...args);
var FS_unlink = (...args) => FS.unlink(...args);
var FS_createLazyFile = (...args) => FS.createLazyFile(...args);
var FS_createDevice = (...args) => FS.createDevice(...args);
FS.createPreloadedFile = FS_createPreloadedFile;
FS.preloadFile = FS_preloadFile;
FS.staticInit();
{
  initMemory();
  if (Module['noExitRuntime']) noExitRuntime = Module['noExitRuntime'];
  if (Module['preloadPlugins']) preloadPlugins = Module['preloadPlugins'];
  if (Module['print']) out = Module['print'];
  if (Module['printErr']) err = Module['printErr'];
  if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];
  if (Module['arguments']) arguments_ = Module['arguments'];
  if (Module['thisProgram']) thisProgram = Module['thisProgram'];
  if (Module['preInit']) {
    if (typeof Module['preInit'] == 'function')
      Module['preInit'] = [Module['preInit']];
    while (Module['preInit'].length > 0) {
      Module['preInit'].shift()();
    }
  }
}
Module['mmapAlloc'] = mmapAlloc;
Module['addRunDependency'] = addRunDependency;
Module['removeRunDependency'] = removeRunDependency;
Module['ccall'] = ccall;
Module['cwrap'] = cwrap;
Module['FS_preloadFile'] = FS_preloadFile;
Module['FS_unlink'] = FS_unlink;
Module['FS_createPath'] = FS_createPath;
Module['FS_createDevice'] = FS_createDevice;
Module['FS'] = FS;
Module['FS_createDataFile'] = FS_createDataFile;
Module['FS_createLazyFile'] = FS_createLazyFile;
Module['MEMFS'] = MEMFS;
function ggml_webgpu_is_ios_browser() {
  const ua = navigator.userAgent;
  return ua.includes('iPhone') || ua.includes('iPad') ? 1 : 0;
}
ggml_webgpu_is_ios_browser.sig = 'i';
var _wllama_malloc,
  _wllama_start,
  _wllama_action,
  _wllama_exit,
  _wllama_debug,
  _main,
  _malloc,
  _free,
  _emwgpuCreateBindGroup,
  _emwgpuCreateBindGroupLayout,
  _emwgpuCreateCommandBuffer,
  _emwgpuCreateCommandEncoder,
  _emwgpuCreateComputePassEncoder,
  _emwgpuCreateComputePipeline,
  _emwgpuCreateExternalTexture,
  _emwgpuCreatePipelineLayout,
  _emwgpuCreateQuerySet,
  _emwgpuCreateRenderBundle,
  _emwgpuCreateRenderBundleEncoder,
  _emwgpuCreateRenderPassEncoder,
  _emwgpuCreateRenderPipeline,
  _emwgpuCreateSampler,
  _emwgpuCreateSurface,
  _emwgpuCreateTexture,
  _emwgpuCreateTextureView,
  _emwgpuCreateAdapter,
  _emwgpuCreateBuffer,
  _emwgpuCreateDevice,
  _emwgpuCreateQueue,
  _emwgpuCreateShaderModule,
  _emwgpuOnDeviceLostCompleted,
  _emwgpuOnMapAsyncCompleted,
  _emwgpuOnRequestAdapterCompleted,
  _emwgpuOnRequestDeviceCompleted,
  _emwgpuOnWorkDoneCompleted,
  _emwgpuOnUncapturedError,
  _emscripten_builtin_memalign,
  __emscripten_timeout,
  _memalign,
  ___trap,
  __emscripten_stack_restore,
  __emscripten_stack_alloc,
  _emscripten_stack_get_current,
  __indirect_function_table,
  wasmTable;
function assignWasmExports(wasmExports) {
  _wllama_malloc = Module['_wllama_malloc'] = wasmExports['wllama_malloc'];
  _wllama_start = Module['_wllama_start'] = wasmExports['wllama_start'];
  _wllama_action = Module['_wllama_action'] = wasmExports['wllama_action'];
  _wllama_exit = Module['_wllama_exit'] = wasmExports['wllama_exit'];
  _wllama_debug = Module['_wllama_debug'] = wasmExports['wllama_debug'];
  _main = Module['_main'] = wasmExports['main'];
  _malloc = wasmExports['malloc'];
  _free = wasmExports['free'];
  _emwgpuCreateBindGroup = wasmExports['emwgpuCreateBindGroup'];
  _emwgpuCreateBindGroupLayout = wasmExports['emwgpuCreateBindGroupLayout'];
  _emwgpuCreateCommandBuffer = wasmExports['emwgpuCreateCommandBuffer'];
  _emwgpuCreateCommandEncoder = wasmExports['emwgpuCreateCommandEncoder'];
  _emwgpuCreateComputePassEncoder =
    wasmExports['emwgpuCreateComputePassEncoder'];
  _emwgpuCreateComputePipeline = wasmExports['emwgpuCreateComputePipeline'];
  _emwgpuCreateExternalTexture = wasmExports['emwgpuCreateExternalTexture'];
  _emwgpuCreatePipelineLayout = wasmExports['emwgpuCreatePipelineLayout'];
  _emwgpuCreateQuerySet = wasmExports['emwgpuCreateQuerySet'];
  _emwgpuCreateRenderBundle = wasmExports['emwgpuCreateRenderBundle'];
  _emwgpuCreateRenderBundleEncoder =
    wasmExports['emwgpuCreateRenderBundleEncoder'];
  _emwgpuCreateRenderPassEncoder = wasmExports['emwgpuCreateRenderPassEncoder'];
  _emwgpuCreateRenderPipeline = wasmExports['emwgpuCreateRenderPipeline'];
  _emwgpuCreateSampler = wasmExports['emwgpuCreateSampler'];
  _emwgpuCreateSurface = wasmExports['emwgpuCreateSurface'];
  _emwgpuCreateTexture = wasmExports['emwgpuCreateTexture'];
  _emwgpuCreateTextureView = wasmExports['emwgpuCreateTextureView'];
  _emwgpuCreateAdapter = wasmExports['emwgpuCreateAdapter'];
  _emwgpuCreateBuffer = wasmExports['emwgpuCreateBuffer'];
  _emwgpuCreateDevice = wasmExports['emwgpuCreateDevice'];
  _emwgpuCreateQueue = wasmExports['emwgpuCreateQueue'];
  _emwgpuCreateShaderModule = wasmExports['emwgpuCreateShaderModule'];
  _emwgpuOnDeviceLostCompleted = wasmExports['emwgpuOnDeviceLostCompleted'];
  _emwgpuOnMapAsyncCompleted = wasmExports['emwgpuOnMapAsyncCompleted'];
  _emwgpuOnRequestAdapterCompleted =
    wasmExports['emwgpuOnRequestAdapterCompleted'];
  _emwgpuOnRequestDeviceCompleted =
    wasmExports['emwgpuOnRequestDeviceCompleted'];
  _emwgpuOnWorkDoneCompleted = wasmExports['emwgpuOnWorkDoneCompleted'];
  _emwgpuOnUncapturedError = wasmExports['emwgpuOnUncapturedError'];
  _emscripten_builtin_memalign = wasmExports['emscripten_builtin_memalign'];
  __emscripten_timeout = wasmExports['_emscripten_timeout'];
  _memalign = wasmExports['memalign'];
  ___trap = wasmExports['__trap'];
  __emscripten_stack_restore = wasmExports['_emscripten_stack_restore'];
  __emscripten_stack_alloc = wasmExports['_emscripten_stack_alloc'];
  _emscripten_stack_get_current = wasmExports['emscripten_stack_get_current'];
  __indirect_function_table = wasmTable =
    wasmExports['__indirect_function_table'];
}
var wasmImports = {
  __syscall_fcntl64: ___syscall_fcntl64,
  __syscall_ioctl: ___syscall_ioctl,
  __syscall_openat: ___syscall_openat,
  _abort_js: __abort_js,
  _emscripten_runtime_keepalive_clear: __emscripten_runtime_keepalive_clear,
  _mmap_js: __mmap_js,
  _munmap_js: __munmap_js,
  _setitimer_js: __setitimer_js,
  _tzset_js: __tzset_js,
  clock_time_get: _clock_time_get,
  emscripten_date_now: _emscripten_date_now,
  emscripten_get_heap_max: _emscripten_get_heap_max,
  emscripten_has_asyncify: _emscripten_has_asyncify,
  emscripten_resize_heap: _emscripten_resize_heap,
  emwgpuAdapterRequestDevice: _emwgpuAdapterRequestDevice,
  emwgpuBufferDestroy: _emwgpuBufferDestroy,
  emwgpuBufferGetConstMappedRange: _emwgpuBufferGetConstMappedRange,
  emwgpuBufferMapAsync: _emwgpuBufferMapAsync,
  emwgpuBufferUnmap: _emwgpuBufferUnmap,
  emwgpuDelete: _emwgpuDelete,
  emwgpuDeviceCreateBuffer: _emwgpuDeviceCreateBuffer,
  emwgpuDeviceCreateShaderModule: _emwgpuDeviceCreateShaderModule,
  emwgpuDeviceDestroy: _emwgpuDeviceDestroy,
  emwgpuInstanceRequestAdapter: _emwgpuInstanceRequestAdapter,
  emwgpuQueueOnSubmittedWorkDone: _emwgpuQueueOnSubmittedWorkDone,
  emwgpuWaitAny: _emwgpuWaitAny,
  environ_get: _environ_get,
  environ_sizes_get: _environ_sizes_get,
  fd_close: _fd_close,
  fd_read: _fd_read,
  fd_seek: _fd_seek,
  fd_write: _fd_write,
  ggml_webgpu_is_ios_browser,
  memory: wasmMemory,
  proc_exit: _proc_exit,
  random_get: _random_get,
  wgpuAdapterGetFeatures: _wgpuAdapterGetFeatures,
  wgpuAdapterGetInfo: _wgpuAdapterGetInfo,
  wgpuAdapterGetLimits: _wgpuAdapterGetLimits,
  wgpuAdapterHasFeature: _wgpuAdapterHasFeature,
  wgpuBufferGetSize: _wgpuBufferGetSize,
  wgpuCommandEncoderBeginComputePass: _wgpuCommandEncoderBeginComputePass,
  wgpuCommandEncoderCopyBufferToBuffer: _wgpuCommandEncoderCopyBufferToBuffer,
  wgpuCommandEncoderFinish: _wgpuCommandEncoderFinish,
  wgpuComputePassEncoderDispatchWorkgroups:
    _wgpuComputePassEncoderDispatchWorkgroups,
  wgpuComputePassEncoderEnd: _wgpuComputePassEncoderEnd,
  wgpuComputePassEncoderSetBindGroup: _wgpuComputePassEncoderSetBindGroup,
  wgpuComputePassEncoderSetPipeline: _wgpuComputePassEncoderSetPipeline,
  wgpuComputePipelineGetBindGroupLayout: _wgpuComputePipelineGetBindGroupLayout,
  wgpuDeviceCreateBindGroup: _wgpuDeviceCreateBindGroup,
  wgpuDeviceCreateCommandEncoder: _wgpuDeviceCreateCommandEncoder,
  wgpuDeviceCreateComputePipeline: _wgpuDeviceCreateComputePipeline,
  wgpuQueueSubmit: _wgpuQueueSubmit,
  wgpuQueueWriteBuffer: _wgpuQueueWriteBuffer,
};
function applySignatureConversions(wasmExports) {
  wasmExports = Object.assign({}, wasmExports);
  var makeWrapper_pp = (f) => (a0) => f(a0) >>> 0;
  var makeWrapper_ppp = (f) => (a0, a1) => f(a0, a1) >>> 0;
  var makeWrapper_p = (f) => () => f() >>> 0;
  wasmExports['malloc'] = makeWrapper_pp(wasmExports['malloc']);
  wasmExports['emscripten_builtin_memalign'] = makeWrapper_ppp(
    wasmExports['emscripten_builtin_memalign']
  );
  wasmExports['memalign'] = makeWrapper_ppp(wasmExports['memalign']);
  wasmExports['_emscripten_stack_alloc'] = makeWrapper_pp(
    wasmExports['_emscripten_stack_alloc']
  );
  wasmExports['emscripten_stack_get_current'] = makeWrapper_p(
    wasmExports['emscripten_stack_get_current']
  );
  return wasmExports;
}
async function callMain() {
  var entryFunction = _main;
  var argc = 0;
  var argv = 0;
  try {
    var ret = entryFunction(argc, argv);
    ret = await ret;
    exitJS(ret, true);
    return ret;
  } catch (e) {
    return handleException(e);
  }
}
function run() {
  if (runDependencies > 0) {
    dependenciesFulfilled = run;
    return;
  }
  preRun();
  if (runDependencies > 0) {
    dependenciesFulfilled = run;
    return;
  }
  async function doRun() {
    Module['calledRun'] = true;
    if (ABORT) return;
    initRuntime();
    preMain();
    Module['onRuntimeInitialized']?.();
    var noInitialRun = Module['noInitialRun'] || false;
    if (!noInitialRun) await callMain();
    postRun();
  }
  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(() => {
      setTimeout(() => Module['setStatus'](''), 1);
      doRun();
    }, 1);
  } else {
    doRun();
  }
}
var wasmExports;
createWasm();
run();
`,Cm=`var Module = typeof Module != 'undefined' ? Module : {};
var ENVIRONMENT_IS_WEB = !!globalThis.window;
var ENVIRONMENT_IS_WORKER = !!globalThis.WorkerGlobalScope;
var ENVIRONMENT_IS_NODE =
  globalThis.process?.versions?.node && globalThis.process?.type != 'renderer';
var arguments_ = [];
var thisProgram = './this.program';
var quit_ = (status, toThrow) => {
  throw toThrow;
};
var _scriptName = globalThis.document?.currentScript?.src;
if (typeof __filename != 'undefined') {
  _scriptName = __filename;
} else if (ENVIRONMENT_IS_WORKER) {
  _scriptName = self.location.href;
}
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}
var readAsync, readBinary;
if (ENVIRONMENT_IS_NODE) {
  var fs = require('fs');
  scriptDirectory = __dirname + '/';
  readBinary = (filename) => {
    filename = isFileURI(filename) ? new URL(filename) : filename;
    var ret = fs.readFileSync(filename);
    return ret;
  };
  readAsync = async (filename, binary = true) => {
    filename = isFileURI(filename) ? new URL(filename) : filename;
    var ret = fs.readFileSync(filename, binary ? undefined : 'utf8');
    return ret;
  };
  if (process.argv.length > 1) {
    thisProgram = process.argv[1].replace(/\\\\/g, '/');
  }
  arguments_ = process.argv.slice(2);
  if (typeof module != 'undefined') {
    module['exports'] = Module;
  }
  quit_ = (status, toThrow) => {
    process.exitCode = status;
    throw toThrow;
  };
} else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  try {
    scriptDirectory = new URL('.', _scriptName).href;
  } catch {}
  {
    if (ENVIRONMENT_IS_WORKER) {
      readBinary = (url) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.responseType = 'arraybuffer';
        xhr.send(null);
        return new Uint8Array(xhr.response);
      };
    }
    readAsync = async (url) => {
      if (isFileURI(url)) {
        return new Promise((resolve, reject) => {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.responseType = 'arraybuffer';
          xhr.onload = () => {
            if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) {
              resolve(xhr.response);
              return;
            }
            reject(xhr.status);
          };
          xhr.onerror = reject;
          xhr.send(null);
        });
      }
      var response = await fetch(url, { credentials: 'same-origin' });
      if (response.ok) {
        return response.arrayBuffer();
      }
      throw new Error(response.status + ' : ' + response.url);
    };
  }
} else {
}
var out = console.log.bind(console);
var err = console.error.bind(console);
var wasmBinary;
var ABORT = false;
var EXITSTATUS;
function assert(condition, text) {
  if (!condition) {
    abort(text);
  }
}
var isFileURI = (filename) => filename.startsWith('file://');
var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
var HEAP64, HEAPU64;
var runtimeInitialized = false;
function updateMemoryViews() {
  var b = wasmMemory.buffer;
  HEAP8 = new Int8Array(b);
  HEAP16 = new Int16Array(b);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(b);
  HEAPU16 = new Uint16Array(b);
  HEAP32 = new Int32Array(b);
  HEAPU32 = new Uint32Array(b);
  HEAPF32 = new Float32Array(b);
  HEAPF64 = new Float64Array(b);
  HEAP64 = new BigInt64Array(b);
  HEAPU64 = new BigUint64Array(b);
}
function initMemory() {
  if (Module['wasmMemory']) {
    wasmMemory = Module['wasmMemory'];
  } else {
    var INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 134217728;
    wasmMemory = new WebAssembly.Memory({
      initial: INITIAL_MEMORY / 65536,
      maximum: 65536,
    });
  }
  updateMemoryViews();
}
function preRun() {
  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function')
      Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }
  callRuntimeCallbacks(onPreRuns);
}
function initRuntime() {
  runtimeInitialized = true;
  if (!Module['noFSInit'] && !FS.initialized) FS.init();
  TTY.init();
  wasmExports['pb']();
  FS.ignorePermissions = false;
}
function preMain() {}
function postRun() {
  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function')
      Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }
  callRuntimeCallbacks(onPostRuns);
}
function abort(what) {
  Module['onAbort']?.(what);
  what = 'Aborted(' + what + ')';
  err(what);
  ABORT = true;
  what += '. Build with -sASSERTIONS for more info.';
  var e = new WebAssembly.RuntimeError(what);
  throw e;
}
var wasmBinaryFile;
function findWasmBinary() {
  return locateFile('wllama.wasm');
}
function getBinarySync(file) {
  if (file == wasmBinaryFile && wasmBinary) {
    return new Uint8Array(wasmBinary);
  }
  if (readBinary) {
    return readBinary(file);
  }
  throw 'both async and sync fetching of the wasm failed';
}
async function getWasmBinary(binaryFile) {
  if (!wasmBinary) {
    try {
      var response = await readAsync(binaryFile);
      return new Uint8Array(response);
    } catch {}
  }
  return getBinarySync(binaryFile);
}
async function instantiateArrayBuffer(binaryFile, imports) {
  try {
    var binary = await getWasmBinary(binaryFile);
    var instance = await WebAssembly.instantiate(binary, imports);
    return instance;
  } catch (reason) {
    err(\`failed to asynchronously prepare wasm: \${reason}\`);
    abort(reason);
  }
}
async function instantiateAsync(binary, binaryFile, imports) {
  if (!binary && !isFileURI(binaryFile) && !ENVIRONMENT_IS_NODE) {
    try {
      var response = fetch(binaryFile, { credentials: 'same-origin' });
      var instantiationResult = await WebAssembly.instantiateStreaming(
        response,
        imports
      );
      return instantiationResult;
    } catch (reason) {
      err(\`wasm streaming compile failed: \${reason}\`);
      err('falling back to ArrayBuffer instantiation');
    }
  }
  return instantiateArrayBuffer(binaryFile, imports);
}
function getWasmImports() {
  var imports = { a: wasmImports };
  return imports;
}
async function createWasm() {
  function receiveInstance(instance, module) {
    wasmExports = instance.exports;
    wasmExports = Asyncify.instrumentWasmExports(wasmExports);
    wasmExports = applySignatureConversions(wasmExports);
    assignWasmExports(wasmExports);
    removeRunDependency('wasm-instantiate');
    return wasmExports;
  }
  addRunDependency('wasm-instantiate');
  function receiveInstantiationResult(result) {
    return receiveInstance(result['instance']);
  }
  var info = getWasmImports();
  if (Module['instantiateWasm']) {
    return new Promise((resolve, reject) => {
      Module['instantiateWasm'](info, (inst, mod) => {
        resolve(receiveInstance(inst, mod));
      });
    });
  }
  wasmBinaryFile ??= findWasmBinary();
  var result = await instantiateAsync(wasmBinary, wasmBinaryFile, info);
  var exports = receiveInstantiationResult(result);
  return exports;
}
class ExitStatus {
  name = 'ExitStatus';
  constructor(status) {
    this.message = \`Program terminated with exit(\${status})\`;
    this.status = status;
  }
}
var callRuntimeCallbacks = (callbacks) => {
  while (callbacks.length > 0) {
    callbacks.shift()(Module);
  }
};
var onPostRuns = [];
var addOnPostRun = (cb) => onPostRuns.push(cb);
var onPreRuns = [];
var addOnPreRun = (cb) => onPreRuns.push(cb);
var runDependencies = 0;
var dependenciesFulfilled = null;
var removeRunDependency = (id) => {
  runDependencies--;
  Module['monitorRunDependencies']?.(runDependencies);
  if (runDependencies == 0) {
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback();
    }
  }
};
var addRunDependency = (id) => {
  runDependencies++;
  Module['monitorRunDependencies']?.(runDependencies);
};
var dynCalls = {};
var noExitRuntime = true;
var stackRestore = (val) => __emscripten_stack_restore(val);
var stackSave = () => _emscripten_stack_get_current();
var wasmMemory;
var exceptionCaught = [];
var uncaughtExceptionCount = 0;
var INT53_MAX = 9007199254740992;
var INT53_MIN = -9007199254740992;
var bigintToI53Checked = (num) =>
  num < INT53_MIN || num > INT53_MAX ? NaN : Number(num);
function ___cxa_begin_catch(ptr) {
  ptr >>>= 0;
  var info = new ExceptionInfo(ptr);
  if (!info.get_caught()) {
    info.set_caught(true);
    uncaughtExceptionCount--;
  }
  info.set_rethrown(false);
  exceptionCaught.push(info);
  ___cxa_increment_exception_refcount(ptr);
  return ___cxa_get_exception_ptr(ptr);
}
function ___cxa_current_primary_exception() {
  if (!exceptionCaught.length) {
    return 0;
  }
  var info = exceptionCaught[exceptionCaught.length - 1];
  ___cxa_increment_exception_refcount(info.excPtr);
  return info.excPtr;
}
var exceptionLast = 0;
var ___cxa_end_catch = () => {
  _setThrew(0, 0);
  var info = exceptionCaught.pop();
  ___cxa_decrement_exception_refcount(info.excPtr);
  exceptionLast = 0;
};
class ExceptionInfo {
  constructor(excPtr) {
    this.excPtr = excPtr;
    this.ptr = excPtr - 24;
  }
  set_type(type) {
    HEAPU32[((this.ptr + 4) >>> 2) >>> 0] = type;
  }
  get_type() {
    return HEAPU32[((this.ptr + 4) >>> 2) >>> 0];
  }
  set_destructor(destructor) {
    HEAPU32[((this.ptr + 8) >>> 2) >>> 0] = destructor;
  }
  get_destructor() {
    return HEAPU32[((this.ptr + 8) >>> 2) >>> 0];
  }
  set_caught(caught) {
    caught = caught ? 1 : 0;
    HEAP8[(this.ptr + 12) >>> 0] = caught;
  }
  get_caught() {
    return HEAP8[(this.ptr + 12) >>> 0] != 0;
  }
  set_rethrown(rethrown) {
    rethrown = rethrown ? 1 : 0;
    HEAP8[(this.ptr + 13) >>> 0] = rethrown;
  }
  get_rethrown() {
    return HEAP8[(this.ptr + 13) >>> 0] != 0;
  }
  init(type, destructor) {
    this.set_adjusted_ptr(0);
    this.set_type(type);
    this.set_destructor(destructor);
  }
  set_adjusted_ptr(adjustedPtr) {
    HEAPU32[((this.ptr + 16) >>> 2) >>> 0] = adjustedPtr;
  }
  get_adjusted_ptr() {
    return HEAPU32[((this.ptr + 16) >>> 2) >>> 0];
  }
}
var setTempRet0 = (val) => __emscripten_tempret_set(val);
var findMatchingCatch = (args) => {
  var thrown = exceptionLast;
  if (!thrown) {
    setTempRet0(0);
    return 0;
  }
  var info = new ExceptionInfo(thrown);
  info.set_adjusted_ptr(thrown);
  var thrownType = info.get_type();
  if (!thrownType) {
    setTempRet0(0);
    return thrown;
  }
  for (var caughtType of args) {
    if (caughtType === 0 || caughtType === thrownType) {
      break;
    }
    var adjusted_ptr_addr = info.ptr + 16;
    if (___cxa_can_catch(caughtType, thrownType, adjusted_ptr_addr)) {
      setTempRet0(caughtType);
      return thrown;
    }
  }
  setTempRet0(thrownType);
  return thrown;
};
function ___cxa_find_matching_catch_2() {
  return findMatchingCatch([]);
}
function ___cxa_find_matching_catch_3(arg0) {
  arg0 >>>= 0;
  return findMatchingCatch([arg0]);
}
function ___cxa_find_matching_catch_4(arg0, arg1) {
  arg0 >>>= 0;
  arg1 >>>= 0;
  return findMatchingCatch([arg0, arg1]);
}
var ___cxa_rethrow = () => {
  var info = exceptionCaught.pop();
  if (!info) {
    abort('no exception to throw');
  }
  var ptr = info.excPtr;
  if (!info.get_rethrown()) {
    exceptionCaught.push(info);
    info.set_rethrown(true);
    info.set_caught(false);
    uncaughtExceptionCount++;
  }
  exceptionLast = ptr;
  throw exceptionLast;
};
function ___cxa_rethrow_primary_exception(ptr) {
  ptr >>>= 0;
  if (!ptr) return;
  var info = new ExceptionInfo(ptr);
  exceptionCaught.push(info);
  info.set_rethrown(true);
  ___cxa_rethrow();
}
function ___cxa_throw(ptr, type, destructor) {
  ptr >>>= 0;
  type >>>= 0;
  destructor >>>= 0;
  var info = new ExceptionInfo(ptr);
  info.init(type, destructor);
  exceptionLast = ptr;
  uncaughtExceptionCount++;
  throw exceptionLast;
}
var ___cxa_uncaught_exceptions = () => uncaughtExceptionCount;
function ___resumeException(ptr) {
  ptr >>>= 0;
  if (!exceptionLast) {
    exceptionLast = ptr;
  }
  throw exceptionLast;
}
var syscallGetVarargI = () => {
  var ret = HEAP32[(+SYSCALLS.varargs >>> 2) >>> 0];
  SYSCALLS.varargs += 4;
  return ret;
};
var syscallGetVarargP = syscallGetVarargI;
var PATH = {
  isAbs: (path) => path.charAt(0) === '/',
  splitPath: (filename) => {
    var splitPathRe =
      /^(\\/?|)([\\s\\S]*?)((?:\\.{1,2}|[^\\/]+?|)(\\.[^.\\/]*|))(?:[\\/]*)$/;
    return splitPathRe.exec(filename).slice(1);
  },
  normalizeArray: (parts, allowAboveRoot) => {
    var up = 0;
    for (var i = parts.length - 1; i >= 0; i--) {
      var last = parts[i];
      if (last === '.') {
        parts.splice(i, 1);
      } else if (last === '..') {
        parts.splice(i, 1);
        up++;
      } else if (up) {
        parts.splice(i, 1);
        up--;
      }
    }
    if (allowAboveRoot) {
      for (; up; up--) {
        parts.unshift('..');
      }
    }
    return parts;
  },
  normalize: (path) => {
    var isAbsolute = PATH.isAbs(path),
      trailingSlash = path.slice(-1) === '/';
    path = PATH.normalizeArray(
      path.split('/').filter((p) => !!p),
      !isAbsolute
    ).join('/');
    if (!path && !isAbsolute) {
      path = '.';
    }
    if (path && trailingSlash) {
      path += '/';
    }
    return (isAbsolute ? '/' : '') + path;
  },
  dirname: (path) => {
    var result = PATH.splitPath(path),
      root = result[0],
      dir = result[1];
    if (!root && !dir) {
      return '.';
    }
    if (dir) {
      dir = dir.slice(0, -1);
    }
    return root + dir;
  },
  basename: (path) => path && path.match(/([^\\/]+|\\/)\\/*$/)[1],
  join: (...paths) => PATH.normalize(paths.join('/')),
  join2: (l, r) => PATH.normalize(l + '/' + r),
};
var initRandomFill = () => {
  if (ENVIRONMENT_IS_NODE) {
    var nodeCrypto = require('crypto');
    return (view) => nodeCrypto.randomFillSync(view);
  }
  return (view) => crypto.getRandomValues(view);
};
var randomFill = (view) => {
  (randomFill = initRandomFill())(view);
};
var PATH_FS = {
  resolve: (...args) => {
    var resolvedPath = '',
      resolvedAbsolute = false;
    for (var i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path = i >= 0 ? args[i] : FS.cwd();
      if (typeof path != 'string') {
        throw new TypeError('Arguments to path.resolve must be strings');
      } else if (!path) {
        return '';
      }
      resolvedPath = path + '/' + resolvedPath;
      resolvedAbsolute = PATH.isAbs(path);
    }
    resolvedPath = PATH.normalizeArray(
      resolvedPath.split('/').filter((p) => !!p),
      !resolvedAbsolute
    ).join('/');
    return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
  },
  relative: (from, to) => {
    from = PATH_FS.resolve(from).slice(1);
    to = PATH_FS.resolve(to).slice(1);
    function trim(arr) {
      var start = 0;
      for (; start < arr.length; start++) {
        if (arr[start] !== '') break;
      }
      var end = arr.length - 1;
      for (; end >= 0; end--) {
        if (arr[end] !== '') break;
      }
      if (start > end) return [];
      return arr.slice(start, end - start + 1);
    }
    var fromParts = trim(from.split('/'));
    var toParts = trim(to.split('/'));
    var length = Math.min(fromParts.length, toParts.length);
    var samePartsLength = length;
    for (var i = 0; i < length; i++) {
      if (fromParts[i] !== toParts[i]) {
        samePartsLength = i;
        break;
      }
    }
    var outputParts = [];
    for (var i = samePartsLength; i < fromParts.length; i++) {
      outputParts.push('..');
    }
    outputParts = outputParts.concat(toParts.slice(samePartsLength));
    return outputParts.join('/');
  },
};
var UTF8Decoder = globalThis.TextDecoder && new TextDecoder();
var findStringEnd = (heapOrArray, idx, maxBytesToRead, ignoreNul) => {
  var maxIdx = idx + maxBytesToRead;
  if (ignoreNul) return maxIdx;
  while (heapOrArray[idx] && !(idx >= maxIdx)) ++idx;
  return idx;
};
var UTF8ArrayToString = (heapOrArray, idx = 0, maxBytesToRead, ignoreNul) => {
  idx >>>= 0;
  var endPtr = findStringEnd(heapOrArray, idx, maxBytesToRead, ignoreNul);
  if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
    return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
  }
  var str = '';
  while (idx < endPtr) {
    var u0 = heapOrArray[idx++];
    if (!(u0 & 128)) {
      str += String.fromCharCode(u0);
      continue;
    }
    var u1 = heapOrArray[idx++] & 63;
    if ((u0 & 224) == 192) {
      str += String.fromCharCode(((u0 & 31) << 6) | u1);
      continue;
    }
    var u2 = heapOrArray[idx++] & 63;
    if ((u0 & 240) == 224) {
      u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
    } else {
      u0 =
        ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heapOrArray[idx++] & 63);
    }
    if (u0 < 65536) {
      str += String.fromCharCode(u0);
    } else {
      var ch = u0 - 65536;
      str += String.fromCharCode(55296 | (ch >> 10), 56320 | (ch & 1023));
    }
  }
  return str;
};
var FS_stdin_getChar_buffer = [];
var lengthBytesUTF8 = (str) => {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    var c = str.charCodeAt(i);
    if (c <= 127) {
      len++;
    } else if (c <= 2047) {
      len += 2;
    } else if (c >= 55296 && c <= 57343) {
      len += 4;
      ++i;
    } else {
      len += 3;
    }
  }
  return len;
};
var stringToUTF8Array = (str, heap, outIdx, maxBytesToWrite) => {
  outIdx >>>= 0;
  if (!(maxBytesToWrite > 0)) return 0;
  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1;
  for (var i = 0; i < str.length; ++i) {
    var u = str.codePointAt(i);
    if (u <= 127) {
      if (outIdx >= endIdx) break;
      heap[outIdx++ >>> 0] = u;
    } else if (u <= 2047) {
      if (outIdx + 1 >= endIdx) break;
      heap[outIdx++ >>> 0] = 192 | (u >> 6);
      heap[outIdx++ >>> 0] = 128 | (u & 63);
    } else if (u <= 65535) {
      if (outIdx + 2 >= endIdx) break;
      heap[outIdx++ >>> 0] = 224 | (u >> 12);
      heap[outIdx++ >>> 0] = 128 | ((u >> 6) & 63);
      heap[outIdx++ >>> 0] = 128 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      heap[outIdx++ >>> 0] = 240 | (u >> 18);
      heap[outIdx++ >>> 0] = 128 | ((u >> 12) & 63);
      heap[outIdx++ >>> 0] = 128 | ((u >> 6) & 63);
      heap[outIdx++ >>> 0] = 128 | (u & 63);
      i++;
    }
  }
  heap[outIdx >>> 0] = 0;
  return outIdx - startIdx;
};
var intArrayFromString = (stringy, dontAddNull, length) => {
  var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
};
var FS_stdin_getChar = () => {
  if (!FS_stdin_getChar_buffer.length) {
    var result = null;
    if (ENVIRONMENT_IS_NODE) {
      var BUFSIZE = 256;
      var buf = Buffer.alloc(BUFSIZE);
      var bytesRead = 0;
      var fd = process.stdin.fd;
      try {
        bytesRead = fs.readSync(fd, buf, 0, BUFSIZE);
      } catch (e) {
        if (e.toString().includes('EOF')) bytesRead = 0;
        else throw e;
      }
      if (bytesRead > 0) {
        result = buf.slice(0, bytesRead).toString('utf-8');
      }
    } else if (globalThis.window?.prompt) {
      result = window.prompt('Input: ');
      if (result !== null) {
        result += '\\n';
      }
    } else {
    }
    if (!result) {
      return null;
    }
    FS_stdin_getChar_buffer = intArrayFromString(result, true);
  }
  return FS_stdin_getChar_buffer.shift();
};
var TTY = {
  ttys: [],
  init() {},
  shutdown() {},
  register(dev, ops) {
    TTY.ttys[dev] = { input: [], output: [], ops };
    FS.registerDevice(dev, TTY.stream_ops);
  },
  stream_ops: {
    open(stream) {
      var tty = TTY.ttys[stream.node.rdev];
      if (!tty) {
        throw new FS.ErrnoError(43);
      }
      stream.tty = tty;
      stream.seekable = false;
    },
    close(stream) {
      stream.tty.ops.fsync(stream.tty);
    },
    fsync(stream) {
      stream.tty.ops.fsync(stream.tty);
    },
    read(stream, buffer, offset, length, pos) {
      if (!stream.tty || !stream.tty.ops.get_char) {
        throw new FS.ErrnoError(60);
      }
      var bytesRead = 0;
      for (var i = 0; i < length; i++) {
        var result;
        try {
          result = stream.tty.ops.get_char(stream.tty);
        } catch (e) {
          throw new FS.ErrnoError(29);
        }
        if (result === undefined && bytesRead === 0) {
          throw new FS.ErrnoError(6);
        }
        if (result === null || result === undefined) break;
        bytesRead++;
        buffer[offset + i] = result;
      }
      if (bytesRead) {
        stream.node.atime = Date.now();
      }
      return bytesRead;
    },
    write(stream, buffer, offset, length, pos) {
      if (!stream.tty || !stream.tty.ops.put_char) {
        throw new FS.ErrnoError(60);
      }
      try {
        for (var i = 0; i < length; i++) {
          stream.tty.ops.put_char(stream.tty, buffer[offset + i]);
        }
      } catch (e) {
        throw new FS.ErrnoError(29);
      }
      if (length) {
        stream.node.mtime = stream.node.ctime = Date.now();
      }
      return i;
    },
  },
  default_tty_ops: {
    get_char(tty) {
      return FS_stdin_getChar();
    },
    put_char(tty, val) {
      if (val === null || val === 10) {
        out(UTF8ArrayToString(tty.output));
        tty.output = [];
      } else {
        if (val != 0) tty.output.push(val);
      }
    },
    fsync(tty) {
      if (tty.output?.length > 0) {
        out(UTF8ArrayToString(tty.output));
        tty.output = [];
      }
    },
    ioctl_tcgets(tty) {
      return {
        c_iflag: 25856,
        c_oflag: 5,
        c_cflag: 191,
        c_lflag: 35387,
        c_cc: [
          3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
      };
    },
    ioctl_tcsets(tty, optional_actions, data) {
      return 0;
    },
    ioctl_tiocgwinsz(tty) {
      return [24, 80];
    },
  },
  default_tty1_ops: {
    put_char(tty, val) {
      if (val === null || val === 10) {
        err(UTF8ArrayToString(tty.output));
        tty.output = [];
      } else {
        if (val != 0) tty.output.push(val);
      }
    },
    fsync(tty) {
      if (tty.output?.length > 0) {
        err(UTF8ArrayToString(tty.output));
        tty.output = [];
      }
    },
  },
};
var zeroMemory = (ptr, size) => HEAPU8.fill(0, ptr, ptr + size);
var alignMemory = (size, alignment) => Math.ceil(size / alignment) * alignment;
var mmapAlloc = (size) => {
  size = alignMemory(size, 65536);
  var ptr = _emscripten_builtin_memalign(65536, size);
  if (ptr) zeroMemory(ptr, size);
  return ptr;
};
var MEMFS = {
  ops_table: null,
  mount(mount) {
    return MEMFS.createNode(null, '/', 16895, 0);
  },
  createNode(parent, name, mode, dev) {
    if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
      throw new FS.ErrnoError(63);
    }
    MEMFS.ops_table ||= {
      dir: {
        node: {
          getattr: MEMFS.node_ops.getattr,
          setattr: MEMFS.node_ops.setattr,
          lookup: MEMFS.node_ops.lookup,
          mknod: MEMFS.node_ops.mknod,
          rename: MEMFS.node_ops.rename,
          unlink: MEMFS.node_ops.unlink,
          rmdir: MEMFS.node_ops.rmdir,
          readdir: MEMFS.node_ops.readdir,
          symlink: MEMFS.node_ops.symlink,
        },
        stream: { llseek: MEMFS.stream_ops.llseek },
      },
      file: {
        node: {
          getattr: MEMFS.node_ops.getattr,
          setattr: MEMFS.node_ops.setattr,
        },
        stream: {
          llseek: MEMFS.stream_ops.llseek,
          read: MEMFS.stream_ops.read,
          write: MEMFS.stream_ops.write,
          mmap: MEMFS.stream_ops.mmap,
          msync: MEMFS.stream_ops.msync,
        },
      },
      link: {
        node: {
          getattr: MEMFS.node_ops.getattr,
          setattr: MEMFS.node_ops.setattr,
          readlink: MEMFS.node_ops.readlink,
        },
        stream: {},
      },
      chrdev: {
        node: {
          getattr: MEMFS.node_ops.getattr,
          setattr: MEMFS.node_ops.setattr,
        },
        stream: FS.chrdev_stream_ops,
      },
    };
    var node = FS.createNode(parent, name, mode, dev);
    if (FS.isDir(node.mode)) {
      node.node_ops = MEMFS.ops_table.dir.node;
      node.stream_ops = MEMFS.ops_table.dir.stream;
      node.contents = {};
    } else if (FS.isFile(node.mode)) {
      node.node_ops = MEMFS.ops_table.file.node;
      node.stream_ops = MEMFS.ops_table.file.stream;
      node.usedBytes = 0;
      node.contents = null;
    } else if (FS.isLink(node.mode)) {
      node.node_ops = MEMFS.ops_table.link.node;
      node.stream_ops = MEMFS.ops_table.link.stream;
    } else if (FS.isChrdev(node.mode)) {
      node.node_ops = MEMFS.ops_table.chrdev.node;
      node.stream_ops = MEMFS.ops_table.chrdev.stream;
    }
    node.atime = node.mtime = node.ctime = Date.now();
    if (parent) {
      parent.contents[name] = node;
      parent.atime = parent.mtime = parent.ctime = node.atime;
    }
    return node;
  },
  getFileDataAsTypedArray(node) {
    if (!node.contents) return new Uint8Array(0);
    if (node.contents.subarray)
      return node.contents.subarray(0, node.usedBytes);
    return new Uint8Array(node.contents);
  },
  expandFileStorage(node, newCapacity) {
    var prevCapacity = node.contents ? node.contents.length : 0;
    if (prevCapacity >= newCapacity) return;
    var CAPACITY_DOUBLING_MAX = 1024 * 1024;
    newCapacity = Math.max(
      newCapacity,
      (prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125)) >>> 0
    );
    if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256);
    var oldContents = node.contents;
    node.contents = new Uint8Array(newCapacity);
    if (node.usedBytes > 0)
      node.contents.set(oldContents.subarray(0, node.usedBytes), 0);
  },
  resizeFileStorage(node, newSize) {
    if (node.usedBytes == newSize) return;
    if (newSize == 0) {
      node.contents = null;
      node.usedBytes = 0;
    } else {
      var oldContents = node.contents;
      node.contents = new Uint8Array(newSize);
      if (oldContents) {
        node.contents.set(
          oldContents.subarray(0, Math.min(newSize, node.usedBytes))
        );
      }
      node.usedBytes = newSize;
    }
  },
  node_ops: {
    getattr(node) {
      var attr = {};
      attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
      attr.ino = node.id;
      attr.mode = node.mode;
      attr.nlink = 1;
      attr.uid = 0;
      attr.gid = 0;
      attr.rdev = node.rdev;
      if (FS.isDir(node.mode)) {
        attr.size = 4096;
      } else if (FS.isFile(node.mode)) {
        attr.size = node.usedBytes;
      } else if (FS.isLink(node.mode)) {
        attr.size = node.link.length;
      } else {
        attr.size = 0;
      }
      attr.atime = new Date(node.atime);
      attr.mtime = new Date(node.mtime);
      attr.ctime = new Date(node.ctime);
      attr.blksize = 4096;
      attr.blocks = Math.ceil(attr.size / attr.blksize);
      return attr;
    },
    setattr(node, attr) {
      for (const key of ['mode', 'atime', 'mtime', 'ctime']) {
        if (attr[key] != null) {
          node[key] = attr[key];
        }
      }
      if (attr.size !== undefined) {
        MEMFS.resizeFileStorage(node, attr.size);
      }
    },
    lookup(parent, name) {
      if (!MEMFS.doesNotExistError) {
        MEMFS.doesNotExistError = new FS.ErrnoError(44);
        MEMFS.doesNotExistError.stack = '<generic error, no stack>';
      }
      throw MEMFS.doesNotExistError;
    },
    mknod(parent, name, mode, dev) {
      return MEMFS.createNode(parent, name, mode, dev);
    },
    rename(old_node, new_dir, new_name) {
      var new_node;
      try {
        new_node = FS.lookupNode(new_dir, new_name);
      } catch (e) {}
      if (new_node) {
        if (FS.isDir(old_node.mode)) {
          for (var i in new_node.contents) {
            throw new FS.ErrnoError(55);
          }
        }
        FS.hashRemoveNode(new_node);
      }
      delete old_node.parent.contents[old_node.name];
      new_dir.contents[new_name] = old_node;
      old_node.name = new_name;
      new_dir.ctime =
        new_dir.mtime =
        old_node.parent.ctime =
        old_node.parent.mtime =
          Date.now();
    },
    unlink(parent, name) {
      delete parent.contents[name];
      parent.ctime = parent.mtime = Date.now();
    },
    rmdir(parent, name) {
      var node = FS.lookupNode(parent, name);
      for (var i in node.contents) {
        throw new FS.ErrnoError(55);
      }
      delete parent.contents[name];
      parent.ctime = parent.mtime = Date.now();
    },
    readdir(node) {
      return ['.', '..', ...Object.keys(node.contents)];
    },
    symlink(parent, newname, oldpath) {
      var node = MEMFS.createNode(parent, newname, 511 | 40960, 0);
      node.link = oldpath;
      return node;
    },
    readlink(node) {
      if (!FS.isLink(node.mode)) {
        throw new FS.ErrnoError(28);
      }
      return node.link;
    },
  },
  stream_ops: {
    read(stream, buffer, offset, length, position) {
      var contents = stream.node.contents;
      if (position >= stream.node.usedBytes) return 0;
      var size = Math.min(stream.node.usedBytes - position, length);
      if (size > 8 && contents.subarray) {
        buffer.set(contents.subarray(position, position + size), offset);
      } else {
        for (var i = 0; i < size; i++)
          buffer[offset + i] = contents[position + i];
      }
      return size;
    },
    write(stream, buffer, offset, length, position, canOwn) {
      if (buffer.buffer === HEAP8.buffer) {
        canOwn = false;
      }
      if (!length) return 0;
      var node = stream.node;
      node.mtime = node.ctime = Date.now();
      if (buffer.subarray && (!node.contents || node.contents.subarray)) {
        if (canOwn) {
          node.contents = buffer.subarray(offset, offset + length);
          node.usedBytes = length;
          return length;
        } else if (node.usedBytes === 0 && position === 0) {
          node.contents = buffer.slice(offset, offset + length);
          node.usedBytes = length;
          return length;
        } else if (position + length <= node.usedBytes) {
          node.contents.set(buffer.subarray(offset, offset + length), position);
          return length;
        }
      }
      MEMFS.expandFileStorage(node, position + length);
      if (node.contents.subarray && buffer.subarray) {
        node.contents.set(buffer.subarray(offset, offset + length), position);
      } else {
        for (var i = 0; i < length; i++) {
          node.contents[position + i] = buffer[offset + i];
        }
      }
      node.usedBytes = Math.max(node.usedBytes, position + length);
      return length;
    },
    llseek(stream, offset, whence) {
      var position = offset;
      if (whence === 1) {
        position += stream.position;
      } else if (whence === 2) {
        if (FS.isFile(stream.node.mode)) {
          position += stream.node.usedBytes;
        }
      }
      if (position < 0) {
        throw new FS.ErrnoError(28);
      }
      return position;
    },
    mmap(stream, length, position, prot, flags) {
      if (!FS.isFile(stream.node.mode)) {
        throw new FS.ErrnoError(43);
      }
      var ptr;
      var allocated;
      var contents = stream.node.contents;
      if (!(flags & 2) && contents && contents.buffer === HEAP8.buffer) {
        allocated = false;
        ptr = contents.byteOffset;
      } else {
        allocated = true;
        ptr = mmapAlloc(length);
        if (!ptr) {
          throw new FS.ErrnoError(48);
        }
        if (contents) {
          if (position > 0 || position + length < contents.length) {
            if (contents.subarray) {
              contents = contents.subarray(position, position + length);
            } else {
              contents = Array.prototype.slice.call(
                contents,
                position,
                position + length
              );
            }
          }
          HEAP8.set(contents, ptr >>> 0);
        }
      }
      return { ptr, allocated };
    },
    msync(stream, buffer, offset, length, mmapFlags) {
      MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
      return 0;
    },
  },
};
var FS_modeStringToFlags = (str) => {
  var flagModes = {
    r: 0,
    'r+': 2,
    w: 512 | 64 | 1,
    'w+': 512 | 64 | 2,
    a: 1024 | 64 | 1,
    'a+': 1024 | 64 | 2,
  };
  var flags = flagModes[str];
  if (typeof flags == 'undefined') {
    throw new Error(\`Unknown file open mode: \${str}\`);
  }
  return flags;
};
var FS_getMode = (canRead, canWrite) => {
  var mode = 0;
  if (canRead) mode |= 292 | 73;
  if (canWrite) mode |= 146;
  return mode;
};
var asyncLoad = async (url) => {
  var arrayBuffer = await readAsync(url);
  return new Uint8Array(arrayBuffer);
};
var FS_createDataFile = (...args) => FS.createDataFile(...args);
var getUniqueRunDependency = (id) => id;
var preloadPlugins = [];
var FS_handledByPreloadPlugin = async (byteArray, fullname) => {
  if (typeof Browser != 'undefined') Browser.init();
  for (var plugin of preloadPlugins) {
    if (plugin['canHandle'](fullname)) {
      return plugin['handle'](byteArray, fullname);
    }
  }
  return byteArray;
};
var FS_preloadFile = async (
  parent,
  name,
  url,
  canRead,
  canWrite,
  dontCreateFile,
  canOwn,
  preFinish
) => {
  var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
  var dep = getUniqueRunDependency(\`cp \${fullname}\`);
  addRunDependency(dep);
  try {
    var byteArray = url;
    if (typeof url == 'string') {
      byteArray = await asyncLoad(url);
    }
    byteArray = await FS_handledByPreloadPlugin(byteArray, fullname);
    preFinish?.();
    if (!dontCreateFile) {
      FS_createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
    }
  } finally {
    removeRunDependency(dep);
  }
};
var FS_createPreloadedFile = (
  parent,
  name,
  url,
  canRead,
  canWrite,
  onload,
  onerror,
  dontCreateFile,
  canOwn,
  preFinish
) => {
  FS_preloadFile(
    parent,
    name,
    url,
    canRead,
    canWrite,
    dontCreateFile,
    canOwn,
    preFinish
  )
    .then(onload)
    .catch(onerror);
};
var FS = {
  root: null,
  mounts: [],
  devices: {},
  streams: [],
  nextInode: 1,
  nameTable: null,
  currentPath: '/',
  initialized: false,
  ignorePermissions: true,
  filesystems: null,
  syncFSRequests: 0,
  readFiles: {},
  ErrnoError: class {
    name = 'ErrnoError';
    constructor(errno) {
      this.errno = errno;
    }
  },
  FSStream: class {
    shared = {};
    get object() {
      return this.node;
    }
    set object(val) {
      this.node = val;
    }
    get isRead() {
      return (this.flags & 2097155) !== 1;
    }
    get isWrite() {
      return (this.flags & 2097155) !== 0;
    }
    get isAppend() {
      return this.flags & 1024;
    }
    get flags() {
      return this.shared.flags;
    }
    set flags(val) {
      this.shared.flags = val;
    }
    get position() {
      return this.shared.position;
    }
    set position(val) {
      this.shared.position = val;
    }
  },
  FSNode: class {
    node_ops = {};
    stream_ops = {};
    readMode = 292 | 73;
    writeMode = 146;
    mounted = null;
    constructor(parent, name, mode, rdev) {
      if (!parent) {
        parent = this;
      }
      this.parent = parent;
      this.mount = parent.mount;
      this.id = FS.nextInode++;
      this.name = name;
      this.mode = mode;
      this.rdev = rdev;
      this.atime = this.mtime = this.ctime = Date.now();
    }
    get read() {
      return (this.mode & this.readMode) === this.readMode;
    }
    set read(val) {
      val ? (this.mode |= this.readMode) : (this.mode &= ~this.readMode);
    }
    get write() {
      return (this.mode & this.writeMode) === this.writeMode;
    }
    set write(val) {
      val ? (this.mode |= this.writeMode) : (this.mode &= ~this.writeMode);
    }
    get isFolder() {
      return FS.isDir(this.mode);
    }
    get isDevice() {
      return FS.isChrdev(this.mode);
    }
  },
  lookupPath(path, opts = {}) {
    if (!path) {
      throw new FS.ErrnoError(44);
    }
    opts.follow_mount ??= true;
    if (!PATH.isAbs(path)) {
      path = FS.cwd() + '/' + path;
    }
    linkloop: for (var nlinks = 0; nlinks < 40; nlinks++) {
      var parts = path.split('/').filter((p) => !!p);
      var current = FS.root;
      var current_path = '/';
      for (var i = 0; i < parts.length; i++) {
        var islast = i === parts.length - 1;
        if (islast && opts.parent) {
          break;
        }
        if (parts[i] === '.') {
          continue;
        }
        if (parts[i] === '..') {
          current_path = PATH.dirname(current_path);
          if (FS.isRoot(current)) {
            path = current_path + '/' + parts.slice(i + 1).join('/');
            nlinks--;
            continue linkloop;
          } else {
            current = current.parent;
          }
          continue;
        }
        current_path = PATH.join2(current_path, parts[i]);
        try {
          current = FS.lookupNode(current, parts[i]);
        } catch (e) {
          if (e?.errno === 44 && islast && opts.noent_okay) {
            return { path: current_path };
          }
          throw e;
        }
        if (FS.isMountpoint(current) && (!islast || opts.follow_mount)) {
          current = current.mounted.root;
        }
        if (FS.isLink(current.mode) && (!islast || opts.follow)) {
          if (!current.node_ops.readlink) {
            throw new FS.ErrnoError(52);
          }
          var link = current.node_ops.readlink(current);
          if (!PATH.isAbs(link)) {
            link = PATH.dirname(current_path) + '/' + link;
          }
          path = link + '/' + parts.slice(i + 1).join('/');
          continue linkloop;
        }
      }
      return { path: current_path, node: current };
    }
    throw new FS.ErrnoError(32);
  },
  getPath(node) {
    var path;
    while (true) {
      if (FS.isRoot(node)) {
        var mount = node.mount.mountpoint;
        if (!path) return mount;
        return mount[mount.length - 1] !== '/'
          ? \`\${mount}/\${path}\`
          : mount + path;
      }
      path = path ? \`\${node.name}/\${path}\` : node.name;
      node = node.parent;
    }
  },
  hashName(parentid, name) {
    var hash = 0;
    for (var i = 0; i < name.length; i++) {
      hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
    }
    return ((parentid + hash) >>> 0) % FS.nameTable.length;
  },
  hashAddNode(node) {
    var hash = FS.hashName(node.parent.id, node.name);
    node.name_next = FS.nameTable[hash];
    FS.nameTable[hash] = node;
  },
  hashRemoveNode(node) {
    var hash = FS.hashName(node.parent.id, node.name);
    if (FS.nameTable[hash] === node) {
      FS.nameTable[hash] = node.name_next;
    } else {
      var current = FS.nameTable[hash];
      while (current) {
        if (current.name_next === node) {
          current.name_next = node.name_next;
          break;
        }
        current = current.name_next;
      }
    }
  },
  lookupNode(parent, name) {
    var errCode = FS.mayLookup(parent);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    var hash = FS.hashName(parent.id, name);
    for (var node = FS.nameTable[hash]; node; node = node.name_next) {
      var nodeName = node.name;
      if (node.parent.id === parent.id && nodeName === name) {
        return node;
      }
    }
    return FS.lookup(parent, name);
  },
  createNode(parent, name, mode, rdev) {
    var node = new FS.FSNode(parent, name, mode, rdev);
    FS.hashAddNode(node);
    return node;
  },
  destroyNode(node) {
    FS.hashRemoveNode(node);
  },
  isRoot(node) {
    return node === node.parent;
  },
  isMountpoint(node) {
    return !!node.mounted;
  },
  isFile(mode) {
    return (mode & 61440) === 32768;
  },
  isDir(mode) {
    return (mode & 61440) === 16384;
  },
  isLink(mode) {
    return (mode & 61440) === 40960;
  },
  isChrdev(mode) {
    return (mode & 61440) === 8192;
  },
  isBlkdev(mode) {
    return (mode & 61440) === 24576;
  },
  isFIFO(mode) {
    return (mode & 61440) === 4096;
  },
  isSocket(mode) {
    return (mode & 49152) === 49152;
  },
  flagsToPermissionString(flag) {
    var perms = ['r', 'w', 'rw'][flag & 3];
    if (flag & 512) {
      perms += 'w';
    }
    return perms;
  },
  nodePermissions(node, perms) {
    if (FS.ignorePermissions) {
      return 0;
    }
    if (perms.includes('r') && !(node.mode & 292)) {
      return 2;
    } else if (perms.includes('w') && !(node.mode & 146)) {
      return 2;
    } else if (perms.includes('x') && !(node.mode & 73)) {
      return 2;
    }
    return 0;
  },
  mayLookup(dir) {
    if (!FS.isDir(dir.mode)) return 54;
    var errCode = FS.nodePermissions(dir, 'x');
    if (errCode) return errCode;
    if (!dir.node_ops.lookup) return 2;
    return 0;
  },
  mayCreate(dir, name) {
    if (!FS.isDir(dir.mode)) {
      return 54;
    }
    try {
      var node = FS.lookupNode(dir, name);
      return 20;
    } catch (e) {}
    return FS.nodePermissions(dir, 'wx');
  },
  mayDelete(dir, name, isdir) {
    var node;
    try {
      node = FS.lookupNode(dir, name);
    } catch (e) {
      return e.errno;
    }
    var errCode = FS.nodePermissions(dir, 'wx');
    if (errCode) {
      return errCode;
    }
    if (isdir) {
      if (!FS.isDir(node.mode)) {
        return 54;
      }
      if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
        return 10;
      }
    } else {
      if (FS.isDir(node.mode)) {
        return 31;
      }
    }
    return 0;
  },
  mayOpen(node, flags) {
    if (!node) {
      return 44;
    }
    if (FS.isLink(node.mode)) {
      return 32;
    } else if (FS.isDir(node.mode)) {
      if (FS.flagsToPermissionString(flags) !== 'r' || flags & (512 | 64)) {
        return 31;
      }
    }
    return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
  },
  checkOpExists(op, err) {
    if (!op) {
      throw new FS.ErrnoError(err);
    }
    return op;
  },
  MAX_OPEN_FDS: 4096,
  nextfd() {
    for (var fd = 0; fd <= FS.MAX_OPEN_FDS; fd++) {
      if (!FS.streams[fd]) {
        return fd;
      }
    }
    throw new FS.ErrnoError(33);
  },
  getStreamChecked(fd) {
    var stream = FS.getStream(fd);
    if (!stream) {
      throw new FS.ErrnoError(8);
    }
    return stream;
  },
  getStream: (fd) => FS.streams[fd],
  createStream(stream, fd = -1) {
    stream = Object.assign(new FS.FSStream(), stream);
    if (fd == -1) {
      fd = FS.nextfd();
    }
    stream.fd = fd;
    FS.streams[fd] = stream;
    return stream;
  },
  closeStream(fd) {
    FS.streams[fd] = null;
  },
  dupStream(origStream, fd = -1) {
    var stream = FS.createStream(origStream, fd);
    stream.stream_ops?.dup?.(stream);
    return stream;
  },
  doSetAttr(stream, node, attr) {
    var setattr = stream?.stream_ops.setattr;
    var arg = setattr ? stream : node;
    setattr ??= node.node_ops.setattr;
    FS.checkOpExists(setattr, 63);
    setattr(arg, attr);
  },
  chrdev_stream_ops: {
    open(stream) {
      var device = FS.getDevice(stream.node.rdev);
      stream.stream_ops = device.stream_ops;
      stream.stream_ops.open?.(stream);
    },
    llseek() {
      throw new FS.ErrnoError(70);
    },
  },
  major: (dev) => dev >> 8,
  minor: (dev) => dev & 255,
  makedev: (ma, mi) => (ma << 8) | mi,
  registerDevice(dev, ops) {
    FS.devices[dev] = { stream_ops: ops };
  },
  getDevice: (dev) => FS.devices[dev],
  getMounts(mount) {
    var mounts = [];
    var check = [mount];
    while (check.length) {
      var m = check.pop();
      mounts.push(m);
      check.push(...m.mounts);
    }
    return mounts;
  },
  syncfs(populate, callback) {
    if (typeof populate == 'function') {
      callback = populate;
      populate = false;
    }
    FS.syncFSRequests++;
    if (FS.syncFSRequests > 1) {
      err(
        \`warning: \${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work\`
      );
    }
    var mounts = FS.getMounts(FS.root.mount);
    var completed = 0;
    function doCallback(errCode) {
      FS.syncFSRequests--;
      return callback(errCode);
    }
    function done(errCode) {
      if (errCode) {
        if (!done.errored) {
          done.errored = true;
          return doCallback(errCode);
        }
        return;
      }
      if (++completed >= mounts.length) {
        doCallback(null);
      }
    }
    for (var mount of mounts) {
      if (mount.type.syncfs) {
        mount.type.syncfs(mount, populate, done);
      } else {
        done(null);
      }
    }
  },
  mount(type, opts, mountpoint) {
    var root = mountpoint === '/';
    var pseudo = !mountpoint;
    var node;
    if (root && FS.root) {
      throw new FS.ErrnoError(10);
    } else if (!root && !pseudo) {
      var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
      mountpoint = lookup.path;
      node = lookup.node;
      if (FS.isMountpoint(node)) {
        throw new FS.ErrnoError(10);
      }
      if (!FS.isDir(node.mode)) {
        throw new FS.ErrnoError(54);
      }
    }
    var mount = { type, opts, mountpoint, mounts: [] };
    var mountRoot = type.mount(mount);
    mountRoot.mount = mount;
    mount.root = mountRoot;
    if (root) {
      FS.root = mountRoot;
    } else if (node) {
      node.mounted = mount;
      if (node.mount) {
        node.mount.mounts.push(mount);
      }
    }
    return mountRoot;
  },
  unmount(mountpoint) {
    var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
    if (!FS.isMountpoint(lookup.node)) {
      throw new FS.ErrnoError(28);
    }
    var node = lookup.node;
    var mount = node.mounted;
    var mounts = FS.getMounts(mount);
    for (var [hash, current] of Object.entries(FS.nameTable)) {
      while (current) {
        var next = current.name_next;
        if (mounts.includes(current.mount)) {
          FS.destroyNode(current);
        }
        current = next;
      }
    }
    node.mounted = null;
    var idx = node.mount.mounts.indexOf(mount);
    node.mount.mounts.splice(idx, 1);
  },
  lookup(parent, name) {
    return parent.node_ops.lookup(parent, name);
  },
  mknod(path, mode, dev) {
    var lookup = FS.lookupPath(path, { parent: true });
    var parent = lookup.node;
    var name = PATH.basename(path);
    if (!name) {
      throw new FS.ErrnoError(28);
    }
    if (name === '.' || name === '..') {
      throw new FS.ErrnoError(20);
    }
    var errCode = FS.mayCreate(parent, name);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    if (!parent.node_ops.mknod) {
      throw new FS.ErrnoError(63);
    }
    return parent.node_ops.mknod(parent, name, mode, dev);
  },
  statfs(path) {
    return FS.statfsNode(FS.lookupPath(path, { follow: true }).node);
  },
  statfsStream(stream) {
    return FS.statfsNode(stream.node);
  },
  statfsNode(node) {
    var rtn = {
      bsize: 4096,
      frsize: 4096,
      blocks: 1e6,
      bfree: 5e5,
      bavail: 5e5,
      files: FS.nextInode,
      ffree: FS.nextInode - 1,
      fsid: 42,
      flags: 2,
      namelen: 255,
    };
    if (node.node_ops.statfs) {
      Object.assign(rtn, node.node_ops.statfs(node.mount.opts.root));
    }
    return rtn;
  },
  create(path, mode = 438) {
    mode &= 4095;
    mode |= 32768;
    return FS.mknod(path, mode, 0);
  },
  mkdir(path, mode = 511) {
    mode &= 511 | 512;
    mode |= 16384;
    return FS.mknod(path, mode, 0);
  },
  mkdirTree(path, mode) {
    var dirs = path.split('/');
    var d = '';
    for (var dir of dirs) {
      if (!dir) continue;
      if (d || PATH.isAbs(path)) d += '/';
      d += dir;
      try {
        FS.mkdir(d, mode);
      } catch (e) {
        if (e.errno != 20) throw e;
      }
    }
  },
  mkdev(path, mode, dev) {
    if (typeof dev == 'undefined') {
      dev = mode;
      mode = 438;
    }
    mode |= 8192;
    return FS.mknod(path, mode, dev);
  },
  symlink(oldpath, newpath) {
    if (!PATH_FS.resolve(oldpath)) {
      throw new FS.ErrnoError(44);
    }
    var lookup = FS.lookupPath(newpath, { parent: true });
    var parent = lookup.node;
    if (!parent) {
      throw new FS.ErrnoError(44);
    }
    var newname = PATH.basename(newpath);
    var errCode = FS.mayCreate(parent, newname);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    if (!parent.node_ops.symlink) {
      throw new FS.ErrnoError(63);
    }
    return parent.node_ops.symlink(parent, newname, oldpath);
  },
  rename(old_path, new_path) {
    var old_dirname = PATH.dirname(old_path);
    var new_dirname = PATH.dirname(new_path);
    var old_name = PATH.basename(old_path);
    var new_name = PATH.basename(new_path);
    var lookup, old_dir, new_dir;
    lookup = FS.lookupPath(old_path, { parent: true });
    old_dir = lookup.node;
    lookup = FS.lookupPath(new_path, { parent: true });
    new_dir = lookup.node;
    if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
    if (old_dir.mount !== new_dir.mount) {
      throw new FS.ErrnoError(75);
    }
    var old_node = FS.lookupNode(old_dir, old_name);
    var relative = PATH_FS.relative(old_path, new_dirname);
    if (relative.charAt(0) !== '.') {
      throw new FS.ErrnoError(28);
    }
    relative = PATH_FS.relative(new_path, old_dirname);
    if (relative.charAt(0) !== '.') {
      throw new FS.ErrnoError(55);
    }
    var new_node;
    try {
      new_node = FS.lookupNode(new_dir, new_name);
    } catch (e) {}
    if (old_node === new_node) {
      return;
    }
    var isdir = FS.isDir(old_node.mode);
    var errCode = FS.mayDelete(old_dir, old_name, isdir);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    errCode = new_node
      ? FS.mayDelete(new_dir, new_name, isdir)
      : FS.mayCreate(new_dir, new_name);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    if (!old_dir.node_ops.rename) {
      throw new FS.ErrnoError(63);
    }
    if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
      throw new FS.ErrnoError(10);
    }
    if (new_dir !== old_dir) {
      errCode = FS.nodePermissions(old_dir, 'w');
      if (errCode) {
        throw new FS.ErrnoError(errCode);
      }
    }
    FS.hashRemoveNode(old_node);
    try {
      old_dir.node_ops.rename(old_node, new_dir, new_name);
      old_node.parent = new_dir;
    } catch (e) {
      throw e;
    } finally {
      FS.hashAddNode(old_node);
    }
  },
  rmdir(path) {
    var lookup = FS.lookupPath(path, { parent: true });
    var parent = lookup.node;
    var name = PATH.basename(path);
    var node = FS.lookupNode(parent, name);
    var errCode = FS.mayDelete(parent, name, true);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    if (!parent.node_ops.rmdir) {
      throw new FS.ErrnoError(63);
    }
    if (FS.isMountpoint(node)) {
      throw new FS.ErrnoError(10);
    }
    parent.node_ops.rmdir(parent, name);
    FS.destroyNode(node);
  },
  readdir(path) {
    var lookup = FS.lookupPath(path, { follow: true });
    var node = lookup.node;
    var readdir = FS.checkOpExists(node.node_ops.readdir, 54);
    return readdir(node);
  },
  unlink(path) {
    var lookup = FS.lookupPath(path, { parent: true });
    var parent = lookup.node;
    if (!parent) {
      throw new FS.ErrnoError(44);
    }
    var name = PATH.basename(path);
    var node = FS.lookupNode(parent, name);
    var errCode = FS.mayDelete(parent, name, false);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    if (!parent.node_ops.unlink) {
      throw new FS.ErrnoError(63);
    }
    if (FS.isMountpoint(node)) {
      throw new FS.ErrnoError(10);
    }
    parent.node_ops.unlink(parent, name);
    FS.destroyNode(node);
  },
  readlink(path) {
    var lookup = FS.lookupPath(path);
    var link = lookup.node;
    if (!link) {
      throw new FS.ErrnoError(44);
    }
    if (!link.node_ops.readlink) {
      throw new FS.ErrnoError(28);
    }
    return link.node_ops.readlink(link);
  },
  stat(path, dontFollow) {
    var lookup = FS.lookupPath(path, { follow: !dontFollow });
    var node = lookup.node;
    var getattr = FS.checkOpExists(node.node_ops.getattr, 63);
    return getattr(node);
  },
  fstat(fd) {
    var stream = FS.getStreamChecked(fd);
    var node = stream.node;
    var getattr = stream.stream_ops.getattr;
    var arg = getattr ? stream : node;
    getattr ??= node.node_ops.getattr;
    FS.checkOpExists(getattr, 63);
    return getattr(arg);
  },
  lstat(path) {
    return FS.stat(path, true);
  },
  doChmod(stream, node, mode, dontFollow) {
    FS.doSetAttr(stream, node, {
      mode: (mode & 4095) | (node.mode & ~4095),
      ctime: Date.now(),
      dontFollow,
    });
  },
  chmod(path, mode, dontFollow) {
    var node;
    if (typeof path == 'string') {
      var lookup = FS.lookupPath(path, { follow: !dontFollow });
      node = lookup.node;
    } else {
      node = path;
    }
    FS.doChmod(null, node, mode, dontFollow);
  },
  lchmod(path, mode) {
    FS.chmod(path, mode, true);
  },
  fchmod(fd, mode) {
    var stream = FS.getStreamChecked(fd);
    FS.doChmod(stream, stream.node, mode, false);
  },
  doChown(stream, node, dontFollow) {
    FS.doSetAttr(stream, node, { timestamp: Date.now(), dontFollow });
  },
  chown(path, uid, gid, dontFollow) {
    var node;
    if (typeof path == 'string') {
      var lookup = FS.lookupPath(path, { follow: !dontFollow });
      node = lookup.node;
    } else {
      node = path;
    }
    FS.doChown(null, node, dontFollow);
  },
  lchown(path, uid, gid) {
    FS.chown(path, uid, gid, true);
  },
  fchown(fd, uid, gid) {
    var stream = FS.getStreamChecked(fd);
    FS.doChown(stream, stream.node, false);
  },
  doTruncate(stream, node, len) {
    if (FS.isDir(node.mode)) {
      throw new FS.ErrnoError(31);
    }
    if (!FS.isFile(node.mode)) {
      throw new FS.ErrnoError(28);
    }
    var errCode = FS.nodePermissions(node, 'w');
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    FS.doSetAttr(stream, node, { size: len, timestamp: Date.now() });
  },
  truncate(path, len) {
    if (len < 0) {
      throw new FS.ErrnoError(28);
    }
    var node;
    if (typeof path == 'string') {
      var lookup = FS.lookupPath(path, { follow: true });
      node = lookup.node;
    } else {
      node = path;
    }
    FS.doTruncate(null, node, len);
  },
  ftruncate(fd, len) {
    var stream = FS.getStreamChecked(fd);
    if (len < 0 || (stream.flags & 2097155) === 0) {
      throw new FS.ErrnoError(28);
    }
    FS.doTruncate(stream, stream.node, len);
  },
  utime(path, atime, mtime) {
    var lookup = FS.lookupPath(path, { follow: true });
    var node = lookup.node;
    var setattr = FS.checkOpExists(node.node_ops.setattr, 63);
    setattr(node, { atime, mtime });
  },
  open(path, flags, mode = 438) {
    if (path === '') {
      throw new FS.ErrnoError(44);
    }
    flags = typeof flags == 'string' ? FS_modeStringToFlags(flags) : flags;
    if (flags & 64) {
      mode = (mode & 4095) | 32768;
    } else {
      mode = 0;
    }
    var node;
    var isDirPath;
    if (typeof path == 'object') {
      node = path;
    } else {
      isDirPath = path.endsWith('/');
      var lookup = FS.lookupPath(path, {
        follow: !(flags & 131072),
        noent_okay: true,
      });
      node = lookup.node;
      path = lookup.path;
    }
    var created = false;
    if (flags & 64) {
      if (node) {
        if (flags & 128) {
          throw new FS.ErrnoError(20);
        }
      } else if (isDirPath) {
        throw new FS.ErrnoError(31);
      } else {
        node = FS.mknod(path, mode | 511, 0);
        created = true;
      }
    }
    if (!node) {
      throw new FS.ErrnoError(44);
    }
    if (FS.isChrdev(node.mode)) {
      flags &= ~512;
    }
    if (flags & 65536 && !FS.isDir(node.mode)) {
      throw new FS.ErrnoError(54);
    }
    if (!created) {
      var errCode = FS.mayOpen(node, flags);
      if (errCode) {
        throw new FS.ErrnoError(errCode);
      }
    }
    if (flags & 512 && !created) {
      FS.truncate(node, 0);
    }
    flags &= ~(128 | 512 | 131072);
    var stream = FS.createStream({
      node,
      path: FS.getPath(node),
      flags,
      seekable: true,
      position: 0,
      stream_ops: node.stream_ops,
      ungotten: [],
      error: false,
    });
    if (stream.stream_ops.open) {
      stream.stream_ops.open(stream);
    }
    if (created) {
      FS.chmod(node, mode & 511);
    }
    if (Module['logReadFiles'] && !(flags & 1)) {
      if (!(path in FS.readFiles)) {
        FS.readFiles[path] = 1;
      }
    }
    return stream;
  },
  close(stream) {
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(8);
    }
    if (stream.getdents) stream.getdents = null;
    try {
      if (stream.stream_ops.close) {
        stream.stream_ops.close(stream);
      }
    } catch (e) {
      throw e;
    } finally {
      FS.closeStream(stream.fd);
    }
    stream.fd = null;
  },
  isClosed(stream) {
    return stream.fd === null;
  },
  llseek(stream, offset, whence) {
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(8);
    }
    if (!stream.seekable || !stream.stream_ops.llseek) {
      throw new FS.ErrnoError(70);
    }
    if (whence != 0 && whence != 1 && whence != 2) {
      throw new FS.ErrnoError(28);
    }
    stream.position = stream.stream_ops.llseek(stream, offset, whence);
    stream.ungotten = [];
    return stream.position;
  },
  read(stream, buffer, offset, length, position) {
    if (length < 0 || position < 0) {
      throw new FS.ErrnoError(28);
    }
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(8);
    }
    if ((stream.flags & 2097155) === 1) {
      throw new FS.ErrnoError(8);
    }
    if (FS.isDir(stream.node.mode)) {
      throw new FS.ErrnoError(31);
    }
    if (!stream.stream_ops.read) {
      throw new FS.ErrnoError(28);
    }
    var seeking = typeof position != 'undefined';
    if (!seeking) {
      position = stream.position;
    } else if (!stream.seekable) {
      throw new FS.ErrnoError(70);
    }
    var bytesRead = stream.stream_ops.read(
      stream,
      buffer,
      offset,
      length,
      position
    );
    if (!seeking) stream.position += bytesRead;
    return bytesRead;
  },
  write(stream, buffer, offset, length, position, canOwn) {
    if (length < 0 || position < 0) {
      throw new FS.ErrnoError(28);
    }
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(8);
    }
    if ((stream.flags & 2097155) === 0) {
      throw new FS.ErrnoError(8);
    }
    if (FS.isDir(stream.node.mode)) {
      throw new FS.ErrnoError(31);
    }
    if (!stream.stream_ops.write) {
      throw new FS.ErrnoError(28);
    }
    if (stream.seekable && stream.flags & 1024) {
      FS.llseek(stream, 0, 2);
    }
    var seeking = typeof position != 'undefined';
    if (!seeking) {
      position = stream.position;
    } else if (!stream.seekable) {
      throw new FS.ErrnoError(70);
    }
    var bytesWritten = stream.stream_ops.write(
      stream,
      buffer,
      offset,
      length,
      position,
      canOwn
    );
    if (!seeking) stream.position += bytesWritten;
    return bytesWritten;
  },
  mmap(stream, length, position, prot, flags) {
    if (
      (prot & 2) !== 0 &&
      (flags & 2) === 0 &&
      (stream.flags & 2097155) !== 2
    ) {
      throw new FS.ErrnoError(2);
    }
    if ((stream.flags & 2097155) === 1) {
      throw new FS.ErrnoError(2);
    }
    if (!stream.stream_ops.mmap) {
      throw new FS.ErrnoError(43);
    }
    if (!length) {
      throw new FS.ErrnoError(28);
    }
    return stream.stream_ops.mmap(stream, length, position, prot, flags);
  },
  msync(stream, buffer, offset, length, mmapFlags) {
    if (!stream.stream_ops.msync) {
      return 0;
    }
    return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
  },
  ioctl(stream, cmd, arg) {
    if (!stream.stream_ops.ioctl) {
      throw new FS.ErrnoError(59);
    }
    return stream.stream_ops.ioctl(stream, cmd, arg);
  },
  readFile(path, opts = {}) {
    opts.flags = opts.flags || 0;
    opts.encoding = opts.encoding || 'binary';
    if (opts.encoding !== 'utf8' && opts.encoding !== 'binary') {
      abort(\`Invalid encoding type "\${opts.encoding}"\`);
    }
    var stream = FS.open(path, opts.flags);
    var stat = FS.stat(path);
    var length = stat.size;
    var buf = new Uint8Array(length);
    FS.read(stream, buf, 0, length, 0);
    if (opts.encoding === 'utf8') {
      buf = UTF8ArrayToString(buf);
    }
    FS.close(stream);
    return buf;
  },
  writeFile(path, data, opts = {}) {
    opts.flags = opts.flags || 577;
    var stream = FS.open(path, opts.flags, opts.mode);
    if (typeof data == 'string') {
      data = new Uint8Array(intArrayFromString(data, true));
    }
    if (ArrayBuffer.isView(data)) {
      FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
    } else {
      abort('Unsupported data type');
    }
    FS.close(stream);
  },
  cwd: () => FS.currentPath,
  chdir(path) {
    var lookup = FS.lookupPath(path, { follow: true });
    if (lookup.node === null) {
      throw new FS.ErrnoError(44);
    }
    if (!FS.isDir(lookup.node.mode)) {
      throw new FS.ErrnoError(54);
    }
    var errCode = FS.nodePermissions(lookup.node, 'x');
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    FS.currentPath = lookup.path;
  },
  createDefaultDirectories() {
    FS.mkdir('/tmp');
    FS.mkdir('/home');
    FS.mkdir('/home/web_user');
  },
  createDefaultDevices() {
    FS.mkdir('/dev');
    FS.registerDevice(FS.makedev(1, 3), {
      read: () => 0,
      write: (stream, buffer, offset, length, pos) => length,
      llseek: () => 0,
    });
    FS.mkdev('/dev/null', FS.makedev(1, 3));
    TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
    TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
    FS.mkdev('/dev/tty', FS.makedev(5, 0));
    FS.mkdev('/dev/tty1', FS.makedev(6, 0));
    var randomBuffer = new Uint8Array(1024),
      randomLeft = 0;
    var randomByte = () => {
      if (randomLeft === 0) {
        randomFill(randomBuffer);
        randomLeft = randomBuffer.byteLength;
      }
      return randomBuffer[--randomLeft];
    };
    FS.createDevice('/dev', 'random', randomByte);
    FS.createDevice('/dev', 'urandom', randomByte);
    FS.mkdir('/dev/shm');
    FS.mkdir('/dev/shm/tmp');
  },
  createSpecialDirectories() {
    FS.mkdir('/proc');
    var proc_self = FS.mkdir('/proc/self');
    FS.mkdir('/proc/self/fd');
    FS.mount(
      {
        mount() {
          var node = FS.createNode(proc_self, 'fd', 16895, 73);
          node.stream_ops = { llseek: MEMFS.stream_ops.llseek };
          node.node_ops = {
            lookup(parent, name) {
              var fd = +name;
              var stream = FS.getStreamChecked(fd);
              var ret = {
                parent: null,
                mount: { mountpoint: 'fake' },
                node_ops: { readlink: () => stream.path },
                id: fd + 1,
              };
              ret.parent = ret;
              return ret;
            },
            readdir() {
              return Array.from(FS.streams.entries())
                .filter(([k, v]) => v)
                .map(([k, v]) => k.toString());
            },
          };
          return node;
        },
      },
      {},
      '/proc/self/fd'
    );
  },
  createStandardStreams(input, output, error) {
    if (input) {
      FS.createDevice('/dev', 'stdin', input);
    } else {
      FS.symlink('/dev/tty', '/dev/stdin');
    }
    if (output) {
      FS.createDevice('/dev', 'stdout', null, output);
    } else {
      FS.symlink('/dev/tty', '/dev/stdout');
    }
    if (error) {
      FS.createDevice('/dev', 'stderr', null, error);
    } else {
      FS.symlink('/dev/tty1', '/dev/stderr');
    }
    var stdin = FS.open('/dev/stdin', 0);
    var stdout = FS.open('/dev/stdout', 1);
    var stderr = FS.open('/dev/stderr', 1);
  },
  staticInit() {
    FS.nameTable = new Array(4096);
    FS.mount(MEMFS, {}, '/');
    FS.createDefaultDirectories();
    FS.createDefaultDevices();
    FS.createSpecialDirectories();
    FS.filesystems = { MEMFS };
  },
  init(input, output, error) {
    FS.initialized = true;
    input ??= Module['stdin'];
    output ??= Module['stdout'];
    error ??= Module['stderr'];
    FS.createStandardStreams(input, output, error);
  },
  quit() {
    FS.initialized = false;
    for (var stream of FS.streams) {
      if (stream) {
        FS.close(stream);
      }
    }
  },
  findObject(path, dontResolveLastLink) {
    var ret = FS.analyzePath(path, dontResolveLastLink);
    if (!ret.exists) {
      return null;
    }
    return ret.object;
  },
  analyzePath(path, dontResolveLastLink) {
    try {
      var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
      path = lookup.path;
    } catch (e) {}
    var ret = {
      isRoot: false,
      exists: false,
      error: 0,
      name: null,
      path: null,
      object: null,
      parentExists: false,
      parentPath: null,
      parentObject: null,
    };
    try {
      var lookup = FS.lookupPath(path, { parent: true });
      ret.parentExists = true;
      ret.parentPath = lookup.path;
      ret.parentObject = lookup.node;
      ret.name = PATH.basename(path);
      lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
      ret.exists = true;
      ret.path = lookup.path;
      ret.object = lookup.node;
      ret.name = lookup.node.name;
      ret.isRoot = lookup.path === '/';
    } catch (e) {
      ret.error = e.errno;
    }
    return ret;
  },
  createPath(parent, path, canRead, canWrite) {
    parent = typeof parent == 'string' ? parent : FS.getPath(parent);
    var parts = path.split('/').reverse();
    while (parts.length) {
      var part = parts.pop();
      if (!part) continue;
      var current = PATH.join2(parent, part);
      try {
        FS.mkdir(current);
      } catch (e) {
        if (e.errno != 20) throw e;
      }
      parent = current;
    }
    return current;
  },
  createFile(parent, name, properties, canRead, canWrite) {
    var path = PATH.join2(
      typeof parent == 'string' ? parent : FS.getPath(parent),
      name
    );
    var mode = FS_getMode(canRead, canWrite);
    return FS.create(path, mode);
  },
  createDataFile(parent, name, data, canRead, canWrite, canOwn) {
    var path = name;
    if (parent) {
      parent = typeof parent == 'string' ? parent : FS.getPath(parent);
      path = name ? PATH.join2(parent, name) : parent;
    }
    var mode = FS_getMode(canRead, canWrite);
    var node = FS.create(path, mode);
    if (data) {
      if (typeof data == 'string') {
        var arr = new Array(data.length);
        for (var i = 0, len = data.length; i < len; ++i)
          arr[i] = data.charCodeAt(i);
        data = arr;
      }
      FS.chmod(node, mode | 146);
      var stream = FS.open(node, 577);
      FS.write(stream, data, 0, data.length, 0, canOwn);
      FS.close(stream);
      FS.chmod(node, mode);
    }
  },
  createDevice(parent, name, input, output) {
    var path = PATH.join2(
      typeof parent == 'string' ? parent : FS.getPath(parent),
      name
    );
    var mode = FS_getMode(!!input, !!output);
    FS.createDevice.major ??= 64;
    var dev = FS.makedev(FS.createDevice.major++, 0);
    FS.registerDevice(dev, {
      open(stream) {
        stream.seekable = false;
      },
      close(stream) {
        if (output?.buffer?.length) {
          output(10);
        }
      },
      read(stream, buffer, offset, length, pos) {
        var bytesRead = 0;
        for (var i = 0; i < length; i++) {
          var result;
          try {
            result = input();
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (result === undefined && bytesRead === 0) {
            throw new FS.ErrnoError(6);
          }
          if (result === null || result === undefined) break;
          bytesRead++;
          buffer[offset + i] = result;
        }
        if (bytesRead) {
          stream.node.atime = Date.now();
        }
        return bytesRead;
      },
      write(stream, buffer, offset, length, pos) {
        for (var i = 0; i < length; i++) {
          try {
            output(buffer[offset + i]);
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
        }
        if (length) {
          stream.node.mtime = stream.node.ctime = Date.now();
        }
        return i;
      },
    });
    return FS.mkdev(path, mode, dev);
  },
  forceLoadFile(obj) {
    if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
    if (globalThis.XMLHttpRequest) {
      abort(
        'Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.'
      );
    } else {
      try {
        obj.contents = readBinary(obj.url);
      } catch (e) {
        throw new FS.ErrnoError(29);
      }
    }
  },
  createLazyFile(parent, name, url, canRead, canWrite) {
    class LazyUint8Array {
      lengthKnown = false;
      chunks = [];
      get(idx) {
        if (idx > this.length - 1 || idx < 0) {
          return undefined;
        }
        var chunkOffset = idx % this.chunkSize;
        var chunkNum = (idx / this.chunkSize) | 0;
        return this.getter(chunkNum)[chunkOffset];
      }
      setDataGetter(getter) {
        this.getter = getter;
      }
      cacheLength() {
        var xhr = new XMLHttpRequest();
        xhr.open('HEAD', url, false);
        xhr.send(null);
        if (!((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304))
          abort("Couldn't load " + url + '. Status: ' + xhr.status);
        var datalength = Number(xhr.getResponseHeader('Content-length'));
        var header;
        var hasByteServing =
          (header = xhr.getResponseHeader('Accept-Ranges')) &&
          header === 'bytes';
        var usesGzip =
          (header = xhr.getResponseHeader('Content-Encoding')) &&
          header === 'gzip';
        var chunkSize = 1024 * 1024;
        if (!hasByteServing) chunkSize = datalength;
        var doXHR = (from, to) => {
          if (from > to)
            abort(
              'invalid range (' + from + ', ' + to + ') or no bytes requested!'
            );
          if (to > datalength - 1)
            abort('only ' + datalength + ' bytes available! programmer error!');
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, false);
          if (datalength !== chunkSize)
            xhr.setRequestHeader('Range', 'bytes=' + from + '-' + to);
          xhr.responseType = 'arraybuffer';
          if (xhr.overrideMimeType) {
            xhr.overrideMimeType('text/plain; charset=x-user-defined');
          }
          xhr.send(null);
          if (!((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304))
            abort("Couldn't load " + url + '. Status: ' + xhr.status);
          if (xhr.response !== undefined) {
            return new Uint8Array(xhr.response || []);
          }
          return intArrayFromString(xhr.responseText || '', true);
        };
        var lazyArray = this;
        lazyArray.setDataGetter((chunkNum) => {
          var start = chunkNum * chunkSize;
          var end = (chunkNum + 1) * chunkSize - 1;
          end = Math.min(end, datalength - 1);
          if (typeof lazyArray.chunks[chunkNum] == 'undefined') {
            lazyArray.chunks[chunkNum] = doXHR(start, end);
          }
          if (typeof lazyArray.chunks[chunkNum] == 'undefined')
            abort('doXHR failed!');
          return lazyArray.chunks[chunkNum];
        });
        if (usesGzip || !datalength) {
          chunkSize = datalength = 1;
          datalength = this.getter(0).length;
          chunkSize = datalength;
          out(
            'LazyFiles on gzip forces download of the whole file when length is accessed'
          );
        }
        this._length = datalength;
        this._chunkSize = chunkSize;
        this.lengthKnown = true;
      }
      get length() {
        if (!this.lengthKnown) {
          this.cacheLength();
        }
        return this._length;
      }
      get chunkSize() {
        if (!this.lengthKnown) {
          this.cacheLength();
        }
        return this._chunkSize;
      }
    }
    if (globalThis.XMLHttpRequest) {
      if (!ENVIRONMENT_IS_WORKER)
        abort(
          'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc'
        );
      var lazyArray = new LazyUint8Array();
      var properties = { isDevice: false, contents: lazyArray };
    } else {
      var properties = { isDevice: false, url };
    }
    var node = FS.createFile(parent, name, properties, canRead, canWrite);
    if (properties.contents) {
      node.contents = properties.contents;
    } else if (properties.url) {
      node.contents = null;
      node.url = properties.url;
    }
    Object.defineProperties(node, {
      usedBytes: {
        get: function () {
          return this.contents.length;
        },
      },
    });
    var stream_ops = {};
    for (const [key, fn] of Object.entries(node.stream_ops)) {
      stream_ops[key] = (...args) => {
        FS.forceLoadFile(node);
        return fn(...args);
      };
    }
    function writeChunks(stream, buffer, offset, length, position) {
      var contents = stream.node.contents;
      if (position >= contents.length) return 0;
      var size = Math.min(contents.length - position, length);
      if (contents.slice) {
        for (var i = 0; i < size; i++) {
          buffer[offset + i] = contents[position + i];
        }
      } else {
        for (var i = 0; i < size; i++) {
          buffer[offset + i] = contents.get(position + i);
        }
      }
      return size;
    }
    stream_ops.read = (stream, buffer, offset, length, position) => {
      FS.forceLoadFile(node);
      return writeChunks(stream, buffer, offset, length, position);
    };
    stream_ops.mmap = (stream, length, position, prot, flags) => {
      FS.forceLoadFile(node);
      var ptr = mmapAlloc(length);
      if (!ptr) {
        throw new FS.ErrnoError(48);
      }
      writeChunks(stream, HEAP8, ptr, length, position);
      return { ptr, allocated: true };
    };
    node.stream_ops = stream_ops;
    return node;
  },
};
var UTF8ToString = (ptr, maxBytesToRead, ignoreNul) => {
  ptr >>>= 0;
  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead, ignoreNul) : '';
};
var SYSCALLS = {
  DEFAULT_POLLMASK: 5,
  calculateAt(dirfd, path, allowEmpty) {
    if (PATH.isAbs(path)) {
      return path;
    }
    var dir;
    if (dirfd === -100) {
      dir = FS.cwd();
    } else {
      var dirstream = SYSCALLS.getStreamFromFD(dirfd);
      dir = dirstream.path;
    }
    if (path.length == 0) {
      if (!allowEmpty) {
        throw new FS.ErrnoError(44);
      }
      return dir;
    }
    return dir + '/' + path;
  },
  writeStat(buf, stat) {
    HEAPU32[(buf >>> 2) >>> 0] = stat.dev;
    HEAPU32[((buf + 4) >>> 2) >>> 0] = stat.mode;
    HEAPU32[((buf + 8) >>> 2) >>> 0] = stat.nlink;
    HEAPU32[((buf + 12) >>> 2) >>> 0] = stat.uid;
    HEAPU32[((buf + 16) >>> 2) >>> 0] = stat.gid;
    HEAPU32[((buf + 20) >>> 2) >>> 0] = stat.rdev;
    HEAP64[((buf + 24) >>> 3) >>> 0] = BigInt(stat.size);
    HEAP32[((buf + 32) >>> 2) >>> 0] = 4096;
    HEAP32[((buf + 36) >>> 2) >>> 0] = stat.blocks;
    var atime = stat.atime.getTime();
    var mtime = stat.mtime.getTime();
    var ctime = stat.ctime.getTime();
    HEAP64[((buf + 40) >>> 3) >>> 0] = BigInt(Math.floor(atime / 1e3));
    HEAPU32[((buf + 48) >>> 2) >>> 0] = (atime % 1e3) * 1e3 * 1e3;
    HEAP64[((buf + 56) >>> 3) >>> 0] = BigInt(Math.floor(mtime / 1e3));
    HEAPU32[((buf + 64) >>> 2) >>> 0] = (mtime % 1e3) * 1e3 * 1e3;
    HEAP64[((buf + 72) >>> 3) >>> 0] = BigInt(Math.floor(ctime / 1e3));
    HEAPU32[((buf + 80) >>> 2) >>> 0] = (ctime % 1e3) * 1e3 * 1e3;
    HEAP64[((buf + 88) >>> 3) >>> 0] = BigInt(stat.ino);
    return 0;
  },
  writeStatFs(buf, stats) {
    HEAPU32[((buf + 4) >>> 2) >>> 0] = stats.bsize;
    HEAPU32[((buf + 60) >>> 2) >>> 0] = stats.bsize;
    HEAP64[((buf + 8) >>> 3) >>> 0] = BigInt(stats.blocks);
    HEAP64[((buf + 16) >>> 3) >>> 0] = BigInt(stats.bfree);
    HEAP64[((buf + 24) >>> 3) >>> 0] = BigInt(stats.bavail);
    HEAP64[((buf + 32) >>> 3) >>> 0] = BigInt(stats.files);
    HEAP64[((buf + 40) >>> 3) >>> 0] = BigInt(stats.ffree);
    HEAPU32[((buf + 48) >>> 2) >>> 0] = stats.fsid;
    HEAPU32[((buf + 64) >>> 2) >>> 0] = stats.flags;
    HEAPU32[((buf + 56) >>> 2) >>> 0] = stats.namelen;
  },
  doMsync(addr, stream, len, flags, offset) {
    if (!FS.isFile(stream.node.mode)) {
      throw new FS.ErrnoError(43);
    }
    if (flags & 2) {
      return 0;
    }
    var buffer = HEAPU8.slice(addr, addr + len);
    FS.msync(stream, buffer, offset, len, flags);
  },
  getStreamFromFD(fd) {
    var stream = FS.getStreamChecked(fd);
    return stream;
  },
  varargs: undefined,
  getStr(ptr) {
    var ret = UTF8ToString(ptr);
    return ret;
  },
};
function ___syscall_fcntl64(fd, cmd, varargs) {
  varargs >>>= 0;
  SYSCALLS.varargs = varargs;
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    switch (cmd) {
      case 0: {
        var arg = syscallGetVarargI();
        if (arg < 0) {
          return -28;
        }
        while (FS.streams[arg]) {
          arg++;
        }
        var newStream;
        newStream = FS.dupStream(stream, arg);
        return newStream.fd;
      }
      case 1:
      case 2:
        return 0;
      case 3:
        return stream.flags;
      case 4: {
        var arg = syscallGetVarargI();
        stream.flags |= arg;
        return 0;
      }
      case 12: {
        var arg = syscallGetVarargP();
        var offset = 0;
        HEAP16[((arg + offset) >>> 1) >>> 0] = 2;
        return 0;
      }
      case 13:
      case 14:
        return 0;
    }
    return -28;
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
}
function ___syscall_ioctl(fd, op, varargs) {
  varargs >>>= 0;
  SYSCALLS.varargs = varargs;
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    switch (op) {
      case 21509: {
        if (!stream.tty) return -59;
        return 0;
      }
      case 21505: {
        if (!stream.tty) return -59;
        if (stream.tty.ops.ioctl_tcgets) {
          var termios = stream.tty.ops.ioctl_tcgets(stream);
          var argp = syscallGetVarargP();
          HEAP32[(argp >>> 2) >>> 0] = termios.c_iflag || 0;
          HEAP32[((argp + 4) >>> 2) >>> 0] = termios.c_oflag || 0;
          HEAP32[((argp + 8) >>> 2) >>> 0] = termios.c_cflag || 0;
          HEAP32[((argp + 12) >>> 2) >>> 0] = termios.c_lflag || 0;
          for (var i = 0; i < 32; i++) {
            HEAP8[(argp + i + 17) >>> 0] = termios.c_cc[i] || 0;
          }
          return 0;
        }
        return 0;
      }
      case 21510:
      case 21511:
      case 21512: {
        if (!stream.tty) return -59;
        return 0;
      }
      case 21506:
      case 21507:
      case 21508: {
        if (!stream.tty) return -59;
        if (stream.tty.ops.ioctl_tcsets) {
          var argp = syscallGetVarargP();
          var c_iflag = HEAP32[(argp >>> 2) >>> 0];
          var c_oflag = HEAP32[((argp + 4) >>> 2) >>> 0];
          var c_cflag = HEAP32[((argp + 8) >>> 2) >>> 0];
          var c_lflag = HEAP32[((argp + 12) >>> 2) >>> 0];
          var c_cc = [];
          for (var i = 0; i < 32; i++) {
            c_cc.push(HEAP8[(argp + i + 17) >>> 0]);
          }
          return stream.tty.ops.ioctl_tcsets(stream.tty, op, {
            c_iflag,
            c_oflag,
            c_cflag,
            c_lflag,
            c_cc,
          });
        }
        return 0;
      }
      case 21519: {
        if (!stream.tty) return -59;
        var argp = syscallGetVarargP();
        HEAP32[(argp >>> 2) >>> 0] = 0;
        return 0;
      }
      case 21520: {
        if (!stream.tty) return -59;
        return -28;
      }
      case 21537:
      case 21531: {
        var argp = syscallGetVarargP();
        return FS.ioctl(stream, op, argp);
      }
      case 21523: {
        if (!stream.tty) return -59;
        if (stream.tty.ops.ioctl_tiocgwinsz) {
          var winsize = stream.tty.ops.ioctl_tiocgwinsz(stream.tty);
          var argp = syscallGetVarargP();
          HEAP16[(argp >>> 1) >>> 0] = winsize[0];
          HEAP16[((argp + 2) >>> 1) >>> 0] = winsize[1];
        }
        return 0;
      }
      case 21524: {
        if (!stream.tty) return -59;
        return 0;
      }
      case 21515: {
        if (!stream.tty) return -59;
        return 0;
      }
      default:
        return -28;
    }
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
}
function ___syscall_openat(dirfd, path, flags, varargs) {
  path >>>= 0;
  varargs >>>= 0;
  SYSCALLS.varargs = varargs;
  try {
    path = SYSCALLS.getStr(path);
    path = SYSCALLS.calculateAt(dirfd, path);
    var mode = varargs ? syscallGetVarargI() : 0;
    return FS.open(path, flags, mode).fd;
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
}
var __abort_js = () => abort('');
var runtimeKeepaliveCounter = 0;
var __emscripten_runtime_keepalive_clear = () => {
  noExitRuntime = false;
  runtimeKeepaliveCounter = 0;
};
function __mmap_js(len, prot, flags, fd, offset, allocated, addr) {
  len >>>= 0;
  offset = bigintToI53Checked(offset);
  allocated >>>= 0;
  addr >>>= 0;
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    var res = FS.mmap(stream, len, offset, prot, flags);
    var ptr = res.ptr;
    HEAP32[(allocated >>> 2) >>> 0] = res.allocated;
    HEAPU32[(addr >>> 2) >>> 0] = ptr;
    return 0;
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
}
function __munmap_js(addr, len, prot, flags, fd, offset) {
  addr >>>= 0;
  len >>>= 0;
  offset = bigintToI53Checked(offset);
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    if (prot & 2) {
      SYSCALLS.doMsync(addr, stream, len, flags, offset);
    }
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
}
var timers = {};
var handleException = (e) => {
  if (e instanceof ExitStatus || e == 'unwind') {
    return EXITSTATUS;
  }
  quit_(1, e);
};
var keepRuntimeAlive = () => noExitRuntime || runtimeKeepaliveCounter > 0;
var _proc_exit = (code) => {
  EXITSTATUS = code;
  if (!keepRuntimeAlive()) {
    Module['onExit']?.(code);
    ABORT = true;
  }
  quit_(code, new ExitStatus(code));
};
var exitJS = (status, implicit) => {
  EXITSTATUS = status;
  _proc_exit(status);
};
var _exit = exitJS;
var maybeExit = () => {
  if (!keepRuntimeAlive()) {
    try {
      _exit(EXITSTATUS);
    } catch (e) {
      handleException(e);
    }
  }
};
var callUserCallback = (func) => {
  if (ABORT) {
    return;
  }
  try {
    func();
    maybeExit();
  } catch (e) {
    handleException(e);
  }
};
var _emscripten_get_now = () => performance.now();
var __setitimer_js = (which, timeout_ms) => {
  if (timers[which]) {
    clearTimeout(timers[which].id);
    delete timers[which];
  }
  if (!timeout_ms) return 0;
  var id = setTimeout(() => {
    delete timers[which];
    callUserCallback(() => __emscripten_timeout(which, _emscripten_get_now()));
  }, timeout_ms);
  timers[which] = { id, timeout_ms };
  return 0;
};
var stringToUTF8 = (str, outPtr, maxBytesToWrite) =>
  stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
var __tzset_js = function (timezone, daylight, std_name, dst_name) {
  timezone >>>= 0;
  daylight >>>= 0;
  std_name >>>= 0;
  dst_name >>>= 0;
  var currentYear = new Date().getFullYear();
  var winter = new Date(currentYear, 0, 1);
  var summer = new Date(currentYear, 6, 1);
  var winterOffset = winter.getTimezoneOffset();
  var summerOffset = summer.getTimezoneOffset();
  var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
  HEAPU32[(timezone >>> 2) >>> 0] = stdTimezoneOffset * 60;
  HEAP32[(daylight >>> 2) >>> 0] = Number(winterOffset != summerOffset);
  var extractZone = (timezoneOffset) => {
    var sign = timezoneOffset >= 0 ? '-' : '+';
    var absOffset = Math.abs(timezoneOffset);
    var hours = String(Math.floor(absOffset / 60)).padStart(2, '0');
    var minutes = String(absOffset % 60).padStart(2, '0');
    return \`UTC\${sign}\${hours}\${minutes}\`;
  };
  var winterName = extractZone(winterOffset);
  var summerName = extractZone(summerOffset);
  if (summerOffset < winterOffset) {
    stringToUTF8(winterName, std_name, 17);
    stringToUTF8(summerName, dst_name, 17);
  } else {
    stringToUTF8(winterName, dst_name, 17);
    stringToUTF8(summerName, std_name, 17);
  }
};
var _emscripten_date_now = () => Date.now();
var nowIsMonotonic = 1;
var checkWasiClock = (clock_id) => clock_id >= 0 && clock_id <= 3;
function _clock_time_get(clk_id, ignored_precision, ptime) {
  ignored_precision = bigintToI53Checked(ignored_precision);
  ptime >>>= 0;
  if (!checkWasiClock(clk_id)) {
    return 28;
  }
  var now;
  if (clk_id === 0) {
    now = _emscripten_date_now();
  } else if (nowIsMonotonic) {
    now = _emscripten_get_now();
  } else {
    return 52;
  }
  var nsec = Math.round(now * 1e3 * 1e3);
  HEAP64[(ptime >>> 3) >>> 0] = BigInt(nsec);
  return 0;
}
var getHeapMax = () => 4294901760;
function _emscripten_get_heap_max() {
  return getHeapMax();
}
var _emscripten_has_asyncify = () => 1;
var growMemory = (size) => {
  var oldHeapSize = wasmMemory.buffer.byteLength;
  var pages = ((size - oldHeapSize + 65535) / 65536) | 0;
  try {
    wasmMemory.grow(pages);
    updateMemoryViews();
    return 1;
  } catch (e) {}
};
function _emscripten_resize_heap(requestedSize) {
  requestedSize >>>= 0;
  var oldSize = HEAPU8.length;
  var maxHeapSize = getHeapMax();
  if (requestedSize > maxHeapSize) {
    return false;
  }
  for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
    var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
    overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
    var newSize = Math.min(
      maxHeapSize,
      alignMemory(Math.max(requestedSize, overGrownHeapSize), 65536)
    );
    var replacement = growMemory(newSize);
    if (replacement) {
      return true;
    }
  }
  return false;
}
var stackAlloc = (sz) => __emscripten_stack_alloc(sz);
var stringToUTF8OnStack = (str) => {
  var size = lengthBytesUTF8(str) + 1;
  var ret = stackAlloc(size);
  stringToUTF8(str, ret, size);
  return ret;
};
var writeI53ToI64 = (ptr, num) => {
  HEAPU32[(ptr >>> 2) >>> 0] = num;
  var lower = HEAPU32[(ptr >>> 2) >>> 0];
  HEAPU32[((ptr + 4) >>> 2) >>> 0] = (num - lower) / 4294967296;
};
var stringToNewUTF8 = (str) => {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _malloc(size);
  if (ret) stringToUTF8(str, ret, size);
  return ret;
};
var readI53FromI64 = (ptr) =>
  HEAPU32[(ptr >>> 2) >>> 0] + HEAP32[((ptr + 4) >>> 2) >>> 0] * 4294967296;
var WebGPU = {
  Internals: {
    jsObjects: [],
    jsObjectInsert: (ptr, jsObject) => {
      ptr >>>= 0;
      WebGPU.Internals.jsObjects[ptr] = jsObject;
    },
    bufferOnUnmaps: [],
    futures: [],
    futureInsert: (futureId, promise) => {
      WebGPU.Internals.futures[futureId] = new Promise((resolve) =>
        promise.finally(() => resolve(futureId))
      );
    },
  },
  getJsObject: (ptr) => {
    if (!ptr) return undefined;
    ptr >>>= 0;
    return WebGPU.Internals.jsObjects[ptr];
  },
  importJsAdapter: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateAdapter(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsBindGroup: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateBindGroup(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsBindGroupLayout: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateBindGroupLayout(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsBuffer: (buffer, parentPtr = 0) => {
    assert(buffer.mapState === 'unmapped');
    var bufferPtr = _emwgpuCreateBuffer(parentPtr);
    WebGPU.Internals.jsObjectInsert(bufferPtr, buffer);
    return bufferPtr;
  },
  importJsCommandBuffer: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateCommandBuffer(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsCommandEncoder: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateCommandEncoder(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsComputePassEncoder: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateComputePassEncoder(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsComputePipeline: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateComputePipeline(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsDevice: (device, parentPtr = 0) => {
    var queuePtr = _emwgpuCreateQueue(parentPtr);
    var devicePtr = _emwgpuCreateDevice(parentPtr, queuePtr);
    WebGPU.Internals.jsObjectInsert(queuePtr, device.queue);
    WebGPU.Internals.jsObjectInsert(devicePtr, device);
    return devicePtr;
  },
  importJsExternalTexture: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateExternalTexture(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsPipelineLayout: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreatePipelineLayout(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsQuerySet: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateQuerySet(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsQueue: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateQueue(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsRenderBundle: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateRenderBundle(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsRenderBundleEncoder: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateRenderBundleEncoder(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsRenderPassEncoder: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateRenderPassEncoder(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsRenderPipeline: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateRenderPipeline(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsSampler: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateSampler(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsShaderModule: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateShaderModule(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsSurface: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateSurface(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsTexture: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateTexture(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsTextureView: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateTextureView(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  errorCallback: (callback, type, message, userdata) => {
    var sp = stackSave();
    var messagePtr = stringToUTF8OnStack(message);
    ((a1, a2, a3) => dynCall_viii(callback, a1, a2, a3))(
      type,
      messagePtr,
      userdata
    );
    stackRestore(sp);
  },
  iterateExtensions: (root, handlers) => {
    for (
      var ptr = HEAPU32[(root >>> 2) >>> 0];
      ptr;
      ptr = HEAPU32[(ptr >>> 2) >>> 0]
    ) {
      var sType = HEAP32[((ptr + 4) >>> 2) >>> 0];
      var handler = handlers[sType](ptr);
    }
  },
  setStringView: (ptr, data, length) => {
    HEAPU32[(ptr >>> 2) >>> 0] = data;
    HEAPU32[((ptr + 4) >>> 2) >>> 0] = length;
  },
  makeStringFromStringView: (stringViewPtr) => {
    var ptr = HEAPU32[(stringViewPtr >>> 2) >>> 0];
    var length = HEAPU32[((stringViewPtr + 4) >>> 2) >>> 0];
    return UTF8ToString(ptr, length);
  },
  makeStringFromOptionalStringView: (stringViewPtr) => {
    var ptr = HEAPU32[(stringViewPtr >>> 2) >>> 0];
    var length = HEAPU32[((stringViewPtr + 4) >>> 2) >>> 0];
    if (!ptr) {
      if (length === 0) {
        return '';
      }
      return undefined;
    }
    return UTF8ToString(ptr, length);
  },
  makeColor: (ptr) => ({
    r: HEAPF64[(ptr >>> 3) >>> 0],
    g: HEAPF64[((ptr + 8) >>> 3) >>> 0],
    b: HEAPF64[((ptr + 16) >>> 3) >>> 0],
    a: HEAPF64[((ptr + 24) >>> 3) >>> 0],
  }),
  makeExtent3D: (ptr) => ({
    width: HEAPU32[(ptr >>> 2) >>> 0],
    height: HEAPU32[((ptr + 4) >>> 2) >>> 0],
    depthOrArrayLayers: HEAPU32[((ptr + 8) >>> 2) >>> 0],
  }),
  makeOrigin3D: (ptr) => ({
    x: HEAPU32[(ptr >>> 2) >>> 0],
    y: HEAPU32[((ptr + 4) >>> 2) >>> 0],
    z: HEAPU32[((ptr + 8) >>> 2) >>> 0],
  }),
  makeTexelCopyTextureInfo: (ptr) => ({
    texture: WebGPU.getJsObject(HEAPU32[(ptr >>> 2) >>> 0]),
    mipLevel: HEAPU32[((ptr + 4) >>> 2) >>> 0],
    origin: WebGPU.makeOrigin3D(ptr + 8),
    aspect: WebGPU.TextureAspect[HEAP32[((ptr + 20) >>> 2) >>> 0]],
  }),
  makeTexelCopyBufferLayout: (ptr) => {
    var bytesPerRow = HEAPU32[((ptr + 8) >>> 2) >>> 0];
    var rowsPerImage = HEAPU32[((ptr + 12) >>> 2) >>> 0];
    return {
      offset: readI53FromI64(ptr),
      bytesPerRow: bytesPerRow === 4294967295 ? undefined : bytesPerRow,
      rowsPerImage: rowsPerImage === 4294967295 ? undefined : rowsPerImage,
    };
  },
  makeTexelCopyBufferInfo: (ptr) => {
    var layoutPtr = ptr + 0;
    var bufferCopyView = WebGPU.makeTexelCopyBufferLayout(layoutPtr);
    bufferCopyView['buffer'] = WebGPU.getJsObject(
      HEAPU32[((ptr + 16) >>> 2) >>> 0]
    );
    return bufferCopyView;
  },
  makePassTimestampWrites: (ptr) => {
    if (ptr === 0) return undefined;
    return {
      querySet: WebGPU.getJsObject(HEAPU32[((ptr + 4) >>> 2) >>> 0]),
      beginningOfPassWriteIndex: HEAPU32[((ptr + 8) >>> 2) >>> 0],
      endOfPassWriteIndex: HEAPU32[((ptr + 12) >>> 2) >>> 0],
    };
  },
  makePipelineConstants: (constantCount, constantsPtr) => {
    if (!constantCount) return;
    var constants = {};
    for (var i = 0; i < constantCount; ++i) {
      var entryPtr = constantsPtr + 24 * i;
      var key = WebGPU.makeStringFromStringView(entryPtr + 4);
      constants[key] = HEAPF64[((entryPtr + 16) >>> 3) >>> 0];
    }
    return constants;
  },
  makePipelineLayout: (layoutPtr) => {
    if (!layoutPtr) return 'auto';
    return WebGPU.getJsObject(layoutPtr);
  },
  makeComputeState: (ptr) => {
    if (!ptr) return undefined;
    var desc = {
      module: WebGPU.getJsObject(HEAPU32[((ptr + 4) >>> 2) >>> 0]),
      constants: WebGPU.makePipelineConstants(
        HEAPU32[((ptr + 16) >>> 2) >>> 0],
        HEAPU32[((ptr + 20) >>> 2) >>> 0]
      ),
      entryPoint: WebGPU.makeStringFromOptionalStringView(ptr + 8),
    };
    return desc;
  },
  makeComputePipelineDesc: (descriptor) => {
    var desc = {
      label: WebGPU.makeStringFromOptionalStringView(descriptor + 4),
      layout: WebGPU.makePipelineLayout(
        HEAPU32[((descriptor + 12) >>> 2) >>> 0]
      ),
      compute: WebGPU.makeComputeState(descriptor + 16),
    };
    return desc;
  },
  makeRenderPipelineDesc: (descriptor) => {
    function makePrimitiveState(psPtr) {
      if (!psPtr) return undefined;
      return {
        topology: WebGPU.PrimitiveTopology[HEAP32[((psPtr + 4) >>> 2) >>> 0]],
        stripIndexFormat: WebGPU.IndexFormat[HEAP32[((psPtr + 8) >>> 2) >>> 0]],
        frontFace: WebGPU.FrontFace[HEAP32[((psPtr + 12) >>> 2) >>> 0]],
        cullMode: WebGPU.CullMode[HEAP32[((psPtr + 16) >>> 2) >>> 0]],
        unclippedDepth: !!HEAPU32[((psPtr + 20) >>> 2) >>> 0],
      };
    }
    function makeBlendComponent(bdPtr) {
      if (!bdPtr) return undefined;
      return {
        operation: WebGPU.BlendOperation[HEAP32[(bdPtr >>> 2) >>> 0]],
        srcFactor: WebGPU.BlendFactor[HEAP32[((bdPtr + 4) >>> 2) >>> 0]],
        dstFactor: WebGPU.BlendFactor[HEAP32[((bdPtr + 8) >>> 2) >>> 0]],
      };
    }
    function makeBlendState(bsPtr) {
      if (!bsPtr) return undefined;
      return {
        alpha: makeBlendComponent(bsPtr + 12),
        color: makeBlendComponent(bsPtr + 0),
      };
    }
    function makeColorState(csPtr) {
      var format = WebGPU.TextureFormat[HEAP32[((csPtr + 4) >>> 2) >>> 0]];
      return format
        ? {
            format,
            blend: makeBlendState(HEAPU32[((csPtr + 8) >>> 2) >>> 0]),
            writeMask: HEAPU32[((csPtr + 16) >>> 2) >>> 0],
          }
        : undefined;
    }
    function makeColorStates(count, csArrayPtr) {
      var states = [];
      for (var i = 0; i < count; ++i) {
        states.push(makeColorState(csArrayPtr + 24 * i));
      }
      return states;
    }
    function makeStencilStateFace(ssfPtr) {
      return {
        compare: WebGPU.CompareFunction[HEAP32[(ssfPtr >>> 2) >>> 0]],
        failOp: WebGPU.StencilOperation[HEAP32[((ssfPtr + 4) >>> 2) >>> 0]],
        depthFailOp:
          WebGPU.StencilOperation[HEAP32[((ssfPtr + 8) >>> 2) >>> 0]],
        passOp: WebGPU.StencilOperation[HEAP32[((ssfPtr + 12) >>> 2) >>> 0]],
      };
    }
    function makeDepthStencilState(dssPtr) {
      if (!dssPtr) return undefined;
      return {
        format: WebGPU.TextureFormat[HEAP32[((dssPtr + 4) >>> 2) >>> 0]],
        depthWriteEnabled: !!HEAPU32[((dssPtr + 8) >>> 2) >>> 0],
        depthCompare:
          WebGPU.CompareFunction[HEAP32[((dssPtr + 12) >>> 2) >>> 0]],
        stencilFront: makeStencilStateFace(dssPtr + 16),
        stencilBack: makeStencilStateFace(dssPtr + 32),
        stencilReadMask: HEAPU32[((dssPtr + 48) >>> 2) >>> 0],
        stencilWriteMask: HEAPU32[((dssPtr + 52) >>> 2) >>> 0],
        depthBias: HEAP32[((dssPtr + 56) >>> 2) >>> 0],
        depthBiasSlopeScale: HEAPF32[((dssPtr + 60) >>> 2) >>> 0],
        depthBiasClamp: HEAPF32[((dssPtr + 64) >>> 2) >>> 0],
      };
    }
    function makeVertexAttribute(vaPtr) {
      return {
        format: WebGPU.VertexFormat[HEAP32[((vaPtr + 4) >>> 2) >>> 0]],
        offset: readI53FromI64(vaPtr + 8),
        shaderLocation: HEAPU32[((vaPtr + 16) >>> 2) >>> 0],
      };
    }
    function makeVertexAttributes(count, vaArrayPtr) {
      var vas = [];
      for (var i = 0; i < count; ++i) {
        vas.push(makeVertexAttribute(vaArrayPtr + i * 24));
      }
      return vas;
    }
    function makeVertexBuffer(vbPtr) {
      if (!vbPtr) return undefined;
      var stepMode = WebGPU.VertexStepMode[HEAP32[((vbPtr + 4) >>> 2) >>> 0]];
      var attributeCount = HEAPU32[((vbPtr + 16) >>> 2) >>> 0];
      if (!stepMode && !attributeCount) {
        return null;
      }
      return {
        arrayStride: readI53FromI64(vbPtr + 8),
        stepMode,
        attributes: makeVertexAttributes(
          attributeCount,
          HEAPU32[((vbPtr + 20) >>> 2) >>> 0]
        ),
      };
    }
    function makeVertexBuffers(count, vbArrayPtr) {
      if (!count) return undefined;
      var vbs = [];
      for (var i = 0; i < count; ++i) {
        vbs.push(makeVertexBuffer(vbArrayPtr + i * 24));
      }
      return vbs;
    }
    function makeVertexState(viPtr) {
      if (!viPtr) return undefined;
      var desc = {
        module: WebGPU.getJsObject(HEAPU32[((viPtr + 4) >>> 2) >>> 0]),
        constants: WebGPU.makePipelineConstants(
          HEAPU32[((viPtr + 16) >>> 2) >>> 0],
          HEAPU32[((viPtr + 20) >>> 2) >>> 0]
        ),
        buffers: makeVertexBuffers(
          HEAPU32[((viPtr + 24) >>> 2) >>> 0],
          HEAPU32[((viPtr + 28) >>> 2) >>> 0]
        ),
        entryPoint: WebGPU.makeStringFromOptionalStringView(viPtr + 8),
      };
      return desc;
    }
    function makeMultisampleState(msPtr) {
      if (!msPtr) return undefined;
      return {
        count: HEAPU32[((msPtr + 4) >>> 2) >>> 0],
        mask: HEAPU32[((msPtr + 8) >>> 2) >>> 0],
        alphaToCoverageEnabled: !!HEAPU32[((msPtr + 12) >>> 2) >>> 0],
      };
    }
    function makeFragmentState(fsPtr) {
      if (!fsPtr) return undefined;
      var desc = {
        module: WebGPU.getJsObject(HEAPU32[((fsPtr + 4) >>> 2) >>> 0]),
        constants: WebGPU.makePipelineConstants(
          HEAPU32[((fsPtr + 16) >>> 2) >>> 0],
          HEAPU32[((fsPtr + 20) >>> 2) >>> 0]
        ),
        targets: makeColorStates(
          HEAPU32[((fsPtr + 24) >>> 2) >>> 0],
          HEAPU32[((fsPtr + 28) >>> 2) >>> 0]
        ),
        entryPoint: WebGPU.makeStringFromOptionalStringView(fsPtr + 8),
      };
      return desc;
    }
    var desc = {
      label: WebGPU.makeStringFromOptionalStringView(descriptor + 4),
      layout: WebGPU.makePipelineLayout(
        HEAPU32[((descriptor + 12) >>> 2) >>> 0]
      ),
      vertex: makeVertexState(descriptor + 16),
      primitive: makePrimitiveState(descriptor + 48),
      depthStencil: makeDepthStencilState(
        HEAPU32[((descriptor + 72) >>> 2) >>> 0]
      ),
      multisample: makeMultisampleState(descriptor + 76),
      fragment: makeFragmentState(HEAPU32[((descriptor + 92) >>> 2) >>> 0]),
    };
    return desc;
  },
  fillLimitStruct: (limits, limitsOutPtr) => {
    var nextInChainPtr = HEAPU32[(limitsOutPtr >>> 2) >>> 0];
    function setLimitValueU32(name, basePtr, limitOffset, fallbackValue = 0) {
      var limitValue = limits[name] ?? fallbackValue;
      HEAPU32[((basePtr + limitOffset) >>> 2) >>> 0] = limitValue;
    }
    function setLimitValueU64(name, basePtr, limitOffset, fallbackValue = 0) {
      var limitValue = limits[name] ?? fallbackValue;
      writeI53ToI64(basePtr + limitOffset, limitValue);
    }
    setLimitValueU32('maxTextureDimension1D', limitsOutPtr, 4);
    setLimitValueU32('maxTextureDimension2D', limitsOutPtr, 8);
    setLimitValueU32('maxTextureDimension3D', limitsOutPtr, 12);
    setLimitValueU32('maxTextureArrayLayers', limitsOutPtr, 16);
    setLimitValueU32('maxBindGroups', limitsOutPtr, 20);
    setLimitValueU32('maxBindGroupsPlusVertexBuffers', limitsOutPtr, 24);
    setLimitValueU32('maxBindingsPerBindGroup', limitsOutPtr, 28);
    setLimitValueU32(
      'maxDynamicUniformBuffersPerPipelineLayout',
      limitsOutPtr,
      32
    );
    setLimitValueU32(
      'maxDynamicStorageBuffersPerPipelineLayout',
      limitsOutPtr,
      36
    );
    setLimitValueU32('maxSampledTexturesPerShaderStage', limitsOutPtr, 40);
    setLimitValueU32('maxSamplersPerShaderStage', limitsOutPtr, 44);
    setLimitValueU32('maxStorageBuffersPerShaderStage', limitsOutPtr, 48);
    setLimitValueU32('maxStorageTexturesPerShaderStage', limitsOutPtr, 52);
    setLimitValueU32('maxUniformBuffersPerShaderStage', limitsOutPtr, 56);
    setLimitValueU32('minUniformBufferOffsetAlignment', limitsOutPtr, 80);
    setLimitValueU32('minStorageBufferOffsetAlignment', limitsOutPtr, 84);
    setLimitValueU64('maxUniformBufferBindingSize', limitsOutPtr, 64);
    setLimitValueU64('maxStorageBufferBindingSize', limitsOutPtr, 72);
    setLimitValueU32('maxVertexBuffers', limitsOutPtr, 88);
    setLimitValueU64('maxBufferSize', limitsOutPtr, 96);
    setLimitValueU32('maxVertexAttributes', limitsOutPtr, 104);
    setLimitValueU32('maxVertexBufferArrayStride', limitsOutPtr, 108);
    setLimitValueU32('maxInterStageShaderVariables', limitsOutPtr, 112);
    setLimitValueU32('maxColorAttachments', limitsOutPtr, 116);
    setLimitValueU32('maxColorAttachmentBytesPerSample', limitsOutPtr, 120);
    setLimitValueU32('maxComputeWorkgroupStorageSize', limitsOutPtr, 124);
    setLimitValueU32('maxComputeInvocationsPerWorkgroup', limitsOutPtr, 128);
    setLimitValueU32('maxComputeWorkgroupSizeX', limitsOutPtr, 132);
    setLimitValueU32('maxComputeWorkgroupSizeY', limitsOutPtr, 136);
    setLimitValueU32('maxComputeWorkgroupSizeZ', limitsOutPtr, 140);
    setLimitValueU32('maxComputeWorkgroupsPerDimension', limitsOutPtr, 144);
    setLimitValueU32('maxImmediateSize', limitsOutPtr, 148);
    if (nextInChainPtr !== 0) {
      var sType = HEAP32[((nextInChainPtr + 4) >>> 2) >>> 0];
      var compatibilityModeLimitsPtr = nextInChainPtr;
      setLimitValueU32(
        'maxStorageBuffersInVertexStage',
        compatibilityModeLimitsPtr,
        8,
        limits.maxStorageBuffersPerShaderStage
      );
      setLimitValueU32(
        'maxStorageBuffersInFragmentStage',
        compatibilityModeLimitsPtr,
        16,
        limits.maxStorageBuffersPerShaderStage
      );
      setLimitValueU32(
        'maxStorageTexturesInVertexStage',
        compatibilityModeLimitsPtr,
        12,
        limits.maxStorageTexturesPerShaderStage
      );
      setLimitValueU32(
        'maxStorageTexturesInFragmentStage',
        compatibilityModeLimitsPtr,
        20,
        limits.maxStorageTexturesPerShaderStage
      );
    }
  },
  fillAdapterInfoStruct: (info, infoStruct) => {
    HEAPU32[((infoStruct + 52) >>> 2) >>> 0] = info.subgroupMinSize;
    HEAPU32[((infoStruct + 56) >>> 2) >>> 0] = info.subgroupMaxSize;
    var strs = info.vendor + info.architecture + info.device + info.description;
    var strPtr = stringToNewUTF8(strs);
    var vendorLen = lengthBytesUTF8(info.vendor);
    WebGPU.setStringView(infoStruct + 4, strPtr, vendorLen);
    strPtr += vendorLen;
    var architectureLen = lengthBytesUTF8(info.architecture);
    WebGPU.setStringView(infoStruct + 12, strPtr, architectureLen);
    strPtr += architectureLen;
    var deviceLen = lengthBytesUTF8(info.device);
    WebGPU.setStringView(infoStruct + 20, strPtr, deviceLen);
    strPtr += deviceLen;
    var descriptionLen = lengthBytesUTF8(info.description);
    WebGPU.setStringView(infoStruct + 28, strPtr, descriptionLen);
    strPtr += descriptionLen;
    HEAP32[((infoStruct + 36) >>> 2) >>> 0] = 2;
    var adapterType = info.isFallbackAdapter ? 3 : 4;
    HEAP32[((infoStruct + 40) >>> 2) >>> 0] = adapterType;
    HEAPU32[((infoStruct + 44) >>> 2) >>> 0] = 0;
    HEAPU32[((infoStruct + 48) >>> 2) >>> 0] = 0;
  },
  AddressMode: [, 'clamp-to-edge', 'repeat', 'mirror-repeat'],
  BlendFactor: [
    ,
    'zero',
    'one',
    'src',
    'one-minus-src',
    'src-alpha',
    'one-minus-src-alpha',
    'dst',
    'one-minus-dst',
    'dst-alpha',
    'one-minus-dst-alpha',
    'src-alpha-saturated',
    'constant',
    'one-minus-constant',
    'src1',
    'one-minus-src1',
    'src1-alpha',
    'one-minus-src1-alpha',
  ],
  BlendOperation: [, 'add', 'subtract', 'reverse-subtract', 'min', 'max'],
  BufferBindingType: [, , 'uniform', 'storage', 'read-only-storage'],
  BufferMapState: [, 'unmapped', 'pending', 'mapped'],
  CompareFunction: [
    ,
    'never',
    'less',
    'equal',
    'less-equal',
    'greater',
    'not-equal',
    'greater-equal',
    'always',
  ],
  CompilationInfoRequestStatus: [, 'success', 'callback-cancelled'],
  ComponentSwizzle: [, '0', '1', 'r', 'g', 'b', 'a'],
  CompositeAlphaMode: [
    ,
    'opaque',
    'premultiplied',
    'unpremultiplied',
    'inherit',
  ],
  CullMode: [, 'none', 'front', 'back'],
  ErrorFilter: [, 'validation', 'out-of-memory', 'internal'],
  FeatureLevel: [, 'compatibility', 'core'],
  FeatureName: {
    1: 'core-features-and-limits',
    2: 'depth-clip-control',
    3: 'depth32float-stencil8',
    4: 'texture-compression-bc',
    5: 'texture-compression-bc-sliced-3d',
    6: 'texture-compression-etc2',
    7: 'texture-compression-astc',
    8: 'texture-compression-astc-sliced-3d',
    9: 'timestamp-query',
    10: 'indirect-first-instance',
    11: 'shader-f16',
    12: 'rg11b10ufloat-renderable',
    13: 'bgra8unorm-storage',
    14: 'float32-filterable',
    15: 'float32-blendable',
    16: 'clip-distances',
    17: 'dual-source-blending',
    18: 'subgroups',
    19: 'texture-formats-tier1',
    20: 'texture-formats-tier2',
    21: 'primitive-index',
    22: 'texture-component-swizzle',
    327692: 'chromium-experimental-unorm16-texture-formats',
    327729: 'chromium-experimental-multi-draw-indirect',
  },
  FilterMode: [, 'nearest', 'linear'],
  FrontFace: [, 'ccw', 'cw'],
  IndexFormat: [, 'uint16', 'uint32'],
  InstanceFeatureName: [
    ,
    'timed-wait-any',
    'shader-source-spirv',
    'multiple-devices-per-adapter',
  ],
  LoadOp: [, 'load', 'clear'],
  MipmapFilterMode: [, 'nearest', 'linear'],
  OptionalBool: ['false', 'true'],
  PowerPreference: [, 'low-power', 'high-performance'],
  PredefinedColorSpace: [, 'srgb', 'display-p3'],
  PrimitiveTopology: [
    ,
    'point-list',
    'line-list',
    'line-strip',
    'triangle-list',
    'triangle-strip',
  ],
  QueryType: [, 'occlusion', 'timestamp'],
  SamplerBindingType: [, , 'filtering', 'non-filtering', 'comparison'],
  Status: [, 'success', 'error'],
  StencilOperation: [
    ,
    'keep',
    'zero',
    'replace',
    'invert',
    'increment-clamp',
    'decrement-clamp',
    'increment-wrap',
    'decrement-wrap',
  ],
  StorageTextureAccess: [, , 'write-only', 'read-only', 'read-write'],
  StoreOp: [, 'store', 'discard'],
  SurfaceGetCurrentTextureStatus: [
    ,
    'success-optimal',
    'success-suboptimal',
    'timeout',
    'outdated',
    'lost',
    'error',
  ],
  TextureAspect: [, 'all', 'stencil-only', 'depth-only'],
  TextureDimension: [, '1d', '2d', '3d'],
  TextureFormat: [
    ,
    'r8unorm',
    'r8snorm',
    'r8uint',
    'r8sint',
    'r16unorm',
    'r16snorm',
    'r16uint',
    'r16sint',
    'r16float',
    'rg8unorm',
    'rg8snorm',
    'rg8uint',
    'rg8sint',
    'r32float',
    'r32uint',
    'r32sint',
    'rg16unorm',
    'rg16snorm',
    'rg16uint',
    'rg16sint',
    'rg16float',
    'rgba8unorm',
    'rgba8unorm-srgb',
    'rgba8snorm',
    'rgba8uint',
    'rgba8sint',
    'bgra8unorm',
    'bgra8unorm-srgb',
    'rgb10a2uint',
    'rgb10a2unorm',
    'rg11b10ufloat',
    'rgb9e5ufloat',
    'rg32float',
    'rg32uint',
    'rg32sint',
    'rgba16unorm',
    'rgba16snorm',
    'rgba16uint',
    'rgba16sint',
    'rgba16float',
    'rgba32float',
    'rgba32uint',
    'rgba32sint',
    'stencil8',
    'depth16unorm',
    'depth24plus',
    'depth24plus-stencil8',
    'depth32float',
    'depth32float-stencil8',
    'bc1-rgba-unorm',
    'bc1-rgba-unorm-srgb',
    'bc2-rgba-unorm',
    'bc2-rgba-unorm-srgb',
    'bc3-rgba-unorm',
    'bc3-rgba-unorm-srgb',
    'bc4-r-unorm',
    'bc4-r-snorm',
    'bc5-rg-unorm',
    'bc5-rg-snorm',
    'bc6h-rgb-ufloat',
    'bc6h-rgb-float',
    'bc7-rgba-unorm',
    'bc7-rgba-unorm-srgb',
    'etc2-rgb8unorm',
    'etc2-rgb8unorm-srgb',
    'etc2-rgb8a1unorm',
    'etc2-rgb8a1unorm-srgb',
    'etc2-rgba8unorm',
    'etc2-rgba8unorm-srgb',
    'eac-r11unorm',
    'eac-r11snorm',
    'eac-rg11unorm',
    'eac-rg11snorm',
    'astc-4x4-unorm',
    'astc-4x4-unorm-srgb',
    'astc-5x4-unorm',
    'astc-5x4-unorm-srgb',
    'astc-5x5-unorm',
    'astc-5x5-unorm-srgb',
    'astc-6x5-unorm',
    'astc-6x5-unorm-srgb',
    'astc-6x6-unorm',
    'astc-6x6-unorm-srgb',
    'astc-8x5-unorm',
    'astc-8x5-unorm-srgb',
    'astc-8x6-unorm',
    'astc-8x6-unorm-srgb',
    'astc-8x8-unorm',
    'astc-8x8-unorm-srgb',
    'astc-10x5-unorm',
    'astc-10x5-unorm-srgb',
    'astc-10x6-unorm',
    'astc-10x6-unorm-srgb',
    'astc-10x8-unorm',
    'astc-10x8-unorm-srgb',
    'astc-10x10-unorm',
    'astc-10x10-unorm-srgb',
    'astc-12x10-unorm',
    'astc-12x10-unorm-srgb',
    'astc-12x12-unorm',
    'astc-12x12-unorm-srgb',
  ],
  TextureSampleType: [
    ,
    ,
    'float',
    'unfilterable-float',
    'depth',
    'sint',
    'uint',
  ],
  TextureViewDimension: [, '1d', '2d', '2d-array', 'cube', 'cube-array', '3d'],
  ToneMappingMode: [, 'standard', 'extended'],
  VertexFormat: [
    ,
    'uint8',
    'uint8x2',
    'uint8x4',
    'sint8',
    'sint8x2',
    'sint8x4',
    'unorm8',
    'unorm8x2',
    'unorm8x4',
    'snorm8',
    'snorm8x2',
    'snorm8x4',
    'uint16',
    'uint16x2',
    'uint16x4',
    'sint16',
    'sint16x2',
    'sint16x4',
    'unorm16',
    'unorm16x2',
    'unorm16x4',
    'snorm16',
    'snorm16x2',
    'snorm16x4',
    'float16',
    'float16x2',
    'float16x4',
    'float32',
    'float32x2',
    'float32x3',
    'float32x4',
    'uint32',
    'uint32x2',
    'uint32x3',
    'uint32x4',
    'sint32',
    'sint32x2',
    'sint32x3',
    'sint32x4',
    'unorm10-10-10-2',
    'unorm8x4-bgra',
  ],
  VertexStepMode: [, 'vertex', 'instance'],
  WGSLLanguageFeatureName: [
    ,
    'readonly_and_readwrite_storage_textures',
    'packed_4x8_integer_dot_product',
    'unrestricted_pointer_parameters',
    'pointer_composite_access',
    'uniform_buffer_standard_layout',
    'subgroup_id',
    'texture_and_sampler_let',
    'subgroup_uniformity',
    'texture_formats_tier1',
  ],
};
var emwgpuStringToInt_DeviceLostReason = {
  undefined: 1,
  unknown: 1,
  destroyed: 2,
};
function _emwgpuAdapterRequestDevice(
  adapterPtr,
  futureId,
  deviceLostFutureId,
  devicePtr,
  queuePtr,
  descriptor
) {
  adapterPtr >>>= 0;
  futureId = bigintToI53Checked(futureId);
  deviceLostFutureId = bigintToI53Checked(deviceLostFutureId);
  devicePtr >>>= 0;
  queuePtr >>>= 0;
  descriptor >>>= 0;
  var adapter = WebGPU.getJsObject(adapterPtr);
  var desc = {};
  if (descriptor) {
    var requiredFeatureCount = HEAPU32[((descriptor + 12) >>> 2) >>> 0];
    if (requiredFeatureCount) {
      var requiredFeaturesPtr = HEAPU32[((descriptor + 16) >>> 2) >>> 0];
      desc['requiredFeatures'] = Array.from(
        HEAPU32.subarray(
          (requiredFeaturesPtr >>> 2) >>> 0,
          ((requiredFeaturesPtr + requiredFeatureCount * 4) >>> 2) >>> 0
        ),
        (feature) => WebGPU.FeatureName[feature]
      );
    }
    var limitsPtr = HEAPU32[((descriptor + 20) >>> 2) >>> 0];
    if (limitsPtr) {
      var nextInChainPtr = HEAPU32[(limitsPtr >>> 2) >>> 0];
      var requiredLimits = {};
      function setLimitU32IfDefined(
        name,
        basePtr,
        limitOffset,
        ignoreIfZero = false
      ) {
        var ptr = basePtr + limitOffset;
        var value = HEAPU32[(ptr >>> 2) >>> 0];
        if (value != 4294967295 && (!ignoreIfZero || value != 0)) {
          requiredLimits[name] = value;
        }
      }
      function setLimitU64IfDefined(name, basePtr, limitOffset) {
        var ptr = basePtr + limitOffset;
        var limitPart1 = HEAPU32[(ptr >>> 2) >>> 0];
        var limitPart2 = HEAPU32[((ptr + 4) >>> 2) >>> 0];
        if (limitPart1 != 4294967295 || limitPart2 != 4294967295) {
          requiredLimits[name] = readI53FromI64(ptr);
        }
      }
      setLimitU32IfDefined('maxTextureDimension1D', limitsPtr, 4);
      setLimitU32IfDefined('maxTextureDimension2D', limitsPtr, 8);
      setLimitU32IfDefined('maxTextureDimension3D', limitsPtr, 12);
      setLimitU32IfDefined('maxTextureArrayLayers', limitsPtr, 16);
      setLimitU32IfDefined('maxBindGroups', limitsPtr, 20);
      setLimitU32IfDefined('maxBindGroupsPlusVertexBuffers', limitsPtr, 24);
      setLimitU32IfDefined('maxBindingsPerBindGroup', limitsPtr, 28);
      setLimitU32IfDefined(
        'maxDynamicUniformBuffersPerPipelineLayout',
        limitsPtr,
        32
      );
      setLimitU32IfDefined(
        'maxDynamicStorageBuffersPerPipelineLayout',
        limitsPtr,
        36
      );
      setLimitU32IfDefined('maxSampledTexturesPerShaderStage', limitsPtr, 40);
      setLimitU32IfDefined('maxSamplersPerShaderStage', limitsPtr, 44);
      setLimitU32IfDefined('maxStorageBuffersPerShaderStage', limitsPtr, 48);
      setLimitU32IfDefined('maxStorageTexturesPerShaderStage', limitsPtr, 52);
      setLimitU32IfDefined('maxUniformBuffersPerShaderStage', limitsPtr, 56);
      setLimitU32IfDefined('minUniformBufferOffsetAlignment', limitsPtr, 80);
      setLimitU32IfDefined('minStorageBufferOffsetAlignment', limitsPtr, 84);
      setLimitU64IfDefined('maxUniformBufferBindingSize', limitsPtr, 64);
      setLimitU64IfDefined('maxStorageBufferBindingSize', limitsPtr, 72);
      setLimitU32IfDefined('maxVertexBuffers', limitsPtr, 88);
      setLimitU64IfDefined('maxBufferSize', limitsPtr, 96);
      setLimitU32IfDefined('maxVertexAttributes', limitsPtr, 104);
      setLimitU32IfDefined('maxVertexBufferArrayStride', limitsPtr, 108);
      setLimitU32IfDefined('maxInterStageShaderVariables', limitsPtr, 112);
      setLimitU32IfDefined('maxColorAttachments', limitsPtr, 116);
      setLimitU32IfDefined('maxColorAttachmentBytesPerSample', limitsPtr, 120);
      setLimitU32IfDefined('maxComputeWorkgroupStorageSize', limitsPtr, 124);
      setLimitU32IfDefined('maxComputeInvocationsPerWorkgroup', limitsPtr, 128);
      setLimitU32IfDefined('maxComputeWorkgroupSizeX', limitsPtr, 132);
      setLimitU32IfDefined('maxComputeWorkgroupSizeY', limitsPtr, 136);
      setLimitU32IfDefined('maxComputeWorkgroupSizeZ', limitsPtr, 140);
      setLimitU32IfDefined('maxComputeWorkgroupsPerDimension', limitsPtr, 144);
      setLimitU32IfDefined('maxImmediateSize', limitsPtr, 148, true);
      if (nextInChainPtr !== 0) {
        var sType = HEAP32[((nextInChainPtr + 4) >>> 2) >>> 0];
        var compatibilityModeLimitsPtr = nextInChainPtr;
        if ('maxStorageBuffersInVertexStage' in GPUSupportedLimits.prototype) {
          setLimitU32IfDefined(
            'maxStorageBuffersInVertexStage',
            compatibilityModeLimitsPtr,
            8
          );
          setLimitU32IfDefined(
            'maxStorageTexturesInVertexStage',
            compatibilityModeLimitsPtr,
            12
          );
          setLimitU32IfDefined(
            'maxStorageBuffersInFragmentStage',
            compatibilityModeLimitsPtr,
            16
          );
          setLimitU32IfDefined(
            'maxStorageTexturesInFragmentStage',
            compatibilityModeLimitsPtr,
            20
          );
        }
      }
      desc['requiredLimits'] = requiredLimits;
    }
    var defaultQueuePtr = HEAPU32[((descriptor + 24) >>> 2) >>> 0];
    if (defaultQueuePtr) {
      var defaultQueueDesc = {
        label: WebGPU.makeStringFromOptionalStringView(defaultQueuePtr + 4),
      };
      desc['defaultQueue'] = defaultQueueDesc;
    }
    desc['label'] = WebGPU.makeStringFromOptionalStringView(descriptor + 4);
  }
  WebGPU.Internals.futureInsert(
    futureId,
    adapter.requestDevice(desc).then(
      (device) => {
        callUserCallback(() => {
          WebGPU.Internals.jsObjectInsert(queuePtr, device.queue);
          WebGPU.Internals.jsObjectInsert(devicePtr, device);
          WebGPU.Internals.futureInsert(
            deviceLostFutureId,
            device.lost.then((info) => {
              callUserCallback(() => {
                device.onuncapturederror = (ev) => {};
                var sp = stackSave();
                var messagePtr = stringToUTF8OnStack(info.message);
                _emwgpuOnDeviceLostCompleted(
                  deviceLostFutureId,
                  emwgpuStringToInt_DeviceLostReason[info.reason],
                  messagePtr
                );
                stackRestore(sp);
              });
            })
          );
          device.onuncapturederror = (ev) => {
            var type = 5;
            if (ev.error instanceof GPUValidationError) type = 2;
            else if (ev.error instanceof GPUOutOfMemoryError) type = 3;
            else if (ev.error instanceof GPUInternalError) type = 4;
            var sp = stackSave();
            var messagePtr = stringToUTF8OnStack(ev.error.message);
            _emwgpuOnUncapturedError(devicePtr, type, messagePtr);
            stackRestore(sp);
          };
          _emwgpuOnRequestDeviceCompleted(futureId, 1, devicePtr, 0);
        });
      },
      (ex) => {
        callUserCallback(() => {
          var sp = stackSave();
          var messagePtr = stringToUTF8OnStack(ex.message);
          _emwgpuOnRequestDeviceCompleted(futureId, 3, devicePtr, messagePtr);
          if (deviceLostFutureId) {
            _emwgpuOnDeviceLostCompleted(deviceLostFutureId, 4, messagePtr);
          }
          stackRestore(sp);
        });
      }
    )
  );
}
function _emwgpuBufferDestroy(bufferPtr) {
  bufferPtr >>>= 0;
  var buffer = WebGPU.getJsObject(bufferPtr);
  var onUnmap = WebGPU.Internals.bufferOnUnmaps[bufferPtr];
  if (onUnmap) {
    for (var i = 0; i < onUnmap.length; ++i) {
      onUnmap[i]();
    }
    delete WebGPU.Internals.bufferOnUnmaps[bufferPtr];
  }
  buffer.destroy();
}
var warnOnce = (text) => {
  warnOnce.shown ||= {};
  if (!warnOnce.shown[text]) {
    warnOnce.shown[text] = 1;
    if (ENVIRONMENT_IS_NODE) text = 'warning: ' + text;
    err(text);
  }
};
function _emwgpuBufferGetConstMappedRange(bufferPtr, offset, size) {
  bufferPtr >>>= 0;
  offset >>>= 0;
  size >>>= 0;
  var buffer = WebGPU.getJsObject(bufferPtr);
  if (size == 4294967295) size = undefined;
  var mapped;
  try {
    mapped = buffer.getMappedRange(offset, size);
  } catch (ex) {
    return 0;
  }
  var data = _memalign(16, mapped.byteLength);
  HEAPU8.set(new Uint8Array(mapped), data >>> 0);
  WebGPU.Internals.bufferOnUnmaps[bufferPtr].push(() => _free(data));
  return data;
}
var _emwgpuBufferMapAsync = function (bufferPtr, futureId, mode, offset, size) {
  bufferPtr >>>= 0;
  futureId = bigintToI53Checked(futureId);
  mode = bigintToI53Checked(mode);
  offset >>>= 0;
  size >>>= 0;
  var buffer = WebGPU.getJsObject(bufferPtr);
  WebGPU.Internals.bufferOnUnmaps[bufferPtr] = [];
  if (size == 4294967295) size = undefined;
  WebGPU.Internals.futureInsert(
    futureId,
    buffer.mapAsync(mode, offset, size).then(
      () => {
        callUserCallback(() => {
          _emwgpuOnMapAsyncCompleted(futureId, 1, 0);
        });
      },
      (ex) => {
        callUserCallback(() => {
          var sp = stackSave();
          var messagePtr = stringToUTF8OnStack(ex.message);
          var status =
            ex.name === 'AbortError' ? 4 : ex.name === 'OperationError' ? 3 : 0;
          _emwgpuOnMapAsyncCompleted(futureId, status, messagePtr);
          delete WebGPU.Internals.bufferOnUnmaps[bufferPtr];
        });
      }
    )
  );
};
function _emwgpuBufferUnmap(bufferPtr) {
  bufferPtr >>>= 0;
  var buffer = WebGPU.getJsObject(bufferPtr);
  var onUnmap = WebGPU.Internals.bufferOnUnmaps[bufferPtr];
  if (!onUnmap) {
    return;
  }
  for (var i = 0; i < onUnmap.length; ++i) {
    onUnmap[i]();
  }
  delete WebGPU.Internals.bufferOnUnmaps[bufferPtr];
  buffer.unmap();
}
function _emwgpuDelete(ptr) {
  ptr >>>= 0;
  delete WebGPU.Internals.jsObjects[ptr];
}
function _emwgpuDeviceCreateBuffer(devicePtr, descriptor, bufferPtr) {
  devicePtr >>>= 0;
  descriptor >>>= 0;
  bufferPtr >>>= 0;
  var mappedAtCreation = !!HEAPU32[((descriptor + 32) >>> 2) >>> 0];
  var desc = {
    label: WebGPU.makeStringFromOptionalStringView(descriptor + 4),
    usage: HEAPU32[((descriptor + 16) >>> 2) >>> 0],
    size: readI53FromI64(descriptor + 24),
    mappedAtCreation,
  };
  var device = WebGPU.getJsObject(devicePtr);
  var buffer;
  try {
    buffer = device.createBuffer(desc);
  } catch (ex) {
    return false;
  }
  WebGPU.Internals.jsObjectInsert(bufferPtr, buffer);
  if (mappedAtCreation) {
    WebGPU.Internals.bufferOnUnmaps[bufferPtr] = [];
  }
  return true;
}
function _emwgpuDeviceCreateShaderModule(
  devicePtr,
  descriptor,
  shaderModulePtr
) {
  devicePtr >>>= 0;
  descriptor >>>= 0;
  shaderModulePtr >>>= 0;
  var nextInChainPtr = HEAPU32[(descriptor >>> 2) >>> 0];
  var sType = HEAP32[((nextInChainPtr + 4) >>> 2) >>> 0];
  var desc = {
    label: WebGPU.makeStringFromOptionalStringView(descriptor + 4),
    code: '',
  };
  switch (sType) {
    case 2: {
      desc['code'] = WebGPU.makeStringFromStringView(nextInChainPtr + 8);
      break;
    }
  }
  var device = WebGPU.getJsObject(devicePtr);
  WebGPU.Internals.jsObjectInsert(
    shaderModulePtr,
    device.createShaderModule(desc)
  );
}
var _emwgpuDeviceDestroy = (devicePtr) => {
  const device = WebGPU.getJsObject(devicePtr);
  device.onuncapturederror = null;
  device.destroy();
};
function _emwgpuInstanceRequestAdapter(
  instancePtr,
  futureId,
  options,
  adapterPtr
) {
  instancePtr >>>= 0;
  futureId = bigintToI53Checked(futureId);
  options >>>= 0;
  adapterPtr >>>= 0;
  var opts;
  if (options) {
    opts = {
      featureLevel: WebGPU.FeatureLevel[HEAP32[((options + 4) >>> 2) >>> 0]],
      powerPreference:
        WebGPU.PowerPreference[HEAP32[((options + 8) >>> 2) >>> 0]],
      forceFallbackAdapter: !!HEAPU32[((options + 12) >>> 2) >>> 0],
    };
    var nextInChainPtr = HEAPU32[(options >>> 2) >>> 0];
    if (nextInChainPtr !== 0) {
      var sType = HEAP32[((nextInChainPtr + 4) >>> 2) >>> 0];
      var webxrOptions = nextInChainPtr;
      opts.xrCompatible = !!HEAPU32[((webxrOptions + 8) >>> 2) >>> 0];
    }
  }
  if (!('gpu' in navigator)) {
    var sp = stackSave();
    var messagePtr = stringToUTF8OnStack(
      'WebGPU not available on this browser (navigator.gpu is not available)'
    );
    _emwgpuOnRequestAdapterCompleted(futureId, 3, adapterPtr, messagePtr);
    stackRestore(sp);
    return;
  }
  WebGPU.Internals.futureInsert(
    futureId,
    navigator.gpu.requestAdapter(opts).then(
      (adapter) => {
        callUserCallback(() => {
          if (adapter) {
            WebGPU.Internals.jsObjectInsert(adapterPtr, adapter);
            _emwgpuOnRequestAdapterCompleted(futureId, 1, adapterPtr, 0);
          } else {
            var sp = stackSave();
            var messagePtr = stringToUTF8OnStack(
              'WebGPU not available on this browser (requestAdapter returned null)'
            );
            _emwgpuOnRequestAdapterCompleted(
              futureId,
              3,
              adapterPtr,
              messagePtr
            );
            stackRestore(sp);
          }
        });
      },
      (ex) => {
        callUserCallback(() => {
          var sp = stackSave();
          var messagePtr = stringToUTF8OnStack(ex.message);
          _emwgpuOnRequestAdapterCompleted(futureId, 4, adapterPtr, messagePtr);
          stackRestore(sp);
        });
      }
    )
  );
}
var _emwgpuQueueOnSubmittedWorkDone = function (queuePtr, futureId) {
  queuePtr >>>= 0;
  futureId = bigintToI53Checked(futureId);
  var queue = WebGPU.getJsObject(queuePtr);
  WebGPU.Internals.futureInsert(
    futureId,
    queue.onSubmittedWorkDone().then(() => {
      callUserCallback(() => {
        _emwgpuOnWorkDoneCompleted(futureId, 1);
      });
    })
  );
};
var _emwgpuWaitAny = function (futurePtr, futureCount, timeoutMSPtr) {
  futurePtr >>>= 0;
  futureCount >>>= 0;
  timeoutMSPtr >>>= 0;
  return Asyncify.handleAsync(async () => {
    var promises = [];
    if (timeoutMSPtr) {
      var timeoutMS = HEAP32[(timeoutMSPtr >>> 2) >>> 0];
      promises.length = futureCount + 1;
      promises[futureCount] = new Promise((resolve) =>
        setTimeout(resolve, timeoutMS, 0)
      );
    } else {
      promises.length = futureCount;
    }
    for (var i = 0; i < futureCount; ++i) {
      var futureId = readI53FromI64(futurePtr + i * 8);
      if (!(futureId in WebGPU.Internals.futures)) {
        return futureId;
      }
      promises[i] = WebGPU.Internals.futures[futureId];
    }
    const firstResolvedFuture = await Promise.race(promises);
    delete WebGPU.Internals.futures[firstResolvedFuture];
    return firstResolvedFuture;
  });
};
_emwgpuWaitAny.isAsync = true;
var ENV = {};
var getExecutableName = () => thisProgram || './this.program';
var getEnvStrings = () => {
  if (!getEnvStrings.strings) {
    var lang =
      ((typeof navigator == 'object' && navigator.language) || 'C').replace(
        '-',
        '_'
      ) + '.UTF-8';
    var env = {
      USER: 'web_user',
      LOGNAME: 'web_user',
      PATH: '/',
      PWD: '/',
      HOME: '/home/web_user',
      LANG: lang,
      _: getExecutableName(),
    };
    for (var x in ENV) {
      if (ENV[x] === undefined) delete env[x];
      else env[x] = ENV[x];
    }
    var strings = [];
    for (var x in env) {
      strings.push(\`\${x}=\${env[x]}\`);
    }
    getEnvStrings.strings = strings;
  }
  return getEnvStrings.strings;
};
function _environ_get(__environ, environ_buf) {
  __environ >>>= 0;
  environ_buf >>>= 0;
  var bufSize = 0;
  var envp = 0;
  for (var string of getEnvStrings()) {
    var ptr = environ_buf + bufSize;
    HEAPU32[((__environ + envp) >>> 2) >>> 0] = ptr;
    bufSize += stringToUTF8(string, ptr, Infinity) + 1;
    envp += 4;
  }
  return 0;
}
function _environ_sizes_get(penviron_count, penviron_buf_size) {
  penviron_count >>>= 0;
  penviron_buf_size >>>= 0;
  var strings = getEnvStrings();
  HEAPU32[(penviron_count >>> 2) >>> 0] = strings.length;
  var bufSize = 0;
  for (var string of strings) {
    bufSize += lengthBytesUTF8(string) + 1;
  }
  HEAPU32[(penviron_buf_size >>> 2) >>> 0] = bufSize;
  return 0;
}
function _fd_close(fd) {
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    FS.close(stream);
    return 0;
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
}
var doReadv = (stream, iov, iovcnt, offset) => {
  var ret = 0;
  for (var i = 0; i < iovcnt; i++) {
    var ptr = HEAPU32[(iov >>> 2) >>> 0];
    var len = HEAPU32[((iov + 4) >>> 2) >>> 0];
    iov += 8;
    var curr = FS.read(stream, HEAP8, ptr, len, offset);
    if (curr < 0) return -1;
    ret += curr;
    if (curr < len) break;
    if (typeof offset != 'undefined') {
      offset += curr;
    }
  }
  return ret;
};
function _fd_read(fd, iov, iovcnt, pnum) {
  iov >>>= 0;
  iovcnt >>>= 0;
  pnum >>>= 0;
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    var num = doReadv(stream, iov, iovcnt);
    HEAPU32[(pnum >>> 2) >>> 0] = num;
    return 0;
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
}
function _fd_seek(fd, offset, whence, newOffset) {
  offset = bigintToI53Checked(offset);
  newOffset >>>= 0;
  try {
    if (isNaN(offset)) return 61;
    var stream = SYSCALLS.getStreamFromFD(fd);
    FS.llseek(stream, offset, whence);
    HEAP64[(newOffset >>> 3) >>> 0] = BigInt(stream.position);
    if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null;
    return 0;
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
}
var doWritev = (stream, iov, iovcnt, offset) => {
  var ret = 0;
  for (var i = 0; i < iovcnt; i++) {
    var ptr = HEAPU32[(iov >>> 2) >>> 0];
    var len = HEAPU32[((iov + 4) >>> 2) >>> 0];
    iov += 8;
    var curr = FS.write(stream, HEAP8, ptr, len, offset);
    if (curr < 0) return -1;
    ret += curr;
    if (curr < len) {
      break;
    }
    if (typeof offset != 'undefined') {
      offset += curr;
    }
  }
  return ret;
};
function _fd_write(fd, iov, iovcnt, pnum) {
  iov >>>= 0;
  iovcnt >>>= 0;
  pnum >>>= 0;
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    var num = doWritev(stream, iov, iovcnt);
    HEAPU32[(pnum >>> 2) >>> 0] = num;
    return 0;
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
}
function _llvm_eh_typeid_for(type) {
  type >>>= 0;
  return type;
}
function _random_get(buffer, size) {
  buffer >>>= 0;
  size >>>= 0;
  try {
    randomFill(HEAPU8.subarray(buffer >>> 0, (buffer + size) >>> 0));
    return 0;
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
}
var emwgpuStringToInt_FeatureName = {
  'core-features-and-limits': 1,
  'depth-clip-control': 2,
  'depth32float-stencil8': 3,
  'texture-compression-bc': 4,
  'texture-compression-bc-sliced-3d': 5,
  'texture-compression-etc2': 6,
  'texture-compression-astc': 7,
  'texture-compression-astc-sliced-3d': 8,
  'timestamp-query': 9,
  'indirect-first-instance': 10,
  'shader-f16': 11,
  'rg11b10ufloat-renderable': 12,
  'bgra8unorm-storage': 13,
  'float32-filterable': 14,
  'float32-blendable': 15,
  'clip-distances': 16,
  'dual-source-blending': 17,
  subgroups: 18,
  'texture-formats-tier1': 19,
  'texture-formats-tier2': 20,
  'primitive-index': 21,
  'texture-component-swizzle': 22,
  'chromium-experimental-unorm16-texture-formats': 327692,
  'chromium-experimental-multi-draw-indirect': 327729,
};
function _wgpuAdapterGetFeatures(adapterPtr, supportedFeatures) {
  adapterPtr >>>= 0;
  supportedFeatures >>>= 0;
  var adapter = WebGPU.getJsObject(adapterPtr);
  var featuresPtr = _malloc(adapter.features.size * 4);
  var offset = 0;
  var numFeatures = 0;
  for (const feature of adapter.features) {
    var featureEnumValue = emwgpuStringToInt_FeatureName[feature];
    if (featureEnumValue >= 0) {
      HEAP32[((featuresPtr + offset) >>> 2) >>> 0] = featureEnumValue;
      offset += 4;
      numFeatures++;
    }
  }
  HEAPU32[((supportedFeatures + 4) >>> 2) >>> 0] = featuresPtr;
  HEAPU32[(supportedFeatures >>> 2) >>> 0] = numFeatures;
}
function _wgpuAdapterGetInfo(adapterPtr, info) {
  adapterPtr >>>= 0;
  info >>>= 0;
  var adapter = WebGPU.getJsObject(adapterPtr);
  WebGPU.fillAdapterInfoStruct(adapter.info, info);
  return 1;
}
function _wgpuAdapterGetLimits(adapterPtr, limitsOutPtr) {
  adapterPtr >>>= 0;
  limitsOutPtr >>>= 0;
  var adapter = WebGPU.getJsObject(adapterPtr);
  WebGPU.fillLimitStruct(adapter.limits, limitsOutPtr);
  return 1;
}
function _wgpuAdapterHasFeature(adapterPtr, featureEnumValue) {
  adapterPtr >>>= 0;
  var adapter = WebGPU.getJsObject(adapterPtr);
  return adapter.features.has(WebGPU.FeatureName[featureEnumValue]);
}
var _wgpuBufferGetSize = function (bufferPtr) {
  bufferPtr >>>= 0;
  var ret = (() => {
    var buffer = WebGPU.getJsObject(bufferPtr);
    return buffer.size;
  })();
  return BigInt(ret);
};
function _wgpuCommandEncoderBeginComputePass(encoderPtr, descriptor) {
  encoderPtr >>>= 0;
  descriptor >>>= 0;
  var desc;
  if (descriptor) {
    desc = {
      label: WebGPU.makeStringFromOptionalStringView(descriptor + 4),
      timestampWrites: WebGPU.makePassTimestampWrites(
        HEAPU32[((descriptor + 12) >>> 2) >>> 0]
      ),
    };
  }
  var commandEncoder = WebGPU.getJsObject(encoderPtr);
  var ptr = _emwgpuCreateComputePassEncoder(0);
  WebGPU.Internals.jsObjectInsert(ptr, commandEncoder.beginComputePass(desc));
  return ptr;
}
function _wgpuCommandEncoderCopyBufferToBuffer(
  encoderPtr,
  srcPtr,
  srcOffset,
  dstPtr,
  dstOffset,
  size
) {
  encoderPtr >>>= 0;
  srcPtr >>>= 0;
  srcOffset = bigintToI53Checked(srcOffset);
  dstPtr >>>= 0;
  dstOffset = bigintToI53Checked(dstOffset);
  size = bigintToI53Checked(size);
  var commandEncoder = WebGPU.getJsObject(encoderPtr);
  var src = WebGPU.getJsObject(srcPtr);
  var dst = WebGPU.getJsObject(dstPtr);
  commandEncoder.copyBufferToBuffer(src, srcOffset, dst, dstOffset, size);
}
function _wgpuCommandEncoderFinish(encoderPtr, descriptor) {
  encoderPtr >>>= 0;
  descriptor >>>= 0;
  var commandEncoder = WebGPU.getJsObject(encoderPtr);
  var ptr = _emwgpuCreateCommandBuffer(0);
  WebGPU.Internals.jsObjectInsert(ptr, commandEncoder.finish());
  return ptr;
}
function _wgpuComputePassEncoderDispatchWorkgroups(passPtr, x, y, z) {
  passPtr >>>= 0;
  var pass = WebGPU.getJsObject(passPtr);
  pass.dispatchWorkgroups(x, y, z);
}
function _wgpuComputePassEncoderEnd(passPtr) {
  passPtr >>>= 0;
  var pass = WebGPU.getJsObject(passPtr);
  pass.end();
}
function _wgpuComputePassEncoderSetBindGroup(
  passPtr,
  groupIndex,
  groupPtr,
  dynamicOffsetCount,
  dynamicOffsetsPtr
) {
  passPtr >>>= 0;
  groupPtr >>>= 0;
  dynamicOffsetCount >>>= 0;
  dynamicOffsetsPtr >>>= 0;
  var pass = WebGPU.getJsObject(passPtr);
  var group = WebGPU.getJsObject(groupPtr);
  if (dynamicOffsetCount == 0) {
    pass.setBindGroup(groupIndex, group);
  } else {
    pass.setBindGroup(
      groupIndex,
      group,
      HEAPU32,
      dynamicOffsetsPtr >>> 2,
      dynamicOffsetCount
    );
  }
}
function _wgpuComputePassEncoderSetPipeline(passPtr, pipelinePtr) {
  passPtr >>>= 0;
  pipelinePtr >>>= 0;
  var pass = WebGPU.getJsObject(passPtr);
  var pipeline = WebGPU.getJsObject(pipelinePtr);
  pass.setPipeline(pipeline);
}
function _wgpuComputePipelineGetBindGroupLayout(pipelinePtr, groupIndex) {
  pipelinePtr >>>= 0;
  var pipeline = WebGPU.getJsObject(pipelinePtr);
  var ptr = _emwgpuCreateBindGroupLayout(0);
  WebGPU.Internals.jsObjectInsert(ptr, pipeline.getBindGroupLayout(groupIndex));
  return ptr;
}
var _wgpuDeviceCreateBindGroup = function (devicePtr, descriptor) {
  devicePtr >>>= 0;
  descriptor >>>= 0;
  function makeEntry(entryPtr) {
    var bufferPtr = HEAPU32[((entryPtr + 8) >>> 2) >>> 0];
    var samplerPtr = HEAPU32[((entryPtr + 32) >>> 2) >>> 0];
    var textureViewPtr = HEAPU32[((entryPtr + 36) >>> 2) >>> 0];
    var externalTexturePtr = 0;
    WebGPU.iterateExtensions(entryPtr, {
      327681: (ptr) => {
        externalTexturePtr = HEAPU32[((ptr + 8) >>> 2) >>> 0];
      },
    });
    var resource;
    if (bufferPtr) {
      var size = readI53FromI64(entryPtr + 24);
      if (size == -1) size = undefined;
      resource = {
        buffer: WebGPU.getJsObject(bufferPtr),
        offset: readI53FromI64(entryPtr + 16),
        size,
      };
    } else {
      resource = WebGPU.getJsObject(
        samplerPtr || textureViewPtr || externalTexturePtr
      );
    }
    return { binding: HEAPU32[((entryPtr + 4) >>> 2) >>> 0], resource };
  }
  function makeEntries(count, entriesPtrs) {
    var entries = [];
    for (var i = 0; i < count; ++i) {
      entries.push(makeEntry(entriesPtrs + 40 * i));
    }
    return entries;
  }
  var desc = {
    label: WebGPU.makeStringFromOptionalStringView(descriptor + 4),
    layout: WebGPU.getJsObject(HEAPU32[((descriptor + 12) >>> 2) >>> 0]),
    entries: makeEntries(
      HEAPU32[((descriptor + 16) >>> 2) >>> 0],
      HEAPU32[((descriptor + 20) >>> 2) >>> 0]
    ),
  };
  var device = WebGPU.getJsObject(devicePtr);
  var ptr = _emwgpuCreateBindGroup(0);
  WebGPU.Internals.jsObjectInsert(ptr, device.createBindGroup(desc));
  return ptr;
};
function _wgpuDeviceCreateCommandEncoder(devicePtr, descriptor) {
  devicePtr >>>= 0;
  descriptor >>>= 0;
  var desc;
  if (descriptor) {
    desc = { label: WebGPU.makeStringFromOptionalStringView(descriptor + 4) };
  }
  var device = WebGPU.getJsObject(devicePtr);
  var ptr = _emwgpuCreateCommandEncoder(0);
  WebGPU.Internals.jsObjectInsert(ptr, device.createCommandEncoder(desc));
  return ptr;
}
function _wgpuDeviceCreateComputePipeline(devicePtr, descriptor) {
  devicePtr >>>= 0;
  descriptor >>>= 0;
  var desc = WebGPU.makeComputePipelineDesc(descriptor);
  var device = WebGPU.getJsObject(devicePtr);
  var ptr = _emwgpuCreateComputePipeline(0);
  WebGPU.Internals.jsObjectInsert(ptr, device.createComputePipeline(desc));
  return ptr;
}
var _wgpuQueueSubmit = function (queuePtr, commandCount, commands) {
  queuePtr >>>= 0;
  commandCount >>>= 0;
  commands >>>= 0;
  var queue = WebGPU.getJsObject(queuePtr);
  var cmds = Array.from(
    HEAP32.subarray(
      (commands >>> 2) >>> 0,
      ((commands + commandCount * 4) >>> 2) >>> 0
    ),
    (id) => WebGPU.getJsObject(id)
  );
  queue.submit(cmds);
};
function _wgpuQueueWriteBuffer(queuePtr, bufferPtr, bufferOffset, data, size) {
  queuePtr >>>= 0;
  bufferPtr >>>= 0;
  bufferOffset = bigintToI53Checked(bufferOffset);
  data >>>= 0;
  size >>>= 0;
  var queue = WebGPU.getJsObject(queuePtr);
  var buffer = WebGPU.getJsObject(bufferPtr);
  var subarray = HEAPU8.subarray(data >>> 0, (data + size) >>> 0);
  queue.writeBuffer(buffer, bufferOffset, subarray, 0, size);
}
var runAndAbortIfError = (func) => {
  try {
    return func();
  } catch (e) {
    abort(e);
  }
};
var runtimeKeepalivePush = () => {
  runtimeKeepaliveCounter += 1;
};
var runtimeKeepalivePop = () => {
  runtimeKeepaliveCounter -= 1;
};
var Asyncify = {
  instrumentWasmImports(imports) {
    var importPattern = /^(invoke_.*|__asyncjs__.*)$/;
    for (let [x, original] of Object.entries(imports)) {
      if (typeof original == 'function') {
        let isAsyncifyImport = original.isAsync || importPattern.test(x);
      }
    }
  },
  instrumentFunction(original) {
    var wrapper = (...args) => {
      Asyncify.exportCallStack.push(original);
      try {
        return original(...args);
      } finally {
        if (!ABORT) {
          var top = Asyncify.exportCallStack.pop();
          Asyncify.maybeStopUnwind();
        }
      }
    };
    Asyncify.funcWrappers.set(original, wrapper);
    return wrapper;
  },
  instrumentWasmExports(exports) {
    var ret = {};
    for (let [x, original] of Object.entries(exports)) {
      if (typeof original == 'function') {
        var wrapper = Asyncify.instrumentFunction(original);
        ret[x] = wrapper;
      } else {
        ret[x] = original;
      }
    }
    return ret;
  },
  State: { Normal: 0, Unwinding: 1, Rewinding: 2, Disabled: 3 },
  state: 0,
  StackSize: 4096,
  currData: null,
  handleSleepReturnValue: 0,
  exportCallStack: [],
  callstackFuncToId: new Map(),
  callStackIdToFunc: new Map(),
  funcWrappers: new Map(),
  callStackId: 0,
  asyncPromiseHandlers: null,
  sleepCallbacks: [],
  getCallStackId(func) {
    if (!Asyncify.callstackFuncToId.has(func)) {
      var id = Asyncify.callStackId++;
      Asyncify.callstackFuncToId.set(func, id);
      Asyncify.callStackIdToFunc.set(id, func);
    }
    return Asyncify.callstackFuncToId.get(func);
  },
  maybeStopUnwind() {
    if (
      Asyncify.currData &&
      Asyncify.state === Asyncify.State.Unwinding &&
      Asyncify.exportCallStack.length === 0
    ) {
      Asyncify.state = Asyncify.State.Normal;
      runAndAbortIfError(_asyncify_stop_unwind);
      if (typeof Fibers != 'undefined') {
        Fibers.trampoline();
      }
    }
  },
  whenDone() {
    return new Promise((resolve, reject) => {
      Asyncify.asyncPromiseHandlers = { resolve, reject };
    });
  },
  allocateData() {
    var ptr = _malloc(12 + Asyncify.StackSize);
    Asyncify.setDataHeader(ptr, ptr + 12, Asyncify.StackSize);
    Asyncify.setDataRewindFunc(ptr);
    return ptr;
  },
  setDataHeader(ptr, stack, stackSize) {
    HEAPU32[(ptr >>> 2) >>> 0] = stack;
    HEAPU32[((ptr + 4) >>> 2) >>> 0] = stack + stackSize;
  },
  setDataRewindFunc(ptr) {
    var bottomOfCallStack = Asyncify.exportCallStack[0];
    var rewindId = Asyncify.getCallStackId(bottomOfCallStack);
    HEAP32[((ptr + 8) >>> 2) >>> 0] = rewindId;
  },
  getDataRewindFunc(ptr) {
    var id = HEAP32[((ptr + 8) >>> 2) >>> 0];
    var func = Asyncify.callStackIdToFunc.get(id);
    return func;
  },
  doRewind(ptr) {
    var original = Asyncify.getDataRewindFunc(ptr);
    var func = Asyncify.funcWrappers.get(original);
    return func();
  },
  handleSleep(startAsync) {
    if (ABORT) return;
    if (Asyncify.state === Asyncify.State.Normal) {
      var reachedCallback = false;
      var reachedAfterCallback = false;
      startAsync((handleSleepReturnValue = 0) => {
        if (ABORT) return;
        Asyncify.handleSleepReturnValue = handleSleepReturnValue;
        reachedCallback = true;
        if (!reachedAfterCallback) {
          return;
        }
        Asyncify.state = Asyncify.State.Rewinding;
        runAndAbortIfError(() => _asyncify_start_rewind(Asyncify.currData));
        if (typeof MainLoop != 'undefined' && MainLoop.func) {
          MainLoop.resume();
        }
        var asyncWasmReturnValue,
          isError = false;
        try {
          asyncWasmReturnValue = Asyncify.doRewind(Asyncify.currData);
        } catch (err) {
          asyncWasmReturnValue = err;
          isError = true;
        }
        var handled = false;
        if (!Asyncify.currData) {
          var asyncPromiseHandlers = Asyncify.asyncPromiseHandlers;
          if (asyncPromiseHandlers) {
            Asyncify.asyncPromiseHandlers = null;
            (isError
              ? asyncPromiseHandlers.reject
              : asyncPromiseHandlers.resolve)(asyncWasmReturnValue);
            handled = true;
          }
        }
        if (isError && !handled) {
          throw asyncWasmReturnValue;
        }
      });
      reachedAfterCallback = true;
      if (!reachedCallback) {
        Asyncify.state = Asyncify.State.Unwinding;
        Asyncify.currData = Asyncify.allocateData();
        if (typeof MainLoop != 'undefined' && MainLoop.func) {
          MainLoop.pause();
        }
        runAndAbortIfError(() => _asyncify_start_unwind(Asyncify.currData));
      }
    } else if (Asyncify.state === Asyncify.State.Rewinding) {
      Asyncify.state = Asyncify.State.Normal;
      runAndAbortIfError(_asyncify_stop_rewind);
      _free(Asyncify.currData);
      Asyncify.currData = null;
      Asyncify.sleepCallbacks.forEach(callUserCallback);
    } else {
      abort(\`invalid state: \${Asyncify.state}\`);
    }
    return Asyncify.handleSleepReturnValue;
  },
  handleAsync: (startAsync) =>
    Asyncify.handleSleep((wakeUp) => {
      startAsync().then(wakeUp);
    }),
};
var getCFunc = (ident) => {
  var func = Module['_' + ident];
  return func;
};
var writeArrayToMemory = (array, buffer) => {
  HEAP8.set(array, buffer >>> 0);
};
var ccall = (ident, returnType, argTypes, args, opts) => {
  var toC = {
    string: (str) => {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) {
        ret = stringToUTF8OnStack(str);
      }
      return ret;
    },
    array: (arr) => {
      var ret = stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    },
  };
  function convertReturnValue(ret) {
    if (returnType === 'string') {
      return UTF8ToString(ret);
    }
    if (returnType === 'pointer') return ret >>> 0;
    if (returnType === 'boolean') return Boolean(ret);
    return ret;
  }
  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  var previousAsync = Asyncify.currData;
  var ret = func(...cArgs);
  function onDone(ret) {
    runtimeKeepalivePop();
    if (stack !== 0) stackRestore(stack);
    return convertReturnValue(ret);
  }
  var asyncMode = opts?.async;
  runtimeKeepalivePush();
  if (Asyncify.currData != previousAsync) {
    return Asyncify.whenDone().then(onDone);
  }
  ret = onDone(ret);
  if (asyncMode) return Promise.resolve(ret);
  return ret;
};
var cwrap = (ident, returnType, argTypes, opts) => {
  var numericArgs =
    !argTypes ||
    argTypes.every((type) => type === 'number' || type === 'boolean');
  var numericRet = returnType !== 'string';
  if (numericRet && numericArgs && !opts) {
    return getCFunc(ident);
  }
  return (...args) => ccall(ident, returnType, argTypes, args, opts);
};
var FS_createPath = (...args) => FS.createPath(...args);
var FS_unlink = (...args) => FS.unlink(...args);
var FS_createLazyFile = (...args) => FS.createLazyFile(...args);
var FS_createDevice = (...args) => FS.createDevice(...args);
FS.createPreloadedFile = FS_createPreloadedFile;
FS.preloadFile = FS_preloadFile;
FS.staticInit();
{
  initMemory();
  if (Module['noExitRuntime']) noExitRuntime = Module['noExitRuntime'];
  if (Module['preloadPlugins']) preloadPlugins = Module['preloadPlugins'];
  if (Module['print']) out = Module['print'];
  if (Module['printErr']) err = Module['printErr'];
  if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];
  if (Module['arguments']) arguments_ = Module['arguments'];
  if (Module['thisProgram']) thisProgram = Module['thisProgram'];
  if (Module['preInit']) {
    if (typeof Module['preInit'] == 'function')
      Module['preInit'] = [Module['preInit']];
    while (Module['preInit'].length > 0) {
      Module['preInit'].shift()();
    }
  }
}
Module['mmapAlloc'] = mmapAlloc;
Module['addRunDependency'] = addRunDependency;
Module['removeRunDependency'] = removeRunDependency;
Module['ccall'] = ccall;
Module['cwrap'] = cwrap;
Module['FS_preloadFile'] = FS_preloadFile;
Module['FS_unlink'] = FS_unlink;
Module['FS_createPath'] = FS_createPath;
Module['FS_createDevice'] = FS_createDevice;
Module['FS'] = FS;
Module['FS_createDataFile'] = FS_createDataFile;
Module['FS_createLazyFile'] = FS_createLazyFile;
Module['MEMFS'] = MEMFS;
function ggml_webgpu_is_ios_browser() {
  const ua = navigator.userAgent;
  return ua.includes('iPhone') || ua.includes('iPad') ? 1 : 0;
}
var _wllama_malloc,
  _wllama_start,
  _wllama_action,
  _wllama_exit,
  _wllama_debug,
  _main,
  _malloc,
  _free,
  _emwgpuCreateBindGroup,
  _emwgpuCreateBindGroupLayout,
  _emwgpuCreateCommandBuffer,
  _emwgpuCreateCommandEncoder,
  _emwgpuCreateComputePassEncoder,
  _emwgpuCreateComputePipeline,
  _emwgpuCreateExternalTexture,
  _emwgpuCreatePipelineLayout,
  _emwgpuCreateQuerySet,
  _emwgpuCreateRenderBundle,
  _emwgpuCreateRenderBundleEncoder,
  _emwgpuCreateRenderPassEncoder,
  _emwgpuCreateRenderPipeline,
  _emwgpuCreateSampler,
  _emwgpuCreateSurface,
  _emwgpuCreateTexture,
  _emwgpuCreateTextureView,
  _emwgpuCreateAdapter,
  _emwgpuCreateBuffer,
  _emwgpuCreateDevice,
  _emwgpuCreateQueue,
  _emwgpuCreateShaderModule,
  _emwgpuOnDeviceLostCompleted,
  _emwgpuOnMapAsyncCompleted,
  _emwgpuOnRequestAdapterCompleted,
  _emwgpuOnRequestDeviceCompleted,
  _emwgpuOnWorkDoneCompleted,
  _emwgpuOnUncapturedError,
  _emscripten_builtin_memalign,
  __emscripten_timeout,
  _memalign,
  _setThrew,
  __emscripten_tempret_set,
  __emscripten_stack_restore,
  __emscripten_stack_alloc,
  _emscripten_stack_get_current,
  ___cxa_decrement_exception_refcount,
  ___cxa_increment_exception_refcount,
  ___cxa_can_catch,
  ___cxa_get_exception_ptr,
  dynCall_v,
  dynCall_ii,
  dynCall_iii,
  dynCall_viii,
  dynCall_viiiii,
  dynCall_vii,
  dynCall_vi,
  dynCall_iiiiiii,
  dynCall_iiiii,
  dynCall_iiiiii,
  dynCall_viiiiii,
  dynCall_vij,
  dynCall_jii,
  dynCall_viiii,
  dynCall_iiii,
  dynCall_iiiiiiii,
  dynCall_iifff,
  dynCall_iiiffiiii,
  dynCall_ifi,
  dynCall_iiiiiiiiiiiiii,
  dynCall_iiiiiiiii,
  dynCall_iiiiiiiiiiiiiiiiii,
  dynCall_iiiiiiiiiiiiiii,
  dynCall_iij,
  dynCall_iiiiiiiiii,
  dynCall_viiiiijjj,
  dynCall_iiijjj,
  dynCall_iiijj,
  dynCall_iiiiiiiiiffffffi,
  dynCall_iiiiiiiiifi,
  dynCall_iiiiiiiiiiiijjiifiiiiiii,
  dynCall_iiiiiiiiiiiiiiii,
  dynCall_iiiiiiiifi,
  dynCall_iiiiiiji,
  dynCall_iiif,
  dynCall_iiiiff,
  dynCall_viijj,
  dynCall_iiiiiiiiiiii,
  dynCall_viif,
  dynCall_viid,
  dynCall_iiijjjj,
  dynCall_iiiiijiiijjjjjjj,
  dynCall_viiiiiiiii,
  dynCall_iiiff,
  dynCall_j,
  dynCall_ji,
  dynCall_i,
  dynCall_vj,
  dynCall_viijii,
  dynCall_viijijj,
  dynCall_viiiij,
  dynCall_viiij,
  dynCall_iiij,
  dynCall_iiid,
  dynCall_jiji,
  dynCall_iidiiii,
  dynCall_viiiiiii,
  dynCall_viiiiiiiiii,
  dynCall_viiiiiiiiiiiiiii,
  dynCall_viij,
  dynCall_viiiiiiii,
  dynCall_viji,
  dynCall_iiiiij,
  dynCall_iiiiid,
  dynCall_iiiiijj,
  dynCall_iiiiiijj,
  _asyncify_start_unwind,
  _asyncify_stop_unwind,
  _asyncify_start_rewind,
  _asyncify_stop_rewind,
  __indirect_function_table,
  wasmTable;
function assignWasmExports(wasmExports) {
  _wllama_malloc = Module['_wllama_malloc'] = wasmExports['qb'];
  _wllama_start = Module['_wllama_start'] = wasmExports['rb'];
  _wllama_action = Module['_wllama_action'] = wasmExports['sb'];
  _wllama_exit = Module['_wllama_exit'] = wasmExports['tb'];
  _wllama_debug = Module['_wllama_debug'] = wasmExports['ub'];
  _main = Module['_main'] = wasmExports['vb'];
  _malloc = wasmExports['wb'];
  _free = wasmExports['xb'];
  _emwgpuCreateBindGroup = wasmExports['yb'];
  _emwgpuCreateBindGroupLayout = wasmExports['zb'];
  _emwgpuCreateCommandBuffer = wasmExports['Ab'];
  _emwgpuCreateCommandEncoder = wasmExports['Bb'];
  _emwgpuCreateComputePassEncoder = wasmExports['Cb'];
  _emwgpuCreateComputePipeline = wasmExports['Db'];
  _emwgpuCreateExternalTexture = wasmExports['Eb'];
  _emwgpuCreatePipelineLayout = wasmExports['Fb'];
  _emwgpuCreateQuerySet = wasmExports['Gb'];
  _emwgpuCreateRenderBundle = wasmExports['Hb'];
  _emwgpuCreateRenderBundleEncoder = wasmExports['Ib'];
  _emwgpuCreateRenderPassEncoder = wasmExports['Jb'];
  _emwgpuCreateRenderPipeline = wasmExports['Kb'];
  _emwgpuCreateSampler = wasmExports['Lb'];
  _emwgpuCreateSurface = wasmExports['Mb'];
  _emwgpuCreateTexture = wasmExports['Nb'];
  _emwgpuCreateTextureView = wasmExports['Ob'];
  _emwgpuCreateAdapter = wasmExports['Pb'];
  _emwgpuCreateBuffer = wasmExports['Qb'];
  _emwgpuCreateDevice = wasmExports['Rb'];
  _emwgpuCreateQueue = wasmExports['Sb'];
  _emwgpuCreateShaderModule = wasmExports['Tb'];
  _emwgpuOnDeviceLostCompleted = wasmExports['Ub'];
  _emwgpuOnMapAsyncCompleted = wasmExports['Vb'];
  _emwgpuOnRequestAdapterCompleted = wasmExports['Wb'];
  _emwgpuOnRequestDeviceCompleted = wasmExports['Xb'];
  _emwgpuOnWorkDoneCompleted = wasmExports['Yb'];
  _emwgpuOnUncapturedError = wasmExports['Zb'];
  _emscripten_builtin_memalign = wasmExports['$b'];
  __emscripten_timeout = wasmExports['ac'];
  _memalign = wasmExports['bc'];
  _setThrew = wasmExports['cc'];
  __emscripten_tempret_set = wasmExports['dc'];
  __emscripten_stack_restore = wasmExports['ec'];
  __emscripten_stack_alloc = wasmExports['fc'];
  _emscripten_stack_get_current = wasmExports['gc'];
  ___cxa_decrement_exception_refcount = wasmExports['hc'];
  ___cxa_increment_exception_refcount = wasmExports['ic'];
  ___cxa_can_catch = wasmExports['jc'];
  ___cxa_get_exception_ptr = wasmExports['kc'];
  dynCall_v = dynCalls['v'] = wasmExports['lc'];
  dynCall_ii = dynCalls['ii'] = wasmExports['mc'];
  dynCall_iii = dynCalls['iii'] = wasmExports['nc'];
  dynCall_viii = dynCalls['viii'] = wasmExports['oc'];
  dynCall_viiiii = dynCalls['viiiii'] = wasmExports['pc'];
  dynCall_vii = dynCalls['vii'] = wasmExports['qc'];
  dynCall_vi = dynCalls['vi'] = wasmExports['rc'];
  dynCall_iiiiiii = dynCalls['iiiiiii'] = wasmExports['sc'];
  dynCall_iiiii = dynCalls['iiiii'] = wasmExports['tc'];
  dynCall_iiiiii = dynCalls['iiiiii'] = wasmExports['uc'];
  dynCall_viiiiii = dynCalls['viiiiii'] = wasmExports['vc'];
  dynCall_vij = dynCalls['vij'] = wasmExports['wc'];
  dynCall_jii = dynCalls['jii'] = wasmExports['xc'];
  dynCall_viiii = dynCalls['viiii'] = wasmExports['yc'];
  dynCall_iiii = dynCalls['iiii'] = wasmExports['zc'];
  dynCall_iiiiiiii = dynCalls['iiiiiiii'] = wasmExports['Ac'];
  dynCall_iifff = dynCalls['iifff'] = wasmExports['Bc'];
  dynCall_iiiffiiii = dynCalls['iiiffiiii'] = wasmExports['Cc'];
  dynCall_ifi = dynCalls['ifi'] = wasmExports['Dc'];
  dynCall_iiiiiiiiiiiiii = dynCalls['iiiiiiiiiiiiii'] = wasmExports['Ec'];
  dynCall_iiiiiiiii = dynCalls['iiiiiiiii'] = wasmExports['Fc'];
  dynCall_iiiiiiiiiiiiiiiiii = dynCalls['iiiiiiiiiiiiiiiiii'] =
    wasmExports['Gc'];
  dynCall_iiiiiiiiiiiiiii = dynCalls['iiiiiiiiiiiiiii'] = wasmExports['Hc'];
  dynCall_iij = dynCalls['iij'] = wasmExports['Ic'];
  dynCall_iiiiiiiiii = dynCalls['iiiiiiiiii'] = wasmExports['Jc'];
  dynCall_viiiiijjj = dynCalls['viiiiijjj'] = wasmExports['Kc'];
  dynCall_iiijjj = dynCalls['iiijjj'] = wasmExports['Lc'];
  dynCall_iiijj = dynCalls['iiijj'] = wasmExports['Mc'];
  dynCall_iiiiiiiiiffffffi = dynCalls['iiiiiiiiiffffffi'] = wasmExports['Nc'];
  dynCall_iiiiiiiiifi = dynCalls['iiiiiiiiifi'] = wasmExports['Oc'];
  dynCall_iiiiiiiiiiiijjiifiiiiiii = dynCalls['iiiiiiiiiiiijjiifiiiiiii'] =
    wasmExports['Pc'];
  dynCall_iiiiiiiiiiiiiiii = dynCalls['iiiiiiiiiiiiiiii'] = wasmExports['Qc'];
  dynCall_iiiiiiiifi = dynCalls['iiiiiiiifi'] = wasmExports['Rc'];
  dynCall_iiiiiiji = dynCalls['iiiiiiji'] = wasmExports['Sc'];
  dynCall_iiif = dynCalls['iiif'] = wasmExports['Tc'];
  dynCall_iiiiff = dynCalls['iiiiff'] = wasmExports['Uc'];
  dynCall_viijj = dynCalls['viijj'] = wasmExports['Vc'];
  dynCall_iiiiiiiiiiii = dynCalls['iiiiiiiiiiii'] = wasmExports['Wc'];
  dynCall_viif = dynCalls['viif'] = wasmExports['Xc'];
  dynCall_viid = dynCalls['viid'] = wasmExports['Yc'];
  dynCall_iiijjjj = dynCalls['iiijjjj'] = wasmExports['Zc'];
  dynCall_iiiiijiiijjjjjjj = dynCalls['iiiiijiiijjjjjjj'] = wasmExports['_c'];
  dynCall_viiiiiiiii = dynCalls['viiiiiiiii'] = wasmExports['$c'];
  dynCall_iiiff = dynCalls['iiiff'] = wasmExports['ad'];
  dynCall_j = dynCalls['j'] = wasmExports['bd'];
  dynCall_ji = dynCalls['ji'] = wasmExports['cd'];
  dynCall_i = dynCalls['i'] = wasmExports['dd'];
  dynCall_vj = dynCalls['vj'] = wasmExports['ed'];
  dynCall_viijii = dynCalls['viijii'] = wasmExports['fd'];
  dynCall_viijijj = dynCalls['viijijj'] = wasmExports['gd'];
  dynCall_viiiij = dynCalls['viiiij'] = wasmExports['hd'];
  dynCall_viiij = dynCalls['viiij'] = wasmExports['id'];
  dynCall_iiij = dynCalls['iiij'] = wasmExports['jd'];
  dynCall_iiid = dynCalls['iiid'] = wasmExports['kd'];
  dynCall_jiji = dynCalls['jiji'] = wasmExports['ld'];
  dynCall_iidiiii = dynCalls['iidiiii'] = wasmExports['md'];
  dynCall_viiiiiii = dynCalls['viiiiiii'] = wasmExports['nd'];
  dynCall_viiiiiiiiii = dynCalls['viiiiiiiiii'] = wasmExports['od'];
  dynCall_viiiiiiiiiiiiiii = dynCalls['viiiiiiiiiiiiiii'] = wasmExports['pd'];
  dynCall_viij = dynCalls['viij'] = wasmExports['qd'];
  dynCall_viiiiiiii = dynCalls['viiiiiiii'] = wasmExports['rd'];
  dynCall_viji = dynCalls['viji'] = wasmExports['sd'];
  dynCall_iiiiij = dynCalls['iiiiij'] = wasmExports['td'];
  dynCall_iiiiid = dynCalls['iiiiid'] = wasmExports['ud'];
  dynCall_iiiiijj = dynCalls['iiiiijj'] = wasmExports['vd'];
  dynCall_iiiiiijj = dynCalls['iiiiiijj'] = wasmExports['wd'];
  _asyncify_start_unwind = wasmExports['xd'];
  _asyncify_stop_unwind = wasmExports['yd'];
  _asyncify_start_rewind = wasmExports['zd'];
  _asyncify_stop_rewind = wasmExports['Ad'];
  __indirect_function_table = wasmTable = wasmExports['_b'];
}
var wasmImports = {
  w: ___cxa_begin_catch,
  Ca: ___cxa_current_primary_exception,
  F: ___cxa_end_catch,
  b: ___cxa_find_matching_catch_2,
  o: ___cxa_find_matching_catch_3,
  H: ___cxa_find_matching_catch_4,
  $: ___cxa_rethrow,
  Ba: ___cxa_rethrow_primary_exception,
  z: ___cxa_throw,
  Da: ___cxa_uncaught_exceptions,
  l: ___resumeException,
  ga: ___syscall_fcntl64,
  Oa: ___syscall_ioctl,
  Pa: ___syscall_openat,
  Ta: __abort_js,
  ya: __emscripten_runtime_keepalive_clear,
  Ga: __mmap_js,
  Ia: __munmap_js,
  za: __setitimer_js,
  Ja: __tzset_js,
  Sa: _clock_time_get,
  Ra: _emscripten_date_now,
  Fa: _emscripten_get_heap_max,
  Ua: _emscripten_has_asyncify,
  Ea: _emscripten_resize_heap,
  Ya: _emwgpuAdapterRequestDevice,
  R: _emwgpuBufferDestroy,
  ja: _emwgpuBufferGetConstMappedRange,
  _a: _emwgpuBufferMapAsync,
  ia: _emwgpuBufferUnmap,
  p: _emwgpuDelete,
  O: _emwgpuDeviceCreateBuffer,
  ha: _emwgpuDeviceCreateShaderModule,
  Za: _emwgpuDeviceDestroy,
  Xa: _emwgpuInstanceRequestAdapter,
  Wa: _emwgpuQueueOnSubmittedWorkDone,
  Va: _emwgpuWaitAny,
  La: _environ_get,
  Ma: _environ_sizes_get,
  _: _fd_close,
  fa: _fd_read,
  Ka: _fd_seek,
  Na: _fd_write,
  Qa: ggml_webgpu_is_ios_browser,
  Z: invoke_i,
  ba: invoke_ifi,
  f: invoke_ii,
  ua: invoke_iifff,
  i: invoke_iii,
  ka: invoke_iiid,
  x: invoke_iiif,
  nb: invoke_iiiff,
  ea: invoke_iiiffiiii,
  h: invoke_iiii,
  oa: invoke_iiiiff,
  j: invoke_iiiii,
  n: invoke_iiiiii,
  c: invoke_iiiiiii,
  G: invoke_iiiiiiii,
  qa: invoke_iiiiiiiifi,
  C: invoke_iiiiiiiii,
  s: invoke_iiiiiiiiiffffffi,
  v: invoke_iiiiiiiiifi,
  g: invoke_iiiiiiiiii,
  E: invoke_iiiiiiiiiiii,
  sa: invoke_iiiiiiiiiiiiii,
  N: invoke_iiiiiiiiiiiiiii,
  u: invoke_iiiiiiiiiiiiiiii,
  da: invoke_iiiiiiiiiiiiiiiiii,
  A: invoke_iiiiiiiiiiiijjiifiiiiiii,
  pa: invoke_iiiiiiji,
  aa: invoke_iiiiijiiijjjjjjj,
  V: invoke_iiij,
  B: invoke_iiijj,
  q: invoke_iiijjj,
  D: invoke_iiijjjj,
  Q: invoke_iij,
  mb: invoke_j,
  M: invoke_ji,
  T: invoke_jii,
  d: invoke_v,
  t: invoke_vi,
  m: invoke_vii,
  jb: invoke_viid,
  kb: invoke_viif,
  k: invoke_viii,
  r: invoke_viiii,
  e: invoke_viiiii,
  L: invoke_viiiiii,
  J: invoke_viiiiiii,
  Y: invoke_viiiiiiiii,
  P: invoke_viiiiiiiiii,
  U: invoke_viiiiiiiiiiiiiii,
  S: invoke_viiiiijjj,
  K: invoke_viiiij,
  W: invoke_viiij,
  la: invoke_viijii,
  na: invoke_viijijj,
  ca: invoke_viijj,
  I: invoke_vij,
  X: invoke_vj,
  y: _llvm_eh_typeid_for,
  a: wasmMemory,
  xa: _proc_exit,
  Aa: _random_get,
  va: _wgpuAdapterGetFeatures,
  wa: _wgpuAdapterGetInfo,
  Ha: _wgpuAdapterGetLimits,
  ta: _wgpuAdapterHasFeature,
  ob: _wgpuBufferGetSize,
  gb: _wgpuCommandEncoderBeginComputePass,
  $a: _wgpuCommandEncoderCopyBufferToBuffer,
  bb: _wgpuCommandEncoderFinish,
  db: _wgpuComputePassEncoderDispatchWorkgroups,
  cb: _wgpuComputePassEncoderEnd,
  eb: _wgpuComputePassEncoderSetBindGroup,
  fb: _wgpuComputePassEncoderSetPipeline,
  lb: _wgpuComputePipelineGetBindGroupLayout,
  ib: _wgpuDeviceCreateBindGroup,
  hb: _wgpuDeviceCreateCommandEncoder,
  ra: _wgpuDeviceCreateComputePipeline,
  ab: _wgpuQueueSubmit,
  ma: _wgpuQueueWriteBuffer,
};
function invoke_v(index) {
  var sp = stackSave();
  try {
    dynCall_v(index);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_viii(index, a1, a2, a3) {
  var sp = stackSave();
  try {
    dynCall_viii(index, a1, a2, a3);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iii(index, a1, a2) {
  var sp = stackSave();
  try {
    return dynCall_iii(index, a1, a2);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_ii(index, a1) {
  var sp = stackSave();
  try {
    return dynCall_ii(index, a1);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_viiiii(index, a1, a2, a3, a4, a5) {
  var sp = stackSave();
  try {
    dynCall_viiiii(index, a1, a2, a3, a4, a5);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_vii(index, a1, a2) {
  var sp = stackSave();
  try {
    dynCall_vii(index, a1, a2);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiii(index, a1, a2, a3, a4, a5, a6) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiii(index, a1, a2, a3, a4, a5, a6);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_vi(index, a1) {
  var sp = stackSave();
  try {
    dynCall_vi(index, a1);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiii(index, a1, a2, a3) {
  var sp = stackSave();
  try {
    return dynCall_iiii(index, a1, a2, a3);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiii(index, a1, a2, a3, a4) {
  var sp = stackSave();
  try {
    return dynCall_iiiii(index, a1, a2, a3, a4);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_jii(index, a1, a2) {
  var sp = stackSave();
  try {
    return dynCall_jii(index, a1, a2);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
    return 0n;
  }
}
function invoke_viiii(index, a1, a2, a3, a4) {
  var sp = stackSave();
  try {
    dynCall_viiii(index, a1, a2, a3, a4);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiii(index, a1, a2, a3, a4, a5, a6, a7);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_vij(index, a1, a2) {
  var sp = stackSave();
  try {
    dynCall_vij(index, a1, a2);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iifff(index, a1, a2, a3, a4) {
  var sp = stackSave();
  try {
    return dynCall_iifff(index, a1, a2, a3, a4);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiffiiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
  var sp = stackSave();
  try {
    return dynCall_iiiffiiii(index, a1, a2, a3, a4, a5, a6, a7, a8);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiiiiiiii(
  index,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13
) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiiiiiii(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13
    );
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_viiiiii(index, a1, a2, a3, a4, a5, a6) {
  var sp = stackSave();
  try {
    dynCall_viiiiii(index, a1, a2, a3, a4, a5, a6);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iij(index, a1, a2) {
  var sp = stackSave();
  try {
    return dynCall_iij(index, a1, a2);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiii(index, a1, a2, a3, a4, a5) {
  var sp = stackSave();
  try {
    return dynCall_iiiiii(index, a1, a2, a3, a4, a5);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiiiiiiiiiiii(
  index,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14,
  a15,
  a16,
  a17
) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiiiiiiiiiii(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
      a14,
      a15,
      a16,
      a17
    );
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiiiiiiiii(
  index,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14
) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiiiiiiii(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
      a14
    );
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiif(index, a1, a2, a3) {
  var sp = stackSave();
  try {
    return dynCall_iiif(index, a1, a2, a3);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiiiiii(
  index,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11
) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiiiii(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11
    );
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_viijj(index, a1, a2, a3, a4) {
  var sp = stackSave();
  try {
    dynCall_viijj(index, a1, a2, a3, a4);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiijj(index, a1, a2, a3, a4) {
  var sp = stackSave();
  try {
    return dynCall_iiijj(index, a1, a2, a3, a4);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiijjjj(index, a1, a2, a3, a4, a5, a6) {
  var sp = stackSave();
  try {
    return dynCall_iiijjjj(index, a1, a2, a3, a4, a5, a6);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiiiffffffi(
  index,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14,
  a15
) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiiffffffi(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
      a14,
      a15
    );
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_viiiiijjj(index, a1, a2, a3, a4, a5, a6, a7, a8) {
  var sp = stackSave();
  try {
    dynCall_viiiiijjj(index, a1, a2, a3, a4, a5, a6, a7, a8);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_i(index) {
  var sp = stackSave();
  try {
    return dynCall_i(index);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_ifi(index, a1, a2) {
  var sp = stackSave();
  try {
    return dynCall_ifi(index, a1, a2);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiijjj(index, a1, a2, a3, a4, a5) {
  var sp = stackSave();
  try {
    return dynCall_iiijjj(index, a1, a2, a3, a4, a5);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiiifi(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiifi(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiiiiiijjiifiiiiiii(
  index,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14,
  a15,
  a16,
  a17,
  a18,
  a19,
  a20,
  a21,
  a22,
  a23
) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiiiiijjiifiiiiiii(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
      a14,
      a15,
      a16,
      a17,
      a18,
      a19,
      a20,
      a21,
      a22,
      a23
    );
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiiiiiiiiii(
  index,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14,
  a15
) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiiiiiiiii(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
      a14,
      a15
    );
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiifi(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiifi(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiji(index, a1, a2, a3, a4, a5, a6, a7) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiji(index, a1, a2, a3, a4, a5, a6, a7);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiff(index, a1, a2, a3, a4, a5) {
  var sp = stackSave();
  try {
    return dynCall_iiiiff(index, a1, a2, a3, a4, a5);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiijiiijjjjjjj(
  index,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14,
  a15
) {
  var sp = stackSave();
  try {
    return dynCall_iiiiijiiijjjjjjj(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
      a14,
      a15
    );
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_viiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
  var sp = stackSave();
  try {
    dynCall_viiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_ji(index, a1) {
  var sp = stackSave();
  try {
    return dynCall_ji(index, a1);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
    return 0n;
  }
}
function invoke_iiiff(index, a1, a2, a3, a4) {
  var sp = stackSave();
  try {
    return dynCall_iiiff(index, a1, a2, a3, a4);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_vj(index, a1) {
  var sp = stackSave();
  try {
    dynCall_vj(index, a1);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_viijijj(index, a1, a2, a3, a4, a5, a6) {
  var sp = stackSave();
  try {
    dynCall_viijijj(index, a1, a2, a3, a4, a5, a6);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_viijii(index, a1, a2, a3, a4, a5) {
  var sp = stackSave();
  try {
    dynCall_viijii(index, a1, a2, a3, a4, a5);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_viiiij(index, a1, a2, a3, a4, a5) {
  var sp = stackSave();
  try {
    dynCall_viiiij(index, a1, a2, a3, a4, a5);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_viiij(index, a1, a2, a3, a4) {
  var sp = stackSave();
  try {
    dynCall_viiij(index, a1, a2, a3, a4);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiij(index, a1, a2, a3) {
  var sp = stackSave();
  try {
    return dynCall_iiij(index, a1, a2, a3);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiid(index, a1, a2, a3) {
  var sp = stackSave();
  try {
    return dynCall_iiid(index, a1, a2, a3);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_j(index) {
  var sp = stackSave();
  try {
    return dynCall_j(index);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
    return 0n;
  }
}
function invoke_viiiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
  var sp = stackSave();
  try {
    dynCall_viiiiiii(index, a1, a2, a3, a4, a5, a6, a7);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_viiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
  var sp = stackSave();
  try {
    dynCall_viiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_viiiiiiiiiiiiiii(
  index,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14,
  a15
) {
  var sp = stackSave();
  try {
    dynCall_viiiiiiiiiiiiiii(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
      a14,
      a15
    );
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_viif(index, a1, a2, a3) {
  var sp = stackSave();
  try {
    dynCall_viif(index, a1, a2, a3);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_viid(index, a1, a2, a3) {
  var sp = stackSave();
  try {
    dynCall_viid(index, a1, a2, a3);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function applySignatureConversions(wasmExports) {
  wasmExports = Object.assign({}, wasmExports);
  var makeWrapper_pp = (f) => (a0) => f(a0) >>> 0;
  var makeWrapper_ppp = (f) => (a0, a1) => f(a0, a1) >>> 0;
  var makeWrapper_p = (f) => () => f() >>> 0;
  wasmExports['wb'] = makeWrapper_pp(wasmExports['wb']);
  wasmExports['$b'] = makeWrapper_ppp(wasmExports['$b']);
  wasmExports['bc'] = makeWrapper_ppp(wasmExports['bc']);
  wasmExports['fc'] = makeWrapper_pp(wasmExports['fc']);
  wasmExports['gc'] = makeWrapper_p(wasmExports['gc']);
  wasmExports['kc'] = makeWrapper_pp(wasmExports['kc']);
  return wasmExports;
}
function callMain() {
  var entryFunction = _main;
  var argc = 0;
  var argv = 0;
  try {
    var ret = entryFunction(argc, argv);
    exitJS(ret, true);
    return ret;
  } catch (e) {
    return handleException(e);
  }
}
function run() {
  if (runDependencies > 0) {
    dependenciesFulfilled = run;
    return;
  }
  preRun();
  if (runDependencies > 0) {
    dependenciesFulfilled = run;
    return;
  }
  function doRun() {
    Module['calledRun'] = true;
    if (ABORT) return;
    initRuntime();
    preMain();
    Module['onRuntimeInitialized']?.();
    var noInitialRun = Module['noInitialRun'] || false;
    if (!noInitialRun) callMain();
    postRun();
  }
  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(() => {
      setTimeout(() => Module['setStatus'](''), 1);
      doRun();
    }, 1);
  } else {
    doRun();
  }
}
var wasmExports;
createWasm();
run();
`,Am=`var Module = typeof Module != 'undefined' ? Module : {};
var ENVIRONMENT_IS_WEB = !!globalThis.window;
var ENVIRONMENT_IS_WORKER = !!globalThis.WorkerGlobalScope;
var ENVIRONMENT_IS_NODE =
  globalThis.process?.versions?.node && globalThis.process?.type != 'renderer';
var ENVIRONMENT_IS_PTHREAD =
  ENVIRONMENT_IS_WORKER && self.name?.startsWith('em-pthread');
if (ENVIRONMENT_IS_NODE) {
  var worker_threads = require('worker_threads');
  global.Worker = worker_threads.Worker;
  ENVIRONMENT_IS_WORKER = !worker_threads.isMainThread;
  ENVIRONMENT_IS_PTHREAD =
    ENVIRONMENT_IS_WORKER && worker_threads['workerData'] == 'em-pthread';
}
var arguments_ = [];
var thisProgram = './this.program';
var quit_ = (status, toThrow) => {
  throw toThrow;
};
var _scriptName = globalThis.document?.currentScript?.src;
if (typeof __filename != 'undefined') {
  _scriptName = __filename;
} else if (ENVIRONMENT_IS_WORKER) {
  _scriptName = self.location.href;
}
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}
var readAsync, readBinary;
if (ENVIRONMENT_IS_NODE) {
  var fs = require('fs');
  scriptDirectory = __dirname + '/';
  readBinary = (filename) => {
    filename = isFileURI(filename) ? new URL(filename) : filename;
    var ret = fs.readFileSync(filename);
    return ret;
  };
  readAsync = async (filename, binary = true) => {
    filename = isFileURI(filename) ? new URL(filename) : filename;
    var ret = fs.readFileSync(filename, binary ? undefined : 'utf8');
    return ret;
  };
  if (process.argv.length > 1) {
    thisProgram = process.argv[1].replace(/\\\\/g, '/');
  }
  arguments_ = process.argv.slice(2);
  if (typeof module != 'undefined') {
    module['exports'] = Module;
  }
  quit_ = (status, toThrow) => {
    process.exitCode = status;
    throw toThrow;
  };
} else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  try {
    scriptDirectory = new URL('.', _scriptName).href;
  } catch {}
  if (!ENVIRONMENT_IS_NODE) {
    if (ENVIRONMENT_IS_WORKER) {
      readBinary = (url) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.responseType = 'arraybuffer';
        xhr.send(null);
        return new Uint8Array(xhr.response);
      };
    }
    readAsync = async (url) => {
      if (isFileURI(url)) {
        return new Promise((resolve, reject) => {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.responseType = 'arraybuffer';
          xhr.onload = () => {
            if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) {
              resolve(xhr.response);
              return;
            }
            reject(xhr.status);
          };
          xhr.onerror = reject;
          xhr.send(null);
        });
      }
      var response = await fetch(url, { credentials: 'same-origin' });
      if (response.ok) {
        return response.arrayBuffer();
      }
      throw new Error(response.status + ' : ' + response.url);
    };
  }
} else {
}
var defaultPrint = console.log.bind(console);
var defaultPrintErr = console.error.bind(console);
if (ENVIRONMENT_IS_NODE) {
  var utils = require('util');
  var stringify = (a) => (typeof a == 'object' ? utils.inspect(a) : a);
  defaultPrint = (...args) =>
    fs.writeSync(1, args.map(stringify).join(' ') + '\\n');
  defaultPrintErr = (...args) =>
    fs.writeSync(2, args.map(stringify).join(' ') + '\\n');
}
var out = defaultPrint;
var err = defaultPrintErr;
var wasmBinary;
var wasmModule;
var ABORT = false;
var EXITSTATUS;
function assert(condition, text) {
  if (!condition) {
    abort(text);
  }
}
var isFileURI = (filename) => filename.startsWith('file://');
function growMemViews() {
  if (wasmMemory.buffer != HEAP8.buffer) {
    updateMemoryViews();
  }
}
if (ENVIRONMENT_IS_NODE && ENVIRONMENT_IS_PTHREAD) {
  var parentPort = worker_threads['parentPort'];
  parentPort.on('message', (msg) => global.onmessage?.({ data: msg }));
  Object.assign(globalThis, {
    self: global,
    postMessage: (msg) => parentPort['postMessage'](msg),
  });
  process.on('uncaughtException', (err) => {
    postMessage({ cmd: 'uncaughtException', error: err });
    process.exit(1);
  });
}
var startWorker;
if (ENVIRONMENT_IS_PTHREAD) {
  var initializedJS = false;
  self.onunhandledrejection = (e) => {
    throw e.reason || e;
  };
  function handleMessage(e) {
    try {
      var msgData = e['data'];
      var cmd = msgData.cmd;
      if (cmd === 'load') {
        let messageQueue = [];
        self.onmessage = (e) => messageQueue.push(e);
        startWorker = () => {
          postMessage({ cmd: 'loaded' });
          for (let msg of messageQueue) {
            handleMessage(msg);
          }
          self.onmessage = handleMessage;
        };
        for (const handler of msgData.handlers) {
          if (!Module[handler] || Module[handler].proxy) {
            Module[handler] = (...args) => {
              postMessage({ cmd: 'callHandler', handler, args });
            };
            if (handler == 'print') out = Module[handler];
            if (handler == 'printErr') err = Module[handler];
          }
        }
        wasmMemory = msgData.wasmMemory;
        updateMemoryViews();
        wasmModule = msgData.wasmModule;
        createWasm();
        run();
      } else if (cmd === 'run') {
        establishStackSpace(msgData.pthread_ptr);
        __emscripten_thread_init(msgData.pthread_ptr, 0, 0, 1, 0, 0);
        PThread.threadInitTLS();
        __emscripten_thread_mailbox_await(msgData.pthread_ptr);
        if (!initializedJS) {
          initializedJS = true;
        }
        try {
          invokeEntryPoint(msgData.start_routine, msgData.arg);
        } catch (ex) {
          if (ex != 'unwind') {
            throw ex;
          }
        }
      } else if (msgData.target === 'setimmediate') {
      } else if (cmd === 'checkMailbox') {
        if (initializedJS) {
          checkMailbox();
        }
      } else if (cmd) {
        err(\`worker: received unknown command \${cmd}\`);
        err(msgData);
      }
    } catch (ex) {
      __emscripten_thread_crashed();
      throw ex;
    }
  }
  self.onmessage = handleMessage;
}
var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
var HEAP64, HEAPU64;
var runtimeInitialized = false;
function updateMemoryViews() {
  var b = wasmMemory.buffer;
  HEAP8 = new Int8Array(b);
  HEAP16 = new Int16Array(b);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(b);
  HEAPU16 = new Uint16Array(b);
  HEAP32 = new Int32Array(b);
  HEAPU32 = new Uint32Array(b);
  HEAPF32 = new Float32Array(b);
  HEAPF64 = new Float64Array(b);
  HEAP64 = new BigInt64Array(b);
  HEAPU64 = new BigUint64Array(b);
}
function initMemory() {
  if (ENVIRONMENT_IS_PTHREAD) {
    return;
  }
  if (Module['wasmMemory']) {
    wasmMemory = Module['wasmMemory'];
  } else {
    var INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 134217728;
    wasmMemory = new WebAssembly.Memory({
      initial: INITIAL_MEMORY / 65536,
      maximum: 65536,
      shared: true,
    });
  }
  updateMemoryViews();
}
function preRun() {
  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function')
      Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }
  callRuntimeCallbacks(onPreRuns);
}
function initRuntime() {
  runtimeInitialized = true;
  if (ENVIRONMENT_IS_PTHREAD) return startWorker();
  if (!Module['noFSInit'] && !FS.initialized) FS.init();
  TTY.init();
  wasmExports['Eb']();
  FS.ignorePermissions = false;
}
function preMain() {}
function postRun() {
  if (ENVIRONMENT_IS_PTHREAD) {
    return;
  }
  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function')
      Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }
  callRuntimeCallbacks(onPostRuns);
}
function abort(what) {
  Module['onAbort']?.(what);
  what = 'Aborted(' + what + ')';
  err(what);
  ABORT = true;
  what += '. Build with -sASSERTIONS for more info.';
  var e = new WebAssembly.RuntimeError(what);
  throw e;
}
var wasmBinaryFile;
function findWasmBinary() {
  return locateFile('wllama.wasm');
}
function getBinarySync(file) {
  if (file == wasmBinaryFile && wasmBinary) {
    return new Uint8Array(wasmBinary);
  }
  if (readBinary) {
    return readBinary(file);
  }
  throw 'both async and sync fetching of the wasm failed';
}
async function getWasmBinary(binaryFile) {
  if (!wasmBinary) {
    try {
      var response = await readAsync(binaryFile);
      return new Uint8Array(response);
    } catch {}
  }
  return getBinarySync(binaryFile);
}
async function instantiateArrayBuffer(binaryFile, imports) {
  try {
    var binary = await getWasmBinary(binaryFile);
    var instance = await WebAssembly.instantiate(binary, imports);
    return instance;
  } catch (reason) {
    err(\`failed to asynchronously prepare wasm: \${reason}\`);
    abort(reason);
  }
}
async function instantiateAsync(binary, binaryFile, imports) {
  if (!binary && !isFileURI(binaryFile) && !ENVIRONMENT_IS_NODE) {
    try {
      var response = fetch(binaryFile, { credentials: 'same-origin' });
      var instantiationResult = await WebAssembly.instantiateStreaming(
        response,
        imports
      );
      return instantiationResult;
    } catch (reason) {
      err(\`wasm streaming compile failed: \${reason}\`);
      err('falling back to ArrayBuffer instantiation');
    }
  }
  return instantiateArrayBuffer(binaryFile, imports);
}
function getWasmImports() {
  assignWasmImports();
  var imports = { a: wasmImports };
  return imports;
}
async function createWasm() {
  function receiveInstance(instance, module) {
    wasmExports = instance.exports;
    wasmExports = Asyncify.instrumentWasmExports(wasmExports);
    wasmExports = applySignatureConversions(wasmExports);
    registerTLSInit(wasmExports['nc']);
    assignWasmExports(wasmExports);
    wasmModule = module;
    removeRunDependency('wasm-instantiate');
    return wasmExports;
  }
  addRunDependency('wasm-instantiate');
  function receiveInstantiationResult(result) {
    return receiveInstance(result['instance'], result['module']);
  }
  var info = getWasmImports();
  if (Module['instantiateWasm']) {
    return new Promise((resolve, reject) => {
      Module['instantiateWasm'](info, (inst, mod) => {
        resolve(receiveInstance(inst, mod));
      });
    });
  }
  if (ENVIRONMENT_IS_PTHREAD) {
    var instance = new WebAssembly.Instance(wasmModule, getWasmImports());
    return receiveInstance(instance, wasmModule);
  }
  wasmBinaryFile ??= findWasmBinary();
  var result = await instantiateAsync(wasmBinary, wasmBinaryFile, info);
  var exports = receiveInstantiationResult(result);
  return exports;
}
class ExitStatus {
  name = 'ExitStatus';
  constructor(status) {
    this.message = \`Program terminated with exit(\${status})\`;
    this.status = status;
  }
}
var terminateWorker = (worker) => {
  worker.terminate();
  worker.onmessage = (e) => {};
};
var cleanupThread = (pthread_ptr) => {
  var worker = PThread.pthreads[pthread_ptr];
  PThread.returnWorkerToPool(worker);
};
var callRuntimeCallbacks = (callbacks) => {
  while (callbacks.length > 0) {
    callbacks.shift()(Module);
  }
};
var onPreRuns = [];
var addOnPreRun = (cb) => onPreRuns.push(cb);
var runDependencies = 0;
var dependenciesFulfilled = null;
var removeRunDependency = (id) => {
  runDependencies--;
  Module['monitorRunDependencies']?.(runDependencies);
  if (runDependencies == 0) {
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback();
    }
  }
};
var addRunDependency = (id) => {
  runDependencies++;
  Module['monitorRunDependencies']?.(runDependencies);
};
var spawnThread = (threadParams) => {
  var worker = PThread.getNewWorker();
  if (!worker) {
    return 6;
  }
  PThread.runningWorkers.push(worker);
  PThread.pthreads[threadParams.pthread_ptr] = worker;
  worker.pthread_ptr = threadParams.pthread_ptr;
  var msg = {
    cmd: 'run',
    start_routine: threadParams.startRoutine,
    arg: threadParams.arg,
    pthread_ptr: threadParams.pthread_ptr,
  };
  if (ENVIRONMENT_IS_NODE) {
    worker.unref();
  }
  worker.postMessage(msg, threadParams.transferList);
  return 0;
};
var runtimeKeepaliveCounter = 0;
var keepRuntimeAlive = () => noExitRuntime || runtimeKeepaliveCounter > 0;
var stackSave = () => _emscripten_stack_get_current();
var stackRestore = (val) => __emscripten_stack_restore(val);
var stackAlloc = (sz) => __emscripten_stack_alloc(sz);
var proxyToMainThread = (funcIndex, emAsmAddr, sync, ...callArgs) => {
  var serializedNumCallArgs = callArgs.length * 2;
  var sp = stackSave();
  var args = stackAlloc(serializedNumCallArgs * 8);
  var b = args >>> 3;
  for (var i = 0; i < callArgs.length; i++) {
    var arg = callArgs[i];
    if (typeof arg == 'bigint') {
      (growMemViews(), HEAP64)[(b + 2 * i) >>> 0] = 1n;
      (growMemViews(), HEAP64)[(b + 2 * i + 1) >>> 0] = arg;
    } else {
      (growMemViews(), HEAP64)[(b + 2 * i) >>> 0] = 0n;
      (growMemViews(), HEAPF64)[(b + 2 * i + 1) >>> 0] = arg;
    }
  }
  var rtn = __emscripten_run_js_on_main_thread(
    funcIndex,
    emAsmAddr,
    serializedNumCallArgs,
    args,
    sync
  );
  stackRestore(sp);
  return rtn;
};
function _proc_exit(code) {
  if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(0, 0, 1, code);
  EXITSTATUS = code;
  if (!keepRuntimeAlive()) {
    PThread.terminateAllThreads();
    Module['onExit']?.(code);
    ABORT = true;
  }
  quit_(code, new ExitStatus(code));
}
function exitOnMainThread(returnCode) {
  if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(1, 0, 0, returnCode);
  _exit(returnCode);
}
var exitJS = (status, implicit) => {
  EXITSTATUS = status;
  if (ENVIRONMENT_IS_PTHREAD) {
    exitOnMainThread(status);
    throw 'unwind';
  }
  _proc_exit(status);
};
var _exit = exitJS;
var PThread = {
  unusedWorkers: [],
  runningWorkers: [],
  tlsInitFunctions: [],
  pthreads: {},
  init() {
    if (!ENVIRONMENT_IS_PTHREAD) {
      PThread.initMainThread();
    }
  },
  initMainThread() {
    var pthreadPoolSize = Module['pthreadPoolSize'];
    while (pthreadPoolSize--) {
      PThread.allocateUnusedWorker();
    }
    addOnPreRun(async () => {
      var pthreadPoolReady = PThread.loadWasmModuleToAllWorkers();
      addRunDependency('loading-workers');
      await pthreadPoolReady;
      removeRunDependency('loading-workers');
    });
  },
  terminateAllThreads: () => {
    for (var worker of PThread.runningWorkers) {
      terminateWorker(worker);
    }
    for (var worker of PThread.unusedWorkers) {
      terminateWorker(worker);
    }
    PThread.unusedWorkers = [];
    PThread.runningWorkers = [];
    PThread.pthreads = {};
  },
  returnWorkerToPool: (worker) => {
    var pthread_ptr = worker.pthread_ptr;
    delete PThread.pthreads[pthread_ptr];
    PThread.unusedWorkers.push(worker);
    PThread.runningWorkers.splice(PThread.runningWorkers.indexOf(worker), 1);
    worker.pthread_ptr = 0;
    __emscripten_thread_free_data(pthread_ptr);
  },
  threadInitTLS() {
    PThread.tlsInitFunctions.forEach((f) => f());
  },
  loadWasmModuleToWorker: (worker) =>
    new Promise((onFinishedLoading) => {
      worker.onmessage = (e) => {
        var d = e['data'];
        var cmd = d.cmd;
        if (d.targetThread && d.targetThread != _pthread_self()) {
          var targetWorker = PThread.pthreads[d.targetThread];
          if (targetWorker) {
            targetWorker.postMessage(d, d.transferList);
          } else {
            err(
              \`Internal error! Worker sent a message "\${cmd}" to target pthread \${d.targetThread}, but that thread no longer exists!\`
            );
          }
          return;
        }
        if (cmd === 'checkMailbox') {
          checkMailbox();
        } else if (cmd === 'spawnThread') {
          spawnThread(d);
        } else if (cmd === 'cleanupThread') {
          callUserCallback(() => cleanupThread(d.thread));
        } else if (cmd === 'loaded') {
          worker.loaded = true;
          if (ENVIRONMENT_IS_NODE && !worker.pthread_ptr) {
            worker.unref();
          }
          onFinishedLoading(worker);
        } else if (d.target === 'setimmediate') {
          worker.postMessage(d);
        } else if (cmd === 'uncaughtException') {
          worker.onerror(d.error);
        } else if (cmd === 'callHandler') {
          Module[d.handler](...d.args);
        } else if (cmd) {
          err(\`worker sent an unknown command \${cmd}\`);
        }
      };
      worker.onerror = (e) => {
        var message = 'worker sent an error!';
        err(\`\${message} \${e.filename}:\${e.lineno}: \${e.message}\`);
        throw e;
      };
      if (ENVIRONMENT_IS_NODE) {
        worker.on('message', (data) => worker.onmessage({ data }));
        worker.on('error', (e) => worker.onerror(e));
      }
      var handlers = [];
      var knownHandlers = ['onExit', 'onAbort', 'print', 'printErr'];
      for (var handler of knownHandlers) {
        if (Module.propertyIsEnumerable(handler)) {
          handlers.push(handler);
        }
      }
      worker.postMessage({ cmd: 'load', handlers, wasmMemory, wasmModule });
    }),
  async loadWasmModuleToAllWorkers() {
    if (ENVIRONMENT_IS_PTHREAD) {
      return;
    }
    let pthreadPoolReady = Promise.all(
      PThread.unusedWorkers.map(PThread.loadWasmModuleToWorker)
    );
    return pthreadPoolReady;
  },
  allocateUnusedWorker() {
    var worker;
    var pthreadMainJs = _scriptName;
    if (Module['mainScriptUrlOrBlob']) {
      pthreadMainJs = Module['mainScriptUrlOrBlob'];
      if (typeof pthreadMainJs != 'string') {
        pthreadMainJs = URL.createObjectURL(pthreadMainJs);
      }
    }
    worker = new Worker(pthreadMainJs, {
      workerData: 'em-pthread',
      name: 'em-pthread',
    });
    PThread.unusedWorkers.push(worker);
  },
  getNewWorker() {
    if (PThread.unusedWorkers.length == 0) {
      PThread.allocateUnusedWorker();
      PThread.loadWasmModuleToWorker(PThread.unusedWorkers[0]);
    }
    return PThread.unusedWorkers.pop();
  },
};
var onPostRuns = [];
var addOnPostRun = (cb) => onPostRuns.push(cb);
var dynCalls = {};
function establishStackSpace(pthread_ptr) {
  var stackHigh = (growMemViews(), HEAPU32)[((pthread_ptr + 52) >>> 2) >>> 0];
  var stackSize = (growMemViews(), HEAPU32)[((pthread_ptr + 56) >>> 2) >>> 0];
  var stackLow = stackHigh - stackSize;
  _emscripten_stack_set_limits(stackHigh, stackLow);
  stackRestore(stackHigh);
}
var invokeEntryPoint = (ptr, arg) => {
  runtimeKeepaliveCounter = 0;
  noExitRuntime = 0;
  var result = ((a1) => dynCall_ii(ptr, a1))(arg);
  function finish(result) {
    if (keepRuntimeAlive()) {
      EXITSTATUS = result;
      return;
    }
    __emscripten_thread_exit(result);
  }
  finish(result);
};
invokeEntryPoint.isAsync = true;
var noExitRuntime = true;
var registerTLSInit = (tlsInitFunc) =>
  PThread.tlsInitFunctions.push(tlsInitFunc);
var wasmMemory;
var INT53_MAX = 9007199254740992;
var INT53_MIN = -9007199254740992;
var bigintToI53Checked = (num) =>
  num < INT53_MIN || num > INT53_MAX ? NaN : Number(num);
var UTF8Decoder = globalThis.TextDecoder && new TextDecoder();
var findStringEnd = (heapOrArray, idx, maxBytesToRead, ignoreNul) => {
  var maxIdx = idx + maxBytesToRead;
  if (ignoreNul) return maxIdx;
  while (heapOrArray[idx] && !(idx >= maxIdx)) ++idx;
  return idx;
};
var UTF8ArrayToString = (heapOrArray, idx = 0, maxBytesToRead, ignoreNul) => {
  idx >>>= 0;
  var endPtr = findStringEnd(heapOrArray, idx, maxBytesToRead, ignoreNul);
  if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
    return UTF8Decoder.decode(
      heapOrArray.buffer instanceof ArrayBuffer
        ? heapOrArray.subarray(idx, endPtr)
        : heapOrArray.slice(idx, endPtr)
    );
  }
  var str = '';
  while (idx < endPtr) {
    var u0 = heapOrArray[idx++];
    if (!(u0 & 128)) {
      str += String.fromCharCode(u0);
      continue;
    }
    var u1 = heapOrArray[idx++] & 63;
    if ((u0 & 224) == 192) {
      str += String.fromCharCode(((u0 & 31) << 6) | u1);
      continue;
    }
    var u2 = heapOrArray[idx++] & 63;
    if ((u0 & 240) == 224) {
      u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
    } else {
      u0 =
        ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heapOrArray[idx++] & 63);
    }
    if (u0 < 65536) {
      str += String.fromCharCode(u0);
    } else {
      var ch = u0 - 65536;
      str += String.fromCharCode(55296 | (ch >> 10), 56320 | (ch & 1023));
    }
  }
  return str;
};
var UTF8ToString = (ptr, maxBytesToRead, ignoreNul) => {
  ptr >>>= 0;
  return ptr
    ? UTF8ArrayToString(
        (growMemViews(), HEAPU8),
        ptr,
        maxBytesToRead,
        ignoreNul
      )
    : '';
};
var exceptionCaught = [];
var uncaughtExceptionCount = 0;
function ___cxa_begin_catch(ptr) {
  ptr >>>= 0;
  var info = new ExceptionInfo(ptr);
  if (!info.get_caught()) {
    info.set_caught(true);
    uncaughtExceptionCount--;
  }
  info.set_rethrown(false);
  exceptionCaught.push(info);
  ___cxa_increment_exception_refcount(ptr);
  return ___cxa_get_exception_ptr(ptr);
}
function ___cxa_current_primary_exception() {
  if (!exceptionCaught.length) {
    return 0;
  }
  var info = exceptionCaught[exceptionCaught.length - 1];
  ___cxa_increment_exception_refcount(info.excPtr);
  return info.excPtr;
}
var exceptionLast = 0;
var ___cxa_end_catch = () => {
  _setThrew(0, 0);
  var info = exceptionCaught.pop();
  ___cxa_decrement_exception_refcount(info.excPtr);
  exceptionLast = 0;
};
class ExceptionInfo {
  constructor(excPtr) {
    this.excPtr = excPtr;
    this.ptr = excPtr - 24;
  }
  set_type(type) {
    (growMemViews(), HEAPU32)[((this.ptr + 4) >>> 2) >>> 0] = type;
  }
  get_type() {
    return (growMemViews(), HEAPU32)[((this.ptr + 4) >>> 2) >>> 0];
  }
  set_destructor(destructor) {
    (growMemViews(), HEAPU32)[((this.ptr + 8) >>> 2) >>> 0] = destructor;
  }
  get_destructor() {
    return (growMemViews(), HEAPU32)[((this.ptr + 8) >>> 2) >>> 0];
  }
  set_caught(caught) {
    caught = caught ? 1 : 0;
    (growMemViews(), HEAP8)[(this.ptr + 12) >>> 0] = caught;
  }
  get_caught() {
    return (growMemViews(), HEAP8)[(this.ptr + 12) >>> 0] != 0;
  }
  set_rethrown(rethrown) {
    rethrown = rethrown ? 1 : 0;
    (growMemViews(), HEAP8)[(this.ptr + 13) >>> 0] = rethrown;
  }
  get_rethrown() {
    return (growMemViews(), HEAP8)[(this.ptr + 13) >>> 0] != 0;
  }
  init(type, destructor) {
    this.set_adjusted_ptr(0);
    this.set_type(type);
    this.set_destructor(destructor);
  }
  set_adjusted_ptr(adjustedPtr) {
    (growMemViews(), HEAPU32)[((this.ptr + 16) >>> 2) >>> 0] = adjustedPtr;
  }
  get_adjusted_ptr() {
    return (growMemViews(), HEAPU32)[((this.ptr + 16) >>> 2) >>> 0];
  }
}
var setTempRet0 = (val) => __emscripten_tempret_set(val);
var findMatchingCatch = (args) => {
  var thrown = exceptionLast;
  if (!thrown) {
    setTempRet0(0);
    return 0;
  }
  var info = new ExceptionInfo(thrown);
  info.set_adjusted_ptr(thrown);
  var thrownType = info.get_type();
  if (!thrownType) {
    setTempRet0(0);
    return thrown;
  }
  for (var caughtType of args) {
    if (caughtType === 0 || caughtType === thrownType) {
      break;
    }
    var adjusted_ptr_addr = info.ptr + 16;
    if (___cxa_can_catch(caughtType, thrownType, adjusted_ptr_addr)) {
      setTempRet0(caughtType);
      return thrown;
    }
  }
  setTempRet0(thrownType);
  return thrown;
};
function ___cxa_find_matching_catch_2() {
  return findMatchingCatch([]);
}
function ___cxa_find_matching_catch_3(arg0) {
  arg0 >>>= 0;
  return findMatchingCatch([arg0]);
}
function ___cxa_find_matching_catch_4(arg0, arg1) {
  arg0 >>>= 0;
  arg1 >>>= 0;
  return findMatchingCatch([arg0, arg1]);
}
var ___cxa_rethrow = () => {
  var info = exceptionCaught.pop();
  if (!info) {
    abort('no exception to throw');
  }
  var ptr = info.excPtr;
  if (!info.get_rethrown()) {
    exceptionCaught.push(info);
    info.set_rethrown(true);
    info.set_caught(false);
    uncaughtExceptionCount++;
  }
  exceptionLast = ptr;
  throw exceptionLast;
};
function ___cxa_rethrow_primary_exception(ptr) {
  ptr >>>= 0;
  if (!ptr) return;
  var info = new ExceptionInfo(ptr);
  exceptionCaught.push(info);
  info.set_rethrown(true);
  ___cxa_rethrow();
}
function ___cxa_throw(ptr, type, destructor) {
  ptr >>>= 0;
  type >>>= 0;
  destructor >>>= 0;
  var info = new ExceptionInfo(ptr);
  info.init(type, destructor);
  exceptionLast = ptr;
  uncaughtExceptionCount++;
  throw exceptionLast;
}
var ___cxa_uncaught_exceptions = () => uncaughtExceptionCount;
function pthreadCreateProxied(pthread_ptr, attr, startRoutine, arg) {
  if (ENVIRONMENT_IS_PTHREAD)
    return proxyToMainThread(2, 0, 1, pthread_ptr, attr, startRoutine, arg);
  return ___pthread_create_js(pthread_ptr, attr, startRoutine, arg);
}
var _emscripten_has_threading_support = () => !!globalThis.SharedArrayBuffer;
function ___pthread_create_js(pthread_ptr, attr, startRoutine, arg) {
  pthread_ptr >>>= 0;
  attr >>>= 0;
  startRoutine >>>= 0;
  arg >>>= 0;
  if (!_emscripten_has_threading_support()) {
    return 6;
  }
  var transferList = [];
  var error = 0;
  if (ENVIRONMENT_IS_PTHREAD && (transferList.length === 0 || error)) {
    return pthreadCreateProxied(pthread_ptr, attr, startRoutine, arg);
  }
  if (error) return error;
  var threadParams = { startRoutine, pthread_ptr, arg, transferList };
  if (ENVIRONMENT_IS_PTHREAD) {
    threadParams.cmd = 'spawnThread';
    postMessage(threadParams, transferList);
    return 0;
  }
  return spawnThread(threadParams);
}
function ___resumeException(ptr) {
  ptr >>>= 0;
  if (!exceptionLast) {
    exceptionLast = ptr;
  }
  throw exceptionLast;
}
var syscallGetVarargI = () => {
  var ret = (growMemViews(), HEAP32)[(+SYSCALLS.varargs >>> 2) >>> 0];
  SYSCALLS.varargs += 4;
  return ret;
};
var syscallGetVarargP = syscallGetVarargI;
var PATH = {
  isAbs: (path) => path.charAt(0) === '/',
  splitPath: (filename) => {
    var splitPathRe =
      /^(\\/?|)([\\s\\S]*?)((?:\\.{1,2}|[^\\/]+?|)(\\.[^.\\/]*|))(?:[\\/]*)$/;
    return splitPathRe.exec(filename).slice(1);
  },
  normalizeArray: (parts, allowAboveRoot) => {
    var up = 0;
    for (var i = parts.length - 1; i >= 0; i--) {
      var last = parts[i];
      if (last === '.') {
        parts.splice(i, 1);
      } else if (last === '..') {
        parts.splice(i, 1);
        up++;
      } else if (up) {
        parts.splice(i, 1);
        up--;
      }
    }
    if (allowAboveRoot) {
      for (; up; up--) {
        parts.unshift('..');
      }
    }
    return parts;
  },
  normalize: (path) => {
    var isAbsolute = PATH.isAbs(path),
      trailingSlash = path.slice(-1) === '/';
    path = PATH.normalizeArray(
      path.split('/').filter((p) => !!p),
      !isAbsolute
    ).join('/');
    if (!path && !isAbsolute) {
      path = '.';
    }
    if (path && trailingSlash) {
      path += '/';
    }
    return (isAbsolute ? '/' : '') + path;
  },
  dirname: (path) => {
    var result = PATH.splitPath(path),
      root = result[0],
      dir = result[1];
    if (!root && !dir) {
      return '.';
    }
    if (dir) {
      dir = dir.slice(0, -1);
    }
    return root + dir;
  },
  basename: (path) => path && path.match(/([^\\/]+|\\/)\\/*$/)[1],
  join: (...paths) => PATH.normalize(paths.join('/')),
  join2: (l, r) => PATH.normalize(l + '/' + r),
};
var initRandomFill = () => {
  if (ENVIRONMENT_IS_NODE) {
    var nodeCrypto = require('crypto');
    return (view) => nodeCrypto.randomFillSync(view);
  }
  return (view) =>
    view.set(crypto.getRandomValues(new Uint8Array(view.byteLength)));
};
var randomFill = (view) => {
  (randomFill = initRandomFill())(view);
};
var PATH_FS = {
  resolve: (...args) => {
    var resolvedPath = '',
      resolvedAbsolute = false;
    for (var i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path = i >= 0 ? args[i] : FS.cwd();
      if (typeof path != 'string') {
        throw new TypeError('Arguments to path.resolve must be strings');
      } else if (!path) {
        return '';
      }
      resolvedPath = path + '/' + resolvedPath;
      resolvedAbsolute = PATH.isAbs(path);
    }
    resolvedPath = PATH.normalizeArray(
      resolvedPath.split('/').filter((p) => !!p),
      !resolvedAbsolute
    ).join('/');
    return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
  },
  relative: (from, to) => {
    from = PATH_FS.resolve(from).slice(1);
    to = PATH_FS.resolve(to).slice(1);
    function trim(arr) {
      var start = 0;
      for (; start < arr.length; start++) {
        if (arr[start] !== '') break;
      }
      var end = arr.length - 1;
      for (; end >= 0; end--) {
        if (arr[end] !== '') break;
      }
      if (start > end) return [];
      return arr.slice(start, end - start + 1);
    }
    var fromParts = trim(from.split('/'));
    var toParts = trim(to.split('/'));
    var length = Math.min(fromParts.length, toParts.length);
    var samePartsLength = length;
    for (var i = 0; i < length; i++) {
      if (fromParts[i] !== toParts[i]) {
        samePartsLength = i;
        break;
      }
    }
    var outputParts = [];
    for (var i = samePartsLength; i < fromParts.length; i++) {
      outputParts.push('..');
    }
    outputParts = outputParts.concat(toParts.slice(samePartsLength));
    return outputParts.join('/');
  },
};
var FS_stdin_getChar_buffer = [];
var lengthBytesUTF8 = (str) => {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    var c = str.charCodeAt(i);
    if (c <= 127) {
      len++;
    } else if (c <= 2047) {
      len += 2;
    } else if (c >= 55296 && c <= 57343) {
      len += 4;
      ++i;
    } else {
      len += 3;
    }
  }
  return len;
};
var stringToUTF8Array = (str, heap, outIdx, maxBytesToWrite) => {
  outIdx >>>= 0;
  if (!(maxBytesToWrite > 0)) return 0;
  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1;
  for (var i = 0; i < str.length; ++i) {
    var u = str.codePointAt(i);
    if (u <= 127) {
      if (outIdx >= endIdx) break;
      heap[outIdx++ >>> 0] = u;
    } else if (u <= 2047) {
      if (outIdx + 1 >= endIdx) break;
      heap[outIdx++ >>> 0] = 192 | (u >> 6);
      heap[outIdx++ >>> 0] = 128 | (u & 63);
    } else if (u <= 65535) {
      if (outIdx + 2 >= endIdx) break;
      heap[outIdx++ >>> 0] = 224 | (u >> 12);
      heap[outIdx++ >>> 0] = 128 | ((u >> 6) & 63);
      heap[outIdx++ >>> 0] = 128 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      heap[outIdx++ >>> 0] = 240 | (u >> 18);
      heap[outIdx++ >>> 0] = 128 | ((u >> 12) & 63);
      heap[outIdx++ >>> 0] = 128 | ((u >> 6) & 63);
      heap[outIdx++ >>> 0] = 128 | (u & 63);
      i++;
    }
  }
  heap[outIdx >>> 0] = 0;
  return outIdx - startIdx;
};
var intArrayFromString = (stringy, dontAddNull, length) => {
  var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
};
var FS_stdin_getChar = () => {
  if (!FS_stdin_getChar_buffer.length) {
    var result = null;
    if (ENVIRONMENT_IS_NODE) {
      var BUFSIZE = 256;
      var buf = Buffer.alloc(BUFSIZE);
      var bytesRead = 0;
      var fd = process.stdin.fd;
      try {
        bytesRead = fs.readSync(fd, buf, 0, BUFSIZE);
      } catch (e) {
        if (e.toString().includes('EOF')) bytesRead = 0;
        else throw e;
      }
      if (bytesRead > 0) {
        result = buf.slice(0, bytesRead).toString('utf-8');
      }
    } else if (globalThis.window?.prompt) {
      result = window.prompt('Input: ');
      if (result !== null) {
        result += '\\n';
      }
    } else {
    }
    if (!result) {
      return null;
    }
    FS_stdin_getChar_buffer = intArrayFromString(result, true);
  }
  return FS_stdin_getChar_buffer.shift();
};
var TTY = {
  ttys: [],
  init() {},
  shutdown() {},
  register(dev, ops) {
    TTY.ttys[dev] = { input: [], output: [], ops };
    FS.registerDevice(dev, TTY.stream_ops);
  },
  stream_ops: {
    open(stream) {
      var tty = TTY.ttys[stream.node.rdev];
      if (!tty) {
        throw new FS.ErrnoError(43);
      }
      stream.tty = tty;
      stream.seekable = false;
    },
    close(stream) {
      stream.tty.ops.fsync(stream.tty);
    },
    fsync(stream) {
      stream.tty.ops.fsync(stream.tty);
    },
    read(stream, buffer, offset, length, pos) {
      if (!stream.tty || !stream.tty.ops.get_char) {
        throw new FS.ErrnoError(60);
      }
      var bytesRead = 0;
      for (var i = 0; i < length; i++) {
        var result;
        try {
          result = stream.tty.ops.get_char(stream.tty);
        } catch (e) {
          throw new FS.ErrnoError(29);
        }
        if (result === undefined && bytesRead === 0) {
          throw new FS.ErrnoError(6);
        }
        if (result === null || result === undefined) break;
        bytesRead++;
        buffer[offset + i] = result;
      }
      if (bytesRead) {
        stream.node.atime = Date.now();
      }
      return bytesRead;
    },
    write(stream, buffer, offset, length, pos) {
      if (!stream.tty || !stream.tty.ops.put_char) {
        throw new FS.ErrnoError(60);
      }
      try {
        for (var i = 0; i < length; i++) {
          stream.tty.ops.put_char(stream.tty, buffer[offset + i]);
        }
      } catch (e) {
        throw new FS.ErrnoError(29);
      }
      if (length) {
        stream.node.mtime = stream.node.ctime = Date.now();
      }
      return i;
    },
  },
  default_tty_ops: {
    get_char(tty) {
      return FS_stdin_getChar();
    },
    put_char(tty, val) {
      if (val === null || val === 10) {
        out(UTF8ArrayToString(tty.output));
        tty.output = [];
      } else {
        if (val != 0) tty.output.push(val);
      }
    },
    fsync(tty) {
      if (tty.output?.length > 0) {
        out(UTF8ArrayToString(tty.output));
        tty.output = [];
      }
    },
    ioctl_tcgets(tty) {
      return {
        c_iflag: 25856,
        c_oflag: 5,
        c_cflag: 191,
        c_lflag: 35387,
        c_cc: [
          3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
      };
    },
    ioctl_tcsets(tty, optional_actions, data) {
      return 0;
    },
    ioctl_tiocgwinsz(tty) {
      return [24, 80];
    },
  },
  default_tty1_ops: {
    put_char(tty, val) {
      if (val === null || val === 10) {
        err(UTF8ArrayToString(tty.output));
        tty.output = [];
      } else {
        if (val != 0) tty.output.push(val);
      }
    },
    fsync(tty) {
      if (tty.output?.length > 0) {
        err(UTF8ArrayToString(tty.output));
        tty.output = [];
      }
    },
  },
};
var zeroMemory = (ptr, size) =>
  (growMemViews(), HEAPU8).fill(0, ptr, ptr + size);
var alignMemory = (size, alignment) => Math.ceil(size / alignment) * alignment;
var mmapAlloc = (size) => {
  size = alignMemory(size, 65536);
  var ptr = _emscripten_builtin_memalign(65536, size);
  if (ptr) zeroMemory(ptr, size);
  return ptr;
};
var MEMFS = {
  ops_table: null,
  mount(mount) {
    return MEMFS.createNode(null, '/', 16895, 0);
  },
  createNode(parent, name, mode, dev) {
    if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
      throw new FS.ErrnoError(63);
    }
    MEMFS.ops_table ||= {
      dir: {
        node: {
          getattr: MEMFS.node_ops.getattr,
          setattr: MEMFS.node_ops.setattr,
          lookup: MEMFS.node_ops.lookup,
          mknod: MEMFS.node_ops.mknod,
          rename: MEMFS.node_ops.rename,
          unlink: MEMFS.node_ops.unlink,
          rmdir: MEMFS.node_ops.rmdir,
          readdir: MEMFS.node_ops.readdir,
          symlink: MEMFS.node_ops.symlink,
        },
        stream: { llseek: MEMFS.stream_ops.llseek },
      },
      file: {
        node: {
          getattr: MEMFS.node_ops.getattr,
          setattr: MEMFS.node_ops.setattr,
        },
        stream: {
          llseek: MEMFS.stream_ops.llseek,
          read: MEMFS.stream_ops.read,
          write: MEMFS.stream_ops.write,
          mmap: MEMFS.stream_ops.mmap,
          msync: MEMFS.stream_ops.msync,
        },
      },
      link: {
        node: {
          getattr: MEMFS.node_ops.getattr,
          setattr: MEMFS.node_ops.setattr,
          readlink: MEMFS.node_ops.readlink,
        },
        stream: {},
      },
      chrdev: {
        node: {
          getattr: MEMFS.node_ops.getattr,
          setattr: MEMFS.node_ops.setattr,
        },
        stream: FS.chrdev_stream_ops,
      },
    };
    var node = FS.createNode(parent, name, mode, dev);
    if (FS.isDir(node.mode)) {
      node.node_ops = MEMFS.ops_table.dir.node;
      node.stream_ops = MEMFS.ops_table.dir.stream;
      node.contents = {};
    } else if (FS.isFile(node.mode)) {
      node.node_ops = MEMFS.ops_table.file.node;
      node.stream_ops = MEMFS.ops_table.file.stream;
      node.usedBytes = 0;
      node.contents = null;
    } else if (FS.isLink(node.mode)) {
      node.node_ops = MEMFS.ops_table.link.node;
      node.stream_ops = MEMFS.ops_table.link.stream;
    } else if (FS.isChrdev(node.mode)) {
      node.node_ops = MEMFS.ops_table.chrdev.node;
      node.stream_ops = MEMFS.ops_table.chrdev.stream;
    }
    node.atime = node.mtime = node.ctime = Date.now();
    if (parent) {
      parent.contents[name] = node;
      parent.atime = parent.mtime = parent.ctime = node.atime;
    }
    return node;
  },
  getFileDataAsTypedArray(node) {
    if (!node.contents) return new Uint8Array(0);
    if (node.contents.subarray)
      return node.contents.subarray(0, node.usedBytes);
    return new Uint8Array(node.contents);
  },
  expandFileStorage(node, newCapacity) {
    var prevCapacity = node.contents ? node.contents.length : 0;
    if (prevCapacity >= newCapacity) return;
    var CAPACITY_DOUBLING_MAX = 1024 * 1024;
    newCapacity = Math.max(
      newCapacity,
      (prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125)) >>> 0
    );
    if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256);
    var oldContents = node.contents;
    node.contents = new Uint8Array(newCapacity);
    if (node.usedBytes > 0)
      node.contents.set(oldContents.subarray(0, node.usedBytes), 0);
  },
  resizeFileStorage(node, newSize) {
    if (node.usedBytes == newSize) return;
    if (newSize == 0) {
      node.contents = null;
      node.usedBytes = 0;
    } else {
      var oldContents = node.contents;
      node.contents = new Uint8Array(newSize);
      if (oldContents) {
        node.contents.set(
          oldContents.subarray(0, Math.min(newSize, node.usedBytes))
        );
      }
      node.usedBytes = newSize;
    }
  },
  node_ops: {
    getattr(node) {
      var attr = {};
      attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
      attr.ino = node.id;
      attr.mode = node.mode;
      attr.nlink = 1;
      attr.uid = 0;
      attr.gid = 0;
      attr.rdev = node.rdev;
      if (FS.isDir(node.mode)) {
        attr.size = 4096;
      } else if (FS.isFile(node.mode)) {
        attr.size = node.usedBytes;
      } else if (FS.isLink(node.mode)) {
        attr.size = node.link.length;
      } else {
        attr.size = 0;
      }
      attr.atime = new Date(node.atime);
      attr.mtime = new Date(node.mtime);
      attr.ctime = new Date(node.ctime);
      attr.blksize = 4096;
      attr.blocks = Math.ceil(attr.size / attr.blksize);
      return attr;
    },
    setattr(node, attr) {
      for (const key of ['mode', 'atime', 'mtime', 'ctime']) {
        if (attr[key] != null) {
          node[key] = attr[key];
        }
      }
      if (attr.size !== undefined) {
        MEMFS.resizeFileStorage(node, attr.size);
      }
    },
    lookup(parent, name) {
      if (!MEMFS.doesNotExistError) {
        MEMFS.doesNotExistError = new FS.ErrnoError(44);
        MEMFS.doesNotExistError.stack = '<generic error, no stack>';
      }
      throw MEMFS.doesNotExistError;
    },
    mknod(parent, name, mode, dev) {
      return MEMFS.createNode(parent, name, mode, dev);
    },
    rename(old_node, new_dir, new_name) {
      var new_node;
      try {
        new_node = FS.lookupNode(new_dir, new_name);
      } catch (e) {}
      if (new_node) {
        if (FS.isDir(old_node.mode)) {
          for (var i in new_node.contents) {
            throw new FS.ErrnoError(55);
          }
        }
        FS.hashRemoveNode(new_node);
      }
      delete old_node.parent.contents[old_node.name];
      new_dir.contents[new_name] = old_node;
      old_node.name = new_name;
      new_dir.ctime =
        new_dir.mtime =
        old_node.parent.ctime =
        old_node.parent.mtime =
          Date.now();
    },
    unlink(parent, name) {
      delete parent.contents[name];
      parent.ctime = parent.mtime = Date.now();
    },
    rmdir(parent, name) {
      var node = FS.lookupNode(parent, name);
      for (var i in node.contents) {
        throw new FS.ErrnoError(55);
      }
      delete parent.contents[name];
      parent.ctime = parent.mtime = Date.now();
    },
    readdir(node) {
      return ['.', '..', ...Object.keys(node.contents)];
    },
    symlink(parent, newname, oldpath) {
      var node = MEMFS.createNode(parent, newname, 511 | 40960, 0);
      node.link = oldpath;
      return node;
    },
    readlink(node) {
      if (!FS.isLink(node.mode)) {
        throw new FS.ErrnoError(28);
      }
      return node.link;
    },
  },
  stream_ops: {
    read(stream, buffer, offset, length, position) {
      var contents = stream.node.contents;
      if (position >= stream.node.usedBytes) return 0;
      var size = Math.min(stream.node.usedBytes - position, length);
      if (size > 8 && contents.subarray) {
        buffer.set(contents.subarray(position, position + size), offset);
      } else {
        for (var i = 0; i < size; i++)
          buffer[offset + i] = contents[position + i];
      }
      return size;
    },
    write(stream, buffer, offset, length, position, canOwn) {
      if (buffer.buffer === (growMemViews(), HEAP8).buffer) {
        canOwn = false;
      }
      if (!length) return 0;
      var node = stream.node;
      node.mtime = node.ctime = Date.now();
      if (buffer.subarray && (!node.contents || node.contents.subarray)) {
        if (canOwn) {
          node.contents = buffer.subarray(offset, offset + length);
          node.usedBytes = length;
          return length;
        } else if (node.usedBytes === 0 && position === 0) {
          node.contents = buffer.slice(offset, offset + length);
          node.usedBytes = length;
          return length;
        } else if (position + length <= node.usedBytes) {
          node.contents.set(buffer.subarray(offset, offset + length), position);
          return length;
        }
      }
      MEMFS.expandFileStorage(node, position + length);
      if (node.contents.subarray && buffer.subarray) {
        node.contents.set(buffer.subarray(offset, offset + length), position);
      } else {
        for (var i = 0; i < length; i++) {
          node.contents[position + i] = buffer[offset + i];
        }
      }
      node.usedBytes = Math.max(node.usedBytes, position + length);
      return length;
    },
    llseek(stream, offset, whence) {
      var position = offset;
      if (whence === 1) {
        position += stream.position;
      } else if (whence === 2) {
        if (FS.isFile(stream.node.mode)) {
          position += stream.node.usedBytes;
        }
      }
      if (position < 0) {
        throw new FS.ErrnoError(28);
      }
      return position;
    },
    mmap(stream, length, position, prot, flags) {
      if (!FS.isFile(stream.node.mode)) {
        throw new FS.ErrnoError(43);
      }
      var ptr;
      var allocated;
      var contents = stream.node.contents;
      if (
        !(flags & 2) &&
        contents &&
        contents.buffer === (growMemViews(), HEAP8).buffer
      ) {
        allocated = false;
        ptr = contents.byteOffset;
      } else {
        allocated = true;
        ptr = mmapAlloc(length);
        if (!ptr) {
          throw new FS.ErrnoError(48);
        }
        if (contents) {
          if (position > 0 || position + length < contents.length) {
            if (contents.subarray) {
              contents = contents.subarray(position, position + length);
            } else {
              contents = Array.prototype.slice.call(
                contents,
                position,
                position + length
              );
            }
          }
          (growMemViews(), HEAP8).set(contents, ptr >>> 0);
        }
      }
      return { ptr, allocated };
    },
    msync(stream, buffer, offset, length, mmapFlags) {
      MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
      return 0;
    },
  },
};
var FS_modeStringToFlags = (str) => {
  var flagModes = {
    r: 0,
    'r+': 2,
    w: 512 | 64 | 1,
    'w+': 512 | 64 | 2,
    a: 1024 | 64 | 1,
    'a+': 1024 | 64 | 2,
  };
  var flags = flagModes[str];
  if (typeof flags == 'undefined') {
    throw new Error(\`Unknown file open mode: \${str}\`);
  }
  return flags;
};
var FS_getMode = (canRead, canWrite) => {
  var mode = 0;
  if (canRead) mode |= 292 | 73;
  if (canWrite) mode |= 146;
  return mode;
};
var asyncLoad = async (url) => {
  var arrayBuffer = await readAsync(url);
  return new Uint8Array(arrayBuffer);
};
var FS_createDataFile = (...args) => FS.createDataFile(...args);
var getUniqueRunDependency = (id) => id;
var preloadPlugins = [];
var FS_handledByPreloadPlugin = async (byteArray, fullname) => {
  if (typeof Browser != 'undefined') Browser.init();
  for (var plugin of preloadPlugins) {
    if (plugin['canHandle'](fullname)) {
      return plugin['handle'](byteArray, fullname);
    }
  }
  return byteArray;
};
var FS_preloadFile = async (
  parent,
  name,
  url,
  canRead,
  canWrite,
  dontCreateFile,
  canOwn,
  preFinish
) => {
  var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
  var dep = getUniqueRunDependency(\`cp \${fullname}\`);
  addRunDependency(dep);
  try {
    var byteArray = url;
    if (typeof url == 'string') {
      byteArray = await asyncLoad(url);
    }
    byteArray = await FS_handledByPreloadPlugin(byteArray, fullname);
    preFinish?.();
    if (!dontCreateFile) {
      FS_createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
    }
  } finally {
    removeRunDependency(dep);
  }
};
var FS_createPreloadedFile = (
  parent,
  name,
  url,
  canRead,
  canWrite,
  onload,
  onerror,
  dontCreateFile,
  canOwn,
  preFinish
) => {
  FS_preloadFile(
    parent,
    name,
    url,
    canRead,
    canWrite,
    dontCreateFile,
    canOwn,
    preFinish
  )
    .then(onload)
    .catch(onerror);
};
var FS = {
  root: null,
  mounts: [],
  devices: {},
  streams: [],
  nextInode: 1,
  nameTable: null,
  currentPath: '/',
  initialized: false,
  ignorePermissions: true,
  filesystems: null,
  syncFSRequests: 0,
  readFiles: {},
  ErrnoError: class {
    name = 'ErrnoError';
    constructor(errno) {
      this.errno = errno;
    }
  },
  FSStream: class {
    shared = {};
    get object() {
      return this.node;
    }
    set object(val) {
      this.node = val;
    }
    get isRead() {
      return (this.flags & 2097155) !== 1;
    }
    get isWrite() {
      return (this.flags & 2097155) !== 0;
    }
    get isAppend() {
      return this.flags & 1024;
    }
    get flags() {
      return this.shared.flags;
    }
    set flags(val) {
      this.shared.flags = val;
    }
    get position() {
      return this.shared.position;
    }
    set position(val) {
      this.shared.position = val;
    }
  },
  FSNode: class {
    node_ops = {};
    stream_ops = {};
    readMode = 292 | 73;
    writeMode = 146;
    mounted = null;
    constructor(parent, name, mode, rdev) {
      if (!parent) {
        parent = this;
      }
      this.parent = parent;
      this.mount = parent.mount;
      this.id = FS.nextInode++;
      this.name = name;
      this.mode = mode;
      this.rdev = rdev;
      this.atime = this.mtime = this.ctime = Date.now();
    }
    get read() {
      return (this.mode & this.readMode) === this.readMode;
    }
    set read(val) {
      val ? (this.mode |= this.readMode) : (this.mode &= ~this.readMode);
    }
    get write() {
      return (this.mode & this.writeMode) === this.writeMode;
    }
    set write(val) {
      val ? (this.mode |= this.writeMode) : (this.mode &= ~this.writeMode);
    }
    get isFolder() {
      return FS.isDir(this.mode);
    }
    get isDevice() {
      return FS.isChrdev(this.mode);
    }
  },
  lookupPath(path, opts = {}) {
    if (!path) {
      throw new FS.ErrnoError(44);
    }
    opts.follow_mount ??= true;
    if (!PATH.isAbs(path)) {
      path = FS.cwd() + '/' + path;
    }
    linkloop: for (var nlinks = 0; nlinks < 40; nlinks++) {
      var parts = path.split('/').filter((p) => !!p);
      var current = FS.root;
      var current_path = '/';
      for (var i = 0; i < parts.length; i++) {
        var islast = i === parts.length - 1;
        if (islast && opts.parent) {
          break;
        }
        if (parts[i] === '.') {
          continue;
        }
        if (parts[i] === '..') {
          current_path = PATH.dirname(current_path);
          if (FS.isRoot(current)) {
            path = current_path + '/' + parts.slice(i + 1).join('/');
            nlinks--;
            continue linkloop;
          } else {
            current = current.parent;
          }
          continue;
        }
        current_path = PATH.join2(current_path, parts[i]);
        try {
          current = FS.lookupNode(current, parts[i]);
        } catch (e) {
          if (e?.errno === 44 && islast && opts.noent_okay) {
            return { path: current_path };
          }
          throw e;
        }
        if (FS.isMountpoint(current) && (!islast || opts.follow_mount)) {
          current = current.mounted.root;
        }
        if (FS.isLink(current.mode) && (!islast || opts.follow)) {
          if (!current.node_ops.readlink) {
            throw new FS.ErrnoError(52);
          }
          var link = current.node_ops.readlink(current);
          if (!PATH.isAbs(link)) {
            link = PATH.dirname(current_path) + '/' + link;
          }
          path = link + '/' + parts.slice(i + 1).join('/');
          continue linkloop;
        }
      }
      return { path: current_path, node: current };
    }
    throw new FS.ErrnoError(32);
  },
  getPath(node) {
    var path;
    while (true) {
      if (FS.isRoot(node)) {
        var mount = node.mount.mountpoint;
        if (!path) return mount;
        return mount[mount.length - 1] !== '/'
          ? \`\${mount}/\${path}\`
          : mount + path;
      }
      path = path ? \`\${node.name}/\${path}\` : node.name;
      node = node.parent;
    }
  },
  hashName(parentid, name) {
    var hash = 0;
    for (var i = 0; i < name.length; i++) {
      hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
    }
    return ((parentid + hash) >>> 0) % FS.nameTable.length;
  },
  hashAddNode(node) {
    var hash = FS.hashName(node.parent.id, node.name);
    node.name_next = FS.nameTable[hash];
    FS.nameTable[hash] = node;
  },
  hashRemoveNode(node) {
    var hash = FS.hashName(node.parent.id, node.name);
    if (FS.nameTable[hash] === node) {
      FS.nameTable[hash] = node.name_next;
    } else {
      var current = FS.nameTable[hash];
      while (current) {
        if (current.name_next === node) {
          current.name_next = node.name_next;
          break;
        }
        current = current.name_next;
      }
    }
  },
  lookupNode(parent, name) {
    var errCode = FS.mayLookup(parent);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    var hash = FS.hashName(parent.id, name);
    for (var node = FS.nameTable[hash]; node; node = node.name_next) {
      var nodeName = node.name;
      if (node.parent.id === parent.id && nodeName === name) {
        return node;
      }
    }
    return FS.lookup(parent, name);
  },
  createNode(parent, name, mode, rdev) {
    var node = new FS.FSNode(parent, name, mode, rdev);
    FS.hashAddNode(node);
    return node;
  },
  destroyNode(node) {
    FS.hashRemoveNode(node);
  },
  isRoot(node) {
    return node === node.parent;
  },
  isMountpoint(node) {
    return !!node.mounted;
  },
  isFile(mode) {
    return (mode & 61440) === 32768;
  },
  isDir(mode) {
    return (mode & 61440) === 16384;
  },
  isLink(mode) {
    return (mode & 61440) === 40960;
  },
  isChrdev(mode) {
    return (mode & 61440) === 8192;
  },
  isBlkdev(mode) {
    return (mode & 61440) === 24576;
  },
  isFIFO(mode) {
    return (mode & 61440) === 4096;
  },
  isSocket(mode) {
    return (mode & 49152) === 49152;
  },
  flagsToPermissionString(flag) {
    var perms = ['r', 'w', 'rw'][flag & 3];
    if (flag & 512) {
      perms += 'w';
    }
    return perms;
  },
  nodePermissions(node, perms) {
    if (FS.ignorePermissions) {
      return 0;
    }
    if (perms.includes('r') && !(node.mode & 292)) {
      return 2;
    } else if (perms.includes('w') && !(node.mode & 146)) {
      return 2;
    } else if (perms.includes('x') && !(node.mode & 73)) {
      return 2;
    }
    return 0;
  },
  mayLookup(dir) {
    if (!FS.isDir(dir.mode)) return 54;
    var errCode = FS.nodePermissions(dir, 'x');
    if (errCode) return errCode;
    if (!dir.node_ops.lookup) return 2;
    return 0;
  },
  mayCreate(dir, name) {
    if (!FS.isDir(dir.mode)) {
      return 54;
    }
    try {
      var node = FS.lookupNode(dir, name);
      return 20;
    } catch (e) {}
    return FS.nodePermissions(dir, 'wx');
  },
  mayDelete(dir, name, isdir) {
    var node;
    try {
      node = FS.lookupNode(dir, name);
    } catch (e) {
      return e.errno;
    }
    var errCode = FS.nodePermissions(dir, 'wx');
    if (errCode) {
      return errCode;
    }
    if (isdir) {
      if (!FS.isDir(node.mode)) {
        return 54;
      }
      if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
        return 10;
      }
    } else {
      if (FS.isDir(node.mode)) {
        return 31;
      }
    }
    return 0;
  },
  mayOpen(node, flags) {
    if (!node) {
      return 44;
    }
    if (FS.isLink(node.mode)) {
      return 32;
    } else if (FS.isDir(node.mode)) {
      if (FS.flagsToPermissionString(flags) !== 'r' || flags & (512 | 64)) {
        return 31;
      }
    }
    return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
  },
  checkOpExists(op, err) {
    if (!op) {
      throw new FS.ErrnoError(err);
    }
    return op;
  },
  MAX_OPEN_FDS: 4096,
  nextfd() {
    for (var fd = 0; fd <= FS.MAX_OPEN_FDS; fd++) {
      if (!FS.streams[fd]) {
        return fd;
      }
    }
    throw new FS.ErrnoError(33);
  },
  getStreamChecked(fd) {
    var stream = FS.getStream(fd);
    if (!stream) {
      throw new FS.ErrnoError(8);
    }
    return stream;
  },
  getStream: (fd) => FS.streams[fd],
  createStream(stream, fd = -1) {
    stream = Object.assign(new FS.FSStream(), stream);
    if (fd == -1) {
      fd = FS.nextfd();
    }
    stream.fd = fd;
    FS.streams[fd] = stream;
    return stream;
  },
  closeStream(fd) {
    FS.streams[fd] = null;
  },
  dupStream(origStream, fd = -1) {
    var stream = FS.createStream(origStream, fd);
    stream.stream_ops?.dup?.(stream);
    return stream;
  },
  doSetAttr(stream, node, attr) {
    var setattr = stream?.stream_ops.setattr;
    var arg = setattr ? stream : node;
    setattr ??= node.node_ops.setattr;
    FS.checkOpExists(setattr, 63);
    setattr(arg, attr);
  },
  chrdev_stream_ops: {
    open(stream) {
      var device = FS.getDevice(stream.node.rdev);
      stream.stream_ops = device.stream_ops;
      stream.stream_ops.open?.(stream);
    },
    llseek() {
      throw new FS.ErrnoError(70);
    },
  },
  major: (dev) => dev >> 8,
  minor: (dev) => dev & 255,
  makedev: (ma, mi) => (ma << 8) | mi,
  registerDevice(dev, ops) {
    FS.devices[dev] = { stream_ops: ops };
  },
  getDevice: (dev) => FS.devices[dev],
  getMounts(mount) {
    var mounts = [];
    var check = [mount];
    while (check.length) {
      var m = check.pop();
      mounts.push(m);
      check.push(...m.mounts);
    }
    return mounts;
  },
  syncfs(populate, callback) {
    if (typeof populate == 'function') {
      callback = populate;
      populate = false;
    }
    FS.syncFSRequests++;
    if (FS.syncFSRequests > 1) {
      err(
        \`warning: \${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work\`
      );
    }
    var mounts = FS.getMounts(FS.root.mount);
    var completed = 0;
    function doCallback(errCode) {
      FS.syncFSRequests--;
      return callback(errCode);
    }
    function done(errCode) {
      if (errCode) {
        if (!done.errored) {
          done.errored = true;
          return doCallback(errCode);
        }
        return;
      }
      if (++completed >= mounts.length) {
        doCallback(null);
      }
    }
    for (var mount of mounts) {
      if (mount.type.syncfs) {
        mount.type.syncfs(mount, populate, done);
      } else {
        done(null);
      }
    }
  },
  mount(type, opts, mountpoint) {
    var root = mountpoint === '/';
    var pseudo = !mountpoint;
    var node;
    if (root && FS.root) {
      throw new FS.ErrnoError(10);
    } else if (!root && !pseudo) {
      var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
      mountpoint = lookup.path;
      node = lookup.node;
      if (FS.isMountpoint(node)) {
        throw new FS.ErrnoError(10);
      }
      if (!FS.isDir(node.mode)) {
        throw new FS.ErrnoError(54);
      }
    }
    var mount = { type, opts, mountpoint, mounts: [] };
    var mountRoot = type.mount(mount);
    mountRoot.mount = mount;
    mount.root = mountRoot;
    if (root) {
      FS.root = mountRoot;
    } else if (node) {
      node.mounted = mount;
      if (node.mount) {
        node.mount.mounts.push(mount);
      }
    }
    return mountRoot;
  },
  unmount(mountpoint) {
    var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
    if (!FS.isMountpoint(lookup.node)) {
      throw new FS.ErrnoError(28);
    }
    var node = lookup.node;
    var mount = node.mounted;
    var mounts = FS.getMounts(mount);
    for (var [hash, current] of Object.entries(FS.nameTable)) {
      while (current) {
        var next = current.name_next;
        if (mounts.includes(current.mount)) {
          FS.destroyNode(current);
        }
        current = next;
      }
    }
    node.mounted = null;
    var idx = node.mount.mounts.indexOf(mount);
    node.mount.mounts.splice(idx, 1);
  },
  lookup(parent, name) {
    return parent.node_ops.lookup(parent, name);
  },
  mknod(path, mode, dev) {
    var lookup = FS.lookupPath(path, { parent: true });
    var parent = lookup.node;
    var name = PATH.basename(path);
    if (!name) {
      throw new FS.ErrnoError(28);
    }
    if (name === '.' || name === '..') {
      throw new FS.ErrnoError(20);
    }
    var errCode = FS.mayCreate(parent, name);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    if (!parent.node_ops.mknod) {
      throw new FS.ErrnoError(63);
    }
    return parent.node_ops.mknod(parent, name, mode, dev);
  },
  statfs(path) {
    return FS.statfsNode(FS.lookupPath(path, { follow: true }).node);
  },
  statfsStream(stream) {
    return FS.statfsNode(stream.node);
  },
  statfsNode(node) {
    var rtn = {
      bsize: 4096,
      frsize: 4096,
      blocks: 1e6,
      bfree: 5e5,
      bavail: 5e5,
      files: FS.nextInode,
      ffree: FS.nextInode - 1,
      fsid: 42,
      flags: 2,
      namelen: 255,
    };
    if (node.node_ops.statfs) {
      Object.assign(rtn, node.node_ops.statfs(node.mount.opts.root));
    }
    return rtn;
  },
  create(path, mode = 438) {
    mode &= 4095;
    mode |= 32768;
    return FS.mknod(path, mode, 0);
  },
  mkdir(path, mode = 511) {
    mode &= 511 | 512;
    mode |= 16384;
    return FS.mknod(path, mode, 0);
  },
  mkdirTree(path, mode) {
    var dirs = path.split('/');
    var d = '';
    for (var dir of dirs) {
      if (!dir) continue;
      if (d || PATH.isAbs(path)) d += '/';
      d += dir;
      try {
        FS.mkdir(d, mode);
      } catch (e) {
        if (e.errno != 20) throw e;
      }
    }
  },
  mkdev(path, mode, dev) {
    if (typeof dev == 'undefined') {
      dev = mode;
      mode = 438;
    }
    mode |= 8192;
    return FS.mknod(path, mode, dev);
  },
  symlink(oldpath, newpath) {
    if (!PATH_FS.resolve(oldpath)) {
      throw new FS.ErrnoError(44);
    }
    var lookup = FS.lookupPath(newpath, { parent: true });
    var parent = lookup.node;
    if (!parent) {
      throw new FS.ErrnoError(44);
    }
    var newname = PATH.basename(newpath);
    var errCode = FS.mayCreate(parent, newname);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    if (!parent.node_ops.symlink) {
      throw new FS.ErrnoError(63);
    }
    return parent.node_ops.symlink(parent, newname, oldpath);
  },
  rename(old_path, new_path) {
    var old_dirname = PATH.dirname(old_path);
    var new_dirname = PATH.dirname(new_path);
    var old_name = PATH.basename(old_path);
    var new_name = PATH.basename(new_path);
    var lookup, old_dir, new_dir;
    lookup = FS.lookupPath(old_path, { parent: true });
    old_dir = lookup.node;
    lookup = FS.lookupPath(new_path, { parent: true });
    new_dir = lookup.node;
    if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
    if (old_dir.mount !== new_dir.mount) {
      throw new FS.ErrnoError(75);
    }
    var old_node = FS.lookupNode(old_dir, old_name);
    var relative = PATH_FS.relative(old_path, new_dirname);
    if (relative.charAt(0) !== '.') {
      throw new FS.ErrnoError(28);
    }
    relative = PATH_FS.relative(new_path, old_dirname);
    if (relative.charAt(0) !== '.') {
      throw new FS.ErrnoError(55);
    }
    var new_node;
    try {
      new_node = FS.lookupNode(new_dir, new_name);
    } catch (e) {}
    if (old_node === new_node) {
      return;
    }
    var isdir = FS.isDir(old_node.mode);
    var errCode = FS.mayDelete(old_dir, old_name, isdir);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    errCode = new_node
      ? FS.mayDelete(new_dir, new_name, isdir)
      : FS.mayCreate(new_dir, new_name);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    if (!old_dir.node_ops.rename) {
      throw new FS.ErrnoError(63);
    }
    if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
      throw new FS.ErrnoError(10);
    }
    if (new_dir !== old_dir) {
      errCode = FS.nodePermissions(old_dir, 'w');
      if (errCode) {
        throw new FS.ErrnoError(errCode);
      }
    }
    FS.hashRemoveNode(old_node);
    try {
      old_dir.node_ops.rename(old_node, new_dir, new_name);
      old_node.parent = new_dir;
    } catch (e) {
      throw e;
    } finally {
      FS.hashAddNode(old_node);
    }
  },
  rmdir(path) {
    var lookup = FS.lookupPath(path, { parent: true });
    var parent = lookup.node;
    var name = PATH.basename(path);
    var node = FS.lookupNode(parent, name);
    var errCode = FS.mayDelete(parent, name, true);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    if (!parent.node_ops.rmdir) {
      throw new FS.ErrnoError(63);
    }
    if (FS.isMountpoint(node)) {
      throw new FS.ErrnoError(10);
    }
    parent.node_ops.rmdir(parent, name);
    FS.destroyNode(node);
  },
  readdir(path) {
    var lookup = FS.lookupPath(path, { follow: true });
    var node = lookup.node;
    var readdir = FS.checkOpExists(node.node_ops.readdir, 54);
    return readdir(node);
  },
  unlink(path) {
    var lookup = FS.lookupPath(path, { parent: true });
    var parent = lookup.node;
    if (!parent) {
      throw new FS.ErrnoError(44);
    }
    var name = PATH.basename(path);
    var node = FS.lookupNode(parent, name);
    var errCode = FS.mayDelete(parent, name, false);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    if (!parent.node_ops.unlink) {
      throw new FS.ErrnoError(63);
    }
    if (FS.isMountpoint(node)) {
      throw new FS.ErrnoError(10);
    }
    parent.node_ops.unlink(parent, name);
    FS.destroyNode(node);
  },
  readlink(path) {
    var lookup = FS.lookupPath(path);
    var link = lookup.node;
    if (!link) {
      throw new FS.ErrnoError(44);
    }
    if (!link.node_ops.readlink) {
      throw new FS.ErrnoError(28);
    }
    return link.node_ops.readlink(link);
  },
  stat(path, dontFollow) {
    var lookup = FS.lookupPath(path, { follow: !dontFollow });
    var node = lookup.node;
    var getattr = FS.checkOpExists(node.node_ops.getattr, 63);
    return getattr(node);
  },
  fstat(fd) {
    var stream = FS.getStreamChecked(fd);
    var node = stream.node;
    var getattr = stream.stream_ops.getattr;
    var arg = getattr ? stream : node;
    getattr ??= node.node_ops.getattr;
    FS.checkOpExists(getattr, 63);
    return getattr(arg);
  },
  lstat(path) {
    return FS.stat(path, true);
  },
  doChmod(stream, node, mode, dontFollow) {
    FS.doSetAttr(stream, node, {
      mode: (mode & 4095) | (node.mode & ~4095),
      ctime: Date.now(),
      dontFollow,
    });
  },
  chmod(path, mode, dontFollow) {
    var node;
    if (typeof path == 'string') {
      var lookup = FS.lookupPath(path, { follow: !dontFollow });
      node = lookup.node;
    } else {
      node = path;
    }
    FS.doChmod(null, node, mode, dontFollow);
  },
  lchmod(path, mode) {
    FS.chmod(path, mode, true);
  },
  fchmod(fd, mode) {
    var stream = FS.getStreamChecked(fd);
    FS.doChmod(stream, stream.node, mode, false);
  },
  doChown(stream, node, dontFollow) {
    FS.doSetAttr(stream, node, { timestamp: Date.now(), dontFollow });
  },
  chown(path, uid, gid, dontFollow) {
    var node;
    if (typeof path == 'string') {
      var lookup = FS.lookupPath(path, { follow: !dontFollow });
      node = lookup.node;
    } else {
      node = path;
    }
    FS.doChown(null, node, dontFollow);
  },
  lchown(path, uid, gid) {
    FS.chown(path, uid, gid, true);
  },
  fchown(fd, uid, gid) {
    var stream = FS.getStreamChecked(fd);
    FS.doChown(stream, stream.node, false);
  },
  doTruncate(stream, node, len) {
    if (FS.isDir(node.mode)) {
      throw new FS.ErrnoError(31);
    }
    if (!FS.isFile(node.mode)) {
      throw new FS.ErrnoError(28);
    }
    var errCode = FS.nodePermissions(node, 'w');
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    FS.doSetAttr(stream, node, { size: len, timestamp: Date.now() });
  },
  truncate(path, len) {
    if (len < 0) {
      throw new FS.ErrnoError(28);
    }
    var node;
    if (typeof path == 'string') {
      var lookup = FS.lookupPath(path, { follow: true });
      node = lookup.node;
    } else {
      node = path;
    }
    FS.doTruncate(null, node, len);
  },
  ftruncate(fd, len) {
    var stream = FS.getStreamChecked(fd);
    if (len < 0 || (stream.flags & 2097155) === 0) {
      throw new FS.ErrnoError(28);
    }
    FS.doTruncate(stream, stream.node, len);
  },
  utime(path, atime, mtime) {
    var lookup = FS.lookupPath(path, { follow: true });
    var node = lookup.node;
    var setattr = FS.checkOpExists(node.node_ops.setattr, 63);
    setattr(node, { atime, mtime });
  },
  open(path, flags, mode = 438) {
    if (path === '') {
      throw new FS.ErrnoError(44);
    }
    flags = typeof flags == 'string' ? FS_modeStringToFlags(flags) : flags;
    if (flags & 64) {
      mode = (mode & 4095) | 32768;
    } else {
      mode = 0;
    }
    var node;
    var isDirPath;
    if (typeof path == 'object') {
      node = path;
    } else {
      isDirPath = path.endsWith('/');
      var lookup = FS.lookupPath(path, {
        follow: !(flags & 131072),
        noent_okay: true,
      });
      node = lookup.node;
      path = lookup.path;
    }
    var created = false;
    if (flags & 64) {
      if (node) {
        if (flags & 128) {
          throw new FS.ErrnoError(20);
        }
      } else if (isDirPath) {
        throw new FS.ErrnoError(31);
      } else {
        node = FS.mknod(path, mode | 511, 0);
        created = true;
      }
    }
    if (!node) {
      throw new FS.ErrnoError(44);
    }
    if (FS.isChrdev(node.mode)) {
      flags &= ~512;
    }
    if (flags & 65536 && !FS.isDir(node.mode)) {
      throw new FS.ErrnoError(54);
    }
    if (!created) {
      var errCode = FS.mayOpen(node, flags);
      if (errCode) {
        throw new FS.ErrnoError(errCode);
      }
    }
    if (flags & 512 && !created) {
      FS.truncate(node, 0);
    }
    flags &= ~(128 | 512 | 131072);
    var stream = FS.createStream({
      node,
      path: FS.getPath(node),
      flags,
      seekable: true,
      position: 0,
      stream_ops: node.stream_ops,
      ungotten: [],
      error: false,
    });
    if (stream.stream_ops.open) {
      stream.stream_ops.open(stream);
    }
    if (created) {
      FS.chmod(node, mode & 511);
    }
    if (Module['logReadFiles'] && !(flags & 1)) {
      if (!(path in FS.readFiles)) {
        FS.readFiles[path] = 1;
      }
    }
    return stream;
  },
  close(stream) {
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(8);
    }
    if (stream.getdents) stream.getdents = null;
    try {
      if (stream.stream_ops.close) {
        stream.stream_ops.close(stream);
      }
    } catch (e) {
      throw e;
    } finally {
      FS.closeStream(stream.fd);
    }
    stream.fd = null;
  },
  isClosed(stream) {
    return stream.fd === null;
  },
  llseek(stream, offset, whence) {
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(8);
    }
    if (!stream.seekable || !stream.stream_ops.llseek) {
      throw new FS.ErrnoError(70);
    }
    if (whence != 0 && whence != 1 && whence != 2) {
      throw new FS.ErrnoError(28);
    }
    stream.position = stream.stream_ops.llseek(stream, offset, whence);
    stream.ungotten = [];
    return stream.position;
  },
  read(stream, buffer, offset, length, position) {
    if (length < 0 || position < 0) {
      throw new FS.ErrnoError(28);
    }
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(8);
    }
    if ((stream.flags & 2097155) === 1) {
      throw new FS.ErrnoError(8);
    }
    if (FS.isDir(stream.node.mode)) {
      throw new FS.ErrnoError(31);
    }
    if (!stream.stream_ops.read) {
      throw new FS.ErrnoError(28);
    }
    var seeking = typeof position != 'undefined';
    if (!seeking) {
      position = stream.position;
    } else if (!stream.seekable) {
      throw new FS.ErrnoError(70);
    }
    var bytesRead = stream.stream_ops.read(
      stream,
      buffer,
      offset,
      length,
      position
    );
    if (!seeking) stream.position += bytesRead;
    return bytesRead;
  },
  write(stream, buffer, offset, length, position, canOwn) {
    if (length < 0 || position < 0) {
      throw new FS.ErrnoError(28);
    }
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(8);
    }
    if ((stream.flags & 2097155) === 0) {
      throw new FS.ErrnoError(8);
    }
    if (FS.isDir(stream.node.mode)) {
      throw new FS.ErrnoError(31);
    }
    if (!stream.stream_ops.write) {
      throw new FS.ErrnoError(28);
    }
    if (stream.seekable && stream.flags & 1024) {
      FS.llseek(stream, 0, 2);
    }
    var seeking = typeof position != 'undefined';
    if (!seeking) {
      position = stream.position;
    } else if (!stream.seekable) {
      throw new FS.ErrnoError(70);
    }
    var bytesWritten = stream.stream_ops.write(
      stream,
      buffer,
      offset,
      length,
      position,
      canOwn
    );
    if (!seeking) stream.position += bytesWritten;
    return bytesWritten;
  },
  mmap(stream, length, position, prot, flags) {
    if (
      (prot & 2) !== 0 &&
      (flags & 2) === 0 &&
      (stream.flags & 2097155) !== 2
    ) {
      throw new FS.ErrnoError(2);
    }
    if ((stream.flags & 2097155) === 1) {
      throw new FS.ErrnoError(2);
    }
    if (!stream.stream_ops.mmap) {
      throw new FS.ErrnoError(43);
    }
    if (!length) {
      throw new FS.ErrnoError(28);
    }
    return stream.stream_ops.mmap(stream, length, position, prot, flags);
  },
  msync(stream, buffer, offset, length, mmapFlags) {
    if (!stream.stream_ops.msync) {
      return 0;
    }
    return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
  },
  ioctl(stream, cmd, arg) {
    if (!stream.stream_ops.ioctl) {
      throw new FS.ErrnoError(59);
    }
    return stream.stream_ops.ioctl(stream, cmd, arg);
  },
  readFile(path, opts = {}) {
    opts.flags = opts.flags || 0;
    opts.encoding = opts.encoding || 'binary';
    if (opts.encoding !== 'utf8' && opts.encoding !== 'binary') {
      abort(\`Invalid encoding type "\${opts.encoding}"\`);
    }
    var stream = FS.open(path, opts.flags);
    var stat = FS.stat(path);
    var length = stat.size;
    var buf = new Uint8Array(length);
    FS.read(stream, buf, 0, length, 0);
    if (opts.encoding === 'utf8') {
      buf = UTF8ArrayToString(buf);
    }
    FS.close(stream);
    return buf;
  },
  writeFile(path, data, opts = {}) {
    opts.flags = opts.flags || 577;
    var stream = FS.open(path, opts.flags, opts.mode);
    if (typeof data == 'string') {
      data = new Uint8Array(intArrayFromString(data, true));
    }
    if (ArrayBuffer.isView(data)) {
      FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
    } else {
      abort('Unsupported data type');
    }
    FS.close(stream);
  },
  cwd: () => FS.currentPath,
  chdir(path) {
    var lookup = FS.lookupPath(path, { follow: true });
    if (lookup.node === null) {
      throw new FS.ErrnoError(44);
    }
    if (!FS.isDir(lookup.node.mode)) {
      throw new FS.ErrnoError(54);
    }
    var errCode = FS.nodePermissions(lookup.node, 'x');
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    FS.currentPath = lookup.path;
  },
  createDefaultDirectories() {
    FS.mkdir('/tmp');
    FS.mkdir('/home');
    FS.mkdir('/home/web_user');
  },
  createDefaultDevices() {
    FS.mkdir('/dev');
    FS.registerDevice(FS.makedev(1, 3), {
      read: () => 0,
      write: (stream, buffer, offset, length, pos) => length,
      llseek: () => 0,
    });
    FS.mkdev('/dev/null', FS.makedev(1, 3));
    TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
    TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
    FS.mkdev('/dev/tty', FS.makedev(5, 0));
    FS.mkdev('/dev/tty1', FS.makedev(6, 0));
    var randomBuffer = new Uint8Array(1024),
      randomLeft = 0;
    var randomByte = () => {
      if (randomLeft === 0) {
        randomFill(randomBuffer);
        randomLeft = randomBuffer.byteLength;
      }
      return randomBuffer[--randomLeft];
    };
    FS.createDevice('/dev', 'random', randomByte);
    FS.createDevice('/dev', 'urandom', randomByte);
    FS.mkdir('/dev/shm');
    FS.mkdir('/dev/shm/tmp');
  },
  createSpecialDirectories() {
    FS.mkdir('/proc');
    var proc_self = FS.mkdir('/proc/self');
    FS.mkdir('/proc/self/fd');
    FS.mount(
      {
        mount() {
          var node = FS.createNode(proc_self, 'fd', 16895, 73);
          node.stream_ops = { llseek: MEMFS.stream_ops.llseek };
          node.node_ops = {
            lookup(parent, name) {
              var fd = +name;
              var stream = FS.getStreamChecked(fd);
              var ret = {
                parent: null,
                mount: { mountpoint: 'fake' },
                node_ops: { readlink: () => stream.path },
                id: fd + 1,
              };
              ret.parent = ret;
              return ret;
            },
            readdir() {
              return Array.from(FS.streams.entries())
                .filter(([k, v]) => v)
                .map(([k, v]) => k.toString());
            },
          };
          return node;
        },
      },
      {},
      '/proc/self/fd'
    );
  },
  createStandardStreams(input, output, error) {
    if (input) {
      FS.createDevice('/dev', 'stdin', input);
    } else {
      FS.symlink('/dev/tty', '/dev/stdin');
    }
    if (output) {
      FS.createDevice('/dev', 'stdout', null, output);
    } else {
      FS.symlink('/dev/tty', '/dev/stdout');
    }
    if (error) {
      FS.createDevice('/dev', 'stderr', null, error);
    } else {
      FS.symlink('/dev/tty1', '/dev/stderr');
    }
    var stdin = FS.open('/dev/stdin', 0);
    var stdout = FS.open('/dev/stdout', 1);
    var stderr = FS.open('/dev/stderr', 1);
  },
  staticInit() {
    FS.nameTable = new Array(4096);
    FS.mount(MEMFS, {}, '/');
    FS.createDefaultDirectories();
    FS.createDefaultDevices();
    FS.createSpecialDirectories();
    FS.filesystems = { MEMFS };
  },
  init(input, output, error) {
    FS.initialized = true;
    input ??= Module['stdin'];
    output ??= Module['stdout'];
    error ??= Module['stderr'];
    FS.createStandardStreams(input, output, error);
  },
  quit() {
    FS.initialized = false;
    for (var stream of FS.streams) {
      if (stream) {
        FS.close(stream);
      }
    }
  },
  findObject(path, dontResolveLastLink) {
    var ret = FS.analyzePath(path, dontResolveLastLink);
    if (!ret.exists) {
      return null;
    }
    return ret.object;
  },
  analyzePath(path, dontResolveLastLink) {
    try {
      var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
      path = lookup.path;
    } catch (e) {}
    var ret = {
      isRoot: false,
      exists: false,
      error: 0,
      name: null,
      path: null,
      object: null,
      parentExists: false,
      parentPath: null,
      parentObject: null,
    };
    try {
      var lookup = FS.lookupPath(path, { parent: true });
      ret.parentExists = true;
      ret.parentPath = lookup.path;
      ret.parentObject = lookup.node;
      ret.name = PATH.basename(path);
      lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
      ret.exists = true;
      ret.path = lookup.path;
      ret.object = lookup.node;
      ret.name = lookup.node.name;
      ret.isRoot = lookup.path === '/';
    } catch (e) {
      ret.error = e.errno;
    }
    return ret;
  },
  createPath(parent, path, canRead, canWrite) {
    parent = typeof parent == 'string' ? parent : FS.getPath(parent);
    var parts = path.split('/').reverse();
    while (parts.length) {
      var part = parts.pop();
      if (!part) continue;
      var current = PATH.join2(parent, part);
      try {
        FS.mkdir(current);
      } catch (e) {
        if (e.errno != 20) throw e;
      }
      parent = current;
    }
    return current;
  },
  createFile(parent, name, properties, canRead, canWrite) {
    var path = PATH.join2(
      typeof parent == 'string' ? parent : FS.getPath(parent),
      name
    );
    var mode = FS_getMode(canRead, canWrite);
    return FS.create(path, mode);
  },
  createDataFile(parent, name, data, canRead, canWrite, canOwn) {
    var path = name;
    if (parent) {
      parent = typeof parent == 'string' ? parent : FS.getPath(parent);
      path = name ? PATH.join2(parent, name) : parent;
    }
    var mode = FS_getMode(canRead, canWrite);
    var node = FS.create(path, mode);
    if (data) {
      if (typeof data == 'string') {
        var arr = new Array(data.length);
        for (var i = 0, len = data.length; i < len; ++i)
          arr[i] = data.charCodeAt(i);
        data = arr;
      }
      FS.chmod(node, mode | 146);
      var stream = FS.open(node, 577);
      FS.write(stream, data, 0, data.length, 0, canOwn);
      FS.close(stream);
      FS.chmod(node, mode);
    }
  },
  createDevice(parent, name, input, output) {
    var path = PATH.join2(
      typeof parent == 'string' ? parent : FS.getPath(parent),
      name
    );
    var mode = FS_getMode(!!input, !!output);
    FS.createDevice.major ??= 64;
    var dev = FS.makedev(FS.createDevice.major++, 0);
    FS.registerDevice(dev, {
      open(stream) {
        stream.seekable = false;
      },
      close(stream) {
        if (output?.buffer?.length) {
          output(10);
        }
      },
      read(stream, buffer, offset, length, pos) {
        var bytesRead = 0;
        for (var i = 0; i < length; i++) {
          var result;
          try {
            result = input();
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (result === undefined && bytesRead === 0) {
            throw new FS.ErrnoError(6);
          }
          if (result === null || result === undefined) break;
          bytesRead++;
          buffer[offset + i] = result;
        }
        if (bytesRead) {
          stream.node.atime = Date.now();
        }
        return bytesRead;
      },
      write(stream, buffer, offset, length, pos) {
        for (var i = 0; i < length; i++) {
          try {
            output(buffer[offset + i]);
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
        }
        if (length) {
          stream.node.mtime = stream.node.ctime = Date.now();
        }
        return i;
      },
    });
    return FS.mkdev(path, mode, dev);
  },
  forceLoadFile(obj) {
    if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
    if (globalThis.XMLHttpRequest) {
      abort(
        'Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.'
      );
    } else {
      try {
        obj.contents = readBinary(obj.url);
      } catch (e) {
        throw new FS.ErrnoError(29);
      }
    }
  },
  createLazyFile(parent, name, url, canRead, canWrite) {
    class LazyUint8Array {
      lengthKnown = false;
      chunks = [];
      get(idx) {
        if (idx > this.length - 1 || idx < 0) {
          return undefined;
        }
        var chunkOffset = idx % this.chunkSize;
        var chunkNum = (idx / this.chunkSize) | 0;
        return this.getter(chunkNum)[chunkOffset];
      }
      setDataGetter(getter) {
        this.getter = getter;
      }
      cacheLength() {
        var xhr = new XMLHttpRequest();
        xhr.open('HEAD', url, false);
        xhr.send(null);
        if (!((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304))
          abort("Couldn't load " + url + '. Status: ' + xhr.status);
        var datalength = Number(xhr.getResponseHeader('Content-length'));
        var header;
        var hasByteServing =
          (header = xhr.getResponseHeader('Accept-Ranges')) &&
          header === 'bytes';
        var usesGzip =
          (header = xhr.getResponseHeader('Content-Encoding')) &&
          header === 'gzip';
        var chunkSize = 1024 * 1024;
        if (!hasByteServing) chunkSize = datalength;
        var doXHR = (from, to) => {
          if (from > to)
            abort(
              'invalid range (' + from + ', ' + to + ') or no bytes requested!'
            );
          if (to > datalength - 1)
            abort('only ' + datalength + ' bytes available! programmer error!');
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, false);
          if (datalength !== chunkSize)
            xhr.setRequestHeader('Range', 'bytes=' + from + '-' + to);
          xhr.responseType = 'arraybuffer';
          if (xhr.overrideMimeType) {
            xhr.overrideMimeType('text/plain; charset=x-user-defined');
          }
          xhr.send(null);
          if (!((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304))
            abort("Couldn't load " + url + '. Status: ' + xhr.status);
          if (xhr.response !== undefined) {
            return new Uint8Array(xhr.response || []);
          }
          return intArrayFromString(xhr.responseText || '', true);
        };
        var lazyArray = this;
        lazyArray.setDataGetter((chunkNum) => {
          var start = chunkNum * chunkSize;
          var end = (chunkNum + 1) * chunkSize - 1;
          end = Math.min(end, datalength - 1);
          if (typeof lazyArray.chunks[chunkNum] == 'undefined') {
            lazyArray.chunks[chunkNum] = doXHR(start, end);
          }
          if (typeof lazyArray.chunks[chunkNum] == 'undefined')
            abort('doXHR failed!');
          return lazyArray.chunks[chunkNum];
        });
        if (usesGzip || !datalength) {
          chunkSize = datalength = 1;
          datalength = this.getter(0).length;
          chunkSize = datalength;
          out(
            'LazyFiles on gzip forces download of the whole file when length is accessed'
          );
        }
        this._length = datalength;
        this._chunkSize = chunkSize;
        this.lengthKnown = true;
      }
      get length() {
        if (!this.lengthKnown) {
          this.cacheLength();
        }
        return this._length;
      }
      get chunkSize() {
        if (!this.lengthKnown) {
          this.cacheLength();
        }
        return this._chunkSize;
      }
    }
    if (globalThis.XMLHttpRequest) {
      if (!ENVIRONMENT_IS_WORKER)
        abort(
          'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc'
        );
      var lazyArray = new LazyUint8Array();
      var properties = { isDevice: false, contents: lazyArray };
    } else {
      var properties = { isDevice: false, url };
    }
    var node = FS.createFile(parent, name, properties, canRead, canWrite);
    if (properties.contents) {
      node.contents = properties.contents;
    } else if (properties.url) {
      node.contents = null;
      node.url = properties.url;
    }
    Object.defineProperties(node, {
      usedBytes: {
        get: function () {
          return this.contents.length;
        },
      },
    });
    var stream_ops = {};
    for (const [key, fn] of Object.entries(node.stream_ops)) {
      stream_ops[key] = (...args) => {
        FS.forceLoadFile(node);
        return fn(...args);
      };
    }
    function writeChunks(stream, buffer, offset, length, position) {
      var contents = stream.node.contents;
      if (position >= contents.length) return 0;
      var size = Math.min(contents.length - position, length);
      if (contents.slice) {
        for (var i = 0; i < size; i++) {
          buffer[offset + i] = contents[position + i];
        }
      } else {
        for (var i = 0; i < size; i++) {
          buffer[offset + i] = contents.get(position + i);
        }
      }
      return size;
    }
    stream_ops.read = (stream, buffer, offset, length, position) => {
      FS.forceLoadFile(node);
      return writeChunks(stream, buffer, offset, length, position);
    };
    stream_ops.mmap = (stream, length, position, prot, flags) => {
      FS.forceLoadFile(node);
      var ptr = mmapAlloc(length);
      if (!ptr) {
        throw new FS.ErrnoError(48);
      }
      writeChunks(stream, (growMemViews(), HEAP8), ptr, length, position);
      return { ptr, allocated: true };
    };
    node.stream_ops = stream_ops;
    return node;
  },
};
var SYSCALLS = {
  DEFAULT_POLLMASK: 5,
  calculateAt(dirfd, path, allowEmpty) {
    if (PATH.isAbs(path)) {
      return path;
    }
    var dir;
    if (dirfd === -100) {
      dir = FS.cwd();
    } else {
      var dirstream = SYSCALLS.getStreamFromFD(dirfd);
      dir = dirstream.path;
    }
    if (path.length == 0) {
      if (!allowEmpty) {
        throw new FS.ErrnoError(44);
      }
      return dir;
    }
    return dir + '/' + path;
  },
  writeStat(buf, stat) {
    (growMemViews(), HEAPU32)[(buf >>> 2) >>> 0] = stat.dev;
    (growMemViews(), HEAPU32)[((buf + 4) >>> 2) >>> 0] = stat.mode;
    (growMemViews(), HEAPU32)[((buf + 8) >>> 2) >>> 0] = stat.nlink;
    (growMemViews(), HEAPU32)[((buf + 12) >>> 2) >>> 0] = stat.uid;
    (growMemViews(), HEAPU32)[((buf + 16) >>> 2) >>> 0] = stat.gid;
    (growMemViews(), HEAPU32)[((buf + 20) >>> 2) >>> 0] = stat.rdev;
    (growMemViews(), HEAP64)[((buf + 24) >>> 3) >>> 0] = BigInt(stat.size);
    (growMemViews(), HEAP32)[((buf + 32) >>> 2) >>> 0] = 4096;
    (growMemViews(), HEAP32)[((buf + 36) >>> 2) >>> 0] = stat.blocks;
    var atime = stat.atime.getTime();
    var mtime = stat.mtime.getTime();
    var ctime = stat.ctime.getTime();
    (growMemViews(), HEAP64)[((buf + 40) >>> 3) >>> 0] = BigInt(
      Math.floor(atime / 1e3)
    );
    (growMemViews(), HEAPU32)[((buf + 48) >>> 2) >>> 0] =
      (atime % 1e3) * 1e3 * 1e3;
    (growMemViews(), HEAP64)[((buf + 56) >>> 3) >>> 0] = BigInt(
      Math.floor(mtime / 1e3)
    );
    (growMemViews(), HEAPU32)[((buf + 64) >>> 2) >>> 0] =
      (mtime % 1e3) * 1e3 * 1e3;
    (growMemViews(), HEAP64)[((buf + 72) >>> 3) >>> 0] = BigInt(
      Math.floor(ctime / 1e3)
    );
    (growMemViews(), HEAPU32)[((buf + 80) >>> 2) >>> 0] =
      (ctime % 1e3) * 1e3 * 1e3;
    (growMemViews(), HEAP64)[((buf + 88) >>> 3) >>> 0] = BigInt(stat.ino);
    return 0;
  },
  writeStatFs(buf, stats) {
    (growMemViews(), HEAPU32)[((buf + 4) >>> 2) >>> 0] = stats.bsize;
    (growMemViews(), HEAPU32)[((buf + 60) >>> 2) >>> 0] = stats.bsize;
    (growMemViews(), HEAP64)[((buf + 8) >>> 3) >>> 0] = BigInt(stats.blocks);
    (growMemViews(), HEAP64)[((buf + 16) >>> 3) >>> 0] = BigInt(stats.bfree);
    (growMemViews(), HEAP64)[((buf + 24) >>> 3) >>> 0] = BigInt(stats.bavail);
    (growMemViews(), HEAP64)[((buf + 32) >>> 3) >>> 0] = BigInt(stats.files);
    (growMemViews(), HEAP64)[((buf + 40) >>> 3) >>> 0] = BigInt(stats.ffree);
    (growMemViews(), HEAPU32)[((buf + 48) >>> 2) >>> 0] = stats.fsid;
    (growMemViews(), HEAPU32)[((buf + 64) >>> 2) >>> 0] = stats.flags;
    (growMemViews(), HEAPU32)[((buf + 56) >>> 2) >>> 0] = stats.namelen;
  },
  doMsync(addr, stream, len, flags, offset) {
    if (!FS.isFile(stream.node.mode)) {
      throw new FS.ErrnoError(43);
    }
    if (flags & 2) {
      return 0;
    }
    var buffer = (growMemViews(), HEAPU8).slice(addr, addr + len);
    FS.msync(stream, buffer, offset, len, flags);
  },
  getStreamFromFD(fd) {
    var stream = FS.getStreamChecked(fd);
    return stream;
  },
  varargs: undefined,
  getStr(ptr) {
    var ret = UTF8ToString(ptr);
    return ret;
  },
};
function ___syscall_fcntl64(fd, cmd, varargs) {
  if (ENVIRONMENT_IS_PTHREAD)
    return proxyToMainThread(3, 0, 1, fd, cmd, varargs);
  varargs >>>= 0;
  SYSCALLS.varargs = varargs;
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    switch (cmd) {
      case 0: {
        var arg = syscallGetVarargI();
        if (arg < 0) {
          return -28;
        }
        while (FS.streams[arg]) {
          arg++;
        }
        var newStream;
        newStream = FS.dupStream(stream, arg);
        return newStream.fd;
      }
      case 1:
      case 2:
        return 0;
      case 3:
        return stream.flags;
      case 4: {
        var arg = syscallGetVarargI();
        stream.flags |= arg;
        return 0;
      }
      case 12: {
        var arg = syscallGetVarargP();
        var offset = 0;
        (growMemViews(), HEAP16)[((arg + offset) >>> 1) >>> 0] = 2;
        return 0;
      }
      case 13:
      case 14:
        return 0;
    }
    return -28;
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
}
function ___syscall_ioctl(fd, op, varargs) {
  if (ENVIRONMENT_IS_PTHREAD)
    return proxyToMainThread(4, 0, 1, fd, op, varargs);
  varargs >>>= 0;
  SYSCALLS.varargs = varargs;
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    switch (op) {
      case 21509: {
        if (!stream.tty) return -59;
        return 0;
      }
      case 21505: {
        if (!stream.tty) return -59;
        if (stream.tty.ops.ioctl_tcgets) {
          var termios = stream.tty.ops.ioctl_tcgets(stream);
          var argp = syscallGetVarargP();
          (growMemViews(), HEAP32)[(argp >>> 2) >>> 0] = termios.c_iflag || 0;
          (growMemViews(), HEAP32)[((argp + 4) >>> 2) >>> 0] =
            termios.c_oflag || 0;
          (growMemViews(), HEAP32)[((argp + 8) >>> 2) >>> 0] =
            termios.c_cflag || 0;
          (growMemViews(), HEAP32)[((argp + 12) >>> 2) >>> 0] =
            termios.c_lflag || 0;
          for (var i = 0; i < 32; i++) {
            (growMemViews(), HEAP8)[(argp + i + 17) >>> 0] =
              termios.c_cc[i] || 0;
          }
          return 0;
        }
        return 0;
      }
      case 21510:
      case 21511:
      case 21512: {
        if (!stream.tty) return -59;
        return 0;
      }
      case 21506:
      case 21507:
      case 21508: {
        if (!stream.tty) return -59;
        if (stream.tty.ops.ioctl_tcsets) {
          var argp = syscallGetVarargP();
          var c_iflag = (growMemViews(), HEAP32)[(argp >>> 2) >>> 0];
          var c_oflag = (growMemViews(), HEAP32)[((argp + 4) >>> 2) >>> 0];
          var c_cflag = (growMemViews(), HEAP32)[((argp + 8) >>> 2) >>> 0];
          var c_lflag = (growMemViews(), HEAP32)[((argp + 12) >>> 2) >>> 0];
          var c_cc = [];
          for (var i = 0; i < 32; i++) {
            c_cc.push((growMemViews(), HEAP8)[(argp + i + 17) >>> 0]);
          }
          return stream.tty.ops.ioctl_tcsets(stream.tty, op, {
            c_iflag,
            c_oflag,
            c_cflag,
            c_lflag,
            c_cc,
          });
        }
        return 0;
      }
      case 21519: {
        if (!stream.tty) return -59;
        var argp = syscallGetVarargP();
        (growMemViews(), HEAP32)[(argp >>> 2) >>> 0] = 0;
        return 0;
      }
      case 21520: {
        if (!stream.tty) return -59;
        return -28;
      }
      case 21537:
      case 21531: {
        var argp = syscallGetVarargP();
        return FS.ioctl(stream, op, argp);
      }
      case 21523: {
        if (!stream.tty) return -59;
        if (stream.tty.ops.ioctl_tiocgwinsz) {
          var winsize = stream.tty.ops.ioctl_tiocgwinsz(stream.tty);
          var argp = syscallGetVarargP();
          (growMemViews(), HEAP16)[(argp >>> 1) >>> 0] = winsize[0];
          (growMemViews(), HEAP16)[((argp + 2) >>> 1) >>> 0] = winsize[1];
        }
        return 0;
      }
      case 21524: {
        if (!stream.tty) return -59;
        return 0;
      }
      case 21515: {
        if (!stream.tty) return -59;
        return 0;
      }
      default:
        return -28;
    }
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
}
function ___syscall_openat(dirfd, path, flags, varargs) {
  if (ENVIRONMENT_IS_PTHREAD)
    return proxyToMainThread(5, 0, 1, dirfd, path, flags, varargs);
  path >>>= 0;
  varargs >>>= 0;
  SYSCALLS.varargs = varargs;
  try {
    path = SYSCALLS.getStr(path);
    path = SYSCALLS.calculateAt(dirfd, path);
    var mode = varargs ? syscallGetVarargI() : 0;
    return FS.open(path, flags, mode).fd;
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
}
var __abort_js = () => abort('');
function __emscripten_init_main_thread_js(tb) {
  tb >>>= 0;
  __emscripten_thread_init(
    tb,
    !ENVIRONMENT_IS_WORKER,
    1,
    !ENVIRONMENT_IS_WEB,
    65536,
    false
  );
  PThread.threadInitTLS();
}
var handleException = (e) => {
  if (e instanceof ExitStatus || e == 'unwind') {
    return EXITSTATUS;
  }
  quit_(1, e);
};
var maybeExit = () => {
  if (!keepRuntimeAlive()) {
    try {
      if (ENVIRONMENT_IS_PTHREAD) {
        if (_pthread_self()) __emscripten_thread_exit(EXITSTATUS);
        return;
      }
      _exit(EXITSTATUS);
    } catch (e) {
      handleException(e);
    }
  }
};
var callUserCallback = (func) => {
  if (ABORT) {
    return;
  }
  try {
    func();
    maybeExit();
  } catch (e) {
    handleException(e);
  }
};
function __emscripten_thread_mailbox_await(pthread_ptr) {
  pthread_ptr >>>= 0;
  if (Atomics.waitAsync) {
    var wait = Atomics.waitAsync(
      (growMemViews(), HEAP32),
      pthread_ptr >>> 2,
      pthread_ptr
    );
    wait.value.then(checkMailbox);
    var waitingAsync = pthread_ptr + 128;
    Atomics.store((growMemViews(), HEAP32), waitingAsync >>> 2, 1);
  }
}
var checkMailbox = () =>
  callUserCallback(() => {
    var pthread_ptr = _pthread_self();
    if (pthread_ptr) {
      __emscripten_thread_mailbox_await(pthread_ptr);
      __emscripten_check_mailbox();
    }
  });
function __emscripten_notify_mailbox_postmessage(targetThread, currThreadId) {
  targetThread >>>= 0;
  currThreadId >>>= 0;
  if (targetThread == currThreadId) {
    setTimeout(checkMailbox);
  } else if (ENVIRONMENT_IS_PTHREAD) {
    postMessage({ targetThread, cmd: 'checkMailbox' });
  } else {
    var worker = PThread.pthreads[targetThread];
    if (!worker) {
      return;
    }
    worker.postMessage({ cmd: 'checkMailbox' });
  }
}
var proxiedJSCallArgs = [];
function __emscripten_receive_on_main_thread_js(
  funcIndex,
  emAsmAddr,
  callingThread,
  numCallArgs,
  args
) {
  emAsmAddr >>>= 0;
  callingThread >>>= 0;
  args >>>= 0;
  numCallArgs /= 2;
  proxiedJSCallArgs.length = numCallArgs;
  var b = args >>> 3;
  for (var i = 0; i < numCallArgs; i++) {
    if ((growMemViews(), HEAP64)[(b + 2 * i) >>> 0]) {
      proxiedJSCallArgs[i] = (growMemViews(), HEAP64)[(b + 2 * i + 1) >>> 0];
    } else {
      proxiedJSCallArgs[i] = (growMemViews(), HEAPF64)[(b + 2 * i + 1) >>> 0];
    }
  }
  var func = proxiedFunctionTable[funcIndex];
  PThread.currentProxiedOperationCallerThread = callingThread;
  var rtn = func(...proxiedJSCallArgs);
  PThread.currentProxiedOperationCallerThread = 0;
  return rtn;
}
var __emscripten_runtime_keepalive_clear = () => {
  noExitRuntime = false;
  runtimeKeepaliveCounter = 0;
};
function __emscripten_thread_cleanup(thread) {
  thread >>>= 0;
  if (!ENVIRONMENT_IS_PTHREAD) cleanupThread(thread);
  else postMessage({ cmd: 'cleanupThread', thread });
}
function __emscripten_thread_set_strongref(thread) {
  thread >>>= 0;
  if (ENVIRONMENT_IS_NODE) {
    PThread.pthreads[thread].ref();
  }
}
function __mmap_js(len, prot, flags, fd, offset, allocated, addr) {
  if (ENVIRONMENT_IS_PTHREAD)
    return proxyToMainThread(
      6,
      0,
      1,
      len,
      prot,
      flags,
      fd,
      offset,
      allocated,
      addr
    );
  len >>>= 0;
  offset = bigintToI53Checked(offset);
  allocated >>>= 0;
  addr >>>= 0;
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    var res = FS.mmap(stream, len, offset, prot, flags);
    var ptr = res.ptr;
    (growMemViews(), HEAP32)[(allocated >>> 2) >>> 0] = res.allocated;
    (growMemViews(), HEAPU32)[(addr >>> 2) >>> 0] = ptr;
    return 0;
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
}
function __munmap_js(addr, len, prot, flags, fd, offset) {
  if (ENVIRONMENT_IS_PTHREAD)
    return proxyToMainThread(7, 0, 1, addr, len, prot, flags, fd, offset);
  addr >>>= 0;
  len >>>= 0;
  offset = bigintToI53Checked(offset);
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    if (prot & 2) {
      SYSCALLS.doMsync(addr, stream, len, flags, offset);
    }
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
}
var timers = {};
var _emscripten_get_now = () => performance.timeOrigin + performance.now();
function __setitimer_js(which, timeout_ms) {
  if (ENVIRONMENT_IS_PTHREAD)
    return proxyToMainThread(8, 0, 1, which, timeout_ms);
  if (timers[which]) {
    clearTimeout(timers[which].id);
    delete timers[which];
  }
  if (!timeout_ms) return 0;
  var id = setTimeout(() => {
    delete timers[which];
    callUserCallback(() => __emscripten_timeout(which, _emscripten_get_now()));
  }, timeout_ms);
  timers[which] = { id, timeout_ms };
  return 0;
}
var stringToUTF8 = (str, outPtr, maxBytesToWrite) =>
  stringToUTF8Array(str, (growMemViews(), HEAPU8), outPtr, maxBytesToWrite);
var __tzset_js = function (timezone, daylight, std_name, dst_name) {
  timezone >>>= 0;
  daylight >>>= 0;
  std_name >>>= 0;
  dst_name >>>= 0;
  var currentYear = new Date().getFullYear();
  var winter = new Date(currentYear, 0, 1);
  var summer = new Date(currentYear, 6, 1);
  var winterOffset = winter.getTimezoneOffset();
  var summerOffset = summer.getTimezoneOffset();
  var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
  (growMemViews(), HEAPU32)[(timezone >>> 2) >>> 0] = stdTimezoneOffset * 60;
  (growMemViews(), HEAP32)[(daylight >>> 2) >>> 0] = Number(
    winterOffset != summerOffset
  );
  var extractZone = (timezoneOffset) => {
    var sign = timezoneOffset >= 0 ? '-' : '+';
    var absOffset = Math.abs(timezoneOffset);
    var hours = String(Math.floor(absOffset / 60)).padStart(2, '0');
    var minutes = String(absOffset % 60).padStart(2, '0');
    return \`UTC\${sign}\${hours}\${minutes}\`;
  };
  var winterName = extractZone(winterOffset);
  var summerName = extractZone(summerOffset);
  if (summerOffset < winterOffset) {
    stringToUTF8(winterName, std_name, 17);
    stringToUTF8(summerName, dst_name, 17);
  } else {
    stringToUTF8(winterName, dst_name, 17);
    stringToUTF8(summerName, std_name, 17);
  }
};
var _emscripten_date_now = () => Date.now();
var nowIsMonotonic = 1;
var checkWasiClock = (clock_id) => clock_id >= 0 && clock_id <= 3;
function _clock_time_get(clk_id, ignored_precision, ptime) {
  ignored_precision = bigintToI53Checked(ignored_precision);
  ptime >>>= 0;
  if (!checkWasiClock(clk_id)) {
    return 28;
  }
  var now;
  if (clk_id === 0) {
    now = _emscripten_date_now();
  } else if (nowIsMonotonic) {
    now = _emscripten_get_now();
  } else {
    return 52;
  }
  var nsec = Math.round(now * 1e3 * 1e3);
  (growMemViews(), HEAP64)[(ptime >>> 3) >>> 0] = BigInt(nsec);
  return 0;
}
var _emscripten_check_blocking_allowed = () => {};
var runtimeKeepalivePush = () => {
  runtimeKeepaliveCounter += 1;
};
var _emscripten_exit_with_live_runtime = () => {
  runtimeKeepalivePush();
  throw 'unwind';
};
var getHeapMax = () => 4294901760;
function _emscripten_get_heap_max() {
  return getHeapMax();
}
var _emscripten_has_asyncify = () => 1;
var _emscripten_num_logical_cores = () =>
  ENVIRONMENT_IS_NODE
    ? require('os').cpus().length
    : navigator['hardwareConcurrency'];
var growMemory = (size) => {
  var oldHeapSize = wasmMemory.buffer.byteLength;
  var pages = ((size - oldHeapSize + 65535) / 65536) | 0;
  try {
    wasmMemory.grow(pages);
    updateMemoryViews();
    return 1;
  } catch (e) {}
};
function _emscripten_resize_heap(requestedSize) {
  requestedSize >>>= 0;
  var oldSize = (growMemViews(), HEAPU8).length;
  if (requestedSize <= oldSize) {
    return false;
  }
  var maxHeapSize = getHeapMax();
  if (requestedSize > maxHeapSize) {
    return false;
  }
  for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
    var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
    overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
    var newSize = Math.min(
      maxHeapSize,
      alignMemory(Math.max(requestedSize, overGrownHeapSize), 65536)
    );
    var replacement = growMemory(newSize);
    if (replacement) {
      return true;
    }
  }
  return false;
}
var stringToUTF8OnStack = (str) => {
  var size = lengthBytesUTF8(str) + 1;
  var ret = stackAlloc(size);
  stringToUTF8(str, ret, size);
  return ret;
};
var writeI53ToI64 = (ptr, num) => {
  (growMemViews(), HEAPU32)[(ptr >>> 2) >>> 0] = num;
  var lower = (growMemViews(), HEAPU32)[(ptr >>> 2) >>> 0];
  (growMemViews(), HEAPU32)[((ptr + 4) >>> 2) >>> 0] =
    (num - lower) / 4294967296;
};
var stringToNewUTF8 = (str) => {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _malloc(size);
  if (ret) stringToUTF8(str, ret, size);
  return ret;
};
var readI53FromI64 = (ptr) =>
  (growMemViews(), HEAPU32)[(ptr >>> 2) >>> 0] +
  (growMemViews(), HEAP32)[((ptr + 4) >>> 2) >>> 0] * 4294967296;
var WebGPU = {
  Internals: {
    jsObjects: [],
    jsObjectInsert: (ptr, jsObject) => {
      ptr >>>= 0;
      WebGPU.Internals.jsObjects[ptr] = jsObject;
    },
    bufferOnUnmaps: [],
    futures: [],
    futureInsert: (futureId, promise) => {
      WebGPU.Internals.futures[futureId] = new Promise((resolve) =>
        promise.finally(() => resolve(futureId))
      );
    },
  },
  getJsObject: (ptr) => {
    if (!ptr) return undefined;
    ptr >>>= 0;
    return WebGPU.Internals.jsObjects[ptr];
  },
  importJsAdapter: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateAdapter(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsBindGroup: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateBindGroup(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsBindGroupLayout: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateBindGroupLayout(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsBuffer: (buffer, parentPtr = 0) => {
    assert(buffer.mapState === 'unmapped');
    var bufferPtr = _emwgpuCreateBuffer(parentPtr);
    WebGPU.Internals.jsObjectInsert(bufferPtr, buffer);
    return bufferPtr;
  },
  importJsCommandBuffer: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateCommandBuffer(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsCommandEncoder: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateCommandEncoder(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsComputePassEncoder: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateComputePassEncoder(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsComputePipeline: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateComputePipeline(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsDevice: (device, parentPtr = 0) => {
    var queuePtr = _emwgpuCreateQueue(parentPtr);
    var devicePtr = _emwgpuCreateDevice(parentPtr, queuePtr);
    WebGPU.Internals.jsObjectInsert(queuePtr, device.queue);
    WebGPU.Internals.jsObjectInsert(devicePtr, device);
    return devicePtr;
  },
  importJsExternalTexture: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateExternalTexture(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsPipelineLayout: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreatePipelineLayout(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsQuerySet: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateQuerySet(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsQueue: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateQueue(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsRenderBundle: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateRenderBundle(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsRenderBundleEncoder: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateRenderBundleEncoder(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsRenderPassEncoder: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateRenderPassEncoder(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsRenderPipeline: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateRenderPipeline(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsSampler: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateSampler(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsShaderModule: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateShaderModule(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsSurface: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateSurface(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsTexture: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateTexture(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  importJsTextureView: (obj, parentPtr = 0) => {
    var ptr = _emwgpuCreateTextureView(parentPtr);
    WebGPU.Internals.jsObjects[ptr] = obj;
    return ptr;
  },
  errorCallback: (callback, type, message, userdata) => {
    var sp = stackSave();
    var messagePtr = stringToUTF8OnStack(message);
    ((a1, a2, a3) => dynCall_viii(callback, a1, a2, a3))(
      type,
      messagePtr,
      userdata
    );
    stackRestore(sp);
  },
  iterateExtensions: (root, handlers) => {
    for (
      var ptr = (growMemViews(), HEAPU32)[(root >>> 2) >>> 0];
      ptr;
      ptr = (growMemViews(), HEAPU32)[(ptr >>> 2) >>> 0]
    ) {
      var sType = (growMemViews(), HEAP32)[((ptr + 4) >>> 2) >>> 0];
      var handler = handlers[sType](ptr);
    }
  },
  setStringView: (ptr, data, length) => {
    (growMemViews(), HEAPU32)[(ptr >>> 2) >>> 0] = data;
    (growMemViews(), HEAPU32)[((ptr + 4) >>> 2) >>> 0] = length;
  },
  makeStringFromStringView: (stringViewPtr) => {
    var ptr = (growMemViews(), HEAPU32)[(stringViewPtr >>> 2) >>> 0];
    var length = (growMemViews(), HEAPU32)[((stringViewPtr + 4) >>> 2) >>> 0];
    return UTF8ToString(ptr, length);
  },
  makeStringFromOptionalStringView: (stringViewPtr) => {
    var ptr = (growMemViews(), HEAPU32)[(stringViewPtr >>> 2) >>> 0];
    var length = (growMemViews(), HEAPU32)[((stringViewPtr + 4) >>> 2) >>> 0];
    if (!ptr) {
      if (length === 0) {
        return '';
      }
      return undefined;
    }
    return UTF8ToString(ptr, length);
  },
  makeColor: (ptr) => ({
    r: (growMemViews(), HEAPF64)[(ptr >>> 3) >>> 0],
    g: (growMemViews(), HEAPF64)[((ptr + 8) >>> 3) >>> 0],
    b: (growMemViews(), HEAPF64)[((ptr + 16) >>> 3) >>> 0],
    a: (growMemViews(), HEAPF64)[((ptr + 24) >>> 3) >>> 0],
  }),
  makeExtent3D: (ptr) => ({
    width: (growMemViews(), HEAPU32)[(ptr >>> 2) >>> 0],
    height: (growMemViews(), HEAPU32)[((ptr + 4) >>> 2) >>> 0],
    depthOrArrayLayers: (growMemViews(), HEAPU32)[((ptr + 8) >>> 2) >>> 0],
  }),
  makeOrigin3D: (ptr) => ({
    x: (growMemViews(), HEAPU32)[(ptr >>> 2) >>> 0],
    y: (growMemViews(), HEAPU32)[((ptr + 4) >>> 2) >>> 0],
    z: (growMemViews(), HEAPU32)[((ptr + 8) >>> 2) >>> 0],
  }),
  makeTexelCopyTextureInfo: (ptr) => ({
    texture: WebGPU.getJsObject((growMemViews(), HEAPU32)[(ptr >>> 2) >>> 0]),
    mipLevel: (growMemViews(), HEAPU32)[((ptr + 4) >>> 2) >>> 0],
    origin: WebGPU.makeOrigin3D(ptr + 8),
    aspect:
      WebGPU.TextureAspect[(growMemViews(), HEAP32)[((ptr + 20) >>> 2) >>> 0]],
  }),
  makeTexelCopyBufferLayout: (ptr) => {
    var bytesPerRow = (growMemViews(), HEAPU32)[((ptr + 8) >>> 2) >>> 0];
    var rowsPerImage = (growMemViews(), HEAPU32)[((ptr + 12) >>> 2) >>> 0];
    return {
      offset: readI53FromI64(ptr),
      bytesPerRow: bytesPerRow === 4294967295 ? undefined : bytesPerRow,
      rowsPerImage: rowsPerImage === 4294967295 ? undefined : rowsPerImage,
    };
  },
  makeTexelCopyBufferInfo: (ptr) => {
    var layoutPtr = ptr + 0;
    var bufferCopyView = WebGPU.makeTexelCopyBufferLayout(layoutPtr);
    bufferCopyView['buffer'] = WebGPU.getJsObject(
      (growMemViews(), HEAPU32)[((ptr + 16) >>> 2) >>> 0]
    );
    return bufferCopyView;
  },
  makePassTimestampWrites: (ptr) => {
    if (ptr === 0) return undefined;
    return {
      querySet: WebGPU.getJsObject(
        (growMemViews(), HEAPU32)[((ptr + 4) >>> 2) >>> 0]
      ),
      beginningOfPassWriteIndex: (growMemViews(), HEAPU32)[
        ((ptr + 8) >>> 2) >>> 0
      ],
      endOfPassWriteIndex: (growMemViews(), HEAPU32)[((ptr + 12) >>> 2) >>> 0],
    };
  },
  makePipelineConstants: (constantCount, constantsPtr) => {
    if (!constantCount) return;
    var constants = {};
    for (var i = 0; i < constantCount; ++i) {
      var entryPtr = constantsPtr + 24 * i;
      var key = WebGPU.makeStringFromStringView(entryPtr + 4);
      constants[key] = (growMemViews(), HEAPF64)[((entryPtr + 16) >>> 3) >>> 0];
    }
    return constants;
  },
  makePipelineLayout: (layoutPtr) => {
    if (!layoutPtr) return 'auto';
    return WebGPU.getJsObject(layoutPtr);
  },
  makeComputeState: (ptr) => {
    if (!ptr) return undefined;
    var desc = {
      module: WebGPU.getJsObject(
        (growMemViews(), HEAPU32)[((ptr + 4) >>> 2) >>> 0]
      ),
      constants: WebGPU.makePipelineConstants(
        (growMemViews(), HEAPU32)[((ptr + 16) >>> 2) >>> 0],
        (growMemViews(), HEAPU32)[((ptr + 20) >>> 2) >>> 0]
      ),
      entryPoint: WebGPU.makeStringFromOptionalStringView(ptr + 8),
    };
    return desc;
  },
  makeComputePipelineDesc: (descriptor) => {
    var desc = {
      label: WebGPU.makeStringFromOptionalStringView(descriptor + 4),
      layout: WebGPU.makePipelineLayout(
        (growMemViews(), HEAPU32)[((descriptor + 12) >>> 2) >>> 0]
      ),
      compute: WebGPU.makeComputeState(descriptor + 16),
    };
    return desc;
  },
  makeRenderPipelineDesc: (descriptor) => {
    function makePrimitiveState(psPtr) {
      if (!psPtr) return undefined;
      return {
        topology:
          WebGPU.PrimitiveTopology[
            (growMemViews(), HEAP32)[((psPtr + 4) >>> 2) >>> 0]
          ],
        stripIndexFormat:
          WebGPU.IndexFormat[
            (growMemViews(), HEAP32)[((psPtr + 8) >>> 2) >>> 0]
          ],
        frontFace:
          WebGPU.FrontFace[
            (growMemViews(), HEAP32)[((psPtr + 12) >>> 2) >>> 0]
          ],
        cullMode:
          WebGPU.CullMode[(growMemViews(), HEAP32)[((psPtr + 16) >>> 2) >>> 0]],
        unclippedDepth: !!(growMemViews(), HEAPU32)[((psPtr + 20) >>> 2) >>> 0],
      };
    }
    function makeBlendComponent(bdPtr) {
      if (!bdPtr) return undefined;
      return {
        operation:
          WebGPU.BlendOperation[(growMemViews(), HEAP32)[(bdPtr >>> 2) >>> 0]],
        srcFactor:
          WebGPU.BlendFactor[
            (growMemViews(), HEAP32)[((bdPtr + 4) >>> 2) >>> 0]
          ],
        dstFactor:
          WebGPU.BlendFactor[
            (growMemViews(), HEAP32)[((bdPtr + 8) >>> 2) >>> 0]
          ],
      };
    }
    function makeBlendState(bsPtr) {
      if (!bsPtr) return undefined;
      return {
        alpha: makeBlendComponent(bsPtr + 12),
        color: makeBlendComponent(bsPtr + 0),
      };
    }
    function makeColorState(csPtr) {
      var format =
        WebGPU.TextureFormat[
          (growMemViews(), HEAP32)[((csPtr + 4) >>> 2) >>> 0]
        ];
      return format
        ? {
            format,
            blend: makeBlendState(
              (growMemViews(), HEAPU32)[((csPtr + 8) >>> 2) >>> 0]
            ),
            writeMask: (growMemViews(), HEAPU32)[((csPtr + 16) >>> 2) >>> 0],
          }
        : undefined;
    }
    function makeColorStates(count, csArrayPtr) {
      var states = [];
      for (var i = 0; i < count; ++i) {
        states.push(makeColorState(csArrayPtr + 24 * i));
      }
      return states;
    }
    function makeStencilStateFace(ssfPtr) {
      return {
        compare:
          WebGPU.CompareFunction[
            (growMemViews(), HEAP32)[(ssfPtr >>> 2) >>> 0]
          ],
        failOp:
          WebGPU.StencilOperation[
            (growMemViews(), HEAP32)[((ssfPtr + 4) >>> 2) >>> 0]
          ],
        depthFailOp:
          WebGPU.StencilOperation[
            (growMemViews(), HEAP32)[((ssfPtr + 8) >>> 2) >>> 0]
          ],
        passOp:
          WebGPU.StencilOperation[
            (growMemViews(), HEAP32)[((ssfPtr + 12) >>> 2) >>> 0]
          ],
      };
    }
    function makeDepthStencilState(dssPtr) {
      if (!dssPtr) return undefined;
      return {
        format:
          WebGPU.TextureFormat[
            (growMemViews(), HEAP32)[((dssPtr + 4) >>> 2) >>> 0]
          ],
        depthWriteEnabled: !!(growMemViews(), HEAPU32)[
          ((dssPtr + 8) >>> 2) >>> 0
        ],
        depthCompare:
          WebGPU.CompareFunction[
            (growMemViews(), HEAP32)[((dssPtr + 12) >>> 2) >>> 0]
          ],
        stencilFront: makeStencilStateFace(dssPtr + 16),
        stencilBack: makeStencilStateFace(dssPtr + 32),
        stencilReadMask: (growMemViews(), HEAPU32)[((dssPtr + 48) >>> 2) >>> 0],
        stencilWriteMask: (growMemViews(), HEAPU32)[
          ((dssPtr + 52) >>> 2) >>> 0
        ],
        depthBias: (growMemViews(), HEAP32)[((dssPtr + 56) >>> 2) >>> 0],
        depthBiasSlopeScale: (growMemViews(), HEAPF32)[
          ((dssPtr + 60) >>> 2) >>> 0
        ],
        depthBiasClamp: (growMemViews(), HEAPF32)[((dssPtr + 64) >>> 2) >>> 0],
      };
    }
    function makeVertexAttribute(vaPtr) {
      return {
        format:
          WebGPU.VertexFormat[
            (growMemViews(), HEAP32)[((vaPtr + 4) >>> 2) >>> 0]
          ],
        offset: readI53FromI64(vaPtr + 8),
        shaderLocation: (growMemViews(), HEAPU32)[((vaPtr + 16) >>> 2) >>> 0],
      };
    }
    function makeVertexAttributes(count, vaArrayPtr) {
      var vas = [];
      for (var i = 0; i < count; ++i) {
        vas.push(makeVertexAttribute(vaArrayPtr + i * 24));
      }
      return vas;
    }
    function makeVertexBuffer(vbPtr) {
      if (!vbPtr) return undefined;
      var stepMode =
        WebGPU.VertexStepMode[
          (growMemViews(), HEAP32)[((vbPtr + 4) >>> 2) >>> 0]
        ];
      var attributeCount = (growMemViews(), HEAPU32)[
        ((vbPtr + 16) >>> 2) >>> 0
      ];
      if (!stepMode && !attributeCount) {
        return null;
      }
      return {
        arrayStride: readI53FromI64(vbPtr + 8),
        stepMode,
        attributes: makeVertexAttributes(
          attributeCount,
          (growMemViews(), HEAPU32)[((vbPtr + 20) >>> 2) >>> 0]
        ),
      };
    }
    function makeVertexBuffers(count, vbArrayPtr) {
      if (!count) return undefined;
      var vbs = [];
      for (var i = 0; i < count; ++i) {
        vbs.push(makeVertexBuffer(vbArrayPtr + i * 24));
      }
      return vbs;
    }
    function makeVertexState(viPtr) {
      if (!viPtr) return undefined;
      var desc = {
        module: WebGPU.getJsObject(
          (growMemViews(), HEAPU32)[((viPtr + 4) >>> 2) >>> 0]
        ),
        constants: WebGPU.makePipelineConstants(
          (growMemViews(), HEAPU32)[((viPtr + 16) >>> 2) >>> 0],
          (growMemViews(), HEAPU32)[((viPtr + 20) >>> 2) >>> 0]
        ),
        buffers: makeVertexBuffers(
          (growMemViews(), HEAPU32)[((viPtr + 24) >>> 2) >>> 0],
          (growMemViews(), HEAPU32)[((viPtr + 28) >>> 2) >>> 0]
        ),
        entryPoint: WebGPU.makeStringFromOptionalStringView(viPtr + 8),
      };
      return desc;
    }
    function makeMultisampleState(msPtr) {
      if (!msPtr) return undefined;
      return {
        count: (growMemViews(), HEAPU32)[((msPtr + 4) >>> 2) >>> 0],
        mask: (growMemViews(), HEAPU32)[((msPtr + 8) >>> 2) >>> 0],
        alphaToCoverageEnabled: !!(growMemViews(), HEAPU32)[
          ((msPtr + 12) >>> 2) >>> 0
        ],
      };
    }
    function makeFragmentState(fsPtr) {
      if (!fsPtr) return undefined;
      var desc = {
        module: WebGPU.getJsObject(
          (growMemViews(), HEAPU32)[((fsPtr + 4) >>> 2) >>> 0]
        ),
        constants: WebGPU.makePipelineConstants(
          (growMemViews(), HEAPU32)[((fsPtr + 16) >>> 2) >>> 0],
          (growMemViews(), HEAPU32)[((fsPtr + 20) >>> 2) >>> 0]
        ),
        targets: makeColorStates(
          (growMemViews(), HEAPU32)[((fsPtr + 24) >>> 2) >>> 0],
          (growMemViews(), HEAPU32)[((fsPtr + 28) >>> 2) >>> 0]
        ),
        entryPoint: WebGPU.makeStringFromOptionalStringView(fsPtr + 8),
      };
      return desc;
    }
    var desc = {
      label: WebGPU.makeStringFromOptionalStringView(descriptor + 4),
      layout: WebGPU.makePipelineLayout(
        (growMemViews(), HEAPU32)[((descriptor + 12) >>> 2) >>> 0]
      ),
      vertex: makeVertexState(descriptor + 16),
      primitive: makePrimitiveState(descriptor + 48),
      depthStencil: makeDepthStencilState(
        (growMemViews(), HEAPU32)[((descriptor + 72) >>> 2) >>> 0]
      ),
      multisample: makeMultisampleState(descriptor + 76),
      fragment: makeFragmentState(
        (growMemViews(), HEAPU32)[((descriptor + 92) >>> 2) >>> 0]
      ),
    };
    return desc;
  },
  fillLimitStruct: (limits, limitsOutPtr) => {
    var nextInChainPtr = (growMemViews(), HEAPU32)[(limitsOutPtr >>> 2) >>> 0];
    function setLimitValueU32(name, basePtr, limitOffset, fallbackValue = 0) {
      var limitValue = limits[name] ?? fallbackValue;
      (growMemViews(), HEAPU32)[((basePtr + limitOffset) >>> 2) >>> 0] =
        limitValue;
    }
    function setLimitValueU64(name, basePtr, limitOffset, fallbackValue = 0) {
      var limitValue = limits[name] ?? fallbackValue;
      writeI53ToI64(basePtr + limitOffset, limitValue);
    }
    setLimitValueU32('maxTextureDimension1D', limitsOutPtr, 4);
    setLimitValueU32('maxTextureDimension2D', limitsOutPtr, 8);
    setLimitValueU32('maxTextureDimension3D', limitsOutPtr, 12);
    setLimitValueU32('maxTextureArrayLayers', limitsOutPtr, 16);
    setLimitValueU32('maxBindGroups', limitsOutPtr, 20);
    setLimitValueU32('maxBindGroupsPlusVertexBuffers', limitsOutPtr, 24);
    setLimitValueU32('maxBindingsPerBindGroup', limitsOutPtr, 28);
    setLimitValueU32(
      'maxDynamicUniformBuffersPerPipelineLayout',
      limitsOutPtr,
      32
    );
    setLimitValueU32(
      'maxDynamicStorageBuffersPerPipelineLayout',
      limitsOutPtr,
      36
    );
    setLimitValueU32('maxSampledTexturesPerShaderStage', limitsOutPtr, 40);
    setLimitValueU32('maxSamplersPerShaderStage', limitsOutPtr, 44);
    setLimitValueU32('maxStorageBuffersPerShaderStage', limitsOutPtr, 48);
    setLimitValueU32('maxStorageTexturesPerShaderStage', limitsOutPtr, 52);
    setLimitValueU32('maxUniformBuffersPerShaderStage', limitsOutPtr, 56);
    setLimitValueU32('minUniformBufferOffsetAlignment', limitsOutPtr, 80);
    setLimitValueU32('minStorageBufferOffsetAlignment', limitsOutPtr, 84);
    setLimitValueU64('maxUniformBufferBindingSize', limitsOutPtr, 64);
    setLimitValueU64('maxStorageBufferBindingSize', limitsOutPtr, 72);
    setLimitValueU32('maxVertexBuffers', limitsOutPtr, 88);
    setLimitValueU64('maxBufferSize', limitsOutPtr, 96);
    setLimitValueU32('maxVertexAttributes', limitsOutPtr, 104);
    setLimitValueU32('maxVertexBufferArrayStride', limitsOutPtr, 108);
    setLimitValueU32('maxInterStageShaderVariables', limitsOutPtr, 112);
    setLimitValueU32('maxColorAttachments', limitsOutPtr, 116);
    setLimitValueU32('maxColorAttachmentBytesPerSample', limitsOutPtr, 120);
    setLimitValueU32('maxComputeWorkgroupStorageSize', limitsOutPtr, 124);
    setLimitValueU32('maxComputeInvocationsPerWorkgroup', limitsOutPtr, 128);
    setLimitValueU32('maxComputeWorkgroupSizeX', limitsOutPtr, 132);
    setLimitValueU32('maxComputeWorkgroupSizeY', limitsOutPtr, 136);
    setLimitValueU32('maxComputeWorkgroupSizeZ', limitsOutPtr, 140);
    setLimitValueU32('maxComputeWorkgroupsPerDimension', limitsOutPtr, 144);
    setLimitValueU32('maxImmediateSize', limitsOutPtr, 148);
    if (nextInChainPtr !== 0) {
      var sType = (growMemViews(), HEAP32)[((nextInChainPtr + 4) >>> 2) >>> 0];
      var compatibilityModeLimitsPtr = nextInChainPtr;
      setLimitValueU32(
        'maxStorageBuffersInVertexStage',
        compatibilityModeLimitsPtr,
        8,
        limits.maxStorageBuffersPerShaderStage
      );
      setLimitValueU32(
        'maxStorageBuffersInFragmentStage',
        compatibilityModeLimitsPtr,
        16,
        limits.maxStorageBuffersPerShaderStage
      );
      setLimitValueU32(
        'maxStorageTexturesInVertexStage',
        compatibilityModeLimitsPtr,
        12,
        limits.maxStorageTexturesPerShaderStage
      );
      setLimitValueU32(
        'maxStorageTexturesInFragmentStage',
        compatibilityModeLimitsPtr,
        20,
        limits.maxStorageTexturesPerShaderStage
      );
    }
  },
  fillAdapterInfoStruct: (info, infoStruct) => {
    (growMemViews(), HEAPU32)[((infoStruct + 52) >>> 2) >>> 0] =
      info.subgroupMinSize;
    (growMemViews(), HEAPU32)[((infoStruct + 56) >>> 2) >>> 0] =
      info.subgroupMaxSize;
    var strs = info.vendor + info.architecture + info.device + info.description;
    var strPtr = stringToNewUTF8(strs);
    var vendorLen = lengthBytesUTF8(info.vendor);
    WebGPU.setStringView(infoStruct + 4, strPtr, vendorLen);
    strPtr += vendorLen;
    var architectureLen = lengthBytesUTF8(info.architecture);
    WebGPU.setStringView(infoStruct + 12, strPtr, architectureLen);
    strPtr += architectureLen;
    var deviceLen = lengthBytesUTF8(info.device);
    WebGPU.setStringView(infoStruct + 20, strPtr, deviceLen);
    strPtr += deviceLen;
    var descriptionLen = lengthBytesUTF8(info.description);
    WebGPU.setStringView(infoStruct + 28, strPtr, descriptionLen);
    strPtr += descriptionLen;
    (growMemViews(), HEAP32)[((infoStruct + 36) >>> 2) >>> 0] = 2;
    var adapterType = info.isFallbackAdapter ? 3 : 4;
    (growMemViews(), HEAP32)[((infoStruct + 40) >>> 2) >>> 0] = adapterType;
    (growMemViews(), HEAPU32)[((infoStruct + 44) >>> 2) >>> 0] = 0;
    (growMemViews(), HEAPU32)[((infoStruct + 48) >>> 2) >>> 0] = 0;
  },
  AddressMode: [, 'clamp-to-edge', 'repeat', 'mirror-repeat'],
  BlendFactor: [
    ,
    'zero',
    'one',
    'src',
    'one-minus-src',
    'src-alpha',
    'one-minus-src-alpha',
    'dst',
    'one-minus-dst',
    'dst-alpha',
    'one-minus-dst-alpha',
    'src-alpha-saturated',
    'constant',
    'one-minus-constant',
    'src1',
    'one-minus-src1',
    'src1-alpha',
    'one-minus-src1-alpha',
  ],
  BlendOperation: [, 'add', 'subtract', 'reverse-subtract', 'min', 'max'],
  BufferBindingType: [, , 'uniform', 'storage', 'read-only-storage'],
  BufferMapState: [, 'unmapped', 'pending', 'mapped'],
  CompareFunction: [
    ,
    'never',
    'less',
    'equal',
    'less-equal',
    'greater',
    'not-equal',
    'greater-equal',
    'always',
  ],
  CompilationInfoRequestStatus: [, 'success', 'callback-cancelled'],
  ComponentSwizzle: [, '0', '1', 'r', 'g', 'b', 'a'],
  CompositeAlphaMode: [
    ,
    'opaque',
    'premultiplied',
    'unpremultiplied',
    'inherit',
  ],
  CullMode: [, 'none', 'front', 'back'],
  ErrorFilter: [, 'validation', 'out-of-memory', 'internal'],
  FeatureLevel: [, 'compatibility', 'core'],
  FeatureName: {
    1: 'core-features-and-limits',
    2: 'depth-clip-control',
    3: 'depth32float-stencil8',
    4: 'texture-compression-bc',
    5: 'texture-compression-bc-sliced-3d',
    6: 'texture-compression-etc2',
    7: 'texture-compression-astc',
    8: 'texture-compression-astc-sliced-3d',
    9: 'timestamp-query',
    10: 'indirect-first-instance',
    11: 'shader-f16',
    12: 'rg11b10ufloat-renderable',
    13: 'bgra8unorm-storage',
    14: 'float32-filterable',
    15: 'float32-blendable',
    16: 'clip-distances',
    17: 'dual-source-blending',
    18: 'subgroups',
    19: 'texture-formats-tier1',
    20: 'texture-formats-tier2',
    21: 'primitive-index',
    22: 'texture-component-swizzle',
    327692: 'chromium-experimental-unorm16-texture-formats',
    327729: 'chromium-experimental-multi-draw-indirect',
  },
  FilterMode: [, 'nearest', 'linear'],
  FrontFace: [, 'ccw', 'cw'],
  IndexFormat: [, 'uint16', 'uint32'],
  InstanceFeatureName: [
    ,
    'timed-wait-any',
    'shader-source-spirv',
    'multiple-devices-per-adapter',
  ],
  LoadOp: [, 'load', 'clear'],
  MipmapFilterMode: [, 'nearest', 'linear'],
  OptionalBool: ['false', 'true'],
  PowerPreference: [, 'low-power', 'high-performance'],
  PredefinedColorSpace: [, 'srgb', 'display-p3'],
  PrimitiveTopology: [
    ,
    'point-list',
    'line-list',
    'line-strip',
    'triangle-list',
    'triangle-strip',
  ],
  QueryType: [, 'occlusion', 'timestamp'],
  SamplerBindingType: [, , 'filtering', 'non-filtering', 'comparison'],
  Status: [, 'success', 'error'],
  StencilOperation: [
    ,
    'keep',
    'zero',
    'replace',
    'invert',
    'increment-clamp',
    'decrement-clamp',
    'increment-wrap',
    'decrement-wrap',
  ],
  StorageTextureAccess: [, , 'write-only', 'read-only', 'read-write'],
  StoreOp: [, 'store', 'discard'],
  SurfaceGetCurrentTextureStatus: [
    ,
    'success-optimal',
    'success-suboptimal',
    'timeout',
    'outdated',
    'lost',
    'error',
  ],
  TextureAspect: [, 'all', 'stencil-only', 'depth-only'],
  TextureDimension: [, '1d', '2d', '3d'],
  TextureFormat: [
    ,
    'r8unorm',
    'r8snorm',
    'r8uint',
    'r8sint',
    'r16unorm',
    'r16snorm',
    'r16uint',
    'r16sint',
    'r16float',
    'rg8unorm',
    'rg8snorm',
    'rg8uint',
    'rg8sint',
    'r32float',
    'r32uint',
    'r32sint',
    'rg16unorm',
    'rg16snorm',
    'rg16uint',
    'rg16sint',
    'rg16float',
    'rgba8unorm',
    'rgba8unorm-srgb',
    'rgba8snorm',
    'rgba8uint',
    'rgba8sint',
    'bgra8unorm',
    'bgra8unorm-srgb',
    'rgb10a2uint',
    'rgb10a2unorm',
    'rg11b10ufloat',
    'rgb9e5ufloat',
    'rg32float',
    'rg32uint',
    'rg32sint',
    'rgba16unorm',
    'rgba16snorm',
    'rgba16uint',
    'rgba16sint',
    'rgba16float',
    'rgba32float',
    'rgba32uint',
    'rgba32sint',
    'stencil8',
    'depth16unorm',
    'depth24plus',
    'depth24plus-stencil8',
    'depth32float',
    'depth32float-stencil8',
    'bc1-rgba-unorm',
    'bc1-rgba-unorm-srgb',
    'bc2-rgba-unorm',
    'bc2-rgba-unorm-srgb',
    'bc3-rgba-unorm',
    'bc3-rgba-unorm-srgb',
    'bc4-r-unorm',
    'bc4-r-snorm',
    'bc5-rg-unorm',
    'bc5-rg-snorm',
    'bc6h-rgb-ufloat',
    'bc6h-rgb-float',
    'bc7-rgba-unorm',
    'bc7-rgba-unorm-srgb',
    'etc2-rgb8unorm',
    'etc2-rgb8unorm-srgb',
    'etc2-rgb8a1unorm',
    'etc2-rgb8a1unorm-srgb',
    'etc2-rgba8unorm',
    'etc2-rgba8unorm-srgb',
    'eac-r11unorm',
    'eac-r11snorm',
    'eac-rg11unorm',
    'eac-rg11snorm',
    'astc-4x4-unorm',
    'astc-4x4-unorm-srgb',
    'astc-5x4-unorm',
    'astc-5x4-unorm-srgb',
    'astc-5x5-unorm',
    'astc-5x5-unorm-srgb',
    'astc-6x5-unorm',
    'astc-6x5-unorm-srgb',
    'astc-6x6-unorm',
    'astc-6x6-unorm-srgb',
    'astc-8x5-unorm',
    'astc-8x5-unorm-srgb',
    'astc-8x6-unorm',
    'astc-8x6-unorm-srgb',
    'astc-8x8-unorm',
    'astc-8x8-unorm-srgb',
    'astc-10x5-unorm',
    'astc-10x5-unorm-srgb',
    'astc-10x6-unorm',
    'astc-10x6-unorm-srgb',
    'astc-10x8-unorm',
    'astc-10x8-unorm-srgb',
    'astc-10x10-unorm',
    'astc-10x10-unorm-srgb',
    'astc-12x10-unorm',
    'astc-12x10-unorm-srgb',
    'astc-12x12-unorm',
    'astc-12x12-unorm-srgb',
  ],
  TextureSampleType: [
    ,
    ,
    'float',
    'unfilterable-float',
    'depth',
    'sint',
    'uint',
  ],
  TextureViewDimension: [, '1d', '2d', '2d-array', 'cube', 'cube-array', '3d'],
  ToneMappingMode: [, 'standard', 'extended'],
  VertexFormat: [
    ,
    'uint8',
    'uint8x2',
    'uint8x4',
    'sint8',
    'sint8x2',
    'sint8x4',
    'unorm8',
    'unorm8x2',
    'unorm8x4',
    'snorm8',
    'snorm8x2',
    'snorm8x4',
    'uint16',
    'uint16x2',
    'uint16x4',
    'sint16',
    'sint16x2',
    'sint16x4',
    'unorm16',
    'unorm16x2',
    'unorm16x4',
    'snorm16',
    'snorm16x2',
    'snorm16x4',
    'float16',
    'float16x2',
    'float16x4',
    'float32',
    'float32x2',
    'float32x3',
    'float32x4',
    'uint32',
    'uint32x2',
    'uint32x3',
    'uint32x4',
    'sint32',
    'sint32x2',
    'sint32x3',
    'sint32x4',
    'unorm10-10-10-2',
    'unorm8x4-bgra',
  ],
  VertexStepMode: [, 'vertex', 'instance'],
  WGSLLanguageFeatureName: [
    ,
    'readonly_and_readwrite_storage_textures',
    'packed_4x8_integer_dot_product',
    'unrestricted_pointer_parameters',
    'pointer_composite_access',
    'uniform_buffer_standard_layout',
    'subgroup_id',
    'texture_and_sampler_let',
    'subgroup_uniformity',
    'texture_formats_tier1',
  ],
};
var emwgpuStringToInt_DeviceLostReason = {
  undefined: 1,
  unknown: 1,
  destroyed: 2,
};
var runtimeKeepalivePop = () => {
  runtimeKeepaliveCounter -= 1;
};
function _emwgpuAdapterRequestDevice(
  adapterPtr,
  futureId,
  deviceLostFutureId,
  devicePtr,
  queuePtr,
  descriptor
) {
  adapterPtr >>>= 0;
  futureId = bigintToI53Checked(futureId);
  deviceLostFutureId = bigintToI53Checked(deviceLostFutureId);
  devicePtr >>>= 0;
  queuePtr >>>= 0;
  descriptor >>>= 0;
  var adapter = WebGPU.getJsObject(adapterPtr);
  var desc = {};
  if (descriptor) {
    var requiredFeatureCount = (growMemViews(), HEAPU32)[
      ((descriptor + 12) >>> 2) >>> 0
    ];
    if (requiredFeatureCount) {
      var requiredFeaturesPtr = (growMemViews(), HEAPU32)[
        ((descriptor + 16) >>> 2) >>> 0
      ];
      desc['requiredFeatures'] = Array.from(
        (growMemViews(), HEAPU32).subarray(
          (requiredFeaturesPtr >>> 2) >>> 0,
          ((requiredFeaturesPtr + requiredFeatureCount * 4) >>> 2) >>> 0
        ),
        (feature) => WebGPU.FeatureName[feature]
      );
    }
    var limitsPtr = (growMemViews(), HEAPU32)[((descriptor + 20) >>> 2) >>> 0];
    if (limitsPtr) {
      var nextInChainPtr = (growMemViews(), HEAPU32)[(limitsPtr >>> 2) >>> 0];
      var requiredLimits = {};
      function setLimitU32IfDefined(
        name,
        basePtr,
        limitOffset,
        ignoreIfZero = false
      ) {
        var ptr = basePtr + limitOffset;
        var value = (growMemViews(), HEAPU32)[(ptr >>> 2) >>> 0];
        if (value != 4294967295 && (!ignoreIfZero || value != 0)) {
          requiredLimits[name] = value;
        }
      }
      function setLimitU64IfDefined(name, basePtr, limitOffset) {
        var ptr = basePtr + limitOffset;
        var limitPart1 = (growMemViews(), HEAPU32)[(ptr >>> 2) >>> 0];
        var limitPart2 = (growMemViews(), HEAPU32)[((ptr + 4) >>> 2) >>> 0];
        if (limitPart1 != 4294967295 || limitPart2 != 4294967295) {
          requiredLimits[name] = readI53FromI64(ptr);
        }
      }
      setLimitU32IfDefined('maxTextureDimension1D', limitsPtr, 4);
      setLimitU32IfDefined('maxTextureDimension2D', limitsPtr, 8);
      setLimitU32IfDefined('maxTextureDimension3D', limitsPtr, 12);
      setLimitU32IfDefined('maxTextureArrayLayers', limitsPtr, 16);
      setLimitU32IfDefined('maxBindGroups', limitsPtr, 20);
      setLimitU32IfDefined('maxBindGroupsPlusVertexBuffers', limitsPtr, 24);
      setLimitU32IfDefined('maxBindingsPerBindGroup', limitsPtr, 28);
      setLimitU32IfDefined(
        'maxDynamicUniformBuffersPerPipelineLayout',
        limitsPtr,
        32
      );
      setLimitU32IfDefined(
        'maxDynamicStorageBuffersPerPipelineLayout',
        limitsPtr,
        36
      );
      setLimitU32IfDefined('maxSampledTexturesPerShaderStage', limitsPtr, 40);
      setLimitU32IfDefined('maxSamplersPerShaderStage', limitsPtr, 44);
      setLimitU32IfDefined('maxStorageBuffersPerShaderStage', limitsPtr, 48);
      setLimitU32IfDefined('maxStorageTexturesPerShaderStage', limitsPtr, 52);
      setLimitU32IfDefined('maxUniformBuffersPerShaderStage', limitsPtr, 56);
      setLimitU32IfDefined('minUniformBufferOffsetAlignment', limitsPtr, 80);
      setLimitU32IfDefined('minStorageBufferOffsetAlignment', limitsPtr, 84);
      setLimitU64IfDefined('maxUniformBufferBindingSize', limitsPtr, 64);
      setLimitU64IfDefined('maxStorageBufferBindingSize', limitsPtr, 72);
      setLimitU32IfDefined('maxVertexBuffers', limitsPtr, 88);
      setLimitU64IfDefined('maxBufferSize', limitsPtr, 96);
      setLimitU32IfDefined('maxVertexAttributes', limitsPtr, 104);
      setLimitU32IfDefined('maxVertexBufferArrayStride', limitsPtr, 108);
      setLimitU32IfDefined('maxInterStageShaderVariables', limitsPtr, 112);
      setLimitU32IfDefined('maxColorAttachments', limitsPtr, 116);
      setLimitU32IfDefined('maxColorAttachmentBytesPerSample', limitsPtr, 120);
      setLimitU32IfDefined('maxComputeWorkgroupStorageSize', limitsPtr, 124);
      setLimitU32IfDefined('maxComputeInvocationsPerWorkgroup', limitsPtr, 128);
      setLimitU32IfDefined('maxComputeWorkgroupSizeX', limitsPtr, 132);
      setLimitU32IfDefined('maxComputeWorkgroupSizeY', limitsPtr, 136);
      setLimitU32IfDefined('maxComputeWorkgroupSizeZ', limitsPtr, 140);
      setLimitU32IfDefined('maxComputeWorkgroupsPerDimension', limitsPtr, 144);
      setLimitU32IfDefined('maxImmediateSize', limitsPtr, 148, true);
      if (nextInChainPtr !== 0) {
        var sType = (growMemViews(), HEAP32)[
          ((nextInChainPtr + 4) >>> 2) >>> 0
        ];
        var compatibilityModeLimitsPtr = nextInChainPtr;
        if ('maxStorageBuffersInVertexStage' in GPUSupportedLimits.prototype) {
          setLimitU32IfDefined(
            'maxStorageBuffersInVertexStage',
            compatibilityModeLimitsPtr,
            8
          );
          setLimitU32IfDefined(
            'maxStorageTexturesInVertexStage',
            compatibilityModeLimitsPtr,
            12
          );
          setLimitU32IfDefined(
            'maxStorageBuffersInFragmentStage',
            compatibilityModeLimitsPtr,
            16
          );
          setLimitU32IfDefined(
            'maxStorageTexturesInFragmentStage',
            compatibilityModeLimitsPtr,
            20
          );
        }
      }
      desc['requiredLimits'] = requiredLimits;
    }
    var defaultQueuePtr = (growMemViews(), HEAPU32)[
      ((descriptor + 24) >>> 2) >>> 0
    ];
    if (defaultQueuePtr) {
      var defaultQueueDesc = {
        label: WebGPU.makeStringFromOptionalStringView(defaultQueuePtr + 4),
      };
      desc['defaultQueue'] = defaultQueueDesc;
    }
    desc['label'] = WebGPU.makeStringFromOptionalStringView(descriptor + 4);
  }
  runtimeKeepalivePush();
  WebGPU.Internals.futureInsert(
    futureId,
    adapter.requestDevice(desc).then(
      (device) => {
        runtimeKeepalivePop();
        callUserCallback(() => {
          WebGPU.Internals.jsObjectInsert(queuePtr, device.queue);
          WebGPU.Internals.jsObjectInsert(devicePtr, device);
          WebGPU.Internals.futureInsert(
            deviceLostFutureId,
            device.lost.then((info) => {
              callUserCallback(() => {
                device.onuncapturederror = (ev) => {};
                var sp = stackSave();
                var messagePtr = stringToUTF8OnStack(info.message);
                _emwgpuOnDeviceLostCompleted(
                  deviceLostFutureId,
                  emwgpuStringToInt_DeviceLostReason[info.reason],
                  messagePtr
                );
                stackRestore(sp);
              });
            })
          );
          device.onuncapturederror = (ev) => {
            var type = 5;
            if (ev.error instanceof GPUValidationError) type = 2;
            else if (ev.error instanceof GPUOutOfMemoryError) type = 3;
            else if (ev.error instanceof GPUInternalError) type = 4;
            var sp = stackSave();
            var messagePtr = stringToUTF8OnStack(ev.error.message);
            _emwgpuOnUncapturedError(devicePtr, type, messagePtr);
            stackRestore(sp);
          };
          _emwgpuOnRequestDeviceCompleted(futureId, 1, devicePtr, 0);
        });
      },
      (ex) => {
        runtimeKeepalivePop();
        callUserCallback(() => {
          var sp = stackSave();
          var messagePtr = stringToUTF8OnStack(ex.message);
          _emwgpuOnRequestDeviceCompleted(futureId, 3, devicePtr, messagePtr);
          if (deviceLostFutureId) {
            _emwgpuOnDeviceLostCompleted(deviceLostFutureId, 4, messagePtr);
          }
          stackRestore(sp);
        });
      }
    )
  );
}
function _emwgpuBufferDestroy(bufferPtr) {
  bufferPtr >>>= 0;
  var buffer = WebGPU.getJsObject(bufferPtr);
  var onUnmap = WebGPU.Internals.bufferOnUnmaps[bufferPtr];
  if (onUnmap) {
    for (var i = 0; i < onUnmap.length; ++i) {
      onUnmap[i]();
    }
    delete WebGPU.Internals.bufferOnUnmaps[bufferPtr];
  }
  buffer.destroy();
}
var warnOnce = (text) => {
  warnOnce.shown ||= {};
  if (!warnOnce.shown[text]) {
    warnOnce.shown[text] = 1;
    if (ENVIRONMENT_IS_NODE) text = 'warning: ' + text;
    err(text);
  }
};
function _emwgpuBufferGetConstMappedRange(bufferPtr, offset, size) {
  bufferPtr >>>= 0;
  offset >>>= 0;
  size >>>= 0;
  var buffer = WebGPU.getJsObject(bufferPtr);
  if (size == 4294967295) size = undefined;
  var mapped;
  try {
    mapped = buffer.getMappedRange(offset, size);
  } catch (ex) {
    return 0;
  }
  var data = _memalign(16, mapped.byteLength);
  (growMemViews(), HEAPU8).set(new Uint8Array(mapped), data >>> 0);
  WebGPU.Internals.bufferOnUnmaps[bufferPtr].push(() => _free(data));
  return data;
}
var _emwgpuBufferMapAsync = function (bufferPtr, futureId, mode, offset, size) {
  bufferPtr >>>= 0;
  futureId = bigintToI53Checked(futureId);
  mode = bigintToI53Checked(mode);
  offset >>>= 0;
  size >>>= 0;
  var buffer = WebGPU.getJsObject(bufferPtr);
  WebGPU.Internals.bufferOnUnmaps[bufferPtr] = [];
  if (size == 4294967295) size = undefined;
  runtimeKeepalivePush();
  WebGPU.Internals.futureInsert(
    futureId,
    buffer.mapAsync(mode, offset, size).then(
      () => {
        runtimeKeepalivePop();
        callUserCallback(() => {
          _emwgpuOnMapAsyncCompleted(futureId, 1, 0);
        });
      },
      (ex) => {
        runtimeKeepalivePop();
        callUserCallback(() => {
          var sp = stackSave();
          var messagePtr = stringToUTF8OnStack(ex.message);
          var status =
            ex.name === 'AbortError' ? 4 : ex.name === 'OperationError' ? 3 : 0;
          _emwgpuOnMapAsyncCompleted(futureId, status, messagePtr);
          delete WebGPU.Internals.bufferOnUnmaps[bufferPtr];
        });
      }
    )
  );
};
function _emwgpuBufferUnmap(bufferPtr) {
  bufferPtr >>>= 0;
  var buffer = WebGPU.getJsObject(bufferPtr);
  var onUnmap = WebGPU.Internals.bufferOnUnmaps[bufferPtr];
  if (!onUnmap) {
    return;
  }
  for (var i = 0; i < onUnmap.length; ++i) {
    onUnmap[i]();
  }
  delete WebGPU.Internals.bufferOnUnmaps[bufferPtr];
  buffer.unmap();
}
function _emwgpuDelete(ptr) {
  ptr >>>= 0;
  delete WebGPU.Internals.jsObjects[ptr];
}
function _emwgpuDeviceCreateBuffer(devicePtr, descriptor, bufferPtr) {
  devicePtr >>>= 0;
  descriptor >>>= 0;
  bufferPtr >>>= 0;
  var mappedAtCreation = !!(growMemViews(), HEAPU32)[
    ((descriptor + 32) >>> 2) >>> 0
  ];
  var desc = {
    label: WebGPU.makeStringFromOptionalStringView(descriptor + 4),
    usage: (growMemViews(), HEAPU32)[((descriptor + 16) >>> 2) >>> 0],
    size: readI53FromI64(descriptor + 24),
    mappedAtCreation,
  };
  var device = WebGPU.getJsObject(devicePtr);
  var buffer;
  try {
    buffer = device.createBuffer(desc);
  } catch (ex) {
    return false;
  }
  WebGPU.Internals.jsObjectInsert(bufferPtr, buffer);
  if (mappedAtCreation) {
    WebGPU.Internals.bufferOnUnmaps[bufferPtr] = [];
  }
  return true;
}
function _emwgpuDeviceCreateShaderModule(
  devicePtr,
  descriptor,
  shaderModulePtr
) {
  devicePtr >>>= 0;
  descriptor >>>= 0;
  shaderModulePtr >>>= 0;
  var nextInChainPtr = (growMemViews(), HEAPU32)[(descriptor >>> 2) >>> 0];
  var sType = (growMemViews(), HEAP32)[((nextInChainPtr + 4) >>> 2) >>> 0];
  var desc = {
    label: WebGPU.makeStringFromOptionalStringView(descriptor + 4),
    code: '',
  };
  switch (sType) {
    case 2: {
      desc['code'] = WebGPU.makeStringFromStringView(nextInChainPtr + 8);
      break;
    }
  }
  var device = WebGPU.getJsObject(devicePtr);
  WebGPU.Internals.jsObjectInsert(
    shaderModulePtr,
    device.createShaderModule(desc)
  );
}
var _emwgpuDeviceDestroy = (devicePtr) => {
  const device = WebGPU.getJsObject(devicePtr);
  device.onuncapturederror = null;
  device.destroy();
};
function _emwgpuInstanceRequestAdapter(
  instancePtr,
  futureId,
  options,
  adapterPtr
) {
  instancePtr >>>= 0;
  futureId = bigintToI53Checked(futureId);
  options >>>= 0;
  adapterPtr >>>= 0;
  var opts;
  if (options) {
    opts = {
      featureLevel:
        WebGPU.FeatureLevel[
          (growMemViews(), HEAP32)[((options + 4) >>> 2) >>> 0]
        ],
      powerPreference:
        WebGPU.PowerPreference[
          (growMemViews(), HEAP32)[((options + 8) >>> 2) >>> 0]
        ],
      forceFallbackAdapter: !!(growMemViews(), HEAPU32)[
        ((options + 12) >>> 2) >>> 0
      ],
    };
    var nextInChainPtr = (growMemViews(), HEAPU32)[(options >>> 2) >>> 0];
    if (nextInChainPtr !== 0) {
      var sType = (growMemViews(), HEAP32)[((nextInChainPtr + 4) >>> 2) >>> 0];
      var webxrOptions = nextInChainPtr;
      opts.xrCompatible = !!(growMemViews(), HEAPU32)[
        ((webxrOptions + 8) >>> 2) >>> 0
      ];
    }
  }
  if (!('gpu' in navigator)) {
    var sp = stackSave();
    var messagePtr = stringToUTF8OnStack(
      'WebGPU not available on this browser (navigator.gpu is not available)'
    );
    _emwgpuOnRequestAdapterCompleted(futureId, 3, adapterPtr, messagePtr);
    stackRestore(sp);
    return;
  }
  runtimeKeepalivePush();
  WebGPU.Internals.futureInsert(
    futureId,
    navigator.gpu.requestAdapter(opts).then(
      (adapter) => {
        runtimeKeepalivePop();
        callUserCallback(() => {
          if (adapter) {
            WebGPU.Internals.jsObjectInsert(adapterPtr, adapter);
            _emwgpuOnRequestAdapterCompleted(futureId, 1, adapterPtr, 0);
          } else {
            var sp = stackSave();
            var messagePtr = stringToUTF8OnStack(
              'WebGPU not available on this browser (requestAdapter returned null)'
            );
            _emwgpuOnRequestAdapterCompleted(
              futureId,
              3,
              adapterPtr,
              messagePtr
            );
            stackRestore(sp);
          }
        });
      },
      (ex) => {
        runtimeKeepalivePop();
        callUserCallback(() => {
          var sp = stackSave();
          var messagePtr = stringToUTF8OnStack(ex.message);
          _emwgpuOnRequestAdapterCompleted(futureId, 4, adapterPtr, messagePtr);
          stackRestore(sp);
        });
      }
    )
  );
}
var _emwgpuQueueOnSubmittedWorkDone = function (queuePtr, futureId) {
  queuePtr >>>= 0;
  futureId = bigintToI53Checked(futureId);
  var queue = WebGPU.getJsObject(queuePtr);
  runtimeKeepalivePush();
  WebGPU.Internals.futureInsert(
    futureId,
    queue.onSubmittedWorkDone().then(() => {
      runtimeKeepalivePop();
      callUserCallback(() => {
        _emwgpuOnWorkDoneCompleted(futureId, 1);
      });
    })
  );
};
var _emwgpuWaitAny = function (futurePtr, futureCount, timeoutMSPtr) {
  futurePtr >>>= 0;
  futureCount >>>= 0;
  timeoutMSPtr >>>= 0;
  return Asyncify.handleAsync(async () => {
    var promises = [];
    if (timeoutMSPtr) {
      var timeoutMS = (growMemViews(), HEAP32)[(timeoutMSPtr >>> 2) >>> 0];
      promises.length = futureCount + 1;
      promises[futureCount] = new Promise((resolve) =>
        setTimeout(resolve, timeoutMS, 0)
      );
    } else {
      promises.length = futureCount;
    }
    for (var i = 0; i < futureCount; ++i) {
      var futureId = readI53FromI64(futurePtr + i * 8);
      if (!(futureId in WebGPU.Internals.futures)) {
        return futureId;
      }
      promises[i] = WebGPU.Internals.futures[futureId];
    }
    const firstResolvedFuture = await Promise.race(promises);
    delete WebGPU.Internals.futures[firstResolvedFuture];
    return firstResolvedFuture;
  });
};
_emwgpuWaitAny.isAsync = true;
var ENV = {};
var getExecutableName = () => thisProgram || './this.program';
var getEnvStrings = () => {
  if (!getEnvStrings.strings) {
    var lang =
      ((typeof navigator == 'object' && navigator.language) || 'C').replace(
        '-',
        '_'
      ) + '.UTF-8';
    var env = {
      USER: 'web_user',
      LOGNAME: 'web_user',
      PATH: '/',
      PWD: '/',
      HOME: '/home/web_user',
      LANG: lang,
      _: getExecutableName(),
    };
    for (var x in ENV) {
      if (ENV[x] === undefined) delete env[x];
      else env[x] = ENV[x];
    }
    var strings = [];
    for (var x in env) {
      strings.push(\`\${x}=\${env[x]}\`);
    }
    getEnvStrings.strings = strings;
  }
  return getEnvStrings.strings;
};
function _environ_get(__environ, environ_buf) {
  if (ENVIRONMENT_IS_PTHREAD)
    return proxyToMainThread(9, 0, 1, __environ, environ_buf);
  __environ >>>= 0;
  environ_buf >>>= 0;
  var bufSize = 0;
  var envp = 0;
  for (var string of getEnvStrings()) {
    var ptr = environ_buf + bufSize;
    (growMemViews(), HEAPU32)[((__environ + envp) >>> 2) >>> 0] = ptr;
    bufSize += stringToUTF8(string, ptr, Infinity) + 1;
    envp += 4;
  }
  return 0;
}
function _environ_sizes_get(penviron_count, penviron_buf_size) {
  if (ENVIRONMENT_IS_PTHREAD)
    return proxyToMainThread(10, 0, 1, penviron_count, penviron_buf_size);
  penviron_count >>>= 0;
  penviron_buf_size >>>= 0;
  var strings = getEnvStrings();
  (growMemViews(), HEAPU32)[(penviron_count >>> 2) >>> 0] = strings.length;
  var bufSize = 0;
  for (var string of strings) {
    bufSize += lengthBytesUTF8(string) + 1;
  }
  (growMemViews(), HEAPU32)[(penviron_buf_size >>> 2) >>> 0] = bufSize;
  return 0;
}
function _fd_close(fd) {
  if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(11, 0, 1, fd);
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    FS.close(stream);
    return 0;
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
}
var doReadv = (stream, iov, iovcnt, offset) => {
  var ret = 0;
  for (var i = 0; i < iovcnt; i++) {
    var ptr = (growMemViews(), HEAPU32)[(iov >>> 2) >>> 0];
    var len = (growMemViews(), HEAPU32)[((iov + 4) >>> 2) >>> 0];
    iov += 8;
    var curr = FS.read(stream, (growMemViews(), HEAP8), ptr, len, offset);
    if (curr < 0) return -1;
    ret += curr;
    if (curr < len) break;
    if (typeof offset != 'undefined') {
      offset += curr;
    }
  }
  return ret;
};
function _fd_read(fd, iov, iovcnt, pnum) {
  if (ENVIRONMENT_IS_PTHREAD)
    return proxyToMainThread(12, 0, 1, fd, iov, iovcnt, pnum);
  iov >>>= 0;
  iovcnt >>>= 0;
  pnum >>>= 0;
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    var num = doReadv(stream, iov, iovcnt);
    (growMemViews(), HEAPU32)[(pnum >>> 2) >>> 0] = num;
    return 0;
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
}
function _fd_seek(fd, offset, whence, newOffset) {
  if (ENVIRONMENT_IS_PTHREAD)
    return proxyToMainThread(13, 0, 1, fd, offset, whence, newOffset);
  offset = bigintToI53Checked(offset);
  newOffset >>>= 0;
  try {
    if (isNaN(offset)) return 61;
    var stream = SYSCALLS.getStreamFromFD(fd);
    FS.llseek(stream, offset, whence);
    (growMemViews(), HEAP64)[(newOffset >>> 3) >>> 0] = BigInt(stream.position);
    if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null;
    return 0;
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
}
var doWritev = (stream, iov, iovcnt, offset) => {
  var ret = 0;
  for (var i = 0; i < iovcnt; i++) {
    var ptr = (growMemViews(), HEAPU32)[(iov >>> 2) >>> 0];
    var len = (growMemViews(), HEAPU32)[((iov + 4) >>> 2) >>> 0];
    iov += 8;
    var curr = FS.write(stream, (growMemViews(), HEAP8), ptr, len, offset);
    if (curr < 0) return -1;
    ret += curr;
    if (curr < len) {
      break;
    }
    if (typeof offset != 'undefined') {
      offset += curr;
    }
  }
  return ret;
};
function _fd_write(fd, iov, iovcnt, pnum) {
  if (ENVIRONMENT_IS_PTHREAD)
    return proxyToMainThread(14, 0, 1, fd, iov, iovcnt, pnum);
  iov >>>= 0;
  iovcnt >>>= 0;
  pnum >>>= 0;
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    var num = doWritev(stream, iov, iovcnt);
    (growMemViews(), HEAPU32)[(pnum >>> 2) >>> 0] = num;
    return 0;
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
}
function _llvm_eh_typeid_for(type) {
  type >>>= 0;
  return type;
}
function _random_get(buffer, size) {
  buffer >>>= 0;
  size >>>= 0;
  try {
    randomFill(
      (growMemViews(), HEAPU8).subarray(buffer >>> 0, (buffer + size) >>> 0)
    );
    return 0;
  } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
}
var emwgpuStringToInt_FeatureName = {
  'core-features-and-limits': 1,
  'depth-clip-control': 2,
  'depth32float-stencil8': 3,
  'texture-compression-bc': 4,
  'texture-compression-bc-sliced-3d': 5,
  'texture-compression-etc2': 6,
  'texture-compression-astc': 7,
  'texture-compression-astc-sliced-3d': 8,
  'timestamp-query': 9,
  'indirect-first-instance': 10,
  'shader-f16': 11,
  'rg11b10ufloat-renderable': 12,
  'bgra8unorm-storage': 13,
  'float32-filterable': 14,
  'float32-blendable': 15,
  'clip-distances': 16,
  'dual-source-blending': 17,
  subgroups: 18,
  'texture-formats-tier1': 19,
  'texture-formats-tier2': 20,
  'primitive-index': 21,
  'texture-component-swizzle': 22,
  'chromium-experimental-unorm16-texture-formats': 327692,
  'chromium-experimental-multi-draw-indirect': 327729,
};
function _wgpuAdapterGetFeatures(adapterPtr, supportedFeatures) {
  adapterPtr >>>= 0;
  supportedFeatures >>>= 0;
  var adapter = WebGPU.getJsObject(adapterPtr);
  var featuresPtr = _malloc(adapter.features.size * 4);
  var offset = 0;
  var numFeatures = 0;
  for (const feature of adapter.features) {
    var featureEnumValue = emwgpuStringToInt_FeatureName[feature];
    if (featureEnumValue >= 0) {
      (growMemViews(), HEAP32)[((featuresPtr + offset) >>> 2) >>> 0] =
        featureEnumValue;
      offset += 4;
      numFeatures++;
    }
  }
  (growMemViews(), HEAPU32)[((supportedFeatures + 4) >>> 2) >>> 0] =
    featuresPtr;
  (growMemViews(), HEAPU32)[(supportedFeatures >>> 2) >>> 0] = numFeatures;
}
function _wgpuAdapterGetInfo(adapterPtr, info) {
  adapterPtr >>>= 0;
  info >>>= 0;
  var adapter = WebGPU.getJsObject(adapterPtr);
  WebGPU.fillAdapterInfoStruct(adapter.info, info);
  return 1;
}
function _wgpuAdapterGetLimits(adapterPtr, limitsOutPtr) {
  adapterPtr >>>= 0;
  limitsOutPtr >>>= 0;
  var adapter = WebGPU.getJsObject(adapterPtr);
  WebGPU.fillLimitStruct(adapter.limits, limitsOutPtr);
  return 1;
}
function _wgpuAdapterHasFeature(adapterPtr, featureEnumValue) {
  adapterPtr >>>= 0;
  var adapter = WebGPU.getJsObject(adapterPtr);
  return adapter.features.has(WebGPU.FeatureName[featureEnumValue]);
}
var _wgpuBufferGetSize = function (bufferPtr) {
  bufferPtr >>>= 0;
  var ret = (() => {
    var buffer = WebGPU.getJsObject(bufferPtr);
    return buffer.size;
  })();
  return BigInt(ret);
};
function _wgpuCommandEncoderBeginComputePass(encoderPtr, descriptor) {
  encoderPtr >>>= 0;
  descriptor >>>= 0;
  var desc;
  if (descriptor) {
    desc = {
      label: WebGPU.makeStringFromOptionalStringView(descriptor + 4),
      timestampWrites: WebGPU.makePassTimestampWrites(
        (growMemViews(), HEAPU32)[((descriptor + 12) >>> 2) >>> 0]
      ),
    };
  }
  var commandEncoder = WebGPU.getJsObject(encoderPtr);
  var ptr = _emwgpuCreateComputePassEncoder(0);
  WebGPU.Internals.jsObjectInsert(ptr, commandEncoder.beginComputePass(desc));
  return ptr;
}
function _wgpuCommandEncoderCopyBufferToBuffer(
  encoderPtr,
  srcPtr,
  srcOffset,
  dstPtr,
  dstOffset,
  size
) {
  encoderPtr >>>= 0;
  srcPtr >>>= 0;
  srcOffset = bigintToI53Checked(srcOffset);
  dstPtr >>>= 0;
  dstOffset = bigintToI53Checked(dstOffset);
  size = bigintToI53Checked(size);
  var commandEncoder = WebGPU.getJsObject(encoderPtr);
  var src = WebGPU.getJsObject(srcPtr);
  var dst = WebGPU.getJsObject(dstPtr);
  commandEncoder.copyBufferToBuffer(src, srcOffset, dst, dstOffset, size);
}
function _wgpuCommandEncoderFinish(encoderPtr, descriptor) {
  encoderPtr >>>= 0;
  descriptor >>>= 0;
  var commandEncoder = WebGPU.getJsObject(encoderPtr);
  var ptr = _emwgpuCreateCommandBuffer(0);
  WebGPU.Internals.jsObjectInsert(ptr, commandEncoder.finish());
  return ptr;
}
function _wgpuComputePassEncoderDispatchWorkgroups(passPtr, x, y, z) {
  passPtr >>>= 0;
  var pass = WebGPU.getJsObject(passPtr);
  pass.dispatchWorkgroups(x, y, z);
}
function _wgpuComputePassEncoderEnd(passPtr) {
  passPtr >>>= 0;
  var pass = WebGPU.getJsObject(passPtr);
  pass.end();
}
function _wgpuComputePassEncoderSetBindGroup(
  passPtr,
  groupIndex,
  groupPtr,
  dynamicOffsetCount,
  dynamicOffsetsPtr
) {
  passPtr >>>= 0;
  groupPtr >>>= 0;
  dynamicOffsetCount >>>= 0;
  dynamicOffsetsPtr >>>= 0;
  var pass = WebGPU.getJsObject(passPtr);
  var group = WebGPU.getJsObject(groupPtr);
  if (dynamicOffsetCount == 0) {
    pass.setBindGroup(groupIndex, group);
  } else {
    pass.setBindGroup(
      groupIndex,
      group,
      (growMemViews(), HEAPU32),
      dynamicOffsetsPtr >>> 2,
      dynamicOffsetCount
    );
  }
}
function _wgpuComputePassEncoderSetPipeline(passPtr, pipelinePtr) {
  passPtr >>>= 0;
  pipelinePtr >>>= 0;
  var pass = WebGPU.getJsObject(passPtr);
  var pipeline = WebGPU.getJsObject(pipelinePtr);
  pass.setPipeline(pipeline);
}
function _wgpuComputePipelineGetBindGroupLayout(pipelinePtr, groupIndex) {
  pipelinePtr >>>= 0;
  var pipeline = WebGPU.getJsObject(pipelinePtr);
  var ptr = _emwgpuCreateBindGroupLayout(0);
  WebGPU.Internals.jsObjectInsert(ptr, pipeline.getBindGroupLayout(groupIndex));
  return ptr;
}
var _wgpuDeviceCreateBindGroup = function (devicePtr, descriptor) {
  devicePtr >>>= 0;
  descriptor >>>= 0;
  function makeEntry(entryPtr) {
    var bufferPtr = (growMemViews(), HEAPU32)[((entryPtr + 8) >>> 2) >>> 0];
    var samplerPtr = (growMemViews(), HEAPU32)[((entryPtr + 32) >>> 2) >>> 0];
    var textureViewPtr = (growMemViews(), HEAPU32)[
      ((entryPtr + 36) >>> 2) >>> 0
    ];
    var externalTexturePtr = 0;
    WebGPU.iterateExtensions(entryPtr, {
      327681: (ptr) => {
        externalTexturePtr = (growMemViews(), HEAPU32)[((ptr + 8) >>> 2) >>> 0];
      },
    });
    var resource;
    if (bufferPtr) {
      var size = readI53FromI64(entryPtr + 24);
      if (size == -1) size = undefined;
      resource = {
        buffer: WebGPU.getJsObject(bufferPtr),
        offset: readI53FromI64(entryPtr + 16),
        size,
      };
    } else {
      resource = WebGPU.getJsObject(
        samplerPtr || textureViewPtr || externalTexturePtr
      );
    }
    return {
      binding: (growMemViews(), HEAPU32)[((entryPtr + 4) >>> 2) >>> 0],
      resource,
    };
  }
  function makeEntries(count, entriesPtrs) {
    var entries = [];
    for (var i = 0; i < count; ++i) {
      entries.push(makeEntry(entriesPtrs + 40 * i));
    }
    return entries;
  }
  var desc = {
    label: WebGPU.makeStringFromOptionalStringView(descriptor + 4),
    layout: WebGPU.getJsObject(
      (growMemViews(), HEAPU32)[((descriptor + 12) >>> 2) >>> 0]
    ),
    entries: makeEntries(
      (growMemViews(), HEAPU32)[((descriptor + 16) >>> 2) >>> 0],
      (growMemViews(), HEAPU32)[((descriptor + 20) >>> 2) >>> 0]
    ),
  };
  var device = WebGPU.getJsObject(devicePtr);
  var ptr = _emwgpuCreateBindGroup(0);
  WebGPU.Internals.jsObjectInsert(ptr, device.createBindGroup(desc));
  return ptr;
};
function _wgpuDeviceCreateCommandEncoder(devicePtr, descriptor) {
  devicePtr >>>= 0;
  descriptor >>>= 0;
  var desc;
  if (descriptor) {
    desc = { label: WebGPU.makeStringFromOptionalStringView(descriptor + 4) };
  }
  var device = WebGPU.getJsObject(devicePtr);
  var ptr = _emwgpuCreateCommandEncoder(0);
  WebGPU.Internals.jsObjectInsert(ptr, device.createCommandEncoder(desc));
  return ptr;
}
function _wgpuDeviceCreateComputePipeline(devicePtr, descriptor) {
  devicePtr >>>= 0;
  descriptor >>>= 0;
  var desc = WebGPU.makeComputePipelineDesc(descriptor);
  var device = WebGPU.getJsObject(devicePtr);
  var ptr = _emwgpuCreateComputePipeline(0);
  WebGPU.Internals.jsObjectInsert(ptr, device.createComputePipeline(desc));
  return ptr;
}
var _wgpuQueueSubmit = function (queuePtr, commandCount, commands) {
  queuePtr >>>= 0;
  commandCount >>>= 0;
  commands >>>= 0;
  var queue = WebGPU.getJsObject(queuePtr);
  var cmds = Array.from(
    (growMemViews(), HEAP32).subarray(
      (commands >>> 2) >>> 0,
      ((commands + commandCount * 4) >>> 2) >>> 0
    ),
    (id) => WebGPU.getJsObject(id)
  );
  queue.submit(cmds);
};
function _wgpuQueueWriteBuffer(queuePtr, bufferPtr, bufferOffset, data, size) {
  queuePtr >>>= 0;
  bufferPtr >>>= 0;
  bufferOffset = bigintToI53Checked(bufferOffset);
  data >>>= 0;
  size >>>= 0;
  var queue = WebGPU.getJsObject(queuePtr);
  var buffer = WebGPU.getJsObject(bufferPtr);
  var subarray = (growMemViews(), HEAPU8).subarray(
    data >>> 0,
    (data + size) >>> 0
  );
  queue.writeBuffer(buffer, bufferOffset, subarray, 0, size);
}
var runAndAbortIfError = (func) => {
  try {
    return func();
  } catch (e) {
    abort(e);
  }
};
var Asyncify = {
  instrumentWasmImports(imports) {
    var importPattern = /^(invoke_.*|__asyncjs__.*)$/;
    for (let [x, original] of Object.entries(imports)) {
      if (typeof original == 'function') {
        let isAsyncifyImport = original.isAsync || importPattern.test(x);
      }
    }
  },
  instrumentFunction(original) {
    var wrapper = (...args) => {
      Asyncify.exportCallStack.push(original);
      try {
        return original(...args);
      } finally {
        if (!ABORT) {
          var top = Asyncify.exportCallStack.pop();
          Asyncify.maybeStopUnwind();
        }
      }
    };
    Asyncify.funcWrappers.set(original, wrapper);
    return wrapper;
  },
  instrumentWasmExports(exports) {
    var ret = {};
    for (let [x, original] of Object.entries(exports)) {
      if (typeof original == 'function') {
        var wrapper = Asyncify.instrumentFunction(original);
        ret[x] = wrapper;
      } else {
        ret[x] = original;
      }
    }
    return ret;
  },
  State: { Normal: 0, Unwinding: 1, Rewinding: 2, Disabled: 3 },
  state: 0,
  StackSize: 4096,
  currData: null,
  handleSleepReturnValue: 0,
  exportCallStack: [],
  callstackFuncToId: new Map(),
  callStackIdToFunc: new Map(),
  funcWrappers: new Map(),
  callStackId: 0,
  asyncPromiseHandlers: null,
  sleepCallbacks: [],
  getCallStackId(func) {
    if (!Asyncify.callstackFuncToId.has(func)) {
      var id = Asyncify.callStackId++;
      Asyncify.callstackFuncToId.set(func, id);
      Asyncify.callStackIdToFunc.set(id, func);
    }
    return Asyncify.callstackFuncToId.get(func);
  },
  maybeStopUnwind() {
    if (
      Asyncify.currData &&
      Asyncify.state === Asyncify.State.Unwinding &&
      Asyncify.exportCallStack.length === 0
    ) {
      Asyncify.state = Asyncify.State.Normal;
      runtimeKeepalivePush();
      runAndAbortIfError(_asyncify_stop_unwind);
      if (typeof Fibers != 'undefined') {
        Fibers.trampoline();
      }
    }
  },
  whenDone() {
    return new Promise((resolve, reject) => {
      Asyncify.asyncPromiseHandlers = { resolve, reject };
    });
  },
  allocateData() {
    var ptr = _malloc(12 + Asyncify.StackSize);
    Asyncify.setDataHeader(ptr, ptr + 12, Asyncify.StackSize);
    Asyncify.setDataRewindFunc(ptr);
    return ptr;
  },
  setDataHeader(ptr, stack, stackSize) {
    (growMemViews(), HEAPU32)[(ptr >>> 2) >>> 0] = stack;
    (growMemViews(), HEAPU32)[((ptr + 4) >>> 2) >>> 0] = stack + stackSize;
  },
  setDataRewindFunc(ptr) {
    var bottomOfCallStack = Asyncify.exportCallStack[0];
    var rewindId = Asyncify.getCallStackId(bottomOfCallStack);
    (growMemViews(), HEAP32)[((ptr + 8) >>> 2) >>> 0] = rewindId;
  },
  getDataRewindFunc(ptr) {
    var id = (growMemViews(), HEAP32)[((ptr + 8) >>> 2) >>> 0];
    var func = Asyncify.callStackIdToFunc.get(id);
    return func;
  },
  doRewind(ptr) {
    var original = Asyncify.getDataRewindFunc(ptr);
    var func = Asyncify.funcWrappers.get(original);
    runtimeKeepalivePop();
    return func();
  },
  handleSleep(startAsync) {
    if (ABORT) return;
    if (Asyncify.state === Asyncify.State.Normal) {
      var reachedCallback = false;
      var reachedAfterCallback = false;
      startAsync((handleSleepReturnValue = 0) => {
        if (ABORT) return;
        Asyncify.handleSleepReturnValue = handleSleepReturnValue;
        reachedCallback = true;
        if (!reachedAfterCallback) {
          return;
        }
        Asyncify.state = Asyncify.State.Rewinding;
        runAndAbortIfError(() => _asyncify_start_rewind(Asyncify.currData));
        if (typeof MainLoop != 'undefined' && MainLoop.func) {
          MainLoop.resume();
        }
        var asyncWasmReturnValue,
          isError = false;
        try {
          asyncWasmReturnValue = Asyncify.doRewind(Asyncify.currData);
        } catch (err) {
          asyncWasmReturnValue = err;
          isError = true;
        }
        var handled = false;
        if (!Asyncify.currData) {
          var asyncPromiseHandlers = Asyncify.asyncPromiseHandlers;
          if (asyncPromiseHandlers) {
            Asyncify.asyncPromiseHandlers = null;
            (isError
              ? asyncPromiseHandlers.reject
              : asyncPromiseHandlers.resolve)(asyncWasmReturnValue);
            handled = true;
          }
        }
        if (isError && !handled) {
          throw asyncWasmReturnValue;
        }
      });
      reachedAfterCallback = true;
      if (!reachedCallback) {
        Asyncify.state = Asyncify.State.Unwinding;
        Asyncify.currData = Asyncify.allocateData();
        if (typeof MainLoop != 'undefined' && MainLoop.func) {
          MainLoop.pause();
        }
        runAndAbortIfError(() => _asyncify_start_unwind(Asyncify.currData));
      }
    } else if (Asyncify.state === Asyncify.State.Rewinding) {
      Asyncify.state = Asyncify.State.Normal;
      runAndAbortIfError(_asyncify_stop_rewind);
      _free(Asyncify.currData);
      Asyncify.currData = null;
      Asyncify.sleepCallbacks.forEach(callUserCallback);
    } else {
      abort(\`invalid state: \${Asyncify.state}\`);
    }
    return Asyncify.handleSleepReturnValue;
  },
  handleAsync: (startAsync) =>
    Asyncify.handleSleep((wakeUp) => {
      startAsync().then(wakeUp);
    }),
};
var getCFunc = (ident) => {
  var func = Module['_' + ident];
  return func;
};
var writeArrayToMemory = (array, buffer) => {
  (growMemViews(), HEAP8).set(array, buffer >>> 0);
};
var ccall = (ident, returnType, argTypes, args, opts) => {
  var toC = {
    string: (str) => {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) {
        ret = stringToUTF8OnStack(str);
      }
      return ret;
    },
    array: (arr) => {
      var ret = stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    },
  };
  function convertReturnValue(ret) {
    if (returnType === 'string') {
      return UTF8ToString(ret);
    }
    if (returnType === 'pointer') return ret >>> 0;
    if (returnType === 'boolean') return Boolean(ret);
    return ret;
  }
  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  var previousAsync = Asyncify.currData;
  var ret = func(...cArgs);
  function onDone(ret) {
    runtimeKeepalivePop();
    if (stack !== 0) stackRestore(stack);
    return convertReturnValue(ret);
  }
  var asyncMode = opts?.async;
  runtimeKeepalivePush();
  if (Asyncify.currData != previousAsync) {
    return Asyncify.whenDone().then(onDone);
  }
  ret = onDone(ret);
  if (asyncMode) return Promise.resolve(ret);
  return ret;
};
var cwrap = (ident, returnType, argTypes, opts) => {
  var numericArgs =
    !argTypes ||
    argTypes.every((type) => type === 'number' || type === 'boolean');
  var numericRet = returnType !== 'string';
  if (numericRet && numericArgs && !opts) {
    return getCFunc(ident);
  }
  return (...args) => ccall(ident, returnType, argTypes, args, opts);
};
var FS_createPath = (...args) => FS.createPath(...args);
var FS_unlink = (...args) => FS.unlink(...args);
var FS_createLazyFile = (...args) => FS.createLazyFile(...args);
var FS_createDevice = (...args) => FS.createDevice(...args);
PThread.init();
FS.createPreloadedFile = FS_createPreloadedFile;
FS.preloadFile = FS_preloadFile;
FS.staticInit();
{
  initMemory();
  if (Module['noExitRuntime']) noExitRuntime = Module['noExitRuntime'];
  if (Module['preloadPlugins']) preloadPlugins = Module['preloadPlugins'];
  if (Module['print']) out = Module['print'];
  if (Module['printErr']) err = Module['printErr'];
  if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];
  if (Module['arguments']) arguments_ = Module['arguments'];
  if (Module['thisProgram']) thisProgram = Module['thisProgram'];
  if (Module['preInit']) {
    if (typeof Module['preInit'] == 'function')
      Module['preInit'] = [Module['preInit']];
    while (Module['preInit'].length > 0) {
      Module['preInit'].shift()();
    }
  }
}
Module['mmapAlloc'] = mmapAlloc;
Module['addRunDependency'] = addRunDependency;
Module['removeRunDependency'] = removeRunDependency;
Module['ccall'] = ccall;
Module['cwrap'] = cwrap;
Module['FS_preloadFile'] = FS_preloadFile;
Module['FS_unlink'] = FS_unlink;
Module['FS_createPath'] = FS_createPath;
Module['FS_createDevice'] = FS_createDevice;
Module['FS'] = FS;
Module['FS_createDataFile'] = FS_createDataFile;
Module['FS_createLazyFile'] = FS_createLazyFile;
Module['MEMFS'] = MEMFS;
var proxiedFunctionTable = [
  _proc_exit,
  exitOnMainThread,
  pthreadCreateProxied,
  ___syscall_fcntl64,
  ___syscall_ioctl,
  ___syscall_openat,
  __mmap_js,
  __munmap_js,
  __setitimer_js,
  _environ_get,
  _environ_sizes_get,
  _fd_close,
  _fd_read,
  _fd_seek,
  _fd_write,
];
function ggml_webgpu_is_ios_browser() {
  const ua = navigator.userAgent;
  return ua.includes('iPhone') || ua.includes('iPad') ? 1 : 0;
}
var _wllama_malloc,
  _wllama_start,
  _wllama_action,
  _wllama_exit,
  _wllama_debug,
  _main,
  _malloc,
  _free,
  _emwgpuCreateBindGroup,
  _emwgpuCreateBindGroupLayout,
  _emwgpuCreateCommandBuffer,
  _emwgpuCreateCommandEncoder,
  _emwgpuCreateComputePassEncoder,
  _emwgpuCreateComputePipeline,
  _emwgpuCreateExternalTexture,
  _emwgpuCreatePipelineLayout,
  _emwgpuCreateQuerySet,
  _emwgpuCreateRenderBundle,
  _emwgpuCreateRenderBundleEncoder,
  _emwgpuCreateRenderPassEncoder,
  _emwgpuCreateRenderPipeline,
  _emwgpuCreateSampler,
  _emwgpuCreateSurface,
  _emwgpuCreateTexture,
  _emwgpuCreateTextureView,
  _emwgpuCreateAdapter,
  _emwgpuCreateBuffer,
  _emwgpuCreateDevice,
  _emwgpuCreateQueue,
  _emwgpuCreateShaderModule,
  _emwgpuOnDeviceLostCompleted,
  _emwgpuOnMapAsyncCompleted,
  _emwgpuOnRequestAdapterCompleted,
  _emwgpuOnRequestDeviceCompleted,
  _emwgpuOnWorkDoneCompleted,
  _emwgpuOnUncapturedError,
  __emscripten_tls_init,
  _pthread_self,
  _emscripten_builtin_memalign,
  __emscripten_thread_init,
  __emscripten_thread_crashed,
  __emscripten_run_js_on_main_thread,
  __emscripten_thread_free_data,
  __emscripten_thread_exit,
  __emscripten_timeout,
  __emscripten_check_mailbox,
  _memalign,
  _setThrew,
  __emscripten_tempret_set,
  _emscripten_stack_set_limits,
  __emscripten_stack_restore,
  __emscripten_stack_alloc,
  _emscripten_stack_get_current,
  ___cxa_decrement_exception_refcount,
  ___cxa_increment_exception_refcount,
  ___cxa_can_catch,
  ___cxa_get_exception_ptr,
  dynCall_v,
  dynCall_ii,
  dynCall_iii,
  dynCall_vi,
  dynCall_viii,
  dynCall_viiiii,
  dynCall_vii,
  dynCall_iiiiiii,
  dynCall_iiiii,
  dynCall_iiiiii,
  dynCall_viiiiii,
  dynCall_vij,
  dynCall_jii,
  dynCall_viiii,
  dynCall_iiii,
  dynCall_iiiiiiii,
  dynCall_iifff,
  dynCall_iiiffiiii,
  dynCall_ifi,
  dynCall_iiiiiiiiiiiiii,
  dynCall_iiiiiiiii,
  dynCall_iiiiiiiiiiiiiiiiii,
  dynCall_iiiiiiiiiiiiiii,
  dynCall_iij,
  dynCall_iiiiiiiiii,
  dynCall_viiiiijjj,
  dynCall_iiijjj,
  dynCall_iiijj,
  dynCall_iiiiiiiiiffffffi,
  dynCall_iiiiiiiiifi,
  dynCall_iiiiiiiiiiiijjiifiiiiiii,
  dynCall_iiiiiiiiiiiiiiii,
  dynCall_iiiiiiiifi,
  dynCall_iiiiiiji,
  dynCall_iiif,
  dynCall_iiiiff,
  dynCall_viijj,
  dynCall_iiiiiiiiiiii,
  dynCall_viif,
  dynCall_viid,
  dynCall_iiijjjj,
  dynCall_i,
  dynCall_iiiiijiiijjjjjjj,
  dynCall_viiiiiiiii,
  dynCall_iiiff,
  dynCall_j,
  dynCall_ji,
  dynCall_vj,
  dynCall_viijii,
  dynCall_viijijj,
  dynCall_viiiij,
  dynCall_viiij,
  dynCall_iiij,
  dynCall_iiid,
  dynCall_jiji,
  dynCall_iidiiii,
  dynCall_jiiii,
  dynCall_fiii,
  dynCall_diii,
  dynCall_viiiiiii,
  dynCall_viiiiiiiiii,
  dynCall_viiiiiiiiiiiiiii,
  dynCall_viij,
  dynCall_viiiiiiii,
  dynCall_viji,
  dynCall_iiiiij,
  dynCall_iiiiid,
  dynCall_iiiiijj,
  dynCall_iiiiiijj,
  _asyncify_start_unwind,
  _asyncify_stop_unwind,
  _asyncify_start_rewind,
  _asyncify_stop_rewind,
  __indirect_function_table,
  wasmTable;
function assignWasmExports(wasmExports) {
  _wllama_malloc = Module['_wllama_malloc'] = wasmExports['Fb'];
  _wllama_start = Module['_wllama_start'] = wasmExports['Gb'];
  _wllama_action = Module['_wllama_action'] = wasmExports['Hb'];
  _wllama_exit = Module['_wllama_exit'] = wasmExports['Ib'];
  _wllama_debug = Module['_wllama_debug'] = wasmExports['Jb'];
  _main = Module['_main'] = wasmExports['Kb'];
  _malloc = wasmExports['Lb'];
  _free = wasmExports['Mb'];
  _emwgpuCreateBindGroup = wasmExports['Nb'];
  _emwgpuCreateBindGroupLayout = wasmExports['Ob'];
  _emwgpuCreateCommandBuffer = wasmExports['Pb'];
  _emwgpuCreateCommandEncoder = wasmExports['Qb'];
  _emwgpuCreateComputePassEncoder = wasmExports['Rb'];
  _emwgpuCreateComputePipeline = wasmExports['Sb'];
  _emwgpuCreateExternalTexture = wasmExports['Tb'];
  _emwgpuCreatePipelineLayout = wasmExports['Ub'];
  _emwgpuCreateQuerySet = wasmExports['Vb'];
  _emwgpuCreateRenderBundle = wasmExports['Wb'];
  _emwgpuCreateRenderBundleEncoder = wasmExports['Xb'];
  _emwgpuCreateRenderPassEncoder = wasmExports['Yb'];
  _emwgpuCreateRenderPipeline = wasmExports['Zb'];
  _emwgpuCreateSampler = wasmExports['_b'];
  _emwgpuCreateSurface = wasmExports['$b'];
  _emwgpuCreateTexture = wasmExports['ac'];
  _emwgpuCreateTextureView = wasmExports['bc'];
  _emwgpuCreateAdapter = wasmExports['cc'];
  _emwgpuCreateBuffer = wasmExports['dc'];
  _emwgpuCreateDevice = wasmExports['ec'];
  _emwgpuCreateQueue = wasmExports['fc'];
  _emwgpuCreateShaderModule = wasmExports['gc'];
  _emwgpuOnDeviceLostCompleted = wasmExports['hc'];
  _emwgpuOnMapAsyncCompleted = wasmExports['ic'];
  _emwgpuOnRequestAdapterCompleted = wasmExports['jc'];
  _emwgpuOnRequestDeviceCompleted = wasmExports['kc'];
  _emwgpuOnWorkDoneCompleted = wasmExports['lc'];
  _emwgpuOnUncapturedError = wasmExports['mc'];
  __emscripten_tls_init = wasmExports['nc'];
  _pthread_self = wasmExports['oc'];
  _emscripten_builtin_memalign = wasmExports['pc'];
  __emscripten_thread_init = wasmExports['rc'];
  __emscripten_thread_crashed = wasmExports['sc'];
  __emscripten_run_js_on_main_thread = wasmExports['tc'];
  __emscripten_thread_free_data = wasmExports['uc'];
  __emscripten_thread_exit = wasmExports['vc'];
  __emscripten_timeout = wasmExports['wc'];
  __emscripten_check_mailbox = wasmExports['xc'];
  _memalign = wasmExports['yc'];
  _setThrew = wasmExports['zc'];
  __emscripten_tempret_set = wasmExports['Ac'];
  _emscripten_stack_set_limits = wasmExports['Bc'];
  __emscripten_stack_restore = wasmExports['Cc'];
  __emscripten_stack_alloc = wasmExports['Dc'];
  _emscripten_stack_get_current = wasmExports['Ec'];
  ___cxa_decrement_exception_refcount = wasmExports['Fc'];
  ___cxa_increment_exception_refcount = wasmExports['Gc'];
  ___cxa_can_catch = wasmExports['Hc'];
  ___cxa_get_exception_ptr = wasmExports['Ic'];
  dynCall_v = dynCalls['v'] = wasmExports['Jc'];
  dynCall_ii = dynCalls['ii'] = wasmExports['Kc'];
  dynCall_iii = dynCalls['iii'] = wasmExports['Lc'];
  dynCall_vi = dynCalls['vi'] = wasmExports['Mc'];
  dynCall_viii = dynCalls['viii'] = wasmExports['Nc'];
  dynCall_viiiii = dynCalls['viiiii'] = wasmExports['Oc'];
  dynCall_vii = dynCalls['vii'] = wasmExports['Pc'];
  dynCall_iiiiiii = dynCalls['iiiiiii'] = wasmExports['Qc'];
  dynCall_iiiii = dynCalls['iiiii'] = wasmExports['Rc'];
  dynCall_iiiiii = dynCalls['iiiiii'] = wasmExports['Sc'];
  dynCall_viiiiii = dynCalls['viiiiii'] = wasmExports['Tc'];
  dynCall_vij = dynCalls['vij'] = wasmExports['Uc'];
  dynCall_jii = dynCalls['jii'] = wasmExports['Vc'];
  dynCall_viiii = dynCalls['viiii'] = wasmExports['Wc'];
  dynCall_iiii = dynCalls['iiii'] = wasmExports['Xc'];
  dynCall_iiiiiiii = dynCalls['iiiiiiii'] = wasmExports['Yc'];
  dynCall_iifff = dynCalls['iifff'] = wasmExports['Zc'];
  dynCall_iiiffiiii = dynCalls['iiiffiiii'] = wasmExports['_c'];
  dynCall_ifi = dynCalls['ifi'] = wasmExports['$c'];
  dynCall_iiiiiiiiiiiiii = dynCalls['iiiiiiiiiiiiii'] = wasmExports['ad'];
  dynCall_iiiiiiiii = dynCalls['iiiiiiiii'] = wasmExports['bd'];
  dynCall_iiiiiiiiiiiiiiiiii = dynCalls['iiiiiiiiiiiiiiiiii'] =
    wasmExports['cd'];
  dynCall_iiiiiiiiiiiiiii = dynCalls['iiiiiiiiiiiiiii'] = wasmExports['dd'];
  dynCall_iij = dynCalls['iij'] = wasmExports['ed'];
  dynCall_iiiiiiiiii = dynCalls['iiiiiiiiii'] = wasmExports['fd'];
  dynCall_viiiiijjj = dynCalls['viiiiijjj'] = wasmExports['gd'];
  dynCall_iiijjj = dynCalls['iiijjj'] = wasmExports['hd'];
  dynCall_iiijj = dynCalls['iiijj'] = wasmExports['id'];
  dynCall_iiiiiiiiiffffffi = dynCalls['iiiiiiiiiffffffi'] = wasmExports['jd'];
  dynCall_iiiiiiiiifi = dynCalls['iiiiiiiiifi'] = wasmExports['kd'];
  dynCall_iiiiiiiiiiiijjiifiiiiiii = dynCalls['iiiiiiiiiiiijjiifiiiiiii'] =
    wasmExports['ld'];
  dynCall_iiiiiiiiiiiiiiii = dynCalls['iiiiiiiiiiiiiiii'] = wasmExports['md'];
  dynCall_iiiiiiiifi = dynCalls['iiiiiiiifi'] = wasmExports['nd'];
  dynCall_iiiiiiji = dynCalls['iiiiiiji'] = wasmExports['od'];
  dynCall_iiif = dynCalls['iiif'] = wasmExports['pd'];
  dynCall_iiiiff = dynCalls['iiiiff'] = wasmExports['qd'];
  dynCall_viijj = dynCalls['viijj'] = wasmExports['rd'];
  dynCall_iiiiiiiiiiii = dynCalls['iiiiiiiiiiii'] = wasmExports['sd'];
  dynCall_viif = dynCalls['viif'] = wasmExports['td'];
  dynCall_viid = dynCalls['viid'] = wasmExports['ud'];
  dynCall_iiijjjj = dynCalls['iiijjjj'] = wasmExports['vd'];
  dynCall_i = dynCalls['i'] = wasmExports['wd'];
  dynCall_iiiiijiiijjjjjjj = dynCalls['iiiiijiiijjjjjjj'] = wasmExports['xd'];
  dynCall_viiiiiiiii = dynCalls['viiiiiiiii'] = wasmExports['yd'];
  dynCall_iiiff = dynCalls['iiiff'] = wasmExports['zd'];
  dynCall_j = dynCalls['j'] = wasmExports['Ad'];
  dynCall_ji = dynCalls['ji'] = wasmExports['Bd'];
  dynCall_vj = dynCalls['vj'] = wasmExports['Cd'];
  dynCall_viijii = dynCalls['viijii'] = wasmExports['Dd'];
  dynCall_viijijj = dynCalls['viijijj'] = wasmExports['Ed'];
  dynCall_viiiij = dynCalls['viiiij'] = wasmExports['Fd'];
  dynCall_viiij = dynCalls['viiij'] = wasmExports['Gd'];
  dynCall_iiij = dynCalls['iiij'] = wasmExports['Hd'];
  dynCall_iiid = dynCalls['iiid'] = wasmExports['Id'];
  dynCall_jiji = dynCalls['jiji'] = wasmExports['Jd'];
  dynCall_iidiiii = dynCalls['iidiiii'] = wasmExports['Kd'];
  dynCall_jiiii = dynCalls['jiiii'] = wasmExports['Ld'];
  dynCall_fiii = dynCalls['fiii'] = wasmExports['Md'];
  dynCall_diii = dynCalls['diii'] = wasmExports['Nd'];
  dynCall_viiiiiii = dynCalls['viiiiiii'] = wasmExports['Od'];
  dynCall_viiiiiiiiii = dynCalls['viiiiiiiiii'] = wasmExports['Pd'];
  dynCall_viiiiiiiiiiiiiii = dynCalls['viiiiiiiiiiiiiii'] = wasmExports['Qd'];
  dynCall_viij = dynCalls['viij'] = wasmExports['Rd'];
  dynCall_viiiiiiii = dynCalls['viiiiiiii'] = wasmExports['Sd'];
  dynCall_viji = dynCalls['viji'] = wasmExports['Td'];
  dynCall_iiiiij = dynCalls['iiiiij'] = wasmExports['Ud'];
  dynCall_iiiiid = dynCalls['iiiiid'] = wasmExports['Vd'];
  dynCall_iiiiijj = dynCalls['iiiiijj'] = wasmExports['Wd'];
  dynCall_iiiiiijj = dynCalls['iiiiiijj'] = wasmExports['Xd'];
  _asyncify_start_unwind = wasmExports['Yd'];
  _asyncify_stop_unwind = wasmExports['Zd'];
  _asyncify_start_rewind = wasmExports['_d'];
  _asyncify_stop_rewind = wasmExports['$d'];
  __indirect_function_table = wasmTable = wasmExports['qc'];
}
var wasmImports;
function assignWasmImports() {
  wasmImports = {
    w: ___cxa_begin_catch,
    Ha: ___cxa_current_primary_exception,
    G: ___cxa_end_catch,
    b: ___cxa_find_matching_catch_2,
    o: ___cxa_find_matching_catch_3,
    I: ___cxa_find_matching_catch_4,
    ba: ___cxa_rethrow,
    Ga: ___cxa_rethrow_primary_exception,
    z: ___cxa_throw,
    Ia: ___cxa_uncaught_exceptions,
    Pa: ___pthread_create_js,
    l: ___resumeException,
    ia: ___syscall_fcntl64,
    $a: ___syscall_ioctl,
    ab: ___syscall_openat,
    gb: __abort_js,
    Wa: __emscripten_init_main_thread_js,
    Ka: __emscripten_notify_mailbox_postmessage,
    Qa: __emscripten_receive_on_main_thread_js,
    Ca: __emscripten_runtime_keepalive_clear,
    fa: __emscripten_thread_cleanup,
    Va: __emscripten_thread_mailbox_await,
    cb: __emscripten_thread_set_strongref,
    Ra: __mmap_js,
    Sa: __munmap_js,
    Da: __setitimer_js,
    Ta: __tzset_js,
    fb: _clock_time_get,
    ga: _emscripten_check_blocking_allowed,
    eb: _emscripten_date_now,
    bb: _emscripten_exit_with_live_runtime,
    La: _emscripten_get_heap_max,
    S: _emscripten_get_now,
    hb: _emscripten_has_asyncify,
    Ma: _emscripten_num_logical_cores,
    Ja: _emscripten_resize_heap,
    lb: _emwgpuAdapterRequestDevice,
    T: _emwgpuBufferDestroy,
    la: _emwgpuBufferGetConstMappedRange,
    nb: _emwgpuBufferMapAsync,
    ka: _emwgpuBufferUnmap,
    p: _emwgpuDelete,
    P: _emwgpuDeviceCreateBuffer,
    ja: _emwgpuDeviceCreateShaderModule,
    mb: _emwgpuDeviceDestroy,
    kb: _emwgpuInstanceRequestAdapter,
    jb: _emwgpuQueueOnSubmittedWorkDone,
    ib: _emwgpuWaitAny,
    Ya: _environ_get,
    Za: _environ_sizes_get,
    Oa: _exit,
    aa: _fd_close,
    ha: _fd_read,
    Ua: _fd_seek,
    _a: _fd_write,
    db: ggml_webgpu_is_ios_browser,
    ma: invoke_diii,
    na: invoke_fiii,
    F: invoke_i,
    va: invoke_ifi,
    f: invoke_ii,
    ya: invoke_iifff,
    i: invoke_iii,
    oa: invoke_iiid,
    x: invoke_iiif,
    Bb: invoke_iiiff,
    ea: invoke_iiiffiiii,
    h: invoke_iiii,
    ra: invoke_iiiiff,
    j: invoke_iiiii,
    n: invoke_iiiiii,
    c: invoke_iiiiiii,
    H: invoke_iiiiiiii,
    ta: invoke_iiiiiiiifi,
    C: invoke_iiiiiiiii,
    s: invoke_iiiiiiiiiffffffi,
    v: invoke_iiiiiiiiifi,
    g: invoke_iiiiiiiiii,
    E: invoke_iiiiiiiiiiii,
    xa: invoke_iiiiiiiiiiiiii,
    O: invoke_iiiiiiiiiiiiiii,
    u: invoke_iiiiiiiiiiiiiiii,
    da: invoke_iiiiiiiiiiiiiiiiii,
    A: invoke_iiiiiiiiiiiijjiifiiiiiii,
    sa: invoke_iiiiiiji,
    ca: invoke_iiiiijiiijjjjjjj,
    X: invoke_iiij,
    B: invoke_iiijj,
    q: invoke_iiijjj,
    D: invoke_iiijjjj,
    R: invoke_iij,
    Ab: invoke_j,
    N: invoke_ji,
    U: invoke_jii,
    W: invoke_jiiii,
    d: invoke_v,
    t: invoke_vi,
    m: invoke_vii,
    xb: invoke_viid,
    yb: invoke_viif,
    k: invoke_viii,
    r: invoke_viiii,
    e: invoke_viiiii,
    M: invoke_viiiiii,
    K: invoke_viiiiiii,
    _: invoke_viiiiiiiii,
    Q: invoke_viiiiiiiiii,
    V: invoke_viiiiiiiiiiiiiii,
    $: invoke_viiiiijjj,
    L: invoke_viiiij,
    Y: invoke_viiij,
    pa: invoke_viijii,
    qa: invoke_viijijj,
    wa: invoke_viijj,
    J: invoke_vij,
    Z: invoke_vj,
    y: _llvm_eh_typeid_for,
    a: wasmMemory,
    Ba: _proc_exit,
    Fa: _random_get,
    Ea: _wgpuAdapterGetFeatures,
    Na: _wgpuAdapterGetInfo,
    Xa: _wgpuAdapterGetLimits,
    Aa: _wgpuAdapterHasFeature,
    Db: _wgpuBufferGetSize,
    vb: _wgpuCommandEncoderBeginComputePass,
    ob: _wgpuCommandEncoderCopyBufferToBuffer,
    qb: _wgpuCommandEncoderFinish,
    sb: _wgpuComputePassEncoderDispatchWorkgroups,
    rb: _wgpuComputePassEncoderEnd,
    tb: _wgpuComputePassEncoderSetBindGroup,
    ub: _wgpuComputePassEncoderSetPipeline,
    Cb: _wgpuComputePipelineGetBindGroupLayout,
    zb: _wgpuDeviceCreateBindGroup,
    wb: _wgpuDeviceCreateCommandEncoder,
    za: _wgpuDeviceCreateComputePipeline,
    pb: _wgpuQueueSubmit,
    ua: _wgpuQueueWriteBuffer,
  };
}
function invoke_v(index) {
  var sp = stackSave();
  try {
    dynCall_v(index);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_viii(index, a1, a2, a3) {
  var sp = stackSave();
  try {
    dynCall_viii(index, a1, a2, a3);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iii(index, a1, a2) {
  var sp = stackSave();
  try {
    return dynCall_iii(index, a1, a2);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_ii(index, a1) {
  var sp = stackSave();
  try {
    return dynCall_ii(index, a1);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_viiiii(index, a1, a2, a3, a4, a5) {
  var sp = stackSave();
  try {
    dynCall_viiiii(index, a1, a2, a3, a4, a5);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_vii(index, a1, a2) {
  var sp = stackSave();
  try {
    dynCall_vii(index, a1, a2);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiii(index, a1, a2, a3, a4, a5, a6) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiii(index, a1, a2, a3, a4, a5, a6);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_vi(index, a1) {
  var sp = stackSave();
  try {
    dynCall_vi(index, a1);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiii(index, a1, a2, a3) {
  var sp = stackSave();
  try {
    return dynCall_iiii(index, a1, a2, a3);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiii(index, a1, a2, a3, a4) {
  var sp = stackSave();
  try {
    return dynCall_iiiii(index, a1, a2, a3, a4);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_jii(index, a1, a2) {
  var sp = stackSave();
  try {
    return dynCall_jii(index, a1, a2);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
    return 0n;
  }
}
function invoke_viiii(index, a1, a2, a3, a4) {
  var sp = stackSave();
  try {
    dynCall_viiii(index, a1, a2, a3, a4);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiii(index, a1, a2, a3, a4, a5, a6, a7);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_vij(index, a1, a2) {
  var sp = stackSave();
  try {
    dynCall_vij(index, a1, a2);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iifff(index, a1, a2, a3, a4) {
  var sp = stackSave();
  try {
    return dynCall_iifff(index, a1, a2, a3, a4);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiffiiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
  var sp = stackSave();
  try {
    return dynCall_iiiffiiii(index, a1, a2, a3, a4, a5, a6, a7, a8);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiiiiiiii(
  index,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13
) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiiiiiii(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13
    );
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_viiiiii(index, a1, a2, a3, a4, a5, a6) {
  var sp = stackSave();
  try {
    dynCall_viiiiii(index, a1, a2, a3, a4, a5, a6);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iij(index, a1, a2) {
  var sp = stackSave();
  try {
    return dynCall_iij(index, a1, a2);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiii(index, a1, a2, a3, a4, a5) {
  var sp = stackSave();
  try {
    return dynCall_iiiiii(index, a1, a2, a3, a4, a5);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiiiiiiiiiiii(
  index,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14,
  a15,
  a16,
  a17
) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiiiiiiiiiii(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
      a14,
      a15,
      a16,
      a17
    );
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiiiiiiiii(
  index,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14
) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiiiiiiii(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
      a14
    );
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiif(index, a1, a2, a3) {
  var sp = stackSave();
  try {
    return dynCall_iiif(index, a1, a2, a3);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiiiiii(
  index,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11
) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiiiii(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11
    );
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_viijj(index, a1, a2, a3, a4) {
  var sp = stackSave();
  try {
    dynCall_viijj(index, a1, a2, a3, a4);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiijj(index, a1, a2, a3, a4) {
  var sp = stackSave();
  try {
    return dynCall_iiijj(index, a1, a2, a3, a4);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiijjjj(index, a1, a2, a3, a4, a5, a6) {
  var sp = stackSave();
  try {
    return dynCall_iiijjjj(index, a1, a2, a3, a4, a5, a6);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiiiffffffi(
  index,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14,
  a15
) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiiffffffi(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
      a14,
      a15
    );
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_i(index) {
  var sp = stackSave();
  try {
    return dynCall_i(index);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_viiiiijjj(index, a1, a2, a3, a4, a5, a6, a7, a8) {
  var sp = stackSave();
  try {
    dynCall_viiiiijjj(index, a1, a2, a3, a4, a5, a6, a7, a8);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_ifi(index, a1, a2) {
  var sp = stackSave();
  try {
    return dynCall_ifi(index, a1, a2);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiijjj(index, a1, a2, a3, a4, a5) {
  var sp = stackSave();
  try {
    return dynCall_iiijjj(index, a1, a2, a3, a4, a5);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiiifi(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiifi(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiiiiiijjiifiiiiiii(
  index,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14,
  a15,
  a16,
  a17,
  a18,
  a19,
  a20,
  a21,
  a22,
  a23
) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiiiiijjiifiiiiiii(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
      a14,
      a15,
      a16,
      a17,
      a18,
      a19,
      a20,
      a21,
      a22,
      a23
    );
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiiiiiiiiii(
  index,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14,
  a15
) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiiiiiiiii(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
      a14,
      a15
    );
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiifi(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiifi(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiji(index, a1, a2, a3, a4, a5, a6, a7) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiji(index, a1, a2, a3, a4, a5, a6, a7);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiff(index, a1, a2, a3, a4, a5) {
  var sp = stackSave();
  try {
    return dynCall_iiiiff(index, a1, a2, a3, a4, a5);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiijiiijjjjjjj(
  index,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14,
  a15
) {
  var sp = stackSave();
  try {
    return dynCall_iiiiijiiijjjjjjj(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
      a14,
      a15
    );
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_viiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
  var sp = stackSave();
  try {
    dynCall_viiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_ji(index, a1) {
  var sp = stackSave();
  try {
    return dynCall_ji(index, a1);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
    return 0n;
  }
}
function invoke_iiiff(index, a1, a2, a3, a4) {
  var sp = stackSave();
  try {
    return dynCall_iiiff(index, a1, a2, a3, a4);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_vj(index, a1) {
  var sp = stackSave();
  try {
    dynCall_vj(index, a1);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_viijijj(index, a1, a2, a3, a4, a5, a6) {
  var sp = stackSave();
  try {
    dynCall_viijijj(index, a1, a2, a3, a4, a5, a6);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_viijii(index, a1, a2, a3, a4, a5) {
  var sp = stackSave();
  try {
    dynCall_viijii(index, a1, a2, a3, a4, a5);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_viiiij(index, a1, a2, a3, a4, a5) {
  var sp = stackSave();
  try {
    dynCall_viiiij(index, a1, a2, a3, a4, a5);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_viiij(index, a1, a2, a3, a4) {
  var sp = stackSave();
  try {
    dynCall_viiij(index, a1, a2, a3, a4);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiij(index, a1, a2, a3) {
  var sp = stackSave();
  try {
    return dynCall_iiij(index, a1, a2, a3);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiid(index, a1, a2, a3) {
  var sp = stackSave();
  try {
    return dynCall_iiid(index, a1, a2, a3);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_j(index) {
  var sp = stackSave();
  try {
    return dynCall_j(index);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
    return 0n;
  }
}
function invoke_jiiii(index, a1, a2, a3, a4) {
  var sp = stackSave();
  try {
    return dynCall_jiiii(index, a1, a2, a3, a4);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
    return 0n;
  }
}
function invoke_fiii(index, a1, a2, a3) {
  var sp = stackSave();
  try {
    return dynCall_fiii(index, a1, a2, a3);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_diii(index, a1, a2, a3) {
  var sp = stackSave();
  try {
    return dynCall_diii(index, a1, a2, a3);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_viiiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
  var sp = stackSave();
  try {
    dynCall_viiiiiii(index, a1, a2, a3, a4, a5, a6, a7);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_viiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
  var sp = stackSave();
  try {
    dynCall_viiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_viiiiiiiiiiiiiii(
  index,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14,
  a15
) {
  var sp = stackSave();
  try {
    dynCall_viiiiiiiiiiiiiii(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
      a14,
      a15
    );
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_viif(index, a1, a2, a3) {
  var sp = stackSave();
  try {
    dynCall_viif(index, a1, a2, a3);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_viid(index, a1, a2, a3) {
  var sp = stackSave();
  try {
    dynCall_viid(index, a1, a2, a3);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function applySignatureConversions(wasmExports) {
  wasmExports = Object.assign({}, wasmExports);
  var makeWrapper_pp = (f) => (a0) => f(a0) >>> 0;
  var makeWrapper_p = (f) => () => f() >>> 0;
  var makeWrapper_ppp = (f) => (a0, a1) => f(a0, a1) >>> 0;
  wasmExports['Lb'] = makeWrapper_pp(wasmExports['Lb']);
  wasmExports['oc'] = makeWrapper_p(wasmExports['oc']);
  wasmExports['pc'] = makeWrapper_ppp(wasmExports['pc']);
  wasmExports['yc'] = makeWrapper_ppp(wasmExports['yc']);
  wasmExports['Dc'] = makeWrapper_pp(wasmExports['Dc']);
  wasmExports['Ec'] = makeWrapper_p(wasmExports['Ec']);
  wasmExports['Ic'] = makeWrapper_pp(wasmExports['Ic']);
  return wasmExports;
}
function callMain() {
  var entryFunction = _main;
  var argc = 0;
  var argv = 0;
  try {
    var ret = entryFunction(argc, argv);
    exitJS(ret, true);
    return ret;
  } catch (e) {
    return handleException(e);
  }
}
function run() {
  if (runDependencies > 0) {
    dependenciesFulfilled = run;
    return;
  }
  if (ENVIRONMENT_IS_PTHREAD) {
    initRuntime();
    return;
  }
  preRun();
  if (runDependencies > 0) {
    dependenciesFulfilled = run;
    return;
  }
  function doRun() {
    Module['calledRun'] = true;
    if (ABORT) return;
    initRuntime();
    preMain();
    Module['onRuntimeInitialized']?.();
    var noInitialRun = Module['noInitialRun'] || false;
    if (!noInitialRun) callMain();
    postRun();
  }
  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(() => {
      setTimeout(() => Module['setStatus'](''), 1);
      doRun();
    }, 1);
  } else {
    doRun();
  }
}
var wasmExports;
if (!ENVIRONMENT_IS_PTHREAD) {
  createWasm();
  run();
}
`;class Mm{constructor(e,t=1,r,a){this.taskQueue=[],this.taskId=1,this.resultQueue=[],this.busy=!1,this.pathConfig=e,this.nbThread=t,this.multiThread=t>1,this.logger=a,this.suppressNativeLog=r}async moduleInit(e){if(!this.pathConfig["wllama.wasm"])throw new Error('"wllama.wasm" is missing from pathConfig');const t=this.pathConfig["wllama.buildType"],r=t==="jspi",a=t==="asyncify";if(!r&&!a)throw new Error('"wllama.buildType" must be either "jspi" or "asyncify"');let i;if(this.multiThread)if(r)i=xm;else if(a)i=Am;else throw new Error("Unknown multi-thread build type for provided wllama.wasm path");else if(r)i=Fm;else if(a)i=Cm;else throw new Error("Unknown single-thread build type for provided wllama.wasm path");let s=i.replace("var Module","var ___Module");const o={pathConfig:this.pathConfig,nbThread:this.nbThread},l=[`const RUN_OPTIONS = ${JSON.stringify(o)};`,`function wModuleInit() { ${s}; return Module; }`,km].join(`;

`);this.worker=Vs(l),this.worker.onmessage=this.onRecvMsg.bind(this),this.worker.onerror=this.logger.error;const u=await this.pushTask({verb:"module.init",args:[new Blob([i],{type:"text/javascript"})],callbackId:this.taskId++});for(const f of e)if(f.opfsCacheName)await this.opfsFileAlloc(f.name,f.opfsCacheName);else if(f.blob){const g=await this.fileAlloc(f.name,f.blob.size);await this.fileWrite(g,f.blob)}return u}async wllamaStart(){const e=await this.pushTask({verb:"wllama.start",args:[],callbackId:this.taskId++});return this.parseResult(e)}async wllamaAction(e,t){const r=fm(t),a=await this.pushTask({verb:"wllama.action",args:[e,r],callbackId:this.taskId++});return mm(a)}async wllamaExit(){if(this.worker){const e=await this.pushTask({verb:"wllama.exit",args:[],callbackId:this.taskId++});this.parseResult(e),this.worker.terminate()}}async wllamaDebug(){const e=await this.pushTask({verb:"wllama.debug",args:[],callbackId:this.taskId++});return JSON.parse(e)}async opfsFileAlloc(e,t){await this.pushTask({verb:"fs.opfs-alloc",args:[e,t],callbackId:this.taskId++})}async fileAlloc(e,t){return(await this.pushTask({verb:"fs.alloc",args:[e,t],callbackId:this.taskId++})).fileId}async fileWrite(e,t){const r=t.stream().getReader();let a=0;for(;;){const{done:i,value:s}=await r.read();if(i)break;const o=s.byteLength;await this.pushTask({verb:"fs.write",args:[e,s,a],callbackId:this.taskId++},[s.buffer]),a+=o}}parseResult(e){const t=JSON.parse(e);if(t&&t.error)throw new Error("Unknown error, please see console.log");return t}pushTask(e,t){return new Promise((r,a)=>{this.taskQueue.push({resolve:r,reject:a,param:e,buffers:t}),this.runTaskLoop()})}async runTaskLoop(){if(!this.busy){for(this.busy=!0;;){const e=this.taskQueue.shift();if(!e)break;this.resultQueue.push(e),this.worker.postMessage(e.param,Fd()?void 0:{transfer:e.buffers??[]})}this.busy=!1}}onRecvMsg(e){if(!e.data)return;const{verb:t,args:r}=e.data;if(t&&t.startsWith("console.")){if(this.suppressNativeLog)return;t.endsWith("debug")&&this.logger.debug(...r),t.endsWith("log")&&this.logger.log(...r),t.endsWith("warn")&&this.logger.warn(...r),t.endsWith("error")&&this.logger.error(...r);return}else t==="signal.abort"&&this.abort(r[0]);const{callbackId:a,result:i,err:s}=e.data;if(a){const o=this.resultQueue.findIndex(l=>l.param.callbackId===a);if(o!==-1){const l=this.resultQueue.splice(o,1)[0];s?l.reject(s):l.resolve(i)}else this.logger.error(`Cannot find waiting task with callbackId = ${a}`)}}abort(e){for(;this.resultQueue.length>0;){const t=this.resultQueue.pop();if(!t)break;t.reject(new Error(`Received abort signal from llama.cpp; Message: ${e||"(empty)"}`))}}}const je="__metadata__",Tm="polyfill_for_older_version";class Ad{async getNameFromURL(e){return await et(e,"")}async write(e,t,r){return this.writeMetadata(e,r),await rl(e,t)}async download(e,t={}){const r=Vs(Cd);let a=!1;t.signal&&(a=t.signal.aborted,t.signal.addEventListener("abort",()=>{a=!0,r.postMessage({action:"download-abort"})}),delete t.signal);const i=await et(e,je),s=await et(e,"");return await new Promise((o,l)=>{r.postMessage({action:"download",url:e,filename:s,metadataFileName:i,options:{headers:t.headers,aborted:a}}),r.onmessage=u=>{var f;if(u.data.ok)r.terminate(),o();else if(u.data.err)r.terminate(),l(u.data.err);else if(u.data.progress){const g=u.data.progress;(f=t.progressCallback)==null||f.call(t,g)}else l(new Error("Unknown message from worker")),console.error("Unknown message from worker",u.data)}})}async open(e){return await al(e)}async getSize(e){return await Um(e)}async getMetadata(e){const t=await al(e,je),r=await this.getSize(e);if(!t)return r>0?{etag:Tm,originalSize:r,originalURL:""}:null;try{return await new Response(t).json()}catch{return null}}async list(){const e=await sa(),t=[],r={};for await(let[a,i]of e.entries())if(i.kind==="file"&&a.startsWith(je)){const s=(await i.getFile()).stream(),o=await new Response(s).json().catch(l=>null);r[a.replace(je,"")]=o}for await(let[a,i]of e.entries())i.kind==="file"&&!a.startsWith(je)&&t.push({name:a,size:await i.getFile().then(s=>s.size),metadata:r[a]||{originalSize:(await i.getFile()).size,originalURL:"",etag:""}});return t}async clear(){await this.deleteMany(()=>!0)}async delete(e){const t=await this.getNameFromURL(e);await this.deleteMany(r=>r.name===e||r.name===t)}async deleteMany(e){const t=await sa(),r=await this.list();for(const a of r)e(a)&&t.removeEntry(a.name)}async writeMetadata(e,t){const r=new Blob([JSON.stringify(t)],{type:"text/plain"});await rl(e,r.stream(),je)}}async function rl(n,e,t=""){try{const r=await et(n,t),a=await Im(r);await a.truncate(0);const i=e.getReader();for(;;){const{done:s,value:o}=await i.read();if(s)break;await a.write(o)}await a.close()}catch(r){console.error("opfsWrite",r)}}async function al(n,e=""){const t=async i=>{try{return await(await(await sa()).getFileHandle(i)).getFile()}catch{return null}};let r=await t(n);if(r)return r;const a=await et(n,e);return r=await t(a),r}async function Um(n,e=""){try{const t=await sa(),r=await et(n,e);return(await(await t.getFileHandle(r)).getFile()).size}catch{return-1}}async function et(n,e){const t=await crypto.subtle.digest("SHA-1",new TextEncoder().encode(n)),a=Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("");return`${e}${a}_${n.split("/").pop()}`}async function sa(){return await(await navigator.storage.getDirectory()).getDirectoryHandle("cache",{create:!0})}async function Im(n){const e=Vs(Cd);let t,r;e.onmessage=i=>{i.data.ok?t(null):i.data.err&&r(i.data.err)};const a=i=>new Promise((s,o)=>{t=s,r=o,e.postMessage(i,Fd()?void 0:{transfer:i.value?[i.value.buffer]:[]})});return await a({open:n}),{truncate:async()=>{},write:i=>a({value:i}),close:async()=>{await a({done:!0}),e.terminate()}}}const Om=3;class oa{constructor(e,t,r){this.modelManager=e,this.url=t,r?(this.files=this.getAllFiles(r),this.size=ni(this.files.map(a=>a.metadata.originalSize))):(this.files=[],this.size=0)}async open(){if(this.size===-1)throw new O("Model is deleted from the cache; Call ModelManager.downloadModel to re-download the model","load_error");const e=[];for(const t of this.files){const r=await this.modelManager.cacheManager.open(t.name);if(!r)throw new Error(`Failed to open file ${t.name}; Hint: the model may be invalid, please refresh it`);e.push(r)}return e}validate(){const e=Fe.parseModelUrl(this.url).length;if(this.size===-1)return"deleted";if(this.size<16||this.files.length!==e)return"invalid";for(const t of this.files)if(!t.metadata||t.metadata.originalSize!==t.size)return"invalid";return"valid"}async refresh(e={}){const t=Fe.parseModelUrl(this.url),r=t.map((u,f)=>({url:u,index:f}));this.modelManager.logger.debug("Downloading model files:",t);const a=this.modelManager.params.parallelDownloads??Om,i=await this.getTotalDownloadSize(t),s=[],o=async()=>{for(;r.length>0;){const u=r.shift();if(!u)break;await this.modelManager.cacheManager.download(u.url,{...e,progressCallback:({loaded:f})=>{var g;s[u.index]=f,(g=e.progressCallback)==null||g.call(e,{loaded:ni(s),total:i})}})}},l=[];for(let u=0;u<a;u++)l.push(o()),s.push(0);await Promise.all(l),this.files=this.getAllFiles(await this.modelManager.cacheManager.list()),this.size=this.files.reduce((u,f)=>u+f.metadata.originalSize,0)}async remove(){this.files=this.getAllFiles(await this.modelManager.cacheManager.list()),await this.modelManager.cacheManager.deleteMany(e=>!!this.files.find(t=>t.name===e.name)),this.size=-1}getAllFiles(e){const t=new Set(Fe.parseModelUrl(this.url)),r=[];for(const a of t){const i=e.find(s=>s.metadata.originalURL===a);if(!i)throw new Error(`Model file not found: ${a}`);r.push(i)}return r.sort((a,i)=>a.metadata.originalURL.localeCompare(i.metadata.originalURL)),r}async getTotalDownloadSize(e){const r=(await Promise.all(e.map(a=>fetch(a,{method:"HEAD"})))).map(a=>Number(a.headers.get("content-length")||"0"));return ni(r)}}class Fe{constructor(e={}){this.cacheManager=e.cacheManager||new Ad,this.params=e,this.logger=e.logger||console}static parseModelUrl(e){if(Array.isArray(e))return e;const t=/-(\d{5})-of-(\d{5})\.gguf(?:\?.*)?$/,r=e.match(/\.gguf(\?.*)?$/),a=(r==null?void 0:r[1])??"",i=e.match(t);if(!i)return[e];const s=e.replace(t,""),o=i[2];return Array.from({length:Number(o)},(u,f)=>(f+1).toString().padStart(5,"0")).map(u=>`${s}-${u}-of-${o}.gguf${a}`)}async getModels(e={}){const t=await this.cacheManager.list();let r=[];for(const a of t){const i=Fe.parseModelUrl(a.metadata.originalURL);(i.length===1||i[0]===a.metadata.originalURL)&&r.push(new oa(this,a.metadata.originalURL,t))}return e.includeInvalid||(r=r.filter(a=>a.validate()==="valid")),r}async downloadModel(e,t={}){if(!xd(e))throw new O(`Invalid model URL: ${e}; URL must ends with ".gguf"`,"download_error");const r=new oa(this,e,void 0);return r.validate()!=="valid"&&await r.refresh(t),r}async getModelOrDownload(e,t={}){var i;const a=(await this.getModels()).find(s=>s.url===e);return a?((i=t.progressCallback)==null||i.call(t,{loaded:a.size,total:a.size}),a):this.downloadModel(e,t)}async clear(){await this.cacheManager.clear()}}const Rm=/^([a-zA-Z0-9_\-\.]+)\/([a-zA-Z0-9_\-\.]+)$/,jm="Hugging Face model ID is incorrect. Only regular alphanumeric characters, '-', '.' and '_' supported";class O extends Error{constructor(e,t="unknown_error"){super(e),this.type=t}}class il extends Error{constructor(){super("Operation aborted"),this.name="AbortError"}}class Nm{constructor(e,t={}){if(this.proxy=null,this.useMultiThread=!1,this.useWebGPU=!1,this.nbThreads=1,this.useEmbeddings=!1,this.loadedContextInfo=null,this.bosToken=-1,this.eosToken=-1,this.eotToken=-1,this.eogTokens=new Set,this.addBosToken=!1,this.addEosToken=!1,this.samplingConfig={},this.hasEncoder=!1,this.decoderStartToken=-1,this.nCachedTokens=0,Pm(),!e)throw new O("AssetsPathConfig is required");this.pathConfig=e,this.config=t,this.cacheManager=t.cacheManager??new Ad,this.modelManager=t.modelManager??new Fe({cacheManager:this.cacheManager,logger:t.logger??console,parallelDownloads:t.parallelDownloads,allowOffline:t.allowOffline})}logger(){return this.config.logger??console}checkModelLoaded(){if(!this.isModelLoaded())throw new O("loadModel() is not yet called","model_not_loaded")}static getLibllamaVersion(){return Em}isModelLoaded(){return!!this.proxy&&!!this.metadata}getBOS(){return this.bosToken}getEOS(){return this.eosToken}getEOT(){return this.eotToken}isTokenEOG(e){return e===this.eosToken||e===this.eotToken||this.eogTokens.has(e)}getDecoderStartToken(){return this.decoderStartToken}getModelMetadata(){return this.checkModelLoaded(),this.metadata}isMultithread(){return this.checkModelLoaded(),this.useMultiThread}getNumThreads(){return this.checkModelLoaded(),this.nbThreads}usingWebGPU(){return this.checkModelLoaded(),this.useWebGPU}isEncoderDecoderArchitecture(){return this.checkModelLoaded(),this.hasEncoder}mustAddBosToken(){return this.checkModelLoaded(),this.addBosToken}mustAddEosToken(){return this.checkModelLoaded(),this.addEosToken}getChatTemplate(){return this.checkModelLoaded(),this.chatTemplate??null}async loadModelFromUrl(e,t={}){const r=kd(e)?e:e[0],s=await(t.useCache??!0?await this.modelManager.getModelOrDownload(r,t):await this.modelManager.downloadModel(r,t)).open();return await this.loadModel(s,t)}async loadModelFromHF(e,t,r={}){if(!e.match(Rm))throw new O(jm,"download_error");if(!xd(t))throw new O("Only GGUF file is supported","download_error");return await this.loadModelFromUrl(`https://huggingface.co/${e}/resolve/main/${t}`,r)}async loadModel(e,t={}){if(this.proxy)throw new O("Module is already initialized","load_error");this.config.preferWebGPU&&(navigator.gpu?await navigator.gpu.requestAdapter()?this.useWebGPU=!0:this.logger().warn("WebGPU backend requested but no adapter found, falling back to CPU"):this.logger().warn("WebGPU backend requested but WebGPU is not available, falling back to CPU"));const r=this.useWebGPU&&e instanceof oa;let a=[];if(!r){if(a=e instanceof oa?await e.open():[...e],a.some(h=>h.size===0))throw new O("Input model (or splits) must be non-empty Blob or File","load_error");vm(a)}const i="Suspending"in WebAssembly,s=i?this.pathConfig["jspi/multi-thread/wllama.wasm"]:this.pathConfig["asyncify/multi-thread/wllama.wasm"],o=i?this.pathConfig["jspi/single-thread/wllama.wasm"]:this.pathConfig["asyncify/single-thread/wllama.wasm"];if(await _m())if(s){const h=Math.floor((navigator.hardwareConcurrency||1)/2);this.nbThreads=t.n_threads??h,this.nbThreads>1?this.useMultiThread=!0:this.logger().warn("Falling back single-thread due to n_threads configuration or limited hardware concurrency")}else this.logger().warn("Missing paths to multi-thread build, falling back to single-thread");else this.logger().warn("Multi-threads are not supported in this environment, falling back to single-thread");this.useWebGPU&&(this.logger().warn("Disabling multi-threading when using WebGPU backend"),this.useMultiThread=!1,this.nbThreads=1);const l=this.useMultiThread?{"wllama.wasm":tl(s),"wllama.buildType":i?"jspi":"asyncify","wllama.useWebGPU":this.useWebGPU}:{"wllama.wasm":tl(o),"wllama.buildType":i?"jspi":"asyncify","wllama.useWebGPU":this.useWebGPU};this.proxy=new Mm(l,this.nbThreads,this.config.suppressNativeLog??!1,this.logger());const u=r?e.files.map((h,v)=>({name:`model-${v}.gguf`,opfsCacheName:h.name})):a.map((h,v)=>({name:`model-${v}.gguf`,blob:h}));await this.proxy.moduleInit(u);const f=await this.proxy.wllamaStart();if(!f.success)throw new O(`Error while calling start function, result = ${f}`);const g=await this.proxy.wllamaAction("load",{_name:"load_req",use_mmap:!r,use_mlock:!r,use_webgpu:this.useWebGPU,n_gpu_layers:this.useWebGPU?999:0,no_perf:this.config.noPerf??!1,seed:t.seed||Math.floor(Math.random()*1e5),n_ctx:t.n_ctx||1024,n_threads:this.nbThreads,n_ctx_auto:!1,model_paths:u.map(h=>`models/${h.name}`),embeddings:t.embeddings,offload_kqv:t.offload_kqv,n_batch:t.n_batch,pooling_type:t.pooling_type,rope_scaling_type:t.rope_scaling_type,rope_freq_base:t.rope_freq_base,rope_freq_scale:t.rope_freq_scale,yarn_ext_factor:t.yarn_ext_factor,yarn_attn_factor:t.yarn_attn_factor,yarn_beta_fast:t.yarn_beta_fast,yarn_beta_slow:t.yarn_beta_slow,yarn_orig_ctx:t.yarn_orig_ctx,cache_type_k:t.cache_type_k,cache_type_v:t.cache_type_v,n_seq_max:1,flash_attn:t.flash_attn,swa_full:!0}),m={...g,metadata:{}};for(let h=0;h<g.metadata_key.length;h++)m.metadata[g.metadata_key[h]]=g.metadata_val[h];this.bosToken=m.token_bos,this.eosToken=m.token_eos,this.eotToken=m.token_eot,this.useEmbeddings=!!t.embeddings,this.metadata={hparams:{nVocab:m.n_vocab,nCtxTrain:m.n_ctx_train,nEmbd:m.n_embd,nLayer:m.n_layer},meta:m.metadata},this.hasEncoder=!!m.has_encoder,this.decoderStartToken=m.token_decoder_start,this.addBosToken=m.add_bos_token,this.addEosToken=m.add_eos_token,this.chatTemplate=m.metadata["tokenizer.chat_template"],this.loadedContextInfo=m,this.eogTokens=new Set(m.list_tokens_eog),this.logger().debug({loadedCtxInfo:m})}getLoadedContextInfo(){if(this.checkModelLoaded(),!this.loadedContextInfo)throw new O("Loaded context info is not available");return{...this.loadedContextInfo}}async createEmbedding(e,t={}){this.checkModelLoaded();const r={skipBOS:!1,skipEOS:!1,...t};await this.samplingInit(this.samplingConfig),await this.kvClear();const a=await this.tokenize(e);return this.bosToken&&!r.skipBOS&&a.unshift(this.bosToken),this.eosToken&&!r.skipEOS&&a.push(this.eosToken),await this.embeddings(a)}async createChatCompletion(e,t){const r=await this.formatChat(e,!0);return t.stream?await this.createCompletionGenerator(r,t):await this.createCompletion(r,{...t,stream:!1})}async createCompletion(e,t){return t.stream?await this.createCompletionGenerator(e,t):await this.createCompletionImpl(e,{...t,stream:!1})}async createCompletionImpl(e,t){var l;this.checkModelLoaded(),this.samplingConfig=t.sampling??{},await this.samplingInit(this.samplingConfig);const r=new Set(t.stopTokens??[]);let a=await this.tokenize(e,!0);this.addBosToken&&a[0]!==this.bosToken&&a.unshift(this.bosToken),t.useCache?a=await this.computeNonCachedTokens(a):await this.kvClear(),await this.samplingAccept(a),this.isEncoderDecoderArchitecture()?(await this.encode(a),await this.decode([this.getDecoderStartToken()],{})):await this.decode(a,{});let i=new Uint8Array,s=!1;const o=()=>{s=!0};for(let u=0;u<(t.nPredict??1/0);u++){const f=await this.samplingSample();if(this.isTokenEOG(f.token)||r.has(f.token)||(i=gm([i,f.piece]),t.onNewToken&&t.onNewToken(f.token,f.piece,Za(i),{abortSignal:o}),s||(l=t.abortSignal)!=null&&l.aborted))break;await this.samplingAccept([f.token]),await this.decode([f.token],{})}return Za(i)}createCompletionGenerator(e,t){return new Promise((r,a)=>{const i=bm(s=>{this.createCompletionImpl(e,{...t,onNewToken:(o,l,u)=>{s({token:o,piece:l,currentText:u},!1)}}).catch(a).then(()=>{s(void 0,!0)})});r(i())})}async samplingInit(e,t=[]){this.checkModelLoaded(),this.samplingConfig=e;const r=e.logit_bias??[],a=r.map(o=>o.token),i=r.map(o=>o.bias);if(!(await this.proxy.wllamaAction("sampling_init",{_name:"sint_req",...e,logit_bias_toks:a,logit_bias_vals:i,tokens:t})).success)throw new O("Failed to initialize sampling")}async getVocab(){return this.checkModelLoaded(),(await this.proxy.wllamaAction("get_vocab",{_name:"gvoc_req"})).vocab}async lookupToken(e){this.checkModelLoaded();const t=await this.proxy.wllamaAction("lookup_token",{_name:"lkup_req",piece:e});return t.success?t.token:-1}async tokenize(e,t=!0){return this.checkModelLoaded(),(await this.proxy.wllamaAction("tokenize",{_name:"tokn_req",text:e,special:!!t})).tokens}async detokenize(e,t=!1){this.checkModelLoaded();const r=await this.proxy.wllamaAction("detokenize",{_name:"dtkn_req",tokens:e});return t?Za(r.buffer):r.buffer}async decode(e,t){var i;if(this.checkModelLoaded(),this.useEmbeddings)throw new O("embeddings is enabled. Use wllama.setOptions({ embeddings: false }) to disable it.");if(e.length===0)return{nPast:this.nCachedTokens};if(this.nCachedTokens+e.length>this.loadedContextInfo.n_ctx)throw new O("Running out of context cache. Please increase n_ctx when loading the model","kv_cache_full");const r=this.breakTokensIntoBatches(e,this.loadedContextInfo.n_batch);let a;for(let s=0;s<r.length;s++){if((i=t==null?void 0:t.abortSignal)!=null&&i.aborted)throw new il;const o=r.length>1&&s<r.length-1;if(a=await this.proxy.wllamaAction("decode",{_name:"deco_req",tokens:r[s],skip_logits:t.skipLogits||o}),a.error)throw new O(a.error);if(!a.success)throw new O("Cannot encode, unknown error")}return this.nCachedTokens=a.n_past,{nPast:a.n_past}}async encode(e,t){var i;if(this.checkModelLoaded(),!this.hasEncoder)throw new O("This model does not use encoder-decoder architecture.","inference_error");if(this.useEmbeddings)throw new O("embeddings is enabled. Use wllama.setOptions({ embeddings: false }) to disable it.","inference_error");if(e.length===0)return{nPast:this.nCachedTokens};if(this.nCachedTokens+e.length>this.loadedContextInfo.n_ctx)throw new O("Running out of context cache. Please increase n_ctx when loading the model","kv_cache_full");const r=this.breakTokensIntoBatches(e,this.loadedContextInfo.n_batch);let a;for(let s=0;s<r.length;s++){if((i=t==null?void 0:t.abortSignal)!=null&&i.aborted)throw new il;if(a=await this.proxy.wllamaAction("encode",{_name:"enco_req",tokens:r[s]}),a.error)throw new O(a.error);if(!a.success)throw new O("Cannot encode, unknown error")}return this.nCachedTokens=a.n_past,{nPast:a.n_past}}breakTokensIntoBatches(e,t){const r=[];for(let a=0;a<e.length;a+=t)r.push(e.slice(a,a+t));return r}async samplingSample(){this.checkModelLoaded();const e=await this.proxy.wllamaAction("sampling_sample",{_name:"ssam_req"});return{piece:e.piece,token:e.token}}async samplingAccept(e){if(this.checkModelLoaded(),!(await this.proxy.wllamaAction("sampling_accept",{_name:"sacc_req",tokens:e})).success)throw new O("samplingAccept unknown error")}async getLogits(e=40){this.checkModelLoaded();const t=await this.proxy.wllamaAction("get_logits",{_name:"glog_req",top_k:e}),r=[];for(let a=0;a<t.tokens.length;a++)r.push({token:t.tokens[a],p:t.probs[a]});return r}async embeddings(e){if(this.checkModelLoaded(),!this.useEmbeddings)throw new O("embeddings is disabled. Use wllama.setOptions({ embeddings: true }) to enable it.","inference_error");if(this.nCachedTokens>0&&this.logger().warn("Embeddings: KV cache is not empty, this may produce incorrect results"),this.nCachedTokens+e.length>this.loadedContextInfo.n_ctx)throw new O("Running out of context cache. Please increase n_ctx when loading the model","kv_cache_full");if(e.length>this.loadedContextInfo.n_batch)throw new O("Embedding tokens does not fit into batch. Please increase n_batch when loading the model","inference_error");if(e.length>this.loadedContextInfo.n_ubatch)throw new O("Embedding tokens does not fit into physical batch. Please increase n_ubatch when loading the model","inference_error");const t=await this.proxy.wllamaAction("embeddings",{_name:"gemb_req",tokens:e});if(t.success)return t.embeddings;throw new O("embeddings unknown error")}async kvRemove(e,t){if(this.checkModelLoaded(),t===0)return;if(!(await this.proxy.wllamaAction("kv_remove",{_name:"kvcr_req",n_keep:e,n_discard:t})).success)throw new O("kvRemove unknown error");t<0?this.nCachedTokens=e:this.nCachedTokens-=t}async kvClear(){if(this.checkModelLoaded(),!(await this.proxy.wllamaAction("kv_clear",{_name:"kvcc_req"})).success)throw new O("kvClear unknown error");this.nCachedTokens=0}async formatChat(e,t,r){this.checkModelLoaded();const a=e.map(o=>o.role),i=e.map(o=>o.content),s=await this.proxy.wllamaAction("chat_format",{_name:"cfmt_req",roles:a,contents:i,tmpl:r,add_ass:t});if(!s.success)throw new O("formatChat unknown error");return s.formatted_chat}async setOptions(e){this.checkModelLoaded(),await this.proxy.wllamaAction("set_options",{_name:"opti_req",...e}),this.useEmbeddings=e.embeddings}async exit(){var e;await((e=this.proxy)==null?void 0:e.wllamaExit()),this.proxy=null}async _getDebugInfo(){return this.checkModelLoaded(),await this.proxy.wllamaDebug()}async getPerfContext(){return this.checkModelLoaded(),await this.proxy.wllamaAction("perf_context",{_name:"pctx_req"})}async resetPerfContext(){return this.checkModelLoaded(),await this.proxy.wllamaAction("perf_reset",{_name:"prst_req"})}async _testBenchmark(e,t){return this.checkModelLoaded(),await this.proxy.wllamaAction("test_benchmark",{_name:"tben_req",type:e,n_samples:t})}async _testPerplexity(e){return this.checkModelLoaded(),await this.proxy.wllamaAction("test_perplexity",{_name:"tper_req",tokens:e})}async getCachedTokens(){return this.checkModelLoaded(),(await this.proxy.wllamaAction("current_status",{_name:"stat_req"})).tokens}async computeNonCachedTokens(e){const t=await this.getCachedTokens();let r=0;for(;r<Math.min(t.length,e.length)&&t[r]===e[r];r++);this.logger().debug(`Cache nKeep=${r}`);try{return await this.kvRemove(r,-1),e.slice(r,e.length)}catch{return this.logger().warn("Failed to rollback KV cache, clearing it instead"),await this.kvClear(),e}}}const Lm=""+new URL("wllama-CxFd945B.wasm",import.meta.url).href,Dm=""+new URL("wllama-Dvs3UmHt.wasm",import.meta.url).href,Hm={"asyncify/single-thread/wllama.wasm":Lm,"asyncify/multi-thread/wllama.wasm":Dm},sl=[{label:"Qwen3 0.6B — fastest (~640MB)",url:"https://huggingface.co/unsloth/Qwen3-0.6B-GGUF/resolve/main/Qwen3-0.6B-Q8_0.gguf",size:639447744},{label:"Qwen2.5 0.5B — fast (~676MB)",url:"https://huggingface.co/Qwen/Qwen2.5-0.5B-Instruct-GGUF/resolve/main/qwen2.5-0.5b-instruct-q8_0.gguf",size:675710816},{label:"Qwen3 1.7B — balanced (~1.1GB)",url:"https://huggingface.co/unsloth/Qwen3-1.7B-GGUF/resolve/main/Qwen3-1.7B-Q4_K_M.gguf",size:1107409472},{label:"Llama 3.2 1B — (~808MB)",url:"https://huggingface.co/hugging-quants/Llama-3.2-1B-Instruct-Q4_K_M-GGUF/resolve/main/llama-3.2-1b-instruct-q4_k_m.gguf",size:807690656},{label:"Gemma 3 1B — (~1.0GB)",url:"https://huggingface.co/bartowski/gemma-3-1b-it-GGUF/resolve/main/gemma-3-1b-it-Q8_0.gguf",size:1149239296},{label:"SmolLM2 1.7B — (~1.1GB)",url:"https://huggingface.co/HuggingFaceTB/SmolLM2-1.7B-Instruct-GGUF/resolve/main/SmolLM2-1.7B-Instruct-Q4_K_M.gguf",size:1181116006},{label:"Qwen2.5 1.5B — (~1.6GB)",url:"https://huggingface.co/Qwen/Qwen2.5-1.5B-Instruct-GGUF/resolve/main/qwen2.5-1.5b-instruct-q8_0.gguf",size:1771674624},{label:"Llama 3.2 3B — (~1.9GB)",url:"https://huggingface.co/hugging-quants/Llama-3.2-3B-Instruct-Q4_K_M-GGUF/resolve/main/llama-3.2-3b-instruct-q4_k_m.gguf",size:2019377152}],Wm=`You are a creative web coding agent. The user describes what they want rendered in a browser preview.

Respond ONLY with a JSON object, no markdown, no explanation:
{"html":"...","css":"..."}

- html: only elements inside <body>. No html/head/body tags. No scripts. No external libraries.
- css: all styles, including @keyframes animations.
- When modifying, output BOTH fields with the full updated code.
- Pure HTML and CSS only. No JavaScript whatsoever.

Use CSS animations for everything: spinning shapes, color effects, gradients, starfields, particles.

Example — spinning 3D cube:
html: <div class="scene"><div class="cube"><div class="face f"></div><div class="face b"></div><div class="face l"></div><div class="face r"></div><div class="face t"></div><div class="face bt"></div></div></div>
css: body{margin:0;background:#000;display:flex;align-items:center;justify-content:center;height:100vh;} .scene{perspective:400px;} .cube{width:100px;height:100px;position:relative;transform-style:preserve-3d;animation:spin 4s linear infinite;} @keyframes spin{to{transform:rotateX(360deg) rotateY(360deg);}} .face{position:absolute;width:100px;height:100px;border:2px solid #0ff;background:rgba(0,255,255,0.1);} .f{transform:translateZ(50px);} .b{transform:rotateY(180deg) translateZ(50px);} .l{transform:rotateY(-90deg) translateZ(50px);} .r{transform:rotateY(90deg) translateZ(50px);} .t{transform:rotateX(90deg) translateZ(50px);} .bt{transform:rotateX(-90deg) translateZ(50px);}

Example — starfield using box-shadow:
html: <div class="stars"></div>
css: body{margin:0;background:#000;height:100vh;overflow:hidden;} .stars{position:fixed;top:0;left:0;width:2px;height:2px;background:transparent;box-shadow:100px 200px #fff,300px 50px #fff,500px 350px #fff,150px 450px #fff,700px 100px #fff,250px 300px #fff,800px 500px #fff,50px 550px #fff,600px 250px #fff,400px 150px #fff,900px 400px #fff,350px 600px #fff,750px 350px #fff,200px 500px #fff,650px 450px #fff,450px 50px #fff,550px 600px #fff,120px 350px #fff,820px 200px #fff,680px 550px #fff;animation:move 20s linear infinite;} @keyframes move{from{transform:translateY(0)}to{transform:translateY(100vh)}}

ALWAYS produce visible, colorful output.`;function Vm(n){return(n/1024/1024).toFixed(0)+" MB"}function zm({models:n,selectedIdx:e,onSelectIdx:t,onLoad:r,isLoading:a,progress:i}){return b.jsxs("div",{className:"flex flex-col items-center justify-center h-full gap-6 p-8",children:[b.jsxs("div",{className:"text-center",children:[b.jsx("h2",{className:"text-xl font-bold mb-1",children:"Load a model to start"}),b.jsx("p",{className:"text-sm text-base-content/60",children:"Model runs entirely in your browser — no server, no data sent."})]}),b.jsx("div",{className:"flex flex-col gap-2 w-full max-w-sm",children:n.map((s,o)=>b.jsxs("label",{className:`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${e===o?"border-primary bg-primary/10":"border-base-300 hover:border-base-content/30"}`,children:[b.jsx("input",{type:"radio",className:"radio radio-primary radio-sm mt-0.5",checked:e===o,onChange:()=>t(o)}),b.jsxs("div",{children:[b.jsx("div",{className:"font-medium text-sm",children:s.label.split("—")[0].trim()}),b.jsx("div",{className:"text-xs text-base-content/50",children:Vm(s.size)})]})]},s.url))}),a?b.jsxs("div",{className:"w-full max-w-sm",children:[b.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[b.jsx("span",{children:"Downloading…"}),b.jsxs("span",{children:[Math.round(i*100),"%"]})]}),b.jsx("progress",{className:"progress progress-primary w-full",value:i,max:1})]}):b.jsx("button",{className:"btn btn-primary w-full max-w-sm",onClick:r,children:"Load model"})]})}function Bm({msg:n}){return n.status==="loading"?b.jsx("div",{className:"chat chat-start",children:b.jsxs("div",{className:"chat-bubble chat-bubble-neutral flex items-center gap-2 text-sm",children:[b.jsx("span",{className:"loading loading-dots loading-xs"}),b.jsx("span",{className:"text-base-content/60",children:"Generating code…"})]})}):n.status==="error"?b.jsx("div",{className:"chat chat-start",children:b.jsxs("div",{className:"chat-bubble chat-bubble-error text-sm",children:[b.jsx("div",{children:"✗ Could not parse output"}),n.raw&&b.jsxs("details",{className:"mt-1",children:[b.jsx("summary",{className:"cursor-pointer text-xs opacity-70",children:"show raw"}),b.jsx("pre",{className:"mt-1 text-xs whitespace-pre-wrap break-all max-h-40 overflow-y-auto opacity-80",children:n.raw})]})]})}):b.jsx("div",{className:"chat chat-start",children:b.jsx("div",{className:"chat-bubble chat-bubble-success text-sm",children:"✓ Code updated"})})}function Gm({messages:n,onSend:e,isGenerating:t}){const[r,a]=J.useState(""),i=J.useRef(null);J.useEffect(()=>{var o;(o=i.current)==null||o.scrollIntoView({behavior:"smooth"})},[n]);const s=()=>{const o=r.trim();!o||t||(a(""),e(o))};return b.jsxs("div",{className:"flex flex-col h-full overflow-hidden",children:[b.jsxs("div",{className:"flex-1 overflow-y-auto p-4 flex flex-col gap-1",children:[n.length===0&&b.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center text-base-content/40 text-sm gap-2",children:[b.jsx("span",{className:"text-3xl",children:"💬"}),b.jsx("p",{children:"Describe something to render."}),b.jsx("p",{className:"text-xs",children:'Try: "a spinning rainbow cube" or "starfield animation"'})]}),n.map((o,l)=>o.role==="user"?b.jsx("div",{className:"chat chat-end",children:b.jsx("div",{className:"chat-bubble chat-bubble-primary text-sm",children:o.content})},l):b.jsx(Bm,{msg:o},l)),b.jsx("div",{ref:i})]}),b.jsxs("div",{className:"border-t border-base-300 p-3 flex gap-2",children:[b.jsx("textarea",{className:"textarea textarea-bordered flex-1 resize-none text-sm min-h-[42px] max-h-32 leading-snug",placeholder:"Describe what to render…",rows:1,value:r,onChange:o=>a(o.target.value),onKeyDown:o=>{o.key==="Enter"&&!o.shiftKey&&(o.preventDefault(),s())},disabled:t}),b.jsx("button",{className:"btn btn-primary btn-sm self-end",onClick:s,disabled:t||!r.trim(),children:t?b.jsx("span",{className:"loading loading-spinner loading-xs"}):"▶"})]})]})}function qm(n){return`<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body { width: 100vw; height: 100vh; overflow: hidden; background: #000; }
${n.css}
</style>
</head>
<body>
${n.html}
</body>
</html>`}function Jm({code:n}){const[e,t]=J.useState(0),r=!n.html&&!n.css,a=qm(n);return b.jsx("div",{className:"flex-1 overflow-hidden relative bg-black min-h-0",children:r?b.jsx("div",{className:"flex items-center justify-center h-full text-base-content/20 text-sm select-none",children:"preview will appear here"}):b.jsxs(b.Fragment,{children:[b.jsx("iframe",{className:"w-full h-full border-0",srcDoc:a,title:"preview"},a+e),b.jsx("button",{className:"absolute top-2 right-2 btn btn-xs btn-ghost opacity-40 hover:opacity-100",onClick:()=>t(i=>i+1),title:"Reload preview",children:"↺"})]})})}function $m({code:n}){const[e,t]=J.useState("html"),r=["html","css"],a=n[e];return b.jsxs("div",{className:"flex flex-col border-t border-base-300 h-[38%] min-h-0",children:[b.jsx("div",{className:"flex shrink-0 border-b border-base-300",children:r.map(i=>b.jsx("button",{className:`px-4 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors ${e===i?"border-b-2 border-primary text-primary":"text-base-content/50 hover:text-base-content/80"}`,onClick:()=>t(i),children:i},i))}),b.jsx("div",{className:"flex-1 overflow-auto bg-base-200",children:b.jsx("pre",{className:"p-3 text-xs font-mono text-base-content/80 leading-relaxed",children:a||b.jsx("span",{className:"text-base-content/30 italic",children:"no code yet"})})})]})}const ol=new Fe,br=new Nm(Hm,{preferWebGPU:!0});function ll(n,e){const t=n.indexOf(`"${e}"`);if(t===-1)return"";const r=n.indexOf(":",t);if(r===-1)return"";const a=n.slice(r+1).trimStart();if(!a.startsWith('"'))return"";let i="",s=1;for(;s<a.length;)if(a[s]==="\\"&&s+1<a.length){const o=a[s+1];o==="n"?i+=`
`:o==='"'?i+='"':o==="\\"?i+="\\":o==="t"?i+="	":i+=o,s+=2}else{if(a[s]==='"')break;i+=a[s],s++}return i}function Ym(n){const e=n.replace(/```[a-z]*\n?/g,"").trim(),t=l=>{try{const u=JSON.parse(l);if(u&&typeof u=="object"&&("html"in u||"css"in u))return{html:String(u.html??""),css:String(u.css??"")}}catch{}return null},r=t(e);if(r)return r;const a=e.match(/\{[\s\S]*\}/);if(a){const l=t(a[0]);if(l)return l}const i=a?a[0]:e,s=ll(i,"html"),o=ll(i,"css");return s||o?{html:s,css:o}:null}function Qm(){const[n,e]=J.useState(!1),[t,r]=J.useState(0),[a,i]=J.useState(!1),[s,o]=J.useState(0),[l,u]=J.useState(""),[f,g]=J.useState(null),[m,h]=J.useState({html:"",css:""}),[v,y]=J.useState([]),I=J.useRef([{role:"system",content:Wm}]),[c,d]=J.useState(!1),p=J.useCallback(async()=>{const P=sl[s];i(!0),r(0);try{let S=(await ol.getModels()).find(F=>F.url===P.url);S||(S=await ol.downloadModel(P.url,{progressCallback({loaded:F,total:j}){r(F/j)}})),await br.loadModel(S,{n_ctx:4096}),u(P.label.split("—")[0].trim()),g({webgpu:br.usingWebGPU(),multithread:br.isMultithread()}),e(!0)}catch(E){alert(`Failed to load model: ${E.message??"unknown error"}`)}i(!1)},[s]),_=J.useCallback(async P=>{if(!(c||!n)){y(E=>[...E,{role:"user",content:P},{role:"assistant",status:"loading"}]),I.current.push({role:"user",content:P}),d(!0);try{const E=await br.createChatCompletion(I.current,{nPredict:2048,sampling:{temp:.1}});I.current.push({role:"assistant",content:E});const S=Ym(E);y(F=>{const j=[...F];return j[j.length-1]={role:"assistant",status:S?"done":"error",raw:S?void 0:E},j}),S&&h(S)}catch{y(E=>{const S=[...E];return S[S.length-1]={role:"assistant",status:"error"},S})}d(!1)}},[c,n]);return b.jsxs("div",{className:"flex flex-col h-screen w-screen bg-base-100 text-base-content overflow-hidden",children:[b.jsxs("header",{className:"flex items-center justify-between px-4 py-2 border-b border-base-300 shrink-0",children:[b.jsx("span",{className:"font-mono font-bold tracking-tight text-lg",children:"🎨 canvas agent"}),n&&f&&b.jsxs("div",{className:"flex items-center gap-2",children:[b.jsx("span",{className:"badge badge-success badge-sm",children:l}),b.jsx("span",{className:`badge badge-sm ${f.webgpu?"badge-warning":"badge-neutral"}`,children:f.webgpu?"⚡ WebGPU":f.multithread?"🧵 MT":"🐢 WASM"})]})]}),b.jsxs("div",{className:"flex flex-1 overflow-hidden",children:[b.jsxs("div",{className:"flex flex-col w-[60%] border-r border-base-300 overflow-hidden",children:[b.jsx(Jm,{code:m}),b.jsx($m,{code:m})]}),b.jsx("div",{className:"flex flex-col w-[40%] overflow-hidden",children:n?b.jsx(Gm,{messages:v,onSend:_,isGenerating:c}):b.jsx(zm,{models:sl,selectedIdx:s,onSelectIdx:o,onLoad:p,isLoading:a,progress:t})})]})]})}Pd(document.getElementById("root")).render(b.jsx(J.StrictMode,{children:b.jsx(Qm,{})}));
