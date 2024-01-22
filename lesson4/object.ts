var strictTypeHeaders: { [key: string]: string } = {}
strictTypeHeaders["color"] = "blue"
strictTypeHeaders["des"] = "Wood"
strictTypeHeaders["quant"] = "available"
console.log("Object:",strictTypeHeaders)

var header: object;
header = strictTypeHeaders


let Obj: Object = {}
Obj = 0
console.log("Obj:",Obj)

// object ko thể gán lại giá trị nó bằng một number hay string 
let obj: object ={}
obj = []

let person: object = { name: "thai anh duc", age: 21}

// explicit types
let product: {
    name: string,
    price: number
} = {
    name:"Audi", 
    price: 200
}

// implicit type
let product2= {
    name:"Audi",
    price:210
}

let data:string = '{"name": "John","age": 30,"city": "New York"}'

const json = JSON.parse(data)
console.log("json:", typeof json)

const car: { 
    name: string,
    color?: string 
} = {
    name:"Audi"
}
car.color = "red"
console.log(car)

// index signatures
const bike:{[index: string]:string | number} = {}
bike.color="red"
bike.brand="Yamaha"
bike.price=20
console.log(bike)
