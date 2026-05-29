let isFullScreen = false;
let originalCompassParent = null;
let lastTapTime = 0;
let fsInstructionShown = false;

// ====================== FULLSCREEN THÔNG MINH - TƯƠNG THÍCH CAO ======================
function handleInteraction(e) {
    const compassContainer = document.querySelector('.compass-container');
    if (!compassContainer) return;

    if (isFullScreen) {
        exitFullScreenMode();
        return;
    }

    if (e.target.closest('.compass-container')) {
        e.preventDefault();
        toggleFullScreenMode();
    }
}

// Double Click cho máy tính
document.addEventListener('dblclick', handleInteraction);

// Double Tap cho mobile (tối ưu cho nhiều trình duyệt)
document.addEventListener('touchstart', (e) => {
    if (e.touches.length !== 1) return; // Không double tap khi pinch zoom
});

document.addEventListener('touchend', (e) => {
    if (e.touches && e.touches.length > 0) return;

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
    const fsIcon = document.querySelector('.fs-icon');

    if (!compassContainer) return;

    originalCompassParent = compassContainer.parentElement;

    // Ẩn các phần không cần thiết (giữ logic gốc của bạn)
    hideNonEssentialElements(statusPanel);

    const fsDiv = document.createElement('div');
    fsDiv.id = 'fullscreenMode';
    fsDiv.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        background: rgba(0,0,0,0.96); z-index: 9999; display: flex;
        flex-direction: column; align-items: center; justify-content: center;
        transition: opacity 0.4s ease;
    `;

    // La bàn lớn hơn, theo tỷ lệ thực tế của màn hình
    fsDiv.innerHTML = `
        <div id="fs-compass-wrapper" style="width: min(96vw, 96vh); max-width: 560px; height: min(96vw, 96vh); max-height: 560px; display: flex; align-items: center; justify-content: center;"></div>
        <div id="fs-status-wrapper" style="width: 92%; max-width: 500px; margin-top: 26px;"></div>
    `;

    document.body.appendChild(fsDiv);

    document.getElementById('fs-compass-wrapper').appendChild(compassContainer);
    if (statusPanel) document.getElementById('fs-status-wrapper').appendChild(statusPanel);

    if (fsIcon) fsIcon.style.opacity = '0';

    isFullScreen = true;
    if (typeof recalculateFate === 'function') recalculateFate();
    if (typeof updateCompassUI === 'function') updateCompassUI(window.lastHeading || 0);
}

function exitFullScreenMode() {
    const fs = document.getElementById('fullscreenMode');
    if (!fs) return;

    fs.style.opacity = '0';

    setTimeout(() => {
        const compass = document.querySelector('.compass-container');
        const status = document.querySelector('.status-panel');
        const fsIcon = document.querySelector('.fs-icon');

        showHiddenElements();

        if (compass && originalCompassParent) {
            originalCompassParent.appendChild(compass);
            if (status) originalCompassParent.insertBefore(status, compass.nextSibling);
        }

        fs.remove();
        isFullScreen = false;

        if (fsIcon) fsIcon.style.opacity = '1';

        if (typeof updateCompassUI === 'function') updateCompassUI(window.lastHeading || 0);
    }, 380);
}

// ====================== ẨN / HIỆN (KẾT HỢP LOGIC GỐC) ======================
function hideNonEssentialElements(statusPanel) {
    if (statusPanel) {
        const elements = statusPanel.querySelectorAll('*');
        elements.forEach(el => {
            const text = el.textContent || "";
            const isTarget = text.includes('Người Tầm Phương') ||
                             text.includes('Đo hướng') ||
                             text.includes('Cung Phi') ||
                             text.includes('Năm Âm') ||
                             text.includes('Trung Cung') ||
                             text.includes('Xem giải thích thuật ngữ');
            if (isTarget) {
                el.style.display = 'none';
                el.setAttribute('data-fs-hidden', 'true');
            }
        });
    }

    const detailBox = document.getElementById('detail-box');
    if (detailBox) {
        detailBox.style.display = 'none';
        detailBox.setAttribute('data-fs-hidden', 'true');
    }
}

function showHiddenElements() {
    document.querySelectorAll('[data-fs-hidden="true"]').forEach(el => {
        el.style.display = '';
        el.removeAttribute('data-fs-hidden');
    });
}

// ====================== ICON HƯỚNG DẪN FULLSCREEN (MỚI) ======================
function showFullscreenInstruction() {
    if (fsInstructionShown) return;
    fsInstructionShown = true;

    const icon = document.createElement('div');
    icon.id = 'fs-instruction';
    icon.style.cssText = `
        position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%);
        background: rgba(241, 196, 15, 0.15); color: var(--gold); 
        padding: 12px 20px; border-radius: 50px; font-size: 0.95rem;
        border: 1px solid var(--gold); z-index: 9998; opacity: 0;
        transition: all 0.6s ease; white-space: nowrap; display: flex; align-items: center; gap: 10px;
    `;
    icon.innerHTML = `👆 Nhấn đúp vào la bàn để xem toàn màn hình`;
    document.body.appendChild(icon);

    // Animation hiện + nhấp nháy
    setTimeout(() => { icon.style.opacity = '1'; }, 800);

    // Tự ẩn sau 5 giây
    setTimeout(() => {
        icon.style.opacity = '0';
        setTimeout(() => icon.remove(), 800);
    }, 5200);
}

// Gọi icon hướng dẫn khi trang load
window.addEventListener('load', () => {
    setTimeout(showFullscreenInstruction, 1500);
});
