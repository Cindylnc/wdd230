const requestURL= 'json/directory.json';

function spotlightBus(companies){

    const filterBus = companies.filter(function (companies) {
        return companies.membership == "Gold Membership" ||
              companies.membership == "Silver Membership";
    });

    const shuffleBus = filterBus.sort(() => 0.5 - Math.random());
    displayBus(shuffleBus[0], ".spotlight1");
    displayBus(shuffleBus[1], ".spotlight2");
    displayBus(shuffleBus[2], ".spotlight3");
  }


  function displayBus(companies, element) {
    let compName = document.createElement('h3');
    let logo = document.createElement('img');
    let compPhone  = document.createElement('p');
    let hr = document.createElement('hr');
    let compWeb = document.createElement('a');

    compName.innerHTML = `${companies.name}`;
    compPhone .innerHTML = `${companies.phone}`;
    compWeb.textContent = `${companies.url}`;

    compName.setAttribute('class', 'large');
    logo.setAttribute('src', companies.logo); 
    logo.setAttribute('alt', `Logo of ${companies.name}`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '150');
    compWeb.setAttribute('href', `${companies.url}`);
    hr.style.margin = "15px";  

    const spotlightDiv = document.querySelector(element)
    spotlightDiv.appendChild(logo);
    spotlightDiv.appendChild(compName);
    spotlightDiv.appendChild(compPhone );
    spotlightDiv.appendChild(hr);
    spotlightDiv.appendChild(compWeb);

    spotlightDiv.removeChild(spotlightDiv.firstElementChild);
  }

  fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const companies = jsonObject['companies'];
    spotlightBus(companies);
  });





