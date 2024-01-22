import { InstanceofExpression } from "typescript";

// Syntax Obj
type User1 = {
    name: string,
    age: number
}
let user: User1 = {
    name: 'Tom',
    age: 25
}
let course: {name: string, price: number} = {
    name: "Typescript",
    price:600
}

// Syntax Arr
let ArrNumber: number[] = [2, 3];
let ArrNumber2: Array<number> = [3, 5];
let MixArr: (string | number)[] = ['1', 2];
// Example
let category: Array<string> = ["Thai", "Anh"]
category.push("Duc")
console.log(category)

//Syntax Function
function avg(a: number, b:number):number{
    return (a + b)/2
}

const avg2 = (a: number, b: number):number =>{
    return (a +b )/2
}

type Avg = (a: number, b: number) => number
const avg3: Avg = (a, b) => {
    return (a+b)/2
}
console.log(avg3(2,3))

//định nghĩa type cho hàm
type sum = ( a: number, b: number) => number
let total: sum = (a,b)=>{
    return a + b;
}
function pass(a: number, b:number):number {
    return a - b;
}

console.log("total: ",total(2,3))

// Định nghĩa type cho object
    // định nghĩa type với User
type User= {
    name:string,
    position:string
}

let admin: User = {
    name: "Thái Anh Đức",
    position:"Admin"
}
    // khai báo biến và ràng buộc dữ liệu
let partTime: { name: string, position: string } = {
    name: "Thai Anh Duc",
    position:"Staff"
}


