/**
 * =========================================================================
 * 🏛️ SIÊU ENGINE MODULE: FENGSHUI SWEEP & DYNAMIC COMPASS BRACKET (REAL ENGINE)
 * =========================================================================
 * File: fengshui-sweep-controller.js
 * Chức năng: Tự động sinh giao diện nhập liệu động, tính toán lượng giác thực
 * và vẽ vòng cung che phủ (Bracket) lên la bàn số thời gian thực.
 * =========================================================================
 */

const SieuBoDieuPhoiQuet = {
    dangQuetKhong: false,
    intervalHieuUng: null,
    cheDoHienTai: 'mode_tia_diem', // Chế độ mặc định ban đầu
    
    // Bộ nhớ lưu trắc địa cho Chế độ 1 (Quét 2 điểm thực địa)
    boNhoQuetThongMinh: {
        gocTrai: null,
        gocPhai: null,
        buocQuet: 'cho_goc_trai' // 'cho_goc_trai' | 'cho_goc_phai'
    },
    
    // Kích thước preset chuẩn phong thủy dùng làm nền tảng nạp sẵn
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

/**
 * Điều khiển đóng mở khay thực đơn 3 chế độ quét
 */
function toggleSweepOptionsPanel() {
    const panel = document.getElementById('sweepOptionsPanel');
    if (panel) panel.classList.toggle('show');
}

/**
 * Hàm điều phối luồng: Hiện hướng dẫn cẩm nang và kích nổ tiến trình
 */
function hienHuongDanVaChayQuet(modeKey) {
    const modal = document.getElementById('infoModal');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');
    
    if (!modal || !title || !body) {
        thucThiChuyenCheDoNgay(modeKey);
        return;
    }

    if (modeKey === 'mode_thong_minh') {
        title.innerText = "📐 CHẾ ĐỘ: QU T CAMERA THÔNG MINH";
        body.innerHTML = `
            <b>Hướng dẫn thực chiến ngoài đời:</b><br>
            1. Đứng tại tâm nhà/tâm phòng. Chĩa thẳng la bàn vào <b>MÉP BÊN TRÁI</b> của đầu giường (hoặc mép bàn thờ) -> Chạm vào nút chấm tròn con mắt để ghi nhớ.<br>
            2. Tiếp tục quay người chĩa la bàn sang <b>MÉP BÊN PHẢI</b> của vật thể -> Chạm vào nút chấm tròn một lần nữa để chốt dải đo.<br>
            <br>
            <i>Hệ thống sẽ tự động tính toán ra tọa độ trục giữa dọc chính xác và độ rộng chiếm cung hình học!</i>
        `;
    } else if (modeKey === 'mode_nhap_so') {
        title.innerText = "🔢 CHẾ ĐỘ: NHẬP SỐ ĐỘNG LỖ BAN";
        body.innerHTML = `
            <b>Hướng dẫn thực chiến ngoài đời:</b><br>
            Hệ thống sẽ hiển thị hai ô nhập liệu động ngay trên màn hình. Gia chủ điền chiều rộng vật thể (cm) và khoảng cách từ tâm đến vật thể (m).<br>
            <br>
            <i>Máy tính sẽ tự động chạy toán lượng giác <b>Arctan</b> biến đổi kích thước vật lý thành số độ cung bao phủ thực tế trên la bàn số!</i>
        `;
    } else if (modeKey === 'mode_tia_diem') {
        title.innerText = "🎯 CHẾ ĐỘ: ĐỊNH VỊ TIA ĐIỂM SỐ";
        body.innerHTML = `
            <b>Hướng dẫn thực chiến ngoài đời:</b><br>
            Định vị trường khí nhanh theo một đường thẳng tắp duy nhất tại hướng camera chĩa vào. Thích hợp đo nhanh hướng nhà, hướng bếp cố định.<br>
            <br>
            <i>Độ rộng vệt quét mặc định đóng khóa bằng 0 độ.</i>
        `;
    }

    modal.style.display = "flex";
    modal.onclick = function() {
        modal.style.display = "none";
        thucThiChuyenCheDoNgay(modeKey);
    };
}

/**
 * Xử lý chính thức chuyển đổi trạng thái chế độ và tái cấu trúc form nhập liệu động
 */
function thucThiChuyenCheDoNgay(modeStyle) {
    SieuBoDieuPhoiQuet.cheDoHienTai = modeStyle;
    const panel = document.getElementById('sweepOptionsPanel');
    if (panel) panel.classList.remove('show');

    // Khởi tạo/Tái cấu trúc khu vực nhập liệu động trên UI
    taoBoGoNhapLieuDongTrenUI(modeStyle);

    let headingThucTe = typeof currentHeading !== 'undefined' ? currentHeading : 0;
    headingThucTe = ((headingThucTe % 360) + 360) % 360;

    if (modeStyle === 'mode_thong_minh') {
        xuLyLuongQuetHaiDiemThucDia(headingThucTe);
        return;
    }

    chayHieuUngXoayQuetGiaLap(headingThucTe, modeStyle);
}

/**
 * 🏛️ THUẬT TOÁN ĐỘT PHÁ: TỰ ĐỘNG BƠM FORM NHẬP LIỆU VÀO GIAO DIỆN REALTIME
 */
function taoBoGoNhapLieuDongTrenUI(mode) {
    let formContainer = document.getElementById('fengshuiDynamicFormArea');
    if (!formContainer) {
        // Nếu chưa có khu vực chứa form, tự động sinh ra nằm ngay phía trên hộp detailBox
        const detailBox = document.getElementById('detailBox');
        if (detailBox) {
            formContainer = document.createElement('div');
            formContainer.id = 'fengshuiDynamicFormArea';
            formContainer.style.margin = "10px auto";
            formContainer.style.maxWidth = "450px";
            detailBox.parentNode.insertBefore(formContainer, detailBox);
        }
    }

    if (!formContainer) return;

    // Lấy mục đích hiện tại để bốc thông số mặc định của vật thể đó
    const mucDich = document.getElementById('purpose')?.value || 'bed';
    const preset = SieuBoDieuPhoiQuet.presetMacDinh[mucDich] || { rong: 180, cachTam: 3.0 };

    if (mode === 'mode_nhap_so') {
        // Sinh trực tiếp bộ đôi ô nhập liệu cao cấp kèm sự kiện oninput lắng nghe tự động thay đổi
        formContainer.innerHTML = `
            <div style="background: rgba(223, 183, 108, 0.08); border: 1px solid rgba(223, 183, 108, 0.3); border-radius: 8px; padding: 12px; text-align: left; margin-bottom: 10px;">
                <div style="color: #dfb76c; font-weight: bold; font-size: 0.8rem; text-transform: uppercase; margin-bottom:8px; letter-spacing:0.5px;">🔢 BẢNG SỐ ĐO LỖ BAN HÌNH HỌC DỰ ÁN</div>
                <div style="display: flex; gap: 10px;">
                    <div style="flex: 1;">
                        <label style="color: #aaa; font-size: 0.72rem; display: block; margin-bottom: 4px;">Chiều rộng vật thể (cm)</label>
                        <input type="number" id="objectWidthInput" value="${preset.rong}" oninput="chayViPhanRealtimeTuForm()" style="width: 100%; background: #1c1c1e; border: 1px solid #444; border-radius: 4px; padding: 6px; color: #fff; font-weight: bold; font-size: 0.85rem; outline: none;">
                    </div>
                    <div style="flex: 1;">
                        <label style="color: #aaa; font-size: 0.72rem; display: block; margin-bottom: 4px;">Khoảng cách tới Tâm (m)</label>
                        <input type="number" id="objectDistanceInput" value="${preset.cachTam}" step="0.1" oninput="chayViPhanRealtimeTuForm()" style="width: 100%; background: #1c1c1e; border: 1px solid #444; border-radius: 4px; padding: 6px; color: #fff; font-weight: bold; font-size: 0.85rem; outline: none;">
                    </div>
                </div>
            </div>
        `;
        chayViPhanRealtimeTuForm(); // Khởi chạy tính toán ngay lập tức khi dựng form xong
    } else if (mode === 'mode_thong_minh') {
        formContainer.innerHTML = `
            <div style="background: rgba(255, 159, 10, 0.08); border: 1px solid rgba(255, 159, 10, 0.3); border-radius: 8px; padding: 10px; text-align: left; margin-bottom: 10px; font-size: 0.78rem; color: #ff9f0a; line-height: 1.4;">
                📡 TRẠNG THÁI QU T: <b>Đang chờ chạm mốc tiêu điểm...</b><br>
                <span style="color:#eee;">Chĩa la bàn vào mép Trái rồi bấm Chấm tròn con mắt góc trên bên trái.</span>
            </div>
        `;
        SieuBoDieuPhoiQuet.boNhoQuetThongMinh.buocQuet = 'cho_goc_trai';
    } else {
        // Chế độ tia điểm: Xóa trắng giao diện form nhập
        formContainer.innerHTML = '';
        chayViPhanRealtimeTuForm();
    }
}

/**
 * Hàm kích nổ luồng xử lý tự động bốc dữ liệu từ form khi người dùng đang gõ phím
 */
function chayViPhanRealtimeTuForm() {
    let headingThucTe = typeof currentHeading !== 'undefined' ? currentHeading : 0;
    headingThucTe = ((headingThucTe % 360) + 360) % 360;
    executeSmartCompassSweep(headingThucTe, SieuBoDieuPhoiQuet.cheDoHienTai);
}

/**
 * Điều phối luồng xử lý ghi nhớ 2 điểm Trái/Phải của trắc địa camera thực tế
 */
function xuLyLuongQuetHaiDiemThucDia(currentHeading) {
    const detailBox = document.getElementById('detailBox');
    const formContainer = document.getElementById('fengshuiDynamicFormArea');
    const btnDot = document.getElementById('wavePulseBtn');
    
    if (SieuBoDieuPhoiQuet.boNhoQuetThongMinh.buocQuet === 'cho_goc_trai') {
        SieuBoDieuPhoiQuet.boNhoQuetThongMinh.gocTrai = currentHeading;
        SieuBoDieuPhoiQuet.boNhoQuetThongMinh.buocQuet = 'cho_goc_phai';
        if (btnDot) btnDot.classList.add('scanning-active');
        
        if (formContainer) {
            formContainer.innerHTML = `
                <div style="background: rgba(255, 159, 10, 0.12); border: 1px solid #ff9f0a; border-radius: 8px; padding: 10px; text-align: left; margin-bottom: 10px; font-size: 0.78rem; color: #fff; line-height: 1.4;">
                    📐 ĐÃ CHỐT MÉP TRÁI: <span style="color:#ff9f0a; font-weight:bold;">${currentHeading.toFixed(1)}°</span><br>
                    👉 Hành động tiếp theo: Quay máy sang chĩa thẳng vào <b>MÉP BÊN PHẢI</b> rồi ấn tiếp nút Chấm Tròn góc trái để hoàn tất!
                </div>
            `;
        }
    } else if (SieuBoDieuPhoiQuet.boNhoQuetThongMinh.buocQuet === 'cho_goc_phai') {
        SieuBoDieuPhoiQuet.boNhoQuetThongMinh.gocPhai = currentHeading;
        SieuBoDieuPhoiQuet.boNhoQuetThongMinh.buocQuet = 'da_xong';
        if (btnDot) btnDot.classList.remove('scanning-active');

        let gTrai = SieuBoDieuPhoiQuet.boNhoQuetThongMinh.gocTrai;
        let gPhai = SieuBoDieuPhoiQuet.boNhoQuetThongMinh.gocPhai;
        
        if (Math.abs(gPhai - gTrai) > 180) {
            if (gTrai > gPhai) gPhai += 360; else gTrai += 360;
        }
        
        let trucTamChinhGiua = ((gTrai + gPhai) / 2) % 360;
        let doRongCungDo = Math.abs(gPhai - gTrai);

        if (formContainer) {
            formContainer.innerHTML = `
                <div style="background: rgba(48, 209, 88, 0.1); border: 1px solid #30d158; border-radius: 8px; padding: 10px; text-align: left; margin-bottom: 10px; font-size: 0.78rem; color: #30d158; line-height: 1.4;">
                    🎉 ĐÃ ĐO XONG THỰC ĐỊA CAMERA:<br>
                    • Góc Trái: ${gTrai.toFixed(1)}° | Góc Phải: ${SieuBoDieuPhoiQuet.boNhoQuetThongMinh.gocPhai.toFixed(1)}°<br>
                    • Trục tâm dọc tính toán đối xứng: <b style="color:#fff;">${trucTamChinhGiua.toFixed(1)}°</b>
                </div>
            `;
        }

        executeSmartCompassSweep(trucTamChinhGiua, 'mode_thong_minh', doRongCungDo);
        SieuBoDieuPhoiQuet.boNhoQuetThongMinh.buocQuet = 'cho_goc_trai'; // Reset trạng thái chờ vòng quét sau
    }
}

/**
 * Vận hành hiệu ứng giả lập radar quét tia sáng la bàn khí mạch
 */
function chayHieuUngXoayQuetGiaLap(headingThucTe, modeStyle) {
    const btnDot = document.getElementById('wavePulseBtn');
    if (btnDot) btnDot.classList.add('scanning-active');

    let mangGocMoPhong = [];
    for (let g = 0; g < 360; g += 10) mangGocMoPhong.push(g);

    let idx = 0;
    SieuBoDieuPhoiQuet.intervalHieuUng = setInterval(() => {
        if (idx < mangGocMoPhong.length) {
            const ghostNeedle = document.getElementById('ghostNeedle');
            if (ghostNeedle) {
                ghostNeedle.style.display = 'block';
                ghostNeedle.style.transform = `translate(-50%, -50%) rotate(${mangGocMoPhong[idx]}deg)`;
            }
            idx++;
        } else {
            clearInterval(SieuBoDieuPhoiQuet.intervalHieuUng);
            if (btnDot) btnDot.classList.remove('scanning-active');
            executeSmartCompassSweep(headingThucTe, modeStyle);
        }
    }, 15);
}

// =========================================================================
// 📐 3. SIÊU ENGINE TOÁN HỌC: QU T MẠCH VÀ ÉP LÊN VÒNG CUNG LA BÀN (BRACKET)
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

    // Trích xuất số liệu an toàn từ form nhập liệu động vừa sinh ra
    let doRongCm = parseFloat(document.getElementById('objectWidthInput')?.value || "0");
    let cachTamMet = parseFloat(document.getElementById('objectDistanceInput')?.value || "0");
    
    if (doRongCm <= 0 || isNaN(doRongCm)) doRongCm = SieuBoDieuPhoiQuet.presetMacDinh[mucDich]?.rong || 120;
    if (cachTamMet <= 0 || isNaN(cachTamMet)) cachTamMet = SieuBoDieuPhoiQuet.presetMacDinh[mucDich]?.cachTam || 2.5;

    let doRongQuetThucTeDo = 0;

    if (scanMode === 'mode_thong_minh') {
        doRongQuetThucTeDo = doRongCungEpBuoc;
    } else if (scanMode === 'mode_nhap_so') {
        // ✨ THỰC THI C NG THỨC TOÁN HỌC LƯỢNG GIÁC ARCTAN THỰC TẾ ĐỔI CM SANG ĐỘ
        let cachTamCm = cachTamMet * 100;
        let nuaRongVatThe = doRongCm / 2;
        let radianGoc = 2 * Math.atan(nuaRongVatThe / cachTamCm);
        doRongQuetThucTeDo = radianGoc * (180 / Math.PI);
    } else if (scanMode === 'mode_tia_diem') {
        doRongQuetThucTeDo = 0;
    }

    // 🌟 KÍCH HOẠT VÒNG CUNG ĐỒ HỌA TRÊN MẶT LA BÀN (COMPASS BRACKET VISUAL OVERLAY)
    capNhatKhungVongCungDoHoaLaBan(headingChuan, doRongQuetThucTeDo);

    // Chấm điểm tổng hợp ma trận trắc địa hiện trạng chính diện
    let ketQuaHienTai = null;
    if (typeof sieuTinhDiemTongHopMatrix === 'function') {
        ketQuaHienTai = sieuTinhDiemTongHopMatrix(quaoMenhChu, headingChuan, namKhaoSat, mucDich, doRongCm, cachTamMet);
    } else {
        ketQuaHienTai = engineNoiSuyDiemDuPhong(quaoMenhChu, headingChuan, namKhaoSat, mucDich, doRongCm, cachTamMet);
    }

    let diemToiUuXungQuanh = ketQuaHienTai.diem;
    let gocToiUuXungQuanh = headingChuan;
    let dataToiUuPhanTich = ketQuaHienTai;

    // Tiến hành vi phân lùng sục long mạch xung quanh dải ±15 độ
    for (let saiLech = -15; saiLech <= 15; saiLech += 0.5) {
        let gocKhaoSatXungQuanh = ((headingChuan + saiLech) % 360 + 360) % 360;
        let dataCheck = typeof sieuTinhDiemTongHopMatrix === 'function' 
            ? sieuTinhDiemTongHopMatrix(quaoMenhChu, gocKhaoSatXungQuanh, namKhaoSat, mucDich, doRongCm, cachTamMet)
            : engineNoiSuyDiemDuPhong(quaoMenhChu, gocKhaoSatXungQuanh, namKhaoSat, mucDich, doRongCm, cachTamMet);
        
        let diemXetDuyet = dataCheck.diem;
        if (dataCheck.khongVong && dataCheck.khongVong.includes("KHÔNG VONG")) diemXetDuyet -= 35;

        if (diemXetDuyet > diemToiUuXungQuanh) {
            diemToiUuXungQuanh = diemXetDuyet;
            gocToiUuXungQuanh = gocKhaoSatXungQuanh;
            dataToiUuPhanTich = dataCheck;
        }
    }

    // Điều khiển cây Kim Vàng Thần Định khóa chặt phương vị tối ưu trường khí
    const ghostNeedleElement = document.getElementById('ghostNeedle');
    let hieuSoGocXoay = gocToiUuXungQuanh - headingChuan;
    if (hieuSoGocXoay > 180) hieuSoGocXoay -= 360;
    if (hieuSoGocXoay < -180) hieuSoGocXoay += 360;

    if (ghostNeedleElement) {
        ghostNeedleElement.style.display = 'block';
        ghostNeedleElement.style.opacity = "1";
        ghostNeedleElement.style.transform = `translate(-50%, -50%) rotate(${gocToiUuXungQuanh}deg)`;
        if (Math.abs(hieuSoGocXoay) <= 0.8) ghostNeedleElement.classList.add('matched-pulse');
        else ghostNeedleElement.classList.remove('matched-pulse');
    }

    XuatBaoCaoPhongThuyKinhDien(mucDich, headingChuan, gocToiUuXungQuanh, hieuSoGocXoay, doRongQuetThucTeDo, cachTamMet, ketQuaHienTai, dataToiUuPhanTich);
}

