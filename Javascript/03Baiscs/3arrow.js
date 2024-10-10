const user = {
    username: 'Yash',
    price: 12,

    welcomemessage: function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
        
    }
}
user.welcomemessage()
user.username = 'Harsh' // Hamne Context change kr diya
user.welcomemessage()

console.log(this); //{} node env ke andar this empth object ko refer kr rha hain

function chai(){
    console.log(this);
}
chai() // CRAZY!!!

//this object ke andar koi function hain tabhi kaam krega seedha function main kaam ahi karega

const coffe = () => {
    let username = 'Yash'
    console.log(this.username); 
}
coffe() //🤡

//Arrow or normal Function main kya fark hain BSDk 

const addTwo = (num1 , num2) => {
    return num1 + num2
}

console.log(addTwo(3,4));

//implicit return

const addTwice = (num1 , num2) => num1 + num2 // Kyuuki ek hii lineka h
console.log(addTwice(3,5));
// Object ke liye parenthesis mai wrap karna padhega









