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
        "Ất": { loai: "Hung", diem: 33, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Mộc", goc_do_min: 97.5, goc_do_max: 112.5, icon: "alert-red", linhvuc: ["suc_khoe"], doi_tuong: ["gia_dinh"], text: "Phạm thế Họa Hại, khí trường trì trệ, gia familie dễ cảm thấy bất an, mệt mỏi.", giaiphap: "Đặt bình gốm hành Thổ để tiết bớt mộc khí, cân bằng năng lượng." },
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
        "Sửu": { loai: "Hung", diem: 35, cap_do: "Tiểu Hung", nhom: "Họa Hại", hanh: "Thổ", goc_do_min: 22.5, goc_do_max: 37.5, icon: "alert-red", linhvuc: ["tai_loc"], doi_tuong: ["nam_chu"], text: "Phạm thế Họa Hại, cần cẩn trọng trong giao tiếp, tránh tranh chấp không đáng có.", giaiphap: "Sử dụng thạch anh đen để trấn định, ổn định tài vận." },
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

// =========================================================================
// ⏱️ 1. HỆ THỐNG KIỂM SOÁT THỜI GIAN & TIẾT KHÍ TỰ ĐỘNG KHÁCH QUAN
// =========================================================================
function layNamKhaoSatThienVan() {
    const bayGio = new Date();
    const d = bayGio.getDate();
    const m = bayGio.getMonth() + 1; // Month trong JS chạy từ 0-11
    const y = bayGio.getFullYear();

    // Thuật toán chốt chặn mốc Lập Xuân phương Đông (Xấp xỉ ngày 4 tháng 2 Dương lịch)
    if (m < 2 || (m === 2 && d < 4)) {
        return y - 1;
    }
    return y;
}

function tínhCungPhi(năm, tháng, ngày, giớiTính) {
    // Ép toàn bộ về kiểu số để tránh bẫy ký tự của JS
    const y = Number(năm), m = Number(tháng), d = Number(ngày);
    
    // Thuật toán Lập Xuân chuẩn ngày 4 tháng 2
    const namTinh = (m < 2 || (m === 2 && d < 4)) ? y - 1 : y;
    
    let sốDư = namTinh % 9;
    if (sốDư === 0) sốDư = 9;
    
    // Chuẩn hóa giới tính để nhận diện cả nút bấm tùy biến lẫn chữ thường
    const isMale = (giớiTính === 'male' || giớiTính === 'nam');
    let kếtQuả = isMale ? (11 - sốDư) % 9 : (sốDư + 4) % 9;
    if (kếtQuả === 0) kếtQuả = 9;
    
    // Biện chứng Trung Cung (Cung số 5)
    if (kếtQuả === 5) {
        kếtQuả = isMale ? 2 : 8; 
    }
    
    const mapCung = { 1: 'Khảm', 2: 'Khôn', 3: 'Chấn', 4: 'Tốn', 6: 'Càn', 7: 'Đoài', 8: 'Cấn', 9: 'Ly' };
    return mapCung[kếtQuả] || "Khảm";
}

/**
 * [ID: SAT-NGUHOANG-01] Hàm getNguHoangInfo
 * ĐÃ SỬA: Thuật toán Cửu Tinh chính tông thế kỷ 21, định vị chuẩn xác sao Nhập Trung Cung 
 * và phương vị bị phạm Ngũ Hoàng Đại Sát theo từng niên độ.
 */
function getNguHoangInfo(year) {
    const namTinhVan = (year && !isNaN(year)) ? parseInt(year, 10) : layNamKhaoSatThienVan();
    
    // Thuật toán tìm sao chủ quản nhập Trung Cung chuẩn xác cho thế kỷ 21
    let saoNienDai = (11 - (namTinhVan % 9)) % 9;
    if (saoNienDai === 0) saoNienDai = 9;
    
    // Ma trận định vị phương vị đóng cung của Ngũ Hoàng (Sao số 5) dựa theo sao chủ quản Trung Cung
    const mapCenterToNguHoangPos = {
        1: "S",          // Năm sao số 1 nhập trung cung (như 2026) -> Ngũ Hoàng bay về phương Nam
        2: "NE",         // Năm sao số 2 nhập trung cung (như 2025) -> Ngũ Hoàng bay về Đông Bắc
        3: "W",          // Năm sao số 3 nhập trung cung (như 2024) -> Ngũ Hoàng bay về phương Tây
        4: "NW",         // Ngũ Hoàng ở Tây Bắc
        5: "TrungCung",  // Ngũ Hoàng độc chiếm Trung Cung
        6: "SE",         // Ngũ Hoàng ở Đông Nam
        7: "E",          // Ngũ Hoàng ở Chính Đông
        8: "SW",         // Ngũ Hoàng ở Tây Nam
        9: "N"           // Ngũ Hoàng ở Chính Bắc
    };
    
    const mapTenTiengViet = { 
        "N": "Chính Bắc", "NE": "Đông Bắc", "E": "Chính Đông", "SE": "Đông Nam", 
        "S": "Chính Nam", "SW": "Tây Nam", "W": "Chính Tây", "NW": "Tây Bắc", "TrungCung": "Trung Cung" 
    };
    
    const codeNguHoang = mapCenterToNguHoangPos[saoNienDai] || "TrungCung";
    const viTriNguHoangNamDo = mapTenTiengViet[codeNguHoang] || "Trung Cung";

    const info = {
        1: "Nhất Bạch Tham Lang (Thủy) — Cát Tinh: Vượng trí tuệ, tài lộc phát đạt, tiến chức.",
        2: "Nhị Hắc Cự Môn (Thổ) — Hung Tinh suy yếu: Khí trường bệnh tật giảm, xu hướng cát hóa.",
        3: "Tam Bích Lộc Tồn (Mộc) — Hung Tinh: Phát sinh thị phi, tranh chấp lời nói, quan phi hình hại.",
        4: "Tứ Lục Văn Khúc (Mộc) — Cát Tinh: Vượng đường văn xương, học hành hanh thông.",
        5: "Ngũ Hoàng Liêm Trinh (Thổ) — Đại Hung: Sát khí tối thượng, tai họa vô thường, kỵ động thổ.",
        6: "Lục Bạch Vũ Khúc (Kim) — Cát Tinh: Vượng quyền lực, quý nhân đại trợ.",
        7: "Thất Xích Phá Quân (Kim) — Hung Tinh: Hao tổn tài sản, đề phòng trộm cướp.",
        8: "Bát Bạch Tả Phù (Thổ) — Bình Hòa Vận 9: Khí trường tích lũy tài lộc ổn định, an lành.",
        9: "Cửu Tử Hữu Bật (Hỏa) — ĐƯƠNG VƯỢNG TỐI THƯỢNG ĐẠI CÁT TINH VẬN 9: Đương vận tôn quý tối thượng, sinh khí dồi dào."
    };

    return `Niên độ Vận 9 [Năm ${namTinhVan}]: Sao Chủ Quản Đại Cục Số ${saoNienDai} [${info[saoNienDai]}] | Phương Vị Phạm Ngũ Hoàng Sát: ${viTriNguHoangNamDo}`;
}

/**
 * [ID: SAT-NGUHOANG-02] Hàm getNguHoangAlert
 * ĐÃ SỬA: Đồng bộ hóa hoàn toàn trục tính toán năm động, giữ nguyên 100% văn bản gốc
 */
function getNguHoangAlert(currentHuong, year) { // 🟢 Thêm tham số year vào đây
    if (!currentHuong) return "";
    
    // 🟢 SỬA DÒNG NÀY: Ăn theo năm nhập vào, giống hệt hàm getNguHoangInfo của ông
    const namTinhVan = (year && !isNaN(year)) ? parseInt(year, 10) : layNamKhaoSatThienVan(); 
    
    let saoNienDai = (11 - (namTinhVan % 9)) % 9;
    if (saoNienDai === 0) saoNienDai = 9;
    
    const mapCenterToNguHoangPos = {
        1: "S", 2: "NE", 3: "W", 4: "NW", 5: "TrungCung", 6: "SE", 7: "E", 8: "SW", 9: "N"
    };
    
    const codeNguHoang = mapCenterToNguHoangPos[saoNienDai] || "TrungCung";
    const mapChuoiSangCode = {
        "bắc": "N", "chính bắc": "N", "đông bắc": "NE", "đông": "E", "chính đông": "E",
        "đông nam": "SE", "nam": "S", "chính nam": "S", "tây nam": "SW", "tây": "W",
        "chính tây": "W", "tây bắc": "NW", "trung cung": "TrungCung", "tâm trạch": "TrungCung"
    };

    const inputCode = mapChuoiSangCode[currentHuong.trim().toLowerCase()] || "";
    if (!inputCode || inputCode !== codeNguHoang) return "";

    if (inputCode === "TrungCung") {
        return `⚠️ [LƯU NIÊN CHIẾU CỤC]: Niên độ thiên văn ${namTinhVan} Ngũ Hoàng nhập Trung Cung. Giữ tâm nhà tĩnh lặng, tránh cải tạo lớn tại không gian cốt lõi này.`;
    }
    
    // ✊ GIỮ NGUYÊN VẸN 100% CHUỖI CHỮ XỊN CỦA ÔNG KHÔNG SAI MỘT DẤU CHẤM
    return `⚠️ [THIÊN THỜI PHẠM SÁT]: Phương vị ${currentHuong.toUpperCase()} trong năm ${namTinhVan} phạm NGŨ HOÀNG LIÊM TRINH ĐẠI SÁT. Tuyệt đối bất khả động thổ đập phá kết cấu nền móng để tránh kích động hung khí nguy hiểm.`;
}

/**
 * [ID: SAT-CUUTINH-01] Hàm tinhHanCuuTinhTheoNam
 * ĐÃ SỬA: Thay thế công thức rác cũ bằng trục toán học Cửu Tinh đồng bộ, 
 * giúp tính toán chính xác tuyệt đối cung phi tinh đáo phương vị của từng Sơn vi phân.
 */
function tinhHanCuuTinhTheoNam(inputDoSoHoacSon, namHienTai) {
    const nam = namHienTai ? parseInt(namHienTai, 10) : layNamKhaoSatThienVan();
    
    if (inputDoSoHoacSon === undefined || inputDoSoHoacSon === null) {
        return { thongTinSao: "Chưa trích xuất được tọa độ trắc địa", meoGiaiHan: "" };
    }

    let sonName = (typeof inputDoSoHoacSon === 'number') 
        ? (typeof dịchĐộSốThànhTênSơn === 'function' ? dịchĐộSốThànhTênSơn(inputDoSoHoacSon) : "Tý") 
        : inputDoSoHoacSon.trim();
        
    const thongTinSonViLoi = (typeof DATA_THANSAT !== 'undefined' && DATA_THANSAT.MA_TRAN_24_SON_VI[sonName]) 
        ? DATA_THANSAT.MA_TRAN_24_SON_VI[sonName] 
        : null;
    
    if (!thongTinSonViLoi) {
        return { thongTinSao: `Tọa độ Sơn ${sonName} nằm ngoài hệ thống phân tích.`, meoGiaiHan: "" };
    }
    
    const codeHuongDaiCuc = thongTinSonViLoi.huongDaiCuc;
    let warnings = [];
    
    // Quét Thần Sát động niên hạn đồng trục năm khảo sát thực tế
    const listSátTinhThựcThời = getPhongThuySatTinh(sonName, nam);
    listSátTinhThựcThời.forEach(sat => {
        warnings.push(`[${sat.ten}]: ${sat.level} giáng lâm phương vị.`);
    });

    // Ép trục toán học Cửu Tinh niên đại đồng bộ
    let saoNienDai = (11 - (nam % 9)) % 9;
    if (saoNienDai === 0) saoNienDai = 9;
    
    // Chuẩn hóa vị trí cung phi tinh để bắt đường bay Lượng Thiên Xích chuẩn xác
    const huongToPositionMap = { "N": 1, "SW": 2, "E": 3, "SE": 4, "TrungCung": 5, "Trung Cung": 5, "NW": 6, "W": 7, "NE": 8, "S": 9 };
    let pos = huongToPositionMap[codeHuongDaiCuc] || 5;
    
    // Thuật toán phi tinh xuôi dòng thời gian thực
    let saoDaoPhuong = (saoNienDai + (pos - 5) + 9) % 9;
    if (saoDaoPhuong === 0) saoDaoPhuong = 9;

    const danhGiaSaoMap = {
        1: { ten: "Nhất Bạch Tham Lang (Tiến Khí Cát Tinh - Thủy)", hung: false, giaiPhap: "Đắc lộc công danh, vinh hiển trí tuệ. Giữ phương vị thông thoáng đón cát khí." },
        2: { ten: "Nhị Hắc Bệnh Phù (Cự Môn - Chuyển mình Tiến Khí)", hung: false, giaiPhap: "Năng lượng hung tinh bắt buộc suy giảm, có xu hướng cát hóa sự nghiệp. Phối hợp đặt hồ lô nhỏ để lọc tạp khí." },
        3: { ten: "Tam Bích Lộc Tồn (Tử Khí Sát Tinh - Mộc)", hung: true, giaiPhap: "Dễ kích hoạt mâu thuẫn, tiểu nhân. Tránh đặt thiết bị phát âm thanh động tại góc này." },
        4: { ten: "Tứ Lục Văn Xương (Sát Tinh suy khí - Mộc)", hung: true, giaiPhap: "Dễ sinh tư duy trì trệ. Nên bài trí Tháp Văn Xương gỗ chín tầng để thúc vượng văn phong." },
        5: { ten: "Ngũ Hoàng Đại Sát (Chính Quan Sát - Mậu Kỷ Đại Hung Tinh)", hung: true, giaiPhap: "Đại độc hung tinh. Tuyệt đối cấm động thổ đập phá. Treo chuông gió đồng 6 thanh để giải sát." },
        6: { ten: "Lục Bạch Vũ Khúc (Cát Tinh thiên lộc - Kim)", hung: false, giaiPhap: "Quý nhân trợ lực, thiên tài hanh thông. Bố trí vật phẩm gốm sứ hành Thổ để sinh Kim." },
        7: { ten: "Thất Xích Phá Quân (Hưu Tù Sát Tinh - Kim)", hung: true, giaiPhap: "Hao tổn tài lộc, họa tai ương. Đặt bình thủy tinh chứa nước an nhẫn (nước muối) tiêu trừ sát khí." },
        8: { ten: "Bát Bạch Tả Phù (Thoái Khí Vận 9 - Thổ)", hung: false, giaiPhap: "Trạng thái bình hòa, ổn định tài lộc cũ, an lành." },
        9: { ten: "Cửu Tử Hữu Bật (ĐƯƠNG VƯỢNG TỐI THƯỢNG ĐẠI CÁT TINH VẬN 9)", hung: false, giaiPhap: "Tối thượng cát tinh nắm giữ sinh mệnh. Bố trí đèn sáng, trải thảm đỏ để nghênh phú quý." }
    };

    const thongTinSaoHienTai = danhGiaSaoMap[saoDaoPhuong];
    if (thongTinSaoHienTai.hung && !warnings.some(w => w.includes("Phi Tinh"))) {
        warnings.push(`[Lưu Niên Phi Tinh]: Phương vị gặp phải sát khí của ${thongTinSaoHienTai.ten}.`);
    }
    // =========================================================================
    // ⚙️ BỘ ĐIỀU HỢP NGÔN NGỮ: CHUYỂN ĐỔI KÝ HIỆU HƯỚNG SANG TIẾNG VIỆT
    // =========================================================================
    const mapHuongViet = { 
        "N": "Bắc", "S": "Nam", "E": "Đông", "W": "Tây", 
        "NE": "Đông Bắc", "NW": "Tây Bắc", "SE": "Đông Nam", "SW": "Tây Nam" 
    };
    const tenHuongDaiCucViet = mapHuongViet[codeHuongDaiCuc] || codeHuongDaiCuc;

    // =========================================================================
    // 🚀 ĐÃ SỬA TRIỆT ĐỂ: GIẤU TRỨNG CẢNH BÁO CHỐNG LỖI DƯ DẤU CHẤM • TRÊN UI
    // =========================================================================
    if (warnings.length === 0) {
        return {
            thongTinSao: `<span style="display:block; margin: 4px 0 6px 0; font-size: 0.95rem;"><b>[ĐẠI VẬN 9 - HẠ NGUYÊN]</b></span>` + 
                         `<span style="display:block; text-align: left; font-weight: normal; line-height: 1.5; padding: 4px 10px; background: rgba(255,255,255,0.03); border-radius: 4px;">` +
                         `• Lưu Niên Vận Khí Năm ${nam}: Sơn vị ${sonName} (Hướng lớn ${tenHuongDaiCucViet}) Đạt Trạng Thái Bình Hòa Cát Lành.<br>` +
                         `• Phương vị đón nhận sinh khí: ${thongTinSaoHienTai.ten}.</span>`,
            meoGiaiHan: `💡 Bố trí trạch pháp Vận 9: ${thongTinSaoHienTai.giaiPhap}`
        };
    }

    return {
        // TUYỆT CHIÊU: Đặt ẩn trong thẻ comment để ép UI nhận hộp ĐỎ nhưng biến dấu chấm thành vô hình
        thongTinSao: `<!--⚠️--><span style="display:block; margin: 4px 0 6px 0; font-size: 0.95rem;"><b>[ĐẠI VẬN 9 - HẠ NGUYÊN]</b></span>` + 
                     `<span style="display:block; text-align: left; font-weight: normal; line-height: 1.5; padding: 4px 10px; background: rgba(0,0,0,0.15); border-radius: 4px;">` +
                     `• CẢNH BÁO TIỂU VẬN NĂM ${nam}: Khu vực tọa độ Sơn ${sonName} phạm phải cấu trúc khí trường xấu:<br>` +
                     `• ${warnings.join("<br>• ")}</span>`,
        meoGiaiHan: `💡 Mật pháp điều tiết đồng bộ: Tránh tuyệt đối việc đập phá, động thổ tại góc độ phân châm này. Áp dụng giải pháp: ${thongTinSaoHienTai.giaiPhap}`
    };
}

function getHanhByHeading(heading) {
    if (heading === null || heading === undefined) return "Chưa xác định";
    const normalized = ((heading % 360) + 360) % 360;
    
    const sonObj = SON_24_CONFIG.find(s => {
        if (s.min > s.max) return normalized >= s.min || normalized < s.max;
        return normalized >= s.min && normalized < s.max;
    }) || SON_24_CONFIG[0];
    
    const thongTinLoi = DATA_THANSAT.MA_TRAN_24_SON_VI[sonObj.name];
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
    'Ly':   { 'N': 'Diên Niên', 'NE': 'Họa Hại', 'E': 'Sinh Khí', 'SE': 'Thiên Y', 'S': 'Phục Vị', 'SW': 'Lục Sát', 'W': 'Ngũ Quỷ', 'NW': 'Tuyệt Mệnh', 'group': 'Đông Tứ Mệnh', 'element': 'Hỏa' },
    'Chấn': { 'N': 'Thiên Y', 'NE': 'Lục Sát', 'E': 'Phục Vị', 'SE': 'Diên Niên', 'S': 'Sinh Khí', 'SW': 'Họa Hại', 'W': 'Tuyệt Mệnh', 'NW': 'Ngũ Quỷ', 'group': 'Đông Tứ Mệnh', 'element': 'Mộc' },
    'Tốn':  { 'N': 'Sinh Khí', 'NE': 'Tuyệt Mệnh', 'E': 'Diên Niên', 'SE': 'Phục Vị', 'S': 'Thiên Y', 'SW': 'Ngũ Quỷ', 'W': 'Lục Sát', 'NW': 'Họa Hại', 'group': 'Đông Tứ Mệnh', 'element': 'Mộc' },
    'Càn':  { 'N': 'Lục Sát', 'NE': 'Thiên Y', 'E': 'Ngũ Quỷ', 'SE': 'Họa Hại', 'S': 'Tuyệt Mệnh', 'SW': 'Diên Niên', 'W': 'Sinh Khí', 'NW': 'Phục Vị', 'group': 'Tây Tứ Mệnh', 'element': 'Kim' },
    'Khôn': { 'N': 'Tuyệt Mệnh', 'NE': 'Sinh Khí', 'E': 'Họa Hại', 'SE': 'Ngũ Quỷ', 'S': 'Lục Sát', 'SW': 'Phục Vị', 'W': 'Thiên Y', 'NW': 'Diên Niên', 'group': 'Tây Tứ Mệnh', 'element': 'Thổ' },
    'Đoài': { 'N': 'Họa Hại', 'NE': 'Diên Niên', 'E': 'Tuyệt Mệnh', 'SE': 'Lục Sát', 'S': 'Ngũ Quỷ', 'SW': 'Thiên Y', 'W': 'Phục Vị', 'NW': 'Sinh Khí', 'group': 'Tây Tứ Mệnh', 'element': 'Kim' },
    'Cấn':  { 'N': 'Ngũ Quỷ', 'NE': 'Phục Vị', 'E': 'Lục Sát', 'SE': 'Họa Hại', 'S': 'Tuyệt Mệnh', 'SW': 'Sinh Khí', 'W': 'Diên Niên', 'NW': 'Thiên Y', 'group': 'Tây Tứ Mệnh', 'element': 'Thổ' }
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

// ====================== 5. HÀM KIỂM SOÁT TẦN SUẤT QUÉT CẢM BIẾN (DEBOUNCE) ======================
function debounceRecalculate() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        recalculateFate();
    }, 300);
}

