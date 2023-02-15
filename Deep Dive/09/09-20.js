var done = true;
var message = '';

if(done) message = '굳굳보이';

var message2 = '';
var done2 = true;
message2 = done2 && '굳굳보이';

console.log(message);
console.log(message2);

var noDone = false;
var noMessage = '';

if (!noDone) noMessage = '노굳맨';
var noMessage2 = noDone || '노굳맨';

console.log(noMessage);
console.log(noMessage2);

if (done) message = '완료';
else message = '미완료';
console.log(message);

message = noDone ? '완료' : '미완료';
console.log(message);