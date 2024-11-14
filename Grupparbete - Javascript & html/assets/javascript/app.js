function getWeather(city, div1, div2, div3, div4, div5) {
    const apiKey = '915785edc646f59382234676c1139aab';

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data, div1, div2, div3, div4, div5);
        })
        .catch(error => {
            console.error('Error fetching current weather data', error);
            alert('Error fetching current weather data. Please try again.');
        });

    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            displayHourlyForecast(data.list, div5);
        })
        .catch(error => {
            console.error('Error fetching hourly forecast data', error);
            alert('Error fetching hourly forecast data. Please try again.');
        });
}

function displayWeather(data, div1, div2, div3, div4, div5) {
    console.log(data); 
    const tempDivInfo = document.getElementById(div1);
    const cityDivInfo = document.getElementById(div2);
    const weatherInfoDiv = document.getElementById(div3);
    const weatherIcon = document.getElementById(div4);
    const hourlyForecastDiv = document.getElementById(div5);

    weatherInfoDiv.innerHTML = '';
    hourlyForecastDiv.innerHTML = '';
    tempDivInfo.innerHTML = '';

    if (data.cod === 404) { 
        weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
    } else {
        const cityName = data.name;
        const temperature = Math.round(data.main.temp - 273.15);
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

        const temperatureHTML = `<h3>Now</h3><h2>${temperature}°C</h2>`;
        const cityNameHTML = `<h2>${cityName}</h2>`;
        const weatherHTML = `<h4>${description}</h4>`;
        tempDivInfo.innerHTML = temperatureHTML;
        cityDivInfo.innerHTML = cityNameHTML;
        weatherInfoDiv.innerHTML = weatherHTML;
        weatherIcon.src = iconUrl;
        weatherIcon.alt = description;

        showImage(div4);
    }
}

function displayHourlyForecast(hourlyData, div5) {
    const hourlyForecastDiv = document.getElementById(div5);
    hourlyForecastDiv.innerHTML = ''; 


    const next24Hours = hourlyData.slice(0, 5);

    next24Hours.forEach(item => {
        const dateTime = new Date(item.dt * 1000);
        const hour = dateTime.getHours();
        const temperature = Math.round(item.main.temp - 273.15);
        const iconCode = item.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

        const hourlyItemHtml = `
             
              <div class="d-flex">
                 <div class="flex-grow-1"><h3>${hour}:00</hr></div>
                 <div class="forcast-item"><img src="${iconUrl}" alt="Hourly Weather Icon"></div>
                 <div class="forcast-item"<span>${temperature}°C</span></div>
              </div>
        `;
        hourlyForecastDiv.innerHTML += hourlyItemHtml;
    });
}

function showImage(div4) {
    const weatherIcon = document.getElementById(div4);
    weatherIcon.style.display = 'block';
}