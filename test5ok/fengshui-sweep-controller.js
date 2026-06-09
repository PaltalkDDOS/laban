/**
 * =========================================================================
 * 🏛️ SIÊU ENGINE MODULE: FENGSHUI ADVANCED OVERLAY & TARGET DIRECTION LOCK
 * =========================================================================
 * File: fengshui-sweep-controller.js
 * Chức năng: Quản lý trắc địa chuyên sâu, cách ly giao diện nền, điều khiển
 * trạng thái nút con mắt, lượng giác quy đổi kích thước và ghim kim định hướng.
 * =========================================================================
 */

const SieuBoDieuPhoiQuet = {
    dangQuetKhong: false,
    intervalHieuUng: null,
    cheDoHienTai: 'mode_tia_diem', 
    huongMucTieuChon: 'AUTO', // Hướng đích: 'AUTO' | 'Sinh Khí' | 'Thiên Y' | 'Diên Niên' | 'Phục Vị'
    gocToiUuGhimDuoc: null,   // Lưu trữ tọa độ vàng sau tính toán để chờ ấn nút Ghim mới quay kim
    
    boNhoQuetThongMinh: {
        gocTrai: null,
        gocPhai: null,
        buocQuet: 'cho_goc_trai' // 'cho_goc_trai' | 'cho_goc_phai' | 'da_xong'
    },
    
    presetMacDinh: {
        'bed': { rong: 180, cachTam: 3.0 },
        'altar': { rong: 127, cachTam: 2.5 },
        'workspace': { rong: 120, cachTam: 2.0 },
        'study_desk': { rong: 107, cachTam: 2.0 },
        'safe': { rong: 50, cachTam: 1.5 },
        'kitchen': { rong: 160, cachTam: 3.0 },
        'toilet': { rong: 140, cachTam: 3.5 }
    }
};

// Tự động tiêm bổ sung các thuộc tính CSS nâng cấp lớp phủ khi tải file script
(function napFormCSSChuyenSau() {
    const styleId = "fengshui-overlay-style";
    if (document.getElementById(styleId)) return;
    const styleEl = document.createElement("style");
    styleEl.id = styleId;
    styleEl.innerHTML = `
        /* Khung bao phủ toàn màn hình xóa sạch tạp niệm bên dưới */
        .smart-fengshui-wrapper.fullscreen-mode {
            position: fixed !important;
            top: 0 !important; left: 0 !important;
            width: 100vw !important; height: 100vh !important;
            background: rgba(10, 10, 12, 0.98) !important;
            backdrop-filter: blur(12px) !important;
            -webkit-backdrop-filter: blur(12px) !important;
            z-index: 99990 !important;
            padding: 70px 20px 20px 20px !important;
            box-sizing: border-box !important;
            overflow-y: auto !important;
            max-width: 100vw !important;
            margin: 0 !important;
        }
        /* Con mắt chuyển trạng thái đo đạc: Đỏ rực lửa nhấp nháy */
        .center-pulse-dot.measuring-now {
            background: linear-gradient(135deg, #ff3b30, #ff453a) !important;
            box-shadow: 0 0 20px rgba(255, 59, 48, 0.8) !important;
            border-color: #ff9f0a !important;
            animation: pulseRedEye 1.2s infinite ease-in-out !important;
        }
        @keyframes pulseRedEye {
            0% { transform: scale(1); box-shadow: 0 0 10px rgba(255, 59, 48, 0.6); }
            50% { transform: scale(1.08); box-shadow: 0 0 25px rgba(255, 59, 48, 0.9); }
            100% { transform: scale(1); box-shadow: 0 0 10px rgba(255, 59, 48, 0.6); }
        }
    `;
    document.head.appendChild(styleEl);
})();

function toggleSweepOptionsPanel() {
    const panel = document.getElementById('sweepOptionsPanel');
    if (panel) panel.classList.toggle('show');
}

/**
 * Luồng đi bước 1: Bấm con mắt hiện thực đơn -> Người dùng chọn chế độ -> Hiện giải thích Modal
 */
