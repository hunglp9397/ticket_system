# Dự án Bán Vé Tàu Tết

## Mô Tả
Dự án **Bán Vé Tàu Tết** là một hệ thống bán vé tàu trực tuyến cho dịp Tết Nguyên Đán

## Công Nghệ Sử Dụng
- **Java**
- **Spring Boot**
- **Guava**
- **Redis**
- **Elasticsearch**
- **Logstash**
- **Kibana**
- **MySQL**
- **Grafana**
- **Prometheus**

## Tính Năng
- **Lấy thông tin vé**: Dùng **Guava (Local cache)** và **Redis (Distributed cache)**
- **Log và phân tích**: Hệ thống sử dụng **Logstash**, **Elasticsearch**, và **Kibana** để thu thập, phân tích và trực quan hóa log dữ liệu.
- **Giám sát hiệu suất**: Dùng Grafana, Prometheus thu thập và hiển thị các chỉ số hiệu suất ứng dụng
## Cài Đặt

### Prerequisites
- **Java 23**
- **Maven 3.8**
- **Docker** 

### Cài Đặt Dự Án
1. **Clone repository**
   ```bash
   git clone https://github.com/hunglp9397/ticket_system.git
   cd xxxx.com-section4
2. **Chạy các ứng dụng**
   ```bash
   cd environment
   docker-compose -f docker-compose-dev.yml up
   
3. **Thông tin ứng dụng**

   |               | Path                             |
   |---------------|----------------------------------|
   | App           | http://localhost:1122            |
   | Elasticsearch | http://localhost:9200            |
   | Prometheus    | http://localhost:9090/targets    |
   | Grafana       | http://localhost:3000/dashboards |
   | Redis         | http://localhost:6379            |
   | Mysql         | http://localhost:3307/vetautet   |
   | Kibana        | http://localhost:5601            |


3. Cài đặt Database
   ```bash
   cd environment/mysql/init
   Chạy file ticket_init.sql
   
4. Chạy ứng dụng
   ```bash
   mvn clean install
   mvn spring-boot:run

5. Thông tin API
- Import file json vào Postman 
## Kết quả
- ![rs_1.png](images_readme%2Frs_1.png)
- 
- ![rs_2.png](images_readme%2Frs_2.png)
- 
- ![rs_3.png](images_readme%2Frs_3.png)
## Hướng dẫn chi tiết cài đặt

# Hướng dẫn cài đặt
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

## 4. Cài đặt kibana 
- Tại tab menu -> Chọn Discover
- Chọn **Create Index Pattern**
- Nhập pattern muốn tìm kiếm, Ví dụ `pre-ticket-*`
- Sau đó chọn lại tab Discover thì sẽ xem được log
## 6. Test benchmark
- chạy file test-bench-mark-k6.js bằng lệnh : `k6 run test-bench-mark-k6.js`