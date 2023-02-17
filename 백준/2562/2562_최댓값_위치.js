const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/cjlee/Desktop/JS/백준/2562/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let tmp = input.map(Number);
let maxNum = Math.max(...tmp);
let maxPosition = tmp.indexOf(maxNum) + 1;

console.log(maxNum);
console.log(maxPosition);

