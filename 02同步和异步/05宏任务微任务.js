// JS单线程,他的运行基于事件循环机制event loop
setTimeout(() => {
    console.log(1);
}, 0);
Promise.resolve(1).then(()=>{
    console.log(2);
});
console.log(3);
// 3 2 1

// 栈是一种数据结构,后进先出
// 队列也是一种数据结构,先进先出
// JS中任务队列有两种
// 1.宏任务队列--大部分代码就去宏任务队列里排队
// 2.微任务队列--Promise中的回调函数(then,catch,finally)
// 流程:
// 执行调用栈中代码-->执行微任务中代码-->执行宏任务中代码

// queueMicrotask()也可以用来向微任务队列中添加一个任务
setTimeout(() => {
    console.log(33);//宏
}, 0);
queueMicrotask(()=>{
    console.log(11);//微
})
console.log(22);
// 22 11 33