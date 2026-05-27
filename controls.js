 let debounceTimer;

// Ma trận Bát Trạch Minh Châu - HOÀN CHỈNH 192 CẶP (8 Mệnh x 24 Sơn)
const MaTranMinhChau = {
    "Khảm": {
        "Nhâm": { loai: "Cát", diem: 88, cap_do: "Đại Cát", nhom: "Phục Vị", hanh: "Thủy", goc_do_min: 337.5, goc_do_max: 352.5, icon: "star-green", linhvuc: ["tai_loc", "gia_dao", "nhan_dinh"], doi_tuong: ["nam_chu", "gia_dinh"], text: "Đạt Minh Châu Cát Sơn, Phục Vị tiến tài, gia đạo hưng vượng, con cái thông minh.", giaiphap: "Đặt chậu cây xanh lớn hành Mộc hoặc Tháp Văn Xương gỗ chín tầng." },
        "Tý": { loai: "Cát", diem: 93, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Thủy", goc_do_min: 352.5, goc_do_max: 7.5, icon: "star-green", linhvuc: ["tai_loc", "cong_danh"], doi_tuong: ["nam_chu"], text: "Chính vị vượng tài, công danh hiển đạt, đắc tài đắc lộc, vinh hoa phú quý.", giaiphap: "Treo tranh mộc sinh hỏa hoặc đặt tượng Phúc Lộc Thọ." },
        "Quý": { loai: "Hung", diem: 32, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Thủy", goc_do_min: 7.5, goc_do_max: 22.5, icon: "alert-red", linhvuc: ["suc_khoe", "nhan_dinh"], doi_tuong: ["nu_chu", "con_cai"], text: "Phạm thế tà khí nhập cung, âm thịnh dương suy, dễ hao tổn nữ giới hoặc người trẻ tuổi.", giaiphap: "Treo chuông gió đồng 6 thanh hoặc đặt thạch anh đen." },
        "Sửu": { loai: "Hung", diem: 38, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Thổ", goc_do_min: 22.5, goc_do_max: 37.5, icon: "alert-red", linhvuc: ["tai_loc", "gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Thiếu Vong, tài lộc hao tán, gia đạo bất hòa, sinh khí bị trì trệ.", giaiphap: "Đặt phong thủy luân hoặc bể cá nhỏ hành Thủy." },
        "Cấn": { loai: "Hung", diem: 25, cap_do: "Đại Hung", nhom: "Ngũ Quỷ", hanh: "Thổ", goc_do_min: 37.5, goc_do_max: 52.5, icon: "alert-red", linhvuc: ["tai_loc", "suc_khoe"], doi_tuong: ["nam_chu"], text: "Phạm Ngũ Quỷ đại sát, gia chủ tổn tài, đề phòng hỏa hoạn, trộm cắp.", giaiphap: "Treo gương Bát Quái gỗ đào hoặc đặt cặp Tỳ Hưu đồng." },
        "Dần": { loai: "Hung", diem: 30, cap_do: "Tiểu Hung", nhom: "Cô Quả", hanh: "Mộc", goc_do_min: 52.5, goc_do_max: 67.5, icon: "alert-red", linhvuc: ["nhan_dinh", "gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Cô Quả, nhân đinh suy giảm, tài lộc khó tụ.", giaiphap: "Đặt đôi Uyên Ương đồng hoặc hồ lô đồng nạp phúc." },
        "Giáp": { loai: "Cát", diem: 84, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Mộc", goc_do_min: 67.5, goc_do_max: 82.5, icon: "star-green", linhvuc: ["cong_danh", "tai_loc"], doi_tuong: ["nam_chu"], text: "Đắc vinh hoa phú quý, quý nhân phò trợ, làm ăn hanh thông.", giaiphap: "Treo tranh ngựa hoặc đặt Tháp Văn Xương." },
        "Mão": { loai: "Cát", diem: 86, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Mộc", goc_do_min: 82.5, goc_do_max: 97.5, icon: "star-green", linhvuc: ["tai_loc", "nhan_dinh"], doi_tuong: ["gia_dinh"], text: "Tiến điền tài, gia sản tăng tiến, con cái thành đạt.", giaiphap: "Đặt chậu cây xanh lớn hành Mộc." },
        "Ất": { loai: "Hung", diem: 36, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Mộc", goc_do_min: 97.5, goc_do_max: 112.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Lục Sát phương vị, kiện tụng tai ương, thị phi bủa vây.", giaiphap: "Đặt quả cầu thạch anh đen hoặc bình nước muối." },
        "Thìn": { loai: "Hung", diem: 34, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Thổ", goc_do_min: 112.5, goc_do_max: 127.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Khẩu Thiệt, gia đạo tranh chấp, dễ vướng pháp luật.", giaiphap: "Treo rèm cửa tối màu hoặc thạch anh khói." },
        "Tốn": { loai: "Hung", diem: 22, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Mộc", goc_do_min: 127.5, goc_do_max: 142.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["nam_chu"], text: "Phạm Tuyệt Mệnh sát phương, sức khỏe tổn hại nghiêm trọng.", giaiphap: "Treo gương Bát Quái và chuông gió đồng 6 thanh." },
        "Tỵ": { loai: "Hung", diem: 31, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Hỏa", goc_do_min: 142.5, goc_do_max: 157.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Họa Hại phương vị, quan phi khẩu thiệt, làm ăn thua lỗ.", giaiphap: "Đặt tượng Tỳ Hưu hoặc gậy Như Ý đồng." },
        "Bính": { loai: "Cát", diem: 89, cap_do: "Đại Cát", nhom: "Thiên Y", hanh: "Hỏa", goc_do_min: 157.5, goc_do_max: 172.5, icon: "star-green", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Thiên Y đắc vị, sức khỏe dồi dào, bệnh tật tiêu trừ.", giaiphap: "Đặt hồ lô đồng hoặc thạch anh vàng." },
        "Ngọ": { loai: "Cát", diem: 85, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Hỏa", goc_do_min: 172.5, goc_do_max: 187.5, icon: "star-green", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Diên Niên chính khí, gia đạo hòa hợp, ngoại giao thuận lợi.", giaiphap: "Đặt đôi Uyên Ương hoặc thảm màu trắng/xám." },
        "Đinh": { loai: "Cát", diem: 95, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Hỏa", goc_do_min: 187.5, goc_do_max: 202.5, icon: "star-green", linhvuc: ["tai_loc", "nhan_dinh"], doi_tuong: ["nam_chu", "gia_dinh"], text: "Sinh Khí tối thượng, phát phúc nhanh chóng, nhân đinh hưng vượng.", giaiphap: "Đặt cây xanh lớn và Tháp Văn Xương gỗ." },
        "Mùi": { loai: "Hung", diem: 33, cap_do: "Tiểu Hung", nhom: "Ngũ Quỷ", hanh: "Thổ", goc_do_min: 202.5, goc_do_max: 217.5, icon: "alert-red", linhvuc: ["nhan_dinh"], doi_tuong: ["gia_dinh"], text: "Phạm Bạch Hổ sát, tổn thương nhân đinh, đề phòng huyết quang.", giaiphap: "Treo chuông gió và đặt thạch anh đen." },
        "Khôn": { loai: "Hung", diem: 24, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Thổ", goc_do_min: 217.5, goc_do_max: 232.5, icon: "alert-red", linhvuc: ["tai_loc", "gia_dao"], doi_tuong: ["nam_chu"], text: "Phạm Tuyệt Mệnh sát khí, tài sản tiêu tán, gia đạo ly tán.", giaiphap: "Treo gương Bát Quái và chuông gió đồng." },
        "Thân": { loai: "Hung", diem: 35, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Kim", goc_do_min: 232.5, goc_do_max: 247.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Cô Thần, gia đạo bất hòa, vợ chồng xung khắc.", giaiphap: "Đặt bình gốm hành Thổ hoặc hồ lô đồng." },
        "Canh": { loai: "Cát", diem: 83, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Kim", goc_do_min: 247.5, goc_do_max: 262.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Đắc vị tiến tài, kinh doanh phát đạt, gia nghiệp hưng thịnh.", giaiphap: "Đặt vật phẩm hành Kim." },
        "Dậu": { loai: "Cát", diem: 81, cap_do: "Tiểu Cát", nhom: "Phục Vị", hanh: "Kim", goc_do_min: 262.5, goc_do_max: 277.5, icon: "star-green", linhvuc: ["cong_danh"], doi_tuong: ["nam_chu"], text: "Đạt cung Quý Nhân, có người giúp đỡ lúc khó khăn.", giaiphap: "Treo tranh Phúc Lộc hoặc tượng Quan Công." },
        "Tân": { loai: "Hung", diem: 37, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Kim", goc_do_min: 277.5, goc_do_max: 292.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Họa Hại tai ương, tiền bạc ra vào thất thường.", giaiphap: "Đặt thạch anh trắng hoặc gậy Như Ý." },
        "Tuất": { loai: "Hung", diem: 29, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Thổ", goc_do_min: 292.5, goc_do_max: 307.5, icon: "alert-red", linhvuc: ["tai_loc", "suc_khoe"], doi_tuong: ["gia_dinh"], text: "Phạm Lục Sát chi khí, trộm cắp hao tài, gia đạo bất an.", giaiphap: "Treo chuỗi tiền Ngũ Đế và thạch anh đen." },
        "Càn": { loai: "Hung", diem: 31, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Kim", goc_do_min: 307.5, goc_do_max: 322.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Lục Sát phương vị, tình duyên trục trặc, hao tổn tâm trí.", giaiphap: "Đặt rèm tối màu và bình nước." },
        "Hợi": { loai: "Bình", diem: 58, cap_do: "Bình Hòa", nhom: "Bình", hanh: "Thủy", goc_do_min: 322.5, goc_do_max: 337.5, icon: "circle-yellow", linhvuc: ["tai_loc"], doi_tuong: ["gia_dinh"], text: "Thế bình hòa tiểu hạn, tài lộc trung bình, cần quản lý tài chính.", giaiphap: "Giữ cân bằng, tránh động thổ lớn." }
    },

    "Khôn": {
        "Nhâm": { loai: "Hung", diem: 26, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Thổ", goc_do_min: 337.5, goc_do_max: 352.5, icon: "alert-red", linhvuc: ["suc_khoe", "tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Tuyệt Mệnh phương, gia chủ đoản thọ, của cải tiêu tán.", giaiphap: "Treo gương Bát Quái và chuông gió đồng." },
        "Tý": { loai: "Hung", diem: 30, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Thủy", goc_do_min: 352.5, goc_do_max: 7.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Lục Sát chi khí, dâm loạn tà ác, gia phong bại hoại.", giaiphap: "Đặt bình thủy tinh chứa nước muối." },
        "Quý": { loai: "Hung", diem: 28, cap_do: "Đại Hung", nhom: "Ngũ Quỷ", hanh: "Thủy", goc_do_min: 7.5, goc_do_max: 22.5, icon: "alert-red", linhvuc: ["gia_dao", "suc_khoe"], doi_tuong: ["gia_dinh"], text: "Phạm Ngũ Quỷ đại sát, gia đình ly tán, tai họa bất ngờ.", giaiphap: "Đặt cặp Kỳ Lân đồng trấn cửa." },
        "Sửu": { loai: "Cát", diem: 90, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Thổ", goc_do_min: 22.5, goc_do_max: 37.5, icon: "star-green", linhvuc: ["tai_loc", "nhan_dinh"], doi_tuong: ["nam_chu"], text: "Sinh Khí vinh hoa, đắc tài đắc lộc, gia đạo an khang.", giaiphap: "Đặt cây xanh lớn và Tháp Văn Xương." },
        "Cấn": { loai: "Cát", diem: 91, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Thổ", goc_do_min: 37.5, goc_do_max: 52.5, icon: "star-green", linhvuc: ["tai_loc", "gia_dao"], doi_tuong: ["gia_dinh"], text: "Sinh Khí chính vị, phát bảo nhanh chóng, gia nghiệp vững bền.", giaiphap: "Đặt chậu cây xanh và tượng tài lộc." },
        "Dần": { loai: "Cát", diem: 87, cap_do: "Đại Cát", nhom: "Thiên Y", hanh: "Mộc", goc_do_min: 52.5, goc_do_max: 67.5, icon: "star-green", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Đắc vị Thiên Y, bệnh tật tiêu trừ, trường thọ phú quý.", giaiphap: "Đặt hồ lô đồng hoặc thạch anh vàng." },
        "Giáp": { loai: "Hung", diem: 35, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Mộc", goc_do_min: 67.5, goc_do_max: 82.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Họa Hại phương, khẩu thiệt thị phi.", giaiphap: "Đặt thạch anh đen." },
        "Mão": { loai: "Hung", diem: 24, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Mộc", goc_do_min: 82.5, goc_do_max: 97.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["nam_chu"], text: "Phạm Tuyệt Mệnh sát phương, tổn hại nam chủ, đại hung.", giaiphap: "Treo gương Bát Quái." },
        "Ất": { loai: "Hung", diem: 33, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Mộc", goc_do_min: 97.5, goc_do_max: 112.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Phạm Họa Hại chi khí, người nhà đau ốm liên miên.", giaiphap: "Đặt bình gốm hành Thổ." },
        "Thìn": { loai: "Cát", diem: 82, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Thổ", goc_do_min: 112.5, goc_do_max: 127.5, icon: "star-green", linhvuc: ["gia_dao", "tai_loc"], doi_tuong: ["gia_dinh"], text: "Diên Niên đắc vị, gia đạo hòa hợp, kinh doanh phát đạt.", giaiphap: "Đặt đôi Uyên Ương đồng." },
        "Tốn": { loai: "Hung", diem: 29, cap_do: "Tiểu Hung", nhom: "Ngũ Quỷ", hanh: "Mộc", goc_do_min: 127.5, goc_do_max: 142.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Ngũ Quỷ phương, trộm cắp quấy phá.", giaiphap: "Treo chuông gió đồng." },
        "Tỵ": { loai: "Hung", diem: 31, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Hỏa", goc_do_min: 142.5, goc_do_max: 157.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Lục Sát sát khí, kiện tụng kéo dài.", giaiphap: "Đặt rèm tối màu." },
        "Bính": { loai: "Hung", diem: 23, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Hỏa", goc_do_min: 157.5, goc_do_max: 172.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["nam_chu"], text: "Phạm Tuyệt Mệnh phương vị, tai nạn bất ngờ.", giaiphap: "Treo gương Bát Quái." },
        "Ngọ": { loai: "Hung", diem: 34, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Hỏa", goc_do_min: 172.5, goc_do_max: 187.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Họa Hại sát, của cải hao hụt.", giaiphap: "Đặt thạch anh trắng." },
        "Đinh": { loai: "Hung", diem: 32, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Hỏa", goc_do_min: 187.5, goc_do_max: 202.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Lục Sát phương vị, tình cảm rạn nứt.", giaiphap: "Đặt bình nước muối." },
        "Mùi": { loai: "Cát", diem: 80, cap_do: "Tiểu Cát", nhom: "Phục Vị", hanh: "Thổ", goc_do_min: 202.5, goc_do_max: 217.5, icon: "star-green", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phục Vị đắc cách, gia đạo an ninh, tài lộc ổn định.", giaiphap: "Đặt thảm trắng hoặc thạch anh trắng." },
        "Khôn": { loai: "Cát", diem: 85, cap_do: "Tiểu Cát", nhom: "Phục Vị", hanh: "Thổ", goc_do_min: 217.5, goc_do_max: 232.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phục Vị bản cung, điền sản tăng tiến, vạn sự cát tường.", giaiphap: "Giữ nguyên và kích hoạt bằng vật phẩm Thổ." },
        "Thân": { loai: "Cát", diem: 83, cap_do: "Tiểu Cát", nhom: "Thiên Y", hanh: "Kim", goc_do_min: 232.5, goc_do_max: 247.5, icon: "star-green", linhvuc: ["suc_khoe", "tai_loc"], doi_tuong: ["gia_dinh"], text: "Thiên Y đắc vị, quý nhân trợ lực, gia tăng tài lộc.", giaiphap: "Đặt hồ lô đồng." },
        "Canh": { loai: "Hung", diem: 36, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Kim", goc_do_min: 247.5, goc_do_max: 262.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Họa Hại phương vị, tổn hao tiền của.", giaiphap: "Treo chuông gió." },
        "Dậu": { loai: "Hung", diem: 27, cap_do: "Đại Hung", nhom: "Ngũ Quỷ", hanh: "Kim", goc_do_min: 262.5, goc_do_max: 277.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Phạm Ngũ Quỷ đại sát, bệnh tật phát sinh.", giaiphap: "Treo gương Bát Quái." },
        "Tân": { loai: "Hung", diem: 30, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Kim", goc_do_min: 277.5, goc_do_max: 292.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Lục Sát chi khí, nhân đinh ly tán.", giaiphap: "Đặt bình nước." },
        "Tuất": { loai: "Cát", diem: 84, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Thổ", goc_do_min: 292.5, goc_do_max: 307.5, icon: "star-green", linhvuc: ["gia_dao", "cong_danh"], doi_tuong: ["gia_dinh"], text: "Diên Niên chính vị, phú quý thọ khang.", giaiphap: "Đặt đôi Uyên Ương." },
        "Càn": { loai: "Cát", diem: 82, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Kim", goc_do_min: 307.5, goc_do_max: 322.5, icon: "star-green", linhvuc: ["tai_loc", "gia_dao"], doi_tuong: ["nam_chu"], text: "Diên Niên đắc cách, ngoại giao thuận lợi.", giaiphap: "Treo tranh phong thủy." },
        "Hợi": { loai: "Bình", diem: 57, cap_do: "Bình Hòa", nhom: "Bình", hanh: "Thủy", goc_do_min: 322.5, goc_do_max: 337.5, icon: "circle-yellow", linhvuc: ["tai_loc"], doi_tuong: ["gia_dinh"], text: "Thế bình hòa, gia đạo ít sóng gió.", giaiphap: "Giữ cân bằng." }
    },

    "Chấn": {
        "Nhâm": { loai: "Cát", diem: 90, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Mộc", goc_do_min: 337.5, goc_do_max: 352.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Sinh Khí vượng cung, đại phát tài lộc, gia chủ thăng tiến.", giaiphap: "Đặt cây xanh lớn." },
        "Tý": { loai: "Cát", diem: 94, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Thủy", goc_do_min: 352.5, goc_do_max: 7.5, icon: "star-green", linhvuc: ["nhan_dinh", "tai_loc"], doi_tuong: ["gia_dinh"], text: "Sinh Khí tối thượng, nhân đinh hưng vượng, con cái hiển đạt.", giaiphap: "Đặt Tháp Văn Xương." },
        "Quý": { loai: "Hung", diem: 35, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Thủy", goc_do_min: 7.5, goc_do_max: 22.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Họa Hại chi khí, tiền của tổn hao.", giaiphap: "Đặt thạch anh đen." },
        "Sửu": { loai: "Hung", diem: 33, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Thổ", goc_do_min: 22.5, goc_do_max: 37.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Lục Sát phương vị, kiện cáo thị phi.", giaiphap: "Treo chuông gió." },
        "Cấn": { loai: "Hung", diem: 29, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Thổ", goc_do_min: 37.5, goc_do_max: 52.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["nam_chu"], text: "Phạm Lục Sát sát phương, tinh thần bất an.", giaiphap: "Đặt bình nước." },
        "Dần": { loai: "Hung", diem: 23, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Mộc", goc_do_min: 52.5, goc_do_max: 67.5, icon: "alert-red", linhvuc: ["nhan_dinh"], doi_tuong: ["nam_chu"], text: "Phạm Tuyệt Mệnh sát khí, hao tài tốn của.", giaiphap: "Treo gương Bát Quái." },
        "Giáp": { loai: "Cát", diem: 81, cap_do: "Tiểu Cát", nhom: "Phục Vị", hanh: "Mộc", goc_do_min: 67.5, goc_do_max: 82.5, icon: "star-green", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phục Vị bản cung, gia đạo bình an.", giaiphap: "Giữ ổn định." },
        "Mão": { loai: "Cát", diem: 83, cap_do: "Tiểu Cát", nhom: "Phục Vị", hanh: "Mộc", goc_do_min: 82.5, goc_do_max: 97.5, icon: "star-green", linhvuc: ["cong_danh"], doi_tuong: ["nam_chu"], text: "Phục Vị chính vị, danh tiếng lẫy lừng.", giaiphap: "Treo tranh." },
        "Ất": { loai: "Cát", diem: 86, cap_do: "Đại Cát", nhom: "Thiên Y", hanh: "Mộc", goc_do_min: 97.5, goc_do_max: 112.5, icon: "star-green", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Thiên Y đắc vị, sức khỏe dồi dào.", giaiphap: "Đặt hồ lô đồng." },
        "Thìn": { loai: "Hung", diem: 30, cap_do: "Tiểu Hung", nhom: "Ngũ Quỷ", hanh: "Thổ", goc_do_min: 112.5, goc_do_max: 127.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Ngũ Quỷ sát vị, trộm cắp quấy nhiễu.", giaiphap: "Treo chuông gió." },
        "Tốn": { loai: "Cát", diem: 84, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Mộc", goc_do_min: 127.5, goc_do_max: 142.5, icon: "star-green", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Diên Niên vượng khí, gia đình hạnh phúc.", giaiphap: "Đặt đôi Uyên Ương." },
        "Tỵ": { loai: "Cát", diem: 82, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Hỏa", goc_do_min: 142.5, goc_do_max: 157.5, icon: "star-green", linhvuc: ["cong_danh", "tai_loc"], doi_tuong: ["nam_chu"], text: "Diên Niên đắc vị, công danh thăng tiến.", giaiphap: "Treo tranh." },
        "Bính": { loai: "Hung", diem: 27, cap_do: "Đại Hung", nhom: "Ngũ Quỷ", hanh: "Hỏa", goc_do_min: 157.5, goc_do_max: 172.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Ngũ Quỷ đại sát, tai họa dồn dập.", giaiphap: "Treo gương Bát Quái." },
        "Ngọ": { loai: "Hung", diem: 25, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Hỏa", goc_do_min: 172.5, goc_do_max: 187.5, icon: "alert-red", linhvuc: ["nhan_dinh"], doi_tuong: ["gia_dinh"], text: "Phạm Tuyệt Mệnh phương vị, tai nạn huyết quang.", giaiphap: "Treo gương và chuông gió." },
        "Đinh": { loai: "Hung", diem: 32, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Hỏa", goc_do_min: 187.5, goc_do_max: 202.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Họa Hại chi khí, tiểu nhân hãm hại.", giaiphap: "Đặt thạch anh đen." },
        "Mùi": { loai: "Hung", diem: 28, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Thổ", goc_do_min: 202.5, goc_do_max: 217.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Phạm Tuyệt Mệnh sát phương, sức khỏe suy kiệt.", giaiphap: "Treo gương Bát Quái." },
        "Khôn": { loai: "Hung", diem: 34, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Thổ", goc_do_min: 217.5, goc_do_max: 232.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Họa Hại sát vị, công danh trắc trở.", giaiphap: "Đặt bình nước." },
        "Thân": { loai: "Hung", diem: 31, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Kim", goc_do_min: 232.5, goc_do_max: 247.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Lục Sát phương vị, tình duyên lận đận.", giaiphap: "Đặt rèm tối." },
        "Canh": { loai: "Hung", diem: 23, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Kim", goc_do_min: 247.5, goc_do_max: 262.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Tuyệt Mệnh hung phương, cực kỳ nguy hiểm.", giaiphap: "Treo gương và Tỳ Hưu." },
        "Dậu": { loai: "Hung", diem: 29, cap_do: "Tiểu Hung", nhom: "Ngũ Quỷ", hanh: "Kim", goc_do_min: 262.5, goc_do_max: 277.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Phạm Ngũ Quỷ sát khí, kiện tụng thị phi.", giaiphap: "Treo chuông gió." },
        "Tân": { loai: "Hung", diem: 35, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Kim", goc_do_min: 277.5, goc_do_max: 292.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Họa Hại tai ương, tiền bạc thất thoát.", giaiphap: "Đặt thạch anh trắng." },
        "Tuất": { loai: "Cát", diem: 85, cap_do: "Đại Cát", nhom: "Thiên Y", hanh: "Thổ", goc_do_min: 292.5, goc_do_max: 307.5, icon: "star-green", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Thiên Y đắc vị, quý nhân giúp đỡ.", giaiphap: "Đặt hồ lô đồng." },
        "Càn": { loai: "Cát", diem: 83, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Kim", goc_do_min: 307.5, goc_do_max: 322.5, icon: "star-green", linhvuc: ["tai_loc", "cong_danh"], doi_tuong: ["nam_chu"], text: "Diên Niên đắc cách, tài lộc dồi dào.", giaiphap: "Treo tranh phong thủy." },
        "Hợi": { loai: "Bình", diem: 56, cap_do: "Bình Hòa", nhom: "Bình", hanh: "Thủy", goc_do_min: 322.5, goc_do_max: 337.5, icon: "circle-yellow", linhvuc: ["tai_loc"], doi_tuong: ["gia_dinh"], text: "Thế bình hòa tiểu hạn.", giaiphap: "Giữ cân bằng." }
    },

    "Tốn": {
        "Nhâm": { loai: "Cát", diem: 89, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Mộc", goc_do_min: 337.5, goc_do_max: 352.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Sinh Khí vượng cung, tài lộc dồi dào, thăng quan tiến chức.", giaiphap: "Đặt cây xanh lớn." },
        "Tý": { loai: "Cát", diem: 91, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Thủy", goc_do_min: 352.5, goc_do_max: 7.5, icon: "star-green", linhvuc: ["tai_loc", "nhan_dinh"], doi_tuong: ["gia_dinh"], text: "Sinh Khí đắc vị, điền sản tăng tiến.", giaiphap: "Đặt Tháp Văn Xương." },
        "Quý": { loai: "Hung", diem: 34, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Thủy", goc_do_min: 7.5, goc_do_max: 22.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Họa Hại phương, khẩu thiệt thị phi.", giaiphap: "Đặt thạch anh đen." },
        "Sửu": { loai: "Hung", diem: 28, cap_do: "Đại Hung", nhom: "Ngũ Quỷ", hanh: "Thổ", goc_do_min: 22.5, goc_do_max: 37.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Ngũ Quỷ đại sát, gia đình ly tán.", giaiphap: "Treo gương Bát Quái." },
        "Cấn": { loai: "Hung", diem: 26, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Thổ", goc_do_min: 37.5, goc_do_max: 52.5, icon: "alert-red", linhvuc: ["nhan_dinh"], doi_tuong: ["nam_chu"], text: "Phạm Tuyệt Mệnh sát phương, tổn hại nam chủ.", giaiphap: "Treo gương và chuông gió." },
        "Dần": { loai: "Hung", diem: 27, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Mộc", goc_do_min: 52.5, goc_do_max: 67.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Tuyệt Mệnh sát khí, hao tài tốn của.", giaiphap: "Treo gương Bát Quái." },
        "Giáp": { loai: "Cát", diem: 83, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Mộc", goc_do_min: 67.5, goc_do_max: 82.5, icon: "star-green", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Diên Niên đắc vị, phú quý thọ khang.", giaiphap: "Đặt đôi Uyên Ương." },
        "Mão": { loai: "Cát", diem: 82, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Mộc", goc_do_min: 82.5, goc_do_max: 97.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Diên Niên chính vị, ngoại giao thuận lợi.", giaiphap: "Treo tranh phong thủy." },
        "Ất": { loai: "Cát", diem: 92, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Mộc", goc_do_min: 97.5, goc_do_max: 112.5, icon: "star-green", linhvuc: ["tai_loc", "nhan_dinh"], doi_tuong: ["gia_dinh"], text: "Sinh Khí vượng khí, phát phúc nhanh chóng.", giaiphap: "Đặt cây xanh lớn." },
        "Thìn": { loai: "Cát", diem: 81, cap_do: "Tiểu Cát", nhom: "Phục Vị", hanh: "Thổ", goc_do_min: 112.5, goc_do_max: 127.5, icon: "star-green", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phục Vị đắc cách, gia đạo an ninh.", giaiphap: "Giữ ổn định." },
        "Tốn": { loai: "Cát", diem: 84, cap_do: "Tiểu Cát", nhom: "Phục Vị", hanh: "Mộc", goc_do_min: 127.5, goc_do_max: 142.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phục Vị bản cung, giữ vững cơ nghiệp.", giaiphap: "Kích hoạt bằng vật phẩm Mộc." },
        "Tỵ": { loai: "Cát", diem: 88, cap_do: "Đại Cát", nhom: "Thiên Y", hanh: "Hỏa", goc_do_min: 142.5, goc_do_max: 157.5, icon: "star-green", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Thiên Y đắc vị, sức khỏe dồi dào.", giaiphap: "Đặt hồ lô đồng." },
        "Bính": { loai: "Hung", diem: 33, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Hỏa", goc_do_min: 157.5, goc_do_max: 172.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Họa Hại sát, của cải hao hụt.", giaiphap: "Đặt thạch anh đen." },
        "Ngọ": { loai: "Hung", diem: 32, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Hỏa", goc_do_min: 172.5, goc_do_max: 187.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Lục Sát phương vị, tình cảm rạn nứt.", giaiphap: "Đặt bình nước." },
        "Đinh": { loai: "Hung", diem: 30, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Hỏa", goc_do_min: 187.5, goc_do_max: 202.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Lục Sát chi khí, nhân đinh ly tán.", giaiphap: "Treo rèm tối." },
        "Mùi": { loai: "Hung", diem: 29, cap_do: "Tiểu Hung", nhom: "Ngũ Quỷ", hanh: "Thổ", goc_do_min: 202.5, goc_do_max: 217.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Ngũ Quỷ sát vị, trộm cắp quấy nhiễu.", giaiphap: "Treo chuông gió." },
        "Khôn": { loai: "Hung", diem: 28, cap_do: "Tiểu Hung", nhom: "Ngũ Quỷ", hanh: "Thổ", goc_do_min: 217.5, goc_do_max: 232.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Ngũ Quỷ phương, đề phòng tai bay vạ gió.", giaiphap: "Treo gương Bát Quái." },
        "Thân": { loai: "Hung", diem: 31, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Kim", goc_do_min: 232.5, goc_do_max: 247.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Lục Sát sát khí, kiện tụng kéo dài.", giaiphap: "Đặt rèm tối." },
        "Canh": { loai: "Hung", diem: 24, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Kim", goc_do_min: 247.5, goc_do_max: 262.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["nam_chu"], text: "Phạm Tuyệt Mệnh phương vị, tai nạn bất ngờ.", giaiphap: "Treo gương." },
        "Dậu": { loai: "Hung", diem: 23, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Kim", goc_do_min: 262.5, goc_do_max: 277.5, icon: "alert-red", linhvuc: ["nhan_dinh"], doi_tuong: ["gia_dinh"], text: "Phạm Tuyệt Mệnh hung phương, cực kỳ nguy hiểm.", giaiphap: "Treo gương và Tỳ Hưu." },
        "Tân": { loai: "Hung", diem: 34, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Kim", goc_do_min: 277.5, goc_do_max: 292.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Họa Hại phương vị, tổn hao tiền của.", giaiphap: "Đặt thạch anh trắng." },
        "Tuất": { loai: "Cát", diem: 86, cap_do: "Đại Cát", nhom: "Thiên Y", hanh: "Thổ", goc_do_min: 292.5, goc_do_max: 307.5, icon: "star-green", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Thiên Y đắc vị, quý nhân trợ lực.", giaiphap: "Đặt hồ lô đồng." },
        "Càn": { loai: "Cát", diem: 87, cap_do: "Đại Cát", nhom: "Thiên Y", hanh: "Kim", goc_do_min: 307.5, goc_do_max: 322.5, icon: "star-green", linhvuc: ["suc_khoe"], doi_tuong: ["nam_chu"], text: "Thiên Y chính vị, sức khỏe dồi dào.", giaiphap: "Đặt thạch anh vàng." },
        "Hợi": { loai: "Bình", diem: 55, cap_do: "Bình Hòa", nhom: "Bình", hanh: "Thủy", goc_do_min: 322.5, goc_do_max: 337.5, icon: "circle-yellow", linhvuc: ["tai_loc"], doi_tuong: ["gia_dinh"], text: "Thế bình hòa, vận trình ổn định.", giaiphap: "Giữ cân bằng." }
    },

    "Càn": {
        "Nhâm": { loai: "Hung", diem: 32, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Thủy", goc_do_min: 337.5, goc_do_max: 352.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Lục Sát phương vị, tình duyên trục trặc.", giaiphap: "Đặt rèm tối màu." },
        "Tý": { loai: "Hung", diem: 30, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Thủy", goc_do_min: 352.5, goc_do_max: 7.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Lục Sát chi khí, dâm loạn tà ác.", giaiphap: "Đặt bình nước muối." },
        "Quý": { loai: "Hung", diem: 31, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Thủy", goc_do_min: 7.5, goc_do_max: 22.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Lục Sát sát vị, gia đạo bất an.", giaiphap: "Treo chuông gió." },
        "Sửu": { loai: "Hung", diem: 35, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Thổ", goc_do_min: 22.5, goc_do_max: 37.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Họa Hại phương, khẩu thiệt thị phi.", giaiphap: "Đặt thạch anh đen." },
        "Cấn": { loai: "Cát", diem: 88, cap_do: "Đại Cát", nhom: "Thiên Y", hanh: "Thổ", goc_do_min: 37.5, goc_do_max: 52.5, icon: "star-green", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Thiên Y đắc vị, sức khỏe dồi dào.", giaiphap: "Đặt hồ lô đồng." },
        "Dần": { loai: "Cát", diem: 86, cap_do: "Đại Cát", nhom: "Thiên Y", hanh: "Mộc", goc_do_min: 52.5, goc_do_max: 67.5, icon: "star-green", linhvuc: ["suc_khoe", "tai_loc"], doi_tuong: ["nam_chu"], text: "Thiên Y chính vị, quý nhân nâng đỡ.", giaiphap: "Đặt thạch anh vàng." },
        "Giáp": { loai: "Hung", diem: 27, cap_do: "Đại Hung", nhom: "Ngũ Quỷ", hanh: "Mộc", goc_do_min: 67.5, goc_do_max: 82.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Ngũ Quỷ đại sát, gia đình ly tán.", giaiphap: "Treo gương Bát Quái." },
        "Mão": { loai: "Hung", diem: 29, cap_do: "Tiểu Hung", nhom: "Ngũ Quỷ", hanh: "Mộc", goc_do_min: 82.5, goc_do_max: 97.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Ngũ Quỷ phương, trộm cắp quấy phá.", giaiphap: "Đặt Tỳ Hưu." },
        "Ất": { loai: "Hung", diem: 28, cap_do: "Tiểu Hung", nhom: "Ngũ Quỷ", hanh: "Mộc", goc_do_min: 97.5, goc_do_max: 112.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Phạm Ngũ Quỷ sát vị, tiểu nhân quấy nhiễu.", giaiphap: "Treo chuông gió." },
        "Thìn": { loai: "Hung", diem: 22, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Thổ", goc_do_min: 112.5, goc_do_max: 127.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["nam_chu"], text: "Phạm Tuyệt Mệnh hung phương, cực kỳ nguy hiểm.", giaiphap: "Treo gương Bát Quái." },
        "Tốn": { loai: "Hung", diem: 24, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Mộc", goc_do_min: 127.5, goc_do_max: 142.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Phạm Tuyệt Mệnh sát phương, sức khỏe suy kiệt.", giaiphap: "Treo gương." },
        "Tỵ": { loai: "Hung", diem: 23, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Hỏa", goc_do_min: 142.5, goc_do_max: 157.5, icon: "alert-red", linhvuc: ["nhan_dinh"], doi_tuong: ["gia_dinh"], text: "Phạm Tuyệt Mệnh phương vị, tai nạn huyết quang.", giaiphap: "Treo gương và Tỳ Hưu." },
        "Bính": { loai: "Bình", diem: 60, cap_do: "Bình Hòa", nhom: "Bình", hanh: "Hỏa", goc_do_min: 157.5, goc_do_max: 172.5, icon: "circle-yellow", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Thế bình hòa tiểu hạn.", giaiphap: "Giữ cân bằng." },
        "Ngọ": { loai: "Bình", diem: 58, cap_do: "Bình Hòa", nhom: "Bình", hanh: "Hỏa", goc_do_min: 172.5, goc_do_max: 187.5, icon: "circle-yellow", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phương vị bình hòa, vận trình trung bình.", giaiphap: "Giữ ổn định." },
        "Đinh": { loai: "Cát", diem: 91, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Hỏa", goc_do_min: 187.5, goc_do_max: 202.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Sinh Khí vượng cung, đại phát tài lộc.", giaiphap: "Đặt cây xanh." },
        "Mùi": { loai: "Cát", diem: 93, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Thổ", goc_do_min: 202.5, goc_do_max: 217.5, icon: "star-green", linhvuc: ["nhan_dinh"], doi_tuong: ["gia_dinh"], text: "Sinh Khí tối thượng, nhân đinh hưng vượng.", giaiphap: "Đặt Tháp Văn Xương." },
        "Khôn": { loai: "Cát", diem: 85, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Thổ", goc_do_min: 217.5, goc_do_max: 232.5, icon: "star-green", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Diên Niên vượng khí, gia đình hạnh phúc.", giaiphap: "Đặt đôi Uyên Ương." },
        "Thân": { loai: "Cát", diem: 84, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Kim", goc_do_min: 232.5, goc_do_max: 247.5, icon: "star-green", linhvuc: ["cong_danh"], doi_tuong: ["nam_chu"], text: "Diên Niên đắc vị, ngoại giao hanh thông.", giaiphap: "Treo tranh." },
        "Canh": { loai: "Cát", diem: 80, cap_do: "Tiểu Cát", nhom: "Phục Vị", hanh: "Kim", goc_do_min: 247.5, goc_do_max: 262.5, icon: "star-green", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phục Vị đắc cách, gia đạo an ninh.", giaiphap: "Giữ ổn định." },
        "Dậu": { loai: "Cát", diem: 81, cap_do: "Tiểu Cát", nhom: "Phục Vị", hanh: "Kim", goc_do_min: 262.5, goc_do_max: 277.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phục Vị bản cung, giữ vững cơ nghiệp.", giaiphap: "Kích hoạt bằng Kim." },
        "Tân": { loai: "Cát", diem: 79, cap_do: "Tiểu Cát", nhom: "Phục Vị", hanh: "Kim", goc_do_min: 277.5, goc_do_max: 292.5, icon: "star-green", linhvuc: ["cong_danh"], doi_tuong: ["nam_chu"], text: "Phục Vị vượng vị, công việc vững vàng.", giaiphap: "Đặt vật phẩm Kim." },
        "Tuất": { loai: "Hung", diem: 36, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Thổ", goc_do_min: 292.5, goc_do_max: 307.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Phạm Họa Hại chi khí, người nhà đau ốm.", giaiphap: "Đặt thạch anh đen." },
        "Càn": { loai: "Hung", diem: 33, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Kim", goc_do_min: 307.5, goc_do_max: 322.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Họa Hại sát, của cải hao hụt.", giaiphap: "Treo chuông gió." },
        "Hợi": { loai: "Hung", diem: 34, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Thủy", goc_do_min: 322.5, goc_do_max: 337.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Họa Hại phương vị, tổn hao tiền của.", giaiphap: "Đặt thạch anh trắng." }
    },

    "Đoài": {
        "Nhâm": { loai: "Hung", diem: 34, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Thủy", goc_do_min: 337.5, goc_do_max: 352.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Họa Hại phương, khẩu thiệt thị phi.", giaiphap: "Đặt thạch anh đen." },
        "Tý": { loai: "Hung", diem: 33, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Thủy", goc_do_min: 352.5, goc_do_max: 7.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Phạm Họa Hại chi khí, người nhà đau ốm.", giaiphap: "Đặt bình gốm." },
        "Quý": { loai: "Hung", diem: 32, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Thủy", goc_do_min: 7.5, goc_do_max: 22.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Họa Hại sát, của cải hao hụt.", giaiphap: "Treo chuông gió." },
        "Sửu": { loai: "Cát", diem: 83, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Thổ", goc_do_min: 22.5, goc_do_max: 37.5, icon: "star-green", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Diên Niên đắc vị, phú quý thọ khang.", giaiphap: "Đặt đôi Uyên Ương." },
        "Cấn": { loai: "Cát", diem: 82, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Thổ", goc_do_min: 37.5, goc_do_max: 52.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Diên Niên chính vị, ngoại giao thuận lợi.", giaiphap: "Treo tranh." },
        "Dần": { loai: "Cát", diem: 84, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Mộc", goc_do_min: 52.5, goc_do_max: 67.5, icon: "star-green", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Diên Niên vượng khí, gia đình hòa hợp.", giaiphap: "Đặt thảm trắng." },
        "Giáp": { loai: "Hung", diem: 23, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Mộc", goc_do_min: 67.5, goc_do_max: 82.5, icon: "alert-red", linhvuc: ["nhan_dinh"], doi_tuong: ["gia_dinh"], text: "Phạm Tuyệt Mệnh hung phương, cực kỳ nguy hiểm.", giaiphap: "Treo gương Bát Quái." },
        "Mão": { loai: "Hung", diem: 25, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Mộc", goc_do_min: 82.5, goc_do_max: 97.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["nam_chu"], text: "Phạm Tuyệt Mệnh sát phương, sức khỏe suy kiệt.", giaiphap: "Treo gương." },
        "Ất": { loai: "Hung", diem: 24, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Mộc", goc_do_min: 97.5, goc_do_max: 112.5, icon: "alert-red", linhvuc: ["nhan_dinh"], doi_tuong: ["gia_dinh"], text: "Phạm Tuyệt Mệnh phương vị, tai nạn huyết quang.", giaiphap: "Treo gương và Tỳ Hưu." },
        "Thìn": { loai: "Hung", diem: 31, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Thổ", goc_do_min: 112.5, goc_do_max: 127.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Lục Sát phương vị, tình duyên trục trặc.", giaiphap: "Đặt rèm tối." },
        "Tốn": { loai: "Hung", diem: 30, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Mộc", goc_do_min: 127.5, goc_do_max: 142.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Lục Sát chi khí, dâm loạn tà ác.", giaiphap: "Đặt bình nước." },
        "Tỵ": { loai: "Hung", diem: 29, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Hỏa", goc_do_min: 142.5, goc_do_max: 157.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Lục Sát sát vị, gia đạo bất an.", giaiphap: "Treo chuông gió." },
        "Bính": { loai: "Cát", diem: 80, cap_do: "Tiểu Cát", nhom: "Phục Vị", hanh: "Hỏa", goc_do_min: 157.5, goc_do_max: 172.5, icon: "star-green", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phục Vị đắc cách, gia đạo an ninh.", giaiphap: "Giữ ổn định." },
        "Ngọ": { loai: "Cát", diem: 81, cap_do: "Tiểu Cát", nhom: "Phục Vị", hanh: "Hỏa", goc_do_min: 172.5, goc_do_max: 187.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phục Vị bản cung, giữ vững cơ nghiệp.", giaiphap: "Kích hoạt bằng Hỏa." },
        "Đinh": { loai: "Cát", diem: 79, cap_do: "Tiểu Cát", nhom: "Phục Vị", hanh: "Hỏa", goc_do_min: 187.5, goc_do_max: 202.5, icon: "star-green", linhvuc: ["cong_danh"], doi_tuong: ["nam_chu"], text: "Phục Vị vượng vị, công việc vững vàng.", giaiphap: "Đặt vật phẩm Kim." },
        "Mùi": { loai: "Hung", diem: 28, cap_do: "Đại Hung", nhom: "Ngũ Quỷ", hanh: "Thổ", goc_do_min: 202.5, goc_do_max: 217.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Ngũ Quỷ đại sát, gia đình ly tán.", giaiphap: "Treo gương Bát Quái." },
        "Khôn": { loai: "Hung", diem: 29, cap_do: "Tiểu Hung", nhom: "Ngũ Quỷ", hanh: "Thổ", goc_do_min: 217.5, goc_do_max: 232.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Ngũ Quỷ phương, trộm cắp quấy phá.", giaiphap: "Đặt Tỳ Hưu." },
        "Thân": { loai: "Hung", diem: 30, cap_do: "Tiểu Hung", nhom: "Ngũ Quỷ", hanh: "Kim", goc_do_min: 232.5, goc_do_max: 247.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Phạm Ngũ Quỷ sát vị, tiểu nhân quấy nhiễu.", giaiphap: "Treo chuông gió." },
        "Canh": { loai: "Cát", diem: 90, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Kim", goc_do_min: 247.5, goc_do_max: 262.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Sinh Khí vượng cung, đại phát tài lộc.", giaiphap: "Đặt cây xanh." },
        "Dậu": { loai: "Cát", diem: 94, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Kim", goc_do_min: 262.5, goc_do_max: 277.5, icon: "star-green", linhvuc: ["nhan_dinh"], doi_tuong: ["gia_dinh"], text: "Sinh Khí tối thượng, nhân đinh hưng vượng.", giaiphap: "Đặt Tháp Văn Xương." },
        "Tân": { loai: "Cát", diem: 89, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Kim", goc_do_min: 277.5, goc_do_max: 292.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Sinh Khí đắc vị, điền sản tăng tiến.", giaiphap: "Đặt cây xanh." },
        "Tuất": { loai: "Cát", diem: 87, cap_do: "Đại Cát", nhom: "Thiên Y", hanh: "Thổ", goc_do_min: 292.5, goc_do_max: 307.5, icon: "star-green", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Thiên Y đắc vị, sức khỏe dồi dào.", giaiphap: "Đặt hồ lô đồng." },
        "Càn": { loai: "Cát", diem: 86, cap_do: "Đại Cát", nhom: "Thiên Y", hanh: "Kim", goc_do_min: 307.5, goc_do_max: 322.5, icon: "star-green", linhvuc: ["suc_khoe"], doi_tuong: ["nam_chu"], text: "Thiên Y chính vị, tai qua nạn khỏi.", giaiphap: "Đặt thạch anh vàng." },
        "Hợi": { loai: "Bình", diem: 57, cap_do: "Bình Hòa", nhom: "Bình", hanh: "Thủy", goc_do_min: 322.5, goc_do_max: 337.5, icon: "circle-yellow", linhvuc: ["tai_loc"], doi_tuong: ["gia_dinh"], text: "Thế bình hòa, vận trình tương đối ổn định.", giaiphap: "Giữ cân bằng." }
    },

    "Cấn": {
        "Nhâm": { loai: "Hung", diem: 28, cap_do: "Đại Hung", nhom: "Ngũ Quỷ", hanh: "Thủy", goc_do_min: 337.5, goc_do_max: 352.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Ngũ Quỷ đại sát, gia đình ly tán.", giaiphap: "Treo gương Bát Quái." },
        "Tý": { loai: "Hung", diem: 29, cap_do: "Tiểu Hung", nhom: "Ngũ Quỷ", hanh: "Thủy", goc_do_min: 352.5, goc_do_max: 7.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Ngũ Quỷ phương, trộm cắp quấy phá.", giaiphap: "Đặt Tỳ Hưu." },
        "Quý": { loai: "Hung", diem: 30, cap_do: "Tiểu Hung", nhom: "Ngũ Quỷ", hanh: "Thủy", goc_do_min: 7.5, goc_do_max: 22.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Phạm Ngũ Quỷ sát vị, tiểu nhân quấy nhiễu.", giaiphap: "Treo chuông gió." },
        "Sửu": { loai: "Cát", diem: 80, cap_do: "Tiểu Cát", nhom: "Phục Vị", hanh: "Thổ", goc_do_min: 22.5, goc_do_max: 37.5, icon: "star-green", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phục Vị đắc cách, gia đạo an ninh.", giaiphap: "Giữ ổn định." },
        "Cấn": { loai: "Cát", diem: 82, cap_do: "Tiểu Cát", nhom: "Phục Vị", hanh: "Thổ", goc_do_min: 37.5, goc_do_max: 52.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phục Vị bản cung, giữ vững cơ nghiệp.", giaiphap: "Kích hoạt bằng Thổ." },
        "Dần": { loai: "Cát", diem: 81, cap_do: "Tiểu Cát", nhom: "Phục Vị", hanh: "Mộc", goc_do_min: 52.5, goc_do_max: 67.5, icon: "star-green", linhvuc: ["cong_danh"], doi_tuong: ["nam_chu"], text: "Phục Vị vượng vị, công việc vững vàng.", giaiphap: "Đặt vật phẩm Kim." },
        "Giáp": { loai: "Hung", diem: 32, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Mộc", goc_do_min: 67.5, goc_do_max: 82.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Lục Sát phương vị, tình duyên trục trặc.", giaiphap: "Đặt rèm tối." },
        "Mão": { loai: "Hung", diem: 31, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Mộc", goc_do_min: 82.5, goc_do_max: 97.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Lục Sát chi khí, dâm loạn tà ác.", giaiphap: "Đặt bình nước." },
        "Ất": { loai: "Hung", diem: 30, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Mộc", goc_do_min: 97.5, goc_do_max: 112.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Lục Sát sát vị, gia đạo bất an.", giaiphap: "Treo chuông gió." },
        "Thìn": { loai: "Hung", diem: 35, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Thổ", goc_do_min: 112.5, goc_do_max: 127.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Họa Hại phương, khẩu thiệt thị phi.", giaiphap: "Đặt thạch anh đen." },
        "Tốn": { loai: "Hung", diem: 33, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Mộc", goc_do_min: 127.5, goc_do_max: 142.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Phạm Họa Hại chi khí, người nhà đau ốm.", giaiphap: "Đặt bình gốm." },
        "Tỵ": { loai: "Hung", diem: 32, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Hỏa", goc_do_min: 142.5, goc_do_max: 157.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Họa Hại sát, của cải hao hụt.", giaiphap: "Treo chuông gió." },
        "Bính": { loai: "Hung", diem: 22, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Hỏa", goc_do_min: 157.5, goc_do_max: 172.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["nam_chu"], text: "Phạm Tuyệt Mệnh hung phương, cực kỳ nguy hiểm.", giaiphap: "Treo gương Bát Quái." },
        "Ngọ": { loai: "Hung", diem: 24, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Hỏa", goc_do_min: 172.5, goc_do_max: 187.5, icon: "alert-red", linhvuc: ["nhan_dinh"], doi_tuong: ["gia_dinh"], text: "Phạm Tuyệt Mệnh sát phương, sức khỏe suy kiệt.", giaiphap: "Treo gương." },
        "Đinh": { loai: "Hung", diem: 23, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Hỏa", goc_do_min: 187.5, goc_do_max: 202.5, icon: "alert-red", linhvuc: ["nhan_dinh"], doi_tuong: ["gia_dinh"], text: "Phạm Tuyệt Mệnh phương vị, tai nạn huyết quang.", giaiphap: "Treo gương và Tỳ Hưu." },
        "Mùi": { loai: "Cát", diem: 84, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Thổ", goc_do_min: 202.5, goc_do_max: 217.5, icon: "star-green", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Diên Niên đắc vị, phú quý thọ khang.", giaiphap: "Đặt đôi Uyên Ương." },
        "Khôn": { loai: "Cát", diem: 83, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Thổ", goc_do_min: 217.5, goc_do_max: 232.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Diên Niên chính vị, ngoại giao thuận lợi.", giaiphap: "Treo tranh." },
        "Thân": { loai: "Cát", diem: 85, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Kim", goc_do_min: 232.5, goc_do_max: 247.5, icon: "star-green", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Diên Niên vượng khí, gia đình hòa hợp.", giaiphap: "Đặt thảm trắng." },
        "Canh": { loai: "Cát", diem: 91, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Kim", goc_do_min: 247.5, goc_do_max: 262.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Sinh Khí vượng cung, đại phát tài lộc.", giaiphap: "Đặt cây xanh." },
        "Dậu": { loai: "Cát", diem: 94, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Kim", goc_do_min: 262.5, goc_do_max: 277.5, icon: "star-green", linhvuc: ["nhan_dinh"], doi_tuong: ["gia_dinh"], text: "Sinh Khí tối thượng, nhân đinh hưng vượng.", giaiphap: "Đặt Tháp Văn Xương." },
        "Tân": { loai: "Cát", diem: 90, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Kim", goc_do_min: 277.5, goc_do_max: 292.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Sinh Khí đắc vị, điền sản tăng tiến.", giaiphap: "Đặt cây xanh." },
        "Tuất": { loai: "Hung", diem: 35, cap_do: "Tiểu Hung", nhom: "Cô Quả", hanh: "Thổ", goc_do_min: 292.5, goc_do_max: 307.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Cô Quả, Tố Tụng, nội bộ hay tranh chấp.", giaiphap: "Đặt bình gốm." },
        "Càn": { loai: "Cát", diem: 89, cap_do: "Đại Cát", nhom: "Thiên Y", hanh: "Kim", goc_do_min: 307.5, goc_do_max: 322.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Đạt vị Thiên Y đại cát, quý nhân phò trợ.", giaiphap: "Đặt thạch anh vàng." },
        "Hợi": { loai: "Bình", diem: 55, cap_do: "Bình Hòa", nhom: "Bình", hanh: "Thủy", goc_do_min: 322.5, goc_do_max: 337.5, icon: "circle-yellow", linhvuc: ["tai_loc"], doi_tuong: ["gia_dinh"], text: "Thế bình hòa tiểu hạn, hao tổn nhẹ về tài lộc.", giaiphap: "Giữ cân bằng." }
    },

    "Ly": {
        "Nhâm": { loai: "Hung", diem: 28, cap_do: "Đại Hung", nhom: "Ngũ Quỷ", hanh: "Thủy", goc_do_min: 337.5, goc_do_max: 352.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Ngũ Quỷ đại sát, gia đình ly tán.", giaiphap: "Treo gương Bát Quái." },
        "Tý": { loai: "Hung", diem: 29, cap_do: "Tiểu Hung", nhom: "Ngũ Quỷ", hanh: "Thủy", goc_do_min: 352.5, goc_do_max: 7.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Ngũ Quỷ phương, trộm cắp quấy phá.", giaiphap: "Đặt Tỳ Hưu." },
        "Quý": { loai: "Hung", diem: 30, cap_do: "Tiểu Hung", nhom: "Ngũ Quỷ", hanh: "Thủy", goc_do_min: 7.5, goc_do_max: 22.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Phạm Ngũ Quỷ sát vị, tiểu nhân quấy nhiễu.", giaiphap: "Treo chuông gió." },
        "Sửu": { loai: "Hung", diem: 35, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Thổ", goc_do_min: 22.5, goc_do_max: 37.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Họa Hại phương, khẩu thiệt thị phi.", giaiphap: "Đặt thạch anh đen." },
        "Cấn": { loai: "Hung", diem: 33, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Thổ", goc_do_min: 37.5, goc_do_max: 52.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Phạm Họa Hại chi khí, người nhà đau ốm.", giaiphap: "Đặt bình gốm." },
        "Dần": { loai: "Hung", diem: 32, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Mộc", goc_do_min: 52.5, goc_do_max: 67.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Họa Hại sát, của cải hao hụt.", giaiphap: "Treo chuông gió." },
        "Giáp": { loai: "Cát", diem: 91, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Mộc", goc_do_min: 67.5, goc_do_max: 82.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Sinh Khí vượng cung, đại phát tài lộc.", giaiphap: "Đặt cây xanh." },
        "Mão": { loai: "Cát", diem: 94, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Mộc", goc_do_min: 82.5, goc_do_max: 97.5, icon: "star-green", linhvuc: ["nhan_dinh"], doi_tuong: ["gia_dinh"], text: "Sinh Khí tối thượng, nhân đinh hưng vượng.", giaiphap: "Đặt Tháp Văn Xương." },
        "Ất": { loai: "Cát", diem: 90, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Mộc", goc_do_min: 97.5, goc_do_max: 112.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Sinh Khí đắc vị, điền sản tăng tiến.", giaiphap: "Đặt cây xanh." },
        "Thìn": { loai: "Cát", diem: 87, cap_do: "Đại Cát", nhom: "Thiên Y", hanh: "Thổ", goc_do_min: 112.5, goc_do_max: 127.5, icon: "star-green", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Thiên Y đắc vị, sức khỏe dồi dào.", giaiphap: "Đặt hồ lô đồng." },
        "Tốn": { loai: "Cát", diem: 86, cap_do: "Đại Cát", nhom: "Thiên Y", hanh: "Mộc", goc_do_min: 127.5, goc_do_max: 142.5, icon: "star-green", linhvuc: ["suc_khoe"], doi_tuong: ["nam_chu"], text: "Thiên Y chính vị, quý nhân nâng đỡ.", giaiphap: "Đặt thạch anh vàng." },
        "Tỵ": { loai: "Cát", diem: 88, cap_do: "Đại Cát", nhom: "Thiên Y", hanh: "Hỏa", goc_do_min: 142.5, goc_do_max: 157.5, icon: "star-green", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Thiên Y vượng vị, bệnh tật thuyên giảm.", giaiphap: "Đặt hồ lô đồng." },
        "Bính": { loai: "Cát", diem: 80, cap_do: "Tiểu Cát", nhom: "Phục Vị", hanh: "Hỏa", goc_do_min: 157.5, goc_do_max: 172.5, icon: "star-green", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phục Vị đắc cách, gia đạo an ninh.", giaiphap: "Giữ ổn định." },
        "Ngọ": { loai: "Cát", diem: 81, cap_do: "Tiểu Cát", nhom: "Phục Vị", hanh: "Hỏa", goc_do_min: 172.5, goc_do_max: 187.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phục Vị bản cung, giữ vững cơ nghiệp.", giaiphap: "Kích hoạt bằng Hỏa." },
        "Đinh": { loai: "Cát", diem: 79, cap_do: "Tiểu Cát", nhom: "Phục Vị", hanh: "Hỏa", goc_do_min: 187.5, goc_do_max: 202.5, icon: "star-green", linhvuc: ["cong_danh"], doi_tuong: ["nam_chu"], text: "Phục Vị vượng vị, công việc vững vàng.", giaiphap: "Đặt vật phẩm Kim." },
        "Mùi": { loai: "Hung", diem: 32, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Thổ", goc_do_min: 202.5, goc_do_max: 217.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Lục Sát phương vị, tình duyên trục trặc.", giaiphap: "Đặt rèm tối." },
        "Khôn": { loai: "Hung", diem: 31, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Thổ", goc_do_min: 217.5, goc_do_max: 232.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Lục Sát chi khí, dâm loạn tà ác.", giaiphap: "Đặt bình nước." },
        "Thân": { loai: "Hung", diem: 30, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Kim", goc_do_min: 232.5, goc_do_max: 247.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Lục Sát sát vị, gia đạo bất an.", giaiphap: "Treo chuông gió." },
        "Canh": { loai: "Hung", diem: 22, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Kim", goc_do_min: 247.5, goc_do_max: 262.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["nam_chu"], text: "Phạm Tuyệt Mệnh hung phương, cực kỳ nguy hiểm.", giaiphap: "Treo gương Bát Quái." },
        "Dậu": { loai: "Hung", diem: 24, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Kim", goc_do_min: 262.5, goc_do_max: 277.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Phạm Tuyệt Mệnh sát phương, sức khỏe suy kiệt.", giaiphap: "Treo gương." },
        "Tân": { loai: "Hung", diem: 23, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Kim", goc_do_min: 277.5, goc_do_max: 292.5, icon: "alert-red", linhvuc: ["nhan_dinh"], doi_tuong: ["gia_dinh"], text: "Phạm Tuyệt Mệnh phương vị, tai nạn huyết quang.", giaiphap: "Treo gương và Tỳ Hưu." },
        "Tuất": { loai: "Cát", diem: 84, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Thổ", goc_do_min: 292.5, goc_do_max: 307.5, icon: "star-green", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Diên Niên đắc vị, phú quý thọ khang.", giaiphap: "Đặt đôi Uyên Ương." },
        "Càn": { loai: "Cát", diem: 83, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Kim", goc_do_min: 307.5, goc_do_max: 322.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Diên Niên chính vị, ngoại giao thuận lợi.", giaiphap: "Treo tranh." },
        "Hợi": { loai: "Bình", diem: 56, cap_do: "Bình Hòa", nhom: "Bình", hanh: "Thủy", goc_do_min: 322.5, goc_do_max: 337.5, icon: "circle-yellow", linhvuc: ["tai_loc"], doi_tuong: ["gia_dinh"], text: "Thế bình hòa, vận thế gia đạo trung bình.", giaiphap: "Giữ cân bằng." }
    }
};

// ====================== NGŨ HOÀNG & CỬU TINH (Đã sửa lỗi vắng mặt Sao Cửu Tử) ======================
function getNguHoangInfo(year) {
    const nguHoang = {
        1: "Nhất Bạch tại Trung Cung (Đại Cát)",
        2: "Nhị Hắc tại Trung Cung (Hung - Bệnh tật)",
        3: "Tam Bích tại Trung Cung (Trung bình)",
        4: "Tứ Lục tại Trung Cung (Hung nhẹ)",
        5: "Ngũ Hoàng tại Trung Cung (Đại Hung - Tránh động thổ lớn)",
        6: "Lục Bạch tại Trung Cung (Cát - Quyền lộc)",
        7: "Thất Xích tại Trung Cung (Hung - Thị phi)",
        8: "Bát Bạch tại Trung Cung (Cát)",
        9: "Cửu Tử tại Trung Cung (Đại Cát - Vượng khí)"
    };
    
    let so = year % 9;
    if (so === 0) so = 9; // Nếu chia hết cho 9 (dư 0) thì quy về Sao số 9 (Cửu Tử)
    
    return nguHoang[so] || nguHoang[5];
}

// ====================== GLOBAL ELEMENTS ======================
const compass = document.getElementById('compass');
const needle = document.getElementById('needle');
const ghostNeedle = document.getElementById('ghostNeedle');
const degreeTxt = document.getElementById('degree-txt');
const elementBox = document.getElementById('element-box');
const fateTxt = document.getElementById('fate-txt');
const judgmentBox = document.getElementById('judgment-box');
const detailBox = document.getElementById('detail-box');
const compassSlider = document.getElementById('compassSlider');
const permBtn = document.getElementById('permission-btn');
const directionsContainer = document.getElementById('directions-container');
const listPanelTitle = document.getElementById('list-panel-title');
const sonRing = document.getElementById('sonRing');
const savedContainer = document.getElementById('savedContainer');
const savedPanel = document.getElementById('savedPanel');

// ====================== 24 SƠN (Giữ nguyên thứ tự gốc - Rất quan trọng) ======================
const son24Data = [{
    name: "Tý", start: 352.5, end: 7.5
}, {
    name: "Quý", start: 7.5, end: 22.5
}, {
    name: "Sửu", start: 22.5, end: 37.5
}, {
    name: "Cấn", start: 37.5, end: 52.5
}, {
    name: "Dần", start: 52.5, end: 67.5
}, {
    name: "Giáp", start: 67.5, end: 82.5
}, {
    name: "Mão", start: 82.5, end: 97.5
}, {
    name: "Ất", start: 97.5, end: 112.5
}, {
    name: "Thìn", start: 112.5, end: 127.5
}, {
    name: "Tốn", start: 127.5, end: 142.5
}, {
    name: "Tỵ", start: 142.5, end: 157.5
}, {
    name: "Bính", start: 157.5, end: 172.5
}, {
    name: "Ngọ", start: 172.5, end: 187.5
}, {
    name: "Đinh", start: 187.5, end: 202.5
}, {
    name: "Mùi", start: 202.5, end: 217.5
}, {
    name: "Khôn", start: 217.5, end: 232.5
}, {
    name: "Thân", start: 232.5, end: 247.5
}, {
    name: "Canh", start: 247.5, end: 262.5
}, {
    name: "Dậu", start: 262.5, end: 277.5
}, {
    name: "Tân", start: 277.5, end: 292.5
}, {
    name: "Tuất", start: 292.5, end: 307.5
}, {
    name: "Càn", start: 307.5, end: 322.5
}, {
    name: "Hợi", start: 322.5, end: 337.5
}, {
    name: "Nhâm", start: 337.5, end: 352.5
}];

// ====================== BÁT TRẠCH MAP ======================
const bátTrạchMap = {
    'Khảm': {
      'N': 'Phục Vị', 'NE': 'Ngũ Quỷ', 'E': 'Thiên Y', 'SE': 'Sinh Khí',
      'S': 'Diên Niên', 'SW': 'Tuyệt Mệnh', 'W': 'Họa Hại', 'NW': 'Lục Sát',
      'group': 'Đông Tứ Mệnh', 'element': 'Thủy'
    },
    'Ly': {
      'N': 'Diên Niên', 'NE': 'Họa Hại', 'E': 'Sinh Khí', 'SE': 'Thiên Y',
      'S': 'Phục Vị', 'SW': 'Lục Sát', 'W': 'Ngũ Quỷ', 'NW': 'Tuyệt Mệnh',
      'group': 'Đông Tứ Mệnh', 'element': 'Hỏa'
    },
    'Chấn': {
      'N': 'Thiên Y', 'NE': 'Lục Sát', 'E': 'Phục Vị', 'SE': 'Diên Niên',
      'S': 'Sinh Khí', 'SW': 'Họa Hại', 'W': 'Tuyệt Mệnh', 'NW': 'Ngũ Quỷ',
      'group': 'Đông Tứ Mệnh', 'element': 'Mộc'
    },
    'Tốn': {
      'N': 'Sinh Khí', 'NE': 'Tuyệt Mệnh', 'E': 'Diên Niên', 'SE': 'Phục Vị',
      'S': 'Thiên Y', 'SW': 'Ngũ Quỷ', 'W': 'Lục Sát', 'NW': 'Họa Hại',
      'group': 'Đông Tứ Mệnh', 'element': 'Mộc'
    },
    'Càn': {
      'N': 'Lục Sát', 'NE': 'Thiên Y', 'E': 'Ngũ Quỷ', 'SE': 'Họa Hại',
      'S': 'Tuyệt Mệnh', 'SW': 'Diên Niên', 'W': 'Sinh Khí', 'NW': 'Phục Vị',
      'group': 'Tây Tứ Mệnh', 'element': 'Kim'
    },
    'Khôn': {
      'N': 'Tuyệt Mệnh', 'NE': 'Sinh Khí', 'E': 'Họa Hại', 'SE': 'Ngũ Quỷ',
      'S': 'Lục Sát', 'SW': 'Phục Vị', 'W': 'Thiên Y', 'NW': 'Diên Niên',
      'group': 'Tây Tứ Mệnh', 'element': 'Thổ'
    },
    'Đoài': {
      'N': 'Họa Hại', 'NE': 'Diên Niên', 'E': 'Tuyệt Mệnh', 'SE': 'Lục Sát',
      'S': 'Ngũ Quỷ', 'SW': 'Thiên Y', 'W': 'Phục Vị', 'NW': 'Sinh Khí',
      'group': 'Tây Tứ Mệnh', 'element': 'Kim'
    },
    'Cấn': {
      'N': 'Ngũ Quỷ', 'NE': 'Phục Vị', 'E': 'Lục Sát', 'SE': 'Họa Hại',
      'S': 'Tuyệt Mệnh', 'SW': 'Sinh Khí', 'W': 'Diên Niên', 'NW': 'Thiên Y',
      'group': 'Tây Tứ Mệnh', 'element': 'Thổ'
    }
};

// ====================== CÁC HẰNG SỐ KHÁC ======================
const cungPhầnTrăm = {
    'Sinh Khí': { cát: true, ý_nghĩa: 'Cung Đại Cát: Chủ về vượng khí, thu hút tài lộc, giúp công danh sự nghiệp thăng tiến không ngừng.' },
    'Thiên Y': { cát: true, ý_nghĩa: 'Cung Trung Cát: Được lộc trời cho về sức khỏe, tiêu trừ bệnh tật, gia đạo bình an, trường thọ.' },
    'Diên Niên': { cát: true, ý_nghĩa: 'Cung Cát Tinh: Chủ về sự hòa thuận, củng cố các mối quan hệ ngoại giao, gia đình êm ấm, tình duyên bền vững.' },
    'Phục Vị': { cát: true, ý_nghĩa: 'Cung Tiểu Cát: Giúp vững vàng tâm trí, củng cố sức mạnh bản thân, mang lại may mắn trong học hành, thi cử.' },
    'Tuyệt Mệnh': { cát: false, ý_nghĩa: 'Cung Đại Hung: Cực kỳ nguy hiểm, mang sát khí mạnh, dễ gây tổn hại sức khỏe, bệnh tật hiểm nghèo hoặc phá sản.' },
    'Ngũ Quỷ': { cát: false, ý_nghĩa: 'Cung Hung Tinh: Mang đến tai họa bất ngờ, thị phi quấy phá, dễ dính líu pháp lý hoặc hao tài tốn của.' },
    'Lục Sát': { cát: false, ý_nghĩa: 'Cung Hung Tinh: Sinh ra sát khí, gây mâu thuẫn gia đạo, trục trặc tình cảm, dễ vướng vào tranh chấp, kiện tụng.' },
    'Họa Hại': { cát: false, ý_nghĩa: 'Cung Tiểu Hung: Thường mang lại rủi ro vụn vặt, mệt mỏi, trắc trở bởi chuyện tiểu nhân quấy phá, hao mòn tài lộc.' }
};

const phươngVịThiếtLập = {
    'N': { tên: "BẮC", ngũHành: "Thủy" },
    'NE': { tên: "ĐÔNG BẮC", ngũHành: "Thổ" },
    'E': { tên: "ĐÔNG", ngũHành: "Mộc" },
    'SE': { tên: "ĐÔNG NAM", ngũHành: "Mộc" },
    'S': { tên: "NAM", ngũHành: "Hỏa" },
    'SW': { tên: "TÂY NAM", ngũHành: "Thổ" },
    'W': { tên: "TÂY", ngũHành: "Kim" },
    'NW': { tên: "TÂY BẮC", ngũHành: "Kim" }
};

const directionMeta = [
    { code: 'N', name: 'BẮC (Khảm)', angle: 0 },
    { code: 'NE', name: 'ĐÔNG BẮC (Cấn)', angle: 45 },
    { code: 'E', name: 'ĐÔNG (Chấn)', angle: 90 },
    { code: 'SE', name: 'ĐÔNG NAM (Tốn)', angle: 135 },
    { code: 'S', name: 'NAM (Ly)', angle: 180 },
    { code: 'SW', name: 'TÂY NAM (Khôn)', angle: 225 },
    { code: 'W', name: 'TÂY (Đoài)', angle: 270 },
    { code: 'NW', name: 'TÂY BẮC (Càn)', angle: 315 }
];

let chủMệnh = 'Khảm';
let currentCode = 'N';
let currentHeading = 0;
let targetAngle = null;

/**
 * Hiển thị cảnh báo với tiêu đề tùy chỉnh
 * @param {string} msg - Nội dung thông báo
 * @param {string} title - Tiêu đề (Mặc định: Thông Báo)
 */
function showCustomAlert(msg, title = "Thông Báo") {
    // Cập nhật tiêu đề trước khi hiển thị
    const titleEl = document.querySelector('.custom-alert-title');
    if (titleEl) titleEl.innerText = title;
    
    // Cập nhật nội dung
    document.getElementById('customAlertMsg').innerText = msg;
    document.getElementById('customAlert').classList.add('active');
}

function closeCustomAlert() {
    document.getElementById('customAlert').classList.remove('active');
}

/**
 * Xử lý nhập liệu ngày tháng với logic kiểm tra dữ liệu sạch
 */
function handleDateInput(currentInput, nextInputId) {
    // Làm sạch đầu vào: chỉ giữ lại số
    currentInput.value = currentInput.value.replace(/[^0-9]/g, '');
    let val = parseInt(currentInput.value) || 0;

    // Kiểm tra Ngày
    if (currentInput.id === 'birthDay') {
        if (val > 31) {
            currentInput.value = "31";
            showCustomAlert("Ngày trong tháng không thể vượt quá 31!", "⚠️ Sai Lệch Dữ Liệu");
        } else if (val < 0) {
            currentInput.value = "1";
        }
    }

    // Kiểm tra Tháng
    if (currentInput.id === 'birthMonth') {
        if (val > 12) {
            currentInput.value = "12";
            showCustomAlert("Tháng không thể vượt quá 12!", "⚠️ Sai Lệch Dữ Liệu");
        } else if (val < 0) {
            currentInput.value = "1";
        }
    }

    // Tự động chuyển ô khi nhập đủ
    if (currentInput.value.length >= currentInput.maxLength && nextInputId) {
        document.getElementById(nextInputId).focus();
    }
    
    // Tự động tính toán lại khi dữ liệu thay đổi
    if (typeof debounceRecalculate === 'function') {
        debounceRecalculate();
    }
}

// ====================== RENDER 24 SƠN RING - CHUẨN XÁC TUYỆT ĐỐI ======================
function render24SonRing() {
    // 1. Vạch độ ngoài cùng
    const vachDoRing = document.getElementById('vachDoRing');
    if (vachDoRing) {
        let linesHtml = "";
        for (let i = 0; i < 360; i++) {
            const y2 = (i % 10 === 0) ? 28 : (i % 5 === 0) ? 25 : 23;
            linesHtml += `<line x1="250" y1="18" x2="250" y2="${y2}" transform="rotate(${i}, 250, 250)" />`;
        }
        vachDoRing.innerHTML = linesHtml;
    }

    // 2. Vạch ngăn 24 Sơn
    const khe24SonRing = document.getElementById('khe24SonRing');
    if (khe24SonRing) {
        let lines24Html = "";
        for (let i = 0; i < 24; i++) {
            const gocBiên = i * 15 - 7.5;
            lines24Html += `<line x1="250" y1="115" x2="250" y2="162" transform="rotate(${gocBiên}, 250, 250)" />`;
        }
        khe24SonRing.innerHTML = lines24Html;
    }

    // 3. Chữ 24 Sơn (Đã đưa về góc chuẩn tâm ô lý tưởng)
    const sonRingSvg = document.getElementById('sonRingSvg');
    if (!sonRingSvg) return;
    sonRingSvg.innerHTML = "";
    const rSon = 136;

    son24Data.forEach((son, index) => {
        const goc = (index * 15) % 360; // Trả về góc gốc để chữ nằm chính giữa ô

        const textNode = document.createElementNS("http://www.w3.org/2000/svg", "text");
        textNode.setAttribute("x", "250");
        textNode.setAttribute("y", (250 - rSon).toString());
        textNode.setAttribute("text-anchor", "middle");
        textNode.setAttribute("font-family", "sans-serif");
        textNode.setAttribute("font-size", "10");
        textNode.setAttribute("font-weight", "900");
        textNode.setAttribute("transform", `rotate(${goc}, 250, 250)`);
        textNode.setAttribute("data-son-goc", goc.toString());
        textNode.textContent = son.name;

        if (["Cấn", "Tốn", "Khôn", "Càn"].includes(son.name)) {
            textNode.setAttribute("fill", "#ff3b30");
            textNode.setAttribute("data-color", "#ff3b30");
        } else if (["Tý", "Mão", "Ngọ", "Dậu"].includes(son.name)) {
            textNode.setAttribute("fill", "#00a525");
            textNode.setAttribute("data-color", "#00a525");
        } else {
            textNode.setAttribute("fill", "#5c4314");
            textNode.setAttribute("data-color", "#5c4314");
        }
        sonRingSvg.appendChild(textNode);
    });

    // 4. Vòng 24 Sao Phúc Đức (Đã đưa về góc chuẩn tâm ô lý tưởng)
    const phucDucRingSvg = document.getElementById('phucDucRingSvg');
    if (!phucDucRingSvg) return;
    phucDucRingSvg.innerHTML = "";

    const phucDucNames = [
        "Phúc Đức", "Ôn Hoàng", "Tấn Tài", "Trường Bệnh", "Tố Tụng", "Quan Tước",
        "Quan Quý", "Tự Điểu", "Vượng Trang", "Hưng Phước", "Pháp Trường", "Điên Cuồng",
        "Khẩu Thiệt", "Vượng Tài", "Đăng Doanh", "Thiếu Vong", "Thiên Tặc", "Tử Mất",
        "Vượng Tâm", "Khóc Khấp", "Cô Quả", "Vinh Phước", "Thiếu Vong", "Xương Dâm"
    ];

    phucDucNames.forEach((name, index) => {
        const goc = (index * 15) % 360; // Trả về góc gốc để sao khớp vị trí với Sơn hướng
        const textNode = document.createElementNS("http://www.w3.org/2000/svg", "text");
        textNode.setAttribute("x", "250");
        textNode.setAttribute("y", "72");
        textNode.setAttribute("text-anchor", "middle");
        textNode.setAttribute("font-family", "sans-serif");
        textNode.setAttribute("font-size", "6.5");
        textNode.setAttribute("font-weight", "600");
        textNode.setAttribute("fill", "#7a623c");
        textNode.setAttribute("transform", `rotate(${goc}, 250, 250)`);
        textNode.setAttribute("data-sao-goc", goc.toString());
        textNode.textContent = name;
        phucDucRingSvg.appendChild(textNode);
    });
}
function tínhCungPhi(năm, tháng, ngày, giớiTính) {
    // 1. Dùng toán tử ba ngôi (ternary) giúp rút gọn code, nhìn sạch và chuyên nghiệp hơn
    let namTinh = (tháng < 2 || (tháng === 2 && ngày < 5)) ? năm - 1 : năm;

    let sốDư = namTinh % 9;
    if (sốDư === 0) sốDư = 9;

    let kếtQuả;
    if (giớiTính === 'male') {
        kếtQuả = (11 - sốDư) % 9;
    } else {
        kếtQuả = (sốDư + 4) % 9;
    }
    
    if (kếtQuả === 0) kếtQuả = 9;

    // 2. Xử lý số 5 (Bắt buộc phải có)
    if (kếtQuả === 5) {
        kếtQuả = (giớiTính === 'male') ? 2 : 8;
    }

    const mapCung = {
        1: 'Khảm', 2: 'Khôn', 3: 'Chấn', 4: 'Tốn',
        6: 'Càn', 7: 'Đoài', 8: 'Cấn', 9: 'Ly'
    };

    return mapCung[kếtQuả];
}

  function debounceRecalculate() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      recalculateFate();
    }, 300);
  }

  function validateFullDate(day, month, year) {
    if (month < 1 || month > 12) return false;
    let listDaysInMonth = [31, (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28, 31, 30, 31, 30,
      31, 31, 30, 31, 30, 31
    ];
    if (day < 1 || day > listDaysInMonth[month - 1]) return false;
    if (year < 1900 || year > 2050) {
      showCustomAlert(`Năm sinh ${year} ngoài khoảng hỗ trợ (1900-2050). Kết quả chỉ mang tính tham khảo!`);
      return true; // vẫn cho tính nhưng có cảnh báo
    }
    return true;
  }

// ====================== HÀM ĐÓNG MỞ GIẢI THÍCH CHI TIẾT ======================
window.toggleDienGiaiChiTiet = function() {
    const contentDiv = document.getElementById('content-dien-giai-chi-tiet');
    const toggleBtn = document.getElementById('btn-toggle-fengshui');
    if (!contentDiv || !toggleBtn) return;

    if (contentDiv.style.display === 'none' || contentDiv.style.display === '') {
        contentDiv.style.display = 'block';
        isDetailOpen = true;
        // Giữ nguyên cơ chế thông minh: Khóa chặt góc la bàn tại giây bấm MỞ
        lockedHeadingAtOpen = currentHeading; 
        toggleBtn.innerHTML = '🙈 Đóng giải thích thuật ngữ';
        toggleBtn.style.background = 'rgba(223, 183, 108, 0.15)';
    } else {
        contentDiv.style.display = 'none';
        isDetailOpen = false;
        // Bấm ĐÓNG: Làm sạch bộ nhớ góc cũ ngay lập tức
        lockedHeadingAtOpen = null; 
        toggleBtn.innerHTML = '👁️ Xem giải thích thuật ngữ hiển thị';
        toggleBtn.style.background = 'transparent';
    }
    recalculateFate(); 
};

// ====================== GLOBAL ======================
let isDetailOpen = false;
let lockedHeadingAtOpen = null; // Biến thông minh lưu góc cố định lúc mở bảng

// ====================== HÀM HỖ TRỢ ======================
function getHanhByHeading(heading) {
    heading = ((heading % 360) + 360) % 360;
    if (heading >= 337.5 || heading < 22.5) return "Thủy";
    if (heading >= 22.5 && heading < 67.5) return "Thổ";
    if (heading >= 67.5 && heading < 112.5) return "Mộc";
    if (heading >= 112.5 && heading < 157.5) return "Mộc";
    if (heading >= 157.5 && heading < 202.5) return "Hỏa";
    if (heading >= 202.5 && heading < 247.5) return "Thổ";
    if (heading >= 247.5 && heading < 292.5) return "Kim";
    if (heading >= 292.5 && heading < 337.5) return "Kim";
    return "Chưa xác định";
}

// ====================== HÀM CHÍNH recalculateFate() - ĐẦY ĐỦ ======================
function recalculateFate() {
    const name = document.getElementById('userName').value || "Chủ mệnh";
    const gender = document.getElementById('gender').value;
    const dayStr = document.getElementById('birthDay').value;
    const monthStr = document.getElementById('birthMonth').value;
    const yearStr = document.getElementById('birthYear').value;
    const mucDich = document.getElementById('purpose').value;

    // Chưa nhập ngày tháng năm sinh
    if (!dayStr || !monthStr || !yearStr || yearStr.length < 4) {
        fateTxt.innerText = `${name}: Đo hướng tự do cơ bản (Chưa nhập đủ Ngày - Tháng - Năm sinh)`;
        directionsContainer.innerHTML = "<div style='font-size:0.8rem;color:#8a8a8f;text-align:center;padding:10px;'>Vui lòng nhập đủ 3 ô Ngày, Tháng, Năm sinh để kích hoạt sơ đồ gợi ý Cát/Hung</div>";
        listPanelTitle.innerText = "Danh Sách Hướng Gợi Ý";
        
        const oldPanel = document.getElementById('dien-giai-bo-sung');
        if (oldPanel) oldPanel.remove();
        updateCompassUI(currentHeading);
        return;
    }

    let d = parseInt(dayStr);
    let m = parseInt(monthStr);
    let y = parseInt(yearStr);

    if (!validateFullDate(d, m, y)) {
        fateTxt.innerText = `${name}: Lỗi cấu trúc thời gian (Kiểm tra lại số ngày hoặc năm nhuận)`;
        return;
    }

    // Tính toán cung mệnh
    chủMệnh = tínhCungPhi(y, m, d, gender);
    const namAm = (m < 2 || (m === 2 && d < 5)) ? y - 1 : y;
    const nguHoangInfo = getNguHoangInfo(namAm);
  
    const hanhCungPhi = bátTrạchMap[chủMệnh].element;
    const nhomMenh = bátTrạchMap[chủMệnh].group;

    fateTxt.innerText = `${name}: Cung ${chủMệnh} (${nhomMenh}) - Bản Mệnh Cung Phi: ${hanhCungPhi} | Năm Âm: ${namAm} | ${nguHoangInfo}`;

    // Xử lý góc khóa khi xem chi tiết
    let headingToCalculate = currentHeading; 
    if (isDetailOpen && lockedHeadingAtOpen !== null) {
        headingToCalculate = lockedHeadingAtOpen;
    }

    const hanhPhuongVi = getHanhByHeading(headingToCalculate);

    // LẤY THÔNG TIN TỪ CONFIG (ĐÂY LÀ ĐIỂM QUAN TRỌNG NHẤT)
    const config = ConfigPhongThuy[mucDich];
    const tenMucDichBinhDan = config ? config.title : "Vị trí / Hướng đang chọn";

    // Giải thích Ngũ Hoàng
    let giaiThichSao = "";
    if (nguHoangInfo.includes("Tam Bích") || nguHoangInfo.includes("Tứ Lục")) {
        giaiThichSao = `Năm sinh âm lịch này gặp sao mang năng lượng Mộc quản năm, khi đóng ở giữa tâm nhà (vốn thuộc Thổ) sẽ gây ra sự lệch khí nhẹ ở mức <b>Trung bình</b>. Chỉ cần giữ khu vực giữa nhà hoặc giữa cửa hàng luôn sạch sẽ, thoáng đãng là tự động hóa giải.`;
    } else if (nguHoangInfo.includes("Ngũ Hoàng")) {
        giaiThichSao = `Năm sinh này phạm sao xấu Ngũ Hoàng đóng tại giữa nhà, mang sát khí hành Thổ rất mạnh. Cần giữ trung tâm nhà yên tĩnh, tránh đập phá, sửa chữa lớn ở khu vực này trong năm.`;
    } else {
        giaiThichSao = `Năng lượng chủ quản năm sinh tại trung tâm nhà ở trạng thái ổn định, an lành, không có biến động xấu.`;
    }

    // Render phần giải thích thuật ngữ
    let targetContainer = document.getElementById('dien-giai-bo-sung');
    if (!targetContainer) {
        targetContainer = document.createElement('div');
        targetContainer.id = 'dien-giai-bo-sung';
        targetContainer.style.width = '100%';
        fateTxt.parentNode.insertBefore(targetContainer, fateTxt.nextSibling);
    }

    const displayStyle = isDetailOpen ? 'block' : 'none';
    const btnText = isDetailOpen ? '🙈 Đóng giải thích thuật ngữ' : '👁️ Xem giải thích thuật ngữ hiển thị';
    const btnBkg = isDetailOpen ? 'rgba(223, 183, 108, 0.15)' : 'transparent';

    targetContainer.innerHTML = `
        <div style="text-align: center; margin: 10px 0;">
            <button id="btn-toggle-fengshui" onclick="toggleDienGiaiChiTiet()"
                    style="background: ${btnBkg}; border: 1px solid var(--gold); color: var(--gold);
                           padding: 8px 16px; font-size: 0.85rem; border-radius: 4px; cursor: pointer; font-weight: bold;">
                ${btnText}
            </button>
        </div>
        <div id="content-dien-giai-chi-tiet" style="display: ${displayStyle}; margin: 10px 0; padding: 14px;
             background: rgba(223, 183, 108, 0.06); border: 1.5px solid var(--gold); border-radius: 8px;
             font-size: 0.86rem; line-height: 1.65; text-align: left; color: #fff;">
            <p style="margin:0 0 10px 0; color:var(--gold); font-weight:bold; border-bottom:1px solid var(--gold); padding-bottom:6px;">
                📖 GIẢI NGHĨA CÁC THUẬT NGỮ
            </p>
            <p style="margin:8px 0;">📍 <b>Phương vị:</b> Là hướng thực tế mà đầu điện thoại/la bàn của bạn đang chĩa vào. Hướng này tương ứng với năng lượng hành <b>${hanhPhuongVi}</b> (Góc xoay la bàn hiện tại: <b>${Math.round(headingToCalculate)}°</b>).</p>
            <p style="margin:8px 0;">🎯 <b>Mệnh Cung Phi (Hành ${hanhCungPhi}):</b> Quẻ mệnh phong thủy cốt lõi được tính toán dựa trên năm sinh và giới tính của bạn (Bạn thuộc cung <b>${chủMệnh}</b>, nhóm tuổi <b>${nhomMenh}</b>). Mệnh này dùng để đối chiếu trực tiếp với la bàn Bát Trạch phía dưới.</p>
            <p style="margin:8px 0;">⚠️ <b>Vận khí tâm nhà (Trung Cung):</b> ${giaiThichSao}</p>
            <p style="margin:8px 0;">🚪 <b>Mục đích xem:</b> Bạn đang tiến hành đo đạc vị trí cho <b>${tenMucDichBinhDan}</b>. Hãy cuộn xuống phía dưới để xem kết quả Cát/Hung chính xác theo hệ Bát Trạch Minh Châu và mật pháp hóa giải.</p>
        </div>
    `;

    generateDirectionsList();
    updateCompassUI(currentHeading);
}

// --- CẤU HÌNH PHONG THỦY ĐÃ NÂNG CẤP TOÀN DIỆN DIỆN RỘNG ---
const ConfigPhongThuy = {
    // Hướng (Ưu tiên các cung Cát để đón sinh khí, tài lộc)
    'house':          { title: "Hướng Nhà / Cửa Chính", isCat: true },
    'gate':           { title: "Hướng Cổng Chính", isCat: true },
    'altar':          { title: "Hướng Bàn Thờ / Thần Tài", isCat: true },
    'bed':            { title: "Hướng Đầu Giường Ngủ", isCat: true },
    'livingroom':     { title: "Hướng Phòng Khách / Tiếp Khách", isCat: true },
    'bedroom_master': { title: "Hướng Phòng Ngủ Chính (Master)", isCat: true },
    'balcony':        { title: "Hướng Ban Công / Cửa Sổ Lớn", isCat: true },
    'workspace':      { title: "Hướng Bàn Làm Việc", isCat: true },
    'ceo_office':     { title: "Hướng Phòng Sếp / Bàn Lãnh Đạo", isCat: true },
    'study_desk':     { title: "Hướng Bàn Học / Góc Học Tập", isCat: true },
    'signboard':      { title: "Hướng Biển Hiệu / Bảng Quảng Cáo", isCat: true },
    'counter':        { title: "Hướng Quầy Thu Ngân / Bán Hàng", isCat: true },
    'bakery':         { title: "Hướng Quầy Bánh Mì / Tiệm Bánh", isCat: true },
    'coffee':         { title: "Hướng Quán Cà Phê / Trà Sữa", isCat: true },
    'restaurant':     { title: "Hướng Quán Ăn / Nhà Hàng", isCat: true },
    'shop':           { title: "Hướng Cửa Hàng / Showroom", isCat: true },
    'salon':          { title: "Hướng Salon Tóc / Nail / Spa", isCat: true },

    // Tọa vị (Ưu tiên đặt vào cung Hung để lấy độc trị độc, trấn át hung sát)
    'kitchen':        { title: "Vị trí Đặt Bếp Nấu (Tọa Hung)", isCat: false },
    'toilet':         { title: "Vị trí Nhà Vệ Sinh / WC (Tọa Hung)", isCat: false },
    'septic_tank':    { title: "Vị trí Hầm Tự Hoại / Bể Phốt (Tọa Hung)", isCat: false },
    'storage':        { title: "Vị trí Kho Hàng / Tủ Đồ (Tọa Hung)", isCat: false },
    'trash_area':     { title: "Vị trí Thùng Rác / Phế Liệu (Tọa Hung)", isCat: false },
    'safe':           { title: "Vị trí Két Sắt / Tài Lộc (Tọa Hung)", isCat: false }
};

// ====================== HÀM generateDirectionsList() - ĐẦY ĐỦ ======================
function generateDirectionsList() {
    const mucDich = document.getElementById('purpose').value;
    const config = ConfigPhongThuy[mucDich];

    if (!mucDich || !config) {
        directionsContainer.innerHTML = `
            <div style='font-size:0.8rem;color:#8a8a8f;text-align:center;padding:10px;'>
                Chọn mục đích Khí Cục hoặc Trấn Sát để hiển thị đồ hình gợi ý tương ứng
            </div>`;
        listPanelTitle.innerText = "Danh Sách Phương Vị Gợi Ý";
        return;
    }

    let listDirections = [];
    directionMeta.forEach(dir => {
        const cungTrạch = bátTrạchMap[chủMệnh][dir.code];
        const isCat = cungPhầnTrăm[cungTrạch].cát;
        const hopPhongThuy = config.isCat ? isCat : !isCat;
        
        listDirections.push({
            ...dir,
            cungTrạch: cungTrạch,
            isCat: isCat,
            hopPhongThuy: hopPhongThuy
        });
    });

    listDirections.sort((a, b) => b.hopPhongThuy - a.hopPhongThuy);
    listPanelTitle.innerText = config.title;
    directionsContainer.innerHTML = "";

    listDirections.forEach(item => {
        const textColorStyle = item.hopPhongThuy
            ? 'color: #30d158; font-weight: bold;'
            : 'color: #ff3b30; font-weight: bold;';
       
        let statusText = "";
        if (config.isCat) {
            statusText = item.hopPhongThuy ? '🟢 ĐÓN CÁT KHÍ (HƯỚNG TỐT)' : '❌ PHẠM HUNG PHƯƠNG (HƯỚNG XẤU)';
        } else {
            statusText = item.hopPhongThuy ? '🟢 TỌA HUNG TRẤN SÁT (ĐẮC VỊ)' : '❌ SAI VỊ: TỌA CÁT TIÊU HAO';
        }

        const sonGroup = getSonGroupForDirection(item.code);
        let sonHTML = "";
        
        sonGroup.forEach((son, index) => {
            const dataSon = MaTranMinhChau[chủMệnh] ? MaTranMinhChau[chủMệnh][son] : null;
            const score = dataSon ? dataSon.diem : 0;
            const nhom = dataSon ? dataSon.nhom : "";
            
            // Xử lý dữ liệu text để tránh lỗi dấu nháy đơn trong JS
            const titleInfo = `${son} (${nhom})`;
            const textInfo = dataSon ? dataSon.text.replace(/'/g, "\\'") : "Chưa có thông tin.";
            const solInfo = dataSon ? dataSon.giaiphap.replace(/'/g, "\\'") : "Chưa có giải pháp.";
            
            const color = score >= 80 ? "#30d158" : (score >= 50 ? "#dfb76c" : "#ff3b30");
            
            // Thêm onclick gọi hàm showExplanation (hàm này bạn để ở thẻ script chính)
            sonHTML += `<span style="display:inline-block; white-space:nowrap; cursor:pointer;" 
                              onclick="showExplanation('${titleInfo}', '${textInfo}', '${solInfo}')">` +
                       `<span style="color:${color}; font-weight:700;">${son}</span>` + 
                       `<span style="color:#ffffff;"> (</span>` +
                       `<span style="color:${color}; font-weight:400;">${score}%</span>`;
            
            if (nhom) {
                sonHTML += `<span style="color:#8e8e93; font-size:0.6rem; margin-left:3px; text-transform:uppercase;">${nhom}</span>`;
            }
            
            sonHTML += `<span style="color:#ffffff;">)</span></span>`;
            
            if (index < sonGroup.length - 1) sonHTML += ` • `;
        });

        const div = document.createElement('div');
        div.className = `direction-item ${item.hopPhongThuy ? 'good' : 'bad'}`;
        div.innerHTML = `
            <div class="item-info" style="flex:1;">
                <div class="item-name" style="color:#fff; font-size:0.92rem; margin-bottom: 2px;">
                    ${item.name} ➔ <span style="${textColorStyle}">${item.cungTrạch}</span>
                </div>
                <div style="margin:4px 0 5px 0; font-size:0.76rem; line-height:1.3;">
                    <span style="color:#dfb76c; font-weight:600;">SƠN VỊ:</span> ${sonHTML}
                </div>
                <div class="item-cung" style="${textColorStyle}; font-size:0.82rem; letter-spacing: 0.3px;">
                    ${statusText}
                </div>
            </div>
            <button class="btn-rotate" onclick="triggerGhostNeedle(${item.angle})" style="font-size:0.78rem; padding:4px 9px;">Xoay thử</button>
        `;
        directionsContainer.appendChild(div);
    });
}
// Map 8 hướng chính → 3 Sơn tương ứng
function getSonGroupForDirection(code) {
    const map = {
        'N':  ['Nhâm', 'Tý', 'Quý'],
        'NE': ['Sửu', 'Cấn', 'Dần'],
        'E':  ['Giáp', 'Mão', 'Ất'],
        'SE': ['Thìn', 'Tốn', 'Tỵ'],
        'S':  ['Bính', 'Ngọ', 'Đinh'],
        'SW': ['Mùi', 'Khôn', 'Thân'],
        'W':  ['Canh', 'Dậu', 'Tân'],
        'NW': ['Tuất', 'Càn', 'Hợi']
    };
    return map[code] || [];
}

        function triggerGhostNeedle(angle) {
    targetAngle = angle;
    
    const ghost = document.getElementById('ghostNeedle');
    if (ghost) {
        ghost.style.display = 'block';
        ghost.style.opacity = "1";
        ghost.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
    }
    
    let sơnThử = tìmSơnHướng(angle);
    detailBox.style.borderLeftColor = "var(--gold)";
    detailBox.innerHTML = `
        <span class="gold-text">◆ KIM VÀNG XOAY THỬ: ${angle}°</span><br>
        <span style="color:#fff;">Kim vàng đang chỉ <strong>${sơnThử}</strong>.<br>
        Hãy xoay la bàn sao cho kim đỏ trùng với kim vàng.</span>
    `;
    
    updateCompassUI(currentHeading);
}

function tìmSơnHướng(heading) {
    heading = ((heading % 360) + 360) % 360; // Chuẩn hóa góc

    for (let son of son24Data) {
        if (son.start > son.end) { // Trường hợp wrap-around (Nhâm, Tý)
            if (heading >= son.start || heading < son.end) {
                return son.name;
            }
        } else if (heading >= son.start && heading < son.end) {
            return son.name;
        }
    }
    return "Tý"; // fallback
}

// === DỮ LIỆU HUYỀN KHÔNG PHI TINH - FULL 9 VẬN (CÓ NGŨ HÀNH) ===
const VAN_DATA = {
    1: { 'N': { sao: "Nhất Bạch", hanh: "Thủy", loai: "best", y_nghia: "Thủy khí vượng, đại cát về trí tuệ và tài lộc." }, 'NE': { sao: "Nhị Hắc", hanh: "Thổ", loai: "bad", y_nghia: "Dễ bệnh tật, thị phi, bất lợi cho sức khỏe." }, 'E': { sao: "Tam Bích", hanh: "Mộc", loai: "neutral", y_nghia: "Năng lượng trung bình, công việc trí óc khá tốt." }, 'SE': { sao: "Tứ Lục", hanh: "Mộc", loai: "good", y_nghia: "Tốt cho học hành, văn chương và sáng tạo." }, 'S': { sao: "Ngũ Hoàng", hanh: "Thổ", loai: "worst", y_nghia: "Phạm Ngũ Hoàng Đại Sát, tuyệt đối tránh động thổ." }, 'SW': { sao: "Lục Bạch", hanh: "Kim", loai: "good", y_nghia: "Vượng quyền lực, công danh sự nghiệp ổn định." }, 'W': { sao: "Thất Xích", hanh: "Kim", loai: "bad", y_nghia: "Dễ bị lừa gạt, tranh chấp và hao hụt tài sản." }, 'NW': { sao: "Bát Bạch", hanh: "Thổ", loai: "good", y_nghia: "Vượng tài lộc, gia đạo bình an, tích lũy tốt." } },
    2: { 'N': { sao: "Nhị Hắc", hanh: "Thổ", loai: "bad", y_nghia: "Dễ bệnh tật, cần chú ý tiêu hóa và phụ khoa." }, 'NE': { sao: "Tam Bích", hanh: "Mộc", loai: "neutral", y_nghia: "Dễ xung đột lời nói, cần thận trọng." }, 'E': { sao: "Tứ Lục", hanh: "Mộc", loai: "good", y_nghia: "Sự nghiệp thăng tiến, học vấn phát triển." }, 'SE': { sao: "Ngũ Hoàng", hanh: "Thổ", loai: "worst", y_nghia: "Đại hung, tránh tác động mạnh vào phương này." }, 'S': { sao: "Lục Bạch", hanh: "Kim", loai: "good", y_nghia: "Có quý nhân, quyền lực thăng hoa." }, 'SW': { sao: "Thất Xích", hanh: "Kim", loai: "bad", y_nghia: "Cẩn thận thị phi, trộm cắp, tai bay vạ gió." }, 'W': { sao: "Bát Bạch", hanh: "Thổ", loai: "good", y_nghia: "Tài lộc vượng, kinh doanh thuận lợi." }, 'NW': { sao: "Cửu Tử", hanh: "Hỏa", loai: "best", y_nghia: "Đại cát, danh vọng cao, hỷ sự đến liên miên." } },
    3: { 'N': { sao: "Tam Bích", hanh: "Mộc", loai: "neutral", y_nghia: "Cạnh tranh nhiều nhưng dễ khẳng định vị thế." }, 'NE': { sao: "Tứ Lục", hanh: "Mộc", loai: "good", y_nghia: "Trí tuệ minh mẫn, văn chương xuất chúng." }, 'E': { sao: "Ngũ Hoàng", hanh: "Thổ", loai: "worst", y_nghia: "Sát khí nặng, tránh mọi sửa chữa, xây dựng." }, 'SE': { sao: "Lục Bạch", hanh: "Kim", loai: "good", y_nghia: "Công danh, quyền lực củng cố vững chắc." }, 'S': { sao: "Thất Xích", hanh: "Kim", loai: "bad", y_nghia: "Dễ dính líu đến tranh chấp luật pháp, thị phi." }, 'SW': { sao: "Bát Bạch", hanh: "Thổ", loai: "good", y_nghia: "Tài sản tăng trưởng, gia đạo hòa thuận." }, 'W': { sao: "Cửu Tử", hanh: "Hỏa", loai: "best", y_nghia: "Vượng khí cực đại, đại phú quý." }, 'NW': { sao: "Nhất Bạch", hanh: "Thủy", loai: "good", y_nghia: "Đào hoa, quý nhân, học vấn tốt." } },
    4: { 'N': { sao: "Tứ Lục", hanh: "Mộc", loai: "good", y_nghia: "Thông minh, học vấn hanh thông." }, 'NE': { sao: "Ngũ Hoàng", hanh: "Thổ", loai: "worst", y_nghia: "Hung tinh cần tránh xa, không nên động thổ." }, 'E': { sao: "Lục Bạch", hanh: "Kim", loai: "good", y_nghia: "Vượng quý nhân, công việc thuận lợi." }, 'SE': { sao: "Thất Xích", hanh: "Kim", loai: "bad", y_nghia: "Cần đề phòng hao tài và thị phi." }, 'S': { sao: "Bát Bạch", hanh: "Thổ", loai: "good", y_nghia: "Tài lộc, thịnh vượng, kinh tế phát triển." }, 'SW': { sao: "Cửu Tử", hanh: "Hỏa", loai: "best", y_nghia: "Hỷ sự, danh tiếng lan xa." }, 'W': { sao: "Nhất Bạch", hanh: "Thủy", loai: "good", y_nghia: "Trí tuệ, học vấn, quan lộc thăng tiến." }, 'NW': { sao: "Nhị Hắc", hanh: "Thổ", loai: "bad", y_nghia: "Cẩn thận bệnh tật, sức khỏe suy yếu." } },
    5: { 'N': { sao: "Ngũ Hoàng", hanh: "Thổ", loai: "worst", y_nghia: "Đại hung, cần tĩnh không nên động." }, 'NE': { sao: "Lục Bạch", hanh: "Kim", loai: "good", y_nghia: "Quyền lực, công danh ổn định." }, 'E': { sao: "Thất Xích", hanh: "Kim", loai: "bad", y_nghia: "Cẩn thận hao tài và tiểu nhân quấy phá." }, 'SE': { sao: "Bát Bạch", hanh: "Thổ", loai: "good", y_nghia: "Tài lộc vững, sự nghiệp tiến triển." }, 'S': { sao: "Cửu Tử", hanh: "Hỏa", loai: "best", y_nghia: "Đại cát, vượng danh, hỷ sự." }, 'SW': { sao: "Nhất Bạch", hanh: "Thủy", loai: "good", y_nghia: "Trí tuệ, quý nhân phù trợ." }, 'W': { sao: "Nhị Hắc", hanh: "Thổ", loai: "bad", y_nghia: "Sức khỏe kém, cần chú ý." }, 'NW': { sao: "Tam Bích", hanh: "Mộc", loai: "neutral", y_nghia: "Năng lượng trung tính, cần sự kiên nhẫn." } },
    6: { 'N': { sao: "Lục Bạch", hanh: "Kim", loai: "good", y_nghia: "Vượng quý nhân, quyền thế." }, 'NE': { sao: "Thất Xích", hanh: "Kim", loai: "bad", y_nghia: "Cần đề phòng tranh chấp, kiện tụng." }, 'E': { sao: "Bát Bạch", hanh: "Thổ", loai: "good", y_nghia: "Tài lộc dồi dào, kinh doanh phát đạt." }, 'SE': { sao: "Cửu Tử", hanh: "Hỏa", loai: "best", y_nghia: "Danh vọng, vượng nhân duyên." }, 'S': { sao: "Nhất Bạch", hanh: "Thủy", loai: "good", y_nghia: "Trí tuệ, học hành, quan lộc." }, 'SW': { sao: "Nhị Hắc", hanh: "Thổ", loai: "bad", y_nghia: "Sức khỏe không ổn định." }, 'W': { sao: "Tam Bích", hanh: "Mộc", loai: "neutral", y_nghia: "Trung tính, chú ý lời ăn tiếng nói." }, 'NW': { sao: "Tứ Lục", hanh: "Mộc", loai: "good", y_nghia: "Tốt cho học hành, thi cử." } },
    7: { 'N': { sao: "Thất Xích", hanh: "Kim", loai: "bad", y_nghia: "Dễ thất thoát tài sản, cẩn thận thị phi." }, 'NE': { sao: "Bát Bạch", hanh: "Thổ", loai: "good", y_nghia: "Tài lộc vững chắc." }, 'E': { sao: "Cửu Tử", hanh: "Hỏa", loai: "best", y_nghia: "Danh vọng cao, hỷ sự dồi dào." }, 'SE': { sao: "Nhất Bạch", hanh: "Thủy", loai: "good", y_nghia: "Quý nhân, trí tuệ." }, 'S': { sao: "Nhị Hắc", hanh: "Thổ", loai: "bad", y_nghia: "Sức khỏe cần chú ý." }, 'SW': { sao: "Tam Bích", hanh: "Mộc", loai: "neutral", y_nghia: "Cần cẩn thận trong giao tiếp." }, 'W': { sao: "Tứ Lục", hanh: "Mộc", loai: "good", y_nghia: "Học tập tốt, tư duy tốt." }, 'NW': { sao: "Ngũ Hoàng", hanh: "Thổ", loai: "worst", y_nghia: "Đại hung, không nên tác động." } },
    8: { 'N': { sao: "Bát Bạch", hanh: "Thổ", loai: "best", y_nghia: "Vượng tài, gia đạo hưng thịnh." }, 'NE': { sao: "Cửu Tử", hanh: "Hỏa", loai: "best", y_nghia: "Danh tiếng, vận may đến." }, 'E': { sao: "Nhất Bạch", hanh: "Thủy", loai: "good", y_nghia: "Trí tuệ, sự nghiệp tốt." }, 'SE': { sao: "Nhị Hắc", hanh: "Thổ", loai: "bad", y_nghia: "Chú ý bệnh tật." }, 'S': { sao: "Tam Bích", hanh: "Mộc", loai: "neutral", y_nghia: "Trung bình." }, 'SW': { sao: "Tứ Lục", hanh: "Mộc", loai: "good", y_nghia: "Học hành, danh tiếng." }, 'W': { sao: "Ngũ Hoàng", hanh: "Thổ", loai: "worst", y_nghia: "Đại hung." }, 'NW': { sao: "Lục Bạch", hanh: "Kim", loai: "good", y_nghia: "Quyền lực, công danh." } },
    9: { 'N': { sao: "Nhất Bạch", hanh: "Thủy", loai: "good", y_nghia: "Trí tuệ, quý nhân tương trợ." }, 'NE': { sao: "Thất Xích", hanh: "Kim", loai: "bad", y_nghia: "Thị phi, tranh chấp." }, 'E': { sao: "Lục Bạch", hanh: "Kim", loai: "neutral", y_nghia: "Tài lộc chậm phát triển." }, 'SE': { sao: "Nhị Hắc", hanh: "Thổ", loai: "neutral", y_nghia: "Chú ý tiêu hóa." }, 'S': { sao: "Cửu Tử", hanh: "Hỏa", loai: "best", y_nghia: "Hoàng kim vận 9, đại phú quý." }, 'SW': { sao: "Bát Bạch", hanh: "Thổ", loai: "neutral", y_nghia: "Tài lộc thoái khí." }, 'W': { sao: "Ngũ Hoàng", hanh: "Thổ", loai: "worst", y_nghia: "Đại hung, tránh động thổ." }, 'NW': { sao: "Tứ Lục", hanh: "Mộc", loai: "bad", y_nghia: "Trì trệ học hành." } }
};

function sinhLuanGiaiThienThoi(code) {
    const currentYear = new Date().getFullYear();
    let vanSo = Math.floor((currentYear - 1864) / 20) % 9 + 1;
    const item = VAN_DATA[vanSo] ? VAN_DATA[vanSo][code] : null;

    if (!item) return `<p style="color: #666;">Dữ liệu chưa được thiết lập.</p>`;

    const colorMap = { best: "#00ff00", good: "#aaff00", neutral: "#e0e0e0", bad: "#ffaa00", worst: "#ff0000" };
    const colorStar = colorMap[item.loai] || "#fff";

    return `
        <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; border-left: 5px solid ${colorStar}; margin-top: 20px;">
            <span style="font-weight: bold; font-size: 0.95rem; color: #0a84ff;">
                ◆ HUYỀN KHÔNG PHI TINH VẬN ${vanSo} (${currentYear})
            </span><br>
            <span style="color: ${colorStar}; font-weight: 800; font-size: 1.1rem; display: block; margin: 5px 0;">
                ${item.sao} (${item.hanh})
            </span>
            <span style="color: #cfcfcf; line-height: 1.6;">${item.y_nghia}</span>
        </div>`;
}

const DATA_HOA_GIAI = {
    'Tuyệt Mệnh': {
        'Mộc': { phap: 'Tuyệt Mệnh sát thuộc Kim trực tiếp khắc hại bản mệnh Mộc của gia chủ, lại tọa lạc ở phương vị ${phuongHuong} (${hanhPhuongVi}). Đây là thế trận cực hung "Quỷ Sai Lộ Xương", tàn phá nghiêm trọng cả sức khỏe lẫn tài lộc, khiến sự nghiệp dễ bị gián đoạn, gia đạo bất an.', vat: 'Sử dụng vật phẩm hành Thủy cao cấp như <strong>Hồ Lô Thủy Tinh Xanh Lam</strong> hoặc <strong>Bình Nước An Nhẫn Phong Thủy</strong> đặt tại phương vị này. Thủy đóng vai trò cầu nối chuyển hóa liên hoàn (Kim sát sinh Thủy - Thủy tương sinh bồi đắp Mộc mệnh), vừa hóa giải triệt để tính hung ác của Tuyệt Mệnh Kim, vừa quay lại nuôi dưỡng bản thể chủ mệnh phát triển viên mãn, mang lại vượng khí lâu dài.' },
        'Hỏa': { phap: 'Tuyệt Mệnh Kim sát gặp Cung Mệnh Hỏa của gia chủ. Mặc dù Hỏa mệnh có thể khắc chế được Kim sát, nhưng bản thể gia chủ sẽ bị hao tổn nguyên khí và kiệt quệ sinh lực rất nặng khi phải gồng gánh chống chọi lâu dài với Sát tinh tại phương vị này.', vat: 'Bố trí linh vật thuộc hành Mộc tinh khiết như <strong>Hồ Lô Gỗ Đào Lâu Năm Kinh Chú</strong> hoặc <strong>Gậy Như Ý Gỗ Sưa</strong>. Mộc đóng vai trò chất xúc tác làm dịu sự xung đột mạch khí giữa phương vị và bản mệnh, đồng thời gia tăng Hỏa lực chính khí nội tại giúp gia chủ thiêu rụi triệt để tà khí Tuyệt Mệnh, chuyển hung thành cát.' },
        'Thổ': { phap: 'Tuyệt Mệnh Kim sát hút cạn sinh khí từ Cung Mệnh Thổ của gia chủ (Thổ phải sinh xuất nuôi Kim hung tinh), khiến gia đạo lâm vào thế hao tài tốn của, sức khỏe suy kiệt lâm bệnh hiểm nghèo.', vat: 'Đặt một <strong>Cặp Tỳ Hưu bằng Đá Thạch Anh Đỏ hoặc Hồng</strong> (thuộc hành Hỏa) tại vị trí này. Năng lượng Hỏa thần từ đá tự nhiên sẽ trực tiếp thiêu đốt, áp chế và tiêu diệt Tuyệt Mệnh Kim sát, đồng thời Hỏa sinh Thổ bồi hoàn lại năng lượng gốc bệ vững cho bản mệnh gia chủ, giúp gia đạo vững vàng vượt qua tai ương.' },
        'Kim': { phap: 'Tuyệt Mệnh Kim sát đồng hành cùng bản mệnh Kim tạo nên thế trận "Tỷ Kiếp Trợ Sát", làm sát khí hệ Kim kết tụ lại dồn dập, đẩy mạnh họa phá sản và tai nạn bất ngờ lên mức cực đại.', vat: 'Bài trí <strong>Quả Cầu Thạch Anh Đen</strong> hoặc <strong>Đĩa Thất Tinh Thạch Anh Khói</strong> (thuộc hành Thủy) để tiết hao, rút cạn năng lượng dư thừa của Tuyệt Mệnh Kim sát một cách êm dịu nhất mà không làm tổn hại hay xung đột đến bản mệnh Kim của gia chủ.' },
        'Thủy': { phap: 'Gia chủ mệnh Thủy được Tuyệt Mệnh Kim sinh xuất, nhìn qua ngỡ là tốt nhưng thực tế đây là dòng Thủy nhiễm tạp chất sát khí nặng nề, gây rối loạn tâm trí, u uất và dính líu pháp lý.', vat: 'Bố trí một <strong>Tháp Văn Xương Đá Thạch Anh Xanh Lục</strong> hoặc các chậu <strong>Cây Xanh Thủy Sinh Vượng Khí</strong> (thuộc hành Mộc) để hút sạch dòng nước lũ chứa sát khí, lọc sạch uế khí, biến nguy thành cơ an lành, giúp gia chủ tâm thái sáng suốt, vượng tài.' }
    },
    'Ngũ Quỷ': {
        'Kim': { phap: 'Ngũ Quỷ Hỏa tinh thiêu đốt trực diện Cung Mệnh Kim của gia chủ, tạo thế trận "Lửa Thiêu Cốt Tủy", sinh ra tai họa hoạn nạn ập đến bất ngờ, thị phi quấy phá khốc liệt và hao tán tài sản thần tốc.', vat: 'Đặt một <strong>Đĩa Thất Tinh Thạch Anh Vàng</strong> hoặc <strong>Tượng Tỳ Hưu Ngọc Hoàng Long Nguyên Khối</strong> (thuộc hành Thổ). Thổ đóng vai trò lá chắn tối thượng hút hết hỏa khí hung tàn của Ngũ Quỷ, sau đó Thổ lại quay sang tương sinh chuyển hóa bồi bổ năng lượng cường đại cho mệnh Kim của chủ nhà.' },
        'Mộc': { phap: 'Ngũ Quỷ Hỏa tinh rút cạn tinh huyết năng lượng của Cung Mệnh Mộc (Mộc phải sinh xuất cho Hỏa sát), khiến gia chủ hao mòn trí lực, kinh doanh thua lỗ, gia đạo lục đục không yên.', vat: 'Treo <strong>Chuông Gió Đồng Pháp Khí 6 Thanh</strong> kết hợp đặt <strong>Tháp Văn Xương Bằng Đồng Nguyên Khối</strong> (thuộc hành Kim). Kim lực mạnh mẽ sẽ chặt đứt mạch liên kết tà tính của Hỏa tinh tại phương vị này, giải phóng bản mệnh Mộc khỏi thế kiệt quệ.' },
        'Thủy': { phap: 'Cung Mệnh Thủy xung đột trực diện kịch liệt với Ngũ Quỷ Hỏa tinh, hình thành cục diện đại kỵ "Thủy Hỏa Vị Tế", làm dòng khí trong nhà đảo điên, vợ chồng ly tán, tinh thần bất an.', vat: 'Sử dụng vật phẩm chứa linh khí Mộc cao như <strong>Hồ Lô Gỗ Đào Tự Nhiên Thần Chú</strong> hoặc <strong>Tranh Trúc Chỉ Phong Thủy</strong> tại phương vị này để chuyển hóa tương khắc thành thế sinh sát thuần khiết: Thủy sinh Mộc - Mộc sinh Hỏa (thuần hóa thuần thục ác tính Ngũ Quỷ thành ngọn lửa sinh hoạt lành tính).' },
        'Hỏa': { phap: 'Ngũ Quỷ Hỏa kết hợp với bản mệnh Hỏa tạo thành ngọn lửa hung tàn thiêu rụi toàn bộ hậu vận, khiến tính khí thành viên gia đình nóng nảy thất thường, dễ vướng vào tranh chấp luật pháp bĩ cực.', vat: 'Bố trí một <strong>Lu Nước Phong Thủy Tuần Hoàn Màu Đen</strong> hoặc đặt <strong>Quả Cầu Thạch Anh Tím trên Đế Thạch Anh Thô</strong> (thuộc hành Thổ) giúp hấp thu toàn bộ nhiệt lượng tiêu cực dư thừa, bình ổn hoàn toàn trật tự năng lượng.' },
        'Thổ': { phap: 'Mệnh Thổ vô tình hấp thụ năng lượng Hỏa từ Ngũ Quỷ tinh. Dù là mối quan hệ sinh nhưng do nạp phải dòng khí độc hại của sát tinh, gia chủ dễ rơi vào trạng thái trì trệ, suy nghĩ tiêu cực, chịu nhiều u uất.', vat: 'Sử dụng <strong>Gương Bát Quái Gỗ Đào</strong> ở cửa hoặc đặt <strong>Cặp Kỳ Lân Bằng Đồng</strong> (thuộc hành Kim) tại phương vị này nhằm tiết giảm triệt để Thổ khí đã bị nhiễm độc tà khí, trả lại sự thanh tịnh cho dương trạch.' }
    },
    'Lục Sát': {
        'Hỏa': { phap: 'Lục Sát Thủy tinh dập tắt hoàn toàn sinh hỏa Cung Mệnh của gia chủ, sinh ra thế trận "Hàn Băng Thấm Cốt", gây chứng đau đầu kinh niên, mâu thuẫn nội bộ gia đình gay gắt và cắt đứt mạch tình duyên nhân duyên tốt đẹp.', vat: 'Bố trí các chậu cây lớn như <strong>Cây Phát Tài Núi</strong> hoặc bài trí <strong>Vật Phẩm Gỗ Trầm Hương Cao Cấp</strong> (thuộc hành Mộc) tại góc này. Mộc lực sẽ như một chiếc máy bơm hút cạn dòng nước độc Lục Sát Thủy tinh, sau đó chuyển hóa sinh khí Mộc sinh Hỏa tiếp ứng bồi bổ trực tiếp cho bản mệnh gia chủ.' },
        'Kim': { phap: 'Cung Mệnh Kim bị Lục Sát Thủy bào mòn rò rỉ khí lực nghiêm trọng, khiến tiền tài trong nhà thất thoát không rõ nguyên nhân, đầu tư thua lỗ trắng tay.', vat: 'Sử dụng <strong>Ấn Rồng Thạch Anh Vàng</strong> hoặc đặt <strong>Khối Đá Thạch Anh Vàng Tự Nhiên</strong> (thuộc hành Thổ) để đắp đê chắn sóng, trấn át hoàn toàn sự rò rỉ năng lượng của mạch Kim qua dòng Thủy sát.' },
        'Thổ': { phap: 'Mệnh Thổ của gia chủ phải vắt kiệt sức lực để ngăn chặn Lục Sát Thủy tinh quấy phá phương vị, dẫn tới bản thể bị kiệt quệ, sự nghiệp gặp bế tắc và tiểu nhân hãm hại sau lưng.', vat: 'Treo một thanh <strong>Kiếm Gỗ Đào Pháp Khí Thất Tinh</strong> hoặc bài trí <strong>Tượng Tỳ Hưu bằng Gỗ Đào quý</strong> (thuộc hành Mộc). Mộc sẽ đứng ra thu nạp mạch khí Thủy của Lục Sát, nới lỏng thế bóp nghẹt áp lực lên Thổ mệnh gia chủ.' },
        'Mộc': { phap: 'Mệnh Mộc được Thủy tương sinh, nhưng Lục Sát Thủy lại mang âm khí quá nặng, tựa như dòng nước ngập úng làm thối rữa rễ cây, gây ra những tai tiếng thị phi từ trên trời rơi xuống.', vat: 'Thiết lập hệ thống <strong>Đèn Chiếu Sáng Quang Phổ Ấm Cường Độ Cao</strong> (thuộc hành Hỏa) kết hợp các <strong>Thảm Trải Màu Đỏ/Hồng</strong> tại phương vị này nhằm dùng dương hỏa thiêu đốt, sấy khô tính chất âm hàn, lạnh lẽo hung hiểm của Thủy sát.' },
        'Thủy': { phap: 'Lục Sát Thủy tinh hòa cùng Cung Mệnh Thủy tạo thành thế lũ quét cuốn trôi hoàn toàn gia sản, của cải tích lũy và phá vỡ sự bình yên vốn có.', vat: 'Bố trí <strong>Tháp Cây Xanh Vạn Niên Thanh Thủy Sinh</strong> hoặc đặt <strong>Cặp Tỳ Hưu bằng Gỗ Đào Kinh Chú</strong> (thuộc hành Mộc) để làm vật trung gian hút bớt hung tính dữ dội của dòng nước lũ phong thủy này.' }
    },
    'Họa Hại': {
        'Thủy': { phap: 'Họa Hại Thổ sát vùi lấp hoàn toàn mạch tài lộc và Cung Mệnh Thủy của gia chủ, bóp nghẹt các cơ hội thăng tiến, khiến cuộc sống ngập tràn rủi ro vụn vặt bực dọc.', vat: 'Treo một chiếc <strong>Chuông Gió Bằng Đồng Kim Loại Cực Nhạy</strong> kết hợp đặt <strong>Cặp Kỳ Lân Bằng Đồng Nguyên Khối Trấn Trạch</strong> (thuộc hành Kim). Kim lực sẽ đứng ra hút kiệt Thổ khí tích tụ của Họa Hại tinh, giải phóng hoàn toàn cho mạch Thủy bản mệnh của chủ nhà lưu thông hanh thông.' },
        'Mộc': { phap: 'Cung Mệnh Mộc phải vắt kiệt sức để khắc chế khối Thổ sát của Họa Hại tinh, làm tinh thần mệt mỏi, suy nhược thần kinh và công việc bị trì trệ bế tắc triền miên.', vat: 'Bố trí <strong>Quả Cầu Thạch Anh Trắng Tự Nhiên</strong> hoặc đặt <strong>Hồ Lô Bằng Đồng Đúc</strong> (thuộc hành Kim). Thiết lập thế trận cân bằng dòng khí ngũ hành mới, cởi trói hoàn toàn áp lực đè nặng lên bản mệnh Mộc.' },
        'Hỏa': { phap: 'Cung Mệnh Hỏa sinh xuất cho Họa Hại Thổ sát, vô tình tiếp thêm năng lượng khiến Hung tinh ngày một bành trướng dữ dội, quay lại quấy nhiễu tàn phá gia đạo nặng nề.', vat: 'Bố trí một <strong>Bình Nước An Nhẫn Phong Thủy Đại Gia Trì</strong> hoặc bài trí các linh vật mang sắc <strong>Đen hoặc Xanh Dương</strong> (thuộc hành Thủy) nhằm phong tỏa hoàn toàn gốc rễ Hỏa sinh Thổ tiêu cực, dập tắt sự phát tán của Hung tinh.' },
        'Kim': { phap: 'Mệnh Kim nhận sự tương sinh từ Thổ sát, nhưng đây là dòng sinh độc hại, mang theo rủi ro, ốm đau vụn vặt bám đuổi dai dẳng.', vat: 'Bài trí <strong>Chậu Cây Thạch Anh Tóc Xanh</strong> hoặc dán <strong>Phù Chú Mộc Trấn Trạch</strong> (thuộc hành Mộc) tại góc này nhằm phá vỡ cấu trúc tích tụ đất đá cứng nhắc của Thổ sát, triệt tiêu hung tính từ gốc rễ.' },
        'Thổ': { phap: 'Họa Hại Thổ sát đồng hành cùng Cung Mệnh Thổ tạo nên cục diện "Bãi Đất Hoang Trì Trệ", làm mất đi toàn bộ động lực phát triển, cuộc sống rơi vào vòng lặp bế tắc vô định.', vat: 'Sử dụng <strong>Kiếm Thất Tinh Bằng Đồng</strong> hoặc bài trí <strong>Tháp Văn Xương Bằng Đồng Gỗ Đại Pháp Cụ 9 Tầng</strong> (thuộc hành Kim) nhằm đục phá, đập tan khối Thổ khí đang ứ đọng bĩ cực.' }
    }
};
function sinhMatPhapHoaGiai(mucDich, cungSat, hanhChu, phuongHuong, code) {
    // Lấy hành phương vị an toàn
    let hanhPhuongVi = (typeof phươngVịThiếtLập !== 'undefined' && phươngVịThiếtLập[code]) 
                       ? phươngVịThiếtLập[code].ngũHành : "Thổ";
    
    // Tra cứu dữ liệu từ Object
    let data = DATA_HOA_GIAI[cungSat] ? DATA_HOA_GIAI[cungSat][hanhChu] : null;
    if (!data) return "Dữ liệu hóa giải chưa được thiết lập cho cung này.";

    // Thay thế biến trong văn bản gốc
    let phuongPhapBaoQuoc = data.phap.replace("${phuongHuong}", phuongHuong).replace("${hanhPhuongVi}", hanhPhuongVi);
    let vatPhamToiThuong = data.vat;

    // Logic thuyết minh ngữ cảnh
    let thuyetMinhViTri = "";
    if (['house', 'altar', 'bed', 'workspace'].includes(mucDich)) {
        thuyetMinhViTri = `Thiết lập nhìn về phương vị bị phạm đại kỵ Sát tinh <strong>${cungSat}</strong>. ${phuongPhapBaoQuoc}`;
    } else if (mucDich === 'kitchen') {
        thuyetMinhViTri = `Bếp nấu đang đặt đè sai lên cung tốt, thiêu rụi phước báu. Đồng thời nếu rơi vào thế hung tinh bị kích động nghịch chiều: ${phuongPhapBaoQuoc}`;
    } else {
        thuyetMinhViTri = `Khu vực xả uế đặt đè lên cát tinh làm tổn hại tài lộc. Chiếu theo mật pháp đối sánh: ${phuongPhapBaoQuoc}`;
    }

    return `<br><br>
        <span style="font-weight: bold; font-size: 0.95rem; display: inline-block; margin-bottom: 6px; color: var(--red);">
            ◆ MẬT PHÁP ĐẠI THUẬT HÓA GIẢI LIÊN HOÀN (HUNG TINH × PHƯƠNG VỊ × MỆNH CHỦ):
        </span><br>
        <span style="color: #ffffff;"><strong style="color: var(--red);">[Phân Tích Bản Chất]:</strong> ${thuyetMinhViTri}</span><br><br>
        <span style="color: #ffffff;"><strong style="color: var(--red);">[Mật Pháp Vật Phẩm Tối Thượng]:</strong> ${vatPhamToiThuong}</span>`;
}

function getLuanDoanChiTiet(huong, son) {
    var dataHuong = MaTranMinhChau[huong];
    var info = (dataHuong && dataHuong[son]) ? dataHuong[son] : null;

    if (!info) {
        return '<div style="padding: 10px; color: #888; font-style: italic;">Chưa có dữ liệu chi tiết cho sơn này.</div>';
    }

    var isCat = (info.loai === "Cát");
    var color = isCat ? "#30d158" : "#ff3b30";
    var bgColor = isCat ? "rgba(48, 209, 88, 0.1)" : "rgba(255, 59, 48, 0.1)";

    // Dùng dấu nháy đơn hoặc kép để nối chuỗi thủ công, KHÔNG dùng dấu ` ở đây
    var html = '<div style="background: ' + bgColor + '; padding: 12px; border-radius: 8px; border: 1px solid ' + color + '; margin-top: 10px;">';
    html += '<div style="display: flex; justify-content: space-between; margin-bottom: 5px;">';
    html += '<b style="color: ' + color + '; font-size: 0.95rem;">' + info.loai + ' Tinh: ' + info.cap_do + ' (' + info.nhom + ')</b>';
    html += '<span style="color: ' + color + '; font-weight: bold;">' + info.diem + '/100</span></div>';
    html += '<div style="font-size: 0.88rem; color: #fff; line-height: 1.4;">' + info.text + '</div>';
    
    if (info.giaiphap) {
        html += '<div style="margin-top: 8px; font-size: 0.82rem; color: #ccc; border-top: 1px dashed ' + color + '; padding-top: 5px;">';
        html += '<b>Giải pháp:</b> ' + info.giaiphap + '</div>';
    }
    
    html += '</div>';
    return html;
}

function updateCompassUI(heading) {
    currentHeading = Math.round(heading);
    compass.style.transform = `rotate(${-heading}deg)`;
    needle.style.transform = `rotate(0deg)`;
    compassSlider.value = currentHeading;

    // ==================== 1. XÁC ĐỊNH 8 CUNG ====================
    let currentCung = "";
    let currentCode = "";
    if (currentHeading >= 338 || currentHeading < 23) {
        currentCung = "KHẢM (BẮC)"; currentCode = "N";
    } else if (currentHeading >= 23 && currentHeading < 68) {
        currentCung = "CẤN (ĐÔNG BẮC)"; currentCode = "NE";
    } else if (currentHeading >= 68 && currentHeading < 113) {
        currentCung = "CHẤN (ĐÔNG)"; currentCode = "E";
    } else if (currentHeading >= 113 && currentHeading < 158) {
        currentCung = "TỐN (ĐÔNG NAM)"; currentCode = "SE";
    } else if (currentHeading >= 158 && currentHeading < 203) {
        currentCung = "LY (NAM)"; currentCode = "S";
    } else if (currentHeading >= 203 && currentHeading < 248) {
        currentCung = "KHÔN (TÂY NAM)"; currentCode = "SW";
    } else if (currentHeading >= 248 && currentHeading < 293) {
        currentCung = "ĐOÀI (TÂY)"; currentCode = "W";
    } else if (currentHeading >= 293 && currentHeading < 338) {
        currentCung = "CÀN (TÂY BẮC)"; currentCode = "NW";
    }

    // ==================== 2. 24 SƠN ====================
    const data24Son = [{ son: "Nhâm", min: 337.5, max: 352.5, huong: "Bắc" }, { son: "Tý", min: 352.5, max: 7.5, huong: "Bắc" }, { son: "Quý", min: 7.5, max: 22.5, huong: "Bắc" }, { son: "Sửu", min: 22.5, max: 37.5, huong: "Đông Bắc" }, { son: "Cấn", min: 37.5, max: 52.5, huong: "Đông Bắc" }, { son: "Dần", min: 52.5, max: 67.5, huong: "Đông Bắc" }, { son: "Giáp", min: 67.5, max: 82.5, huong: "Đông" }, { son: "Mão", min: 82.5, max: 97.5, huong: "Đông" }, { son: "Ất", min: 97.5, max: 112.5, huong: "Đông" }, { son: "Thìn", min: 112.5, max: 127.5, huong: "Đông Nam" }, { son: "Tốn", min: 127.5, max: 142.5, huong: "Đông Nam" }, { son: "Tỵ", min: 142.5, max: 157.5, huong: "Đông Nam" }, { son: "Bính", min: 157.5, max: 172.5, huong: "Nam" }, { son: "Ngọ", min: 172.5, max: 187.5, huong: "Nam" }, { son: "Đinh", min: 187.5, max: 202.5, huong: "Nam" }, { son: "Mùi", min: 202.5, max: 217.5, huong: "Tây Nam" }, { son: "Khôn", min: 217.5, max: 232.5, huong: "Tây Nam" }, { son: "Thân", min: 232.5, max: 247.5, huong: "Tây Nam" }, { son: "Canh", min: 247.5, max: 262.5, huong: "Tây" }, { son: "Dậu", min: 262.5, max: 277.5, huong: "Tây" }, { son: "Tân", min: 277.5, max: 292.5, huong: "Tây" }, { son: "Tuất", min: 292.5, max: 307.5, huong: "Tây Bắc" }, { son: "Càn", min: 307.5, max: 322.5, huong: "Tây Bắc" }, { son: "Hợi", min: 322.5, max: 337.5, huong: "Tây Bắc" }];

    let gockim = (currentHeading % 360 + 360) % 360;
    let sơnHiệnTạiObj = data24Son.find(s => {
        if (s.min > s.max) return gockim >= s.min || gockim < s.max;
        return gockim >= s.min && gockim < s.max;
    }) || data24Son[1];
    let sơnHiệnTại = sơnHiệnTạiObj.son;
    degreeTxt.innerText = `${currentHeading}° - Phương ${currentCung} - Sơn ${sơnHiệnTại}`;

    // ==================== 3. LẤY DỮ LIỆU ====================
    const dayStr = document.getElementById('birthDay').value;
    const monthStr = document.getElementById('birthMonth').value;
    const yearStr = document.getElementById('birthYear').value;
    const mụcĐích = document.getElementById('purpose').value;
    const adviceBox = document.getElementById('pro-advice-box');
    const adviceContent = document.getElementById('advice-content');

    // ==================== KHO TÀNG PHÁP BẢO ====================
    const advices = { "Sinh Khí": "<strong>[CÁT TINH ĐẠI LỢI] Cách kích hoạt vượng khí tối đa trong Vận 9:</strong> Hướng này chủ về nhân đinh hưng vượng, thu hút tài lộc mạnh mẽ, giúp công danh sự nghiệp phát đạt.<br>👉 <em>Pháp bảo khuyên dùng:</em> <br>1. Đặt chậu cây xanh lớn đại diện cho hành Mộc (Thiết Mộc Lan, Kim Tiền) tại cửa ra vào để kéo khí trường.<br>2. Treo tranh mộc sinh hỏa hoặc đặt Tháp Văn Xương bằng gỗ chín tầng tại góc phương vị này để tăng tiến đường học hành, quan lộ.", "Thiên Y": "<strong>[CÁT TINH SỨC KHỎE] Cách gia tăng năng lượng hộ thân, trừ bệnh:</strong> Hướng chủ trì sức khỏe, tiêu bệnh trừ tai, giúp gia đạo bình an, trường thọ.<br>👉 <em>Pháp bảo khuyên dùng:</em> <br>1. Đặt một quả Hồ lô bằng đồng hoặc Hồ lô đá thạch anh vàng ngay đầu giường ngủ hoặc trước cửa phòng.<br>2. Bố trí bình gốm sứ cao cấp, đĩa ngọc thạch anh hành Thổ để bồi bổ sinh khí, giúp tạng phủ khỏe mạnh, ngủ ngon giác.", "Diên Niên": "<strong>[CÁT TINH GIA ĐẠO] Cách củng cố hòa khí, kết nối lương duyên bền vững:</strong> Hướng chủ về sự hòa thuận, củng cố quan hệ ngoại giao, gia đình êm ấm, vợ chồng đồng lòng.<br>👉 <em>Pháp bảo khuyên dùng:</em> <br>1. Đặt các vật phẩm chế tác bằng kim loại quý hành Kim như: Đôi uyên ương bằng đồng, hồ lô đồng nạp phúc.<br>2. Sử dụng thảm trải sàn màu trắng, xám ghi hoặc thạch anh trắng để thu hút năng lượng cát tường, gia đạo yên vui.", "Phục Vị": "<strong>[CÁT TINH TĨNH TÂM] Kích hoạt sự vững chãi, thi cử đỗ đạt:</strong> Hướng mang lại bình an, củng cố sức mạnh tinh thần, bản lĩnh, rất có lợi cho ban thờ và bàn làm việc.<br>👉 <em>Pháp bảo khuyên dùng:</em> <br>1. Đặt tháp nước phong thủy luận chuyển tuần hoàn (hành Thủy) hoặc quả cầu thủy tinh màu xanh biển sâu.<br>2. Đặt một chiếc gương nhỏ nhìn ra hướng cát hoặc bài trí biểu tượng cột buồm đón gió để duy trì năng lượng tiến thủ.", "Tuyệt Mệnh": "<strong>[ĐẠI HUNG TINH NGUY HIỂM] Phương án Hóa Giải Sát Khí tối thượng:</strong> Phương vị mang sát khí cực mạnh, dễ tổn hại đoản thọ, phá sản, bệnh tật nghiêm trọng.<br>👉 <em>Các giải pháp hóa giải linh hoạt (Chọn 1 trong các cách sau):</em><br>1. <b>Bảo pháp Kim khí:</b> Treo một chuông gió bằng đồng 6 thanh (Lục đế) hoặc đặt một cặp Tỳ Hưu bằng đồng nguyên chất để dùng hành Kim làm suy yếu tuyệt đối hung tinh.<br>2. <b>Trấn trạch chế sát:</b> Treo gương Bát Quái Gỗ Đào Lồi chính tông hướng ra ngoài cửa để phản xạ sát khí.<br>3. <b>Màu sắc điều hòa:</b> Sử dụng thảm trải màu xám tro hoặc màu trắng đặt ngay thềm cửa ra vào để thanh lọc tà khí.", "Ngũ Quỷ": "<strong>[HUNG TINH THỊ PHI] Phương án khắc chế hỏa khí, trừ tiểu nhân quấy phá:</strong> Dễ gây nóng nảy, kiện tụng, tổn hao tài sản, bị tiểu nhân đâm sau lưng.<br>👉 <em>Các giải pháp hóa giải linh hoạt (Chọn 1 trong các cách sau):</em><br>1. <b>Thủy pháp hóa sát:</b> Áp dụng nguyên lý 'Khôi phục bình hòa' - Đặt một lu nước sạch, bình thủy tinh chứa nước an nhẫn (nước muối loãng) hoặc quả cầu thạch anh đen tại vị trí này để dập tắt lửa Ngũ Quỷ.<br>2. Treo chuỗi tiền cổ Ngũ Đế bằng đồng ở ngạch cửa để dùng Kim sinh Thủy tiêu hao ác tính.", "Lục Sát": "<strong>[HUNG TINH TRỤC TRẶC] Cách hóa giải bất hòa gia đạo và mâu thuẫn tình cảm:</strong> Gây tranh chấp xích mích tai tiếng, tinh thần u uất, tình duyên lận đận.<br>👉 <em>Các giải pháp hóa giải linh hoạt (Chọn 1 trong các cách sau):</em><br>1. Đặt một bể cá phong thủy hoặc phong thủy luân (hành Thủy khí tốt) tại phương vị này để chuyển hóa năng lượng xung khắc thành dòng chảy êm dịu.<br>2. Sử dụng các đồ vật trang trí mang sắc xanh dương, đen hoặc treo rèm cửa màu tối để hấp thụ tà khí.", "Họa Hại": "<strong>[HUNG TINH HAO TÀI VỤN VẶN] Tiêu trừ năng lượng tiêu cực, xua đuổi rủi ro:</strong> Khiến công việc hay gặp trắc trở vụn vặt, muộn phiền, tiểu nhân quấy rầy.<br>👉 <em>Các giải pháp hóa giải linh hoạt (Chọn 1 trong các cách sau):</em><br>1. Đặt các vật phẩm chế tác từ đá tự nhiên thuộc hành Thổ hoặc Kim như: Gậy Như Ý bằng đồng, thạch anh trắng cát tường.<br>2. Treo một dải ruy băng đỏ phối đồng xu may mắn hoặc đặt các bức tượng chiêu tài bằng đồng để biến hung thành cát." };

    // ==================== 4. CHẾ ĐỘ THÔ ====================
    if (!dayStr || !monthStr || !yearStr || yearStr.length < 4) {
        elementBox.innerHTML = `<span class="element-badge" style="background: #3a3a3c;">Phương vị: ${phươngVịThiếtLập[currentCode]?.ngũHành || 'Không xác định'}</span>`;
       
        judgmentBox.innerText = "ĐO HƯỚNG CHÍNH XÁC";
        judgmentBox.className = "judgment-badge";
        judgmentBox.removeAttribute("style");
        judgmentBox.style.backgroundColor = "#222";
        judgmentBox.style.color = "var(--gold)";
        judgmentBox.style.border = "1px solid var(--gold)";
        detailBox.style.borderLeftColor = "var(--gold)";
        detailBox.innerHTML = `
            <span style="color:#ffffff;">Hệ thống đang chạy ở chế độ la bàn thực địa độ phân giải cao.<br>
            Tọa độ: <span class="gold-text">${currentHeading}°</span> | Phương: <b>${currentCung}</b> | Sơn: <span style="color:var(--gold); font-weight:bold;">${sơnHiệnTại}</span>.<br>
            Thích hợp đo đạc kiểm tra thông số long mạch, địa hình đất đai dương trạch.</span>`;
        if (adviceBox) adviceBox.style.display = 'none';
        kichHoatDenLedQuet(currentHeading);
        return;
    }

// ==================== 5. CHẾ ĐỘ CAO CẤP (BẢN HOÀN THIỆN - ĐÚNG TEXT GỐC) ====================
    // Kiểm tra an toàn trước khi truy cập đối tượng
    const hànhPhươngVị = phươngVịThiếtLập?.[currentCode]?.ngũHành || "N/A";
    const hànhMệnhChủ = bátTrạchMap?.[chủMệnh]?.element || "N/A";

    elementBox.innerHTML = `
        <span class="element-badge" style="background: #3a3a3c;">Phương vị: ${hànhPhươngVị}</span>
        <span class="element-badge" style="background: #2c2c2e; color: var(--gold)">Mệnh: ${hànhMệnhChủ}</span>
    `;

    // Khai báo biến an toàn
    const cungTrạch = bátTrạchMap?.[chủMệnh]?.[currentCode] || "Khác";
    const thôngTinCung = cungPhầnTrăm?.[cungTrạch] || { cát: true, ý_nghĩa: "Thông tin không xác định." };
    
    const namHienTai = new Date().getFullYear();
    // Đảm bảo hàm tinhHanCuuTinhTheoNam luôn trả về object hợp lệ
    const ketQua = typeof tinhHanCuuTinhTheoNam === 'function' 
        ? tinhHanCuuTinhTheoNam(sơnHiệnTạiObj?.huong || "Trung Cung", namHienTai) 
        : { thongTinSao: "Chưa có dữ liệu", meoGiaiHan: "" };
    
    let canhBaoCuuTinh = "";
    let giaiHanCuuTinh = "";
    const boxStyle = "margin-top:10px; padding:10px; border-radius:6px; font-size:0.85rem; line-height:1.4;";

    // Xử lý logic cảnh báo
    if (ketQua.thongTinSao.includes("⚠️")) {
        canhBaoCuuTinh = `<div style="${boxStyle} background:rgba(255,59,48,0.1); border:1px solid #ff3b30; color:#ff3b30;">
            <b style="display:block; margin-bottom:4px;">⚠️ CẢNH BÁO ${namHienTai}:</b>
            ${ketQua.thongTinSao.replace(/⚠️/g, '•')}
        </div>`;
        if (ketQua.meoGiaiHan) {
            giaiHanCuuTinh = `<div style="margin-top:5px; padding:8px 12px; background:rgba(255,159,10,0.1); border-left:3px solid #ff9f0a; color:#ff9f0a; font-size:0.82rem; border-radius:0 6px 6px 0;">
                <b>💡 Hóa giải:</b> ${ketQua.meoGiaiHan.replace('👉 Hóa giải: ', '')}
            </div>`;
        }
    } else {
        canhBaoCuuTinh = `<div style="${boxStyle} background:rgba(48,209,88,0.1); border:1px solid #30d158; color:#30d158; text-align:center;">
            ✅ ${ketQua.thongTinSao}
        </div>`;
    }

// --- LUẬN ĐOÁN MINH CHÂU (DẠNG TEXT THUẦN TÚY - CÓ GIẢI PHÁP ĐẸP) ---
    if (typeof MaTranMinhChau !== 'undefined' && MaTranMinhChau[chủMệnh]?.[sơnHiệnTại]) {
        const mc = MaTranMinhChau[chủMệnh][sơnHiệnTại];
        
        const isCat = mc.loai === 'Cát';
        const color = isCat ? '#30d158' : '#ff3b30';
        const label = isCat ? '[MINH CHÂU CÁT SƠN]' : '[MINH CHÂU HUNG SƠN]';
        
        // Phần thông tin Sơn/Hướng xám ghi, in nghiêng
        const thongSo = `<span style="color:#a0a0a0; font-style:italic;">Sơn ${sơnHiệnTại} (${sơnHiệnTạiObj?.huong}):</span>`;
        
        luanDoanSonChiTiet = `<b style="color:${color};">${label}</b> ${thongSo} ${mc.text}`;
        
        // Cải tiến phần GIẢI PHÁP: Màu sắc đồng bộ với tiêu đề, thêm icon 💡
        if (mc.giaiphap) {
            luanDoanSonChiTiet += `<br><br><span style="color:${color}; font-weight:bold;">💡 Giải pháp:</span> 
                                  <span style="color:#ffffff;">${mc.giaiphap}</span>`;
        }
    } else {
        luanDoanSonChiTiet = `<span style="color:#a0a0a0; font-style:italic;">Tọa độ: ${currentHeading}° | Sơn ${sơnHiệnTại} | Phương ${sơnHiệnTạiObj?.huong}.</span>`;
    }
// ==================== 6. XỬ LÝ THEO MỤC ĐÍCH (ĐÃ KHÔI PHỤC CHI TIẾT) ====================
const config = ConfigPhongThuy[mụcĐích] || { title: "Cung vị", isCat: true };
const isGood = config.isCat ? thôngTinCung.cát : !thôngTinCung.cát;

judgmentBox.removeAttribute("style");
judgmentBox.innerText = `${config.title}: ${cungTrạch}`;
judgmentBox.className = isGood ? "judgment-badge bg-good" : "judgment-badge bg-bad";
detailBox.style.borderLeftColor = isGood ? "var(--green)" : "var(--red)";

// --- LOGIC GỐC: TỰ ĐỘNG TRÍCH XUẤT VĂN BẢN CHI TIẾT ---
let noiDungDetail = "";

// Phần 1: Thông tin chính
noiDungDetail += '<div style="margin-bottom:15px; padding:12px; border-radius:8px; background:rgba(255,255,255,0.05); border-left: 4px solid ' + (isGood ? '#30d158' : '#ff3b30') + '">';
noiDungDetail += '<strong style="color: ' + (isGood ? '#30d158' : '#ff3b30') + '; font-size: 1.05rem; display:block; margin-bottom:5px;">';
noiDungDetail += '◆ ' + (!mụcĐích ? (isGood ? 'CÁT TINH' : 'HUNG TINH') : (isGood ? 'CÁT CÁCH' : 'HUNG CÁCH')) + ' (' + cungTrạch.toUpperCase() + '):</strong>';
noiDungDetail += '<span style="color:#ffffff; font-size:0.9rem;">';
if (!mụcĐích) {
    noiDungDetail += 'Góc xoay <span class="gold-text">' + currentHeading + '°</span> đối chiếu mệnh cung <strong>' + chủMệnh + '</strong> gặp cung tinh <strong>' + cungTrạch + '</strong>.<br>';
}
noiDungDetail += thôngTinCung.ý_nghĩa + '</span></div>';

// Phần 2: Hóa giải
if (!isGood) {
    const matPhap = (typeof sinhMatPhapHoaGiai === 'function') ? sinhMatPhapHoaGiai(mụcĐích, cungTrạch, hànhMệnhChủ, currentCung, currentCode) : "";
    const camNang = advices[cungTrạch] || "";
    noiDungDetail += '<div style="margin-bottom:15px; padding:12px; border-radius:8px; background:rgba(255,159,10,0.08); border:1px solid #ff9f0a;">';
    noiDungDetail += '<h4 style="color:#ff9f0a; margin:0 0 8px 0; font-size: 0.9rem;">🛠 PHÁP HÓA GIẢI TỔNG HỢP</h4>';
    noiDungDetail += '<div style="color:#fff; font-size:0.85rem; line-height:1.5;">' + matPhap;
    if (camNang) {
        noiDungDetail += '<br><b style="color:#dfb76c;">Danh mục vật phẩm bổ trợ:</b><div style="color:#ccc;">' + camNang.replace(/👉 <em>.*?<\/em>:<br>/, '') + '</div>';
    }
    noiDungDetail += '</div></div>';
}

// Phần 3: Thần sát (KHÔI PHỤC ĐẦY ĐỦ VĂN BẢN CHI TIẾT)
noiDungDetail += '<div style="margin-top:15px; padding: 12px; border-radius: 8px; background: rgba(0,0,0,0.2); border: 1px solid #d4af37;">';
noiDungDetail += '<div style="margin-bottom:12px;">';
noiDungDetail += '<b style="color:var(--gold); font-size: 0.95rem;">🎯 THẦN SÁT ĐỘ SỐ (24 SƠN CHI TIẾT):</b>';
// Đảm bảo dùng đúng biến luanDoanSonChiTiet mà bạn yêu thích
noiDungDetail += '<div style="margin-top:8px; color:#fff; font-size: 0.95rem; line-height: 1.6;">' + luanDoanSonChiTiet + '</div>';
noiDungDetail += '</div>';

// Vận hạn cửu tinh
noiDungDetail += '<div style="border-top: 1px dashed #444; padding-top: 10px;">';
noiDungDetail += '<b style="color:var(--gold); font-size: 0.95rem;">⏳ VẬN HẠN CỬU TINH (NĂM ' + namHienTai + '):</b>';
noiDungDetail += '<div style="margin-top:5px; color:#fff; font-size: 0.9rem; line-height: 1.5;">' + canhBaoCuuTinh + giaiHanCuuTinh + '</div>';
noiDungDetail += '</div>';
noiDungDetail += '</div>';

// Phần 4: Thiên thời
if (typeof sinhLuanGiaiThienThoi === 'function') {
    noiDungDetail += '<div style="margin-top:10px; font-size:0.85rem; color:#aaa; font-style:italic;">' + sinhLuanGiaiThienThoi(currentCode) + '</div>';
}

detailBox.innerHTML = noiDungDetail;

    // ==================== 7. ADVICE BOX ====================
    if (adviceBox && adviceContent) {
        adviceBox.style.display = advices[cungTrạch] ? 'block' : 'none';
        if (advices[cungTrạch]) adviceContent.innerHTML = advices[cungTrạch];
    }

    // ==================== 8. HIỆU ỨNG ====================
    kichHoatDenLedQuet(currentHeading);

    // Ghost Needle - CHỈ 1 LẦN
    if (targetAngle !== null && document.getElementById('ghostNeedle')) {
        const ghost = document.getElementById('ghostNeedle');
        ghost.style.opacity = "1";
        ghost.style.transform = `translate(-50%, -50%) rotate(${targetAngle - currentHeading}deg)`;
    }
}

/**
 * Hàm "Đỉnh cao": Không cần lưu trữ, tính toán trực tiếp
 * Trả về mảng tất cả các sát tinh tại hướng đó trong năm đó
 */
function getPhongThuySatTinh(huong, nam) {
    const results = [];
    
    // 1. Tính Ngũ Hoàng (Chu kỳ 9 năm)
    const cacHuongNguHoang = ["Trung Cung", "Tây Bắc", "Tây", "Đông Bắc", "Nam", "Bắc", "Tây Nam", "Đông", "Đông Nam"];
    const huongNguHoang = cacHuongNguHoang[(5 - ((nam - 2024) % 9) + 9) % 9];
    if (huong === huongNguHoang) results.push({ ten: "NGŨ HOÀNG ĐẠI SÁT", color: "#ff453a", giaiPhap: "Chuông gió đồng 6 thanh" });

    // 2. Tính Tam Sát (Theo Tam Hợp)
    const diaChiIndex = nam % 12;
    const diaChi = ["Thân", "Dậu", "Tuất", "Hợi", "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi"][diaChiIndex];
    let huongTamSat = "";
    if (["Dần", "Ngọ", "Tuất"].includes(diaChi)) huongTamSat = "Bắc";
    else if (["Thân", "Tý", "Thìn"].includes(diaChi)) huongTamSat = "Nam";
    else if (["Tỵ", "Dậu", "Sửu"].includes(diaChi)) huongTamSat = "Đông";
    else if (["Hợi", "Mão", "Mùi"].includes(diaChi)) huongTamSat = "Tây";
    
    if (huong === huongTamSat) results.push({ ten: "TAM SÁT", color: "#ff9f0a", giaiPhap: "Đặt đôi Kỳ Lân đồng" });

    return results; // Trả về mảng để bạn có thể hiển thị nhiều cảnh báo cùng lúc
}

// ====================== CACHE ELEMENTS - TỐI ƯU HIỆU SUẤT ======================
let sonTextsCache = null;
let huongLonTextsCache = null;
let saoTextsCache = null;

function cacheCompassElements() {
    if (sonTextsCache) return; // Chỉ cache 1 lần

    sonTextsCache = document.querySelectorAll("#sonRingSvg text");
    huongLonTextsCache = document.querySelectorAll("#chuHuongLonG text");
    saoTextsCache = document.querySelectorAll("#phucDucRingSvg text");
}

// ====================== HÀM CHÍNH - ĐÃ TỐI ƯU MÀ VẪN GIỐNG HỆT BẢN GỐC ======================
function kichHoatDenLedQuet(heading) {
    const ledTargetAngle = ((heading % 360) + 360) % 360;

    cacheCompassElements();

    // 1. Làm sáng chữ 8 Hướng Lớn
    huongLonTextsCache.forEach(txt => {
        const textGoc = parseFloat(txt.getAttribute("data-goc")) || 0;
        let phanSai = Math.abs(ledTargetAngle - textGoc);
        if (phanSai > 180) phanSai = 360 - phanSai;

        if (phanSai <= 22.5) {
            txt.style.opacity = "1";
            txt.style.fontWeight = "900";
            if (txt.getAttribute("fill") === "#00a525") {
                txt.style.fill = "#00ff37";
            } else if (txt.getAttribute("fill") === "#ff3b30") {
                txt.style.fill = "#ff1a00";
            }
        } else {
            txt.style.opacity = "0.5";
            txt.style.fontWeight = "normal";
            
            if (txt.parentNode.getAttribute("id") === "textChinhPhuong") {
                const transform = txt.getAttribute("transform") || "";
                txt.style.fill = (transform.includes("rotate(90") || transform.includes("rotate(270")) 
                    ? "#00a525" 
                    : "#ff3b30";
            } else {
                txt.style.fill = "#6b4e18";
            }
        }
    });

    // 2. Làm sáng chữ 24 Sơn
    sonTextsCache.forEach(txt => {
        const sonGoc = parseFloat(txt.getAttribute("data-son-goc")) || 0;
        let phanSai = Math.abs(ledTargetAngle - sonGoc);
        if (phanSai > 180) phanSai = 360 - phanSai;

        if (phanSai <= 7.5) {
            txt.style.opacity = "1";
            txt.style.fontSize = "13px";
            const origColor = txt.getAttribute("data-color");
            
            if (origColor === "#5c4314") {
                txt.style.fill = "#ffcc00";
            } else if (origColor === "#ff3b30") {
                txt.style.fill = "#ff0000";
            } else {
                txt.style.fill = "#00ff00";
            }
        } else {
            txt.style.opacity = "0.5";
            txt.style.fontSize = "10px";
            txt.style.fill = txt.getAttribute("data-color") || "#8a8a8f";
        }
    });

    // 3. Làm sáng Sao Phúc Đức
    saoTextsCache.forEach(txt => {
        const saoGoc = parseFloat(txt.getAttribute("data-sao-goc")) || 0;
        let phanSai = Math.abs(ledTargetAngle - saoGoc);
        if (phanSai > 180) phanSai = 360 - phanSai;

        if (phanSai <= 7.5) {
            txt.style.fill = "#ff4500";
            txt.style.opacity = "1";
            txt.style.fontSize = "8px";
        } else {
            txt.style.fill = "#7a623c";
            txt.style.opacity = "0.4";
            txt.style.fontSize = "6.5px";
        }
    });
}
// ==========================================================================
// THUẬT TOÁN KIM QUAY LA BÀN - PHIÊN BẢN TỐI ƯU (MƯỢT + ỔN ĐỊNH)
// ==========================================================================
let lastHeading = null;
let orientationListenerAdded = false;
let rafId = null;
let lastUpdateTime = 0;

const SMOOTH_MIN = 0.08;
const SMOOTH_MAX = 0.55;
const THROTTLE_MS = 16; // ~60fps

// ====================== HANDLE ORIENTATION - ĐÃ NÂNG CẤP ======================
function handleOrientation(event) {
    let rawHeading = null;

    // Ưu tiên webkitCompassHeading cho iOS (chính xác nhất)
    if (event.webkitCompassHeading !== undefined && event.webkitCompassHeading !== null) {
        rawHeading = event.webkitCompassHeading;
    } 
    else if (event.alpha !== undefined && event.alpha !== null) {
        rawHeading = (360 - event.alpha) % 360;
    }

    if (rawHeading === null) return;

    // Khóa khi đang kéo slider thủ công
    if (document.activeElement?.id === 'compassSlider') return;

    const now = Date.now();
    if (now - lastUpdateTime < THROTTLE_MS && lastHeading !== null) {
        return; // Throttle để tránh update quá nhanh
    }
    lastUpdateTime = now;

    // Khởi tạo lần đầu
    if (lastHeading === null) {
        lastHeading = rawHeading;
        updateCompassUI(lastHeading);
        if (typeof recalculateFate === 'function') recalculateFate();
        return;
    }

    // === Thuật toán lọc mượt động ===
    let diff = rawHeading - lastHeading;
    if (diff > 180) diff -= 360;
    if (diff < -180) diff += 360;

    const absDiff = Math.abs(diff);
    let dynamicFactor = SMOOTH_MIN;

    if (absDiff > 12) {
        dynamicFactor = SMOOTH_MAX;
    } else if (absDiff > 1.5) {
        dynamicFactor = SMOOTH_MIN + (absDiff / 12) * (SMOOTH_MAX - SMOOTH_MIN);
    }

    const newHeading = lastHeading + diff * dynamicFactor;
    lastHeading = (newHeading % 360 + 360) % 360;

    // Sử dụng requestAnimationFrame để update UI mượt mà
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
        updateCompassUI(lastHeading);
    });
}

// ====================== MANUAL ROTATE (KÉO SLIDER) ======================
function manualRotate(value) {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return;

    lastHeading = (numValue % 360 + 360) % 360;
    
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
        updateCompassUI(lastHeading);
    });
}

function saveCurrentMember() {
    const name = document.getElementById('userName').value.trim();
    const gender = document.getElementById('gender').value;
    const dayStr = document.getElementById('birthDay').value;
    const monthStr = document.getElementById('birthMonth').value;
    const yearStr = document.getElementById('birthYear').value;

    // Kiểm tra đầu vào: Gọi với tiêu đề cảnh báo
    if (!name || name === "Người Tầm Phương") {
        showCustomAlert("Vui lòng nhập họ tên thật của thành viên gia đình!", "⚠️ Sai Lệch Dữ Liệu");
        return;
    }
    if (!dayStr || !monthStr || !yearStr) {
        showCustomAlert("Vui lòng điền hoàn chỉnh Ngày, Tháng, Năm sinh!", "⚠️ Sai Lệch Dữ Liệu");
        return;
    }

    let members = JSON.parse(localStorage.getItem('fengshui_members') || '[]');

    // Tạo thành viên mới
    const newMember = {
        id: Date.now(), 
        name,
        gender,
        birthDay: dayStr,
        birthMonth: monthStr,
        birthYear: yearStr
    };

    members.push(newMember);
    localStorage.setItem('fengshui_members', JSON.stringify(members));
    
    // THÀNH CÔNG: Gọi với tiêu đề tích cực
    showCustomAlert("Đã lưu thành viên: " + name, "✅ Thành Công");
    loadSavedMembers();
}

// 2. TẢI DANH SÁCH (Render ID vào thẻ HTML)
function loadSavedMembers() {
    const data = JSON.parse(localStorage.getItem('fengshui_members') || '[]');
    const savedPanel = document.getElementById('savedPanel'); // Đảm bảo bạn có ID này
    const savedContainer = document.getElementById('savedContainer');

    if (data.length === 0) {
        savedPanel.style.display = "none";
        return;
    }
    
    savedPanel.style.display = "block";
    savedContainer.innerHTML = "";
    
    data.forEach(m => {
        const chip = document.createElement('div');
        chip.className = 'saved-chip';
        // Truyền ID vào hàm selectMember và deleteMember
        chip.innerHTML = `
            <span onclick="selectMember(${m.id})">👤 ${m.name}</span>
            <span class="del-btn" onclick="deleteMember(event, ${m.id})">×</span>
        `;
        savedContainer.appendChild(chip);
    });
}

// 3. CHỌN THÀNH VIÊN (Dựa trên ID)
function selectMember(id) {
    const data = JSON.parse(localStorage.getItem('fengshui_members') || '[]');
    const m = data.find(item => item.id === id);
    
    if (m) {
        document.getElementById('userName').value = m.name;
        document.getElementById('userName').style.color = '#fff';
        document.getElementById('gender').value = m.gender;
        document.getElementById('birthDay').value = m.birthDay;
        document.getElementById('birthMonth').value = m.birthMonth;
        document.getElementById('birthYear').value = m.birthYear;
        recalculateFate();
    }
}

// 4. XÓA THÀNH VIÊN (Dựa trên ID)
function deleteMember(event, id) {
    event.stopPropagation();
    let data = JSON.parse(localStorage.getItem('fengshui_members') || '[]');
    data = data.filter(m => m.id !== id);
    localStorage.setItem('fengshui_members', JSON.stringify(data));
    loadSavedMembers();
}

// 5. RESET DỮ LIỆU
function clearAllData() {
    const btn = document.getElementById('btnReset');
    if (btn) {
        btn.classList.add('executing');
        setTimeout(() => btn.classList.remove('executing'), 400);
    }
    document.getElementById('userName').value = 'Người Tầm Phương';
    document.getElementById('userName').style.color = '#aaa';
    document.getElementById('gender').value = 'male';
    document.getElementById('birthDay').value = '';
    document.getElementById('birthMonth').value = '';
    document.getElementById('birthYear').value = '';
    document.getElementById('purpose').value = '';
    
    if (typeof targetAngle !== 'undefined') targetAngle = null;
    if (typeof ghostNeedle !== 'undefined') ghostNeedle.style.opacity = "0";
    
    recalculateFate();
}
const THONG_TIN_DAC_BIET = {
    "Càn": {
        "Càn": { luan: "Sơn Càn - Phục Vị, bình yên, sự nghiệp ổn định.", hoa: "Đại cát, không cần hóa giải." },
        "Khôn": { luan: "Sơn Khôn - Diên Niên, gia đạo hòa thuận, phúc lộc song toàn.", hoa: "Đại cát." }
    },
    "Khôn": {
        "Khôn": { luan: "Sơn Khôn - Phục Vị, an cư lạc nghiệp.", hoa: "Tốt, không cần hóa giải." },
        "Càn": { luan: "Sơn Càn - Diên Niên, sự nghiệp hanh thông, quý nhân phù trợ.", hoa: "Đại cát." }
    },
    "Cấn": {
        "Càn": { luan: "Sơn Càn (Thiên Y) - Vô cùng cát lợi, tài lộc vượng phát.", hoa: "Đại cát." },
        "Tuất": { luan: "Sơn Tuất - Phạm Cô Quả, thị phi, dễ tranh chấp.", hoa: "Đặt cặp Tỳ Hưu đồng hoặc xu Ngũ Đế." },
        "Hợi": { luan: "Sơn Hợi - Phạm Kiếp Tài, tiền bạc dễ hao tán.", hoa: "Đặt chậu cây xanh hoặc vật phẩm thủy để điều hòa." }
    },
    "Đoài": {
        "Càn": { luan: "Sơn Càn - Sinh Khí, danh vọng và tài lộc đều vượng.", hoa: "Đại cát." },
        "Khôn": { luan: "Sơn Khôn - Thiên Y, sức khỏe tốt, gia đạo an khang.", hoa: "Đại cát." }
    },
    "Chấn": {
        "Tốn": { luan: "Sơn Tốn - Diên Niên, sự nghiệp lâu bền.", hoa: "Đại cát." },
        "Ly": { luan: "Sơn Ly - Thiên Y, sức khỏe dồi dào, quý nhân giúp đỡ.", hoa: "Đại cát." }
    },
    "Tốn": {
        "Khảm": { luan: "Sơn Khảm - Thiên Y, tài lộc vượng, sức khỏe tốt.", hoa: "Đại cát." },
        "Chấn": { luan: "Sơn Chấn - Phục Vị, bình an, ổn định.", hoa: "Đại cát." }
    },
    "Ly": {
        "Chấn": { luan: "Sơn Chấn - Thiên Y, gặp dữ hóa lành, tài lộc bền vững.", hoa: "Đại cát." },
        "Tốn": { luan: "Sơn Tốn - Sinh Khí, vượng danh, vượng lộc.", hoa: "Đại cát." }
    },
    "Khảm": {
        "Tốn": { luan: "Sơn Tốn - Thiên Y, khí trường hanh thông.", hoa: "Đại cát." },
        "Ly": { luan: "Sơn Ly - Sinh Khí, vạn sự hanh thông.", hoa: "Đại cát." }
    }
};

function layThongTin24Son(doSo, cungPhi, namHienTai) {
    const data24Son = [
        { son: "Nhâm", min: 337.5, max: 352.5, huong: "Bắc" }, { son: "Tý", min: 352.5, max: 7.5, huong: "Bắc" },
        { son: "Quý", min: 7.5, max: 22.5, huong: "Bắc" }, { son: "Sửu", min: 22.5, max: 37.5, huong: "Đông Bắc" },
        { son: "Cấn", min: 37.5, max: 52.5, huong: "Đông Bắc" }, { son: "Dần", min: 52.5, max: 67.5, huong: "Đông Bắc" },
        { son: "Giáp", min: 67.5, max: 82.5, huong: "Đông" }, { son: "Mão", min: 82.5, max: 97.5, huong: "Đông" },
        { son: "Ất", min: 97.5, max: 112.5, huong: "Đông" }, { son: "Thìn", min: 112.5, max: 127.5, huong: "Đông Nam" },
        { son: "Tốn", min: 127.5, max: 142.5, huong: "Đông Nam" }, { son: "Tỵ", min: 142.5, max: 157.5, huong: "Đông Nam" },
        { son: "Bính", min: 157.5, max: 172.5, huong: "Nam" }, { son: "Ngọ", min: 172.5, max: 187.5, huong: "Nam" },
        { son: "Đinh", min: 187.5, max: 202.5, huong: "Nam" }, { son: "Mùi", min: 202.5, max: 217.5, huong: "Tây Nam" },
        { son: "Khôn", min: 217.5, max: 232.5, huong: "Tây Nam" }, { son: "Thân", min: 232.5, max: 247.5, huong: "Tây Nam" },
        { son: "Canh", min: 247.5, max: 262.5, huong: "Tây" }, { son: "Dậu", min: 262.5, max: 277.5, huong: "Tây" },
        { son: "Tân", min: 277.5, max: 292.5, huong: "Tây" }, { son: "Tuất", min: 292.5, max: 307.5, huong: "Tây Bắc" },
        { son: "Càn", min: 307.5, max: 322.5, huong: "Tây Bắc" }, { son: "Hợi", min: 322.5, max: 337.5, huong: "Tây Bắc" }
    ];

    // Tìm Sơn hiện tại
    let gockim = (doSo % 360 + 360) % 360;
    let sonHienTai = data24Son.find(s => (s.min > s.max) ? (gockim >= s.min || gockim < s.max) : (gockim >= s.min && gockim < s.max)) || data24Son[1];

    // Logic Bát Trạch cốt lõi
    const tayTu = ["Càn", "Khôn", "Cấn", "Đoài"];
    const huongTayTu = ["Tây Bắc", "Tây", "Tây Nam", "Đông Bắc"];
    const isCat = (tayTu.includes(cungPhi) === huongTayTu.includes(sonHienTai.huong));

    // Mặc định kết quả
    let result = {
        son: sonHienTai.son,
        huong: sonHienTai.huong,
        luanDoan: isCat ? `Sơn ${sonHienTai.son} là phương vị Cát của mệnh ${cungPhi}.` : `Sơn ${sonHienTai.son} phạm Hung phương so với mệnh ${cungPhi}.`,
        hoaGiai: isCat ? "Hướng tốt, khí trường ổn định." : "Hóa giải: Sử dụng vật phẩm phong thủy hành Kim/Thủy tùy theo ngũ hành hướng."
    };

    // Kiểm tra kho dữ liệu đặc biệt (Đỉnh cao tự động)
    const dacBiet = THONG_TIN_DAC_BIET[cungPhi]?.[sonHienTai.son];
    if (dacBiet) {
        result.luanDoan = dacBiet.luan;
        result.hoaGiai = dacBiet.hoa;
    }

    return result;
}

const DATA_THANSAT = {
    // Tam sát theo bộ Tam Hợp (đã bao hàm cả hướng chính xác hơn)
    tamSat: {
        "Dần Ngọ Tuất": "Bắc",   // Tam sát tại Hợi-Tý-Sửu
        "Thân Tý Thìn": "Nam",   // Tam sát tại Tỵ-Ngọ-Mùi
        "Tỵ Dậu Sửu": "Đông",    // Tam sát tại Dần-Mão-Thìn
        "Hợi Mão Mùi": "Tây"     // Tam sát tại Thân-Dậu-Tuất
    },
    // Thái Tuế theo Địa Chi (dễ dàng gọi qua chỉ số Index)
    thaiTue: ["Thân", "Dậu", "Tuất", "Hợi", "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi"],
    
    // Bổ sung: Định nghĩa phương vị của các Địa Chi để code chạy tự động
    phuongVi: {
        "Tý": "Bắc", "Ngọ": "Nam", "Mão": "Đông", "Dậu": "Tây",
        "Dần": "Đông Bắc", "Thân": "Tây Nam", "Tỵ": "Đông Nam", "Hợi": "Tây Bắc",
        "Sửu": "Đông Bắc", "Mùi": "Tây Nam", "Thìn": "Đông Nam", "Tuất": "Tây Bắc"
    }
};

function tinhHanCuuTinhTheoNam(huong, namHienTai) {
    const nam = namHienTai || new Date().getFullYear();
    const diaChiIndex = nam % 12; // 0: Thân, 1: Dậu...

    // 1. TÍNH NGŨ HOÀNG (Trung Cung theo năm)
    const cacHuong = ["Trung Cung", "Tây Bắc", "Tây", "Đông Bắc", "Nam", "Bắc", "Tây Nam", "Đông", "Đông Nam"];
    const viTriNguHoang = cacHuong[(5 - ((nam - 2024) % 9) + 9) % 9];

    // 2. TÍNH THÁI TUẾ & TUẾ PHÁ
    const tenChi = DATA_THANSAT.thaiTue[diaChiIndex];
    const huongThaiTue = getHuongByChi(tenChi); // Hàm phụ trợ bên dưới
    const huongTuePha = getHuongDoiXung(huongThaiTue);

    // 3. TÍNH TAM SÁT (Chính xác theo Tam Hợp)
    const tamHợp = nam % 12 >= 9 || nam % 12 <= 2 ? "Thân Tý Thìn" : 
                   nam % 12 <= 5 ? "Tỵ Dậu Sửu" : 
                   nam % 12 <= 8 ? "Hợi Mão Mùi" : "Dần Ngọ Tuất";
    const viTriTamSat = DATA_THANSAT.tamSat[tamHợp];

    // 4. LUẬN GIẢI TỰ ĐỘNG
    let warnings = [];
    if (huong === viTriNguHoang) warnings.push("⚠️ [Ngũ Hoàng]: Kỵ động thổ, sửa chữa, dễ sinh tai họa.");
    if (huong === huongThaiTue) warnings.push("⚠️ [Thái Tuế]: Phương vị chủ quản, không nên xung phạm.");
    if (huong === huongTuePha) warnings.push("⚠️ [Tuế Phá]: Phương vị xung chiếu, dễ vướng thị phi, hao tài.");
    if (huong === viTriTamSat) warnings.push("⚠️ [Tam Sát]: Hạn về tai nạn, bệnh tật, tranh chấp.");

    if (warnings.length === 0) {
        return { 
            thongTinSao: `✅ Vận hạn năm ${nam}: Hướng ${huong} bình hòa, không bị đại hung tinh xung chiếu.`, 
            meoGiaiHan: "Gia đạo an lành, cát tường như ý." 
        };
    }

    return {
        thongTinSao: `⚠️ CẢNH BÁO NĂM ${nam}: Hướng ${huong} phạm vào: ${warnings.join(" ")}`,
        meoGiaiHan: "👉 Hóa giải: Tránh động thổ. Sử dụng vật phẩm phong thủy (Hồ lô đồng, Kỳ lân hoặc chuông gió 6 thanh) để hóa giải sát khí tùy theo từng hạn."
    };
}

// --- HÀM PHỤ TRỢ (Để xác định phương vị chính xác) ---
function getHuongByChi(chi) {
    const map = { "Tý": "Bắc", "Ngọ": "Nam", "Mão": "Đông", "Dậu": "Tây", "Dần": "Đông Bắc", "Thân": "Tây Nam", "Tỵ": "Đông Nam", "Hợi": "Tây Bắc", "Thìn": "Đông Nam", "Tuất": "Tây Bắc", "Sửu": "Đông Bắc", "Mùi": "Tây Nam" };
    return map[chi];
}

function getHuongDoiXung(huong) {
    const map = { "Bắc": "Nam", "Nam": "Bắc", "Đông": "Tây", "Tây": "Đông", "Đông Bắc": "Tây Nam", "Tây Nam": "Đông Bắc", "Đông Nam": "Tây Bắc", "Tây Bắc": "Đông Nam" };
    return map[huong];
}

function showExplanation(sonName, textInfo, solInfo) {
    const modal = document.getElementById('infoModal');
    
    modal.innerHTML = `
        <div class="modal-content" style="background:#1c1c1e; color:#fff; border-radius:15px; width:90%; max-width:500px; max-height:85vh; display:flex; flex-direction:column; margin:auto; overflow:hidden; position:relative;">
            <div style="display:flex; justify-content:space-between; align-items:center; padding:12px 15px; border-bottom:1px solid #444;">
                <span style="font-weight:bold; font-size:1.1rem; color:#dfb76c;">Giải Thích: ${sonName}</span>
                <button onclick="event.stopPropagation(); closeModal();" style="background:transparent; border:none; color:#ff3b30; font-size:2rem; font-weight:bold; cursor:pointer; line-height:1; padding:0 5px; outline:none;">&times;</button>
            </div>
            
            <div id="modalBody" style="overflow-y:auto; padding:15px;">
                <div style="background:#2a2a2a; padding:15px; border-radius:10px; margin-bottom:20px;">
                    <p style="margin:0 0 10px 0; color:#dfb76c; font-weight:bold;">📍 THÔNG TIN SƠN VỊ:</p>
                    <p style="margin:0 0 5px 0;"><strong>Ý nghĩa:</strong> ${textInfo}</p>
                    <p style="margin:0; color:#30d158;"><strong>Giải pháp:</strong> ${solInfo}</p>
                </div>

                <div style="border-top:1px solid #444; padding-top:15px;">
                    <p style="margin:0 0 10px 0; color:#dfb76c; font-weight:bold;">📖 KIẾN THỨC PHONG THỦY:</p>
                    <p style="margin:5px 0; line-height:1.5;"><strong>1. Cung (Hướng) vs Sơn (Chi tiết):</strong><br>
                    Hướng là 45 độ tổng thể (Đại cục). Sơn là 15 độ chi tiết (Phân kim). Nếu Sơn đắc khí tốt hơn Cung, tại điểm đó vượng khí được nhân đôi.</p>
                    <p style="margin:10px 0; line-height:1.5;"><strong>2. Ý nghĩa thuật ngữ:</strong><br>
                    - <strong>Cát (Tốt):</strong> Sinh Khí, Thiên Y, Diên Niên, Phục Vị.<br>
                    - <strong>Hung (Xấu):</strong> Tuyệt Mệnh, Ngũ Quỷ, Lục Sát, Họa Hại.<br>
                    - <strong>Bình/Cô Quả:</strong> Trạng thái trung tính hoặc xấu nhẹ.</p>
                    <p style="margin:5px 0; font-style:italic; color:#8e8e93; line-height:1.5;">* Ví dụ: Hướng Tây là Diên Niên, nhưng Sơn Dậu lại là Sinh Khí. Nếu đặt vật phẩm đúng Sơn Dậu, bạn vừa được hưởng hòa thuận (Diên Niên), vừa kích hoạt tài lộc (Sinh Khí).</p>
                </div>
            </div>
        </div>
    `;

    // Khi bấm ra ngoài nền tối thì đóng
    modal.onclick = function(e) { if (e.target === modal) closeModal(); };
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('infoModal').style.display = 'none';
}

   // Hàm này bắt buộc phải có để nút bấm hoạt động
    function togglePanel() {
        const content = document.getElementById('panelContent');
        const arrow = document.getElementById('toggleArrow');
        if (content.style.display === 'none') {
            content.style.display = 'block';
            arrow.innerHTML = '▲';
        } else {
            content.style.display = 'none';
            arrow.innerHTML = '▼';
        }
    }
	
// ====================== XỬ LÝ CẤP QUYỀN VÀ TRUY CẬP CẢM BIẾN TIÊU CHUẨN ======================
function requestPermission() {
    const permBtn = document.getElementById('permission-btn');

    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
        // iOS / Safari cần requestPermission
        DeviceOrientationEvent.requestPermission()
            .then(permissionState => {
                closePermissionModal();
                if (permissionState === 'granted') {
                    localStorage.setItem('ios_compass_granted', 'true');
                    addOrientationListener();
                    if (permBtn) permBtn.style.display = 'none';
                    // KHÔNG hiện alert thành công (theo yêu cầu mới)
                } else {
                    if (typeof showCustomAlert === 'function') {
                        showCustomAlert("Bạn đã từ chối quyền truy cập cảm biến.\nBạn vẫn có thể xoay la bàn thủ công.", "Thông báo");
                    }
                }
            })
            .catch(err => {
                console.error(err);
                closePermissionModal();
                let errMsg = "Không thể kích hoạt cảm biến la bàn!\n\nSafari trên iOS yêu cầu trang web phải chạy trên HTTPS.";
                if (typeof showCustomAlert === 'function') showCustomAlert(errMsg);
                else alert(errMsg);
            });
    } else {
        // Android, Chrome, Firefox... không cần requestPermission
        closePermissionModal();
        addOrientationListener();
        if (permBtn) permBtn.style.display = 'none';
        // KHÔNG hiện alert "thành công" trên Android nữa
    }
}

function addOrientationListener() {
    if (orientationListenerAdded) return;

    if ('ondeviceorientationabsolute' in window) {
        window.addEventListener('deviceorientationabsolute', handleOrientation, true);
    } else if ('ondeviceorientation' in window) {
        window.addEventListener('deviceorientation', handleOrientation, true);
    } else {
        let noSensorMsg = "Thiết bị hoặc cấu hình trình duyệt hiện tại không hỗ trợ tính năng cảm biến la bàn.";
        if (typeof showCustomAlert === 'function') showCustomAlert(noSensorMsg);
        return;
    }
    orientationListenerAdded = true;
}

function closePermissionModal() {
    const modal = document.getElementById('iosPermissionModal');
    if (modal) modal.style.display = 'none';
}

// ====================== KHỞI TẠO ======================
window.onload = function() {
    // Khởi tạo các chức năng chính của app
    if (typeof render24SonRing === 'function') render24SonRing();
    if (typeof loadSavedMembers === 'function') loadSavedMembers();
    if (typeof recalculateFate === 'function') recalculateFate();

    const permBtn = document.getElementById('permission-btn');
    const modal = document.getElementById('iosPermissionModal');

    // Kiểm tra iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
                  (navigator.platform === 'MacIntel' && 'ontouchend' in document) ||
                  (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function');

    if (isIOS && modal) {
        // === iOS: Luôn hiện modal đẹp ===
        modal.style.display = 'flex';

        const hasGranted = localStorage.getItem('ios_compass_granted') === 'true';
        const modalTitle = modal.querySelector('h3');
        const modalText = modal.querySelector('p');
        const modalButton = modal.querySelector('button');

        if (hasGranted) {
            // Lần sau
            if (modalTitle) modalTitle.textContent = "KÍCH HOẠT LA BÀN";
            if (modalText) modalText.innerHTML = `Cảm biến la bàn đã được cấp quyền trước đó.<br><br>Nhấn để kích hoạt la bàn tự động.`;
            if (modalButton) {
                modalButton.textContent = "KÍCH HOẠT NGAY";
                modalButton.onclick = () => {
                    closePermissionModal();
                    addOrientationListener();
                };
            }
        } else {
            // Lần đầu
            if (modalTitle) modalTitle.textContent = "KÍCH HOẠT LA BÀN";
            if (modalText) modalText.innerHTML = `Để la bàn xoay tự động theo hướng điện thoại,<br>vui lòng cho phép truy cập cảm biến chuyển động.`;
            if (modalButton) modalButton.onclick = handleModalClick;
        }

        // Ẩn nút dự phòng
        if (permBtn) permBtn.style.display = 'none';
    } 
    else {
        // Android, Chrome, Firefox... → Tự động kích hoạt
        addOrientationListener();
        if (permBtn) permBtn.style.display = 'none';
    }
};

// Hàm xử lý cho lần đầu (gọi request của Safari)
function handleModalClick() {
    const modal = document.getElementById('iosPermissionModal');
    if (modal) modal.style.display = 'none';
    requestPermission();
}
let isFullScreen = false;
let originalCompassParent = null;

function toggleFullScreenMode() {
    if (isFullScreen) {
        exitFullScreenMode();
        return;
    }

    const compassContainer = document.querySelector('.compass-container');
    if (!compassContainer) return;

    originalCompassParent = compassContainer.parentElement;

    const statusPanel = document.querySelector('.status-panel');

    const fsDiv = document.createElement('div');
    fsDiv.id = 'fullscreenMode';
    fsDiv.className = 'fullscreen-mode active';

    fsDiv.innerHTML = `
        <div id="fs-compass-wrapper" style="width: 96vw; max-width: 460px; height: 96vw; max-height: 460px; margin: 20px auto 10px;"></div>
        <div id="fs-status-wrapper" style="width: 92%; max-width: 460px; margin: 0 auto;"></div>
    `;

    document.body.appendChild(fsDiv);

    // Di chuyển element thật
    document.getElementById('fs-compass-wrapper').appendChild(compassContainer);
    if (statusPanel) {
        document.getElementById('fs-status-wrapper').appendChild(statusPanel);
    }

    isFullScreen = true;

    // Cập nhật la bàn
    setTimeout(() => {
        if (typeof updateCompassUI === 'function' && typeof lastHeading !== 'undefined') {
            updateCompassUI(lastHeading);
        }
        if (typeof recalculateFate === 'function') recalculateFate();
    }, 180);
}

function exitFullScreenMode() {
    const fs = document.getElementById('fullscreenMode');
    if (!fs) return;

    const compass = document.querySelector('.compass-container');
    const status = document.querySelector('.status-panel');

    // 1. Kiểm tra an toàn trước khi di chuyển
    if (compass && originalCompassParent) {
        // Trả la bàn về nơi ở cũ
        originalCompassParent.appendChild(compass);

        // 2. Trả status panel về "đúng vị trí" so với la bàn
        // Nếu originalCompassParent là container gốc, statusPanel nên nằm ngay sau la bàn
        if (status) {
            // Sử dụng insertBefore để đảm bảo status luôn đứng sau compass
            originalCompassParent.insertBefore(status, compass.nextSibling);
        }
    }

    // 3. Dọn dẹp DOM
    fs.remove();
    isFullScreen = false;

    // 4. Giải phóng bộ nhớ và reset lại các trạng thái UI
    // Sử dụng requestAnimationFrame để đảm bảo trình duyệt đã render xong DOM mới
    requestAnimationFrame(() => {
        if (typeof updateCompassUI === 'function' && typeof lastHeading !== 'undefined') {
            updateCompassUI(lastHeading);
        }
        // Gọi lại recalculateFate nếu cần để đồng bộ dữ liệu
        if (typeof recalculateFate === 'function') {
            recalculateFate();
        }
    });
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
