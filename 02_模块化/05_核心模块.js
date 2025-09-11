/* 
    核心模块，是node中自带的模块，可以在node中直接使用

    window 和 global 两个对象并不是规范的对象，前者是浏览器命名的，后者是node命名的
    ES标准下，全局对象的命是globalThis(浏览器中是window，node里面就是global) 
*/
// console.log(window); //window 是浏览器提供的对象
// console.log(global); //global 是node的全局对象，作用类似于window
// console.log(globalThis);

/* 
    核心模块 ：
        process 
            代表什么 ：表示当前node的进程
            有什么用 ： 通过该对象获取进程的信息，对进行实现各种操作
            如何使用 ： 
                process是一个全局对象，直接使用
                有哪些属性和方法
                    process.exit() : 结束当前进程，即终止后面的所有node代码
                                方法里面可以存放一个数字，充当状态码，用来确定为什么结束
                    process.nextTick(callback[,...args]) :
                            将函数插入tick队列 （调用栈 tick队列 微任务队列 宏任务队列）
                            tick队列中的代码会在微任务队列和宏任务队列之前执行（官方 ：在下一次事件执行前执行）
*/
// console.log(process);
// console.log(1111);
// process.exit(0);
// console.log(2222);
// console.log(3333);
setTimeout(() => {
    console.log(1);
},0);
queueMicrotask(() =>{
    console.log(2);
} );
process.nextTick(() => {
    console.log(3)
});
console.log(4);