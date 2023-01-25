// es模块化
// 向外部导出内容
export let a=10;
export const b='孙悟空';
export const c={name:'猪八戒'};
console.log('I am m4');

// 设置默认导出
export default function sum(a,b){
    return a+b;
};