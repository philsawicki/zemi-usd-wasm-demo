/*! For license information please see bundle.6792789f8f4aff33ff0b.js.LICENSE.txt */
(()=>{var e={130:()=>{"undefined"==typeof window?(self.addEventListener("install",(()=>self.skipWaiting())),self.addEventListener("activate",(e=>e.waitUntil(self.clients.claim()))),self.addEventListener("message",(e=>{e.data&&"deregister"===e.data.type&&self.registration.unregister().then((()=>self.clients.matchAll())).then((e=>{e.forEach((e=>e.navigate(e.url)))}))})),self.addEventListener("fetch",(function(e){"only-if-cached"===e.request.cache&&"same-origin"!==e.request.mode||e.respondWith(fetch(e.request).then((e=>{if(0===e.status)return e;const r=new Headers(e.headers);return r.set("Cross-Origin-Embedder-Policy","require-corp"),r.set("Cross-Origin-Opener-Policy","same-origin"),r.set("Cross-Origin-Resource-Policy","cross-origin"),new Response(e.body,{status:e.status,statusText:e.statusText,headers:r})})).catch((e=>console.error(e))))}))):(()=>{const e={shouldRegister:()=>!0,shouldDeregister:()=>!1,doReload:()=>window.location.reload(),quiet:!1,...window.coi},r=navigator;e.shouldDeregister()&&r.serviceWorker&&r.serviceWorker.controller&&r.serviceWorker.controller.postMessage({type:"deregister"}),!1===window.crossOriginIsolated&&e.shouldRegister()&&(window.isSecureContext?r.serviceWorker&&r.serviceWorker.register(window.document.currentScript.src).then((t=>{e.quiet,console.log("COOP/COEP Service Worker registered",t.scope),t.addEventListener("updatefound",(()=>{!e.quiet&&console.log("Reloading page to make use of updated COOP/COEP Service Worker."),e.doReload()})),t.active&&!r.serviceWorker.controller&&(!e.quiet&&console.log("Reloading page to make use of COOP/COEP Service Worker."),e.doReload())}),(r=>{!e.quiet&&console.error("COOP/COEP Service Worker failed to register:",r)})):!e.quiet&&console.log("COOP/COEP Service Worker not registered, a secure context is required."))})()}},r={};function t(o){var s=r[o];if(void 0!==s)return s.exports;var i=r[o]={exports:{}};return e[o](i,i.exports,t),i.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{"use strict";t(130)})()})();
