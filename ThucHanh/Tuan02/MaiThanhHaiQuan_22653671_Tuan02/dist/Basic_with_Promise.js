"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulateTask = simulateTask;
// 1.  Create a Promise  that returns  the string  "Hello Async" after 2 seconds.
const p1 = new Promise((resolve) => setTimeout(() => resolve("Hello Async"), 2000));
p1.then((res) => console.log("1:", res));
// 2.  Write a function  that returns  a Promise  resolving  with  the number  10 after  1 second.
function getTen() {
    return new Promise((resolve) => setTimeout(() => resolve(10), 1000));
}
getTen().then((res) => console.log("2:", res));
// 3.  Write a function  that rejects a Promise  with  the error  "Something went wrong" after  1 
// second.
function getError() {
    return new Promise((_, reject) => setTimeout(() => reject("Something went wrong"), 1000));
}
getError().catch((err) => console.log("3:", err));
// 4.  Use  .then() and  .catch() to handle  a Promise  that returns  a random  number.
const randomP = new Promise((resolve) => setTimeout(() => resolve(Math.random()), 500));
randomP
    .then((n) => console.log("4: Random =", n))
    .catch((err) => console.log("4:", err));
// 5.  Create a function  simulateTask(time) that returns  a Promise  resolving  with  "Task 
// done" after  time ms.
function simulateTask(time) {
    return new Promise((resolve) => setTimeout(() => resolve("Task done"), time));
}
simulateTask(500).then((res) => console.log("5:", res));
// 6.  Use  Promise.all() to run  3 simulated  Promises  in paralle l  and print  the result.
Promise.all([simulateTask(500), simulateTask(1000), simulateTask(1500)]).then((res) => console.log("6:", res));
// 7.  Use  Promise.race() to return  whichever  Promise  resolves  first.
Promise.race([simulateTask(500), simulateTask(1000)]).then((r) => console.log("7:", r));
// 8.  Create a Promise  chain:  square the number  2, then double  it, then add 5.
Promise.resolve(2)
    .then((n) => n * n) // 4
    .then((n) => n * 2) // 8
    .then((n) => n + 5) // 13
    .then((result) => console.log("8:", result));
// 9.  Write a Promise  that reads an array after 1 second and filters  even numbers.
const nums = [1, 2, 3, 4, 5, 6];
new Promise((resolve) => setTimeout(() => resolve(nums.filter((n) => n % 2 === 0)), 1000)).then((res) => console.log("9:", res));
// 10.  Use  .finally() to l og  "Done" when  a Promise  finishes  (success or failure).
simulateTask(500)
    .then((res) => console.log("10:", res))
    .catch(console.error)
    .finally(() => console.log("10: Done"));
