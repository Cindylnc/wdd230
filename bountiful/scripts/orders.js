// Add up number of orders in localStorage
function getOrderCount() {
    let orderCount = getStoredOrderCount();
    // if (orderCount) {
    //     orderCount = orderCount + 1;
    //   } else {
    //     orderCount = 1;
    //   }
    // orderCount = orderCount orderCount + 1 : 1;
    orderCount = orderCount ? orderCount + 1 : 1;
    localStorage.setItem('orderCount', orderCount);
  }
  
  // Get result from LocalStorage
  function getStoredOrderCount() {
    return parseInt(localStorage.getItem('orderCount')) || 0;
  }
  
  // Display result on index page
  function displayOrderCount() {
    const orderCountSpan = document.querySelector('.orders-submitted');
    if (orderCountSpan) {
      const orderCount = getStoredOrderCount();
      orderCountSpan.textContent = orderCount;
    }
  }
  

  window.addEventListener('load', displayOrderCount);