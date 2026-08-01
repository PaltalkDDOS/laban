const CACHE_NAME = 'laban-pt-v9'; // Đã đổi version để update

const ASSETS_TO_CACHE = [
  'LabanThanSo.html',
  'index.html',
  'manifest.json',
  'icon-192.png',
  'icon-512.png',
  'ungho.png',
  'style.css',
  'phongthuy_khoahoc.js',
  'WMMHR2025.COF',
  'controls.js'
];

// 1. Sự kiện Cài đặt (Install) - GIỮ NGUYÊN SỰ CẨN THẬN CỦA BẠN
// Cách này an toàn vì nếu 1 file lỗi, nó không làm hỏng cả App
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.all(
        ASSETS_TO_CACHE.map((url) => {
          return cache.add(url).catch((err) => {
            console.warn(`PWA Không thể tải file: ${url}`, err);
          });
        })
      );
    })
  );
  self.skipWaiting();
});

// 2. Sự kiện Kích hoạt (Activate) - GIỮ NGUYÊN TÍNH NĂNG GIAO TIẾP VỚI TAB
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME).map(name => caches.delete(name))
      );
    }).then(() => {
        // Gửi lệnh cho toàn bộ tab đang mở để biết đã update
        self.clients.matchAll().then(clients => {
            clients.forEach(client => {
                client.postMessage({ type: 'VERSION_UPDATED' });
            });
        });
    })
  );
  self.clients.claim();
});

// 3. Chiến lược Fetch (Tối ưu hóa chạy Offline)
// Kết hợp giữa tốc độ của Cache và sự ổn định khi không có mạng
self.addEventListener('fetch', (event) => {
    // Chỉ xử lý các request GET (không xử lý POST/PUT...)
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            // Nếu có cache, trả về ngay (Siêu tốc)
            if (cachedResponse) {
                return cachedResponse;
            }
            
            // Nếu không có cache, đi tải trên mạng
            return fetch(event.request).then((networkResponse) => {
                // Tự động lưu bản mới tải về vào cache để lần sau dùng offline
                const responseClone = networkResponse.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseClone);
                });
                return networkResponse;
            }).catch(() => {
                // Nếu offline mà không có cache, trả về index.html (Tránh lỗi trắng trang)
                return caches.match('index.html');
            });
        })
    );
});