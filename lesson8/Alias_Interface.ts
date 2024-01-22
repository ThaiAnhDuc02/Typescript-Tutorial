// Alias
    // Alias use to custom name of variable with types, 
    // use for string number, obj, arr
//Example
type Tuoi = number;
type Ten = string;
type Favorites = string[];

type DoiTuong = {
    name: Ten,
    age: Tuoi,
    favorites:  Favorites,
}
const sinhVien: DoiTuong = {
    name: "Nguyen Van A",
    age: 10,
    favorites:["an uong", "di choi"]
}
console.log(sinhVien)



//Interface
    // Interface use similar to type alias, except it only use for object
//Example
interface SanPham { 
    name: string;
    price: number;
}
const Quan: SanPham = {
    name: "quần tây",
    price: 50000
}

//example 2:
interface Circle {
    width: number,
    height: number,
    border_radius: number
}
const circle: Circle ={
    width: 20,
    height: 20,
    border_radius: 10
}

//extend interface other
interface Circle_shadow extends Circle {
    box_shadow: string
}


const circleShadow: Circle_shadow = {
    height: 20,
    width:20,
    border_radius: 10,
    box_shadow:"rgba(0,0,0,0.8)"
}

console.log("circleshadow:", circleShadow)


/// ví dụ thêm về interface
interface Address {
    street: string;
    town: string;
    city: string
}
interface Person {
    name: string;
    age: number;
    address?: Address;
    isAdult(): boolean
}



const customer: Person = {
    name: "John Doe",
    age: 21,
    address:{
        street: "pm",
        town: "Hà Nội",
        city:"HCM"
    },
    isAdult(){
        return this.age >= 18
    }
}
console.log("customer: ", customer.isAdult());
