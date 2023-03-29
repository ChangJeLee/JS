const iterable = [1,2,3];

const iterator = iterable[Symbol.iterator]();

for(;;) {
    const res = iterator.next();
    if(res.done) break;

    const item = res.value;
    console.log(item);
}


const arrayLike = {
    0: 1,
    1: 2,
    2: 3,
    length: 3
}
console.log(arrayLike);
const arr = Array.from(arrayLike);
console.log(arr);