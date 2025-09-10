/* 
    async : 快速创建一个异步函数（返回一个Promise的函数）
        通过async修饰的函数，将会自动变为异步函数，并将该函数的返回值封装到一个Promise中
    
    await ：
        当通过await去调用异步函数时，会暂停代码的执行，等到异步代码执行完毕后，有结果后返回结果
        await 只能在 async 声明的异步函数中 或者在es模块的顶级作用域中使用
        await 不会影响到异步函数外的代码，但会影响到异步函数中await代码的后面代码（但是后面的代码是必须需要这个结果的，所有对后续代码无影响）
        await 调用异步代码时，可以通过使用try - catch来处理错误
        当使用await 调用函数时，会将后续的代码在函数执行完毕后，放入微任务队列(一个await,就将后面代码放入一个then)    
*/
async function fn6() {
    await console.log(123);
};
fn6();
(async () => {
    await console.log(123);
})();

// function sum(a,b) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(a + b);
//         },2000);
//     });
// };

// 如果async声明的函数中，并没有使用到await时，会依次执行
// async function fn4() {
//     console.log(1);
//     console.log(2);
//     console.log(3);
//     console.log(4);
//     return 10;
// };
// fn4(); //fn4 与 fn5 是等价关系
// function fn5() {
//     return new Promise((resolve) => {
//         console.log(1);
//         console.log(2);
//         console.log(3);
//         console.log(4);
//         resolve(10);
//     })
// }
// fn5();
async function fn4() {
    console.log(1);
    // 当使用await 调用函数时，会将后续的代码在函数执行完毕后，放入微任务队列    
    await console.log(2);
    await console.log(3);
    console.log(4);
    return 10;
}//fn4与fn5等价
function fn5() {
   return new Promise((resovle) => {
        console.log(1);
        console.log(2);
        resovle(10);
   }).then(r => {
        console.log(3);
   }).then(r => {
        console.log(4);
   })
}
// fn4();
// fn5();
console.log(5);
// fn4();

// async function fn3() {
//     // 当通过await去调用异步函数时，会暂停代码的执行，等到异步代码执行完毕后，有结果后返回结构
//     // await 只能在 async 声明的异步函数中 或者在es模块的顶级作用域中使用
//     // await 不会影响到异步函数外的代码，但会影响到异步函数中await代码的后面代码（但是后面的代码是必须需要这个结果的，所有对后续代码无影响）
//     // await 调用异步代码时，可以通过使用try - catch来处理错误
//     try {//检查这个代码块是否出错，有执行catch
//         let result = await sum(123,456);
//         result = await sum(result,8);
//         result = await sum(result,9);
//         console.log(result);
//     }catch(error) {
//         console.log("出错了~");
//     }

//     //链式调用多了，也不好
//     // sum(123,456)
//     // .then(r => sum(r,8))
//     // .then(r => sum(r,9))
//     // .then(r => console.log(r));
// };
// fn3();

// console.log("会不会阻塞这个输出？")

// function fn() {
//     return Promise.resolve(10);
// };
// fn().then(r => console.log(r));

// async function fn2() { //此时fn2就是一个异步函数 fn2 与fn是等价的
//     return 20;
// };
// console.log(fn2());
// fn2().then(r => console.log(r));



// "use strict"
// setTimeout(()=>{
//     console.log("你好1");
//     },0);//只传不调，却调了。宏任务队列中
// console.log("你好");//同步
//因为代码是同步的，所有有个问题   -----阻塞
//由于阻塞问题，所以发明了异步
//怎么实现异步 -------------回调
//回调底层逻辑 ------只传不调，却调了，队列
//回调函数导致回调地狱  异常处理问题
//Promise 横空出世
//1存储数据   ==>(){}
//2拿数据  ==>(){}
//数据穿透
//async await 

// function sum(a,b,cb){
//     let c=a+b;// 闭包
//     setTimeout(()=>{
//         cb(c);
//     },0);
// }
// new Promise((resolve)=>{
//     resolve(1)
// }).catch((reason)=>{
//     console.log(reason);
// }).then((result)=>{
//     console.log(result);
// }).catch((reason)=>{
//     console.log(reason);
// }).then((result)=>{
//     console.log(result);
// }).catch((reason)=>{
//     console.log(reason);
// })

// try {
//     sum(1,2,(result)=>{
//         try{
//             sum(result,1,(result1)=>{
//                 try{
//                     sum(result1,1,(result2)=>{
//                         console.log(result2);
//                         throw new Error("错误了3");
//                     })    
                    
//                 }catch(error){
//                     console.log(error);
//                 }
//                 throw new Error("错误了2"); 
//             })
            
//         }catch(error){
//             console.log(error)
//         }
//         throw new Error("错误了1");  
//     })
      
// } catch (error) {
//     console.log(error);
// }


