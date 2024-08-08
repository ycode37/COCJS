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







