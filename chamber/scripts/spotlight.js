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


  function displayBus(companies, nose) {
// CHnage variable names **********************
    let compName = document.createElement('h3');
    let logo = document.createElement('img');

    let hr = document.createElement('hr');
    let pSpotinfo = document.createElement('p');
    let a = document.createElement('a');

    compName.innerHTML = `${companies.name}`;
    compName.setAttribute('class', 'large');

    logo.setAttribute('src', companies.logo);
    // logo.setAttribute('class', 'spotlightImg');  
    logo.setAttribute('alt', `Logo of ${companies.name}`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '150');
    // logo.setAttribute('height', '240');
  



 

    hr.style.margin = "2px";

    pSpotinfo.innerHTML += companies.phone + " | ";
    pSpotinfo.classList.add('spotinfo');

    a.textContent = "website";
    a.setAttribute('href', "#");
  
    pSpotinfo.appendChild(a);

    // update nose name and change spotlight container name
    const spotlightContainer = document.querySelector(nose)

    spotlightContainer.removeChild(spotlightContainer.firstElementChild);
  
    spotlightContainer.appendChild(logo);
    spotlightContainer.appendChild(compName);

    spotlightContainer.appendChild(hr);
    spotlightContainer.appendChild(pSpotinfo);



  }

  fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const companies = jsonObject['companies'];
    spotlightBus(companies);
  });





