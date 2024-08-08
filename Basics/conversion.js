let score = 44
let scoreTwo = 'abc'

console.log(typeof(scoreTwo));

let finalScore = Number(scoreTwo);
console.log(typeof(finalScore));
console.log(finalScore); // Number mai toh convert ho gya but hai toh Nan State Mai BKL! that's Whypeople oftn use typescript

//Null pr zero dekhaega and undefined pr NaN

let loggedIn = 1; // Zero ke alwa sab pr true batega ; empty string pr hii false batega ; Yaa NaN state Pr false Batega
let boolInt = Boolean(loggedIn);
console.log(boolInt);

let value = 7
let negValue = -value;
console.log(negValue);

console.log('1'+2+2);
console.log(1+2+'2'); // Left to right calculation hot hai brother

let x = 3;
const y = x++;
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n

let x3 = 3;
const y3 = ++x3;
// x is 4; y is 4

let x4 = 3n;
const y4 = ++x4;
// x2 is 4n; y2 is 4n


console.table([x,x2,x3,x4,y,y2,y3,y4]);

