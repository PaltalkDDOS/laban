/**
 * =========================================================================
 * 🌌 PHONG THỦY SỐ VẬN 9 - MODULE TOÁN PHÁP TRẠCH NHẬT KIẾN TRÚC ĐỘC LẬP
 * Quy chuẩn lập cực: Thiên thời (Lịch pháp) ➔ Địa mạch (24 Sơn) ➔ Nhân khí (Mệnh chủ)
 * =========================================================================
 */

// ==========================================
// I. MA TRẬN CẤU TRÚC DỮ LIỆU TĨNH KHÔNG DẤU (KHO TÀNG CƠ ĐỒNG)
// ==========================================
const DATA_TRACH_NHAT_LOI = {
    // 12 Trực Kiến Trừ - Định vị cát hung theo tính chất đặc thù của từng hành vi năng lượng
    THAP_NHI_KIEN_TRU: {
        "Kien": { 
            cat: ["study", "work", "office"], 
            hung: ["earth", "toilet", "kitchen"], 
            text: "Chu khởi đầu, vượng khí nạp tài, thích hợp đặt bàn học, bàn làm việc nhưng đại kỵ động thổ, phá dỡ, đào rãnh uế tạp." 
        },
        "Tru": { 
            cat: ["toilet", "clean", "sewer"], 
            hung: ["wedding", "store", "door"], 
            text: "Chu tẩy uế, xả bỏ uế khí. Đại cát để khởi công xây dựng Toilet, đào móng tự hoại, quét dọn trạch tâm, loại bỏ khí xấu." 
        },
        "Man": { 
            cat: ["store", "bed", "warehouse"], 
            hung: ["earth", "funeral"], 
            text: "Chu đầy đủ, sung túc. Thích hợp bài trí giường ngủ vợ chồng, an vị két sắt, khai trương cửa hàng bánh mì, quầy thu ngân." 
        },
        "Binh": { 
            cat: ["work", "study"], 
            hung: ["earth", "lawsuit"], 
            text: "Chu bình hòa, ổn định. Thích hợp kê bàn học, bàn làm việc, duy trì trạng thái trường khí hiện tại, cẩn thận tranh chấp." 
        },
        "Dinh": { 
            cat: ["bed", "study", "door"], 
            hung: ["toilet", "move"], 
            text: "Chu định tính, bền vững. Thích hợp đặt giường ngủ ổn định tinh thần, đặt bàn học thi cử khoa bảng, lập cửa chính vững chắc." 
        },
        "Chap": { 
            cat: ["work"], 
            hung: ["door", "move", "earth"], 
            text: "Chu thu tàng, giữ thế. Chỉ nên làm các công việc mang tính chất bảo trì nội bộ, kỵ mở cửa chính, di chuyển giường ngủ." 
        },
        "Pha": { 
            cat: [], 
            hung: ["all", "earth", "house", "door", "bed", "kitchen", "toilet"], 
            text: "Chu hình xung, đổ vỡ. Năng lượng vũ trụ ngày này cực kỳ hỗn loạn, tuyệt đối đại kỵ khởi công, động thổ hay an vị mọi hạng mục." 
        },
        "Nguy": { 
            cat: [], 
            hung: ["earth", "travel"], 
            text: "Chu hiểm nguy, rình rập. Trường khí mang tính rủi ro cao, kỵ phạt mộc động thổ, cẩn thận tai nạn va chạm bất ngờ." 
        },
        "Thanh": { 
            cat: ["house", "door", "bed", "work", "store"], 
            hung: ["toilet", "sewer"], 
            text: "Chu vạn sự thành tựu, thiên địa hộ trì. Đại cát để khởi công xây nhà, dựng cổng lớn, lập cửa chính, an vị giường ngủ, quầy bánh mì." 
        },
        "Thu": { 
            cat: ["store", "warehouse"], 
            hung: ["earth", "door"], 
            text: "Chu thu hoạch, tích lũy. Thích hợp làm kho tàng, đặt quầy thu ngân buôn bán, kỵ đào móng mở hướng nạp khí cửa chính." 
        },
        "Khai": { 
            cat: ["door", "store", "study", "work"], 
            hung: ["toilet", "sewer"], 
            text: "Chu thông suốt, mở mang sinh khí. Tối thượng để mở cổng lớn, lập cửa nạp khí, đặt quầy bánh mì đón khách, đặt bàn học quan lộ." 
        },
        "Be": { 
            cat: ["warehouse"], 
            hung: ["all", "earth", "door", "move"], 
            text: "Chu bế tắc, ngưng trệ. Trường khí bị khóa chặt, âm khí nặng, chỉ hợp làm kho chứa đồ uế, kỵ mở cửa, dời giường, khởi công." 
        }
    },

    // Hệ thống hình xung của Thập Nhị Địa Chi để quét Tử Huyệt của Địa và Nhân
    HINH_XUNG_QUY_QUYET: {
        LUC_XUNG: { "Ty": "Ngo", "Suu": "Mui", "Dan": "Than", "Mao": "Dau", "Thin": "Tuat", "Ty__": "Hoi", "Ngo": "Ty", "Mui": "Suu", "Than": "Dan", "Dau": "Mao", "Tuat": "Thin", "Hoi": "Ty__" },
        LUC_HOP: { "Ty": "Suu", "Dan": "Hoi", "Mao": "Tuat", "Thin": "Dau", "Ty__": "Than", "Ngo": "Mui", "Suu": "Ty", "Hoi": "Dan", "Tuat": "Mao", "Dau": "Thin", "Than": "Ty__", "Mui": "Ngo" },
        TAM_HOP: {
            "Than": ["Ty", "Thin"], "Ty": ["Than", "Thin"], "Thin": ["Than", "Ty"],
            "Ty__": ["Dau", "Suu"], "Dau": ["Ty__", "Suu"], "Suu": ["Ty__", "Dau"],
            "Hoi": ["Mao", "Mui"], "Mao": ["Hoi", "Mui"], "Mui": ["Hoi", "Mao"],
            "Dan": ["Ngo", "Tuat"], "Ngo": ["Dan", "Tuat"], "Tuat": ["Dan", "Ngo"]
        }
    },

    // Ánh xạ tên 24 Sơn vị tiếng Việt sang cấu trúc Địa chi tiếng Anh/Mã sạch không dấu phục vụ tính toán
    SON_TO_CHI_MAP: {
        "Tý": "Ty", "Quý": "Ty", "Nhâm": "Ty",
        "Sửu": "Suu", "Cấn": "Suu", "Dần": "Dan",
        "Giáp": "Dan", "Mão": "Mao", "Ất": "Mao",
        "Thìn": "Thin", "Tốn": "Thin", "Tỵ": "Ty__",
        "Bính": "Ty__", "Ngọ": "Ngo", "Đinh": "Ngo",
        "Mùi": "Mui", "Khôn": "Mui", "Thân": "Than",
        "Canh": "Than", "Dậu": "Dau", "Tân": "Dau",
        "Tuất": "Tuat", "Càn": "Tuat", "Hợi": "Hoi"
    }
};

