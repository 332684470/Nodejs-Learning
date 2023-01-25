// 早期的网页中,没有一个实质的模块规范
// 实现模块化的方式,是最原始的通过script标签来引入多个js文件
// 无法做到选择性引入部分内容,且易出错

// CommonJS
// CommonJS中一个js文件就是一个模块
// CommonJS规范:
// 引入模块:使用require()函数引入
require("./m1");//I am m1
let m1=require('./m1');;
console.log(m1);//{a: '孙悟空', b: '猪八戒', c: '唐僧'}
console.log(m1.c);//唐僧
m1.d()//I am a function
// 模块内的内容默认不能被外部看到,可通过exports来设置要向外界暴露的内容
console.log(exports);//{}
console.log(module.exports);//{}
console.log(exports===module.exports);//true
// 当我们在其他模块中引入当前模块时,require返回的就是exports
// 可以将希望暴露的内容设置为exports的属性
