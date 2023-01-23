class MyPromise{
    #result;
    #state="pending"; //记录Promise状态 pending fulfilled rejected
    constructor(executor){
        executor(this.#resolve.bind(this),this.#reject.bind(this));
    }
    #resolve(value){
        if (this.#state==="pending"){
            this.#result=value;
            this.#state="fulfilled";
        }
        else{return;}
        
    }
    #reject(reason){
        if (this.#state==="pending"){
            this.#result=reason;
            this.#state="rejected";
        }
        else{return;}
    }
    // 箭头函数可以解决一部分this指向的问题,
    // 但这种方式不会添加到原型里,而是存在对象自身里
    // #resolve=(value)=>{
    //     this.#result=value;
    // }
    // #reject=(reason)=>{
    //     this.#result=reason;
    // }
    then(onFulfilled,onRejected){
        if (this.#state==="fulfilled"){
            onFulfilled(this.#result);
        }
        else if (this.#state==="rejected"){
            onRejected(this.#result);
        }
    }
}

let mp1=new MyPromise((resolve,reject)=>{
    resolve('白金之星');
});

console.log(mp1);

mp1.then((result)=>{
    console.log(result);//白金之星
})

// 这种方式未实现异步