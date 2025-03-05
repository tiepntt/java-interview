# Câu Hỏi Phỏng Vấn Về Collections

+ [Mô tả Hệ Thống Phân Loại Collections. Các Giao Diện Chính Là Gì, và Sự Khác Biệt Giữa Chúng Là Gì?](#mô-tả-hệ-thống-phân-loại-collections-các-giao-diện-chính-là-gì-và-sự-khác-biệt-giữa-chúng-là-gì)
+ [Mô tả Các Triển Khai Khác Nhau Của Giao Diện Map và Sự Khác Biệt Trong Trường Hợp Sử Dụng Của Chúng.](#mô-tả-các-triển-khai-khác-nhau-của-giao-diện-map-và-sự-khác-biệt-trong-trường-hợp-sử-dụng-của-chúng)
+ [Giải Thích Sự Khác Biệt Giữa Linkedlist và Arraylist.](#giải-thích-sự-khác-biệt-giữa-linkedlist-và-arraylist)
+ [Sự Khác Biệt Giữa Hashset và Treeset Là Gì?](#sự-khác-biệt-giữa-hashset-và-treeset-là-gì)
+ [Hashmap Được Triển Khai Như Thế Nào Trong Java?](#hashmap-được-triển-khai-như-thế-nào-trong-java)
+ [Mục Đích Của Các Tham Số Dung Lượng Ban Đầu và Hệ Số Tải Của Một Hashmap Là Gì?](#mục-đích-của-các-tham-số-dung-lượng-ban-đầu-và-hệ-số-tải-của-một-hashmap-là-gì)
+ [Mô Tả Các Bộ Sưu Tập Đặc Biệt Cho Enums.](#mô-tả-các-bộ-sưu-tập-đặc-biệt-cho-enums)
+ [Sự Khác Biệt Giữa Các Bộ Lặp Fail-Fast và Fail-Safe Là Gì?](#sự-khác-biệt-giữa-các-bộ-lặp-fail-fast-và-fail-safe-là-gì)
+ [Bạn Có Thể Sử Dụng Các Giao Diện Comparable và Comparator Để Sắp Xếp Các Bộ Sưu Tập Như Thế Nào?](#bạn-có-thể-sử-dụng-các-giao-diện-comparable-và-comparator-để-sắp-xếp-các-bộ-sưu-tập-như-thế-nào)

## Mô Tả Cấu Trúc Hệ Thống Các Loại Bộ Sưu Tập. Các Giao Diện Chính Là Gì, Và Sự Khác Biệt Giữa Chúng Là Gì?

Giao diện **Iterable** đại diện cho bất kỳ bộ sưu tập nào có thể được lặp qua bằng vòng lặp for-each. 
Giao diện **Collection** kế thừa từ Iterable và thêm các phương thức tổng quát để kiểm tra xem một phần tử có trong bộ sưu tập hay không, thêm và xóa các phần tử khỏi bộ sưu tập, xác định kích thước của nó, v.v.

Các giao diện List, Set và Queue kế thừa từ giao diện Collection.

+ **List** là một bộ sưu tập có thứ tự, và các phần tử của nó có thể được truy cập theo chỉ số trong danh sách.
+ **Set** là một bộ sưu tập không có thứ tự với các phần tử khác nhau, tương tự như khái niệm toán học về một tập hợp.
+ **Queue** là một bộ sưu tập với các phương thức bổ sung để thêm, xóa và kiểm tra các phần tử, 
hữu ích cho việc giữ các phần tử trước khi xử lý.
+ Giao diện **Map** cũng là một phần của khung bộ sưu tập, nhưng nó không mở rộng Collection. 
Điều này được thiết kế để nhấn mạnh sự khác biệt giữa các bộ sưu tập và các ánh xạ, điều này rất khó để tập hợp 
dưới một trừu tượng chung. Giao diện Map đại diện cho một cấu trúc dữ liệu khóa-giá trị với các khóa duy nhất và không nhiều hơn một giá trị cho mỗi khóa.

[quay lại đầu trang](#collections-java-interview-questions)

## Mô Tả Các Triển Khai Khác Nhau Của Giao Diện Map Và Sự Khác Biệt Trong Trường Hợp Sử Dụng.

Một trong những triển khai thường được sử dụng nhất của giao diện Map là **HashMap**. 
Đây là một cấu trúc dữ liệu hash map điển hình cho phép truy cập các phần tử trong thời gian hằng số, hoặc O(1), 
nhưng không bảo toàn thứ tự và không an toàn cho đa luồng.

Để bảo toàn thứ tự chèn của các phần tử, bạn có thể sử dụng lớp **LinkedHashMap** mở rộng 
HashMap và thêm vào đó liên kết các phần tử thành một danh sách liên kết, với chi phí bổ sung có thể dự đoán được.

Lớp **TreeMap** lưu trữ các phần tử của nó trong cấu trúc cây đỏ-đen, 
cho phép truy cập các phần tử trong thời gian logarithmic, hoặc O(log(n)). 
Nó chậm hơn HashMap trong hầu hết các trường hợp, nhưng cho phép giữ các phần tử theo thứ tự dựa trên một Comparator nào đó.

**ConcurrentHashMap** là một triển khai an toàn cho đa luồng của hash map. 
Nó cung cấp khả năng đồng thời hoàn toàn cho các thao tác truy xuất (vì thao tác get không yêu cầu khóa) và khả năng đồng thời cao cho các cập nhật.

Lớp **Hashtable** đã có trong Java từ phiên bản 1.0. Nó không bị loại bỏ nhưng chủ yếu được coi là lỗi thời. 
Đây là một hash map an toàn cho đa luồng, nhưng không giống như ConcurrentHashMap, tất cả các phương thức của nó đều được đồng bộ hóa đơn giản, 
có nghĩa là tất cả các thao tác trên bản đồ này đều bị chặn, ngay cả việc truy xuất các giá trị độc lập.

[quay lại đầu trang](#collections-java-interview-questions)

## Giải thích sự khác biệt giữa LinkedList và ArrayList.

**ArrayList** là một triển khai của giao diện List dựa trên một mảng. 
ArrayList xử lý việc thay đổi kích thước của mảng này khi các phần tử được thêm vào hoặc xóa đi. 
Bạn có thể truy cập các phần tử của nó trong thời gian không đổi thông qua chỉ số trong mảng. 
Tuy nhiên, việc chèn hoặc xóa một phần tử sẽ dẫn đến việc dịch chuyển tất cả các phần tử tiếp theo, điều này có thể chậm nếu mảng 
rất lớn và phần tử được chèn hoặc xóa gần với đầu danh sách.

**LinkedList** là một danh sách liên kết đôi: các phần tử đơn lẻ được đặt vào các đối tượng Node 
có tham chiếu đến Node trước và Node tiếp theo. Triển khai này có thể tỏ ra hiệu quả hơn so với ArrayList 
nếu bạn có nhiều thao tác chèn hoặc xóa ở các phần khác nhau của danh sách, đặc biệt là khi danh sách lớn.

Tuy nhiên, trong hầu hết các trường hợp, ArrayList hoạt động tốt hơn LinkedList. Ngay cả việc dịch chuyển các phần tử trong ArrayList, 
mặc dù là một thao tác O(n), được thực hiện qua một cuộc gọi System.arraycopy() rất nhanh. 
Nó thậm chí có thể nhanh hơn so với thao tác chèn O(1) của LinkedList, thao tác này yêu cầu khởi tạo một đối tượng Node và cập nhật 
nhiều tham chiếu bên trong. LinkedList cũng có thể có một mức tiêu tốn bộ nhớ lớn do việc tạo ra 
nhiều đối tượng Node nhỏ. 

[quay lại đầu trang](#collections-java-interview-questions)

## Sự Khác Biệt Giữa HashSet và TreeSet Là Gì?

Cả hai lớp HashSet và TreeSet đều triển khai giao diện Set và đại diện cho các tập hợp các phần tử khác nhau. 
Ngoài ra, TreeSet còn triển khai giao diện NavigableSet. 
Giao diện này định nghĩa các phương thức tận dụng thứ tự của các phần tử.

**HashSet** được xây dựng dựa trên một HashMap, trong khi **TreeSet** được hỗ trợ bởi một thể hiện TreeMap, 
điều này xác định các thuộc tính của chúng: HashSet không giữ các phần tử theo một thứ tự cụ thể nào. 
Việc lặp qua các phần tử trong một HashSet sẽ cho ra chúng theo thứ tự ngẫu nhiên. 
Ngược lại, TreeSet sẽ cho ra các phần tử theo thứ tự dựa trên một Comparator đã được định nghĩa trước. 

[quay lại đầu trang](#collections-java-interview-questions)

## Cách HashMap được triển khai trong Java?

Lớp HashMap đại diện cho một cấu trúc dữ liệu bản đồ băm điển hình với một số lựa chọn thiết kế nhất định.

HashMap được hỗ trợ bởi một mảng có thể thay đổi kích thước với kích thước là lũy thừa của hai. 
Khi một phần tử được thêm vào HashMap, trước tiên mã băm (hashCode) của nó được tính toán (một giá trị int). 
Sau đó, một số bit thấp của giá trị này được sử dụng làm chỉ số mảng. 
Chỉ số này trực tiếp chỉ đến ô của mảng (gọi là bucket) nơi cặp khóa-giá trị này nên được đặt. 
Truy cập một phần tử bằng chỉ số của nó trong mảng là một thao tác rất nhanh O(1), đây là đặc điểm chính của cấu trúc bản đồ băm.

Tuy nhiên, hashCode không phải là duy nhất, và ngay cả với các hashCode khác nhau, chúng ta có thể nhận được cùng một vị trí trong mảng. 
Điều này được gọi là va chạm (collision). Có nhiều cách để giải quyết va chạm trong các cấu trúc dữ liệu bản đồ băm. 
Trong HashMap của Java, mỗi bucket thực sự không tham chiếu đến một đối tượng duy nhất, mà đến một cây đỏ-đen của tất cả các đối tượng 
đã rơi vào bucket này (trước Java 8, điều này là một danh sách liên kết).

Vì vậy, khi HashMap đã xác định được bucket cho một khóa, nó phải duyệt qua cây này để đặt cặp khóa-giá trị 
vào đúng vị trí của nó. Nếu một cặp với khóa như vậy đã tồn tại trong bucket, nó sẽ được thay thế bằng một cặp mới.

Để truy xuất đối tượng theo khóa của nó, HashMap lại phải tính toán hashCode cho khóa, 
tìm bucket tương ứng, duyệt qua cây, gọi equals trên các khóa trong cây và tìm khóa phù hợp.

HashMap có độ phức tạp O(1), hoặc độ phức tạp thời gian hằng số, trong việc thêm và lấy các phần tử. 
Tất nhiên, nhiều va chạm có thể làm giảm hiệu suất xuống O(log(n)) trong trường hợp xấu nhất, 
khi tất cả các phần tử rơi vào một bucket duy nhất. Điều này thường được giải quyết bằng cách cung cấp một hàm băm tốt với phân phối đồng đều.

Khi mảng nội bộ của HashMap được lấp đầy (thêm thông tin về điều này trong câu hỏi tiếp theo), 
nó sẽ tự động thay đổi kích thước để lớn gấp đôi. Thao tác này liên quan đến việc tái băm (xây dựng lại các cấu trúc dữ liệu nội bộ), 
điều này tốn kém, vì vậy bạn nên lên kế hoạch kích thước cho HashMap của mình trước. 

[quay lại đầu trang](#collections-java-interview-questions)

## Mục Đích của Tham Số Dung Lượng Ban Đầu và Hệ Số Tải của Hashmap Là Gì?

Tham số initialCapacity của hàm khởi tạo HashMap ảnh hưởng đến kích thước của cấu trúc dữ liệu nội bộ của HashMap, nhưng việc suy luận về kích thước thực tế của một bản đồ thì có phần phức tạp. Cấu trúc dữ liệu nội bộ của HashMap là một mảng có kích thước là lũy thừa của hai. Do đó, giá trị tham số initialCapacity sẽ được tăng lên đến lũy thừa tiếp theo của hai (ví dụ, nếu bạn đặt nó là 10, kích thước thực tế của mảng nội bộ sẽ là 16).

Hệ số tải của HashMap là tỷ lệ giữa số lượng phần tử chia cho số lượng bucket (tức là kích thước mảng nội bộ). Ví dụ, nếu một HashMap có 16 bucket chứa 12 phần tử, hệ số tải của nó là 12/16 = 0.75. Hệ số tải cao có nghĩa là có nhiều va chạm, điều này đồng nghĩa với việc bản đồ nên được thay đổi kích thước lên lũy thừa tiếp theo của hai. Do đó, tham số loadFactor là giá trị tối đa của hệ số tải của một bản đồ. Khi bản đồ đạt được hệ số tải này, nó sẽ thay đổi kích thước mảng nội bộ của mình lên giá trị lũy thừa tiếp theo của hai.

Mặc định, initialCapacity là 16 và loadFactor là 0.75, vì vậy bạn có thể đặt 12 phần tử vào một HashMap được khởi tạo bằng hàm khởi tạo mặc định mà không cần thay đổi kích thước. Điều này cũng đúng với HashSet, mà được hỗ trợ bởi một thể hiện HashMap bên trong.

Do đó, không dễ dàng để đưa ra một initialCapacity phù hợp với nhu cầu của bạn. Đây là lý do tại sao thư viện Guava có các phương thức Maps.newHashMapWithExpectedSize() và Sets.newHashSetWithExpectedSize() cho phép bạn xây dựng một HashMap hoặc HashSet có thể chứa số lượng phần tử dự kiến mà không cần thay đổi kích thước.

[quay lại đầu trang](#collections-java-interview-questions)

## Mô tả Bộ sưu tập Đặc biệt cho Enum.

**EnumSet** và **EnumMap** là các triển khai đặc biệt của giao diện Set và Map tương ứng. 
Bạn nên luôn sử dụng những triển khai này khi làm việc với enum vì chúng rất hiệu quả.

Một EnumSet chỉ là một vector bit với các "một" ở các vị trí tương ứng với giá trị thứ tự của các enum có trong bộ. 
Để kiểm tra xem một giá trị enum có trong bộ hay không, triển khai chỉ cần kiểm tra xem bit tương ứng 
trong vector có phải là "một" hay không, đây là một thao tác rất dễ dàng. 
Tương tự, một EnumMap là một mảng được truy cập bằng giá trị thứ tự của enum như một chỉ số. Trong trường hợp của EnumMap, 
không cần phải tính toán mã băm hoặc giải quyết xung đột.

[quay lại đầu trang](#collections-java-interview-questions)

## Sự Khác Biệt Giữa Các Bộ Lặp Fail-Fast và Fail-Safe Là Gì?

Các bộ lặp cho các tập hợp khác nhau có thể là fail-fast hoặc fail-safe, tùy thuộc vào cách chúng phản ứng với các sửa đổi đồng thời. Sửa đổi đồng thời không chỉ là một sửa đổi của tập hợp từ một luồng khác mà còn là sửa đổi từ cùng một luồng nhưng sử dụng một bộ lặp khác hoặc sửa đổi trực tiếp tập hợp.

+ **Bộ lặp fail-fast** (những bộ lặp được trả về bởi HashMap, ArrayList và các tập hợp không an toàn với luồng khác) 
lặp qua cấu trúc dữ liệu nội bộ của tập hợp và chúng ném ra ConcurrentModificationException ngay khi phát hiện một sửa đổi đồng thời.
+ **Bộ lặp fail-safe** (được trả về bởi các tập hợp an toàn với luồng như ConcurrentHashMap, CopyOnWriteArrayList) 
tạo một bản sao của cấu trúc mà chúng lặp qua. 
Chúng đảm bảo an toàn khỏi các sửa đổi đồng thời. Những nhược điểm của chúng bao gồm tiêu tốn bộ nhớ quá mức và lặp qua dữ liệu có thể đã lỗi thời trong trường hợp tập hợp đã bị sửa đổi.

[quay lại đầu trang](#collections-java-interview-questions)

## Làm Thế Nào Bạn Có Thể Sử Dụng Các Giao Diện Comparable và Comparator Để Sắp Xếp Các Bộ Sưu Tập?

Giao diện Comparable là một giao diện cho các đối tượng có thể được so sánh theo một thứ tự nào đó. 
Phương thức duy nhất của nó là compareTo, hoạt động trên hai giá trị: đối tượng chính nó và đối tượng tham số cùng loại. 
Ví dụ, các kiểu số như Integer, Long và các kiểu số khác đều triển khai giao diện này. 
Chuỗi (String) cũng triển khai giao diện này, và phương thức compareTo của nó so sánh các chuỗi theo thứ tự từ điển.

Giao diện Comparable cho phép sắp xếp danh sách các đối tượng tương ứng với phương thức Collections.sort() 
và duy trì thứ tự lặp lại trong các bộ sưu tập triển khai SortedSet và SortedMap. 
Nếu các đối tượng của bạn có thể được sắp xếp theo một logic nào đó, chúng nên triển khai giao diện Comparable.

Giao diện Comparable thường được triển khai bằng cách sử dụng thứ tự tự nhiên của các phần tử. 
Ví dụ, tất cả các số Integer được sắp xếp từ giá trị nhỏ hơn đến giá trị lớn hơn. 
Nhưng đôi khi bạn có thể muốn triển khai một loại thứ tự khác, ví dụ, để sắp xếp các số theo thứ tự giảm dần. 
Giao diện Comparator có thể giúp ích ở đây.

Lớp của các đối tượng bạn muốn sắp xếp không cần phải triển khai giao diện này. 
Bạn chỉ cần tạo một lớp triển khai và định nghĩa phương thức compare nhận 
hai đối tượng và quyết định cách sắp xếp chúng. Bạn có thể sử dụng thể hiện của lớp này để ghi đè thứ tự tự nhiên 
của phương thức Collections.sort() hoặc các thể hiện của SortedSet và SortedMap.

[quay lại đầu trang](#collections-java-interview-questions)