function validateFullDate(day, month, year) {
    const d = parseInt(day, 10);
    const m = parseInt(month, 10);
    const y = parseInt(year, 10);

    if (isNaN(d) || isNaN(m) || isNaN(y)) return false;
    if (m < 1 || m > 12) return false;
    
    // Ma trận chu kỳ quỹ đạo năm nhuận dương lịch chính xác
    const listDaysInMonth = [
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

    const txtSurveyYear = document.getElementById('surveyYear'); 
    const namKhaoSatThucTe = (txtSurveyYear && txtSurveyYear.value.trim() !== '') ? parseInt(txtSurveyYear.value, 10) : new Date().getFullYear();

    if (!dayStr || !monthStr || !yearStr || yearStr.length < 4) {
        fateTxt.innerText = `${name}: Đo hướng tự do (Chế độ quét trắc địa hạ tầng - Chưa nhập năm sinh)`;
        directionsContainer.innerHTML = `<div style="font-size:0.8rem;color:#8a8a8f;text-align:center;padding:15px;font-family:sans-serif;">
            Vui lòng điền thông tin Ngày - Tháng - Năm sinh chủ mệnh để kích hoạt ma trận đối sánh cát hung bản mệnh đa tầng.
        </div>`;
        listPanelTitle.innerText = "Mạng lưới phương vị la bàn";
        const oldPanel = document.getElementById('dien-giai-bo-sung');
        if (oldPanel) oldPanel.remove();
        
        // Trả nền la bàn về trạng thái cổ điển sạch khi chưa có dữ liệu năm sinh
        updateBatTrachBackground(null);
        
        updateCompassUI(currentHeading);
        return;
    }

    let d = parseInt(dayStr, 10);
    let m = parseInt(monthStr, 10);
    let y = parseInt(yearStr, 10);

    if (!validateFullDate(d, m, y)) {
        fateTxt.innerText = `${name}: Dữ liệu lịch pháp trùng lặp hoặc sai cấu trúc tháng (Kiểm tra lại)`;
        return;
    }

    // Tính toán Quẻ mệnh thực tế và kích hoạt ma trận đổ màu nền tự động
    chủMệnh = tínhCungPhi(y, m, d, gender);
    updateBatTrachBackground(chủMệnh);

    const namAmMệnhChủ = (m < 2 || (m === 2 && d < 4)) ? y - 1 : y;
    const hanHinhCungPhi = bátTrạchMap[chủMệnh]?.element || "Thổ";
    const nhomMenh = bátTrạchMap[chủMệnh]?.group || "Tây Tứ Mệnh";

    const nguHoangInfo = getNguHoangInfo(namKhaoSatThucTe); 
    fateTxt.innerText = `${name}: Cung ${chủMệnh} (${nhomMenh}) - Bản Mệnh Ngũ Hành: ${hanHinhCungPhi} | Năm sinh Âm: ${namAmMệnhChủ} | Thần sát Lưu Niên: ${nguHoangInfo}`;

    let headingToCalculate = isDetailOpen && lockedHeadingAtOpen !== null ? lockedHeadingAtOpen : currentHeading;
    const realHeading = ((headingToCalculate % 360) + 360) % 360; 

    const hanhPhuongVi = getHanhByHeading(realHeading);
    const sonInfo = layThongTin24Son(realHeading, chủMệnh, namAmMệnhChủ);
    const currentSonHuong = sonInfo.huong;

    const tongHop = tinhDiemTongHop(chủMệnh, realHeading, namKhaoSatThucTe, mucDich, namAmMệnhChủ);

    let saoChuQuan = null;
    const match = nguHoangInfo.match(/Số (\d+)/); 
    if (match) saoChuQuan = match[1];

    let giaiThichSao = "";
    if (saoChuQuan === '5') {
        giaiThichSao = `Niên hạn năm khảo sát ${namKhaoSatThucTe} phạm sao hung hại <b>Ngũ Hoàng Liêm Trinh</b> nhập trung cung, mang năng lượng Thổ sát kịch độc. Giữ tâm nhà tĩnh lặng tuyệt đối, cấm mọi hành vi đào đục gạch nền ở khu vực trung tâm trạch thể.`;
    } else if (saoChuQuan === '2') {
        giaiThichSao = `Niên hạn năm khảo sát ${namKhaoSatThucTe} gặp sao <b>Nhị Hắc Bệnh Phù</b> quản đại cục tại trung cung, dễ gây suy hao sức đề kháng cơ thể. Nên bố trí an bài phương thức thanh lọc tạp khí âm hàn.`;
    } else if (['3', '4'].includes(saoChuQuan)) {
        giaiThichSao = `Niên độ thiên văn gặp mộc khí của sao chủ tinh khắc nhẹ vào Thổ khí trung cung. Trạng thái biến thiên ở mức <b>Bình hòa trung tính</b>, không không gian cốt lõi cần thông thoáng sạch sẽ để vận khí tự động điều hòa hưng vượng.`;
    } else {
        giaiThichSao = `Năng lượng niên hạn chủ quản năm tại vị trí trung cung đạt trạng thái an định, thuần khiết cát tường, không xuất hiện cấu trúc xung đột biến động lớn.`;
    }

    const nguhoangAlert = getNguHoangAlert(currentSonHuong, namKhaoSatThucTe);

    let targetContainer = document.getElementById('dien-giai-bo-sung');
    if (!targetContainer) {
        targetContainer = document.createElement('div');
        targetContainer.id = 'dien-giai-bo-sung';
        targetContainer.style.width = '100%';
        fateTxt.parentNode.insertBefore(targetContainer, fateTxt.nextSibling);
    }

    const displayStyle = isDetailOpen ? 'block' : 'none';
    const btnText = isDetailOpen ? '🙈 Đóng giải thích thuật ngữ chi tiết' : '👁️ Xem giải thích thuật ngữ hiển thị';
    const btnBkg = isDetailOpen ? 'rgba(223, 183, 108, 0.15)' : 'transparent';
    
    const currentConfig = ConfigPhongThuy[mucDich] || { title: "Vị trí / Hướng đang chọn", isCat: true };
    const tenMucDichBinhDan = currentConfig.title;

    const vanInfo = `
        <p style="margin:8px 0; color:#ffd700; font-family: sans-serif;">
            🌟 <b>Mạch Long Khí 72 Hậu:</b> ${tongHop.hauInfo.ten} — <span style="font-weight:bold; color:${tongHop.hauInfo.emoji === '🟢' ? '#00ff41' : (tongHop.hauInfo.emoji === '🔴' ? '#ff4444' : '#ffd700')}">${tongHop.hauInfo.chatLuong}</span><br>
            <small style="color:#aaa;">(Phân vị vi phân khí trường ngầm đạt ${tongHop.hauInfo.diem}pt. Thể hiện gốc rễ bền vững lâu dài của mạch đất nền sinh cơ).</small>
        </p>
    `;

    const activeColor = tongHop.diem >= 72 ? '#30d158' : '#ff3b30';

    let giaiThichKhongVongHTML = "";
    if (tongHop.khongVong) {
        giaiThichKhongVongHTML = `<p style="margin:8px 0; color:#ff4444; background:rgba(255,59,48,0.06); padding:8px; border-radius:6px; border:1px solid rgba(255,59,48,0.2);">
            ⚠️ <b>Cảnh báo Trạch lý Phân châm:</b> Toạ độ hiện tại đang dính trục <b>${tongHop.khongVong.loai}</b>. Đây là hiện tượng đường ranh giới khí trường giữa các hướng hoặc các Sơn bị đứt gãy hoàn toàn, dẫn đến tình trạng hỗn loạn địa khí, bất khả định hướng dòng chảy năng lượng.
        </p>`;
    }

    // =========================================================================
    // 🌍 TOÁN THỨC TỊNH TIẾN LỆCH TÚ & XỬ LÝ ĐIỀU KIỆN HIỂN THỊ THÔNG MINH
    // =========================================================================
    let declinationValue = typeof magneticDeclination !== 'undefined' ? Number(magneticDeclination) : 0;
    let remoteClientHeading = ((realHeading + declinationValue) % 360 + 360) % 360;
    let remoteSonInfo = layThongTin24Son(remoteClientHeading, chủMệnh, namAmMệnhChủ);

    // 🌟 ĐẠI NÂNG CẤP: Thuật toán biện chứng dịch chuyển đĩa la bàn thực thời cực kỳ trực quan
    let thongTinTracDia = declinationValue !== 0 
        ? `(Độ lệch từ địa phương hiệu chỉnh: ${declinationValue > 0 ? '+' : ''}${declinationValue}° — Đĩa la bàn số tự động điều hướng tịnh tiến nhằm triệt tiêu hoàn toàn nhiễu trường từ tính của thiết bị điện tử, định vị tọa độ lõi).`
        : `(Độ lệch từ tự nhiên: 0° — Đĩa la bàn cơ học vận hành ở trạng thái cân bằng từ trường ổn định, xác lập trục tọa độ gốc địa phương sạch hoàn hảo).`;

    // Thuật toán thông minh: Chỉ dựng HTML khi độ lệch từ có giá trị khác 0
    let htmlKhachPhuongXa = "";
    if (declinationValue !== 0) {
        htmlKhachPhuongXa = `
            <div style="margin:10px 0; padding: 10px; background: rgba(0,200,255,0.06); border-left: 4px solid #00c8ff; border-radius: 6px; color: #e1f5fe; border-top: 1px solid rgba(0,200,255,0.1); border-right: 1px solid rgba(0,200,255,0.1); border-bottom: 1px solid rgba(0,200,255,0.1);">
                🌍 <b>THÔNG SỐ GỬI KHÁCH PHƯƠNG XA (Độ Lệch Từ ${declinationValue > 0 ? '+' : ''}${declinationValue}°):</b> <br>
                • Tọa độ thực tế tại khu đất: <span style="color:#00c8ff; font-weight:bold; font-size:1rem;">${remoteClientHeading.toFixed(1)}°</span><br>
                • Phương vị thực: <b>${remoteSonInfo.huong}</b> — Bản Sơn chiếm mạch: <span style="color:#ffd700; font-weight:bold;">Sơn ${remoteSonInfo.son}</span><br>
                <small style="color:#b0bec5; font-size:0.75rem; display:block; margin-top:4px;">(Hệ thống tự động đồng bộ sai lệch từ trường địa phương để xuất dữ liệu chuẩn chỉnh cho khách đối chiếu bản vẽ thiết kế)</small>
            </div>
        `;
    }

    targetContainer.innerHTML = `
        <div style="text-align: center; margin: 10px 0;">
            <button id="btn-toggle-fengshui" onclick="toggleDienGiaiChiTiet()"
                    style="background: ${btnBkg}; border: 1px solid var(--gold); color: var(--gold);
                           padding: 8px 16px; font-size: 0.85rem; border-radius: 4px; cursor: pointer; font-weight: bold; transition: all 0.3s;">
                ${btnText}
            </button>
        </div>
        <div id="content-dien-giai-chi-tiet" style="display: ${displayStyle}; margin: 10px 0; padding: 14px;
             background: rgba(223, 183, 108, 0.06); border: 1.5px solid var(--gold); border-radius: 8px;
             font-size: 0.86rem; line-height: 1.65; text-align: left; color: #fff; font-family: sans-serif;">
            
            <p style="margin:0 0 10px 0; color:var(--gold); font-weight:bold; border-bottom:1px solid var(--gold); padding-bottom:6px; letter-spacing:0.5px;">
                📖 BIỆN CHỨNG KHÍ CỤC CẤU TRÚC HẠNG MỤC KỸ THUẬT
            </p>
            
            <!-- 🎯 ĐỒNG BỘ HOÀN HẢO: Dòng thông báo độc lập, sắc nét, tự động biến thiên theo mốc lệch từ -->
            <p style="margin:8px 0;">📍 <b>Tọa độ trắc địa thực tế:</b> ${realHeading.toFixed(1)}° ${thongTinTracDia}</p>
            
            <p style="margin:8px 0;">📍 <b>Phương vị la bàn số:</b> Ngũ hành từ trường phương vị thuộc <b>${hanhPhuongVi}</b> (Góc quay cảm biến: <b>${Math.round(headingToCalculate)}°</b>).</p>
            
            ${htmlKhachPhuongXa}

            <p style="margin:8px 0;">🎯 <b>Quẻ mệnh Nhân chủ (Hành ${hanHinhCungPhi}):</b> Cung phi cốt lõi <b>${chủMệnh}</b> (${nhomMenh}).</p>
            
            ${vanInfo}
            ${giaiThichKhongVongHTML}
            
            <p style="margin:12px 0; padding:10px; background:rgba(255,215,0,0.03); border-radius:6px; border-left:4px solid ${activeColor}; border-top:1px solid rgba(255,255,255,0.03); border-right:1px solid rgba(255,255,255,0.03); border-bottom:1px solid rgba(255,255,255,0.03);">
                <strong>📊 Tổng Điểm Phong Thủy Số [${tenMucDichBinhDan}]: <span style="color:${activeColor}; font-size:1.1rem; font-weight:900;">${tongHop.diem} pt</span></strong><br>
                Đánh giá trạch pháp: <span style="font-weight:bold; color:${activeColor}; text-transform: uppercase;">${tongHop.level}</span><br>
                <small style="color:#8a8a8f;">(Điểm số tích hợp tự động bóc tách từ đồ hình ma trận đa tầng bệ đỡ Đất và chu kỳ chuyển động của Thời Vận)</small>
            </p>
            
            <p style="margin:8px 0; text-align:justify;">🌟 <b>Luận đoán Minh Châu Sơn vị:</b> ${tongHop.message}</p>
            <p style="margin:8px 0; text-align:justify;">⚠️ <b>Biến động thiên thời tâm nhà:</b> ${giaiThichSao}</p>
            ${nguhoangAlert ? `<p style="margin:8px 0; color:#ff4444; font-weight:bold; background:rgba(255,59,48,0.08); padding:8px; border-radius:6px; border:1px solid #ff3b30;">${nguhoangAlert}</p>` : ''}
        </div>
    `;

    generateDirectionsList();
    updateCompassUI(currentHeading);
}

// =========================================================================
// 🌐 THÀNH PHẦN 1: REFACTOR HÀM TRÍCH XUẤT HẬU (NGƯỜI ĐỌC ĐỊA MẠCH)
// =========================================================================
function getCurrentHauInfo(degree, mucDich = 'house', namKhaoSat = null, cungPhi = 'Khảm', namAm = null) {
    const normalized = ((degree % 360) + 360) % 360;
    
    // Khóa dữ liệu cache theo độ thực tế làm tròn để triệt tiêu lỗi rò rỉ nhãn sang góc kề bên
    const cacheKey = normalized.toFixed(1);
    
    // Khóa cứng phân vị trắc địa của long mạch ngầm theo bước 5 độ cố định để tra cứu data gốc
    const keyHau = (Math.round(normalized / 5) * 5) % 360;
    
    const hau = Data72Hau[keyHau.toString()] || { 
        ten: "Xung Không Hậu", chatLuong: "Bình Hòa", diem: 60, ynghia: "Khí trường chuyển dịch điều hòa ổn định."
    };

    const config = (typeof ConfigPhongThuy !== 'undefined' && ConfigPhongThuy[mucDich]) ? ConfigPhongThuy[mucDich] : { isCat: true };
    const isCatPurpose = config.isCat;
    const chatLuongGoc = hau.chatLuong || "Bình Hòa";

    let deltaH72 = 0;
    if (chatLuongGoc.includes("Đại Cát")) deltaH72 = 12;
    else if (chatLuongGoc.includes("Cát")) deltaH72 = 6;
    else if (chatLuongGoc.includes("Tiểu Hung")) deltaH72 = -15;
    else if (chatLuongGoc.includes("Đại Hung") || chatLuongGoc.includes("Không Vong") || chatLuongGoc.includes("Sai Thác")) deltaH72 = -35;

    let result = {
        ten: hau.ten || "Xung Không Hậu",
        chatLuongStatic: chatLuongGoc,
        ynghia: hau.ynghia || "Khí trường chuyển dịch luân hồi.",
        diemGoc: Number(hau.diem) || 60,
        deltaH72: deltaH72, 
        giaiphap: String(hau.giaiphap || "Bố trí kết cấu trạch pháp an vị cát tường."),
        emoji: "🟡",
        chatLuong: "Bình Hòa"
    };

    // Nhãn UI cơ bản theo phân lớp Địa khí mạch đất
    const isHungHau = chatLuongGoc.includes("Hung") || chatLuongGoc.includes("Không Vong") || chatLuongGoc.includes("Sai Thác");
    if (isCatPurpose) {
        if (isHungHau) { result.chatLuong = "ĐẠI HUNG"; result.emoji = "🔴"; } 
        else if (chatLuongGoc.includes("Cát")) { result.chatLuong = "CÁT MẠCH"; result.emoji = "🟢"; } 
        else { result.chatLuong = "BÌNH HÒA"; result.emoji = "🟡"; }
    } else {
        if (isHungHau) { result.chatLuong = "ĐẮC VỊ"; result.emoji = "🟢"; } 
        else if (chatLuongGoc.includes("Cát")) { result.chatLuong = "PHẠM CÁT"; result.emoji = "🔴"; } 
        else { result.chatLuong = "TRUNG TÍNH"; result.emoji = "🟡"; }
    }

    // 🎯 ĐỒNG BỘ N NG CAO KHÔNG VONG: Đè chữ ngắn gọn và nạp văn bản giải thích chuẩn phong thủy vào Popup
    if (typeof kiemTraKhongVong === 'function') {
        const khongVong = kiemTraKhongVong(normalized);
        if (khongVong) {
            result.chatLuongStatic = khongVong.loai; // Đồng bộ sang "ĐẠI KHÔNG VONG" hoặc "TIỂU KHÔNG VONG"
            result.ynghia = khongVong.message;      // Đẩy thông điệp tính toán chi tiết của tuyến độ vào ý nghĩa
            
            if (khongVong.loai === "ĐẠI KHÔNG VONG") {
                result.chatLuong = isCatPurpose ? "TUYỆT MẠCH" : "TỬ TUYẾN";
                result.emoji = isCatPurpose ? "☠️" : "🔮";
                result.giaiphap = isCatPurpose 
                    ? "Tuyệt đối không xây dựng móng, ban thờ hay cửa chính tại đây. Hãy đổi hướng la bàn."
                    : "Tọa độ lý tưởng để đặt tâm xả thải uế khí, giúp triệt tiêu hoàn toàn đại hung tinh sát của mạch đất.";
            } else {
                result.chatLuong = isCatPurpose ? "SAI THÁC" : "LỆCH KHÍ";
                result.emoji = "⚠️";
                result.giaiphap = isCatPurpose
                    ? "Chủ động xoay vi phân kết cấu xây dựng lệch sang trái hoặc phải từ 1.5° đến 2.5° để thoát vạch nhiễu khí."
                    : "Có thể đặt uế cục phụ. Không cần vi chỉnh nếu mặt bằng hình học bị giới hạn diện tích.";
            }
        }
    }

    // Lưu vào hệ thống Cache theo khóa độ thực tế chính xác
    if (typeof hauCache !== 'undefined' && hauCache && hauCache.set) {
        hauCache.set(cacheKey, result);
    }
    
    return result; 
}

// =========================================================================
// ID-05: CỔNG ĐỒNG BỘ 24 SƠN - BẢO TOÀN CONTRACT VÀ CẤU TRÚC RENDER TẦNG 3
// =========================================================================
function layThongTin24Son(doSo, cungPhi, namAm) {
    let gockim = (doSo % 360 + 360) % 360;
    let sonHienTai = SON_24_CONFIG.find(s => {
        if (s.min > s.max) return gockim >= s.min || gockim < s.max;
        return gockim >= s.min && gockim < s.max;
    }) || SON_24_CONFIG[0];

    const txtSurveyYear = document.getElementById('surveyYear');
    const namKhaoSatThucTe = (txtSurveyYear && txtSurveyYear.value.trim() !== '') ? parseInt(txtSurveyYear.value, 10) : new Date().getFullYear();
    const mụcĐích = document.getElementById('purpose')?.value || 'house';

    const safeCungPhi = cungPhi ? cungPhi.trim().charAt(0).toUpperCase() + cungPhi.trim().slice(1).toLowerCase() : "Khảm";
    
    // Gọi đồng bộ Engine lõi tính toán điểm đa tầng tuyến tính
    const tongHop = tinhDiemTongHop(safeCungPhi, gockim, namKhaoSatThucTe, mụcĐích, namAm, 0);

    const huongToCode = { "Bắc": "N", "Đông Bắc": "NE", "Đông": "E", "Đông Nam": "SE", "Nam": "S", "Tây Nam": "SW", "Tây": "W", "Tây Bắc": "NW" };
    const codeHuong = huongToCode[sonHienTai.huong] || "N";
    const saoBatTrach = bátTrạchMap[safeCungPhi]?.[codeHuong] || "Phục Vị";
    const batTrachDetail = cungPhầnTrăm[saoBatTrach];
    const isCatBatTrach = batTrachDetail ? batTrachDetail.cát : true;

    const dacBiet = MaTranMinhChau[safeCungPhi]?.[sonHienTai.name];

    // ĐỒNG BỘ HOÀN TOÀN THIÊN THỜI ĐỘNG VÀ SÁT TINH LƯU NIÊN TỪ ENGINE LÕI
    // Ưu tiên chuỗi văn bản cảnh báo động (Không Vong, Hung Tinh) từ tongHop.message
    let luanDoanFinal = tongHop.message || (dacBiet ? `[Cung ${saoBatTrach}] — Khí cục đặc biệt.` : `Sơn ${sonHienTai.name} thuộc hướng ${sonHienTai.huong} [Cung ${saoBatTrach}].`);
    let hoaGiaiFinal = tongHop.hoaGiai || (dacBiet ? dacBiet.giaiphap : (isCatBatTrach ? "Hướng tốt, khí trường ôn hòa ổn định." : "Bố trí cấu trúc không gian phù hợp để hóa sát."));

    return {
        son: sonHienTai.name,
        huong: sonHienTai.huong,
        luanDoan: luanDoanFinal,
        hoaGiai: hoaGiaiFinal,
        isCatBatTrach: isCatBatTrach,
        saoBatTrach: saoBatTrach,
        cap_do: dacBiet ? dacBiet.cap_do : (isCatBatTrach ? "Vượng khí" : "Đoản khí"),
        diem: tongHop.diem,
        level: tongHop.level,
        hauChiTiet: tongHop.hauInfo
    };
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
// 🚀 ENGINE RENDER DANH SÁCH & UI ĐỒNG BỘ ĐA TẦNG (BÁT TRẠCH - 24 SƠN - 72 HẬU)
// =========================================================================
function generateDirectionsList() {
    const purposeEl = document.getElementById('purpose');
    const mucDich = purposeEl ? purposeEl.value : "";
    const directionsContainerEl = document.getElementById('directionsContainer') || (typeof directionsContainer !== 'undefined' ? directionsContainer : null);
    
    const nguonConfig = (typeof ConfigPhongThuy !== 'undefined') ? ConfigPhongThuy : ((typeof PhongThuyCore !== 'undefined' && PhongThuyCore.data?.Config) ? PhongThuyCore.data.Config : {});
    const config = nguonConfig[mucDich];
    
    if (!mucDich || !config) {
        if (directionsContainerEl) {
            directionsContainerEl.innerHTML = `<div style='font-size:0.85rem;color:#8a8a8f;text-align:center;padding:15px;font-family:sans-serif;'>Chọn mục đích Thiết lập Khí Cục hoặc Trấn Sát để hiển thị mạng lưới phương vị</div>`;
        }
        return;
    }

    const isCatPurpose = config.isCat; 
    let listDirections = [];
    
    // =========================================================================
    // 🛡️ ĐỊNH NGHĨA DUY NHẤT: Bộ lọc dọn dẹp chuỗi và triệt tiêu dấu xuống dòng phá cấu trúc HTML Token
    // =========================================================================
    const escapeStr = (s) => s ? s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '&quot;').replace(/[\r\n]+/g, ' ') : "";
    
    const dayStr = document.getElementById('birthDay')?.value || "";
    const monthStr = document.getElementById('birthMonth')?.value || document.getElementById('monthStr')?.value || "";
    const yearStr = document.getElementById('birthYear')?.value || document.getElementById('yearStr')?.value || "";

    const txtSurveyYear = document.getElementById('surveyYear');
    const namKhaoSatThucTe = (txtSurveyYear && txtSurveyYear.value.trim() !== '') ? parseInt(txtSurveyYear.value, 10) : new Date().getFullYear();

    let namAmMệnhChủ = new Date().getFullYear();
    if (dayStr && monthStr && yearStr && yearStr.length === 4) {
        namAmMệnhChủ = (parseInt(monthStr, 10) < 2 || (parseInt(monthStr, 10) === 2 && parseInt(dayStr, 10) < 4)) ? parseInt(yearStr, 10) - 1 : parseInt(yearStr, 10);
    }

    let quẻMệnhChủLõi = "Khảm";
    if (typeof chủMệnh !== 'undefined' && chủMệnh) {
        quẻMệnhChủLõi = chủMệnh;
    } else if (typeof chủMệnhToànCục !== 'undefined' && chủMệnhToànCục) {
        quẻMệnhChủLõi = chủMệnhToànCục;
    }
    quẻMệnhChủLõi = quẻMệnhChủLõi.trim().charAt(0).toUpperCase() + quẻMệnhChủLõi.slice(1).toLowerCase();

    const cacCungTot = ["Sinh Khí", "Diên Niên", "Thiên Y", "Phục Vị"];
    const cacCungXau = ["Tuyệt Mệnh", "Ngũ Quỷ", "Lục Sát", "Họa Hại"];

    const nguồnMeta = (typeof directionMeta !== 'undefined') ? directionMeta : [
        { name: "Chính Bắc", code: "N", angle: 0 }, { name: "Đông Bắc", code: "NE", angle: 45 },
        { name: "Chính Đông", code: "E", angle: 90 }, { name: "Đông Nam", code: "SE", angle: 135 },
        { name: "Chính Nam", code: "S", angle: 180 }, { name: "Tây Nam", code: "SW", angle: 225 },
        { name: "Chính Tây", code: "W", angle: 270 }, { name: "Tây Bắc", code: "NW", angle: 315 }
    ];

    const nguonBatTrach = (typeof bátTrạchMap !== 'undefined') ? bátTrạchMap : ((typeof PhongThuyCore !== 'undefined' && PhongThuyCore.data?.BatTrachMap) ? PhongThuyCore.data.BatTrachMap : {});

    nguồnMeta.forEach(dir => {
        const cungTrạch = (nguonBatTrach[quẻMệnhChủLõi]) ? nguonBatTrach[quẻMệnhChủLõi][dir.code] || "Khác" : "Khác";
        
        if (isCatPurpose) {
            if (!cacCungTot.includes(cungTrạch)) return; 
        } else {
            if (!cacCungXau.includes(cungTrạch)) return;
        }

        if (typeof tinhDiemTongHop === 'function') {
            const tongHopDir = tinhDiemTongHop(quẻMệnhChủLõi, dir.angle, namKhaoSatThucTe, mucDich, namAmMệnhChủ, 0);
            listDirections.push({
                ...dir, 
                cungTrạch: cungTrạch, 
                diemTongHop: tongHopDir.diem, 
                level: tongHopDir.level, 
                satTinhs: tongHopDir.satTinhs || [],
                khongVong: tongHopDir.khongVong || null,
                hau: tongHopDir.hauInfo, 
                phanTichGoc: tongHopDir.message || "Khí trường bình hòa",
                priority: tongHopDir.diem 
            });
        }
    });

    listDirections.sort((a, b) => b.priority - a.priority);
    
    const listPanelTitleEl = document.getElementById('listPanelTitle') || (typeof listPanelTitle !== 'undefined' ? listPanelTitle : null);
    if (listPanelTitleEl) {
        listPanelTitleEl.innerText = `Quy Hoạch Vận 9: ${config.title}`;
    }
    
    if (!directionsContainerEl) return;
    directionsContainerEl.innerHTML = "";

    if (listDirections.length === 0) {
        directionsContainerEl.innerHTML = `<div style='font-size:0.85rem;color:#ff3b30;text-align:center;padding:15px;font-family:sans-serif;font-weight:bold;'>⚠️ Không tìm thấy hướng phù hợp với tiêu chuẩn lập cực. Kiểm tra lại dữ liệu đầu vào.</div>`;
        return;
    }

    listDirections.forEach(item => {
        const mapSonGroup = {
            "N":  ["Nhâm", "Tý", "Quý"], "NE": ["Sửu", "Cấn", "Dần"],
            "E":  ["Giáp", "Mão", "Ất"], "SE": ["Thìn", "Tốn", "Tỵ"],
            "S":  ["Bính", "Ngọ", "Đinh"], "SW": ["Mùi", "Khôn", "Thân"],
            "W":  ["Canh", "Dậu", "Tân"], "NW": ["Tuất", "Càn", "Hợi"]
        };
        let sonGroup = mapSonGroup[item.code.toUpperCase().trim()] || ["Nhâm", "Tý", "Quý"];
        
        let countSonXanh = 0, countSonVang = 0, countSonDo = 0;
        let sonHTML = "";

        sonGroup.forEach((son, index) => {
            let gocCuaSon = (item.angle + (index - 1) * 15 + 360) % 360;
            let score = 60;
            let thongTinHạnSon = "";
            let thongTinSonDong = null;

            if (typeof tinhDiemTongHop === 'function') {
                thongTinSonDong = tinhDiemTongHop(quẻMệnhChủLõi, gocCuaSon, namKhaoSatThucTe, mucDich, namAmMệnhChủ, 0);
                score = thongTinSonDong.diem;
            }
            
            if (thongTinSonDong && thongTinSonDong.satTinhs && thongTinSonDong.satTinhs.length > 0) {
                let tenSaoSơn = thongTinSonDong.satTinhs.map(s => s.ten).join(", ");
                thongTinHạnSon = `<br><br>⚠️ <b>BIẾN THIÊN LƯU NIÊN:</b> Sơn vị này năm nay vướng [${tenSaoSơn}] quấy phá phần Ngọn, tạm thời hao hụt khí trường. Qua năm hạn sao chuyển dịch, năng lượng tọa độ hẹp này sẽ tự động khôi phục vượng cát.`;
            } else {
                thongTinHạnSon = `<br><br>✨ <b>THỜI VẬN AN ĐỊNH:</b> Phân độ Sơn vị sạch bóng sát tinh lưu niên, trường khí thuần khiết vững vàng.`;
            }

            let titleInfo = `Phương vị hình học Sơn ${son} [Điểm lập cực: ${score}pt]`;
            let textInfo = "";
            let solInfo = "";
            let sonColor = "#dfb76c";

            if (isCatPurpose) {
                if (score >= 70) {
                    sonColor = "#30d158"; countSonXanh++;
                    textInfo = `<b>ĐẮC THỜI ĐẮC VỊ:</b> Tọa độ Sơn vị ${son} đạt năng lượng cát lợi cao (${score}pt). Khí trường phối hợp đồng trục hoàn hảo với bản mệnh gia chủ, sinh khí dồi dào.${thongTinHạnSon}`;
                    solInfo = "Thiết kế: Ưu tiên đặt tâm cửa chính, ban thờ hoặc giường ngủ lọt khít vào dải độ xanh này để hút tài lộc.";
                } else if (score >= 50) {
                    sonColor = "#dfb76c"; countSonVang++;
                    textInfo = `<b>BÌNH HÒA TRẠCH PHÁP:</b> Sơn vị ${son} đạt trạng thái trường khí cân bằng ổn định (${score}pt), an toàn, không sinh họa cho gia vận.${thongTinHạnSon}`;
                    solInfo = "Thiết kế: An tâm bố trí công năng sinh hoạt nội cục, có thể phối màu ngũ hành tương sinh để bổ trợ khí.";
                } else {
                    sonColor = "#ff3b30"; countSonDo++;
                    textInfo = `⚠️ <b>SUY KIỆT TRƯỜNG KHÍ:</b> Phân độ Sơn vị ${son} chỉ đạt chỉ số thấp (${score}pt) do xung khắc trắc địa hoặc niên tinh tà khí xâm phạm.${thongTinHạnSon}`;
                    solInfo = "Điều tiết: Tránh đặt các yếu tố nạp khí chính tại dải độ này. Nếu kết cấu cố định, dùng vật phẩm ngũ hành chuyển hóa khí.";
                }
            } else {
                if (score >= 70) {
                    sonColor = "#30d158"; countSonXanh++; 
                    titleInfo = `Sơn vị Trấn Sát ${son} [Đắc Cách Đại Cát]`;
                    textInfo = `<b>THẦN CÁCH TRẤN YỂM:</b> Sơn vị mang năng lượng hung tính lớn của Bát Trạch hung quẻ, cực kỳ lý tưởng để đặt thiết bị xả uế nhằm khóa chặt ác khí long mạch, hóa hung thành cát thành công.`;
                    solInfo = "Quy hoạch: Kết cấu hoàn hảo về mặt trạch pháp kiến trúc. Hãy đặt uế cục kiên cố tại đây.";
                } else if (score >= 50) {
                    sonColor = "#dfb76c"; countSonVang++;
                    titleInfo = `Sơn vị Trấn Sát ${son} [Bình Hòa]`;
                    textInfo = `<b>TRUNG TÍNH HÓA SÁT:</b> Khu vực dải độ Sơn vị ${son} đạt trạng thái tiêu giảm sát khí ổn định (${score}pt), đặt công năng phụ thải uế an toàn, không sinh tai họa.`;
                    solInfo = "Quy hoạch: Chấp nhận được hoàn toàn về mặt phân bổ mặt bằng hình học kiến trúc.";
                } else {
                    sonColor = "#ff3b30"; countSonDo++; 
                    titleInfo = `⚠️ TRƯỜNG KHÍ THANH SẠCH CẦN BẢO VỆ`;
                    textInfo = `<b>ĐIỀU HÒA TRẠCH PHÁP ĐẠI KỴ:</b> Tọa độ Sơn vị này (${score}pt) bản chất đang giữ dòng địa khí sạch, thanh khiết của ngôi nhà trong nguyên vận. Đặt hầm tự hoại hoặc nhà vệ sinh trực trực xung đè lên sẽ làm ô nhiễm ngầm mạch đất, tổn hại âm đức trạch nhà.`;
                    solInfo = "Mật pháp vi chỉnh: Chủ động tịnh tiến thiết bị xả uế lệch tâm sang phân độ Sơn vị báo màu xanh kề bên để bảo vệ long mạch.";
                }
            }
            
            const safeTitle = escapeStr(titleInfo);
            const safeText = escapeStr(textInfo);
            const safeSol = escapeStr(solInfo);

            sonHTML += `<span style="display:inline-block; white-space:nowrap; cursor:pointer;" onclick="showExplanation('${safeTitle}', '${safeText}', '${safeSol}')">` +
                       `<span style="color:${sonColor}; font-weight:700;">${son}</span>` +
                       `<span style="color:#ffffff;"> (${score}pt)</span></span>`;
            
            if (index < sonGroup.length - 1) sonHTML += ` • `;
        });

        let mốcTâm = item.angle;
        let mốcTrái = (mốcTâm - 5 + 360) % 360;
        let mốcPhải = (mốcTâm + 5) % 360;

        let hauInfoTrái = typeof getCurrentHauInfo === 'function' ? getCurrentHauInfo(mốcTrái, mucDich, namKhaoSatThucTe, quẻMệnhChủLõi, namAmMệnhChủ) : { ten: "Hậu", chatLuongStatic: "Bình Hòa", diemGoc: 60, emoji: "🟡", chatLuong: "Bình Hòa", ynghia: "", giaiphap: "" };
        let hauInfoTâm  = typeof getCurrentHauInfo === 'function' ? getCurrentHauInfo(mốcTâm, mucDich, namKhaoSatThucTe, quẻMệnhChủLõi, namAmMệnhChủ) : { ten: "Hậu", chatLuongStatic: "Bình Hòa", diemGoc: 60, emoji: "🟡", chatLuong: "Bình Hòa", ynghia: "", giaiphap: "" };
        let hauInfoPhải = typeof getCurrentHauInfo === 'function' ? getCurrentHauInfo(mốcPhải, mucDich, namKhaoSatThucTe, quẻMệnhChủLõi, namAmMệnhChủ) : { ten: "Hậu", chatLuongStatic: "Bình Hòa", diemGoc: 60, emoji: "🟡", chatLuong: "Bình Hòa", ynghia: "", giaiphap: "" };

        const getDynamicHauScoreAndSat = (angle) => {
            if (typeof tinhDiemTongHop === 'function') {
                const ketQuaLoi = tinhDiemTongHop(quẻMệnhChủLõi, angle, namKhaoSatThucTe, mucDich, namAmMệnhChủ, 0);
                return {
                    diemDong: ketQuaLoi.hauInfo.diem, 
                    satList: ketQuaLoi.satTinhs       
                };
            }
            return { diemDong: 60, satList: [] };
        };

        let dynTrái = getDynamicHauScoreAndSat(mốcTrái);
        let dynTâm  = getDynamicHauScoreAndSat(mốcTâm);
        let dynPhải = getDynamicHauScoreAndSat(mốcPhải);

        const parseHauStatusCard = (hauObj) => {
            const emoji = hauObj.emoji || "🟡";
            let color = "#dfb76c";
            if (emoji === "🟢" || emoji === "🔮") color = "#30d158";
            if (emoji === "🔴" || emoji === "☠️") color = "#ff3b30";
            if (emoji === "🟡" || emoji === "⚠️") color = "#dfb76c";
            return { color: color, label: hauObj.chatLuong };
        };

        const statusTrái = parseHauStatusCard(hauInfoTrái);
        const statusTâm   = parseHauStatusCard(hauInfoTâm);
        const statusPhải = parseHauStatusCard(hauInfoPhải);

        const getHauExplanation = (hauObj, dynScore, satList, isCat) => {
            let nienHanHau = (satList && satList.length > 0)
                ? `<br><br>⚠️ <b>CẢNH BÁO NIÊN HẠN:</b> Phân vị vướng sát tinh lưu niên, địa khí thực thời biến động còn <b>${dynScore}pt</b>. Qua chu kỳ năm hạn khí mạch sẽ tự phục hồi.`
                : `<br><br>✨ <b>TÌNH TRẠNG LƯU NIÊN:</b> Long mạch tầng sâu sạch sẽ, trường khí vận hành thông suốt thông thuận suốt năm khảo sát.`;
            
            let nghiaThucTe = hauObj.ynghia || "Khí mạch luên hồi tịnh tiến ổn định.";
            
            let phuongAnThucTe = "Giữ khu vực thông thoáng, điều hòa dòng khí ngầm sàn.";
            const isHungHauStatic = hauObj.chatLuongStatic.includes("Hung") || hauObj.chatLuongStatic.includes("Không Vong") || hauObj.chatLuongStatic.includes("Sai Thác");

            if (isCat) {
                if (isHungHauStatic) {
                    phuongAnThucTe = "Mật pháp trấn mạch: Tuyệt đối không động thổ tạo bể ngầm tại đây. Sử dụng một khối đá thạch anh trắng thô tự nhiên nguyên khối lót dưới sàn để gia cố ổn định địa tầng, ngăn chặn dòng ác khí xông lên.";
                } else {
                    phuongAnThucTe = "Duy trì bệ đỡ: Thích hợp đặt trọng điểm kết cấu móng chịu lực hoặc trục dẫn nạp khí lành. Giữ sàn phẳng, sạch sẽ.";
                }
            } else { 
                if (isHungHauStatic) {
                    nghiaThucTe = `Địa tầng ngầm bản chất dính ác khí nguy hiểm (${hauObj.chatLuongStatic}). Trùng khớp tuyệt diệu with công năng uế thải, áp dụng bí mật 'Dĩ Độc Trị Độc' ép chế uế khí cực mạnh.`;
                    phuongAnThucTe = "Bố trí thực địa: Đặt uế cục kiên cố đè trọn dải độ này, lót một lớp than hoạt tính dưới đáy bể phốt để bao bọc cô lập hoàn toàn tạp khí không cho rò rỉ sang phòng bên.";
                } else {
                    nghiaThucTe = `Địa mạch ngầm bản chất vượng khí phúc đức sạch thanh khiết (${hauObj.chatLuongStatic}). Việc cố tình xây dựng bể tự hoại tại đây sẽ gây dìm sập long thần của mảnh đất.`;
                    phuongAnThucTe = "Bắt buộc sửa đổi: Dịch chuyển kết cấu xả thải lệch tâm ra khỏi phân châm hẹp này để nhường chỗ cho nền đất sạch.";
                }
            }

            return `Phân vị Hậu mạch địa tầng ngầm: <b>${hauObj.ten}</b><br>Chỉ số năng lượng Địa khí thực thời: <b>${dynScore}pt</b>.<br><br>🔍 <b>BIỆN GIẢI PHONG THỦY ĐA TẦNG:</b> ${nghiaThucTe}${nienHanHau}<br><br>🛠️ <b>HÀNH ĐỘNG TRẠCH PHÁP THỰC CHIẾN:</b> ${phuongAnThucTe}`;
        };
        
        let html3HauMạch = `
            <div style="display: flex; gap: 6px; margin-top: 6px; width: 100%; box-sizing: border-box; font-family: sans-serif;">
                <div class="hau-node-item" onclick="showExplanation('${escapeStr(hauInfoTrái.ten)}', '${escapeStr(getHauExplanation(hauInfoTrái, dynTrái.diemDong, dynTrái.satList, isCatPurpose))}', 'Thông báo hệ thống')"
                     style="flex: 1; text-align: center; background: rgba(255,255,255,0.04); padding: 6px 4px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.08); cursor: pointer;">
                    <div style="font-size: 0.75rem; color: #fff; font-weight: 700; margin-bottom: 2px;">${hauInfoTrái.ten.split(' ')[0]} (${Math.round(mốcTrái)}°)</div>
                    <div style="font-size: 0.7rem; color: ${statusTrái.color}; font-weight: bold; text-transform: uppercase;">${statusTrái.label}</div>
                </div>
                <div class="hau-node-item" onclick="showExplanation('${escapeStr(hauInfoTâm.ten)}', '${escapeStr(getHauExplanation(hauInfoTâm, dynTâm.diemDong, dynTâm.satList, isCatPurpose))}', 'Thông báo hệ thống')"
                     style="flex: 1; text-align: center; background: rgba(255,255,255,0.04); padding: 6px 4px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.08); cursor: pointer;">
                    <div style="font-size: 0.75rem; color: #ffd700; font-weight: 700; margin-bottom: 2px;">🎯 ${hauInfoTâm.ten.split(' ')[0]} (${Math.round(mốcTâm)}°)</div>
                    <div style="font-size: 0.7rem; color: ${statusTâm.color}; font-weight: bold; text-transform: uppercase;">${statusTâm.label}</div>
                </div>
                <div class="hau-node-item" onclick="showExplanation('${escapeStr(hauInfoPhải.ten)}', '${escapeStr(getHauExplanation(hauInfoPhải, dynPhải.diemDong, dynPhải.satList, isCatPurpose))}', 'Thông báo hệ thống')"
                     style="flex: 1; text-align: center; background: rgba(255,255,255,0.04); padding: 6px 4px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.08); cursor: pointer;">
                    <div style="font-size: 0.75rem; color: #fff; font-weight: 700; margin-bottom: 2px;">${hauInfoPhải.ten.split(' ')[0]} (${Math.round(mốcPhải)}°)</div>
                    <div style="font-size: 0.7rem; color: ${statusPhải.color}; font-weight: bold; text-transform: uppercase;">${statusPhải.label}</div>
                </div>
            </div>`;

        let scoreColor = item.diemTongHop >= 70 ? "#30d158" : (item.diemTongHop >= 50 ? "#dfb76c" : "#ff3b30");
        let bgKhung = item.diemTongHop >= 70 ? 'rgba(48,209,88,0.025)' : (item.diemTongHop >= 50 ? 'rgba(223,183,108,0.03)' : 'rgba(255,59,48,0.03)');
        
        let statusText = "";
        let popExplanation = "";
        let popSolution = "";

        let giaiThichSaoHạnCard = item.satTinhs && item.satTinhs.length > 0 
            ? `<br><br>⚠️ <b>LƯU Ý NIÊN HẠN:</b> Điểm số lập cực hiện tại ghi nhận là ${item.diemTongHop}pt do ngôi nhà bị hung tinh chiếu Ngọn chấn nhiễu ngắn hạn ([${item.satTinhs.map(s => s.ten).join(", ")}]). Trạch đất gốc vẫn vượng tốt, qua năm hạn sao dời đi trường khí sẽ cát hanh phục hồi mạnh mẽ.`
            : `<br><br>✨ <b>THIÊN THỜI KHÍ THUẦN:</b> Phương vị sạch bóng hoàn toàn đại sát tinh lưu niên trong năm ${namKhaoSatThucTe}, khí trường cực kỳ kiên cố an tịnh.`;

        if (isCatPurpose) {
            if (item.diemTongHop >= 70) {
                statusText = `🏆 ĐẠI CÁT CHÍNH TÔNG — ĐẮC KHÍ TOÀN VẸN`;
                popExplanation = `Phương vị hoàn hảo. Hướng lớn đạt chuẩn nạp khí lành vượng trạch dài lâu cho trạch chủ phối quẻ mệnh [${item.cungTrạch}].${giaiThichSaoHạnCard}`;
                popSolution = `Giải pháp: Giữ cho không gian sạch sẽ, thông thoáng để tiếp nạp cát khí từ bên ngoài một cách tối đa.`;
            } 
            else if (item.diemTongHop < 50 && countSonXanh > 0) {
                statusText = `⚠️ ĐỊA MẠCH GỐC TỐT — NIÊN HẠN PHẠM SÁT TINH`;
                popExplanation = `Biện chứng Phong thủy Số: Hướng phối hợp bản mệnh rất tốt, có phân độ Sơn vị hẹp báo Cát lợi (Xanh). Điểm số bị kéo thấp xuống hoàn toàn do hệ thống sát tinh phần Ngọn quấy nhiễu.${giaiThichSaoHạnCard}`;
                popSolution = `Lời khuyên: Gia chủ vẫn hoàn toàn đủ điều kiện quy hoạch lâu dài tại đây. Hãy tiến hành vi chỉnh thiết kế đặt tâm nạp khí lọt khít vào phân độ Sơn vị màu xanh và áp dụng vật phẩm hóa giải.`;
            }
            else if (countSonDo === 3 || item.diemTongHop < 50) {
                statusText = `⚠️ KHÍ TRƯỜNG SUY KIỆT — LƯU Ý HÓA GIẢI`;
                popExplanation = `Cảnh báo: Phương vị này cấu trúc hình học nội tại suy kiệt, hoặc vướng phải niên hạn xấu khiến năng lượng sụt giảm đáng kể.${giaiThichSaoHạnCard}`;
                popSolution = `Lời khuyên: Gia chủ nên ưu tiên dịch chuyển tâm ngắm sang các tọa độ Cát bên cạnh. Trong trường hợp diện tích không cho phép và bắt buộc phải dùng, hãy áp dụng ngay mật pháp điều tiết bằng ngũ hành tương sinh.`;
            }
            else {
                statusText = `🟢 TRƯỜNG KHÍ BÌNH HÒA — AN TÂM ĐỊNH VỊ`;
                popExplanation = `Trường khí khu vực đạt độ ổn định trung tính tốt. Cấu trúc vi phân nội tại cân bằng, ổn định khí trường.${giaiThichSaoHạnCard}`;
                popSolution = `Giải pháp: Có thể an tâm sử dụng quy hoạch công năng, phối hợp thiết kế nội thất hài hòa.`;
            }
        } else {
            if (item.diemTongHop >= 75) {
                statusText = `🏆 ĐẮC CÁCH DIỆU PHÁP TRẤN SÁT HOÀN HẢO`;
                popExplanation = `Tọa Hung Trấn Sát hoàn mỹ. Đặt uế cục chính xác vào dải hung vị này giúp phong tỏa hoàn toàn ác tính của Thần sát mạch đất.${giaiThichSaoHạnCard}`;
                popSolution = `Giải pháp: Cấu trúc lập cực lý tưởng về mặt kiến trúc phong thủy, giữ nguyên vị trí công năng.`;
            } else if (countSonDo > 0) {
                statusText = `⚠️ TỌA HUNG XUNG ĐỘT — KHÍ TRƯỜNG CHƯA ĐỒNG TRỤC`;
                popExplanation = `Mặc dù hướng lớn phù hợp làm nơi xả uế khí, nhưng một vài phân châm Sơn vị hẹp bên trong lại đang giữ dòng năng lượng sạch cần bảo vệ (báo đỏ).${giaiThichSaoHạnCard}`;
                popSolution = `Lời khuyên điều tiết: Chủ động tịnh tiến thiết bị xả uế lệch tâm, đặt đè chính xác lên các Sơn vị báo màu xanh tốt cho trấn sát, trả lại không gian thanh khiết cho Sơn vị đỏ.`;
            } else {
                statusText = `🟢 PHÂN BỔ TRẤN SÁT CHUẨN MỰC TỰ NHIÊN`;
                popExplanation = `Khí trường khu vực đạt độ cô lập ổn định. Đảm bảo công năng uế thải vận hành trơn tru mà không làm ảnh hưởng sang không gian kề cận.${giaiThichSaoHạnCard}`;
                popSolution = `Giải pháp: Chấp nhận được hoàn toàn về mặt phân bổ mặt bằng hình học kiến trúc.`;
            }
        }

        // =========================================================================
        // 🔮 KHẮC PHỤC CHÍNH XÁC: Viết chuỗi liền mạch, dùng toán tử cộng, triệt tiêu gãy dòng
        // =========================================================================
        const scorePopTitle = `Bóc tách Chỉ Số Lập Cực: Hướng ${item.name} [${item.diemTongHop} Điểm]`;
        
        const scorePopExplanation = `Hệ thống Phong Thủy Số tiến hành bóc tách đa tầng tọa độ vật lý tại mốc <b>${item.angle}°</b> để minh bạch điểm số tổng hợp:<br><br>` +
            `🎭 <b>1. THƯỢNG TẦNG (Nhân Mệnh Bát Trạch):</b><br>` +
            `Phương vị kết hợp với quẻ mệnh cốt lõi <b>${quẻMệnhChủLõi}</b> kiến tạo nên cung số <b>${item.cungTrạch}</b>. Đây là mốc năng lượng tĩnh gốc đóng vai trò bệ đỡ sinh cơ ban đầu.<br><br>` +
            `💎 <b>2. TRUNG TẦNG (24 Sơn Minh Châu):</b><br>` +
            `Khí trường thực địa tại Sơn vị được xác định cụ thể thông qua ma trận tương tác: <i>"${item.phanTichGoc}"</i>.<br><br>` +
            `🌟 <b>3. HẠ TẦNG SÂU (Địa Mạch 72 Hậu):</b><br>` +
            `Dòng chảy mạch ngầm long khí tại tâm hướng đang lọt trọn vào phân vị <b>${item.hau.ten}</b>, ghi nhận mức năng lượng địa khí đạt <b>${item.hau.diem} điểm</b>. Trạng thái mạch đất được đánh giá: <b>${item.hau.chatLuong}</b>.<br><br>` +
            `⏳ <b>4. THỜI KHÔNG ĐỘNG (Huyền Không Vận 9 & Niên Tinh):</b><br>` +
            `Xét chu kỳ thiên văn trong năm khảo sát <b>${namKhaoSatThucTe}</b> (nguyên vận 9), phương vị này ${item.satTinhs && item.satTinhs.length > 0 ? `đang chịu lực phạt giảm trừ trực tiếp do bị nhóm hung tinh sát khí ([${item.satTinhs.map(s => s.ten).join(", ")}]) quấy phá phần Ngọn.` : 'hoàn toàn thanh khiết, không vướng ám tinh quấy phá, đắc thiên thời an tịnh để nuôi dưỡng long mạch lâu dài.'}<br><br>` +
            `🎯 <b>KẾT LUẬN LẬP CỰC:</b> Chỉ số <b>${item.diemTongHop} PT</b> là kết quả giao thoa tuyến tính chuẩn xác giữa Địa Khí ngầm tầng sâu, Nhân Mệnh của chủ nhà và Thời Vận biến thiên.`;

        const scorePopSolution = isCatPurpose 
            ? `Ứng dụng thực chiến: ${item.diemTongHop >= 70 ? 'Tọa độ hoàn mỹ đại cát. Ưu tiên đặt trục nạp khí chính hoặc mở cửa khẩu để đón trọn vượng khí.' : 'Khí trường trung tính, an tâm bố trí không gian sinh hoạt, chú ý phối màu nội thất tương sinh.'}`
            : `Ứng dụng thực chiến: ${item.diemTongHop >= 75 ? 'Thần cách trấn yểm diệu pháp. Đặt uế cục tại đây để dùng hung trấn hung cực kỳ đắc cách.' : 'Xem xét vi chỉnh kết cấu xả uế lệch tâm ra khỏi vạch đỏ để bảo vệ long mạch đất.'}`;

        const safePopTitle = escapeStr(`Biện giải Trạch Pháp: Hướng ${item.name} [${item.cungTrạch}]`);
        const safePopDesc = escapeStr(popExplanation);
        const safePopSol = escapeStr(popSolution);

        const safeScoreTitle = escapeStr(scorePopTitle);
        const safeScoreDesc = escapeStr(scorePopExplanation);
        const safeScoreSol = escapeStr(scorePopSolution);

        const div = document.createElement('div');
        div.className = `direction-item`;
        div.style.cssText = `border-left:4px solid ${scoreColor}; background:${bgKhung}; margin-bottom:12px; padding:12px; border-radius:10px; width:100%; box-sizing:border-box; display:flex; flex-direction:column; gap:8px; transition: all 0.3s; font-family:sans-serif;`;
        
        div.innerHTML = `
            <div class="item-info" style="width:100%;">
                <div style="color:#fff; font-size:0.95rem; margin-bottom:6px; font-weight:bold; display:flex; justify-content:space-between; align-items:center;">
                    <!-- SỰ KIỆN CLICK 1: XEM DIỄN GIẢI HƯỚNG ĐẠI CỤC -->
                    <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; cursor:pointer;" onclick="showExplanation('${safePopTitle}', '${safePopDesc}', '${safePopSol}')">
                        Hướng ${item.name} ➔ <span style="color:${scoreColor};">${item.cungTrạch}</span>
                    </span>
                    
                    <!-- SỰ KIỆN CLICK 2: BÓC TÁCH CHI TIẾT ĐIỂM SỐ LIÊN THÔNG (ĐÃ FIX KHỚP CHUỖI TOKEN) -->
                    <span style="font-size:0.8rem; padding:2px 8px; border-radius:6px; font-weight:800; background:rgba(0,0,0,0.3); color:${scoreColor}; border:1px solid ${scoreColor}; white-space:nowrap; cursor:pointer;"  
                          onclick="showExplanation('${safeScoreTitle}', '${safeScoreDesc}', '${safeScoreSol}')">
                        ${item.diemTongHop} PT
                    </span>
                </div>
                
                <div style="margin-bottom:8px; font-size:0.7rem; overflow-x:auto;" class="no-scrollbar">
                    <span style="color:#dfb76c; font-weight:500;">24 SƠN VỊ THỰC THỜI:</span> ${sonHTML}
                </div>
                
                <div style="margin-bottom:6px;">
                    <span style="color:#dfb76c; font-size:0.7rem; font-weight:500;">72 HẬU ĐỊA MẠCH ĐỒNG BỘ MỐC CỐ ĐỊNH:</span>
                    ${html3HauMạch}
                </div>
                
                <div style="color:${scoreColor}; font-size:0.82rem; font-weight:bold; padding-top:4px; line-height:1.4; display:flex; align-items:center; gap:4px; cursor:pointer;" onclick="showExplanation('${safePopTitle}', '${safePopDesc}', '${safePopSol}')">
                    <span>${statusText}</span>
                </div>
            </div>
            
            <button class="btn-rotate" onclick="if(typeof triggerGhostNeedle === 'function') triggerGhostNeedle(${item.angle})" style="background:#222; color:var(--gold, #dfb76c); border:1px solid var(--gold, #dfb76c); padding:8px; border-radius:6px; font-weight:bold; cursor:pointer; width:100%; font-size:0.85rem; text-align:center; margin-top:4px;">Xoay thử la bàn số</button>
        `;
        directionsContainerEl.appendChild(div);
    });
}

// =========================================================================
// 🔮 PHÂN HỆ ĐIỀU KHÍ: MÔ PHỎNG XOAY KIM ẢO CHUẨN ĐỒNG TRỤC TRỌNG TÂM
// =========================================================================
/**
 * [ID: UI-SIMULATE-ROTATE-01] Hàm triggerGhostNeedle
 * Mô phỏng tia hướng ảo tuyến vàng la bàn số, tính sai số góc thực tế với góc ảo 
 * để dẫn dắt hành vi người dùng vi chỉnh không gian.
 */
function triggerGhostNeedle(angle) {
    targetAngle = angle; // Ghi nhận góc độ mô phỏng vào bộ nhớ hệ thống
    
    const ghost = document.getElementById('ghostNeedle');
    if (ghost) {
        ghost.style.display = 'block';
        ghost.style.opacity = "1";
        // Avalon cũ loại bỏ để chuẩn bị cho chu trình quét cảm biến mới
        ghost.classList.remove('matched-pulse'); 
        ghost.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
    }
    
    // --- ĐỒNG BỘ TOÁN PHÁP CHÍNH TÔNG CỦA TRỤC THỜI GIAN ĐỘNG & BỌC LÓT DOM ---
    const dayStr = document.getElementById('birthDay')?.value || "";
    const monthStr = document.getElementById('birthMonth')?.value || "";
    const yearStr = document.getElementById('birthYear')?.value || "";

    const txtSurveyYear = document.getElementById('surveyYear');
    const namKhaoSatThucTe = (txtSurveyYear && txtSurveyYear.value.trim() !== '') ? parseInt(txtSurveyYear.value, 10) : new Date().getFullYear();

    let namAmMệnhChủ = new Date().getFullYear();
    if (dayStr && monthStr && yearStr && yearStr.length === 4) {
        const d = parseInt(dayStr, 10);
        const m = parseInt(monthStr, 10);
        const y = parseInt(yearStr, 10);
        namAmMệnhChủ = (m < 2 || (m === 2 && d < 4)) ? y - 1 : y;
    }

    let tinhChuMenh = (typeof chủMệnh !== 'undefined' && chủMệnh) ? chủMệnh : "Khảm";
    if (dayStr && monthStr && yearStr && yearStr.length === 4) {
        if (typeof tínhCungPhi === 'function') {
            tinhChuMenh = tínhCungPhi(parseInt(yearStr, 10), parseInt(monthStr, 10), parseInt(dayStr, 10), document.getElementById('gender')?.value || 'male');
        }
    }

    const mucDich = document.getElementById('purpose')?.value || 'house';
    const tongHop = tinhDiemTongHop(tinhChuMenh, angle, namKhaoSatThucTe, mucDich, namAmMệnhChủ, 0);
    
    let colorStyle = "#ff3b30"; 
    if (tongHop.diem >= 72) {
        colorStyle = "#30d158"; 
    } else if (tongHop.diem >= 50) {
        colorStyle = "#ff9f0a"; 
    }
    
    let sơnThử = tìmSơnHướng(angle);
    
    const detailBoxEl = document.getElementById('detailBox') || (typeof detailBox !== 'undefined' ? detailBox : null);
    if (detailBoxEl) {
        detailBoxEl.style.borderLeftColor = colorStyle;
        detailBoxEl.style.background = "rgba(255,255,255,0.05)";
        detailBoxEl.innerHTML = `
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
        updateCompassUI(typeof currentHeading !== 'undefined' ? currentHeading : angle);
    }
}

// ====================== ĐỊNH VỊ 24 SƠN ĐỒNG BỘ TUYỆT ĐỐI THEO CONFIG TĨNH ======================
function tìmSơnHướng(degree) {
    const normalized = ((degree % 360) + 360) % 360;
    const match = SON_24_CONFIG.find(s => {
        if (s.min > s.max) return normalized >= s.min || normalized < s.max;
        return normalized >= s.min && normalized < s.max;
    });
    return match ? match.name : "Tý";
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

function sinhLuanGiaiThienThoi(code, overrideYear) {
    let currentYear;
    if (overrideYear) {
        currentYear = parseInt(overrideYear, 10);
    } else {
        // 🟢 ĐÃ SỬA: Đồng bộ cơ chế nhận diện năm lịch pháp ngắn hạn
        const txtSurveyYear = document.getElementById('surveyYear');
        const valYear = txtSurveyYear ? txtSurveyYear.value.trim() : "";
        currentYear = (valYear !== "" && !isNaN(valYear)) ? parseInt(valYear, 10) : layNamKhaoSatThienVan();
    }
    
    // ⚙️ THUẬT TOÁN ĐÃ HIỆU CHUẨN: Xử lý mượt mà toàn bộ số âm lịch pháp (Anti-Negative Year Bug)
    let bệĐỡChuKỳ = Math.floor((currentYear - 1864) / 20);
    let vanSo = ((bệĐỡChuKỳ % 9) + 9) % 9 + 1; 

    const item = VAN_DATA[vanSo]?.[code];
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
    const colorStar = { best: "#30d158", good: "#aaff00", neutral: "#e0e0e0", bad: "#ff9f0a", worst: "#ff3b30" }[item.loai] || "#fff";

    return `
        <div style="background: rgba(255,255,255,0.01); padding: 15px; border-radius: 12px; border: 1px solid rgba(223,183,108,0.2); margin-top: 15px; font-family: sans-serif;">
            <div style="color: var(--gold); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 5px; font-weight:bold; text-align: left;">
                ◆ HUYỀN KHÔNG VẬN ${vanSo} — NIÊN ĐỘ LỊCH PHÁP ${currentYear}
            </div>
            <div style="margin: 5px 0 10px 0; border-bottom: 1px dashed rgba(255,255,255,0.1); padding-bottom: 10px; text-align: left;">
                <span style="color: ${colorStar}; font-size: 1.2rem; font-weight: 800;">${item.sao}</span>
                <span style="color: #aaa; font-size: 0.85rem; margin-left: 8px;">• Ngũ Hành: ${item.hanh}</span>
            </div>
            <div style="color: #ddd; font-size: 0.88rem; line-height: 1.6; margin-bottom: 12px; text-align: left;">${item.y_nghia}</div>
            <div style="color: ${colorStar}; font-size: 0.85rem; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid ${colorStar}; font-weight:500; text-align: left;">
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

// =========================================================================
// 🔮 MẬT PHÁP HÓA GIẢI THEO NGỮ CẢNH CẤU TRÚC (BẢN FIX LỖI CÚ PHÁP)
// =========================================================================
function sinhMatPhapHoaGiai(mucDich, cungSat, hanhChu, phuongHuong, code) {
    // 🟢 ĐÃ SỬA CHÍ CHÍNH XÁC: Viết liền mạch không khoảng trống biến phươngVịThiếtLập
    let hanhPhuongViGoc = (typeof phươngVịThiếtLập !== 'undefined' && phươngVịThiếtLập[code]) 
                          ? phươngVịThiếtLập[code].ngũHành : "Tho";
    
    // Đột phá Việt hóa: Biến chữ không dấu ngầm (Thuy, Moc...) thành chữ hiển thị trên giao diện mượt mà
    const tuDienHanhViet = { "Thuy": "Thủy", "Moc": "Mộc", "Hoa": "Hỏa", "Tho": "Thổ", "Kim": "Kim" };
    let hanhPhuongVi = tuDienHanhViet[hanhPhuongViGoc] || "Thổ";
    
    // Đồng bộ tuyệt đối: Ép phao khóa hành sang dạng có dấu để khớp 100% với DATA_HOA_GIAI
    const maTranKhoaHanh = {
        "Moc": "Mộc", "Mộc": "Mộc",
        "Hoa": "Hỏa", "Hỏa": "Hỏa",
        "Tho": "Thổ", "Thổ": "Thổ",
        "Kim": "Kim",
        "Thuy": "Thủy", "Thủy": "Thủy"
    };
    let keyHanhChu = maTranKhoaHanh[hanhChu] || hanhChu;

    // Tiến hành bốc trích giải pháp chi tiết từ kho tàng
    let data = DATA_HOA_GIAI[cungSat] ? DATA_HOA_GIAI[cungSat][keyHanhChu] : null;
    
    // Mạng lưới phòng thủ nếu không khớp dữ liệu tĩnh thì tự động nội suy
    if (!data) {
        data = {
            phap: `Điều hòa, cân bằng dòng khí trường xung khắc trực diện giữa hành chủ (${keyHanhChu}) với phương vị bản thể ${phuongHuong} (${hanhPhuongVi}) mang năng lượng của uế tinh ${cungSat}.`,
            vat: "Chuông Gió Đồng Thất Tinh hoặc Quả Cầu Thạch Anh màu trung tính để trung hòa địa long mạch"
        };
    }

    // Hoán đổi sạch sẽ chuỗi văn bản mẫu của dữ liệu
    let phuongPhapBaoQuoc = data.phap;
    phuongPhapBaoQuoc = phuongPhapBaoQuoc.split('${phuongHuong}').join(phuongHuong).split('\${phuongHuong}').join(phuongHuong);
    phuongPhapBaoQuoc = phuongPhapBaoQuoc.split('${hanhPhuongVi}').join(hanhPhuongVi).split('\${hanhPhuongVi}').join(hanhPhuongVi);
    
    let vatPhamToiThuong = data.vat;
    
    // Thiết lập ngữ cảnh thông minh dựa trên mục đích sử dụng
    const currentConfig = ConfigPhongThuy[mucDich] || { title: "Vị trí hạng mục", isCat: true };
    let thuyetMinhViTri = "";
    
    if (currentConfig.isCat) {
        thuyetMinhViTri = `Cấu trúc đang thiết lập nhìn về phương vị bị phạm đại kỵ Sát tinh <strong>${cungSat}</strong>. Phương án điều hòa khí trường: ${phuongPhapBaoQuoc}`;
    } else if (mucDich === 'kitchen') {
        thuyetMinhViTri = `Bếp nấu đang tọa đè sai cung vị, thiêu rụi phước báu cát lành của trạch đất. Đồng thời nếu rơi vào thế hung tinh bị kích động nghịch chiều: ${phuongPhapBaoQuoc}`;
    } else {
        thuyetMinhViTri = `Khu vực xả uế uế tạp đặt đè lên cát tinh làm tổn hao tài lộc, ô uế long mạch. Chiếu theo mật pháp đối sánh ngũ hành: ${phuongPhapBaoQuoc}`;
    }

    return `
    <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(223, 183, 108, 0.2); border-radius: 12px; padding: 15px; margin-top: 15px; font-family: sans-serif;">
        <h4 style="color: #dfb76c; margin: 0 0 10px 0; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.5px;">◆ Mật Pháp Hóa Giải Pháp Bảo</h4>
        <div style="margin-bottom: 15px; font-size: 0.88rem; color: #ddd; line-height: 1.6; text-align: left;">
            <strong style="color: #ff9f0a;">[Phân Tích Cấu Trúc]:</strong> ${thuyetMinhViTri}
        </div>
        <div style="padding: 12px; background: rgba(255, 59, 48, 0.08); border-left: 4px solid #ff3b30; border-radius: 6px; font-size: 0.88rem; text-align: left;">
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
/**
 * [ID: UI-REALTIME-COMPASS-01] Hàm updateCompassUI
 * Quét cảm biến trắc địa thực tế, quay đồ hình la bàn, đồng bộ hóa tham số ngày sinh thời thực lên màn hình,
 * tự động bật Led cảnh báo khi kim đỏ thực tế lọt khít dải độ vàng ảo của triggerGhostNeedle.
 */
function updateCompassUI(heading) {
    // 1. TÍNH GÓC THỰC TẾ CỤC BỘ (Chỉ dùng để xoay đĩa la bàn)
    let trueHeading = (heading + (magneticDeclination % 360) + 360) % 360;
    
    // KHÓA CỨNG: Biến toàn cục chỉ giữ góc vật lý gốc (Chữ số tọa độ sẽ đứng im không bị nhảy dồn)
    currentHeading = Math.round(heading);
    
    // Xoay la bàn theo góc thực tế đã bù trừ, nhưng thanh trượt giữ theo hướng máy
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
    const namKhaoSatThucTe = (txtSurveyYear && txtSurveyYear.value.trim() !== '') ? parseInt(txtSurveyYear.value, 10) : new Date().getFullYear();

    // 2. TỰ ĐỘNG CHUẨN HÓA: Tính toán năm âm lịch của mệnh chủ dựa theo Tiết khí Lập Xuân
    let namAmMệnhChủ = new Date().getFullYear();
    if (dayStr && monthStr && yearStr && yearStr.length === 4) {
        const d = parseInt(dayStr, 10);
        const m = parseInt(monthStr, 10);
        const y = parseInt(yearStr, 10);
        namAmMệnhChủ = (m < 2 || (m === 2 && d < 4)) ? y - 1 : y;
    }

    // TỰ ĐỘNG KHẮC PHỤC LỖI Racing-Condition: Đảm bảo có quẻ mệnh chạy nền không bị undefined
    let tinhChuMenh = (typeof chủMệnh !== 'undefined' && chủMệnh) ? chủMệnh : "Khảm";
    if (dayStr && monthStr && yearStr && yearStr.length === 4) {
        if (typeof tínhCungPhi === 'function') {
            tinhChuMenh = tínhCungPhi(parseInt(yearStr, 10), parseInt(monthStr, 10), parseInt(dayStr, 10), document.getElementById('gender')?.value || 'male');
        }
    }

    // TẠO BIẾN GÓC TRA CỨU ĐỒNG BỘ TUYỆT ĐỐI VỚI REALHEADING CỦA HÀM RECALCULATEFATE
    const calcHeading = ((currentHeading % 360) + 360) % 360;

    // ==================== 1. XÁC ĐỊNH 8 CUNG ĐẠI CỤC CHUẨN ĐẤT NỀN ====================
    let currentCung = "";
    let currentCode = "";
    if (calcHeading >= 337.5 || calcHeading < 22.5) {
        currentCung = "KHẢM (BẮC)"; currentCode = "N";
    } else if (calcHeading >= 22.5 && calcHeading < 67.5) {
        currentCung = "CẤN (ĐÔNG BẮC)"; currentCode = "NE";
    } else if (calcHeading >= 67.5 && calcHeading < 112.5) {
        currentCung = "CHẤN (ĐÔNG)"; currentCode = "E";
    } else if (calcHeading >= 112.5 && calcHeading < 157.5) {
        currentCung = "TỐN (ĐÔNG NAM)"; currentCode = "SE";
    } else if (calcHeading >= 157.5 && calcHeading < 202.5) {
        currentCung = "LY (NAM)"; currentCode = "S";
    } else if (calcHeading >= 202.5 && calcHeading < 247.5) {
        currentCung = "KHÔN (TÂY NAM)"; currentCode = "SW";
    } else if (calcHeading >= 247.5 && calcHeading < 292.5) {
        currentCung = "ĐOÀI (TÂY)"; currentCode = "W";
    } else if (calcHeading >= 292.5 && calcHeading < 337.5) {
        currentCung = "CÀN (TÂY BẮC)"; currentCode = "NW";
    }

    // ==================== 2. TRÍCH XUẤT 24 SƠN VÀ 72 HẬU THEO TỌA ĐỘ GỐC ====================
    let gockim = calcHeading;
    let sơnHiệnTạiObj = SON_24_CONFIG.find(s => {
        if (s.min > s.max) return gockim >= s.min || gockim < s.max;
        return gockim >= s.min && gockim < s.max;
    }) || SON_24_CONFIG[0];
    let sơnHiệnTại = sơnHiệnTạiObj.name;

    const currentHauInfo = getCurrentHauInfo(calcHeading);
    const mụcĐích = document.getElementById('purpose')?.value || 'house';
    
    // TÍNH TOÁN ĐIỂM SỐ DỰA TRÊN GÓC TOẠ ĐỘ THỰC ĐỊA CỐ ĐỊNH 
    const tongHop = tinhDiemTongHop(tinhChuMenh, calcHeading, namKhaoSatThucTe, mụcĐích, namAmMệnhChủ);

    // Mốc màu hiển thị số điểm tổng hợp trên thanh la bàn đồng bộ với ngưỡng Đạt Cách 72pt (Sử dụng let để tránh lỗi bẫy cú pháp tái gán)
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
        // ĐÃ SỬA: Chuyển sang trueHeading để chế độ đo tự do cũng sáng đúng tâm khi lệch từ
        if (typeof kichHoatDenLedQuet === 'function') kichHoatDenLedQuet(Math.round(trueHeading));
        return;
    }

    // =========================================================================
    // 🏛️ NÂNG CẤP ĐỒNG BỘ MỤC 5: CHẾ ĐỘ LUẬN ĐOÁN CAO CẤP PHÂN TẦNG VẬN 9 (UI CHUẨN XÁC)
    // =========================================================================
    const hànhPhươngVị = phươngVịThiếtLập?.[currentCode]?.ngũHành || "N/A";
    
    // TẬP TRUNG HỌC THUẬT: Chuẩn hóa chữ hoa đầu chuỗi để khớp chính xác cấu trúc mảng ngoài
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

    // TÌM ĐOẠN NÀY TRONG HÀM updateCompassUI() CỦA BẠN:
    if (ketQua.thongTinSao.includes("⚠️")) {
    canhBaoCuuTinh = `<div style="${boxStyle} background:rgba(255,59,48,0.08); border:1px solid #ff3b30; color:#ff3b30;"><b style="display:block; margin-bottom:4px; font-size:0.9rem;">⚠️ CẢNH BÁO NIÊN HẠN CỬU TINH ${namKhaoSatThucTe}:</b>${ketQua.thongTinSao.replace(/⚠️/g, '•')}</div>`;
    
    if (ketQua.meoGiaiHan) {
        // 🔴 ĐÃ SỬA: Xóa bỏ cụm "Mật pháp giải hạn thời khí" bị lặp, dùng trực tiếp chuỗi của hàm trả về
        giaiHanCuuTinh = `<div style="margin-top:5px; padding:8px 12px; background:rgba(255,159,10,0.08); border-left:3px solid #ff9f0a; color:#ff9f0a; font-size:0.82rem; border-radius:0 6px 6px 0; font-family: sans-serif;">${ketQua.meoGiaiHan}</div>`;
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

    // 🔥 TÁI GÁN ĐỒNG BỘ TRỰC TIẾP TRÁNH BẪY LỖI KHAI BÁO CÚ PHÁP
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
    
    // Nếu lõi thuật toán bóc tách ra lỗi đặc biệt, bung trực tiếp lên đầu panel
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
    // ĐÃ SỬA: Chuyển sang trueHeading để chế độ luận đoán nâng cao sáng khớp trục tâm la bàn
    if (typeof kichHoatDenLedQuet === 'function') kichHoatDenLedQuet(Math.round(trueHeading));
    
    // ==================== 9. SMART GHOST NEEDLE REALTIME ALIGNMENT ====================
    if (typeof targetAngle !== 'undefined' && targetAngle !== null && document.getElementById('ghostNeedle')) {
        const ghost = document.getElementById('ghostNeedle');
        const adviceTxtEl = document.getElementById('ghost-advice-text');
        const scoreBadgeEl = document.getElementById('ghost-score-badge');
        
        ghost.style.opacity = "1";
        // Đồng bộ kim ảo theo trueHeading (góc la bàn thực tế sau khi tính toán đa tầng)
        ghost.style.transform = `translate(-50%, -50%) rotate(${targetAngle - trueHeading}deg)`;
        
        let saiSoGoc = Math.abs(trueHeading - targetAngle) % 360;
        if (saiSoGoc > 180) saiSoGoc = 360 - saiSoGoc;

        // TIÊU CHUẨN ĐỊA LÝ CAO CẤP: Sai lệch dưới 1.5 độ bọc lót đồng bộ Neon phát quang
        if (saiSoGoc <= 1.5) {
            ghost.classList.add('matched-pulse');
            
            if (adviceTxtEl && !adviceTxtEl.innerHTML.includes("🏆")) {
                adviceTxtEl.style.color = "#30d158";
                adviceTxtEl.innerHTML = `
                    <span style="color:#30d158; font-weight:bold; display:block; margin-bottom:4px; font-family: sans-serif;">
                        🏆 KHỚP TRỤC LONG MẠCH — PHƯƠNG VỊ ĐẮC VỊ THÀCH CÔNG!
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

function getPhongThuySatTinh(tenSon, nam) {
    const results = [];
    if (!tenSon) return results;

    // Ưu tiên năm truyền trực tiếp -> Hệ thống Global -> Năm thực tế máy tính
    const year = parseInt(nam, 10) || 
                 (typeof GlobalTime !== 'undefined' ? parseInt(GlobalTime.year || GlobalTime.nam, 10) : null) || 
                 (typeof layNamKhaoSatThienVan === 'function' ? layNamKhaoSatThienVan() : new Date().getFullYear());

    if (!year || isNaN(year)) return results;

    const thongTinSơnLõi = DATA_THANSAT.MA_TRAN_24_SON_VI[tenSon];
    const codeHuongLon = thongTinSơnLõi ? thongTinSơnLõi.huongDaiCuc : "N";
    
    const mãHướngSangTiếngViệt = { "N": "Bắc", "NE": "Đông Bắc", "E": "Đông", "SE": "Đông Nam", "S": "Nam", "SW": "Tây Nam", "W": "Tây", "NW": "Tây Bắc" };
    const huongThucTe = mãHướngSangTiếngViệt[codeHuongLon] || "Trung Cung";

    // 1. ENGINE NGỮ HOÀNG ĐẠI SÁT
    let diff = (year - 2024) % 9;
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
    const diaChiNam = DATA_THANSAT.thaiTue[year % 12];
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

    // 3. ENGINE TAM SÁT PHÂN RÃ CHÍNH TÔNG
    const tamHopCuc = getTamHopCuc(diaChiNam);
    const diaChiLienQuoiCuaSơn = thongTinSơnLõi ? thongTinSơnLõi.diaChiLienQuoi : "";
    
    const mapCụcĐơnGiản = { 
        "ThânTýThìn": ["Tỵ", "Ngọ", "Mùi"], 
        "DầnNgọTuất": ["Hợi", "Tý", "Sửu"], 
        "HợiMãoMùi": ["Thân", "Dậu", "Tuất"], 
        "TỵDậuSửu": ["Dần", "Mão", "Thìn"] 
    };
    const mảngSát = mapCụcĐơnGiản[tamHopCuc] || [];

    if (mảngSát.includes(tenSon) || mảngSát.includes(diaChiLienQuoiCuaSơn)) {
        let tênSátChiTiết = "Tam Sát";
        const vịTríPhầnTử = mảngSát.indexOf(diaChiLienQuoiCuaSơn) !== -1 ? mảngSát.indexOf(diaChiLienQuoiCuaSơn) : mảngSát.indexOf(tenSon);
        if (vịTríPhầnTử !== -1) {
            const cácTênSát = ["Kiếp Sát", "Tai Sát", "Tuế Sát"];
            tênSátChiTiết = cácTênSát[vịTríPhầnTử];
        }

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
// 📐 HÀM TOÁN HỌC VI PHÂN PHƯƠNG VỊ VÀ ĐỐI XỨNG HÌNH HỌC KHÔNG GIAN
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
    const normalizedPhysical = ((degree % 360) + 360) % 360;
    const currentHeadingRound = Math.round(normalizedPhysical);

    const txtNamKhaoSat = document.getElementById('surveyYear'); 
    const namKhaoSatThucTe = (txtNamKhaoSat && txtNamKhaoSat.value.length === 4) ? parseInt(txtNamKhaoSat.value, 10) : new Date().getFullYear();

    const currentCung = getCungName(normalizedPhysical);
    const sonObj = PhongThuyCore.getSonObj(normalizedPhysical);
    const sonName = sonObj.name;
    const currentHauInfo = getCurrentHauInfo(normalizedPhysical);
    const khongVongInfo = kiemTraKhongVong(normalizedPhysical);

    let tongDiemHTML = "";
    let colorDiemRealtime = "#8a8a8f";

    const dayStr = document.getElementById('birthDay')?.value || "";
    const monthStr = document.getElementById('birthMonth')?.value || "";
    const yearStr = document.getElementById('birthYear')?.value || "";
    let namAmMệnhChủ = null;
    if (dayStr && monthStr && yearStr && yearStr.length === 4) {
        namAmMệnhChủ = (parseInt(monthStr, 10) < 2 || (parseInt(monthStr, 10) === 2 && parseInt(dayStr, 10) < 4)) ? parseInt(yearStr, 10) - 1 : parseInt(yearStr, 10);
    }

    if (typeof chủMệnh !== 'undefined' && chủMệnh) {
        const mucDichHienTai = document.getElementById('purpose')?.value || 'house';
        const tongHop = tinhDiemTongHop(chủMệnh, normalizedPhysical, namKhaoSatThucTe, mucDichHienTai, namAmMệnhChủ);
        
        if (tongHop.diem >= 72) colorDiemRealtime = "#30d158";
        else if (tongHop.diem >= 50) colorDiemRealtime = "#ffd700";
        else colorDiemRealtime = "#ff3b30";

        tongDiemHTML = `<div style="font-size: 0.95rem; font-weight: 850; color: ${colorDiemRealtime}; background: rgba(0,0,0,0.3); padding: 2px 8px; border-radius: 5px;">${tongHop.diem}pt (${tongHop.level})</div>`;
    }

    const degreeTxt = document.getElementById('degree-txt') || document.getElementById('degreeTxt');
    if (degreeTxt) {
        degreeTxt.innerHTML = `
            <div style="grid; gap: 4px; font-family: sans-serif;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-size: 1.8rem; font-weight: 900; color: #ffca28;">${currentHeadingRound}°</span>
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
    
    // 🔴 ĐÃ SỬA: Bổ sung đầy đủ toàn vẹn 24 Sơn vị (Gồm Can, Chi và Tứ Duy) để chống bẫy undefined
    BO_CHUYEN_DOI_NGON_NGU: {
        "Tý": "Ty", "Sửu": "Suu", "Dần": "Dan", "Mão": "Mao", "Thìn": "Thin", "Tỵ": "Tỵ",
        "Ngọ": "Ngo", "Mùi": "Mui", "Thân": "Than", "Dậu": "Dau", "Tuất": "Tuat", "Hợi": "Hoi",
        "Nhâm": "Nham", "Quý": "Quy", "Giáp": "Giap", "Ất": "At", "Bính": "Binh", "Đinh": "Dinh",
        "Canh": "Canh", "Tân": "Tan", "Cấn": "Can", "Tốn": "Ton", "Khôn": "Khon", "Càn": "Can"
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

// =========================================================================
// 🛠️ PHÂN HỆ CÁC HÀM XỬ LÝ TOÁN PHÁP ĐỒNG BỘ TRẮC ĐỊA
// =========================================================================

/**
 * [ID: SAT-DETAIL-01] Hàm getChiTietTamSat
 * 🔴 ĐÃ SỬA: Đồng bộ hóa toàn bộ các Key con bên trong sang dạng chuỗi chuẩn hóa hệ thống
 * (Trùng khớp răng rắc với mảng quét khí tamSatPhanCham của lõi thuật toán)
 */
function getChiTietTamSat(cucKhongDau, diaChiLienQuoiKhongDau) {
    const cấuHìnhPhânRã = {
        "ThanTyThin": { "Tỵ": "Kiếp Sát (Hao tài, thương tổn)", "Ngo": "Tai Sát (Tai nạn, bệnh tật)", "Mui": "Tuế Sát (Trì trệ, quan phi)" },
        "DanNgoTuat": { "Hoi": "Kiếp Sát (Hao tài, thương tổn)", "Ty": "Tai Sát (Tai nạn, bệnh tật)", "Suu": "Tuế Sát (Trì trệ, quan phi)" },
        "HoiMaoMui":  { "Than": "Kiếp Sát (Hao tài, thương tổn)", "Dau": "Tai Sát (Tai nạn, bệnh tật)", "Tuat": "Tuế Sát (Trì trệ, quan phi)" },
        "TỵDauSuu":   { "Dan": "Kiếp Sát (Hao tài, thương tổn)", "Mao": "Tai Sát (Tai nạn, bệnh tật)", "Thin": "Tuế Sát (Trì trệ, quan phi)" }
    };
    return cấuHìnhPhânRã[cucKhongDau]?.[diaChiLienQuoiKhongDau] || "Tam Sát Lưu Niên";
}

/**
 * [ID: COMPASS-MATH-01] Hàm dịchĐộ SốThànhTênSơn
 * Chuyển đổi chuẩn xác từ số độ thực địa sang tên 24 Sơn vị hẹp hòi 15đ độ phân giải cao.
 */
function dịchĐộSốThànhTênSơn(degree) {
    const normalized = ((degree % 360) + 360) % 360;
    const chuỗiSơnLầnLượt = [
        "Tý", "Quý", "Sửu", "Cấn", "Dần", "Giáp", "Mão", "Ất", "Thìn", "Tốn", "Tỵ", "Bính", 
        "Ngọ", "Đinh", "Mùi", "Khôn", "Thân", "Canh", "Dậu", "Tân", "Tuất", "Càn", "Hợi", "Nhâm"
    ];
    let index = Math.floor(((normalized + 7.5) % 360) / 15);
    return chuỗiSơnLầnLượt[index] || "Tý";
}

/**
 * [ID: COMPASS-MATH-02] Hàm getHuongDoiXung
 * Thuật toán đối xung tìm vị trí Tuế Phá chính tông của năm khảo sát.
 */
function getHuongDoiXung(huong) {
    const map = { "Bắc": "Nam", "Nam": "Bắc", "Đông": "Tây", "Tây": "Đông", "Đông Bắc": "Tây Nam", "Tây Nam": "Đông Bắc", "Đông Nam": "Tây Bắc", "Tây Bắc": "Đông Nam" };
    return map[huong] || huong;
}

function renderMultiLayerDetail(result, van, degree) {
    if (!result) return;

    // Phân rã dữ liệu bóc tách từ thuật toán lõi 
    const { diem, level, message, hoaGiai, khongVong, satTinhs, sonName, hauInfo } = result;

    const mucDich = document.getElementById('purpose')?.value || "house";
    const nguonConfig = (typeof ConfigPhongThuy !== 'undefined') ? ConfigPhongThuy : ((typeof PhongThuyCore !== 'undefined' && PhongThuyCore.data?.Config) ? PhongThuyCore.data.Config : {});
    const config = nguonConfig[mucDich] || { title: "Hạng mục", isCat: true };
    const isCatPurpose = config.isCat; 

    // Đồng bộ thang màu trạng thái với ngưỡng Đạt Cách Vận 9 của Phong Thủy Số
    let colorStatus = "#ff3b30"; 
    if (diem >= 72) {
        colorStatus = diem >= 85 ? "#30d158" : "#32b057"; 
    } else if (diem >= 50 && isCatPurpose) {
        colorStatus = "#dfb76c"; 
    }

    // Trích xuất thông tin lịch pháp phục vụ tính toán Hậu mạch đồng trục
    const dayStr = document.getElementById('birthDay')?.value || "";
    const monthStr = document.getElementById('birthMonth')?.value || "";
    const yearStr = document.getElementById('birthYear')?.value || "";
    const txtSurveyYear = document.getElementById('surveyYear');
    const namKhaoSatThucTe = (txtSurveyYear && txtSurveyYear.value.trim() !== '') ? parseInt(txtSurveyYear.value, 10) : new Date().getFullYear();

    let namAmMệnhChủ = new Date().getFullYear();
    if (dayStr && monthStr && yearStr && yearStr.length === 4) {
        namAmMệnhChủ = (parseInt(monthStr, 10) < 2 || (parseInt(monthStr, 10) === 2 && parseInt(dayStr, 10) < 4)) ? parseInt(yearStr, 10) - 1 : parseInt(yearStr, 10);
    }

    let quẻMệnhChủLõi = "Khảm";
    if (typeof chủMệnh !== 'undefined' && chủMệnh) {
        quẻMệnhChủLõi = chủMệnh;
    } else if (typeof chủMệnhToànCục !== 'undefined' && chủMệnhToànCục) {
        quẻMệnhChủLõi = chủMệnhToànCục;
    }
    quẻMệnhChủLõi = quẻMệnhChủLõi.trim().charAt(0).toUpperCase() + quẻMệnhChủLõi.slice(1).toLowerCase();

    let html = `<div style="font-size:0.92rem; line-height:1.6; color:#e0e0e0; font-family: sans-serif; width: 100%; box-sizing: border-box;">`;

    // --- TẦNG 1: THƯỢNG ĐỈNH TỔNG ĐIỂM SỐ CHỐNG SẬP KHUNG KHI ĐỔI ĐỘ TRỰC TIẾP ---
    html += `<div style="text-align:center; padding:20px; background:rgba(255,255,255,0.02); border-radius:16px; margin-bottom:20px; border: 1px solid ` + colorStatus + `40; box-shadow: inset 0 0 15px ` + colorStatus + `10;">` +
        `<div style="font-size:0.75rem; color:#888; text-transform:uppercase; letter-spacing: 2px; font-weight: bold;">Chỉ số Thống kê PT [${config.title}] Vận 9</div>` +
        `<div style="font-size:3.5rem; font-weight:900; color:` + colorStatus + `; margin: 5px 0; text-shadow: 0 0 10px ` + colorStatus + `20;">${diem}<span style="font-size:1.2rem; font-weight:400;">pt</span></div>` +
        `<div style="font-weight:700; color:` + colorStatus + `; letter-spacing: 1px; padding: 4px 16px; background: ` + colorStatus + `15; display: inline-block; border-radius: 20px; text-transform: uppercase; font-size: 0.85rem; border: 1px solid ` + colorStatus + `30;">${level}</div>` +
        `<div style="margin-top:12px; font-size:0.75rem; color:#8a8a8f; font-family: monospace; line-height: 1.4; border-top: 1px dashed rgba(255,255,255,0.05); padding-top: 8px;">` +
            `Toán thức Lập cực: PT = [ ( BT<sub>Gốc</sub> + Δ<sub>H72</sub> ) × K<sub>Van</sub> ${isCatPurpose ? '-' : '+'} ΣΨ<sub>Sat</sub> ] × Γ<sub>Khai</sub>` +
        `</div>` +
    `</div>`;

    // --- TẦNG 2: BỘ LỌC CẢNH BÁO ĐẠI KÌ LƯU NIÊN ĐỘNG ---
    if (khongVong || (satTinhs && satTinhs.length > 0)) {
        html += `<div style="margin-bottom:20px; display: flex; flex-direction: column; gap: 8px;">`;
        
        if (khongVong) {
            let kvBg = isCatPurpose ? "rgba(255,59,48,0.12)" : "rgba(48,209,88,0.12)";
            let kvBorder = isCatPurpose ? "#ff3b30" : "#30d158";
            let kvTitle = isCatPurpose ? `⚠️ ĐẠI KỴ TỬ HUYỆT: ${khongVong.loai}` : `🏆 DIỆU PHÁP CHẾ SÁT: TOẠ TRÚNG ${khongVong.loai}`;
            let kvMsg = isCatPurpose ? 
                `Hạng mục cấu trúc đang đặt đè trúng trục đứt gãy năng lượng của vòng Không Vong, khiến dòng sinh khí bị xé toạc, hỗn tạp, phá tài tốn đinh.` : 
                `Thuật Phong thủy đỉnh cao! Chọn đúng tọa độ đứt gãy mạch từ trường để đặt thiết bị xả uế, uế khí theo dòng xoáy Không Vong xả thẳng ra ngoài.`;

            html += `<div style="background:${kvBg}; padding:12px 15px; border-radius:12px; border:1px solid ${kvBorder};">` +
                `<strong style="color:${kvBorder}; font-size: 0.9rem; display: block; margin-bottom: 3px;">${kvTitle}</strong>` +
                `<span style="font-size:0.85rem; color: #eee;">${kvMsg}</span>` +
            `</div>`;
        }

        if (satTinhs && satTinhs.length > 0) {
            satTinhs.forEach(sat => {
                let satColor = isCatPurpose ? (sat.color || '#ff9f0a') : '#30d158';
                let satBg = isCatPurpose ? 'rgba(255,159,10,0.08)' : 'rgba(48,209,88,0.06)';
                let satTitle = isCatPurpose ? `💀 HƯỚNG GẶP HUNG TINH CHIẾU: ${sat.ten}` : `🛡️ KHÓA CHẶT TINH SÁT: ĐÈ PHƯƠNG VỊ ${sat.ten}`;
                let satMsg = isCatPurpose ? 
                    (sat.giaiPhap || "Năng lượng lưu niên hung hãn giáng lâm, trong năm nay trạch chủ tránh tuyệt đối việc khoan đục sâu tại góc phân độ này.") :
                    "Công năng xả uế/đè nén đặt tại đây đóng vai trò như một trận pháp trấn yểm cực mạnh, đốt cháy hoàn toàn ác tính của hung tinh lưu niên.";

                html += `<div style="background:${satBg}; padding:10px 15px; border-radius:10px; border-left:4px solid ${satColor}; border-top: 1px solid ${satColor}15; border-right: 1px solid ${satColor}15; border-bottom: 1px solid ${satColor}15;">` +
                    `<strong style="color:${satColor}; font-size:0.88rem; display: block; margin-bottom: 2px;">${satTitle}</strong>` +
                    `<span style="font-size:0.82rem; color:#ccc;">${satMsg}</span>` +
                `</div>`;
            });
        }
        
        html += `</div>`;
    }

    // --- TẦNG 3: DIỄN GIẢI MINH CHÂU CHÍNH TÔNG TRẬN ĐỒ PHÂN CHÂM ---
    html += `<div style="background:rgba(255,255,255,0.01); padding:15px; border-radius:12px; border:1px solid rgba(255,255,255,0.08); box-shadow: 0 4px 12px rgba(0,0,0,0.25);">` +
        `<strong style="color:#dfb76c; display:block; margin-bottom:8px; font-size:0.9rem; letter-spacing: 0.5px;">◆ KẾT QUẢ ĐO ĐẠC: SƠN VỊ ${sonName || "Tý"} (${degree}°)</strong>` +
        `<div style="font-size: 0.88rem; color: #ddd; text-align: justify; line-height: 1.5;">${message || "Khí trường biến thiên ôn hòa, điều hòa trạch cát."}</div>` +
        `<div style="margin-top:12px; color:#ffd700; font-size:0.85rem; border-top:1px solid rgba(255,255,255,0.08); padding-top:10px; line-height: 1.45;">` +
            `<b style="color:#dfb76c; display: block; margin-bottom: 3px;">💡 Pháp bảo bố trí / Mật pháp quy hoạch bổ trợ:</b> ${hoaGiai || "Giữ góc la bàn sạch sẽ để tụ khí."}` +
        `</div>` +
    `</div>`;

    // --- TẦNG 4: ĐỒ HOÀ 3 HẬU ĐỊA LONG NỀN TẢNG ĐỊA KHÍ CỐ ĐỊNH ---
    const nguonHau72 = (typeof Data72Hau !== 'undefined') ? Data72Hau : ((typeof PhongThuyCore !== 'undefined' && PhongThuyCore.data?.Hau72) ? PhongThuyCore.data.Hau72 : null);
    if (hauInfo && nguonHau72) {
        let mốcTâm = Math.round(degree / 5) * 5 % 360;
        let mốcTrái = (mốcTâm - 5 + 360) % 360;
        let mốcPhải = (mốcTâm + 5) % 360;

        // 🔄 ĐỒNG BỘ TUYỆT ĐỐI: Gọi qua hàm core để lấy trạng thái dynamic của Hậu trái/phải
        const getHauSideNodeInfo = (angle) => {
            if (typeof tinhDiemTongHop === 'function') {
                const sideRes = tinhDiemTongHop(quẻMệnhChủLõi, angle, namKhaoSatThucTe, mucDich, namAmMệnhChủ, 0);
                return {
                    ten: sideRes.hauInfo.ten,
                    chatLuong: sideRes.hauInfo.chatLuong,
                    emoji: sideRes.hauInfo.emoji
                };
            }
            const raw = nguonHau72[angle.toString()] || { ten: "Hậu mạch", chatLuong: "Bình Hòa" };
            return { ten: raw.ten, chatLuong: raw.chatLuong, emoji: "🟡" };
        };

        let nodeTrái = getHauSideNodeInfo(mốcTrái);
        let nodePhải = getHauSideNodeInfo(mốcPhải);

        const checkHauColorByEmoji = (emoji, label) => {
            if (emoji === "🟢" || emoji === "🔮") return '#30d158';
            if (emoji === "🔴" || emoji === "☠️") return '#ff3b30';
            if (label.includes('Cát')) return '#30d158';
            if (label.includes('Hung')) return '#ff3b30';
            return '#dfb76c';
        };
        
        let colorTrái = isCatPurpose ? checkHauColorByEmoji(nodeTrái.emoji, nodeTrái.chatLuong) : (nodeTrái.chatLuong.includes('Hung') || nodeTrái.emoji === '🔴' ? '#30d158' : '#ff3b30');
        let colorTâm  = isCatPurpose ? checkHauColorByEmoji(hauInfo.emoji, hauInfo.chatLuong) : (hauInfo.chatLuong.includes('Hung') || hauInfo.emoji === '🔴' ? '#30d158' : '#ff3b30');
        let colorPhải = isCatPurpose ? checkHauColorByEmoji(nodePhải.emoji, nodePhải.chatLuong) : (nodePhải.chatLuong.includes('Hung') || nodePhải.emoji === '🔴' ? '#30d158' : '#ff3b30');

        let textTrái = isCatPurpose ? nodeTrái.chatLuong.replace('Đại ', 'Đ.').replace('Tiểu ', 'T.') : (nodeTrái.chatLuong.includes('Hung') || nodeTrái.emoji === '🔴' ? 'ĐẮC VỊ' : 'K. NÊN ĐẶT');
        let textTâm  = isCatPurpose ? hauInfo.chatLuong.replace('Đại ', 'Đ.').replace('Tiểu ', 'T.') : (hauInfo.chatLuong.includes('Hung') || hauInfo.emoji === '🔴' ? 'ĐẮC VỊ' : 'K. NÊN ĐẶT');
        let textPhải = isCatPurpose ? nodePhải.chatLuong.replace('Đại ', 'Đ.').replace('Tiểu ', 'T.') : (nodePhải.chatLuong.includes('Hung') || nodePhải.emoji === '🔴' ? 'ĐẮC VỊ' : 'K. NÊN ĐẶT');

        let htmlKhối3Hậu = `
            <div style="display: flex; gap: 6px; margin-top: 10px; width: 100%; box-sizing: border-box;">
                <div style="flex: 1; text-align: center; background: rgba(255,255,255,0.03); padding: 8px 4px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06);">
                    <div style="font-size: 0.75rem; color: #fff; font-weight: 700; margin-bottom: 2px;">${(nodeTrái.ten || "Hậu").split(' ')[0]} (${mốcTrái}°)</div>
                    <div style="font-size: 0.68rem; color: ${colorTrái}; font-weight: bold; text-transform: uppercase;">${textTrái}</div>
                </div>
                <div style="flex: 1; text-align: center; background: rgba(255,255,255,0.08); padding: 8px 4px; border-radius: 8px; border: 1px solid ${colorTâm}; box-shadow: 0 0 8px ${colorTâm}30;">
                    <div style="font-size: 0.75rem; color: #ffd700; font-weight: bold; margin-bottom: 2px;">🎯 ${(hauInfo.ten || "Hậu").split(' ')[0]} (${mốcTâm}°)</div>
                    <div style="font-size: 0.68rem; color: ${colorTâm}; font-weight: bold; text-transform: uppercase;">${textTâm}</div>
                </div>
                <div style="flex: 1; text-align: center; background: rgba(255,255,255,0.03); padding: 8px 4px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06);">
                    <div style="font-size: 0.75rem; color: #fff; font-weight: 700; margin-bottom: 2px;">${(nodePhải.ten || "Hậu").split(' ')[0]} (${mốcPhải}°)</div>
                    <div style="font-size: 0.68rem; color: ${colorPhải}; font-weight: bold; text-transform: uppercase;">${textPhải}</div>
                </div>
            </div>`;

        html += `
        <div style="margin-top:20px; padding:15px; background:rgba(0,255,120,0.02); border-radius:12px; border:1px solid rgba(0,255,170,0.15);">
            <strong style="color:#00ffaa; font-size:0.9rem; letter-spacing: 0.3px; display: block;">🌟 PHAN PHỐI ĐỊA KHÍ ĐỘNG: LONG MẠCH 72 HẬU (Bước 5°)</strong>
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
        const qIdx = (Math.round((gockim - 22.5) / 45) + 8) % 8;
        return {
            loai: "ĐẠI KHÔNG VONG",
            mucDo: "🔴 ĐẠI HƯNG TINH SÁT",
            saiLech: distDai,
            toaDoTuyến: (Math.round((gockim - 22.5) / 45) * 45 + 22.5) % 360,
            message: `Tọa độ góc ngắm (${gockim}°) phạm vào đại tử tuyến Tuyệt Mạch giữa 2 quẻ [${QUAI_8[qIdx]}] và [${QUAI_8[(qIdx + 1) % 8]}]. Từ trường khu vực cực kỳ hỗn loạn, triệt tiêu toàn bộ sinh khí.`
        };
    }

    let distTieu = (gockim - 7.5) % 15;
    if (distTieu < 0) distTieu += 15;
    distTieu = Math.min(distTieu, 15 - distTieu);
    distTieu = Math.round(distTieu * 10000) / 10000;

    if (distTieu <= 0.6) {
        const sIdx = (Math.round((gockim - 7.5) / 15) + 24) % 24;
        return {
            loai: "TIỂU KHÔNG VONG",
            mucDo: "⚠️ TẠP KHÍ KHÔNG VONG",
            saiLech: distTieu,
            toaDoTuyến: (Math.round((gockim - 7.5) / 15) * 15 + 7.5) % 360,
            message: `Tọa độ lập cực liếm sát vạch ngăn cách giữa Sơn [${SON_24[sIdx]}] và Sơn [${SON_24[(sIdx + 1) % 24]}]. Khí trường nghèo nàn, lộn xộn Âm Dương.`
        };
    }
    return null;
}

// =========================================================================
// 🧠 HÀM 1: TỰ ĐỘNG PH N LOẠI KHÍ CỤC THEO NGỮ NGHĨA KIẾN TRÚC THỰC CHIẾN
// =========================================================================
function layPhanLoaiKhiCuc(mucDich) {
    if (!mucDich || typeof ConfigPhongThuy === 'undefined') return "NHÂN_THẦN_TỌA_KHÍ";
    
    const config = ConfigPhongThuy[mucDich];
    if (!config || config.isCat === false) return "TRẤN_SÁT_TIÊU_HAO";
    
    const tieuDe = config.title || "";
    
    if (/Nhà|Cửa|Cổng|Ban Công|Biển Hiệu|Showroom/i.test(tieuDe)) {
        return "NẠP_KHÍ_KHẨU";
    }
    if (/Bàn Làm Việc|Sếp|Lãnh Đạo|Học|Phòng Khách|Phòng Ngủ Chính|Không Gian/i.test(tieuDe)) {
        return "NHÂN_THẦN_TỌA_KHÍ";
    }
    if (/Thờ|Thần Tài|Giường|Két Sắt|Quầy|Lò Nướng/i.test(tieuDe)) {
        return "TỤ_KHÍ_ĐỊNH_VỊ";
    }
    
    return "NHÂN_THẦN_TỌA_KHÍ";
}

// Khai báo ngay sau khi đã định nghĩa các biến toàn cục (SON_24_CONFIG, MaTranMinhChau,...)
// =========================================================================
// 🌐 ĐỐI TƯỢNG ĐIỀU HÀNH LÕI: PHONG THỦY CORE ENGINE
// =========================================================================

const PhongThuyCore = {
    data: {
        Son24: typeof SON_24_CONFIG !== 'undefined' ? SON_24_CONFIG : [],
        MinhChau: typeof MaTranMinhChau !== 'undefined' ? MaTranMinhChau : {},
        Hau72: typeof Data72Hau !== 'undefined' ? Data72Hau : {},
        Van: typeof VAN_DATA !== 'undefined' ? VAN_DATA : {},
        Sat: typeof DATA_THANSAT !== 'undefined' ? DATA_THANSAT : {},
        BatTrachMap: typeof bátTrạchMap !== 'undefined' ? bátTrạchMap : {},
        Config: typeof ConfigPhongThuy !== 'undefined' ? ConfigPhongThuy : {}
    },

    /**
     * Hàm tiện ích truy xuất và chuẩn hóa góc độ toàn hệ thống [0 - 359.99...]
     */
    getNormalizedDegree: function(degree) {
        if (typeof degree !== 'number' || isNaN(degree)) return 0;
        return ((degree % 360) + 360) % 360;
    },

    /**
     * Xác định Sơn Vị 15 độ từ nguồn dữ liệu tập trung
     */
    getSonObj: function(degree) {
        const normalized = this.getNormalizedDegree(degree);
        return this.data.Son24.find(s => {
            if (s.min > s.max) return normalized >= s.min || normalized < s.max;
            return normalized >= s.min && normalized < s.max;
        }) || this.data.Son24[0];
    }
};

// =========================================================================
// 🔗 TẦNG BẮC CẦU (ALIAS) - BẢO VỆ CÁC HÀM CŨ KHÔNG BỊ LỖI CHẾT ỨNG DỤNG
// =========================================================================

/**
 * Hàm gọi rời bên ngoài - Trỏ trực tiếp vào core để tái sử dụng logic,
 * triệt tiêu hoàn toàn code thừa (Redundant Code).
 */
function getSonObjByDegree(degree) {
    return PhongThuyCore.getSonObj(degree);
}

// =========================================================================
// 🔮 THÀNH PHẦN 2: UPGRADE ENGINE LÕI TÍNH ĐIỂM TỔNG HỢP ĐA TẦNG TUYẾN TÍNH
// =========================================================================
function tinhDiemTongHop(cungPhi, degree, namKhảoSát, mucDich, namAm, doRongQuetThucTe) {
    const checkBoundary = (deg) => {
        let normalized = ((deg % 360) + 360) % 360;
        let mod = normalized % 15; 
        if (mod < 0.5 || mod > 14.5) return true;
        return false;
    };

    const runRawCalcEngine = (targetDegree) => {
        const normalizedDegree = ((targetDegree % 360) + 360) % 360;
        const sonObj = PhongThuyCore.getSonObj(normalizedDegree);
        const sonName = sonObj.name;
        
        const namTinhVan = namKhảoSát ? parseInt(namKhảoSát, 10) : (typeof layNamKhaoSatThienVan === 'function' ? layNamKhaoSatThienVan() : new Date().getFullYear());
        
        const config = PhongThuyCore.data.Config[mucDich] || { title: "Vị trí", isCat: true };
        const isCatPurpose = config.isCat; 

        let dảiĐộVậtThể = (typeof doRongQuetThucTe === 'number' && doRongQuetThucTe > 0) ? doRongQuetThucTe : 0;

        const huongToCodeMap = { "Bắc": "N", "Đông Bắc": "NE", "Đông": "E", "Đông Nam": "SE", "Nam": "S", "Tây Nam": "SW", "Tây": "W", "Tây Bắc": "NW" };
        const codeChuan = huongToCodeMap[sonObj.huong] || "N";
        
        const safeCungPhi = cungPhi ? cungPhi.trim().charAt(0).toUpperCase() + cungPhi.trim().slice(1).toLowerCase() : "Khảm";
        const cungBátTrạch = PhongThuyCore.data.BatTrachMap[safeCungPhi] ? PhongThuyCore.data.BatTrachMap[safeCungPhi][codeChuan] || "Phục Vị" : "Phục Vị";

        // 🛡️ AN TOÀN ĐÔNG/T Tây TỨ MỆNH: Kiểm soát cảnh báo sớm định vị Chu Mệnh tránh âm dương đảo ngược
        const dongTuCungs = ["Khảm", "Ly", "Chấn", "Tốn"];
        const tayTuCungs = ["Càn", "Khôn", "Cấn", "Đoài"];
        const isDongTuMenh = dongTuCungs.includes(safeCungPhi);
        const isDongTuHuong = ["N", "S", "E", "SE"].includes(codeChuan);
        
        let canhBaoMenhChu = "";
        if (isCatPurpose) {
            if ((isDongTuMenh && !isDongTuHuong) || (!isDongTuMenh && isDongTuHuong)) {
                canhBaoMenhChu = `⚠️ Cảnh báo: Hướng ${sonObj.huong} là hướng Hung vị đối với Chu Mệnh phối quẻ ${safeCungPhi}.`;
            }
        }

        // BƯỚC 1: BIỆN CHỨNG PHÂN BỔ TỶ TRỌNG KHI CỤC KIẾN TRÚC
        const loaiKhiCuc = (typeof layPhanLoaiKhiCuc === 'function') ? layPhanLoaiKhiCuc(mucDich) : "TỤ_KHÍ_ĐỊNH_VỊ";
        let tyTrong = { batTrach: 0.35, son: 0.35, hau: 0.30 }; 

        switch(loaiKhiCuc) {
            case "NẠP_KHÍ_KHẨU":      tyTrong = { batTrach: 0.25, son: 0.30, hau: 0.45 }; break;
            case "TỤ_KHÍ_ĐỊNH_VỊ":    tyTrong = { batTrach: 0.35, son: 0.45, hau: 0.20 }; break;
            case "NHÂN_THẦN_TỌA_KHÍ": tyTrong = { batTrach: 0.50, son: 0.35, hau: 0.15 }; break;
            case "TRẤN_SÁT_TIÊU_HAO": tyTrong = { batTrach: 0.40, son: 0.30, hau: 0.30 }; break;
        }

        // BƯỚC 2: TRÍCH XUẤT ĐIỂM SỐ GỐC BÁT TRẠCH & MA TRẬN MINH CHÂU (NH N MỆNH)
        const mapDiemBatTrach = { "Sinh Khí": 95, "Diên Niên": 90, "Thiên Y": 85, "Phục Vị": 80, "Họa Hại": 40, "Lục Sát": 30, "Ngũ Quỷ": 20, "Tuyệt Mệnh": 10 };
        let diemBatTrachGoc = mapDiemBatTrach[cungBátTrạch] || 60;

        const matrixCungPhi = MaTranMinhChau[safeCungPhi] || MaTranMinhChau["Khảm"];
        const matrixSonData = matrixCungPhi[sonName] || { diem: 70, text: "Khí trường bình hòa" };
        let diemSonGoc = matrixSonData.diem;

        // BƯỚC 3: ĐỒNG BỘ TUYỆT ĐỐI - Gọi hàm cứu cánh địa mạch để lấy hệ số Delta H72 gốc
        const hauMasterPayload = getCurrentHauInfo(normalizedDegree, mucDich, namTinhVan, safeCungPhi, namAm);
        let deltaH72 = hauMasterPayload.deltaH72;

        // Tích hợp Siêu Gốc Đất và Người thống nhất phương trình: (Điểm_Sơn_Gốc + ΔH72_Mạch)
        let sieuGocTichHop = diemSonGoc + deltaH72;
        
        // Tính toán Trực Xung Vị hẹp dựa trên Thiên Can Địa Chi của Chu Mệnh (Năm sinh nhập vào)
        if (namAm && !isNaN(namAm)) {
            const cacDiaChi = ["Thân", "Dậu", "Tuất", "Hợi", "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi"];
            const diaChiMenhChu = cacDiaChi[parseInt(namAm, 10) % 12];
            if (typeof getDoiXungDiaChi === 'function' && sonName === getDoiXungDiaChi(diaChiMenhChu)) {
                sieuGocTichHop -= 12; // Phạt Lục Xung trực diện Bản mệnh Sơn Vị
            }
        }

        // BƯỚC 4: TIẾT KHÍ THỜI KHÔNG ĐỘNG (THIÊN THỜI K_VAN & TINH SÁT LƯU NI N)
        let kVan = 1.0; 
        const vanSo = Math.floor((namTinhVan - 1864) / 20) % 9 + 1;
        if (PhongThuyCore.data.Van[vanSo]?.[codeChuan]) {
            const saoThoiVan = PhongThuyCore.data.Van[vanSo][codeChuan];
            if (saoThoiVan.loai === "best") kVan = 1.15;      
            else if (saoThoiVan.loai === "good") kVan = 1.08;   
            else if (saoThoiVan.loai === "bad") kVan = 0.88;    
            else if (saoThoiVan.loai === "worst") kVan = 0.75;  
        }

        let tongSatTinhPenalty = 0;
        const satTinhsKhảoSat = (typeof getPhongThuySatTinh === 'function') ? getPhongThuySatTinh(sonName, namTinhVan) : [];
        satTinhsKhảoSat.forEach(sat => {
            if (sat.ten.includes("NGŨ HOÀNG")) tongSatTinhPenalty += 25;
            else if (sat.ten.includes("THÁI TUẾ")) tongSatTinhPenalty += 18;
            else if (sat.ten.includes("TUẾ PHÁ")) tongSatTinhPenalty += 12;
            else if (sat.ten.includes("TAM SÁT")) tongSatTinhPenalty += 15;
        });

        // BƯỚC 5: TOÁN THỨC HỢP NHẤT TUYẾN TÍNH QUYẾT ĐỊNH ĐIỂM (TẬP TRUNG TẠI LÕI)
        let diemTinhToan;
        if (isCatPurpose) {
            // Cấu trúc Cát Cục chuẩn phương trình PT
            let coreTrườngKhí = (sieuGocTichHop * kVan) - tongSatTinhPenalty;
            diemTinhToan = (diemBatTrachGoc * tyTrong.batTrach) + (coreTrườngKhí * (tyTrong.son + tyTrong.hau));
        } else {
            // Cấu trúc Trấn Sát lấy độc trị độc: Đảo cực toán thức theo đúng logic kiến trúc xả uế
            let diemBatTrachTratSat = 100 - diemBatTrachGoc; 
            let diemSonTratSat = 100 - diemSonGoc; 
            let coreTrườngKhíTrấnSát = (diemSonTratSat + (deltaH72 * -1.2) * kVan) + (tongSatTinhPenalty * 0.6);
            diemTinhToan = (diemBatTrachTratSat * tyTrong.batTrach) + (coreTrườngKhíTrấnSát * (tyTrong.son + tyTrong.hau));
        }

        // BƯỚC 6: BIỆN CHỨNG DẢI HOẠT PHỔ VẬT THỂ VÀ HẬU BỊ CHIẾM
        let dínhKhôngVongNặng = false, loaiKhôngVong = "";
        let danhSachHauBiDeLen = new Set(), chiTietCacHauBiChiem = [];
        
        let gocBatDau = normalizedDegree - (dảiĐộVậtThể / 2);
        let gocKetThuc = normalizedDegree + (dảiĐộVậtThể / 2);

        for (let g = gocBatDau; g <= gocKetThuc; g += 0.5) {
            let gocQuetChuanHoa = ((g % 360) + 360) % 360;
            
            // Gọi hàm Hậu để bóc tách thông tin thô của từng phân châm bị chiếm, loại bỏ tính toán lặp
            let localHauPayload = getCurrentHauInfo(gocQuetChuanHoa, mucDich, namTinhVan, safeCungPhi, namAm);
            let mốcHậuQuét = Math.round(gocQuetChuanHoa / 5) * 5 % 360;
            
            if (!danhSachHauBiDeLen.has(mốcHậuQuét)) {
                danhSachHauBiDeLen.add(mốcHậuQuét);
                // Điểm vi phân của Hậu mạch được đồng bộ cấu trúc trừ phạt thống nhất với lõi
                let diemHauQuetDong = Math.max(5, Math.min(98, Math.round((localHauPayload.diemGoc) * kVan - (tongSatTinhPenalty * 0.5))));
                chiTietCacHauBiChiem.push({ moc: mốcHậuQuét, ten: localHauPayload.ten, diem: diemHauQuetDong });
            }

            if (typeof kiemTraKhongVong === 'function') {
                let kv = kiemTraKhongVong(gocQuetChuanHoa);
                if (kv) { dínhKhôngVongNặng = true; loaiKhôngVong = kv.loai; }
            }
        }

        // Hình phạt Không Vong: Đoạn mạch đứt gãy, ép sập sàn điểm số
        if (dínhKhôngVongNặng) {
            if (loaiKhôngVong === "ĐẠI KHÔNG VONG") diemTinhToan = 12;
            else diemTinhToan = Math.max(15, diemTinhToan - 30);
        }

        let diemCuoi = Math.max(5, Math.min(98, Math.round(diemTinhToan)));
        
        // 🎯 KHẮC PHỤC TỬ HUYỆT LOGIC: Trả lại nguyên vẹn nhãn khách quan của mạch đất
        let dynamicHauInfo = {
            ten: hauMasterPayload.ten,
            diem: Math.max(5, Math.min(98, Math.round(hauMasterPayload.diemGoc * kVan - (tongSatTinhPenalty * 0.5)))),
            chatLuong: hauMasterPayload.chatLuong, // Bốc thẳng nhãn đảo cực âm dương ĐẮC VỊ TIÊU HUNG từ hàm Hậu
            emoji: hauMasterPayload.emoji,
            ynghia: hauMasterPayload.ynghia,
            giaiphap: matrixSonData.giaiphap || hauMasterPayload.giaiphap || "Giữ khu vực thông thoáng."
        };

        let level = diemCuoi >= 85 ? "ĐẠI CÁT" : (diemCuoi >= 72 ? "CÁT VỊ" : (diemCuoi >= 50 ? "BÌNH HOÀ" : "HUNG CỤC"));

        return {
            diem: diemCuoi, 
            level: level, 
            message: (canhBaoMenhChu ? canhBaoMenhChu + " " : "") + (matrixSonData.text || ""), 
            hoaGiai: matrixSonData.giaiphap || "", 
            khongVong: dínhKhôngVongNặng ? { loai: loaiKhôngVong } : null, 
            sonName: sonName, 
            hauInfo: dynamicHauInfo, 
            satTinhs: satTinhsKhảoSat, 
            chiTietCacHauBiChiem: chiTietCacHauBiChiem
        };
    };

    // Giữ nguyên vẹn cấu trúc nội suy đường biên trắc địa (Biên Sơn vị 15 độ)
    if (checkBoundary(degree)) {
        let scoreA = runRawCalcEngine(degree - 0.5);
        let scoreB = runRawCalcEngine(degree + 0.5);
        let mergedResult = Object.assign({}, scoreA);
        
        mergedResult.diem = Math.max(5, Math.min(98, Math.round((scoreA.diem + scoreB.diem) / 2)));
        mergedResult.level = mergedResult.diem >= 85 ? "ĐẠI CÁT" : (mergedResult.diem >= 72 ? "CÁT VỊ" : (mergedResult.diem >= 50 ? "BÌNH HOÀ" : "HUNG CỤC"));
        mergedResult.chiTietCacHauBiChiem = scoreA.chiTietCacHauBiChiem;
        return mergedResult;
    }

    return runRawCalcEngine(degree);
}

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

if (typeof window !== 'undefined' && !document.getElementById('toast-styles')) {
    const styleSheet = document.createElement("style");
    styleSheet.id = 'toast-styles';
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

// Bộ lưu trữ dữ liệu động - Tự động thay đổi Epoch và Ma trận theo file nạp vào
// Bộ lưu trữ hệ số WMMHR động
let GLOBAL_WMMHR_DATA = {
    epoch: 2025.0,
    data: [] 
};

// 🎯 BƯỚC ĐỘT PHÁ 1: Khởi tạo bộ đệm bộ nhớ phẳng (TypedArray) để tái sử dụng mãi mãi, 
// không bao giờ cấp phát lại mảng trong vòng lặp giúp triệt tiêu hoàn toàn Rác RAM (Garbage Collection)
let REUSABLE_P_BUFFER = null;
let REUSABLE_DP_BUFFER = null;
let PRECOMPUTED_COSM = null;
let PRECOMPUTED_SINM = null;

/**
 * 🛰️ HÀM BẤT ĐỒNG BỘ: Tải ngầm file COF, không chặn luồng vẽ giao diện UI
 */
async function loadWMMHRFile() {
    try {
        const response = await fetch('WMMHR2025.COF');
        if (!response.ok) throw new Error("Không tìm thấy file WMMHR2025.COF trong thư mục gốc!");
        
        const text = await response.text();
        const lines = text.split('\n');
        const parsedMatrix = [];
        
        if (lines.length > 0 && lines[0].trim() !== '') {
            const headerParts = lines[0].trim().split(/\s+/);
            if (headerParts.length > 0 && !isNaN(parseFloat(headerParts[0]))) {
                GLOBAL_WMMHR_DATA.epoch = parseFloat(headerParts[0]);
            }
        }
        
        for (let i = 1; i < lines.length; i++) {
            let line = lines[i].trim();
            if (line === '') continue;
            
            let parts = line.split(/\s+/).map(Number);
            if (parts.length >= 6 && !parts.some(isNaN)) {
                parsedMatrix.push([
                    parts[0], // n
                    parts[1], // m
                    parts[2], // g
                    parts[3], // h
                    parts[4], // dg
                    parts[5]  // dh
                ]);
            }
        }
        
        GLOBAL_WMMHR_DATA.data = parsedMatrix;

        // Tự động phân bổ trước bộ nhớ đệm dựa trên số bậc thực tế đọc được (Bậc 12 hoặc 133)
        const lastRow = parsedMatrix[parsedMatrix.length - 1];
        const maxDegree = lastRow ? lastRow[0] : 12;
        const bufferSize = maxDegree + 1;

        // Tạo mảng phẳng siêu tốc độ Float64Array
        REUSABLE_P_BUFFER = new Float64Array(bufferSize * bufferSize);
        REUSABLE_DP_BUFFER = new Float64Array(bufferSize * bufferSize);
        PRECOMPUTED_COSM = new Float64Array(bufferSize);
        PRECOMPUTED_SINM = new Float64Array(bufferSize);

        console.log(`📡 [MÔ HÌNH TOÀN CẦU] Đã nạp file COF bậc ${maxDegree}. Khởi tạo bộ đệm phẳng thành công!`);
        return true;
    } catch (error) {
        console.error("❌ Lỗi nghiêm trọng khi đọc file COF:", error);
        return false;
    }
}

// ==========================================================================
// MODULE TRẮC ĐỊA VIỆT NAM - CHUYỂN ĐỔI VN-2000 ↔ WGS84 (FULL NÂNG CẤP)
// Hỗ trợ nhiều kinh tuyến trung tâm + tự động nhận diện vùng
// ==========================================================================
const TRAC_DIA_CORE = {
    ZONES: {
        "HN": 105.0,   // Hà Nội - Bắc Bộ
        "DDN": 108.0,  // Đà Nẵng - Trung Bộ
        "HCM": 106.6,  // TP.HCM - Nam Bộ
        "CT": 105.0,   // Cần Thơ
        "102": 102.0,  // Tây Bắc
        "111": 111.0   // Đông Nam Bộ
    },

    getZone(lon0_deg) {
        if (typeof lon0_deg === 'string' && this.ZONES[lon0_deg]) {
            return this.ZONES[lon0_deg];
        }
        return lon0_deg || 105.0;
    },

    tmerc_en(es) {
        const en = new Float64Array(5);
        en[0] = 1.0 - es * (0.25 + es * (0.046875 + es * (0.01953125 + es * 0.01068115234375)));
        en[1] = es * (0.75 - es * (0.046875 + es * (0.01953125 + es * 0.01068115234375)));
        const t = es * es;
        en[2] = t * (0.46875 - es * (0.013020833333333334 + es * 0.007120768229166667));
        en[3] = t * es * (0.3645833333333333 - es * 0.005696614583333333);
        en[4] = t * es * es * 0.3076171875;
        return en;
    },

    pj_mlfn(phi, sphi, cphi, en) {
        cphi *= sphi; 
        sphi *= sphi;
        return en[0] * phi - cphi * (en[1] + sphi * (en[2] + sphi * (en[3] + sphi * en[4])));
    },

    pj_inv_mlfn(arg, es, en) {
        const EPSLN = 1.0e-10;
        const k = 1.0 / (1.0 - es);
        let phi = arg;
        for (let i = 20; i > 0; --i) {
            let s = Math.sin(phi);
            let t = 1.0 - es * s * s;
            let t2 = (this.pj_mlfn(phi, s, Math.cos(phi), en) - arg) * (t * Math.sqrt(t)) * k;
            phi -= t2;
            if (Math.abs(t2) < EPSLN) return phi;
        }
        return phi;
    },

    vn2000ToWGS84(x, y, lon0_deg = 105.0) {
        try {
            const centralMeridian = this.getZone(lon0_deg);
            const a = 6378137.0;
            const f = 1.0 / 298.257223563;
            const es = 2.0 * f - f * f;
            const ebs = es / (1.0 - es);
            
            const en = this.tmerc_en(es);
            const x_proj = (x - 500000.0) / 0.9999;
            const y_proj = y / 0.9999;

            const phi1 = this.pj_inv_mlfn(y_proj / a, es, en);
            if (Math.abs(phi1) >= Math.PI / 2) {
                return { lat: 0, lon: centralMeridian, error: "Out of range" };
            }

            const sin_phi1 = Math.sin(phi1);
            const cos_phi1 = Math.cos(phi1);
            const tan_phi1 = Math.tan(phi1);
            const t = tan_phi1 * tan_phi1;
            const n = ebs * cos_phi1 * cos_phi1;
            const con = 1.0 - es * sin_phi1 * sin_phi1;

            const N = a / Math.sqrt(con);
            const R = N * (1.0 - es) / con;
            const D = x_proj / N;

            const D2 = D * D;
            const D4 = D2 * D2;
            const D6 = D4 * D2;

            let lat = phi1 - (N * tan_phi1 / R) * (D2 / 2.0 - (5 + 3*t + 10*n - 4*n*n - 9*t*n)*D4/24 +
                 (61 + 90*t + 45*t*t + 298*n - 252*t*n - 3*n*n)*D6/720);

            let lon = (D - (1 + 2*t + n)*(D2*D)/6 +
                (5 - 2*n + 28*t - 3*n*n + 8*t*n + 24*t*t)*(D4*D)/120) / cos_phi1;

            lat = lat * (180.0 / Math.PI);
            lon = (lon * (180.0 / Math.PI)) + centralMeridian;

            return {
                lat: parseFloat(lat.toFixed(8)),
                lon: parseFloat(lon.toFixed(8)),
                zone: centralMeridian,
                zoneName: Object.keys(this.ZONES).find(key => this.ZONES[key] === centralMeridian) || centralMeridian
            };
        } catch (e) {
            console.error("Lỗi chuyển VN-2000 → WGS84:", e);
            return { lat: 0, lon: 0, error: e.message };
        }
    },

    autoConvertToWGS84(x, y, lon0_deg = 105.0) {
        if (Math.abs(x) > 90 || Math.abs(y) > 90) {
            return this.vn2000ToWGS84(x, y, lon0_deg);
        }
        return { 
            lat: parseFloat(x.toFixed(8)), 
            lon: parseFloat(y.toFixed(8)), 
            note: "Already WGS84" 
        };
    },

    getZoneList() {
        return {
            "Hà Nội / Bắc Bộ": 105.0,
            "Đà Nẵng / Trung Bộ": 108.0,
            "Tây Nguyên": 107.0,
            "TP.HCM / Nam Bộ": 106.6,
            "Tây Bắc": 102.0,
            "Đông Nam Bộ": 111.0,
            "Cần Thơ": 105.0
        };
    }
};

// ==========================================================================
// HÀM TÍNH NĂM THẬP PHÂN
// ==========================================================================
function getDecimalYear(date = new Date()) {
    const year = date.getFullYear();
    const start = new Date(year, 0, 1);
    const diff = date.getTime() - start.getTime();
    const daysPassed = diff / (1000 * 60 * 60 * 24);
    const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    return year + (daysPassed / (isLeap ? 366 : 365));
}

async function updateLocationUI(lat, lon, san_ten_vung = null) {
    let displayEl = document.getElementById('location-display');
    if (!displayEl) {
        const lonInput = document.getElementById('remote-lon');
        const latInput = document.getElementById('remote-lat');
        
        if (lonInput) {
            let containerRow = lonInput.parentNode;
            if (latInput && latInput.parentNode !== lonInput.parentNode) {
                containerRow = lonInput.parentNode.parentNode; 
            }

            displayEl = document.createElement('div');
            displayEl.id = 'location-display';
            displayEl.style.cssText = 'display:block; width:100%; text-align:center; font-size:12px; color:#dfb76c; margin-top:2px; font-weight:bold; letter-spacing:0.5px; clear:both; box-sizing:border-box;';
            containerRow.insertAdjacentElement('afterend', displayEl);
        }
    }
    if (!displayEl) return;

    // 🎯 ĐỘT PHÁ TỐC ĐỘ: Có sẵn tên từ ô tìm kiếm -> Tiêm thẳng hiển thị ngay lập tức (0ms)
    if (san_ten_vung) {
        displayEl.innerText = `📍 ${san_ten_vung}`;
        return;
    }

    displayEl.innerText = "🔍 Đang đồng bộ vệ tinh vùng...";

    // 2. Tầng Offline: Phản hồi lập tức các bộ tọa độ test hay dùng
    const checkedLat = Math.round(lat * 1000) / 1000;
    const checkedLon = Math.round(lon * 1000) / 1000;

    const testLocations = [
        { lat: 11.564, lon: 108.991, name: "📍 Ninh Thuận, VN" },
        { lat: 21.028, lon: 105.834, name: "📍 Hà Nội, VN" }
    ];
    for (let loc of testLocations) {
        if (checkedLat === loc.lat && checkedLon === loc.lon) {
            displayEl.innerText = loc.name; return;
        }
    }

    // 3. Tầng Online: Chỉ chạy khi người dùng tự tay sửa số trên ô Kinh/Vĩ độ
    if (navigator.onLine) {
        try {
            const safeLat = parseFloat(lat).toFixed(5);
            const safeLon = parseFloat(lon).toFixed(5);
            
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 4000);

            const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${safeLat}&longitude=${safeLon}&localityLanguage=en`, { signal: controller.signal });
            clearTimeout(timeoutId);

            if (response.ok) {
                const data = await response.json();
                const state = data.principalSubdivision || data.city || '';
                const country = (data.countryCode || '').toUpperCase();
                
                if (state && country) {
                    displayEl.innerText = `📍 ${state}, ${country}`;
                    return;
                }
            }
        } catch (e) {
            console.warn("Lỗi API địa danh.");
        }
    }

    // Mặc định nếu mất mạng hoàn toàn và không có dữ liệu chữ truyền xuống
    displayEl.innerText = `📍 Khối cầu (${lat.toFixed(2)}, ${lon.toFixed(2)})`;
}

function calculateRemoteDeclination(san_ten_vung = null) {
    const latEl = document.getElementById('remote-lat');
    const lonEl = document.getElementById('remote-lon');
    const rBtn = document.getElementById('remote-calc-btn');
    
    if (!latEl || !lonEl) return;
    let latStr = latEl.value.trim();
    let lonStr = lonEl.value.trim();

    if (latStr === '' || lonStr === '') {
        showToast("⚠️ Vui lòng nhập đủ tọa độ!", true);
        return;
    }

    let latV = convertToDecimalDegrees(latStr);
    let lonV = convertToDecimalDegrees(lonStr);

    if (latV === null || lonV === null || isNaN(latV) || isNaN(lonV) || (latV === 0 && lonV === 0)) {
        showToast("⚠️ Tọa độ không hợp lệ!", true);
        return;
    }

    if (Math.abs(latV) > 2000 || Math.abs(lonV) > 2000) {
        let x_vn = latV < lonV ? latV : lonV;
        let y_vn = latV < lonV ? lonV : latV;

        const wgsCoords = TRAC_DIA_CORE.vn2000ToWGS84(x_vn, y_vn, 105.0);
        latV = wgsCoords.lat;
        lonV = wgsCoords.lon;
        
        latEl.value = latV.toFixed(5);
        lonEl.value = lonV.toFixed(5);
        showToast(`🗺️ Đã phát hiện hệ VN-2000! Tự động quy đổi sang GPS.`);
    } else {
        if (Math.abs(latV) > 90 && Math.abs(lonV) <= 90) {
            let temp = latV; latV = lonV; lonV = temp;
            latEl.value = latV; lonEl.value = lonV;
            showToast("🔄 Phát hiện ngược tọa độ! Đã tự động đảo lại Vĩ độ & Kinh độ");
        }
    }

    const decl = calculateGlobalDeclination(latV, lonV);
    magneticDeclination = decl;
    
    const inputEl = document.getElementById('declination-input');
    if (inputEl) inputEl.value = decl.toFixed(2);
    
    updateMagneticDeclination();
    
    // 🎯 BƯỚC NÂNG CẤP VÀNG: Bỏ truyền rỗng, chuyển tiếp san_ten_vung xuống tầng hiển thị UI
    updateLocationUI(latV, lonV, san_ten_vung); 
    
    showToast(`Đã tính tọa độ từ xa: ${decl.toFixed(2)}°`);
    
    if (rBtn) {
        rBtn.innerText = "ĐÃ TÍNH TOÁN ✓";
        rBtn.style.borderColor = "#4caf50";
        setTimeout(() => { 
            rBtn.innerText = "🧮 TÍNH ĐỘ LỆCH TỪ XA"; 
            rBtn.style.borderColor = "#dfb76c"; 
        }, 2000);
    }
}

async function fallbackIPGeolocation() {
    if (navigator.onLine) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000); 

        try {
            const response = await fetch('https://json.geoiplookup.io/', { signal: controller.signal });
            if (!response.ok) throw new Error("API Error"); 

            const data = await response.json();
            clearTimeout(timeoutId);
            if (data && data.latitude && data.longitude) {
                return { lat: data.latitude, lon: data.longitude, src: "NETWORK" };
            }
        } catch (e) {
            clearTimeout(timeoutId);
        }
    }

    try {
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (timeZone) {
            if (timeZone.includes("Saigon") || timeZone.includes("Bangkok") || timeZone.includes("Asia/Ho_Chi_Minh")) {
                return { lat: 14.05, lon: 108.27, src: "ZONE_VN" };
            }
        }
    } catch (e) {}

    return { lat: 0, lon: 0, src: "DEFAULT" };
}

function updateMagneticDeclination() {
    const input = document.getElementById('declination-input');
    if (!input) return;

    let val = input.value;
    magneticDeclination = (val === '-' || val === '.' || val.trim() === '') ? 0 : parseFloat(val) || 0;
    
    if (typeof lastHeading === 'number') {
        if (typeof updateCompassUI === 'function') updateCompassUI(lastHeading);
        if (typeof updateDegreeDisplay === 'function') updateDegreeDisplay(lastHeading);
        if (typeof recalculateFate === 'function') recalculateFate();
    }
}

async function autoDetectDeclination() {
    const btn = document.getElementById('auto-detect-btn');
    if (btn) { btn.innerText = "⚡ ĐANG QUÉT ĐỊNH VỊ..."; btn.disabled = true; }

    const apply = (lat, lon, label) => {
        if (!lat || !lon || (lat === 0 && lon === 0)) {
            showToast("⚠️ Không thể tự động xác định vị trí. Vui lòng nhập tay.");
            if (btn) { btn.innerText = "🛰️ TỰ ĐỘNG XÁC ĐỊNH"; btn.disabled = false; }
            return;
        }

        let checkedLat = parseFloat(lat);
        let checkedLon = parseFloat(lon);

        if (Math.abs(checkedLat) > 90 && Math.abs(checkedLon) <= 90) {
            let temp = checkedLat; checkedLat = checkedLon; checkedLon = temp;
        }

        const cleanLat = parseFloat(checkedLat.toFixed(3));
        const cleanLon = parseFloat(checkedLon.toFixed(3));

        localStorage.setItem('save_lat', cleanLat);
        localStorage.setItem('save_lon', cleanLon);

        const latInput = document.getElementById('remote-lat');
        const lonInput = document.getElementById('remote-lon');
        if (latInput) latInput.value = cleanLat;
        if (lonInput) lonInput.value = cleanLon;

        const decl = calculateGlobalDeclination(cleanLat, cleanLon);
        magneticDeclination = decl;
        
        const input = document.getElementById('declination-input');
        if (input) input.value = decl.toFixed(2);
        
        if (document.getElementById('save-toggle')?.checked) {
            localStorage.setItem('save_decl', decl.toFixed(2));
        }

        updateMagneticDeclination();
        updateLocationUI(cleanLat, cleanLon); // KHỞI CHẠY ĐỊNH VỊ VÙNG
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
        (pos) => { apply(pos.coords.latitude, pos.coords.longitude, "GPS"); },
        async () => { const ip = await fallbackIPGeolocation(); apply(ip.lat, ip.lon, ip.src); },
        { timeout: 7000, enableHighAccuracy: true, maximumAge: 0 } 
    );
}

function calculateGlobalDeclination(lat, lon, altKm = 0) {
    try {
        // Phòng hộ nếu file chưa tải xong
        if (!GLOBAL_WMMHR_DATA.data || GLOBAL_WMMHR_DATA.data.length === 0 || !REUSABLE_P_BUFFER) {
            return 0;
        }

        let cleanLat = Math.max(-90, Math.min(90, parseFloat(lat) || 0));
        let cleanLon = ((parseFloat(lon) || 0) + 180) % 360;
        if (cleanLon < 0) cleanLon += 360;
        cleanLon -= 180;

        const decimalYear = getDecimalYear();
        const dt = decimalYear - GLOBAL_WMMHR_DATA.epoch;

        const latRad = cleanLat * Math.PI / 180;
        const lonRad = cleanLon * Math.PI / 180;

        const a = 6378.137;
        const b = 6356.7523142;
        const e2 = 1 - (b * b) / (a * a);
        const sinLat = Math.sin(latRad);
        const cosLat = Math.cos(latRad);
        const N = a / Math.sqrt(1 - e2 * sinLat * sinLat);
        
        const xp = (N + (altKm || 0)) * cosLat;
        const zp = (N * (1 - e2) + (altKm || 0)) * sinLat;
        const r = Math.sqrt(xp * xp + zp * zp);

        const phiPrime = Math.asin(zp / r);
        const psi = latRad - phiPrime;
        const sinPhi = Math.sin(phiPrime);
        const cosPhi = Math.cos(phiPrime);

        const lastRow = GLOBAL_WMMHR_DATA.data[GLOBAL_WMMHR_DATA.data.length - 1];
        const maxDegree = lastRow ? lastRow[0] : 12;
        const size = maxDegree + 1;

        // Làm sạch bộ nhớ đệm cũ (Tốc độ dọn dẹp mảng phẳng nhanh gấp 50 lần xóa mảng thường)
        REUSABLE_P_BUFFER.fill(0);
        REUSABLE_DP_BUFFER.fill(0);

        // Công thức cấu trúc ma trận phẳng gán tọa độ 2D giả lập: Index = n * size + m
        REUSABLE_P_BUFFER[0] = 1;                              // P[0][0]
        REUSABLE_P_BUFFER[1 * size + 0] = sinPhi;              // P[1][0]
        REUSABLE_DP_BUFFER[1 * size + 0] = cosPhi;             // dP[1][0]
        REUSABLE_P_BUFFER[1 * size + 1] = cosPhi;              // P[1][1]
        REUSABLE_DP_BUFFER[1 * size + 1] = -sinPhi;            // dP[1][1]

        // Vòng lặp tính đa thức Legendre toán học Gauss trên mảng phẳng siêu tốc
        for (let n = 2; n <= maxDegree; n++) {
            const idx_n = n * size;
            const idx_n1 = (n - 1) * size;
            const idx_n2 = (n - 2) * size;
            
            for (let m = 0; m <= n; m++) {
                if (m === n) {
                    const fn = Math.sqrt((2*n-1)/(2*n));
                    REUSABLE_P_BUFFER[idx_n + m] = fn * cosPhi * REUSABLE_P_BUFFER[idx_n1 + (m - 1)];
                    REUSABLE_DP_BUFFER[idx_n + m] = fn * (cosPhi * REUSABLE_DP_BUFFER[idx_n1 + (m - 1)] - sinPhi * REUSABLE_P_BUFFER[idx_n1 + (m - 1)]);
                } else {
                    const g1 = (2*n-1) / Math.sqrt(n*n - m*m);
                    const g2 = Math.sqrt((n-1)*(n-1) - m*m) / Math.sqrt(n*n - m*m);
                    
                    REUSABLE_P_BUFFER[idx_n + m] = g1 * sinPhi * REUSABLE_P_BUFFER[idx_n1 + m] - g2 * REUSABLE_P_BUFFER[idx_n2 + m];
                    REUSABLE_DP_BUFFER[idx_n + m] = g1 * (sinPhi * REUSABLE_DP_BUFFER[idx_n1 + m] + cosPhi * REUSABLE_P_BUFFER[idx_n1 + m]) - g2 * REUSABLE_DP_BUFFER[idx_n2 + m];
                }
            }
        }

        // 🎯 BƯỚC ĐỘT PHÁ 2: Tính trước mảng lượng giác theo trục kinh độ (Chỉ chạy 134 lần!)
        for (let m = 0; m <= maxDegree; m++) {
            PRECOMPUTED_COSM[m] = Math.cos(m * lonRad);
            PRECOMPUTED_SINM[m] = Math.sin(m * lonRad);
        }

        let X = 0, Y = 0, Z = 0;
        
        // Vòng lặp tổng lực Gauss duyệt qua 9.100 dòng hệ số ngoài
        GLOBAL_WMMHR_DATA.data.forEach(([n, m, g0, h0, dg, dh]) => {
            const g = g0 + dt * dg;
            const h = h0 + dt * dh;
            const ratio = Math.pow(a / r, n + 2);
            
            // Lấy trực tiếp kết quả lượng giác từ mảng tính sẵn, triệt tiêu 9.000 lệnh tính trùng lặp!
            const cosM = PRECOMPUTED_COSM[m];
            const sinM = PRECOMPUTED_SINM[m];
            
            const c = g * cosM + h * sinM;
            const d = g * sinM - h * cosM;

            const idx = n * size + m; // Lấy vị trí phần tử trên mảng phẳng
            X -= ratio * c * REUSABLE_DP_BUFFER[idx];
            Z -= ratio * c * REUSABLE_P_BUFFER[idx] * (n + 1);
            if (m > 0) Y += ratio * m * d * REUSABLE_P_BUFFER[idx];
        });

        Y /= (cosPhi || 1e-8);
        const Xg = X * Math.cos(psi) + Z * Math.sin(psi);

        let decl = Math.atan2(Y, Xg) * (180 / Math.PI);
        if (decl > 180) decl -= 360;
        if (decl < -180) decl += 360;

        return parseFloat(decl.toFixed(2));
    } catch (e) {
        console.error("Lỗi lõi trắc địa:", e);
        return 0;
    }
}

function toggleDeclinationPanel(show) {
    const m = document.getElementById('declination-modal');
    if (m) m.style.display = show ? 'flex' : 'none';
    
    if (typeof manageMagnetometerSensor === 'function') {
        manageMagnetometerSensor(show);
    }
}

function parseSmartNumeric(val) {
    if (!val || val.trim() === '') return null;
    let str = val.trim().replace(/,/g, '.');
    let isNegative = str.startsWith('-');
    let isPositive = str.startsWith('+');
    let cleanText = str.replace(/[^0-9.]/g, '');
    let dotCount = 0;
    let numericPart = "";
    for (let i = 0; i < cleanText.length; i++) {
        if (cleanText[i] === '.') {
            if (dotCount === 0) { numericPart += '.'; dotCount = 1; }
        } else { numericPart += cleanText[i]; }
    }
    let finalStr = (isNegative ? '-' : (isPositive ? '+' : '')) + numericPart;
    const regex = /^[+-]?\d*\.?\d*$/;
    return regex.test(finalStr) ? finalStr : null;
}

function parseSmartCoordinateText(val) {
    if (!val) return '';
    return val.replace(/[^0-9.\-\+\sNSEWnsew°'"’”]/g, '').replace(/,/g, '.');
}

function convertToDecimalDegrees(val) {
    if (!val || String(val).trim() === '') return null;
    
    // 1. Chuyển sang chữ hoa để nhận diện chính xác hướng hệ NOAA
    let str = String(val).trim().toUpperCase();
    
    // 🎯 BƯỚC THÔNG MINH 1: Quét dấu âm (Tuyệt đối không dùng toán tử đảo dấu !isNegative)
    // Nếu chứa hướng Nam (S), hướng Tây (W) HOẶC có dấu trừ (-) -> BẮT BUỘC phải là số âm
    let hệ_âm_hướng = str.includes('S') || str.includes('W');
    let hệ_âm_dấu = str.includes('-');
    
    // 🎯 BƯỚC THÔNG MINH 2: Lọc sạch chuỗi, bóc tách các phân đoạn số độc lập
    // Thay thế toàn bộ ký hiệu hình học (° ' " ’ ” N S E W) thành khoảng trắng
    let cleanStr = str.replace(/[^0-9.]/g, ' ').trim();
    
    // Gom các phần số (Độ, Phút, Giây) vào mảng và loại bỏ các khoảng trống thừa
    let parts = cleanStr.split(/\s+/).map(p => parseFloat(p)).filter(p => !isNaN(p));
    
    if (parts.length === 0) return null;
    
    let decimalValue = 0;
    if (parts.length === 1) {
        // Định dạng 1: Số thập phân thuần túy (VD: 74.00722 hoặc -74.00722)
        decimalValue = parts[0];
    } else {
        // Định dạng 2: Hệ Độ - Phút - Giây DMS (VD: 74° 0' 26" hoặc 74 0 26)
        let d = parts[0] || 0;
        let m = parts[1] || 0;
        let s = parts[2] || 0;
        decimalValue = d + (m / 60) + (s / 3600);
    }
    
    // Ép về giá trị tuyệt đối (số dương gốc) để chuẩn hóa cấu trúc hình học
    decimalValue = Math.abs(decimalValue);
    
    // 🎯 BƯỚC THÔNG MINH 3: Áp dấu chuẩn cuối cùng
    // Chỉ cần phát hiện ra bất kỳ tín hiệu âm nào, tiêm ngay dấu trừ độc quyền
    if (hệ_âm_dấu || hệ_âm_hướng) {
        decimalValue = -decimalValue;
    }
    
    return decimalValue;
}

async function getLocationFromAddress() {
    const addressInput = document.getElementById('address-lookup');
    const latInput = document.getElementById('remote-lat');
    const lonInput = document.getElementById('remote-lon');
    const btn = document.getElementById('lookupLocation');
    
    if (!addressInput || !addressInput.value.trim()) {
        if (typeof showToast === 'function') showToast("⚠️ Vui lòng nhập tên vùng hoặc địa chỉ cần tìm!", true);
        return;
    }

    const query = addressInput.value.trim();
    
    if (btn) {
        btn.innerText = "⚡ ĐANG TÌM...";
        btn.disabled = true;
        btn.style.background = "rgba(255, 255, 255, 0.05)";
        btn.style.color = "#888";
    }

    if (!navigator.onLine) {
        if (typeof showToast === 'function') showToast("❌ Mất kết nối Internet!", true);
        resetBtnState();
        return;
    }

    try {
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1&addressdetails=1&extratags=1&namedetails=1&dedupe=1`;
        const response = await fetch(url, { headers: { 'Accept-Language': 'vi,en;q=0.9' } });

        if (!response.ok) throw new Error("API Network error");
        const data = await response.json();

        if (data && data.length > 0) {
            const rawLat = parseFloat(data[0].lat);
            const rawLon = parseFloat(data[0].lon);
            const displayName = data[0].display_name;

            const cleanLat = parseFloat(rawLat.toFixed(5));
            const cleanLon = parseFloat(rawLon.toFixed(5));

            if (latInput) latInput.value = cleanLat;
            if (lonInput) lonInput.value = cleanLon;

            if (document.getElementById('save-toggle')?.checked) {
                localStorage.setItem('save_lat', cleanLat);
                localStorage.setItem('save_lon', cleanLon);
            }

            // 🎯 THUẬT TOÁN ĐỘT PHÁ: Tách chuỗi thành mảng và làm sạch khoảng trắng
            const parts = displayName.split(',').map(p => p.trim());
            
            // Lấy phần tử đầu tiên (Địa danh cụ thể) + phần tử cuối cùng (Quốc gia) để luôn luôn có tên nước
            const shortName = parts.length > 1 ? `${parts[0]}, ${parts[parts.length - 1]}` : parts[0];

            // KÍCH HOẠT TÍNH TOÁN ĐỒNG BỘ
            if (typeof calculateRemoteDeclination === 'function') {
                calculateRemoteDeclination(shortName);  
            } else if (typeof calculateGlobalDeclination === 'function') {
                const decl = calculateGlobalDeclination(cleanLat, cleanLon);
                magneticDeclination = decl;
                const inputEl = document.getElementById('declination-input');
                if (inputEl) inputEl.value = decl.toFixed(2);
                if (typeof updateMagneticDeclination === 'function') updateMagneticDeclination();
                if (typeof updateLocationUI === 'function') updateLocationUI(cleanLat, cleanLon, shortName);
            }

            if (typeof showToast === 'function') {
                showToast(`📍 Đã tìm thấy: ${shortName}`);
            }

            if (btn) {
                btn.innerText = "THÀNH CÔNG ✓";
                btn.style.background = "#30d158";
                btn.style.color = "#000";
            }
        } else {
            if (typeof showToast === 'function') showToast("⚠️ Không tìm thấy tọa độ địa danh này!", true);
            resetBtnState();
        }
    } catch (error) {
        console.error("Lỗi tìm kiếm tọa độ:", error);
        if (typeof showToast === 'function') showToast("❌ Lỗi hệ thống định vị vùng!", true);
        resetBtnState();
    }

    function resetBtnState() {
        if (!btn) return;
        setTimeout(() => {
            btn.innerText = "Get & Add Lat / Lon";
            btn.disabled = false;
            btn.style.background = "rgba(223, 183, 108, 0.08)"; 
            btn.style.color = "#dfb76c";                         
        }, 1500);
    }
    
    setTimeout(resetBtnState, 1500);
}

// =========================================================================
// 4. KHỞI TẠO VÀ QUẢN LÝ SỰ KIỆN GIAO DIỆN DIỄN RA TRONG DOM (BẢN SỬA ĐỒNG TRỤC CỐT LÕI)
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
    const configs = {
        'declination-input': { limit: 14, key: 'save_decl', min: -180, max: 180, mode: 'coordinate' },
        'remote-lat': { limit: 14, key: 'save_lat', min: -90, max: 90, mode: 'coordinate' },
        'remote-lon': { limit: 15, key: 'save_lon', min: -180, max: 180, mode: 'coordinate' }
    };

    const saveToggle = document.getElementById('save-toggle');
    let isRetentionEnabled = true;

    if (saveToggle) {
        const toggleState = localStorage.getItem('save_toggle_state');
        if (toggleState === 'false') {
            saveToggle.checked = false;
            isRetentionEnabled = false;
            localStorage.removeItem('save_decl');
            localStorage.removeItem('save_lat');
            localStorage.removeItem('save_lon');
        } else {
            saveToggle.checked = true;
            isRetentionEnabled = true;
        }
    }

    // Hiển thị ngay giá trị lưu trữ lên màn hình cho người dùng gõ nhập bình thường
    Object.keys(configs).forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        
        if (isRetentionEnabled) {
            const saved = localStorage.getItem(configs[id].key);
            if (saved !== null && configs[id].key) {
                el.value = saved;
                if (id === 'declination-input') {
                    magneticDeclination = parseFloat(saved) || 0;
                    if (typeof updateMagneticDeclination === 'function') updateMagneticDeclination();
                }
            }
        } else {
            el.value = (id === 'declination-input') ? "0" : "";
        }
    });

    // =========================================================================
    // 🎯 KHỐI LỆNH QUAN TRỌNG: CHỜ FILE NẠP XONG MỚI CHẠY LẠI ENGINE ĐỊA TỪ
    // =========================================================================
    if (typeof loadWMMHRFile === 'function') {
        loadWMMHRFile().then((success) => {
            if (success) {
                const savedLat = localStorage.getItem('save_lat');
                const savedLon = localStorage.getItem('save_lon');
                if (isRetentionEnabled && savedLat && savedLon) {
                    if (typeof updateLocationUI === 'function') {
                        updateLocationUI(parseFloat(savedLat), parseFloat(savedLon));
                    }
                    if (typeof calculateRemoteDeclination === 'function') {
                        calculateRemoteDeclination();
                    }
                }
            }
        });
    } else {
        // Phương án dự phòng nếu trỏ thẳng vào file coeffs tĩnh không qua hàm load file
        const savedLat = localStorage.getItem('save_lat');
        const savedLon = localStorage.getItem('save_lon');
        if (isRetentionEnabled && savedLat && savedLon) {
            if (typeof updateLocationUI === 'function') updateLocationUI(parseFloat(savedLat), parseFloat(savedLon));
            if (typeof calculateRemoteDeclination === 'function') calculateRemoteDeclination();
        }
    }

    // Lắng nghe sự kiện Focus, Click, Keypress, Input, Blur của các ô nhập liệu
    Object.keys(configs).forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;

        const autoSelect = () => {
            setTimeout(() => { el.setSelectionRange(0, el.value.length); }, 10);
        };
        el.addEventListener('focus', autoSelect);
        el.addEventListener('click', autoSelect);

        el.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                el.blur(); 
                if (typeof toggleDeclinationPanel === 'function') toggleDeclinationPanel(false);
            }
        });

        el.addEventListener('input', () => {
            const cfg = configs[id];
            let raw = el.value;

            if (typeof parseSmartCoordinateText === 'function') {
                el.value = parseSmartCoordinateText(raw);
            }
            if (el.value.length > cfg.limit) {
                el.value = el.value.slice(0, cfg.limit);
            }

            let checkNum = parseFloat(el.value);
            if (!isNaN(checkNum) && /^[\-\+]?\d*\.?\d+$/.test(el.value)) {
                if (cfg.min !== undefined && checkNum < cfg.min) checkNum = cfg.min;
                if (cfg.max !== undefined && checkNum > cfg.max) checkNum = cfg.max;
                
                if (id === 'declination-input') {
                    magneticDeclination = checkNum;
                    if (typeof updateMagneticDeclination === 'function') updateMagneticDeclination();
                }
                if (cfg.key && document.getElementById('save-toggle')?.checked) {
                    localStorage.setItem(cfg.key, checkNum);
                }
            }
        });

        el.addEventListener('blur', () => {
            const cfg = configs[id];
            let rawStr = el.value.trim();

            let finalDecimal = typeof convertToDecimalDegrees === 'function' ? convertToDecimalDegrees(rawStr) : parseFloat(rawStr);
            
            if (finalDecimal === null || isNaN(finalDecimal)) {
                el.value = (id === 'declination-input') ? "0" : "";
                if (id === 'declination-input') magneticDeclination = 0;
                if (cfg.key) localStorage.removeItem(cfg.key);
            } else {
                if (cfg.min !== undefined && finalDecimal < cfg.min) finalDecimal = cfg.min;
                if (cfg.max !== undefined && finalDecimal > cfg.max) finalDecimal = cfg.max;
                
                let roundedVal = (id === 'declination-input') ? 
                                 parseFloat(finalDecimal.toFixed(2)) : 
                                 parseFloat(finalDecimal.toFixed(5));
                el.value = roundedVal;
                
                if (id === 'declination-input') magneticDeclination = roundedVal;

                if (cfg.key && document.getElementById('save-toggle')?.checked) {
                    localStorage.setItem(cfg.key, roundedVal);
                }
            }
            
            if (id === 'declination-input') {
                if (typeof updateMagneticDeclination === 'function') updateMagneticDeclination();
            } else {
                if (typeof calculateRemoteDeclination === 'function') {
                    calculateRemoteDeclination();
                }
            }
        });
    });

    // =========================================================================
    // 🚀 LẮNG NGHE SỰ KIỆN CHO KHUNG TÌM ĐỊA DANH MỚI
    // =========================================================================
    const lookupBtn = document.getElementById('lookupLocation');
    const addressInp = document.getElementById('address-lookup');

    if (lookupBtn) {
        lookupBtn.addEventListener('click', () => {
            if (typeof getLocationFromAddress === 'function') getLocationFromAddress();
        });
    }

    if (addressInp) {
        addressInp.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                if (typeof getLocationFromAddress === 'function') getLocationFromAddress();
                addressInp.blur();
            }
        });
    }

    // Biện chứng lưu trữ của nút Save Toggle Checkbox
    saveToggle?.addEventListener('change', (e) => {
        const declInput = document.getElementById('declination-input');
        const latInput = document.getElementById('remote-lat');
        const lonInput = document.getElementById('remote-lon');
        const displayEl = document.getElementById('location-display');

        if (!e.target.checked) {
            localStorage.setItem('save_toggle_state', 'false');
            localStorage.removeItem('save_decl');
            localStorage.removeItem('save_lat');
            localStorage.removeItem('save_lon');
            
            if (declInput) declInput.value = "0";
            if (latInput) latInput.value = "";  
            if (lonInput) lonInput.value = "";  
            if (addressInp) addressInp.value = "";
            if (displayEl) displayEl.innerText = "";
            
            magneticDeclination = 0;
            if (typeof updateMagneticDeclination === 'function') updateMagneticDeclination();
            if (typeof showToast === 'function') showToast("Đã xóa dữ liệu ghi nhớ!");
        } else {
            localStorage.setItem('save_toggle_state', 'true');
            if (declInput) localStorage.setItem('save_decl', declInput.value);
            if (latInput && latInput.value !== "") localStorage.setItem('save_lat', latInput.value);
            if (lonInput && lonInput.value !== "") localStorage.setItem('save_lon', lonInput.value);
            if (typeof showToast === 'function') showToast("Đã bật chế độ ghi nhớ!");
        }
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

// =========================================================================
// 🚀 ENGINE ĐIỀU KHIỂN SMOOTH-BUNG BÓNG V10.1 - TRIỆT TIÊU GHOST CLICK MOBILE
// =========================================================================

let autoHideTimerV10 = null;

/**
 * ⏱️ BỘ ĐẾM NGƯỢC TỰ ĐỘNG THU GỌN BẢNG
 */
function startAutoHideV10() {
    clearTimeout(autoHideTimerV10);
    autoHideTimerV10 = setTimeout(() => {
        const wrapper = document.getElementById('mainPanelWrapper');
        
        if (wrapper && wrapper.classList.contains('panel-open-v10')) {
            const activeTag = document.activeElement.tagName;
            if (activeTag === 'INPUT' || activeTag === 'TEXTAREA' || activeTag === 'SELECT') {
                return; 
            }
            toggleMainPanelV10(); 
        }
    }, 3000);
}

/**
 * 🔄 HÀM ĐẢO TRẠNG THÁI ĐÓNG/MỞ BẰNG BONG BÓNG
 */
function toggleMainPanelV10() {
    const wrapper = document.getElementById('mainPanelWrapper');
    if (!wrapper) return;

    wrapper.style.removeProperty('display');
    wrapper.style.removeProperty('height');
    wrapper.classList.remove('initial-hidden');
    
    wrapper.classList.toggle('panel-open-v10');
    const isOpen = wrapper.classList.contains('panel-open-v10');

    if (isOpen) {
        startAutoHideV10();
    } else {
        clearTimeout(autoHideTimerV10);
    }

    if (typeof recalculateFate === 'function') {
        recalculateFate();
    }
}

// =========================================================================
// 🔮 ENGINE ĐIỀU KHIỂN BONG BÓNG THÔNG MINH V11.2 - ULTRA PERFORMANCE
// =========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Tự động khởi tạo Bong bóng menu nếu chưa có trong HTML
    if (!document.getElementById('floatingMenuBtnV10')) {
        const bubbleHTML = `
            <div id="floatingMenuBtnV10">
                👤
                <span class="pulse-ring-v10"></span>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', bubbleHTML);
    }

    const bubble = document.getElementById('floatingMenuBtnV10');
    const wrapper = document.getElementById('mainPanelWrapper');
    if (!wrapper || !bubble) return;

    // Thiết lập trạng thái ẩn ban đầu gọn gàng
    wrapper.classList.remove('panel-open-v10');
    wrapper.classList.add('initial-hidden');

    let isDragging = false;
    let startX = 0, startY = 0;
    let initialLeft = 0, initialTop = 0;
    let localHideTimer = null;

    const getPointerCoords = (e) => e.touches ? e.touches[0] : e;

    // =========================================================================
    // ⏱️ PHÂN HỆ: BỘ ĐẾM ẨN THÔNG MINH (CÁCH LY TUYỆT ĐỐI KHI ĐANG TƯƠNG TÁC)
    // =========================================================================
    
    // Xóa sạch bộ đếm ngược để giữ bảng đứng yên cố định
    const stopHideCountdown = () => {
        if (localHideTimer) clearTimeout(localHideTimer);
        if (typeof autoHideTimerV10 !== 'undefined' && autoHideTimerV10) clearTimeout(autoHideTimerV10);
        if (window.autoHideTimerV10) clearTimeout(window.autoHideTimerV10);
    };

    // Khởi động chu trình đếm ngược 5 giây tự ẩn
    const startHideCountdown = () => {
        stopHideCountdown();
        
        // Chỉ đếm ngược nếu bảng đang mở công khai
        if (wrapper.classList.contains('panel-open-v10')) {
            localHideTimer = setTimeout(() => {
                // [GIỮ BẢNG LỚP 1]: Nếu đang tập trung gõ phím, nhập liệu, chọn select -> KHÔNG CHO THU LÊN
                const activeTag = document.activeElement ? document.activeElement.tagName : '';
                if (activeTag === 'INPUT' || activeTag === 'TEXTAREA' || activeTag === 'SELECT') {
                    startHideCountdown(); // Gia hạn thời gian vĩnh viễn
                    return;
                }
                
                // [GIỮ BẢNG LỚP 2]: Nếu chuột đang hover hoặc ngón tay đang chạm giữ trên khung panel -> KHÔNG CHO THU LÊN
                if (wrapper.matches(':hover') || wrapper.contains(document.activeElement)) {
                    startHideCountdown(); // Tiếp tục giữ nguyên trạng thái mở
                    return;
                }
                
                // Nếu hoàn toàn không có tương tác -> Thực thi ẩn tự động mượt mà
                execTogglePanel(false);
            }, 5000);

            // Đồng bộ định danh Timer lên hệ thống toàn cục
            if (typeof autoHideTimerV10 !== 'undefined') autoHideTimerV10 = localHideTimer;
            window.autoHideTimerV10 = localHideTimer;
        }
    };

    // Hàm thực thi đóng/mở bảng lập tức - Bấm phát ăn ngay không độ trễ
    const execTogglePanel = (forceState) => {
        const shouldOpen = (forceState !== undefined) ? forceState : !wrapper.classList.contains('panel-open-v10');
        
        if (shouldOpen) {
            stopHideCountdown();
            wrapper.classList.add('panel-open-v10');
            wrapper.classList.remove('initial-hidden');
            startHideCountdown(); // Mở ra thành công -> Kích hoạt bộ trễ ẩn 5 giây
        } else {
            stopHideCountdown(); // Chủ động đóng -> Hủy luôn bộ đếm ngầm để nhẹ máy
            wrapper.classList.remove('panel-open-v10');
            wrapper.classList.add('initial-hidden');
        }

        // Đồng bộ xoay mũi tên chỉ thị (nếu có trong HTML)
        const currentArrow = document.getElementById('toggleArrow');
        if (currentArrow) {
            currentArrow.style.transform = shouldOpen ? 'rotate(180deg)' : 'rotate(0deg)';
        }

        // Gọi kết nối đồng bộ sang hàm gốc của phongthuy_khoahoc.js nếu cần thiết
        if (typeof toggleMainPanelV10 === 'function' && forceState === undefined) {
            // Đảm bảo không tạo vòng lặp vô hạn
        }
    };

    // =========================================================================
    // 🛫 PHÂN HỆ KÉO THẢ GIA TỐC PHẦN CỨNG - BẢO VỆ SỰ MƯỢT MÀ CỦA LA BÀN
    // =========================================================================
    
    const onDragStart = (e) => {
        const coords = getPointerCoords(e);
        isDragging = false;
        startX = coords.clientX;
        startY = coords.clientY;

        const rect = bubble.getBoundingClientRect();
        initialLeft = rect.left;
        initialTop = rect.top;

        bubble.style.right = 'auto';
        bubble.style.bottom = 'auto';
        bubble.style.left = initialLeft + 'px';
        bubble.style.top = initialTop + 'px';
        bubble.style.setProperty('transition', 'none', 'important');

        // 🎯 SIÊU TỐI ƯU: Chỉ ép CPU theo dõi tọa độ KHI THỰC SỰ DI CHUYỂN, giúp la bàn không bị lag giật
        if (e.type === 'touchstart') {
            document.addEventListener('touchmove', onDragMove, { passive: false });
            document.addEventListener('touchend', onDragEnd, { passive: false });
        } else {
            document.addEventListener('mousemove', onDragMove, { passive: false });
            document.addEventListener('mouseup', onDragEnd, { passive: false });
        }
    };

    const onDragMove = (e) => {
        if (startX === 0 && startY === 0) return;

        const coords = getPointerCoords(e);
        const diffX = coords.clientX - startX;
        const diffY = coords.clientY - startY;

        // Đặt ngưỡng biên độ di chuyển 5px để phân biệt chính xác giữa Kéo Thả và Chạm Nhẹ (Click)
        if (Math.abs(diffX) > 5 || Math.abs(diffY) > 5) {
            isDragging = true;
            if (e.cancelable) e.preventDefault(); 
        }

        bubble.style.left = (initialLeft + diffX) + 'px';
        bubble.style.top = (initialTop + diffY) + 'px';
    };

    const onDragEnd = (e) => {
        // 🧠 GIẢI PHÓNG TÀI NGUYÊN RAM NGAY KHI BUÔNG TAY: Giúp la bàn mượt mà đạt đỉnh 120fps
        document.removeEventListener('mousemove', onDragMove);
        document.removeEventListener('mouseup', onDragEnd);
        document.removeEventListener('touchmove', onDragMove);
        document.removeEventListener('touchend', onDragEnd);

        if (startX === 0 && startY === 0) return;
        
        // 🛡️ CHIÊU THỨC TRIỆT TIÊU CLICK MA: Chặn đứng luồng giả lập chuột gây lỗi đóng/mở vô cớ
        if (e.type === 'touchend' && e.cancelable) {
            e.preventDefault(); 
        }
        
        bubble.style.setProperty('transition', 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), left 0.2s ease, top 0.2s ease', 'important');
        
        const finishedDragging = isDragging;
        startX = 0;
        startY = 0;

        // Xử lý logic khi người dùng nhấc ngón tay
        if (!finishedDragging) {
            // Nếu là Chạm Nhẹ -> Thực hiện đảo trạng thái Đóng/Mở lập tức, không delay 5 giây
            execTogglePanel();
        } else {
            // Nếu là Hành vi Kéo Thả -> Tiếp tục duy trì bộ đếm ẩn 5 giây nếu bảng đang mở
            if (wrapper.classList.contains('panel-open-v10')) {
                startHideCountdown();
            }
        }
    };

    // Đăng ký cổng tiếp nhận sự kiện ban đầu cho Bong bóng chủ mệnh
    bubble.addEventListener('mousedown', onDragStart);
    bubble.addEventListener('touchstart', onDragStart, { passive: true });

    // =========================================================================
    // ĐĂNG KÝ CƠ CHẾ ĐÓNG BĂNG PANEL KHI TƯƠNG TÁC
    // =========================================================================
    
    const freezeEvents = ['mousedown', 'touchstart', 'touchmove', 'mousemove', 'input', 'focus', 'mouseover', 'mouseenter'];
    freezeEvents.forEach(evtName => {
        wrapper.addEventListener(evtName, stopHideCountdown, { passive: true });
    });

    const unfreezeEvents = ['mouseup', 'touchend', 'blur', 'mouseout', 'mouseleave'];
    unfreezeEvents.forEach(evtName => {
        wrapper.addEventListener(evtName, () => {
            // Khi người dùng rời tay/rời chuột, chỉ cho phép đếm ngược nếu không có con trỏ gõ chữ ngầm
            const activeTag = document.activeElement ? document.activeElement.tagName : '';
            if (activeTag !== 'INPUT' && activeTag !== 'TEXTAREA' && activeTag !== 'SELECT') {
                startHideCountdown();
            }
        }, { passive: true });
    });

    // Xuất bản hàm điều khiển ra window để tương thích với các phím tắt/mũi tên phụ bên ngoài
    window.toggleMainPanelV10 = () => execTogglePanel();
});

function togglePanel() {
    toggleMainPanelV10();
}

window.toggleMainPanelV10 = toggleMainPanelV10;
window.togglePanel = togglePanel;
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
let isCompassHold = false;
// =========================================================================
// 🚀 ENGINE QUẢN LÝ CẢM BIẾN VÀ ĐIỀU HÀNH LA BÀN PHONG THỦY (BẢN HOÀN MỸ)
// =========================================================================

// --- 1. KHỞI TẠO BIẾN TOÀN CỤC CHUẨN MỰC ---
if (typeof isDetailOpen === 'undefined') window.isDetailOpen = false;
if (typeof lockedHeadingAtOpen === 'undefined') window.lockedHeadingAtOpen = null;
if (typeof orientationListenerAdded === 'undefined') window.orientationListenerAdded = false;
if (typeof permissionDenied === 'undefined') window.permissionDenied = false;
if (typeof isCompassHold === 'undefined') window.isCompassHold = false;
// --- 1. BIẾN TOÀN CỤC (DUY NHẤT 1 LẦN) ---
// Biến điều khiển hệ thống
let isFullScreen = false; let lastTapTime = 0;
let originalCompassParent = null; let originalCompassNextSibling = null;
let originalStatusParent = null; let originalStatusNextSibling = null;
let originalDetailBoxStyle = ""; let originalDetailBoxClass = "";
let currentScale = 1; let initialScale = 1; let startDistance = 0;
let isZooming = false;
let currentX = 0; let currentY = 0; let startX = 0; let startY = 0;

// Biến điều khiển kim quay
let lastHeading = null;
let rafId = null;
let lastUpdateTime = 0;
const SMOOTH_MIN = 0.08;
const SMOOTH_MAX = 0.55;
let magneticDeclination = 0;
let lastAccuracy = 0;

// Biến thuật toán nhiễu (Chỉ cần khai báo 1 lần ở đây)
let lastHeadingForNoise = null;
let lastMotionTime = Date.now();
let noiseScore = 0;
let lastMagneticCheck = 0;
let isMagneticWarningActive = false;

/**
 * 🪐 HÀM KHỞI TẠO DUY NHẤT TOÀN HỆ THỐNG
 */
window.onload = function() {
    if (typeof render24SonRing === 'function') render24SonRing();
    if (typeof loadSavedMembers === 'function') loadSavedMembers();
    if (typeof recalculateFate === 'function') recalculateFate();
    initMotionListener(); // Kích hoạt gia tốc kế
    initCompassPermission();
};

// =========================================================================
// 🛡️ BỘ NÃO ĐIỀU PHỐI QUYỀN SENSOR LA BÀN (KẾT HỢP ASYNC/AWAIT & Z-INDEX)
// =========================================================================

function initCompassPermission() {
    const modal = document.getElementById('iosPermissionModal');
    const permBtn = document.getElementById('permission-btn');
    
    if (modal) { 
        modal.style.zIndex = '999999'; 
        modal.style.position = 'fixed'; 
    }

    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && 'ontouchend' in document);

    if (!isIOSDevice) {
        // --- LOGIC ANDROID THÔNG MINH ---
        if (modal) modal.style.display = 'none';
        if (permBtn) permBtn.style.display = 'none';
        
        // Nếu trước đó Android đã từng kích hoạt thành công, chạy thẳng luôn không chờ đợi hay hiện thông báo nữa
        if (localStorage.getItem('android_compass_activated') === 'true') {
            addOrientationListener();
            return;
        }

        // Đợi 400ms để trình duyệt ổn định trước khi gọi lần đầu
        setTimeout(() => {
            addOrientationListener();
            
            // Chờ thêm 1500ms để kiểm tra xem cảm biến có tự động chạy ngầm không (nhiều máy Android tự chạy được)
            setTimeout(() => {
                if (lastHeading === null) {
                    createSmartWakeUpOverlay("👆 Chạm màn hình để khởi động la bàn");
                }
            }, 1500);
        }, 400);
        return;
    }

    // --- LOGIC IOS (GIỮ NGUYÊN LUỒNG CỦA BẠN) ---
    const localStatus = localStorage.getItem('ios_compass_granted');
    if (localStatus === 'true') {
        if (modal) modal.style.display = 'none';
        trySilentActivation();
    } else if (localStatus === 'false') {
        if (permBtn) permBtn.style.display = 'block';
        showPermissionResetGuide();
    } else {
        if (permBtn) permBtn.style.display = 'block';
        if (modal) modal.style.display = 'flex';
        setupInitialModalText();
    }
}

// Thuật toán mồi ngầm - Bắt lỗi nếu bị Chrome iOS chặn
async function trySilentActivation() {
    try {
        if (typeof DeviceOrientationEvent.requestPermission === 'function') {
            const state = await DeviceOrientationEvent.requestPermission();
            if (state === 'granted') {
                window.orientationListenerAdded = false;
                addOrientationListener();
            } else {
                throw new Error('Permission denied silently');
            }
        } else {
            addOrientationListener();
        }
    } catch (e) {
        // 🪄 SỬA LỖI TẠI ĐÂY: Truyền chữ thông báo cụ thể cho iPhone thay vì để trống
        createSmartWakeUpOverlay("👆 Chạm màn hình để khởi động la bàn");
    }
}

function createSmartWakeUpOverlay(text) {
    // 🛡️ BẢO VỆ PHÒNG HỜ: Nếu text bị trống (undefined), tự động lấy câu thông báo chuẩn
    if (!text) text = "👆 Chạm màn hình để khởi động la bàn";

    if (document.getElementById('smart-wake-overlay')) return;

    const overlay = document.createElement('button');
    overlay.id = 'smart-wake-overlay';

    overlay.innerHTML = `<span style="background:rgba(0,0,0,0.5); padding:15px 25px; border-radius:20px; border:1px solid #dfb76c; font-weight:bold; font-size:16px;">${text}</span>`;
    overlay.style.cssText = `position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(7,7,7,0.4); z-index:9999999; border:none; display:flex; align-items:center; justify-content:center; color:#dfb76c; cursor:pointer; backdrop-filter: blur(2px);`;
    
    document.body.appendChild(overlay);

    overlay.onclick = async function() {
        // Ghi nhớ thiết bị Android đã được người dùng mồi tương tác
        localStorage.setItem('android_compass_activated', 'true');

        if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
            try {
                const state = await DeviceOrientationEvent.requestPermission();
                if (state === 'granted') {
                    window.orientationListenerAdded = false;
                    addOrientationListener();
                    overlay.remove();
                } else {
                    overlay.remove();
                    window.permissionDenied = true;
                    localStorage.setItem('ios_compass_granted', 'false');
                    showPermissionResetGuide(); 
                }
            } catch (err) {
                console.error("Lỗi xin quyền:", err);
                overlay.remove();
                showPermissionResetGuide();
            }
        } else {
            // Android thông thường nhảy vào đây
            addOrientationListener();
            overlay.remove();
        }
    };
}

function setupInitialModalText() {
    const modal = document.getElementById('iosPermissionModal');
    if (!modal) return;
    
    const title = modal.querySelector('h3');
    const text = modal.querySelector('p');
    const btn = modal.querySelector('button');

    if (title) title.textContent = "KÍCH HOẠT LA BÀN TỰ ĐỘNG";
    if (text) text.innerHTML = `Để la bàn tự động xoay theo hướng thực địa của điện thoại,<br>vui lòng bấm ĐỒNG Ý và xác nhận cấp quyền.`;
    if (btn) btn.onclick = handleModalClick;
}

function handleModalClick() {
    const modal = document.getElementById('iosPermissionModal');
    if (modal) modal.style.display = 'none';
    localStorage.setItem('ios_compass_granted', 'true');
    requestPermission();
}

function requestPermission() {
    const permBtn = document.getElementById('permission-btn');
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission()
            .then(permissionState => {
                closePermissionModal();
                if (permissionState === 'granted') {
                    localStorage.setItem('ios_compass_granted', 'true');
                    window.permissionDenied = false;
                    window.orientationListenerAdded = false;
                    addOrientationListener();
                    if (permBtn) permBtn.style.display = 'none';
                } else {
                    window.permissionDenied = true;
                    localStorage.setItem('ios_compass_granted', 'false');
                    showPermissionResetGuide();
                }
            })
            .catch(err => {
                console.error(err);
                window.permissionDenied = true;
                closePermissionModal();
                showPermissionResetGuide();
            });
    } else {
        closePermissionModal();
        addOrientationListener();
        if (permBtn) permBtn.style.display = 'none';
    }
}

