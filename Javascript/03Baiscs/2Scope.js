// let name = 'Yash'
// const age = 18
let hair = 'blaack'

// {} -- Yeh kisi fn ki saath aaega toh scope ho jaaega

if (true){
    let name = 'Yash'
    const age = 18    // Local Scope
    let hair = 'black'
}

// console.log(name);
// console.log(age);
console.log(hair);

// var mai dam nahi hai dal badlu hai iss liye let use kare
// let hair jab 3 line pr daala toh abb change nahi hoga

//Global and Local Scope ek baar phirr

// Nested Scope

function one(){
    const userName = 'Yash'

    function two(){
        const webSite = 'Youtube' //Variable andar ke andar hii khatam ho gya
        console.log(userName);
    }
    // console.log(webSite); Error se familiar hona chalu krde
    two()
    
}
one()

//Andar ka function yaane child varible parent ko access kr skte hain but parent
//wala child ka nahi le skta

if(true){
    const username = 'Harsh'
    if(username==='Harsh'){
        const webSite = 'Youtube'
        console.log(username+ webSite);
        
    }
    // console.log(webSite);
    
}
// console.log(username);

//Agar declaration ke baad function ko ek variable mai daalenge toh woh 
//variable kabhi bhi function ke hii upar nahin aa jaega..
//Uska specification baad main hii hoga


