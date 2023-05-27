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