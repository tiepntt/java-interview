# Các câu hỏi phỏng vấn Java cơ bản

+ [1. Java là gì? Các tính năng của Java là gì?](#1-java-là-gì-các-tính-năng-của-java-là-gì)
+ [2. Các khái niệm OOP là gì?](#2-các-khái-niệm-oop-là-gì)
+ [3. Các bộ điều chỉnh truy cập khác nhau trong Java là gì?](#3-các-bộ-điều-chỉnh-truy-cập-khác-nhau-trong-java-là-gì)
+ [4. SOLID có nghĩa là gì?](#4-solid-có-nghĩa-là-gì)
+ [5. Các kiểu dữ liệu nguyên thủy là gì?](#5-các-kiểu-dữ-liệu-nguyên-thủy-là-gì)
+ [6. Thứ tự thực thi của các khối khởi tạo và các Constructor trong Java](#6-thứ-tự-thực-thi-của-các-khối-khởi-tạo-và-các-constructor-trong-java)
+ [7. Sự khác biệt giữa Biểu thức Lambda và Closure trong Java?](#7-sự-khác-biệt-giữa-biểu-thức-lambda-và-closure-trong-java)
+ [8. Đưa ra danh sách các phương thức của lớp Object trong Java](#8-đưa-ra-danh-sách-các-phương-thức-của-lớp-object-trong-java)
+ [9. Sự khác biệt giữa atomic, volatile, synchronized là gì?](#9-sự-khác-biệt-giữa-atomic-volatile-synchronized-là-gì)
+ [10. Giải thích về việc hoàn tất đối tượng](#10-giải-thích-về-việc-hoàn-tất-đối-tượng)
+ [11. Serialization trong Java là gì?](#11-serialization-trong-java-là-gì)
+ [12. Khái niệm về Java Cloning](#12-khái-niệm-về-java-cloning)
+ [13. StringBuffer và StringBuilder](#13-stringbuffer-và-stringbuilder)
+ [14. Đặt tên một số bộ phân tích thường được sử dụng để phân tích tài liệu XML](#14-đặt-tên-một-số-bộ-phân-tích-thường-được-sử-dụng-để-phân-tích-tài-liệu-xml)
+ [15. Những tính năng mới nào đã được thêm vào Java 8?](#15-những-tính-năng-mới-nào-đã-được-thêm-vào-java-8)
+ [16. Những tính năng mới nào đã được thêm vào Java 11?](#16-những-tính-năng-mới-nào-đã-được-thêm-vào-java-11)
+ [17. Biểu thức Lambda là gì và nó được sử dụng để làm gì?](#17-biểu-thức-lambda-là-gì-và-nó-được-sử-dụng-để-làm-gì)
+ [18. Ngoại lệ là gì?](#18-ngoại-lệ-là-gì)
+ [19. Làm thế nào để tạo ra OutOfMemoryError và StackOverflowException?](#19-làm-thế-nào-để-tạo-ra-outofmemoryerror-và-stackoverflowexception)
+ [20. Chú thích là gì? Các trường hợp sử dụng điển hình của chúng là gì?](#20-chú-thích-là-gì-các-trường-hợp-sử-dụng-điển-hình-của-chúng-là-gì)
+ [21. Lớp không thay đổi là gì?](#21-lớp-không-thay-đổi-là-gì)

## 1. Java là gì? Các tính năng của Java là gì?
Java là một ngôn ngữ lập trình cấp cao và độc lập với nền tảng.
+ Java cũng là một ngôn ngữ hướng đối tượng. Tuy nhiên, mọi thứ (trừ các kiểu cơ bản) đều là một đối tượng trong Java.
+ Độc lập nền tảng: Một chương trình duy nhất có thể hoạt động trên nhiều nền tảng khác nhau mà không cần sửa đổi.
+ Hiệu suất cao: JIT (Just In Time compiler) cho phép hiệu suất cao trong Java. 
JIT chuyển đổi bytecode thành ngôn ngữ máy và sau đó JVM bắt đầu thực thi.
+ Đa luồng. Chúng ta có thể viết các chương trình Java xử lý nhiều tác vụ cùng một lúc bằng cách định nghĩa nhiều luồng.
+ Java không hỗ trợ kế thừa đa thông qua lớp. Điều này có thể đạt được thông qua các giao diện trong Java.
+ Bảo mật: Java an toàn vì nó không sử dụng con trỏ rõ ràng.
+ Java là một ngôn ngữ lập trình mạnh mẽ vì nó sử dụng quản lý bộ nhớ mạnh mẽ. Các khái niệm như thu gom rác tự động.

[quay lại đầu trang](#basic-java-interview-questions)

## 2. Các khái niệm OOP là gì?
Các khái niệm OOP bao gồm:
+ **Kế thừa** 
    + Kế thừa có nghĩa là một lớp có thể mở rộng sang lớp khác. 
    Nhờ đó, mã có thể được tái sử dụng từ lớp này sang lớp khác. 
    Lớp hiện có được gọi là lớp cha (Super class) trong khi lớp kế thừa được gọi là lớp con (sub class).
    Kế thừa chỉ áp dụng cho các thành viên công khai (public) và bảo vệ (protected). Các thành viên riêng tư (private) không thể được kế thừa.
+ **Đóng gói**
    + Bảo vệ mã khỏi người khác.
      Duy trì mã dễ dàng hơn.
      Để thực hiện đóng gói, chúng ta cần làm cho tất cả các biến thể hiện (instance variables) trở thành riêng tư và tạo setter và getter cho các biến đó. 
      Điều này sẽ buộc người khác phải gọi các setter thay vì truy cập dữ liệu trực tiếp.
+ **Đa hình**
    + Một đối tượng đơn có thể tham chiếu đến lớp cha hoặc lớp con tùy thuộc vào loại tham chiếu, điều này được gọi là đa hình.
    Đa hình áp dụng cho việc ghi đè (overriding).
+ **Trừu tượng**
    + Trừu tượng trong lập trình hướng đối tượng có nghĩa là ẩn giấu các chi tiết phức tạp nhưng chỉ phơi bày 
    các đặc điểm và hành vi thiết yếu liên quan đến ngữ cảnh.
+ **Giao diện**
    + Kế thừa đa lớp không thể đạt được trong Java. Để khắc phục vấn đề này, khái niệm Giao diện (Interface) được giới thiệu.
   Một giao diện là một mẫu chỉ có các khai báo phương thức mà không có phần thực hiện phương thức.

[quay lại đầu trang](#basic-java-interview-questions)

## 3. Các bộ sửa đổi quyền truy cập khác nhau trong Java là gì?
+ Bộ sửa đổi quyền truy cập **Mặc định** không có bất kỳ chỉ định quyền truy cập nào cho các thành viên dữ liệu, lớp và phương thức, và có thể truy cập trong cùng một gói.
+ Bộ sửa đổi quyền truy cập **Riêng tư** được đánh dấu bằng từ khóa private, và chỉ có thể truy cập trong lớp, và thậm chí không thể truy cập bởi lớp từ cùng một gói.
+ Bộ sửa đổi quyền truy cập **Bảo vệ** có thể được truy cập trong cùng một gói hoặc các lớp con từ các gói khác nhau.
+ Bộ sửa đổi quyền truy cập **Công khai** có thể được truy cập từ mọi nơi.

[quay lại đầu trang](#basic-java-interview-questions)

## 4. SOLID có nghĩa là gì?
SOLID đại diện cho năm nguyên tắc của Java, đó là:

+ **S**: Nguyên tắc trách nhiệm đơn lẻ. Một lớp chỉ nên có một và chỉ một trách nhiệm.
+ **O**: Nguyên tắc mở-đóng. Các thành phần phần mềm nên mở để mở rộng, nhưng đóng để sửa đổi. 
Do đó, trình duyệt là một ví dụ hoàn hảo về chức năng mở để mở rộng nhưng đóng để sửa đổi.
+ **L**: Nguyên tắc thay thế Liskov. Các kiểu phải hoàn toàn có thể thay thế cho các kiểu cơ sở của chúng.
+ **I**: Nguyên tắc phân tách giao diện. 
Khách hàng không nên bị ép buộc phải triển khai các phương thức không cần thiết mà họ sẽ không sử dụng.
+ **D**: Nguyên tắc đảo ngược phụ thuộc. Nó phụ thuộc vào các trừu tượng chứ không phải vào các cụ thể. 
Theo đó, mô-đun cấp cao không bao giờ được dựa vào bất kỳ mô-đun cấp thấp nào.
Bạn đến một cửa hàng địa phương để mua một thứ gì đó, và bạn quyết định thanh toán bằng thẻ ghi nợ của mình. 
Vì vậy, khi bạn đưa thẻ của mình cho nhân viên thu ngân để thanh toán, 
nhân viên thu ngân không bận tâm kiểm tra loại thẻ bạn đã đưa.
Loại thẻ tín dụng hay thẻ ghi nợ mà bạn có để thanh toán thậm chí không quan trọng; họ sẽ chỉ quẹt thẻ. 

[quay lại đầu trang](#basic-java-interview-questions)

## 5. Các kiểu dữ liệu nguyên thủy là gì?

+ byte - 1 byte (8 bit). Min -2^7 Max 2^7-1
+ short - 2 byte (16 bit). Min -2^15 Max 2^15-1
+ char - 2 byte (16 bit). 2^16-1
+ int - 4 byte (32 bit). Min -2^31-1 Max 2^31
+ long - 8 byte (64 bit). Min -2^63-1 Max 2^63
+ float - 4 byte (32 bit). Min -2^31-1 Max 2^31
+ double - 8 byte (64 bit). Min -2^63-1 Max 2^63
+ boolean - NA thường là 1 byte

[quay lại đầu trang](#basic-java-interview-questions)

## 6. Thứ tự thực thi của các khối Khởi tạo và Các Hàm Tạo trong Java.

+ Các khối khởi tạo tĩnh sẽ được thực thi mỗi khi lớp được nạp lần đầu tiên vào JVM.
+ Các khối khởi tạo chạy theo thứ tự mà chúng xuất hiện trong chương trình.
+ Các khối Khởi tạo Thể hiện được thực thi mỗi khi lớp được khởi tạo và trước khi các hàm tạo được gọi. Chúng thường được đặt ở trên các hàm tạo trong dấu ngoặc nhọn.

[quay lại đầu trang](#basic-java-interview-questions)

## 7. Sự khác biệt giữa Biểu thức Lambda và Closure trong Java.
Java hỗ trợ biểu thức lambda nhưng không hỗ trợ Closure. 
Một biểu thức lambda là một hàm ẩn danh và có thể được định nghĩa như một tham số. 
Các Closure giống như các đoạn mã hoặc khối mã có thể được sử dụng mà không cần phải là một phương thức hoặc một lớp. 
Điều này có nghĩa là các Closure có thể truy cập các biến không được định nghĩa trong danh sách tham số của nó và cũng có thể gán giá trị cho một biến.

[quay lại đầu trang](#basic-java-interview-questions)

## 8. Danh sách các phương thức của lớp Object trong Java.

+ clone() - Tạo và trả về một bản sao của đối tượng này.
+ equals() - Chỉ ra liệu một đối tượng khác có "bằng" đối tượng này hay không.
+ finalize() - Được gọi bởi bộ thu gom rác trên một đối tượng khi việc thu gom rác xác định rằng không còn tham chiếu nào đến đối tượng đó.
+ getClass() - Trả về lớp runtime của một đối tượng.
+ hashCode() - Trả về giá trị mã băm cho đối tượng.
+ notify() - Đánh thức một luồng đơn đang chờ trên bộ giám sát của đối tượng này.
+ notifyAll() - Đánh thức tất cả các luồng đang chờ trên bộ giám sát của đối tượng này.
+ toString() - Trả về một chuỗi đại diện cho đối tượng.
+ wait() - Khiến luồng hiện tại chờ cho đến khi một luồng khác gọi phương thức notify() hoặc phương thức notifyAll() cho đối tượng này.

[quay lại đầu trang](#basic-java-interview-questions)

## 9. Sự khác biệt giữa atomic, volatile, synchronized là gì?

Nó cơ bản là đọc giá trị từ bộ nhớ, tăng giá trị lên và đưa lại vào bộ nhớ. Điều này hoạt động trong một luồng đơn nhưng ngày nay, trong kỷ nguyên đa nhân, đa CPU, và bộ nhớ đệm đa cấp, nó sẽ không hoạt động chính xác. Trước hết, nó tạo ra tình trạng tranh chấp (nhiều luồng có thể đọc giá trị cùng một lúc), nhưng cũng có vấn đề về khả năng nhìn thấy. Giá trị có thể chỉ được lưu trữ trong bộ nhớ CPU "cục bộ" (một số bộ đệm) và không thể nhìn thấy đối với các CPU/nhân khác (và do đó - các luồng).

**Volatile**  
Khai báo một biến là volatile có nghĩa là việc sửa đổi giá trị của nó ngay lập tức ảnh hưởng đến bộ nhớ thực tế lưu trữ biến đó. Trình biên dịch không thể tối ưu hóa bất kỳ tham chiếu nào đến biến. Điều này đảm bảo rằng khi một luồng sửa đổi biến, tất cả các luồng khác sẽ thấy giá trị mới ngay lập tức.

**AtomicInteger**  
```java
private AtomicInteger counter = new AtomicInteger();

public int getNextUniqueIndex() {
  return counter.getAndIncrement();
}
```
Lớp AtomicInteger sử dụng các thao tác CPU cấp thấp CAS (so sánh và hoán đổi) (không cần đồng bộ hóa!) Khai báo một biến nguyên tử đảm bảo rằng các thao tác thực hiện trên biến xảy ra theo cách nguyên tử, tức là, tất cả các bước con của thao tác được hoàn thành trong luồng mà chúng được thực hiện và không bị gián đoạn bởi các luồng khác.

**Synchronizing**  
Tất cả các truy cập vào một biến chỉ cho phép một luồng duy nhất tại một thời điểm truy cập vào biến đó, và buộc tất cả các luồng khác phải chờ cho luồng đang truy cập đó giải phóng quyền truy cập vào biến.

Đồng bộ hóa xảy ra trên một đối tượng. Điều này có nghĩa là việc gọi một phương thức đồng bộ hóa của một lớp sẽ khóa đối tượng này của cuộc gọi. Các phương thức đồng bộ tĩnh sẽ khóa chính đối tượng lớp.

Tương tự, việc vào một khối đồng bộ hóa yêu cầu khóa đối tượng này của phương thức.

Truy cập đồng bộ vào một biến thường được thực hiện bằng cách sử dụng một bộ giám sát hoặc semaphore. Đây là các cơ chế mutex (loại trừ lẫn nhau) cấp thấp cho phép một luồng chiếm quyền kiểm soát một biến hoặc khối mã một cách độc quyền, buộc tất cả các luồng khác phải chờ nếu họ cũng cố gắng chiếm quyền kiểm soát cùng một mutex.

Điều này có nghĩa là một phương thức (hoặc khối) đồng bộ có thể được thực thi trong nhiều luồng cùng một lúc nếu chúng đang khóa trên các đối tượng khác nhau, nhưng chỉ một luồng có thể thực thi một phương thức (hoặc khối) đồng bộ tại một thời điểm cho bất kỳ đối tượng đơn nào. 

[quay lại đầu trang](#basic-java-interview-questions)

## 10. Giải thích về việc hoàn tất đối tượng

Được gọi bởi trình thu gom rác trên một đối tượng khi việc thu gom rác xác định rằng không còn tham chiếu nào đến đối tượng đó. Nếu một đối tượng không thể được truy cập từ bất kỳ đối tượng sống nào, điều này có nghĩa là nó có thể được thu gom rác một cách an toàn.

[quay lại đầu trang](#basic-java-interview-questions)

## 11. Serialization trong Java là gì?

Serialization đối tượng trong Java là một quá trình được sử dụng để chuyển đổi đối tượng thành định dạng nhị phân, có thể được lưu trữ vào đĩa hoặc gửi qua mạng đến bất kỳ máy ảo Java nào đang chạy khác; quá trình ngược lại của việc tạo đối tượng từ luồng nhị phân được gọi là deserialization trong Java. Java cung cấp API Serialization để tuần tự hóa và giải tuần tự hóa đối tượng, bao gồm java.io.Serializable, java.io.Externalizable, ObjectInputStream và ObjectOutputStream, v.v.

Serializable là một giao diện đánh dấu. Giao diện đánh dấu trong Java là các giao diện không có trường hoặc phương thức, hay nói một cách đơn giản, giao diện rỗng trong Java được gọi là giao diện đánh dấu.

Việc làm cho một lớp trở thành Serializable trong Java rất dễ dàng, lớp Java của bạn chỉ cần triển khai giao diện java.io.Serializable và JVM sẽ tự động xử lý việc tuần tự hóa các đối tượng theo định dạng mặc định.

Nếu bạn không khai báo rõ ràng SerialVersionUID, thì JVM sẽ tự động tạo ra nó dựa trên cấu trúc của lớp, điều này phụ thuộc vào các giao diện mà lớp triển khai và một số yếu tố khác có thể thay đổi.

serialVersionUID được sử dụng để đảm bảo rằng cùng một lớp (đã được sử dụng trong quá trình Serialization) được tải trong quá trình Deserialization. serialVersionUID được sử dụng cho việc kiểm soát phiên bản của đối tượng.

Bạn có thể tùy chỉnh quá trình Serialization bằng cách định nghĩa phương thức writeObject và readObject.

Để tránh việc tuần tự hóa một số biến, bạn có thể đánh dấu biến đó là static hoặc transient.

Giao diện Externalizable có nhiều quyền kiểm soát hơn đối với quá trình tuần tự hóa và bắt buộc phải ghi đè phương thức writeExternal và readExternal.

[quay lại đầu trang](#basic-java-interview-questions)

## 12. Khái Niệm Về Sao Chép Trong Java

Java hỗ trợ hai loại sao chép: - Sao chép nông và sao chép sâu. Mặc định, sao chép nông được sử dụng trong Java. 
Lớp Object có một phương thức clone() thực hiện sao chép nông. Sao chép nông sao chép càng ít càng tốt. 
Việc sử dụng bộ nhớ thấp hơn.
1) Nếu lớp chỉ có các thành viên kiểu dữ liệu nguyên thủy, thì một bản sao hoàn toàn mới của đối tượng sẽ được tạo ra 
và tham chiếu đến bản sao đối tượng mới sẽ được trả về.
2) Nếu lớp chứa các thành viên của bất kỳ loại lớp nào, thì chỉ có các tham chiếu đối tượng đến những thành viên đó được sao chép 
và do đó các tham chiếu thành viên trong cả đối tượng gốc cũng như đối tượng đã sao chép đều tham chiếu đến cùng một đối tượng.

Sao chép sâu là bản sao của chính đối tượng. Một bộ nhớ mới được cấp phát cho đối tượng và nội dung được sao chép.
Khi một bản sao sâu của đối tượng được thực hiện, các tham chiếu mới được tạo ra.
Một giải pháp là đơn giản triển khai phương thức tùy chỉnh của riêng bạn (ví dụ: deepCopy()) mà trả về 
một bản sao sâu của một thể hiện trong một trong các lớp của bạn. 
Giải pháp phổ biến khác cho vấn đề sao chép sâu là sử dụng Java Object Serialization.

[quay lại đầu trang](#basic-java-interview-questions)

## 13. StringBuffer so với StringBuilder

StringBuffer được đồng bộ hóa, còn StringBuilder thì không. 
StringBuilder nhanh hơn StringBuffer vì nó không được đồng bộ hóa.

[quay lại đầu trang](#basic-java-interview-questions)

## 14. Nêu tên một số bộ phân tích thường được sử dụng để phân tích tài liệu XML.

+ **Bộ phân tích Dom** - Phân tích tài liệu bằng cách tải toàn bộ nội dung của tài liệu và tạo ra cây phân cấp hoàn chỉnh của nó trong bộ nhớ. Sử dụng bộ phân tích DOM, chúng ta có thể phân tích, sửa đổi hoặc tạo một tài liệu XML.                           
+ **Bộ phân tích SAX** - Phân tích tài liệu dựa trên các sự kiện kích hoạt. 
Không tải toàn bộ tài liệu vào bộ nhớ. Bạn đang xử lý một tài liệu XML rất lớn 
mà cây DOM của nó sẽ tiêu tốn quá nhiều bộ nhớ. Chúng ta không có quyền truy cập ngẫu nhiên vào một tài liệu XML vì nó được xử lý theo cách chỉ tiến về phía trước. Sử dụng bộ phân tích SAX, chúng ta chỉ có thể phân tích hoặc sửa đổi một tài liệu XML.
+ **Bộ phân tích StAX** - Phân tích tài liệu theo cách tương tự như bộ phân tích SAX, 
nhưng StAX là một API KÉO trong khi SAX là một API ĐẨY. Điều này có nghĩa là trong trường hợp bộ phân tích StAX, 
ứng dụng khách cần yêu cầu bộ phân tích StAX lấy thông tin từ XML bất cứ khi nào 
cần thiết, nhưng trong trường hợp bộ phân tích SAX, ứng dụng khách được yêu cầu lấy thông tin 
khi bộ phân tích SAX thông báo cho ứng dụng khách rằng thông tin đã có sẵn.
Sử dụng bộ phân tích StAX, chúng ta có thể phân tích, sửa đổi và tạo một tài liệu XML.

[quay lại đầu trang](#basic-java-interview-questions)

## 15. Những Tính Năng Mới Nào Được Thêm Vào Java 8?

Java 8 đi kèm với một số tính năng mới, nhưng quan trọng nhất là những tính năng sau:

+ Biểu thức Lambda − một tính năng ngôn ngữ mới cho phép chúng ta coi hành động như là các đối tượng
+ Tham chiếu Phương thức − cho phép chúng ta định nghĩa Biểu thức Lambda bằng cách tham chiếu trực tiếp đến các phương thức thông qua tên của chúng
+ Optional − lớp bao bọc đặc biệt được sử dụng để diễn đạt tính tùy chọn
+ Giao diện Hàm – một giao diện có tối đa một phương thức trừu tượng; việc triển khai có thể được cung cấp bằng cách sử dụng một Biểu thức Lambda
+ Phương thức Mặc định − cho chúng ta khả năng thêm các triển khai đầy đủ trong các giao diện bên cạnh các phương thức trừu tượng
+ Nashorn, Công cụ JavaScript − công cụ dựa trên Java để thực thi và đánh giá mã JavaScript
+ Stream API − một lớp bộ lặp đặc biệt cho phép chúng ta xử lý các tập hợp đối tượng theo cách hàm
+ Date API − một API Ngày được cải tiến, không thay đổi, lấy cảm hứng từ JodaTime

[quay lại đầu trang](#basic-java-interview-questions)

## 16. Những Tính Năng Mới Nào Được Thêm Vào Java 11?

Java 11 đi kèm với một số tính năng mới, nhưng đáng chú ý nhất là những tính năng sau:

+ Các phương thức mới cho lớp String: isBlank, lines, strip, stripLeading, stripTrailing và repeat.
+ Các phương thức File mới − readString và writeString là các phương thức tĩnh từ lớp Files.
+ Khách hàng HTTP mới − cải thiện hiệu suất tổng thể và cung cấp hỗ trợ cho cả HTTP/1.1 và HTTP/2.
+ Hệ thống mô-đun – kể từ Java 9.

[quay lại đầu trang](#basic-java-interview-questions)

## 17. Biểu Thức Lambda Là Gì Và Nó Được Sử Dụng Để Làm Gì?

Nói một cách rất đơn giản, biểu thức lambda là một hàm mà chúng ta có thể tham chiếu và truyền đi như một đối tượng.

Hơn nữa, biểu thức lambda giới thiệu phong cách xử lý hàm trong Java, và tạo điều kiện cho việc viết mã gọn gàng và dễ đọc.

Kết quả là, biểu thức lambda là một sự thay thế tự nhiên cho các lớp ẩn danh như các tham số phương thức. Một trong những ứng dụng chính của chúng là định nghĩa các triển khai nội tuyến của các giao diện hàm.

[quay lại đầu trang](#basic-java-interview-questions)

## 18. Ngoại lệ là gì?

Ngoại lệ là một sự kiện bất thường xảy ra trong quá trình thực thi một chương trình và làm gián đoạn dòng chảy bình thường của các lệnh trong chương trình. Từ khóa throws được sử dụng để chỉ định rằng một phương thức có thể phát sinh một ngoại lệ trong quá trình thực thi của nó. Từ khóa throw cho phép chúng ta ném một đối tượng ngoại lệ để ngắt quãng dòng chảy bình thường của chương trình. Chúng ta có thể xử lý ngoại lệ bằng cách sử dụng câu lệnh try-catch-finally. Khối mã trong đó một ngoại lệ có thể xảy ra được bao quanh bởi một khối try. Khối này cũng được gọi là mã "được bảo vệ" hoặc "được bảo đảm". Nếu một ngoại lệ xảy ra, khối catch phù hợp với ngoại lệ đang được ném sẽ được thực thi, nếu không, tất cả các khối catch sẽ bị bỏ qua. Khối finally luôn được thực thi sau khi khối try thoát, bất kể một ngoại lệ có được ném ra hay không bên trong nó. Một ngoại lệ đã kiểm tra phải được xử lý trong một khối try-catch hoặc được khai báo trong một điều khoản throws; trong khi đó, một ngoại lệ không kiểm tra không yêu cầu phải được xử lý hoặc khai báo. Một ngoại lệ là một sự kiện đại diện cho một điều kiện mà từ đó có thể phục hồi, trong khi lỗi đại diện cho một tình huống bên ngoài thường không thể phục hồi được.

[quay lại đầu trang](#basic-java-interview-questions)

## 19. Cách tạo ra OutOfMemoryError và StackOverflowException?

OutOfMemoryError
```java
List<long[]> list = new LinkedList<long[]>();
while (true) {
  list.add(new long[65536]); // một số tùy ý
  // có thể sleep(1)?
}
```
StackOverflowException
```java
public class StackOverflowErrorExample {

    public static void recursivePrint(int num) {
        System.out.println("Số: " + num);

        if(num == 0)
            return;
        else
            recursivePrint(++num);
    }

    public static void main(String[] args) {
        StackOverflowErrorExample.recursivePrint(1);
    }
}
```
[trở về đầu trang](#basic-java-interview-questions)

## 20. Chú Thích Là Gì? Các Trường Hợp Sử Dụng Điển Hình Của Chúng Là Gì?

Chú thích là siêu dữ liệu gắn liền với các phần tử của mã nguồn của một chương trình và không ảnh hưởng đến hoạt động của mã mà chúng hoạt động.

Các trường hợp sử dụng điển hình của chúng là:
+ Thông tin cho trình biên dịch – với các chú thích, trình biên dịch có thể phát hiện lỗi hoặc ngăn chặn cảnh báo
+ Xử lý tại thời điểm biên dịch và triển khai – các công cụ phần mềm có thể xử lý các chú thích và tạo mã, tệp cấu hình, v.v.
+ Xử lý tại thời điểm chạy – các chú thích có thể được kiểm tra tại thời điểm chạy để tùy chỉnh hành vi của một chương trình

Chú thích là một dạng giao diện mà từ khóa interface được đặt trước bởi @, và phần thân của nó chứa các khai báo kiểu chú thích trông rất giống với các phương thức:
```java
public @interface SimpleAnnotation {
    String value();

    int[] types();
}
```
Sau khi chú thích được định nghĩa, bạn có thể bắt đầu sử dụng nó trong mã của bạn:
```java
@SimpleAnnotation(value = "một phần tử", types = 1)
public class Element {
    @SimpleAnnotation(value = "một thuộc tính", types = { 1, 2 })
    public Element nextElement;
}
```

[quay lại đầu trang](#basic-java-interview-questions)

## 21. Lớp không thay đổi là gì?

Các đối tượng không thay đổi là những đối tượng mà trạng thái của chúng không thể bị thay đổi sau khi được tạo ra. 
Lớp có các đối tượng sở hữu đặc điểm này có thể được gọi là lớp không thay đổi.
Ví dụ: String, Integer.
Các lớp không thay đổi là an toàn cho luồng vì bạn không thể thay đổi trạng thái của các đối tượng không thay đổi, 
do đó ngay cả khi hai luồng truy cập vào đối tượng không thay đổi song song, nó cũng sẽ không gây ra bất kỳ vấn đề nào.

Để tạo một lớp không thay đổi trong Java, bạn cần thực hiện các bước sau:
+ Khai báo lớp là final để nó không thể được mở rộng.
+ Đặt tất cả các trường là private để không cho phép truy cập trực tiếp.
+ Không cung cấp các phương thức setter cho các biến.
+ Đặt tất cả các trường có thể thay đổi là final để giá trị của chúng chỉ có thể được gán một lần.
+ Khởi tạo tất cả các trường thông qua một hàm khởi tạo thực hiện sao chép sâu.
+ Thực hiện sao chép các đối tượng trong các phương thức getter để trả về một bản sao thay vì trả về tham chiếu đối tượng thực tế.

[quay lại đầu trang](#basic-java-interview-questions)

