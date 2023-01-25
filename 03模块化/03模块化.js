const obj=require("./m3");
console.log(obj);//{name: '孙悟空', age: 18, gender: '男'}

const name=require("./m3").name;
console.log(name);//孙悟空

const {age}=require("./m3");
console.log(age);//18