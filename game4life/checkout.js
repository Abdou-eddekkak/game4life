document.addEventListener('DOMContentLoaded', function() {
  function getCartItems() {
    return JSON.parse(localStorage.getItem('cart')) || [];
  }

  function calculateTotalPrice(cartItems) {
    let totalPrice = 0;
    for (let item of cartItems) {
      totalPrice += item.price;
    }
    return totalPrice.toFixed(2);
  }

  function displayCheckoutSummary(cartItems, totalPrice) {
    const cartItemsList = document.getElementById('cart-items');
    const totalElement = document.getElementById('total-price');

    cartItemsList.innerHTML = '';
    for (let item of cartItems) {
      const listItem = document.createElement('div');
      listItem.textContent = `${item.title} - $${item.price.toFixed(2)}`;
      cartItemsList.appendChild(listItem);
    }

    totalElement.textContent = `$${totalPrice}`;
  }

  const cartItems = getCartItems();
  const totalPrice = calculateTotalPrice(cartItems);

  displayCheckoutSummary(cartItems, totalPrice);

  const checkoutForm = document.getElementById('checkout-form');
  checkoutForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Simulate a failed purchase for demonstration purposes
    const purchaseFailed = false; // Set this to 'false' to simulate a successful purchase

    if (!purchaseFailed) {
      // If the purchase is successful
      alert('Order placed successfully!');
      localStorage.removeItem('cart'); // Clear cart after placing order
      window.location.href = 'index.html'; // Redirect to the home page after order placement
    } else {
      // If the purchase fails
      alert('Failed to process the purchase. Please try again later.');
    }
  });
});
