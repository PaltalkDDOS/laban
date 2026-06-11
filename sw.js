const CACHE_NAME = 'laban-pt-v3.6';

const ASSETS_TO_CACHE = [
  'LabanThanSo.html',
  'manifest.json',
  'icon-192.png',
  'icon-512.png',
  'ungho.png',
  'style.css',
  'phongthuy_khoahoc.js',
  'controls.js'
];

// Hàm hỗ trợ gửi tin nhắn nhanh tới tất cả các tab đang mở ứng dụng
const broadcastMessage = (type, data = {}) => {
  self.clients.matchAll({ includeUncontrolled: true, type: 'window' }).then((clients) => {
    clients.forEach((client) => {
      client.postMessage({ type, ...data });
    });
  });
};

// Sự kiện Cài đặt (Install) - Báo trạng thái ĐANG TẢI BẢN MỚI
self.addEventListener('install', (event) => {
  // Gửi tín hiệu báo cho giao diện biết ứng dụng đang kiểm tra và tải file ngầm
  broadcastMessage('CHECKING_FOR_UPDATE', { version: CACHE_NAME });
  broadcastMessage('UPDATE_AVAILABLE', { version: CACHE_NAME });

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.all(
        ASSETS_TO_CACHE.map((url) => {
          return cache.add(url).catch((err) => {
            console.warn(`PWA Không thể tải file này vào bộ nhớ đệm: ${url}`, err);
          });
        })
      );
    }).then(() => {
      console.log('🚀 Đã tải xong toàn bộ tài nguyên mới vào Cache.');
    })
  );
  // Ép Service Worker mới cài đặt nhảy thẳng vào trạng thái active không cần chờ tab cũ đóng hẳn
  self.skipWaiting();
});

// Sự kiện Kích hoạt (Activate) - Xóa bộ nhớ cũ & báo REFRESH
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log(`🧹 Đang xóa bộ nhớ đệm cũ: ${cache}`);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => {
      // Sau khi dọn dẹp xong xuôi, gửi tín hiệu thông báo cho giao diện kích hoạt Reload
      broadcastMessage('VERSION_UPDATED', { version: CACHE_NAME });
    })
  );
  // Giúp Service Worker chiếm quyền điều khiển các client ngay lập tức
  self.clients.claim();
});

// Chiến lược nạp mạng (Fetch) - Cache First
self.addEventListener('fetch', (event) => {
    if (!event.request.url.startsWith('http')) return;

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                // Nếu đã chạy bản mới và bộ nhớ khớp, thỉnh thoảng có thể gửi ALREADY_UP_TO_DATE (tùy chọn)
                return cachedResponse;
            }
            return fetch(event.request);
        })
    );
});