function hienHuongDanVaChayQuet(modeKey) {
    const modal = document.getElementById('infoModal');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');
    
    if (!modal || !title || !body) {
        kichHoatHeThongChePhuSau(modeKey);
        return;
    }

    if (modeKey === 'mode_thong_minh') {
        title.innerText = "📐 PHƯƠNG PHÁP: QU T CAMERA THÔNG MINH";
        body.innerHTML = `
            <div style="text-align:left; line-height:1.5; font-size:0.9rem;">
                <b>Cẩm nang thực địa dành cho gia chủ:</b><br>
                1. Sau khi đóng bảng này, nút con mắt góc trái sẽ <b>ĐỔ ĐỎ RỰC</b> để báo hiệu bắt đầu trắc địa.<br>
                2. Gia chủ chĩa thẳng la bàn điện thoại vào <b>Mép bên Trái</b> của đầu giường/bàn thờ rồi chạm vào con mắt đỏ lần 1.<br>
                3. Thong thả xoay máy quét sang <b>Mép bên Phải</b> của vật thể rồi chạm vào con mắt đỏ lần 2 để đóng khóa dải cung.<br>
                <br>
                <span style="color:#dfb76c;">* Hệ thống tự động tính toán quy đổi dải cung che phủ và trục đối xứng chính giữa!</span>
            </div>
        `;
    } else if (modeKey === 'mode_nhap_so') {
        title.innerText = "🔢 PHƯƠNG PHÁP: NHẬP SỐ ĐỘNG LỖ BAN";
        body.innerHTML = `
            <div style="text-align:left; line-height:1.5; font-size:0.9rem;">
                <b>Cẩm nang thực địa dành cho gia chủ:</b><br>
                Hệ thống sẽ cách ly màn hình nền và hiển thị trực tiếp bảng thông số hình học. Gia chủ điền kích thước Thước Lỗ Ban của vật thể và khoảng cách.<br>
                <br>
                <span style="color:#dfb76c;">* Engine lượng giác <b>Arctan</b> sẽ tự giải mã số độ chiếm đóng thực tế đè lên cung la bàn!</span>
            </div>
        `;
    } else if (modeKey === 'mode_tia_diem') {
        title.innerText = "🎯 PHƯƠNG PHÁP: ĐỊNH VỊ TIA ĐIỂM SỐ";
        body.innerHTML = `
            <div style="text-align:left; line-height:1.5; font-size:0.9rem;">
                <b>Cẩm nang thực địa dành cho gia chủ:</b><br>
                Khảo sát trường khí siêu tốc theo một đường thẳng trực diện duy nhất cắt qua tâm sảnh nạp khí, hướng cổng lớn hoặc ban công.<br>
                <br>
                <span style="color:#dfb76c;">* Chiều rộng vệt quét mặc định khóa bằng 0 độ.</span>
            </div>
        `;
    }

    modal.style.display = "flex";
    modal.onclick = function() {
        modal.style.display = "none";
        // Luồng đi bước 2: Đóng modal giải thích xong thì trực tiếp đẩy vào giao diện cách ly chuyên sâu
        kichHoatHeThongChePhuSau(modeKey);
    };
}

/**
 * Luồng đi bước 3: Kích hoạt lớp che mờ toàn cục, tạo cơ chế thoát thông minh
 */
function kichHoatHeThongChePhuSau(modeStyle) {
    SieuBoDieuPhoiQuet.cheDoHienTai = modeStyle;
    const wrapper = document.querySelector('.smart-fengshui-wrapper');
    const panel = document.getElementById('sweepOptionsPanel');
    if (panel) panel.classList.remove('show');

    if (wrapper) {
        // Bật lớp mặt nạ che mờ toàn diện các phần tử phụ của app bên dưới
        wrapper.classList.add('fullscreen-mode');
        
        // Tiêm nút thoát thông minh lên đỉnh đầu nếu chưa có
        if (!document.getElementById('fengshuiExitOverlayBtn')) {
            const exitBtn = document.createElement('button');
            exitBtn.id = 'fengshuiExitOverlayBtn';
            exitBtn.innerHTML = "🛑 THOÁT CHẾ ĐỘ ĐO CHUYÊN S U";
            exitBtn.style = "position:absolute; top:20px; right:20px; padding:6px 12px; background:#ff3b30; color:#fff; border:none; border-radius:6px; font-weight:bold; font-size:0.75rem; cursor:pointer; z-index:999995; letter-spacing:0.5px;";
            exitBtn.onclick = removeHeThongChePhuTraVeTrangThaiCu;
            wrapper.appendChild(exitBtn);
        }
    }

    // Dựng form điều khiển và bộ chọn hướng mục tiêu
    dungBangDieuKhienVaBoChonHuongCat(modeStyle);

    let headingThucTe = typeof currentHeading !== 'undefined' ? currentHeading : 0;
    headingThucTe = ((headingThucTe % 360) + 360) % 360;

    // Nếu chọn quét camera thông minh, đổi màu mắt sang đỏ để báo hiệu chu kỳ bắt đầu
    if (modeStyle === 'mode_thong_minh') {
        const btnDot = document.getElementById('wavePulseBtn');
        if (btnDot) btnDot.classList.add('measuring-now');
        SieuBoDieuPhoiQuet.boNhoQuetThongMinh.buocQuet = 'cho_goc_trai';
        xuLyLuongQuetHaiDiemThucDia(headingThucTe);
    } else {
        chayHieuUngXoayRadarGiaLap(headingThucTe, modeStyle);
    }
}

