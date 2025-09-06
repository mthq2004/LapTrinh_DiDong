class Car {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    showInfo(): void {
        console.log(`Car Info: ${this.year} ${this.brand} ${this.model}`);
    }
}

let car = new Car("Toyota", "Corolla", 2020);
car.showInfo();
