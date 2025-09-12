const fs = require("node:fs/promises"); //Promise版本下的fs
const path = require("node:path");
/* 
    fs.appendFile() : 创建一个新文件并添加内容，或者在已有文件中添加数据  不会返回任何值
            两个参数，一个路径，一个内容

*/
// fs.appendFile(path.resolve(__dirname , "hello1.text"),"你好");
// let a = fs.readFile(path.resolve(__dirname , "hello.text"));
// a.then(r => {
//     console.log(r.toString());
// });



// C:\Users\Administrator\Desktop\2.jpg 实现读将一张图片放入一个文件中
fs.readFile(path.resolve(__dirname , "../../2.jpg")).then(r => {
    return fs.appendFile(path.resolve(__dirname , "hello1.jpg"), r);
}).then(() => {
    console.log("执行完毕");
});
