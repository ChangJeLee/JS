const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/cjlee/Desktop/JS/백준/2908/input.txt";
let input = fs.readFileSync(filePath).toString().split(' ');
let num1 = Number([...input[0]].reverse().join(''));
let num2 = Number([...input[1]].reverse().join(''));

console.log(num1 > num2 ? num1 : num2);