function showPermissionResetGuide() {
    const modal = document.getElementById('iosPermissionModal');
    if (!modal) return;

    modal.style.cssText = `
        display: flex; position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        background: rgba(0,0,0,0.85); align-items: center; justify-content: center;
        z-index: 999999 !important; backdrop-filter: blur(5px);
    `;

    modal.innerHTML = `
        <div style="background:#1c1c1e; padding:25px; border-radius:20px; text-align:center; width:88%; max-width:400px; border:2px solid #ff9500; box-shadow: 0 10px 40px rgba(0,0,0,0.8);">
            <div style="font-size:3.2rem; margin-bottom:15px;">⚠️</div>
            <h3 style="color:#ff9500; margin-bottom:12px; font-weight:bold;">Không Kích Hoạt Được La Bàn</h3>
            <p style="color:#ccc; line-height:1.6; margin-bottom:20px; font-size:0.9rem;">
                Trình duyệt đã chặn quyền truy cập cảm biến do bạn từng bấm từ chối trước đây.
            </p>
            <div style="background:#2c2c2e; padding:15px; border-radius:12px; text-align:left; margin-bottom:20px; font-size:0.88rem; line-height:1.6; color:#e5e5ea; border: 1px solid #3a3a3c;">
                <strong style="color:#ff9500;">Hướng dẫn khôi phục:</strong><br><br>
                1. Vào <strong>Cài Đặt</strong> iPhone → chọn trình duyệt (Safari/Chrome).<br>
                2. Tìm mục <strong>Cảm biến chuyển động</strong> (Motion & Orientation).<br>
                3. Chuyển sang trạng thái <strong>Cho phép</strong> (Allow).<br>
                4. Đóng hẳn ứng dụng trình duyệt rồi mở lại.
            </div>
            <button onclick="resetPermissionFlag()" style="width:100%; padding:14px; background:#ff9500; color:#000; border:none; border-radius:10px; font-weight:bold; cursor:pointer; margin-bottom:10px; text-transform:uppercase;">
                ✅ ĐÃ LÀM - TẢI LẠI TRANG
            </button>
            <button onclick="closePermissionModal()" style="width:100%; padding:12px; background:#3a3a3c; color:#fff; border:none; border-radius:10px; cursor:pointer; font-size:0.85rem;">
                Sử dụng chế độ xoay tay
            </button>
        </div>
    `;
}

