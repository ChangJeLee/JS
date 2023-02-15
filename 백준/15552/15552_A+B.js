const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/cjlee/Desktop/asdf/백준/15552/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let l = Number(i[0])
let a = ''

for(let x = 1; x <= l; x++){
  let n = i[x].split(' ')
  a += Number(n[0]) + Number(n[1]) + '\n'
}

console.log(a);