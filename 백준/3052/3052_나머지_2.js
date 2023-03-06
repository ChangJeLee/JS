const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/cjlee/Desktop/JS/백준/3052/input.txt";
const inputData = fs.readFileSync(filePath).toString().trim().split("\n");

let numbers = inputData.map(Number);

// 각 숫자를 42로 나눠줌
for (let i = 0; i < numbers.length; i++) {
	numbers[i] = numbers[i] % 42;
}
// 중복 되는 값을 Set으로 삭제
numbers = [...new Set(numbers)]; 
console.log(numbers.length);