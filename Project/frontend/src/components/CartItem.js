import QuantityCounter from './QuantityCounter';
import '../css/CartItem.css'
const CartItem = ({image, imgAlt, title, description, price,remove}) => {
  return (
<li>
    <figure className="cart-item">
        <img
        src={image}
        alt={imgAlt}
        />
        <figcaption className="cart-item-details">
          <h2>{title}</h2>
          <p>
           {description}
          </p>
          <QuantityCounter />
          <span className="cart-item-price">Price: {price}</span>
        </figcaption>
        <button className='remove-cart-item' onClick={remove}>X</button>

    </figure>
   </li> 
    )
}

export default CartItem