# Câu Hỏi Phỏng Vấn Quản Lý Bộ Nhớ Trong Java

+ [Câu nói “Bộ nhớ được quản lý trong Java” có nghĩa là gì?](#câu-nói-bộ-nhớ-được-quản-lý-trong-java-có-nghĩa-là-gì)
+ [Thu gom rác là gì và những lợi ích của nó là gì?](#thu-gom-rác-là-gì-và-những-lợi-ích-của-nó-là-gì)
+ [Có bất kỳ nhược điểm nào của thu gom rác không?](#có-bất-kỳ-nhược-điểm-nào-của-thu-gom-rác-không)
+ [Thuật ngữ “Dừng-Thế-Giới” có nghĩa là gì?](#thuật-ngữ-dừng-thế-giới-có-nghĩa-là-gì)
+ [Stack và Heap là gì? Mỗi cấu trúc bộ nhớ này lưu trữ gì và chúng có mối liên hệ như thế nào?](#)
+ [Thu gom rác thế hệ là gì và điều gì làm cho nó trở thành một phương pháp thu gom rác phổ biến?](#thu-gom-rác-thế-hệ-là-gì-và-điều-gì-làm-cho-nó-trở-thành-một-phương-pháp-thu-gom-rác-phổ-biến)
+ [Mô tả chi tiết cách thức hoạt động của thu gom rác thế hệ](#mô-tả-chi-tiết-cách-thức-hoạt-động-của-thu-gom-rác-thế-hệ)
+ [Khi nào một đối tượng trở nên đủ điều kiện để thu gom rác? Mô tả cách mà GC thu gom một đối tượng đủ điều kiện?](#khi-nào-một-đối-tượng-trở-nên-đủ-điều-kiện-để-thu-gom-rác-mô-tả-cách-mà-gc-thu-gom-một-đối-tượng-đủ-điều-kiện)
+ [Làm thế nào để bạn kích hoạt thu gom rác từ mã Java?](#làm-thế-nào-để-bạn-kích-hoạt-thu-gom-rác-từ-mã-java)
+ [Điều gì xảy ra khi không đủ không gian heap để chứa các đối tượng mới?](#điều-gì-xảy-ra-khi-không-đủ-không-gian-heap-để-chứa-các-đối-tượng-mới)
+ [Có thể “hồi sinh” một đối tượng đã trở nên đủ điều kiện để thu gom rác không?](#có-thể-hồi-sinh-một-đối-tượng-đã-trở-nên-đủ-điều-kiện-để-thu-gom-rác-không)
+ [Mô tả các tham chiếu mạnh, yếu, mềm và ảo và vai trò của chúng trong thu gom rác.](#mô-tả-các-tham-chiếu-mạnh-yếu-mềm-và-ảo-và-vai-trò-của-chúng-trong-thu-gom-rác)
+ [Giả sử chúng ta có một tham chiếu vòng (hai đối tượng tham chiếu lẫn nhau). Liệu cặp đối tượng này có thể trở nên đủ điều kiện để thu gom rác không và tại sao?](#giả-sử-chúng-ta-có-một-tham-chiếu-vòng-hai-đối-tượng-tham-chiếu-lẫn-nhau-liệu-cặp-đối-tượng-này-có-thể-trở-nên-đủ-điều-kiện-để-thu-gom-rác-không-và-tại-sao)
+ [Chuỗi được đại diện như thế nào trong bộ nhớ?](#chuỗi-được-đại-diện-như-thế-nào-trong-bộ-nhớ)
+ [StringBuilder là gì và các trường hợp sử dụng của nó là gì?](#stringbuilder-là-gì-và-các-trường-hợp-sử-dụng-của-nó-là-gì)

## Câu Chuyện “Bộ Nhớ Được Quản Lý Trong Java” Có Nghĩa Gì?

Bộ nhớ là tài nguyên chính mà một ứng dụng cần để hoạt động hiệu quả và giống như bất kỳ tài nguyên nào khác, nó là hạn chế. Do đó, việc phân bổ và giải phóng bộ nhớ cho các ứng dụng hoặc các phần khác nhau của một ứng dụng đòi hỏi nhiều sự chăm sóc và cân nhắc.

Tuy nhiên, trong Java, một lập trình viên không cần phải phân bổ và giải phóng bộ nhớ một cách rõ ràng – JVM và cụ thể hơn là Garbage Collector – có nhiệm vụ xử lý việc phân bổ bộ nhớ để lập trình viên không phải lo lắng về điều đó.

Điều này trái ngược với những gì xảy ra trong các ngôn ngữ như C, nơi mà lập trình viên có quyền truy cập trực tiếp vào bộ nhớ và thực sự tham chiếu đến các ô bộ nhớ trong mã của mình, tạo ra nhiều khả năng xảy ra rò rỉ bộ nhớ.

## Thu gom rác là gì và những lợi ích của nó là gì?

Thu gom rác là quá trình xem xét bộ nhớ heap, xác định các đối tượng nào đang được sử dụng và đối tượng nào không, 
và xóa các đối tượng không được sử dụng.

Một đối tượng đang được sử dụng, hay còn gọi là đối tượng được tham chiếu, có nghĩa là một phần nào đó của chương trình của bạn vẫn duy trì một con trỏ đến đối tượng đó. 
Một đối tượng không được sử dụng, hay đối tượng không được tham chiếu, không còn được bất kỳ phần nào của chương trình của bạn tham chiếu nữa. 
Vì vậy, bộ nhớ được sử dụng bởi một đối tượng không được tham chiếu có thể được thu hồi.

Lợi ích lớn nhất của thu gom rác là nó loại bỏ gánh nặng của việc phân bổ/giải phóng bộ nhớ thủ công 
cho chúng ta, để chúng ta có thể tập trung vào việc giải quyết vấn đề hiện tại.

## Có Nhược Điểm Nào Của Việc Thu Gom Rác Không?

Có. Mỗi khi bộ thu gom rác chạy, nó sẽ ảnh hưởng đến hiệu suất của ứng dụng. 
Điều này là do tất cả các luồng khác trong ứng dụng phải dừng lại để cho phép luồng thu gom rác thực hiện công việc của nó một cách hiệu quả.

Tùy thuộc vào yêu cầu của ứng dụng, điều này có thể trở thành một vấn đề thực sự không thể chấp nhận được đối với khách hàng. 
Tuy nhiên, vấn đề này có thể được giảm thiểu đáng kể hoặc thậm chí loại bỏ thông qua việc tối ưu hóa khéo léo và điều chỉnh bộ thu gom rác 
cũng như sử dụng các thuật toán GC khác nhau.

## Ý Nghĩa Của Thuật Ngữ “Dừng Thế Giới” Là Gì?

Khi luồng thu gom rác đang hoạt động, các luồng khác sẽ bị dừng lại, có nghĩa là ứng dụng sẽ tạm thời ngừng hoạt động. 
Điều này tương tự như việc dọn dẹp nhà cửa hoặc phun thuốc diệt côn trùng, nơi mà cư dân không được phép vào cho đến khi quá trình hoàn tất.

Tùy thuộc vào nhu cầu của một ứng dụng, việc thu gom rác “dừng thế giới” có thể gây ra sự ngừng trệ không thể chấp nhận được. 
Đó là lý do tại sao việc tinh chỉnh bộ thu gom rác và tối ưu hóa JVM là rất quan trọng để đảm bảo rằng sự ngừng trệ xảy ra ít nhất là có thể chấp nhận được.

## Stack và Heap là gì? Mỗi cấu trúc bộ nhớ này lưu trữ cái gì và chúng có mối liên hệ như thế nào?

Stack là một phần của bộ nhớ chứa thông tin về các cuộc gọi phương thức lồng nhau cho đến vị trí hiện tại trong chương trình. 
Nó cũng chứa tất cả các biến cục bộ và tham chiếu đến các đối tượng trên heap được định nghĩa trong các phương thức đang thực thi.

Cấu trúc này cho phép thời gian chạy trở về từ phương thức biết địa chỉ mà từ đó nó được gọi, 
và cũng xóa tất cả các biến cục bộ sau khi thoát khỏi phương thức. Mỗi luồng có stack riêng của nó.

Heap là một khối bộ nhớ lớn dành cho việc cấp phát các đối tượng. Khi bạn tạo một đối tượng với từ khóa new, 
nó sẽ được cấp phát trên heap. Tuy nhiên, tham chiếu đến đối tượng này sống trên stack.

## Thu gom rác theo thế hệ là gì và điều gì làm cho nó trở thành một phương pháp thu gom rác phổ biến?

Thu gom rác theo thế hệ có thể được định nghĩa một cách lỏng lẻo là chiến lược được sử dụng bởi bộ thu gom rác, trong đó bộ nhớ heap được chia thành một số phần gọi là các thế hệ, mỗi phần sẽ chứa các đối tượng dựa trên “tuổi” của chúng trong heap.

Mỗi khi bộ thu gom rác hoạt động, bước đầu tiên trong quá trình này được gọi là đánh dấu. Đây là lúc bộ thu gom rác xác định những phần bộ nhớ nào đang được sử dụng và những phần nào không. Đây có thể là một quá trình tốn thời gian nếu tất cả các đối tượng trong hệ thống phải được quét.

Khi ngày càng nhiều đối tượng được cấp phát, danh sách các đối tượng ngày càng dài dẫn đến thời gian thu gom rác kéo dài hơn. Tuy nhiên, phân tích thực nghiệm của các ứng dụng đã chỉ ra rằng hầu hết các đối tượng có tuổi thọ ngắn.

Với thu gom rác theo thế hệ, các đối tượng được nhóm lại dựa trên “tuổi” của chúng về số chu kỳ thu gom rác mà chúng đã sống sót. Bằng cách này, khối lượng công việc được phân bổ qua các chu kỳ thu gom nhỏ và lớn khác nhau.

Ngày nay, gần như tất cả các bộ thu gom rác đều là thế hệ. Chiến lược này rất phổ biến vì theo thời gian, nó đã chứng minh là giải pháp tối ưu.

## Mô Tả Chi Tiết Cách Thức Thu Gom Rác Theo Thế Hệ Hoạt Động

Để hiểu đúng cách thức thu gom rác theo thế hệ hoạt động, trước tiên cần nhớ cách cấu trúc heap trong Java để tạo điều kiện cho việc thu gom rác theo thế hệ.

Heap được chia thành các không gian nhỏ hơn hoặc các thế hệ. Những không gian này bao gồm Thế Hệ Trẻ, Thế Hệ Cũ hoặc Thế Hệ Đã Được Chấp Nhận, và Thế Hệ Vĩnh Cửu.

Thế hệ trẻ chứa hầu hết các đối tượng mới được tạo ra. Một nghiên cứu thực nghiệm về hầu hết các ứng dụng cho thấy phần lớn các đối tượng có tuổi thọ ngắn và do đó, sớm trở thành đủ điều kiện để thu gom. 
Vì vậy, các đối tượng mới bắt đầu hành trình của chúng ở đây và chỉ được “thăng cấp” lên không gian thế hệ cũ sau khi chúng đạt được một “tuổi” nhất định.

Thuật ngữ “tuổi” trong thu gom rác theo thế hệ đề cập đến số vòng thu gom mà đối tượng đã sống sót.

Không gian thế hệ trẻ được chia thành ba không gian: một không gian Eden và hai không gian sống sót như Survivor 1 (s1) và Survivor 2 (s2).

Thế hệ cũ chứa các đối tượng đã sống trong bộ nhớ lâu hơn một “tuổi” nhất định. 
Các đối tượng sống sót sau khi thu gom rác từ thế hệ trẻ được thăng cấp lên không gian này. 
Nó thường lớn hơn thế hệ trẻ. Vì có kích thước lớn hơn, việc thu gom rác tốn kém hơn 
và xảy ra ít thường xuyên hơn so với thế hệ trẻ.

Thế hệ vĩnh cửu hay còn được gọi là PermGen, chứa metadata cần thiết cho JVM để mô tả các lớp 
và phương thức được sử dụng trong ứng dụng. Nó cũng chứa hồ bơi chuỗi để lưu trữ các chuỗi đã được nội suy. 
Nó được JVM lấp đầy trong thời gian chạy dựa trên các lớp đang được ứng dụng sử dụng. 
Ngoài ra, các lớp và phương thức thư viện nền tảng có thể được lưu trữ ở đây.

Đầu tiên, bất kỳ đối tượng mới nào đều được cấp phát vào không gian Eden. Cả hai không gian sống sót đều bắt đầu trống rỗng. 
Khi không gian Eden đầy, một lần thu gom rác nhỏ được kích hoạt. Các đối tượng được tham chiếu được di chuyển đến không gian sống sót đầu tiên. 
Các đối tượng không được tham chiếu sẽ bị xóa.

Trong lần thu gom rác nhỏ tiếp theo, điều tương tự xảy ra với không gian Eden. Các đối tượng không được tham chiếu sẽ bị xóa và các đối tượng được tham chiếu sẽ được di chuyển đến một không gian sống sót. Tuy nhiên, trong trường hợp này, chúng được di chuyển đến không gian sống sót thứ hai (S2).

Ngoài ra, các đối tượng từ lần thu gom rác nhỏ cuối cùng trong không gian sống sót đầu tiên (S1) sẽ được tăng tuổi và di chuyển đến S2. 
Khi tất cả các đối tượng sống sót đã được di chuyển đến S2, cả S1 và không gian Eden đều được xóa sạch. 
Tại thời điểm này, S2 chứa các đối tượng với các độ tuổi khác nhau.

Tại lần thu gom rác nhỏ tiếp theo, quy trình tương tự được lặp lại. Tuy nhiên, lần này các không gian sống sót sẽ hoán đổi. 
Các đối tượng được tham chiếu được di chuyển đến S1 từ cả Eden và S2. Các đối tượng sống sót sẽ được tăng tuổi. Eden và S2 sẽ được xóa sạch.

Sau mỗi chu kỳ thu gom rác nhỏ, tuổi của mỗi đối tượng sẽ được kiểm tra. 
Những đối tượng đã đạt đến một độ tuổi tùy ý nhất định, ví dụ, 8, sẽ được thăng cấp từ thế hệ trẻ lên thế hệ cũ hoặc 
thế hệ đã được chấp nhận. Đối với tất cả các chu kỳ thu gom rác nhỏ tiếp theo, các đối tượng sẽ tiếp tục được thăng cấp lên không gian thế hệ cũ.

Điều này gần như hoàn thành quy trình thu gom rác trong thế hệ trẻ. 
Cuối cùng, một lần thu gom rác lớn sẽ được thực hiện trên thế hệ cũ để dọn dẹp và nén không gian đó. 
Đối với mỗi lần thu gom rác lớn, sẽ có nhiều lần thu gom rác nhỏ.

## Khi Nào Một Đối Tượng Trở Thành Đủ Điều Kiện Để Được Thu Gom Rác? Mô Tả Cách Gc Thu Gom Một Đối Tượng Đủ Điều Kiện?

Một đối tượng trở thành đủ điều kiện để được thu gom rác (Garbage Collection - GC) nếu nó không thể truy cập từ bất kỳ luồng sống nào hoặc từ bất kỳ tham chiếu tĩnh nào.

Trường hợp đơn giản nhất của một đối tượng trở thành đủ điều kiện để thu gom rác là khi tất cả các tham chiếu của nó đều là null. 
Các phụ thuộc vòng tròn mà không có bất kỳ tham chiếu bên ngoài nào còn sống cũng đủ điều kiện để được GC. 
Vì vậy, nếu đối tượng A tham chiếu đến đối tượng B và đối tượng B tham chiếu đến đối tượng A mà chúng không có bất kỳ tham chiếu sống nào khác, 
thì cả hai đối tượng A và B sẽ đủ điều kiện để được thu gom rác.

Một trường hợp rõ ràng khác là khi một đối tượng cha được đặt thành null. 
Khi một đối tượng bếp tham chiếu nội bộ đến một đối tượng tủ lạnh và một đối tượng chậu rửa, và đối tượng bếp được đặt thành null, 
thì cả tủ lạnh và chậu rửa sẽ trở thành đủ điều kiện để thu gom rác cùng với đối tượng cha của chúng, bếp.

## Làm Thế Nào Để Kích Hoạt Thu Gom Rác Từ Mã Java?

Bạn, với tư cách là lập trình viên Java, không thể ép buộc thu gom rác trong Java; nó chỉ được kích hoạt nếu JVM nghĩ rằng cần phải thực hiện thu gom rác dựa trên kích thước heap của Java.

Trước khi loại bỏ một đối tượng khỏi bộ nhớ, luồng thu gom rác sẽ gọi phương thức finalize() của đối tượng đó và cung cấp cơ hội để thực hiện bất kỳ loại dọn dẹp nào cần thiết. Bạn cũng có thể gọi phương thức này của mã đối tượng, tuy nhiên, không có đảm bảo rằng thu gom rác sẽ xảy ra khi bạn gọi phương thức này.

Ngoài ra, còn có các phương thức như System.gc() và Runtime.gc() được sử dụng để gửi yêu cầu thu gom rác đến JVM nhưng không có đảm bảo rằng thu gom rác sẽ xảy ra.

## Điều Gì Xảy Ra Khi Không Có Đủ Không Gian Heap Để Chứa Các Đối Tượng Mới?

Nếu không có không gian bộ nhớ để tạo một đối tượng mới trong Heap, Máy ảo Java sẽ ném ra lỗi OutOfMemoryError hoặc cụ thể hơn là java.lang.OutOfMemoryError heap space.

## Có Thể «Tái Sinh» Một Đối Tượng Đã Đủ Điều Kiện Để Thu Gom Rác Không?

Khi một đối tượng trở nên đủ điều kiện để thu gom rác, GC phải chạy phương thức finalize trên nó. 
Phương thức finalize được đảm bảo chỉ chạy một lần, do đó GC đánh dấu đối tượng là đã hoàn tất và cho nó nghỉ ngơi cho đến chu kỳ tiếp theo.

Trong phương thức finalize, bạn có thể về mặt kỹ thuật “tái sinh” một đối tượng, ví dụ, bằng cách gán nó cho một trường tĩnh. 
Đối tượng sẽ trở nên sống lại và không còn đủ điều kiện để thu gom rác, vì vậy GC sẽ không thu gom nó trong chu kỳ tiếp theo.

Tuy nhiên, đối tượng sẽ được đánh dấu là đã hoàn tất, vì vậy khi nó trở nên đủ điều kiện một lần nữa, 
phương thức finalize sẽ không được gọi. Về cơ bản, bạn chỉ có thể thực hiện mẹo “tái sinh” này một lần trong suốt vòng đời của đối tượng. 
Hãy cẩn thận rằng mẹo xấu xí này chỉ nên được sử dụng nếu bạn thực sự biết mình đang làm gì — tuy nhiên, 
việc hiểu mẹo này sẽ giúp bạn có cái nhìn sâu sắc về cách thức hoạt động của GC.

## Mô tả các Tham chiếu Mạnh, Yếu, Mềm và Ảo và Vai trò của Chúng trong Việc Thu Gom Rác.

Cũng như cách quản lý bộ nhớ trong Java, một kỹ sư có thể cần thực hiện tối ưu hóa nhiều nhất có thể để giảm thiểu độ trễ và tối đa hóa thông lượng trong các ứng dụng quan trọng. Cũng như việc không thể kiểm soát một cách rõ ràng khi nào việc thu gom rác được kích hoạt trong JVM, ta có thể ảnh hưởng đến cách thức nó xảy ra liên quan đến các đối tượng mà chúng ta đã tạo ra.

Java cung cấp cho chúng ta các đối tượng tham chiếu để kiểm soát mối quan hệ giữa các đối tượng mà chúng ta tạo ra và bộ thu gom rác.

Theo mặc định, mỗi đối tượng mà chúng ta tạo ra trong một chương trình Java đều được tham chiếu mạnh bởi một biến:
```java
StringBuilder sb = new StringBuilder();
```
Trong đoạn mã trên, từ khóa new tạo ra một đối tượng StringBuilder mới và lưu trữ nó trên heap. 
Biến sb sau đó lưu trữ một tham chiếu mạnh đến đối tượng này. Điều này có nghĩa là bộ thu gom rác sẽ không thể thu gom đối tượng StringBuilder cụ thể này do có một tham chiếu mạnh được giữ bởi sb. 
Câu chuyện chỉ thay đổi khi chúng ta gán null cho sb như sau:
```java
sb = null;
```
Sau khi gọi dòng lệnh trên, đối tượng sẽ đủ điều kiện để được thu gom.

Chúng ta có thể thay đổi mối quan hệ này giữa đối tượng và bộ thu gom rác bằng cách bọc nó bên trong một đối tượng tham chiếu khác nằm trong gói java.lang.ref.

Một tham chiếu mềm có thể được tạo ra cho đối tượng trên như sau:
```java
StringBuilder sb = new StringBuilder();
SoftReference<StringBuilder> sbRef = new SoftReference<>(sb);
sb = null;
```
Trong đoạn mã trên, chúng ta đã tạo ra hai tham chiếu đến đối tượng StringBuilder. 
Dòng đầu tiên tạo ra một tham chiếu mạnh sb và dòng thứ hai tạo ra một tham chiếu mềm sbRef. 
Dòng thứ ba sẽ khiến đối tượng đủ điều kiện để được thu gom nhưng bộ thu gom rác sẽ 
hoãn việc thu gom nó vì có sbRef.

Câu chuyện chỉ thay đổi khi bộ nhớ trở nên chật chội và JVM đang ở bờ vực ném ra lỗi OutOfMemory. 
Nói cách khác, các đối tượng chỉ có tham chiếu mềm sẽ được thu gom như một biện pháp cuối cùng để phục hồi bộ nhớ.

Một tham chiếu yếu có thể được tạo ra theo cách tương tự bằng cách sử dụng lớp WeakReference. 
Khi sb được gán null và đối tượng StringBuilder chỉ có một tham chiếu yếu, bộ thu gom rác của JVM sẽ 
không có bất kỳ sự thỏa hiệp nào và ngay lập tức thu gom đối tượng trong chu kỳ tiếp theo.

Một tham chiếu ảo tương tự như một tham chiếu yếu và một đối tượng chỉ có các tham chiếu ảo sẽ được thu gom 
mà không cần chờ đợi. Tuy nhiên, các tham chiếu ảo sẽ được xếp hàng ngay khi các đối tượng của chúng được thu gom. 
Chúng ta có thể kiểm tra hàng đợi tham chiếu để biết chính xác khi nào đối tượng đã được thu gom.

## Giả sử Chúng Ta Có Một Tham Chiếu Vòng (Hai Đối Tượng Tham Chiếu Lẫn Nhau). Cặp Đối Tượng Như Vậy Có Thể Trở Thành Đối Tượng Đủ Điều Kiện Để Thu Gom Rác Và Tại Sao?

Có, một cặp đối tượng với tham chiếu vòng có thể trở thành đối tượng đủ điều kiện để thu gom rác. 
Điều này là do cách mà bộ thu gom rác của Java xử lý các tham chiếu vòng. 
Nó coi các đối tượng là còn sống không phải khi chúng có bất kỳ tham chiếu nào đến chúng, mà khi chúng có thể truy cập được bằng cách điều hướng đồ thị đối tượng bắt đầu từ một gốc thu gom rác nào đó (một biến cục bộ của một luồng đang sống hoặc một trường tĩnh). 
Nếu một cặp đối tượng với tham chiếu vòng không thể truy cập từ bất kỳ gốc nào, nó được coi là đủ điều kiện để thu gom rác.

## Chuỗi được biểu diễn trong bộ nhớ như thế nào?

Một thể hiện của chuỗi (String) trong Java là một đối tượng với hai trường: một trường char[] value và một trường int hash. 
Trường value là một mảng các ký tự đại diện cho chính chuỗi, và trường hash chứa hashCode của một chuỗi, được khởi tạo với giá trị bằng không, được tính toán trong lần gọi hashCode() đầu tiên và được lưu trữ từ đó. 
Trong một trường hợp đặc biệt thú vị, nếu hashCode của một chuỗi có giá trị bằng không, nó sẽ phải được tính toán lại mỗi lần gọi hashCode().

Điều quan trọng là một thể hiện của chuỗi là bất biến (immutable): bạn không thể lấy hoặc sửa đổi mảng char[] bên dưới. 
Một đặc điểm khác của chuỗi là các chuỗi hằng số tĩnh được tải và lưu trữ trong một bể chuỗi (string pool). 
Nếu bạn có nhiều đối tượng String giống hệt nhau trong mã nguồn của mình, tất cả chúng sẽ được đại diện bởi một thể hiện duy nhất trong thời gian chạy.

## StringBuilder là gì và các trường hợp sử dụng của nó?

StringBuilder cho phép thao tác với các chuỗi ký tự bằng cách thêm, xóa và chèn các ký tự và chuỗi. Đây là một cấu trúc dữ liệu có thể thay đổi, trái ngược với lớp String là không thay đổi.

Khi nối hai đối tượng String, một đối tượng mới được tạo ra và các chuỗi được sao chép. Điều này có thể gây ra một gánh nặng lớn cho bộ thu gom rác nếu chúng ta cần tạo hoặc sửa đổi một chuỗi trong một vòng lặp. StringBuilder cho phép xử lý các thao tác trên chuỗi hiệu quả hơn nhiều.

StringBuffer khác với StringBuilder ở chỗ nó an toàn cho đa luồng. Nếu bạn cần thao tác với một chuỗi trong một luồng đơn, hãy sử dụng StringBuilder thay vì.

