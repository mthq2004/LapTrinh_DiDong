interface Animal {
    name: string;
    sound(): void;
}

class Dog implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sound(): void {
        console.log(`${this.name} kêu: Gâu gâu!`);
    }
}

class Cat implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sound(): void {
        console.log(`${this.name} kêu: Meo meo!`);
    }
}

let dog = new Dog("Chó");
let cat = new Cat("Mèo");

dog.sound();
cat.sound();
