const CACHE_NAME = 'laban-pt-v1.2';

const ASSETS_TO_CACHE = [
  'LabanThanSo.html',
  'manifest.json',
  'icon-192.png',
  'icon-512.png',
  'ungho.png',
  'style.css',
  'controls.js'
];

// Sự kiện Cài đặt (Install) - Đã tối ưu nạp an toàn từng file
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Chuyển sang map để nạp từng file, file nào lỗi 404 sẽ bị bỏ qua, không làm sập cả PWA
      return Promise.all(
        ASSETS_TO_CACHE.map((url) => {
          return cache.add(url).catch((err) => {
            console.warn(`PWA Không thể tải file này vào bộ nhớ đệm (Có thể sai tên hoặc thiếu file): ${url}`, err);
          });
        })
      );
    })
  );
  self.skipWaiting();
});

// Sự kiện Kích hoạt (Activate)
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

// Chiến lược nạp mạng (Fetch)
self.addEventListener('fetch', (event) => {
    // Chỉ xử lý các request tải file thông thường (http/https)
    if (!event.request.url.startsWith('http')) return;

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request);
        })
    );
});
