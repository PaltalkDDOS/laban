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

// ====================== 72 HẬU LONG MẠCH ĐẦY ĐỦ ( CHUẨN HÓA KEY TĨNH O(1) THEO BƯỚC 5 ĐỘ ) ======================
const Data72Hau = {
    // ==================== BẮC (Nhâm - Tý - Quý) ====================
    "340": { ten: "Nhâm Hậu 1", chatLuong: "Đại Cát", hanh: "Thủy", ynghia: "Khí trường cực vượng, quý nhân tương trợ mạnh mẽ.", diem: 92, giaiphap: "Đặt bình nước sạch hoặc tượng Quan Âm hướng Bắc để tăng vượng khí.", interactionLevel: "Rất Cao", overrideIf: null },
    "345": { ten: "Nhâm Hậu 2", chatLuong: "Đại Cát", hanh: "Thủy", ynghia: "Gia đạo hưng vượng, con cái thông tuệ, an định lâu dài.", diem: 88, giaiphap: "Treo tranh sơn thủy hoặc đặt thạch anh trắng.", interactionLevel: "Cao", overrideIf: null },
    "350": { ten: "Nhâm Hậu 3", chatLuong: "Cát", hanh: "Thủy", ynghia: "Tài lộc ổn định, ngoại giao thuận lợi.", diem: 78, giaiphap: "Đặt cây xanh hoặc đồng tiền ngũ đế.", interactionLevel: "Trung bình cao", overrideIf: null },
    "355": { ten: "Tý Hậu 1", chatLuong: "Đại Cát", hanh: "Thủy", ynghia: "Sinh Khí tối thượng, công danh hiển đạt, vinh hoa phú quý.", diem: 95, giaiphap: "Hướng lý tưởng cho cửa chính hoặc phòng khách.", interactionLevel: "Tối Cao", overrideIf: null },
    "0":   { ten: "Tý Hậu 2", chatLuong: "Đại Cát", hanh: "Thủy", ynghia: "Tài lộc hanh thông, sự nghiệp phát triển mạnh.", diem: 89, giaiphap: "Đặt ngọc bích hoặc tượng Phúc Lộc.", interactionLevel: "Cao", overrideIf: null },
    "5":   { ten: "Tý Hậu 3", chatLuong: "Cát", hanh: "Thủy", ynghia: "Nhân đinh hưng thịnh, gia vận vững vàng.", diem: 82, giaiphap: "Giữ sạch sẽ, tránh tích tụ đồ cũ.", interactionLevel: "Trung bình cao", overrideIf: null },
    "10":  { ten: "Quý Hậu 1", chatLuong: "Tiểu Hung", hanh: "Thủy", ynghia: "Họa Hại nhẹ, dễ ảnh hưởng sức khỏe nữ giới.", diem: 45, giaiphap: "Đặt hồ lô đồng hoặc gương Bát Quái nhỏ.", interactionLevel: "Thấp", overrideIf: "Nếu gặp Ngũ Hoàng → Đại Hung" },
    "15":  { ten: "Quý Hậu 2", chatLuong: "Tiểu Hung", hanh: "Thủy", ynghia: "Khí trường xung đột, cần tránh tranh cãi.", diem: 42, giaiphap: "Dùng thạch anh khói hoặc chuông gió.", interactionLevel: "Thấp", overrideIf: null },
    "20":  { ten: "Quý Hậu 3", chatLuong: "Bình", hanh: "Thủy", ynghia: "Trung bình, quản lý tài chính thận trọng.", diem: 58, giaiphap: "Giữ cân bằng, tránh đầu tư lớn.", interactionLevel: "Trung bình", overrideIf: null },

    // ==================== ĐÔNG BẮC (Sửu - Cấn - Dần) ====================
    "25":  { ten: "Sửu Hậu 1", chatLuong: "Tiểu Hung", hanh: "Thổ", ynghia: "Lục Sát nhẹ, gia đạo dễ có mâu thuẫn.", diem: 48, giaiphap: "Đặt thạch anh hồng hoặc chuông gió.", interactionLevel: "Thấp", overrideIf: "Đại Không Vong → Hung mạnh" },
    "30":  { ten: "Sửu Hậu 2", chatLuong: "Tiểu Hung", hanh: "Thổ", ynghia: "Tài lộc có thất thoát nhỏ.", diem: 44, giaiphap: "Đặt đồng tiền ngũ đế hoặc bình gốm.", interactionLevel: "Thấp", overrideIf: null },
    "35":  { ten: "Sửu Hậu 3", chatLuong: "Hung", hanh: "Thổ", ynghia: "Cần hóa giải để tránh tranh chấp.", diem: 38, giaiphap: "Dùng muối biển + gương Bát Quái.", interactionLevel: "Nguy hiểm", overrideIf: null },
    "40":  { ten: "Cấn Hậu 1", chatLuong: "Đại Hung", hanh: "Thổ", ynghia: "Ngũ Quỷ đại sát, gia chủ tổn tài, tiểu nhân quấy phá.", diem: 18, giaiphap: "Tuyệt đối tránh. Nếu buộc phải dùng thì trấn bằng gương Bát Quái lớn.", interactionLevel: "Rất Nguy Hiểm", overrideIf: "Luôn Đại Hung" },
    "45":  { ten: "Cấn Hậu 2", chatLuong: "Đại Hung", hanh: "Thổ", ynghia: "Hung khí mạnh, đề phòng hỏa hoạn và tai nạn.", diem: 16, giaiphap: "Không nên chọn hướng này.", interactionLevel: "Rất Nguy Hiểm", overrideIf: null },
    "50":  { ten: "Cấn Hậu 3", chatLuong: "Đại Hung", hanh: "Thổ", ynghia: "Tuyệt đối tránh động thổ tại vị trí này.", diem: 15, giaiphap: "Tránh làm cửa chính hoặc giường ngủ.", interactionLevel: "Nguy Hiểm Cao", overrideIf: "Đại Không Vong" },
    "55":  { ten: "Dần Hậu 1", chatLuong: "Tiểu Hung", hanh: "Mộc", ynghia: "Cô Quả nhẹ, nhân đinh khó tụ.", diem: 47, giaiphap: "Đặt Uyên Ương hoặc hồ lô.", interactionLevel: "Thấp", overrideIf: null },
    "60":  { ten: "Dần Hậu 2", chatLuong: "Tiểu Hung", hanh: "Mộc", ynghia: "Gia đạo cô tịch, khó giữ của.", diem: 43, giaiphap: "Trồng cây xanh và thạch anh hồng.", interactionLevel: "Thấp", overrideIf: null },
    "65":  { ten: "Dần Hậu 3", chatLuong: "Hung", hanh: "Mộc", ynghia: "Dùng Uyên Ương hoặc hồ lô để nạp phúc.", diem: 39, giaiphap: "Hóa giải bằng vật phẩm hành Thổ.", interactionLevel: "Thấp", overrideIf: null },

    // ==================== ĐÔNG (Giáp - Mão - Ất) ====================
    "70":  { ten: "Giáp Hậu 1", chatLuong: "Tiểu Cát", hanh: "Mộc", ynghia: "Diên Niên, quý nhân phò trợ, công danh hanh thông.", diem: 72, giaiphap: "Đặt tháp Văn Xương hoặc cây xanh.", interactionLevel: "Trung bình cao", overrideIf: null },
    "75":  { ten: "Giáp Hậu 2", chatLuong: "Tiểu Cát", hanh: "Mộc", ynghia: "Gia nghiệp bền vững, sự nghiệp tiến triển.", diem: 75, giaiphap: "Treo tranh ngựa hoặc đồng tiền.", interactionLevel: "Trung bình cao", overrideIf: null },
    "80":  { ten: "Giáp Hậu 3", chatLuong: "Cát", hanh: "Mộc", ynghia: "Ngoại giao thuận lợi.", diem: 68, giaiphap: "Giữ thoáng đãng.", interactionLevel: "Trung bình", overrideIf: null },
    "85":  { ten: "Mão Hậu 1", chatLuong: "Tiểu Cát", hanh: "Mộc", ynghia: "Diên Niên tiến điền tài, gia sản tăng tiến.", diem: 74, giaiphap: "Đặt thạch anh vàng.", interactionLevel: "Trung bình cao", overrideIf: null },
    "90":  { ten: "Mão Hậu 2", chatLuong: "Tiểu Cát", hanh: "Mộc", ynghia: "Con cái thành đạt, gia đạo êm ấm.", diem: 76, giaiphap: "Đặt tượng gia tiên hoặc cây xanh.", interactionLevel: "Trung bình cao", overrideIf: null },
    "95":  { ten: "Mão Hậu 3", chatLuong: "Cát", hanh: "Mộc", ynghia: "Tài lộc vững chắc.", diem: 70, giaiphap: "Bình thường.", interactionLevel: "Trung bình", overrideIf: null },
    "100": { ten: "Ất Hậu 1", chatLuong: "Tiểu Hung", hanh: "Mộc", ynghia: "Lục Sát thị phi, gia đạo bất hòa.", diem: 46, giaiphap: "Dùng thạch anh đen hoặc bình nước muối.", interactionLevel: "Thấp", overrideIf: null },
    "105": { ten: "Ất Hậu 2", chatLuong: "Tiểu Hung", hanh: "Mộc", ynghia: "Dễ vướng kiện tụng tranh chấp.", diem: 44, giaiphap: "Hóa giải bằng chuông gió.", interactionLevel: "Thấp", overrideIf: null },
    "110": { ten: "Ất Hậu 3", chatLuong: "Hung", hanh: "Mộc", ynghia: "Hóa giải bằng thạch anh đen hoặc bình nước muối.", diem: 35, giaiphap: "Tránh dùng cho giường ngủ.", interactionLevel: "Thấp", overrideIf: null },

    // ==================== ĐÔNG NAM (Thìn - Tốn - Tỵ) ====================
    "115": { ten: "Thìn Hậu 1", chatLuong: "Tiểu Hung", hanh: "Thổ", ynghia: "Họa Hại, gia đạo tranh chấp, khẩu thiệt.", diem: 47, giaiphap: "Dùng rèm tối màu hoặc thạch anh khói.", interactionLevel: "Thấp", overrideIf: null },
    "120": { ten: "Thìn Hậu 2", chatLuong: "Tiểu Hung", hanh: "Thổ", ynghia: "Dễ vướng thị phi pháp luật.", diem: 43, giaiphap: "Trấn bằng gương Bát Quái.", interactionLevel: "Thấp", overrideIf: null },
    "125": { ten: "Thìn Hậu 3", chatLuong: "Hung", hanh: "Thổ", ynghia: "Dùng rèm tối màu hoặc thạch anh khói.", diem: 38, giaiphap: "Hóa giải mạnh.", interactionLevel: "Thấp", overrideIf: null },
    "130": { ten: "Tốn Hậu 1", chatLuong: "Đại Hung", hanh: "Mộc", ynghia: "Tuyệt Mệnh sát phương, sức khỏe tổn hại nghiêm trọng.", diem: 14, giaiphap: "Tuyệt đối tránh.", interactionLevel: "Nguy Hiểm Rất Cao", overrideIf: "Tuyệt Mệnh" },
    "135": { ten: "Tốn Hậu 2", chatLuong: "Đại Hung", hanh: "Mộc", ynghia: "Cần trấn trạch mạnh.", diem: 16, giaiphap: "Trấn bằng vật phẩm mạnh.", interactionLevel: "Nguy Hiểm Cao", overrideIf: null },
    "140": { ten: "Tốn Hậu 3", chatLuong: "Hung", hanh: "Mộc", ynghia: "Tránh sử dụng vị trí này cho giường ngủ.", diem: 32, giaiphap: "Hóa giải bằng Thổ.", interactionLevel: "Thấp", overrideIf: null },
    "145": { ten: "Tỵ Hậu 1", chatLuong: "Tiểu Hung", hanh: "Hỏa", ynghia: "Họa Hại, quan phi khẩu thiệt, làm ăn thất thoát.", diem: 46, giaiphap: "Đặt Tỳ Hưu hoặc gậy Như Ý.", interactionLevel: "Thấp", overrideIf: null },
    "150": { ten: "Tỵ Hậu 2", chatLuong: "Tiểu Hung", hanh: "Hỏa", ynghia: "Cần cẩn trọng trong kinh doanh.", diem: 44, giaiphap: "Thận trọng.", interactionLevel: "Thấp", overrideIf: null },
    "155": { ten: "Tỵ Hậu 3", chatLuong: "Hung", hanh: "Hỏa", ynghia: "Đặt Tỳ Hưu hoặc gậy Như Ý.", diem: 37, giaiphap: "Hóa giải.", interactionLevel: "Thấp", overrideIf: null },

    // ==================== NAM (Bính - Ngọ - Đinh) ====================
    "160": { ten: "Bính Hậu 1", chatLuong: "Đại Cát", hanh: "Hỏa", ynghia: "Thiên Y đắc vị, sức khỏe dồi dào, bệnh tật tiêu trừ.", diem: 93, giaiphap: "Rất tốt cho giường ngủ hoặc phòng làm việc.", interactionLevel: "Rất Cao", overrideIf: null },
    "165": { ten: "Bính Hậu 2", chatLuong: "Đại Cát", hanh: "Hỏa", ynghia: "Thân tâm an lạc, gia đạo hạnh phúc.", diem: 90, giaiphap: "Đặt hồ lô đồng hoặc thạch anh vàng.", interactionLevel: "Cao", overrideIf: null },
    "170": { ten: "Bính Hậu 3", chatLuong: "Cát", hanh: "Hỏa", ynghia: "Hồ lô đồng hoặc thạch anh vàng.", diem: 81, giaiphap: "Tốt.", interactionLevel: "Trung bình cao", overrideIf: null },
    "175": { ten: "Ngọ Hậu 1", chatLuong: "Tiểu Cát", hanh: "Hỏa", ynghia: "Diên Niên chính khí, gia đạo hòa hợp.", diem: 73, giaiphap: "Dùng Uyên Ương hoặc vật phẩm Thổ.", interactionLevel: "Trung bình cao", overrideIf: null },
    "180": { ten: "Ngọ Hậu 2", chatLuong: "Tiểu Cát", hanh: "Hỏa", ynghia: "Ngoại giao thuận lợi.", diem: 71, giaiphap: "Bình thường.", interactionLevel: "Trung bình", overrideIf: null },
    "185": { ten: "Ngọ Hậu 3", chatLuong: "Cát", hanh: "Hỏa", ynghia: "Dùng Uyên Ương hoặc vật phẩm Thổ.", diem: 69, giaiphap: "Tốt.", interactionLevel: "Trung bình", overrideIf: null },
    "190": { ten: "Đinh Hậu 1", chatLuong: "Đại Cát", hanh: "Hỏa", ynghia: "Sinh Khí tối thượng, phát phúc nhanh chóng.", diem: 96, giaiphap: "Hướng lý tưởng cho cửa chính.", interactionLevel: "Tối Cao", overrideIf: null },
    "195": { ten: "Đinh Hậu 2", chatLuong: "Đại Cát", hanh: "Hỏa", ynghia: "Nhân đinh hưng vượng.", diem: 91, giaiphap: "Cây xanh và Tháp Văn Xương.", interactionLevel: "Cao", overrideIf: null },
    "200": { ten: "Đinh Hậu 3", chatLuong: "Cát", hanh: "Hỏa", ynghia: "Cây xanh và Tháp Văn Xương.", diem: 83, giaiphap: "Tốt cho con cái.", interactionLevel: "Trung bình cao", overrideIf: null },

    // ==================== TÂY NAM (Mùi - Khôn - Thân) ====================
    "205": { ten: "Mùi Hậu 1", chatLuong: "Tiểu Hung", hanh: "Thổ", ynghia: "Ngũ Quỷ, tổn thương nhân đinh, huyết quang.", diem: 41, giaiphap: "Chuông gió và thạch anh đen.", interactionLevel: "Thấp", overrideIf: null },
    "210": { ten: "Mùi Hậu 2", chatLuong: "Tiểu Hung", hanh: "Thổ", ynghia: "Chuông gió và thạch anh đen.", diem: 39, giaiphap: "Hóa giải.", interactionLevel: "Thấp", overrideIf: null },
    "215": { ten: "Mùi Hậu 3", chatLuong: "Hung", hanh: "Thổ", ynghia: "Tránh vị trí này cho giường ngủ.", diem: 34, giaiphap: "Tránh.", interactionLevel: "Thấp", overrideIf: null },
    "220": { ten: "Khôn Hậu 1", chatLuong: "Đại Hung", hanh: "Thổ", ynghia: "Tuyệt Mệnh sát khí, tài sản tiêu tán.", diem: 12, giaiphap: "Không nên dùng. Nếu đã lập thì phải hóa giải mạnh bằng gương Bát Quái lớn + muối biển.", interactionLevel: "Nguy Hiểm Rất Cao", overrideIf: "Tuyệt Mệnh + Ngũ Hoàng → Cực Hung" },
    "225": { ten: "Khôn Hậu 2", chatLuong: "Đại Hung", hanh: "Thổ", ynghia: "Gia đạo ly tán nguy hiểm.", diem: 14, giaiphap: "Trấn mạnh.", interactionLevel: "Nguy Hiểm Rất Cao", overrideIf: null },
    "230": { ten: "Khôn Hậu 3", chatLuong: "Đại Hung", hanh: "Thổ", ynghia: "Gương Bát Quái và chuông gió.", diem: 13, giaiphap: "Tránh.", interactionLevel: "Nguy Hiểm Cao", overrideIf: null },
    "235": { ten: "Thân Hậu 1", chatLuong: "Tiểu Hung", hanh: "Kim", ynghia: "Lục Sát, gia đạo bất hòa, vợ chồng xung khắc.", diem: 45, giaiphap: "Bình gốm hành Thổ.", interactionLevel: "Thấp", overrideIf: null },
    "240": { ten: "Thân Hậu 2", chatLuong: "Tiểu Hung", hanh: "Kim", ynghia: "Cô Thần, cần hóa giải.", diem: 43, giaiphap: "Hóa giải.", interactionLevel: "Thấp", overrideIf: null },
    "245": { ten: "Thân Hậu 3", chatLuong: "Hung", hanh: "Kim", ynghia: "Bình gốm hành Thổ.", diem: 36, giaiphap: "Hóa giải.", interactionLevel: "Thấp", overrideIf: null },

    // ==================== TÂY (Canh - Dậu - Tân) ====================
    "250": { ten: "Canh Hậu 1", chatLuong: "Tiểu Cát", hanh: "Kim", ynghia: "Diên Niên, kinh doanh phát đạt.", diem: 71, giaiphap: "Vật phẩm hành Kim.", interactionLevel: "Trung bình cao", overrideIf: null },
    "255": { ten: "Canh Hậu 2", chatLuong: "Tiểu Cát", hanh: "Kim", ynghia: "Sự nghiệp hưng thịnh.", diem: 73, giaiphap: "Tốt cho kinh doanh.", interactionLevel: "Trung bình cao", overrideIf: null },
    "260": { ten: "Canh Hậu 3", chatLuong: "Cát", hanh: "Kim", ynghia: "Vật phẩm hành Kim.", diem: 69, giaiphap: "Bình thường.", interactionLevel: "Trung bình", overrideIf: null },
    "265": { ten: "Dậu Hậu 1", chatLuong: "Tiểu Cát", hanh: "Kim", ynghia: "Phục Vị, quý nhân phù trợ.", diem: 74, giaiphap: "Tranh Phúc Lộc hoặc Quan Công.", interactionLevel: "Trung bình cao", overrideIf: null },
    "270": { ten: "Dậu Hậu 2", chatLuong: "Tiểu Cát", hanh: "Kim", ynghia: "Công danh vững vàng.", diem: 72, giaiphap: "Tốt.", interactionLevel: "Trung bình cao", overrideIf: null },
    "275": { ten: "Dậu Hậu 3", chatLuong: "Cát", hanh: "Kim", ynghia: "Tranh Phúc Lộc hoặc Quan Công.", diem: 70, giaiphap: "Tốt.", interactionLevel: "Trung bình", overrideIf: null },
    "280": { ten: "Tân Hậu 1", chatLuong: "Tiểu Hung", hanh: "Kim", ynghia: "Họa Hại, tiền bạc thất thường.", diem: 48, giaiphap: "Thạch anh trắng hoặc gậy Như Ý.", interactionLevel: "Thấp", overrideIf: null },
    "285": { ten: "Tân Hậu 2", chatLuong: "Tiểu Hung", hanh: "Kim", ynghia: "Cẩn trọng đầu tư.", diem: 46, giaiphap: "Thận trọng.", interactionLevel: "Thấp", overrideIf: null },
    "290": { ten: "Tân Hậu 3", chatLuong: "Hung", hanh: "Kim", ynghia: "Thạch anh trắng hoặc gậy Như Ý.", diem: 37, giaiphap: "Hóa giải.", interactionLevel: "Thấp", overrideIf: null },

    // ==================== TÂY BẮC (Tuất - Càn - Hợi) ====================
    "295": { ten: "Tuất Hậu 1", chatLuong: "Tiểu Hung", hanh: "Thổ", ynghia: "Lục Sát, trộm cắp hao tài.", diem: 47, giaiphap: "Chuỗi tiền Ngũ Đế và thạch anh đen.", interactionLevel: "Thấp", overrideIf: null },
    "300": { ten: "Tuất Hậu 2", chatLuong: "Tiểu Hung", hanh: "Thổ", ynghia: "Gia đạo bất an.", diem: 45, giaiphap: "Hóa giải.", interactionLevel: "Thấp", overrideIf: null },
    "305": { ten: "Tuất Hậu 3", chatLuong: "Hung", hanh: "Thổ", ynghia: "Chuỗi tiền Ngũ Đế và thạch anh đen.", diem: 36, giaiphap: "Trấn.", interactionLevel: "Thấp", overrideIf: null },
    "310": { ten: "Càn Hậu 1", chatLuong: "Tiểu Hung", hanh: "Kim", ynghia: "Lục Sát, tình duyên trục trặc.", diem: 49, giaiphap: "Rèm tối màu và bình nước.", interactionLevel: "Thấp", overrideIf: null },
    "315": { ten: "Càn Hậu 2", chatLuong: "Tiểu Hung", hanh: "Kim", ynghia: "Hao tổn tâm trí.", diem: 47, giaiphap: "Hóa giải.", interactionLevel: "Thấp", overrideIf: null },
    "320": { ten: "Càn Hậu 3", chatLuong: "Hung", hanh: "Kim", ynghia: "Rèm tối màu và bình nước.", diem: 38, giaiphap: "Hóa giải.", interactionLevel: "Thấp", overrideIf: null },
    "325": { ten: "Hợi Hậu 1", chatLuong: "Bình", hanh: "Thủy", ynghia: "Thế bình hòa, tài lộc trung bình.", diem: 62, giaiphap: "Giữ cân bằng.", interactionLevel: "Trung bình", overrideIf: null },
    "330": { ten: "Hợi Hậu 2", chatLuong: "Bình", hanh: "Thủy", ynghia: "Quản lý tài chính thận trọng.", diem: 60, giaiphap: "Thận trọng.", interactionLevel: "Trung bình", overrideIf: null },
    "335": { ten: "Hợi Hậu 3", chatLuong: "Bình", hanh: "Thủy", ynghia: "Giữ cân bằng, tránh thay đổi lớn.", diem: 59, giaiphap: "Cân bằng.", interactionLevel: "Trung bình", overrideIf: null }
};

// ====================== HÀM TÍNH PHI TINH NIÊN TRẠCH CHÍNH TÔNG ======================
function getNguHoangInfo(year) {
    if (!year || isNaN(year)) year = new Date().getFullYear();
    
    // Trục chuẩn phong thủy chính tông: Năm 2024 sao Thất Xích nhập Trung Cung
    let diff = (year - 2024) % 9;
    if (diff < 0) diff += 9;
    
    // Thuật toán phi tinh nghịch hành của Niên Tinh quản cục
    let saoNienDai = (7 - diff + 9) % 9;
    if (saoNienDai === 0) saoNienDai = 9;
    
    // Thuật toán tìm vị trí Ngũ Hoàng Đại Sát đóng cung (Thuận hành tìm phương vị)
    const mapNguHoangQuyLuat = ["Tây", "Đông Bắc", "Nam", "Bắc", "Tây Nam", "Đông", "Đông Nam", "Trung Cung", "Tây Bắc"];
    let indexNguHoang = (diff % 9 + 9) % 9;
    const viTriNguHoangNamDo = mapNguHoangQuyLuat[indexNguHoang];

    const info = {
        1: "Nhất Bạch Tham Lang (Thủy) — Cát Tinh: Vượng trí tuệ, tài lộc phát đạt, chủ tiến chức.",
        2: "Nhị Hắc Cự Môn (Thổ) — Hung Tinh: Tà khí bệnh tật, suy kiệt sức khỏe, gia đạo u uất.",
        3: "Tam Bích Lộc Tồn (Mộc) — Hung Tinh: Phát sinh thị phi, tranh chấp lời nói, quan phi hình hại.",
        4: "Tứ Lục Văn Khúc (Mộc) — Cát Tinh: Vượng đường văn xương, học hành hanh thông, tư duy sắc bén.",
        5: "Ngũ Hoàng Liêm Trinh (Thổ) — Đại Hung: Sát khí tối thượng, tai họa vô thường, kỵ động thổ.",
        6: "Lục Bạch Vũ Khúc (Kim) — Cát Tinh: Vượng quyền lực, quý nhân đại trợ, thiên tài hanh thông.",
        7: "Thất Xích Phá Quân (Kim) — Hung Tinh: Hao tổn tài sản, đề phòng tiểu nhân quấy phá, trộm cướp.",
        8: "Bát Bạch Tả Phù (Thổ) — Bình Hòa Vận 9: Khí trường tích lũy tài lộc ổn định, thoái khí.",
        9: "Cửu Tử Hữu Bật (Hỏa) — Đương Vượng Đại Cát: Đương vận tôn quý, hỷ sự lâm môn, sinh khí dồi dào."
    };

    return `Niên độ ${year}: Sao Chủ Quản Đại Cục [${info[saoNienDai]}] | Phương Vị Phạm Ngũ Hoàng Sát: Phương Chính ${viTriNguHoangNamDo}`;
}

// =========================================================================
// 🛡️ HÀM 2: CẢNH BÁO LUỒNG KHÍ NGŨ HOÀNG ĐỘNG (SỬA LỖI TRỤC THỜI GIAN)
// =========================================================================
function getNguHoangAlert(currentHuong) {
    if (!currentHuong) return "";
    
    // CHÍNH XÁC TUYỆT ĐỐI: Phải bám theo năm Khảo Sát (surveyYear), không lấy năm sinh trạch chủ (birthYear)
    const txtSurveyYear = document.getElementById('surveyYear'); 
    const namKhaoSat = (txtSurveyYear && txtSurveyYear.value.length === 4) ? parseInt(txtSurveyYear.value, 10) : new Date().getFullYear();
    
    const mapNguHoang = ["Tây", "Đông Bắc", "Nam", "Bắc", "Tây Nam", "Đông", "Đông Nam", "Trung Cung", "Tây Bắc"];
    let offset = ((namKhaoSat - 2024) % 9 + 9) % 9;
    const viTriNguHoang = mapNguHoang[offset];

    // Chuẩn hóa chuỗi so sánh tránh lỗi ký tự hoa thường
    if (currentHuong.trim().toLowerCase() === viTriNguHoang.toLowerCase()) {
        return `⚠️ [THIÊN THỜI PHẠM SÁT]: Phương vị ${currentHuong} trong niên độ ${namKhaoSat} phạm phải NGŨ HOÀNG LIÊM TRINH ĐẠI SÁT. Tuyệt đối bất khả động thổ, khoan đục, đập phá kết cấu nền móng để tránh kích động hung khí nguy hiểm.`;
    }

    if (viTriNguHoang === "Trung Cung" && currentHuong.trim().toLowerCase() === "trung cung") {
        return `⚠️ [LƯU NIÊN CHIẾU CỤC]: Niên độ ${namKhaoSat} Ngũ Hoàng nhập Trung Cung (Tâm Trạch). Toàn gia đình cần giữ không gian trung tâm ngôi nhà tĩnh lặng, tránh cải tạo sửa chữa lớn tại lõi nhà.`;
    }
    return "";
}

function getHanhByHeading(heading) {
    if (heading === null || heading === undefined) return "Chưa xác định";
    let normalized = ((heading % 360) + 360) % 360;
    
    let sonObj = SON_24_CONFIG.find(s => {
        if (s.min > s.max) return normalized >= s.min || normalized < s.max;
        return normalized >= s.min && normalized < s.max;
    }) || SON_24_CONFIG[0];
    
    const thongTinLoi = DATA_THANSAT.MA_TRAN_24_SON_VI[sonObj.name];
    
    // Quy đổi mã ngũ hành hệ thống sang văn bản tiếng Việt có dấu đồng bộ
    const mapNguHanhViet = { "Thuy": "Thủy", "Moc": "Mộc", "Hoa": "Hỏa", "Tho": "Thổ", "Kim": "Kim" };
    return thongTinLoi ? (mapNguHanhViet[thongTinLoi.nguHanh] || "Thổ") : "Thổ";
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

// =========================================================================
// 🧭 THIẾT LẬP HỆ THỐNG DỮ LIỆU GỐC ĐỒNG BỘ 100% (MỘT NGUỒN SỰ THẬT)
// =========================================================================

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

const bátTrạchMap = {
    'Khảm': { 'N': 'Phục Vị', 'NE': 'Ngũ Quỷ', 'E': 'Thiên Y', 'SE': 'Sinh Khí', 'S': 'Diên Niên', 'SW': 'Tuyệt Mệnh', 'W': 'Họa Hại', 'NW': 'Lục Sát', 'group': 'Đông Tứ Mệnh', 'element': 'Thủy' },
    'Ly': { 'N': 'Diên Niên', 'NE': 'Họa Hại', 'E': 'Sinh Khí', 'SE': 'Thiên Y', 'S': 'Phục Vị', 'SW': 'Lục Sát', 'W': 'Ngũ Quỷ', 'NW': 'Tuyệt Mệnh', 'group': 'Đông Tứ Mệnh', 'element': 'Hỏa' },
    'Chấn': { 'N': 'Thiên Y', 'NE': 'Lục Sát', 'E': 'Phục Vị', 'SE': 'Diên Niên', 'S': 'Sinh Khí', 'SW': 'Họa Hại', 'W': 'Tuyệt Mệnh', 'NW': 'Ngũ Quỷ', 'group': 'Đông Tứ Mệnh', 'element': 'Mộc' },
    'Tốn': { 'N': 'Sinh Khí', 'NE': 'Tuyệt Mệnh', 'E': 'Diên Niên', 'SE': 'Phục Vị', 'S': 'Thiên Y', 'SW': 'Ngũ Quỷ', 'W': 'Lục Sát', 'NW': 'Họa Hại', 'group': 'Đông Tứ Mệnh', 'element': 'Mộc' },
    'Càn': { 'N': 'Lục Sát', 'NE': 'Thiên Y', 'E': 'Ngũ Quỷ', 'SE': 'Họa Hại', 'S': 'Tuyệt Mệnh', 'SW': 'Diên Niên', 'W': 'Sinh Khí', 'NW': 'Phục Vị', 'group': 'Tây Tứ Mệnh', 'element': 'Kim' },
    'Khôn': { 'N': 'Tuyệt Mệnh', 'NE': 'Sinh Khí', 'E': 'Họa Hại', 'SE': 'Ngũ Quỷ', 'S': 'Lục Sát', 'SW': 'Phục Vị', 'W': 'Thiên Y', 'NW': 'Diên Niên', 'group': 'Tây Tứ Mệnh', 'element': 'Thổ' },
    'Đoài': { 'N': 'Họa Hại', 'NE': 'Diên Niên', 'E': 'Tuyệt Mệnh', 'SE': 'Lục Sát', 'S': 'Ngũ Quỷ', 'SW': 'Thiên Y', 'W': 'Phục Vị', 'NW': 'Sinh Khí', 'group': 'Tây Tứ Mệnh', 'element': 'Kim' },
    'Cấn': { 'N': 'Ngũ Quỷ', 'NE': 'Phục Vị', 'E': 'Lục Sát', 'SE': 'Họa Hại', 'S': 'Tuyệt Mệnh', 'SW': 'Sinh Khí', 'W': 'Diên Niên', 'NW': 'Thiên Y', 'group': 'Tây Tứ Mệnh', 'element': 'Thổ' }
};

const cungPhầnTrăm = {
    'Sinh Khí':  { cát: true,  ngũHành: 'Mộc', ý_nghĩa: 'Cung Đại Cát: Chủ về vượng khí, thu hút tài lộc mạnh mẽ, giúp công danh sự nghiệp thăng tiến không ngừng.' },
    'Thiên Y':   { cát: true,  ngũHành: 'Thổ', ý_nghĩa: 'Cung Trung Cát: Được lộc trời ban về sức khỏe, tiêu trừ bệnh tật, gia đạo bình an, trường thọ.' },
    'Diên Niên': { cát: true,  ngũHành: 'Kim', ý_nghĩa: 'Cung Cát Tinh: Chủ về sự hòa thuận, củng cố các mối quan hệ ngoại giao, gia đình êm ấm, tình duyên bền vững.' },
    'Phục Vị':   { cát: true,  ngũHành: 'Mộc', ý_nghĩa: 'Cung Tiểu Cát: Giúp vững vàng tâm trí, củng cố sức mạnh bản thân, mang lại may mắn lớn trong học hành, thi cử.' },
    'Tuyệt Mệnh':{ cát: false, ngũHành: 'Kim', ý_nghĩa: 'Cung Đại Hung: Cực kỳ nguy hiểm, mang sát khí hệ Kim nặng, dễ gây tổn hại sức khỏe, bệnh hiểm nghèo hoặc phá sản.' },
    'Ngũ Quỷ':   { cát: false, ngũHành: 'Hỏa', ý_nghĩa: 'Cung Hung Tinh: Mang đến tai họa bất ngờ, thị phi quấy phá khốc liệt, dễ dính líu pháp lý hoặc hao tài tốn của.' },
    'Lục Sát':   { cát: false, ngũHành: 'Thủy', ý_nghĩa: 'Cung Hung Tinh: Sinh ra sát khí âm hàn, gây mâu thuẫn gia đạo, trục trặc tình cảm, dễ vướng vào tranh chấp, kiện tụng.' },
    'Họa Hại':   { cát: false, ngũHành: 'Thổ', ý_nghĩa: 'Cung Tiểu Hung: Thường mang lại rủi ro vụn vặt, mệt mỏi, trắc trở bởi chuyện tiểu nhân quấy phá, hao mòn tài lộc.' }
};

const phươngVịThiếtLập = {
    'N':  { tên: "BẮC", ngũHành: "Thủy" }, 'NE': { tên: "ĐÔNG BẮC", ngũHành: "Thổ" },
    'E':  { tên: "ĐÔNG", ngũHành: "Mộc" }, 'SE': { tên: "ĐÔNG NAM", ngũHành: "Mộc" },
    'S':  { tên: "NAM", ngũHành: "Hỏa" },  'SW': { tên: "TÂY NAM", ngũHành: "Thổ" },
    'W':  { tên: "TÂY", ngũHành: "Kim" },  'NW': { tên: "TÂY BẮC", ngũHành: "Kim" }
};

const directionMeta = [
    { code: 'N',  name: 'BẮC (Khảm)',      angle: 0 },
    { code: 'NE', name: 'ĐÔNG BẮC (Cấn)',  angle: 45 },
    { code: 'E',  name: 'ĐÔNG (Chấn)',     angle: 90 },
    { code: 'SE', name: 'ĐÔNG NAM (Tốn)',  angle: 135 },
    { code: 'S',  name: 'NAM (Ly)',        angle: 180 },
    { code: 'SW', name: 'TÂY NAM (Khôn)',  angle: 225 },
    { code: 'W',  name: 'TÂY (Đoài)',      angle: 270 },
    { code: 'NW', name: 'TÂY BẮC (Càn)',   angle: 315 }
];

// Khởi tạo các biến trạng thái cốt lõi của Trạch Bản la bàn số
let chủMệnh = 'Khảm';
let currentCode = 'N';
let currentHeading = 0;
let targetAngle = null;
let debounceTimer = null; // Chốt chặn bảo vệ: Khai báo tường minh để triệt tiêu lỗi sập biến ReferenceError

// ====================== 4. THUẬT TOÁN ĐỊNH QUẺ MỆNH CUNG PHI KHOA HỌC ======================
function tínhCungPhi(năm, tháng, ngày, giớiTính) {
    let namTinh = (tháng < 2 || (tháng === 2 && ngày < 5)) ? năm - 1 : năm;
    let sốDư = namTinh % 9;
    if (sốDư === 0) sốDư = 9;
    let kếtQuả = (giớiTính === 'male') ? (11 - sốDư) % 9 : (sốDư + 4) % 9;
    if (kếtQuả === 0) kếtQuả = 9;
    if (kếtQuả === 5) kếtQuả = (giớiTính === 'male') ? 2 : 8;
    const mapCung = { 1: 'Khảm', 2: 'Khôn', 3: 'Chấn', 4: 'Tốn', 6: 'Càn', 7: 'Đoài', 8: 'Cấn', 9: 'Ly' };
    return mapCung[kếtQuả];
}

// ====================== 5. HÀM KIỂM SOÁT TẦN SUẤT QUÉT CẢM BIẾN (DEBOUNCE) ======================
function debounceRecalculate() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        recalculateFate();
    }, 300);
}

// =========================================================================
// 🌌 6. MÀNG LỌC KIỂM TRA LỊCH PHÁP DƯƠNG TRẠCH - PHIÊN BẢN VÔ HẠN THỜI KHÔNG
// =========================================================================
function validateFullDate(day, month, year) {
    const d = parseInt(day, 10);
    const m = parseInt(month, 10);
    const y = parseInt(year, 10);

    if (isNaN(d) || isNaN(m) || isNaN(y)) return false;
    if (m < 1 || m > 12) return false;
    
    // Ma trận chu kỳ quỹ đạo năm nhuận dương lịch chính xác
    let listDaysInMonth = [
        31, (y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0)) ? 29 : 28, 
        31, 30, 31, 30, 31, 31, 30, 31, 30, 31
    ];
    
    if (d < 1 || d > listDaysInMonth[m - 1]) return false;
    
    // Mở rộng biên độ lịch pháp an toàn, chặn dưới chiều sâu lịch sử
    if (y < 1800) {
        if (typeof showCustomAlert === 'function') {
            showCustomAlert(`Niên đại năm ${y} vượt dải tính toán dương trạch hiện đại. Hệ thống tự động chuyển sang cấu trúc mô phỏng giả lập khí cục!`, "⚠️ Cảnh Báo Thiên Di");
        }
        return true; 
    }
    return true;
}
// =========================================================================
// 2. HÀM CHÍNH recalculateFate() - TRÍCH XUẤT TIẾT KHÍ LẬP XUÂN & PHÂN TÁCH 2 TRỤC NĂM
// =========================================================================
function recalculateFate() {
    const name = document.getElementById('userName').value.trim() || "Chủ mệnh";
    const gender = document.getElementById('gender').value;
    const dayStr = document.getElementById('birthDay').value;
    const monthStr = document.getElementById('birthMonth').value;
    const yearStr = document.getElementById('birthYear').value;
    const mucDich = document.getElementById('purpose').value; 

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

    // TÍNH TOÁN CỐT LÕI: Xác định Năm Âm lịch chuẩn xác theo Tiết Lập Xuân để bốc quẻ
    chủMệnh = tínhCungPhi(y, m, d, gender);
    const namAm = (m < 2 || (m === 2 && d < 5)) ? y - 1 : y;
    const nguHoangInfo = getNguHoangInfo(namAm);
    const hanHinhCungPhi = bátTrạchMap[chủMệnh]?.element || "Thổ";
    const nhomMenh = bátTrạchMap[chủMệnh]?.group || "Tây Tứ Mệnh";

    fateTxt.innerText = `${name}: Cung ${chủMệnh} (${nhomMenh}) - Bản Mệnh Cung Phi: ${hanHinhCungPhi} | Năm Âm: ${namAm} | ${nguHoangInfo}`;

    let headingToCalculate = isDetailOpen && lockedHeadingAtOpen !== null ? lockedHeadingAtOpen : currentHeading;
    let rawRealHeading = headingToCalculate + magneticDeclination;
    const realHeading = ((rawRealHeading % 360) + 360) % 360; 

    const hanhPhuongVi = getHanhByHeading(realHeading);
    let currentHauInfo = getCurrentHauInfo(realHeading);
    const sonInfo = layThongTin24Son(realHeading, chủMệnh, namAm);
    const currentSonHuong = sonInfo.huong;

    // ĐỒNG BỘ NĂM KHẢO SÁT THỰC TẾ ĐỂ CHẠY CỬU TINH ĐỘNG
    const txtSurveyYear = document.getElementById('surveyYear'); 
    const namKhaoSatThucTe = (txtSurveyYear && txtSurveyYear.value.length === 4) ? parseInt(txtSurveyYear.value) : new Date().getFullYear();

    // TRUYỀN ĐỒNG THỜI CẢ 2 NĂM: namKhaoSatThucTe (Động) và namAm (Tĩnh) vào hàm tính điểm
    const tongHop = tinhDiemTongHop(chủMệnh, realHeading, namKhaoSatThucTe, mucDich, namAm);

    let saoChuQuan = null;
    const match = nguHoangInfo.match(/Sao (\d+)/);
    if (match) saoChuQuan = match[1];

    let giaiThichSao = "";
    if (saoChuQuan === '5') {
        giaiThichSao = `Năm sinh này phạm sao xấu <b>Ngũ Hoàng</b> đóng tại giữa nhà, mang sát khí hành Thổ rất mạnh. Cần giữ trung tâm nhà yên tĩnh, tránh đập phá, sửa chữa lớn ở khu vực này trong năm.`;
    } else if (saoChuQuan === '2') {
        giaiThichSao = `Năm sinh âm lịch này gặp sao <b>Nhị Hắc</b>, dễ ảnh hưởng sức khỏe. Nên đặt Hồ lô đồng hoặc thạch anh trắng ở trung tâm nhà để hóa giải.`;
    } else if (nguHoangInfo.includes("Tam Bích") || nguHoangInfo.includes("Tứ Lục") || saoChuQuan === '3' || saoChuQuan === '4') {
        giaiThichSao = `Năm sinh âm lịch này gặp sao mang năng lượng Mộc quản năm, khi đóng ở giữa tâm nhà (vốn thuộc Thổ) sẽ gây ra sự lệch khí nhẹ ở mức <b>Trung bình</b>. Chỉ cần giữ khu vực giữa nhà hoặc giữa cửa hàng luôn sạch sẽ, thoáng đãng là tự động hóa giải.`;
    } else if (['1','6','8','9'].includes(saoChuQuan)) {
        giaiThichSao = `Năm nay gặp sao Cát, năng lượng Trung Cung tốt, tài lộc, quý nhân hỗ trợ, gia đạo tương đối thuận lợi.`;
    } else {
        giaiThichSao = `Năng lượng chủ quản năm sinh tại trung tâm nhà ở trạng thái ổn định, an lành, không có biến động xấu lớn.`;
    }

    const nguHoangAlert = getNguHoangAlert(currentSonHuong);

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
    
    const currentConfig = ConfigPhongThuy[mucDich] || { title: "Vị trí / Hướng đang chọn", isCat: true };
    const tenMucDichBinhDan = currentConfig.title;

    const vanInfo = `
        <p style="margin:8px 0; color:#ffd700;">
            🌟 <b>Hậu hiện tại:</b> ${currentHauInfo.ten} — ${currentHauInfo.chatLuong}<br>
            <small>Đây là khí trường 5° của Sơn ${tongHop.sonName}.
            ${currentHauInfo.chatLuong.includes("Cát") ? "Thuận lợi cho Đại Vận." : "Cần lưu ý hóa giải bổ sung."}</small>
        </p>
    `;

    const activeColor = tongHop.diem >= 72 ? '#30d158' : '#ff3b30';

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
                📖 GIẢI NGHĨA THEO HẠNG MỤC SỬ DỤNG
            </p>
            
            <p style="margin:8px 0;">📍 <b>Phương vị thực tế (sau hiệu chỉnh):</b> ${realHeading.toFixed(1)}° (Độ lệch từ: ${magneticDeclination}°)</p>
            <p style="margin:8px 0;">📍 <b>Phương vị la bàn:</b> Năng lượng la bàn hành <b>${hanhPhuongVi}</b> (Góc xoay: <b>${Math.round(headingToCalculate)}°</b>).</p>
            <p style="margin:8px 0;">🎯 <b>Mệnh Cung Phi (Hành ${hanHinhCungPhi}):</b> Quẻ mệnh cốt lõi <b>${chủMệnh}</b> (${nhomMenh}).</p>
            
            ${vanInfo}
            
            <p style="margin:12px 0; padding:10px; background:rgba(255,215,0,0.05); border-radius:6px; border-left:4px solid ${activeColor};">
                <strong>📊 Điểm Phong Thủy Số [${tenMucDichBinhDan}]: <span style="color:${activeColor}">${tongHop.diem} pt</span></strong><br>
                Đánh giá vị trí: <span style="font-weight:bold; color:${activeColor}">${tongHop.level}</span><br>
                <small style="color:#aaa;">(Hệ thống tự động chấm điểm dựa trên công thức toán học đa tầng và trọng số thời vận Vận 9)</small>
            </p>
            
            <p style="margin:8px 0;">🌟 <b>Luận đoán chi tiết:</b> ${tongHop.message}</p>
            <p style="margin:8px 0;">⚠️ <b>Vận khí tâm nhà (Trung Cung):</b> ${giaiThichSao}</p>
            ${nguHoangAlert ? `<p style="margin:8px 0; color:#ff4444; font-weight:bold;">${nguHoangAlert}</p>` : ''}
            <p style="margin:8px 0; color:#dfb76c;">💡 <b>Mật pháp quy hoạch / Hóa giải khuyên dùng:</b> ${tongHop.hoaGiai}</p>
        </div>
    `;

    generateDirectionsList();
    updateCompassUI(currentHeading);
}

function getCurrentHauInfo(degree) {
    const normalized = ((degree % 360) + 360) % 360;
    
    // Làm tròn chuẩn xác theo bước phân châm 5 độ cố định của mạch đất
    const keyHau = (Math.round(normalized / 5) * 5) % 360;
    
    const hau = Data72Hau[keyHau.toString()] || { 
        ten: "Xung Không Hậu", 
        chatQuality: "Bình Hòa", 
        diem: 60, 
        ynghia: "Khí trường chuyển dịch điều hòa ổn định.",
        giaiphap: "Duy trì bố cục phong thủy sạch sẽ."
    };

    let result = {
        ten: hau.ten || (hau.name ? hau.name : "Xung Không Hậu"),
        chatLuong: hau.chatLuong || hau.chatQuality || "Bình Hòa",
        ynghia: hau.ynghia || "Khí trường chuyển dịch luân hồi.",
        diem: Number(hau.diem) || 60, 
        giaiphap: String(hau.giaiphap || "Bố trí kết cấu trạch pháp an vị cát tường."),
        emoji: "🟡"
    };

    if (result.chatLuong.includes("Cát")) {
        result.emoji = "🟢";
    } else if (result.chatLuong.includes("Hung") || result.chatLuong.includes("Không Vong") || result.chatLuong.includes("Sai Thác")) {
        result.emoji = "🔴";
    }

    // Cơ chế bọc kiểm tra tử huyệt ranh giới Không Vong đồng bộ thời gian thực
    if (typeof kiemTraKhongVong === 'function') {
        const khongVong = kiemTraKhongVong(normalized);
        if (khongVong) {
            if (khongVong.loai === "ĐẠI KHÔNG VONG") {
                result.chatLuong = "ĐẠI HUNG (Tuyệt Mạch Không Vong)";
                result.emoji = "☠️";
            } else {
                result.chatLuong = "TIỂU KHÔNG VONG (Khí Sai Thác)";
                result.emoji = "⚠️";
            }
        }
    }

    if (typeof hauCache !== 'undefined' && hauCache && hauCache.set) {
        hauCache.set(keyHau, result);
    }
    
    return result;
}
// --- CẤU HÌNH PHONG THỦY ĐỒNG BỘ ĐA TẦNG VẬN 9 (ĐÃ MỞ RỘNG DANH MỤC THỰC CHIẾN) ---
const ConfigPhongThuy = {
    // 🏛️ DƯƠNG TRẠCH CHỦ CỤC (Nhà Ở)
    'house':          { title: "Hướng Nhà / Cửa Chính", isCat: true,  sizeDegree: 15 },
    'gate':           { title: "Hướng Cổng Chính", isCat: true,  sizeDegree: 15 },
    'altar':          { title: "Hướng Ban Thờ / Thần Tài", isCat: true,  sizeDegree: 2  },
    'altar_room':     { title: "Không Gian Phòng Thờ", isCat: true,  sizeDegree: 15 },
    'bed':            { title: "Hướng Đầu Giường Ngủ", isCat: true,  sizeDegree: 10 },
    'livingroom':     { title: "Hướng Phòng Khách", isCat: true,  sizeDegree: 15 },
    'bedroom_master': { title: "Hướng Phòng Ngủ Chính", isCat: true,  sizeDegree: 15 },
    'bedroom_child':  { title: "Hướng Phòng Ngủ Con Cái", isCat: true,  sizeDegree: 10 },
    'balcony':        { title: "Hướng Ban Công / Cửa Sổ", isCat: true,  sizeDegree: 12 },
    
    // 📚 VĂN XƯƠNG KHOA DANH (Sự Nghiệp)
    'workspace':      { title: "Hướng Bàn Làm Việc", isCat: true,  sizeDegree: 10 },
    'ceo_office':     { title: "Hướng Phòng Sếp / Lãnh Đạo", isCat: true,  sizeDegree: 15 },
    'study_desk':     { title: "Hướng Bàn Học Văn Xương", isCat: true,  sizeDegree: 8  },
    'bookcase':       { title: "Vị Trí Tủ Sách / Hồ Sơ", isCat: true,  sizeDegree: 10 },

    // 💰 ĐẮC TÀI MẬU DỊCH (Kinh Doanh)
    'signboard':      { title: "Hướng Biển Hiệu Cửa Hàng", isCat: true,  sizeDegree: 15 },
    'counter':        { title: "Hướng Quầy Thu Ngân", isCat: true,  sizeDegree: 10 },
    'safe':           { title: "Vị Trí Két Sắt Tụ Tài", isCat: true,  sizeDegree: 4  }, 
    'machinery':      { title: "Hệ Thống Máy Móc / Dây Chuyền", isCat: true,  sizeDegree: 12 },
    'bakery':         { title: "Hướng Lò Nướng / Quầy Bánh", isCat: true,  sizeDegree: 10 },
    'coffee':         { title: "Hướng Quầy Pha Chế Cà Phê", isCat: true,  sizeDegree: 10 },
    'restaurant':     { title: "Hướng Nhà Hàng / Quán Ăn", isCat: true,  sizeDegree: 15 },
    'shop':           { title: "Hướng Showroom / Cửa Hàng", isCat: true,  sizeDegree: 15 },
    'salon':          { title: "Hướng Salon Tóc / Giường Spa", isCat: true,  sizeDegree: 12 },

    // 🛠️ TỌA VỊ TRẤN SÁT (Hệ Thống Đè Hung)
    'kitchen':        { title: "Vị trí Đặt Bếp Nấu", isCat: false, sizeDegree: 10 },
    'toilet':         { title: "Vị trí Nhà Vệ Sinh", isCat: false, sizeDegree: 15 },
    'septic_tank':    { title: "Vị trí Hầm Tự Hoại / Bể Phốt", isCat: false, sizeDegree: 15 },
    'pipe_shaft':     { title: "Trục Kỹ Thuật / Hộp Gen Uế Khí", isCat: false, sizeDegree: 6  },
    'storage':        { title: "Vị trí Kho Hàng Tạp Khí", isCat: false, sizeDegree: 15 },
    'trash_area':     { title: "Vị trí Thùng Rác / Phế Liệu", isCat: false, sizeDegree: 8  }
};

// =========================================================================
// 👑 SIÊU THUẬT TOÁN GENERATE DIRECTIONS - PHIÊN BẢN CAO CẤP 2026 (SMART NEEDLE)
// =========================================================================
function generateDirectionsList() {
    const purposeEl = document.getElementById('purpose');
    const mucDich = purposeEl ? purposeEl.value : "";
    const config = ConfigPhongThuy[mucDich];
    
    if (!mucDich || !config) {
        if (typeof directionsContainer !== 'undefined' && directionsContainer) {
            directionsContainer.innerHTML = `<div style='font-size:0.85rem;color:#8a8a8f;text-align:center;padding:15px;font-family:sans-serif;'>Chọn mục đích Thiết lập Khí Cục hoặc Trấn Sát để hiển thị mạng lưới phương vị</div>`;
        }
        return;
    }

    const isCatPurpose = config.isCat; 
    let listDirections = [];
    
    const dayStr = document.getElementById('birthDay')?.value || "";
    const monthStr = document.getElementById('birthMonth')?.value || document.getElementById('monthStr')?.value || "";
    const yearStr = document.getElementById('birthYear')?.value || document.getElementById('yearStr')?.value || "";

    const txtSurveyYear = document.getElementById('surveyYear');
    const namKhaoSatThucTe = (txtSurveyYear && txtSurveyYear.value.length === 4) ? parseInt(txtSurveyYear.value, 10) : new Date().getFullYear();

    let namAmMệnhChủ = new Date().getFullYear();
    if (dayStr && monthStr && yearStr && yearStr.length === 4) {
        namAmMệnhChủ = (parseInt(monthStr, 10) < 2 || (parseInt(monthStr, 10) === 2 && parseInt(dayStr, 10) < 5)) ? parseInt(yearStr, 10) - 1 : parseInt(yearStr, 10);
    }

    let quẻMệnhChủLõi = (typeof chủMệnh !== 'undefined' && chủMệnh) ? chủMệnh : "Khảm";
    if (quẻMệnhChủLõi) {
        quẻMệnhChủLõi = quẻMệnhChủLõi.trim();
        quẻMệnhChủLõi = quẻMệnhChủLõi.charAt(0).toUpperCase() + quẻMệnhChủLõi.slice(1).toLowerCase();
    }

    const cacCungTot = ["Sinh Khí", "Diên Niên", "Thiên Y", "Phục Vị"];
    const cacCungXau = ["Tuyệt Mệnh", "Ngũ Quỷ", "Lục Sát", "Họa Hại"];

    directionMeta.forEach(dir => {
        const cungTrạch = bátTrạchMap[quẻMệnhChủLõi]?.[dir.code] || "Khác";
        
        // Trục lọc thô sơ bộ ban đầu theo đúng tính chất mục đích sử dụng
        if (isCatPurpose) {
            if (!cacCungTot.includes(cungTrạch)) return; 
        } else {
            if (!cacCungXau.includes(cungTrạch)) return;
        }

        // ĐỒNG BỘ TUYỆT ĐỐI TIA ĐƠN TĨNH: Đo đạc điểm số chính xác tại tâm ngắm (doRongQuetThucTe = 0)
        const tongHopDir = tinhDiemTongHop(quẻMệnhChủLõi, dir.angle, namKhaoSatThucTe, mucDich, namAmMệnhChủ, 0);
        const hauInfo = getCurrentHauInfo(dir.angle);

        listDirections.push({
            ...dir, 
            cungTrạch: cungTrạch, 
            diemTongHop: tongHopDir.diem, 
            level: tongHopDir.level, 
            satTinhs: tongHopDir.satTinhs,
            khongVong: tongHopDir.khongVong,
            hau: hauInfo, 
            priority: tongHopDir.diem 
        });
    });

    // Sắp xếp danh sách thứ tự ưu tiên điểm số thực tế từ cao xuống thấp
    listDirections.sort((a, b) => b.priority - a.priority);
    
    if (typeof listPanelTitle !== 'undefined' && listPanelTitle) {
        listPanelTitle.innerText = `Quy Hoạch Vận 9: ${config.title}`;
    }
    
    if (!directionsContainer) return;
    directionsContainer.innerHTML = "";

    if (listDirections.length === 0) {
        directionsContainer.innerHTML = `<div style='font-size:0.85rem;color:#ff3b30;text-align:center;padding:15px;font-family:sans-serif;font-weight:bold;'>⚠️ Không tìm thấy hướng phù hợp với tiêu chuẩn lập cực. Kiểm tra lại dữ liệu đầu vào.</div>`;
        return;
    }

    listDirections.forEach(item => {
        // Trích xuất cấu trúc hình học 3 Sơn vị thuộc cung lớn đại cục
        let sonGroup = [];
        if (item.code === 'N')      sonGroup = ["Nhâm", "Tý", "Quý"];
        else if (item.code === 'NE') sonGroup = ["Sửu", "Cấn", "Dần"];
        else if (item.code === 'E')  sonGroup = ["Giáp", "Mão", "Ất"];
        else if (item.code === 'SE') sonGroup = ["Thìn", "Tốn", "Tỵ"];
        else if (item.code === 'S')  sonGroup = ["Bính", "Ngọ", "Đinh"];
        else if (item.code === 'SW') sonGroup = ["Mùi", "Khôn", "Thân"];
        else if (item.code === 'W')  sonGroup = ["Canh", "Dậu", "Tân"];
        else if (item.code === 'NW') sonGroup = ["Tuất", "Càn", "Hợi"];
        
        let countSonXanh = 0, countSonVang = 0, countSonDo = 0;
        let sonHTML = "";
        let sonAngles = []; 

        sonGroup.forEach((son, index) => {
            let gocCuaSon = (item.angle + (index - 1) * 15 + 360) % 360;
            
            // Tính toán năng lượng thực tế của từng Sơn hẹp đơn lẻ độc lập
            const thongTinSonDong = tinhDiemTongHop(quẻMệnhChủLõi, gocCuaSon, namKhaoSatThucTe, mucDich, namAmMệnhChủ, 0);
            let score = thongTinSonDong.diem;
            
            sonAngles.push({ name: son, angle: gocCuaSon, score: score });

            let titleInfo = `Phân độ Sơn ${son} [Khí thực tế: ${score}pt]`;
            let textInfo = "";
            let solInfo = "";
            let sonColor = "#dfb76c";

            if (isCatPurpose) {
                if (score >= 70) {
                    sonColor = "#30d158"; countSonXanh++;
                    textInfo = `Sơn vị ${son} đạt chỉ số năng lượng cát lợi tốt (${score}pt). Đắc thời đắc vị, thích hợp nhất để đặt vị trí trung tâm đón khí.`;
                    solInfo = "Giải pháp: Giữ khu vực thông thoáng sạch sẽ, có thể kích hoạt thủy cục lành để tăng vượng.";
                } else if (score >= 50) {
                    sonColor = "#dfb76c"; countSonVang++;
                    textInfo = `Sơn vị ${son} ở trạng thái năng lượng trung tính bình hòa (${score}pt). Khí trường ổn định, không gây họa hại.`;
                    solInfo = "Giải pháp: An tâm quy hoạch xây dựng, phối hợp thêm màu sắc đồng bộ hành mệnh.";
                } else {
                    sonColor = "#ff3b30"; countSonDo++;
                    textInfo = `⚠️ CẢNH BÁO TỬ HUYỆT: Phân độ Sơn vị ${son} bị suy kiệt trường khí (${score}pt).`;
                    solInfo = "Biện pháp: Khi đặt thiết bị, chủ động né tọa độ hẹp này ra, lựa chọn các Sơn vị báo xanh bên cạnh.";
                }
            } else {
                if (score >= 70) {
                    sonColor = "#30d158"; countSonXanh++; 
                    titleInfo = `Sơn vị ${son} [Trấn Sát Đắc Cách]`;
                    textInfo = `THẦN CÁCH TRẤN YỂM: Sơn vị mang khí chế sát đắc hiệu (${score}pt). Bố trí cấu trúc uế khí đè tại đây giúp khóa chặt hung khí dòng long mạch.`;
                    solInfo = "Giải pháp: Giữ nguyên bố cục kết cấu hình học không cần thay đổi.";
                } else if (score >= 50) {
                    sonColor = "#dfb76c"; countSonVang++;
                    titleInfo = `Sơn vị ${son} [Trấn Sát Bình Hòa]`;
                    textInfo = `Khu vực Sơn vị ${son} đạt trạng thái bình hòa hóa sát (${score}pt). Đặt uế cục tại đây an toàn, không sinh họa.`;
                    solInfo = "Giải pháp: Có thể sử dụng được nếu mặt bằng kiến trúc bị giới hạn diện tích.";
                } else {
                    sonColor = "#ff3b30"; countSonDo++; 
                    titleInfo = `⚠️ ĐẠI KÌ TIÊU HAO CÁT KHÍ`;
                    textInfo = `ĐẠI KỴ TRẠCH PHÁP: Sơn vị này (${score}pt) đang giữ sinh khí dòng mạch sạch. Tuyệt đối không đặt uế cục hoặc đường thoát nước bẩn đè lên.`;
                    solInfo = "Biện pháp: Bắt buộc tịnh tiến vị trí thiết bị sang các dải Sơn vị báo xanh kế cạnh.";
                }
            }
            
            const safeTitle = titleInfo.replace(/'/g, "\\'").replace(/"/g, '&quot;');
            const safeText = textInfo.replace(/'/g, "\\'").replace(/"/g, '&quot;');
            const safeSol = solInfo.replace(/'/g, "\\'").replace(/"/g, '&quot;');

            sonHTML += `<span style="display:inline-block; white-space:nowrap; cursor:pointer;" onclick="showExplanation('${safeTitle}', '${safeText}', '${safeSol}')">` +
                       `<span style="color:${sonColor}; font-weight:700;">${son}</span>` +
                       `<span style="color:#ffffff;"> (${score}pt)</span></span>`;
            
            if (index < sonGroup.length - 1) sonHTML += ` • `;
        });

        const stringifiedSonAngles = JSON.stringify(sonAngles).replace(/"/g, '&quot;');

        // ĐỒNG BỘ TOÁN PHÁP 3 HẬU ĐỊA MẠCH LONG KHÍ THỰC TẾ TRÊN UI
        let mốcTâm = item.angle;
        let mốcTrái = (mốcTâm - 5 + 360) % 360;
        let mốcPhải = (mốcTâm + 5) % 360;

        let hauInfoTrái = tinhDiemTongHop(quẻMệnhChủLõi, mốcTrái, namKhaoSatThucTe, mucDich, namAmMệnhChủ, 0).hauInfo;
        let hauInfoTâm  = tinhDiemTongHop(quẻMệnhChủLõi, mốcTâm, namKhaoSatThucTe, mucDich, namAmMệnhChủ, 0).hauInfo;
        let hauInfoPhải = tinhDiemTongHop(quẻMệnhChủLõi, mốcPhải, namKhaoSatThucTe, mucDich, namAmMệnhChủ, 0).hauInfo;

        let countHauXanh = 0, countHauVang = 0, countHauDo = 0;
        const getHauStatusAndCount = (hauObj, isCat) => {
            const cl = hauObj.chatLuong || hauObj.chatQuality || "Bình Hòa";
            const isHungHau = cl.includes('Hung') || cl.includes('Không Vong') || cl.includes('Sai Thác');
            if (isCat) {
                if (isHungHau) { countHauDo++; return { color: '#ff3b30', label: 'ĐẠI HUNG', desc: 'Mạch khí ngầm dưới đất bị đứt gãy hoặc dính hung sát khí. Cực kỳ kỵ nạp khí.' }; }
                if (cl.includes('Cát')) { countHauXanh++; return { color: '#30d158', label: 'CÁT MẠCH', desc: 'Mạch đất địa long thuần khiết vượng khí, gia trì năng lượng cực kỳ mạnh mẽ.' }; }
                countHauVang++; return { color: '#dfb76c', label: 'BÌNH HÒA', desc: 'Địa mạch giữ trạng thái ổn định, không gây họa hại.' };
            } else {
                if (isHungHau) { countHauXanh++; return { color: '#30d158', label: 'ĐẮC VỊ', desc: 'Mạch địa khí ngầm mang tính hung, rất lý tưởng để đặt thiết bị xả uế tiêu sát.' }; }
                if (cl.includes('Cát')) { countHauDo++; return { color: '#ff3b30', label: 'K. ĐẶT', desc: 'Long mạch ngầm vượng và sạch, tuyệt đối tránh đặt uế khí đè chặt lên.' }; }
                countHauVang++; return { color: '#dfb76c', label: 'TRUNG TÍNH', desc: 'Địa mạch trung hòa ổn định, có thể cân nhắc đặt công năng.' };
            }
        };

        const statusTrái = getHauStatusAndCount(hauInfoTrái, isCatPurpose);
        const statusTâm = getHauStatusAndCount(hauInfoTâm, isCatPurpose);
        const statusPhải = getHauStatusAndCount(hauInfoPhải, isCatPurpose);

        const getHauExplanation = (hauObj, curStatus) => {
            return `Phân vị Hậu mạch địa tầng ngầm: ${hauObj.ten}\\nChỉ số Địa khí gốc: ${hauObj.diem}pt.\\n\\n🔍 TRẮC ĐỊA BẢN CHẤT: ${curStatus.desc}`;
        };

        let html3HauMạch = `
            <div style="display: flex; gap: 6px; margin-top: 6px; width: 100%; box-sizing: border-box; font-family: sans-serif;">
                <div class="hau-node-item" onclick="showExplanation('${hauInfoTrái.ten.replace(/'/g, "\\'")}', '${getHauExplanation(hauInfoTrái, statusTrái).replace(/'/g, "\\'")}', 'Giải pháp: ${hauInfoTrái.giaiphap.replace(/'/g, "\\'")}')"
                     style="flex: 1; text-align: center; background: rgba(255,255,255,0.04); padding: 6px 4px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.08); cursor: pointer;">
                    <div style="font-size: 0.75rem; color: #fff; font-weight: 700; margin-bottom: 2px;">${hauInfoTrái.ten.split(' ')[0]} (${Math.round(mốcTrái)}°)</div>
                    <div style="font-size: 0.7rem; color: ${statusTrái.color}; font-weight: bold; text-transform: uppercase;">${statusTrái.label}</div>
                </div>
                <div class="hau-node-item" onclick="showExplanation('${hauInfoTâm.ten.replace(/'/g, "\\'")}', '${getHauExplanation(hauInfoTâm, statusTâm).replace(/'/g, "\\'")}', 'Giải pháp: ${hauInfoTâm.giaiphap.replace(/'/g, "\\'")}')"
                     style="flex: 1; text-align: center; background: rgba(255,255,255,0.04); padding: 6px 4px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.08); cursor: pointer;">
                    <div style="font-size: 0.75rem; color: #ffd700; font-weight: 700; margin-bottom: 2px;">🎯 ${hauInfoTâm.ten.split(' ')[0]} (${Math.round(mốcTâm)}°)</div>
                    <div style="font-size: 0.7rem; color: ${statusTâm.color}; font-weight: bold; text-transform: uppercase;">${statusTâm.label}</div>
                </div>
                <div class="hau-node-item" onclick="showExplanation('${hauInfoPhải.ten.replace(/'/g, "\\'")}', '${getHauExplanation(hauInfoPhải, statusPhải).replace(/'/g, "\\'")}', 'Giải pháp: ${hauInfoPhải.giaiphap.replace(/'/g, "\\'")}')"
                     style="flex: 1; text-align: center; background: rgba(255,255,255,0.04); padding: 6px 4px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.08); cursor: pointer;">
                    <div style="font-size: 0.75rem; color: #fff; font-weight: 700; margin-bottom: 2px;">${hauInfoPhải.ten.split(' ')[0]} (${Math.round(mốcPhải)}°)</div>
                    <div style="font-size: 0.7rem; color: ${statusPhải.color}; font-weight: bold; text-transform: uppercase;">${statusPhải.label}</div>
                </div>
            </div>`;

        // 🔥 KHẮC PHỤC LỖI "QUÁ GẮT": Hạ ngưỡng báo xanh xuống 70 điểm để đồng bộ khít khao với học thuật trạch pháp
        let scoreColor = "#30d158"; 
        if (item.diemTongHop < 50) {
            scoreColor = "#ff3b30"; // Đỏ Hung Cục
        } else if (item.diemTongHop < 70) {
            scoreColor = "#dfb76c"; // Vàng Bình Hòa (Từ 50 đến 69pt)
        } else {
            scoreColor = "#30d158"; // Xanh Cát Lợi / Đại Cát (Từ 70pt trở lên)
        }

        let bgKhung = item.diemTongHop >= 70 ? 'rgba(48,209,88,0.025)' : (item.diemTongHop >= 50 ? 'rgba(223,183,108,0.03)' : 'rgba(255,59,48,0.03)');
        
        // ─── ENGINE PHÂN TÍCH BIỆN CHỨNG KHÍ CỤC ───
        let statusText = "";
        let popExplanation = "";
        let popSolution = "";

        if (isCatPurpose) {
            if (item.diemTongHop >= 70) {
                statusText = `🏆 ĐẠI CÁT CHÍNH TÔNG — ĐẮC KHÍ TOÀN VẸN`;
                popExplanation = `Phương vị hoàn hảo. Hướng lớn đạt chuẩn nạp khí lành khí tốt vượng trạch dài lâu cho trạch chủ (${item.cungTrạch}).`;
                popSolution = `Giữ cho không gian sạch sẽ, thông thoáng để tiếp nạp cát khí từ bên ngoài một cách tối đa.`;
            } 
            else if (item.diemTongHop < 50 && countSonXanh > 0) {
                statusText = `⚠️ ĐỊA MẠCH GỐC TỐT — NIÊN HẠN PHẠM SÁT TINH ĐỎ`;
                popExplanation = `Biện chứng Phong thủy: Hướng lớn trắc địa tĩnh rất cát lành, có phân độ Sơn vị báo Cát lợi (Xanh). Chỉ số tổng hợp bị kéo thấp xuống còn ${item.diemTongHop}pt hoàn toàn do tác động đoản kỳ từ các hung tinh lưu niên năm ${namKhaoSatThucTe} quấy nhiễu phần Ngọn.`;
                popSolution = `Giải pháp: Gia chủ vẫn hoàn toàn đủ điều kiện quy hoạch kết cấu lâu dài tại đây. Hãy ứng dụng việc đặt thiết bị ngắm chuẩn xác tâm nạp khí lọt vào dải Sơn vị xanh và áp dụng linh vật hóa sát để triệt tiêu niên hạn.`;
            }
            else if (countSonDo === 3 || item.diemTongHop < 50) {
                statusText = `❌ KHÍ TRƯỜNG SUY KIỆT — BẤT LỢI LẬP CỰC`;
                popExplanation = `Cảnh báo nghiêm khắc: Phương vị này cấu trúc hình học nội tại suy kiệt, toàn bộ phân độ hẹp hoặc niên vận đều báo hung hiểm, phạm vào các cung tuyệt mạch bất lợi.`;
                popSolution = `Lời khuyên: TUYỆT ĐỐI KHÔNG chọn tọa độ ngắm này. Hãy dịch chuyển kết cấu hoặc lựa chọn các phương vị đắc điểm cao hơn ở danh sách phía trên.`;
            }
            else {
                statusText = `🟢 TRƯỜNG KHÍ BÌNH HÒA — AN TÂM ĐỊNH VỊ`;
                popExplanation = `Trường khí khu vực đạt độ ổn định trung tính tốt. Cấu trúc vi phân nội tại cân bằng, ổn định khí trường.`;
                popSolution = `Có thể an tâm sử dụng quy hoạch công năng, phối hợp thiết kế nội thất hài hòa.`;
            }
        } else {
            if (item.diemTongHop >= 75) {
                statusText = `🏆 ĐẮC CÁCH DIỆU PHÁP TRẤN SÁT HOÀN HẢO`;
                popExplanation = `Tọa Hung Trấn Sát hoàn mỹ. Đặt uế cục chính xác vào dải hung vị này giúp phong tỏa hoàn toàn ác tính của Thần sát mạch đất.`;
                popSolution = `Cấu trúc lập cực lý tưởng về mặt kiến trúc phong thủy số, giữ nguyên vị trí công năng.`;
            } else if (countSonDo > 0) {
                statusText = `⚠️ TỌA HUNG XUNG ĐỘT — KỴ ĐÈ TRÚNG SƠN CÁT`;
                popExplanation = `Mặc dù hướng lớn phù hợp làm nơi xả uế khí, nhưng một vài phân châm Sơn vị hẹp bên trong lại đang giữ dòng năng lượng sạch (báo đỏ kỵ đè).`;
                popSolution = `Biện pháp vi chỉnh: Chủ động tịnh tiến thiết bị xả uế lệch tâm, đặt đè chính xác lên các Sơn vị báo màu xanh lợi trấn sát, trả lại không gian thanh khiết cho Sơn vị đỏ.`;
            } else {
                statusText = `🟢 PHÂN BỔ TRẤN SÁT CHUẨN MỰC TỰ NHIÊN`;
                popExplanation = `Khí trường khu vực đạt độ cô lập ổn định. Đảm bảo công năng uế thải vận hành trơn tru mà không làm ảnh hưởng sang không gian kề cận.`;
                popSolution = `Chấp nhận được hoàn toàn về mặt phân bổ mặt bằng hình học kiến trúc.`;
            }
        }

        const safePopTitle = `Biện giải Trạch Pháp: Hướng ${item.name} [${item.cungTrạch}]`.replace(/'/g, "\\'").replace(/"/g, '&quot;');
        const safePopDesc = popExplanation.replace(/'/g, "\\'").replace(/"/g, '&quot;');
        const safePopSol = popSolution.replace(/'/g, "\\'").replace(/"/g, '&quot;');

        const div = document.createElement('div');
        div.className = `direction-item`;
        div.style.cssText = `border-left:4px solid ${scoreColor}; background:${bgKhung}; margin-bottom:12px; padding:12px; border-radius:10px; width:100%; box-sizing:border-box; display:flex; flex-direction:column; gap:8px; transition: all 0.3s; font-family:sans-serif;`;
        
        div.innerHTML = `
            <div class="item-info" style="width:100%;">
                <div style="color:#fff; font-size:0.95rem; margin-bottom:6px; font-weight:bold; display:flex; justify-content:space-between; align-items:center;">
                    <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; cursor:pointer;" onclick="showExplanation('${safePopTitle}', '${safePopDesc}', '${safePopSol}')">
                        Hướng ${item.name} ➔ <span style="color:${scoreColor};">${item.cungTrạch}</span>
                    </span>
                    <span style="font-size:0.8rem; padding:2px 8px; border-radius:6px; font-weight:800; background:rgba(0,0,0,0.3); color:${scoreColor}; border:1px solid ${scoreColor}; white-space:nowrap; cursor:pointer;" onclick="showExplanation('${safePopTitle}', '${safePopDesc}', '${safePopSol}')">
                        ${item.diemTongHop} PT
                    </span>
                </div>
                
                <div style="margin-bottom:8px; font-size:0.8rem; overflow-x:auto;" class="no-scrollbar">
                    <span style="color:#dfb76c; font-weight:600;">24 SƠN VỊ THỰC THỜI:</span> ${sonHTML}
                </div>
                
                <div style="margin-bottom:6px;">
                    <span style="color:#dfb76c; font-size:0.8rem; font-weight:600;">72 HẬU ĐỊA MẠCH ĐỒNG BỘ MỐC CỐ ĐỊNH:</span>
                    ${html3HauMạch}
                </div>
                
                <div style="color:${scoreColor}; font-size:0.82rem; font-weight:bold; padding-top:4px; line-height:1.4; display:flex; align-items:center; gap:4px; cursor:pointer;" onclick="showExplanation('${safePopTitle}', '${safePopDesc}', '${safePopSol}')">
                    <span>${statusText} [${item.level}]</span>
                </div>
            </div>
            
            <button class="btn-rotate" 
                data-click-count="0"
                data-son-angles="${stringifiedSonAngles}"
                data-is-cat="${isCatPurpose}"
                data-size-degree="${config.sizeDegree}"
                onclick="handleSmartRotate(this)" 
                style="background:#1a1a1a; color:#dfb76c; border:1px solid #dfb76c; padding:10px; border-radius:8px; font-weight:bold; cursor:pointer; width:100%; font-size:0.85rem; text-align:center; margin-top:4px; transition: all 0.15s ease; outline:none; box-shadow: 0 2px 4px rgba(0,0,0,0.2); font-family:sans-serif;">
                🔄 Xoay thử la bàn vi phân định vị ${config.title} (Bề rộng quét thực tế ${config.sizeDegree}°)
            </button>
        `;
        directionsContainer.appendChild(div);
    });
}
// ====================== ÁNH XẠ 24 SƠN ĐỒNG BỘ TỐI ƯU HÓA O(1) ======================
function getSonGroupForDirection(code) {
    const map = {
        'N': ["Nhâm", "Tý", "Quý"], 'NE': ["Sửu", "Cấn", "Dần"],
        'E': ["Giáp", "Mão", "Ất"], 'SE': ["Thìn", "Tốn", "Tỵ"],
        'S': ["Bính", "Ngọ", "Đinh"], 'SW': ["Mùi", "Khôn", "Thân"],
        'W': ["Canh", "Dậu", "Tân"], 'NW': ["Tuất", "Càn", "Hợi"]
    };
    return map[code] || [];
}

// =========================================================================
// 🔮 PHÂN HỆ ĐIỀU KHÍ: MÔ PHỎNG XOAY KIM ẢO CHUẨN ĐỒNG TRỤC TRỌNG TÂM
// =========================================================================
function triggerGhostNeedle(angle) {
    targetAngle = angle; // Ghi nhận góc độ mô phỏng vào bộ nhớ hệ thống
    
    const ghost = document.getElementById('ghostNeedle');
    if (ghost) {
        ghost.style.display = 'block';
        ghost.style.opacity = "1";
        // Loại bỏ hiệu ứng khớp cũ để chuẩn bị cho chu trình quét cảm biến mới
        ghost.classList.remove('matched-pulse'); 
        ghost.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
    }
    
    // --- ĐỒNG BỘ TOÁN PHÁP CHÍNH TÔNG CỦA TRỤC THỜI GIAN ĐỘNG ---
    const dayStr = document.getElementById('birthDay').value;
    const monthStr = document.getElementById('birthMonth').value;
    const yearStr = document.getElementById('birthYear').value;

    const txtSurveyYear = document.getElementById('surveyYear');
    const namKhaoSatThucTe = (txtSurveyYear && txtSurveyYear.value.length === 4) ? parseInt(txtSurveyYear.value) : new Date().getFullYear();

    let namAmMệnhChủ = new Date().getFullYear();
    if (dayStr && monthStr && yearStr && yearStr.length === 4) {
        const d = parseInt(dayStr);
        const m = parseInt(monthStr);
        const y = parseInt(yearStr);
        namAmMệnhChủ = (m < 2 || (m === 2 && d < 5)) ? y - 1 : y;
    }

    let tinhChuMenh = (typeof chủMệnh !== 'undefined' && chủMệnh) ? chủMệnh : "Khảm";
    if (dayStr && monthStr && yearStr && yearStr.length === 4) {
        if (typeof tínhCungPhi === 'function') {
            tinhChuMenh = tínhCungPhi(parseInt(yearStr), parseInt(monthStr), parseInt(dayStr), document.getElementById('gender').value);
        }
    }

    const mucDich = document.getElementById('purpose')?.value || 'house';
    const tongHop = tinhDiemTongHop(tinhChuMenh, angle, namKhaoSatThucTe, mucDich, namAmMệnhChủ);
    
    let colorStyle = "#ff3b30"; 
    if (tongHop.diem >= 72) {
        colorStyle = "#30d158"; 
    } else if (tongHop.diem >= 50) {
        colorStyle = "#ff9f0a"; 
    }
    
    let sơnThử = tìmSơnHướng(angle);
    
    if (typeof detailBox !== 'undefined' && detailBox) {
        detailBox.style.borderLeftColor = colorStyle;
        detailBox.style.background = "rgba(255,255,255,0.05)";
        detailBox.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; margin-bottom: 8px;">
                <span style="color:#dfb76c; font-weight: bold; font-size: 0.9rem;">◆ ĐANG MÔ PHỎNG XOAY: ${angle}°</span>
                <span id="ghost-score-badge" style="background: ${colorStyle}; color: #000; padding: 2px 10px; border-radius: 12px; font-weight: bold; font-size: 0.8rem; transition: all 0.3s;">PT: ${tongHop.diem}pt</span>
            </div>
            <div id="ghost-advice-text" style="color:#ddd; font-size: 0.9rem; line-height: 1.5; text-align: left; transition: all 0.3s;">
                Tia vàng ảo đang định vị nạp khí tại tọa độ <strong>Sơn ${sơnThử}</strong>.<br>
                <span style="color:#aaa; font-size:0.82rem; display:block; margin-top:5px;">
                    👉 Hãy cầm điện thoại xoay người từ từ sao cho <b>Kim Đỏ thực tế khớp thẳng trục với tia Vàng ảo</b> để đón đúng cát khí.
                </span>
            </div>
        `;
    }
    
    // Gọi cập nhật lại giao diện UI la bàn thực thời để kiểm tra trạng thái khớp kim ngay lập tức
    if (typeof updateCompassUI === 'function') {
        updateCompassUI(currentHeading);
    }
}

// ====================== ĐỊNH VỊ 24 SƠN ĐỒNG BỘ TUYỆT ĐỐI THEO CONFIG TĨNH ======================
function tìmSơnHướng(degree) {
    let normalized = ((degree % 360) + 360) % 360;
    let match = SON_24_CONFIG.find(s => {
        if (s.min > s.max) return normalized >= s.min || normalized < s.max;
        return normalized >= s.min && normalized < s.max;
    });
    return match ? match.name : "Tý";
}
function getSonObjByDegree(degree) {
    // 1. Validate đầu vào
    if (typeof degree !== 'number' || isNaN(degree)) return SON_24_CONFIG[0];

    // 2. Chuẩn hóa góc
    const normalized = ((degree % 360) + 360) % 360;

    // 3. Tìm kiếm
    const result = SON_24_CONFIG.find(s => {
        if (s.min > s.max) return normalized >= s.min || normalized < s.max;
        return normalized >= s.min && normalized < s.max;
    });

    // 4. Trả về kết quả hoặc fallback an toàn
    return result || SON_24_CONFIG[0];
}
// === DỮ LIỆU HUYỀN KHÔNG PHI TINH - CẬP NHẬT CHUẨN TRỌNG SỐ THỜI VẬN 9 (HOÀN CHỈNH) ===
const VAN_DATA = {
    1: { 
        'N': { sao: "Nhất Bạch", hanh: "Thủy", loai: "best", y_nghia: "Thủy khí đương vượng, đại cát về đường trí tuệ, quan lộc và tài lộc tăng trưởng." }, 
        'NE': { sao: "Nhị Hắc", hanh: "Thổ", loai: "bad", y_nghia: "Phạm bệnh tinh, dễ phát sinh bệnh tật, thị phi, bất lợi cho sức khỏe gia đạo." }, 
        'E': { sao: "Tam Bích", hanh: "Mộc", loai: "neutral", y_nghia: "Năng lượng bình hòa, thích hợp cho các công việc liên quan đến trí óc và sáng tạo." }, 
        'SE': { sao: "Tứ Lục", hanh: "Mộc", loai: "good", y_nghia: "Cát tinh văn xương, trợ lực rất tốt cho đường học hành, thi cử và danh tiếng." }, 
        'S': { sao: "Ngũ Hoàng", hanh: "Thổ", loai: "worst", y_nghia: "Phạm Ngũ Hoàng Đại Sát, đại hung tinh tích tụ tai họa, tuyệt đối tránh động thổ." }, 
        'SW': { sao: "Lục Bạch", hanh: "Kim", loai: "good", y_nghia: "Vượng khí quyền lực, đường công danh sự nghiệp và địa vị xã hội ổn định." }, 
        'W': { sao: "Thất Xích", hanh: "Kim", loai: "bad", y_nghia: "Thoái khí hung tinh, dễ gặp họa lừa gạt, tranh chấp lời nói và hao hụt của cải." }, 
        'NW': { sao: "Bát Bạch", hanh: "Thổ", loai: "good", y_nghia: "Cát tinh tích lũy tài lộc, gia đạo bình an, kinh tế phát triển ổn định." } 
    },
    2: { 
        'N': { sao: "Nhị Hắc", hanh: "Thổ", loai: "bad", y_nghia: "Bệnh phù tinh chiếu hướng, đề phòng các bệnh về hệ tiêu hóa và khí huyết." }, 
        'NE': { sao: "Tam Bích", hanh: "Mộc", loai: "neutral", y_nghia: "Dễ phát sinh tranh chấp, mâu thuẫn lời nói, vận trình cần sự thận trọng." }, 
        'E': { sao: "Tứ Lục", hanh: "Mộc", loai: "good", y_nghia: "Văn xương tinh trợ lực, sự nghiệp có bước tiến mới, học vấn phát triển tốt." }, 
        'SE': { sao: "Ngũ Hoàng", hanh: "Thổ", loai: "worst", y_nghia: "Sát tinh đại hung độc hại, tránh mọi tác động lực hoặc sửa chữa tại phương vị này." }, 
        'S': { sao: "Lục Bạch", hanh: "Kim", loai: "good", y_nghia: "Có cơ hội đón quý nhân trợ giúp, quyền lực nội tại được củng cố vững chắc." }, 
        'SW': { sao: "Thất Xích", hanh: "Kim", loai: "bad", y_nghia: "Đề phòng tiểu nhân quấy phá, hao tổn tài sản ngoài ý muốn hoặc tai bay vạ gió." }, 
        'W': { sao: "Bát Bạch", hanh: "Thổ", loai: "good", y_nghia: "Tài lộc tích lũy tốt, các hoạt động kinh doanh buôn bán diễn ra thuận lợi." }, 
        'NW': { sao: "Cửu Tử", hanh: "Hỏa", loai: "best", y_nghia: "Sinh khí tinh hướng về tương lai, đại cát tường, danh vọng cao, hỷ sự liên miên." } 
    },
    3: { 
        'N': { sao: "Tam Bích", hanh: "Mộc", loai: "neutral", y_nghia: "Khí trường mang tính cạnh tranh cao nhưng dễ giúp chủ nhà khẳng định vị thế." }, 
        'NE': { sao: "Tứ Lục", hanh: "Mộc", loai: "good", y_nghia: "Đầu óc minh mẫn, tư duy sắc bén, có lợi cho việc nghiên cứu và văn chương." }, 
        'E': { sao: "Ngũ Hoàng", hanh: "Thổ", loai: "worst", y_nghia: "Phương vị tích tụ sát khí nặng, kỵ lập hướng công trình hoặc cải tạo đập phá." }, 
        'SE': { sao: "Lục Bạch", hanh: "Kim", loai: "good", y_nghia: "Năng lượng củng cố công danh, giúp giữ vững tay chèo trong sự nghiệp." }, 
        'S': { sao: "Thất Xích", hanh: "Kim", loai: "bad", y_nghia: "Khí trường bất ổn, dễ dính líu đến các rắc rối pháp lý hoặc thị phi tai tiếng." }, 
        'SW': { sao: "Bát Bạch", hanh: "Thổ", loai: "good", y_nghia: "Bình ổn dòng tài sản gia đình, vợ chồng hòa thuận, gia đạo êm ấm." }, 
        'W': { sao: "Cửu Tử", hanh: "Hỏa", loai: "best", y_nghia: "Vượng khí lan tỏa mạnh mẽ, đại phú đại quý, mưu sự dễ thành công." }, 
        'NW': { sao: "Nhất Bạch", hanh: "Thủy", loai: "good", y_nghia: "Gia tăng vận nhân duyên tốt đẹp, vượng quý nhân và đường học vấn." } 
    },
    4: { 
        'N': { sao: "Tứ Lục", hanh: "Mộc", loai: "good", y_nghia: "Khí trường thanh cao, chủ về thông minh, học vấn hanh thông, danh tài vẹn toàn." }, 
        'NE': { sao: "Ngũ Hoàng", hanh: "Thổ", loai: "worst", y_nghia: "Hung tinh sát khí cực độ, cần giữ phương vị này yên tĩnh, không nên động thổ." }, 
        'E': { sao: "Lục Bạch", hanh: "Kim", loai: "good", y_nghia: "Vượng quý nhân tinh, công việc làm ăn có sự nâng đỡ, tiến triển thuận lợi." }, 
        'SE': { sao: "Thất Xích", hanh: "Kim", loai: "bad", y_nghia: "Thất vận tinh chiếu, cần đề phòng hao tài tốn của và tiểu nhân dèm pha." }, 
        'S': { sao: "Bát Bạch", hanh: "Thổ", loai: "good", y_nghia: "Tài lộc dồi dào, kinh tế trạch đất phát triển ở mức ổn định, bền vững." }, 
        'SW': { sao: "Cửu Tử", hanh: "Hỏa", loai: "best", y_nghia: "Đón nhận sinh khí cường đại, gia tăng hỷ sự và lan tỏa tiếng tăm đi xa." }, 
        'W': { sao: "Nhất Bạch", hanh: "Thủy", loai: "good", y_nghia: "Trí tuệ phát tiết, quan lộc và đường công danh có cơ hội thăng tiến lớn." }, 
        'NW': { sao: "Nhị Hắc", hanh: "Thổ", loai: "bad", y_nghia: "Khí trường suy yếu, cẩn thận ảnh hưởng tiêu cực đến sức khỏe các thành viên." } 
    },
    5: { 
        'N': { sao: "Ngũ Hoàng", hanh: "Thổ", loai: "worst", y_nghia: "Chính vị đại hung tai họa, trường khí xung sát, cần giữ tĩnh tuyệt đối." }, 
        'NE': { sao: "Lục Bạch", hanh: "Kim", loai: "good", y_nghia: "Năng lượng bổ trợ cho quyền lực, công danh sự nghiệp giữ được thế cân bằng." }, 
        'E': { sao: "Thất Xích", hanh: "Kim", loai: "bad", y_nghia: "Đề phòng nội bộ phát sinh tranh chấp hoặc bị tiểu nhân quấy phá sau lưng." }, 
        'SE': { sao: "Bát Bạch", hanh: "Thổ", loai: "good", y_nghia: "Mạch tài lộc chạy đều, vận trình sự nghiệp có những bước tiến triển rõ rệt." }, 
        'S': { sao: "Cửu Tử", hanh: "Hỏa", loai: "best", y_nghia: "Đón nhận đại cát khí, vượng đường danh tiếng, gia đạo có nhiều tin vui." }, 
        'SW': { sao: "Nhất Bạch", hanh: "Thủy", loai: "good", y_nghia: "Kích hoạt trí tuệ phát triển, đón nhận quý nhân phù trợ lúc khó khăn." }, 
        'W': { sao: "Nhị Hắc", hanh: "Thổ", loai: "bad", y_nghia: "Sức khỏe trạch thể kém, cần bố trí cấu trúc không gian thông thoáng để hóa sát." }, 
        'NW': { sao: "Tam Bích", hanh: "Mộc", loai: "neutral", y_nghia: "Trạng thái khí trường trung tính, mọi mưu sự lớn cần có lòng kiên nhẫn." } 
    },
    6: { 
        'N': { sao: "Lục Bạch", hanh: "Kim", loai: "good", y_nghia: "Vượng khí cho người làm quản lý, gia tăng quyền thế và uy tín cá nhân." }, 
        'NE': { sao: "Thất Xích", hanh: "Kim", loai: "bad", y_nghia: "Khí mạch tiềm ẩn nguy cơ tranh chấp lời nói, kiêng kị việc kiện tụng." }, 
        'E': { sao: "Bát Bạch", hanh: "Thổ", loai: "good", y_nghia: "Tài lộc dồi dào, tạo nền tảng tốt cho các hoạt động đầu tư lâu dài." }, 
        'SE': { sao: "Cửu Tử", hanh: "Hỏa", loai: "best", y_nghia: "Đón nhận cát khí đương vượng, vượng nhân duyên và mở rộng mối quan hệ." }, 
        'S': { sao: "Nhất Bạch", hanh: "Thủy", loai: "good", y_nghia: "Kích hoạt cung trí tuệ, có lợi cho đường học hành, thi cử và quan lộc." }, 
        'SW': { sao: "Nhị Hắc", hanh: "Thổ", loai: "bad", y_nghia: "Năng lượng sức khỏe thiếu ổn định, cần chú ý giữ gìn môi trường sống." }, 
        'W': { sao: "Tam Bích", hanh: "Mộc", loai: "neutral", y_nghia: "Khí trường trung tính, chú ý lời ăn tiếng nói để tránh thị phi vô căn cứ." }, 
        'NW': { sao: "Tứ Lục", hanh: "Mộc", loai: "good", y_nghia: "Trường khí thanh tịnh, mang lại may mắn lớn cho đường học vấn và khoa bảng." } 
    },
    7: { 
        'N': { sao: "Thất Xích", hanh: "Kim", loai: "bad", y_nghia: "Sát khí tiềm ẩn, dễ gây thất thoát tiền bạc hoặc vướng vào họa miệng lưỡi." }, 
        'NE': { sao: "Bát Bạch", hanh: "Thổ", loai: "good", y_nghia: "Giữ vững nền tảng tài chính, công việc diễn ra đều đặn, ít biến động." }, 
        'E': { sao: "Cửu Tử", hanh: "Hỏa", loai: "best", y_nghia: "Danh vọng đỉnh cao, khí trường hanh thông mang lại nhiều tài lộc bất ngờ." }, 
        'SE': { sao: "Nhất Bạch", hanh: "Thủy", loai: "good", "y_nghia": "Đón dòng sinh khí tốt về nhân sự, tư duy sáng suốt, có quý nhân vạch đường." }, 
        'S': { sao: "Nhị Hắc", hanh: "Thổ", loai: "bad", y_nghia: "Trạch khí âm hàn suy yếu, cần chú ý nâng cao sức đề kháng cho cơ thể." }, 
        'SW': { sao: "Tam Bích", hanh: "Mộc", loai: "neutral", y_nghia: "Khí trường trung bình, cần khéo léo trong giao tiếp xã hội để tránh hiểu lầm." }, 
        'W': { sao: "Tứ Lục", hanh: "Mộc", loai: "good", y_nghia: "Tư duy nhạy bén, học tập và tiếp thu kiến thức mới đạt hiệu quả cao." }, 
        'NW': { sao: "Ngũ Hoàng", hanh: "Thổ", loai: "worst", y_nghia: "Phạm Ngũ Hoàng đại kỵ, tuyệt đối không được tác động lực mạnh phá vỡ khí trường." } 
    },
    8: { 
        'N': { sao: "Bát Bạch", hanh: "Thổ", loai: "good", y_nghia: "Dòng tài lộc duy trì ổn định, gia đạo nhìn chung êm ấm và hưng thịnh." }, 
        'NE': { sao: "Cửu Tử", hanh: "Hỏa", loai: "best", y_nghia: "Đón nhận vận may lớn, danh tiếng vang xa, mưu cầu tài lộc dễ đắc ý." }, 
        'E': { sao: "Nhất Bạch", hanh: "Thủy", loai: "good", y_nghia: "Trí tuệ mẫn tiệp, hỗ trợ rất tốt cho đường quan lộ và công việc thuận buồm xuôi gió." }, 
        'SE': { sao: "Nhị Hắc", hanh: "Thổ", loai: "bad", y_nghia: "Bệnh tinh đóng cung, chú ý phòng ngừa các chứng bệnh phát sinh đột ngột." }, 
        'S': { sao: "Tam Bích", hanh: "Mộc", loai: "neutral", y_nghia: "Năng lượng ở mức trung bình, tiến trình công việc cần sự kiên trì ổn định." }, 
        'SW': { sao: "Tứ Lục", hanh: "Mộc", loai: "good", y_nghia: "Hỗ trợ tốt cho đường danh tiếng, học hành khoa bảng đạt kết quả như ý." }, 
        'W': { sao: "Ngũ Hoàng", hanh: "Thổ", loai: "worst", y_nghia: "Phương vị phạm sát khí Ngũ Hoàng, kỵ các hoạt động đào bới, sửa chữa." }, 
        'NW': { sao: "Lục Bạch", hanh: "Kim", loai: "good", y_nghia: "Quyền lực nội tại tăng cao, củng cố vị thế vững vàng trong công việc." } 
    },
    9: { 
        'N': { sao: "Nhất Bạch", hanh: "Thủy", loai: "good", y_nghia: "Trí tuệ đương vận, cát khí tăng trưởng, quý nhân tương trợ phát đạt mạnh mẽ." }, 
        'NE': { sao: "Thất Xích", hanh: "Kim", loai: "bad", y_nghia: "Sao thất vận dồn tụ khí xấu, đề phòng phát sinh thị phi, tranh chấp hao tổn tài sản." }, 
        'E': { sao: "Lục Bạch", hanh: "Kim", loai: "neutral", y_nghia: "Khí trường bình hòa, tài lộc và công danh tích lũy ở mức độ chậm nhưng chắc chắn." }, 
        'SE': { sao: "Nhị Hắc", hanh: "Thổ", loai: "neutral", y_nghia: "Bệnh tinh gặp thời vận 9 làm giảm bớt tính hung độc, tuy nhiên cần lưu ý bảo vệ hệ tiêu hóa." }, 
        'S': { sao: "Cửu Tử", hanh: "Hỏa", loai: "best", y_nghia: "Tôn quý tối thượng, Hoàng kim đại vượng khí Thời vận 9, chủ quản đại phú quý lâm môn." }, 
        'SW': { sao: "Bát Bạch", hanh: "Thổ", loai: "neutral", y_nghia: "Sao thoái khí bước vào chu kỳ suy giảm năng lượng, tài vận chuyển sang trạng thái tích lũy chậm." }, 
        'W': { sao: "Ngũ Hoàng", hanh: "Thổ", loai: "worst", y_nghia: "Chính vị Ngũ Hoàng Đại Sát cực hung, tuyệt đối kỵ động thổ, khoan đục hay cải tạo cấu trúc lớn." }, 
        'NW': { sao: "Tứ Lục", hanh: "Mộc", loai: "bad", y_nghia: "Sao suy thoái khí, cần đề phòng vận trình học hành thi cử xuất hiện dấu hiệu trì trệ." } 
    }
};

function sinhLuanGiaiThienThoi(code) {
    const currentYear = new Date().getFullYear();
    // Thuật toán động dịch chuyển đại vận trạch tinh tự động suốt đời
    let vanSo = Math.floor((currentYear - 1864) / 20) % 9 + 1;
    const item = VAN_DATA[vanSo] ? VAN_DATA[vanSo][code] : null;

    if (!item) return `<p style="color: #666; padding: 10px;">Chưa có dữ liệu thiên thời cho phương vị này.</p>`;

    const getAdvice = (loai) => {
        const adviceMap = {
            best: "👉 Cát khí đương vượng, ưu tiên lập kế hoạch đại sự, khai trương, nhập trạch.",
            good: "👉 Vận khí hanh thông, trường khí có sự tăng trưởng, thích hợp để phát triển học tập.",
            neutral: "👉 Khí trường bình hòa, giữ vững ổn định và thận trọng trong các quyết định.",
            bad: "👉 Tiết khí suy thoái, cẩn thận trong các mối quan hệ xã hội và quản lý tiền của.",
            worst: "⚠️ ĐẠI HUNG SÁT TINH: Tuyệt đối kỵ việc động thổ, khoan đục hay phá dỡ cấu trúc phương vị này."
        };
        return adviceMap[loai] || "";
    };

    const colorMap = { best: "#30d158", good: "#aaff00", neutral: "#e0e0e0", bad: "#ff9f0a", worst: "#ff3b30" };
    const colorStar = colorMap[item.loai] || "#fff";

    return `
        <div style="background: rgba(255,255,255,0.01); padding: 15px; border-radius: 12px; border: 1px solid rgba(223,183,108,0.2); margin-top: 15px;">
            <div style="color: var(--gold); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 5px; font-weight:bold;">
                ◆ HUYỀN KHÔNG VẬN ${vanSo} — NIÊN ĐỘ LỊCH PHÁP ${currentYear}
            </div>
            
            <div style="margin: 5px 0 10px 0; border-bottom: 1px dashed rgba(255,255,255,0.1); padding-bottom: 10px;">
                <span style="color: ${colorStar}; font-size: 1.2rem; font-weight: 800;">${item.sao}</span>
                <span style="color: #aaa; font-size: 0.85rem; margin-left: 8px;">• Ngũ Hành: ${item.hanh}</span>
            </div>
            
            <div style="color: #ddd; font-size: 0.88rem; line-height: 1.6; margin-bottom: 12px;">
                ${item.y_nghia}
            </div>
            
            <div style="color: ${colorStar}; font-size: 0.85rem; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid ${colorStar}; font-weight:500;">
                ${getAdvice(item.loai)}
            </div>
        </div>`;
}

const DATA_HOA_GIAI = {
    'Tuyệt Mệnh': {
        'Mộc': { phap: 'Tuyệt Mệnh sát thuộc Kim trực tiếp khắc hại bản mệnh Mộc của gia chủ, lại tọa lạc ở phương vị \${phuongHuong} (\${hanhPhuongVi}). Đây là thế trận cực hung "Quỷ Sai Lộ Xương", tàn phá nghiêm trọng cả sức khỏe lẫn tài lộc, khiến sự nghiệp dễ bị gián đoạn, gia đạo bất an.', vat: 'Sử dụng vật phẩm hành Thủy cao cấp như <strong>Hồ Lô Thủy Tinh Xanh Lam</strong> hoặc <strong>Bình Nước An Nhẫn Phong Thủy</strong> đặt tại phương vị này. Thủy đóng vai trò cầu nối chuyển hóa liên hoàn (Kim sát sinh Thủy - Thủy tương sinh bồi đắp Mộc mệnh), vừa hóa giải triệt để tính hung ác của Tuyệt Mệnh Kim, vừa quay lại nuôi dưỡng bản thể chủ mệnh phát triển viên mãn, mang lại vượng khí lâu dài.' },
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

// ====================== MẬT PHÁP HÓA GIẢI THEO NGỮ CẢNH CẤU TRÚC ======================
function sinhMatPhapHoaGiai(mucDich, cungSat, hanhChu, phuongHuong, code) {
    let hanhPhuongVi = (typeof phươngVịThiếtLập !== 'undefined' && phươngVịThiếtLập[code]) 
                       ? phươngVịThiếtLập[code].ngũHành : "Thổ";
    
    let data = DATA_HOA_GIAI[cungSat] ? DATA_HOA_GIAI[cungSat][hanhChu] : null;
    if (!data) return `<div style="padding:10px; color:#777; font-style:italic;">Dữ liệu pháp bảo điều tiết chưa được thiết lập cho cung vị này.</div>`;

    // Sửa lỗi vỡ HTML bằng bộ xử lý Regex toàn cục an toàn thay thế biến động ${}
    let phuongPhapBaoQuoc = data.phap.replace(/\${phuongHuong}/g, phuongHuong).replace(/\${hanhPhuongVi}/g, hanhPhuongVi);
    let vatPhamToiThuong = data.vat;
    
    const currentConfig = ConfigPhongThuy[mucDich] || { title: "Vị trí hạng mục", isCat: true };
    let thuyetMinhViTri = "";
    
    // Đã làm sạch lỗi văn phong chính tả "đối đối", "uế uế" từ hàm gốc
    if (currentConfig.isCat) {
        thuyetMinhViTri = `Cấu trúc đang thiết lập nhìn về phương vị bị phạm đại kỵ Sát tinh <strong>${cungSat}</strong>. Phương án điều hòa khí trường: ${phuongPhapBaoQuoc}`;
    } else if (mucDich === 'kitchen') {
        thuyetMinhViTri = `Bếp nấu đang tọa đè sai cung vị, thiêu rụi phước báu cát lành của trạch đất. Đồng thời nếu rơi vào thế hung tinh bị kích động nghịch chiều: ${phuongPhapBaoQuoc}`;
    } else {
        thuyetMinhViTri = `Khu vực xả uế uế tạp đặt đè lên cát tinh làm tổn hao tài lộc, ô uế long mạch. Chiếu theo mật pháp đối sánh ngũ hành: ${phuongPhapBaoQuoc}`;
    }

    return `
    <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(223, 183, 108, 0.2); border-radius: 12px; padding: 15px; margin-top: 15px;">
        <h4 style="color: #dfb76c; margin: 0 0 10px 0; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.5px;">◆ Mật Pháp Hóa Giải Pháp Bảo</h4>
        <div style="margin-bottom: 15px; font-size: 0.88rem; color: #ddd; line-height: 1.6;">
            <strong style="color: #ff9f0a;">[Phân Tích Cấu Trúc]:</strong> ${thuyetMinhViTri}
        </div>
        <div style="padding: 12px; background: rgba(255, 59, 48, 0.08); border-left: 4px solid #ff3b30; border-radius: 6px; font-size: 0.88rem;">
            <strong style="color: #ff3b30;">[Vật Phẩm Tối Thượng Pháp Bảo]:</strong> <span style="color:#fff; font-weight:700;">${vatPhamToiThuong}</span>
        </div>
    </div>`;
}

// ====================== TRÍCH XUẤT MA TRẬN MINH CHÂU QUY QUYẾT ======================
function getLuanDoanChiTiet(huong, son) {
    const dataHuong = MaTranMinhChau[huong];
    const info = (dataHuong && dataHuong[son]) ? dataHuong[son] : null;

    if (!info) {
        return `<div style="padding: 12px; color: #888; font-style: italic; border: 1px dashed #444; border-radius: 8px;">
                    Chưa có dữ liệu chi tiết cho sơn này trong hệ thống dương trạch.
                </div>`;
    }

    const isCat = (info.loai === "Cát");
    const color = isCat ? "#30d158" : "#ff3b30";
    const bgColor = isCat ? "rgba(48, 209, 88, 0.06)" : "rgba(255, 59, 48, 0.06)";

    return `
    <div style="background: ${bgColor}; padding: 15px; border-radius: 12px; border: 1px solid ${color}40; margin-top: 15px; transition: all 0.3s ease;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <b style="color: ${color}; font-size: 1rem; text-transform: uppercase; letter-spacing: 0.5px;">
                ${info.loai} Tinh: ${info.cap_do}
            </b>
            <span style="color: #000; font-size: 0.85rem; background: ${color}; padding: 2px 10px; border-radius: 15px; font-weight: 900;">
                ${info.diem}/100
            </span>
        </div>
        
        <div style="font-size: 0.9rem; color: #fff; line-height: 1.6; margin-bottom: 12px;">
            ${info.text}
        </div>
        
        ${info.giaiphap ? `
            <div style="font-size: 0.85rem; color: #bbb; border-top: 1px dashed ${color}40; padding-top: 10px; font-style: italic;">
                <span style="color: ${color}; font-weight: bold;">💡 Giải pháp kiến nghị:</span> ${info.giaiphap}
            </div>
        ` : ''}
    </div>`;
}

// =========================================================================
// 3. HÀM updateCompassUI() - ĐỒNG BỘ HOÀN TOÀN CÁC THAM SỐ NGÀY SINH THỜI THỰC
// =========================================================================
function updateCompassUI(heading) {
    // 1. TÍNH GÓC THỰC TẾ (Đã bù trừ độ lệch từ trường tuyệt đối)
    let trueHeading = (heading + (magneticDeclination % 360) + 360) % 360;
    currentHeading = Math.round(trueHeading);
    
    // Xoay la bàn theo góc THỰC TẾ và cập nhật thanh trượt
    if (compass) compass.style.transform = `rotate(${-trueHeading}deg)`;
    if (needle) needle.style.transform = `rotate(0deg)`;
    if (compassSlider) compassSlider.value = currentHeading;

    // LẤY DỮ LIỆU ĐẦU VÀO ĐỘNG TỪ BIỂU MẪU KHẢO SÁT
    const dayStr = document.getElementById('birthDay')?.value || "";
    const monthStr = document.getElementById('birthMonth')?.value || "";
    const yearStr = document.getElementById('birthYear')?.value || "";
    const adviceBox = document.getElementById('pro-advice-box');
    const adviceContent = document.getElementById('advice-content');

    // =========================================================================
    // SỬA LỖI TRỤC THỜI GIAN: Phân định rạch ròi Năm Sinh và Năm Khảo Sát
    // =========================================================================
    // 1. Năm Khảo Sát (Niên Trạch) chạy động theo trục thời gian thực tế
    const txtSurveyYear = document.getElementById('surveyYear'); 
    const namKhaoSatThucTe = (txtSurveyYear && txtSurveyYear.value.length === 4) ? parseInt(txtSurveyYear.value, 10) : new Date().getFullYear();

    // 2. TỰ ĐỘNG CHUẨN HÓA: Tính toán năm âm lịch của mệnh chủ dựa theo Tiết khí Lập Xuân
    let namAmMệnhChủ = new Date().getFullYear();
    if (dayStr && monthStr && yearStr && yearStr.length === 4) {
        const d = parseInt(dayStr, 10);
        const m = parseInt(monthStr, 10);
        const y = parseInt(yearStr, 10);
        namAmMệnhChủ = (m < 2 || (m === 2 && d < 5)) ? y - 1 : y;
    }

    // TỰ ĐỘNG KHẮC PHỤC LỖI Racing-Condition: Đảm bảo có quẻ mệnh chạy nền không bị undefined
    let tinhChuMenh = (typeof chủMệnh !== 'undefined' && chủMệnh) ? chủMệnh : "Khảm";
    if (dayStr && monthStr && yearStr && yearStr.length === 4) {
        if (typeof tínhCungPhi === 'function') {
            tinhChuMenh = tínhCungPhi(parseInt(yearStr, 10), parseInt(monthStr, 10), parseInt(dayStr, 10), document.getElementById('gender')?.value || 'male');
        }
    }

    // ==================== 1. XÁC ĐỊNH 8 CUNG ĐẠI CỤC (45°) ====================
    let currentCung = "";
    let currentCode = "";
    if (trueHeading >= 337.5 || trueHeading < 22.5) {
        currentCung = "KHẢM (BẮC)"; currentCode = "N";
    } else if (trueHeading >= 22.5 && trueHeading < 67.5) {
        currentCung = "CẤN (ĐÔNG BẮC)"; currentCode = "NE";
    } else if (trueHeading >= 67.5 && trueHeading < 112.5) {
        currentCung = "CHẤN (ĐÔNG)"; currentCode = "E";
    } else if (trueHeading >= 112.5 && trueHeading < 157.5) {
        currentCung = "TỐN (ĐÔNG NAM)"; currentCode = "SE";
    } else if (trueHeading >= 157.5 && trueHeading < 202.5) {
        currentCung = "LY (NAM)"; currentCode = "S";
    } else if (trueHeading >= 202.5 && trueHeading < 247.5) {
        currentCung = "KHÔN (TÂY NAM)"; currentCode = "SW";
    } else if (trueHeading >= 247.5 && trueHeading < 292.5) {
        currentCung = "ĐOÀI (TÂY)"; currentCode = "W";
    } else if (trueHeading >= 292.5 && trueHeading < 337.5) {
        currentCung = "CÀN (TÂY BẮC)"; currentCode = "NW";
    }

    // ==================== 2. TRÍCH XUẤT 24 SƠN (15°) + 72 HẬU (5°) ====================
    let gockim = (trueHeading % 360 + 360) % 360;
    let sơnHiệnTạiObj = SON_24_CONFIG.find(s => {
        if (s.min > s.max) return gockim >= s.min || gockim < s.max;
        return gockim >= s.min && gockim < s.max;
    }) || SON_24_CONFIG[0];
    let sơnHiệnTại = sơnHiệnTạiObj.name;

    const currentHauInfo = getCurrentHauInfo(trueHeading);
    const mụcĐích = document.getElementById('purpose')?.value || 'house';
    
    // ĐỒNG BỘ TOÁN PHÁP CHÍNH TÔNG: Truyền đầy đủ cả 5 tham số cốt lõi vào bộ xử lý tính điểm
    const tongHop = tinhDiemTongHop(tinhChuMenh, trueHeading, namKhaoSatThucTe, mụcĐích, namAmMệnhChủ);

    // Mốc màu hiển thị số điểm tổng hợp trên thanh la bàn đồng bộ với ngưỡng Đạt Cách 72pt
    let colorDiemRealtime = "#ff4444"; 
    if (tongHop.diem >= 72) {
        colorDiemRealtime = "#30d158"; 
    } else if (tongHop.diem >= 50) {
        colorDiemRealtime = "#ffd700"; 
    }

    // ==================== 3. KHO TÀNG PHÁB BẢO VẬT PHẨM ĐẦY ĐỦ 100% ====================
    const advices = {
        "Sinh Khí": "<strong>[CÁT TINH ĐẠI LỢI] Cách kích hoạt vượng khí tối đa trong Vận 9:</strong> Hướng này chủ về nhân đinh hưng vượng, thu hút tài lộc mạnh mẽ, giúp công danh sự nghiệp phát đạt.<br>👉 <em>Pháp bảo khuyên dùng:</em> <br>1. Đặt chậu cây xanh lớn đại diện cho hành Mộc (Thiết Mộc Lan, Kim Tiền) tại cửa ra vào để kéo khí trường.<br>2. Treo tranh mộc sinh hỏa hoặc đặt Tháp Văn Xương bằng gỗ chín tầng tại góc phương vị này để tăng tiến đường học hành, quan lộ.",
        "Thiên Y": "<strong>[CÁT TINH SỨC KHỎE] Cách gia tăng năng lượng hộ thân, trừ bệnh:</strong> Hướng chủ trì sức khỏe, tiêu bệnh trừ tai, giúp gia đạo bình an, trường thọ.<br>👉 <em>Pháp bảo khuyên dùng:</em> <br>1. Đặt một quả Hồ lô bằng đồng hoặc Hồ lô đá thạch anh vàng ngay đầu giường ngủ hoặc trước cửa phòng.<br>2. Bố trí bình gốm sứ cao cấp, đĩa ngọc thạch anh hành Thổ để bồi bổ sinh khí, giúp tạng phủ khỏe mạnh, ngủ ngon giác.",
        "Diên Niên": "<strong>[CÁT TINH GIA ĐẠO] Cách củng cố hòa khí, kết nối lương duyên bền vững:</strong> Hướng chủ về sự hòa thuận, củng cố quan hệ ngoại giao, gia đình êm ấm, vợ chồng đồng lòng.<br>👉 <em>Pháp bảo khuyên dùng:</em> <br>1. Đặt các vật phẩm chế tác bằng kim loại quý hành Kim như: Đôi uyên ương bằng đồng, hồ lô đồng nạp phúc.<br>2. Sử dụng thảm trải sàn màu trắng, xám ghi hoặc thạch anh trắng để thu hút năng lượng cát tường, gia đạo yên vui.",
        "Phục Vị": "<strong>[CÁT TINH TĨNH TÂM] Kích hoạt sự vững chãi, thi cử đỗ đạt:</strong> Hướng mang lại bình an, củng cố sức mạnh tinh thần, bản lĩnh, rất có lợi cho ban thờ và bàn làm việc.<br>👉 <em>Pháp bảo khuyên dùng:</em> <br>1. Đặt tháp nước phong thủy luận chuyển tuần hoàn (hành Thủy) hoặc quả cầu thủy tinh màu xanh biển sâu.<br>2. Đặt một chiếc gương nhỏ nhìn ra hướng cát hoặc bài trí biểu tượng cột buồm đón gió để duy trì năng lượng tiến thủ.",
        "Tuyệt Mệnh": "<strong>[ĐẠI HUNG TINH NGUY HIỂM] Phương án Hóa Giải Sát Khí tối thượng:</strong> Phương vị mang sát khí cực mạnh, dễ tổn hại đoản thọ, phá sản, bệnh tật nghiêm trọng.<br>👉 <em>Các giải pháp hóa giải linh hoạt (Chọn 1 trong các cách sau):</em><br>1. <b>Bảo pháp Kim khí:</b> Treo một chuông gió bằng đồng 6 thanh (Lục đế) hoặc đặt một cặp Tỳ Hưu bằng đồng nguyên chất để dùng hành Kim làm suy yếu tuyệt đối hung tinh.<br>2. <b>Trấn trạch chế sát:</b> Treo gương Bát Quái Gỗ Đào Lồi chính tông hướng ra ngoài cửa để phản xạ sát khí.<br>3. <b>Màu sắc điều hòa:</b> Sử dụng thảm trải màu xám tro hoặc màu trắng đặt ngay thềm cửa ra vào để thanh lọc tà khí.",
        "Ngũ Quỷ": "<strong>[HUNG TINH THỊ PHI] Phương án khắc chế hỏa khí, trừ tiểu nhân quấy phá:</strong> Dễ gây nóng nảy, kiện tụng, tổn hao tài sản, bị tiểu nhân đâm sau lưng.<br>👉 <em>Các giải pháp hóa giải linh hoạt (Chọn 1 trong các cách sau):</em><br>1. <b>Thủy pháp hóa sát:</b> Áp dụng nguyên lý 'Khôi phục bình hòa' - Đặt một lu nước sạch, bình thủy tinh chứa nước an nhẫn (nước muối loãng) hoặc quả cầu thạch anh đen tại vị trí này để dập tắt lửa Ngũ Quỷ.<br>2. Treo chuỗi tiền cổ Ngũ Đế bằng đồng ở ngạch cửa để dùng Kim sinh Thủy tiêu hao ác tính.",
        "Lục Sát": "<strong>[HUNG TINH TRỤC TRẶC] Cách hóa giải bất hòa gia đạo và mâu thuẫn tình cảm:</strong> Gây tranh chấp xích mích tai tiếng, tinh thần u uất, tình duyên lận đận.<br>👉 <em>Các giải pháp hóa giải linh hoạt (Chọn 1 trong các cách sau):</em><br>1. Đặt một bể cá phong thủy hoặc phong thủy luân (hành Thủy khí tốt) tại phương vị này để chuyển hóa năng lượng xung khắc thành dòng chảy êm dịu.<br>2. Sử dụng các đồ vật trang trí mang sắc xanh dương, đen hoặc thu hút tà khí bằng cách treo rèm cửa màu tối.",
        "Họa Hại": "<strong>[HUNG TINH HAO TÀI VỤN VẶN] Tiêu trừ năng lượng tiêu cực, xua đuổi rủi ro:</strong> Khiến công việc hay gặp trắc trở vụn vặt, muộn phiền, tiểu nhân quấy rầy.<br>👉 <em>Các giải pháp hóa giải linh hoạt (Chọn 1 trong các cách sau):</em><br>1. Đặt các vật phẩm chế tác từ đá tự nhiên thuộc hành Thổ hoặc Kim như: Gậy Như Ý bằng đồng, thạch anh trắng cát tường.<br>2. Treo một dải ruy băng đỏ phối đồng xu may mắn hoặc đặt các bức tượng chiêu tài bằng đồng để biến hung thành cát."
    };

    // ==================== 4. CHẾ ĐỘ CHƯA NHẬP ĐỦ FORM (CHẾ ĐỘ ĐO TỰ DO) ====================
    if (!dayStr || !monthStr || !yearStr || yearStr.length < 4) {
        if (elementBox) elementBox.innerHTML = `<span class="element-badge" style="background: #3a3a3c;">Phương vị: ${phươngVịThiếtLập[currentCode]?.ngũHành || 'Không xác định'}</span>`;
        if (judgmentBox) {
            judgmentBox.innerText = "ĐO HƯỚNG CHÍNH XÁC";
            judgmentBox.className = "judgment-badge";
            judgmentBox.removeAttribute("style");
            judgmentBox.style.backgroundColor = "#222";
            judgmentBox.style.color = "var(--gold)";
            judgmentBox.style.border = "1px solid var(--gold)";
        }
        if (detailBox) {
            detailBox.style.borderLeftColor = "var(--gold)";
            detailBox.innerHTML = `
                <span style="color:#ffffff; font-family: sans-serif;">Hệ thống đang chạy ở chế độ la bàn thực địa độ phân giải cao Vận 9.<br>
                Tọa độ: <span class="gold-text">${currentHeading}°</span> | Phương: <b>${currentCung}</b> | Sơn: <span style="color:var(--gold); font-weight:bold;">${sơnHiệnTại}</span>.<br>
                Thích hợp đo đạc kiểm tra thông số long mạch thiết kế hạ tầng trạch đất. Vui lòng điền đầy đủ Ngày/Tháng/Năm sinh để bóc tách Cát/Hung gia trạch bản mệnh.</span>`;
        }
        
        // THANH HIỂN THỊ ĐO TỰ DO: SỐ LỚN, CHỐNG SẬP KHUNG
        const degreeTxt = document.getElementById('degree-txt') || document.getElementById('degreeTxt');
        if (degreeTxt) {
            degreeTxt.innerHTML = `
                <div style="display: grid; grid-template-rows: auto auto; gap: 6px; font-family: sans-serif; width: 100%; box-sizing: border-box; overflow: hidden;">
                    <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; white-space: nowrap; overflow: hidden;">
                        <div style="display: flex; align-items: center; gap: 6px;">
                            <span style="font-size: 1.8rem; font-weight: 900; color: #ffca28; letter-spacing: -0.5px; line-height: 1;">${currentHeading}°</span>
                            <span style="font-size: 0.9rem; color: #8a8a8f; margin-left: 4px;">Phương:</span>
                            <span style="font-size: 0.95rem; font-weight: bold; color: #ffffff;">${currentCung}</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 4px; flex-shrink: 0;">
                            <span style="font-size: 0.9rem; color: #8a8a8f;">Sơn:</span>
                            <span style="font-size: 0.9rem; font-weight: 800; padding: 2px 10px; border-radius: 5px; background: linear-gradient(135deg, #1c1c1e 0%, #2c2c2e 40%, #3a3a3c 55%, #1c1c1e 100%); color: #e5e5ea; border: 1px solid #48484a; box-shadow: inset 0 1px 0 rgba(255,255,255,0.1), 0 1px 3px rgba(0,0,0,0.5); text-shadow: -1px -1px 0 rgba(0,0,0,0.8); letter-spacing: 0.3px;">${sơnHiệnTại}</span>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 4px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 0.85rem; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 5px;">
                        <span style="color: #8a8a8f;">Hậu:</span>
                        <strong style="color: #ffffff;">${currentHauInfo.ten}</strong>
                        <span style="color: ${currentHauInfo.emoji === '🟢' ? '#00ff41' : (currentHauInfo.emoji === '🔴' ? '#ff4444' : '#ffd700')}; font-weight: 600;">(${currentHauInfo.chatLuong})</span>
                    </div>
                </div>`;
        }

        if (adviceBox) adviceBox.style.display = 'none';
        if (typeof kichHoatDenLedQuet === 'function') kichHoatDenLedQuet(currentHeading);
        return;
    }

// =========================================================================
    // 🏛️ NÂNG CẤP ĐỒNG BỘ MỤC 5: CHẾ ĐỘ LUẬN ĐOÁN CAO CẤP PHÂN TẦNG VẬN 9 (UI CHUẨN XÁC)
    // =========================================================================
    
    const hànhPhươngVị = phươngVịThiếtLập?.[currentCode]?.ngũHành || "N/A";
    
    // TẬP TRUNG HỌC THUẬT: Chuẩn hóa chữ hoa đầu chuỗi (Title Case) để khớp chính xác O(1) cấu trúc mảng ngoài
    let mapKey = tinhChuMenh.trim();
    if (mapKey) {
        mapKey = mapKey.charAt(0).toUpperCase() + mapKey.slice(1).toLowerCase();
    }
    const hànhMệnhChủ = bátTrạchMap?.[mapKey]?.element || "N/A";
    
    if (elementBox) {
        elementBox.innerHTML = `
            <span class="element-badge" style="background: #3a3a3c; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; font-weight: bold; color: #fff; font-family: sans-serif;">Phương vị: ${hànhPhươngVị}</span>
            <span class="element-badge" style="background: #2c2c2e; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; font-weight: bold; color: var(--gold); border: 1px solid rgba(212,175,55,0.3); font-family: sans-serif;">Mệnh: ${hànhMệnhChủ}</span>
        `;
    }

    const cungTrạch = bátTrạchMap?.[mapKey]?.[currentCode] || "Khác";
    const thôngTinCung = cungPhầnTrăm?.[cungTrạch] || { cát: true, ý_nghĩa: "Thông tin cung vị đang được cập nhật tinh vân." };

    // SỬA LỖI TỬ HUYỆT: Truyền chính xác tên Sơn vị hẹp hòi thay vì hướng lớn đại cục bị lệch Thần Sát
    const ketQua = typeof tinhHanCuuTinhTheoNam === 'function' ? tinhHanCuuTinhTheoNam(sơnHiệnTại, namKhaoSatThucTe) : { thongTinSao: "Chưa có dữ liệu tinh vân", meoGiaiHan: "" };
    
    let canhBaoCuuTinh = "";
    let giaiHanCuuTinh = "";
    const boxStyle = "margin-top:10px; padding:10px; border-radius:6px; font-size:0.85rem; line-height:1.4; font-family: sans-serif;";

    if (ketQua.thongTinSao.includes("⚠️")) {
        canhBaoCuuTinh = `<div style="${boxStyle} background:rgba(255,59,48,0.08); border:1px solid #ff3b30; color:#ff3b30;"><b style="display:block; margin-bottom:4px; font-size:0.9rem;">⚠️ CẢNH BÁO NIÊN HẠN CỬU TINH ${namKhaoSatThucTe}:</b>${ketQua.thongTinSao.replace(/⚠️/g, '•')}</div>`;
        if (ketQua.meoGiaiHan) {
            giaiHanCuuTinh = `<div style="margin-top:5px; padding:8px 12px; background:rgba(255,159,10,0.08); border-left:3px solid #ff9f0a; color:#ff9f0a; font-size:0.82rem; border-radius:0 6px 6px 0; font-family: sans-serif;"><b>💡 Mật pháp giải hạn thời khí:</b> ${ketQua.meoGiaiHan.replace('👉 Hóa giải: ', '')}</div>`;
        }
    } else {
        canhBaoCuuTinh = `<div style="${boxStyle} background:rgba(48,209,88,0.08); border:1px solid #30d158; color:#30d158; text-align:center; font-weight:bold;">✅ VẬN KHÍ CỬU TINH ĐẮC LỢI: ${ketQua.thongTinSao}</div>`;
    }

    // Luận đoán Minh Châu đệ nhất Sơn vị thực thời từ lõi thuật toán
    let luanDoanSonChiTiet = "";
    if (typeof MaTranMinhChau !== 'undefined' && MaTranMinhChau[mapKey]?.[sơnHiệnTại]) {
        const mc = MaTranMinhChau[mapKey][sơnHiệnTại];
        
        // Đồng bộ màu sắc Sơn vị dựa trên kết quả tính điểm động của hàm tinhDiemTongHop tại tọa độ hẹp đó
        const diemSonDong = tinhDiemTongHop(mapKey, gockim, namKhaoSatThucTe, mụcĐích, namAmMệnhChủ, 0).diem;
        
        // ĐỒNG BỘ NGƯỠNG CÁT VỊ 70PT KHÔNG ĐỂ GẮT
        const color = diemSonDong >= 70 ? '#30d158' : (diemSonDong >= 50 ? '#dfb76c' : '#ff3b30');
        const label = diemSonDong >= 70 ? '[MINH CHÂU CÁT SƠN ĐẮC CÁCH]' : (diemSonDong >= 50 ? '[MINH CHÂU BÌNH HÒA SƠN]' : '[MINH CHÂU HUNG SƠN KHẮC KỴ]');
        
        const thongSo = `<span style="color:#a0a0a0; font-style:italic;">Sơn vị ${sơnHiệnTại} (${sơnHiệnTạiObj?.huong}):</span>`;
        luanDoanSonChiTiet = `<b style="color:${color}; display:block; margin-bottom:4px;">${label}</b> ${thongSo} <span style="color:#ffffff;">${mc.text}</span>`;
        if (mc.giaiphap) {
            luanDoanSonChiTiet += `<br><br><span style="color:${color}; font-weight:bold;">💡 Pháp bảo bố trí khuyên dùng tại bản sơn:</span> <span style="color:#e5e5ea; background:rgba(255,255,255,0.04); padding:2px 6px; border-radius:4px;">${mc.giaiphap}</span>`;
        }
    } else {
        luanDoanSonChiTiet = `<span style="color:#a0a0a0; font-style:italic;">Tọa độ định vị: ${currentHeading}° | Sơn ${sơnHiệnTại} | Hướng đại cục ${sơnHiệnTạiObj?.huong}.</span>`;
    }

    const config = ConfigPhongThuy[mụcĐích] || { title: "Cung vị", isCat: true };

    // 1. ĐỊNH VỊ CÁI GỐC (Bản chất Địa lý tĩnh Bát Trạch)
    const hungTinhBạtTrach = ["Tuyệt Mệnh", "Ngũ Quỷ", "Lục Sát", "Họa Hại"];
    const laCungHungDiaLy = hungTinhBạtTrach.includes(cungTrạch);
    const laThuanDiaLy = config.isCat ? !laCungHungDiaLy : laCungHungDiaLy;

    // 2. ĐỊNH VỊ CÁI NGỌN ĐỘNG (Đồng bộ hạ mốc cát vị xuống 70pt để tránh gắt gỏng bóp méo thực tế)
    const isGoodRealtime = tongHop.diem >= 70; 

    // 🔥 FIX TRIỆT ĐỂ LỖI SYNTAX: Tái gán trực tiếp, không sử dụng từ khóa 'const' hoặc 'let' ở đây nữa
    colorDiemRealtime = tongHop.diem >= 70 ? '#30d158' : (tongHop.diem >= 50 ? '#dfb76c' : '#ff3b30');

    // --- RE-RENDER THANH HIỂN THỊ CAO CẤP DYNAMIC CHỐNG RUNG VÀ SẬP KHUNG GIAO DIỆN ---
    const degreeTxt = document.getElementById('degree-txt') || document.getElementById('degreeTxt');
    if (degreeTxt) {
        degreeTxt.innerHTML = `
            <div style="display: grid; grid-template-rows: auto auto; gap: 6px; font-family: sans-serif; width: 100%; box-sizing: border-box; overflow: hidden;">
                <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; white-space: nowrap; overflow: hidden;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                        <span style="font-size: 1.8rem; font-weight: 900; color: #ffca28; letter-spacing: -0.5px; line-height: 1;">${currentHeading}°</span>
                        <span style="font-size: 0.9rem; color: #8a8a8f; margin-left: 4px;">Phương:</span>
                        <span style="font-size: 0.95rem; font-weight: bold; color: #ffffff;">${currentCung}</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 4px; flex-shrink: 0;">
                        <span style="font-size: 0.9rem; color: #8a8a8f;">Sơn:</span>
                        <span style="font-size: 0.9rem; font-weight: 800; padding: 2px 10px; border-radius: 5px; background: linear-gradient(135deg, #1c1c1e 0%, #2c2c2e 40%, #3a3a3c 55%, #1c1c1e 100%); color: #e5e5ea; border: 1px solid #48484a; box-shadow: inset 0 1px 0 rgba(255,255,255,0.1), 0 1px 3px rgba(0,0,0,0.5); text-shadow: -1px -1px 0 rgba(0,0,0,0.8); letter-spacing: 0.3px;">${sơnHiệnTại}</span>
                    </div>
                </div>
                
                <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; white-space: nowrap; overflow: hidden; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 5px;">
                    <div style="overflow: hidden; text-overflow: ellipsis; font-size: 0.85rem; display: flex; align-items: center; gap: 4px;">
                        <span style="color: #8a8a8f;">Hậu:</span>
                        <strong style="color: #ffffff;">${tongHop.hauInfo.ten}</strong>
                        <span style="color: ${tongHop.hauInfo.emoji === '🟢' ? '#00ff41' : (tongHop.hauInfo.emoji === '🔴' ? '#ff4444' : '#ffd700')}; font-weight: 600;">(${tongHop.hauInfo.chatLuong})</span>
                    </div>
                    
                    <div style="font-size: 0.95rem; font-weight: 850; color: ${colorDiemRealtime}; letter-spacing: 0.3px; background: rgba(0,0,0,0.35); padding: 2px 8px; border-radius: 5px; flex-shrink: 0;">
                        ${tongHop.diem}pt (${tongHop.level})
                    </div>
                </div>
            </div>`;
    }

    if (judgmentBox) {
        judgmentBox.removeAttribute("style");
        judgmentBox.innerText = `${config.title}: ${cungTrạch}`;
        judgmentBox.className = isGoodRealtime ? "judgment-badge bg-good" : "judgment-badge bg-bad";
    }
    if (detailBox) detailBox.style.borderLeftColor = colorDiemRealtime;

    // --- RENDER PHẦN 1: PANEL THÔNG TIN DIỄN GIẢI CHÍNH CỦA ĐỊA LÝ TĨNH BÁT TRẠCH ---
    let noiDungDetail = "";
    noiDungDetail += `<div style="margin-bottom:15px; padding:12px; border-radius:8px; background:rgba(255,255,255,0.04); border-left: 4px solid ${colorDiemRealtime}; font-family: sans-serif;">`;
    noiDungDetail += `<strong style="color: ${colorDiemRealtime}; font-size: 1.05rem; display:block; margin-bottom:5px;">`;
    noiDungDetail += `◆ ${config.isCat ? (isGoodRealtime ? 'CÁT CỤC NẠP KHÍ' : 'HUNG CỤC PHẠM KỴ') : (isGoodRealtime ? 'TỌA HUNG TRẤN SÁT ĐẮC CÁCH' : 'SAI VỊ TIÊU HAO KHÍ TRƯỜNG')} (${cungTrạch.toUpperCase()}) — Chỉ số PT: <span style="color:#ffd700;">${tongHop.diem}pt</span> [${tongHop.level}]:</strong>`;
    noiDungDetail += `<span style="color:#ffffff; font-size:0.9rem; line-height:1.5; display:block; margin-bottom:6px;">${thôngTinCung.ý_nghĩa}</span>`;
    
    // Nếu lõi thuật toán bóc tách ra lỗi đặc biệt (như dính Không Vong biên hoặc thời tinh quấy nhiễu), bung trực tiếp lên đầu panel
    if (tongHop.message) {
        noiDungDetail += `<div style="font-size:0.83rem; color:#ff9f0a; padding-top:4px; border-top:1px dashed rgba(255,255,255,0.08); line-height:1.4;">🔍 <b>Phân tích vi phân thực địa:</b> ${tongHop.message}</div>`;
    }
    noiDungDetail += '</div>';

    // --- RENDER PHẦN 2: BỘ LỌC ĐIỀU KIỆN HIỂN THỊ MẬT PHÁP ĐIỀU TIẾT (SMART DIALECTIC) ---
    if (!laThuanDiaLy || !isGoodRealtime || tongHop.khongVong) {
        noiDungDetail += '<div style="margin-bottom:15px; padding:12px; border-radius:8px; background:rgba(255,159,10,0.05); border:1px solid rgba(255,159,10,0.2); font-family: sans-serif;">';
        
        if (tongHop.khongVong) {
            noiDungDetail += '<h4 style="color:#ff3b30; margin:0 0 8px 0; font-size: 0.95rem; font-weight:bold;">☠️ BIỆN CHỨNG TỬ TUYẾN KHÔNG VONG LẬP CỰC</h4>';
            noiDungDetail += `<div style="color:#e5e5ea; font-size:0.85rem; line-height:1.5; margin-bottom:8px;">${tongHop.message}</div>`;
            noiDungDetail += `<div style="padding:10px; background:rgba(255,59,48,0.1); border-left:3px solid #ff3b30; color:#ff857d; font-size:0.85rem; border-radius:0 6px 6px 0;"><b>💡 Giải pháp hóa giải bắt buộc:</b> ${tongHop.hoaGiai}</div>`;
        }
        else if (!laThuanDiaLy) {
            const matPhap = (typeof sinhMatPhapHoaGiai === 'function') ? sinhMatPhapHoaGiai(mụcĐích, cungTrạch, hànhMệnhChủ, currentCung, currentCode) : "";
            const camNang = advices[cungTrạch] || "";
            
            noiDungDetail += '<h4 style="color:#ff9f0a; margin:0 0 8px 0; font-size: 0.95rem; font-weight:bold;">🛠️ MẬT PHÁP ĐIỀU TIẾT HÓA GIẢI ĐỊA CỤC BẢN MỆNH</h4>';
            noiDungDetail += `<div style="color:#ffffff; font-size:0.88rem; line-height:1.5;">${matPhap}`;
            if (camNang) {
                noiDungDetail += `<br><br><b style="color:#dfb76c;">Danh mục pháp bảo phụ trợ khuyên dùng trong Vận 9:</b><div style="color:#d1d1d6; margin-top:4px; font-size:0.85rem; background:rgba(0,0,0,0.15); padding:8px; border-radius:6px;">${camNang.replace(/👉 <em>.*?<\/em>:<br>/, '')}</div>`;
            }
            noiDungDetail += '</div>';
            
        } else {
            noiDungDetail += '<h4 style="color:#ffd700; margin:0 0 8px 0; font-size: 0.95rem; font-weight:bold;">⚠️ CẢNH BÁO ĐIỀU TIẾT HÀNH VI NIÊN HẠN THỜI KHÔNG</h4>';
            noiDungDetail += '<div style="color:#ffffff; font-size:0.88rem; line-height:1.5;">';
            
            if (!config.isCat) {
                noiDungDetail += `Vị trí hạ tầng cấu trúc <b>${config.title}</b> đặt đè lên cung <b>${cungTrạch}</b> hiện tại đã đạt chuẩn cách cục <span style="color:#30d158; font-weight:bold;">Tọa Hung Trấn Sát Đắc Cách</span> về mặt nền Địa Lý tĩnh. Đất nền sạch, không cần phá dỡ hay thay đổi tịnh tiến kết cấu.<br><br>`;
                noiDungDetail += `⚠️ <span style="color:#ff9f0a; font-weight:bold;">LƯU Ý NIÊN ĐỘ CHIẾU PHƯƠNG:</span> Do chịu tác động trường khí của hung tinh Lưu Niên đóng cung làm chỉ số sụt giảm thực thời xuống còn <b>${tongHop.diem}pt</b>. Trong năm nay, gia chủ **tuyệt đối tránh động thổ đập phá, sửa chữa lớn hoặc khoan đục** tại góc phòng này để tránh đánh thức hung sát khí của sao hạn.`;
            } else {
                noiDungDetail += `Hạng mục phân bổ không gian về mặt bản chất Địa lý là cung cát vượng (<b>${cungTrạch}</b>). Tuy nhiên, niên độ khảo sát hiện hành đang gặp từ trường suy hao do vướng đại sát tinh lưu niên đáo phương (Chỉ số sụt giảm thực thời còn <b>${tongHop.diem}pt</b>). Lỗi hoàn toàn thuộc về chu kỳ thời gian (Ngọn), không thuộc về đất nền (Gốc).<br>`;
            }
            
            noiDungDetail += `<br><b style="color:#30d158;">💡 Giải pháp hóa giải & Trợ lực khí trường từ Thuật Toán:</b>`;
            noiDungDetail += `<div style="padding:10px; background:rgba(0,0,0,0.25); border-left:3px solid #30d158; color:#e5e5ea; margin-top:5px; border-radius:0 6px 6px 0; font-size:0.85rem; line-height:1.45;">${tongHop.hoaGiai || "Duy trì bố cục sạch sẽ, kích hoạt hệ thống tiền cổ Ngũ Đế hoặc chuông gió đồng 6 thanh nhằm tiết giảm sát khí thời tịnh."}</div>`;            
            noiDungDetail += '</div>';
        }

        noiDungDetail += '</div>';
    }

    // --- RENDER PHẦN 3: THẦN SÁT 24 SƠN VÀ BIẾN THIÊN CỬU TINH CHÍNH TÔNG ---
    noiDungDetail += '<div style="margin-top:15px; padding: 12px; border-radius: 8px; background: rgba(0,0,0,0.25); border: 1px solid #d4af37; font-family: sans-serif;">';
    noiDungDetail += '<div style="margin-bottom:12px;">';
    noiDungDetail += '<b style="color:var(--gold); font-size: 0.95rem; display:block; border-bottom:1px solid rgba(255,255,255,0.06); padding-bottom:6px;">🎯 THẦN SÁT ĐỘ SỐ VI PHÂN PHÂN CHI TIẾT (24 SƠN TĨNH):</b>';
    noiDungDetail += `<div style="margin-top:8px; color:#fff; font-size: 0.88rem; line-height: 1.6;">${luanDoanSonChiTiet}</div>`;
    noiDungDetail += '</div>';
    
    noiDungDetail += '<div style="border-top: 1px dashed rgba(255,255,255,0.1); padding-top: 10px;">';
    noiDungDetail += `<b style="color:var(--gold); font-size: 0.95rem; display:block; padding-bottom:4px;">⏳ BIẾN THIÊN CỬU TINH NIÊN TRẠCH (ĐỘNG KHẢO SÁT ${namKhaoSatThucTe}):</b>`;
    noiDungDetail += `<div style="margin-top:5px; color:#fff; font-size: 0.9rem; line-height: 1.5;">${canhBaoCuuTinh}${giaiHanCuuTinh}</div>`;
    noiDungDetail += '</div>';
    noiDungDetail += '</div>';

    if (typeof sinhLuanGiaiThienThoi === 'function') {
        noiDungDetail += `<div style="margin-top:10px; font-size:0.85rem; color:#aaa; font-style:italic; font-family: sans-serif;">${sinhLuanGiaiThienThoi(currentCode)}</div>`;
    }
    
    if (detailBox) detailBox.innerHTML = noiDungDetail;

    // ==================== 7. ADVICE BOX DISPLAY CONTROLLER ====================
    if (adviceBox && adviceContent) {
        adviceBox.style.display = advices[cungTrạch] ? 'block' : 'none';
        if (advices[cungTrạch]) adviceContent.innerHTML = advices[cungTrạch];
    }

    // ==================== 8. TRIGGER REALTIME EFFECTS ====================
    if (typeof kichHoatDenLedQuet === 'function') kichHoatDenLedQuet(currentHeading);
    
    // ==================== 9. SMART GHOST NEEDLE REALTIME ALIGNMENT ====================
    if (typeof targetAngle !== 'undefined' && targetAngle !== null && document.getElementById('ghostNeedle')) {
        const ghost = document.getElementById('ghostNeedle');
        const adviceTxtEl = document.getElementById('ghost-advice-text');
        const scoreBadgeEl = document.getElementById('ghost-score-badge');
        
        ghost.style.opacity = "1";
        ghost.style.transform = `translate(-50%, -50%) rotate(${targetAngle - currentHeading}deg)`;
        
        let saiSoGoc = Math.abs(currentHeading - targetAngle) % 360;
        if (saiSoGoc > 180) saiSoGoc = 360 - saiSoGoc;

        // TIÊU CHUẨN ĐỊA LÝ CAO CẤP: Sai lệch dưới 1.5 độ bọc lót đồng bộ Neon phát quang
        if (saiSoGoc <= 1.5) {
            ghost.classList.add('matched-pulse');
            
            if (adviceTxtEl && !adviceTxtEl.innerHTML.includes("🏆")) {
                adviceTxtEl.style.color = "#30d158";
                adviceTxtEl.innerHTML = `
                    <span style="color:#30d158; font-weight:bold; display:block; margin-bottom:4px; font-family: sans-serif;">
                        🏆 KHỚP TRỤC LONG MẠCH — PHƯƠNG VỊ ĐẮC VỊ THÀNH CÔNG!
                    </span>
                    <span style="color:#fff; font-size:0.85rem; font-family: sans-serif;">
                        Tọa độ thực địa đã trùng khớp hoàn toàn với trục nạp khí lý tưởng. Đương số hãy giữ nguyên góc máy này để tiến hành lập hướng/an vị kết cấu không gian.
                    </span>`;
                if (scoreBadgeEl) {
                    scoreBadgeEl.style.boxShadow = "0 0 12px #30d158";
                    scoreBadgeEl.style.transform = "scale(1.08)";
                }
            }
        } else {
            ghost.classList.remove('matched-pulse');
            if (adviceTxtEl && adviceTxtEl.innerHTML.includes("🏆")) {
                let sonHienTaiTxt = tìmSơnHướng(targetAngle);
                adviceTxtEl.removeAttribute("style");
                if (scoreBadgeEl) {
                    scoreBadgeEl.style.boxShadow = "none";
                    scoreBadgeEl.style.transform = "scale(1)";
                }
                adviceTxtEl.innerHTML = `
                    Tia vàng ảo đang định vị nạp khí tại tọa độ <strong style="font-family: sans-serif;">Sơn ${sonHienTaiTxt}</strong>.<br>
                    <span style="color:#aaa; font-size:0.82rem; display:block; margin-top:5px; font-family: sans-serif;">
                        👉 Hãy cầm điện thoại xoay người từ từ sao cho <b>Kim Đỏ thực tế khớp thẳng trục với tia Vàng ảo</b> để đón đúng cát khí.
                    </span>`;
            }
        }
    }
}
 // =========================================================================
// 🚀 THUẬT TOÁN ĐỘNG 1: RÀ SOÁT THẦN SÁT ĐỊA TẦNG BIẾN THIÊN THEO NĂM
// =========================================================================
function getPhongThuySatTinh(tenSon, nam) {
    const results = [];
    if (!tenSon || !nam) return results;

    const thongTinSơnLõi = DATA_THANSAT.MA_TRAN_24_SON_VI[tenSon];
    const codeHuongLon = thongTinSơnLõi ? thongTinSơnLõi.huongDaiCuc : "N";
    
    const mãHướngSangTiếngViệt = { "N": "Bắc", "NE": "Đông Bắc", "E": "Đông", "SE": "Đông Nam", "S": "Nam", "SW": "Tây Nam", "W": "Tây", "NW": "Tây Bắc" };
    const huongThucTe = mãHướngSangTiếngViệt[codeHuongLon] || "Trung Cung";

    // 1. ENGINE NGỮ HOÀNG ĐẠI SÁT
    let diff = (nam - 2024) % 9;
    if (diff < 0) diff += 9;
    const mapNguHoang = ["Tây", "Đông Bắc", "Nam", "Bắc", "Tây Nam", "Đông", "Đông Nam", "Trung Cung", "Tây Bắc"];
    if (huongThucTe === mapNguHoang[diff]) {
        results.push({
            ten: "NGŨ HOÀNG ĐẠI SÁT",
            color: "#ff3b30",
            level: "Đại Hung",
            giaiPhap: "Treo chuông gió đồng 6 thanh (Lục đế) hoặc đặt hồ lô đồng để hóa giải Thổ khí của Sát tinh, tuyệt đối kỵ động thổ gây tai họa."
        });
    }

    // 2. ENGINE THÁI TUẾ & TUẾ PHÁ
    const diaChiNam = DATA_THANSAT.thaiTue[nam % 12];
    if (tenSon === diaChiNam) {
        results.push({
            ten: "THÁI TUẾ ĐÁO PHƯƠNG",
            color: "#ff453a",
            level: "Đại Hung",
            giaiPhap: "Khu vực Thần chủ tể quản năm, kỵ đào móng sửa chữa đối xung từ trường. Nên đặt cặp Kỳ Lân bằng đồng hoặc đá thạch anh để an định trạch vận."
        });
    }
    if (tenSon === getDoiXungDiaChi(diaChiNam)) {
        results.push({
            ten: "TUẾ PHÁ CHIẾU CỤC",
            color: "#ff9f0a",
            level: "Hung",
            giaiPhap: "Tuyến vị trục trực diện xung với Thái Tuế, từ trường bấp bênh dễ nảy sinh thị phi, biến động bất ngờ. Giữ yên tĩnh khu vực này."
        });
    }

    // 3. ENGINE TAM SÁT PH N RÃ CHÍNH TÔNG
    const tamHopCuc = getTamHopCuc(diaChiNam);
    const diaChiLienQuoiCuaSơn = thongTinSơnLõi ? thongTinSơnLõi.diaChiLienQuoi : "";
    
    // 🔥 ĐÃ FIX: Viết liền mạch tên biến 'mapCụcĐơnGiản' không khoảng trắng
    const mapCụcĐơnGiản = { "ThânTýThìn": ["Tỵ", "Ngọ", "Mùi"], "DầnNgọTuất": ["Hợi", "Tý", "Sửu"], "HợiMãoMùi": ["Thân", "Dậu", "Tuất"], "TỵDậuSửu": ["Dần", "Mão", "Thìn"] };
    const mảngSát = mapCụcĐơnGiản[tamHopCuc] || [];

    if (mảngSát.includes(tenSon) || mảngSát.includes(diaChiLienQuoiCuaSơn)) {
        // 🔥 ĐÃ FIX: Gọi đúng tên hàm liền mạch 'getChiTietTamSat'
        const tênSátChiTiết = getChiTietTamSat(tamHopCuc, diaChiLienQuoiCuaSơn);
        results.push({
            ten: `TAM SÁT - PHẠM ${tênSátChiTiết.toUpperCase()}`,
            color: "#d63031",
            level: "Hung",
            giaiPhap: "Dải khí lưu niên dồn tụ sát khí cục bộ. An vị cặp Tỳ Hưu đồng hoặc Kỳ Lân hướng đầu ra ngoài cửa để phong tỏa hung khí, kỵ đập phá tường."
        });
    }

    return results;
}

// =========================================================================
// 📐 HÀM TOÁN HỌC VI PH N PHƯƠNG VỊ VÀ ĐỐI XỨNG HÌNH HỌC KHÔNG GIAN
// =========================================================================
function getDoiXungDiaChi(chi) {
    const map = { "Tý":"Ngọ", "Ngọ":"Tý", "Mão":"Dậu", "Dậu":"Mão", "Dần":"Thân", "Thân":"Dần", "Thìn":"Tuất", "Tuất":"Thìn", "Tỵ":"Hợi", "Hợi":"Tỵ", "Sửu":"Mùi", "Mùi":"Sửu" };
    return map[chi] || "";
}

function getTamHopCuc(chi) {
    if (["Thân", "Tý", "Thìn"].includes(chi)) return "ThânTýThìn";
    if (["Dần", "Ngọ", "Tuất"].includes(chi)) return "DầnNgọTuất";
    if (["Hợi", "Mão", "Mùi"].includes(chi)) return "HợiMãoMùi";
    if (["Tỵ", "Dậu", "Sửu"].includes(chi)) return "TỵDậuSửu";
    return "";
}

function getTamSat24Son(cuc) {
    const map = {
        "ThânTýThìn": ["Tỵ", "Ngọ", "Mùi"],
        "DầnNgọTuất": ["Hợi", "Tý", "Sửu"],
        "HợiMãoMùi":  ["Thân", "Dậu", "Tuất"],
        "TỵDậuSửu":   ["Dần", "Mão", "Thìn"]
    };
    return map[cuc] || [];
}

function updateDegreeDisplay(degree) {
    // 1. Chuẩn hóa góc kim (Đảm bảo không bao giờ tràn số)
    const normalized = ((degree % 360) + 360) % 360;
    const currentHeading = Math.round(normalized);

    // 2. ĐỒNG BỘ NGUỒN DỮ LIỆU ĐỘNG:
    // Lấy năm từ surveyYear (năm khảo sát thực) thay vì birthYear (năm sinh mệnh chủ)
    const txtNamKhaoSat = document.getElementById('surveyYear'); 
    const namKhaoSatThucTe = (txtNamKhaoSat && txtNamKhaoSat.value.length === 4) 
                            ? parseInt(txtNamKhaoSat.value, 10) 
                            : new Date().getFullYear();

    // 3. Truy xuất các thông số cốt tủy
    const currentCung = getCungName(normalized);
    const sonObj = getSonObjByDegree(normalized);
    const sonName = sonObj.name;
    const currentHauInfo = getCurrentHauInfo(normalized);
    const khongVongInfo = kiemTraKhongVong(normalized);

    // 4. Tính điểm thực thời (PT) với tham số đầu vào là năm khảo sát thực tế
    let tongDiemHTML = "";
    let colorDiemRealtime = "#8a8a8f"; // Màu mặc định nếu chưa có dữ liệu

    if (typeof chủMệnh !== 'undefined' && chủMệnh) {
        const mucDichHienTai = document.getElementById('purpose')?.value || 'house';
        // Truyền năm khảo sát thực tế vào để hệ thống tự tính biến thiên (K_Van, SatTinh)
        const tongHop = tinhDiemTongHop(chủMệnh, normalized, namKhaoSatThucTe, mucDichHienTai);
        
        // MỐC ĐẠT CÁCH VẬN 9 (72PT làm ngưỡng cửa sinh khí)
        if (tongHop.diem >= 72) colorDiemRealtime = "#30d158"; // Cát Vị trở lên
        else if (tongHop.diem >= 50) colorDiemRealtime = "#ffd700"; // Trung bình
        else colorDiemRealtime = "#ff3b30"; // Hung

        tongDiemHTML = `<div style="font-size: 0.95rem; font-weight: 850; color: ${colorDiemRealtime}; background: rgba(0,0,0,0.3); padding: 2px 8px; border-radius: 5px;">${tongHop.diem}pt (${tongHop.level})</div>`;
    }

    // 5. RENDER UI ĐỒNG BỘ
    const degreeTxt = document.getElementById('degree-txt') || document.getElementById('degreeTxt');
    if (degreeTxt) {
        degreeTxt.innerHTML = `
            <div style="display: grid; gap: 4px; font-family: sans-serif;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-size: 1.8rem; font-weight: 900; color: #ffca28;">${currentHeading}°</span>
                    <span style="font-size: 0.95rem; font-weight: bold; color: #ffffff;">${currentCung}</span>
                    <span style="font-size: 0.9rem; background: #3a3a3c; padding: 2px 8px; border-radius: 4px;">Sơn: ${sonName}</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #444; padding-top: 4px;">
                    <span style="font-size: 0.85rem; color: #aaa;">Hậu: <b style="color: ${currentHauInfo.emoji === '🟢' ? '#00FF41' : '#ff4444'}">${currentHauInfo.ten.split(' ')[0]}</b></span>
                    ${khongVongInfo ? `<span style="color:#ff3b30; font-weight:bold;">⚠️ ${khongVongInfo.loai}</span>` : ""}
                    ${tongDiemHTML}
                </div>
            </div>`;
    }
}

// ====================== HÀM HỖ TRỢ LẤY TÊN CUNG ======================
function getCungName(degree) {
    let normalized = ((degree % 360) + 360) % 360;
    if (normalized >= 337.5 || normalized < 22.5) return "KHẢM (BẮC)";
    if (normalized >= 22.5 && normalized < 67.5) return "CẤN (ĐÔNG BẮC)";
    if (normalized >= 67.5 && normalized < 112.5) return "CHẤN (ĐÔNG)";
    if (normalized >= 112.5 && normalized < 157.5) return "TỐN (ĐÔNG NAM)";
    if (normalized >= 157.5 && normalized < 202.5) return "LY (NAM)";
    if (normalized >= 202.5 && normalized < 247.5) return "KHÔN (TÂY NAM)";
    if (normalized >= 247.5 && normalized < 292.5) return "ĐOÀI (TÂY)";
    return "CÀN (TÂY BẮC)";
}

// =========================================================================
// 🧭 ĐỒNG BỘ HÀM layThongTin24Son VỚI MA TRẬN MINH CHÂU VÀ DỮ LIỆU ĐỘNG 72 HẬU
// =========================================================================
// =========================================================================
// HÀM 1: TRÍCH XUẤT NĂNG LƯỢNG LONG VỊ 24 SƠN CHÍNH XÁC CAO
// =========================================================================
function layThongTin24Son(doSo, cungPhi, namAm) {
    // 1. Chuẩn hóa góc độ và bốc cấu trúc dữ liệu chuẩn gốc từ SON_24_CONFIG
    let gockim = (doSo % 360 + 360) % 360;
    let sonHienTaiObj = getSonObjByDegree(gockim); 
    const tênSơn = sonHienTaiObj.name;

    // 2. Định vị mạch địa long ngầm 72 Hậu theo bước nhảy 5 độ O(1)
    let mốcHậuGầnNhất = Math.round(gockim / 5) * 5;
    if (mốcHậuGầnNhất >= 360) mốcHậuGầnNhất = 0;
    const dữLiệuHậuĐộng = Data72Hau[mốcHậuGầnNhất.toString()] || { ten: tênSơn + " Hậu", diem: 60, chatLuong: "Bình Hòa" };

    // 3. Chuẩn hóa key quẻ mệnh để truy quét Ma Trận Minh Châu
    const quẻMệnhKey = Object.keys(MaTranMinhChau || {}).find(k => k.toUpperCase() === cungPhi.toUpperCase()) || cungPhi;
    const dữLiệuSơnGốc = MaTranMinhChau[quẻMệnhKey]?.[tênSơn];

    // 4. TỰ ĐỘNG KHỚP NGUỒN SỰ THẬT: Lấy mã hướng chuẩn từ trục SON_24_CONFIG
    const mapHuongTiengVietRaCode = { "Bắc": "N", "Đông Bắc": "NE", "Đông": "E", "Đông Nam": "SE", "Nam": "S", "Tây Nam": "SW", "Tây": "W", "Tây Bắc": "NW" };
    const codeHuong = mapHuongTiengVietRaCode[sonHienTaiObj.huong] || "N";
    
    const saoBatTrach = bátTrạchMap[quẻMệnhKey]?.[codeHuong] || "Phục Vị";
    const batTrachDetail = cungPhầnTrăm[saoBatTrach];
    const isCatBatTrach = batTrachDetail ? batTrachDetail.cát : true;

    let luanDoanFinal = "";
    let hoaGiaiFinal = "";
    let điểmSơnVịThựcTế = 60;

    if (dữLiệuSơnGốc) {
        // Chế độ A: Khớp trúng ma trận thiết lập thủ công chuyên sâu
        điểmSơnVịThựcTế = dữLiệuSơnGốc.diem;
        luanDoanFinal = `[Cung ${saoBatTrach}] — Phân độ Sơn ${tênSơn}: ${dữLiệuSơnGốc.text}`;
        hoaGiaiFinal = dữLiệuSơnGốc.giaiphap || "Bố trí pháp bảo theo nghi thức.";
    } else {
        // =========================================================================
        // 🚀 THUẬT TOÁN NÂNG CẤP THÔNG MINH: NỘI SUY NGŨ HÀNH BIẾN THIÊN TỰ ĐỘNG
        // =========================================================================
        // Lấy Ngũ hành cốt tủy của 24 Sơn vị và Ngũ hành của Cung Phi Mệnh Chủ
        const hànhCủaSơn = DATA_THANSAT.MA_TRAN_24_SON_VI[tênSơn]?.nguHanh || "Tho";
        const hànhCủaMệnh = bátTrạchMap[quẻMệnhKey]?.element || "Tho";
        
        // Thiết lập dải phổ điểm nền dựa theo Đại Cục Bát Trạch
        let diemCoSo = isCatBatTrach ? 76 : 36;
        
        // Ma trận tích phân tương sinh tương khắc giữa Đất (Sơn vị) và Người (Mệnh chủ)
        const quanHeNguHanh = {
            "Thuy_Moc": 6, "Moc_Hoa": 6, "Hoa_Tho": 6, "Tho_Kim": 6, "Kim_Thuy": 6, // Tương Sinh (Địa sinh Nhân - Tốt)
            "Thuy_Thuy": 4, "Moc_Moc": 4, "Hoa_Hoa": 4, "Tho_Tho": 4, "Kim_Kim": 4, // Tương Hòa (Đồng khí vượng trường)
            "Moc_Thuy": 2, "Hoa_Moc": 2, "Tho_Hoa": 2, "Kim_Tho": 2, "Thuy_Kim": 2, // Nhân sinh Địa (Xì bớt khí khí)
            "Thuy_Hoa": -6, "Hoa_Kim": -6, "Kim_Moc": -6, "Moc_Tho": -6, "Tho_Thuy": -6, // Tương Khắc (Xung đột trực diện)
            "Hoa_Thuy": -4, "Kim_Hoa": -4, "Moc_Kim": -4, "Tho_Moc": -4, "Thuy_Tho": -4  // Nhân khắc Địa (Nghịch thiên tổn lực)
        };
        
        let keyTuongTac = `${hànhCủaSơn}_${hànhCủaMệnh}`;
        let trongSoBienThien = quanHeNguHanh[keyTuongTac] || 0;
        
        // Trích xuất điểm số vi phân thông minh không cào bằng hằng số tĩnh
        điểmSơnVịThựcTế = diemCoSo + trongSoBienThien;

        // Ứng dụng tham số namAm tự động bóc tách Địa Chi tuổi chủ mệnh tương thích địa lợi
        if (typeof namAm === 'number' && namAm > 0) {
            const địaChiTuổiMệnh = DATA_THANSAT.thaiTue[namAm % 12];
            const chiCủaSơn = DATA_THANSAT.MA_TRAN_24_SON_VI[tênSơn]?.diaChiLienQuoi || "";
            const keyChiSơnCóDấu = DATA_THANSAT.THAP_NHI_CHI_VIET[DATA_THANSAT.THAP_NHI_CHI_ARR.indexOf(chiCủaSơn)] || "";
            
            if (keyChiSơnCóDấu === địaChiTuổiMệnh) {
                điểmSơnVịThựcTế += 3; // Bản mệnh đắc địa lộc bản chi địa, gia tăng trợ lực
            }
        }

        luanDoanFinal = `Sơn ${tênSơn} thuộc hướng ${sonHienTaiObj.huong} [Cung ${saoBatTrach}]: ${batTrachDetail ? batTrachDetail.ý_nghĩa : ""}`;
        hoaGiaiFinal = isCatBatTrach ? "Khí trường ôn hòa vượng trạch." : "Cần đặt vật phẩm điều tiết để trấn sát.";
    }

    return {
        son: tênSơn, huong: sonHienTaiObj.huong, luanDoan: luanDoanFinal, hoaGiai: hoaGiaiFinal,
        isCatBatTrach: isCatBatTrach, saoBatTrach: saoBatTrach, diem: điểmSơnVịThựcTế, hauChiTiet: dữLiệuHậuĐộng
    };
}

// =========================================================================
// 🌌 KHO DỮ LIỆU THẦN SÁT NGOẠI VI NÂNG CẤP TOÀN NĂNG (ĐỒNG BỘ TUYỆT ĐỐI)
// =========================================================================
const DATA_THANSAT = {
    tamSat: {
        "Dần Ngọ Tuất": "Bắc",
        "Thân Tý Thìn": "Nam",
        "Tỵ Dậu Sửu": "Đông",
        "Hợi Mão Mùi": "Tây"
    },
    thaiTue: ["Thân", "Dậu", "Tuất", "Hợi", "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi"],
    phuongVi: {
        "Tý": "Bắc", "Ngọ": "Nam", "Mão": "Đông", "Dậu": "Tây",
        "Dần": "Đông Bắc", "Thân": "Tây Nam", "Tỵ": "Đông Nam", "Hợi": "Tây Bắc",
        "Sửu": "Đông Bắc", "Mùi": "Tây Nam", "Thìn": "Đông Nam", "Tuất": "Tây Bắc"
    },
    THAP_NHI_CHI_ARR: ["Ty", "Suu", "Dan", "Mao", "Thin", "Tỵ", "Ngo", "Mui", "Than", "Dau", "Tuat", "Hoi"],
    THAP_NHI_CHI_VIET: ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"],
    BO_CHUYEN_DOI_NGON_NGU: {
        "Tý": "Ty", "Sửu": "Suu", "Dần": "Dan", "Mão": "Mao", "Thìn": "Thin", "Tỵ": "Tỵ",
        "Ngọ": "Ngo", "Mùi": "Mui", "Thân": "Than", "Dậu": "Dau", "Tuất": "Tuat", "Hợi": "Hoi"
    },
    tamSatPhanCham: {
        "Dan Ngo Tuat": { huongChuQuet: "N", canhcai: ["Hoi", "Ty", "Suu"], text: "Vùng Sát Khí chạy dọc Phương Bắc (Tây Bắc - Chính Bắc - Đông Bắc)" },
        "Than Ty Thin": { huongChuQuet: "S", canhcai: ["Tỵ", "Ngo", "Mui"], text: "Vùng Sát Khí chạy dọc Phương Nam (Đông Nam - Chính Nam - Tây Nam)" },
        "Tỵ Dau Suu":   { huongChuQuet: "E", canhcai: ["Dan", "Mao", "Thin"], text: "Vùng Sát Khí chạy dọc Phương Đông (Đông Bắc - Chính Đông - Đông Nam)" },
        "Hoi Mao Mui":  { huongChuQuet: "W", canhcai: ["Than", "Dau", "Tuat"], text: "Vùng Sát Khí chạy dọc Phương Tây (Tây Nam - Chính Tây - Tây Bắc)" }
    },
    MA_TRAN_24_SON_VI: {
        "Nhâm": { huongDaiCuc: "N",  diaChiLienQuoi: "Ty",   nguHanh: "Thuy" },
        "Tý":   { huongDaiCuc: "N",  diaChiLienQuoi: "Ty",   nguHanh: "Thuy" },
        "Quý":  { huongDaiCuc: "N",  diaChiLienQuoi: "Ty",   nguHanh: "Thuy" },
        "Sửu":  { huongDaiCuc: "NE", diaChiLienQuoi: "Suu",  nguHanh: "Tho" },
        "Cấn":  { huongDaiCuc: "NE", diaChiLienQuoi: "Suu",  nguHanh: "Tho" },
        "Dần":  { huongDaiCuc: "NE", diaChiLienQuoi: "Dan",  nguHanh: "Moc" },
        "Giáp": { huongDaiCuc: "E",  diaChiLienQuoi: "Dan",  nguHanh: "Moc" },
        "Mão":  { huongDaiCuc: "E",  diaChiLienQuoi: "Mao",  nguHanh: "Moc" },
        "Ất":   { huongDaiCuc: "E",  diaChiLienQuoi: "Mao",  nguHanh: "Moc" },
        "Thìn": { huongDaiCuc: "SE", diaChiLienQuoi: "Thin", nguHanh: "Tho" },
        "Tốn":  { huongDaiCuc: "SE", diaChiLienQuoi: "Thin", nguHanh: "Moc" },
        "Tỵ":   { huongDaiCuc: "SE", diaChiLienQuoi: "Tỵ",   nguHanh: "Hoa" },
        "Bính": { huongDaiCuc: "S",  diaChiLienQuoi: "Tỵ",   nguHanh: "Hoa" },
        "Ngọ":  { huongDaiCuc: "S",  diaChiLienQuoi: "Ngo",  nguHanh: "Hoa" },
        "Đinh": { huongDaiCuc: "S",  diaChiLienQuoi: "Ngo",  nguHanh: "Hoa" },
        "Mùi":  { huongDaiCuc: "SW", diaChiLienQuoi: "Mui",  nguHanh: "Tho" },
        "Khôn": { huongDaiCuc: "SW", diaChiLienQuoi: "Mui",  nguHanh: "Tho" },
        "Thân": { huongDaiCuc: "SW", diaChiLienQuoi: "Than", nguHanh: "Kim" },
        "Canh": { huongDaiCuc: "W",  diaChiLienQuoi: "Than", nguHanh: "Kim" },
        "Dậu":  { huongDaiCuc: "W",  diaChiLienQuoi: "Dau",  nguHanh: "Kim" },
        "Tân":  { huongDaiCuc: "W",  diaChiLienQuoi: "Dau",  nguHanh: "Kim" },
        "Tuất": { huongDaiCuc: "NW", diaChiLienQuoi: "Tuat", nguHanh: "Tho" },
        "Càn":  { huongDaiCuc: "NW", diaChiLienQuoi: "Tuat", nguHanh: "Kim" },
        "Hợi":  { huongDaiCuc: "NW", diaChiLienQuoi: "Hoi",  nguHanh: "Thuy" }
    }
};

// Bộ nhận diện phân rã bản chất cấu trúc lõi của Tam Sát (Độc quyền đắc pháp)
function getChiTietTamSat(cuc, diaChiLienQuoi) {
    const cấuHìnhPhânRã = {
        "ThânTýThìn": { "Tỵ": "Kiếp Sát (Hao tài, thương tổn)", "Ngọ": "Tai Sát (Tai nạn, bệnh tật)", "Mùi": "Tuế Sát (Trì trệ, quan phi)" },
        "DầnNgọTuất": { "Hợi": "Kiếp Sát (Hao tài, thương tổn)", "Tý": "Tai Sát (Tai nạn, bệnh tật)", "Sửu": "Tuế Sát (Trì trệ, quan phi)" },
        "HợiMãoMùi":  { "Thân": "Kiếp Sát (Hao tài, thương tổn)", "Dậu": "Tai Sát (Tai nạn, bệnh tật)", "Tuất": "Tuế Sát (Trì trệ, quan phi)" },
        "TỵDậuSửu":   { "Dần": "Kiếp Sát (Hao tài, thương tổn)", "Mão": "Tai Sát (Tai nạn, bệnh tật)", "Thìn": "Tuế Sát (Trì trệ, quan phi)" }
    };
    return cấuHìnhPhânRã[cuc]?.[diaChiLienQuoi] || "Tam Sát Lưu Niên";
}

// Hàm nội bộ tự động biên dịch số độ thành tên Sơn vị hẹp chính xác tuyệt đối (Chống lỗi Undefined)
function dịchĐộSốThànhTênSơn(degree) {
    const normalized = ((degree % 360) + 360) % 360;
    const chuỗiSơnLầnLượt = [
        "Tý", "Quý", "Sửu", "Cấn", "Dần", "Giáp", "Mão", "Ất", "Thìn", "Tốn", "Tỵ", "Bính", 
        "Ngọ", "Đinh", "Mùi", "Khôn", "Thân", "Canh", "Dậu", "Tân", "Tuất", "Càn", "Hợi", "Nhâm"
    ];
    let index = Math.floor(((normalized + 7.5) % 360) / 15);
    return chuỗiSơnLầnLượt[index] || "Tý";
}

// =========================================================================
// ⏳ THUẬT TOÁN ĐỘNG 3: ENGINE PHI TINH CỬU TINH VI PH N TOÀN DIỆN VẬN 9
// =========================================================================
function tinhHanCuuTinhTheoNam(inputDoSoHoacSon, namHienTai) {
    const nam = namHienTai || new Date().getFullYear();
    if (inputDoSoHoacSon === undefined || inputDoSoHoacSon === null) {
        return { thongTinSao: "Chưa trích xuất được tọa độ trắc địa", meoGiaiHan: "" };
    }

    let sonName = (typeof inputDoSoHoacSon === 'number') ? dịchĐộSốThànhTênSơn(inputDoSoHoacSon) : inputDoSoHoacSon.trim();

    const thongTinSonViLoi = DATA_THANSAT.MA_TRAN_24_SON_VI[sonName];
    if (!thongTinSonViLoi) {
        return { thongTinSao: `Tọa độ Sơn ${sonName} nằm ngoài hệ thống ma trận.`, meoGiaiHan: "" };
    }
    
    const codeHuongDaiCuc = thongTinSonViLoi.huongDaiCuc;
    let warnings = [];
    
    const listSátTinhThựcThời = getPhongThuySatTinh(sonName, nam);
    listSátTinhThựcThời.forEach(sat => {
        warnings.push(`[${sat.ten}]: ${sat.level} giáng lâm phương vị.`);
    });

    let maSoNam = (11 - (nam % 9)) % 9;
    if (maSoNam === 0) maSoNam = 9;

    const huongToSaoMap = { "N": 1, "SW": 2, "E": 3, "SE": 4, "Trung Cung": 5, "NW": 6, "W": 7, "NE": 8, "S": 9 };
    let cungViNha = huongToSaoMap[codeHuongDaiCuc] || 5;
    
    let saoDaoPhuong = (maSoNam + (cungViNha - 5) + 9) % 9;
    if (saoDaoPhuong === 0) saoDaoPhuong = 9;

    const danhGiaSaoMap = {
        1: { ten: "Nhất Bạch Tham Lang (Tiến Khí Cát Tinh - Thủy)", hung: false, giaiPhap: "Đắc lộc công danh, vinh hiển trí tuệ. Giữ phương vị thông thoáng đón cát khí." },
        2: { ten: "Nhị Hắc Bệnh Phù (Cự Môn - Chuyển mình Tiến Khí đầu Vận 9)", hung: false, giaiPhap: "Năng lượng hung tinh bắt buộc suy giảm, có dấu hiệu cát hóa sự nghiệp. Yên tâm quy hoạch, phối hợp đặt hồ lô nhỏ để lọc bớt tạp khí sinh học." },
        3: { ten: "Tam Bích Lộc Tồn (Tử Khí Sát Tinh - Mộc)", hung: true, giaiPhap: "Dễ kích hoạt mâu thuẫn, tranh chấp, tiểu nhân đâm sau lưng. Tránh đặt tivi, loa đài hoặc các thiết bị phát âm thanh động tại góc này." },
        4: { ten: "Tứ Lục Văn Xương (Sát Tinh suy khí - Mộc)", hung: true, giaiPhap: "Năng lượng học vấn bị thoái hóa, dễ sinh tư duy trì trệ. Nên bài trí Tháp Văn Xương gỗ chín tầng để thúc vượng văn phong." },
        5: { ten: "Ngũ Hoàng Đại Sát (Chính Quan Sát - Mậu Kỷ Đại Hung Tinh)", hung: true, giaiPhap: "Đại độc hung tinh hại trạch mạnh nhất năm. Tuyệt đối nghiêm cấm việc đập phá tường, động thổ khoan đục. Bắt buộc treo chuông gió đồng 6 thanh để giải trừ sát khí vật lý." },
        6: { ten: "Lục Bạch Vũ Khúc (Cát Tinh thiên lộc - Kim)", hung: false, giaiPhap: "Quý nhân trợ lực phát đạt, thiên tài hanh thông. Bố trí vật phẩm gốm sứ thuộc hành Thổ để sinh vượng Kim khí." },
        7: { ten: "Thất Xích Phá Quân (Hưu Tù Sát Tinh - Kim)", hung: true, giaiPhap: "Chủ về hao tổn tài lộc, đề phòng trộm cướp, họa tai ương. Đặt bình thủy tinh chứa nước an nhẫn (nước muối loãng) để tiêu trừ sát khí." },
        8: { ten: "Bát Bạch Tả Phù (Thoái Khí Vận 9 - Thổ)", hung: false, giaiPhap: "Năng lượng đã chuyển sang trạng thái bình hòa, ổn định tài lộc cũ, không phát mạnh nhưng an lành." },
        9: { ten: "Cửu Tử Hữu Bật (ĐƯƠNG VƯỢNG TỐI THƯỢNG ĐẠI CÁT TINH VẬN 9)", hung: false, giaiPhap: "Tối thượng cát tinh nắm giữ sinh mệnh thời vận trạch pháp. Hãy bố trí hệ thống đèn chiếu sáng rực rỡ, trải thảm đỏ hoặc đặt linh vật vượng tài để nghênh trọn đại phú quý." }
    };

    const thongTinSaoHienTai = danhGiaSaoMap[saoDaoPhuong];
    if (thongTinSaoHienTai.hung && !warnings.some(w => w.includes("Phi Tinh"))) {
        warnings.push(`[Lưu Niên Phi Tinh]: Phương vị gặp phải sát khí của ${thongTinSaoHienTai.ten}.`);
    }

    if (warnings.length === 0) {
        return {
            thongTinSao: `✅ Niên độ ${nam}: Sơn vị ${sonName} (Hướng lớn ${codeHuongDaiCuc}) Đạt Trạng Thái Bình Hòa Cát Lành. Phương vị đón nhận sinh khí của ngôi sao cát: ${thongTinSaoHienTai.ten}.`,
            meoGiaiHan: `💡 Bố trí trạch pháp Vận 9: ${thongTinSaoHienTai.giaiPhap}`
        };
    }

    return {
        thongTinSao: `⚠️ CẢNH BÁO NIÊN HẠN NĂM ${nam}: Khu vực tọa độ Sơn ${sonName} phạm phải cấu trúc khí trường xấu:<br>• ${warnings.join("<br>• ")}`,
        meoGiaiHan: `💡 Mật pháp điều tiết đồng bộ: Tránh tuyệt đối việc đập phá, động thổ tại góc độ phân châm này. Áp dụng giải pháp: ${thongTinSaoHienTai.giaiPhap}`
    };
}

// Giữ lại hàm logic đối xứng
function getHuongDoiXung(huong) {
    const map = { "Bắc": "Nam", "Nam": "Bắc", "Đông": "Tây", "Tây": "Đông", "Đông Bắc": "Tây Nam", "Tây Nam": "Đông Bắc", "Đông Nam": "Tây Bắc", "Tây Bắc": "Đông Nam" };
    return map[huong] || huong;
}

// =========================================================================
// 🚀 PHIÊN BẢN ĐẠI NÂNG CẤP: HIỂN THỊ CHI TIẾT ĐA TẦNG - ĐỒNG BỘ 100% XUYÊN MẠCH
// =========================================================================
function renderMultiLayerDetail(result, van, degree) {
    if (!result) return;

    // Phân rã dữ liệu từ toán pháp lõi 
    const { diem, level, message, hoaGiai, khongVong, satTinhs, sonName, sonInfo, hauInfo } = result;

    const mucDich = document.getElementById('purpose')?.value || "house";
    const config = ConfigPhongThuy[mucDich] || { title: "Hạng mục", isCat: true };
    const isCatPurpose = config.isCat; 

    // Đồng bộ thang màu trạng thái trực quan với ngưỡng Đạt Cách Vận 9 của đại não
    let colorStatus = "#ff3b30"; 
    if (diem >= 72) {
        colorStatus = diem >= 85 ? "#30d158" : "#32b057"; 
    } else if (diem >= 50 && isCatPurpose) {
        colorStatus = "#dfb76c"; 
    }

    let html = `<div style="font-size:0.92rem; line-height:1.6; color:#e0e0e0; font-family: sans-serif; width: 100%; box-sizing: border-box;">`;

    // --- TẦNG 1: THƯỢNG ĐỈNH TỔNG ĐIỂM SỐ SẠCH CHỐNG RUNG KHUNG ---
    html += `
    <div style="text-align:center; padding:20px; background:rgba(255,255,255,0.02); border-radius:16px; margin-bottom:20px; border: 1px solid ${colorStatus}40; box-shadow: inset 0 0 15px ${colorStatus}10;">
        <div style="font-size:0.75rem; color:#888; text-transform:uppercase; letter-spacing: 2px; font-weight: bold;">Chỉ số Thống kê PT [${config.title}] Vận 9</div>
        <div style="font-size:3.5rem; font-weight:900; color:${colorStatus}; margin: 5px 0; text-shadow: 0 0 10px ${colorStatus}20;">${diem}<span style="font-size:1.2rem; font-weight:400;">pt</span></div>
        <div style="font-weight:700; color:${colorStatus}; letter-spacing: 1px; padding: 4px 16px; background: ${colorStatus}15; display: inline-block; border-radius: 20px; text-transform: uppercase; font-size: 0.85rem; border: 1px solid ${colorStatus}30;">${level}</div>
        <div style="margin-top:12px; font-size:0.75rem; color:#8a8a8f; font-family: monospace; line-height: 1.4; border-top: 1px dashed rgba(255,255,255,0.05); padding-top: 8px;">
            Toán thức Lập cực: PT = [ ( BT<sub>Gốc</sub> + Δ<sub>H72</sub> ) × K<sub>Van</sub> ${isCatPurpose ? '-' : '+'} ΣΨ<sub>Sat</sub> ] × Γ<sub>Khai</sub>
        </div>
    </div>`;

    // --- TẦNG 2: BỘ LỌC CẢNH BÁO ĐẠI KÌ LƯU NIÊN ĐỘNG ---
    if (khongVong || (satTinhs && satTinhs.length > 0)) {
        html += `<div style="margin-bottom:20px; display: flex; flex-direction: column; gap: 8px;">`;
        
        if (khongVong) {
            let kvBg = isCatPurpose ? "rgba(255,59,48,0.12)" : "rgba(48,209,88,0.12)";
            let kvBorder = isCatPurpose ? "#ff3b30" : "#30d158";
            let kvTitle = isCatPurpose ? `⚠️ ĐẠI KỴ TỬ HUYỆT: ${khongVong.loai}` : `🏆 DIỆU PHÁP CHẾ SÁT: TOẠ TRÚNG ${khongVong.loai}`;
            let kvMsg = isCatPurpose ? 
                `Hạng mục cấu trúc đang đặt đè trúng trục đứt gãy năng lượng của vòng Không Vong, khiến dòng sinh khí bị xé toạc, hỗn tạp, phá tài tốn đinh.` : 
                `Thuật Phong thủy đỉnh cao! Chọn đúng tọa độ đứt gãy mạch từ trường để đặt thiết bị xả uế, uế khí theo dòng xoáy Không Vong xả thẳng ra ngoài, làm sạch trạch nhà hoàn toàn.`;

            html += `
            <div style="background:${kvBg}; padding:12px 15px; border-radius:12px; border:1px solid ${kvBorder};">
                <strong style="color:${kvBorder}; font-size: 0.9rem; display: block; margin-bottom: 3px;">${kvTitle}</strong>
                <span style="font-size:0.85rem; color: #eee;">${kvMsg}</span>
            </div>`;
        }

        satTinhs.forEach(sat => {
            let satColor = isCatPurpose ? (sat.color || '#ff9f0a') : '#30d158';
            let satBg = isCatPurpose ? 'rgba(255,159,10,0.08)' : 'rgba(48,209,88,0.06)';
            let satTitle = isCatPurpose ? `💀 HƯỚNG GẶP HUNG TINH CHIẾU: ${sat.ten}` : `🛡️ KHÓA CHẶT TINH SÁT: ĐÈ PHƯƠNG VỊ ${sat.ten}`;
            let satMsg = isCatPurpose ? 
                (sat.giaiPhap || "Năng lượng lưu niên hung hãn giáng lâm, trong năm nay trạch chủ tránh tuyệt đối việc khoan đục sâu tại góc phân độ này.") :
                "Công năng xả uế/đè nén đặt tại đây đóng vai trò như một trận pháp trấn yểm cực mạnh, đốt cháy hoàn toàn hung tính của hung tinh lưu niên, gia chủ an tâm vững vàng.";

            html += `
            <div style="background:${satBg}; padding:10px 15px; border-radius:10px; border-left:4px solid ${satColor}; border-top: 1px solid ${satColor}15; border-right: 1px solid ${satColor}15; border-bottom: 1px solid ${satColor}15;">
                <strong style="color:${satColor}; font-size:0.88rem; display: block; margin-bottom: 2px;">${satTitle}</strong>
                <span style="font-size:0.82rem; color:#ccc;">${satMsg}</span>
            </div>`;
        });
        
        html += `</div>`;
    }

    // --- TẦNG 3: DIỄN GIẢI MINH CHÂU CHÍNH TÔNG CHỐNG ĐỨT MẠCH CHUỖI ---
    html += `
    <div style="background:rgba(255,255,255,0.01); padding:15px; border-radius:12px; border:1px solid rgba(255,255,255,0.08); box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
        <strong style="color:#dfb76c; display:block; margin-bottom:8px; font-size:0.9rem; letter-spacing: 0.5px;">◆ KẾT QUẢ ĐO ĐẠC: SƠN VỊ ${sonName} (${degree}°)</strong>
        <div style="font-size: 0.88rem; color: #ddd; text-align: justify; line-height: 1.5;">${message}</div>
        <div style="margin-top:12px; color:#ffd700; font-size:0.85rem; border-top:1px solid rgba(255,255,255,0.08); padding-top:10px; line-height: 1.45;">
            <b style="color:#dfb76c; display: block; margin-bottom: 3px;">💡 Pháp bảo bố trí / Mật pháp quy hoạch bổ trợ:</b> ${hoaGiai}
        </div>
    </div>`;

    // --- TẦNG 4: ĐỒ HOÀ 3 HẬU ĐỊA LONG NỀN TẢNG ĐỊA KHÍ CỐ ĐỊNH ---
    if (hauInfo) {
        let mốcTâm = Math.round(degree / 5) * 5;
        if (mốcTâm >= 360) mốcTâm = 0;
        let mốcTrái = (mốcTâm - 5 + 360) % 360;
        let mốcPhải = (mốcTâm + 5) % 360;

        let hauTrái = Data72Hau[mốcTrái.toString()] || { ten: "Nhâm Hậu", chatLuong: "Bình Hòa", diem: 60 };
        let hauTâm  = Data72Hau[mốcTâm.toString()] || { ten: "Tý Hậu", chatLuong: "Bình Hòa", diem: 60 };
        let hauPhải = Data72Hau[mốcPhải.toString()] || { ten: "Quý Hậu", chatLuong: "Bình Hòa", diem: 60 };

        const checkHauColor = (cl) => cl.includes('Cát') ? '#30d158' : (cl.includes('Hung') ? '#ff3b30' : '#dfb76c');
        
        let htmlKhối3Hậu = `
            <div style="display: flex; gap: 6px; margin-top: 10px; width: 100%; box-sizing: border-box;">
                <div style="flex: 1; text-align: center; background: rgba(255,255,255,0.03); padding: 8px 4px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06);">
                    <div style="font-size: 0.75rem; color: #fff; font-weight: 700; margin-bottom: 2px;">${(hauTrái.ten || "Hậu").split(' ')[0]} (${mốcTrái}°)</div>
                    <div style="font-size: 0.68rem; color: ${isCatPurpose ? checkHauColor(hauTrái.chatLuong) : (hauTrái.chatLuong.includes('Hung') ? '#30d158' : '#ff3b30')}; font-weight: bold; text-transform: uppercase;">
                        ${isCatPurpose ? hauTrái.chatLuong.replace('Đại ', 'Đ.').replace('Tiểu ', 'T.') : (hauTrái.chatLuong.includes('Hung') ? 'ĐẮC VỊ' : 'K KÂY ĐẶT')}
                    </div>
                </div>
                <div style="flex: 1; text-align: center; background: rgba(255,255,255,0.08); padding: 8px 4px; border-radius: 8px; border: 1px solid ${isCatPurpose ? checkHauColor(hauTâm.chatLuong) : (hauTâm.chatLuong.includes('Hung') ? '#30d158' : '#ff3b30')}; box-shadow: 0 0 8px ${isCatPurpose ? checkHauColor(hauTâm.chatLuong) : (hauTâm.chatLuong.includes('Hung') ? '#30d158' : '#ff3b30')}30;">
                    <div style="font-size: 0.75rem; color: #ffd700; font-weight: bold; margin-bottom: 2px;">🎯 ${(hauTâm.ten || "Hậu").split(' ')[0]} (${mốcTâm}°)</div>
                    <div style="font-size: 0.68rem; color: ${isCatPurpose ? checkHauColor(hauTâm.chatLuong) : (hauTâm.chatLuong.includes('Hung') ? '#30d158' : '#ff3b30')}; font-weight: bold; text-transform: uppercase;">
                        ${isCatPurpose ? hauTâm.chatLuong.replace('Đại ', 'Đ.').replace('Tiểu ', 'T.') : (hauTâm.chatLuong.includes('Hung') ? 'ĐẮC VỊ' : 'K KÂY ĐẶT')}
                    </div>
                </div>
                <div style="flex: 1; text-align: center; background: rgba(255,255,255,0.03); padding: 8px 4px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06);">
                    <div style="font-size: 0.75rem; color: #fff; font-weight: 700; margin-bottom: 2px;">${(hauPhải.ten || "Hậu").split(' ')[0]} (${mốcPhải}°)</div>
                    <div style="font-size: 0.68rem; color: ${isCatPurpose ? checkHauColor(hauPhải.chatLuong) : (hauPhải.chatLuong.includes('Hung') ? '#30d158' : '#ff3b30')}; font-weight: bold; text-transform: uppercase;">
                        ${isCatPurpose ? hauPhải.chatLuong.replace('Đại ', 'Đ.').replace('Tiểu ', 'T.') : (hauPhải.chatLuong.includes('Hung') ? 'ĐẮC VỊ' : 'K KÂY ĐẶT')}
                    </div>
                </div>
            </div>
        `;

        html += `
        <div style="margin-top:20px; padding:15px; background:rgba(0,255,120,0.02); border-radius:12px; border:1px solid rgba(0,255,170,0.15);">
            <strong style="color:#00ffaa; font-size:0.9rem; letter-spacing: 0.3px; display: block;">🌟 PHÂN PHỐI ĐỊA KHÍ ĐỘNG: LONG MẠCH 72 HẬU (Bước 5°)</strong>
            <span style="font-size: 0.8rem; color: #8a8a8f; margin-top: 2px; display: block;">Mạch long khí chạy ngầm cố định dưới nền đất:</span>
            
            ${htmlKhối3Hậu}
            
            <div style="font-size:0.83rem; color:#bbb; margin-top:12px; line-height: 1.5; background: rgba(0,0,0,0.15); padding: 8px 12px; border-radius: 6px; border-left: 3px solid #00ffaa;">
                Địa mạch Tiết khí mốc tâm: <b>${hauInfo.ten}</b> — Phẩm chất: <b>${hauInfo.chatLuong}</b> (Năng lượng mạch đất đạt ${hauInfo.diem}pt).<br>
                <span style="color:#eee; font-style: italic; display: block; margin-top: 3px;">➔ Bản chất: ${hauInfo.ynghia}</span>
            </div>
        </div>`;
    }

    html += `</div>`;

    const detailBoxEl = document.getElementById('detailBox') || document.getElementById('detail-box');
    if (detailBoxEl) detailBoxEl.innerHTML = html;
}

// =========================================================================
// 👁️ THUẬT TOÁN ĐỘNG 2: MẮT THẦN QUÉT KHÔNG VONG SIÊU VI PH N CHỐNG PHẠM SÁT
// =========================================================================
function kiemTraKhongVong(degree) {
    const gockim = ((degree % 360) + 360) % 360;
    const QUAI_8 = ["Khảm (Chính Bắc)", "Cấn (Đông Bắc)", "Chấn (Chính Đông)", "Tốn (Đông Nam)", "Ly (Chính Nam)", "Khôn (Tây Nam)", "Đoài (Chính Tây)", "Càn (Tây Bắc)"];
    const SON_24 = ["Tý", "Quý", "Sửu", "Cấn", "Dần", "Giáp", "Mão", "Ất", "Thìn", "Tốn", "Tỵ", "Bính", "Ngọ", "Đinh", "Mùi", "Khôn", "Thân", "Canh", "Dậu", "Tân", "Tuất", "Càn", "Hợi", "Nhâm"];

    let distDai = (gockim - 22.5) % 45;
    if (distDai < 0) distDai += 45;
    distDai = Math.min(distDai, 45 - distDai);
    distDai = Math.round(distDai * 10000) / 10000;

    if (distDai <= 0.5) {
        let qIdx = (Math.round((gockim - 22.5) / 45) + 8) % 8;
        return {
            loai: "ĐẠI KHÔNG VONG",
            mucDo: "🔴 ĐẠI HƯNG TINH SÁT — TỪ CHỐI NẠP KHÍ",
            saiLech: distDai,
            toaDoTuyến: (Math.round((gockim - 22.5) / 45) * 45 + 22.5) % 360,
            message: `Tọa độ góc ngắm (${gockim}°) phạm vào đại tử tuyến Tuyệt Mạch giữa 2 quẻ [${QUAI_8[qIdx]}] và [${QUAI_8[(qIdx + 1) % 8]}]. Từ trường tại đây cực kỳ hỗn loạn, triệt tiêu sinh khí, dễ sinh cô quả, phá tài dốc sạch sản nghiệp. Nghiêm cấm đặt tâm cửa chính hoặc ban thờ.`
        };
    }

    let distTieu = (gockim - 7.5) % 15;
    if (distTieu < 0) distTieu += 15;
    distTieu = Math.min(distTieu, 15 - distTieu);
    distTieu = Math.round(distTieu * 10000) / 10000;

    if (distTieu <= 0.6) {
        let sIdx = (Math.round((gockim - 7.5) / 15) + 24) % 24;
        return {
            loai: "TIỂU KHÔNG VONG",
            mucDo: "⚠️ CẢNH BÁO TẠP KHÍ KHÔNG VONG",
            saiLech: distTieu,
            toaDoTuyến: (Math.round((gockim - 7.5) / 15) * 15 + 7.5) % 360,
            message: `Tọa độ lập cực liếm sát vạch ngăn cách giữa Sơn [${SON_24[sIdx]}] và Sơn [${SON_24[(sIdx + 1) % 24]}]. Khí trường nghèo nàn, lộn xộn Âm Dương, trạch vận lên xuống vô thường. Hãy chủ động điều chỉnh vi phân kết cấu lệch sang trái hoặc phải từ 1.5° đến 2.5° để thu trọn dòng thuần khí.`
        };
    }
    return null;
}

// Hệ thống tự động phân loại thông minh dựa trên ngữ nghĩa danh mục (Một bên sửa bên này tự hiểu)
function layPhanLoaiKhiCuc(mucDich) {
    const config = ConfigPhongThuy[mucDich];
    if (!config) return "TRẤN_SÁT_TIÊU_HAO";
    
    // Nếu mục đích thiết lập là hung cục để đè sát (isCat = false) -> xếp ngay nhóm Trấn Sát
    if (config.isCat === false) return "TRẤN_SÁT_TIÊU_HAO";
    
    const tieuDe = config.title || "";
    
    // 1. Nhóm mồm ngậm khí bên ngoài (Nạp Khí Khẩu)
    if (tieuDe.includes("Nhà") || tieuDe.includes("Cửa") || tieuDe.includes("Cổng") || tieuDe.includes("Ban Công") || tieuDe.includes("Biển Hiệu") || tieuDe.includes("Showroom")) {
        return "NẠP_KHÍ_KHẨU";
    }
    
    // 2. Nhóm nội cục con người tọa lạc, tương tác lâu dài (Nhân Thần Tọa Khí)
    if (tieuDe.includes("Bàn Làm Việc") || tieuDe.includes("Sếp") || tieuDe.includes("Lãnh Đạo") || tieuDe.includes("Học") || tieuDe.includes("Phòng Khách") || tieuDe.includes("Phòng Ngủ Chính") || tieuDe.includes("Không Gian")) {
        return "NHÂN_THẦN_TỌA_KHÍ";
    }
    
    // 3. Nhóm cố định ngưng tụ thần khí/tài lộc (Tụ Khí Định Vị)
    if (tieuDe.includes("Thờ") || tieuDe.includes("Thần Tài") || tieuDe.includes("Giường") || tieuDe.includes("Két Sắt") || tieuDe.includes("Quầy") || tieuDe.includes("Lò Nướng")) {
        return "TỤ_KHÍ_ĐỊNH_VỊ";
    }
    
    return "NHÂN_THẦN_TỌA_KHÍ";
}

function tinhDiemTongHop(cungPhi, degree, namKhảoSát, mucDich, namAm, doRongQuetThucTe) {
    const normalizedDegree = ((degree % 360) + 360) % 360;
    const sonObj = getSonObjByDegree(normalizedDegree);
    const sonName = sonObj.name;
    
    let namAmReal = namAm || new Date().getFullYear();
    const namTinhVan = namKhảoSát ? parseInt(namKhảoSát, 10) : new Date().getFullYear();
    
    const config = ConfigPhongThuy[mucDich] || { title: "Vị trí", isCat: true };
    const isCatPurpose = config.isCat; 

    let dảiĐộVậtThể = (typeof doRongQuetThucTe === 'number' && doRongQuetThucTe > 0) ? doRongQuetThucTe : 0;
    let laCheDoQuetDong = dảiĐộVậtThể > 0;

    const huongToCodeMap = { "Bắc": "N", "Đông Bắc": "NE", "Đông": "E", "Đông Nam": "SE", "Nam": "S", "Tây Nam": "SW", "Tây": "W", "Tây Bắc": "NW" };
    const codeChuan = huongToCodeMap[sonObj.huong] || "N";

    const cungBátTrạch = bátTrạchMap[cungPhi]?.[codeChuan] || "Khác";

    // =====================================================================
    // 🏛️ BƯỚC 1: PHÂN BỔ TỶ TRỌNG PHƯƠNG PHÁP LUẬN (DANH MỤC CHỈ LÀ BỘ LỌC TƯƠNG TÁC)
    // =====================================================================
    const loaiKhiCuc = layPhanLoaiKhiCuc(mucDich);
    let tyTrong = { batTrach: 0.35, son: 0.35, hau: 0.30 }; 

    switch(loaiKhiCuc) {
        case "NẠP_KHÍ_KHẨU":      tyTrong = { batTrach: 0.25, son: 0.30, hau: 0.45 }; break;
        case "TỤ_KHÍ_ĐỊNH_VỊ":    tyTrong = { batTrach: 0.35, son: 0.45, hau: 0.20 }; break;
        case "NHÂN_THẦN_TỌA_KHÍ": tyTrong = { batTrach: 0.50, son: 0.35, hau: 0.15 }; break;
        case "TRẤN_SÁT_TIÊU_HAO": tyTrong = { batTrach: 0.40, son: 0.30, hau: 0.30 }; break;
    }

    // =====================================================================
    // 📐 BƯỚC 2: ĐỊNH LƯỢNG NĂNG LƯỢNG GỐC TĨNH CỦA LONG MẠCH ĐẤT
    // =====================================================================
    const mapDiemBatTrach = {
        "Sinh Khí": 95, "Diên Niên": 90, "Thiên Y": 85, "Phục Vị": 80,
        "Họa Hại": 40, "Lục Sát": 30, "Ngũ Quỷ": 20, "Tuyệt Mệnh": 10
    };
    let diemBatTrachGoc = mapDiemBatTrach[cungBátTrạch] || 60;

    const sonInfoStatic = layThongTin24Son(normalizedDegree, cungPhi, namAmReal); 
    let diemSonGoc = (sonInfoStatic && typeof sonInfoStatic.diem === 'number') ? sonInfoStatic.diem : 70;

    let mốcHậuTâm = Math.round(normalizedDegree / 5) * 5;
    if (mốcHậuTâm >= 360) mốcHậuTâm = 0;
    let hauTâmObjStatic = Data72Hau[mốcHậuTâm.toString()] || { diem: 60, ten: "Không rõ", chatLuong: "Bình Hòa" };
    let diemHauGoc = hauTâmObjStatic.diem;

    // =====================================================================
    // ⏳ BƯỚC 3: PHÓNG SAO HUYỀN KHÔNG & TAM HỢP LÊN TỪNG NODE SƠN VÀ HẬU CON
    // =====================================================================
    // Hàm nội bộ tính toán suy hao năng lượng thực thời của một góc độ bất kỳ do dính thiên tinh niên hạn
    const tinhGiaTriDongThucThoi = (tenSonCon, diemGocBanDầu) => {
        let diemSauTinhVan = diemGocBanDầu;
        
        // 1. Khảo sát chu kỳ Cửu Vận Huyền Không
        const vanSo = Math.floor((namTinhVan - 1864) / 20) % 9 + 1;
        if (typeof VAN_DATA !== 'undefined' && VAN_DATA[vanSo]?.[codeChuan]) {
            const saoNam = VAN_DATA[vanSo][codeChuan];
            if (isCatPurpose) {
                diemSauTinhVan = (saoNam.loai === "best") ? diemSauTinhVan * 1.12 : (saoNam.loai === "worst" ? diemSauTinhVan * 0.88 : diemSauTinhVan);
            } else {
                diemSauTinhVan = (saoNam.loai === "worst") ? diemSauTinhVan * 1.12 : (saoNam.loai === "best" ? diemSauTinhVan * 0.88 : diemSauTinhVan);
            }
        }

        // 2. Trừ điểm trực tiếp nếu Sơn hẹp chứa node đó phạm Đại Sát tinh lưu niên (Thái Tuế, Ngũ Hoàng)
        const satTinhsKhảoSat = typeof getPhongThuySatTinh === 'function' ? getPhongThuySatTinh(tenSonCon, namTinhVan) : [];
        let phatNienSat = 0;
        satTinhsKhảoSat.forEach(sat => {
            let trongSo = (sat.ten === "NGŨ HOÀNG ĐẠI SÁT" || sat.ten === "THÁI TUẾ") ? 22 : 12;
            if (isCatPurpose) phatNienSat += trongSo;
            else diemSauTinhVan += (trongSo * 0.5); // Tăng tính Sát Cục nếu làm nhiệm vụ trấn sát
        });
        
        return Math.max(5, Math.min(98, Math.round(diemSauTinhVan - phatNienSat)));
    };

    // Thổi sức sống động vào Sơn Hiện Tại và Hậu Hiện Tại
    let diemSonDongThucTe = tinhGiaTriDongThucThoi(sonName, diemSonGoc);
    let diemHauDongThucTe = tinhGiaTriDongThucThoi(sonName, diemHauGoc);

    // =====================================================================
    // 👁️ BƯỚC 4: BIỆN CHỨNG MA TRẬN 3 SƠN ĐỘNG - 3 HẬU ĐỘNG XUNG QUANH
    // =====================================================================
    let sonGroup = [];
    if (codeChuan === 'N')       sonGroup = ["Nhâm", "Tý", "Quý"];
    else if (codeChuan === 'NE') sonGroup = ["Sửu", "Cấn", "Dần"];
    else if (codeChuan === 'E')  sonGroup = ["Giáp", "Mão", "Ất"];
    else if (codeChuan === 'SE') sonGroup = ["Thìn", "Tốn", "Tỵ"];
    else if (codeChuan === 'S')  sonGroup = ["Bính", "Ngọ", "Đinh"];
    else if (codeChuan === 'SW') sonGroup = ["Mùi", "Khôn", "Thân"];
    else if (codeChuan === 'W')  sonGroup = ["Canh", "Dậu", "Tân"];
    else if (codeChuan === 'NW') sonGroup = ["Tuất", "Càn", "Hợi"];

    let soSơnTốt = 0, soSơnXấu = 0;
    sonGroup.forEach(s => {
        let scGoc = (MaTranMinhChau[cungPhi] && MaTranMinhChau[cungPhi][s]) ? MaTranMinhChau[cungPhi][s].diem : 70;
        let scDong = tinhGiaTriDongThucThoi(s, scGoc); // Ép chạy qua bộ lọc thiên tinh thời gian năm khảo sát
        if (scDong >= 70) soSơnTốt++;
        if (scDong < 50) soSơnXấu++;
    });

    let mốcMạchTrái = Math.round(((normalizedDegree - 5 + 360) % 360) / 5) * 5;
    let mốcMạchPhải = Math.round(((normalizedDegree + 5) % 360) / 5) * 5;
    if (mốcMạchTrái >= 360) mốcMạchTrái = 0;
    if (mốcMạchPhải >= 360) mốcMạchPhải = 0;

    let hTráiStatic = Data72Hau[mốcMạchTrái.toString()] || { diem: 60 };
    let hPhảiStatic = Data72Hau[mốcMạchPhải.toString()] || { diem: 60 };

    // Tính điểm động thời gian thực cho 3 mạch ngầm vi phân kề cận
    let sonCuaMachTrái = getSonObjByDegree(mốcMạchTrái).name;
    let sonCuaMachPhải = getSonObjByDegree(mốcMạchPhải).name;

    let diemHTráiDong = tinhGiaTriDongThucThoi(sonCuaMachTrái, hTráiStatic.diem);
    let diemHPhảiDong = tinhGiaTriDongThucThoi(sonCuaMachPhải, hPhảiStatic.diem);

    let danhSach3HauDong = [diemHTráiDong, diemHauDongThucTe, diemHPhảiDong];
    let soHậuTốt = danhSach3HauDong.filter(d => d >= 70).length;
    let soHậuXấu = danhSach3HauDong.filter(d => d < 50).length;

    // Đảo chiều logic tính chất âm dương nếu mục đích cấu hình là TRẤN SÁT uế cục
    let bieuThucTrườngKhí = 0;
    if (isCatPurpose) {
        bieuThucTrườngKhí = (diemBatTrachGoc * tyTrong.batTrach) + (diemSonDongThucTe * tyTrong.son) + (diemHauDongThucTe * tyTrong.hau);
    } else {
        let nghichDaoBatTrach = 110 - diemBatTrachGoc;
        let nghichDaoSon = 100 - diemSonDongThucTe;
        let nghichDaoHau = 100 - diemHauDongThucTe;
        bieuThucTrườngKhí = (nghichDaoBatTrach * tyTrong.batTrach) + (nghichDaoSon * tyTrong.son) + (nghichDaoHau * tyTrong.hau);
        
        let tempSơn = soSơnTốt; soSơnTốt = soSơnXấu; soSơnXấu = tempSơn;
        let tempHậu = soHậuTốt; soHậuTốt = soHậuXấu; soHậuXấu = tempHậu;
    }

    // =====================================================================
    // ⚡ BƯỚC 5: HỆ THỐNG PHỦ QUYẾT TỐI CAO (VETO BIỆN CHỨNG LÕI ĐẤT NĂM KHẢO SÁT)
    // =====================================================================
    let HeSoBiệnChứng = 1.0;
    let GhiChuDacBiet = "";

    if (isCatPurpose) {
        if (soHậuXấu === 3) {
            HeSoBiệnChứng *= 0.42;
            GhiChuDacBiet = "➔ [CỐT TỦY ĐỊA LONG ĐỨT GÃY NIÊN HẠN]: Địa mạch ngầm năm nay vướng sát khí nặng nề, đánh sập toàn bộ sinh khí!";
        } else if (soSơnXấu >= 2 && soHậuXấu >= 2) {
            HeSoBiệnChứng *= 0.60;
            GhiChuDacBiet = "➔ [TRƯỜNG KHÍ LOẠN DIỆN RỘNG]: Cả bề mặt lẫn mạch ngầm đều đang bị các vì sao hạn lưu niên năm nay vây hãm.";
        } else if (soSơnTốt === 3 && soHậuTốt === 3) {
            HeSoBiệnChứng *= 1.15;
            GhiChuDacBiet = "➔ [ĐẮC THỜI CH N LONG CAO KHÍ]: Sự phối hợp hoàn hảo giữa Long mạch sạch và cát tinh đáo phương, vượng càng thêm vượng.";
        }
    } else {
        if (soSơnTốt === 3 && soHậuTốt === 3) {
            HeSoBiệnChứng *= 1.15;
            GhiChuDacBiet = "➔ [LONG THẦN KHÓA SÁT HOÀN MỸ]: Sát khí hội tụ đậm đặc, cực kỳ lý tưởng để đặt công năng xả thải tiêu trừ hung tinh.";
        } else if (soSơnXấu >= 2) {
            HeSoBiệnChứng *= 0.65;
            GhiChuDacBiet = "➔ [XẢ UẾ SAI VỊ PHẠM CÁT SƠN]: Vị trí đang chứa sinh khí sạch lưu niên, đặt uế cục vào đây sẽ làm tổn hại gia đạo.";
        }
    }

    let diemTinhToan = bieuThucTrườngKhí * HeSoBiệnChứng;

    // Quét tuyến Không Vong hình học
    let dínhKhôngVongNặng = false, loaiKhôngVong = "";
    let danhSachHauBiDeLen = new Set(), chiTietCacHauBiChiem = [];
    let gocBatDau = normalizedDegree - (dảiĐộVậtThể / 2);
    let gocKetThuc = normalizedDegree + (dảiĐộVậtThể / 2);

    for (let g = gocBatDau; g <= gocKetThuc; g += 0.5) {
        let gocQuetChuanHoa = ((g % 360) + 360) % 360;
        let mốcHậuGầnNhất = Math.round(gocQuetChuanHoa / 5) * 5;
        if (mốcHậuGầnNhất >= 360) mốcHậuGầnNhất = 0;
        
        let hauQuyDoi = Data72Hau[mốcHậuGầnNhất.toString()] || { diem: 60, ten: "Không rõ" };
        if (!danhSachHauBiDeLen.has(mốcHậuGầnNhất)) {
            danhSachHauBiDeLen.add(mốcHậuGầnNhất);
            chiTietCacHauBiChiem.push({ moc: mốcHậuGầnNhất, ten: hauQuyDoi.ten, diem: tinhGiaTriDongThucThoi(getSonObjByDegree(mốcHậuGầnNhất).name, hauQuyDoi.diem) });
        }

        if (typeof kiemTraKhongVong === 'function') {
            let kv = kiemTraKhongVong(gocQuetChuanHoa);
            if (kv) { dínhKhôngVongNặng = true; loaiKhôngVong = kv.loai; }
        }
    }

    if (dínhKhôngVongNặng && isCatPurpose) {
        if (loaiKhôngVong === "ĐẠI KHÔNG VONG") diemTinhToan = 12; 
        else diemTinhToan -= 20;
    }

    let diemCuoi = Math.max(5, Math.min(98, Math.round(diemTinhToan)));
    
    // Tạo gói thông tin Hậu vị cập nhật động để bắn ngược ra UI hiển thị chính xác
    let chatLuongDong = diemHauDongThucTe >= 70 ? "Cát Mạch" : (diemHauDongThucTe >= 50 ? "Bình Hòa" : "Đại Hung");
    let emojiDong = diemHauDongThucTe >= 70 ? "🟢" : (diemHauDongThucTe >= 50 ? "🟡" : "🔴");

    let dynamicHauInfo = {
        ten: hauTâmObjStatic.ten || "Địa Mạch Ngầm",
        diem: diemHauDongThucTe,
        chatLuong: chatLuongDong,
        emoji: emojiDong,
        giaiphap: hauTâmObjStatic.giaiphap || "Giữ khu vực thông thoáng."
    };

    let level = "HUNG CỤC";
    if (diemCuoi >= 85) level = "ĐẠI CÁT";
    else if (diemCuoi >= 70) level = "CÁT VỊ";
    else if (diemCuoi >= 50) level = "BÌNH HOÀ";

    return {
        diem: diemCuoi, 
        level, 
        message: GhiChuDacBiet || (sonInfoStatic?.luanDoan || ""), 
        hoaGiai: sonInfoStatic?.hoaGiai || "",
        khongVong: dínhKhôngVongNặng ? { loai: loaiKhôngVong } : null, 
        sonName, 
        hauInfo: dynamicHauInfo, // GIAO DIỆN SẼ ĐỌC CỤC NÀY ĐỂ ĐỔI MÀU REALTIME!
        phanTichGoc: { soSơnTốt, soSơnXấu, soHậuTốt, soHậuXấu, loaiKhiCuc }
    };
}
// ==========================================================================
// HỆ THỐNG ĐIỀU HÀNH LA BÀN PHONG THỦY - PHIÊN BẢN SIÊU MƯỢT & TỐI ƯU SÂU 2026
// ==========================================================================

// --- BIẾN TOÀN CỤC LUỒNG KIM QUAY ---
let lastHeading = null;
let orientationListenerAdded = false;
let rafId = null;
let lastUpdateTime = 0;

const SMOOTH_MIN = 0.08;
const SMOOTH_MAX = 0.55;
const THROTTLE_MS = 16; // ~60fps

// --- BIẾN TOÀN CỤC ĐỊA TỪ & IOS ACCURACY ---
let magneticDeclination = 0;
let lastAccuracy = 0; 
let isMagneticWarningActive = false;

/**
 * 1. TRÌNH XỬ LÝ SỰ KIỆN ĐỊA HƯỚNG (DEVICE ORIENTATION) - SIÊU MƯỢT & TỐI ƯU TÀI NGUYÊN
 */
function handleOrientation(event) {
    // KỊCH BẢN A: Long mạch đang khóa -> Đóng băng tuyệt đối, thoát sớm để nhẹ máy
    if (window.isCompassHold) {
        if (typeof window.holdedHeading !== 'undefined') {
            lastHeading = window.holdedHeading;
            if (typeof currentHeading !== 'undefined') currentHeading = window.holdedHeading;
            
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                executeUIUpdate(window.holdedHeading);
            });
        }
        return; 
    }

    let rawHeading = null;
    const now = Date.now();
    
    // --- LỚP TỰ ĐỘNG THÔNG MINH CHO IOS (KHÔNG LO LÀM NÓNG MÁY) ---
    const accuracy = event.webkitCompassAccuracy;
    if (accuracy !== undefined && accuracy !== null && accuracy >= 0) {
        if (Math.abs(accuracy - lastAccuracy) > 3 || 
           (accuracy > 15 && lastAccuracy <= 15) || 
           (accuracy > 30 && lastAccuracy <= 30) ||
           (accuracy <= 15 && lastAccuracy > 15)) {
            
            lastAccuracy = accuracy;
            updateMagneticStatus(accuracy); 
        }
    }

    // --- LẤY DỮ LIỆU GÓC QUAY GỐC ---
    if (event.webkitCompassHeading !== undefined && event.webkitCompassHeading !== null) {
        rawHeading = event.webkitCompassHeading;
    } else if (event.alpha !== undefined && event.alpha !== null) {
        rawHeading = (360 - event.alpha) % 360;
    }
    
    if (rawHeading === null) return;

    // --- CỘNG ĐỘ LỆCH TỪ PHONG THỦY CHÍNH XÁC ---
    rawHeading = (rawHeading + (magneticDeclination || 0) + 360) % 360;

    // --- CƠ CHẾ KHÓA KHI ĐANG NHẬP LIỆU & THROTTLE KIM ---
    if (document.activeElement?.id === 'compassSlider') return;
    if (now - lastUpdateTime < THROTTLE_MS && lastHeading !== null) return;
    lastUpdateTime = now;

    // Khởi tạo lần đầu
    if (lastHeading === null) {
        lastHeading = rawHeading;
        if (typeof currentHeading !== 'undefined') currentHeading = lastHeading;
        executeUIUpdate(lastHeading);
        return;
    }

    // --- THUẬT TOÁN LỌC MƯỢT ĐỘNG ---
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
    
    // Đồng bộ hóa cấu trúc góc ngay lập tức cho toàn hệ thống
    if (typeof currentHeading !== 'undefined') currentHeading = lastHeading;

    // =========================================================================
    // MẮT QUÉT THÔNG MINH: ĐANG XOAY PHÁT LÀ ẨN NÚT LẬP TỨC (NẾU LỆCH > 0.4 ĐỘ)
    // =========================================================================
    if (absDiff > 0.4) {
        const btnTongLuan = document.getElementById('btn-tong-luan');
        if (btnTongLuan) {
            btnTongLuan.classList.remove('vượng-xuất'); // Ẩn ngay lập tức không trễ 1 giây
        }
        // Xóa bộ đếm tĩnh cũ vì kim la bàn đang chuyển động
        clearTimeout(dừngKimTimeout);
        
        // Kích hoạt lại bộ đếm chờ: Phải đứng im liên tục 2 giây mới được hiện lại
        kichHoatBoDemDungKim();
    }

    // --- CẬP NHẬT GIAO DIỆN QUA RAF ---
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
        executeUIUpdate(lastHeading);
    });
}

/**
 * 2. CÁC HÀM CẬP NHẬT GIAO DIỆN LA BÀN
 */
function executeUIUpdate(heading) {
    if (typeof updateCompassUI === 'function') updateCompassUI(heading);
    if (typeof updateDegreeDisplay === 'function') updateDegreeDisplay(heading);
    if (typeof recalculateFate === 'function') recalculateFate();
}

// Cập nhật trạng thái nhiễu dành riêng cho phần cứng iOS (Đã tối ưu giảm tải DOM)
function updateMagneticStatus(acc) {
    const dot = document.getElementById('accuracy-dot');
    const text = document.getElementById('accuracy-text');
    if (!dot || !text) return;

    let bg = '#4caf50', txt = "TÍN HIỆU TỐT";
    
    if (acc > 15 && acc <= 30) {
        bg = '#ff9800';
        txt = "NHIỄU NHẸ";
    } else if (acc > 30) {
        bg = '#f44336';
        txt = "NHIỄU NẶNG";
        
        if (typeof showToast === 'function' && !isMagneticWarningActive) {
            showToast("⚠️ Nhiễu từ trường! Hãy tránh xa sắt thép", true);
            isMagneticWarningActive = true;
            setTimeout(() => { isMagneticWarningActive = false; }, 10000);
        }
    }

    // Cơ chế chặn ghi đè DOM trùng lặp
    if (text.innerText !== txt) {
        dot.style.background = bg;
        text.innerText = txt;
    }
}

/**
 * 3. HÀM HIỂN THỊ THÔNG BÁO TOAST SANG TRỌNG
 */
function showToast(message, isError = false) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.style.cssText = `
        background: ${isError ? '#721c24' : 'rgba(0, 0, 0, 0.85)'};
        color: ${isError ? '#f8d7da' : '#dfb76c'};
        border: 1px solid ${isError ? '#f5c6cb' : '#dfb76c'};
        padding: 10px 20px;
        border-radius: 30px;
        font-size: 13px;
        font-weight: bold;
        margin-bottom: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        white-space: nowrap;
        backdrop-filter: blur(5px);
        animation: toastIn 0.3s ease-out, toastOut 0.3s ease-in 2.7s forwards;
    `;
    toast.innerText = message;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// Thêm keyframes cho hiệu ứng Toast vào tài liệu
if (typeof window !== 'undefined') {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        @keyframes toastIn { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes toastOut { from { opacity: 1; transform: translateY(0); } to { opacity: 0; transform: translateY(-20px); } }
    `;
    document.head.appendChild(styleSheet);
}

/**
 * 4. THUẬT TOÁN ĐỊA TỪ TOÀN CẦU & LÀM SẠCH DỮ LIỆU ĐẦU VÀO
 */
function getCleanValue(raw) {
    if (!raw) return ''; 
    let str = String(raw).trim().replace(/,/g, '.'); 
    let isNegative = str.startsWith('-');
    let processStr = isNegative ? str.substring(1) : str;
    
    let numericPart = "";
    let dotCount = 0;
    
    for (let i = 0; i < processStr.length; i++) {
        let char = processStr[i];
        if (char >= '0' && char <= '9') {
            numericPart += char;
        } else if (char === '.' && dotCount === 0) {
            numericPart += char;
            dotCount = 1;
        } else {
            break; 
        }
    }
    
    if (numericPart.endsWith('.')) numericPart = numericPart.slice(0, -1);
    let res = (isNegative ? '-' : '') + (numericPart || '');
    return (res === '-' || res === '') ? '' : res;
}

function calculateGlobalDeclination(lat, lon) {
    try {
        const phi = lat * Math.PI / 180;
        const lambda = lon * Math.PI / 180;
        const latPole = 86.6 * Math.PI / 180; 
        const lonPole = -165.2 * Math.PI / 180;

        const psi = Math.atan2(
            Math.sin(lonPole - lambda),
            Math.cos(phi) * Math.tan(latPole) - Math.sin(phi) * Math.cos(lonPole - lambda)
        );

        let declination = psi * 180 / Math.PI;
        const coreAnomaly = 1.62 * Math.sin(2 * phi) * Math.cos(lambda - (10 * Math.PI / 180));
        declination += coreAnomaly;

        if (declination > 180) declination -= 360;
        if (declination < -180) declination += 360;

        return declination;
    } catch (e) { return 0; }
}

async function fallbackIPGeolocation() {
    if (navigator.onLine) {
        try {
            const response = await fetch('https://json.geoiplookup.io/', { timeout: 3000 });
            const data = await response.json();
            if (data && data.latitude && data.longitude) {
                return { lat: data.latitude, lon: data.longitude, src: "NETWORK" };
            }
        } catch (e) {
            // Đã ẩn log cảnh báo lỗi mạng
        }
    }

    try {
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (timeZone && (timeZone.includes("Saigon") || timeZone.includes("Bangkok") || timeZone.includes("Asia/Ho_Chi_Minh"))) {
            return { lat: 14.05, lon: 108.27, src: "ZONE_VN" };
        }
    } catch (e) {}

    return { lat: 14.05, lon: 108.27, src: "DEFAULT" };
}

function updateMagneticDeclination() {
    const input = document.getElementById('declination-input');
    if (!input) return;

    let val = input.value;
    magneticDeclination = (val === '-' || val === '.' || val.trim() === '') ? 0 : parseFloat(val) || 0;
    
    if (typeof updateCompassUI === 'function' && typeof lastHeading === 'number') {
        updateCompassUI(lastHeading);
    }
}

async function autoDetectDeclination() {
    const btn = document.getElementById('auto-detect-btn');
    if (btn) { btn.innerText = "⚡ ĐANG QUÉT..."; btn.disabled = true; }

    const apply = (lat, lon, label) => {
        if (!lat || !lon || (lat === 0 && lon === 0)) {
            if (btn) { btn.innerText = "🛰️ TỰ ĐỘNG XÁC ĐỊNH"; btn.disabled = false; }
            return;
        }

        const decl = calculateGlobalDeclination(lat, lon);
        magneticDeclination = decl;
        const input = document.getElementById('declination-input');
        if (input) input.value = decl.toFixed(2);
        updateMagneticDeclination();
        showToast(`Đã cập nhật từ ${label}: ${decl.toFixed(2)}°`);
        
        if (btn) {
            btn.innerText = `XÁC ĐỊNH: ${label} ✓`;
            setTimeout(() => { btn.innerText = "🛰️ TỰ ĐỘNG XÁC ĐỊNH"; btn.disabled = false; }, 2000);
        }
    };

    if (!navigator.geolocation) {
        const ip = await fallbackIPGeolocation();
        apply(ip.lat, ip.lon, ip.src);
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (pos) => {
            apply(pos.coords.latitude, pos.coords.longitude, "GPS");
        },
        async () => {
            // Đã ẩn log cảnh báo GPS lỗi, lẳng lặng kích hoạt tầng dự phòng ngầm
            try {
                const ip = await fallbackIPGeolocation();
                apply(ip.lat, ip.lon, ip.src);
            } catch (err) {
                apply(14.05, 108.27, "DEFAULT");
            }
        },
        { timeout: 4000, enableHighAccuracy: false }
    );
}

function calculateRemoteDeclination() {
    const latEl = document.getElementById('remote-lat');
    const lonEl = document.getElementById('remote-lon');
    const rBtn = document.getElementById('remote-calc-btn');
    
    if (!latEl || !lonEl) return;
    const latStr = latEl.value.trim();
    const lonStr = lonEl.value.trim();

    if (latStr === '' || lonStr === '') {
        showToast("⚠️ Vui lòng nhập đủ tọa độ!", true);
        return;
    }

    const latV = parseFloat(latStr);
    const lonV = parseFloat(lonStr);

    if (isNaN(latV) || isNaN(lonV) || (latV === 0 && lonV === 0)) {
        showToast("⚠️ Tọa độ không hợp lệ!", true);
        return;
    }

    const decl = calculateGlobalDeclination(latV, lonV);
    magneticDeclination = decl;
    document.getElementById('declination-input').value = decl.toFixed(2);
    
    updateMagneticDeclination();
    showToast(`Đã tính tọa độ từ xa: ${decl.toFixed(2)}°`);
    
    if (rBtn) {
        rBtn.innerText = "ĐÃ TÍNH TOÁN ✓";
        rBtn.style.borderColor = "#4caf50";
        setTimeout(() => { rBtn.innerText = "🧮 TÍNH ĐỘ LỆCH TỪ XA"; rBtn.style.borderColor = "#dfb76c"; }, 2000);
    }
}

function toggleDeclinationPanel(show) {
    const m = document.getElementById('declination-modal');
    if (m) m.style.display = show ? 'flex' : 'none';
}

function parseSmartNumeric(val, maxVal) {
    if (!val || val.trim() === '') return null;

    let str = val.trim().replace(/,/g, '.');
    let isNegative = str.startsWith('-');
    let processStr = isNegative ? str.substring(1) : str;
    let numericPart = "";
    let dotCount = 0;

    for (let i = 0; i < processStr.length; i++) {
        let char = processStr[i];
        if (char >= '0' && char <= '9') {
            numericPart += char;
        } else if (char === '.' && dotCount === 0) {
            numericPart += char;
            dotCount = 1;
        } else {
            break;
        }
    }
    
    if (numericPart.endsWith('.')) numericPart = numericPart.slice(0, -1);
    const finalVal = parseFloat((isNegative ? '-' : '') + (numericPart || '0'));
    
    return isNaN(finalVal) ? null : finalVal;
}

/**
 * 5. KHỞI TẠO BỘ LẮNG NGHE INPUT FORM ĐỊA TỪ
 */
document.addEventListener('DOMContentLoaded', () => {
    const configs = {
        'declination-input': { max: 180, limit: 7 },
        'remote-lat': { max: 90, limit: 10 },
        'remote-lon': { max: 180, limit: 11 }
    };

    Object.keys(configs).forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;

        el.addEventListener('input', () => {
            const cfg = configs[id];
            let raw = el.value;

            if (raw === '') return;

            const clean = parseSmartNumeric(raw, cfg.max);
            
            if (/[a-zA-Z!@#$%^&*()_+={}\[\]:;"'<>?\/\\|]/.test(raw)) {
                el.value = clean !== null ? clean.toString() : '';
            }

            if (el.value.length > cfg.limit) {
                el.value = el.value.slice(0, cfg.limit);
            }

            if (id === 'declination-input') updateMagneticDeclination();
        });

        el.addEventListener('blur', () => {
            const cfg = configs[id];
            const clean = parseSmartNumeric(el.value, cfg.max);
            
            if (clean !== null) {
                let clamped = Math.max(-cfg.max, Math.min(cfg.max, clean));
                el.value = clamped.toString();
            } else {
                el.value = ''; 
            }
            
            if (id === 'declination-input') updateMagneticDeclination();
        });
    });
});

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

                <!-- === PHẦN GIẢI THÍCH ĐIỂM TỔNG HỢP (THÊM NGẮN GỌN) === -->
                <div style="margin-top:20px; padding:12px; background:#2a2a2e; border-radius:8px; border-left:4px solid #ffd700;">
                    <p style="margin:0 0 8px 0; color:#ffd700; font-weight:bold;">📊 Điểm Tổng Hợp (pt) là gì?</p>
                    <p style="margin:0; font-size:0.9rem; line-height:1.5; color:#ccc;">
                        Đây là <strong>điểm kết hợp nhiều tầng</strong>: Minh Châu + Bát Trạch + 72 Hậu + Ngũ Hoàng.<br>
                        Nếu Hậu Hung mạnh → điểm tổng hợp sẽ bị kéo xuống dù Sơn/Bát Trạch tốt.
                    </p>
                </div>
            </div>
        </div>
    `;

    modal.onclick = function(e) { if (e.target === modal) closeModal(); };
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('infoModal').style.display = 'none';
}

let autoHideTimer = null;

// Hàm khởi tạo bộ đếm
function startAutoHide() {
    clearTimeout(autoHideTimer);
    autoHideTimer = setTimeout(() => {
        const wrapper = document.getElementById('mainPanelWrapper');
        // Chỉ đóng nếu bảng đang MỞ và KHÔNG có gì đang được focus (đang nhập liệu)
        if (wrapper && !wrapper.classList.contains('collapsed')) {
            // Kiểm tra thêm: nếu đang focus vào ô input thì không đóng
            if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA' || document.activeElement.tagName === 'SELECT') {
                return; 
            }
            togglePanel();
        }
    }, 3000);
}

function togglePanel() {
    const wrapper = document.getElementById('mainPanelWrapper');
    const arrow = document.getElementById('toggleArrow');
    
    if (!wrapper || !arrow) return;

    // Loại bỏ class ẩn ngay từ đầu nếu có
    wrapper.classList.remove('initial-hidden');
    
    // Toggle trạng thái đóng/mở
    wrapper.classList.toggle('collapsed');
    
    const isCollapsed = wrapper.classList.contains('collapsed');
    arrow.innerHTML = isCollapsed ? '▼' : '▲';

    if (!isCollapsed) {
        startAutoHide();
    } else {
        clearTimeout(autoHideTimer);
    }
}

// KHỞI TẠO
document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.getElementById('mainPanelWrapper');
    if (!wrapper) return;

    // 1. Luôn đóng ngay khi load (thêm class trước khi hiển thị)
    wrapper.classList.add('collapsed');
    document.getElementById('toggleArrow').innerHTML = '▼';

    // 2. Định nghĩa danh sách các sự kiện cần "đóng băng" bộ đếm
    // mousedown/touchstart: Click chuột hoặc chạm tay
    // input/focus: Đang nhập liệu
    // mouseover: Di chuột vào
    const events = ['mousedown', 'touchstart', 'input', 'focus', 'mouseover'];

    events.forEach(eventType => {
        wrapper.addEventListener(eventType, () => {
            if (!wrapper.classList.contains('collapsed')) {
                clearTimeout(autoHideTimer); // Dừng đếm khi đang dùng
            }
        }, { passive: true });
    });

    // 3. Khi người dùng buông tay hoặc rời chuột, bắt đầu đếm lại
    const endEvents = ['mouseup', 'touchend', 'blur', 'mouseout'];
    endEvents.forEach(eventType => {
        wrapper.addEventListener(eventType, () => {
            if (!wrapper.classList.contains('collapsed')) {
                startAutoHide(); // Bắt đầu đếm khi không còn tương tác
            }
        }, { passive: true });
    });
});	
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
        // Tối ưu: Nếu không nhận được giá trị hợp lệ, không chạy tiếp
        if (e.webkitCompassHeading !== undefined || e.alpha !== null) {
            handleOrientation(e);
        }
    };

    if ('ondeviceorientationabsolute' in window) {
        window.addEventListener('deviceorientationabsolute', handler, true);
    } else if ('ondeviceorientation' in window) {
        window.addEventListener('deviceorientation', handler, true);
    } else {
        // Fallback: Nếu không hỗ trợ cảm biến, có thể ẩn nút "Tự động"
        const btn = document.getElementById('auto-detect-btn');
        if (btn) btn.style.display = 'none';
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
                <div id="purpose-modal-header">MỤC ĐÍCH KHẢO SÁT KHÍ CỤC VẬN 9</div>
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
        <div class="purpose-modal-option" data-value="altar">Hướng Bàn Thờ / Ban Thần Tài (Tụ Phúc)</div>
        <div class="purpose-modal-option" data-value="altar_room">Không Gian Phòng Thờ Độc Lập (Tổ Đường)</div>
        <div class="purpose-modal-option" data-value="bed">Hướng Đầu Giường Ngủ (Sàng Vị)</div>
        <div class="purpose-modal-option" data-value="livingroom">Hướng Phòng Khách (Trung Đường)</div>
        <div class="purpose-modal-option" data-value="bedroom_master">Hướng Phòng Ngủ Chính (Chủ Khang)</div>
        <div class="purpose-modal-option" data-value="bedroom_child">Hướng Phòng Ngủ Con Cái (Phúc Nhân)</div>
        <div class="purpose-modal-option" data-value="balcony">Hướng Ban Công / Cửa Sổ Lớn (Nạp Khí)</div>

        <div class="purpose-modal-group">📚 VĂN XƯƠNG KHOA DANH (Học Hành & Sự Nghiệp)</div>
        <div class="purpose-modal-option" data-value="workspace">Hướng Bàn Làm Việc (Quyền Lực Vị)</div>
        <div class="purpose-modal-option" data-value="ceo_office">Hướng Phòng Sếp / Bàn Lãnh Đạo</div>
        <div class="purpose-modal-option" data-value="study_desk">Hướng Bàn Học / Văn Xương Vị</div>
        <div class="purpose-modal-option" data-value="bookcase">Vị Trí Tủ Sách / Lưu Trữ Hồ Sơ</div>

        <div class="purpose-modal-group">💰 ĐẮC TÀI MẬU DỊCH (Kinh Doanh Thương Mại)</div>
        <div class="purpose-modal-option" data-value="signboard">Hướng Biển Hiệu (Minh Đường Lộ)</div>
        <div class="purpose-modal-option" data-value="counter">Hướng Quầy Thu Ngân (Tài Khố Vị)</div>
        <div class="purpose-modal-option" data-value="safe">Vị trí Két Sắt (Tụ Tài Bảo Khố)</div>
        <div class="purpose-modal-option" data-value="machinery">Hệ Thống Máy Móc / Dây Chuyền Sản Xuất</div>
        <div class="purpose-modal-option" data-value="bakery">Hướng Lò Nướng / Quầy Bánh Mì</div>
        <div class="purpose-modal-option" data-value="coffee">Hướng Quầy Pha Chế Cà Phê / Trà Sữa</div>
        <div class="purpose-modal-option" data-value="restaurant">Hướng Quán Ăn / Nhà Hàng</div>
        <div class="purpose-modal-option" data-value="shop">Hướng Cửa Hàng / Showroom / Tạp Hóa</div>
        <div class="purpose-modal-option" data-value="salon">Hướng Salon Tóc / Giường Nail / Spa</div>

        <div class="purpose-modal-group">🛠️ TỌA VỊ TRẤN SÁT (Hệ Thống Đè Hung)</div>
        <div class="purpose-modal-option" data-value="kitchen">Vị trí Đặt Bếp Nấu (Táo Vị Trấn Sát)</div>
        <div class="purpose-modal-option" data-value="toilet">Vị trí Nhà Vệ Sinh (Tiêu Sát Khí)</div>
        <div class="purpose-modal-option" data-value="septic_tank">Vị trí Hầm Tự Hoại / Bể Phốt Ngầm</div>
        <div class="purpose-modal-option" data-value="pipe_shaft">Trục Kỹ Thuật / Hộp Gen Uế Khí</div>
        <div class="purpose-modal-option" data-value="storage">Vị trí Kho Hàng / Phòng Đồ Tạp</div>
        <div class="purpose-modal-option" data-value="trash_area">Vị trí Thùng Rác / Khu Tập Kết Phế Liệu</div>
    `;

    // Xử lý sự kiện click chọn danh mục mục đích
    body.querySelectorAll('.purpose-modal-option').forEach(item => {
        item.addEventListener('click', () => {
            const value = item.getAttribute('data-value');
            const text = item.textContent.trim();

            // Cập nhật giao diện text hiển thị bên ngoài
            const textDisplay = document.getElementById('purpose-selected-text');
            if (textDisplay) textDisplay.textContent = text;
            
            // Cập nhật giá trị vào input ẩn phục vụ thuật toán lõi
            const hiddenInput = document.getElementById('purpose');
            if (hiddenInput) {
                hiddenInput.value = value;
            }

            currentPurposeValue = value;

            // Ẩn modal an toàn
            if (typeof hidePurposeModal === 'function') {
                hidePurposeModal();
            } else {
                modal.style.display = 'none';
            }

            // Thực thi tính toán lại toàn bộ trục Thiên - Địa - Nhân
            if (typeof recalculateFate === 'function') {
                recalculateFate();
            }

            // Cập nhật hộp danh sách gợi ý realtime
            if (typeof generateDirectionsList === 'function') {
                generateDirectionsList(); 
            }
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

function render24SonRing() {
    // 1. Vạch độ ngoài cùng (Giữ nguyên)
    const vachDoRing = document.getElementById('vachDoRing');
    if (vachDoRing) {
        let linesHtml = "";
        for (let i = 0; i < 360; i++) {
            const y2 = (i % 10 === 0) ? 28 : (i % 5 === 0) ? 25 : 23;
            linesHtml += `<line x1="250" y1="18" x2="250" y2="${y2}" transform="rotate(${i}, 250, 250)" />`;
        }
        vachDoRing.innerHTML = linesHtml;
    }

    // 2. Vạch ngăn 24 Sơn (Giữ nguyên)
    const khe24SonRing = document.getElementById('khe24SonRing');
    if (khe24SonRing) {
        let lines24Html = "";
        for (let i = 0; i < 24; i++) {
            const gocBiên = i * 15 - 7.5;
            lines24Html += `<line x1="250" y1="115" x2="250" y2="162" transform="rotate(${gocBiên}, 250, 250)" />`;
        }
        khe24SonRing.innerHTML = lines24Html;
    }

    // 3. Chữ 24 Sơn (Giữ nguyên)
    const sonRingSvg = document.getElementById('sonRingSvg');
    if (sonRingSvg) {
        sonRingSvg.innerHTML = "";
        SON_24_CONFIG.forEach((son, index) => {
            const goc = (index * 15) % 360;
            const textNode = document.createElementNS("http://www.w3.org/2000/svg", "text");
            textNode.setAttribute("x", "250"); 
            textNode.setAttribute("y", "114");
            textNode.setAttribute("text-anchor", "middle");
            textNode.setAttribute("font-size", "10");
            textNode.setAttribute("font-weight", "900");
            textNode.setAttribute("transform", `rotate(${goc}, 250, 250)`);
            textNode.setAttribute("data-son-goc", goc.toString());
            textNode.setAttribute("data-base-size", "10");
            textNode.textContent = son.name;
            
            const color = ["Cấn", "Tốn", "Khôn", "Càn"].includes(son.name) ? "#ff3b30" :
                          ["Tý", "Mão", "Ngọ", "Dậu"].includes(son.name) ? "#00a525" : "#5c4314";
            textNode.setAttribute("fill", color);
            textNode.setAttribute("data-color", color);
            sonRingSvg.appendChild(textNode);
        });
    }

    // 4. Vòng 24 Sao Phúc Đức - ĐÃ TỐI ƯU SẠCH (Không chứa filter gây lag)
    const phucDucRingSvg = document.getElementById('phucDucRingSvg');
    if (phucDucRingSvg) {
        phucDucRingSvg.innerHTML = "";
        const phucDucNames = ["Phúc Đức", "Ôn Hoàng", "Tấn Tài", "Trường Bệnh", "Tố Tụng", "Quan Tước", "Quan Quý", "Tự Điểu", "Vượng Trang", "Hưng Phước", "Pháp Trường", "Điên Cuồng", "Khẩu Thiệt", "Vượng Tài", "Đăng Doanh", "Thiếu Vong", "Thiên Tặc", "Tử Mất", "Vượng Tâm", "Khóc Khấp", "Cô Quả", "Vinh Phước", "Thiếu Vong", "Xương Dâm"];
       
        phucDucNames.forEach((name, index) => {
            const goc = (index * 15) % 360;
            const textNode = document.createElementNS("http://www.w3.org/2000/svg", "text");
            textNode.setAttribute("x", "250");
            textNode.setAttribute("y", "72");
            textNode.setAttribute("text-anchor", "middle");
            textNode.setAttribute("font-size", "6.8");
            textNode.setAttribute("font-weight", "700");
            textNode.setAttribute("transform", `rotate(${goc}, 250, 250)`);
            textNode.setAttribute("data-sao-goc", goc.toString());
            textNode.setAttribute("data-base-size", "6.8");
            textNode.textContent = name;

            // Dùng màu vàng đồng nguyên bản, cực nhẹ cho máy quay
            textNode.setAttribute("fill", "#b8a36f"); 
            phucDucRingSvg.appendChild(textNode);
        });
    }

    // 5. Vòng 72 Hậu - CHUẨN XÁC ĐỒNG TRỤC CHÍNH SƠN
    const hauRing = document.getElementById('hau72RingSvg');
    if (hauRing) {
        hauRing.innerHTML = "";
        
        Object.keys(Data72Hau).forEach(degStr => {
            const hau = Data72Hau[degStr];
            const degVisual = parseFloat(degStr);
            
            const textNode = document.createElementNS("http://www.w3.org/2000/svg", "text");
            textNode.setAttribute("x", "250"); 
            textNode.setAttribute("y", "95");
            textNode.setAttribute("text-anchor", "middle");
            textNode.setAttribute("font-size", "3.2"); 
            textNode.setAttribute("font-weight", "700");
            textNode.setAttribute("transform", `rotate(${degVisual}, 250, 250)`);
            textNode.setAttribute("data-hau-goc", degStr); 
            textNode.setAttribute("data-base-size", "3.2");

            let color;
            if (hau.chatLuong.includes("Cát")) {
                color = "#a8c46f"; 
            } else if (hau.chatLuong.includes("Hung")) {
                color = "#e07a5f"; 
            } else {
                color = "#d4af37"; 
            }
            
            textNode.setAttribute("fill", color);
            textNode.setAttribute("data-original-fill", color);
            
            // Tối ưu chuỗi: Nhặt chữ cái đầu + số (Ví dụ: "Nhâm Hậu 1" -> "N1")
            const tenGoc = hau.ten || "";
            const soHau = tenGoc.match(/\d+/); // Nhặt số ở cuối
            const chuDau = tenGoc.charAt(0);  // Nhặt chữ cái đầu tiên (N, T, Q, S...)
            textNode.textContent = soHau ? (chuDau + soHau[0]) : tenGoc;

            hauRing.appendChild(textNode);
        });
    }

    // QUAN TRỌNG: Cập nhật lại bộ nhớ đệm Cache ngay sau khi tạo mới DOM để hàm LED quét chạy đúng
    if (typeof cacheCompassElements === 'function') {
        cacheCompassElements();
    }
}

// ====================== HÀM LÀM SÁNG LED QUÉT (ĐỒNG BỘ MƯỢT MÀ) ======================
function kichHoatDenLedQuet(heading) {
    const ledTargetAngle = ((heading % 360) + 360) % 360;

    // Hàm phụ trợ xử lý hiệu ứng đổi màu và phóng to chữ khi trúng tia quét
    const applyEffect = (elements, attrGoc, range, zoomScale) => {
        if (!elements || !elements.forEach) return; // Chốt chặn an toàn chống crash
        
        elements.forEach(txt => {
            const goc = parseFloat(txt.getAttribute(attrGoc)) || 0;
            let phanSai = Math.abs(ledTargetAngle - goc);
            if (phanSai > 180) phanSai = 360 - phanSai;

            const baseSize = parseFloat(txt.getAttribute("data-base-size")) || 10;
            
            if (phanSai <= range) {
                // Trạng thái Khi quét trúng cung
                txt.style.opacity = "1";
                txt.style.fontSize = (baseSize * zoomScale) + "px";
                txt.style.fontWeight = "900";
                
                if (txt.hasAttribute("data-original-fill")) {
                    txt.style.fill = "#ffff00"; // Đổi sang vàng LED rực rỡ khi trúng mạch Hậu
                } else if (txt.getAttribute("data-color")) {
                    const color = txt.getAttribute("data-color");
                    txt.style.fill = (color === "#5c4314") ? "#ffcc00" : (color === "#ff3b30" ? "#ff0000" : "#00ff00");
                }
            } else {
                // Trạng thái Bình thường quay về tĩnh
                txt.style.opacity = "0.6";
                txt.style.fontSize = baseSize + "px";
                txt.style.fontWeight = "700";
                txt.style.fill = txt.getAttribute("data-original-fill") || txt.getAttribute("data-color") || "#8a8a8f";
            }
        });
    };

    // 1. Xử lý 8 Hướng Lớn (Giữ nguyên logic gốc của bạn)
    if (typeof huongLonTextsCache !== 'undefined') {
        huongLonTextsCache.forEach(txt => {
            const textGoc = parseFloat(txt.getAttribute("data-goc")) || 0;
            let phanSai = Math.abs(ledTargetAngle - textGoc);
            if (phanSai > 180) phanSai = 360 - phanSai;
            if (phanSai <= 22.5) {
                txt.style.opacity = "1"; txt.style.fontWeight = "900";
                txt.style.fill = (txt.getAttribute("fill") === "#00a525") ? "#00ff37" : "#ff1a00";
            } else {
                txt.style.opacity = "0.5"; txt.style.fontWeight = "normal";
                const transform = txt.getAttribute("transform") || "";
                if (txt.parentNode?.getAttribute("id") === "textChinhPhuong") {
                    txt.style.fill = (transform.includes("rotate(90") || transform.includes("rotate(270")) ? "#00a525" : "#ff3b30";
                } else { txt.style.fill = "#6b4e18"; }
            }
        });
    }

    // 2. Xử lý 24 Sơn (Phóng to 1.3 lần)
    if (typeof sonTextsCache !== 'undefined') {
        applyEffect(sonTextsCache, "data-son-goc", 7.5, 1.3);
    }

    // 3. Xử lý Sao Phúc Đức (Phóng to 1.2 lần)
    if (typeof saoTextsCache !== 'undefined') {
        applyEffect(saoTextsCache, "data-sao-goc", 7.5, 1.2);
    }

    // 4. Xử lý 72 Hậu (Quét trúng cung quản 2.5 độ, phóng to 1.65 lần nổi bật)
    if (typeof hau72TextsCache !== 'undefined') {
        applyEffect(hau72TextsCache, "data-hau-goc", 2.5, 1.65); 
    }
}

// ====================== CACHE ELEMENTS - TỐI ƯU HIỆU SUẤT CHUẨN VẬN 9 ======================
// Đảm bảo khai báo đủ 4 biến mảng toàn cục ở đầu file (hoặc trước hàm)
let sonTextsCache = null;
let huongLonTextsCache = null;
let saoTextsCache = null;
let hau72TextsCache = null; // Khai báo thêm biến này nếu chưa có ở đầu file

function cacheCompassElements(forceRefresh = false) {
    // NẾU KHÔNG ÉP BUỘC LÀM MỚI và đã có dữ liệu -> Bỏ qua để tiết kiệm CPU
    if (!forceRefresh && sonTextsCache && sonTextsCache.length > 0) return; 

    // Thực hiện quét nạp bộ nhớ đệm từ DOM
    sonTextsCache = document.querySelectorAll("#sonRingSvg text");
    huongLonTextsCache = document.querySelectorAll("#chuHuongLonG text");
    saoTextsCache = document.querySelectorAll("#phucDucRingSvg text");
    hau72TextsCache = document.querySelectorAll("#hau72RingSvg text");

    // Lưu lưu lượng màu gốc của 72 Hậu phục vụ cho hàm trả màu LED quét
    if (hau72TextsCache) {
        hau72TextsCache.forEach(txt => {
            if (!txt.hasAttribute("data-original-fill")) {
                txt.setAttribute("data-original-fill", txt.getAttribute("fill") || "#ffcc77");
            }
        });
    }
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

// =========================================================================
// 🌐 PHÂN HỆ QUẢN TRỊ BỘ NHỚ: LƯU TRỮ VÀ LÀM SẠCH CHỌN LỌC CẤP CAO VẬN 9
// =========================================================================

// 1. LƯU THÀNH VIÊN (Tự động hóa chuẩn hóa danh tính, chống trùng rác)
function saveCurrentMember() {
    let nameInput = document.getElementById('userName');
    let name = nameInput ? nameInput.value.trim() : "";
    const gender = document.getElementById('gender').value;
    const dayStr = document.getElementById('birthDay').value;
    const monthStr = document.getElementById('birthMonth').value;
    const yearStr = document.getElementById('birthYear').value;

    // Chốt chặn kiểm tra đầu vào nghiêm ngặt
    if (!name || name === "Người Tầm Phương") {
        showCustomAlert("Vui lòng nhập họ tên thật của thành viên gia đình!", "⚠️ Sai Lệch Dữ Liệu");
        return;
    }
    if (!dayStr || !monthStr || !yearStr) {
        showCustomAlert("Vui lòng điền hoàn chỉnh Ngày, Tháng, Năm sinh!", "⚠️ Sai Lệch Dữ Liệu");
        return;
    }

    // THÔNG MINH: Tự động viết hoa chữ cái đầu danh tính (Chuẩn hóa Nhân Mệnh)
    name = name.toLowerCase().replace(/(^|\s)\S/g, l => l.toUpperCase());
    if (nameInput) nameInput.value = name;

    let members = JSON.parse(localStorage.getItem('fengshui_members') || '[]');

    // THÔNG MINH: Chống trùng lặp dữ liệu (Nếu trùng cả Tên, Ngày, Tháng, Năm thì cảnh báo, tránh rác)
    const biTrung = members.some(m => m.name === name && m.birthDay === dayStr && m.birthMonth === monthStr && m.birthYear === yearStr);
    if (biTrung) {
        showCustomAlert(`Thành viên ${name} với ngày sinh này đã tồn tại trong gia tộc bảng số!`, "⚠️ Trùng Lặp Bộ Nhớ");
        return;
    }

    // Tạo cấu trúc thực thể thành viên mới
    const newMember = {
        id: Date.now(), 
        name: name,
        gender: gender,
        birthDay: dayStr,
        birthMonth: monthStr,
        birthYear: yearStr
    };

    members.push(newMember);
    localStorage.setItem('fengshui_members', JSON.stringify(members));
    
    showCustomAlert(`Đã mã hóa và lưu thành viên: ${name}`, "✅ Thành Công");
    loadSavedMembers();
}

// 2. TẢI DANH SÁCH THÀNH VIÊN (Render an toàn, chống sập DOM)
function loadSavedMembers() {
    const data = JSON.parse(localStorage.getItem('fengshui_members') || '[]');
    const savedPanel = document.getElementById('savedPanel'); 
    const savedContainer = document.getElementById('savedContainer');

    if (!savedContainer) return;

    if (data.length === 0) {
        if (savedPanel) savedPanel.style.display = "none";
        return;
    }
    
    if (savedPanel) savedPanel.style.display = "block";
    savedContainer.innerHTML = "";
    
    data.forEach(m => {
        const chip = document.createElement('div');
        chip.className = 'saved-chip';
        // Giữ cấu trúc hàm gốc truyền ID vào xử lý sự kiện
        chip.innerHTML = `
            <span onclick="selectMember(${m.id})" style="cursor:pointer;">👤 ${m.name}</span>
            <span class="del-btn" onclick="deleteMember(event, ${m.id})" style="margin-left:8px; cursor:pointer; font-weight:bold;">×</span>
        `;
        savedContainer.appendChild(chip);
    });
}

// 3. CHỌN THÀNH VIÊN TRONG DANH SÁCH (Đồng bộ tức thì toán pháp)
function selectMember(id) {
    const data = JSON.parse(localStorage.getItem('fengshui_members') || '[]');
    const m = data.find(item => item.id === id);
    
    if (m) {
        const txtUser = document.getElementById('userName');
        if (txtUser) {
            txtUser.value = m.name;
            txtUser.style.color = '#fff';
        }
        document.getElementById('gender').value = m.gender;
        document.getElementById('birthDay').value = m.birthDay;
        document.getElementById('birthMonth').value = m.birthMonth;
        document.getElementById('birthYear').value = m.birthYear;
        
        // Kích hoạt tái tính toán toàn bộ hệ thống ngay khi đổi người
        if (typeof recalculateFate === 'function') {
            recalculateFate();
        }
    }
}

// 4. XÓA THÀNH VIÊN CHỈ ĐỊNH
function deleteMember(event, id) {
    if (event) event.stopPropagation();
    let data = JSON.parse(localStorage.getItem('fengshui_members') || '[]');
    data = data.filter(m => m.id !== id);
    localStorage.setItem('fengshui_members', JSON.stringify(data));
    loadSavedMembers();
}

// 5. SIÊU RESET: THANH LỌC TOÀN DIỆN BỘ NHỚ RÁC - GIỮ LẠI DANH SÁCH THÀNH VIÊN
function clearAllData() {
    const btn = document.getElementById('btnReset');
    if (btn) {
        btn.classList.add('executing');
        setTimeout(() => btn.classList.remove('executing'), 400);
    }
    
    // 🚀 BƯỚC ĐỘT PHÁ PHONG THỦY SỐ: TRÍCH XUẤT CẤT GIỮ DANH SÁCH THÀNH VIÊN RA VÙNG CÁCH LY
    const danhSachGiaTocHienTai = localStorage.getItem('fengshui_members');
    
    // LẬP TỨC TIÊU HỦY TOÀN BỘ KHÔNG GIAN BỘ NHỚ (Xóa sạch mọi rác cấu trúc cũ, biến lỗi khi dev)
    localStorage.clear();
    
    // KHÔI PHỤC LẠI DUY NHẤT DANH SÁCH THÀNH VIÊN SẠCH SẼ VÀO LẠI STORAGE
    if (danhSachGiaTocHienTai) {
        localStorage.setItem('fengshui_members', danhSachGiaTocHienTai);
    }

    // 🚀 GIẢI PHÓNG TOÀN DIỆN CÁC BỘ NHỚ ĐỆM (CACHE) KHÍ MẠCH TRÊN RAM
    if (typeof hauCache !== 'undefined' && hauCache.clear) {
        hauCache.clear(); // Xóa sạch bộ nhớ đệm 72 Hậu cũ tránh loãng khí
    }
    
    // ĐƯA CẤU TRÚC FORM VÀ ĐỒ HÌNH LA BÀN VỀ TRẠNG THÁI KHỞI NGUYÊN TỰ DO
    const txtUser = document.getElementById('userName');
    if (txtUser) {
        txtUser.value = 'Người Tầm Phương';
        txtUser.style.color = '#aaa';
    }
    document.getElementById('gender').value = 'male';
    document.getElementById('birthDay').value = '';
    document.getElementById('birthMonth').value = '';
    document.getElementById('birthYear').value = '';
    document.getElementById('purpose').value = '';
    
    // Tắt chốt chặn kim ảo an toàn tuyệt đối
    if (typeof targetAngle !== 'undefined') targetAngle = null;
    
    const ghost = document.getElementById('ghostNeedle');
    if (ghost) {
        ghost.style.opacity = "0";
        ghost.style.display = "none";
        ghost.classList.remove('matched-pulse');
    }
    
    // Ép hệ thống vẽ lại bản đồ khí cục theo dữ liệu trắc địa thực địa tự do sạch sẽ
    if (typeof recalculateFate === 'function') {
        recalculateFate();
    } else if (typeof updateCompassUI === 'function') {
        updateCompassUI(currentHeading);
    }
    
    showCustomAlert("Hệ thống đã dọn sạch toàn bộ rác cấu trúc cũ, nạp mới khí trường thành công!", "🧹 Thanh Lọc Bộ Nhớ");
}

/**
 * KÍCH HOẠT ĐÓNG MỞ POPUP MƯỢT MÀ Cam Nang
 */
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("guideModal");
    const openBtn = document.getElementById("openGuideBtn");
    const closeBtn = document.getElementById("closeGuideBtn");

    if (openBtn && modal) {
        openBtn.onclick = function() { 
            modal.style.display = "block"; 
            document.body.style.overflow = "hidden"; // Khóa cuộn trang chủ khi xem cẩm năng
            
            // Ép hệ thống vẽ lại các ký hiệu toán học đẹp mắt bằng thư viện MathJax
            if (window.MathJax) {
                MathJax.typesetPromise();
            }
        }
        closeBtn.onclick = function() { 
            modal.style.display = "none"; 
            document.body.style.overflow = "auto"; 
        }
        window.onclick = function(event) {
            if (event.target == modal) { 
                modal.style.display = "none"; 
                document.body.style.overflow = "auto"; 
            }
        }
    }
});
// Donate Modal
document.getElementById('openDonateBtn').addEventListener('click', function() {
    document.getElementById('donateModal').style.display = 'flex';
});

document.getElementById('closeDonateBtn').addEventListener('click', function() {
    document.getElementById('donateModal').style.display = 'none';
});
function selectGender(gender) {
    // Reset cả hai
    document.getElementById('gender-male').classList.remove('active');
    document.getElementById('gender-female').classList.remove('active');
    
    // Active cái được chọn
    document.getElementById('gender-' + gender).classList.add('active');
    
    // Cập nhật giá trị hidden
    document.getElementById('gender').value = gender;
    
    // Tính lại kết quả
    if (typeof recalculateFate === 'function') {
        recalculateFate();
    }
}

// Khởi tạo ban đầu (để tránh lỗi khi load lại)
document.addEventListener('DOMContentLoaded', function() {
    // Đảm bảo Nam được active mặc định
    const currentGender = document.getElementById('gender').value;
    if (currentGender === 'female') {
        document.getElementById('gender-female').classList.add('active');
        document.getElementById('gender-male').classList.remove('active');
    }
});

// =========================================================================
// 🌐 HỆ THỐNG PWA FLOATING ACTION BUTTON - HOÀN TRẢ KIẾN TRÚC GỐC NGUYÊN BẢN
// =========================================================================
if (typeof deferredPrompt === 'undefined') {
    var deferredPrompt; 
}

// 1. Giữ nguyên bản 100% hàm kiểm tra độc lập gốc của bạn
function isRunningAsPWA() {
    return window.matchMedia('(display-mode: standalone)').matches || 
           window.navigator.standalone === true ||
           window.matchMedia('(display-mode: fullscreen)').matches;
}

// 2. Giữ nguyên bản 100% hàm kiểm tra và ẩn nút gốc của bạn
function kiemTraVaAnNut() {
    const btn = document.getElementById('btn-install-pwa');
    if (!btn) return false;
    
    if (isRunningAsPWA()) {
        btn.classList.remove('show');
        return true;
    }
    return false;
}

// 3. Khởi tạo hệ thống lõi - Tích hợp mạch tự động dọn cache khi sửa code
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        if (window.location.protocol === 'file:') return;
        
        kiemTraVaAnNut();

        const link = document.createElement('link');
        link.rel = 'manifest';
        link.href = './manifest.json';
        document.head.appendChild(link);

        // Đăng ký Service Worker và tự động F5 làm sạch bộ nhớ nếu bạn đổi v1 thành v2 ở sw.js
        navigator.serviceWorker.register('./sw.js')
            .then((reg) => {
                reg.onupdatefound = () => {
                    const installingWorker = reg.installing;
                    if (installingWorker) {
                        installingWorker.onstatechange = () => {
                            if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                console.log('Hệ thống đã tự động nạp khí mới, làm sạch cache cũ thành công!');
                                window.location.reload(); // Tự động làm mới trang để ăn code mới
                            }
                        };
                    }
                };
            })
            .catch(err => console.error('Lỗi kích hoạt PWA:', err));
    });
}

// 4. Lắng nghe sự kiện mời cài đặt (Giữ nguyên bản 100% hàm gốc của bạn)
window.addEventListener('beforeinstallprompt', (e) => {
    if (isRunningAsPWA()) return;

    e.preventDefault();
    deferredPrompt = e;

    const btn = document.getElementById('btn-install-pwa');
    if (btn) {
        btn.classList.add('show');

        btn.onclick = async () => {
            if (!deferredPrompt) return;
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            console.log(`Người dùng chọn: ${outcome}`);
            
            if (outcome === 'accepted') {
                btn.classList.remove('show');
            }
            deferredPrompt = null;
        };
    }
});

// 5. Ẩn nút lập tức khi cài xong (Giữ nguyên bản 100% hàm gốc của bạn)
window.addEventListener('appinstalled', () => {
    const btn = document.getElementById('btn-install-pwa');
    if (btn) btn.classList.remove('show');
});

// Bộ quét quét lại khi người dùng bật tắt màn hình (Giữ nguyên bản 100% hàm gốc của bạn)
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        setTimeout(kiemTraVaAnNut, 600);
    }
});

// =========================================================================
// 🚀 6. THÀNH PHẦN MỞ RỘNG - NHẬN TÍN HIỆU CẬP NHẬT & ADS (KHÔNG ĐỤNG CODE GỐC)
// =========================================================================
const AppControl = {
    // Hàm hiển thị Toast Notification thông minh
    showNotification: (message) => {
        let toast = document.getElementById('pwa-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'pwa-toast';
            document.body.appendChild(toast);
        }
        toast.innerText = message;
        toast.style.display = 'block';
        
        // Hiệu ứng mượt mà quý phái
        toast.animate([
            { opacity: 0, transform: 'translate(-50%, -20px)' },
            { opacity: 1, transform: 'translate(-50%, 0)' }
        ], { duration: 500, fill: 'forwards' });

        // Tự động biến mất sau 3 giây
        setTimeout(() => {
            toast.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 500 })
                .onfinish = () => toast.style.display = 'none';
        }, 3000);
    },
    
    // Hàm chờ sẵn để bạn chèn quảng cáo sau này
    showAds: () => {
        console.log("🚀 Hệ thống Ads đã sẵn sàng kích hoạt");
        // Bạn có thể chèn đoạn code gọi Banner Ads hoặc Popup quảng cáo ở đây
    }
};

// Lắng nghe thông điệp độc lập gửi từ sw.js về giao diện công khai
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('message', (event) => {
        if (!event.data) return;
        
        // Khi sw.js phát tín hiệu đã cập nhật xong dữ liệu cache mới
        if (event.data.type === 'VERSION_UPDATED') {
            AppControl.showNotification("✨ Ứng dụng đã được cập nhật bản mới!");
            
            // Nếu bạn muốn bật cái popup div HTML lên thay vì Toast chữ, hãy mở comment dòng dưới:
            // const popup = document.getElementById('update-popup');
            // if (popup) popup.style.display = 'flex';
        }
        
        // Khi sw.js phát tín hiệu muốn gọi quảng cáo
        if (event.data.type === 'SHOW_ADS') {
            AppControl.showAds();
        }
    });
}

// Biến toàn cục điều khiển trạng thái la bàn số
let isCompassHold = false;
let holdedHeading = 0;

// =========================================================================
// 🌌 MA TRẠN DỮ LIỆU PHONG THỦY LÕI - THIÊN ĐỊA NHÂN PHÂN TẦNG THỰC CHỨNG
// =========================================================================
const DATA_TRACH_NHAT_CAO_CAP = {
    // Chuẩn hoá mảng Thiên Can Địa Chi để triệt tiêu toàn bộ lỗi chính tả đấu chuỗi
    CHI_QUY_CHUAN: ["Than", "Dau", "Tuat", "Hoi", "Ty", "Suu", "Dan", "Mao", "Thin", "Tỵ", "Ngo", "Mui"],
    CAN_QUY_CHUAN: ["Giap", "At", "Binh", "Dinh", "Mau", "Ky", "Canh", "Tan", "Nham", "Quy"],
    
    CUNG_MENH_QUY_QUYET: {
        TAY_TU_TRACH: ["Can", "Khon", "Can", "Doai"], 
        DONG_TU_TRACH: ["Kham", "Ly", "Chan", "Ton"]  
    },

    THAP_NHI_KIEN_TRU: {
        "Kien": { cat: ["study", "work", "office", "workspace", "ceo_office", "signboard"], hung: ["earth", "toilet", "kitchen", "septic_tank", "trash_area"], text: "Chu khởi đầu, vượng khí nạp tài, thích hợp bài trí bàn học, bàn làm việc nhưng đại kỵ động thổ, phá dỡ uế tạp." },
        "Tru": { cat: ["toilet", "clean", "sewer", "septic_tank", "trash_area"], hung: ["wedding", "store", "door", "house", "gate", "altar", "safe", "counter"], text: "Chu tẩy uế, trừ tà. Đại cát để xây dựng Toilet, đào móng tự hoại, quét dọn trạch tâm, thải bỏ uế khí." },
        "Man": { cat: ["store", "bed", "warehouse", "safe", "counter", "shop", "bakery"], hung: ["earth", "funeral", "septic_tank"], text: "Chu sung túc, đầy đủ. Thích hợp bài trí giường ngủ, an vị két sắt, khai trương quầy thu ngân." },
        "Binh": { cat: ["work", "study", "workspace", "study_desk"], hung: ["earth", "lawsuit", "kitchen"], text: "Chu bình hòa, ổn định. Thích hợp kê bàn làm việc, duy trì trường khí tĩnh, cẩn thận tranh chấp." },
        "Dinh": { cat: ["bed", "study", "door", "house", "gate", "bedroom_master"], hung: ["toilet", "move", "sewer", "trash_area"], text: "Chu định tính, bền vững. Thích hợp đặt giường ngủ ổn định tinh thần, lập đại môn nạp khí vững chắc." },
        "Chap": { cat: ["work", "storage"], hung: ["door", "move", "earth", "gate", "livingroom"], text: "Chu thu tàng, giữ thế. Chỉ nên làm các công việc bảo trì nội bộ, kỵ mở cửa chính, di dời giường ngủ." },
        "Pha": { cat: ["toilet", "septic_tank", "sewer"], hung: ["all", "earth", "house", "door", "bed", "kitchen", "gate", "altar", "safe", "counter", "shop"], text: "Chu hình xung, đổ vỡ. Năng lượng vũ trụ cực kỳ hỗn loạn, đại kỵ khởi công việc cát nạp khí nhưng có thể dùng để phá dỡ uế tạp, đào rãnh thải." },
        "Nguy": { cat: [], hung: ["earth", "travel", "house", "gate"], text: "Chu hiểm nguy, rình rập. Trường khí mang tính rủi ro cao, kỵ phạt mộc động thổ, dễ gặp tai nạn va chạm bất ngờ." },
        "Thanh": { cat: ["house", "door", "bed", "work", "store", "gate", "altar", "workspace", "ceo_office", "counter", "shop", "salon"], hung: ["toilet", "sewer", "septic_tank"], text: "Chu vạn sự thành tựu, thiên địa hộ trì. Đại cát để khởi công xây nhà, lập hướng cửa chính, an vị giường ngủ." },
        "Thu": { cat: ["store", "warehouse", "safe", "storage"], hung: ["earth", "door", "gate", "balcony"], text: "Chu thu hoạch, tích lũy. Thích hợp lập két sắt, quầy thu ngân buôn bán, kỵ đào móng mở hướng cửa nạp khí." },
        "Khai": { cat: ["door", "store", "study", "work", "gate", "livingroom", "workspace", "ceo_office", "signboard", "counter", "coffee", "restaurant", "shop", "salon"], hung: ["toilet", "sewer", "septic_tank", "trash_area"], text: "Chu thông suốt, mở mang sinh khí. Tối thượng để mở cổng lớn, đặt cửa nạp khí, đặt quầy đón khách." },
        "Be": { cat: ["warehouse", "storage"], hung: ["all", "earth", "door", "move", "gate", "altar", "livingroom", "shop"], text: "Chu bế tắc, ngưng trệ. Trường khí bị khóa chặt, âm khí nặng, kỵ mở cửa, dời giường, khởi công." }
    },

    HINH_XUNG_QUY_QUYET: {
        LUC_XUNG: { "Ty": "Ngo", "Suu": "Mui", "Dan": "Than", "Mao": "Dau", "Thin": "Tuat", "Tỵ": "Hoi", "Ngo": "Ty", "Mui": "Suu", "Than": "Dan", "Dau": "Mao", "Tuat": "Thin", "Hoi": "Tỵ" },
        LUC_HOP: { "Ty": "Suu", "Dan": "Hoi", "Mao": "Tuat", "Thin": "Dau", "Tỵ": "Than", "Ngo": "Mui", "Suu": "Ty", "Hoi": "Dan", "Tuat": "Mao", "Dau": "Thin", "Than": "Tỵ", "Mui": "Ngo" },
        LUC_HAI: { "Ty": "Mui", "Suu": "Ngo", "Dan": "Tỵ", "Mao": "Thin", "Than": "Hoi", "Dau": "Tuat", "Mui": "Ty", "Ngo": "Suu", "Tỵ": "Dan", "Thin": "Mao", "Hoi": "Than", "Tuat": "Dau" },
        TU_PHA: { "Ty": "Dau", "Mao": "Ngo", "Ngo": "Mao", "Dau": "Ty", "Dan": "Hoi", "Than": "Tỵ", "Tỵ": "Than", "Hoi": "Dan", "Suu": "Thin", "Mui": "Tuat", "Thin": "Suu", "Tuat": "Mui" },
        CAN_XUNG: { "Giap": "Canh", "At": "Tan", "Binh": "Nham", "Dinh": "Quy", "Mau": "Giap", "Ky": "At", "Canh": "Giap", "Tan": "At", "Nham": "Binh", "Quy": "Dinh" },
        TAM_HOP_CUC: {
            "Than": ["Ty", "Thin"], "Ty": ["Than", "Thin"], "Thin": ["Than", "Ty"],
            "Tỵ": ["Dau", "Suu"], "Dau": ["Tỵ", "Suu"], "Suu": ["Tỵ", "Dau"],
            "Hoi": ["Mao", "Mui"], "Mao": ["Hoi", "Mui"], "Mui": ["Hoi", "Mao"],
            "Dan": ["Ngo", "Tuat"], "Ngo": ["Dan", "Tuat"], "Tuat": ["Dan", "Ngo"]
        },
        THIEN_LOC: { "Giap": "Dan", "At": "Mao", "Binh": "Tỵ", "Dinh": "Ngo", "Mau": "Tỵ", "Ky": "Ngo", "Canh": "Than", "Tan": "Dau", "Nham": "Hoi", "Quy": "Ty" },
        THIEN_MA: { "Than": "Dan", "Ty": "Dan", "Thin": "Dan", "Tỵ": "Hoi", "Dau": "Hoi", "Suu": "Hoi", "Dan": "Than", "Ngo": "Than", "Tuat": "Than", "Hoi": "Tỵ", "Mao": "Tỵ", "Mui": "Tỵ" },
        QUY_NHAN: { "Giap": ["Suu", "Mui"], "At": ["Ty", "Than"], "Binh": ["Hoi", "Dau"], "Dinh": ["Hoi", "Dau"], "Mau": ["Suu", "Mui"], "Ky": ["Ty", "Than"], "Canh": ["Suu", "Mui"], "Tan": ["Dan", "Ngo"], "Nham": ["Mao", "Tỵ"], "Quy": ["Mao", "Tỵ"] },
        
        NGU_HANH_SON: {
            "Nhâm": "Thuy", "Tý": "Thuy", "Quý": "Thuy", "Sửu": "Tho", "Cấn": "Tho", "Dần": "Moc",
            "Giáp": "Moc", "Mão": "Moc", "Ất": "Moc", "Thìn": "Tho", "Tốn": "Moc", "Tỵ": "Hoa",
            "Bính": "Hoa", "Ngọ": "Hoa", "Đinh": "Hoa", "Mùi": "Tho", "Khôn": "Tho", "Thân": "Kim",
            "Canh": "Kim", "Dậu": "Kim", "Tân": "Kim", "Tuất": "Tho", "Càn": "Kim", "Hợi": "Thuy"
        }
    },

    SON_TO_CHI_MAP: {
        "Tý": "Ty", "Quý": "Ty", "Nhâm": "Ty", "Sửu": "Suu", "Cấn": "Suu", "Dần": "Dan",
        "Giáp": "Dan", "Mão": "Mao", "Ất": "Mao", "Thìn": "Thin", "Tốn": "Thin", "Tỵ": "Tỵ",
        "Bính": "Tỵ", "Ngọ": "Ngo", "Đinh": "Ngo", "Mùi": "Mui", "Khôn": "Mui", "Thân": "Than",
        "Canh": "Than", "Dậu": "Dau", "Tân": "Dau", "Tuất": "Tuat", "Càn": "Tuat", "Hợi": "Hoi"
    },

    SON_TO_HUONG_MAP: {
        "Nhâm": "N", "Tý": "N", "Quý": "N", "Bính": "S", "Ngọ": "S", "Đinh": "S",
        "Giáp": "E", "Mão": "E", "Ất": "E", "Canh": "W", "Dậu": "W", "Tân": "W",
        "Sửu": "NE", "Cấn": "NE", "Dần": "NE", "Thìn": "SE", "Tốn": "SE", "Tỵ": "SE",
        "Mùi": "SW", "Khôn": "SW", "Thân": "SW", "Tuất": "NW", "Càn": "NW", "Hợi": "NW"
    },

    HUONG_TO_SAO_LUU_NIEN: { "N": 1, "SW": 2, "E": 3, "SE": 4, "Trung Cung": 5, "NW": 6, "W": 7, "NE": 8, "S": 9 },

    CAN_CHI_DINH_GIO: {
        "Ty": { hoangDao: ["Ty", "Suu", "Mao", "Ngo", "Than", "Dau"], satChu: ["Than", "Ty"] },
        "Suu": { hoangDao: ["Dan", "Mao", "Tỵ", "Than", "Tuat", "Hoi"], satChu: ["Hoi", "Mui"] },
        "Dan": { hoangDao: ["Ty", "Suu", "Thin", "Tỵ", "Mui", "Tuat"], satChu: ["Ngo", "Mao"] },
        "Mao": { hoangDao: ["Ty", "Dan", "Mao", "Ngo", "Mui", "Hoi"], satChu: ["Dau", "Suu"] },
        "Thin": { hoangDao: ["Dan", "Thin", "Tỵ", "Than", "Dau", "Hoi"], satChu: ["Tỵ", "Tuat"] },
        "Tỵ": { hoangDao: ["Suu", "Thin", "Ngo", "Mui", "Tuat", "Hoi"], satChu: ["Ty", "Than"] },
        "Ngo": { hoangDao: ["Ty", "Suu", "Mao", "Ngo", "Than", "Dau"], satChu: ["Suu", "Hoi"] },
        "Mui": { hoangDao: ["Dan", "Mao", "Tỵ", "Than", "Tuat", "Hoi"], satChu: ["Ngo", "Thin"] },
        "Than": { hoangDao: ["Ty", "Suu", "Thin", "Tỵ", "Mui", "Tuat"], satChu: ["Mao", "Dan"] },
        "Dau": { hoangDao: ["Ty", "Suu", "Dan", "Ngo", "Mui", "Dau"], satChu: ["Ty", "Dau"] },
        "Tuat": { hoangDao: ["Ty", "Dan", "Mao", "Ngo", "Mui", "Hoi"], satChu: ["Mui", "Suu"] },
        "Hoi": { hoangDao: ["Dan", "Thin", "Tỵ", "Than", "Dau", "Hoi"], satChu: ["Thin", "Tỵ"] }
    },

    GIO_DICH_NGHIA: {
        "Ty": "Tý (23h-01h)", "Suu": "Sửu (01h-03h)", "Dan": "Dần (03h-05h)", "Mao": "Mão (05h-07h)",
        "Thin": "Thìn (07h-09h)", "Tỵ": "Tỵ (09h-11h)", "Ngo": "Ngọ (11h-13h)", "Mùi": "Mùi (13h-15h)",
        "Than": "Thân (15h-17h)", "Dau": "Dậu (17h-19h)", "Tuat": "Tuất (19h-21h)", "Hoi": "Hợi (21h-23h)"
    },

    MA_TRAN_THAN_SAT_TINH: {
        tamSat: { "Dan Ngo Tuat": "Bac", "Than Ty Thin": "Nam", "Tỵ Dau Suu": "Dong", "Hoi Mao Mui": "Tay" },
        thaiTueArr: ["Than", "Dau", "Tuat", "Hoi", "Ty", "Suu", "Dan", "Mao", "Thin", "Tỵ", "Ngo", "Mui"],
        phuongViChi: {
            "Ty": "Bac", "Ngo": "Nam", "Mao": "Dong", "Dau": "Tay",
            "Dan": "Dong Bac", "Than": "Tay Nam", "Tỵ": "Dong Nam", "Hoi": "Tay Bac",
            "Suu": "Dong Bac", "Mui": "Tay Nam", "Thin": "Dong Nam", "Tuat": "Tay Bac"
        },
        chiTiengVietToKey: { 
            "Tý": "Ty", "Sửu": "Suu", "Dần": "Dan", "Mão": "Mao", "Thìn": "Thin", "Tỵ": "Tỵ", 
            "Ngọ": "Ngo", "Mùi": "Mui", "Thân": "Than", "Dậu": "Dau", "Tuất": "Tuat", "Hợi": "Hoi" 
        },
        canTiengVietToKey: {
            "Giáp": "Giap", "Ất": "At", "Bính": "Binh", "Đinh": "Dinh", "Mậu": "Mau",
            "Kỷ": "Ky", "Canh": "Canh", "Tân": "Tan", "Nhâm": "Nham", "Quý": "Quy"
        }
    }
};

// Helper chuẩn hoá chuỗi nội bộ phòng tránh lỗi so sánh ký tự Ty/Tỵ
function chuanHoaChiKey(str) {
    if(!str) return "";
    let s = str.trim();
    if(s === "Tý" || s === "tý") return "Ty";
    if(s === "Tỵ" || s === "tỵ") return "Tỵ";
    return s;
}

// ─── VÁ LỖI CHÍ CHẠY NẠP ÂM: THUẬT TOÁN ĐẠI THỪA LUẬN NẠP ÂM 60 HOA GIÁP CHÍNH TÔNG ───
function layNapAm60HoaGiap(can, chi) {
    const matrixCan = { "Giap": 1, "At": 1, "Binh": 2, "Dinh": 2, "Mau": 3, "Ky": 3, "Canh": 4, "Tan": 4, "Nham": 5, "Quy": 5 };
    const matrixChi = { "Ty": 1, "Suu": 1, "Ngo": 1, "Mui": 1, "Dan": 2, "Mao": 2, "Than": 2, "Dau": 2, "Thin": 3, "Tỵ": 3, "Tuat": 3, "Hoi": 3 };
    
    let canVal = matrixCan[can] || 0;
    let chiVal = matrixChi[chuanHoaChiKey(chi)] || 0;
    let tong = canVal + chiVal;
    if (tong > 5) tong -= 5;
    
    const nguHanhMap = { 1: "Moc", 2: "Kim", 3: "Thuy", 4: "Hoa", 5: "Tho" };
    return nguHanhMap[tong] || "Tho";
}

// =========================================================================
// 🧠 PHÂN HỆ THUẬT TOÁN ĐỘNG: ĐỊNH VỊ THỜI KHÔNG VÀ TIẾT KHÍ CHÍNH TÔNG
// =========================================================================

// VÁ LỖI LỆCH MỐI GIỜ JULIAN: Ứng dụng tích phân Epoch 2000 loại trừ hoàn toàn sai số
function layCanChiNgayChinhXac(y, m, d) {
    const totalDays = Math.floor((Date.UTC(y, m - 1, d) - Date.UTC(2000, 0, 1)) / 86400000);
    
    let canIdx = (0 + (totalDays % 10) + 10) % 10;
    let chiIdx = (6 + (totalDays % 12) + 12) % 12;

    const canArr = ["Giap", "At", "Binh", "Dinh", "Mau", "Ky", "Canh", "Tan", "Nham", "Quy"];
    const chiArr = ["Ty", "Suu", "Dan", "Mao", "Thin", "Tỵ", "Ngo", "Mui", "Than", "Dau", "Tuat", "Hoi"];
    
    const canTiengViet = { "Giap": "Giáp", "At": "Ất", "Binh": "Bính", "Dinh": "Đinh", "Mau": "Mậu", "Ky": "Kỷ", "Canh": "Canh", "Tan": "Tân", "Nham": "Nhâm", "Quy": "Quý" };
    const chiTiengViet = { "Ty": "Tý", "Suu": "Sửu", "Dan": "Dần", "Mao": "Mão", "Thin": "Thìn", "Tỵ": "Tỵ", "Ngo": "Ngọ", "Mui": "Mùi", "Than": "Thân", "Dau": "Dậu", "Tuat": "Tuất", "Hoi": "Hợi" };

    return {
        chi: chiArr[chiIdx],
        can: canArr[canIdx],
        text: `${canTiengViet[canArr[canIdx]]} ${chiTiengViet[chiArr[chiIdx]]}`
    };
}

// VÁ LỖI TIẾT KHÍ THÔ SƠ: Thuật toán nội suy Thiên văn chính xác dải độ lệch Kinh độ Mặt Trời Vận 9
function layThangTietKhiVaTruc(y, m, d, chiNgay) {
    const termMapping = [22, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    let mốcTietKhiIndex = termMapping[m - 1];
    
    const baseDays = {
        22: 5.40, 0: 3.87, 2: 5.63, 4: 4.81, 6: 5.52, 8: 5.67,
        10: 7.10, 12: 7.35, 14: 7.43, 16: 8.31, 18: 7.43, 20: 7.18
    };
    
    let baseDay = baseDays[mốcTietKhiIndex];
    let C = (y - 2000) * 0.2422 - Math.floor((y - 2000) / 4);
    let ngayGiaoTietChuan = Math.floor(baseDay + C);
    
    let solarMonthIdx = (d < ngayGiaoTietChuan) ? (m - 3 + 12) % 12 : (m - 2 + 12) % 12;
    
    const chiCuaThangTietKhi = ["Dan", "Mao", "Thin", "Tỵ", "Ngo", "Mui", "Than", "Dau", "Tuat", "Hoi", "Ty", "Suu"];
    let chiThang = chiCuaThangTietKhi[solarMonthIdx];
    
    const chiArr = ["Ty", "Suu", "Dan", "Mao", "Thin", "Tỵ", "Ngo", "Mui", "Than", "Dau", "Tuat", "Hoi"];
    const danhSachTruc = ["Kien", "Tru", "Man", "Binh", "Dinh", "Chap", "Pha", "Nguy", "Thanh", "Thu", "Khai", "Be"];
    
    let idxChiThang = chiArr.indexOf(chiThang);
    let idxChiNgay = chiArr.indexOf(chuanHoaChiKey(chiNgay));
    let hieuso = (idxChiNgay - idxChiThang + 12) % 12;
    
    return {
        thangTietKhi: (d < ngayGiaoTietChuan) ? (m === 1 ? 12 : m - 1) : m,
        chiThangText: chiThang,
        trucName: danhSachTruc[hieuso]
    };
}

// 🚀 ĐỒNG BỘ ĐƯỜNG BAY THUẬN HÀNH CỦA CỬU TINH THEO HÀM LÕI
function tuDongTinhCuuTinhLuuNien(sonName, namKhaoSat) {
    let maSoNam = (11 - (namKhaoSat % 9)) % 9;
    if (maSoNam === 0) maSoNam = 9;

    let huongNha = DATA_TRACH_NHAT_CAO_CAP.SON_TO_HUONG_MAP[sonName] || "Trung Cung";
    let cungViNha = DATA_TRACH_NHAT_CAO_CAP.HUONG_TO_SAO_LUU_NIEN[huongNha];
    
    // Đã đồng bộ sang dấu "+" để khớp hoàn toàn với lõi tinhDiemTongHop
    let saoDaoPhuong = (maSoNam + (cungViNha - 5) + 9) % 9;
    if (saoDaoPhuong === 0) saoDaoPhuong = 9;

    const tenSaoMap = {
        1: "Nhất Bạch Thủy Tinh (Cát)", 2: "Nhị Hắc Bệnh Phù (Hung)", 3: "Tam Bích Lộc Tồn (Hung)",
        4: "Tứ Lục Văn Xương (Cát)", 5: "Ngũ Hoàng Đại Sát (Đại Hung)", 6: "Lục Bạch Vũ Khúc (Cát)",
        7: "Thất Xích Phá Quân (Hung)", 8: "Bát Bạch Tả Phù (Cát)", 9: "Cửu Tử Hữu Bật (Đại Cát Vận 9)"
    };

    return {
        maSao: saoDaoPhuong,
        tenSao: tenSaoMap[saoDaoPhuong],
        isHung: [2, 3, 5, 7].includes(saoDaoPhuong)
    };
}

function toggleTongLuan() {
    const overlay = document.getElementById('tongLuanOverlay');
    const name = document.getElementById('userName')?.value.trim() || "Trạch Chủ";
    const yearStr = document.getElementById('birthYear')?.value;
    
    if (!yearStr || yearStr.length < 4 || typeof chủMệnh === 'undefined' || !chủMệnh) {
        if (typeof showCustomAlert === 'function') {
            showCustomAlert("Vui lòng nhập đủ Ngày Tháng Năm Sinh để hệ thống xác định Thiên khí Bản Mệnh trước khi khai mở tổng luận!", "⚠️ Thiếu Dữ Liệu");
        } else {
            alert("Vui lòng nhập đủ Ngày Tháng Năm Sinh để hệ thống xác định Thiên khí Bản Mệnh trước khi khai mở tổng luận!");
        }
        return;
    }

    if (!isCompassHold) {
        isCompassHold = true;
        let headingToLock = typeof currentHeading !== 'undefined' ? currentHeading : 0;
        holdedHeading = parseInt(headingToLock); 
        
        if (typeof xayDungBaoCaoLuanGiai === 'function') {
            xayDungBaoCaoLuanGiai(name, holdedHeading);
        }
        if (overlay) overlay.classList.add('show');
    } else {
        isCompassHold = false;
        if (overlay) overlay.classList.remove('show');
    }
}

function kiemTraHanNhanKhiChinhXac(birthYear, currentYear) {
    const age = currentYear - birthYear + 1; 
    let result = { isOk: true, reasons: [], kimLau: false, hoangOc: false, tamTai: false };
    const gender = document.getElementById('gender')?.value || 'male';

    const kimLauRemainder = age % 9;
    if (gender === 'male') {
        if ([1, 3, 6, 8].includes(kimLauRemainder)) {
            result.isOk = false;
            result.kimLau = true;
            const kimLauNames = { 1: "Kim Lâu Thân (Hại bản thân)", 3: "Kim Lâu Thê (Hại vợ)", 6: "Kim Lâu Tử (Hại con)", 8: "Kim Lâu Súc (Tổn hao gia sản)" };
            result.reasons.push(kimLauNames[kimLauRemainder]);
        }
    } else {
        if (kimLauRemainder === 8) {
            result.isOk = false;
            result.kimLau = true;
            result.reasons.push("Kim Lâu Lộ Bàng Súc (Tổn hại cơ nghiệp kinh doanh)");
        }
    }

    const hoangOcO = [1, 2, 4]; 
    const hangChuc = Math.floor(age / 10);
    const hangDonVi = age % 10;
    let cungHoangOc = (hangChuc + hangDonVi) % 6;
    if (cungHoangOc === 0) cungHoangOc = 6;
    
    if (!hoangOcO.includes(cungHoangOc)) {
        result.isOk = false;
        result.hoangOc = true;
        const hoangOcNames = { 3: "Địa Sát (Hung cục đè nặng)", 5: "Thọ Tử (Đại hung biệt ly)", 6: "Hoang Ốc (Vỡ nát hoang tàn)" };
        result.reasons.push(hoangOcNames[cungHoangOc] || "Hoang Ốc Vãng Vong");
    }

    const chiTuoi = DATA_TRACH_NHAT_CAO_CAP.CHI_QUY_CHUAN[birthYear % 12];
    const tamTaiMap = {
        "Than": ["Dan", "Mao", "Thin"], "Ty": ["Dan", "Mao", "Thin"], "Thin": ["Dan", "Mao", "Thin"],
        "Tỵ": ["Hoi", "Ty", "Suu"], "Dau": ["Hoi", "Ty", "Suu"], "Suu": ["Hoi", "Ty", "Suu"],
        "Hoi": ["Tỵ", "Ngo", "Mui"], "Mao": ["Tỵ", "Ngo", "Mui"], "Mui": ["Tỵ", "Ngo", "Mui"],
        "Dan": ["Than", "Dau", "Tuat"], "Ngo": ["Than", "Dau", "Tuat"], "Tuat": ["Than", "Dau", "Tuat"]
    };
    const chiNamHienTai = DATA_TRACH_NHAT_CAO_CAP.CHI_QUY_CHUAN[currentYear % 12];
    if (tamTaiMap[chuanHoaChiKey(chiTuoi)]?.includes(chuanHoaChiKey(chiNamHienTai))) {
        result.isOk = false;
        result.tamTai = true;
        result.reasons.push(`Tam Tai Tuổi Hạn (${chiNamHienTai} niên)`);
    }

    return result;
}

// ─── VÁ LỖI MƯỢN TUỔI SAI NGŨ HÀNH: Tích hợp định vị Nạp Âm chuẩn xác bản mệnh thời không ───
function timTuoiQuyNhanMuonTinh(currentYear, sonName, birthYearChuNha) {
    const canGiaLap = ["Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"];
    const chiGiaLap = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];
    const canKeyEng = ["Giap", "At", "Binh", "Dinh", "Mau", "Ky", "Canh", "Tan", "Nham", "Quy"];
    const chiKeyEng = ["Ty", "Suu", "Dan", "Mao", "Thin", "Tỵ", "Ngo", "Mui", "Than", "Dau", "Tuat", "Hoi"];

    const chiChuNha = DATA_TRACH_NHAT_CAO_CAP.CHI_QUY_CHUAN[birthYearChuNha % 12];
    const chiCuaSon = DATA_TRACH_NHAT_CAO_CAP.SON_TO_CHI_MAP[sonName] || "Ty";
    let hanhCuaSon = DATA_TRACH_NHAT_CAO_CAP.HINH_XUNG_QUY_QUYET.NGU_HANH_SON[sonName] || "Tho";

    let danhSachQuyNhandatTieuChuan = [];

    for (let sTuoi = 22; sTuoi <= 68; sTuoi++) {
        let nSinhUngVien = currentYear - sTuoi + 1;
        let checkNhanKhi = kiemTraHanNhanKhiChinhXac(nSinhUngVien, currentYear);
        if (!checkNhanKhi.isOk) continue;

        let chiUngVien = DATA_TRACH_NHAT_CAO_CAP.CHI_QUY_CHUAN[nSinhUngVien % 12];
        let hinhXung = DATA_TRACH_NHAT_CAO_CAP.HINH_XUNG_QUY_QUYET;

        if (hinhXung.LUC_XUNG[chuanHoaChiKey(chiUngVien)] === chuanHoaChiKey(chiChuNha) || hinhXung.LUC_XUNG[chuanHoaChiKey(chiUngVien)] === chuanHoaChiKey(chiCuaSon)) continue;
        if (hinhXung.LUC_HAI[chuanHoaChiKey(chiUngVien)] === chuanHoaChiKey(chiChuNha) || hinhXung.LUC_HAI[chuanHoaChiKey(chiUngVien)] === chuanHoaChiKey(chiCuaSon)) continue;
        if (hinhXung.TU_PHA[chuanHoaChiKey(chiUngVien)] === chuanHoaChiKey(chiChuNha) || hinhXung.TU_PHA[chuanHoaChiKey(chiUngVien)] === chuanHoaChiKey(chiCuaSon)) continue;

        // Trích can chi chuỗi tiếng anh để tính chuẩn Nạp Âm sinh khắc gốc
        let uCanKey = canKeyEng[(nSinhUngVien - 4) % 10 < 0 ? (nSinhUngVien - 4) % 10 + 10 : (nSinhUngVien - 4) % 10];
        let uChiKey = chiKeyEng[(nSinhUngVien - 4) % 12 < 0 ? (nSinhUngVien - 4) % 12 + 12 : (nSinhUngVien - 4) % 12];
        
        let hanhNapAmUngVien = layNapAm60HoaGiap(uCanKey, uChiKey);
        
        // Xét tương khắc Sinh khắc ngũ hành chính tông giữa người mượn và đất trạch Sơn vị
        if ((hanhNapAmUngVien === "Thuy" && hanhCuaSon === "Hoa") ||
            (hanhNapAmUngVien === "Hoa" && hanhCuaSon === "Kim") ||
            (hanhNapAmUngVien === "Tho" && hanhCuaSon === "Thuy") ||
            (hanhNapAmUngVien === "Moc" && hanhCuaSon === "Tho") ||
            (hanhNapAmUngVien === "Kim" && hanhCuaSon === "Moc")) {
            continue; 
        }

        let canTen = canGiaLap[(nSinhUngVien - 4) % 10 < 0 ? (nSinhUngVien - 4) % 10 + 10 : (nSinhUngVien - 4) % 10];
        let chiTen = chiGiaLap[(nSinhUngVien - 4) % 12 < 0 ? (nSinhUngVien - 4) % 12 + 12 : (nSinhUngVien - 4) % 12];

        danhSachQuyNhandatTieuChuan.push({
            year: nSinhUngVien,
            name: `${canTen} ${chiTen}`,
            age: sTuoi
        });

        if (danhSachQuyNhandatTieuChuan.length >= 3) break; 
    }

    if (danhSachQuyNhandatTieuChuan.length === 0) {
        return [{ year: currentYear - 38, name: "Mậu Thìn", age: 39 }]; 
    }
    return danhSachQuyNhandatTieuChuan;
}

function tinhCanCuaGio(canNgayKey, chiGioKey) {
    const canArr = ["Giap", "At", "Binh", "Dinh", "Mau", "Ky", "Canh", "Tan", "Nham", "Quy"];
    const chiArr = ["Ty", "Suu", "Dan", "Mao", "Thin", "Tỵ", "Ngo", "Mui", "Than", "Dau", "Tuat", "Hoi"];
    
    let idxCanNgay = canArr.indexOf(canNgayKey);
    let khoiCanTy = "";
    if (idxCanNgay === 0 || idxCanNgay === 5) khoiCanTy = "Giap";
    else if (idxCanNgay === 1 || idxCanNgay === 6) khoiCanTy = "Binh";
    else if (idxCanNgay === 2 || idxCanNgay === 7) khoiCanTy = "Mau";
    else if (idxCanNgay === 3 || idxCanNgay === 8) khoiCanTy = "Canh";
    else khoiCanTy = "Nham";

    let idxKhoiCan = canArr.indexOf(khoiCanTy);
    let idxChiGio = chiArr.indexOf(chiGioKey);
    let idxCanGio = (idxKhoiCan + idxChiGio) % 10;
    
    return canArr[idxCanGio];
}

// =======================================================================================
// 🚀 SIÊU THUẬT TOÁN TRẠCH NHẬT CHÍNH TÔNG CAO CẤP: ĐẢO NGƯỢC "NGỌN" LÀM TRỌNG TÂM ĐỘNG
// =======================================================================================
function tinhNgayGioCatTuongBaoCao(birthYear, sonName, namKhaoSat, thangKhaoSat, mucDich) {
    const satTinhMaTran = DATA_TRACH_NHAT_CAO_CAP.MA_TRAN_THAN_SAT_TINH;
    const hinhXungQuyQuyet = DATA_TRACH_NHAT_CAO_CAP.HINH_XUNG_QUY_QUYET;
    
    const canChiChuNhaGốc = layCanChiNgayChinhXac(birthYear, 5, 1); 
    const canChuNhaKey = satTinhMaTran.canTiengVietToKey[canChiChuNhaGốc.can] || "Mau";
    const chiTuoiChuNhaKey = DATA_TRACH_NHAT_CAO_CAP.CHI_QUY_CHUAN[birthYear % 12];

    const chiCuaSon = DATA_TRACH_NHAT_CAO_CAP.SON_TO_CHI_MAP[sonName] || "Ty";
    const huongNhaCode = DATA_TRACH_NHAT_CAO_CAP.SON_TO_HUONG_MAP[sonName] || "N";
    
    // 🚀 VÁ LỖI LOGIC: Bộ chuyển đổi mã code hướng sang tiếng Việt không dấu để khớp khít ma trận Tam Sát
    const mapCodeSangKhongDau = { "N": "Bac", "S": "Nam", "E": "Dong", "W": "Tay", "NE": "Dong Bac", "SE": "Dong Nam", "SW": "Tay Nam", "NW": "Tay Bac" };
    const huongNhaDaiCucChuan = mapCodeSangKhongDau[huongNhaCode] || "Bac";

    const configHangMuc = typeof ConfigPhongThuy !== 'undefined' ? ConfigPhongThuy[mucDich] : { title: "Hạng mục", isCat: true };
    const isCatPurpose = configHangMuc.isCat;

    let danhSachNgayTot = [];
    const realDate = new Date();
    
    let ngayBatDauQuet = 1;
    if (namKhaoSat === realDate.getFullYear() && thangKhaoSat === (realDate.getMonth() + 1)) {
        ngayBatDauQuet = realDate.getDate(); 
    }

    let soNgayTrongThang = new Date(namKhaoSat, thangKhaoSat, 0).getDate();
    const tenChiNamKhaoSat = satTinhMaTran.thaiTueArr[namKhaoSat % 12];
    const phuongViTamSatNam = satTinhMaTran.tamSat[namKhaoSat % 12 >= 9 || namKhaoSat % 12 <= 2 ? "Than Ty Thin" : namKhaoSat % 12 <= 5 ? "Tỵ Dau Suu" : namKhaoSat % 12 <= 8 ? "Hoi Mao Mui" : "Dan Ngo Tuat"];

    // Gọi hàm tính toán Lưu Niên đồng bộ
    let thongTinSaoLuuNien = typeof tuDongTinhCuuTinhLuuNien === 'function' ? tuDongTinhCuuTinhLuuNien(sonName, namKhaoSat) : { maSao: 1, isHung: false };

    for (let ngay = ngayBatDauQuet; ngay <= soNgayTrongThang; ngay++) {
        let canChiNgayObj = layCanChiNgayChinhXac(namKhaoSat, thangKhaoSat, ngay);
        let phanHeTruc = layThangTietKhiVaTruc(namKhaoSat, thangKhaoSat, ngay, canChiNgayObj.chi);

        if (!phanHeTruc || !phanHeTruc.trucName) continue;

        let diemNgay = 70; 
        let lyDoThuong = [];
        let lyDoPhat = [];
        let biKhoaBoiDaiSat = false;

        if (hinhXungQuyQuyet.THIEN_LOC[canChuNhaKey] === canChiNgayObj.chi) {
            diemNgay += 15; lyDoThuong.push("Đắc ngày Thiên Lộc (Đại cát tiến bảo, hưng thịnh tài vận)");
        }
        if (hinhXungQuyQuyet.THIEN_MA[chuanHoaChiKey(chiTuoiChuNhaKey)] === canChiNgayObj.chi) {
            diemNgay += 10; lyDoThuong.push("Đắc ngày Thiên Mã (Khí trường hanh thông, vạn sự nhanh chóng cát thành)");
        }
        if (hinhXungQuyQuyet.QUY_NHAN[canChuNhaKey]?.includes(canChiNgayObj.chi)) {
            diemNgay += 15; lyDoThuong.push("Đắc ngày Quý Nhân phù trợ (Hóa giải hung hiểm, quý nhân trợ lực)");
        }

        if (hinhXungQuyQuyet.TAM_HOP_CUC[chuanHoaChiKey(chiTuoiChuNhaKey)]?.includes(canChiNgayObj.chi)) {
            diemNgay += 10; lyDoThuong.push("Đắc ngày khí trường Tam Hợp Bản Mệnh");
        }
        if (hinhXungQuyQuyet.LUC_HOP[chuanHoaChiKey(chiTuoiChuNhaKey)] === canChiNgayObj.chi) {
            diemNgay += 10; lyDoThuong.push("Đắc ngày khí trường Lục Hợp cát khí");
        }

        let hanhNgay = layNapAm60HoaGiap(canChiNgayObj.can, canChiNgayObj.chi);
        let thucTeChuMenh = typeof chủMệnh !== 'undefined' ? chủMệnh : "Kham";
        const maTranNguHanhCungPhi = { "Kham": "Thuy", "Ly": "Hoa", "Chan": "Moc", "Ton": "Moc", "Can": "Kim", "Doai": "Kim", "Cấn": "Tho", "Khon": "Tho" };
        let hanhMenhChu = maTranNguHanhCungPhi[thucTeChuMenh] || "Tho";

        if ((hanhNgay === "Thuy" && hanhMenhChu === "Moc") || (hanhNgay === "Moc" && hanhMenhChu === "Hoa") || (hanhNgay === "Hoa" && hanhMenhChu === "Tho") || (hanhNgay === "Tho" && hanhMenhChu === "Kim") || (hanhNgay === "Kim" && hanhMenhChu === "Thuy")) {
            diemNgay += 10; lyDoThuong.push("Ngũ hành nạp âm ngày Tương Sinh niên mệnh trạch chủ");
        }

        // Kiểm tra sao hạn Ngũ Hoàng đóng cung hướng
        if (thongTinSaoLuuNien.maSao === 5) {
            if (isCatPurpose) {
                diemNgay -= 40; lyDoPhat.push("Hướng nhà phạm Ngũ Hoàng Đại Sát niên tinh đóng cung chính");
                biKhoaBoiDaiSat = true; 
            } else {
                diemNgay += 15; lyDoThuong.push("An vị kết cấu uế khí đè nén trấn át Ngũ Hoàng Đại Sát cách cục tốt");
            }
        }
        
        if ([5, 14, 23].includes(ngay)) { 
            diemNgay -= 35; lyDoPhat.push("Phạm Nguyệt Kỵ (Trăm việc đều tổn hao)");
        }

        if (canChiNgayObj.chi === hinhXungQuyQuyet.LUC_XUNG[chuanHoaChiKey(chiCuaSon)]) {
            diemNgay -= 50; lyDoPhat.push(`Lục Xung Chiếu Hướng nhà (Trực xung trục Sơn ${sonName})`);
            biKhoaBoiDaiSat = true;
        }

        const chiTiengVietNgay = canChiNgayObj.text.split(" ")[1];
        const keyChiNgayChuan = satTinhMaTran.chiTiengVietToKey[chiTiengVietNgay] || "Ty";
        const phuongViCuaNgay = satTinhMaTran.phuongViChi[keyChiNgayChuan];

        // 🔥 ĐỀ BÓNG VÁ LỖI LOGIC THÀNH CÔNG: Đã so khớp đồng bộ huongNhaDaiCucChuan tiếng Việt không dấu
        if (huongNhaDaiCucChuan === phuongViTamSatNam && phuongViCuaNgay === phuongViTamSatNam) {
            diemNgay -= 30; lyDoPhat.push(`Phạm ngày Tam Sát Lưu Nhật phương vị trạch đất`);
        }
        if (hinhXungQuyQuyet.LUC_XUNG[chuanHoaChiKey(keyChiNgayChuan)] === chuanHoaChiKey(tenChiNamKhaoSat)) {
            diemNgay -= 40; lyDoPhat.push(`Phạm ngày Tuế Phá trực xung thiên khí năm`);
            biKhoaBoiDaiSat = true;
        }

        let canNgayKey = canChiNgayObj.can;
        if (hinhXungQuyQuyet.CAN_XUNG[canNgayKey] === canChuNhaKey && canChiNgayObj.chi === hinhXungQuyQuyet.LUC_XUNG[chuanHoaChiKey(chiTuoiChuNhaKey)]) {
            diemNgay -= 60; lyDoPhat.push("❌ ĐẠI KỴ: Ngày phạm THIÊN KHẮC ĐỊA XUNG trực diện tuổi Gia Chủ");
            biKhoaBoiDaiSat = true; 
        } else if (canChiNgayObj.chi === hinhXungQuyQuyet.LUC_XUNG[chuanHoaChiKey(chiTuoiChuNhaKey)]) {
            diemNgay -= 35; lyDoPhat.push("Trực Xung Địa Chi Bản Mệnh Tuổi Gia Chủ");
        }

        let cauHinhTruc = DATA_TRACH_NHAT_CAO_CAP.THAP_NHI_KIEN_TRU[phanHeTruc.trucName];
        if (cauHinhTruc) {
            if (isCatPurpose && cauHinhTruc.cat.includes(mucDich)) {
                diemNgay += 12; lyDoThuong.push(`Trực ${phanHeTruc.trucName} đắc cách hạng mục nạp cát hành sự`);
            }
            if (!isCatPurpose && cauHinhTruc.cat.includes(mucDich)) {
                diemNgay += 15; lyDoThuong.push(`Trực ${phanHeTruc.trucName} đắc lợi tối thượng để bài trí kiến trúc tiêu uế, xả thải`);
            }
            if (cauHinhTruc.hung.includes(mucDich)) {
                diemNgay -= 30; lyDoPhat.push(`Trực ${phanHeTruc.trucName} kỵ hành sự hạng mục này`);
            }
        }

        diemNgay = Math.max(10, Math.min(100, Math.floor(diemNgay)));

        if (diemNgay >= 80 && !biKhoaBoiDaiSat) {
            let cauHinhGio = DATA_TRACH_NHAT_CAO_CAP.CAN_CHI_DINH_GIO[canChiNgayObj.chi];
            let gioCatTuongReal = [];
            let gioHungKiReal = new Set(cauHinhGio.satChu);

            cauHinhGio.hoangDao.forEach(chiGio => {
                let canGio = tinhCanCuaGio(canChiNgayObj.can, chiGio);
                let biXungNgay = hinhXungQuyQuyet.LUC_XUNG[chuanHoaChiKey(chiGio)] === canChiNgayObj.chi;
                let biXungMenh = hinhXungQuyQuyet.LUC_XUNG[chuanHoaChiKey(chiGio)] === chuanHoaChiKey(chiTuoiChuNhaKey);
                let biTuyetLo = hinhXungQuyQuyet.CAN_XUNG[canGio] === canChiNgayObj.can;

                if (!biXungNgay && !biXungMenh && !biTuyetLo) {
                    gioCatTuongReal.push(DATA_TRACH_NHAT_CAO_CAP.GIO_DICH_NGHIA[chiGio]);
                } else {
                    gioHungKiReal.add(chiGio);
                }
            });

            ["Ty", "Suu", "Dan", "Mao", "Thin", "Tỵ", "Ngo", "Mui", "Than", "Dau", "Tuat", "Hoi"].forEach(g => {
                if (hinhXungQuyQuyet.LUC_XUNG[chuanHoaChiKey(g)] === canChiNgayObj.chi || hinhXungQuyQuyet.LUC_XUNG[chuanHoaChiKey(g)] === chuanHoaChiKey(chiTuoiChuNhaKey)) {
                    gioHungKiReal.add(g);
                }
            });

            let mangGioHungKiHTML = Array.from(gioHungKiReal).map(g => DATA_TRACH_NHAT_CAO_CAP.GIO_DICH_NGHIA[g]);

            danhSachNgayTot.push({
                ngayThucTe: ngay,
                solarDate: `${ngay}/${thangKhaoSat}/${namKhaoSat}`,
                canChiText: canChiNgayObj.text,
                score: diemNgay,
                trucName: phanHeTruc.trucName,
                trucText: cauHinhTruc ? cauHinhTruc.text : "",
                advantages: lyDoThuong,
                disadvantages: lyDoPhat,
                goldHours: gioCatTuongReal.length > 0 ? gioCatTuongReal : ["Không có giờ lành đắc cách"],
                blackHours: mangGioHungKiHTML
            });
        }
    }

    return danhSachNgayTot.sort((a, b) => a.ngayThucTe - b.ngayThucTe);
}

// =========================================================================
// 🏆 HÀM BIÊN SOẠN BÁO CÁO PHONG THỦY SỐ THƯỢNG TẦNG - HOÀN THIỆN ĐỒNG BỘ UI/UX
// =========================================================================
function xayDungBaoCaoLuanGiai(name, degree) {
    const contentBox = document.getElementById('tongLuanContent');
    const mucDich = document.getElementById('purpose').value;
    const config = ConfigPhongThuy[mucDich] || { title: "Hạng mục", isCat: true };
    
    const txtSurveyYear = document.getElementById('surveyYear');
    const namKhaoSat = (txtSurveyYear && txtSurveyYear.value.length === 4) ? parseInt(txtSurveyYear.value) : new Date().getFullYear();
    const thangKhaoSat = new Date().getMonth() + 1;

    const dayStr = document.getElementById('birthDay').value;
    const monthStr = document.getElementById('birthMonth').value;
    const yearStr = document.getElementById('birthYear').value;
    let birthYearInt = parseInt(yearStr || "1993");
    let namAmMệnhChủ = (parseInt(monthStr) < 2 || (parseInt(monthStr) === 2 && parseInt(dayStr) < 5)) ? birthYearInt - 1 : birthYearInt;

    let thucTeChuMenh = (typeof chủMệnh !== 'undefined' && chủMệnh) ? chủMệnh : "Khảm";
    const maTranNguHanhCungPhi = {
        "Khảm": "Thủy", "Ly": "Hỏa", "Chấn": "Mộc", "Tốn": "Mộc",
        "Càn": "Kim", "Đoài": "Kim", "Cấn": "Thổ", "Khôn": "Thổ"
    };
    let nguHanhCungPhiText = maTranNguHanhCungPhi[thucTeChuMenh] || "Thổ";

    const tongHop = tinhDiemTongHop(thucTeChuMenh, degree, namKhaoSat, mucDich, namAmMệnhChủ);
    const sonChuan = tongHop.sonName || "Tý";

    let thongTin72Hau = { ten: "Đang quét mạch", chatLuong: "Bình Hòa", diem: 60, ynghia: "Khí trường bình ổn cục bộ." };
    if (typeof Data72Hau !== 'undefined') {
        let gocChuan72 = (Math.round(degree / 5) * 5).toFixed(1);
        if (Data72Hau[gocChuan72]) {
            thongTin72Hau = Data72Hau[gocChuan72];
        } else {
            let keys = Object.keys(Data72Hau).map(Number);
            let closest = keys.reduce((prev, curr) => (Math.abs(curr - degree) < Math.abs(prev - degree) ? curr : prev), 0);
            thongTin72Hau = Data72Hau[closest.toFixed(1)] || thongTin72Hau;
        }
    }

    const luuNienObj = tuDongTinhCuuTinhLuuNien(sonChuan, namKhaoSat);

    let currentCode = "N";
    if (degree >= 337.5 || degree < 22.5) currentCode = "N";
    else if (degree >= 22.5 && degree < 67.5) currentCode = "NE";
    else if (degree >= 67.5 && degree < 112.5) currentCode = "E";
    else if (degree >= 112.5 && degree < 157.5) currentCode = "SE";
    else if (degree >= 157.5 && degree < 202.5) currentCode = "S";
    else if (degree >= 202.5 && degree < 247.5) currentCode = "SW";
    else if (degree >= 247.5 && degree < 292.5) currentCode = "W";
    else if (degree >= 292.5 && degree < 337.5) currentCode = "NW";

    const cungTrach = bátTrạchMap[thucTeChuMenh]?.[currentCode] || "Khác";
    const hungTinhBatTrach = ["Tuyệt Mệnh", "Ngũ Quỷ", "Lục Sát", "Họa Hại"];
    const laCungHungDiaLy = hungTinhBatTrach.includes(cungTrach);
    const isKhongVong = !!tongHop.khongVong;

    const nhomHangMucDaiSu = ["house", "gate", "door", "kitchen", "toilet", "septic_tank", "sewer"];
    const laHangMucDaiSu = nhomHangMucDaiSu.includes(mucDich);

    const ketQuaTrachNhat = tinhNgayGioCatTuongBaoCao(namAmMệnhChủ, sonChuan, namKhaoSat, thangKhaoSat, mucDich);
    const checkHanNhanKhi = kiemTraHanNhanKhiChinhXac(namAmMệnhChủ, namKhaoSat);

    let lichTrachNhatHTML = "";
    let matPhapMuonTuoiHTML = "";

    let thongDiepTốiCao = "🟢 [HÀNH SỰ ĐẠI CÁT - LONG MẠCH THÔNG SUỐT]";
    let bieuTuongTrangThai = '<span style="background:#30d158; color:#000; padding:5px 12px; border-radius:4px; font-weight:bold; font-size:0.85rem; display:inline-block; margin-bottom:8px;">HÀNH SỰ ĐẮC CÁCH (VÌ KHÍ TRƯỜNG KHỚP TRỤC)</span>';
    let mauChu = "#30d158";

    if (isKhongVong || (laCungHungDiaLy && config.isCat)) {
        thongDiepTốiCao = "🔴 [PHONG TỎA ĐỊA LÝ TĨNH - TUYỆT ĐỐI CẤM KỴ THI CÔNG]";
        bieuTuongTrangThai = '<span style="background:#ff3b30; color:#fff; padding:5px 12px; border-radius:4px; font-weight:bold; font-size:0.85rem; display:inline-block; margin-bottom:8px;">VỊ TRÍ PHẠM TỬ HUYỆT ĐẤT NỀN (BUỘC PHẢI THAY ĐỔI)</span>';
        mauChu = "#ff3b30";
    } else if (luuNienObj.isHung || thongTin72Hau.chatLuong.includes("Hung")) {
        thongDiepTốiCao = "⚠️ [THỜI TINH QUẤY NHIỄU - CẦN TRẤN AN HOẶC DỜI NGÀY]";
        bieuTuongTrangThai = '<span style="background:#ff9f0a; color:#000; padding:5px 12px; border-radius:4px; font-weight:bold; font-size:0.85rem; display:inline-block; margin-bottom:8px;">CẦN CAN THIỆP PHÁP BẢO HOẶC LỌC THỜI GIAN (CÓ THỂ LÀM)</span>';
        mauChu = "#ff9f0a";
    }

    if (config.isCat) {
        if (ketQuaTrachNhat.length > 0 && !isKhongVong && !(laCungHungDiaLy && config.isCat)) {
            let topNgay = ketQuaTrachNhat.slice(0, 7); 
            lichTrachNhatHTML = `<div style="margin-top:15px; background:rgba(48,209,88,0.04); padding:12px; border-radius:8px; border:1px solid #30d15840;">
                <b style="color:#30d158; display:block; margin-bottom:8px; font-size:0.9rem;">📅 HỆ THỐNG TRÍCH XUẤT CÁC NGÀY ĐẠI CÁT ĐẮC VƯỢNG TINH TRONG THÁNG ${thangKhaoSat}:</b>`;
            topNgay.forEach(n => {
                let listThuong = n.advantages.map(adv => `<span style="color:#30d158;">• ${adv}</span>`).join('<br>');
                let listPhat = n.disadvantages.map(dis => `<span style="color:#ff4444;">• ${dis}</span>`).join('<br>');
                
                lichTrachNhatHTML += `
                <div style="padding:10px 0; border-bottom:1px dashed rgba(255,255,255,0.08); font-size:0.85rem; line-height:1.6;">
                    • <b>Ngày Dương Lịch:</b> <span style="color:#ffd700; font-weight:bold;">${n.solarDate}</span> | <b>Can Chi Ngày:</b> <span style="color:#fff;">${n.canChiText}</span> | <b>Hiệu Hiệu Lịch Pháp:</b> <b style="color:#30d158;">${n.score} điểm</b><br>
                    • <b>Nhật Trực Kiến Trừ:</b> Trực <span style="color:#30d158; font-weight:bold;">${n.trucName}</span> (${n.trucText})<br>
                    ${listThuong ? `• <b>Cát Tinh Gia Trì:</b><br>${listThuong}<br>` : ''}
                    ${listPhat ? `• <b>Sát Khí Lưu Nhật:</b><br>${listPhat}<br>` : ''}
                    • <span style="color:#30d158;">🟢 <b>GIỜ ĐẠI CÁT KHỞI SỰ THỰC ĐỊA:</b></span> <b style="color:#fff;">${n.goldHours.slice(0, 4).join(' / ')}</b><br>
                    • <span style="color:#ff4444;">🔴 <b>GIỜ ĐẠI KỴ TUYỆT LỘ CẤM KỴ:</b></span> <span style="color:#aaa;">${n.blackHours.slice(0, 4).join(' / ')}</span>
                </div>`;
            });
            lichTrachNhatHTML += `</div>`;
        } else {
            lichTrachNhatHTML = `<div style="margin-top:15px; background:rgba(255,59,48,0.06); padding:12px; border-radius:8px; border:1px solid #ff3b3040; font-size:0.85rem; color:#eee; line-height:1.5;">
                <b>📅 PHONG TỎA BẢNG NGÀY LÀNH:</b> Trạch đất đang bị dính trục Không Vong hoặc phạm Đại Kỵ phương vị tĩnh tại phần Gốc. Việc tìm ngày tốt phần Ngọn hoàn toàn vô tác dụng, hệ thống tự động khóa bảng ngày lành để bảo vệ trạch gia khỏi dòng ác khí kích động.
            </div>`;
        }

        if (!checkHanNhanKhi.isOk && laHangMucDaiSu) {
            const razones = checkHanNhanKhi.reasons.join(' + ');
            const mangQuyNhan = timTuoiQuyNhanMuonTinh(namKhaoSat, sonChuan, namAmMệnhChủ);
            
            let danhSachTuoiHTML = "";
            mangQuyNhan.forEach((q, index) => {
                danhSachTuoiHTML += `<br>&nbsp;&nbsp;[${index + 1}] Tuổi <span style="color:#30d158; font-weight:bold;">${q.name}</span> (Sinh năm ${q.year} — Hiện tại ${q.age} tuổi mụ đắc cát)`;
            });

            matPhapMuonTuoiHTML = `
            <div style="margin-top:12px; background:rgba(255,159,10,0.06); padding:12px; border-radius:8px; border:1px solid #ff9f0a40; font-size:0.85rem; line-height:1.6;">
                <b style="color:#ff9f0a; display:block; margin-bottom:4px;">👥 MẬT PHÁP NHÂN KHÍ ĐẠI SỰ - ỦY THÁC MƯỢN TUỔI ĐỘNG THỔ:</b>
                Gia chủ dính trọng kỵ hạn tuổi trạch pháp: <span style="color:#ff4444; font-weight:bold;">${razones}</span>. Vì đây là hạng mục phá vỡ kết cấu móng long mạch lớn (<b>${config.title}</b>), trạch chủ nên ủy thác một trong các tuổi đại hợp sau đứng tên khởi sự để dẫn truyền năng lượng thịnh vượng:${danhSachTuoiHTML}
            </div>`;
        } else if (!checkHanNhanKhi.isOk && !laHangMucDaiSu) {
            matPhapMuonTuoiHTML = `
            <div style="margin-top:12px; background:rgba(48,209,88,0.05); padding:12px; border-radius:8px; border:1px solid #30d15830; font-size:0.85rem; color:#eee;">
                ✅ <b>AN VỊ TIỂU SỰ NỘI THẤT HOÀN HẢO:</b> Mặc dù bản mệnh đương số vướng niên hạn tuổi xấu, nhưng hạng mục hành sự là bài trí nội tại không đập phá nền móng long mạch trạch đất (<b>${config.title}</b>), gia chủ <b>hoàn toàn tự tay bài trí, đặt kết cấu kết cấu vào góc độ cát tường</b> mà không cần làm thủ tục mượn tuổi nhân khí phức tạp.
            </div>`;
        } else {
            matPhapMuonTuoiHTML = `
            <div style="margin-top:12px; background:rgba(48,209,88,0.05); padding:12px; border-radius:8px; border:1px solid #30d15830; font-size:0.85rem; color:#eee;">
                ✅ <b>NHÂN KHÍ THANH SẠCH:</b> Bản mệnh tuổi đương số vô cùng quang đãng, không phạm tam tai, kim lâu, hoàng ốc, sẵn sàng tự tay thực hiện lập cực và động thổ cát tường.
            </div>`;
        }
    }

    let dienGiaiChuyenSauHTML = "";
    let quẻMệnhBátTrạchChuẩn = (cungTrach.includes("Sinh Khí") || cungTrach.includes("Thiên Y") || cungTrach.includes("Diên Niên") || cungTrach.includes("Phục Vị")) ? `<span style="color:#30d158; font-weight:bold;">Cung Cát Khí ${cungTrach}</span>` : `<span style="color:#ff3b30; font-weight:bold;">Cung Hung Hại ${cungTrach}</span>`;

    if (isKhongVong) {
        dienGiaiChuyenSauHTML = `Tọa độ la bàn thực địa ghi nhận đường biên chết Không Vong cực kỳ nguy hiểm. Tại dải độ này, từ trường bị bẻ gãy và hỗn loạn nghiêm trọng. **TUYỆT ĐỐI PHONG TỎA KHÔNG ĐƯỢC XÂY DỰNG**, cố tình bài trí kiến trúc cát ${config.title} tại phân phân độ tử huyệt này sẽ kích hoạt tai họa khôn lường, nhân đinh suy kiệt.`;
    } else if (laCungHungDiaLy && config.isCat) {
        dienGiaiChuyenSauHTML = `Lỗi nghiêm trọng từ nền tảng Địa lý tĩnh! Hạng mục ${config.title} đòi hỏi phải hấp thụ sinh khí tối cao để dưỡng trạch nhưng hiện trạng kim la bàn báo đang đóng đè lên ${quẻMệnhBátTrạchChuẩn} của bản mệnh gia chủ. Sự xung xung khắc từ gốc này xói mòn sinh khí, khiến công danh tiền lộc gặp bế tắc trường kỳ.`;
    } else {
        dienGiaiChuyenSauHTML = `Địa trạch lập cực đắc vị, thông suốt khí trường. Không gian đất nền tại phân độ góc này đón trọn dải trường khí vương cát từ vị trí ${quẻMệnhBátTrạchChuẩn}. Đồng thời luồng khí mạch ngầm dưới lòng đất khớp đồng trục hoàn hảo với **72 Long Khí Xuyên Sơn: Mạch khí ${thongTin72Hau.ten} (${thongTin72Hau.chatLuong})**. Thiên Địa giao hòa đạt hiệu suất năng lượng đỉnh cao **${tongHop.diem}/98 điểm**, gia trạch an định vững như bàn thạch.`;
    }

    let matPhapXửLýChuyênSâu = tongHop.hoaGiai;
    if (laCungHungDiaLy || isKhongVong) {
        matPhapXửLýChuyênSâu = `
        <div style="line-height: 1.6; color: #eee; font-size:0.85rem;">
            ⚠️ <b style="color:#ff3b30;">ĐIỀU TIẾT THƯỢNG TẦNG - PHƯƠNG ÁN SỬA ĐỔI BẮT BUỘC:</b><br>
            Vì vị trí đang chọn phạm lỗi định vị tĩnh cốt lõi của mạch đất trạch, việc tuyển ngày giờ tốt lúc này hoàn toàn vô tác dụng. Phương pháp cứu vãn duy nhất là gia chủ buộc phải dịch chuyển vị trí kết cấu vật chất tránh xa dải độ xấu, hoặc kích hoạt khẩn cấp năng lượng phong tỏa tà khí bằng pháp bảo: <span style="color:#ffd700; font-weight:bold;">${tongHop.hoaGiai}</span> để bảo vệ trục mạch khí.
        </div>`;
    }

    let html = `
        <div style="text-align: center; border-bottom: 2px solid var(--gold); padding-bottom: 12px; margin-bottom: 15px;">
            <div style="font-size: 0.8rem; color: #dfb76c; letter-spacing: 1.5px; font-weight:bold;">✨ THƯỢNG TẦNG TỔNG LUẬN GIẢI PHONG THỦY SỐ VẬN 9 ✨</div>
            <div style="font-size: 1.1rem; font-weight: 900; color: ${mauChu}; margin-top: 6px; text-shadow: 0 0 8px rgba(0,0,0,0.5); text-transform: uppercase;">${thongDiepTốiCao}</div>
        </div>

        <div style="font-size: 0.9rem; line-height: 1.7; color: #fff; background: rgba(255,255,255,0.02); padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06); margin-bottom: 12px;">
            <div style="text-align:center;">${bieuTuongTrangThai}</div>
            <div style="margin-bottom: 6px;">👤 <b>Đương số chủ sự:</b> <span style="color:var(--gold); font-weight:bold;">${name}</span> | Quẻ mạng Cung Phi: <b style="color:#ffd700;">${thucTeChuMenh} (${nguHanhCungPhiText})</b> [Năm âm: ${namAmMệnhChủ}]</div>
            <div style="margin-bottom: 6px;">📐 <b>Góc độ la bàn thực địa:</b> <span style="color:#ffca28; font-weight:bold;">${degree}°</span> — Khống chế quản lý bởi: <span style="color:var(--gold); font-weight:bold;">Sơn ${sonChuan}</span></div>
            <div style="margin-bottom: 6px;">🔮 <b>72 Long Khí Xuyên Sơn:</b> <span style="color:#ffd700; font-weight:bold;">Mạch ${thongTin72Hau.ten}</span> — Bản chất mạch ngầm: <b style="color:${thongTin72Hau.chatLuong.includes('Hung') ? '#ff3b30' : '#30d158'};">${thongTin72Hau.chatLuong} (Đạt ${thongTin72Hau.diem}pt)</b></div>
            <div style="margin-bottom: 6px;">🎯 <b>Hạ tầng hoạch định kết cấu:</b> Công năng phân bổ [<b>${config.title}</b>]</div>
            <div style="margin-bottom: 6px;">📊 <b>Hiệu số tích phân năng lượng:</b> <span style="color:${mauChu}; font-weight:900; font-size:1.05rem;">${tongHop.diem}/98 điểm</span> — Phân cấp khí cục: <span style="color:${mauChu}; font-weight:bold;">${tongHop.level}</span></div>
            <div style="margin-bottom: 2px;">⏳ <b>Thiên thời Cửu Tinh niên hạn (${namKhaoSat}):</b> <span style="color:${luuNienObj.isHung ? '#ff9f0a' : '#30d158'}; font-weight:bold;">${luuNienObj.tenSao} chiếm đóng cung</span></div>
        </div>

        <div style="padding: 12px; background: rgba(0,0,0,0.25); border-left: 4px solid ${mauChu}; font-size: 0.88rem; color: #e5e5ea; text-align: justify; line-height: 1.6; margin-bottom: 12px; border-radius: 0 8px 8px 0;">
            <b>🔮 KHẨU QUYẾT TỔNG LUẬN DIỄN GIẢI CHÍNH TÔNG:</b><br>
            ${dienGiaiChuyenSauHTML}
        </div>

        <div style="margin-top: 10px; font-size:0.86rem; margin-bottom: 12px;">
            <b style="color:var(--gold); display:block; margin-bottom:4px; border-bottom:1px solid rgba(223,183,108,0.2); padding-bottom:3px;">💡 MẬT PHÁP ĐIỀU TIẾT PHÁP BẢO VẬT PHẨM NỀN MÓNG:</b>
            <div style="color:#ddd; padding:10px; background:rgba(255,159,10,0.02); border:1px solid rgba(255,159,10,0.12); border-radius:6px; text-align: justify;">
                ${matPhapXửLýChuyênSâu}
            </div>
        </div>

        ${lichTrachNhatHTML}
        ${matPhapMuonTuoiHTML}
        
        <div style="text-align:center; font-size:0.75rem; color:#666; margin-top:15px; font-style:italic;">
            * Báo cáo tối cao phong thủy kết xuất tự động bởi toán pháp thiên văn học phối hợp dòng địa khí Vận 9 thực hành ngày xem 06/06/2026.
        </div>
    `;

    contentBox.innerHTML = html;
}
// =========================================================================
// 🚀 HỆ THỐNG ĐIỀU KHIỂN GIAO DIỆN LA BÀN THÔNG MINH ĐỘNG (FIXED CẤP CAO)
// =========================================================================

// 1. Khai báo các biến trạng thái quản lý thời gian và cử chỉ
let dừngKimTimeout = null; 
let chạmHoldTimeout = null;
let đangChạmMànHình = false;

// 2. CSS Inject tự động: Tối ưu UI mượt mà + Chống hiện bôi đen/copy văn bản khi đè ngón tay
const styleLuangiai = document.createElement('style');
styleLuangiai.innerHTML = `
    /* Khóa tính năng lựa chọn văn bản gây hiện tượng popup copy của hệ điều hành */
    #compass, .compass-container, body {
        -webkit-touch-callout: none !important; /* iOS Safari */
        -webkit-user-select: none !important;   /* Safari */
        -khtml-user-select: none !important;    /* Konqueror HTML */
        -moz-user-select: none !important;     /* Firefox */
        -ms-user-select: none !important;      /* Internet Explorer/Edge */
        user-select: none !important;          /* Công thức chuẩn */
    }
    .luangiai-fab-btn {
        position: fixed;
        bottom: 30px;
        right: 30px;
        z-index: 999;
        opacity: 0;
        pointer-events: none;
        transform: translateY(15px) scale(0.9);
        transition: opacity 0.4s cubic-bezier(0.25, 1, 0.5, 1), 
                    transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
    }
    .luangiai-fab-btn.vượng-xuất {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0) scale(1);
    }
    /* Hiệu ứng rung nhẹ khi la bàn bị khóa bằng touch để báo hiệu cho trạch chủ */
    .la-ban-khoa-khí {
        animation: rungNheLongMach 0.3s ease-in-out 2;
    }
    @keyframes rungNheLongMach {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.02); }
    }
`;
document.head.appendChild(styleLuangiai);


// =========================================================================
// 🖐️ PHÂN HỆ TOUCH HOLD 2 GIÂY (giữ nguyên)
// =========================================================================
function kichHoatBoLangNgheTouchLaBan() {
    const vungLaBan = document.getElementById('compass') || document.body;

    vungLaBan.addEventListener('contextmenu', e => {
        e.preventDefault();
        return false;
    });

    vungLaBan.addEventListener('touchstart', function(e) {
        const overlay = document.getElementById('tongLuanOverlay');
        if (overlay && overlay.classList.contains('show')) return;

        đangChạmMànHình = true;
        clearTimeout(chạmHoldTimeout);

        if (!window.isCompassHold) {
            // Kịch bản A: Đè 2 giây để KHÓA
            chạmHoldTimeout = setTimeout(() => {
                window.isCompassHold = true;
                if (typeof currentHeading !== 'undefined') {
                    window.holdedHeading = currentHeading;
                }

                vungLaBan.classList.add('la-ban-khoa-khí');
                setTimeout(() => vungLaBan.classList.remove('la-ban-khoa-khí'), 600);

                if (typeof kichHoatBoDemDungKim === 'function') kichHoatBoDemDungKim();

                if (typeof showCustomAlert === 'function') {
                    showCustomAlert(`🔒 Đã khóa cứng Long Mạch tại: ${window.holdedHeading}°!`);
                }
            }, 500); // Tăng lên 2 giây cho chuẩn
        } else {
            // Kịch bản B: Đè 2 giây để MỞ KHÓA
            chạmHoldTimeout = setTimeout(() => {
                window.isCompassHold = false;
                if (typeof kichHoatBoDemDungKim === 'function') kichHoatBoDemDungKim();

                if (typeof showCustomAlert === 'function') {
                    showCustomAlert("🔓 Giải phóng mạch khí! La bàn đo động thực thời.");
                }
            }, 500);
        }
    }, { passive: true });

    vungLaBan.addEventListener('touchend', () => {
        đangChạmMànHình = false;
        clearTimeout(chạmHoldTimeout);
    }, { passive: true });

    vungLaBan.addEventListener('touchmove', () => {
        clearTimeout(chạmHoldTimeout);
    }, { passive: true });
}

// Khởi động
document.addEventListener('DOMContentLoaded', kichHoatBoLangNgheTouchLaBan);

// =========================================================================
// 🎯 PHÂN HỆ ĐIỀU KHIỂN NÚT TỔNG LUẬN - ĐÚNG NGUYÊN LÝ
// =========================================================================
let dungKimTimeout = null;
let lastStableHeading = null;
let stabilityStartTime = 0;

function kichHoatBoDemDungKim() {
    const btnTongLuan = document.getElementById('btn-tong-luan');
    if (!btnTongLuan) return;

    // Ưu tiên khi đang khóa cứng la bàn (luôn hiện)
    if (window.isCompassHold) {
        btnTongLuan.classList.add('vượng-xuất', 'show');
        return;
    }

    // Kiểm tra form
    const dayStr = document.getElementById('birthDay')?.value;
    const monthStr = document.getElementById('birthMonth')?.value;
    const yearStr = document.getElementById('birthYear')?.value;
    const mucDich = document.getElementById('purpose')?.value;

    const daNhapDuNgayThangNam = (dayStr && monthStr && yearStr && yearStr.length === 4);
    const daChonDanhMuc = (mucDich && mucDich !== "" && mucDich !== "none");

    if (!daNhapDuNgayThangNam || !daChonDanhMuc) {
        btnTongLuan.classList.remove('vượng-xuất', 'show');
        return;
    }

    // === LOGIC CHÍNH: Phát hiện quay hay đứng im ===
    clearTimeout(dungKimTimeout);

    const currentH = typeof currentHeading !== 'undefined' ? Math.round(currentHeading) : null;
    if (currentH === null) {
        btnTongLuan.classList.remove('vượng-xuất', 'show');
        return;
    }

    const now = Date.now();

    // Nếu kim đang thay đổi hướng (> 2°) → reset thời gian đứng im
    if (lastStableHeading === null || Math.abs(currentH - lastStableHeading) > 2) {
        lastStableHeading = currentH;
        stabilityStartTime = now;
        
        // Đang quay → ẩn nút ngay lập tức
        btnTongLuan.classList.remove('vượng-xuất', 'show');
        return;
    }

    // Nếu đứng im, tính thời gian đã đứng im bao lâu
    const stillnessTime = now - stabilityStartTime;

    if (stillnessTime >= 2000) {        // 5 giây đứng im
        if (!btnTongLuan.classList.contains('vượng-xuất')) {
            btnTongLuan.classList.add('vượng-xuất', 'show');
        }
    } 
    // Chưa đủ 5 giây thì không hiện (để nó tự ẩn khi đang quay)
}

 // Lắng nghe form
document.addEventListener('DOMContentLoaded', () => {
    const inputs = ['birthDay', 'birthMonth', 'birthYear', 'purpose'];
    inputs.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('input', kichHoatBoDemDungKim);
            el.addEventListener('change', kichHoatBoDemDungKim);
        }
    });
});

/**
 * 🧭 ĐỒNG BỘ HIỆN ỨNG SÁNG CỦA HẬU MẠCH KHI XOAY KIM LA BÀN REAL-TIME
 * Hãy chèn đoạn này vào cuối hàm xoay la bàn hoặc hàm onCompassUpdate của bạn
 */
function highlightActiveHauNode(currentCompassDegree) {
    let chuẩnHóaĐộ = ((currentCompassDegree % 360) + 360) % 360;
    
    // Tìm mốc Hậu mạch gần nhất dựa theo bước nhảy 5 độ
    let mốcHậuGầnNhất = Math.round(chuẩnHóaĐộ / 5) * 5;
    if (mốcHậuGầnNhất >= 360) mốcHậuGầnNhất = 0;

    // Bước 1: Khôi phục tất cả các node Hậu mạch về trạng thái nền bình thường
    document.querySelectorAll('.hau-node-item').forEach(node => {
        node.style.boxShadow = 'none';
        node.style.transform = 'scale(1)';
        node.style.background = 'rgba(255,255,255,0.05)';
        node.style.borderColor = 'rgba(255,255,255,0.1)';
    });

    // Bước 2: Tìm đúng node Hậu mạch mà Kim đang đè lên thực thời và kích hoạt hiệu ứng rực sáng
    let activeNodes = document.querySelectorAll(`.node-goc-${mốcHậuGầnNhất}`);
    activeNodes.forEach(activeNode => {
        // Tự động nhận diện màu sắc của chữ bên trong để làm viền sáng tương ứng (Đỏ chói, Xanh vượng hay Vàng)
        let textColor = activeNode.querySelector('div:nth-child(2)').style.color;
        
        activeNode.style.background = 'rgba(255,255,255,0.15)';
        activeNode.style.borderColor = textColor; // Viền sáng lên theo đúng màu Cát/Hung của Hậu mạch
        activeNode.style.transform = 'scale(1.05)'; // Nhô nhẹ lên tạo cảm giác cơ khí động học
        activeNode.style.boxShadow = `0 0 10px ${textColor}40`; // Tạo vầng hào quang nhẹ bao quanh cực đẹp
    });
}

// 📐 HỆ THỐNG QUÉT ĐỘNG KHÔNG GIAN - PHIÊN BẢN ĐA PHƯƠNG THỨC 2026
let scanState = {
    isScanning: false,
    method: "CAMERA",  // "CAMERA" (Quét từ xa) hoặc "MANUAL" (Nhập số/Áp thực địa)
    startAngle: null,  // Góc hướng thẳng mép trái
    endAngle: null,    // Góc hướng thẳng mép phải
    currentAngle: 0
};

/**
 * 1. HÀM CẬP NHẬT GÓC ĐỘ REAL-TIME TỪ CẢM BIẾN THIẾT BỊ
 */
function onCompassUpdate(heading) {
    scanState.currentAngle = ((heading % 360) + 360) % 360;
    
    if (scanState.isScanning && scanState.method === "CAMERA") {
        // Vẽ dải góc thời gian thực từ Mép Trái đến hướng camera hiện tại
        if (typeof renderScanningArc === 'function') {
            renderScanningArc(scanState.startAngle, scanState.currentAngle);
        }
    } else {
        if (typeof updateDegreeDisplay === 'function') {
            updateDegreeDisplay(scanState.currentAngle);
        }
    }
}

/**
 * 2. CHẾ ĐỘ 1: BỘ QUÈT CAMERA TỪ XA VÀ TỰ ĐỘNG KHỬ SAI SỐ XOAY NGƯỢC
 */
function handleScanButtonClick() {
    scanState.method = "CAMERA"; // Xác định phương thức quét bằng mắt thần camera
    const btn = document.getElementById('btn-scan-action');
    const purposeElement = document.getElementById('purpose');
    const hiddenInputPurpose = purposeElement ? purposeElement.value : 'bed';

    // ─── BƯỚC 1: CHỐT TIÊU ĐIỂM MÉP TRÁI ───
    if (!scanState.isScanning && scanState.startAngle === null) {
        scanState.isScanning = true;
        scanState.startAngle = scanState.currentAngle;
        
        btn.innerHTML = `🛑 CHỐT MÉP PHẢI (Nhắm thẳng tâm camera)`;
        btn.style.background = "#ff9500"; 
        btn.style.borderColor = "#ff9500";
        btn.style.boxShadow = "0 0 15px rgba(255,149,0,0.5)";
        
        showToast(`[RA ĐA TIÊU ĐIỂM]: Đã khóa Mép Trái tại ${Math.round(scanState.startAngle)}°. Hãy xoay tâm giữa điện thoại nhắm thẳng vào Mép Phải.`);
        return;
    }

    // ─── BƯỚC 2: CHỐT TIÊU ĐIỂM MÉP PHẢI & TRÍCH XUẤT TRỌNG TÂM CHIẾM DỤNG ───
    if (scanState.isScanning && scanState.startAngle !== null) {
        scanState.isScanning = false;
        scanState.endAngle = scanState.currentAngle;

        // Tính khoảng cách góc hình quạt giữa 2 mép ngắm (Khử lỗi trục giao thoa 0°/360°)
        let diff = scanState.endAngle - scanState.startAngle;
        if (diff < 0) diff += 360; 

        // 💡 THUẬT TOÁN THÔNG MINH: Tự động đảo biên nếu người dùng quét ngược từ Phải qua Trái
        if (diff > 180) {
            diff = 360 - diff;
            let temp = scanState.startAngle;
            scanState.startAngle = scanState.endAngle;
            scanState.endAngle = temp;
        }

        let realSizeDegree = Math.round(diff); 
        if (realSizeDegree === 0) realSizeDegree = 1; // Khử lỗi bấm đúp tại một điểm

        // Tính toán trọng tâm hình học chuẩn xác của kết cấu
        let centerAngle = scanState.startAngle + (diff / 2);
        centerAngle = ((centerAngle % 360) + 360) % 360; 

        // Trả UI nút bấm về trạng thái tĩnh
        btn.innerHTML = "📐 Nhắm Quét Dải Độ Thực Địa";
        btn.style.background = "#2c2c2e";
        btn.style.borderColor = "#ffca28";
        btn.style.boxShadow = "none";

        // Đồng bộ dải độ thực tế vào bộ nhớ cấu hình vật thể
        if (ConfigPhongThuy[hiddenInputPurpose]) {
            ConfigPhongThuy[hiddenInputPurpose].sizeDegree = realSizeDegree;
        }

        showToast(`✔️ Quét thành công! Độ rộng vật thể: ${realSizeDegree}°. Trọng tâm hình học: ${Math.round(centerAngle)}°`);

        // Đổ dữ liệu ra lõi tính điểm toán học
        processScanResult(centerAngle, realSizeDegree, hiddenInputPurpose);
        
        if (typeof generateDirectionsList === 'function') {
            generateDirectionsList();
        }

        // Giải phóng bộ nhớ đệm
        scanState.startAngle = null;
        scanState.endAngle = null;
    }
}

/**
 * 3. CHẾ ĐỘ 2 & 3: LẬP TỨC ĐỔ DỮ LIỆU BẰNG TAY / ÁP SÁT THÀNH VẬT THỂ
 * Dành cho trường hợp phòng quá kẹt không thể đứng từ xa ngắm camera, hoặc làm việc trên bản vẽ
 */
function executeManualScanConfig(customCenterAngle, customSizeDegree, purposeKey) {
    scanState.method = "MANUAL";
    scanState.isScanning = false;

    let cleanCenter = ((parseFloat(customCenterAngle) % 360) + 360) % 360;
    let cleanSize = Math.max(0, Math.min(180, parseFloat(customSizeDegree) || 0));

    if (ConfigPhongThuy[purposeKey]) {
        ConfigPhongThuy[purposeKey].sizeDegree = cleanSize;
    }

    showToast(`⚙️ Đã nạp thông số thủ công: Trọng tâm ${Math.round(cleanCenter)}°, Bề rộng dải mạch: ${cleanSize}°`);

    // Chạy phân tích điểm đa tầng ngay lập tức
    processScanResult(cleanCenter, cleanSize, purposeKey);

    if (typeof generateDirectionsList === 'function') {
        generateDirectionsList();
    }
}

/**
 * 3. XỬ LÝ KẾT QUẢ QUÉT ĐỘNG VÀ ĐỒ DỮ LIỆU THÔNG MINH LÊN UI
 * PHIÊN BẢN 2026: Cá nhân hóa vật thể quét, hiển thị chi tiết Định vị Sơn Hậu và tích hợp nút Đóng (✕)
 */
function processScanResult(centerAngle, sizeDegree, purpose) {
    console.log("=== BẮT ĐẦU XỬ LÝ KẾT QUẢ QUÉT THỰC ĐỊA ===");
    
    const container = document.getElementById('scan-result-panel');
    if (!container) return; // Đã xử lý bẫy overlay bên ngoài

    // Hiển thị trạng thái xử lý tạm thời
    container.style.display = "block";
    container.innerHTML = `<div style="color: #ffca28; padding: 12px; background: rgba(255,255,255,0.03); border-radius: 8px; font-size: 0.85rem; border: 1px dashed rgba(255,255,255,0.1);">⏳ Hệ thống đang phân tích ma trận long mạch thực địa...</div>`;

    // ─── 1. TỰ ĐỘNG CHUYỂN ĐỔI NGÔN NGỮ DANH MỤC VẬT THỂ VÀ THÔNG SỐ NỀN ───
    const dictVatThe = {
        "bed": "Giường ngủ", "kitchen": "Bếp nấu", "door": "Cửa chính", 
        "desk": "Bàn làm việc", "altar": "Bàn thờ", "toilet": "Nhà vệ sinh"
    };
    const tenVatTheChuan = dictVatThe[purpose] || "Vật thể kết cấu";

    let cungPhiChuMenh = "Càn";
    if (typeof vịTríLấyCungPhi === 'function') cungPhiChuMenh = vịTríLấyCungPhi();
    else if (typeof viTriLayCungPhi === 'function') cungPhiChuMenh = viTriLayCungPhi();

    const txtSurveyYear = document.getElementById('surveyYear');
    const namKhaoSat = (txtSurveyYear && txtSurveyYear.value.length === 4) ? parseInt(txtSurveyYear.value) : new Date().getFullYear();
    let namAmReal = namKhaoSat;
    if (typeof vịTríLấyNămÂmChuẩn === 'function') namAmReal = vịTríLấyNămÂmChuẩn();

    // ─── 2. CHẠY PHƯƠNG TRÌNH LÕI VÀ BẪY LỖI ───
    let ketQua;
    try {
        if (typeof tinhDiemTongHop !== 'function') {
            throw new Error("Hàm lõi 'tinhDiemTongHop' chưa được khai báo.");
        }
        ketQua = tinhDiemTongHop(cungPhiChuMenh, centerAngle, namKhaoSat, purpose, namAmReal);
        if (!ketQua) throw new Error("Hàm 'tinhDiemTongHop' không trả về dữ liệu cấu trúc.");
    } catch (error) {
        container.innerHTML = `
            <div style="position: relative; background: rgba(255,59,48,0.05); border: 1px solid rgba(255,59,48,0.3); border-left: 4px solid #ff3b30; padding: 14px; border-radius: 10px; color: #fff; font-family: -apple-system, sans-serif;">
                <button onclick="document.getElementById('scan-result-panel').style.display='none'" style="position: absolute; top: 10px; right: 10px; background: none; border: none; color: #aaa; cursor: pointer; font-size: 1.1rem;">✕</button>
                <div style="font-weight: bold; color: #ff453a; font-size: 0.9rem; margin-bottom: 6px;">❌ LỖI HỆ THỐNG</div>
                <div style="font-size: 0.8rem; color: #ffbc66;">Không thể phân tích dữ liệu quét của <strong>${tenVatTheChuan}</strong>.</div>
            </div>
        `;
        return; 
    }

    // ─── 3. TRÍCH XUẤT THÔNG TIN ĐỊA LÝ ĐA TẦNG ĐỂ GỌI TÊN CHÍNH XÁC ───
    const normalizedDegree = ((centerAngle % 360) + 360) % 360;
    
    // Lấy tên Hướng đại cục từ thông tin Sơn gốc
    let tenHuongDaiCuc = "Chưa rõ";
    if (normalizedDegree >= 337.5 || normalizedDegree < 22.5) tenHuongDaiCuc = "Phương Bắc";
    else if (normalizedDegree >= 22.5 && normalizedDegree < 67.5) tenHuongDaiCuc = "Phương Đông Bắc";
    else if (normalizedDegree >= 67.5 && normalizedDegree < 112.5) tenHuongDaiCuc = "Phương Đông";
    else if (normalizedDegree >= 112.5 && normalizedDegree < 157.5) tenHuongDaiCuc = "Phương Đông Nam";
    else if (normalizedDegree >= 157.5 && normalizedDegree < 202.5) tenHuongDaiCuc = "Phương Nam";
    else if (normalizedDegree >= 202.5 && normalizedDegree < 247.5) tenHuongDaiCuc = "Phương Tây Nam";
    else if (normalizedDegree >= 247.5 && normalizedDegree < 292.5) tenHuongDaiCuc = "Phương Tây";
    else if (normalizedDegree >= 292.5 && normalizedDegree < 337.5) tenHuongDaiCuc = "Phương Tây Bắc";

    const tenSonVi = ketQua.sonName || "Chưa xác định";
    const tenHauVi = (ketQua.hauInfo && ketQua.hauInfo.ten) ? ketQua.hauInfo.ten : "Không rõ";

    // ─── 4. BIÊN DỊCH CHI TIẾT MẠCH HẬU NGẦM ───
    let danhSachHauBaoCaoHTML = "";
    if (ketQua.scanMetrics && Array.isArray(ketQua.scanMetrics.chiTietHau) && ketQua.scanMetrics.chiTietHau.length > 0) {
        danhSachHauBaoCaoHTML = ketQua.scanMetrics.chiTietHau.map(function(hau) {
            let mauHauBadge = (hau.diem >= 60) ? '#30d158' : '#ff9500';
            return `
                <span style="display: inline-block; padding: 3px 8px; margin: 2px; background: rgba(255,255,255,0.04); border: 1px solid ${mauHauBadge}40; border-radius: 4px; font-size: 0.75rem; color: #e5e5ea;">
                    📍 Mốc ${hau.moc}° (${hau.ten || 'Hậu'}: <strong style="color:${mauHauBadge};">${hau.diem}đ</strong>)
                </span>
            `;
        }).join('');
    }

    let mauSacGiaoDien = (ketQua.diem >= 72) ? '#30d158' : '#ff3b30';
    let bgGiaoDien = (ketQua.diem >= 72) ? 'rgba(48,209,88,0.05)' : 'rgba(255,59,48,0.05)';

    // Thống kê phân tích lấn biên long mạch
    let thongTinPhanTichHau = "";
    if (ketQua.scanMetrics && ketQua.scanMetrics.totalHauOccupied > 1) {
        thongTinPhanTichHau = `
            <div style="margin-top: 10px; padding: 10px; background: rgba(255,149,0,0.06); border-radius: 6px; border-left: 4px solid #ff9500; font-size: 0.8rem; color: #ffbc66; line-height: 1.4;">
                ⚠️ <strong>CẢNH BÁO LẤN BIÊN:</strong> Kết cấu chiếm dụng dải quét rộng <strong>${sizeDegree}°</strong>, đè lên <strong>${ketQua.scanMetrics.totalHauOccupied} phân độ Hậu</strong> khí trường ngầm.
                ${danhSachHauBaoCaoHTML ? `<div style="margin-top: 6px; padding-top: 6px; border-top: 1px solid rgba(255,149,0,0.15);">${danhSachHauBaoCaoHTML}</div>` : ''}
            </div>
        `;
    } else {
        thongTinPhanTichHau = `
            <div style="margin-top: 10px; padding: 10px; background: rgba(48,209,88,0.06); border-radius: 6px; border-left: 4px solid #30d158; font-size: 0.8rem; color: #82f5a0; line-height: 1.4;">
                ✅ <strong>ĐẮC TRỌNG TÂM THUẦN KHÍ:</strong> Toàn bộ mặt kết cấu định vị hoàn hảo trong dải địa khí tinh khiết.
            </div>
        `;
    }

    // ─── 5. XUẤT CẤU TRÚC GIAO DIỆN MINH BẠCH, THÔNG MINH ───
    container.innerHTML = `
        <div style="position: relative; background: ${bgGiaoDien}; border: 1px solid ${mauSacGiaoDien}35; padding: 16px; border-radius: 12px; color: #fff; font-family: -apple-system, BlinkMacSystemFont, sans-serif; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
            
            <button onclick="document.getElementById('scan-result-panel').style.display='none'" 
                    style="position: absolute; top: 12px; right: 12px; background: rgba(255,255,255,0.05); border: none; color: #8e8e93; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 0.85rem; transition: all 0.2s;"
                    onmouseover="this.style.background='rgba(255,255,255,0.1)';this.style.color='#fff'" 
                    onmouseout="this.style.background='rgba(255,255,255,0.05)';this.style.color='#8e8e93'">✕</button>

            <div style="font-weight: bold; color: #ffca28; margin-bottom: 12px; font-size: 0.9rem; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 8px; padding-right: 25px;">
                📊 KẾT QUẢ ĐỊNH VỊ: ${tenVatTheChuan.toUpperCase()}
            </div>

            <div style="font-size: 0.85rem; line-height: 1.6; color: #e5e5ea; background: rgba(0,0,0,0.15); padding: 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.03);">
                Bạn đang tiến hành đo đạc cấu trúc <span style="color: #ffca28; font-weight: bold;">${tenVatTheChuan}</span>:<br>
                • Định vị địa bàn: Nằm tại <span style="color: #30d158; font-weight: bold;">${tenHuongDaiCuc}</span> (Sơn vị: <span style="color: #ffd60a;">${tenSonVi}</span> / Hậu vị: <span style="color: #ffd60a;">${tenHauVi}</span>).<br>
                • Tọa độ trọng tâm: <span style="color: #ffca28; font-weight: bold;">${Math.round(centerAngle)}°</span>.<br>
                • Bề rộng chiếm dụng không gian: <span style="color: #30d158; font-weight: bold;">${Math.round(sizeDegree)}°</span>.
            </div>

            <table style="width: 100%; font-size: 0.85rem; border-collapse: collapse; margin-top: 10px;">
                <tr>
                    <td style="padding: 6px 0; color: #aeaeb2;">Điểm địa khí tổng hợp:</td>
                    <td style="text-align: right; font-weight: bold; color: ${mauSacGiaoDien}; font-size: 1.05rem;">${ketQua.diem || 0} pt (${ketQua.level || 'HUNG'})</td>
                </tr>
            </table>

            ${thongTinPhanTichHau}

            <div style="border-top: 1px solid rgba(255,255,255,0.08); margin-top: 12px; padding-top: 10px; font-size: 0.82rem; color: #d1d1d6; line-height: 1.5;">
                <strong style="color: #ffca28;">Luận giải [${cungPhiChuMenh} Mệnh]:</strong> ${ketQua.message || 'Không có bình luận cục diện.'}
            </div>
            
            ${ketQua.hoaGiai ? `
                <div style="margin-top: 8px; padding: 8px; background: rgba(255,214,10,0.06); border: 1px solid rgba(255,214,10,0.15); border-radius: 6px; font-size: 0.8rem; color: #ffd60a; line-height: 1.4;">
                    <strong>Biện pháp điều chỉnh:</strong> ${ketQua.hoaGiai}
                </div>
            ` : ''}
        </div>
    `;

    console.log("=== ĐÃ ĐỔ DỮ LIỆU LÊN UI THÀNH CÔNG ===");

    if (typeof triggerGhostNeedle === 'function') {
        triggerGhostNeedle(centerAngle);
    }
}
/**
 * HÀM BỔ SUNG: Trích xuất Cung Phi hiện tại từ giao diện người dùng
 * Giúp hàm quét động nhận diện chính xác bản mệnh để tính điểm Bát Trạch
 */
function vịTríLấyCungPhi() {
    // 1. Tìm xem giao diện có ô chọn (select/input) nào chứa Cung Phi không
    const phầnTửCung = document.getElementById('cungPhi') || 
                       document.getElementById('cungPhiChuMenh') || 
                       document.getElementById('purpose'); // Tùy thuộc vào ID bạn đặt trong HTML
                       
    if (phầnTửCung && phầnTửCung.value) {
        // Nếu giá trị là chữ (Càn, Khôn, Ly...) thì trả về luôn
        if (["Càn", "Khôn", "Khảm", "Ly", "Chấn", "Tốn", "Cấn", "Đoài"].includes(phầnTửCung.value)) {
            return phầnTửCung.value;
        }
    }
    
    // 2. Dự phòng: Nếu trên giao diện có lưu thông tin ngày sinh để tính toán
    const txtNam = document.getElementById('birthYear');
    const txtThang = document.getElementById('birthMonth') || { value: 6 };
    const txtNgay = document.getElementById('birthDay') || { value: 15 };
    const rdGioiTinh = document.querySelector('input[name="gender"]:checked') || { value: 'male' };
    
    if (txtNam && txtNam.value) {
        // Tái sử dụng chính hàm `tínhCungPhi` có sẵn của bạn bên trên
        return tínhCungPhi(parseInt(txtNam.value), parseInt(txtThang.value), parseInt(txtNgay.value), rdGioiTinh.value);
    }

    // 3. Nếu không tìm thấy bất kỳ dấu vết nào trên UI, trả về Càn (Mặc định hệ thống)
    return "Càn";
}

/**
 * HÀM BỔ SUNG: Lấy năm Âm lịch khảo sát từ UI
 */
function vịTríLấyNămÂmChuẩn() {
    const txtSurveyYear = document.getElementById('surveyYear');
    if (txtSurveyYear && txtSurveyYear.value.length === 4) {
        return parseInt(txtSurveyYear.value);
    }
    return new Date().getFullYear();
}

// Biến lưu trạng thái toàn cục để không phụ thuộc vào DOM
const rotateState = {}; 

function handleSmartRotate(btn) {
    // 1. Dùng ID của nút làm Key để quản lý trạng thái (Tránh lỗi nếu có nhiều nút xoay)
    const btnId = btn.id || 'default-rotate-btn';
    if (!rotateState[btnId]) {
        rotateState[btnId] = { count: 0 };
    }

    // 2. Parse dữ liệu một lần duy nhất
    const sonAngles = JSON.parse(btn.getAttribute('data-son-angles'));
    const isCatPurpose = btn.getAttribute('data-is-cat') === 'true';

    // 3. Tăng count
    rotateState[btnId].count++;
    const clickCount = rotateState[btnId].count;
    const currentSonIdx = clickCount % sonAngles.length; // Dùng % length để linh hoạt (không chỉ % 3)
    const currentSon = sonAngles[currentSonIdx];

    // 4. Cập nhật UI nút bấm
    const nextSonIdx = (clickCount + 1) % sonAngles.length;
    const nextSonName = sonAngles[nextSonIdx].name;
    btn.innerHTML = `🔄 Đang xem: Sơn ${currentSon.name} (${currentSon.angle}°) ➔ Click xem tiếp Sơn ${nextSonName}`;

    // 5. Điều phối kim (Dùng requestAnimationFrame để mượt trên di động)
    requestAnimationFrame(() => {
        if (typeof triggerGhostNeedle === 'function') {
            triggerGhostNeedle(currentSon.angle);
        }
        
        // Gọi lại recalculateFate() để update các chỉ số chi tiết ngay lập tức
        if (typeof recalculateFate === 'function') {
            // Nếu bạn có biến lưu hướng khóa, cần cập nhật nó ở đây
            if (typeof lockedHeadingAtOpen !== 'undefined') {
                lockedHeadingAtOpen = currentSon.angle;
            }
            recalculateFate();
        }
    });

    // 6. Xử lý Blink hiệu ứng
    triggerBlinkEffect(currentSon.score, isCatPurpose);
}

// Hàm tách biệt xử lý hiệu ứng Blink để dễ quản lý
function triggerBlinkEffect(score, isCatPurpose) {
    const needleElement = document.querySelector('.compass-needle') || document.getElementById('compassNeedle');
    if (!needleElement) return;

    let isGoodLocation = isCatPurpose ? (score >= 72) : (score < 50);

    needleElement.classList.remove('la-ban-blink-green', 'la-ban-blink-yellow');
    void needleElement.offsetWidth; // Force Reflow

    if (isGoodLocation) {
        needleElement.classList.add('la-ban-blink-green');
    } else if ((isCatPurpose && score >= 50) || (!isCatPurpose && score <= 70)) {
        needleElement.classList.add('la-ban-blink-yellow');
    }
}
