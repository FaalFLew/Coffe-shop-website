import React, { useState } from 'react';
import AddToCart from '../components/AddToCart.js'; 


const CardPopup = () => {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [cartCards, setCartCards] = useState([]);

  const closeCartCard = (cardId) => {
    setCartCards((prevCards) => prevCards.filter((card) => card.id !== cardId));
  };

  const createCartCard = () => {
    const cardId = Date.now();
    const card = (
      <div className="cart-card" key={cardId}>
        <div className="cart-card-item-count">Cart Items: {cartItemCount}</div>
        <button className="cart-card-close-button" onClick={() => closeCartCard(cardId)}>
          X
        </button>
      </div>
    );

    setCartCards((prevCards) => [...prevCards, { id: cardId, card }]);

    setTimeout(() => {
      closeCartCard(cardId);
    }, 6000);
  };

  const clickedAddToCart = () => {
    setCartItemCount((prevCount) => prevCount + 1);
    createCartCard();
  };

  return (
    <div className="cart-card-container">
      {cartCards.map((cart) => cart.card)}
      <AddToCart width={"100%"} clicked={clickedAddToCart}/>
    </div>
  );
};

export default CardPopup;
