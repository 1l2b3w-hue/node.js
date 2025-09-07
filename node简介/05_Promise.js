/* 
    静态方法 ：
        Promise.resolve() : 创建一个立即完成的Promise
            相当于创建一个promise实例，并设置正常执行保存静态方法中传递的参数
        Promise.reejct() : 创建一个立即拒绝的Promise

        Promise.all() : 参数是一个迭代器（数组） 返回一个数组，里面存放了参数中各promsie的执行结果
            当迭代器中有一个promise是拒绝的（reject），则整体报错，一没全没

        Promise.allSettled() :  参数是一个迭代器（数组） 返回一个对象数组,同时返回多个Promise的结果（存放在对象），无论是否成功
            返回例子 ：{status: 'fulfilled', value: 579} {status: 'rejected', reason: '哈哈'}

        Promise.race() :  参数是一个迭代器（数组） 所有Promise一起执行，返回执行最快的Promise的数据, 谁快要谁，如果错误的Promise最快，直接报错

        Promise.any():  参数是一个迭代器（数组） 所有Promise一起执行, 返回执行最快的完成了的Promise数据，如果全部都是拒绝的，则报错


*/  
// let promise = Promise.resolve("嘻嘻");
// //let promise = new Promise((resolve, reject) => {
//     // resolve("嘻嘻")
//     // })
 
// promise.then(result => {
//     console.log(result);
// });

// Promise.reject("哈哈").catch(r => console.log(r)); //与Promise.resolve同理
function sum(a,b) {
    return new Promise((resolve,reject) => {
       setTimeout(() => {
            resolve(a + b);
       },1000); 
    }); 
};
sum(123,456).then((r) => {
    console.log(r);
});
// sum(123,456) sum(5,6) sum(7,8)
// let promise = Promise.all([sum(123,456), sum(5,6),Promise.reject("哈哈"),sum(7,8)]);
// promise.then(r => console.log(r));

// let promise = Promise.allSettled([sum(123,456), sum(5,6),Promise.reject("哈哈"),sum(7,8)]);
// promise.then(r => {
//     console.log(r);
// });

// let promise = Promise.race([sum(123,456), sum(5,6),sum(7,8),Promise.reject(1111)]);
// promise.then(r => {
//     console.log(r);
// },re => {
//     console.log("错误")
// });

// let promise = Promise.any([sum(123,456), sum(5,6),sum(7,8),Promise.reject(1111)]);
// promise.then(r => {
//     console.log(r);
// },re => {
//     console.log("错误")
// })


// setTimeout(() => {
//     console.log(11111);
// });
// Promise.resolve().then(() => {
//     console.log(2222);
// });

// console.log(2222);