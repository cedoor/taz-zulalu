if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let i={};const r=e=>n(e,t),d={module:{uri:t},exports:i,require:r};s[t]=Promise.all(a.map((e=>d[e]||r(e)))).then((e=>(c(...e),i)))}}define(["./workbox-790f51aa"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/WsK30INF_VEPD8NXjW_eS/_buildManifest.js",revision:"fbde5a2ac74dcfbf5c3b817040446941"},{url:"/_next/static/WsK30INF_VEPD8NXjW_eS/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0c4fd1c2-8f7537239a81d032.js",revision:"8f7537239a81d032"},{url:"/_next/static/chunks/292-f8092119bae77fe5.js",revision:"f8092119bae77fe5"},{url:"/_next/static/chunks/40-64a12b3adff4f2e7.js",revision:"64a12b3adff4f2e7"},{url:"/_next/static/chunks/418-d592315f17d607ce.js",revision:"d592315f17d607ce"},{url:"/_next/static/chunks/425-2f87da99690f11e6.js",revision:"2f87da99690f11e6"},{url:"/_next/static/chunks/495-fd6482af51b19e85.js",revision:"fd6482af51b19e85"},{url:"/_next/static/chunks/54-7dc964acac350dc3.js",revision:"7dc964acac350dc3"},{url:"/_next/static/chunks/57-05de6c8e26eb8688.js",revision:"05de6c8e26eb8688"},{url:"/_next/static/chunks/584-8069ba1be2e9adf9.js",revision:"8069ba1be2e9adf9"},{url:"/_next/static/chunks/59b4e022-5352d3e1991e22ad.js",revision:"5352d3e1991e22ad"},{url:"/_next/static/chunks/707-5ee2a6fc062ff034.js",revision:"5ee2a6fc062ff034"},{url:"/_next/static/chunks/786-8dd38587fe998e6c.js",revision:"8dd38587fe998e6c"},{url:"/_next/static/chunks/97-b7ef4276c3848870.js",revision:"b7ef4276c3848870"},{url:"/_next/static/chunks/ba7db96d-32ff144af59284b2.js",revision:"32ff144af59284b2"},{url:"/_next/static/chunks/c8eae200-909ff8be5fdb16e9.js",revision:"909ff8be5fdb16e9"},{url:"/_next/static/chunks/e893f787-44428e771b2cbe3d.js",revision:"44428e771b2cbe3d"},{url:"/_next/static/chunks/framework-49f1e091cbf6b261.js",revision:"49f1e091cbf6b261"},{url:"/_next/static/chunks/main-7becfaeb8c90fd79.js",revision:"7becfaeb8c90fd79"},{url:"/_next/static/chunks/pages/_app-7da2ac40c723ffa4.js",revision:"7da2ac40c723ffa4"},{url:"/_next/static/chunks/pages/_error-d63cba356b3aa116.js",revision:"d63cba356b3aa116"},{url:"/_next/static/chunks/pages/artBoard-page-3f779febf8578890.js",revision:"3f779febf8578890"},{url:"/_next/static/chunks/pages/event/%5BparentMessageId%5D-8effc832d3fdad66.js",revision:"8effc832d3fdad66"},{url:"/_next/static/chunks/pages/events-b94d5611e467eb2c.js",revision:"b94d5611e467eb2c"},{url:"/_next/static/chunks/pages/experiences-page-6f03e3e10dd45e08.js",revision:"6f03e3e10dd45e08"},{url:"/_next/static/chunks/pages/generate-id-page-c9ce23eda43488e5.js",revision:"c9ce23eda43488e5"},{url:"/_next/static/chunks/pages/identity-94eb0000ad32dd94.js",revision:"94eb0000ad32dd94"},{url:"/_next/static/chunks/pages/index-cb8f1bda781c8977.js",revision:"cb8f1bda781c8977"},{url:"/_next/static/chunks/pages/join-d5991b3175a3393d.js",revision:"d5991b3175a3393d"},{url:"/_next/static/chunks/pages/myevents-ae5a9f7e0222e8a5.js",revision:"ae5a9f7e0222e8a5"},{url:"/_next/static/chunks/pages/myprofile-9f8030fd3e1c04a9.js",revision:"9f8030fd3e1c04a9"},{url:"/_next/static/chunks/pages/remove-tile-d58acd474092aa6c.js",revision:"d58acd474092aa6c"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-434fefa8f39d8fbc.js",revision:"434fefa8f39d8fbc"},{url:"/_next/static/css/53a9169c96cbb4d8.css",revision:"53a9169c96cbb4d8"},{url:"/_next/static/css/7be7d63e574c5051.css",revision:"7be7d63e574c5051"},{url:"/_next/static/css/81b8ad1493da7491.css",revision:"81b8ad1493da7491"},{url:"/dwg1.png",revision:"5006ca9ed839355b63494f53a789af2c"},{url:"/icon-192x192.png",revision:"7a7f006bf8b924c0a4fe241fb9828310"},{url:"/icon-256x256.png",revision:"d00d84c63d9acf331d6b742416b234f7"},{url:"/icon-384x384.png",revision:"fee6e19bbb2a7b262e0974b8a405d3c5"},{url:"/icon-512x512.png",revision:"0fd99d47defe3e77446bcc385d37e136"},{url:"/manifest.json",revision:"25356abf2d45e6e1cb3be4f12086348e"},{url:"/semaphore.zkey",revision:"955cd320a3df0710931a4db71feda1bc"},{url:"/semaphoreWasm.wasm",revision:"225acc73d69c675254998f14f1cedb46"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
