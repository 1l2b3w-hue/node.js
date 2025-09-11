/* 
    默认情况下,node的标准模块化就是CommonJS
    
    使用ES的模块化可以通过下面两种方法实现
        使用mjs作为文件扩展名
        修改package.json,将模块化规范设置为ES模块('type' : 'module' )

    导入 :
        import {存放一些你想要接受的变量,相对于解构} from  "相对路径" 不能省略扩展名!
*/

// 验证
// console.log(module); //报错,显示不是ES模块的内容

// import {a,b,c}  from "./04_m4.mjs" ;
// import { a as number, b as name , c as obj}  from "./04_m4.mjs" ;  //通过as来指定别名

// import * as m4 from "./04_m4.mjs";  // 读取所有内容并赋值给一个对象m4. 
// // 但是开发要避免使用import*  ,不能按需来引用


// // console.log(a,b,c);
// // console.log(number,name,obj);
// console.log(m4);//异步处理,
// console.log(m4.a);
// console.log(m4.b);
// console.log(m4.c);

// 默认导出内容可以随意取名,并且一个模块中,只允许一个默认值导出
// import add,{a,b,c} from "./04_m4.mjs" ; //接受默认值
// let result = add(123,456);
// console.log(result);
// console.log(a,b,c)

// 通过ES模块化,导入的内容都是常量
// ES模块采用的是严格模式
// ES模块化,在浏览器中同样支持,但不会直接使用,会于打包工具结合使用
import {a,b,c} from "./04_m4.mjs" ;
console.log(a,b,c);
// a = 20;
