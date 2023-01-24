const PROMISE_STATE = {
    PENDING: 0,
    FULFILLED: 1,
    REJECTED: 2
}
// then的回调函数应该放入微任务队列中执行,而不是直接调用
class MyPromise {
    #result;
    #state = PROMISE_STATE.PENDING;//记录Promise状态 pending fulfilled rejected
    #callbacks = [];//存储回调函数,由于回调函数可能有多个,所以我们用数组来存储
    constructor(executor) {
        executor(this.#resolve.bind(this), this.#reject.bind(this));
    }
    #resolve(value) {
        if (this.#state === PROMISE_STATE.PENDING) {
            this.#result = value;
            this.#state = PROMISE_STATE.FULFILLED;
            queueMicrotask(() => {
                // 调用callbacks中的所有函数
                this.#callbacks.forEach(cb => {
                    cb();
                })
            })
        }
        else { return; }

    }
    #reject(reason) {
        if (this.#state === PROMISE_STATE.PENDING) {
            this.#result = reason;
            this.#state = PROMISE_STATE.REJECTED;
            queueMicrotask(() => {
                this.#callbacks && this.#callbacks(this.#result);
            })
        }
        else { return; }
    }
    then(onFulfilled, onRejected) { 
        return new MyPromise((resolve,reject)=>{
            if (this.#state === PROMISE_STATE.PENDING) {
                queueMicrotask(() => {
                    this.#callbacks.push(() => {
                        onFulfilled(this.#result);
                    });
                })
            }
            else if (this.#state === PROMISE_STATE.FULFILLED) {
                onFulfilled(this.#result);
            }
            else if (this.#state === PROMISE_STATE.REJECTED) {
                onRejected(this.#result);
            }
        });

    }
}

let mp1 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('白金之星');
    }, 1000);

});

console.log(mp1);

mp1.then((result) => {
    console.log(result);//白金之星
})
    .then((result) => {
        console.log(result);//白金之星
    })


