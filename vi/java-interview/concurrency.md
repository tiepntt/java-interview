## Câu Hỏi Phỏng Vấn Về Tính Đồng Thời Trong Java

+ [Sự Khác Biệt Giữa Process và Thread Là Gì?](#sự-khác-biệt-giữa-process-và-thread-là-gì)
+ [Làm Thế Nào Để Tạo Một Instance Thread và Chạy Nó?](#làm-thế-nào-để-tạo-một-instance-thread-và-chạy-nó)
+ [Mô Tả Các Trạng Thái Khác Nhau Của Một Thread và Khi Nào Các Chuyển Đổi Trạng Thái Xảy Ra.](#mô-tả-các-trạng-thái-khác-nhau-của-một-thread-và-khi-nào-các-chuyển-đổi-trạng-thái-xảy-ra)
+ [Sự Khác Biệt Giữa Các Giao Diện Runnable và Callable Là Gì? Chúng Được Sử Dụng Như Thế Nào?](#sự-khác-biệt-giữa-các-giao-diện-runnable-và-callable-là-gì-chúng-được-sử-dụng-như-thế-nào)
+ [Thread Daemon Là Gì, Các Trường Hợp Sử Dụng Của Nó Là Gì? Làm Thế Nào Để Tạo Một Thread Daemon?](#thread-daemon-là-gì-các-trường-hợp-sử-dụng-của-nó-là-gì-làm-thế-nào-để-tạo-một-thread-daemon)
+ [Cờ Ngắt Của Thread Là Gì? Làm Thế Nào Để Đặt Và Kiểm Tra Nó? Nó Liên Quan Như Thế Nào Đến InterruptedException?](#cờ-ngắt-của-thread-là-gì-làm-thế-nào-để-đặt-và-kiểm-tra-nó-nó-liên-quan-như-thế-nào-đến-interruptedexception)
+ [Executor và ExecutorService Là Gì? Sự Khác Biệt Giữa Các Giao Diện Này Là Gì?](#executor-và-executorservice-là-gì-sự-khác-biệt-giữa-các-giao-diện-này-là-gì)
+ [Các Triển Khai Có Sẵn Của ExecutorService Trong Thư Viện Chuẩn Là Gì?](#các-triển-khai-có-sẵn-của-executorservice-trong-thư-viện-chuẩn-là-gì)
+ [Mô Hình Bộ Nhớ Java (JMM) Là Gì? Mô Tả Mục Đích và Ý Tưởng Cơ Bản Của Nó.](#mô-hình-bộ-nhớ-java-jmm-là-gì-mô-tả-mục-đích-và-ý-tưởng-cơ-bản-của-nó)
+ [Trường Hợp Volatile Là Gì và JMM Đưa Ra Những Đảm Bảo Nào Đối Với Trường Hợp Như Vậy?](#trường-hợp-volatile-là-gì-và-jmm-đưa-ra-những-đảm-bảo-nào-đối-với-trường-hợp-như-vậy)
+ [Các Phép Toán Nào Dưới Đây Là Nguyên Tử?](#các-phép-toán-nào-dưới-đây-là-nguyên-tử)
+ [JMM Đưa Ra Những Đảm Bảo Đặc Biệt Nào Đối Với Các Trường Hợp Cuối Cùng Của Một Lớp?](#jmm-đưa-ra-những-đảm-bảo-đặc-biệt-nào-đối-với-các-trường-hợp-cuối-cùng-của-một-lớp)
+ [Ý Nghĩa Của Từ Khóa Synchronized Trong Định Nghĩa Của Một Phương Thức Là Gì? Của Một Phương Thức Tĩnh? Trước Một Khối?](#ý-nghĩa-của-từ-khóa-synchronized-trong-định-nghĩa-của-một-phương-thức-là-gì-của-một-phương-thức-tĩnh-trước-một-khối)
+ [Nếu Hai Thread Gọi Một Phương Thức Synchronized Trên Các Instance Đối Tượng Khác Nhau Đồng Thời, Một Trong Các Thread Này Có Thể Bị Chặn Không? Thế Còn Nếu Phương Thức Là Tĩnh?](#nếu-hai-thread-gọi-một-phương-thức-synchronized-trên-các-instance-đối-tượng-khác-nhau-đồng-thời-một-trong-các-thread-này-có-thể-bị-chặn-không-thế-còn-nếu-phương-thức-là-tĩnh)
+ [Mô Tả Các Điều Kiện Của Deadlock, Livelock và Starvation. Mô Tả Các Nguyên Nhân Có Thể Có Của Những Điều Kiện Này.](#mô-tả-các-điều-kiện-của-deadlock-livelock-và-starvation-mô-tả-các-nguyên-nhân-có-thể-có-của-những-điều-kiện-này)
+ [Mô Tả Mục Đích và Các Trường Hợp Sử Dụng Của Khung Fork/Join.](#mô-tả-mục-đích-và-các-trường-hợp-sử-dụng-của-khung-forkjoin)

### Sự Khác Biệt Giữa Process và Thread Là Gì?

Cả process và thread đều là các đơn vị của tính đồng thời, nhưng chúng có một sự khác biệt cơ bản: 
process không chia sẻ bộ nhớ chung, trong khi thread thì có.

Từ quan điểm của hệ điều hành, một process là một phần mềm độc lập chạy trong không gian bộ nhớ ảo của nó. 
Bất kỳ hệ điều hành đa nhiệm nào (có nghĩa là hầu hết các hệ điều hành hiện đại) phải tách biệt các process 
trong bộ nhớ để một process bị lỗi không kéo theo tất cả các process khác bằng cách làm rối loạn bộ nhớ chung.

Do đó, các process thường được cách ly, và chúng hợp tác thông qua giao tiếp giữa các process, được định nghĩa 
bởi hệ điều hành như một loại API trung gian.

Ngược lại, một thread là một phần của một ứng dụng chia sẻ bộ nhớ chung với các thread khác của cùng một ứng dụng. 
Việc sử dụng bộ nhớ chung cho phép giảm thiểu nhiều chi phí, thiết kế các thread để hợp tác và trao đổi dữ liệu giữa chúng nhanh hơn nhiều.

### Làm Thế Nào Để Tạo Một Instance Thread và Chạy Nó?

Để tạo một instance của một thread, bạn có hai tùy chọn. Đầu tiên, truyền một instance Runnable vào constructor của nó và gọi start(). 
Runnable là một giao diện chức năng, vì vậy nó có thể được truyền dưới dạng biểu thức lambda:

```java
Thread thread1 = new Thread(() ->
  System.out.println("Hello World from Runnable!"));
thread1.start();
```
Thread cũng triển khai Runnable, vì vậy một cách khác để bắt đầu một thread là tạo một lớp con vô danh, 
ghi đè phương thức run() của nó, và sau đó gọi start():
```java
Thread thread2 = new Thread() {
    @Override
    public void run() {
        System.out.println("Hello World from subclass!");
    }
};
thread2.start();
```

### Mô Tả Các Trạng Thái Khác Nhau Của Một Thread và Khi Nào Các Chuyển Đổi Trạng Thái Xảy Ra.

Trạng thái của một Thread có thể được kiểm tra bằng cách sử dụng phương thức Thread.getState(). Các trạng thái khác nhau của một Thread 
được mô tả trong enum Thread.State. Chúng là:

+ NEW — một instance Thread mới chưa được khởi động qua Thread.start()
+ RUNNABLE — một thread đang chạy. Nó được gọi là runnable vì tại bất kỳ thời điểm nào, nó có thể đang chạy hoặc đang chờ 
quantum thời gian tiếp theo từ bộ lập lịch thread. Một thread NEW vào trạng thái RUNNABLE khi bạn gọi Thread.start() trên nó
+ BLOCKED — một thread đang chạy trở thành blocked nếu nó cần vào một phần synchronized nhưng không thể làm điều đó do 
một thread khác đang giữ monitor của phần này
+ WAITING — một thread vào trạng thái này nếu nó chờ một thread khác thực hiện một hành động cụ thể. Ví dụ, 
một thread vào trạng thái này khi gọi phương thức Object.wait() trên một monitor mà nó giữ, hoặc phương thức Thread.join() 
trên một thread khác
+ TIMED_WAITING — giống như trên, nhưng một thread vào trạng thái này sau khi gọi các phiên bản timed của 
Thread.sleep(), Object.wait(), Thread.join() và một số phương thức khác
+ TERMINATED — một thread đã hoàn thành việc thực thi phương thức Runnable.run() của nó và đã kết thúc

### Sự Khác Biệt Giữa Các Giao Diện Runnable và Callable Là Gì? Chúng Được Sử Dụng Như Thế Nào?

Giao diện Runnable có một phương thức run duy nhất. Nó đại diện cho một đơn vị tính toán cần được thực hiện trong một thread riêng biệt. 
Giao diện Runnable không cho phép phương thức này trả giá trị hoặc ném ra các ngoại lệ không kiểm soát.

Giao diện Callable có một phương thức call duy nhất và đại diện cho một tác vụ có giá trị. 
Đó là lý do tại sao phương thức call trả về một giá trị. Nó cũng có thể ném ra các ngoại lệ. 
Callable thường được sử dụng trong các instance ExecutorService để bắt đầu một tác vụ bất đồng bộ và sau đó gọi instance 
Future được trả về để lấy giá trị của nó.

### Thread Daemon Là Gì, Các Trường Hợp Sử Dụng Của Nó Là Gì? Làm Thế Nào Để Tạo Một Thread Daemon?

Một thread daemon là một thread không ngăn cản JVM thoát. 
Khi tất cả các thread không phải daemon đã kết thúc, JVM đơn giản bỏ qua tất cả các thread daemon còn lại. 
Các thread daemon thường được sử dụng để thực hiện một số tác vụ hỗ trợ hoặc dịch vụ cho các thread khác, 
nhưng bạn nên lưu ý rằng chúng có thể bị bỏ qua bất cứ lúc nào.

Để khởi động một thread như một daemon, bạn nên sử dụng phương thức setDaemon() trước khi gọi start():
```java
Thread daemon = new Thread(()
  -> System.out.println("Hello from daemon!"));
daemon.setDaemon(true);
daemon.start();
```
Thú vị là, nếu bạn chạy điều này như một phần của phương thức main(), thông điệp có thể không được in ra. 
Điều này có thể xảy ra nếu thread main() kết thúc trước khi daemon đến điểm in thông điệp. 
Bạn thường không nên thực hiện bất kỳ I/O nào trong các thread daemon, 
vì chúng thậm chí sẽ không thể thực thi các khối finally của chúng và đóng các tài nguyên nếu bị bỏ qua.

### Cờ Ngắt Của Thread Là Gì? Làm Thế Nào Để Đặt Và Kiểm Tra Nó? Nó Liên Quan Như Thế Nào Đến InterruptedException?

Cờ ngắt, hoặc trạng thái ngắt, là một cờ nội bộ của Thread được thiết lập khi thread bị ngắt. 
Để đặt nó, chỉ cần gọi thread.interrupt() trên đối tượng thread.

Nếu một thread hiện đang ở trong một trong các phương thức ném InterruptedException (wait, join, sleep, v.v.), 
thì phương thức này ngay lập tức ném InterruptedException. Thread có thể xử lý ngoại lệ này theo logic của riêng nó.

Nếu một thread không ở trong phương thức như vậy và thread.interrupt() được gọi, không có gì đặc biệt xảy ra. 
Đó là trách nhiệm của thread để kiểm tra định kỳ trạng thái ngắt bằng cách sử dụng phương thức tĩnh Thread.interrupted() 
hoặc phương thức instance isInterrupted(). Sự khác biệt giữa các phương thức này là phương thức tĩnh Thread.interrupted() 
xóa cờ ngắt, trong khi isInterrupted() thì không.

### Executor và ExecutorService Là Gì? Sự Khác Biệt Giữa Các Giao Diện Này Là Gì?

Executor và ExecutorService là hai giao diện liên quan trong framework java.util.concurrent. 
Executor là một giao diện rất đơn giản với một phương thức execute duy nhất chấp nhận các instance Runnable để thực thi. 
Trong hầu hết các trường hợp, đây là giao diện mà mã thực thi tác vụ của bạn nên phụ thuộc vào.

ExecutorService mở rộng giao diện Executor với nhiều phương thức để xử lý và kiểm tra vòng đời của 
một dịch vụ thực thi tác vụ đồng thời (kết thúc các tác vụ trong trường hợp tắt) và các phương thức 
để xử lý tác vụ bất đồng bộ phức tạp hơn bao gồm Futures.

### Các Triển Khai Có Sẵn Của ExecutorService Trong Thư Viện Chuẩn Là Gì?

Giao diện ExecutorService có ba triển khai tiêu chuẩn:

+ ThreadPoolExecutor — để thực thi các tác vụ bằng cách sử dụng một pool các thread. 
Khi một thread hoàn thành việc thực thi tác vụ, nó quay trở lại pool. 
Nếu tất cả các thread trong pool đều bận, thì tác vụ phải chờ đến lượt của nó.
+ ScheduledThreadPoolExecutor cho phép lên lịch thực thi tác vụ thay vì chạy ngay lập tức khi một thread có sẵn. 
Nó cũng có thể lên lịch các tác vụ với tỷ lệ cố định hoặc độ trễ cố định.
+ ForkJoinPool là một ExecutorService đặc biệt để xử lý các tác vụ thuật toán đệ quy. 
Nếu bạn sử dụng một ThreadPoolExecutor thông thường cho một thuật toán đệ quy, bạn sẽ nhanh chóng thấy tất cả các thread của bạn 
đều bận chờ đợi các cấp độ đệ quy thấp hơn hoàn thành. ForkJoinPool triển khai 
thuật toán "cướp công việc" cho phép nó sử dụng các thread có sẵn một cách hiệu quả hơn.

### Mô Hình Bộ Nhớ Java (JMM) Là Gì? Mô Tả Mục Đích và Ý Tưởng Cơ Bản Của Nó.

Mô hình bộ nhớ Java là một phần của đặc tả ngôn ngữ Java được mô tả trong Chương 17.4. 
Nó xác định cách nhiều thread truy cập bộ nhớ chung trong một ứng dụng Java đồng thời, 
và cách dữ liệu thay đổi bởi một thread được làm cho có thể nhìn thấy bởi các thread khác. 
Mặc dù ngắn gọn và súc tích, JMM có thể khó nắm bắt nếu không có nền tảng toán học vững chắc.

Nhu cầu về mô hình bộ nhớ phát sinh từ thực tế rằng cách mã Java của bạn truy cập dữ liệu không phải là cách mà nó thực sự 
xảy ra ở các cấp độ thấp hơn. Việc ghi và đọc bộ nhớ có thể được sắp xếp lại hoặc tối ưu hóa bởi trình biên dịch Java, trình biên dịch JIT, 
và thậm chí CPU, miễn là kết quả quan sát được của những lần đọc và ghi này là giống nhau.

Điều này có thể dẫn đến những kết quả ngược lại khi ứng dụng của bạn được mở rộng ra nhiều thread vì hầu hết các 
tối ưu hóa này xem xét một thread thực thi đơn lẻ (các tối ưu hóa giữa các thread vẫn cực kỳ khó thực hiện). 
Một vấn đề lớn khác là bộ nhớ trong các hệ thống hiện đại là đa lớp: nhiều lõi của một bộ xử lý có thể giữ 
một số dữ liệu chưa được xóa trong bộ nhớ cache hoặc bộ đệm đọc/ghi của chúng, điều này cũng ảnh hưởng đến trạng thái của bộ nhớ quan sát từ các lõi khác.

Để làm mọi thứ trở nên tồi tệ hơn, sự tồn tại của các kiến trúc truy cập bộ nhớ khác nhau sẽ phá vỡ lời hứa của Java về 
“viết một lần, chạy ở mọi nơi”. May mắn cho các lập trình viên, JMM xác định một số đảm bảo mà bạn có thể dựa vào 
khi thiết kế các ứng dụng đa luồng. Tuân thủ những đảm bảo này giúp lập trình viên viết mã đa luồng 
ổn định và có thể di chuyển giữa các kiến trúc khác nhau.

Các khái niệm chính của JMM là:

+ Hành động, đây là các hành động giữa các thread có thể được thực hiện bởi một thread và được phát hiện bởi một thread khác, 
như đọc hoặc ghi các biến, khóa/mở khóa các monitor và v.v.
+ Hành động đồng bộ hóa, một tập hợp con nhất định của các hành động, như đọc/ghi một biến volatile, hoặc khóa/mở khóa một monitor
+ Thứ tự Chương Trình (PO), thứ tự tổng thể có thể quan sát được của các hành động bên trong một thread đơn
+ Thứ tự Đồng Bộ Hóa (SO), thứ tự tổng thể giữa tất cả các hành động đồng bộ hóa — nó phải nhất quán với 
Thứ Tự Chương Trình, tức là, nếu hai hành động đồng bộ hóa đến trước nhau trong PO, chúng xảy ra theo cùng một thứ tự trong SO
+ mối quan hệ synchronizes-with (SW) giữa một số hành động đồng bộ hóa nhất định, 
như mở khóa monitor và khóa cùng một monitor (trong một thread khác hoặc cùng một thread)
+ Thứ Tự Xảy Ra Trước — kết hợp PO với SW (điều này được gọi là đóng băng bắc cầu trong lý thuyết tập hợp) để tạo ra một thứ tự một phần 
của tất cả các hành động giữa các thread. Nếu một hành động xảy ra trước một hành động khác, thì kết quả của hành động đầu tiên 
có thể được quan sát bởi hành động thứ hai (ví dụ, ghi một biến trong một thread và đọc trong một thread khác)
+ tính nhất quán xảy ra trước — một tập hợp các hành động là HB-consistent nếu mọi lần đọc quan sát hoặc ghi lần cuối cùng đến 
địa điểm đó trong thứ tự xảy ra trước, hoặc một lần ghi khác thông qua cuộc đua dữ liệu
+ Thực thi — một tập hợp các hành động có thứ tự nhất định và các quy tắc nhất quán giữa chúng

Đối với một chương trình nhất định, chúng ta có thể quan sát nhiều thực thi khác nhau với các kết quả khác nhau. 
Nhưng nếu một chương trình được đồng bộ hóa đúng cách, thì tất cả các thực thi của nó dường như nhất quán tuần tự, 
có nghĩa là bạn có thể lý luận về chương trình đa luồng như một tập hợp các hành động xảy ra theo một thứ tự tuần tự nào đó. 
Điều này giúp bạn không phải suy nghĩ về việc sắp xếp lại bên trong, tối ưu hóa hoặc lưu trữ dữ liệu.

### Trường Hợp Volatile Là Gì và JMM Đưa Ra Những Đảm Bảo Nào Đối Với Trường Hợp Như Vậy?

Một trường hợp volatile có các thuộc tính đặc biệt theo mô hình bộ nhớ Java (xem Q9). 
Các lần đọc và ghi của một biến volatile là các hành động đồng bộ hóa, có nghĩa là chúng có một thứ tự tổng thể 
(tất cả các thread sẽ quan sát một thứ tự nhất quán của các hành động này). Một lần đọc của một biến volatile được đảm bảo sẽ quan sát 
lần ghi cuối cùng đến biến này, theo thứ tự này.

Nếu bạn có một trường được truy cập từ nhiều thread, với ít nhất một thread ghi vào nó, 
thì bạn nên xem xét việc làm cho nó volatile, nếu không sẽ có ít đảm bảo về những gì một thread nhất định sẽ đọc từ trường này.

Một đảm bảo khác cho volatile là tính nguyên tử của việc ghi và đọc các giá trị 64-bit (long và double). 
Nếu không có bộ điều chỉnh volatile, một lần đọc của trường như vậy có thể quan sát một giá trị được ghi một phần bởi một thread khác.

### Các Phép Toán Nào Dưới Đây Là Nguyên Tử?

+ ghi vào một int không volatile;
+ ghi vào một int volatile;
+ ghi vào một long không volatile;
+ ghi vào một long volatile;
+ tăng một long volatile?

Một lần ghi vào một biến int (32-bit) được đảm bảo là nguyên tử, bất kể nó có volatile hay không. 
Một biến long (64-bit) có thể được ghi trong hai bước riêng biệt, ví dụ, trên các kiến trúc 32-bit, 
vì vậy theo mặc định, không có đảm bảo về tính nguyên tử. 
Tuy nhiên, nếu bạn chỉ định bộ điều chỉnh volatile, một biến long được đảm bảo sẽ được truy cập nguyên tử.

Phép toán tăng thường được thực hiện trong nhiều bước (lấy một giá trị, thay đổi nó và ghi lại), 
vì vậy nó không bao giờ được đảm bảo là nguyên tử, cho dù biến có volatile hay không. 
Nếu bạn cần thực hiện phép tăng nguyên tử của một giá trị, bạn nên sử dụng các lớp AtomicInteger, AtomicLong, v.v.

### JMM Đưa Ra Những Đảm Bảo Đặc Biệt Nào Đối Với Các Trường Hợp Cuối Cùng Của Một Lớp?

JVM cơ bản đảm bảo rằng các trường cuối cùng của một lớp sẽ được khởi tạo trước khi bất kỳ thread nào nắm giữ đối tượng. 
Nếu không có đảm bảo này, một tham chiếu đến một đối tượng có thể được công bố, tức là trở nên có thể nhìn thấy, 
đối với một thread khác trước khi tất cả các trường của đối tượng này được khởi tạo, do các sắp xếp lại hoặc tối ưu hóa khác. 
Điều này có thể gây ra truy cập tranh chấp đến các trường này.

Đó là lý do tại sao, khi tạo một đối tượng bất biến, bạn nên luôn làm cho tất cả các trường của nó là cuối cùng, 
ngay cả khi chúng không thể truy cập qua các phương thức getter.

### Ý Nghĩa Của Từ Khóa Synchronized Trong Định Nghĩa Của Một Phương Thức Là Gì? Của Một Phương Thức Tĩnh? Trước Một Khối?

Từ khóa synchronized trước một khối có nghĩa là bất kỳ thread nào vào khối này phải chiếm giữ monitor 
(cái đối tượng trong dấu ngoặc). Nếu monitor đã được chiếm giữ bởi một thread khác, thread trước đó sẽ vào 
trạng thái BLOCKED và chờ cho đến khi monitor được giải phóng.
```java
synchronized(object) {
    // ...
}
```
Một phương thức instance synchronized có cùng nghĩa, nhưng instance tự nó hoạt động như một monitor.
```java
synchronized void instanceMethod() {
    // ...
}
```
Đối với một phương thức tĩnh synchronized, monitor là đối tượng Class đại diện cho lớp khai báo.
```java
static synchronized void staticMethod() {
    // ...
}
```

### Nếu Hai Thread Gọi Một Phương Thức Synchronized Trên Các Instance Đối Tượng Khác Nhau Đồng Thời, Một Trong Các Thread Này Có Thể Bị Chặn Không? Thế Còn Nếu Phương Thức Là Tĩnh?

Nếu phương thức là một phương thức instance, thì instance hoạt động như một monitor cho phương thức. 
Hai thread gọi phương thức trên các instance khác nhau chiếm giữ các monitor khác nhau, vì vậy không có thread nào bị chặn.

Nếu phương thức là tĩnh, thì monitor là đối tượng Class. 
Đối với cả hai thread, monitor là giống nhau, vì vậy một trong số chúng có thể sẽ bị chặn và chờ đợi thread kia thoát khỏi phương thức synchronized.

### Mục Đích Của Các Phương Thức Wait, Notify và NotifyAll Của Lớp Object Là Gì?

Một thread sở hữu monitor của đối tượng (ví dụ, một thread đã vào một phần synchronized được bảo vệ bởi đối tượng) 
có thể gọi object.wait() để tạm thời giải phóng monitor và cho các thread khác có cơ hội chiếm giữ monitor. 
Điều này có thể được thực hiện, ví dụ, để chờ một điều kiện nhất định.

Khi một thread khác đã chiếm giữ monitor đáp ứng điều kiện, nó có thể gọi object.notify() hoặc object.notifyAll() 
và giải phóng monitor. Phương thức notify đánh thức một thread đơn lẻ trong trạng thái chờ, và phương thức notifyAll đánh thức 
tất cả các thread đang chờ monitor này, và tất cả đều cạnh tranh để chiếm giữ lại khóa.

Triển khai BlockingQueue sau đây cho thấy cách nhiều thread làm việc cùng nhau thông qua mẫu wait-notify. 
Nếu chúng ta đưa một phần tử vào một hàng đợi trống, tất cả các thread đang chờ trong phương thức take sẽ thức dậy và cố gắng nhận giá trị. 
Nếu chúng ta đưa một phần tử vào một hàng đợi đầy, phương thức put sẽ chờ đợi cuộc gọi đến phương thức get. 
Phương thức get sẽ loại bỏ một phần tử và thông báo cho các thread đang chờ trong phương thức put rằng hàng đợi có một chỗ trống cho một mục mới.

```java
public class BlockingQueue<T> {

    private List<T> queue = new LinkedList<T>();

    private int limit = 10;

    public synchronized void put(T item) {
        while (queue.size() == limit) {
            try {
                wait();
            } catch (InterruptedException e) {}
        }
        if (queue.isEmpty()) {
            notifyAll();
        }
        queue.add(item);
    }

    public synchronized T take() throws InterruptedException {
        while (queue.isEmpty()) {
            try {
                wait();
            } catch (InterruptedException e) {}
        }
        if (queue.size() == limit) {
            notifyAll();
        }
        return queue.remove(0);
    }
    
}
```

### Mô Tả Các Điều Kiện Của Deadlock, Livelock và Starvation. Mô Tả Các Nguyên Nhân Có Thể Có Của Những Điều Kiện Này.

+ Deadlock là một điều kiện trong một nhóm các thread không thể tiến triển vì mỗi thread trong nhóm phải 
chiếm giữ một số tài nguyên đã được chiếm giữ bởi một thread khác trong nhóm. 
Trường hợp đơn giản nhất là khi hai thread cần khóa cả hai tài nguyên để tiến triển, 
tài nguyên đầu tiên đã được một thread khóa, và tài nguyên thứ hai bởi một thread khác. 
Các thread này sẽ không bao giờ chiếm giữ khóa cho cả hai tài nguyên và do đó sẽ không bao giờ tiến triển.
+ Livelock là một trường hợp của nhiều thread phản ứng với các điều kiện, hoặc sự kiện, do chính chúng tạo ra. 
Một sự kiện xảy ra trong một thread và phải được xử lý bởi một thread khác. Trong quá trình xử lý này, 
một sự kiện mới xảy ra mà phải được xử lý trong thread đầu tiên, và cứ như vậy. 
Các thread như vậy vẫn sống và không bị chặn, nhưng vẫn không tiến triển vì chúng làm quá tải lẫn nhau với công việc vô ích.
+ Starvation là một trường hợp của một thread không thể chiếm giữ tài nguyên vì các thread khác (hoặc các thread) chiếm giữ nó 
quá lâu hoặc có ưu tiên cao hơn. Một thread không thể tiến triển và do đó không thể thực hiện công việc hữu ích.

### Mô Tả Mục Đích và Các Trường Hợp Sử Dụng Của Khung Fork/Join.

Khung fork/join cho phép phân tán các thuật toán đệ quy. 
Vấn đề chính với việc phân tán đệ quy bằng cách sử dụng một cái gì đó như ThreadPoolExecutor là bạn có thể nhanh chóng hết 
các thread vì mỗi bước đệ quy sẽ yêu cầu một thread riêng, trong khi các thread ở trên ngăn xếp sẽ nhàn rỗi và chờ đợi.

Điểm vào của khung fork/join là lớp ForkJoinPool, là một triển khai của ExecutorService. 
Nó triển khai thuật toán cướp công việc, nơi các thread nhàn rỗi cố gắng “cướp” công việc từ các thread bận rộn. 
Điều này cho phép phân tán các phép tính giữa các thread khác nhau và tiến triển trong khi sử dụng ít thread hơn 
so với những gì sẽ yêu cầu với một pool thread thông thường.

