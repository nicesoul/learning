//Pseudocode goes like this:


// City name: jsonResponse.name
// Describe of weather: jsonResponse.weather[0].main + description
// Weather Icon = `http://openweathermap.org/img/wn/${jsonResponse.weather[0].icon}@2x.png`
// Pressure = jsonResponse.main.pressure
// Humidity= jsonResponse.main.humidity
// Wind Speed = jsonResponse.wind.speed

// WeatherByHours: https://api.openweathermap.org/data/2.5/forecast?q=Brussels&appid=f6211bc24c258c57f7a7fba887afdd17

// let responseofWeatherHours =  data.list

// 9clock =  data.list[0]
// 12clcok = data.list[1]
// 15 = data.list[2]


const result = document.querySelector('.result');
const API_key = 'appid=f6211bc24c258c57f7a7fba887afdd17';
const API_currentWeather = 'http://api.openweathermap.org/data/2.5/weather';
const API_forecast = 'https://api.openweathermap.org/data/2.5/forecast';
const searchinput = document.querySelector('#input_search');
// const editButton = document.querySelector('._edit');
const searchButton = document.querySelector('._send');
searchButton.addEventListener('click', sendSearch);
// editButton.addEventListener('click', startSearch);

//constants for overrideng initial HTML with real data? or object destructuring?
var divCity = document.querySelector('.city');
var divDescription = document.querySelector('.description');
var divDate = document.querySelector('.date');
var divTemp = document.querySelector('.temp span');
var divIcon = document.querySelector('#icon1');
var divPressure = document.querySelector('.pressure');
var divHumidity = document.querySelector('.humidity');
var divWindSpeed = document.querySelector('.windspeed');
var divHourlyIcon = document.querySelectorAll('.hourly img');
var divHourlyTemp = document.querySelectorAll('.hourly span');
divDate.innerText = new Date().toLocaleDateString();
console.log(divIcon);


function sendSearch() {
    let city = searchinput.value;
    if (city.trim() === '') {
        return alert('provide a city')
    } else {
        let API_URL1 = `${API_currentWeather}?q=${city}&${API_key}`;
        // let API_URL2 = `${API_forecast}?q=${city}&${API_key}&cnt=6`;
        // let KtC = `273.15).toFixed(0)` // KelvinToCelcium
        fetch(API_URL1)
            .then(response => response.json())
            .then(console.log(response));
            
        
        return 1;
    }
}
/*
.then(data => {
    result.innerHTML = JSON.stringify(data);
    divCity.innerText = data.name;
    divDescription.innerText = data.weather[0].main;
    divDate.innerText = new Date().toLocaleString();
    divTemp.innerText = Number(data.main.temp - 273.15).toFixed(0);
    let icon = data.weather[0].icon;
    divIcon.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    divPressure.innerText = data.main.pressure + ' hPa';
    divHumidity.innerText = data.main.humidity + ' %';
    divWindSpeed.innerText = data.wind.speed + ' m/s';
})
fetch(API_URL2)
    .then(response => response.json())
    .then(data => {
        result.innerHTML = JSON.stringify(data);
        divHourlyTemp[0].innerText = data.list[0].dt_txt.slice(12, 16) + ' - ' + Number(data.list[0].main.temp - 273.15).toFixed(0) + '°C';
        divHourlyTemp[1].innerText = data.list[1].dt_txt.slice(12, 16) + ' - ' + Number(data.list[1].main.temp - 273.15).toFixed(0) + '°C';
        divHourlyTemp[2].innerText = data.list[2].dt_txt.slice(12, 16) + ' - ' + Number(data.list[2].main.temp - 273.15).toFixed(0) + '°C';
        divHourlyTemp[3].innerText = data.list[3].dt_txt.slice(12, 16) + ' - ' + Number(data.list[3].main.temp - 273.15).toFixed(0) + '°C';
        divHourlyTemp[4].innerText = data.list[4].dt_txt.slice(12, 16) + ' - ' + Number(data.list[4].main.temp - 273.15).toFixed(0) + '°C';
    })
}
}

function startSearch() {
    searchinput.style.display = 'inline';
    searchinput.focus();
}
// class Weather {
//     HTMLCreator(card){
//         this.city = data.name;
//         this.description = data.weather[0]+description      
//     }
// }

*/