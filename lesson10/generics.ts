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