//1
export class Person {
    constructor(public name: string, public age: number) {}
    display(): void {
        console.log(`1. Person: Name: ${this.name}, Age: ${this.age}`);
    }
}
let person = new Person("Quan", 20);
person.display();

//2
class Student extends Person{
  constructor(name: string, age: number, public grade: number) {
    super(name, age);
  }
  displayAllInfo(): void {
    console.log(`2. Student: Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }
}
let student = new Student("Quan", 20, 9);
student.displayAllInfo()

//3
class Car {
  constructor(public brand: string, public model: string, public year: number) {}
  showInfo(): void {
    console.log(`3. Car: ${this.brand} ${this.model}, Year: ${this.year}`);
  }
}
let car = new Car("Toyota", "Camry", 2023);
car.showInfo();

//4
class Rectangle {
  constructor(public width: number, public height: number) {}
  area(): number {
    return this.width * this.height;
  }
  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}
let rect = new Rectangle(10, 5);
console.log("4. Area:", rect.area(), "Perimeter:", rect.perimeter());

//5
class BankAccount {
  constructor(public balance: number) {}
  deposit(amount: number): void {
    this.balance += amount;
    console.log(`5. Deposited ${amount}, New Balance: ${this.balance}`);
  }
  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`5. Withdrew ${amount}, New Balance: ${this.balance}`);
    } else {
      console.log("5. Insufficient funds!");
    }
  }
}
let acc = new BankAccount(100);
acc.deposit(50);
acc.withdraw(120);

//6
class Book {
  constructor(public title: string, public author: string, public year: number) {}
  info(): void {
    console.log(`6. Book: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
  }
}
let book = new Book("TS Basics", "Quan", 2025);
book.info();

//7
class User {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  get name(): string {
    return this._name;
  }
  set name(newName: string) {
    this._name = newName;
  }
}
let user = new User("Quan");
console.log("7. User name:", user.name);
user.name = "Hai";
console.log("7. Updated name:", user.name);

//8
class Product {
  constructor(public name: string, public price: number) {}
}
let products: Product[] = [
  new Product("Pen", 50),
  new Product("Book", 120),
  new Product("Bag", 200)
];
let filtered = products.filter(p => p.price > 100);
console.log("8. Products > 100:", filtered);

//9
interface Animal {
  name: string;
  sound(): void;
}
class Dog implements Animal {
  name: string;
  constructor(name: string) { this.name = name; }
  sound(): void { console.log(`9. Sound of ${this.name}: Dog barks!`); }
}
let d = new Dog("Lucky");
d.sound();

//10
class Account {
  public owner: string;
  private balance: number;
  readonly id: number;
  constructor(owner: string, balance: number, id: number) {
    this.owner = owner;
    this.balance = balance;
    this.id = id;
  }
  showInfo(): void {
    console.log(`10. Account Owner: ${this.owner}, Balance: ${this.balance}, ID: ${this.id}`);
  }
}
let acc10 = new Account("Quan", 500, 101);
acc10.showInfo();

//11
class Animal11 {
  constructor(public name: string) {}
}
class Dog11 extends Animal11 {
  bark(): void { console.log(`11. ${this.name}: Dog barks!`); }
}
class Cat11 extends Animal11 {
  meow(): void { console.log(`11. ${this.name} Cat meows!`); }
}
let dog11 = new Dog11("Lucky");
dog11.bark();
let cat11 = new Cat11("Tom");
cat11.meow();

//12
interface Flyable{
  fly():void
}
interface Swimmable{
    swim():void
}
class Bird implements Flyable{
  fly(): void {
    console.log("12. Bird is flying");
  }
}
class Fish implements Swimmable{
  swim(): void {
    console.log("12. Fish is swimming");
  }
}
new Bird().fly();
new Fish().swim();

//13
abstract class Shape{
  abstract area(): number;
}
class Square extends Shape{
  constructor(public side: number){
    super();
  }
  area(): number {
      return this.side*this.side
  }
}
class Circle extends Shape{
  constructor(public radius: number){
    super();
  }
  area(): number {
      return Math.PI * this.radius * this.radius
  }
}
console.log("13. Square area:", new Square(5).area());
console.log("13. Circle area:", new Circle(3).area());

//14
class Employee {
  constructor(public name: string) {}
}
class Manager extends Employee {
  manage(): void { console.log(`14. Manager ${this.name} is managing`); }
}
class Developer extends Employee {
  code(): void { console.log(`14. Developer ${this.name} is coding`); }
}
new Manager("Alice").manage();
new Developer("Bob").code();

//15
class Library {
  books: Book[] = [];
  users: User[] = [];
  addBook(book: Book): void {
    this.books.push(book);
  }
}
let lib = new Library();
lib.addBook(new Book("TypeScript 101", "Quan", 2025));
console.log("15. Library books:", lib.books);

//16
class Box<T> {
  constructor(public value: T) {}
}
let box1 = new Box<number>(123);
let box2 = new Box<string>("Hello");
console.log("16. Box1:", box1.value, "Box2:", box2.value);

//17
class Logger {
  private static instance: Logger;
  private constructor() {}
  static getInstance(): Logger {
    if (!Logger.instance) Logger.instance = new Logger();
    return Logger.instance;
  }
  log(msg: string): void {
    console.log("17. Log:", msg);
  }
}
Logger.getInstance().log("Singleton works!");

//18
class MathUtil {
  static add(a: number, b: number): number { return a + b; }
  static subtract(a: number, b: number): number { return a - b; }
  static multiply(a: number, b: number): number { return a * b; }
  static divide(a: number, b: number): number { return a / b; }
}
console.log("18. Add:", MathUtil.add(2, 3));
console.log("18. Subtract:", MathUtil.subtract(2, 3));
console.log("18. Multiply:", MathUtil.multiply(2, 3));
console.log("18. Divide:", MathUtil.divide(2, 3));

//19
class Animal19 {
  makeSound(): void { console.log("19. Animal sound"); }
}
class Dog19 extends Animal19 {
  makeSound(): void { console.log("19. Dog barks"); }
}
class Cat19 extends Animal19 {
  makeSound(): void { console.log("19. Cat meows"); }
}
let animals19: Animal19[] = [new Dog19(), new Cat19()];
animals19.forEach(a => a.makeSound());

//20
interface Vehicle { drive(): void; }
class Car1 implements Vehicle {
  drive(): void { console.log("20. Car driving"); }
}
class Bike1 implements Vehicle {
  drive(): void { console.log("20. Bike riding"); }
}
new Car1().drive();
new Bike1().drive();

//21
class Repository<T> {
  private items: T[] = [];
  add(item: T): void { this.items.push(item); }
  getAll(): T[] { return this.items; }
}
let repo = new Repository<string>();
repo.add("Item1");
repo.add("Item2");
console.log("21. Repo:", repo.getAll());

//22
class Stack<T> {
  private items: T[] = [];
  push(item: T): void { this.items.push(item); }
  pop(): T | undefined { return this.items.pop(); }
  peek(): T | undefined { return this.items[this.items.length - 1]; }
  isEmpty(): boolean { return this.items.length === 0; }
}

let stack = new Stack<number>();
stack.push(10);
stack.push(20);
console.log("22. Peek:", stack.peek());
console.log("22. Pop:", stack.pop());

//23
interface Payment { pay(amount: number): void; }
class CashPayment implements Payment {
  pay(amount: number): void { console.log(`23. Paid ${amount} in cash`); }
}
class CardPayment implements Payment {
  pay(amount: number): void { console.log(`23. Paid ${amount} by card`); }
}
new CashPayment().pay(100);
new CardPayment().pay(200);

//24
abstract class Appliance {
  abstract turnOn(): void;
}
class Fan extends Appliance {
  turnOn(): void { console.log("24. Fan is on"); }
}
class AirConditioner extends Appliance {
  turnOn(): void { console.log("24. AC is on"); }
}
new Fan().turnOn();
new AirConditioner().turnOn();

//25
class Shape25 {
  static describe(): void { console.log("25. Shapes have area and perimeter"); }
}

Shape25.describe();

//26
class Order {
  products: Product[] = [];
  addProduct(p: Product): void { this.products.push(p); }
  total(): number { return this.products.reduce((sum, p) => sum + p.price, 0); }
}
let order = new Order();
order.addProduct(new Product("Pen", 50));
order.addProduct(new Product("Bag", 200));
console.log("26. Total:", order.total());

//27
class Teacher extends Person {
  constructor(name: string, age: number, public subject: string) {
    super(name, age);
  }
  introduce(): void {
    console.log(`27. I am ${this.name}, I teach ${this.subject}`);
  }
}
new Teacher("Quan", 30, "Math").introduce();

//28
class Animal2 {
  protected makeSound(): void { console.log("28. Animal sound"); }
}
class Dog2 extends Animal2 {
  makeSound(): void { console.log("28. Dog barks"); }
}
class Cat2 extends Animal2 {
  makeSound(): void { console.log("28. Cat meows"); }
}
new Dog2().makeSound();
new Cat2().makeSound();

//29
interface Movable { move(): void; }
class Car3 implements Movable {
  move(): void { console.log("29. Car moves on road"); }
}
class Robot implements Movable {
  move(): void { console.log("29. Robot walks"); }
}
new Car3().move();
new Robot().move();

//30
class School {
  students: Student[] = [];
  teachers: Teacher[] = [];
  addStudent(s: Student): void { this.students.push(s); }
  addTeacher(t: Teacher): void { this.teachers.push(t); }
  displayInfo(): void {
    console.log("30. Students:", this.students);
    console.log("30. Teachers:", this.teachers);
  }
}
let school = new School();
school.addStudent(new Student("Nam", 18, 10));
school.addTeacher(new Teacher("Lan", 40, "Physics"));
school.displayInfo();
