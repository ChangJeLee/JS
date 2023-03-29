const mySymbol = Symbol();
console.log(typeof mySymbol);
console.log(mySymbol);//심벌값은 외부로 노출되지않아 확인 할 수 없음

const mySymbol1 = Symbol('mySymbol');
const mySymbol2 = Symbol('mySymbol');

console.log(mySymbol1 === mySymbol2); //유일무이한 값을 가짐

console.log(!!mySymbol);

if(mySymbol) console.log('mySymbol is not empty'); 

const s1 = Symbol.for('mySymvol');
const s2 = Symbol.for('mySymvol');

console.log(s1 === s2);

const Direction = {
    UP: Symbol('up'),
    DOWN: Symbol('down'),
    LEFT: Symbol('left'),
    RIGHT: Symbol('right')
};

const myDirection = Direction.UP;
if(myDirection == Direction.UP) {
    console.log('You are going up');
}

const obj = {
    [Symbol.for('cjlee')]: 1
};

console.log(obj[Symbol.for('cjlee')]);



for(const key in obj) {
    console.log(key);
}
console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));

console.log(Object.getOwnPropertySymbols(obj));
const symbolKey1 = Object.getOwnPropertySymbols(obj)[0];
console.log(symbolKey1);




