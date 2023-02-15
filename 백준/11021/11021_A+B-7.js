const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/cjlee/Desktop/asdf/백준/11021/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let cnt = Number(input[0]);
let tmp = [];

for(let x = 1; x <= cnt; x++){
  tmp = input[x].split(" ").map(Number);
  console.log(`Case #${x}:` +' ' + Number(tmp[0] + tmp[1]));
  //11022문제 답 > console.log(`Case #${x}: ${tmp[0]} + ${tmp[1]}` +' = ' + Number(tmp[0] + tmp[1]));
}


//Case #1: 1 + 1 = 2