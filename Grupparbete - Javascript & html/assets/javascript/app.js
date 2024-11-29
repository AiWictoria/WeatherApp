const apiUrlManila = "http://api.weatherapi.com/v1/forecast.json?key=&q=Manila&days=5&aqi=no&alerts=no";
const apiUrlStockholm = "http://api.weatherapi.com/v1/forecast.json?key=&q=Stockholm&days=5&aqi=no&alerts=no";
const apiUrlKyiv = "http://api.weatherapi.com/v1/forecast.json?key=&q=Kyiv&days=5&aqi=no&alerts=no";
const apiUrlDamascus = "http://api.weatherapi.com/v1/forecast.json?key=&q=Damascus&days=5&aqi=no&alerts=no";

async function checkWeatherManila(){
        const response = await fetch(apiUrlManila);
        
        
        var data = await response.json();
        
        console.log(data);
        
        document.querySelector(".cityManila").innerHTML = data.location.name;
        document.querySelector(".tempManila").innerHTML = Math.round(data.current.temp_c) + "°C";
        document.querySelector(".humidityManila").innerHTML = "Humidity: " + data.current.humidity + "%";
        document.querySelector(".windManila").innerHTML = "Wind speed: " + data.current.wind_kph + " km/h";
        document.querySelector(".mintempforecast1Manila").innerHTML = Math.round(data.forecast.forecastday[1].day.mintemp_c) + "°C";
        document.querySelector(".maxtempforecast1Manila").innerHTML = Math.round(data.forecast.forecastday[1].day.maxtemp_c) + "°C";
        document.querySelector(".mintempforecast2Manila").innerHTML = Math.round(data.forecast.forecastday[2].day.mintemp_c) + "°C";
        document.querySelector(".maxtempforecast2Manila").innerHTML = Math.round(data.forecast.forecastday[2].day.maxtemp_c) + "°C";
        document.querySelector(".mintempforecast3Manila").innerHTML = Math.round(data.forecast.forecastday[3].day.mintemp_c) + "°C";
        document.querySelector(".maxtempforecast3Manila").innerHTML = Math.round(data.forecast.forecastday[3].day.maxtemp_c) + "°C";
        document.querySelector(".mintempforecast4Manila").innerHTML = Math.round(data.forecast.forecastday[4].day.mintemp_c) + "°C";
        document.querySelector(".maxtempforecast4Manila").innerHTML = Math.round(data.forecast.forecastday[4].day.maxtemp_c) + "°C";
        
        const weekday = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
    
        const d1 = new Date(data.forecast.forecastday[1].date);
        const d2 = new Date(data.forecast.forecastday[2].date);
        const d3 = new Date(data.forecast.forecastday[3].date);
        const d4 = new Date(data.forecast.forecastday[4].date);

        let day1 = weekday[d1.getDay()];
        let day2 = weekday[d2.getDay()];
        let day3 = weekday[d3.getDay()];
        let day4 = weekday[d4.getDay()];

        document.querySelector(".dayforecast1Manila").innerHTML = day1;
        document.querySelector(".dayforecast2Manila").innerHTML = day2;
        document.querySelector(".dayforecast3Manila").innerHTML = day3;
        document.querySelector(".dayforecast4Manila").innerHTML = day4;
    }

    async function checkWeatherStockholm(){
        const response = await fetch(apiUrlStockholm);
        
        
        var data = await response.json();
        
        console.log(data);
        
        document.querySelector(".cityStockholm").innerHTML = data.location.name;
        document.querySelector(".tempStockholm").innerHTML = Math.round(data.current.temp_c) + "°C";
        document.querySelector(".humidityStockholm").innerHTML = "Humidity: " + data.current.humidity + "%";
        document.querySelector(".windStockholm").innerHTML = "Wind speed: " + data.current.wind_kph + " km/h";
        document.querySelector(".mintempforecast1Stockholm").innerHTML = Math.round(data.forecast.forecastday[1].day.mintemp_c) + "°C";
        document.querySelector(".maxtempforecast1Stockholm").innerHTML = Math.round(data.forecast.forecastday[1].day.maxtemp_c) + "°C";
        document.querySelector(".mintempforecast2Stockholm").innerHTML = Math.round(data.forecast.forecastday[2].day.mintemp_c) + "°C";
        document.querySelector(".maxtempforecast2Stockholm").innerHTML = Math.round(data.forecast.forecastday[2].day.maxtemp_c) + "°C";
        document.querySelector(".mintempforecast3Stockholm").innerHTML = Math.round(data.forecast.forecastday[3].day.mintemp_c) + "°C";
        document.querySelector(".maxtempforecast3Stockholm").innerHTML = Math.round(data.forecast.forecastday[3].day.maxtemp_c) + "°C";
        document.querySelector(".mintempforecast4Stockholm").innerHTML = Math.round(data.forecast.forecastday[4].day.mintemp_c) + "°C";
        document.querySelector(".maxtempforecast4Stockholm").innerHTML = Math.round(data.forecast.forecastday[4].day.maxtemp_c) + "°C";

        const weekday = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
    
        const d1 = new Date(data.forecast.forecastday[1].date);
        const d2 = new Date(data.forecast.forecastday[2].date);
        const d3 = new Date(data.forecast.forecastday[3].date);
        const d4 = new Date(data.forecast.forecastday[4].date);

        let day1 = weekday[d1.getDay()];
        let day2 = weekday[d2.getDay()];
        let day3 = weekday[d3.getDay()];
        let day4 = weekday[d4.getDay()];

        document.querySelector(".dayforecast1Stockholm").innerHTML = day1;
        document.querySelector(".dayforecast2Stockholm").innerHTML = day2;
        document.querySelector(".dayforecast3Stockholm").innerHTML = day3;
        document.querySelector(".dayforecast4Stockholm").innerHTML = day4;
    }

    async function checkWeatherKyiv(){
        const response = await fetch(apiUrlKyiv);
        
        
        var data = await response.json();
        
        console.log(data);

        document.querySelector(".cityKyiv").innerHTML = data.location.name;
        document.querySelector(".tempKyiv").innerHTML = Math.round(data.current.temp_c) + "°C";
        document.querySelector(".humidityKyiv").innerHTML = "Humidity: " + data.current.humidity + "%";
        document.querySelector(".windKyiv").innerHTML = "Wind speed: " + data.current.wind_kph + " km/h";
        document.querySelector(".mintempforecast1Kyiv").innerHTML = Math.round(data.forecast.forecastday[1].day.mintemp_c) + "°C";
        document.querySelector(".maxtempforecast1Kyiv").innerHTML = Math.round(data.forecast.forecastday[1].day.maxtemp_c) + "°C";
        document.querySelector(".mintempforecast2Kyiv").innerHTML = Math.round(data.forecast.forecastday[2].day.mintemp_c) + "°C";
        document.querySelector(".maxtempforecast2Kyiv").innerHTML = Math.round(data.forecast.forecastday[2].day.maxtemp_c) + "°C";
        document.querySelector(".mintempforecast3Kyiv").innerHTML = Math.round(data.forecast.forecastday[3].day.mintemp_c) + "°C";
        document.querySelector(".maxtempforecast3Kyiv").innerHTML = Math.round(data.forecast.forecastday[3].day.maxtemp_c) + "°C";
        document.querySelector(".mintempforecast4Kyiv").innerHTML = Math.round(data.forecast.forecastday[4].day.mintemp_c) + "°C";
        document.querySelector(".maxtempforecast4Kyiv").innerHTML = Math.round(data.forecast.forecastday[4].day.maxtemp_c) + "°C";

        const weekday = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
    
        const d1 = new Date(data.forecast.forecastday[1].date);
        const d2 = new Date(data.forecast.forecastday[2].date);
        const d3 = new Date(data.forecast.forecastday[3].date);
        const d4 = new Date(data.forecast.forecastday[4].date);

        let day1 = weekday[d1.getDay()];
        let day2 = weekday[d2.getDay()];
        let day3 = weekday[d3.getDay()];
        let day4 = weekday[d4.getDay()];

        document.querySelector(".dayforecast1Kyiv").innerHTML = day1;
        document.querySelector(".dayforecast2Kyiv").innerHTML = day2;
        document.querySelector(".dayforecast3Kyiv").innerHTML = day3;
        document.querySelector(".dayforecast4Kyiv").innerHTML = day4;

    }

    async function checkWeatherDamascus(){
        const response = await fetch(apiUrlDamascus);
        
        
        var data = await response.json();
        
        console.log(data);

        document.querySelector(".cityDamascus").innerHTML = data.location.name;
        document.querySelector(".tempDamascus").innerHTML = Math.round(data.current.temp_c) + "°C";
        document.querySelector(".humidityDamascus").innerHTML = "Humidity: " + data.current.humidity + "%";
        document.querySelector(".windDamascus").innerHTML = "Wind speed: " + data.current.wind_kph + " km/h";
        document.querySelector(".mintempforecast1Damascus").innerHTML = Math.round(data.forecast.forecastday[1].day.mintemp_c) + "°C";
        document.querySelector(".maxtempforecast1Damascus").innerHTML = Math.round(data.forecast.forecastday[1].day.maxtemp_c) + "°C";
        document.querySelector(".mintempforecast2Damascus").innerHTML = Math.round(data.forecast.forecastday[2].day.mintemp_c) + "°C";
        document.querySelector(".maxtempforecast2Damascus").innerHTML = Math.round(data.forecast.forecastday[2].day.maxtemp_c) + "°C";
        document.querySelector(".mintempforecast3Damascus").innerHTML = Math.round(data.forecast.forecastday[3].day.mintemp_c) + "°C";
        document.querySelector(".maxtempforecast3Damascus").innerHTML = Math.round(data.forecast.forecastday[3].day.maxtemp_c) + "°C";
        document.querySelector(".mintempforecast4Damascus").innerHTML = Math.round(data.forecast.forecastday[4].day.mintemp_c) + "°C";
        document.querySelector(".maxtempforecast4Damascus").innerHTML = Math.round(data.forecast.forecastday[4].day.maxtemp_c) + "°C";

        const weekday = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
    
        const d1 = new Date(data.forecast.forecastday[1].date);
        const d2 = new Date(data.forecast.forecastday[2].date);
        const d3 = new Date(data.forecast.forecastday[3].date);
        const d4 = new Date(data.forecast.forecastday[4].date);

        let day1 = weekday[d1.getDay()];
        let day2 = weekday[d2.getDay()];
        let day3 = weekday[d3.getDay()];
        let day4 = weekday[d4.getDay()];

        document.querySelector(".dayforecast1Damascus").innerHTML = day1;
        document.querySelector(".dayforecast2Damascus").innerHTML = day2;
        document.querySelector(".dayforecast3Damascus").innerHTML = day3;
        document.querySelector(".dayforecast4Damascus").innerHTML = day4;
    }



checkWeatherDamascus();
checkWeatherKyiv();
checkWeatherManila();
checkWeatherStockholm()
