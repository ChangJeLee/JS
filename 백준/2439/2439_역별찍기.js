const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/cjlee/Desktop/asdf/백준/2439/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let result = '';
let blank = '';
for (let i = 1; i <= input[0]; i++){
  result += "*";
  for (let j = 0; j < input[0]-i; j++){
    blank += ' ';
  }
  console.log(blank + result);
  blank = '';
}