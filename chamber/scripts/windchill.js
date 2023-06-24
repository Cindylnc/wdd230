
const weatherIcon = document.querySelector('#weather-icon');
const temp = document.querySelector('#w-temp');
const captionIcon = document.querySelector('figcaption');

const speedWind = document.querySelector('#win-speed');
const chillWind = document.querySelector('#wind-chill');



const apiKey = "92849eb154486d561f4e7af5317e0cdf"
const url = `https://api.openweathermap.org/data/2.5/weather?lat=40.3641&lon=-111.7385&units=imperial&appid=${apiKey}`;

async function apiFetch() {
    try {
      const response = await fetch(url);
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
    temp.innerHTML = `<strong>${weatherData.main.temp.toFixed(1)} &deg;F</strong>`;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    captionIcon.textContent = desc;
    const capitalizedDesc = desc
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
    captionIcon.textContent = capitalizedDesc;


    speedWind.textContent = `${weatherData.wind.speed}`;


    const windSpeed = parseFloat(document.querySelector("#win-speed").textContent);
    const temperature = parseFloat(document.querySelector("#w-temp").textContent);
    const WCformula = 35.74 + 0.6215 * temperature - 35.75 * windSpeed ** 0.16 + 0.4275 * temperature * windSpeed** 0.16
    if ((temperature <= 50) & (windSpeed >3)) 
        {
        windChill = WCformula.toFixed(0) +"°F";
        }
    else {
        windChill ="N/A";
        }
    document.getElementById("wind-chill").innerHTML = windChill;


  }

  apiFetch();

