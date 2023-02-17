const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/cjlee/Desktop/JS/백준/10871/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let tmp = input[0].split(' ').map(Number);
let result = input[1].split(' ').map(Number);
var test = '';

for (let i = 0; i < tmp[0]; i++) {
  if(result[i] < tmp[1]) test += ` ${result[i]}`;
}
console.log(test.trim()); 