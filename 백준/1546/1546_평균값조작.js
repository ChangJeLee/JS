const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/cjlee/Desktop/JS/백준/1546/input.txt";
const inputData = fs.readFileSync(filePath).toString().trim().split("\n");

let num = inputData[0].split(' ').map(n=>parseInt(n));
let data = inputData[1].split(' ').map(n=>parseInt(n));
let result = [];

let maxNum = Math.max(...data);

let newScoreSum = 0;
data.forEach(x => { 
	newScoreSum += x / maxNum * 100;
})
console.log(newScoreSum / data.length);