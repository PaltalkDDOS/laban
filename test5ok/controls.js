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
    // Trục chuẩn phong thủy chính tông: Năm 2024 sao Thất Xích nhập Trung Cung
    let diff = (year - 2024) % 9;
    if (diff < 0) diff += 9;
    
    // Thuật toán phi tinh nghịch hành của Niên Tinh quản cục
    let saoNienDai = (7 - diff + 9) % 9;
    if (saoNienDai === 0) saoNienDai = 9;
    
    // Thuật toán tìm vị trí Ngũ Hoàng Đại Sát đóng cung (Thuận hành tìm phương vị)
    // Năm 2024 Ngũ Hoàng tại Tây, 2025 tại Đông Bắc, 2026 tại Nam...
    const mapNguHoangQuyLuat = ["Tây", "Đông Bắc", "Nam", "Bắc", "Tây Nam", "Đông", "Đông Nam", "Trung Cung", "Tây Bắc"];
    let indexNguHoang = (diff % 9 + 9) % 9;
    const viTriNguHoangNamDo = mapNguHoangQuyLuat[indexNguHoang];

    const info = {
        1: "Nhất Bạch (Đại Cát - Vượng trí tuệ, tài lộc phát đạt)",
        2: "Nhị Hắc (Đại Hung - Tà khí bệnh tật, suy kiệt sức khỏe)",
        3: "Tam Bích (Hung nhẹ - Phát sinh thị phi, tranh chấp lời nói)",
        4: "Tứ Lục (Cát - Vượng đường văn xương, học hành hanh thông)",
        5: "Ngũ Hoàng (Đại Hung - Sát khí tối thượng, tuyệt đối kỵ động thổ)",
        6: "Lục Bạch (Đại Cát - Vượng quyền lực, quý nhân đại trợ)",
        7: "Thất Xích (Hung - Hao tổn tài sản, đề phòng tiểu nhân quấy phá)",
        8: "Bát Bạch (Cát Tinh - Khí trường tích lũy tài lộc ổn định)",
        9: "Cửu Tử (Đại Cát - Đương vận tôn quý, hỷ sự lâm môn liên miên)"
    };

    // Trả về chuỗi định dạng chuẩn kết hợp vị trí Ngũ Hoàng để mạch logic không đứt gãy
    return `Năm ${year}: Sao Chiếu Mệnh ${saoNienDai} - ${info[saoNienDai]} | Ngũ Hoàng Đáo Cung: ${viTriNguHoangNamDo}`;
}

// ====================== HÀM RIÊNG CẢNH BÁO NGŨ HOÀNG THEO TRỤC THỜI GIAN ĐỘNG ======================
function getNguHoangAlert(currentHuong) {
    // Thay vì lấy năm tĩnh của máy tính, hệ thống tự động bám theo năm khảo sát người dùng nhập
    const yearInput = document.getElementById('birthYear')?.value;
    const namKhaoSat = (yearInput && yearInput.length === 4) ? parseInt(yearInput) : new Date().getFullYear();
    
    const mapNguHoang = ["Tây", "Đông Bắc", "Nam", "Bắc", "Tây Nam", "Đông", "Đông Nam", "Trung Cung", "Tây Bắc"];
    let offset = ((namKhaoSat - 2024) % 9 + 9) % 9;
    const viTriNguHoang = mapNguHoang[offset];

    if (currentHuong && currentHuong.toLowerCase() === viTriNguHoang.toLowerCase()) {
        return `⚠️ CẢNH BÁO ĐẠI SÁT: Phương vị ${currentHuong} trong niên độ ${namKhaoSat} phạm phải NGŨ HOÀNG ĐẠI SÁT. Tuyệt đối bất khả động thổ, khoan đục sâu để tránh kích động tà khí.`;
    }

    if (viTriNguHoang === "Trung Cung") {
        return `⚠️ LƯU NIÊN CHIẾU CỤC: Niên độ ${namKhaoSat} Ngũ Hoàng nhập Trung Cung. Tránh cải tạo, đập phá khu vực lõi tâm trạch của ngôi nhà.`;
    }
    return "";
}