/**
 * DỰNG VÀ ĐIỀU KHIỂN CÁI KHUNG VÒNG CUNG OMHẬP LÊN LA BÀN
 */
function capNhatKhungVongCungDoHoaLaBan(tamHeading, doRongDo) {
    let bracket = document.getElementById('compassVisualBracket');
    if (!bracket) {
        // Tự động đúc phần tử vòng cung đồ họa nếu la bàn của anh chưa chuẩn bị sẵn
        const laBanContainer = document.querySelector('.compass-container') || document.getElementById('compass') || document.body;
        bracket = document.createElement('div');
        bracket.id = 'compassVisualBracket';
        // Đúc CSS bọc lót dải cung phát sáng Neon ôm lấy la bàn
        bracket.style.position = "absolute";
        bracket.style.top = "50%"; bracket.style.left = "50%";
        bracket.style.width = "280px"; bracket.style.height = "280px"; // Thiết lập bo theo size la bàn mặt số
        bracket.style.borderRadius = "50%";
        bracket.style.pointerEvents = "none";
        bracket.style.zIndex = "90";
        laBanContainer.appendChild(bracket);
    }

    if (doRongDo <= 0) {
        bracket.style.display = "none";
        return;
    }

    bracket.style.display = "block";
    // Thiết lập dải màu nén gradient của vòng cung che phủ thể hiện góc chiếm đóng của cái giường/cổng
    let nuaCung = (doRongDo / 2).toFixed(1);
    bracket.style.transform = `translate(-50%, -50%) rotate(${tamHeading}deg)`;
    bracket.style.border = "3px solid transparent";
    bracket.style.background = `conic-gradient(from 180deg, transparent 0deg, rgba(223,183,108,0.25) 180deg, rgba(223,183,108,0.25) ${180 + parseFloat(nuaCung)}deg, transparent ${180 + parseFloat(nuaCung)}deg)`;
    bracket.style.boxShadow = "0 0 15px rgba(223,183,108,0.2) dashed";
}

