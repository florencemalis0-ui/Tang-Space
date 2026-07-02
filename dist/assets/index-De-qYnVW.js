const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-C7wvg7EA.js","assets/index-CMVCzXMa.js","assets/index-Br7Y7uv9.css","assets/three-Byz_-hyj.js","assets/index-ApL7f1dp.css","assets/index-Bzn_nH5J.js","assets/index-hPjTUCe-.css","assets/index-lzDYzwFO.js","assets/index-Bb7emiUE.css","assets/index-kz0mHQc2.js","assets/index-CmgFoZhO.css","assets/index-B0C3hdD4.js","assets/index-DmCStEC_.css","assets/index-C9gy1Zjd.js","assets/index-vQKTsFm2.css"])))=>i.map(i=>d[i]);
var wp=Object.defineProperty;var Cp=(s,i,a)=>i in s?wp(s,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[i]=a;var Pe=(s,i,a)=>Cp(s,typeof i!="symbol"?i+"":i,a);import{S as Zc,B as Sp,M as Mc,a as Ep,P as xp,b as Ut,I as kp,O as _p,c as Rp,d as Pp,e as ws,F as Tc,f as Yn,U as co,V as lt,W as oo,H as io,N as Mp,T as Tp,C as Ct,g as Kn,A as Cs,h as Ip,R as Np,i as Lp,j as Dp,L as Fp,k as Ap,l as Bp,m as ef,n as zp,o as Op,p as Up,q as jp,r as Vp,s as Hp,t as $p,u as Wp,v as Qp,w as Gp,D as Kp,x as Ic,y as Nc,z as Lc}from"./three-Byz_-hyj.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const d of f)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function a(f){const d={};return f.integrity&&(d.integrity=f.integrity),f.referrerPolicy&&(d.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?d.credentials="include":f.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function c(f){if(f.ep)return;f.ep=!0;const d=a(f);fetch(f.href,d)}})();var fs={exports:{}},jr={},ds={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dc;function Yp(){if(Dc)return re;Dc=1;var s=Symbol.for("react.element"),i=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),R=Symbol.iterator;function P(w){return w===null||typeof w!="object"?null:(w=R&&w[R]||w["@@iterator"],typeof w=="function"?w:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,A={};function D(w,T,ne){this.props=w,this.context=T,this.refs=A,this.updater=ne||O}D.prototype.isReactComponent={},D.prototype.setState=function(w,T){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,T,"setState")},D.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function z(){}z.prototype=D.prototype;function J(w,T,ne){this.props=w,this.context=T,this.refs=A,this.updater=ne||O}var Z=J.prototype=new z;Z.constructor=J,V(Z,D.prototype),Z.isPureReactComponent=!0;var F=Array.isArray,G=Object.prototype.hasOwnProperty,ee={current:null},ie={key:!0,ref:!0,__self:!0,__source:!0};function te(w,T,ne){var le,se={},ae=null,de=null;if(T!=null)for(le in T.ref!==void 0&&(de=T.ref),T.key!==void 0&&(ae=""+T.key),T)G.call(T,le)&&!ie.hasOwnProperty(le)&&(se[le]=T[le]);var ce=arguments.length-2;if(ce===1)se.children=ne;else if(1<ce){for(var ve=Array(ce),Ze=0;Ze<ce;Ze++)ve[Ze]=arguments[Ze+2];se.children=ve}if(w&&w.defaultProps)for(le in ce=w.defaultProps,ce)se[le]===void 0&&(se[le]=ce[le]);return{$$typeof:s,type:w,key:ae,ref:de,props:se,_owner:ee.current}}function $e(w,T){return{$$typeof:s,type:w.type,key:T,ref:w.ref,props:w.props,_owner:w._owner}}function Je(w){return typeof w=="object"&&w!==null&&w.$$typeof===s}function It(w){var T={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(ne){return T[ne]})}var it=/\/+/g;function Be(w,T){return typeof w=="object"&&w!==null&&w.key!=null?It(""+w.key):T.toString(36)}function We(w,T,ne,le,se){var ae=typeof w;(ae==="undefined"||ae==="boolean")&&(w=null);var de=!1;if(w===null)de=!0;else switch(ae){case"string":case"number":de=!0;break;case"object":switch(w.$$typeof){case s:case i:de=!0}}if(de)return de=w,se=se(de),w=le===""?"."+Be(de,0):le,F(se)?(ne="",w!=null&&(ne=w.replace(it,"$&/")+"/"),We(se,T,ne,"",function(Ze){return Ze})):se!=null&&(Je(se)&&(se=$e(se,ne+(!se.key||de&&de.key===se.key?"":(""+se.key).replace(it,"$&/")+"/")+w)),T.push(se)),1;if(de=0,le=le===""?".":le+":",F(w))for(var ce=0;ce<w.length;ce++){ae=w[ce];var ve=le+Be(ae,ce);de+=We(ae,T,ne,ve,se)}else if(ve=P(w),typeof ve=="function")for(w=ve.call(w),ce=0;!(ae=w.next()).done;)ae=ae.value,ve=le+Be(ae,ce++),de+=We(ae,T,ne,ve,se);else if(ae==="object")throw T=String(w),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.");return de}function Me(w,T,ne){if(w==null)return w;var le=[],se=0;return We(w,le,"","",function(ae){return T.call(ne,ae,se++)}),le}function Qe(w){if(w._status===-1){var T=w._result;T=T(),T.then(function(ne){(w._status===0||w._status===-1)&&(w._status=1,w._result=ne)},function(ne){(w._status===0||w._status===-1)&&(w._status=2,w._result=ne)}),w._status===-1&&(w._status=0,w._result=T)}if(w._status===1)return w._result.default;throw w._result}var Se={current:null},B={transition:null},b={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:B,ReactCurrentOwner:ee};function H(){throw Error("act(...) is not supported in production builds of React.")}return re.Children={map:Me,forEach:function(w,T,ne){Me(w,function(){T.apply(this,arguments)},ne)},count:function(w){var T=0;return Me(w,function(){T++}),T},toArray:function(w){return Me(w,function(T){return T})||[]},only:function(w){if(!Je(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},re.Component=D,re.Fragment=a,re.Profiler=f,re.PureComponent=J,re.StrictMode=c,re.Suspense=y,re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b,re.act=H,re.cloneElement=function(w,T,ne){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var le=V({},w.props),se=w.key,ae=w.ref,de=w._owner;if(T!=null){if(T.ref!==void 0&&(ae=T.ref,de=ee.current),T.key!==void 0&&(se=""+T.key),w.type&&w.type.defaultProps)var ce=w.type.defaultProps;for(ve in T)G.call(T,ve)&&!ie.hasOwnProperty(ve)&&(le[ve]=T[ve]===void 0&&ce!==void 0?ce[ve]:T[ve])}var ve=arguments.length-2;if(ve===1)le.children=ne;else if(1<ve){ce=Array(ve);for(var Ze=0;Ze<ve;Ze++)ce[Ze]=arguments[Ze+2];le.children=ce}return{$$typeof:s,type:w.type,key:se,ref:ae,props:le,_owner:de}},re.createContext=function(w){return w={$$typeof:h,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:d,_context:w},w.Consumer=w},re.createElement=te,re.createFactory=function(w){var T=te.bind(null,w);return T.type=w,T},re.createRef=function(){return{current:null}},re.forwardRef=function(w){return{$$typeof:m,render:w}},re.isValidElement=Je,re.lazy=function(w){return{$$typeof:k,_payload:{_status:-1,_result:w},_init:Qe}},re.memo=function(w,T){return{$$typeof:E,type:w,compare:T===void 0?null:T}},re.startTransition=function(w){var T=B.transition;B.transition={};try{w()}finally{B.transition=T}},re.unstable_act=H,re.useCallback=function(w,T){return Se.current.useCallback(w,T)},re.useContext=function(w){return Se.current.useContext(w)},re.useDebugValue=function(){},re.useDeferredValue=function(w){return Se.current.useDeferredValue(w)},re.useEffect=function(w,T){return Se.current.useEffect(w,T)},re.useId=function(){return Se.current.useId()},re.useImperativeHandle=function(w,T,ne){return Se.current.useImperativeHandle(w,T,ne)},re.useInsertionEffect=function(w,T){return Se.current.useInsertionEffect(w,T)},re.useLayoutEffect=function(w,T){return Se.current.useLayoutEffect(w,T)},re.useMemo=function(w,T){return Se.current.useMemo(w,T)},re.useReducer=function(w,T,ne){return Se.current.useReducer(w,T,ne)},re.useRef=function(w){return Se.current.useRef(w)},re.useState=function(w){return Se.current.useState(w)},re.useSyncExternalStore=function(w,T,ne){return Se.current.useSyncExternalStore(w,T,ne)},re.useTransition=function(){return Se.current.useTransition()},re.version="18.3.1",re}var Fc;function xs(){return Fc||(Fc=1,ds.exports=Yp()),ds.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ac;function Xp(){if(Ac)return jr;Ac=1;var s=xs(),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,f=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function h(m,y,E){var k,R={},P=null,O=null;E!==void 0&&(P=""+E),y.key!==void 0&&(P=""+y.key),y.ref!==void 0&&(O=y.ref);for(k in y)c.call(y,k)&&!d.hasOwnProperty(k)&&(R[k]=y[k]);if(m&&m.defaultProps)for(k in y=m.defaultProps,y)R[k]===void 0&&(R[k]=y[k]);return{$$typeof:i,type:m,key:P,ref:O,props:R,_owner:f.current}}return jr.Fragment=a,jr.jsx=h,jr.jsxs=h,jr}var Bc;function bp(){return Bc||(Bc=1,fs.exports=Xp()),fs.exports}var K=bp(),no={},ps={exports:{}},qe={},hs={exports:{}},ms={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zc;function qp(){return zc||(zc=1,(function(s){function i(B,b){var H=B.length;B.push(b);e:for(;0<H;){var w=H-1>>>1,T=B[w];if(0<f(T,b))B[w]=b,B[H]=T,H=w;else break e}}function a(B){return B.length===0?null:B[0]}function c(B){if(B.length===0)return null;var b=B[0],H=B.pop();if(H!==b){B[0]=H;e:for(var w=0,T=B.length,ne=T>>>1;w<ne;){var le=2*(w+1)-1,se=B[le],ae=le+1,de=B[ae];if(0>f(se,H))ae<T&&0>f(de,se)?(B[w]=de,B[ae]=H,w=ae):(B[w]=se,B[le]=H,w=le);else if(ae<T&&0>f(de,H))B[w]=de,B[ae]=H,w=ae;else break e}}return b}function f(B,b){var H=B.sortIndex-b.sortIndex;return H!==0?H:B.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;s.unstable_now=function(){return d.now()}}else{var h=Date,m=h.now();s.unstable_now=function(){return h.now()-m}}var y=[],E=[],k=1,R=null,P=3,O=!1,V=!1,A=!1,D=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Z(B){for(var b=a(E);b!==null;){if(b.callback===null)c(E);else if(b.startTime<=B)c(E),b.sortIndex=b.expirationTime,i(y,b);else break;b=a(E)}}function F(B){if(A=!1,Z(B),!V)if(a(y)!==null)V=!0,Qe(G);else{var b=a(E);b!==null&&Se(F,b.startTime-B)}}function G(B,b){V=!1,A&&(A=!1,z(te),te=-1),O=!0;var H=P;try{for(Z(b),R=a(y);R!==null&&(!(R.expirationTime>b)||B&&!It());){var w=R.callback;if(typeof w=="function"){R.callback=null,P=R.priorityLevel;var T=w(R.expirationTime<=b);b=s.unstable_now(),typeof T=="function"?R.callback=T:R===a(y)&&c(y),Z(b)}else c(y);R=a(y)}if(R!==null)var ne=!0;else{var le=a(E);le!==null&&Se(F,le.startTime-b),ne=!1}return ne}finally{R=null,P=H,O=!1}}var ee=!1,ie=null,te=-1,$e=5,Je=-1;function It(){return!(s.unstable_now()-Je<$e)}function it(){if(ie!==null){var B=s.unstable_now();Je=B;var b=!0;try{b=ie(!0,B)}finally{b?Be():(ee=!1,ie=null)}}else ee=!1}var Be;if(typeof J=="function")Be=function(){J(it)};else if(typeof MessageChannel<"u"){var We=new MessageChannel,Me=We.port2;We.port1.onmessage=it,Be=function(){Me.postMessage(null)}}else Be=function(){D(it,0)};function Qe(B){ie=B,ee||(ee=!0,Be())}function Se(B,b){te=D(function(){B(s.unstable_now())},b)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_continueExecution=function(){V||O||(V=!0,Qe(G))},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$e=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return P},s.unstable_getFirstCallbackNode=function(){return a(y)},s.unstable_next=function(B){switch(P){case 1:case 2:case 3:var b=3;break;default:b=P}var H=P;P=b;try{return B()}finally{P=H}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(B,b){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var H=P;P=B;try{return b()}finally{P=H}},s.unstable_scheduleCallback=function(B,b,H){var w=s.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?w+H:w):H=w,B){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=H+T,B={id:k++,callback:b,priorityLevel:B,startTime:H,expirationTime:T,sortIndex:-1},H>w?(B.sortIndex=H,i(E,B),a(y)===null&&B===a(E)&&(A?(z(te),te=-1):A=!0,Se(F,H-w))):(B.sortIndex=T,i(y,B),V||O||(V=!0,Qe(G))),B},s.unstable_shouldYield=It,s.unstable_wrapCallback=function(B){var b=P;return function(){var H=P;P=b;try{return B.apply(this,arguments)}finally{P=H}}}})(ms)),ms}var Oc;function Jp(){return Oc||(Oc=1,hs.exports=qp()),hs.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uc;function Zp(){if(Uc)return qe;Uc=1;var s=xs(),i=Jp();function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,f={};function d(e,t){h(e,t),h(e+"Capture",t)}function h(e,t){for(f[e]=t,e=0;e<t.length;e++)c.add(t[e])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,E=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,k={},R={};function P(e){return y.call(R,e)?!0:y.call(k,e)?!1:E.test(e)?R[e]=!0:(k[e]=!0,!1)}function O(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function V(e,t,n,r){if(t===null||typeof t>"u"||O(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function A(e,t,n,r,l,o,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=u}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){D[e]=new A(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];D[t]=new A(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){D[e]=new A(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){D[e]=new A(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){D[e]=new A(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){D[e]=new A(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){D[e]=new A(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){D[e]=new A(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){D[e]=new A(e,5,!1,e.toLowerCase(),null,!1,!1)});var z=/[\-:]([a-z])/g;function J(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(z,J);D[t]=new A(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(z,J);D[t]=new A(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(z,J);D[t]=new A(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){D[e]=new A(e,1,!1,e.toLowerCase(),null,!1,!1)}),D.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){D[e]=new A(e,1,!1,e.toLowerCase(),null,!0,!0)});function Z(e,t,n,r){var l=D.hasOwnProperty(t)?D[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(V(t,n,l,r)&&(n=null),r||l===null?P(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var F=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),ee=Symbol.for("react.portal"),ie=Symbol.for("react.fragment"),te=Symbol.for("react.strict_mode"),$e=Symbol.for("react.profiler"),Je=Symbol.for("react.provider"),It=Symbol.for("react.context"),it=Symbol.for("react.forward_ref"),Be=Symbol.for("react.suspense"),We=Symbol.for("react.suspense_list"),Me=Symbol.for("react.memo"),Qe=Symbol.for("react.lazy"),Se=Symbol.for("react.offscreen"),B=Symbol.iterator;function b(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,w;function T(e){if(w===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);w=t&&t[1]||""}return`
`+w+e}var ne=!1;function le(e,t){if(!e||ne)return"";ne=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(_){var r=_}Reflect.construct(e,[],t)}else{try{t.call()}catch(_){r=_}e.call(t.prototype)}else{try{throw Error()}catch(_){r=_}e()}}catch(_){if(_&&r&&typeof _.stack=="string"){for(var l=_.stack.split(`
`),o=r.stack.split(`
`),u=l.length-1,p=o.length-1;1<=u&&0<=p&&l[u]!==o[p];)p--;for(;1<=u&&0<=p;u--,p--)if(l[u]!==o[p]){if(u!==1||p!==1)do if(u--,p--,0>p||l[u]!==o[p]){var v=`
`+l[u].replace(" at new "," at ");return e.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",e.displayName)),v}while(1<=u&&0<=p);break}}}finally{ne=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?T(e):""}function se(e){switch(e.tag){case 5:return T(e.type);case 16:return T("Lazy");case 13:return T("Suspense");case 19:return T("SuspenseList");case 0:case 2:case 15:return e=le(e.type,!1),e;case 11:return e=le(e.type.render,!1),e;case 1:return e=le(e.type,!0),e;default:return""}}function ae(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ie:return"Fragment";case ee:return"Portal";case $e:return"Profiler";case te:return"StrictMode";case Be:return"Suspense";case We:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case It:return(e.displayName||"Context")+".Consumer";case Je:return(e._context.displayName||"Context")+".Provider";case it:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Me:return t=e.displayName||null,t!==null?t:ae(e.type)||"Memo";case Qe:t=e._payload,e=e._init;try{return ae(e(t))}catch{}}return null}function de(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(t);case 8:return t===te?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ce(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ve(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ze(e){var t=ve(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(u){r=""+u,o.call(this,u)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(u){r=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gr(e){e._valueTracker||(e._valueTracker=Ze(e))}function Fs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ve(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Kr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function yo(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function As(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ce(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Bs(e,t){t=t.checked,t!=null&&Z(e,"checked",t,!1)}function wo(e,t){Bs(e,t);var n=ce(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Co(e,t.type,n):t.hasOwnProperty("defaultValue")&&Co(e,t.type,ce(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function zs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Co(e,t,n){(t!=="number"||Kr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var tr=Array.isArray;function Sn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ce(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function So(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(a(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Os(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(a(92));if(tr(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ce(n)}}function Us(e,t){var n=ce(t.value),r=ce(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function js(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Vs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Eo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Vs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Yr,Hs=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Yr=Yr||document.createElement("div"),Yr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function nr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var rr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xf=["Webkit","ms","Moz","O"];Object.keys(rr).forEach(function(e){xf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),rr[t]=rr[e]})});function $s(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||rr.hasOwnProperty(e)&&rr[e]?(""+t).trim():t+"px"}function Ws(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=$s(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var kf=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xo(e,t){if(t){if(kf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(a(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(a(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(t.style!=null&&typeof t.style!="object")throw Error(a(62))}}function ko(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _o=null;function Ro(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Po=null,En=null,xn=null;function Qs(e){if(e=_r(e)){if(typeof Po!="function")throw Error(a(280));var t=e.stateNode;t&&(t=gl(t),Po(e.stateNode,e.type,t))}}function Gs(e){En?xn?xn.push(e):xn=[e]:En=e}function Ks(){if(En){var e=En,t=xn;if(xn=En=null,Qs(e),t)for(e=0;e<t.length;e++)Qs(t[e])}}function Ys(e,t){return e(t)}function Xs(){}var Mo=!1;function bs(e,t,n){if(Mo)return e(t,n);Mo=!0;try{return Ys(e,t,n)}finally{Mo=!1,(En!==null||xn!==null)&&(Xs(),Ks())}}function lr(e,t){var n=e.stateNode;if(n===null)return null;var r=gl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(a(231,t,typeof n));return n}var To=!1;if(m)try{var or={};Object.defineProperty(or,"passive",{get:function(){To=!0}}),window.addEventListener("test",or,or),window.removeEventListener("test",or,or)}catch{To=!1}function _f(e,t,n,r,l,o,u,p,v){var _=Array.prototype.slice.call(arguments,3);try{t.apply(n,_)}catch(I){this.onError(I)}}var ir=!1,Xr=null,br=!1,Io=null,Rf={onError:function(e){ir=!0,Xr=e}};function Pf(e,t,n,r,l,o,u,p,v){ir=!1,Xr=null,_f.apply(Rf,arguments)}function Mf(e,t,n,r,l,o,u,p,v){if(Pf.apply(this,arguments),ir){if(ir){var _=Xr;ir=!1,Xr=null}else throw Error(a(198));br||(br=!0,Io=_)}}function an(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function qs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Js(e){if(an(e)!==e)throw Error(a(188))}function Tf(e){var t=e.alternate;if(!t){if(t=an(e),t===null)throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Js(l),e;if(o===r)return Js(l),t;o=o.sibling}throw Error(a(188))}if(n.return!==r.return)n=l,r=o;else{for(var u=!1,p=l.child;p;){if(p===n){u=!0,n=l,r=o;break}if(p===r){u=!0,r=l,n=o;break}p=p.sibling}if(!u){for(p=o.child;p;){if(p===n){u=!0,n=o,r=l;break}if(p===r){u=!0,r=o,n=l;break}p=p.sibling}if(!u)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(n.tag!==3)throw Error(a(188));return n.stateNode.current===n?e:t}function Zs(e){return e=Tf(e),e!==null?ea(e):null}function ea(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ea(e);if(t!==null)return t;e=e.sibling}return null}var ta=i.unstable_scheduleCallback,na=i.unstable_cancelCallback,If=i.unstable_shouldYield,Nf=i.unstable_requestPaint,xe=i.unstable_now,Lf=i.unstable_getCurrentPriorityLevel,No=i.unstable_ImmediatePriority,ra=i.unstable_UserBlockingPriority,qr=i.unstable_NormalPriority,Df=i.unstable_LowPriority,la=i.unstable_IdlePriority,Jr=null,_t=null;function Ff(e){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(Jr,e,void 0,(e.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:zf,Af=Math.log,Bf=Math.LN2;function zf(e){return e>>>=0,e===0?32:31-(Af(e)/Bf|0)|0}var Zr=64,el=4194304;function sr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function tl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,u=n&268435455;if(u!==0){var p=u&~l;p!==0?r=sr(p):(o&=u,o!==0&&(r=sr(o)))}else u=n&~l,u!==0?r=sr(u):o!==0&&(r=sr(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&l)===0&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pt(t),l=1<<n,r|=e[n],t&=~l;return r}function Of(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Uf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var u=31-pt(o),p=1<<u,v=l[u];v===-1?((p&n)===0||(p&r)!==0)&&(l[u]=Of(p,t)):v<=t&&(e.expiredLanes|=p),o&=~p}}function Lo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function oa(){var e=Zr;return Zr<<=1,(Zr&4194240)===0&&(Zr=64),e}function Do(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ar(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pt(t),e[t]=n}function jf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-pt(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function Fo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var fe=0;function ia(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var sa,Ao,aa,ua,ca,Bo=!1,nl=[],Vt=null,Ht=null,$t=null,ur=new Map,cr=new Map,Wt=[],Vf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fa(e,t){switch(e){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":Ht=null;break;case"mouseover":case"mouseout":$t=null;break;case"pointerover":case"pointerout":ur.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":cr.delete(t.pointerId)}}function fr(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=_r(t),t!==null&&Ao(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Hf(e,t,n,r,l){switch(t){case"focusin":return Vt=fr(Vt,e,t,n,r,l),!0;case"dragenter":return Ht=fr(Ht,e,t,n,r,l),!0;case"mouseover":return $t=fr($t,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return ur.set(o,fr(ur.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,cr.set(o,fr(cr.get(o)||null,e,t,n,r,l)),!0}return!1}function da(e){var t=un(e.target);if(t!==null){var n=an(t);if(n!==null){if(t=n.tag,t===13){if(t=qs(n),t!==null){e.blockedOn=t,ca(e.priority,function(){aa(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Oo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);_o=r,n.target.dispatchEvent(r),_o=null}else return t=_r(n),t!==null&&Ao(t),e.blockedOn=n,!1;t.shift()}return!0}function pa(e,t,n){rl(e)&&n.delete(t)}function $f(){Bo=!1,Vt!==null&&rl(Vt)&&(Vt=null),Ht!==null&&rl(Ht)&&(Ht=null),$t!==null&&rl($t)&&($t=null),ur.forEach(pa),cr.forEach(pa)}function dr(e,t){e.blockedOn===t&&(e.blockedOn=null,Bo||(Bo=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,$f)))}function pr(e){function t(l){return dr(l,e)}if(0<nl.length){dr(nl[0],e);for(var n=1;n<nl.length;n++){var r=nl[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Vt!==null&&dr(Vt,e),Ht!==null&&dr(Ht,e),$t!==null&&dr($t,e),ur.forEach(t),cr.forEach(t),n=0;n<Wt.length;n++)r=Wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Wt.length&&(n=Wt[0],n.blockedOn===null);)da(n),n.blockedOn===null&&Wt.shift()}var kn=F.ReactCurrentBatchConfig,ll=!0;function Wf(e,t,n,r){var l=fe,o=kn.transition;kn.transition=null;try{fe=1,zo(e,t,n,r)}finally{fe=l,kn.transition=o}}function Qf(e,t,n,r){var l=fe,o=kn.transition;kn.transition=null;try{fe=4,zo(e,t,n,r)}finally{fe=l,kn.transition=o}}function zo(e,t,n,r){if(ll){var l=Oo(e,t,n,r);if(l===null)ti(e,t,r,ol,n),fa(e,r);else if(Hf(l,e,t,n,r))r.stopPropagation();else if(fa(e,r),t&4&&-1<Vf.indexOf(e)){for(;l!==null;){var o=_r(l);if(o!==null&&sa(o),o=Oo(e,t,n,r),o===null&&ti(e,t,r,ol,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else ti(e,t,r,null,n)}}var ol=null;function Oo(e,t,n,r){if(ol=null,e=Ro(r),e=un(e),e!==null)if(t=an(e),t===null)e=null;else if(n=t.tag,n===13){if(e=qs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ol=e,null}function ha(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lf()){case No:return 1;case ra:return 4;case qr:case Df:return 16;case la:return 536870912;default:return 16}default:return 16}}var Qt=null,Uo=null,il=null;function ma(){if(il)return il;var e,t=Uo,n=t.length,r,l="value"in Qt?Qt.value:Qt.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var u=n-e;for(r=1;r<=u&&t[n-r]===l[o-r];r++);return il=l.slice(e,1<r?1-r:void 0)}function sl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function al(){return!0}function va(){return!1}function et(e){function t(n,r,l,o,u){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=u,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(o):o[p]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?al:va,this.isPropagationStopped=va,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),t}var _n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jo=et(_n),hr=H({},_n,{view:0,detail:0}),Gf=et(hr),Vo,Ho,mr,ul=H({},hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mr&&(mr&&e.type==="mousemove"?(Vo=e.screenX-mr.screenX,Ho=e.screenY-mr.screenY):Ho=Vo=0,mr=e),Vo)},movementY:function(e){return"movementY"in e?e.movementY:Ho}}),ga=et(ul),Kf=H({},ul,{dataTransfer:0}),Yf=et(Kf),Xf=H({},hr,{relatedTarget:0}),$o=et(Xf),bf=H({},_n,{animationName:0,elapsedTime:0,pseudoElement:0}),qf=et(bf),Jf=H({},_n,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zf=et(Jf),ed=H({},_n,{data:0}),ya=et(ed),td={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ld(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rd[e])?!!t[e]:!1}function Wo(){return ld}var od=H({},hr,{key:function(e){if(e.key){var t=td[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=sl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wo,charCode:function(e){return e.type==="keypress"?sl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?sl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),id=et(od),sd=H({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wa=et(sd),ad=H({},hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wo}),ud=et(ad),cd=H({},_n,{propertyName:0,elapsedTime:0,pseudoElement:0}),fd=et(cd),dd=H({},ul,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pd=et(dd),hd=[9,13,27,32],Qo=m&&"CompositionEvent"in window,vr=null;m&&"documentMode"in document&&(vr=document.documentMode);var md=m&&"TextEvent"in window&&!vr,Ca=m&&(!Qo||vr&&8<vr&&11>=vr),Sa=" ",Ea=!1;function xa(e,t){switch(e){case"keyup":return hd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ka(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rn=!1;function vd(e,t){switch(e){case"compositionend":return ka(t);case"keypress":return t.which!==32?null:(Ea=!0,Sa);case"textInput":return e=t.data,e===Sa&&Ea?null:e;default:return null}}function gd(e,t){if(Rn)return e==="compositionend"||!Qo&&xa(e,t)?(e=ma(),il=Uo=Qt=null,Rn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ca&&t.locale!=="ko"?null:t.data;default:return null}}var yd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _a(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!yd[e.type]:t==="textarea"}function Ra(e,t,n,r){Gs(r),t=hl(t,"onChange"),0<t.length&&(n=new jo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var gr=null,yr=null;function wd(e){Wa(e,0)}function cl(e){var t=Nn(e);if(Fs(t))return e}function Cd(e,t){if(e==="change")return t}var Pa=!1;if(m){var Go;if(m){var Ko="oninput"in document;if(!Ko){var Ma=document.createElement("div");Ma.setAttribute("oninput","return;"),Ko=typeof Ma.oninput=="function"}Go=Ko}else Go=!1;Pa=Go&&(!document.documentMode||9<document.documentMode)}function Ta(){gr&&(gr.detachEvent("onpropertychange",Ia),yr=gr=null)}function Ia(e){if(e.propertyName==="value"&&cl(yr)){var t=[];Ra(t,yr,e,Ro(e)),bs(wd,t)}}function Sd(e,t,n){e==="focusin"?(Ta(),gr=t,yr=n,gr.attachEvent("onpropertychange",Ia)):e==="focusout"&&Ta()}function Ed(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return cl(yr)}function xd(e,t){if(e==="click")return cl(t)}function kd(e,t){if(e==="input"||e==="change")return cl(t)}function _d(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:_d;function wr(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!y.call(t,l)||!ht(e[l],t[l]))return!1}return!0}function Na(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function La(e,t){var n=Na(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Na(n)}}function Da(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Da(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fa(){for(var e=window,t=Kr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Kr(e.document)}return t}function Yo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Rd(e){var t=Fa(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Da(n.ownerDocument.documentElement,n)){if(r!==null&&Yo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=La(n,o);var u=La(n,r);l&&u&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Pd=m&&"documentMode"in document&&11>=document.documentMode,Pn=null,Xo=null,Cr=null,bo=!1;function Aa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bo||Pn==null||Pn!==Kr(r)||(r=Pn,"selectionStart"in r&&Yo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Cr&&wr(Cr,r)||(Cr=r,r=hl(Xo,"onSelect"),0<r.length&&(t=new jo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Pn)))}function fl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Mn={animationend:fl("Animation","AnimationEnd"),animationiteration:fl("Animation","AnimationIteration"),animationstart:fl("Animation","AnimationStart"),transitionend:fl("Transition","TransitionEnd")},qo={},Ba={};m&&(Ba=document.createElement("div").style,"AnimationEvent"in window||(delete Mn.animationend.animation,delete Mn.animationiteration.animation,delete Mn.animationstart.animation),"TransitionEvent"in window||delete Mn.transitionend.transition);function dl(e){if(qo[e])return qo[e];if(!Mn[e])return e;var t=Mn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ba)return qo[e]=t[n];return e}var za=dl("animationend"),Oa=dl("animationiteration"),Ua=dl("animationstart"),ja=dl("transitionend"),Va=new Map,Ha="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gt(e,t){Va.set(e,t),d(t,[e])}for(var Jo=0;Jo<Ha.length;Jo++){var Zo=Ha[Jo],Md=Zo.toLowerCase(),Td=Zo[0].toUpperCase()+Zo.slice(1);Gt(Md,"on"+Td)}Gt(za,"onAnimationEnd"),Gt(Oa,"onAnimationIteration"),Gt(Ua,"onAnimationStart"),Gt("dblclick","onDoubleClick"),Gt("focusin","onFocus"),Gt("focusout","onBlur"),Gt(ja,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Id=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sr));function $a(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Mf(r,t,void 0,e),e.currentTarget=null}function Wa(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var u=r.length-1;0<=u;u--){var p=r[u],v=p.instance,_=p.currentTarget;if(p=p.listener,v!==o&&l.isPropagationStopped())break e;$a(l,p,_),o=v}else for(u=0;u<r.length;u++){if(p=r[u],v=p.instance,_=p.currentTarget,p=p.listener,v!==o&&l.isPropagationStopped())break e;$a(l,p,_),o=v}}}if(br)throw e=Io,br=!1,Io=null,e}function he(e,t){var n=t[si];n===void 0&&(n=t[si]=new Set);var r=e+"__bubble";n.has(r)||(Qa(t,e,2,!1),n.add(r))}function ei(e,t,n){var r=0;t&&(r|=4),Qa(n,e,r,t)}var pl="_reactListening"+Math.random().toString(36).slice(2);function Er(e){if(!e[pl]){e[pl]=!0,c.forEach(function(n){n!=="selectionchange"&&(Id.has(n)||ei(n,!1,e),ei(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pl]||(t[pl]=!0,ei("selectionchange",!1,t))}}function Qa(e,t,n,r){switch(ha(t)){case 1:var l=Wf;break;case 4:l=Qf;break;default:l=zo}n=l.bind(null,t,n,e),l=void 0,!To||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function ti(e,t,n,r,l){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var u=r.tag;if(u===3||u===4){var p=r.stateNode.containerInfo;if(p===l||p.nodeType===8&&p.parentNode===l)break;if(u===4)for(u=r.return;u!==null;){var v=u.tag;if((v===3||v===4)&&(v=u.stateNode.containerInfo,v===l||v.nodeType===8&&v.parentNode===l))return;u=u.return}for(;p!==null;){if(u=un(p),u===null)return;if(v=u.tag,v===5||v===6){r=o=u;continue e}p=p.parentNode}}r=r.return}bs(function(){var _=o,I=Ro(n),N=[];e:{var M=Va.get(e);if(M!==void 0){var U=jo,$=e;switch(e){case"keypress":if(sl(n)===0)break e;case"keydown":case"keyup":U=id;break;case"focusin":$="focus",U=$o;break;case"focusout":$="blur",U=$o;break;case"beforeblur":case"afterblur":U=$o;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=ga;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=Yf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=ud;break;case za:case Oa:case Ua:U=qf;break;case ja:U=fd;break;case"scroll":U=Gf;break;case"wheel":U=pd;break;case"copy":case"cut":case"paste":U=Zf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=wa}var W=(t&4)!==0,ke=!W&&e==="scroll",C=W?M!==null?M+"Capture":null:M;W=[];for(var g=_,x;g!==null;){x=g;var L=x.stateNode;if(x.tag===5&&L!==null&&(x=L,C!==null&&(L=lr(g,C),L!=null&&W.push(xr(g,L,x)))),ke)break;g=g.return}0<W.length&&(M=new U(M,$,null,n,I),N.push({event:M,listeners:W}))}}if((t&7)===0){e:{if(M=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",M&&n!==_o&&($=n.relatedTarget||n.fromElement)&&(un($)||$[Nt]))break e;if((U||M)&&(M=I.window===I?I:(M=I.ownerDocument)?M.defaultView||M.parentWindow:window,U?($=n.relatedTarget||n.toElement,U=_,$=$?un($):null,$!==null&&(ke=an($),$!==ke||$.tag!==5&&$.tag!==6)&&($=null)):(U=null,$=_),U!==$)){if(W=ga,L="onMouseLeave",C="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(W=wa,L="onPointerLeave",C="onPointerEnter",g="pointer"),ke=U==null?M:Nn(U),x=$==null?M:Nn($),M=new W(L,g+"leave",U,n,I),M.target=ke,M.relatedTarget=x,L=null,un(I)===_&&(W=new W(C,g+"enter",$,n,I),W.target=x,W.relatedTarget=ke,L=W),ke=L,U&&$)t:{for(W=U,C=$,g=0,x=W;x;x=Tn(x))g++;for(x=0,L=C;L;L=Tn(L))x++;for(;0<g-x;)W=Tn(W),g--;for(;0<x-g;)C=Tn(C),x--;for(;g--;){if(W===C||C!==null&&W===C.alternate)break t;W=Tn(W),C=Tn(C)}W=null}else W=null;U!==null&&Ga(N,M,U,W,!1),$!==null&&ke!==null&&Ga(N,ke,$,W,!0)}}e:{if(M=_?Nn(_):window,U=M.nodeName&&M.nodeName.toLowerCase(),U==="select"||U==="input"&&M.type==="file")var Q=Cd;else if(_a(M))if(Pa)Q=kd;else{Q=Ed;var Y=Sd}else(U=M.nodeName)&&U.toLowerCase()==="input"&&(M.type==="checkbox"||M.type==="radio")&&(Q=xd);if(Q&&(Q=Q(e,_))){Ra(N,Q,n,I);break e}Y&&Y(e,M,_),e==="focusout"&&(Y=M._wrapperState)&&Y.controlled&&M.type==="number"&&Co(M,"number",M.value)}switch(Y=_?Nn(_):window,e){case"focusin":(_a(Y)||Y.contentEditable==="true")&&(Pn=Y,Xo=_,Cr=null);break;case"focusout":Cr=Xo=Pn=null;break;case"mousedown":bo=!0;break;case"contextmenu":case"mouseup":case"dragend":bo=!1,Aa(N,n,I);break;case"selectionchange":if(Pd)break;case"keydown":case"keyup":Aa(N,n,I)}var X;if(Qo)e:{switch(e){case"compositionstart":var q="onCompositionStart";break e;case"compositionend":q="onCompositionEnd";break e;case"compositionupdate":q="onCompositionUpdate";break e}q=void 0}else Rn?xa(e,n)&&(q="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(q="onCompositionStart");q&&(Ca&&n.locale!=="ko"&&(Rn||q!=="onCompositionStart"?q==="onCompositionEnd"&&Rn&&(X=ma()):(Qt=I,Uo="value"in Qt?Qt.value:Qt.textContent,Rn=!0)),Y=hl(_,q),0<Y.length&&(q=new ya(q,e,null,n,I),N.push({event:q,listeners:Y}),X?q.data=X:(X=ka(n),X!==null&&(q.data=X)))),(X=md?vd(e,n):gd(e,n))&&(_=hl(_,"onBeforeInput"),0<_.length&&(I=new ya("onBeforeInput","beforeinput",null,n,I),N.push({event:I,listeners:_}),I.data=X))}Wa(N,t)})}function xr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function hl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=lr(e,n),o!=null&&r.unshift(xr(e,o,l)),o=lr(e,t),o!=null&&r.push(xr(e,o,l))),e=e.return}return r}function Tn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ga(e,t,n,r,l){for(var o=t._reactName,u=[];n!==null&&n!==r;){var p=n,v=p.alternate,_=p.stateNode;if(v!==null&&v===r)break;p.tag===5&&_!==null&&(p=_,l?(v=lr(n,o),v!=null&&u.unshift(xr(n,v,p))):l||(v=lr(n,o),v!=null&&u.push(xr(n,v,p)))),n=n.return}u.length!==0&&e.push({event:t,listeners:u})}var Nd=/\r\n?/g,Ld=/\u0000|\uFFFD/g;function Ka(e){return(typeof e=="string"?e:""+e).replace(Nd,`
`).replace(Ld,"")}function ml(e,t,n){if(t=Ka(t),Ka(e)!==t&&n)throw Error(a(425))}function vl(){}var ni=null,ri=null;function li(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var oi=typeof setTimeout=="function"?setTimeout:void 0,Dd=typeof clearTimeout=="function"?clearTimeout:void 0,Ya=typeof Promise=="function"?Promise:void 0,Fd=typeof queueMicrotask=="function"?queueMicrotask:typeof Ya<"u"?function(e){return Ya.resolve(null).then(e).catch(Ad)}:oi;function Ad(e){setTimeout(function(){throw e})}function ii(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),pr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);pr(t)}function Kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Xa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var In=Math.random().toString(36).slice(2),Rt="__reactFiber$"+In,kr="__reactProps$"+In,Nt="__reactContainer$"+In,si="__reactEvents$"+In,Bd="__reactListeners$"+In,zd="__reactHandles$"+In;function un(e){var t=e[Rt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Nt]||n[Rt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Xa(e);e!==null;){if(n=e[Rt])return n;e=Xa(e)}return t}e=n,n=e.parentNode}return null}function _r(e){return e=e[Rt]||e[Nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Nn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(a(33))}function gl(e){return e[kr]||null}var ai=[],Ln=-1;function Yt(e){return{current:e}}function me(e){0>Ln||(e.current=ai[Ln],ai[Ln]=null,Ln--)}function pe(e,t){Ln++,ai[Ln]=e.current,e.current=t}var Xt={},ze=Yt(Xt),Ge=Yt(!1),cn=Xt;function Dn(e,t){var n=e.type.contextTypes;if(!n)return Xt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Ke(e){return e=e.childContextTypes,e!=null}function yl(){me(Ge),me(ze)}function ba(e,t,n){if(ze.current!==Xt)throw Error(a(168));pe(ze,t),pe(Ge,n)}function qa(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(a(108,de(e)||"Unknown",l));return H({},n,r)}function wl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xt,cn=ze.current,pe(ze,e),pe(Ge,Ge.current),!0}function Ja(e,t,n){var r=e.stateNode;if(!r)throw Error(a(169));n?(e=qa(e,t,cn),r.__reactInternalMemoizedMergedChildContext=e,me(Ge),me(ze),pe(ze,e)):me(Ge),pe(Ge,n)}var Lt=null,Cl=!1,ui=!1;function Za(e){Lt===null?Lt=[e]:Lt.push(e)}function Od(e){Cl=!0,Za(e)}function bt(){if(!ui&&Lt!==null){ui=!0;var e=0,t=fe;try{var n=Lt;for(fe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Lt=null,Cl=!1}catch(l){throw Lt!==null&&(Lt=Lt.slice(e+1)),ta(No,bt),l}finally{fe=t,ui=!1}}return null}var Fn=[],An=0,Sl=null,El=0,st=[],at=0,fn=null,Dt=1,Ft="";function dn(e,t){Fn[An++]=El,Fn[An++]=Sl,Sl=e,El=t}function eu(e,t,n){st[at++]=Dt,st[at++]=Ft,st[at++]=fn,fn=e;var r=Dt;e=Ft;var l=32-pt(r)-1;r&=~(1<<l),n+=1;var o=32-pt(t)+l;if(30<o){var u=l-l%5;o=(r&(1<<u)-1).toString(32),r>>=u,l-=u,Dt=1<<32-pt(t)+l|n<<l|r,Ft=o+e}else Dt=1<<o|n<<l|r,Ft=e}function ci(e){e.return!==null&&(dn(e,1),eu(e,1,0))}function fi(e){for(;e===Sl;)Sl=Fn[--An],Fn[An]=null,El=Fn[--An],Fn[An]=null;for(;e===fn;)fn=st[--at],st[at]=null,Ft=st[--at],st[at]=null,Dt=st[--at],st[at]=null}var tt=null,nt=null,ge=!1,mt=null;function tu(e,t){var n=dt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function nu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,tt=e,nt=Kt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,tt=e,nt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=fn!==null?{id:Dt,overflow:Ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=dt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,tt=e,nt=null,!0):!1;default:return!1}}function di(e){return(e.mode&1)!==0&&(e.flags&128)===0}function pi(e){if(ge){var t=nt;if(t){var n=t;if(!nu(e,t)){if(di(e))throw Error(a(418));t=Kt(n.nextSibling);var r=tt;t&&nu(e,t)?tu(r,n):(e.flags=e.flags&-4097|2,ge=!1,tt=e)}}else{if(di(e))throw Error(a(418));e.flags=e.flags&-4097|2,ge=!1,tt=e}}}function ru(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;tt=e}function xl(e){if(e!==tt)return!1;if(!ge)return ru(e),ge=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!li(e.type,e.memoizedProps)),t&&(t=nt)){if(di(e))throw lu(),Error(a(418));for(;t;)tu(e,t),t=Kt(t.nextSibling)}if(ru(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){nt=Kt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}nt=null}}else nt=tt?Kt(e.stateNode.nextSibling):null;return!0}function lu(){for(var e=nt;e;)e=Kt(e.nextSibling)}function Bn(){nt=tt=null,ge=!1}function hi(e){mt===null?mt=[e]:mt.push(e)}var Ud=F.ReactCurrentBatchConfig;function Rr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(a(309));var r=n.stateNode}if(!r)throw Error(a(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(u){var p=l.refs;u===null?delete p[o]:p[o]=u},t._stringRef=o,t)}if(typeof e!="string")throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function kl(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ou(e){var t=e._init;return t(e._payload)}function iu(e){function t(C,g){if(e){var x=C.deletions;x===null?(C.deletions=[g],C.flags|=16):x.push(g)}}function n(C,g){if(!e)return null;for(;g!==null;)t(C,g),g=g.sibling;return null}function r(C,g){for(C=new Map;g!==null;)g.key!==null?C.set(g.key,g):C.set(g.index,g),g=g.sibling;return C}function l(C,g){return C=ln(C,g),C.index=0,C.sibling=null,C}function o(C,g,x){return C.index=x,e?(x=C.alternate,x!==null?(x=x.index,x<g?(C.flags|=2,g):x):(C.flags|=2,g)):(C.flags|=1048576,g)}function u(C){return e&&C.alternate===null&&(C.flags|=2),C}function p(C,g,x,L){return g===null||g.tag!==6?(g=os(x,C.mode,L),g.return=C,g):(g=l(g,x),g.return=C,g)}function v(C,g,x,L){var Q=x.type;return Q===ie?I(C,g,x.props.children,L,x.key):g!==null&&(g.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Qe&&ou(Q)===g.type)?(L=l(g,x.props),L.ref=Rr(C,g,x),L.return=C,L):(L=Yl(x.type,x.key,x.props,null,C.mode,L),L.ref=Rr(C,g,x),L.return=C,L)}function _(C,g,x,L){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=is(x,C.mode,L),g.return=C,g):(g=l(g,x.children||[]),g.return=C,g)}function I(C,g,x,L,Q){return g===null||g.tag!==7?(g=Cn(x,C.mode,L,Q),g.return=C,g):(g=l(g,x),g.return=C,g)}function N(C,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=os(""+g,C.mode,x),g.return=C,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case G:return x=Yl(g.type,g.key,g.props,null,C.mode,x),x.ref=Rr(C,null,g),x.return=C,x;case ee:return g=is(g,C.mode,x),g.return=C,g;case Qe:var L=g._init;return N(C,L(g._payload),x)}if(tr(g)||b(g))return g=Cn(g,C.mode,x,null),g.return=C,g;kl(C,g)}return null}function M(C,g,x,L){var Q=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return Q!==null?null:p(C,g,""+x,L);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case G:return x.key===Q?v(C,g,x,L):null;case ee:return x.key===Q?_(C,g,x,L):null;case Qe:return Q=x._init,M(C,g,Q(x._payload),L)}if(tr(x)||b(x))return Q!==null?null:I(C,g,x,L,null);kl(C,x)}return null}function U(C,g,x,L,Q){if(typeof L=="string"&&L!==""||typeof L=="number")return C=C.get(x)||null,p(g,C,""+L,Q);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case G:return C=C.get(L.key===null?x:L.key)||null,v(g,C,L,Q);case ee:return C=C.get(L.key===null?x:L.key)||null,_(g,C,L,Q);case Qe:var Y=L._init;return U(C,g,x,Y(L._payload),Q)}if(tr(L)||b(L))return C=C.get(x)||null,I(g,C,L,Q,null);kl(g,L)}return null}function $(C,g,x,L){for(var Q=null,Y=null,X=g,q=g=0,De=null;X!==null&&q<x.length;q++){X.index>q?(De=X,X=null):De=X.sibling;var ue=M(C,X,x[q],L);if(ue===null){X===null&&(X=De);break}e&&X&&ue.alternate===null&&t(C,X),g=o(ue,g,q),Y===null?Q=ue:Y.sibling=ue,Y=ue,X=De}if(q===x.length)return n(C,X),ge&&dn(C,q),Q;if(X===null){for(;q<x.length;q++)X=N(C,x[q],L),X!==null&&(g=o(X,g,q),Y===null?Q=X:Y.sibling=X,Y=X);return ge&&dn(C,q),Q}for(X=r(C,X);q<x.length;q++)De=U(X,C,q,x[q],L),De!==null&&(e&&De.alternate!==null&&X.delete(De.key===null?q:De.key),g=o(De,g,q),Y===null?Q=De:Y.sibling=De,Y=De);return e&&X.forEach(function(on){return t(C,on)}),ge&&dn(C,q),Q}function W(C,g,x,L){var Q=b(x);if(typeof Q!="function")throw Error(a(150));if(x=Q.call(x),x==null)throw Error(a(151));for(var Y=Q=null,X=g,q=g=0,De=null,ue=x.next();X!==null&&!ue.done;q++,ue=x.next()){X.index>q?(De=X,X=null):De=X.sibling;var on=M(C,X,ue.value,L);if(on===null){X===null&&(X=De);break}e&&X&&on.alternate===null&&t(C,X),g=o(on,g,q),Y===null?Q=on:Y.sibling=on,Y=on,X=De}if(ue.done)return n(C,X),ge&&dn(C,q),Q;if(X===null){for(;!ue.done;q++,ue=x.next())ue=N(C,ue.value,L),ue!==null&&(g=o(ue,g,q),Y===null?Q=ue:Y.sibling=ue,Y=ue);return ge&&dn(C,q),Q}for(X=r(C,X);!ue.done;q++,ue=x.next())ue=U(X,C,q,ue.value,L),ue!==null&&(e&&ue.alternate!==null&&X.delete(ue.key===null?q:ue.key),g=o(ue,g,q),Y===null?Q=ue:Y.sibling=ue,Y=ue);return e&&X.forEach(function(yp){return t(C,yp)}),ge&&dn(C,q),Q}function ke(C,g,x,L){if(typeof x=="object"&&x!==null&&x.type===ie&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case G:e:{for(var Q=x.key,Y=g;Y!==null;){if(Y.key===Q){if(Q=x.type,Q===ie){if(Y.tag===7){n(C,Y.sibling),g=l(Y,x.props.children),g.return=C,C=g;break e}}else if(Y.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Qe&&ou(Q)===Y.type){n(C,Y.sibling),g=l(Y,x.props),g.ref=Rr(C,Y,x),g.return=C,C=g;break e}n(C,Y);break}else t(C,Y);Y=Y.sibling}x.type===ie?(g=Cn(x.props.children,C.mode,L,x.key),g.return=C,C=g):(L=Yl(x.type,x.key,x.props,null,C.mode,L),L.ref=Rr(C,g,x),L.return=C,C=L)}return u(C);case ee:e:{for(Y=x.key;g!==null;){if(g.key===Y)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(C,g.sibling),g=l(g,x.children||[]),g.return=C,C=g;break e}else{n(C,g);break}else t(C,g);g=g.sibling}g=is(x,C.mode,L),g.return=C,C=g}return u(C);case Qe:return Y=x._init,ke(C,g,Y(x._payload),L)}if(tr(x))return $(C,g,x,L);if(b(x))return W(C,g,x,L);kl(C,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(n(C,g.sibling),g=l(g,x),g.return=C,C=g):(n(C,g),g=os(x,C.mode,L),g.return=C,C=g),u(C)):n(C,g)}return ke}var zn=iu(!0),su=iu(!1),_l=Yt(null),Rl=null,On=null,mi=null;function vi(){mi=On=Rl=null}function gi(e){var t=_l.current;me(_l),e._currentValue=t}function yi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Un(e,t){Rl=e,mi=On=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ye=!0),e.firstContext=null)}function ut(e){var t=e._currentValue;if(mi!==e)if(e={context:e,memoizedValue:t,next:null},On===null){if(Rl===null)throw Error(a(308));On=e,Rl.dependencies={lanes:0,firstContext:e}}else On=On.next=e;return t}var pn=null;function wi(e){pn===null?pn=[e]:pn.push(e)}function au(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,wi(t)):(n.next=l.next,l.next=n),t.interleaved=n,At(e,r)}function At(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qt=!1;function Ci(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Jt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(oe&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,At(e,n)}return l=r.interleaved,l===null?(t.next=t,wi(r)):(t.next=l.next,l.next=t),r.interleaved=t,At(e,n)}function Pl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Fo(e,n)}}function cu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var u={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=u:o=o.next=u,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ml(e,t,n,r){var l=e.updateQueue;qt=!1;var o=l.firstBaseUpdate,u=l.lastBaseUpdate,p=l.shared.pending;if(p!==null){l.shared.pending=null;var v=p,_=v.next;v.next=null,u===null?o=_:u.next=_,u=v;var I=e.alternate;I!==null&&(I=I.updateQueue,p=I.lastBaseUpdate,p!==u&&(p===null?I.firstBaseUpdate=_:p.next=_,I.lastBaseUpdate=v))}if(o!==null){var N=l.baseState;u=0,I=_=v=null,p=o;do{var M=p.lane,U=p.eventTime;if((r&M)===M){I!==null&&(I=I.next={eventTime:U,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var $=e,W=p;switch(M=t,U=n,W.tag){case 1:if($=W.payload,typeof $=="function"){N=$.call(U,N,M);break e}N=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=W.payload,M=typeof $=="function"?$.call(U,N,M):$,M==null)break e;N=H({},N,M);break e;case 2:qt=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,M=l.effects,M===null?l.effects=[p]:M.push(p))}else U={eventTime:U,lane:M,tag:p.tag,payload:p.payload,callback:p.callback,next:null},I===null?(_=I=U,v=N):I=I.next=U,u|=M;if(p=p.next,p===null){if(p=l.shared.pending,p===null)break;M=p,p=M.next,M.next=null,l.lastBaseUpdate=M,l.shared.pending=null}}while(!0);if(I===null&&(v=N),l.baseState=v,l.firstBaseUpdate=_,l.lastBaseUpdate=I,t=l.shared.interleaved,t!==null){l=t;do u|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);vn|=u,e.lanes=u,e.memoizedState=N}}function fu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(a(191,l));l.call(r)}}}var Pr={},Pt=Yt(Pr),Mr=Yt(Pr),Tr=Yt(Pr);function hn(e){if(e===Pr)throw Error(a(174));return e}function Si(e,t){switch(pe(Tr,t),pe(Mr,e),pe(Pt,Pr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Eo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Eo(t,e)}me(Pt),pe(Pt,t)}function jn(){me(Pt),me(Mr),me(Tr)}function du(e){hn(Tr.current);var t=hn(Pt.current),n=Eo(t,e.type);t!==n&&(pe(Mr,e),pe(Pt,n))}function Ei(e){Mr.current===e&&(me(Pt),me(Mr))}var we=Yt(0);function Tl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xi=[];function ki(){for(var e=0;e<xi.length;e++)xi[e]._workInProgressVersionPrimary=null;xi.length=0}var Il=F.ReactCurrentDispatcher,_i=F.ReactCurrentBatchConfig,mn=0,Ce=null,Te=null,Ne=null,Nl=!1,Ir=!1,Nr=0,jd=0;function Oe(){throw Error(a(321))}function Ri(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ht(e[n],t[n]))return!1;return!0}function Pi(e,t,n,r,l,o){if(mn=o,Ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Il.current=e===null||e.memoizedState===null?Wd:Qd,e=n(r,l),Ir){o=0;do{if(Ir=!1,Nr=0,25<=o)throw Error(a(301));o+=1,Ne=Te=null,t.updateQueue=null,Il.current=Gd,e=n(r,l)}while(Ir)}if(Il.current=Fl,t=Te!==null&&Te.next!==null,mn=0,Ne=Te=Ce=null,Nl=!1,t)throw Error(a(300));return e}function Mi(){var e=Nr!==0;return Nr=0,e}function Mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?Ce.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function ct(){if(Te===null){var e=Ce.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=Ne===null?Ce.memoizedState:Ne.next;if(t!==null)Ne=t,Te=e;else{if(e===null)throw Error(a(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Ne===null?Ce.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function Lr(e,t){return typeof t=="function"?t(e):t}function Ti(e){var t=ct(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var r=Te,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var u=l.next;l.next=o.next,o.next=u}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var p=u=null,v=null,_=o;do{var I=_.lane;if((mn&I)===I)v!==null&&(v=v.next={lane:0,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),r=_.hasEagerState?_.eagerState:e(r,_.action);else{var N={lane:I,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null};v===null?(p=v=N,u=r):v=v.next=N,Ce.lanes|=I,vn|=I}_=_.next}while(_!==null&&_!==o);v===null?u=r:v.next=p,ht(r,t.memoizedState)||(Ye=!0),t.memoizedState=r,t.baseState=u,t.baseQueue=v,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,Ce.lanes|=o,vn|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ii(e){var t=ct(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var u=l=l.next;do o=e(o,u.action),u=u.next;while(u!==l);ht(o,t.memoizedState)||(Ye=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function pu(){}function hu(e,t){var n=Ce,r=ct(),l=t(),o=!ht(r.memoizedState,l);if(o&&(r.memoizedState=l,Ye=!0),r=r.queue,Ni(gu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ne!==null&&Ne.memoizedState.tag&1){if(n.flags|=2048,Dr(9,vu.bind(null,n,r,l,t),void 0,null),Le===null)throw Error(a(349));(mn&30)!==0||mu(n,t,l)}return l}function mu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vu(e,t,n,r){t.value=n,t.getSnapshot=r,yu(t)&&wu(e)}function gu(e,t,n){return n(function(){yu(t)&&wu(e)})}function yu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ht(e,n)}catch{return!0}}function wu(e){var t=At(e,1);t!==null&&wt(t,e,1,-1)}function Cu(e){var t=Mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lr,lastRenderedState:e},t.queue=e,e=e.dispatch=$d.bind(null,Ce,e),[t.memoizedState,e]}function Dr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Su(){return ct().memoizedState}function Ll(e,t,n,r){var l=Mt();Ce.flags|=e,l.memoizedState=Dr(1|t,n,void 0,r===void 0?null:r)}function Dl(e,t,n,r){var l=ct();r=r===void 0?null:r;var o=void 0;if(Te!==null){var u=Te.memoizedState;if(o=u.destroy,r!==null&&Ri(r,u.deps)){l.memoizedState=Dr(t,n,o,r);return}}Ce.flags|=e,l.memoizedState=Dr(1|t,n,o,r)}function Eu(e,t){return Ll(8390656,8,e,t)}function Ni(e,t){return Dl(2048,8,e,t)}function xu(e,t){return Dl(4,2,e,t)}function ku(e,t){return Dl(4,4,e,t)}function _u(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ru(e,t,n){return n=n!=null?n.concat([e]):null,Dl(4,4,_u.bind(null,t,e),n)}function Li(){}function Pu(e,t){var n=ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ri(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Mu(e,t){var n=ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ri(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Tu(e,t,n){return(mn&21)===0?(e.baseState&&(e.baseState=!1,Ye=!0),e.memoizedState=n):(ht(n,t)||(n=oa(),Ce.lanes|=n,vn|=n,e.baseState=!0),t)}function Vd(e,t){var n=fe;fe=n!==0&&4>n?n:4,e(!0);var r=_i.transition;_i.transition={};try{e(!1),t()}finally{fe=n,_i.transition=r}}function Iu(){return ct().memoizedState}function Hd(e,t,n){var r=nn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Nu(e))Lu(t,n);else if(n=au(e,t,n,r),n!==null){var l=He();wt(n,e,r,l),Du(n,t,r)}}function $d(e,t,n){var r=nn(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nu(e))Lu(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var u=t.lastRenderedState,p=o(u,n);if(l.hasEagerState=!0,l.eagerState=p,ht(p,u)){var v=t.interleaved;v===null?(l.next=l,wi(t)):(l.next=v.next,v.next=l),t.interleaved=l;return}}catch{}finally{}n=au(e,t,l,r),n!==null&&(l=He(),wt(n,e,r,l),Du(n,t,r))}}function Nu(e){var t=e.alternate;return e===Ce||t!==null&&t===Ce}function Lu(e,t){Ir=Nl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Du(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Fo(e,n)}}var Fl={readContext:ut,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},Wd={readContext:ut,useCallback:function(e,t){return Mt().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:Eu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ll(4194308,4,_u.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ll(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ll(4,2,e,t)},useMemo:function(e,t){var n=Mt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Mt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Hd.bind(null,Ce,e),[r.memoizedState,e]},useRef:function(e){var t=Mt();return e={current:e},t.memoizedState=e},useState:Cu,useDebugValue:Li,useDeferredValue:function(e){return Mt().memoizedState=e},useTransition:function(){var e=Cu(!1),t=e[0];return e=Vd.bind(null,e[1]),Mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ce,l=Mt();if(ge){if(n===void 0)throw Error(a(407));n=n()}else{if(n=t(),Le===null)throw Error(a(349));(mn&30)!==0||mu(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Eu(gu.bind(null,r,o,e),[e]),r.flags|=2048,Dr(9,vu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Mt(),t=Le.identifierPrefix;if(ge){var n=Ft,r=Dt;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Nr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=jd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Qd={readContext:ut,useCallback:Pu,useContext:ut,useEffect:Ni,useImperativeHandle:Ru,useInsertionEffect:xu,useLayoutEffect:ku,useMemo:Mu,useReducer:Ti,useRef:Su,useState:function(){return Ti(Lr)},useDebugValue:Li,useDeferredValue:function(e){var t=ct();return Tu(t,Te.memoizedState,e)},useTransition:function(){var e=Ti(Lr)[0],t=ct().memoizedState;return[e,t]},useMutableSource:pu,useSyncExternalStore:hu,useId:Iu,unstable_isNewReconciler:!1},Gd={readContext:ut,useCallback:Pu,useContext:ut,useEffect:Ni,useImperativeHandle:Ru,useInsertionEffect:xu,useLayoutEffect:ku,useMemo:Mu,useReducer:Ii,useRef:Su,useState:function(){return Ii(Lr)},useDebugValue:Li,useDeferredValue:function(e){var t=ct();return Te===null?t.memoizedState=e:Tu(t,Te.memoizedState,e)},useTransition:function(){var e=Ii(Lr)[0],t=ct().memoizedState;return[e,t]},useMutableSource:pu,useSyncExternalStore:hu,useId:Iu,unstable_isNewReconciler:!1};function vt(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Di(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Al={isMounted:function(e){return(e=e._reactInternals)?an(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=He(),l=nn(e),o=Bt(r,l);o.payload=t,n!=null&&(o.callback=n),t=Jt(e,o,l),t!==null&&(wt(t,e,l,r),Pl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=He(),l=nn(e),o=Bt(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Jt(e,o,l),t!==null&&(wt(t,e,l,r),Pl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=He(),r=nn(e),l=Bt(n,r);l.tag=2,t!=null&&(l.callback=t),t=Jt(e,l,r),t!==null&&(wt(t,e,r,n),Pl(t,e,r))}};function Fu(e,t,n,r,l,o,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,u):t.prototype&&t.prototype.isPureReactComponent?!wr(n,r)||!wr(l,o):!0}function Au(e,t,n){var r=!1,l=Xt,o=t.contextType;return typeof o=="object"&&o!==null?o=ut(o):(l=Ke(t)?cn:ze.current,r=t.contextTypes,o=(r=r!=null)?Dn(e,l):Xt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Al,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Bu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Al.enqueueReplaceState(t,t.state,null)}function Fi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Ci(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=ut(o):(o=Ke(t)?cn:ze.current,l.context=Dn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Di(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Al.enqueueReplaceState(l,l.state,null),Ml(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Vn(e,t){try{var n="",r=t;do n+=se(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Ai(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Bi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Kd=typeof WeakMap=="function"?WeakMap:Map;function zu(e,t,n){n=Bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Hl||(Hl=!0,qi=r),Bi(e,t)},n}function Ou(e,t,n){n=Bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Bi(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Bi(e,t),typeof r!="function"&&(en===null?en=new Set([this]):en.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),n}function Uu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Kd;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=sp.bind(null,e,t,n),t.then(e,e))}function ju(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Vu(e,t,n,r,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bt(-1,1),t.tag=2,Jt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var Yd=F.ReactCurrentOwner,Ye=!1;function Ve(e,t,n,r){t.child=e===null?su(t,null,n,r):zn(t,e.child,n,r)}function Hu(e,t,n,r,l){n=n.render;var o=t.ref;return Un(t,l),r=Pi(e,t,n,r,o,l),n=Mi(),e!==null&&!Ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,zt(e,t,l)):(ge&&n&&ci(t),t.flags|=1,Ve(e,t,r,l),t.child)}function $u(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!ls(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Wu(e,t,o,r,l)):(e=Yl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&l)===0){var u=o.memoizedProps;if(n=n.compare,n=n!==null?n:wr,n(u,r)&&e.ref===t.ref)return zt(e,t,l)}return t.flags|=1,e=ln(o,r),e.ref=t.ref,e.return=t,t.child=e}function Wu(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(wr(o,r)&&e.ref===t.ref)if(Ye=!1,t.pendingProps=r=o,(e.lanes&l)!==0)(e.flags&131072)!==0&&(Ye=!0);else return t.lanes=e.lanes,zt(e,t,l)}return zi(e,t,n,r,l)}function Qu(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe($n,rt),rt|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,pe($n,rt),rt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,pe($n,rt),rt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,pe($n,rt),rt|=r;return Ve(e,t,l,n),t.child}function Gu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function zi(e,t,n,r,l){var o=Ke(n)?cn:ze.current;return o=Dn(t,o),Un(t,l),n=Pi(e,t,n,r,o,l),r=Mi(),e!==null&&!Ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,zt(e,t,l)):(ge&&r&&ci(t),t.flags|=1,Ve(e,t,n,l),t.child)}function Ku(e,t,n,r,l){if(Ke(n)){var o=!0;wl(t)}else o=!1;if(Un(t,l),t.stateNode===null)zl(e,t),Au(t,n,r),Fi(t,n,r,l),r=!0;else if(e===null){var u=t.stateNode,p=t.memoizedProps;u.props=p;var v=u.context,_=n.contextType;typeof _=="object"&&_!==null?_=ut(_):(_=Ke(n)?cn:ze.current,_=Dn(t,_));var I=n.getDerivedStateFromProps,N=typeof I=="function"||typeof u.getSnapshotBeforeUpdate=="function";N||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(p!==r||v!==_)&&Bu(t,u,r,_),qt=!1;var M=t.memoizedState;u.state=M,Ml(t,r,u,l),v=t.memoizedState,p!==r||M!==v||Ge.current||qt?(typeof I=="function"&&(Di(t,n,I,r),v=t.memoizedState),(p=qt||Fu(t,n,p,r,M,v,_))?(N||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=v),u.props=r,u.state=v,u.context=_,r=p):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{u=t.stateNode,uu(e,t),p=t.memoizedProps,_=t.type===t.elementType?p:vt(t.type,p),u.props=_,N=t.pendingProps,M=u.context,v=n.contextType,typeof v=="object"&&v!==null?v=ut(v):(v=Ke(n)?cn:ze.current,v=Dn(t,v));var U=n.getDerivedStateFromProps;(I=typeof U=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(p!==N||M!==v)&&Bu(t,u,r,v),qt=!1,M=t.memoizedState,u.state=M,Ml(t,r,u,l);var $=t.memoizedState;p!==N||M!==$||Ge.current||qt?(typeof U=="function"&&(Di(t,n,U,r),$=t.memoizedState),(_=qt||Fu(t,n,_,r,M,$,v)||!1)?(I||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,$,v),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,$,v)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||p===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=$),u.props=r,u.state=$,u.context=v,r=_):(typeof u.componentDidUpdate!="function"||p===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),r=!1)}return Oi(e,t,n,r,o,l)}function Oi(e,t,n,r,l,o){Gu(e,t);var u=(t.flags&128)!==0;if(!r&&!u)return l&&Ja(t,n,!1),zt(e,t,o);r=t.stateNode,Yd.current=t;var p=u&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&u?(t.child=zn(t,e.child,null,o),t.child=zn(t,null,p,o)):Ve(e,t,p,o),t.memoizedState=r.state,l&&Ja(t,n,!0),t.child}function Yu(e){var t=e.stateNode;t.pendingContext?ba(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ba(e,t.context,!1),Si(e,t.containerInfo)}function Xu(e,t,n,r,l){return Bn(),hi(l),t.flags|=256,Ve(e,t,n,r),t.child}var Ui={dehydrated:null,treeContext:null,retryLane:0};function ji(e){return{baseLanes:e,cachePool:null,transitions:null}}function bu(e,t,n){var r=t.pendingProps,l=we.current,o=!1,u=(t.flags&128)!==0,p;if((p=u)||(p=e!==null&&e.memoizedState===null?!1:(l&2)!==0),p?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),pe(we,l&1),e===null)return pi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(u=r.children,e=r.fallback,o?(r=t.mode,o=t.child,u={mode:"hidden",children:u},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=u):o=Xl(u,r,0,null),e=Cn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ji(n),t.memoizedState=Ui,e):Vi(t,u));if(l=e.memoizedState,l!==null&&(p=l.dehydrated,p!==null))return Xd(e,t,u,r,p,l,n);if(o){o=r.fallback,u=t.mode,l=e.child,p=l.sibling;var v={mode:"hidden",children:r.children};return(u&1)===0&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=v,t.deletions=null):(r=ln(l,v),r.subtreeFlags=l.subtreeFlags&14680064),p!==null?o=ln(p,o):(o=Cn(o,u,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,u=e.child.memoizedState,u=u===null?ji(n):{baseLanes:u.baseLanes|n,cachePool:null,transitions:u.transitions},o.memoizedState=u,o.childLanes=e.childLanes&~n,t.memoizedState=Ui,r}return o=e.child,e=o.sibling,r=ln(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Vi(e,t){return t=Xl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Bl(e,t,n,r){return r!==null&&hi(r),zn(t,e.child,null,n),e=Vi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Xd(e,t,n,r,l,o,u){if(n)return t.flags&256?(t.flags&=-257,r=Ai(Error(a(422))),Bl(e,t,u,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=Xl({mode:"visible",children:r.children},l,0,null),o=Cn(o,l,u,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&zn(t,e.child,null,u),t.child.memoizedState=ji(u),t.memoizedState=Ui,o);if((t.mode&1)===0)return Bl(e,t,u,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var p=r.dgst;return r=p,o=Error(a(419)),r=Ai(o,r,void 0),Bl(e,t,u,r)}if(p=(u&e.childLanes)!==0,Ye||p){if(r=Le,r!==null){switch(u&-u){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|u))!==0?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,At(e,l),wt(r,e,l,-1))}return rs(),r=Ai(Error(a(421))),Bl(e,t,u,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=ap.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,nt=Kt(l.nextSibling),tt=t,ge=!0,mt=null,e!==null&&(st[at++]=Dt,st[at++]=Ft,st[at++]=fn,Dt=e.id,Ft=e.overflow,fn=t),t=Vi(t,r.children),t.flags|=4096,t)}function qu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),yi(e.return,t,n)}function Hi(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function Ju(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(Ve(e,t,r.children,n),r=we.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qu(e,n,t);else if(e.tag===19)qu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(pe(we,r),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Tl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Hi(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Tl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Hi(t,!0,n,null,o);break;case"together":Hi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zl(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),vn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(a(153));if(t.child!==null){for(e=t.child,n=ln(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ln(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function bd(e,t,n){switch(t.tag){case 3:Yu(t),Bn();break;case 5:du(t);break;case 1:Ke(t.type)&&wl(t);break;case 4:Si(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;pe(_l,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(pe(we,we.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?bu(e,t,n):(pe(we,we.current&1),e=zt(e,t,n),e!==null?e.sibling:null);pe(we,we.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Ju(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),pe(we,we.current),r)break;return null;case 22:case 23:return t.lanes=0,Qu(e,t,n)}return zt(e,t,n)}var Zu,$i,ec,tc;Zu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},$i=function(){},ec=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,hn(Pt.current);var o=null;switch(n){case"input":l=yo(e,l),r=yo(e,r),o=[];break;case"select":l=H({},l,{value:void 0}),r=H({},r,{value:void 0}),o=[];break;case"textarea":l=So(e,l),r=So(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=vl)}xo(n,r);var u;n=null;for(_ in l)if(!r.hasOwnProperty(_)&&l.hasOwnProperty(_)&&l[_]!=null)if(_==="style"){var p=l[_];for(u in p)p.hasOwnProperty(u)&&(n||(n={}),n[u]="")}else _!=="dangerouslySetInnerHTML"&&_!=="children"&&_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(f.hasOwnProperty(_)?o||(o=[]):(o=o||[]).push(_,null));for(_ in r){var v=r[_];if(p=l!=null?l[_]:void 0,r.hasOwnProperty(_)&&v!==p&&(v!=null||p!=null))if(_==="style")if(p){for(u in p)!p.hasOwnProperty(u)||v&&v.hasOwnProperty(u)||(n||(n={}),n[u]="");for(u in v)v.hasOwnProperty(u)&&p[u]!==v[u]&&(n||(n={}),n[u]=v[u])}else n||(o||(o=[]),o.push(_,n)),n=v;else _==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,p=p?p.__html:void 0,v!=null&&p!==v&&(o=o||[]).push(_,v)):_==="children"?typeof v!="string"&&typeof v!="number"||(o=o||[]).push(_,""+v):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&(f.hasOwnProperty(_)?(v!=null&&_==="onScroll"&&he("scroll",e),o||p===v||(o=[])):(o=o||[]).push(_,v))}n&&(o=o||[]).push("style",n);var _=o;(t.updateQueue=_)&&(t.flags|=4)}},tc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Fr(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function qd(e,t,n){var r=t.pendingProps;switch(fi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return Ke(t.type)&&yl(),Ue(t),null;case 3:return r=t.stateNode,jn(),me(Ge),me(ze),ki(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,mt!==null&&(es(mt),mt=null))),$i(e,t),Ue(t),null;case 5:Ei(t);var l=hn(Tr.current);if(n=t.type,e!==null&&t.stateNode!=null)ec(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(a(166));return Ue(t),null}if(e=hn(Pt.current),xl(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Rt]=t,r[kr]=o,e=(t.mode&1)!==0,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(l=0;l<Sr.length;l++)he(Sr[l],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":As(r,o),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},he("invalid",r);break;case"textarea":Os(r,o),he("invalid",r)}xo(n,o),l=null;for(var u in o)if(o.hasOwnProperty(u)){var p=o[u];u==="children"?typeof p=="string"?r.textContent!==p&&(o.suppressHydrationWarning!==!0&&ml(r.textContent,p,e),l=["children",p]):typeof p=="number"&&r.textContent!==""+p&&(o.suppressHydrationWarning!==!0&&ml(r.textContent,p,e),l=["children",""+p]):f.hasOwnProperty(u)&&p!=null&&u==="onScroll"&&he("scroll",r)}switch(n){case"input":Gr(r),zs(r,o,!0);break;case"textarea":Gr(r),js(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=vl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{u=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Vs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=u.createElement(n,{is:r.is}):(e=u.createElement(n),n==="select"&&(u=e,r.multiple?u.multiple=!0:r.size&&(u.size=r.size))):e=u.createElementNS(e,n),e[Rt]=t,e[kr]=r,Zu(e,t,!1,!1),t.stateNode=e;e:{switch(u=ko(n,r),n){case"dialog":he("cancel",e),he("close",e),l=r;break;case"iframe":case"object":case"embed":he("load",e),l=r;break;case"video":case"audio":for(l=0;l<Sr.length;l++)he(Sr[l],e);l=r;break;case"source":he("error",e),l=r;break;case"img":case"image":case"link":he("error",e),he("load",e),l=r;break;case"details":he("toggle",e),l=r;break;case"input":As(e,r),l=yo(e,r),he("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=H({},r,{value:void 0}),he("invalid",e);break;case"textarea":Os(e,r),l=So(e,r),he("invalid",e);break;default:l=r}xo(n,l),p=l;for(o in p)if(p.hasOwnProperty(o)){var v=p[o];o==="style"?Ws(e,v):o==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,v!=null&&Hs(e,v)):o==="children"?typeof v=="string"?(n!=="textarea"||v!=="")&&nr(e,v):typeof v=="number"&&nr(e,""+v):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(f.hasOwnProperty(o)?v!=null&&o==="onScroll"&&he("scroll",e):v!=null&&Z(e,o,v,u))}switch(n){case"input":Gr(e),zs(e,r,!1);break;case"textarea":Gr(e),js(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ce(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Sn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Sn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=vl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ue(t),null;case 6:if(e&&t.stateNode!=null)tc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(a(166));if(n=hn(Tr.current),hn(Pt.current),xl(t)){if(r=t.stateNode,n=t.memoizedProps,r[Rt]=t,(o=r.nodeValue!==n)&&(e=tt,e!==null))switch(e.tag){case 3:ml(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ml(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rt]=t,t.stateNode=r}return Ue(t),null;case 13:if(me(we),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ge&&nt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)lu(),Bn(),t.flags|=98560,o=!1;else if(o=xl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(a(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(a(317));o[Rt]=t}else Bn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ue(t),o=!1}else mt!==null&&(es(mt),mt=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(we.current&1)!==0?Ie===0&&(Ie=3):rs())),t.updateQueue!==null&&(t.flags|=4),Ue(t),null);case 4:return jn(),$i(e,t),e===null&&Er(t.stateNode.containerInfo),Ue(t),null;case 10:return gi(t.type._context),Ue(t),null;case 17:return Ke(t.type)&&yl(),Ue(t),null;case 19:if(me(we),o=t.memoizedState,o===null)return Ue(t),null;if(r=(t.flags&128)!==0,u=o.rendering,u===null)if(r)Fr(o,!1);else{if(Ie!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Tl(e),u!==null){for(t.flags|=128,Fr(o,!1),r=u.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,u=o.alternate,u===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=u.childLanes,o.lanes=u.lanes,o.child=u.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=u.memoizedProps,o.memoizedState=u.memoizedState,o.updateQueue=u.updateQueue,o.type=u.type,e=u.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return pe(we,we.current&1|2),t.child}e=e.sibling}o.tail!==null&&xe()>Wn&&(t.flags|=128,r=!0,Fr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Tl(u),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Fr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!u.alternate&&!ge)return Ue(t),null}else 2*xe()-o.renderingStartTime>Wn&&n!==1073741824&&(t.flags|=128,r=!0,Fr(o,!1),t.lanes=4194304);o.isBackwards?(u.sibling=t.child,t.child=u):(n=o.last,n!==null?n.sibling=u:t.child=u,o.last=u)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=xe(),t.sibling=null,n=we.current,pe(we,r?n&1|2:n&1),t):(Ue(t),null);case 22:case 23:return ns(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(rt&1073741824)!==0&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),null;case 24:return null;case 25:return null}throw Error(a(156,t.tag))}function Jd(e,t){switch(fi(t),t.tag){case 1:return Ke(t.type)&&yl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return jn(),me(Ge),me(ze),ki(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ei(t),null;case 13:if(me(we),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(a(340));Bn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(we),null;case 4:return jn(),null;case 10:return gi(t.type._context),null;case 22:case 23:return ns(),null;case 24:return null;default:return null}}var Ol=!1,je=!1,Zd=typeof WeakSet=="function"?WeakSet:Set,j=null;function Hn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(e,t,r)}else n.current=null}function Wi(e,t,n){try{n()}catch(r){Ee(e,t,r)}}var nc=!1;function ep(e,t){if(ni=ll,e=Fa(),Yo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var u=0,p=-1,v=-1,_=0,I=0,N=e,M=null;t:for(;;){for(var U;N!==n||l!==0&&N.nodeType!==3||(p=u+l),N!==o||r!==0&&N.nodeType!==3||(v=u+r),N.nodeType===3&&(u+=N.nodeValue.length),(U=N.firstChild)!==null;)M=N,N=U;for(;;){if(N===e)break t;if(M===n&&++_===l&&(p=u),M===o&&++I===r&&(v=u),(U=N.nextSibling)!==null)break;N=M,M=N.parentNode}N=U}n=p===-1||v===-1?null:{start:p,end:v}}else n=null}n=n||{start:0,end:0}}else n=null;for(ri={focusedElem:e,selectionRange:n},ll=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var $=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if($!==null){var W=$.memoizedProps,ke=$.memoizedState,C=t.stateNode,g=C.getSnapshotBeforeUpdate(t.elementType===t.type?W:vt(t.type,W),ke);C.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(L){Ee(t,t.return,L)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return $=nc,nc=!1,$}function Ar(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Wi(t,n,o)}l=l.next}while(l!==r)}}function Ul(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Qi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function rc(e){var t=e.alternate;t!==null&&(e.alternate=null,rc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Rt],delete t[kr],delete t[si],delete t[Bd],delete t[zd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function lc(e){return e.tag===5||e.tag===3||e.tag===4}function oc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=vl));else if(r!==4&&(e=e.child,e!==null))for(Gi(e,t,n),e=e.sibling;e!==null;)Gi(e,t,n),e=e.sibling}function Ki(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ki(e,t,n),e=e.sibling;e!==null;)Ki(e,t,n),e=e.sibling}var Fe=null,gt=!1;function Zt(e,t,n){for(n=n.child;n!==null;)ic(e,t,n),n=n.sibling}function ic(e,t,n){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(Jr,n)}catch{}switch(n.tag){case 5:je||Hn(n,t);case 6:var r=Fe,l=gt;Fe=null,Zt(e,t,n),Fe=r,gt=l,Fe!==null&&(gt?(e=Fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Fe.removeChild(n.stateNode));break;case 18:Fe!==null&&(gt?(e=Fe,n=n.stateNode,e.nodeType===8?ii(e.parentNode,n):e.nodeType===1&&ii(e,n),pr(e)):ii(Fe,n.stateNode));break;case 4:r=Fe,l=gt,Fe=n.stateNode.containerInfo,gt=!0,Zt(e,t,n),Fe=r,gt=l;break;case 0:case 11:case 14:case 15:if(!je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,u=o.destroy;o=o.tag,u!==void 0&&((o&2)!==0||(o&4)!==0)&&Wi(n,t,u),l=l.next}while(l!==r)}Zt(e,t,n);break;case 1:if(!je&&(Hn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(p){Ee(n,t,p)}Zt(e,t,n);break;case 21:Zt(e,t,n);break;case 22:n.mode&1?(je=(r=je)||n.memoizedState!==null,Zt(e,t,n),je=r):Zt(e,t,n);break;default:Zt(e,t,n)}}function sc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Zd),t.forEach(function(r){var l=up.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function yt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,u=t,p=u;e:for(;p!==null;){switch(p.tag){case 5:Fe=p.stateNode,gt=!1;break e;case 3:Fe=p.stateNode.containerInfo,gt=!0;break e;case 4:Fe=p.stateNode.containerInfo,gt=!0;break e}p=p.return}if(Fe===null)throw Error(a(160));ic(o,u,l),Fe=null,gt=!1;var v=l.alternate;v!==null&&(v.return=null),l.return=null}catch(_){Ee(l,t,_)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ac(t,e),t=t.sibling}function ac(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(yt(t,e),Tt(e),r&4){try{Ar(3,e,e.return),Ul(3,e)}catch(W){Ee(e,e.return,W)}try{Ar(5,e,e.return)}catch(W){Ee(e,e.return,W)}}break;case 1:yt(t,e),Tt(e),r&512&&n!==null&&Hn(n,n.return);break;case 5:if(yt(t,e),Tt(e),r&512&&n!==null&&Hn(n,n.return),e.flags&32){var l=e.stateNode;try{nr(l,"")}catch(W){Ee(e,e.return,W)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,u=n!==null?n.memoizedProps:o,p=e.type,v=e.updateQueue;if(e.updateQueue=null,v!==null)try{p==="input"&&o.type==="radio"&&o.name!=null&&Bs(l,o),ko(p,u);var _=ko(p,o);for(u=0;u<v.length;u+=2){var I=v[u],N=v[u+1];I==="style"?Ws(l,N):I==="dangerouslySetInnerHTML"?Hs(l,N):I==="children"?nr(l,N):Z(l,I,N,_)}switch(p){case"input":wo(l,o);break;case"textarea":Us(l,o);break;case"select":var M=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var U=o.value;U!=null?Sn(l,!!o.multiple,U,!1):M!==!!o.multiple&&(o.defaultValue!=null?Sn(l,!!o.multiple,o.defaultValue,!0):Sn(l,!!o.multiple,o.multiple?[]:"",!1))}l[kr]=o}catch(W){Ee(e,e.return,W)}}break;case 6:if(yt(t,e),Tt(e),r&4){if(e.stateNode===null)throw Error(a(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(W){Ee(e,e.return,W)}}break;case 3:if(yt(t,e),Tt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{pr(t.containerInfo)}catch(W){Ee(e,e.return,W)}break;case 4:yt(t,e),Tt(e);break;case 13:yt(t,e),Tt(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(bi=xe())),r&4&&sc(e);break;case 22:if(I=n!==null&&n.memoizedState!==null,e.mode&1?(je=(_=je)||I,yt(t,e),je=_):yt(t,e),Tt(e),r&8192){if(_=e.memoizedState!==null,(e.stateNode.isHidden=_)&&!I&&(e.mode&1)!==0)for(j=e,I=e.child;I!==null;){for(N=j=I;j!==null;){switch(M=j,U=M.child,M.tag){case 0:case 11:case 14:case 15:Ar(4,M,M.return);break;case 1:Hn(M,M.return);var $=M.stateNode;if(typeof $.componentWillUnmount=="function"){r=M,n=M.return;try{t=r,$.props=t.memoizedProps,$.state=t.memoizedState,$.componentWillUnmount()}catch(W){Ee(r,n,W)}}break;case 5:Hn(M,M.return);break;case 22:if(M.memoizedState!==null){fc(N);continue}}U!==null?(U.return=M,j=U):fc(N)}I=I.sibling}e:for(I=null,N=e;;){if(N.tag===5){if(I===null){I=N;try{l=N.stateNode,_?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(p=N.stateNode,v=N.memoizedProps.style,u=v!=null&&v.hasOwnProperty("display")?v.display:null,p.style.display=$s("display",u))}catch(W){Ee(e,e.return,W)}}}else if(N.tag===6){if(I===null)try{N.stateNode.nodeValue=_?"":N.memoizedProps}catch(W){Ee(e,e.return,W)}}else if((N.tag!==22&&N.tag!==23||N.memoizedState===null||N===e)&&N.child!==null){N.child.return=N,N=N.child;continue}if(N===e)break e;for(;N.sibling===null;){if(N.return===null||N.return===e)break e;I===N&&(I=null),N=N.return}I===N&&(I=null),N.sibling.return=N.return,N=N.sibling}}break;case 19:yt(t,e),Tt(e),r&4&&sc(e);break;case 21:break;default:yt(t,e),Tt(e)}}function Tt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(lc(n)){var r=n;break e}n=n.return}throw Error(a(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(nr(l,""),r.flags&=-33);var o=oc(e);Ki(e,o,l);break;case 3:case 4:var u=r.stateNode.containerInfo,p=oc(e);Gi(e,p,u);break;default:throw Error(a(161))}}catch(v){Ee(e,e.return,v)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function tp(e,t,n){j=e,uc(e)}function uc(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var l=j,o=l.child;if(l.tag===22&&r){var u=l.memoizedState!==null||Ol;if(!u){var p=l.alternate,v=p!==null&&p.memoizedState!==null||je;p=Ol;var _=je;if(Ol=u,(je=v)&&!_)for(j=l;j!==null;)u=j,v=u.child,u.tag===22&&u.memoizedState!==null?dc(l):v!==null?(v.return=u,j=v):dc(l);for(;o!==null;)j=o,uc(o),o=o.sibling;j=l,Ol=p,je=_}cc(e)}else(l.subtreeFlags&8772)!==0&&o!==null?(o.return=l,j=o):cc(e)}}function cc(e){for(;j!==null;){var t=j;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:je||Ul(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!je)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:vt(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&fu(t,o,r);break;case 3:var u=t.updateQueue;if(u!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}fu(t,u,n)}break;case 5:var p=t.stateNode;if(n===null&&t.flags&4){n=p;var v=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":v.autoFocus&&n.focus();break;case"img":v.src&&(n.src=v.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var _=t.alternate;if(_!==null){var I=_.memoizedState;if(I!==null){var N=I.dehydrated;N!==null&&pr(N)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}je||t.flags&512&&Qi(t)}catch(M){Ee(t,t.return,M)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function fc(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function dc(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ul(4,t)}catch(v){Ee(t,n,v)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(v){Ee(t,l,v)}}var o=t.return;try{Qi(t)}catch(v){Ee(t,o,v)}break;case 5:var u=t.return;try{Qi(t)}catch(v){Ee(t,u,v)}}}catch(v){Ee(t,t.return,v)}if(t===e){j=null;break}var p=t.sibling;if(p!==null){p.return=t.return,j=p;break}j=t.return}}var np=Math.ceil,jl=F.ReactCurrentDispatcher,Yi=F.ReactCurrentOwner,ft=F.ReactCurrentBatchConfig,oe=0,Le=null,Re=null,Ae=0,rt=0,$n=Yt(0),Ie=0,Br=null,vn=0,Vl=0,Xi=0,zr=null,Xe=null,bi=0,Wn=1/0,Ot=null,Hl=!1,qi=null,en=null,$l=!1,tn=null,Wl=0,Or=0,Ji=null,Ql=-1,Gl=0;function He(){return(oe&6)!==0?xe():Ql!==-1?Ql:Ql=xe()}function nn(e){return(e.mode&1)===0?1:(oe&2)!==0&&Ae!==0?Ae&-Ae:Ud.transition!==null?(Gl===0&&(Gl=oa()),Gl):(e=fe,e!==0||(e=window.event,e=e===void 0?16:ha(e.type)),e)}function wt(e,t,n,r){if(50<Or)throw Or=0,Ji=null,Error(a(185));ar(e,n,r),((oe&2)===0||e!==Le)&&(e===Le&&((oe&2)===0&&(Vl|=n),Ie===4&&rn(e,Ae)),be(e,r),n===1&&oe===0&&(t.mode&1)===0&&(Wn=xe()+500,Cl&&bt()))}function be(e,t){var n=e.callbackNode;Uf(e,t);var r=tl(e,e===Le?Ae:0);if(r===0)n!==null&&na(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&na(n),t===1)e.tag===0?Od(hc.bind(null,e)):Za(hc.bind(null,e)),Fd(function(){(oe&6)===0&&bt()}),n=null;else{switch(ia(r)){case 1:n=No;break;case 4:n=ra;break;case 16:n=qr;break;case 536870912:n=la;break;default:n=qr}n=Ec(n,pc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function pc(e,t){if(Ql=-1,Gl=0,(oe&6)!==0)throw Error(a(327));var n=e.callbackNode;if(Qn()&&e.callbackNode!==n)return null;var r=tl(e,e===Le?Ae:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Kl(e,r);else{t=r;var l=oe;oe|=2;var o=vc();(Le!==e||Ae!==t)&&(Ot=null,Wn=xe()+500,yn(e,t));do try{op();break}catch(p){mc(e,p)}while(!0);vi(),jl.current=o,oe=l,Re!==null?t=0:(Le=null,Ae=0,t=Ie)}if(t!==0){if(t===2&&(l=Lo(e),l!==0&&(r=l,t=Zi(e,l))),t===1)throw n=Br,yn(e,0),rn(e,r),be(e,xe()),n;if(t===6)rn(e,r);else{if(l=e.current.alternate,(r&30)===0&&!rp(l)&&(t=Kl(e,r),t===2&&(o=Lo(e),o!==0&&(r=o,t=Zi(e,o))),t===1))throw n=Br,yn(e,0),rn(e,r),be(e,xe()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(a(345));case 2:wn(e,Xe,Ot);break;case 3:if(rn(e,r),(r&130023424)===r&&(t=bi+500-xe(),10<t)){if(tl(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){He(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=oi(wn.bind(null,e,Xe,Ot),t);break}wn(e,Xe,Ot);break;case 4:if(rn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var u=31-pt(r);o=1<<u,u=t[u],u>l&&(l=u),r&=~o}if(r=l,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*np(r/1960))-r,10<r){e.timeoutHandle=oi(wn.bind(null,e,Xe,Ot),r);break}wn(e,Xe,Ot);break;case 5:wn(e,Xe,Ot);break;default:throw Error(a(329))}}}return be(e,xe()),e.callbackNode===n?pc.bind(null,e):null}function Zi(e,t){var n=zr;return e.current.memoizedState.isDehydrated&&(yn(e,t).flags|=256),e=Kl(e,t),e!==2&&(t=Xe,Xe=n,t!==null&&es(t)),e}function es(e){Xe===null?Xe=e:Xe.push.apply(Xe,e)}function rp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!ht(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rn(e,t){for(t&=~Xi,t&=~Vl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pt(t),r=1<<n;e[n]=-1,t&=~r}}function hc(e){if((oe&6)!==0)throw Error(a(327));Qn();var t=tl(e,0);if((t&1)===0)return be(e,xe()),null;var n=Kl(e,t);if(e.tag!==0&&n===2){var r=Lo(e);r!==0&&(t=r,n=Zi(e,r))}if(n===1)throw n=Br,yn(e,0),rn(e,t),be(e,xe()),n;if(n===6)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wn(e,Xe,Ot),be(e,xe()),null}function ts(e,t){var n=oe;oe|=1;try{return e(t)}finally{oe=n,oe===0&&(Wn=xe()+500,Cl&&bt())}}function gn(e){tn!==null&&tn.tag===0&&(oe&6)===0&&Qn();var t=oe;oe|=1;var n=ft.transition,r=fe;try{if(ft.transition=null,fe=1,e)return e()}finally{fe=r,ft.transition=n,oe=t,(oe&6)===0&&bt()}}function ns(){rt=$n.current,me($n)}function yn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Dd(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(fi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&yl();break;case 3:jn(),me(Ge),me(ze),ki();break;case 5:Ei(r);break;case 4:jn();break;case 13:me(we);break;case 19:me(we);break;case 10:gi(r.type._context);break;case 22:case 23:ns()}n=n.return}if(Le=e,Re=e=ln(e.current,null),Ae=rt=t,Ie=0,Br=null,Xi=Vl=vn=0,Xe=zr=null,pn!==null){for(t=0;t<pn.length;t++)if(n=pn[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var u=o.next;o.next=l,r.next=u}n.pending=r}pn=null}return e}function mc(e,t){do{var n=Re;try{if(vi(),Il.current=Fl,Nl){for(var r=Ce.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Nl=!1}if(mn=0,Ne=Te=Ce=null,Ir=!1,Nr=0,Yi.current=null,n===null||n.return===null){Ie=1,Br=t,Re=null;break}e:{var o=e,u=n.return,p=n,v=t;if(t=Ae,p.flags|=32768,v!==null&&typeof v=="object"&&typeof v.then=="function"){var _=v,I=p,N=I.tag;if((I.mode&1)===0&&(N===0||N===11||N===15)){var M=I.alternate;M?(I.updateQueue=M.updateQueue,I.memoizedState=M.memoizedState,I.lanes=M.lanes):(I.updateQueue=null,I.memoizedState=null)}var U=ju(u);if(U!==null){U.flags&=-257,Vu(U,u,p,o,t),U.mode&1&&Uu(o,_,t),t=U,v=_;var $=t.updateQueue;if($===null){var W=new Set;W.add(v),t.updateQueue=W}else $.add(v);break e}else{if((t&1)===0){Uu(o,_,t),rs();break e}v=Error(a(426))}}else if(ge&&p.mode&1){var ke=ju(u);if(ke!==null){(ke.flags&65536)===0&&(ke.flags|=256),Vu(ke,u,p,o,t),hi(Vn(v,p));break e}}o=v=Vn(v,p),Ie!==4&&(Ie=2),zr===null?zr=[o]:zr.push(o),o=u;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var C=zu(o,v,t);cu(o,C);break e;case 1:p=v;var g=o.type,x=o.stateNode;if((o.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(en===null||!en.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var L=Ou(o,p,t);cu(o,L);break e}}o=o.return}while(o!==null)}yc(n)}catch(Q){t=Q,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(!0)}function vc(){var e=jl.current;return jl.current=Fl,e===null?Fl:e}function rs(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),Le===null||(vn&268435455)===0&&(Vl&268435455)===0||rn(Le,Ae)}function Kl(e,t){var n=oe;oe|=2;var r=vc();(Le!==e||Ae!==t)&&(Ot=null,yn(e,t));do try{lp();break}catch(l){mc(e,l)}while(!0);if(vi(),oe=n,jl.current=r,Re!==null)throw Error(a(261));return Le=null,Ae=0,Ie}function lp(){for(;Re!==null;)gc(Re)}function op(){for(;Re!==null&&!If();)gc(Re)}function gc(e){var t=Sc(e.alternate,e,rt);e.memoizedProps=e.pendingProps,t===null?yc(e):Re=t,Yi.current=null}function yc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=qd(n,t,rt),n!==null){Re=n;return}}else{if(n=Jd(n,t),n!==null){n.flags&=32767,Re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ie=6,Re=null;return}}if(t=t.sibling,t!==null){Re=t;return}Re=t=e}while(t!==null);Ie===0&&(Ie=5)}function wn(e,t,n){var r=fe,l=ft.transition;try{ft.transition=null,fe=1,ip(e,t,n,r)}finally{ft.transition=l,fe=r}return null}function ip(e,t,n,r){do Qn();while(tn!==null);if((oe&6)!==0)throw Error(a(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(jf(e,o),e===Le&&(Re=Le=null,Ae=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||$l||($l=!0,Ec(qr,function(){return Qn(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=ft.transition,ft.transition=null;var u=fe;fe=1;var p=oe;oe|=4,Yi.current=null,ep(e,n),ac(n,e),Rd(ri),ll=!!ni,ri=ni=null,e.current=n,tp(n),Nf(),oe=p,fe=u,ft.transition=o}else e.current=n;if($l&&($l=!1,tn=e,Wl=l),o=e.pendingLanes,o===0&&(en=null),Ff(n.stateNode),be(e,xe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Hl)throw Hl=!1,e=qi,qi=null,e;return(Wl&1)!==0&&e.tag!==0&&Qn(),o=e.pendingLanes,(o&1)!==0?e===Ji?Or++:(Or=0,Ji=e):Or=0,bt(),null}function Qn(){if(tn!==null){var e=ia(Wl),t=ft.transition,n=fe;try{if(ft.transition=null,fe=16>e?16:e,tn===null)var r=!1;else{if(e=tn,tn=null,Wl=0,(oe&6)!==0)throw Error(a(331));var l=oe;for(oe|=4,j=e.current;j!==null;){var o=j,u=o.child;if((j.flags&16)!==0){var p=o.deletions;if(p!==null){for(var v=0;v<p.length;v++){var _=p[v];for(j=_;j!==null;){var I=j;switch(I.tag){case 0:case 11:case 15:Ar(8,I,o)}var N=I.child;if(N!==null)N.return=I,j=N;else for(;j!==null;){I=j;var M=I.sibling,U=I.return;if(rc(I),I===_){j=null;break}if(M!==null){M.return=U,j=M;break}j=U}}}var $=o.alternate;if($!==null){var W=$.child;if(W!==null){$.child=null;do{var ke=W.sibling;W.sibling=null,W=ke}while(W!==null)}}j=o}}if((o.subtreeFlags&2064)!==0&&u!==null)u.return=o,j=u;else e:for(;j!==null;){if(o=j,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Ar(9,o,o.return)}var C=o.sibling;if(C!==null){C.return=o.return,j=C;break e}j=o.return}}var g=e.current;for(j=g;j!==null;){u=j;var x=u.child;if((u.subtreeFlags&2064)!==0&&x!==null)x.return=u,j=x;else e:for(u=g;j!==null;){if(p=j,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:Ul(9,p)}}catch(Q){Ee(p,p.return,Q)}if(p===u){j=null;break e}var L=p.sibling;if(L!==null){L.return=p.return,j=L;break e}j=p.return}}if(oe=l,bt(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(Jr,e)}catch{}r=!0}return r}finally{fe=n,ft.transition=t}}return!1}function wc(e,t,n){t=Vn(n,t),t=zu(e,t,1),e=Jt(e,t,1),t=He(),e!==null&&(ar(e,1,t),be(e,t))}function Ee(e,t,n){if(e.tag===3)wc(e,e,n);else for(;t!==null;){if(t.tag===3){wc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(en===null||!en.has(r))){e=Vn(n,e),e=Ou(t,e,1),t=Jt(t,e,1),e=He(),t!==null&&(ar(t,1,e),be(t,e));break}}t=t.return}}function sp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=He(),e.pingedLanes|=e.suspendedLanes&n,Le===e&&(Ae&n)===n&&(Ie===4||Ie===3&&(Ae&130023424)===Ae&&500>xe()-bi?yn(e,0):Xi|=n),be(e,t)}function Cc(e,t){t===0&&((e.mode&1)===0?t=1:(t=el,el<<=1,(el&130023424)===0&&(el=4194304)));var n=He();e=At(e,t),e!==null&&(ar(e,t,n),be(e,n))}function ap(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cc(e,n)}function up(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}r!==null&&r.delete(t),Cc(e,n)}var Sc;Sc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ge.current)Ye=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ye=!1,bd(e,t,n);Ye=(e.flags&131072)!==0}else Ye=!1,ge&&(t.flags&1048576)!==0&&eu(t,El,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;zl(e,t),e=t.pendingProps;var l=Dn(t,ze.current);Un(t,n),l=Pi(null,t,r,e,l,n);var o=Mi();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ke(r)?(o=!0,wl(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ci(t),l.updater=Al,t.stateNode=l,l._reactInternals=t,Fi(t,r,e,n),t=Oi(null,t,r,!0,o,n)):(t.tag=0,ge&&o&&ci(t),Ve(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(zl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=fp(r),e=vt(r,e),l){case 0:t=zi(null,t,r,e,n);break e;case 1:t=Ku(null,t,r,e,n);break e;case 11:t=Hu(null,t,r,e,n);break e;case 14:t=$u(null,t,r,vt(r.type,e),n);break e}throw Error(a(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:vt(r,l),zi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:vt(r,l),Ku(e,t,r,l,n);case 3:e:{if(Yu(t),e===null)throw Error(a(387));r=t.pendingProps,o=t.memoizedState,l=o.element,uu(e,t),Ml(t,r,null,n);var u=t.memoizedState;if(r=u.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=Vn(Error(a(423)),t),t=Xu(e,t,r,n,l);break e}else if(r!==l){l=Vn(Error(a(424)),t),t=Xu(e,t,r,n,l);break e}else for(nt=Kt(t.stateNode.containerInfo.firstChild),tt=t,ge=!0,mt=null,n=su(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bn(),r===l){t=zt(e,t,n);break e}Ve(e,t,r,n)}t=t.child}return t;case 5:return du(t),e===null&&pi(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,u=l.children,li(r,l)?u=null:o!==null&&li(r,o)&&(t.flags|=32),Gu(e,t),Ve(e,t,u,n),t.child;case 6:return e===null&&pi(t),null;case 13:return bu(e,t,n);case 4:return Si(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=zn(t,null,r,n):Ve(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:vt(r,l),Hu(e,t,r,l,n);case 7:return Ve(e,t,t.pendingProps,n),t.child;case 8:return Ve(e,t,t.pendingProps.children,n),t.child;case 12:return Ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,u=l.value,pe(_l,r._currentValue),r._currentValue=u,o!==null)if(ht(o.value,u)){if(o.children===l.children&&!Ge.current){t=zt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var p=o.dependencies;if(p!==null){u=o.child;for(var v=p.firstContext;v!==null;){if(v.context===r){if(o.tag===1){v=Bt(-1,n&-n),v.tag=2;var _=o.updateQueue;if(_!==null){_=_.shared;var I=_.pending;I===null?v.next=v:(v.next=I.next,I.next=v),_.pending=v}}o.lanes|=n,v=o.alternate,v!==null&&(v.lanes|=n),yi(o.return,n,t),p.lanes|=n;break}v=v.next}}else if(o.tag===10)u=o.type===t.type?null:o.child;else if(o.tag===18){if(u=o.return,u===null)throw Error(a(341));u.lanes|=n,p=u.alternate,p!==null&&(p.lanes|=n),yi(u,n,t),u=o.sibling}else u=o.child;if(u!==null)u.return=o;else for(u=o;u!==null;){if(u===t){u=null;break}if(o=u.sibling,o!==null){o.return=u.return,u=o;break}u=u.return}o=u}Ve(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Un(t,n),l=ut(l),r=r(l),t.flags|=1,Ve(e,t,r,n),t.child;case 14:return r=t.type,l=vt(r,t.pendingProps),l=vt(r.type,l),$u(e,t,r,l,n);case 15:return Wu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:vt(r,l),zl(e,t),t.tag=1,Ke(r)?(e=!0,wl(t)):e=!1,Un(t,n),Au(t,r,l),Fi(t,r,l,n),Oi(null,t,r,!0,e,n);case 19:return Ju(e,t,n);case 22:return Qu(e,t,n)}throw Error(a(156,t.tag))};function Ec(e,t){return ta(e,t)}function cp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,n,r){return new cp(e,t,n,r)}function ls(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fp(e){if(typeof e=="function")return ls(e)?1:0;if(e!=null){if(e=e.$$typeof,e===it)return 11;if(e===Me)return 14}return 2}function ln(e,t){var n=e.alternate;return n===null?(n=dt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Yl(e,t,n,r,l,o){var u=2;if(r=e,typeof e=="function")ls(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case ie:return Cn(n.children,l,o,t);case te:u=8,l|=8;break;case $e:return e=dt(12,n,t,l|2),e.elementType=$e,e.lanes=o,e;case Be:return e=dt(13,n,t,l),e.elementType=Be,e.lanes=o,e;case We:return e=dt(19,n,t,l),e.elementType=We,e.lanes=o,e;case Se:return Xl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Je:u=10;break e;case It:u=9;break e;case it:u=11;break e;case Me:u=14;break e;case Qe:u=16,r=null;break e}throw Error(a(130,e==null?e:typeof e,""))}return t=dt(u,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Cn(e,t,n,r){return e=dt(7,e,r,t),e.lanes=n,e}function Xl(e,t,n,r){return e=dt(22,e,r,t),e.elementType=Se,e.lanes=n,e.stateNode={isHidden:!1},e}function os(e,t,n){return e=dt(6,e,null,t),e.lanes=n,e}function is(e,t,n){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function dp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Do(0),this.expirationTimes=Do(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Do(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ss(e,t,n,r,l,o,u,p,v){return e=new dp(e,t,n,p,v),t===1?(t=1,o===!0&&(t|=8)):t=0,o=dt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ci(o),e}function pp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ee,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function xc(e){if(!e)return Xt;e=e._reactInternals;e:{if(an(e)!==e||e.tag!==1)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(a(171))}if(e.tag===1){var n=e.type;if(Ke(n))return qa(e,n,t)}return t}function kc(e,t,n,r,l,o,u,p,v){return e=ss(n,r,!0,e,l,o,u,p,v),e.context=xc(null),n=e.current,r=He(),l=nn(n),o=Bt(r,l),o.callback=t??null,Jt(n,o,l),e.current.lanes=l,ar(e,l,r),be(e,r),e}function bl(e,t,n,r){var l=t.current,o=He(),u=nn(l);return n=xc(n),t.context===null?t.context=n:t.pendingContext=n,t=Bt(o,u),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Jt(l,t,u),e!==null&&(wt(e,l,u,o),Pl(e,l,u)),u}function ql(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _c(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function as(e,t){_c(e,t),(e=e.alternate)&&_c(e,t)}function hp(){return null}var Rc=typeof reportError=="function"?reportError:function(e){console.error(e)};function us(e){this._internalRoot=e}Jl.prototype.render=us.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(a(409));bl(e,t,null,null)},Jl.prototype.unmount=us.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;gn(function(){bl(null,e,null,null)}),t[Nt]=null}};function Jl(e){this._internalRoot=e}Jl.prototype.unstable_scheduleHydration=function(e){if(e){var t=ua();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Wt.length&&t!==0&&t<Wt[n].priority;n++);Wt.splice(n,0,e),n===0&&da(e)}};function cs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Zl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Pc(){}function mp(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var _=ql(u);o.call(_)}}var u=kc(t,r,e,0,null,!1,!1,"",Pc);return e._reactRootContainer=u,e[Nt]=u.current,Er(e.nodeType===8?e.parentNode:e),gn(),u}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var p=r;r=function(){var _=ql(v);p.call(_)}}var v=ss(e,0,!1,null,null,!1,!1,"",Pc);return e._reactRootContainer=v,e[Nt]=v.current,Er(e.nodeType===8?e.parentNode:e),gn(function(){bl(t,v,n,r)}),v}function eo(e,t,n,r,l){var o=n._reactRootContainer;if(o){var u=o;if(typeof l=="function"){var p=l;l=function(){var v=ql(u);p.call(v)}}bl(t,u,e,l)}else u=mp(n,t,e,l,r);return ql(u)}sa=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=sr(t.pendingLanes);n!==0&&(Fo(t,n|1),be(t,xe()),(oe&6)===0&&(Wn=xe()+500,bt()))}break;case 13:gn(function(){var r=At(e,1);if(r!==null){var l=He();wt(r,e,1,l)}}),as(e,1)}},Ao=function(e){if(e.tag===13){var t=At(e,134217728);if(t!==null){var n=He();wt(t,e,134217728,n)}as(e,134217728)}},aa=function(e){if(e.tag===13){var t=nn(e),n=At(e,t);if(n!==null){var r=He();wt(n,e,t,r)}as(e,t)}},ua=function(){return fe},ca=function(e,t){var n=fe;try{return fe=e,t()}finally{fe=n}},Po=function(e,t,n){switch(t){case"input":if(wo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=gl(r);if(!l)throw Error(a(90));Fs(r),wo(r,l)}}}break;case"textarea":Us(e,n);break;case"select":t=n.value,t!=null&&Sn(e,!!n.multiple,t,!1)}},Ys=ts,Xs=gn;var vp={usingClientEntryPoint:!1,Events:[_r,Nn,gl,Gs,Ks,ts]},Ur={findFiberByHostInstance:un,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gp={bundleType:Ur.bundleType,version:Ur.version,rendererPackageName:Ur.rendererPackageName,rendererConfig:Ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:F.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zs(e),e===null?null:e.stateNode},findFiberByHostInstance:Ur.findFiberByHostInstance||hp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var to=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!to.isDisabled&&to.supportsFiber)try{Jr=to.inject(gp),_t=to}catch{}}return qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vp,qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cs(t))throw Error(a(200));return pp(e,t,null,n)},qe.createRoot=function(e,t){if(!cs(e))throw Error(a(299));var n=!1,r="",l=Rc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=ss(e,1,!1,null,null,n,!1,r,l),e[Nt]=t.current,Er(e.nodeType===8?e.parentNode:e),new us(t)},qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=Zs(t),e=e===null?null:e.stateNode,e},qe.flushSync=function(e){return gn(e)},qe.hydrate=function(e,t,n){if(!Zl(t))throw Error(a(200));return eo(null,e,t,!0,n)},qe.hydrateRoot=function(e,t,n){if(!cs(e))throw Error(a(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",u=Rc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),t=kc(t,null,e,1,n??null,l,!1,o,u),e[Nt]=t.current,Er(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Jl(t)},qe.render=function(e,t,n){if(!Zl(t))throw Error(a(200));return eo(null,e,t,!1,n)},qe.unmountComponentAtNode=function(e){if(!Zl(e))throw Error(a(40));return e._reactRootContainer?(gn(function(){eo(null,null,e,!1,function(){e._reactRootContainer=null,e[Nt]=null})}),!0):!1},qe.unstable_batchedUpdates=ts,qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Zl(n))throw Error(a(200));if(e==null||e._reactInternals===void 0)throw Error(a(38));return eo(e,t,n,!1,r)},qe.version="18.3.1-next-f1338f8080-20240426",qe}var jc;function eh(){if(jc)return ps.exports;jc=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),ps.exports=Zp(),ps.exports}var Vc;function th(){if(Vc)return no;Vc=1;var s=eh();return no.createRoot=s.createRoot,no.hydrateRoot=s.hydrateRoot,no}var nh=th(),S=xs();/**
 * react-router v7.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var ks=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,tf=/^[\\/]{2}/;function rh(s,i){return i+s.replace(/\\/g,"/")}var Hc="popstate";function $c(s){return typeof s=="object"&&s!=null&&"pathname"in s&&"search"in s&&"hash"in s&&"state"in s&&"key"in s}function lh(s={}){function i(c,f){var E;let d=(E=f.state)==null?void 0:E.masked,{pathname:h,search:m,hash:y}=d||c.location;return Ss("",{pathname:h,search:m,hash:y},f.state&&f.state.usr||null,f.state&&f.state.key||"default",d?{pathname:c.location.pathname,search:c.location.search,hash:c.location.hash}:void 0)}function a(c,f){return typeof f=="string"?f:$r(f)}return ih(i,a,null,s)}function ye(s,i){if(s===!1||s===null||typeof s>"u")throw new Error(i)}function Et(s,i){if(!s){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function oh(){return Math.random().toString(36).substring(2,10)}function Wc(s,i){return{usr:s.state,key:s.key,idx:i,masked:s.mask?{pathname:s.pathname,search:s.search,hash:s.hash}:void 0}}function Ss(s,i,a=null,c,f){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof i=="string"?bn(i):i,state:a,key:i&&i.key||c||oh(),mask:f}}function $r({pathname:s="/",search:i="",hash:a=""}){return i&&i!=="?"&&(s+=i.charAt(0)==="?"?i:"?"+i),a&&a!=="#"&&(s+=a.charAt(0)==="#"?a:"#"+a),s}function bn(s){let i={};if(s){let a=s.indexOf("#");a>=0&&(i.hash=s.substring(a),s=s.substring(0,a));let c=s.indexOf("?");c>=0&&(i.search=s.substring(c),s=s.substring(0,c)),s&&(i.pathname=s)}return i}function ih(s,i,a,c={}){let{window:f=document.defaultView,v5Compat:d=!1}=c,h=f.history,m="POP",y=null,E=k();E==null&&(E=0,h.replaceState({...h.state,idx:E},""));function k(){return(h.state||{idx:null}).idx}function R(){m="POP";let D=k(),z=D==null?null:D-E;E=D,y&&y({action:m,location:A.location,delta:z})}function P(D,z){m="PUSH";let J=$c(D)?D:Ss(A.location,D,z);E=k()+1;let Z=Wc(J,E),F=A.createHref(J.mask||J);try{h.pushState(Z,"",F)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;f.location.assign(F)}d&&y&&y({action:m,location:A.location,delta:1})}function O(D,z){m="REPLACE";let J=$c(D)?D:Ss(A.location,D,z);E=k();let Z=Wc(J,E),F=A.createHref(J.mask||J);h.replaceState(Z,"",F),d&&y&&y({action:m,location:A.location,delta:0})}function V(D){return sh(f,D)}let A={get action(){return m},get location(){return s(f,h)},listen(D){if(y)throw new Error("A history only accepts one active listener");return f.addEventListener(Hc,R),y=D,()=>{f.removeEventListener(Hc,R),y=null}},createHref(D){return i(f,D)},createURL:V,encodeLocation(D){let z=V(D);return{pathname:z.pathname,search:z.search,hash:z.hash}},push:P,replace:O,go(D){return h.go(D)}};return A}function sh(s,i,a=!1){let c="http://localhost";s&&(c=s.location.origin!=="null"?s.location.origin:s.location.href),ye(c,"No window.location.(origin|href) available to create URL");let f=typeof i=="string"?i:$r(i);return f=f.replace(/ $/,"%20"),!a&&tf.test(f)&&(f=c+f),new URL(f,c)}function nf(s,i,a="/"){return ah(s,i,a,!1)}function ah(s,i,a,c,f){let d=typeof i=="string"?bn(i):i,h=jt(d.pathname||"/",a);if(h==null)return null;let m=uh(s),y=null,E=Ch(h);for(let k=0;y==null&&k<m.length;++k)y=wh(m[k],E,c);return y}function uh(s){let i=rf(s);return ch(i),i}function rf(s,i=[],a=[],c="",f=!1){let d=(h,m,y=f,E)=>{let k={relativePath:E===void 0?h.path||"":E,caseSensitive:h.caseSensitive===!0,childrenIndex:m,route:h};if(k.relativePath.startsWith("/")){if(!k.relativePath.startsWith(c)&&y)return;ye(k.relativePath.startsWith(c),`Absolute route path "${k.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),k.relativePath=k.relativePath.slice(c.length)}let R=St([c,k.relativePath]),P=a.concat(k);h.children&&h.children.length>0&&(ye(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${R}".`),rf(h.children,i,P,R,y)),!(h.path==null&&!h.index)&&i.push({path:R,score:gh(R,h.index),routesMeta:P.map((O,V)=>{let[A,D]=sf(O.relativePath,O.caseSensitive,V===P.length-1);return{...O,matcher:A,compiledParams:D}})})};return s.forEach((h,m)=>{var y;if(h.path===""||!((y=h.path)!=null&&y.includes("?")))d(h,m);else for(let E of lf(h.path))d(h,m,!0,E)}),i}function lf(s){let i=s.split("/");if(i.length===0)return[];let[a,...c]=i,f=a.endsWith("?"),d=a.replace(/\?$/,"");if(c.length===0)return f?[d,""]:[d];let h=lf(c.join("/")),m=[];return m.push(...h.map(y=>y===""?d:[d,y].join("/"))),f&&m.push(...h),m.map(y=>s.startsWith("/")&&y===""?"/":y)}function ch(s){s.sort((i,a)=>i.score!==a.score?a.score-i.score:yh(i.routesMeta.map(c=>c.childrenIndex),a.routesMeta.map(c=>c.childrenIndex)))}var fh=/^:[\w-]+$/,dh=3,ph=2,hh=1,mh=10,vh=-2,Qc=s=>s==="*";function gh(s,i){let a=s.split("/"),c=a.length;return a.some(Qc)&&(c+=vh),i&&(c+=ph),a.filter(f=>!Qc(f)).reduce((f,d)=>f+(fh.test(d)?dh:d===""?hh:mh),c)}function yh(s,i){return s.length===i.length&&s.slice(0,-1).every((c,f)=>c===i[f])?s[s.length-1]-i[i.length-1]:0}function wh(s,i,a=!1){let{routesMeta:c}=s,f={},d="/",h=[];for(let m=0;m<c.length;++m){let y=c[m],E=m===c.length-1,k=d==="/"?i:i.slice(d.length)||"/",R={path:y.relativePath,caseSensitive:y.caseSensitive,end:E},P=y.matcher&&y.compiledParams?of(R,k,y.matcher,y.compiledParams):fo(R,k),O=y.route;if(!P&&E&&a&&!c[c.length-1].route.index&&(P=fo({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},k)),!P)return null;Object.assign(f,P.params),h.push({params:f,pathname:St([d,P.pathname]),pathnameBase:xh(St([d,P.pathnameBase])),route:O}),P.pathnameBase!=="/"&&(d=St([d,P.pathnameBase]))}return h}function fo(s,i){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[a,c]=sf(s.path,s.caseSensitive,s.end);return of(s,i,a,c)}function of(s,i,a,c){let f=i.match(a);if(!f)return null;let d=f[0],h=d.replace(/(.)\/+$/,"$1"),m=f.slice(1);return{params:c.reduce((E,{paramName:k,isOptional:R},P)=>{if(k==="*"){let V=m[P]||"";h=d.slice(0,d.length-V.length).replace(/(.)\/+$/,"$1")}const O=m[P];return R&&!O?E[k]=void 0:E[k]=(O||"").replace(/%2F/g,"/"),E},{}),pathname:d,pathnameBase:h,pattern:s}}function sf(s,i=!1,a=!0){Et(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let c=[],f="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,m,y,E,k)=>{if(c.push({paramName:m,isOptional:y!=null}),y){let R=k.charAt(E+h.length);return R&&R!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(c.push({paramName:"*"}),f+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?f+="\\/*$":s!==""&&s!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,i?void 0:"i"),c]}function Ch(s){try{return s.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return Et(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),s}}function jt(s,i){if(i==="/")return s;if(!s.toLowerCase().startsWith(i.toLowerCase()))return null;let a=i.endsWith("/")?i.length-1:i.length,c=s.charAt(a);return c&&c!=="/"?null:s.slice(a)||"/"}function Sh(s,i="/"){let{pathname:a,search:c="",hash:f=""}=typeof s=="string"?bn(s):s,d;return a?(a=af(a),a.startsWith("/")?d=Gc(a.substring(1),"/"):d=Gc(a,i)):d=i,{pathname:d,search:kh(c),hash:_h(f)}}function Gc(s,i){let a=po(i).split("/");return s.split("/").forEach(f=>{f===".."?a.length>1&&a.pop():f!=="."&&a.push(f)}),a.length>1?a.join("/"):"/"}function vs(s,i,a,c){return`Cannot include a '${s}' character in a manually specified \`to.${i}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Eh(s){return s.filter((i,a)=>a===0||i.route.path&&i.route.path.length>0)}function _s(s){let i=Eh(s);return i.map((a,c)=>c===i.length-1?a.pathname:a.pathnameBase)}function ho(s,i,a,c=!1){let f;typeof s=="string"?f=bn(s):(f={...s},ye(!f.pathname||!f.pathname.includes("?"),vs("?","pathname","search",f)),ye(!f.pathname||!f.pathname.includes("#"),vs("#","pathname","hash",f)),ye(!f.search||!f.search.includes("#"),vs("#","search","hash",f)));let d=s===""||f.pathname==="",h=d?"/":f.pathname,m;if(h==null)m=a;else{let R=i.length-1;if(!c&&h.startsWith("..")){let P=h.split("/");for(;P[0]==="..";)P.shift(),R-=1;f.pathname=P.join("/")}m=R>=0?i[R]:"/"}let y=Sh(f,m),E=h&&h!=="/"&&h.endsWith("/"),k=(d||h===".")&&a.endsWith("/");return!y.pathname.endsWith("/")&&(E||k)&&(y.pathname+="/"),y}var af=s=>s.replace(/[\\/]{2,}/g,"/"),St=s=>af(s.join("/")),po=s=>s.replace(/\/+$/,""),xh=s=>po(s).replace(/^\/*/,"/"),kh=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,_h=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,Rh=class{constructor(s,i,a,c=!1){this.status=s,this.statusText=i||"",this.internal=c,a instanceof Error?(this.data=a.toString(),this.error=a):this.data=a}};function Ph(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function Mh(s){let i=s.map(a=>a.route.path).filter(Boolean);return St(i)||"/"}var uf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function cf(s,i){let a=s;if(typeof a!="string"||!ks.test(a))return{absoluteURL:void 0,isExternal:!1,to:a};let c=a,f=!1;if(uf)try{let d=new URL(window.location.href),h=tf.test(a)?new URL(rh(a,d.protocol)):new URL(a),m=jt(h.pathname,i);h.origin===d.origin&&m!=null?a=m+h.search+h.hash:f=!0}catch{Et(!1,`<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:f,to:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var ff=["POST","PUT","PATCH","DELETE"];new Set(ff);var Th=["GET",...ff];new Set(Th);var Ih=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Nh(s){try{return Ih.includes(new URL(s).protocol)}catch{return!1}}var qn=S.createContext(null);qn.displayName="DataRouter";var mo=S.createContext(null);mo.displayName="DataRouterState";var df=S.createContext(!1);function Lh(){return S.useContext(df)}var pf=S.createContext({isTransitioning:!1});pf.displayName="ViewTransition";var Dh=S.createContext(new Map);Dh.displayName="Fetchers";var Fh=S.createContext(null);Fh.displayName="Await";var ot=S.createContext(null);ot.displayName="Navigation";var Wr=S.createContext(null);Wr.displayName="Location";var xt=S.createContext({outlet:null,matches:[],isDataRoute:!1});xt.displayName="Route";var Rs=S.createContext(null);Rs.displayName="RouteError";var hf="REACT_ROUTER_ERROR",Ah="REDIRECT",Bh="ROUTE_ERROR_RESPONSE";function zh(s){if(s.startsWith(`${hf}:${Ah}:{`))try{let i=JSON.parse(s.slice(28));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.location=="string"&&typeof i.reloadDocument=="boolean"&&typeof i.replace=="boolean")return i}catch{}}function Oh(s){if(s.startsWith(`${hf}:${Bh}:{`))try{let i=JSON.parse(s.slice(40));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string")return new Rh(i.status,i.statusText,i.data)}catch{}}function Uh(s,{relative:i}={}){ye(Jn(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:c}=S.useContext(ot),{hash:f,pathname:d,search:h}=Qr(s,{relative:i}),m=d;return a!=="/"&&(m=d==="/"?a:St([a,d])),c.createHref({pathname:m,search:h,hash:f})}function Jn(){return S.useContext(Wr)!=null}function kt(){return ye(Jn(),"useLocation() may be used only in the context of a <Router> component."),S.useContext(Wr).location}var mf="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function vf(s){S.useContext(ot).static||S.useLayoutEffect(s)}function Ps(){let{isDataRoute:s}=S.useContext(xt);return s?Zh():jh()}function jh(){ye(Jn(),"useNavigate() may be used only in the context of a <Router> component.");let s=S.useContext(qn),{basename:i,navigator:a}=S.useContext(ot),{matches:c}=S.useContext(xt),{pathname:f}=kt(),d=JSON.stringify(_s(c)),h=S.useRef(!1);return vf(()=>{h.current=!0}),S.useCallback((y,E={})=>{if(Et(h.current,mf),!h.current)return;if(typeof y=="number"){a.go(y);return}let k=ho(y,JSON.parse(d),f,E.relative==="path");s==null&&i!=="/"&&(k.pathname=k.pathname==="/"?i:St([i,k.pathname])),(E.replace?a.replace:a.push)(k,E.state,E)},[i,a,d,f,s])}S.createContext(null);function Vh(){let{matches:s}=S.useContext(xt),i=s[s.length-1];return(i==null?void 0:i.params)??{}}function Qr(s,{relative:i}={}){let{matches:a}=S.useContext(xt),{pathname:c}=kt(),f=JSON.stringify(_s(a));return S.useMemo(()=>ho(s,JSON.parse(f),c,i==="path"),[s,f,c,i])}function Hh(s,i){return gf(s,i)}function gf(s,i,a){var D;ye(Jn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=S.useContext(ot),{matches:f}=S.useContext(xt),d=f[f.length-1],h=d?d.params:{},m=d?d.pathname:"/",y=d?d.pathnameBase:"/",E=d&&d.route;{let z=E&&E.path||"";wf(m,!E||z.endsWith("*")||z.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${z}"> to <Route path="${z==="/"?"*":`${z}/*`}">.`)}let k=kt(),R;if(i){let z=typeof i=="string"?bn(i):i;ye(y==="/"||((D=z.pathname)==null?void 0:D.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${z.pathname}" was given in the \`location\` prop.`),R=z}else R=k;let P=R.pathname||"/",O=P;if(y!=="/"){let z=y.replace(/^\//,"").split("/");O="/"+P.replace(/^\//,"").split("/").slice(z.length).join("/")}let V=a&&a.state.matches.length?a.state.matches.map(z=>Object.assign(z,{route:a.manifest[z.route.id]||z.route})):nf(s,{pathname:O});Et(E||V!=null,`No routes matched location "${R.pathname}${R.search}${R.hash}" `),Et(V==null||V[V.length-1].route.element!==void 0||V[V.length-1].route.Component!==void 0||V[V.length-1].route.lazy!==void 0,`Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let A=Kh(V&&V.map(z=>Object.assign({},z,{params:Object.assign({},h,z.params),pathname:St([y,c.encodeLocation?c.encodeLocation(z.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?y:St([y,c.encodeLocation?c.encodeLocation(z.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:z.pathnameBase])})),f,a);return i&&A?S.createElement(Wr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...R},navigationType:"POP"}},A):A}function $h(){let s=Jh(),i=Ph(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),a=s instanceof Error?s.stack:null,c="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:c},d={padding:"2px 4px",backgroundColor:c},h=null;return console.error("Error handled by React Router default ErrorBoundary:",s),h=S.createElement(S.Fragment,null,S.createElement("p",null,"💿 Hey developer 👋"),S.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",S.createElement("code",{style:d},"ErrorBoundary")," or"," ",S.createElement("code",{style:d},"errorElement")," prop on your route.")),S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},i),a?S.createElement("pre",{style:f},a):null,h)}var Wh=S.createElement($h,null),yf=class extends S.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,i){return i.location!==s.location||i.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:i.error,location:i.location,revalidation:s.revalidation||i.revalidation}}componentDidCatch(s,i){this.props.onError?this.props.onError(s,i):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const a=Oh(s.digest);a&&(s=a)}let i=s!==void 0?S.createElement(xt.Provider,{value:this.props.routeContext},S.createElement(Rs.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?S.createElement(Qh,{error:s},i):i}};yf.contextType=df;var gs=new WeakMap;function Qh({children:s,error:i}){let{basename:a}=S.useContext(ot);if(typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){let c=zh(i.digest);if(c){let f=gs.get(i);if(f)throw f;let d=cf(c.location,a),h=d.absoluteURL||d.to;if(Nh(h))throw new Error("Invalid redirect location");if(uf&&!gs.get(i))if(d.isExternal||c.reloadDocument)window.location.href=h;else{const m=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(d.to,{replace:c.replace}));throw gs.set(i,m),m}return S.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h}`})}}return s}function Gh({routeContext:s,match:i,children:a}){let c=S.useContext(qn);return c&&c.static&&c.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=i.route.id),S.createElement(xt.Provider,{value:s},a)}function Kh(s,i=[],a){let c=a==null?void 0:a.state;if(s==null){if(!c)return null;if(c.errors)s=c.matches;else if(i.length===0&&!c.initialized&&c.matches.length>0)s=c.matches;else return null}let f=s,d=c==null?void 0:c.errors;if(d!=null){let k=f.findIndex(R=>R.route.id&&(d==null?void 0:d[R.route.id])!==void 0);ye(k>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),f=f.slice(0,Math.min(f.length,k+1))}let h=!1,m=-1;if(a&&c){h=c.renderFallback;for(let k=0;k<f.length;k++){let R=f[k];if((R.route.HydrateFallback||R.route.hydrateFallbackElement)&&(m=k),R.route.id){let{loaderData:P,errors:O}=c,V=R.route.loader&&!P.hasOwnProperty(R.route.id)&&(!O||O[R.route.id]===void 0);if(R.route.lazy||V){a.isStatic&&(h=!0),m>=0?f=f.slice(0,m+1):f=[f[0]];break}}}}let y=a==null?void 0:a.onError,E=c&&y?(k,R)=>{var P,O;y(k,{location:c.location,params:((O=(P=c.matches)==null?void 0:P[0])==null?void 0:O.params)??{},pattern:Mh(c.matches),errorInfo:R})}:void 0;return f.reduceRight((k,R,P)=>{let O,V=!1,A=null,D=null;c&&(O=d&&R.route.id?d[R.route.id]:void 0,A=R.route.errorElement||Wh,h&&(m<0&&P===0?(wf("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),V=!0,D=null):m===P&&(V=!0,D=R.route.hydrateFallbackElement||null)));let z=i.concat(f.slice(0,P+1)),J=()=>{let Z;return O?Z=A:V?Z=D:R.route.Component?Z=S.createElement(R.route.Component,null):R.route.element?Z=R.route.element:Z=k,S.createElement(Gh,{match:R,routeContext:{outlet:k,matches:z,isDataRoute:c!=null},children:Z})};return c&&(R.route.ErrorBoundary||R.route.errorElement||P===0)?S.createElement(yf,{location:c.location,revalidation:c.revalidation,component:A,error:O,children:J(),routeContext:{outlet:null,matches:z,isDataRoute:!0},onError:E}):J()},null)}function Ms(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Yh(s){let i=S.useContext(qn);return ye(i,Ms(s)),i}function Xh(s){let i=S.useContext(mo);return ye(i,Ms(s)),i}function bh(s){let i=S.useContext(xt);return ye(i,Ms(s)),i}function Ts(s){let i=bh(s),a=i.matches[i.matches.length-1];return ye(a.route.id,`${s} can only be used on routes that contain a unique "id"`),a.route.id}function qh(){return Ts("useRouteId")}function Jh(){var c;let s=S.useContext(Rs),i=Xh("useRouteError"),a=Ts("useRouteError");return s!==void 0?s:(c=i.errors)==null?void 0:c[a]}function Zh(){let{router:s}=Yh("useNavigate"),i=Ts("useNavigate"),a=S.useRef(!1);return vf(()=>{a.current=!0}),S.useCallback(async(f,d={})=>{Et(a.current,mf),a.current&&(typeof f=="number"?await s.navigate(f):await s.navigate(f,{fromRouteId:i,...d}))},[s,i])}var Kc={};function wf(s,i,a){!i&&!Kc[s]&&(Kc[s]=!0,Et(!1,a))}S.memo(em);function em({routes:s,manifest:i,future:a,state:c,isStatic:f,onError:d}){return gf(s,void 0,{manifest:i,state:c,isStatic:f,onError:d})}function tm({to:s,replace:i,state:a,relative:c}){ye(Jn(),"<Navigate> may be used only in the context of a <Router> component.");let{static:f}=S.useContext(ot);Et(!f,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:d}=S.useContext(xt),{pathname:h}=kt(),m=Ps(),y=ho(s,_s(d),h,c==="path"),E=JSON.stringify(y);return S.useEffect(()=>{m(JSON.parse(E),{replace:i,state:a,relative:c})},[m,E,c,i,a]),null}function sn(s){ye(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function nm({basename:s="/",children:i=null,location:a,navigationType:c="POP",navigator:f,static:d=!1,useTransitions:h}){ye(!Jn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let m=s.replace(/^\/*/,"/"),y=S.useMemo(()=>({basename:m,navigator:f,static:d,useTransitions:h,future:{}}),[m,f,d,h]);typeof a=="string"&&(a=bn(a));let{pathname:E="/",search:k="",hash:R="",state:P=null,key:O="default",mask:V}=a,A=S.useMemo(()=>{let D=jt(E,m);return D==null?null:{location:{pathname:D,search:k,hash:R,state:P,key:O,mask:V},navigationType:c}},[m,E,k,R,P,O,c,V]);return Et(A!=null,`<Router basename="${m}"> is not able to match the URL "${E}${k}${R}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:S.createElement(ot.Provider,{value:y},S.createElement(Wr.Provider,{children:i,value:A}))}function rm({children:s,location:i}){return Hh(Es(s),i)}function Es(s,i=[]){let a=[];return S.Children.forEach(s,(c,f)=>{if(!S.isValidElement(c))return;let d=[...i,f];if(c.type===S.Fragment){a.push.apply(a,Es(c.props.children,d));return}ye(c.type===sn,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ye(!c.props.index||!c.props.children,"An index route cannot have child routes.");let h={id:c.props.id||d.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(h.children=Es(c.props.children,d)),a.push(h)}),a}var so="get",ao="application/x-www-form-urlencoded";function vo(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function lm(s){return vo(s)&&s.tagName.toLowerCase()==="button"}function om(s){return vo(s)&&s.tagName.toLowerCase()==="form"}function im(s){return vo(s)&&s.tagName.toLowerCase()==="input"}function sm(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function am(s,i){return s.button===0&&(!i||i==="_self")&&!sm(s)}var ro=null;function um(){if(ro===null)try{new FormData(document.createElement("form"),0),ro=!1}catch{ro=!0}return ro}var cm=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ys(s){return s!=null&&!cm.has(s)?(Et(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ao}"`),null):s}function fm(s,i){let a,c,f,d,h;if(om(s)){let m=s.getAttribute("action");c=m?jt(m,i):null,a=s.getAttribute("method")||so,f=ys(s.getAttribute("enctype"))||ao,d=new FormData(s)}else if(lm(s)||im(s)&&(s.type==="submit"||s.type==="image")){let m=s.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=s.getAttribute("formaction")||m.getAttribute("action");if(c=y?jt(y,i):null,a=s.getAttribute("formmethod")||m.getAttribute("method")||so,f=ys(s.getAttribute("formenctype"))||ys(m.getAttribute("enctype"))||ao,d=new FormData(m,s),!um()){let{name:E,type:k,value:R}=s;if(k==="image"){let P=E?`${E}.`:"";d.append(`${P}x`,"0"),d.append(`${P}y`,"0")}else E&&d.append(E,R)}}else{if(vo(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a=so,c=null,f=ao,h=s}return d&&f==="text/plain"&&(h=d,d=void 0),{action:c,method:a.toLowerCase(),encType:f,formData:d,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Is(s,i){if(s===!1||s===null||typeof s>"u")throw new Error(i)}function Cf(s,i,a,c){let f=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return a?f.pathname.endsWith("/")?f.pathname=`${f.pathname}_.${c}`:f.pathname=`${f.pathname}.${c}`:f.pathname==="/"?f.pathname=`_root.${c}`:i&&jt(f.pathname,i)==="/"?f.pathname=`${po(i)}/_root.${c}`:f.pathname=`${po(f.pathname)}.${c}`,f}async function dm(s,i){if(s.id in i)return i[s.id];try{let a=await import(s.module);return i[s.id]=a,a}catch(a){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function pm(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function hm(s,i,a){let c=await Promise.all(s.map(async f=>{let d=i.routes[f.route.id];if(d){let h=await dm(d,a);return h.links?h.links():[]}return[]}));return ym(c.flat(1).filter(pm).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function Yc(s,i,a,c,f,d){let h=(y,E)=>a[E]?y.route.id!==a[E].route.id:!0,m=(y,E)=>{var k;return a[E].pathname!==y.pathname||((k=a[E].route.path)==null?void 0:k.endsWith("*"))&&a[E].params["*"]!==y.params["*"]};return d==="assets"?i.filter((y,E)=>h(y,E)||m(y,E)):d==="data"?i.filter((y,E)=>{var R;let k=c.routes[y.route.id];if(!k||!k.hasLoader)return!1;if(h(y,E)||m(y,E))return!0;if(y.route.shouldRevalidate){let P=y.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:((R=a[0])==null?void 0:R.params)||{},nextUrl:new URL(s,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof P=="boolean")return P}return!0}):[]}function mm(s,i,{includeHydrateFallback:a}={}){return vm(s.map(c=>{let f=i.routes[c.route.id];if(!f)return[];let d=[f.module];return f.clientActionModule&&(d=d.concat(f.clientActionModule)),f.clientLoaderModule&&(d=d.concat(f.clientLoaderModule)),a&&f.hydrateFallbackModule&&(d=d.concat(f.hydrateFallbackModule)),f.imports&&(d=d.concat(f.imports)),d}).flat(1))}function vm(s){return[...new Set(s)]}function gm(s){let i={},a=Object.keys(s).sort();for(let c of a)i[c]=s[c];return i}function ym(s,i){let a=new Set;return new Set(i),s.reduce((c,f)=>{let d=JSON.stringify(gm(f));return a.has(d)||(a.add(d),c.push({key:d,link:f})),c},[])}function Ns(){let s=S.useContext(qn);return Is(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function wm(){let s=S.useContext(mo);return Is(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Ls=S.createContext(void 0);Ls.displayName="FrameworkContext";function go(){let s=S.useContext(Ls);return Is(s,"You must render this element inside a <HydratedRouter> element"),s}function Cm(s,i){let a=S.useContext(Ls),[c,f]=S.useState(!1),[d,h]=S.useState(!1),{onFocus:m,onBlur:y,onMouseEnter:E,onMouseLeave:k,onTouchStart:R}=i,P=S.useRef(null);S.useEffect(()=>{if(s==="render"&&h(!0),s==="viewport"){let A=z=>{z.forEach(J=>{h(J.isIntersecting)})},D=new IntersectionObserver(A,{threshold:.5});return P.current&&D.observe(P.current),()=>{D.disconnect()}}},[s]),S.useEffect(()=>{if(c){let A=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(A)}}},[c]);let O=()=>{f(!0)},V=()=>{f(!1),h(!1)};return a?s!=="intent"?[d,P,{}]:[d,P,{onFocus:Vr(m,O),onBlur:Vr(y,V),onMouseEnter:Vr(E,O),onMouseLeave:Vr(k,V),onTouchStart:Vr(R,O)}]:[!1,P,{}]}function Vr(s,i){return a=>{s&&s(a),a.defaultPrevented||i(a)}}function Sm({page:s,...i}){let a=Lh(),{nonce:c}=go(),{router:f}=Ns(),d=S.useMemo(()=>nf(f.routes,s,f.basename),[f.routes,s,f.basename]);return d?(i.nonce==null&&c&&(i={...i,nonce:c}),a?S.createElement(xm,{page:s,matches:d,...i}):S.createElement(km,{page:s,matches:d,...i})):null}function Em(s){let{manifest:i,routeModules:a}=go(),[c,f]=S.useState([]);return S.useEffect(()=>{let d=!1;return hm(s,i,a).then(h=>{d||f(h)}),()=>{d=!0}},[s,i,a]),c}function xm({page:s,matches:i,...a}){let c=kt(),{future:f}=go(),{basename:d}=Ns(),h=S.useMemo(()=>{if(s===c.pathname+c.search+c.hash)return[];let m=Cf(s,d,f.v8_trailingSlashAwareDataRequests,"rsc"),y=!1,E=[];for(let k of i)typeof k.route.shouldRevalidate=="function"?y=!0:E.push(k.route.id);return y&&E.length>0&&m.searchParams.set("_routes",E.join(",")),[m.pathname+m.search]},[d,f.v8_trailingSlashAwareDataRequests,s,c,i]);return S.createElement(S.Fragment,null,h.map(m=>S.createElement("link",{key:m,rel:"prefetch",as:"fetch",href:m,...a})))}function km({page:s,matches:i,...a}){let c=kt(),{future:f,manifest:d,routeModules:h}=go(),{basename:m}=Ns(),{loaderData:y,matches:E}=wm(),k=S.useMemo(()=>Yc(s,i,E,d,c,"data"),[s,i,E,d,c]),R=S.useMemo(()=>Yc(s,i,E,d,c,"assets"),[s,i,E,d,c]),P=S.useMemo(()=>{if(s===c.pathname+c.search+c.hash)return[];let A=new Set,D=!1;if(i.forEach(J=>{var F;let Z=d.routes[J.route.id];!Z||!Z.hasLoader||(!k.some(G=>G.route.id===J.route.id)&&J.route.id in y&&((F=h[J.route.id])!=null&&F.shouldRevalidate)||Z.hasClientLoader?D=!0:A.add(J.route.id))}),A.size===0)return[];let z=Cf(s,m,f.v8_trailingSlashAwareDataRequests,"data");return D&&A.size>0&&z.searchParams.set("_routes",i.filter(J=>A.has(J.route.id)).map(J=>J.route.id).join(",")),[z.pathname+z.search]},[m,f.v8_trailingSlashAwareDataRequests,y,c,d,k,i,s,h]),O=S.useMemo(()=>mm(R,d),[R,d]),V=Em(R);return S.createElement(S.Fragment,null,P.map(A=>S.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...a})),O.map(A=>S.createElement("link",{key:A,rel:"modulepreload",href:A,...a})),V.map(({key:A,link:D})=>S.createElement("link",{key:A,nonce:a.nonce,...D,crossOrigin:D.crossOrigin??a.crossOrigin})))}function _m(...s){return i=>{s.forEach(a=>{typeof a=="function"?a(i):a!=null&&(a.current=i)})}}var Rm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Rm&&(window.__reactRouterVersion="7.18.0")}catch{}function Pm({basename:s,children:i,useTransitions:a,window:c}){let f=S.useRef();f.current==null&&(f.current=lh({window:c,v5Compat:!0}));let d=f.current,[h,m]=S.useState({action:d.action,location:d.location}),y=S.useCallback(E=>{a===!1?m(E):S.startTransition(()=>m(E))},[a]);return S.useLayoutEffect(()=>d.listen(y),[d,y]),S.createElement(nm,{basename:s,children:i,location:h.location,navigationType:h.action,navigator:d,useTransitions:a})}var Sf=S.forwardRef(function({onClick:i,discover:a="render",prefetch:c="none",relative:f,reloadDocument:d,replace:h,mask:m,state:y,target:E,to:k,preventScrollReset:R,viewTransition:P,defaultShouldRevalidate:O,...V},A){let{basename:D,navigator:z,useTransitions:J}=S.useContext(ot),Z=typeof k=="string"&&ks.test(k),F=cf(k,D);k=F.to;let G=Uh(k,{relative:f}),ee=kt(),ie=null;if(m){let Me=ho(m,[],ee.mask?ee.mask.pathname:"/",!0);D!=="/"&&(Me.pathname=Me.pathname==="/"?D:St([D,Me.pathname])),ie=z.createHref(Me)}let[te,$e,Je]=Cm(c,V),It=Nm(k,{replace:h,mask:m,state:y,target:E,preventScrollReset:R,relative:f,viewTransition:P,defaultShouldRevalidate:O,useTransitions:J});function it(Me){i&&i(Me),Me.defaultPrevented||It(Me)}let Be=!(F.isExternal||d),We=S.createElement("a",{...V,...Je,href:(Be?ie:void 0)||F.absoluteURL||G,onClick:Be?it:i,ref:_m(A,$e),target:E,"data-discover":!Z&&a==="render"?"true":void 0});return te&&!Z?S.createElement(S.Fragment,null,We,S.createElement(Sm,{page:G})):We});Sf.displayName="Link";var Mm=S.forwardRef(function({"aria-current":i="page",caseSensitive:a=!1,className:c="",end:f=!1,style:d,to:h,viewTransition:m,children:y,...E},k){let R=Qr(h,{relative:E.relative}),P=kt(),O=S.useContext(mo),{navigator:V,basename:A}=S.useContext(ot),D=O!=null&&Bm(R)&&m===!0,z=V.encodeLocation?V.encodeLocation(R).pathname:R.pathname,J=P.pathname,Z=O&&O.navigation&&O.navigation.location?O.navigation.location.pathname:null;a||(J=J.toLowerCase(),Z=Z?Z.toLowerCase():null,z=z.toLowerCase()),Z&&A&&(Z=jt(Z,A)||Z);const F=z!=="/"&&z.endsWith("/")?z.length-1:z.length;let G=J===z||!f&&J.startsWith(z)&&J.charAt(F)==="/",ee=Z!=null&&(Z===z||!f&&Z.startsWith(z)&&Z.charAt(z.length)==="/"),ie={isActive:G,isPending:ee,isTransitioning:D},te=G?i:void 0,$e;typeof c=="function"?$e=c(ie):$e=[c,G?"active":null,ee?"pending":null,D?"transitioning":null].filter(Boolean).join(" ");let Je=typeof d=="function"?d(ie):d;return S.createElement(Sf,{...E,"aria-current":te,className:$e,ref:k,style:Je,to:h,viewTransition:m},typeof y=="function"?y(ie):y)});Mm.displayName="NavLink";var Tm=S.forwardRef(({discover:s="render",fetcherKey:i,navigate:a,reloadDocument:c,replace:f,state:d,method:h=so,action:m,onSubmit:y,relative:E,preventScrollReset:k,viewTransition:R,defaultShouldRevalidate:P,...O},V)=>{let{useTransitions:A}=S.useContext(ot),D=Fm(),z=Am(m,{relative:E}),J=h.toLowerCase()==="get"?"get":"post",Z=typeof m=="string"&&ks.test(m),F=G=>{if(y&&y(G),G.defaultPrevented)return;G.preventDefault();let ee=G.nativeEvent.submitter,ie=(ee==null?void 0:ee.getAttribute("formmethod"))||h,te=()=>D(ee||G.currentTarget,{fetcherKey:i,method:ie,navigate:a,replace:f,state:d,relative:E,preventScrollReset:k,viewTransition:R,defaultShouldRevalidate:P});A&&a!==!1?S.startTransition(()=>te()):te()};return S.createElement("form",{ref:V,method:J,action:z,onSubmit:c?y:F,...O,"data-discover":!Z&&s==="render"?"true":void 0})});Tm.displayName="Form";function Im(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ef(s){let i=S.useContext(qn);return ye(i,Im(s)),i}function Nm(s,{target:i,replace:a,mask:c,state:f,preventScrollReset:d,relative:h,viewTransition:m,defaultShouldRevalidate:y,useTransitions:E}={}){let k=Ps(),R=kt(),P=Qr(s,{relative:h});return S.useCallback(O=>{if(am(O,i)){O.preventDefault();let V=a!==void 0?a:$r(R)===$r(P),A=()=>k(s,{replace:V,mask:c,state:f,preventScrollReset:d,relative:h,viewTransition:m,defaultShouldRevalidate:y});E?S.startTransition(()=>A()):A()}},[R,k,P,a,c,f,i,s,d,h,m,y,E])}var Lm=0,Dm=()=>`__${String(++Lm)}__`;function Fm(){let{router:s}=Ef("useSubmit"),{basename:i}=S.useContext(ot),a=qh(),c=s.fetch,f=s.navigate;return S.useCallback(async(d,h={})=>{let{action:m,method:y,encType:E,formData:k,body:R}=fm(d,i);if(h.navigate===!1){let P=h.fetcherKey||Dm();await c(P,a,h.action||m,{defaultShouldRevalidate:h.defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:k,body:R,formMethod:h.method||y,formEncType:h.encType||E,flushSync:h.flushSync})}else await f(h.action||m,{defaultShouldRevalidate:h.defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:k,body:R,formMethod:h.method||y,formEncType:h.encType||E,replace:h.replace,state:h.state,fromRouteId:a,flushSync:h.flushSync,viewTransition:h.viewTransition})},[c,f,i,a])}function Am(s,{relative:i}={}){let{basename:a}=S.useContext(ot),c=S.useContext(xt);ye(c,"useFormAction must be used inside a RouteContext");let[f]=c.matches.slice(-1),d={...Qr(s||".",{relative:i})},h=kt();if(s==null){d.search=h.search;let m=new URLSearchParams(d.search),y=m.getAll("index");if(y.some(k=>k==="")){m.delete("index"),y.filter(R=>R).forEach(R=>m.append("index",R));let k=m.toString();d.search=k?`?${k}`:""}}return(!s||s===".")&&f.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(d.pathname=d.pathname==="/"?a:St([a,d.pathname])),$r(d)}function Bm(s,{relative:i}={}){let a=S.useContext(pf);ye(a!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Ef("useViewTransitionState"),f=Qr(s,{relative:i});if(!a.isTransitioning)return!1;let d=jt(a.currentLocation.pathname,c)||a.currentLocation.pathname,h=jt(a.nextLocation.pathname,c)||a.nextLocation.pathname;return fo(f.pathname,h)!=null||fo(f.pathname,d)!=null}const zm="modulepreload",Om=function(s){return"/Tang-Space/"+s},Xc={},Zn=function(i,a,c){let f=Promise.resolve();if(a&&a.length>0){let h=function(E){return Promise.all(E.map(k=>Promise.resolve(k).then(R=>({status:"fulfilled",value:R}),R=>({status:"rejected",reason:R}))))};document.getElementsByTagName("link");const m=document.querySelector("meta[property=csp-nonce]"),y=(m==null?void 0:m.nonce)||(m==null?void 0:m.getAttribute("nonce"));f=h(a.map(E=>{if(E=Om(E),E in Xc)return;Xc[E]=!0;const k=E.endsWith(".css"),R=k?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${E}"]${R}`))return;const P=document.createElement("link");if(P.rel=k?"stylesheet":zm,k||(P.as="script"),P.crossOrigin="",P.href=E,y&&P.setAttribute("nonce",y),document.head.appendChild(P),k)return new Promise((O,V)=>{P.addEventListener("load",O),P.addEventListener("error",()=>V(new Error(`Unable to preload CSS for ${E}`)))})}))}function d(h){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=h,window.dispatchEvent(m),!m.defaultPrevented)throw h}return f.then(h=>{for(const m of h||[])m.status==="rejected"&&d(m.reason);return i().catch(d)})},Um=`---
id: ai-agent-engineering
type: tech
title: AI Agent 工程化实践：从 Demo 到系统
date: 2026.06.24
summary: 记录一个 AI 应用从想法到可用系统中遇到的问题、约束和取舍。技术不是做出来就结束，而是要能长期运行。
tags: [AI, Backend, System Design]
featured: true
---

记录一个 AI 应用从想法到可用系统中遇到的问题、约束和取舍。

技术不是做出来就结束，而是要能长期运行。从 Demo 到系统之间，隔着的不是更多的代码，而是对边界的清醒、对失败的预设、对演化的留白。

> 工程化的本质，是把「能跑」变成「能一直跑」。
`,jm=`---
id: first-note-about-this-site
type: thought
title: 这个网站会慢慢长出来
date: 2026.06.24
summary: 我希望这里不只是简历，也像一个长期生长的地方：记录工程，也记录生活里的瞬间。
tags: [随想, 生活]
---

我希望这里不只是简历，也像一个长期生长的地方：记录工程，也记录生活里的瞬间。

不追求完整，只追求真实。它会慢慢长出来。
`,Vm=`---
id: roce-to-infiniband
type: tech
title: 从 RoCE 到 InfiniBand：AI 训练网络的另一套逻辑
date: 2026.07.01
summary: 从一个懂 RoCE 的工程师视角，看 InfiniBand 到底换了一套什么逻辑。不是术语替换，而是工程关注点的迁移。
tags: [RoCE, InfiniBand, AI 训练, 网络, RDMA]
featured: true
images: [tech/roce-to-infiniband.jpg]
---
InfiniBand (简称 IB) 是一种高性能、低延迟的网络技术，广泛应用于 HPC（高性能计算）和 AI 训练场景中。对于已经熟悉 RoCE（RDMA over Converged Ethernet）的工程师来说，理解 IB 的逻辑，有助于更好地应对不同网络环境下的性能优化和故障排查。

RoCE 的核心逻辑是：在以太网上，尽量跑出接近无损、低延迟、高吞吐的 RDMA 网络。

InfiniBand 的核心逻辑是：直接构建一张面向 HPC / AI 集合通信的低延迟、高带宽、原生无损 Fabric。

这就是两者最根本的差别。

- **RoCE** 是把以太网"改造成"适合 RDMA 的网络。
- **InfiniBand** 是从设计之初就为 RDMA 和高性能互联服务的网络。

这个系列文章准备把 IB 系统性的讲一讲。从一个懂 RoCE 的工程师视角，看看 InfiniBand 到底换了一套什么逻辑。

## 01 为什么懂 RoCE 的人，反而更应该学 IB？

"我已经懂 RoCE 了，IB 应该也差不多吧？"这个判断，只对了一半。

对的地方在于：RoCE 和 IB 都服务于 RDMA。都希望绕过传统 TCP/IP 协议栈。都希望降低 CPU 参与度。都希望让 GPU、NIC、网络之间的数据路径更短。都被 NCCL、MPI、AI 训练框架大量使用。

但错的地方在于：它们对"网络应该怎么工作"的理解并不一样。

RoCE 依然运行在以太网上。你要关心 VLAN、DSCP、ECMP、PFC、ECN、队列映射、buffer、水线、交换机 QoS。因为底层还是以太网。

而 InfiniBand 更像是一张独立的高性能互联 Fabric。你要关心 Subnet Manager、LID、P_Key、SL、VL、Credit、Path Record、Fabric 拓扑、端口状态、链路协商、路由计算。

这不是术语替换。而是工程关注点发生了迁移。

在 RoCE 里，你经常问：

- "这个包有没有打 DSCP？"
- "交换机 trust L2 还是 L3？"
- "PG 和 TC 映射对不对？"
- "PFC 有没有触发？"
- "ECN 阈值是不是太高？"
- "DCQCN 是否正常降速？"

到了 IB，你会更多问：

- "Subnet Manager 是否正常？"
- "端口是否被正确纳入 Fabric？"
- "LID 是否分配正确？"
- "路径是否合理？"
- "SL/VL 映射是否符合预期？"
- "是否存在拥塞热点？"
- "是否启用了自适应路由或 SHARP？"

学习 IB，不是为了否定 RoCE，而是为了理解 AI 训练网络的另一种工程范式。

对于做 AI 训练集群的人来说，这非常重要。因为同样是跑 NCCL AllReduce，同样是 GPU 之间同步梯度，底层网络逻辑不同，排障方法、设计方法、监控方法都会不同。

## 02 RoCE 的本质

要理解 IB，先要把 RoCE 的本质说清楚。

RoCE 不是普通以太网。RoCE 是把 RDMA 流量封装在以太网上跑。如果是 RoCEv2，它会跑在 UDP/IP 之上。

这带来一个好处：可以复用以太网生态——交换机成熟、布线成熟、运维人员熟悉、IP 路由能力成熟、可以和数据中心现有架构结合。

但也带来一个根本问题：以太网原生不是为无损 RDMA 设计的。

传统以太网允许丢包。TCP 可以重传。上层协议可以容忍排队、抖动、丢包恢复。但 RDMA 不太喜欢这种模式。

因为 RDMA 的目标是低延迟、高吞吐、少 CPU 参与。如果网络频繁丢包、重传、排队，性能会明显受影响。

所以 RoCE 工程实践中，才会引入一整套机制：

- **PFC** 保证指定优先级尽量不丢包
- **ECN** 提前标记拥塞
- **CNP** 把拥塞反馈给发送端
- **DCQCN** 根据反馈调节发送速率
- **DSCP / PCP** 把流量映射到正确队列
- **PG / TC / Buffer** 控制入口和出口资源
- **ETS / QoS** 控制不同业务之间的带宽关系

这些东西不是为了"好看"。它们是在弥补一个底层事实：以太网不是天然无损网络，但 RDMA 需要接近无损的行为。

RoCE 的难点，不在 RDMA 本身，而在于你要把一张本来允许丢包的以太网，调成适合 RDMA 的训练网络。

这也是为什么很多 RoCE 问题看起来很绕。链路是 UP 的。IP 是通的。ping 是通的。iperf3 也能跑。但一跑 \`ib_write_bw\` 或 NCCL，就不稳定。因为普通 IP 网络通，不代表 RoCE 工程链路健康。

RoCE 需要的是端到端一致性：端侧打标要对、交换机 trust 要对、优先级映射要对、PFC 要对、ECN 阈值要对、DCQCN 要能反馈、Buffer 要能承受突发、路由要避免热点。少一个环节，都可能让训练抖起来。

## 03 InfiniBand 的本质

第一次接触 IB 时，会下意识把它类比成：

- "更快的以太网？"
- "专用版 RoCE？"
- "没有 IP 的 RDMA 网络？"
- "更贵但更省心的网络？"

这些说法都不够准确。

InfiniBand 不是以太网的加强版。它是一套独立的高性能互联体系。它有自己的链路层。有自己的寻址方式。有自己的管理模型。有自己的路由计算。有自己的拥塞控制与流控机制。有自己的 Fabric 管理方式。

在 IB 里，节点不是简单通过 MAC/IP 来通信。端口加入 Fabric 后，会由 Subnet Manager 进行管理。Subnet Manager 会发现拓扑、给端口分配 LID、计算路径、维护 Fabric 状态、提供路径查询服务。

也就是说，IB 网络不是每台设备自己"随便转发"。它更强调 Fabric 级别的统一管理。

这和以太网的感觉很不一样。在以太网里，交换机可以独立学习 MAC，三层可以根据路由表转发，ECMP 可以根据 hash 分流。在 IB 里，Fabric 的建立和路径管理更依赖 Subnet Manager。

这也是很多人刚接触 IB 时不适应的地方：

- 为什么要有 SM？
- 为什么没有 SM，端口可能 Active 不起来？
- 为什么不是配个 IP 就完事？
- 为什么看问题要看 LID、Port GUID、Fabric 拓扑？

原因就在这里。IB 的核心不是"把包从 A 转到 B"，而是先构建一张可管理、可计算、可优化的高性能 Fabric。

这就是 IB 的另一套逻辑：它不是在已有以太网上补 RDMA 能力。而是把网络本身设计成 RDMA 和集合通信友好的基础设施。

## 04 RoCE 看 IP 和优先级，IB 看 LID、SL、VL 和路径

RoCE 工程师很熟悉 IP 逻辑：源 IP、目的 IP、UDP 端口、DSCP、ECN bit、VLAN PCP、ECMP hash、路由表。这些东西决定了 RoCEv2 流量如何在以太网里转发和拥塞反馈。

但在 IB 里，思维要换。IB 本地子网内，核心地址通常不是 IP，而是 **LID**。LID 可以理解成 IB Fabric 内用于转发的本地标识。端口加入 Fabric 后，由 Subnet Manager 分配 LID。通信路径也不是简单靠 IP 路由决定，而是通过 IB 的路径管理机制确定。

除了 LID，还要理解几个关键概念：

- **P_Key**：可以理解成 IB 里的分区隔离机制，有点类似"谁能和谁通信"的权限边界。
- **SL**：Service Level，表示服务等级，用来影响流量分类。
- **VL**：Virtual Lane，虚拟通道，用来在链路上隔离不同类型流量，避免互相阻塞。
- **Credit**：信用式流控，发送端只有在接收端有可用 buffer 信用时才继续发送。

如果用 RoCE 的话类比：

- RoCE 里你关心 DSCP/PCP 怎么进队列。IB 里你关心 SL 如何映射到 VL。
- RoCE 里你关心 PFC pause 会不会挡住同一优先级流量。IB 里你关心 VL 和 credit 是否能让不同流量更好隔离。
- RoCE 里你关心 IP ECMP 会不会 hash 不均。IB 里你关心 SM 算出来的路径是否均衡。

从 RoCE 到 IB，最重要的一步，是从"IP + QoS + 队列"的思维，切换到"LID + Fabric + 路径 + VL"的思维。

这一步不切换，很多 IB 问题就会看不懂。你会忍不住问：

- "这个 IB 网络的网关在哪里？"
- "为什么不看 ARP？"
- "为什么没有像 RoCE 那样配 DSCP？"
- "为什么重点都在 SM 和 LID 上？"

因为它本来就不是那套逻辑。

## 05 为什么 IB 不需要像 RoCE 那样依赖 PFC？

这是很多 RoCE 工程师最关心的问题。

在 RoCE 里，PFC 几乎是绕不开的。因为 RDMA 流量不能像普通 TCP 那样随便丢包重传。所以我们会给 RoCE 流量指定 lossless priority。当交换机入口 buffer 到达 XOFF 门限，就发送 PFC pause，让上游暂停对应优先级流量。

但 PFC 也有副作用。它是比较"硬"的机制：

- 一旦 pause 传播不合理，就可能造成 Head-of-Line Blocking。
- 如果拥塞没有被提前控制，PFC 可能频繁触发。
- 如果配置错误，还可能引发 pause storm。
- 如果多个业务共用优先级，还可能互相影响。

所以 RoCE 的最佳实践通常不是让 PFC 天天工作，而是：ECN/DCQCN 提前控速、PFC 只做最后保护、Buffer 和水线要精心设计、优先级映射要端到端一致。

IB 的思路不同。IB 是 **credit-based flow control**。简单说：发送端不是想发就无限发。它要知道对端还有多少可接收 buffer。只有拿到 credit，才继续发送。没有 credit，就不能继续压过去。

这和 PFC 的感觉不一样：

- **PFC** 是队列快撑不住了，向上游发 pause。
- **IB credit** 是发送前就受 credit 约束，天然避免把对端 buffer 打爆。

RoCE 更像是"以太网快拥塞了，赶紧刹车"。IB 更像是"没有接收信用，就不允许你继续猛踩油门"。

这就是为什么 IB 通常不需要像 RoCE 那样围绕 PFC 做大量配置。

但注意：这不代表 IB 没有拥塞问题。只要是多对一、多打一、同步通信，拥塞仍然会发生。只不过 IB 处理拥塞和无损的底层机制，与 RoCE 不一样。

## 06 IB 不是没有拥塞，只是拥塞表现和治理方式不同

有些人会误以为："IB 是无损网络，所以不会拥塞。"这是错误的。

**无损不等于无拥塞。** 无损只是尽量避免丢包。但队列仍然会堆积、路径仍然会热点、多打一仍然会出现、慢节点仍然会拖累训练、集合通信仍然会被尾延迟放大。

AI 训练里最典型的问题，依然是同步流量。比如 AllReduce。当很多 GPU 同时交换梯度数据，流量会按照 NCCL 的算法和拓扑形成规律性通信。在 Ring AllReduce 中，每个 rank 会和相邻 rank 交换数据。在 Tree 或分层算法中，某些阶段可能出现汇聚和分发。

在大规模集群里，流量会跨服务器、跨交换机、跨层级。如果路径规划不合理，或者某些链路成为热点，就会出现拥塞。

在 RoCE 里，你可能看到：ECN 标记增加、CNP 增加、PFC pause 增加、交换机队列堆积、某些端口利用率异常高。

在 IB 里，你会更关注：Fabric 路径是否均衡、VL 是否发生阻塞、端口是否出现等待、链路错误计数是否异常、是否存在拥塞热点、是否需要 adaptive routing、是否需要 SHARP 做集合通信卸载。

IB 解决的是"更适合高性能互联"的问题，不是让训练流量从此没有拥塞。

工程上必须记住：只要有同步、只要有多打一、只要有慢节点、只要有拓扑不均、只要有带宽收敛，拥塞就可能发生。IB 不是魔法。它只是把很多原本需要在以太网上拼起来的能力，变成了 Fabric 内更原生的能力。

## 07 NCCL 看起来一样，底层路径完全不同

对于上层训练框架来说，RoCE 和 IB 可能看起来差别不大。PyTorch 还是 PyTorch、NCCL 还是 NCCL、all_reduce 还是 all_reduce、GPU 还是在同步梯度。但底层路径不一样。

在 RoCE 场景中，NCCL 通过 RDMA 网卡，把数据封装进 RoCE 流量，然后经过以太网交换网络。路径里会涉及：GID Index、RoCEv1 / RoCEv2、IP 路由、DSCP/ECN、PFC、DCQCN、以太网 ECMP、交换机 QoS 队列。

在 IB 场景中，NCCL 同样使用 RDMA 能力，但底层走 IB Fabric。路径里会涉及：HCA、LID、Subnet Manager、P_Key、SL/VL、Credit、Fabric 路由、IB 端口状态。

这就导致排障方法完全不同。

**RoCE 下 NCCL 慢，你可能查：** NCCL 是否选错网卡？GID Index 是否正确？DSCP 是否打上？PFC 是否启用？ECN 是否标记？CNP 是否反馈？交换机队列是否拥塞？路由 hash 是否不均？

**IB 下 NCCL 慢，你可能查：** HCA 是否被 NCCL 正确识别？端口是否 Active？SM 是否正常？LID 是否分配正常？路径是否均衡？是否跨了不该跨的层级？是否存在慢链路或错误端口？是否开启了合适的路由策略？

NCCL 层看起来都是 AllReduce，但网络层已经从"以太网 QoS 排障"切换成"Fabric 路径排障"。

这点非常关键。因为很多工程师把 RoCE 的排障习惯直接带到 IB。结果发现：没有 DSCP、没有 PFC 配置、没有熟悉的以太网队列、也不是看 ARP、MAC 学习、IP 路由。于是就觉得 IB 难。

其实不是 IB 难。是你还在用 RoCE 的眼睛看 IB。

## 08 AllReduce 在 RoCE 和 IB 上，真正考验的都是系统同步效率

无论 RoCE 还是 IB，到了 AI 训练里，最终都绕不开 AllReduce。

AllReduce 的本质，不是简单"发数据"。它是所有 GPU 之间完成一次聚合，然后让每个 GPU 拿到一致结果。这意味着：

- 一个 rank 慢，大家等
- 一条路径慢，整体等
- 一个节点抖，step time 抖
- 一个队列拥塞，GPU 利用率下降
- 一个慢尾被放大，整个训练效率下降

所以训练网络最怕的不是"平均值不好看"。**最怕的是尾部抖动。**

**RoCE 上，尾部抖动可能来自：** PFC 频繁 pause、ECN 阈值不合理、DCQCN 降速震荡、交换机 buffer 设计不合理、ECMP hash 导致某些路径过热、多轨没有真正打散、某些网卡流量不均。

**IB 上，尾部抖动可能来自：** Fabric 路径不均衡、某些链路成为热点、某个 HCA 或端口异常、某些 VL 阻塞、某个节点 PCIe / NUMA 路径差、SM 路由策略不适合当前通信模式、集合通信没有充分利用拓扑优势。

AllReduce 不关心你底层叫 RoCE 还是 IB。它只关心所有 GPU 能不能在同一个节奏里完成同步。

这也是为什么训练网络设计必须从通信模式反推网络架构。不是交换机端口够就行、不是链路带宽高就行、不是单条链路测试快就行。要看：NCCL 构出来的通信图是什么、数据有没有跨 NUMA、GPU 到 NIC 是否就近、流量有没有跨 Spine、多轨有没有均衡、慢节点在哪里、队列是否堆积、step time 是否稳定。

**训练网络的本质，是同步系统。同步系统最怕慢尾。**

## 09 从 Incast 看两者差异

Incast 是 AI 训练网络里非常典型的问题。很多发送端，几乎同时打向一个接收端或一个出口方向。在传统业务里，流量往往是异步的、分散的。但在 AI 训练里，集合通信很容易制造同步突发。尤其在 AllReduce、AllGather、ReduceScatter 的某些阶段，多个 GPU 或多个节点可能在同一时间形成汇聚。

**RoCE 里，Incast 的治理重点通常是：** 队列能不能承受突发、ECN 能不能提前标记、DCQCN 能不能及时降速、PFC 会不会频繁触发、buffer 水线是否合理、ECMP 是否把流量打散、多轨是否均衡。

也就是说，RoCE 更像是在以太网队列和拥塞反馈层面做精细治理。

**IB 里，Incast 仍然存在。** 但治理重点会更多放在 Fabric 层：路径是否均衡、上行是否有热点、Fat-Tree 是否设计合理、路由策略是否适合集合通信、是否启用 adaptive routing、是否用 SHARP 减少主机间聚合压力、是否存在某些链路长期过载。

RoCE 处理 Incast，更像是在"队列里控拥塞"。IB 处理 Incast，更强调在"Fabric 里控路径和汇聚"。

这不是说 IB 不看队列。而是工程抓手不同。RoCE 工程师经常围绕交换机队列和 PFC/ECN 调参。IB 工程师更强调 Fabric 拓扑、路径、路由、端口状态和集合通信卸载。这个差异，决定了两者排障方法不一样。

## 10 为什么 IB 常被认为更适合大规模训练？

在大规模 AI 训练里，IB 经常被认为更适合。原因不是一句"IB 更快"就能解释。更准确地说，是 IB 在几个方面更贴近训练集群的需求。

1. **IB 是原生高性能互联。** 它不是在通用以太网上补 RDMA 能力，而是整个体系都围绕低延迟、高吞吐、无损、Fabric 管理来设计。
2. **IB 的 Fabric 管理更集中。** Subnet Manager 可以统一发现拓扑、计算路径、管理状态。对大规模训练网络来说，这有利于形成更可控的 Fabric。
3. **IB 的 credit-based flow control 更适合无损通信。** 它减少了 RoCE 中围绕 PFC 配置、队列水线、pause 传播等问题的复杂度。
4. **IB 生态里有面向集合通信的优化能力。** 比如 SHARP，可以把部分集合通信中的聚合操作卸载到网络设备中，减少主机之间来回搬数据的压力。
5. **IB 与 HPC / AI 训练生态结合更深。** 很多大规模训练、HPC、超算场景，本身就长期使用 IB。

但这不意味着 IB 一定适合所有场景。IB 也有自己的门槛：设备成本可能更高、运维体系与以太网不同、团队需要理解 Fabric 管理、与现有数据中心网络融合不如以太网自然、故障排查需要新的工具链和经验、生态更专用不像以太网那样通用。

IB 的优势不是"参数更好看"，而是它把大规模同步通信所需要的很多能力，做进了 Fabric 体系里。这就是为什么在大规模训练场景中，IB 很有吸引力。

但如果你的场景是中小规模训练、推理服务、成本敏感、团队以以太网运维为主，RoCE 仍然非常有价值。

**选 RoCE 还是 IB，不是信仰问题。是场景问题。**

## 11 RoCE 并不低端，IB 也不是万能

很多讨论容易走向极端。一种观点是："RoCE 都是凑合，真正训练必须 IB。"另一种观点是："IB 太贵太封闭，以太网一定能替代。"这两种都不够工程化。

**RoCE 的优势很明显：** 以太网生态成熟、设备选择多、团队熟悉度高、和现有数据中心融合容易、IP 网络能力强、成本和灵活性更好、适合很多中大规模 AI 集群。

**但 RoCE 的挑战也很明显：** 对 QoS 一致性要求高、对 PFC/ECN/DCQCN 调优要求高、对 buffer 和水线设计敏感、对多轨、ECMP、队列映射要求高、跨厂商一致性和排障复杂度更高。

**IB 的优势也很明显：** 原生高性能 Fabric、无损通信机制更原生、Fabric 管理体系完整、更适合大规模同步通信、在 HPC / AI 训练中验证充分、集合通信优化能力强。

**但 IB 也不是万能：** 成本可能更高、团队学习曲线更陡、与传统 IP 网络不是一套体系、运维工具链不同、业务网络、存储网络、训练网络融合方式要重新设计。

RoCE 和 IB 不是谁取代谁，而是两套不同的工程取舍。

真正专业的选型，不是问："哪个更高级？"而是问：

- 你的训练规模多大？
- 模型通信占比多高？
- 预算是否足够？
- 团队是否会运维 IB？
- 现有网络是否以以太网为主？
- 是否需要和存储、业务、云网络深度融合？
- 未来是否扩到数百卡、千卡、万卡？
- 是否需要极致训练效率？

这些问题回答清楚，选择才有意义。

## 12 工程师从 RoCE 转向 IB，应该先学什么？

如果你已经懂 RoCE，再学 IB，不建议从协议手册第一页开始。那样很容易被术语淹没。更好的路径是按工程问题来学。

**第一步，先理解 IB Fabric 的基本组成：** HCA 是什么、IB Switch 是什么、Subnet Manager 是什么、Port GUID、LID、P_Key 分别解决什么问题、端口状态从 Down 到 Active 发生了什么。

**第二步，理解 IB 的寻址和路径：** 为什么要分配 LID、路径由谁计算、Path Record 是什么、多路径如何实现、Fat-Tree 中路径如何均衡。

**第三步，理解 IB 的流控与拥塞：** Credit-based flow control 如何工作、SL/VL 如何隔离流量、为什么无损不等于无拥塞、热点链路如何发现、adaptive routing 解决什么问题。

**第四步，理解 NCCL 如何使用 IB：** NCCL 如何发现 HCA、多 HCA 如何参与通信、GPU-NIC 拓扑如何影响性能、AllReduce 如何映射到物理路径、为什么 NCCL tests 正常不代表真实训练一定快。

**第五步，理解 IB 运维工具：** 如何看端口状态、如何看 Fabric 拓扑、如何看 LID、如何看链路错误、如何看带宽和延迟、如何定位慢节点和热点路径。

学 IB 最好的方式，不是背协议名词，而是拿一条 AllReduce 路径，把它从 GPU 一直追到 Fabric。

这和学 RoCE 是一样的。真正有价值的学习，不是记住概念。而是知道：数据从哪里来、经过哪里、在哪里排队、在哪里等待、在哪里被控制、在哪里可能变慢、如何证明它真的变慢。

## 13 什么时候优先 RoCE？什么时候优先 IB？

最后落到工程选型。

**什么时候优先考虑 RoCE？**

- 如果你的集群规模不是特别大。
- 如果团队以以太网运维为主。
- 如果需要和现有数据中心网络融合。
- 如果预算相对敏感。
- 如果业务包含训练、推理、存储、通用网络混合。
- 如果你有能力把 PFC/ECN/DCQCN/QoS 做扎实。
- 如果你希望网络架构更开放、更灵活。

RoCE 很值得考虑。

**什么时候优先考虑 IB？**

- 如果你是大规模训练。
- 如果 AllReduce 等集合通信占比很高。
- 如果训练效率直接决定项目成本。
- 如果集群要上百卡、千卡甚至更大规模。
- 如果你希望获得更原生的高性能 Fabric。
- 如果团队能接受 IB 运维体系。
- 如果预算支持。
- 如果需要 SHARP、自适应路由等集合通信优化能力。

IB 更有吸引力。

但有一点必须强调：**不管选 RoCE 还是 IB，都不能只看单条链路带宽。** AI 训练网络真正要看的，是端到端训练效率：GPU 利用率、MFU、step time、NCCL AllReduce 带宽、P99 通信延迟、慢节点、链路热点、扩展效率、故障恢复能力。

RoCE 和 IB 的最终比较，不应该停留在网络参数表，而应该落到训练任务的 step time 和扩展效率上。

如果 RoCE 调得好，在很多场景完全可以支撑高性能训练。如果 IB 设计不好，也可能出现热点、慢尾、链路异常和训练抖动。

**工程世界里，没有自动正确的网络。只有被正确设计、正确验证、正确运维的网络。**

## 14 从 RoCE 到 IB，本质是从"调以太网"到"管 Fabric"

RoCE 的难点，是把以太网调成适合 RDMA 的网络。InfiniBand 的难点，是理解并管理一张原生高性能 Fabric。

一个更偏以太网工程。一个更偏 Fabric 工程。

**RoCE 工程师最熟悉的是：** 优先级队列、PFC、ECN、DCQCN、Buffer、ECMP、DSCP、PCP。

**IB 工程师必须补上的，是：** Subnet Manager、LID、P_Key、SL、VL、Credit、Path、Fabric 拓扑、端口状态、集合通信优化。

这两套体系，最终都会服务于同一个目标：让 GPU 之间的数据同步更快、更稳、更可控。

因为在 AI 训练里，GPU 算得再快，如果同步跟不上，也会等。**网络不是配角。网络就是训练效率的一部分。**

从 RoCE 到 InfiniBand，不是从低级到高级。而是从一套工程逻辑，进入另一套工程逻辑。

真正的 AI 网络工程师，不应该只会说："RoCE 怎么配。"或者"IB 性能更好。"而应该能说清楚：

- 为什么这个规模适合 RoCE
- 为什么那个规模适合 IB
- RoCE 的风险在哪里
- IB 的门槛在哪里
- NCCL 的通信路径在哪里
- AllReduce 的慢尾在哪里
- Incast 的热点在哪里
- 训练 step time 为什么会被网络拖慢
- 以及如何用工具和数据证明这一切

这才是从 RoCE 走向 InfiniBand 的真正价值。不是多认识几个协议名词。而是多了一套理解 AI 训练网络的底层逻辑。
`,Hm=`---
id: vue3-vite-notes
type: tech
title: Vue3 + Vite 学习笔记：从环境搭建到路由管理
date: 2025.02.17
summary: 一份完整的 Vue3 + Vite 入门实践笔记：从 Node.js 环境搭建、项目目录结构，到响应式（ref/reactive）、常用指令（v-model/v-if/v-for）、计算属性与监听、组件通信（props/emit/slot/provide-inject）、生命周期，再到 Pinia 状态管理和 Vue Router 路由配置。
tags: [Vue3, Vite, 前端, Pinia, Vue Router]
---

# 安装环境

## 1.下载 nodejs

[Node.js — Download Node.js®](https://nodejs.org/zh-cn/download)

v18 版本

## 2.安装 CNPM

\`\`\`bash
npm install cnpm -g
\`\`\`

## 3.安装 Vue

\`\`\`bash
cnpm init vue@latest
\`\`\`

![Vue 项目初始化](/Tang-Space/assets/img/tech/vue3-notes-01-vue-init.png)

## 4.安装 vite

\`\`\`bash
#最好进入桌面进行安装
cd Desktop
cnpm create vite@latest
npm create vite@4.3.2
\`\`\`

![Vite 项目初始化](/Tang-Space/assets/img/tech/vue3-notes-02-vite.png)

然后使用 vs 打开 vite

# Vue3+Vite

## 目录结构介绍

1. node_modules：存放项目依赖的其他模块
2. public：用于存放静态文件，可以使用 /xxx 进行访问，一般把第三方文件放在这个目录
3. src：项目源代码目录
    1. asset：也是用来存放静态文件，比如字体，图片，icon 等
    2. components：用于存放组件，一个个 vue 文件
    3. App.vue：项目的根组件，index.html 通过导入 main.js 实现 App.vue 和 index.html 的内容绑定，同时其他组件也通过 app.vue 进行导入
    4. main.js：程序的入口文件，可以实现 app.vue 和 index.html 绑定
    5. style.css：全局样式表，也是通过 main.js 导入
4. index.html：网站的入口
5. package.json：项目的描述文件，依赖的包，版本
6. 没有被列出来的目录：
    1. src/
        1. router：vue 路由配置目录
        2. store：状态存储
        3. views：页面组件
        4. utils：封装的工具类
        5. config：程序配置
        6. api：后端接口配置

## ref 与 reactive 区别

\`\`\`vue
//ref reactive区别
    //ref:一般用于定义简单的响应式数据
    //reactive：一般用于创建一个响应式对象
    const count = ref(0)
    const name = ref("dk")
    name.value="try"
    console.log(name)
    //定义一个对象
    const info = reactive({
    name:"try",
    age:19,
    address:"xxx"
    })
    console.log("默认的info",info)
    info.age=40
    console.log("修改后的info",info)

    <template>


    <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>用户信息:{{ info.name }}</p>
    </div>
    </template>
\`\`\`

## 定义只读数据

\`\`\`vue
//只读数据，不能修改
    const readOnlyData = readonly("这是一个只读数据")
    console.log(readOnlyData)
\`\`\`

## v-on

\`\`\`vue
<!-- v-开头 -->
<!-- 语法糖：@:v-on  :v-model -->
<div class="card">
  <button type="button" @click="plus1(10)">count is {{ count }}</button>
    或者
      <button type="button" v-on:="plus1(10)">count is {{ count }}</button>
\`\`\`

## v-model

\`v-model\` 是 Vue 中非常常用的指令，用于在表单元素（如 \`<input>\`, \`<textarea>\`, \`<select>\` 等）和组件之间创建双向数据绑定。它可以简化表单数据的管理，并使数据和视图保持同步。

\`\`\`vue
const plus1=() ={
  // count.value++
  count.value+=inputValue.value
  }

  // 与v-model进行双向绑定
  let inputValue = ref(0)

  <\/script>

  <template>

  <!-- v-开头 -->
  <!-- 语法糖：@:v-on  :v-model -->
  <div class="card">
  <!-- v-model:用来实现数据的双向绑定  输入的值与相应式的数据进行绑定-->
  <!-- 修饰符
  .number:把value转成number类型
  .trim:去除左右两边的空格
  .lazy:当数据失去焦点或者回车时才会更新
  -->
  <input v-model.number="inputValue" placeholder="请输入你要加的值">
  <button type="button" @click="plus1()">count is {{ count }}</button>
  <p>用户信息:{{ name }}</p>
  <p>用户信息:{{ info.name }}</p>

  </div>
  </template>
\`\`\`

## v-show

v-show 可以帮助我们实现很简单的实验元素的显示和隐藏

\`\`\`vue
let show = ref(true)
  const display=()=>{
  //true->flase ,false-<true
  show.value=!show.value


  <!-- v-show 可以帮助我们实现很简单的实验元素的显示和隐藏-->
  <h1 v-show="show">
  这是一个标题
  </h1>
  <button type="button" @click="display()">{{show?"隐藏":"显示"}}</button>
\`\`\`

## v-if-else

\`\`\`vue
<!-- v-if
根据表达式的真假直接去操作DOM，而v-show只是操作元素的display属性
v-if开销比较大，v-show开销比较小 
-->
<!-- 
切换比较频繁的场景用show，不频繁用if，复杂逻辑用if
-->
<!-- <h1 v-if="show">
这是一个v-if控制的标题
</h1>
<h2 v-else>这是一个v-else的标题</h2>
<button type="button" @click="display()">{{show?"隐藏":"显示"}}</button> -->
\`\`\`

## v-for

\`\`\`vue
//v-for
    let menu = reactive(["鸭子","烧鹅","里脊"])
    let menuPrice=reactive([
    {
    name:"鸭子",
    price:10
    },
    {
    name:"烧鹅",
    price:20
    },
    {
    name:"里脊",
    price:30
    },
    ])

    let info2=reactive({
    name:"唐睿阳",
    age:21,
    address:"成都"
    })

    let newItem= ref()
    const submitItem=()=>{
    menu.push(newItem.value)
    newItem.value=""
    }


  <!-- v-for
  用来遍历数据，然后渲染页面的指令
  -->
  <!-- 遍历数组的数据 -->
                    <span>今天的菜单有：</span>
                      <ul>
                      <li v-for="(item,index) in menu">
                      {{index}}-{{ item }}
                      </li>
                      </ul>
                      <input v-model="newItem" placeholder="请输入菜名">
                      <button type="button" @click="submitItem()">提交</button>
                      <!-- 遍历数组嵌套对象的数据 -->
                      <span>今天的菜单和价格是：</span>
                      <ul>
                      <li v-for="(item,index) in menuPrice">
                      {{index}}-菜品：{{ item.name }} 价格：{{ item.price }}
  </li>
    </ul>
    <!-- 遍历对象的数据 -->
    <span>你的信息如下</span>
    <ul>
    <li v-for="(value,key) in info2">
    {{ key }}:{{ value }}
  </li>
    </ul>
\`\`\`

## method 与 computed

\`\`\`vue
//methods:一种定义方法的方式，这些方法可以被模板中的某个地址调用，每次调用都会执行方法
//里面的代码，然后处理业务逻辑，处理事件
//computed:一种定义计算属性的方法，根据依赖的数据动态计算并返回一个新值
//computed是具有缓存性质的，只有当依赖的数据发生变化时才会重新计算
\`\`\`

### method（方法属性）

\`\`\`vue
let price=ref()
let counts=ref()
let total=ref()
//定义一个方法
let costTotal=()=>{
  total.value=price.value*counts.value
}


<input placeholder="请输入价格" v-model.number="price">
  <input placeholder="请输入数量" v-model.number="counts">
  <button type="button" @click="costTotal">计算</button>
  {{ total }}
\`\`\`

![method 计算结果](/Tang-Space/assets/img/tech/vue3-notes-03-method.png)

### computed（计算属性）

\`\`\`vue
let price=ref()
let counts=ref()
let total=ref()

//定义一个计算属性
let costTotalComputed = computed(
  ()=>{
    return price.value*counts.value
  }
)

计算结果：{{ costTotalComputed }}
\`\`\`

![computed 计算结果](/Tang-Space/assets/img/tech/vue3-notes-04-computed.png)

## watch

### 监听普通数据类型

\`\`\`vue
let message = ref("")
let confirmMessage = ref("")
//watch
/* 
  watch(监听的数据,("现在的值","之前的值")=>{
  动作
  })
*/
//监听多个值
watch([message,confirmMessage],(newValue,oldValue)=>{
  //动作
  console.log(newValue,oldValue)
  if(newValue[0]==newValue[1]){
    console.log("两次输入一样")
  }else{
    console.log("两次不一样")
  }
})


    <input placeholder="请输入新值" v-model.lazy="message">
    <input placeholder="请确认输入新值" v-model.lazy="confirmMessage">
\`\`\`

### 监听对象

\`\`\`vue
//监听对象
//定义一个对象
const userInfo = reactive({
  name:"try",
  age:18,
  QQ:"123122131",
  //数据嵌套
  phone:{
    mode:"iPhone",
    price:9999
  }
})
//getter函数
watch(()=>userInfo.age,(newValue,oldValue)=>{
  console.log("oldvalue:",oldValue)
  console.log("newvalue:",newValue)

})

watch(()=>userInfo.phone.price,(newValue,oldValue)=>{
  console.log("oldvalue:",oldValue)
  console.log("newvalue:",newValue)

}),{deep:true}



    <input placeholder="请输入年龄" v-model.number="userInfo.age">
    <input placeholder="请输入手机号" v-model.number="userInfo.phone.price">
\`\`\`

## 键盘修饰符

\`\`\`vue
let messages = ref()
//定义一个回车键事件函数
const enterHandler = ()=>{
  console.log("你敲了回车键")
}
//定义一个删除键事件函数
const deleteHandler = ()=>{
  console.log("你敲了删除键")
}
const tabHandler = ()=>{
  console.log("你敲了tab键")
}
const ctrlEnterHandler = ()=>{
  console.log("你敲了ctrl+enter键")
}
//ctrl不放
let v =ref(0)


  <!--键盘修饰符 
    keyup:键盘抬起事件
    keydown:键盘按下事件
-->
    <!--  -->
<span>回车事件:</span>
<input v-model="messages" placeholder="请输入" @keyup.enter="enterHandler">
<span>删除事件：</span>
<input v-model="messages" placeholder="请输入" @keyup.delete="deleteHandler">
<!-- tab 
  当监听的tab是keyup时，只有按tab并且抬起的时候进入到了input内，才会执行tabHandler
-->
 <p>tab事件</p>
 <input v-model="messages" placeholder="请输入" @keydown.tab="tabHandler">
 <p>Crtl事件</p>
 <input v-model="messages" placeholder="请输入" @keyup.ctrl.enter="ctrlEnterHandler">
 <p>按住ctrl不放，才可以点击的功能：</p>
 {{ v }}
 <button type="button" @click.ctrl="v++">点我</button>
\`\`\`

## 鼠标修饰符

\`\`\`vue
//鼠标右击事件
const rightHandler= ()=>{
  console.log("你点击了右键")
}


 <button type="button" @click.ctrl="v++">点我</button>
 <!-- 鼠标左击 -->
 <button type="button" @click.left="v++">点我</button>

 <!-- 鼠标右击 -->
<p>鼠标右击</p>
<textarea @click.right="rightHandler" oncontextmenu="return false">
  这里面有些内容
</textarea>
\`\`\`

## 组件

vue 组件可以将一个复杂的应用程序（或者页面）拆分成多个小的模块，每个模块可以独立的进行开发和测试，在 vue 当中组件是通过虚拟 DOM 来实现的，可以将多复杂的页面拆分成小的 DOM 节点，每个节点对应一个组件，这些组件组合成一个完整的页面

\`\`\`vue
<script setup>
import { ref } from 'vue'
//定义组件可以接收的参数
const props=defineProps({
    //定义参数
    //参数名：参数数据类型
    // step: Number
    step:{
        type:Number, //string,array,object
        //必须要传递参数
        //required:true,
        //设置默认值
        default:10,
        //自定义校验规则
        validator: function(value){
            console.log("c传递的参数是:",value)
            //true:校验通过
            //false:校验失败
            //传递的值必须小于10
            if(value<10){
                return true
            }else{
                return false
            }
        }
    }
})
const count = ref(0)
const plus=()=>{
    count.value=count.value+props.step
}
<\/script>

<template>
    <div>
        <p>你传递的参数是{{ step }}</p>
        <button class="button" @click="plus">You clicked me {{ count }} times.</button>
    </div>
</template>

<style  scoped>
.button{
    font-size: 20px;
    background-color: aqua;
}
</style>
\`\`\`

在 App.vue 中调用

\`\`\`vue
<ButtonCounter :step="2"></ButtonCounter>
  <ButtonCounter ></ButtonCounter>
\`\`\`

### emit

\`\`\`vue
<script setup>
import { ref } from 'vue'
//定义组件可以接收的参数
//参数为单项数据流
//ROOT <-Button<-Submit
//ROOT -> Button->Submit
//step：只能在父组件进行修改，不能在子组件进行修改
const props=defineProps({
    msg:{
        type: String, //string,array,object
    }
})
const emit = defineEmits(['changeValue'])
//子组件内不能修改父组件的值
const modefiMsg=()=>{
    //直接改不可以
    // props.msg="这是通过子组件通过修改的值"
    //通过emit事件让父组件修改
    emit('changeValue',"我是子组件，我要接收你的值")
}
<\/script>

<template>
    <div>
        {{ msg }}
        <button placeholder="请输入值" type="button" @click="modefiMsg">修改</button>
        <!-- <p>你传递的参数是{{ step }}</p>
        <button class="button" @click="plus">You clicked me {{ count }} times.</button> -->
    </div>
</template>

<style  scoped>
.button{
    font-size: 20px;
    background-color: aqua;
}
</style>
\`\`\`

\`\`\`vue
const msg = ref("这是父组件传递的参数")
const modify=(value)=>{
  //由父组件直接更改
  // msg.value="这是一个新的值，由子组件触发"
  //接收参数进行修改
  msg.value=value
}
<\/script>

<template>
  <div>

  </div>
  <!-- <lianxi msg="Vite + Vue" /> -->
   <Message :msg="msg" @change-value="modify"></Message>
  <ButtonCounter :step="2"></ButtonCounter>
\`\`\`

### 插槽 slot

插槽是 vue 中一种特殊的机制，可以让我们在组件中定义可插入区域

也就是可以在不同的地方插入不同的内容

可以让一个通用的组件，展示不同的内容

\`\`\`vue
    <div>
        <!-- 定义一个插槽 -->
         <!-- 具名插槽，命名插槽 -->
         <slot name="header">
            <p>这是插槽的默认值</p>
         </slot>
         <slot name="main">
            <p>这是插槽的默认值</p>
         </slot>
         <slot name="footer">
            <p>这是插槽的默认值</p>
         </slot>
    </div>
\`\`\`

\`\`\`vue
<div>
    <!-- 使用插槽这个组件 -->
      
    <slotDemo>
      <!-- 第一种写法 -->
      <template v-slot:header>
       <p>这是header</p> 
      </template>
      <!-- 第二种写法 -->
       <template #main>
    <p>这是main的内容</p>
       </template>
       <template #footer>
    <p>这是footer的内容</p>
       </template>
      <!-- <p>这是通过插槽实现的页面内容</p> -->
    </slotDemo>
        <!-- <lianxi msg="Vite + Vue" /> -->
\`\`\`

## Vue 数据的发布和订阅

### vue Provide 和 inject 发布和订阅数据

provide：用来发布数据

inject：用来订阅数据

\`\`\`vue
<script setup>
import { inject ,ref} from "vue";

//订阅父组件发布的数据
// inject语法：inject("数据的名字")
let injectMsg = inject("message")
//订阅父组件发布的订阅修改函数
const changeValueHandler = inject("modifyHandler")
let newMsg = ref('')
const submit=()=>{
    //也是可以直接通过子组件修改数据
    // injectMsg.value = newMsg.value//不推荐
    changeValueHandler(newMsg.value)
}
<\/script>

<template>
    <div>
        <p>{{injectMsg}}</p>
        <input placeholder="请输入新值" v-model="newMsg">
        <button type="button" @click="submit">修改</button>
    </div>
</template>
\`\`\`

\`\`\`vue
<script setup>
import { provide ,ref} from "vue"
import Message from "./Message.vue";
import MessageProvide from "./MessageProvide.vue";


let defaultMsg=ref("这是父组件发布的数据")
//provide语法：provide("发布的命令","你要发布谁")
provide('message',defaultMsg)
//发布一个数据

//发布一个用于修改数据的函数
const modifyHandler = (newValue)=>{
    defaultMsg.value = newValue
}
provide('modifyHandler',modifyHandler)
<\/script>

<template>
    <div>
        <MessageProvide></MessageProvide>
    </div>
</template>
\`\`\`

\`\`\`vue
 <ProvideInject></ProvideInject>
\`\`\`

## 声明周期

\`\`\`vue
<script setup lang="ts">
//声明周期钩子函数
//beforCreate,created --> setup

import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted ,onUnmounted,onUpdated} from 'vue';

//beforMount --> onNeforeMount
onBeforeMount(
    ()=>{
        console.log("钩子函数:onBeforeMount")
    }
)    
//mounted-->onMounted
onMounted(
    ()=>{
        console.log("钩子函数:onMounted")
    }
) 
//beforUpdata->onbeforUpdate
onBeforeUpdate(
    ()=>{
        console.log("钩子函数:onBeforeUpdate")
    }
) 
//Updata->onUpdated
onUpdated(
    ()=>{
        console.log("钩子函数:onUpdated")
    }
) 
//beforUmount-->onBeforUnmount
onBeforeUnmount(
    ()=>{
        console.log("钩子函数:onBeforeUnmount")
    }
) 
//unmounted-->onUnmounted
onUnmounted(
    ()=>{
        console.log("钩子函数:onUnmounted")
    }
)
<\/script>
\`\`\`

# Vue 高级管理

## pinia

vue 的状态管理库，可以定义一些全局的数据或者共享状态，之前叫做 vueX

可以理解为 Pinia 或者 VueX 具有存储数据的作用，这个数据可以在任意的页面或者组件使用

使用场景：

1. 用户登录状态
2. 应用程序设置
3. 共享数据
4. 全局状态

[Pinia 🍍](https://pinia.vuejs.org/zh/core-concepts/)

### 安装

\`\`\`bash
cnpm install pinia
\`\`\`

### 在 main.js 插入

\`\`\`vue
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.mount('#app')
\`\`\`

### 使用

\`\`\`vue
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { userStoreDemo } from '../store/index.js';
const store = userStoreDemo()
//从Pinia数据中结构出数据  
const {msg} = storeToRefs(store)
console.log(msg)
//直接修改pinia的数据，不推荐
msg.value="新数据"
//直接调用修改函数
const changeValue=()=>{
    //调用函数第一种写法，解构
    // const {changeStoreDemo} = userStoreDemo()
    //const {changeStoreDemo} = store
    // changeStoreDemo()
    //第二种
    store.changeStoreDemo("这是从其他组件传的数据") //配合const store = userStoreDemo()

}

<\/script>

<template>
    <div>
        {{ msg }}
        <button type="button" @click="changeValue">改变</button>
    </div>
</template>
\`\`\`

\`\`\`vue
import { defineStore } from 'pinia'

//创建一个全局的状态，容器
//容器接收两个参数，第一个参数：容器的ID，第二个：容器的内容
//defineStore返回的是一个函数，这个函数按照useXXX去命名
//counter --> userCounter storeDemo-->useStoreDemo
export const userStoreDemo = defineStore('storeDemo', {
    //容器的内容
    //state:用来存储全局状态/数据，可以理解为数据配置的位置
    //data
    state:()=>{
        return{
            msg:"Hello,Pinia"
        }
    },
    //相当于计算属性
    getters:{},
    //定义修改数据的方法
    //相当于methods
    actions: {
        //接收参数
        changeStoreDemo(value){
            this.msg = value
        }
    }
  })
  //怎么被其他组件使用
\`\`\`

## Vue router

### 下载

\`\`\`bash
cnpm install vue-router@4
\`\`\`

### 使用

\`\`\`vue
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//导入router
import router from './router'
const app = createApp(App)
app.use(router)
app.mount('#app')
\`\`\`

\`\`\`vue
//导入创建路由的方法
import{createRouter,createWebHashHistory} from 'vue-router'
// import { createMemoryHistory, createRouter } from 'vue-router'
//导入需要路由的组件
import index from "../views/index.vue";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
//直接导入组件
// import User from '../views/User.vue';
//路由懒加载
//使用路由懒加载的形式导入组件
const User = ()=> import('../views/User.vue')

//创建一个路由对象，并且包含子路由
//list/tv  list/movie
const listRoutes = {
    path: '/list', component: ()=> import('../views/list/List.vue'),
    children: [
        { path: 'tv', component: ()=> import('../views/list/TV.vue')},
        { path: 'movie', component: ()=> import('../views/list/Movie.vue')},
    ],
}
//定义路由映射
const routes = [
    listRoutes,
    { path: '/', component: index ,name:"index"},
    { path: '/about', component: About },
    { path: '/home', component: Home },
    { 
        path: '/users/:id', component: User ,name:"users",
        //独享守卫
        beforeEnter(to, from, next) {
             //如果id不是try，直接跳转到/
             //?limit  query
             if(to.params.id != 'try'){
                // next("/")
                next({
                    name:"index"
                })
                return false
            }else{
                next()
            }
        },
    },
  ]

  //创建路由实例
  const router =  createRouter({
    history: createWebHashHistory(),
    routes,
  })

    //定义一个全局的守卫，去判断请求链接有没有token字段
    router.beforeEach(
        (to,from,next)=>{
            //如果id不是try，直接跳转到/
            if(to.query.token != 'try' && to.path == '/list'){
                next("/")
                return false
            }else{
                next()
            }
        }
      )

  export default router
\`\`\`

\`\`\`vue
<script setup>
//1.首先导入router
// import router from './router/index.js'
//2.通过内置函数实例化一个router进行路由的调整或者操作
import {useRouter} from 'vue-router'
const router = useRouter

//定义一个通过js跳转路由的方法
const user = ()=>{
  // router.push("/users/try")
  //通过对象跳转路由，并传递参数
  router.push({
    name:"users",
    params:{
      id: 'try',
      username: '唐睿阳'
    },
    query:{
      limit:10,
      area:"成都"
    }
  })
}
<\/script>

<template>
    <h1>Hello router!</h1>
  <div>
    <!-- push:可以回退 replace不能回退 -->
    <router-link to="/">Go to index</router-link>
    <router-link to="/home">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
    <router-link to="/users/try">Go to User</router-link>

    <button type="button" @click="user()">我的</button>
    <router-link to="/list">看视频</router-link>
    <router-view></router-view>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
\`\`\`

\`\`\`vue
<script setup lang="ts">
    
<\/script>

<template>
    <div>
        这是电影页
    </div>
</template>

<style lang="" scoped>
    
</style>
\`\`\`

\`\`\`vue
<script setup lang="ts">
    
<\/script>

<template>
    <div>
        这是电视剧页
    </div>
</template>

<style lang="" scoped>
    
</style>
\`\`\`

\`\`\`vue
<script setup lang="ts">
    
<\/script>

<template>
    <div>
        这是列表页
        <router-link to="/list/movie">看电影</router-link>
        <router-link to="/list/tv">看电视剧</router-link>
        <router-view></router-view>
    </div>
</template>

<style lang="" scoped>
    
</style>
\`\`\`

\`\`\`vue
<script setup lang="ts">
    //js 如何获取参数
    import {useRoute} from 'vue-router'
    const route = useRoute()
    //获取参数
    console.log("username:",route.params.id)
    
<\/script>

<template>
    <div>
        这是用户页
        用户名ID:{{ $route.params.id }}
    </div>
    <!-- <button @click="getUsername()">获取用户名</button> -->
</template>

<style lang="" scoped>
    
</style>
\`\`\`
`,bc={all:"全部",tech:"技术",life:"生活",travel:"旅行",thought:"随想"};function $m(...s){return s.map(i=>i.includes("/")?`/Tang-Space/assets/img/${i}`:`/Tang-Space/assets/img/life/${i}`)}function Wm(s){const i=s.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);if(!i)return{data:{},body:s};const a=i[1],c=i[2].trim(),f={};for(const d of a.split(/\r?\n/)){const h=d.trim();if(!h||h.startsWith("#"))continue;const m=h.indexOf(":");if(m<0)continue;const y=h.slice(0,m).trim();let E=h.slice(m+1).trim();typeof E=="string"&&E.startsWith("[")&&E.endsWith("]")?E=E.slice(1,-1).split(",").map(k=>k.trim().replace(/^['"]|['"]$/g,"")).filter(Boolean):E==="true"?E=!0:E==="false"?E=!1:typeof E=="string"&&(E=E.replace(/^['"]|['"]$/g,"")),f[y]=E}return{data:f,body:c}}const Qm=Object.assign({"/content/notes/ai-agent-engineering.md":Um,"/content/notes/first-note-about-this-site.md":jm,"/content/notes/roce-toinfiniband.md":Vm,"/content/notes/vue3-vite-notes.md":Hm});function Gm(){const s=[];for(const[i,a]of Object.entries(Qm)){const{data:c,body:f}=Wm(a),d=String(c.id??i.split("/").pop().replace(/\.md$/,""));let h;Array.isArray(c.images)&&(h=$m(...c.images)),s.push({id:d,type:c.type??"thought",title:String(c.title??d),date:String(c.date??""),summary:String(c.summary??""),tags:Array.isArray(c.tags)?c.tags:[],images:h,featured:c.featured===!0?!0:void 0,body:f||void 0})}return s.sort((i,a)=>a.date.localeCompare(i.date))}const Km=Gm(),Ym="aGVsbG9AZXhhbXBsZS5jb20=";function Xm(s){const i=atob(s);window.location.href="mailto:"+i}const bm="_backdrop_11eu9_1",qm="_panel_11eu9_14",Jm="_header_11eu9_24",Zm="_searchIcon_11eu9_32",ev="_input_11eu9_39",tv="_close_11eu9_54",nv="_list_11eu9_72",rv="_group_11eu9_78",lv="_item_11eu9_87",ov="_itemActive_11eu9_102",iv="_itemTitle_11eu9_107",sv="_itemSubtitle_11eu9_116",av="_empty_11eu9_124",uv="_footer_11eu9_131",cv="_footerHint_11eu9_142",fv="_footerKbd_11eu9_148",_e={backdrop:bm,panel:qm,header:Jm,searchIcon:Zm,input:ev,close:tv,list:nv,group:rv,item:lv,itemActive:ov,itemTitle:iv,itemSubtitle:sv,empty:av,footer:uv,footerHint:cv,footerKbd:fv},dv=[{path:"/",label:"首页"},{path:"/notes",label:"记录"},{path:"/resume",label:"简历"},{path:"/about",label:"关于"}];function pv(){const s=Ps(),[i,a]=S.useState(!1),[c,f]=S.useState(""),[d,h]=S.useState(0),m=S.useRef(null),y=S.useRef(null),E=S.useRef(null),k=S.useRef([]),R=S.useRef(null),P=()=>a(!1);S.useEffect(()=>{const F=ee=>{(ee.metaKey||ee.ctrlKey)&&ee.key.toLowerCase()==="k"&&(ee.preventDefault(),a(ie=>!ie))},G=()=>a(!0);return window.addEventListener("keydown",F),window.addEventListener("tang:open-cmdk",G),()=>{window.removeEventListener("keydown",F),window.removeEventListener("tang:open-cmdk",G)}},[]),S.useEffect(()=>{var ee,ie;const F=m.current;if(!F)return;if(i)return R.current=document.activeElement,F.style.display="flex",f(""),h(0),document.body.style.overflow="hidden",requestAnimationFrame(()=>{var te;F.style.opacity="1",(te=y.current)==null||te.focus()}),()=>{};F.style.opacity="0",document.body.style.overflow="";const G=setTimeout(()=>{m.current&&(m.current.style.display="none")},280);return(ie=(ee=R.current)==null?void 0:ee.focus)==null||ie.call(ee),()=>clearTimeout(G)},[i]);const O=S.useMemo(()=>{const F=te=>()=>{s(te),P()},G=dv.map(te=>({id:`nav-${te.path}`,group:"跳转",title:te.label,subtitle:te.path,run:F(te.path)})),ee=Km.map(te=>({id:`note-${te.id}`,group:"笔记",title:te.title,subtitle:`${te.date} · ${bc[te.type]}`,keywords:[te.title,te.summary,te.tags.join(" "),bc[te.type]].join(" "),run:F(`/notes/${te.id}`)})),ie=[{id:"act-wechat",group:"操作",title:"微信",subtitle:"扫码添加",keywords:"wechat 联系 加我",run:()=>{window.dispatchEvent(new CustomEvent("tang:open-wechat")),P()}},{id:"act-email",group:"操作",title:"邮箱",subtitle:"点击发送",keywords:"email mail 联系",run:()=>{Xm(Ym),P()}}];return[...G,...ee,...ie]},[s]),V=S.useMemo(()=>{const F=c.trim().toLowerCase();return F?O.filter(G=>`${G.title} ${G.subtitle??""} ${G.keywords??""}`.toLowerCase().includes(F)):O},[O,c]);S.useEffect(()=>{h(0)},[c]),S.useEffect(()=>{var F;(F=k.current[d])==null||F.scrollIntoView({block:"nearest"})},[d,V]);const A=F=>{V.length&&h(G=>(G+F+V.length)%V.length)},D=F=>{var G,ee;F.key==="ArrowDown"?(F.preventDefault(),A(1)):F.key==="ArrowUp"?(F.preventDefault(),A(-1)):F.key==="Enter"?(F.preventDefault(),(G=V[d])==null||G.run()):F.key==="Escape"?(F.preventDefault(),P()):F.key==="Tab"&&(F.preventDefault(),(ee=E.current)==null||ee.focus())},z=F=>{var G;F.key==="Tab"?(F.preventDefault(),(G=y.current)==null||G.focus()):F.key==="Escape"&&(F.preventDefault(),P())},J=V[d]?`cmd-${d}`:void 0;let Z=null;return K.jsx("div",{ref:m,className:_e.backdrop,style:{display:"none",opacity:0},role:"dialog","aria-modal":"true","aria-label":"命令面板",onClick:P,children:K.jsxs("div",{className:_e.panel,onClick:F=>F.stopPropagation(),children:[K.jsxs("div",{className:_e.header,children:[K.jsx("span",{className:_e.searchIcon,"aria-hidden":"true",children:"⌕"}),K.jsx("input",{ref:y,className:_e.input,placeholder:"搜索笔记、跳转页面、或输入命令…",value:c,onChange:F=>f(F.target.value),onKeyDown:D,role:"combobox","aria-expanded":i,"aria-controls":"cmd-listbox","aria-autocomplete":"list","aria-activedescendant":J,autoComplete:"off",spellCheck:!1}),K.jsx("button",{ref:E,type:"button",className:_e.close,onClick:P,onKeyDown:z,"aria-label":"关闭命令面板",children:"✕"})]}),K.jsx("div",{className:_e.list,id:"cmd-listbox",role:"listbox",children:V.length===0?K.jsx("div",{className:_e.empty,role:"presentation",children:"无匹配结果"}):V.map((F,G)=>{const ee=[];return F.group!==Z&&(Z=F.group,ee.push(K.jsx("div",{className:_e.group,"aria-hidden":"true",children:F.group},`g-${F.group}`))),ee.push(K.jsxs("div",{id:`cmd-${G}`,ref:ie=>{k.current[G]=ie},role:"option","aria-selected":G===d,className:`${_e.item} ${G===d?_e.itemActive:""}`,onMouseEnter:()=>h(G),onClick:()=>F.run(),children:[K.jsx("span",{className:_e.itemTitle,children:F.title}),F.subtitle&&K.jsx("span",{className:_e.itemSubtitle,children:F.subtitle})]},F.id)),ee})}),K.jsxs("div",{className:_e.footer,"aria-hidden":"true",children:[K.jsxs("span",{className:_e.footerHint,children:[K.jsx("kbd",{className:_e.footerKbd,children:"↑"}),K.jsx("kbd",{className:_e.footerKbd,children:"↓"}),"选择"]}),K.jsxs("span",{className:_e.footerHint,children:[K.jsx("kbd",{className:_e.footerKbd,children:"↵"}),"执行"]}),K.jsxs("span",{className:_e.footerHint,children:[K.jsx("kbd",{className:_e.footerKbd,children:"esc"}),"关闭"]})]})]})})}const hv="_backdrop_184my_1",mv="_card_184my_13",vv="_close_184my_24",gv="_title_184my_42",yv="_qr_184my_49",Hr={backdrop:hv,card:mv,close:vv,title:gv,qr:yv};function wv({visible:s,onClose:i}){const a=S.useRef(null),c=S.useRef(null),f=S.useRef(null);return S.useEffect(()=>{var h,m;const d=a.current;if(d)if(s)f.current=document.activeElement,d.style.display="flex",requestAnimationFrame(()=>{var y;d.style.opacity="1",(y=c.current)==null||y.focus()});else{d.style.opacity="0";const y=setTimeout(()=>{a.current&&(a.current.style.display="none")},280);return(m=(h=f.current)==null?void 0:h.focus)==null||m.call(h),()=>clearTimeout(y)}},[s]),S.useEffect(()=>{if(!s)return;const d=h=>{var k;if(h.key==="Escape"){i();return}if(h.key!=="Tab")return;const m=(k=a.current)==null?void 0:k.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])');if(!(m!=null&&m.length))return;const y=m[0],E=m[m.length-1];h.shiftKey&&document.activeElement===y?(h.preventDefault(),E.focus()):!h.shiftKey&&document.activeElement===E&&(h.preventDefault(),y.focus())};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[s,i]),K.jsx("div",{ref:a,className:Hr.backdrop,style:{display:"none",opacity:0},role:"dialog","aria-modal":"true","aria-label":"微信二维码",onClick:i,children:K.jsxs("div",{className:Hr.card,onClick:d=>d.stopPropagation(),children:[K.jsx("button",{ref:c,className:Hr.close,onClick:i,"aria-label":"关闭",children:"✕"}),K.jsx("p",{className:Hr.title,children:"微信扫码添加"}),K.jsx("img",{src:"/Tang-Space/assets/img/wechat.jpg",alt:"WeChat QR Code",className:Hr.qr})]})})}const Cv="_back_1b6ks_2",Sv="_show_1b6ks_28",qc={back:Cv,show:Sv};function Ev(){const[s,i]=S.useState(!1);S.useEffect(()=>{const f=()=>{i(window.scrollY>window.innerHeight)};return window.addEventListener("scroll",f,{passive:!0}),f(),()=>window.removeEventListener("scroll",f)},[]);const a=typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,c=()=>{window.scrollTo({top:0,behavior:a?"auto":"smooth"})};return K.jsx("button",{type:"button",className:`${qc.back} ${s?qc.show:""}`,onClick:c,"aria-label":"回到顶部","aria-hidden":!s,tabIndex:s?0:-1,children:K.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:K.jsx("path",{d:"M12 19V5M5 12l7-7 7 7"})})})}class xv extends Zc{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const i=new Sp;i.deleteAttribute("uv");const a=new Mc({side:Ep}),c=new Mc,f=new xp(16777215,900,28,2);f.position.set(.418,16.199,.3),this.add(f);const d=new Ut(i,a);d.position.set(-.757,13.219,.717),d.scale.set(31.713,28.305,28.591),this.add(d);const h=new kp(i,c,6),m=new _p;m.position.set(-10.906,2.009,1.846),m.rotation.set(0,-.195,0),m.scale.set(2.328,7.905,4.651),m.updateMatrix(),h.setMatrixAt(0,m.matrix),m.position.set(-5.607,-.754,-.758),m.rotation.set(0,.994,0),m.scale.set(1.97,1.534,3.955),m.updateMatrix(),h.setMatrixAt(1,m.matrix),m.position.set(6.167,.857,7.803),m.rotation.set(0,.561,0),m.scale.set(3.927,6.285,3.687),m.updateMatrix(),h.setMatrixAt(2,m.matrix),m.position.set(-2.017,.018,6.124),m.rotation.set(0,.333,0),m.scale.set(2.002,4.566,2.064),m.updateMatrix(),h.setMatrixAt(3,m.matrix),m.position.set(2.291,-.756,-2.621),m.rotation.set(0,-.286,0),m.scale.set(1.546,1.552,1.496),m.updateMatrix(),h.setMatrixAt(4,m.matrix),m.position.set(-2.193,-.369,-5.547),m.rotation.set(0,.516,0),m.scale.set(3.875,3.487,2.986),m.updateMatrix(),h.setMatrixAt(5,m.matrix),this.add(h);const y=new Ut(i,Gn(50));y.position.set(-16.116,14.37,8.208),y.scale.set(.1,2.428,2.739),this.add(y);const E=new Ut(i,Gn(50));E.position.set(-16.109,18.021,-8.207),E.scale.set(.1,2.425,2.751),this.add(E);const k=new Ut(i,Gn(17));k.position.set(14.904,12.198,-1.832),k.scale.set(.15,4.265,6.331),this.add(k);const R=new Ut(i,Gn(43));R.position.set(-.462,8.89,14.52),R.scale.set(4.38,5.441,.088),this.add(R);const P=new Ut(i,Gn(20));P.position.set(3.235,11.486,-12.541),P.scale.set(2.5,2,.1),this.add(P);const O=new Ut(i,Gn(100));O.position.set(0,20,0),O.scale.set(1,.1,1),this.add(O)}dispose(){const i=new Set;this.traverse(a=>{a.isMesh&&(i.add(a.geometry),i.add(a.material))});for(const a of i)a.dispose()}}function Gn(s){return new Rp({color:0,emissive:16777215,emissiveIntensity:s})}const uo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class er{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const kv=new Pp(-1,1,1,-1,0,1);class _v extends ws{constructor(){super(),this.setAttribute("position",new Tc([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Tc([0,2,0,0,2,0],2))}}const Rv=new _v;class Ds{constructor(i){this._mesh=new Ut(Rv,i)}dispose(){this._mesh.geometry.dispose()}render(i){i.render(this._mesh,kv)}get material(){return this._mesh.material}set material(i){this._mesh.material=i}}class Pv extends er{constructor(i,a="tDiffuse"){super(),this.textureID=a,this.uniforms=null,this.material=null,i instanceof Yn?(this.uniforms=i.uniforms,this.material=i):i&&(this.uniforms=co.clone(i.uniforms),this.material=new Yn({name:i.name!==void 0?i.name:"unspecified",defines:Object.assign({},i.defines),uniforms:this.uniforms,vertexShader:i.vertexShader,fragmentShader:i.fragmentShader})),this._fsQuad=new Ds(this.material)}render(i,a,c){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=c.texture),this._fsQuad.material=this.material,this.renderToScreen?(i.setRenderTarget(null),this._fsQuad.render(i)):(i.setRenderTarget(a),this.clear&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),this._fsQuad.render(i))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Jc extends er{constructor(i,a){super(),this.scene=i,this.camera=a,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(i,a,c){const f=i.getContext(),d=i.state;d.buffers.color.setMask(!1),d.buffers.depth.setMask(!1),d.buffers.color.setLocked(!0),d.buffers.depth.setLocked(!0);let h,m;this.inverse?(h=0,m=1):(h=1,m=0),d.buffers.stencil.setTest(!0),d.buffers.stencil.setOp(f.REPLACE,f.REPLACE,f.REPLACE),d.buffers.stencil.setFunc(f.ALWAYS,h,4294967295),d.buffers.stencil.setClear(m),d.buffers.stencil.setLocked(!0),i.setRenderTarget(c),this.clear&&i.clear(),i.render(this.scene,this.camera),i.setRenderTarget(a),this.clear&&i.clear(),i.render(this.scene,this.camera),d.buffers.color.setLocked(!1),d.buffers.depth.setLocked(!1),d.buffers.color.setMask(!0),d.buffers.depth.setMask(!0),d.buffers.stencil.setLocked(!1),d.buffers.stencil.setFunc(f.EQUAL,1,4294967295),d.buffers.stencil.setOp(f.KEEP,f.KEEP,f.KEEP),d.buffers.stencil.setLocked(!0)}}class Mv extends er{constructor(){super(),this.needsSwap=!1}render(i){i.state.buffers.stencil.setLocked(!1),i.state.buffers.stencil.setTest(!1)}}class Tv{constructor(i,a){if(this.renderer=i,this._pixelRatio=i.getPixelRatio(),a===void 0){const c=i.getSize(new lt);this._width=c.width,this._height=c.height,a=new oo(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:io}),a.texture.name="EffectComposer.rt1"}else this._width=a.width,this._height=a.height;this.renderTarget1=a,this.renderTarget2=a.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Pv(uo),this.copyPass.material.blending=Mp,this.timer=new Tp}swapBuffers(){const i=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=i}addPass(i){this.passes.push(i),i.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(i,a){this.passes.splice(a,0,i),i.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(i){const a=this.passes.indexOf(i);a!==-1&&this.passes.splice(a,1)}isLastEnabledPass(i){for(let a=i+1;a<this.passes.length;a++)if(this.passes[a].enabled)return!1;return!0}render(i){this.timer.update(),i===void 0&&(i=this.timer.getDelta());const a=this.renderer.getRenderTarget();let c=!1;for(let f=0,d=this.passes.length;f<d;f++){const h=this.passes[f];if(h.enabled!==!1){if(h.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(f),h.render(this.renderer,this.writeBuffer,this.readBuffer,i,c),h.needsSwap){if(c){const m=this.renderer.getContext(),y=this.renderer.state.buffers.stencil;y.setFunc(m.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,i),y.setFunc(m.EQUAL,1,4294967295)}this.swapBuffers()}Jc!==void 0&&(h instanceof Jc?c=!0:h instanceof Mv&&(c=!1))}}this.renderer.setRenderTarget(a)}reset(i){if(i===void 0){const a=this.renderer.getSize(new lt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=a.width,this._height=a.height,i=this.renderTarget1.clone(),i.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=i,this.renderTarget2=i.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(i,a){this._width=i,this._height=a;const c=this._width*this._pixelRatio,f=this._height*this._pixelRatio;this.renderTarget1.setSize(c,f),this.renderTarget2.setSize(c,f);for(let d=0;d<this.passes.length;d++)this.passes[d].setSize(c,f)}setPixelRatio(i){this._pixelRatio=i,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Iv extends er{constructor(i,a,c=null,f=null,d=null){super(),this.scene=i,this.camera=a,this.overrideMaterial=c,this.clearColor=f,this.clearAlpha=d,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ct}render(i,a,c){const f=i.autoClear;i.autoClear=!1;let d,h;this.overrideMaterial!==null&&(h=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(i.getClearColor(this._oldClearColor),i.setClearColor(this.clearColor,i.getClearAlpha())),this.clearAlpha!==null&&(d=i.getClearAlpha(),i.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&i.clearDepth(),i.setRenderTarget(this.renderToScreen?null:c),this.clear===!0&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),i.render(this.scene,this.camera),this.clearColor!==null&&i.setClearColor(this._oldClearColor),this.clearAlpha!==null&&i.setClearAlpha(d),this.overrideMaterial!==null&&(this.scene.overrideMaterial=h),i.autoClear=f}}const Nv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ct(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Xn extends er{constructor(i,a=1,c,f){super(),this.strength=a,this.radius=c,this.threshold=f,this.resolution=i!==void 0?new lt(i.x,i.y):new lt(256,256),this.clearColor=new Ct(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let d=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);this.renderTargetBright=new oo(d,h,{type:io}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let k=0;k<this.nMips;k++){const R=new oo(d,h,{type:io});R.texture.name="UnrealBloomPass.h"+k,R.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(R);const P=new oo(d,h,{type:io});P.texture.name="UnrealBloomPass.v"+k,P.texture.generateMipmaps=!1,this.renderTargetsVertical.push(P),d=Math.round(d/2),h=Math.round(h/2)}const m=Nv;this.highPassUniforms=co.clone(m.uniforms),this.highPassUniforms.luminosityThreshold.value=f,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Yn({uniforms:this.highPassUniforms,vertexShader:m.vertexShader,fragmentShader:m.fragmentShader}),this.separableBlurMaterials=[];const y=[6,10,14,18,22];d=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);for(let k=0;k<this.nMips;k++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(y[k])),this.separableBlurMaterials[k].uniforms.invSize.value=new lt(1/d,1/h),d=Math.round(d/2),h=Math.round(h/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=a,this.compositeMaterial.uniforms.bloomRadius.value=.1;const E=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=E,this.bloomTintColors=[new Kn(1,1,1),new Kn(1,1,1),new Kn(1,1,1),new Kn(1,1,1),new Kn(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=co.clone(uo.uniforms),this.blendMaterial=new Yn({uniforms:this.copyUniforms,vertexShader:uo.vertexShader,fragmentShader:uo.fragmentShader,premultipliedAlpha:!0,blending:Cs,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ct,this._oldClearAlpha=1,this._basic=new Ip,this._fsQuad=new Ds(null)}dispose(){for(let i=0;i<this.renderTargetsHorizontal.length;i++)this.renderTargetsHorizontal[i].dispose();for(let i=0;i<this.renderTargetsVertical.length;i++)this.renderTargetsVertical[i].dispose();this.renderTargetBright.dispose();for(let i=0;i<this.separableBlurMaterials.length;i++)this.separableBlurMaterials[i].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(i,a){let c=Math.round(i/2),f=Math.round(a/2);this.renderTargetBright.setSize(c,f);for(let d=0;d<this.nMips;d++)this.renderTargetsHorizontal[d].setSize(c,f),this.renderTargetsVertical[d].setSize(c,f),this.separableBlurMaterials[d].uniforms.invSize.value=new lt(1/c,1/f),c=Math.round(c/2),f=Math.round(f/2)}render(i,a,c,f,d){i.getClearColor(this._oldClearColor),this._oldClearAlpha=i.getClearAlpha();const h=i.autoClear;i.autoClear=!1,i.setClearColor(this.clearColor,0),d&&i.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=c.texture,i.setRenderTarget(null),i.clear(),this._fsQuad.render(i)),this.highPassUniforms.tDiffuse.value=c.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,i.setRenderTarget(this.renderTargetBright),i.clear(),this._fsQuad.render(i);let m=this.renderTargetBright;for(let y=0;y<this.nMips;y++)this._fsQuad.material=this.separableBlurMaterials[y],this.separableBlurMaterials[y].uniforms.colorTexture.value=m.texture,this.separableBlurMaterials[y].uniforms.direction.value=Xn.BlurDirectionX,i.setRenderTarget(this.renderTargetsHorizontal[y]),i.clear(),this._fsQuad.render(i),this.separableBlurMaterials[y].uniforms.colorTexture.value=this.renderTargetsHorizontal[y].texture,this.separableBlurMaterials[y].uniforms.direction.value=Xn.BlurDirectionY,i.setRenderTarget(this.renderTargetsVertical[y]),i.clear(),this._fsQuad.render(i),m=this.renderTargetsVertical[y];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,i.setRenderTarget(this.renderTargetsHorizontal[0]),i.clear(),this._fsQuad.render(i),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,d&&i.state.buffers.stencil.setTest(!0),this.renderToScreen?(i.setRenderTarget(null),this._fsQuad.render(i)):(i.setRenderTarget(c),this._fsQuad.render(i)),i.setClearColor(this._oldClearColor,this._oldClearAlpha),i.autoClear=h}_getSeparableBlurMaterial(i){const a=[],c=i/3;for(let f=0;f<i;f++)a.push(.39894*Math.exp(-.5*f*f/(c*c))/c);return new Yn({defines:{KERNEL_RADIUS:i},uniforms:{colorTexture:{value:null},invSize:{value:new lt(.5,.5)},direction:{value:new lt(.5,.5)},gaussianCoefficients:{value:a}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(i){return new Yn({defines:{NUM_MIPS:i},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Xn.BlurDirectionX=new lt(1,0);Xn.BlurDirectionY=new lt(0,1);const lo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Lv extends er{constructor(){super(),this.isOutputPass=!0,this.uniforms=co.clone(lo.uniforms),this.material=new Np({name:lo.name,uniforms:this.uniforms,vertexShader:lo.vertexShader,fragmentShader:lo.fragmentShader}),this._fsQuad=new Ds(this.material),this._outputColorSpace=null,this._toneMapping=null}render(i,a,c){this.uniforms.tDiffuse.value=c.texture,this.uniforms.toneMappingExposure.value=i.toneMappingExposure,(this._outputColorSpace!==i.outputColorSpace||this._toneMapping!==i.toneMapping)&&(this._outputColorSpace=i.outputColorSpace,this._toneMapping=i.toneMapping,this.material.defines={},Lp.getTransfer(this._outputColorSpace)===Dp&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Fp?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ap?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Bp?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ef?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===zp?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Op?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Up&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(i.setRenderTarget(null),this._fsQuad.render(i)):(i.setRenderTarget(a),this.clear&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),this._fsQuad.render(i))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Dv{constructor(i,a){Pe(this,"renderer");Pe(this,"scene");Pe(this,"camera");Pe(this,"crystals",[]);Pe(this,"dust",null);Pe(this,"farDust",null);Pe(this,"pmrem");Pe(this,"envMap",null);Pe(this,"composer");Pe(this,"bloom");Pe(this,"clock",new jp);Pe(this,"raf",0);Pe(this,"opts");Pe(this,"scroll",0);Pe(this,"scrollTarget",0);Pe(this,"mouse",new lt(0,0));Pe(this,"mouseTarget",new lt(0,0));Pe(this,"resize",()=>{const i=window.innerWidth,a=window.innerHeight;this.renderer.setSize(i,a,!1),this.composer.setSize(i,a),this.bloom.setSize(i,a),this.camera.aspect=i/a,this.camera.updateProjectionMatrix(),this.opts.reducedMotion&&this.renderOnce()});Pe(this,"loop",()=>{const i=this.clock.getElapsedTime();this.scroll+=(this.scrollTarget-this.scroll)*.08,this.mouse.lerp(this.mouseTarget,.06),this.camera.position.z=18-this.scroll*14,this.camera.position.x=this.mouse.x*1.5,this.camera.position.y=this.mouse.y*1.2,this.camera.lookAt(0,0,0);for(const a of this.crystals){const c=a.userData;a.position.x=c.base.x+Math.sin(i*.4+c.base.z)*1.6,a.position.y=c.base.y+Math.cos(i*.3+c.base.x)*1.3,a.position.z=c.base.z+this.scroll*26*c.parallax;const f=1+Math.sin(i*.8+c.base.x*2)*.06;if(a.scale.setScalar(f),a.rotation.x+=c.spin.x*.012,a.rotation.y+=c.spin.y*.012,a.rotation.z+=c.spin.z*.012,c.isSignal){const d=a.material,h=.85+Math.sin(i*1.6+c.base.z)*.15;d.emissiveIntensity=h,d.emissive=new Ct("#fb5959").multiplyScalar(h*.5)}}this.dust&&(this.dust.rotation.y=i*.02,this.dust.position.z=this.scroll*10),this.farDust&&(this.farDust.rotation.y=i*.01,this.farDust.position.z=this.scroll*6),this.composer.render(),this.raf=requestAnimationFrame(this.loop)});this.opts=a,this.renderer=new Vp({canvas:i,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(658975,0),this.renderer.toneMapping=ef,this.renderer.toneMappingExposure=1.1,this.scene=new Zc,this.scene.fog=new Hp(658975,.005),this.camera=new $p(60,1,.1,200),this.camera.position.set(0,0,18),this.pmrem=new Wp(this.renderer),this.envMap=this.pmrem.fromScene(new xv,.04).texture,this.scene.environment=this.envMap,this.buildCrystals(),this.buildDust(),this.buildFarDust(),this.composer=new Tv(this.renderer),this.composer.addPass(new Iv(this.scene,this.camera)),this.bloom=new Xn(new lt(window.innerWidth,window.innerHeight),.55,.8,.25),this.composer.addPass(this.bloom),this.composer.addPass(new Lv),this.resize(),window.addEventListener("resize",this.resize),this.opts.reducedMotion?this.renderOnce():this.loop()}buildCrystals(){const i=this.opts.isMobile?6:8,a=[new Ct("#eabdf6"),new Ct("#fdebfd"),new Ct("#ffffff"),new Ct("#cdbfe8"),new Ct("#ffffff")];for(let c=0;c<i;c++){const f=c<2,d=f?1.6+Math.random()*.6:.5+Math.random()*.5,h=f?1:0,m=new Qp(d,h),y=c===i-1,E=y?new Ct("#fb5959"):a[c%a.length],k=new Gp({color:E,metalness:0,roughness:.04+Math.random()*.1,transmission:.94,ior:1.5,thickness:1.4+Math.random()*.8,attenuationColor:E,attenuationDistance:3.5,envMapIntensity:1.4,iridescence:.45+Math.random()*.3,iridescenceIOR:1.3,clearcoat:1,clearcoatRoughness:.08,transparent:!0,side:Kp}),R=new Ut(m,k);R.position.set(f?(c===0?-3.5:3.5)+(Math.random()-.5)*1.5:(Math.random()-.5)*14,f?(Math.random()-.5)*2:(Math.random()-.5)*9,f?-2-c*1.5:-3-c*3.2-Math.random()*2),R.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const P=new Kn((Math.random()-.5)*.25,(Math.random()-.5)*.25,(Math.random()-.5)*.25),O=.6+(R.position.z+30)*.02;R.userData={spin:P,base:R.position.clone(),isSignal:y,parallax:O},this.crystals.push(R),this.scene.add(R)}}buildDust(){const i=this.opts.isMobile?500:1e3,a=new Float32Array(i*3);for(let d=0;d<i;d++)a[d*3]=(Math.random()-.5)*40,a[d*3+1]=(Math.random()-.5)*24,a[d*3+2]=-2-Math.random()*38;const c=new ws;c.setAttribute("position",new Ic(a,3));const f=new Nc({size:.09,color:15384054,transparent:!0,opacity:.55,sizeAttenuation:!0,depthWrite:!1,blending:Cs});this.dust=new Lc(c,f),this.scene.add(this.dust)}buildFarDust(){const i=this.opts.isMobile?400:800,a=new Float32Array(i*3);for(let d=0;d<i;d++)a[d*3]=(Math.random()-.5)*56,a[d*3+1]=(Math.random()-.5)*32,a[d*3+2]=-15-Math.random()*40;const c=new ws;c.setAttribute("position",new Ic(a,3));const f=new Nc({size:.045,color:16641021,transparent:!0,opacity:.32,sizeAttenuation:!0,depthWrite:!1,blending:Cs});this.farDust=new Lc(c,f),this.scene.add(this.farDust)}renderOnce(){this.composer.render()}setScroll(i){this.scrollTarget=Math.max(0,Math.min(1,i))}resetScroll(){this.scroll=0,this.scrollTarget=0,this.camera.position.z=18;for(const i of this.crystals){const a=i.userData;i.position.z=a.base.z}this.opts.reducedMotion&&this.renderOnce()}setMouse(i,a){this.mouseTarget.set(i,a)}dispose(){var i;cancelAnimationFrame(this.raf),window.removeEventListener("resize",this.resize);for(const a of this.crystals)a.geometry.dispose(),a.material.dispose();this.dust&&(this.dust.geometry.dispose(),this.dust.material.dispose()),this.farDust&&(this.farDust.geometry.dispose(),this.farDust.material.dispose()),this.composer.dispose(),(i=this.envMap)==null||i.dispose(),this.pmrem.dispose(),this.renderer.dispose()}}function Fv(s){const i=S.useRef(null);return S.useEffect(()=>{const c=s.current;if(!c)return;const f=k=>window.matchMedia(k).matches,d=f("(prefers-reduced-motion: reduce)"),h=f("(max-width: 768px)")||f("(pointer: coarse)"),m=new Dv(c,{reducedMotion:d,isMobile:h});i.current=m;const y=()=>{const k=document.body.scrollHeight-window.innerHeight;if(k<=0){m.setScroll(0);return}m.setScroll(window.scrollY/k)},E=k=>{m.setMouse(k.clientX/window.innerWidth*2-1,-(k.clientY/window.innerHeight*2-1))};return window.addEventListener("scroll",y,{passive:!0}),h||window.addEventListener("mousemove",E,{passive:!0}),y(),()=>{window.removeEventListener("scroll",y),window.removeEventListener("mousemove",E),m.dispose(),i.current=null}},[s]),S.useCallback(()=>{var c;(c=i.current)==null||c.resetScroll()},[])}const Av=S.lazy(()=>Zn(()=>import("./index-C7wvg7EA.js"),__vite__mapDeps([0,1,2,3,4]))),Bv=S.lazy(()=>Zn(()=>import("./index-Bzn_nH5J.js"),__vite__mapDeps([5,1,2,3,6]))),zv=S.lazy(()=>Zn(()=>import("./index-lzDYzwFO.js"),__vite__mapDeps([7,1,2,3,8,6]))),Ov=S.lazy(()=>Zn(()=>import("./index-kz0mHQc2.js"),__vite__mapDeps([9,1,2,3,10,6]))),Uv=S.lazy(()=>Zn(()=>import("./index-B0C3hdD4.js"),__vite__mapDeps([11,1,2,3,12]))),jv=S.lazy(()=>Zn(()=>import("./index-C9gy1Zjd.js"),__vite__mapDeps([13,3,14])));function Vv(){const s=Vh()["*"]??"";return K.jsx(tm,{to:s?`/notes/${s}`:"/notes",replace:!0})}function Hv(){const[s,i]=S.useState(!1),a=S.useRef(null),c=kt(),f=Fv(a);return S.useEffect(()=>{const d=()=>i(!0);return window.addEventListener("tang:open-wechat",d),()=>window.removeEventListener("tang:open-wechat",d)},[]),S.useEffect(()=>{window.scrollTo(0,0),f()},[c.pathname,f]),K.jsxs(K.Fragment,{children:[K.jsx("canvas",{ref:a,className:"global-canvas","aria-hidden":"true"}),K.jsx("div",{className:"app-shell",children:K.jsx("div",{className:"page-transition",children:K.jsx(S.Suspense,{fallback:null,children:K.jsxs(rm,{children:[K.jsx(sn,{path:"/",element:K.jsx(Av,{})}),K.jsx(sn,{path:"/notes",element:K.jsx(Bv,{})}),K.jsx(sn,{path:"/notes/:id",element:K.jsx(zv,{})}),K.jsx(sn,{path:"/blog/*",element:K.jsx(Vv,{})}),K.jsx(sn,{path:"/resume",element:K.jsx(Uv,{})}),K.jsx(sn,{path:"/about",element:K.jsx(Ov,{})}),K.jsx(sn,{path:"*",element:K.jsx(jv,{})})]})})},c.pathname)}),K.jsx(pv,{}),K.jsx(wv,{visible:s,onClose:()=>i(!1)}),K.jsx(Ev,{})]})}nh.createRoot(document.getElementById("root")).render(K.jsx(Pm,{basename:"/Tang-Space/",children:K.jsx(Hv,{})}));export{Ym as E,Sf as L,bc as N,Vh as a,Xm as d,K as j,Km as n,S as r,kt as u};
