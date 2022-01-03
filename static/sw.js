var CACHE_NAME = 'serabi-kocor-bu-yuni-v1';
var urlsToCache = [
  '/',
  '/css/main.css',
  '/main.js',
  '/link.js',
  '/img/menu-pandan.min.png',
  '/img/menu-gula-jawa.min.png',
  '/img/menu-mix.min.png',
  '/img/profile-serabi.min.png',
  '/img/serabi.min.png',
  '/favicon.ico'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName){
return cacheName != CACHE_NAME
        }).map(function(cacheName){
          return caches.delete(cacheName)
        })
      );
    })
  );
});

