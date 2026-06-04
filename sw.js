const CACHE_NAME = 'laban-pt-v1';

// KHẮC PHỤC CHÍ MẠNG: Đã thêm đầy đủ dấu phẩy và xóa bỏ 'sw.js' ra khỏi danh sách tự cache
const ASSETS_TO_CACHE = [
  'LabanThanSo.html',
  'manifest.json',
  'icon-192.png',
  'icon-512.png',
  'ungho.png',
  'style.css',
  'controls.js'
];

// 1. Sự kiện Cài đặt (Install)
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// 2. Sự kiện Kích hoạt (Activate)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 3. Chiến lược nạp mạng (Fetch)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});