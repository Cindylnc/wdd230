const jsonFruits = 'json/fruit.json';


async function fetchFruitData() {
    return fetch(jsonFruits)
      .then(response => response.json())
      .catch(error => {
        // console.log(error);
    });
}
  
// Get item name from json
function selectMenu(selectId, jsonData) {
    const selectElement = document.getElementById(selectId);
  
    jsonData.forEach(item => {
      const option = document.createElement('option');
      option.value = item.name;
      option.textContent = item.name;
      selectElement.appendChild(option);
    });
}
  

// Get total nutrition facts of user's order
function calculateTotalNutrition(data, selectedFruits) {
    let totalCalories = 0;
    let totalSugar = 0;
    let totalCarbs = 0;
    let totalProtein = 0;
    let totalFats = 0;  
    // Loop to add nutrition values from selected items  
    selectedFruits.forEach(fruitName => {    
        const selectedFruit = data.find(fruit => fruit.name === fruitName);
        if (selectedFruit) {
            totalCalories += selectedFruit.nutritions.calories;
            totalSugar += selectedFruit.nutritions.sugar;
            totalCarbs += selectedFruit.nutritions.carbohydrates;
            totalProtein += selectedFruit.nutritions.protein;
            totalFats += selectedFruit.nutritions.fat;
        }
        });  
    return { totalSugar, totalCalories, totalCarbs, totalProtein, totalFats };
}
  
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const orderConfirmation = document.querySelector(".order-conf"); 
  
    let fruitData = []; 
  
    // Fetch fruit data and show list on every fruit element
    fetchFruitData()
      .then(data => {
        fruitData = data;
        selectMenu('fruit-one', data);
        selectMenu('fruit-two', data);
        selectMenu('fruit-three', data);
      });
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Get user's input
      const firstName = form.fname.value;
      const lastName = form.lname.value;
      const email = form.email.value;
      const phone = form.phone.value;
      const fruitOne = form['fruit-one'].value;
      const fruitTwo = form['fruit-two'].value;
      const fruitThree = form['fruit-three'].value;
      const instructions = form.instructions.value;
  
      // Date
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleString();
  
      // Array with user's fruits
      const selectedFruits = [fruitOne, fruitTwo, fruitThree].filter(fruit => fruit !== "");
  

      const totalNutrition = calculateTotalNutrition(fruitData, selectedFruits);

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
      orderCaloriesElement.textContent = totalNutrition.totalCalories.toFixed(1);
      orderSugarsElement.textContent = totalNutrition.totalSugar.toFixed(1);
      orderCarbsElement.textContent = totalNutrition.totalCarbs.toFixed(1);
      orderProteinElement.textContent = totalNutrition.totalProtein.toFixed(1);
      orderFatsElement.textContent = totalNutrition.totalFats.toFixed(1);
  
      orderConfirmation.style.display = "block";
    });
});