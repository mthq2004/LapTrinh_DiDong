// 21.  Use  fetch to get data from  a public  API (e.g., https://jsonplaceholder.typicode.com/todos/1).
async function fetchTodo() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  console.log("21:", data);
}
fetchTodo();
// 22.  Call  the API multiple  times  and log  the results.
async function fetchMultipleTodos() {
  const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3",
  ];
  const results = await Promise.all(urls.map((u) => fetch(u).then((r) => r.json())));
  console.log("22:", results);
}
fetchMultipleTodos();
// 23.  Write an async function  that fetches  a list  of todos and filters  out those that are not
// completed.
async function fetchCompletedTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: { id: number; title: string; completed: boolean }[] = await res.json();
  const completed = todos.filter((t) => t.completed);
  console.log("23: Completed todos →", completed.slice(0, 5)); // in thử 5 cái
}
fetchCompletedTodos();
// 24.  Write an async function  postData() that sends a POST request to a test API.
async function postData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "foo", body: "bar", userId: 1 }),
  });
  const data = await res.json();
  console.log("24: POST result →", data);
}
postData();
// 25.  Create a function  downloadFile that simulates  downloading  a file  in 3 seconds and logs 
// when  done.
async function downloadFile(filename: string) {
  await new Promise((r) => setTimeout(r, 3000));
  console.log("25: File downloaded →", filename);
}
downloadFile("example.txt");
// 26.  Use async/await  with  setTimeout to simulate  a 5- second wait. 
async function wait5s() {
  console.log("26: Waiting 5 seconds...");
  await new Promise((r) => setTimeout(r, 5000));
  console.log("26: Done waiting");
}
wait5s();
// 27.  Write a function  fetchWithRetry(url, retries) that retries  up to  retries times  if 
// the API call  fails.
async function fetchWithRetry(url: string, retries: number): Promise<any> {
  for (let i = 0; i <= retries; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Bad status");
      return await res.json();
    } catch (err) {
      console.log(`27: Attempt ${i + 1} failed`);
      if (i === retries) throw err;
    }
  }
}
fetchWithRetry("https://jsonplaceholder.typicode.com/todos/4", 3)
  .then((d) => console.log("27:", d))
  .catch((e) => console.log("27: Error →", (e as Error).message));
// 28.  Write an async function  batchProcess() that processes 5 async tasks at once (use 
// Promise.all).
async function simulateTaskBatch(n: number, time: number): Promise<string> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(`Task ${n} done in ${time}ms`), time)
  );
}
async function batchProcess() {
  const tasks = Array.from({ length: 5 }).map((_, i) => simulateTaskBatch(i + 1, 1000));
  const results = await Promise.all(tasks);
  console.log("28: Batch results →", results);
}
batchProcess();
// 29.  Write an async function  queueProcess() that processes tasks sequenti ally  in  a queue.
async function queueProcess() {
  const tasks = [1000, 500, 2000];
  const results: string[] = [];
  for (let i = 0; i < tasks.length; i++) {
    const res = await simulateTaskBatch(i + 1, tasks[i]);
    results.push(res);
  }
  console.log("29: Queue results →", results);
}
queueProcess();
// 30.  Use async/await  + Promise.allSettled()  to handle  multiple  API calls  and display  their 
// success/failure  status.
// 30. Promise.allSettled() multiple API calls
async function fetchAllSettled() {
  const urls = [
    "https://jsonplaceholder.typicode.com/todos/5",
    "https://jsonplaceholder.typicode.com/invalid-url", // lỗi
  ];
  const settled = await Promise.allSettled(
    urls.map((u) => fetch(u).then((r) => r.json()))
  );
  console.log("30: AllSettled results →");
  settled.forEach((r, i) =>
    console.log(`   #${i}:`, r.status === "fulfilled" ? r.value : "FAILED")
  );
}
fetchAllSettled();