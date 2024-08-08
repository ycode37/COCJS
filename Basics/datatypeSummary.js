// Primitive

// String : Call By Value
// Number , Boolean , Null , Undefined , Symbol , bigInt


const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid); //Not same as symbol create Unique Id

const bigNum = 2343324244234243n;
console.log(typeof(bigNum));


// Non - Primitive \\ Refrence Type 
// Arrays , Objects , functions 

const heroes = ['Batman','Deadpool']
let myObj = {
    Name:'Spider-Man',
    Age:20
}

console.log(typeof heroes)
console.log(typeof myObj);

//Function

const myFn = function(){
    console.log('Hello,World!');
}
myFn();
console.log(typeof myFn); // object Function kehte hain bc!
console.log(typeof id);