/**
 * Cơ chế thoát thông minh đưa ứng dụng về trạng thái ban đầu nhẹ mượt
 */
function removeHeThongChePhuTraVeTrangThaiCu() {
    const wrapper = document.querySelector('.smart-fengshui-wrapper');
    if (wrapper) wrapper.classList.remove('fullscreen-mode');
    
    const exitBtn = document.getElementById('fengshuiExitOverlayBtn');
    if (exitBtn) exitBtn.remove();
    
    const formArea = document.getElementById('fengshuiDynamicFormArea');
    if (formArea) formArea.innerHTML = '';

    const btnDot = document.getElementById('wavePulseBtn');
    if (btnDot) {
        btnDot.classList.remove('measuring-now');
        btnDot.classList.remove('scanning-active');
    }

    const bracket = document.getElementById('compassVisualBracket');
    if (bracket) bracket.style.display = "none";

    const detailBox = document.getElementById('detailBox');
    if (detailBox) {
        detailBox.style.borderLeft = "4px solid #444";
        detailBox.innerHTML = `<div class="empty-state-text">Chạm vào Chấm tròn năng lượng ở góc trái trên để khai mở khí mạch...</div>`;
    }
    
    SieuBoDieuPhoiQuet.gocToiUuGhimDuoc = null;
}

/**
 * Bơm bảng chọn hướng đích Bát Trạch và form nhập liệu lên trên lớp phủ mặt nạ
 */
function dungBangDieuKhienVaBoChonHuongCat(mode) {
    let formContainer = document.getElementById('fengshuiDynamicFormArea');
    if (!formContainer) {
        const detailBox = document.getElementById('detailBox');
        if (detailBox) {
            formContainer = document.createElement('div');
            formContainer.id = 'fengshuiDynamicFormArea';
            formContainer.style.margin = "0 auto 12px auto";
            formContainer.style.maxWidth = "450px";
            detailBox.parentNode.insertBefore(formContainer, detailBox);
        }
    }
    if (!formContainer) return;

    const mucDich = document.getElementById('purpose')?.value || 'bed';
    const preset = SieuBoDieuPhoiQuet.presetMacDinh[mucDich] || { rong: 180, cachTam: 3.0 };

    // Lấy dữ liệu quẻ cung bát trạch tốt từ hệ thống gốc nếu có
    const dStr = document.getElementById('birthDay')?.value || "1";
    const mStr = document.getElementById('birthMonth')?.value || "1";
    const yStr = document.getElementById('birthYear')?.value || "1990";
    const gender = document.getElementById('gender')?.value || "male";
    let cungPhiChu = typeof tínhCungPhiChủMệnh === 'function' ? tínhCungPhiChủMệnh(dStr, mStr, yStr, gender) : "Khảm";

    let htmlFormCongCu = `
        <div style="background: #1c1c1e; border: 1px solid rgba(223, 183, 108, 0.3); border-radius: 10px; padding: 14px; text-align: left; margin-bottom: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);">
            <div style="color: #dfb76c; font-weight: bold; font-size: 0.8rem; text-transform: uppercase; margin-bottom:10px; letter-spacing:0.5px;">🎯 ĐỊNH HƯỚNG ĐÍCH MUỐN NẠP LONG MẠCH</div>
            <label style="color: #aaa; font-size: 0.72rem; display: block; margin-bottom: 4px;">Chọn cung cát tường muốn quy hoạch vật thể hướng về:</label>
            <select id="fengshuiTargetDirectionSelect" onchange="capNhatHuongMucTieuTuForm(this.value)" style="width:100%; background:#2c2c2e; border:1px solid #444; border-radius:6px; padding:8px; color:#fff; font-weight:bold; font-size:0.85rem; outline:none; margin-bottom:12px; cursor:pointer;">
                <option value="AUTO">🌟 [TỰ ĐỘNG] Tìm điểm sinh khí cao nhất toàn cục kề cạnh</option>
                <option value="Sinh Khí">🟢 Cung Sinh Khí (Chủ về phát tài lộc, danh tiếng)</option>
                <option value="Thiên Y">🟢 Cung Thiên Y (Chủ về sức khỏe, trường thọ, quý nhân)</option>
                <option value="Diên Niên">🟢 Cung Diên Niên (Chủ về hòa hợp vạn sự, gia đạo)</option>
                <option value="Phục Vị">🟢 Cung Phục Vị (Chủ về bình an, thi cử, tâm tính tĩnh tại)</option>
            </select>
    `;

    if (mode === 'mode_nhap_so') {
        htmlFormCongCu += `
            <div style="border-top: 1px dashed rgba(255,255,255,0.1); padding-top: 10px; display: flex; gap: 12px;">
                <div style="flex: 1;">
                    <label style="color: #aaa; font-size: 0.72rem; display: block; margin-bottom: 4px;">Chiều rộng vật thể (cm)</label>
                    <input type="number" id="objectWidthInput" value="${preset.rong}" oninput="kichNoiSuyRealtimeTuyenForm()" style="width: 100%; background: #2c2c2e; border: 1px solid #444; border-radius: 6px; padding: 7px; color: #fff; font-weight: bold; font-size: 0.85rem; outline: none;">
                </div>
                <div style="flex: 1;">
                    <label style="color: #aaa; font-size: 0.72rem; display: block; margin-bottom: 4px;">Khoảng cách tới Tâm (m)</label>
                    <input type="number" id="objectDistanceInput" value="${preset.cachTam}" step="0.1" oninput="kichNoiSuyRealtimeTuyenForm()" style="width: 100%; background: #2c2c2e; border: 1px solid #444; border-radius: 6px; padding: 7px; color: #fff; font-weight: bold; font-size: 0.85rem; outline: none;">
                </div>
            </div>
        `;
    } else if (mode === 'mode_thong_minh') {
        htmlFormCongCu += `
            <div id="thongBaoTrangThaiCamera" style="border-top: 1px dashed rgba(255,255,255,0.1); padding-top: 8px; color: #ff9f0a; font-size: 0.78rem; font-weight:500;">
                📡 TRẠNG THÁI CAMERA: <span style="color:#fff; text-decoration:blink;">Đang chờ chạm mốc điểm mép Trái...</span>
            </div>
        `;
    }

    htmlFormCongCu += `</div>`;
    formContainer.innerHTML = htmlFormCongCu;

    if (mode !== 'mode_thong_minh') {
        kichNoiSuyRealtimeTuyenForm();
    }
}

