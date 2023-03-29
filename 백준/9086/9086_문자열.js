const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/cjlee/Desktop/JS/백준/9086/input.txt";
const [T, ...strings] = require('fs').readFileSync(filePath).toString().trim().split('\r');

const sol = [];
strings.forEach((string) => {
  sol.push(`${string[1]}${string[string.length - 1]}`);
});
console.log(sol.join('\n'));