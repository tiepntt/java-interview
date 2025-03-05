# Câu hỏi phỏng vấn về Gradle

+ [Lợi ích của việc sử dụng Gradle.](#loi-ich-cua-viec-su-dung-gradle)
+ [Gradle wrapper là gì?](#gradle-wrapper-la-gi)
+ [Tên tệp kịch bản xây dựng Gradle là gì?](#ten-tep-kich-ban-xay-dung-gradle-la-gi)
+ [Các thành phần cốt lõi của kịch bản xây dựng Gradle là gì?](#cac-thanh-phan-cot-loi-cua-kich-ban-xay-dung-gradle-la-gi)
+ [Làm thế nào để buộc Gradle luôn tải xuống các phụ thuộc?](#lam-the-nao-de-buoc-gradle-luon-tai-xuong-cac-phu-thuoc)
+ [Ngôn ngữ xây dựng Gradle là gì?](#ngon-ngu-xay-dung-gradle-la-gi)

## Lợi ích của việc sử dụng Gradle.

Gradle hỗ trợ xây dựng đa dự án.
Nó cho phép sử dụng các kho Maven/Ivy hiện có.

## Gradle wrapper là gì?

Wrapper là một tập lệnh batch và là một trong những cách để thực hiện việc xây dựng Gradle. 
Khi được thực thi lần đầu tiên, nó tự động tải xuống Gradle và sau đó khởi động quá trình xây dựng.

Nó giúp thiết lập không gian làm việc Gradle nhanh chóng cho người dùng lần đầu (Không cần cài đặt) 
và cũng đảm bảo tất cả các nhà phát triển sử dụng cùng một phiên bản của Gradle.

## Tên tệp kịch bản xây dựng Gradle là gì?

build.gradle.

## Các thành phần cốt lõi của kịch bản xây dựng Gradle là gì?

Dự án và tác vụ là các thành phần cốt lõi. Groovy tổ chức các dự án dưới dạng danh sách các tác vụ.

Để xem danh sách các dự án có sẵn, sử dụng lệnh gradle projects, còn để xem danh sách các tác vụ, lệnh là gradle tasks.

## Làm thế nào để buộc Gradle luôn tải xuống các phụ thuộc?

Bạn có thể làm mới các phụ thuộc trong bộ nhớ cache của mình bằng cách sử dụng tùy chọn dòng lệnh --refresh-dependencies. 
Ngoài ra, việc xóa các tệp đã lưu trong bộ nhớ cache dưới ~/.gradle/caches sẽ khiến lần xây dựng Gradle tiếp theo tải xuống chúng một lần nữa.

## Ngôn ngữ xây dựng Gradle là gì?

Gradle cung cấp một ngôn ngữ chuyên biệt cho miền (DSL) để mô tả các quy trình xây dựng. 
Ngôn ngữ xây dựng này có sẵn bằng Groovy và Kotlin.
Tệp cấu hình xây dựng là build.gradle. Các tệp kịch bản Kotlin DSL sử dụng phần mở rộng tên tệp .gradle.kts.

