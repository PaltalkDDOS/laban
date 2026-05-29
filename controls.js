let isFullScreen = false;
let originalCompassParent = null;
let lastTapTime = 0;
let touchCount = 0;
let touchTimer = null;

// ====================== FULLSCREEN MODE - PHIÊN BẢN TỐI ƯU ======================

function isCompassArea(e) {
    return e.target.closest('.compass-container');
}

// ==================== DOUBLE TAP DETECTION (Chỉ 1 ngón tay) ====================
document.addEventListener('touchstart', (e) => {
    touchCount = e.touches.length;
    
    if (touchCount === 1 && isCompassArea(e)) {
        clearTimeout(touchTimer);
        touchTimer = setTimeout(() => {
            // Single tap lâu → không làm gì (tránh nhầm double tap)
        }, 350);
    }
}, { passive: true });

document.addEventListener('touchend', (e) => {
    const now = Date.now();
    
    // Chỉ xử lý double tap khi đúng 1 ngón tay
    if (touchCount === 1 && isCompassArea(e)) {
        if (now - lastTapTime < 420) {   // Double tap
            e.preventDefault();
            if (!isFullScreen) {
                enterFullScreenMode();
            } else {
                exitFullScreenMode();
            }
        }
    }
    lastTapTime = now;
}, { passive: false });

// ==================== DOUBLE CLICK (Máy tính) ====================
document.addEventListener('dblclick', (e) => {
    if (isCompassArea(e)) {
        e.preventDefault();
        if (!isFullScreen) enterFullScreenMode();
        else exitFullScreenMode();
    }
});

// ====================== VÀO FULLSCREEN ======================
function enterFullScreenMode() {
    if (isFullScreen) return;

    const compassContainer = document.querySelector('.compass-container');
    const statusPanel = document.querySelector('.status-panel');
    if (!compassContainer) return;

    originalCompassParent = compassContainer.parentElement;

    hideNonEssentialElements();

    const fsDiv = document.createElement('div');
    fsDiv.id = 'fullscreenMode';
    fsDiv.style.cssText = `
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.94);
        z-index: 9999;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 15px;
        box-sizing: border-box;
        touch-action: none;           /* Cho phép pinch zoom nếu cần */
    `;

    fsDiv.innerHTML = `
        <div id="fs-compass-wrapper" style="width: 100%; max-width: 560px; aspect-ratio: 1 / 1; margin-bottom: 24px;"></div>
        <div id="fs-status-wrapper" style="width: 100%; max-width: 520px;"></div>
    `;

    document.body.appendChild(fsDiv);

    document.getElementById('fs-compass-wrapper').appendChild(compassContainer);
    if (statusPanel) document.getElementById('fs-status-wrapper').appendChild(statusPanel);

    isFullScreen = true;

    setTimeout(() => {
        adjustCompassToScreen();
        if (typeof recalculateFate === 'function') recalculateFate();
    }, 80);
}

// ====================== THOÁT FULLSCREEN ======================
function exitFullScreenMode() {
    if (!isFullScreen) return;

    const fs = document.getElementById('fullscreenMode');
    if (!fs) return;

    fs.style.transition = 'opacity 0.25s';
    fs.style.opacity = '0';

    setTimeout(() => {
        const compass = document.querySelector('.compass-container');
        const status = document.querySelector('.status-panel');

        showHiddenElements();

        if (compass && originalCompassParent) {
            originalCompassParent.appendChild(compass);
            if (status) originalCompassParent.insertBefore(status, compass.nextSibling || null);
        }

        fs.remove();
        isFullScreen = false;

        if (typeof updateCompassUI === 'function') updateCompassUI(lastHeading || 0);
    }, 260);
}

// ====================== HỖ TRỢ ======================
function hideNonEssentialElements() {
    const statusPanel = document.querySelector('.status-panel');
    if (!statusPanel) return;

    statusPanel.querySelectorAll('*').forEach(el => {
        const txt = (el.textContent || "").trim();
        if (txt.includes('Người Tầm Phương') || txt.includes('Đo hướng') || 
            txt.includes('Cung Phi') || txt.includes('Năm Âm') || 
            txt.includes('Trung Cung') || txt.includes('Xem giải thích')) {
            el.style.display = 'none';
            el.setAttribute('data-fs-hidden', 'true');
        }
    });

    const detail = document.getElementById('detail-box');
    if (detail) {
        detail.style.display = 'none';
        detail.setAttribute('data-fs-hidden', 'true');
    }
}

function showHiddenElements() {
    document.querySelectorAll('[data-fs-hidden="true"]').forEach(el => {
        el.style.display = '';
        el.removeAttribute('data-fs-hidden');
    });
}

function adjustCompassToScreen() {
    const wrapper = document.getElementById('fs-compass-wrapper');
    if (!wrapper) return;

    const vh = window.innerHeight;
    const maxSize = Math.min(vh * 0.82, 560);   // Tối đa 560px, chiếm 82% chiều cao

    wrapper.style.width = maxSize + 'px';
    wrapper.style.height = maxSize + 'px';
}

// Tự động điều chỉnh khi xoay màn hình
window.addEventListener('resize', () => {
    if (isFullScreen) adjustCompassToScreen();
});
