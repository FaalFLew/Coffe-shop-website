import '../css/Global.css'
import '../css/ProductCards.css'
import ProductCardItem from './ProductCardItem.js'; // import the image

const ProductCards = () => {
  return (
<main>
    <div className="cart-card-container"></div>

  <div className="products">

{/* create a function that displays elements from db
if empty then "no products to show here" message */}
   <ProductCardItem />
   <ProductCardItem />
   <ProductCardItem />
   <ProductCardItem />
   <ProductCardItem />
   <ProductCardItem />
   <ProductCardItem />
   <ProductCardItem />
   <ProductCardItem />
   <ProductCardItem />
   <ProductCardItem />
   <ProductCardItem />



    </div>
    

</main>
  )
}

export default ProductCards