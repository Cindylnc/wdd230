// Footer last update
let currentYear = new Date().getFullYear();
document.querySelector("#year").textContent = currentYear;
document.querySelector("#lastUpdate").textContent = document.lastModified;


// Today's Date Banner
const headerdate = document.querySelector("#date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
headerdate.innerHTML = `<strong>Today is ${fulldate}</strong>.`;

// Toggle Menu
function toggleMenu (){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;


// Tuesdays & Wednesdays Message Banner
function newDate(){
    return new Date();
}

const today = newDate().getDay();

console.log(today);

document.addEventListener("DOMContentLoaded", function(){
    if (today === 1 || today === 2) {
        const element = document.getElementById('banner');
        element.style.display = 'block';
    }
})








// const userVisit  = document.querySelector(".user-visit");

// let lastVisitTime = localStorage.getItem("visits-localstorage"); 
// let currentTimestamp = Date.now();
// const msForDay = 86400000;
// const lastVisitInDays = Math.floor((currentTimestamp - lastVisitTime) / msForDay);
// localStorage.setItem("visits-localstorage", currentTimestamp);

//  function calculateDays() {
//     lastVisitInDays;
//     const message = `| 🤗 Welcome back! Your last visit was ${lastVisitInDays} days ago |`;
//     return message;
// }

// if (lastVisitInDays >= 1) {
//     userVisit.textContent = calculateDays();
//     } else {
//         userVisit.textContent = ` |  👋 Welcome to The PG Chamber!  This is your first visit   |`;
//      }

