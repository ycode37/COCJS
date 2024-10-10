const Marvel = ['Iron Man','SpiderMan','Thor']
const DC = ['SUperman','FLash','Batman']

// Marvel.push(DC)
console.log(Marvel); // Cha Mud gayi

// const newArr = Marvel.concat(DC) // Naya Array Bana Dega Bc!!!
// console.log(newArr); 

const allHero = [...Marvel,...  DC] // Spread Operator
console.log(allHero); // Best 

// Situation

const anotherArr = [1,2,3,[4,5,6],7,[8,[9,10],12]]
const realAnotherArr = anotherArr.flat(3) // depth deke problem ka solution aa gya BC!!
console.log(realAnotherArr);

console.log(Array.from('Yash'));

let score1 =100
let score2 = 200

console.log(Array.of(score1,score2)); // Array bana diya BC!!!











