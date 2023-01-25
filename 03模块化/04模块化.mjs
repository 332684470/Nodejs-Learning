// 默认情况下 node中模块化的标准时CommonJS
// 想使用ES的模块化,可以采用以下两种方案
// 1.使用.mjs后缀名
// 2.直接修改package.json将模块化规范设置为ES模块
// 设置为"type":"module"后当前项目下所有的js文件都默认为es module
console.log(module);
//module is not defined in ES module scope