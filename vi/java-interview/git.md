# Câu hỏi phỏng vấn Git

+ [Sự khác biệt giữa lệnh git commit và git push.](#sự-khác-biệt-giữa-lệnh-git-commit-và-git-push)
+ [Sự khác biệt giữa git pull và fetch.](#sự-khác-biệt-giữa-git-pull-và-fetch)
+ [Git stash là gì?](#git-stash-là-gì)
+ [Giải thích lệnh git status.](#giải-thích-lệnh-git-status)
+ [Giải thích lệnh git revert.](#giải-thích-lệnh-git-revert)
+ [Cách xem lịch sử commit trong git?](#cách-xem-lịch-sử-commit-trong-git)
+ [Sự khác biệt giữa git merge và rebase.](#sự-khác-biệt-giữa-git-merge-và-rebase)
+ [Cherry-pick trong GIT là gì?](#cherry-pick-trong-git-là-gì)

## Sự khác biệt giữa lệnh git commit và git push.

Lệnh git commit ghi lại các thay đổi vào kho lưu trữ cục bộ, trong khi lệnh git push cập nhật các thay đổi lên kho lưu trữ từ xa và các thay đổi sẽ được hiển thị cho những người dùng khác.

## Sự khác biệt giữa git pull và fetch.

Git fetch thu thập bất kỳ commit nào từ nhánh mục tiêu mà không tồn tại trong nhánh hiện tại của bạn và lưu trữ chúng trong kho lưu trữ cục bộ của bạn. Tuy nhiên, nó không hợp nhất chúng với nhánh hiện tại của bạn.

Git pull cập nhật nhánh HEAD hiện tại của bạn với những thay đổi mới nhất từ máy chủ từ xa. Điều này có nghĩa là pull không chỉ tải xuống dữ liệu mới mà còn tích hợp trực tiếp vào các tệp bản sao làm việc hiện tại của bạn.

## Git stash là gì?

git stash tạm thời lưu trữ (hoặc giấu) những thay đổi mà bạn đã thực hiện trên bản sao làm việc của mình để bạn có thể làm việc trên một thứ khác, 
và sau đó quay lại và áp dụng lại chúng sau.

## Giải thích lệnh git status.

Lệnh git status hiển thị trạng thái của thư mục làm việc và khu vực staging. 
Nó cho phép bạn xem những thay đổi nào đã được đưa vào staging, những thay đổi nào chưa được đưa vào, và những tệp nào không được Git theo dõi.

## Giải thích lệnh git revert.

Lệnh git revert được sử dụng để hoàn tác các thay đổi trong lịch sử commit của một kho lưu trữ. 
Git revert yêu cầu một tham chiếu commit được truyền vào. Để hoàn tác commit mới nhất, sử dụng lệnh git revert HEAD.

Lệnh git revert đơn giản tạo ra một commit mới mà ngược lại với một commit hiện có. 
Do đó, cần phải thực hiện lệnh git push để cập nhật vào kho lưu trữ từ xa.

## Cách xem lịch sử commit trong git?

Lệnh git log liệt kê các commit đã được thực hiện trong kho lưu trữ đó theo thứ tự ngược thời gian, để các commit gần đây nhất hiển thị trước.

## Sự khác biệt giữa git merge và rebase.

Cả hai đều thực hiện cùng một chức năng (tích hợp các nhánh) nhưng theo cách hơi khác nhau.

Lợi ích lớn nhất của việc rebase là bạn có một lịch sử dự án sạch hơn nhiều. 
Đầu tiên, nó loại bỏ các commit hợp nhất không cần thiết mà git merge yêu cầu.
Rebase là quá trình di chuyển hoặc kết hợp một chuỗi các commit đến một commit cơ sở mới.

## Cherry-pick trong GIT là gì?

Cherry picking có nghĩa là chọn một commit cụ thể từ một nhánh và áp dụng nó lên một nhánh khác.

Đây là một quy trình gồm 2 bước, trong đó bạn cần chuyển đến nhánh mà bạn muốn áp dụng commit và sau đó áp dụng commit bằng mã hash của nó.
```
git checkout master
git cherry-pick <commit-hash>
```

