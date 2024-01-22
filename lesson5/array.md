### Array

## Có 3 cách khai báo

- Khai báo mãng chưa mỗi chuỗi string hay số number, boolean
  let myArr1: string[] = ["hello","name"];
- Khai báo mà ko supply type datatype => typescript sẽ infer datatype
  ví dụ: let myArr2 = ["hello","name"];
- Mixed: sử dụng khi muốn tạo mãng mà bên trong nó chữa 2 hoặc nhiều kiểu dữ liệu khác nhau
  ví dụ 1: cung cấp datatype cho array
  let myMixArr: (string | number)[] = [1,"2"]
  ví dụ 2: ko supply datatype cho array
  let myMixArr2 = [1,"2"]

  \*\* Nếu trong mãng dữ liệu có nhiều kiểu thì khi khai báo biến ko cần phải khai báo kiểu dữ liệu
