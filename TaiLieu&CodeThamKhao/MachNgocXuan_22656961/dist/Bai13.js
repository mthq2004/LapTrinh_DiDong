"use strict";
class Shape {
}
class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
let square = new Square(4);
console.log("Diện tích hình vuông:", square.area());
let circle = new Circle(3);
console.log("Diện tích hình tròn:", circle.area());