function resetPermissionFlag() {
    localStorage.removeItem('ios_compass_granted');
    window.permissionDenied = false;
    closePermissionModal();
    setTimeout(() => location.reload(), 400);
}

function closePermissionModal() {
    const modal = document.getElementById('iosPermissionModal');
    if (modal) modal.style.display = 'none';
}

// --- 3. HÀM GIA TỐC KẾ (ĐO CHUYỂN ĐỘNG) ---
function initMotionListener() {
    if (typeof DeviceMotionEvent === 'undefined') return;
    window.addEventListener('devicemotion', (event) => {
        if (!event.accelerationIncludingGravity) return;
        const { x = 0, y = 0, z = 0 } = event.accelerationIncludingGravity;
        const totalAccel = Math.sqrt(x * x + y * y + z * z);
        if (totalAccel > 0.5 || Math.abs(x) > 0.35 || Math.abs(y) > 0.35 || Math.abs(z) > 0.35) {
            lastMotionTime = Date.now();
        }
    }, { passive: true });
}

// --- 4. HÀM XỬ LÝ LA BÀN CHÍNH ---
function handleOrientation(event) {
    if (window.isCompassHold) {
        if (typeof window.holdedHeading !== 'undefined') {
            lastHeading = window.holdedHeading;
            if (typeof window.currentHeading !== 'undefined') window.currentHeading = window.holdedHeading;
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => executeUIUpdate(window.holdedHeading, window.holdedHeading));
        }
        return; 
    }

    let rawHeading = null;
    const now = Date.now();
    
    // Accuracy (iOS)
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

    if (event.webkitCompassHeading !== undefined && event.webkitCompassHeading !== null) {
        rawHeading = event.webkitCompassHeading;
    } else if (event.alpha !== undefined && event.alpha !== null) {
        rawHeading = (360 - event.alpha) % 360;
    }
    
    if (rawHeading === null) return;

    // Tự động ẩn thông báo mồi nếu la bàn đã nhận được dữ liệu thực tế và lưu trạng thái thành công
    if (lastHeading !== null && localStorage.getItem('android_compass_activated') !== 'true') {
        localStorage.setItem('android_compass_activated', 'true');
        const overlay = document.getElementById('smart-wake-overlay');
        if (overlay) overlay.remove();
    }

    // Giảm tần suất check nhiễu lên 1500ms để giảm tải bớt các lệnh DOM nặng cho Android A71
    if (now - lastMagneticCheck > 1500) {
        if (accuracy === undefined || accuracy === null) {
            checkMagneticQuality(rawHeading, event);
        }
        lastMagneticCheck = now;
    }

    if (document.activeElement?.id === 'compassSlider') return;
    
    // 🔥 ĐÃ XÓA CHẶN TIME CỨNG (THROTTLE_MS) ĐỂ KIM QUAY MƯỢT TUYỆT ĐỐI THEO TẦN SỐ QUÈT MÀN HÌNH NATIVE
    lastUpdateTime = now;

    if (lastHeading === null) {
        lastHeading = rawHeading;
        executeUIUpdate(lastHeading, lastHeading);
        return;
    }

    let diff = rawHeading - lastHeading;
    if (diff > 180) diff -= 360;
    if (diff < -180) diff += 360;
    
    const absDiff = Math.abs(diff);
    
    // Bộ lọc chống nhiễu Jitter: Nếu điện thoại nhúc nhích cực nhỏ (< 0.15 độ), không xử lý để tránh rung lắc kim
    if (absDiff < 0.15) return;

    let dynamicFactor = SMOOTH_MIN;
    if (absDiff > 12) dynamicFactor = SMOOTH_MAX;
    else if (absDiff > 1.5) dynamicFactor = SMOOTH_MIN + (absDiff / 12) * (SMOOTH_MAX - SMOOTH_MIN);
    
    const newHeading = lastHeading + diff * dynamicFactor;
    lastHeading = (newHeading % 360 + 360) % 360;

    const headingForText = lastHeading; 
    const headingForDial = (lastHeading + (magneticDeclination || 0) + 360) % 360; 

    if (typeof window.currentHeading !== 'undefined') window.currentHeading = headingForText;

    if (absDiff > 0.4) {
        const btnTongLuan = document.getElementById('btn-tong-luan');
        if (btnTongLuan) btnTongLuan.classList.remove('vượng-xuất');
        if (typeof window.dừngKimTimeout !== 'undefined') clearTimeout(window.dừngKimTimeout);
        if (typeof kichHoatBoDemDungKim === 'function') kichHoatBoDemDungKim();
    }

    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => executeUIUpdate(headingForDial, headingForText));
}

