# Alias

- Alias được sử dụng khi muốn đặt tên bí danh cho một loại kiểu dữ liệu bao gồm string, number, object, array
  - ví dụ:
    type Name = string;
    type Age = number
    const name: Name = "Thai Anh Duc";
    const age: Age = 21
    type Sv = {
    name: name,
    age: age
    }

# Interface

- Interface được sử dụng để tạo ra một hợp đồng(contract) giữa các phần khác nhau trong mã nguồn nói nôm na là tạo ra một đối tượng và sử dụng tính kế thừa để kế thừa đối tượng đó

- Interface giúp chia nhỏ các thông tin để giúp dễ dàng quản lí thông tin hơn
  Ví dụ:
  interface Address {
  street: string;
  town: string;
  city: string
  }
  interface Person {
  name: string;
  age: number;
  address?: Address
  }
