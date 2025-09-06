"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        console.log(`Name is: ${this.name} and Your age: ${this.age}`);
    }
}
let person = new Person("Hai Quan", 20);
person.displayInfo();
class Student extends Person {
    constructor(name, age, id) {
        super(name, age);
        this.id = id;
    }
    displayAllInfo() {
        console.log(`Name: ${this.name}, ID of student: ${this.id}`);
    }
}
let student1 = new Student("Quan", 20, 1);
student1.displayAllInfo();
// type EventName = `On${string}`;
// //Template Literal Types
// let e1: EventName = "OnClick";
// let e2: EventName = "OnChange";
