const PROMISE_STATE = {
    PENDING : 0,
    FULFILLED : 1,
    REJECTED : 2,
};
class mypromise {
    #result;
    #state = PROMISE_STATE.PENDING; 
    #callbacks = [];
    constructor(equator) {
        equator(this.#resovle.bind(this), this.#reject.bind(this));
    }

    #resovle(result) {
        if(this.#state === PROMISE_STATE.PENDING) {
            this.#result =result;
            this.#state = PROMISE_STATE.FULFILLED;
            queueMicrotask(() => {
                // this.#callbacks && this.#callbacks(this.#result);
                this.#callbacks.forEach(cb => {
                    cb();
                })
            });
        };

    };
    then(onFulfilled,onRjected) {

        return new mypromise((resovle,reject) => {
            if(this.#state === PROMISE_STATE.PENDING) {
                this.#callbacks.push(() => {
                    resovle(onFulfilled(this.#result));
                })
            }
            else if(this.#state === PROMISE_STATE.FULFILLED){
                queueMicrotask(() => {
                    resovle(onFulfilled(this.#result));
                })
            };
        })

    };
    
    
    #reject() {

    };
    
};




let mp = new mypromise((resolve, reject) => {
        setTimeout(() => {
            resolve("哈哈");
        },1000);
});
let p = mp.then((result) => {
    console.log('1',result);
    return '孙悟空';
}).then(r => {
    console.log(r);
    return '猪八戒'
}).then(r => {
    console.log(r);
})

// mp.then((result) => {
//     console.log('1',result);
// });
// mp.then((result) => {
//     console.log('2',result);
// });
// mp.then((result) => {
//     console.log('3',result);
// });