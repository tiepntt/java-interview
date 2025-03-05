# Câu hỏi phỏng vấn về Hibernate

+ [ORM trong Hibernate là gì?](#orm-trong-hibernate-la-gi)
+ [Những lợi ích của Hibernate so với JDBC là gì?](#nhung-loi-ich-cua-hibernate-so-voi-jdbc-la-gi)
+ [Một số giao diện quan trọng của framework Hibernate là gì?](#mot-so-giao-dien-quan-trong-cua-framework-hibernate-la-gi)
+ [Session trong Hibernate là gì?](#session-trong-hibernate-la-gi)
+ [Bạn có thể giải thích lazy loading trong Hibernate là gì không?](#ban-co-the-giai-thich-lazy-loading-trong-hibernate-la-gi-khong)
+ [Sự khác biệt giữa bộ nhớ cache cấp một và bộ nhớ cache cấp hai là gì?](#su-khac-biet-giua-bo-nho-cache-cap-mot-va-bo-nho-cache-cap-hai-la-gi)
+ [Bạn có thể giải thích khái niệm đằng sau Hibernate Inheritance Mapping không?](#ban-co-the-giai-thich-khai-niem-dang-sau-hibernate-inheritance-mapping-khong)
+ [Những chú thích thường được sử dụng để hỗ trợ ánh xạ Hibernate là gì?](#nhung-chu-thich-thuong-duoc-su-dung-de-ho-tro-anh-xa-hibernate-la-gi)
+ [Phân biệt giữa get() và load() trong session Hibernate](#phan-biet-giua-get-va-load-trong-session-hibernate)
+ [Criteria API trong Hibernate là gì?](#criteria-api-trong-hibernate-la-gi)
+ [HQL là gì?](#hql-la-gi)
+ [Hibernate có hỗ trợ truy vấn SQL gốc không?](#hibernate-co-ho-tro-truy-van-sql-goc-khong)
+ [Bạn có thể nói về vấn đề N+1 SELECT trong Hibernate không?](#ban-co-the-noi-ve-van-de-n1-select-trong-hibernate-khong)
+ [Làm thế nào để giải quyết vấn đề N+1 SELECT trong Hibernate?](#lam-the-nao-de-giai-quyet-van-de-n1-select-trong-hibernate)
+ [Chiến lược Single Table là gì?](#chien-luoc-single-table-la-gi)

## ORM trong Hibernate là gì?

Hibernate ORM là viết tắt của Object Relational Mapping (Ánh xạ đối tượng - quan hệ). 
Đây là một mẫu công cụ ánh xạ chủ yếu được sử dụng để chuyển đổi dữ liệu được lưu trữ trong cơ sở dữ liệu quan hệ thành một đối tượng được sử dụng trong các cấu trúc lập trình hướng đối tượng. Công cụ này cũng giúp đơn giản hóa đáng kể việc truy xuất, tạo ra và thao tác dữ liệu.

## Những lợi thế của Hibernate so với JDBC là gì?

+ Mã sạch và dễ đọc: Sử dụng Hibernate giúp loại bỏ nhiều mã boilerplate dựa trên API JDBC, từ đó làm cho mã trở nên sạch sẽ và dễ đọc hơn.
+ HQL (Ngôn ngữ truy vấn Hibernate): Hibernate cung cấp HQL, gần gũi với Java và có tính hướng đối tượng. Điều này giúp giảm bớt gánh nặng cho các nhà phát triển trong việc viết các truy vấn độc lập với cơ sở dữ liệu. Trong JDBC, điều này không xảy ra. Một nhà phát triển phải biết các mã cụ thể của cơ sở dữ liệu.
+ Quản lý giao dịch: JDBC không hỗ trợ quản lý giao dịch ngầm. Việc viết mã quản lý giao dịch bằng cách sử dụng các phương thức commit và rollback là trách nhiệm của nhà phát triển. Trong khi đó, Hibernate cung cấp tính năng này một cách ngầm định.
+ Xử lý ngoại lệ: Hibernate bọc các ngoại lệ JDBC và ném ra các ngoại lệ không kiểm tra như JDBCException hoặc HibernateException. Điều này cùng với hệ thống quản lý giao dịch tích hợp giúp các nhà phát triển tránh việc viết nhiều khối try-catch để xử lý ngoại lệ. Trong trường hợp của JDBC, nó ném ra một ngoại lệ đã kiểm tra gọi là SQLException, do đó yêu cầu nhà phát triển phải viết các khối try-catch để xử lý ngoại lệ này tại thời điểm biên dịch.
+ Tính năng đặc biệt: Hibernate hỗ trợ các tính năng OOP như kế thừa, liên kết và cũng hỗ trợ các tập hợp. Những điều này không có trong JDBC.

## Một số giao diện quan trọng của framework Hibernate là gì?

Các giao diện cốt lõi của Hibernate bao gồm:

+ Configuration
+ SessionFactory
+ Session
+ Criteria
+ Query
+ Transaction

## Session trong Hibernate là gì?

Session là một đối tượng duy trì kết nối giữa ứng dụng đối tượng Java và cơ sở dữ liệu. 
Session cũng có các phương thức để lưu trữ, truy xuất, sửa đổi hoặc xóa dữ liệu từ cơ sở dữ liệu bằng cách sử dụng các phương thức như 
persist(), load(), get(), update(), delete(), v.v. 
Ngoài ra, nó còn có các phương thức factory để trả về các đối tượng Query, Criteria và Transaction.

## SessionFactory là gì?

SessionFactory cung cấp một phiên bản của Session. Đây là một lớp nhà máy cung cấp các đối tượng Session dựa trên các tham số cấu hình nhằm thiết lập kết nối với cơ sở dữ liệu. 
Theo thói quen tốt, ứng dụng thường chỉ có một phiên bản duy nhất của SessionFactory. 
Trạng thái nội bộ của một SessionFactory, bao gồm siêu dữ liệu về ORM, là không thay đổi, tức là một khi phiên bản được tạo ra, nó không thể bị thay đổi.

Điều này cũng cung cấp khả năng lấy thông tin như thống kê và siêu dữ liệu liên quan đến một lớp, thực thi truy vấn, 
v.v. Nó cũng giữ dữ liệu bộ nhớ cache cấp hai nếu được kích hoạt.

## Bạn có thể giải thích lazy loading trong Hibernate là gì không?

Lazy loading chủ yếu được sử dụng để cải thiện hiệu suất ứng dụng bằng cách giúp tải các đối tượng con theo yêu cầu.

Cần lưu ý rằng, kể từ phiên bản Hibernate 3, tính năng này đã được bật mặc định. Điều này có nghĩa là các đối tượng con sẽ không được tải cho đến khi đối tượng cha được tải.

## Sự khác biệt giữa bộ nhớ đệm cấp một và bộ nhớ đệm cấp hai là gì?

Hibernate có 2 loại bộ nhớ đệm. Bộ nhớ đệm cấp một và bộ nhớ đệm cấp hai, sự khác biệt được trình bày dưới đây:

| Bộ Nhớ Đệm Cấp Một  | Bộ Nhớ Đệm Cấp Hai  |
|---|---|
| Đây là bộ nhớ đệm cục bộ cho đối tượng Session và không thể chia sẻ giữa nhiều phiên.  | Bộ nhớ đệm này được duy trì ở cấp SessionFactory và được chia sẻ giữa tất cả các phiên trong Hibernate.  |
| Bộ nhớ đệm này được bật theo mặc định và không có cách nào để tắt nó. | Bộ nhớ đệm này bị tắt theo mặc định, nhưng chúng ta có thể bật nó thông qua cấu hình. |
| Bộ nhớ đệm cấp một chỉ có sẵn cho đến khi phiên đang mở, khi phiên bị đóng, bộ nhớ đệm cấp một sẽ bị hủy. | Bộ nhớ đệm cấp hai có sẵn trong suốt vòng đời của ứng dụng, nó chỉ bị hủy và tái tạo khi một ứng dụng được khởi động lại.  |

Nếu một thực thể hoặc đối tượng được tải bằng cách gọi phương thức get(), thì Hibernate sẽ kiểm tra bộ nhớ đệm cấp một trước, 
nếu không tìm thấy đối tượng thì nó sẽ chuyển sang bộ nhớ đệm cấp hai nếu đã được cấu hình. 
Nếu đối tượng không được tìm thấy thì cuối cùng nó sẽ truy cập vào cơ sở dữ liệu và trả về đối tượng, nếu không có hàng tương ứng 
trong bảng thì nó sẽ trả về null.

## Bạn có thể giải thích khái niệm về ánh xạ kế thừa trong Hibernate không?

Java là một ngôn ngữ lập trình hướng đối tượng và kế thừa là một trong những trụ cột quan trọng nhất của các nguyên tắc hướng đối tượng. Để đại diện cho bất kỳ mô hình nào trong Java, kế thừa thường được sử dụng để đơn giản hóa và làm rõ mối quan hệ. Nhưng có một điều cần lưu ý. Các cơ sở dữ liệu quan hệ không hỗ trợ kế thừa. Chúng có cấu trúc phẳng.

Có nhiều chiến lược ánh xạ kế thừa khác nhau:

+ Chiến lược Bảng Đơn
+ Chiến lược Bảng Theo Lớp
+ Chiến lược Lớp Siêu Được Ánh Xạ
+ Chiến lược Bảng Kết Hợp

## Các chú thích thường được sử dụng để hỗ trợ ánh xạ Hibernate là gì?

+ javax.persistence.Entity: Chú thích này được sử dụng trên các lớp mô hình bằng cách sử dụng “@Entity” và cho biết rằng các lớp này là các bean thực thể.
+ javax.persistence.Table: Chú thích này được sử dụng trên các lớp mô hình bằng cách sử dụng “@Table” và cho biết rằng lớp ánh xạ đến tên bảng trong cơ sở dữ liệu.
+ javax.persistence.Access: Chú thích này được sử dụng dưới dạng “@Access” và được dùng để xác định loại truy cập của trường hoặc thuộc tính. Khi không có gì được chỉ định, giá trị mặc định được lấy là “field”.
+ javax.persistence.Id: Chú thích này được sử dụng dưới dạng “@Id” và được sử dụng trên thuộc tính trong một lớp để chỉ ra rằng thuộc tính đó là khóa chính trong bean thực thể.
+ javax.persistence.EmbeddedId: Được sử dụng dưới dạng “@EmbeddedId” trên thuộc tính và chỉ ra rằng đây là khóa chính tổ hợp của bean thực thể.
+ javax.persistence.Column: “@Column” được sử dụng để xác định tên cột trong bảng cơ sở dữ liệu.
+ javax.persistence.GeneratedValue: “@GeneratedValue” được sử dụng để xác định chiến lược được sử dụng cho việc tạo khóa chính. Chú thích này được sử dụng cùng với enum javax.persistence.GenerationType.
+ javax.persistence.OneToOne: “@OneToOne” được sử dụng để xác định ánh xạ một-một giữa hai bean thực thể. Tương tự, Hibernate cung cấp các chú thích OneToMany, ManyToOne và ManyToMany để xác định các loại ánh xạ khác nhau.
+ org.hibernate.annotations.Cascade: Chú thích “@Cascade” được sử dụng để xác định hành động cascade giữa hai bean thực thể. Nó được sử dụng với enum org.hibernate.annotations.CascadeType để xác định loại cascade.

## Phân biệt giữa get() và load() trong phiên Hibernate

| get()  | load()  |
|---|---|
| Phương thức này lấy dữ liệu từ cơ sở dữ liệu ngay khi nó được gọi.  | Phương thức này trả về một đối tượng proxy và chỉ tải dữ liệu khi cần thiết.  |
| Cơ sở dữ liệu được truy cập mỗi khi phương thức được gọi. | Cơ sở dữ liệu chỉ được truy cập khi thực sự cần thiết và điều này được gọi là Tải lười (Lazy Loading) giúp phương thức trở nên tốt hơn. |
| Phương thức này trả về null nếu đối tượng không được tìm thấy. | Phương thức này ném ra ObjectNotFoundException nếu đối tượng không được tìm thấy. |
| Phương thức này nên được sử dụng nếu chúng ta không chắc chắn về sự tồn tại của dữ liệu trong cơ sở dữ liệu. | Phương thức này được sử dụng khi chúng ta biết chắc rằng dữ liệu có tồn tại trong cơ sở dữ liệu. |

## Criteria API trong Hibernate là gì?

Criteria API trong Hibernate giúp các nhà phát triển xây dựng các truy vấn tiêu chí động trên cơ sở dữ liệu lưu trữ. 
Criteria API là một lựa chọn mạnh mẽ và linh hoạt hơn cho các truy vấn HQL (Hibernate Query Language) để tạo ra các truy vấn động.

API này cho phép phát triển các đối tượng truy vấn tiêu chí một cách lập trình. Giao diện org.hibernate.Criteria được sử dụng 
cho những mục đích này. Giao diện Session của framework Hibernate có phương thức createCriteria() nhận 
lớp của đối tượng bền vững hoặc tên thực thể của nó làm tham số và trả về một thể hiện đối tượng bền vững 
khi truy vấn tiêu chí được thực thi.

Nó cũng giúp dễ dàng tích hợp các hạn chế để chọn lọc dữ liệu từ cơ sở dữ liệu. 
Điều này có thể đạt được bằng cách sử dụng phương thức add() chấp nhận đối tượng org.hibernate.criterion.Criterion đại diện cho từng hạn chế.

Để trả về tất cả dữ liệu của lớp thực thể InterviewBitEmployee.
```java
Criteria criteria = session.createCriteria(InterviewBitEmployee.class);
List<InterviewBitEmployee> results = criteria.list();
```
Để truy xuất các đối tượng có thuộc tính có giá trị bằng với hạn chế, chúng ta sử dụng phương thức Restrictions.eq(). 
Ví dụ, để lấy tất cả các bản ghi có tên là ‘Hibernate’:
```java
Criteria criteria= session.createCriteria(InterviewBitEmployee.class);
criteria.add(Restrictions.eq("fullName","Hibernate"));
List<InterviewBitEmployee> results = criteria.list();
```
Để lấy các đối tượng có thuộc tính có giá trị “không bằng” với hạn chế, chúng ta sử dụng phương thức Restrictions.ne(). 
Ví dụ, để lấy tất cả các bản ghi mà tên nhân viên không phải là Hibernate:
```java
Criteria criteria= session.createCriteria(InterviewBitEmployee.class);
criteria.add(Restrictions.ne("fullName","Hibernate"));
List<Employee> results = criteria.list();
```
Để truy xuất tất cả các đối tượng có thuộc tính khớp với một mẫu nhất định, chúng ta sử dụng Restrictions.like() (cho phân biệt chữ hoa chữ thường) 
và Restrictions.ilike() (cho không phân biệt chữ hoa chữ thường)
```java
Criteria criteria= session.createCriteria(InterviewBitEmployee.class);
criteria.add(Restrictions.like("fullName","Hib%",MatchMode.ANYWHERE));
List<InterviewBitEmployee> results = criteria.list();
```

## HQL là gì?

Ngôn ngữ truy vấn Hibernate (HQL) được sử dụng như một phần mở rộng của SQL. Nó rất đơn giản, hiệu quả và linh hoạt cho việc thực hiện các thao tác phức tạp trên cơ sở dữ liệu quan hệ mà không cần viết các truy vấn phức tạp. HQL là đại diện hướng đối tượng của ngôn ngữ truy vấn, tức là thay vì sử dụng tên bảng, chúng ta sử dụng tên lớp, điều này làm cho ngôn ngữ này độc lập với bất kỳ cơ sở dữ liệu nào.

```java
Query query=session.createQuery("from InterviewBitEmployee");  
List<InterviewBitEmployee> list=query.list();  
System.out.println(list.get(0));
```

## Hibernate có hỗ trợ Truy vấn SQL gốc không?

Có, Hibernate hỗ trợ điều đó. Hibernate cung cấp phương thức createSQLQuery() để cho phép lập trình viên gọi trực tiếp câu lệnh SQL gốc và trả về một đối tượng Query.

Xem xét ví dụ mà bạn muốn lấy dữ liệu nhân viên với tên đầy đủ là “Hibernate”. 
Chúng ta không muốn sử dụng các tính năng dựa trên HQL, thay vào đó, chúng ta muốn viết các truy vấn SQL của riêng mình. Trong trường hợp này, mã sẽ như sau:
```java
Query query = session.createSQLQuery( "select * from interviewbit_employee ibe where ibe.fullName = :fullName")
                   .addEntity(InterviewBitEmployee.class)
                   .setParameter("fullName", "Hibernate"); // tham số có tên
List result = query.list();
```
Ngoài ra, các truy vấn gốc cũng có thể được hỗ trợ khi sử dụng NamedQueries.

## Bạn có thể nói về vấn đề N+1 SELECT trong Hibernate không?

Vấn đề N+1 SELECT xảy ra do kết quả của việc sử dụng chiến lược tải lười và lấy dữ liệu theo yêu cầu. 
Hãy lấy một ví dụ. Nếu bạn có một danh sách N mục và mỗi mục trong danh sách có một phụ thuộc vào một tập hợp 
của một đối tượng khác, chẳng hạn như bid. Để tìm giá thầu cao nhất cho mỗi mục trong khi sử dụng chiến lược tải lười, 
Hibernate phải thực hiện trước 1 truy vấn để tải tất cả các mục và sau đó tiếp tục thực hiện N truy vấn để tải bid của mỗi mục. 
Do đó, Hibernate thực sự kết thúc với việc thực hiện N+1 truy vấn.

## Cách giải quyết vấn đề N+1 SELECT trong Hibernate?

Một số chiến lược được áp dụng để giải quyết vấn đề N+1 SELECT bao gồm:

+ Tiền lấy các bản ghi theo lô, giúp giảm vấn đề N+1 xuống còn (N/K) + 1, trong đó K là kích thước của lô.
+ Chiến lược lấy dữ liệu bằng cách sử dụng subselect.
+ Như một biện pháp cuối cùng, cố gắng tránh hoặc vô hiệu hóa hoàn toàn việc tải lười.

## Chiến lược Bảng Đơn

Chiến lược Bảng Đơn là một chiến lược của Hibernate để thực hiện ánh xạ kế thừa. 
Chiến lược này được coi là tốt nhất trong số tất cả các chiến lược hiện có. 
Tại đây, dữ liệu kế thừa được lưu trữ trong một bảng duy nhất bằng cách sử dụng một cột phân biệt, 
cột này xác định bản ghi thuộc về lớp nào.

```java
@Entity
@Table(name = "InterviewBitEmployee")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "employee_type")
@NoArgsConstructor
@AllArgsConstructor
public class InterviewBitEmployee {
   @Id
   @Column(name = "employee_id")
   private String employeeId;
   private String fullName;
   private String email;
}
```

## Bạn có thể cho biết một chút về Chiến lược Bảng Theo Lớp không?

Chiến lược Bảng Theo Lớp là một loại chiến lược ánh xạ kế thừa, trong đó mỗi lớp trong hệ thống phân cấp có một bảng cơ sở dữ liệu ánh xạ tương ứng. Hibernate cung cấp chú thích @Inheritance, trong đó nhận chiến lược làm tham số. Điều này được sử dụng để xác định chiến lược mà chúng ta sẽ sử dụng. Bằng cách gán giá trị InheritanceType.TABLE_PER_CLASS, nó chỉ ra rằng chúng ta đang sử dụng chiến lược bảng theo lớp để ánh xạ.
```java
@Entity(name = "interviewbit_employee")
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@NoArgsConstructor
@AllArgsConstructor
public class InterviewBitEmployee {
   @Id
   @Column(name = "employee_id")
   private String employeeId;
   private String fullName;
   private String email;
}
```

## Bạn có thể cho biết một chút về Truy vấn SQL Đặt tên

Truy vấn SQL đặt tên là một biểu thức được biểu diễn dưới dạng bảng. 
Tại đây, các biểu thức SQL để chọn/lấy các hàng và cột từ một hoặc nhiều bảng trong một hoặc nhiều cơ sở dữ liệu 
có thể được chỉ định. Điều này giống như việc sử dụng bí danh cho các truy vấn.

Trong Hibernate, chúng ta có thể sử dụng các chú thích @NameQueries và @NameQuery.

Chú thích @NameQueries được sử dụng để định nghĩa nhiều truy vấn đặt tên.
Chú thích @NameQuery được sử dụng để định nghĩa một truy vấn đặt tên duy nhất.

```java
@NamedQueries(  
   {  
       @NamedQuery(  
       name = "findIBEmployeeByFullName",  
       query = "from InterviewBitEmployee e where e.fullName = :fullName"  
       )  
   }  
)  
```
sử dụng
```java
TypedQuery query = session.getNamedQuery("findIBEmployeeByFullName");    
query.setParameter("fullName","Hibernate");   
List<InterviewBitEmployee> ibEmployees = query.getResultList();
```

