"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
exports.Person = Person;
let person = new Person("xuan", 20);
person.display();