function capNhatHuongMucTieuTuForm(val) {
    SieuBoDieuPhoiQuet.huongMucTieuChon = val;
    kichNoiSuyRealtimeTuyenForm();
}

function kichNoiSuyRealtimeTuyenForm() {
    let headingThucTe = typeof currentHeading !== 'undefined' ? currentHeading : 0;
    headingThucTe = ((headingThucTe % 360) + 360) % 360;
    executeSmartCompassSweep(headingThucTe, SieuBoDieuPhoiQuet.cheDoHienTai);
}

/**
 * Điều phối hành vi ấn con mắt đo đạc 2 điểm thực địa cho chế độ thông minh
 */
function xuLyLuongQuetHaiDiemThucDia(currentHeading) {
    const formContainer = document.getElementById('thongBaoTrangThaiCamera');
    const btnDot = document.getElementById('wavePulseBtn');
    
    // Nếu người dùng nhấn chạm vào con mắt khi đang ở bước chờ mép trái
    if (SieuBoDieuPhoiQuet.boNhoQuetThongMinh.buocQuet === 'cho_goc_trai') {
        SieuBoDieuPhoiQuet.boNhoQuetThongMinh.gocTrai = currentHeading;
        SieuBoDieuPhoiQuet.boNhoQuetThongMinh.buocQuet = 'cho_goc_phai';
        
        if (formContainer) {
            formContainer.innerHTML = `📐 ĐÃ CHỐT MÉP TRÁI: <span style="color:#fff; font-weight:bold;">${currentHeading.toFixed(1)}°</span>. Hãy xoay điện thoại sang chĩa vào <b>Mép bên Phải</b> vật thể rồi ấn lại con mắt đỏ lần 2!`;
            formContainer.style.color = "#ff9f0a";
        }
    } 
    // Người dùng ấn chạm con mắt lần 2 để chốt mép phải vật thể
    else if (SieuBoDieuPhoiQuet.boNhoQuetThongMinh.buocQuet === 'cho_goc_phai') {
        SieuBoDieuPhoiQuet.boNhoQuetThongMinh.gocPhai = currentHeading;
        SieuBoDieuPhoiQuet.boNhoQuetThongMinh.buocQuet = 'da_xong';
        
        if (btnDot) btnDot.classList.remove('measuring-now'); // Tắt màu đỏ nhấp nháy, kết thúc đo

        let gTrai = SieuBoDieuPhoiQuet.boNhoQuetThongMinh.gocTrai;
        let gPhai = SieuBoDieuPhoiQuet.boNhoQuetThongMinh.gocPhai;
        
        if (Math.abs(gPhai - gTrai) > 180) {
            if (gTrai > gPhai) gPhai += 360; else gTrai += 360;
        }
        
        let trucTamChinhGiua = ((gTrai + gPhai) / 2) % 360;
        let doRongCungDo = Math.abs(gPhai - gTrai);

        if (formContainer) {
            formContainer.innerHTML = `🎉 ĐO XONG! Trục giữa đối xứng: <span style="color:#30d158; font-weight:bold;">${trucTamChinhGiua.toFixed(1)}°</span>.`;
            formContainer.style.color = "#30d158";
        }

        executeSmartCompassSweep(trucTamChinhGiua, 'mode_thong_minh', doRongCungDo);
        SieuBoDieuPhoiQuet.boNhoQuetThongMinh.buocQuet = 'cho_goc_trai';
    }
}

