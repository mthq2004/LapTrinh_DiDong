"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
//1
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log(`1. Person: Name: ${this.name}, Age: ${this.age}`);
    }
}
exports.Person = Person;
let person = new Person("Quan", 20);
person.display();
//2
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    displayAllInfo() {
        console.log(`2. Student: Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}
let student = new Student("Quan", 20, 9);
student.displayAllInfo();
//3
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    showInfo() {
        console.log(`3. Car: ${this.brand} ${this.model}, Year: ${this.year}`);
    }
}
let car = new Car("Toyota", "Camry", 2023);
car.showInfo();
//4
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
let rect = new Rectangle(10, 5);
console.log("4. Area:", rect.area(), "Perimeter:", rect.perimeter());
//5
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`5. Deposited ${amount}, New Balance: ${this.balance}`);
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`5. Withdrew ${amount}, New Balance: ${this.balance}`);
        }
        else {
            console.log("5. Insufficient funds!");
        }
    }
}
let acc = new BankAccount(100);
acc.deposit(50);
acc.withdraw(120);
//6
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    info() {
        console.log(`6. Book: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
    }
}
let book = new Book("TS Basics", "Quan", 2025);
book.info();
//7
class User {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
}
let user = new User("Quan");
console.log("7. User name:", user.name);
user.name = "Hai";
console.log("7. Updated name:", user.name);
//8
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
let products = [
    new Product("Pen", 50),
    new Product("Book", 120),
    new Product("Bag", 200)
];
let filtered = products.filter(p => p.price > 100);
console.log("8. Products > 100:", filtered);
class Dog {
    constructor(name) { this.name = name; }
    sound() { console.log(`9. Sound of ${this.name}: Dog barks!`); }
}
let d = new Dog("Lucky");
d.sound();
//10
class Account {
    constructor(owner, balance, id) {
        this.owner = owner;
        this.balance = balance;
        this.id = id;
    }
    showInfo() {
        console.log(`10. Account Owner: ${this.owner}, Balance: ${this.balance}, ID: ${this.id}`);
    }
}
let acc10 = new Account("Quan", 500, 101);
acc10.showInfo();
//11
class Animal11 {
    constructor(name) {
        this.name = name;
    }
}
class Dog11 extends Animal11 {
    bark() { console.log(`11. ${this.name}: Dog barks!`); }
}
class Cat11 extends Animal11 {
    meow() { console.log(`11. ${this.name} Cat meows!`); }
}
let dog11 = new Dog11("Lucky");
dog11.bark();
let cat11 = new Cat11("Tom");
cat11.meow();
class Bird {
    fly() {
        console.log("12. Bird is flying");
    }
}
class Fish {
    swim() {
        console.log("12. Fish is swimming");
    }
}
new Bird().fly();
new Fish().swim();
//13
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
console.log("13. Square area:", new Square(5).area());
console.log("13. Circle area:", new Circle(3).area());
//14
class Employee {
    constructor(name) {
        this.name = name;
    }
}
class Manager extends Employee {
    manage() { console.log(`14. Manager ${this.name} is managing`); }
}
class Developer extends Employee {
    code() { console.log(`14. Developer ${this.name} is coding`); }
}
new Manager("Alice").manage();
new Developer("Bob").code();
//15
class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }
    addBook(book) {
        this.books.push(book);
    }
}
let lib = new Library();
lib.addBook(new Book("TypeScript 101", "Quan", 2025));
console.log("15. Library books:", lib.books);
//16
class Box {
    constructor(value) {
        this.value = value;
    }
}
let box1 = new Box(123);
let box2 = new Box("Hello");
console.log("16. Box1:", box1.value, "Box2:", box2.value);
//17
class Logger {
    constructor() { }
    static getInstance() {
        if (!Logger.instance)
            Logger.instance = new Logger();
        return Logger.instance;
    }
    log(msg) {
        console.log("17. Log:", msg);
    }
}
Logger.getInstance().log("Singleton works!");
//18
class MathUtil {
    static add(a, b) { return a + b; }
    static subtract(a, b) { return a - b; }
    static multiply(a, b) { return a * b; }
    static divide(a, b) { return a / b; }
}
console.log("18. Add:", MathUtil.add(2, 3));
console.log("18. Subtract:", MathUtil.subtract(2, 3));
console.log("18. Multiply:", MathUtil.multiply(2, 3));
console.log("18. Divide:", MathUtil.divide(2, 3));
//19
class Animal19 {
    makeSound() { console.log("19. Animal sound"); }
}
class Dog19 extends Animal19 {
    makeSound() { console.log("19. Dog barks"); }
}
class Cat19 extends Animal19 {
    makeSound() { console.log("19. Cat meows"); }
}
let animals19 = [new Dog19(), new Cat19()];
animals19.forEach(a => a.makeSound());
class Car1 {
    drive() { console.log("20. Car driving"); }
}
class Bike1 {
    drive() { console.log("20. Bike riding"); }
}
new Car1().drive();
new Bike1().drive();
//21
class Repository {
    constructor() {
        this.items = [];
    }
    add(item) { this.items.push(item); }
    getAll() { return this.items; }
}
let repo = new Repository();
repo.add("Item1");
repo.add("Item2");
console.log("21. Repo:", repo.getAll());
//22
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) { this.items.push(item); }
    pop() { return this.items.pop(); }
    peek() { return this.items[this.items.length - 1]; }
    isEmpty() { return this.items.length === 0; }
}
let stack = new Stack();
stack.push(10);
stack.push(20);
console.log("22. Peek:", stack.peek());
console.log("22. Pop:", stack.pop());
class CashPayment {
    pay(amount) { console.log(`23. Paid ${amount} in cash`); }
}
class CardPayment {
    pay(amount) { console.log(`23. Paid ${amount} by card`); }
}
new CashPayment().pay(100);
new CardPayment().pay(200);
//24
class Appliance {
}
class Fan extends Appliance {
    turnOn() { console.log("24. Fan is on"); }
}
class AirConditioner extends Appliance {
    turnOn() { console.log("24. AC is on"); }
}
new Fan().turnOn();
new AirConditioner().turnOn();
//25
class Shape25 {
    static describe() { console.log("25. Shapes have area and perimeter"); }
}
Shape25.describe();
//26
class Order {
    constructor() {
        this.products = [];
    }
    addProduct(p) { this.products.push(p); }
    total() { return this.products.reduce((sum, p) => sum + p.price, 0); }
}
let order = new Order();
order.addProduct(new Product("Pen", 50));
order.addProduct(new Product("Bag", 200));
console.log("26. Total:", order.total());
//27
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    introduce() {
        console.log(`27. I am ${this.name}, I teach ${this.subject}`);
    }
}
new Teacher("Quan", 30, "Math").introduce();
//28
class Animal2 {
    makeSound() { console.log("28. Animal sound"); }
}
class Dog2 extends Animal2 {
    makeSound() { console.log("28. Dog barks"); }
}
class Cat2 extends Animal2 {
    makeSound() { console.log("28. Cat meows"); }
}
new Dog2().makeSound();
new Cat2().makeSound();
class Car3 {
    move() { console.log("29. Car moves on road"); }
}
class Robot {
    move() { console.log("29. Robot walks"); }
}
new Car3().move();
new Robot().move();
//30
class School {
    constructor() {
        this.students = [];
        this.teachers = [];
    }
    addStudent(s) { this.students.push(s); }
    addTeacher(t) { this.teachers.push(t); }
    displayInfo() {
        console.log("30. Students:", this.students);
        console.log("30. Teachers:", this.teachers);
    }
}
let school = new School();
school.addStudent(new Student("Nam", 18, 10));
school.addTeacher(new Teacher("Lan", 40, "Physics"));
school.displayInfo();
