const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/cjlee/Desktop/asdf/백준/10950/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const caseNum = input[0];

let tmp = [];
for (let i=1; i<=caseNum; i++) {
    tmp = input[i].split(" ").map(Number);
    //input[i]를 " "기준으로 잘라서 map(Number) 숫자로 변환한 배열을 다시 만들어 tmp에 넣어준다; 개쩐다 ;;
    
    console.log(tmp[0]+tmp[1]); 
}

const n = String('로꾸거 로꾸거 로꾸거 말해말');
let reverseN = n.split('').reverse().join('');
console.log(reverseN);