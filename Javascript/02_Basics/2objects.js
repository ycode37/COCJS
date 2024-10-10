 // object Literals


 const MySym = Symbol('Key1')

 const JsUser = {
    name: 'Yash',
    age: 18,
    [MySym]: 1207,
    location: 'Jaipur',
    email: 'ycode37@gmail.com',
    isloggedIN: false
 }
 console.log(JsUser.email); // Aghar email '' iss mai hota toh . mai aaja ye aisa hota hii nahin
 console.log(JsUser['email']);
 console.log(JsUser[MySym]); // Yeh Symbol hain

//  Object.freeze(JsUser)// Abb Koi BHi Change Nahin Hoga

 JsUser.greeting = function () {
    return ('Hello!');
 }
 console.log(JsUser.greeting());

 const myArr = {
   username:{
      fullname:{
         firstName:'Yash',
         lastName:'Bothra'
      }
   }
 }
 console.log(myArr.username.fullname.firstName);

 const obj1 = {1:'a',2:'b'}
 const obj2 = {3:'c',4:'d'}

 const obj3 = Object.assign({},obj1,obj2) //{} optional hai pr use iss liye karte hai taki result guarantee aae {} - Tareget and baaki source
 console.log(obj3);
 // Iss mai Spread Opertor bhi use kr skte hain

 const users = [
   {
      id:'001',
      name:'Yash'
   },
   {
      id: '002',
      name: 'Harsh'

   }
 ]

 console.log(users[1]); // Crazy!!
 //Object.keys or value bhi use ho sakti hai iss main

 // AGar check karna hai ki koi property ecist karti hai ki nahi toh hum 
 // .hasOwnProperty('x') Ka use karebge


 //Destrucuting Of Objects

 const course = {
   courseName: 'Js in Hindi',
   Price:'999',
   courseInstructor:'Yash'
 }

 const {courseInstructor: instructor} = course // Destructing 
 console.log(instructor); // Crazy!!!

//Api Concept -- Apna Kaam kisi Aur ke sar pr Daalan (Json)



 
 
 
 

 



