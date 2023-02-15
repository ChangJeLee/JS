var input = [6, 2, 5];
var result = '';


if (input[0] === input[1] && input[0] === input[2]) {
    result = 10000 + (input[0]) * 1000;
} else if (input[0] === input[1] || input[1] === input[2] || input[0] === input[2]) {
    if(input[0] === input[1] || input[0] === input[2]) {
        result = 1000 + input[0]*100; 
    } else if(input[1] === input[2]) {
        result = 1000 + input[1]*100;
    }
} else {
    result = Math.max(...input)*100;
}
console.log(result);