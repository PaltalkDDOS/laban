let isFullScreen = false;
let originalCompassParent = null;
let lastTapTime = 0;

/**
 * HÀM XỬ LÝ SỰ KIỆN GỘP (Thông minh hơn)
 * Dùng e.target để biết chính xác người dùng đang bấm vào cái gì
 */
function handleInteraction(e) {
    // Tìm phần tử .compass-container gần nhất từ điểm bạn chạm
    const isCompass = e.target.closest('.compass-container');
    const isFullScreenDiv = document.getElementById('fullscreenMode');
    
    // Nếu chạm vào vùng la bàn (và đang ở chế độ thường)
    if (isCompass && !isFullScreen) {
        e.preventDefault(); // Ngăn chặn các sự kiện hệ thống khác
        toggleFullScreenMode();
    } 
    // Nếu chạm vào vùng fullscreen (và đang ở chế độ full)
    else if (isFullScreen && isFullScreenDiv) {
        exitFullScreenMode();
    }
}

// 1. Lắng nghe Double Click (Máy tính)
document.addEventListener('dblclick', handleInteraction);

// 2. Lắng nghe Double Tap (Điện thoại) - Tối ưu bằng cách kiểm tra thời gian
document.addEventListener('touchend', (e) => {
    const currentTime = new Date().getTime();
    if (currentTime - lastTapTime < 450) {
        handleInteraction(e);
    }
    lastTapTime = currentTime;
});

function toggleFullScreenMode() {
    if (isFullScreen) return;

    const compassContainer = document.querySelector('.compass-container');
    const statusPanel = document.querySelector('.status-panel');
    const fsIcon = document.querySelector('.fs-icon');

    if (!compassContainer) return;
    // Lưu lại cha gốc để sau này trả về chính xác
    if (!originalCompassParent) originalCompassParent = compassContainer.parentElement;

    // Ẩn phần giải thích
    const giaiThich = document.getElementById('dien-giai-bo-sung');
    if (giaiThich) giaiThich.style.display = 'none';

    // Tạo màn hình đen phủ lên
    const fsDiv = document.createElement('div');
    fsDiv.id = 'fullscreenMode';
    fsDiv.className = 'fullscreen-mode active';
    // Dùng style trực tiếp để đảm bảo không bị CSS khác đè lên
    fsDiv.style.cssText = "position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.9); z-index:99999; display:flex; flex-direction:column; align-items:center; justify-content:center; transition:opacity 0.3s; opacity:0;";
    
    // Tạo wrapper cho la bàn và status
    const fsCompassWrapper = document.createElement('div');
    fsCompassWrapper.id = 'fs-compass-wrapper';
    
    const fsStatusWrapper = document.createElement('div');
    fsStatusWrapper.id = 'fs-status-wrapper';
    
    fsDiv.appendChild(fsCompassWrapper);
    fsDiv.appendChild(fsStatusWrapper);
    document.body.appendChild(fsDiv);

    // Di chuyển phần tử vào (không dùng innerHTML để tránh lỗi)
    fsCompassWrapper.appendChild(compassContainer);
    if (statusPanel) fsStatusWrapper.appendChild(statusPanel);

    // Tính toán kích thước ngay lập tức
    applyDynamicScaling();

    // Hiệu ứng hiện màn hình
    setTimeout(() => { fsDiv.style.opacity = '1'; }, 10);
    if (fsIcon) fsIcon.style.opacity = '0';

    isFullScreen = true;
    if (typeof recalculateFate === 'function') recalculateFate();
}

// Giữ nguyên hàm exitFullScreenMode của bạn, chỉ cần sửa lại logic trả về status
function exitFullScreenMode() {
    const fs = document.getElementById('fullscreenMode');
    if (!fs) return;

    fs.style.opacity = '0';
    setTimeout(() => {
        const compass = document.querySelector('.compass-container');
        const status = document.querySelector('.status-panel');
        const fsIcon = document.querySelector('.fs-icon');
        const giaiThich = document.getElementById('dien-giai-bo-sung');

        if (compass && originalCompassParent) {
            // Trả la bàn về chỗ cũ
            originalCompassParent.appendChild(compass);
            // RESET lại kích thước để CSS trang chính hoạt động lại
            compass.style.width = ''; 
            compass.style.height = '';
        }
        
        // Trả status về vị trí cũ (ngay sau la bàn)
        if (status && originalCompassParent) {
            originalCompassParent.appendChild(status);
        }

        if (giaiThich) giaiThich.style.display = '';
        fs.remove();
        isFullScreen = false;
        if (fsIcon) fsIcon.style.opacity = '1';
        
        if (typeof updateCompassUI === 'function') updateCompassUI(lastHeading);
    }, 300);
}
function applyDynamicScaling() {
    const compassContainer = document.querySelector('.compass-container');
    if (!compassContainer) return;
    
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Tính kích thước: 90% chiều rộng hoặc 70% chiều cao
    let size = Math.min(viewportWidth * 0.9, viewportHeight * 0.7);
    if (size > 500) size = 500; // Giới hạn max 500px cho iPad/Desktop
    
    compassContainer.style.width = size + 'px';
    compassContainer.style.height = size + 'px';
}
