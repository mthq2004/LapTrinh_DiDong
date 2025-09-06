"use strict";
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Nạp ${amount}. Số dư mới = ${this.balance}`);
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Rút ${amount}. Số dư mới = ${this.balance}`);
        }
        else {
            console.log("Không đủ tiền trong tài khoản!");
        }
    }
}
let acc = new BankAccount(1000);
acc.deposit(500);
acc.withdraw(200);
acc.withdraw(2000);