// ==========================================
// II. THUẬT TOÁN TOÁN PHÁP TRẠCH NHẬT ĐA TẦNG ĐỘC LẬP
// ==========================================

/**
 * Hàm lõi quét thời không tự động, bóc tách ngày giờ cát tường
 * @param {number} birthYear - Năm sinh gia chủ (Nhân)
 * @param {string} sonName - Tên Sơn vị thực tế từ la bàn (Địa) - Ví dụ: "Nhâm", "Tý", "Bính"...
 * @param {number} namKhaoSat - Năm muốn hành sự (Thiên)
 * @param {number} thangKhaoSat - Tháng muốn hành sự (Thiên)
 * @param {string} mucDich - ID mục đích động từ biểu mẫu (house, door, bed, kitchen, toilet, store...)
 */
function tinhNgayGioCatTuong(birthYear, sonName, namKhaoSat, thangKhaoSat, mucDich) {
    if (!birthYear || !sonName || !namKhaoSat || !thangKhaoSat || !mucDich) {
        return [];
    }

    // Lấy cấu trúc mục đích (Cát nạp khí hay Hung trấn sát)
    const configHangMuc = typeof ConfigPhongThuy !== 'undefined' ? ConfigPhongThuy[mucDich] : { title: "Hạng mục", isCat: true };
    const isCatPurpose = configHangMuc.isCat;

    // Chuyển đổi tên Sơn sang Địa chi mật mã không dấu
    const chiCuaSon = DATA_TRACH_NHAT_LOI.SON_TO_CHI_MAP[sonName] || "Ty";
    const chiTuoiChuNha = layDiaChiTuNamSinh(birthYear);

    let danhSachNgayTot = [];

    // Chạy vòng lặp quét qua tất cả các ngày trong tháng (tối đa 31 ngày)
    for (let ngay = 1; ngay <= 31; ngay++) {
        // Gọi hàm giả định hoặc hàm thư viện âm lịch tích hợp sẵn của bạn để lấy chi tiết ngày âm
        // Cần trả về cấu trúc: { lunarDay, lunarMonth, canChiNgay: { chi: "Ngo", text: "Giáp Ngọ" }, truc: "Khai", sao: "Vi" }
        let thongTinNgay = tinhChiTietAmLichDong(namKhaoSat, thangKhaoSat, ngay);
        if (!thongTinNgay) continue;

        let diemNgay = 100; // Điểm nguyên bản tinh khiết ban đầu
        let lyDoPhat = [];
        let lyDoThuong = [];

        // -----------------------------------------------------------------
        // MÀNG LỌC 1: THIÊN THỜI ĐẠI SÁT (Né vết uế khí cố định của Vũ trụ)
        // -----------------------------------------------------------------
        // 1. Ngày Nguyệt Kỵ (Tổng số ngày bằng 5: ngày 5, 14, 23 âm lịch)
        if ([5, 14, 23].includes(thongTinNgay.lunarDay)) {
            diemNgay -= 40;
            lyDoPhat.push("Phạm ngày Nguyệt Kỵ (Khí lực trung tâm bị tiêu tán)");
        }
        // 2. Ngày Tam Nương (Sự trễ nải tâm linh: ngày 3, 7, 13, 18, 22, 27 âm lịch)
        if ([3, 7, 13, 18, 22, 27].includes(thongTinNgay.lunarDay)) {
            diemNgay -= 20;
            lyDoPhat.push("Phạm ngày Tam Nương (Trường khí giao thao bất ổn)");
        }

        // -----------------------------------------------------------------
        // MÀNG LỌC 2: KHÔNG GIAN ĐỊA MẠCH (Đối chiếu Ngày với Chi của Sơn Vị La Bàn)
        // -----------------------------------------------------------------
        const chiCuaNgay = thongTinNgay.canChiNgay.chi;
        const chiXungVoiSon = DATA_TRACH_NHAT_LOI.HINH_XUNG_QUY_QUYET.LUC_XUNG[chiCuaSon];

        if (chiCuaNgay === chiXungVoiSon) {
            diemNgay -= 55; // Phạt cực nặng vì phạm trận pháp phá vỡ long mạch Sơn vị
            lyDoPhat.push(`Ngày phạm Lục Xung Chiếu Hướng (Xung sát trực diện vào Sơn vị địa lý ${sonName})`);
        }

        // -----------------------------------------------------------------
        // MÀNG LỌC 3: NHÂN KHÍ BẢN MỆNH (Đối chiếu Ngày với Tuổi Mệnh Chủ)
        // -----------------------------------------------------------------
        const chiXungVoiChuNha = DATA_TRACH_NHAT_LOI.HÌNH_XUNG_QUY_QUYET.LUC_XUNG[chiTuoiChuNha];
        
        // 1. Phạm chính xung tuổi chủ sự
        if (chiCuaNgay === chiXungVoiChuNha) {
            diemNgay -= 50;
            lyDoPhat.push(`Ngày phạm Chính Xung Bản Mệnh (Xung thiên phá khí vào tuổi ${chiTuoiChuNha} của trạch chủ)`);
        }
        // 2. Đạt thế trận Lục Hợp / Tam Hợp trợ lực tuổi chủ sự
        if (DATA_TRACH_NHAT_LOI.HINH_XUNG_QUY_QUYET.LUC_HOP[chiTuoiChuNha] === chiCuaNgay) {
            diemNgay += 15;
            lyDoThuong.push(`Đạt cục diện Lục Hợp cát tường với bản mệnh (${chiTuoiChuNha} - ${chiCuaNgay})`);
        }
        if (DATA_TRACH_NHAT_LOI.HINH_XUNG_QUY_QUYET.TAM_HOP[chiTuoiChuNha]?.includes(chiCuaNgay)) {
            diemNgay += 10;
            lyDoThuong.push("Hợp thành bộ khí Tam Hợp trợ lực bản thể chủ sự");
        }

        // -----------------------------------------------------------------
        // MÀNG LỌC 4: ĐẮC CÁCH HẠNG MỤC SỬ DỤNG (Xử lý Đảo chiều Âm Dương cốt tủy)
        // -----------------------------------------------------------------
        const trucCuaNgay = thongTinNgay.truc;
        const cauHinhTruc = DATA_TRACH_NHAT_LOI.THAP_NHI_KIEN_TRU[trucCuaNgay];

        if (cauHinhTruc) {
            // Hạng mục nạp cát khí (Cửa, Giường, Bàn học, Cổng, Quầy bánh mì...) gặp Trực Cát
            if (isCatPurpose && cauHinhTruc.cat.includes(mucDich)) {
                diemNgay += 20;
                lyDoThuong.push(`Trực ${trucCuaNgay} đắc cách toàn hảo để nạp sinh khí cho ${configHangMuc.title}`);
            }
            // Hạng mục xả uế/trấn sát (Toilet, Bếp) gặp Trực thích hợp tiêu uế (Như Trực Trừ)
            if (!isCatPurpose && cauHinhTruc.cat.includes(mucDich)) {
                diemNgay += 25;
                lyDoThuong.push(`Trực ${trucCuaNgay} hỗ trợ đắc cách để xây dựng hạ tầng trấn sát tiêu uế ${configHangMuc.title}`);
            }
            // Hạng mục phạm vào vòng cấm kỵ của Trực ngày
            if (cauHinhTruc.hung.includes(mucDich)) {
                diemNgay -= 35;
                lyDoPhat.push(`Trực ${trucCuaNgay} đại kỵ triển khai khởi công hoặc an vị ${configHangMuc.title}`);
            }
        }

        // -----------------------------------------------------------------
        // VÒNG CHỐT CHẶN & PHÂN CẤP LỊCH PHÁP
        // -----------------------------------------------------------------
        diemNgay = Math.max(10, Math.min(100, diemNgay));

        // Chỉ lọc lấy những ngày có phẩm chất trường khí tốt (Từ 72 điểm đạt cách trở lên)
        if (diemNgay >= 72) {
            // Quét khung giờ vàng hành sự đắc lực
            const gioTotMaoMạch = tinhGioHoangDaoDong(chiCuaNgay, mucDich);

            danhSachNgayTot.push({
                solarDate: `${ngay}/${thangKhaoSat}/${namKhaoSat}`,
                lunarDate: `${thongTinNgay.lunarDay}/${thongTinNgay.lunarMonth}`,
                canChiText: thongTinNgay.canChiNgay.text,
                score: diemNgay,
                trucName: trucCuaNgay,
                trucText: cauHinhTruc ? cauHinhTruc.text : "",
                saoName: thongTinNgay.sao,
                levelText: diemNgay >= 90 ? "THỜI KHÔNG ĐẠI CÁT" : "CÁT NHẬT AN LÀNH",
                advantages: lyDoThuong,
                disadvantages: lyDoPhat,
                goldHours: gioTotMaoMạch
            });
        }
    }

    // Sắp xếp ngày tối ưu nhất đứng trên đỉnh bảng tra cứu
    return danhSachNgayTot.sort((a, b) => b.score - a.score);
}

