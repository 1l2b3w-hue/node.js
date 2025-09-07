// function sum(a,b,cd) {
//     setTimeout(() => {
//         cd(a + b);
//     },1000);

//     // cd()
//     // console.log(cd(a,b));
//     // cd(a + b);
// }
// sum(123,456,(result) =>{
//     // console.log(111);
//     // return a + b ;
//     console.log(result);
// });
// console.log(111);

// function fn(a,b) {

//     return a + b; //大部分通过返回值来获取数据
// }
// const result = fn(123,456);
// console.log(result);

/* 
    异步必须通过回调函数来返回数据，当问题一旦复杂，回调函数一多就会导致调试很难
    Promise 
        帮助解决异步中的回调函数问题(特殊的存取数据方式来返回异步数据)

    创建 ：
        通过构造函数Promise创建一个promise实例，
        必须为构造函数传递一个函数作为参数    
        Promise构造函数的回调函数在创建一个promise实例时，会被调用，调用时将会有两个参数被传递进去 ： 一般写成：resolve reject;
        两个参数都是一个函数，通过这两个函数可以实现向Promise中存放数据。
        两个函数中 ： resolve将会在程序正常运行时向pormise中存放的数据，而reject将会在程序错误运行时pormise中存放数据

        为什么通过两个函数来向promise来存放数据时？ 因为通过函数进行赋值时，可以添加异步调用的数据

    读取 ：
        可以通过Promise的实例方法 ： then 来读取数据
        then还需要两个回调函数作为参数，通过回调函数的参数来读取数据
        两个回调函数第一个读取resolve存放的数据，这第一回调函数中可以写入处理正常运行数据的代码
        第二个回调函数则会读取reject存放的数据或出现异常的数据，在该回调函数中可以写入处异常运行数据的代码

    
    新点 ： throw new Error() : 自定义一个异常
*/
// let promise = new Promise((resolve , reject) => {
//     console.log("回调函数执行了");
    // setTimeout(() => {
    //     resolve("哈哈"); // 可以实现添加数据，之所以现在还不行，是因为需要两秒后再添加
    // },2000);
    // resolve("哈哈");
    // reject('嘻嘻');
//     throw new Error("异常出现");
// });
// console.log(promise);
// promise.then((result) => {
//     console.log("promise中的数据",result);
// },(reason) => {
//     console.log("数据",reason);
// } );
// setTimeout(() => {
//     console.log(promise);
// },3000);

/*
    异步问题的两大问题 ： 
        怎么去拿这个数据
        什么时间去拿这个数据（时机）
    Promise 维护了两个隐藏属性 ：
        PromiseResult
            用来存放数据
        PromiseState （描述Promise的三种状态）
            fulfilled : (完成) 通过resolve存放数据时
            rejected ：（拒绝，出错）通过reject存放数据时
            pending  ： （数据正在存储进行中）
            只能修改一次，后面无法再次修改（只会存放一次，存了就不能改了）

    流程 ：
        当使用Promise创建一个promise实例时，实例的PromiseState将会被设置为pending
            当通过resolve存放了一个数据时，PromiseState将会被更改为fulfilled
                PromiseResult将会存放相应数据
            当通过reject存放了一个数据或出错时，PromiseState将会被更改为rejected
                PromiseResult将会存放相应数据或出错对象
        
        调用实例方法then时，会根据PromiseState的状态来进行调用，当为fulfilled时，调用第一个回调函数返回存放的数据，为rejected时，调用第二个回调函数


*/
const promise2 = new Promise((resolve,reject) => {
        resolve("哈哈");
        // reject("嘻嘻");
});
// console.log(promise2);

// promise2.then(result => {  //相当于添加一个事件，也就是说会放入消息队列中，并不会直接放入调用栈
//     console.log(result);
// },reason => {
//     console.log(reason);
// });
// console.log(111);

/* 
    catch() : 与then用法一样，但只有一个回调函数做参数，这个回调函数会返回当promise被拒绝（使用reject或报错）时执行
        相当于then（null，reason => {}）；
        专门处理promise异常的方法
    
    finally() ：无论是正常存储数据还是出现异常，finally都会执行
        finally的回调函数中，不会接受存放在实例中的数据。
        用于编写一些无论是否成功都要执行的代码

*/

// promise2.catch(reason => {
//     console.log(reason);
//     console.log(1111);
// });
promise2.finally(() => {
    console.log(111);
});