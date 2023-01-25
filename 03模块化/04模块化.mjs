// 默认情况下 node中模块化的标准时CommonJS
// 想使用ES的模块化,可以采用以下两种方案
// 1.使用.mjs后缀名
// 2.直接修改package.json将模块化规范设置为ES模块
// 设置为"type":"module"后当前项目下所有的js文件都默认为es module
// console.log(module);
//module is not defined in ES module scope

// 导入m4模块 不能省略后缀名(官方)
// import {a as age,b,c} from'./m4.mjs';//I am m4
// console.log(age,b,c);//10 孙悟空 {name: '猪八戒'}

// import * as m4 from "./m4.mjs";
// console.log(m4,m4.a,m4.b,m4.c);//10 孙悟空 {name: '猪八戒'}
// // Module {a: <accessor>, b: <accessor>, c: <accessor>, Symbol(Symbol.toStringTag): 'Module'}
// 但要尽量避免import*

import hello from "./m4.mjs";
console.log(hello);
//ƒ sum(a,b){
//     return a+b;
// }

// 通过ES模块化,导入的内容都是常量
// ES模块化都是在严格模式下运行的
// ES模块化也可以在浏览器中使用,但是通常不会使用