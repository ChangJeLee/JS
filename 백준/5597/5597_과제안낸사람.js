const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/cjlee/Desktop/JS/백준/5597/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let tmp = input.map(Number);
let arr = [];
for (let i = 1; i <= 30; i++) {
    if (!tmp.includes(i)) arr.push(i);
    if (arr.length === 2) break;
}
console.log(arr.join("\n"));