"use strict";
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    showInfo() {
        console.log(`Car Info: ${this.year} ${this.brand} ${this.model}`);
    }
}
let car = new Car("Toyota", "Corolla", 2020);
car.showInfo();
