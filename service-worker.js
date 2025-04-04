const CACHE_NAME = 'accordi-canzoni-cache-v1';
const urlsToCache = [
    '/accordicanzoni/',
    '/accordicanzoni/index.html',
    '/accordicanzoni/song-list.html',
    '/accordicanzoni/styles.css',
    '/accordicanzoni/app.js',
    '/accordicanzoni/manifest.json',
    '/accordicanzoni/icon.png',
    '/accordicanzoni/icon-512.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                return cachedResponse || fetch(event.request);
            })
    );
});