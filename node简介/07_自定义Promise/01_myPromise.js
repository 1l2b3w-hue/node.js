/* 
    自定义一个类的思路 ：
        1. 先搞清楚类的功能，再动手
        2. 想一点，写一点

*/
class MyPromise {

    constructor(executor ) {  //构造函数，其参数（executor实参）就接受了下面的回调函数（形参）。
        
        executor(this.#resolve.bind(this) , this.#reject.bind(this));//就是再调用下面回调函数
    }
    // 属性名、方法名前加一个 # 表示私有，只能在类内部使用
    #result; 
    #state = "pending";

    #resolve(value) { // 这种写法会在原型对象中
        if(this.#state === "pending"){
            this.#result = value;
            this.#state = "fulfilled";
        };

        // this.#result = value;
        // console.log(this); //指空
        // console.log("value值为:", value); //这里只是被传进来了，并没有存进来

    }
    // #resolve = () => { //解决办法 ：1.用箭头函数 但是会存放实例中
    //     console.log(this);
    // }
    #reject() {

    }

    then(onFulfilled,onRjected) {
        if(this.#state === "fulfilled") {
            onFulfilled(this.#result);
        }
    }
    
}

const mypromise = new MyPromise((resolve,reject) => {
    // console.log(123);
    resolve("孙悟空");
    resolve("猪八戒");//应该不能重复修改 ，通过创建变量来记录Promise状态，实现只能修改一次
} );
console.log(mypromise);
mypromise.then((result) => {
    console.log(result);
});