// =========================================================================
// 📜 4. BIÊN DỊCH BÁO CÁO NGỮ CẢNH: CHUYỂN ĐỔI GÓC XOAY SANG CM NGOÀI ĐỜI THỰC
// =========================================================================
function XuatBaoCaoPhongThuyKinhDien(mucDich, headingChuan, gocToiUuXungQuanh, hieuSoGocXoay, doRongQuetThucTeDo, cachTamMet, ketQuaHienTai, dataToiUuPhanTich) {
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

    let moTaTrucHinhHoc = "đường trục dọc tâm đối xứng chính diện";
    if (mucDich === 'bed') moTaTrucHinhHoc = "đường trục dọc đi qua chính giữa tâm đầu giường ngủ";
    if (mucDich === 'altar') moTaTrucHinhHoc = "đường tâm nhang đi qua trọng tâm bàn thờ";
    if (['house', 'gate', 'balcony'].includes(mucDich)) moTaTrucHinhHoc = "trục tim cửa chính tiếp khí khẩu";

    let htmlLuatDoan = `
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:6px; margin-bottom:8px;">
            <span style="color:#dfb76c; font-weight:bold; font-size:0.85rem; letter-spacing:0.5px;">🧭 TOẠ ĐỘ TRỤC T M THỰC ĐỊA: ${headingChuan.toFixed(1)}°</span>
            <span style="background:${mauHienTai.color}; color:#000; padding:2px 8px; border-radius:10px; font-weight:900; font-size:0.75rem;">${ketQuaHienTai.diem} PT</span>
        </div>
        <div style="font-size:0.85rem; color:#eee; line-height:1.5; text-align:left; margin-bottom:8px;">
            • Quy cách kiến trúc: <b>${tenCongNangText}</b> phủ một vệt rộng la bàn khoảng <span style="color:#dfb76c; font-weight:bold;">${doRongQuetThucTeDo.toFixed(1)}°</span><br>
            • Đánh giá trường khí hiện tại: <b style="color:${mauHienTai.color}">${mauHienTai.text}</b><br>
            • Mạch đất đóng giữ: <b>Sơn ${ketQuaHienTai.son || "Tý"}</b> | Sinh khí Tuyến vị: <b>${ketQuaHienTai.khongVong || "Thuần Khí"}</b>
        </div>
    `;

    // NẾU PHÁT HIỆN LONG MẠCH TỐT HƠN KỀ CẬN -> XUẤT C NG THỨC QUY ĐỔI RA SỐ CM THỰC TẾ TRÊN MẶT ĐẤT
    if (dataToiUuPhanTich.diem > ketQuaHienTai.diem && Math.abs(hieuSoGocXoay) > 0.8) {
        let mauToiUu = layBoLocMauSac(dataToiUuPhanTich.diem);
        let huongNhichXoay = hieuSoGocXoay > 0 ? "BÊN PHẢI (Thuận chiều kim đồng hồ)" : "BÊN TRÁI (Ngược chiều kim đồng hồ)";
        
        // 📐 SIÊU C NG THỨC ĐỔI ĐỘ LỆCH SANG CM TRÊN MẶT ĐẤT: Độ dài cung s = Bán kính (khoảng cách tâm) * Radian góc lệch
        let radianChenhLech = Math.abs(hieuSoGocXoay) * (Math.PI / 180);
        let soCmDichChuyenNgoaiDoi = ((cachTamMet * 100) * radianChenhLech).toFixed(0);

        htmlLuatDoan += `
            <div style="margin-top:10px; padding:12px; background:rgba(223,183,108,0.05); border:1px dashed rgba(223,183,108,0.3); border-radius:8px; text-align:left;">
                <span style="color:#dfb76c; font-weight:bold; font-size:0.85rem; display:block; margin-bottom:4px;">✨ MẬT PHÁP ĐIỀU CHỈNH VI PH N LONG MẠCH:</span>
                <span style="color:#ddd; font-size:0.8rem; display:block; line-height:1.45;">Hệ thống rà quét phát hiện một điểm cát khí tụ khí vương thịnh hơn hướng về góc la bàn <b>${gocToiUuXungQuanh.toFixed(1)}°</b>.</span>
                <span style="color:#30d158; font-size:0.82rem; font-weight:bold; display:block; margin-top:6px; background:rgba(48,209,88,0.06); padding:6px; border-radius:4px;">
                    👉 HÀNH ĐỘNG SẮP ĐẶT THỰC ĐỊA: Giữ nguyên hướng nhìn vật thể, tiến hành dịch tịnh tiến song song toàn bộ kết cấu sang <b style="color:#fff;">${huongNhichXoay}</b> một khoảng chính xác là <span style="font-size:0.95rem; text-decoration:underline; color:#fff;">${soCmDichChuyenNgoaiDoi} cm</span>.
                </span>
                <span style="color:#aaa; font-size:0.75rem; display:block; margin-top:6px; font-style:italic; border-top:1px dashed rgba(255,255,255,0.08); padding-top:6px;">
                    * Lưu ý quan trọng: Tọa độ đích lập cực áp cho <b>${moTaTrucHinhHoc}</b>. Khi xê dịch đúng khoảng cách cm trên, toàn bộ dải diện của vật thể sẽ l lọt lòng trọn vẹn vào long khí mạch Sơn <b>${dataToiUuPhanTich.son} (${dataToiUuPhanTich.diem} Điểm - ${mauToiUu.text})</b> để kích tài tiến lộc!
                </span>
            </div>
        `;
    } else if (ketQuaHienTai.diem >= 85) {
        htmlLuatDoan += `
            <div style="margin-top:10px; padding:10px; background:rgba(48,209,88,0.08); border-left:3px solid #30d158; border-radius:4px; font-size:0.82rem; color:#30d158; font-weight:500; text-align:left; line-height:1.4;">
                🎉 CHÚC MỪNG GIA CHỦ! Vị trí trục ngắm dành cho <b>${moTaTrucHinhHoc}</b> đã nằm trọn vẹn trên đại mạch sinh khí tinh khiết tối cao. Bản tọa đã đắc cách Đại Cát, không cần vi chỉnh tịnh tiến!
            </div>
        `;
    }

    detailBox.style.borderLeft = `4px solid ${mauHienTai.color}`;
    detailBox.innerHTML = htmlLuatDoan;
}

