const temp = document.querySelector('.temperature');
const conditionDesc = document.querySelector('.condition');
const humidity = document.querySelector('.humidity');
const weatherIcon = document.querySelector('.weather-icon');
// const tomorrow = document.querySelector('.tomorrow');
// const dayAfterTomorrow = document.querySelector('.dayafter-tomorrow');
// const twoAfterTomorrow = document.querySelector('.twoafter-tomorrow');

const apiKey = "92849eb154486d561f4e7af5317e0cdf"
const city = 'Carlsbad';
const countryCode = 'US';
const urlCurrent =  `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}&units=imperial`;
const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apiKey}&units=imperial`;


async function apiFetch() {
    try {
        try {
            const [currentResponse, forecastResponse] = await Promise.all([
                fetch(urlCurrent),
                fetch(urlForecast),
            ]);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }


  function  displayResults(weatherData) {
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



    const weatherDataList = weatherData.list;
    const tomorrowData = weatherDataList[8];
    const tomorrowDayElement = document.querySelector('.tomorrow .day');
    const tomorrowIconElement = document.querySelector('.tomorrow .weather-icon');
    const tomorrowTempElement = document.querySelector('.tomorrow .temperature');

    tomorrowDayElement.textContent = getDayOfWeek(tomorrowData.dt);
    tomorrowTempElement.innerHTML = `<strong>${tomorrowData.main.temp.toFixed(0)} &deg;F</strong>`;
    const iconsrctomorrow = `https://openweathermap.org/img/w/${tomorrowData.weather[0].icon}.png`;
    tomorrowIconElement.setAttribute('src', iconsrctomorrow);
    tomorrowIconElement.setAttribute('alt', tomorrowData.weather[0].description);




  }


//   function displayForecast(forecastData) {
//     const forecastList = forecastData.list;
//     // https://openweathermap.org/forecast5 
//     // Openweather provides data in a 3 hour interval
//     // tomorrow = 8 / day after tomorrow = 16 / two days after tomorrow = 24
//     const tomorrowData = forecastList[8]; 
//     // const dayAfterTomorrowData = forecastList[16]; 
//     // const twoAfterTomorrowData = forecastList[24]; 

//     const tomorrowDayElement = document.querySelector('.tomorrow .day');
//     const tomorrowIconElement = document.querySelector('.tomorrow .weather-icon');
//     const tomorrowTempElement = document.querySelector('.tomorrow .temperature');

//     tomorrowDayElement.textContent = getDayOfWeek(tomorrowData.dt);
//     tomorrowTempElement.innerHTML = `<strong>${tomorrowData.main.temp.toFixed(0)} &deg;F</strong>`;
//     const iconsrc = `https://openweathermap.org/img/w/${tomorrowData.weather[0].icon}.png`;
//     tomorrowIconElement.setAttribute('src', iconsrc);
//     tomorrowIconElement.setAttribute('alt', tomorrowData.weather[0].description);



//     displayWeather(tomorrow, tomorrowData);
//     displayWeather(dayAfterTomorrow, dayAfterTomorrowData);
//     displayWeather(twoAfterTomorrow, twoAfterTomorrowData);
//   }

//   function displayWeather(element, weatherData) {
//     const dayElement = element.querySelector('.day');
    
//     const iconElement = element.querySelector('.weather-icon');
//     const temperatureElement = element.querySelector('.temperature');
  
//     const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
//     const temperature = `${weatherData.main.temp.toFixed(0)} °F` ;
  
//     dayElement.textContent = getDayOfWeek(weatherData.dt_txt);
//     iconElement.setAttribute('src', iconsrc);
//     iconElement.setAttribute('alt', desc);

//   }

  function getDayOfWeek(dateString) {
    const date = new Date(dateString);
    const options = { weekday: 'long' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }




  apiFetch();
