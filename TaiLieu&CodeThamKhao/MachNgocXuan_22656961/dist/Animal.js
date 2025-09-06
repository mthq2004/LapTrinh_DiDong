"use strict";
class Dog {
    constructor(name) {
        this.name = name;
    }
    sound() {
        console.log(`${this.name} kêu: Gâu gâu!`);
    }
}
class Cat {
    constructor(name) {
        this.name = name;
    }
    sound() {
        console.log(`${this.name} kêu: Meo meo!`);
    }
}
let dog = new Dog("Chó");
let cat = new Cat("Mèo");
dog.sound();
cat.sound();