// =========================================================================
// 🗃️ 5. ENGINE NỘI SUY DỰ PHÒNG CHỐNG CRASH HỆ THỐNG
// =========================================================================
function engineNoiSuyDiemDuPhong(cungPhi, degree, namKhaoSat, mucDich, doRongCm, cachTamMet) {
    const chuoiSon24 = ["Tý","Quý","Sửu","Cấn","Dần","Giáp","Mão","Ất","Thìn","Tốn","Tỵ","Bính","Ngọ","Đinh","Mùi","Khôn","Thân","Canh","Dậu","Tân","Tuất","Càn","Hợi","Nhâm"];
    let indexSon = Math.floor(((degree + 7.5) % 360) / 15);
    let tenSon = chuoiSon24[indexSon] || "Tý";
    const chuoiHuongLon = ["Bắc","Đông Bắc","Đông","Đông Nam","Nam","Tây Nam","Tây","Tây Bắc"];
    let indexHuong = Math.floor(((degree + 22.5) % 360) / 45);
    let tenHuongLon = chuoiHuongLon[indexHuong] || "Bắc";

    let hopMenh = (["Càn", "Khôn", "Cấn", "Đoài"].includes(cungPhi) && ["Tây Bắc", "Tây Nam", "Đông Bắc", "Tây"].includes(tenHuongLon)) ||
                 (!["Càn", "Khôn", "Cấn", "Đoài"].includes(cungPhi) && !["Tây Bắc", "Tây Nam", "Đông Bắc", "Tây"].includes(tenHuongLon));
    let scoreBase = hopMenh ? 78 : 42;
    let checkKV = "Thuần Khí";
    let distDai = (degree - 22.5) % 45; if (distDai < 0) distDai += 45; distDai = Math.min(distDai, 45 - distDai);
    if (distDai <= 0.5) { scoreBase = 15; checkKV = "ĐẠI KHÔNG VONG"; }

    return { diem: Math.max(5, Math.min(98, scoreBase)), son: tenSon, huongLon: tenHuongLon, saoBatTrach: hopMenh ? "Sinh Khí" : "Tuyệt Mệnh", satTinhQuétĐược: [], khongVong: checkKV };
}

// =========================================================================
// 🔌 6. BỘ LẮNG NGHE SỰ KIỆN TỰ ĐỘNG THU GỌN MENU TỪ WINDOW CLICK
// =========================================================================
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(event) {
        const panel = document.getElementById('sweepOptionsPanel');
        const btn = document.getElementById('wavePulseBtn');
        if (panel && panel.classList.contains('show') && !panel.contains(event.target) && !btn.contains(event.target)) {
            panel.classList.remove('show');
        }
    });
    
    // Tự kích hoạt dựng form mặc định ngay khi app khởi động xong
    setTimeout(() => { taoBoGoNhapLieuDongTrenUI(SieuBoDieuPhoiQuet.cheDoHienTai); }, 300);
});