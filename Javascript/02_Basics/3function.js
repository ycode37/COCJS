function sayMyName(){
    console.log('Y');
    console.log('A');
    console.log('S');
    console.log('H');
    
}
sayMyName()

function addTwoNum(n1,n2){
   console.log(n1+n2); // return Use karne ke liye another variable create karna padhega ]
}// And return ke baad kucch bhi print nahi hoga
addTwoNum(2,4) // Argument

function loginUser(username){ // username = 'x' kucch bhi daalke hum default value bhi dset kr skte hain ...
    if(username === undefined){
        console.log('Please Enter A Name');
        return // POOORA CODE NICHHE TAK RUN NA HO
    }
    return `${username} just Logged In`
}
console.log(loginUser()) // Console log in. krna padhega Bc!!!

