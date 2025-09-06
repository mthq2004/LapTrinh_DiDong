class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

let products: Product[] = [
    new Product("Bút", 50),
    new Product("Điện thoại", 500),
    new Product("Sách", 120),
    new Product("Kẹo", 20)
];

let expensiveProducts = products.filter(p => p.price > 100);

console.log("Sản phẩm có giá > 100:");
expensiveProducts.forEach(p => console.log(`${p.name} - ${p.price}`));