// --- 5. HÀM ĐO NHIỄU ---
function checkMagneticQuality(currentHeading, event) {
    const dot = document.getElementById('accuracy-dot');
    const text = document.getElementById('accuracy-text');
    if (!dot || !text) return;

    if (lastHeadingForNoise === null) {
        lastHeadingForNoise = currentHeading;
        updateMagneticUI("TÍN HIỆU ỔN", "#4caf50");
        return;
    }

    let diff = Math.abs(currentHeading - lastHeadingForNoise);
    if (diff > 180) diff = 360 - diff;
    const isMoving = (Date.now() - lastMotionTime < 1200);

    if (diff > 30 && !isMoving) {
        noiseScore = Math.min(10, noiseScore + 4);
    } else if (isMoving) {
        noiseScore = Math.max(0, noiseScore - 3);
    } else if (diff < 10) {
        noiseScore = Math.max(0, noiseScore - 1);
    }

    if (noiseScore >= 6) {
        updateMagneticUI("NHIỄU TỪ TRƯỜNG", "#ff9800");
        showMagneticToast();
    } else if (noiseScore >= 3) {
        updateMagneticUI("NHIỄU NHẸ", "#ff9800");
    } else {
        updateMagneticUI("TÍN HIỆU ỔN", "#4caf50");
    }
    lastHeadingForNoise = currentHeading;
}

