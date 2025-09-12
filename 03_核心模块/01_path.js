/* 
    path :
        表示路径
        通过path来获取各种路径
        要使用path时，应该先引用

        方法 ：
            path.resolve() : 使用路径时，尽量使用该方法来获取路径
                返回一个绝对路径

                直接调用时，会返回当前的工作目录
                    根据执行的方式不同，返回的绝对路径也有可能不同
                    C:\Users\Administrator\Desktop\node  (调试控制台)
                    C:\Users\Administrator\Desktop\node\03_包管理器 （终端）
                如果传递一个相对路径作为参数时，将会自动计算出绝对路径 （还是存在工作目录的不同导致不同执行方式结果不同）
                    C:\Users\Administrator\Desktop\node\hello.js
                    C:\Users\Administrator\Desktop\node\03_包管理器\hello.js
                采用两个参数 ： 一个是绝对路径 一个是相对路径，再让resolve自动计算得出路径
                    C:\Users\Administrator\Desktop\node\03_包管理器\hello.js
    
    fs (File System)
        帮助node操作磁盘中的文件，文件操作就是I/O操作
        需要先引用
        方法 ：
            fs.readFileSync() : 同步读取文件的方法，会阻塞后续代码的执行, 不推荐
        当通过fs中的方法来读取磁盘中的数据时，数据将会以Buffer对象的形式返回
        Buffer是一个临时用来存放数据的缓冲区
            fs.readFile() : 异步读取数据 ,两个参数 ：一个路径，一个回调函数（回调函数的参数用于存放错误信息和数据）
*/
// const path = require("node:path");
// // console.log(path);
// // let result = path.resolve('C:\\Users\\Administrator\\Desktop\\node\\03_包管理器',"./hello.js"); //硬编码
// let result = path.resolve(__dirname , './hello.js');  //路径不会固定，调用返回相同值

// Promise 下的读取数据
// const fs = require("node:fs/promises");//一定要加/promises
// let b = fs.readFile(path.resolve(__dirname,'hello.text'));//promise对象
// b.then(buffer => {
//     console.log(buffer.toString());
// })
// .catch (e => {
//     console.log("出错了")
// })
// const fs = require("node:fs/promises");
// (async() => {
//     try {
//         let c = await fs.readFile(path.resolve(__dirname,'hello.text'));//一个buffer对象
//         console.log(c.toString());
//     }catch(Error) {
//         console.log("出错了")
//     }
// })();



// console.log(result);
// const fs = require("node:fs");
// // const a = fs.readFileSync( path.resolve(__dirname , './hello.text'));
// const a = fs.readFile( path.resolve(__dirname , './hello.text'),
//     (err,buffer) => { //err : 读错误信息 ，buffer：一个buffer对象，存放数据
//         // console.log(err);
//         // console.log(buffer);
//         if(err) {
//             console.log("出错了");
//         }
//         else {
//             console.log(buffer.toString());
//         }
// });
// console.log(6789);


// console.log(a);
// console.log(a.toString());


let path = require("node:path");//引入path模块

//单纯的fs 来读取数据
// let fs = require("node:fs");//引入fs模块
//readFileSync同步读取文件内容
// let result  = fs.readFileSync(path.resolve(__dirname , "./hello.text")); 
// console.log(result.toString());

//readFile 异步读取文件 ： 注意回调函数第一个参数为错误信息，第二个才是读取的数据
// fs.readFile(path.resolve(__dirname , './hello.text'),(error,buffer) => {
//     console.log(buffer.toString());
// })

//Promise 下的fs读取数据
let fs = require("node:fs/promises");
//promise下的readFile读取数据  应当注意的时，这里面只会有一个参数，并且返回了一个promise
// fs.readFile(path.resolve(__dirname , './hello.text')).then(r => {
//     console.log(r.toString());
// });

// async 下读取数据
(async () => {
    try {
       let b = await fs.readFile(path.resolve(__dirname , './hello.text'));
        console.log(b.toString("utf-8"));
    }catch(error) {
        console.log(error);
    }
})()