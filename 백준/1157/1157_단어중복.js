//알파벳 대소문자로 된 단어가 주어지면, 
//이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 단, 대문자와 소문자를 구분하지 않는다.
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/cjlee/Desktop/JS/백준/1157/input.txt";
let input = fs.readFileSync(filePath).toString();
let lowStr = input.toLowerCase(); 

let obj = {}; 

    for(let i=0; i<lowStr.length; i++){
        if(obj[lowStr[i]] === undefined) {
            obj[lowStr[i]] = 1;  
        } else {
            obj[lowStr[i]] += 1 
        }
    }
        console.log(obj);
    let result ='';
    let count=0

    for(char in obj){ // obj 전체 property를 확인 해야 하므로 for in 사용
        if(obj[char] > count){ // count와 value 비교 해서 value가 더 크면
            count = obj[char]; // count값 교체해주고
            result = char.toUpperCase(); 
        } else if (obj[char] === count){ //만약 count와 value가 같은 값이 있다면
            result ='?'; 
        }
    }
    console.log(result);


/* 이창제 실패코드  20230502
const upInput = input.toUpperCase();
const toAscii = [];
for(let i = 0; i < input.length; i++) {
    toAscii[i] = upInput.charCodeAt(i);
}
const delDupli = [...new Set(toAscii)];
const result = {};
    toAscii.forEach((x) => {
    result[x] = (result[x] || 0)+1;
});

let result_entries = Object.values(result);

const maxResult = Math.max(...result_entries);
const maxNum = Math.max(...toAscii);

let count = 0;
for(let j = 0; j < result_entries.length; j++) {
    if(result_entries[j] == maxResult) {
        count++;
    }
}
const b = toAscii.indexOf(maxNum);
console.log(toAscii[b]);
const c =String.fromCharCode(maxNum);

if(count > 1) {
    console.log("?");
} else {
    console.log(c);
}

*/