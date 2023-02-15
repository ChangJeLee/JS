const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/cjlee/Desktop/asdf/백준/8393/input.txt";
let input = fs.readFileSync(filePath).toString().split("");

var num = Number(input);
var result = 0;

for(var i = 1; i <= num; i++) { 
    result += i;
}

console.log(result);