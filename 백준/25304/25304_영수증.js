const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/cjlee/Desktop/asdf/백준/25304/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let total = +input[0]; //260000
let cnt = +input[1];   // 4
let sum = 0;
let test = [];

for(var i = 2; i < cnt+2; i++) {
    test = input[i].split(" ").map(Number);
    sum = sum + test[0] * test[1];
}   

console.log(total === sum ? "Yes" : "No");

