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
// 21.  Use  fetch to get data from  a public  API (e.g., https://jsonplaceholder.typicode.com/todos/1).
function fetchTodo() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = yield res.json();
        console.log("21:", data);
    });
}
fetchTodo();
// 22.  Call  the API multiple  times  and log  the results.
function fetchMultipleTodos() {
    return __awaiter(this, void 0, void 0, function* () {
        const urls = [
            "https://jsonplaceholder.typicode.com/todos/1",
            "https://jsonplaceholder.typicode.com/todos/2",
            "https://jsonplaceholder.typicode.com/todos/3",
        ];
        const results = yield Promise.all(urls.map((u) => fetch(u).then((r) => r.json())));
        console.log("22:", results);
    });
}
fetchMultipleTodos();
// 23.  Write an async function  that fetches  a list  of todos and filters  out those that are not
// completed.
function fetchCompletedTodos() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch("https://jsonplaceholder.typicode.com/todos");
        const todos = yield res.json();
        const completed = todos.filter((t) => t.completed);
        console.log("23: Completed todos →", completed.slice(0, 5)); // in thử 5 cái
    });
}
fetchCompletedTodos();
// 24.  Write an async function  postData() that sends a POST request to a test API.
function postData() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: "foo", body: "bar", userId: 1 }),
        });
        const data = yield res.json();
        console.log("24: POST result →", data);
    });
}
postData();
// 25.  Create a function  downloadFile that simulates  downloading  a file  in 3 seconds and logs 
// when  done.
function downloadFile(filename) {
    return __awaiter(this, void 0, void 0, function* () {
        yield new Promise((r) => setTimeout(r, 3000));
        console.log("25: File downloaded →", filename);
    });
}
downloadFile("example.txt");
// 26.  Use async/await  with  setTimeout to simulate  a 5- second wait. 
function wait5s() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("26: Waiting 5 seconds...");
        yield new Promise((r) => setTimeout(r, 5000));
        console.log("26: Done waiting");
    });
}
wait5s();
// 27.  Write a function  fetchWithRetry(url, retries) that retries  up to  retries times  if 
// the API call  fails.
function fetchWithRetry(url, retries) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i <= retries; i++) {
            try {
                const res = yield fetch(url);
                if (!res.ok)
                    throw new Error("Bad status");
                return yield res.json();
            }
            catch (err) {
                console.log(`27: Attempt ${i + 1} failed`);
                if (i === retries)
                    throw err;
            }
        }
    });
}
fetchWithRetry("https://jsonplaceholder.typicode.com/todos/4", 3)
    .then((d) => console.log("27:", d))
    .catch((e) => console.log("27: Error →", e.message));
// 28.  Write an async function  batchProcess() that processes 5 async tasks at once (use 
// Promise.all).
function simulateTaskBatch(n, time) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => setTimeout(() => resolve(`Task ${n} done in ${time}ms`), time));
    });
}
function batchProcess() {
    return __awaiter(this, void 0, void 0, function* () {
        const tasks = Array.from({ length: 5 }).map((_, i) => simulateTaskBatch(i + 1, 1000));
        const results = yield Promise.all(tasks);
        console.log("28: Batch results →", results);
    });
}
batchProcess();
// 29.  Write an async function  queueProcess() that processes tasks sequenti ally  in  a queue.
function queueProcess() {
    return __awaiter(this, void 0, void 0, function* () {
        const tasks = [1000, 500, 2000];
        const results = [];
        for (let i = 0; i < tasks.length; i++) {
            const res = yield simulateTaskBatch(i + 1, tasks[i]);
            results.push(res);
        }
        console.log("29: Queue results →", results);
    });
}
queueProcess();
// 30.  Use async/await  + Promise.allSettled()  to handle  multiple  API calls  and display  their 
// success/failure  status.
// 30. Promise.allSettled() multiple API calls
function fetchAllSettled() {
    return __awaiter(this, void 0, void 0, function* () {
        const urls = [
            "https://jsonplaceholder.typicode.com/todos/5",
            "https://jsonplaceholder.typicode.com/invalid-url", // lỗi
        ];
        const settled = yield Promise.allSettled(urls.map((u) => fetch(u).then((r) => r.json())));
        console.log("30: AllSettled results →");
        settled.forEach((r, i) => console.log(`   #${i}:`, r.status === "fulfilled" ? r.value : "FAILED"));
    });
}
fetchAllSettled();
