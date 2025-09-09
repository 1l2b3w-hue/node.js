
const PROMISE_STATE =  {
    PENDING : 0,
    FULFILLED : 1,
    REJECTED : 2,
}

class MyPromise {
    #result;
    #state = PROMISE_STATE.PENDING;
    // 定义一个变量存放一个回调函数
    #callback;
    constructor( equator ) {
        equator(this.#resolve.bind(this) , this.#reject.bind(this));
        
    } 
    #resolve(result) {
       if(this.#state === PROMISE_STATE.PENDING){
            this.#result = result;
            this.#state = PROMISE_STATE.FULFILLED;
            //当resolve执行完后，表示数据已经存入，需要then的回调函数进行调用,问题来了，他并不知道then的回调函数啊
            queueMicrotask(() => {
                this.#callback && this.#callback(this.#result);
            })//解决同步报错
       };
    };
    #reject() {

    };
    then(onFulfilled,onRjected) { //then的方法是会放入微任务队列的
        if(this.#state === PROMISE_STATE.PENDING) {
            this.#callback = onFulfilled;
        }
        else if(this.#state === PROMISE_STATE.FULFILLED) {
             /* 
                目前then只能读取同步代码（以及存放进Promise的数据），并不能读取异步代码（即异步存放的数据）
             */
            queueMicrotask(() => { //直接放入微任务队列
                onFulfilled(this.#result);
            })
        }
    };

}

let mp = new MyPromise( (resolve , reject) => {
    setTimeout(() => {
        resolve('哈哈');
    },1000);
    // resolve('哈哈');
}); 
mp.then((result) => {
    console.log(result);
},reason =>{

});