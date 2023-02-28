const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/cjlee/Desktop/JS/백준/10810/input.txt";
const inputData = fs.readFileSync(filePath).toString().trim().split("\n");

let basket = inputData[0].split(' ').map(Number);
let result = [];

for(let k = 0; k < basket[0]; k++) {
	result[k] = 0;
}

for(let i = 1; i <= basket[1]; i++){
	let data = inputData[i].split(' ').map(Number);
	
	let firBasket = data[0];
	let lastBasket = data[1];
	let ballNum = data[2];
	
	for(let j = firBasket; j <= lastBasket; j++) {
		result[j-1] = ballNum;
	}
}
const real = result.join(' ');
console.log(real);
