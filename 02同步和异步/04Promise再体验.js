// 静态方法(类方法)

// Promise.resolve()创建一个立即完成的Promise
// Promise.reject()创建一个立即拒绝的Promise
// Promise.all([...])同时返回多个Promise的执行结果,有一个错就返回错误
// Promise.allSettled([...])同时返回多个Promise的执行结果,无论成与否都返回
// Promise.race([...])返回执行最快的Promise(不考虑对错)
// Promise.any([...])返回执行最快的未出错Promise(若都错误的话执行错误)


Promise.resolve(10);
// 等价于 new Promise((resolve,reject)=>{resolve(10);})
// Promise.reject(10);
// 等价于 new Promise((resolve,reject)=>{reject(10);})


function sum(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
            // reject('wrong');
        }, 1000);
    })
}
Promise.all([sum(123, 456), sum(1, 2), sum(10, 20)])
    .then((result) => {
        console.log(result);//[579, 3, 30]
    }).catch((err) => {
        console.log(err);
    });

Promise.allSettled([Promise.reject('reject'), sum(123, 456), sum(1, 2), sum(10, 20)])
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });

Promise.race([sum(123, 456), sum(1, 2), sum(10, 20)])
    .then((result) => {
        console.log(result);//579
    }).catch((err) => {
        console.log(err);
    });

Promise.any([Promise.reject('出错'),sum(123, 456), sum(1, 2), sum(10, 20)])
    .then((result) => {
        console.log(result);//579
    }).catch((err) => {
        console.log(err);
    });