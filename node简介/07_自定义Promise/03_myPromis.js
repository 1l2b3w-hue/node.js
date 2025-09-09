const PROMISE_STATE ={
    PENDING : 0,
    FULFILLED :1,
    REJECTED : 2,   
}

class myPromise {

    #result;
    #state = PROMISE_STATE.PENDING;
    //回调函数可能有多个，使用数组存放回调函数
    #callbacks = [];

    constructor(equator) {
        equator(this.#resolve.bind(this), this.#reject.bind(this));
    };
    #resolve(result) {
        if(this.#state === PROMISE_STATE.PENDING) {
            this.#result = result;
            this.#state = PROMISE_STATE.FULFILLED; 
            queueMicrotask( () => {
                //调用callbacks的所有箭头函数
                this.#callbacks.forEach( cb => {
                    cb();
                })
                // for(let i of this.#callbacks) {
                //     i && i(this.#result);
                // }
            })
        }
    
    };
    #reject() {

    };
    then(onFulfilled ,onRjected) {
        //谁是新的Promise的数据 ： then的回调函数的返回值将会成为新的Promise存放的数据
        return new myPromise((resolve,reject) => {
            if(this.#state === PROMISE_STATE.PENDING) {
                // this.#callbacks.push(onFulfilled);
                this.#callbacks.push(() =>{
                    resolve(onFulfilled(this.#result));
                })
            }
            else if(this.#state === PROMISE_STATE.FULFILLED) {
                queueMicrotask(() => {
                    resolve(onFulfilled(this.#result));
                });
            }
        })
    }
};

let mp = new myPromise((resolve,reject) => {
    setTimeout(() => {
        resolve('哈哈');
    },1000);
});
//异步情况下无法连续读取，callback被重新赋值
let pro = mp.then((result) => {
    console.log('1', result);
    return "孙悟空";
}).then(r => {
    console.log('2',r);
    return '猪八戒';
}).then(r => {
    console.log('3',r);       
});

// 无法链式调用 （then没有返回一个Promise）





// mp.then((result) => {
//     console.log('2',result);
// });
// mp.then((result) => {
//     console.log('3',result);
// });

// let p = Promise.resolve(1);
// p.then( (r) => console.log("第一次读",r));
// p.then( (r) => console.log("第二次读",r));
// p.then( (r) => console.log("第三次读",r));