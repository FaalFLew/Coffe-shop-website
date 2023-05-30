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
  
  return (
  <main className="shopping-cart-container">
    <h1 className='page-title'>Cart items</h1>
 <ul>
    {Array.isArray(cartItems) && cartItems.length > 0 ? (
        cartItems.map((product, key) => (
          <CartItem
            key={key}
            title={product.title}
            price={product.price}
            description={product.description}
            image={`${process.env.PUBLIC_URL}/img/${product.image}`}
            imgAlt={product.image_alt}
          />
        ))
      ) : (
        <p>You have no items in your cart</p>
      )}


  </ul>

<div className='button-container'>
<Link to="/shipping" className='explore-link'>Checkout</Link>
</div>
</main>
  )
}

export default Cart