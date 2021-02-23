(()=>{"use strict";var e={426:(e,n,r)=>{r.d(n,{Z:()=>i});var t=r(645),o=r.n(t)()((function(e){return e[1]}));o.push([e.id,"h1 {\n    color: red;\n  }",""]);const i=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r=e(n);return n[2]?"@media ".concat(n[2]," {").concat(r,"}"):r})).join("")},n.i=function(e,r,t){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);t&&o[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),n.push(s))}},n}},379:(e,n,r)=>{var t,o=function(){var e={};return function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[n]=r}return e[n]}}(),i=[];function a(e){for(var n=-1,r=0;r<i.length;r++)if(i[r].identifier===e){n=r;break}return n}function c(e,n){for(var r={},t=[],o=0;o<e.length;o++){var c=e[o],s=n.base?c[0]+n.base:c[0],u=r[s]||0,l="".concat(s," ").concat(u);r[s]=u+1;var d=a(l),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:l,updater:m(f,n),references:1}),t.push(l)}return t}function s(e){var n=document.createElement("style"),t=e.attributes||{};if(void 0===t.nonce){var i=r.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(e){n.setAttribute(e,t[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var u,l=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function d(e,n,r,t){var o=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet)e.styleSheet.cssText=l(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function f(e,n,r){var t=r.css,o=r.media,i=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var g=null,p=0;function m(e,n){var r,t,o;if(n.singleton){var i=p++;r=g||(g=s(n)),t=d.bind(null,r,i,!1),o=d.bind(null,r,i,!0)}else r=s(n),t=f.bind(null,r,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var r=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<r.length;t++){var o=a(r[t]);i[o].references--}for(var s=c(e,n),u=0;u<r.length;u++){var l=a(r[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}r=s}}}}},n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={id:t,exports:{}};return e[t](o,o.exports,r),o.exports}r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=r(379),n=r.n(e),t=r(426);n()(t.Z,{insert:"head",singleton:!1}),t.Z.locals;var o=gsap;o.registerPlugin(ScrollTrigger),o.defaults({overwrite:!0});var i={blue_mins:0,blue_hrs:0},a={orange_mins:0,orange_hrs:0};function c(e){o.to(i,0,{blue_mins:"+="+e,onUpdate:g,ease:Linear.easeNone})}function s(e){o.to(i,0,{blue_mins:"-="+e,onUpdate:g,ease:Linear.easeNone})}function u(e){o.to(i,0,{blue_hrs:"+="+e,onUpdate:m,ease:Linear.easeNone})}function l(e){o.to(a,0,{orange_hrs:"+="+e,onUpdate:h,ease:Linear.easeNone})}function d(e){o.to(i,0,{blue_hrs:"-="+e,onUpdate:m,ease:Linear.easeNone})}function f(e){o.to(a,0,{orange_hrs:"-="+e,onUpdate:h,ease:Linear.easeNone})}function g(){minBlue.innerHTML=i.blue_mins}function p(){minOrange.innerHTML=a.orange_mins}function m(){hourBlue.innerHTML=i.blue_hrs}function h(){hourOrange.innerHTML=a.orange_hrs}minBlue=document.getElementById("blue_mins"),hourBlue=document.getElementById("blue_hrs"),minOrange=document.getElementById("orange_mins"),hourOrange=document.getElementById("orange_hrs"),gsap.timeline(),ScrollTrigger.create({trigger:"#trigger1",start:"center center",end:"center center",onEnter:function(){c(20),l(2)},onEnterBack:function(){s(20),f(2)},scrub:0}),ScrollTrigger.create({trigger:"#trigger2",start:"center center",end:"center center",onEnter:function(){u(3),l(9)},onEnterBack:function(){d(3),f(9)},scrub:0}),ScrollTrigger.create({trigger:"#trigger3",start:"center center",end:"center center",onEnter:function(){u(1),l(5)},onEnterBack:function(){d(1),f(5)},scrub:0}),ScrollTrigger.create({trigger:"#trigger4",start:"center center",end:"center center",onEnter:function(){c(5),l(2)},onEnterBack:function(){s(5),f(2)},scrub:0}),ScrollTrigger.create({trigger:"#trigger5",start:"center center",end:"center center",onEnter:function(){c(5),l(4),o.to(a,0,{orange_mins:"+=30",onUpdate:p,ease:Linear.easeNone})},onEnterBack:function(){s(5),f(4),o.to(a,0,{orange_mins:"-=30",onUpdate:p,ease:Linear.easeNone})},scrub:0})})()})();