function chayHieuUngXoayRadarGiaLap(headingThucTe, modeStyle) {
    const btnDot = document.getElementById('wavePulseBtn');
    if (btnDot) btnDot.classList.add('scanning-active');
    let mangGoc = [];
    for (let g = 0; g < 360; g += 15) mangGoc.push(g);
    let i = 0;
    SieuBoDieuPhoiQuet.intervalHieuUng = setInterval(() => {
        if (i < mangGoc.length) {
            const ghostNeedle = document.getElementById('ghostNeedle');
            if (ghostNeedle) {
                ghostNeedle.style.display = 'block';
                ghostNeedle.style.transform = `translate(-50%, -50%) rotate(${mangGoc[i]}deg)`;
            }
            i++;
        } else {
            clearInterval(SieuBoDieuPhoiQuet.intervalHieuUng);
            if (btnDot) btnDot.classList.remove('scanning-active');
            executeSmartCompassSweep(headingThucTe, modeStyle);
        }
    }, 15);
}

// =========================================================================
// 📐 3. SIÊU TOÁN PHÁP BIẾN ĐỔI LƯỢNG GIÁC & ENGINE KIỂM DUYỆT HƯỚNG ĐÍCH
// =========================================================================
function executeSmartCompassSweep(currentCompassHeading, scanMode, doRongCungEpBuoc = 0) {
    const headingChuan = ((currentCompassHeading % 360) + 360) % 360;
    const dStr = document.getElementById('birthDay')?.value || "1";
    const mStr = document.getElementById('birthMonth')?.value || "1";
    const yStr = document.getElementById('birthYear')?.value || "1990";
    const gender = document.getElementById('gender')?.value || "male";
    const txtSurveyYear = document.getElementById('surveyYear');
    const namKhaoSat = (txtSurveyYear && txtSurveyYear.value.length === 4) ? parseInt(txtSurveyYear.value, 10) : 2026;
    const mucDich = document.getElementById('purpose')?.value || 'house';

    let quaoMenhChu = typeof tínhCungPhiChủMệnh === 'function' ? tínhCungPhiChủMệnh(dStr, mStr, yStr, gender) : "Khảm";

    let doRongCm = parseFloat(document.getElementById('objectWidthInput')?.value || "0");
    let cachTamMet = parseFloat(document.getElementById('objectDistanceInput')?.value || "0");
    
    if (doRongCm <= 0 || isNaN(doRongCm)) doRongCm = SieuBoDieuPhoiQuet.presetMacDinh[mucDich]?.rong || 120;
    if (cachTamMet <= 0 || isNaN(cachTamMet)) cachTamMet = SieuBoDieuPhoiQuet.presetMacDinh[mucDich]?.cachTam || 2.5;

    let doRongQuetThucTeDo = 0;

    if (scanMode === 'mode_thong_minh') {
        doRongQuetThucTeDo = doRongCungEpBuoc;
    } else if (scanMode === 'mode_nhap_so') {
        // Lượng giác tính cung che phủ từ Cm/Mét thực tế ngoài đời
        let cachTamCm = cachTamMet * 100;
        let nuaRongVatThe = doRongCm / 2;
        let radianGoc = 2 * Math.atan(nuaRongVatThe / cachTamCm);
        doRongQuetThucTeDo = radianGoc * (180 / Math.PI);
    } else if (scanMode === 'mode_tia_diem') {
        doRongQuetThucTeDo = 0;
    }

    capNhatKhungVongCungDoHoaLaBan(headingChuan, doRongQuetThucTeDo);

    let ketQuaHienTai = typeof sieuTinhDiemTongHopMatrix === 'function' 
        ? sieuTinhDiemTongHopMatrix(quaoMenhChu, headingChuan, namKhaoSat, mucDich, doRongCm, cachTamMet)
        : engineNoiSuyDiemDuPhong(quaoMenhChu, headingChuan, namKhaoSat, mucDich, doRongCm, cachTamMet);

    // THUẬT TOÁN ĐIỀU PHỐI TÌM MẠCH THEO HƯỚNG ĐÍCH ƯU TIÊN CỦA GIA CHỦ
    let diemToiUuXungQuanh = -999;
    let gocToiUuXungQuanh = headingChuan;
    let dataToiUuPhanTich = ketQuaHienTai;

    for (let saiLech = -15; saiLech <= 15; saiLech += 0.5) {
        let gocKhaoSat = ((headingChuan + saiLech) % 360 + 360) % 360;
        let dataCheck = typeof sieuTinhDiemTongHopMatrix === 'function' 
            ? sieuTinhDiemTongHopMatrix(quaoMenhChu, gocKhaoSat, namKhaoSat, mucDich, doRongCm, cachTamMet)
            : engineNoiSuyDiemDuPhong(quaoMenhChu, gocKhaoSat, namKhaoSat, mucDich, doRongCm, cachTamMet);
        
        let diemXetDuyet = dataCheck.diem;
        if (dataCheck.khongVong && dataCheck.khongVong.includes("KHÔNG VONG")) diemXetDuyet -= 35;

        // Nếu gia chủ chọn lọc đích một cung cát cụ thể từ Bát Trạch
        if (SieuBoDieuPhoiQuet.huongMucTieuChon !== 'AUTO') {
            if (dataCheck.saoBatTrach === SieuBoDieuPhoiQuet.huongMucTieuChon) {
                diemXetDuyet += 40; // Đẩy trọng số ưu tiên bắt chặt cung này
            } else {
                diemXetDuyet -= 30; // Hạ điểm các cung không đúng tiêu chuẩn gia chủ mong muốn
            }
        }

        if (diemXetDuyet > diemToiUuXungQuanh) {
            diemToiUuXungQuanh = diemXetDuyet;
            gocToiUuXungQuanh = gocKhaoSat;
            dataToiUuPhanTich = dataCheck;
        }
    }

    // 🔒 BẢO MẬT PHƯƠNG VỊ VÀNG: Găm số độ tối ưu vào bộ lưu trữ, KH NG tự xoay kim bậy bạ
    SieuBoDieuPhoiQuet.gocToiUuGhimDuoc = gocToiUuXungQuanh;

    let hieuSoGocXoay = gocToiUuXungQuanh - headingChuan;
    if (hieuSoGocXoay > 180) hieuSoGocXoay -= 360;
    if (hieuSoGocXoay < -180) hieuSoGocXoay += 360;

    XuatBaoCaoPhongThuyKinhDien(mucDich, headingChuan, gocToiUuXungQuanh, hieuSoGocXoay, doRongQuetThucTeDo, doRongCm, cachTamMet, ketQuaHienTai, dataToiUuPhanTich);
}

