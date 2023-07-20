


// Function to get nutrition Facts
    function calculateTotalNutrition(data, fruitOne, fruitTwo, fruitThree) {
        let totalCalories = 0;
        let totalSugar = 0;
        let totalCarbs = 0;
        let totalProtein = 0;
        let totalFats = 0;
      
        // Loop through the data to find the selected fruits and sum up their nutrition values
        data.forEach(fruit => {
          if (fruit.name === fruitOne || fruit.name === fruitTwo || fruit.name === fruitThree) {
            totalCalories += fruit.nutritions.calories;
            totalSugar += fruit.nutritions.sugar;
            totalCarbs += fruit.nutritions.carbohydrates;
            totalProtein += fruit.nutritions.protein;
            totalFats += fruit.nutritions.fat;
          }
        });
      
        return { totalSugar, totalCalories, totalCarbs, totalProtein, totalFats };
      }
    





    


    document.addEventListener("DOMContentLoaded", function () {

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






        const form = document.querySelector("form");
        const orderConfirmation = document.querySelector(".order-conf");
      
        form.addEventListener("submit", function (event) {
          event.preventDefault();
      
          // Get the values entered by the user
          const firstName = form.fname.value;
          const lastName = form.lname.value;
          const email = form.email.value;
          const phone = form.phone.value;
          const fruitOne = form['fruit-one'].value;
          const fruitTwo = form['fruit-two'].value;
          const fruitThree = form['fruit-three'].value;
          const instructions = form.instructions.value;
          
          
      
          // Get the current date and format it
          const currentDate = new Date();
          const formattedDate = currentDate.toLocaleString();
        //   Get Total nutrition facts
          const totalNutrition = calculateTotalNutrition(data, fruitOne, fruitTwo, fruitThree);
      
          // Display the order confirmation
          const orderDateElement = orderConfirmation.querySelector(".order-date");
          const orderNameElement = orderConfirmation.querySelector(".order-name");
          const orderEmailElement = orderConfirmation.querySelector(".order-email");
          const orderPhoneElement = orderConfirmation.querySelector(".order-phone");
          const orderFruitOneElement = orderConfirmation.querySelector(".order-fruitone");
          const orderFruitTwoElement = orderConfirmation.querySelector(".order-fruittwo");
          const orderFruitThreeElement = orderConfirmation.querySelector(".order-fruitthree");
          const orderInstructionsElement = orderConfirmation.querySelector(".order-instructions");
          const orderCaloriesElement = orderConfirmation.querySelector(".order-calories");
          const orderSugarsElement = orderConfirmation.querySelector(".order-sugars");
          const orderCarbsElement = orderConfirmation.querySelector(".order-carbs");
          const orderProteinElement = orderConfirmation.querySelector(".order-protein");
          const orderFatsElement = orderConfirmation.querySelector(".order-fat");
    
      
          orderDateElement.textContent = formattedDate;
          orderNameElement.textContent = `${firstName} ${lastName}`;
          orderEmailElement.textContent = email;
          orderPhoneElement.textContent = phone;
          orderFruitOneElement.textContent = fruitOne;
          orderFruitTwoElement.textContent = fruitTwo;
          orderFruitThreeElement.textContent = fruitThree;
          orderInstructionsElement.textContent = instructions;
          orderCaloriesElement.textContent = totalNutrition.totalCalories;
          orderSugarsElement.textContent = totalNutrition.totalSugar;
          orderCarbsElement.textContent = totalNutrition.totalCarbs;
          orderProteinElement.textContent = totalNutrition.totalProtein;
          orderFatsElement.textContent = totalNutrition.totalFats;
            
          orderConfirmation.style.display = "block";
        });
      });
    })
    .catch(error => console.error('Error fetching data:', error));