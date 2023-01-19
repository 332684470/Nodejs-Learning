// 异步调用必须通过回调函数来返回数据
// 当我们进行一些复杂的调用时,可能会出现"回调地狱"

// Promise
// 可以解决异步中的回调函数的问题
// 实际上是一个存储数据的容器
// 它拥有一套特殊的存取数据的方式，使得其可以存储异步调用的结果

// 创建Promise
// 构造函数中需要一个函数作为参数
const promise=new Promise(()=>{});
console.log(promise);//[[PromiseResult]]: undefined
// Promise的构造函数的回调函数,会在创建Promise时调用
// 调用时会有两个参数传递进去

const promise1=new Promise((resolve,reject)=>{
    // resolve和reject是两个函数,通过这两个函数可以向Promise中存储数据
    // resolve在执行正常时存储数据,reject在错误时存储数据
    resolve("白金之星");
    // reject("咋瓦鲁多");//[[PromiseResult]]: '咋瓦鲁多'
    // Uncaught Error...... The promise rejected with the reason "咋瓦鲁多".
    // 通过函数向Promise添加数据的好处就是可以用力添加异步调用的数据
});
console.log(promise1);//[[PromiseResult]]: '白金之星'

const promise2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("咋瓦鲁多");
        reject("石之自由");
    }, 2000);
}) 

setTimeout(() => {
    console.log(promise2);//[[PromiseResult]]: '咋瓦鲁多'
}, 3000);

// 从Promise中获取数据
// Promise.prototype.then()
// then需要两个回调函数作为参数,回调函数用来获取Promise中的数据
// 通过resolve存储的数据,会调用第一个函数来返回
// 可以在第一个函数中编写代码处理数据
// 通过reject存储的数据或出现异常时,会调用第二个函数来返回
// 可以在第二个函数中编写处理异常的代码
promise2.then((result)=>{
    console.log("promise2中的数据:",result);//promise2中的数据: 咋瓦鲁多
},(reason)=>{
    console.log("promise2中的数据:",reason);//promise2中的数据: 石之自由
});

// Promise维护了两个隐藏属性
// 1.PromiseResult:用来存储数据
// 2.PromiseState:用来记录Promise状态,State只能修改一次,之后永不变化
//      3种状态:
//      fulfilled:完成 通过resolve存储数据时
//      rejected:拒绝  出错或通过reject存储数据时
//      pending:进行中

// 流程
// 当Promise创建时,PromiseState初始值为pending
// 通过resolve存储数据时-->fulfilled PromiseResult变为存储的数据
// 通过reject存储数据或出错时-->rejected PromiseResult变为存储的数据或异常对象
// 当我们通过then读取数据时,相当于为Promise设置了回调函数,
// 若PromiseState变为fulfilled,则调用then的第一个回调函数返回数据
// 若PromiseState变为rejected,则调用then的第二个回调函数返回数据


// catch()用法和then()类似,但只需要一个参数
// catch()中的回调函数只会在Promise被拒绝时才调用
// catch()相当于then(null,reason=>{})即一个专门处理Promise异常的方法
promise2.catch(reason=>{
    console.log("catch");
})

// finally()无论是正常还是其他,总会执行
// 但是finally()中不会接受到数据,通常用来编写成功与否关系不大的代码
promise2.finally(()=>{
    console.log("finally");//finally
})