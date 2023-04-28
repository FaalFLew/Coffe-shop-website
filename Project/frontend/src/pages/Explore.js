import '../css/Global.css'
import '../css/Explore.css'
import ProductCardItem from '../components/ProductCardItem.js';

const Explore = () => {
  return (
<main class="explore-products">
    <div className="cart-card-container"></div>

  <div className="products">

{/* create a function that displays elements from db
if empty then "no products to show here" message */}
   <ProductCardItem source={"/productItem"} />
   <ProductCardItem img="https://www.shutterstock.com/image-photo/harbor-city-trondheim-norway-260nw-1186327096.jpg"/>
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

export default Explore