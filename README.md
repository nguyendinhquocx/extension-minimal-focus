# Timer Tập Trung Tối Giản

Extension Chrome/Firefox đơn giản cho việc tập trung làm việc và nghỉ ngơi.

## Tính năng

- **Giao diện tối giản**: Nền trắng, chữ đen, không icon thừa
- **Chu kỳ đơn giản**: Chỉ có tập trung ↔ nghỉ ngơi
- **Tùy chỉnh thời gian**: Điều chỉnh thời gian tập trung và nghỉ ngơi
- **Thông báo tiếng Việt**: Âm thanh và thông báo khi chuyển trạng thái
- **Chạy nền**: Hoạt động ngầm, không cần mở tab

## Điều khiển

- **Play/Pause**: Bắt đầu/tạm dừng timer
- **Reset**: Khởi động lại session hiện tại
- **Skip**: Chuyển sang trạng thái tiếp theo
- **Settings**: Cài đặt thời gian và âm thanh

## Cài đặt

1. Mở Chrome Extensions (`chrome://extensions/`)
2. Bật "Developer mode"
3. Chọn "Load unpacked"
4. Chọn thư mục extension

## Cấu trúc

```
├── manifest.json          # Chrome extension config
├── html/                  # UI files
├── scripts/               # JavaScript logic
├── styles/                # CSS styling
├── components/            # Custom web components
└── assets/                # Icons và sounds
```

## Công nghệ

- **Vanilla JavaScript ES6** - Không dependencies
- **HTML5 & CSS3** - Giao diện responsive
- **Chrome Extension API** - Background service, notifications
- **Web Components** - Custom elements

---

Phiên bản tối giản, tập trung vào chức năng cốt lõi.