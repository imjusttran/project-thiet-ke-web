# Chợ Online - Marketplace

Web bán hàng hiện đại với UI/UX dễ sử dụng, responsive và hỗ trợ nhiều theme màu sắc.

## Tính năng

### 1. Xác thực người dùng
- Đăng ký tài khoản mới
- Đăng nhập/Đăng xuất
- Quản lý thông tin người dùng

### 2. Quản lý sản phẩm
- Đăng sản phẩm mới với nhiều hình ảnh (tối đa 5 ảnh)
- Thêm thông tin chi tiết: tên, mô tả, giá, danh mục, liên hệ
- Xem tất cả sản phẩm
- Quản lý sản phẩm của bản thân
- Xóa sản phẩm

### 3. Chat trực tiếp
- Chat giữa người mua và người bán
- Lịch sử tin nhắn được lưu trữ
- Giao diện chat thân thiện

### 4. Theme tùy chỉnh
Hỗ trợ 5 bảng màu:
- **Xanh Tươi**: #A4CD01, #E0D205, #02754B
- **Tối Hiện Đại**: #474747, #333333, #FD105E
- **Tím Nhẹ Nhàng**: #EAEFFE, #9787F3, #2D274B
- **Pastel Dịu**: #F6F3ED, #C2CBD3, #E281B1
- **Ấm Áp**: #F8DCD3, #82AAF2, #FB8A4C

### 5. Responsive Design
- Tối ưu cho điện thoại
- Tối ưu cho máy tính bảng
- Tối ưu cho desktop

### 6. Database
- Dữ liệu lưu trữ trong localStorage (file trong trình duyệt)
- Tự động lưu khi có thay đổi
- Bao gồm: users, products, chats

## Cách sử dụng

1. Mở file `index.html` trong trình duyệt
2. Đăng ký tài khoản mới hoặc đăng nhập
3. Đăng sản phẩm bằng nút "+ Đăng sản phẩm"
4. Duyệt sản phẩm và chat với người bán
5. Thay đổi theme bằng nút 🎨

## Cấu trúc file

```
├── index.html      # Giao diện chính
├── styles.css      # Styling và themes
├── app.js          # Logic và database
└── README.md       # Tài liệu
```

## Công nghệ

- HTML5
- CSS3 (CSS Variables, Grid, Flexbox)
- Vanilla JavaScript
- LocalStorage API

## Tính năng nổi bật

- UI/UX hiện đại, dễ nhìn
- Phối màu hài hòa, dịu mắt
- Không rối mắt, dễ sử dụng
- Responsive hoàn toàn
- Không cần server, chạy offline
- Theme switcher mượt mà
- Chat realtime (trong localStorage)

## Lưu ý

- Dữ liệu lưu trong localStorage của trình duyệt
- Xóa cache trình duyệt sẽ mất dữ liệu
- Hình ảnh được lưu dưới dạng base64
- Giới hạn 5 hình ảnh mỗi sản phẩm để tối ưu hiệu suất
