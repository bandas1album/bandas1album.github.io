!function(t){var o={};function e(l){if(o[l])return o[l].exports;var r=o[l]={i:l,l:!1,exports:{}};return t[l].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=o,e.d=function(t,o,l){e.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:l})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,o){if(1&o&&(t=e(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var l=Object.create(null);if(e.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var r in t)e.d(l,r,function(o){return t[o]}.bind(null,r));return l},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},e.p="",e(e.s=3)}([function(t,o,e){"use strict";var l=e(1),r=e.n(l);o.a=()=>{r.a.polyfill();const t=document.querySelectorAll("[data-sidebar]"),o=document.querySelector("body"),e=document.querySelector(".sidebar-content"),l=document.querySelectorAll("[data-menu]"),c=document.querySelector(".sidebar-backdrop"),i=Array.from(t);c.addEventListener("click",t=>{c.classList.remove("active"),o.classList.remove("overflow"),e.classList.remove("active"),i.forEach(t=>{t.classList.remove("active")}),l.forEach(t=>{t.style.display="none"})}),i.forEach(t=>{t.addEventListener("click",t=>{const r=t.target,s=document.querySelector(`[data-menu=${r.dataset.sidebar}]`);i.forEach(t=>{t.classList.remove("active")}),l.forEach(t=>{t.style.display="none"}),e.scroll({top:0,left:0,behavior:"smooth"}),s.style.display="block",r.classList.add("active"),e.classList.add("active"),o.classList.add("overflow"),c.classList.add("active")})})}},function(t,o,e){!function(){"use strict";t.exports={polyfill:function(){var t=window,o=document;if(!("scrollBehavior"in o.documentElement.style)||!0===t.__forceSmoothScrollPolyfill__){var e,l=t.HTMLElement||t.Element,r={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:l.prototype.scroll||s,scrollIntoView:l.prototype.scrollIntoView},c=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,i=(e=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(e)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==n(arguments[0])?v.call(t,o.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):r.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(n(arguments[0])?r.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):v.call(t,o.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},l.prototype.scroll=l.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==n(arguments[0])){var t=arguments[0].left,o=arguments[0].top;v.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===o?this.scrollTop:~~o)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},l.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==n(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},l.prototype.scrollIntoView=function(){if(!0!==n(arguments[0])){var e=u(this),l=e.getBoundingClientRect(),c=this.getBoundingClientRect();e!==o.body?(v.call(this,e,e.scrollLeft+c.left-l.left,e.scrollTop+c.top-l.top),"fixed"!==t.getComputedStyle(e).position&&t.scrollBy({left:l.left,top:l.top,behavior:"smooth"})):t.scrollBy({left:c.left,top:c.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function s(t,o){this.scrollLeft=t,this.scrollTop=o}function n(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function a(t,o){return"Y"===o?t.clientHeight+i<t.scrollHeight:"X"===o?t.clientWidth+i<t.scrollWidth:void 0}function f(o,e){var l=t.getComputedStyle(o,null)["overflow"+e];return"auto"===l||"scroll"===l}function d(t){var o=a(t,"Y")&&f(t,"Y"),e=a(t,"X")&&f(t,"X");return o||e}function u(t){for(;t!==o.body&&!1===d(t);)t=t.parentNode||t.host;return t}function p(o){var e,l,r,i,s=(c()-o.startTime)/468;i=s=s>1?1:s,e=.5*(1-Math.cos(Math.PI*i)),l=o.startX+(o.x-o.startX)*e,r=o.startY+(o.y-o.startY)*e,o.method.call(o.scrollable,l,r),l===o.x&&r===o.y||t.requestAnimationFrame(p.bind(t,o))}function v(e,l,i){var n,a,f,d,u=c();e===o.body?(n=t,a=t.scrollX||t.pageXOffset,f=t.scrollY||t.pageYOffset,d=r.scroll):(n=e,a=e.scrollLeft,f=e.scrollTop,d=s),p({scrollable:n,method:d,startTime:u,startX:a,startY:f,x:l,y:i})}}}}()},,function(t,o,e){"use strict";e.r(o);var l=e(0);Object(l.a)()}]);