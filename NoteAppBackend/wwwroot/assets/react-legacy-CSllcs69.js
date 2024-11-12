System.register(["./core-js-legacy-B-WjUrFm.js"],(function(e,t){"use strict";var r;return{setters:[e=>{r=e.g}],execute:function(){var t={exports:{}},n={},o={exports:{}},u={},a=Symbol.for("react.element"),c=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),p=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator,h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,S={};function E(e,t,r){this.props=e,this.context=t,this.refs=S,this.updater=r||h}function R(){}function w(e,t,r){this.props=e,this.context=t,this.refs=S,this.updater=r||h}E.prototype.isReactComponent={},E.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},E.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},R.prototype=E.prototype;var k=w.prototype=new R;k.constructor=w,b(k,E.prototype),k.isPureReactComponent=!0;var $=Array.isArray,j=Object.prototype.hasOwnProperty,g={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var n,o={},u=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(u=""+t.key),t)j.call(t,n)&&!C.hasOwnProperty(n)&&(o[n]=t[n]);var f=arguments.length-2;if(1===f)o.children=r;else if(1<f){for(var i=Array(f),s=0;s<f;s++)i[s]=arguments[s+2];o.children=i}if(e&&e.defaultProps)for(n in f=e.defaultProps)void 0===o[n]&&(o[n]=f[n]);return{$$typeof:a,type:e,key:u,ref:c,props:o,_owner:g.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var P=/\/+/g;function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,r,n,o){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var f=!1;if(null===e)f=!0;else switch(u){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case a:case c:f=!0}}if(f)return o=o(f=e),e=""===n?"."+I(f,0):n,$(o)?(r="",null!=e&&(r=e.replace(P,"$&/")+"/"),T(o,t,r,"",(function(e){return e}))):null!=o&&(x(o)&&(o=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,r+(!o.key||f&&f.key===o.key?"":(""+o.key).replace(P,"$&/")+"/")+e)),t.push(o)),1;if(f=0,n=""===n?".":n+":",$(e))for(var i=0;i<e.length;i++){var s=n+I(u=e[i],i);f+=T(u,t,r,s,o)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=v&&e[v]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),i=0;!(u=e.next()).done;)f+=T(u=u.value,t,r,s=n+I(u,i++),o);else if("object"===u)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return f}function D(e,t,r){if(null==e)return e;var n=[],o=0;return T(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function L(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var U={current:null},A={transition:null},F={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:A,ReactCurrentOwner:g};function N(){throw Error("act(...) is not supported in production builds of React.")}u.Children={map:D,forEach:function(e,t,r){D(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return D(e,(function(){t++})),t},toArray:function(e){return D(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},u.Component=E,u.Fragment=f,u.Profiler=s,u.PureComponent=w,u.StrictMode=i,u.Suspense=d,u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,u.act=N,u.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=b({},e.props),o=e.key,u=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,c=g.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(i in t)j.call(t,i)&&!C.hasOwnProperty(i)&&(n[i]=void 0===t[i]&&void 0!==f?f[i]:t[i])}var i=arguments.length-2;if(1===i)n.children=r;else if(1<i){f=Array(i);for(var s=0;s<i;s++)f[s]=arguments[s+2];n.children=f}return{$$typeof:a,type:e.type,key:o,ref:u,props:n,_owner:c}},u.createContext=function(e){return(e={$$typeof:p,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},u.createElement=O,u.createFactory=function(e){var t=O.bind(null,e);return t.type=e,t},u.createRef=function(){return{current:null}},u.forwardRef=function(e){return{$$typeof:y,render:e}},u.isValidElement=x,u.lazy=function(e){return{$$typeof:m,_payload:{_status:-1,_result:e},_init:L}},u.memo=function(e,t){return{$$typeof:_,type:e,compare:void 0===t?null:t}},u.startTransition=function(e){var t=A.transition;A.transition={};try{e()}finally{A.transition=t}},u.unstable_act=N,u.useCallback=function(e,t){return U.current.useCallback(e,t)},u.useContext=function(e){return U.current.useContext(e)},u.useDebugValue=function(){},u.useDeferredValue=function(e){return U.current.useDeferredValue(e)},u.useEffect=function(e,t){return U.current.useEffect(e,t)},u.useId=function(){return U.current.useId()},u.useImperativeHandle=function(e,t,r){return U.current.useImperativeHandle(e,t,r)},u.useInsertionEffect=function(e,t){return U.current.useInsertionEffect(e,t)},u.useLayoutEffect=function(e,t){return U.current.useLayoutEffect(e,t)},u.useMemo=function(e,t){return U.current.useMemo(e,t)},u.useReducer=function(e,t,r){return U.current.useReducer(e,t,r)},u.useRef=function(e){return U.current.useRef(e)},u.useState=function(e){return U.current.useState(e)},u.useSyncExternalStore=function(e,t,r){return U.current.useSyncExternalStore(e,t,r)},u.useTransition=function(){return U.current.useTransition()},u.version="18.3.1",o.exports=u;var V=e("r",o.exports);e("R",r(V));
/**
       * @license React
       * react-jsx-runtime.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */
var q=V,M=Symbol.for("react.element"),B=Symbol.for("react.fragment"),z=Object.prototype.hasOwnProperty,H=q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,W={key:!0,ref:!0,__self:!0,__source:!0};function Y(e,t,r){var n,o={},u=null,a=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(a=t.ref),t)z.call(t,n)&&!W.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:M,type:e,key:u,ref:a,props:o,_owner:H.current}}n.Fragment=B,n.jsx=Y,n.jsxs=Y,t.exports=n,e("j",t.exports)}}}));
