const cacheName = "dj 2828-combattimento mobile di mortali-2.0"; // NOME DA CAMBIARE PER NUOVA CACHE
const contentToCache = [
    "Build/cmdm.loader.js",
    "Build/cmdm.framework.js",
    "Build/cmdm.data",
    "Build/cmdm.wasm",
    "TemplateData/style.css",
    "https://dj2828.github.io/sito/mega%20truffa.com/servizzi/giochi/assetz/smash%20p1.mp4",
    "https://dj2828.github.io/sito/mega%20truffa.com/servizzi/giochi/assetz/smash%20p2.mp4"
];

self.addEventListener('install', function (e) {
    console.log('[Service Worker] Install');
    
    e.waitUntil((async function () {
      const cache = await caches.open(cacheName);
      console.log('[Service Worker] Caching all: app shell and content');
      await cache.addAll(contentToCache);
    })());
});

self.addEventListener('fetch', function (e) {
    e.respondWith((async function () {
      let response = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (response) { return response; }

      response = await fetch(e.request);
      const cache = await caches.open(cacheName);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })());
});
