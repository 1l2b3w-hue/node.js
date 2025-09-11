/* 
    在定义模块时，模块中的内容是默认不能使外部看到的
        可以通过使用exports来设置要向外暴露的内容

    访问exports的方式有两种
        exports
        module.exports 
        都会返回一个对象，两种写法都是等价的
            当在其他模块中通过require进行引入当前模块时，require返回的对象就是当前模块的exports对象
            因此可以将需要暴露的内容设置为exports的属性
*/

let a = 10;
let b = 20;

// 通过exports一一列举出要导出的内容
// exports.a = 10;
// exports.b = {name : '孙悟空', age : 18};
// exports.c = function fn() {
//     console.log(1111);
// }

// 可以直接通过module.exports来同时导出多个值
// module.exports = {
//     a : "嘻嘻",
//     b : [1,2,3,4],
//     c : () => {
//         console.log("哈哈")
//     }
// }
// exports 赋对象时，是给变量赋值，改变了原本的exports的指向
// exports = {
//     a : "嘻嘻",
//     b : [1,2,3,4],
//     c : () => {
//         console.log("哈哈")
//     }
// }
// console.log("m1模块!");
console.log(exports);
// console.log(module.exports);