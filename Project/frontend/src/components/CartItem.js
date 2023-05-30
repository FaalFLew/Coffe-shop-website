import QuantityCounter from './QuantityCounter';

const CartItem = ({image, imgAlt, title, description, price}) => {
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
    </figure>
   </li> 
    )
}

export default CartItem