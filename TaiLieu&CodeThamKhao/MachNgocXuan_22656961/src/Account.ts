class Account {
    public username: string;
    private password: string;
    readonly id: number;

    constructor(username: string, password: string, id: number) {
        this.username = username;
        this.password = password;
        this.id = id;
    }

    checkPassword(pass: string): boolean {
        return this.password === pass;
    }
}

let account = new Account("xuan", "123456", 1);

console.log("Username:", account.username);
console.log("ID:", account.id);  

console.log("Mật khẩu đúng:", account.checkPassword("123456"));
console.log("Mật khẩu đúng:", account.checkPassword("999999"));
