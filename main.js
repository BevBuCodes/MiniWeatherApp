var API_KEY = config.key;
var baseUrl = config.baseurl;



const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', setQuery);

function setQuery(event) {
    if(event.keyCode == 13) {
        getResults(searchBox.value);
    }
}

function getResults(query) {
    fetch(`${baseUrl}weather?q=${query}&units=imperial&APPID=${API_KEY}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults(weather) {
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}`;

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°f</span>`

    let conditions = document.querySelector('.current .description')
    conditions.innerText = weather.weather[0].main;

    let lowHi = document.querySelector('.current .low-hi')
    lowHi.innerText = `${Math.round(weather.main.temp_min)}°f / ${Math.round(weather.main.temp_max)}°f`
}