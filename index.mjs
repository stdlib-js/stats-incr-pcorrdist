// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-pcorr@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function s(s,n){var i;if(arguments.length){if(!r(s))throw new TypeError(e("0eh4M",s));if(!r(n))throw new TypeError(e("0eh4N",n));i=t(s,n)}else i=t();return o;function o(r,t){var e;return 0===arguments.length?null===(e=i())?e:1-e:1-i(r,t)}}export{s as default};
//# sourceMappingURL=index.mjs.map
