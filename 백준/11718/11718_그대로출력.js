const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/cjlee/Desktop/JS/백준/11718/input.txt";
let input = fs.readFileSync(filePath).toString();
console.log(input);