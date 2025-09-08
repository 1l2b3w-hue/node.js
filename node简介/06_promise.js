/* 
    js 同一时间只能完成一件事（单线程），运行时基于事件循环机制（event loop）
        回顾 ：
            调用栈 ：（栈 ： 一种数据结构 ，后进先出 ）
                存放要执行的代码

            消息队列（任务队列） ： （队列： 一种数据结构，先进先出）
                存放将要执行的代码，当调用栈中的代码全部执行完毕后，队列中的代码才会依次进入栈中执行
                在JS中，消息队列分为两种
                    宏任务队列 ：大部分代码存放到宏任务队列中排列
                    微任务队列 ：Promise的then、catch、finally回调函数将会在微任务队列排列

        事件循环可以再详细点了 ：
            1. 开始执行调用栈中的代码
            2. 判断调用栈中代码是否执行完毕，执行完毕将开始从微任务队列取出代码执行
            3. 重复执行1、2代码直到微任务队列中没有代码，开始从宏任务队列中取出代码到调用栈开始执行
            4.重复1、2（宏里面涉及到微的话）、3 知道宏任务队列中没有代码

    Promise 执行原理
        Promise在执行时，then相当于为Promise绑定了一个事件（回调函数）
        当Promise的状态发生改变时（pending ——>fulfilled，rejected...），then的回调函数会被放入消息队列进行等待

    queueMicrotask() : 一个函数，直接向微任务队列添加一个任务
*/
// setTimeout(() => {
//     console.log(1234);
// });  //间隔一段时间后再放入消息队列

// queueMicrotask( () => {
//     console.log(111);
//     setTimeout(() => {
//         console.log(123);
//     });
    
// })
// Promise.resolve("哈哈").then(() => {
//     Promise.resolve().then(() => {
//         console.log(222);
//     })
// });


// queueMicrotask( () => {
//     console.log(111);
// })
// console.log(2); //直接放入调用栈

console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);
//整体没问题