!function(e){var t={};function r(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(o,a,function(t){return e[t]}.bind(null,a));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([,function(e,t,r){"use strict";r.r(t);var o=()=>{const e=document.querySelectorAll("[data-sidebar]"),t=document.querySelector("body"),r=Array.from(e),o=document.querySelector(".sidebar-content"),a=document.querySelectorAll("[data-menu]"),c=document.querySelector(".sidebar-backdrop");c.addEventListener("click",e=>{c.classList.remove("active"),t.classList.remove("overflow"),o.classList.remove("active"),r.forEach(e=>{e.classList.remove("active")}),a.forEach(e=>{e.style.display="none"})}),r.forEach(e=>{e.addEventListener("click",e=>{const n=e.target,s=document.querySelector(`[data-menu=${n.dataset.sidebar}]`);r.forEach(e=>{e.classList.remove("active")}),a.forEach(e=>{e.style.display="none"}),s.style.display="block",n.classList.add("active"),o.classList.remove("active"),t.classList.add("overflow"),c.classList.add("active"),setTimeout(()=>{o.classList.add("active")},300)})})};(e=>{const t=document.querySelectorAll(e);Array.from(t).forEach(e=>e.addEventListener("click",e=>{const t=e.target;return document.querySelector(`[data-modal=${t.dataset.open}]`).classList.toggle("is-active")}))})("[data-open]"),o()}]);