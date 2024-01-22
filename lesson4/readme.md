# Sự khác biết của Object, {}, và object

## Object

- Không dùng để tạo ra một đối tượng mà nó dùng để đại diện một đối tượng, nó là một kiểu dữ liệu có thể chứa bất kì đối tượng nào
  ví dụ: let obj: Object ={}
  object = 2
  or object = 'hello'

## {} object literal

- Thường dùng để khai báo một đối tượng cụ thể có thuộc tính cụ thể
  ví dụ: let person: {name: string, age: number} = { name:"Thai Anh DUC", age: 21}
  explain: person là một đối tượng cụ thể, name, age là một thuộc tính cụ thể.

## object

- thường dùng để tạo ra một đối tượng tuy nhiên không định dạng được các kiểu dữ liệu cho thuộc tính như string, number, boolean v.v.
  ví dụ: let person: object = { name: "thai anh duc", age: 21}

### signatures index (ký chỉ mục)

const car:{[key:string]:string} = {}
car.color="red"
