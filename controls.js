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
    if (!originalCompassParent) originalCompassParent = compassContainer.parentElement;

    // --- NÂNG CẤP: ẨN CÁC DÒNG THÔNG TIN CHI TIẾT KHI ĐÃ NHẬP NGÀY THÁNG ---
    if (statusPanel) {
        const elements = statusPanel.querySelectorAll('*');
        elements.forEach(el => {
            const text = el.textContent || "";
            // Các từ khóa để ẩn khi đã nhập ngày tháng:
            // 1. "Người Tầm Phương" / "Đo hướng" (cũ)
            // 2. "Cung Phi" / "Năm Âm" / "Trung Cung" (thông tin mới)
            // 3. "Xem giải thích thuật ngữ" (nút bấm)
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

    const giaiThich = document.getElementById('detail-box');
    if (giaiThich) {
        giaiThich.style.display = 'none';
        giaiThich.setAttribute('data-fs-hidden', 'true');
    }

    const fsDiv = document.createElement('div');
    fsDiv.id = 'fullscreenMode';
    fsDiv.className = 'fullscreen-mode active';
    fsDiv.style.cssText = "position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.9); z-index:9999; display:flex; flex-direction:column; align-items:center; justify-content:center; transition:opacity 0.3s;";
    
    fsDiv.innerHTML = `
        <div id="fs-compass-wrapper" style="width: 96vw; max-width: 460px; height: 96vw; max-height: 460px;"></div>
        <div id="fs-status-wrapper" style="width: 92%; max-width: 460px; margin-top:20px;"></div>
    `;
    document.body.appendChild(fsDiv);

    document.getElementById('fs-compass-wrapper').appendChild(compassContainer);
    if (statusPanel) document.getElementById('fs-status-wrapper').appendChild(statusPanel);

    if (fsIcon) fsIcon.style.opacity = '0';

    isFullScreen = true;
    if (typeof recalculateFate === 'function') recalculateFate();
}

function exitFullScreenMode() {
    const fs = document.getElementById('fullscreenMode');
    if (!fs) return;

    fs.style.opacity = '0';
    setTimeout(() => {
        const compass = document.querySelector('.compass-container');
        const status = document.querySelector('.status-panel');
        const fsIcon = document.querySelector('.fs-icon');

        // --- HIỆN LẠI TẤT CẢ CÁC THÀNH PHẦN ĐÃ ĐÁNH DẤU ẨN ---
        const hiddenElements = document.querySelectorAll('[data-fs-hidden="true"]');
        hiddenElements.forEach(el => {
            el.style.display = ''; 
            el.removeAttribute('data-fs-hidden');
        });

        if (compass && originalCompassParent) {
            originalCompassParent.appendChild(compass);
            if (status) originalCompassParent.insertBefore(status, compass.nextSibling);
        }

        fs.remove();
        isFullScreen = false;
        if (fsIcon) fsIcon.style.opacity = '1';
        
        if (typeof updateCompassUI === 'function') updateCompassUI(lastHeading);
    }, 300);
}
