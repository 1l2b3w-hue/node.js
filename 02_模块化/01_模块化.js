/* 
    代码的数量增多，写在同一文件时，会加大维护难度
    模块化 ： 将不同功能写在不同文件中，然后全部引入

    早期网页中，没有模块化的规范，往往通过script标签来引入多个js文件。
        引入的js代码完成的功能并不是按需引用，存在大量不需要的功能
        在复杂情况下，非常容易出错

    CommonJS 是 node.js 默认支持的模块化规范 （早期官方并未给出规范，直到15年才出现,前面就是民间自创）
        CommonJS 中一个js文件就是一个模块

    CommonJS规范 ：
        引入模块 ：
            通过require("模块路径") 函数来引入模块
            引入自定义模块时
                使用相对路径 
                扩展名可以省略不写 ：在CommonJS中，如果省略js文件的扩展名，node会自动补全
                                    如果找不到js，则会查找json，如果两者重名，找js （js json node）
            
            引入核心模块 ：
                直接写核心模块的名字 或者 node：名字（速度快）

        cjs 、默认js、默认json都属于CommonJs规范

            引入文件夹中的所有模块 : 
                引入文件夹中的入口文件 : index.js(已经将其他模块放入在一起)
                但单独引入文件夹时,会默认查找index.js文件
*/
// const m1 = require("./01_m1");
// const m2 = require("./01_m1");
// console.log(m1); //没有通过exports设置暴露内容时，为空对象
// // m1.c();
// console.log(m2);

// 引入核心模块
// const path = require('path');
// const path1 = require('node:path');

// console.log(path);
// console.log(path1);

// const m1 = require("./01_m1.cjs");
// console.log(m1);

// 引入文件夹模块
const m1 = require("./hello");
