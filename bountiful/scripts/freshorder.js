
// Function to get item name from fruit json
function selectMenu(selectId, jsonData) {
    const selectElement = document.getElementById(selectId);
    
    jsonData.forEach(item => {
        const option = document.createElement('option');
        option.value = item.name;
        option.textContent = item.name;
        selectElement.appendChild(option);
    });
    }
  // Fetch data from json file and show list on every fruit element
  fetch('json/fruit.json')
    .then(response => response.json())
    .then(data => {
      selectMenu('fruit-one', data);
      selectMenu('fruit-two', data);
      selectMenu('fruit-three', data);
    })
    .catch(error => console.error('Error fetching data:', error));


    