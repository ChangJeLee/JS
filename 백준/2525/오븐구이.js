// 입력 
var inputTime = [17, 40];
var useTime = [80];

h = (inputTime[0] * 60 + inputTime[1] + useTime[0]) / 60;
m = (useTime[0] + inputTime[1]) % 60; 
if (h === 24) {
    h -= 24;
}
console.log(h, m);



/*
// 출력 14 50 이 되어야 함 

// 시 0 ~ 23 
// 분 0 ~ 59
// 어쨌든 input Time 에 20분 더해서 해야함 

if(useTime[0] + inputTime[1] >= 60) {
    inputTime[1] = inputTime[1] + useTime[0] - 60;
    inputTime[0] += 1;
    if(inputTime[1] === 60) {
        inputTime[1] = 0;
        inputTime[0] += 1;
    }

    if(inputTime[0] === 24){
        inputTime[0] = 0;
    }
} else {
    inputTime[1] = inputTime[1] + useTime[0];
}

console.log(inputTime[0],' ', inputTime[1]);

*/