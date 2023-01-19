// Promise其实就是一个用来存储数据的对象
// 存取的特殊使得可以将异步调用的结果存储到Promise中
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


// Promise中的
// then,catch,finally都会返回一个新的Promise
// 其中会存储回调函数的返回值,但finally例外,不会存储到新的Promise里
// 对Promise进行链式调用时,后边的方法(then和catch)
// 读取的是上一步方法的执行结果,若上一步方法的结果并非想要的结果,这一步方法就会跳过不执行
function sum(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b);
            // reject('wrong');
        }, 1000);
    })
}
sum(10,20)
    .then(result=>result+30)
    .then(result=>result+40)
    .then(result=>{
        console.log(result);//100
        return 100000;
    })
    .catch(reason=>{
        console.log(reason);
        return '看我是什么';
    })
    .then(result=>{
        console.log(result)
    })
    .catch(reason=>{
        console.log("出错了");
    })
