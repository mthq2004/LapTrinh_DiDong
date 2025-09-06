import { simulateTask } from "./Basic_with_Promise";

// 11.  Convert  Exercise  1 into  async/await.
async function helloAsync(): Promise<string> {
  await new Promise((r) => setTimeout(r, 2000));
  return "Hello Async";
}
helloAsync().then((res) => console.log("11:", res));
// 12.  Write an async function  that calls  simulateTask(2000) and logs  the result.
async function runTask() {
  const res = await simulateTask(2000);
  console.log("12:", res);
}
runTask();
// 13.  Handle  errors using  try/catch with  async/await.
async function errorExample() {
  try {
    await new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Something went wrong")), 1000)
    );
  } catch (err) {
    console.log("13: Caught error →", (err as Error).message);
  }
}
errorExample();
// 14. Write an async function  that takes a number,  waits  1 second, and returns  the number  × 3.
async function tripleAfter1s(n: number): Promise<number> {
  await new Promise((r) => setTimeout(r, 1000));
  return n * 3;
}
tripleAfter1s(4).then((res) => console.log("14:", res));
// 15.  Call  multiple  async functions  sequentially  using  await.
async function sequentialCalls() {
  const a = await tripleAfter1s(2);
  const b = await tripleAfter1s(a);
  const c = await tripleAfter1s(b);
  console.log("15: Sequential result =", c);
}
sequentialCalls();
// 16.  Call  multiple  async functions  in  parallel  using  Promise.all().
async function parallelCalls() {
  const results = await Promise.all([
    tripleAfter1s(1),
    tripleAfter1s(2),
    tripleAfter1s(3),
  ]);
  console.log("16: Parallel results =", results);
}
parallelCalls();
// 17.  Use  for await...of to iterate  over an array of Promises.
async function iteratePromises() {
  const arr = [tripleAfter1s(1), tripleAfter1s(2), tripleAfter1s(3)];
  console.log("17: for await...of results:");
  for await (const val of arr) {
    console.log("   →", val);
  }
}
iteratePromises();
// 18. Write an async  function  fetchUser(id) that simulates  an API call  (resolves  a user  object after 1 second).
interface User {
  id: number;
  name: string;
}
async function fetchUser(id: number): Promise<User> {
  await new Promise((r) => setTimeout(r, 1000));
  return { id, name: "User" + id };
}
fetchUser(1).then((u) => console.log("18:", u));
// 19.  Create an async function  fetchUsers(ids: number[]) that calls  fetchUser for each ID.
async function fetchUsers(ids: number[]): Promise<User[]> {
  return Promise.all(ids.map((id) => fetchUser(id)));
}
fetchUsers([1, 2, 3]).then((users) => console.log("19:", users));
// 20.  Add a timeout:  if  the API call  takes more than  2 seconds, throw  an error.
async function fetchWithTimeout(id: number): Promise<User> {
  const timeout = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error("Timeout after 2s")), 2000)
  );
  return Promise.race([fetchUser(id), timeout]);
}
fetchWithTimeout(5)
  .then((u) => console.log("20:", u))
  .catch((err) => console.log("20: Error →", (err as Error).message));