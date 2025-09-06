"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    perimeter() {
        return 2 * (this.width + this.height);
    }
}
let rect = new Rectangle(5, 3);
console.log("Area:", rect.area());
console.log("Perimeter:", rect.perimeter());
