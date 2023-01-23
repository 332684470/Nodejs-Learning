const PROMISE_STATE={
    PENDING:0,
    FULFILLED:1,
    REJECTED:2
}
class MyPromise{
    #result;
    #state=PROMISE_STATE.PENDING; //记录Promise状态 pending fulfilled rejected
    constructor(executor){
        executor(this.#resolve.bind(this),this.#reject.bind(this));
    }
    #resolve(value){
        if (this.#state===PROMISE_STATE.PENDING){
            this.#result=value;
            this.#state=PROMISE_STATE.FULFILLED;
        }
        else{return;}
        
    }
    #reject(reason){
        if (this.#state===PROMISE_STATE.PENDING){
            this.#result=reason;
            this.#state=PROMISE_STATE.REJECTED;
        }
        else{return;}
    }
    then(onFulfilled,onRejected){
        if (this.#state===PROMISE_STATE.FULFILLED){
            onFulfilled(this.#result);
        }
        else if (this.#state===PROMISE_STATE.REJECTED){
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