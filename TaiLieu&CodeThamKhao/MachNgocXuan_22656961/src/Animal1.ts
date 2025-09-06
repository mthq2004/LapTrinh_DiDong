class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}


class Dog1 extends Animal {
    bark(): void {
        console.log(`${this.name} sủa: Gâu gâu!`);
    }
}

class Cat1 extends Animal {
    meow(): void {
        console.log(`${this.name} kêu: Meo meo!`);
    }
}

let dog1 = new Dog1("Chó");
dog1.bark();

let cat1 = new Cat1("Mèo");
cat1.meow();