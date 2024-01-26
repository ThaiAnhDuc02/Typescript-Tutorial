interface List <T>{
    length: number;
    [index: number]: T
}


interface StudentG{
    name: string;
    age: number;
    sayHello(): void
}
const studentList: List<StudentG> = [{
    name: "Pop",
    age: 25,
    sayHello() {
        console.log("Hi! My name is Pop and I'm 25 years old")
    },
}]
console.log('StudentList: ',studentList.length)

//Generics function
function Sum <T extends number, U extends number > (a: T, b: U ): number  {
    return a + b
}
function SumString <T extends string, U extends string> (str1: T, str2: U) : string{
    return str1 + str2
}
const total = Sum(2,4)
console.log(total)
const concatenation = SumString ("Hello ", "World")
console.log(concatenation)

function TotalArr <T extends number>(numbers: T[]): T {
    let result: number = 0;
    for(let num of numbers){
        if(typeof num ==="number"){
            result += num ;
        }
        else{
            throw new Error("Invalid input types");
        }
    }
    return result as T;
}

let arrNumber = [1,2,3,4,5]
const totalNumberOfArray = TotalArr(arrNumber)
console.log("🚀 ~ totalNumberOfArray:", totalNumberOfArray)


//Generics Class
interface Animals<T>{
    name: T;
    category:number
}
class WaterAnimal implements Animals<string>{
    name: string
    category: number;
    constructor(name: string, category: number){
        this.name = name;
        this.category = category
    }
    swim(): void{
        console.log(`${this.name} is Swimming`)
    }
}
class LandAnimal implements Animals<string>{
    name: string
    category: number;
    constructor(name: string, category: number){
        this.name = name
        this.category = category
    }
    walk():  void {
        console.log (`${this.name} is Walking`);
    }
}

const fish = new WaterAnimal("Ca chep",1)
console.log(fish)

function Avg<T extends number>(arr: T[]): number{
   let avg: number = 0
   let sum: number = 0
    for( let num of arr){
        sum += num
    }
    return avg = sum / arr.length 
}
const avgDiem = Avg([1,2,3])
console.log ("Avg diem: ",avgDiem)

function swap<T>(a: T, b: T): [T, T]{
    return [b, a]
}
const arr = swap<number | string>("hello", 1)
console.log (arr)

// viết generic trả về phần tử đầu tiên của mãng
function firstItem <T>(arr:T[]): T{
    let firstItem: T = 0 as T
    if(arr.length > 0){
        firstItem = arr[0]
    }
    return firstItem
}
const listItem = firstItem([2,34,6,6])
console.log("🚀 ~ listItem:", listItem)


class ValueNamed <T>{
    private _value: T | undefined
    private _number: T | undefined
    constructor(private name: string , private category: string){}
    setValue(value : T): T | undefined {
        return this._value = value
    }
    setNumber(number : T) : T | undefined {
        return this._number = number
    }
    getValue(){
        return this._value
    }
    toString(): string{
        return `${this.name}: ${this._value}, ${this.category}: ${this._number} `
    }
}

const numbere = new ValueNamed("Audi", "Car")

numbere.setValue(10)
numbere.setNumber(1)
console.log(numbere)
console.log(numbere.toString())
    

// Partial<>
interface Person5{
    name: string;
    age: number;
    sex: string;
    learn(): string
}

const mana: Partial<Person5> = {
    name: "Dukies",
    age: 2,
    sex: "Female"
}
console.log("🚀 ~ mana:", mana)
const pickEx: Pick<Person5, 'name' | 'age'> = {
    name : "Duckies",
    age: 21
}
console.log("🚀 ~ pickEx:", pickEx)
