const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/cjlee/Desktop/JS/백준/11654/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let str = input.toString();
result = str.charCodeAt(0);

console.log(result);