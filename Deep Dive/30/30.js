
console.log(new Date());
console.log(Date());

console.log(new Date(0));

const now = Date.now();
console.log(now);
console.log(new Date(now));

console.log(new Date(now).getFullYear());
const today = new Date();
today.setFullYear(2000);
console.log(today.getFullYear());

console.log(new Date('2023/03/06').getMonth()); // 0부터 시작함

/* get/set Years, Months, Days, Hours, Minutes, seconds, Miliseconds */

const dateTest = new Date('2023/03/06/11:52');
console.log(dateTest.toString());
console.log(dateTest.toDateString());
console.log(dateTest.toTimeString());
console.log(dateTest.toISOString());

console.log(dateTest.toLocaleString());
console.log(dateTest.toLocaleString('ko-KR'));
console.log(dateTest.toLocaleString('en-US'));
console.log(dateTest.toLocaleString('ja-JP'));

console.log(dateTest.toLocaleTimeString('ko-KR'));
console.log(dateTest.toLocaleTimeString('en-US'));
console.log(dateTest.toLocaleTimeString('ja-JP'));

