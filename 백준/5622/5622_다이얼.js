const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/cjlee/Desktop/JS/백준/5622/input.txt";
let input = fs.readFileSync(filePath).toString().split('');
let dial = {
	2: "ABC",
	3: "DEF",
	4: "GHI",
	5: "JKL",
	6: "MNO",
	7: "PQRS",
	8: "TUV",
	9: "WXYZ",
};
let result = 0;

for(let i = 0; i <= input.length; i++) {
    for(let j = 2; j <= 9; j++) {
        if(dial[j].includes(input[i]))
        result += j + 1;
    }
}
console.log(result);