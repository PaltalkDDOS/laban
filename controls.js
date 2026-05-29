 let debounceTimer;

// Ma trận Bát Trạch Minh Châu - HOÀN CHỈNH 192 CẶP (8 Mệnh x 24 Sơn)
const MaTranMinhChau = {
    "Khảm": {
        "Nhâm": { loai: "Cát", diem: 88, cap_do: "Đại Cát", nhom: "Phục Vị", hanh: "Thủy", goc_do_min: 337.5, goc_do_max: 352.5, icon: "star-green", linhvuc: ["tai_loc", "gia_dao", "nhan_dinh"], doi_tuong: ["nam_chu", "gia_dinh"], text: "Phục Vị đắc vị, gia đạo hưng vượng, khí trường an định, con cái thông tuệ.", giaiphap: "Kích hoạt bằng Tháp Văn Xương gỗ hoặc chậu cây xanh hành Mộc để dưỡng khí." },
        "Tý": { loai: "Cát", diem: 93, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Thủy", goc_do_min: 352.5, goc_do_max: 7.5, icon: "star-green", linhvuc: ["tai_loc", "cong_danh"], doi_tuong: ["nam_chu"], text: "Sinh Khí vượng tài, công danh hiển đạt, tài lộc hanh thông, vinh hoa phú quý.", giaiphap: "Sử dụng vật phẩm hành Mộc hoặc tượng Phúc Lộc Thọ để tăng cường cát khí." },
        "Quý": { loai: "Hung", diem: 32, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Thủy", goc_do_min: 7.5, goc_do_max: 22.5, icon: "alert-red", linhvuc: ["suc_khoe", "nhan_dinh"], doi_tuong: ["nu_chu", "con_cai"], text: "Phạm thế Họa Hại, khí trường xung đột, dễ ảnh hưởng sức khỏe nữ giới và nhân đinh.", giaiphap: "Sử dụng chuông gió đồng 6 thanh để tiết khí hoặc đặt thạch anh đen hóa giải." },
        "Sửu": { loai: "Hung", diem: 38, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Thổ", goc_do_min: 22.5, goc_do_max: 37.5, icon: "alert-red", linhvuc: ["tai_loc", "gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm thế Lục Sát, tài lộc thất thoát, gia đạo dễ phát sinh mâu thuẫn.", giaiphap: "Dùng vật phẩm hành Thủy (phong thủy luân) để thông quan, điều hòa khí trường." },
        "Cấn": { loai: "Hung", diem: 25, cap_do: "Đại Hung", nhom: "Ngũ Quỷ", hanh: "Thổ", goc_do_min: 37.5, goc_do_max: 52.5, icon: "alert-red", linhvuc: ["tai_loc", "suc_khoe"], doi_tuong: ["nam_chu"], text: "Phạm Ngũ Quỷ đại sát, gia chủ tổn tài, đề phòng tiểu nhân quấy phá và hỏa hoạn.", giaiphap: "Sử dụng gương Bát Quái gỗ đào hoặc Tỳ Hưu đồng trấn trạch, hóa sát." },
        "Dần": { loai: "Hung", diem: 30, cap_do: "Tiểu Hung", nhom: "Cô Quả", hanh: "Mộc", goc_do_min: 52.5, goc_do_max: 67.5, icon: "alert-red", linhvuc: ["nhan_dinh", "gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm thế Cô Quả, nhân đinh suy giảm, khó tụ tài lộc, gia đạo cô tịch.", giaiphap: "An bài đôi Uyên Ương đồng hoặc hồ lô đồng để nạp phúc, kết nối gia đạo." },
        "Giáp": { loai: "Cát", diem: 84, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Mộc", goc_do_min: 67.5, goc_do_max: 82.5, icon: "star-green", linhvuc: ["cong_danh", "tai_loc"], doi_tuong: ["nam_chu"], text: "Diên Niên quý nhân phò trợ, công danh hanh thông, gia nghiệp bền vững.", giaiphap: "Kích hoạt bằng tranh Mã Đáo hoặc Tháp Văn Xương để vượng khí." },
        "Mão": { loai: "Cát", diem: 86, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Mộc", goc_do_min: 82.5, goc_do_max: 97.5, icon: "star-green", linhvuc: ["tai_loc", "nhan_dinh"], doi_tuong: ["gia_dinh"], text: "Diên Niên tiến điền tài, gia sản tăng tiến, con cái thành đạt.", giaiphap: "Đặt chậu cây xanh hành Mộc để dưỡng vượng khí." },
        "Ất": { loai: "Hung", diem: 36, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Mộc", goc_do_min: 97.5, goc_do_max: 112.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Lục Sát thị phi, gia đạo bất hòa, dễ vướng kiện tụng tranh chấp.", giaiphap: "Sử dụng quả cầu thạch anh đen hoặc bình nước muối để hấp thụ sát khí." },
        "Thìn": { loai: "Hung", diem: 34, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Thổ", goc_do_min: 112.5, goc_do_max: 127.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Khẩu Thiệt, gia đạo tranh chấp, dễ vướng thị phi pháp luật.", giaiphap: "Dùng rèm cửa tối màu hoặc thạch anh khói để tĩnh khí, giảm xung đột." },
        "Tốn": { loai: "Hung", diem: 22, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Mộc", goc_do_min: 127.5, goc_do_max: 142.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["nam_chu"], text: "Phạm Tuyệt Mệnh sát phương, sức khỏe tổn hại, cần đặc biệt lưu tâm.", giaiphap: "Trấn trạch bằng gương Bát Quái và chuông gió đồng 6 thanh để hóa giải hung sát." },
        "Tỵ": { loai: "Hung", diem: 31, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Hỏa", goc_do_min: 142.5, goc_do_max: 157.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Họa Hại, quan phi khẩu thiệt, làm ăn dễ thất thoát.", giaiphap: "Đặt tượng Tỳ Hưu hoặc gậy Như Ý đồng để trấn áp tà khí." },
        "Bính": { loai: "Cát", diem: 89, cap_do: "Đại Cát", nhom: "Thiên Y", hanh: "Hỏa", goc_do_min: 157.5, goc_do_max: 172.5, icon: "star-green", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Thiên Y đắc vị, sức khỏe dồi dào, bệnh tật tiêu trừ, thân tâm an lạc.", giaiphap: "An bài hồ lô đồng hoặc thạch anh vàng để kích hoạt sức khỏe." },
        "Ngọ": { loai: "Cát", diem: 85, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Hỏa", goc_do_min: 172.5, goc_do_max: 187.5, icon: "star-green", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Diên Niên chính khí, gia đạo hòa hợp, ngoại giao thuận lợi.", giaiphap: "Sử dụng đôi Uyên Ương hoặc vật phẩm hành Thổ để an định gia đạo." },
        "Đinh": { loai: "Cát", diem: 95, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Hỏa", goc_do_min: 187.5, goc_do_max: 202.5, icon: "star-green", linhvuc: ["tai_loc", "nhan_dinh"], doi_tuong: ["nam_chu", "gia_dinh"], text: "Sinh Khí tối thượng, phát phúc nhanh chóng, nhân đinh hưng vượng.", giaiphap: "Kích hoạt bằng cây xanh và Tháp Văn Xương để vượng nhân đinh." },
        "Mùi": { loai: "Hung", diem: 33, cap_do: "Tiểu Hung", nhom: "Ngũ Quỷ", hanh: "Thổ", goc_do_min: 202.5, goc_do_max: 217.5, icon: "alert-red", linhvuc: ["nhan_dinh"], doi_tuong: ["gia_dinh"], text: "Phạm thế Bạch Hổ, tổn thương nhân đinh, đề phòng huyết quang.", giaiphap: "Sử dụng chuông gió và thạch anh đen để tiết khí sát thương." },
        "Khôn": { loai: "Hung", diem: 24, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Thổ", goc_do_min: 217.5, goc_do_max: 232.5, icon: "alert-red", linhvuc: ["tai_loc", "gia_dao"], doi_tuong: ["nam_chu"], text: "Phạm Tuyệt Mệnh sát khí, tài sản tiêu tán, gia đạo ly tán.", giaiphap: "Sử dụng gương Bát Quái và chuông gió đồng để hóa sát." },
        "Thân": { loai: "Hung", diem: 35, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Kim", goc_do_min: 232.5, goc_do_max: 247.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm thế Cô Thần, gia đạo bất hòa, vợ chồng dễ nảy sinh xung khắc.", giaiphap: "Đặt bình gốm hành Thổ để tiết khí Kim, hóa giải xung sát." },
        "Canh": { loai: "Cát", diem: 83, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Kim", goc_do_min: 247.5, goc_do_max: 262.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Đắc vị tiến tài, kinh doanh phát đạt, sự nghiệp hưng thịnh.", giaiphap: "Kích hoạt bằng vật phẩm hành Kim để tăng cường cát khí." },
        "Dậu": { loai: "Cát", diem: 81, cap_do: "Tiểu Cát", nhom: "Phục Vị", hanh: "Kim", goc_do_min: 262.5, goc_do_max: 277.5, icon: "star-green", linhvuc: ["cong_danh"], doi_tuong: ["nam_chu"], text: "Đạt cung Quý Nhân, có người phù trợ lúc khó khăn.", giaiphap: "Sử dụng tranh Phúc Lộc hoặc tượng Quan Công để củng cố quý nhân." },
        "Tân": { loai: "Hung", diem: 37, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Kim", goc_do_min: 277.5, goc_do_max: 292.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Họa Hại tai ương, tiền bạc ra vào thất thường, cần cẩn trọng đầu tư.", giaiphap: "Sử dụng thạch anh trắng hoặc gậy Như Ý để ổn định tài chính." },
        "Tuất": { loai: "Hung", diem: 29, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Thổ", goc_do_min: 292.5, goc_do_max: 307.5, icon: "alert-red", linhvuc: ["tai_loc", "suc_khoe"], doi_tuong: ["gia_dinh"], text: "Phạm Lục Sát chi khí, trộm cắp hao tài, gia đạo bất an.", giaiphap: "Treo chuỗi tiền Ngũ Đế và thạch anh đen để trấn áp, giữ của." },
        "Càn": { loai: "Hung", diem: 31, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Kim", goc_do_min: 307.5, goc_do_max: 322.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Lục Sát phương vị, tình duyên trục trặc, hao tổn tâm trí.", giaiphap: "Sử dụng rèm tối màu và bình nước để tiết khí, làm dịu khí trường." },
        "Hợi": { loai: "Bình", diem: 58, cap_do: "Bình Hòa", nhom: "Bình", hanh: "Thủy", goc_do_min: 322.5, goc_do_max: 337.5, icon: "circle-yellow", linhvuc: ["tai_loc"], doi_tuong: ["gia_dinh"], text: "Thế bình hòa tiểu hạn, tài lộc trung bình, nên quản lý tài chính thận trọng.", giaiphap: "Giữ không gian cân bằng, tránh động thổ hoặc thay đổi lớn tại phương vị này." }
    },

    "Khôn": {
        "Nhâm": { loai: "Hung", diem: 26, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Thổ", goc_do_min: 337.5, goc_do_max: 352.5, icon: "alert-red", linhvuc: ["suc_khoe", "tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Tuyệt Mệnh sát khí, khí trường bất ổn, cần chú trọng sức khỏe và bảo toàn tài chính.", giaiphap: "Sử dụng gương Bát Quái và chuông gió đồng 6 thanh để hóa giải hung sát." },
        "Tý": { loai: "Hung", diem: 30, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Thủy", goc_do_min: 352.5, goc_do_max: 7.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm thế Lục Sát, gia đạo thiếu hòa khí, dễ phát sinh thị phi, mâu thuẫn nội bộ.", giaiphap: "Đặt bình thủy tinh chứa nước muối để hấp thụ tà khí." },
        "Quý": { loai: "Hung", diem: 28, cap_do: "Đại Hung", nhom: "Ngũ Quỷ", hanh: "Thủy", goc_do_min: 7.5, goc_do_max: 22.5, icon: "alert-red", linhvuc: ["gia_dao", "suc_khoe"], doi_tuong: ["gia_dinh"], text: "Phạm Ngũ Quỷ đại sát, gia vận kém ổn định, cần phòng ngừa tiểu nhân và tai họa bất ngờ.", giaiphap: "An bài cặp Kỳ Lân đồng để trấn trạch và bình ổn khí trường." },
        "Sửu": { loai: "Cát", diem: 90, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Thổ", goc_do_min: 22.5, goc_do_max: 37.5, icon: "star-green", linhvuc: ["tai_loc", "nhan_dinh"], doi_tuong: ["nam_chu"], text: "Sinh Khí vượng tài, công danh thăng tiến, tài lộc hanh thông, vạn sự cát tường.", giaiphap: "Kích hoạt bằng cây xanh và Tháp Văn Xương để tăng cường vượng khí." },
        "Cấn": { loai: "Cát", diem: 91, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Thổ", goc_do_min: 37.5, goc_do_max: 52.5, icon: "star-green", linhvuc: ["tai_loc", "gia_dao"], doi_tuong: ["gia_dinh"], text: "Sinh Khí chính vị, phúc lộc dồi dào, gia nghiệp bền vững, nhân đinh hưng vượng.", giaiphap: "Đặt chậu cây xanh hoặc tượng tài lộc hành Thổ/Kim để vượng khí." },
        "Dần": { loai: "Cát", diem: 87, cap_do: "Đại Cát", nhom: "Thiên Y", hanh: "Mộc", goc_do_min: 52.5, goc_do_max: 67.5, icon: "star-green", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Thiên Y đắc vị, sức khỏe dồi dào, bệnh tật tiêu trừ, thân tâm an lạc.", giaiphap: "Sử dụng hồ lô đồng hoặc thạch anh vàng để nạp phúc, dưỡng sức khỏe." },
        "Giáp": { loai: "Hung", diem: 35, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Mộc", goc_do_min: 67.5, goc_do_max: 82.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm thế Họa Hại, dễ gặp thị phi, khẩu thiệt, làm việc khó đạt như ý.", giaiphap: "Sử dụng vật phẩm hành Thổ hoặc thạch anh đen để tiết khí Họa Hại." },
        "Mão": { loai: "Hung", diem: 24, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Mộc", goc_do_min: 82.5, goc_do_max: 97.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["nam_chu"], text: "Phạm Tuyệt Mệnh sát phương, hung sát mạnh, ảnh hưởng trực tiếp đến sức khỏe và nam chủ.", giaiphap: "Trấn trạch bằng gương Bát Quái gỗ đào để hóa sát." },
        "Ất": { loai: "Hung", diem: 33, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Mộc", goc_do_min: 97.5, goc_do_max: 112.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Phạm thế Họa Hại, khí trường trì trệ, gia đình dễ cảm thấy bất an, mệt mỏi.", giaiphap: "Đặt bình gốm hành Thổ để tiết bớt mộc khí, cân bằng năng lượng." },
        "Thìn": { loai: "Cát", diem: 82, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Thổ", goc_do_min: 112.5, goc_do_max: 127.5, icon: "star-green", linhvuc: ["gia_dao", "tai_loc"], doi_tuong: ["gia_dinh"], text: "Diên Niên đắc cách, gia đạo thuận hòa, công việc kinh doanh phát triển.", giaiphap: "Đặt đôi Uyên Ương đồng để củng cố gia đạo và tình cảm." },
        "Tốn": { loai: "Hung", diem: 29, cap_do: "Tiểu Hung", nhom: "Ngũ Quỷ", hanh: "Mộc", goc_do_min: 127.5, goc_do_max: 142.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Ngũ Quỷ, dễ thất thoát tài sản, cần đề phòng tiểu nhân quấy phá.", giaiphap: "Treo chuông gió đồng để tiết khí Ngũ Quỷ (Hỏa biến thành Kim)." },
        "Tỵ": { loai: "Hung", diem: 31, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Hỏa", goc_do_min: 142.5, goc_do_max: 157.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Lục Sát, gia đình dễ gặp chuyện kiện tụng, tranh chấp thị phi.", giaiphap: "Sử dụng rèm tối màu hoặc vật phẩm hành Thổ để an định lại khí trường." },
        "Bính": { loai: "Hung", diem: 23, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Hỏa", goc_do_min: 157.5, goc_do_max: 172.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["nam_chu"], text: "Phạm Tuyệt Mệnh, hung sát nghiêm trọng, cần tránh động thổ, chú trọng sức khỏe.", giaiphap: "Treo gương Bát Quái và vật phẩm hành Kim để hóa giải." },
        "Ngọ": { loai: "Hung", diem: 34, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Hỏa", goc_do_min: 172.5, goc_do_max: 187.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Họa Hại, làm ăn dễ hao tổn, nên thận trọng trong các quyết định tài chính.", giaiphap: "Đặt thạch anh trắng hoặc vật phẩm hành Thổ để tiết khí." },
        "Đinh": { loai: "Hung", diem: 32, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Hỏa", goc_do_min: 187.5, goc_do_max: 202.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Lục Sát, tình cảm vợ chồng dễ rạn nứt, thiếu sự cảm thông.", giaiphap: "Đặt bình nước muối để điều hòa khí trường, hóa giải xung khắc." },
        "Mùi": { loai: "Cát", diem: 80, cap_do: "Tiểu Cát", nhom: "Phục Vị", hanh: "Thổ", goc_do_min: 202.5, goc_do_max: 217.5, icon: "star-green", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phục Vị đắc cách, gia đạo an ninh, mọi việc ổn định, tài lộc vững chắc.", giaiphap: "Sử dụng thảm sáng màu hoặc thạch anh trắng để duy trì năng lượng." },
        "Khôn": { loai: "Cát", diem: 85, cap_do: "Tiểu Cát", nhom: "Phục Vị", hanh: "Thổ", goc_do_min: 217.5, goc_do_max: 232.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phục Vị chính bản cung, điền sản tăng tiến, vạn sự hanh thông, quý nhân giúp đỡ.", giaiphap: "Kích hoạt bằng vật phẩm hành Thổ hoặc vật phẩm chiêu tài." },
        "Thân": { loai: "Cát", diem: 83, cap_do: "Tiểu Cát", nhom: "Thiên Y", hanh: "Kim", goc_do_min: 232.5, goc_do_max: 247.5, icon: "star-green", linhvuc: ["suc_khoe", "tai_loc"], doi_tuong: ["gia_dinh"], text: "Thiên Y đắc vị, cơ thể khỏe mạnh, tài vận hanh thông, công việc thuận lợi.", giaiphap: "Đặt hồ lô đồng để củng cố sức khỏe và nạp tài." },
        "Canh": { loai: "Hung", diem: 36, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Kim", goc_do_min: 247.5, goc_do_max: 262.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Họa Hại, tiền bạc ra vào thất thường, cần quản lý chi tiêu chặt chẽ.", giaiphap: "Treo chuông gió đồng để điều tiết lại khí trường." },
        "Dậu": { loai: "Hung", diem: 27, cap_do: "Đại Hung", nhom: "Ngũ Quỷ", hanh: "Kim", goc_do_min: 262.5, goc_do_max: 277.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Phạm Ngũ Quỷ đại sát, dễ phát sinh bệnh tật, cần chú ý giữ gìn sức khỏe.", giaiphap: "Trấn trạch bằng gương Bát Quái gỗ đào để đẩy lùi sát khí." },
        "Tân": { loai: "Hung", diem: 30, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Kim", goc_do_min: 277.5, goc_do_max: 292.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm thế Lục Sát, nhân đinh dễ ly tán, gia đình thiếu gắn kết.", giaiphap: "Đặt bình nước phong thủy để tĩnh tâm, hòa hợp các mối quan hệ." },
        "Tuất": { loai: "Cát", diem: 84, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Thổ", goc_do_min: 292.5, goc_do_max: 307.5, icon: "star-green", linhvuc: ["gia_dao", "cong_danh"], doi_tuong: ["gia_dinh"], text: "Diên Niên chính vị, phú quý thọ khang, gia đạo hạnh phúc bền lâu.", giaiphap: "Đặt đôi Uyên Ương đồng để giữ lửa hạnh phúc." },
        "Càn": { loai: "Cát", diem: 82, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Kim", goc_do_min: 307.5, goc_do_max: 322.5, icon: "star-green", linhvuc: ["tai_loc", "gia_dao"], doi_tuong: ["nam_chu"], text: "Diên Niên đắc cách, ngoại giao thuận lợi, công việc tiến triển tốt đẹp.", giaiphap: "Treo tranh phong thủy cát tường để kích hoạt tài lộc." },
        "Hợi": { loai: "Bình", diem: 57, cap_do: "Bình Hòa", nhom: "Bình", hanh: "Thủy", goc_do_min: 322.5, goc_do_max: 337.5, icon: "circle-yellow", linhvuc: ["tai_loc"], doi_tuong: ["gia_dinh"], text: "Thế bình hòa, cuộc sống yên ả, ít sóng gió, mọi việc ở mức độ vừa phải.", giaiphap: "Duy trì sự cân bằng, không cần tác động mạnh." }
    },

    "Chấn": {
        "Nhâm": { loai: "Cát", diem: 90, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Mộc", goc_do_min: 337.5, goc_do_max: 352.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Sinh Khí vượng cung, sự nghiệp hanh thông, gia chủ công danh hiển đạt.", giaiphap: "Kích hoạt bằng chậu cây xanh lớn hoặc vật phẩm hành Mộc." },
        "Tý": { loai: "Cát", diem: 94, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Thủy", goc_do_min: 352.5, goc_do_max: 7.5, icon: "star-green", linhvuc: ["nhan_dinh", "tai_loc"], doi_tuong: ["gia_dinh"], text: "Sinh Khí tối thượng, nhân đinh hưng vượng, con cái thông tuệ, gia vận phát triển.", giaiphap: "Đặt Tháp Văn Xương để củng cố học vấn và sự nghiệp." },
        "Quý": { loai: "Hung", diem: 35, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Thủy", goc_do_min: 7.5, goc_do_max: 22.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm thế Họa Hại, khí trường dễ bị trì trệ, tài chính cần quản lý chặt chẽ.", giaiphap: "Sử dụng thạch anh đen để hấp thụ sát khí, ổn định gia đạo." },
        "Sửu": { loai: "Hung", diem: 33, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Thổ", goc_do_min: 22.5, goc_do_max: 37.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm thế Lục Sát, gia đạo dễ phát sinh tranh chấp thị phi, thiếu hòa khí.", giaiphap: "Treo chuông gió kim loại để tiết bớt Thổ khí, thông quan hóa sát." },
        "Cấn": { loai: "Hung", diem: 29, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Thổ", goc_do_min: 37.5, goc_do_max: 52.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["nam_chu"], text: "Phạm Lục Sát phương vị, tinh thần dễ bất ổn, cần chú trọng nghỉ ngơi.", giaiphap: "Đặt bình nước phong thủy để điều hòa, làm dịu khí trường." },
        "Dần": { loai: "Hung", diem: 23, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Mộc", goc_do_min: 52.5, goc_do_max: 67.5, icon: "alert-red", linhvuc: ["nhan_dinh"], doi_tuong: ["nam_chu"], text: "Phạm Tuyệt Mệnh hung sát, khí trường xung đột mạnh, cần trấn trạch để bảo toàn tài chính.", giaiphap: "Sử dụng gương Bát Quái gỗ đào để hóa sát, bảo hộ gia chủ." },
        "Giáp": { loai: "Cát", diem: 81, cap_do: "Tiểu Cát", nhom: "Phục Vị", hanh: "Mộc", goc_do_min: 67.5, goc_do_max: 82.5, icon: "star-green", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phục Vị bản cung, gia đạo an yên, khí trường ổn định, thuận lợi an cư.", giaiphap: "Duy trì sự ngăn nắp, giữ không gian hài hòa, tĩnh lặng." },
        "Mão": { loai: "Cát", diem: 83, cap_do: "Tiểu Cát", nhom: "Phục Vị", hanh: "Mộc", goc_do_min: 82.5, goc_do_max: 97.5, icon: "star-green", linhvuc: ["cong_danh"], doi_tuong: ["nam_chu"], text: "Phục Vị chính vị, danh tiếng được củng cố, công việc phát triển bền vững.", giaiphap: "Treo tranh phong thủy cát tường để kích hoạt năng lượng tích cực." },
        "Ất": { loai: "Cát", diem: 86, cap_do: "Đại Cát", nhom: "Thiên Y", hanh: "Mộc", goc_do_min: 97.5, goc_do_max: 112.5, icon: "star-green", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Thiên Y đắc vị, sức khỏe dồi dào, bệnh tật tiêu trừ, gia đạo an lạc.", giaiphap: "Đặt hồ lô đồng để nạp phúc và dưỡng vượng sức khỏe." },
        "Thìn": { loai: "Hung", diem: 30, cap_do: "Tiểu Hung", nhom: "Ngũ Quỷ", hanh: "Thổ", goc_do_min: 112.5, goc_do_max: 127.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Ngũ Quỷ sát vị, cần đề phòng các biến động bất ngờ trong tài chính.", giaiphap: "Treo chuông gió đồng để tiết khí Ngũ Quỷ (Hỏa), chuyển hung thành cát." },
        "Tốn": { loai: "Cát", diem: 84, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Mộc", goc_do_min: 127.5, goc_do_max: 142.5, icon: "star-green", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Diên Niên vượng khí, gia đình hòa hợp, tình cảm gắn kết bền chặt.", giaiphap: "Đặt đôi Uyên Ương đồng để tăng cường sợi dây liên kết gia đạo." },
        "Tỵ": { loai: "Cát", diem: 82, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Hỏa", goc_do_min: 142.5, goc_do_max: 157.5, icon: "star-green", linhvuc: ["cong_danh", "tai_loc"], doi_tuong: ["nam_chu"], text: "Diên Niên đắc vị, sự nghiệp thăng tiến, ngoại giao thuận lợi.", giaiphap: "Treo tranh phong thủy về chủ đề thăng tiến, tài lộc." },
        "Bính": { loai: "Hung", diem: 27, cap_do: "Đại Hung", nhom: "Ngũ Quỷ", hanh: "Hỏa", goc_do_min: 157.5, goc_do_max: 172.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Ngũ Quỷ đại sát, cần giữ thái độ điềm tĩnh, tránh xung đột và đầu tư mạo hiểm.", giaiphap: "Sử dụng gương Bát Quái và vật phẩm hành Thổ để trấn áp sát khí." },
        "Ngọ": { loai: "Hung", diem: 25, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Hỏa", goc_do_min: 172.5, goc_do_max: 187.5, icon: "alert-red", linhvuc: ["nhan_dinh"], doi_tuong: ["gia_dinh"], text: "Phạm Tuyệt Mệnh phương vị, khí trường xung khắc, cần đặc biệt thận trọng.", giaiphap: "Sử dụng gương và chuông gió đồng để hóa sát mạnh." },
        "Đinh": { loai: "Hung", diem: 32, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Hỏa", goc_do_min: 187.5, goc_do_max: 202.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Họa Hại chi khí, công việc có nhiều trở ngại, cần kiên trì vượt qua.", giaiphap: "Đặt thạch anh đen để trấn định, hóa giải sự bất an của Họa Hại." },
        "Mùi": { loai: "Hung", diem: 28, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Thổ", goc_do_min: 202.5, goc_do_max: 217.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Phạm Tuyệt Mệnh sát phương, sức khỏe dễ bị suy giảm, cần ưu tiên nghỉ ngơi.", giaiphap: "Trấn trạch bằng gương Bát Quái gỗ đào để bảo hộ năng lượng." },
        "Khôn": { loai: "Hung", diem: 34, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Thổ", goc_do_min: 217.5, goc_do_max: 232.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Họa Hại sát vị, công danh có chút trắc trở, cần bình tĩnh xử lý.", giaiphap: "Đặt bình nước hoặc vật phẩm thủy để điều tiết, hóa giải xung sát." },
        "Thân": { loai: "Hung", diem: 31, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Kim", goc_do_min: 232.5, goc_do_max: 247.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Lục Sát phương vị, tình cảm dễ gặp hiểu lầm, thiếu sự gắn kết.", giaiphap: "Sử dụng rèm tối màu để làm dịu, ổn định tâm trạng và gia đạo." },
        "Canh": { loai: "Hung", diem: 23, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Kim", goc_do_min: 247.5, goc_do_max: 262.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Tuyệt Mệnh hung phương, cần đặc biệt tránh động thổ hoặc thay đổi lớn.", giaiphap: "Trấn trạch bằng gương và Tỳ Hưu để hóa giải sát khí nặng." },
        "Dậu": { loai: "Hung", diem: 29, cap_do: "Tiểu Hung", nhom: "Ngũ Quỷ", hanh: "Kim", goc_do_min: 262.5, goc_do_max: 277.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Phạm Ngũ Quỷ sát khí, dễ mắc các bệnh vặt, cần chú trọng ăn uống.", giaiphap: "Sử dụng chuông gió đồng để tiết khí, làm dịu sát khí Ngũ Quỷ." },
        "Tân": { loai: "Hung", diem: 35, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Kim", goc_do_min: 277.5, goc_do_max: 292.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Họa Hại tai ương, tiền bạc dễ thất thoát, cần quản lý tài chính thông minh.", giaiphap: "Đặt thạch anh trắng để ổn định khí trường và giữ tiền của." },
        "Tuất": { loai: "Cát", diem: 85, cap_do: "Đại Cát", nhom: "Thiên Y", hanh: "Thổ", goc_do_min: 292.5, goc_do_max: 307.5, icon: "star-green", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Thiên Y đắc vị, quý nhân phù trợ, sức khỏe dồi dào, thân tâm an khang.", giaiphap: "Đặt hồ lô đồng để củng cố sức khỏe và nạp tài vận." },
        "Càn": { loai: "Cát", diem: 83, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Kim", goc_do_min: 307.5, goc_do_max: 322.5, icon: "star-green", linhvuc: ["tai_loc", "cong_danh"], doi_tuong: ["nam_chu"], text: "Diên Niên đắc cách, tài lộc vượng phát, sự nghiệp rộng mở.", giaiphap: "Treo tranh phong thủy chiêu tài để kích hoạt năng lượng." },
        "Hợi": { loai: "Bình", diem: 56, cap_do: "Bình Hòa", nhom: "Bình", hanh: "Thủy", goc_do_min: 322.5, goc_do_max: 337.5, icon: "circle-yellow", linhvuc: ["tai_loc"], doi_tuong: ["gia_dinh"], text: "Thế bình hòa, cuộc sống ổn định, ít biến động.", giaiphap: "Giữ không gian cân bằng, không cần can thiệp mạnh." }
    },

    "Tốn": {
        "Nhâm": { loai: "Cát", diem: 89, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Mộc", goc_do_min: 337.5, goc_do_max: 352.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Sinh Khí vượng cung, sự nghiệp hanh thông, gia chủ có bước tiến lớn về tài lộc.", giaiphap: "Kích hoạt bằng cây xanh phong thủy hoặc vật phẩm hành Mộc." },
        "Tý": { loai: "Cát", diem: 91, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Thủy", goc_do_min: 352.5, goc_do_max: 7.5, icon: "star-green", linhvuc: ["tai_loc", "nhan_dinh"], doi_tuong: ["gia_dinh"], text: "Sinh Khí đắc vị, gia đạo hưng thịnh, điền sản và tài sản bền vững.", giaiphap: "Đặt Tháp Văn Xương để củng cố nền tảng gia vận." },
        "Quý": { loai: "Hung", diem: 34, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Thủy", goc_do_min: 7.5, goc_do_max: 22.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm thế Họa Hại, cần chú trọng lời ăn tiếng nói để tránh hiểu lầm đáng tiếc.", giaiphap: "Sử dụng thạch anh đen để hóa giải khí trường tiêu cực." },
        "Sửu": { loai: "Hung", diem: 28, cap_do: "Đại Hung", nhom: "Ngũ Quỷ", hanh: "Thổ", goc_do_min: 22.5, goc_do_max: 37.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Ngũ Quỷ đại sát, khí trường dễ bất ổn, cần giữ tâm thế bình hòa.", giaiphap: "Sử dụng gương Bát Quái gỗ đào để trấn trạch và bảo hộ gia đình." },
        "Cấn": { loai: "Hung", diem: 26, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Thổ", goc_do_min: 37.5, goc_do_max: 52.5, icon: "alert-red", linhvuc: ["nhan_dinh"], doi_tuong: ["nam_chu"], text: "Phạm thế Tuyệt Mệnh, năng lượng dễ hao tổn, cần chú trọng sức khỏe nam chủ.", giaiphap: "Kết hợp gương và chuông gió đồng để hóa giải, điều tiết khí trường." },
        "Dần": { loai: "Hung", diem: 27, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Mộc", goc_do_min: 52.5, goc_do_max: 67.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm thế Tuyệt Mệnh, tài chính cần quản lý chặt chẽ, tránh đầu tư mạo hiểm.", giaiphap: "Treo gương Bát Quái để hóa giải xung sát, giữ vững nguồn lực." },
        "Giáp": { loai: "Cát", diem: 83, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Mộc", goc_do_min: 67.5, goc_do_max: 82.5, icon: "star-green", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Diên Niên đắc vị, gia đình hòa thuận, sức khỏe và tuổi thọ bền lâu.", giaiphap: "Đặt đôi Uyên Ương đồng để tăng cường sợi dây tình cảm gia đạo." },
        "Mão": { loai: "Cát", diem: 82, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Mộc", goc_do_min: 82.5, goc_do_max: 97.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Diên Niên chính vị, các mối quan hệ xã giao thuận lợi, công việc suôn sẻ.", giaiphap: "Treo tranh phong thủy cát tường để kích hoạt năng lượng tốt." },
        "Ất": { loai: "Cát", diem: 92, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Mộc", goc_do_min: 97.5, goc_do_max: 112.5, icon: "star-green", linhvuc: ["tai_loc", "nhan_dinh"], doi_tuong: ["gia_dinh"], text: "Sinh Khí vượng khí, phúc lộc tìm đến nhanh chóng, gia vận hanh thông.", giaiphap: "Trưng bày cây xanh lớn hoặc vật phẩm hành Mộc để đón vượng khí." },
        "Thìn": { loai: "Cát", diem: 81, cap_do: "Tiểu Cát", nhom: "Phục Vị", hanh: "Thổ", goc_do_min: 112.5, goc_do_max: 127.5, icon: "star-green", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phục Vị đắc cách, không gian sống yên bình, gia đình an ninh.", giaiphap: "Duy trì sự ngăn nắp, giữ trạng thái ổn định cho không gian." },
        "Tốn": { loai: "Cát", diem: 84, cap_do: "Tiểu Cát", nhom: "Phục Vị", hanh: "Mộc", goc_do_min: 127.5, goc_do_max: 142.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phục Vị bản cung, nội lực dồi dào, vững chãi trước mọi thử thách.", giaiphap: "Sử dụng vật phẩm phong thủy hành Mộc để củng cố năng lượng bản mệnh." },
        "Tỵ": { loai: "Cát", diem: 88, cap_do: "Đại Cát", nhom: "Thiên Y", hanh: "Hỏa", goc_do_min: 142.5, goc_do_max: 157.5, icon: "star-green", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Thiên Y đắc vị, sức khỏe dồi dào, tâm trí minh mẫn, an yên trong cuộc sống.", giaiphap: "Đặt hồ lô đồng để nạp phúc, dưỡng khí." },
        "Bính": { loai: "Hung", diem: 33, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Hỏa", goc_do_min: 157.5, goc_do_max: 172.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm thế Họa Hại, cần cẩn trọng trong chi tiêu và các quyết định tài chính.", giaiphap: "Đặt thạch anh đen để trấn định, hạn chế hao tán." },
        "Ngọ": { loai: "Hung", diem: 32, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Hỏa", goc_do_min: 172.5, goc_do_max: 187.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm thế Lục Sát, các mối quan hệ cần sự bao dung và thấu hiểu hơn.", giaiphap: "Đặt bình nước phong thủy để điều tiết, hóa giải xung đột." },
        "Đinh": { loai: "Hung", diem: 30, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Hỏa", goc_do_min: 187.5, goc_do_max: 202.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm thế Lục Sát, gia đạo cần chú trọng sự đoàn kết, tránh những thị phi ngoài ý muốn.", giaiphap: "Sử dụng rèm tối màu để làm dịu và bảo vệ không gian riêng tư." },
        "Mùi": { loai: "Hung", diem: 29, cap_do: "Tiểu Hung", nhom: "Ngũ Quỷ", hanh: "Thổ", goc_do_min: 202.5, goc_do_max: 217.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm thế Ngũ Quỷ, đề phòng các biến động bất ngờ, cần thận trọng trong giao dịch.", giaiphap: "Treo chuông gió đồng để tiết chế khí Ngũ Quỷ." },
        "Khôn": { loai: "Hung", diem: 28, cap_do: "Tiểu Hung", nhom: "Ngũ Quỷ", hanh: "Thổ", goc_do_min: 217.5, goc_do_max: 232.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm thế Ngũ Quỷ, tránh những quyết định vội vàng, nên giữ sự điềm tĩnh.", giaiphap: "Sử dụng gương Bát Quái để hóa sát, đẩy lùi vận xui." },
        "Thân": { loai: "Hung", diem: 31, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Kim", goc_do_min: 232.5, goc_do_max: 247.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm thế Lục Sát, dễ phát sinh tranh chấp kéo dài, nên tìm giải pháp hòa giải.", giaiphap: "Sử dụng rèm cửa dày để trấn an, ổn định trường khí." },
        "Canh": { loai: "Hung", diem: 24, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Kim", goc_do_min: 247.5, goc_do_max: 262.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["nam_chu"], text: "Phạm Tuyệt Mệnh hung phương, cần ưu tiên sự an toàn và sức khỏe.", giaiphap: "Treo gương Bát Quái để trấn trạch, bảo hộ gia chủ." },
        "Dậu": { loai: "Hung", diem: 23, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Kim", goc_do_min: 262.5, goc_do_max: 277.5, icon: "alert-red", linhvuc: ["nhan_dinh"], doi_tuong: ["gia_dinh"], text: "Phạm Tuyệt Mệnh hung sát, cần đặc biệt thận trọng với mọi thay đổi lớn.", giaiphap: "Trấn trạch bằng gương và vật phẩm Tỳ Hưu để hóa giải sát khí nặng." },
        "Tân": { loai: "Hung", diem: 34, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Kim", goc_do_min: 277.5, goc_do_max: 292.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm thế Họa Hại, tiền của dễ bị thất thoát, cần quản lý tài chính chặt chẽ hơn.", giaiphap: "Đặt thạch anh trắng để thu giữ và ổn định tài vận." },
        "Tuất": { loai: "Cát", diem: 86, cap_do: "Đại Cát", nhom: "Thiên Y", hanh: "Thổ", goc_do_min: 292.5, goc_do_max: 307.5, icon: "star-green", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Thiên Y đắc vị, quý nhân hỗ trợ, mọi việc thuận lợi, sức khỏe dồi dào.", giaiphap: "Đặt hồ lô đồng để nạp tài, củng cố sức khỏe." },
        "Càn": { loai: "Cát", diem: 87, cap_do: "Đại Cát", nhom: "Thiên Y", hanh: "Kim", goc_do_min: 307.5, goc_do_max: 322.5, icon: "star-green", linhvuc: ["suc_khoe"], doi_tuong: ["nam_chu"], text: "Thiên Y chính vị, cơ thể tráng kiện, tinh thần minh mẫn, phúc lộc dài lâu.", giaiphap: "Đặt thạch anh vàng để kích hoạt năng lượng tích cực." },
        "Hợi": { loai: "Bình", diem: 55, cap_do: "Bình Hòa", nhom: "Bình", hanh: "Thủy", goc_do_min: 322.5, goc_do_max: 337.5, icon: "circle-yellow", linhvuc: ["tai_loc"], doi_tuong: ["gia_dinh"], text: "Thế bình hòa, mọi sự ở mức ổn định, không có biến động lớn.", giaiphap: "Duy trì sự cân bằng, không gian sống hài hòa." }
    },

    "Càn": {
        "Nhâm": { loai: "Hung", diem: 32, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Thủy", goc_do_min: 337.5, goc_do_max: 352.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm thế Lục Sát, các mối quan hệ dễ phát sinh hiểu lầm, cần chú trọng sự hòa hợp.", giaiphap: "Sử dụng rèm cửa tối màu để trấn an, làm dịu khí trường." },
        "Tý": { loai: "Hung", diem: 30, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Thủy", goc_do_min: 352.5, goc_do_max: 7.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm thế Lục Sát, gia đạo cần sự minh bạch và chân thành để tránh thị phi.", giaiphap: "Đặt bình nước muối để hấp thụ năng lượng tiêu cực, làm sạch không gian." },
        "Quý": { loai: "Hung", diem: 31, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Thủy", goc_do_min: 7.5, goc_do_max: 22.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm thế Lục Sát, cần giữ sự tĩnh lặng và tránh những tranh luận không đáng có.", giaiphap: "Treo chuông gió để phân tán và hóa giải khí trường đình trệ." },
        "Sửu": { loai: "Hung", diem: 35, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Thổ", goc_do_min: 22.5, goc_do_max: 37.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm thế Họa Hại, cần cẩn trọng trong giao tiếp để tránh hao tổn tâm sức.", giaiphap: "Sử dụng thạch anh đen để trấn định, ổn định tài vận." },
        "Cấn": { loai: "Cát", diem: 88, cap_do: "Đại Cát", nhom: "Thiên Y", hanh: "Thổ", goc_do_min: 37.5, goc_do_max: 52.5, icon: "star-green", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Thiên Y đắc vị, sức khỏe dồi dào, thân tâm an khang, gia vận cát tường.", giaiphap: "Đặt hồ lô đồng để nạp phúc, dưỡng vượng sức khỏe cho cả gia đình." },
        "Dần": { loai: "Cát", diem: 86, cap_do: "Đại Cát", nhom: "Thiên Y", hanh: "Mộc", goc_do_min: 52.5, goc_do_max: 67.5, icon: "star-green", linhvuc: ["suc_khoe", "tai_loc"], doi_tuong: ["nam_chu"], text: "Thiên Y chính vị, có quý nhân phù trợ, công việc thuận lợi, tài lộc hanh thông.", giaiphap: "Đặt thạch anh vàng để tăng cường năng lượng may mắn, thu hút tài lộc." },
        "Giáp": { loai: "Hung", diem: 27, cap_do: "Đại Hung", nhom: "Ngũ Quỷ", hanh: "Mộc", goc_do_min: 67.5, goc_do_max: 82.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Ngũ Quỷ đại sát, cần giữ thái độ điềm tĩnh, tránh các quyết định nóng vội.", giaiphap: "Sử dụng gương Bát Quái gỗ đào để trấn trạch và hóa giải xung sát." },
        "Mão": { loai: "Hung", diem: 29, cap_do: "Tiểu Hung", nhom: "Ngũ Quỷ", hanh: "Mộc", goc_do_min: 82.5, goc_do_max: 97.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Ngũ Quỷ sát vị, cần chú trọng quản lý tài sản, đề phòng mất mát.", giaiphap: "Đặt vật phẩm Tỳ Hưu để chiêu tài và bảo hộ tài sản." },
        "Ất": { loai: "Hung", diem: 28, cap_do: "Tiểu Hung", nhom: "Ngũ Quỷ", hanh: "Mộc", goc_do_min: 97.5, goc_do_max: 112.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Phạm Ngũ Quỷ khí, sức khỏe cần được chăm sóc kỹ lưỡng, tránh làm việc quá sức.", giaiphap: "Treo chuông gió đồng để tiết chế khí Ngũ Quỷ (Hỏa), cân bằng không gian." },
        "Thìn": { loai: "Hung", diem: 22, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Thổ", goc_do_min: 112.5, goc_do_max: 127.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["nam_chu"], text: "Phạm Tuyệt Mệnh hung phương, cần đặc biệt thận trọng với mọi thay đổi lớn.", giaiphap: "Trấn trạch mạnh bằng gương Bát Quái để hóa giải sát khí nặng." },
        "Tốn": { loai: "Hung", diem: 24, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Mộc", goc_do_min: 127.5, goc_do_max: 142.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Phạm Tuyệt Mệnh sát phương, sức khỏe cần ưu tiên hàng đầu.", giaiphap: "Sử dụng gương phong thủy để phản xạ và hóa giải sát khí." },
        "Tỵ": { loai: "Hung", diem: 23, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Hỏa", goc_do_min: 142.5, goc_do_max: 157.5, icon: "alert-red", linhvuc: ["nhan_dinh"], doi_tuong: ["gia_dinh"], text: "Phạm Tuyệt Mệnh phương vị, khí trường xung khắc, cần sự thận trọng tuyệt đối.", giaiphap: "Kết hợp gương Bát Quái và Tỳ Hưu để trấn trạch, bảo vệ gia đạo." },
        "Bính": { loai: "Bình", diem: 60, cap_do: "Bình Hòa", nhom: "Bình", hanh: "Hỏa", goc_do_min: 157.5, goc_do_max: 172.5, icon: "circle-yellow", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Thế bình hòa, mọi việc tiến triển ổn định, thuận lợi.", giaiphap: "Duy trì sự cân bằng trong không gian sống." },
        "Ngọ": { loai: "Bình", diem: 58, cap_do: "Bình Hòa", nhom: "Bình", hanh: "Hỏa", goc_do_min: 172.5, goc_do_max: 187.5, icon: "circle-yellow", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phương vị bình hòa, vận trình hanh thông, không có biến động.", giaiphap: "Giữ ổn định, vun đắp tình cảm gia đình." },
        "Đinh": { loai: "Cát", diem: 91, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Hỏa", goc_do_min: 187.5, goc_do_max: 202.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Sinh Khí vượng cung, tài lộc dồi dào, sự nghiệp thăng tiến không ngừng.", giaiphap: "Trưng bày cây xanh để kích hoạt vượng khí, thu hút tài lộc." },
        "Mùi": { loai: "Cát", diem: 93, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Thổ", goc_do_min: 202.5, goc_do_max: 217.5, icon: "star-green", linhvuc: ["nhan_dinh"], doi_tuong: ["gia_dinh"], text: "Sinh Khí tối thượng, nhân đinh hưng vượng, con cái thông tuệ, gia đình hạnh phúc.", giaiphap: "Đặt Tháp Văn Xương để củng cố học vấn và sự phát triển của gia đạo." },
        "Khôn": { loai: "Cát", diem: 85, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Thổ", goc_do_min: 217.5, goc_do_max: 232.5, icon: "star-green", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Diên Niên vượng khí, tình cảm gắn kết, gia đình an yên, bền chặt.", giaiphap: "Đặt đôi Uyên Ương đồng để bồi đắp sợi dây liên kết tình cảm." },
        "Thân": { loai: "Cát", diem: 84, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Kim", goc_do_min: 232.5, goc_do_max: 247.5, icon: "star-green", linhvuc: ["cong_danh"], doi_tuong: ["nam_chu"], text: "Diên Niên đắc vị, ngoại giao hanh thông, các mối quan hệ hỗ trợ sự nghiệp.", giaiphap: "Treo tranh phong thủy cát tường để mở rộng cơ hội phát triển." },
        "Canh": { loai: "Cát", diem: 80, cap_do: "Tiểu Cát", nhom: "Phục Vị", hanh: "Kim", goc_do_min: 247.5, goc_do_max: 262.5, icon: "star-green", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phục Vị đắc cách, gia đạo an ninh, cuộc sống ổn định.", giaiphap: "Duy trì sự hài hòa, giữ không gian gọn gàng." },
        "Dậu": { loai: "Cát", diem: 81, cap_do: "Tiểu Cát", nhom: "Phục Vị", hanh: "Kim", goc_do_min: 262.5, goc_do_max: 277.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phục Vị bản cung, củng cố nền tảng sự nghiệp, tài lộc vững chắc.", giaiphap: "Kích hoạt bằng các vật phẩm phong thủy hành Kim." },
        "Tân": { loai: "Cát", diem: 79, cap_do: "Tiểu Cát", nhom: "Phục Vị", hanh: "Kim", goc_do_min: 277.5, goc_do_max: 292.5, icon: "star-green", linhvuc: ["cong_danh"], doi_tuong: ["nam_chu"], text: "Phục Vị vượng vị, công việc vững vàng, danh tiếng được củng cố.", giaiphap: "Đặt vật phẩm phong thủy hành Kim để giữ vững vượng khí." },
        "Tuất": { loai: "Hung", diem: 36, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Thổ", goc_do_min: 292.5, goc_do_max: 307.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Phạm thế Họa Hại, cần chú trọng đến sức khỏe của người thân trong gia đình.", giaiphap: "Sử dụng thạch anh đen để hóa giải, bảo vệ sức khỏe." },
        "Càn": { loai: "Hung", diem: 33, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Kim", goc_do_min: 307.5, goc_do_max: 322.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm thế Họa Hại, tài lộc có biến động, cần quản lý chi tiêu chặt chẽ.", giaiphap: "Treo chuông gió để phân tán sát khí, tránh hao tán." },
        "Hợi": { loai: "Hung", diem: 34, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Thủy", goc_do_min: 322.5, goc_do_max: 337.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm thế Họa Hại, tài chính cần thận trọng, tránh các khoản chi tiêu không cần thiết.", giaiphap: "Đặt thạch anh trắng để thu giữ và ổn định tài vận." }
    },

    "Đoài": {
        "Nhâm": { loai: "Hung", diem: 34, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Thủy", goc_do_min: 337.5, goc_do_max: 352.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm thế Họa Hại, dễ phát sinh thị phi, khẩu thiệt, cần thận trọng ngôn từ.", giaiphap: "Sử dụng thạch anh đen để trấn định, hạn chế năng lượng tiêu cực." },
        "Tý": { loai: "Hung", diem: 33, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Thủy", goc_do_min: 352.5, goc_do_max: 7.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Phạm thế Họa Hại, khí trường dễ ảnh hưởng sức khỏe người trong gia đạo.", giaiphap: "Đặt bình gốm phong thủy để điều tiết, ổn định trường khí." },
        "Quý": { loai: "Hung", diem: 32, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Thủy", goc_do_min: 7.5, goc_do_max: 22.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm thế Họa Hại, tiền bạc dễ thất thoát, cần quản lý tài chính chặt chẽ.", giaiphap: "Treo chuông gió để tán sát, giữ vững nguồn tài chính." },
        "Sửu": { loai: "Cát", diem: 83, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Thổ", goc_do_min: 22.5, goc_do_max: 37.5, icon: "star-green", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Diên Niên đắc vị, gia đình hòa hợp, phúc lộc thọ khang bền vững.", giaiphap: "Đặt đôi Uyên Ương đồng để củng cố sợi dây tình cảm gia đình." },
        "Cấn": { loai: "Cát", diem: 82, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Thổ", goc_do_min: 37.5, goc_do_max: 52.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Diên Niên chính vị, các mối quan hệ xã giao thuận lợi, công việc suôn sẻ.", giaiphap: "Treo tranh phong thủy cát tường để kích hoạt năng lượng tốt." },
        "Dần": { loai: "Cát", diem: 84, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Mộc", goc_do_min: 52.5, goc_do_max: 67.5, icon: "star-green", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Diên Niên vượng khí, gia đình yên ấm, không khí sống hài hòa.", giaiphap: "Sử dụng thảm trang trí màu trắng hoặc vật phẩm hành Kim để trợ lực." },
        "Giáp": { loai: "Hung", diem: 23, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Mộc", goc_do_min: 67.5, goc_do_max: 82.5, icon: "alert-red", linhvuc: ["nhan_dinh"], doi_tuong: ["gia_dinh"], text: "Phạm Tuyệt Mệnh hung phương, khí trường xung sát, cần cực kỳ cẩn trọng.", giaiphap: "Treo gương Bát Quái gỗ đào để trấn trạch, bảo hộ gia đình." },
        "Mão": { loai: "Hung", diem: 25, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Mộc", goc_do_min: 82.5, goc_do_max: 97.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["nam_chu"], text: "Phạm Tuyệt Mệnh sát phương, năng lượng dễ suy kiệt, cần chú trọng sức khỏe.", giaiphap: "Sử dụng gương phong thủy để hóa giải sát khí." },
        "Ất": { loai: "Hung", diem: 24, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Mộc", goc_do_min: 97.5, goc_do_max: 112.5, icon: "alert-red", linhvuc: ["nhan_dinh"], doi_tuong: ["gia_dinh"], text: "Phạm Tuyệt Mệnh phương vị, dễ xảy ra bất lợi, cần thận trọng trong mọi quyết định.", giaiphap: "Kết hợp gương và Tỳ Hưu để trấn áp sát khí nặng." },
        "Thìn": { loai: "Hung", diem: 31, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Thổ", goc_do_min: 112.5, goc_do_max: 127.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm thế Lục Sát, các mối quan hệ tình cảm dễ phát sinh trục trặc, bất đồng.", giaiphap: "Đặt rèm cửa tối màu để làm dịu, trấn an không gian." },
        "Tốn": { loai: "Hung", diem: 30, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Mộc", goc_do_min: 127.5, goc_do_max: 142.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm thế Lục Sát, gia đạo cần sự minh bạch để tránh tà khí quấy nhiễu.", giaiphap: "Đặt bình nước phong thủy để hóa giải xung đột khí trường." },
        "Tỵ": { loai: "Hung", diem: 29, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Hỏa", goc_do_min: 142.5, goc_do_max: 157.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm thế Lục Sát, gia đình cần chú trọng sự đoàn kết, tránh những thị phi ngoài ý muốn.", giaiphap: "Treo chuông gió đồng để điều tiết, hóa sát." },
        "Bính": { loai: "Cát", diem: 80, cap_do: "Tiểu Cát", nhom: "Phục Vị", hanh: "Hỏa", goc_do_min: 157.5, goc_do_max: 172.5, icon: "star-green", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phục Vị đắc cách, không gian sống yên bình, gia đình an ninh.", giaiphap: "Duy trì sự ngăn nắp, giữ trạng thái ổn định cho không gian." },
        "Ngọ": { loai: "Cát", diem: 81, cap_do: "Tiểu Cát", nhom: "Phục Vị", hanh: "Hỏa", goc_do_min: 172.5, goc_do_max: 187.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phục Vị bản cung, củng cố nội lực, sự nghiệp vững vàng.", giaiphap: "Kích hoạt bằng vật phẩm hành Hỏa hoặc đỏ để tăng năng lượng." },
        "Đinh": { loai: "Cát", diem: 79, cap_do: "Tiểu Cát", nhom: "Phục Vị", hanh: "Hỏa", goc_do_min: 187.5, goc_do_max: 202.5, icon: "star-green", linhvuc: ["cong_danh"], doi_tuong: ["nam_chu"], text: "Phục Vị vượng vị, công việc tiến triển ổn định, danh tiếng bền vững.", giaiphap: "Đặt vật phẩm hành Kim để cân bằng, hỗ trợ vượng khí." },
        "Mùi": { loai: "Hung", diem: 28, cap_do: "Đại Hung", nhom: "Ngũ Quỷ", hanh: "Thổ", goc_do_min: 202.5, goc_do_max: 217.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Ngũ Quỷ đại sát, cần giữ tâm thái điềm tĩnh, tránh gây gổ.", giaiphap: "Treo gương Bát Quái để trấn trạch, đẩy lùi vận xui." },
        "Khôn": { loai: "Hung", diem: 29, cap_do: "Tiểu Hung", nhom: "Ngũ Quỷ", hanh: "Thổ", goc_do_min: 217.5, goc_do_max: 232.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Ngũ Quỷ phương, đề phòng biến động bất ngờ, cần thận trọng giao dịch.", giaiphap: "Đặt Tỳ Hưu để trấn áp và thu giữ tài lộc." },
        "Thân": { loai: "Hung", diem: 30, cap_do: "Tiểu Hung", nhom: "Ngũ Quỷ", hanh: "Kim", goc_do_min: 232.5, goc_do_max: 247.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Phạm thế Ngũ Quỷ, tiểu nhân dễ quấy nhiễu, cần sự tỉnh táo.", giaiphap: "Treo chuông gió đồng để tiết chế khí Ngũ Quỷ." },
        "Canh": { loai: "Cát", diem: 90, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Kim", goc_do_min: 247.5, goc_do_max: 262.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Sinh Khí vượng cung, sự nghiệp hanh thông, đại phát tài lộc.", giaiphap: "Trưng bày cây xanh để kích hoạt vượng khí, đón may mắn." },
        "Dậu": { loai: "Cát", diem: 94, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Kim", goc_do_min: 262.5, goc_do_max: 277.5, icon: "star-green", linhvuc: ["nhan_dinh"], doi_tuong: ["gia_dinh"], text: "Sinh Khí tối thượng, nhân đinh hưng vượng, con cái thông tuệ, gia vận cát tường.", giaiphap: "Đặt Tháp Văn Xương để củng cố học vấn và sự hưng thịnh của gia đạo." },
        "Tân": { loai: "Cát", diem: 89, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Kim", goc_do_min: 277.5, goc_do_max: 292.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Sinh Khí đắc vị, tài sản và điền sản tăng tiến bền vững.", giaiphap: "Trưng bày cây xanh để tăng cường năng lượng sinh sôi." },
        "Tuất": { loai: "Cát", diem: 87, cap_do: "Đại Cát", nhom: "Thiên Y", hanh: "Thổ", goc_do_min: 292.5, goc_do_max: 307.5, icon: "star-green", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Thiên Y đắc vị, sức khỏe dồi dào, thân tâm an khang.", giaiphap: "Đặt hồ lô đồng để nạp phúc, dưỡng vượng sức khỏe." },
        "Càn": { loai: "Cát", diem: 86, cap_do: "Đại Cát", nhom: "Thiên Y", hanh: "Kim", goc_do_min: 307.5, goc_do_max: 322.5, icon: "star-green", linhvuc: ["suc_khoe"], doi_tuong: ["nam_chu"], text: "Thiên Y chính vị, mọi việc hanh thông, tai qua nạn khỏi.", giaiphap: "Đặt thạch anh vàng để kích hoạt năng lượng tích cực, may mắn." },
        "Hợi": { loai: "Bình", diem: 57, cap_do: "Bình Hòa", nhom: "Bình", hanh: "Thủy", goc_do_min: 322.5, goc_do_max: 337.5, icon: "circle-yellow", linhvuc: ["tai_loc"], doi_tuong: ["gia_dinh"], text: "Thế bình hòa, vận trình ổn định, thuận lợi ở mức vừa phải.", giaiphap: "Duy trì sự cân bằng, không cần can thiệp quá mạnh." }
    },

    "Cấn": {
        "Nhâm": { loai: "Hung", diem: 28, cap_do: "Đại Hung", nhom: "Ngũ Quỷ", hanh: "Thủy", goc_do_min: 337.5, goc_do_max: 352.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Ngũ Quỷ đại sát, gia vận dễ bất ổn, cần chú trọng sự đoàn kết.", giaiphap: "Sử dụng gương Bát Quái gỗ đào để trấn trạch, đẩy lùi sát khí." },
        "Tý": { loai: "Hung", diem: 29, cap_do: "Tiểu Hung", nhom: "Ngũ Quỷ", hanh: "Thủy", goc_do_min: 352.5, goc_do_max: 7.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Ngũ Quỷ sát vị, tài lộc dễ thất thoát do tiểu nhân quấy phá.", giaiphap: "Đặt vật phẩm Tỳ Hưu để chiêu tài và bảo hộ tài sản gia chủ." },
        "Quý": { loai: "Hung", diem: 30, cap_do: "Tiểu Hung", nhom: "Ngũ Quỷ", hanh: "Thủy", goc_do_min: 7.5, goc_do_max: 22.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Phạm Ngũ Quỷ khí, cần giữ tâm thế bình hòa, tránh thị phi ngoài ý muốn.", giaiphap: "Treo chuông gió đồng để tiết chế năng lượng tiêu cực." },
        "Sửu": { loai: "Cát", diem: 80, cap_do: "Tiểu Cát", nhom: "Phục Vị", hanh: "Thổ", goc_do_min: 22.5, goc_do_max: 37.5, icon: "star-green", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phục Vị đắc cách, không gian sống an yên, gia đạo hòa thuận.", giaiphap: "Duy trì sự ngăn nắp, giữ không gian thông thoáng để dưỡng khí." },
        "Cấn": { loai: "Cát", diem: 82, cap_do: "Tiểu Cát", nhom: "Phục Vị", hanh: "Thổ", goc_do_min: 37.5, goc_do_max: 52.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phục Vị bản cung, củng cố nền tảng sự nghiệp, công việc vững vàng.", giaiphap: "Kích hoạt bằng vật phẩm hành Thổ hoặc đá phong thủy." },
        "Dần": { loai: "Cát", diem: 81, cap_do: "Tiểu Cát", nhom: "Phục Vị", hanh: "Mộc", goc_do_min: 52.5, goc_do_max: 67.5, icon: "star-green", linhvuc: ["cong_danh"], doi_tuong: ["nam_chu"], text: "Phục Vị vượng vị, công danh thăng tiến, có quý nhân phù trợ.", giaiphap: "Đặt vật phẩm hành Kim để điều tiết, giữ vững vượng khí." },
        "Giáp": { loai: "Hung", diem: 32, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Mộc", goc_do_min: 67.5, goc_do_max: 82.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm thế Lục Sát, các mối quan hệ tình cảm dễ phát sinh hiểu lầm.", giaiphap: "Sử dụng rèm cửa tối màu để làm dịu và trấn an không gian." },
        "Mão": { loai: "Hung", diem: 31, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Mộc", goc_do_min: 82.5, goc_do_max: 97.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm thế Lục Sát, cần sự minh bạch và chân thành trong đời sống gia đạo.", giaiphap: "Đặt bình nước phong thủy để hấp thụ, làm sạch khí trường." },
        "Ất": { loai: "Hung", diem: 30, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Mộc", goc_do_min: 97.5, goc_do_max: 112.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm thế Lục Sát, dễ bị thị phi quấy nhiễu, nên giữ sự tĩnh lặng.", giaiphap: "Treo chuông gió để phân tán sát khí, giữ sự bình yên." },
        "Thìn": { loai: "Hung", diem: 35, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Thổ", goc_do_min: 112.5, goc_do_max: 127.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm thế Họa Hại, cần cẩn trọng trong giao tiếp, tránh tranh chấp không đáng có.", giaiphap: "Sử dụng thạch anh đen để trấn định, ổn định tài vận." },
        "Tốn": { loai: "Hung", diem: 33, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Mộc", goc_do_min: 127.5, goc_do_max: 142.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Phạm thế Họa Hại, sức khỏe cần được chăm sóc kỹ, tránh làm việc quá sức.", giaiphap: "Đặt bình gốm phong thủy để điều tiết, dưỡng vượng khí." },
        "Tỵ": { loai: "Hung", diem: 32, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Hỏa", goc_do_min: 142.5, goc_do_max: 157.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm thế Họa Hại, tài chính có biến động, cần quản lý chi tiêu.", giaiphap: "Treo chuông gió đồng để tán sát, bảo vệ nguồn tài lộc." },
        "Bính": { loai: "Hung", diem: 22, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Hỏa", goc_do_min: 157.5, goc_do_max: 172.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["nam_chu"], text: "Phạm Tuyệt Mệnh hung phương, cần đặc biệt thận trọng với sức khỏe và an toàn.", giaiphap: "Trấn trạch bằng gương Bát Quái gỗ đào để hóa giải sát khí nặng." },
        "Ngọ": { loai: "Hung", diem: 24, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Hỏa", goc_do_min: 172.5, goc_do_max: 187.5, icon: "alert-red", linhvuc: ["nhan_dinh"], doi_tuong: ["gia_dinh"], text: "Phạm Tuyệt Mệnh sát phương, sức khỏe gia chủ cần được ưu tiên hàng đầu.", giaiphap: "Sử dụng gương phong thủy để phản xạ sát khí." },
        "Đinh": { loai: "Hung", diem: 23, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Hỏa", goc_do_min: 187.5, goc_do_max: 202.5, icon: "alert-red", linhvuc: ["nhan_dinh"], doi_tuong: ["gia_dinh"], text: "Phạm Tuyệt Mệnh phương vị, khí trường xung khắc, cần sự bảo hộ nghiêm ngặt.", giaiphap: "Kết hợp gương và vật phẩm Tỳ Hưu để trấn trạch." },
        "Mùi": { loai: "Cát", diem: 84, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Thổ", goc_do_min: 202.5, goc_do_max: 217.5, icon: "star-green", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Diên Niên đắc vị, gia đình hòa hợp, phú quý bền vững.", giaiphap: "Đặt đôi Uyên Ương đồng để bồi đắp tình cảm gia đình." },
        "Khôn": { loai: "Cát", diem: 83, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Thổ", goc_do_min: 217.5, goc_do_max: 232.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Diên Niên chính vị, các mối quan hệ xã giao hỗ trợ sự nghiệp phát triển.", giaiphap: "Treo tranh cát tường để kích hoạt năng lượng may mắn." },
        "Thân": { loai: "Cát", diem: 85, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Kim", goc_do_min: 232.5, goc_do_max: 247.5, icon: "star-green", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Diên Niên vượng khí, gia đình yên ấm, không khí sống hài hòa.", giaiphap: "Sử dụng thảm trang trí trắng hoặc vật phẩm Kim để trợ lực." },
        "Canh": { loai: "Cát", diem: 91, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Kim", goc_do_min: 247.5, goc_do_max: 262.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Sinh Khí vượng cung, sự nghiệp hanh thông, đại phát tài lộc.", giaiphap: "Trưng bày cây xanh để kích hoạt vượng khí, đón may mắn." },
        "Dậu": { loai: "Cát", diem: 94, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Kim", goc_do_min: 262.5, goc_do_max: 277.5, icon: "star-green", linhvuc: ["nhan_dinh"], doi_tuong: ["gia_dinh"], text: "Sinh Khí tối thượng, nhân đinh hưng vượng, con cái thông tuệ, gia vận cát tường.", giaiphap: "Đặt Tháp Văn Xương để củng cố học vấn và sự phát triển." },
        "Tân": { loai: "Cát", diem: 90, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Kim", goc_do_min: 277.5, goc_do_max: 292.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Sinh Khí đắc vị, tài sản và điền sản tăng tiến bền vững.", giaiphap: "Trưng bày cây xanh để tăng cường năng lượng sinh sôi." },
        "Tuất": { loai: "Hung", diem: 35, cap_do: "Tiểu Hung", nhom: "Cô Quả", hanh: "Thổ", goc_do_min: 292.5, goc_do_max: 307.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm thế Cô Quả, Tố Tụng, dễ phát sinh tranh chấp trong nội bộ.", giaiphap: "Đặt bình gốm phong thủy để điều hòa, trấn an." },
        "Càn": { loai: "Cát", diem: 89, cap_do: "Đại Cát", nhom: "Thiên Y", hanh: "Kim", goc_do_min: 307.5, goc_do_max: 322.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Thiên Y đại cát, quý nhân phù trợ, mọi việc hanh thông, tai qua nạn khỏi.", giaiphap: "Đặt thạch anh vàng để kích hoạt năng lượng tích cực, may mắn." },
        "Hợi": { loai: "Bình", diem: 55, cap_do: "Bình Hòa", nhom: "Bình", hanh: "Thủy", goc_do_min: 322.5, goc_do_max: 337.5, icon: "circle-yellow", linhvuc: ["tai_loc"], doi_tuong: ["gia_dinh"], text: "Thế bình hòa, vận trình ổn định, không có biến động lớn.", giaiphap: "Duy trì sự hài hòa, không gian sống ổn định." }
    },

    "Ly": {
        "Nhâm": { loai: "Hung", diem: 28, cap_do: "Đại Hung", nhom: "Ngũ Quỷ", hanh: "Thủy", goc_do_min: 337.5, goc_do_max: 352.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm Ngũ Quỷ đại sát, gia vận dễ bất ổn, cần chú trọng sự đoàn kết.", giaiphap: "Sử dụng gương Bát Quái gỗ đào để trấn trạch, đẩy lùi sát khí." },
        "Tý": { loai: "Hung", diem: 29, cap_do: "Tiểu Hung", nhom: "Ngũ Quỷ", hanh: "Thủy", goc_do_min: 352.5, goc_do_max: 7.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm Ngũ Quỷ sát vị, tài lộc dễ thất thoát do tiểu nhân quấy phá.", giaiphap: "Đặt Tỳ Hưu để chiêu tài và bảo hộ tài sản gia chủ." },
        "Quý": { loai: "Hung", diem: 30, cap_do: "Tiểu Hung", nhom: "Ngũ Quỷ", hanh: "Thủy", goc_do_min: 7.5, goc_do_max: 22.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Phạm Ngũ Quỷ khí, cần giữ tâm thế bình hòa, tránh thị phi ngoài ý muốn.", giaiphap: "Treo chuông gió đồng để tiết chế năng lượng tiêu cực." },
        "Sửu": { loai: "Hung", diem: 35, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Thổ", goc_do_min: 22.5, goc_do_max: 37.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm thế Họa Hại, dễ phát sinh thị phi, khẩu thiệt, cần thận trọng ngôn từ.", giaiphap: "Sử dụng thạch anh đen để trấn định, hạn chế năng lượng tiêu cực." },
        "Cấn": { loai: "Hung", diem: 33, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Thổ", goc_do_min: 37.5, goc_do_max: 52.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Phạm thế Họa Hại, khí trường dễ ảnh hưởng sức khỏe người trong gia đạo.", giaiphap: "Đặt bình gốm phong thủy để điều tiết, ổn định trường khí." },
        "Dần": { loai: "Hung", diem: 32, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Mộc", goc_do_min: 52.5, goc_do_max: 67.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm thế Họa Hại, tiền bạc dễ thất thoát, cần quản lý tài chính chặt chẽ.", giaiphap: "Treo chuông gió để tán sát, giữ vững nguồn tài chính." },
        "Giáp": { loai: "Cát", diem: 91, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Mộc", goc_do_min: 67.5, goc_do_max: 82.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Sinh Khí vượng cung, sự nghiệp hanh thông, đại phát tài lộc.", giaiphap: "Trưng bày cây xanh để kích hoạt vượng khí, đón may mắn." },
        "Mão": { loai: "Cát", diem: 94, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Mộc", goc_do_min: 82.5, goc_do_max: 97.5, icon: "star-green", linhvuc: ["nhan_dinh"], doi_tuong: ["gia_dinh"], text: "Sinh Khí tối thượng, nhân đinh hưng vượng, con cái thông tuệ, gia vận cát tường.", giaiphap: "Đặt Tháp Văn Xương để củng cố học vấn và sự phát triển." },
        "Ất": { loai: "Cát", diem: 90, cap_do: "Đại Cát", nhom: "Sinh Khí", hanh: "Mộc", goc_do_min: 97.5, goc_do_max: 112.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Sinh Khí đắc vị, tài sản và điền sản tăng tiến bền vững.", giaiphap: "Trưng bày cây xanh để tăng cường năng lượng sinh sôi." },
        "Thìn": { loai: "Cát", diem: 87, cap_do: "Đại Cát", nhom: "Thiên Y", hanh: "Thổ", goc_do_min: 112.5, goc_do_max: 127.5, icon: "star-green", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Thiên Y đắc vị, sức khỏe dồi dào, thân tâm an khang.", giaiphap: "Đặt hồ lô đồng để nạp phúc, dưỡng vượng sức khỏe." },
        "Tốn": { loai: "Cát", diem: 86, cap_do: "Đại Cát", nhom: "Thiên Y", hanh: "Mộc", goc_do_min: 127.5, goc_do_max: 142.5, icon: "star-green", linhvuc: ["suc_khoe"], doi_tuong: ["nam_chu"], text: "Thiên Y chính vị, mọi việc hanh thông, có quý nhân phò trợ.", giaiphap: "Đặt thạch anh vàng để kích hoạt năng lượng tích cực." },
        "Tỵ": { loai: "Cát", diem: 88, cap_do: "Đại Cát", nhom: "Thiên Y", hanh: "Hỏa", goc_do_min: 142.5, goc_do_max: 157.5, icon: "star-green", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Thiên Y vượng vị, bệnh tật thuyên giảm, gia vận bình an.", giaiphap: "Đặt hồ lô đồng để trấn trạch, dưỡng phúc." },
        "Bính": { loai: "Cát", diem: 80, cap_do: "Tiểu Cát", nhom: "Phục Vị", hanh: "Hỏa", goc_do_min: 157.5, goc_do_max: 172.5, icon: "star-green", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phục Vị đắc cách, không gian sống yên bình, gia đình an ninh.", giaiphap: "Duy trì sự ngăn nắp, giữ trạng thái ổn định cho không gian." },
        "Ngọ": { loai: "Cát", diem: 81, cap_do: "Tiểu Cát", nhom: "Phục Vị", hanh: "Hỏa", goc_do_min: 172.5, goc_do_max: 187.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phục Vị bản cung, củng cố nội lực, sự nghiệp vững vàng.", giaiphap: "Kích hoạt bằng vật phẩm hành Hỏa hoặc đỏ để tăng năng lượng." },
        "Đinh": { loai: "Cát", diem: 79, cap_do: "Tiểu Cát", nhom: "Phục Vị", hanh: "Hỏa", goc_do_min: 187.5, goc_do_max: 202.5, icon: "star-green", linhvuc: ["cong_danh"], doi_tuong: ["nam_chu"], text: "Phục Vị vượng vị, công việc tiến triển ổn định, danh tiếng bền vững.", giaiphap: "Đặt vật phẩm hành Kim để cân bằng, hỗ trợ vượng khí." },
        "Mùi": { loai: "Hung", diem: 32, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Thổ", goc_do_min: 202.5, goc_do_max: 217.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm thế Lục Sát, các mối quan hệ tình cảm dễ phát sinh trục trặc, bất đồng.", giaiphap: "Đặt rèm cửa tối màu để làm dịu, trấn an không gian." },
        "Khôn": { loai: "Hung", diem: 31, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Thổ", goc_do_min: 217.5, goc_do_max: 232.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm thế Lục Sát, gia đạo cần sự minh bạch để tránh tà khí quấy nhiễu.", giaiphap: "Đặt bình nước phong thủy để hóa giải xung đột khí trường." },
        "Thân": { loai: "Hung", diem: 30, cap_do: "Tiểu Hung", nhom: "Lục Sát", hanh: "Kim", goc_do_min: 232.5, goc_do_max: 247.5, icon: "alert-red", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Phạm thế Lục Sát, gia đình cần chú trọng sự đoàn kết, tránh thị phi ngoài ý muốn.", giaiphap: "Treo chuông gió đồng để điều tiết, hóa sát." },
        "Canh": { loai: "Hung", diem: 22, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Kim", goc_do_min: 247.5, goc_do_max: 262.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["nam_chu"], text: "Phạm Tuyệt Mệnh hung phương, khí trường xung sát, cần cực kỳ cẩn trọng.", giaiphap: "Treo gương Bát Quái gỗ đào để trấn trạch, bảo hộ gia đình." },
        "Dậu": { loai: "Hung", diem: 24, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Kim", goc_do_min: 262.5, goc_do_max: 277.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Phạm Tuyệt Mệnh sát phương, năng lượng dễ suy kiệt, cần chú trọng sức khỏe.", giaiphap: "Sử dụng gương phong thủy để hóa giải sát khí." },
        "Tân": { loai: "Hung", diem: 23, cap_do: "Đại Hung", nhom: "Tuyệt Mệnh", hanh: "Kim", goc_do_min: 277.5, goc_do_max: 292.5, icon: "alert-red", linhvuc: ["nhan_dinh"], doi_tuong: ["gia_dinh"], text: "Phạm Tuyệt Mệnh phương vị, dễ xảy ra bất lợi, cần thận trọng trong mọi quyết định.", giaiphap: "Kết hợp gương và Tỳ Hưu để trấn áp sát khí nặng." },
        "Tuất": { loai: "Cát", diem: 84, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Thổ", goc_do_min: 292.5, goc_do_max: 307.5, icon: "star-green", linhvuc: ["gia_dao"], doi_tuong: ["gia_dinh"], text: "Diên Niên đắc vị, gia đình hòa hợp, phúc lộc thọ khang bền vững.", giaiphap: "Đặt đôi Uyên Ương đồng để củng cố sợi dây tình cảm gia đình." },
        "Càn": { loai: "Cát", diem: 83, cap_do: "Tiểu Cát", nhom: "Diên Niên", hanh: "Kim", goc_do_min: 307.5, goc_do_max: 322.5, icon: "star-green", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Diên Niên chính vị, các mối quan hệ xã giao thuận lợi, công việc suôn sẻ.", giaiphap: "Treo tranh phong thủy cát tường để kích hoạt năng lượng tốt." },
        "Hợi": { loai: "Bình", diem: 56, cap_do: "Bình Hòa", nhom: "Bình", hanh: "Thủy", goc_do_min: 322.5, goc_do_max: 337.5, icon: "circle-yellow", linhvuc: ["tai_loc"], doi_tuong: ["gia_dinh"], text: "Thế bình hòa, vận trình ổn định, thuận lợi ở mức vừa phải.", giaiphap: "Duy trì sự cân bằng, không cần can thiệp quá mạnh." }
    }
};

// ====================== 72 HẬU ĐẦY ĐỦ (5°/một hậu - 24 Sơn x 3) ======================
const Data72Hau = {
    // ==================== BẮC (Nhâm - Tý - Quý) ====================
    "337.5": { ten: "Nhâm Hậu 1", chatLuong: "Đại Cát", hanh: "Thủy", ynghia: "Khí trường cực vượng, quý nhân tương trợ mạnh mẽ." },
    "342.5": { ten: "Nhâm Hậu 2", chatLuong: "Đại Cát", hanh: "Thủy", ynghia: "Gia đạo hưng vượng, con cái thông tuệ, an định lâu dài." },
    "347.5": { ten: "Nhâm Hậu 3", chatLuong: "Cát", hanh: "Thủy", ynghia: "Tài lộc ổn định, ngoại giao thuận lợi." },

    "352.5": { ten: "Tý Hậu 1", chatLuong: "Đại Cát", hanh: "Thủy", ynghia: "Sinh Khí tối thượng, công danh hiển đạt, vinh hoa phú quý." },
    "357.5": { ten: "Tý Hậu 2", chatLuong: "Đại Cát", hanh: "Thủy", ynghia: "Tài lộc hanh thông, sự nghiệp phát triển mạnh." },
    "2.5":   { ten: "Tý Hậu 3", chatLuong: "Cát", hanh: "Thủy", ynghia: "Nhân đinh hưng thịnh, gia vận vững vàng." },

    "7.5":   { ten: "Quý Hậu 1", chatLuong: "Tiểu Hung", hanh: "Thủy", ynghia: "Họa Hại nhẹ, dễ ảnh hưởng sức khỏe nữ giới." },
    "12.5":  { ten: "Quý Hậu 2", chatLuong: "Tiểu Hung", hanh: "Thủy", ynghia: "Khí trường xung đột, cần tránh tranh cãi." },
    "17.5":  { ten: "Quý Hậu 3", chatLuong: "Bình", hanh: "Thủy", ynghia: "Trung bình, quản lý tài chính thận trọng." },

    // ==================== ĐÔNG BẮC (Sửu - Cấn - Dần) ====================
    "22.5":  { ten: "Sửu Hậu 1", chatLuong: "Tiểu Hung", hanh: "Thổ", ynghia: "Lục Sát nhẹ, gia đạo dễ có mâu thuẫn." },
    "27.5":  { ten: "Sửu Hậu 2", chatLuong: "Tiểu Hung", hanh: "Thổ", ynghia: "Tài lộc có thất thoát nhỏ." },
    "32.5":  { ten: "Sửu Hậu 3", chatLuong: "Hung", hanh: "Thổ", ynghia: "Cần hóa giải để tránh tranh chấp." },

    "37.5":  { ten: "Cấn Hậu 1", chatLuong: "Đại Hung", hanh: "Thổ", ynghia: "Ngũ Quỷ đại sát, gia chủ tổn tài, tiểu nhân quấy phá." },
    "42.5":  { ten: "Cấn Hậu 2", chatLuong: "Đại Hung", hanh: "Thổ", ynghia: "Hung khí mạnh, đề phòng hỏa hoạn và tai nạn." },
    "47.5":  { ten: "Cấn Hậu 3", chatLuong: "Đại Hung", hanh: "Thổ", ynghia: "Tuyệt đối tránh động thổ tại vị trí này." },

    "52.5":  { ten: "Dần Hậu 1", chatLuong: "Tiểu Hung", hanh: "Mộc", ynghia: "Cô Quả nhẹ, nhân đinh khó tụ." },
    "57.5":  { ten: "Dần Hậu 2", chatLuong: "Tiểu Hung", hanh: "Mộc", ynghia: "Gia đạo cô tịch, khó giữ của." },
    "62.5":  { ten: "Dần Hậu 3", chatLuong: "Hung", hanh: "Mộc", ynghia: "Dùng Uyên Ương hoặc hồ lô để nạp phúc." },

    // ==================== ĐÔNG (Giáp - Mão - Ất) ====================
    "67.5":  { ten: "Giáp Hậu 1", chatLuong: "Tiểu Cát", hanh: "Mộc", ynghia: "Diên Niên, quý nhân phò trợ, công danh hanh thông." },
    "72.5":  { ten: "Giáp Hậu 2", chatLuong: "Tiểu Cát", hanh: "Mộc", ynghia: "Gia nghiệp bền vững, sự nghiệp tiến triển." },
    "77.5":  { ten: "Giáp Hậu 3", chatLuong: "Cát", hanh: "Mộc", ynghia: "Ngoại giao thuận lợi." },

    "82.5":  { ten: "Mão Hậu 1", chatLuong: "Tiểu Cát", hanh: "Mộc", ynghia: "Diên Niên tiến điền tài, gia sản tăng tiến." },
    "87.5":  { ten: "Mão Hậu 2", chatLuong: "Tiểu Cát", hanh: "Mộc", ynghia: "Con cái thành đạt, gia đạo êm ấm." },
    "92.5":  { ten: "Mão Hậu 3", chatLuong: "Cát", hanh: "Mộc", ynghia: "Tài lộc vững chắc." },

    "97.5":  { ten: "Ất Hậu 1", chatLuong: "Tiểu Hung", hanh: "Mộc", ynghia: "Lục Sát thị phi, gia đạo bất hòa." },
    "102.5": { ten: "Ất Hậu 2", chatLuong: "Tiểu Hung", hanh: "Mộc", ynghia: "Dễ vướng kiện tụng tranh chấp." },
    "107.5": { ten: "Ất Hậu 3", chatLuong: "Hung", hanh: "Mộc", ynghia: "Hóa giải bằng thạch anh đen hoặc bình nước muối." },

    // ==================== ĐÔNG NAM (Thìn - Tốn - Tỵ) ====================
    "112.5": { ten: "Thìn Hậu 1", chatLuong: "Tiểu Hung", hanh: "Thổ", ynghia: "Họa Hại, gia đạo tranh chấp, khẩu thiệt." },
    "117.5": { ten: "Thìn Hậu 2", chatLuong: "Tiểu Hung", hanh: "Thổ", ynghia: "Dễ vướng thị phi pháp luật." },
    "122.5": { ten: "Thìn Hậu 3", chatLuong: "Hung", hanh: "Thổ", ynghia: "Dùng rèm tối màu hoặc thạch anh khói." },

    "127.5": { ten: "Tốn Hậu 1", chatLuong: "Đại Hung", hanh: "Mộc", ynghia: "Tuyệt Mệnh sát phương, sức khỏe tổn hại nghiêm trọng." },
    "132.5": { ten: "Tốn Hậu 2", chatLuong: "Đại Hung", hanh: "Mộc", ynghia: "Cần trấn trạch mạnh." },
    "137.5": { ten: "Tốn Hậu 3", chatLuong: "Hung", hanh: "Mộc", ynghia: "Tránh sử dụng vị trí này cho giường ngủ." },

    "142.5": { ten: "Tỵ Hậu 1", chatLuong: "Tiểu Hung", hanh: "Hỏa", ynghia: "Họa Hại, quan phi khẩu thiệt, làm ăn thất thoát." },
    "147.5": { ten: "Tỵ Hậu 2", chatLuong: "Tiểu Hung", hanh: "Hỏa", ynghia: "Cần cẩn trọng trong kinh doanh." },
    "152.5": { ten: "Tỵ Hậu 3", chatLuong: "Hung", hanh: "Hỏa", ynghia: "Đặt Tỳ Hưu hoặc gậy Như Ý." },

    // ==================== NAM (Bính - Ngọ - Đinh) ====================
    "157.5": { ten: "Bính Hậu 1", chatLuong: "Đại Cát", hanh: "Hỏa", ynghia: "Thiên Y đắc vị, sức khỏe dồi dào, bệnh tật tiêu trừ." },
    "162.5": { ten: "Bính Hậu 2", chatLuong: "Đại Cát", hanh: "Hỏa", ynghia: "Thân tâm an lạc, gia đạo hạnh phúc." },
    "167.5": { ten: "Bính Hậu 3", chatLuong: "Cát", hanh: "Hỏa", ynghia: "Hồ lô đồng hoặc thạch anh vàng." },

    "172.5": { ten: "Ngọ Hậu 1", chatLuong: "Tiểu Cát", hanh: "Hỏa", ynghia: "Diên Niên chính khí, gia đạo hòa hợp." },
    "177.5": { ten: "Ngọ Hậu 2", chatLuong: "Tiểu Cát", hanh: "Hỏa", ynghia: "Ngoại giao thuận lợi." },
    "182.5": { ten: "Ngọ Hậu 3", chatLuong: "Cát", hanh: "Hỏa", ynghia: "Dùng Uyên Ương hoặc vật phẩm Thổ." },

    "187.5": { ten: "Đinh Hậu 1", chatLuong: "Đại Cát", hanh: "Hỏa", ynghia: "Sinh Khí tối thượng, phát phúc nhanh chóng." },
    "192.5": { ten: "Đinh Hậu 2", chatLuong: "Đại Cát", hanh: "Hỏa", ynghia: "Nhân đinh hưng vượng." },
    "197.5": { ten: "Đinh Hậu 3", chatLuong: "Cát", hanh: "Hỏa", ynghia: "Cây xanh và Tháp Văn Xương." },

    // ==================== TÂY NAM (Mùi - Khôn - Thân) ====================
    "202.5": { ten: "Mùi Hậu 1", chatLuong: "Tiểu Hung", hanh: "Thổ", ynghia: "Ngũ Quỷ, tổn thương nhân đinh, huyết quang." },
    "207.5": { ten: "Mùi Hậu 2", chatLuong: "Tiểu Hung", hanh: "Thổ", ynghia: "Chuông gió và thạch anh đen." },
    "212.5": { ten: "Mùi Hậu 3", chatLuong: "Hung", hanh: "Thổ", ynghia: "Tránh vị trí này cho giường ngủ." },

    "217.5": { ten: "Khôn Hậu 1", chatLuong: "Đại Hung", hanh: "Thổ", ynghia: "Tuyệt Mệnh sát khí, tài sản tiêu tán." },
    "222.5": { ten: "Khôn Hậu 2", chatLuong: "Đại Hung", hanh: "Thổ", ynghia: "Gia đạo ly tán nguy hiểm." },
    "227.5": { ten: "Khôn Hậu 3", chatLuong: "Đại Hung", hanh: "Thổ", ynghia: "Gương Bát Quái và chuông gió." },

    "232.5": { ten: "Thân Hậu 1", chatLuong: "Tiểu Hung", hanh: "Kim", ynghia: "Lục Sát, gia đạo bất hòa, vợ chồng xung khắc." },
    "237.5": { ten: "Thân Hậu 2", chatLuong: "Tiểu Hung", hanh: "Kim", ynghia: "Cô Thần, cần hóa giải." },
    "242.5": { ten: "Thân Hậu 3", chatLuong: "Hung", hanh: "Kim", ynghia: "Bình gốm hành Thổ." },

    // ==================== TÂY (Canh - Dậu - Tân) ====================
    "247.5": { ten: "Canh Hậu 1", chatLuong: "Tiểu Cát", hanh: "Kim", ynghia: "Diên Niên, kinh doanh phát đạt." },
    "252.5": { ten: "Canh Hậu 2", chatLuong: "Tiểu Cát", hanh: "Kim", ynghia: "Sự nghiệp hưng thịnh." },
    "257.5": { ten: "Canh Hậu 3", chatLuong: "Cát", hanh: "Kim", ynghia: "Vật phẩm hành Kim." },

    "262.5": { ten: "Dậu Hậu 1", chatLuong: "Tiểu Cát", hanh: "Kim", ynghia: "Phục Vị, quý nhân phù trợ." },
    "267.5": { ten: "Dậu Hậu 2", chatLuong: "Tiểu Cát", hanh: "Kim", ynghia: "Công danh vững vàng." },
    "272.5": { ten: "Dậu Hậu 3", chatLuong: "Cát", hanh: "Kim", ynghia: "Tranh Phúc Lộc hoặc Quan Công." },

    "277.5": { ten: "Tân Hậu 1", chatLuong: "Tiểu Hung", hanh: "Kim", ynghia: "Họa Hại, tiền bạc thất thường." },
    "282.5": { ten: "Tân Hậu 2", chatLuong: "Tiểu Hung", hanh: "Kim", ynghia: "Cẩn trọng đầu tư." },
    "287.5": { ten: "Tân Hậu 3", chatLuong: "Hung", hanh: "Kim", ynghia: "Thạch anh trắng hoặc gậy Như Ý." },

    // ==================== TÂY BẮC (Tuất - Càn - Hợi) ====================
    "292.5": { ten: "Tuất Hậu 1", chatLuong: "Tiểu Hung", hanh: "Thổ", ynghia: "Lục Sát, trộm cắp hao tài." },
    "297.5": { ten: "Tuất Hậu 2", chatLuong: "Tiểu Hung", hanh: "Thổ", ynghia: "Gia đạo bất an." },
    "302.5": { ten: "Tuất Hậu 3", chatLuong: "Hung", hanh: "Thổ", ynghia: "Chuỗi tiền Ngũ Đế và thạch anh đen." },

    "307.5": { ten: "Càn Hậu 1", chatLuong: "Tiểu Hung", hanh: "Kim", ynghia: "Lục Sát, tình duyên trục trặc." },
    "312.5": { ten: "Càn Hậu 2", chatLuong: "Tiểu Hung", hanh: "Kim", ynghia: "Hao tổn tâm trí." },
    "317.5": { ten: "Càn Hậu 3", chatLuong: "Hung", hanh: "Kim", ynghia: "Rèm tối màu và bình nước." },

    "322.5": { ten: "Hợi Hậu 1", chatLuong: "Bình", hanh: "Thủy", ynghia: "Thế bình hòa, tài lộc trung bình." },
    "327.5": { ten: "Hợi Hậu 2", chatLuong: "Bình", hanh: "Thủy", ynghia: "Quản lý tài chính thận trọng." },
    "332.5": { ten: "Hợi Hậu 3", chatLuong: "Bình", hanh: "Thủy", ynghia: "Giữ cân bằng, tránh thay đổi lớn." }
};

// ====================== CỬU TINH NHẬP TRUNG CUNG - CHUẨN ======================
function getNguHoangInfo(year) {
    // Công thức phi tinh nghịch hành chuẩn
    const phiTinh = [9, 8, 7, 6, 5, 4, 3, 2, 1];
    let index = (15 - (year % 9)) % 9;
    const sao = phiTinh[index];

    const info = {
        1: "Nhất Bạch (Đại Cát - Vượng tài lộc, quý nhân)",
        2: "Nhị Hắc (Hung - Bệnh tật, cần hóa giải)",
        3: "Tam Bích (Hung nhẹ - Thị phi, tranh chấp)",
        4: "Tứ Lục (Cát - Văn xương, học hành)",
        5: "Ngũ Hoàng (Đại Hung - Tai họa, tránh động thổ)",
        6: "Lục Bạch (Đại Cát - Quyền lộc, quý nhân)",
        7: "Thất Xích (Hung - Hao tài, miệng lưỡi)",
        8: "Bát Bạch (Đại Cát - Vượng khí, tài lộc)",
        9: "Cửu Tử (Cát - Hỷ khánh, tương lai sáng)"
    };

    return `Năm ${year}: Sao ${info[sao]}`;
}

// ====================== HÀM RIÊNG CẢNH BÁO NGŨ HOÀNG ======================
function getNguHoangAlert(currentHuong) {
    const nam = new Date().getFullYear();
    // Danh sách Ngũ Hoàng theo năm (Cần cập nhật hoặc dùng công thức tính)
    // Công thức Ngũ Hoàng: (5 - (nam - 2024) % 9 + 9) % 9
    const cacHuong = ["Trung Cung", "Tây Bắc", "Tây", "Đông Bắc", "Nam", "Bắc", "Tây Nam", "Đông", "Đông Nam"];
    const viTriNguHoang = cacHuong[(5 - (nam - 2024) % 9 + 9) % 9];

    // Cảnh báo nếu hướng người dùng đang xem trùng với vị trí Ngũ Hoàng
    if (currentHuong.toLowerCase() === viTriNguHoang.toLowerCase()) {
        return `<div style="background:#ff3b30; color:#fff; padding:15px; border-radius:10px; margin:15px 0; font-weight:bold; border: 2px solid #ffd700;">
            ⚠️ <b>CẢNH BÁO ĐẠI SÁT:</b> Hướng ${currentHuong} năm nay phạm <b>NGŨ HOÀNG ĐẠI SÁT</b>.<br>
            <span style="font-weight: normal; font-size: 0.9rem;">Tuyệt đối không động thổ, khoan đục, hoặc sửa chữa lớn tại phương vị này trong năm ${nam}.</span>
        </div>`;
    }
    
    // Nếu Ngũ Hoàng nằm Trung Cung (giữa nhà) thì luôn báo vì đây là hung tinh toàn cục
    if (viTriNguHoang === "Trung Cung") {
        return `<div style="background:#8b0000; color:#fff; padding:12px; border-radius:8px; margin:12px 0;">
            ⚠️ <b>LƯU Ý CỐ ĐỊNH:</b> Năm nay Ngũ Hoàng nhập Trung Cung. Tránh động chạm khu vực giữa nhà.
        </div>`;
    }

    return "";
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


const SON_24_CONFIG = [
    { name: "Tý", min: 352.5, max: 7.5, huong: "Bắc" },
    { name: "Quý", min: 7.5, max: 22.5, huong: "Bắc" },
    { name: "Sửu", min: 22.5, max: 37.5, huong: "Đông Bắc" },
    { name: "Cấn", min: 37.5, max: 52.5, huong: "Đông Bắc" },
    { name: "Dần", min: 52.5, max: 67.5, huong: "Đông Bắc" },
    { name: "Giáp", min: 67.5, max: 82.5, huong: "Đông" },
    { name: "Mão", min: 82.5, max: 97.5, huong: "Đông" },
    { name: "Ất", min: 97.5, max: 112.5, huong: "Đông" },
    { name: "Thìn", min: 112.5, max: 127.5, huong: "Đông Nam" },
    { name: "Tốn", min: 127.5, max: 142.5, huong: "Đông Nam" },
    { name: "Tỵ", min: 142.5, max: 157.5, huong: "Đông Nam" },
    { name: "Bính", min: 157.5, max: 172.5, huong: "Nam" },
    { name: "Ngọ", min: 172.5, max: 187.5, huong: "Nam" },
    { name: "Đinh", min: 187.5, max: 202.5, huong: "Nam" },
    { name: "Mùi", min: 202.5, max: 217.5, huong: "Tây Nam" },
    { name: "Khôn", min: 217.5, max: 232.5, huong: "Tây Nam" },
    { name: "Thân", min: 232.5, max: 247.5, huong: "Tây Nam" },
    { name: "Canh", min: 247.5, max: 262.5, huong: "Tây" },
    { name: "Dậu", min: 262.5, max: 277.5, huong: "Tây" },
    { name: "Tân", min: 277.5, max: 292.5, huong: "Tây" },
    { name: "Tuất", min: 292.5, max: 307.5, huong: "Tây Bắc" },
    { name: "Càn", min: 307.5, max: 322.5, huong: "Tây Bắc" },
    { name: "Hợi", min: 322.5, max: 337.5, huong: "Tây Bắc" },
    { name: "Nhâm", min: 337.5, max: 352.5, huong: "Bắc" }
];

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
// ====================== RENDER 72 HẬU RING (ĐÃ CHỈNH) ======================
function render72HauRing() {
    const hauRing = document.getElementById('hau72RingSvg');
    if (!hauRing) return;
    hauRing.innerHTML = "";

    const radius = 155;
    const offset = 3.0;        // ← Tăng lên 3.0 như bạn yêu cầu

    Object.keys(Data72Hau).forEach(degStr => {
        let deg = parseFloat(degStr);
        const hau = Data72Hau[degStr];
        
        deg += offset;   // Dịch chuyển theo chiều kim đồng hồ
        
        const textNode = document.createElementNS("http://www.w3.org/2000/svg", "text");
        textNode.setAttribute("x", "250");
        textNode.setAttribute("y", (250 - radius).toString());
        textNode.setAttribute("text-anchor", "middle");
        textNode.setAttribute("font-family", "sans-serif");
        textNode.setAttribute("font-size", "3.1");
        textNode.setAttribute("font-weight", "700");
        textNode.setAttribute("transform", `rotate(${deg}, 250, 250)`);
        
        // Màu
        if (hau.chatLuong.includes("Đại Cát") || hau.chatLuong.includes("Cát")) {
            textNode.setAttribute("fill", "#00ff99");
        } else if (hau.chatLuong.includes("Đại Hung") || hau.chatLuong.includes("Hung")) {
            textNode.setAttribute("fill", "#ff6666");
        } else {
            textNode.setAttribute("fill", "#ffcc77");
        }

        let shortName = hau.ten.replace(" Hậu", "");
        shortName = shortName.replace(/(\D+)(\d)/, (m, p1, p2) => p1.substring(0,1) + p2);
        textNode.textContent = shortName;
        
        hauRing.appendChild(textNode);
    });
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

    SON_24_CONFIG.forEach((son, index) => {
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
	 if (typeof render72HauRing === 'function') render72HauRing();
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

// ====================== LẤY NGŨ HÀNH THEO HƯỚNG (ĐÃ TỐI ƯU) ======================
function getHanhByHeading(heading) {
    if (heading === null || heading === undefined) return "Chưa xác định";

    // Chuẩn hóa góc về 0-360
    heading = ((heading % 360) + 360) % 360;

    // Bảng ánh xạ hành theo 8 hướng (mỗi hướng 45°)
    const hanhMap = [
        { min: 337.5, max: 22.5, hanh: "Thủy" },   // Bắc     - Khảm
        { min: 22.5,  max: 67.5,  hanh: "Thổ" },   // Đông Bắc - Cấn
        { min: 67.5,  max: 112.5, hanh: "Mộc" },   // Đông     - Chấn
        { min: 112.5, max: 157.5, hanh: "Mộc" },   // Đông Nam - Tốn
        { min: 157.5, max: 202.5, hanh: "Hỏa" },   // Nam      - Ly
        { min: 202.5, max: 247.5, hanh: "Thổ" },   // Tây Nam  - Khôn
        { min: 247.5, max: 292.5, hanh: "Kim" },   // Tây      - Đoài
        { min: 292.5, max: 337.5, hanh: "Kim" }    // Tây Bắc  - Càn
    ];

    for (let item of hanhMap) {
        if (item.min > item.max) { 
            // Trường hợp Bắc (vượt qua 0°)
            if (heading >= item.min || heading < item.max) {
                return item.hanh;
            }
        } else if (heading >= item.min && heading < item.max) {
            return item.hanh;
        }
    }

    return "Chưa xác định";
}
function recalculateFate() {
    const name = document.getElementById('userName').value.trim() || "Chủ mệnh";
    const gender = document.getElementById('gender').value;
    const dayStr = document.getElementById('birthDay').value;
    const monthStr = document.getElementById('birthMonth').value;
    const yearStr = document.getElementById('birthYear').value;
    const mucDich = document.getElementById('purpose').value;

    // Chưa nhập đủ thông tin
    if (!dayStr || !monthStr || !yearStr || yearStr.length < 4) {
        fateTxt.innerText = `${name}: Đo hướng tự do cơ bản (Chưa nhập đủ Ngày - Tháng - Năm sinh)`;
        directionsContainer.innerHTML = `<div style="font-size:0.8rem;color:#8a8a8f;text-align:center;padding:15px;">
            Vui lòng nhập đủ Ngày, Tháng, Năm sinh để xem phân tích Cát/Hung chi tiết
        </div>`;
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
        fateTxt.innerText = `${name}: Lỗi ngày tháng năm sinh (Kiểm tra lại)`;
        return;
    }

    // Tính toán thông tin cơ bản
    chủMệnh = tínhCungPhi(y, m, d, gender);
    const namAm = (m < 2 || (m === 2 && d < 5)) ? y - 1 : y;
    const nguHoangInfo = getNguHoangInfo(namAm);
    const hanhCungPhi = bátTrạchMap[chủMệnh]?.element || "Thổ";
    const nhomMenh = bátTrạchMap[chủMệnh]?.group || "Tây Tứ Mệnh";

    fateTxt.innerText = `${name}: Cung ${chủMệnh} (${nhomMenh}) - Bản Mệnh Cung Phi: ${hanhCungPhi} | Năm Âm: ${namAm} | ${nguHoangInfo}`;

    // Xử lý góc đang xem
    let headingToCalculate = isDetailOpen && lockedHeadingAtOpen !== null ? lockedHeadingAtOpen : currentHeading;

    // === TÍNH TOÁN ĐA TẦNG ===
    const hanhPhuongVi = getHanhByHeading(headingToCalculate);
    const currentHauInfo = getCurrentHauInfo(headingToCalculate);
    // Tính toán Đại/Tiểu vận
  const vanInfo = tinhDaiTieuVan(headingToCalculate, y, chủMệnh, hanhCungPhi);
    // === GIẢI THÍCH SAO NGŨ HOÀNG ===
    let saoChuQuan = null;
    const match = nguHoangInfo.match(/Sao (\d+)/);
    if (match) saoChuQuan = match[1];
    
    let giaiThichSao = "";
    if (saoChuQuan === '5') {
        giaiThichSao = `Năm sinh này phạm sao <b>Ngũ Hoàng</b>, mang sát khí hành Thổ rất mạnh. Cần giữ trung tâm nhà yên tĩnh, tránh đập phá, sửa chữa lớn.`;
    } else if (saoChuQuan === '2') {
        giaiThichSao = `Năm sinh này gặp sao <b>Nhị Hắc</b>, dễ ảnh hưởng sức khỏe. Nên đặt Hồ lô đồng hoặc vật phẩm hành Kim để hóa giải.`;
    } else if (['3', '4'].includes(saoChuQuan)) {
        giaiThichSao = `Năng lượng Mộc quản năm gây lệch khí nhẹ ở trung tâm nhà. Giữ khu vực này sạch sẽ là tự động hóa giải.`;
    } else if (['1', '6', '8', '9'].includes(saoChuQuan)) {
        giaiThichSao = `Năm nay gặp sao Cát, năng lượng Trung Cung tốt, tài lộc và quý nhân hỗ trợ.`;
    } else {
        giaiThichSao = `Năng lượng chủ quản ổn định, không có biến động xấu lớn.`;
    }

    // === RENDER GIAO DIỆN ===
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
    const config = ConfigPhongThuy[mucDich];
    const tenMucDichBinhDan = config ? config.title : "Vị trí / Hướng đang chọn";

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
      
        <p style="margin:8px 0;">📍 <b>Phương vị:</b> Hướng <b>${Math.round(headingToCalculate)}°</b> - Hành <b>${hanhPhuongVi}</b></p>
      
        <p style="margin:8px 0;">🎯 <b>Mệnh Cung Phi:</b> Cung <b>${chủMệnh}</b> (${nhomMenh}, hành ${hanhCungPhi})</p>

        <!-- Đại Vận -->
        <p style="margin:10px 0; padding:10px; background:rgba(255,215,0,0.08); border-radius:6px;">
            🌌 <b>Đại Vận (${vanInfo.nam}):</b> ${vanInfo.daiVan}<br>
            <small style="color:#ccc;">Ảnh hưởng vĩ mô trong 20 năm.</small>
        </p>

        <!-- Tiểu Vận - Phi Tinh (Phần quan trọng nhất) -->
        <div style="margin:12px 0; padding:14px; background:rgba(30,144,255,0.12); border-radius:8px; border-left:5px solid ${vanInfo.mauSac};">
            <b>◆ TIỂU VẬN ${vanInfo.nam} - HUYỀN KHÔNG PHI TINH</b><br>
            <span style="font-size:1.08rem; color:${vanInfo.mauSac}; font-weight:bold;">
                ${vanInfo.tieuVan}
            </span><br>
            <span style="color:${vanInfo.mauSac}; font-weight:bold;">${vanInfo.tongKet} (${vanInfo.capDo})</span><br><br>
            
            <span style="color:#ddd; line-height:1.55;">
                ${vanInfo.moTa}
            </span><br><br>
            
            <small style="color:#aaa;">💡 ${vanInfo.khuyenNghi}</small><br>
            ${vanInfo.vatPham ? `<small style="color:#ffd700;">🛠 Vật phẩm gợi ý: ${vanInfo.vatPham}</small>` : ''}
        </div>

        <!-- Hậu Hiện Tại -->
        <p style="margin:12px 0;">
            🌟 <b>Hậu hiện tại (${currentHauInfo.ten}):</b> ${currentHauInfo.chatLuong} ${currentHauInfo.emoji}<br>
            <span style="color:#ccc;">Khí trường chi tiết 5° của Sơn ${currentHauInfo.sonName || '—'}. ${currentHauInfo.ynghia || ''}</span>
        </p>

        <p style="margin:8px 0;">⚠️ <b>Vận khí tâm nhà (Trung Cung):</b> ${giaiThichSao}</p>
      
        <p style="margin:8px 0;">🚪 <b>Mục đích xem:</b> <b>${tenMucDichBinhDan}</b></p>
    </div>
`;

    generateDirectionsList();
    updateCompassUI(currentHeading);
}

// ====================== HÀM HỖ TRỢ LẤY THÔNG TIN HẬU ======================
function getCurrentHauInfo(degree) {
    const normalized = ((degree % 360) + 360) % 360;
    let minDiff = Infinity;
    let result = { ten: "—", chatLuong: "", emoji: "", ynghia: "", sonName: "—" };

    Object.keys(Data72Hau).forEach(key => {
        const d = parseFloat(key);
        const diff = Math.min(Math.abs(normalized - d), 360 - Math.abs(normalized - d));
        if (diff < minDiff) {
            minDiff = diff;
            const hau = Data72Hau[key];
            result.ten = hau.ten;
            result.chatLuong = hau.chatLuong;
            result.ynghia = hau.ynghia;
            
            if (hau.chatLuong.includes("Đại Cát") || hau.chatLuong.includes("Cát")) {
                result.emoji = "🟢";
            } else if (hau.chatLuong.includes("Đại Hung") || hau.chatLuong.includes("Hung")) {
                result.emoji = "🔴";
            } else {
                result.emoji = "🟡";
            }
        }
    });
    return result;
}

function tinhDaiTieuVan(degree, namSinh, cungPhi, hanhCungPhi) {
    const namHienTai = new Date().getFullYear();
    const normalized = ((degree % 360) + 360) % 360;

    // 1. ĐẠI VẬN (giữ nguyên - đúng)
    const baseYear = 1864;
    let vanNumber = ((Math.floor((namHienTai - baseYear) / 20)) % 9) + 1;
    const hanhMap = {1:"Thủy",2:"Thổ",3:"Mộc",4:"Mộc",5:"Thổ",6:"Kim",7:"Kim",8:"Thổ",9:"Hỏa"};

    // 2. LƯU NIÊN PHI TINH - SỬA LẠI CÔNG THỨC CHUẨN
    let saoTrungCung = (11 - (namHienTai % 9)) % 9;   // ← Sửa ở đây
    if (saoTrungCung === 0) saoTrungCung = 9;

    const tenSao = ["Nhất Bạch","Nhị Hắc","Tam Bích","Tứ Lục","Ngũ Hoàng","Lục Bạch","Thất Xích","Bát Bạch","Cửu Tử"];
    const saoInfo = {
        so: saoTrungCung,
        ten: tenSao[saoTrungCung-1],
        hanh: hanhMap[saoTrungCung]
    };

    // 3. 72 HẬU (giữ nguyên)
    let currentHau = null;
    let minDiff = Infinity;
    Object.keys(Data72Hau).forEach(key => {
        const d = parseFloat(key);
        const diff = Math.min(Math.abs(normalized - d), 360 - Math.abs(normalized - d));
        if (diff < minDiff) {
            minDiff = diff;
            currentHau = Data72Hau[key];
        }
    });

    const hanhHuong = getHanhByHeading(degree);

    // ==================== LOGIC ĐÁNH GIÁ ĐA TẦNG (Giữ pro) ====================
    let tongKet = "Trung bình";
    let capDo = "Trung";
    let mauSac = "#FFD700";
    let moTa = "";
    let khuyenNghi = "";
    let vatPham = "";

    const saoSinhMenh = isSinh(saoInfo.hanh, hanhCungPhi);
    const saoKhacMenh = isKhac(saoInfo.hanh, hanhCungPhi);
    const hauTot = currentHau?.chatLuong?.toLowerCase().includes("cát") || false;

    if (saoSinhMenh && hauTot) {
        capDo = "Cường";
        tongKet = "Đại Cát Cường";
        mauSac = "#00FF88";
        moTa = `${saoInfo.ten} sinh vượng Mệnh + Hậu Đại Cát → Khí rất mạnh.`;
        khuyenNghi = "Thời điểm cực tốt để khởi sự lớn.";
        vatPham = "Tỳ Hưu Vàng, Kỳ Lân Đồng";
    } 
    else if (saoSinhMenh) {
        capDo = "Cường";
        tongKet = "Đại Cát";
        mauSac = "#00FF88";
        moTa = `${saoInfo.ten} sinh Mệnh. Năm thuận lợi cho gia chủ.`;
        khuyenNghi = "Nên tận dụng cho sự nghiệp, tài lộc.";
    } 
    else if (saoKhacMenh) {
        capDo = "Nhược";
        tongKet = "Đại Hung";
        mauSac = "#FF3333";
        moTa = `${saoInfo.ten} khắc Mệnh. Hung khí nặng.`;
        khuyenNghi = "Hạn chế động thổ, cần hóa giải mạnh.";
        vatPham = "Hồ Lô Đồng, Gương Bát Quái, Thạch Anh Đen";
    } 
    else if (hauTot) {
        capDo = "Trung";
        tongKet = "Tiểu Cát";
        mauSac = "#90EE90";
        moTa = `Hậu hiện tại tốt, sao năm trung tính.`;
    } 
    else {
        capDo = "Trung";
        tongKet = "Bình Hòa";
        moTa = "Trạng thái cân bằng.";
    }

    return {
        daiVan: `Vận ${vanNumber} - ${hanhMap[vanNumber]} Vận (${1864 + (vanNumber-1)*20}-${1864 + vanNumber*20 - 1})`,
        tieuVan: `${saoInfo.ten} • Hành ${saoInfo.hanh}`,
        hauHienTai: currentHau ? `${currentHau.ten} - ${currentHau.chatLuong}` : "—",
        tongKet: tongKet,
        capDo: capDo,
        moTa: moTa,
        mauSac: mauSac,
        khuyenNghi: khuyenNghi,
        vatPham: vatPham,
        nam: namHienTai
    };
}

// Hai hàm hỗ trợ nhỏ (thêm vào code)
function isSinh(hanh1, hanh2) {
    const sinh = { "Mộc":"Hỏa", "Hỏa":"Thổ", "Thổ":"Kim", "Kim":"Thủy", "Thủy":"Mộc" };
    return sinh[hanh1] === hanh2;
}

function isKhac(hanh1, hanh2) {
    const khac = { "Mộc":"Thổ", "Thổ":"Thủy", "Thủy":"Hỏa", "Hỏa":"Kim", "Kim":"Mộc" };
    return khac[hanh1] === hanh2;
}

// === THÊM HÀM TÍNH ĐẠI VẬN TỰ ĐỘNG ===
function getDaiVanInfo() {
    const currentYear = new Date().getFullYear();
    
    // Tính Đại Vận Huyền Không
    const baseYear = 1864;                    // Năm bắt đầu Vận 1
    const yearsPassed = currentYear - baseYear;
    const vanNumber = ((Math.floor(yearsPassed / 20)) % 9) + 1;
    
    const startYear = baseYear + (vanNumber - 1) * 20;
    const endYear = startYear + 19;
    
    // Hành của từng Vận
    const hanhMap = {
        1: "Thủy",
        2: "Thổ",
        3: "Mộc",
        4: "Mộc",
        5: "Thổ",
        6: "Kim",
        7: "Kim",
        8: "Thổ",
        9: "Hỏa"
    };
    
    const hanh = hanhMap[vanNumber] || "Hỏa";
    
    return {
        van: vanNumber,
        hanh: hanh,
        period: `${startYear}-${endYear}`,
        year: currentYear
    };
}

// ====================== TRONG HÀM recalculateFate() ======================

// Thêm dòng này sau khi tính toán các biến khác
const daiVan = getDaiVanInfo();
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
    // 1. Ánh xạ mã hướng sang tên hướng trong config
    const huongMap = {
        'N': 'Bắc',
        'NE': 'Đông Bắc',
        'E': 'Đông',
        'SE': 'Đông Nam',
        'S': 'Nam',
        'SW': 'Tây Nam',
        'W': 'Tây',
        'NW': 'Tây Bắc'
    };

    const huongCanTim = huongMap[code];
    if (!huongCanTim) return [];

    // 2. Lấy dữ liệu từ nguồn sự thật duy nhất SON_24_CONFIG
    // Cách này loại bỏ hoàn toàn việc phải viết thủ công mảng ['Nhâm', 'Tý', 'Quý']...
    return SON_24_CONFIG
        .filter(son => son.huong === huongCanTim)
        .map(son => son.name);
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
    // 1. Chuẩn hóa góc
    let gockim = ((heading % 360) + 360) % 360; 

    // 2. Tìm Sơn trong SON_24_CONFIG
    const sonObj = SON_24_CONFIG.find(s => {
        if (s.min > s.max) { // Xử lý trường hợp vượt ngưỡng 360 độ (Nhâm, Tý)
            return gockim >= s.min || gockim < s.max;
        }
        return gockim >= s.min && gockim < s.max;
    });

    // 3. Trả về tên, khớp với logic cũ của bạn
    return sonObj ? sonObj.name : "Tý";
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
    // Tính vận dựa trên năm hiện tại
    let vanSo = Math.floor((currentYear - 1864) / 20) % 9 + 1;
    const item = VAN_DATA[vanSo] ? VAN_DATA[vanSo][code] : null;

    if (!item) return `<p style="color: #666; padding: 10px;">Chưa có dữ liệu cho phương vị này.</p>`;

    // --- LỜI KHUYÊN HÀNH ĐỘNG ---
    const getAdvice = (loai) => {
        const adviceMap = {
            best: "👉 Cát khí vượng, ưu tiên việc quan trọng, khai trương, nhập trạch.",
            good: "👉 Vận khí hanh thông, thích hợp để phát triển công việc, học tập.",
            neutral: "👉 Bình hòa, giữ ổn định và cẩn trọng trong các quyết định.",
            bad: "👉 Cẩn thận trong lời ăn tiếng nói và các mối quan hệ xã hội.",
            worst: "⚠️ ĐẠI HUNG: Tuyệt đối không động thổ, sửa chữa tại phương vị này."
        };
        return adviceMap[loai] || "";
    };

    const colorMap = { best: "#00ff00", good: "#aaff00", neutral: "#e0e0e0", bad: "#ffaa00", worst: "#ff0000" };
    const colorStar = colorMap[item.loai] || "#fff";

    return `
        <div style="background: rgba(0,0,0,0.4); padding: 15px; border-radius: 12px; border: 1px solid #555; margin-top: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);">
            <div style="color: #0a84ff; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 5px;">
                ◆ HUYỀN KHÔNG VẬN ${vanSo} (${currentYear})
            </div>
            
            <div style="margin: 5px 0 10px 0; border-bottom: 1px solid #444; padding-bottom: 10px;">
                <span style="color: ${colorStar}; font-size: 1.3rem; font-weight: 800;">${item.sao}</span>
                <span style="color: #aaa; font-size: 0.9rem; margin-left: 8px;">• Hành: ${item.hanh}</span>
            </div>
            
            <div style="color: #eee; font-size: 0.95rem; line-height: 1.5; margin-bottom: 12px;">
                ${item.y_nghia}
            </div>
            
            <div style="color: ${colorStar}; font-size: 0.85rem; font-style: italic; background: rgba(255,255,255,0.06); padding: 10px; border-radius: 6px; border-left: 3px solid ${colorStar};">
                ${getAdvice(item.loai)}
            </div>
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

return `
    <div style="background: rgba(255,255,255,0.03); border: 1px solid #444; border-radius: 12px; padding: 15px; margin-top: 15px;">
        <h4 style="color: #0a84ff; margin: 0 0 10px 0; font-size: 0.9rem; text-transform: uppercase;">◆ Mật Pháp Hóa Giải</h4>
        <div style="margin-bottom: 15px; font-size: 0.9rem; color: #ddd; line-height: 1.5;">
            <strong style="color: #faad14;">[Phân Tích]:</strong> ${thuyetMinhViTri}
        </div>
        <div style="padding: 10px; background: rgba(250, 173, 20, 0.1); border-left: 4px solid #faad14; border-radius: 4px; font-size: 0.9rem;">
            <strong style="color: #faad14;">[Vật Phẩm Tối Thượng]:</strong> ${vatPhamToiThuong}
        </div>
    </div>`;
}

function getLuanDoanChiTiet(huong, son) {
    const dataHuong = MaTranMinhChau[huong];
    const info = (dataHuong && dataHuong[son]) ? dataHuong[son] : null;

    if (!info) {
        return `<div style="padding: 12px; color: #888; font-style: italic; border: 1px dashed #444; border-radius: 8px;">
                    Chưa có dữ liệu chi tiết cho sơn này.
                </div>`;
    }

    const isCat = (info.loai === "Cát");
    // Sử dụng màu sắc hài hòa hơn với chế độ Dark Mode
    const color = isCat ? "#30d158" : "#ff3b30";
    const bgColor = isCat ? "rgba(48, 209, 88, 0.08)" : "rgba(255, 59, 48, 0.08)";

    return `
    <div style="background: ${bgColor}; padding: 15px; border-radius: 12px; border: 1px solid ${color}; margin-top: 15px; transition: all 0.3s ease;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <b style="color: ${color}; font-size: 1rem; text-transform: uppercase; letter-spacing: 0.5px;">
                ${info.loai} Tinh: ${info.cap_do}
            </b>
            <span style="color: #fff; font-size: 0.9rem; background: ${color}; padding: 2px 10px; border-radius: 15px; font-weight: bold;">
                ${info.diem}/100
            </span>
        </div>
        
        <div style="font-size: 0.9rem; color: #fff; line-height: 1.5; margin-bottom: 12px;">
            ${info.text}
        </div>
        
        ${info.giaiphap ? `
            <div style="font-size: 0.85rem; color: #bbb; border-top: 1px dashed ${color}; padding-top: 10px; font-style: italic;">
                <span style="color: ${color}; font-weight: bold;">💡 Giải pháp:</span> ${info.giaiphap}
            </div>
        ` : ''}
    </div>`;
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

// ==================== 2. 24 SƠN (ĐÃ TỐI ƯU HÓA) ====================
    let gockim = (currentHeading % 360 + 360) % 360;
    
    // Tìm kiếm trực tiếp trên biến toàn cục SON_24_CONFIG
    let sơnHiệnTạiObj = SON_24_CONFIG.find(s => {
        if (s.min > s.max) return gockim >= s.min || gockim < s.max;
        return gockim >= s.min && gockim < s.max;
    }) || SON_24_CONFIG[0]; // Fallback về phần tử đầu tiên nếu không tìm thấy

    // Lưu ý: SON_24_CONFIG của chúng ta đang dùng thuộc tính .name thay vì .son
    // Hãy đổi .son thành .name để khớp với cấu trúc mới
    let sơnHiệnTại = sơnHiệnTạiObj.name; 
    
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
    if (sonTextsCache && sonTextsCache.length > 0) return; // Chỉ cache 1 lần

    // Cache các vòng cũ
    sonTextsCache = document.querySelectorAll("#sonRingSvg text");
    huongLonTextsCache = document.querySelectorAll("#chuHuongLonG text");
    saoTextsCache = document.querySelectorAll("#phucDucRingSvg text");

    // === Cache 72 Hậu (MỚI THÊM) ===
    hau72TextsCache = document.querySelectorAll("#hau72RingSvg text");

    // Lưu màu gốc của 72 Hậu để khôi phục sau khi highlight
    hau72TextsCache.forEach(txt => {
        if (!txt.hasAttribute("data-original-fill")) {
            txt.setAttribute("data-original-fill", txt.getAttribute("fill") || "#ffcc77");
        }
    });
}

// ====================== HÀM LÀM SÁNG LED QUÉT (ĐÃ NÂNG CẤP - THÊM 72 HẬU) ======================
function kichHoatDenLedQuet(heading) {
    const ledTargetAngle = ((heading % 360) + 360) % 360;
    cacheCompassElements();

    // 1. Làm sáng chữ 8 Hướng Lớn (Giữ nguyên)
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
                    ? "#00a525" : "#ff3b30";
            } else {
                txt.style.fill = "#6b4e18";
            }
        }
    });

    // 2. Làm sáng chữ 24 Sơn (Giữ nguyên)
    sonTextsCache.forEach(txt => {
        const sonGoc = parseFloat(txt.getAttribute("data-son-goc")) || 0;
        let phanSai = Math.abs(ledTargetAngle - sonGoc);
        if (phanSai > 180) phanSai = 360 - phanSai;
        if (phanSai <= 7.5) {
            txt.style.opacity = "1";
            txt.style.fontSize = "13px";
            const origColor = txt.getAttribute("data-color");
            if (origColor === "#5c4314") txt.style.fill = "#ffcc00";
            else if (origColor === "#ff3b30") txt.style.fill = "#ff0000";
            else txt.style.fill = "#00ff00";
        } else {
            txt.style.opacity = "0.5";
            txt.style.fontSize = "10px";
            txt.style.fill = txt.getAttribute("data-color") || "#8a8a8f";
        }
    });

    // 3. Làm sáng Sao Phúc Đức (Giữ nguyên)
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

    // ====================== 4. LÀM SÁNG 72 HẬU (MỚI THÊM) ======================
    if (typeof hau72TextsCache !== 'undefined' && hau72TextsCache.length > 0) {
        hau72TextsCache.forEach(txt => {
            const hauGoc = parseFloat(txt.getAttribute("data-hau-goc")) || 0;
            let phanSai = Math.abs(ledTargetAngle - hauGoc);
            if (phanSai > 180) phanSai = 360 - phanSai;

            if (phanSai <= 3.0) {                    // Ngưỡng sáng hẹp vì 72 Hậu cách nhau 5°
                txt.style.opacity = "1";
                txt.style.fontSize = "4.2";          // To hơn khi trúng
                txt.style.fill = "#ffff00";          // Màu vàng nổi bật
                txt.style.fontWeight = "900";
            } else {
                txt.style.opacity = "0.65";
                txt.style.fontSize = "3.1";
                txt.style.fontWeight = "700";
                txt.style.fill = txt.getAttribute("data-original-fill") || "#ffcc77";
            }
        });
    }
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

// ====================== HANDLE ORIENTATION - ĐÃ NÂNG CẤP (Hiển thị Hậu) ======================
function handleOrientation(event) {
    let rawHeading = null;
    // Ưu tiên webkitCompassHeading cho iOS
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
        return;
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
        
        // === THÊM: Cập nhật hiển thị độ + Hậu ===
        if (typeof updateDegreeDisplay === 'function') {
            updateDegreeDisplay(lastHeading);
        }
    });
}
// ====================== CẬP NHẬT HIỂN THỊ ĐỘ + SƠN + HẬU (NÂNG CẤP MỚI) ======================
// ====================== CẬP NHẬT HIỂN THỊ ĐỘ + SƠN + HẬU (GỌN & ĐẸP) ======================
// ====================== CẬP NHẬT HIỂN THỊ ĐỘ + SƠN + HẬU (CHỈ MÀU - KHÔNG ICON) ======================
function updateDegreeDisplay(degree) {
    const normalized = ((degree % 360) + 360) % 360;
 
    let sonName = "—";
    let hauName = "—";
    let hauColor = "#ffffff";     // Mặc định trắng

    // Tìm Sơn
    SON_24_CONFIG.forEach(son => {
        let min = son.min;
        let max = son.max;
        if (min > max) {
            if (normalized >= min || normalized <= max) sonName = son.name;
        } else if (normalized >= min && normalized < max) {
            sonName = son.name;
        }
    });

    // Tìm Hậu
    let minDiff = Infinity;
    Object.keys(Data72Hau).forEach(key => {
        const d = parseFloat(key);
        const diff = Math.min(Math.abs(normalized - d), 360 - Math.abs(normalized - d));
        if (diff < minDiff) {
            minDiff = diff;
            const hau = Data72Hau[key];
            hauName = hau.ten.replace(" Hậu", "");

            // Xác định màu theo chất lượng
            if (hau.chatLuong.includes("Đại Cát") || hau.chatLuong.includes("Cát")) {
                hauColor = "#00ff99";      // Xanh sáng = Tốt
            } else if (hau.chatLuong.includes("Đại Hung") || hau.chatLuong.includes("Hung")) {
                hauColor = "#ff6666";      // Đỏ = Xấu
            } else {
                hauColor = "#ffdd77";      // Vàng = Bình
            }
        }
    });

    // Cập nhật giao diện
    const degreeTxt = document.getElementById('degree-txt');
    if (degreeTxt) {
        degreeTxt.innerHTML = `
            ${normalized.toFixed(1)}° 
            - CUNG <strong>${getCungName(normalized)}</strong> 
            - SƠN <strong style="color:#ffcc00;">${sonName}</strong> 
            - HẬU <strong style="color:${hauColor};">${hauName}</strong>
        `;
    }
}

// ====================== HÀM HỖ TRỢ LẤY TÊN CUNG ======================
function getCungName(deg) {
    if (deg >= 337.5 || deg < 22.5) return "KHẢM (BẮC)";
    if (deg >= 22.5 && deg < 67.5) return "CẤN (Đ.BẮC)";
    if (deg >= 67.5 && deg < 112.5) return "CHẤN (ĐÔNG)";
    if (deg >= 112.5 && deg < 157.5) return "TỐN (Đ.NAM)";
    if (deg >= 157.5 && deg < 202.5) return "LY (NAM)";
    if (deg >= 202.5 && deg < 247.5) return "KHÔN (T.NAM)";
    if (deg >= 247.5 && deg < 292.5) return "ĐOÀI (TÂY)";
    if (deg >= 292.5 && deg < 337.5) return "CÀN (T.BẮC)";
    return "KHẢM (BẮC)";
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

function layThongTin24Son(doSo, cungPhi, namHienTai) {
    // 1. CHUẨN HÓA GÓC ĐỘ
    let gockim = (doSo % 360 + 360) % 360;
    
    // 2. TÌM SƠN HIỆN TẠI (Dùng nguồn dữ liệu SON_24_CONFIG duy nhất)
    // Nếu bạn muốn dùng tên chuẩn từ MaTranMinhChau, hãy đảm bảo SON_24_CONFIG khớp tên với key trong MaTranMinhChau
    let sonHienTai = SON_24_CONFIG.find(s => {
        if (s.min > s.max) return gockim >= s.min || gockim < s.max;
        return gockim >= s.min && gockim < s.max;
    }) || SON_24_CONFIG[0];

    // 3. LOGIC BÁT TRẠCH (Đã tối ưu)
    const tayTu = ["Càn", "Khôn", "Cấn", "Đoài"];
    const huongTayTu = ["Tây Bắc", "Tây", "Tây Nam", "Đông Bắc"];
    
    // Kiểm tra mệnh Tây Tứ có trùng hướng Tây Tứ không
    const isCat = (tayTu.includes(cungPhi) === huongTayTu.includes(sonHienTai.huong));

    // 4. LẤY DỮ LIỆU TỪ MA TRẬN MINH CHÂU
    // Lưu ý: MaTranMinhChau là object lớn, việc truy xuất theo cungPhi và tên Sơn là cách làm rất chuyên nghiệp
    const dacBiet = MaTranMinhChau[cungPhi]?.[sonHienTai.name];

    // 5. TRẢ VỀ KẾT QUẢ TỔNG HỢP
    return {
        son: sonHienTai.name,
        huong: sonHienTai.huong,
        luanDoan: dacBiet ? dacBiet.text : (isCat ? `Sơn ${sonHienTai.name} là phương vị Cát.` : `Sơn ${sonHienTai.name} phạm Hung phương.`),
        hoaGiai: dacBiet ? dacBiet.giaiphap : (isCat ? "Hướng tốt, khí trường ổn định." : "Hóa giải: Sử dụng vật phẩm phong thủy.")
    };
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

/**
 * Nâng cấp hàm luận giải vận hạn năm (Full Version)
 * Tự động hóa tính toán, tối ưu hóa so sánh dữ liệu
 */
function tinhHanCuuTinhTheoNam(huong, namHienTai) {
    const nam = namHienTai || new Date().getFullYear();
    if (!huong) return { thongTinSao: "Chưa chọn phương vị", meoGiaiHan: "" };

    const cacHuong = ["Trung Cung", "Tây Bắc", "Tây", "Đông Bắc", "Nam", "Bắc", "Tây Nam", "Đông", "Đông Nam"];
    const viTriNguHoang = cacHuong[(5 - (nam - 2024) % 9 + 9) % 9];

    const diaChiIndex = nam % 12;
    const tenChi = DATA_THANSAT.thaiTue[diaChiIndex];
    
    // Đã tối ưu: Dùng trực tiếp phuongVi trong DATA_THANSAT
    const huongThaiTue = DATA_THANSAT.phuongVi[tenChi]; 
    const huongTuePha = getHuongDoiXung(huongThaiTue);

    const tamHợpKey = nam % 12 >= 9 || nam % 12 <= 2 ? "Thân Tý Thìn" :
                      nam % 12 <= 5 ? "Tỵ Dậu Sửu" :
                      nam % 12 <= 8 ? "Hợi Mão Mùi" : "Dần Ngọ Tuất";
    
    const viTriTamSat = DATA_THANSAT.tamSat[tamHợpKey];

    const h = huong.trim().toLowerCase();
    let warnings = [];

    if (h === viTriNguHoang.toLowerCase()) warnings.push("⚠️ [Ngũ Hoàng]: Kỵ động thổ.");
    if (h === huongThaiTue.toLowerCase()) warnings.push("⚠️ [Thái Tuế]: Chủ quản năm, không nên xung phạm.");
    if (h === huongTuePha.toLowerCase()) warnings.push("⚠️ [Tuế Phá]: Xung chiếu, dễ thị phi.");
    if (h === viTriTamSat.toLowerCase()) warnings.push("⚠️ [Tam Sát]: Hạn về tai nạn, tranh chấp.");

    if (warnings.length === 0) {
        return { thongTinSao: `✅ Năm ${nam}: Hướng ${huong} bình hòa.`, meoGiaiHan: "Gia đạo an lành." };
    }

    return {
        thongTinSao: `⚠️ CẢNH BÁO NĂM ${nam}: Hướng ${huong} phạm:<br>• ${warnings.join("<br>• ")}`,
        meoGiaiHan: "👉 Hóa giải: Tránh động thổ. Dùng Hồ lô hoặc Chuông gió hóa giải."
    };
}

// Giữ lại hàm logic đối xứng
function getHuongDoiXung(huong) {
    const map = { "Bắc": "Nam", "Nam": "Bắc", "Đông": "Tây", "Tây": "Đông", "Đông Bắc": "Tây Nam", "Tây Nam": "Đông Bắc", "Đông Nam": "Tây Bắc", "Tây Bắc": "Đông Nam" };
    return map[huong] || huong;
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
	
// ====================== QUẢN LÝ QUYỀN LA BÀN iOS - PHIÊN BẢN CUỐI CÙNG (KHÔNG REDECLARE) ======================
let permissionDenied = false;

// Sử dụng biến đã khai báo sẵn ở trên (dòng 1351)
function requestPermission() {
    const permBtn = document.getElementById('permission-btn');
    
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission()
            .then(permissionState => {
                closePermissionModal();
                if (permissionState === 'granted') {
                    localStorage.setItem('ios_compass_granted', 'true');
                    permissionDenied = false;
                    addOrientationListener();
                    if (permBtn) permBtn.style.display = 'none';
                } else {
                    permissionDenied = true;
                    localStorage.setItem('ios_compass_granted', 'false');
                    showPermissionResetGuide();
                }
            })
            .catch(err => {
                console.error(err);
                permissionDenied = true;
                closePermissionModal();
                showPermissionResetGuide();
            });
    } else {
        closePermissionModal();
        addOrientationListener();
        if (permBtn) permBtn.style.display = 'none';
    }
}

function addOrientationListener() {
    if (orientationListenerAdded) return;

    const handler = (e) => {
        if (e.webkitCompassHeading !== undefined || e.alpha !== null) {
            handleOrientation(e);
        }
    };

    if ('ondeviceorientationabsolute' in window) {
        window.addEventListener('deviceorientationabsolute', handler, true);
    } else if ('ondeviceorientation' in window) {
        window.addEventListener('deviceorientation', handler, true);
    } else {
        if (typeof showCustomAlert === 'function') {
            showCustomAlert("Thiết bị không hỗ trợ la bàn tự động.\nBạn có thể xoay thủ công.", "Thông báo");
        }
        return;
    }
    orientationListenerAdded = true;
}

function showPermissionResetGuide() {
    const modal = document.getElementById('iosPermissionModal');
    if (!modal) return;

    modal.innerHTML = `
        <div style="background:#1c1c1e; padding:25px; border-radius:20px; text-align:center; width:88%; max-width:400px; border:2px solid #ff9500;">
            <div style="font-size:3.2rem; margin-bottom:15px;">⚠️</div>
            <h3 style="color:#ff9500; margin-bottom:12px;">Không Kích Hoạt Được La Bàn</h3>
            <p style="color:#ccc; line-height:1.6; margin-bottom:20px;">
                Safari đã chặn quyền vì bạn từng từ chối.
            </p>
            <div style="background:#2c2c2e; padding:15px; border-radius:12px; text-align:left; margin-bottom:20px; font-size:0.9rem; line-height:1.55;">
                <strong>Hướng dẫn reset quyền:</strong><br><br>
                1. Vào <strong>Cài Đặt</strong> → <strong>Safari</strong><br>
                2. Chọn <strong>Cài đặt cho Trang web</strong><br>
                3. Tìm ứng dụng này<br>
                4. Bật <strong>Motion &amp; Orientation</strong><br>
                5. Đóng Safari hoàn toàn rồi mở lại.
            </div>
            <button onclick="resetPermissionFlag()" style="width:100%; padding:14px; background:#ff9500; color:#000; border:none; border-radius:10px; font-weight:bold; margin-bottom:10px;">
                ✅ ĐÃ LÀM - THỬ LẠI
            </button>
            <button onclick="closePermissionModal()" style="width:100%; padding:12px; background:#444; color:#fff; border:none; border-radius:10px;">
                Dùng xoay tay
            </button>
        </div>
    `;
    modal.style.display = 'flex';
}

function resetPermissionFlag() {
    localStorage.removeItem('ios_compass_granted');
    permissionDenied = false;
    closePermissionModal();
    setTimeout(() => location.reload(), 400);
}

function closePermissionModal() {
    const modal = document.getElementById('iosPermissionModal');
    if (modal) modal.style.display = 'none';
}

// ====================== KHỞI TẠO ======================
window.onload = function() {
    if (typeof render24SonRing === 'function') render24SonRing();
    if (typeof loadSavedMembers === 'function') loadSavedMembers();
    if (typeof recalculateFate === 'function') recalculateFate();

    const modal = document.getElementById('iosPermissionModal');
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
                  (navigator.platform === 'MacIntel' && 'ontouchend' in document) ||
                  (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function');

    if (isIOS && modal) {
        modal.style.display = 'flex';
        const hasGranted = localStorage.getItem('ios_compass_granted') === 'true';

        if (hasGranted) {
            closePermissionModal();
            addOrientationListener();
        } else {
            const title = modal.querySelector('h3');
            const text = modal.querySelector('p');
            const btn = modal.querySelector('button');

            if (title) title.textContent = "KÍCH HOẠT LA BÀN";
            if (text) text.innerHTML = `Để la bàn xoay tự động theo hướng điện thoại,<br>vui lòng cho phép truy cập cảm biến chuyển động.`;
            if (btn) btn.onclick = handleModalClick;
        }
    } else {
        addOrientationListener();
    }
};

function handleModalClick() {
    const modal = document.getElementById('iosPermissionModal');
    if (modal) modal.style.display = 'none';
    requestPermission();
}

let isFullScreen = false;
let originalCompassParent = null;
let lastTapTime = 0;

// ====================== BIẾN HỖ TRỢ ZOOM & PAN (KÉO) TẤT CẢ TRÌNH DUYỆT ======================
let currentScale = 1;
let initialScale = 1;
let startDistance = 0;
let isZooming = false;
let currentX = 0;
let currentY = 0;
let startX = 0;
let startY = 0;

/**
 * HÀM XỬ LÝ SỰ KIỆN GỘP (Thông minh hơn)
 */
function handleInteraction(e) {
    const isCompass = e.target.closest('.compass-container');
    const isFullScreenDiv = document.getElementById('fullscreenMode');
    
    if (isCompass && !isFullScreen) {
        e.preventDefault(); 
        toggleFullScreenMode();
    } 
    else if (isFullScreen && isFullScreenDiv) {
        // NÂNG CẤP: Nếu đang phóng to la bàn (> 1), double tap sẽ đưa về kích thước chuẩn trước, tránh thoát đột ngột
        if (currentScale > 1) {
            resetZoom();
        } else {
            exitFullScreenMode();
        }
    }
}

// Hàm reset trạng thái phóng to về ban đầu
function resetZoom() {
    currentScale = 1;
    currentX = 0;
    currentY = 0;
    const wrapper = document.getElementById('fs-compass-wrapper');
    if (wrapper) {
        wrapper.style.transition = "transform 0.3s ease";
        wrapper.style.transform = "translate(0px, 0px) scale(1)";
    }
}

// 1. Lắng nghe Double Click (Máy tính)
document.addEventListener('dblclick', handleInteraction);

// 2. Lắng nghe Double Tap (Điện thoại) - Tối ưu chống xung đột khi nhấc ngón tay lúc zoom
document.addEventListener('touchend', (e) => {
    if (e.touches.length > 0) return; // Nếu vẫn còn ngón tay chạm màn hình thì bỏ qua
    
    const currentTime = new Date().getTime();
    if (currentTime - lastTapTime < 400) {
        handleInteraction(e);
    }
    lastTapTime = currentTime;
});

// ====================== VÀO CHẾ ĐỘ FULLSCREEN ======================
function toggleFullScreenMode() {
    if (isFullScreen) return;

    const compassContainer = document.querySelector('.compass-container');
    const statusPanel = document.querySelector('.status-panel');
    const fsIcon = document.querySelector('.fs-icon');

    if (!compassContainer) return;
    if (!originalCompassParent) originalCompassParent = compassContainer.parentElement;

    // --- GIỮ NGUYÊN: ẨN CÁC DÒNG THÔNG TIN CHI TIẾT ---
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

    const giaiThich = document.getElementById('detail-box');
    if (giaiThich) {
        giaiThich.style.display = 'none';
        giaiThich.setAttribute('data-fs-hidden', 'true');
    }

    // Reset lại cấu hình zoom mỗi khi mở full màn hình
    currentScale = 1;
    currentX = 0;
    currentY = 0;
    isZooming = false;

    const fsDiv = document.createElement('div');
    fsDiv.id = 'fullscreenMode';
    fsDiv.className = 'fullscreen-mode active';
    
    // NÂNG CẤP CSS: Thêm touch-action: none để khóa zoom mặc định lỗi của Safari/Chrome iOS
    fsDiv.style.cssText = "position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.95); z-index:9999; display:flex; flex-direction:column; align-items:center; justify-content:center; transition:opacity 0.3s; touch-action: none; overflow:hidden;";
    
    fsDiv.innerHTML = `
        <div id="fs-compass-wrapper" style="width: 96vw; max-width: 460px; height: 96vw; max-height: 460px; transform-origin: center center; display:flex; align-items:center; justify-content:center;"></div>
        <div id="fs-status-wrapper" style="width: 92%; max-width: 460px; margin-top:20px; z-index: 10000;"></div>
    `;
    document.body.appendChild(fsDiv);

    document.getElementById('fs-compass-wrapper').appendChild(compassContainer);
    if (statusPanel) document.getElementById('fs-status-wrapper').appendChild(statusPanel);

    if (fsIcon) fsIcon.style.opacity = '0';

    isFullScreen = true;

    // ====================== BỘ LẮNG NGHE SỰ KIỆN ZOOM ĐA ĐIỂM BẰNG TAY ======================
    const wrapper = document.getElementById('fs-compass-wrapper');

    fsDiv.addEventListener('touchstart', (e) => {
        if (e.touches.length === 2) { // Kéo 2 ngón tay -> Bắt đầu Zoom
            isZooming = true;
            startDistance = Math.hypot(
                e.touches[0].pageX - e.touches[1].pageX,
                e.touches[0].pageY - e.touches[1].pageY
            );
            initialScale = currentScale;
            wrapper.style.transition = "none";
        } else if (e.touches.length === 1 && currentScale > 1) { // 1 Ngón tay -> Kéo di chuyển vùng la bàn khi đã phóng to
            startX = e.touches[0].pageX - currentX;
            startY = e.touches[0].pageY - currentY;
            wrapper.style.transition = "none";
        }
    });

    fsDiv.addEventListener('touchmove', (e) => {
        if (isZooming && e.touches.length === 2) {
            e.preventDefault();
            const currentDistance = Math.hypot(
                e.touches[0].pageX - e.touches[1].pageX,
                e.touches[0].pageY - e.touches[1].pageY
            );
            // Giới hạn độ phóng to từ 1x đến tối đa 4x chiếc la bàn
            currentScale = Math.min(Math.max(initialScale * (currentDistance / startDistance), 1), 4);
            wrapper.style.transform = `translate(${currentX}px, ${currentY}px) scale(${currentScale})`;
        } else if (!isZooming && e.touches.length === 1 && currentScale > 1) {
            e.preventDefault();
            currentX = e.touches[0].pageX - startX;
            currentY = e.touches[0].pageY - startY;

            // Giới hạn không cho kéo lệch la bàn ra ngoài màn hình quá xa
            const maxPan = 150 * currentScale;
            currentX = Math.min(Math.max(currentX, -maxPan), maxPan);
            currentY = Math.min(Math.max(currentY, -maxPan), maxPan);

            wrapper.style.transform = `translate(${currentX}px, ${currentY}px) scale(${currentScale})`;
        }
    }, { passive: false });

    fsDiv.addEventListener('touchend', (e) => {
        if (e.touches.length < 2) {
            isZooming = false;
        }
    });

    if (typeof recalculateFate === 'function') recalculateFate();
}

// ====================== THOÁT CHẾ ĐỘ FULLSCREEN ======================
function exitFullScreenMode() {
    const fs = document.getElementById('fullscreenMode');
    if (!fs) return;

    fs.style.opacity = '0';
    setTimeout(() => {
        const compass = document.querySelector('.compass-container');
        const status = document.querySelector('.status-panel');
        const fsIcon = document.querySelector('.fs-icon');

        // --- GIỮ NGUYÊN: HIỆN LẠI TẤT CẢ CÁC THÀNH PHẦN ĐÃ ẨN ---
        const hiddenElements = document.querySelectorAll('[data-fs-hidden="true"]');
        hiddenElements.forEach(el => {
            el.style.display = ''; 
            el.removeAttribute('data-fs-hidden');
        });

        if (compass && originalCompassParent) {
            // Xóa bỏ các thuộc tính transform thu phóng trước khi trả la bàn về giao diện chính
            compass.style.transform = ""; 
            originalCompassParent.appendChild(compass);
            if (status) originalCompassParent.insertBefore(status, compass.nextSibling);
        }

        fs.remove();
        isFullScreen = false;
        if (fsIcon) fsIcon.style.opacity = '1';
        
        if (typeof updateCompassUI === 'function') {
            updateCompassUI(typeof lastHeading !== 'undefined' ? lastHeading : 0);
        }
    }, 300);
}
// ====================== PURPOSE POPUP MODAL ======================
let currentPurposeValue = "";

function showPurposeModal() {
    let modal = document.getElementById('purpose-modal');
   
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'purpose-modal';
        modal.innerHTML = `
            <div id="purpose-modal-content">
                <div id="purpose-modal-header">Chọn Mục Đích Tầm Phương Vị</div>
                <div id="purpose-modal-body"></div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    const body = document.getElementById('purpose-modal-body');
    
    body.innerHTML = `
        <div class="purpose-modal-group">🏛️ DƯƠNG TRẠCH CHỦ CỤC (Nhà Ở & Sinh Hoạt)</div>
        <div class="purpose-modal-option" data-value="house">Hướng Nhà / Cửa Chính (Đại Môn)</div>
        <div class="purpose-modal-option" data-value="gate">Hướng Cổng Chính (Lộ Khẩu)</div>
        <div class="purpose-modal-option" data-value="altar">Hướng Bàn Thờ / Ban Thần Tài</div>
        <div class="purpose-modal-option" data-value="bed">Hướng Đầu Giường Ngủ (Sàng Vị)</div>
        <div class="purpose-modal-option" data-value="livingroom">Hướng Phòng Khách (Trung Đường)</div>
        <div class="purpose-modal-option" data-value="bedroom_master">Hướng Phòng Ngủ Chính (Chủ Khang)</div>
        <div class="purpose-modal-option" data-value="balcony">Hướng Ban Công / Cửa Sổ Lớn</div>

        <div class="purpose-modal-group">📚 VĂN XƯƠNG KHOA DANH (Học Hành & Sự Nghiệp)</div>
        <div class="purpose-modal-option" data-value="workspace">Hướng Bàn Làm Việc (Quyền Lực Vị)</div>
        <div class="purpose-modal-option" data-value="ceo_office">Hướng Phòng Sếp / Bàn Lãnh Đạo</div>
        <div class="purpose-modal-option" data-value="study_desk">Hướng Bàn Học / Văn Xương Vị</div>

        <div class="purpose-modal-group">💰 ĐẮC TÀI MẬU DỊCH (Kinh Doanh Thương Mại)</div>
        <div class="purpose-modal-option" data-value="signboard">Hướng Biển Hiệu (Minh Đường Lộ)</div>
        <div class="purpose-modal-option" data-value="counter">Hướng Quầy Thu Ngân (Tài Khố Vị)</div>
        <div class="purpose-modal-option" data-value="safe">Vị trí Két Sắt (Tụ Tài Bảo Khố)</div>
        <div class="purpose-modal-option" data-value="bakery">Hướng Quầy Bánh Mì / Tiệm Bánh</div>
        <div class="purpose-modal-option" data-value="coffee">Hướng Quán Cà Phê / Trà Sữa</div>
        <div class="purpose-modal-option" data-value="restaurant">Hướng Quán Ăn / Nhà Hàng</div>
        <div class="purpose-modal-option" data-value="shop">Hướng Cửa Hàng / Tạp Hóa / Showroom</div>
        <div class="purpose-modal-option" data-value="salon">Hướng Salon Tóc / Nail / Spa</div>

        <div class="purpose-modal-group">🛠️ TỌA VỊ TRẤN SÁT (Hệ Thống Đè Hung)</div>
        <div class="purpose-modal-option" data-value="kitchen">Vị trí Đặt Bếp Nấu (Táo Vị)</div>
        <div class="purpose-modal-option" data-value="toilet">Vị trí Nhà Vệ Sinh (Huyền Vũ Tiêu Sát)</div>
        <div class="purpose-modal-option" data-value="septic_tank">Vị trí Hầm Tự Hoại / Bể Phốt</div>
        <div class="purpose-modal-option" data-value="storage">Vị trí Kho Hàng / Tủ Đồ</div>
        <div class="purpose-modal-option" data-value="trash_area">Vị trí Thùng Rác / Khu Phế Liệu</div>
    `;

    // Xử lý click chọn option
    body.querySelectorAll('.purpose-modal-option').forEach(item => {
        item.addEventListener('click', () => {
            const value = item.getAttribute('data-value');
            const text = item.textContent.trim();

            // Cập nhật text hiển thị
            document.getElementById('purpose-selected-text').textContent = text;
            
            // Cập nhật giá trị vào input ẩn (quan trọng nhất)
            const hiddenInput = document.getElementById('purpose');
            if (hiddenInput) {
                hiddenInput.value = value;
            }

            currentPurposeValue = value;

            hidePurposeModal();
            recalculateFate();        // Gọi lại hàm tính toán
        });
    });

    modal.style.display = 'flex';
}

function hidePurposeModal() {
    const modal = document.getElementById('purpose-modal');
    if (modal) modal.style.display = 'none';
}

// Đóng modal khi click vào nền tối
document.addEventListener('click', (e) => {
    const modal = document.getElementById('purpose-modal');
    if (modal && e.target === modal) {
        hidePurposeModal();
    }
});

function renderMultiLayerDetail(mc, van, hau72, tongDiem, sonName, degree) {
    let html = `<div style="font-size:0.9rem; line-height:1.55;">`;

    // Layer 1 - Minh Châu
    if (mc) {
        const color = mc.loai === "Cát" ? "#30d158" : "#ff3b30";
        html += `<div style="background:rgba(255,255,255,0.08);padding:12px;border-radius:8px;border-left:4px solid ${color};margin-bottom:12px;">
            <strong style="color:${color}">[MINH CHÂU ${mc.loai.toUpperCase()}] ${sonName} - ${mc.cap_do}</strong><br>
            ${mc.text}<br>
            <span style="color:#dfb76c">💡 ${mc.giaiphap}</span>
        </div>`;
    }

    // Layer 2 - Thiên Thời (Đại + Tiểu vận)
    html += `<div style="background:rgba(223,183,108,0.1);padding:10px;border-radius:8px;margin-bottom:10px;">
        <strong>⏳ THIÊN THỜI - VẬN ${van.van} (${van.vanName})</strong><br>
        <span style="color:#ffd700">${van.nienTinhName}</span>
    </div>`;

    // Layer 3 - 72 Hậu
    html += `<div style="background:rgba(0,255,100,0.08);padding:10px;border-radius:8px;">
        <strong>🌟 72 HẬU CHI TIẾT (${degree}°)</strong><br>
        <span style="color:#00ffaa">${hau72.ten} - ${hau72.chatLuong}</span><br>
        ${hau72.ynghia}
    </div>`;

    detailBox.innerHTML = html;
}
// ====================== RENDER ĐA TẦNG ======================
function renderMultiLayerDetail(mc, van, hau72, tongDiem, sonName, degree) {
    let html = `<div style="font-size:0.92rem; line-height:1.6;">`;

    // Layer 1: Minh Châu
    if (mc) {
        const color = mc.loai === "Cát" ? "#30d158" : "#ff3b30";
        html += `
        <div style="background:rgba(255,255,255,0.08); padding:14px; border-radius:10px; border-left:5px solid ${color}; margin-bottom:14px;">
            <strong style="color:${color};">【MINH CHÂU】 ${sonName} - ${mc.cap_do} (${mc.nhom})</strong><br>
            <span style="color:#fff;">${mc.text}</span><br><br>
            <span style="color:#dfb76c;">💡 Giải pháp: ${mc.giaiphap}</span>
        </div>`;
    }

    // Layer 2: Thiên Thời
    html += `
    <div style="background:rgba(223,183,108,0.12); padding:12px; border-radius:10px; margin-bottom:12px;">
        <strong>⏳ THIÊN THỜI ${van.vanName}</strong><br>
        Niên Tinh: <span style="color:#ffd700; font-weight:bold;">${van.nienTinhName}</span>
    </div>`;

    // Layer 3: 72 Hậu
    html += `
    <div style="background:rgba(0,255,120,0.1); padding:12px; border-radius:10px;">
        <strong>🌟 72 HẬU (${degree}°)</strong><br>
        <span style="color:#00ffaa;">${hau72.ten} — ${hau72.chatLuong}</span><br>
        ${hau72.ynghia}
    </div>`;

    detailBox.innerHTML = html;
}
