<?php
// --- BỘ XỬ LÝ BACKEND CỦA FPT V5 (Bypass lỗi CORS trình duyệt) ---
if (isset($_GET['action']) && $_GET['action'] === 'tts') {
    header('Content-Type: application/json; charset=utf-8');
    
    // Lấy văn bản thô từ body yêu cầu
    $text = file_get_contents('php://input');
    
    // Lấy cấu hình cấu trúc giọng đọc từ Header gửi lên
    $voice = isset($_SERVER['HTTP_X_VOICE']) ? $_SERVER['HTTP_X_VOICE'] : 'lannhi';
    $speed = isset($_SERVER['HTTP_X_SPEED']) ? $_SERVER['HTTP_X_SPEED'] : '0';

    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_URL => 'https://api.fpt.ai/hmi/tts/v5',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CUSTOMREQUEST => 'POST',
        CURLOPT_POSTFIELDS => $text, // Bắn văn bản thô trực tiếp vào Body theo chuẩn v5
        CURLOPT_HTTPHEADER => array(
            'api-key: dHGy1KX84eTjSqugRU3gmTw6ZmQ5tKaF',
            'speed: ' . $speed,
            'voice: ' . $voice
        ),
    ));

    $response = curl_exec($curl);
    $err = curl_error($curl);
    curl_close($curl);

    if ($err) {
        echo json_encode(array("success" => "false", "message" => "cURL Lỗi kết nối: " . $err));
    } else {
        echo $response; // Trả thẳng kết quả gốc của FPT về cho trình duyệt phát nhạc
    }
    exit;
}
?>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smart Speech Pro v5.0 - FPT Studio</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="https://cdn.jsdelivr.net/npm/tesseract.js@4/dist/tesseract.min.js"></script>
    
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #0b0f19; color: #f1f5f9; }
        .dashboard-layout { background-color: #111827; border: 1px solid #1f2937; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5); }
        .input-crisp { background-color: #1f2937 !important; color: #ffffff !important; border: 1px solid #374151 !important; }
        .input-crisp:focus { border-color: #3b82f6 !important; outline: none; }
        .btn-primary { background: linear-gradient(135deg, #2563eb, #1d4ed8); color: #ffffff; transition: all 0.2s ease; }
        .btn-primary:hover { filter: brightness(1.1); transform: translateY(-1px); }
        .tab-nav { border-bottom: 2px solid #1f2937; }
        .tab-item { color: #9ca3af; padding: 12px 20px; font-weight: 500; cursor: pointer; transition: all 0.2s; border-bottom: 2px solid transparent; margin-bottom: -2px; }
        .tab-item.active { color: #3b82f6; border-color: #3b82f6; background-color: rgba(59, 130, 246, 0.05); }
    </style>
</head>
<body class="min-h-screen flex flex-col justify-between p-4 md:p-6">

    <main class="max-w-6xl w-full mx-auto dashboard-layout rounded-2xl p-6 space-y-6 my-auto">
        
        <!-- HEADER & ĐIỀU KHIỂN GIỌNG ĐỌC -->
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-gray-800">
            <div>
                <h1 class="text-2xl font-bold text-white flex items-center gap-2">
                    <i class="fa-solid fa-volume-high text-blue-500"></i> Smart Speech Pro <span class="text-xs bg-blue-900/50 text-blue-400 px-2 py-0.5 rounded border border-blue-800">Engine v5.0</span>
                </h1>
                <p class="text-gray-400 text-xs mt-1">Hệ thống xử lý giọng nói AI cục bộ thông qua PHP cURL</p>
            </div>

            <!-- Khung Điều Khiển Tham Số v5 -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-900 p-3 rounded-xl border border-gray-800 w-full lg:w-auto">
                <div class="flex flex-col">
                    <label class="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1">Giọng đọc (Theo tài liệu v5)</label>
                    <select id="voiceRegion" class="input-crisp text-sm rounded-lg px-3 py-2 cursor-pointer w-full lg:w-64">
                        <option value="lannhi" selected>Nữ Miền Nam (Lan Nhi)</option>
                        <option value="linhsan">Nữ Miền Nam (Linh San)</option>
                        <option value="banmai">Nữ Miền Bắc (Ban Mai)</option>
                        <option value="thuminh">Nữ Miền Bắc (Thu Minh)</option>
                        <option value="leminh">Nam Miền Bắc (Lê Minh)</option>
                        <option value="myan">Nữ Miền Trung (Mỹ An)</option>
                        <option value="giahuy">Nam Miền Trung (Gia Huy)</option>
                    </select>
                </div>

                <div class="flex flex-col justify-between">
                    <div class="flex justify-between items-center text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1">
                        <span>Tốc độ đọc</span>
                        <span id="speedVal" class="text-blue-400 font-bold">0 (Bình thường)</span>
                    </div>
                    <div class="flex items-center gap-2 py-1">
                        <span class="text-xs text-gray-500">-3</span>
                        <input type="range" id="speechSpeed" min="-3" max="3" value="0" step="1" class="flex-1 h-2 bg-gray-700 rounded-lg cursor-pointer">
                        <span class="text-xs text-gray-500">+3</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- DIỀU HƯỚNG TABS -->
        <div class="tab-nav flex items-center">
            <div onclick="switchTab('copy-tab')" id="btn-copy-tab" class="tab-item active"><i class="fa-solid fa-file-lines mr-2"></i>Dán Văn Bản Trực Tiếp</div>
            <div onclick="switchTab('link-tab')" id="btn-link-tab" class="tab-item"><i class="fa-solid fa-link mr-2"></i>Trích Xuất Từ Link</div>
            <div onclick="switchTab('file-tab')" id="btn-file-tab" class="tab-item"><i class="fa-solid fa-image-user mr-2"></i>Đọc File & Ảnh (OCR)</div>
        </div>

        <!-- KHU VỰC VĂN BẢN ĐẦU VÀO -->
        <div class="min-h-[260px]">
            <div id="copy-tab" class="tab-content block">
                <textarea id="textInput" placeholder="Nhập văn bản tiếng Việt tại đây để máy đọc. Chữ hiển thị trắng tinh trên nền tối rất rõ ràng..." class="w-full h-64 input-crisp rounded-xl p-4 text-base leading-relaxed resize-none"></textarea>
            </div>

            <div id="link-tab" class="tab-content hidden space-y-4">
                <div class="bg-gray-900 p-3.5 rounded-xl border border-gray-800 text-xs text-gray-400">
                    <i class="fa-solid fa-bolt text-yellow-500 mr-1"></i> Hệ thống tự bóc tách văn bản tinh khiết từ link bài báo.
                </div>
                <div class="flex flex-col sm:flex-row gap-2">
                    <input type="url" id="urlInput" placeholder="Ví dụ: https://vnexpress.net/abc..." class="flex-1 input-crisp rounded-xl px-4 py-3 text-sm">
                    <button onclick="extractLinkContent()" class="btn-primary px-6 py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2 whitespace-nowrap">
                        <i class="fa-solid fa-filter"></i> Bóc tách dữ liệu
                    </button>
                </div>
                <div id="linkResultPreview" class="w-full h-44 input-crisp rounded-xl p-4 text-sm overflow-y-auto hidden leading-relaxed opacity-80"></div>
            </div>

            <div id="file-tab" class="tab-content hidden space-y-4">
                <div class="border-2 border-dashed border-gray-800 hover:border-gray-700 rounded-xl p-8 text-center bg-gray-900/50 cursor-pointer transition-all" onclick="document.getElementById('fileInputElement').click()">
                    <input type="file" id="fileInputElement" accept=".txt, .png, .jpg, .jpeg" class="hidden" onchange="handleFileUpload(event)">
                    <i class="fa-solid fa-folder-open text-3xl text-gray-600 mb-2"></i>
                    <p class="text-sm font-medium text-gray-300">Chọn tệp văn bản (.txt) hoặc hình ảnh chữ viết (.png, .jpg)</p>
                </div>
                <div id="fileLoadingProgress" class="hidden text-center py-3 bg-gray-900 rounded-xl border border-gray-800">
                    <div class="inline-block animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500 mr-2 align-middle"></div>
                    <span class="text-sm text-blue-400 font-medium" id="progressStatus">Đang xử lý quét ký tự OCR bằng AI...</span>
                </div>
            </div>
        </div>

        <!-- BÀN ĐIỀU KHIỂN TRÌNH PHÁT -->
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-800">
            <div class="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <button onclick="startSmartSpeech()" class="btn-primary px-8 py-3.5 rounded-xl font-bold shadow-md flex items-center justify-center gap-2 flex-1 sm:flex-initial">
                    <i class="fa-solid fa-circle-play"></i> PHÁT GIỌNG NÓI
                </button>
                <button onclick="pauseSpeech()" class="bg-gray-800 hover:bg-gray-700 text-white px-5 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 flex-1 sm:flex-initial">
                    <i class="fa-solid fa-pause"></i> Tạm Dừng / Tiếp Tục
                </button>
                <button onclick="stopSpeech()" class="bg-red-950/50 border border-red-900 text-red-400 hover:bg-red-900/30 px-5 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 flex-1 sm:flex-initial">
                    <i class="fa-solid fa-square-stop"></i> Dừng hẳn
                </button>
            </div>

            <div class="text-xs text-gray-500 bg-gray-900 px-3 py-1.5 rounded-full border border-gray-800 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span class="font-medium tracking-wide">PHP Backend v5 Connection Secure</span>
            </div>
        </div>
    </main>

    <footer class="text-center text-gray-700 text-xs mt-4">
        &copy; 2026 Smart Speech Pro Studio. Đã sửa lỗi CORS qua PHP cURL Proxy thành công.
    </footer>

    <script>
        let finalProcessedText = ""; 
        let audioPlayer = null; 

        document.getElementById('speechSpeed').addEventListener('input', function(e) {
            let val = parseInt(e.target.value);
            document.getElementById('speedVal').innerText = val === 0 ? "0 (Bình thường)" : (val > 0 ? "+" + val : val);
        });

        function switchTab(tabId) {
            document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
            document.getElementById(tabId).classList.remove('hidden');
            document.querySelectorAll('.tab-item').forEach(el => el.classList.remove('active'));
            document.getElementById(`btn-${tabId}`).classList.add('active');
        }

        function smartTextClean(text) {
            if (!text) return "";
            let cleaned = text.replace(/\s+/g, ' ').trim();
            const shortWords = {
                "đ/c": "địa chỉ", "đc": "được", "kh": "khách hàng", "v/v": "về việc", 
                "tp": "thành phố", "hcm": "hồ chí minh", "hn": "hà nội", "đ": "đồng", 
                "usd": "đô la mỹ", "km": "ki-lô-mét", "m": "mét", "kg": "ki-lô-gam"
            };
            Object.keys(shortWords).forEach(key => {
                const regex = new RegExp(`\\b${key}\\b`, 'gi');
                cleaned = cleaned.replace(regex, shortWords[key]);
            });
            cleaned = cleaned.replace(/(\d{1,2})\/(\d{1,2})\/(\d{4})/g, "ngày $1 tháng $2 năm $3");
            return cleaned;
        }

        async function extractLinkContent() {
            const url = document.getElementById('urlInput').value.trim();
            if(!url) return;
            Swal.fire({ title: 'Đang bóc tách...', text: 'Đợi trong giây lát', allowOutsideClick: false, didOpen: () => { Swal.showLoading(); } });
            try {
                const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
                const data = await response.json();
                const parser = new DOMParser();
                const doc = parser.parseFromString(data.contents, 'text/html');
                ['nav', 'header', 'footer', 'aside', 'script', 'style', '.menu', '.sidebar', '.ads'].forEach(s => doc.querySelectorAll(s).forEach(e => e.remove()));
                let articleText = "";
                doc.querySelectorAll('article p, main p, p').forEach(p => { if(p.textContent.trim().length > 30) articleText += p.textContent.trim() + "\n"; });
                finalProcessedText = smartTextClean(articleText || doc.body.innerText);
                const preview = document.getElementById('linkResultPreview');
                preview.innerText = finalProcessedText;
                preview.classList.remove('hidden');
                Swal.close();
            } catch (error) {
                Swal.fire({ icon: 'error', title: 'Lỗi', text: 'Không thể trích xuất link này.' });
            }
        }

        function handleFileUpload(event) {
            const file = event.target.files[0];
            if (!file) return;
            const progressDiv = document.getElementById('fileLoadingProgress');
            progressDiv.classList.remove('hidden');
            if (file.type === "text/plain") {
                const reader = new FileReader();
                reader.onload = function(e) {
                    finalProcessedText = smartTextClean(e.target.result);
                    progressDiv.classList.add('hidden');
                };
                reader.readAsText(file);
            } else {
                Tesseract.recognize(file, 'vie').then(({ data: { text } }) => {
                    progressDiv.classList.add('hidden');
                    finalProcessedText = smartTextClean(text);
                }).catch(() => progressDiv.classList.add('hidden'));
            }
        }

        // --- GỌI ĐẾN BACKEND PHP TRÊN CÙNG FILE ĐỂ PHÁT GIỌNG NÓI ---
        function startSmartSpeech() {
            const activeTab = document.querySelector('.tab-content:not(.hidden)').id;
            if (activeTab === 'copy-tab') {
                finalProcessedText = smartTextClean(document.getElementById('textInput').value);
            }

            if (!finalProcessedText || finalProcessedText.length < 2) {
                Swal.fire({ icon: 'warning', title: 'Thiếu nội dung', text: 'Vui lòng nhập văn bản cần đọc.' });
                return;
            }

            const voice = document.getElementById('voiceRegion').value;
            const speed = document.getElementById('speechSpeed').value;

            stopSpeech();
            Swal.fire({ title: 'Đang gửi yêu cầu...', text: 'Hệ thống PHP đang xử lý cURL bảo mật', toast: true, position: 'top-end', showConfirmButton: false, timer: 1500, icon: 'info' });
            
            // Gọi ngược lại chính file index.php với action=tts mang theo các tham số cấu hình
            fetch('index.php?action=tts', {
                method: 'POST',
                headers: { 
                    'X-Voice': voice, 
                    'X-Speed': speed 
                },
                body: finalProcessedText
            })
            .then(res => res.json())
            .then(data => {
                // Đọc đúng cấu trúc dữ liệu JSON v5 phản hồi từ cURL: { "success": "true", "message": "link_mp3" }
                if(data.success === "true" || data.success === true) {
                    audioPlayer = new Audio(data.message);
                    audioPlayer.play();
                    Swal.fire({ title: 'Đang phát âm thanh', icon: 'success', toast: true, position: 'top-end', showConfirmButton: false, timer: 2000 });
                } else { 
                    throw new Error(data.message || "Lỗi phản hồi hệ thống."); 
                }
            })
            .catch((err) => {
                Swal.fire({ 
                    icon: 'error', 
                    title: 'Lỗi phát giọng đọc', 
                    text: 'Vui lòng kiểm tra lại xem bạn đã đổi tên file thành index.php và chạy nó bằng Local Server (XAMPP/Laragon) hay chưa.' 
                });
            });
        }

        function pauseSpeech() { if(audioPlayer) { if(audioPlayer.paused) audioPlayer.play(); else audioPlayer.pause(); } }
        function stopSpeech() { if(audioPlayer) { audioPlayer.pause(); audioPlayer = null; } }
    </script>
</body>
</html>