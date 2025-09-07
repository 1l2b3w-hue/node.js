/* 
    解决使用回调函数实现异步问题导致的回调地狱
*/

// let promise = new Promise((resolve, reject) =>{  //resolve 和 reject 两个参数都是Promise提供的。 我们定义了一个回调函数，然后引入Promise的resolve 和reject
//     // resolve('哈哈'); //存放正常运行的数据
//     reject("嘻嘻");//存放报错数据
//     // throw new Error("错误");//主动抛出错误
// });
// promise.then(result => {  // 取 ：实例方法：then ， 两个回调函数，第一个读取resolve的数据，第二个读取reject存放的数据
//     console.log(result);
// },reason => {
//     console.log(reason);
// });
// promise.catch(reason => { // 取 ： 实例方法 ： catch ， 一个回调函数，只会读取错误信息和reject存放的数据
//     console.log(reason); 
// })

// 之前回调实现异步两数求和
// function sum(a,b,cb) {
//     setTimeout(() => {
//         cb(a + b);
//     },1000)
// };
// sum(123,456,(result) => {
//     console.log(result);
// }) 

//使用Promise解决异步 ： 上来就返回一个promise实例，然后代码写到构造函数里面，存取都有方法
// function sum(a,b) {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             resolve(a+b);
//         },1000);
//     });
// };
// sum(123,456)
//     .then(result => {
//         return result + 7;
//     })
//     .then(result => result + 8)
//     .then(result => {console.log(result + 9)})

//回调地狱又来了！
// sum(123,456).then((result) => {
//     sum(result, 8).then(result => {
//         sum(result, 9).then(result => {
//             console.log(result);
//         })
//     })
// })
// let promise = sum(123,456);
// console.log(promise); 
// promise.then((result) => {
//     console.log(result);
// })

/* 
    then
    catch
    finally ： finally的返回值不会存放到返回的Promise中
        三个方法的返回值都是一个新的Promise
        相当于最后写了一个return new Promise() ,Promise中会存放回调函数的返回值

    当我们对promise进行链式调用时
        后面的then或catch都是读取上一步的执行结果（正常返回或异常信息）
        如果上一步的执行结果并没有返回当前想要的结果，则会跳过这一个then或catch

    当Promise出现异常时，并且整个链式调用都没有catch接受时，会抛出错误，只要有一个catch，都不会抛出错误
    整个链式调用中，一个catch只会接受前面的报错信息，后面的报错信息和这个catch自身的错误信息将会抛向后面的链式调用处理
    可以在链式最后加上一个catch接受错误
*/
let promise = new Promise((resolve,reject) => {
    // resolve("尘白禁区");
    reject("尘白禁区");
});
promise
    .then(r => {
        console.log('1',r); //也读不到正确信息，跳过
        return "哈哈";
    })
    .catch(r => {
       
        console.log('2',r); //因为上面的promise并没有异常信息，读不到任何东西，就会跳出这个catch不管他了，当作没有这个玩意执行下面的
        throw new Error(123);
        return r;
    })
    .then(r => {
        console.log('3',r);
    })
    .catch(r => console.log('4',r));


// then :
// let promise = new Promise((resolve, reject) => {
//     resolve("纸嫁衣");
// });
// //promise 的链式调用
// promise 
//     .then(result => {
//         console.log('1',result);
//         return result;
//     })
//     .then(result => {
//         console.log('2',result);
//         return result;
//     })
//     .then(result => {
//         console.log('3',result);
//         return result;
//     })


// let p = promise.then((result) => {
//     return result; //主要这个返回值会先放入消息队列，取很讲究，早了返回的promise可就是空的
// });
// const p2 = p.then(result => {
//     console.log(result);
//     return result;
// })
// p2.then(result => {
//     console.log(result);
// })

// setTimeout( ()=>{
//     console.log(p);
// },1000)

// console.log(promise.then() === promise); //都不会相等，就是一个完全新的promise
// console.log(promise.catch() ===  promise);
// console.log(promise.finally() ===  promise);
// promise.then((result) => {
//     console.log(result);
// })