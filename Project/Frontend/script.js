
/*select all add to cart buttons and the cards container*/
const cartButtons = document.querySelectorAll('.add-to-cart');
const cartCardContainer = document.querySelector('.cart-card-container');
let cartItemCount = 0;


// popup card function to all 'Add to cart' buttons.
for(let i=0; i < cartButtons.length; i++) {
  cartButtons[i].addEventListener('click', clickedAddToCart);
}

//Show popup card when 'Add to cart' button is clicked.
function clickedAddToCart () { 
  //increment cart item count
  cartItemCount++;

  //create the card
  const cartCard = document.createElement('div');
  cartCard.classList.add('cart-card');
  cartCard.innerHTML = `
    <div class="cart-card-item-count">Cart Items: ${cartItemCount} </div>
    <button class="cart-card-close-button">X</button>
`;

  //add the card to container
  cartCardContainer.appendChild(cartCard);

  //remove card within 0.3s econds when close button is clicked
  const cartCardCloseButton = cartCard.querySelector('.cart-card-close-button');
  cartCardCloseButton.addEventListener('click', function() {
  // add class that gives CSS fade out effect
  card.classList.add('hide-cart');
  
  // remove card after 0.3 seconds
    setTimeout(function () {
    card.remove();
  }, 300); 
});
  
  //Remove card after 5 seconds within 0.3 seconds
  setTimeout(function () {
    cartCard.classList.add('hide-cart');
    setTimeout(() => {
      cartCard.remove();
    }, 300);
  }, 5000);
};


