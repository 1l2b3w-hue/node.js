/* 
    package.json
        scripts :
            定义一些命令，可以通过npm来执行这些命令
            test start 可以直接通过npm执行（npm test/start），自定义的将必须加上 run (npm run ...)

    npm镜像 ：
        镜像配置 ：
            1.在计算机中安装cnpm ： （cnpm 当做npm来使用）
                npm install -g cnpm --registry=https://registry.npmmirror.com
            2.彻底修改npm仓库地址 ：
                npm set registry https://registry.npmmirror.com
                回复原样 ：
                npm config delete registry

                查看仓库位置： npm config get registry
*/