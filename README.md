# BAN VE TAU - TIPS JAVASCRIPT

## 1. Config prometheus
- Kết quả:
- ![2.png](images_readme%2F2.png)

## 2. Config grafana-prometheus
- 1: Run grafana http://localhost:3000
- 2:  Tại menu 'Connection' chọn Datasource
- ![1.png](images_readme%2F1.png)
- 3:  Thêm connection prometheus: 
- ![3.png](images_readme%2F3.png)
- 4:  Bấm Save& Connect
- 5: Chọn import Dashboard
- ![4.png](images_readme%2F4.png)
- 6: Nhập ID 4701, bấm Load
- 7: Chọn datasource là Prometheus
- ![5.png](images_readme%2F5.png)
- 8: Kết quả:
- ![6.png](images_readme%2F6.png)

## 3.Config nodeExporter-Prometheus (Optional)
- 1: Tương tự như Mục 2. Nhập ID là 1860
- 2: Kết quả:
- ![7.png](images_readme%2F7.png)


## 6. Test benchmark
- chạy file test-bench-mark-k6.js bằng lệnh : `k6 run api_test_2000_users.js`