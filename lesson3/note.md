## Khai báo biến variable data types

### Khai báo biến const, let, var:

- const: không thế thay đổi giá trị của biên được khai báo, đối với obj or arr thì nó có thể thay đổi nội dung trong obj hay arr đó tuy nhiên ko thể gán hoặc thay một obj hay đối tượng khác
- let: có thể thay đổi giá trị của một biến hay obj hay arr, có thể thay đổi giá trị, nội dung của mãng hay phần tử trong mãng sau khi đã khởi tạo biến đó.
- var: var tương tự như let tuy nhiên khác về phạm vi hoạt động, var được sử dụng ở phạm vi toàn cục(global) trong khi đó let được khai báo ở phạm vi cục bộ ví dụ trong (for, if, trong các block)

### Data types với typescript:

- Primitive data types (kiểu dữ liệu nguyên thuỷ): string, number, boolean, null, undefined, symbol, bigint.
- References data types (kiểu dữ liệu tham chiếu): object, array, function

### Khai báo syntax

- Primitive: let variableName: type = value.
  Example: let count: number = 5;
- References: let variableName: type = value.

  #### Đối với Arr: 3 ways

  Example:

  - let lists: string[] = ['a','b','c'] || Khai báo cách 1
  - let lists: Array<number> = [1,2,3] || Khai báo cách 2
  - let lists: (number | string)[] = [1,'a','b',3] || Khai báo mãng có nhiều kiểu dữ liệu

  #### Đối với Object:

  Example: 2 ways
  //way 1:

  - let person: {name:string, age: number} = { name: "Thai Anh Duc", age: 21}
    //way 2:
    type Person = {
    name: string,
    age: number
    };

    let objPerson: Person = {
    name: "Thai Anh Duc",
    age: 21
    }

    - type là kiểu dữ liệu tự định nghĩa cho đối tượng

    * Ví dụ trên là về type: khai bảo mội đối tượng Person và có thuộc tính là name: string, age: number. Và khi khởi tạo thì chỉ cần gọi nó ra như một kiểu dữ liệu

    #### Đối với function:

    Example: 3 ways
    // Khai báo một hàm với kiểu dữ liệu đầu vào và kiểu dữ liệu trả về
    function sum(a: number, b: number): number {
    return a + b;
    }
    // Khai báo một hàm vô danh
    const sum = (a: number, b:number): number =>{
    return a + b;
    }
    // Khai báo kiểu dữ liệu hàm tự định nghĩa
    type SumFunction = (a: number, b: number) => number
    let mySum: SumFunction = (a , b) =>{
    return a + b;
    }
