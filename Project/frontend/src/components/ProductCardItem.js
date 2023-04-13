import logo from '../img/MockupProduct.png'; // import the image
import AddToCart from './AddToCart.js'; // import the image
import '../css/Global.css'
import '../css/ProductCards.css'

const ProductCardItem = ({img, title, category, price}) => {
  return (
    <article className="product-card">
    <a href="#home" className="product-card-page">
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
    title: 'Coffe Bag',
    category:'Arabica',
    price:'$5.99'
}

export default ProductCardItem