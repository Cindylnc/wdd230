const jsonDirectory = 'json/directory.json';
const listBtn = document.querySelector(".listButton");
const gridBtn = document.querySelector(".gridButton");
const display = document.querySelector(".cards");



async function getDirectoryData() {
    const response = await fetch(jsonDirectory);
    const data = await response.json();
    // console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
    displayBusiness(data.companies);
  }
  
  getDirectoryData();

const displayBusiness = (companies) => {
  const cards = document.querySelector('div.cards');

  companies.forEach((business) => {
    let card = document.createElement('section');
    let logo = document.createElement('img');
    let h2 = document.createElement('h2');
    let compPhone = document.createElement('h4');
    let compAddress1 = document.createElement('p');
    let compAddress2 = document.createElement('p');
    let website = document.createElement("a");
    let membership = document.createElement('h3');


    h2.textContent = `${business.name}`;
    compPhone.textContent = `${business.phone}`;
    compAddress1.textContent = `${business.address1}`;
    compAddress2.textContent = `${business.address2}`;
    website.textContent = `${business.url}`;
    membership.textContent = `${business.membership}`;


    logo.setAttribute('src', business.logo);
    logo.setAttribute('alt', `Logo of ${business.name}`);
    logo.setAttribute('loading', 'lazy');
    // logo.setAttribute('width', '340');
    // logo.setAttribute('height', '440');
    website.setAttribute("href", `${business.url}`);
    website.setAttribute("target", "_blank");

    card.appendChild(logo);
    card.appendChild(h2);

    card.appendChild(compPhone);
    card.appendChild(compAddress1);
    card.appendChild(compAddress2);
    card.appendChild(website);
    card.appendChild(membership);
    

    cards.appendChild(card);
  }); 
}




gridBtn.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listBtn.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}


// const directory = document.querySelector('.cards')
// const dirpanelbutton = document.querySelector('.gridButton');
// const dirlistbutton = document.querySelector('.listButton');


// dirpanelbutton.addEventListener('click', () => {directory.classList.add('list')}, false);
// dirlistbutton.addEventListener('click', () => {directory.classList.remove('list')}, false);




