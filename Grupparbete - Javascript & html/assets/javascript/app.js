// const apiUrlManila = "https://api.openweathermap.org/data/2.5/weather?q=Manila&units=metric&appid=81dcd8cceea19c746d25742109494663";
// const apiUrlStockholm = "https://api.openweathermap.org/data/2.5/weather?q=Stockholm&units=metric&appid=81dcd8cceea19c746d25742109494663";
// const apiUrlKiev = "https://api.openweathermap.org/data/2.5/weather?q=Kiev&units=metric&appid=81dcd8cceea19c746d25742109494663";
// const apiUrlDamaskus = "https://api.openweathermap.org/data/2.5/weather?q=Damaskus&units=metric&appid=81dcd8cceea19c746d25742109494663";

// async function checkWeatherManila(){
//     const response = await fetch(apiUrlManila);
//     var data = await response.json();

//     console.log(data);

// document.querySelector(".cityManila").innerHTML = data.name;
// document.querySelector(".tempManila").innerHTML = Math.round(data.main.temp) + "°C";
// document.querySelector(".humidityManila").innerHTML = "Humidity: " + data.main.humidity + "%";
// document.querySelector(".windManila").innerHTML = "Wind speed: " + data.wind.speed + " km/h";

// }

// async function checkWeatherStockholm(){
//     const response = await fetch(apiUrlStockholm);
//     var data = await response.json();

//     console.log(data);

// document.querySelector(".cityStockholm").innerHTML = data.name;
// document.querySelector(".tempStockholm").innerHTML = Math.round(data.main.temp) + "°C";
// document.querySelector(".humidityStockholm").innerHTML = "Humidity: " + data.main.humidity + "%";
// document.querySelector(".windStockholm").innerHTML = "Wind speed: " + data.wind.speed + " km/h";

// }

// async function checkWeatherKiev(){
//     const response = await fetch(apiUrlKiev);
//     var data = await response.json();

//     console.log(data);

// document.querySelector(".cityKiev").innerHTML = data.name;
// document.querySelector(".tempKiev").innerHTML = Math.round(data.main.temp) + "°C";
// document.querySelector(".humidityKiev").innerHTML = "Humidity: " + data.main.humidity + "%";
// document.querySelector(".windKiev").innerHTML = "Wind speed: " + data.wind.speed + " km/h";

// }

// async function checkWeatherDamaskus(){
//     const response = await fetch(apiUrlDamaskus);
//     var data = await response.json();

//     console.log(data);

// document.querySelector(".cityDamaskus").innerHTML = data.name;
// document.querySelector(".tempDamaskus").innerHTML = Math.round(data.main.temp) + "°C";
// document.querySelector(".humidityDamaskus").innerHTML = "Humidity: " + data.main.humidity + "%";
// document.querySelector(".windDamaskus").innerHTML = "Wind speed: " + data.wind.speed + " km/h";

// }


// checkWeatherManila();
// checkWeatherStockholm();
// checkWeatherKiev();
// checkWeatherDamaskus();

const apiUrlManila = "http://api.weatherapi.com/v1/forecast.json?key=70923cd2adb646fc90190851240711&q=Manila&days=5&aqi=no&alerts=no";

async function checkWeatherManila(){
        const response = await fetch(apiUrlManila);
        var data = await response.json();
    
        console.log(data);
    
    document.querySelector(".cityManila").innerHTML = data.location.name;
    document.querySelector(".tempManila").innerHTML = Math.round(data.current.temp_c) + "°C";
    document.querySelector(".humidityManila").innerHTML = "Humidity: " + data.current.humidity + "%";
    document.querySelector(".windManila").innerHTML = "Wind speed: " + data.current.wind_kph + " km/h";
    // document.querySelector(".");
    document.querySelector(".tempforecastManila").innerHTML = Math.round(data.forecast.forecastday[1].hour[12].temp_c) + "°C";
}

checkWeatherManila();