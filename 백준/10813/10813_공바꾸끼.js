const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/cjlee/Desktop/JS/백준/10813/input.txt";
const inputData = fs.readFileSync(filePath).toString().trim().split("\n");

let basket = inputData[0].split(' ').map(Number);
let result = [];
let tmp = [];

for(let k = 0; k < basket[0]; k++) {
	result[k] = k+1;
}
for(let i = 1; i <= basket[1]; i++){
	let data = inputData[i].split(' ').map(Number);
	tmp = result[data[0]-1];
	result[data[0]-1] = result[data[1]-1];
	result[data[1]-1] = tmp;
}
console.log(result.join(' '));