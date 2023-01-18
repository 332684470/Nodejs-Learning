// 进程和线程
// 进程:是并发执行的程序在执行过程中分配和管理资源的基本单位
//      是一个动态概念，竞争计算机系统资源的基本单位
// 线程:是进程的一个执行单元，是进程内的可调度实体
//      比进程更小的独立运行的基本单位.线程也被称为轻量级进程

// 同步
// 通常情况下代码自上向下执行
// 若是某一行代码执行很慢,则其后的代码也会受到影响,出现阻塞
console.log("1");
console.log("2");
(function(a,b){
    const begin=Date.now();
    console.log("模拟一段很慢的代码");
    while(Date.now()-begin<3000){
    }
    console.log(a+b);
})(10,20)
console.log("3");
// 顺序 1->2->模拟一段很慢的代码->30->3

// 解决同步问题:
// Java Python等通过多线程去解决
// JavaScript通过异步解决
console.log("1");
console.log("2");
(function(a,b){
    setTimeout(() => {
        console.log(a+b);
    }, 3000);
})(10,20)
console.log("3");
// 顺序 1->2->3->30

// 但是异步也存在问题,即无法通过return设置返回值
function sum(a,b){
    setTimeout(() => {
        return a+b;
    }, 1000);
}
let result=sum(10,20);
console.log(result);//undefined

// 解决方法
function sumV2(a,b,cb){
    setTimeout(() => {
        cb(a+b);
    }, 1000);
}
sumV2(10,20,(result)=>{
    console.log(result);//30
});

// 异步:一段代码的执行不会影响其他代码执行
// 异步的问题:异步的代码无法通过return来设置返回值
// 异步的特点:
//  1.不会阻塞其他代码的执行
//  2.需要通过回调函数来返回结果

// 基于回调函数带来的问题
// 1.代码可读性差 2.可调试性差

// 如何解决--->Promise
// 一个用来存储数据的对象,其方式比较特殊
// 这种方式使得Promise可以用来存储异步调用的数据