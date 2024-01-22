# Class

- Dùng để khởi tạo một kiểu dữ liệu mới, mô phỏng một đối tượng hoặc loại đối tượng trong program

* Ví dụ:
  class Animal{
  name: string;
  constructor(name: string){
  this.name = name;
  }
  makeSound(): void{
  console.log("This is a generic sound");
  }
  }
  class Dog extends Animal {
  // vì đã kế thừa class Animal nên Dog sẽ có tất cả các thuộc tính, phương thức của Animal
}



