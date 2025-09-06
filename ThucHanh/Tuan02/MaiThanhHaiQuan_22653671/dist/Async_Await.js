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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const Basic_with_Promise_1 = require("./Basic_with_Promise");
// 11.  Convert  Exercise  1 into  async/await.
function helloAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        yield new Promise((r) => setTimeout(r, 2000));
        return "Hello Async";
    });
}
helloAsync().then((res) => console.log("11:", res));
// 12.  Write an async function  that calls  simulateTask(2000) and logs  the result.
function runTask() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield (0, Basic_with_Promise_1.simulateTask)(2000);
        console.log("12:", res);
    });
}
runTask();
// 13.  Handle  errors using  try/catch with  async/await.
function errorExample() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield new Promise((_, reject) => setTimeout(() => reject(new Error("Something went wrong")), 1000));
        }
        catch (err) {
            console.log("13: Caught error →", err.message);
        }
    });
}
errorExample();
// 14. Write an async function  that takes a number,  waits  1 second, and returns  the number  × 3.
function tripleAfter1s(n) {
    return __awaiter(this, void 0, void 0, function* () {
        yield new Promise((r) => setTimeout(r, 1000));
        return n * 3;
    });
}
tripleAfter1s(4).then((res) => console.log("14:", res));
// 15.  Call  multiple  async functions  sequentially  using  await.
function sequentialCalls() {
    return __awaiter(this, void 0, void 0, function* () {
        const a = yield tripleAfter1s(2);
        const b = yield tripleAfter1s(a);
        const c = yield tripleAfter1s(b);
        console.log("15: Sequential result =", c);
    });
}
sequentialCalls();
// 16.  Call  multiple  async functions  in  parallel  using  Promise.all().
function parallelCalls() {
    return __awaiter(this, void 0, void 0, function* () {
        const results = yield Promise.all([
            tripleAfter1s(1),
            tripleAfter1s(2),
            tripleAfter1s(3),
        ]);
        console.log("16: Parallel results =", results);
    });
}
parallelCalls();
// 17.  Use  for await...of to iterate  over an array of Promises.
function iteratePromises() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, e_1, _b, _c;
        const arr = [tripleAfter1s(1), tripleAfter1s(2), tripleAfter1s(3)];
        console.log("17: for await...of results:");
        try {
            for (var _d = true, arr_1 = __asyncValues(arr), arr_1_1; arr_1_1 = yield arr_1.next(), _a = arr_1_1.done, !_a; _d = true) {
                _c = arr_1_1.value;
                _d = false;
                const val = _c;
                console.log("   →", val);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = arr_1.return)) yield _b.call(arr_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    });
}
iteratePromises();
function fetchUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield new Promise((r) => setTimeout(r, 1000));
        return { id, name: "User" + id };
    });
}
fetchUser(1).then((u) => console.log("18:", u));
// 19.  Create an async function  fetchUsers(ids: number[]) that calls  fetchUser for each ID.
function fetchUsers(ids) {
    return __awaiter(this, void 0, void 0, function* () {
        return Promise.all(ids.map((id) => fetchUser(id)));
    });
}
fetchUsers([1, 2, 3]).then((users) => console.log("19:", users));
// 20.  Add a timeout:  if  the API call  takes more than  2 seconds, throw  an error.
function fetchWithTimeout(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout after 2s")), 2000));
        return Promise.race([fetchUser(id), timeout]);
    });
}
fetchWithTimeout(5)
    .then((u) => console.log("20:", u))
    .catch((err) => console.log("20: Error →", err.message));