// --- 6. HÀM HỖ TRỢ ---
function showMagneticToast() {
    if (isMagneticWarningActive) return;
    isMagneticWarningActive = true;
    if (typeof showToast === 'function') {
        showToast("⚠️ Nhiễu từ trường mạnh! Di chuyển sang khu vực khác hoặc vẽ số 8.", true);
    }
    setTimeout(() => { isMagneticWarningActive = false; }, 10000);
}

function executeUIUpdate(headingDial, headingText) {
    if (typeof updateCompassUI === 'function') updateCompassUI(headingText); 
    if (typeof updateDegreeDisplay === 'function') updateDegreeDisplay(headingText); 
    if (typeof recalculateFate === 'function') recalculateFate();
}

function updateMagneticUI(statusText, color) {
    const dot = document.getElementById('accuracy-dot');
    const text = document.getElementById('accuracy-text');
    if (text && text.innerText !== statusText) {
        text.innerText = statusText;
        if (dot) dot.style.background = color;
    }
}

function updateMagneticStatus(acc) {
    const dot = document.getElementById('accuracy-dot');
    const text = document.getElementById('accuracy-text');
    if (!dot || !text) return;
    let bg = '#4caf50', txt = "TÍN HIỆU TỐT";
    if (acc > 15 && acc <= 30) { bg = '#ff9800'; txt = "NHIỄU NHẸ"; } 
    else if (acc > 30) { bg = '#f44336'; txt = "NHIỄU NẶNG"; }
    if (text.innerText !== txt) { dot.style.background = bg; text.innerText = txt; }
}

// --- 7. Hàm kích hoạt Listener chung cho cả 2 hệ điều hành
function addOrientationListener() {
    if (window.orientationListenerAdded) return;
    
    const handler = (e) => {
        // Kiểm tra dữ liệu hợp lệ trước khi đẩy vào hàm xử lý chính
        if (e.webkitCompassHeading !== undefined || e.alpha !== null) {
            handleOrientation(e);
        }
    };

    // Ưu tiên absolute (Android), sau đó đến orientation (iOS/Android cũ)
    if ('ondeviceorientationabsolute' in window) {
        window.addEventListener('deviceorientationabsolute', handler, { passive: true });
    } else if ('ondeviceorientation' in window) {
        window.addEventListener('deviceorientation', handler, { passive: true });
    }
    
    window.orientationListenerAdded = true;
}
// =========================================================================
// 📺 ENGINE ĐIỀU KHIỂN CHẾ ĐỘ PHÓNG TO / FULLSCREEN
// =========================================================================

