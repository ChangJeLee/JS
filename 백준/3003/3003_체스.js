const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/cjlee/Desktop/JS/백준/3003/input.txt";
let input = fs.readFileSync(filePath).toString().split(' ');
let chess = [1, 1, 2, 2, 2, 8];
let result = '';

for(i = 0; i < 6; i++){
    subtract = (parseInt(chess[i]) - parseInt(input[i]));
    result += subtract +' ' ;
};

console.log(result);