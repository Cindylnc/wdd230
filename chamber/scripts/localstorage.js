// const userVisit  = document.querySelector(".user-visit");
// let currentTimestamp = Date.now();

// let lastVisitTime = localStorage.getItem("visits-localstorage");
// if (lastVisitTime !== null) {
//   const msForDay = 86400000;
//   const lastVisitInDays = Math.floor((currentTimestamp - lastVisitTime) / msForDay);
//   userVisit.textContent = `| 🤗 Welcome back! Your last visit was ${lastVisitInDays} days ago |`;
// }
// else {
//   userVisit.textContent = ` |  👋 Welcome to The PG Chamber!  This is your first visit   |`;
// }

// localStorage.setItem("visits-localstorage", currentTimestamp);




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






const userVisit = document.querySelector(".user-visit");

let lastVisitTime = localStorage.getItem("visits-localstorage");
let currentTimestamp = Date.now();
const msForDay = 86400000;

if (lastVisitTime === null) {
localStorage.setItem("visits-localstorage", currentTimestamp);
userVisit.textContent = " |   👋 Welcome to The PG Chamber! This is your first visit   |";
} else {
const lastVisitInDays = Math.floor((currentTimestamp - lastVisitTime) / msForDay);
localStorage.setItem("visits-localstorage", currentTimestamp);

function calculateDays() {
const message = `| 🤗 Welcome back! Days since your last visit: ${lastVisitInDays} |`;
return message;
}

userVisit.textContent = calculateDays();
}