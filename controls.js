let isFullScreen = false;
let originalCompassParent = null;
let lastTapTime = 0;
let fsIcon = null;

// ====================== FULLSCREEN THÔNG MINH - ĐA NỀN TẢNG ======================
function handleInteraction(e) {
    if (isFullScreen) {
        exitFullScreenMode();
        return;
    }

    if (e.target.closest('.compass-container')) {
        e.preventDefault();
        toggleFullScreenMode();
    }
}

// Double Click (Máy tính + iPad)
document.addEventListener('dblclick', handleInteraction);

// Double Tap trên mobile (tối ưu cho tất cả trình duyệt)
document.addEventListener('touchend', (e) => {
    if (e.touches && e.touches.length > 1) return; // Bỏ qua nếu đang pinch zoom

    const currentTime = Date.now();
    if (currentTime - lastTapTime < 420 && currentTime - lastTapTime > 50) {
        handleInteraction(e);
    }
    lastTapTime = currentTime;
});

// ====================== TOGGLE FULLSCREEN ======================
function toggleFullScreenMode() {
    if (isFullScreen) return;

    const compassContainer = document.querySelector('.compass-container');
    const statusPanel = document.querySelector('.status-panel');
    if (!compassContainer) return;

    originalCompassParent = compassContainer.parentElement;

    hideNonEssentialElements();

    // Tạo fullscreen container
    const fsDiv = document.createElement('div');
    fsDiv.id = 'fullscreenMode';
    fsDiv.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        background: rgba(0,0,0,0.96); z-index: 9999; display: flex;
        flex-direction: column; align-items: center; justify-content: center;
        transition: opacity 0.4s ease;
    `;

    // Điều chỉnh kích thước la bàn theo thiết bị
    const isLargeScreen = window.innerWidth > 768;
    const compassSize = isLargeScreen ? "88vw" : "94vw";
    const maxSize = isLargeScreen ? "560px" : "480px";

    fsDiv.innerHTML = `
        <div id="fs-compass-wrapper" style="width: ${compassSize}; max-width: ${maxSize}; height: ${compassSize}; max-height: ${maxSize}; display: flex; align-items: center; justify-content: center;"></div>
        <div id="fs-status-wrapper" style="width: 92%; max-width: 480px; margin-top: 28px;"></div>
    `;

    document.body.appendChild(fsDiv);

    document.getElementById('fs-compass-wrapper').appendChild(compassContainer);
    if (statusPanel) {
        document.getElementById('fs-status-wrapper').appendChild(statusPanel);
    }

    isFullScreen = true;

    // Gọi lại hàm cập nhật
    if (typeof recalculateFate === 'function') recalculateFate();
    if (typeof updateCompassUI === 'function') updateCompassUI(window.lastHeading || 0);

    // Ẩn icon full sau khi vào fullscreen
    hideFullscreenIcon();
}

// ====================== EXIT FULLSCREEN ======================
function exitFullScreenMode() {
    const fs = document.getElementById('fullscreenMode');
    if (!fs) return;

    fs.style.opacity = '0';

    setTimeout(() => {
        const compass = document.querySelector('.compass-container');
        const status = document.querySelector('.status-panel');

        showHiddenElements();

        if (compass && originalCompassParent) {
            originalCompassParent.appendChild(compass);
            if (status) originalCompassParent.insertBefore(status, compass.nextSibling);
        }

        fs.remove();
        isFullScreen = false;

        if (typeof updateCompassUI === 'function') updateCompassUI(window.lastHeading || 0);
    }, 380);
}

// ====================== ẨN / HIỆN PHẦN TỐI ƯU ======================
function hideNonEssentialElements() {
    const selectorsToHide = [
        '#detail-box',
        '.explanation-btn',
        'button[onclick*="giaiThich"]',
        '.fs-icon'  // Ẩn icon khi full
    ];

    selectorsToHide.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => {
            if (el) {
                el.style.display = 'none';
                el.setAttribute('data-fs-hidden', 'true');
            }
        });
    });
}

function showHiddenElements() {
    document.querySelectorAll('[data-fs-hidden="true"]').forEach(el => {
        if (el) {
            el.style.display = '';
            el.removeAttribute('data-fs-hidden');
        }
    });
}

// ====================== ICON FULLSCREEN NHẤP NHÁY ======================
function createFullscreenIcon() {
    if (fsIcon) return;

    fsIcon = document.createElement('div');
    fsIcon.className = 'fs-icon';
    fsIcon.innerHTML = '⛶'; // Icon fullscreen
    fsIcon.style.cssText = `
        position: absolute; bottom: 25px; right: 25px; font-size: 32px;
        color: var(--gold); opacity: 0.85; cursor: pointer; z-index: 9998;
        transition: all 0.4s ease; text-shadow: 0 0 12px rgba(241,196,15,0.6);
    `;

    document.body.appendChild(fsIcon);

    // Nhấp nháy 3 lần rồi ẩn
    let count = 0;
    const blink = setInterval(() => {
        fsIcon.style.opacity = fsIcon.style.opacity === '0.85' ? '0.3' : '0.85';
        count++;
        if (count >= 6) {  // Nhấp nháy 3 lần (6 lần đổi)
            clearInterval(blink);
            fsIcon.style.opacity = '0';
            setTimeout(() => {
                if (fsIcon) fsIcon.remove();
            }, 800);
        }
    }, 280);

    // Click vào icon cũng full màn hình
    fsIcon.addEventListener('click', () => {
        toggleFullScreenMode();
    });
}

// Ẩn icon sau khi vào full
function hideFullscreenIcon() {
    if (fsIcon) {
        fsIcon.style.opacity = '0';
        setTimeout(() => fsIcon.remove(), 600);
    }
}

// Khởi tạo icon khi trang load
window.addEventListener('load', () => {
    setTimeout(createFullscreenIcon, 1200);
});
