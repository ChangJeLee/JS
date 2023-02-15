const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/cjlee/Desktop/asdf/백준/1110/input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
let init = parseInt(input[0]);

let cnt = 0;
let num = init;

while(true) {
	let sum = parseInt(num/10 + num%10);
	num = (num%10)*10 + sum%10;
	cnt++;
	if(num === init) break;
}
console.log(cnt);
