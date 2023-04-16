import logo from '../img/MockupProduct.png';
import AddToCart from './AddToCart.js';
import '../css/Global.css'
import '../css/ProductCardItem.css'

const ProductCardItem = ({img, title, category, price,link}) => {
  return (
    <article className="product-card">
    <a href={link} className="product-card-page">
    <div className="product-card-container">
    <figure className="product-image">
      <img src={img} alt="Coffee Bag" />
    </figure>
    <header className="product-card-info">
      <h2 className="product-title">{title}</h2>
        <span className="product-category">Category | {category}</span>
        <span className="price">{price}</span>
        <AddToCart />
    </header>
    </div>
    </a>
  </article>

  )
}

ProductCardItem.defaultProps = {
    img:logo,
    title: 'Coffee Bag',
    category:'Arabica',
    price:'$5.99'
}

export default ProductCardItem