const m3 = require("./03_m3");
console.log(m3);
// 单引入
// const name  = require("./03_m3").name;
const {name,age} = require("./03_m3");
console.log(name);
console.log(age);