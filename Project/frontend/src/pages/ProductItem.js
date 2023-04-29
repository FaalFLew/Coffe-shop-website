import '../css/ProductItemPage.css'
import '../css/Global.css'
import AddToCart from '../components/AddToCart.js'; 
import QuantityCounter from '../components/QuantityCounter.js';
import RecommendedProduct from '../components/RecommendedProduct';
import logo from '../img/MockupProduct.png';

const ProductItem = () => {
  return (
<main className="product-item-container">
    <div className="product-item">

        <div className="product-single-image-container"> 
          <figure className="product-single-image"> {/*added single to className */}
            <img src={logo} alt=" Coffee Bag " />
          </figure>
        </div>

        <div className="product-content-container"> 
         <div className="product-information-container">
            <div className="product-details">
              <h1 className="product-single-title">Product Name / Brand Inserted Here</h1> {/*added single to className */}
              <h2 className="product-description-header">Product Description</h2>
              <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis, est eu tempus fringilla, ante ipsum accumsan elit, at laoreet urna dolor sed dui. Donec tempus sapien et euismod iaculis. Morbi eleifend augue quis dolor ultrices eleifend. Nunc tempus blandit orci, pharetra hendrerit elit venenatis vitae. Nunc dapibus nibh sed tincidunt eleifend. Morbi nec tincidunt quam, vel commodo turpis. Aliquam blandit mauris ac sem porta scelerisque. Sed mattis tincidunt augue vel condimentum. Quisque a metus blandit, aliquam mi sed, sodales magna. Maecenas vulputate nisi ut elit ornare consequat. Mauris molestie non tortor a egestas. Duis congue sed mauris eget pharetra.</p>
            </div>
            <div className="product-producer-details">
            <details><summary className="product-extra-details">Product Ingredients</summary> insert some ingredients</details>
            <details><summary className="product-extra-details">Producer Information</summary> insert production country, suggestions on usage and more.</details>
            </div>
         </div>
         <div classNameName='product-price'> $5.99</div>

         <QuantityCounter />

         <div className="button-container">
         <AddToCart width={"100%"}/>
         </div>
        </div>
    </div>

<RecommendedProduct />

</main>
  )
}

export default ProductItem