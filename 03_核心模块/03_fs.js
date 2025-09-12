const { error } = require("node:console");
const fs = require("node:fs/promises");
const path = require("node:path");


/* 
    fs.mkdir() : 创建一个目录 （指定路径上创建一个文件夹） 当给定的路径不存在时，将无法创建
            可以接受一个 配置对象（普通对象） 作为第二个参数 通过配置对象可以对方法功能进行配置
                recursive : 默认值为false，设置为true时，会自动创建不存在的上一级目录
    fs.rmdir() : 删除一个目录，当该目录中有文件时，将无法删除
    fs.rm() : 删除一个文件
    fs.rename() ： 重命名（相当于剪切） 两个参数： 一个旧名（的地址） ，新名（的地址）
    fs.copyFile : 复制文件，用法于fs.rename一样
*/
// fs.mkdir(path.resolve(__dirname , "./hello/123"),{recursive : true}).then(() => {
//     console.log("操作成功")
// }).catch((error) => {
//     console.log("操作失败",error);
// }) 
// fs.rmdir(path.resolve(__dirname , './hello/123')).then(() => {
//     console.log("操作成功");
// }).catch((error) => {
//     console.log("操作失败");
// });
//递归删除时，下面的方法会在未来的node版本被删除，应该使用fs.rm(path, { recursive: true }) 
// fs.rmdir(path.resolve(__dirname , './hello'), { recursive : true}).then(() => {  
//     console.log("操作成功");
// }).catch((error) => {
//     console.log("操作失败");
// });
// fs.rm(path.resolve(__dirname , './hello') , { recursive :true}).then( () => {
//     console.log("删除成功");
// }).catch((error) => {
//     console.log("删除失败");
// })


// fs.rename(path.resolve(__dirname , './hello.text'), path.resolve(__dirname , './hello_number.text')).then(() =>{
//     console.log("操作成功");
// }).catch((error) => {
//     console.log("操作失败");
// });

// fs.rename(path.resolve(__dirname , '../hello.text'), path.resolve(__dirname , './hello.text')).then(() =>{
//     console.log("操作成功");
// }).catch((error) => {
//     console.log("操作失败");
// });

fs.copyFile(path.resolve(__dirname , './hello.text'), path.resolve(__dirname , './hello1.text')).then(() =>{
    console.log("操作成功");
}).catch((error) => {
    console.log("操作失败");
});