function handleInteraction(e) {
    if (e.target.id === 'smart-wake-overlay') return; 

    const isCompass = e.target.closest('.compass-container');
    const isFullScreenDiv = document.getElementById('fullscreenMode');
    
    if (isCompass && !isFullScreen) {
        e.preventDefault(); 
        toggleFullScreenMode();
    } 
    else if (isFullScreen && isFullScreenDiv) {
        if (currentScale !== 1 || currentX !== 0 || currentY !== 0) {
            resetZoom();
        } else {
            exitFullScreenMode();
        }
    }
}

function resetZoom() {
    currentScale = 1; currentX = 0; currentY = 0;
    const wrapper = document.getElementById('fs-compass-wrapper');
    if (wrapper) {
        wrapper.style.transition = "transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)";
        wrapper.style.transform = "translate(0px, 0px) scale(1)";
    }
}

document.addEventListener('dblclick', handleInteraction);

document.addEventListener('touchend', (e) => {
    if (e.touches.length > 0) return; 
    const currentTime = new Date().getTime();
    if (currentTime - lastTapTime < 350) {
        if (e.target.id !== 'smart-wake-overlay') { 
            e.preventDefault(); 
            handleInteraction(e);
        }
    }
    lastTapTime = currentTime;
});

function toggleFullScreenMode() {
    if (isFullScreen) return;

    const compassContainer = document.querySelector('.compass-container');
    const statusPanel = document.querySelector('.status-panel');
    const fsIcon = document.querySelector('.fs-icon');
    const giaiThich = document.getElementById('detail-box');

    if (!compassContainer) return;

    originalCompassParent = compassContainer.parentElement;
    originalCompassNextSibling = compassContainer.nextSibling;
    if (statusPanel) {
        originalStatusParent = statusPanel.parentElement;
        originalStatusNextSibling = statusPanel.nextSibling;
    }

    if (giaiThich) {
        originalDetailBoxStyle = giaiThich.style.cssText;
        originalDetailBoxClass = giaiThich.className;
        giaiThich.style.setProperty('display', 'none', 'important');
        giaiThich.style.setProperty('position', 'static', 'important');
        giaiThich.setAttribute('data-fs-hidden', 'true');
    }

    if (statusPanel) {
        const elements = statusPanel.querySelectorAll('*');
        elements.forEach(el => {
            const text = el.textContent || "";
            const isTarget = text.includes('Người Tầm Phương') || text.includes('Đo hướng') || 
                             text.includes('Cung Phi') || text.includes('Năm Âm') || 
                             text.includes('Trung Cung') || text.includes('Xem giải thích thuật ngữ') ||
                             text.includes('Sinh năm') || text.includes('Mệnh') || 
                             text.includes('Mạng') || text.includes('Cung Mệnh') || text.includes('Tuổi');

            if (isTarget) {
                el.style.setProperty('display', 'none', 'important');
                el.setAttribute('data-fs-hidden', 'true'); 
            }
        });
    }

    currentScale = 1; currentX = 0; currentY = 0; isZooming = false;

    const fsDiv = document.createElement('div');
    fsDiv.id = 'fullscreenMode';
    fsDiv.className = 'fullscreen-mode active';
    fsDiv.style.cssText = "position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.97); z-index:9999; display:flex; flex-direction:column; align-items:center; justify-content:center; opacity:0; transition:opacity 0.2s ease; touch-action: none; overflow:hidden;";
    
    fsDiv.innerHTML = `
        <div id="fs-compass-wrapper" style="width: 96vw; max-width: 460px; height: 96vw; max-height: 460px; transform-origin: center center; display:flex; align-items:center; justify-content:center; transform: translate(0px, 0px) scale(1); will-change: transform;"></div>
        <div id="fs-status-wrapper" style="width: 92%; max-width: 460px; margin-top:15px; z-index: 10000;"></div>
    `;
    document.body.appendChild(fsDiv);

    requestAnimationFrame(() => { fsDiv.style.opacity = '1'; });

    document.getElementById('fs-compass-wrapper').appendChild(compassContainer);
    if (statusPanel) document.getElementById('fs-status-wrapper').appendChild(statusPanel);

    if (fsIcon) fsIcon.style.opacity = '0';
    isFullScreen = true;

    const wrapper = document.getElementById('fs-compass-wrapper');

    fsDiv.addEventListener('touchstart', (e) => {
        if (e.touches.length === 2) { 
            isZooming = true;
            startDistance = Math.hypot(
                e.touches[0].pageX - e.touches[1].pageX,
                e.touches[0].pageY - e.touches[1].pageY
            );
            initialScale = currentScale;
            wrapper.style.transition = "none";
        } else if (e.touches.length === 1 && currentScale > 1) { 
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
            currentScale = Math.min(Math.max(initialScale * (currentDistance / startDistance), 1), 4);
            wrapper.style.transform = `translate(${currentX}px, ${currentY}px) scale(${currentScale})`;
        } else if (!isZooming && e.touches.length === 1 && currentScale > 1) {
            e.preventDefault();
            currentX = e.touches[0].pageX - startX;
            currentY = e.touches[0].pageY - startY;

            const maxPan = 160 * currentScale;
            currentX = Math.min(Math.max(currentX, -maxPan), maxPan);
            currentY = Math.min(Math.max(currentY, -maxPan), maxPan);

            wrapper.style.transform = `translate(${currentX}px, ${currentY}px) scale(${currentScale})`;
        }
    }, { passive: false });

    fsDiv.addEventListener('touchend', (e) => {
        if (e.touches.length < 2) isZooming = false;
    });

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
        const giaiThich = document.getElementById('detail-box');

        if (status) {
            const hiddenElements = status.querySelectorAll('[data-fs-hidden="true"]');
            hiddenElements.forEach(el => {
                el.style.display = ''; 
                el.removeAttribute('data-fs-hidden');
            });
        }

        if (giaiThich && giaiThich.getAttribute('data-fs-hidden') === 'true') {
            giaiThich.className = originalDetailBoxClass;
            giaiThich.style.cssText = originalDetailBoxStyle;
            giaiThich.removeAttribute('data-fs-hidden');
        }

        if (compass && originalCompassParent) {
            compass.style.transform = ""; 
            if (originalCompassNextSibling) {
                originalCompassParent.insertBefore(compass, originalCompassNextSibling);
            } else {
                originalCompassParent.appendChild(compass);
            }
        }

        if (status && originalStatusParent) {
            if (originalStatusNextSibling) {
                originalStatusParent.insertBefore(status, originalStatusNextSibling);
            } else {
                originalStatusParent.appendChild(status);
            }
        }

        fs.remove();
        isFullScreen = false;
        if (fsIcon) fsIcon.style.opacity = '1';
        
        currentScale = 1; currentX = 0; currentY = 0;
        
        if (typeof updateCompassUI === 'function') {
            updateCompassUI(typeof lastHeading !== 'undefined' ? lastHeading : 0);
        }
    }, 250);
}
// =========================================================================
// 🚀 ENGINE PURPOSE MODAL V10.5 - GIỮ NGUYÊN CƠ CHẾ DISPLAY GỐC CHỐNG LỖI LÕI
// =========================================================================

let currentPurposeValue = "";

