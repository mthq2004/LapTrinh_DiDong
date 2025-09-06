"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog1 extends Animal {
    bark() {
        console.log(`${this.name} sủa: Gâu gâu!`);
    }
}
class Cat1 extends Animal {
    meow() {
        console.log(`${this.name} kêu: Meo meo!`);
    }
}
let dog1 = new Dog1("Chó");
dog1.bark();
let cat1 = new Cat1("Mèo");
cat1.meow();
