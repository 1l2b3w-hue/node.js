/* 
    所有的CommonJS模块都会被包装到一个函数中
    (function(exports(暴露), require(引用), module(当前整个模块), __filename(当前模块路径), __dirname(当前模块所在文件夹的路径)) {
        // 模块代码会被放到这里
    });
*/

let a = 10;
let b = 20;
// 这些代码都会被放入上面的函数中

console.log(arguments); //argument是一个函数独有的对象,存放了函数的实参,成功打印出函数实参
console.log(__filename);
console.log(__dirname);