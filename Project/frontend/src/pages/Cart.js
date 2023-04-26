import '../css/Global.css'
import '../css/Cart.css'
import logo from '../img/coffe cup.png';
import QuantityCounter from '../components/QuantityCounter.js';

const Cart = () => {
  return (
  <main >
 <ul>
   
 <li>
    <figure class="cart-item">
        <img
        src={logo}
        alt="Product Image"
        />
        <figcaption class="cart-item-details">
          <h2>Product Title</h2>
          <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
           efficitur suscipit erat a lacinia. onsectetur adipiscing elit. Vivamus
           efficitur suscipit erat a onsectetur adipiscing elit. Vivamus
           efficitur suscipit erat a 
          </p>
          <QuantityCounter />
          <span class="cart-item-price">Price: $5.99</span>
        </figcaption>
    </figure>
   </li>

   <li>
    <figure class="cart-item">
        <img
        src={logo}
        alt="Product Image"
        />
        <figcaption class="cart-item-details">
          <h2>Product Title</h2>
          <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
           efficitur suscipit erat a lacinia. onsectetur adipiscing elit. Vivamus
           efficitur suscipit erat a onsectetur adipiscing elit. Vivamus
           efficitur suscipit erat a 
          </p>
          <QuantityCounter />
          <span class="cart-item-price">Price: $5.99</span>
        </figcaption>
    </figure>
   </li>

   <li>
    <figure class="cart-item">
        <img
        src={logo}
        alt="Product Image"
        />
        <figcaption class="cart-item-details">
          <h2>Product Title</h2>
          <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
           efficitur suscipit erat a lacinia. onsectetur adipiscing elit. Vivamus
           efficitur suscipit erat a onsectetur adipiscing elit. Vivamus
           efficitur suscipit erat a 
          </p>
          <QuantityCounter />
          <span class="cart-item-price">Price: $5.99</span>
        </figcaption>
    </figure>
   </li>

   <li>
    <figure class="cart-item">
        <img
        src={logo}
        alt="Product Image"
        />
        <figcaption class="cart-item-details">
          <h2>Product Title</h2>
          <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
           efficitur suscipit erat a lacinia. onsectetur adipiscing elit. Vivamus
           efficitur suscipit erat a onsectetur adipiscing elit. Vivamus
           efficitur suscipit erat a 
          </p>
          <QuantityCounter />
          <span class="cart-item-price">Price: $5.99</span>
        </figcaption>
    </figure>
   </li>

   <li>
    <figure class="cart-item">
        <img
        src={logo}
        alt="Product Image"
        />
        <figcaption class="cart-item-details">
          <h2>Product Title</h2>
          <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
           efficitur suscipit erat a lacinia. onsectetur adipiscing elit. Vivamus
           efficitur suscipit erat a onsectetur adipiscing elit. Vivamus
           efficitur suscipit erat a 
          </p>
          <QuantityCounter />
          <span class="cart-item-price">Price: $5.99</span>
        </figcaption>
    </figure>
   </li>

  </ul>

</main>
  )
}

export default Cart