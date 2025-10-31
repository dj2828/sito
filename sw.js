const CACHE_NAME = 'offline-cache-v1';
const URLS_TO_CACHE = ['./', './index.html', './index.css', './index.js', 'https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap'];
const CACHE_MAX_AGE = 10 * 24 * 60 * 60 * 1000; // 10 giorni in ms

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(c => c.addAll(URLS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
});

self.addEventListener('fetch', async e => {
  const cache = await caches.open(CACHE_NAME);

  // Controlla la data di scadenza
  const now = Date.now();
  const cacheDate = await cache.match('cache-date');
  let expired = false;

  if (cacheDate) {
    const cachedTime = await cacheDate.text();
    if (now - Number(cachedTime) > CACHE_MAX_AGE) {
      expired = true;
    }
  } else {
    // Prima cache: salva la data
    cache.put('cache-date', new Response(String(now)));
  }

  if (expired) {
    await caches.delete(CACHE_NAME);
    const newCache = await caches.open(CACHE_NAME);
    await newCache.addAll(URLS_TO_CACHE);
    await newCache.put('cache-date', new Response(String(now)));
  }

  e.respondWith(
    fetch(e.request)
      .then(resp => {
        const clone = resp.clone();
        cache.put(e.request, clone);
        return resp;
      })
      .catch(() => cache.match(e.request))
  );
});
