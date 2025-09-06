export class Person {
    constructor(public name: string, public age: number) {}

    display(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

let person = new Person("xuan", 20);
person.display();
