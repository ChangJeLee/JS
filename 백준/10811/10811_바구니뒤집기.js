const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/cjlee/Desktop/JS/백준/10811/input.txt";
const inputData = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, M] = inputData[0].split(' ').map(n=>parseInt(n));
// inpudata의 배열안에 데이터를 공백 기준으로 split 하여 각 문자 값을 숫자로 변형시키고 N, M에 반환해라
let basket = [];
for(let i=1; i<=N; i++){
    basket.push(i);
};

for(let i=1; i<=M; i++){
    let [a, b] = inputData[i].split(' ').map(n=>parseInt(n));
    let arr = [];
    for(let j=a-1; j<b; j++){
        arr.push(basket[j])
    };
    arr.reverse(); //배열을 거꾸로 뒤집음
    basket.splice(a-1, b-a+1, ...arr); //basket의 a-1부터 b-a+1 까지 잘라서 arr 배열에 추가 
}
console.log(basket.join(' '));