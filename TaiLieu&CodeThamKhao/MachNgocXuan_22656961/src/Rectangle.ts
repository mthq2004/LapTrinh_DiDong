class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }
    perimeter(): number {
        return 2 * (this.width + this.height);
    }
}

let rect = new Rectangle(5, 3);
console.log("Area:", rect.area());
console.log("Perimeter:", rect.perimeter());
