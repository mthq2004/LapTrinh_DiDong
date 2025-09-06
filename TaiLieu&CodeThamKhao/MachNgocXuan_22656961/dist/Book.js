"use strict";
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    display() {
        console.log(`"${this.title}" - ${this.author} (${this.year})`);
    }
}
let book1 = new Book("Lập trình TypeScript", "Mach Ngoc Xuan", 2025);
book1.display();
