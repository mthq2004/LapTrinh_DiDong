interface Flyable {
    fly(): void;
}

interface Swimmable {
    swim(): void;
}

class Bird implements Flyable {
    fly(): void {
        console.log("Chim bay trên trời");
    }
}

class Fish implements Swimmable {
    swim(): void {
        console.log("Cá bơi dưới nước");
    }
}

let bird = new Bird();
bird.fly();

let fish = new Fish();
fish.swim();
