class Book {
    title: string; 
    author: string; 
    year: number;

    constructor(title: string, author: string, year: number) {
        this.title = title; 
        this.author = author;  
        this.year = year; 
    }

    display(): void {
        console.log(`"${this.title}" - ${this.author} (${this.year})`);
    }
}
let book1 = new Book("Lập trình TypeScript", "Mach Ngoc Xuan", 2025);
book1.display();
