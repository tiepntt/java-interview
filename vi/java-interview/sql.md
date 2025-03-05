# Câu Hỏi Phỏng Vấn SQL

+ [Khóa chính là gì?](#khóa-chính-là-gì)
+ [Khóa ngoại là gì?](#khóa-ngoại-là-gì)
+ [Khóa duy nhất là gì?](#khóa-duy-nhất-là-gì)
+ [Sự khác biệt giữa khóa chính và khóa duy nhất là gì?](#sự-khác-biệt-giữa-khóa-chính-và-khóa-duy-nhất-là-gì)
+ [Chuẩn hóa trong cơ sở dữ liệu là gì?](#chuẩn-hóa-trong-cơ-sở-dữ-liệu-là-gì)
+ [Những bất lợi của việc không thực hiện chuẩn hóa cơ sở dữ liệu là gì?](#những-bất-lợi-của-việc-không-thực-hiện-chuẩn-hóa-cơ-sở-dữ-liệu-là-gì)
+ [Phi chuẩn hóa trong cơ sở dữ liệu là gì?](#phi-chuẩn-hóa-trong-cơ-sở-dữ-liệu-là-gì)
+ [Một view trong SQL là gì?](#một-view-trong-sql-là-gì)
+ [Chỉ mục trong SQL là gì?](#chỉ-mục-trong-sql-là-gì)
+ [Có những loại chỉ mục nào trong SQL?](#có-những-loại-chỉ-mục-nào-trong-sql)
+ [Có những loại kết nối nào trong SQL?](#có-những-loại-kết-nối-nào-trong-sql)
+ ["TRIGGER" trong SQL là gì?](#trigger-trong-sql-là-gì)
+ [Các toán tử tập hợp trong SQL là gì?](#các-toán-tử-tập-hợp-trong-sql-là-gì)
+ [Sự khác biệt giữa toán tử IN và BETWEEN là gì?](#sự-khác-biệt-giữa-toán-tử-in-và-between-là-gì)
+ [Cách viết truy vấn SQL để tìm tên sinh viên bắt đầu bằng 'A' là gì?](#cách-viết-truy-vấn-sql-để-tìm-tên-sinh-viên-bắt-đầu-bằng-a-là-gì)
+ [Viết truy vấn SQL để lấy mức lương cao thứ ba của một nhân viên từ bảng có tên là employees.](#viết-truy-vấn-sql-để-lấy-mức-lương-cao-thứ-ba-của-một-nhân-viên-từ-bảng-có-tên-là-employees)
+ [Tính chất ACID trong cơ sở dữ liệu là gì?](#tính-chất-acid-trong-cơ-sở-dữ-liệu-là-gì)
+ [Chúng ta sử dụng câu lệnh DISTINCT như thế nào? Nó có tác dụng gì?](#chúng-ta-sử-dụng-câu-lệnh-distinct-như-thế-nào-nó-có-tác-dụng-gì)
+ [Thứ tự mặc định của dữ liệu khi sử dụng câu lệnh ORDER BY là gì? Nó có thể được thay đổi như thế nào?](#thứ-tự-mặc-định-của-dữ-liệu-khi-sử-dụng-câu-lệnh-order-by-là-gì-nó-có-thể-được-thay-đổi-như-thế-nào)
+ [Sự khác biệt giữa các mệnh đề WHERE và HAVING là gì?](#sự-khác-biệt-giữa-các-mệnh-đề-where-và-having-là-gì)
+ [Có bao nhiêu hàm tổng hợp có sẵn trong SQL?](#có-bao-nhiêu-hàm-tổng-hợp-có-sẵn-trong-sql)

## Khóa chính là gì?

Khóa chính là một trường hoặc sự kết hợp của các trường mà xác định duy nhất mỗi bản ghi trong bảng. 
Nó là một trong những loại khóa duy nhất đặc biệt. Nếu cột chứa khóa chính, nó không thể là null hoặc trống. 
Một bảng có thể có các cột trùng lặp, nhưng không thể có nhiều hơn một khóa chính. 
Nó luôn lưu trữ các giá trị duy nhất vào một cột.

```sql
CREATE TABLE Student (    
    roll_number INT PRIMARY KEY,    
    name VARCHAR(45)    
);    
```

## Khóa ngoại là gì?

Khóa ngoại được sử dụng để liên kết một hoặc nhiều bảng với nhau. Nó còn được gọi là khóa tham chiếu. 
Một khóa ngoại được xác định là một khóa có liên quan đến khóa chính của một bảng khác. 
Điều này có nghĩa là một trường khóa ngoại trong một bảng tham chiếu đến trường khóa chính của bảng khác. 
Nó xác định mỗi hàng của bảng khác một cách duy nhất, duy trì tính toàn vẹn tham chiếu. 
Mối quan hệ giữa khóa chính và khóa ngoại là một mối quan hệ rất quan trọng vì nó duy trì các thuộc tính ACID của cơ sở dữ liệu trong một số trường hợp. Nó cũng ngăn chặn các hành động có thể phá hủy các liên kết giữa bảng con và bảng cha.

```sql
CONSTRAINT constraint_name    
    FOREIGN KEY [foreign_key_name] (col_name, ...)    
    REFERENCES parent_tbl_name (col_name,...)   
```

## Khóa duy nhất là gì?

Khóa duy nhất là một trường đơn hoặc sự kết hợp của các trường đảm bảo rằng tất cả các giá trị được lưu trữ trong cột sẽ là duy nhất. Điều này có nghĩa là một cột không thể lưu trữ các giá trị trùng lặp. Khóa này cung cấp tính duy nhất cho cột hoặc tập hợp các cột.

```sql
CREATE TABLE table_name(    
    col1 datatype,    
    col2 datatype UNIQUE    
);  
```

## Sự khác biệt giữa khóa chính và khóa duy nhất là gì?

Khóa chính và khóa duy nhất đều là những ràng buộc quan trọng trong SQL. Sự khác biệt chính giữa chúng là khóa chính xác định mỗi bản ghi trong bảng. Ngược lại, khóa duy nhất ngăn chặn các mục trùng lặp trong một cột ngoại trừ giá trị NULL.

## Chuẩn hóa trong cơ sở dữ liệu là gì?

Có một số quy tắc của chuẩn hóa cơ sở dữ liệu, thường được biết đến với tên gọi Normal Form, và chúng bao gồm:

+ Chuẩn hóa dạng 1 (1NF)
    + Mỗi ô trong bảng nên chứa một giá trị duy nhất.
    + Mỗi bản ghi cần phải là duy nhất.
+ Chuẩn hóa dạng 2 (2NF)
    + Quy tắc 1 - Phải ở dạng 1NF
    + Quy tắc 2 - Tất cả các thuộc tính không phải khóa phải phụ thuộc hoàn toàn vào khóa chính.
    (khóa ngoại, hàng duy nhất)
+ Chuẩn hóa dạng 3 (3NF)
    + Quy tắc 1 - Phải ở dạng 2NF
    + Quy tắc 2 - Không có các phụ thuộc chức năng chuyển tiếp
 Đây là phụ thuộc chuyển tiếp. Khi một thuộc tính không phải khóa phụ thuộc vào các thuộc tính không phải khóa khác thay vì phụ thuộc vào các thuộc tính khóa chính hoặc khóa chính.

## Những bất lợi của việc không thực hiện chuẩn hóa cơ sở dữ liệu là gì?

Những bất lợi chính là:

Sự xuất hiện của các thuật ngữ dư thừa trong cơ sở dữ liệu gây lãng phí không gian trên đĩa.
Do các thuật ngữ dư thừa, sự không nhất quán cũng có thể xảy ra. Nếu có bất kỳ thay đổi nào được thực hiện trong dữ liệu của một bảng nhưng không được thực hiện trong cùng dữ liệu của bảng khác, thì sự không nhất quán sẽ xảy ra.
Sự không nhất quán này sẽ dẫn đến vấn đề bảo trì và ảnh hưởng đến các thuộc tính ACID.

## Denormalization trong Cơ sở dữ liệu là gì?

Denormalization là một kỹ thuật được các quản trị viên cơ sở dữ liệu sử dụng để tối ưu hóa hiệu quả của hạ tầng cơ sở dữ liệu của họ. 
Khái niệm denormalization dựa trên Normalization, được định nghĩa là sắp xếp một cơ sở dữ liệu thành các bảng một cách chính xác cho một mục đích cụ thể. Phương pháp này cho phép chúng ta thêm dữ liệu dư thừa vào một cơ sở dữ liệu đã được chuẩn hóa để giảm thiểu các vấn đề với các truy vấn cơ sở dữ liệu kết hợp dữ liệu từ nhiều bảng thành một bảng duy nhất. 
Nó thêm các thuật ngữ dư thừa vào các bảng để tránh các phép nối phức tạp và nhiều thao tác phức tạp khác.

Denormalization không có nghĩa là normalization sẽ không được thực hiện. 
Đây là một chiến lược tối ưu hóa diễn ra sau quá trình chuẩn hóa.

## View trong SQL là gì?

View là một đối tượng trong cơ sở dữ liệu không có giá trị. Nó là một bảng ảo chứa một tập hợp con dữ liệu trong một bảng. 
Nó trông giống như một bảng thực sự với các hàng và cột, nhưng chiếm ít không gian hơn vì không tồn tại vật lý. 
Nó được vận hành tương tự như bảng gốc nhưng không chứa bất kỳ dữ liệu nào của riêng nó. 
Tên của nó luôn phải là duy nhất. Một view có thể có dữ liệu từ một hoặc nhiều bảng. Nếu có bất kỳ thay đổi nào xảy ra trong bảng cơ sở, 
các thay đổi tương tự cũng sẽ được phản ánh trong các view.

Mục đích chính của view là để thực hiện cơ chế bảo mật. Nó là đối tượng có thể tìm kiếm, nơi chúng ta có thể sử dụng truy vấn 
để tìm kiếm view giống như chúng ta sử dụng cho bảng. Nó chỉ hiển thị dữ liệu được trả về bởi truy vấn đã được khai báo khi 
view được tạo.

```sql
CREATE VIEW view_name AS  
SELECT column_lists FROM table_name  
WHERE condition;  
```

## Chỉ mục trong SQL là gì?

Chỉ mục là một cấu trúc đĩa liên kết với một bảng hoặc một chế độ xem, giúp tăng tốc độ truy xuất hàng. 
Nó giảm chi phí của truy vấn vì chi phí cao của truy vấn sẽ dẫn đến hiệu suất giảm. 
Chỉ mục được sử dụng để tăng cường hiệu suất và cho phép truy xuất bản ghi nhanh hơn từ bảng. 
Việc lập chỉ mục giảm số lượng trang dữ liệu mà chúng ta cần truy cập để tìm một trang dữ liệu cụ thể. 
Nó cũng có giá trị duy nhất, có nghĩa là chỉ mục không thể bị trùng lặp. 
Một chỉ mục tạo ra một mục cho mỗi giá trị, giúp việc truy xuất dữ liệu nhanh hơn.

## Các loại chỉ mục khác nhau trong SQL là gì?

+ Chỉ mục duy nhất (Unique Index). CHỈ MỤC DUY NHẤT được sử dụng để đảm bảo tính duy nhất của các giá trị trong một hoặc nhiều cột. 
Chúng ta có thể tạo nhiều chỉ mục duy nhất trong một bảng. Để tạo một chỉ mục duy nhất, người dùng phải kiểm tra dữ liệu 
trong cột vì các chỉ mục duy nhất được sử dụng khi bất kỳ cột nào của bảng có các giá trị duy nhất. 
Chỉ mục này không cho phép trường có các giá trị trùng lặp nếu cột được chỉ mục duy nhất. 
Một chỉ mục duy nhất có thể được áp dụng tự động khi một khóa chính được định nghĩa.
```sql
CREATE UNIQUE INDEX index_name    
ON table_name (index_column1, index_column2,...);  
```

+ Chỉ mục phân cụm (Clustered Index). Chỉ mục phân cụm thực chất là một bảng nơi dữ liệu cho các hàng được lưu trữ. 
Nó xác định thứ tự của dữ liệu bảng dựa trên các giá trị khóa mà chỉ có thể sắp xếp theo một hướng duy nhất. 
Mỗi bảng chỉ có thể có một chỉ mục phân cụm. Đây là chỉ mục duy nhất, được tạo tự động khi 
khóa chính được tạo ra. Nếu cần thực hiện nhiều sửa đổi dữ liệu trong bảng, thì các chỉ mục phân cụm được ưu tiên.

+ Chỉ mục không phân cụm (Non-Clustered Index). Các chỉ mục khác ngoài các chỉ mục chính (chỉ mục phân cụm) được gọi là chỉ mục không phân cụm. 
Chúng ta biết rằng các chỉ mục phân cụm được tạo tự động khi các khóa chính được tạo ra, và các chỉ mục không phân cụm 
được tạo ra khi nhiều điều kiện kết nối và các bộ lọc khác nhau được sử dụng trong truy vấn. 
Chỉ mục không phân cụm và dữ liệu bảng được lưu trữ ở những nơi khác nhau. 
Nó không thể thay đổi thứ tự vật lý của bảng và duy trì thứ tự logic của dữ liệu.
Chỉ mục không phân cụm cải thiện hiệu suất của các truy vấn sử dụng khóa mà không gán khóa chính.

## Các loại kết nối khác nhau trong SQL là gì?

+ INNER JOIN Kết nối nội bộ chỉ trả về những bản ghi từ các bảng phù hợp với điều kiện đã chỉ định và ẩn các hàng và cột khác. Nói một cách đơn giản, nó lấy các hàng khi có ít nhất một sự trùng khớp giữa các hàng của các bảng.
```sql
SELECT column_lists  
FROM table1    
INNER JOIN table2 ON join_condition1    
INNER JOIN table3 ON join_condition2    
...;    
```
+ SELF JOIN Kết nối tự thân được sử dụng để kết nối một bảng với chính nó. 
Kết nối này có thể được thực hiện bằng cách sử dụng bí danh bảng, cho phép chúng ta tránh việc lặp lại cùng một tên bảng trong một câu.
Kết nối tự thân là cần thiết khi chúng ta muốn kết hợp dữ liệu với dữ liệu khác trong cùng một bảng.
```sql
SELECT column_lists    
FROM table1 AS T1, table1 AS T2    
WHERE join_conditions;    
```
+ OUTER JOIN
    + LEFT OUTER JOIN Kết nối trái được sử dụng để lấy tất cả các hàng từ bảng bên trái và các bản ghi chung giữa các bảng đã chỉ định. 
    Nó trả về tất cả các hàng từ bảng bên trái ngay cả khi không có sự trùng khớp nào ở bảng bên phải. 
    + RIGHT OUTER JOIN Kết nối phải được sử dụng để lấy tất cả các hàng từ bảng bên phải và chỉ những hàng từ 
    bảng khác mà thỏa mãn điều kiện kết nối.
    ```sql
    SELECT column_lists    
    FROM table1     
    RIGHT JOIN table2    
    ON join_condition;  
    ```
    + FULL OUTER JOIN Kết nối đầy đủ là kết quả của sự kết hợp giữa kết nối trái và phải, chứa tất cả các bản ghi 
    từ cả hai bảng. Nó lấy các hàng khi có các hàng trùng khớp trong bất kỳ một trong các bảng. 
    Điều này có nghĩa là nó trả về tất cả các hàng từ bảng bên trái và tất cả các hàng từ bảng bên phải. 
    Nếu không tìm thấy sự trùng khớp, nó sẽ đặt giá trị NULL. Nó cũng được gọi là FULL OUTER JOIN.
    ```sql
    SELECT * FROM table1     
    FULL OUTER JOIN table2    
    ON join_condition;  
    ```
+ CROSS JOIN

## "TRIGGER" trong SQL là gì?

Trigger là một tập hợp các câu lệnh SQL nằm trong catalog hệ thống. 
Nó là một loại thủ tục lưu trữ đặc biệt được gọi tự động để phản ứng với một sự kiện. 
Nó cho phép chúng ta thực thi một lô mã khi một lệnh chèn, cập nhật hoặc xóa được thực hiện trên một bảng cụ thể vì 
trigger là tập hợp các hành động được kích hoạt mỗi khi các lệnh DML được đưa ra cho hệ thống.

Các trigger trong SQL có hai thành phần chính: một là hành động và một là sự kiện. Khi một số hành động nhất định được thực hiện, 
một sự kiện xảy ra như là kết quả của những hành động đó.

## Các toán tử tập hợp trong SQL là gì?

Chúng ta sử dụng các toán tử tập hợp để hợp nhất dữ liệu từ một hoặc nhiều bảng cùng loại. 
Mặc dù các toán tử tập hợp giống như các phép nối SQL, nhưng có một sự khác biệt đáng kể. 
Các phép nối SQL kết hợp các cột từ các bảng riêng biệt, trong khi các toán tử tập hợp SQL kết hợp các hàng từ các truy vấn khác nhau. 
Các truy vấn SQL chứa các phép toán tập hợp được gọi là truy vấn phức hợp. 
Các toán tử tập hợp trong SQL được phân loại thành bốn loại khác nhau:

+ UNION: Nó kết hợp hai hoặc nhiều kết quả từ nhiều truy vấn SELECT thành một tập kết quả duy nhất.
```sql
SELECT columns FROM table1    
UNION    
SELECT columns FROM table2;    
```
+ UNION ALL: Toán tử này tương tự như toán tử Union, 
nhưng nó không loại bỏ các hàng trùng lặp từ đầu ra của các câu lệnh SELECT.
```sql
SELECT columns FROM table1    
UNION ALL  
SELECT columns FROM table2;    
```

+ INTERSECT: Toán tử này trả về các bản ghi chung từ hai hoặc nhiều câu lệnh SELECT. 
Nó luôn lấy các bản ghi duy nhất và sắp xếp chúng theo thứ tự tăng dần theo mặc định. 
Tại đây, số lượng cột và kiểu dữ liệu phải giống nhau.
```sql
SELECT columns FROM table1    
INTERSECT  
SELECT columns FROM table2;    
``` 

+ MINUS: Toán tử này trả về các bản ghi từ truy vấn đầu tiên, mà không có trong truy vấn thứ hai. 
Nó không trả về các giá trị trùng lặp.
```sql
SELECT columns FROM table1    
MINUS  
SELECT columns FROM table2;    
```

## Sự khác biệt giữa các toán tử IN và BETWEEN là gì?

+ BETWEEN Toán tử này được sử dụng để chọn phạm vi dữ liệu giữa hai giá trị. 
Các giá trị có thể là số, văn bản và ngày tháng.

+ IN Đây là một toán tử logic để xác định xem một giá trị cụ thể có tồn tại trong một tập hợp các giá trị hay không. 
Toán tử này giúp giảm bớt việc sử dụng nhiều điều kiện OR trong truy vấn.

## Cách viết truy vấn SQL để tìm tên sinh viên bắt đầu bằng 'A'?

```sql
SELECT * FROM student WHERE stud_name like 'A%';  
```

## Viết truy vấn SQL để lấy mức lương cao thứ ba của một nhân viên từ bảng có tên là employees.

```sql
SELECT * FROM `employees` ORDER BY `salary` DESC LIMIT 1 OFFSET 2  
```

## Tính chất ACID trong cơ sở dữ liệu là gì?

Các tính chất ACID được thiết kế cho các giao dịch trải qua một nhóm nhiệm vụ khác nhau. 
Một giao dịch là một chuỗi logic duy nhất của dữ liệu. Nó cung cấp các tính chất để duy trì tính nhất quán trước và sau 
giao dịch trong một cơ sở dữ liệu. Nó cũng đảm bảo rằng các giao dịch dữ liệu được xử lý một cách đáng tin cậy trong hệ thống cơ sở dữ liệu.

Tính chất ACID là viết tắt của Tính nguyên tử (Atomicity), Tính nhất quán (Consistency), Tính cách ly (Isolation) và Tính bền vững (Durability).

+ Tính nguyên tử (Atomicity): Nó đảm bảo rằng tất cả các câu lệnh hoặc thao tác trong đơn vị giao dịch phải được thực hiện thành công. 
Nếu một phần của giao dịch thất bại, toàn bộ giao dịch sẽ thất bại và trạng thái của cơ sở dữ liệu sẽ không thay đổi. 
Các tính năng chính của nó là COMMIT, ROLLBACK và AUTO-COMMIT.

+ Tính nhất quán (Consistency): Tính chất này đảm bảo rằng dữ liệu phải đáp ứng tất cả các quy tắc xác thực. 
Nói một cách đơn giản, chúng ta có thể nói rằng cơ sở dữ liệu chỉ thay đổi trạng thái khi một giao dịch được cam kết thành công. 
Nó cũng bảo vệ dữ liệu khỏi sự cố.

+ Tính cách ly (Isolation): Tính chất này đảm bảo rằng tính chất thực thi đồng thời trong đơn vị giao dịch phải được thực hiện 
một cách độc lập. Nó cũng đảm bảo rằng các câu lệnh là trong suốt với nhau. 
Mục tiêu chính của việc cung cấp tính cách ly là kiểm soát tính đồng thời trong một cơ sở dữ liệu.

+ Tính bền vững (Durability): Tính chất này đảm bảo rằng một khi giao dịch đã được cam kết, nó sẽ tồn tại vĩnh viễn ngay cả khi 
hệ thống gặp sự cố, mất điện hoặc thất bại.

## Chúng ta sử dụng câu lệnh DISTINCT như thế nào? Nó có tác dụng gì?

Từ khóa DISTINCT được sử dụng để đảm bảo rằng giá trị được lấy luôn có giá trị duy nhất. 
Nó không cho phép có các giá trị trùng lặp. Từ khóa DISTINCT được sử dụng với câu lệnh SELECT và truy xuất 
các giá trị khác nhau từ cột của bảng.

```sql
SELECT DISTINCT column_lists FROM table_name WHERE [condition];  
```

## Thứ tự mặc định của dữ liệu khi sử dụng câu lệnh ORDER BY là gì? Nó có thể được thay đổi như thế nào?

Câu lệnh ORDER BY được sử dụng để sắp xếp dữ liệu trong bảng theo thứ tự tăng dần hoặc giảm dần. 
Mặc định, nó sẽ sắp xếp bảng theo thứ tự tăng dần. Nếu chúng ta muốn thay đổi hành vi mặc định của nó, chúng ta cần sử dụng 
từ khóa DESC sau tên cột trong câu lệnh ORDER BY.

```sql
SELECT expressions FROM tables    
WHERE conditions    
ORDER BY expression [ASC | DESC];    
```

## Sự khác biệt giữa các mệnh đề WHERE và HAVING là gì?

Sự khác biệt chính là mệnh đề WHERE được sử dụng để lọc các bản ghi trước khi bất kỳ nhóm nào được thiết lập, trong khi mệnh đề HAVING được sử dụng để lọc các giá trị từ một nhóm.

## Có bao nhiêu hàm tổng hợp trong SQL?

SQL cung cấp bảy (7) hàm tổng hợp, được liệt kê dưới đây:

+ AVG(): Hàm này được sử dụng để trả về giá trị trung bình từ các cột được chỉ định.
+ COUNT(): Hàm này được sử dụng để trả về số lượng hàng trong bảng, bao gồm cả các hàng có giá trị null.
+ MAX(): Hàm này được sử dụng để trả về giá trị lớn nhất trong nhóm.
+ MIN(): Hàm này được sử dụng để trả về giá trị nhỏ nhất trong nhóm.
+ SUM(): Hàm này được sử dụng để trả về tổng giá trị đã được cộng (không null) của cột được chỉ định.
+ FIRST(): Hàm này được sử dụng để trả về giá trị đầu tiên của một biểu thức.
+ LAST(): Hàm này được sử dụng để trả về giá trị cuối cùng của một biểu thức.

