// Promise其实就是一个用来存储数据的对象
// 存取的特殊使得可以将异步调用的结果存储到Promise中
// Promise中的
// then,catch,finally都会返回一个新的Promise
// 其中会存储回调函数的返回值,但finally例外,不会存储到新的Promise里
const promise1 = new Promise((resolve, reject) => {
    resolve("I am resolve");
});
promise1.then(
    result => {
        console.log(result);//I am resolve
    },
    reason => {
        console.log(reason);
    }

);
