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
                background: rgba(0, 0, 0, 0.8);
                backdrop-filter: blur(5px);
                -webkit-backdrop-filter: blur(5px);
                z-index: 99999;
                display: flex; 
                justify-content: center; 
                align-items: center; /* Mặc định căn giữa đẹp mắt trên mobile */
                padding: 15px;
                box-sizing: border-box;
                opacity: 0; pointer-events: none;
                transition: opacity 0.3s ease;
            }
            .fs-science-overlay.active {
                opacity: 1; pointer-events: auto;
            }
            
            /* Khung hiển thị tự động nhận diện kích thước thiết bị */
            .fs-science-container {
                position: relative;
                width: 100%; 
                max-width: 530px; /* Nới rộng nhẹ cấu trúc khung */
                max-height: 82vh; 
                background: #121212;
                border: 1px solid rgba(223, 183, 108, 0.3);
                border-radius: 14px;
                padding: 25px;
                color: #e0e0e0;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.7;
                overflow-y: auto;
                box-shadow: 0 10px 30px rgba(0,0,0,0.8);
                transform: translateY(20px);
                transition: transform 0.3s ease;
                scrollbar-width: thin;
                scrollbar-color: #dfb76c #121212;
                box-sizing: border-box;
            }
            .fs-science-container * {
                box-sizing: border-box;
            }
            .fs-science-overlay.active .fs-science-container {
                transform: translateY(0);
            }
            
            /* RESPONSIVE THÔNG MINH CHO MÁY TÍNH (DESKTOP) */
            @media (min-width: 768px) {
                .fs-science-overlay {
                    align-items: flex-start; /* Giải phóng căn giữa, cho phép đẩy lên trên */
                    padding-top: 6vh;        /* Thụt xuống một chút từ đỉnh màn hình cực chuẩn */
                    padding-bottom: 6vh;
                }
                .fs-science-container {
                    max-height: 88vh;        /* Khung dài xuống dưới thoải mái, dáng thanh thoát */
                }
            }
            
            /* Nút đóng phong cách tối giản sang trọng */
            .fs-science-close-x {
                position: absolute;
                top: 12px; right: 20px;
                font-size: 24px; color: #aaa;
                cursor: pointer;
                user-select: none;
                transition: color 0.2s;
                font-weight: 300;
                line-height: 1;
                z-index: 10;
            }
            .fs-science-close-x:hover {
                color: #dfb76c;
                text-shadow: 0 0 8px rgba(223,183,108,0.5);
            }
            /* Khối nền lót nhẹ bên trên tiêu đề cực đẹp */
            .fs-science-header-box {
                background: linear-gradient(145deg, rgba(223, 183, 108, 0.06), rgba(0, 0, 0, 0));
                border: 1px solid rgba(223, 183, 108, 0.2);
                border-radius: 8px;
                padding: 15px;
                margin-bottom: 20px;
                text-align: center;
            }
            .fs-science-container h1 {
                color: #dfb76c; font-size: 1.1rem; text-align: center;
                text-transform: uppercase; letter-spacing: 1px;
                margin: 0; padding: 0; line-height: 1.5;
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
            /* Nút đóng chân phương viền vàng đổ màu gradient đồng bộ */
            .fs-science-btn-footer {
                display: block; width: 100%; 
                background: linear-gradient(135deg, #dfb76c, #b38938); color: #000;
                border: none; padding: 10px 24px; font-weight: bold; border-radius: 20px;
                cursor: pointer; font-size: 0.8rem; letter-spacing: 1px;
                margin-top: 25px; transition: all 0.2s;
            }
            .fs-science-btn-footer:hover { 
                opacity: 0.9;
                box-shadow: 0 4px 15px rgba(223,183,108,0.3);
            }
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
        
        container.addEventListener('click', (e) => e.stopPropagation());

        container.innerHTML = `
            <div class="fs-science-close-x" onclick="FengShuiScienceModal.close()">&times;</div>
            
            <div class="fs-science-header-box">
                <h1>🧬 PHONG THỦY:<br>KHOA HỌC KIẾN TRÚC & ĐỊA CHẤT CỔ ĐẠI</h1>
            </div>
            
            <p>Khi nhắc đến "Phong Thủy", phần lớn đều liên tưởng đến các quy luật huyền bí mang sắc màu tâm linh. Nhưng nếu bóc tách toàn bộ lớp sương mù của thời gian, chúng ta sẽ kinh ngạc nhận ra: <strong>Phong thủy chính là bộ môn khoa học sơ khai nhất của nhân loại về môi trường sống</strong>, sự giao thoa hoàn mỹ giữa Vật lý kiến trúc, Địa chất học và Sinh thái học dựa trên hai trục cốt lõi: <strong>Phong (Khí tượng học)</strong> và <strong>Thủy (Thủy văn học)</strong>.</p>

            <h2>1. BẢN CHẤT ĐẤT ĐAI: CÁT HUNG KHÔNG NẰM Ở NGÔI NHÀ</h2>
            <p>Nhiều người thường đặt câu hỏi mang tính mê tín: <em>"Tại sao cùng một ngôi nhà hướng Tây, người Tây Tứ Mệnh vào ở thì phất lên (Cát), còn người Đông Tứ Mệnh vào ở lại lụi bại (Hung)? Phải chăng ngôi nhà biết chọn chủ để ban ơn hay hành hạ?"</em></p>
            
            <p><strong>Bản chất vật lý khách quan:</strong> Bản thân mảnh đất hay ngôi nhà hoàn toàn là các vật thể vô tri cấu thành từ gạch đá, xi măng, hướng đón nắng và lưu lượng gió. Bản thân nó là thực thể tĩnh, <strong>tuyệt đối không tự sinh ra Cát hay Hung</strong>.</p>

            <div class="fs-science-goldbox">
                <strong>Góc nhìn Sinh thái học:</strong> Một vùng đất cát khô cằn ở miền Trung tự nó không tốt cũng không xấu. Nếu đem cây lúa nước trồng xuống, cây sẽ héo úa và chết <span style="color:#ff4d4d;font-weight:bold;">(Hung)</span>. Ngược lại, nếu đem cây xương rồng hay củ khoai lang đặt vào, chúng lại phát triển rực rỡ <span style="color:#00f2c9;font-weight:bold;">(Cát)</span>. Vật rực rỡ hay héo chết là do <strong>mức độ tương thích sinh học</strong> của sinh vật đối với môi trường đó, chứ không phải do đất có ma lực.
            </div>

            <p>Con người là một bộ máy sinh học phức tạp chứa nội tiết tố, hệ tuần hoàn máu và các xung thần kinh nhạy cảm với điện từ trường. Khi phân chia Đông Tứ Mệnh và Tây Tứ Mệnh, cổ học thực chất đang dùng một bộ lọc toán học để phân loại cơ thể người theo các nhóm tần số thích nghi vật lý:</p>
            <ul>
                <li>Người thuộc <strong>Tây Tứ Mệnh</strong> có cơ địa sinh học, mật độ ion và hệ miễn dịch phù hợp để chịu đựng, chuyển hóa tốt dòng bức xạ nhiệt khô nồng của hướng Tây thành năng lượng hoạt động.</li>
                <li>Ngược lại, người thuộc <strong>Đông Tứ Mệnh</strong> có thể trạng nhạy cảm với nhiệt độ cao và áp suất từ trường hướng Tây, dẫn đến việc tế bào dễ căng thẳng, mất ngủ, suy giảm đề kháng, từ đó tinh thần sa sút và đưa ra quyết định sai lầm.</li>
            </ul>
            
            <p>Vì vậy, phong thủy không phải là cầu cúng, mà là bộ môn <strong>tìm kiếm sự tương thích sinh thái</strong> giữa Chủ thể (Cơ thể bạn) và Môi trường (Ngôi nhà) nhằm đạt được trạng thái cộng hưởng năng lượng tốt nhất.</p>

            <h2>2. THẨM THỔ SẮC: ĐỊA CHẤT HỌC SƠ KHAI</h2>
            <p>Các bậc thầy thực chiến ngày xưa bắt buộc phải đào đất và ngửi đất để thẩm định nền móng, thuật ngữ chuyên ngành cổ gọi là <span class="fs-science-badge">Thẩm thổ sắc</span> và <span class="fs-science-badge">Khứ thổ vị</span>.</p>
            <ul>
                <li><strong>Đất chứa Sinh khí:</strong> Thớ đất chặt nhưng xốp, có màu hồng vàng hoặc vàng nến, mùi thơm của đất mới, không úng nước. Về mặt khoa học, đây là vùng cấu trúc địa tầng ổn định, không có dòng chảy ngầm gây sụt lún, không chứa khí độc hại – nền móng vững chắc để xây dựng công trình bền vững qua trăm năm.</li>
                <li><strong>Đất suy kiệt năng lượng:</strong> Đào lên toàn bùn đen hôi thối hoặc đá sỏi cằn cỗi, chứng tỏ mạch nước ngầm bị tù đọng hoặc ô nhiễm, xây nhà lên sẽ ẩm thấp, phát sinh mầm bệnh cho hệ hô hấp và da.</li>
            </ul>

            <h2>3. VI PHÂN ĐỘ SỐ (24 SƠN, 72 HẬU)</h2>
            <p>Tại sao cùng một hướng nhà, hai căn cạnh sát nhau lại có số phận khác biệt? Khí trường đỉnh cao không nhìn một hướng lớn bao quát chung chung (45 độ), mà <strong>vi phân góc độ sâu chính xác đến từng 5 độ</strong> (24 Sơn vị và 72 Hậu long mạch).</p>
            <p>Dưới góc nhìn của Vật lý kiến trúc, việc lệch đi chỉ từ 2 đến 3 độ số sẽ làm thay đổi toàn bộ kịch bản không gian vật lý xung quanh bạn:</p>
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
        overlay.addEventListener('click', () => FengShuiScienceModal.close());
        document.body.appendChild(overlay);
    },

    open: function() {
        if (!this.initialized) {
            this.injectStyles();
            this.buildDOM();
            this.initialized = true;
        }
        
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
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 300);
        }
    }
};