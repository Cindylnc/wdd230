const temp = document.querySelector('.temperature');
const conditionDesc = document.querySelector('.condition');
const humidity = document.querySelector('.humidity');
const weatherIcon = document.querySelector('.weather-icon');

const apiKey = "92849eb154486d561f4e7af5317e0cdf"
const city = 'Carlsbad';
const countryCode = 'US';
const currentWeatherUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}&units=imperial`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apiKey}&units=imperial`;


async function apiFetch() {
    try {
        const [currentWeatherResponse, forecastResponse] = await Promise.all([
            fetch(currentWeatherUrl),
            fetch(forecastUrl)
        ]);

        if (currentWeatherResponse.ok && forecastResponse.ok) {
            const currentWeatherData = await currentWeatherResponse.json();
            const forecastData = await forecastResponse.json();
            displayCurrentWeather(currentWeatherData);
            displayForecast(forecastData);
        } else {
            throw Error('Failed to fetch weather data');
        }
    } catch (error) {
        // console.log(error);
    }
}

  function  displayCurrentWeather(weatherData) {
    temp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)} &deg;F</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    conditionDesc .textContent = desc;
    const capitalizedDesc = desc
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
    conditionDesc .textContent = capitalizedDesc;
    humidity.textContent = `Humidity: ${weatherData.main.humidity}%`;
  }


  function displayForecast(forecastData) {
    const forecastList = forecastData.list;
    // https://openweathermap.org/forecast5 
    // Openweather provides data in a 3 hour interval
    // tomorrow = 8 / day after tomorrow = 16 / two days after tomorrow = 24
    const tomorrowData = forecastList[8]; 
    const InTwoDaysData = forecastList[16]; 
    const InThreeDaysData = forecastList[24]; 
    // TOMORROW
    const tomorrowDayElement = document.querySelector('.tomorrow .day');
    const tomorrowIconElement = document.querySelector('.tomorrow .weather-icon');
    const tomorrowTempElement = document.querySelector('.tomorrow .temperature');
    tomorrowDayElement.textContent = getDayOfWeek();
    tomorrowTempElement.innerHTML = `<strong>${tomorrowData.main.temp.toFixed(0)} &deg;F</strong>`;
    const iconOnesrc = `https://openweathermap.org/img/w/${tomorrowData.weather[0].icon}.png`;
    tomorrowIconElement.setAttribute('src', iconOnesrc);
    tomorrowIconElement.setAttribute('alt', tomorrowData.weather[0].description);
    // IN 2 DAYS
    const InTwoDaysElement = document.querySelector('.intwo-days .day');
    const InTwoDaysIconElement = document.querySelector('.intwo-days .weather-icon');
    const InTwoDaysTempElement = document.querySelector('.intwo-days .temperature');
    InTwoDaysElement.textContent = (getDayOfWeek(+1)+1);
    InTwoDaysTempElement.innerHTML = `<strong>${InTwoDaysData.main.temp.toFixed(0)} &deg;F</strong>`;
    const iconTwosrc = `https://openweathermap.org/img/w/${InTwoDaysData.weather[0].icon}.png`;
    InTwoDaysIconElement.setAttribute('src', iconTwosrc);
    InTwoDaysIconElement.setAttribute('alt', InTwoDaysData.weather[0].description);
    // IN 3 DAYS
    const InThreeDaysDayElement = document.querySelector('.inthree-days .day');
    const InThreeDaysIconElement = document.querySelector('.inthree-days .weather-icon');
    const InThreeDaysTempElement = document.querySelector('.inthree-days .temperature');
    InThreeDaysDayElement.textContent = getDayOfWeek(InThreeDaysData.dt);
    InThreeDaysTempElement.innerHTML = `<strong>${InThreeDaysData.main.temp.toFixed(0)} &deg;F</strong>`;
    const iconThreesrc = `https://openweathermap.org/img/w/${InThreeDaysData.weather[0].icon}.png`;
    InThreeDaysIconElement.setAttribute('src', iconThreesrc);
    InThreeDaysIconElement.setAttribute('alt', InThreeDaysData.weather[0].description);
  }



//   function getDayOfWeek(dateString) {
//     const date = new Date(dateString);
//     const options = { weekday: 'long' };
//     return new Intl.DateTimeFormat('en-US', options).format(date);
//   }

  function getDayOfWeek() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date().getDay();
    return daysOfWeek[today];
  }



  apiFetch();
