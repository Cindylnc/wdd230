let currentYear = new Date().getFullYear();
document.querySelector("#year").textContent = currentYear;
document.querySelector("#lastUpdate").textContent = document.lastModified;


const headerdate = document.querySelector("#date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
headerdate.innerHTML = `<strong>Today is ${fulldate}</strong>.`;


function toggleMenu (){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;



// document.addEventListener("DOMContentLoaded", function(){
//     const today = newDate().getDay();
//     if(today === 6) {
//         const element = document.getElementById('banner');
//         element.style.display = 'block';
//     }

// })


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


// TES 1 LAST VISIT

// const msForDay = 86400000;
// const userVisit = document.getElementById("user-visit")

// const lastVisitTime = Number(window.localStorage.getItem("visittime-ls"));

// function calculateDays() {
//     const lastVisitInDays = Math.round((now.getTime() - lastVisitTime)/msForDay);
//     userVisit = $`| 🤗 Welcome back! Your last visit was ${lastVisitInDays} days ago |`;
// }
  
// if (lastVisitTime !== 0) {
//     calculateDays();
// } else {
//     userVisit.textContent = ` |  👋 Welcome to The PG Chamber!  This is your first visit   |`;
// }

// localStorage.setItem("lastVisitTime-ls",lastVisitTime);


// TEST 2 LAST VISIT

// const visitsDisplay = document.querySelector(".user-visit"); 
// let numVisits = Number(window.localStorage.getItem("visits-localstorage"));

// if (numVisits !== 0) {
//     visitsDisplay.textContent = numVisits;
// }
// else{
//     visitsDisplay.textContent = `This is your 1st visit`;
// }
// numVisits++;

// localStorage.setItem("visits-localstorage", numVisits);




const msForDay = 86400000;

const userVisit  = document.querySelector(".user-visit");
let lastVisitTime = Number(window.localStorage.getItem("visits-localstorage")); 

 function calculateDays() {
    const lastVisitInDays = Math.round((now.getTime() - lastVisitTime)/msForDay);
    const message = $`| 🤗 Welcome back! Your last visit was ${lastVisitInDays} days ago |`;
    return message
}

if (lastVisitTime !== 0) {
   calculateDays();
    } else {
        userVisit.textContent = ` |  👋 Welcome to The PG Chamber!  This is your first visit   |`;
     }

localStorage.setItem("visits-localstorage", lastVisitTime);