/**
 * Cơ chế kích nổ hành động Ghim Kim Thần Định: Khi ấn nút mới phóng xoay kim vàng ảo
 */
function ghimKimPhuongViRealtime() {
    if (SieuBoDieuPhoiQuet.gocToiUuGhimDuoc === null) return;
    const ghostNeedle = document.getElementById('ghostNeedle');
    if (ghostNeedle) {
        ghostNeedle.style.display = 'block';
        ghostNeedle.style.opacity = "1";
        // Phóng thẳng và khóa chặt cây kim ảo vàng vào long mạch đích thực chiến
        ghostNeedle.style.transform = `translate(-50%, -50%) rotate(${SieuBoDieuPhoiQuet.gocToiUuGhimDuoc}deg)`;
        ghostNeedle.classList.add('matched-pulse');
    }
}

function capNhatKhungVongCungDoHoaLaBan(tamHeading, doRongDo) {
    let bracket = document.getElementById('compassVisualBracket');
    if (!bracket) {
        const laBanContainer = document.querySelector('.compass-container') || document.getElementById('compass') || document.body;
        bracket = document.createElement('div');
        bracket.id = 'compassVisualBracket';
        bracket.style = "position:absolute; top:50%; left:50%; width:280px; height:280px; borderRadius:50%; pointerEvents:none; zIndex:90;";
        laBanContainer.appendChild(bracket);
    }
    if (doRongDo <= 0) { bracket.style.display = "none"; return; }
    bracket.style.display = "block";
    let nuaCung = (doRongDo / 2).toFixed(1);
    bracket.style.transform = `translate(-50%, -50%) rotate(${tamHeading}deg)`;
    bracket.style.border = "3px solid transparent";
    bracket.style.background = `conic-gradient(from 180deg, transparent 0deg, rgba(223,183,108,0.25) 180deg, rgba(223,183,108,0.25) ${180 + parseFloat(nuaCung)}deg, transparent ${180 + parseFloat(nuaCung)}deg)`;
}

