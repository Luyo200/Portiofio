const CACHE_NAME = 'luyolo-portfolio-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/Style.css',
  '/chat.js',
  '/manifest.json',
  '/images/IMG-20250519-WA0000.jpg',
  '/images/logo.png',
  '/images/logo.png',
  // Add other assets like your CV PDF, fonts, etc.
];

// Install event: cache files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate event: clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});

// Fetch event: serve cached files if offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
