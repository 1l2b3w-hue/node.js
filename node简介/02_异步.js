/* 
    进程和线程 ：
        进程 ： 
            一个程序运行的环境
        线程 ：
            一个程序实际完成运算的东西

    同步 ：
        代码从上往下一行一行执行，上一行代码没有执行完或者不能执行时，后面的所有代码都不会执行
        同步代码的执行会出现阻塞的状况
        一行代码的执行慢时，会影响到整个代码的执行


    解决同步问题 ：
        Java、Python 可以采用多线程的方式解决
        node.js : 异步解决

    异步 ：
        当一行代码执行较慢时，会停止等待，转去执行别的代码,不会影响整个程序的执行
        异步问题 :
            异步的代码不能通过return返回执行结果
        特点 :
            不会阻塞其他代码的执行
            需要通过回调函数来返回数据
        基于回调函数实现的异步 ： 
            1.代码可读性很差
            2.可调试性差
            所有的问题都是通过回调函数返回结果实现异步带来
        
        所以Promise成功登场，使用Promise即可存放数据
        Promise 
            是一个用来存放数据的对象
            他的特殊的存储方法使得他可以存放异步调用的数据
*/
function sum(a,b,cd) {
    let begin = Date.now();

    setTimeout(function() { // 放入消息队列中,并不会影响后续代码的执行
        return cd(a + b);
    },1000);
    
    
    // while(Date.now() - begin < 10000) {
    // };
    // return  a + b;
}

console.log(11111);

// sum(123,456, (result) => {
//     console.log(result);
// });

sum(123,456,(result) => { 
    // 再次调用sum(回调地狱，死亡金字塔)
    sum(result,777,(result2) => {
        sum(result2,888,(result3) => {
            sum(result3,999,(result4) => {
                sum(result4,101010,(result5) =>{
                    console.log(result5);//123 + 456 + 777 + 888 + 999 + 101010
                });
            });
        }); 
    });
});

// console.log(result);

console.log(222222);


// console.log("哈哈");
// console.log("嘻嘻");
// let date = Date.now();
// while(Date.now() - date < 3000) {
//     //出现阻塞，必须等待该循环执行完毕才会执行下面的哈哈
// };
// console.log("哈哈");