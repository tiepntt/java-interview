# Câu Hỏi Phỏng Vấn Java Spring

+ [Câu hỏi về Spring Boot](#câu-hỏi-về-spring-boot)
    + [Spring Boot là gì và các tính năng chính của nó là gì?](#spring-boot-là-gì-và-các-tính-năng-chính-của-nó-là-gì)
    + [Sự khác biệt giữa Spring và Spring Boot là gì?](#sự-khác-biệt-giữa-spring-và-spring-boot-là-gì)
    + [Cách vô hiệu hóa một cấu hình tự động cụ thể?](#cách-vô-hiệu-hóa-một-cấu-hình-tự-động-cụ-thể)
    + [Cách sử dụng Spring Boot cho các ứng dụng dòng lệnh?](#cách-sử-dụng-spring-boot-cho-các-ứng-dụng-dòng-lệnh)
    + [Điều gì có nghĩa là Spring Boot hỗ trợ ràng buộc linh hoạt?](#điều-gì-có-nghĩa-là-spring-boot-hỗ-trợ-ràng-buộc-linh-hoạt)
    + [Cách viết các bài kiểm tra tích hợp?](#cách-viết-các-bài-kiểm-tra-tích-hợp)
    + [Spring Boot Actuator được sử dụng để làm gì?](#spring-boot-actuator-được-sử-dụng-để-làm-gì)
    + [Spring Boot cung cấp những chú thích cơ bản nào?](#spring-boot-cung-cấp-những-chú-thích-cơ-bản-nào)
    + [Spring Boot hỗ trợ những máy chủ nhúng nào và cách thay đổi mặc định?](#spring-boot-hỗ-trợ-những-máy-chủ-nhúng-nào-và-cách-thay-đổi-mặc-định)
+ [Spring Core](#spring-core)
    + [Bạn biết những dự án con nào của Spring? Mô tả ngắn gọn chúng](#bạn-biết-những-dự-án-con-nào-của-spring-mô-tả-ngắn-gọn-chúng)
    + [Tiêm phụ thuộc là gì?](#tiêm-phụ-thuộc-là-gì)
    + [Chúng ta có thể tiêm beans trong Spring như thế nào?](#chúng-ta-có-thể-tiêm-beans-trong-spring-như-thế-nào)
    + [Cách tốt nhất để tiêm beans là gì và tại sao?](#cách-tốt-nhất-để-tiêm-beans-là-gì-và-tại-sao)
    + [Spring Bean là gì?](#spring-bean-là-gì)
    + [Phạm vi bean mặc định trong Spring Framework là gì?](#phạm-vi-bean-mặc-định-trong-spring-framework-là-gì)
    + [Cách xác định phạm vi của một bean?](#cách-xác-định-phạm-vi-của-một-bean)
    + [Beans đơn lẻ có an toàn với luồng không?](#beans-đơn-lẻ-có-an-toàn-với-luồng-không)
    + [Chu kỳ sống của Spring Bean trông như thế nào?](#chu-kỳ-sống-của-spring-bean-trông-như-thế-nào)
    + [Spring Security là gì?](#spring-security-là-gì)
    + [Kể tên một số mẫu thiết kế được sử dụng trong Spring Framework?](#kể-tên-một-số-mẫu-thiết-kế-được-sử-dụng-trong-spring-framework)
    + [Vai trò của chú thích @Autowired là gì?](#vai-trò-của-chú-thích-autowired-là-gì)
    + [Giải thích sự khác biệt giữa @Controller và @RestController?](#giải-thích-sự-khác-biệt-giữa-controller-và-restcontroller)
    + [Mô tả một PathVariable](#mô-tả-một-pathvariable)
    + [Xác thực sử dụng Spring MVC](#xác-thực-sử-dụng-spring-mvc)
    + [Chú thích @RequestBody và @ResponseBody là gì?](#chú-thích-requestbody-và-responsebody-là-gì)
    + [BindingResult là gì?](#bindingresult-là-gì)
+ [Spring Web MVC](#spring-web-mvc)
    + [Controller trong Spring MVC là gì?](#controller-trong-spring-mvc-là-gì)
    + [Chú thích @RequestMapping hoạt động như thế nào?](#chú-thích-requestmapping-hoạt-động-như-thế-nào)
+ [Spring Data Access](#spring-data-access)
    + [Lớp Spring JdbcTemplate là gì và cách sử dụng nó?](#lớp-spring-jdbctemplate-là-gì-và-cách-sử-dụng-nó)
    + [Cách kích hoạt giao dịch trong Spring và lợi ích của chúng là gì?](#cách-kích-hoạt-giao-dịch-trong-spring-và-lợi-ích-của-chúng-là-gì)
    + [Spring DAO là gì?](#spring-dao-là-gì)
+ [Spring Reactive](#spring-reactive)    
    + [Lập trình phản ứng là gì?](#lập-trình-phản-ứng-là-gì)
    + [Spring WebFlux là gì?](#spring-webflux-là-gì)
    + [Những nhược điểm của việc sử dụng luồng phản ứng là gì?](#những-nhược-điểm-của-việc-sử-dụng-luồng-phản-ứng-là-gì)

## Câu hỏi về Spring Boot

### Spring Boot là gì và các tính năng chính của nó là gì?

Spring Boot về cơ bản là một framework cho phát triển ứng dụng nhanh chóng, được xây dựng trên nền tảng của Spring Framework. Với khả năng tự cấu hình và hỗ trợ máy chủ ứng dụng nhúng, cùng với tài liệu phong phú và sự hỗ trợ từ cộng đồng mà nó có, Spring Boot là một trong những công nghệ phổ biến nhất trong hệ sinh thái Java tính đến thời điểm hiện tại.

Dưới đây là một số tính năng nổi bật:

+ Starters – một tập hợp các mô tả phụ thuộc để bao gồm các phụ thuộc liên quan một cách nhanh chóng
+ Tự cấu hình – một cách để tự động cấu hình một ứng dụng dựa trên các phụ thuộc có trên classpath
+ Actuator – để có được các tính năng sẵn sàng cho sản xuất như giám sát
+ Bảo mật
+ Ghi log

### Sự khác biệt giữa Spring và Spring Boot là gì?

Spring Framework cung cấp nhiều tính năng giúp việc phát triển ứng dụng web trở nên dễ dàng hơn. Các tính năng này bao gồm tiêm phụ thuộc, ràng buộc dữ liệu, lập trình hướng khía cạnh, truy cập dữ liệu và nhiều hơn nữa.

Trong suốt những năm qua, Spring đã trở nên ngày càng phức tạp hơn, và lượng cấu hình mà ứng dụng yêu cầu có thể gây khó khăn. Đây là lúc Spring Boot trở nên hữu ích — nó giúp việc cấu hình một ứng dụng Spring trở nên dễ dàng.

Về cơ bản, trong khi Spring không có ý kiến rõ ràng, Spring Boot lại có cái nhìn có chủ đích về nền tảng và thư viện, cho phép chúng ta bắt đầu nhanh chóng.

Dưới đây là hai lợi ích quan trọng nhất mà Spring Boot mang lại:

+ Tự cấu hình các ứng dụng dựa trên các artefact mà nó tìm thấy trên classpath
+ Cung cấp các tính năng phi chức năng chung cho các ứng dụng trong sản xuất, chẳng hạn như bảo mật hoặc kiểm tra sức khỏe

### Làm thế nào để vô hiệu hóa một cấu hình tự động cụ thể?

Nếu chúng ta muốn vô hiệu hóa một cấu hình tự động cụ thể, chúng ta có thể chỉ định nó bằng thuộc tính exclude của chú thích @EnableAutoConfiguration.

Ví dụ, đoạn mã sau đây vô hiệu hóa DataSourceAutoConfiguration:
```java
// các chú thích khác
@EnableAutoConfiguration(exclude = DataSourceAutoConfiguration.class)
public class MyConfiguration { }
```

Chúng ta cũng có thể vô hiệu hóa một cấu hình tự động bằng thuộc tính môi trường spring.autoconfigure.exclude. Cài đặt này trong tệp application.properties thực hiện cùng một điều như trước:

```properties
spring.autoconfigure.exclude=org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration
```

### Làm thế nào để sử dụng Spring Boot cho các ứng dụng dòng lệnh?

Giống như bất kỳ chương trình Java nào khác, một ứng dụng dòng lệnh Spring Boot phải có một phương thức main.

Phương thức này đóng vai trò là điểm vào, gọi phương thức SpringApplication#run để khởi động ứng dụng:

```java
@SpringBootApplication
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class);
        // các câu lệnh khác
    }
}
```

Lớp SpringApplication sau đó khởi động một container Spring và tự động cấu hình các bean.

Lưu ý rằng chúng ta phải truyền một lớp cấu hình cho phương thức run để hoạt động như nguồn cấu hình chính. Theo quy ước, tham số này là lớp điểm vào chính nó.

Sau khi gọi phương thức run, chúng ta có thể thực hiện các câu lệnh khác như trong một chương trình thông thường.

### Các nguồn cấu hình bên ngoài có thể là gì?

Spring Boot cung cấp hỗ trợ cho cấu hình bên ngoài, cho phép chúng ta chạy cùng một ứng dụng trong nhiều môi trường khác nhau. Chúng ta có thể sử dụng tệp thuộc tính, tệp YAML, biến môi trường, thuộc tính hệ thống và các tham số tùy chọn dòng lệnh để chỉ định các thuộc tính cấu hình.

Chúng ta có thể truy cập các thuộc tính đó bằng cách sử dụng chú thích @Value, một đối tượng ràng buộc thông qua chú thích @ConfigurationProperties, hoặc trừu tượng Environment.

### Điều gì có nghĩa là Spring Boot hỗ trợ ràng buộc linh hoạt?

Ràng buộc linh hoạt trong Spring Boot áp dụng cho việc ràng buộc an toàn kiểu của các thuộc tính cấu hình.

Với ràng buộc linh hoạt, khóa của một thuộc tính không cần phải khớp chính xác với tên thuộc tính. Một thuộc tính môi trường như vậy có thể được viết theo kiểu camelCase, kebab-case, snake_case, hoặc viết hoa với các từ được ngăn cách bằng dấu gạch dưới.

Ví dụ, nếu một thuộc tính trong một lớp bean với chú thích @ConfigurationProperties được đặt tên là myProp, nó có thể được ràng buộc với bất kỳ thuộc tính môi trường nào sau đây: myProp, my-prop, my_prop, hoặc MY_PROP.

### Làm thế nào để viết các bài kiểm tra tích hợp?

Khi chạy các bài kiểm tra tích hợp cho một ứng dụng Spring, chúng ta phải có một ApplicationContext.

Để làm cho cuộc sống của chúng ta dễ dàng hơn, Spring Boot cung cấp một chú thích đặc biệt cho việc kiểm tra — @SpringBootTest. Chú thích này tạo ra một ApplicationContext từ các lớp cấu hình được chỉ định bởi thuộc tính classes của nó.

Trong trường hợp thuộc tính classes không được thiết lập, Spring Boot sẽ tìm kiếm lớp cấu hình chính. Việc tìm kiếm bắt đầu từ gói chứa bài kiểm tra cho đến khi nó tìm thấy một lớp được chú thích bằng @SpringBootApplication hoặc @SpringBootConfiguration.

### Spring Boot Actuator được sử dụng để làm gì?

Về cơ bản, Actuator mang lại sức sống cho các ứng dụng Spring Boot bằng cách kích hoạt các tính năng sẵn sàng cho sản xuất. Những tính năng này cho phép chúng ta giám sát và quản lý các ứng dụng khi chúng đang chạy trong sản xuất.

Dưới đây là một số điểm cuối tích hợp sẵn phổ biến mà Actuator cung cấp:

+ env hiển thị các thuộc tính môi trường
+ health hiển thị thông tin sức khỏe của ứng dụng
+ httptrace hiển thị thông tin theo dõi HTTP
+ info hiển thị thông tin tùy ý của ứng dụng
+ metrics hiển thị thông tin về các chỉ số
+ loggers hiển thị và sửa đổi cấu hình của các logger trong ứng dụng
+ mappings hiển thị danh sách tất cả các đường dẫn @RequestMapping

### Spring Boot cung cấp những chú thích cơ bản nào?

Các chú thích chính mà Spring Boot cung cấp nằm trong org.springframework.boot.autoconfigure và các gói con của nó.

Dưới đây là một vài chú thích cơ bản:

+ @EnableAutoConfiguration – để làm cho Spring Boot tìm kiếm các bean cấu hình tự động trên classpath của nó và tự động áp dụng chúng
+ @SpringBootApplication – để đánh dấu lớp chính của một ứng dụng Boot. Chú thích này kết hợp @Configuration, @EnableAutoConfiguration và @ComponentScan với các thuộc tính mặc định của chúng.

### Spring Boot hỗ trợ những máy chủ nhúng nào, và làm thế nào để thay đổi mặc định?

Tính đến thời điểm hiện tại, Spring MVC hỗ trợ Tomcat, Jetty và Undertow. Tomcat là máy chủ ứng dụng mặc định được Spring Boot hỗ trợ thông qua web starter.

Spring WebFlux hỗ trợ Reactor Netty, Tomcat, Jetty và Undertow với Reactor Netty là mặc định.

Trong Spring MVC, để thay đổi mặc định, giả sử sang Jetty, chúng ta cần loại bỏ Tomcat và bao gồm Jetty trong các phụ thuộc.

## Spring Core

### Bạn biết những dự án con nào của Spring? Mô tả ngắn gọn về chúng.

+ Core – một mô-đun chính cung cấp các phần cơ bản của framework, chẳng hạn như IoC hoặc DI
+ JDBC – cho phép một lớp trừu tượng JDBC loại bỏ nhu cầu viết mã JDBC cho các cơ sở dữ liệu của nhà cung cấp cụ thể
+ Tích hợp ORM – cung cấp các lớp tích hợp cho các API ánh xạ đối tượng-quan hệ phổ biến, chẳng hạn như JPA, JDO và Hibernate
+ Web – một mô-đun tích hợp hướng web cung cấp tải tệp đa phần, 
các trình lắng nghe Servlet và các chức năng ngữ cảnh ứng dụng hướng web
+ MVC framework – một mô-đun web triển khai mẫu thiết kế Model View Controller
+ Mô-đun AOP – triển khai lập trình hướng khía cạnh cho phép định nghĩa các bộ chặn phương thức và điểm cắt rõ ràng

### Dependency Injection là gì?

Dependency injection, một khía cạnh của Inversion of Control (IoC), là một khái niệm chung cho rằng chúng ta không tạo ra các 
đối tượng của mình một cách thủ công mà thay vào đó mô tả cách chúng nên được tạo ra. 
Sau đó, một IoC container sẽ khởi tạo các lớp cần thiết nếu cần.

### Chúng ta có thể tiêm Beans vào Spring như thế nào?

Có một vài tùy chọn khác nhau để tiêm các bean Spring:

+ Tiêm qua Setter
+ Tiêm qua Constructor
+ Tiêm qua Field
Cấu hình có thể được thực hiện bằng cách sử dụng các tệp XML hoặc chú thích.

### Cách tốt nhất để tiêm Beans là gì và tại sao?

Cách tiếp cận được khuyến nghị là sử dụng tham số constructor cho các phụ thuộc bắt buộc và setters cho các phụ thuộc tùy chọn. 
Điều này là vì tiêm qua constructor cho phép tiêm giá trị vào các trường không thay đổi và làm cho việc kiểm tra dễ dàng hơn.

### Spring Bean là gì?

Spring Beans là các đối tượng Java được khởi tạo bởi Spring IoC container.

### Phạm vi Bean mặc định trong Spring Framework là gì?

Theo mặc định, một Spring Bean được khởi tạo dưới dạng singleton.

### Làm thế nào để xác định phạm vi của một Bean?

Để thiết lập phạm vi của Spring Bean, chúng ta có thể sử dụng chú thích @Scope hoặc thuộc tính “scope” trong các tệp cấu hình XML. Lưu ý rằng có năm phạm vi được hỗ trợ:

+ Singleton
+ Prototype
+ Request
+ Session
+ Global-session

### Các Singleton Beans có an toàn với luồng không?

Không, các singleton beans không an toàn với luồng, vì an toàn với luồng liên quan đến việc thực thi, 
trong khi singleton là một mẫu thiết kế tập trung vào việc tạo ra. An toàn với luồng chỉ phụ thuộc vào chính việc triển khai bean.

### Chu kỳ sống của Spring Bean trông như thế nào?

Đầu tiên, một Spring bean cần được khởi tạo dựa trên định nghĩa bean Java hoặc XML. 
Có thể cũng cần thực hiện một số khởi tạo để đưa nó vào trạng thái sử dụng được. 
Sau đó, khi bean không còn cần thiết, nó sẽ được loại bỏ khỏi IoC container.

Toàn bộ chu kỳ với tất cả các phương thức khởi tạo được hiển thị trong hình

![chu kỳ sống của bean spring](./pictures/Spring-Bean-Life-Cycle.jpg)

### Spring Security là gì?

Spring Security là một mô-đun riêng biệt của framework Spring tập trung vào việc cung cấp các phương pháp xác thực 
và ủy quyền trong các ứng dụng Java. Nó cũng xử lý hầu hết các lỗ hổng bảo mật phổ biến 
như các cuộc tấn công CSRF.

Để sử dụng Spring Security trong các ứng dụng web, chúng ta có thể bắt đầu với chú thích đơn giản @EnableWebSecurity.

### Nêu tên một số mẫu thiết kế được sử dụng trong Spring Framework?

+ Mẫu Singleton – các bean có phạm vi singleton
+ Mẫu Factory – các lớp Bean Factory
+ Mẫu Prototype – các bean có phạm vi prototype
+ Mẫu Adapter – Spring Web và Spring MVC
+ Mẫu Proxy – hỗ trợ Lập trình Hướng Khía Cạnh của Spring
+ Mẫu Template Method – JdbcTemplate, HibernateTemplate, v.v.
+ Front Controller – Spring MVC DispatcherServlet
+ Data Access Object – hỗ trợ Spring DAO
+ Model View Controller – Spring MVC

### Vai trò của chú thích @Autowired là gì?

Chú thích @Autowired có thể được sử dụng với các trường hoặc phương thức để tiêm một bean theo kiểu. 
Chú thích này cho phép Spring giải quyết và tiêm các bean hợp tác vào bean của bạn.

### Vai trò của chú thích @Qualifier là gì?

Nó được sử dụng đồng thời với chú thích @Autowired để tránh nhầm lẫn khi có nhiều phiên bản của một loại bean.

### Sự khác biệt giữa các chú thích @Controller, @Component, @Repository và @Service trong Spring là gì?

+ @Controller – chỉ ra rằng lớp đóng vai trò là một controller, 
và phát hiện các chú thích @RequestMapping trong lớp
+ @Service – chỉ ra rằng lớp giữ logic kinh doanh và gọi các phương thức trong lớp repository
+ @Repository – chỉ ra rằng lớp định nghĩa một kho dữ liệu; nhiệm vụ của nó là bắt các ngoại lệ cụ thể của nền tảng 
và ném lại chúng như một trong những ngoại lệ không kiểm tra thống nhất của Spring

## Spring Web MVC

### Controller trong Spring MVC là gì?

Nói một cách đơn giản, tất cả các yêu cầu được xử lý bởi DispatcherServlet đều được chuyển đến các lớp được chú thích bằng @Controller. Mỗi lớp controller ánh xạ một hoặc nhiều yêu cầu đến các phương thức xử lý và thực thi các yêu cầu với các đầu vào được cung cấp.

### Chú thích @RequestMapping hoạt động như thế nào?

Chú thích @RequestMapping được sử dụng để ánh xạ các yêu cầu web đến các phương thức của Spring Controller. Ngoài các trường hợp sử dụng đơn giản, chúng ta có thể sử dụng nó để ánh xạ các tiêu đề HTTP, liên kết các phần của URI với @PathVariable, và làm việc với các tham số URI và chú thích @RequestParam.

### Giải thích sự khác biệt giữa @Controller và @RestController?

Sự khác biệt chính giữa các chú thích @Controller và @RestController là chú thích @ResponseBody được bao gồm tự động trong @RestController. Điều này có nghĩa là chúng ta không cần phải chú thích các phương thức xử lý của mình bằng @ResponseBody. Chúng ta cần làm điều này trong một lớp @Controller nếu muốn ghi kiểu phản hồi trực tiếp vào thân phản hồi HTTP.

### Mô tả một PathVariable

Chúng ta có thể sử dụng chú thích @PathVariable như một tham số phương thức xử lý để trích xuất giá trị của một biến mẫu URI.

Ví dụ, nếu chúng ta muốn lấy một người dùng theo id từ www.mysite.com/user/123, chúng ta nên ánh xạ phương thức của mình trong controller như /user/{id}:

```java
@RequestMapping("/user/{id}")
public String handleRequest(@PathVariable("id") String userId, Model map) {}
```
Chú thích @PathVariable chỉ có một phần tử tên là value. Nó là tùy chọn và chúng ta sử dụng nó để xác định tên biến mẫu URI. Nếu chúng ta bỏ qua phần tử value, thì tên biến mẫu URI phải khớp với tên tham số phương thức.

Cũng cho phép có nhiều chú thích @PathVariable, bằng cách khai báo chúng lần lượt:

```java
@RequestMapping("/user/{userId}/name/{userName}")
public String handleRequest(@PathVariable String userId,
  @PathVariable String userName, Model map) {}
```
hoặc đưa tất cả vào một Map<String, String> hoặc MultiValueMap<String, String>:
```java
@RequestMapping("/user/{userId}/name/{userName}")
public String handleRequest(@PathVariable Map<String, String> varsMap, Model map) {}
```

### Xác thực sử dụng Spring MVC

Spring MVC hỗ trợ các thông số kỹ thuật JSR-303 theo mặc định. Chúng ta cần thêm JSR-303 và các phụ thuộc thực thi của nó vào ứng dụng Spring MVC của mình. Hibernate Validator, chẳng hạn, là một trong những thực thi JSR-303 mà chúng ta có sẵn.

JSR-303 là một thông số kỹ thuật của Java API cho xác thực bean, là một phần của Jakarta EE và JavaSE, đảm bảo rằng các thuộc tính của một bean đáp ứng các tiêu chí cụ thể, sử dụng các chú thích như @NotNull, @Min và @Max.

Spring cung cấp chú thích @Validator và lớp BindingResult. Thực thi Validator sẽ phát sinh lỗi trong phương thức xử lý yêu cầu controller khi chúng ta có dữ liệu không hợp lệ. Sau đó, chúng ta có thể sử dụng lớp BindingResult để lấy những lỗi đó.

### Chú thích @RequestBody và @ResponseBody là gì?

Chú thích @RequestBody, được sử dụng như một tham số phương thức xử lý, liên kết thân HTTP Request với một đối tượng chuyển giao hoặc đối tượng miền. Spring tự động giải mã các HTTP Request đến đối tượng Java bằng cách sử dụng Http Message Converters.

Khi chúng ta sử dụng chú thích @ResponseBody trên một phương thức xử lý trong controller Spring MVC, nó cho biết rằng chúng ta sẽ ghi kiểu trả về của phương thức trực tiếp vào thân phản hồi HTTP. Chúng ta sẽ không đưa nó vào một Model, và Spring sẽ không hiểu đó là tên của một view.

### BindingResult là gì?

BindingResult là một giao diện từ gói org.springframework.validation đại diện cho các kết quả ràng buộc. Chúng ta có thể sử dụng nó để phát hiện và báo cáo lỗi trong biểu mẫu đã gửi. Nó rất dễ gọi — chúng ta chỉ cần đảm bảo rằng chúng ta đặt nó làm tham số ngay sau đối tượng biểu mẫu mà chúng ta đang xác thực. Tham số Model tùy chọn nên đến sau BindingResult, như có thể thấy trong hướng dẫn xác thực tùy chỉnh:

```java
@PostMapping("/user")
public String submitForm(@Valid NewUserForm newUserForm, 
  BindingResult result, Model model) {
    if (result.hasErrors()) {
        return "userHome";
    }
    model.addAttribute("message", "Valid form");
    return "userHome";
}
```

Khi Spring thấy chú thích @Valid, nó sẽ cố gắng tìm validator cho đối tượng đang được xác thực trước tiên.

## Truy Cập Dữ Liệu Mùa Xuân

### Lớp Spring JdbcTemplate Là Gì và Cách Sử Dụng Nó?

Mẫu JDBC của Spring là API chính thông qua đó chúng ta có thể truy cập vào logic các thao tác cơ sở dữ liệu mà chúng ta quan tâm:

- Tạo và đóng kết nối
- Thực thi các câu lệnh và gọi thủ tục lưu trữ
- Lặp qua ResultSet và trả về kết quả

Để sử dụng nó, chúng ta cần định nghĩa cấu hình đơn giản cho DataSource:

```java
@Configuration
@ComponentScan("org.baeldung.jdbc")
public class SpringJdbcConfig {
    @Bean
    public DataSource mysqlDataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("com.mysql.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://localhost:3306/springjdbc");
        dataSource.setUsername("guest_user");
        dataSource.setPassword("guest_password");
 
        return dataSource;
    }
}
```

### Cách Kích Hoạt Giao Dịch Trong Spring và Lợi Ích Của Chúng Là Gì?

Có hai cách khác nhau để cấu hình Giao Dịch — bằng cách sử dụng chú thích hoặc bằng cách sử dụng Lập Trình Hướng Khía Cạnh (AOP) — mỗi cách đều có những lợi thế riêng.

Dưới đây là những lợi ích của việc sử dụng Giao Dịch Spring, theo tài liệu chính thức:

+ Cung cấp một mô hình lập trình nhất quán trên các API giao dịch khác nhau như JTA, JDBC, Hibernate, JPA và JDO
+ Hỗ trợ quản lý giao dịch khai báo
+ Cung cấp một API đơn giản hơn cho việc quản lý giao dịch lập trình hơn so với một số API giao dịch phức tạp như JTA
+ Tích hợp rất tốt với các trừu tượng truy cập dữ liệu khác nhau của Spring

### Spring DAO Là Gì?

Đối Tượng Truy Cập Dữ Liệu (DAO) của Spring là hỗ trợ của Spring để làm việc với các công nghệ truy cập dữ liệu như JDBC, Hibernate và JPA một cách nhất quán và dễ dàng.

## Spring Reactive

### Lập Trình Phản Ứng Là Gì?

Lập trình phản ứng là về các ứng dụng không chặn, dựa trên sự kiện, có khả năng mở rộng với một số lượng nhỏ luồng, với áp lực ngược là một thành phần chính nhằm đảm bảo rằng các nhà sản xuất không làm quá tải các nhà tiêu thụ.

Đây là những lợi ích chính của lập trình phản ứng:

+ Tăng cường sử dụng tài nguyên máy tính trên phần cứng đa lõi và đa CPU
+ Tăng hiệu suất bằng cách giảm thiểu tuần tự hóa
+ Lập trình phản ứng thường dựa trên sự kiện, trái ngược với các hệ thống phản ứng, 
mà là dựa trên tin nhắn. Vì vậy, việc sử dụng lập trình phản ứng không có nghĩa là chúng ta đang xây dựng một hệ thống phản ứng, 
mà là một phong cách kiến trúc.

Tuy nhiên, lập trình phản ứng có thể được sử dụng như một phương tiện để triển khai các hệ thống phản ứng nếu chúng ta tuân theo Tuyên ngôn Phản ứng, 
điều này rất quan trọng để hiểu.

Dựa trên điều này, các hệ thống phản ứng có bốn đặc điểm quan trọng:

+ Phản hồi – Hệ thống nên phản hồi kịp thời.
+ Đáng tin cậy – Trong trường hợp hệ thống gặp bất kỳ sự cố nào, nó nên vẫn phản hồi.
+ Linh hoạt – Các hệ thống phản ứng có thể phản ứng với sự thay đổi và vẫn duy trì khả năng phản hồi dưới tải công việc khác nhau.
+ Dựa trên tin nhắn – Các hệ thống phản ứng cần thiết lập ranh giới giữa các thành phần bằng cách dựa vào việc truyền tin nhắn không đồng bộ.

### Spring WebFlux Là Gì?

Spring WebFlux là framework web theo mô hình phản ứng của Spring, và là một lựa chọn thay thế cho Spring MVC.
Để đạt được mô hình phản ứng này và có khả năng mở rộng cao, toàn bộ ngăn xếp là không chặn.

### Các Kiểu Mono và Flux Là Gì?

Framework WebFlux trong Spring Framework 5 sử dụng Reactor làm nền tảng không đồng bộ của nó.

Dự án này cung cấp hai kiểu cốt lõi: Mono để đại diện cho một giá trị không đồng bộ duy nhất và Flux để đại diện cho một luồng các giá trị không đồng bộ. 
Cả hai cũng thực hiện giao diện Publisher được định nghĩa trong đặc tả Reactive Streams.

Mono thực hiện Publisher và trả về 0 hoặc 1 phần tử:
```java
public abstract class Mono<T> implements Publisher<T> {...}
```

Và Flux thực hiện Publisher và trả về N phần tử:
```java
public abstract class Flux<T> implements Publisher<T> {...}
```

Theo định nghĩa, hai kiểu này đại diện cho các luồng, vì vậy chúng đều là lười biếng. 
Điều này có nghĩa là không có gì được thực thi cho đến khi chúng ta tiêu thụ luồng bằng cách sử dụng phương thức subscribe(). Cả hai kiểu cũng là bất biến, 
vì vậy việc gọi bất kỳ phương thức nào sẽ trả về một thể hiện mới của Flux hoặc Mono.

### Những Nhược Điểm Của Việc Sử Dụng Reactive Streams Là Gì?

Có một số nhược điểm lớn khi sử dụng reactive streams:

+ Việc khắc phục sự cố một ứng dụng phản ứng hơi khó khăn, vì vậy hãy chắc chắn kiểm tra hướng dẫn của chúng tôi về việc gỡ lỗi các 
luồng phản ứng để có một số mẹo gỡ lỗi hữu ích.
+ Có hỗ trợ hạn chế cho các kho dữ liệu phản ứng vì các kho dữ liệu quan hệ truyền thống vẫn chưa chấp nhận 
mô hình phản ứng.
+ Có một đường cong học tập bổ sung khi triển khai.

## Xử Lý Ngoại Lệ

### Giải Thích về Controller Advice

Chú thích @ControllerAdvice cho phép chúng ta viết mã toàn cục áp dụng cho một loạt các controller. 
Chúng ta có thể liên kết phạm vi của các controller với một gói đã chọn hoặc một chú thích cụ thể.

Theo mặc định, @ControllerAdvice áp dụng cho các lớp được chú thích bằng @Controller (hoặc @RestController). 
Chúng ta cũng có một vài thuộc tính mà chúng ta sử dụng nếu muốn cụ thể hơn.

Nếu chúng ta muốn hạn chế các lớp áp dụng cho một gói, chúng ta nên thêm tên của gói vào chú thích:

```java
@ControllerAdvice("my.package")
@ControllerAdvice(value = "my.package")
@ControllerAdvice(basePackages = "my.package")
```
Cũng có thể sử dụng nhiều gói, nhưng lần này chúng ta cần sử dụng một mảng thay vì một chuỗi.

Ngoài việc hạn chế theo tên gói, chúng ta có thể làm điều đó bằng cách sử dụng một trong các lớp hoặc giao diện từ gói đó:

```java
@ControllerAdvice(basePackageClasses = MyClass.class)
```
Phần tử ‘assignableTypes‘ áp dụng @ControllerAdvice cho các lớp cụ thể, trong khi ‘annotations‘ áp dụng cho các chú thích cụ thể.

Điều đáng lưu ý là chúng ta nên sử dụng nó cùng với @ExceptionHandler. 
Sự kết hợp này sẽ cho phép chúng ta cấu hình một cơ chế xử lý lỗi toàn cục và cụ thể hơn mà không cần phải 
triển khai nó mỗi lần cho mỗi lớp controller.

### Chú Thích @ExceptionHandler Làm Gì?

Chú thích @ExceptionHandler cho phép chúng ta định nghĩa một phương thức sẽ xử lý các ngoại lệ. 
Chúng ta có thể sử dụng chú thích độc lập, nhưng tốt hơn là nên sử dụng nó cùng với @ControllerAdvice. 
Như vậy, chúng ta có thể thiết lập một cơ chế xử lý lỗi toàn cục. Bằng cách này, chúng ta không cần phải viết mã cho việc xử lý ngoại lệ 
trong mỗi controller.

Hãy cùng xem xét ví dụ từ bài viết của chúng tôi về Xử Lý Lỗi cho REST với Spring:
```java
@ControllerAdvice
public class RestResponseEntityExceptionHandler
  extends ResponseEntityExceptionHandler {

    @ExceptionHandler(value = { IllegalArgumentException.class,
      IllegalStateException.class })
    protected ResponseEntity<Object> handleConflict(RuntimeException ex,
      WebRequest request) {
        String bodyOfResponse = "Đây nên là thông tin cụ thể cho ứng dụng";
        return handleExceptionInternal(ex, bodyOfResponse, new HttpHeaders(),
          HttpStatus.CONFLICT, request);
    }
}
```
Chúng ta cũng nên lưu ý rằng điều này sẽ cung cấp các phương thức @ExceptionHandler cho tất cả các controller mà 
ném ra IllegalArgumentException hoặc IllegalStateException. Các ngoại lệ được khai báo với @ExceptionHandler 
phải khớp với ngoại lệ được sử dụng làm tham số của phương thức. Nếu không, cơ chế giải quyết ngoại lệ sẽ thất bại tại thời gian chạy.

Một điều cần nhớ ở đây là có thể định nghĩa nhiều hơn một @ExceptionHandler cho cùng một ngoại lệ. 
Tuy nhiên, chúng ta không thể làm điều đó trong cùng một lớp vì Spring sẽ phản đối bằng cách ném ra một ngoại lệ và thất bại trong quá trình khởi động.

Mặt khác, nếu chúng ta định nghĩa chúng trong hai lớp riêng biệt, ứng dụng sẽ khởi động, nhưng nó sẽ sử dụng 
bộ xử lý đầu tiên mà nó tìm thấy, có thể là bộ xử lý sai.

### Xử Lý Ngoại Lệ trong Ứng Dụng Web

Chúng ta có ba tùy chọn để xử lý ngoại lệ trong Spring MVC:

+ theo từng ngoại lệ
+ theo từng controller
+ toàn cục
Nếu một ngoại lệ không được xử lý bị ném ra trong quá trình xử lý yêu cầu web, máy chủ sẽ trả về phản hồi HTTP 500. 
Để ngăn điều này xảy ra, chúng ta nên chú thích bất kỳ ngoại lệ tùy chỉnh nào của chúng ta bằng chú thích @ResponseStatus. 
Loại ngoại lệ này được giải quyết bởi HandlerExceptionResolver.

Điều này sẽ khiến máy chủ trả về phản hồi HTTP thích hợp với mã trạng thái được chỉ định khi một phương thức controller 
ném ra ngoại lệ của chúng ta. Chúng ta nên nhớ rằng không nên xử lý ngoại lệ của mình ở nơi khác để phương pháp này hoạt động.

Một cách khác để xử lý các ngoại lệ là sử dụng chú thích @ExceptionHandler. 
Chúng ta thêm các phương thức @ExceptionHandler vào bất kỳ controller nào và sử dụng chúng để xử lý các ngoại lệ ném ra từ bên trong controller đó. 
Các phương thức này có thể xử lý ngoại lệ mà không cần chú thích @ResponseStatus, chuyển hướng người dùng đến một trang lỗi chuyên dụng, 
hoặc xây dựng một phản hồi lỗi hoàn toàn tùy chỉnh.

Chúng ta cũng có thể truyền vào các đối tượng liên quan đến servlet (HttpServletRequest, HttpServletResponse, HttpSession, và Principal) 
như là các tham số của các phương thức xử lý. Nhưng, chúng ta nên nhớ rằng không thể đặt đối tượng Model làm tham số trực tiếp.

Tùy chọn thứ ba để xử lý lỗi là thông qua các lớp @ControllerAdvice. Nó sẽ cho phép chúng ta áp dụng cùng một kỹ thuật, 
chỉ khác là lần này ở cấp độ ứng dụng và không chỉ cho controller cụ thể. Để kích hoạt điều này, chúng ta cần sử dụng 
@ControllerAdvice và @ExceptionHandler cùng nhau. Bằng cách này, các bộ xử lý ngoại lệ sẽ xử lý các ngoại lệ được ném ra bởi bất kỳ controller nào.

