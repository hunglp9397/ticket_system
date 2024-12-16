import http from 'k6/http';
import { check } from 'k6';
import { sleep } from 'k6';

// Cấu hình test
export const options = {
    vus: 2000, // Số lượng user ảo chạy cùng lúc
    duration: '2m', // Thời gian test là 2 phút
    thresholds: {
        http_req_duration: ['p(95)<500'], // 95% request hoàn thành dưới 500ms
        http_req_failed: ['rate<0.01'],   // Tỷ lệ request lỗi nhỏ hơn 1%
    },
};

export default function () {
    const res = http.get('http://localhost:1122/ticket/1/detail/1'); // Thay bằng API của bạn
    check(res, {
        'status is 200': (r) => r.status === 200, // Kiểm tra phản hồi có mã trạng thái 200
    });

}