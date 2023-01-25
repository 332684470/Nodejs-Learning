// 核心模块 是node自带的模块,可以直接使用
// global是node中的全局对象,作用类似于浏览器中的window
// ES标准下全局对象的标准名应该是globalThis(浏览器中的globalThis是window)
console.log(global);
console.log(globalThis);
console.log(globalThis===global);//true

// 核心模块
// 1.process 表示的是node当前进程 是一个全局对象
// 通过该对象可以获取进程信息,或对进程做各种操作
console.log(process);
// process.exit() 结束当前进程即终止node
console.log(1);
console.log(2);
process.exit();// 1 2
console.log(3);
// process.nextTick(callback[,...args]) 将函数插入到tick队列中
// tick队列中的代码会再下一次事件循环之前执行,即在微任务队列和宏任务队列前执行
setTimeout(() => {
    console.log(1);
}, 1000); 
queueMicrotask(()=>{
    console.log(2);
})
process.nextTick(()=>{
    console.log(3);
})
console.log(4);
// 4 3 2 1
