// getTime() function se wo date ka exact milliseconds mein time milta hai since January 1, 1970 (ye JavaScript mein ek reference date hoti hai).
// Basically, ye ek bada number return karega jo milliseconds mein hoga.
var countDownDate = new Date('Oct 7, 2024 00:00:00').getTime();


// setInterval ek function hai jo har 1 second (1000 milliseconds) baad code ko repeat karta hai.
//  Is case mein, yeh har second countdown ko update karega.
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor ((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days
    document.getElementById('hour').innerHTML = hours
    document.getElementById('minutes').innerHTML = minutes
    document.getElementById('seconds').innerHTML = seconds

    if(distance <0 ){

        //clearInterval(x): Ye line timer ko stop karne ke liye hai. x variable me 
        // wo interval function hoga jo timer ko chalata tha. Isse countdown rok diya jata hai
        clearInterval(x);
        document.getElementById('days').innerHTML = '00';
        document.getElementById('hour').innerHTML = '00';
        document.getElementById('minutes').innerHTML = '00';
        document.getElementById('seconds').innerHTML = '00';
    }

},1000)