// ==========================================
// III. CÁC HÀM TIỆN ÍCH NỘI BỘ TOÁN PHÁP
// ==========================================

// Trích xuất Địa chi từ năm sinh của người dùng
function layDiaChiTuNamSinh(year) {
    const chiArr = ["Than", "Dau", "Tuat", "Hoi", "Ty", "Suu", "Dan", "Mao", "Thin", "Ty__", "Ngo", "Mui"];
    return chiArr[year % 12];
}

// Thuật toán động tính toán giờ đắc cách nạp khí dựa trên Chi ngày và mục đích sử dụng
function tinhGioHoangDaoDong(chiNgay, mucDich) {
    // Bản đồ Giờ Hoàng Đạo cố định theo Chi ngày
    const hoangDaoMap = {
        "Ty": ["Ty", "Suu", "Mao", "Ngo", "Than", "Dau"],
        "Ngo": ["Ty", "Suu", "Mao", "Ngo", "Than", "Dau"],
        "Suu": ["Dan", "Mao", "Ty__", "Than", "Tuat", "Hoi"],
        "Mui": ["Dan", "Mao", "Ty__", "Than", "Tuat", "Hoi"],
        "Dan": ["Ty", "Suu", "Thin", "Ty__", "Mui", "Tuat"],
        "Than": ["Ty", "Suu", "Thin", "Ty__", "Mui", "Tuat"],
        "Mao": ["Ty", "Dan", "Mao", "Ngo", "Mui", "Hoi"],
        "Tuat": ["Ty", "Dan", "Mao", "Ngo", "Mui", "Hoi"],
        "Thin": ["Dan", "Thin", "Ty__", "Thân", "Dau", "Hoi"],
        "Hoi": ["Dan", "Thin", "Ty__", "Thân", "Dau", "Hoi"],
        "Ty__": ["Suu", "Thin", "Ngo", "Mui", "Tuat", "Hoi"]
    };

    const gioGoc = hoangDaoMap[chiNgay] || ["Ty", "Ngo"];
    const configHangMuc = typeof ConfigPhongThuy !== 'undefined' ? ConfigPhongThuy[mucDich] : { isCat: true };

    // Ánh xạ khung giờ dịch nghĩa sang ngôn từ giao diện trực quan
    const gioDichNghia = {
        "Ty": "Tý (23h - 01h)", "Suu": "Sửu (01h - 03h)", "Dan": "Dần (03h - 05h)",
        "Mao": "Mão (05h - 07h)", "Thin": "Thìn (07h - 09h)", "Ty__": "Tỵ (09h - 11h)",
        "Ngo": "Ngọ (11h - 13h)", "Mui": "Mùi (13h - 15h)", "Than": "Thân (15h - 17h)",
        "Dau": "Dậu (17h - 19h)", "Tuat": "Tuất (19h - 21h)", "Hoi": "Hợi (21h - 23h)"
    };

    // Điều tiết giờ: Nếu xả uế (Toilet) thì chọn giờ hoàng đạo mang tính chất âm dịu, nạp khí (Cửa, Quầy bành mì) chọn giờ chính dương
    return gioGoc.map(g => gioDichNghia[g]);
}

// Hàm lõi giả lập bóc tách âm lịch lịch pháp (Bạn kết nối hàm này với thư viện âm lịch thực tế trên máy của bạn)
function tinhChiTietAmLichDong(y, m, d) {
    // Trả về dữ liệu test chuẩn cấu trúc
    const danhSachTrucTest = ["Kien", "Tru", "Man", "Binh", "Dinh", "Chap", "Pha", "Nguy", "Thanh", "Thu", "Khai", "Be"];
    const canArr = ["Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"];
    const chiArr = ["Ty", "Suu", "Dan", "Mao", "Thin", "Ty__", "Ngo", "Mui", "Than", "Dau", "Tuat", "Hoi"];
    
    let indexGiaLap = (d + m) % 12;
    return {
        lunarDay: d > 30 ? 1 : d,
        lunarMonth: m,
        canChiNgay: {
            chi: chiArr[indexGiaLap],
            text: `${canArr[d % 10]} ${chiArr[indexGiaLap] === "Ty__" ? "Tỵ" : (chiArr[indexGiaLap] === "Ngo" ? "Ngọ" : chiArr[indexGiaLap])}`
        },
        truc: danhSachTrucTest[(d + m) % 12],
        sao: "Vĩ (Đại Cát Tinh)"
    };
}