// Footer date & last update
let currentYear = new Date().getFullYear();
document.querySelector("#year").textContent = currentYear;
document.querySelector("#lastModifiedDate").textContent = document.lastModified;

// Toggle Menu
function toggleMenu (){
    document.getElementById("nav-menu").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");



}
const hamburgerBtn = document.getElementById("hamburgerBtn");
hamburgerBtn.addEventListener("click", toggleMenu);


