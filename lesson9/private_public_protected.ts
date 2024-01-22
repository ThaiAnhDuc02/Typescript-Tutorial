class Person {
    private name: string;
    public age: number
  
    public constructor(name: string, age: number) {
      this.name = name;
      this.age = age
    }
  
    public getName(): string {
      return this.name;
    }
    public getAge(): number{
        return this.age
    }
    protected sound(): void{
        console.log("HELLO EVERYONE")
    }
  }
        
  const person2 = new Person("Jane", 21);
  console.log(person2.getAge())

  
  class Student extends Person {
      className: string
      constructor(name: string, age: number, className: string){
          super(name, age)
          this.className = className
      }
      sound(): void {
          console.log("HELLO EVERYONE1")
      }
  }
  const u = new Student("duc",21,"2n1") 


//   console.log(u.getName())
//   console.log(u.getAge())
//   console.log(u.sound())
  
interface Sharp{
    getArea():number
    getArea2: () => number
}

const circle0: Sharp =  {
    getArea(): number {
        return 0
    },
    getArea2() {
        return 1
    },
}

console.log(circle0.getArea())
console.log(circle0.getArea2())