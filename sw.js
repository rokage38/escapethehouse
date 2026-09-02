// MISSING: PUN — merge build. Offline cache for the flat branch layout.
var VERSION='mp-merge-2';
var FILES=['./','./index.html','./privacy.html','./support.html','./native-shell.js','./fonts.css','./anton-regular.ttf','./eb-garamond-400.ttf','./eb-garamond-500.ttf','./eb-garamond-600.ttf','./eb-garamond-italic-400.ttf','./pirata-one-regular.ttf','./space-mono-400.ttf','./space-mono-700.ttf','./special-elite-regular.ttf','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-maskable-512.png','./apple-touch-icon.png','./icon-missing-pun-192.png','./icon-missing-pun-512.png','./apple-touch-icon-missing-pun.png'];
self.addEventListener('install', function(e){
  e.waitUntil(caches.open(VERSION).then(function(c){ return c.addAll(FILES); }).then(function(){ return self.skipWaiting(); }));
});
self.addEventListener('activate', function(e){
  e.waitUntil(caches.keys().then(function(keys){ return Promise.all(keys.filter(function(k){ return k!==VERSION; }).map(function(k){ return caches.delete(k); })); }).then(function(){ return self.clients.claim(); }));
});
self.addEventListener('fetch', function(e){
  var url=new URL(e.request.url);
  if (url.origin!==self.location.origin) return;
  e.respondWith(fetch(e.request).then(function(res){
    var copy=res.clone(); caches.open(VERSION).then(function(c){ c.put(e.request, copy); }); return res;
  }).catch(function(){ return caches.match(e.request, {ignoreSearch:true}).then(function(r){ return r || caches.match('./index.html'); }); }));
});