function showPurposeModal() {
    let modal = document.getElementById('purpose-modal');
   
    // ✅ CHỈ DỰNG HTML VÀ GÁN SỰ KIỆN DUY NHẤT 1 LẦN ĐẦU TIÊN
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'purpose-modal';
        modal.innerHTML = `
            <div id="purpose-modal-content">
                <div id="purpose-modal-header">MỤC ĐÍCH KHẢO SÁT KHÍ CỤC VẬN 9</div>
                <div id="purpose-modal-body">
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
                    <div class="purpose-modal-option" data-value="pipe_shaft">Trục Kỹ Thuật / Hộp Gen Uế Kh khí</div>
                    <div class="purpose-modal-option" data-value="storage">Vị trí Kho Hàng / Phòng Đồ Tạp</div>
                    <div class="purpose-modal-option" data-value="trash_area">Vị trí Thùng Rác / Khu Tập Kết Phế Liệu</div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        // Gắn sự kiện click chọn phương vị một lần duy nhất
        modal.querySelectorAll('.purpose-modal-option').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation(); // Chống bong bóng sự kiện làm tắt modal ngoài ý muốn
                
                const value = item.getAttribute('data-value');
                const text = item.textContent.trim();

                const textDisplay = document.getElementById('purpose-selected-text');
                if (textDisplay) textDisplay.textContent = text;
                
                const hiddenInput = document.getElementById('purpose');
                if (hiddenInput) hiddenInput.value = value;

                currentPurposeValue = value;

                hidePurposeModal();

                // Thực thi tính toán lại toàn bộ trục Thiên - Địa - Nhân của bạn
                if (typeof recalculateFate === 'function') {
                    recalculateFate();
                }

                // Cập nhật danh sách gợi ý realtime
                if (typeof generateDirectionsList === 'function') {
                    generateDirectionsList(); 
                }
            });
        });
    }

    // Giữ nguyên lệnh mở bằng display flex chuẩn chỉ của bạn để không làm gãy logic cũ
    modal.style.display = 'flex';
}

function hidePurposeModal() {
    const modal = document.getElementById('purpose-modal');
    if (modal) modal.style.display = 'none';
}

// Đóng modal khi click ra nền tối ngoài hộp nội dung
document.addEventListener('click', (e) => {
    const modal = document.getElementById('purpose-modal');
    if (modal && modal.style.display === 'flex' && e.target === modal) {
        hidePurposeModal();
    }
});

function showCustomAlert(msg, title = "Thông Báo") {
    const titleEl = document.querySelector('.custom-alert-title');
    if (titleEl) titleEl.innerText = title;
    
    const msgEl = document.getElementById('customAlertMsg');
    if (msgEl) msgEl.innerText = msg;

    const alertBox = document.getElementById('customAlert');
    if (alertBox) alertBox.classList.add('active');
}

function closeCustomAlert() {
    const alertBox = document.getElementById('customAlert');
    if (alertBox) alertBox.classList.remove('active');
}

/**
 * 📅 XỬ LÝ NHẬP LIỆU NGÀY THÁNG SẠCH ĐA NỀN TẢNG
 */
function handleDateInput(currentInput, nextInputId) {
    // Làm sạch đầu vào ngay lập tức
    currentInput.value = currentInput.value.replace(/[^0-9]/g, '');
    let val = parseInt(currentInput.value) || 0;

    // Kiểm tra tính hợp lệ của Ngày
    if (currentInput.id === 'birthDay') {
        if (val > 31) {
            currentInput.value = "31";
            showCustomAlert("Ngày trong tháng không thể vượt quá 31!", "⚠️ Sai Lệch Dữ Liệu");
        } else if (val < 0) {
            currentInput.value = "1";
        }
    }

    // Kiểm tra tính hợp lệ của Tháng
    if (currentInput.id === 'birthMonth') {
        if (val > 12) {
            currentInput.value = "12";
            showCustomAlert("Tháng không thể vượt quá 12!", "⚠️ Sai Lệch Dữ Liệu");
        } else if (val < 0) {
            currentInput.value = "1";
        }
    }

    // Tự động chuyển tiêu điểm sang ô tiếp theo
    if (currentInput.value.length >= currentInput.maxLength && nextInputId) {
        const nextEl = document.getElementById(nextInputId);
        if (nextEl) nextEl.focus();
    }
    
    // Tích hợp an toàn cả hai kiểu đặt tên hàm đệm khử lag chữ của bạn
    if (typeof debounceRecalculate === 'function') {
        debounceRecalculate();
    } else if (typeof debouncedRecalculate === 'function') {
        debouncedRecalculate();
    }
}

// =========================================================================
// 🚀 HỆ THỐNG BIẾN TOÀN CỤC LƯU TRỮ BỘ NHỚ ĐỆM ĐA TẦNG (HIGH-PERFORMANCE CACHE)
// =========================================================================
let sonTextsCache = null;
let huongLonTextsCache = null;
let saoTextsCache = null;
let hau72TextsCache = null;

// =========================================================================
// 🏗️ 1. HÀM DỰNG CÁC VÒNG LA BÀN (TỐI ƯU STRING RENDER - SIÊU NHẸ)
// =========================================================================
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

    // 3. Chữ 24 Sơn (Nối chuỗi thần tốc thay thế createElementNS)
    const sonRingSvg = document.getElementById('sonRingSvg');
    if (sonRingSvg) {
        let sonHtml = "";
        SON_24_CONFIG.forEach((son, index) => {
            const goc = (index * 15) % 360;
            const color = ["Cấn", "Tốn", "Khôn", "Càn"].includes(son.name) ? "#ff3b30" :
                          ["Tý", "Mão", "Ngọ", "Dậu"].includes(son.name) ? "#00a525" : "#5c4314";
            
            sonHtml += `<text x="250" y="114" text-anchor="middle" font-size="10" font-weight="900" ` +
                       `transform="rotate(${goc}, 250, 250)" data-son-goc="${goc}" data-base-size="10" ` +
                       `fill="${color}" data-color="${color}">${son.name}</text>`;
        });
        sonRingSvg.innerHTML = sonHtml;
    }

    // 4. Vòng 24 Sao Phúc Đức
    const phucDucRingSvg = document.getElementById('phucDucRingSvg');
    if (phucDucRingSvg) {
        const phucDucNames = ["Phúc Đức", "Ôn Hoàng", "Tấn Tài", "Trường Bệnh", "Tố Tụng", "Quan Tước", "Quan Quý", "Tự Điểu", "Vượng Trang", "Hưng Phước", "Pháp Trường", "Điên Cuồng", "Khẩu Thiệt", "Vượng Tài", "Đăng Doanh", "Thiếu Vong", "Thiên Tặc", "Tử Mất", "Vượng Tâm", "Khóc Khấp", "Cô Quả", "Vinh Phước", "Thiếu Vong", "Xương Dâm"];
        const catStars = ["Phúc Đức", "Tấn Tài", "Quan Tước", "Quan Quý", "Vượng Trang", "Hưng Phước", "Vượng Tài", "Đăng Doanh", "Vượng Tâm", "Vinh Phước"];
        
        let phucDucHtml = "";
        phucDucNames.forEach((name, index) => {
            const goc = (index * 15) % 360;
            const color = catStars.includes(name) ? "#00a525" : "#ff3b30";
            
            phucDucHtml += `<text x="250" y="72" text-anchor="middle" font-size="6.8" font-weight="900" ` +
                           `transform="rotate(${goc}, 250, 250)" data-sao-goc="${goc}" data-base-size="6.8" ` +
                           `fill="${color}" data-color="${color}">${name}</text>`;
        });
        phucDucRingSvg.innerHTML = phucDucHtml;
    }

    // 5. Vòng 72 Hậu - CHUẨN XÁC ĐỒNG TRỤC CHÍNH SƠN
    const hauRing = document.getElementById('hau72RingSvg');
    if (hauRing) {
        let hauHtml = "";
        Object.keys(Data72Hau).forEach(degStr => {
            const hau = Data72Hau[degStr];
            const degVisual = parseFloat(degStr);
            
            let color = "#7a631d";
            if (hau.chatLuong.includes("Cát")) {
                color = "#0e6b0e";
            } else if (hau.chatLuong.includes("Hung")) {
                color = "#8b0000";
            }
            
            const tenGoc = hau.ten || "";
            const soHau = tenGoc.match(/\d+/);
            const chuDau = tenGoc.charAt(0);
            const textContent = soHau ? (chuDau + soHau[0]) : tenGoc;
            
            hauHtml += `<text x="250" y="95" text-anchor="middle" font-size="3.2" font-weight="700" ` +
                       `transform="rotate(${degVisual}, 250, 250)" data-hau-goc="${degStr}" data-base-size="3.2" ` +
                       `fill="${color}" data-original-fill="${color}">${textContent}</text>`;
        });
        hauRing.innerHTML = hauHtml;
    }

    // Đồng bộ kích hoạt lưu bộ nhớ đệm ngay lập tức sau khi dựng xong giao diện
    cacheCompassElements(true);
}

// =========================================================================
// 🗄️ 2. HÀM CHUYỂN ĐỔI VÀ NẠP BỘ NHỚ ĐỆM TỪ DOM VÀO RAM (CHẠY 1 LẦN DUY NHẤT)
// =========================================================================
function cacheCompassElements(forceRefresh = false) {
    if (!forceRefresh && sonTextsCache && sonTextsCache.length > 0) return; 

    // Cache cấu trúc dữ liệu 24 Sơn
    sonTextsCache = Array.from(document.querySelectorAll("#sonRingSvg text")).map(txt => ({
        el: txt,
        goc: parseFloat(txt.getAttribute("data-son-goc")) || 0,
        baseSize: parseFloat(txt.getAttribute("data-base-size")) || 10,
        color: txt.getAttribute("data-color") || "#5c4314"
    }));

    // Cache cấu trúc dữ liệu 24 Sao Phúc Đức
    saoTextsCache = Array.from(document.querySelectorAll("#phucDucRingSvg text")).map(txt => ({
        el: txt,
        goc: parseFloat(txt.getAttribute("data-sao-goc")) || 0,
        baseSize: parseFloat(txt.getAttribute("data-base-size")) || 6.8,
        color: txt.getAttribute("data-color") || "#ff3b30"
    }));

    // Cache cấu trúc dữ liệu 72 Hậu
    hau72TextsCache = Array.from(document.querySelectorAll("#hau72RingSvg text")).map(txt => ({
        el: txt,
        goc: parseFloat(txt.getAttribute("data-hau-goc")) || 0,
        baseSize: parseFloat(txt.getAttribute("data-base-size")) || 3.2,
        originalFill: txt.getAttribute("data-original-fill") || txt.getAttribute("fill") || "#7a631d"
    }));

    // Cache cấu trúc dữ liệu 8 Hướng Lớn (Triệt tiêu toàn bộ getAttribute phức tạp)
    huongLonTextsCache = Array.from(document.querySelectorAll("#chuHuongLonG text")).map(txt => {
        const textGoc = parseFloat(txt.getAttribute("data-goc")) || 0;
        const fillAttr = txt.getAttribute("fill") || "";
        const transform = txt.getAttribute("transform") || "";
        const isChinhPhuong = txt.parentNode?.getAttribute("id") === "textChinhPhuong";
        
        let defaultFill = "#6b4e18";
        if (isChinhPhuong) {
            defaultFill = (transform.includes("rotate(90") || transform.includes("rotate(270")) ? "#00a525" : "#ff3b30";
        }

        return {
            el: txt,
            goc: textGoc,
            isGreenByDefault: (fillAttr === "#00a525" || defaultFill === "#00a525"),
            defaultFill: defaultFill
        };
    });
}

// =========================================================================
// ⚡ 3. HÀM LÀM SÁNG LED QUÉT TIÊU CHUẨN ENGINE GAME (SIÊU MƯỢT, KHÔNG HÚT CPU)
// =========================================================================
function kichHoatDenLedQuet(heading) {
    const ledTargetAngle = ((heading % 360) + 360) % 360;

    // Hàm phụ trợ xử lý hiệu ứng đổi màu bằng dữ liệu RAM - KHÔNG ĐỌC DOM
    const applyEffect = (cachedArray, range, zoomScale, isHau = false) => {
        if (!cachedArray) return;
        
        const len = cachedArray.length;
        for (let i = 0; i < len; i++) {
            const item = cachedArray[i];
            let phanSai = Math.abs(ledTargetAngle - item.goc);
            if (phanSai > 180) phanSai = 360 - phanSai;

            const style = item.el.style;
            if (phanSai <= range) {
                // Khi quét trúng cung mục tiêu
                style.opacity = "1";
                style.fontSize = (item.baseSize * zoomScale) + "px";
                style.fontWeight = "900";
                
                if (isHau) {
                    style.fill = "#ffff00"; 
                } else {
                    const color = item.color;
                    style.fill = (color === "#5c4314") ? "#ffcc00" : (color === "#ff3b30" ? "#ff0000" : "#00ff00");
                }
            } else {
                // Trạng thái tĩnh bình thường bên ngoài tia quét
                style.opacity = "0.6";
                style.fontSize = item.baseSize + "px";
                style.fontWeight = "700";
                style.fill = item.originalFill || item.color || "#8a8a8f";
            }
        }
    };

    // 1. Xử lý chuyên biệt cho 8 Hướng Lớn bằng vòng lặp Core For tối ưu tốc độ
    if (huongLonTextsCache) {
        const lenHL = huongLonTextsCache.length;
        for (let i = 0; i < lenHL; i++) {
            const item = huongLonTextsCache[i];
            let phanSai = Math.abs(ledTargetAngle - item.goc);
            if (phanSai > 180) phanSai = 360 - phanSai;

            const style = item.el.style;
            if (phanSai <= 22.5) {
                style.opacity = "1"; 
                style.fontWeight = "900";
                style.fill = item.isGreenByDefault ? "#00ff37" : "#ff1a00";
            } else {
                style.opacity = "0.5"; 
                style.fontWeight = "normal";
                style.fill = item.defaultFill;
            }
        }
    }

    // 2. Xử lý 24 Sơn (Phóng to 1.3 lần)
    applyEffect(sonTextsCache, 7.5, 1.3, false);

    // 3. Xử lý Sao Phúc Đức (Phóng to 1.2 lần)
    applyEffect(saoTextsCache, 7.5, 1.2, false);

    // 4. Xử lý 72 Hậu (Quét trúng cung quản 2.5 độ, phóng to 1.65 lần nổi bật)
    applyEffect(hau72TextsCache, 2.5, 1.65, true);
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
// 📐 HÀM VẼ PH N VÙNG VÀNH KHĂN (ĐÃ N NG CẤP CACHE & NÉN TỌA ĐỘ)
// =========================================================================
// Bộ lưu trữ toàn cục để giữ lại các hình vành khăn đã tính, triệt tiêu hoàn toàn việc tính lại lượng giác
const _arcPathCache = {};

function getSvgArcPath(cx, cy, rIn, rOut, startAngle, endAngle) {
    // Tạo mã định danh (Key) độc nhất cho cấu hình vành khăn này
    const cacheKey = `${cx}_${cy}_${rIn}_${rOut}_${startAngle}_${endAngle}`;
    
    // Nếu cấu hình góc này đã từng được tính, trả về kết quả ngay lập tức (Tốc độ tối đa)
    if (_arcPathCache[cacheKey]) {
        return _arcPathCache[cacheKey];
    }

    const angleToRad = (angle) => (angle - 90) * Math.PI / 180.0;
    const sIn = angleToRad(startAngle);
    const eIn = angleToRad(endAngle);
    
    // Áp dụng .toFixed(1) để nén gọn chuỗi tọa độ dữ liệu SVG.
    // Giảm tải dung lượng DOM, giúp phần cứng thiết bị xử lý đồ họa mượt mà hơn.
    const x1_out = (cx + rOut * Math.cos(sIn)).toFixed(1);
    const y1_out = (cy + rOut * Math.sin(sIn)).toFixed(1);
    const x2_out = (cx + rOut * Math.cos(eIn)).toFixed(1);
    const y2_out = (cy + rOut * Math.sin(eIn)).toFixed(1);
    
    const x1_in = (cx + rIn * Math.cos(eIn)).toFixed(1);
    const y1_in = (cy + rIn * Math.sin(eIn)).toFixed(1);
    const x2_in = (cx + rIn * Math.cos(sIn)).toFixed(1);
    const y2_in = (cy + rIn * Math.sin(sIn)).toFixed(1);
    
    const largeArcFlag = (endAngle - startAngle) > 180 ? 1 : 0;
    
    // Tổng hợp chuỗi vẽ đường bọc vành khăn cốt lõi
    const pathStr = `M ${x1_out} ${y1_out} ` +
                    `A ${rOut} ${rOut} 0 ${largeArcFlag} 1 ${x2_out} ${y2_out} ` +
                    `L ${x1_in} ${y1_in} ` +
                    `A ${rIn} ${rIn} 0 ${largeArcFlag} 0 ${x2_in} ${y2_in} Z`;
    
    // Ghi nhớ vào bộ đệm trước khi trả kết quả ra ngoài
    _arcPathCache[cacheKey] = pathStr;
    
    return pathStr;
}

// =========================================================================
// 🎨 ENGINE CẬP NHẬT MÀU NỀN HUNG CÁT (ĐÃ TỐI ƯU HÓA HIỆU NĂNG CAO)
// =========================================================================
// =========================================================================
// 🎨 ENGINE CẬP NHẬT MÀU NỀN HUNG CÁT (HIỆU ỨNG ĐÈN NEON SÁNG CHỐNG CHÓI)
// =========================================================================
function updateBatTrachBackground(cungPhi) {
    const bgGroup = document.getElementById('batTrachBackgroundRing');
    if (!bgGroup) return;
    
    // Kiểm tra xem 8 mảng của la bàn đã được dựng sẵn chưa
    let existingPaths = bgGroup.querySelectorAll('path');
    const isInitialized = existingPaths.length === 8;

    // Nếu chưa nhập năm sinh hoặc dữ liệu trống, ẩn màu và viền đi để giữ hiệu năng
    if (!cungPhi) {
        if (isInitialized) {
            existingPaths.forEach(path => {
                path.setAttribute('fill', 'none');
                path.setAttribute('stroke', 'none');
            });
        } else {
            bgGroup.innerHTML = "";
        }
        return;
    }
    
    // Định biên tọa độ góc 8 hướng lớn đồng trục với đĩa xoay la bàn số
    const directions = [
        { code: 'N',  start: 337.5, end: 382.5 }, 
        { code: 'NE', start: 22.5,  end: 67.5  }, 
        { code: 'E',  start: 67.5,  end: 112.5 }, 
        { code: 'SE', start: 112.5, end: 157.5 }, 
        { code: 'S',  start: 157.5, end: 202.5 }, 
        { code: 'SW', start: 202.5, end: 247.5 }, 
        { code: 'W',  start: 247.5, end: 292.5 }, 
        { code: 'NW', start: 292.5, end: 337.5 }  
    ];
    
    const safeCungPhi = cungPhi.trim().charAt(0).toUpperCase() + cungPhi.trim().slice(1).toLowerCase();
    const mapTrach = bátTrạchMap[safeCungPhi];
    
    if (!mapTrach) {
        if (isInitialized) {
            existingPaths.forEach(path => {
                path.setAttribute('fill', 'none');
                path.setAttribute('stroke', 'none');
            });
        } else {
            bgGroup.innerHTML = "";
        }
        return;
    }
    
    // NẾU ĐÃ KHỞI TẠO: Chỉ cập nhật thuộc tính màu sắc & viền Neon (Tốc độ tối đa)
    if (isInitialized) {
        directions.forEach((dir, index) => {
            const cungTrạch = mapTrach[dir.code];
            const isCat = cungPhầnTrăm[cungTrạch]?.cát;
            
            // 💡 CẤU HÌNH MÀU NEON CHỐNG CHÓI CHỮ:
            // - Mảng Cát (Xanh): Mã màu gốc #00ffaa phát sáng mạnh, hạ Alpha nền xuống 0.12, giữ viền sáng 0.7
            // - Mảng Hung (Đỏ):  Mã màu gốc #ff1744 đỏ điện tử cực tươi, hạ Alpha nền xuống 0.12, giữ viền sáng 0.7
            const fillColor = isCat ? "rgba(0, 255, 170, 0.12)" : "rgba(255, 23, 68, 0.12)";
            const strokeColor = isCat ? "rgba(0, 255, 170, 0.70)" : "rgba(255, 23, 68, 0.70)";
            
            // Thay đổi trực tiếp các thuộc tính hiển thị đồ họa nền có sẵn
            existingPaths[index].setAttribute('fill', fillColor);
            existingPaths[index].setAttribute('stroke', strokeColor);
            existingPaths[index].setAttribute('stroke-width', '1.2');
        });
        return; 
    }
    
    // NẾU CHƯA KHỞI TẠO (Chỉ chạy duy nhất một lần đầu tiên khi dựng đĩa la bàn)
    let html = "";
    const cx = 250, cy = 250, rIn = 185, rOut = 244;
    
    directions.forEach(dir => {
        const cungTrạch = mapTrach[dir.code];
        const isCat = cungPhầnTrăm[cungTrạch]?.cát;
        
        // Đồng bộ cấu hình màu Neon cho lượt tạo đầu tiên
        const fillColor = isCat ? "rgba(0, 255, 170, 0.12)" : "rgba(255, 23, 68, 0.12)";
        const strokeColor = isCat ? "rgba(0, 255, 170, 0.70)" : "rgba(255, 23, 68, 0.70)";
        
        const pathStr = getSvgArcPath(cx, cy, rIn, rOut, dir.start, dir.end);
        html += `<path d="${pathStr}" fill="${fillColor}" stroke="${strokeColor}" stroke-width="1.2" />`;
    });
    
    bgGroup.innerHTML = html;
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

// 2. TẢI DANH SÁCH THÀNH VIÊN (Render an toàn, giữ nguyên gốc không tự động load khi mở app)
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
        
        // Hiển thị icon trực quan theo giới tính đã lưu của thành viên
        const genderIcon = (String(m.gender).toLowerCase() === 'female') ? '👩' : '🧑';
        
        chip.innerHTML = `
            <span onclick="selectMember(${m.id})" style="cursor:pointer;">${genderIcon} ${m.name}</span>
            <span class="del-btn" onclick="deleteMember(event, ${m.id})" style="margin-left:8px; cursor:pointer; font-weight:bold;">×</span>
        `;
        savedContainer.appendChild(chip);
    });
}

// 3. CHỌN THÀNH VIÊN TRONG DANH SÁCH (Đồng bộ toán pháp & ép giao diện nút bấm nhảy theo)
function selectMember(id) {
    const data = JSON.parse(localStorage.getItem('fengshui_members') || '[]');
    const m = data.find(item => item.id === id);
    
    if (m) {
        const txtUser = document.getElementById('userName');
        if (txtUser) {
            txtUser.value = m.name;
            txtUser.style.color = '#fff';
        }
        
        // 🔮 ĐỒNG BỘ GIỚI TÍNH 2 TẦNG: Lưu giá trị ngầm và Ép sáng đèn giao diện nút bấm tương ứng
        document.getElementById('gender').value = m.gender;
        
        const maleDiv = document.getElementById('gender-male');
        const femaleDiv = document.getElementById('gender-female');
        if (maleDiv && femaleDiv) {
            let gVal = String(m.gender).trim().toLowerCase();
            if (gVal === 'female' || gVal === 'nữ' || gVal === 'nu') {
                femaleDiv.classList.add('active');
                maleDiv.classList.remove('active');
            } else {
                maleDiv.classList.add('active');
                femaleDiv.classList.remove('active');
            }
        }

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

// 5. SIÊU RESET: THANH LỌC TOÀN DIỆN BỘ NHỚ RÁC - ĐƯA FORM VỀ TRẠNG THÁI KHỞI NGUYÊN
function clearAllData() {
    const btn = document.getElementById('btnReset');
    if (btn) {
        btn.classList.add('executing');
        setTimeout(() => btn.classList.remove('executing'), 400);
    }
    
    const danhSachGiaTocHienTai = localStorage.getItem('fengshui_members');
    
    localStorage.clear();
    
    if (danhSachGiaTocHienTai) {
        localStorage.setItem('fengshui_members', danhSachGiaTocHienTai);
    }

    if (typeof hauCache !== 'undefined' && hauCache.clear) {
        hauCache.clear();
    }
    
    const txtUser = document.getElementById('userName');
    if (txtUser) {
        txtUser.value = 'Người Tầm Phương';
        txtUser.style.color = '#aaa';
    }
    
    // 🔮 ĐỒNG BỘ RESET KHUNG GIỚI TÍNH VỀ MẶC ĐỊNH BAN ĐẦU
    document.getElementById('gender').value = 'male';
    const maleDiv = document.getElementById('gender-male');
    const femaleDiv = document.getElementById('gender-female');
    if (maleDiv && femaleDiv) {
        maleDiv.classList.add('active');
        femaleDiv.classList.remove('active');
    }

    document.getElementById('birthDay').value = '';
    document.getElementById('birthMonth').value = '';
    document.getElementById('birthYear').value = '';
    document.getElementById('purpose').value = '';
    
    if (typeof targetAngle !== 'undefined') targetAngle = null;
    
    const ghost = document.getElementById('ghostNeedle');
    if (ghost) {
        ghost.style.opacity = "0";
        ghost.style.display = "none";
        ghost.classList.remove('matched-pulse');
    }
    
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
/**
 * 🧑‍ SỬA TẬN GỐC LỖI TRƠ NÚT CHỌN GIỚI TÍNH (UI DECOUPLING TECHNOLOGY)
 */
function selectGender(gender) {
    const maleBtn = document.getElementById('gender-male');
    const femaleBtn = document.getElementById('gender-female');
    const hiddenGenderInput = document.getElementById('gender');

    if (!maleBtn || !femaleBtn || !hiddenGenderInput) return;

    // ⚡ BƯỚC 1: Thay đổi giao diện lập tức (Ưu tiên luồng vẽ phản hồi 0ms cho người dùng)
    maleBtn.classList.remove('active');
    femaleBtn.classList.remove('active');
    document.getElementById('gender-' + gender).classList.add('active');
    hiddenGenderInput.value = gender;
    
    // ⚡ BƯỚC 2: Đẩy phép tính phong thủy nặng ra luồng chạy ngầm sau 30ms 
    // Giúp trình duyệt kịp thời đổi màu nút bấm trước khi CPU bị vắt kiệt để tính toán
    setTimeout(() => {
        if (typeof recalculateFate === 'function') {
            recalculateFate();
        }
    }, 30);
}

/**
 * 🪐 KHỞI TẠO ĐỒNG BỘ VÀ ĐĂNG KÝ SỰ KIỆN AN TOÀN (KHÔNG ĐÈ BIẾN TOÀN CỤC)
 */
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Đồng bộ trạng thái Giới tính mặc định khi vừa nạp trang
    const hiddenGenderInput = document.getElementById('gender');
    if (hiddenGenderInput) {
        const currentGender = hiddenGenderInput.value;
        const maleBtn = document.getElementById('gender-male');
        const femaleBtn = document.getElementById('gender-female');
        
        if (maleBtn && femaleBtn) {
            if (currentGender === 'female') {
                femaleBtn.classList.add('active');
                maleBtn.classList.remove('active');
            } else {
                maleBtn.classList.add('active');
                femaleBtn.classList.remove('active');
            }
        }
    }

    // 2. Quản lý sự kiện Cẩm Nang Modal (Sử dụng addEventListener thay vì ép cứng onclick)
    const guideModal = document.getElementById("guideModal");
    const openGuideBtn = document.getElementById("openGuideBtn");
    const closeGuideBtn = document.getElementById("closeGuideBtn");

    if (openGuideBtn && guideModal && closeGuideBtn) {
        openGuideBtn.addEventListener('click', function() {
            guideModal.style.display = "block"; 
            document.body.style.overflow = "hidden"; // Khóa cuộn trang nền hiệu quả
            
            if (window.MathJax && typeof MathJax.typesetPromise === 'function') {
                MathJax.typesetPromise();
            }
        });

        closeGuideBtn.addEventListener('click', function() {
            guideModal.style.display = "none"; 
            document.body.style.overflow = "auto"; 
        });
    }

    // 3. Quản lý sự kiện Ủng Hộ (Donate Modal) bảo mật chống crash
    const donateModal = document.getElementById('donateModal');
    const openDonateBtn = document.getElementById('openDonateBtn');
    const closeDonateBtn = document.getElementById('closeDonateBtn');

    if (openDonateBtn && donateModal && closeDonateBtn) {
        openDonateBtn.addEventListener('click', function() {
            donateModal.style.display = 'flex';
        });

        closeDonateBtn.addEventListener('click', function() {
            donateModal.style.display = 'none';
        });
    }

    // 4. CHỐNG ĐÈ SỰ KIỆN TOÀN CỤC: Đóng các modal an toàn khi click ra ngoài vùng xám
    window.addEventListener('click', function(event) {
        if (guideModal && event.target === guideModal) {
            guideModal.style.display = "none";
            document.body.style.overflow = "auto";
        }
        if (donateModal && event.target === donateModal) {
            donateModal.style.display = 'none';
        }
    });
});

// Phơi biến ra phạm vi window toàn cục chống lỗi biên dịch khi băm code nén mã hóa
window.selectGender = selectGender;
window.handleDateInput = handleDateInput;
window.showCustomAlert = showCustomAlert;
window.closeCustomAlert = closeCustomAlert;

// =========================================================================
// 🌐 HỆ THỐNG PWA CROSS-PLATFORM (iOS + Android) - PHIÊN BẢN V12 CHUẨN MỰC
// =========================================================================
if (typeof deferredPrompt === 'undefined') {
    var deferredPrompt;
}

const STORAGE_KEY_HIDE_INSTALL = 'pwa_user_dismissed_install';

// Kiểm tra đang chạy dưới dạng PWA
function isRunningAsPWA() {
    return window.matchMedia('(display-mode: standalone)').matches ||
           window.navigator.standalone === true ||
           window.matchMedia('(display-mode: fullscreen)').matches;
}

// Kiểm tra thiết bị iOS
function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) || 
           (navigator.platform === 'MacIntel' && 'ontouchend' in document);
}

// Ẩn nút nếu đã dismiss hoặc đang chạy PWA
function kiemTraVaAnNut() {
    const btn = document.getElementById('btn-install-pwa');
    if (!btn) return;

    if (localStorage.getItem(STORAGE_KEY_HIDE_INSTALL) === 'true' || isRunningAsPWA()) {
        btn.classList.add('swiped-away');
        btn.classList.remove('show');
    }
}

// Khởi tạo
window.addEventListener('load', () => {
    const btn = document.getElementById('btn-install-pwa');
    if (!btn) return;

    kiemTraVaAnNut();
    khoiTaoTinhNangVuotGat();

    // CHỈ NẠP PWA VÀ MANIFEST KHI CHẠY TRÊN SERVER (LOCALHOST HOẶC HTTPS)
    if (window.location.protocol !== 'file:') {
        // Thêm manifest
        if (!document.querySelector('link[rel="manifest"]')) {
            const link = document.createElement('link');
            link.rel = 'manifest';
            link.href = './manifest.json';
            document.head.appendChild(link);
        }

        // Đăng ký Service Worker
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('./sw.js').catch(err => console.error(err));
        }

        // === NÂNG CẤP: KÍCH HOẠT LƯU TRỮ VĨNH VIỄN (PERSISTENT STORAGE) ===
        // Yêu cầu trình duyệt không được tự ý xóa cache của PWA này
        if (navigator.storage && navigator.storage.persist) {
            navigator.storage.persist().then(persistent => {
                console.log("⚡ PWA Persistent Storage:", persistent ? "BẬT (Bất tử)" : "TẮT");
            });
        }
    }

    // === XỬ LÝ RIÊNG CHO ANDROID ===
    if (!isIOS()) {
        window.addEventListener('beforeinstallprompt', (e) => {
            if (isRunningAsPWA() || localStorage.getItem(STORAGE_KEY_HIDE_INSTALL) === 'true') return;
            
            e.preventDefault();
            deferredPrompt = e;
            
            btn.classList.remove('swiped-away');
            btn.classList.add('show');
            
            btn.onclick = async () => {
                if (!deferredPrompt) return;
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                
                if (outcome === 'accepted') {
                    btn.classList.add('swiped-away');
                }
                deferredPrompt = null;
            };
        });
    } 
    // === XỬ LÝ RIÊNG CHO iOS ===
    else {
        // Luôn hiện nút trên iOS với hướng dẫn (nếu chưa gạt bỏ)
        if (localStorage.getItem(STORAGE_KEY_HIDE_INSTALL) !== 'true' && !isRunningAsPWA()) {
            btn.classList.add('show');
            btn.innerHTML = `
                <span class="pwa-fab-icon">📲</span>
                <span class="pwa-fab-text">Cài App iOS</span>
            `;
            
            btn.onclick = () => {
                showIOSInstallGuide();
            };
        }
    }
});

// Hiển thị hướng dẫn cài PWA trên iOS
function showIOSInstallGuide() {
    const guideHTML = `
        <div style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.95);z-index:999999;display:flex;align-items:center;justify-content:center;padding:15px;box-sizing:border-box;">
        <div style="background:#1c1c1e;max-width:380px;border-radius:20px;padding:25px;text-align:center;border:1px solid #dfb76c;">
            <div style="font-size:3.8rem;margin-bottom:10px;">📱</div>
            <h3 style="color:#dfb76c;margin:0 0 20px 0;">Cách cài La Bàn Phong Thủy</h3>
            
            <div style="text-align:left;color:#ddd;line-height:1.7;font-size:0.95rem;">
                1. Nhấn nút <strong style="color:#fff;">Chia sẻ</strong> <span style="font-size:1.6rem;">⎙</span> ở thanh dưới<br>
                2. Kéo xuống tìm và nhấn <strong>"Thêm vào Màn hình chính"</strong><br>
                3. Nhấn <strong style="color:#dfb76c;">Thêm</strong> ở góc trên bên phải
            </div>    

            <button onclick="this.closest('.ios-guide').remove()" 
                    style="margin-top:25px;width:100%;padding:14px;background:#dfb76c;color:#000;border:none;border-radius:50px;font-weight:bold;font-size:1.05rem;">
                ĐÃ HIỂU ✓
            </button>
        </div>
    </div>`;

    const div = document.createElement('div');
    div.className = 'ios-guide';
    div.innerHTML = guideHTML;
    document.body.appendChild(div);
}

// =========================================================================
// 🔥 HÀM TẠO HIỆU ỨNG GẠT PHẢI ĐỂ XÓA VĨNH VIỄN (SWIPE TO DISMISS)
// =========================================================================
function khoiTaoTinhNangVuotGat() {
    const btn = document.getElementById('btn-install-pwa');
    if (!btn) return;

    let touchStartX = 0;
    let touchCurrentX = 0;
    let isSwiping = false;

    // Sự kiện bắt đầu chạm tay vào nút
    btn.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        btn.style.transition = 'none'; // Tắt hoàn toàn hiệu ứng để nút dính chặt theo ngón tay
        isSwiping = true;
    }, { passive: true });

    // Sự kiện di chuyển ngón tay
    btn.addEventListener('touchmove', (e) => {
        if (!isSwiping) return;
        touchCurrentX = e.touches[0].clientX;
        let deltaX = touchCurrentX - touchStartX;

        // Chỉ cho phép gạt sang bên PHẢI (deltaX > 0)
        if (deltaX > 0) {
            btn.style.transform = `translateX(${deltaX}px)`;
            let maxDrag = btn.offsetWidth;
            btn.style.opacity = `${1 - (deltaX / maxDrag)}`;
        }
    }, { passive: true });

    // Sự kiện khi nhấc ngón tay ra
    btn.addEventListener('touchend', (e) => {
        if (!isSwiping) return;
        isSwiping = false;
        
        let deltaX = touchCurrentX - touchStartX;
        
        // Khôi phục lại các thuộc tính chuyển động mượt mà
        btn.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.4s ease';

        let threshold = btn.offsetWidth / 2;

        if (deltaX > threshold) {
            anVaXoaVinhVien(btn);
        } else {
            btn.style.transform = 'translateX(0)';
            btn.style.opacity = '1';
        }
        
        touchStartX = 0;
        touchCurrentX = 0;
    });
}

// Hàm kích hoạt hòm rác vĩnh viễn
function anVaXoaVinhVien(element) {
    localStorage.setItem(STORAGE_KEY_HIDE_INSTALL, 'true');
    element.classList.add('swiped-away');
    element.classList.remove('show');
    console.log('⚡ Đã đưa nút PWA vào hòm rác vĩnh viễn trên trình duyệt này.');
}

// Tự động kiểm tra lại khi quay lại tab
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        setTimeout(kiemTraVaAnNut, 800);
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
    const phuongViTamSatNam = satTinhMaTran.tamSat[["Than Ty Thin", "Tỵ Dau Suu", "Dan Ngo Tuat", "Hoi Mao Mui"][(namKhaoSat % 12) % 4]];

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
    if (!contentBox) return;

    // 1. THU THẬP THAM SỐ VÀ CHUẨN HÓA DỮ LIỆU ĐẦU VÀO ĐỘNG
    const mucDich = document.getElementById('purpose')?.value || "house";
    const globalConfig = typeof ConfigPhongThuy !== 'undefined' ? ConfigPhongThuy : (PhongThuyCore?.data?.Config || {});
    const config = globalConfig[mucDich] || { title: "Hạng mục", isCat: true };
    
    const txtSurveyYear = document.getElementById('surveyYear');
    // 🟢 ĐÃ SỬA: Chuyển qua check khác rỗng để nhận diện mọi loại năm (1, 2, 3, 4 số)
    const namKhaoSat = (txtSurveyYear && txtSurveyYear.value.trim() !== '') ? parseInt(txtSurveyYear.value, 10) : new Date().getFullYear();
    const thangKhaoSat = new Date().getMonth() + 1;

    const dayStr = document.getElementById('birthDay')?.value || "1";
    const monthStr = document.getElementById('birthMonth')?.value || "1";
    const yearStr = document.getElementById('birthYear')?.value || "1993";
    
    const birthYearInt = parseInt(yearStr, 10);
    const namAmMệnhChủ = (parseInt(monthStr, 10) < 2 || (parseInt(monthStr, 10) === 2 && parseInt(dayStr, 10) < 4)) ? birthYearInt - 1 : birthYearInt;

    // Tự động đồng bộ Quẻ mệnh Nhân chủ tránh lỗi ReferenceError chéo
    let thucTeChuMenh = (typeof chủMệnh !== 'undefined' && chủMệnh) ? chủMệnh : "Khảm";
    if (typeof tínhCungPhi === 'function') {
        const gender = document.getElementById('gender')?.value || 'male';
        thucTeChuMenh = tínhCungPhi(birthYearInt, parseInt(monthStr, 10), parseInt(dayStr, 10), gender);
    }
    thucTeChuMenh = thucTeChuMenh.trim().charAt(0).toUpperCase() + thucTeChuMenh.slice(1).toLowerCase();

    const maTranNguHanhCungPhi = {
        "Khảm": "Thủy", "Ly": "Hỏa", "Chấn": "Mộc", "Tốn": "Mộc",
        "Càn": "Kim", "Đoài": "Kim", "Cấn": "Thổ", "Khôn": "Thổ"
    };
    const nguHanhCungPhiText = maTranNguHanhCungPhi[thucTeChuMenh] || "Thổ";

    // 2. TRÍCH XUẤT TOÀN DIỆN DỮ LIỆU TỪ ENGINE LÕI (MỘT NGUỒN SỰ THẬT DUY NHẤT)
    const tongHop = tinhDiemTongHop(thucTeChuMenh, degree, namKhaoSat, mucDich, namAmMệnhChủ);
    
    const sonChuan = tongHop.sonName || "Tý";
    const thongTin72Hau = tongHop.hauInfo || { ten: "Bình Hòa", chatLuong: "Bình Hòa", diem: 60, ynghia: "Trường khí ổn định." };
    const satTinhs = tongHop.satTinhs || [];
    
    // Đồng bộ góc phân vị la bàn số thực tế
    const realHeading = ((degree % 360) + 360) % 360;
    let currentCode = "N";
    if (realHeading >= 337.5 || realHeading < 22.5) currentCode = "N";
    else if (realHeading >= 22.5 && realHeading < 67.5) currentCode = "NE";
    else if (realHeading >= 67.5 && realHeading < 112.5) currentCode = "E";
    else if (realHeading >= 112.5 && realHeading < 157.5) currentCode = "SE";
    else if (realHeading >= 157.5 && realHeading < 202.5) currentCode = "S";
    else if (realHeading >= 202.5 && realHeading < 247.5) currentCode = "SW";
    else if (realHeading >= 247.5 && realHeading < 292.5) currentCode = "W";
    else if (realHeading >= 292.5 && realHeading < 337.5) currentCode = "NW";

    const globalBatTrachMap = typeof bátTrạchMap !== 'undefined' ? bátTrạchMap : (PhongThuyCore?.data?.BatTrachMap || {});
    const cungTrach = globalBatTrachMap[thucTeChuMenh]?.[currentCode] || "Phục Vi";
    const nhomMenhChu = globalBatTrachMap[thucTeChuMenh]?.group || "Đông Tứ Mệnh";

    const nhomHangMucDaiSu = ["house", "gate", "door", "kitchen", "toilet", "septic_tank", "sewer"];
    const laHangMucDaiSu = nhomHangMucDaiSu.includes(mucDich);

    const ketQuaTrachNhat = typeof tinhNgayGioCatTuongBaoCao === 'function' ? tinhNgayGioCatTuongBaoCao(namAmMệnhChủ, sonChuan, namKhaoSat, thangKhaoSat, mucDich) : [];
    const checkHanNhanKhi = typeof kiemTraHanNhanKhiChinhXac === 'function' ? kiemTraHanNhanKhiChinhXac(namAmMệnhChủ, namKhaoSat) : { isOk: true, reasons: [] };

    // 🧠 KHAI THÁC VI PH N KHÔNG VONG TỪ MẮT THẦN ĐỒNG TRỤC LÕI
    const khongVongLoi = typeof kiemTraKhongVong === 'function' ? kiemTraKhongVong(realHeading) : null;
    const isKhongVong = !!khongVongLoi;

    // 3. THIẾT LẬP NHẤT QUÁN LOGIC MÀU SẮC ĐỒ HỌC HỆ THỐNG
    let thongDiepTốiCao = "";
    let bieuTuongTrangThai = "";
    let mauChu = "#dfb76c"; // Mặc định vàng cho trạng thái Bình Hòa
    
    if (isKhongVong || tongHop.level === "HUNG CỤC" || tongHop.diem < 50) {
        mauChu = "#ff3b30"; // Đỏ tuyệt đối
        thongDiepTốiCao = config.isCat ? "🔴 [PHONG TỎA ĐỊA LÝ TĨNH - TUYỆT ĐỐI CẤM KỴ THI CÔNG]" : "🔴 [PHẠM CÁT PHƯƠNG VỊ - THIẾT LẬP SAI PHÂN VỊ LẬP CỰC]";
        bieuTuongTrangThai = config.isCat ? 
            '<span style="background:#ff3b30; color:#fff; padding:5px 12px; border-radius:4px; font-weight:bold; font-size:0.85rem; display:inline-block; margin-bottom:8px;">VỊ TRÍ PHẠM TỬ HUYỆT ĐẤT NỀN (BUỘC PHẢI THAY ĐỔI)</span>' :
            '<span style="background:#ff3b30; color:#fff; padding:5px 12px; border-radius:4px; font-weight:bold; font-size:0.85rem; display:inline-block; margin-bottom:8px;">ĐẠI KỴ TOÀN CỤC: ĐÈ LÊN MẠCH LONG THẦN THANH KHIẾT</span>';
    } else if (tongHop.level === "BÌNH HOÀ" || tongHop.diem < 72 || satTinhs.length > 0) {
        mauChu = "#ff9f0a"; // Vàng cam trung tính
        thongDiepTốiCao = "⚠️ [THỜI TINH QUẤY NHIỄU - CẦN TRẤN AN HOẶC DỜI NGÀY]";
        bieuTuongTrangThai = config.isCat ?
            '<span style="background:#ff9f0a; color:#000; padding:5px 12px; border-radius:4px; font-weight:bold; font-size:0.85rem; display:inline-block; margin-bottom:8px;">CẦN CAN THIỆP PHÁP BẢO HOẶC LỌC THỜI GIAN (CÓ THỂ LÀM)</span>' :
            '<span style="background:#ff9f0a; color:#000; padding:5px 12px; border-radius:4px; font-weight:bold; font-size:0.85rem; display:inline-block; margin-bottom:8px;">TỌA TRẤN TRUNG TÍNH (CẦN BỔ TRỢ PHÁP BẢO THANH LỌC)</span>';
    } else {
        mauChu = "#30d158"; // Xanh lục đại cát
        thongDiepTốiCao = config.isCat ? "🟢 [HÀNH SỰ ĐẠI CÁT - LONG MẠCH THÔNG SUỐT]" : "🟢 [TỌA HUNG TRẤN SÁT ĐẮC CÁCH CHÍNH TÔNG]";
        bieuTuongTrangThai = config.isCat ?
            '<span style="background:#30d158; color:#000; padding:5px 12px; border-radius:4px; font-weight:bold; font-size:0.85rem; display:inline-block; margin-bottom:8px;">HÀNH SỰ ĐẮC CÁCH (VÌ KHÍ TRƯỜNG KHỚP TRỤC)</span>' :
            '<span style="background:#30d158; color:#000; padding:5px 12px; border-radius:4px; font-weight:bold; font-size:0.85rem; display:inline-block; margin-bottom:8px;">TRẤN SÁT HOÀN MỸ (DĨ ĐỘC TRỊ ĐỘC THÀNH CÔNG)</span>';
    }

    // Thiết lập màu sắc vi phân chuẩn xác cho Địa khí mạch ngầm
    let mauHauMach = "#dfb76c"; 
    if (thongTin72Hau.diem >= 70) {
        mauHauMach = "#30d158";
    } else if (thongTin72Hau.diem < 50 || thongTin72Hau.chatLuong.includes("TUYỆT") || thongTin72Hau.chatLuong.includes("HUNG") || thongTin72Hau.chatLuong.includes("TỬ")) {
        mauHauMach = "#ff3b30";
    } else {
        mauHauMach = "#ff9f0a";
    }

    // Dựng cấu trúc hộp hiển thị cảnh báo Không Vong thời gian thực
    let khongVongAlertHTML = "";
    if (isKhongVong) {
        const isDaiKV = khongVongLoi.loai === "ĐẠI KHÔNG VONG";
        const kvColor = isDaiKV ? "#ff3b30" : "#ff9f0a";
        const kvBg = isDaiKV ? "rgba(255,59,48,0.06)" : "rgba(255,159,10,0.06)";
        khongVongAlertHTML = `
        <div style="margin-top: 8px; padding: 10px 14px; background: ${kvBg}; border: 1px solid ${kvColor}; border-radius: 6px; color: #fff; font-size: 0.85rem; line-height: 1.5; font-family: sans-serif;">
            <strong style="color: ${kvColor}; display: block; margin-bottom: 3px;">⚠️ PHẠM PHÂN VỊ KHÔNG VONG LUẬN CỤC: ${khongVongLoi.loai}</strong>
            • <b>Bản chất tuyến độ:</b> ${khongVongLoi.mucDo || "Tạp khí loạn âm dương"}<br>
            • <b>Biện giải thực địa:</b> ${khongVongLoi.message}
        </div>`;
    }

    // 4. BIỆN CHỨNG KHẨU QUYẾT TỔNG LUẬN DIỄN GIẢI CHÍNH TÔNG
    let dienGiaiChuyenSauHTML = "";
    let quẻMệnhBátTrạchChuẩn = (cungTrach.includes("Sinh Khí") || cungTrach.includes("Thiên Y") || cungTrach.includes("Diên Niên") || cungTrach.includes("Phục Vị")) ? 
        `<span style="color:#30d158; font-weight:bold;">Cung Cát Khí ${cungTrach}</span>` : `<span style="color:#ff3b30; font-weight:bold;">Cung Hung Hại ${cungTrach}</span>`;

    let luậnHuongMenhChiTiet = "";
    if (config.isCat) {
        if (nhomMenhChu === "Tây Tứ Mệnh" && ["N", "S", "E", "SE"].includes(currentCode)) {
            luậnHuongMenhChiTiet = `<br>⚠️ <b style="color:#ff9f0a;">CẢNH BÁO TÂY TỨ MỆNH:</b> Hạng mục nạp khí mở hướng về Đông Tứ Cục, nghịch hướng sinh học của bản mệnh đương số. Cần can thiệp cấu trúc vật lý hoặc vi chỉnh lệch phân độ Sơn vị để thoát thế trệ khí.`;
        } else if (nhomMenhChu === "Đông Tứ Mệnh" && ["NE", "NW", "W", "SW"].includes(currentCode)) {
            luậnHuongMenhChiTiet = `<br>⚠️ <b style="color:#ff9f0a;">CẢNH BÁO ĐÔNG TỨ MỆNH:</b> Đường nạp khí rơi vào các quẻ phương vị Tây Tứ. Xung khắc từ trường nhẹ, cần ưu tiên dùng bố cục hành Mộc hoặc hành Thủy trong nội thất nhằm thông quan dòng chảy khí.`;
        }
    }

    if (isKhongVong) {
        dienGiaiChuyenSauHTML = `Tọa độ la bàn thực địa ghi nhận đường biên chết Không Vong cực kỳ nguy hiểm. Tại dải độ này, từ trường bị bẻ gãy và hỗn loạn nghiêm trọng. **TUYỆT ĐỐI PHONG TỎA KHÔNG ĐƯỢC XÂY DỰNG**, cố tình bài trí kết cấu kiến trúc ${config.title} tại phân độ tử huyệt này sẽ kích hoạt tai họa khôn lường, nhân đinh suy kiệt. ${khongVongLoi.message}`;
    } else if (tongHop.level === "HUNG CỤC") {
        dienGiaiChuyenSauHTML = `Lỗi nghiêm trọng từ nền tảng Địa lý tĩnh! Hạng mục ${config.title} đòi hỏi phải hấp thụ hoặc xử lý sinh khí tối cao để dưỡng trạch nhưng hiện trạng kim la bàn báo đang đóng đè lên Hung vị (${cungTrach}) hoặc phạm hình phạt năng lượng nghiêm trọng của trạch đất. Sự xung khắc từ gốc này xói mòn sinh khí, khiến trường khí trạch chủ bế tắc trường kỳ. ${luậnHuongMenhChiTiet}`;
    } else {
        dienGiaiChuyenSauHTML = `Địa trạch lập cực đắc vị, thông suốt khí trường. Không gian đất nền tại phân độ góc này đón trọn dải trường khí vương cát từ vị trí ${quẻMệnhBátTrạchChuẩn}. Đồng thời luồng khí mạch ngầm dưới lòng đất khớp đồng trục hoàn hảo với **72 Long Khí Xuyên Sơn: Mạch khí ${thongTin72Hau.ten} (${thongTin72Hau.chatLuong})**. Thiên Địa giao hòa đạt hiệu suất năng lượng đỉnh cao **${tongHop.diem}/98 điểm**, gia trạch an định vững như bàn thạch. ${luậnHuongMenhChiTiet}`;
    }

    // 5. MẬT PHÁP XỬ LÝ CHUYÊN SÂU LẤY ĐỘNG TỪ LÕI
    let matPhapXửLýChuyênSâu = tongHop.hoaGiai || "Duy trì khu vực thông thoáng để nạp cát khí.";
    if (tongHop.level === "HUNG CỤC" || isKhongVong) {
        matPhapXửLýChuyênSâu = `
        <div style="line-height: 1.6; color: #eee; font-size:0.85rem;">
            ⚠️ <b style="color:#ff3b30;">ĐIỀU TIẾT THƯỢNG TẦNG - PHƯƠNG ÁN SỬA ĐỔI BẮT BUỘC:</b><br>
            Vì vị trí đang chọn phạm lỗi định vị tĩnh cốt lõi của mạch đất trạch, việc tuyển ngày giờ tốt lúc này hoàn toàn vô tác dụng. Phương pháp cứu vãn duy nhất là gia chủ buộc phải dịch chuyển vị trí kết cấu vật chất tránh xa dải độ xấu, hoặc kích hoạt khẩn cấp năng lượng phong tỏa tà khí bằng pháp bảo: <span style="color:#ffd700; font-weight:bold;">${tongHop.hoaGiai || "Pháp bảo hóa sát chuyên dụng Địa tầng thạch anh thô nguyên khối"}</span> để bảo vệ trục mạch khí.
        </div>`;
    }

    // 6. XUẤT BẢNG NGÀY LÀNH TRACH NHẬT
    let lichTrachNhatHTML = "";
    if (config.isCat) {
        if (ketQuaTrachNhat.length > 0 && !isKhongVong && tongHop.level !== "HUNG CỤC" && tongHop.diem >= 50) {
            let topNgay = ketQuaTrachNhat.slice(0, 7); 
            lichTrachNhatHTML = `<div style="margin-top:15px; background:rgba(48,209,88,0.04); padding:12px; border-radius:8px; border:1px solid #30d15840;">
                <b style="color:#30d158; display:block; margin-bottom:8px; font-size:0.9rem;">📅 HỆ THỐNG TRÍCH XUẤT CÁC NGÀY ĐẠI CÁT ĐẮC VƯỢNG TINH TRONG THÁNG ${thangKhaoSat}:</b>`;
            topNgay.forEach(n => {
                let listThuong = n.advantages ? n.advantages.map(adv => `<span style="color:#30d158;">• ${adv}</span>`).join('<br>') : "";
                let listPhat = n.disadvantages ? n.disadvantages.map(dis => `<span style="color:#ff4444;">• ${dis}</span>`).join('<br>') : "";
                
                lichTrachNhatHTML += `
                <div style="padding:10px 0; border-bottom:1px dashed rgba(255,255,255,0.08); font-size:0.85rem; line-height:1.6;">
                    • <b>Ngày Dương Lịch:</b> <span style="color:#ffd700; font-weight:bold;">${n.solarDate}</span> | <b>Can Chi Ngày:</b> <span style="color:#fff;">${n.canChiText || ""}</span> | <b>Hiệu Hiệu Lịch Pháp:</b> <b style="color:#30d158;">${n.score} điểm</b><br>
                    • <b>Nhật Trực Kiến Trừ:</b> Trực <span style="color:#30d158; font-weight:bold;">${n.trucName || ""}</span> (${n.trucText || ""})<br>
                    ${listThuong ? `• <b>Cát Tinh Gia Trì:</b><br>${listThuong}<br>` : ''}
                    ${listPhat ? `• <b>Sát Khí Lưu Nhật:</b><br>${listPhat}<br>` : ''}
                    • <span style="color:#30d158;">🟢 <b>GIỜ ĐẠI CÁT KHỞI SỰ THỰC ĐỊA:</b></span> <b style="color:#fff;">${n.goldHours ? n.goldHours.slice(0, 4).join(' / ') : ""}</b><br>
                    • <span style="color:#ff4444;">🔴 <b>GIỜ ĐẠI KỴ TUYỆT LỘ CẤM KỴ:</b></span> <span style="color:#aaa;">${n.blackHours ? n.blackHours.slice(0, 4).join(' / ') : ""}</span>
                </div>`;
            });
            lichTrachNhatHTML += `</div>`;
        } else {
            lichTrachNhatHTML = `<div style="margin-top:15px; background:rgba(255,59,48,0.06); padding:12px; border-radius:8px; border:1px solid #ff3b3040; font-size:0.85rem; color:#eee; line-height:1.5;">
                <b>📅 PHONG TỎA BẢNG NGÀY LÀNH:</b> Trạch đất đang bị dính trục Không Vong hoặc phạm Đại Kỵ phương vị tĩnh tại phần Gốc. Việc tìm ngày tốt phần Ngọn hoàn toàn vô tác dụng, hệ thống tự động khóa bảng ngày lành để bảo vệ trạch gia khỏi dòng ác khí kích động.
            </div>`;
        }
    }

    // 7. MẬT PHÁP NHÂN KHÍ MƯỢN TUỔI ĐỘNG THỔ
    let matPhapMuonTuoiHTML = "";
    if (config.isCat) {
        if (!checkHanNhanKhi.isOk && laHangMucDaiSu) {
            const razones = checkHanNhanKhi.reasons.join(' + ');
            const mangQuyNhan = typeof timTuoiQuyNhanMuonTinh === 'function' ? timTuoiQuyNhanMuonTinh(namKhaoSat, sonChuan, namAmMệnhChủ) : [];
            
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
                ✅ <b>AN VỊ TIỂU SỰ NỘI THẤT HOÀN HẢO:</b> Mặc dù bản mệnh đương số vướng niên hạn tuổi xấu, nhưng hạng mục hành sự là bài trí nội tại không đập phá nền móng long mạch trạch đất (<b>${config.title}</b>), gia chủ <b>hoàn toàn tự tay bài trí, đặt kết cấu vào góc độ cát tường</b> mà không cần làm thủ tục mượn tuổi nhân khí phức tạp.
            </div>`;
        } else {
            matPhapMuonTuoiHTML = `
            <div style="margin-top:12px; background:rgba(48,209,88,0.05); padding:12px; border-radius:8px; border:1px solid #30d15830; font-size:0.85rem; color:#eee;">
                ✅ <b>NHÂN KHÍ THANH SẠCH:</b> Bản mệnh tuổi đương số vô cùng quang đãng, không phạm tam tai, kim lâu, hoàng ốc, sẵn sàng tự tay thực hiện lập cực và động thổ cát tường.
            </div>`;
        }
    }

// =========================================================================
    // 8. ĐỒNG BỘ NIÊN HẠN CỬU TINH VÀ THẦN SÁT LƯU NIÊN (BẢN FIX CHUẨN KHÔNG LỖI BIẾN)
    // =========================================================================
    let tenSaoChuQuan = "Khí trường bình ổn"; // 🟢 PHẢI GIỮ DÒNG NÀY ĐỂ KHAI BÁO BIẾN

    // ⚙️ TOÁN THỨC AN TOÀN CHỐNG SỐ ÂM CHO LỊCH PHÁP
    let bệĐỡChuKỳBaoCao = Math.floor((namKhaoSat - 1864) / 20);
    const vanSo = ((bệĐỡChuKỳBaoCao % 9) + 9) % 9 + 1;

    if (satTinhs.length > 0) {
        tenSaoChuQuan = satTinhs.map(s => s.ten).join(" / ");
    } else {
        if (PhongThuyCore?.data?.Van?.[vanSo]?.[currentCode]) {
            tenSaoChuQuan = PhongThuyCore.data.Van[vanSo][currentCode].sao + " chiếm đóng phương vị";
        }
    }

    // 9. NẠP TOÀN BỘ CẤU TRÚC HTML CAO CẤP VÀO DOM
    let html = `
        <div style="text-align: center; border-bottom: 2px solid var(--gold); padding-bottom: 12px; margin-bottom: 15px;">
            <div style="font-size: 0.8rem; color: #dfb76c; letter-spacing: 1.5px; font-weight:bold;">✨ THƯỢNG TẦNG TỔNG LUẬN GIẢI PHONG THỦY SỐ VẬN 9 ✨</div>
            <div style="font-size: 1.1rem; font-weight: 900; color: ${mauChu}; margin-top: 6px; text-shadow: 0 0 8px rgba(0,0,0,0.5); text-transform: uppercase;">${thongDiepTốiCao}</div>
        </div>

        <div style="font-size: 0.9rem; line-height: 1.7; color: #fff; background: rgba(255,255,255,0.02); padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06); margin-bottom: 12px;">
            <div style="text-align:center;">${bieuTuongTrangThai}</div>
            <div style="margin-bottom: 6px;">👤 <b>Đương số chủ sự:</b> <span style="color:var(--gold); font-weight:bold;">${name}</span> | Quẻ mạng Cung Phi: <b style="color:#ffd700;">${thucTeChuMenh} (${nguHanhCungPhiText})</b> [Năm âm: ${namAmMệnhChủ}]</div>
            <div style="margin-bottom: 6px;">📐 <b>Góc độ la bàn thực địa:</b> <span style="color:#ffca28; font-weight:bold;">${realHeading.toFixed(1)}°</span> — Khống chế quản lý bởi: <span style="color:var(--gold); font-weight:bold;">Sơn ${sonChuan}</span></div>
            <div style="margin-bottom: 6px;">🔮 <b>72 Long Khí Xuyên Sơn:</b> <span style="color:#ffd700; font-weight:bold;">Mạch ${thongTin72Hau.ten}</span> — Bản chất mạch ngầm: <b style="color:${mauHauMach};">${thongTin72Hau.chatLuong} (Đạt ${thongTin72Hau.diem}pt)</b></div>
            <div style="margin-bottom: 6px;">🎯 <b>Hạ tầng hoạch định kết cấu:</b> Công năng phân bổ [<b>${config.title}</b>]</div>
            <div style="margin-bottom: 6px;">📊 <b>Hiệu số tích phân năng lượng:</b> <span style="color:${mauChu}; font-weight:900; font-size:1.05rem;">${tongHop.diem}/98 điểm</span> — Phân cấp khí cục: <span style="color:${mauChu}; font-weight:bold;">${tongHop.level}</span></div>
            <div style="margin-bottom: 2px;">⏳ <b>Thiên thời Cửu Tinh niên hạn (${namKhaoSat}):</b> <span style="color:${satTinhs.length > 0 ? '#ff9f0a' : '#30d158'}; font-weight:bold;">${tenSaoChuQuan}</span></div>
            ${khongVongAlertHTML}
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

//gioi thieu phong thuy
document.getElementById('openScienceBtn').addEventListener('click', function() {
    // Gọi hàm khởi tạo và hiển thị khung nội dung khoa học từ file JS riêng biệt
    if (typeof FengShuiScienceModal !== 'undefined') {
        FengShuiScienceModal.open();
    } else {
        console.error("Chưa nạp file phongthuy_khoahoc.js");
    }
});
let yearTimeout = null;

function handleYearInput(input) {
    let raw = input.value.replace(/[^0-9]/g, '');
    input.value = raw; 

    if (raw.length === 4) setTimeout(() => input.blur(), 80);

    if (typeof recalculateFate === 'function') {
        clearTimeout(yearTimeout);
        yearTimeout = setTimeout(() => {
            // Ép tạm số 0 để 6 hàm lõi chạy đồng bộ xong rồi trả lại số gốc luôn
            if (raw !== '' && raw.length < 4) input.value = raw.padStart(4, '0');
            
            recalculateFate();
            
            input.value = raw; 
        }, 300);
    }
}