// 🔥 FIX TRIỆT ĐỂ HÀM KIỂM TRA HƯỚNG THEO ĐÚNG BIÊN ĐỘ 24 SƠN THỰC ĐỊA (15 GÓC ĐỘ)
function getHanhByHeading(heading) {
    if (heading === null || heading === undefined) return "Chưa xác định";
    let normalized = ((heading % 360) + 360) % 360;

    // Quét chính xác tọa độ theo đúng đồ hình la bàn góc hẹp
    if (normalized >= 337.5 || normalized < 22.5) return "Thủy"; // Nhâm - Tý - Quý
    if (normalized >= 22.5 && normalized < 67.5) return "Thổ";   // Sửu - Cấn - Dần
    if (normalized >= 67.5 && normalized < 112.5) return "Mộc";  // Giáp - Mão - Ất
    if (normalized >= 112.5 && normalized < 157.5) return "Mộc"; // Thìn - Tốn - Tỵ
    if (normalized >= 157.5 && normalized < 202.5) return "Hỏa"; // Bính - Ngọ - Đinh
    if (normalized >= 202.5 && normalized < 247.5) return "Thổ"; // Mùi - Khôn - Thân
    if (normalized >= 247.5 && normalized < 292.5) return "Kim"; // Canh - Dậu - Tân
    if (normalized >= 292.5 && normalized < 337.5) return "Kim"; // Tuất - Càn - Hợi
    return "Thổ";
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
    // Ép kiểu dữ liệu sang số nguyên để tránh lỗi so sánh chuỗi ký tự
    const d = parseInt(day);
    const m = parseInt(month);
    const y = parseInt(year);

    if (isNaN(d) || isNaN(m) || isNaN(y)) return false;
    if (m < 1 || m > 12) return false;
    
    // Thuật toán ma trận năm nhuận thiên văn chính xác tuyệt đối cho mọi niên đại tương lai
    let listDaysInMonth = [
        31, (y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0)) ? 29 : 28, 
        31, 30, 31, 30, 31, 31, 30, 31, 30, 31
    ];
    
    if (d < 1 || d > listDaysInMonth[m - 1]) return false;
    
    // =========================================================================
    // 🚀 ĐỘC QUYỀN VẬN 9: PHÁ BỎ BIÊN ĐỘ TĨNH - HỖ TRỢ ĐA NIÊN ĐẠI VÔ HẠN (SUỐT ĐỜI)
    // =========================================================================
    // Hạ cấp chốt chặn tối thiểu xuống năm 1800 (để luận cả tiền nhân) và mở toang trần trên đến vô cực
    if (y < 1800) {
        if (typeof showCustomAlert === 'function') {
            showCustomAlert(`Niên đại lịch pháp năm ${y} quá sâu. Hệ thống tự động chuyển sang cấu trúc thuật toán mô phỏng từ xa!`, "⚠️ Cảnh Báo Thiên Di");
        }
        return true; 
    }

    // Trả về true cho tất cả các năm từ 1800 trở đi (2026, 2050, 2099, 3000...) không giới hạn mốc chặn
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
    const keyHau = (Math.round(normalized / 5) * 5) % 360;
    const hau = Data72Hau[keyHau.toString()] || { ten: "Xung Không", chatLuong: "Bình Hòa", diem: 60, ynghia: "Khí trường chuyển dịch luân hồi.", giaiphap: "Thiết kế phối hợp trạch pháp." };

    let result = {
        ten: hau.ten, chatLuong: hau.chatLuong, ynghia: hau.ynghia,
        diem: Number(hau.diem) || 60, giaiphap: hau.giaiphap, emoji: "🟡"
    };
    if (result.chatLuong.includes("Cát")) result.emoji = "🟢";
    if (result.chatLuong.includes("Hung")) result.emoji = "🔴";
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
// 🚀 NĂNG CẤP HÀM HIỂN THỊ DANH SÁCH GỢI Ý - BỘ LỌC CHI TIẾT SƠN HẬU THÔNG MINH
// =========================================================================
function generateDirectionsList() {
    const mucDich = document.getElementById('purpose').value;
    const config = ConfigPhongThuy[mucDich];
    
    if (!mucDich || !config) {
        if (typeof directionsContainer !== 'undefined') {
            directionsContainer.innerHTML = `<div style='font-size:0.8rem;color:#8a8a8f;text-align:center;padding:15px;'>Chọn mục đích Khí Cục hoặc Trấn Sát để hiển thị gợi ý tương ứng</div>`;
        }
        return;
    }

    const isCatPurpose = config.isCat; 
    let listDirections = [];
    
    const dayStr = document.getElementById('birthDay').value;
    const monthStr = document.getElementById('monthStr')?.value || document.getElementById('birthMonth').value;
    const yearStr = document.getElementById('yearStr')?.value || document.getElementById('birthYear').value;

    const txtSurveyYear = document.getElementById('surveyYear');
    const namKhaoSatThucTe = (txtSurveyYear && txtSurveyYear.value.length === 4) ? parseInt(txtSurveyYear.value) : new Date().getFullYear();

    let namAmMệnhChủ = new Date().getFullYear();
    if (dayStr && monthStr && yearStr && yearStr.length === 4) {
        namAmMệnhChủ = (parseInt(monthStr) < 2 || (parseInt(monthStr) === 2 && parseInt(dayStr) < 5)) ? parseInt(yearStr) - 1 : parseInt(yearStr);
    }

    directionMeta.forEach(dir => {
        const cungTrạch = bátTrạchMap[chủMệnh]?.[dir.code] || "Khác";
        const tongHopDir = tinhDiemTongHop(chủMệnh, dir.angle, namKhaoSatThucTe, mucDich, namAmMệnhChủ);
        const hauInfo = getCurrentHauInfo(dir.angle);

        listDirections.push({
            ...dir, cungTrạch: cungTrạch, diemTongHop: tongHopDir.diem, level: tongHopDir.level, hau: hauInfo, priority: tongHopDir.diem 
        });
    });

    listDirections.sort((a, b) => b.priority - a.priority);
    listPanelTitle.innerText = `Gợi ý vị trí Vận 9: ${config.title}`;
    directionsContainer.innerHTML = "";

    listDirections.forEach(item => {
        const sonGroup = getSonGroupForDirection(item.code);
        let cóSơnVịBịHungNguyHiem = false;

        sonGroup.forEach(son => {
            const dataSon = MaTranMinhChau[chủMệnh] ? MaTranMinhChau[chủMệnh][son] : null;
            const scoreSon = dataSon ? dataSon.diem : 70;
            if (scoreSon < 50) {
                cóSơnVịBịHungNguyHiem = true;
            }
        });

        // ─── SỬA LỖI TỬ HUYỆT: PHÂN PHỐI MÀU SẮC KHUNG ĐỘNG CHUẨN XÁC ───
        let colorStyle = '#ff3b30';
        let bgKhung = 'rgba(255,59,48,0.03)';
        let statusText = "";

        if (isCatPurpose) {
            if (item.diemTongHop >= 72) {
                colorStyle = cóSơnVịBịHungNguyHiem ? '#ff9f0a' : '#30d158';
                bgKhung = cóSơnVịBịHungNguyHiem ? 'rgba(255,159,10,0.04)' : 'rgba(48,209,88,0.03)';
                statusText = cóSơnVịBịHungNguyHiem ? 
                    `⚠️ HƯỚNG CÁT NHƯNG PHẠM SƠN VỊ XUNG KHẮC (CẦN XOAY KIM NÉ GÓC ĐỘ ĐIỂM THẤP)` : 
                    `🟢 ĐÓN CÁT KHÍ TOÀN VẸN (HƯỚNG ĐẠI CÁT ĐẮC VỊ CHÍNH TÔNG)`;
            } else {
                statusText = '❌ PHẠM HUNG PHƯƠNG TOÀN CỤC (ĐẠI KỴ LẬP HƯỚNG BẢN MỆNH)';
            }
        } else {
            if (item.diemTongHop >= 72) {
                colorStyle = '#30d158';
                bgKhung = 'rgba(48,209,88,0.03)';
                statusText = '🏆 TỌA HUNG TRẤN SÁT ĐẮC CÁCH (VỊ TRÍ PHÂN BỔ HOÀN HẢO ĐỂ TIÊU SÁT)';
            } else {
                colorStyle = '#ff3b30';
                bgKhung = 'rgba(255,59,48,0.03)';
                statusText = '⚠️ SAI VỊ TRÍ: ĐẶT ĐÈ CÁT PHƯƠNG TIÊU HAO PHÚC LỘC, Ô NHIỄM TRẠCH PHÁP';
            }
        }

        // ─── BIỆN GIẢI 24 SƠN ĐẠO ĐẢO CHIỀU ĐỘNG CHUYÊN SÂU ───
        let sonHTML = "";
        sonGroup.forEach((son, index) => {
            const dataSon = MaTranMinhChau[chủMệnh] ? MaTranMinhChau[chủMệnh][son] : null;
            let score = dataSon ? dataSon.diem : 70;
            let nhom = dataSon ? dataSon.nhom : "Bình Hòa";
            
            let titleInfo = `Sơn vị ${son} [Mức năng lượng gốc: ${score}%]`;
            let textInfo = "";
            let solInfo = "";
            let sonColor = "#dfb76c";

            if (isCatPurpose) {
                sonColor = score >= 72 ? "#30d158" : (score >= 50 ? "#dfb76c" : "#ff3b30");
                if (score >= 72) {
                    textInfo = `Sơn vị ${son} thuộc cung cát tính ${nhom} đạt hiệu suất năng lượng cát tường rất cao (${score}%). Thầy phong thủy khuyên bạn nên đặt tâm của kết cấu nạp khí (Bàn thờ, Cửa chính, Đầu giường) tại tọa độ góc này nhằm thu hút tài lộc, gia đạo hưng thịnh.`;
                    solInfo = "Duy trì vị trí lập cực sạch sẽ, thông thoáng để sinh khí vận hành liên tục.";
                } else {
                    textInfo = `CẢNH BÁO TỬ HUYỆT: Sơn vị ${son} phạm vào vòng hung sát của cung ${nhom} khiến năng lượng sụt giảm nghiêm trọng xuống mức ${score}%. Nếu đặt cấu trúc cát vào đây, hung khí tiềm ẩn sẽ xói mòn sinh khí bản mệnh, gây bất an tai ương.`;
                    solInfo = "Biện pháp: Dịch chuyển nhẹ kết cấu kiến trúc sang các sơn vị báo màu xanh bên cạnh hoặc ứng dụng la bàn vi phân.";
                }
            } else {
                if (score < 50) {
                    sonColor = "#30d158"; 
                    titleInfo = `Sơn vị ${son} [Trấn Sát Đắc Cách - Đại Cát]`;
                    textInfo = `ĐẮC CÁCH DIỆU PHÁP: Sơn vị ${son} bản chất nền đất mang sát khí nguy hiểm thuộc cung ${nhom} (Điểm gốc cực thấp: ${score}%). Khi đặt thiết bị xả uế (Toilet, Bếp) đè lên đây, uế khí sẽ phát huy công năng 'Lấy độc trị độc', thiêu rụi hoàn toàn sát khí của mạch đất ngầm, biến hung thành cát cục!`;
                    solInfo = "Kết cấu phân bổ chuẩn mực, không cần bổ sung vật phẩm hóa giải.";
                } else {
                    sonColor = "#ff3b30"; 
                    titleInfo = `Sơn vị ${son} [Phạm Kỵ Tiêu Hao - Hung Cục]`;
                    textInfo = `ĐẠI KỴ TRẠCH PHÁP: Sơn vị ${son} vốn là trục long mạch vượng khí vẹn toàn đạt tới ${score}% điểm thuộc cung cát ${nhom}. Tuyệt đối kỵ đặt kết cấu uế khí đè lên đây, dòng xả thải uế sẽ làm ô nhiễm toàn bộ mạch sinh khí nuôi dưỡng ngôi nhà, khiến tài lộc tiêu hao.`;
                    solInfo = "Khuyên gia chủ chủ động chuyển đổi vị trí thiết bị xả uế sang các dải Sơn vị báo màu xanh kế cạnh.";
                }
            }
            
            // Xử lý loại bỏ dấu nháy đơn để tránh vỡ chuỗi onclick inline HTML
            const safeTitle = titleInfo.replace(/'/g, "\\'").replace(/"/g, '&quot;');
            const safeText = textInfo.replace(/'/g, "\\'").replace(/"/g, '&quot;');
            const safeSol = solInfo.replace(/'/g, "\\'").replace(/"/g, '&quot;');

            sonHTML += `<span style="display:inline-block; white-space:nowrap; cursor:pointer;" onclick="showExplanation('${safeTitle}', '${safeText}', '${safeSol}')">` +
                       `<span style="color:${sonColor}; font-weight:700;">${son}</span>` +
                       `<span style="color:#ffffff;"> (${score}%)</span></span>`;
            
            if (index < sonGroup.length - 1) sonHTML += ` • `;
        });

        // ─── TÍNH TOÁN CẤU TRÚC 3 HẬU MẠCH TẦNG TRÊN/DƯỚI CHUẨN PHONG THỦY ───
        let mốcTâm = item.angle;
        let mốcTrái = (mốcTâm - 5 + 360) % 360;
        let mốcPhải = (mốcTâm + 5) % 360;

        let hauInfoTrái = Data72Hau[Math.round(mốcTrái / 5) * 5] || { ten: "Hậu Trái", chatLuong: "Bình Hòa", diem: 60, ynghia: "Mạch khí bình hòa ổn định.", giaiphap: "Giữ sạch sẽ." };
        let hauInfoTâm  = Data72Hau[Math.round(mốcTâm / 5) * 5] || { ten: "Hậu Tâm", chatLuong: "Bình Hòa", diem: 60, ynghia: "Mạch khí bình hòa ổn định.", giaiphap: "Giữ sạch sẽ." };
        // ĐÃ SỬA LỖI ĐÁNH MÁY: đổi 'tile' thành 'ten' để đồng bộ dữ liệu
        let hauInfoPhải = Data72Hau[Math.round(mốcPhải / 5) * 5] || { ten: "Hậu Phải", chatLuong: "Bình Hòa", diem: 60, ynghia: "Mạch khí bình hòa ổn định.", giaiphap: "Giữ sạch sẽ." };

        const getHauColor = (cl) => cl.includes('Cát') ? '#30d158' : (cl.includes('Hung') ? '#ff3b30' : '#dfb76c');
        
        const getHauExplanation = (hauObj, isCat) => {
            let lyGiai = `Phân đoạn Hậu mạch đất ngầm: ${hauObj.ten} (Chỉ số năng lượng Địa khí đạt ${hauObj.diem}pt - Trạng thái: ${hauObj.chatLuong}).\\n\\n`;
            
            if (isCat) {
                if (hauObj.chatLuong.includes('Hung') || hauObj.chatLuong.includes('Không Vong') || hauObj.chatLuong.includes('Sai Thác')) {
                    lyGiai += `⚠️ LÝ GIẢI SỰ SỤT GIẢM NĂNG LƯỢNG: Mặc dù Sơn vị hướng lớn của bạn đang đạt điểm vượng thế, nhưng mạch khí 5 độ ngầm tại vị trí này lại dính cung xấu hoặc lằn ranh hỗn loạn từ trường. Sát khí ngầm này giống như vết sâu đục từ dưới đất lên, kéo chìm hiệu suất năng lượng tổng hòa của toàn bộ kết cấu vật thể đè lên nó.`;
                } else {
                    lyGiai += `🌟 LÝ GIẢI SỰ GIA TRÌ NĂNG LƯỢNG: Vùng mạch địa khí này vô cùng thuần khiết. Sự cộng hưởng đồng nhất giữa Nhân mệnh vượng cát của Sơn vị và Địa khí Tiến khí của Hậu mạch tạo ra một Siêu Gốc trường khí vững chãi, bảo vệ công năng khỏi các tác động xấu của sao hạn lưu niên.`;
                }
            } else {
                if (hauObj.chatLuong.includes('Hung') || hauObj.chatLuong.includes('Không Vong') || hauObj.chatLuong.includes('Sai Thác')) {
                    lyGiai += `🟢 GIẢI THÍCH CHUYÊN SÂU: Ô Hậu mạch này báo XANH vì mạch đất ngầm ở đây mang tính hung sát, hỗn loạn từ trường. Đặt thiết bị tiêu uế (Toilet, Bếp) đè trúng phân độ này sẽ bế khí sát, biến trục tử huyệt thành nơi xả bỏ tạp khí, làm sạch đại cục trường khí cho ngôi nhà.`;
                } else {
                    lyGiai += `⚠️ GIẢI THÍCH CHUYÊN SÂU: Ô Hậu mạch báo ĐỎ vì long mạch ngầm dưới đất tại phân độ hẹp này rất sạch và vượng khí. Tuyệt đối không đặt uế khí đè lên làm ô nhiễm nguồn mạch khí ngầm quý giá này.`;
                }
            }
            return lyGiai;
        };

        // Đảm bảo lấy đúng chữ đầu tiên của tên Hậu mạch (Ví dụ: "Mậu" từ "Mậu Tý")
        const tenTrái = hauInfoTrái.ten ? hauInfoTrái.ten.split(' ')[0] : "Hậu";
        const tenTâm = hauInfoTâm.ten ? hauInfoTâm.ten.split(' ')[0] : "Hậu";
        const tenPhải = hauInfoPhải.ten ? hauInfoPhải.ten.split(' ')[0] : "Hậu";

        // Đồng bộ màu sắc chữ trạng thái của Hậu mạch theo Tab tương ứng
        const txtColorTrái = isCatPurpose ? getHauColor(hauInfoTrái.chatLuong) : (hauInfoTrái.chatLuong.includes('Hung') || hauInfoTrái.chatLuong.includes('Không Vong') ? '#30d158' : '#ff3b30');
        const txtColorTâm = isCatPurpose ? getHauColor(hauInfoTâm.chatLuong) : (hauInfoTâm.chatLuong.includes('Hung') || hauInfoTâm.chatLuong.includes('Không Vong') ? '#30d158' : '#ff3b30');
        const txtColorPhải = isCatPurpose ? getHauColor(hauInfoPhải.chatLuong) : (hauInfoPhải.chatLuong.includes('Hung') || hauInfoPhải.chatLuong.includes('Không Vong') ? '#30d158' : '#ff3b30');

        const labelTrái = isCatPurpose ? hauInfoTrái.chatLuong.replace('Đại ', 'Đ.').replace('Tiểu ', 'T.') : (hauInfoTrái.chatLuong.includes('Hung') || hauInfoTrái.chatLuong.includes('Không Vong') ? 'ĐẮC VỊ' : 'KỴ ĐẶT');
        const labelTâm = isCatPurpose ? hauInfoTâm.chatLuong.replace('Đại ', 'Đ.').replace('Tiểu ', 'T.') : (hauInfoTâm.chatLuong.includes('Hung') || hauInfoTâm.chatLuong.includes('Không Vong') ? 'ĐẮC VỊ' : 'KỴ ĐẶT');
        const labelPhải = isCatPurpose ? hauInfoPhải.chatLuong.replace('Đại ', 'Đ.').replace('Tiểu ', 'T.') : (hauInfoPhải.chatLuong.includes('Hung') || hauInfoPhải.chatLuong.includes('Không Vong') ? 'ĐẮC VỊ' : 'KỴ ĐẶT');

        let html3HauMạch = `
            <div style="display: flex; gap: 6px; margin-top: 6px; width: 100%; box-sizing: border-box; font-family: sans-serif;">
                <div class="hau-node-item node-goc-${Math.round(mốcTrái / 5) * 5}" 
                     onclick="showExplanation('${hauInfoTrái.ten.replace(/'/g, "\\'")}', '${getHauExplanation(hauInfoTrái, isCatPurpose).replace(/'/g, "\\'")}', 'Yêu cầu tinh chỉnh kiến trúc: ${hauInfoTrái.giaiphap.replace(/'/g, "\\'")}')"
                     style="flex: 1; text-align: center; background: rgba(255,255,255,0.04); padding: 6px 4px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.08); cursor: pointer; transition: all 0.2s;">
                    <div style="font-size: 0.75rem; color: #fff; font-weight: 700; margin-bottom: 2px;">${tenTrái} (${Math.round(mốcTrái)}°)</div>
                    <div style="font-size: 0.7rem; color: ${txtColorTrái}; font-weight: bold; text-transform: uppercase; letter-spacing: 0.3px;">
                        ${labelTrái}
                    </div>
                </div>
                <div class="hau-node-item node-goc-${Math.round(mốcTâm / 5) * 5}" 
                     onclick="showExplanation('${hauInfoTâm.ten.replace(/'/g, "\\'")}', '${getHauExplanation(hauInfoTâm, isCatPurpose).replace(/'/g, "\\'")}', 'Yêu cầu tinh chỉnh kiến trúc: ${hauInfoTâm.giaiphap.replace(/'/g, "\\'")}')"
                     style="flex: 1; text-align: center; background: rgba(255,255,255,0.04); padding: 6px 4px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.08); cursor: pointer; transition: all 0.2s;">
                    <div style="font-size: 0.75rem; color: #fff; font-weight: 700; margin-bottom: 2px;">${tenTâm} (${Math.round(mốcTâm)}°)</div>
                    <div style="font-size: 0.7rem; color: ${txtColorTâm}; font-weight: bold; text-transform: uppercase; letter-spacing: 0.3px;">
                        ${labelTâm}
                    </div>
                </div>
                <div class="hau-node-item node-goc-${Math.round(mốcPhải / 5) * 5}" 
                     onclick="showExplanation('${hauInfoPhải.ten.replace(/'/g, "\\'")}', '${getHauExplanation(hauInfoPhải, isCatPurpose).replace(/'/g, "\\'")}', 'Yêu cầu tinh chỉnh kiến trúc: ${hauInfoPhải.giaiphap.replace(/'/g, "\\'")}')"
                     style="flex: 1; text-align: center; background: rgba(255,255,255,0.04); padding: 6px 4px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.08); cursor: pointer; transition: all 0.2s;">
                    <div style="font-size: 0.75rem; color: #fff; font-weight: 700; margin-bottom: 2px;">${tenPhải} (${Math.round(mốcPhải)}°)</div>
                    <div style="font-size: 0.7rem; color: ${txtColorPhải}; font-weight: bold; text-transform: uppercase; letter-spacing: 0.3px;">
                        ${labelPhải}
                    </div>
                </div>
            </div>
        `;

        const div = document.createElement('div');
        div.className = `direction-item`;
        div.style.cssText = `border-left:4px solid ${colorStyle}; background:${bgKhung}; margin-bottom:12px; padding:12px; border-radius:10px; width:100%; box-sizing:border-box; display:flex; flex-direction:column; gap:8px;`;
        
        div.innerHTML = `
            <div class="item-info" style="width:100%;">
                <div style="color:#fff; font-size:0.95rem; margin-bottom:6px; font-weight:bold; display:flex; justify-content:space-between; align-items:center;">
                    <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">
                        ${item.name} ➔ <span style="color:${colorStyle};">${item.cungTrạch}</span>
                    </span>
                    <span style="font-size:0.75rem; padding:2px 6px; border-radius:4px; font-weight:bold; background:${colorStyle === '#30d158' ? 'rgba(48,209,88,0.15)' : (colorStyle === '#ff9f0a' ? 'rgba(255,159,10,0.15)' : 'rgba(255,59,48,0.15)')}; color:${colorStyle}; border:1px solid ${colorStyle}; white-space:nowrap;">
                        ${item.diemTongHop}pt
                    </span>
                </div>
                
                <div style="margin-bottom:6px; font-size:0.8rem; overflow-x:auto;" class="no-scrollbar">
                    <span style="color:#dfb76c; font-weight:600;">24 SƠN VỊ:</span> ${sonHTML}
                </div>
                
                <div style="margin-bottom:4px;">
                    <span style="color:#dfb76c; font-size:0.8rem; font-weight:600;">72 HẬU ĐỊA MẠCH (DẢI PHÂN ĐỘ KHÍ TRƯỜNG):</span>
                    ${html3HauMạch}
                </div>
                
                <div style="color:${colorStyle}; font-size:0.85rem; font-weight:bold; padding-top:4px; line-height:1.4;">
                    ${statusText}
                </div>
            </div>
            <button class="btn-rotate" onclick="triggerGhostNeedle(${item.angle})" style="background:#222; color:var(--gold); border:1px solid var(--gold); padding:8px; border-radius:6px; font-weight:bold; cursor:pointer; width:100%; font-size:0.85rem; text-align:center; margin-top:4px;">Xoay thử la bàn số</button>
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
    let normalized = ((degree % 360) + 360) % 360;
    return SON_24_CONFIG.find(s => {
        if (s.min > s.max) return normalized >= s.min || normalized < s.max;
        return normalized >= s.min && normalized < s.max;
    }) || SON_24_CONFIG[0];
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
    
    // Xoay la bàn theo góc THỰC TẾ
    compass.style.transform = `rotate(${-trueHeading}deg)`;
    needle.style.transform = `rotate(0deg)`;
    compassSlider.value = currentHeading;

    // LẤY DỮ LIỆU ĐẦU VÀO ĐỘNG TỪ BIỂU MẪU KHẢO SÁT
    const dayStr = document.getElementById('birthDay').value;
    const monthStr = document.getElementById('birthMonth').value;
    const yearStr = document.getElementById('birthYear').value;
    const adviceBox = document.getElementById('pro-advice-box');
    const adviceContent = document.getElementById('advice-content');

    // =========================================================================
    // SỬA LỖI TRỤC THỜI GIAN: Phân định rạch ròi Năm Sinh và Năm Khảo Sát
    // =========================================================================
    // 1. Năm Khảo Sát (Niên Trạch) chạy động theo trục thời gian thực thực tế
    const txtSurveyYear = document.getElementById('surveyYear'); 
    const namKhaoSatThucTe = (txtSurveyYear && txtSurveyYear.value.length === 4) ? parseInt(txtSurveyYear.value) : new Date().getFullYear();

    // 2. TỰ ĐỘNG CHUẨN HÓA: Tính toán năm âm lịch của mệnh chủ dựa theo Tiết khí Lập Xuân
    let namAmMệnhChủ = new Date().getFullYear();
    if (dayStr && monthStr && yearStr && yearStr.length === 4) {
        const d = parseInt(dayStr);
        const m = parseInt(monthStr);
        const y = parseInt(yearStr);
        namAmMệnhChủ = (m < 2 || (m === 2 && d < 5)) ? y - 1 : y;
    }

    // TỰ ĐỘNG KHẮC PHỤC LỖI Racing-Condition: Đảm bảo có quẻ mệnh chạy nền không bị undefined
    let tinhChuMenh = (typeof chủMệnh !== 'undefined' && chủMệnh) ? chủMệnh : "Khảm";
    if (dayStr && monthStr && yearStr && yearStr.length === 4) {
        if (typeof tínhCungPhi === 'function') {
            tinhChuMenh = tínhCungPhi(parseInt(yearStr), parseInt(monthStr), parseInt(dayStr), document.getElementById('gender').value);
        }
    }

    // ==================== 1. XÁC ĐỊNH 8 CUNG ĐẠI CỤC (45°) ====================
    let currentCung = "";
    let currentCode = "";
    if (trueHeading >= 337.5 || trueHeading < 22.5) {
        currentCung = "KHẢM (BẮC)";
        currentCode = "N";
    } else if (trueHeading >= 22.5 && trueHeading < 67.5) {
        currentCung = "CẤN (ĐÔNG BẮC)";
        currentCode = "NE";
    } else if (trueHeading >= 67.5 && trueHeading < 112.5) {
        currentCung = "CHẤN (ĐÔNG)";
        currentCode = "E";
    } else if (trueHeading >= 112.5 && trueHeading < 157.5) {
        currentCung = "TỐN (ĐÔNG NAM)";
        currentCode = "SE";
    } else if (trueHeading >= 157.5 && trueHeading < 202.5) {
        currentCung = "LY (NAM)";
        currentCode = "S";
    } else if (trueHeading >= 202.5 && trueHeading < 247.5) {
        currentCung = "KHÔN (TÂY NAM)";
        currentCode = "SW";
    } else if (trueHeading >= 247.5 && trueHeading < 292.5) {
        currentCung = "ĐOÀI (TÂY)";
        currentCode = "W";
    } else if (trueHeading >= 292.5 && trueHeading < 337.5) {
        currentCung = "CÀN (TÂY BẮC)";
        currentCode = "NW";
    }

    // ==================== 2. TRÍCH XUẤT 24 SƠN (15°) + 72 HẬU (5°) ====================
    let gockim = (trueHeading % 360 + 360) % 360;
    let sơnHiệnTạiObj = SON_24_CONFIG.find(s => {
        if (s.min > s.max) return gockim >= s.min || gockim < s.max;
        return gockim >= s.min && gockim < s.max;
    }) || SON_24_CONFIG[0];
    let sơnHiệnTại = sơnHiệnTạiObj.name;

    const currentHauInfo = getCurrentHauInfo(trueHeading);
    const mụcĐích = document.getElementById('purpose').value;
    
    // ĐỒNG BỘ TOÁN PHÁP CHÍNH TÔNG: Truyền đầy đủ cả 5 tham số cốt lõi vào bộ xử lý tính điểm
    const tongHop = tinhDiemTongHop(tinhChuMenh, trueHeading, namKhaoSatThucTe, mụcĐích, namAmMệnhChủ);

    // Mốc màu hiển thị số điểm tổng hợp trên thanh la bàn đồng bộ với ngưỡng Đạt Cách 72pt
    let colorDiemRealtime = "#ff4444"; 
    if (tongHop.diem >= 72) {
        colorDiemRealtime = "#30d158"; 
    } else if (tongHop.diem >= 50) {
        colorDiemRealtime = "#ffd700"; 
    }

    // ==================== 3. KHO TÀNG PHÁP BẢO VẬT PHẨM ĐẦY ĐỦ 100% ====================
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
        elementBox.innerHTML = `<span class="element-badge" style="background: #3a3a3c;">Phương vị: ${phươngVịThiếtLập[currentCode]?.ngũHành || 'Không xác định'}</span>`;
        judgmentBox.innerText = "ĐO HƯỚNG CHÍNH XÁC";
        judgmentBox.className = "judgment-badge";
        judgmentBox.removeAttribute("style");
        judgmentBox.style.backgroundColor = "#222";
        judgmentBox.style.color = "var(--gold)";
        judgmentBox.style.border = "1px solid var(--gold)";
        detailBox.style.borderLeftColor = "var(--gold)";
        detailBox.innerHTML = `
            <span style="color:#ffffff;">Hệ thống đang chạy ở chế độ la bàn thực địa độ phân giải cao Vận 9.<br>
            Tọa độ: <span class="gold-text">${currentHeading}°</span> | Phương: <b>${currentCung}</b> | Sơn: <span style="color:var(--gold); font-weight:bold;">${sơnHiệnTại}</span>.<br>
            Thích hợp đo đạc kiểm tra thông số long mạch thiết kế hạ tầng trạch đất. Vui lòng điền đầy đủ Ngày/Tháng/Năm sinh để bóc tách Cát/Hung gia trạch bản mệnh.</span>`;
        
        // THANH HIỂN THỊ ĐO TỰ DO: SỐ LỚN, CHỐNG SẬP KHUNG
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

        if (adviceBox) adviceBox.style.display = 'none';
        kichHoatDenLedQuet(currentHeading);
        return;
    }

    // ==================== 5. CHẾ ĐỘ LUẬN ĐOÁN CAO CẤP PHÂN TẦNG VẬN 9 ====================
    const hànhPhươngVị = phươngVịThiếtLập?.[currentCode]?.ngũHành || "N/A";
    
    // TẬP TRUNG HỌC THUẬT: Chuẩn hóa tìm kiếm key không phân biệt hoa thường để tránh sập mảng
    let mapKey = Object.keys(bátTrạchMap || {}).find(k => k.toUpperCase() === tinhChuMenh.toUpperCase()) || tinhChuMenh;
    const hànhMệnhChủ = bátTrạchMap?.[mapKey]?.element || "N/A";
    
    elementBox.innerHTML = `
        <span class="element-badge" style="background: #3a3a3c;">Phương vị: ${hànhPhươngVị}</span>
        <span class="element-badge" style="background: #2c2c2e; color: var(--gold)">Mệnh: ${hànhMệnhChủ}</span>
    `;

    const cungTrạch = bátTrạchMap?.[mapKey]?.[currentCode] || "Khác";
    const thôngTinCung = cungPhầnTrăm?.[cungTrạch] || { cát: true, ý_nghĩa: "Thông tin cung vị đang được cập nhật tinh vân." };

    const ketQua = typeof tinhHanCuuTinhTheoNam === 'function' ? tinhHanCuuTinhTheoNam(sơnHiệnTạiObj?.huong || "Trung Cung", namKhaoSatThucTe) : { thongTinSao: "Chưa có dữ liệu tinh vân", meoGiaiHan: "" };
    
    let canhBaoCuuTinh = "";
    let giaiHanCuuTinh = "";
    const boxStyle = "margin-top:10px; padding:10px; border-radius:6px; font-size:0.85rem; line-height:1.4;";

    if (ketQua.thongTinSao.includes("⚠️")) {
        canhBaoCuuTinh = `<div style="${boxStyle} background:rgba(255,59,48,0.1); border:1px solid #ff3b30; color:#ff3b30;"><b style="display:block; margin-bottom:4px;">⚠️ CẢNH BÁO NIÊN HẠN ${namKhaoSatThucTe}:</b>${ketQua.thongTinSao.replace(/⚠️/g, '•')}</div>`;
        if (ketQua.meoGiaiHan) {
            giaiHanCuuTinh = `<div style="margin-top:5px; padding:8px 12px; background:rgba(255,159,10,0.1); border-left:3px solid #ff9f0a; color:#ff9f0a; font-size:0.82rem; border-radius:0 6px 6px 0;"><b>💡 Giải pháp hóa giải:</b> ${ketQua.meoGiaiHan.replace('👉 Hóa giải: ', '')}</div>`;
        }
    } else {
        canhBaoCuuTinh = `<div style="${boxStyle} background:rgba(48,209,88,0.1); border:1px solid #30d158; color:#30d158; text-align:center;">✅ VẬN KHÍ CỬU TINH: ${ketQua.thongTinSao}</div>`;
    }

    // Luận đoán Minh Châu đệ nhất Sơn vị
    let luanDoanSonChiTiet = "";
    let mcKey = Object.keys(MaTranMinhChau || {}).find(k => k.toUpperCase() === tinhChuMenh.toUpperCase()) || tinhChuMenh;
    if (typeof MaTranMinhChau !== 'undefined' && MaTranMinhChau[mcKey]?.[sơnHiệnTại]) {
        const mc = MaTranMinhChau[mcKey][sơnHiệnTại];
        const isCat = mc.loai === 'Cát';
        const color = isCat ? '#30d158' : '#ff3b30';
        const label = isCat ? '[MINH CHÂU CÁT SƠN ĐẮC CÁCH]' : '[MINH CHÂU HUNG SƠN KHẮC KỴ]';
        const thongSo = `<span style="color:#a0a0a0; font-style:italic;">Sơn vị ${sơnHiệnTại} (${sơnHiệnTạiObj?.huong}):</span>`;
        luanDoanSonChiTiet = `<b style="color:${color};">${label}</b> ${thongSo} ${mc.text}`;
        if (mc.giaiphap) {
            luanDoanSonChiTiet += `<br><br><span style="color:${color}; font-weight:bold;">💡 Pháp bảo bố trí khuyên dùng:</span> <span style="color:#ffffff;">${mc.giaiphap}</span>`;
        }
    } else {
        luanDoanSonChiTiet = `<span style="color:#a0a0a0; font-style:italic;">Tọa độ định vị: ${currentHeading}° | Sơn ${sơnHiệnTại} | Hướng đại cục ${sơnHiệnTạiObj?.huong}.</span>`;
    }

    const config = ConfigPhongThuy[mụcĐích] || { title: "Cung vị", isCat: true };

    // 1. ĐỊNH VỊ CÁI GỐC (Bản chất Địa lý tĩnh Bát Trạch)
    const hungTinhBạtTrach = ["Tuyệt Mệnh", "Ngũ Quỷ", "Lục Sát", "Họa Hại"];
    const laCungHungDiaLy = hungTinhBạtTrach.includes(cungTrạch);
    const laThuanDiaLy = config.isCat ? !laCungHungDiaLy : laCungHungDiaLy;

    // 2. ĐỊNH VỊ CÁI NGỌN
    const isGoodRealtime = tongHop.diem >= 72; 

    // THANH HIỂN THỊ CAO CẤP DYNAMIC
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
                    <strong style="color: #ffffff;">${currentHauInfo.ten}</strong>
                    <span style="color: ${currentHauInfo.emoji === '🟢' ? '#00ff41' : (currentHauInfo.emoji === '🔴' ? '#ff4444' : '#ffd700')}; font-weight: 600;">(${currentHauInfo.chatLuong})</span>
                </div>
                
                <div style="font-size: 0.95rem; font-weight: 850; color: ${colorDiemRealtime}; letter-spacing: 0.3px; background: rgba(0,0,0,0.35); padding: 2px 8px; border-radius: 5px; flex-shrink: 0;">
                    ${tongHop.diem}pt (${tongHop.level})
                </div>
            </div>
        </div>`;

    judgmentBox.removeAttribute("style");
    judgmentBox.innerText = `${config.title}: ${cungTrạch}`;
    judgmentBox.className = isGoodRealtime ? "judgment-badge bg-good" : "judgment-badge bg-bad";
    detailBox.style.borderLeftColor = isGoodRealtime ? "var(--green)" : "var(--red)";

    // --- RENDER PHẦN 1: THÔNG TIN DIỄN GIẢI CHÍNH ---
    let noiDungDetail = "";
    noiDungDetail += '<div style="margin-bottom:15px; padding:12px; border-radius:8px; background:rgba(255,255,255,0.05); border-left: 4px solid ' + (isGoodRealtime ? '#30d158' : '#ff3b30') + '">';
    noiDungDetail += '<strong style="color: ' + (isGoodRealtime ? '#30d158' : '#ff3b30') + '; font-size: 1.05rem; display:block; margin-bottom:5px;">';
    noiDungDetail += '◆ ' + (config.isCat ? (isGoodRealtime ? 'CÁT CỤC NẠP KHÍ' : 'HUNG CỤC PHẠM KỴ') : (isGoodRealtime ? 'TỌA HUNG TRẤN SÁT ĐẮC CÁCH' : 'SAI VỊ TIÊU HAO KHÍ TRƯỜNG')) + ' (' + cungTrạch.toUpperCase() + ') — Chỉ số PT: <span style="color:#ffd700;">' + tongHop.diem + 'pt</span> [' + tongHop.level + ']:</strong>';
    noiDungDetail += '<span style="color:#ffffff; font-size:0.9rem;">';
    
    if (!mụcĐích) {
        noiDungDetail += 'Góc xoay la bàn thực tế <span class="gold-text">' + currentHeading + '°</span> đối chiếu cung phi mệnh chủ <strong>' + tinhChuMenh + '</strong> gặp hệ khí trường du tinh <strong>' + cungTrạch + '</strong>.<br>';
    }
    noiDungDetail += thôngTinCung.ý_nghĩa + '</span></div>';

    // --- RENDER PHẦN 2: BỘ LỌC ĐIỀU KIỆN HIỂN THỊ MẬT PHÁP (Đã được vá triệt để) ---
    if (!laThuanDiaLy || !isGoodRealtime) {
        noiDungDetail += '<div style="margin-bottom:15px; padding:12px; border-radius:8px; background:rgba(255,159,10,0.08); border:1px solid #ff9f0a;">';
        
        if (!laThuanDiaLy) {
            // [KỊCH BẢN A]: SAI GỐC ĐỊA LÝ (Ví dụ: Giường ngủ, cửa chính lọt vào Tuyệt Mệnh, Ngũ Quỷ) -> Bung Mật Pháp linh vật điều tiết
            const matPhap = (typeof sinhMatPhapHoaGiai === 'function') ? sinhMatPhapHoaGiai(mụcĐích, cungTrạch, hànhMệnhChủ, currentCung, currentCode) : "";
            const camNang = advices[cungTrạch] || "";
            
            noiDungDetail += '<h4 style="color:#ff9f0a; margin:0 0 8px 0; font-size: 0.9rem;">🛠 MẬT PHÁP ĐIỀU TIẾT / HÓA GIẢI ĐỊA CỤC</h4>';
            noiDungDetail += '<div style="color:#fff; font-size:0.85rem; line-height:1.5;">' + matPhap;
            if (camNang) {
                noiDungDetail += '<br><b style="color:#dfb76c;">Danh mục pháp bảo phụ trợ khuyên dùng trong Vận 9:</b><div style="color:#ccc;">' + camNang.replace(/👉 <em>.*?<\/em>:<br>/, '') + '</div>';
            }
            noiDungDetail += '</div>';
            
        } else {
            // [KỊCH BẢN B]: ĐÚNG GỐC ĐỊA LÝ NHƯNG SAI NIÊN VẬN (Dính sao hạn chiếu làm tụt điểm dưới 72)
            noiDungDetail += '<h4 style="color:#ffd700; margin:0 0 8px 0; font-size: 0.9rem;">⚠️ CẢNH BÁO ĐIỀU TIẾT HÀNH VI NIÊN HẠN</h4>';
            noiDungDetail += '<div style="color:#fff; font-size:0.85rem; line-height:1.5;">';
            
            if (!config.isCat) {
                noiDungDetail += `Vị trí cấu trúc <b>${config.title}</b> đặt đè lên cung <b>${cungTrạch}</b> hiện tại đã đạt cách cục <span style="color:#30d158; font-weight:bold;">Tọa Hung Trấn Sát Đắc Cách</span> về mặt Địa Lý Dương Trạch. Tuyệt đối không cần phá dỡ hay thay đổi vị trí công trình.<br><br>`;
                noiDungDetail += `⚠️ <span style="color:#ff9f0a; font-weight:bold;">LƯU Ý NIÊN HẠN:</span> Do chịu trường khí xung sát của Hung tinh Lưu Niên đáo phương (Chỉ số sụt giảm thực thời còn <b>${tongHop.diem}pt</b>). Trong năm nay, gia chủ **tuyệt đối tránh động thổ đập phá, khoan đục hay sửa chữa lớn** tại khu vực này để không kích động ác tính của sát tinh.`;
            } else {
                noiDungDetail += `Hạng mục vị trí về mặt Địa lý bản mệnh vốn là cung cát lợi (<b>${cungTrạch}</b>). Tuy nhiên, niên độ khảo sát hiện hành đang gặp từ trường suy yếu do vướng hung tinh thời vận niên hạn chiếu góc (Chỉ số sụt giảm còn <b>${tongHop.diem}pt</b>).<br>`;
            }
            
            noiDungDetail += `<br><b style="color:#30d158;">💡 Giải pháp hóa giải & Trợ lực khí trường từ Thuật Toán:</b>`;
            noiDungDetail += `<div style="padding:10px; background:rgba(0,0,0,0.25); border-left:3px solid #30d158; color:#ddd; margin-top:5px; border-radius:0 6px 6px 0;">${tongHop.hoaGiai}</div>`;
            noiDungDetail += '<br><span style="color:#8a8a8f; font-size:0.8rem; font-style:italic;">* Cẩm nang Tuyển Nhật Cát (chọn ngày giờ động thổ cát lành) và bộ lọc Quý Nhân phụ trợ bẻ gãy sát tinh đang được đồng bộ hóa cùng hệ thống...</span>';
            noiDungDetail += '</div>';
        }

        noiDungDetail += '</div>';
    }

    // THẦN SÁT VÀ CỬU TINH VẬN HẠN
    noiDungDetail += '<div style="margin-top:15px; padding: 12px; border-radius: 8px; background: rgba(0,0,0,0.2); border: 1px solid #d4af37;">';
    noiDungDetail += '<div style="margin-bottom:12px;">';
    noiDungDetail += '<b style="color:var(--gold); font-size: 0.95rem;">🎯 THẦN SÁT ĐỘ SỐ PHÂN CHI TIẾT (24 SƠN):</b>';
    noiDungDetail += '<div style="margin-top:8px; color:#fff; font-size: 0.95rem; line-height: 1.6;">' + luanDoanSonChiTiet + '</div>';
    noiDungDetail += '</div>';
    
    noiDungDetail += '<div style="border-top: 1px dashed #444; padding-top: 10px;">';
    noiDungDetail += '<b style="color:var(--gold); font-size: 0.95rem;">⏳ BIẾN THIÊN CỬU TINH NIÊN TRẠCH (NĂM KHẢO SÁT ' + namKhaoSatThucTe + '):</b>';
    noiDungDetail += '<div style="margin-top:5px; color:#fff; font-size: 0.9rem; line-height: 1.5;">' + canhBaoCuuTinh + giaiHanCuuTinh + '</div>';
    noiDungDetail += '</div>';
    noiDungDetail += '</div>';

    if (typeof sinhLuanGiaiThienThoi === 'function') {
        noiDungDetail += '<div style="margin-top:10px; font-size:0.85rem; color:#aaa; font-style:italic;">' + sinhLuanGiaiThienThoi(currentCode) + '</div>';
    }
    detailBox.innerHTML = noiDungDetail;

    // ==================== 7. ADVICE BOX DISPLAY CONTROLLER ====================
    if (adviceBox && adviceContent) {
        adviceBox.style.display = advices[cungTrạch] ? 'block' : 'none';
        if (advices[cungTrạch]) adviceContent.innerHTML = advices[cungTrạch];
    }

    // ==================== 8. TRIGGER REALTIME EFFECTS ====================
    kichHoatDenLedQuet(currentHeading);
    
    if (targetAngle !== null && document.getElementById('ghostNeedle')) {
        const ghost = document.getElementById('ghostNeedle');
        const adviceTxtEl = document.getElementById('ghost-advice-text');
        const scoreBadgeEl = document.getElementById('ghost-score-badge');
        
        // 1. GIỮ NGUYÊN HOÀN TOÀN CÔNG THỨC XOAY BÙ TRỪ GỐC KHÔNG LỆCH 1 PIXEL
        ghost.style.opacity = "1";
        ghost.style.transform = `translate(-50%, -50%) rotate(${targetAngle - currentHeading}deg)`;
        
        // 2. TOÁN PHÁP TỰ ĐỘNG BẮT SÓNG KHỚP HAI TRỤC THỜI GIAN THỰC
        // Tính sai số góc trị tuyệt đối giữa góc đầu máy hướng nhìn thực tế và góc Virtual nạp khí
        let saiSoGoc = Math.abs(currentHeading - targetAngle) % 360;
        if (saiSoGoc > 180) saiSoGoc = 360 - saiSoGoc;

        // TIÊU CHUẨN ĐỊA LÝ CAO CẤP: Sai lệch trong dải 1.5 độ coi như dòng mạch thông suốt
        if (saiSoGoc <= 1.5) {
            ghost.classList.add('matched-pulse'); // Bật hiệu ứng nhấp nháy quang học Neon
            
            // Chuyển đổi nội dung hộp văn bản sang trạng thái ĐẮC CÁCH ĐẠI CÁT
            if (adviceTxtEl && !adviceTxtEl.innerHTML.includes("🏆")) {
                adviceTxtEl.style.color = "#30d158";
                adviceTxtEl.innerHTML = `
                    <span style="color:#30d158; font-weight:bold; display:block; margin-bottom:4px; animation: flashText 0.5s infinite alternate;">
                        🏆 KHỚP TRỤC LONG MẠCH — PHƯƠNG VỊ ĐẮC VỊ THÀNH CÔNG!
                    </span>
                    <span style="color:#fff; font-size:0.85rem;">
                        Tọa độ thực địa đã trùng khớp hoàn toàn với trục nạp khí lý tưởng. Đương số hãy giữ nguyên góc máy này để tiến hành lập hướng/an vị kết cấu không gian.
                    </span>
                `;
                if (scoreBadgeEl) {
                    scoreBadgeEl.style.boxShadow = "0 0 12px #30d158";
                    scoreBadgeEl.style.transform = "scale(1.08)";
                }
            }
        } else {
            // Khi xoay người ra khỏi dải từ trường vàng, lập tức gạt bỏ hiệu ứng
            ghost.classList.remove('matched-pulse');
            
            // Trả lại cấu trúc văn bản hướng dẫn hành vi ban đầu cho trạch chủ
            if (adviceTxtEl && adviceTxtEl.innerHTML.includes("🏆")) {
                let sonHienTaiTxt = tìmSơnHướng(targetAngle);
                adviceTxtEl.removeAttribute("style");
                if (scoreBadgeEl) {
                    scoreBadgeEl.style.boxShadow = "none";
                    scoreBadgeEl.style.transform = "scale(1)";
                }
                adviceTxtEl.innerHTML = `
                    Tia vàng ảo đang định vị nạp khí tại tọa độ <strong>Sơn ${sonHienTaiTxt}</strong>.<br>
                    <span style="color:#aaa; font-size:0.82rem; display:block; margin-top:5px;">
                        👉 Hãy cầm điện thoại xoay người từ từ sao cho <b>Kim Đỏ thực tế khớp thẳng trục với tia Vàng ảo</b> để đón đúng cát khí.
                    </span>
                `;
            }
        }
    }
} // Dấu đóng hàm gốc của updateCompassUI
// ====================== HÀM QUÉT THẦN SÁT LƯU NIÊN CHIẾU HƯỚNG (FULL VERSION) ======================
function getPhongThuySatTinh(tenSon, nam) {
    const results = [];
    if (!tenSon || !nam) return results;

    // 1. Ánh xạ O(1) chuyển đổi từ Sơn vị ra Hướng lớn (Thay thế hoàn toàn hàm getHuongBySon cồng kềnh)
    const mapSonRaHuongLon = {
        "Nhâm":"Bắc", "Tý":"Bắc", "Quý":"Bắc",
        "Sửu":"Đông Bắc", "Cấn":"Đông Bắc", "Dần":"Đông Bắc",
        "Giáp":"Đông", "Mão":"Đông", "Ất":"Đông",
        "Thìn":"Đông Nam", "Tốn":"Đông Nam", "Tỵ":"Đông Nam",
        "Bính":"Nam", "Ngọ":"Nam", "Đinh":"Nam",
        "Mùi":"Tây Nam", "Khôn":"Tây Nam", "Thân":"Tây Nam",
        "Canh":"Tây", "Dậu":"Tây", "Tân":"Tây",
        "Tuất":"Tây Bắc", "Càn":"Tây Bắc", "Hợi":"Tây Bắc"
    };
    const huongThucTe = mapSonRaHuongLon[tenSon] || "Trung Cung";

    // ====================== 1. NGŨ HOÀNG ĐẠI SÁT ======================
    let diff = (nam - 2024) % 9;
    if (diff < 0) diff += 9;
    
    const mapNguHoang = ["Tây", "Đông Bắc", "Nam", "Bắc", "Tây Nam", "Đông", "Đông Nam", "Trung Cung", "Tây Bắc"];
    const viTriNguHoang = mapNguHoang[diff];

    if (huongThucTe === viTriNguHoang) {
        results.push({
            ten: "NGŨ HOÀNG ĐẠI SÁT",
            color: "#ff3b30",
            level: "Đại Hung",
            giaiPhap: "Treo chuông gió đồng 6 thanh (Lục đế) hoặc đặt hồ lô đồng nguyên chất để hóa sát hành Thổ, tránh động thổ hay đập phá tại phương vị này."
        });
    }

    // ====================== 2. THÁI TUẾ & TUẾ PHÁ ======================
    const diaChiNam = ["Thân", "Dậu", "Tuất", "Hợi", "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi"][nam % 12];

    if (tenSon === diaChiNam) {
        results.push({
            ten: "THÁI TUẾ",
            color: "#ff453a",
            level: "Đại Hung",
            giaiPhap: "Không động thổ, đào móng, sửa chữa ở khu vực đương cai quản năm. Sử dụng gương Bát quái lồi gỗ đào hoặc đá thạch anh để trấn áp khí trường."
        });
    }

    if (tenSon === getDoiXungDiaChi(diaChiNam)) {
        results.push({
            ten: "TUẾ PHÁ",
            color: "#ff9f0a",
            level: "Hung",
            giaiPhap: "Phương vị xung chiếu trực diện với Thái Tuế, dễ phát sinh thị phi biến động. Tránh làm việc lớn tại đây, giữ không khí yên tĩnh và tăng cường đèn sáng."
        });
    }

    // ====================== 3. TAM SÁT ======================
    const tamHocCuc = getTamHopCuc(diaChiNam);
    const cacSonTamSat = getTamSat24Son(tamHocCuc);

    if (cacSonTamSat.includes(tenSon)) {
        results.push({
            ten: "TAM SÁT",
            color: "#d63031",
            level: "Hung",
            giaiPhap: "Hạn lưu niên dồn về sơn vị gây tranh chấp hoặc rủi ro tai nạn. An vị đôi Kỳ Lân đồng hoặc cặp Tỳ Hưu hướng đầu ra ngoài để hóa sát, tránh đập phá."
        });
    }

    return results;
}

// ====================== CÁC HÀM PHỤ TRỢ KHÔNG ĐƯỢC THIẾU ======================
function getDoiXungDiaChi(chi) {
    const map = {
        "Tý":"Ngọ", "Ngọ":"Tý",
        "Mão":"Dậu", "Dậu":"Mão",
        "Dần":"Thân", "Thân":"Dần",
        "Thìn":"Tuất", "Tuất":"Thìn",
        "Tỵ":"Hợi", "Hợi":"Tỵ",
        "Sửu":"Mùi", "Mùi":"Sửu"
    };
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
    // 1. Chuẩn hóa góc độ nạp khí an toàn dải [0, 360)
    const normalized = ((degree % 360) + 360) % 360;
    const currentHeading = Math.round(normalized);

    // LẤY TRỤC THỜI GIAN ĐỘNG ĐỒNG BỘ TỪ FORM BIỂU MẪU KHẢO SÁT
    const yearStr = document.getElementById('birthYear')?.value;
    // Đón đầu tương lai: Ưu tiên bốc năm từ ô nhập năm khảo sát, nếu không có tự động lấy năm máy tính thực thời
    const txtNamKhaoSat = document.getElementById('surveyYear'); 
    const namKhaoSatThucTe = (txtNamKhaoSat && txtNamKhaoSat.value.length === 4) ? parseInt(txtNamKhaoSat.value) : new Date().getFullYear();

    // 2. Xác định cấu trúc Đại Cục 8 Cung và Vi cục 24 Sơn
    const currentCung = getCungName(normalized);
    const sonName = tìmSơnHướng(normalized);

    // 3. Truy xuất vi mạch Long mạch 72 Hậu thực thời
    const currentHauInfo = getCurrentHauInfo(normalized);
    let hauName = currentHauInfo.ten.replace(" Hậu", "");
    let hauColor = "#ffd700"; // Mặc định Bình Hòa (Vàng)
    if (currentHauInfo.chatLuong.includes("Cát")) hauColor = "#00FF41";
    else if (currentHauInfo.chatLuong.includes("Hung")) hauColor = "#ff4444";

    // 4. Gọi bộ lọc tử huyệt Không Vong
    const khongVongInfo = kiemTraKhongVong(normalized);
    const khongVongHTML = khongVongInfo 
        ? `<span style="color:#ff4444; font-weight:bold; text-shadow: 0 0 6px #ff0000; margin-left: 8px;">⚠️ ${khongVongInfo.loai}</span>` 
        : "";

    // 5. TÍNH ĐIỂM TỔNG HỢP ĐA TẦNG (PT) THEO ĐÚNG MỤC ĐÍCH ĐỘNG VÀ NĂM ĐỘNG
    let tongDiemHTML = "";
    if (typeof chủMệnh !== 'undefined' && chủMệnh) {
        const mucDichHienTai = document.getElementById('purpose')?.value || 'house';
        
        // Gọi thuật toán lõi tối thượng (Hàm 1) truyền chính xác tham số năm khảo sát động
        const tongHop = tinhDiemTongHop(chủMệnh, normalized, namKhaoSatThucTe, mucDichHienTai);
        
        // ĐỒNG BỘ MỐC MÀU DYNAMIC TUYỆT ĐỐI VỚI MỐC ĐẠT CÁCH VẬN 9 (72PT)
        colorDiemRealtime = "#ff4444"; // Hung (Đỏ)
        if (tongHop.diem >= 72) {
            colorDiemRealtime = "#30d158"; // Cát Vị trở lên (Xanh lá)
        } else if (tongHop.diem >= 50) {
            colorDiemRealtime = "#ffd700"; // Trung bình (Vàng)
        }

        // Đổ dữ liệu điểm nạp khí sạch sẽ, loại bỏ icon theo đúng yêu cầu tinh giản của bạn
        tongDiemHTML = `
            <div style="font-size: 0.95rem; font-weight: 850; color: ${colorDiemRealtime}; letter-spacing: 0.3px; background: rgba(0,0,0,0.35); padding: 2px 8px; border-radius: 5px; flex-shrink: 0;">
                ${tongHop.diem}pt (${tongHop.level})
            </div>
        `;
    }

    // 6. CẬP NHẬT LÊN DOM GIỮ NGUYÊN KIẾN TRÚC LAYOUT FLEX-GRID CHỐNG NHẢY KHUNG KHÍ CỤC
    const degreeTxt = document.getElementById('degree-txt') || document.getElementById('degreeTxt');
    if (degreeTxt) {
        degreeTxt.innerHTML = `
            <div style="display: grid; grid-template-rows: auto auto; gap: 6px; font-family: sans-serif; width: 100%; box-sizing: border-box; overflow: hidden; text-align: left;">
                <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; white-space: nowrap; overflow: hidden;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                        <span style="font-size: 1.8rem; font-weight: 900; color: #ffca28; letter-spacing: -0.5px; line-height: 1;">${currentHeading}°</span>
                        <span style="font-size: 0.9rem; color: #8a8a8f; margin-left: 4px;">Phương:</span>
                        <span style="font-size: 0.95rem; font-weight: bold; color: #ffffff;">${currentCung}</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 4px; flex-shrink: 0;">
                        <span style="font-size: 0.9rem; color: #8a8a8f;">Sơn:</span>
                        <span style="font-size: 0.9rem; font-weight: 800; padding: 2px 10px; border-radius: 5px; 
                                     background: linear-gradient(135deg, #1c1c1e 0%, #2c2c2e 40%, #3a3a3c 55%, #1c1c1e 100%); 
                                     color: #e5e5ea; border: 1px solid #48484a; 
                                     box-shadow: inset 0 1px 0 rgba(255,255,255,0.1), 0 1px 3px rgba(0,0,0,0.5); 
                                     text-shadow: -1px -1px 0 rgba(0,0,0,0.8); letter-spacing: 0.3px;">
                            ${sonName}
                        </span>
                    </div>
                </div>
                
                <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; white-space: nowrap; overflow: hidden; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 5px;">
                    <div style="overflow: hidden; text-overflow: ellipsis; font-size: 0.85rem; display: flex; align-items: center; gap: 4px;">
                        <span style="color: #8a8a8f;">Hậu:</span>
                        <strong style="color: #ffffff;">${hauName}</strong>
                        <span style="color: ${hauColor}; font-weight: 600; text-shadow: 0 0 8px ${hauColor}40;">
                            (${currentHauInfo.chatLuong})
                        </span>
                        ${khongVongHTML}
                    </div>
                    
                    ${tongDiemHTML}
                </div>
            </div>
        `;
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
function layThongTin24Son(doSo, cungPhi, namAm) {
    let gockim = (doSo % 360 + 360) % 360;
    let sonHienTaiObj = getSonObjByDegree(gockim);
    const tênSơn = sonHienTaiObj.name;

    let mốcHậuGầnNhất = Math.round(gockim / 5) * 5;
    if (mốcHậuGầnNhất >= 360) mốcHậuGầnNhất = 0;
    const dữLiệuHậuĐộng = Data72Hau[mốcHậuGầnNhất.toString()] || { ten: tênSơn + " Hậu", diem: 60, chatLuong: "Bình Hòa" };

    const quẻMệnhKey = Object.keys(MaTranMinhChau || {}).find(k => k.toUpperCase() === cungPhi.toUpperCase()) || cungPhi;
    const dữLiệuSơnGốc = MaTranMinhChau[quẻMệnhKey]?.[tênSơn];

    const huongToCode = { "Bắc": "N", "Đông Bắc": "NE", "Đông": "E", "Đông Nam": "SE", "Nam": "S", "Tây Nam": "SW", "Tây": "W", "Tây Bắc": "NW" };
    const codeHuong = huongToCode[sonHienTaiObj.huong] || "N";
    const saoBatTrach = bátTrạchMap[quẻMệnhKey]?.[codeHuong] || "Phục Vị";
    const batTrachDetail = cungPhầnTrăm[saoBatTrach];
    const isCatBatTrach = batTrachDetail ? batTrachDetail.cát : true;

    let luanDoanFinal = "";
    let hoaGiaiFinal = "";
    let điểmSơnVịThựcTế = 60;

    if (dữLiệuSơnGốc) {
        điểmSơnVịThựcTế = dữLiệuSơnGốc.diem;
        luanDoanFinal = `[Cung ${saoBatTrach}] — Phân độ Sơn ${tênSơn}: ${dữLiệuSơnGốc.text}`;
        hoaGiaiFinal = dữLiệuSơnGốc.giaiphap || "Bố trí pháp bảo theo nghi thức.";
    } else {
        điểmSơnVịThựcTế = isCatBatTrach ? 80 : 35;
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
    // 🟢 [GIỮ NGUYÊN GỐC 100%]: Cấu trúc Tam Sát cũ để các hàm cũ đọc mượt mà
    tamSat: {
        "Dần Ngọ Tuất": "Bắc",   // Tam sát tại Hợi-Tý-Sửu
        "Thân Tý Thìn": "Nam",   // Tam sát tại Tỵ-Ngọ-Mùi
        "Tỵ Dậu Sửu": "Đông",    // Tam sát tại Dần-Mão-Thìn
        "Hợi Mão Mùi": "Tây"     // Tam sát tại Thân-Dậu-Tuất
    },

    // 🟢 [GIỮ NGUYÊN GỐC 100%]: Mảng Thái Tuế cũ theo Địa Chi tĩnh
    thaiTue: ["Thân", "Dậu", "Tuất", "Hợi", "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi"],
    
    // 🟢 [GIỮ NGUYÊN GỐC 100%]: Bản đồ định nghĩa phương vị Địa Chi cũ của bạn
    phuongVi: {
        "Tý": "Bắc", "Ngọ": "Nam", "Mão": "Đông", "Dậu": "Tây",
        "Dần": "Đông Bắc", "Thân": "Tây Nam", "Tỵ": "Đông Nam", "Hợi": "Tây Bắc",
        "Sửu": "Đông Bắc", "Mùi": "Tây Nam", "Thìn": "Đông Nam", "Tuất": "Tây Bắc"
    },

    // 🚀 [PHẦN NÂNG CẤP THÔNG MINH MỞ RỘNG]: Đóng vai trò bộ vi mạch dữ liệu lõi
    // Đảm bảo đồng bộ không dấu/có dấu và phủ kín mạng lưới $360^\circ$ của la bàn số
    THAP_NHI_CHI_ARR: ["Ty", "Suu", "Dan", "Mao", "Thin", "Tỵ", "Ngo", "Mui", "Than", "Dau", "Tuat", "Hoi"],
    THAP_NHI_CHI_VIET: ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"],

    BO_CHUYEN_DOI_NGON_NGU: {
        "Tý": "Ty", "Sửu": "Suu", "Dần": "Dan", "Mão": "Mao", "Thìn": "Thin", "Tỵ": "Tỵ",
        "Ngọ": "Ngo", "Mùi": "Mui", "Thân": "Than", "Dậu": "Dau", "Tuất": "Tuat", "Hợi": "Hoi",
        "Nhâm": "Nham", "Quý": "Quy", "Giáp": "Giap", "Ất": "At", "Bính": "Binh", "Đinh": "Dinh",
        "Canh": "Canh", "Tân": "Tan", "Cấn": "Can", "Tốn": "Ton", "Khôn": "Khon", "Càn": "Can"
    },

    // Bản đồ quét chi tiết dải khí Tam Sát phân châm 3 Sơn vị cho các hàm toán pháp nâng cấp
    tamSatPhanCham: {
        "Dan Ngo Tuat": { huongChuQuet: "N", canhcai: ["Hoi", "Ty", "Suu"], text: "Vùng Sát Khí chạy dọc Phương Bắc (Tây Bắc - Chính Bắc - Đông Bắc)" },
        "Than Ty Thin": { huongChuQuet: "S", canhcai: ["Tỵ", "Ngo", "Mui"], text: "Vùng Sát Khí chạy dọc Phương Nam (Đông Nam - Chính Nam - Tây Nam)" },
        "Tỵ Dau Suu":   { huongChuQuet: "E", canhcai: ["Dan", "Mao", "Thin"], text: "Vùng Sát Khí chạy dọc Phương Đông (Đông Bắc - Chính Đông - Đông Nam)" },
        "Hoi Mao Mui":  { huongChuQuet: "W", canhcai: ["Than", "Dau", "Tuat"], text: "Vùng Sát Khí chạy dọc Phương Tây (Tây Nam - Chính Tây - Tây Bắc)" }
    },

    // Ma trận bóc tách toàn vẹn bản đồ khí học 24 Sơn vị không góc chết
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

/**
 * Nâng cấp hàm luận giải vận hạn năm (Full Version)
 * Tự động hóa tính toán, tối ưu hóa so sánh dữ liệu
 */
// =========================================================================
// ⏳ PHÂN HỆ NGOẠI VI: TÍNH TOÁN THẦN SÁT VÀ BIẾN THIÊN CỬU TINH NIÊN CỤC
// =========================================================================

function tinhHanCuuTinhTheoNam(inputDoSoHoacSon, namHienTai) {
    const nam = namHienTai || new Date().getFullYear();
    if (inputDoSoHoacSon === undefined || inputDoSoHoacSon === null) {
        return { thongTinSao: "Chưa trích xuất được tọa độ trắc địa", meoGiaiHan: "" };
    }

    // 🚀 BƯỚC ĐỘT PHÁ 1: TỰ ĐỘNG CHUẨN HÓA ĐẦU VÀO (Nhận cả Số độ la bàn hoặc chuỗi tên Sơn vị)
    let sonName = "";
    if (typeof inputDoSoHoacSon === 'number') {
        const gockim = ((inputDoSoHoacSon % 360) + 360) % 360;
        const sonObj = SON_24_CONFIG.find(s => {
            if (s.min > s.max) return gockim >= s.min || gockim < s.max;
            return gockim >= s.min && gockim < s.max;
        }) || SON_24_CONFIG[0];
        sonName = sonObj.name;
    } else {
        sonName = inputDoSoHoacSon.trim();
    }

    // ĐỒNG BỘ BIẾN GỐC: Trỏ thẳng vào kho dữ liệu nâng cấp ở ngoài không lo lỗi sập biến
    const matrixThansat = DATA_THANSAT;

    // Chiết xuất đặc tính Sơn vị phân tầng từ kho vạn năng
    const thongTinSonViLoi = matrixThansat.MA_TRAN_24_SON_VI[sonName];
    const huongDaiCuc = thongTinSonViLoi ? thongTinSonViLoi.huongDaiCuc : "Trung Cung";
    
    // 🚀 BƯỚC ĐỘT PHÁ 2: ĐỒNG BỘ TOÁN PHÁP THẦN SÁT TỰ ĐỘNG KÍN TIẾNG VIỆT CÓ DẤU
    const tenChiNamHienTai = matrixThansat.THAP_NHI_CHI_VIET[nam % 12]; // Lấy chuẩn chữ Tiếng Việt có dấu (Ví dụ: "Ngọ")
    const phuongViThaiTue = matrixThansat.phuongVi[tenChiNamHienTai];   // Tra ra hướng Thái Tuế phương vị (Ví dụ: "Nam")
    
    const getDoiXungThapNhịChi = (huong) => {
        const map = { "Bắc": "Nam", "Nam": "Bắc", "Đông": "Tây", "Tây": "Đông", "Đông Bắc": "Tây Nam", "Tây Nam": "Đông Bắc", "Đông Nam": "Tây Bắc", "Tây Bắc": "Đông Nam" };
        return map[huong] || huong;
    };
    const phuongViTuePha = getDoiXungThapNhịChi(phuongViThaiTue);

    // Xác định dải khí Tam Sát dựa trên phép chia tuần hoàn của năm
    const chiaDuNam = nam % 12;
    const tamHopKey = (chiaDuNam === 8 || chiaDuNam === 0 || chiaDuNam === 4) ? "Than Ty Thin" : 
                      (chiaDuNam === 9 || chiaDuNam === 1 || chiaDuNam === 5) ? "Tỵ Dau Suu" :   
                      (chiaDuNam === 11 || chiaDuNam === 3 || chiaDuNam === 7) ? "Hoi Mao Mui" :  
                      "Dan Ngo Tuat";
                      
    const cauHinhTamSatNam = matrixThansat.tamSatPhanCham[tamHopKey];
    
    // Lấy Địa chi liên đới ngầm của Sơn vị (Ví dụ: Sơn Đinh tương ứng chi Ngọ)
    const diaChiLienQuoiCuaSon = thongTinSonViLoi ? thongTinSonViLoi.diaChiLienQuoi : "Ty";
    const keyChiHienTaiKhongDau = matrixThansat.BO_CHUYEN_DOI_NGON_NGU[sonName] || diaChiLienQuoiCuaSon;

    let warnings = [];
    
    // Kiểm tra Thái Tuế Đáo Phương
    if (sonName === tenChiNamHienTai || (thongTinSonViLoi && matrixThansat.phuongVi[sonName] === phuongViThaiTue)) {
        warnings.push("⚠️ [Thái Tuế Đáo Phương]: Trường khí cực thịnh, kỵ động thổ đột ngột, dễ gây xung đột từ trường.");
    }
    
    // Kiểm tra Tuế Phá Chiếu Cục (Lục Xung với Địa chi của năm)
    const keyChiNamKhaoSatKhongDau = matrixThansat.BO_CHUYEN_DOI_NGON_NGU[tenChiNamHienTai];
    if (DATA_TRACH_NHAT_CAO_CAP.HINH_XUNG_QUY_QUYET.LUC_XUNG[keyChiHienTaiKhongDau] === keyChiNamKhaoSatKhongDau) {
        warnings.push("⚠️ [Tuế Phá Chiếu Cục]: Hướng đối xung trực diện với Tuế Tinh, dễ sinh hao tổn sinh khí, thị phi bất ngờ.");
    }
    
    // Kiểm tra Tam Sát Ngự Phương (Phân châm góc độ Sơn chi tiết)
    if (cauHinhTamSatNam && cauHinhTamSatNam.canhcai.includes(keyChiHienTaiKhongDau)) {
        warnings.push(`⚠️ [Tam Sát Ngự Phương]: Sơn vị dính dải sát khí sát chủ của năm (${cauHinhTamSatNam.text}), kỵ khởi công đập phá xây dựng.`);
    }

    // 🚀 BƯỚC ĐỘT PHÁ 3: PHI TINH CỬU TINH TỰ ĐỘNG CHUẨN VẬN 9 (KHÔNG FIX CỨNG)
    let maSoNam = (11 - (nam % 9)) % 9;
    if (maSoNam === 0) maSoNam = 9;

    const huongToSaoMap = { "N": 1, "SW": 2, "E": 3, "SE": 4, "Trung Cung": 5, "NW": 6, "W": 7, "NE": 8, "S": 9 };
    let cungViNha = huongToSaoMap[huongDaiCuc] || 5;
    
    let saoDaoPhuong = (maSoNam - (cungViNha - 5) + 9) % 9;
    if (saoDaoPhuong === 0) saoDaoPhuong = 9;

    // Đánh giá cát hung bám sát thời vận Vận 9 (Sao Cửu Tử giữ vị trí vương tinh tối thượng)
    const danhGiaSaoMap = {
        1: { ten: "Nhất Bạch Tham Lang (Cát Tinh)", hung: false, giaiPhap: "Đắc lộc công danh. Giữ phương vị sạch sẽ để nạp khí." },
        2: { ten: "Nhị Hắc Bệnh Phù (Hung Tinh suy khí)", hung: true, giaiPhap: "Chủ về bệnh tật. Treo Hồ lô đồng hoặc đặt chuỗi tiền Lục Đế để tiết bớt Thổ khí xấu." },
        3: { ten: "Tam Bích Lộc Tồn (Sát Tinh hình hại)", hung: true, giaiPhap: "Dễ sinh tranh chấp, thị phi. Tránh đặt thiết kế động, máy phát thanh tại góc này." },
        4: { ten: "Tứ Lục Văn Xương (Cát Tinh độ số)", hung: false, giaiPhap: "Lợi cho học hành, thi cử. Bài trí Tháp Văn Xương gỗ chín tầng để thúc vượng." },
        5: { ten: "Ngũ Hoàng Đại Sát (Mậu Kỷ Đại Hung Tinh)", hung: true, giaiPhap: "Sát tinh độc hại nhất năm. Tuyệt đối không động thổ, khoan đục. Treo chuông gió đồng 6 thanh để hóa giải triệt để." },
        6: { ten: "Lục Bạch Vũ Khúc (Cát Tinh thiên lộc)", hung: false, giaiPhap: "Quý nhân trợ lực, thiên tài hanh thông. Bố trí vật phẩm gốm sứ hành Thổ để sinh vượng Kim khí." },
        7: { ten: "Thất Xích Phá Quân (Hung Tinh hưu tù)", hung: true, giaiPhap: "Dễ tổn hao tài lộc, đề phòng trộm cướp. Đặt bình nước an nhẫn (nước muối loãng) để tiêu trừ sát khí." },
        8: { ten: "Bát Bạch Tả Phù (Thoái Khí Vận 9)", hung: false, giaiPhap: "Năng lượng chuyển sang trạng thái bình hòa, ổn định khí trường." },
        9: { ten: "Cửu Tử Hữu Bật (ĐƯƠNG VƯỢNG ĐẠI CÁT TINH VẬN 9)", hung: false, giaiPhap: "Tối thượng cát tinh chủ quản thời vận. Bố trí đèn neon rực sáng hoặc trải thảm đỏ để nghênh đón đại tài lộc." }
    };

    const thongTinSaoHienTai = danhGiaSaoMap[saoDaoPhuong];
    if (thongTinSaoHienTai.hung) {
        warnings.push(`⚠️ [Lưu Niên Phi Tinh]: Phương vị gặp ${thongTinSaoHienTai.ten} giáng lâm.`);
    }

    // 🚀 BƯỚC ĐỘT PHÁ 4: ĐỒNG BỘ NỘI DUNG VĂN BẢN XUẤT RA GIAO DIỆN SẠCH VÀ SẮC NÉT
    if (warnings.length === 0) {
        return {
            thongTinSao: `✅ Niên độ ${nam}: Sơn vị ${sonName} (Hướng ${huongDaiCuc}) Đạt Trạng Thái Bình Hòa Cát Lành. Phương vị đón nhận sinh khí của ngôi sao cát: ${thongTinSaoHienTai.ten}.`,
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

    // Phân rã dữ liệu từ toán pháp lõi (đảm bảo tính toàn vẹn số liệu)
    const { diem, level, message, hoaGiai, khongVong, satTinhs, sonName, sonInfo, hauInfo } = result;

    // Trích xuất mục đích sử dụng động để đảo chiều thị giác âm dương
    const mucDich = document.getElementById('purpose').value;
    const config = ConfigPhongThuy[mucDich] || { title: "Vị trí", isCat: true };
    const isCatPurpose = config.isCat; // true: Nạp Cát, false: Trấn Sát (Bếp, Toilet...)

    // ─── ĐỒNG BỘ MỐC MÀU CHUẨN TUYỆT ĐỐI THEO CHỦ THỂ CÔNG NĂNG ───
    let colorStatus = "#ff3b30"; // Mặc định ĐỎ (Hung Cục)
    if (diem >= 72) {
        colorStatus = diem >= 85 ? "#30d158" : "#32b057"; // XANH LÁ (Đắc Cách / Đạt Ngưỡng Cát)
    } else if (diem >= 50 && isCatPurpose) {
        colorStatus = "#dfb76c"; // VÀNG GOLD (Cảnh báo điều tiết nhẹ cho tab Nạp Cát)
    }

    let html = `<div style="font-size:0.92rem; line-height:1.6; color:#e0e0e0; font-family: sans-serif; width: 100%; box-sizing: border-box;">`;

    // =========================================================================
    // TẦNG 1: THƯỢNG ĐỈNH TỔNG ĐIỂM (PT - PHONG THỦY SỐ ĐA TẦNG ĐẢO CHIỀU)
    // =========================================================================
    html += `
    <div style="text-align:center; padding:20px; background:rgba(255,255,255,0.02); border-radius:16px; margin-bottom:20px; border: 1px solid ${colorStatus}40; box-shadow: inset 0 0 15px ${colorStatus}10;">
        <div style="font-size:0.7rem; color:#888; text-transform:uppercase; letter-spacing: 2px; font-weight: bold;">Chỉ số PT [${config.title}] Vận 9</div>
        <div style="font-size:3.5rem; font-weight:900; color:${colorStatus}; margin: 5px 0; text-shadow: 0 0 10px ${colorStatus}20;">${diem}<span style="font-size:1.2rem; font-weight:400;">pt</span></div>
        <div style="font-weight:700; color:${colorStatus}; letter-spacing: 1px; padding: 4px 16px; background: ${colorStatus}15; display: inline-block; border-radius: 20px; text-transform: uppercase; font-size: 0.85rem; border: 1px solid ${colorStatus}30;">${level}</div>
        <div style="margin-top:12px; font-size:0.75rem; color:#8a8a8f; font-family: monospace; line-height: 1.4; border-top: 1px dashed rgba(255,255,255,0.05); padding-top: 8px;">
            PT = [ ( BT<sub>Gốc</sub> + Δ<sub>H72</sub> ) × K<sub>Van</sub> ${isCatPurpose ? '-' : '+'} ΣΨ<sub>Sat</sub> ] × Γ<sub>Khai</sub>
        </div>
    </div>`;

    // =========================================================================
    // TẦNG 2: CẢNH BÁO LUỒNG KHÍ ĐẠI KỴ / THƯỞNG ĐIỂM TIÊU SÁT
    // =========================================================================
    if (khongVong || (satTinhs && satTinhs.length > 0)) {
        html += `<div style="margin-bottom:20px; display: flex; flex-direction: column; gap: 8px;">`;
        
        if (khongVong) {
            // Đảo chiều lời luận Không Vong động theo bản chất Cát/Hung của công năng
            let kvBg = isCatPurpose ? "rgba(255,59,48,0.12)" : "rgba(48,209,88,0.12)";
            let kvBorder = isCatPurpose ? "#ff3b30" : "#30d158";
            let kvTitle = isCatPurpose ? `⚠️ ĐẠI KỴ TỬ HUYỆT: ${khongVong.loai}` : `🏆 THẦN CÁCH TIÊU SÁT: ĐÈ TRÚC ${khongVong.loai}`;
            let kvMsg = isCatPurpose ? 
                `Kết cấu nạp khí đang đặt dính lằn ranh đại kỵ khiến dòng từ trường bị xé toạc, hỗn loạn khí trường.` : 
                `Tuyệt diệu! Chọn đúng lằn ranh nhiễu loạn để đặt uế khí giúp cách ly và xả thẳng tạp khí độc hại ra khỏi long mạch trạch đất.`;

            html += `
            <div style="background:${kvBg}; padding:12px 15px; border-radius:12px; border:1px solid ${kvBorder};">
                <strong style="color:${kvBorder}; font-size: 0.9rem; display: block; margin-bottom: 3px;">${kvTitle}</strong>
                <span style="font-size:0.85rem; color: #eee;">${kvMsg}</span>
            </div>`;
        }

        satTinhs.forEach(sat => {
            let satColor = isCatPurpose ? (sat.color || '#ff9f0a') : '#30d158';
            let satBg = isCatPurpose ? 'rgba(255,159,10,0.08)' : 'rgba(48,209,88,0.06)';
            let satTitle = isCatPurpose ? `💀 CHIẾU HƯỚNG SÁT TINH: ${sat.ten}` : `🛡️ TIÊU DIỆT SÁT TINH: ĐÈ TRÚNG VỊ TRÍ ${sat.ten}`;
            let satMsg = isCatPurpose ? 
                (sat.giaiPhap || "Khu vực vướng năng lượng cực xấu lưu niên, gia chủ tránh động thổ khoan đục sâu tại phân độ này.") :
                "Bếp/Toilet đặt tại đây đóng vai trò trấn yểm cực mạnh, đốt cháy hoàn toàn hung tính của hung tinh lưu niên.";

            html += `
            <div style="background:${satBg}; padding:10px 15px; border-radius:10px; border-left:4px solid ${satColor}; border-top: 1px solid ${satColor}15; border-right: 1px solid ${satColor}15; border-bottom: 1px solid ${satColor}15;">
                <strong style="color:${satColor}; font-size:0.88rem; display: block; margin-bottom: 2px;">${satTitle}</strong>
                <span style="font-size:0.82rem; color:#ccc;">${satMsg}</span>
            </div>`;
        });
        
        html += `</div>`;
    }

    // =========================================================================
    // TẦNG 3: LUẬN GIẢI CHUYÊN SÂU ĐỒNG BỘ ĐẢO CHIỀU ĐỘNG (MATRANMINHCHAU SƠN ĐẠO)
    // =========================================================================
    // Biến message và hoaGiai từ kết quả lõi đã tự động lật ngược nội dung text, chỉ cần gán hiển thị chuẩn màu
    html += `
    <div style="background:rgba(255,255,255,0.01); padding:15px; border-radius:12px; border:1px solid rgba(255,255,255,0.08); box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
        <strong style="color:#dfb76c; display:block; margin-bottom:8px; font-size:0.9rem; letter-spacing: 0.5px;">◆ MINH CHÂU SƠN ĐẠO ĐỘ SỐ: ${sonName} (${degree}°)</strong>
        <div style="font-size: 0.88rem; color: #ddd; text-align: justify; line-height: 1.5;">${message}</div>
        <div style="margin-top:12px; color:#ffd700; font-size:0.85rem; border-top:1px solid rgba(255,255,255,0.08); padding-top:10px; line-height: 1.45;">
            <b style="color:#dfb76c; display: block; margin-bottom: 3px;">💡 Mật pháp quy hoạch / Hóa giải mật truyền:</b> ${hoaGiai}
        </div>
    </div>`;

    // =========================================================================
    // TẦNG 4: ĐỒNG BỘ HIỂN THỊ ĐỒ HỌA 3 HẬU MẠCH PHÂN TẦNG TRỰC QUAN
    // =========================================================================
    if (hauInfo) {
        // Đồng bộ thuật toán tìm kiếm 3 góc kề cận y hệt hàm danh sách gợi ý để vẽ cấu hình
        let mốcTâm = Math.round(degree / 5) * 5;
        if (mốcTâm >= 360) mốcTâm = 0;
        let mốcTrái = (mốcTâm - 5 + 360) % 360;
        let mốcPhải = (mốcTâm + 5) % 360;

        let hauTrái = Data72Hau[mốcTrái.toString()] || { ten: "Hậu Trái", chatLuong: "Bình Hòa", diem: 60 };
        let hauTâm  = Data72Hau[mốcTâm.toString()] || { ten: "Hậu Tâm", chatLuong: "Bình Hòa", diem: 60 };
        let hauPhải = Data72Hau[mốcPhải.toString()] || { ten: "Hậu Phải", chatLuong: "Bình Hòa", diem: 60 };

        const checkHauColor = (cl) => cl.includes('Cát') ? '#30d158' : (cl.includes('Hung') ? '#ff3b30' : '#dfb76c');
        
        // Đoạn html dựng cấu trúc khối 3 phân đoạn góc Trên/Dưới cực kỳ khoa học
        let htmlKhối3Hậu = `
            <div style="display: flex; gap: 6px; margin-top: 10px; width: 100%; box-sizing: border-box;">
                <div style="flex: 1; text-align: center; background: rgba(255,255,255,0.03); padding: 8px 4px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06);">
                    <div style="font-size: 0.75rem; color: #fff; font-weight: 700; margin-bottom: 2px;">${hauTrái.ten.split(' ')[0]} (${mốcTrái}°)</div>
                    <div style="font-size: 0.68rem; color: ${isCatPurpose ? checkHauColor(hauTrái.chatLuong) : (hauTrái.chatLuong.includes('Hung') ? '#30d158' : '#ff3b30')}; font-weight: bold; text-transform: uppercase;">
                        ${isCatPurpose ? hauTrái.chatLuong.replace('Đại ', 'Đ.').replace('Tiểu ', 'T.') : (hauTrái.chatLuong.includes('Hung') ? 'ĐẮC VỊ' : 'K KỴ ĐẶT')}
                    </div>
                </div>
                <div style="flex: 1; text-align: center; background: rgba(255,255,255,0.08); padding: 8px 4px; border-radius: 8px; border: 1px solid ${isCatPurpose ? checkHauColor(hauTâm.chatLuong) : (hauTâm.chatLuong.includes('Hung') ? '#30d158' : '#ff3b30')}; box-shadow: 0 0 8px ${isCatPurpose ? checkHauColor(hauTâm.chatLuong) : (hauTâm.chatLuong.includes('Hung') ? '#30d158' : '#ff3b30')}30;">
                    <div style="font-size: 0.75rem; color: #ffd700; font-weight: bold; margin-bottom: 2px;">🎯 ${hauTâm.ten.split(' ')[0]} (${mốcTâm}°)</div>
                    <div style="font-size: 0.68rem; color: ${isCatPurpose ? checkHauColor(hauTâm.chatLuong) : (hauTâm.chatLuong.includes('Hung') ? '#30d158' : '#ff3b30')}; font-weight: bold; text-transform: uppercase;">
                        ${isCatPurpose ? hauTâm.chatLuong.replace('Đại ', 'Đ.').replace('Tiểu ', 'T.') : (hauTâm.chatLuong.includes('Hung') ? 'ĐẮC VỊ' : 'K KỴ ĐẶT')}
                    </div>
                </div>
                <div style="flex: 1; text-align: center; background: rgba(255,255,255,0.03); padding: 8px 4px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06);">
                    <div style="font-size: 0.75rem; color: #fff; font-weight: 700; margin-bottom: 2px;">${hauPhải.ten.split(' ')[0]} (${mốcPhải}°)</div>
                    <div style="font-size: 0.68rem; color: ${isCatPurpose ? checkHauColor(hauPhải.chatLuong) : (hauPhải.chatLuong.includes('Hung') ? '#30d158' : '#ff3b30')}; font-weight: bold; text-transform: uppercase;">
                        ${isCatPurpose ? hauPhải.chatLuong.replace('Đại ', 'Đ.').replace('Tiểu ', 'T.') : (hauPhải.chatLuong.includes('Hung') ? 'ĐẮC VỊ' : 'K KỴ ĐẶT')}
                    </div>
                </div>
            </div>
        `;

        html += `
        <div style="margin-top:20px; padding:15px; background:rgba(0,255,120,0.02); border-radius:12px; border:1px solid rgba(0,255,170,0.15);">
            <strong style="color:#00ffaa; font-size:0.9rem; letter-spacing: 0.3px; display: block;">🌟 PHÂN PHỐI ĐỊA KHÍ ĐỘNG: LONG MẠCH 72 HẬU (5°)</strong>
            <span style="font-size: 0.8rem; color: #8a8a8f; margin-top: 2px; display: block;">Mạch khí ngầm mốc tâm hướng nhìn hiện tại:</span>
            
            ${htmlKhối3Hậu}
            
            <div style="font-size:0.83rem; color:#bbb; margin-top:12px; line-height: 1.5; background: rgba(0,0,0,0.15); padding: 8px 12px; border-radius: 6px; border-left: 3px solid #00ffaa;">
                Khí mạch Tiết khí mốc tâm: <b>${hauInfo.ten}</b> — Phẩm chất: <b>${hauInfo.chatLuong}</b> (Mạch gốc đạt ${hauInfo.diem}pt).<br>
                <span style="color:#eee; font-style: italic; display: block; margin-top: 3px;">➔ Bản chất: ${hauInfo.ynghia}</span>
            </div>
        </div>`;
    }

    html += `</div>`;

    const detailBox = document.getElementById('detailBox');
    if (detailBox) detailBox.innerHTML = html;
}

// ====================== KIỂM TRA KHÔNG VONG (Thuật toán O(1) Tối ưu hóa tuyệt đối) ======================
function kiemTraKhongVong(degree) {
    const gockim = ((degree % 360) + 360) % 360;
    let distDai = (gockim + 360 - 22.5) % 45;
    distDai = Math.min(distDai, 45 - distDai);
    if (distDai <= 0.5) {
        return { loai: "ĐẠI KHÔNG VONG", message: "Đường ranh giới Quái lớn. Trường khí đứt gãy đại kỵ." };
    }
    let distTieu = (gockim + 360 - 7.5) % 15;
    distTieu = Math.min(distTieu, 15 - distTieu);
    if (distTieu <= 0.6) {
        return { loai: "TIỂU KHÔNG VONG", message: "Tuyến ranh giới 24 Sơn vị nhỏ. Khí thế suy kiệt." };
    }
    return null; 
}

/**
 * 📊 THUẬT TOÁN ĐIỂM TỔNG HỢP ĐA TẦNG - PHIÊN BẢN THỰC CHIẾN CHÍNH TÔNG (ĐÃ ĐỒNG BỘ QUÉT ĐỘNG)
 * Công thức áp dụng: PT = [ (Điểm_Sơn_Gốc + ΔH72_Mạch) * K_Van - ΣΨ_Sat ] * Γ_Khai
 */
function tinhDiemTongHop(cungPhi, degree, namKhảoSát, mucDich, namAm) {
    const normalizedDegree = ((degree % 360) + 360) % 360;
    const sonObj = getSonObjByDegree(normalizedDegree);
    const sonName = sonObj.name;
    
    let namAmReal = namAm || new Date().getFullYear();
    
    // NẾU CHƯA QUÉT: Hệ thống lấy mặc định từ cấu hình hệ thống.
    // NẾU ĐÃ QUÉT: Hệ thống tự động nhận `sizeDegree` thực tế vừa đo được đổ vào đây.
    const config = ConfigPhongThuy[mucDich] || { title: "Vị trí", isCat: true, sizeDegree: 2 };
    const isCatPurpose = config.isCat; 
    let dảiĐộVậtThể = config.sizeDegree || 2; 

    const huongToCodeMap = { "Bắc": "N", "Đông Bắc": "NE", "Đông": "E", "Đông Nam": "SE", "Nam": "S", "Tây Nam": "SW", "Tây": "W", "Tây Bắc": "NW" };
    const codeChuan = huongToCodeMap[sonObj.huong] || "N";

    const cungBátTrạch = bátTrạchMap[cungPhi]?.[codeChuan] || "Khác";
    const laCungHungDiaLy = ["Tuyệt Mệnh", "Ngũ Quỷ", "Lục Sát", "Họa Hại"].includes(cungBátTrạch);
    const laCungCatDiaLy = !laCungHungDiaLy;

    // ==========================================
    // ─── TẦNG 1: THIẾT LẬP SIÊU GỐC (NHÂN ĐỐI CHIẾU ĐỊA) ───
    // ==========================================
    
    // 1.1 Lấy Gốc Nhân Mệnh (24 Sơn) tại điểm Trọng Tâm (Center)
    const sonInfo = layThongTin24Son(normalizedDegree, cungPhi, namAmReal); 
    let diemGocSon = (sonInfo && typeof sonInfo.diem === 'number') ? sonInfo.diem : 70;

    // Đảo chiều Nhân Mệnh cho trục Trấn Sát (Đất hung đặt uế khí lại thành đắc cách)
    if (!isCatPurpose) {
        diemGocSon = 100 - diemGocSon; 
    }

    // 1.2 TÍCH PHÂN QUÉT TOÀN BỘ BỀ RỘNG VẬT THỂ (Xác định lấn biên 72 Hậu)
    let tongDiemHauMạch = 0;
    let soDiemQuet = 0;
    let dínhKhôngVongNặng = false;
    let loaiKhôngVong = "";
    let danhSachHauBiDeLen = new Set(); // Để theo dõi vật thể đè lên bao nhiêu Hậu

    // Quét từ mép trái sang mép phải của vật thể dựa trên dải độ thực tế
    let gocBatDau = normalizedDegree - (dảiĐộVậtThể / 2);
    let gocKetThuc = normalizedDegree + (dảiĐộVậtThể / 2);

    for (let g = gocBatDau; g <= gocKetThuc; g += 1) {
        let gocQuetChuanHoa = ((g % 360) + 360) % 360;
        
        let mốcHậuGầnNhất = Math.round(gocQuetChuanHoa / 5) * 5;
        if (mốcHậuGầnNhất >= 360) mốcHậuGầnNhất = 0;
        
        let hauQuyDoi = Data72Hau[mốcHậuGầnNhất.toString()] || { diem: 60, name: "Không rõ" };
        danhSachHauBiDeLen.add(mốcHậuGầnNhất);
        
        tongDiemHauMạch += hauQuyDoi.diem;
        soDiemQuet++;

        if (typeof kiemTraKhongVong === 'function') {
            let kv = kiemTraKhongVong(gocQuetChuanHoa);
            if (kv) {
                dínhKhôngVongNặng = true;
                loaiKhôngVong = kv.loai;
            }
        }
    }

    // Điểm địa khí trung bình của toàn bộ bề mặt kết cấu
    let diemHauMachTrungBinh = tongDiemHauMạch / soDiemQuet;
    
    // Tính toán ΔH72_Mạch (Biên độ Mạo Long) theo triết lý âm dương đảo ngược
    let bienDoMaoLong = isCatPurpose ? (diemHauMachTrungBinh - 60) : (60 - diemHauMachTrungBinh); 

    // PHƯƠNG TRÌNH SIÊU GỐC HỢP NHẤT: (Điểm_Sơn_Gốc + ΔH72_Mạch)
    let bieuThucGoc = diemGocSon + bienDoMaoLong;

    // PHONG THỦY CAO CẤP: Phạt điểm nếu vật thể quá rộng đè sang các Hậu khác (mất tính thuần khí)
    if (danhSachHauBiDeLen.size > 1 && isCatPurpose) {
        // Mỗi khi lấn thêm 1 Hậu (5 độ), trừ bớt điểm độ thuần khiết của long mạch nạp cát
        bieuThucGoc -= (danhSachHauBiDeLen.size - 1) * 3;
    }

    // ==========================================
    // ─── TẦNG 2: VẬN HÀNH PHẦN NGỌN (THIÊN THỜI & SÁT TINH) ───
    // ==========================================
    
    const namTinhVan = namKhảoSát ? parseInt(namKhảoSát) : new Date().getFullYear();
    const vanSo = Math.floor((namTinhVan - 1864) / 20) % 9 + 1;
    let kVan = 1.0; 
    if (typeof VAN_DATA !== 'undefined' && VAN_DATA[vanSo]?.[codeChuan]) {
        const saoNam = VAN_DATA[vanSo][codeChuan];
        if (isCatPurpose) {
            kVan = (saoNam.loai === "best") ? 1.15 : (saoNam.loai === "worst" ? 0.85 : 1.0);
        } else {
            kVan = (saoNam.loai === "worst") ? 1.15 : (saoNam.loai === "best" ? 0.85 : 1.0);
        }
    }

    let diemTinhToan = bieuThucGoc * kVan;

    const satTinhs = typeof getPhongThuySatTinh === 'function' ? getPhongThuySatTinh(sonName, namKhảoSát) : [];
    satTinhs.forEach(sat => {
        let trongSoSat = (sat.ten === "NGŨ HOÀNG ĐẠI SÁT" || sat.ten === "THÁI TUẾ") ? 25 : 15;
        if (isCatPurpose) {
            diemTinhToan -= trongSoSat; 
        } else {
            diemTinhToan += (trongSoSat * 0.8); 
        }
    });

    let gKhai = 1.0;
    if (isCatPurpose) {
        gKhai = laCungCatDiaLy ? 1.1 : 0.9;
    } else {
        gKhai = laCungHungDiaLy ? 1.15 : 0.8; 
    }

    diemTinhToan = diemTinhToan * gKhai;

    // ==========================================
    // ─── TẦNG 3: KHẤU TRỪ / THƯỞNG ĐIỂM KHÔNG VONG ───
    // ==========================================
    let messageGhiChu = isCatPurpose ? (sonInfo?.luanDoan || "") : "";
    let hoaGiaiGợiÝ = isCatPurpose ? (sonInfo?.hoaGiai || "") : "";

    if (dínhKhôngVongNặng) {
        if (isCatPurpose) {
            if (loaiKhôngVong === "ĐẠI KHÔNG VONG") {
                diemTinhToan = 12; 
                messageGhiChu = `❌ [ĐẠI HỌA KHÔNG VONG]: Trục kết cấu nằm đè trúng ranh giới Đại Không Vong, đại cục vô khí khí trường hỗn loạn!`;
                hoaGiaiGợiÝ = `Tuyệt đối không bố trí ${config.title} tại phân độ tử huyệt này.`;
            } else {
                diemTinhToan = Math.min(48, diemTinhToan - 20); 
                messageGhiChu += ` ⚠️ [CẢNH BÁO TIỂU KHÔNG VONG]: Một phần bề rộng vật thể đang liếm sang đường ranh giới rạch sỏi Sơn vị.`;
                hoaGiaiGợiÝ = "Xoay nhẹ hoặc tịnh tiến kết cấu khoảng 2-3 độ để đưa toàn bộ trọng tâm về phân độ mạch thuần.";
            }
        } else {
            if (loaiKhôngVong === "ĐẠI KHÔNG VONG") {
                diemTinhToan = Math.max(88, diemTinhToan + 10);
                messageGhiChu = `🌟 [TỌA ĐẠI KHÔNG VONG TIÊU SÁT]: Vị trí xả uế đè trúng trục ranh giới nhiễu loạn, biến tử huyệt thành nơi xả bỏ tạp khí, cứu vãn mạch đất!`;
                hoaGiaiGợiÝ = "Cách cục sắp đặt cực kỳ thông minh, giữ nguyên vị trí.";
            } else {
                diemTinhToan = Math.max(76, diemTinhToan + 5);
                messageGhiChu += ` 🟢 [TIỂU KHÔNG VONG TIÊU SÁT]: Rìa thiết bị đè trúng trục ranh giới hẹp, giúp bao bọc cách ly tạp khí mạch đất.`;
            }
        }
    }

    // ==========================================
    // ─── TẦNG 4: BỘ LỌC KIỂM ĐỊNH BÁT TRẠCH CUỐI ───
    // ==========================================
    let diemCuoi = diemTinhToan;

    if (!dínhKhôngVongNặng) { 
        if (isCatPurpose) {
            if (laCungCatDiaLy) {
                diemCuoi = Math.max(72, diemCuoi); 
            } else {
                diemCuoi = Math.min(64, diemCuoi); 
            }
        } else {
            if (laCungHungDiaLy) {
                diemCuoi = Math.max(76, diemCuoi); 
                messageGhiChu = `🌟 [TỌA HUNG TRẤN SÁT ĐẮC CÁCH]: Vị trí ${config.title} đặt đè lên hung phương đại cục ${cungBátTrạch} giúp trấn áp tà khí mạch đất.`;
                hoaGiaiGợiÝ = "Trạch pháp đại cát đại lợi, không cần can thiệp hóa giải.";
            } else {
                diemCuoi = Math.min(48, diemCuoi); 
                messageGhiChu = `⚠️ [PHẠM KỊ TIÊU HAO]: Thiết bị uế khí đặt đè lên phương vị Cát khí sinh khí của bản mệnh (${cungBátTrạch}) làm ô nhiễm trường khí.`;
                hoaGiaiGợiÝ = "Khuyên gia chủ nên chủ động dịch chuyển vị trí sang dải Sơn vị có báo màu xanh bên cạnh.";
            }
        }
    }

    diemCuoi = Math.max(10, Math.min(98, Math.round(diemCuoi)));
    
    let level = "HUNG";
    if (diemCuoi >= 85) level = "ĐẠI CÁT";
    else if (diemCuoi >= 72) level = "CÁT VỊ";
    else if (diemCuoi >= 50) level = "TRUNG BÌNH";

    // Trả về thêm siêu dữ liệu dải quét để hiển thị trực quan lên UI giao diện
    return {
        diem: diemCuoi, level, message: messageGhiChu, hoaGiai: hoaGiaiGợiÝ,
        khongVong: dínhKhôngVongNặng ? { loai: loaiKhôngVong } : null, 
        satTinhs, sonName, sonInfo, 
        hauInfo: getCurrentHauInfo(normalizedDegree),
        scanMetrics: {
            passedWidth: dảiĐộVậtThể,
            totalHauOccupied: danhSachHauBiDeLen.size
        }
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

function togglePanel() {
    const content = document.getElementById('panelContent');
    const arrow = document.getElementById('toggleArrow');
    
    // Kiểm tra class để đóng/mở
    if (content.classList.contains('collapsed')) {
        content.classList.remove('collapsed');
        arrow.innerHTML = '▲';
    } else {
        content.classList.add('collapsed');
        arrow.innerHTML = '▼';
    }
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

// Biến toàn cục điều khiển trạng thái la bàn số
let isCompassHold = false;
let holdedHeading = 0;

// =========================================================================
// 🌌 MA TRẠN DỮ LIỆU PHONG THỦY LÕI - THIÊN ĐỊA NHÂN PHÂN TẦNG THỰC CHỨNG
// =========================================================================
const DATA_TRACH_NHAT_CAO_CAP = {
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
        "Pha": { cat: [], hung: ["all", "earth", "house", "door", "bed", "kitchen", "toilet", "gate", "altar", "safe", "counter", "shop"], text: "Chu hình xung, đổ vỡ. Năng lượng vũ trụ cực kỳ hỗn loạn, tuyệt đối đại kỵ khởi công, động thổ mọi hạng mục." },
        "Nguy": { cat: [], hung: ["earth", "travel", "house", "gate"], text: "Chu hiểm nguy, rình rập. Trường khí mang tính rủi ro cao, kỵ phạt mộc động thổ, dễ gặp tai nạn va chạm bất ngờ." },
        "Thanh": { cat: ["house", "door", "bed", "work", "store", "gate", "altar", "workspace", "ceo_office", "counter", "shop", "salon"], hung: ["toilet", "sewer", "septic_tank"], text: "Chu vạn sự thành tựu, thiên địa hộ trì. Đại cát để khởi công xây nhà, lập hướng cửa chính, an vị giường ngủ." },
        "Thu": { cat: ["store", "warehouse", "safe", "storage"], hung: ["earth", "door", "gate", "balcony"], text: "Chu thu hoạch, tích lũy Thích hợp lập két sắt, quầy thu ngân buôn bán, kỵ đào móng mở hướng cửa nạp khí." },
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
        },
        NAP_AM_CAN_CHI: {
            "GiapDan": "Moc", "AtMao": "Moc", "NhamThin": "Thuy", "QuyTỵ": "Thuy", "BinhNgo": "Thuy", "DinhMui": "Thuy",
            "GiapThan": "Thuy", "AtDau": "Thuy", "BinhTuat": "Tho", "DinhHoi": "Tho", "MauTy": "Hoa", "KySuu": "Hoa",
            "CanhDan": "Moc", "TanMao": "Moc", "MauNgo": "Tho", "KyMui": "Tho", "CanhTuat": "Kim", "TanHoi": "Kim",
            "NhamTy": "Moc", "QuySuu": "Moc", "GiapTuat": "Hoa", "AtHoi": "Hoa", "BinhTy": "Thuy", "DinhSuu": "Thuy",
            "MauDan": "Tho", "KyMao": "Tho", "CanhThan": "Tho", "TanDau": "Tho", "NhamNgo": "Moc", "QuyMui": "Moc",
            "GiapThan": "Thuy", "AtDau": "Thuy", "BinhThan": "Hoa", "DinhDau": "Hoa", "MauTuat": "Moc", "KyHoi": "Moc",
            "CanhTy": "Thuy", "TanSuu": "Thuy", "NhamDan": "Kim", "QuyMao": "Kim", "GiapTỵ": "Hoa", "AtNgo": "Hoa",
            "BinhDan": "Hoa", "DinhMao": "Hoa", "MauThan": "Tho", "KyDau": "Tho", "CanhNgo": "Tho", "TanMui": "Tho",
            "NhamTuat": "Thuy", "QuyHoi": "Thuy", "GiapSuu": "Kim", "AtDan": "Kim", "BinhTỵ": "Tho", "DinhNgo": "Tho"
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
        "Thin": "Thìn (07h-09h)", "Tỵ": "Tỵ (09h-11h)", "Ngo": "Ngọ (11h-13h)", "Mui": "Mùi (13h-15h)",
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

// =========================================================================
// 🧠 PHÂN HỆ THUẬT TOÁN ĐỘNG: ĐỊNH VỊ THỜI KHÔNG VÀ TIẾT KHÍ CHÍNH TÔNG
// =========================================================================

function layCanChiNgayChinhXac(y, m, d) {
    if (m <= 2) { y -= 1; m += 12; }
    let A = Math.floor(y / 100);
    let B = Math.floor(A / 4);
    let C = 2 - A + B;
    let E = Math.floor(365.25 * (y + 4716));
    let F = Math.floor(30.6001 * (m + 1));
    let jd = C + d + E + F - 1524.5; 
    
    let k = Math.floor(jd + 1.5) + 5;
    let chiIndex = k % 12;
    let canIndex = (k % 10);

    const canArr = ["Giap", "At", "Binh", "Dinh", "Mau", "Ky", "Canh", "Tan", "Nham", "Quy"];
    const chiArr = ["Ty", "Suu", "Dan", "Mao", "Thin", "Tỵ", "Ngo", "Mui", "Than", "Dau", "Tuat", "Hoi"];
    const chiTiengViet = { "Ty": "Tý", "Suu": "Sửu", "Dan": "Dần", "Mao": "Mão", "Thin": "Thìn", "Tỵ": "Tỵ", "Ngo": "Ngọ", "Mui": "Mùi", "Than": "Thân", "Dau": "Dậu", "Tuat": "Tuất", "Hoi": "Hợi" };
    const canTiengViet = { "Giap": "Giáp", "At": "Ất", "Binh": "Bính", "Dinh": "Đinh", "Mau": "Mậu", "Ky": "Kỷ", "Canh": "Canh", "Tan": "Tân", "Nham": "Nhâm", "Quy": "Quý" };

    return {
        chi: chiArr[chiIndex],
        can: canArr[canIndex],
        text: `${canTiengViet[canArr[canIndex]]} ${chiTiengViet[chiArr[chiIndex]]}`
    };
}

function layThangTietKhiVaTruc(y, m, d, chiNgay) {
    const tinhMocTietKhiChuan = (nam, thang) => {
        const mốcGốc = [5.42, 4.15, 5.36, 5.41, 5.72, 5.92, 7.45, 7.82, 8.12, 8.45, 7.55, 7.35];
        let dacTinhPhu = (nam - 2000) * 0.2422 - Math.floor((nam - 2000) / 4);
        return Math.floor(mốcGốc[thang - 1] + dacTinhPhu);
    };

    let ngàyCắtTiết = tinhMocTietKhiChuan(y, m);
    let thangTietKhi = m;
    
    if (d < ngàyCắtTiết) {
        thangTietKhi = m === 1 ? 12 : m - 1;
    }

    const chiCuaThangTietKhi = ["Dan", "Mao", "Thin", "Tỵ", "Ngo", "Mui", "Than", "Dau", "Tuat", "Hoi", "Ty", "Suu"];
    let chiThang = chiCuaThangTietKhi[(thangTietKhi - 2 + 12) % 12]; 

    const chiArr = ["Ty", "Suu", "Dan", "Mao", "Thin", "Tỵ", "Ngo", "Mui", "Than", "Dau", "Tuat", "Hoi"];
    const danhSachTruc = ["Kien", "Tru", "Man", "Binh", "Dinh", "Chap", "Pha", "Nguy", "Thanh", "Thu", "Khai", "Be"];
    
    let idxChiThang = chiArr.indexOf(chiThang);
    let idxChiNgay = chiArr.indexOf(chiNgay);
    let hieuso = (idxChiNgay - idxChiThang + 12) % 12;
    
    return {
        thangTietKhi: thangTietKhi,
        chiThangText: chiThang,
        trucName: danhSachTruc[hieuso]
    };
}

function tuDongTinhCuuTinhLuuNien(sonName, namKhaoSat) {
    let maSoNam = (11 - (namKhaoSat % 9)) % 9;
    if (maSoNam === 0) maSoNam = 9;

    let huongNha = DATA_TRACH_NHAT_CAO_CAP.SON_TO_HUONG_MAP[sonName] || "Trung Cung";
    let cungViNha = DATA_TRACH_NHAT_CAO_CAP.HUONG_TO_SAO_LUU_NIEN[huongNha];
    
    let saoDaoPhuong = (maSoNam - (cungViNha - 5) + 9) % 9;
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
    if (tamTaiMap[chiTuoi]?.includes(chiNamHienTai)) {
        result.isOk = false;
        result.tamTai = true;
        result.reasons.push(`Tam Tai Tuổi Hạn (${chiNamHienTai} niên)`);
    }

    return result;
}

// 🔥 NÂNG CẤP ĐẲNG CẤP CAO: Sửa đổi thuật toán trích xuất top 3 ứng viên mượn tuổi tối ưu nhất để Trạch chủ dễ chọn lựa
function timTuoiQuyNhanMuonTinh(currentYear, sonName, birthYearChuNha) {
    const canGiaLap = ["Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"];
    const chiGiaLap = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];
    const chiChuNha = DATA_TRACH_NHAT_CAO_CAP.CHI_QUY_CHUAN[birthYearChuNha % 12];
    const chiCuaSon = DATA_TRACH_NHAT_CAO_CAP.SON_TO_CHI_MAP[sonName] || "Ty";
    let hanhCuaSon = DATA_TRACH_NHAT_CAO_CAP.HINH_XUNG_QUY_QUYET.NGU_HANH_SON[sonName] || "Tho";

    const napAmHanhChi = {
        "Ty": "Thuy", "Hoi": "Thuy", "Dan": "Moc", "Mao": "Moc",
        "Tỵ": "Hoa", "Ngo": "Hoa", "Than": "Kim", "Dau": "Kim",
        "Suu": "Tho", "Thin": "Tho", "Mui": "Tho", "Tuat": "Tho"
    };

    let danhSachQuyNhandatTieuChuan = [];

    for (let sTuoi = 22; sTuoi <= 68; sTuoi++) {
        let nSinhUngVien = currentYear - sTuoi + 1;
        let checkNhanKhi = kiemTraHanNhanKhiChinhXac(nSinhUngVien, currentYear);
        if (!checkNhanKhi.isOk) continue;

        let chiUngVien = DATA_TRACH_NHAT_CAO_CAP.CHI_QUY_CHUAN[nSinhUngVien % 12];
        let hinhXung = DATA_TRACH_NHAT_CAO_CAP.HINH_XUNG_QUY_QUYET;

        if (hinhXung.LUC_XUNG[chiUngVien] === chiChuNha || hinhXung.LUC_XUNG[chiUngVien] === chiCuaSon) continue;
        if (hinhXung.LUC_HAI[chiUngVien] === chiChuNha || hinhXung.LUC_HAI[chiUngVien] === chiCuaSon) continue;
        if (hinhXung.TU_PHA[chiUngVien] === chiChuNha || hinhXung.TU_PHA[chiUngVien] === chiCuaSon) continue;

        let hanhUngVien = napAmHanhChi[chiUngVien];
        if ((hanhUngVien === "Thuy" && hanhCuaSon === "Hoa") ||
            (hanhUngVien === "Hoa" && hanhCuaSon === "Kim") ||
            (hanhUngVien === "Tho" && hanhCuaSon === "Thuy") ||
            (hanhUngVien === "Moc" && hanhCuaSon === "Tho") ||
            (hanhUngVien === "Kim" && hanhCuaSon === "Moc")) {
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

// 🔥 SIÊU NÂNG CẤP ĐẰNG CẤP CAO: Giải thuật nội suy "Can Giờ" từ "Can Ngày" phục vụ bóc tách Giờ Sát khí động
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
    const huongNhaDaiCuc = DATA_TRACH_NHAT_CAO_CAP.SON_TO_HUONG_MAP[sonName] || "N";
    const configHangMuc = typeof ConfigPhongThuy !== 'undefined' ? ConfigPhongThuy[mucDich] : { title: "Hạng mục", isCat: true };

    let danhSachNgayTot = [];
    const realDate = new Date();
    
    let ngayBatDauQuet = 1;
    if (namKhaoSat === realDate.getFullYear() && thangKhaoSat === (realDate.getMonth() + 1)) {
        ngayBatDauQuet = realDate.getDate(); 
    }

    let soNgayTrongThang = new Date(namKhaoSat, thangKhaoSat, 0).getDate();
    const tenChiNamKhaoSat = satTinhMaTran.thaiTueArr[namKhaoSat % 12];
    const phuongViTamSatNam = satTinhMaTran.tamSat[namKhaoSat % 12 >= 9 || namKhaoSat % 12 <= 2 ? "Than Ty Thin" : namKhaoSat % 12 <= 5 ? "Tỵ Dau Suu" : namKhaoSat % 12 <= 8 ? "Hoi Mao Mui" : "Dan Ngo Tuat"];

    let thongTinSaoLuuNien = typeof tuDongTinhCuuTinhLuuNien === 'function' ? tuDongTinhCuuTinhLuuNien(sonName, namKhaoSat) : { maSao: 1, isHung: false };

    for (let ngay = ngayBatDauQuet; ngay <= soNgayTrongThang; ngay++) {
        let canChiNgayObj = layCanChiNgayChinhXac(namKhaoSat, thangKhaoSat, ngay);
        let phanHeTruc = layThangTietKhiVaTruc(namKhaoSat, thangKhaoSat, ngay, canChiNgayObj.chi);

        if (!phanHeTruc || !phanHeTruc.trucName) continue;

        let diemNgay = 70; 
        let lyDoThuong = [];
        let lyDoPhat = [];
        let biKhoaBoiDaiSat = false;

        let chuoiCanChiNgay = `${canChiNgayObj.can}${canChiNgayObj.chi}`;
        if (hinhXungQuyQuyet.THIEN_LOC[canChuNhaKey] === canChiNgayObj.chi) {
            diemNgay += 15; lyDoThuong.push("Đắc ngày Thiên Lộc (Đại cát tiến bảo, hưng thịnh tài vận)");
        }
        if (hinhXungQuyQuyet.THIEN_MA[chiTuoiChuNhaKey] === canChiNgayObj.chi) {
            diemNgay += 10; lyDoThuong.push("Đắc ngày Thiên Mã (Khí trường hanh thông, vạn sự nhanh chóng cát thành)");
        }
        if (hinhXungQuyQuyet.QUY_NHAN[canChuNhaKey]?.includes(canChiNgayObj.chi)) {
            diemNgay += 15; lyDoThuong.push("Đắc ngày Quý Nhân phù trợ (Hóa giải hung hiểm, quý nhân trợ lực)");
        }

        if (hinhXungQuyQuyet.TAM_HOP_CUC[chiTuoiChuNhaKey]?.includes(canChiNgayObj.chi)) {
            diemNgay += 10; lyDoThuong.push("Đắc ngày khí trường Tam Hợp Bản Mệnh");
        }
        if (hinhXungQuyQuyet.LUC_HOP[chiTuoiChuNhaKey] === canChiNgayObj.chi) {
            diemNgay += 10; lyDoThuong.push("Đắc ngày khí trường Lục Hợp cát khí");
        }

        let hanhNgay = hinhXungQuyQuyet.NAP_AM_CAN_CHI[chuoiCanChiNgay] || "Tho";
        let thucTeChuMenh = typeof chủMệnh !== 'undefined' ? chủMệnh : "Kham";
        const maTranNguHanhCungPhi = { "Kham": "Thuy", "Ly": "Hoa", "Chan": "Moc", "Ton": "Moc", "Can": "Kim", "Doai": "Kim", "Can_Tho": "Tho", "Khon": "Tho" };
        let hanhMenhChu = maTranNguHanhCungPhi[thucTeChuMenh] || "Tho";

        if ((hanhNgay === "Thuy" && hanhMenhChu === "Moc") || (hanhNgay === "Moc" && hanhMenhChu === "Hoa") || (hanhNgay === "Hoa" && hanhMenhChu === "Tho") || (hanhNgay === "Tho" && hanhMenhChu === "Kim") || (hanhNgay === "Kim" && hanhMenhChu === "Thuy")) {
            diemNgay += 10; lyDoThuong.push("Ngũ hành nạp âm ngày Tương Sinh niên mệnh trạch chủ");
        }

        if (thongTinSaoLuuNien.maSao === 5) {
            diemNgay -= 40; lyDoPhat.push("Hướng nhà phạm Ngũ Hoàng Đại Sát niên tinh đóng cung chính");
            biKhoaBoiDaiSat = true; 
        }
        if ([5, 14, 23].includes(ngay)) { 
            diemNgay -= 35; lyDoPhat.push("Phạm Nguyệt Kỵ (Trăm việc đều tổn hao)");
        }

        if (canChiNgayObj.chi === hinhXungQuyQuyet.LUC_XUNG[chiCuaSon]) {
            diemNgay -= 50; lyDoPhat.push(`Lục Xung Chiếu Hướng nhà (Trực xung trục Sơn ${sonName})`);
            biKhoaBoiDaiSat = true;
        }

        const chiTiengVietNgay = canChiNgayObj.text.split(" ")[1];
        const keyChiNgayChuan = satTinhMaTran.chiTiengVietToKey[chiTiengVietNgay] || "Ty";
        const phuongViCuaNgay = satTinhMaTran.phuongViChi[keyChiNgayChuan];

        if (huongNhaDaiCuc === phuongViTamSatNam && phuongViCuaNgay === phuongViTamSatNam) {
            diemNgay -= 30; lyDoPhat.push(`Phạm ngày Tam Sát Lưu Nhật phương vị trạch đất`);
        }
        if (hinhXungQuyQuyet.LUC_XUNG[keyChiNgayChuan] === tenChiNamKhaoSat) {
            diemNgay -= 40; lyDoPhat.push(`Phạm ngày Tuế Phá trực xung thiên khí năm`);
            biKhoaBoiDaiSat = true;
        }

        let canNgayKey = canChiNgayObj.can;
        if (hinhXungQuyQuyet.CAN_XUNG[canNgayKey] === canChuNhaKey && canChiNgayObj.chi === hinhXungQuyQuyet.LUC_XUNG[chiTuoiChuNhaKey]) {
            diemNgay -= 60; lyDoPhat.push("❌ ĐẠI KỴ: Ngày phạm THIÊN KHẮC ĐỊA XUNG trực diện tuổi Gia Chủ");
            biKhoaBoiDaiSat = true; 
        } else if (canChiNgayObj.chi === hinhXungQuyQuyet.LUC_XUNG[chiTuoiChuNhaKey]) {
            diemNgay -= 35; lyDoPhat.push("Trực Xung Địa Chi Bản Mệnh Tuổi Gia Chủ");
        }

        let cauHinhTruc = DATA_TRACH_NHAT_CAO_CAP.THAP_NHI_KIEN_TRU[phanHeTruc.trucName];
        if (cauHinhTruc) {
            if (configHangMuc.isCat && cauHinhTruc.cat.includes(mucDich)) {
                diemNgay += 10; lyDoThuong.push(`Trực ${phanHeTruc.trucName} đắc cách hạng mục hành sự`);
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
                let biXungNgay = hinhXungQuyQuyet.LUC_XUNG[chiGio] === canChiNgayObj.chi;
                let biXungMenh = hinhXungQuyQuyet.LUC_XUNG[chiGio] === chiTuoiChuNhaKey;
                let biTuyetLo = hinhXungQuyQuyet.CAN_XUNG[canGio] === canChiNgayObj.can;

                if (!biXungNgay && !biXungMenh && !biTuyetLo) {
                    gioCatTuongReal.push(DATA_TRACH_NHAT_CAO_CAP.GIO_DICH_NGHIA[chiGio]);
                } else {
                    gioHungKiReal.add(chiGio);
                }
            });

            ["Ty", "Suu", "Dan", "Mao", "Thin", "Tỵ", "Ngo", "Mui", "Than", "Dau", "Tuat", "Hoi"].forEach(g => {
                if (hinhXungQuyQuyet.LUC_XUNG[g] === canChiNgayObj.chi || hinhXungQuyQuyet.LUC_XUNG[g] === chiTuoiChuNhaKey) {
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
// 🏆 HÀM BIÊN SOẠN BÁO CÁO PHONG THỦY SỐ THƯỢNG TẦNG - SỬA LỖI HIỂN THỊ CHẮT LỌC MẢNG
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

    let thongTin72Hau = { ten: "Đang quét mạch", chatLuong: "Bình Hòa" };
    if (typeof Data72Hau !== 'undefined') {
        let gocChuan72 = (Math.floor(degree / 5) * 5).toFixed(1);
        if (Data72Hau[gocChuan72]) {
            thongTin72Hau = Data72Hau[gocChuan72];
        } else {
            let keys = Object.keys(Data72Hau).map(Number);
            let closest = keys.reduce((prev, curr) => (Math.abs(curr - degree) < Math.abs(prev - degree) ? curr : prev));
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
    let bieuTuongTrangThai = '<span style="background:#30d158; color:#000; padding:5px 12px; border-radius:4px; font-weight:bold; font-size:0.85rem; display:inline-block; margin-bottom:8px;">HÀNH SỰ ĐẮC CÁCH (LÀM ĐƯỢC NGAY)</span>';
    let mauChu = "#30d158";

    if (isKhongVong || (laCungHungDiaLy && config.isCat)) {
        thongDiepTốiCao = "🔴 [PHONG TỎA ĐỊA LÝ TĨNH - TUYỆT ĐỐI KHÔNG THỂ LÀM]";
        bieuTuongTrangThai = '<span style="background:#ff3b30; color:#fff; padding:5px 12px; border-radius:4px; font-weight:bold; font-size:0.85rem; display:inline-block; margin-bottom:8px;">VỊ TRÍ PHẠM TỬ HUYỆT ĐẤT (KHÔNG THỂ LÀM)</span>';
        mauChu = "#ff3b30";
    } else if (luuNienObj.isHung || thongTin72Hau.chatLuong.includes("Hung")) {
        thongDiepTốiCao = "⚠️ [THỜI TINH QUẤY NHIỄU - DỜI NGÀY HOẶC HÓA GIẢI]";
        bieuTuongTrangThai = '<span style="background:#ff9f0a; color:#000; padding:5px 12px; border-radius:4px; font-weight:bold; font-size:0.85rem; display:inline-block; margin-bottom:8px;">CẦN ĐỔI THỜI GIAN HOẶC TRẤN YỂM (CÓ THỂ LÀM)</span>';
        mauChu = "#ff9f0a";
    }

    if (config.isCat) {
        if (ketQuaTrachNhat.length > 0 && !isKhongVong && !(laCungHungDiaLy && config.isCat)) {
            let topNgay = ketQuaTrachNhat.slice(0, 7); 
            lichTrachNhatHTML = `<div style="margin-top:15px; background:rgba(48,209,88,0.06); padding:12px; border-radius:8px; border:1px solid #30d158;">
                <b style="color:#30d158; display:block; margin-bottom:8px; font-size:0.9rem;">📅 HỆ THỐNG TRÍCH XUẤT CÁC NGÀY ĐẠI CÁT ĐẮC VƯỢNG TINH TRONG THÁNG:</b>`;
            topNgay.forEach(n => {
                let listThuong = n.advantages.map(adv => `<span style="color:#30d158;">• ${adv}</span>`).join('<br>');
                let listPhat = n.disadvantages.map(dis => `<span style="color:#ff4444;">• ${dis}</span>`).join('<br>');
                
                lichTrachNhatHTML += `
                <div style="padding:10px 0; border-bottom:1px dashed rgba(255,255,255,0.1); font-size:0.85rem; line-height:1.6;">
                    • <b>Ngày Dương Lịch:</b> <span style="color:#ffd700; font-weight:bold;">${n.solarDate}</span> | <b>Can Chi:</b> <span style="color:#fff;">${n.canChiText}</span> | <b>Trọng Số Thời Vận:</b> <b style="color:#30d158;">${n.score} điểm</b><br>
                    • <b>Thần Sát Nhật Trực:</b> Trực <span style="color:#30d158; font-weight:bold;">${n.trucName}</span> (${n.trucText})<br>
                    ${listThuong ? `• <b>Cát Tinh Hội Tụ:</b><br>${listThuong}<br>` : ''}
                    ${listPhat ? `• <b>Sát Khí Đi kèm:</b><br>${listPhat}<br>` : ''}
                    • <span style="color:#30d158;">🟢 <b>GIỜ ĐẠI CÁT KHỞI SỰ:</b></span> <b style="color:#fff;">${n.goldHours.slice(0, 4).join(' / ')}</b><br>
                    • <span style="color:#ff4444;">🔴 <b>GIỜ ĐẠI KỴ CẤM KỴ:</b></span> <span style="color:#aaa;">${n.blackHours.join(' / ')}</span>
                </div>`;
            });
            lichTrachNhatHTML += `</div>`;
        } else {
            lichTrachNhatHTML = `<div style="margin-top:15px; background:rgba(255,59,48,0.06); padding:12px; border-radius:8px; border:1px solid #ff3b30; font-size:0.85rem; color:#eee; line-height:1.5;">
                <b>📅 LỆNH PHONG TỎA LỊCH PHÁP:</b> Đất nền địa lý đang bị lỗi tọa vị tĩnh nghiêm trọng ở phần Gốc, việc tìm ngày tốt phần Ngọn hoàn toàn vô nghĩa. Hệ thống tự động khóa bảng ngày lành để bảo vệ trạch chủ.
            </div>`;
        }

        if (!checkHanNhanKhi.isOk && laHangMucDaiSu) {
            const razones = checkHanNhanKhi.reasons.join(' + ');
            
            // 🔥 ĐỒNG BỘ ĐỘT PHÁ TỐI CAO: Gọi hàm lấy mảng Top 3 ứng viên mượn tuổi
            const mangQuyNhan = timTuoiQuyNhanMuonTinh(namKhaoSat, sonChuan, namAmMệnhChủ);
            
            // Duyệt nội suy mảng ứng viên để in ra chuỗi danh sách sang HTML giao diện không bị crash
            let danhSachTuoiHTML = "";
            mangQuyNhan.forEach((q, index) => {
                danhSachTuoiHTML += `<br>&nbsp;&nbsp;+ <b>Ứng viên ${index + 1}:</b> Tuổi <span style="color:#30d158; font-weight:bold;">${q.name}</span> (Sinh năm ${q.year} — Hiện tại ${q.age} tuổi mụ)`;
            });

            matPhapMuonTuoiHTML = `
            <div style="margin-top:12px; background:rgba(255,159,10,0.06); padding:12px; border-radius:8px; border:1px solid #ff9f0a; font-size:0.85rem; line-height:1.6;">
                <b style="color:#ff9f0a; display:block; margin-bottom:4px;">👥 MẬT PHÁP NHÂN KHÍ ĐẠI SỰ - ỦY THÁC MƯỢN TUỔI ĐỘNG THỔ:</b>
                Gia chủ dính trọng kỵ hạn tuổi: <span style="color:#ff4444; font-weight:bold;">${razones}</span>. Vì đây là hạng mục xây dựng phá vỡ đất đai lớn (<b>${config.title}</b>), trạch chủ nên ủy thác một trong các tuổi đại hợp sau đây đứng tên làm lễ để mượn dòng sinh khí khang thịnh:${danhSachTuoiHTML}
            </div>`;
        } else if (!checkHanNhanKhi.isOk && !laHangMucDaiSu) {
            matPhapMuonTuoiHTML = `
            <div style="margin-top:12px; background:rgba(48,209,88,0.06); padding:12px; border-radius:8px; border:1px solid #30d158; font-size:0.85rem; color:#eee;">
                ✅ <b>AN VỊ TIỂU SỰ NỘI THẤT:</b> Mặc dù bản mệnh gia chủ có vướng niên hạn tuổi xấu, nhưng vì hạng mục hành sự là bài trí sắp đặt không phá dỡ nền móng long mạch cốt lõi (<b>${config.title}</b>), gia chủ **hoàn toàn có thể tự tay thực hiện an vị đặt giường/bàn làm việc/quầy kệ** vào ngày giờ cát tường mà không cần làm thủ tục mượn tuổi.
            </div>`;
        } else {
            matPhapMuonTuoiHTML = `
            <div style="margin-top:12px; background:rgba(48,209,88,0.06); padding:12px; border-radius:8px; border:1px solid #30d158; font-size:0.85rem; color:#eee;">
                ✅ <b>NHÂN KHÍ KHANG THỊNH:</b> Bản mệnh tuổi đương số sạch sẽ không phạm hạn lớn, hoàn toàn tự tay khởi sự động thổ và bài trí cát tường.
            </div>`;
        }
    }

    let dienGiaiChuyenSauHTML = "";
    let quẻMệnhBátTrạchChuẩn = (cungTrach.includes("Sinh Khí") || cungTrach.includes("Thiên Y") || cungTrach.includes("Diên Niên") || cungTrach.includes("Phục Vị")) ? `<span style="color:#30d158; font-weight:bold;">Cung Cát Khí ${cungTrach}</span>` : `<span style="color:#ff3b30; font-weight:bold;">Cung Hung Hại ${cungTrach}</span>`;

    if (isKhongVong) {
        dienGiaiChuyenSauHTML = `Tọa độ la bàn thực địa phản hồi đường biên chết Đại Không Vong/Tiểu Không Vong cực hiểm. Tại điểm gãy long mạch này, trường từ trường quay nhiễu loạn vỡ vụn. **TUYỆT ĐỐI KHÔNG ĐƯỢC PHÉP THI CÔNG**, nếu cố tình đặt kết cấu kết cấu ${config.title} tại đây sẽ kích động tai ương, hại nhân đinh, tài vận tiêu tán không thể cứu vãn.`;
    } else if (laCungHungDiaLy && config.isCat) {
        dienGiaiChuyenSauHTML = `Sai sót nghiêm trọng từ phần Gốc Địa Lý Tĩnh! Hạng mục ${config.title} đòi hỏi phải thu nạp sinh khí tối cao nhưng hiện trạng la bàn báo đang đóng đè lên ${quẻMệnhBátTrạchChuẩn} bản mệnh. Lỗi phong thủy tọa vị tĩnh này sẽ triệt tiêu năng lượng vượng, khiến công việc bế tắc, tổn hao sức khỏe trường kỳ.`;
    } else {
        dienGiaiChuyenSauHTML = `Khảo sát long mạch đắc vị thông suốt. Không gian đất nền tại vị trí này đón trọn dòng trường khí đắc cách từ ${quẻMệnhBátTrạchChuẩn}. Đồng thời luồng địa mạch chạy ngầm khớp thẳng vào **72 Long Khí Xuyên Sơn: Mạch ${thongTin72Hau.ten} (${thongTin72Hau.chatLuong})**. Thiên Địa giao hòa đạt chỉ số năng lượng tối cao **${tongHop.diem}/98 điểm**, gia trạch hưng vượng bền vững.`;
    }

    let matPhapXửLýChuyênSâu = tongHop.hoaGiai;
    if (laCungHungDiaLy || isKhongVong) {
        matPhapXửLýChuyênSâu = `
        <div style="line-height: 1.6; color: #eee;">
            ⚠️ <b style="color:#ff3b30;">ĐIỀU TIẾT THƯỢNG TẦNG - PHƯƠNG ÁN XỬ LÝ KHÔNG THỂ DỜI:</b><br>
            Vì vị trí ${config.title} phạm lỗi tọa vị tĩnh cốt lõi của mảnh đất, việc chọn ngày giờ (phần Ngọn thời gian) hoàn toàn vô tác dụng. Phương án sửa đổi duy nhất là trạch chủ buộc phải dịch chuyển vị trí thiết bị vật chất, hoặc kích hoạt khẩn cấp năng lượng hóa giải của pháp bảo hệ thống: <span style="color:#ffd700; font-weight:bold;">${tongHop.hoaGiai}</span> để che chở trục khí.
        </div>`;
    }

    let html = `
        <div style="text-align: center; border-bottom: 2px solid var(--gold); padding-bottom: 12px; margin-bottom: 15px;">
            <div style="font-size: 0.8rem; color: #dfb76c; letter-spacing: 1.5px; font-weight:bold;">✨ THƯỢNG TẦNG TỔNG LUẬN GIẢI PHONG THỦY SỐ VẬN 9 ✨</div>
            <div style="font-size: 1.1rem; font-weight: 900; color: ${mauChu}; margin-top: 6px; text-shadow: 0 0 8px rgba(0,0,0,0.5);">${thongDiepTốiCao}</div>
        </div>

        <div style="font-size: 0.9rem; line-height: 1.7; color: #fff; background: rgba(255,255,255,0.03); padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06); margin-bottom: 12px;">
            <div style="text-align:center;">${bieuTuongTrangThai}</div>
            <div style="margin-bottom: 6px;">👤 <b>Đương số chủ sự:</b> <span style="color:var(--gold); font-weight:bold;">${name}</span> | Cung Phi Bản Mệnh: <b style="color:#ffd700;">Quẻ mạng ${thucTeChuMenh} (${nguHanhCungPhiText})</b> [${namAmMệnhChủ} âm lịch]</div>
            <div style="margin-bottom: 6px;">📐 <b>Tọa độ đo thực địa:</b> <span style="color:#ffca28; font-weight:bold;">${degree}°</span> — Sơn hướng quản lý: <span style="color:var(--gold); font-weight:bold;">Sơn ${sonChuan}</span></div>
            <div style="margin-bottom: 6px;">🔮 <b>72 Long Khí Xuyên Sơn:</b> <span style="color:#ffd700; font-weight:bold;">Mạch ${thongTin72Hau.ten}</span> — Phân cấp long khí: <b style="color:${thongTin72Hau.chatLuong.includes('Hung') ? '#ff3b30' : '#30d158'};">${thongTin72Hau.chatLuong}</b></div>
            <div style="margin-bottom: 6px;">🎯 <b>Hạ tầng hoạch định:</b> Thiết lập cấu trúc hệ thống [<b>${config.title}</b>]</div>
            <div style="margin-bottom: 6px;">📊 <b>Năng lượng thời vận:</b> <span style="color:${mauChu}; font-weight:black; font-size:1.05rem;">${tongHop.diem}/98 điểm</span> — Cấp độ khí trường: <span style="color:${mauChu}; font-weight:bold;">${tongHop.level}</span></div>
            <div style="margin-bottom: 2px;">⏳ <b>Từ trường Cửu Tinh (${namKhaoSat}):</b> <span style="color:${luuNienObj.isHung ? '#ff9f0a' : '#30d158'}; font-weight:500;">${luuNienObj.tenSao} chiếm đóng</span></div>
        </div>

        <div style="padding: 12px; background: rgba(0,0,0,0.3); border-left: 4px solid ${mauChu}; font-size: 0.88rem; color: #e5e5ea; text-align: justify; line-height: 1.6; margin-bottom: 12px; border-radius: 0 8px 8px 0;">
            <b>🔮 KHẨU QUYẾT BIỆN GIẢI CHUYÊN SÂU TỪ BỰC THẦY (BÁT TRẠCH ĐỒNG TRỤC LONG KHÍ):</b><br>
            ${dienGiaiChuyenSauHTML}
        </div>

        <div style="margin-top: 10px; font-size:0.86rem; margin-bottom: 12px;">
            <b style="color:var(--gold); display:block; margin-bottom:4px; border-bottom:1px solid rgba(223,183,108,0.2); padding-bottom:3px;">💡 MẬT PHÁP ĐIỀU TIẾT PHÁP BẢO VẬT PHẨM NỀN MÓNG:</b>
            <div style="color:#ddd; padding:10px; background:rgba(255,159,10,0.03); border:1px solid rgba(255,159,10,0.15); border-radius:6px; text-align: justify;">
                ${matPhapXửLýChuyênSâu}
            </div>
        </div>

        ${lichTrachNhatHTML}
        ${matPhapMuonTuoiHTML}
        
        <div style="text-align:center; font-size:0.75rem; color:#666; margin-top:15px; font-style:italic;">
            * Báo cáo tối cao kết xuất tự động bởi toán pháp thiên văn học Julian Vận 9 thực hành ngày xem 06/06/2026.
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
// 🖐️ PHÂN HỆ TOUCH HOLD 2 GIÂY ĐỂ KHÓA / 2 GIÂY ĐỂ MỞ LA BÀN (BẢN CHUẨN HOÀN THIỆN)
// =========================================================================
function kichHoatBoLangNgheTouchLaBan() {
    const vungLaBan = document.getElementById('compass') || document.body;

    // Ngăn chặn triệt để menu ngữ cảnh mặc định khi đè lâu trên thiết bị di động
    vungLaBan.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });

    vungLaBan.addEventListener('touchstart', function(e) {
        const overlay = document.getElementById('tongLuanOverlay');
        if (overlay && overlay.classList.contains('show')) return;

        đangChạmMànHình = true;
        clearTimeout(chạmHoldTimeout);

        if (!window.isCompassHold) {
            // KỊCH BẢN A: Đè im ngón tay 2 giây để KHÓA CỨNG la bàn
            chạmHoldTimeout = setTimeout(() => {
                window.isCompassHold = true;
                if (typeof currentHeading !== 'undefined') {
                    window.holdedHeading = currentHeading;
                }
                
                // Hiệu ứng phản hồi đồ họa
                vungLaBan.classList.add('la-ban-khoa-khí');
                setTimeout(() => vungLaBan.classList.remove('la-ban-khoa-khí'), 600);
                
                // ĐỒNG BỘ MỚI: Gọi hàm kiểm tra form độc lập thay cho hàm cũ đã xóa
                if (typeof kichHoatBoDemDungKim === 'function') {
                    kichHoatBoDemDungKim();
                }
                
                if (typeof showCustomAlert === 'function') {
                    showCustomAlert(`🔒 Đã khóa cứng Long Mạch tại tọa độ thực địa: ${window.holdedHeading}°!`);
                }
            }, 500); 
        } else {
            // KỊCH BẢN B: Đè im ngón tay 2 giây để MỞ KHÓA la bàn
            chạmHoldTimeout = setTimeout(() => {
                window.isCompassHold = false;
                
                // ĐỒNG BỘ MỚI: Gọi hàm quét cập nhật lại trạng thái nút
                if (typeof kichHoatBoDemDungKim === 'function') {
                    kichHoatBoDemDungKim();
                }
                
                if (typeof showCustomAlert === 'function') {
                    showCustomAlert("🔓 Giải phóng mạch khí! La bàn chuyển sang chế độ đo động thực thời.");
                }
            }, 500); 
        }
    }, { passive: true });

    vungLaBan.addEventListener('touchend', function(e) {
        đangChạmMànHình = false;
        clearTimeout(chạmHoldTimeout);
    }, { passive: true });
    
    vungLaBan.addEventListener('touchmove', function(e) {
        clearTimeout(chạmHoldTimeout);
    }, { passive: true });
}

// Khởi động phân hệ khi trang tải xong
document.addEventListener('DOMContentLoaded', kichHoatBoLangNgheTouchLaBan);


// =========================================================================
// 🎯 PHÂN HỆ ĐIỀU KHIỂN ĐỔI MỚI: XỬ LÝ NÚT LUẬN GIẢI THEO ĐỘ ĐỨNG IM & FORM
// =========================================================================
function kichHoatBoDemDungKim() {
    const btnTongLuan = document.getElementById('btn-tong-luan');
    if (!btnTongLuan) return;

    // Nếu đang chủ động khóa la bàn (isCompassHold) thì giữ nguyên hiển thị nút, không chạy đếm nữa
    if (window.isCompassHold) {
        btnTongLuan.classList.add('vượng-xuất');
        return;
    }

    // Kiểm tra dữ liệu đầu vào của các trường form thực tế
    const dayStr = document.getElementById('birthDay')?.value;
    const monthStr = document.getElementById('birthMonth')?.value;
    const yearStr = document.getElementById('birthYear')?.value;
    const mucDich = document.getElementById('purpose')?.value;

    const daNhapDuNgayThangNam = (dayStr && monthStr && yearStr && yearStr.length === 4);
    const daChonDanhMuc = (mucDich && mucDich !== "" && mucDich !== "none");

    // ĐIỀU KIỆN CHẶN: Nếu chưa nhập đủ ngày tháng năm HOẶC chưa chọn danh mục -> Ẩn nút lập tức
    if (!daNhapDuNgayThangNam || !daChonDanhMuc) {
        btnTongLuan.classList.remove('vượng-xuất');
        return;
    }

    // 🌟 CHỈNH SỬA TẠI ĐÂY: Xóa ngay bộ đếm cũ khi kim vừa nhích để kích hoạt chu kỳ chờ mới
    clearTimeout(dừngKimTimeout);

    // Nếu nút ĐÃ xuất hiện rồi, cho phép xê dịch nhẹ (không ẩn ngay). 
    // Khi nào quay liên tục và dừng lại ở hướng mới quá thời gian trễ thì mới tính chu kỳ mới.
    if (btnTongLuan.classList.contains('vượng-xuất')) {
        // Nếu muốn quay thật nhiều mới mất, ta chủ động ẩn nút khi sự kiện bắn liên tục quá nhanh
        dừngKimTimeout = setTimeout(() => {
            btnTongLuan.classList.remove('vượng-xuất');
        }, 100); // Biên độ trễ 100ms chặn quay tít mù
        return;
    }

    // NẾU ĐÃ HỘI TỤ ĐỦ YẾU TỐ: Đợi kim la bàn đứng im (Hạ xuống 200ms để nhạy hơn, đứng im là hiện ngay)
    dừngKimTimeout = setTimeout(() => {
        if (!đangChạmMànHình) {
            btnTongLuan.classList.add('vượng-xuất');
        }
    }, 500); 
}

// Lắng nghe sự kiện thay đổi Form nhập liệu để cập nhật trạng thái nút bấm ngay tức thì
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
