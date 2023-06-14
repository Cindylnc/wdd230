const userVisit  = document.querySelector(".user-visit");
let currentTimestamp = Date.now();

let lastVisitTime = localStorage.getItem("visits-localstorage");
if (lastVisitTime !== null) {
  const msForDay = 86400000;
  const lastVisitInDays = Math.floor((currentTimestamp - lastVisitTime) / msForDay);
  userVisit.textContent = `| 🤗 Welcome back! Your last visit was ${lastVisitInDays} days ago |`;
}
else {
  userVisit.textContent = ` |  👋 Welcome to The PG Chamber!  This is your first visit   |`;
}

localStorage.setItem("visits-localstorage", currentTimestamp);