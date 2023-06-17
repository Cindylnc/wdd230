const jsonDirectory = 'json/directory.json';

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



    // let card = document.createElement('section');
    // let h2 = document.createElement('h2');
    // let birthPlace = document.createElement('p');
    // let birthDate = document.createElement('p');
    // let deathdate = document.createElement('p');
    // let portrait = document.createElement('img');
  

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

