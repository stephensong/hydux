!function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=17)}({1:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={none:[],ofPromise:function(t,n,e,r){return[function(o){t(n).then(e).catch(r)}]},ofFn:function(t,n,e,r){return[function(o){try{e(t(n))}catch(t){r(t)}}]},ofSub:function(t){return[t]},batch:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return Array.prototype.concat.apply([],t)},map:function(t,n){return n.map(function(n){return function(e){return n(t(e))}})}}},17:function(t,n,e){"use strict";function r(t){var n,e=void 0===t?{}:t,r=e.store,i=void 0===r?localStorage:r,c=e.serialize,a=void 0===c?JSON.stringify:c,f=e.deserialize,s=void 0===f?JSON.parse:f,p=e.debounce,l=void 0===p?50:p,d=e.key,v=void 0===d?"hydux-persist":d;return function(t){return function(e){return t(o({},e,{init:function(){var t=e.init();t instanceof Array||(t=[t,u.default.none]);var n=i.getItem(v);return n&&(t[0]=s(n)),[t[0],t[1]]},onUpdate:function(t){e.onUpdate&&e.onUpdate(t),n&&clearTimeout(n);var r=function(){return i.setItem(v,a(t.nextAppState))};n=setTimeout(r,l)}}))}}}var o=this&&this.__assign||Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++){n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};Object.defineProperty(n,"__esModule",{value:!0});var u=e(1);n.default=r}});
//# sourceMappingURL=hydux-persist.js.map