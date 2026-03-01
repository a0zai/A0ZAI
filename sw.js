const cacheName = 'v1-0-origin';
const assets = [
  './',
  './index.html',
  './0.PNG',
  'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js',
  'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js',
  'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
