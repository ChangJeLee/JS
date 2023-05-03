const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/cjlee/Desktop/JS/백준/2444/input.txt";
let input = Number(fs.readFileSync(filePath));

for(let i=1; i < input; i++){
    let blank = ' '.repeat( (input-i) );
    let stars = '*'.repeat( i+(i-1) );
    console.log( blank + stars );
}

for(let j=input; j > 0; j--) {
    let blank = ' '.repeat( (input-j) );
    let stars = '*'.repeat( j+(j-1) );
    console.log( blank + stars );
}