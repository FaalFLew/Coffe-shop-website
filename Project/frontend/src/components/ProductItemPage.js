import '../css/ProductItemPage.css'
import '../css/Global.css'
import AddToCart from './AddToCart.js'; 
import QuantityCounter from './QuantityCounter.js';
import RecommendedProduct from './RecommendedProduct';
import logo from '../img/MockupProduct.png';

const ProductItemPage = () => {
  return (
<main>
    <div class="product-item">

        <div class="product-single-image-container"> 
          <figure class="product-single-image"> {/*added single to class */}
            <img src={logo} alt="Image of Coffee Bag " />
          </figure>
        </div>

        <div class="product-content-container"> 
         <div class="product-information-container">
            <div class="product-details">
              <h1 class="product-single-title">Product Name / Brand Inserted Here</h1> {/*added single to class */}
              <h2 class="product-description-header">Product Description</h2>
              <p class="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis, est eu tempus fringilla, ante ipsum accumsan elit, at laoreet urna dolor sed dui. Donec tempus sapien et euismod iaculis. Morbi eleifend augue quis dolor ultrices eleifend. Nunc tempus blandit orci, pharetra hendrerit elit venenatis vitae. Nunc dapibus nibh sed tincidunt eleifend. Morbi nec tincidunt quam, vel commodo turpis. Aliquam blandit mauris ac sem porta scelerisque. Sed mattis tincidunt augue vel condimentum. Quisque a metus blandit, aliquam mi sed, sodales magna. Maecenas vulputate nisi ut elit ornare consequat. Mauris molestie non tortor a egestas. Duis congue sed mauris eget pharetra.</p>
            </div>
            <div class="product-producer-details">
            <details><summary class="product-extra-details">Product Ingredients</summary> insert some ingredients</details>
            <details><summary class="product-extra-details">Producer Information</summary> insert production country, suggestions on usage and more.</details>
            </div>
         </div>
         <div className='product-price'> $5.99</div>

         <QuantityCounter />

         <div class="button-container">
         <AddToCart width={"100%"}/>
         </div>
        </div>
    </div>

<RecommendedProduct />

</main>
  )
}

export default ProductItemPage