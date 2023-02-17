const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/cjlee/Desktop/JS/백준/10818/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let tmp = input[0];
let result = input[1].split(' ').map(Number);

const min = Math.min.apply(null, result);
const max = Math.max.apply(null, result);
console.log(`${min} ${max}`);