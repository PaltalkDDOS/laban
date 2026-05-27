let isFullScreen = false;
let originalCompassParent = null;

function toggleFullScreenMode() {
    // 1. Nếu đang Fullscreen thì thoát
    if (isFullScreen) {
        exitFullScreenMode();
        return;
    }

    const compassContainer = document.querySelector('.compass-container');
    const statusPanel = document.querySelector('.status-panel');

    // 2. Kiểm tra nếu không tìm thấy la bàn thì dừng lại ngay
    if (!compassContainer) {
        console.error("Không tìm thấy compass-container");
        return;
    }

    // 3. Chỉ lưu lại vị trí cha nếu chưa có (tránh ghi đè nếu gọi hàm nhiều lần)
    if (!originalCompassParent) {
        originalCompassParent = compassContainer.parentElement;
    }

    // 4. Tạo Overlay Fullscreen
    const fsDiv = document.createElement('div');
    fsDiv.id = 'fullscreenMode';
    fsDiv.className = 'fullscreen-mode active';
    fsDiv.innerHTML = `
        <div id="fs-compass-wrapper" style="width: 96vw; max-width: 460px; height: 96vw; max-height: 460px; margin: 20px auto 10px;"></div>
        <div id="fs-status-wrapper" style="width: 92%; max-width: 460px; margin: 0 auto;"></div>
    `;
    document.body.appendChild(fsDiv);

    // 5. Di chuyển các phần tử vào Fullscreen
    document.getElementById('fs-compass-wrapper').appendChild(compassContainer);
    if (statusPanel) {
        document.getElementById('fs-status-wrapper').appendChild(statusPanel);
    }

    isFullScreen = true;

    // 6. Cập nhật lại UI sau khi di chuyển
    requestAnimationFrame(() => {
        if (typeof updateCompassUI === 'function' && typeof lastHeading !== 'undefined') {
            updateCompassUI(lastHeading);
        }
        if (typeof recalculateFate === 'function') {
            recalculateFate();
        }
    });
}

function exitFullScreenMode() {
    const fs = document.getElementById('fullscreenMode');
    if (!fs) return;

    // Hiệu ứng mờ dần trước khi xóa
    fs.style.opacity = '0';
    
    setTimeout(() => {
        const compass = document.querySelector('.compass-container');
        const status = document.querySelector('.status-panel');

        if (compass && originalCompassParent) {
            originalCompassParent.appendChild(compass);
            if (status) originalCompassParent.insertBefore(status, compass.nextSibling);
        }

        fs.remove();
        isFullScreen = false;
        
        // Cập nhật sau khi đã trả về vị trí
        if (typeof updateCompassUI === 'function') updateCompassUI(lastHeading);
    }, 300); // Khớp với transition 0.3s
}

// DOUBLE TAP để thoát (rất quan trọng trên mobile)
let lastTapTime = 0;
document.addEventListener('touchend', function(e) {
    if (!isFullScreen) return;

    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTapTime;

    if (tapLength < 450 && tapLength > 0) {
        exitFullScreenMode();
    }
    lastTapTime = currentTime;
});
