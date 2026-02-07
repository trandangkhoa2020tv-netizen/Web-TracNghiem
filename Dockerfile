# 1. Chọn hệ điều hành hoặc môi trường nền
FROM node:18-alpine

# 2. Thiết lập thư mục làm việc bên trong container
WORKDIR /app

# 3. Sao chép file cấu hình package vào trước để tận dụng cache
COPY package*.json ./

# 4. Cài đặt các thư viện cần thiết
RUN npm install

# 5. Sao chép toàn bộ mã nguồn vào container
COPY . .

# 6. Thông báo port mà ứng dụng sẽ chạy
EXPOSE 3000

# 7. Lệnh để khởi chạy ứng dụng khi container bắt đầu
CMD ["npm", "start"]