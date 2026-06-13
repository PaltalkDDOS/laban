export default async function handler(req, res) {
    // Chỉ chấp nhận phương thức POST gửi lên từ giao diện
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }

    try {
        const { text, voice, speed } = req.body;

        // Bắn request sang FPT.AI bằng Fetch API của Node.js (Chạy phía Server nên không lo CORS)
        const fptResponse = await fetch('https://api.fpt.ai/hmi/tts/v5', {
            method: 'POST',
            headers: {
                'api-key': 'dHGy1KX84eTjSqugRU3gmTw6ZmQ5tKaF',
                'voice': voice,
                'speed': String(speed)
            },
            body: text // FPT v5 nhận văn bản thô trực tiếp ở Body
        });

        const data = await fptResponse.json();
        
        // Trả kết quả gốc từ FPT về lại cho giao diện Frontend
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Lỗi Serverless: ' + error.message });
    }
}