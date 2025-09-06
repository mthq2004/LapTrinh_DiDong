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

let user1 = new User("Mach Ngoc Xuan");
console.log("Tên ban đầu:", user1.name);

user1.name = "Xuan";
console.log("Tên sau khi đổi:", user1.name);
