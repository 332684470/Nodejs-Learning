// async和await
function fn(){
    return Promise.resolve(10);
}
fn().then(r=>{
    console.log(r);//10
})

// 通过async可以快速地创建异步函数
// 异步函数的返回值可以自动封装到一个Promise中返回
async function fn2() {
    return 100;
}
fn2().then((r)=>{
    console.log(r);//100
});
console.log(fn2());
// Promise {[[PromiseState]]: 'fulfilled', [[PromiseResult]]: 100, Symbol(async_id_symbol): 7, Symbol(trigger_async_id_symbol): 1}

// 在async中声明的异步函数中可以使用可以使用await关键字来调用异步函数
function sum(a,b){
    return new Promise(resolve=>{
            resolve(a+b);
    })
}
async function fn3(){
    let result=sum(0,0);
    console.log(result.then((r)=>{
        console.log(r);
    }));
    // 当我们通过await去调用异步函数时,他会暂停代码的运行
    // 直到异步代码执行有结果时,才会将结果返回
    // 注意 await只能用于async声明的异步函数中,或es模块的顶级作用域中
    // await阻塞的只是异步内部函数的代码,不会影响外部代码
    // 通过await调用的异步代码,需要通过try-catch来处理异常
    result=await sum(300,200);
    console.log(result);//500
    console.log("fn3里的代码");
    try {
        result=await sum(11,22);
        result=await sum(result,33);
        result=await sum(result,44);
        console.log(result);//110
    } catch (error) {
        console.log('出错了');
    }
}
fn3();
console.log("全局中的输出");
// 输出顺序"全局中的输出"-->500-->fn3里的代码-->110,即此await不会影响到异步函数外的代码

// 若async声明的函数中没有await,那么他里边的代码就会依次执行
async function fn4(){
    console.log(1);
    console.log(2);
    console.log(3);
}
fn4();
console.log(4);
// 1 2 3 4
async function fn5(){
    console.log(1);
    // 当我们使用await调用函数后,当前函数后面的所有代码
    // 会在当前函数执行完毕后放入微任务队列中
    await console.log(2);
    console.log(3);// 该代码在微任务队列中
}
fn5();
console.log(4);
// 1 2 4 3