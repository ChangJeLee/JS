const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/cjlee/Desktop/asdf/백준/2439/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let cnt = Number(input[0]);
let tmp = '';

for(let i = 1; i <= cnt; i++){
  tmp += '*';
  console.log(tmp);
}