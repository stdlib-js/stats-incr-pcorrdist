// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===o.call(e.specifier)?o.call(n):a.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var s=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,u=String.prototype.replace,f=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,b=/\.0$/,y=/\.0*e/,w=/(\..*[^0])0*e/;function m(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":s(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=u.call(n,w,"$1e"),n=u.call(n,y,"e"),n=u.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=u.call(n,f,"e+0$1"),n=u.call(n,g,"e-0$1"),e.alternate&&(n=u.call(n,d,"$1."),n=u.call(n,h,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===p.call(e.specifier)?p.call(n):l.call(n)}function v(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var _=String.fromCharCode,S=Array.isArray;function E(e){return e!=e}function x(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function k(e){var r,t,n,a,o,s,l,p,u,f,g,d,h;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",l=1,p=0;p<e.length;p++)if("string"==typeof(n=e[p]))s+=n;else{if(r=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(a=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(o)?String(n.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(f=n.arg,g=n.width,d=n.padRight,h=void 0,(h=g-f.length)<0?f:f=d?f+v(h):v(h)+f)),s+=n.arg||"",l+=1}return s}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function V(e){var r,t,n,i;for(t=[],i=0,n=j.exec(e);n;)(r=e.slice(i,j.lastIndex-n[0].length)).length&&t.push(r),t.push(T(n)),i=j.lastIndex,n=j.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function F(e){var r,t;if("string"!=typeof e)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[V(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return k.apply(null,r)}var $=Object.prototype,I=$.toString,O=$.__defineGetter__,A=$.__defineSetter__,C=$.__lookupGetter__,P=$.__lookupSetter__,R=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===I.call(e))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(e,r)||P.call(e,r)?(n=e.__proto__,e.__proto__=$,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(e,r,t.get),o&&A&&A.call(e,r,t.set),e};function N(e,r,t){R(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Z(e){return"number"==typeof e}var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return G&&"symbol"==typeof Symbol.toStringTag}var L=Object.prototype.toString,U=Object.prototype.hasOwnProperty,J="function"==typeof Symbol?Symbol:void 0,M="function"==typeof J?J.toStringTag:"",X=W()?function(e){var r,t,n,i,a;if(null==e)return L.call(e);t=e[M],a=M,r=null!=(i=e)&&U.call(i,a);try{e[M]=void 0}catch(r){return L.call(e)}return n=L.call(e),r?e[M]=t:delete e[M],n}:function(e){return L.call(e)},q=Number,z=q.prototype.toString,B=W();function D(e){return"object"==typeof e&&(e instanceof q||(B?function(e){try{return z.call(e),!0}catch(e){return!1}}(e):"[object Number]"===X(e)))}function H(e){return Z(e)||D(e)}function K(e){return e!=e}N(H,"isPrimitive",Z),N(H,"isObject",D);var Q=Math.sqrt;function Y(e,r){var t,n,i,a,o,c,s,l,p,u,f,g;if(t=0,n=0,f=0,g=0,arguments.length){if(!Z(e))throw new TypeError(F("invalid argument. First argument must be a number. Value: `%s`.",e));if(!Z(r))throw new TypeError(F("invalid argument. Second argument must be a number. Value: `%s`.",r));return s=e,l=r,function(e,r){return 0===arguments.length?0===g?null:f/g/(p*u):(n+=(o=r-l)*o,f+=(c=e-s)*o,p=Q((t+=c*c)/(g+=1)),u=Q(n/g),f/g/(p*u))}}return s=0,l=0,function(e,r){var o;return 0===arguments.length?0===g?null:1===g?K(t)||K(n)?NaN:0:f/(g-1)/(p*u):(t+=(c=e-s)*(e-(s+=c/(g+=1))),n+=(a=r-(l+=(i=r-l)/g))*i,f+=c*a,g<2?K(t)||K(n)?NaN:0:(p=Q(t/(o=g-1)),u=Q(n/o),f/o/(p*u)))}}function ee(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}return function(e,r){var t;if(arguments.length){if(!Z(e))throw new TypeError(ee("1Jb49",e));if(!Z(r))throw new TypeError(ee("1Jb4A",r));t=Y(e,r)}else t=Y();return function(e,r){var n;return 0===arguments.length?null===(n=t())?n:1-n:1-t(e,r)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).incrpcorrdist=r();
//# sourceMappingURL=index.js.map
