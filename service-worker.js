const CACHE_NAME = 'MotherWish-v1';
const ASSETS = [
    '/',
    '/static/css/styles.css',
    '/static/js/main.js',
    '/static/manifest.json',
    '/static/icons/icon-192.svg',
    '/static/icons/icon-512.svg',
    '/static/icons/dr-Myra.png'
];

// Install — cache all core assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('[SW] Caching core assets');
                return cache.addAll(ASSETS);
            })
            .then(() => self.skipWaiting())
    );
});

// Activate — clean up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
            )
        ).then(() => self.clients.claim())
    );
});

// Fetch — network-first for pages, cache-first for assets
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);

    // Skip non-GET requests and external URLs
    if (event.request.method !== 'GET' || !url.origin.includes(self.location.origin)) return;

    // HTML pages: try network first, fall back to cache
    if (event.request.headers.get('accept')?.includes('text/html') || url.pathname.endsWith('.html')) {
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                    return response;
                })
                .catch(() => caches.match(event.request).then(cached => cached || caches.match('./home.html')))
        );
        return;
    }

    // Static assets (CSS, JS, icons): cache-first
    event.respondWith(
        caches.match(event.request)
            .then(cached => {
                if (cached) return cached;
                return fetch(event.request).then(response => {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                    return response;
                });
            })
            .catch(() => new Response('Offline', { status: 503, statusText: 'Offline' }))
    );
});
