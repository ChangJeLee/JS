let num = [10,45];

function clock() {
    if (num[1] <= 44) {
        num[1] = 60 + (num[1] - 45);
        num[0] -= 1;
         if (num[0] === -1) {
            num[0] = 23;
        } 
    } else if (num[1] === 60) {
        num[1] === 0;
    } else {
            num[1] -= 45;
    }
        console.log(num[0]+ " " + num[1]);
    }



clock();

