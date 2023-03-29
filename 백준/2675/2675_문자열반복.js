const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/cjlee/Desktop/JS/백준/2675/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const num = Number(input[0]);
let result = '';

for(let i = 1; i <= num; i++) {
    let data = Number(input[i].split(' ')[0]);
    let word = input[i].split(' ')[1];  

    for(let j = 0; j < word.length; j++){
       for(let k = 0; k < data; k++){
        result += word[j];
       }
    }
}
console.log(result);

