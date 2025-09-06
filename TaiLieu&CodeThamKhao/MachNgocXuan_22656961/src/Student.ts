import { Person } from "./Person";

class Student extends Person {
  constructor(name: string, age: number, public grade: number) {
    super(name, age);
  }
  
  displayAllInfo(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }
}

let student = new Student("xuan", 20, 10);
student.display()