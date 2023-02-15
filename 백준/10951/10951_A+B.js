const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/cjlee/Desktop/asdf/백준/10951/input.txt";
const inputData = fs.readFileSync(filePath).toString().trim().split("\n");

for(let i = 0; i < inputData.length; i++){
	let data = inputData[i].split(' ').map(Number);
  	console.log(data[0] + data[1]);
}
