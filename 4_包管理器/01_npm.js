/* 
    现在代码全部手写是不可能的，会加大开发事件
    包 ： 就是一个现成的代码，拿过来用即可
        但是包多了，管理就困难了

    npm ：
        世界上最大的包管理库（一堆包，参差不齐）

    package.json :
        - 包的一个描述文件
        - node中通过该文件对项目进行描述
        - 每一个node项目都应该有一个package.json
        - 包含内容 ：
            必须属性 ：
            name :  包的名称，只能小写字母、_和-
            version : 1（更新功能，影响兼容（大更新））.0（添加功能，兼容旧版（小更新））.0（修复错误，兼容旧版（补丁））
    
    终端创建 ：
        npm init 创建package.json(回答问题来确定json里面的内容)，如果提示报错，使用：Set-ExecutionPolicy RemoteSigned 修改执行策略
        npm init -y (直接默认全部创建)
        npm install(可缩写为 ：i) 包名 ： 将指定包下载到当前项目中
            install 时发生的事情 ：
                1.将包下载到当前项目的node_modules中
                2.会在package.json中的dependencies （依赖）中新增一个属性"lodash": "^4.17.21"
                    ^4.17.21 ： 匹配4.xx.xx的版本
                    ~4.17.21 ： 匹配4.17.xx 的版本
                    * ：匹配最新版本，即x.x.x
                3.会自动添加package-lock.json文件 
                    帮助npm下载，避免下载重复的包

                    当直接使用 npm install 进行下载包时，会自动将依赖的包进行下载

        npm install 包名 -g : 全局安装，将包安装到计算机中
                通常是将一些工具安装到计算机中
        npm uninstall 包名 ： 卸载一个包,对于全局包则添加 -g

    引用包 ：
        require()函数引用

*/
// const a = require("lodash");
// console.log(a);