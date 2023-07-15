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
    // https://openweathermap.org/forecast5 | Openweather provides data in a 3 hour interval | tomorrow = 8 / day after tomorrow = 16 / two days after tomorrow = 24
    const forecastElements = [
      {
        container: '.tomorrow',
        dataIndex: 8,
        offset: 1,
      },
      {
        container: '.intwo-days',
        dataIndex: 16,
        offset: 2,
      },
      {
        container: '.inthree-days',
        dataIndex: 24,
        offset: 3,
      },
    ];
  
    forecastElements.forEach((element) => {
      const { container, dataIndex, offset } = element;
      const forecastDayElement = document.querySelector(`${container} .day`);
      const forecastIconElement = document.querySelector(`${container} .weather-icon`);
      const forecastTempElement = document.querySelector(`${container} .temperature`);
  
      const forecastDataItem = forecastList[dataIndex];
      forecastDayElement.textContent = getDayOfWeek(offset);
      forecastTempElement.innerHTML = `<strong>${forecastDataItem.main.temp.toFixed(0)} &deg;F</strong>`;
      const iconSrc = `https://openweathermap.org/img/w/${forecastDataItem.weather[0].icon}.png`;
      forecastIconElement.setAttribute('src', iconSrc);
      forecastIconElement.setAttribute('alt', forecastDataItem.weather[0].description);
    });
  }


// calculate day of the week relative to the current day
function getDayOfWeek(offset = 0) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date().getDay();
    const dayIndex = (today + offset) % 7; //value within the range of 0 to 6
    return daysOfWeek[dayIndex];
  }



  apiFetch();
