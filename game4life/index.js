document.addEventListener('DOMContentLoaded', function() {
  const buyButtons = document.querySelectorAll('.buy-button');
  let cart = JSON.parse(localStorage.getItem('cart')) || []; // Array to store items in the cart

  buyButtons.forEach(button => {
    button.addEventListener('click', function() {
      const gameTitle = this.getAttribute('data-game');
      const price = parseFloat(this.getAttribute('data-price'));

      // Check if the item already exists in the cart
      const existingItem = cart.find(item => item.title === gameTitle);
      if (existingItem) {
        alert(`${gameTitle} is already in your cart!`);
      } else {
        if (confirm(`Do you want to buy ${gameTitle} for ${price}?`)) {
          cart.push({ title: gameTitle, price: price }); // Add item to cart array
          updateCartDisplay(); // Update the cart display
          saveCartToLocalStorage(); // Save updated cart to local storage
        } else {
          alert('Purchase canceled.');
        }
      }
    });
  });

  function updateCartDisplay() {
    // Update the cart count display
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
      cartCount.textContent = cart.length.toString();
    }
  }

  function saveCartToLocalStorage() {
    // Save the cart to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  const checkoutButton = document.getElementById('checkout-button');
  if (checkoutButton) {
    checkoutButton.addEventListener('click', function() {
      window.location.href = 'checkout.html';
    });
  }
});
