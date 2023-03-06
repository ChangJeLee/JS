const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/cjlee/Desktop/JS/백준/3052/input.txt";
const inputData = fs.readFileSync(filePath).toString().trim().split("\n");
let input = inputData.map(Number);
let numbers = input;

let restNum = numbers.map(
	function(num) {
	return num % 42;
});  

let diffNum = [];
restNum.forEach(
	function(num) {
  		if (diffNum.indexOf(num) === -1 ) {
    	diffNum.push(num);
  		}
});

console.log(diffNum.length);