// =========================================================================
// 📜 4. BIÊN DỊCH BÁO CÁO NGỮ CẢNH: BẢNG TÍNH TOÁN QUY ĐỔI HÌNH HỌC TRỰC QUAN
// =========================================================================
function XuatBaoCaoPhongThuyKinhDien(mucDich, headingChuan, gocToiUuXungQuanh, hieuSoGocXoay, doRongQuetThucTeDo, doRongCm, cachTamMet, ketQuaHienTai, dataToiUuPhanTich) {
    const detailBox = document.getElementById('detailBox');
    if (!detailBox) return;

    const layBoLocMauSac = (score) => {
        if (score >= 85) return { color: "#dfb76c", text: "THƯỢNG CÁT BẢO CH U" };
        if (score >= 70) return { color: "#30d158", text: "TIẾN KHÍ CÁT VỊ" };
        if (score >= 50) return { color: "#ff9f0a", text: "BÌNH HOÀ AN ĐỊNH" };
        return { color: "#ff3b30", text: "HUNG CỤC NGUY HIỂM" };
    };

    let mauHienTai = layBoLocMauSac(ketQuaHienTai.diem);
    let purposeEl = document.getElementById('purpose');
    let tenCongNangText = "Hạng mục";
    if (purposeEl && purposeEl.options && purposeEl.selectedIndex !== -1) {
        tenCongNangText = purposeEl.options[purposeEl.selectedIndex].text;
    }

    let moTaTrucHinhHoc = "trục đối xứng tâm chính diện";
    if (mucDich === 'bed') moTaTrucHinhHoc = "trục dọc chính giữa tâm thành đầu giường ngủ";
    if (mucDich === 'altar') moTaTrucHinhHoc = "đường vuông góc tâm nhang bàn thờ";

    let htmlLuatDoan = `
        <div style="background:#131315; border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:12px; box-shadow:0 5px 15px rgba(0,0,0,0.3);">
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:6px; margin-bottom:8px;">
                <span style="color:#dfb76c; font-weight:bold; font-size:0.85rem; letter-spacing:0.5px;">🧭 THÔNG SỐ ĐO TRỰC DIỆN</span>
                <span style="background:${mauHienTai.color}; color:#000; padding:2px 8px; border-radius:10px; font-weight:900; font-size:0.75rem;">${ketQuaHienTai.diem} PT</span>
            </div>
            <div style="font-size:0.82rem; color:#ccc; line-height:1.5; text-align:left;">
                • Thiết lập hạng mục: <b style="color:#fff;">${tenCongNangText}</b><br>
                • Quy cách hình học: Chiều rộng <b>${doRongCm} cm</b> | Khoảng cách tâm lập cực: <b>${cachTamMet} m</b><br>
                • Góc quét che phủ la bàn: <b style="color:#dfb76c;">${doRongQuetThucTeDo.toFixed(1)}°</b><br>
                • Trực diện trục tâm hiện tại: <b>${headingChuan.toFixed(1)}°</b> (Sơn ${ketQuaHienTai.son || "Tý"} - Khí vị: ${ketQuaHienTai.saoBatTrach || "Bình Hòa"})
            </div>
        </div>
    `;

    if (dataToiUuPhanTich.diem > ketQuaHienTai.diem && Math.abs(hieuSoGocXoay) > 0.8) {
        let mauToiUu = layBoLocMauSac(dataToiUuPhanTich.diem);
        let huongNhichXoay = hieuSoGocXoay > 0 ? "BÊN PHẢI" : "BÊN TRÁI";
        let soCm = ((cachTamMet * 100) * (Math.abs(hieuSoGocXoay) * (Math.PI / 180))).toFixed(0);

        htmlLuatDoan += `
            <div style="margin-top:10px; padding:12px; background:rgba(223,183,108,0.05); border:1px dashed rgba(223,183,108,0.3); border-radius:8px; text-align:left;">
                <span style="color:#dfb76c; font-weight:bold; font-size:0.82rem; display:block; margin-bottom:4px;">✨ CẨM NANG DỊCH CHUYỂN VI PH N:</span>
                <span style="color:#ddd; font-size:0.78rem; display:block; line-height:1.4;">Hệ thống định vị mục tiêu cát tường tại góc tọa độ: <b style="color:#dfb76c;">${gocToiUuXungQuanh.toFixed(1)}°</b> (${dataToiUuPhanTich.saoBatTrach}).</span>
                <span style="color:#30d158; font-size:0.82rem; font-weight:bold; display:block; margin-top:5px; background:rgba(48,209,88,0.06); padding:6px; border-radius:4px;">
                    👉 HÀNH ĐỘNG: Nhích tịnh tiến song song kết cấu sang ${huongNhichXoay} một đoạn dài khoảng <span style="color:#fff; font-size:0.9rem; text-decoration:underline;">${soCm} cm</span>.
                </span>
                
                <button onclick="ghimKimPhuongViRealtime()" style="width:100%; margin-top:10px; padding:8px; background:linear-gradient(135deg, #dfb76c, #b38f43); border:none; border-radius:6px; color:#000; font-weight:900; font-size:0.8rem; cursor:pointer; box-shadow:0 3px 8px rgba(223,183,108,0.3); letter-spacing:0.5px;">📍 GHIM KIM THẦN ĐỊNH NGAY</button>
                
                <span style="color:#aaa; font-size:0.72rem; display:block; margin-top:6px; font-style:italic;">
                    * Trục tính cho <b>${moTaTrucHinhHoc}</b>. Khi tịnh tiến, dải cung vật thể sẽ lọt lòng trọn vẹn vào long khí mạch Bảo Châu Sơn ${dataToiUuPhanTich.son} đạt ${dataToiUuPhanTich.diem} Điểm!
                </span>
            </div>
        `;
    } else {
        htmlLuatDoan += `
            <div style="margin-top:10px; padding:10px; background:rgba(48,209,88,0.08); border-left:3px solid #30d158; border-radius:4px; font-size:0.8rem; color:#30d158; text-align:left; line-height:1.4;">
                🎉 ĐẠI CÁT HOÀN MỸ: Trục tâm diện thiết lập của gia chủ đã rơi khớp hoàn toàn vào long mạch vượng khí vĩ mô, kim số thực tế đã trùng nhất!
            </div>
        `;
    }

    detailBox.style.borderLeft = `4px solid ${mauHienTai.color}`;
    detailBox.innerHTML = htmlLuatDoan;
}

