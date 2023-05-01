// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,l=r.__lookupSetter__,a=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,a){var c,f,p,y;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof a||null===a||"[object Array]"===n.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((f="value"in a)&&(u.call(e,t)||l.call(e,t)?(c=e.__proto__,e.__proto__=r,delete e[t],e[t]=a.value,e.__proto__=c):e[t]=a.value),p="get"in a,y="set"in a,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(e,t,a.get),y&&i&&i.call(e,t,a.set),e};function c(e,t,r){a(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(e){return"number"==typeof e}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,m=Object.prototype.hasOwnProperty,s="function"==typeof Symbol?Symbol.toStringTag:"",d=y()?function(e){var t,r,n,o,i;if(null==e)return b.call(e);r=e[s],i=s,t=null!=(o=e)&&m.call(o,i);try{e[s]=void 0}catch(t){return b.call(e)}return n=b.call(e),t?e[s]=r:delete e[s],n}:function(e){return b.call(e)},_=Number,g=_.prototype.toString,v=y();function h(e){return"object"==typeof e&&(e instanceof _||(v?function(e){try{return g.call(e),!0}catch(e){return!1}}(e):"[object Number]"===d(e)))}function w(e){return f(e)||h(e)}function j(e){return e!=e}c(w,"isPrimitive",f),c(w,"isObject",h);var S=Math.sqrt;function T(e,t){var r,n,o,i,u,l,a,c,p,y,b,m;if(r=0,n=0,b=0,m=0,arguments.length){if(!f(e))throw new TypeError("invalid argument. First argument must be a number primitive. Value: `"+e+"`.");if(!f(t))throw new TypeError("invalid argument. Second argument must be a number primitive. Value: `"+t+"`.");return a=e,c=t,d}return a=0,c=0,s;function s(e,t){var u;return 0===arguments.length?0===m?null:1===m?j(r)||j(n)?NaN:0:b/(m-1)/(p*y):(r+=(l=e-a)*(e-(a+=l/(m+=1))),n+=(i=t-(c+=(o=t-c)/m))*o,b+=l*i,m<2?j(r)||j(n)?NaN:0:(p=S(r/(u=m-1)),y=S(n/u),b/u/(p*y)))}function d(e,t){return 0===arguments.length?0===m?null:b/m/(p*y):(n+=(u=t-c)*u,b+=(l=e-a)*u,p=S((r+=l*l)/(m+=1)),y=S(n/m),b/m/(p*y))}}function O(){var e,t=arguments,r=t[0],n="https://stdlib.io/e/"+r+"?";for(e=1;e<t.length;e++)n+="&arg[]="+encodeURIComponent(t[e]);return n}return function(e,t){var r;if(arguments.length){if(!f(e))throw new TypeError(O("0eh4M",e));if(!f(t))throw new TypeError(O("0eh4N",t));r=T(e,t)}else r=T();return n;function n(e,t){var n;return 0===arguments.length?null===(n=r())?n:1-n:1-r(e,t)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).incrpcorrdist=t();
//# sourceMappingURL=browser.js.map
