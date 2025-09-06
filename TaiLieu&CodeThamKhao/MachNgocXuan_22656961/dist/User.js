"use strict";
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
let user1 = new User("Mach Ngoc Xuan");
console.log("Tên ban đầu:", user1.name);
user1.name = "Xuan";
console.log("Tên sau khi đổi:", user1.name);
