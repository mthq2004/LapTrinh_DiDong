"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Promise co 3 trang thai: thanh cong, cho, that bai
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success)
            resolve("Thanh cong sau 2 giay!");
        else
            reject("That bai!");
    }, 2000); //dieu chinh thoi gian cho toi khi no se chay
});
promise
    .then(result => console.log(result))
    .catch(err => console.error(err));
//Viet lai bang async/await
function createPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success)
                resolve("Thanh cong sau 1 giay!");
            else
                reject("That bai!");
        }, 1000); //dieu chinh thoi gian cho toi khi no se chay
    });
}
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield createPromise();
            console.log(result);
        }
        catch (err) {
            console.log(err);
        }
    });
}
run();
function simulateIO(value, delay) {
    return new Promise((resolve) => setTimeout(() => resolve(value), delay));
}
//Bien tien ich de log thoi gian
function now(lable) {
    console.log(`[${lable}] @${new Date().toLocaleTimeString()}`);
}
//Chay song song voi Promise.all 
function runParallel() {
    return __awaiter(this, void 0, void 0, function* () {
        now("start parallel");
        const pA = yield simulateIO("A", 1000); //Bat dau ngay lap tuc
        const pB = yield simulateIO("B", 1000); //Bat dau ngay lap tuc
        const pC = yield simulateIO("C", 1000); //Bat dau ngay lap tuc
        now("end parallel");
        console.log("Parallel result: ", [pA, pB, pC]);
    });
}
runParallel();
//Chay tuan tu voi async/await
function runSequential() {
    return __awaiter(this, void 0, void 0, function* () {
        now("start sequential");
        const a = yield simulateIO("A", 1000); //Doi 1s
        const b = yield simulateIO("B", 1000); //Doi them 1s(sau A)
        const c = yield simulateIO("C", 1000); //Doi them 1s(sau B)
        now("end sequential");
        console.log("Sequential result: ", [a, b, c]);
    });
}
runSequential();
//Xu ly loi trong song song
function runParallelWithErrors() {
    return __awaiter(this, void 0, void 0, function* () {
        const good = simulateIO("OK", 1000);
        const bad = new Promise((_, reject) => setTimeout(() => {
            reject(new Error("Boom")), 800;
        }));
        //C1: Fail-all voi Promise.all
        try {
            yield Promise.all([good, bad]);
        }
        catch (e) {
            console.error("Promise.all failed: ", e);
        }
        //C2: Khong fail-all voi allSettled
        const settled = yield Promise.allSettled([good, bad]);
        settled.forEach((r, i) => {
            if (r.status === "fulfilled")
                console.log(`[#${i}] OK:`, r.value);
            else
                console.warn(`[#${i}] FAIL:`, r.reason);
        });
    });
}
runParallelWithErrors();
function runWithPool(items_1, worker_1) {
    return __awaiter(this, arguments, void 0, function* (items, worker, limit = 3) {
        const result = [];
        const queue = [...items];
        const runners = Array.from({ length: limit }).map(() => __awaiter(this, void 0, void 0, function* () {
            while (queue.length) {
                const item = queue.shift();
                const res = yield worker(item);
                result.push(res);
            }
        }));
        yield Promise.all(runners);
        return result;
    });
}
//Vi du xu ly 10 task nhung chi toi da 3 task chay dong thoi
runWithPool(Array.from({ length: 10 }).map((_, i) => i + 1), (n) => simulateIO(`Task ${n}`, 500), 3).then(res => console.log("Pool result:", res));
