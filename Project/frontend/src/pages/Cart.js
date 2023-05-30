import '../css/Global.css'
import '../css/Cart.css'
import CartItem from '../components/CartItem.js';
import { useEffect,useState } from 'react';
import {Link} from 'react-router-dom';


const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    const items = Object.values(cart);
    setCartItems(items);
    console.log(items)
  }, []);

  const removeCartItem = (id) => {
// Remove the cart item from local storage
const cart = JSON.parse(localStorage.getItem('cart')) || {};
delete cart[id];
localStorage.setItem('cart', JSON.stringify(cart));

// Update the cart items in the component state
const updatedCartItems = cartItems.filter((item) => item.id !== id);
setCartItems(updatedCartItems);  
} 
  
  return (
  <main className="shopping-cart-container">
    <h1 className='page-title'>Cart items</h1>
 <ul>
    {Array.isArray(cartItems) && cartItems.length > 0 ? (
        cartItems.map((product, key) => (
          <CartItem
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            image={`${process.env.PUBLIC_URL}/img/${product.image}`}
            imgAlt={product.image_alt}
            remove={() => removeCartItem(product.id)}
          />
        ))
      ) : (
        <p>You have no items in your cart</p>
      )}


  </ul>

<div className='cart-button-container'>
{Array.isArray(cartItems) && cartItems.length > 0 &&(
<Link to="/shipping" className='checkout-link'>Checkout</Link>)}
</div>
</main>
  )
}

export default Cart