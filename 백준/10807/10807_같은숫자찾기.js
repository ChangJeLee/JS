const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/cjlee/Desktop/JS/백준/5597/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let cnt = Number(input[0]);
let tmp = input[1].split(' ').map(Number);
let com = Number(input[2]);
let a = 0;

for(let i = 0; i < cnt; i++) {
  if (tmp[i] === com) a++;
}
console.log(a);