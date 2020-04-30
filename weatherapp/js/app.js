const result = document.querySelector('.result');
const API_key = 'appid=f6211bc24c258c57f7a7fba887afdd17'; // Atilla's key
const API_currentWeather = 'http://api.openweathermap.org/data/2.5/weather';
const API_forecast = 'https://api.openweathermap.org/data/2.5/forecast';
const searchinput = document.querySelector('#input_search');
const searchButton = document.querySelector('._send');
searchButton.addEventListener('click', startSearch);

//constants for overrideng initial HTML with real data
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

initialSearch();
searchinput.focus();
// activate search by hitting Enter
searchinput.addEventListener("keyup", event => {
    if (event.keyCode === 13) {
        searchButton.click();}
});


function startSearch() {
    let city = searchinput.value;
    if (city.trim() === '') {
        return alert('provide a city');
    } else {
        sendSearch()
    }
}

function sendSearch() {
    let city = searchinput.value;
    let API_URL1 = `${API_currentWeather}?q=${city}&${API_key}`;
    let API_URL2 = `${API_forecast}?q=${city}&${API_key}&cnt=6`;

    fetch(API_URL1)
        .then(response => {
            if (!response.ok) {
                alert('city not found, try again');
                // still next promise resolves and I get undefined in HTML :)
            }
            return response.json();
        })
        .then(data => {
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
        .then(data => { // this is a mess ))    COPY-PASTING IS A BAD HABIT )  but no time to clean this up Now, sorry ))) I'll refactor it later!
            divHourlyTemp[0].innerText = data.list[0].dt_txt.slice(12, 16) + ' - ' + Number(data.list[0].main.temp - 273.15).toFixed(0) + '°C';
            divHourlyTemp[1].innerText = data.list[1].dt_txt.slice(12, 16) + ' - ' + Number(data.list[1].main.temp - 273.15).toFixed(0) + '°C';
            divHourlyTemp[2].innerText = data.list[2].dt_txt.slice(12, 16) + ' - ' + Number(data.list[2].main.temp - 273.15).toFixed(0) + '°C';
            divHourlyTemp[3].innerText = data.list[3].dt_txt.slice(12, 16) + ' - ' + Number(data.list[3].main.temp - 273.15).toFixed(0) + '°C';
            divHourlyTemp[4].innerText = data.list[4].dt_txt.slice(12, 16) + ' - ' + Number(data.list[4].main.temp - 273.15).toFixed(0) + '°C';
        })
    searchinput.value = '';
    searchinput.focus();
}

function initialSearch() {
    let API_URL0 = `${API_currentWeather}?q=Brussels&${API_key}`;
    let API_URL0hourly = `${API_forecast}?q=Brussels&${API_key}&cnt=6`;
    fetch(API_URL0)
        .then(response => response.json())
        .then(data => {
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
    fetch(API_URL0hourly)
        .then(response => response.json())
        .then(data => { // this is a mess ))    COPY-PASTING IS A BAD HABIT )  but no time to clean this up Now, sorry ))) I'll refactor it later!
            divHourlyTemp[0].innerText = data.list[0].dt_txt.slice(12, 16) + ' - ' + Number(data.list[0].main.temp - 273.15).toFixed(0) + '°C';
            divHourlyTemp[1].innerText = data.list[1].dt_txt.slice(12, 16) + ' - ' + Number(data.list[1].main.temp - 273.15).toFixed(0) + '°C';
            divHourlyTemp[2].innerText = data.list[2].dt_txt.slice(12, 16) + ' - ' + Number(data.list[2].main.temp - 273.15).toFixed(0) + '°C';
            divHourlyTemp[3].innerText = data.list[3].dt_txt.slice(12, 16) + ' - ' + Number(data.list[3].main.temp - 273.15).toFixed(0) + '°C';
            divHourlyTemp[4].innerText = data.list[4].dt_txt.slice(12, 16) + ' - ' + Number(data.list[4].main.temp - 273.15).toFixed(0) + '°C';
        })
}