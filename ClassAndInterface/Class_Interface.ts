//Class
class Person2 {
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    age: number;
    constructor( name:string,  age: number){
        this.name = name
        this.age = age
    }
    sayHello() : void{
        console.log(`Hello  my name is: ${this.name}! I"m ${this.age} years old`)
    }
}

const Admin = new Person2("Anh Đức", 21)
// Admin.sayHello()

//Interface
interface Person3{
    name: string;
    age: number;
    isAdult(): boolean
}


//-----------------------//

// Extend class
class Student4 extends Person2{
    school: string;
    constructor(name: string, age: number, school: string){
        super(name , age)
        this.school = school
    }
    study():void {
        console.log(`Hello I'm studying at: ${this.school}`)
    }
}
const NguyenDuc = new Student4("Nguyễn Đức",21,"DNTU")
NguyenDuc.study()


class Employee implements Person3{
    name: string;
    age: number;
    constructor( name: string, age: number){
        this.name = name,
        this.age = age
    }
    isAdult(): boolean {
        return this.age > 18
    }

    getName(): void{
        console.log("Hello:  ",this.name)
    }
}

const staff = new Employee("Duc",17)
// console.log("staff:  ",staff)
// staff.getName()

const Admin3: Person3 = {
    name:"Anh Đức",
    age: 25,
    isAdult(){ 
        return this.age > 18
    }
}
// console.log(Admin3)

interface Nam {
    name: string;
    age: number
}

const duc: Nam= {
    name:"duc",
    age:12
}
// console.log(duc)

class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log("Some generic sound");
    }
}

class Dog extends Animal {
    // Class Dog kế thừa từ class Animal
    bark(): void {
        console.log("Woof! Woof!");
    }
}

const Pug = new Dog("Pug")
Pug.bark()
Pug.makeSound()


