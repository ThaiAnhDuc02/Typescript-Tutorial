# tuples là một dạng mãng được định kiểu với độ dài và kiểu dữ liệu được xác địn cho mỗi chỉ mục

Ví dụ: let Arr: [string, number, boolean] = ["hello", 1, true]

- Các element trong arr phải đúng với kiểu dữ liệu đã pre define trc đó vàđúng thứ tự đã đc define
- Ta có thể khai báo các element ở dạng optional. ( mục đính có thể có giá trị hay ko có cũng được và nó được khai báo ở thứ tự cuối cùng nếu sử dụng ?)
  Ví dụ: let Arr: [string, number, boolean?] = ["hello", 1, true]
- Ngoài ra còn có thể sử dụng undefined để thay thế (RCM)
  Ví dụ: let Arr2: [string | undefined , number, boolean | undefined] = ["hello", 1, true]
- Ngoài ra bạn có thể thêm phần tử vào trong mãng và phần tử đó sẽ ko được định nghĩa trc
  ví dụ:
  let Arr2: [string | undefined , number, boolean | undefined] = ["hello", 1, true]
  Arr2.push("hello2")
  console.log(Arr2)
- Chúng ta có thể sử dụng destructuring arr
  Ví dụ: const head= ["eye","lips"]
  const [eye, lips] = head
