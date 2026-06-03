const CACHE_NAME = 'laban-pt-v1';
// Khai báo danh sách các file cần nạp vào bộ nhớ đệm của điện thoại
const ASSETS_TO_CACHE = [
  'index.html',
  'manifest.json',
  'icon-192.png',
  'icon-512.png'
  // Nếu bạn có file style.css hoặc controls.js riêng biệt, hãy điền thêm tên file vào đây nhé, ví dụ:
  // 'style.css',
  // 'controls.js'
];

// 1. Sự kiện Cài đặt (Install) - Tự động tải lưu các file vào bộ nhớ máy
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// 2. Sự kiện Kích hoạt (Activate) - Dọn dẹp cache cũ khi bạn nâng cấp phiên bản
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

// 3. Chiến lược nạp mạng (Fetch) - Ưu tiên lấy file trong máy trước, giúp mở app lên lập tức
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