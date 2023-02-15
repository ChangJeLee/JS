const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/cjlee/Desktop/asdf/백준/10952/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let i=0;
while(true){
  tmp = input[i].split(" ").map(Number);
    if(tmp[0]==0 && tmp[1]==0){
        break;
    }
    console.log(tmp[0] + tmp[1]);
    i++;
}