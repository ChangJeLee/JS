const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/cjlee/Desktop/JS/백준/10809/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let word = input[0].split('');
let test =  [];

for(let i = 97; i < 123; i++){
  test += word.indexOf(String.fromCharCode([i]))+' ';
}
console.log(test);