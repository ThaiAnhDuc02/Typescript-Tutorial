// có thể khai báo tuple như sau:
let Arr: [string, number, boolean?] = ["hello", 1, true]
//or
let Arr2: [string | undefined , number, boolean | undefined] = ["hello", 1, true]
Arr2.push("hello2")
console.log(Arr2)

let graph: [a: number, b: number] = [33,22]
const [x, y] = graph;
console.log(x,y)
const product1: [
    name: string,
    type: number, 
    color:string, 
    brand: string] = [ 
        "BWM i10",
        1,
        "Red", 
        "BWM"
    ]
// a -> name, b-> type of a = product[0],b = product[1]
const [a , b] = product1

const alo = {
    name2:"Alo",
    point: 10,
    color: "red"
}

