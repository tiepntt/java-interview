# Các Câu Hỏi Phỏng Vấn Java về Mẫu Thiết Kế

Trong kỹ thuật phần mềm, một Mẫu Thiết Kế mô tả một giải pháp đã được thiết lập cho những vấn đề thường gặp nhất trong thiết kế phần mềm.

+ [Mẫu Tạo](#creational-patterns)
    + [Singleton](#singleton-design-pattern)
    + [Factory](#factory-design-pattern)
    + [Abstract factory](#abstract-factory-design-pattern)
    + [Builder](#builder-design-pattern)
+ [Mẫu Cấu Trúc](#structural-patterns)
    + [Proxy](#proxy-pattern)
    + [Decorator](#decorator-pattern)
    + [Adapter](#adapter-pattern)
    + [Bridge](#bridge-pattern)
    + [Facade](#facade-pattern)
    + [Flyweight](#flyweight-pattern)
+ [Mẫu Hành Vi](#behavioral-patterns)
    + [Memento](#memento-pattern)
    + [Mediator](#mediator-pattern)
    + [State](#state-pattern)
    + [Visitor](#visitor-pattern)
    + [Command](#command-pattern)
    + [Observer](#observer-pattern)
    + [Template method](#template-method-pattern)
    + [Strategy](#strategy-pattern)
    + [Chain of responsibility](#chain-of-responsibility-pattern)
+ [Các Mẫu Kiến Trúc Khác](#other-architectural-patterns)
    + [Service locator](#service-locator-pattern)
    + [Front controller](#front-controller-pattern)
    + [Intercepting filter](#intercepting-filter-pattern)
    + [Null object](#null-object-pattern)
    + [Gateway](#the-gateway-pattern)

## Các Mẫu Thiết Kế Tạo Ra

Các Mẫu Thiết Kế Tạo Ra liên quan đến cách mà các đối tượng được tạo ra. Chúng giảm thiểu sự phức tạp và không ổn định bằng cách tạo ra các đối tượng theo cách có kiểm soát.

### Mẫu Thiết Kế Singleton

Mẫu Thiết Kế Singleton nhằm mục đích kiểm soát việc khởi tạo các đối tượng của một lớp cụ thể bằng cách đảm bảo rằng chỉ có một thể hiện của đối tượng tồn tại trong toàn bộ Java Virtual Machine.

_lazy với lớp tĩnh bên trong_
```java
public class Singleton  {    
    private Singleton() {}
    
    private static class SingletonHolder {    
        public static final Singleton instance = new Singleton();
    }

    public static Singleton getInstance() {    
        return SingletonHolder.instance;    
    }
}
```

_trường tĩnh cuối (không lười)_
```java
public class Singleton {

    public static final Singleton INSTANCE = new Singleton();

    private Singleton() {}

}
```

Vấn đề với Serialization và Deserialization
Để tuần tự hóa các lớp singleton trên, chúng ta phải triển khai các lớp đó với một giao diện Serializable. 
Nhưng làm như vậy là chưa đủ. Khi giải tuần tự một lớp, các thể hiện mới được tạo ra. 
Bây giờ thì không quan trọng việc constructor là riêng tư hay không. 
Giờ đây có thể có nhiều hơn một thể hiện của cùng một lớp singleton bên trong JVM, vi phạm thuộc tính singleton.

Vấn đề với Reflection
Một người dùng nâng cao có thể thay đổi bộ điều chỉnh quyền truy cập riêng tư của constructor thành bất cứ điều gì họ muốn tại thời điểm chạy bằng cách sử dụng reflection. Nếu điều này xảy ra, cơ chế duy nhất của chúng ta cho việc không thể khởi tạo sẽ bị phá vỡ.

Tất cả các vấn đề trên có thể được giải quyết rất dễ dàng bằng cách sử dụng kiểu enum để tạo ra các singleton.

_Singleton với Enum_

Ba dòng trên tạo ra một singleton mà không gặp bất kỳ vấn đề nào đã thảo luận. 
Vì các enum vốn đã tuần tự hóa, chúng ta không cần phải triển khai nó với một giao diện tuần tự hóa. 
Vấn đề reflection cũng không tồn tại. Do đó, có 100% đảm bảo rằng chỉ có một thể hiện của singleton 
có mặt trong một JVM. Vì vậy, phương pháp này được khuyến nghị là phương pháp tốt nhất để tạo ra các singleton trong Java.

Cách sử dụng
```java
public enum SingletonEnum {
    INSTANCE;

    int value;

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }
}
```

Triển khai lớp chính:
```java
public class EnumDemo {

    public static void main(String[] args) {
        SingletonEnum singleton = SingletonEnum.INSTANCE;

        System.out.println(singleton.getValue());
        singleton.setValue(2);
        System.out.println(singleton.getValue());
    }
}
```

_Khi nào nên sử dụng Mẫu Thiết Kế Singleton_
+ Đối với các tài nguyên tốn kém để tạo ra (như các đối tượng kết nối cơ sở dữ liệu)
+ Thực hành tốt là giữ tất cả các logger dưới dạng Singleton, điều này tăng cường hiệu suất
+ Các lớp cung cấp quyền truy cập vào các cài đặt cấu hình cho ứng dụng
+ Các lớp chứa các tài nguyên được truy cập theo chế độ chia sẻ

### Mẫu Thiết Kế Factory

Mẫu Thiết Kế Factory hoặc Mẫu Thiết Kế Phương Thức Factory là một trong những mẫu thiết kế được sử dụng nhiều nhất trong Java.

Theo GoF, mẫu này “định nghĩa một giao diện để tạo ra một đối tượng, nhưng để các lớp con quyết định lớp nào 
để khởi tạo. Phương thức Factory cho phép một lớp hoãn việc khởi tạo cho các lớp con”.

Trong ví dụ này, chúng ta sẽ tạo một giao diện Polygon sẽ được triển khai bởi một số lớp cụ thể. 
Một PolygonFactory sẽ được sử dụng để lấy các đối tượng từ gia đình này.

Hãy tạo trước giao diện Polygon

```java
public interface Polygon {
    String getType();
}
```
Tiếp theo, chúng ta sẽ tạo một vài triển khai như Square, Triangle, v.v. mà triển khai giao diện này và trả về 
một đối tượng của loại Polygon.
Bây giờ chúng ta có thể tạo một nhà máy nhận số cạnh làm đối số và trả về triển khai phù hợp 
của giao diện này.

```java
public class PolygonFactory {
    public Polygon getPolygon(int numberOfSides) {
        if(numberOfSides == 3) {
            return new Triangle();
        }
        if(numberOfSides == 4) {
            return new Square();
        }
        if(numberOfSides == 5) {
            return new Pentagon();
        }
        if(numberOfSides == 7) {
            return new Heptagon();
        }
        else if(numberOfSides == 8) {
            return new Octagon();
        }
        return null;
    }
}
```

_Khi nào nên sử dụng Mẫu Thiết Kế Phương Thức Factory_
+ Khi việc triển khai của một giao diện hoặc một lớp trừu tượng dự kiến sẽ thay đổi thường xuyên
+ Khi việc triển khai hiện tại không thể thoải mái tiếp nhận sự thay đổi mới
+ Khi quá trình khởi tạo tương đối đơn giản, và constructor chỉ yêu cầu một vài tham số

### Mẫu Thiết Kế Abstract Factory

Trong phần trước, chúng ta đã thấy cách mà mẫu thiết kế Phương Thức Factory có thể được sử dụng để tạo ra các đối tượng liên quan đến 
một gia đình duy nhất.

Ngược lại, Mẫu Thiết Kế Abstract Factory được sử dụng để tạo ra các gia đình đối tượng liên quan hoặc phụ thuộc. 
Nó cũng đôi khi được gọi là nhà máy của các nhà máy.

### Mẫu Thiết Kế Builder

Khi độ phức tạp của việc tạo ra đối tượng tăng lên, mẫu Builder có thể tách biệt quá trình khởi tạo bằng cách 
sử dụng một đối tượng khác (một builder) để xây dựng đối tượng.

Lưu ý rằng tất cả các bộ điều chỉnh quyền truy cập trên các trường được khai báo là riêng tư vì chúng ta không muốn các đối tượng bên ngoài truy cập trực tiếp vào chúng.

Constructor cũng là riêng tư để chỉ có Builder được chỉ định cho lớp này có thể truy cập nó. 
Tất cả các thuộc tính được thiết lập trong constructor được trích xuất từ đối tượng builder mà chúng ta cung cấp như một đối số.

```java
public class BankAccount {
    
    private String name;
    private String accountNumber;
    private String email;
    private boolean newsletter;

    // constructors/getters
    
    public static class BankAccountBuilder {
            private String name;
            private String accountNumber;
            private String email;
            private boolean newsletter;
            
            public BankAccountBuilder(String name, String accountNumber) {
                this.name = name;
                this.accountNumber = accountNumber;
            }
        
            public BankAccountBuilder withEmail(String email) {
                this.email = email;
                return this;
            }
        
            public BankAccountBuilder wantNewsletter(boolean newsletter) {
                this.newsletter = newsletter;
                return this;
            }
            
            public BankAccount build() {
                return new BankAccount(this);
            }
    }
}
```
Hãy xem một ví dụ nhanh về mẫu builder trong hành động
```java
BankAccount newAccount = new BankAccount
  .BankAccountBuilder("Jon", "22738022275")
  .withEmail("jon@example.com")
  .wantNewsletter(true)
  .build();
```

_Khi nào nên sử dụng Mẫu Builder_
+ Khi quá trình tạo ra một đối tượng cực kỳ phức tạp, với nhiều tham số bắt buộc và tùy chọn
+ Khi sự gia tăng số lượng tham số constructor dẫn đến một danh sách lớn các constructor
+ Khi khách hàng mong đợi các biểu diễn khác nhau cho đối tượng được xây dựng

Thư viện Lombok cung cấp một cách tuyệt vời để đơn giản hóa các đối tượng dữ liệu. Một trong những tính năng chính của Project Lombok 
là chú thích @Builder, tự động tạo ra các lớp Builder để tạo ra các đối tượng bất biến.

## Các Mẫu Cấu Trúc

Các Mẫu Cấu Trúc liên quan đến việc kết hợp các lớp và đối tượng. 
Chúng cung cấp những cách khác nhau để sử dụng sự kết hợp đối tượng và kế thừa nhằm tạo ra một số trừu tượng.

### Mẫu Proxy

Với mẫu này, chúng ta tạo ra một trung gian hoạt động như một giao diện cho một tài nguyên khác, ví dụ, một tệp, một kết nối. 
Truy cập thứ cấp này cung cấp một đại diện cho thành phần thực và bảo vệ nó khỏi sự phức tạp bên dưới.

Các Điểm Khác Biệt Chính:

+ Proxy cung cấp cùng một giao diện như đối tượng mà nó giữ tham chiếu, và nó không sửa đổi dữ liệu 
theo bất kỳ cách nào; điều này trái ngược với các mẫu Adapter và Decorator, mà lần lượt thay đổi và trang trí các chức năng của 
các thể hiện đã tồn tại
+ Proxy thường có thông tin về chủ thể thực tại thời điểm biên dịch, trong khi Decorator 
và Adapter được tiêm vào thời gian chạy, chỉ biết giao diện của đối tượng thực

Hãy xem xét một đối tượng Java nặng (như một kết nối JDBC hoặc một SessionFactory) cần một số cấu hình ban đầu.

Chúng ta chỉ muốn những đối tượng như vậy được khởi tạo khi cần, và một khi chúng được khởi tạo, chúng ta muốn tái sử dụng chúng cho tất cả các cuộc gọi.
Bây giờ hãy tạo một giao diện đơn giản và cấu hình cho đối tượng này:
```java
public interface ExpensiveObject {
    void process();
}
```
Và triển khai giao diện này với một cấu hình ban đầu lớn:
```java
public class ExpensiveObjectImpl implements ExpensiveObject {

    public ExpensiveObjectImpl() {
        heavyInitialConfiguration();
    }
    
    @Override
    public void process() {
        LOG.info("Xử lý hoàn tất.");
    }
    
    private void heavyInitialConfiguration() {
        LOG.info("Đang tải cấu hình ban đầu...");
    }
    
}
```
Chúng ta sẽ sử dụng mẫu Proxy và khởi tạo đối tượng của mình khi cần:
```java
public class ExpensiveObjectProxy implements ExpensiveObject {
    private static ExpensiveObject object;

    @Override
    public void process() {
        if (object == null) {
            object = new ExpensiveObjectImpl();
        }
        object.process();
    }
}
```
Lưu ý rằng chúng ta đang gọi phương thức process() hai lần. Ở phía sau, 
phần cài đặt sẽ chỉ xảy ra một lần – khi đối tượng được khởi tạo lần đầu tiên.

Hãy nói về khi nào nên sử dụng mẫu Proxy:

+ Khi chúng ta muốn một phiên bản đơn giản của một đối tượng phức tạp hoặc nặng. 
Trong trường hợp này, chúng ta có thể đại diện nó bằng một đối tượng khung mà tải đối tượng gốc khi cần, 
còn được gọi là khởi tạo lười biếng. Điều này được gọi là Proxy Ảo
+ Khi đối tượng gốc có mặt trong không gian địa chỉ khác nhau, và chúng ta muốn đại diện nó cục bộ. 
Chúng ta có thể tạo một proxy thực hiện tất cả các công việc cần thiết như tạo và duy trì kết nối, 
mã hóa, giải mã, v.v., trong khi khách hàng truy cập nó như thể nó có mặt trong không gian địa chỉ cục bộ của họ. Điều này được gọi là Proxy Từ Xa
+ Khi chúng ta muốn thêm một lớp bảo mật cho đối tượng gốc để cung cấp quyền truy cập có kiểm soát dựa 
trên quyền truy cập của khách hàng. Điều này được gọi là Proxy Bảo Vệ

### Mẫu Decorator

Mẫu này hữu ích để nâng cao hành vi của một đối tượng.
Các điểm khác biệt chính:

+ Mặc dù các mẫu Proxy và Decorator có cấu trúc tương tự, nhưng chúng khác nhau về mục đích; 
trong khi mục đích chính của Proxy là tạo điều kiện sử dụng dễ dàng hoặc truy cập có kiểm soát, 
một Decorator gắn thêm trách nhiệm
+ Cả hai mẫu Proxy và Adapter đều giữ một tham chiếu đến đối tượng gốc
+ Tất cả các decorator từ mẫu này có thể được sử dụng đệ quy, một số lần vô hạn, 
điều này không thể thực hiện với các mô hình khác

Giả sử chúng ta có một đối tượng cây Giáng Sinh và chúng ta muốn trang trí nó. Việc trang trí không thay đổi đối tượng đó; 
chỉ đơn giản là ngoài cây Giáng Sinh, chúng ta đang thêm một số đồ trang trí như dây kim tuyến, ánh đèn, 
đỉnh cây, đèn bóng, v.v.

Đầu tiên, chúng ta sẽ tạo một giao diện ChristmasTree và triển khai của nó:

```java
public interface ChristmasTree {
    String decorate();
}
```

Triển khai của giao diện này sẽ trông như sau:

```java
public class ChristmasTreeImpl implements ChristmasTree {

    @Override
    public String decorate() {
        return "Cây Giáng Sinh";
    }
}
```

Chúng ta sẽ tạo một lớp TreeDecorator trừu tượng cho cây này. Decorator này sẽ triển khai 
giao diện ChristmasTree cũng như giữ cùng một đối tượng. 
Phương thức được triển khai từ cùng một giao diện sẽ chỉ gọi phương thức decorate() từ giao diện của chúng ta:

```java
public abstract class TreeDecorator implements ChristmasTree {
    private ChristmasTree tree;
    
    // các hàm khởi tạo tiêu chuẩn
    @Override
    public String decorate() {
        return tree.decorate();
    }
}
```

Chúng ta sẽ tạo một số phần tử trang trí. Những decorator này sẽ mở rộng lớp TreeDecorator trừu tượng của chúng ta và sẽ 
sửa đổi phương thức decorate() của nó theo yêu cầu của chúng ta:

```java
public class BubbleLights extends TreeDecorator {

    public BubbleLights(ChristmasTree tree) {
        super(tree);
    }
    
    public String decorate() {
        return super.decorate() + decorateWithBubbleLights();
    }
    
    private String decorateWithBubbleLights() {
        return " với Đèn Bóng";
    }
}
```
Đây là một lựa chọn tốt trong các trường hợp sau:
+ Khi chúng ta muốn thêm, nâng cao hoặc thậm chí loại bỏ hành vi hoặc trạng thái của các đối tượng
+ Khi chúng ta chỉ muốn sửa đổi chức năng của một đối tượng duy nhất của lớp và để các đối tượng khác không thay đổi

### Mẫu Adapter

Mẫu Adapter được sử dụng để kết nối hai giao diện không tương thích mà không thể kết nối trực tiếp. 
Một Adapter bọc một lớp hiện có với một giao diện mới để nó trở nên tương thích với giao diện cần thiết.

Các khác biệt chính giữa các mẫu Adapter và Proxy là:

+ Trong khi proxy cung cấp cùng một giao diện, Adapter cung cấp một giao diện khác tương thích với khách hàng của nó
+ Mẫu Adapter được sử dụng sau khi các thành phần ứng dụng được thiết kế để chúng ta có thể sử dụng chúng mà không cần sửa đổi 
mã nguồn. Điều này trái ngược với mẫu Bridge, được sử dụng trước khi các thành phần được thiết kế.

Hãy xem xét một kịch bản trong đó có một ứng dụng được phát triển ở Mỹ trả về tốc độ tối đa của các xe hơi sang trọng 
tính bằng dặm mỗi giờ (MPH). Bây giờ chúng ta cần sử dụng cùng một ứng dụng cho khách hàng của mình ở Vương quốc Anh, người muốn có cùng kết quả nhưng 
tính bằng kilômét mỗi giờ (km/h).

Để giải quyết vấn đề này, chúng ta sẽ tạo một adapter sẽ chuyển đổi các giá trị và cung cấp cho chúng ta kết quả mong muốn.

Đầu tiên, chúng ta sẽ tạo giao diện gốc Movable, giao diện này dự kiến sẽ trả về tốc độ của một số xe hơi sang trọng tính bằng dặm mỗi giờ:

```java
public interface Movable {
    // trả về tốc độ tính bằng MPH 
    double getSpeed();
}
```

Chúng ta sẽ tạo một triển khai cụ thể của giao diện này:
```java
public class BugattiVeyron implements Movable {
 
    @Override
    public double getSpeed() {
        return 268;
    }
}
```
Bây giờ chúng ta sẽ tạo một giao diện adapter MovableAdapter sẽ dựa trên cùng lớp Movable. 
Nó có thể được sửa đổi một chút để cho ra kết quả khác nhau trong các kịch bản khác nhau:

```java
public interface MovableAdapter {
    // trả về tốc độ tính bằng KM/H 
    double getSpeed();
}
```
Triển khai của giao diện này sẽ bao gồm phương thức riêng convertMPHtoKMPH() sẽ được sử dụng cho việc chuyển đổi:

```java
public class MovableAdapterImpl implements MovableAdapter {
    private Movable luxuryCars;
    
    // các hàm khởi tạo tiêu chuẩn

    @Override
    public double getSpeed() {
        return convertMPHtoKMPH(luxuryCars.getSpeed());
    }
    
    private double convertMPHtoKMPH(double mph) {
        return mph * 1.60934;
    }
}
```

_Khi nào sử dụng Mẫu Adapter_
+ Khi một thành phần bên ngoài cung cấp chức năng hấp dẫn mà chúng ta muốn tái sử dụng, nhưng nó không tương thích với ứng dụng hiện tại của chúng ta. Một Adapter phù hợp có thể được phát triển để làm cho chúng tương thích với nhau
+ Khi ứng dụng của chúng ta không tương thích với giao diện mà khách hàng của chúng ta đang mong đợi
+ Khi chúng ta muốn tái sử dụng mã kế thừa trong ứng dụng của mình mà không cần thực hiện bất kỳ sửa đổi nào trong mã gốc

### Mẫu Bridge

Mẫu Bridge được sử dụng để tách biệt một trừu tượng khỏi việc triển khai của nó để hai thứ có thể thay đổi độc lập.

Điều này có nghĩa là tạo ra một giao diện cầu sử dụng các nguyên tắc OOP để tách biệt các trách nhiệm thành các lớp trừu tượng khác nhau.

Các Điểm Khác Biệt Chính:

+ Mẫu Bridge chỉ có thể được triển khai trước khi ứng dụng được thiết kế.
+ Cho phép một trừu tượng và triển khai thay đổi độc lập trong khi mẫu Adapter làm cho các lớp không tương thích có thể làm việc cùng nhau.

Đối với mẫu Bridge, chúng ta sẽ xem xét hai lớp trừu tượng; 
một là hình dạng hình học (như tam giác và hình vuông) được tô màu khác nhau (lớp trừu tượng thứ hai của chúng ta)

Đầu tiên, chúng ta sẽ định nghĩa một giao diện màu sắc:

```java
public interface Color {
    String fill();
}
```
Bây giờ chúng ta sẽ tạo một lớp cụ thể cho giao diện này:

```java
public class Blue implements Color {
    @Override
    public String fill() {
        return "Màu là Xanh";
    }
}
```
Bây giờ hãy tạo một lớp Shape trừu tượng mà có một tham chiếu (cây cầu) đến đối tượng Color:
```java
public abstract class Shape {
    protected Color color;
    
    //các hàm khởi tạo tiêu chuẩn
    
    abstract public String draw();
}
```
Chúng ta sẽ tạo một lớp cụ thể của giao diện Shape mà cũng sẽ sử dụng phương thức từ giao diện Color:
```java
public class Square extends Shape {

    public Square(Color color) {
        super(color);
    }

    @Override
    public String draw() {
        return "Hình vuông được vẽ. " + color.fill();
    }
}
```
Đây là một lựa chọn tốt trong các trường hợp sau:
+ Khi chúng ta muốn một lớp trừu tượng cha để định nghĩa tập hợp các quy tắc cơ bản, và các lớp cụ thể để thêm các quy tắc bổ sung
+ Khi chúng ta có một lớp trừu tượng có tham chiếu đến các đối tượng, và nó có các phương thức trừu tượng sẽ được 
định nghĩa trong mỗi lớp cụ thể

### Mẫu Facade

Nói đơn giản, một facade bao bọc một hệ thống phức tạp phía sau một giao diện đơn giản. 
Nó ẩn đi nhiều phức tạp và làm cho hệ thống con dễ sử dụng.

Ngoài một giao diện đơn giản hơn nhiều, còn có một lợi ích nữa khi sử dụng mẫu thiết kế này. 
Nó tách biệt một triển khai của khách hàng khỏi hệ thống con phức tạp. 
Nhờ đó, chúng ta có thể thực hiện các thay đổi đối với hệ thống con hiện có mà không ảnh hưởng đến khách hàng.

### Mẫu Flyweight

Mẫu này được sử dụng để giảm dấu chân bộ nhớ. 
Nó cũng có thể cải thiện hiệu suất trong các ứng dụng mà việc khởi tạo đối tượng là tốn kém.

Trạng thái của đối tượng flyweight bao gồm một thành phần không thay đổi được chia sẻ với các đối tượng tương tự khác (nội tại) và 
một thành phần thay đổi có thể được thao tác bởi mã khách hàng (ngoại tại).

Rất quan trọng là các đối tượng flyweight phải là bất biến: bất kỳ thao tác nào trên trạng thái phải được thực hiện bởi nhà máy.

Các yếu tố chính của mẫu này là:
+ một giao diện định nghĩa các hoạt động mà mã khách hàng có thể thực hiện trên đối tượng flyweight
+ một hoặc nhiều triển khai cụ thể của giao diện của chúng ta
+ một nhà máy để xử lý việc khởi tạo và lưu trữ các đối tượng

Để bắt đầu, chúng ta sẽ tạo một giao diện Vehicle. Vì giao diện này sẽ là kiểu trả về của 
phương thức nhà máy, chúng ta cần đảm bảo phơi bày tất cả các phương thức liên quan

```java
public void start();
public void stop();
public Color getColor();
```
Tiếp theo, hãy tạo một lớp Car như một Vehicle cụ thể. Xe hơi của chúng ta sẽ triển khai tất cả các phương thức của giao diện vehicle. 
Về trạng thái của nó, nó sẽ có một động cơ và một trường màu sắc:
```java
private Engine engine;
private Color color;
```
Cuối cùng nhưng không kém phần quan trọng, chúng ta sẽ tạo VehicleFactory. Việc xây dựng một phương tiện mới là một hoạt động rất tốn kém 
vì vậy nhà máy sẽ chỉ tạo một phương tiện cho mỗi màu sắc.

Để làm điều đó, chúng ta theo dõi các phương tiện đã được tạo bằng cách sử dụng một bản đồ như một bộ nhớ cache đơn giản:
```java
private static Map<Color, Vehicle> vehiclesCache
  = new HashMap<>();

public static Vehicle createVehicle(Color color) {
    Vehicle newVehicle = vehiclesCache.computeIfAbsent(color, newColor -> { 
        Engine newEngine = new Engine();
        return new Car(newEngine, newColor);
    });
    return newVehicle;
}
```

## Các Mẫu Hành Vi

### Mẫu Memento
Mẫu Thiết Kế Memento cung cấp một giải pháp để thực hiện các hành động có thể hoàn tác. 
Chúng ta có thể làm điều này bằng cách lưu trạng thái của một đối tượng tại một thời điểm nhất định và khôi phục nó 
nếu các hành động đã thực hiện cần phải được hoàn tác.

Thực tế, đối tượng mà trạng thái của nó cần được lưu gọi là Originator. 
Người quản lý (Caretaker) là đối tượng kích hoạt việc lưu và khôi phục trạng thái, được gọi là Memento.

Đối tượng Memento nên tiết lộ càng ít thông tin càng tốt cho Người quản lý. 
Điều này nhằm đảm bảo rằng chúng ta không tiết lộ trạng thái nội bộ của Originator ra bên ngoài, 
vì điều đó sẽ phá vỡ các nguyên tắc đóng gói. Tuy nhiên, Originator cần truy cập đủ thông tin 
để khôi phục về trạng thái ban đầu.

Originator có thể tạo ra và tiêu thụ một Memento. Trong khi đó, Người quản lý chỉ giữ trạng thái trước khi khôi phục nó. 
Biểu diễn nội bộ của Originator được giữ kín với thế giới bên ngoài.

Thường thì, Mẫu Thiết Kế Memento sẽ được sử dụng trong các tình huống mà một số hành động có thể hoàn tác, 
do đó yêu cầu phải quay lại trạng thái trước đó. Tuy nhiên, nếu trạng thái của Originator nặng, 
việc sử dụng Mẫu Thiết Kế Memento có thể dẫn đến quy trình tạo ra tốn kém và tăng mức sử dụng bộ nhớ.

Bây giờ hãy xem một ví dụ về Mẫu Thiết Kế Memento. Hãy tưởng tượng chúng ta có một trình soạn thảo văn bản:

```java
public class TextEditor {

    private TextWindow textWindow;

    public TextEditor(TextWindow textWindow) {
        this.textWindow = textWindow;
    }
}
```

Nó có một cửa sổ văn bản, nơi chứa văn bản hiện tại đã nhập, và cung cấp một cách để thêm văn bản:

```java
public class TextWindow {

    private StringBuilder currentText;

    public TextWindow() {
        this.currentText = new StringBuilder();
    }

    public void addText(String text) {
        currentText.append(text);
    }
}
```
Bây giờ, hãy tưởng tượng chúng ta muốn trình soạn thảo văn bản của mình thực hiện một số tính năng lưu và hoàn tác. 
Khi lưu, chúng ta muốn văn bản hiện tại của mình được lưu. Do đó, khi hoàn tác các thay đổi tiếp theo, 
chúng ta sẽ khôi phục văn bản đã lưu.

Để làm điều đó, chúng ta sẽ sử dụng Mẫu Thiết Kế Memento. 
Đầu tiên, chúng ta sẽ tạo một đối tượng giữ văn bản hiện tại của cửa sổ:

```java
public class TextWindowState {

    private String text;

    public TextWindowState(String text) {
        this.text = text;
    }

    public String getText() {
        return text;
    }
}
```
Đối tượng này là Memento của chúng ta. Như chúng ta có thể thấy, chúng ta chọn sử dụng String thay vì StringBuilder 
để ngăn chặn bất kỳ cập nhật nào của văn bản hiện tại bởi những người bên ngoài.

Sau đó, chúng ta sẽ phải cung cấp cho lớp TextWindow các phương thức để tạo và tiêu thụ đối tượng Memento, 
biến TextWindow thành Originator của chúng ta:
```java
public TextWindowState save() {
    return new TextWindowState(wholeText.toString());
}

public void restore(TextWindowState save) {
    currentText = new StringBuilder(save.getText());
}
```
Cuối cùng, chúng ta phải cập nhật lớp TextEditor của mình. Là Người quản lý, 
nó sẽ giữ trạng thái của Originator và yêu cầu khôi phục khi cần thiết:
```java
private TextWindowState savedTextWindow;

public void hitSave() {
    savedTextWindow = textWindow.save();
}

public void hitUndo() {
    textWindow.restore(savedTextWindow);
}
```

Hãy xem nó hoạt động như thế nào qua một lần chạy mẫu. Hãy tưởng tượng chúng ta thêm một số văn bản vào trình soạn thảo của mình, lưu nó, 
sau đó thêm một số nữa và cuối cùng là hoàn tác. Để đạt được điều đó, chúng ta sẽ thêm một phương thức print() 
trên TextEditor của mình trả về một chuỗi văn bản hiện tại:
```java
TextEditor textEditor = new TextEditor(new TextWindow());
textEditor.write("Mẫu Thiết Kế Memento\n");
textEditor.write("Cách thực hiện nó trong Java?\n");
textEditor.hitSave();
 
textEditor.write("Mua sữa và trứng trước khi về nhà\n");
 
textEditor.hitUndo();

assertThat(textEditor.print()).isEqualTo("Mẫu Thiết Kế Memento\nCách thực hiện nó trong Java?\n");
```

### Mẫu Mediator

Mục đích của Mẫu Mediator là giảm độ phức tạp và sự phụ thuộc giữa các đối tượng liên kết chặt chẽ 
giao tiếp trực tiếp với nhau. Điều này được thực hiện bằng cách tạo ra một đối tượng trung gian (mediator) 
chăm sóc cho sự tương tác giữa các đối tượng phụ thuộc. Do đó, tất cả các giao tiếp đều đi qua mediator.

Điều này thúc đẩy sự kết nối lỏng lẻo, vì một tập hợp các thành phần làm việc cùng nhau không còn phải tương tác trực tiếp. 
Thay vào đó, chúng chỉ tham chiếu đến một đối tượng mediator duy nhất. 
Bằng cách này, cũng dễ dàng hơn để tái sử dụng các đối tượng này ở các phần khác của hệ thống.

Hãy tưởng tượng chúng ta đang xây dựng một hệ thống làm mát đơn giản bao gồm một quạt, một nguồn điện và một nút bấm. 
Nhấn nút sẽ bật hoặc tắt quạt. Trước khi bật quạt, chúng ta cần bật nguồn điện. 
Tương tự, chúng ta phải tắt nguồn ngay sau khi quạt được tắt.

Bây giờ, hãy triển khai Mẫu Mediator để giảm sự phụ thuộc giữa các lớp của chúng ta và làm cho mã dễ tái sử dụng hơn.

Đầu tiên, hãy giới thiệu lớp Mediator:

```java
public class Mediator {
    private Button button;
    private Fan fan;
    private PowerSupplier powerSupplier;

    // constructor, getters and setters

    public void press() {
        if (fan.isOn()) {
            fan.turnOff();
        } else {
            fan.turnOn();
        }
    }

    public void start() {
        powerSupplier.turnOn();
    }

    public void stop() {
        powerSupplier.turnOff();
    }
}
```
Hãy sửa đổi các lớp còn lại:
```java
public class Button {
    private Mediator mediator;

    // constructor, getters and setters

    public void press() {
        mediator.press();
    }
}
```

```java
public class Fan {
    private Mediator mediator;
    private boolean isOn = false;

    // constructor, getters and setters

    public void turnOn() {
        mediator.start();
        isOn = true;
    }

    public void turnOff() {
        isOn = false;
        mediator.stop();
    }
}
```
Bây giờ mà chúng ta đã triển khai Mẫu Mediator, không có lớp Button, Fan, hoặc PowerSupplier nào giao tiếp trực tiếp. 
Chúng chỉ có một tham chiếu duy nhất đến Mediator.
Nếu chúng ta cần thêm một nguồn điện thứ hai trong tương lai, tất cả những gì chúng ta phải làm là cập nhật logic của Mediator; 
các lớp Button và Fan vẫn không bị ảnh hưởng.

Ví dụ này cho thấy chúng ta có thể dễ dàng tách biệt các đối tượng phụ thuộc và làm cho hệ thống của chúng ta dễ bảo trì hơn.

_Khi nào nên sử dụng Mẫu Mediator_
+ Mẫu Mediator là một lựa chọn tốt nếu chúng ta phải xử lý một tập hợp các đối tượng liên kết chặt chẽ 
và khó bảo trì. Bằng cách này, chúng ta có thể giảm sự phụ thuộc giữa các đối tượng và giảm độ phức tạp tổng thể.
+ Thêm vào đó, bằng cách sử dụng đối tượng mediator, chúng ta trích xuất logic giao tiếp thành một thành phần duy nhất, 
do đó chúng ta tuân theo Nguyên tắc Trách nhiệm Đơn. 
Hơn nữa, chúng ta có thể giới thiệu các mediator mới mà không cần thay đổi các phần còn lại của hệ thống. 
Do đó, chúng ta tuân theo Nguyên tắc Mở-Đóng.
+ Tuy nhiên, đôi khi, chúng ta có thể có quá nhiều đối tượng liên kết chặt chẽ do thiết kế sai của hệ thống. 
Nếu đây là trường hợp, chúng ta không nên áp dụng Mẫu Mediator. 
Thay vào đó, chúng ta nên lùi lại một bước và suy nghĩ lại cách mà chúng ta đã mô hình hóa các lớp của mình.

Giống như tất cả các mẫu khác, chúng ta cần xem xét trường hợp sử dụng cụ thể của mình trước khi mù quáng triển khai Mẫu Mediator.

## Mẫu State

Ý tưởng chính của mẫu State là cho phép đối tượng thay đổi hành vi của nó mà không cần thay đổi lớp của nó. 
Ngoài ra, bằng cách triển khai nó, mã nguồn sẽ giữ được sự sạch sẽ hơn mà không cần nhiều câu lệnh if/else.

Hãy tưởng tượng chúng ta có một gói hàng được gửi đến bưu điện, gói hàng đó có thể được đặt hàng, 
sau đó được giao đến bưu điện và cuối cùng được nhận bởi một khách hàng. 
Bây giờ, tùy thuộc vào trạng thái hiện tại, chúng ta muốn in trạng thái giao hàng của nó.

Cách tiếp cận đơn giản nhất sẽ là thêm một số cờ boolean và áp dụng các câu lệnh if/else đơn giản trong mỗi 
phương thức của lớp. Điều đó sẽ không làm phức tạp hóa nhiều trong một kịch bản đơn giản. 
Tuy nhiên, nó có thể làm phức tạp và làm ô nhiễm mã nguồn của chúng ta khi chúng ta có nhiều trạng thái hơn để xử lý, 
điều này sẽ dẫn đến nhiều câu lệnh if/else hơn nữa.

Nhờ vào mẫu thiết kế State, chúng ta có thể đóng gói logic trong các lớp chuyên biệt, 
áp dụng Nguyên tắc Trách nhiệm Đơn lẻ và Nguyên tắc Mở/Đóng, có mã nguồn sạch hơn và dễ bảo trì hơn.

Đầu tiên, hãy định nghĩa ngữ cảnh của chúng ta, đó sẽ là một lớp Package:
```java
public class Package {

    private PackageState state = new OrderedState();

    // getter, setter

    public void previousState() {
        state.prev(this);
    }

    public void nextState() {
        state.next(this);
    }

    public void printStatus() {
        state.printStatus();
    }
}
```
Như chúng ta có thể thấy, nó chứa một tham chiếu để quản lý trạng thái, lưu ý các phương thức previousState(), nextState() và printStatus() 
nơi chúng ta ủy quyền công việc cho đối tượng trạng thái. Các trạng thái sẽ được liên kết với nhau và mỗi trạng thái sẽ thiết lập 
một trạng thái khác dựa trên tham chiếu này được truyền vào cả hai phương thức.
Tiếp theo, chúng ta sẽ có PackageState, có ba phương thức với các chữ ký sau:
```java
public interface PackageState {

    void next(Package pkg);
    void prev(Package pkg);
    void printStatus();
}
```
Giao diện này sẽ được triển khai bởi mỗi lớp trạng thái cụ thể.

Trạng thái cụ thể đầu tiên sẽ là OrderedState:
```java
public class OrderedState implements PackageState {

    @Override
    public void next(Package pkg) {
        pkg.setState(new DeliveredState());
    }

    @Override
    public void prev(Package pkg) {
        System.out.println("Gói hàng đang ở trạng thái gốc của nó.");
    }

    @Override
    public void printStatus() {
        System.out.println("Gói hàng đã được đặt, chưa được giao đến văn phòng.");
    }
}
```
Hãy xem lớp DeliveredState:
```java
public class DeliveredState implements PackageState {

    @Override
    public void next(Package pkg) {
        pkg.setState(new ReceivedState());
    }

    @Override
    public void prev(Package pkg) {
        pkg.setState(new OrderedState());
    }

    @Override
    public void printStatus() {
        System.out.println("Gói hàng đã được giao đến bưu điện, chưa được nhận.");
    }
}
```
Đầu tiên, mẫu chiến lược xác định một gia đình các thuật toán có thể thay thế cho nhau. 
Thông thường, chúng đạt được cùng một mục tiêu, nhưng với một triển khai khác nhau, chẳng hạn như thuật toán sắp xếp hoặc hiển thị.

Trong mẫu trạng thái, hành vi có thể thay đổi hoàn toàn, dựa trên trạng thái hiện tại.

Tiếp theo, trong chiến lược, khách hàng phải nhận thức được các chiến lược có thể sử dụng và thay đổi chúng một cách rõ ràng. 
Trong khi đó, trong mẫu trạng thái, mỗi trạng thái được liên kết với nhau và tạo ra luồng như trong Máy Trạng Thái Hữu Hạn.

Mẫu thiết kế trạng thái rất tuyệt vời khi chúng ta muốn tránh các câu lệnh if/else nguyên thủy. 
Thay vào đó, chúng ta trích xuất logic ra các lớp riêng biệt và để đối tượng ngữ cảnh ủy quyền hành vi cho 
các phương thức được triển khai trong lớp trạng thái.

### Mẫu Visitor

Mục đích của mẫu Visitor là định nghĩa một hoạt động mới mà không cần giới thiệu các sửa đổi 
cho một cấu trúc đối tượng hiện có.

Hãy tưởng tượng rằng chúng ta có một đối tượng tổng hợp bao gồm các thành phần. 
Cấu trúc của đối tượng là cố định – chúng ta không thể thay đổi nó, hoặc chúng ta không có kế hoạch thêm các loại phần tử mới vào cấu trúc.

Bây giờ, làm thế nào chúng ta có thể thêm chức năng mới vào mã của mình mà không cần sửa đổi các lớp hiện có?

Mẫu thiết kế Visitor có thể là một câu trả lời. Nói một cách đơn giản, những gì chúng ta cần làm là thêm một hàm chấp nhận 
lớp visitor vào mỗi phần tử của cấu trúc.
Bằng cách đó, các thành phần của chúng ta sẽ cho phép việc triển khai visitor “thăm” chúng và thực hiện bất kỳ hành động cần thiết nào trên phần tử đó.
Nói cách khác, chúng ta sẽ trích xuất thuật toán sẽ được áp dụng cho cấu trúc đối tượng từ các lớp.
Do đó, chúng ta sẽ tận dụng tốt Nguyên tắc Mở/Đóng vì chúng ta sẽ không sửa đổi mã, 
nhưng vẫn có thể mở rộng chức năng bằng cách cung cấp một triển khai Visitor mới.

Ví dụ của chúng ta sẽ là đối tượng Document tùy chỉnh bao gồm các phần tử cụ thể JSON và XML; 
các phần tử có một lớp siêu lớp trừu tượng chung, lớp Element.

Lớp Document:
```java
public class Document extends Element {

    List<Element> elements = new ArrayList<>();

    // ...

    @Override
    public void accept(Visitor v) {
        for (Element e : this.elements) {
            e.accept(v);
        }
    }
}
```
Lớp Element có một phương thức trừu tượng chấp nhận giao diện Visitor:
```java
public abstract void accept(Visitor v);
```
Do đó, khi tạo phần tử mới, đặt tên nó là JsonElement, chúng ta sẽ phải cung cấp việc triển khai phương thức này.

Tuy nhiên, do bản chất của mẫu Visitor, việc triển khai sẽ giống nhau, vì vậy trong hầu hết các trường hợp, 
nó sẽ yêu cầu chúng ta sao chép-dán mã mẫu từ các phần tử khác đã tồn tại:
```java
public class JsonElement extends Element {

    // ...

    public void accept(Visitor v) {
        v.visit(this);
    }
}
```
Vì các phần tử của chúng ta cho phép được thăm bởi bất kỳ visitor nào, hãy nói rằng chúng ta muốn xử lý các phần tử Document của mình, 
nhưng mỗi phần tử theo một cách khác nhau, tùy thuộc vào loại lớp của nó.

Do đó, visitor của chúng ta sẽ có một phương thức riêng cho loại đã cho:
```java
public class ElementVisitor implements Visitor {

    @Override
    public void visit(XmlElement xe) {
        System.out.println(
          "đang xử lý một phần tử XML với uuid: " + xe.uuid);
    }

    @Override
    public void visit(JsonElement je) {
        System.out.println(
          "đang xử lý một phần tử JSON với uuid: " + je.uuid);
    }
}
```
Để thử nghiệm, hãy xem lớp VisitorDemo:
```java
public class VisitorDemo {

    public static void main(String[] args) {

        Visitor v = new ElementVisitor();

        Document d = new Document(generateUuid());
        d.elements.add(new JsonElement(generateUuid()));
        d.elements.add(new JsonElement(generateUuid()));
        d.elements.add(new XmlElement(generateUuid()));

        d.accept(v);
    }

    // ...
}
```
Như mỗi mẫu thiết kế, ngay cả Visitor cũng có những nhược điểm của nó, đặc biệt là việc sử dụng nó làm cho việc bảo trì mã trở nên khó khăn hơn 
nếu chúng ta cần thêm các phần tử mới vào cấu trúc của đối tượng.

Ví dụ, nếu chúng ta thêm một YamlElement mới, thì chúng ta cần cập nhật tất cả các visitor hiện có với phương thức mới mong muốn 
để xử lý phần tử này. Theo cách này, nếu chúng ta có mười hoặc nhiều visitor cụ thể, 
điều đó có thể gây khó khăn khi cập nhật tất cả chúng.

Mẫu Visitor rất tuyệt vời để tách biệt thuật toán khỏi các lớp mà nó hoạt động. 
Ngoài ra, nó làm cho việc thêm hoạt động mới dễ dàng hơn, chỉ cần cung cấp một triển khai Visitor mới.

Hơn nữa, chúng ta không phụ thuộc vào giao diện của các thành phần, và nếu chúng khác nhau, 
thì cũng không sao, vì chúng ta có một thuật toán riêng để xử lý cho mỗi phần tử cụ thể.

### Mẫu Command 

Nói một cách đơn giản, mẫu này nhằm mục đích đóng gói trong một đối tượng tất cả dữ liệu cần thiết để thực hiện một hành động nhất định (lệnh), 
bao gồm phương thức nào để gọi, các đối số của phương thức và đối tượng mà phương thức thuộc về.

Mô hình này cho phép chúng ta tách rời các đối tượng sản xuất các lệnh khỏi các đối tượng tiêu thụ chúng, 
đó là lý do tại sao mẫu này thường được gọi là mẫu nhà sản xuất - người tiêu dùng.

Trong một triển khai cổ điển, mẫu lệnh yêu cầu triển khai bốn thành phần: 
+ Lệnh, 
+ Người nhận, 
+ Người gọi, 
+ và Khách hàng.

Để hiểu cách mà mẫu hoạt động và vai trò của từng thành phần, hãy tạo một ví dụ cơ bản.
Giả sử chúng ta muốn phát triển một ứng dụng tệp văn bản. Trong trường hợp như vậy, 
chúng ta nên triển khai tất cả chức năng cần thiết để thực hiện một số thao tác liên quan đến tệp văn bản, 
chẳng hạn như mở, ghi, lưu tệp văn bản, và những thứ tương tự.

Một lệnh là một đối tượng có vai trò lưu trữ tất cả thông tin cần thiết để thực hiện một hành động, 
bao gồm phương thức để gọi, các đối số của phương thức và đối tượng (được gọi là người nhận) thực hiện phương thức.

```java
@FunctionalInterface
public interface TextFileOperation {
    String execute();
}
```

```java
public class OpenTextFileOperation implements TextFileOperation {

    private TextFile textFile;
    
    // constructors
    
    @Override
    public String execute() {
        return textFile.open();
    }
}
```

```java
public class SaveTextFileOperation implements TextFileOperation {
    
    // same field and constructor as above
        
    @Override
    public String execute() {
        return textFile.save();
    }
}
```
Các lệnh TextFileOperation đóng gói tất cả thông tin cần thiết để mở và lưu một tệp văn bản, 
bao gồm đối tượng người nhận, các phương thức để gọi và các đối số (trong trường hợp này, không cần đối số, nhưng có thể có).

Một người nhận là một đối tượng thực hiện một tập hợp các hành động liên kết. 
Đó là thành phần thực hiện hành động thực tế khi phương thức execute() của lệnh được gọi.

```java
public class TextFile {
    
    private String name;
    
    // constructor
    
    public String open() {
        return "Mở tệp " + name;
    }
    
    public String save() {  
        return "Lưu tệp " + name;
    }
    
    // additional text file methods (editing, writing, copying, pasting)
}
```

Một người gọi là một đối tượng biết cách thực hiện một lệnh nhất định nhưng không biết cách lệnh đã được triển khai. 
Nó chỉ biết giao diện của lệnh.

```java
public class TextFileOperationExecutor {
    
    private final List<TextFileOperation> textFileOperations
     = new ArrayList<>();
    
    public String executeOperation(TextFileOperation textFileOperation) {
        textFileOperations.add(textFileOperation);
        return textFileOperation.execute();
    }
}
```
Một khách hàng là một đối tượng điều khiển quá trình thực hiện lệnh bằng cách chỉ định các lệnh nào để thực hiện 
và vào giai đoạn nào của quá trình để thực hiện chúng.
```java
public static void main(String[] args) {
    TextFileOperationExecutor textFileOperationExecutor
      = new TextFileOperationExecutor();
    textFileOperationExecutor.executeOperation(
      new OpenTextFileOperation(new TextFile("file1.txt"))));
    textFileOperationExecutor.executeOperation(
      new SaveTextFileOperation(new TextFile("file2.txt"))));
}
```

Vì giao diện TextFileOperation là một giao diện chức năng, 
chúng ta có thể truyền các đối tượng lệnh dưới dạng biểu thức lambda cho người gọi, 
mà không cần phải tạo các thể hiện TextFileOperation một cách rõ ràng:
```java
TextFileOperationExecutor textFileOperationExecutor
 = new TextFileOperationExecutor();
textFileOperationExecutor.executeOperation(() -> "Mở tệp file1.txt");
textFileOperationExecutor.executeOperation(() -> "Lưu tệp file1.txt");
```

### Mẫu Observer

Nó xác định sự giao tiếp giữa các đối tượng: có thể quan sát và người quan sát. 
Một đối tượng có thể quan sát là một đối tượng thông báo cho người quan sát về những thay đổi trong trạng thái của nó.

Ví dụ, một cơ quan tin tức có thể thông báo cho các kênh khi nó nhận được tin tức. 
Việc nhận tin tức là điều thay đổi trạng thái của cơ quan tin tức, và nó khiến các kênh được thông báo.

Hãy xem cách chúng ta có thể triển khai nó.

Đầu tiên, hãy định nghĩa lớp NewsAgency:
```java
public class NewsAgency {
    private String news;
    private List<Channel> channels = new ArrayList<>();

    public void addObserver(Channel channel) {
        this.channels.add(channel);
    }

    public void removeObserver(Channel channel) {
        this.channels.remove(channel);
    }

    public void setNews(String news) {
        this.news = news;
        for (Channel channel : this.channels) {
            channel.update(this.news);
        }
    }
}
```
Để có thể làm điều đó, đối tượng có thể quan sát cần giữ các tham chiếu đến người quan sát, 
và trong trường hợp của chúng ta, đó là biến channels.

### Mẫu Template Method

Nó giúp dễ dàng triển khai các thuật toán phức tạp bằng cách đóng gói logic trong một phương thức duy nhất.

Lớp ComputerBuilder chịu trách nhiệm phác thảo các bước cần thiết để xây dựng một máy tính bằng cách khai báo các phương thức 
để thêm và thiết lập các thành phần khác nhau, chẳng hạn như bo mạch chủ và bộ xử lý.

```java
public abstract class ComputerBuilder {
    
    // ...
    
    public final Computer buildComputer() {
        addMotherboard();
        setupMotherboard();
        addProcessor();
        return new Computer(computerParts);
    }
   
    public abstract void addMotherboard();
    public abstract void setupMotherboard();
    public abstract void addProcessor();
    
    // ...
}
```

Ở đây, phương thức build() là phương thức mẫu, định nghĩa các bước của thuật toán để lắp ráp các bộ phận máy tính 
và trả về các thể hiện Computer đã được khởi tạo đầy đủ.

Lưu ý rằng nó được khai báo là final để ngăn không cho nó bị ghi đè.
Với lớp cơ sở đã được thiết lập, hãy thử sử dụng nó bằng cách tạo hai lớp con. 
Một lớp xây dựng một máy tính “chuẩn”, và lớp còn lại xây dựng một máy tính “cao cấp”:

```java
public class StandardComputerBuilder extends ComputerBuilder {

    @Override
    public void addMotherboard() {
        computerParts.put("Motherboard", "Bo mạch chủ chuẩn");
    }
    
    @Override
    public void setupMotherboard() {
        motherboardSetupStatus.add(
          "Vặn bo mạch chủ chuẩn vào thùng.");
        motherboardSetupStatus.add(
          "Cắm các đầu nối nguồn vào.");
        motherboardSetupStatus.forEach(
          step -> System.out.println(step));
    }
    
    @Override
    public void addProcessor() {
        computerParts.put("Processor", "Bộ xử lý chuẩn");
    }
}
```

### Mẫu Strategy

Về cơ bản, mẫu chiến lược cho phép chúng ta thay đổi hành vi của một thuật toán tại thời gian chạy.

Thông thường, chúng ta sẽ bắt đầu với một giao diện được sử dụng để áp dụng một thuật toán, và sau đó triển khai 
nó nhiều lần cho mỗi thuật toán có thể.

Giả sử chúng ta có yêu cầu áp dụng các loại giảm giá khác nhau cho một giao dịch mua, 
dựa trên việc đó có phải là Giáng sinh, Lễ Phục sinh hay Tết Nguyên Đán hay không. Đầu tiên, 
hãy tạo một giao diện Discounter sẽ được triển khai bởi mỗi chiến lược của chúng ta:

```java
public interface Discounter {
    BigDecimal applyDiscount(BigDecimal amount);
}
```

Sau đó, giả sử chúng ta muốn áp dụng giảm giá 50% vào Lễ Phục sinh và giảm giá 10% vào Giáng sinh. 
Hãy triển khai giao diện của chúng ta cho mỗi chiến lược này:
```java
public static class EasterDiscounter implements Discounter {
    @Override
    public BigDecimal applyDiscount(final BigDecimal amount) {
        return amount.multiply(BigDecimal.valueOf(0.5));
    }
}

public static class ChristmasDiscounter implements Discounter {
   @Override
   public BigDecimal applyDiscount(final BigDecimal amount) {
       return amount.multiply(BigDecimal.valueOf(0.9));
   }
}
```

sử dụng
```java
Discounter easterDiscounter = new EasterDiscounter();

BigDecimal discountedValue = easterDiscounter
  .applyDiscount(BigDecimal.valueOf(100));

assertThat(discountedValue)
  .isEqualByComparingTo(BigDecimal.valueOf(50));
```

### Mẫu Chain of Responsibility

Mẫu Chain of Responsibility rất hữu ích cho:
+ Tách rời người gửi và người nhận của một lệnh
+ Chọn một chiến lược xử lý tại thời điểm xử lý

Đầu tiên, hãy tạo một lớp cơ sở trừu tượng cho các bộ xử lý của chúng ta:
```java
public abstract class AuthenticationProcessor {

    public AuthenticationProcessor nextProcessor;
    
    // standard constructors

    public abstract boolean isAuthorized(AuthenticationProvider authProvider);
}
```
Tiếp theo, hãy tạo các bộ xử lý cụ thể mở rộng AuthenticationProcessor:
```java
public class OAuthProcessor extends AuthenticationProcessor {

    public OAuthProcessor(AuthenticationProcessor nextProcessor) {
        super(nextProcessor);
    }

    @Override
    public boolean isAuthorized(AuthenticationProvider authProvider) {
        if (authProvider instanceof OAuthTokenProvider) {
            return true;
        } else if (nextProcessor != null) {
            return nextProcessor.isAuthorized(authProvider);
        }
        
        return false;
    }
}
```

```java
public class UsernamePasswordProcessor extends AuthenticationProcessor {

    public UsernamePasswordProcessor(AuthenticationProcessor nextProcessor) {
        super(nextProcessor);
    }

    @Override
    public boolean isAuthorized(AuthenticationProvider authProvider) {
        if (authProvider instanceof UsernamePasswordProvider) {
            return true;
        } else if (nextProcessor != null) {
            return nextProcessor.isAuthorized(authProvider);
        }
    return false;
    }
}
```
Ở đây, chúng ta đã tạo hai bộ xử lý cụ thể cho các yêu cầu xác thực đến: 
UsernamePasswordProcessor và OAuthProcessor.

Đối với mỗi bộ xử lý, chúng ta đã ghi đè phương thức isAuthorized.

Bây giờ hãy tạo một vài bài kiểm tra:
```java
public class ChainOfResponsibilityTest {

    private static AuthenticationProcessor getChainOfAuthProcessor() {
        AuthenticationProcessor oAuthProcessor = new OAuthProcessor(null);
        return new UsernamePasswordProcessor(oAuthProcessor);
    }

    @Test
    public void givenOAuthProvider_whenCheckingAuthorized_thenSuccess() {
        AuthenticationProcessor authProcessorChain = getChainOfAuthProcessor();
        assertTrue(authProcessorChain.isAuthorized(new OAuthTokenProvider()));
    }

    @Test
    public void givenSamlProvider_whenCheckingAuthorized_thenSuccess() {
        AuthenticationProcessor authProcessorChain = getChainOfAuthProcessor();
 
        assertFalse(authProcessorChain.isAuthorized(new SamlTokenProvider()));
    }
}
```
Ví dụ trên tạo một chuỗi các bộ xử lý xác thực: UsernamePasswordProcessor -> OAuthProcessor. 
Trong bài kiểm tra đầu tiên, việc ủy quyền thành công, và trong bài kiểm tra khác, nó thất bại.

Đầu tiên, UsernamePasswordProcessor kiểm tra xem nhà cung cấp xác thực có phải là một thể hiện của UsernamePasswordProvider hay không.

Không phải là đầu vào mong đợi, UsernamePasswordProcessor ủy quyền cho OAuthProcessor.

Cuối cùng, OAuthProcessor xử lý lệnh. Trong bài kiểm tra đầu tiên, có một sự khớp và bài kiểm tra thành công. 
Trong bài kiểm tra thứ hai, không còn bộ xử lý nào trong chuỗi, và do đó, bài kiểm tra thất bại.

Chúng ta cần giữ một số nguyên tắc quan trọng trong tâm trí khi triển khai Chain of Responsibility:

+ Mỗi bộ xử lý trong chuỗi sẽ có triển khai riêng của nó để xử lý một lệnh
Trong ví dụ của chúng ta ở trên, tất cả các bộ xử lý đều có triển khai riêng của isAuthorized
+ Mỗi bộ xử lý trong chuỗi nên có tham chiếu đến bộ xử lý tiếp theo
Ở trên, UsernamePasswordProcessor ủy quyền cho OAuthProcessor
+ Mỗi bộ xử lý có trách nhiệm ủy quyền cho bộ xử lý tiếp theo vì vậy hãy cẩn thận với các lệnh bị bỏ qua
Một lần nữa trong ví dụ của chúng ta, nếu lệnh là một thể hiện của SamlProvider thì yêu cầu có thể không được xử lý và sẽ không được ủy quyền
+ Các bộ xử lý không nên tạo thành một vòng lặp đệ quy
Trong ví dụ của chúng ta, chúng ta không có vòng lặp trong chuỗi: UsernamePasswordProcessor -> OAuthProcessor. 
Nhưng, nếu chúng ta đặt UsernamePasswordProcessor là bộ xử lý tiếp theo của OAuthProcessor, 
thì chúng ta sẽ kết thúc với một vòng lặp trong chuỗi của mình: UsernamePasswordProcessor -> OAuthProcessor -> UsernamePasswordProcessor. 
Lấy bộ xử lý tiếp theo trong bộ tạo có thể giúp tránh điều này
+ Chỉ một bộ xử lý trong chuỗi xử lý một lệnh nhất định
Trong ví dụ của chúng ta, nếu một lệnh đến chứa một thể hiện của OAuthTokenProvider, thì chỉ có OAuthProcessor sẽ xử lý lệnh

Những nhược điểm
Và bây giờ khi chúng ta đã thấy Chain of Responsibility thú vị như thế nào, hãy nhớ một số nhược điểm:

Chủ yếu, nó có thể dễ dàng bị hỏng:
+ nếu một bộ xử lý không gọi bộ xử lý tiếp theo, lệnh sẽ bị bỏ qua
+ nếu một bộ xử lý gọi sai bộ xử lý, nó có thể dẫn đến một vòng lặp
+ Nó có thể tạo ra các trace ngăn xếp sâu, điều này có thể ảnh hưởng đến hiệu suất
+ Nó có thể dẫn đến mã trùng lặp giữa các bộ xử lý, tăng cường bảo trì

## Các Mô Hình Kiến Trúc Khác

### Mô Hình Service Locator
Mục đích của mô hình Service Locator là trả về các thể hiện dịch vụ theo yêu cầu. 
Điều này hữu ích cho việc tách rời các nhà tiêu thụ dịch vụ khỏi các lớp cụ thể.

Một triển khai sẽ bao gồm các thành phần sau:

+ Khách hàng – đối tượng khách hàng là một nhà tiêu thụ dịch vụ. Nó có trách nhiệm gọi yêu cầu từ dịch vụ locator.
+ Service Locator – là điểm truy cập giao tiếp để trả về các dịch vụ từ bộ nhớ cache.
+ Bộ nhớ cache – một đối tượng để lưu trữ các tham chiếu dịch vụ để tái sử dụng sau này.
+ Bộ khởi tạo – tạo và đăng ký các tham chiếu đến các dịch vụ trong bộ nhớ cache.
+ Dịch vụ – thành phần Dịch vụ đại diện cho các dịch vụ gốc hoặc triển khai của chúng.

Đối tượng dịch vụ gốc được tìm kiếm bởi locator và trả về theo yêu cầu.

Đầu tiên, chúng ta sẽ tạo một giao diện MessagingService để gửi tin nhắn theo nhiều cách khác nhau:

```java
public interface MessagingService {

    String getMessageBody();
    String getServiceName();
}
```
Tiếp theo, chúng ta sẽ định nghĩa hai triển khai của giao diện trên, gửi tin nhắn qua email và SMS:
```java
public class EmailService implements MessagingService {

    public String getMessageBody() {
        return "tin nhắn email";
    }

    public String getServiceName() {
        return "EmailService";
    }
}
```
Định nghĩa lớp SMSService tương tự như lớp EmailService.

Sau khi định nghĩa hai dịch vụ, chúng ta phải định nghĩa logic để khởi tạo chúng:
```java
public class InitialContext {
    public Object lookup(String serviceName) {
        if (serviceName.equalsIgnoreCase("EmailService")) {
            return new EmailService();
        } else if (serviceName.equalsIgnoreCase("SMSService")) {
            return new SMSService();
        }
        return null;
    }
}
```
Thành phần cuối cùng mà chúng ta cần trước khi ghép nối đối tượng service locator là bộ nhớ cache.

Trong ví dụ của chúng ta, đây là một lớp đơn giản với thuộc tính List:
```java
public class Cache {
    private List<MessagingService> services = new ArrayList<>();

    public MessagingService getService(String serviceName) {
        // lấy từ danh sách
    }

    public void addService(MessagingService newService) {
        // thêm vào danh sách
    }
}
```

Cuối cùng, chúng ta có thể triển khai lớp service locator của mình:
```java
public class ServiceLocator {

    private static Cache cache = new Cache();

    public static MessagingService getService(String serviceName) {

        MessagingService service = cache.getService(serviceName);

        if (service != null) {
            return service;
        }

        InitialContext context = new InitialContext();
        MessagingService service1 = (MessagingService) context
          .lookup(serviceName);
        cache.addService(service1);
        return service1;
    }
}
```

Logic ở đây khá đơn giản.

Lớp này giữ một thể hiện của Cache. Sau đó, trong phương thức getService(), 
nó sẽ kiểm tra bộ nhớ cache trước để tìm một thể hiện của dịch vụ.
Nếu không có, nó sẽ gọi logic khởi tạo và thêm đối tượng mới vào bộ nhớ cache.
Cuối cùng, hãy xem xét một vài lý do để tránh sử dụng mô hình Service Locator.

Một lập luận chống lại nó là nó làm cho việc kiểm tra đơn vị trở nên khó khăn. Với việc tiêm phụ thuộc, 
chúng ta có thể truyền các đối tượng giả của lớp phụ thuộc vào thể hiện được kiểm tra. 
Mặt khác, đây là một điểm nghẽn với mô hình Service Locator.

Một vấn đề khác là việc sử dụng các API dựa trên mô hình này phức tạp hơn. 
Lý do cho điều này là các phụ thuộc được ẩn bên trong lớp và chỉ được xác minh tại thời gian chạy.

### Mô Hình Front Controller

Trong hướng dẫn này, chúng ta sẽ đi sâu vào Mô Hình Front Controller, 
một phần của các Mô Hình Doanh Nghiệp như được định nghĩa trong cuốn sách “Patterns of Enterprise Application Architecture” của Martin Fowler.

Front Controller được định nghĩa là “một bộ điều khiển xử lý tất cả các yêu cầu cho một trang web”. 
Nó đứng trước một ứng dụng web và ủy quyền các yêu cầu cho các tài nguyên tiếp theo. 
Nó cũng cung cấp một giao diện cho hành vi chung như bảo mật, 
quốc tế hóa và trình bày các chế độ xem cụ thể cho một số người dùng nhất định.

Điều này cho phép một ứng dụng thay đổi hành vi của nó tại thời gian chạy. 
Hơn nữa, nó giúp đọc và duy trì một ứng dụng bằng cách ngăn chặn việc sao chép mã.

Front Controller tập hợp tất cả việc xử lý yêu cầu bằng cách kênh các yêu cầu qua một đối tượng xử lý duy nhất.

Mô Hình Front Controller chủ yếu được chia thành hai phần. 
Một bộ điều khiển phân phối duy nhất và một hệ thống lệnh.
Bộ điều khiển duy nhất này phân phối các yêu cầu đến các lệnh để kích hoạt hành vi liên quan đến một yêu cầu.

### Mô Hình Intercepting Filter

Các bộ lọc Intercepting là các bộ lọc kích hoạt các hành động trước hoặc sau khi một yêu cầu đến được xử lý bởi một bộ xử lý.

Các bộ lọc Intercepting đại diện cho các thành phần tập trung trong một ứng dụng web, 
chung cho tất cả các yêu cầu và có thể mở rộng mà không ảnh hưởng đến các bộ xử lý hiện có.

Hãy mở rộng ví dụ từ hướng dẫn trước và triển khai một cơ chế xác thực, ghi lại yêu cầu, 
và một bộ đếm khách truy cập. Ngoài ra, chúng ta muốn khả năng cung cấp các trang của mình bằng nhiều mã hóa khác nhau.

Tất cả những điều này đều là các trường hợp sử dụng cho các bộ lọc Intercepting vì chúng là chung cho 
tất cả các yêu cầu và nên độc lập với các bộ xử lý.

### Mô Hình Null Object

Trong hầu hết các ngôn ngữ lập trình hướng đối tượng, chúng ta không được phép sử dụng tham chiếu null. Đó là lý do tại sao chúng ta thường bị buộc phải viết các kiểm tra null:
```java
Command cmd = getCommand();
if (cmd != null) {
    cmd.execute();
}
```
Đôi khi, nếu số lượng các câu lệnh if như vậy tăng cao, mã có thể trở nên xấu xí, khó đọc và dễ mắc lỗi. 
Đây là lúc Mô Hình Null Object có thể hữu ích.

Mục đích của Mô Hình Null Object là giảm thiểu loại kiểm tra null đó. Thay vào đó, chúng ta có thể xác định 
hành vi null và đóng gói nó trong loại mà mã khách hàng mong đợi. 
Thường thì, logic trung lập như vậy rất đơn giản – không làm gì cả. 
Bằng cách này, chúng ta không còn cần phải xử lý đặc biệt các tham chiếu null.

Chúng ta có thể đối xử với các đối tượng null giống như cách chúng ta đối xử với bất kỳ thể hiện nào khác của một loại nhất định mà thực sự chứa 
một số logic kinh doanh tinh vi hơn. Do đó, mã khách hàng trở nên sạch hơn.

Vì các đối tượng null không nên có bất kỳ trạng thái nào, không cần thiết phải tạo ra các thể hiện giống hệt nhau nhiều lần. 
Do đó, chúng ta thường triển khai các đối tượng null dưới dạng singleton.

Như chúng ta có thể thấy, chúng ta có thể xác định các tham gia sau:

Khách hàng yêu cầu một thể hiện của AbstractObject
+ AbstractObject định nghĩa hợp đồng mà Khách hàng mong đợi – nó cũng có thể chứa logic chung cho các lớp triển khai
+ RealObject triển khai AbstractObject và cung cấp hành vi thực
+ NullObject triển khai AbstractObject và cung cấp hành vi trung lập

Hãy tưởng tượng chúng ta có một ứng dụng định tuyến tin nhắn. Mỗi tin nhắn nên có một mức độ ưu tiên hợp lệ được chỉ định. 
Hệ thống của chúng ta dự kiến sẽ định tuyến các tin nhắn ưu tiên cao đến một cổng SMS trong khi các tin nhắn có mức độ ưu tiên trung bình 
nên được định tuyến đến một hàng đợi JMS.

Thỉnh thoảng, tuy nhiên, các tin nhắn có mức độ ưu tiên “không xác định” hoặc trống có thể đến ứng dụng của chúng ta. 
Các tin nhắn như vậy nên được loại bỏ khỏi việc xử lý tiếp theo.

Đầu tiên, chúng ta sẽ tạo giao diện Router:
```java
public interface Router {
    void route(Message msg);
}
```
Tiếp theo, hãy tạo hai triển khai của giao diện trên – một cái chịu trách nhiệm định tuyến đến một 
cổng SMS và một cái sẽ định tuyến các tin nhắn đến hàng đợi JMS:
```java
public class SmsRouter implements Router {
    @Override
    public void route(Message msg) {
        // chi tiết triển khai
    }
}
```
```java
public class JmsRouter implements Router {
    @Override
    public void route(Message msg) {
        // chi tiết triển khai
    }
}
```
Cuối cùng, hãy triển khai đối tượng null của chúng ta:
```java
public class NullRouter implements Router {
    @Override
    public void route(Message msg) {
        // không làm gì cả
    }
}
```
Chúng ta đã sẵn sàng để ghép nối tất cả các phần lại với nhau. Hãy xem mã khách hàng ví dụ có thể trông như thế nào:
```java
public class RoutingHandler {
    public void handle(Iterable<Message> messages) {
        for (Message msg : messages) {
            Router router = RouterFactory.getRouterForMessage(msg);
            router.route(msg);
        }
    }
}
```
Như chúng ta có thể thấy, chúng ta đối xử với tất cả các đối tượng Router giống nhau, bất kể triển khai nào được trả về bởi RouterFactory. 
Điều này cho phép chúng ta giữ mã của mình sạch sẽ và dễ đọc.
Chúng ta nên sử dụng Mô Hình Null Object khi một Khách hàng sẽ kiểm tra null chỉ để bỏ qua thực thi hoặc thực hiện 
một hành động mặc định. Trong những trường hợp như vậy, chúng ta có thể đóng gói logic trung lập trong một đối tượng null và trả về điều đó cho khách hàng 
thay vì giá trị null. Bằng cách này, mã của khách hàng không còn cần phải nhận thức được việc một thể hiện nhất định có phải là null hay không.

Hầu hết các nhà phát triển sẽ trả về Collections.emptyList() từ findByNameAndLastname() trong trường hợp không có khách hàng nào 
phù hợp với tiêu chí tìm kiếm đã cung cấp. Đây là một ví dụ rất tốt về việc tuân theo Mô Hình Null Object.

Ngược lại, phương thức getById() nên trả về khách hàng với id đã cho. Ai đó gọi phương thức này mong đợi nhận được 
thực thể khách hàng cụ thể. Trong trường hợp không có khách hàng nào như vậy tồn tại, chúng ta nên trả về null một cách rõ ràng để báo hiệu có điều gì đó sai với id đã cung cấp. 

Như với tất cả các mô hình khác, chúng ta cần xem xét trường hợp sử dụng cụ thể của mình trước khi mù quáng triển khai 
Mô Hình Null Object. Nếu không, chúng ta có thể vô tình giới thiệu một số lỗi trong mã của mình mà sẽ khó tìm thấy.

### Mô Hình Gateway

Cách sử dụng mô hình Gateway để truy xuất dữ liệu từ nhiều dịch vụ bằng một yêu cầu duy nhất.
Spring Cloud hiện cũng cung cấp dự án Spring Cloud Gateway, triển khai mô hình này. 
Một trường hợp sử dụng phổ biến cho mô hình Gateway là có các điểm cuối bao bọc các dịch vụ thường được gọi. 
Điều này có thể tăng hiệu suất bằng cách giảm số lượng yêu cầu từ phía khách hàng.

