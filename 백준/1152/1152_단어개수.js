const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/cjlee/Desktop/JS/백준/1152/input.txt";
let input = fs.readFileSync(filePath).toString();
let replaceArr = input.replaceAll(' ', '');;

console.log(input.length-replaceArr.length);