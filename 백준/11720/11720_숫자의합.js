const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/cjlee/Desktop/JS/백준/11720/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let count = Number(input[0]);
let sepNum = input[1].split('');
let sum = 0;

for (let i = 0; i < count; i++) {
  sum = sum + Number(sepNum[i]);
}
console.log(sum);