function engineNoiSuyDiemDuPhong(cungPhi, degree, namKhaoSat, mucDich, doRongCm, cachTamMet) {
    const chuoiSon24 = ["Tý","Quý","Sửu","Cấn","Dần","Giáp","Mão","Ất","Thìn","Tốn","Tỵ","Bính","Ngọ","Đinh","Mùi","Khôn","Thân","Canh","Dậu","Tân","Tuất","Càn","Hợi","Nhâm"];
    let indexSon = Math.floor(((degree + 7.5) % 360) / 15); let tenSon = chuoiSon24[indexSon] || "Tý";
    const chuoiHuongLon = ["Bắc","Đông Bắc","Đông","Đông Nam","Nam","Tây Nam","Tây","Tây Bắc"];
    let indexHuong = Math.floor(((degree + 22.5) % 360) / 45); let tenHuongLon = chuoiHuongLon[indexHuong] || "Bắc";

    let hopMenh = (["Càn", "Khôn", "Cấn", "Đoài"].includes(cungPhi) && ["Tây Bắc", "Tây Nam", "Đông Bắc", "Tây"].includes(tenHuongLon)) ||
                 (!["Càn", "Khôn", "Cấn", "Đoài"].includes(cungPhi) && !["Tây Bắc", "Tây Nam", "Đông Bắc", "Tây"].includes(tenHuongLon));
    let scoreBase = hopMenh ? 82 : 46;
    let checkKV = "Thuần Khí";
    let distDai = (degree - 22.5) % 45; if (distDai < 0) distDai += 45; distDai = Math.min(distDai, 45 - distDai);
    if (distDai <= 0.5) { scoreBase = 15; checkKV = "ĐẠI KHÔNG VONG"; }

    // Gán sao Bát Trạch giả lập phục vụ bộ chọn hướng mục tiêu
    let saoBT = hopMenh ? "Sinh Khí" : "Tuyệt Mệnh";
    if (degree >= 45 && degree < 135) saoBT = hopMenh ? "Thiên Y" : "Ngũ Quỷ";
    if (degree >= 135 && degree < 225) saoBT = hopMenh ? "Diên Niên" : "Lục Sát";
    if (degree >= 225 && degree < 315) saoBT = hopMenh ? "Phục Vị" : "Họa Hại";

    return { diem: Math.max(5, Math.min(98, scoreBase)), son: tenSon, huongLon: tenHuongLon, saoBatTrach: saoBT, satTinhQuétĐược: [], khongVong: checkKV };
}

document.addEventListener('DOMContentLoaded', function() {
    // Sự kiện lắng nghe thông minh đóng bảng chọn
    document.addEventListener('click', function(event) {
        const panel = document.getElementById('sweepOptionsPanel');
        const btn = document.getElementById('wavePulseBtn');
        if (panel && panel.classList.contains('show') && !panel.contains(event.target) && !btn.contains(event.target)) {
            panel.classList.remove('show');
        }
    });
});
