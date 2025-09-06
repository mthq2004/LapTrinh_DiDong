//Promise co 3 trang thai: thanh cong, cho, that bai
const promise = new Promise<string>((resolve, reject)=>{//tra ve kieu string neu nhu thanh cong, resolve va reject la 2 gia tri callback
    setTimeout(()=>{//mo phong tranh bat dong bo la phai co thoi gian cho
        const success = true;
        if(success) resolve("Thanh cong sau 2 giay!");
        else reject("That bai!");
    },2000);//dieu chinh thoi gian cho toi khi no se chay
});

promise
.then(result=>console.log(result))
.catch(err=>console.error(err));


//Viet lai bang async/await
function createPromise(): Promise<string>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{//mo phong tranh bat dong bo la phai co thoi gian cho
            const success = true;
            if(success) resolve("Thanh cong sau 1 giay!");
            else reject("That bai!");
        },1000);//dieu chinh thoi gian cho toi khi no se chay
    })
}
async function run() {
    try {
        const result = await createPromise();
        console.log(result)
    } catch (err) {
        console.log(err)
    }
}
run();


function simulateIO<T>(value: T, delay: number):Promise<T>{
    return new Promise((resolve)=> setTimeout(()=> resolve(value), delay));
}
//Bien tien ich de log thoi gian
function now(lable: string){
    console.log(`[${lable}] @${new Date().toLocaleTimeString()}`)
}

//Chay song song voi Promise.all 
async function runParallel() {
    now("start parallel");
    const pA = await simulateIO("A",1000) //Bat dau ngay lap tuc
    const pB = await simulateIO("B",1000) //Bat dau ngay lap tuc
    const pC = await simulateIO("C",1000) //Bat dau ngay lap tuc
    now("end parallel");
    console.log("Parallel result: ", [pA, pB, pC]);

}
runParallel();


//Chay tuan tu voi async/await
async function runSequential() {
    now("start sequential");
    const a = await simulateIO("A",1000) //Doi 1s
    const b = await simulateIO("B",1000) //Doi them 1s(sau A)
    const c = await simulateIO("C",1000) //Doi them 1s(sau B)
    now("end sequential");
    console.log("Sequential result: ", [a, b, c]);
}
runSequential();


//Xu ly loi trong song song
async function runParallelWithErrors() {
    const good = simulateIO("OK", 1000);
    const bad = new Promise((_, reject)=> setTimeout(()=>{
        reject(new Error("Boom")), 800
    }))
    //C1: Fail-all voi Promise.all
    try {
        await Promise.all([good, bad]);
    } catch (e) {
        console.error("Promise.all failed: ", e)
    }

    //C2: Khong fail-all voi allSettled
    const settled = await Promise.allSettled([good, bad]);
    settled.forEach((r,i)=>{
        if(r.status === "fulfilled") console.log(`[#${i}] OK:`, r.value);
        else console.warn(`[#${i}] FAIL:`, r.reason)  
    })
}
runParallelWithErrors();


async function runWithPool<T>(
    items: T[],
    worker: (item: T) => Promise<any>,
    limit = 3
) {
    const result: any[] = [];
    const queue = [...items];

    const runners = Array.from({length : limit}).map(async () => {
        while(queue.length){
            const item = queue.shift()!;
            const res = await worker(item);
            result.push(res);
        }
    });

    await Promise.all(runners);
    return result;
}

//Vi du xu ly 10 task nhung chi toi da 3 task chay dong thoi
runWithPool(
    Array.from({length: 10}).map((_, i) => i + 1),
    (n) => simulateIO(`Task ${n}`, 500),3
).then(res => console.log("Pool result:", res));