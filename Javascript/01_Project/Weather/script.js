console.log('Hello');

const apiKey = 'c52ecaad66174da60b2303c4df27327f';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon')


//async function: This makes the function run asynchronously, 
//meaning it can fetch data from the internet without freezing the rest of the code
async function checkWeather(city) {

    //Without await, the code would immediately move to the next line before the data has been fetched. 
    // This could lead to errors because the response might not be ready yet.
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    //response.json(): This converts the response from the API into
    // a JavaScript object so you can work with the data

    if(response.status == 404){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }
    else{
        var data = await response.json();
        console.log(data);  
    
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';
    
        if(data.weather[0].main == 'Clouds'){
            weatherIcon.src = 'images/clouds.png';
        }
        else if(data.weather[0].main == 'Clear'){
            weatherIcon.src = 'images/clear.png'
        }
        else if(data.weather[0].main == 'Rain'){
            weatherIcon.src = 'images/rain.png'
        }
        else if(data.weather[0].main == 'Drizzle'){
            weatherIcon.src = 'images/drizzle.png'
        }
        else if(data.weather[0].main == 'Mist'){
            weatherIcon.src = 'images/mist.png'
        }
    
        document.querySelector('.weather').style.display ='block';
        document.querySelector('.error').style.display = 'none';
    }
   
}
searchBtn.addEventListener('click',() =>{
    checkWeather(searchBox.value);
})
checkWeather(); // Yahan Pr ek base value deni padegi nahi toh anem value khali jaa rhi thi


