/**
 * Hệ Thống Cẩm Nang Khoa Học Biện Chứng - La Bàn Đa Tầng
 * Đóng gói cấu trúc DOM & CSS độc lập thành File JS
 */

const FengShuiScienceModal = {
    initialized: false,

    injectStyles: function() {
        if (document.getElementById('fs-science-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'fs-science-styles';
        style.innerHTML = `
            .fs-science-overlay {
                position: fixed;
                top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(0, 0, 0, 0.75);
                backdrop-filter: blur(4px);
                -webkit-backdrop-filter: blur(4px);
                z-index: 99999;
                display: flex; justify-content: center; align-items: center;
                opacity: 0; pointer-events: none;
                transition: opacity 0.3s ease;
            }
            .fs-science-overlay.active {
                opacity: 1; pointer-events: auto;
            }
            .fs-science-container {
                position: relative;
                width: 90%; max-width: 520px; max-height: 82vh;
                background: #1a1a1a;
                border: 1px solid #333;
                border-radius: 14px;
                padding: 25px; padding-top: 35px;
                color: #e0e0e0;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.7;
                overflow-y: auto;
                box-shadow: 0 15px 40px rgba(0,0,0,0.6);
                transform: translateY(20px);
                transition: transform 0.3s ease;
                scrollbar-width: thin;
                scrollbar-color: #dfb76c #1a1a1a;
            }
            .fs-science-overlay.active .fs-science-container {
                transform: translateY(0);
            }
            /* Nút đóng hình dấu X Neon góc phải trên */
            .fs-science-close-x {
                position: absolute;
                top: 10px; right: 15px;
                font-size: 24px; color: #666;
                cursor: pointer;
                user-select: none;
                transition: color 0.2s;
                font-weight: 300;
                line-height: 1;
            }
            .fs-science-close-x:hover {
                color: #00f2c9;
                text-shadow: 0 0 8px rgba(0,242,201,0.5);
            }
            .fs-science-container h1 {
                color: #dfb76c; font-size: 1.35rem; text-align: center;
                text-transform: uppercase; letter-spacing: 1px;
                margin-top: 5px; border-bottom: 2px dashed #333; padding-bottom: 15px;
            }
            .fs-science-container h2 {
                color: #00f2c9; font-size: 1.08rem; margin-top: 25px;
                display: flex; align-items: center; gap: 8px;
            }
            .fs-science-container p { font-size: 0.92rem; text-align: justify; color: #ccc; }
            .fs-science-highlight {
                background: rgba(0, 242, 249, 0.03); border-left: 4px solid #00f2c9;
                padding: 12px 15px; border-radius: 4px; margin: 15px 0;
            }
            .fs-science-goldbox {
                background: rgba(223, 183, 108, 0.03); border-left: 4px solid #dfb76c;
                padding: 12px 15px; border-radius: 4px; margin: 15px 0;
            }
            .fs-science-container ul { padding-left: 20px; font-size: 0.92rem; }
            .fs-science-container li { margin-bottom: 8px; }
            .fs-science-badge {
                background: #262626; color: #dfb76c; padding: 1px 6px;
                border-radius: 4px; font-family: monospace; font-size: 0.85rem; border: 1px solid #444;
            }
            .fs-science-btn-footer {
                display: block; width: 100%; background: #222; color: #aaa;
                border: 1px solid #333; padding: 10px; border-radius: 8px;
                cursor: pointer; text-align: center; margin-top: 20px;
                font-weight: bold; transition: all 0.2s; font-size: 0.9rem;
            }
            .fs-science-btn-footer:hover { background: #333; color: #fff; }
            .fs-science-footer {
                text-align: center; font-size: 0.8rem; color: #555;
                margin-top: 25px; border-top: 1px solid #333; padding-top: 12px;
            }
        `;
        document.head.appendChild(style);
    },

    buildDOM: function() {
        if (document.getElementById('fs-science-modal-overlay')) return;

        const overlay = document.createElement('div');
        overlay.id = 'fs-science-modal-overlay';
        overlay.className = 'fs-science-overlay';

        const container = document.createElement('div');
        container.className = 'fs-science-container';
        
        // Ngăn chặn sự kiện click lan ra ngoài gây đóng khung diện rộng ngoài ý muốn
        container.addEventListener('click', (e) => e.stopPropagation());

        // Nội dung chi tiết bài viết bóc tách khoa học
        container.innerHTML = `
            <div class="fs-science-close-x" onclick="FengShuiScienceModal.close()">&times;</div>
            <h1>🧬 PHONG THỦY:<br>KHOA HỌC KIẾN TRÚC & ĐỊA CHẤT CỔ ĐẠI</h1>
            
            <p>Khi nhắc đến "Phong Thủy", phần lớn đều liên tưởng đến các quy luật huyền bí mang sắc màu tâm linh. Nhưng nếu bóc tách toàn bộ lớp sương mù của thời gian, chúng ta sẽ kinh ngạc nhận ra: <strong>Phong thủy chính là bộ môn khoa học sơ khai nhất của nhân loại về môi trường sống</strong>, sự giao thoa hoàn mỹ giữa Vật lý kiến trúc, Địa chất học và Sinh thái học dựa trên hai trục cốt lõi: <strong>Phong (Khí tượng học)</strong> và <strong>Thủy (Thủy văn học)</strong>.</p>

            <h2>1. BẢN CHẤT ĐẤT ĐAI: SỰ TƯƠNG THÍCH SINH THÁI</h2>
            <p>Một mảnh đất tự nó là một thực thể vật lý khách quan cấu thành từ địa tầng, cấu trúc nguồn nước và từ trường. Bản thân mảnh đất không có tính thiện ác, cát hung.</p>
            <div class="fs-science-goldbox">
                <strong>Ví dụ thực tế:</strong> Một mảnh đất cát khô cằn ở miền Trung tự nó không xấu. Nếu đem một cây lúa nước trồng xuống đó, cây sẽ héo úa và chết ngay <span style="color:#ff4d4d;font-weight:bold;">(Hung)</span>. Ngược lại, nếu đem một cây xương rồng hay củ khoai lang đặt vào, chúng lại phát triển rực rỡ <span style="color:#00f2c9;font-weight:bold;">(Cát)</span>.
            </div>
            <p>Con người chúng ta cũng là một thực thể sinh học. Hệ thống định vị phương vị trên la bàn thực chất là <strong>bộ lọc cố gắng phân loại con người thành các nhóm tần số</strong>, nhằm kiểm tra xem cơ thể họ có tương thích sinh thái với hướng đón nắng, hướng đối lưu gió và từ trường của mảnh đất đó hay không. Đó là mối quan hệ cộng hưởng giữa Chủ thể và Môi trường.</p>

            <h2>2. THẨM THỔ SẮC: ĐỊA CHẤT HỌC SƠ KHAI</h2>
            <p>Các bậc thầy thực chiến ngày xưa bắt buộc phải đào đất và ngửi đất để thẩm định nền móng, thuật ngữ chuyên ngành cổ gọi là <span class="fs-science-badge">Thẩm thổ sắc</span> và <span class="fs-science-badge">Khứ thổ vị</span>.</p>
            <ul>
                <li><strong>Đất chứa Sinh khí:</strong> Thớ đất chặt nhưng xốp, có màu hồng vàng hoặc vàng nến, mùi thơm của đất mới, không úng nước. Về mặt khoa học, đây là vùng cấu trúc địa tầng ổn định, không có dòng chảy ngầm gây sụt lún, không chứa khí độc hại – nền móng vững chắc để xây dựng công trình bền vững qua trăm năm.</li>
                <li><strong>Đất suy kiệt năng lượng:</strong> Đào lên toàn bùn đen hôi thối hoặc đá sỏi cằn cỗi, chứng tỏ mạch nước ngầm bị tù đọng hoặc ô nhiễm, xây nhà lên sẽ ẩm thấp, phát sinh mầm bệnh cho hệ hô hấp và da.</li>
            </ul>

            <h2>3. VI PHÂN ĐỘ SỐ (24 SƠN, 72 HẬU)</h2>
            <p>Tại sao cùng một hướng nhà, có người ở tốt, có người ở xấu? Khí trường đỉnh cao không nhìn một hướng lớn chung chung ($45^\circ$), mà <strong>vi phân góc độ sâu chính xác đến từng $5^\circ$</strong> (24 Sơn vị và 72 Hậu long mạch).</p>
            <p>Dưới góc nhìn của Vật lý kiến trúc, việc lệch đi vài độ số sẽ thay đổi toàn bộ kịch bản không gian vật lý:</p>
            <ul>
                <li><strong>Góc đón bức xạ mặt trời:</strong> Quyết định ngôi nhà nhận được bức xạ hồng ngoại ấm áp buổi sớm hay bị thiêu đốt bởi tia UV độc hại lúc chiều muộn.</li>
                <li><strong>Góc đón gió đối lưu:</strong> Quyết định ngôi nhà có dòng không khí tươi lưu thông tuần hoàn liên tục, hay bị gió lùa độc, gió xoáy gây tổn thương hệ miễn dịch của người ở.</li>
                <li><strong>Sự biến thiên từ trường:</strong> Đo lường độ ổn định của từ trường tại tọa độ đó. Sống trong một không gian có từ trường ổn định, hệ thần kinh và tim mạch của con người sẽ được thư giãn, từ đó đưa ra những quyết định sáng suốt.</li>
            </ul>

            <h2>4. BÁNH XE VŨ TRỤ: BÓC TÁCH CÁC "SÁT TINH LƯU NIÊN"</h2>
            <p>Để người dùng dễ hình dung, người xưa đã hình tượng hóa các chu kỳ biến động điện từ vũ trụ thành các tên gọi mang tính tâm linh, hệ thống này bóc tách chúng về đúng bản chất vật lý thiên văn:</p>
            <div class="fs-science-highlight">
                <ul>
                    <li><strong>Thái Tuế:</strong> Thực chất là chu kỳ vận hành của <strong>Mộc Tinh (Jupiter)</strong> – hành tinh phát ra một trường điện từ cực kỳ khủng khiếp với lõi hydro lỏng. Cứ mỗi 11.86 năm (vòng quay 12 Địa Chi), Mộc Tinh lại quay về đúng một tọa độ đối chiếu với Trái Đất. Khi "sóng từ trường" đối lưu này quét thẳng vào hướng nhà, nó làm nhiễu loạn mật độ ion hóa không khí. Nếu ta động thổ đập phá đúng vị trí này, sự cộng hưởng từ trường bị đứt gãy, gây căng thẳng cực độ cho hệ thần kinh.</li>
                    <li><strong>Ngũ Hoàng Đại Sát & Tam Sát:</strong> Là sự dịch chuyển của các vùng bức xạ năng lượng và dòng chảy hạt điện tích (Gió Mặt Trời) tác động lên tầng điện ly của Trái Đất theo từng năm. Khi vùng bức xạ này "đáo" đến một hướng cụ thể, tần số không gian nơi đó bị đẩy vào trạng thái bất ổn định (Tử khí).</li>
                </ul>
            </div>
            <p>Hệ thống tính toán theo năm của ứng dụng chính là việc <strong>dự báo trước các "vùng thời tiết từ trường" đó</strong>, giúp con người chủ động thích ứng hoặc dùng chất liệu vật lý (như kim loại, nước tĩnh) để điều hòa tần số sóng, hoàn toàn không phải cúng bái cầu xin một thế lực vô hình.</p>

            <h2>5. TẠI SAO MỆNH PHONG THỦY KHÁC MỆNH TỬ VI?</h2>
            <p>Rất nhiều người hoang mang khi tuổi Quý Hợi 1983 xem Tử Vi thấy ghi mệnh <span class="fs-science-badge">Đại Hải Thủy</span>, nhưng khi nạp vào ứng dụng này lại báo cung <span class="fs-science-badge">Cấn Thổ</span> hoặc <span class="fs-science-badge">Đoài Kim</span>. Thực chất đây là hai hệ toán học độc lập:</p>
            <ul>
                <li><strong>Mệnh Tử Vi (Mệnh Niên):</strong> Sử dụng năm sinh để tính toán năng lượng sinh học gốc của một cá thể khi chào đời (giống như xác định nhóm máu hoặc mã ADN) để dự báo xu hướng tính cách, sức khỏe tự nhiên trọn đời. Hệ này <strong>không có tính định hướng không gian</strong>.</li>
                <li><strong>Mệnh Phong Thủy (Cung Phi / Bát Trạch):</strong> Hệ toán học định lượng tính toán <strong>sự tương tác giữa cơ thể sinh học và môi trường địa lý</strong>. Cung Phi được cấu thành từ 3 tham số: Năm sinh, Giới tính, và Phương vị Trái Đất tại thời điểm đó (Tiết khí).</li>
            </ul>
            <p><strong>Bản chất khoa học:</strong> Khi một người nam và một người nữ sinh cùng năm 1983, cấu trúc sinh học và nội tiết tố của họ hoàn toàn khác nhau, dẫn đến khả năng hấp thụ và phản xạ từ trường trái đất khác nhau. Vì vậy, trong Phong thủy kiến trúc, họ bắt buộc phải có hai quẻ mệnh khác nhau (Nam cung Cấn - Nữ cung Đoài) để tìm ra hướng đón gió, đón nắng tối ưu nhất cho từng cơ thể.</p>

            <div class="fs-science-goldbox" style="text-align: center; font-style: italic; font-size: 0.88rem;">
                "Lấy Mệnh Niên Tử Vi để đi chọn hướng nhà là một sai lầm nghiêm trọng về mặt kỹ thuật, giống như việc lấy bản đồ đường sông để đi tìm đường trên bộ."
            </div>

            <button class="fs-science-btn-footer" onclick="FengShuiScienceModal.close()">HIỂU RÕ BẢN CHẤT • ĐÓNG LẠI</button>

            <div class="fs-science-footer">
                Hệ Thống Lập Cực Toán Học Đa Tầng © Vận 9 Đương Thời
            </div>
        `;

        overlay.appendChild(container);
        
        // Sự kiện click ra vùng ngoài overlay màu đen sẽ đóng modal luôn cho nhanh
        overlay.addEventListener('click', () => FengShuiScienceModal.close());
        
        document.body.appendChild(overlay);
    },

    open: function() {
        if (!this.initialized) {
            this.injectStyles();
            this.buildDOM();
            this.initialized = true;
        }
        
        // Kích hoạt hiển thị mượt mà với class CSS
        const overlay = document.getElementById('fs-science-modal-overlay');
        overlay.style.display = 'flex';
        setTimeout(() => {
            overlay.classList.add('active');
        }, 10);
    },

    close: function() {
        const overlay = document.getElementById('fs-science-modal-overlay');
        if (overlay) {
            overlay.classList.remove('active');
            // Đợi hiệu ứng fade-out mờ dần 0.3s kết thúc rồi mới ẩn hoàn toàn dòng chảy DOM
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 300);
        }
    }
};