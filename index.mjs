// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-pcorr@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function s(s,n){var i;if(arguments.length){if(!r(s))throw new TypeError(e("1Jb49",s));if(!r(n))throw new TypeError(e("1Jb4A",n));i=t(s,n)}else i=t();return function(r,t){var e;if(0===arguments.length)return null===(e=i())?e:1-e;return 1-i(r,t)}}export{s as default};
//# sourceMappingURL=index.mjs.map
